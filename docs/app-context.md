# qawave.ai — App Context for Frontend Redesign

> **Účel:** Jediný brief, který agent na frontend redesign dostane jako vstup. Konsoliduje "co je qawave.ai", tech stack, aktuální stav frontendu a odkazuje na source-of-truth dokumenty pro detail.
>
> **Stav:** living document. Aktualizovat při větších změnách positioning / stacku / IA.

---

## 1. Co je qawave.ai

Marketing site solo-founder studia, které pomáhá engineering týmům implementovat **agentní AI testování** — od strategie po produkci. Web má dvě role:

1. **Inbound lead-gen** pro Senior QA Engineers, QA Manažery a CTO v mid-to-enterprise SaaS firmách (CZ + EU primární, US sekundární).
2. **Důkaz autority** — že studio rozumí frontier QA/AI tématům lépe než scriptové nástroje (Selenium, Cypress, Playwright) a managed služby (QA Wolf).

Není to produkt-led SaaS s `/signup`. Je to **konzultačně-implementační studio**, jehož primární CTA je technický pilot na zákazníkově staging environmentu.

## 2. Brand a tón

**Pozičování:** *"The Edge of QA Automation"* — agentní, autonomní quality engineering pro senior týmy.

**Tón:**
- Autoritativní, ne akademický (peer-to-peer se senior inženýry, žádné dumbing down)
- Vizionářský, ne hype-driven (každý claim podpořený daty/capability)
- Sebevědomý, ne dismissive (uznáváme hodnotu existujících nástrojů)
- Evropská přímočarost (substance > Silicon Valley speak)

**Primární jazyk:** Čeština pro CZ trh. Angličtina pro EN/US obsah.

**Hard rules (pro veškerý copy + UI text):**
- Zakázaná slova: "revolutionary", "transform", "disruptive", "next-gen", "cutting-edge", "game-changing"
- Každý kvantitativní claim potřebuje proof point nebo data anchor
- Žádné vymyšlené customer names, metriky ani testimonialy
- AI-generovaný public obsah tagovat per EU AI Act

## 3. Cílová persona — QA Manažer Michal

Senior QA Lead, 37 let, řídí 4–8člený tým v 150–400 SaaS firmě. Tým uvízl na ~30% pokrytí. Dev tým adoptoval Copilot/Cursor — code velocity ↑ 40%, QA throughput nedrží krok. Michal hledá leverage, ne náhradu — chce AI, kterou jeho senior tým může auditovat. Plné persona viz [`qawave-web-strategy.md`](../qawave-web-strategy.md) §3.

**Co rezonuje:** technické deep-dives, honest comparisons, ROI kalkulačka s reálnými daty, české case studies.
**Co odpuzuje:** marketing fluff, vendor demos na toy apps, AI jako black box, lock-in.

## 4. Technický stack (přesné verze — neměnit svévolně)

| Vrstva | Volba | Verze |
|---|---|---|
| Framework | Next.js (App Router) | **16.2.3** |
| React | React + ReactDOM | **19.2.4** |
| Styling | Tailwind CSS | **v4** (PostCSS plugin, `@theme inline`) |
| Animace | Framer Motion | 12.x |
| Ikony | lucide-react | 1.8.x |
| Utility | clsx, tailwind-merge | latest |
| Email | nodemailer (Porkbun SMTP) | 8.x |
| Hosting | Vercel (region fra1) | — |
| Lokální port | 3030 | — |

**⚠️ Next.js 16 má breaking changes proti tréninkovým datům.** APIs, konvence i file structure se mohou lišit. Před psaním kódu **přečíst** relevantní guide v `node_modules/next/dist/docs/`. Heed deprecation notices. (Toto je hard rule z `AGENTS.md`.)

**Žádný shadcn/ui, žádný Material UI, žádný Radix.** Všechny komponenty jsou custom Tailwind v4. Je to záměrné — engineering-grade dark mode estetika, ne business SaaS look.

## 5. Aktuální struktura projektu

```
src/
├── app/
│   ├── layout.tsx                  # Root: Geist fonts, JSON-LD, dark colorScheme
│   ├── globals.css                 # Tailwind v4 @theme tokens (viz §6)
│   ├── opengraph-image.tsx         # OG dynamic
│   ├── sitemap.ts
│   │
│   ├── (marketing)/                # Hlavní marketing route group
│   │   ├── layout.tsx              # Navbar + Footer
│   │   ├── page.tsx                # Homepage (skládá 9 sekcí)
│   │   ├── how-it-works/
│   │   ├── case-studies/
│   │   └── contact/
│   │
│   ├── design/                     # Experimentální design varianty A–D
│   │   ├── page.tsx                # Index s linky na varianty
│   │   ├── a/page.tsx              # Variant A
│   │   ├── b/{layout,page}.tsx     # Variant B
│   │   ├── c/page.tsx              # Variant C
│   │   └── d/{layout,page}.tsx     # Variant D ("Luxury Studio" — light mode, custom cursor, marquee)
│   │
│   └── api/                        # Email odeslání + health
│
├── components/
│   ├── layout/                     # Navbar, Footer
│   ├── ui/                         # Primitives (Button, Badge, Card, MetricCard, AnimatedCounter, IntegrationBadge, SectionWrapper, ScrollIndicator)
│   ├── sections/                   # Homepage sekce — viz §7
│   └── design/{a,b,c,d}/           # Komponenty pro design varianty
│
├── lib/                            # cn() utility, motion presets
└── data/                           # landing.ts (typed copy)
```

