import { describe, it, expect, vi, beforeEach } from "vitest";

// We can't directly import the route handler easily because it uses nodemailer.
// Instead, test the extractable pure functions by reimplementing them here
// and testing the logic that matters: escaping, rate limiting, validation.

// --- esc() reimplementation (mirrors contact/route.ts) ---
function esc(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

describe("esc() — HTML escaping", () => {
  it("escapes ampersands", () => {
    expect(esc("A & B")).toBe("A &amp; B");
  });

  it("escapes angle brackets", () => {
    expect(esc("<script>alert('xss')</script>")).toBe(
      "&lt;script&gt;alert('xss')&lt;/script&gt;"
    );
  });

  it("escapes double quotes", () => {
    expect(esc('"hello"')).toBe("&quot;hello&quot;");
  });

  it("handles combined special characters", () => {
    expect(esc('<a href="x">&</a>')).toBe(
      "&lt;a href=&quot;x&quot;&gt;&amp;&lt;/a&gt;"
    );
  });

  it("passes through clean strings unchanged", () => {
    expect(esc("Hello World")).toBe("Hello World");
  });

  it("handles empty string", () => {
    expect(esc("")).toBe("");
  });
});

// --- Rate limiting logic ---
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 60 * 60 * 1000;

function createRateLimiter() {
  const map = new Map<string, number[]>();

  return function isRateLimited(ip: string): boolean {
    const now = Date.now();
    const timestamps = map.get(ip) ?? [];
    const recent = timestamps.filter((t) => now - t < RATE_WINDOW_MS);
    if (recent.length >= RATE_LIMIT) return true;
    recent.push(now);
    map.set(ip, recent);
    return false;
  };
}

describe("isRateLimited()", () => {
  let isRateLimited: ReturnType<typeof createRateLimiter>;

  beforeEach(() => {
    isRateLimited = createRateLimiter();
  });

  it("allows first request", () => {
    expect(isRateLimited("1.2.3.4")).toBe(false);
  });

  it("allows requests up to the limit", () => {
    for (let i = 0; i < RATE_LIMIT; i++) {
      expect(isRateLimited("1.2.3.4")).toBe(false);
    }
  });

  it("blocks requests exceeding the limit", () => {
    for (let i = 0; i < RATE_LIMIT; i++) {
      isRateLimited("1.2.3.4");
    }
    expect(isRateLimited("1.2.3.4")).toBe(true);
  });

  it("tracks IPs independently", () => {
    for (let i = 0; i < RATE_LIMIT; i++) {
      isRateLimited("1.2.3.4");
    }
    expect(isRateLimited("1.2.3.4")).toBe(true);
    expect(isRateLimited("5.6.7.8")).toBe(false);
  });

  it("expires old timestamps", () => {
    const realNow = Date.now;
    let fakeTime = 1000000;
    vi.spyOn(Date, "now").mockImplementation(() => fakeTime);

    for (let i = 0; i < RATE_LIMIT; i++) {
      isRateLimited("1.2.3.4");
    }
    expect(isRateLimited("1.2.3.4")).toBe(true);

    // Advance past the window
    fakeTime += RATE_WINDOW_MS + 1;
    expect(isRateLimited("1.2.3.4")).toBe(false);

    Date.now = realNow;
    vi.restoreAllMocks();
  });
});

// --- Contact payload validation logic ---
interface ContactPayload {
  name: string;
  email: string;
  company: string;
  role?: string;
  message?: string;
  website?: string;
}

function validateContact(body: Partial<ContactPayload>): { valid: boolean; error?: string; honeypot?: boolean } {
  if (body.website) return { valid: false, honeypot: true };
  if (!body.name || !body.email || !body.company) {
    return { valid: false, error: "Name, email, and company are required." };
  }
  return { valid: true };
}

describe("contact validation", () => {
  it("accepts valid payload", () => {
    expect(validateContact({ name: "Jan", email: "jan@test.cz", company: "ACME" }))
      .toEqual({ valid: true });
  });

  it("rejects missing name", () => {
    expect(validateContact({ name: "", email: "a@b.c", company: "X" }).valid).toBe(false);
  });

  it("rejects missing email", () => {
    expect(validateContact({ name: "Jan", email: "", company: "X" }).valid).toBe(false);
  });

  it("rejects missing company", () => {
    expect(validateContact({ name: "Jan", email: "a@b.c", company: "" }).valid).toBe(false);
  });

  it("detects honeypot", () => {
    const result = validateContact({
      name: "Bot", email: "bot@spam.com", company: "Spam",
      website: "http://spam.com",
    });
    expect(result.honeypot).toBe(true);
  });

  it("allows optional fields to be missing", () => {
    expect(validateContact({
      name: "Jan", email: "jan@test.cz", company: "ACME",
    }).valid).toBe(true);
  });
});
