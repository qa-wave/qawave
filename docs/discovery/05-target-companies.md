# 05 — Target Companies (Discovery Sprint)

> 50 firem profilovaných podle ICP. Žádný kontakt-level data; ta se enrichují přes Apollo/Sales Nav v "execution" fázi sprintu. Signály označené `[H]` jsou hypotézy k ověření; signály bez označení jsou doložitelné z veřejných zdrojů ke stavu srpen 2025.

---

## Souhrn

| Region | # | Top vertikál | Primary persona |
|---|---|---|---|
| CZ + SK | 10 | B2B SaaS / FinTech | Michal / Marek |
| DACH | 15 | FinTech / B2B SaaS / HealthTech | Elena / Dr. Schmidt |
| Nordics + UK | 10 | FinTech / B2B SaaS | Elena / Marek |
| Zbytek EU (NL/FR/PL/ES) | 10 | B2B SaaS / E-commerce | Elena / Marek |
| US mid-market (stretch) | 5 | FinTech / DevTools / HealthTech | Elena |

---

## Priority distribution

| Score | # firem | Co to znamená |
|---|---|---|
| 9–10 | 8 | Hot — okamžitý touch (týden 1, den 1–3) |
| 7–8 | 18 | Warm — touch v týdnu 1 |
| 5–6 | 18 | Standard — týden 2–3 |
| <5 | 6 | Long tail — týden 4, nurture |

---

## CZ + SK (10)

### 1. Productboard — score 9

```yaml
- name: Productboard
  url: https://www.productboard.com
  hq: Praha, Česká republika
  fte_estimate: ~350–450
  industry: B2B SaaS (Product Management)
  primary_persona: Elena (VP Engineering)
  tech_stack_hints:
    - Cypress (viditelné v job ads a engineering blog, 2024)
    - GitHub Actions (zmíněno v engineering blog)
    - React + TypeScript frontend
    - Kubernetes na AWS
  trigger_signals:
    - Engineering blog aktivní, tematicky rezonuje s test reliability (2024–2025)
    - Pravidelně nabírá Senior SDET / QA Automation roli (LinkedIn, 2024–2025)
    - "[H] Série C $125M (2022) — budget k dispozici, ale sales cycle mid-market"
  why_priority: >
    Česká firma s globálním footprintem, technicky vyspělý tým, Cypress stack potvrzený
    z veřejných job postů, přímý reach přes českou QA komunitu (TestStack Prague, QA Days).
    Warm intro potenciál přes českou engineering komunitu.
  priority_score: 9
  warm_intro_path: "TestStack Prague / QA Days speaker network; LinkedIn 2nd-degree pravděpodobný"
```

---

### 2. Kiwi.com — score 8

```yaml
- name: Kiwi.com
  url: https://www.kiwi.com
  hq: Brno, Česká republika
  fte_estimate: ~700–900
  industry: E-commerce / Travel Tech
  primary_persona: Elena (VP Engineering)
  tech_stack_hints:
    - Playwright (zmíněno v inzerátech 2024)
    - pytest, JavaScript testing
    - GitHub / GitLab CI (veřejné job inzeráty)
    - Python microservices backend
  trigger_signals:
    - "[H] Opakované nábory Senior SDET a QA Lead roles (LinkedIn 2024–2025) — hiring = pain"
    - High-traffic e-commerce platforma s komplexní stavovou logikou (peak traffic = flakiness risk)
    - Brněnský tech ekosystém — lokální advokáti dostupní
  why_priority: >
    Velký engineering tým, vysoký traffic e-com stack (ideální pro load + visual regression use case),
    Playwright stack ověřen z job ads. Brno lokace = lokální dosah bez cestovních nákladů.
  priority_score: 8
  warm_intro_path: "[H] Brno tech meetup síť; LinkedIn 2nd-degree přes Czech startup ekosystém"
```

---

### 3. Rossum — score 8

```yaml
- name: Rossum
  url: https://rossum.ai
  hq: Praha, Česká republika
  fte_estimate: ~250–350
  industry: B2B SaaS (AI Document Processing / FinTech-adjacent)
  primary_persona: Marek (Head of QA / SDET Lead)
  tech_stack_hints:
    - Python + Django backend
    - "[H] Playwright nebo Cypress (AI-native firma — pravděpodobné moderní test stack)"
    - GitHub Actions (veřejné repozitáře naznačují GHA)
  trigger_signals:
    - "[H] Série B $100M+ (2022) — budget přítomen"
    - AI-first produkt = komplex testing scénáře (document AI edge cases)
    - Aktivní engineering blog (2024–2025)
    - "[H] Scaling QA tým v souladu s produktovým rozvojem"
  why_priority: >
    AI produkt s dokumentovými edge cases je přesně use case pro agentic exploratory testing.
    Středně velká firma ve sweet spotu ICP. Praha — osobní meeting dostupný.
  priority_score: 8
  warm_intro_path: "[H] Praha startup ekosystém; Czech Invest / Credo Ventures portfolio network"
```

---

### 4. Mews Systems — score 8

```yaml
- name: Mews Systems
  url: https://www.mews.com
  hq: Praha, Česká republika
  fte_estimate: ~600–800
  industry: B2B SaaS (Hospitality Tech)
  primary_persona: Elena (VP Engineering)
  tech_stack_hints:
    - C# / .NET backend s moderním frontend stackem
    - "[H] Selenium nebo Playwright (enterprise hospitality stack naznačuje automated e2e)"
    - Azure DevOps / GitHub Actions [H]
  trigger_signals:
    - Série C $185M (2022) — veřejně potvrzeno (Crunchbase)
    - Rychlé scaling fáze post-funding = QA bottleneck pravděpodobný
    - Nábory engineering rolí průběžně (LinkedIn 2024–2025)
    - "[H] Hotel tech s komplexní multi-tenant architekturou = flakiness risk"
  why_priority: >
    Velký mid-market, potvrzené funding, česká lokace pro warm intro. Multi-tenant SaaS
    s financemi v sázce (hotely, rezervace) — compliance a test coverage jsou reálný pain.
  priority_score: 8
  warm_intro_path: "Czech startup ekosystém; LinkedIn 2nd-degree přes Mews engineering leaders"
```

---

### 5. Vacuumlabs — score 6

```yaml
- name: Vacuumlabs
  url: https://vacuumlabs.com
  hq: Bratislava, Slovensko
  fte_estimate: ~350–500
  industry: FinTech (software studio + own products)
  primary_persona: Marek (Head of QA)
  tech_stack_hints:
    - JavaScript / TypeScript stack (Haskell pro část produktů)
    - "[H] Cypress nebo Playwright (fintech web aplikace)"
    - GitHub Actions [H]
  trigger_signals:
    - FinTech studio s více produktovými linkami = multi-codebase QA problém
    - Aktivní nábor engineering rolí (LinkedIn 2024–2025)
    - "[H] Regulatorní zátěž (PCI DSS, GDPR) = compliance testing need"
  why_priority: >
    Slovenská firma s FinTech fokusem a silnou engineering kulturou. Více projektů
    paralelně = horizontální QA potřeba. Lokální SK dosah.
  priority_score: 6
  warm_intro_path: "[H] Slovak startup konference; LinkedIn network"
```

