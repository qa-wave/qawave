import { test, expect } from "@playwright/test";

test.describe("Product page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/en/product");
  });

  test("renders headline", async ({ page }) => {
    await expect(page.getByRole("heading", { level: 1 })).toContainText(
      "AI agents that actually ship tests"
    );
  });

  test("shows three capability sections with code examples", async ({
    page,
  }) => {
    await expect(page.getByRole("heading", { name: "Generate" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Heal" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Triage" })).toBeVisible();

    // Code snippets
    await expect(page.getByText("Agent output: generated test")).toBeVisible();
    await expect(page.getByText("Agent output: healed selector")).toBeVisible();
    await expect(page.getByText("Agent output: triage report")).toBeVisible();
  });

  test("shows architecture diagram", async ({ page }) => {
    await expect(
      page.getByText("How agents fit in your pipeline")
    ).toBeVisible();
    await expect(page.getByText("Your repo")).toBeVisible();
    await expect(page.getByText("QAWave agents")).toBeVisible();
    await expect(page.getByText("Your CI/CD", { exact: true })).toBeVisible();
  });

  test("shows eval harness metrics", async ({ page }) => {
    await expect(page.getByText("< 0.5 %")).toBeVisible();
    await expect(page.getByText("Nightly", { exact: true })).toBeVisible();
    await expect(page.getByText("Full audit", { exact: true })).toBeVisible();
  });

  test("shows integrations grid", async ({ page }) => {
    await expect(page.getByRole("heading", { name: "CI/CD" })).toBeVisible();
    await expect(page.locator("#integrations").getByText("GitHub Actions")).toBeVisible();
    await expect(page.locator("#integrations").getByText("Playwright")).toBeVisible();
  });
});
