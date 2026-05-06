# 04 — Target Criteria & Search Queries

> Jak najít ICP firmy + správné kontakty. Apollo / LinkedIn Sales Navigator / Clay queries, scoring rubric, anti-ICP filtry.

---

## 1. ICP filtr (binary go/no-go)

Firma musí splnit **všechny** podmínky:

| Filtr | Hodnota | Source |
|---|---|---|
| **FTE total** | 200 ≤ FTE ≤ 5 000 | LinkedIn `current_company_size` / Crunchbase |
| **Engineering org** | ≥ 30 | LinkedIn job count v "engineering" / Built In |
| **Industry** | Software / SaaS / FinTech / HealthTech / E-commerce / Automotive | Crunchbase `industries` |
| **HQ region** | EU / UK / US (no APAC v Year 1) | LinkedIn `headquarters` |
| **Funding stage** (pokud applicable) | Series A+ nebo profitable bootstrapped | Crunchbase |
| **Tech maturity** | Veřejně viditelný engineering blog / GitHub org / careers page s SDET roles | manuál check |

## 2. Anti-ICP filtr (hard exclude)

Firma vyloučena, pokud splní **kterékoliv**:

- < 200 FTE (no budget for $35k+ contract)
- Pure agentura / dev shop / consultancy (testing je client problem, ne interní)
- Defense / classified industry (clearance gate)
- Crypto / web3-only (volatile budget cycles, sniženy enterprise discipline)
- Pre-Series A startup (no QA function yet)
- Stack 100 % .NET + TFS + Azure DevOps (možný fit, ale Year 1 prioritize Playwright/Cypress/JS world)
- Veřejně známý "manuální QA pouze" stance (CEO/VPE post na LinkedIn = signal)

---

## 3. Persona scoring rubric (1–10)

> Skóre se přiděluje na úrovni firmy, ne osoby. Osoby v každé firmě → priority 1 → priority 2 → fallback per `02-icp-personas.md` decision matrix.

| Body | Co znamená |
|---|---|
| **Pain depth** | 0 = no signal / 3 = single signal / 6 = multiple public signals (blog + jobs + talk) / 9 = explicit incident in last 90 days |
| **Budget capacity** | 0 = pre-Series A / 3 = Series A / 6 = Series B / 9 = profitable scale-up nebo Series C+ |
| **Buying readiness** | 0 = no trigger / 3 = some signal / 6 = recent VPE/Head QA hire OR new funding / 9 = explicit sourcing (RFP, vendor evaluation) |
| **Reachability** | 0 = no warm path / 3 = 3rd-degree LinkedIn / 6 = 2nd-degree / 9 = direct intro available |
| **Reference value** | 0 = obscure / 3 = niche-known / 6 = well-known mid-market / 9 = prestigious logo |

**Total max:** 45. Normalize na 1–10 dělením 4.5 a roundováním.

| Score | Kategorie | Touch priority |
|---|---|---|
| 9–10 | 🔥 Hot | Touch 1 v týdnu 1, Day 0 |
| 7–8 | ⭐ Warm | Touch 1 v týdnu 1, Day 3–5 |
| 5–6 | 📋 Standard | Touch 1 v týdnu 2 |
| 3–4 | 🪙 Long tail | Touch 1 v týdnu 3 (capacity dependent) |
| < 3 | ❌ Drop | Don't touch |

---

## 4. LinkedIn Sales Navigator queries

> Kopíruj-paste do Sales Nav advanced search. Update verze: 2026-Q2.

### Query 1 — Elena (VPE) v DACH mid-market SaaS

```
Geography: Germany, Austria, Switzerland
Company headcount: 201–1000
Industry: Computer Software, Internet, Financial Services
Function: Engineering, Information Technology
Seniority: VP, CXO
Title contains: "VP Engineering" OR "VP of Engineering" OR "CTO" OR "Chief Technology" OR "Head of Engineering" OR "Engineering Director"
Title NOT contains: "Junior", "Associate", "Manager" alone
```

**Expected hits:** 800–1500. Filtruj manually na top 30 podle scoring rubric.

---

### Query 2 — Marek (Head QA) v EU mid-market

```
Geography: EU + UK + Switzerland
Company headcount: 201–1000
Industry: Computer Software, Internet, Financial Services, Hospital & Health Care, Automotive
Title contains: "Head of QA" OR "Director of QA" OR "Head of Quality" OR "QA Lead" OR "Test Manager" OR "Director of Test Engineering" OR "SDET Lead"
Posted on LinkedIn in last 90 days: yes
```