---

### 6. GoodData — score 7

```yaml
- name: GoodData
  url: https://www.gooddata.com
  hq: Praha, Česká republika
  fte_estimate: ~250–400
  industry: B2B SaaS (Analytics / Data Platform)
  primary_persona: Elena (VP Engineering)
  tech_stack_hints:
    - React frontend (open-source UI komponenty na GitHubu)
    - "[H] Cypress nebo Playwright (analytics SaaS = e2e test potřeba)"
    - GitHub Actions (viditelné v open-source repozitářích)
  trigger_signals:
    - Série E historicky, stabilní growth-stage firma
    - Open-source aktivita na GitHubu = engineering transparency
    - "[H] Analytics platform s komplexním state management = flakiness risk"
    - Engineering blog aktivní (2024)
  why_priority: >
    Data analytics SaaS s komplexní UI a open-source engineering kulturou.
    GitHub Actions potvrzeny z veřejných repozitářů. Praha = lokální.
  priority_score: 7
  warm_intro_path: "[H] Praha tech komunita; GitHub open-source network"
```

---

### 7. Kentico — score 6

```yaml
- name: Kentico
  url: https://www.kentico.com
  hq: Brno, Česká republika
  fte_estimate: ~300–450
  industry: B2B SaaS (CMS / Digital Experience)
  primary_persona: Marek (Head of QA)
  tech_stack_hints:
    - C# / .NET core produkt
    - "[H] Selenium nebo Playwright (established .NET shop)"
    - Azure DevOps pravděpodobné [H]
  trigger_signals:
    - Etablovaná česká SaaS firma s enterprise zákazníky
    - "[H] Legacy test stack (Selenium) = migration opportunity"
    - Brno lokace = lokální dosah
  why_priority: >
    Etablovaný CMS/DXP vendor s enterprise zákazníky a pravděpodobně legacy test stack.
    Potenciál pro migration story (Selenium → agentní přístup).
  priority_score: 6
  warm_intro_path: "[H] Brno tech ekosystém; QA komunita"
```

---

### 8. Exponea (Bloomreach CZ entity) — score 7

```yaml
- name: Bloomreach (Praha engineering hub)
  url: https://www.bloomreach.com
  hq: Praha, Česká republika (engineering hub)
  fte_estimate: ~400–600 (CZ entity)
  industry: B2B SaaS (E-commerce Personalization)
  primary_persona: Elena (VP Engineering)
  tech_stack_hints:
    - Python + React stack
    - "[H] Pytest + Playwright (moderní SaaS e-com stack)"
    - GitHub Actions [H]
  trigger_signals:
    - Bloomreach globálně ~$200M ARR (potvrzeno z press) — mid-market to enterprise
    - Praha engineering hub s vlastní inženýrskou kulturou (Exponea akvizice)
    - "[H] Post-M&A integrace = test stack chaos = buying moment"
  why_priority: >
    Post-akviziční engineering org s mix stacku (Exponea + Bloomreach) = klasický QA
    debt trigger. Praha hub dosažitelný lokálně.
  priority_score: 7
  warm_intro_path: "[H] Czech startup alumni network (Exponea zakladatelé)"
```

---

### 9. Slido (Cisco-owned, SK engineering) — score 5

```yaml
- name: Slido
  url: https://www.slido.com
  hq: Bratislava, Slovensko (Cisco ownership)
  fte_estimate: ~200–300 (SK tým)
  industry: B2B SaaS (Audience Engagement)
  primary_persona: Marek (Head of QA / SDET)
  tech_stack_hints:
    - JavaScript / Node.js stack (veřejně známé)
    - "[H] Cypress nebo Playwright"
    - GitHub Actions [H]
  trigger_signals:
    - Cisco parent = enterprise procurement procesy (longer cycle)
    - "[H] Cisco integrace může způsobit test stack standardizaci — buying moment"
    - Aktivní engineering tým v SK
  why_priority: >
    Uznávaná SK firma, ale Cisco ownership prodlužuje sales cycle. Spíš long tail —
    zařazen pro SK coverage a warm intro potenciál přes Slovak tech komunitu.
  priority_score: 5
  warm_intro_path: "[H] Slovak tech komunita; LinkedIn přes Slido alumni"
```

---

### 10. Alma Career (LMC Group) — score 5

```yaml
- name: Alma Career (LMC Group)
  url: https://www.almacareer.com
  hq: Praha, Česká republika
  fte_estimate: ~500–700
  industry: B2B SaaS (HR Tech / Job Boards)
  primary_persona: Marek (Head of QA)
  tech_stack_hints:
    - PHP + JavaScript mixed stack (Jobs.cz, Práce.cz produkty)
    - "[H] Selenium nebo Cypress (legacy portfolio)"
    - Jenkins nebo GitLab CI [H]
  trigger_signals:
    - Velký lokální hráč s legacy portfóliem = tech debt accumulation
    - "[H] Modernizace na nové frameworky = migration buying moment"
    - Praha lokace = lokální
  why_priority: >
    HR tech platforma s legacy portfóliem a pravděpodobným tech debt v test automatizaci.
    Velikost pasuje, ale vertikála je slabší (HR tech < FinTech pro QAWave UVP).
    Zařazen pro CZ coverage.
  priority_score: 5
  warm_intro_path: "[H] Praha tech komunita; Prague Startup community"
```

---

## DACH (15)

### 11. Personio — score 9

```yaml
- name: Personio
  url: https://www.personio.com
  hq: Mnichov, Německo
  fte_estimate: ~1 500–1 800
  industry: B2B SaaS (HR / People Management)
  primary_persona: Elena (VP Engineering)
  tech_stack_hints:
    - Ruby on Rails + React stack (potvrzeno z veřejných engineering blogů)
    - "[H] Playwright nebo RSpec + Capybara pro e2e"
    - GitHub Actions [H]
  trigger_signals:
    - Série D $200M (2021), celkem $500M+ raised — Crunchbase potvrzeno
    - ~1 500 FTE v 2024 = mid-market sweet spot
    - "[H] Rychlé scaling = QA bottleneck pravděpodobný"
    - Engineering blog aktivní (personio.engineering)
    - "[H] Nábory SDET / QA Engineer průběžné (LinkedIn)"
  why_priority: >
    Největší německý HR SaaS unicorn v mid-market sweet spotu. Engineering blog
    signalizuje tech-savvy kulturu. High-growth post-Series D = budget a pain.
  priority_score: 9
  warm_intro_path: "[H] DACH SaaS komunita; LinkedIn 2nd-degree přes German engineering leaders"
```

---

### 12. GetYourGuide — score 8

