# 01 — Learning Goals & Hypothesis Tests

> 5 hypotéz, které sprint validuje nebo vyvrací. Každá má (a) jasný měřitelný test, (b) kritérium úspěchu/neúspěchu, (c) co s tím pak.

---

## Proč hypotézy, ne otázky

Otevřené "co se dozvíme" je past — z 25 rozhovorů si vybereš to, co potvrzuje co už věříš. Hypotézy s předem definovanými kritérii (proč by byly vyvrácené) tomu brání.

Každá hypotéza je formulovaná jako **falsifiable claim** — když data ukáží opak, hypotéza padá a my jednáme jinak.

---

## H1 — Primary pain je flakiness, ne CI cost ani coverage

**Tvrzení:** U mid-market SaaS s 200–2000 FTE je nejostřeji pociťovaný QA problém **flaky test rate**, ne pomalé CI ani nízká coverage.

**Source:** `02-icp-personas.md` Elena/Marek, `qawave-web-strategy.md` §3 Michal scénář.

**Test:**
- V Q2 ("If you could wave a magic wand and fix one thing about QA tomorrow…"), zaznamenej top-of-mind problém.
- Tag jako: `flakiness` / `coverage` / `ci-speed` / `maintenance` / `team-skills` / `other`.

**Kritérium:**
- ≥ 12 z 25 (48 %) zmíní flakiness jako #1 nebo #2 → potvrzeno
- 4–11 (16–44 %) → smíšené, flakiness je jeden z pillarů ne dominantní
- < 4 (< 16 %) → vyvráceno, repositioning na skutečný #1 boláek

**Akce při vyvrácení:** Hero copy přepsat z "flakiness" na ten skutečný #1. Pillar 1 (Autonomous Discovery) možná není primary entry message.

---

## H2 — "Agentní AI" jako termín rezonuje se senior týmy

**Tvrzení:** Senior QA inženýři a VPE rozumí termínu "agentic" / "autonomous" a vidí v něm odlišení od "AI-assisted" tools (Copilot/Cursor/Mabl).

**Source:** `qawave-web-strategy.md` §1.1 positioning statement.

**Test:**
- V Q4 ("Have you tried AI-powered tools? What worked, what didn't?") sleduj, jestli respondent sám přejde na "ale agentní je něco jiného" / "to ale není autonomous" — bez že bys to zmínil ty.
- Pokud po Q4 sám nepřinese tu rozlišovačku, v Q5 řekneš: "Slyšeli jste pojem agentní AI / autonomous testing? Co tím rozumíte?"
- Tag odpověď: `understands_distinction` / `confused_with_chatgpt` / `dismissive_buzzword` / `never_heard`.

**Kritérium:**
- ≥ 14 z 25 (56 %) `understands_distinction` → potvrzeno
- 7–13 (28–52 %) → mix, je třeba edukace v copy
- < 7 (< 28 %) → vyvráceno, "agentic" je v rané fázi adoption curve, lepší jazyk je "autonomous AI testing" nebo dokonce konkrétní popis ("AI that explores apps without test scripts")

**Akce při vyvrácení:** Brand line "The Edge of QA Automation" zachovat, ale podpůrný copy přejít na deskriptivní formulace. Hero subhead přepsat.

---

## H3 — Český mid-market trh má dostatečnou velikost pro pre-seed traction

**Tvrzení:** V CZ + SK existuje ≥ 30 firem co pasují na ICP filtr (200–2000 FTE, B2B SaaS, QA budget). Z toho ≥ 5 jsou ochotny zaplatit $35k Design Sprint v ČR/EUR ekvivalentu.

**Source:** `qawave-web-strategy.md` §3 (CZ primary) + `02-icp-personas.md` (segmentace mid-market).

**Test:**
- `competitive-analyst` agent dodá CZ + SK seznam (cíl 10, fallback 7).
- Z těch oslovených → kolik responsí, kolik calls, kolik dostane do "willing to discuss pricing" stage.

**Kritérium:**
- 10 osloveno, ≥ 3 calls, ≥ 1 mentionuje fit pro Design Sprint → potvrzeno (CZ je viable bucket)
- < 3 calls nebo 0 zmínek pricingu → vyvráceno (CZ je nice-to-have, ale primary trakce musí jít přes DACH/UK/Nordics)

**Akce při vyvrácení:** Zachovat CZ landing page (důvěra signál pro lokální komunitu, recruiting, references), ale outbound capacity přesměrovat na DACH (15 → 25 firem v týdnu 2).

---

## H4 — Self-hosted / on-prem deployment je deal-breaker pro fintech a healthtech

