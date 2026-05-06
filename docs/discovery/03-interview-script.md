# 03 — Interview Script

> 45min discovery call structure, dual-language (CZ + EN), branched per persona. Vychází z `launch/05-FIRST-CUSTOMERS.md` "Discovery call script", ale rozšířeno pro QAWave-specific hypothesis tagging (`01-learning-goals.md`).

---

## Před každým callem (5 min příprava)

1. **Otevři interview soubor** — `docs/discovery/interviews/YYYY-MM-DD_company_persona.md` (vyplň front-matter z `02-tracker.md`)
2. **5min recon** — LinkedIn profil, jejich firma blog/GitHub, posledních 3 jejich postů
3. **Trigger signal recall** — proč jsi je oslovil? (z `05-target-companies.md`)
4. **3 personas-tailored questions** připravené nad rámec base 7 (viz §6 níže)
5. **Recording consent string** přichystaný (CZ + EN)

## Tools setup

- **Cal.com** booking link — primární
- **Recording:** Zoom Cloud Record nebo Loom — explicit consent first
- **Note-taking:** otevřený interview .md během callu, druhý monitor
- **Backup recorder** — telefon, audio only, pokud Zoom selže

---

## 1. Opening (5 min)

### EN
> "Thanks for taking 45 min, [first name]. Couple of housekeeping items first — would you be okay if I record this call? It's just for my own notes; nothing leaves my drive without your written sign-off, and I'll send you the transcript afterwards if you want it."
>
> *(wait for explicit yes/no)*
>
> "Quick agenda: I'd love to ask you 7 questions about how QA looks at [company name] today — what hurts, what works, what you've tried. Then 5 min for me to show you what we're building, and 5 min for your questions. Sound fair?"

### CZ
> "Díky za 45 minut, [křestní jméno]. Pár organizačních věcí — souhlasíte, kdybych si call nahrával? Slouží to jen mým poznámkám, nic z toho neopustí mé úložiště bez vašeho písemného souhlasu. Pokud chcete, pošlu vám potom transkript."
>
> *(počkej na explicitní ano/ne)*
>
> "Rychlá agenda: rád bych vám položil 7 otázek o tom, jak teď ve [firma] vypadá QA — co bolí, co funguje, co jste zkoušeli. Pak 5 minut na to, abych ukázal, co stavíme my, a 5 minut na vaše otázky. Vyhovuje?"

**Pokud nesouhlasí s recordingem:** vezmi to v pohodě, používej note-taking only. Ne-recordované interviews jsou validní data.

---

## 2. The 7 Questions

> Pořadí má smysl. Q1 odhalí current state, Q2 emocionální #1 pain, Q3 monetizuje, Q4 mapuje konkurenci, Q5 kvalifikuje budget, Q6 buying committee, Q7 timeline.

### Q1 — Current state

**EN:**
> "Walk me through your QA stack today. What testing frameworks, what CI, who's on the QA team and how big is it?"

**CZ:**
> "Provedl byste mě vaším QA stackem? Jaké testovací frameworky, jaké CI, kdo je v QA týmu a jak je velký?"

**Active listening for:**
- Konkrétní jména (Cypress / Playwright / Selenium / Postman / k6 / Datadog Synthetics)
- CI platforma + cca minut na build
- Team size + manuální vs. automatizace ratio
- Hate-words ("legacy", "duct tape", "framework Petr napsal před třema lety", "nikdo tomu nerozumí")

**Tag:** `tech_stack: <list>` v interview .md

---

### Q2 — The frustration

**EN:**
> "If you could wave a magic wand and fix one thing about QA tomorrow, what would it be?"

**CZ:**
> "Kdybyste měl kouzelný proutek a mohl zítra opravit jednu věc na vašem QA, co by to bylo?"

**Pause — tahle otázka potřebuje ticho. Counted 5 sekund silence po jejich první odpovědi, často přidají druhý ostřejší pain.**

**Active listening for:**
- První věc co řeknou — TOP-OF-MIND signal pro **H1**
- Tag: `H1: flakiness / coverage / ci-speed / maintenance / team-skills / other`
- Druhý problém co dodají v silence — sekundární pain
- Emocionální energie — naštvaný tón = silnější signal než klidný

