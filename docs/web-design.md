# Web Design -- Implementacni plan landing page qawave.ai

> **Role:** Web Designer
> **Datum:** 2026-04-15
> **Verze:** 1.0
> **Vstupy:** docs/copy.md, docs/ux-wireframe.md, qawave-web-strategy.md
> **Stav:** Hotovo -- pripraveno pro Frontend vyvojare

---

## 1. Adresarova struktura

```
src/
├── app/
│   ├── layout.tsx              (existuje -- upravit: pridat Navbar + Footer + SEO metadata)
│   ├── page.tsx                (existuje -- prepsat: skladba landing page sekci)
│   └── globals.css             (existuje -- beze zmen)
├── components/
│   ├── ui/
│   │   ├── button.tsx          (Button -- primarni/sekundarni/ghost varianty)
│   │   ├── badge.tsx           (Badge -- maly label nad headline)
│   │   ├── card.tsx            (Card -- zakladni karta s border a hover efektem)
│   │   ├── metric-card.tsx     (MetricCard -- karta s animovanym cislem)
│   │   ├── animated-counter.tsx (AnimatedCounter -- counter animace 0 -> cil)
│   │   ├── integration-badge.tsx (IntegrationBadge -- logo + nazev integrace)
│   │   ├── section-wrapper.tsx (SectionWrapper -- obalka sekce s paddingem, max-width, a11y)
│   │   └── scroll-indicator.tsx (ScrollIndicator -- animovana sipka dolu v Hero)
│   ├── sections/
│   │   ├── hero-section.tsx    (HeroSection -- S1)
│   │   ├── problem-section.tsx (ProblemSection -- S2)
│   │   ├── uvp-section.tsx     (UvpSection -- S3)
│   │   ├── how-it-works-section.tsx (HowItWorksSection -- S4)
│   │   ├── social-proof-section.tsx (SocialProofSection -- S5)
│   │   ├── tech-cred-section.tsx (TechCredSection -- S6)
│   │   └── cta-section.tsx     (CtaSection -- S7)
│   └── layout/
│       ├── navbar.tsx          (Navbar -- sticky header s navigaci)
│       └── footer.tsx          (Footer -- paticka se 4 sloupci)
├── lib/
│   ├── utils.ts                (existuje -- cn() utility, beze zmen)
│   └── motion.ts               (NOVY -- Framer Motion preset varianty)
└── data/
    └── landing.ts              (NOVY -- veskerý copy jako typed data)
```

---

## 2. Data soubor -- `src/data/landing.ts`

### 2.1 TypeScript interfaces

```typescript
// --- Navigace ---

interface NavItem {
  label: string;
  href: string;
}

// --- Footer ---

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

// --- Hero ---

interface HeroData {
  badge: string;
  headline: string;
  subheadline: string;
  primaryCta: { label: string; href: string; trackingEvent: string };
  secondaryCta: { label: string; href: string; trackingEvent: string };
}

// --- Problem Statement ---

interface StatBox {
  number: string;         // "25%" | "6x" | "30%" -- zobrazovana hodnota
  numericValue: number;   // 25 | 6 | 30 -- pro counter animaci
  suffix: string;         // "%" | "x" | "%"
  label: string;
  supportingText: string;
}

interface ProblemData {
  headline: string;
  subheadline: string;
  stats: [StatBox, StatBox, StatBox];
}

// --- UVP Pilire ---

interface BulletPoint {
  bold: string;           // tucny prefix
  text: string;           // zbytek textu
}

interface UvpPillar {
  icon: string;           // nazev lucide-react ikony
  headline: string;
  tagline: string;
  description: string;
  bullets: BulletPoint[];
  href: string;           // odkaz na detail stranku
}

interface UvpData {
  headline: string;
  subheadline: string;
  pillars: [UvpPillar, UvpPillar, UvpPillar];
}

// --- How It Works ---

interface Step {
  number: string;         // "01" | "02" | "03"
  title: string;
  description: string;
  icon: string;           // nazev lucide-react ikony
}

interface HowItWorksData {
  headline: string;
  steps: [Step, Step, Step];
}

// --- Social Proof ---

interface Metric {
  value: string;          // "28% to 74%" | "-65%" | "Minutes, not days" | "100%"
  label: string;
}

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

interface SocialProofData {
  headline: string;
  metrics: Metric[];
  testimonial: Testimonial;
}

// --- Tech Credibility ---

interface Integration {
  name: string;
  icon: string;           // nazev lucide-react ikony nebo cesta k SVG
  description: string;
}

interface TechCredData {
  headline: string;
  subheadline: string;
  integrations: Integration[];
  exitStrategyLine: string;
}

// --- Final CTA ---

interface CtaData {
  headline: string;
  subheadline: string;
  primaryCta: { label: string; href: string; trackingEvent: string };
  secondaryCta: { label: string; href: string; trackingEvent: string };
}
```

### 2.2 Data (typed konstanty)

