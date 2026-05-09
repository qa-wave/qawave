# Wave Rebrand — Visual Spec

> **Status:** v1.0 · canonical
> **Source:** `docs/brand.md` v1.0 (přepisuje `ui-design.md` ve všech kolizích)
> **Scope:** (marketing) route group + new "Wave" preset na `/design/styles`. Design varianty `/design/{a,b,c,d}` a stávající 10 presetů jsou nedotčené.

---

## 1. Diff overview — current vs target

| Dimension | Current (Klasik / indigo) | Target (Wave) | Action |
|---|---|---|---|
| Background | `#050505` near-black | `#0F172A` Deep Ocean (slate-900) | Token migration |
| Primary accent | `#4f46e5` indigo | `#0EA5E9` Wave Blue (sky-500) | Token migration |
| Secondary accent | `#6366f1` indigo-light | `#06B6D4` Cyan Crest (cyan-500) | Token migration |
| Surface | `#0a0a0c` | `#1E293B` slate-800 | Token migration |
| Surface raised | `#111113` | `#334155` slate-700 | Token migration |
| Surface overlay | `#18181b` | `#475569` slate-600 | Token migration |
| Accent muted | `rgba(79,70,229,0.15)` | `rgba(14,165,233,0.15)` | Token migration |
| Accent foreground | `#e0e7ff` indigo-100 | `#E0F2FE` sky-100 | Token migration |
| Border accent | `rgba(79,70,229,0.3)` | `rgba(14,165,233,0.4)` | Token migration |
| H1 weight | `font-bold` (700) | `font-semibold` (600) | Typography update |
| Hero gradient decor | `rgba(79,70,229,0.08)` radial | `linear-gradient(135deg, #0EA5E9, #06B6D4, #8B5CF6)` at ~18% opacity | Visual update |
| Fonts | Geist only | Geist + Instrument Serif (new) | layout.tsx addition |
| Sections (count) | 9 sections | 12 sections (3 new: Built-with, Agentic moat, FAQ) | New components |
| Sections (drop) | case-studies, portfolio, tech-cred | Moved to `_archived/` | Archive |
| Comparison table | absent | New section (dark surface, cyan/amber/error indicators) | New component |
| CTA primary label | "Start Free Pilot" | "Book a 20-min discovery call" | Copy update |
| CTA secondary label | "Watch Technical Demo" | "Join waitlist" | Copy update |
| Icon set (pillars) | Radar / RefreshCcw / ShieldCheck | Sparkles / HeartPulse / Target | Icon swap |
| Card hover glow | `rgba(79,70,229,0.1)` | `rgba(14,165,233,0.1)` | Token cascade |
| Focus ring | `2px solid #4f46e5` | `2px solid #0EA5E9` | Token cascade |
| **Unchanged** | spacing system, breakpoints, Framer Motion variants, stagger values, Geist Sans as primary, `max-w-7xl` container, `py-24 md:py-32 lg:py-40` section rhythm | — | Keep as-is |

---

## 2. globals.css migration

Full before/after diff for `src/app/globals.css` under `@theme inline`. Only the tokens that change are listed — all other `@theme` rules stay unchanged.

### 2.1 Color tokens

```css
/* BEFORE */
@theme inline {
  --color-background: #050505;
  --color-accent: #4f46e5;
  --color-accent-light: #6366f1;
  --color-accent-dark: #3730a3;
  --color-accent-muted: rgba(79, 70, 229, 0.15);
  --color-accent-foreground: #e0e7ff;
  --color-surface: #0a0a0c;
  --color-surface-raised: #111113;
  --color-surface-overlay: #18181b;
  --color-border-accent: rgba(79, 70, 229, 0.3);
}
```

```css
/* AFTER */
@theme inline {
  --color-background: #0F172A;          /* Deep Ocean — slate-900 */
  --color-accent: #0EA5E9;              /* Wave Blue — sky-500 */
  --color-accent-light: #06B6D4;        /* Cyan Crest — cyan-500 */
  --color-accent-dark: #0284C7;         /* Wave Blue 600 — sky-600 */
  --color-accent-muted: rgba(14, 165, 233, 0.15);
  --color-accent-foreground: #E0F2FE;   /* Sky 100 */
  --color-surface: #1E293B;             /* Slate 800 */
  --color-surface-raised: #334155;      /* Slate 700 */
  --color-surface-overlay: #475569;     /* Slate 600 */
  --color-border-accent: rgba(14, 165, 233, 0.4);

  /* NEW semantic tokens — add alongside existing */
  --color-wave-blue: #0EA5E9;
  --color-cyan-crest: #06B6D4;
  --color-deep-ocean: #0F172A;
  --color-sea-foam: #F8FAFC;
  --color-ai-purple: #8B5CF6;
  --color-success: #10B981;
  --color-warning: #F59E0B;
  --color-error: #EF4444;
}
```

