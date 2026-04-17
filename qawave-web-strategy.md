# Webová strategie qawave.ai

> **Positioning:** "The Edge of QA Automation"
> **Cílová skupina:** Senior QA Engineers, QA Manažeři, CTO
> **Verze:** 1.0 | Duben 2026

---

## 1. Brand Positioning — "The Edge of QA Automation"

### 1.1 Positioning Statement

| | |
|---|---|
| **Pro** | Senior QA Engineers, QA Manažery a CTO v mid-to-enterprise SaaS firmách |
| **Kteří** | stojí před realitou, že jejich týmy uvízly na ~25% pokrytí automatizovanými testy, zatímco AI-generovaný kód (Copilot, Cursor) zrychluje vývoj rychleji, než QA stíhá reagovat |
| **qawave.ai** | poskytuje agentní, autonomní QA — AI agent, který samostatně chápe systém, navrhuje testovací strategie, executuje, analyzuje selhání a adaptuje se bez čekání na lidskou instrukci v každém kroku |
| **Na rozdíl od** | scriptových nástrojů (Selenium, Cypress, Playwright), které stagnují na částečném pokrytí, nebo managed služeb (QA Wolf), které vyměňují vaši autonomii za vendor dependency |
| **Náš produkt** | dává organizaci pozici na hraně quality engineeringu, kde AI agenti zvládají až 40% QA workloadu autonomně (v souladu s predikcí Gartner pro 2026) |

### 1.2 Tón komunikace

| Osa | Přístup |
|---|---|
| **Autoritativní, ne akademický** | Mluvíme jako peer k senior inženýrům. Přesný technický jazyk bez "jargon theatre". Žádné dumbing down. |
| **Vizionářský, ne hype-driven** | Každý claim je podpořen konkrétní schopností nebo datovým bodem. "The Edge" znamená demonstrovatelná inovace, ne vaporware. |
| **Sebevědomý, ne dismissive** | Uznáváme reálnou hodnotu existujících nástrojů. Jasně artikulujeme, proč se trh fundamentálně posunul. |
| **Evropská přímočarost** | Substance a důkazy, ne Silicon Valley marketing speak. Naše audience reaguje na proof, ne na slogany. |

**Příklady tónu:**

- **ANO:** "Agentní AI autonomně exploruje vaši aplikaci a identifikuje testovací cesty, které by lidský tester nepředvídal. V pilotních projektech to znamenalo nárůst pokrytí z 28% na 74% za 6 týdnů."
- **NE:** "Revoluční AI-powered platforma, která transformuje budoucnost testování pomocí cutting-edge technologií nové generace!"

### 1.3 Competitive Differentiation Matrix

| Dimenze | Traditional (Selenium/Cypress/Playwright) | Managed Service (QA Wolf) | Low-Code Platform (Katalon/Rainforest) | **qawave.ai** |
|---|---|---|---|---|
| **Tvorba testů** | Manuální scripting | AI-generované, lidmi spravované | Low-code/no-code wizards | **Agentní autonomní generace** |
| **Údržba** | Manuální, vysoký tech debt | Outsourcovaná na vendora | Self-healing (částečný — selektory) | **Autonomní adaptace na úrovni záměru** |
| **Strop pokrytí** | ~25% (industry plateau) | Vyšší, ale vendor-dependent | Střední | **Průlomové pokrytí přes exploraci** |
| **Model kontroly** | Plná kontrola, plná zátěž | Vendor dependency | Platform lock-in | **AI autonomie s lidskou governance** |
| **Cílový uživatel** | Vývojáři | Týmy chtějící outsource QA | Business users / hybrid | **Senior inženýři hledající leverage, ne náhradu** |
| **Transparentnost** | Plná (vy píšete kód) | Nízká (vendor black box) | Střední | **Plná — audit trail každého AI rozhodnutí** |
| **Vendor lock-in** | Žádný (open-source) | Vysoký | Střední-vysoký | **Nízký — export testů, standardní formáty** |

**Klíčový strategický insight:**

Současný trh se dělí na dvě pozice:
1. **"Vy píšete skripty"** (tradiční nástroje) — plná kontrola, ale plná zátěž
2. **"My to vyřešíme za vás"** (managed služby) — méně práce, ale ztráta kontroly

