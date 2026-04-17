# qawave.ai -- UI Design System & Component Specifications

> **Role:** UI Designer
> **Datum:** 2026-04-15
> **Verze:** 1.0
> **Stav:** Hotovo -- pripraveno pro Frontend vyvojare
> **Zalozeno na:** docs/ux-wireframe.md, docs/copy.md, qawave-web-strategy.md

---

## 0. Design Token Reference

Tyto tokeny jsou definovany v `src/app/globals.css` pod `@theme inline`. NEMENIT -- pouzivat primo jako Tailwind utility classes.

| Token | Hodnota | Tailwind class |
|---|---|---|
| Background | `#050505` | `bg-background` |
| Foreground | `#ededed` | `text-foreground` |
| Accent | `#4f46e5` | `bg-accent` / `text-accent` |
| Accent Light | `#6366f1` | `bg-accent-light` / `text-accent-light` |
| Accent Dark | `#3730a3` | `bg-accent-dark` / `text-accent-dark` |
| Accent Muted | `rgba(79,70,229,0.15)` | `bg-accent-muted` |
| Accent Foreground | `#e0e7ff` | `text-accent-foreground` |
| Surface | `#0a0a0c` | `bg-surface` |
| Surface Raised | `#111113` | `bg-surface-raised` |
| Surface Overlay | `#18181b` | `bg-surface-overlay` |
| Border | `rgba(255,255,255,0.06)` | `border-border` |
| Border Accent | `rgba(79,70,229,0.3)` | `border-border-accent` |
| Neutral 400 | `#a1a1aa` | `text-neutral-400` |
| Neutral 500 | `#71717a` | `text-neutral-500` |
| Neutral 700 | `#3f3f46` | `border-neutral-700` |
| Neutral 800 | `#27272a` | `bg-neutral-800` |
| Font Sans | Geist Sans | `font-sans` |
| Font Mono | Geist Mono | `font-mono` |

---

## 1. Typograficka skala

Vsechny velikosti pouzivaji `clamp()` pro plynulou responzivitu. Tailwind classes pouzivaji standardni utility + arbitrary values kde je treba.

### H1 -- Hero Headline

```
className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] text-foreground"
```

