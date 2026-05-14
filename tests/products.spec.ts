import { test, expect } from "@playwright/test";

test.describe("Products page", () => {
  test("EN renders both products", async ({ page }) => {
    const response = await page.goto("/en/products");
    expect(response?.status()).toBe(200);
    await expect(page).toHaveTitle(/Open Source.*QAWave|QAWave.*Open Source|Products.*QAWave/);

    await expect(
      page.getByRole("heading", { name: "Theridion" })
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Zornik" })
    ).toBeVisible();

    // Theridion details
    await expect(page.getByText("Modern API testing platform")).toBeVisible();
    await expect(page.getByText("Pre-alpha")).toBeVisible();
    await expect(page.getByText("REST, GraphQL, gRPC, and SOAP in one tool")).toBeVisible();

    // Zornik details
    await expect(page.getByText("SDLC monitoring dashboard")).toBeVisible();
    await expect(page.getByText("Pilot")).toBeVisible();
  });

  test("CS renders both products", async ({ page }) => {
    const response = await page.goto("/cs/products");
    expect(response?.status()).toBe(200);

    await expect(
      page.getByRole("heading", { name: "Theridion" })
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: /Zorn/i })
    ).toBeVisible();
  });

  test("Theridion links to GitHub", async ({ page }) => {
    await page.goto("/en/products");
    const githubLink = page.getByRole("link", { name: /View on GitHub/i });
    await expect(githubLink).toBeVisible();
    await expect(githubLink).toHaveAttribute(
      "href",
      "https://github.com/qawave/theridion"
    );
  });

  test("Zornik links to book page", async ({ page }) => {
    await page.goto("/en/products");
    const demoLink = page.getByRole("link", { name: /Request demo/i });
    await expect(demoLink).toBeVisible();
  });

  test("nav contains Open Source link", async ({ page }) => {
    await page.goto("/en");
    await expect(
      page.locator("header").getByRole("link", { name: "Open Source" })
    ).toBeVisible();
  });
});