```typescript
// --- Navigation ---

export const navItems: NavItem[] = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Platform", href: "#platform" },
  { label: "Pricing", href: "/pricing" },
  { label: "Docs", href: "/docs" },
];

export const navCta = {
  label: "Start Free Pilot",
  href: "/pilot-signup",
  trackingEvent: "cta_click_nav",
};

// --- Footer ---

export const footerColumns: FooterColumn[] = [
  {
    title: "Platform",
    links: [
      { label: "How It Works", href: "/how-it-works" },
      { label: "Autonomous Discovery", href: "/platform/autonomous-discovery" },
      { label: "Intelligent Maintenance", href: "/platform/intelligent-maintenance" },
      { label: "Governance", href: "/platform/governance" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "/docs" },
      { label: "Blog", href: "/blog" },
      { label: "ROI Calculator", href: "/resources/roi-calculator" },
      { label: "Comparisons", href: "/resources/comparisons" },
      { label: "Changelog", href: "/changelog" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Customers", href: "/customers" },
      { label: "Contact", href: "/contact" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Security", href: "/security" },
      { label: "Cookie Settings", href: "#cookie-settings" },
    ],
  },
];

export const footerTagline = "The Edge of QA Automation";
export const footerCopyright = "\u00a9 2026 qawave.ai. All rights reserved.";

// --- S1 Hero ---

export const heroData: HeroData = {
  badge: "Agentic AI for QA Engineering",
  headline: "The Edge of QA Automation",
  subheadline:
    "Autonomous AI agents that explore your application, generate tests for paths no script anticipated, and adapt when your product changes \u2014 with a full audit trail of every decision.",
  primaryCta: {
    label: "Start Free Pilot",
    href: "/pilot-signup",
    trackingEvent: "cta_click_hero_primary",
  },
  secondaryCta: {
    label: "Watch Technical Demo",
    href: "/demo",
    trackingEvent: "cta_click_hero_secondary",
  },
};

// --- S2 Problem Statement ---

export const problemData: ProblemData = {
  headline:
    "The gap between your dev velocity and test coverage is widening every sprint.",
  subheadline:
    "AI-assisted coding tools ship features faster than your QA team can write tests. Legacy automation stalls at partial coverage. Maintenance costs compound silently. Here is where most organizations stand right now:",
  stats: [
    {
      number: "25%",
      numericValue: 25,
      suffix: "%",
      label: "Industry test automation ceiling",
      supportingText:
        "Script-based tools can only test what humans anticipate. The rest ships untested.",
    },
    {
      number: "6x",
      numericValue: 6,
      suffix: "x",
      label: "Hidden cost multiplier",
      supportingText:
        "Organizations budget 140\u2013180K EUR for QA tooling. Real costs \u2014 including maintenance of brittle test suites \u2014 reach 900K\u20131M EUR.",
    },
    {
      number: "30%",
      numericValue: 30,
      suffix: "%",
      label: "Senior engineer time lost to maintenance",
      supportingText:
        "Your most experienced people spend nearly a third of their week triaging flaky tests and patching broken selectors.",
    },
  ],
};

// --- S3 UVP Pillars ---

export const uvpData: UvpData = {
  headline: "Three capabilities. One autonomous platform.",
  subheadline:
    "qawave.ai occupies a position no other tool holds: AI that works alongside your senior engineers \u2014 amplifying their expertise instead of replacing their judgment.",
  pillars: [
    {
      icon: "Radar",
      headline: "Autonomous Discovery",
      tagline: "Your AI finds what your scripts miss.",
      description:
        "Traditional tools test predefined paths. Even \u201cAI-assisted\u201d tools just help you write scripts faster. qawave agents autonomously explore your application, map its structure, and generate tests for paths, edge cases, and regression risks that no human anticipated.",
      bullets: [
        {
          bold: "Autonomous exploration",
          text: "The agent maps your application\u2019s structure, flows, and states without manual instruction.",
        },
        {
          bold: "Risk-based prioritization",
          text: "Tests generated by real system risk, not line-of-code coverage targets.",
        },
        {
          bold: "Coverage breakthrough",
          text: "Pilot projects moved from 28% to 74% coverage in 6 weeks.",
        },
      ],
      href: "/platform/autonomous-discovery",
    },
    {
      icon: "RefreshCw",
      headline: "Intelligent Maintenance",
      tagline: "Tests that evolve with your product, not against it.",
      description:
        'Every vendor claims \u201cself-healing.\u201d Most mean they update a CSS selector when an element moves. That is a patch, not maintenance. qawave understands the intent of each test, adapts entire strategies when your product changes, and flags at-risk tests before deployment \u2014 not after.',
      bullets: [
        {
          bold: "Intent-level adaptation",
          text: "When your UI changes, the agent rewrites tests based on what they verify, not just where elements sit.",
        },
        {
          bold: "Proactive risk detection",
          text: "Tests threatened by a planned deploy are identified and updated before merge.",
        },
        {
          bold: "Human review gate",
          text: "Every AI-proposed change is staged for your team\u2019s approval before it reaches the codebase.",
        },
      ],
      href: "/platform/intelligent-maintenance",
    },
    {
      icon: "ShieldCheck",
      headline: "Engineering-Grade Governance",
      tagline: "AI power. Human authority. Full audit trail.",
      description:
        "Managed services take governance away from your team. Black-box AI tools make untraceable decisions about what to test and what to skip. qawave gives you autonomous capability with complete transparency \u2014 every AI decision recorded, explained, and subject to human approval.",
      bullets: [
        {
          bold: "Full audit trail",
          text: "Every AI decision is logged with its reasoning. Inspect any test, any time.",
        },
        {
          bold: "Human-in-the-loop control",
          text: "AI proposes. Your engineers approve. Strategic changes never happen without sign-off.",
        },
        {
          bold: "Compliance-ready reporting",
          text: "SOC 2 and ISO 27001 aligned outputs for regulated industries.",
        },
      ],
      href: "/platform/governance",
    },
  ],
};

// --- S4 How It Works ---

export const howItWorksData: HowItWorksData = {
  headline: "From repository to autonomous coverage in three steps.",
  steps: [
    {
      number: "01",
      title: "Connect Your Repository",
      description:
        "Point qawave at your codebase and existing test suite \u2014 GitHub, GitLab, or Bitbucket. No migration, no rip-and-replace.",
      icon: "GitBranch",
    },
    {
      number: "02",
      title: "AI Explores and Generates",
      description:
        "The agent autonomously maps your application, identifies untested paths and edge cases, and generates tests prioritized by real risk.",
      icon: "BrainCircuit",
    },
    {
      number: "03",
      title: "Review, Approve, Ship",
      description:
        "Every generated test and every maintenance update lands in your review queue with full AI reasoning \u2014 your team stays in control.",
      icon: "CheckCircle",
    },
  ],
};

// --- S5 Social Proof ---

export const socialProofData: SocialProofData = {
  headline: "Measured results from pilot deployments.",
  metrics: [
    { value: "28% \u2192 74%", label: "Test coverage growth in 6 weeks" },
    { value: "-65%", label: "Reduction in test maintenance time" },
    { value: "Minutes", label: "Mean time to adapt after deployment" },
    { value: "100%", label: "AI decisions with full audit trail" },
  ],
  testimonial: {
    quote:
      "We budgeted two sprints to stabilize our test suite after the frontend refactor. qawave\u2019s agent adapted 80% of affected tests overnight. My team spent the morning reviewing changes instead of rewriting them.",
    author: "QA Lead",
    role: "QA Lead",
    company: "B2B Fintech Platform (Pilot Program)",
  },
};

// --- S6 Tech Credibility ---

export const techCredData: TechCredData = {
  headline: "Built to fit your stack. Not replace it.",
  subheadline:
    "qawave integrates with the tools your team already uses. No lock-in. Standard test formats. Export everything.",
  integrations: [
    {
      name: "GitHub / GitLab / Bitbucket",
      icon: "GitBranch",
      description: "Repository connection, PR-based test review, CI/CD triggers.",
    },
    {
      name: "GitHub Actions / GitLab CI / Jenkins",
      icon: "Workflow",
      description:
        "Native pipeline integration. Tests run where your code already builds.",
    },
    {
      name: "Cypress / Playwright / Selenium",
      icon: "TestTube",
      description:
        "Works with your existing test frameworks. Generates tests in formats your team reads and owns.",
    },
    {
      name: "Slack / Teams",
      icon: "MessageSquare",
      description:
        "Real-time notifications for test results, maintenance proposals, and coverage changes.",
    },
    {
      name: "Jira / Linear",
      icon: "SquareKanban",
      description:
        "Link test failures to issues. Trace coverage to requirements.",
    },
  ],
  exitStrategyLine:
    "Every test qawave generates is yours. Standard code. Standard formats. No proprietary lock-in. If you leave, your tests stay.",
};

// --- S7 Final CTA ---

export const ctaData: CtaData = {
  headline: "See it work on your codebase. Not on a demo app.",
  subheadline:
    "Start a free technical pilot on your staging environment. Real product. Real complexity. Measurable results in weeks, not quarters.",
  primaryCta: {
    label: "Start Free Pilot",
    href: "/pilot-signup",
    trackingEvent: "cta_click_final_primary",
  },
  secondaryCta: {
    label: "Watch Technical Demo",
    href: "/demo",
    trackingEvent: "cta_click_final_secondary",
  },
};
```

