# UX Wireframy -- Landing Page qawave.ai

> **Role:** UX Designer
> **Datum:** 2026-04-15
> **Verze:** 1.0
> **Stav:** Hotovo -- pripraveno pro UI Designera

---

## 1. Informacni architektura landing page

### 1.1 Hierarchie sekci

```
Landing Page (/)
|
|-- [S1] Hero                          viewport 100vh
|     |-- Nadpis (H1)
|     |-- Podnadpis (doplneni kontextu)
|     |-- Primary CTA
|     |-- Secondary CTA (textovy odkaz)
|     |-- Vizualni element (animovany)
|
|-- [S2] Problem Statement             ~80vh
|     |-- Nadpis (H2)
|     |-- 3 metricke karty (cisla bolesti)
|     |-- Kratky odstavec kontextu
|
|-- [S3] Tri UVP pilire                ~100vh
|     |-- Nadpis sekce (H2)
|     |-- 3 karty v radku
|     |   |-- Ikona
|     |   |-- Nadpis pilire (H3)
|     |   |-- Tagline (anglicky)
|     |   |-- Popis (2-3 vety)
|     |   |-- Odkaz na detail stranku
|
|-- [S4] Jak to funguje                ~80vh
|     |-- Nadpis sekce (H2)
|     |-- 3 kroky (cislovane)
|     |   |-- Cislo kroku
|     |   |-- Nazev kroku (H3)
|     |   |-- Kratky popis
|     |   |-- Vizualni prvek (ikona/ilustrace)
|     |-- Spojovaci linie mezi kroky
|
|-- [S5] Social Proof                  ~60vh
|     |-- Logo strip (firmy)
|     |-- 3 metricke karty (vysledky)
|     |-- Testimonial blok (citat + jmeno + role)
|
|-- [S6] Technicka kredibilita         ~40vh
|     |-- Nadpis (H2)
|     |-- Grid integracnich badgi
|     |-- Kratky text o kompatibilite
|
|-- [S7] Zaverecne CTA                 ~60vh
      |-- Nadpis (H2)
      |-- Podnadpis
      |-- Primary CTA button
      |-- Secondary CTA (textovy odkaz)
```

### 1.2 Navigace (sticky header)

```
[Logo qawave.ai]    [How It Works]  [Platform v]  [Pricing]  [Resources v]    [Zahajit Pilot ->]
                                      |                         |
                                      +-- Discovery             +-- Blog
                                      +-- Maintenance           +-- Docs
                                      +-- Governance            +-- ROI Calculator
```

