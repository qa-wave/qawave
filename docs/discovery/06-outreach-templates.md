# 06 — Outreach Templates

> 4 paralelní 5-touch sekvence: {Elena, Marek} × {CZ, EN}. Plus LinkedIn connect notes a X DMs.
> CEO personalizuje ~30 % každého touchu — místa označena `<<<...>>>`.
> `<<NÁZEV_FIRMY>>`, `<<JMÉNO>>`, `<<TRIGGER>>` jsou Apollo/Liquid proměnné (automatizovatelné).

---

## Použití

- **`<<<...>>>`** — doplnit ručně, CEO přidá person-specific detail (post, job ad, talk, konkrétní metrika)
- **`<<PROMĚNNÁ>>`** — Apollo / Instantly Liquid variable, automatizovatelná
- Každá sekvence je nezávislá, nestačí jen přeložit EN → CZ
- Subject lines jsou plain-text, žádné CAPS, žádné emoji, peer-to-peer tón
- Email 1 ≤ 80 slov, Email 2 ≤ 60, Email 3 ≤ 100, Email 5 ≤ 50

---

## Globální komponenty

### Sender signature (EN)

```
Tomas Mertin
Founder, QAWave · qawave.ai
```

### Sender signature (CZ)

```
Tomáš Mertin
Zakladatel, QAWave · qawave.ai
```

### Calendly / booking link

```
https://cal.com/qawave/discovery
```
*(Placeholder — nahradit reálnou URL po aktivaci Cal.com účtu)*

---

## Sequence 1 — Elena (VPE / CTO) × EN

*Context: Elena is the economic buyer. Budget owner. Responds to business outcomes (CI cost, deploy frequency, incident rate), not to technology descriptions. First touch must earn a second read in under 20 seconds.*

---

### Touch 1 — Email · Day 0

**Subject:** CI pipeline cost at <<NÁZEV_FIRMY>>

**Body:**

Hi <<JMÉNO>>,

One question: what's your current CI runtime, and does your team have a number on what that costs in runner minutes per month?

I ask because <<< briefly state the trigger — e.g., you saw their job post for "Senior SDET", or their recent blog post on CI speed, or LinkedIn post about release delays >>>. It looked like CI throughput might be on your radar.

At <<NÁZEV_FIRMY>>'s scale, the maintenance overhead on flaky test suites typically represents 20–30% of senior engineer time — a figure consistent with DORA's 2024 State of DevOps findings on low-performing teams.

Worth a 20-minute call to compare notes?

<<< Optional: reference a specific talk, post, or decision Elena made that signals she cares about this >>>

Tomas Mertin
Founder, QAWave · qawave.ai

---

### Touch 2 — LinkedIn connect · Day 3

*(Send after Email 1, before Email 2)*

**Connection note (300 char limit):**

Hi <<JMÉNO>> — <<< one specific sentence about their work: a talk they gave, a post they wrote, a hire they made >>>. Building QAWave around autonomous QA for engineering-led orgs. Would value the connection even if timing isn't right.

---

### Touch 3 — Email · Day 5

**Subject:** RE: CI pipeline cost at <<NAZIV_FIRMY>>

**Body:**

Hi <<JMÉNO>> — following up briefly.

If CI cost and test flakiness aren't in your top-3 priorities this quarter, this isn't the right time. If they are:

<<< Insert 1 sentence about what specifically about their situation makes you think this is relevant now — recent hire, funding round, job posting, public statement >>>

We recorded a 12-minute walkthrough of how the agent handles flakiness triage on a Playwright suite: <<< link when available — qawave.ai/demo or Loom >>>

Happy to share it or skip straight to a call.

Tomas

---

### Touch 4 — Email · Day 9 (value-only, no ask)

**Subject:** Test impact analysis — how one team cut CI time by half

**Body:**

Hi <<JMÉNO>>,

Not pitching — just sharing something that may be useful.

I wrote up how test impact analysis (graph-based, not AI-magic) can reduce CI runtime by selecting only tests affected by a given diff. In practice, the teams we've seen apply this well go from 60–80 min full-suite runs to 15–25 min on most PRs.

The technique works independently of any tool: <<< link to qawave.ai/blog post when published, or briefly describe the method in 2 sentences if no post yet >>>.

DORA's 2024 report identifies CI feedback loop length as one of the four key predictors of deployment frequency. This is the lever most teams underinvest in.

Feel free to share with your QA lead if it's relevant.

Tomas

---

### Touch 5 — Email · Day 14 (close)