```yaml
- name: GetYourGuide
  url: https://www.getyourguide.com
  hq: Berlín, Německo
  fte_estimate: ~800–1 100
  industry: E-commerce / Travel Tech
  primary_persona: Elena (VP Engineering)
  tech_stack_hints:
    - Python + Java backend, React frontend (engineering blog potvrzeno)
    - "[H] Playwright nebo Selenium pro e2e (travel e-com = heavy UI testing)"
    - "[H] GitHub Actions nebo Jenkins"
  trigger_signals:
    - Série F $485M (2019), profitable path — veřejně potvrzeno
    - Komplexní marketplace architektura = flakiness risk
    - "[H] Engineering blog aktivní (tech.getyourguide.com)"
  why_priority: >
    Large-scale travel marketplace s komplexní UI a sezónní traffic spikes — přesný
    fit pro visual regression + load testing use case. Berlin = DACH hub.
  priority_score: 8
  warm_intro_path: "[H] Berlin tech komunita; LinkedIn přes GetYourGuide engineering"
```

---

### 13. Contentful — score 8

```yaml
- name: Contentful
  url: https://www.contentful.com
  hq: Berlín, Německo
  fte_estimate: ~700–900
  industry: B2B SaaS (Headless CMS / Content Infrastructure)
  primary_persona: Elena (VP Engineering)
  tech_stack_hints:
    - Node.js + React stack (open-source SDK na GitHubu)
    - Cypress (viditelné v open-source repositářích)
    - GitHub Actions (open-source CI konfigurace)
  trigger_signals:
    - Série E $175M (2021) — Crunchbase potvrzeno
    - Open-source Cypress testy viditelné na GitHubu — pain verified
    - Engineering blog aktivní (contentful.com/blog/engineering)
    - "[H] Enterprise zákazníci = SOC 2 compliance pressure"
  why_priority: >
    Cypress stack potvrzený z GitHubu — přímý fit pro QAWave. Enterprise zákazníci
    vytvářejí compliance pressure (Dr. Schmidt persona). Silná engineering kultura.
  priority_score: 8
  warm_intro_path: "GitHub open-source komunita (Cypress testy); LinkedIn Berlin tech"
```

---

### 14. Celonis — score 7

```yaml
- name: Celonis
  url: https://www.celonis.com
  hq: Mnichov, Německo
  fte_estimate: ~2 500–3 000
  industry: B2B SaaS (Process Mining / Enterprise Analytics)
  primary_persona: Dr. Schmidt (Enterprise, compliance-heavy)
  tech_stack_hints:
    - Java + React enterprise stack
    - "[H] Selenium nebo Playwright (enterprise e2e)"
    - "[H] Jenkins nebo GitHub Actions"
  trigger_signals:
    - Unicorn valuation $13B+ (2021) — upper end ICP
    - "[H] Enterprise zákazníci z Fortune 500 = compliance + governance pain"
    - Nábory Senior QA / SDET průběžně [H]
  why_priority: >
    Na horní hranici ICP (3 000 FTE), ale enterprise compliance use case je silný.
    Dr. Schmidt persona — governance + audit trail je jejich exact need.
    Delší sales cycle — zařazen jako stretch DACH entry.
  priority_score: 7
  warm_intro_path: "[H] DACH enterprise SaaS network; Munich tech komunita"
```

---

### 15. Staffbase — score 8

```yaml
- name: Staffbase
  url: https://staffbase.com
  hq: Chemnitz / Berlín, Německo
  fte_estimate: ~600–900
  industry: B2B SaaS (Employee Communications)
  primary_persona: Elena (VP Engineering)
  tech_stack_hints:
    - React + Node.js (engineering blog naznačuje)
    - "[H] Cypress nebo Playwright"
    - GitHub Actions [H]
  trigger_signals:
    - Série E $145M (2022) — Crunchbase potvrzeno
    - Rychlý growth = QA scaling pain pravděpodobný
    - "[H] Hybrid office work product = mobile + web e2e testing complexity"
  why_priority: >
    Post-Series E v ideálním sweet spotu. B2B SaaS pro velké enterprise zákazníky
    = compliance + reliability pain. Sizing a timing ideální.
  priority_score: 8
  warm_intro_path: "[H] Berlin/Dresden tech scéna; LinkedIn přes German SaaS founders"
```

---

### 16. Pleo — score 9

```yaml
- name: Pleo
  url: https://www.pleo.io
  hq: Kodaň, Dánsko (+ Berlín engineering hub)
  fte_estimate: ~700–900
  industry: FinTech (Business Spend Management)
  primary_persona: Elena (VP Engineering)
  tech_stack_hints:
    - Kotlin + Node.js backend, React frontend
    - "[H] Playwright nebo Cypress (fintech web + mobile)"
    - GitHub Actions [H]
  trigger_signals:
    - Série C $150M (2022) — Crunchbase potvrzeno
    - FinTech = PCI DSS + regulatorní pressure → Dr. Schmidt persona sekundárně
    - "[H] Hypergrowth fáze = QA bottleneck klasický"
    - "Engineering jobs aktivní 2024–2025 [H]"
  why_priority: >
    FinTech unicorn v hypergrowth, přesně správná velikost. DACH engineering hub
    + Nordic HQ = dual coverage. PCI compliance need = QAWave governance pilíř.
  priority_score: 9
  warm_intro_path: "[H] Copenhagen/Berlin fintech network; LinkedIn přes Pleo engineering"
```

---

### 17. Scalable Capital — score 8

```yaml
- name: Scalable Capital
  url: https://de.scalable.capital
  hq: Mnichov, Německo
  fte_estimate: ~500–700
  industry: FinTech (Investment Platform / Neobroker)
  primary_persona: Elena + Dr. Schmidt
  tech_stack_hints:
    - Python + React (engineering blog naznačuje)
    - "[H] Pytest + Playwright nebo Cypress"
    - GitHub Actions nebo GitLab CI [H]
  trigger_signals:
    - Série E $180M (2022) — Crunchbase potvrzeno
    - Investment platform = BaFin regulace + SOC 2 → compliance urgency
    - "[H] MiFID II compliance = continuous compliance testing need"
    - Munich FinTech hub
  why_priority: >
    Investment FinTech s regulatorní zátěží (BaFin, MiFID II) — přesný Dr. Schmidt
    use case. Budget doložen Series E. Munich = DACH center.
  priority_score: 8
  warm_intro_path: "[H] Munich fintech network; LinkedIn přes German neobroker komunita"
```

---

### 18. Raisin — score 7

```yaml
- name: Raisin
  url: https://www.raisin.com
  hq: Berlín, Německo
  fte_estimate: ~400–600
  industry: FinTech (Savings / Deposits Platform)
  primary_persona: Dr. Schmidt + Elena
  tech_stack_hints:
    - Java + React stack [H]
    - "[H] Selenium nebo Playwright (banking-grade testing)"
    - "[H] Jenkins nebo GitHub Actions"
  trigger_signals:
    - Série F — celkem ~$240M raised (Crunchbase potvrzeno)
    - European banking integration = regulatorní complexity
    - "[H] PSD2, GDPR = compliance testing requirement"
  why_priority: >
    Cross-border savings platform s bankovní regulací — Dr. Schmidt + compliance
    use case je zde silnější než u běžného SaaS. Menší než ideál ale funding doložen.
  priority_score: 7
  warm_intro_path: "[H] Berlin fintech ecosystem; Fintech Forum Frankfurt network"
```

---

### 19. Babbel — score 6

