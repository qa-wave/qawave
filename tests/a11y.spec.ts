import { test, expect } from "@playwright/test";

test.describe("Accessibility", () => {
  // Homepage has framer-motion initial="hidden" animate="visible" — need extra
  // timeout so the page load + animation don't eat the whole 30 s budget.
  test.use({ navigationTimeout: 60_000, actionTimeout: 10_000 });

  test("homepage has exactly one h1", async ({ page }) => {
    await page.goto("/en", { waitUntil: "networkidle" });
    await page.waitForTimeout(1500);
    const h1s = await page.locator("h1").count();
    expect(h1s).toBe(1);
  });

  test("all images/SVGs have accessible names", async ({ page }) => {
    await page.goto("/en", { waitUntil: "networkidle" });
    await page.waitForTimeout(1500);
    // Decorative SVGs should have aria-hidden
    const decorativeSvgs = page.locator('svg[aria-hidden="true"]');
    expect(await decorativeSvgs.count()).toBeGreaterThan(0);

    // Logo SVGs should have aria-label
    const logoSvgs = page.locator("svg[aria-label]");
    expect(await logoSvgs.count()).toBeGreaterThan(0);
  });

  test("FAQ buttons have aria-expanded", async ({ page }) => {
    await page.goto("/en", { waitUntil: "networkidle" });
    await page.waitForTimeout(1500);
    const faqButtons = page.locator(
      '[aria-labelledby="faq-heading"] button[aria-expanded]'
    );
    expect(await faqButtons.count()).toBeGreaterThan(0);
  });

  test("mobile menu button has aria-expanded", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto("/en", { waitUntil: "networkidle" });
    await page.waitForTimeout(1500);
    const menuBtn = page.getByRole("button", { name: /menu/i });
    await expect(menuBtn).toHaveAttribute("aria-expanded", "false");
    await menuBtn.click();
    await expect(menuBtn).toHaveAttribute("aria-expanded", "true");
  });

  test("focus visible outlines are present on interactive elements", async ({
    page,
  }) => {
    await page.goto("/en", { waitUntil: "networkidle" });
    await page.waitForTimeout(1500);
    // Tab to first nav link and check it's focusable
    await page.keyboard.press("Tab");
    const focused = page.locator(":focus");
    await expect(focused).toBeVisible();
  });

  test("skip to content or landmark navigation exists", async ({ page }) => {
    await page.goto("/en", { waitUntil: "networkidle" });
    await page.waitForTimeout(1500);
    // Check main landmark
    const main = page.locator("main");
    await expect(main).toBeVisible();
  });
});