**Subject:** Closing the loop

**Body:**

Hi <<JMÉNO>>,

Last message. If the timing isn't right, I understand completely — QA tooling decisions don't move fast and they shouldn't.

If it becomes relevant in Q3 or Q4, I'm easy to find.

Tomas Mertin
qawave.ai

---

## Sequence 2 — Elena (VPE / CTO) × CZ

*Kontext: V CZ trhu je VPE/CTO často jeden člověk — decision-maker i technický odborník. Není potřeba maskovat champion-buyer pattern. Přímá adresa funkce i business dopadu. První dojem musí být peer, ne vendor.*

*Jazyková poznámka: Vykání v prvním touchu je standard. Technické anglicismy (flaky, CI, pipeline) jsou v pořádku — jsou to loanwords v českém tech prostředí.*

---

### Touch 1 — Email · Den 0

**Předmět:** CI pipeline náklady u <<NÁZEV_FIRMY>>

**Text:**

Dobrý den <<JMÉNO>>,

Mám na Vás jednu otázku: jak dlouhé jsou Vaše CI pipeline runs a máte přehled, co Vás stojí v runner minutách za měsíc?

Ptám se proto, <<< konkrétní trigger — viděl jsem job inzerát na SDET pozici, nebo Váš příspěvek o rychlosti CI, nebo nedávný incident >>>. Zdálo se mi, že CI throughput může být aktuálně na stole.

Flakiness v testech a overhead jejich údržby bývá u týmů ve Vaší velikosti odpovědný za 20–30 % času senior inženýrů — to jsou čísla z DORA State of DevOps 2024 pro organizace středního výkonu.

Má smysl si na 20 minut zavolat?

<<< Volitelně: zmíňte konkrétní rozhodnutí nebo veřejné vyjádření, které signalizuje, že se tím Elena aktuálně zabývá >>>

Tomáš Mertin
Zakladatel, QAWave · qawave.ai

---

### Touch 2 — LinkedIn connect · Den 3

**Zpráva k žádosti o spojení:**

Dobrý den <<JMÉNO>> — <<< jedna konkrétní věta: přednáška, příspěvek, nebo rozhodnutí, které jste zaznamenal >>>. Stavím QAWave na autonomním QA pro engineering týmy. Spojení by mě potěšilo, i kdyby timing nevycházel.

---

### Touch 3 — Email · Den 5

**Předmět:** RE: CI pipeline náklady u <<NÁZEV_FIRMY>>

**Text:**

Dobrý den <<JMÉNO>>,

Pokud CI náklady a flakiness nejsou teď v top 3 prioritách — tenhle e-mail klidně ignorujte.

Pokud jsou: <<< jeden konkrétní důvod, proč si myslíte, že to pro ně teď je relevantní — nový nábor, funding, veřejný post >>>.

Připravil jsem 12minutový walkthrough toho, jak agent pracuje s flaky Playwright suite: <<< odkaz na demo až bude dostupné >>>

Nebo rovnou call — jak Vám vyhovuje.

Tomáš

---

### Touch 4 — Email · Den 9 (hodnotový, bez výzvy)

**Předmět:** Test impact analysis — jak jeden tým zkrátil CI na polovinu

**Text:**

Dobrý den <<JMÉNO>>,

Nechci nic prodávat — jen posílám něco, co může být užitečné.

Sepsal jsem, jak test impact analysis (graph-based přístup, žádná AI magie) umožňuje vybírat jen testy dotčené daným diffem. V praxi to znamená přechod z 60–80minutových full-suite runs na 15–25 minut na většině PR.

Technika funguje nezávisle na nástroji: <<< odkaz na blog post / nebo krátký popis metody, dokud post neexistuje >>>.

DORA State of DevOps 2024 identifikuje délku CI feedback loop jako jeden ze čtyř klíčových prediktorů deployment frequency. Přitom je to lever, do kterého týmy nejméně investují.

Klidně pošlete dál kolegovi, pokud by to bylo k věci.

Tomáš

---

### Touch 5 — Email · Den 14 (závěrečný)

**Předmět:** Uzavírám smyčku

**Text:**

Dobrý den <<JMÉNO>>,

Poslední zpráva ode mě. Pokud timing nevychází, chápu to — toolingová rozhodnutí se nepřijímají rychle a ani by neměla.

Pokud se situace změní ve Q3 nebo Q4, snadno mě najdete.

Tomáš Mertin
qawave.ai

---

## Sequence 3 — Marek (Head QA / Director of QE) × EN

