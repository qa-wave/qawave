import type { MetadataRoute } from "next";

const BASE = "https://qawave.ai";
const LOCALES = ["en", "cs"] as const;

const pages = [
  { path: "", priority: 1, changeFrequency: "weekly" as const },
  { path: "/product", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/products", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/about", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/customers", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/careers", priority: 0.5, changeFrequency: "monthly" as const },
  { path: "/book", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/blog", priority: 0.8, changeFrequency: "weekly" as const },
  { path: "/blog/40-agents", priority: 0.8, changeFrequency: "yearly" as const },
  { path: "/legal/terms", priority: 0.3, changeFrequency: "yearly" as const },
  { path: "/legal/privacy", priority: 0.3, changeFrequency: "yearly" as const },
  { path: "/legal/dpa", priority: 0.2, changeFrequency: "yearly" as const },
  { path: "/legal/subprocessors", priority: 0.2, changeFrequency: "yearly" as const },
  { path: "/legal/ai-transparency", priority: 0.3, changeFrequency: "yearly" as const },
  { path: "/legal/security", priority: 0.3, changeFrequency: "yearly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return LOCALES.flatMap((locale) =>
    pages.map((page) => ({
      url: `${BASE}/${locale}${page.path}`,
      lastModified: now,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),
  );
}