qawave.ai obsazuje **třetí pozici: "AI, které pracuje po boku vašich senior inženýrů — amplifikuje jejich expertízu místo nahrazení jejich úsudku."** Toto je kritické, protože cílová audience (Senior QA Engineers, CTO) se obává jak complexity nástrojů, tak ztráty kontroly.

---

## 2. Tři pilíře UVP (Unique Value Proposition)

### Pilíř 1: Autonomous Discovery

> **"Your AI finds what your scripts miss."**
> *Vaše AI najde to, co vaše skripty minuly.*

**Bolest, kterou řešíme:**

Senior inženýři tráví 30% času debugováním auto-generovaných testů, které se rozbijí s každým deployem. Celé odvětví uvízlo na 25% pokrytí automatizovanými testy, protože scriptové přístupy dokáží testovat pouze to, co lidé předvídají. AI-generovaný kód (z Copilot, Cursor) vzniká rychleji, než týmy stíhají psát testy — gap se rozšiřuje každý sprint.

**Co děláme jinak:**

Tradiční nástroje testují předem definované cesty. Dokonce i "AI-assisted" nástroje jen pomáhají psát skripty rychleji — neexplorují autonomně aplikaci, aby objevily netestované cesty a edge cases. qawave.ai agent:

1. **Autonomně mapuje** aplikaci — rozumí struktuře, flows a stavům
2. **Identifikuje** netestované cesty, edge cases a regresní rizika
3. **Generuje** testy na základě porozumění systému, ne na základě předpisu
4. **Prioritizuje** testování podle reálného rizika, ne podle pokrytí řádků kódu

**Proof points k rozvoji:**
- Nárůst pokrytí v % (cíl: z ~25% na 70%+ v pilotních projektech)
- Počet edge cases objevených AI, které human-written testy minuly
- Time-to-first-test metriky (minuty vs. hodiny)

**Mapování na web:**
- **Homepage Hero** — primární value proposition, vizuální srovnání "before/after" pokrytí
- **Dedikovaná stránka `/how-it-works`** — technický deep-dive s interaktivní demo vizualizací explorace

---

### Pilíř 2: Intelligent Maintenance

> **"Tests that evolve with your product, not against it."**
> *Testy, které se vyvíjejí s vaším produktem, ne proti němu.*

**Bolest, kterou řešíme:**

Test automation debt je tichý zabiják rozpočtu. Organizace rozpočtující 140–180K EUR na QA reálně utrácejí 900K–1M EUR, když započítají skryté náklady údržby křehkých test suites. Každá UI změna, každý refactoring, každý feature flag spouští kaskádu test failures vyžadujících čas senior inženýrů na triage.

Typický scénář: Dev tým oznámí major UI refactor v pátek. QA Manager odhadne 2-3 dny updatu testů. Release bude odložen nebo under-tested. Tohle se opakuje každý sprint.

**Co děláme jinak:**

"Self-healing" je buzzword, které claimuje každý konkurent. Většina tím myslí: "updatujeme CSS selektor, když se element posune." To není údržba — to je záplata.

Skutečná inteligentní údržba znamená:
1. **Pochopení záměru** testu — ne syntaxe, ale co test ověřuje
2. **Adaptace celé strategie** při změně produktu — ne jen patching locatorů
3. **Proaktivní identifikace** testů ohrožených plánovaným deployem
4. **Automatická aktualizace** s lidskou review před commitnutím

**Proof points k rozvoji:**
- Redukce času na údržbu testů (cíl: -60% až -80%)
- Snížení false-positive rate
- Mean time to adapt po deploymentu (minuty vs. dny)

**Mapování na web:**
- **Stránka "Proč přejít" (`/platform/intelligent-maintenance`)** — kvantifikace reálných nákladů údržby
- **Interaktivní ROI kalkulačka (`/resources/roi-calculator`)** — lead generation tool, kde Michal zadá velikost týmu, aktuální coverage a salary costs

---

### Pilíř 3: Engineering-Grade Governance

> **"AI power. Human authority. Full audit trail."**
> *AI síla. Lidská autorita. Plný audit trail.*

**Bolest, kterou řešíme:**

CTO a senior inženýři nepřijmou nástroj, kde AI dělá netransparentní rozhodnutí o tom, co testovat a co přeskočit. V regulovaných odvětvích (fintech, healthcare, automotive) musí být každé testovací rozhodnutí auditovatelné. Ale i mimo regulované industry — "quality tax" reality 2026 znamená, že QA musí být u stolu, když se dělají architektonická rozhodnutí.