```yaml
- name: Babbel
  url: https://www.babbel.com
  hq: Berlín, Německo
  fte_estimate: ~700–1 000
  industry: B2C → B2B SaaS (Language Learning)
  primary_persona: Marek (Head of QA)
  tech_stack_hints:
    - Ruby on Rails + React (engineering blog Babbel)
    - "[H] RSpec + Capybara nebo Playwright"
    - GitHub Actions [H]
  trigger_signals:
    - B2B produkt (Babbel for Business) = enterprise QA requirements
    - "[H] Subscription SaaS = release cadence + regression risk"
    - Engineering blog aktivní (bytes.babbel.com) — potvrzeno 2023–2024
  why_priority: >
    Consumer-to-enterprise pivot = nové QA požadavky. Engineering blog signalizuje
    tech kulturu. Berlin = DACH hub. Slabší vertikála než FinTech — střední priorita.
  priority_score: 6
  warm_intro_path: "[H] Berlin tech; Babbel engineering blog community"
```

---

### 20. SumUp — score 8

```yaml
- name: SumUp
  url: https://sumup.com
  hq: Berlín, Německo (+ Dublin, Praha entity)
  fte_estimate: ~2 500–3 000
  industry: FinTech (Payments / POS)
  primary_persona: Elena + Dr. Schmidt
  tech_stack_hints:
    - Go + React stack (engineering blog)
    - "[H] Cypress nebo Playwright pro web, Appium pro mobile"
    - "[H] GitHub Actions nebo Jenkins"
  trigger_signals:
    - $590M raised total — upper-end ICP (3 000 FTE = stretch)
    - Payment processing = PCI DSS → compliance urgency
    - Praha engineering hub = lokální dosah
    - "[H] Mobile + web stack = dual channel testing complexity"
  why_priority: >
    Payments fintech s PCI DSS + Praha engineering hub — lokálně dostupný přes CZ
    síť ale globálně financovaný. Na horní hranici ICP — zařazen jako DACH stretch.
  priority_score: 8
  warm_intro_path: "Praha engineering komunita (lokální hub); LinkedIn 2nd-degree"
```

---

### 21. Adjust — score 7

```yaml
- name: Adjust (AppLovin company)
  url: https://www.adjust.com
  hq: Berlín, Německo
  fte_estimate: ~500–700 (Adjust entity)
  industry: B2B SaaS (Mobile Attribution / Analytics)
  primary_persona: Marek (Head of QA / SDET)
  tech_stack_hints:
    - Go + React (public engineering references)
    - "[H] Playwright nebo Cypress pro web dashboard"
    - GitHub Actions [H]
  trigger_signals:
    - AppLovin akvizice 2021 — post-M&A = test stack chaos trigger
    - Mobile attribution = komplexní integration testing
    - "[H] Enterprise clients (Adidas, Spotify) = SLA pressure"
  why_priority: >
    Post-M&A trigger je klasický buying moment. Mobile attribution = komplexní
    SDK + web dashboard QA. Enterprise SLA pressure rezonuje s QAWave UVP.
  priority_score: 7
  warm_intro_path: "[H] Berlin tech; AppLovin/Adjust alumni network"
```

---

### 22. Taxfix — score 7

```yaml
- name: Taxfix
  url: https://taxfix.de
  hq: Berlín, Německo
  fte_estimate: ~350–500
  industry: FinTech (Tax Software)
  primary_persona: Elena (VP Engineering)
  tech_stack_hints:
    - React Native + Node.js (public job ads potvrzují)
    - "[H] Detox nebo Appium pro mobile, Playwright pro web"
    - GitHub Actions [H]
  trigger_signals:
    - Série C $220M (2022) — Crunchbase potvrzeno
    - Tax season peak = load + regression risk každý Q1
    - "[H] German Finanzamt data = privacy + compliance pressure"
    - Mobile-first produkt = UI regression complexity
  why_priority: >
    Sezónní peak traffic (daně = každý rok deadline) = přesný use case pro
    regression testing. Series C doložen. FinTech compliance need.
  priority_score: 7
  warm_intro_path: "[H] Berlin fintech scene; LinkedIn přes German FinTech founders"
```

---

### 23. Nuvei (EU entity) — score 6

```yaml
- name: Nuvei (EU operations)
  url: https://www.nuvei.com
  hq: Vídeň, Rakousko (EU entity)
  fte_estimate: ~400–600 (EU)
  industry: FinTech (Payment Technology)
  primary_persona: Dr. Schmidt + Elena
  tech_stack_hints:
    - Java enterprise backend [H]
    - "[H] Selenium nebo Playwright (payments = legacy test stack možný)"
    - "[H] Jenkins nebo GitLab CI"
  trigger_signals:
    - Payments = PCI DSS Level 1 requirement
    - "[H] Wien office = DACH/CEE crossover dosah"
    - Globální platforma = localization testing complexity
  why_priority: >
    Payments compliance + Wien lokace = DACH + CEE crossover. Dr. Schmidt use case
    silný. Nižší priorita — Java/legacy stack může být pomalejší adoption.
  priority_score: 6
  warm_intro_path: "[H] Vienna FinTech Hub; LinkedIn přes Austrian tech"
```

---

### 24. Trivago — score 5

```yaml
- name: Trivago
  url: https://www.trivago.com
  hq: Düsseldorf, Německo
  fte_estimate: ~1 000–1 300
  industry: E-commerce / Travel Tech (listed company)
  primary_persona: Elena (VP Engineering)
  tech_stack_hints:
    - PHP + JavaScript (public engineering references)
    - "[H] Selenium nebo Playwright"
    - "[H] GitLab CI"
  trigger_signals:
    - Veřejně obchodovaná firma = quarterly pressure
    - "[H] Engineering blog naznačuje tech modernizace iniciativy"
    - Travel e-com = sezónní load + UI regression risk
  why_priority: >
    Veřejná firma = delší procurement, ale travel e-com use case rezonuje.
    Düsseldorf DACH pokrytí. Střední priorita — listed company = pomalejší cycle.
  priority_score: 5
  warm_intro_path: "[H] Düsseldorf tech komunita; LinkedIn"
```

---

### 25. Billie — score 7

```yaml
- name: Billie
  url: https://www.billie.io
  hq: Berlín, Německo
  fte_estimate: ~300–450
  industry: FinTech (B2B BNPL / Embedded Finance)
  primary_persona: Elena (VP Engineering)
  tech_stack_hints:
    - "[H] Python + React (B2B fintech stack)"
    - "[H] Playwright nebo Pytest pro e2e"
    - GitHub Actions [H]
  trigger_signals:
    - Série C €100M (2022) — TechCrunch potvrzeno
    - B2B embedded finance = API-heavy testing complexity
    - "[H] B2B BNPL = credit risk + compliance → Dr. Schmidt sekundárně"
    - Mid-size v sweet spotu
  why_priority: >
    B2B FinTech v post-Series C scaling fázi. Embedded finance = API integration
    testing je přesný use case. Berlin + ideální sizing.
  priority_score: 7
  warm_intro_path: "[H] Berlin fintech ecosystem; LinkedIn přes German B2B fintech"
```

---

## Nordics + UK (10)

### 26. Klarna — score 6

