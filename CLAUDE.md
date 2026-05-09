# QAWave — Claude Code project context

> Tento soubor čte Claude Code při startu v tomto repu. Aktualizovat kdykoliv se posune brand, stack, IA nebo agent team. Verze: 2026-05-09.

## Pracovní styl

Při plnění úkolů postupuj přímo k řešení. Pokud potřebuješ použít nástroj, analyzovat data nebo provést výpočet, udělej to rovnou. Neptej se na povolení, pokud to není kriticky nutné pro bezpečnost (push na main, force push, mazání produkčních dat, smazání souborů které nejsou v gitu).

Když je úkol exploratorní ("co bys udělal", "jak by se mělo X"), odpověz 2–3 větami s doporučením + hlavním tradeoffem, **bez** rovnou implementace.

## Co se staví

**QAWave** = solo-founder AI-native QA studio. Web qawave.ai je marketing front pro získání **20-min discovery callů** od VPE / Head of QA v 200–2 000 FTE B2B SaaS. Pre-seed, žádní platící zákazníci yet, design partner pipeline forming.

Produkt: custom AI agenti žijící v zákazníkově CI/CD. Tři capabilities:
- **Generate** — píší Playwright/Cypress/API testy z user stories, traffic, PR diffs
- **Heal** — chytají flakiness na úrovni intentu, ne selektorů; navrhují patche, lidé schvalují
- **Triage** — analyzují CI failures, navrhují root cause + assignee pod 90 s

Pricing: **Design Sprint $35k / 4 týdny** (refund pokud projektovaný ROI < 3×) → **Implementation from $120k / 12 týdnů** → **Continuous Ops from $8k / měsíc**.

## Tech stack (přesné verze, neměnit svévolně)

| | |
|---|---|
| Framework | Next.js **16.2.3** (App Router, Turbopack default) |
| React | **19.2.4** |
| Styling | Tailwind CSS **v4** (`@theme inline` tokens, no JIT) |
| i18n | **next-intl 4.11.1** (locale prefix `/en` + `/cs`) |
| Animace | framer-motion 12.x |
| Ikony | lucide-react |
| Email | nodemailer (Porkbun SMTP) |
| Hosting | Vercel, region `fra1` (Frankfurt) |
| Lokální port | **3030** |
| Node | 24 LTS (Vercel default) |

**Žádné** shadcn/ui, Radix, MUI, Chakra. Custom Tailwind komponenty only. Záměrné — engineering-grade dark mode estetika, ne business SaaS look.

**⚠️ Next.js 16 má breaking changes proti tréninkovým datům.** `middleware.ts` je deprecated → **`proxy.ts`**. APIs, konvence, file structure se liší. Před psaním Next-specific kódu **přečti** relevantní guide v `node_modules/next/dist/docs/`.

## Klíčové dokumenty (mapa pravdy)

| Soubor | Co tam je | Kdy číst |
|---|---|---|
| `docs/brand.md` | **Canonical brand** — palette, typo, voice, banlist, IA, pricing, sekce homepage | Každá copy / visual změna |
| `docs/app-context.md` | Tech stack constraints, current frontend state, source-of-truth mapa | Frontend redesign / refactor |
| `docs/design/wave-rebrand-spec.md` | Visual spec wave rebrandu (před → po, per-section, animace) | Detailní implementační otázky |
| `docs/discovery/INDEX.md` | Customer discovery sprint — 5 hypotéz, 25 cílů, 50 firem ICP, outreach šablony | Sales / outreach work |
| `lovable-context.md` (root) | Self-contained brief pro Lovable handoff | Když user buildí podstránky v Lovable |
| `qawave-web-strategy.md` (root) | Původní web strategie (částečně přepsána `brand.md` po rebrandu 1b) | Historický kontext, persona Michal |
| `AGENTS.md` (root) | Deployment instrukce + Next.js 16 hard rules | Když uživatel řekne "deploy" / "prod" / "dev" |

**Hierarchie pravdy:** `docs/brand.md` > ostatní. Pokud kolizja, brand.md vyhrává.

