import { describe, it, expect } from "vitest";
import { localeAlternates } from "./seo";

describe("localeAlternates", () => {
  it("generates correct alternates for homepage", () => {
    const result = localeAlternates("", "en");
    expect(result).toEqual({
      canonical: "/en",
      languages: { en: "/en", cs: "/cs" },
    });
  });

  it("generates correct alternates for product page", () => {
    const result = localeAlternates("/product", "cs");
    expect(result).toEqual({
      canonical: "/cs/product",
      languages: { en: "/en/product", cs: "/cs/product" },
    });
  });

  it("generates correct alternates for nested path", () => {
    const result = localeAlternates("/blog/40-agents");
    expect(result).toEqual({
      canonical: "/en/blog/40-agents",
      languages: { en: "/en/blog/40-agents", cs: "/cs/blog/40-agents" },
    });
  });

  it("defaults to en locale", () => {
    const result = localeAlternates("/pricing");
    expect(result?.canonical).toBe("/en/pricing");
  });
});