### 2.2 Typography token

```css
/* BEFORE */
/* H1 uses font-bold (700) — no explicit token, class-level */
```

```css
/* AFTER — document the change in a CSS comment; class changes happen at component level */
/* H1 now uses font-semibold (600) per brand.md §3. Update all .text-foreground.font-bold.tracking-tight
   heading usages to font-semibold. Token not stored in @theme — enforced at component level. */
```

### 2.3 Hero background gradient

```css
/* BEFORE — hero-section.tsx radial decor */
bg-[radial-gradient(ellipse_60%_50%_at_70%_20%,rgba(79,70,229,0.08),transparent)]

/* AFTER — hero-section.tsx radial decor wrapper gets a gradient overlay layer */
/* Layer 1 (gradient mesh, absolute inset-0, opacity ~0.18): */
background: linear-gradient(135deg, #0EA5E9 0%, #06B6D4 50%, #8B5CF6 100%);
opacity: 0.18;

/* Layer 2 (deep radial fade): */
bg-[radial-gradient(ellipse_80%_60%_at_60%_0%,rgba(14,165,233,0.12),transparent_70%)]
```

### 2.4 Framer Motion pulse glow — CTA button

```css
/* BEFORE — ctaPulse variant */
boxShadow: [
  "0 0 20px rgba(79,70,229,0.3)",
  "0 0 40px rgba(79,70,229,0.5)",
  "0 0 20px rgba(79,70,229,0.3)",
]

/* AFTER */
boxShadow: [
  "0 0 20px rgba(14,165,233,0.35)",
  "0 0 40px rgba(14,165,233,0.55)",
  "0 0 20px rgba(14,165,233,0.35)",
]
```

### 2.5 Card hover glows (all sections)

```css
/* BEFORE */
hover:shadow-[0_0_30px_rgba(79,70,229,0.1)]
hover:shadow-[0_0_40px_rgba(79,70,229,0.12)]
hover:shadow-[0_0_20px_rgba(79,70,229,0.08)]

/* AFTER */
hover:shadow-[0_0_30px_rgba(14,165,233,0.1)]
hover:shadow-[0_0_40px_rgba(14,165,233,0.12)]
hover:shadow-[0_0_20px_rgba(14,165,233,0.08)]
```

### 2.6 Focus ring

```css
/* All focus-visible utilities: */
/* BEFORE */
focus-visible:outline-accent  /* resolves to #4f46e5 */

/* AFTER — resolves automatically after token migration */
focus-visible:outline-accent  /* now resolves to #0EA5E9 */
/* No class changes needed — token cascade handles it */
```

### 2.7 Instrument Serif — new font addition

Add to `src/app/layout.tsx`:

```tsx
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";

const geistSans = Geist({ subsets: ["latin"], variable: "--font-sans" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" });
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",          // only regular — italic via CSS font-style
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",        // perf: don't block render
});

// Apply to <html>:
<html className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable}`}>
```

Add token to `globals.css`:

```css
@theme inline {
  /* add alongside existing font tokens */
  --font-serif: var(--font-serif), "Georgia", serif;
}
```

---

## 3. New "Wave" preset definition

Ready-to-paste TypeScript object. See Deliverable 2 section below for the actual file update.

```typescript
{
  id: "wave",
  label: "Wave",
  swatch: "#0EA5E9",
  scheme: "dark",
  vars: {
    "--ds-bg": "#0F172A",
    "--ds-surface": "#1E293B",
    "--ds-surface-2": "#334155",
    "--ds-text": "#F8FAFC",
    "--ds-text-muted": "#94A3B8",
    "--ds-border": "rgba(255,255,255,0.08)",
    "--ds-border-strong": "rgba(14,165,233,0.4)",
    "--ds-accent": "#0EA5E9",
    "--ds-accent-2": "#06B6D4",
    "--ds-accent-soft": "rgba(14,165,233,0.15)",
    "--ds-radius": "1rem",
  },
  rootClass: "bg-[var(--ds-bg)] text-[var(--ds-text)]",
  bodyClass: "qa-style-wave",
  heroDecorClass: "qa-style-wave-hero",
  fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
  headlineSerif: false,
  headlineTransform: "none",
}
```

**Token contract check against `styled-showcase.tsx`:**

| Token consumed by showcase | Wave value |
|---|---|
| `--ds-bg` | `#0F172A` |
| `--ds-surface` | `#1E293B` |
| `--ds-surface-2` | `#334155` |
| `--ds-text` | `#F8FAFC` |
| `--ds-text-muted` | `#94A3B8` |
| `--ds-border` | `rgba(255,255,255,0.08)` |
| `--ds-border-strong` | `rgba(14,165,233,0.4)` |
| `--ds-accent` | `#0EA5E9` |
| `--ds-accent-2` | `#06B6D4` |
| `--ds-accent-soft` | `rgba(14,165,233,0.15)` |
| `--ds-radius` | `1rem` |
| `preset.rootClass` | `bg-[var(--ds-bg)] text-[var(--ds-text)]` |
| `preset.bodyClass` | `qa-style-wave` |
| `preset.heroDecorClass` | `qa-style-wave-hero` |
| `preset.scheme` | `dark` |
| `preset.fontFamily` | Geist Sans stack |
| `preset.headlineSerif` | `false` |
| `preset.headlineTransform` | `"none"` |

