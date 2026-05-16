import { test, expect } from "@playwright/test";

test.describe("Homepage — EN", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/en");
    // Wait for framer-motion animations (initial="hidden" animate="visible")
    await page.waitForTimeout(1000);
  });

  test("hero section renders with headline and CTAs", async ({ page }) => {
    await expect(page.getByRole("heading", { level: 1 })).toContainText(
      "Ride the AI wave in QA."
    );
    await expect(page.getByRole("link", { name: /Book a 20-min call/i }).first()).toBeVisible();
    await expect(page.getByRole("link", { name: /See how it works/i })).toBeVisible();
    await expect(page.getByText("Your code stays yours")).toBeVisible();
  });

  test("built-with section shows partner logos", async ({ page }) => {
    for (const name of ["Anthropic", "Vercel", "Supabase", "Cloudflare", "Stripe"]) {
      await expect(page.getByRole("listitem", { name }).first()).toBeVisible();
    }
  });

  test("problem section shows 3 stats", async ({ page }) => {
    await expect(page.getByText("12 h")).toBeVisible();
    await expect(page.getByText("30–40 %")).toBeVisible();
    await expect(page.getByText("3–6 mo")).toBeVisible();
  });

  test("how it works shows Generate, Heal, Triage", async ({ page }) => {
    await expect(page.getByRole("heading", { name: "Generate" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Heal" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Triage" })).toBeVisible();
  });

  test("comparison table has 4 columns", async ({ page }) => {
    await expect(page.getByRole("columnheader", { name: "QAWave" })).toBeVisible();
    await expect(page.getByRole("columnheader", { name: "Applitools" })).toBeVisible();
    await expect(page.getByRole("columnheader", { name: "Mabl" })).toBeVisible();
    await expect(page.getByRole("columnheader", { name: "QA Wolf" })).toBeVisible();
  });

  test("agentic moat section renders stat", async ({ page }) => {
    await expect(page.getByText("We don't just build agents")).toBeVisible();
  });

  test("FAQ accordion expands on click", async ({ page }) => {
    const firstQuestion = page.getByRole("button", {
      name: /Do you host our source code/i,
    });
    await firstQuestion.click();
    await expect(page.getByText("agents run inside your CI/CD")).toBeVisible();
  });

  test("final CTA section has newsletter form", async ({ page }) => {
    await expect(page.getByText("Ready to stop fighting flaky tests?")).toBeVisible();
    await expect(page.getByPlaceholder("Work email")).toBeVisible();
  });

  test("newsletter form validates email input", async ({ page }) => {
    const emailInput = page.getByPlaceholder("Work email");
    const submitBtn = page.locator('section[aria-labelledby="final-cta-heading"] button[type="submit"]');

    // Empty submit should not succeed (HTML5 required validation)
    await submitBtn.click();
    await expect(emailInput).toBeVisible(); // still on form, not success
  });

  test("footer renders all columns", async ({ page }) => {
    const footer = page.locator("footer");
    await expect(footer.getByText("Product")).toBeVisible();
    await expect(footer.getByText("Company")).toBeVisible();
    await expect(footer.getByText("Legal")).toBeVisible();
    await expect(footer.getByText("Connect")).toBeVisible();
  });
});

test.describe("Homepage — CS", () => {
  test("renders Czech copy", async ({ page }) => {
    await page.goto("/cs");
    await page.waitForTimeout(1000);
    await expect(page.getByRole("heading", { level: 1 })).toContainText(
      "Ride the AI wave in QA."
    );
    // Czech subheadline
    await expect(page.getByText("Stavíme vlastní AI agenty")).toBeVisible();
    // Czech CTA
    await expect(page.getByRole("link", { name: /Domluvit 20min hovor/i }).first()).toBeVisible();
  });
});