---

## 3. Motion presets -- `src/lib/motion.ts`

### 3.1 Popis souboru

Soubor exportuje reusable Framer Motion `Variants` objekty a helper funkce. Vsechny animace musi respektovat `prefers-reduced-motion`.

### 3.2 Varianty k implementaci

```typescript
import type { Variants, Transition } from "framer-motion";

// --- Zakladni transition preset ---

const defaultTransition: Transition = {
  duration: 0.6,
  ease: [0.25, 0.46, 0.45, 0.94], // ease-out quad
};

// --- fadeInUp ---
// Pouziti: karty, textove bloky, jakykoli prvek vstupujici pri scrollu
// Chovani: opacity 0 -> 1, translateY 24px -> 0

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: defaultTransition,
  },
};

// --- staggerContainer ---
// Pouziti: rodic skupiny karet (Problem stats, UVP pillars, How It Works steps)
// Chovani: deti se animuji s delayem mezi sebou
// Parametr staggerDelay (v sekundach): 0.15 pro Problem, 0.2 pro UVP, 0.25 pro Steps

export const staggerContainer = (staggerDelay: number = 0.15): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: staggerDelay,
    },
  },
});

// --- scaleOnHover ---
// Pouziti: CTA buttony, interaktivni karty
// Chovani: scale 1 -> 1.03 na hover, 1 -> 0.98 na tap/press

export const scaleOnHover: Variants = {
  initial: { scale: 1 },
  hover: { scale: 1.03, transition: { duration: 0.2 } },
  tap: { scale: 0.98, transition: { duration: 0.1 } },
};

// --- counterAnimation ---
// Pouziti: AnimatedCounter komponenta (cisla ve stat boxech a metrikach)
// Chovani: animace od 0 do cilove hodnoty pres Framer Motion useMotionValue + useSpring
// Parametry: from (default 0), to (cilova hodnota), duration (default 1.2s)
// POZOR: Neni Variants objekt -- je to konfigurace pro useSpring hook

export const counterAnimationConfig = {
  duration: 1.2,
  bounce: 0,
  ease: "easeOut" as const,
};

// --- Hero-specific ---

export const heroTextReveal: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { ...defaultTransition, delay },
  }),
};

// --- pathDraw ---
// Pouziti: spojovaci linie v How It Works (SVG path animace)
// Chovani: SVG path se kresli zleva doprava

export const pathDraw: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeInOut" },
  },
};

// --- cardLift ---
// Pouziti: hover efekt na kartach (UVP, Problem, Tech badges)
// Chovani: translateY -4px + border glow

export const cardLift: Variants = {
  initial: { y: 0 },
  hover: { y: -4, transition: { duration: 0.2 } },
};

// --- Reduced motion helper ---
// Frontend vyvojar pouzije useReducedMotion() z framer-motion
// a podmini vsechny animace -- pokud true, duration=0, zadny pohyb
```

