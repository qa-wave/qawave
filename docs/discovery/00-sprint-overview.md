# 00 — Customer Discovery Sprint

> **Cíl sprintu:** 25 dokončených discovery interviews za 4 týdny. Validovat / vyvrátit 5 hypotéz o ICP a positioningu, identifikovat 3 design-partner kandidáty.
>
> **Start:** týden 1 (kalendářně dle aktuálního commit-in date)
> **Hard deadline review:** den 28
> **Owner:** Tomáš (CEO + jediný full-time)
> **AI tým:** competitive-analyst (research), copywriter (outreach), chief-of-staff (orchestrace)

---

## Proč discovery, proč teď

QAWave má hotový web (qawave.ai), 10 vizuálních stylů na `/design/styles`, kompletní startup-pack v `teams/startup-qa/`, ale **0 platících zákazníků a 0 ověřených interviews**. Každý další positioning move, pricing iterace, content kalendář a frontend redesign se dělá **naslepo, dokud nemáme reálná slova z 25 ICP úst**.

Discovery sprint není sales pipeline. Je to **falsifikační stroj**. Cílem není conversion, ale **invalidace hypotéz**. Pokud po 25 interviews zjistíme, že "Michal" v CZ nikdy nekupuje, nebo že primary boláek není flakiness ale CI cost, nebo že nikdo nedůvěřuje agentní AI bez vysvětlitelnosti — *to je výhra*, ne neúspěch.

## Deliverables na konci sprintu

1. **25 interview záznamů** (kalendář + zápisky + tagged insights v `docs/discovery/interviews/`)
2. **Insights synthesis** (`07-insights.md`) — patterns napříč rozhovory, validated/invalidated hypotézy
3. **Persona refinement** — update `02-icp-personas.md` patches, pokud reality přepíše domněnky
4. **3 design-partner LOIs** — formální letters of intent (i bez peněz teď)
5. **Pricing reality check** — zaznamenané reakce na "$35k Design Sprint" + "$180k Implementation"
6. **Messaging that landed vs. flopped** — A/B telemetrie z outreach (open rates, reply rates, call-show rates)

## Sprint struktura — 4 týdny

| Týden | Fokus | Klíčové milníky |
|---|---|---|
| **1** | Setup + first wave | Apollo/Sales Nav setup, target list finalizace, prvních 80 outreach emailů, 3–5 calls booked |
| **2** | Momentum | 200 outreach total, 8–10 calls completed, messaging iteration round 1, první LOI signal |
| **3** | Iterate | 350 outreach total, 18–20 calls total, 2 LOI signed (z 3 cílových), refined persona deck |
| **4** | Close + synthesize | 25 calls done, 3 LOIs, write `07-insights.md`, decide go/iterate/pivot |

**Týdenní rituál:** každou neděli 17:00–18:00 sprint review → tracker update, hypothesis status, dashboard report.

## Soubory v `docs/discovery/`

| Soubor | Vlastník | Účel |
|---|---|---|
| `00-sprint-overview.md` | Tomáš | Tento soubor — orientace |
| `01-learning-goals.md` | Tomáš | 5 hypotéz, jak je testovat, jak vypadá validation |
| `02-tracker.md` | Tomáš | Live spreadsheet 25+ targetů × pipeline stage |
| `03-interview-script.md` | Tomáš | CZ + EN script s 7 otázkami, branched per persona |
| `04-target-criteria.md` | Tomáš | Apollo / Sales Nav search queries, scoring rubric |
| `05-target-companies.md` | competitive-analyst | 50 firem profilovaných podle ICP |
| `06-outreach-templates.md` | copywriter | 5-touch sekvence × CZ/EN × Elena/Marek |
| `07-insights.md` | Tomáš | Píše se v týdnu 4 — patterns, decisions |
| `interviews/` | Tomáš | One markdown per call, naming `YYYY-MM-DD_company_persona.md` |

## North-star metriky

- **Activity:** outreach sent / týden (cíl: 80 → 200 → 350 cumulative)
- **Funnel:** outreach → reply → call booked → call completed
- **Quality:** % calls kde dostaneme aspoň 3 specifická čísla (flaky %, CI minutes, team size, budget range, last incident date)
- **Conversion:** % calls → LOI signal → LOI signed (cíl: 25 → 8 → 3)

## Anti-patterns (čeho se varovat)

- **Confirmation bias** — neptej se "není to tak, že máte problém s flaky testy?". Otevřené otázky, viz `03-interview-script.md`.
- **Pitch během discovery** — discovery NENÍ pitch. Demo přijde **až** po Q1–Q4. Pokud někdo požádá o demo dřív, lze, ale flagni v zápisu.
- **Friend interviews** — 25 interviews s lidmi co tě znají = 0 signal. Min. 18 z 25 musí být **cold contacts** přes outbound nebo cold intro.
- **Sample bias** — pokud 25/25 rozhovorů je s českými 200-FTE SaaS firmami, závěry neplatí pro DACH 1000-FTE fintech. Distribuce viz `04-target-criteria.md`.
- **Overwriting tracker** — jedna verze pravdy v `02-tracker.md`. Každá změna stavu má timestamp v poznámce. Nepřemazávat, jen append.

## Kdy sprint pivotovat

Pokud do dne 14 (polovina sprintu) máme:
- < 4 calls completed → outreach je rozbitý, iteruj messaging (`copywriter` re-run)
- 8+ calls ale 0/8 zmiňuje "agentní" / "autonomous" jako relevantní pojem → repositioning warning, eskalace na chief-of-staff
- 8+ calls, 6+ pozitivních reakcí na pricing → potenciální under-pricing, zvážit zvýšení Design Sprint na $50k před týden 3
- 0 LOI signals → re-evaluuj design partner offer (50 % discount neufunguje), zvaž free pilot s upside

## Po sprintu

Sprint končí v den 28. Den 29 je rozhodovací — držet kurz, iterovat, pivotovat. To je samostatný dokument (`docs/discovery/07-insights.md` → decision section).