## Agent team — kdy koho použít

V `.claude/agents/` je 12 agentů (přes `install_agents.py` z `teams/downloaded/_roles/`). Každý dostal QAWave context prefix. Spouštět přes `Task` tool s `subagent_type`:

| Agent | Použít na |
|---|---|
| `chief-of-staff` | Routing práce mezi agenty, daily digest, eskalace |
| `brand-guardian` | Audit copy / visual proti `brand.md` před shipnutím |
| `copywriter` | CZ + EN copy pro landing sekce, emaily, ads |
| `content-marketer` | Content kalendář, distribuce, repurposing |
| `blog-writer` | Long-form blog posty (Senior QA / CTO audience) |
| `seo-specialist` | Keyword research, on-page SEO (CZ + EN) |
| `frontend-designer` | Visual spec nových sekcí / komponent (Next 16 + Tailwind v4) |
| `code-reviewer` | TSX/TS review před merge — performance, a11y, idiomatic React 19 |
| `technical-writer` | Case studies, docs, API references, onboarding |
| `qa-expert` | Validace technických claimů, thought leadership |
| `competitive-analyst` | Tracking Applitools/Mabl/QA Wolf/Functionize/TestRigor, target list research |
| `customer-retention` | Onboarding emaily, QBR prep, retention plays |

Spuštění více agentů paralelně = jeden message, multiple `Task` tool uses, `run_in_background: true` pokud nezávislé. Background agenti vrátí output přes notification.

## Hard rules (porušení = revize)

1. **Žádný hype slovník.** Banlist (EN+CZ): revolutionary · transform · disruptive · next-gen · cutting-edge · game-changing · AI magic · paradigm shift · "leverage AI" · "unlock potential" · "the future of X" · "supercharge" · revoluční · transformovat · disruptivní · průlomový · nové generace · "změna hry"
2. **Honest claims.** Každý kvantitativní claim cituje veřejný zdroj (DORA Report 2024, Forrester Q4 2025, Gartner) nebo má "pilot data" disclosure. **Žádné fake metriky, fake customer names, fake testimonialy.** Sekci skryj raději než fabrikovat.
3. **Tagline brand line.** "Ride the AI wave in QA." nepřekládat — zůstává EN i v CZ verzi (brand mark, ne tagline).
4. **Pricing canonical.** $35k / from $120k / from $8k/měsíc. Nezaokrouhlovat, neměnit tier names.
5. **Tokens z `@theme inline` v `globals.css`.** Nové tokeny přidávat tam, ne ad-hoc v komponentách. Wave Blue `#0EA5E9` + Deep Ocean `#0F172A` jsou brand — žádný drift na indigo nebo near-black.
6. **A11y:** WCAG AA minimum. `prefers-reduced-motion` respektovat. Focus ring `2px solid accent` + offset 2px.
7. **Mobile-first.** 83 % B2B traffic je mobile.
8. **EU AI Act:** AI-generovaný public obsah tagovat per transparency requirement.
9. **Žádné nové UI knihovny** (shadcn, Radix, MUI, Chakra) bez explicitního schválení od user.
10. **Před psaním Next.js kódu** zkontroluj `node_modules/next/dist/docs/` kvůli breaking changes proti tréninkovým datům.

Když si v něčem nejsi jistý → eskaluj `chief-of-staff` agenta. Nefabrikovat.

## Brand snapshot (pro rychlou referenci, plný v `docs/brand.md`)

**Tagline:** "Ride the AI wave in QA."
**Voice:** confident, technical, dry humor, European directness. Short sentences.
**Palette:** Deep Ocean `#0F172A` bg · Sea Foam `#F8FAFC` text · Wave Blue `#0EA5E9` primary accent · Cyan Crest `#06B6D4` secondary · AI Purple `#8B5CF6` agent moments
**Typography:** Geist Sans (semibold 600 pro H1) · Geist Mono pro code/prices · Instrument Serif italic pro hero accent + agentic moat stat (sparingly)
**Hero gradient:** `linear-gradient(135deg, #0EA5E9 0%, #06B6D4 50%, #8B5CF6 100%)` na ~18 % opacity

