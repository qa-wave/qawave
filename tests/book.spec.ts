import { test, expect } from "@playwright/test";

test.describe("Book page — contact form", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/en/book");
  });

  test("renders form with required fields", async ({ page }) => {
    await expect(page.getByPlaceholder("Your name")).toBeVisible();
    await expect(page.getByPlaceholder("Work email")).toBeVisible();
    await expect(page.getByPlaceholder("Company")).toBeVisible();
    await expect(page.getByPlaceholder(/Your role/)).toBeVisible();
    await expect(page.getByPlaceholder(/biggest QA challenge/)).toBeVisible();
    await expect(page.getByRole("button", { name: /Request a call/i })).toBeVisible();
  });

  test("shows email fallback", async ({ page }) => {
    await expect(page.getByText("Prefer email?")).toBeVisible();
    await expect(page.getByText("hello@qawave.ai")).toBeVisible();
  });

  test("honeypot field is hidden", async ({ page }) => {
    const honeypot = page.locator('input[name="website"]');
    await expect(honeypot).toBeHidden();
  });

  test("submitting empty form triggers browser validation", async ({ page }) => {
    await page.getByRole("button", { name: /Request a call/i }).click();
    // Form should not submit — name field is required
    // We stay on the same page
    await expect(page).toHaveURL(/\/book$/);
  });
});