---

## 4. Specifikace komponent

### 4.1 Layout komponenty

---

#### `src/components/layout/navbar.tsx`

**Exportovany nazev:** `Navbar`

**Props interface:**
```typescript
// Zadne props -- pouziva data z landing.ts (navItems, navCta)
interface NavbarProps {}
```

**Co renderuje:**
- Sticky header (`position: fixed`, `top: 0`, `z-50`)
- Transparentni na vrchu stranky, solid pozadi (`bg-background/95 backdrop-blur`) po scrollu > 80px
- Levy blok: logo text "qawave" s ".ai" v accent barve -- odkaz na "/"
- Stredni blok: horizontalni navigace z `navItems` (desktop only)
- Pravy blok: CTA button (Button komponenta, varianta `primary`, maly size)
- Mobilni: hamburger ikona (Menu z lucide-react), slide-in panel zprava pres cely viewport
- Skip-to-content link jako prvni fokusovatelny prvek

**Pouziva child komponenty:**
- `Button` (pro CTA)
- Lucide ikony: `Menu`, `X`
- Framer Motion `AnimatePresence` pro mobilni menu animaci

**Interakce:**
- Scroll listener (useScroll z Framer Motion) pro zmenu pozadi headeru
- Mobilni menu: overlay + slide-in, zavre se na Escape, klik mimo, nebo klik na link
- Vsechny nav items jsou anchor linky (`href="#section-id"`) pro scroll na landing page

---

#### `src/components/layout/footer.tsx`

**Exportovany nazev:** `Footer`

**Props interface:**
```typescript
// Zadne props -- pouziva data z landing.ts (footerColumns, footerTagline, footerCopyright)
interface FooterProps {}
```

**Co renderuje:**
- `<footer>` element s `bg-surface` pozadim
- Horni cast: logo + tagline vlevo, 4 sloupce odkazu (z `footerColumns`) napravo
- Kazdy sloupec: title (tucny, maly, uppercase) + seznam odkazu
- Spodni bar: copyright text, oddeleny tenkou linkou
- Desktop: grid 5 sloupcu (logo+tagline | 4x links)
- Mobile: logo + tagline nahore, sloupce jako accordion nebo vertikalni stack, copyright dole

**Pouziva child komponenty:**
- Zadne specialni -- ciste HTML/Tailwind

---

### 4.2 UI komponenty

---

#### `src/components/ui/button.tsx`

**Exportovany nazev:** `Button`

**Props interface:**
```typescript
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "secondary" | "ghost";
  size: "sm" | "md" | "lg";
  href?: string;             // pokud zadano, renderuje <a> misto <button>
  trackingEvent?: string;    // nazev eventu pro analytics
  children: React.ReactNode;
}
```

**Co renderuje:**
- `primary`: bg-accent, text-white, hover glow efekt, rounded-lg
- `secondary`: bg-transparent, border border-accent, text-accent-foreground, hover bg-accent-muted
- `ghost`: bg-transparent, text-neutral-400, hover text-foreground, podtrzeni na hover
- Velikosti: `sm` (px-4 py-2 text-sm), `md` (px-6 py-3 text-base), `lg` (px-8 py-4 text-lg)
- Pokud `href` je zadano, renderuje `<a>` se stejnym stylem
- Focus ring: `focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2`
- Tracking: na klik vola tracking funkci s `trackingEvent` parametrem

**Pouziva child komponenty:**
- Framer Motion `motion.button` / `motion.a` pro hover/tap animace (`scaleOnHover` varianta)

---

#### `src/components/ui/badge.tsx`

**Exportovany nazev:** `Badge`

**Props interface:**
```typescript
interface BadgeProps {
  children: React.ReactNode;
}
```

**Co renderuje:**
- Maly inline prvek: `bg-accent-muted`, `text-accent-foreground`, `text-xs`, `font-mono`, `rounded-full`, `px-3 py-1`
- Pouziti: badge "Agentic AI for QA Engineering" nad Hero headline

