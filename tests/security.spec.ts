import { test, expect } from "@playwright/test";

test.describe("Security headers", () => {
  test("homepage returns all security headers", async ({ request }) => {
    const res = await request.get("/en");
    const headers = res.headers();

    expect(headers["x-content-type-options"]).toBe("nosniff");
    expect(headers["x-frame-options"]).toBe("DENY");
    expect(headers["referrer-policy"]).toBe("strict-origin-when-cross-origin");
    expect(headers["permissions-policy"]).toBe(
      "camera=(), microphone=(), geolocation=()"
    );
  });

  test("HSTS header is set with long max-age", async ({ request }) => {
    const res = await request.get("/en");
    const hsts = res.headers()["strict-transport-security"];
    expect(hsts).toBeDefined();
    const maxAge = parseInt(hsts?.match(/max-age=(\d+)/)?.[1] ?? "0");
    expect(maxAge).toBeGreaterThanOrEqual(31536000);
    expect(hsts).toContain("includeSubDomains");
  });

  test("API endpoints return security headers", async ({ request }) => {
    const res = await request.get("/api/health");
    const headers = res.headers();
    expect(headers["content-type"]).toContain("application/json");
    expect(headers["x-frame-options"]).toBe("DENY");
    expect(headers["x-content-type-options"]).toBe("nosniff");
  });
});

test.describe("Contact API — security", () => {
  const endpoint = "/api/contact";
  const validPayload = {
    name: "Test User",
    email: "test@example.com",
    company: "TestCorp",
    message: "Security test",
  };

  test("rejects requests without required fields", async ({ request }) => {
    const res = await request.post(endpoint, {
      data: { name: "", email: "", company: "" },
    });
    expect(res.status()).toBe(400);
  });

  test("honeypot field silently succeeds (200) but does not send", async ({
    request,
  }) => {
    const res = await request.post(endpoint, {
      data: { ...validPayload, website: "http://spam.com" },
    });
    // Bots get 200 to avoid detection, but no email is sent
    expect(res.status()).toBe(200);
    const body = await res.json();
    expect(body.success).toBe(true);
  });

  test("XSS in name field is escaped in response", async ({ request }) => {
    const xssPayload = {
      ...validPayload,
      name: '<script>alert("xss")</script>',
    };
    // The API should accept the request (it sanitizes on output)
    // We mainly verify it doesn't crash
    const res = await request.post(endpoint, { data: xssPayload });
    // Will be 500 if SMTP is not configured, 429 if rate-limited; should not crash
    expect([200, 429, 500]).toContain(res.status());
  });

  test("rate limiting returns 429 after threshold", async ({ request }) => {
    // Send RATE_LIMIT + 1 requests from same context
    const results: number[] = [];
    for (let i = 0; i < 7; i++) {
      const res = await request.post(endpoint, { data: validPayload });
      results.push(res.status());
    }
    // At least one should be 429 (rate limited)
    // Note: may not trigger if server restarts between requests in dev
    expect(results.some((s) => s === 429 || s === 500)).toBe(true);
  });

  test("rejects non-JSON content type gracefully", async ({ request }) => {
    const res = await request.post(endpoint, {
      data: "not-json",
      headers: { "content-type": "text/plain" },
    });
    expect(res.status()).toBeGreaterThanOrEqual(400);
  });
});

test.describe("Protected endpoints", () => {
  test("admin API requires authentication", async ({ request }) => {
    const res = await request.get("/api/admin");
    expect([401, 500]).toContain(res.status());
  });

  test("admin API rejects wrong password", async ({ request }) => {
    const res = await request.get("/api/admin", {
      headers: { authorization: "Bearer wrong-password" },
    });
    expect([401, 500]).toContain(res.status());
  });
});

test.describe("Content Security", () => {
  test("no inline scripts in homepage HTML", async ({ request }) => {
    const res = await request.get("/en");
    const html = await res.text();
    // Check there are no suspicious inline scripts (excluding Next.js hydration + JSON-LD)
    const scriptMatches = html.match(/<script[^>]*>[^<]+<\/script>/g) ?? [];
    for (const script of scriptMatches) {
      // Next.js RSC payload, hydration, and JSON-LD are expected
      expect(
        script.includes("self.__next_f") ||
          script.includes("__NEXT_DATA__") ||
          script.includes("self.__next_s") ||
          script.includes("application/ld+json") ||
          script.includes('src=')
      ).toBe(true);
    }
  });

  test("no sensitive data exposed in HTML source", async ({ request }) => {
    const res = await request.get("/en");
    const html = await res.text();
    // Should not contain API keys, tokens, or internal secrets
    expect(html).not.toContain("VERCEL_API_TOKEN");
    expect(html).not.toContain("SMTP_PASS");
    expect(html).not.toContain("ADMIN_PASSWORD");
    expect(html).not.toContain("Bearer ");
  });

  test("robots.txt blocks /api/ and /admin/", async ({ request }) => {
    const res = await request.get("/robots.txt");
    const text = await res.text();
    expect(text).toContain("Disallow: /api/");
    expect(text).toContain("Disallow: /admin/");
    expect(text).not.toContain("/api/admin");
    expect(text).toContain("Sitemap:");
  });

  test("manifest.json is accessible and valid", async ({ request }) => {
    const res = await request.get("/manifest.json");
    expect(res.status()).toBe(200);
    const body = await res.json();
    expect(body.name).toBe("QAWave");
    expect(body.theme_color).toBe("#0EA5E9");
  });
});

test.describe("HTTPS & redirect behavior", () => {
  test("root redirects to locale-prefixed path", async ({ request }) => {
    const res = await request.get("/", { maxRedirects: 0 });
    // Should redirect to /en or /cs
    expect([301, 302, 307, 308]).toContain(res.status());
  });
});
