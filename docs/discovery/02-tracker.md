# 02 — Discovery Tracker

> Single source of truth pro 25 cílových interviews. Update po každém change ve stavu, ne dávkově.
>
> **Pravidla:**
> - Každý záznam má `last_updated` ISO datum
> - Status změny append do "Notes" sloupce, ne overwrite
> - "Score" 1–10 z `04-target-criteria.md` rubric
> - Sloupec "Source list" odkazuje řádek v `05-target-companies.md`

---

## Status legend

| Status | Co to znamená | Next action |
|---|---|---|
| 🟦 `targeted` | V seznamu, ještě neoslovený | Spustit Touch 1 |
| 🟨 `touch1_sent` | Email 1 odeslán | Sledovat reply 5 dní, pak Touch 2 |
| 🟧 `touch2-3` | LinkedIn / Email 2 / Email 3 odesláno | Continue sequence |
| 🟪 `replied` | Odpověděli (positive/negative) | Disposition |
| 🟢 `call_booked` | Cal.com event ✓ | Připravit prep + run interview |
| ✅ `interview_done` | Interview proběhl | Logged + tagged + insights extracted |
| 🤝 `loi_signal` | Po interview projevili zájem o Design Sprint | Send proposal |
| 💎 `loi_signed` | Letter of Intent podepsán | Onboarding flow |
| ❌ `disqualified` | Mimo ICP / nezáujem / silent | Stop, don't re-engage 6 měsíců |

---

## Pipeline tabulka

> Naplň po dodání `05-target-companies.md` od `competitive-analyst` agenta. Šablona pro 30 řádků (5 buffer nad cílem 25).

> Naplněno z `05-target-companies.md` v6 (top 25 podle priority score × region quotas z `04-target-criteria.md` §10). "Role + Name" se doplní po Apollo / LinkedIn Sales Nav enrichmentu — agent dodal company-level data, person-level data je manual step.

| # | Company | Region | Persona | Role + Name | Score | Status | Touch | Last update | Next action | Notes |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Productboard | CZ | Marek | TBD (Head of QA) | 9 | 🟦 targeted | 0/5 | — | Apollo enrich + Touch 1 | Cypress confirmed via job ads, warm path via TestStack Prague |
| 2 | Kiwi.com | CZ | Marek | TBD (QA Lead) | 8 | 🟦 targeted | 0/5 | — | Apollo enrich + Touch 1 | Travel SaaS, big eng org |
| 3 | Rossum | CZ | Elena | TBD (CTO/VPE) | 8 | 🟦 targeted | 0/5 | — | Apollo enrich + Touch 1 | OCR/AI scale-up, FinTech-adjacent |
| 4 | Mews Systems | CZ | Marek | TBD (Head of QA) | 8 | 🟦 targeted | 0/5 | — | Apollo enrich + Touch 1 | Hospitality SaaS, recent Series C |
| 5 | GoodData | CZ | Marek | TBD (QA Lead) | 7 | 🟦 targeted | 0/5 | — | Apollo enrich + Touch 1 | Data platform, GHA visible in OSS |
| 6 | Personio | DE | Elena | TBD (VP Eng) | 9 | 🟦 targeted | 0/5 | — | Apollo enrich + Touch 1 | HR SaaS, ~1500 FTE, eng blog active |
| 7 | Pleo | DE/DK | Elena | TBD (VP Eng) | 9 | 🟦 targeted | 0/5 | — | Apollo enrich + Touch 1 | FinTech Series C, regulated |
| 8 | GetYourGuide | DE | Marek | TBD (QA Lead) | 8 | 🟦 targeted | 0/5 | — | Apollo enrich + Touch 1 | Travel marketplace, scale |
| 9 | Contentful | DE | Marek | TBD (Head of QA) | 8 | 🟦 targeted | 0/5 | — | Apollo enrich + Touch 1 | CMS, Cypress confirmed via GitHub |
| 10 | Staffbase | DE | Elena | TBD (VP Eng) | 8 | 🟦 targeted | 0/5 | — | Apollo enrich + Touch 1 | Employee comm SaaS |
| 11 | Scalable Capital | DE | Elena | TBD (VPE/CTO) | 8 | 🟦 targeted | 0/5 | — | Apollo enrich + Touch 1 | FinTech, regulated, BaFin |
| 12 | SumUp | DE | Marek | TBD (QA Lead) | 8 | 🟦 targeted | 0/5 | — | Apollo enrich + Touch 1 | Payments, technical org |
| 13 | Celonis | DE | Elena | TBD (VP Eng) | 7 | 🟦 targeted | 0/5 | — | Apollo enrich + Touch 1 | Process mining, late-stage scale |
| 14 | Adjust | DE | Marek | TBD (Head of QA) | 7 | 🟦 targeted | 0/5 | — | Apollo enrich + Touch 1 | Mobile attribution, technical |
| 15 | Modulr | UK | Elena | TBD (VP Eng) | 8 | 🟦 targeted | 0/5 | — | Apollo enrich + Touch 1 | UK FinTech infrastructure |
| 16 | Paddle | UK | Elena | TBD (VP Eng) | 8 | 🟦 targeted | 0/5 | — | Apollo enrich + Touch 1 | Post-M&A integration trigger |
| 17 | Checkout.com | UK | Marek | TBD (Head of QA) | 7 | 🟦 targeted | 0/5 | — | Apollo enrich + Touch 1 | UK FinTech, big tech org |
| 18 | Treatwell | UK | Elena | TBD (VP Eng) | 7 | 🟦 targeted | 0/5 | — | Apollo enrich + Touch 1 | UK marketplace |
| 19 | Superscript | UK | Marek | TBD (QA Lead) | 7 | 🟦 targeted | 0/5 | — | Apollo enrich + Touch 1 | UK insurtech |
| 20 | Mollie | NL | Elena | TBD (VP Eng) | 9 | 🟦 targeted | 0/5 | — | Apollo enrich + Touch 1 | NL FinTech, PCI+PSD2 (H4 fit) |
| 21 | Doctolib | FR | Elena | TBD (VP Eng) | 8 | 🟦 targeted | 0/5 | — | Apollo enrich + Touch 1 | HealthTech, GDPR+French health regs |
| 22 | Miro | NL | Marek | TBD (Head of QA) | 7 | 🟦 targeted | 0/5 | — | Apollo enrich + Touch 1 | Whiteboard SaaS, scale |
| 23 | Vinted | LT/PL | Marek | TBD (QA Lead) | 7 | 🟦 targeted | 0/5 | — | Apollo enrich + Touch 1 | Marketplace, Lithuanian eng team |
| 24 | Retool | US | Elena | TBD (VP Eng) | 8 | 🟦 targeted | 0/5 | — | Apollo enrich + Touch 1 | Devtools, founder-friendly |
| 25 | Modern Treasury | US | Elena | TBD (VP Eng) | 8 | 🟦 targeted | 0/5 | — | Apollo enrich + Touch 1 | FinTech, Series C |
| 26 | Finix | US | Elena | TBD (VP Eng) | 8 | 🟦 targeted | 0/5 | — | Buffer (US) | FinTech infrastructure |
| 27 | Exponea (Bloomreach) | CZ | Marek | TBD (QA Lead) | 7 | 🟦 targeted | 0/5 | — | Buffer (CZ) | E-commerce personalization |
| 28 | Raisin | DE | Marek | TBD (Head of QA) | 7 | 🟦 targeted | 0/5 | — | Buffer (DACH) | Savings marketplace, regulated |
| 29 | Froda | SE | Elena | TBD (VP Eng) | 7 | 🟦 targeted | 0/5 | — | Buffer (Nordics) | Embedded SME finance |
| 30 | Allegro | PL | Marek | TBD (Head of QA) | 7 | 🟦 targeted | 0/5 | — | Buffer (PL) | E-commerce platform, scale |

