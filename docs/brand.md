# QAWave — Brand Source of Truth

> **Status:** canonical (přepisuje `qawave-web-strategy.md` v dimenzích, kde se liší). Generuje se z `teams/startup-qa/launch/01-BRAND-KIT.md` + `03-LANDING-PAGE.md` po rozhodnutí "1b" (kompletní rebrand z indigo/edge na wave/services).
>
> **Verze:** 1.0 · **Účel:** jediný dokument, ze kterého `frontend-designer`, `copywriter`, `brand-guardian` čerpají. Kdykoliv je v tomhle dokumentu konflikt s historickou kopií, **brand.md vyhrává**.

---

## 1. Identity

| Atribut | Hodnota |
|---|---|
| **Brand name** | QAWave |
| **Legal entity** | QAWave s.r.o. |
| **Domain** | qawave.ai |
| **Tagline (primary)** | "Ride the AI wave in QA." |
| **Tagline (secondary)** | "AI agents that test, heal, and protect your code." |
| **Tagline (short)** | "The QA wave is here." |
| **Hero one-liner** | "We build custom AI agents that live in your CI/CD — generating tests, healing flakiness, and triaging bugs 24/7. For engineering teams that want to spend their time building, not debugging test suites." |
| **Email (general)** | hello@qawave.ai |
| **Email (sales)** | sales@qawave.ai |
| **Social** | @qawave (X, LinkedIn, GitHub) |

**Proč "wave":** AI/LLM revoluce zasahující QA industry. Wave nese, nerozdrtí — vy nejste disruptor, jste partner. Krátké, mezinárodně znělé, snadno ikonizovatelné.

---

## 2. Color palette (canonical)

### Primary

| Token | Hex | Použití |
|---|---|---|
| `--color-wave-blue` | `#0EA5E9` | Hero CTA, links, primární accent |
| `--color-cyan-crest` | `#06B6D4` | Hover states, secondary accents |
| `--color-deep-ocean` | `#0F172A` | Dark mode background, headers |
| `--color-sea-foam` | `#F8FAFC` | Light mode background, vysoký kontrast text |

### Semantic

| Token | Hex | Použití |
|---|---|---|
| `--color-success` | `#10B981` | Passing tests, success states |
| `--color-warning` | `#F59E0B` | Flaky tests, warnings |
| `--color-error` | `#EF4444` | Failed tests, errors |
| `--color-ai-purple` | `#8B5CF6` | AI-specific features, agentic accents |

### Hero gradient

```css
background: linear-gradient(135deg, #0EA5E9 0%, #06B6D4 50%, #8B5CF6 100%);
```

### Migration delta (pro `globals.css`)

Stávající indigo tokens (`--color-accent: #4f46e5`, `--color-accent-light: #6366f1`, `--color-accent-dark: #3730a3`) **nahradit** wave tokens:

```diff
- --color-accent: #4f46e5;
- --color-accent-light: #6366f1;
- --color-accent-dark: #3730a3;
- --color-accent-muted: rgba(79, 70, 229, 0.15);
- --color-accent-foreground: #e0e7ff;
+ --color-accent: #0EA5E9;          /* Wave Blue */
+ --color-accent-light: #06B6D4;    /* Cyan Crest */
+ --color-accent-dark: #0284C7;     /* Wave Blue 600 */
+ --color-accent-muted: rgba(14, 165, 233, 0.15);
+ --color-accent-foreground: #E0F2FE; /* Sky 100 */

- --color-background: #050505;
+ --color-background: #0F172A;      /* Deep Ocean */
```

**Surface layers** přepočítat tak, aby Deep Ocean bg dával dostatek kontrastu:
```diff
- --color-surface: #0a0a0c;
- --color-surface-raised: #111113;
- --color-surface-overlay: #18181b;
+ --color-surface: #1E293B;         /* Slate 800 */
+ --color-surface-raised: #334155;  /* Slate 700 */
+ --color-surface-overlay: #475569; /* Slate 600 */
```

A11y check: Sea Foam `#F8FAFC` na Deep Ocean `#0F172A` = 17.4:1 (AAA). Wave Blue `#0EA5E9` na Deep Ocean = 5.5:1 (AA pro normal text, AAA pro large).

---

## 3. Typography

| Role | Font | Tailwind class |
|---|---|---|
| Headline H1 | **Geist Sans** | `text-6xl md:text-7xl font-semibold tracking-tight` |
| Headline H2 | Geist Sans | `text-4xl md:text-5xl font-semibold tracking-tight` |
| Card H3 | Geist Sans | `text-xl font-medium` |
| Body | Geist Sans | `text-base leading-relaxed` |
| Code / Mono | Geist Mono | `font-mono` |
| Marketing display (volitelné, hero accent) | **Instrument Serif** | `font-serif italic` |
| Caption / micro | Geist Sans | `text-xs uppercase tracking-wide` |

