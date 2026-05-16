import { vi } from "vitest";

// Mock next-intl for unit tests
vi.mock("next-intl", () => ({
  useTranslations: (namespace: string) => {
    const translations: Record<string, Record<string, unknown>> = {
      nav: {
        links: [
          { label: "Product", href: "/product" },
          { label: "Pricing", href: "/pricing" },
          { label: "Blog", href: "/blog" },
        ],
        "cta.href": "/book",
        "cta.label": "Book a call",
        "languageSwitcher.en": "EN",
        "languageSwitcher.cs": "CS",
      },
      "nav.languageSwitcher": {
        en: "English",
        cs: "Čeština",
      },
      footer: {
        columns: [
          {
            title: "Product",
            links: [
              { label: "How it works", href: "/product" },
              { label: "Pricing", href: "/pricing" },
            ],
          },
          {
            title: "Connect",
            links: [
              { label: "GitHub", href: "https://github.com/qawave" },
              { label: "Email", href: "mailto:hello@qawave.ai" },
            ],
          },
        ],
        copyright: "© 2026 QAWave",
        legalNote: "Registration pending",
      },
    };

    const ns = translations[namespace] || {};

    const t = (key: string) => {
      return ns[key] ?? key;
    };
    t.raw = (key: string) => ns[key] ?? key;

    return t;
  },
  useLocale: () => "en",
}));

// Mock @/i18n/navigation
vi.mock("@/i18n/navigation", () => ({
  Link: ({
    href,
    children,
    ...props
  }: {
    href: string;
    children: React.ReactNode;
    [key: string]: unknown;
  }) => {
    const React = require("react");
    return React.createElement("a", { href, ...props }, children);
  },
  useRouter: () => ({
    replace: vi.fn(),
    push: vi.fn(),
  }),
  usePathname: () => "/",
}));

// Mock @/i18n/routing
vi.mock("@/i18n/routing", () => ({
  routing: {
    locales: ["en", "cs"],
    defaultLocale: "en",
  },
}));