**Pouziva child komponenty:**
- Zadne

---

#### `src/components/ui/card.tsx`

**Exportovany nazev:** `Card`

**Props interface:**
```typescript
interface CardProps {
  children: React.ReactNode;
  href?: string;              // pokud zadano, cela karta je klikatelna
  className?: string;         // pro custom styly z rodice
  hoverable?: boolean;        // default true -- zapina hover lift efekt
}
```

**Co renderuje:**
- `bg-surface-raised`, `border border-border`, `rounded-xl`, `p-6`
- Hover (pokud `hoverable`): `translateY(-4px)`, border glow (`border-border-accent`)
- Pokud `href`: obaleno v `<a>`, cela karta klikatelna
- `transition-all duration-200`

**Pouziva child komponenty:**
- Framer Motion `motion.div` pro `cardLift` hover variantu

---

#### `src/components/ui/metric-card.tsx`

**Exportovany nazev:** `MetricCard`

**Props interface:**
```typescript
interface MetricCardProps {
  stat: StatBox;              // z landing.ts -- number, numericValue, suffix, label, supportingText
}
```

**Co renderuje:**
- Card obalka (pouziva Card komponentu nebo vlastni bg-surface-raised styl)
- Velke cislo nahore: `AnimatedCounter` s `numericValue` a `suffix`
- Pod cislem: label (text-sm, text-neutral-300)
- Pod labelem: supportingText (text-xs, text-neutral-500)
- Cislo je vizualne dominantni (text-4xl md:text-5xl, font-bold, text-foreground)

**Pouziva child komponenty:**
- `AnimatedCounter`
- `Card` (nebo interni styling)

---

#### `src/components/ui/animated-counter.tsx`

**Exportovany nazev:** `AnimatedCounter`

**Props interface:**
```typescript
interface AnimatedCounterProps {
  from?: number;              // default 0
  to: number;                 // cilova hodnota
  suffix?: string;            // "%" | "x" -- pripojeno za cislo
  prefix?: string;            // "-" | "" -- pred cislem
  duration?: number;          // default 1.2s
  className?: string;
}
```

**Co renderuje:**
- `<span>` s animovanym cislem
- Pouziva Framer Motion `useMotionValue`, `useSpring`, a `useInView`
- Animace se spusti az kdyz je element viditelny ve viewportu (useInView s `once: true`)
- Pri `prefers-reduced-motion`: okamzite zobrazi cilovou hodnotu
- Cislo je zaokrouhlene na cele hodnoty (Math.round)

**Pouziva child komponenty:**
- Zadne -- ciste Framer Motion hooks

---

#### `src/components/ui/integration-badge.tsx`

**Exportovany nazev:** `IntegrationBadge`

**Props interface:**
```typescript
interface IntegrationBadgeProps {
  integration: Integration;   // z landing.ts -- name, icon, description
}
```

**Co renderuje:**
- Maly obdelnik: `bg-surface-raised`, `border border-border`, `rounded-lg`, `p-4`
- Ikona z lucide-react (dynamicky podle `integration.icon`)
- Nazev pod ikonou (text-sm)
- Hover: glow efekt, jemny zdvih
- `alt` / `aria-label`: "[nazev] integration"

**Pouziva child komponenty:**
- Dynamicka lucide-react ikona

---

#### `src/components/ui/section-wrapper.tsx`

**Exportovany nazev:** `SectionWrapper`

**Props interface:**
```typescript
interface SectionWrapperProps {
  id: string;                 // pro anchor navigaci (napr. "hero", "problem")
  ariaLabel: string;          // pro a11y
  className?: string;         // extra styly
  children: React.ReactNode;
}
```