**Pokud řekne "to je hodně věcí":** požádej o seřazení top 3.

---

### Q3 — Cost / quantification

**EN:**
> "How many engineer-hours per week do you estimate disappear into flaky test debugging, framework maintenance, or test writing? Both ballpark and breakdown is helpful."

**CZ:**
> "Kolik engineer-hodin týdně podle vás zmizí do debugování flaky testů, údržby frameworku nebo psaní testů? Hrubý odhad i breakdown je užitečný."

**Active listening for:**
- Conservative numbers (10–20 h/týden = budget rationalization)
- Aggressive numbers (40+ h = serious pain)
- "Nikdy jsem to neměřil" → flag pro hypothesis: pain je instinct, ne measured

**Math out loud po jejich odpovědi:**
> "Tj. zhruba [X] hodin × [Y]€ avg cost = [Z]€ ročně. Sedí to vašemu vnímání?"

**Tag:** `cost_estimate_eur: <X>` (jejich číslo, ne tvé)

---

### Q4 — Prior attempts

**EN:**
> "Have you tried AI-powered testing tools? Mabl, Applitools, Testim, GitHub Copilot for tests, anything like that? What worked, what didn't?"

**CZ:**
> "Zkoušeli jste AI testovací nástroje? Mabl, Applitools, Testim, GitHub Copilot pro testy, něco podobného? Co fungovalo, co ne?"

**Active listening for:**
- **H2 signal:** sami od sebe rozliší "ale agentní AI je něco jiného než [tool]"? → `H2: understands_distinction`
- Konkurence: které nástroje měli nejvíce / nejmíž rádi a proč
- Anti-pattern signály: "Je to black box", "selektory se rozbíjí", "udělali z nás otroky tooling-firmy"
- "Žádné nezkoušeli" → naivní persona, edukace > positioning

**Pokud nepřinese rozlišovačku sami:**
> "Slyšel jste pojem 'agentic' nebo 'autonomous testing'? Co tím rozumíte?"

→ tag `H2: understands_distinction / confused / dismissive / never_heard`

---

### Q5 — Budget context

**EN:**
> "If we found a solution that delivered [outcome they cared about most in Q2/Q3], what range of budget would be realistic for next quarter? $50k? $200k? $500k?"

**CZ:**
> "Kdybychom našli řešení které doručí [konkrétní outcome z Q2/Q3], jaká cenová hladina je pro vás reálná na další kvartál? 50 tisíc? 200 tisíc? 500 tisíc EUR?"

**Active listening for:**
- Konkrétní range (uvádí budget reality)
- "To bych musel jít na VPE" → mapuje buying committee (potvrzení Marek = champion ne closer)
- "Závisí na ROI calc" → je-otevřený, BANT B+T qualified
- "Nemáme rozpočet" → buď anti-ICP, nebo budget freeze (zaznamenat trigger window)

**Pokud sales cycle rozhovor vyplyne, přidej:**
> "Pokud bychom udělali pilot za $35k Design Sprint s 3× ROI guarantee — refund pokud nedoručíme — funguje to s vaším procurement procesem?"

→ **H5 A/B test placement.** V první polovině sprintu nabízej tuto frázi (refund). V druhé polovině alternuj s "$17.5k design partner discount" → tracking která verze generuje silnější LOI signal.

---

### Q6 — Decision process

**EN:**
> "If you wanted to bring in a tool like this, who else needs to be in the room? VPE, security, procurement, finance? And how long does that typically take from 'this looks promising' to 'signed PO'?"

**CZ:**
> "Pokud byste takový nástroj chtěl přivést, kdo další musí být u toho? VPE, security, nákup, finance? A jak dlouho to typicky trvá od 'tohle vypadá zajímavě' k 'podepsaná smlouva'?"

**Active listening for:**
- Buying committee size — průměr napříč 25 calls je auxiliary metric
- Procurement window — 2 týdny vs. 6 měsíců
- Security gate timing — kdy v procesu je involve-en CISO

**Tag:** `committee_size: <N>`, `cycle_estimate_weeks: <N>`

---

### Q7 — Timeline / urgency