**Co děláme jinak:**

Managed služby jako QA Wolf odebírají governance inženýrskému týmu. Autonomní nástroje jiných vendorů operují jako black boxy. Žádný konkurent silně nepozicoval **governance + autonomii dohromady**. qawave.ai nabízí:

1. **Plný audit trail** — každé AI rozhodnutí je zaznamenané a zdůvodněné
2. **Human-in-the-loop governance** — AI navrhuje, člověk schvaluje strategické změny
3. **Role-based access controls** — kdo může schválit, kdo může přepsat AI rozhodnutí
4. **Compliance-ready reporting** — SOC 2, ISO 27001 aligned výstupy
5. **Decision transparency dashboard** — vizualizace toho, co AI testovalo, proč, a co vynechalo

**Proof points k rozvoji:**
- Audit trail capabilities a ukázky
- Compliance framework alignment dokumentace
- Ukázky governance dashboardu

**Mapování na web:**
- **Enterprise stránka (`/enterprise`)** — CTO-facing content, security, compliance, governance
- **Trust & Security sekce** — certifikace, penetrační testy, data handling policy
- Toto je pilíř, který dostane qawave.ai přes CISO a do procurement procesu.

---

## 3. Persona — QA Manažer Michal

### 3.1 Profil

| | |
|---|---|
| **Jméno** | Michal Novák |
| **Věk** | 37 let |
| **Lokace** | Praha, Česká republika |
| **Titul** | QA Manager / Senior QA Lead |
| **Firma** | Mid-size SaaS firma, 150–400 zaměstnanců, B2B produkt (fintech platforma) |
| **Tým** | Řídí 4–8 QA inženýrů (mix manuální a automatizace) |
| **Reportuje** | VP of Engineering / CTO |
| **Vzdělání** | Ing. (MSc) Informatika, ČVUT FIT |
| **Zkušenosti** | 10+ let v QA — začínal jako manuální tester, vyrostl do automatizace, nyní management |

### 3.2 Kontext firmy

- Firma škáluje: 2–3 produktové linie, rostoucí dev tým, tlak na rychlejší shipping
- Aktuální test stack: mix Cypress (frontend), experimenty s Playwright, legacy Selenium, manuální testování pro komplexní workflows
- CI/CD pipeline existuje, ale test coverage je bottleneck — deploymenty zdržovány flaky testy
- Dev tým nedávno adoptoval AI coding assistants (Copilot/Cursor) — code velocity vzrostla ~40%, ale QA throughput nedržel krok
- Roční QA tooling budget: 50–150K EUR, ale Michal musí udělat business case pro schválení

### 3.3 Cíle

1. **Zvýšit pokrytí** z aktuálních ~30% na 70%+ bez proporcionálního nárůstu headcountu
2. **Snížit maintenance overhead** — senior inženýři aktuálně tráví ~30% času údržbou testů
3. **Prokázat CTO**, že QA je strategická funkce, ne cost center
4. **Zůstat osobně relevantní** — obává se, že se stane "legacy QA manažerem" v éře AI
5. **Budovat QA praxi**, která přitáhne a udrží talent (konkurence s Avast, JetBrains, Productboard na českém trhu)

### 3.4 Frustrace

1. **Rozšiřující se gap:** Tým píše testy pomaleji, než devs shipují features — gap se zvětšuje každý sprint
2. **Self-healing zklamání:** "Self-healing" nástroje, které evaluoval dříve, byly marketing hype — jen updatovaly selektory
3. **Tlak managementu:** "Proč potřebujeme víc QA lidí, když máme automatizaci?" — otázka, na kterou nemá dobrou odpověď
4. **Informační přetížení:** Slyšel o agentním AI na konferenci, ale neví, jak evaluovat claims vendorů — každý tvrdí, že má "AI-powered" řešení
5. **Demo vs. realita:** Vendor dema vypadají impresivně, ale byl spálen nástroji, které nefungují na reálné, komplexní aplikaci (multi-tenant, dynamické UI, complex state management)

### 3.5 Rozhodovací kritéria