**Co renderuje:**
- `<section>` element s `id`, `aria-label`
- `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Vertikalni padding: `py-20 md:py-28`
- Umoznuje custom className pro kazdu sekci (napr. Hero ma py-0 a min-h-screen)

**Pouziva child komponenty:**
- Zadne

---

#### `src/components/ui/scroll-indicator.tsx`

**Exportovany nazev:** `ScrollIndicator`

**Props interface:**
```typescript
// Zadne props
interface ScrollIndicatorProps {}
```

**Co renderuje:**
- Absolutne pozicovana sipka dolu (lucide `ChevronDown`) ve spodku Hero sekce
- Pulzujici animace (Framer Motion, loop, translateY 0 -> 8px)
- Fade-out pri scrollu (opacity klesne na 0 po scroll > 100px)
- `aria-hidden="true"` -- cistě dekorativni

**Pouziva child komponenty:**
- Lucide ikona `ChevronDown`
- Framer Motion `motion.div`

---

### 4.3 Section komponenty

---

#### `src/components/sections/hero-section.tsx`

**Exportovany nazev:** `HeroSection`

**Props interface:**
```typescript
// Zadne props -- pouziva heroData z landing.ts
interface HeroSectionProps {}
```

**Co renderuje:**
- `SectionWrapper` s `id="hero"`, `min-h-screen`, `flex items-center`
- Desktop (md+): 2 sloupce -- 55% text vlevo, 45% vizualni prvek vpravo
- Mobile: jeden sloupec, text nad vizualem
- Poradi elementu v textovem sloupci:
  1. `Badge` s textem "Agentic AI for QA Engineering"
  2. `<h1>` "The Edge of QA Automation" -- `text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight`
  3. `<p>` subheadline -- `text-lg text-neutral-400 max-w-xl`
  4. `Button` primary ("Start Free Pilot") + `Button` ghost ("Watch Technical Demo")
- Pravy sloupec: abstraktni vizualizace (placeholder div s accent gradient nebo jednoducha SVG animace -- uzly a spojnice). `aria-hidden="true"`.
- `ScrollIndicator` absolutne dole
- Vstupni animace: sekvencni fadeIn -- badge (0s) -> h1 (0.2s) -> subheadline (0.4s) -> CTAs (0.6s) -> vizual (0.8s)

**Pouziva child komponenty:**
- `SectionWrapper`
- `Badge`
- `Button` (2x)
- `ScrollIndicator`
- Framer Motion `motion.div` s `heroTextReveal` variantou

---

#### `src/components/sections/problem-section.tsx`

**Exportovany nazev:** `ProblemSection`

**Props interface:**
```typescript
// Zadne props -- pouziva problemData z landing.ts
interface ProblemSectionProps {}
```

**Co renderuje:**
- `SectionWrapper` s `id="problem"`
- Centrovany `<h2>` headline
- Pod nim: `<p>` subheadline (text-neutral-400, max-w-3xl, centrovany)
- Grid 3 sloupcu (md:grid-cols-3, gap-6): 3x `MetricCard` z `problemData.stats`
- Karty se animuji pri scrollu: `staggerContainer(0.15)` na rodici, `fadeInUp` na kazde karte
- Counter animace na cislech se spousti pri scroll do viewportu

**Pouziva child komponenty:**
- `SectionWrapper`
- `MetricCard` (3x)
- Framer Motion `motion.div` s `staggerContainer` a `fadeInUp`

---

#### `src/components/sections/uvp-section.tsx`

**Exportovany nazev:** `UvpSection`

**Props interface:**
```typescript
// Zadne props -- pouziva uvpData z landing.ts
interface UvpSectionProps {}
```

**Co renderuje:**
- `SectionWrapper` s `id="platform"`
- Centrovany `<h2>` headline + `<p>` subheadline
- Grid 3 sloupcu (md:grid-cols-3, gap-8, items-stretch): 3x `Card` s UVP obsahem
- Kazda karta obsahuje:
  1. Lucide ikona (z `pillar.icon`) -- `text-accent`, `w-10 h-10`
  2. `<h3>` headline pilire
  3. `<p>` tagline kurzivou, text-accent-light
  4. `<p>` description
  5. 3 bullet pointy (tucny prefix + text)
  6. Link "Learn more" na `pillar.href`
- Karta je cela klikatelna (href na detail stranku)
- Stagger animace: `staggerContainer(0.2)` + `fadeInUp`
- Hover na karte: cardLift + ikona jemna rotace

**Pouziva child komponenty:**
- `SectionWrapper`
- `Card` (3x)
- Lucide ikony (`Radar`, `RefreshCw`, `ShieldCheck`)
- Framer Motion

---

#### `src/components/sections/how-it-works-section.tsx`

**Exportovany nazev:** `HowItWorksSection`

**Props interface:**
```typescript
// Zadne props -- pouziva howItWorksData z landing.ts
interface HowItWorksSectionProps {}
```

**Co renderuje:**
- `SectionWrapper` s `id="how-it-works"`
- Centrovany `<h2>` headline
- Desktop (md+): 3 sloupce s spojovacimi linkami (SVG sipky) mezi nimi
- Mobile: vertikalni stack s vertikalnimi sipkami
- Kazdy krok:
  1. Velke cislo (`text-6xl font-bold text-accent/20`) -- dekorativni
  2. Lucide ikona (z `step.icon`)
  3. `<h3>` nazev kroku
  4. `<p>` popis
- Spojovaci linie: SVG `<path>` s `pathDraw` animaci pri scrollu
- Stagger: kroky se objevuji sekvencne (250ms delay)

**Pouziva child komponenty:**
- `SectionWrapper`
- Lucide ikony (`GitBranch`, `BrainCircuit`, `CheckCircle`)
- Framer Motion `motion.svg` pro path animaci
- Framer Motion `motion.div` s `fadeInUp` a `staggerContainer(0.25)`

---

#### `src/components/sections/social-proof-section.tsx`

**Exportovany nazev:** `SocialProofSection`

**Props interface:**
```typescript
// Zadne props -- pouziva socialProofData z landing.ts
interface SocialProofSectionProps {}
```

**Co renderuje:**
- `SectionWrapper` s `id="social-proof"`
- Centrovany `<h2>` headline
- Logo strip: rada monochromatickych firemniho loga (placeholder -- sedy obdelnik s textem). Desktop: v radku. Mobile: grid 3x2.
- Oddelovac (tenka linka, border-border)
- Grid 4 sloupcu (md:grid-cols-4, gap-6): 4x metrika
  - Kazda metrika: velka hodnota (text-3xl, font-bold) + label (text-sm, text-neutral-400)
- Oddelovac
- Testimonial blok:
  - Velky citat v uvozovkach (`text-xl md:text-2xl italic text-neutral-200`)
  - Pod nim: autor + role + firma (text-sm, text-neutral-500)
- Fade-in animace pro celou sekci

**Pouziva child komponenty:**
- `SectionWrapper`
- Framer Motion `motion.div`

---

#### `src/components/sections/tech-cred-section.tsx`

**Exportovany nazev:** `TechCredSection`

**Props interface:**
```typescript
// Zadne props -- pouziva techCredData z landing.ts
interface TechCredSectionProps {}
```

**Co renderuje:**
- `SectionWrapper` s `id="tech-credibility"`
- Centrovany `<h2>` headline + `<p>` subheadline
- Grid integracnich badgi: desktop 5 sloupcu, tablet 3, mobile 2
  - Kazdy badge: `IntegrationBadge` s ikonou, nazvem, a popisem
  - Stagger fade-in po radcich
- Pod gridem: exit strategy line -- zvyrazneny text v ramecku (`bg-surface`, `border-l-2 border-accent`, `p-4`)
  - Tento text je dulezity trust signal -- vizualne odliseny od zbytku sekce

**Pouziva child komponenty:**
- `SectionWrapper`
- `IntegrationBadge` (5x)
- Framer Motion

---

#### `src/components/sections/cta-section.tsx`

**Exportovany nazev:** `CtaSection`

**Props interface:**
```typescript
// Zadne props -- pouziva ctaData z landing.ts
interface CtaSectionProps {}
```

**Co renderuje:**
- `SectionWrapper` s `id="cta"`, velky vertikalni padding (py-32)
- Centrovany blok, `max-w-2xl mx-auto text-center`
- `<h2>` headline -- `text-4xl md:text-5xl font-bold`
- `<p>` subheadline -- `text-lg text-neutral-400`
- `Button` primary, size `lg` ("Start Free Pilot") -- nejvetsi button na strance
  - Pulsujici glow animace (box-shadow pulse kazdych 3s)
- `Button` ghost ("Watch Technical Demo") pod primarnim
- Fade-in animace pri scrollu

**Pouziva child komponenty:**
- `SectionWrapper`
- `Button` (2x)
- Framer Motion `motion.div`

---

### 4.4 Page a Layout

---

#### `src/app/layout.tsx` (uprava existujiciho)

**Zmeny:**
- Pridat `<Navbar />` pred `{children}`
- Pridat `<Footer />` za `{children}`
- Rozsirit `metadata` o Open Graph a doplnkove SEO tagy (viz sekce 6)
- Pridat JSON-LD structured data jako `<script type="application/ld+json">`
- Zachovat existujici font konfiguraci (Geist, Geist_Mono)

---

#### `src/app/page.tsx` (kompletni prepis)

**Co renderuje:**
- `<main>` element
- Sekvence vsech 7 section komponent:

```
<main>
  <HeroSection />
  <ProblemSection />
  <UvpSection />
  <HowItWorksSection />
  <SocialProofSection />
  <TechCredSection />
  <CtaSection />