**EN:**
> "Last one — is fixing this a this-quarter problem, a this-half problem, or a someday problem?"

**CZ:**
> "Poslední — je tohle problém na tenhle kvartál, tahle pololetí, nebo problém 'jednou'?"

**Active listening for:**
- "This quarter" → hot, prioritize
- "This half" → warm, follow-up cadence
- "Someday" → cold, drop-in nurture

**Tag:** `urgency: hot / warm / cold`

---

## 3. Demo (5 min — strict)

> Pre-seed demo není product demo. Je to **show, not tell** o pillarech.

**Sekvence:**
1. Sdílej screen — `qawave.ai` homepage hero (10 s kontext)
2. Skoč rovnou na **konkrétní příklad** který se týkal jejich Q2 odpovědi:
   - Pokud řekli flakiness → ukaz Pillar 2 Intelligent Maintenance + krátký mock interface
   - Pokud řekli coverage → ukaz Pillar 1 Autonomous Discovery
   - Pokud řekli compliance → ukaz Pillar 3 Engineering-Grade Governance
3. Konec demo: "To je tah, kam to směřuje. Co z toho nedává smysl pro vás?"

**Hard rule:** tahle 5 min není o uzavření dealu. Je to **objection harvesting**. Každý "ale jak…" je gold pro `07-insights.md`.

---

## 4. Close (5 min)

### Pokud zazněly hot signály (Q5 mention budget v range, Q7 "this quarter"):

**EN:**
> "Based on what you shared, I think the Design Sprint could be a fit. Here's what it is: 4 weeks fixed-fee at $35k, we work on your 3 worst test suites, you get a working agent + benchmark report. If we don't project 3× ROI by end of week 4, full refund. Want me to send you a one-page scope doc?"

**CZ:**
> "Na základě toho, co jste řekl, by Design Sprint mohl být fit. Co to je: 4 týdny fixed-fee za 35 tisíc, pracujeme na vašich 3 nejhorších test suitech, dostanete fungujícího agenta + benchmark report. Pokud do konce 4. týdne nedoručíme 3× ROI, plný refund. Mám vám poslat jednostránkový scope?"

→ Tag `LOI_signal: yes/no` v interview .md

### Pokud warm:

**EN:**
> "Sounds like timing isn't right yet. When it does become urgent, I'd love to be top-of-mind. Can I send you a monthly newsletter with relevant case studies and benchmarks? And — is there a peer in your network who's hitting this problem harder than you right now?"

**CZ:**
> "Zní to, že timing zatím není. Až to bude urgentní, rád bych byl top-of-mind. Můžu vám posílat měsíční newsletter s relevantními case studies? A — je v vašem networku někdo, kdo tenhle problém řeší víc naléhavě než vy?"

→ Newsletter opt-in + asking for intro = 2 actions

### Pokud cold:

**EN:**
> "Honestly, sounds like QAWave isn't the right fit for you right now. Two questions before we wrap: what would have to change in your situation for it to become a fit? And is there a tool or vendor you'd recommend instead, given what you know about the space?"

**CZ:**
> "Upřímně, vypadá to, že QAWave teď není ten správný fit. Dvě otázky než skončíme: co by se muselo změnit ve vaší situaci, aby to fit bylo? A doporučil byste místo toho nějaký jiný tool nebo vendora, podle toho co o té oblasti víte?"

→ Disqualification reason zaznamenat. Reference path zaznamenat.

---

## 5. Po callu (10 min finalize)

1. Zápis do interview .md — front-matter, all 7 question tags, key quotes (verbatim, nezkracovat), numbers gathered
2. **Tracker update** — `02-tracker.md` row update + status emoji
3. **Thank-you email** — pošli do 60 minut po callu (CZ/EN podle calling jazyka):
   > "Díky za 45 min. Tady je [transkript / shrnutí v 5 bodech]. Slíbený [scope doc / case study / newsletter signup link]. Ozvu se [přesně kdy]. Tomáš"
4. **Calendar follow-up** — set reminder na slíbené datum

---

## 6. Persona-specific add-ons

> Použij **navíc** k 7 base otázkám, ne místo. Maximum +3 otázky per call (časový rozpočet 5 min).