All 11 `--ds-*` vars and all structural fields are provided. `componentClass` and `sectionClass` are intentionally omitted — they are optional per the `DesignPreset` interface and the base token set is sufficient.

---

## 4. CSS effects for Wave

New utilities added to `src/app/design/styles/styles.css`:

### `.qa-style-wave-hero` — hero gradient mesh

```css
/* Animated gradient mesh: hero backdrop at ~18% opacity */
/* Uses two blobs positioned with radial-gradient + drift animation */
.qa-style-wave-hero {
  background:
    radial-gradient(ellipse 65% 55% at 65% 10%, rgba(14, 165, 233, 0.28), transparent 65%),
    radial-gradient(ellipse 50% 40% at 20% 80%, rgba(6, 182, 212, 0.20), transparent 60%),
    radial-gradient(ellipse 40% 35% at 85% 75%, rgba(139, 92, 246, 0.18), transparent 60%);
  filter: blur(32px);
  animation: qa-wave-drift 30s ease-in-out infinite alternate;
}
```

### `.qa-style-wave` root scope

```css
/* Sea Foam text selection highlight */
.qa-style-wave ::selection {
  background-color: rgba(14, 165, 233, 0.25);
  color: #F8FAFC;
}
```

### Pulse glow — Wave Blue

Framer Motion handles this at runtime (see §2.4). No static CSS class needed — `--ds-accent-soft` on the button shadow already uses Wave Blue after token assignment.

---

## 5. Per-section visual updates

### 5.1 Hero (Section 1)

**File:** `src/components/sections/hero-section.tsx` — refactor in place

| Element | Current | Wave target |
|---|---|---|
| H1 text | "The Edge of QA Automation" | "Ride the AI wave in QA." |
| H1 weight | `font-bold` | `font-semibold` |
| Subheadline | current copy | "AI agents that test, heal, and protect your code." |
| Badge | current badge text | Wave-branded badge, accent `--color-accent` (Wave Blue) |
| Primary CTA | "Start Free Pilot" | "Book a 20-min discovery call" |
| Secondary CTA | "Watch Technical Demo" | "Join waitlist" |
| Trust pill | absent | `"Your code stays yours. Your tests stay yours. We just run the agents."` — small muted text below CTAs |
| Background decor | single indigo radial | Two-layer: gradient mesh (slow drift) + deep radial fade |
| Accent italic line | absent | Optional: `<em className="font-serif italic">The wave is here.</em>` in subheadline or standalone |

**Tailwind classes for hero gradient decor:**

```tsx
{/* Layer 1 — gradient mesh backdrop */}
<div
  aria-hidden
  className="pointer-events-none absolute inset-0 qa-style-wave-hero"
/>

{/* Layer 2 — deep radial fade at bottom */}
<div
  aria-hidden
  className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(14,165,233,0.06),transparent_70%)]"
/>
```

**H1 Tailwind:**

```
text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] text-[#F8FAFC]
```

### 5.2 Logo bar — Built with (Section 3, new)

**File:** `src/components/sections/built-with-section.tsx` — new file

| Element | Spec |
|---|---|
| Section label | "Built with" — `text-xs uppercase tracking-widest text-[--color-accent-muted]` |
| Badge grid | 5 items: Anthropic · Vercel · Supabase · Cloudflare · Stripe |
| Badge style | Icon + name, `opacity-50 grayscale`, `hover:opacity-100 hover:grayscale-0 transition-all duration-300` |
| Layout | `flex items-center justify-center gap-8 md:gap-12 flex-wrap` |
| Section padding | `py-12 md:py-16` (compact, not full section rhythm) |
| Border | `border-t border-b border-[--color-border]` |