**Změna proti dnešnímu webu:** H1 weight `font-bold` (700) → `font-semibold` (600). Modernější, méně shouty.

**Instrument Serif** je nový font — doplnit do `app/layout.tsx` přes `next/font/google`. Použití: pouze v hero accent větě nebo signature phrasích (např. "*The wave is here.*"). Ne plošně.

---

## 4. Voice & tone

### Atributy

| Dimenze | Ano | Ne |
|---|---|---|
| Tone | Confident, clear, technical | Hype-y, salesy, preachy |
| Vocabulary | "agent", "eval", "CI", "flaky test", "heal", "triage" | "AI magic", "revolutionary", "disruption", "next-gen", "transform" |
| Humor | Dry, engineering in-jokes | Slapstick, meme-heavy |
| POV | "We" když mluví firma | "I" v founder postech |
| Sentences | Short. Direct. Scannable. | Purple prose, dlouhé odstavce |

### Signature phrases (povolené)

- "The wave is here." (launch moments)
- "Your tests, healed." (flakiness agent)
- "One founder. Forty agents." (differentiator)
- "We eat our own dog food." (credibility)
- "Ride the wave, don't fight it." (positioning vs. traditional QA)
- "Your code stays yours. Your tests stay yours. We just run the agents." (trust pill)

### Hard banlist (nikde se nesmí objevit)

revolutionary · transform · disruptive · next-gen · cutting-edge · game-changing · AI magic · paradigm shift · "leverage AI" · "unlock potential" · "the future of X" · "supercharge"

CZ ekvivalenty: revoluční · transformovat · disruptivní · průlomový · nové generace · "změna hry" · AI kouzlo

### Honest claims rule

Každé tvrzení s číslem musí mít buď:
- Veřejně ověřitelný zdroj (DORA Report 2024, Forrester, Gartner)
- "Pilot data" disclosure ("V pilotních projektech jsme měřili…")
- Nebo se zdrží konkrétního čísla

Žádné vymyšlené customer stories, žádné fake metriky, žádné "[Company X]" placeholdery.

---

## 5. Messaging framework

### Elevator pitch (30 s)

> QAWave staví AI agenty, kteří žijí ve vašem CI/CD a dělají to, co by jinak dělal váš SDET — generují testy, léčí flaky, triage bugy. Klient platí $35k za 4-týdenní design sprint, pak $120–250k za 3-měsíční custom implementaci. Flaky klesnou o 70 %, CI cost o 40 %. Vedeme celou firmu s jedním člověkem a 40 agenty. Naše vlastní firma je demo.

### 3 Value pillars

**1. Custom, not cookie-cutter.**
Agenti vybudovaní pro váš stack — Java Spring + Angular + Postgres má jiné QA patterny než Rails + React. Máme specialisty.

**2. Own the code, we own the agent.**
Agenti generují Playwright/Cypress kód, který žije ve vašem repozitáři. Žádný vendor lock-in. Když s námi skončíte, testy zůstanou.

**3. Continuous, not project-based.**
Agenti běží 24/7. Každý PR, každý deploy, každá production anomálie — kontinuálně testováno, automaticky triaged.

### 3 Capability pillars (operativní, pro homepage "How it works")

**Generate** 🧬 — Z user stories, production traffic, nebo PR diffs naši agenti píší Playwright / Cypress / API testy, které přežijí refactor a projdou vaším review.

**Heal** 🩹 — Selector drift, timing races, test data churn — agenti chytají regrese, navrhují fixy a mergují je, když je CI green. Vaši SDETs schvalují, ne babysit.

**Triage** 🎯 — Když CI selže, Bug Triager agent analyzuje logy, traces a diffy a navrhne root cause + assignee — pod 90 sekund. Incident response začíná dřív, než pager zazvoní.

### Differentiators

| Konkurent | Náš differentiátor |
|---|---|
| **Applitools** | Jdeme přes visual testing — generation, flakiness, performance, compliance |
| **Mabl** | Code-first, ne record-replay; žijeme ve vašem Git repu |
| **QA Wolf** | AI-native, ne lidmi poháněné; bez SLA latence |
| **TestRigor** | Enterprise compliance ready; custom per klient, ne one-size-fits-all |
| **In-house SDETs** | Agenti amplifikují, nenahrazují; vaši SDETs migrují z framework maintenance na strategii |

