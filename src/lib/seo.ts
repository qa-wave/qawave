import type { Metadata } from "next";

/**
 * Generate canonical + hreflang alternates for a given page path.
 * Pass the path WITHOUT locale prefix, e.g. "" for homepage, "/product", "/blog/40-agents".
 */
export function localeAlternates(path: string): Metadata["alternates"] {
  return {
    canonical: `/en${path}`,
    languages: {
      en: `/en${path}`,
      cs: `/cs${path}`,
    },
  };
}