</main>
```

- Zadna vlastni logika -- cista kompozice sekci
- Page je Server Component (zadne "use client")
- Jednotlive sekce, ktere potrebuji Framer Motion, si definuji "use client" samy

---

## 5. Konverzni strategie

### 5.1 CTA hierarchie

| CTA | Typ | Umisteni | Tracking event |
|---|---|---|---|
| "Start Free Pilot" | Primary | Navbar, Hero (S1), Final CTA (S7) | `cta_click_nav`, `cta_click_hero_primary`, `cta_click_final_primary` |
| "Watch Technical Demo" | Secondary/Ghost | Hero (S1), Final CTA (S7) | `cta_click_hero_secondary`, `cta_click_final_secondary` |

### 5.2 Pravidla

- Jeden primarni CTA na viewport (ne dva primary buttony vedle sebe)
- "Start Free Pilot" je vzdy primary (accent bg, nejvetsi vizualni vaha)
- "Watch Technical Demo" je vzdy ghost/secondary (text link nebo outlined button)
- Zadny "Book a Demo" nebo "Talk to Sales" -- cilova audience neduveruje sales funnelum

### 5.3 Tracking implementace

Kazdy `Button` s `trackingEvent` prop vola pri kliku:

```typescript
// Abstraktni tracking funkce -- frontend vyvojar doplni konkretni analytics provider
function trackEvent(eventName: string, properties?: Record<string, string>) {
  // Google Analytics 4 / Mixpanel / PostHog
  // window.gtag?.("event", eventName, properties);
}
```

Eventy k sledovani:
- `cta_click_*` -- kliknuti na CTA (s lokaci: nav/hero/final)
- `section_view_*` -- scroll do viewportu kazde sekce (Intersection Observer)
- `scroll_depth_25/50/75/100` -- procento stranky scrollovane

---

## 6. SEO specifikace

### 6.1 Meta tagy (v layout.tsx metadata exportu)

```typescript
export const metadata: Metadata = {
  title: "qawave.ai \u2014 The Edge of QA Automation",
  description:
    "Agentic AI that autonomously discovers, tests, and maintains your application. Engineering-grade governance with full audit trail.",
  keywords: [
    "agentic testing",
    "autonomous QA",
    "AI test automation",
    "qawave",
    "AI testing tools 2026",
    "test maintenance automation",
  ],
  authors: [{ name: "qawave.ai" }],
  creator: "qawave.ai",
  metadataBase: new URL("https://qawave.ai"),
  alternates: {
    canonical: "https://qawave.ai",
  },
  openGraph: {
    title: "qawave.ai \u2014 The Edge of QA Automation",
    description:
      "Autonomous AI agents that explore your application, generate tests for untested paths, and adapt when your product changes.",
    url: "https://qawave.ai",
    siteName: "qawave.ai",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "qawave.ai \u2014 The Edge of QA Automation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "qawave.ai \u2014 The Edge of QA Automation",
    description:
      "Agentic AI that autonomously discovers, tests, and maintains your application.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};
```

### 6.2 Structured data (JSON-LD)

Vlozit do `layout.tsx` jako `<script type="application/ld+json">`:

```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "qawave.ai",
  "applicationCategory": "DeveloperApplication",
  "description": "Agentic AI platform for autonomous QA test discovery, maintenance, and governance.",
  "url": "https://qawave.ai",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
    "description": "Free technical pilot"
  },
  "operatingSystem": "Web-based",
  "creator": {
    "@type": "Organization",
    "name": "qawave.ai",
    "url": "https://qawave.ai"
  }
}
```

Druhy blok -- Organization:

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "qawave.ai",
  "url": "https://qawave.ai",
  "logo": "https://qawave.ai/logo.png",
  "description": "The Edge of QA Automation. Agentic AI for QA Engineering.",
  "sameAs": []
}
```