```tsx
// Badge item
<div className="flex items-center gap-2 text-sm font-medium text-neutral-500 opacity-50 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 hover:text-[--color-accent-foreground]">
  {/* SVG icon or lucide placeholder */}
  <span>Anthropic</span>
</div>
```

### 5.3 Problem stats (Section 4)

**File:** `src/components/sections/problem-section.tsx` — update copy + colors

| Element | Current | Wave target |
|---|---|---|
| Section headline | current | "Your test suite is costing you more than you think." |
| Stat number color | `text-foreground` | `text-[--color-accent]` (Wave Blue) |
| Stat label | `text-foreground` | `text-foreground` (unchanged) |
| Supporting text | `text-neutral-500` | `text-[--color-text-muted]` (token-driven) |
| Card hover glow | indigo | `hover:shadow-[0_0_30px_rgba(14,165,233,0.1)]` |
| Stats copy | 25% coverage / 6× hidden cost / 30% senior time | `12 h/eng/week` · `30–40 % CI waste` · `3–6 mo SDET hiring` |

**Wave-specific stat number class:**

```
text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-none text-[var(--color-accent)]
```

### 5.4 How it works — Generate / Heal / Triage (Section 5)

**File:** `src/components/sections/how-it-works-section.tsx` — full content + icon swap

| Current step | New step | Icon (current) | Icon (Wave) |
|---|---|---|---|
| Connect Repo | Generate | `GitBranch` | `Sparkles` |
| AI Explores | Heal | `BrainCircuit` | `HeartPulse` |
| Review & Ship | Triage | `CheckCircle` | `Target` |

```tsx
import { Sparkles, HeartPulse, Target } from "lucide-react";

const steps = [
  {
    icon: Sparkles,
    label: "Generate",
    emoji: "🧬",
    headline: "Generate",
    description: "Z user stories, production traffic nebo PR diffs naši agenti píší Playwright / Cypress / API testy, které přežijí refactor.",
  },
  {
    icon: HeartPulse,
    label: "Heal",
    emoji: "🩹",
    headline: "Heal",
    description: "Selector drift, timing races, test data churn — agenti chytají regrese, navrhují fixy a mergují je, když je CI green.",
  },
  {
    icon: Target,
    label: "Triage",
    emoji: "🎯",
    headline: "Triage",
    description: "Když CI selže, Bug Triager analyzuje logy, traces a diffy — root cause + assignee pod 90 sekund.",
  },
];
```

Section headline: "AI agents that actually ship tests."

Connector line color: change from `accent/50` to `[var(--color-accent)]/50` — resolves automatically after token migration.

### 5.5 Comparison table — What makes us different (Section 6)

**File:** `src/components/sections/comparison-section.tsx` — new (replaces `uvp-section.tsx` or adds alongside)

Heading: "Code-first. Custom. Yours."

Table layout:

```tsx
// Outer table wrapper — dark surface
<div className="overflow-x-auto rounded-[var(--ds-radius)] border border-[var(--color-border)]">
  <table className="w-full min-w-[640px] text-sm">
    {/* Header row: Feature | QAWave | Applitools | Mabl | In-house */}
    <thead className="bg-[var(--color-surface)] text-xs uppercase tracking-widest text-neutral-500">
```

Cell indicators:

```tsx
// Yes (cyan ✓)
<span className="text-[var(--color-accent)] font-semibold">✓</span>

// Partial (amber ~)
<span className="text-[var(--color-warning)]">~</span>

// No (error ✗)
<span className="text-[var(--color-error)]">✗</span>
```

Row alternation: `odd:bg-[var(--color-surface)] even:bg-[var(--color-surface-raised)]`

On mobile (`< 768px`): `overflow-x-auto scroll-x` on wrapper — table scrolls horizontally.

Comparison features (7 rows):

| Feature | QAWave | Applitools | Mabl | In-house |
|---|---|---|---|---|
| Code lives in your repo | ✓ | ✗ | ✗ | ✓ |
| AI test generation | ✓ | ~ | ✓ | ✗ |
| Flakiness auto-heal | ✓ | ~ | ✓ | ✗ |
| Custom per stack | ✓ | ✗ | ✗ | ✓ |
| No vendor lock-in | ✓ | ✗ | ✗ | ✓ |
| 24/7 CI agent | ✓ | ✗ | ~ | ✗ |
| < 90s bug triage | ✓ | ✗ | ✗ | ✗ |

### 5.6 Agentic moat (Section 7, new)

**File:** `src/components/sections/agentic-moat-section.tsx` — new file