| Priorita | Kritérium | Co Michal hledá |
|---|---|---|
| 1 | **Funguje to na našem codebase?** | Proof-of-concept na jeho reálném produktu, ne na toy demo app |
| 2 | **Transparentnost AI** | Může jeho tým pochopit, co AI rozhodlo? Netransparentní AI = non-starter |
| 3 | **Integrace s existujícím stackem** | GitHub Actions/GitLab CI, stávající test suites, reporting tools — ne rip-and-replace |
| 4 | **TCO za 3 roky** | Ne jen cena licence, ale implementation time, training, ongoing maintenance, vendor dependency risk |
| 5 | **Exit strategie** | Co se stane, když přestaneme používat? Data portability, test export, žádný lock-in |

### 3.6 Den v životě Michala (scénář)

**7:45 — Ráno, review CI/CD výsledků**
Michal otevře Slack. Noční CI/CD pipeline reportuje: 12 z 340 testů selhalo. Projde failures — 8 jsou flaky (false positives z UI timing issues), 2 jsou reálné regrese, 2 neidentifikované. Assignuje dva inženýry na triage. Je to třetí den v týdnu, kdy to řeší.

**10:00 — Standup**
Dev tým oznámí major UI refactor, shipping ve čtvrtek. Michal v hlavě počítá: 2-3 dny updatu testů. Release bude buď odložen, nebo půjde ven under-tested. Zase.

**12:30 — Oběd, scrollování LinkedIn**
Čte post od člena české QA komunity o "agentním testování". Skeptický, ale zvědavý. Komentáře jsou mix nadšení a cynismu. Uloží si post na později.

**14:00 — Slack od CTO**
> "Michale, pořád slyším o AI v testování. Kde jsme s tímhle? Můžeme seknout ten QA bottleneck?"

Michal ví, že tohle je moment. Buď najde řešení, nebo CTO najde řešení za něj.

**15:00 — Research**
Michal googlí. Prochází TestGuild listy, Gartner reviews, vendor stránky. Většina vypadá stejně — "AI-powered", "revolutionizing", "next-gen". Pak narazí na qawave.ai.

"The Edge of QA Automation" — messaging ho zaujme, protože to nezní jako další "just add AI" pitch. Klikne na `/how-it-works`. Vidí technický deep-dive, ne sales deck.

**16:00 — Technické demo video**
Sleduje demo na reálné, komplexní aplikaci. AI agent autonomně exploruje multi-tenant SaaS. Governance dashboard ukazuje přesně, co AI testovalo a proč. Toto je jiné od všeho, co viděl.

**16:30 — ROI kalkulačka**
Zadá údaje svého týmu: 6 QA inženýrů, 30% coverage, průměrný plat 85K EUR. Kalkulačka ukazuje potenciální úsporu 340K EUR/rok při dosažení 70% coverage bez nového headcountu.

**Další den — Pilot signup**
Michal se registruje na technický pilot. Chce to testovat na staging environment s reálným produktem firmy. Posílá CTO zprávu: "Mám něco, co stojí za pilotní test."

### 3.7 Obsah, který s Michalem rezonuje

| Typ obsahu | Proč rezonuje | Příklad |
|---|---|---|
| **Technické deep-dives** | Michal je inženýr, ne business buyer. Marketing fluff ho odrazuje. | Blog: "Jak agentní AI exploruje multi-tenant SaaS aplikaci" |
| **Honest comparisons** | Respektuje vendora, který přiznává limity. | Stránka: "Kdy NEpoužívat qawave.ai" |
| **České case studies** | Signalizuje "rozumí našemu trhu". | Case study: "Jak [česká firma] zvýšila coverage z 28% na 74%" |
| **ROI kalkulačka** | Potřebuje čísla pro business case směrem k CTO. | Interaktivní tool s jeho reálnými daty |
| **Konferenční přítomnost** | Důvěřuje nástrojům, které vidí na QA meetupech. | Talk na TestStack Prague nebo QA Days |
| **Komunita** | České QA Slack/Discord skupiny jsou jeho zdroj pravdy. | Aktivní přítomnost v české QA komunitě |

### 3.8 Michalova Buyer Journey

```
Awareness          Consideration           Decision            Onboarding
    │                    │                     │                    │
    ▼                    ▼                     ▼                    ▼
LinkedIn post      qawave.ai/blog        Technický pilot      Dedikovaný
o agentním AI      Comparison pages      na staging env       onboarding
    │              ROI kalkulačka             │               inženýr
    ▼                    │                    ▼                    │
Google search      ──────▼──────        Prezentace CTO        ▼
"AI test           Demo video           s ROI daty         Integrace
automation"        /how-it-works            │              do CI/CD
    │                    │                    ▼                    │
    ▼                    ▼              Procurement              ▼
qawave.ai          Pilot signup         approval            Production
homepage                                                    rollout
```

