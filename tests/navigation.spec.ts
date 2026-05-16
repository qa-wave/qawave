import { test, expect } from "@playwright/test";

test.describe("Navigation", () => {
  test("navbar renders with logo, links, and CTA", async ({ page }) => {
    await page.goto("/en");
    const nav = page.locator("header nav");
    await expect(nav).toBeVisible();

    // Logo
    await expect(nav.getByText("QAWave")).toBeVisible();

    // Nav links (desktop)
    await expect(nav.getByRole("link", { name: "Platform", exact: true })).toBeVisible();
    await expect(nav.getByRole("link", { name: "Open Source" })).toBeVisible();
    await expect(nav.getByRole("link", { name: "Customers" })).toBeVisible();
    await expect(nav.getByRole("link", { name: "Blog" })).toBeVisible();

    // CTA button
    await expect(nav.getByRole("link", { name: /Book a 20-min call/i })).toBeVisible();
  });

  test("language switcher toggles between EN and CS", async ({ page }) => {
    await page.goto("/en");
    const switcher = page.getByRole("group", { name: "Language" });
    await expect(switcher).toBeVisible();

    await switcher.getByRole("button", { name: "Čeština" }).click();
    await expect(page).toHaveURL(/\/cs$/);

    await page.getByRole("group", { name: "Language" }).getByRole("button", { name: "English" }).click();
    await expect(page).toHaveURL(/\/en$/);
  });

  test("mobile menu opens and shows links", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto("/en");

    const menuButton = page.getByRole("button", { name: "Open menu" });
    await expect(menuButton).toBeVisible();
    await menuButton.click();

    await expect(page.getByRole("link", { name: "Platform" }).first()).toBeVisible();
    await expect(page.getByRole("link", { name: "Blog" }).first()).toBeVisible();
  });

  test("mobile menu closes with Escape key", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto("/en");

    await page.getByRole("button", { name: "Open menu" }).click();
    await expect(page.getByRole("link", { name: "Platform" }).first()).toBeVisible();

    await page.keyboard.press("Escape");
    // Menu should close — the Close menu button should revert to Open menu
    await expect(page.getByRole("button", { name: "Open menu" })).toBeVisible();
  });

  test("mobile menu traps focus with Tab", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto("/en");

    await page.getByRole("button", { name: "Open menu" }).click();
    // First link should receive focus automatically
    const firstLink = page.getByRole("link", { name: "Platform" }).first();
    await expect(firstLink).toBeFocused();
  });
});
