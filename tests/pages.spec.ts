import { test, expect } from "@playwright/test";

test.describe("All pages return 200 and have correct titles", () => {
  const pages = [
    { path: "/en", title: /QAWave/ },
    { path: "/cs", title: /QAWave/ },
    { path: "/en/product", title: /Product.*QAWave/ },
    { path: "/en/about", title: /About.*QAWave/ },
    { path: "/en/customers", title: /Customers.*QAWave/ },
    { path: "/en/careers", title: /Careers.*QAWave/ },
    { path: "/en/book", title: /Book.*QAWave/ },
    { path: "/en/blog", title: /Blog.*QAWave/ },
    { path: "/en/blog/40-agents", title: /40 agents.*QAWave/ },
    { path: "/en/legal/terms", title: /Terms.*QAWave/ },
    { path: "/en/legal/privacy", title: /Privacy.*QAWave/ },
    { path: "/en/legal/dpa", title: /Data Processing.*QAWave/ },
    { path: "/en/legal/subprocessors", title: /Sub-processors.*QAWave/ },
    { path: "/en/legal/ai-transparency", title: /AI Transparency.*QAWave/ },
    { path: "/en/legal/security", title: /Security.*QAWave/ },
  ];

  for (const { path, title } of pages) {
    test(`${path} loads with correct title`, async ({ page }) => {
      const response = await page.goto(path);
      expect(response?.status()).toBe(200);
      await expect(page).toHaveTitle(title);
    });
  }

  // CS versions of key pages
  const csPages = [
    "/cs/product",
    "/cs/about",
    "/cs/customers",
    "/cs/careers",
    "/cs/book",
    "/cs/blog",
    "/cs/blog/40-agents",
  ];

  for (const path of csPages) {
    test(`${path} loads (200)`, async ({ page }) => {
      const response = await page.goto(path);
      expect(response?.status()).toBe(200);
    });
  }
});

test.describe("404 page", () => {
  test("shows custom 404 for unknown routes", async ({ page }) => {
    const response = await page.goto("/en/nonexistent-page");
    expect(response?.status()).toBe(404);
    await expect(page.getByText("Page not found")).toBeVisible();
    await expect(page.getByRole("link", { name: "Go to homepage" })).toBeVisible();
  });
});