**Expected hits:** 400–700. Bonus signal: jobs posting "Senior SDET" v jejich firmě (= scaling QA = budget unlocked).

---

### Query 3 — Tomáš (Staff Eng) v devtools / platform companies

```
Geography: EU + UK + US
Company headcount: 201–2000
Industry: Computer Software, Internet
Title contains: "Staff Engineer" OR "Principal Engineer" OR "Platform Lead" OR "Developer Experience" OR "DX Engineer" OR "Tech Lead"
Posted in last 30 days: yes
```

**Use case:** champion building, ne primary buyer. Lower priority for sprint, ale dobré pro long-tail content distribution.

---

### Query 4 — Czech / Slovak market

```
Geography: Czechia, Slovakia
Company headcount: 100–2000
Industry: Computer Software, Internet, Financial Services
Title contains: "CTO" OR "VP" OR "Head of" OR "Director" OR "Vedoucí"
```

**Specific firmy k watch-listu (manual seed):** Productboard, Apify, Photoneo, Avast/Gen, JetBrains (CZ office), Showmax, Mews, Storyblok (CZ branch), Rohlík/Knuspr, Twisto, Mall.cz, Dronetag, Mapotic, Datasentics, Ataccama. **Pozn:** ne všechny pasují na ICP — `competitive-analyst` v `05-target-companies.md` rozhodne.

---

### Query 5 — Recent funding signals

```
Saved Search: "Recent funding events"
Trigger: Crunchbase API alert
Criteria: Series A or B v posledních 60 dnech, EU/US, software industry, ≥ $20M raise
```

**Action:** každé pondělí review nová fundings, score top 5 a přidej do trackeru jako 🔥 Hot.

---

## 5. Apollo.io queries

Apollo doplňuje LinkedIn o emaily + verifikuje deliverability. Setup query:

```yaml
filters:
  - employee_count: 201..2000
  - industry:
      - Computer Software
      - Internet Software & Services
      - Financial Services
      - Hospital & Health Care
      - Automotive
  - country:
      - Germany, Austria, Switzerland, Netherlands, UK, Sweden, Denmark, Norway,
        Czech Republic, Slovakia, Poland, France, Spain
  - title_keywords:
      - VP Engineering, CTO, Head of Engineering, VP Engineering & Operations
      - Head of QA, Director of QA, Head of Quality, Test Manager
  - seniority:
      - VP / CXO / Director
  - email_status: verified
exclude:
  - title_keywords: ["Junior", "Associate", "Manager" alone]
  - company_keywords: ["consulting", "agency", "studios"]
sort: priority_score_desc
limit: 200
```

**Apollo plan needed:** Basic ($49/měs) → 1 200 contacts/měs. Pre-seed budget OK.

---

## 6. Clay workflow (optional, pokud cash allows)

Clay adds signal aggregation — automated scoring per company:

```
Trigger: New row in target list
Steps:
1. Enrich: Crunchbase (funding, last round, total raised)
2. Enrich: BuiltWith (tech stack hints)
3. Scrape: company careers page → count of "QA" / "SDET" / "Test" job titles
4. Scrape: company eng blog → keyword density "flaky", "test", "CI", "deploy"
5. Compute priority_score per rubric §3
6. Push to: Notion / Airtable / Google Sheets target list
```

**Cost:** Clay $149/měs Starter. Skip pokud sprint budget není.

---

## 7. Manual research checklist (per company, 5 min)

> Když chceš ověřit nebo doplnit `competitive-analyst` listing, projdi tento checklist:

- [ ] LinkedIn company page — current employee count
- [ ] Engineering blog — `<company>.com/blog` nebo `medium.com/<company>-engineering` — last post date, top 3 témata
- [ ] Careers page — kolik open SDET/QA/test rolí
- [ ] GitHub org — `github.com/<company>` — počet public repos, top language, recent activity
- [ ] Crunchbase — funding stage, last round date, total raised
- [ ] Twitter/X eng account — `@<company>eng` — post cadence
- [ ] Conference talks — search "<company> testing" v YouTube + Speakerdeck
- [ ] Trigger signal flag — incident, hire, audit announcement v posledních 90 dnech?