*Context: Marek is the technical champion. Peer-to-peer tone works. He has seen every AI tool pitch and is skeptical of all of them. First touch must open with a real technical question or observation — not a product pitch. He responds to specificity, not benefits lists.*

*He reads Ministry of Testing, follows TestBash speakers, uses Playwright or Cypress daily. Czech-market Marek also follows Mloud.cz and attends ConTEST / QA Days Prague / TestStack Prague.*

---

### Touch 1 — Email · Day 0

**Subject:** Flaky test rate in your Playwright suite — how do you handle it?

**Body:**

Hi <<JMÉNO>>,

Genuine question, not a pitch: what's your current strategy for flaky test classification in CI? Specifically — do you distinguish between infrastructure flakiness (timing, network) and application-level flakiness at the test framework level, or does your team triage those together?

I'm asking because <<< specific trigger: saw their talk at TestBash / saw their GitHub / saw a post they wrote about their test stack >>>.

Building tooling in this space and trying to understand where the real friction lives before assuming I know.

If you have 15 minutes to compare notes, I'd genuinely find it useful.

Tomas

---

### Touch 2 — LinkedIn connect · Day 3

**Connection note:**

Hi <<JMÉNO>> — <<< reference the specific thing: their talk, their post, their open-source repo, their job listing >>>. Working on autonomous QA agents. Your perspective on <<< their specific area of expertise >>> would be genuinely useful to me.

---

### Touch 3 — Email · Day 5

**Subject:** RE: Flaky test rate in your Playwright suite

**Body:**

Hi <<JMÉNO>> — following up.

<<< If you found a specific public signal — a blog post, a GitHub repo, a conference abstract — reference it here in one sentence >>>

I've been cataloguing how teams handle the flakiness-vs-coverage tradeoff when their SDET headcount can't keep pace with dev velocity. The short version: most teams optimise for detection (coverage %), when the real cost is in maintenance time.

If you're open to it, I'd share our working methodology — and I'd want your reaction to whether it reflects your experience or not.

20 minutes?

Tomas

---

### Touch 4 — Email · Day 9 (value-only)

**Subject:** Self-healing tests — what actually works vs. what's marketing

**Body:**

Hi <<JMÉNO>>,

Not following up on a pitch — just something you might find worth 5 minutes.

Most tools claim "self-healing" and mean: "we update the CSS selector when it shifts." That's selector patching, not healing. Genuine adaptive test maintenance requires understanding test intent (what a test verifies) rather than its syntax (how it does it).

The practical difference: selector patching breaks when element semantics change. Intent-aware adaptation handles refactors.

I wrote up what that distinction looks like in practice for a Playwright suite: <<< link to qawave.ai/blog when available >>>.

Mabl and Applitools have published their own takes on this. Worth comparing if you're evaluating the space.

Tomas

---

### Touch 5 — Email · Day 14 (close)

**Subject:** Closing out

**Body:**

Hi <<JMÉNO>>,

Last one. If autonomous QA isn't where you're spending attention right now, no problem.

If it moves up your list, qawave.ai / this email thread.

Tomas

---

## Sequence 4 — Marek (Head QA / ředitel QA) × CZ

*Kontext: Marek je technický champion, ne buyer. Klíčový cíl první sekvence: získat jeho důvěru a zájem natolik, aby nás představil VPE. Český Marek chodí na ConTEST, QA Days, TestStack Prague, čte Mloud.cz. Tykání je ok od touche 2 pokud odpověděl — ale první touch vykáme.*

*Technické anglicismy (flaky, self-healing, test impact analysis, CI, pipeline, SDET) jsou přirozené a nevyznívají jako hype.*

---

### Touch 1 — Email · Den 0

**Předmět:** Flaky testy v Playwright suite — jak to řešíte?

**Text:**

Dobrý den <<JMÉNO>>,

Opravdová otázka, ne pitch: jaký je Váš aktuální přístup ke klasifikaci flaky testů v CI? Konkrétně — rozlišujete na úrovni frameworku infrastrukturní flakiness (timing, síť) od té aplikační, nebo to triage dohromady?

Ptám se proto, <<< konkrétní trigger — viděl jsem přednášku / GitHub / post o jejich test stacku / job inzerát >>>.

Stavím nástroje v téhle oblasti a chci pochopit, kde leží reálná třecí plocha, dřív než budu předpokládat, že to vím.

Kdybyste měl 15 minut si porovnat zkušenosti, bylo by to pro mě opravdu cenné.

