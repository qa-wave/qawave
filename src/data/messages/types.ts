// ============================================================
// QAWave — Message Dictionary Types
// Single source of truth for i18n structure (next-intl).
// Both en.ts and cs.ts must satisfy this interface.
// ============================================================

export interface NavLink {
  label: string;
  href: string;
}

export interface CtaLink {
  label: string;
  href: string;
}

export interface NavMessages {
  links: NavLink[];
  cta: CtaLink;
  languageSwitcher: {
    en: string;
    cs: string;
  };
}

export interface MetaMessages {
  title: string;
  description: string;
  keywords: string[];
}

export interface HeroMessages {
  badge: string;
  headline: string;
  subheadline: string;
  primaryCta: CtaLink;
  secondaryCta: CtaLink;
  trustPill: string;
}

export interface BuiltWithMessages {
  label: string;
  badges: string[];
  // When trustedByLogos is empty, the "trusted by" row auto-hides in the component.
  trustedByLabel: string;
  trustedByLogos: string[];
}

export interface ProblemStat {
  /** Lucide icon name */
  icon: string;
  number: string;
  unit: string;
  label: string;
  /** Citation or data source disclosure */
  supporting: string;
}

export interface ProblemMessages {
  headline: string;
  stats: [ProblemStat, ProblemStat, ProblemStat];
  closingLine: string;
}

export interface HowItWorksPillar {
  /** Lucide icon name */
  icon: string;
  emoji: string;
  title: string;
  body: string;
}

export interface HowItWorksMessages {
  headline: string;
  subheadline: string;
  pillars: [HowItWorksPillar, HowItWorksPillar, HowItWorksPillar];
  cta: CtaLink;
}

/** "yes" | "partial" | "no" — rendered via legend */
export type ComparisonValue = "yes" | "partial" | "no";

export interface ComparisonRow {
  feature: string;
  values: [ComparisonValue, ComparisonValue, ComparisonValue, ComparisonValue];
}

export interface ComparisonMessages {
  headline: string;
  /** Column headers: [QAWave, Applitools, Mabl, in-house SDET] */
  columns: [string, string, string, string];
  rows: ComparisonRow[];
  cta: CtaLink;
  legend: {
    yes: string;
    partial: string;
    no: string;
  };
}

export interface AgenticMoatMessages {
  headline: string;
  /** Newline-separated paragraphs (\n\n between paragraphs) */
  body: string;
  /** Displayed in Instrument Serif / display treatment */
  stat: string;
  cta: CtaLink;
}

export interface PricingTier {
  id: "design-sprint" | "implementation" | "continuous-ops";
  emoji: string;
  name: string;
  price: string;
  priceUnit: string;
  duration: string;
  description: string;
  badge?: string;
  cta: CtaLink;
}

export interface PricingMessages {
  headline: string;
  tiers: [PricingTier, PricingTier, PricingTier];
  cta: CtaLink;
}

/** Set enabled: false until Week 10+ when a real reference exists. */
export interface TestimonialMessages {
  enabled: boolean;
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface FaqMessages {
  headline: string;
  items: FaqItem[];
}

export interface FinalCtaMessages {
  headline: string;
  subheadline: string;
  primaryCta: CtaLink;
  secondaryCta: CtaLink;
}

export interface FooterColumn {
  title: string;
  links: NavLink[];
}

export interface FooterMessages {
  columns: FooterColumn[];
  copyright: string;
  legalNote: string;
}

// -------------------------------------------------------
// Root type — must be satisfied by both en.ts and cs.ts
// -------------------------------------------------------

export interface Messages {
  meta: MetaMessages;
  nav: NavMessages;
  hero: HeroMessages;
  builtWith: BuiltWithMessages;
  problem: ProblemMessages;
  howItWorks: HowItWorksMessages;
  comparison: ComparisonMessages;
  agenticMoat: AgenticMoatMessages;
  pricing: PricingMessages;
  testimonial: TestimonialMessages;
  faq: FaqMessages;
  finalCta: FinalCtaMessages;
  footer: FooterMessages;
}