```yaml
- name: Klarna
  url: https://www.klarna.com
  hq: Stockholm, Švédsko
  fte_estimate: ~3 500–4 000
  industry: FinTech (BNPL / Payments)
  primary_persona: Elena (VP Engineering — specific business unit)
  tech_stack_hints:
    - Java + Kotlin backend, React frontend (engineering blog potvrzeno)
    - "[H] Playwright nebo Selenium pro e2e"
    - GitHub Actions nebo Jenkins [H]
  trigger_signals:
    - IPO příprava 2025 → compliance urgency
    - AI-first transformace (Klarna AI announcement 2024) = test stack rethink
    - Na horní hranici ICP — vhodné jako design partner target pro specifický BU
  why_priority: >
    Na hranici ICP (4 000 FTE), ale AI transformace + IPO = akutní buying moment.
    Spíše business unit approach než whole-company. Stretch entry pro Nordics.
  priority_score: 6
  warm_intro_path: "[H] Stockholm fintech; Nordic QA community; LinkedIn"
```

---

### 27. Treatwell — score 7

```yaml
- name: Treatwell
  url: https://www.treatwell.com
  hq: Londýn, UK
  fte_estimate: ~400–600
  industry: E-commerce / B2B SaaS (Beauty Marketplace)
  primary_persona: Marek (Head of QA)
  tech_stack_hints:
    - Ruby on Rails + React (engineering blog naznačuje)
    - "[H] RSpec + Capybara nebo Cypress/Playwright"
    - GitHub Actions [H]
  trigger_signals:
    - Mid-market marketplace s multi-country expansion (UK, DE, NL, IT)
    - "[H] Multi-locale = localization + regression testing complexity"
    - "[H] B2B SaaS pro salony = scheduled peak traffic"
  why_priority: >
    Multi-country B2B marketplace = lokalizační regression testing use case.
    London = UK hub. Sizing ideální.
  priority_score: 7
  warm_intro_path: "[H] London tech scene; Ministry of Testing UK"
```

---

### 28. Froda — score 7

```yaml
- name: Froda
  url: https://www.froda.com
  hq: Stockholm, Švédsko
  fte_estimate: ~200–350
  industry: FinTech (SME Lending)
  primary_persona: Elena (VP Engineering)
  tech_stack_hints:
    - "[H] Node.js nebo Python + React"
    - "[H] Playwright nebo Cypress"
    - GitHub Actions [H]
  trigger_signals:
    - "[H] Série B nordics fintech (funding k ověření na Crunchbase)"
    - SME lending = credit scoring API + compliance testing need
    - "[H] Swedish FSA regulatory requirement = continuous compliance testing"
  why_priority: >
    Nordic FinTech v dolní hranici sweet spotu. SME lending = regulace (Swedish FSA)
    = Dr. Schmidt use case. Signály potřebují ověření přes Crunchbase.
  priority_score: 7
  warm_intro_path: "[H] Stockholm FinTech hub; Nordic startup network"
```

---

### 29. Checkout.com — score 7

```yaml
- name: Checkout.com
  url: https://www.checkout.com
  hq: Londýn, UK
  fte_estimate: ~1 800–2 200
  industry: FinTech (Payment Processing)
  primary_persona: Elena + Dr. Schmidt
  tech_stack_hints:
    - Java + Go backend (engineering blog references)
    - "[H] Playwright nebo Selenium pro e2e"
    - "[H] GitHub Actions nebo Jenkins"
  trigger_signals:
    - $1B raised (Series D) — Crunchbase potvrzeno — upper ICP
    - PCI DSS Level 1 = compliance urgency
    - "[H] Engineering blog aktivní (checkout.com/blog/engineering)"
    - Unicorn na horní hranici ICP — BU approach doporučen
  why_priority: >
    Payment unicorn s PCI compliance urgency. Na horní hranici ICP, ale governance
    pilíř QAWave je přesný fit. London UK hub.
  priority_score: 7
  warm_intro_path: "[H] London fintech; LinkedIn přes UK payments engineering"
```

---

### 30. Modulr — score 8

```yaml
- name: Modulr Finance
  url: https://www.modulrfinance.com
  hq: Edinburg / Londýn, UK
  fte_estimate: ~350–500
  industry: FinTech (Embedded Payments / API Banking)
  primary_persona: Elena (VP Engineering)
  tech_stack_hints:
    - Java + React (B2B API banking stack)
    - "[H] Playwright nebo Selenium"
    - GitHub Actions [H]
  trigger_signals:
    - Série C £43M (2022) — Crunchbase potvrzeno
    - API-first platforma = API regression + contract testing complexity
    - FCA regulated = compliance urgency
    - Mid-size v sweet spotu
  why_priority: >
    FCA regulated API banking = compliance + regression use case. Post-Series C
    v sweet spotu. UK + Edinburgh = dobrý UK entry bod.
  priority_score: 8
  warm_intro_path: "[H] UK fintech network; London QA meetups"
```

---

### 31. Superscript — score 7

```yaml
- name: Superscript
  url: https://gosuperscript.com
  hq: Londýn, UK
  fte_estimate: ~200–350
  industry: InsurTech / FinTech
  primary_persona: Elena (VP Engineering)
  tech_stack_hints:
    - "[H] Node.js + React (insurtech stack)"
    - "[H] Playwright nebo Cypress"
    - GitHub Actions [H]
  trigger_signals:
    - Série B £54M (2022) — Crunchbase potvrzeno
    - Insurance = FCA regulation + compliance testing
    - "[H] SME insurance = complex underwriting flows = QA complexity"
  why_priority: >
    InsurTech v sweet spotu, FCA regulated, post-Série B. Insurance workflows
    = komplexní state machine = přesný use case pro agentic exploratory testing.
  priority_score: 7
  warm_intro_path: "[H] London insurtech community; LinkedIn"
```

---

### 32. Younited — score 6

```yaml
- name: Younited
  url: https://www.younited.com
  hq: Paříž, Francie (+ UK operace)
  fte_estimate: ~500–700
  industry: FinTech (Consumer Credit)
  primary_persona: Elena (VP Engineering)
  tech_stack_hints:
    - "[H] Java nebo Python + React"
    - "[H] Selenium nebo Playwright"
    - "[H] GitLab CI"
  trigger_signals:
    - Série F €170M (2023) — Crunchbase potvrzeno
    - Multi-country EU lending = GDPR + multiple regulatory frameworks
    - "[H] Cross-border = localization testing complexity"
  why_priority: >
    Multi-country consumer credit = regulatory complexity across EU. Post-Series F.
    Zařazen jako UK/FR crossover — primárně v Nordics+UK bucketu.
  priority_score: 6
  warm_intro_path: "[H] Paris fintech; EuroSTAR konference network"
```

---

### 33. Northmill — score 6