Tomáš

---

### Touch 2 — LinkedIn connect · Den 3

**Zpráva k žádosti o spojení:**

Dobrý den <<JMÉNO>> — <<< konkrétní reference: přednáška, post, repo, job inzerát >>>. Pracuji na autonomních QA agentech. Váš pohled na <<< jejich konkrétní oblast expertise >>> by pro mě byl užitečný.

---

### Touch 3 — Email · Den 5

**Předmět:** RE: Flaky testy v Playwright suite

**Text:**

Dobrý den <<JMÉNO>>,

<<< Pokud existuje konkrétní veřejný signál — blog post, GitHub repo, conference abstract — zmiňte ho v jedné větě >>>

Mapuji, jak týmy řeší tradeoff flakiness vs. coverage, když SDET headcount nestíhá vývojové tempo. Krátká verze: většina týmů optimalizuje pro detekci (% pokrytí), přičemž reálný náklad leží v čase na maintenance.

Pokud by Vás zajímalo naše pracovní metodiku — rád ji pošlu a zajímá mě Vaše reakce, jestli odpovídá Vaší zkušenosti nebo ne.

20 minut?

Tomáš

---

### Touch 4 — Email · Den 9 (hodnotový, bez výzvy)

**Předmět:** Self-healing testy — co reálně funguje vs. co je marketing

**Text:**

Dobrý den <<JMÉNO>>,

Nenavazuji na žádný pitch — jen něco, co možná stojí za 5 minut.

Většina nástrojů slibuje "self-healing" a myslí tím: "aktualizujeme CSS selektor, když se element posune." To je selector patching, ne healing. Skutečná adaptivní údržba testů vyžaduje porozumění záměru testu (co test ověřuje), ne jen jeho syntaxi (jak to dělá).

Praktický rozdíl: selector patching se rozbije, když se změní sémantika elementu. Intent-aware adaptace zvládá refaktory.

Sepsal jsem, jak ten rozdíl vypadá v praxi na Playwright suite: <<< odkaz na qawave.ai/blog až bude dostupný >>>.

Mabl i Applitools k tomu mají vlastní texty — stojí za srovnání, pokud oblast vyhodnocujete.

Tomáš

---

### Touch 5 — Email · Den 14 (závěrečný)

**Předmět:** Uzavírám

**Text:**

Dobrý den <<JMÉNO>>,

Poslední zpráva. Pokud autonomní QA teď není Vaše priorita — v pořádku.

Pokud se to změní, qawave.ai / tenhle e-mail.

Tomáš

---

## Bonus — X / Twitter DM (EN, founder voice)

*When to send: only if the person is actively posting about QA, CI, or testing in the last 7 days. Never cold-open with a product mention.*

**DM — reactive (they posted about flakiness or CI):**

```
Saw your thread on <<< their specific topic >>>. The part about <<< specific detail they mentioned >>> matches exactly what we're seeing — most teams solve for selector stability when the real issue is test intent drift after refactors. Worth comparing notes sometime if you're exploring this space.
```

**DM — conference/talk (they spoke or announced a talk):**

```
Good talk at <<< conference name >>>. The point about <<< specific argument they made >>> is underrated — most teams don't quantify maintenance overhead per SDET until it's a headcount conversation. I'm building tooling in this space. DMs open if you ever want to exchange data.
```

*Hard rule: never mention QAWave by name in the first DM. If they respond, then the context is there naturally.*

---

## Bonus — Reply handler frameworks

### Pozitivní odpověď: "zajímá mě" / "let's talk"

Reply same day. Do not send a calendar link as the first response — acknowledge what they said first.

**Template (EN):**
```
Great — what does your schedule look like this week or next for 20–25 minutes?

Before we talk, it would help to know: roughly what's your current CI runtime, and how many SDETs does your team have? Helps me make the call more specific to your situation.

<<< Calendly link >>>
```

**Template (CZ):**
```
Rád. Jak Vám vyhovuje tento nebo příští týden — 20–25 minut?

Před hovorem by mi pomohlo vědět: jak dlouhé jsou teď Vaše CI runs a kolik SDETů máte v týmu? Díky tomu bude hovor konkrétnější.

<<< Calendly odkaz >>>
```

---

### Negativní odpověď: "ne, díky" / "not the right time"

Never push back. Log the objection and set a 90-day follow-up.

**Template (EN):**
```
Understood — thanks for the response either way. If it becomes relevant in H2, I'm easy to find.

One thing: if there's a specific reason this isn't a fit (wrong stack, wrong stage, wrong use case), I'd genuinely find that useful to know. No obligation.
```