---

## 4. Doporučená struktura webu

### 4.1 Informační architektura

```
qawave.ai/
│
├── Homepage                          — Hero + 3 UVP + social proof + CTA
│
├── /how-it-works                     — Technický deep-dive agentního přístupu
│
├── /platform/
│   ├── /autonomous-discovery         — Pilíř 1: detail + demo
│   ├── /intelligent-maintenance      — Pilíř 2: detail + ROI argumentace
│   └── /governance                   — Pilíř 3: detail + compliance info
│
├── /pricing                          — Transparentní pricing (kritické pro B2B trust)
│
├── /enterprise                       — CTO-facing: security, compliance, SLA, governance
│
├── /customers                        — Case studies a testimonialy
│
├── /resources/
│   ├── /blog                         — Technický blog (primární SEO + autorita)
│   ├── /docs                         — Veřejná dokumentace (signalizuje maturitu produktu)
│   ├── /roi-calculator               — Interaktivní lead generation tool
│   └── /comparisons/                 — Srovnávací stránky
│       ├── /vs-selenium
│       ├── /vs-cypress
│       ├── /vs-playwright
│       ├── /vs-qa-wolf
│       └── /vs-katalon
│
├── /about                            — Tým, mise, hodnoty
└── /contact                          — Sales kontakt + demo request
```

### 4.2 Homepage — struktura a flow

Homepage musí projít **5-second clarity testem**: 53% návštěvníků odchází do 3 sekund, pokud relevance není okamžitě jasná.

| Sekce | Obsah | Cíl |
|---|---|---|
| **1. Hero** | "The Edge of QA Automation" + jednověté vysvětlení + CTA | Okamžitá jasnost: co to je, pro koho, proč to záleží |
| **2. Problem statement** | Kvantifikace bolesti: 25% coverage plateau, $900K skryté náklady, AI-generovaný kód gap | Validace: "Tihle chápou můj problém" |
| **3. Tři UVP pilíře** | Vizuální karty s taglines, linkující na detail stránky | Struktura hodnoty: tři důvody proč qawave |
| **4. Jak to funguje** | 3 kroky: Connect repo → AI exploruje → Výsledky s governance | Demystifikace: pochopení produktu za 10 sekund |
| **5. Social proof** | Loga firem, metriky, jeden headline testimonial | Trust: někdo to už používá |
| **6. Technická kredibilita** | Integration badges: GitHub, GitLab, Jenkins, Cypress, Playwright | Kompatibilita: funguje to s naším stackem |
| **7. CTA sekce** | Primary: "Zahájit Free Pilot" / Secondary: "Sledovat Technické Demo" | Konverze |

**CTA strategie:**
- Jeden primární CTA na stránku (13.5% konverze vs. 10.5% pro multi-CTA)
- Primary CTA: "Zahájit Free Pilot" (technický, ne sales-y)
- Secondary CTA: "Sledovat Technické Demo" (pro ty, kteří nejsou ready na pilot)

### 4.3 Designové principy

| Princip | Detail |
|---|---|
| **Mobile-first** | 83% B2B landing page návštěv je mobile (desktop konvertuje 8% lépe — optimalizovat obojí) |
| **Load time < 2s** | Bounce probability stoupá o 123% z 1s na 10s load time |
| **Dark mode / dark-accented** | Signalizuje "engineering tool, ne business tool" — resonuje s technickou audience |
| **Interaktivní demo** | Embedded product demonstrations, ne jen screenshoty |
| **Minimalistický, data-driven** | Čísla a vizualizace > marketing copy. Každá sekce má metrical anchor. |

---

## 5. Content strategie — Budování autority "The Edge"

### 5.1 Obsahové pilíře mapované na buyer journey