## Aktuální stav frontendu (k 2026-05-09)

**Routing:**
- `src/app/[locale]/(marketing)/page.tsx` — homepage 9 sekcí (Hero · Built-with · Problem · How It Works · Comparison · Agentic Moat · Pricing · Testimonial gated · FAQ · Final CTA)
- `src/app/[locale]/layout.tsx` — `NextIntlClientProvider`
- `src/app/layout.tsx` — `<html lang>` z `x-next-intl-locale` header, root fonts + JSON-LD
- `src/proxy.ts` — next-intl middleware (Next 16 conv.)
- `src/app/design/{a,b,c,d}/` + `src/app/design/styles/` — **nedotčené** (4 free-form explorace + 10-style switcher per rozhodnutí #3)
- `src/app/api/{health,contact}/` — bez locale prefix

**Komponenty:**
- `src/components/sections/` — 9 produkčních sekcí + `_archived/` (case-studies, portfolio, tech-cred, social-proof, uvp, contact-form)
- `src/components/layout/{navbar,footer,language-switcher}.tsx` — všechno i18n
- `src/components/ui/` — Button, Badge, Card, MetricCard, AnimatedCounter, IntegrationBadge, SectionWrapper, ScrollIndicator
- `src/components/design/{a,b,c,d,styles}/` — design varianty, **nedotčené**

**Data:**
- `src/data/messages/{types,en,cs}.ts` — typed dictionaries pro 12 sekcí (next-intl)
- `src/data/landing.ts` — legacy, drží design varianty `/design/{a,b,c,d}` + `/design/styles`
- `src/data/design-presets.ts` — 11 stylů (Wave + Klasik + 9 dalších), Wave je default na `/design/styles`

## Otevřené body / known issues

- **9 stránek 404:** `/book`, `/product`, `/pricing`, `/customers`, `/blog`, `/docs`, `/about`, `/careers`, `/changelog`, `/legal/*`. Linky v nav + footer fungují, routes ještě nepostavené.
- **`VERCEL_TOKEN` missing v GitHub secrets** — CD pipeline failuje na každém push. Workaround: lokální `vercel --prod --yes` (CLI je linked, přihlášený).
- **`landing.ts`** je legacy data — drží jen `/design/*` varianty. Marketing route ho nepotřebuje. Smazat ho **nelze** dokud nebudou design varianty refactor-nuté.
- **Cal.com booking link** — placeholder `/book`, account neaktivní.
- **Demo video** + `/blog/40-agents` post — chybí, blokují Touch 3+4 outreach (per `docs/discovery/06-outreach-templates.md`).
- **`prefers-reduced-motion: reduce`** + `whileInView` v framer-motion 12 = obsah zamrzá. Použít `animate="visible"` přímo místo `whileInView`. Bez `initial="hidden"`.
- **Logo assets** (favicon SVG, OG image dynamic, X banner, LinkedIn cover) — neuděláno.

## Discovery sprint — kontext

V `docs/discovery/` je připravený 4-week customer discovery sprint:
- 25 cílových interviews (top 25 z 50 ICP firem v `05-target-companies.md`)
- 5 hypotéz (`01-learning-goals.md`) — flakiness primary pain, agentic understood, CZ viable, self-hosted required, refund > discount
- Outreach šablony 4 sekvence × 5 touchů × CZ/EN (`06-outreach-templates.md`)
- Discovery interview script CZ + EN (`03-interview-script.md`)
- Tracker 30 firem v `02-tracker.md`

**Sprint zatím nezahájen** (čeká na decision: kdy spustit Touch 1, jaké free tools, blogposty).

## Když user řekne "deploy" / "nasaď"

Viz `@AGENTS.md`. **Aktualizace pro 2026-05-09:**
- Lokální dev běží na **port 3030**, ne 3000. Health check: `curl http://localhost:3030/api/health`
- CI/CD selže na chybějícím `VERCEL_TOKEN`. Workaround: `vercel --prod --yes` z lokálu (CLI linked).

@AGENTS.md