| Vlastnost | Hodnota |
|---|---|
| Font size | `clamp(2.5rem, 5vw + 1rem, 4.5rem)` -- realizovano pres `text-5xl md:text-6xl lg:text-7xl` |
| Font weight | `font-bold` (700) |
| Line height | `leading-[1.08]` |
| Letter spacing | `tracking-tight` (-0.025em) |
| Color | `text-foreground` (#ededed) |

### H2 -- Section Headline

```
className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.12] text-foreground"
```

| Vlastnost | Hodnota |
|---|---|
| Font size | `text-3xl md:text-4xl lg:text-5xl` |
| Font weight | `font-bold` (700) |
| Line height | `leading-[1.12]` |
| Letter spacing | `tracking-tight` (-0.025em) |
| Color | `text-foreground` (#ededed) |

### H3 -- Card / Step Title

```
className="text-xl md:text-2xl font-semibold tracking-tight leading-snug text-foreground"
```

| Vlastnost | Hodnota |
|---|---|
| Font size | `text-xl md:text-2xl` |
| Font weight | `font-semibold` (600) |
| Line height | `leading-snug` (1.375) |
| Letter spacing | `tracking-tight` (-0.025em) |
| Color | `text-foreground` (#ededed) |

### Body -- Primary Text

```
className="text-base md:text-lg leading-relaxed text-neutral-400"
```

| Vlastnost | Hodnota |
|---|---|
| Font size | `text-base md:text-lg` (16px / 18px) |
| Font weight | `font-normal` (400) -- implicitni |
| Line height | `leading-relaxed` (1.625) |
| Color | `text-neutral-400` (#a1a1aa) |

### Body Small -- Secondary Text

```
className="text-sm md:text-base leading-relaxed text-neutral-500"
```

| Vlastnost | Hodnota |
|---|---|
| Font size | `text-sm md:text-base` (14px / 16px) |
| Font weight | `font-normal` (400) |
| Line height | `leading-relaxed` (1.625) |
| Color | `text-neutral-500` (#71717a) |

### Caption -- Labels, Small Meta

```
className="text-xs md:text-sm font-medium uppercase tracking-widest text-neutral-500"
```

| Vlastnost | Hodnota |
|---|---|
| Font size | `text-xs md:text-sm` (12px / 14px) |
| Font weight | `font-medium` (500) |
| Letter spacing | `tracking-widest` (0.1em) |
| Text transform | `uppercase` |
| Color | `text-neutral-500` (#71717a) |

### Mono -- Code / Technical Text

```
className="font-mono text-sm text-accent-foreground"
```

| Vlastnost | Hodnota |
|---|---|
| Font family | `font-mono` (Geist Mono) |
| Font size | `text-sm` (14px) |
| Color | `text-accent-foreground` (#e0e7ff) |

### Tagline -- Pillar Taglines (anglicke)

```
className="text-base md:text-lg font-normal italic leading-relaxed text-accent-light"
```

| Vlastnost | Hodnota |
|---|---|
| Font size | `text-base md:text-lg` |
| Font style | `italic` |
| Color | `text-accent-light` (#6366f1) |

### Stat Number -- XXL Metric Numbers

```
className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-none text-foreground"
```

| Vlastnost | Hodnota |
|---|---|
| Font size | `text-5xl md:text-6xl lg:text-7xl` |
| Font weight | `font-bold` (700) |
| Line height | `leading-none` (1) |
| Letter spacing | `tracking-tighter` (-0.05em) |
| Color | `text-foreground` (#ededed) |

---

## 2. Spacing system

### Mezi sekcemi

```
className="py-24 md:py-32 lg:py-40"
```

| Kontext | Tailwind class |
|---|---|
| Vertikalni padding sekce (standard) | `py-24 md:py-32 lg:py-40` |
| Hero sekce (full viewport) | `min-h-screen` |
| Final CTA sekce (velky prostor) | `py-32 md:py-40 lg:py-48` |
| Mezera mezi section headline a obsahem | `mb-16 md:mb-20` |
| Mezera mezi section headline a subheadline | `mt-4 md:mt-6` |

### Uvnitr sekci

| Kontext | Tailwind class |
|---|---|
| Grid gap (karty) | `gap-6 md:gap-8` |
| Stack gap (vertikalni obsah) | `space-y-6 md:space-y-8` |
| Mezi headline a popisem v karte | `mt-3` |
| Mezi popisem a linkem v karte | `mt-4 md:mt-6` |
| Mezi ikonou a headline v karte | `mt-4` |

### Padding karet

| Kontext | Tailwind class |
|---|---|
| Velka karta (UVP pillar) | `p-6 md:p-8 lg:p-10` |
| Stredni karta (Stat, Step) | `p-6 md:p-8` |
| Badge (integration) | `px-4 py-3 md:px-5 md:py-4` |

### Sirka obsahu

| Kontext | Tailwind class |
|---|---|
| Section wrapper (max-width) | `mx-auto max-w-7xl px-4 sm:px-6 lg:px-8` |
| Uzsi blok textu (headline + subheadline) | `max-w-3xl mx-auto` |
| Sirssi obsah (grid karet) | `max-w-6xl mx-auto` |

---

## 3. Komponentove specifikace

### 3.1 Section Wrapper

Kazda sekce pouziva tento wrapper pro konzistentni layout.

```tsx
// Outer section element
className="relative py-24 md:py-32 lg:py-40"

// Inner container
className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
```

Varianta pro centrovany headline blok:

```tsx
// Headline container inside section
className="mx-auto max-w-3xl text-center mb-16 md:mb-20"
```

---

### 3.2 Header (Sticky Navigation)

#### Wrapper

```tsx
// <header> element
className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"

// Stav: nahore (scroll = 0) -- transparentni
className="bg-transparent"

// Stav: scrolled (scroll > 80px) -- solid s blur
className="bg-background/80 backdrop-blur-lg border-b border-border"
```

#### Vnitrni layout

```tsx
// Nav container
className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-18"
```

#### Logo

```tsx
// Logo text
className="text-lg font-bold tracking-tight text-foreground"

// ".ai" cast
className="text-accent"
```

#### Nav Link (desktop)

```tsx
// Default
className="text-sm font-medium text-neutral-400 transition-colors duration-200 hover:text-foreground focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"

// Active (aktualni sekce)
className="text-sm font-medium text-foreground"
```

#### Mobile Hamburger Button

```tsx
className="md:hidden flex items-center justify-center w-10 h-10 rounded-md text-neutral-400 hover:text-foreground focus-visible:outline-2 focus-visible:outline-accent"
```

#### Mobile Menu Overlay

```tsx
// Overlay panel
className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl"

// Mobile nav link
className="block px-4 py-3 text-lg font-medium text-neutral-400 hover:text-foreground transition-colors"
```

---

### 3.3 Button Primary (Start Free Pilot)

```tsx
className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 md:px-8 md:py-4 text-sm md:text-base font-semibold text-white shadow-[0_0_20px_rgba(79,70,229,0.3)] transition-all duration-200 hover:bg-accent-light hover:shadow-[0_0_30px_rgba(79,70,229,0.5)] hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 active:scale-[0.98] active:bg-accent-dark disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none"
```

| Stav | Detaily |
|---|---|
| Default | `bg-accent` + `text-white` + `shadow-[0_0_20px_rgba(79,70,229,0.3)]` (glow) |
| Hover | `bg-accent-light` + `scale-[1.03]` + `shadow-[0_0_30px_rgba(79,70,229,0.5)]` (silnejsi glow) |
| Focus | `outline-2 outline-accent outline-offset-2` |
| Active/Press | `scale-[0.98]` + `bg-accent-dark` |
| Disabled | `opacity-50` + `cursor-not-allowed` |

Varianta velky (Hero + Final CTA):

```tsx
className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-8 py-4 md:px-10 md:py-5 text-base md:text-lg font-semibold text-white shadow-[0_0_24px_rgba(79,70,229,0.35)] transition-all duration-200 hover:bg-accent-light hover:shadow-[0_0_36px_rgba(79,70,229,0.55)] hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 active:scale-[0.98] active:bg-accent-dark"
```

Varianta nav (kompaktni):

```tsx
className="inline-flex items-center justify-center rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white transition-all duration-200 hover:bg-accent-light focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 active:bg-accent-dark"
```

---

### 3.4 Button Secondary (Watch Technical Demo)

Ghost/link styl -- zadne pozadi, jen text s ikonou.

```tsx
className="inline-flex items-center gap-1.5 text-sm md:text-base font-medium text-neutral-400 transition-all duration-200 hover:text-accent-light hover:underline hover:underline-offset-4 hover:decoration-accent-light/50 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
```

| Stav | Detaily |
|---|---|
| Default | `text-neutral-400` bez podtrzeni |
| Hover | `text-accent-light` + `underline underline-offset-4 decoration-accent-light/50` |
| Focus | `outline-2 outline-accent outline-offset-2` |

Ikona (sipka) vedle textu:

```tsx
// Arrow icon (lucide-react ArrowRight) za textem
className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
```

Pouziti: obalte tlacitko do `group` tridy pro hover efekt ikony.

---

### 3.5 Badge / Chip (Hero badge nad headline)

```tsx
className="inline-flex items-center gap-1.5 rounded-full border border-border-accent bg-accent-muted px-3 py-1 md:px-4 md:py-1.5 text-xs md:text-sm font-medium text-accent-foreground"
```

| Vlastnost | Hodnota |
|---|---|
| Background | `bg-accent-muted` (rgba(79,70,229,0.15)) |
| Border | `border border-border-accent` (rgba(79,70,229,0.3)) |
| Text | `text-accent-foreground` (#e0e7ff) |
| Shape | `rounded-full` |
| Size | `text-xs md:text-sm` + `px-3 py-1 md:px-4 md:py-1.5` |

---

### 3.6 Stat Card (Problem Statement -- S2)

```tsx
// Karta wrapper
className="group relative rounded-2xl border border-border bg-surface-raised p-6 md:p-8 text-center transition-all duration-300 hover:border-border-accent hover:shadow-[0_0_30px_rgba(79,70,229,0.1)]"

// Cislo (XXL)
className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-none text-foreground"

// Label (pod cislem)
className="mt-3 text-sm md:text-base font-semibold text-foreground"

// Supporting text
className="mt-2 text-sm leading-relaxed text-neutral-500"
```

Layout uvnitr karty: vertikalni stack, centrovany.

Grid pro 3 karty:

```tsx
className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
```

---

### 3.7 UVP Pillar Card (S3)

```tsx
// Karta wrapper (klikatelna)
className="group relative flex flex-col rounded-2xl border border-border bg-surface-raised p-6 md:p-8 lg:p-10 transition-all duration-300 hover:-translate-y-1 hover:border-border-accent hover:shadow-[0_0_40px_rgba(79,70,229,0.12)]"

// Icon area
className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-xl bg-accent-muted text-accent transition-transform duration-300 group-hover:scale-110"

// Icon (lucide-react, 24px)
className="w-6 h-6"

// H3 Headline
className="mt-4 text-xl md:text-2xl font-semibold tracking-tight leading-snug text-foreground"

// Tagline (anglicky, italic)
className="mt-2 text-base md:text-lg font-normal italic leading-relaxed text-accent-light"

// Description
className="mt-3 text-sm md:text-base leading-relaxed text-neutral-400"

// Link "Zjistit vic" (na spodku karty)
className="mt-auto pt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors duration-200 group-hover:text-accent-light"

// Link arrow icon
className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
```

Grid pro 3 karty:

```tsx
className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
```

Dulezite: `flex flex-col` + `mt-auto` na linku zajisti, ze link je vzdy na spodku karty bez ohledu na delku popisu.

---

### 3.8 Step Card (How It Works -- S4)

```tsx
// Step wrapper
className="relative flex flex-col items-center text-center"

// Step number
className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-accent bg-accent-muted text-lg md:text-xl font-bold text-accent font-mono"

// Step title (H3)
className="mt-4 text-xl md:text-2xl font-semibold tracking-tight leading-snug text-foreground"

// Step description
className="mt-3 max-w-xs text-sm md:text-base leading-relaxed text-neutral-400"
```

#### Connector Line (desktop -- horizontalni)

Implementace pres absolutni pozicovani nebo SVG mezi kroky.

```tsx
// Connector container (mezi kroky, desktop only)
className="hidden md:block absolute top-5 md:top-6 left-1/2 w-full h-0.5"

// Connector line
className="h-px bg-gradient-to-r from-accent/50 via-accent/20 to-accent/50"
```

Alternativni pristup -- SVG path pro animovane kresleni:

```tsx
// SVG line container
className="hidden md:block absolute top-5 md:top-6"

// SVG element
// stroke: var(--color-accent), strokeWidth: 2, strokeDasharray pro draw animaci
```

#### Connector Line (mobile -- vertikalni)

```tsx
// Vertikalni connector (mobile only)
className="md:hidden w-px h-8 bg-gradient-to-b from-accent/50 to-accent/20 mx-auto"
```

Grid pro 3 kroky (desktop):

```tsx
className="relative grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8"
```

---

### 3.9 Metric Display (Social Proof -- S5)

```tsx
// Metric wrapper
className="text-center p-6 md:p-8"

// Metric number
className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-none text-accent"

// Metric label
className="mt-3 text-sm md:text-base font-medium text-neutral-400"
```

Grid pro 3 metriky (s oddelovaci):

```tsx
// Wrapper s horni/dolni linkou
className="border-t border-b border-border py-8 md:py-12"

// Grid
className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border"
```

---

### 3.10 Testimonial Block (S5)

```tsx
// Testimonial wrapper
className="mx-auto max-w-3xl text-center mt-12 md:mt-16"

// Quote text
className="text-lg md:text-xl lg:text-2xl font-normal italic leading-relaxed text-foreground/90"

// Uvozovky (dekorativni, volitelne)
className="text-5xl leading-none text-accent/30 font-serif"

// Attribution wrapper
className="mt-6 flex items-center justify-center gap-3"

// Avatar placeholder (kruh)
className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-surface-overlay border border-border"

// Name + role wrapper
className="text-left"

// Name
className="text-sm font-semibold text-foreground"

// Role / Company
className="text-sm text-neutral-500"
```

---

### 3.11 Logo Strip (Social Proof -- S5)

```tsx
// Container
className="flex items-center justify-center gap-8 md:gap-12 opacity-50 grayscale"

// Jednotlivy logo wrapper
className="flex-shrink-0 h-8 md:h-10 transition-opacity duration-300 hover:opacity-100 hover:grayscale-0"
```

Pro marquee (nekonecny scroll) efekt:

```tsx
// Outer wrapper (overflow hidden)
className="overflow-hidden relative"

// Inner track (animovany pres CSS nebo Framer Motion)
className="flex items-center gap-8 md:gap-12 animate-marquee"

// V globals.css pridat:
// @keyframes marquee {
//   from { transform: translateX(0); }
//   to { transform: translateX(-50%); }
// }
// .animate-marquee { animation: marquee 30s linear infinite; }
```

---

### 3.12 Integration Badge (Tech Credibility -- S6)

```tsx
// Badge wrapper
className="group flex flex-col items-center gap-2.5 rounded-xl border border-border bg-surface-raised px-4 py-3 md:px-5 md:py-4 transition-all duration-300 hover:border-border-accent hover:bg-surface-overlay hover:shadow-[0_0_20px_rgba(79,70,229,0.08)]"

// Icon container
className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 text-neutral-400 transition-colors duration-300 group-hover:text-foreground"

// Icon (SVG nebo lucide-react)
className="w-6 h-6 md:w-7 md:h-7"

// Label
className="text-xs md:text-sm font-medium text-neutral-500 transition-colors duration-300 group-hover:text-neutral-400"
```

Grid pro badge:

```tsx
className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 md:gap-6"
```

---

### 3.13 Footer

```tsx
// Footer wrapper
className="border-t border-border bg-surface py-12 md:py-16"

// Footer inner
className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"

// Footer grid (4 sloupce)
className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"

// Column heading
className="text-sm font-semibold uppercase tracking-widest text-foreground mb-4"

// Column link
className="block py-1 text-sm text-neutral-500 transition-colors duration-200 hover:text-neutral-400"

// Bottom bar
className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4"

// Copyright
className="text-xs text-neutral-500"

// Bottom links (Privacy, Terms)
className="flex items-center gap-6"
```

---

## 4. Animace (Framer Motion)

### 4.1 fadeInUp -- Vstup sekci a elementu pri scrollu

```tsx
// Framer Motion variants
const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1], // cubic-bezier (ease-out)
    },
  },
};
```

Pouziti:

```tsx
<motion.div
  variants={fadeInUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-100px" }}
>
```

### 4.2 staggerContainer -- Stagger pro skupiny karet

```tsx
const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15, // 150ms mezi kartami (S2 Problem)
      // Pro UVP (S3): 0.2
      // Pro Steps (S4): 0.25
      // Pro Badges (S6): 0.08
    },
  },
};

const staggerItem = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};
```

Pouziti:

```tsx
<motion.div
  variants={staggerContainer}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-80px" }}
>
  {items.map((item) => (
    <motion.div key={item.id} variants={staggerItem}>
      {/* card content */}
    </motion.div>
  ))}
</motion.div>
```

Hodnoty `staggerChildren` pro jednotlive sekce:

| Sekce | staggerChildren |
|---|---|
| S2 Problem (stat karty) | `0.15` |
| S3 UVP Pillars | `0.2` |
| S4 How It Works (kroky) | `0.25` |
| S5 Social Proof (metriky) | `0.15` |
| S6 Tech Credibility (badge) | `0.08` |

### 4.3 Counter animace (cisla)

```tsx
// Pouziti: AnimatedCounter komponenta
// Props: from (0), to (cilova hodnota), duration (1.2s), suffix ("%", "x", "K EUR")

import { useMotionValue, useTransform, animate, useInView } from "framer-motion";

const counterAnimation = {
  duration: 1.2,
  ease: [0.25, 0.1, 0.25, 1],
};

// useEffect trigger:
// Kdyz je element inView (useInView, once: true):
// animate(motionValue, targetValue, counterAnimation)
// useTransform(motionValue, (v) => Math.round(v))
```

### 4.4 Hero vizual -- Load animace

```tsx
// Hero text sekvence
const heroTextSequence = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

// Poradi custom hodnot (i):
// 0 = badge
// 1 = headline
// 2 = subheadline
// 3 = CTA buttons

// Hero vizualni prvek (graf/nodes)
const heroVisual = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.4,
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};
```

### 4.5 Hero paralax

```tsx
import { useScroll, useTransform } from "framer-motion";

// V HeroSection komponente:
const { scrollYProgress } = useScroll();
const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
const textY = useTransform(scrollYProgress, [0, 0.5], ["0%", "15%"]);
```

### 4.6 Hover transforms

```tsx
// Karta hover (UVP, How It Works)
const cardHover = {
  rest: {
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  hover: {
    y: -4,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

// CTA button pulse glow (Final CTA sekce)
const ctaPulse = {
  animate: {
    boxShadow: [
      "0 0 20px rgba(79,70,229,0.3)",
      "0 0 40px rgba(79,70,229,0.5)",
      "0 0 20px rgba(79,70,229,0.3)",
    ],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// SVG connector draw (How It Works sipky)
const connectorDraw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { duration: 0.8, ease: "easeInOut" },
      opacity: { duration: 0.3 },
    },
  },
};
```

### 4.7 Scroll indicator (Hero)

```tsx
const scrollIndicator = {
  animate: {
    y: [0, 8, 0],
    opacity: [0.6, 1, 0.6],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Fade-out pri scrollu (CSS):
// className="transition-opacity duration-300"
// Nastavit opacity: 0 kdyz scroll > 100px (pres useScroll)
```

### 4.8 Reduce Motion

```tsx
import { useReducedMotion } from "framer-motion";

// V kazde komponente s animaci:
const shouldReduceMotion = useReducedMotion();

// Pouziti:
const variants = shouldReduceMotion
  ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
  : fadeInUp;
```

Vsechny animace MUSI respektovat `prefers-reduced-motion: reduce`:
- Fade/slide animace: okamzite zobrazeni (duration: 0)
- Paralax: vypnut
- Counter: okamzite cilova hodnota
- Hover: jen zmena barvy, zadny translateY/scale
- CTA pulse: staticky glow, bez animace

---

## 5. Responzivni breakpointy

Tailwind v4 default breakpointy (mobile-first):

| Breakpoint | Min-width | Pouziti |
|---|---|---|
| (default) | 0px | Mobile layout (1 sloupec, mensi text) |
| `sm:` | 640px | Drobne layout adjustments |
| `md:` | 768px | Tablet -- prechod na multi-column layouts |
| `lg:` | 1024px | Desktop -- plne layouts |
| `xl:` | 1280px | Siroke displeje -- vetsi padding |
| `2xl:` | 1536px | Ultra-wide -- max-width constraints |

### Layout zmeny podle breakpointu

#### Mobile (default, < 768px)

- Vsechny gridy: 1 sloupec (`grid-cols-1`)
- Hero: jednosloupcovy, text nad vizualem
- Navigace: hamburger menu
- CTA buttons: `w-full` (plna sirka)
- Text zarovnani: `text-left` (krome stat numbers -- `text-center`)
- Badge grid (S6): 3 sloupce (`grid-cols-3`)
- Footer grid: 2 sloupce (`grid-cols-2`)
- Connector lines (S4): vertikalni

#### Tablet (md: 768px+)

- Karty: 3 sloupce (`md:grid-cols-3`)
- Hero: 2 sloupce (`md:grid-cols-[55%_45%]`)
- Navigace: viditelne links (desktop nav)
- CTA buttons: `w-auto` (inline)
- Text zarovnani: `md:text-center` (sekce headlines)
- Footer grid: 4 sloupce (`md:grid-cols-4`)
- Connector lines (S4): horizontalni

#### Desktop (lg: 1024px+)

- Vetsi font sizes (lg:text-7xl pro H1)
- Vetsi padding (lg:py-40 pro sekce)
- Vetsi card padding (lg:p-10)
- Badge grid (S6): 5 sloupcu (`md:grid-cols-5`)

---

## 6. Specificke sekce -- kompletni assembly

### S1 Hero Section (100vh)

```tsx
// Section
className="relative min-h-screen flex items-center overflow-hidden"

// Background gradient (dekorativni, za obsahem)
// Jemny radialni gradient accent barvy v pravem hornim rohu
className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_70%_20%,rgba(79,70,229,0.08),transparent)]"

// Content grid
className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-[55%_45%] gap-12 md:gap-8 items-center"

// Left column (text)
className="flex flex-col items-start space-y-6"

// Right column (visual)
className="relative flex items-center justify-center"

// Scroll indicator (dole centrovany)
className="absolute bottom-8 left-1/2 -translate-x-1/2 text-neutral-500"
```

### S2 Problem Statement (~80vh)

```tsx
// Section
className="relative py-24 md:py-32 lg:py-40"

// Container
className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"

// Headline block
className="mx-auto max-w-3xl text-center mb-16 md:mb-20"

// Cards grid
className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto"

// Closing paragraph
className="mx-auto max-w-2xl text-center mt-12 md:mt-16 text-base md:text-lg leading-relaxed text-neutral-400"
```

### S3 UVP Pillars (~100vh)

```tsx
// Section
className="relative py-24 md:py-32 lg:py-40 bg-surface"

// Container
className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"

// Headline block
className="mx-auto max-w-3xl text-center mb-16 md:mb-20"

// Cards grid
className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
```

Poznamka: S3 ma `bg-surface` pro vizualni odliseni od okolnich sekci (jemna zmena pozadi).

### S4 How It Works (~80vh)

```tsx
// Section
className="relative py-24 md:py-32 lg:py-40"

// Container
className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"

// Headline block
className="mx-auto max-w-3xl text-center mb-16 md:mb-20"

// Steps grid
className="relative grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 max-w-5xl mx-auto"
```

### S5 Social Proof (~60vh)

```tsx
// Section
className="relative py-24 md:py-32 lg:py-40 bg-surface"

// Container
className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"

// Logo strip
className="mb-12 md:mb-16"

// Metrics band
className="border-t border-b border-border py-8 md:py-12 mb-12 md:mb-16"

// Metrics grid (s oddelovaci)
className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border"

// Testimonial block
className="mx-auto max-w-3xl text-center"
```

### S6 Tech Credibility (~40vh)

```tsx
// Section
className="relative py-16 md:py-24 lg:py-32"

// Container
className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"

// Headline block
className="mx-auto max-w-3xl text-center mb-12 md:mb-16"

// Badge grid
className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 md:gap-6 max-w-4xl mx-auto"

// Exit strategy line (pod gridem)
className="mt-10 md:mt-12 text-center text-sm md:text-base text-neutral-400 max-w-xl mx-auto"
```

### S7 Final CTA (~60vh)

```tsx
// Section (extra velky padding)
className="relative py-32 md:py-40 lg:py-48"

// Background glow (dekorativni)
className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_50%,rgba(79,70,229,0.1),transparent)]"

// Container
className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center"

// Headline
// pouzij H2 typografii

// Subheadline wrapper (3 radky argumentu)
className="mt-6 space-y-1 text-base md:text-lg text-neutral-400"

// CTA wrapper
className="mt-10 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
```

---

## 7. Ikony

Projekt pouziva `lucide-react`. Doporucene ikony pro kazdy pilar a krok:

| Kontext | Ikona | Import |
|---|---|---|
| Pillar 1: Autonomous Discovery | `Radar` | `import { Radar } from "lucide-react"` |
| Pillar 2: Intelligent Maintenance | `RefreshCcw` | `import { RefreshCcw } from "lucide-react"` |
| Pillar 3: Governance | `ShieldCheck` | `import { ShieldCheck } from "lucide-react"` |
| Step 1: Connect Repo | `GitBranch` | `import { GitBranch } from "lucide-react"` |
| Step 2: AI Explores | `BrainCircuit` | `import { BrainCircuit } from "lucide-react"` |
| Step 3: Review & Ship | `CheckCircle` | `import { CheckCircle } from "lucide-react"` |
| CTA Arrow | `ArrowRight` | `import { ArrowRight } from "lucide-react"` |
| Scroll indicator | `ChevronDown` | `import { ChevronDown } from "lucide-react"` |
| External link | `ExternalLink` | `import { ExternalLink } from "lucide-react"` |
| Hamburger menu | `Menu` | `import { Menu } from "lucide-react"` |
| Close menu | `X` | `import { X } from "lucide-react"` |

Velikost ikon: `w-6 h-6` (24px) jako default, `w-5 h-5` (20px) pro mensi kontexty, `w-4 h-4` (16px) pro inline s textem.

---

## 8. Vizualni efekty

### Background gradients (dekorativni)

Hero background:

```tsx
className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_70%_20%,rgba(79,70,229,0.08),transparent)]"
```

Final CTA background:

```tsx
className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_50%,rgba(79,70,229,0.1),transparent)]"
```

### Card glow on hover

Vsechny karty maji na hover jemny accent glow pres box-shadow:

```
hover:shadow-[0_0_30px_rgba(79,70,229,0.1)]     -- stat karty (jemny)
hover:shadow-[0_0_40px_rgba(79,70,229,0.12)]    -- UVP karty (silnejsi)
hover:shadow-[0_0_20px_rgba(79,70,229,0.08)]    -- integration badge (jemny)
```

### Glow na CTA button

Default stav:

```
shadow-[0_0_20px_rgba(79,70,229,0.3)]
```

Hover:

```
hover:shadow-[0_0_30px_rgba(79,70,229,0.5)]
```

---

## 9. Pristupnost (a11y) -- design notes

- Kontrast text/pozadi: `#ededed` na `#050505` = 18.1:1 (WCAG AAA)
- Kontrast sekundarni text: `#a1a1aa` na `#050505` = 7.3:1 (WCAG AAA)
- Kontrast muted text: `#71717a` na `#050505` = 4.6:1 (WCAG AA)
- Accent na pozadi: `#4f46e5` na `#050505` = 4.1:1 (WCAG AA pro velky text, nedostatecny pro maly -- pouzivat jako bg s bilym textem, ne jako text barvu na maly text)
- Accent light na pozadi: `#6366f1` na `#050505` = 4.8:1 (WCAG AA)
- Focus ring: `2px solid #4f46e5` s `outline-offset: 2px` -- viditelny na vsech pozadich
- Touch targets: minimum `44x44px` -- vsechny buttony a linky splnuji diky padding
- Skip-to-content link: prvni fokusovatelny element

---

```
---HANDOFF---
OD: ui-designer
KOMU: frontend-vyvojar
STATUS: hotovo
VYSTUP: docs/ui-design.md
DALSI KROK: Frontend vyvojar implementuje komponenty podle specifikace
---/HANDOFF---
```