→ Sumarizuj do `05-target-companies.md` per format v `competitive-analyst` agent prompt.

---

## 8. CZ + SK manual seed list (warmstart)

> `competitive-analyst` dodá 10. Pokud nepřijde nebo seznam slabý, fallback:

| Company | Industry | FTE est | Why |
|---|---|---|---|
| Productboard | Product mgmt SaaS | ~400 | CZ HQ, B2B, eng blog active |
| Apify | Web scraping platform | ~80–120 | possibly under FTE threshold but high tech maturity |
| Mews | Hospitality SaaS | ~700 | CZ HQ, recent funding |
| Showmax | Streaming | ~300+ | tech-savvy, ex-MTG |
| Rohlík/Knuspr | E-commerce | ~2000+ (group) | scale issues, pan-EU |
| Twisto | FinTech (BNPL) | ~200 | financial regulation gate (H4 fit) |
| Avast/Gen | Cybersec | ~3000+ (CZ office) | enterprise, slower cycle |
| JetBrains | Developer tools | ~2000 (Prague) | dev-tools sympathie |
| Ataccama | Data quality | ~250 | B2B SaaS, QA gap likely |
| Datasentics | Data platforms | ~150 (under FTE) | possibly disqualified, edge |

**Pozn:** všechno hypotézy, ne ověřená pasovka. `competitive-analyst` ověří + nahradí.

---

## 9. Email finding fallbacks

Pokud Apollo nemá email pro target person:

1. **Email permutator** — `[first].[last]@<domain>`, `[firstinitial][last]@<domain>`, `[first]@<domain>`
2. **Verification:** Mailtester.com nebo Hunter.io single lookup ($5/100)
3. **Last resort:** LinkedIn InMail (Sales Nav credit), nebo cold connect note + follow-up message

**Never spray-and-pray:** non-verified emaily = bounce → spam folder reputation. Capacity loss > výhoda množství.

---

## 10. Distribuce 25 finálních interviews — quotas

Cílem **25 calls completed** je distribuce, ne random subset 25:

| Region | Quota | Persona quota |
|---|---|---|
| CZ + SK | 4–5 | 3 Marek / 1–2 Elena |
| DACH | 8–9 | 4–5 Elena / 3–4 Marek |
| Nordics + UK | 5 | 3 Elena / 2 Marek |
| Zbytek EU | 4 | 2 Elena / 2 Marek |
| US mid-market | 2–3 | 2 Elena / 0–1 Marek |
| **Stretch slots** | 0–2 | Dr. Schmidt nebo Tomáš pokud organic |

Pokud do dne 14 quotas v některém bucketu < 50 % → re-prioritize outreach týden 3 do podváhy bucketu.

---

## 11. Privacy & GDPR

EU outbound je GDPR-regulated. Hard rules:

- **B2B legitimate interest** je legal basis pro initial cold email **pokud:**
  - Jméno a kontakt z public LinkedIn / company web
  - Email subject jasně commercial (no clickbait)
  - Easy opt-out v každém emailu ("Nepřejete si další emaily? Stačí odpovědět STOP.")
  - Žádná masová (>100/den z jedné domény) odesílka — Mailgun rate limit 100/h

- **Žádné scrapnuté soukromé emaily** (gmail.com / proton.me / hotmail.com) — jen firemní domény

- **DPA template ready** — pokud někdo požádá, mít připravený. Skipnout pokud nepožádán.

- **Right to be forgotten** — pokud target řekne "delete my data", drop ze všech systémů (Apollo, Clay, tracker) do 30 dnů.

---

## 12. Outreach sending infrastructure

Pre-seed setup, ne enterprise sales engine:

- **Sender:** `tomas@qawave.ai` (founder voice, žádné no-reply)
- **Service:** Gmail s SPF/DKIM/DMARC nastaveným pro qawave.ai
- **Volume cap:** 30 outreach / den / sender max (Gmail trust signal preserve)
- **Tracking:** Mailtrack nebo HubSpot Free pro open + reply tracking
- **Cal.com:** booking link pevný, embedded v každém Touch 1
- **Reply window:** odpověz na pozitivní reply do 60 minut během pracovních hodin (CET)

**No mass automation v sprint 1.** Manual sends → vyšší reply rate, lepší trust. Automation tools (Lemlist / Smartlead / Apollo Sequences) až po sprintu, pokud se message proves out.
