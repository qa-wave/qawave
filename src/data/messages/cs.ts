// ============================================================
// QAWave — Czech Message Dictionary
// Re-original copy. NOT a translation of en.ts.
// Voice: vykání, European directness, tech loanwords kept in EN.
// Pricing in EUR (~1 USD = 0.91 EUR, rounded to clean numbers).
// ============================================================

import type { Messages } from "./types";

export const cs: Messages = {
  // ----------------------------------------------------------
  // Meta / SEO
  // ----------------------------------------------------------
  meta: {
    title: "QAWave — AI agenti pro softwarové testování",
    description:
      "Vlastní AI agenti přímo ve vašem CI/CD. Generují testy, opravují flaky a triage bugy 24/7. Domluvte si 20minutový hovor.",
    keywords: [
      "AI test automatizace",
      "detekce flaky testů",
      "QA agenti",
      "automatizace testování AI",
      "Playwright agent",
      "generování testů CI/CD",
    ],
  },

  // ----------------------------------------------------------
  // Navigation
  // ----------------------------------------------------------
  nav: {
    links: [
      { label: "Produkt", href: "/product" },
      { label: "Zákazníci", href: "/customers" },
      { label: "Blog", href: "/blog" },
    ],
    cta: { label: "Domluvit hovor", href: "/book" },
    languageSwitcher: {
      en: "English",
      cs: "Čeština",
    },
  },

  // ----------------------------------------------------------
  // Hero
  // Tagline zůstává anglicky — je to brand line, ne překlad.
  // ----------------------------------------------------------
  hero: {
    badge: "Agentní AI pro QA engineering",
    headline: "Ride the AI wave in QA.",
    subheadline:
      "Stavíme vlastní AI agenty, kteří žijí ve vašem CI/CD — generují testy, léčí flaky a triage bugy 24/7. Pro engineering týmy, které chtějí stavět produkt, ne ladit test suite.",
    primaryCta: {
      label: "Domluvit 20minutový hovor",
      href: "/book",
    },
    secondaryCta: { label: "Přidat se na waitlist", href: "#waitlist" },
    trustPill:
      "Váš kód je váš. Vaše testy jsou vaše. My jen spouštíme agenty.",
  },

  // ----------------------------------------------------------
  // Built-with bar
  // ----------------------------------------------------------
  builtWith: {
    label: "Postaveno na špičkové AI infrastruktuře",
    badges: ["Anthropic", "Vercel", "Supabase", "Cloudflare", "Stripe"],
    trustedByLabel: "Důvěřují nám engineering týmy z",
    trustedByLogos: [],
  },

  // ----------------------------------------------------------
  // Problem statement
  // Čísla jsou stejná — jsou to průmyslová data, nezávisí na jazyce.
  // ----------------------------------------------------------
  problem: {
    headline: "Vaše test suite vás stojí víc, než si myslíte.",
    stats: [
      {
        icon: "Clock",
        number: "12 h",
        unit: "/ vývojář / týden",
        label: "ztracených kvůli flaky testům",
        supporting:
          "Průmyslový průměr. V týmu 100 vývojářů to odpovídá přibližně $500k/rok ztracené kapacity.",
      },
      {
        icon: "CircleDollarSign",
        number: "30–40 %",
        unit: "CI rozpočtu",
        label: "vyhodíte na opakované spuštění a nafouklé suite",
        supporting:
          "Forrester Wave: Continuous Automation Testing, Q4 2025. Náklady na nástroje jsou jen viditelná část.",
      },
      {
        icon: "UserX",
        number: "3–6 měs.",
        unit: "nábor",
        label: "na jednoho Senior SDET",
        supporting:
          "A až ho najdete, tráví přibližně 50 % času údržbou frameworků místo psaním nového pokrytí.",
      },
    ],
    closingLine: "Pokud vám to zní povědomě, pojďme si promluvit.",
  },

  // ----------------------------------------------------------
  // How it works — Generate / Heal / Triage
  // ----------------------------------------------------------
  howItWorks: {
    headline: "AI agenti, kteří skutečně dodají testy.",
    subheadline:
      "Žádné record-replay. Žádné screenshoty. Skutečný, udržovatelný test kód — generovaný, opravovaný a orchestrovaný AI, schválený vašimi inženýry.",
    pillars: [
      {
        icon: "Sparkles",
        emoji: "🧬",
        title: "Generate",
        body: "Z user stories, produkčního trafficu nebo PR diffs naši agenti píší Playwright / Cypress / API testy, které přežijí refactor a projdou vaším code review.",
      },
      {
        icon: "HeartPulse",
        emoji: "🩹",
        title: "Heal",
        body: "Selector drift, timing races, test data churn — agenti chytají regrese, navrhují fixy a mergují je, když je CI zelené. Vaši SDETs schvalují, nebabysitují.",
      },
      {
        icon: "Target",
        emoji: "🎯",
        title: "Triage",
        body: "Když CI selže, Bug Triager agent analyzuje logy, traces a diffy a navrhne root cause i assignee — do 90 sekund. Incident response začíná dřív, než pager zazvoní.",
      },
    ],
    cta: { label: "Jak agenti fungují", href: "/product" },
  },

  // ----------------------------------------------------------
  // Comparison table
  // Názvy konkurentů zůstávají v EN — jsou to vlastní jména.
  // ----------------------------------------------------------
  comparison: {
    headline: "Code-first. Na míru. Vaše.",
    columns: ["QAWave", "Applitools", "Mabl", "in-house SDET"],
    rows: [
      {
        feature: "Code-first výstup",
        values: ["yes", "partial", "no", "yes"],
      },
      {
        feature: "Testy žijí ve vašem Git repozitáři",
        values: ["yes", "no", "no", "yes"],
      },
      {
        feature: "Vlastní agenti pro váš stack",
        values: ["yes", "no", "no", "no"],
      },
      {
        feature: "Nepřetržitý provoz 24/7",
        values: ["yes", "yes", "yes", "no"],
      },
      {
        feature: "Žádný vendor lock-in",
        values: ["yes", "no", "no", "yes"],
      },
      {
        feature: "AI-native architektura",
        values: ["yes", "partial", "partial", "no"],
      },
      {
        feature: "Self-hosted / VPC možnost",
        values: ["yes", "partial", "no", "yes"],
      },
      {
        feature: "Živý provoz za 4 týdny",
        values: ["yes", "no", "partial", "no"],
      },
    ],
    cta: { label: "Podrobné srovnání", href: "/comparisons" },
    legend: { yes: "ano", partial: "částečně", no: "ne" },
  },

  // ----------------------------------------------------------
  // Agentic moat
  // "40 agents" je ověřitelný interní údaj (docs/agent-team.md).
  // ----------------------------------------------------------
  agenticMoat: {
    headline: "Agenty nejen stavíme. Provozujeme na nich celou firmu.",
    body: [
      "QAWave řídí jeden člověk (Tomas) a 40 AI agentů. Obchodní outreach, marketing, zákaznická podpora, code review, doručování testů — všechno na stejné agentní architektuře, kterou stavíme pro zákazníky.",
      "To není marketing. Je to důkaz.",
      "Pokud naši agenti zvládají řídit B2B firmu s reálnými zákazníky a reálnými quality bary — zvládnou řídit i váš QA tým.",
    ],
    stat: "40 agentů. 1 zakladatel.",
    cta: {
      label: "Číst: Jak jsem postavil QAWave na 40 agentech",
      href: "/blog/40-agents",
    },
  },

  // ----------------------------------------------------------
  // Pricing teaser
  // Ceny v EUR (~0.91 USD/EUR, zaokrouhleno na čistá čísla).
  // Design Sprint $35k → €32 000
  // Implementation from $120k → from €110 000
  // Continuous Ops from $8k/mo → from €7 300/měsíc → zobrazit from €7 000/měsíc
  // Finální rozhodnutí o zaokrouhlení na CEO.
  // ----------------------------------------------------------
  pricing: {
    headline: "Začněte malý. Škálujte s výsledky.",
    tiers: [
      {
        id: "design-sprint",
        emoji: "🎯",
        name: "Design Sprint",
        price: "€32 000",
        priceUnit: "pevná cena",
        duration: "4 týdny",
        description:
          "Audit vašeho QA stacku. Návrh vlastních agentů. Proof-of-concept na vašich 3 nejproblematičtějších test suitech. ROI report na konci. Vrácení peněz, pokud projektovaný ROI nedosáhne 3×.",
        badge: "Garance vrácení peněz",
        cta: {
          label: "Zahájit Design Sprint",
          href: "/book?tier=design-sprint",
        },
      },
      {
        id: "implementation",
        emoji: "🏗️",
        name: "Implementace",
        price: "od €110 000",
        priceUnit: "pevný rozsah",
        duration: "12 týdnů",
        description:
          "3–7 vlastních agentů nasazených ve vašem CI/CD, s plnou integrací a zaškolením týmu. Přechod na Continuous Ops po skončení projektu.",
        cta: {
          label: "Probrat rozsah",
          href: "/book?tier=implementation",
        },
      },
      {
        id: "continuous-ops",
        emoji: "🔄",
        name: "Continuous Ops",
        price: "od €7 000",
        priceUnit: "/ měsíc",
        duration: "průběžně",
        description:
          "Agenti spravovaní, evaluovaní a upgradovaní každý měsíc. Měsíční review, SLA 4 hodiny, kvartální výkonnostní report.",
        cta: {
          label: "Více informací",
          href: "/pricing",
        },
      },
    ],
    cta: { label: "Kompletní ceník", href: "/pricing" },
  },

  // ----------------------------------------------------------
  // Testimonial placeholder
  // ----------------------------------------------------------
  testimonial: {
    enabled: false,
    quote: "",
    author: "",
    role: "",
    company: "",
  },

  // ----------------------------------------------------------
  // FAQ accordion
  // ----------------------------------------------------------
  faq: {
    headline: "Časté otázky",
    items: [
      {
        q: "Hostujete náš zdrojový kód?",
        a: "Ne. Naši agenti běží uvnitř vašeho CI/CD — GitHub Actions, GitLab CI, Jenkins, CircleCI. Test kód generují přímo do vašeho repozitáře. Váš zdrojový kód zůstává u vás. Pro enterprise zákazníky jsou k dispozici self-hosted runnery nebo VPC konfigurace.",
      },
      {
        q: "Jak předcházíte halucinacím agentů?",
        a: "Každý výstup agenta prochází naším eval harnesem — sadou očekávaných chování testovaných každou noc. Výstupy označené jako regrese jsou blokovány dřív, než se dostanou k vám. V pilotních projektech jsme měřili míru regresí pod 0,5 % ze všech výstupů agentů.",
      },
      {
        q: "Co se stane, pokud QAWave zanikne?",
        a: "Každý test, který agenti vygenerují, je Playwright / Cypress / Jest kód commitnutý do vašeho repozitáře. Agenti jsou kontejnerizovaní a konfigurace je vaše. Pokud bychom někdy skončili, vaše testy i pipeline pokračují bez nás.",
      },
      {
        q: "Není to jen wrapper kolem Claude?",
        a: "Ne. Orchestrujeme 40+ specializovaných agentů, každý s vlastními prompty, přístupy k nástrojům a eval baselinami. Hodnotou je design agentů, doménové znalosti v QA a kontinuální evaly — nikoli přístup k modelu.",
      },
      {
        q: "SOC 2 / GDPR / EU AI Act?",
        a: "SOC 2 Type I probíhá (cíl Q3 2026). GDPR splněno od prvního dne — data hostovaná v EU, DPA k dispozici na vyžádání. Požadavky EU AI Act splníme před termínem v srpnu 2026. Compliance dokumenty jsou k dispozici zájemcům pod NDA.",
      },
      {
        q: "Máme vlastní QA tým. Proč nezaměstnat další SDETs?",
        a: "Vaše SDETs si nechte — agenti je zesilují, nenahrazují. Typický výsledek: vaši seniorní inženýři přejdou od údržby frameworků ke strategii testování, architektuře a pokrytí edge cases. Rutinní práci přebírají agenti.",
      },
      {
        q: "Kolik skutečně stojí AI compute v mé ceně?",
        a: "Pro středně velký engagement utratíme přibližně $2–5k/měsíc za volání modelového API na váš účet. Tato částka je zahrnuta v ceně vašeho tieru — žádné usage overages, žádné překvapení na faktuře.",
      },
      {
        q: "Můžeme začít jen s jedním typem agenta, ne se všemi třemi?",
        a: "Ano. Většina zákazníků začíná s detekcí flakiness (nejrychlejší ROI) a přidává generování testů a triage postupně. Design Sprint přesně nastaví rozsah pro váš stack.",
      },
    ],
  },

  // ----------------------------------------------------------
  // Final CTA
  // ----------------------------------------------------------
  finalCta: {
    headline: "Dost bylo bojů s flaky testy?",
    subheadline:
      "20 minut. Bez prodejní prezentace. Jen váš QA problém, přímý pohled na věc a zjištění, jestli jsme pro vás vhodní.",
    primaryCta: { label: "Domluvit discovery hovor", href: "/book" },
    secondaryCta: {
      label: "Nebo odebírat měsíční newsletter",
      href: "/newsletter",
    },
  },

  // ----------------------------------------------------------
  // Footer
  // "Made in Prague" zůstává — factual claim.
  // ----------------------------------------------------------
  footer: {
    columns: [
      {
        title: "Produkt",
        links: [
          { label: "Funkce", href: "/product" },
          { label: "Integrace", href: "/product#integrations" },
        ],
      },
      {
        title: "Firma",
        links: [
          { label: "O nás", href: "/about" },
          { label: "Blog", href: "/blog" },
          { label: "Zákazníci", href: "/customers" },
          { label: "Kariéra", href: "/careers" },
          { label: "Press", href: "/about#press" },
        ],
      },
      {
        title: "Právní",
        links: [
          { label: "Podmínky užití", href: "/legal/terms" },
          { label: "Ochrana soukromí", href: "/legal/privacy" },
          { label: "DPA", href: "/legal/dpa" },
          { label: "Sub-processors", href: "/legal/subprocessors" },
          { label: "Transparentnost AI", href: "/legal/ai-transparency" },
          { label: "Bezpečnost", href: "/legal/security" },
        ],
      },
      {
        title: "Kontakt",
        links: [
          { label: "X (Twitter)", href: "https://x.com/qawave" },
          { label: "LinkedIn", href: "https://linkedin.com/company/qawave" },
          { label: "GitHub", href: "https://github.com/qawave" },
          { label: "E-mail", href: "mailto:hello@qawave.ai" },
        ],
      },
    ],
    copyright: "© 2026 QAWave s.r.o. · Made in Prague · Postaveno na AI",
    legalNote: "IČO / DIČ CZ01234567",
  },
};