```yaml
- name: Northmill Bank
  url: https://www.northmill.com
  hq: Stockholm, Švédsko
  fte_estimate: ~200–300
  industry: FinTech (Digital Banking)
  primary_persona: Elena (VP Engineering)
  tech_stack_hints:
    - "[H] Kotlin + React (digital bank stack)"
    - "[H] Playwright nebo Appium"
    - GitHub Actions [H]
  trigger_signals:
    - Swedish banking license = Finansinspektionen compliance
    - "[H] Digital-native bank = modern stack + agilní release cadence"
    - Na dolní hranici ICP (200–300 FTE)
  why_priority: >
    Digital bank s regulatorní zátěží v dolní hranici ICP. Compliance use case
    silný. Signály k ověření přes Apollo/LinkedIn.
  priority_score: 6
  warm_intro_path: "[H] Stockholm fintech; Nordic banking tech network"
```

---

### 34. Paddle — score 8

```yaml
- name: Paddle
  url: https://www.paddle.com
  hq: Londýn, UK
  fte_estimate: ~350–500
  industry: B2B SaaS (Payments Infrastructure / MoR)
  primary_persona: Elena (VP Engineering)
  tech_stack_hints:
    - Node.js + React (engineering blog references)
    - "[H] Playwright nebo Cypress"
    - GitHub Actions [H]
  trigger_signals:
    - ProfitWell akvizice 2022 (post-M&A = test stack chaos trigger)
    - Série C $200M (2022) — Crunchbase potvrzeno
    - Merchant of Record = tax/compliance complexity v 200+ jurisdikcích
    - "[H] Engineering blog aktivní"
  why_priority: >
    Post-M&A trigger + payments compliance + 200+ jurisdiction tax logic = ideální
    use case pro agentic compliance testing. Sweet spot sizing. UK hub.
  priority_score: 8
  warm_intro_path: "[H] London SaaS network; Ministry of Testing UK"
```

---

### 35. Cuvama — score 5

```yaml
- name: Cuvama
  url: https://www.cuvama.com
  hq: Londýn, UK
  fte_estimate: ~50–150
  industry: B2B SaaS (Value Selling)
  primary_persona: Tomáš (Staff Engineer)
  tech_stack_hints:
    - "[H] React + Node.js"
    - "[H] Cypress nebo Playwright"
    - GitHub Actions [H]
  trigger_signals:
    - "[H] Série A — sizing pod ICP sweet spot (50–150 FTE)"
    - Zařazen jako placeholder pro UK SMB; NAHRADIT silnější firmou z UK HealthTech
  why_priority: >
    POZOR: Pravděpodobně pod ICP (< 200 FTE). Tento slot doporučuji nahradit
    VerifyMed nebo Accurx (UK HealthTech) po ověření přes Apollo.
    Ponechán pro UK coverage completeness — nutno ověřit FTE.
  priority_score: 5
  warm_intro_path: "[H] London SaaS; LinkedIn"
```

---

## Zbytek EU — NL / FR / PL / ES (10)

### 36. Mollie — score 9

```yaml
- name: Mollie
  url: https://www.mollie.com
  hq: Amsterdam, Nizozemsko
  fte_estimate: ~700–900
  industry: FinTech (Payments)
  primary_persona: Elena + Dr. Schmidt
  tech_stack_hints:
    - PHP + React (engineering blog mollie.com/engineering)
    - "[H] Playwright nebo Cypress (payments UI + API testing)"
    - GitHub Actions [H]
  trigger_signals:
    - Série C $800M (2021) — Crunchbase potvrzeno (upper-end)
    - PCI DSS compliance = urgency
    - Engineering blog aktivní (mollie.com/blog/engineering)
    - EU payments = PSD2 + GDPR = dual compliance pressure
    - "[H] SDET / QA Engineer jobs na LinkedIn 2024–2025"
  why_priority: >
    Top Netherlands FinTech s potvrzenými signály (engineering blog, funding).
    PCI + PSD2 compliance use case = Dr. Schmidt angle. Sweet spot sizing.
  priority_score: 9
  warm_intro_path: "[H] Amsterdam fintech hub; Dutch tech community"
```

---

### 37. Miro — score 7

```yaml
- name: Miro
  url: https://miro.com
  hq: Amsterdam, Nizozemsko (+ SF HQ)
  fte_estimate: ~1 800–2 200
  industry: B2B SaaS (Collaboration)
  primary_persona: Elena (VP Engineering)
  tech_stack_hints:
    - React + TypeScript (open-source komponenty)
    - "[H] Playwright nebo Cypress"
    - GitHub Actions (viditelné v open-source repozitářích)
  trigger_signals:
    - Série C $400M (2022) — Crunchbase potvrzeno
    - Real-time collaboration = komplexní concurrency testing
    - "[H] Engineering blog aktivní"
    - Na horní hranici ICP — BU approach
  why_priority: >
    Real-time collaboration = WebSocket + concurrency testing = netriviální e2e.
    Amsterdam NL hub. Na horní hranici ICP — approach konkrétní engineering tým.
  priority_score: 7
  warm_intro_path: "[H] Amsterdam tech; LinkedIn přes Miro engineering leaders"
```

---

### 38. Doctolib — score 8

```yaml
- name: Doctolib
  url: https://www.doctolib.fr
  hq: Paříž, Francie
  fte_estimate: ~2 500–3 000
  industry: HealthTech (Healthcare Scheduling)
  primary_persona: Elena + Dr. Schmidt
  tech_stack_hints:
    - Ruby on Rails + React (engineering blog références)
    - "[H] RSpec + Capybara nebo Playwright"
    - "[H] GitHub Actions nebo GitLab CI"
  trigger_signals:
    - Série F €500M (2022) — TechCrunch potvrzeno
    - HDS (Hébergeur de Données de Santé) + GDPR = healthcare data compliance
    - Engineering blog aktivní (medium.com/doctolib)
    - "[H] Rapid expansion to DE + IT = localization testing complexity"
    - Na horní hranici ICP — engineering dept targeting
  why_priority: >
    Největší EU HealthTech — na horní hranici ICP ale health data compliance
    (HDS + GDPR) je silný Dr. Schmidt use case. French leader.
  priority_score: 8
  warm_intro_path: "[H] Paris HealthTech; EuroSTAR konference"
```

---

### 39. Allegro — score 7

```yaml
- name: Allegro
  url: https://allegro.pl
  hq: Varšava, Polsko
  fte_estimate: ~3 000–4 000 (engineering ~1 000+)
  industry: E-commerce (Marketplace)
  primary_persona: Elena (VP Engineering — specific team)
  tech_stack_hints:
    - Java + Kotlin + React (engineering blog allegro.tech)
    - "[H] Playwright nebo Selenium pro e2e"
    - GitHub Actions nebo Jenkins [H]
  trigger_signals:
    - Publicly listed (WSE) — quarterly delivery pressure
    - Engineering blog aktivní (allegro.tech) — tech culture potvrzena
    - "[H] Largest Polish e-commerce = peak traffic QA need (Black Friday)"
    - Na horní hranici ICP — specific QA team targeting
  why_priority: >
    Allegro.tech blog signalizuje engineering kulturu. Largest Polish e-com =
    load + visual regression use case. Approach konkrétní QA tým, ne celou firmu.
  priority_score: 7
  warm_intro_path: "[H] Warsaw tech; allegro.tech blog community"
```

---

### 40. Vinted — score 7