Visual treatment:

```tsx
// Section wrapper — hero gradient background (same as hero, softer)
<section className="relative py-32 md:py-40 overflow-hidden">
  {/* Background: hero gradient at 12% opacity */}
  <div
    aria-hidden
    className="pointer-events-none absolute inset-0"
    style={{
      background: "linear-gradient(135deg, #0EA5E9 0%, #06B6D4 50%, #8B5CF6 100%)",
      opacity: 0.08,
    }}
  />
  <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
    {/* Large stat */}
    <p className="text-7xl md:text-8xl font-semibold tracking-tight text-[var(--color-foreground)] font-serif italic">
      40 agents.<br />1 founder.
    </p>
    <p className="mt-8 text-base md:text-lg leading-relaxed text-[var(--color-text-muted)] max-w-xl mx-auto">
      "We don't just build agents. We run on them. Our own studio is the demo."
    </p>
    {/* Optional supporting copy */}
    <p className="mt-4 text-sm text-neutral-500">
      One founder. Forty agents. This is how QAWave operates.
    </p>
  </div>
</section>
```

The "40 agents. 1 founder." stat uses `font-serif italic` (Instrument Serif) — this is the primary usage of the display font on the page.

### 5.7 Pricing teaser (Section 8, new)

**File:** `src/components/sections/pricing-teaser-section.tsx` — new file

Section headline: "Start small. Scale with your wins."

Three tier cards:

```tsx
const tiers = [
  {
    name: "Design Sprint",
    price: "$35,000",
    duration: "4 weeks",
    description: "Audit, design, POC on 3 worst test suites, ROI report.",
    badge: "30-day refund if ROI < 3×",
    badgeColor: "text-[var(--color-success)]",
    elevated: false,
  },
  {
    name: "Implementation",
    price: "from $120,000",
    duration: "12 weeks",
    description: "3–7 custom agents deployed in CI/CD, training, integrations.",
    badge: null,
    elevated: true,    // middle card — scale-[1.02], extra border glow
  },
  {
    name: "Continuous Ops",
    price: "from $8,000/mo",
    duration: "ongoing",
    description: "Agents maintained, evaluated, upgraded. 4h response SLA.",
    badge: null,
    elevated: false,
  },
];
```

Middle card elevated treatment:

```tsx
// Elevated card wrapper
className="relative rounded-[var(--ds-radius)] border-2 border-[var(--color-accent)] bg-[var(--color-surface-raised)] p-8 md:p-10 scale-[1.03] shadow-[0_0_40px_rgba(14,165,233,0.15)]"
```

Refund badge on Design Sprint:

```tsx
<span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-success)]/30 bg-[var(--color-success)]/10 px-3 py-1 text-xs font-medium text-[var(--color-success)]">
  30-day refund if ROI &lt; 3×
</span>
```

Price uses Geist Mono:

```tsx
<span className="font-mono text-3xl font-semibold text-[var(--color-foreground)]">
  $35,000
</span>
```

### 5.8 FAQ accordion (Section 10, new)

**File:** `src/components/sections/faq-section.tsx` — new file

Section headline: "Common questions."

7 questions (per brand.md §8):

1. "Where does my code run?"
2. "What about AI hallucinations in tests?"
3. "What happens if QAWave shuts down?"
4. "Is this just a wrapper around Claude?"
5. "SOC 2 / GDPR / AI Act compliance?"
6. "Should I hire SDETs instead?"
7. "Who pays for the AI compute?"

Accordion implementation — no library, pure CSS + Framer Motion:

```tsx
// Item wrapper
<div className="border-b border-[var(--color-border)] py-5">
  <button
    className="flex w-full items-center justify-between text-left text-base font-medium text-[var(--color-foreground)] hover:text-[var(--color-accent)] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-[var(--color-accent)] focus-visible:outline-offset-2"
    aria-expanded={isOpen}
    onClick={() => toggle(i)}
  >
    {question}
    <ChevronDown
      className={cn("h-4 w-4 text-neutral-500 transition-transform duration-300", isOpen && "rotate-180")}
      aria-hidden
    />
  </button>
  <AnimatePresence initial={false}>
    {isOpen && (
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
        className="overflow-hidden"
      >
        <p className="pt-3 pb-1 text-sm leading-relaxed text-[var(--color-text-muted)]">
          {answer}
        </p>
      </motion.div>
    )}
  </AnimatePresence>
</div>
```

### 5.9 Final CTA (Section 11)

**File:** `src/components/sections/cta-section.tsx` — update copy + colors

