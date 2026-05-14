import { test, expect } from "@playwright/test";

test.describe("SEO", () => {
  test("homepage EN has correct meta", async ({ page }) => {
    await page.goto("/en");
    await expect(page).toHaveTitle(/QAWave — Ride the AI wave in QA/);
    const desc = page.locator('meta[name="description"]');
    await expect(desc).toHaveAttribute(
      "content",
      /Custom AI agents that live in your CI\/CD/
    );
  });

  test("homepage CS has Czech meta", async ({ page }) => {
    await page.goto("/cs");
    await expect(page).toHaveTitle(/QAWave.*AI agenti/);
  });

  test("canonical URL is set for EN", async ({ page }) => {
    await page.goto("/en");
    const canonical = page.locator('link[rel="canonical"]');
    await expect(canonical).toHaveAttribute("href", /\/en$/);
  });

  test("canonical URL is set for CS", async ({ page }) => {
    await page.goto("/cs", { waitUntil: "networkidle" });
    await page.waitForTimeout(500);
    const canonicalCs = page.locator('link[rel="canonical"]');
    await expect(canonicalCs).toHaveAttribute("href", /\/cs$/, { timeout: 10_000 });
  });

  test("hreflang alternates are present", async ({ page }) => {
    await page.goto("/en");
    const enAlt = page.locator('link[hreflang="en"]');
    await expect(enAlt).toHaveAttribute("href", /\/en$/);
    const csAlt = page.locator('link[hreflang="cs"]');
    await expect(csAlt).toHaveAttribute("href", /\/cs$/);
  });

  test("JSON-LD structured data is present on homepage", async ({ page }) => {
    await page.goto("/en");
    const jsonLd = page.locator('script[type="application/ld+json"]').first();
    const content = await jsonLd.textContent();
    expect(content).toContain("ProfessionalService");
    expect(content).toContain("QAWave");
  });

  test("blog post has Article JSON-LD", async ({ page }) => {
    await page.goto("/en/blog/40-agents");
    const jsonLd = page.locator('script[type="application/ld+json"]').last();
    const content = await jsonLd.textContent();
    expect(content).toContain('"Article"');
    expect(content).toContain("Tomas Mertin");
  });

  test("sitemap.xml returns 200 with entries", async ({ page }) => {
    const response = await page.goto("/sitemap.xml");
    expect(response?.status()).toBe(200);
    const body = await response?.text();
    expect(body).toContain("qawave.ai/en");
    expect(body).toContain("qawave.ai/cs");
    expect(body).toContain("/product");
    expect(body).toContain("/blog/40-agents");
  });

  test("robots.txt is accessible", async ({ page }) => {
    const response = await page.goto("/robots.txt");
    expect(response?.status()).toBe(200);
  });
});