---

## Weekly snapshot

Každou neděli zalog do `02-tracker.md` čerstvý snapshot pod sebe:

### Týden 1 — sprint days 1–7

| Metric | Cíl | Actual |
|---|---|---|
| Outreach sent (Touch 1) | 80 | — |
| Outreach sent (cumulative all touches) | 100 | — |
| Replies received | 12 | — |
| Calls booked | 5 | — |
| Calls completed | 3 | — |
| LOI signals | 0 | — |
| LOIs signed | 0 | — |

**Disposition split:**
- 🟦 targeted: ?
- 🟨–🟧 in sequence: ?
- 🟪 replied: ?
- 🟢 booked: ?
- ✅ done: ?
- 🤝 LOI signal: ?
- 💎 LOI signed: ?
- ❌ disqualified: ?

**Hypothesis tag rollup (z `01-learning-goals.md`):**
- H1 flakiness primary: ?/? interviews
- H2 agentic understood: ?/? interviews
- H3 CZ viable: ?/? CZ interviews
- H4 self-hosted required: ?/? fintech+health
- H5 refund > discount A/B: ?/? subset

**Wins:**
- ...

**Blockers:**
- ...

**Next week priority:**
- ...

---

### Týden 2 — sprint days 8–14

(template stejný jako Týden 1)

| Metric | Cíl | Actual |
|---|---|---|
| Outreach cumulative | 200 | — |
| Calls completed cumulative | 10 | — |
| LOI signals | 1 | — |
| LOIs signed | 0 | — |

---

### Týden 3 — sprint days 15–21

| Metric | Cíl | Actual |
|---|---|---|
| Outreach cumulative | 350 | — |
| Calls completed cumulative | 18 | — |
| LOI signals | 3 | — |
| LOIs signed | 1 | — |

---

### Týden 4 — sprint days 22–28

| Metric | Cíl | Actual |
|---|---|---|
| Calls completed cumulative | **25** | — |
| LOI signals | 4 | — |
| LOIs signed | **3** | — |
| `07-insights.md` written | yes | — |

---

## Přehled hot accounts (live)

> Top 5 účtů s nejvyšším potenciálem v daném týdnu. Update po každém posunu.

| Account | Persona | Stage | Next move | Probability $ |
|---|---|---|---|---|
| — | — | — | — | — |

---

## Out-of-band notes

Místo na věci co nepasují do struktury — referrals které přišly, post-call insights, "btw user said X", links na Slack threads, atd.