| Fáze journey | Typ obsahu | Příklady témat | Cíl |
|---|---|---|---|
| **Awareness** | Blog / SEO | "25% Coverage Plateau: Proč automatizace narazila na zeď" | Přitáhnout Michala přes search |
| **Awareness** | Industry analýzy | "Forrester přejmenoval kategorii: Co Autonomous Testing znamená pro váš tým" | Thought leadership |
| **Consideration** | Comparison guides | "qawave.ai vs. QA Wolf: Autonomie vs. Outsourcing" | Pomoc s evaluací |
| **Consideration** | Technické deep-dives | "Jak agentní AI exploruje multi-tenant SaaS aplikaci" | Budování technické důvěry |
| **Decision** | ROI kalkulačka | Interaktivní tool s velikostí týmu, coverage, salary daty | Kvantifikace hodnoty |
| **Decision** | Case studies | "Jak [firma] šla z 28% na 85% coverage za 6 týdnů" | Proof of results |
| **Retention** | Dokumentace | Veřejné API docs, integration guides | Snížení implementační frikce |
| **Advocacy** | Komunita | České QA meetupy, konference, Slack skupiny | Budování ekosystému |

### 5.2 Signature content série "The Edge"

**"Edge Reports"** — Kvartální state-of-QA-automation report
- Originální data z anonymizovaných metrik qawave.ai zákazníků
- Coverage benchmarky podle industry a velikosti firmy
- Trendy v adopci AI testování
- Distribuce: gated content (email za download) + ungated executive summary

**"Edge Cases"** — Blog série (záměrný double meaning)
- Deep-dive příběhy o testování komplexních, reálných scénářů
- Multi-tenant isolace, race conditions, state machine explorace, API chaos testing
- Formát: problém → jak to řeší tradiční přístup → jak to řeší agentní AI → výsledky
- Frekvence: 2x měsíčně

**"From the Edge"** — Rozhovory se senior QA leadery
- Podcast nebo video série
- Hosté: QA Directors, VP Engineering, CTO z českých i mezinárodních firem
- Témata: budoucnost QA, AI adopce, team building, career paths
- Frekvence: 2x měsíčně

### 5.3 SEO strategie

**Primary keywords (EN):**
- "agentic testing"
- "autonomous QA"
- "AI test automation"
- "AI testing tools 2026"

**Czech keywords:**
- "automatizace testování"
- "AI testování"
- "QA nástroje"
- "agentní testování"

**Long-tail:**
- "how to implement AI in QA testing"
- "Selenium vs AI testing"
- "QA automation for fintech"
- "test maintenance cost reduction"
- "jak implementovat AI do testování" (CZ)

### 5.4 Produkční kadence

| Typ | Frekvence | Odpovědnost |
|---|---|---|
| Blog post (technický) | 1x/týden | Engineering + Content |
| Blog post (industry/thought leadership) | 1x/týden | Content + Leadership |
| Comparison page | 1x/měsíc | Content + Product Marketing |
| Case study | 1x/kvartál | Customer Success + Content |
| Edge Report | 1x/kvartál | Data + Content + Leadership |
| Edge Cases série | 2x/měsíc | Engineering + Content |
| From the Edge rozhovor | 2x/měsíc | Content + Leadership |
| Dokumentace update | Continuously | Engineering |

### 5.5 Content distribuce

| Kanál | Strategie |
|---|---|
| **Organic search** | SEO-optimalizovaný blog, comparison pages, docs |
| **LinkedIn** | Primary social — technické posty, Edge Reports snippety, team posts |
| **České QA komunity** | Slack skupiny, Discord, QA meetupy — aktivní participace, ne jen promo |
| **Konference** | TestStack Prague, QA Days, European Testing Conference — talks, ne jen stánky |
| **Newsletter** | Týdenní "Edge Digest" — curated QA + AI news + qawave insights |
| **Dev.to / Medium** | Cross-posting technických blog postů pro širší reach |

---

## Příloha: Sekundární persony (k rozpracování)

### CTO Diana — Decision Maker
- 42 let, CTO v scale-up firmě (200-500 zaměstnanců)
- Nerozumí detailům QA, ale rozumí nákladům a rizikům
- Hledá: ROI, compliance, vendor stability, team productivity metriky
- Klíčový content: Executive summary, ROI kalkulačka, Enterprise page

### Senior QA Engineer Tomáš — Technical Evaluator
- 29 let, Senior QA Automation Engineer
- Hands-on, skeptický k AI hype, chce vidět kód a technické detaily
- Hledá: Jak to funguje pod kapotou, API dokumentace, integration guides, open-source komponenty
- Klíčový content: /docs, /how-it-works, technické blog posty, GitHub presence