| Element | Current | Wave target |
|---|---|---|
| Headline | current | "Ready to stop fighting flaky tests?" |
| Section background | `rgba(79,70,229,0.1)` radial | `rgba(14,165,233,0.08)` radial — same pattern, new color |
| CTA pulse animation | indigo rgba | Wave Blue rgba (see §2.4) |
| Primary CTA | "Start Free Pilot" | "Book a 20-min discovery call" |
| Secondary CTA | "Watch Technical Demo" | "Subscribe to newsletter" |

Background decor swap:

```tsx
/* BEFORE */
className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_50%,rgba(79,70,229,0.1),transparent)]"

/* AFTER */
className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_50%,rgba(14,165,233,0.08),transparent)]"
```

---

## 6. Typography updates

### 6.1 H1 weight change

```
BEFORE: font-bold (700)
AFTER:  font-semibold (600)

Applies to:
- hero-section.tsx H1
- any page-level H1 in (marketing) group
- styled-showcase.tsx line 86: "text-5xl font-bold..." → "text-5xl font-semibold..."
```

Note: `styled-showcase.tsx` H1 uses `font-bold` hardcoded on line 86. For the Wave preset this does not matter — the showcase file will be updated separately or the Wave preset can use `componentClass.headline` to add `!font-semibold` as an override. The full `globals.css` migration governs the (marketing) route group.

### 6.2 Instrument Serif — usage rules

| Location | Tailwind | Notes |
|---|---|---|
| Agentic moat stat ("40 agents. 1 founder.") | `font-serif italic text-7xl md:text-8xl font-semibold` | Primary display usage |
| Hero accent phrase ("The wave is here.") | `font-serif italic` | Optional — use only if designer approves |
| Testimonial quotes (future) | `font-serif italic text-xl md:text-2xl` | Reserved |
| Everything else | Geist Sans | Hard rule — no plošné použití |

### 6.3 Geist Mono usage

| Location | Class |
|---|---|
| Pricing amounts (`$35,000`, `$8,000/mo`) | `font-mono` |
| Code-like artifacts in copy (`CI/CD`, test file names) | `font-mono text-sm` |
| Stat numbers in agentic moat if not using serif | `font-mono` |

### 6.4 Complete typography classes — Wave target

```
H1:       text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] text-[#F8FAFC]
H2:       text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.12] text-[#F8FAFC]
H3:       text-xl md:text-2xl font-medium tracking-tight leading-snug text-[#F8FAFC]
Body:     text-base md:text-lg leading-relaxed text-[#94A3B8]
Caption:  text-xs uppercase tracking-widest font-medium text-[#94A3B8]
Mono:     font-mono text-sm text-[#E0F2FE]
Display:  font-serif italic (Instrument Serif, used sparingly)
```

---

## 7. Animace

### 7.1 Hero gradient drift

```tsx
// CSS animation — 30s slow loop, minimal transform
// See qa-style-wave-hero in styles.css (§4)
// animation: qa-wave-drift 30s ease-in-out infinite alternate

@keyframes qa-wave-drift {
  0% {
    transform: translate3d(0, 0, 0) scale(1);
    opacity: 1;
  }
  100% {
    transform: translate3d(-2%, 1.5%, 0) scale(1.05);
    opacity: 0.9;
  }
}
```

Performance note: uses only `transform` and `opacity` — compositor-only, no layout thrash.

### 7.2 Network graph nodes — Wave colors

`styled-showcase.tsx` `NetworkGraph` component reads directly from preset vars:

```tsx
const stroke = preset.vars["--ds-accent-2"] ?? "#6366f1";  // → #06B6D4 Cyan Crest
const fill = preset.vars["--ds-accent"] ?? "#4f46e5";       // → #0EA5E9 Wave Blue
```

No code change needed — token values in the Wave preset drive the SVG colors automatically.

### 7.3 Stagger values — unchanged

| Section | `staggerChildren` |
|---|---|
| Problem stats | `0.15` |
| UVP / Solution pillars | `0.20` |
| How It Works steps | `0.25` |
| Built-with badges | `0.08` |
| Comparison table rows | `0.06` |
| Pricing cards | `0.12` |

### 7.4 CTA pulse glow

```tsx
// Wave version of ctaPulse variant
const ctaPulseWave = {
  animate: {
    boxShadow: [
      "0 0 20px rgba(14,165,233,0.35)",
      "0 0 40px rgba(14,165,233,0.55)",
      "0 0 20px rgba(14,165,233,0.35)",
    ],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};
```

### 7.5 Accordion animation

```tsx
// AnimatePresence + height: "auto" pattern (see §5.8)
// duration: 0.25s — snappy, not sluggish
// ease: [0.25, 0.1, 0.25, 1]
```