Při dev běží na `http://localhost:3030`. Health endpoint `/api/health`.

## 6. Design system (current)

Plný spec viz [`docs/ui-design.md`](./ui-design.md). Zde jen rychlá referenční vrstva — co je v `src/app/globals.css` pod `@theme inline`:

**Paleta (engineering-grade dark):**
- `background` `#050505` / `foreground` `#ededed`
- `surface` `#0a0a0c` / `surface-raised` `#111113` / `surface-overlay` `#18181b`
- `accent` `#4f46e5` (indigo) / `accent-light` `#6366f1` / `accent-dark` `#3730a3`
- `accent-muted` `rgba(79,70,229,0.15)` / `accent-foreground` `#e0e7ff`
- `border` `rgba(255,255,255,0.06)` / `border-accent` `rgba(79,70,229,0.3)`
- Neutral 50–950 slate-tinted scale

**Typo:** Geist Sans (`--font-sans`) + Geist Mono (`--font-mono`). H1 `text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08]`. Body `text-base md:text-lg leading-relaxed text-neutral-400`. Mono pro technické / kódové výrazy.

**Spacing:** sekce `py-24 md:py-32 lg:py-40`. Container `mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`. Card padding `p-6 md:p-8 lg:p-10`. Grid gap `gap-6 md:gap-8`.

**Efekty:**
- Hover glow na kartách: `hover:shadow-[0_0_30px_rgba(79,70,229,0.1)]`
- CTA button: `shadow-[0_0_20px_rgba(79,70,229,0.3)]` default, hover `0_0_30px_rgba(79,70,229,0.5)` + scale 1.03
- Hero/CTA dekorativní radial gradient ellipse

**Animace:** Framer Motion. `fadeInUp` pro sekce, `staggerContainer` pro karty (stagger 0.08–0.25s podle sekce). **Vždy** respektovat `useReducedMotion()`.

**A11y:** kontrast text/bg 18.1:1 (AAA). Focus ring `2px solid accent` + offset 2px. Touch targets ≥ 44×44 px.

## 7. Aktuální homepage sekce

Pořadí v `src/app/(marketing)/page.tsx`:

1. **HeroSection** — `min-h-screen`, badge + H1 "The Edge of QA Automation" + subheadline + dual CTA + vizuál vpravo + scroll indicator
2. **ProblemSection** — 3 stat karty (25 % coverage ceiling, 6× hidden cost, 30 % senior čas)
3. **UvpSection** — 3 pilíře (Autonomous Discovery / Intelligent Maintenance / Engineering-Grade Governance)
4. **HowItWorksSection** — 3 kroky (Connect repo → AI exploruje → Review & ship), s connector linkami
5. **CaseStudiesSection** — TBD content
6. **PortfolioSection** — TBD content
7. **SocialProofSection** — logo strip + metriky + headline testimonial
8. **TechCredSection** — integration badges (GitHub, GitLab, Jenkins, Cypress, Playwright …)
9. **CtaSection** — final CTA, větší padding, pulse glow

Layout: `Navbar` (sticky, scroll-blur) + `<main>` + `Footer` (4 sloupce).

## 8. Design varianty A/B/C/D (`/design/{a,b,c,d}`)

Existují čtyři kompletně rozdílné explorace landing page (commit `137c3f3`), každá svým stylem. Variant D ("Luxury Studio") úmyslně láme stack — light mode `#f5f2ed`, vlastní kurzor, mask-reveal, marquee. Slouží jako **reference / playground**, ne jako produkční web. Redesign může čerpat inspiraci, ale primární cíl je homepage v `(marketing)` route group.

## 9. Source-of-truth dokumenty (číst před redesignem)

| Dokument | Co tam je |
|---|---|
| [`qawave-web-strategy.md`](../qawave-web-strategy.md) | Plné positioning, voice, competitive matrix, persona Michal, IA, content strategy |
| [`docs/copy.md`](./copy.md) | Kompletní copy pro každou sekci homepage (H1, subheads, bullets, CTA labely) |
| [`docs/ux-wireframe.md`](./ux-wireframe.md) | Wireframy 7 sekcí + flow + mobile/desktop poznámky |
| [`docs/ui-design.md`](./ui-design.md) | Plný design system: tokens, typo, spacing, komponentové specifikace, animace, a11y |
| [`docs/web-design.md`](./web-design.md) | Implementační plán — adresářová struktura, datové soubory, komponentová mapa |
| [`AGENTS.md`](../AGENTS.md) | Deployment + Next.js 16 hard rules |
| [`CLAUDE.md`](../CLAUDE.md) | Pracovní styl pro agenty v tomto projektu |

## 10. Constraint summary (co agent nesmí porušit)

- **Brand voice:** žádný hype slovník (§2), každý claim s proof
- **Stack:** Next.js 16 App Router + Tailwind v4 + Framer Motion + lucide-react. Žádné nové UI knihovny bez explicitního schválení.
- **Tokens:** primárně používat `@theme inline` tokens z `globals.css`. Nové tokeny přidávat tam, ne ad-hoc v komponentách.
- **A11y:** WCAG AA minimum, AAA kde možné. `prefers-reduced-motion` respektovat.
- **Performance:** mobile-first. Cíl LCP < 2 s. 83 % B2B traffic je mobile.
- **i18n připravenost:** copy strukturovat tak, aby přidání CZ verze nebyl rewrite (typed data v `src/data/landing.ts`).
- **Žádné fake metriky / customer names** — pokud chybí proof, nech sekci honest ("Pilot pipeline" místo "Trusted by 500 teams").