### 6.3 Semanticka struktura HTML

- Jeden `<h1>` na strance (Hero headline)
- Kazda sekce ma `<h2>` (Problem, UVP, How It Works, Social Proof, Tech Credibility, CTA)
- Podnadpisy uvnitr sekci `<h3>` (nazvy piliru, nazvy kroku)
- Vsechny sekce obaleny v `<section>` s `aria-label`
- `<header>` pro Navbar, `<footer>` pro Footer, `<main>` pro obsah stranky
- `<nav>` uvnitr Navbar s `aria-label="Main navigation"`

---

## 7. Implementacni poradi

Frontend vyvojar by mel implementovat v tomto poradi:

| Faze | Soubory | Duvod |
|---|---|---|
| **1. Zaklad** | `data/landing.ts`, `lib/motion.ts` | Data a animacni presety pouzivane vsude |
| **2. UI primitiva** | `ui/button.tsx`, `ui/badge.tsx`, `ui/card.tsx`, `ui/section-wrapper.tsx` | Zakladni stavebni bloky |
| **3. Specialni UI** | `ui/animated-counter.tsx`, `ui/metric-card.tsx`, `ui/integration-badge.tsx`, `ui/scroll-indicator.tsx` | Komponenty specificky pro landing page |
| **4. Layout** | `layout/navbar.tsx`, `layout/footer.tsx` | Obalka stranky |
| **5. Sekce** | `sections/hero-section.tsx` -> `problem-section.tsx` -> `uvp-section.tsx` -> `how-it-works-section.tsx` -> `social-proof-section.tsx` -> `tech-cred-section.tsx` -> `cta-section.tsx` | Shora dolu, kazda sekce testovatelna samostatne |
| **6. Kompozice** | `app/page.tsx`, uprava `app/layout.tsx` | Finalni skladba a SEO |

---

## 8. Poznamky pro frontend vyvojare

1. **"use client"** direktiva je nutna pouze v komponentach pouzivajicich Framer Motion hooks (useInView, useScroll, useMotionValue) nebo React hooks (useState, useEffect). Section komponenty budou typicky "use client". SectionWrapper a ciste prezentacni komponenty mohou zustat Server Components.

2. **Ikony z lucide-react** se importuji jmenovite: `import { Radar, RefreshCw, ShieldCheck } from "lucide-react"`. Pro dynamicky vyber ikony podle stringu z dat pouzit mapovaci objekt.

3. **cn() utility** z `src/lib/utils.ts` pouzivat pro vsechny kondicionalni tridy.

4. **Tailwind v4 tema** je definovana v `globals.css` pomoci `@theme inline {}`. Barvy se pouzivaji primo: `bg-background`, `text-foreground`, `text-accent`, `bg-surface-raised`, `border-border` atd. Neexistuji zadne tailwind.config -- vse je v CSS.

5. **Responzivita** pres standardni Tailwind breakpointy: `sm:` (640px), `md:` (768px), `lg:` (1024px), `xl:` (1280px). Mobile-first pristup.

6. **Pristupnost**: kazda interaktivni komponenta musi mit viditelny focus ring, spravne ARIA atributy, a podpuovat klavesnicovou navigaci. Testovat s VoiceOver / screen readerem.

7. **Performance**: Hero sekce nema mit zadne lazy-loaded prvky. Sekce pod foldem (S5-S7) mohou vyuzit `loading="lazy"` na obrazcich. Framer Motion importovat dynamicky kde je to mozne.

8. **Reduce motion**: vsechny Framer Motion animace podmenit `useReducedMotion()`. Pri `true`: duration = 0, zadny posun, counter ukazuje cilovou hodnotu okamzite.

---

```
---HANDOFF---
OD: web-designer
KOMU: frontend-vyvojar
STATUS: hotovo
VYSTUP: docs/web-design.md
DALSI KROK: Frontend vyvojar implementuje komponenty a stranku podle specifikace
---/HANDOFF---
```