### 7.6 Reduce motion

```tsx
// All new animations respect useReducedMotion()
const shouldReduceMotion = useReducedMotion();

// Hero drift: handled via @media (prefers-reduced-motion: reduce) in styles.css
// Framer Motion: if shouldReduceMotion, pass duration: 0 or static variants
// Accordion: if shouldReduceMotion, skip AnimatePresence, use plain CSS display toggle
```

CSS rule to add to `styles.css`:

```css
@media (prefers-reduced-motion: reduce) {
  .qa-style-wave-hero {
    animation: none;
  }
}
```

---

## 8. Responsive

### 8.1 Mobile-first general rules (unchanged from ui-design.md)

- All grids: `grid-cols-1` default, `md:grid-cols-3` for 3-card sections
- Hero: single column stacked, text above visual
- Section padding: `py-24 md:py-32 lg:py-40`
- Container: `mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`

### 8.2 Hero gradient on mobile

```css
/* .qa-style-wave-hero on mobile: */
/* Full-bleed, no clipping. The blur(32px) ensures no hard edges at viewport boundaries. */
/* No changes needed — absolute inset-0 fills full bleed by default. */
```

### 8.3 Comparison table on mobile

```tsx
// Table wrapper — enable horizontal scroll on < 768px
<div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
  <table className="w-full min-w-[640px]">
```

Alternatively: collapse table to stacked cards on mobile (each competitor = one column, features = rows within that card). This is more work but better UX — decision for implementation phase.

### 8.4 Pricing cards on mobile

```tsx
// Stack vertically on mobile, horizontal on md+
className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"

// Middle elevated card: scale-[1.03] applies only on md+
className="md:scale-[1.03]"
```

### 8.5 Agentic moat stat

```tsx
// Font size scales down gracefully:
className="text-6xl md:text-7xl lg:text-8xl font-semibold font-serif italic"
```

---

## 9. Accessibility

### 9.1 Contrast ratios — Wave palette

| Pair | Ratio | WCAG level |
|---|---|---|
| Sea Foam `#F8FAFC` on Deep Ocean `#0F172A` | **17.4:1** | AAA |
| Wave Blue `#0EA5E9` on Deep Ocean `#0F172A` | **5.5:1** | AA (normal text), AAA (large text ≥ 18pt) |
| Cyan Crest `#06B6D4` on Deep Ocean `#0F172A` | **6.8:1** | AA+ / AAA |
| Muted `#94A3B8` on Deep Ocean `#0F172A` | **7.2:1** | AAA |
| White `#FFFFFF` on Wave Blue `#0EA5E9` CTA button | **3.1:1** | AA for large text — acceptable for button (large font, bold) |
| `#E0F2FE` on Deep Ocean (accent foreground) | **15.1:1** | AAA |

Note: White on Wave Blue `#0EA5E9` is 3.1:1, which is below AA for small text. Wave Blue should only be used as button background with white text at `font-semibold text-sm md:text-base` (≥ 14px bold = "large text" per WCAG). For inline text links, use `text-accent-foreground` (`#E0F2FE`) instead.

### 9.2 Focus ring

```
2px solid #0EA5E9 (Wave Blue) + outline-offset: 2px
Tailwind: focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]
```

After token migration, `outline-accent` resolves to Wave Blue automatically — no class changes needed.

### 9.3 Accordion keyboard navigation

- `<button>` element for trigger (not `<div>`) — implicit `role="button"`
- `aria-expanded` on trigger
- `id` on content panel, `aria-controls` on trigger
- `Enter` / `Space` open/close (native button behavior)
- Focus moves to trigger only — content is read by screen reader inline

### 9.4 Comparison table

- `<table>` with `<thead>` and `<tbody>` — proper semantic HTML
- `scope="col"` on header cells
- `scope="row"` on first column of each row
- Indicators use text symbols (✓ ~ ✗) in addition to color — color is not the sole indicator

### 9.5 Touch targets

- All interactive elements: minimum `44×44px` — maintained via padding (unchanged from current)
- FAQ accordion buttons: `py-5` = 20px top + 20px bottom + content height > 44px ✓

---

## 10. Component file mapping

