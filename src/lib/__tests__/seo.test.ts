import { describe, it, expect } from "vitest";
import { localeAlternates } from "../seo";

describe("localeAlternates()", () => {
  it("generates correct alternates for homepage", () => {
    const result = localeAlternates("");
    expect(result).toEqual({
      canonical: "/en",
      languages: { en: "/en", cs: "/cs" },
    });
  });

  it("generates correct alternates for a subpage", () => {
    const result = localeAlternates("/product");
    expect(result).toEqual({
      canonical: "/en/product",
      languages: { en: "/en/product", cs: "/cs/product" },
    });
  });

  it("respects explicit locale parameter", () => {
    const result = localeAlternates("/blog", "cs");
    expect(result).toEqual({
      canonical: "/cs/blog",
      languages: { en: "/en/blog", cs: "/cs/blog" },
    });
  });

  it("handles nested paths", () => {
    const result = localeAlternates("/blog/40-agents");
    expect(result?.languages).toEqual({
      en: "/en/blog/40-agents",
      cs: "/cs/blog/40-agents",
    });
  });
});
