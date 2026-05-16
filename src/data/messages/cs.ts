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
      { label: "Platforma", href: "/product" },
      { label: "Open Source", href: "/products" },
      { label: "Zákazníci", href: "/customers" },
      { label: "Blog", href: "/blog" },
    ],
    cta: { label: "Domluvit 20min hovor", href: "/book" },
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
      label: "Domluvit 20min hovor",
      href: "/book",
    },
    secondaryCta: { label: "Jak to funguje", href: "/product" },
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
          "Průmyslový průměr dle DORA State of DevOps Report 2024. V týmu 100 vývojářů to odpovídá přibližně $500k/rok ztracené kapacity.",
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
          "Na základě dat z LinkedIn a interních benchmarků. A až ho najdete, tráví přibližně 50 % času údržbou frameworků místo psaním nového pokrytí.",
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
        body: "Selector drift, timing races, test data churn — agenti chytají regrese a navrhují fixy jako PR. Vaši SDETs reviewují a schvalují. Přestanou babysitovat, začnou strategizovat.",
      },
      {
        icon: "Target",
        emoji: "🎯",
        title: "Triage",
        body: "Když CI selže, Bug Triager agent analyzuje logy, traces a diffy a navrhne root cause i assignee — v řádu sekund, ne hodin. Incident response začíná dřív, než pager zazvoní.",
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
    columns: ["QAWave", "Applitools", "Mabl", "QA Wolf"],
    rows: [
      {
        feature: "Code-first výstup",
        values: ["yes", "partial", "no", "partial"],
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
        values: ["yes", "yes", "yes", "yes"],
      },
      {
        feature: "Žádný vendor lock-in",
        values: ["yes", "no", "no", "no"],
      },
      {
        feature: "AI-native architektura",
        values: ["yes", "partial", "partial", "no"],
      },
      {
        feature: "Self-hosted / VPC možnost",
        values: ["yes", "partial", "no", "no"],
      },
      {
        feature: "Živý provoz za 4 týdny",
        values: ["yes", "no", "partial", "partial"],
      },
    ],
    cta: { label: "Celý produkt v detailu", href: "/product" },
    legend: { yes: "ano", partial: "částečně (omezené)", no: "ne" },
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
        q: "Kolik stojí AI compute?",
        a: "Pro středně velký engagement utratíme přibližně $2–5k/měsíc za volání modelového API na váš účet. Tato částka je zahrnuta v ceně spolupráce — žádné usage overages, žádné překvapení na faktuře.",
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
    primaryCta: { label: "Domluvit 20min hovor", href: "/book" },
    newsletter: {
      label: "Nebo odebírat měsíční newsletter",
      placeholder: "Pracovní email",
      submit: "Odebírat",
      success: "Přihlášeno. Vítejte na palubě.",
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
          { label: "Platforma", href: "/product" },
          { label: "Open Source", href: "/products" },
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
    copyright: "© 2026 QAWave s.r.o. · Made in Prague · Built on AI",
    legalNote: "Registrace probíhá",
  },

  // ----------------------------------------------------------
  // Product page
  // ----------------------------------------------------------
  productPage: {
    headline: "AI agenti, kteří skutečně dodají testy.",
    subheadline:
      "Žádné record-replay. Žádné screenshoty. Skutečný, udržovatelný test kód — generovaný, opravovaný a orchestrovaný AI, schválený vašimi inženýry.",
    capabilities: {
      title: "Tři schopnosti. Jedna architektura agentů.",
      items: [
        {
          icon: "Sparkles",
          title: "Generate",
          body: "Z user stories, produkčního trafficu nebo PR diffs naši agenti píší Playwright / Cypress / API testy, které přežijí refactor a projdou vaším review.",
          details: [
            "Čtou váš codebase, chápou záměr, píší testy podle vašich vzorů",
            "Podpora Playwright, Cypress, Jest i vlastních API frameworků",
            "Každý vygenerovaný test prochází vaším stávajícím review procesem",
            "Cílí na netestované cesty jako první — maximalizují pokrytí na test",
          ],
        },
        {
          icon: "HeartPulse",
          title: "Heal",
          body: "Selector drift, timing races, test data churn — agenti chytají regrese a navrhují fixy jako PR. Vaši SDETs reviewují a schvalují.",
          details: [
            "Chápou záměr testu, ne jen selektory — opravují na správné úrovni",
            "Navrhují patche jako PR — vaši SDETs schvalují, nebabysitují",
            "Sledují vzorce flakiness napříč běhy a identifikují systémové problémy",
            "Snižují false-positive CI selhání, která blokují váš deploy pipeline",
          ],
        },
        {
          icon: "Target",
          title: "Triage",
          body: "Když CI selže, Bug Triager agent analyzuje logy, traces a diffy a navrhne root cause i assignee — v řádu sekund, ne hodin.",
          details: [
            "Koreluje selhání testů s nedávnými commity a změnami infrastruktury",
            "Navrhuje root cause a automaticky přiřazuje správnému inženýrovi",
            "Učí se z minulých řešení a zlepšuje přesnost v čase",
            "Integrace se Slack, Jira, Linear pro okamžité notifikace",
          ],
        },
      ],
    },
    integrations: {
      title: "Funguje s vaším stackem.",
      subtitle:
        "Naši agenti se napojí na vaši stávající CI/CD a testovací infrastrukturu. Žádný rip-and-replace.",
      categories: [
        {
          name: "CI/CD",
          items: [
            "GitHub Actions",
            "GitLab CI",
            "Jenkins",
            "CircleCI",
            "Azure DevOps",
          ],
        },
        {
          name: "Test frameworky",
          items: ["Playwright", "Cypress", "Jest", "Vitest", "pytest"],
        },
        {
          name: "Jazyky",
          items: [
            "TypeScript",
            "JavaScript",
            "Python",
            "Java",
            "Go",
            "C#",
          ],
        },
        {
          name: "Issue tracking",
          items: ["Jira", "Linear", "GitHub Issues", "Azure Boards"],
        },
      ],
    },
    cta: { label: "Domluvit 20min hovor", href: "/book" },
  },

  // ----------------------------------------------------------
  // About page
  // ----------------------------------------------------------
  aboutPage: {
    headline: "Jeden zakladatel. Čtyřicet agentů.",
    founderStory: [
      "Jsem Tomas. Přes 10 let v software engineeringu — shippování produktů, rozbíjení buildů a sledování, jak QA týmy tonou v údržbě, zatímco dev velocity kolem nich zrychluje.",
      "V roce 2025 jsem začal stavět AI agenty pro své vlastní QA workflow. Fungovalo to. Pak jsem postavil agenty na řízení celé firmy — sales, marketing, code review, zákaznická podpora. To fungovalo taky.",
      "QAWave je výsledek: studio, které staví vlastní AI agenty pro váš QA tým, poháněné stejnou agentní architekturou, na které běží naše vlastní firma. We eat our own dog food.",
      "Sídlo v Praze. Sloužíme engineering týmům po celé Evropě a v USA.",
    ],
    mission: {
      title: "Proč tohle existuje.",
      body: "Engineering týmy shippují rychleji než kdykoli dřív. QA nestíhá se skripty a manuálními procesy. Odpovědí není víc lidí — jsou to agenti, kteří rozumí vašemu codebase, vašim vzorům a vašemu quality baru. My ty agenty stavíme.",
    },
    values: [
      {
        title: "Upřímnost jako default",
        body: "Žádné vymyšlené metriky. Žádné falešné case studies. Když nemáme data, řekneme to. Naše sekce s testimonials je prázdná, dokud ji nezaplní skutečný zákazník.",
      },
      {
        title: "Code-first, vždy",
        body: "Každý test, který naši agenti vygenerují, je skutečný, přezkoumatelný kód ve vašem repozitáři. Žádné proprietární formáty, žádný vendor lock-in, žádné black boxy.",
      },
      {
        title: "Agenti zesilují, nenahrazují",
        body: "Vaši SDETs jsou cenní. Přesuneme je od údržby frameworků ke strategii testování. Rutinní práci přeberou agenti.",
      },
    ],
    cta: { label: "Domluvit 20min hovor", href: "/book" },
  },

  // ----------------------------------------------------------
  // Customers page
  // ----------------------------------------------------------
  customersPage: {
    headline: "Zákazníci",
    subheadline:
      "Engineering týmy, které důvěřují agentům QAWave ve svém CI/CD.",
    emptyState: {
      title: "Design partner pipeline se formuje.",
      body: "Aktivně jednáme s engineering týmy po celé Evropě. Žádná falešná loga, žádné vymyšlené case studies. Až náš první design partner shipne, jeho příběh bude tady — s jeho svolením.",
    },
    designPartner: {
      title: "Staňte se design partnerem.",
      benefits: [
        "4týdenní Design Sprint za zvýhodněných podmínek",
        "Přímý přístup k zakladateli po celou dobu spolupráce",
        "Ovlivněte architekturu agentů pro váš stack",
        "Publikovaná case study (pokud chcete) s plnou redakční kontrolou",
        "Přednostní přístup k novým schopnostem agentů",
      ],
    },
    cta: { label: "Přihlásit se jako design partner", href: "/book" },
  },

  // ----------------------------------------------------------
  // Careers page
  // ----------------------------------------------------------
  careersPage: {
    headline: "Zaměstnáváme 0 lidí.",
    subheadline: "A tady je proč.",
    body: [
      "QAWave řídí jeden člověk a 40 AI agentů. Není to personální omezení — je to architektonické rozhodnutí.",
      "Každá funkce, která by tradičně vyžadovala zaměstnance — psaní obsahu, code review, zákaznický outreach, doručování testů, kvalifikace leadů — je v rukou specializovaného agenta s vlastními prompty, přístupy k nástrojům a eval baselinami.",
      "Tohle je náš moat a zároveň proof of concept. Pokud naše agentní architektura zvládne řídit B2B firmu s reálnými zákazníky a reálnými quality bary, zvládne řídit i váš QA tým.",
      "Nerekrutujeme. Ale vždy hledáme design partnery, kteří chtějí vidět, co dokáže 40 agentů pro jejich engineering tým.",
    ],
    agentRoles: [
      {
        title: "Content Marketer Agent",
        body: "Plánuje obsahový kalendář, řídí distribuci napříč kanály, sleduje engagement metriky.",
      },
      {
        title: "Copywriter Agent",
        body: "Píše landing copy, emailové sekvence a reklamy v češtině i angličtině.",
      },
      {
        title: "Code Reviewer Agent",
        body: "Kontroluje každou TSX/TS změnu z hlediska výkonu, přístupnosti a idiomatického React 19.",
      },
      {
        title: "SEO Specialist Agent",
        body: "Keyword research a on-page optimalizace pro QA + AI testing termíny na CZ i EN trhu.",
      },
      {
        title: "Competitive Analyst Agent",
        body: "Sleduje Applitools, Mabl, QA Wolf, Functionize, TestRigor. Aktualizuje diferenciační matici.",
      },
      {
        title: "QA Expert Agent",
        body: "Validuje technické claimy, pomáhá s thought leadership obsahem a přesností case studies.",
      },
    ],
    cta: { label: "Staňte se raději design partnerem", href: "/book" },
  },

  // ----------------------------------------------------------
  // Book page
  // ----------------------------------------------------------
  bookPage: {
    headline: "Domluvte si 20minutový discovery hovor.",
    subheadline:
      "Žádná prodejní prezentace. Žádné demo na toy aplikaci. Jen váš QA problém, přímý pohled na věc a zjištění, jestli jsme pro vás vhodní.",
    expectations: [
      {
        icon: "Clock",
        title: "20 minut, maximálně",
        body: "Respektujeme váš kalendář. Pokud potřebujeme víc času, domluvíme follow-up.",
      },
      {
        icon: "MessageSquare",
        title: "Nejdřív vaše problémy",
        body: "Zeptáme se na váš stack, bolesti s test suite a co jste zkoušeli. Pak vám upřímně řekneme, jestli vám můžeme pomoct.",
      },
      {
        icon: "FileText",
        title: "Žádné závazky",
        body: "Žádné smlouvy, žádné commitments. Pokud je match, společně navrhneme Design Sprint.",
      },
    ],
    form: {
      name: "Vaše jméno",
      email: "Pracovní email",
      company: "Firma",
      role: "Vaše pozice (nepovinné)",
      message: "Jaká je vaše největší QA výzva? (nepovinné)",
      submit: "Odeslat žádost o hovor",
      success: "Odesláno. Ozveme se do 4 hodin.",
      error: "Něco se pokazilo. Zkuste nám napsat přímo na email.",
    },
    contact: {
      title: "Raději email?",
      email: "hello@qawave.ai",
      note: "Obvykle odpovídáme do 4 hodin během CET pracovní doby.",
    },
    cta: { label: "hello@qawave.ai", href: "mailto:hello@qawave.ai" },
  },

  // ----------------------------------------------------------
  // Blog page
  // ----------------------------------------------------------
  blogPage: {
    headline: "Blog",
    subheadline:
      "Technické deep-dives o agentním QA, AI testování a řízení firmy na 40 agentech.",
    emptyState:
      "Další články se připravují. Odebírejte newsletter, ať vám nic neunikne.",
    posts: [
      {
        slug: "40-agents",
        title: "40 agentů. 1 zakladatel. Tak řídím QAWave.",
        date: "10. května 2026",
        readingTime: "8 min čtení",
        excerpt:
          "QAWave nemá zaměstnance. Má jednoho člověka a 40 AI agentů. Tady je architektura, selhání i to, co skutečně funguje.",
        body: [
          "QAWave jsem založil v roce 2025 s hypotézou: pokud AI agenti dokážou psát, testovat a reviewovat kód — dokážou řídit celou firmu?",
          "O rok později je odpověď: ano, z větší části. QAWave řídí jeden člověk (já, Tomas) a 40 specializovaných AI agentů. Žádní zaměstnanci. Žádní kontratoři. Žádní outsourcovaní SDRs. Stejná agentní architektura, kterou prodáváme zákazníkům, je architektura, na které běží naše firma.",
          "Není to myšlenkový experiment. Je to produkce.",
          "## Roster agentů",
          "Každá byznysová funkce, která by tradičně vyžadovala zaměstnance, je v rukou dedikovaného agenta. Každý agent má vlastní systémové prompty, specifický přístup k nástrojům (MCP servery, API, file systém) a eval baseline, které definují, jak vypadá 'dobrý výstup'.",
          "Aktuální roster:",
          "**Revenue a růst:** Content Marketer (obsahový kalendář, distribuce, repurposing), Copywriter (CZ + EN copy pro landing, emaily, reklamy), SEO Specialist (keyword research, on-page optimalizace), Blog Writer (long-form technický obsah), Customer Retention (onboarding sekvence, QBR příprava).",
          "**Produkt a engineering:** Code Reviewer (TSX/TS změny — výkon, a11y, idiomatický React 19), QA Expert (validuje technické claimy, přesnost thought leadershipu), Frontend Designer (vizuální specifikace pro Next.js + Tailwind komponenty), Technical Writer (case studies, dokumentace, API reference).",
          "**Strategie a ops:** Chief of Staff (routuje práci mezi agenty, denní digest, eskalace), Brand Guardian (audituje veškerý copy proti brand guidelines před publikací), Competitive Analyst (sleduje Applitools, Mabl, QA Wolf, Functionize, TestRigor).",
          "To je 12 pojmenovaných agentů pro řízení firmy. Zbývajících ~28 jsou QA delivery agenti — skutečný produkt, který prodáváme zákazníkům.",
          "## Co skutečně funguje",
          "**Produkce obsahu škáluje okamžitě.** Před agenty znamenal blog post blokaci 4–6 hodin. Teď nastíním tezi (3 odrážky), Blog Writer agent vyprodukuje draft, Brand Guardian ho zkontroluje proti voice guidelines, SEO Specialist ho optimalizuje. Moje role je redakční úsudek: reprezentuje tohle to, čemu skutečně věříme? To zabere 30 minut.",
          "**Code review je konzistentnější než lidé.** Code Reviewer agent kontroluje každou TSX změnu proti stejnému 14bodovému checklistu: výkonové vzory, porušení a11y, React 19 idiomy, použití Tailwind v4 tokenů. Neunaví se v pátek odpoledne. Nepřeskočí a11y check, protože je to 'jen malá změna'.",
          "**Competitive intelligence je vždy aktuální.** Competitive Analyst agent monitoruje pět konkurentů denně. Když Applitools shipne novou funkci nebo QA Wolf změní pricing, vím to do hodin — ne když o tom někdo tweetne.",
          "## Co (zatím) nefunguje",
          "**Úsudkové rozhodnutí.** Agenti nedokážou rozhodnout, zda pursuit zákaznický segment, změnit pricing nebo pivotovat positioning. Mohou zkoumat a doporučovat, ale human-in-the-loop pro strategická rozhodnutí je nezpochybnitelný. Tohle je by design, ne omezení.",
          "**Budování vztahů.** Discovery call s VP of Engineering se nedá delegovat. Agent může připravit brief, prozkoumat stack prospekta a navrhnout follow-up emaily — ale 20minutový rozhovor, kde se buduje důvěra? To jsem já.",
          "**Nová kreativní práce.** Agenti excelují v produkci obsahu v rámci zavedených vzorů. Ale první verze nového messaging frameworku, brand refresh, nový koncept sekce — to vyžaduje lidský kreativní úsudek. Agenti iterují a zdokonalují; lidé originují.",
          "## Eval harness",
          "Jak řídíte 40 agentů bez ztráty kvality? Stejně jako řídíme QA agenty pro zákazníky: eval harnesy.",
          "Každý agent má dataset očekávaných chování. Blog Writer je například evaluován na: přesnost technických claimů (žádné halucinované benchmarky), soulad s brand voice (žádná zakázaná slova), strukturální kvalitu (jasná teze, podpůrné důkazy, akční závěr). Tyto evaly běží každou noc.",
          "Když výstup agenta regresuje — řekněme, že Copywriter začne používat 'vzrušující' (zakázané slovo v našich brand guidelines) — je to chyceno dřív, než se obsah dostane ke mně. Eval blokuje výstup a nahlásí ho.",
          "Tohle je identické s tím, jak naši QA agenti fungují pro zákazníky. Eval harness je produkt.",
          "## Proč to záleží pro váš QA tým",
          "Pokud 40 agentů dokáže řídit B2B firmu s reálnými zákazníky, reálnými quality bary a reálnými revenue targety — dokážou řídit i váš QA tým.",
          "Stejné vzory platí: specializovaní agenti s doménovou znalostí, eval harnesy, které chytají regrese, human-in-the-loop pro úsudková rozhodnutí. Rozdíl je v rozsahu. Pro vás jde o generování testů, detekci flakiness a CI triage. Pro nás jde o všechno.",
          "We eat our own dog food. To není tagline — je to architektura.",
          "## Vyzkoušejte to",
          "Pokud vás zajímá, jak se to aplikuje na váš stack, domluvte si 20minutový hovor. Žádná prodejní prezentace. Jen váš QA problém, můj upřímný pohled a zjištění, jestli vám naši agenti mohou pomoct.",
        ],
      },
    ],
  },

  // ----------------------------------------------------------
  // Products page
  // ----------------------------------------------------------
  productsPage: {
    headline: "Produkty",
    subheadline:
      "Open-source nástroje a platformy od QAWave. Stejná engineering kvalita, kterou přinášíme do našich agentních služeb.",
    products: [
      {
        slug: "theridion",
        name: "Theridion",
        tagline: "Moderní platforma pro API testování",
        description:
          "Open-source desktopová aplikace pro celý API lifecycle — REST, GraphQL, gRPC a SOAP. Funkční testování, kontraktní testování, zátěžové testování a bezpečnostní skenování v jednom nástroji. Souborové projekty, git-friendly, keyboard-first.",
        status: "Pre-alpha",
        stack: ["Tauri", "React", "TypeScript", "Python", "FastAPI"],
        features: [
          "REST, GraphQL, gRPC a SOAP v jednom nástroji",
          "Vestavěné zátěžové testování (Locust) a bezpečnostní skenování (ZAP)",
          "Souborové projekty — žijí ve vašem Git repozitáři",
          "Nativní desktopová aplikace pro macOS, Linux, Windows",
          "Monaco editor s substitucí proměnných",
          "Open source, žádná telemetrie, žádný lock-in",
        ],
        cta: { label: "Zobrazit na GitHubu", href: "https://github.com/qawave/theridion" },
      },
      {
        slug: "zornik",
        name: "Zorník",
        tagline: "SDLC monitoring dashboard",
        description:
          "White-label dashboard, který sjednocuje signály z verzování, CI/CD, testů, releasů, observability a feedbacku do jednoho pohledu. Postaveno pro vývojáře, PM, testery i koncové uživatele. Role-based přístup, real-time stav všech prostředí.",
        status: "Pilot",
        stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind", "Radix UI"],
        features: [
          "Sjednocený pohled na všechny SDLC signály",
          "Čtyři dashboardy: vývojář, PM, tester, koncový uživatel",
          "Real-time monitoring stavu prostředí",
          "Role-based přístup (viewer / admin)",
          "White-label ready pro enterprise zákazníky",
          "Nasaditelný na Vercel nebo self-hosted",
        ],
        cta: { label: "Požádat o demo", href: "/book" },
      },
    ],
  },

  // ----------------------------------------------------------
  // Legal pages
  // ----------------------------------------------------------
  legal: {
    terms: {
      title: "Podmínky užití",
      lastUpdated: "9. května 2026",
      intro:
        "Tyto Podmínky užití upravují vaše využívání služeb QAWave poskytovaných společností QAWave s.r.o.",
      sections: [
        {
          heading: "1. Služby",
          body: [
            "QAWave poskytuje služby vývoje, nasazení a údržby vlastních AI agentů pro zajištění kvality softwaru. Služby jsou dodávány na základě individuálních popisů práce (SOW) dohodnutých mezi QAWave a zákazníkem.",
            "Všechny služby jsou poskytovány tak, jak jsou. Úrovně služeb, dodávky a termíny jsou definovány v příslušném SOW.",
          ],
        },
        {
          heading: "2. Duševní vlastnictví",
          body: [
            "Veškerý testovací kód vygenerovaný agenty QAWave je commitován do repozitáře zákazníka a je vlastnictvím zákazníka. QAWave si zachovává vlastnictví své agentní architektury, promptů, eval harnesů a proprietárního toolingu.",
            "Zákazníci udělují QAWave přístup ke svému codebase výhradně za účelem dodání dohodnutých služeb. Tento přístup je kdykoli odvolatelný.",
          ],
        },
        {
          heading: "3. Platební podmínky",
          body: [
            "Poplatky za Design Sprint jsou fakturovány předem. Poplatky za implementaci jsou fakturovány po milnících dle SOW. Poplatky za Continuous Ops jsou fakturovány měsíčně předem.",
            "Všechny faktury jsou splatné do 30 dnů od vystavení. Pozdní platby nesou úrok 1,5 % měsíčně.",
          ],
        },
        {
          heading: "4. Refundační politika",
          body: [
            "Design Sprint zahrnuje garanci vrácení peněz: pokud je projektovaný ROI vypočtený ve finální zprávě nižší než 3×, celý poplatek je vrácen do 30 dnů.",
            "Za dokončenou práci se jiné refundace neposkytují.",
          ],
        },
        {
          heading: "5. Omezení odpovědnosti",
          body: [
            "Celková odpovědnost QAWave dle jakéhokoli SOW nepřesáhne poplatky zaplacené zákazníkem za příslušné období spolupráce.",
            "QAWave neodpovídá za nepřímé, následné nebo náhodné škody, včetně ušlého zisku nebo dat.",
          ],
        },
        {
          heading: "6. Ukončení",
          body: [
            "Kterákoli strana může ukončit Continuous Ops spolupráci s 30denní písemnou výpovědí. Design Sprint a implementační spolupráce se řídí podmínkami příslušného SOW.",
            "Po ukončení QAWave poskytne přechodový plán a zajistí, že veškerý vygenerovaný testovací kód a konfigurace jsou přístupné v repozitáři zákazníka.",
          ],
        },
        {
          heading: "7. Rozhodné právo",
          body: [
            "Tyto podmínky se řídí právem České republiky. Veškeré spory budou řešeny příslušnými soudy v Praze.",
          ],
        },
      ],
    },

    privacy: {
      title: "Ochrana soukromí",
      lastUpdated: "9. května 2026",
      intro:
        "QAWave s.r.o. se zavazuje chránit vaše soukromí. Tato politika popisuje, jak shromažďujeme, používáme a chráníme vaše osobní údaje v souladu s GDPR.",
      sections: [
        {
          heading: "1. Správce údajů",
          body: [
            "QAWave s.r.o., registrovaná v České republice. Kontakt: privacy@qawave.ai.",
          ],
        },
        {
          heading: "2. Jaké údaje shromažďujeme",
          body: [
            "Kontaktní údaje: jméno, emailová adresa, název firmy, pracovní pozice — poskytnuté při rezervaci hovoru, přihlášení k newsletteru nebo kontaktování.",
            "Údaje o užívání: anonymizovaná analytika o interakci s qawave.ai, sbíraná prostřednictvím analytiky respektující soukromí.",
            "Zákaznická data: přístup ke zdrojovému kódu a CI/CD logům je zpracováván výhradně pro dodání smluvních služeb a není ukládán po skončení spolupráce.",
          ],
        },
        {
          heading: "3. Jak vaše údaje používáme",
          body: [
            "K dodání smluvních QA služeb. K odpovědi na dotazy a plánování hovorů. K zasílání newsletteru (s výslovným souhlasem, odhlášení kdykoli). K vylepšení našeho webu a služeb.",
          ],
        },
        {
          heading: "4. Ukládání a bezpečnost dat",
          body: [
            "Všechna data jsou hostována v EU (Frankfurt, Německo) na infrastruktuře Vercel a Supabase. Používáme šifrování při přenosu (TLS 1.3) i v klidu (AES-256). Přístup k zákaznickým datům je omezen pouze na autorizovaný personál.",
          ],
        },
        {
          heading: "5. Vaše práva",
          body: [
            "Dle GDPR máte právo na: přístup k osobním údajům, opravu nebo výmaz, vznesení námitky, přenositelnost dat a podání stížnosti u Úřadu pro ochranu osobních údajů (ÚOOÚ).",
            "K uplatnění těchto práv kontaktujte privacy@qawave.ai.",
          ],
        },
        {
          heading: "6. Doba uchování",
          body: [
            "Kontaktní údaje: po dobu obchodního vztahu plus 3 roky. Zákaznická data: smazána do 90 dnů od ukončení spolupráce, pokud není dohodnuto jinak. Newsletter: do odhlášení.",
          ],
        },
        {
          heading: "7. Cookies",
          body: [
            "qawave.ai používá pouze nezbytné cookies pro fungování webu. Nepoužíváme sledovací cookies ani cookies třetích stran pro reklamu.",
          ],
        },
      ],
    },

    dpa: {
      title: "Smlouva o zpracování dat",
      lastUpdated: "9. května 2026",
      intro:
        "Tato Smlouva o zpracování dat (DPA) je součástí smlouvy o poskytování služeb mezi QAWave s.r.o. (Zpracovatel) a zákazníkem (Správce).",
      sections: [
        {
          heading: "1. Rozsah zpracování",
          body: [
            "QAWave zpracovává zákaznická data výhradně za účelem dodání smluvních služeb QA agentů. Zpracovatelské činnosti zahrnují: čtení zdrojového kódu pro generování testů, analýzu CI/CD logů pro triage a přístup k testovacím prostředím pro validaci výstupů agentů.",
          ],
        },
        {
          heading: "2. Sub-zpracovatelé",
          body: [
            "QAWave využívá omezený počet sub-zpracovatelů, uvedených na qawave.ai/legal/subprocessors. Zákazníci budou informováni 30 dní před přidáním nového sub-zpracovatele.",
          ],
        },
        {
          heading: "3. Bezpečnostní opatření",
          body: [
            "Všechna data jsou šifrována při přenosu i v klidu. Přístup je omezen na bázi need-to-know. QAWave udržuje postupy reakce na bezpečnostní incidenty a oznámí zákazníkovi do 72 hodin jakékoli potvrzené narušení dat.",
          ],
        },
        {
          heading: "4. Přenos dat",
          body: [
            "Veškeré zpracování probíhá v rámci EU (Frankfurt, Německo). Pokud by jakékoli zpracování vyžadovalo přenos mimo EU, QAWave zajistí odpovídající záruky (Standardní smluvní doložky).",
          ],
        },
        {
          heading: "5. Právo auditu",
          body: [
            "Zákazníci mohou auditovat soulad QAWave s touto DPA po přiměřeném upozornění. QAWave poskytne veškerou potřebnou dokumentaci a přístup k prokázání souladu.",
          ],
        },
        {
          heading: "6. Výmaz dat",
          body: [
            "Po ukončení smlouvy o poskytování služeb QAWave smaže všechna zákaznická data do 90 dnů, pokud jejich uchování nevyžaduje zákon. Zákazníci mohou kdykoli požádat o dřívější výmaz.",
          ],
        },
      ],
    },

    subprocessors: {
      title: "Sub-zpracovatelé",
      lastUpdated: "9. května 2026",
      intro:
        "QAWave využívá následující sub-zpracovatele k dodání služeb. Tento seznam je aktualizován při změnách. Zákazníci jsou informováni 30 dní před přidáním nového sub-zpracovatele.",
      sections: [
        {
          heading: "Infrastruktura",
          body: [
            "Vercel Inc. — Hosting aplikací a edge síť. Lokace: EU (Frankfurt). Účel: hosting webu a aplikací.",
            "Supabase Inc. — Databáze a autentizace. Lokace: EU (Frankfurt). Účel: ukládání dat.",
            "Cloudflare Inc. — CDN a DDoS ochrana. Lokace: Globální (data zpracovávána v EU). Účel: bezpečnost a výkon trafficu.",
          ],
        },
        {
          heading: "AI poskytovatelé",
          body: [
            "Anthropic PBC — Poskytovatel AI modelu (Claude). Lokace: USA (data zpracovávána dle DPA, nulové ukládání dat). Účel: pohon QA agentů.",
          ],
        },
        {
          heading: "Obchodní operace",
          body: [
            "Stripe Inc. — Zpracování plateb. Lokace: EU. Účel: fakturace a inkaso.",
            "Porkbun LLC — Doručování emailů (SMTP). Lokace: USA. Účel: transakční email.",
          ],
        },
      ],
    },

    aiTransparency: {
      title: "Transparentnost AI",
      lastUpdated: "9. května 2026",
      intro:
        "V souladu s EU AI Act QAWave zveřejňuje následující informace o našem využití AI systémů.",
      sections: [
        {
          heading: "Používané AI systémy",
          body: [
            "QAWave nasazuje specializované AI agenty pro zajištění kvality softwaru. Tito agenti využívají velké jazykové modely (primárně Anthropic Claude) ke generování testovacího kódu, analýze selhání testů a navrhování oprav.",
            "Naši agenti jsou klasifikováni jako AI systémy s omezeným rizikem dle EU AI Act. Asistují lidským inženýrům — veškeré výstupy agentů vyžadují lidskou kontrolu a schválení před sloučením do produkčního kódu.",
          ],
        },
        {
          heading: "Lidský dohled",
          body: [
            "Každý výstup agenta podléhá lidské kontrole. Vygenerované testy jsou předloženy jako pull requesty ke schválení inženýrem. Navržené opravy jsou přezkoumány před sloučením. Návrhy triage jsou poradní — o odpovědi rozhodují inženýři.",
            "Zákazníci si zachovávají plnou kontrolu nad tím, které akce agentů jsou automatizované versus vyžadující schválení.",
          ],
        },
        {
          heading: "AI-generovaný obsah na tomto webu",
          body: [
            "Části obsahu tohoto webu byly navrženy nebo upřesněny s asistencí AI. Veškerý publikovaný obsah je před zveřejněním přezkoumán a schválen člověkem.",
            "Dle článku 50 EU AI Act toto zveřejnění splňuje požadavek transparentnosti pro AI-generovaný obsah v komerční komunikaci.",
          ],
        },
        {
          heading: "Data a trénink",
          body: [
            "QAWave netrénuje AI modely. Používáme komerčně dostupné modely (Anthropic Claude) prostřednictvím jejich API. Zákaznický kód a data nejsou nikdy použity k tréninku modelů třetích stran. Na všechny API interakce se vztahuje politika nulového ukládání dat společnosti Anthropic.",
          ],
        },
        {
          heading: "Kontakt",
          body: [
            "Pro otázky o našich AI praktikách: ai@qawave.ai. Pro obecné dotazy ohledně soukromí: privacy@qawave.ai.",
          ],
        },
      ],
    },

    security: {
      title: "Bezpečnost",
      lastUpdated: "9. května 2026",
      intro:
        "QAWave bere bezpečnost vašeho kódu a dat vážně. Zde je, jak je chráníme.",
      sections: [
        {
          heading: "Bezpečnost infrastruktury",
          body: [
            "Všechny služby jsou hostovány v EU (Frankfurt, Německo) na infrastruktuře Vercel a Supabase. Data jsou šifrována při přenosu (TLS 1.3) i v klidu (AES-256). Naši poskytovatelé infrastruktury udržují certifikaci SOC 2 Type II.",
          ],
        },
        {
          heading: "Řízení přístupu",
          body: [
            "Přístup k zákaznickému kódu je omezen na minimum nutné pro dodání služeb. Přístupové údaje jsou pravidelně obměňovány. Veškerý přístup je logován a auditovatelný. Členové týmu používají hardwarové bezpečnostní klíče pro autentizaci.",
          ],
        },
        {
          heading: "Bezpečnost agentů",
          body: [
            "Agenti QAWave operují v rámci vašeho CI/CD prostředí — nekopírují váš kód do externích systémů. Výstupy agentů (vygenerované testy, návrhy oprav) jsou commitovány přímo do vašeho repozitáře standardními Git workflow.",
            "Každá akce agenta je logována s plným audit trailem: co bylo přečteno, co bylo vygenerováno, co bylo navrženo. Tento log je přístupný zákazníkům.",
          ],
        },
        {
          heading: "Compliance",
          body: [
            "GDPR splněno od prvního dne — data hostovaná v EU, DPA k dispozici na vyžádání. SOC 2 Type I certifikace probíhá (cíl Q3 2026). Požadavky EU AI Act splněny. Compliance dokumentace je k dispozici zájemcům pod NDA.",
          ],
        },
        {
          heading: "Hlášení zranitelností",
          body: [
            "Pokud objevíte bezpečnostní zranitelnost v systémech QAWave, nahlaste ji na security@qawave.ai. Zavazujeme se potvrdit přijetí hlášení do 24 hodin a poskytovat aktualizace o postupu nápravy.",
          ],
        },
      ],
    },
  },
};