| Section (brand.md §8) | Current file | Action | Key Tailwind changes |
|---|---|---|---|
| Navigation | `src/components/layout/navbar.tsx` | Update accent colors only (token cascade) | `.text-accent` → resolves to Wave Blue |
| Hero | `src/components/sections/hero-section.tsx` | Refactor copy + add gradient layers | `font-bold` → `font-semibold` on H1; new gradient decor divs |
| Logo bar (Built with) | absent | **New:** `built-with-section.tsx` | `flex items-center gap-8 opacity-50 grayscale hover:opacity-100 hover:grayscale-0` |
| Problem stats | `src/components/sections/problem-section.tsx` | Update copy + stat number color | `text-foreground` → `text-accent` on stat numbers |
| How it works (Generate/Heal/Triage) | `src/components/sections/how-it-works-section.tsx` | Swap icons + copy | Icon imports: `Sparkles`, `HeartPulse`, `Target` |
| Comparison table | `src/components/sections/uvp-section.tsx` | Rename to `comparison-section.tsx` + full rewrite | New table layout, `overflow-x-auto` on mobile |
| Agentic moat | absent | **New:** `agentic-moat-section.tsx` | `font-serif italic`, hero gradient bg at 8% opacity |
| Pricing teaser | absent | **New:** `pricing-teaser-section.tsx` | `font-mono` prices, `scale-[1.03]` middle card |
| Testimonial | `src/components/sections/social-proof-section.tsx` | Refactor: remove logo strip, keep testimonial placeholder | Simplify layout |
| FAQ | absent | **New:** `faq-section.tsx` | `AnimatePresence` accordion |
| Final CTA | `src/components/sections/cta-section.tsx` | Update copy + gradient color | `rgba(79,70,229,...)` → `rgba(14,165,233,...)` |
| Footer | `src/components/layout/footer.tsx` | Token cascade only | No class changes |
| (archive) | `case-studies-section.tsx` `portfolio-section.tsx` `tech-cred-section.tsx` | Move to `src/components/sections/_archived/` | — |

### Framer Motion variants — ready to copy

```tsx
// fadeInUp — unchanged, reuse as-is
const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

// staggerContainer — unchanged, reuse as-is
const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

// ctaPulseWave — Wave Blue version
const ctaPulseWave = {
  animate: {
    boxShadow: [
      "0 0 20px rgba(14,165,233,0.35)",
      "0 0 40px rgba(14,165,233,0.55)",
      "0 0 20px rgba(14,165,233,0.35)",
    ],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
  },
};

// accordionContent — new for FAQ
const accordionContent = {
  initial: { height: 0, opacity: 0 },
  animate: { height: "auto", opacity: 1 },
  exit: { height: 0, opacity: 0 },
  transition: { duration: 0.25, ease: [0.25, 0.1, 0.25, 1] },
};
```

---

## 11. Implementation order (pro coding agent)

1. **`globals.css` token migration** — swap all indigo tokens to Wave Blue/Cyan/Deep Ocean (see §2). Test: run `npm run dev`, visually verify navbar + hero + buttons are Wave Blue. Indigo should be gone from (marketing) route.

2. **`app/layout.tsx` — add Instrument Serif** — `next/font/google` import, add `--font-serif` variable to `<html>`. Test: load any page, verify no font-loading errors in console.

3. **Add "Wave" preset to `design-presets.ts`** — insert as first item in PRESETS array, update `PresetId` type. Test: open `/design/styles`, Wave should be first and selected by default.

4. **Hero refactor** — update copy, swap `font-bold` → `font-semibold` on H1, add two-layer gradient decor, add trust pill below CTAs. Test: LCP visual, mobile stacking.

5. **New `built-with-section.tsx`** — five tech badges, compact border-bound strip. Add to `(marketing)/page.tsx` between Hero and Problem.

6. **Problem section copy update** — swap stats to `12h/week`, `30–40%`, `3–6mo`, stat numbers colored Wave Blue.

7. **How it works icon swap** — `Sparkles`, `HeartPulse`, `Target`. Update copy for Generate/Heal/Triage.

8. **New `comparison-section.tsx`** — replace `uvp-section.tsx` in page.tsx. Build table with 7 rows.

9. **New `agentic-moat-section.tsx`** — Instrument Serif display stat, gradient bg.

10. **New `pricing-teaser-section.tsx`** — three tier cards, mono prices, refund badge.

11. **Testimonial / social proof refactor** — remove logo strip, add placeholder card.

12. **New `faq-section.tsx`** — accordion with 7 questions.

13. **Final CTA update** — copy + gradient color.

14. **Archive** — move `case-studies-section.tsx`, `portfolio-section.tsx`, `tech-cred-section.tsx` to `src/components/sections/_archived/`. Remove from `(marketing)/page.tsx`.

15. **Accessibility audit** — verify contrast ratios, keyboard nav on accordion + table, focus rings visible.

16. **Performance check** — run Lighthouse. Target LCP < 2s. Verify Instrument Serif loads with `display: swap`.
