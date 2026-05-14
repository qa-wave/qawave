import type { Metadata } from "next";

/**
 * Generate canonical + hreflang alternates for a given page path.
 * Pass the path WITHOUT locale prefix, e.g. "" for homepage, "/product", "/blog/40-agents".
 * Pass locale to set the correct canonical for the current page variant.
 */
export function localeAlternates(path: string, locale: string = "en"): Metadata["alternates"] {
  return {
    canonical: `/${locale}${path}`,
    languages: {
      en: `/en${path}`,
      cs: `/cs${path}`,
    },
  };
}
