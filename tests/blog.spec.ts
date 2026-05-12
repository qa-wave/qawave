import { test, expect } from "@playwright/test";

test.describe("Blog", () => {
  test("blog index shows post listing", async ({ page }) => {
    await page.goto("/en/blog");
    await expect(page.getByRole("heading", { level: 1 })).toContainText("Blog");
    await expect(
      page.getByRole("link", { name: /40 agents.*1 founder/i })
    ).toBeVisible();
  });

  test("blog post renders with table of contents", async ({ page }) => {
    await page.goto("/en/blog/40-agents");
    await expect(page.getByRole("heading", { level: 1 })).toContainText(
      "40 agents"
    );
    // Table of contents
    await expect(page.getByText("In this post")).toBeVisible();
    await expect(page.getByRole("link", { name: "The agent roster" })).toBeVisible();

    // Content sections
    await expect(page.getByRole("heading", { name: "The agent roster" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "What actually works" })).toBeVisible();

    // CTA at bottom
    await expect(page.getByRole("link", { name: /Book a 20-min call/i }).last()).toBeVisible();
  });

  test("back link navigates to blog index", async ({ page }) => {
    await page.goto("/en/blog/40-agents");
    await page.getByRole("link", { name: "All posts" }).click();
    await expect(page).toHaveURL(/\/en\/blog$/);
  });

  test("nonexistent slug shows not found", async ({ page }) => {
    await page.goto("/en/blog/nonexistent-post");
    await expect(page.getByText("Post not found")).toBeVisible();
  });
});