### Pokud Elena (VPE):

- "Co je vaše DORA score teď, a kam ji chcete dostat za 6 měsíců?"
- "Jak je QA tým propojený s SRE / observability týmem? Same reporting line?"
- "Pokud byste mohl vyřazit jednou pozici z eng org, ale dostat AI agenta která by tu práci dělala 5× rychleji — kterou pozici by to byla?"

### Pokud Marek (Head of QA):

- "Kolik vašeho framework-time per week vs. strategy/coaching time?"
- "Kdo je v týmu nejvíc proti AI tools a proč?"
- "Pokud bych vám teď dal volně-zařadit 1 SDET do týmu, koho bys hledal? (Jaká hloubka skill gap?)"

### Pokud Dr. Schmidt (CISO):

- "Self-hosted runner — VPC deployment je hard requirement, soft requirement, nebo nice-to-have?"
- "Jaký je váš threshold pro 'code-leaving-perimeter' AI tools? GitHub Copilot ano nebo ne?"
- "Můžete sdílet sample AUP / DPA template kterou requirujete od vendorů?"

### Pokud Tomáš (Staff Eng):

- "Co je největší DX problém u testování ve vašem stacku?"
- "Self-serve onboarding — kolik time-to-value je pro vás max ještě akceptovatelný? 1 hodina? 1 den? 1 týden?"
- "Open-source agent definice — relevantní distribučně, nebo distraction?"

---

## 7. Když interview "ujede"

**Talkativní persona** — chválí, ale neodpovídá konkrétně:
> "Můžu se vrátit k otázce — konkrétně kolik hodin v týdnu na flaky testy?"

**Defensivní persona** — krátké odpovědi, evidently nervous:
> "Hej, žádný osobní judgment, zkusím to méně forenzně. Co je teď ve vašem QA světě nejvíc 'ah crap' moment?"

**Pitch-mode persona** — zkusí prodat **tobě** jejich produkt:
> "Rád si poslechnu 5 minut na konci. Nejdřív mě zajímá vaše vlastní QA praxe — protože pokud najdu shape pain pointu, rád vás propojím s lidmi co jsem potkal."

**Off-topic persona** — povídá o investorech, o své kariéře, ne o QA:
> "Vrátíme se k QA — pokud máme čas. Čekám 7 minut na první 3 otázky, takže se k nim vraťme."

---

## 8. Známky kvalitního interview

✅ Aspoň 3 konkrétní čísla (team size, flaky %, CI minutes, budget range, last incident date)
✅ Aspoň 2 verbatim quotes worth noting v `07-insights.md`
✅ H1 + H2 tagged (povinně)
✅ H4 tagged pokud fintech/healthtech
✅ Disposition jasná (hot/warm/cold/disqualified)
✅ Next action explicit (call back / send doc / drop)

❌ "Nice chat, no notes" = nepoužitelný interview, neukládá se mezi 25.

---

## 9. Kdy přerušit interview

- Persona je clear anti-ICP (firma má 50 FTE, není rozpočet) — zkrať na 20 min, poděkuj, nech kontakt na networking lvl
- Persona evidently lhal v intake (řekl "VPE" v calendly, ale je junior dev) — krátký polite wrap, disqualifikace v trackeru
- Sales objection mode od minuty 5 ("co mi prodáváte? proč si platím za poslouchání pitche?") — okamžitě reframe: "neprodávám, učím se. Co byste si přál abych se zeptal?"

---

## 10. Hard rules — psaní `07-insights.md` po sprintu

Pravidla pro interpretaci interviews na konci sprintu:

1. **Quotes verbatim, ne paraphrase.** Nezasahuj do tonality.
2. **Patterns potřebují minimum 5 confirmations.** 1–2 mentions = anekdoty, ne pattern.
3. **Counter-examples flag-uj.** Pokud 12 mentionuje flakiness ale 8 mentionuje něco jiného, nezamlčuj těch 8.
4. **Hypothesis verdict explicitní.** H1: confirmed / partially confirmed / refuted — bez vatovaní.
5. **Decision section** na konci — co s tím výsledkem konkrétně uděláme. Bez decision je `07-insights.md` jenom report.