- Header: transparentni na Hero, po scrollu solid (#050505) s blur efektem
- Mobile: hamburger menu, CTA button zustava viditelny vzdy
- Logo klik = scroll na vrch

---

## 2. User Flow -- Michal prochazi strankou

### 2.1 Primarni flow (prvni navsteva)

```
VSTUP (Google/LinkedIn/Direct)
        |
        v
[S1] Hero -- 5-second clarity test
        |  Michal cte "The Edge of QA Automation"
        |  Rozumi: agentni AI pro QA, ne dalsi script tool
        |  Rozhoduje: scrollovat dal / kliknout CTA / odejit
        |
        v (scroll)
[S2] Problem -- validace bolesti
        |  Michal vidi 25% plateau, skryte naklady
        |  Reakce: "Tihle chapou muj problem."
        |  Emocionalni napojeni -- frustrace validovana
        |
        v (scroll)
[S3] UVP pilire -- pochopeni hodnoty
        |  Michal skenuje 3 karty
        |  Autonomous Discovery ho zaujme nejvic
        |  Intelligent Maintenance resonuje s jeho denni bolesti
        |  Governance ho uklidni (neni to black box)
        |
        v (scroll)
[S4] Jak to funguje -- demystifikace
        |  3 kroky: Connect -> Explore -> Results
        |  Michal chape workflow za 10 sekund
        |  Klicove: viditelnost governance v kroku 3
        |
        v (scroll)
[S5] Social proof -- budovani duvery
        |  Loga firem, metriky, testimonial
        |  Michal hleda signaly: pouziva to nekdo relevantni?
        |
        v (scroll)
[S6] Technicka kredibilita -- kompatibilita
        |  Vidi GitHub, GitLab, Playwright, Cypress badge
        |  Reakce: "Funguje to s nasim stackem."
        |
        v (scroll)
[S7] CTA -- konverze
        |  Primary: "Zahajit Free Pilot"
        |  Secondary: "Sledovat Technicke Demo"
        |
        +-----> [Pilot signup]     (vysoky intent)
        +-----> [Demo video]       (nizsi intent, nurturing)
```

### 2.2 Alternativni flow (navrat z blogu / LinkedIn)

Michal se vraci po precteni clanku. Primo scrolluje na How It Works nebo klikne v navigaci na Platform. Zna kontext, hleda detail. CTA v Hero ho chyti, pokud je pripraveny.

### 2.3 Flow CTO Diany

Diana pristane pres Michaluv forward. Skenuje Hero -> Problem (cisla ji zajimaji) -> preskoci na Social Proof -> CTA "Sledovat Demo". Kratsi flow, orientovany na metriky a duveru.

---

## 3. ASCII Wireframy

### Konvence

```
+---------------------------+   Obrys = hranice sekce / komponentu
|                           |
|  [Button Text]            |   Hranate zavorky = interaktivni prvek
|  (placeholder text)       |   Kulate zavorky = popis obsahu
|  ====                     |   Rovnitka = oddelovac / linka
|  ---                      |   Pomlcky = sekundarni oddelovac
|  > link text              |   Sipka = odkaz / navigacni prvek
+---------------------------+
```

---

### S1 -- Hero (100vh)

#### Desktop (1440px)

```
+============================================================================+
|  [Logo]           How It Works   Platform   Pricing   Resources   [CTA ->] |
+============================================================================+
|                                                                            |
|                                                                            |
|                                                                            |
|         The Edge of                                                        |
|         QA Automation                (animovany vizualni prvek)            |
|                                      +----------------------------+        |
|         Agentni AI, ktere            |                            |        |
|         autonomne testuje            |   (abstraktni vizualizace  |        |
|         vasi aplikaci.               |    explorace -- uzly a     |        |
|         Objevuje to, co              |    spojnice, ktere se      |        |
|         vase skripty                 |    postupne rozsvecuji,    |        |
|         minuly.                      |    symbolizujici AI        |        |
|                                      |    agent prozkoumavajici   |        |
|                                      |    aplikaci)               |        |
|         [Zahajit Free Pilot]         |                            |        |
|                                      +----------------------------+        |
|         > Nebo sledujte technicke demo                                     |
|                                                                            |
|                                                                            |
|                              (scroll indikator -- sipka dolu)              |
+============================================================================+
```

**Rozlozeni:** 2 sloupce (55% text vlevo, 45% vizual vpravo). Vertikalne centrovano.

**Typografie:**
- H1 "The Edge of QA Automation" -- nejvetsi text na strance, vizualni dominance
- Podnadpis -- 2-3 radky, bezny text
- CTA button -- velky, vyrazny, jediny primarni CTA

**Interakce:**
- Vizualni prvek: Framer Motion animace pri loadu -- uzly se postupne objevuji, spojnice se kresli. Casovani 1.5s, ease-out.
- CTA hover: jemny scale(1.03) + glow efekt
- Scroll indikator: pulzujici sipka, fade-out pri scrollu
- Cely Hero se pri scrollu dolu jemne paralaxne posouva (background pomaleji nez text)

#### Mobile (375px)

```
+----------------------------------+
|  [Logo]                [Menu]    |
+----------------------------------+
|                                  |
|                                  |
|   The Edge of                    |
|   QA Automation                  |
|                                  |
|   Agentni AI, ktere              |
|   autonomne testuje              |
|   vasi aplikaci.                 |
|                                  |
|   [Zahajit Free Pilot]           |
|                                  |
|   > Sledovat demo                |
|                                  |
|   +---------------------------+  |
|   | (vizualni prvek --        |  |
|   |  zmensenina, pod textem)  |  |
|   +---------------------------+  |
|                                  |
|            (scroll)              |
+----------------------------------+
```

**Mobilni poznamky:**
- Layout: jednosloupcovy, text nad vizualem
- H1 velikost zmensenina, ale stale dominantni (clamp)
- CTA button: full-width (s paddingem)
- Vizualni prvek: pod textem, zmenseny, ale stale animovany
- Hamburger menu: slide-in z prava, overlay

---

### S2 -- Problem Statement (~80vh)

#### Desktop (1440px)

```
+============================================================================+
|                                                                            |
|                    Test automation narazila na zed.                         |
|                    Vase tymy to vedi. Cisla to dokazuji.                   |
|                                                                            |
|    +------------------------+  +------------------------+  +------------+  |
|    |                        |  |                        |  |            |  |
|    |         25 %           |  |       900K EUR         |  |   +40 %   |  |
|    |                        |  |                        |  |            |  |
|    |   Prumerne pokryti     |  |   Skutecne rocni       |  | Narust    |  |
|    |   automatizovanymi     |  |   naklady QA udrzby    |  | rychlosti |  |
|    |   testy v enterprise   |  |   pri rozpoctu         |  | vyvoje    |  |
|    |   firme -- industry    |  |   140-180K EUR         |  | diky AI   |  |
|    |   plateau, ktere se    |  |                        |  | codingt.  |  |
|    |   nehnulo 5 let.       |  |   (skryte naklady      |  | QA stale  |  |
|    |                        |  |    kruehkych test      |  | nestaci.  |  |
|    |                        |  |    suites)             |  |            |  |
|    +------------------------+  +------------------------+  +------------+  |
|                                                                            |
|    AI-generovany kod vznika rychleji nez kdykoliv drive.                    |
|    Vas QA tym nema sanci drzet krok se scriptovym pristupem.               |
|    Gap se rozsiruje kazdy sprint.                                          |
|                                                                            |
+============================================================================+
```

**Rozlozeni:** Centrovany text nahore, 3 karty v radku (grid 3 sloupce), odstavec pod kartami.

**Typografie:**
- H2 nadpis -- velky, centrovany
- Cisla v kartach -- XXL velikost, vizualni dominance (counter animace)
- Popis v kartach -- maly text, tlumena barva
- Zaverecny odstavec -- stredni velikost, centrovany

**Interakce:**
- Karty: fade-in + slide-up pri scrollu do viewportu (Framer Motion, stagger 150ms)
- Cisla: counter animace (0 -> cilova hodnota) pri prvnim zobrazeni, trvani 1.2s
- Karty: jemny hover efekt (border glow)

#### Mobile (375px)

```
+----------------------------------+
|                                  |
|   Test automation                |
|   narazila na zed.               |
|                                  |
|   +---------------------------+  |
|   |        25 %               |  |
|   |   Prumerne pokryti...     |  |
|   +---------------------------+  |
|                                  |
|   +---------------------------+  |
|   |      900K EUR             |  |
|   |   Skutecne rocni...       |  |
|   +---------------------------+  |
|                                  |
|   +---------------------------+  |
|   |       +40 %               |  |
|   |   Narust rychlosti...     |  |
|   +---------------------------+  |
|                                  |
|   AI-generovany kod vznika       |
|   rychleji nez kdykoliv...       |
|                                  |
+----------------------------------+
```

**Mobilni poznamky:**
- Karty: vertikalni stack, full-width
- Stagger animace zachovana (shora dolu)
- Cisla: mensi, ale stale dominantni v karte
- Odstavec: zarovnany vlevo (ne centrovany -- lepsi citelnost na mobilu)

---

### S3 -- Tri UVP pilire (~100vh)

#### Desktop (1440px)

```
+============================================================================+
|                                                                            |
|                         Proc qawave.ai                                     |
|                                                                            |
|  +-----------------------------+ +-----------------------------+ +------+  |
|  |                             | |                             | |      |  |
|  |   (ikona: radar/compas)     | |   (ikona: DNA/evoluce)     | | (ik) |  |
|  |                             | |                             | |      |  |
|  |   Autonomous                | |   Intelligent              | | Eng. |  |
|  |   Discovery                 | |   Maintenance              | | Grade|  |
|  |                             | |                             | | Gov. |  |
|  |   "Your AI finds what       | |   "Tests that evolve       | |      |  |
|  |    your scripts miss."      | |    with your product,      | | "AI  |  |
|  |                             | |    not against it."        | | pow."|  |
|  |   AI autonomne exploruje    | |                             | |      |  |
|  |   vasi aplikaci a           | |   Pochopeni zameru testu,  | | Plny |  |
|  |   objevuje netestovane      | |   ne jen patching          | | aud. |  |
|  |   cesty a edge cases,       | |   selektoru. Adaptace      | | trl. |  |
|  |   ktere lidsky tester       | |   cele strategie pri       | | Lid. |  |
|  |   nepredvidal.              | |   zmene produktu.          | | aut. |  |
|  |                             | |                             | |      |  |
|  |   > Zjistit vic             | |   > Zjistit vic            | | > .. |  |
|  |                             | |                             | |      |  |
|  +-----------------------------+ +-----------------------------+ +------+  |
|                                                                            |
+============================================================================+
```

**Rozlozeni:** Grid 3 sloupce, rovnomerne. Karty maji shodnou vysku (CSS Grid align-stretch).

**Typografie:**
- H2 "Proc qawave.ai" -- centrovany, nad kartami
- Ikona -- nahore v karte
- H3 nazev pilire -- tucny, velkejsi
- Tagline -- kurziva nebo odlisena barvou (anglicky)
- Popis -- bezny text, 2-3 vety
- Link "Zjistit vic" -- dole v karte, odkaz na /platform/[pilar]

**Interakce:**
- Karty: fade-in + slide-up, stagger 200ms
- Hover na karte: jemny zdvih (translateY -4px) + border glow + ikona se animuje (jemna rotace/pulse)
- Klik na kartu nebo odkaz: navigace na detail stranku pilire
- Cela karta je klikatelna (a11y: role="link" nebo obalena v <a>)

#### Mobile (375px)

```
+----------------------------------+
|                                  |
|      Proc qawave.ai              |
|                                  |
|   +---------------------------+  |
|   | (ikona)                   |  |
|   | Autonomous Discovery      |  |
|   | "Your AI finds what..."   |  |
|   | AI autonomne exploruje... |  |
|   | > Zjistit vic             |  |
|   +---------------------------+  |
|                                  |
|   +---------------------------+  |
|   | (ikona)                   |  |
|   | Intelligent Maintenance   |  |
|   | "Tests that evolve..."    |  |
|   | Pochopeni zameru...       |  |
|   | > Zjistit vic             |  |
|   +---------------------------+  |
|                                  |
|   +---------------------------+  |
|   | (ikona)                   |  |
|   | Engineering-Grade Gov.    |  |
|   | "AI power. Human auth."   |  |
|   | Plny audit trail...       |  |
|   | > Zjistit vic             |  |
|   +---------------------------+  |
|                                  |
+----------------------------------+
```

**Mobilni poznamky:**
- Vertikalni stack, kazda karta full-width
- Ikony mensí, zarovnane vlevo (ne centrovane)
- Tap target: cela karta klikatelna, min 44x44px touch area na odkazu
- Mozno zvazit horizontalni scroll karusel (alternativa), ale stack je bezpecnejsi pro a11y

---

### S4 -- Jak to funguje (~80vh)

#### Desktop (1440px)

```
+============================================================================+
|                                                                            |
|                      Jak to funguje                                        |
|                      Tri kroky k autonomnimu QA                            |
|                                                                            |
|   +------------------+       +------------------+       +---------------+  |
|   |                  |       |                  |       |               |  |
|   |    (vizualni     |       |    (vizualni     |       |   (vizualni   |  |
|   |     prvek:       |       |     prvek:       |       |    prvek:     |  |
|   |     repo ikon)   |       |     graf uzlu)   |       |    dashbrd)   |  |
|   |                  |       |                  |       |               |  |
|   |     Krok 1       | ----> |     Krok 2       | ----> |    Krok 3     |  |
|   |                  |       |                  |       |               |  |
|   | Pripojte         |       | AI exploruje     |       | Vysledky s   |  |
|   | repozitar        |       |                  |       | governance   |  |
|   |                  |       | Agent autonomne  |       |               |  |
|   | Integrace s      |       | mapuje vasi      |       | Kompletni    |  |
|   | GitHub, GitLab.  |       | aplikaci,        |       | prehled      |  |
|   | Zadny rip-and-   |       | identifikuje     |       | vysledku,    |  |
|   | replace. 5 min   |       | cesty, generuje  |       | audit trail  |  |
|   | setup.           |       | testy.           |       | kazdeho AI   |  |
|   |                  |       |                  |       | rozhodnuti.  |  |
|   +------------------+       +------------------+       +---------------+  |
|                                                                            |
+============================================================================+
```

**Rozlozeni:** 3 sloupce s spojovacimi sipkami (---->) mezi nimi. Kazdy krok ma vizualni prvek nahore a text dole.

**Typografie:**
- H2 + podnadpis centrovane nahore
- Cislo kroku -- velke, barevne cislo (accent barva)
- H3 nazev kroku -- tucny
- Popis -- kratky, 2-3 vety max

**Interakce:**
- Sipky mezi kroky: animovane Framer Motion, kresli se zleva doprava pri scrollu do viewportu
- Kroky: stagger fade-in (1 -> 2 -> 3), 250ms delay
- Vizualni prvky: jemna loop animace (pulse/float) -- kazdy krok ma odlisnou
- Hover na krok: zvetseni vizualniho prvku (scale 1.05)

#### Mobile (375px)

```
+----------------------------------+
|                                  |
|    Jak to funguje                |
|    3 kroky k autonomnimu QA      |
|                                  |
|         (1)                      |
|   +---------------------------+  |
|   | (vizualni prvek)          |  |
|   | Pripojte repozitar        |  |
|   | Integrace s GitHub...     |  |
|   +---------------------------+  |
|            |                     |
|            v                     |
|         (2)                      |
|   +---------------------------+  |
|   | (vizualni prvek)          |  |
|   | AI exploruje              |  |
|   | Agent autonomne mapuje... |  |
|   +---------------------------+  |
|            |                     |
|            v                     |
|         (3)                      |
|   +---------------------------+  |
|   | (vizualni prvek)          |  |
|   | Vysledky s governance     |  |
|   | Kompletni prehled...      |  |
|   +---------------------------+  |
|                                  |
+----------------------------------+
```

**Mobilni poznamky:**
- Vertikalni layout s vertikalnimi sipkami (|, v) mezi kroky
- Cisla kroku velka, centrovana nad kartou
- Vizualni prvky zmensene, ale pritomne
- Sipky se animuji shora dolu pri scrollu

---

### S5 -- Social Proof (~60vh)

#### Desktop (1440px)

```
+============================================================================+
|                                                                            |
|    Duvera tech tymu v cele Evrope                                          |
|                                                                            |
|    [Logo 1]   [Logo 2]   [Logo 3]   [Logo 4]   [Logo 5]   [Logo 6]       |
|                                                                            |
|    ====================================================================    |
|                                                                            |
|    +---------------------+  +---------------------+  +-----------------+  |
|    |                     |  |                     |  |                 |  |
|    |      28% -> 74%     |  |       -65 %         |  |    6 tydnu     |  |
|    |                     |  |                     |  |                 |  |
|    |  Narust pokryti     |  |  Redukce casu       |  |  Od pilotu     |  |
|    |  v pilotnich        |  |  na udrzbu testu    |  |  k produkci    |  |
|    |  projektech         |  |                     |  |                 |  |
|    +---------------------+  +---------------------+  +-----------------+  |
|                                                                            |
|    ====================================================================    |
|                                                                            |
|    "Poprve jsem nemusel presvedcovat CTO, ze QA                            |
|     je investice, ne naklad. Cisla mluvi sama."                            |
|                                                                            |
|         -- (Jmeno Prijmeni), QA Manager, (Firma)                          |
|            (avatar)                                                        |
|                                                                            |
+============================================================================+
```

**Rozlozeni:** 3 vertikalni bloky -- loga, metriky, testimonial. Centrovane.

**Typografie:**
- H2 nadpis sekce
- Loga: monochromaticka (seda/bila), v radku, rovnomerne rozlozena
- Cisla v metrikach: XXL, accent barva
- Popis metrik: maly text
- Citat: velky kurzivni text, centrovany
- Autor: mensi text, vcetne avataru a role

**Interakce:**
- Logo strip: jemna nekonecna autoplay animace (marquee), pauza na hover
- Metriky: counter animace pri scroll-in (stejne jako v Problem sekci)
- Testimonial: fade-in
- Pokud vice testimonialu: carousel s teckami (auto-rotate 6s, pauza na hover)

#### Mobile (375px)

```
+----------------------------------+
|                                  |
|   Duvera tech tymu               |
|   v cele Evrope                  |
|                                  |
|   [Logo1] [Logo2] [Logo3]       |
|   [Logo4] [Logo5] [Logo6]       |
|                                  |
|   +---------------------------+  |
|   |      28% -> 74%          |  |
|   |  Narust pokryti...       |  |
|   +---------------------------+  |
|   +---------------------------+  |
|   |       -65 %              |  |
|   |  Redukce casu...         |  |
|   +---------------------------+  |
|   +---------------------------+  |
|   |      6 tydnu             |  |
|   |  Od pilotu k produkci    |  |
|   +---------------------------+  |
|                                  |
|   "Poprve jsem nemusel           |
|    presvedcovat CTO..."          |
|   -- (Jmeno), QA Manager        |
|                                  |
+----------------------------------+
```

**Mobilni poznamky:**
- Loga: grid 3x2 nebo horizontalni scroll strip
- Metriky: vertikalni stack
- Testimonial: plna sirka, mensi font
- Carousel: swipe gesto misto auto-rotate

---

### S6 -- Technicka kredibilita (~40vh)

#### Desktop (1440px)

```
+============================================================================+
|                                                                            |
|              Funguje s vasim stackem                                        |
|                                                                            |
|              Integrace behem minut, ne tydnu.                              |
|              Zadny rip-and-replace.                                        |
|                                                                            |
|    +--------+  +--------+  +--------+  +--------+  +--------+             |
|    |        |  |        |  |        |  |        |  |        |             |
|    | GitHub |  | GitLab |  |Jenkins |  |  GH    |  |GitLab  |             |
|    |        |  |        |  |        |  |Actions |  |  CI    |             |
|    +--------+  +--------+  +--------+  +--------+  +--------+             |
|                                                                            |
|    +--------+  +--------+  +--------+  +--------+  +--------+             |
|    |        |  |        |  |        |  |        |  |        |             |
|    |Playwrt |  |Cypress |  |Selenium|  | Jest   |  | Slack  |             |
|    |        |  |        |  |        |  |        |  |        |             |
|    +--------+  +--------+  +--------+  +--------+  +--------+             |
|                                                                            |
|              > Zobrazit vsechny integrace                                  |
|                                                                            |
+============================================================================+
```

**Rozlozeni:** Centrovany grid badgi (5x2 nebo flexibilni wrap). Nadpis a podnadpis nahore.

**Typografie:**
- H2 centrovany
- Podnadpis -- mensi, tlumena barva
- Badge: logo nastroje + nazev pod nim
- Link na kompletni seznam -- dole centrovany

**Interakce:**
- Badge grid: fade-in stagger (po radcich)
- Badge hover: jemny zdvih + label se zobrazi pod badge (pokud normalne skryty) nebo glow efekt
- Cely grid muze byt animovany pri scrollu (jemny slide-up)

#### Mobile (375px)

```
+----------------------------------+
|                                  |
|   Funguje s vasim stackem        |
|                                  |
|   +------+ +------+ +------+    |
|   |GitHub| |GitLab| |Jenk. |    |
|   +------+ +------+ +------+    |
|   +------+ +------+ +------+    |
|   |GH Act| |GL CI | |Playw.|    |
|   +------+ +------+ +------+    |
|   +------+ +------+ +------+    |
|   |Cypr. | |Selen.| | Jest |    |
|   +------+ +------+ +------+    |
|                                  |
|   > Vsechny integrace            |
|                                  |
+----------------------------------+
```

**Mobilni poznamky:**
- Grid 3 sloupce (mensí badge)
- Nazvy nastroju zkracene pokud nutne
- Alternativa: horizontalni scroll s vetsimy badge

---

### S7 -- Zaverecne CTA (~60vh)

#### Desktop (1440px)

```
+============================================================================+
|                                                                            |
|                                                                            |
|                                                                            |
|                Pripraveni byt na hrane?                                    |
|                                                                            |
|                Zahajte pilot na vasem realnem produktu.                     |
|                Zadna kreditni karta. Zadny zavazek.                        |
|                Vysledky za dny, ne mesice.                                 |
|                                                                            |
|                                                                            |
|                       [Zahajit Free Pilot]                                 |
|                                                                            |
|                > Nebo sledujte technicke demo (15 min)                     |
|                                                                            |
|                                                                            |
|                                                                            |
+============================================================================+
|  (Footer)                                                                  |
|  [Logo]   Platform  Resources  Company    (c) 2026 qawave.ai              |
|           Discovery  Blog      About      Privacy  Terms                   |
|           Maint.     Docs      Contact                                     |
|           Governance ROI Calc  Careers                                     |
|                      Pricing                                               |
+============================================================================+
```

**Rozlozeni:** Centrovany, velky padding nahore a dole. Maximalni vizualni prostor kolem CTA. Footer pod CTA sekci.

**Typografie:**
- H2 "Pripraveni byt na hrane?" -- velky, dominantni (callback na Hero)
- Podnadpis: 3 kratke radky, kazdy s jednim argumentem
- CTA button: nejvetsi button na strance
- Secondary link: mensi, pod buttonem

**Interakce:**
- Cela sekce: fade-in pri scrollu
- CTA button: vyzarujici glow animace (jemny pulse kazdych 3s) -- pritahuje pozornost
- CTA hover: zvetseni + glow zintenzivni
- CTA klik: navigace na /pilot-signup (nebo modal s formularem)
- Secondary link klik: navigace na /demo nebo otevreni video modalu

#### Mobile (375px)

```
+----------------------------------+
|                                  |
|                                  |
|   Pripraveni byt na hrane?       |
|                                  |
|   Zahajte pilot na vasem         |
|   realnem produktu.              |
|   Zadna kreditni karta.         |
|   Zadny zavazek.                |
|                                  |
|   [  Zahajit Free Pilot  ]      |
|                                  |
|   > Sledovat demo (15 min)      |
|                                  |
|                                  |
+----------------------------------+
|  (Footer -- kompaktni)           |
|  [Logo]                          |
|  Platform | Resources | Company  |
|  (c) 2026  Privacy  Terms       |
+----------------------------------+
```

**Mobilni poznamky:**
- CTA button: full-width
- Text zarovnany vlevo
- Footer: zjednoduseny, accordion nebo jednoduchy seznam
- Dostatecny padding kolem CTA pro vizualni "oddechnutí"

---

## 4. Stavy a interakce -- souhrnna tabulka

### 4.1 Globalni interakce

| Prvek | Stav | Chovani |
|---|---|---|
| **Sticky header** | Scroll = 0 | Transparentni pozadi, bile logo/text |
| | Scroll > 80px | Solid pozadi (#050505), backdrop-blur, jemny stin |
| | Mobile menu open | Overlay pres cely viewport, slide-in zprava |
| **CTA button (primarni)** | Default | Accent barva pozadi, bily text |
| | Hover | scale(1.03), glow efekt na pozadi |
| | Focus | Viditelny focus ring (2px, offset, accent barva) |
| | Active/press | scale(0.98), tmavsi pozadi |
| | Disabled | Opacity 0.5, cursor: not-allowed |
| **Textove odkazy** | Default | Accent barva, bez podtrzeni |
| | Hover | Podtrzeni (underline-offset) |
| | Focus | Focus ring |
| **Karty** | Default | Border 1px, tlumena barva |
| | Hover | translateY(-4px), border glow, jemny stin |
| | Focus | Viditelny focus ring |

### 4.2 Scroll-triggered animace (Framer Motion)

| Sekce | Trigger | Animace | Konfigurace |
|---|---|---|---|
| **S1 Hero** | Page load | Fade-in text (0.5s) -> fade-in vizual (0.8s) -> fade-in CTA (1s) | Sekvencni, ease-out |
| **S1 Hero** | Scroll down | Paralaxni posun pozadi (0.3x rychlost) | `useScroll` + `useTransform` |
| **S2 Problem** | Scroll into view (50%) | Karty: stagger slide-up + fade-in | stagger: 150ms, duration: 0.6s |
| **S2 Problem** | Karta viditelna | Counter animace cisla (0 -> cil) | duration: 1.2s, ease-out |
| **S3 UVP** | Scroll into view (30%) | Karty: stagger slide-up + fade-in | stagger: 200ms, duration: 0.6s |
| **S4 How It Works** | Scroll into view (30%) | Kroky: stagger fade-in, sipky se kresli | stagger: 250ms, sipka SVG path draw |
| **S5 Social Proof** | Scroll into view | Logo strip fade-in, metriky counter, testimonial fade-in | Sekvencni |
| **S6 Tech** | Scroll into view | Badge grid: stagger fade-in po radcich | stagger: 100ms per badge |
| **S7 CTA** | Scroll into view | Text fade-in, button scale-in s bounce | duration: 0.8s |

### 4.3 Reduce Motion

Vsechny animace respektuji `prefers-reduced-motion: reduce`:
- Fade-in animace: okamzite zobrazeni (duration: 0)
- Paralax: vypnut
- Counter animace: okamzite zobrazeni cilove hodnoty
- Hover efekty: zachovany (zmena barvy), ale bez pohybu (zadny translateY)
- CTA glow: staticky, bez pulse

---

## 5. Principy pristupnosti (a11y)

### 5.1 Struktura a semantika

- **Headings:** Striktni hierarchie H1 > H2 > H3. Jeden H1 na stranku (Hero nadpis).
- **Landmarks:** `<header>`, `<nav>`, `<main>`, `<section>` (kazda sekce), `<footer>`.
- **Kazda sekce** ma `aria-label` nebo `aria-labelledby` odkazujici na svuj H2.
- **Skip-to-content link:** Prvni fokusovatelny prvek na strance -- preskok na `<main>`.

### 5.2 Klavesnicova navigace

- **Tab order:** Logicky sekvencni -- header nav -> Hero CTA -> sekce shora dolu.
- **Focus ring:** Viditelny na vsech interaktivnich prvcich (2px solid, accent barva, offset 2px).
- **Karty (S3, S5):** Pokud klikatelne, `role="link"` nebo obalene v `<a>`. Fokusovatelne tabem.
- **Dropdown menu:** `aria-expanded`, `aria-haspopup`, sipky nahoru/dolu pro navigaci.
- **Escape:** Zavre mobilni menu, dropdown, modaly.

### 5.3 Barevny kontrast

- **Text na pozadi:** Minimalne 4.5:1 pro bezny text, 3:1 pro velky text (WCAG AA).
- **Interaktivni prvky:** 3:1 kontrast vuci okolnimu pozadi.
- **Poznamka pro UI Designera:** Dark mode (#050505 bg) vyzaduje peclivou volbu sedi pro sekundarni text -- overit kontrastnim checkerem.

### 5.4 Obrazky a vizualni prvky

- **Dekorativni animace (Hero vizual):** `aria-hidden="true"`, `role="presentation"`.
- **Loga firem (Social Proof):** `alt="Logo [nazev firmy]"`.
- **Integracni badge:** `alt="[nazev nastroje] integrace"`.
- **Ikony v kartach:** Dekorativni pokud je text dostatecny -> `aria-hidden="true"`.

### 5.5 Responzivita a dotykove ovladani

- **Touch targets:** Minimalne 44x44px pro vsechny interaktivni prvky (WCAG 2.5.8).
- **Tap vs hover:** Hover stavy nesmi byt jediny zpusob zobrazeni informace. Na mobilu se hover stavy nezobrazuji.
- **Zoom:** Stranka nesmi byt broken pri 200% zoom.
- **Text sizing:** `rem`/`em` jednotky, `clamp()` pro responzivni typografii.

### 5.6 Performance jako pristupnost

- **LCP (Largest Contentful Paint):** Hero text musi byt vykreslen do 2.5s.
- **CLS (Cumulative Layout Shift):** Pod 0.1 -- zadne skakani layoutu pri nacitani obrazku/fontu.
- **Lazy loading:** Sekce pod foldem (S5-S7) mohou mit lazy-loaded obrazky.
- **Font loading:** `font-display: swap` -- text je okamzite citelny, font se nahraje asynchronne.

---

## 6. Poznamky pro implementaci

### 6.1 Komponentova struktura (doporucena)

```
src/
  components/
    layout/
      Header.tsx              -- sticky navigace
      Footer.tsx              -- paticka
      Section.tsx             -- wrapper pro kazdu sekci (padding, max-width, a11y)
    landing/
      HeroSection.tsx         -- S1
      ProblemSection.tsx      -- S2
      UvpSection.tsx          -- S3
      HowItWorksSection.tsx   -- S4
      SocialProofSection.tsx  -- S5
      TechCredSection.tsx     -- S6
      CtaSection.tsx          -- S7
    ui/
      Button.tsx              -- primary/secondary varianty
      Card.tsx                -- znovu pouzitelna karta
      MetricCard.tsx          -- karta s counter animaci
      Badge.tsx               -- integracni badge
      AnimatedCounter.tsx     -- counter animace pro cisla
```

### 6.2 Framer Motion patterny

- `useInView` pro scroll-triggered animace
- `stagger` variants pro skupiny karet
- `useScroll` + `useTransform` pro paralax v Hero
- `AnimatePresence` pro menu transitions
- Vsude respektovat `useReducedMotion()`

### 6.3 Klicova UX metriky k mereni

| Metrika | Cil | Nastroj |
|---|---|---|
| Bounce rate | < 40% | Analytics |
| Scroll depth (% kteri dojdou k S7) | > 30% | Scroll tracking |
| CTA click rate (Hero) | > 3% | Event tracking |
| CTA click rate (S7) | > 5% | Event tracking |
| Time on page | > 90s | Analytics |
| Mobile vs desktop konverze | Desktop +8% max gap | Segmentace |

---

```
---HANDOFF---
OD: ux-designer
KOMU: ui-designer
STATUS: hotovo
VYSTUP: docs/ux-wireframe.md
DALSI KROK: UI Designer aplikuje vizualni styl na wireframy
---/HANDOFF---
```