---

## 6. Pricing (canonical)

| Tier | Cena | Trvání | Co dostanete |
|---|---|---|---|
| **Design Sprint** | $35 000 fixed-fee | 4 týdny | Audit QA stacku, design custom agentů, POC na 3 nejhorších test suitech, ROI report. **Refund pokud projektovaný ROI < 3×.** |
| **Implementation** | from $120 000 | 12 týdnů | 3–7 custom agentů deployed v CI/CD, training, integrace. Graduate na Continuous Ops. |
| **Continuous Ops** | from $8 000 / měsíc | průběžně | Agenti maintained, evaluated, upgraded. Monthly reviews, 4h response SLA, kvartální performance reports. |

CTA primary: **"Book a 20-min discovery call"** (nahrazuje "Start Free Pilot" / "Zahájit Free Pilot")

CTA secondary: **"Join waitlist"** (email input inline)

---

## 7. Information Architecture (canonical)

```
qawave.ai/
├── /                              — Homepage
├── /product                       — Deeper product page (Week 4+)
├── /pricing                       — Pricing detail (3 tiers)
├── /customers                     — Case studies (až bude obsah, zatím honest "Pilot pipeline")
├── /docs                          — Public docs (Week 6+)
├── /blog                          — MDX-based blog
│   └── /[slug]
├── /about                         — Founder story + mission
├── /careers                       — "We hire 0 humans. Here's why." (marketing angle)
├── /changelog                     — Version updates + new agents
└── /legal/
    ├── /terms
    ├── /privacy
    ├── /dpa
    ├── /subprocessors
    └── /ai-transparency           — AI Act disclosure
```

**Změna proti dnešku:** přibývá `/product`, `/pricing`, `/blog`, `/about`, `/careers`, `/changelog`, `/legal/*`. Stávající `/case-studies` se přejmenovává na `/customers`. Stávající `/contact` zůstává nebo se sloučí s "Book a call" / `/book`.

---

## 8. Homepage struktura (canonical, top to bottom)

| # | Sekce | Účel |
|---|---|---|
| 1 | **Navigation** | Sticky, logo + nav links (Product · Customers · Docs · Pricing · Blog · Changelog) + CTA "Book a call" + language switcher |
| 2 | **Hero** | H1 "Ride the AI wave in QA." + subheadline + 2 CTA (Book call / Join waitlist) + trust pill ("Your code stays yours…") |
| 3 | **Logo bar (Built with)** | Anthropic, Vercel, Supabase, Cloudflare, Stripe — placeholders pro pozdější "Trusted by" customer logos |
| 4 | **Problem statement** | "Your test suite is costing you more than you think." + 3 stat cards (12 h/eng/week · 30–40 % CI waste · 3–6 mo SDET hiring) |
| 5 | **Solution / How it works** | "AI agents that actually ship tests." + 3 cards (Generate / Heal / Triage) |
| 6 | **What makes us different** | "Code-first. Custom. Yours." + comparison table (QAWave vs Applitools vs Mabl vs in-house) |
| 7 | **The agentic moat** | "We don't just build agents. We run on them." + "40 agents. 1 founder." stat |
| 8 | **Pricing teaser** | "Start small. Scale with your wins." + 3 tier cards (Design Sprint / Implementation / Continuous Ops) |
| 9 | **Testimonial placeholder** | Reserved (Week 10+, až bude design partner reference) |
| 10 | **FAQ accordion** | 7 otázek (hosting, halucinace, shutdown risk, "wrapper around Claude?", SOC 2 / GDPR / AI Act, hire SDETs, AI compute cost) |
| 11 | **Final CTA** | "Ready to stop fighting flaky tests?" + 2 CTA (book call / newsletter) |
| 12 | **Footer** | 4 columns (Product · Company · Legal · Connect) + "© 2026 QAWave s.r.o. · Made in Prague · Built on AI" |

**Mapping na stávající komponenty v `src/components/sections/`:**