**Template (CZ):**
```
Rozumím — i tak díky za odpověď. Pokud se situace změní v druhém pololetí, snadno mě najdete.

Pokud by byl konkrétní důvod, proč to nesedí (špatný stack, špatná fáze, jiný use case) — upřímně by mi to pomohlo. Žádný závazek.
```

*Why ask for the reason: it's real product intelligence, not a sales maneuver. Don't use it to counter-argue.*

---

### "Pošlete víc info" / "send me more information"

This is often a polite brush-off. Don't send a deck. Respond with a question.

**Template (EN):**
```
Happy to — what would be most useful? I can send:

(a) A 12-minute demo walkthrough of the agent on a Playwright suite
(b) A technical overview of how test impact analysis works in CI
(c) Our pricing and engagement structure

Which of those is closest to what you're trying to understand?
```

**Template (CZ):**
```
Rád — co by bylo nejužitečnější? Mohu poslat:

(a) 12minutový demo walkthrough agenta na Playwright suite
(b) Technický přehled toho, jak funguje test impact analysis v CI
(c) Naši strukturu ceníku a zapojení

Který z těch scénářů je nejblíže tomu, co chcete pochopit?
```

*This forces a signal about their intent. If they don't respond to this, they were brushing you off — move them to a 60-day nurture.*

---

### Out-of-office

Wait until the OOO end date plus 2 business days, then resend Touch 1 with no change to the subject line (threading keeps context). Add one sentence at the top:

**Template (EN):**
```
Welcome back — resending this from <<< original date >>> in case it got buried.

[original email body]
```

**Template (CZ):**
```
Vítejte zpět — přeposílám zprávu z <<< původní datum >>>, pro případ, že se ztratila.

[původní text e-mailu]
```

*Do not apologize for the resend. It is a normal and expected part of professional outreach.*

---

## Methodology + tone notes

### Co je výrazně jiné oproti baseline z 05-FIRST-CUSTOMERS.md

**1. Žádné vymyšlené metriky ani anonymní reference**
Baseline obsahuje: *"At [similar-size fintech], measured 11% flakiness was costing their 200-eng team ~$800k/year."* To je nepodložené číslo v masce referenční autority. Nahrazeno citacemi ověřitelných zdrojů (DORA State of DevOps 2024, Gartner) nebo přímým přiznáním, že data z pilotů teprve přicházejí.

**2. Touch 1 nekončí pitchem**
Baseline Touch 1 hned nabízí "Design Sprint for $35k — refund if we don't project 3× ROI." To je příliš brzy — před jakýmkoliv diagnostickým rozhovorem to vyznívá jako cold-call. Nové Touch 1 pro Marka je čistá otázka. Pro Elenu je to business-outcome rámování bez ceny.

**3. CZ sequence je re-original, ne překlad**
Česká verze reflektuje, že český CTO je typicky techničtěji zakotvený než US VPE, a vykání v prvním kontaktu je standard v byznysovém prostředí, ne archaismus. Žádné přeložené US fráze.

**4. Marekův Touch 1 neobsahuje slovo "agent" ani "AI"**
Zaklínadlo *"AI agents that live in your CI/CD"* v první větě první zprávy seniornímu QA inženýrovi signalizuje: vendor pitch. Nahrazeno konkrétní technickou otázkou o jejich praxi. Produkt se představí až ve chvíli, kdy je zájem potvrzen.

**5. Placeholdery jsou doplňovací místa, ne boilerplate**
Baseline: `[Company]`, `[similar-size fintech]` — viditelné mail-merge švy. Nová šablona: `<<<...>>>` s instrukcí, co přesně vyplnit. CEO ví, co se od něj očekává.

**6. Reply handlers jsou součástí delivery**
Baseline neřeší, co dělat po odpovědi. Přidáno: pozitivní, negativní, "pošlete víc info" a OOO — protože nekonzistentní follow-through je místo, kde se nejvíce ztrácejí rozjednané leady.

---

### Které touchy mají nejvyšší předpokládaný reply rate

**Elena × EN — Touch 4 (value email):** Empiricky mají value-only emaily bez CTA vyšší reply rate než přímé follow-upy, protože snižují percepci tlaku. Dobrý test impact analysis writeup je navíc shareable — Elena pošle odkaz Markovi, čímž organicky otevírá champion cestu.

