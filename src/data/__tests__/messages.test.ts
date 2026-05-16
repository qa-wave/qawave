import { describe, it, expect } from "vitest";
import { en } from "../messages/en";
import { cs } from "../messages/cs";
import type { Messages } from "../messages/types";

// Ensure both dictionaries satisfy the Messages interface at runtime
const dictionaries: Record<string, Messages> = { en, cs };

describe.each(Object.entries(dictionaries))("%s dictionary", (_locale, dict) => {
  // --- Structure ---
  it("has all top-level sections", () => {
    const required: (keyof Messages)[] = [
      "meta", "nav", "hero", "builtWith", "problem", "howItWorks",
      "comparison", "agenticMoat", "testimonial", "faq", "finalCta", "footer",
      "productPage", "aboutPage", "customersPage", "careersPage",
      "bookPage", "blogPage", "productsPage", "legal",
    ];
    for (const key of required) {
      expect(dict).toHaveProperty(key);
    }
  });

  // --- Navigation ---
  it("has nav links with href", () => {
    for (const link of dict.nav.links) {
      expect(link.label).toBeTruthy();
      expect(link.href).toMatch(/^\//);
    }
  });

  it("has nav CTA with href", () => {
    expect(dict.nav.cta.label).toBeTruthy();
    expect(dict.nav.cta.href).toMatch(/^\//);
  });

  // --- Hero ---
  it("has hero headline matching brand tagline", () => {
    expect(dict.hero.headline).toBe("Ride the AI wave in QA.");
  });

  it("has hero CTAs", () => {
    expect(dict.hero.primaryCta.href).toBe("/book");
    expect(dict.hero.secondaryCta.href).toBe("/product");
  });

  // --- Problem ---
  it("has exactly 3 problem stats", () => {
    expect(dict.problem.stats).toHaveLength(3);
  });

  it("each problem stat has supporting citation", () => {
    for (const stat of dict.problem.stats) {
      expect(stat.supporting.length).toBeGreaterThan(20);
    }
  });

  // --- How it works ---
  it("has exactly 3 pillars: Generate, Heal, Triage", () => {
    expect(dict.howItWorks.pillars).toHaveLength(3);
    expect(dict.howItWorks.pillars.map((p) => p.title)).toEqual([
      "Generate", "Heal", "Triage",
    ]);
  });

  // --- Comparison ---
  it("has 4 comparison columns", () => {
    expect(dict.comparison.columns).toHaveLength(4);
    expect(dict.comparison.columns[0]).toBe("QAWave");
  });

  it("each comparison row has 4 values", () => {
    for (const row of dict.comparison.rows) {
      expect(row.values).toHaveLength(4);
      for (const v of row.values) {
        expect(["yes", "partial", "no"]).toContain(v);
      }
    }
  });

  // --- Pricing ---
  it("has 3 pricing tiers with correct IDs", () => {
    const tiers = dict.pricing?.tiers;
    expect(tiers).toHaveLength(3);
    expect(tiers?.map((t) => t.id)).toEqual([
      "design-sprint", "implementation", "continuous-ops",
    ]);
  });

  // --- FAQ ---
  it("has at least 5 FAQ items", () => {
    expect(dict.faq.items.length).toBeGreaterThanOrEqual(5);
  });

  it("each FAQ item has non-empty Q and A", () => {
    for (const item of dict.faq.items) {
      expect(item.q.length).toBeGreaterThan(5);
      expect(item.a.length).toBeGreaterThan(20);
    }
  });

  // --- Footer ---
  it("has footer columns with links", () => {
    expect(dict.footer.columns.length).toBeGreaterThanOrEqual(3);
    for (const col of dict.footer.columns) {
      expect(col.title).toBeTruthy();
      expect(col.links.length).toBeGreaterThan(0);
    }
  });

  // --- Testimonial ---
  it("testimonial is disabled (no fake testimonials)", () => {
    expect(dict.testimonial.enabled).toBe(false);
  });

  // --- Blog ---
  it("blog posts have required fields", () => {
    for (const post of dict.blogPage.posts) {
      expect(post.slug).toBeTruthy();
      expect(post.title).toBeTruthy();
      expect(post.date).toBeTruthy();
      expect(post.body.length).toBeGreaterThan(0);
    }
  });

  // --- Legal ---
  it("has all 6 legal documents", () => {
    const legalKeys = ["terms", "privacy", "dpa", "subprocessors", "aiTransparency", "security"];
    for (const key of legalKeys) {
      expect(dict.legal).toHaveProperty(key);
      const doc = dict.legal[key as keyof typeof dict.legal];
      expect(doc.title).toBeTruthy();
      expect(doc.sections.length).toBeGreaterThan(0);
    }
  });
});

// --- Cross-locale consistency ---
describe("cross-locale consistency", () => {
  it("both locales have same number of nav links", () => {
    expect(en.nav.links.length).toBe(cs.nav.links.length);
  });

  it("both locales have same nav hrefs", () => {
    const enHrefs = en.nav.links.map((l) => l.href);
    const csHrefs = cs.nav.links.map((l) => l.href);
    expect(enHrefs).toEqual(csHrefs);
  });

  it("both locales have same number of FAQ items", () => {
    expect(en.faq.items.length).toBe(cs.faq.items.length);
  });

  it("both locales have same comparison rows", () => {
    expect(en.comparison.rows.length).toBe(cs.comparison.rows.length);
  });

  it("both locales have same pricing tier IDs", () => {
    expect(en.pricing?.tiers.map((t) => t.id)).toEqual(
      cs.pricing?.tiers.map((t) => t.id)
    );
  });

  it("both locales have same footer column count", () => {
    expect(en.footer.columns.length).toBe(cs.footer.columns.length);
  });

  it("both locales have same blog post slugs", () => {
    expect(en.blogPage.posts.map((p) => p.slug)).toEqual(
      cs.blogPage.posts.map((p) => p.slug)
    );
  });
});