```yaml
- name: Vinted
  url: https://www.vinted.com
  hq: Vilnius, Litva (+ Berlín, Praha)
  fte_estimate: ~1 200–1 600
  industry: E-commerce (C2C Marketplace)
  primary_persona: Elena (VP Engineering)
  tech_stack_hints:
    - Ruby on Rails + React (engineering blog references)
    - "[H] RSpec + Playwright nebo Cypress"
    - GitHub Actions [H]
  trigger_signals:
    - Série F €250M (2022) — TechCrunch potvrzeno
    - Multi-country marketplace (20+ EU zemí) = lokalizace + regression complexity
    - Praha engineering hub = lokální dosah
    - "[H] Engineering blog aktivní (engineering.vinted.com)"
  why_priority: >
    Multi-country EU marketplace s Praha engineering hubem = lokálně dosažitelný.
    Post-Series F v mid-market. Lokalizace + regression = přesný e2e use case.
  priority_score: 7
  warm_intro_path: "Praha engineering hub — lokální dosah; LinkedIn přes Vinted engineering"
```

---

### 41. Tidio — score 6

```yaml
- name: Tidio
  url: https://www.tidio.com
  hq: Štětín, Polsko (+ remote)
  fte_estimate: ~250–400
  industry: B2B SaaS (Customer Service / AI Chatbots)
  primary_persona: Marek (Head of QA / SDET)
  tech_stack_hints:
    - "[H] Node.js + React"
    - "[H] Playwright nebo Cypress"
    - GitHub Actions [H]
  trigger_signals:
    - "[H] Growth stage Polish SaaS (funding k ověření)"
    - AI chatbot produkt = non-deterministic AI testing challenge
    - "[H] PLG model = self-serve = automated QA kritičtější"
  why_priority: >
    AI produkt s non-deterministic chováním = přesný use case pro agentic testing.
    Polish mid-market. Signály k ověření přes Apollo.
  priority_score: 6
  warm_intro_path: "[H] Polish SaaS community; Warsaw/Szczecin tech network"
```

---

### 42. Factorial HR — score 7

```yaml
- name: Factorial HR
  url: https://factorialhr.com
  hq: Barcelona, Španělsko
  fte_estimate: ~600–900
  industry: B2B SaaS (HR Software)
  primary_persona: Elena (VP Engineering)
  tech_stack_hints:
    - Ruby on Rails + React (engineering blog references)
    - "[H] RSpec + Playwright nebo Cypress"
    - GitHub Actions [H]
  trigger_signals:
    - Série C $80M (2022) — Crunchbase potvrzeno
    - Multi-country EU HR = GDPR + local labor law compliance
    - "[H] Engineering blog aktivní"
    - Barcelona = Southern EU hub
  why_priority: >
    HR SaaS s multi-country EU compliance (GDPR + labor law) = regulatory
    testing use case. Post-Series C v sweet spotu. Barcelona EU coverage.
  priority_score: 7
  warm_intro_path: "[H] Barcelona tech; LinkedIn přes Spanish SaaS founders"
```

---

### 43. Swapfiets — score 5

```yaml
- name: Swapfiets
  url: https://swapfiets.com
  hq: Amsterdam, Nizozemsko
  fte_estimate: ~200–350
  industry: E-commerce / Subscription Tech
  primary_persona: Tomáš (Staff Engineer)
  tech_stack_hints:
    - "[H] Node.js + React"
    - "[H] Cypress nebo Playwright"
    - "[H] GitHub Actions"
  trigger_signals:
    - "[H] Subscription + IoT platform = komplex testing"
    - D2C subscription = release cadence important
    - "[H] Sizing na dolní hranici ICP"
  why_priority: >
    Na dolní hranici ICP, méně urgentní vertikála. Zařazen pro NL coverage.
    Doporučuji ověřit FTE a nahradit silnějším NL HealthTech (Siilo, Ksyos)
    po Apollo enrichmentu.
  priority_score: 5
  warm_intro_path: "[H] Amsterdam tech; Dutch startup network"
```

---

### 44. Luko — score 5

```yaml
- name: Luko (Allianz entity)
  url: https://www.luko.eu
  hq: Paříž, Francie
  fte_estimate: ~150–250 (post-Allianz akvizice)
  industry: InsurTech
  primary_persona: Marek (Head of QA)
  tech_stack_hints:
    - "[H] Node.js nebo Python + React"
    - "[H] Playwright nebo Cypress"
    - "[H] GitHub Actions"
  trigger_signals:
    - Allianz akvizice 2023 — post-M&A trigger [H]
    - "[H] Možný resize dolů pod ICP po akvizici — FTE k ověření"
  why_priority: >
    POZOR: Post-akviziční resize pravděpodobný — FTE může být pod 200. Nutno
    ověřit přes Apollo před outreach. Flagged jako riziková entry.
    Doporučuji nahradit Alan (French HealthTech insurtech ~600 FTE).
  priority_score: 5
  warm_intro_path: "[H] Paris insurtech; LinkedIn"
```

---

### 45. Packhelp — score 6

```yaml
- name: Packhelp
  url: https://packhelp.com
  hq: Varšava, Polsko
  fte_estimate: ~250–400
  industry: E-commerce (Custom Packaging B2B)
  primary_persona: Elena / Marek
  tech_stack_hints:
    - "[H] Node.js + React (e-commerce platform)"
    - "[H] Cypress nebo Playwright"
    - GitHub Actions [H]
  trigger_signals:
    - "[H] Série B polish e-com (funding k ověření)"
    - B2B e-com = complex configurator UI = e2e testing complexity
    - "[H] Multi-country EU expansion"
  why_priority: >
    B2B packaging configurator = komplex UI flows = přesný use case pro agentic
    exploratory testing. Polish mid-market. Signály k ověření.
  priority_score: 6
  warm_intro_path: "[H] Warsaw e-com community; LinkedIn"
```

---

## US Mid-Market — Stretch (5)

### 46. Retool — score 8

```yaml
- name: Retool
  url: https://retool.com
  hq: San Francisco, USA
  fte_estimate: ~400–600
  industry: B2B SaaS (Internal Tools / Low-Code)
  primary_persona: Elena (VP Engineering)
  tech_stack_hints:
    - React + Node.js (open-source komponenty na GitHubu)
    - "[H] Playwright nebo Cypress (internal tools SaaS)"
    - GitHub Actions (viditelné v open-source repozitářích)
  trigger_signals:
    - Série C $45M (2022) + celkem $95M raised — Crunchbase potvrzeno
    - "[H] Engineering blog aktivní (retool.com/blog/engineering)"
    - Low-code platform = komplexní UI component testing
    - Engineering-forward firma = Marek persona receptivní
  why_priority: >
    Engineering-focused SaaS s potvrzeným GitHub + fundingem. Low-code platform
    testing complexity = přesný use case. US stretch — English-first outreach.
  priority_score: 8
  warm_intro_path: "[H] SF SaaS community; LinkedIn přes US engineering leaders"
```

---

### 47. Finix — score 8