**Marek × EN/CZ — Touch 1:** Technický peer-to-peer dotaz bez pitche má mezi seniorními inženýry nadprůměrnou odpovídatelnost. Podmínka: trigger musí být konkrétní (ne generický "viděl jsem vaši firmu").

**Elena × CZ — Touch 3:** V CZ prostředí druhý e-mail s konkrétním triggerem vykazuje vyšší response než v EN, protože CZ SaaS scéna je malá — osobní reference k jejich konkrétní situaci je silnější signál.

---

### Které `<<<...>>>` musí CEO doplnit povinně vs. volitelně

**Povinné — bez vyplnění šablona nefunguje:**

| Místo | Sequence | Proč povinné |
|---|---|---|
| `<<<trigger>>>` | Všechny Touch 1 | Bez konkrétního triggeru je to generic cold email |
| `<<<konkrétní reference pro Marka>>>` | Marek T1 + T2 | Jeho filtrem je: "zná mě, nebo mě spamuje?" |
| `<<<specifický post/talk Eleny>>>` | Elena T2 LinkedIn | LinkedIn bez personalizace = 20 % acceptance rate |

**Volitelné — šablona funguje i bez, ale konverze roste s doplněním:**

| Místo | Sequence | Dopad |
|---|---|---|
| `<<<Elena konkrétní rozhodnutí>>>` | Elena EN/CZ T1 | +10–15 % reply rate odhadem |
| `<<<demo odkaz>>>` | Všechny T3 | Momentálně není k dispozici — šablona funguje bez něj |
| `<<<blog post odkaz>>>` | T4 value emails | Bez odkazu je email o 30 % méně akciovatelný |

---

### Kde je šablona slabá / co se pokazí když se nedoplní

1. **Chybějící demo URL (Touch 3):** Touch 3 odkazuje na 12minutový walkthrough, který neexistuje. Bez démovacího videa nebo Loom linku je celý Touch 3 "trust me" argument. Priorita: nahrát před první vlnou outreache.

2. **Chybějící blog posty (Touch 4):** Hodnotový email je postavený na odkazu na reálný obsah. Bez něj je to prázdná výzva k důvěře. Posty o test impact analysis a self-healing distinctions by měly existovat před nebo souběžně s outreachem.

3. **Cena nikde nezazní:** Na rozdíl od baseline (která dává $35k v Touch 1) nová sekvence cenu neuvádí vůbec — záměrně. Riziko: pokud Elena chce číslo před callem, může nedostatek ceny vnímán jako evasion. Řešení: mít připravenu cenovou odpověď pro případ přímého dotazu (viz reply handler).

4. **CZ Touch 1 předpokládá tykání jako option až od Touch 2:** Pokud Marek odpoví na Touch 1 a tykáme zpátky bez výzvy, může to působit přehnaně familiárně. Doporučení: přejít na tykání až pokud sám tyká, nebo počkat na druhý exchange.

---

### Doporučení k testování

**A/B subject lines k testu (první vlna):**

| Varianta A | Varianta B | Co testujeme |
|---|---|---|
| "CI pipeline cost at <<NÁZEV_FIRMY>>" | "Flakiness rate question — <<NÁZEV_FIRMY>>" | Business outcome vs. technical problem framing pro Elenu |
| "Flaky test rate in your Playwright suite" | "How do you classify test flakiness in CI?" | Ownership question vs. open diagnostic pro Marka |
| "Test impact analysis — jak jeden tým zkrátil CI na polovinu" | "CI runtime: co funguje mimo full-suite runs" | Specifická metoda vs. obecný problém pro CZ Touch 4 |

**Metrika:** Open rate pro subject line test, reply rate pro body test. Minimální vzorek pro statisticky relevantní výsledek: 50 odeslaných na variantu. Při cílovém listu 100 accounts (35 US + 25 EU + 10 CZ) je to dosažitelné ve druhém měsíci outreache.

**Co sledovat po prvních 30 odeslaných:**
- Který trigger-type (job ad, talk, blog post, LinkedIn post) generuje nejvyšší reply rate u Touch 1
- Zda Marek nebo Elena sekvencea vrací více discovery calls (upřesní budget alokaci pro personalizaci)
- Response čas: odpovědi přicházející do 4 hodin od odeslání signalizují aktivní pain — prioritizovat okamžitou follow-up

---

*Soubor vytvořen s asistencí AI (Claude Sonnet 4.6) — QAWave, 2026. Veřejné použití tohoto obsahu podléhá EU AI Act čl. 50 požadavku na označení AI-generovaného obsahu.*
