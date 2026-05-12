import { test, expect } from "@playwright/test";

test.describe("Navigation", () => {
  test("navbar renders with logo, links, and CTA", async ({ page }) => {
    await page.goto("/en");
    const nav = page.locator("header nav");
    await expect(nav).toBeVisible();

    // Logo
    await expect(nav.getByText("QAWave")).toBeVisible();

    // Nav links (desktop)
    await expect(nav.getByRole("link", { name: "Product" })).toBeVisible();
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

    await expect(page.getByRole("link", { name: "Product" }).first()).toBeVisible();
    await expect(page.getByRole("link", { name: "Blog" }).first()).toBeVisible();
  });
});