**Tvrzení:** ≥ 60 % fintech a healthtech respondentů odmítne SaaS-only deployment a vyžaduje self-hosted runner / VPC deployment / source-code-stays-internal jako podmínku contractu.

**Source:** `02-icp-personas.md` Dr. Schmidt persona, prodejní zpráva.

**Test:**
- V Q5 (rozpočet) nebo organicky kdykoliv: "Pokud bychom šli dál, jaké jsou non-negotiable security/compliance požadavky?"
- Tag: `requires_self_hosted` / `prefers_self_hosted` / `saas_ok` / `not_relevant_yet`.

**Kritérium:**
- ≥ 6 z 10 fintech/healthtech respondentů `requires_self_hosted` → potvrzeno → architektura priority #1 pro Q3
- 3–5 / 10 → mixed, flexible deployment je nice-to-have ne must-have před LOI
- < 3 / 10 → vyvráceno, SaaS-first je možný

**Akce při potvrzení:** Než ship-neme product, self-hosted deployment story musí být dokumentovaná v `enterprise-page.md` před týdnem 8.

---

## H5 — Refund guarantee zavírá deals lépe než discount

**Tvrzení:** "Money-back guarantee if we don't project 3× ROI" generuje vyšší LOI commitment rate než equivalent discount (50 % off Design Sprint = $17.5k).

**Source:** `launch/05-FIRST-CUSTOMERS.md` Golden rule #4.

**Test:**
- A/B test v Touch 2/3 emails:
  - Variant A (refund): "Design Sprint $35k. If we don't project 3× ROI in 4 weeks, full refund."
  - Variant B (discount): "Design Sprint $17.5k (50 % off pro design partnery)."
- Stejný recipient pool, randomized split. Tracking: reply rate + "want to talk pricing" mention rate.

**Kritérium:**
- Variant A reply rate ≥ 1.3× Variant B → potvrzeno
- Variant A < Variant B → vyvráceno, discount má vyšší pull

**Akce při vyvrácení:** Pricing page přepsat na "design partner discount" jako primary, refund jako secondary trust signal.

---

## Auxiliary questions (sleduj, ale nejsou hypotéza)

Nejsou strukturované hypotézy, ale stojí za záznam:

- **Buying committee size** — kolik lidí v room of decision? Cíl: průměr napříč 25 calls.
- **Sales cycle from "interesting" → contract** — nejde změřit za 4 týdny, ale signal collect (typický mid-market deal: 3 měsíců? 6?).
- **Top 3 competitor mentions** — koho zmiňují jako alternative? Applitools? Mabl? "Build internally"? "Hire more SDETs"?
- **Trigger moment recency** — kolik z respondentů má production incident / new VPE / SOC 2 audit v posledních 6 měsících?
- **Open-source affinity** — chtěli by z agent definic open-source? GTM hook nebo distraction?

Tagované, ne testované — informuje pricing, packaging, content strategy.

---

## Anti-goals (co specificky NE chceme zjišťovat tímhle sprintem)

- **Konkrétní feature requests** — zatímco poslechneme, neprioritizujeme product backlog z 25 calls. Pre-seed nemá co buildit, dokud není positioning ostrý.
- **Investor signal** — nezeptáme se "would you invest?". Tahle sprint je customer, ne fundraising. Pokud někdo nabídne intro, vezmeme, ale neoptáme se.
- **Hire signal** — pokud respondent řekne "would love to work for you", flag-ni a později. Ne během discovery.

---

## Tracking template (per interview)

Každý zápis v `docs/discovery/interviews/YYYY-MM-DD_company_persona.md` má povinně:

```yaml
---
date: 2026-05-12
company: Acme s.r.o.
persona: Marek (Head of QA)
respondent_role: Senior SDET Lead
duration_minutes: 38
recording: yes / no / consented
follow_up_due: 2026-05-19
---

## Hypothesis tags

- H1 (flakiness primary pain): flakiness / coverage / ci-speed / maintenance / team-skills / other
- H2 (agentic understood): understands_distinction / confused / dismissive / never_heard
- H3 (CZ viability — only if CZ): high / medium / low / n.a.
- H4 (self-hosted req — only if fintech/health): requires / prefers / ok_saas / n.a.
- H5 (refund vs discount — only if A/B touched): preferred_refund / preferred_discount / didnt_engage

## Key quotes (verbatim)

> "..."

## Numbers gathered

- Team size: ?
- Flaky rate %: ?
- CI minutes/build: ?
- Annual QA budget range: ?
- Last production incident: ?

## Disposition

- Hot / Warm / Cold / Disqualified
- Next action + by when
```

---

## Kdo udržuje tenhle dokument

Tomáš. Po každém calle update tagy. Na konci týdne 2 a 4 statistický přehled v `02-tracker.md` summary section.