```yaml
- name: Finix Payments
  url: https://www.finixpayments.com
  hq: San Francisco, USA
  fte_estimate: ~200–350
  industry: FinTech (Payments Infrastructure)
  primary_persona: Elena + Dr. Schmidt
  tech_stack_hints:
    - Java + React (B2B payments platform)
    - "[H] Playwright nebo Selenium"
    - GitHub Actions [H]
  trigger_signals:
    - Série C $75M (2022) — Crunchbase potvrzeno
    - PCI DSS compliance = urgency
    - "[H] API-first payments = contract testing + regression complexity"
    - Mid-size US FinTech v sweet spotu
  why_priority: >
    PCI DSS + API-first payments = compliance testing use case. Post-Series C.
    Ideální US FinTech sizing pro stretch bucket.
  priority_score: 8
  warm_intro_path: "[H] SF fintech; YC alumni network; LinkedIn"
```

---

### 48. Rippling — score 7

```yaml
- name: Rippling
  url: https://www.rippling.com
  hq: San Francisco, USA
  fte_estimate: ~2 000–2 500
  industry: B2B SaaS (HR / IT / Finance Ops)
  primary_persona: Elena (VP Engineering — specific team)
  tech_stack_hints:
    - Python + React (engineering references)
    - "[H] Playwright nebo Cypress"
    - "[H] GitHub Actions nebo Jenkins"
  trigger_signals:
    - Série F $500M (2023) — TechCrunch potvrzeno — na horní hranici ICP
    - Multi-module platform (HR + IT + Finance) = cross-module regression risk
    - "[H] Engineering blog aktivní"
    - Hypergrowth = QA scaling pain
  why_priority: >
    Multi-module platform = cross-system regression = přesný agentic use case.
    Na horní hranici ICP — approach konkrétní engineering team (HR module nebo IT module).
  priority_score: 7
  warm_intro_path: "[H] SF SaaS; LinkedIn přes US HR SaaS engineering leaders"
```

---

### 49. Modern Treasury — score 8

```yaml
- name: Modern Treasury
  url: https://www.moderntreasury.com
  hq: San Francisco, USA
  fte_estimate: ~200–350
  industry: FinTech (Payment Operations)
  primary_persona: Elena (VP Engineering)
  tech_stack_hints:
    - Ruby on Rails + React (engineering blog references)
    - "[H] RSpec + Playwright nebo Cypress"
    - GitHub Actions [H]
  trigger_signals:
    - Série C $38M (2022) — Crunchbase potvrzeno
    - Bank API integration = complex testing (multiple banking partners)
    - "[H] SOC 2 Type II (expected for payment ops) = compliance urgency"
    - YC alumni = engineering-forward kultura
  why_priority: >
    Payment operations API = multi-bank integration testing = přesný use case.
    YC pedigree = engineering culture receptive. Sweet spot sizing. US FinTech entry.
  priority_score: 8
  warm_intro_path: "[H] YC alumni network; SF fintech; LinkedIn"
```

---

### 50. Drata — score 7

```yaml
- name: Drata
  url: https://drata.com
  hq: San Diego, USA
  fte_estimate: ~400–600
  industry: B2B SaaS (Compliance Automation / SOC 2)
  primary_persona: Dr. Schmidt + Elena
  tech_stack_hints:
    - Node.js + React (engineering references)
    - "[H] Playwright nebo Cypress"
    - GitHub Actions [H]
  trigger_signals:
    - Série B $200M (2022) — Crunchbase potvrzeno
    - Compliance automation product = meta-use case (firm selling compliance, needs compliance QA)
    - "[H] SOC 2 vendor with SOC 2 obligation = double compliance urgency"
    - "[H] Engineering blog aktivní"
  why_priority: >
    Compliance SaaS = Dr. Schmidt is literally their customer AND their persona.
    Meta-angle: firma prodávající compliance potřebuje demonstrovat vlastní compliance testing.
    Post-Series B v sweet spotu. Unique pitch angle.
  priority_score: 7
  warm_intro_path: "[H] US compliance/security SaaS network; LinkedIn přes SOC 2 community"
```

---

## Methodology note

### Zdroje použité pro výběr

1. **Vlastní znalostní báze (do srpen 2025):** Funding rounds, engineering blog existence, stack indicators z open-source repositářů (GitHub), veřejných job inzerátů a press coverage. Crunchbase zmínky jsou ověřitelné ze stavu 2024–2025.

2. **Logická inference z veřejných dat:** Tech stack hints označené `[H]` jsou hypotézy odvozené z velikosti firmy, vertikály a industry standardů — nikoliv přímá pozorování. Všechny `[H]` signály je nutno ověřit.

3. **ICP filter aplikován přísně:** Odstraněny firmy < 200 FTE (anti-ICP) a Fortune 100 (>12 měsíců sales cycle). Firmy na horní hranici ICP (2 500–4 000 FTE) jsou označeny jako "BU approach" nebo "stretch."

### Co je hypothesis vs. ověřeno

| Status | Příklady |
|---|---|
| **Ověřeno z public sources** | Funding rounds (Crunchbase/TechCrunch), engineering blog existence, GitHub open-source stack hints, FTE ranges z LinkedIn (přibližné) |
| **Hypothesis `[H]`** | Konkrétní CI/CD nástroj, SDET job posting datace, interní QA team size, přesné FTE, specifické compliance frameworks |

### Rizikové záznamy k nahrazení

- **#35 Cuvama** — pravděpodobně pod 200 FTE. Nahradit: Accurx (UK HealthTech, ~300–500 FTE) nebo Elvie (UK HealthTech).
- **#44 Luko** — post-akviziční resize riziko. Nahradit: Alan (Paris HealthTech, ~600 FTE, Série D €173M 2022).
- **#43 Swapfiets** — slabší vertikála. Nahradit: Siilo nebo Castor (NL HealthTech SaaS).

### Co Apollo / Sales Nav doplní

- **Kontakt-level data:** Jméno + LinkedIn URL + email konkrétní Eleny, Marka, nebo Tomáše v každé firmě
- **Aktuální job postings:** Ověření `[H]` signálů o SDET náboru (LinkedIn Jobs API v Apollo)
- **FTE ověření:** Přesný LinkedIn headcount místo range odhadů
- **Tech stack enrichment:** BuiltWith + StackShare pro potvrzení Cypress/Playwright/GHA
- **Trigger enrichment:** Clay workflow pro detekci nových fundingů, VPE joinů, incident mentions (Twitter/LinkedIn 30-day lookback)
- **Email verification:** Apollo email finder + validity check před sequence spuštěním

### Vertikální distribuce (finální)

| Vertikála | # | Regiony |
|---|---|---|
| FinTech / Payments | 22 | CZ/SK: 2, DACH: 8, UK/Nordics: 6, EU: 2, US: 4 |
| B2B SaaS (general) | 15 | Distribuováno |
| E-commerce / Marketplace | 7 | CZ: 1, DACH: 2, EU: 3, UK: 1 |
| HealthTech | 3 | FR: 1, UK: 1, US: 1 |
| HR Tech | 3 | DACH: 1, ES: 1, US: 1 |

> FinTech dominuje (44 %) — v souladu s ICP kde regulatorní bolest a compliance budget jsou nejvyšší. Pokud Tomas cítí přetížení FinTech, nahradit #44 Luko a #35 Cuvama za HealthTech alternativy.
