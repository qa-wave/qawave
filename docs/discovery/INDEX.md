# Customer Discovery Sprint — Index

> **Goal:** 25 ICP interviews / 4 weeks. 5 falsifiable hypotheses, 3 design-partner LOIs.
>
> **Started:** sprint kick-off pending
> **Owner:** Tomáš (CEO)
> **Status:** prep complete, ready to execute
> **Source-of-truth doc:** [`00-sprint-overview.md`](./00-sprint-overview.md)

---

## Reading order

Pokud začínáš čtením tohohle adresáře, projdi v pořadí:

1. [`00-sprint-overview.md`](./00-sprint-overview.md) — proč sprint, struktura 4 týdnů, deliverables, anti-patterns *(5 min)*
2. [`01-learning-goals.md`](./01-learning-goals.md) — 5 hypotéz s kritérii pro confirm/refute *(7 min)*
3. [`05-target-companies.md`](./05-target-companies.md) — 50 firem (z toho top 25 v trackeru), profilované podle ICP *(skim, ~10 min)*
4. [`06-outreach-templates.md`](./06-outreach-templates.md) — 4 sekvence × 5 touchů × CZ/EN *(reference, ne číst end-to-end)*
5. [`03-interview-script.md`](./03-interview-script.md) — 7 otázek + persona add-ons *(přečíst před prvním callem)*
6. [`04-target-criteria.md`](./04-target-criteria.md) — Apollo / LinkedIn Sales Nav queries, scoring rubric *(reference)*
7. [`02-tracker.md`](./02-tracker.md) — live status 30 firem (25 + 5 buffer) *(update daily)*
8. `07-insights.md` — píše se až v týdnu 4 *(neexistuje)*
9. `interviews/` — jeden .md per call *(přidává se průběžně)*

## Co je hotovo (asset checklist)

- [x] Sprint plan + 5 hypothesis tests
- [x] Target list 50 firem (8 hot, 17 warm, 25 standard)
- [x] Top 25 v trackeru s persona assignment + region quotas (12 Marek / 13 Elena)
- [x] 5 buffer firem v rezervě
- [x] 4 outreach sekvence (Elena/Marek × CZ/EN), 20+ texty + reply handlers
- [x] Interview script CZ + EN s persona add-ons
- [x] Search queries pro Apollo / LinkedIn Sales Nav (5 templates)
- [x] Scoring rubric 1–10 (5 dimensí × 9 bodů)
- [x] GDPR + privacy hard rules

## Co teď chybí (akce před spuštěním sprintu)

- [ ] **Apollo.io account** — Basic plan $49/měs, 1 200 contacts/měs
- [ ] **LinkedIn Sales Navigator** — $99/měs (volitelné, ale 3× efektivnější filtrování)
- [ ] **Cal.com booking link** — `https://cal.com/qawave` musí být live se 45min discovery slot
- [ ] **Email infra ověření** — `tomas@qawave.ai` SPF/DKIM/DMARC pro Gmail (potvrdit přes mail-tester.com)
- [ ] **Apollo enrich top 30** — vyhledat konkrétní jména pro každý řádek v `02-tracker.md`
- [ ] **Demo video** — 2 min walkthrough qawave.ai pro Touch 3 (`copywriter` flag-nul jako blokující)
- [ ] **2 blog posty publikované** — Touch 4 value-only emaily odkazují na blog content (`copywriter` flag-nul)
- [ ] **Refund / discount A/B** — split rule pro H5 test (random allocation cca 50:50 v týdnu 1)

## Riziky známé teď

| Risk | Impact | Mitigation |
|---|---|---|
| Tech stack signály v target listu jsou ~60 % hypotézy (`[H]` flag) | Outreach personalization může chybit | Verify přes BuiltWith / StackShare před Touch 1 |
| 3 firmy možná pod ICP threshold (Cuvama, Luko, Swapfiets) | Mrhání outreach kapacity | Buffer firmy připravené (Alan, Accurx, Siilo doporučené `competitive-analyst`) |
| Touch 3 vyžaduje demo video, Touch 4 vyžaduje blog posty — neexistují | 40 % sekvence blokované | Buď ship-nout content paralelně s týdnem 1, nebo skip-nout Touch 3+4 a držet jen 1+2+5 |
| Apollo deliverability rate na cold business emails ~85 % | ~3 z 25 emails bounce | Email permutator + Hunter.io single lookup fallback |
| GDPR cold email — legitimate interest legal basis je defensible, ale ne 100 % bezrizika | Recipient complaint → spam list flag | Easy STOP opt-out, žádný mass-send (max 30/den/sender) |

## Souvisí s

- **Strategický kontext:** [`/qawave-web-strategy.md`](../../qawave-web-strategy.md) — positioning, voice, persona Michal
- **App context:** [`docs/app-context.md`](../app-context.md) — tech stack, brand rules
- **Startup playbook:** [`/Users/tm/workspaces/teams/startup-qa/INDEX.md`](../../../teams/startup-qa/INDEX.md) — full pre-seed roadmap
- **Outbound playbook (baseline):** [`/Users/tm/workspaces/teams/startup-qa/launch/05-FIRST-CUSTOMERS.md`](../../../teams/startup-qa/launch/05-FIRST-CUSTOMERS.md) — z čeho `06-outreach-templates.md` vychází

## Rozhodnutí čekající na Tomáše

Před spuštěním Touch 1:

1. **Cal.com link aktivovat?** Bez něj outreach Touch 1 nemá CTA.
2. **Apollo nebo manuální research?** Apollo $49/měs × 1 měsíc = $49 a ušetří 20+ h. Manual = zdarma ale time sink.
3. **A/B test refund vs. discount split?** Nebo jet jeden message a A/B-test až sprintu 2?
4. **Touch 3 a 4 odložit?** Nebo investovat 2 dny do produkce 1 demo video + 2 blog postů před Touch 1?
5. **CZ outreach jazyk:** Marek může reagovat lépe v CZ, Elena ve velkých firmách často interně mluví anglicky. Pravidlo: defaultně CZ pro CZ HQ, EN jako fallback?

## Kdy znovu navštívit tenhle dokument

- Po každém weekly review (`02-tracker.md` snapshot) — update "Co teď chybí" sekci
- V den 28 (sprint end) — finalize → archiv → otevřít `08-next-sprint.md`