| Nová sekce | Existující komponenta | Akce |
|---|---|---|
| Hero | `hero-section.tsx` | Přepsat copy + CTA + visual může zůstat (network graph) ale s wave colors |
| Logo bar | (neexistuje) | Vytvořit `built-with-section.tsx` |
| Problem statement | `problem-section.tsx` | Přepsat copy, zachovat 3-stat layout |
| How it works | `how-it-works-section.tsx` | Přepsat 3 kroky na Generate/Heal/Triage |
| What makes us different | `uvp-section.tsx` (přejmenovat) | Přepsat na comparison table |
| Agentic moat | (neexistuje) | Vytvořit `agentic-moat-section.tsx` |
| Pricing teaser | (neexistuje) | Vytvořit `pricing-teaser-section.tsx` |
| Testimonial | `social-proof-section.tsx` | Refactor — drop logo strip, jen testimonial placeholder |
| FAQ | (neexistuje) | Vytvořit `faq-section.tsx` (accordion) |
| Final CTA | `cta-section.tsx` | Přepsat copy |
| (drop) | `case-studies-section.tsx`, `portfolio-section.tsx`, `tech-cred-section.tsx` | Přesunout do archivu `_archived/` |

---

## 9. i18n strategy

- **Locales:** `cs` (Czech) + `en` (English)
- **Default locale:** `en` (international audience priority, CZ je sekundární trh per `qawave-web-strategy.md` ale brand-kit cílí EN-first)
- **URL strategy:** `qawave.ai/en/...` + `qawave.ai/cs/...` (locale prefix v cestě, ne separate domains)
- **Detection:** Accept-Language header → redirect z `/` na `/<locale>/`
- **Library:** `next-intl` (Next.js 16 App Router native)
- **Data layer:** typed dictionaries v `src/data/messages/{en,cs}.ts` per sekce
- **Language switcher:** v navbaru, persistuje volbu v cookie `NEXT_LOCALE`

CZ nuance pro `copywriter`:
- Vykání, ne tykání
- Žádné amerikanismy ("Hope this finds you well" → "Děkuji za váš čas")
- Anglické tech termíny (`flaky`, `CI/CD`, `agent`) zůstávají jako loanwords, **nepřekládat**
- "Ride the AI wave in QA" → držet anglickou verzi i v CZ kontextu (je to brand line, ne tagline)

---

## 10. Visual references (look & feel)

Aspirace pro frontend-designer:

- [vercel.com](https://vercel.com) — gradient + typography discipline
- [linear.app](https://linear.app) — crisp, confident
- [anthropic.com](https://anthropic.com) — subtle, mature
- [cursor.com](https://cursor.com) — dev-tool directness
- [resend.com](https://resend.com) — founder-led, honest voice
- [railway.app](https://railway.app) — modern, playful but professional

**Anti-references (NE):**
- AI startup clichés (pink-purple gradient, robot faces, "transform your business")
- Enterprise bloat (stock photos lidí v oblecích)
- Vaporware futurism ("The future of…")

---

## 11. Brand assets checklist

- [ ] Logo wordmark (Geist Semibold "QAWave")
- [ ] Logo symbol (wave glyph "~" v wave-blue + cyan gradientu)
- [ ] Logo lockup (symbol + wordmark, horizontal)
- [ ] Favicon 32×32, 16×16 (wave glyph)
- [ ] OG image template (Vercel OG, hero gradient bg + tagline)
- [ ] X banner, LinkedIn cover, GitHub OG
- [ ] Email signature template
- [ ] Brand guidelines PDF (export tohoto dokumentu, 1-strana cheatsheet)

---

## 12. Migrace plán (rebrand 1b → live)

| Krok | Owner | Output |
|---|---|---|
| 1 | Tomáš (review) | Schválit `docs/brand.md` v1 |
| 2 | `frontend-designer` agent | `docs/design/wave-rebrand-spec.md` + nový "Wave" preset v `design-presets.ts` (default na `/design/styles`) |
| 3 | `copywriter` agent | `src/data/messages/en.ts` + `src/data/messages/cs.ts` per nová homepage struktura §8 |
| 4 | Já (Claude) | i18n setup (`next-intl`, middleware, routing) + `globals.css` token migration §2 |
| 5 | Já | Refactor sekcí podle §8 mapping (sloučit + nové) |
| 6 | Já | Implementace language switcher v navbaru |
| 7 | `brand-guardian` agent | Final audit copy + visual proti `docs/brand.md` |
| 8 | Tomáš | UAT na localhost:3030 |
| 9 | Já | Build + deploy prod |

Všechny existující varianty `/design/{a,b,c,d}` + 10 stylů na `/design/styles` zůstávají **nedotčené** per rozhodnutí #3. Pouze hlavní `(marketing)/` route group dostane rebrand.

---

## 13. Kdy aktualizovat tenhle dokument

- Po každém značnějším brand move (nový tagline, nová pillar, palette change)
- Při uzavření design partner (case study přidává social proof do §11 checklistu)
- Při SOC 2 / ISO certification (přepisuje §10 FAQ)

Nepřepisovat ad-hoc. Změny přes pull request s mention `@brand-guardian` pro review.
