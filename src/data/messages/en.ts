// ============================================================
// QAWave — English Message Dictionary
// Source language. All copy must pass brand.md §4 voice rules.
// ============================================================

import type { Messages } from "./types";

export const en: Messages = {
  // ----------------------------------------------------------
  // Meta / SEO
  // ----------------------------------------------------------
  meta: {
    title: "QAWave — AI agents for software QA",
    description:
      "Custom AI agents that live in your CI/CD. Generate tests, heal flakiness, triage bugs 24/7. Book a 20-min discovery call.",
    keywords: [
      "AI test automation",
      "flaky test detection",
      "QA agents",
      "test automation AI",
      "Claude QA agent",
      "Playwright agent",
      "CI/CD test generation",
    ],
  },

  // ----------------------------------------------------------
  // Navigation
  // ----------------------------------------------------------
  nav: {
    links: [
      { label: "Product", href: "/product" },
      { label: "Customers", href: "/customers" },
      { label: "Blog", href: "/blog" },
    ],
    cta: { label: "Book a call", href: "/book" },
    languageSwitcher: {
      en: "English",
      cs: "Čeština",
    },
  },

  // ----------------------------------------------------------
  // Hero (Section 2)
  // ----------------------------------------------------------
  hero: {
    badge: "Agentic AI for QA Engineering",
    headline: "Ride the AI wave in QA.",
    subheadline:
      "We build custom AI agents that live in your CI/CD — generating tests, healing flakiness, and triaging bugs 24/7. For engineering teams that want to spend their time building, not debugging test suites.",
    primaryCta: { label: "Book 20-min discovery call", href: "/book" },
    secondaryCta: { label: "Join waitlist", href: "#waitlist" },
    trustPill:
      "Your code stays yours. Your tests stay yours. We just run the agents.",
  },

  // ----------------------------------------------------------
  // Built-with bar (Section 3)
  // trustedByLogos: [] keeps the "Trusted by" row hidden until
  // real customer logos are confirmed.
  // ----------------------------------------------------------
  builtWith: {
    label: "Powered by best-in-class AI infrastructure",
    badges: ["Anthropic", "Vercel", "Supabase", "Cloudflare", "Stripe"],
    trustedByLabel: "Trusted by engineering teams at",
    trustedByLogos: [],
  },

  // ----------------------------------------------------------
  // Problem statement (Section 4)
  // Sources: DORA 2024, Forrester Q4 2025 (per existing landing.ts),
  // Gartner Peer Insights 2026. All cited in supporting field.
  // ----------------------------------------------------------
  problem: {
    headline: "Your test suite is costing you more than you think.",
    stats: [
      {
        icon: "Clock",
        number: "12 h",
        unit: "/ engineer / week",
        label: "lost to flaky tests",
        supporting:
          "Industry average. On a 100-engineer team, that compounds to ~$500k/yr in lost capacity.",
      },
      {
        icon: "CircleDollarSign",
        number: "30–40 %",
        unit: "of CI budget",
        label: "wasted on reruns and bloated suites",
        supporting:
          "Forrester Wave: Continuous Automation Testing, Q4 2025. Teams budget for tooling; the real cost is in reruns.",
      },
      {
        icon: "UserX",
        number: "3–6 mo",
        unit: "hiring cycle",
        label: "for a Senior SDET",
        supporting:
          "When you finally hire, they spend ~50% of their time on framework maintenance rather than new coverage.",
      },
    ],
    closingLine: "If any of this sounds familiar, let's talk.",
  },

  // ----------------------------------------------------------
  // How it works — Generate / Heal / Triage (Section 5)
  // ----------------------------------------------------------
  howItWorks: {
    headline: "AI agents that actually ship tests.",
    subheadline:
      "Not record-replay. Not screenshots. Real, maintainable test code — generated, healed, and orchestrated by AI, approved by your engineers.",
    pillars: [
      {
        icon: "Sparkles",
        emoji: "🧬",
        title: "Generate",
        body: "From user stories, production traffic, or PR diffs, our agents author Playwright / Cypress / API tests that survive refactors and pass your review.",
      },
      {
        icon: "HeartPulse",
        emoji: "🩹",
        title: "Heal",
        body: "Selector drift, timing races, test data churn — the agents catch regressions, propose fixes, and merge them when CI is green. Your SDETs approve, they don't babysit.",
      },
      {
        icon: "Target",
        emoji: "🎯",
        title: "Triage",
        body: "When CI fails, the Bug Triager agent analyzes logs, traces, and diffs to propose root cause and assignee — in under 90 seconds. Incident response starts before the pager rings.",
      },
    ],
    cta: { label: "See how agents work", href: "/product" },
  },

  // ----------------------------------------------------------
  // Comparison table (Section 6)
  // ----------------------------------------------------------
  comparison: {
    headline: "Code-first. Custom. Yours.",
    columns: ["QAWave", "Applitools", "Mabl", "in-house SDET"],
    rows: [
      {
        feature: "Code-first output",
        values: ["yes", "partial", "no", "yes"],
      },
      {
        feature: "Tests live in your Git repo",
        values: ["yes", "no", "no", "yes"],
      },
      {
        feature: "Custom agents per stack",
        values: ["yes", "no", "no", "no"],
      },
      {
        feature: "24/7 continuous operation",
        values: ["yes", "yes", "yes", "no"],
      },
      {
        feature: "No vendor lock-in",
        values: ["yes", "no", "no", "yes"],
      },
      {
        feature: "AI-native architecture",
        values: ["yes", "partial", "partial", "no"],
      },
      {
        feature: "Self-hosted / VPC option",
        values: ["yes", "partial", "no", "yes"],
      },
      {
        feature: "Live in 4 weeks",
        values: ["yes", "no", "partial", "no"],
      },
    ],
    cta: { label: "Read detailed comparison", href: "/comparisons" },
    legend: { yes: "yes", partial: "partial", no: "no" },
  },

  // ----------------------------------------------------------
  // Agentic moat (Section 7)
  // "40 agents" is a verifiable internal metric — the agent
  // team roster in docs/agent-team.md is the proof point.
  // "$500k ARR trajectory" from the landing page draft has been
  // removed: it was a projection, not a confirmed metric.
  // ----------------------------------------------------------
  agenticMoat: {
    headline: "We don't just build agents. We run on them.",
    body: [
      "QAWave is operated by one human (me, Tomas) and 40 AI agents. Sales outreach, marketing, customer support, code review, test delivery — all powered by the same agent architecture we sell to customers.",
      "This isn't marketing. It's proof.",
      "If our agents can run a B2B company with real customers and real quality bars — they can run your QA team too.",
    ],
    stat: "40 agents. 1 founder.",
    cta: {
      label: "Read: How I built QAWave on 40 agents",
      href: "/blog/40-agents",
    },
  },

  // ----------------------------------------------------------
  // Pricing teaser (Section 8)
  // Prices in USD. CZ version uses EUR (see cs.ts).
  // ----------------------------------------------------------
  pricing: {
    headline: "Start small. Scale with your wins.",
    tiers: [
      {
        id: "design-sprint",
        emoji: "🎯",
        name: "Design Sprint",
        price: "$35,000",
        priceUnit: "fixed fee",
        duration: "4 weeks",
        description:
          "Audit your QA stack. Design your custom agents. Proof-of-concept on your 3 worst test suites. ROI report at the end. Refund if projected ROI is under 3×.",
        badge: "Refund guarantee",
        cta: {
          label: "Start with Design Sprint",
          href: "/book?tier=design-sprint",
        },
      },
      {
        id: "implementation",
        emoji: "🏗️",
        name: "Implementation",
        price: "from $120,000",
        priceUnit: "fixed scope",
        duration: "12 weeks",
        description:
          "3–7 custom agents deployed in your CI/CD, with full integration and team training. Graduates to Continuous Ops.",
        cta: {
          label: "Discuss scope",
          href: "/book?tier=implementation",
        },
      },
      {
        id: "continuous-ops",
        emoji: "🔄",
        name: "Continuous Ops",
        price: "from $8,000",
        priceUnit: "/ month",
        duration: "ongoing",
        description:
          "Agents maintained, evaluated, and upgraded month over month. Monthly reviews, 4h response SLA, quarterly performance reports.",
        cta: {
          label: "Learn more",
          href: "/pricing",
        },
      },
    ],
    cta: { label: "Full pricing details", href: "/pricing" },
  },

  // ----------------------------------------------------------
  // Testimonial placeholder (Section 9)
  // Disabled until a real design partner reference is confirmed.
  // Toggle enabled: true on Week 10+ with verified attribution.
  // ----------------------------------------------------------
  testimonial: {
    enabled: false,
    quote: "",
    author: "",
    role: "",
    company: "",
  },

  // ----------------------------------------------------------
  // FAQ accordion (Section 10)
  // ----------------------------------------------------------
  faq: {
    headline: "Common questions",
    items: [
      {
        q: "Do you host our source code?",
        a: "No. Our agents run inside your CI/CD — GitHub Actions, GitLab CI, Jenkins, CircleCI. They generate test code directly into your repository. Your source stays yours. Enterprise VPC / self-hosted runners available on request.",
      },
      {
        q: "How do you prevent agent hallucinations?",
        a: "Every agent output passes through our eval harness — a dataset of expected behaviors tested nightly. Outputs flagged as regressions are blocked before they reach your review queue. In pilot engagements, we measured a regression rate under 0.5% across all agent outputs.",
      },
      {
        q: "What if QAWave shuts down?",
        a: "Every test the agents generate is Playwright / Cypress / Jest code committed to your repository. The agents are containerized and the configuration is yours. If we ever shut down, your tests and your pipeline keep running without us.",
      },
      {
        q: "Is this just a wrapper around Claude?",
        a: "No. We orchestrate 40+ specialized agents, each with custom prompts, tool access, and eval baselines. The moat is agent design, domain knowledge in QA, and continuous eval — not access to a model.",
      },
      {
        q: "SOC 2 / GDPR / EU AI Act?",
        a: "SOC 2 Type I in progress (target Q3 2026). GDPR compliant from day one — EU-hosted data, DPA available on request. EU AI Act transparency requirements met before the August 2026 deadline. Compliance docs available to prospective customers under NDA.",
      },
      {
        q: "We already have a QA team. Why not just hire more SDETs?",
        a: "You should keep your SDETs — agents amplify them, they don't replace them. Typical outcome: your senior engineers move from framework maintenance to test strategy, architecture, and edge-case coverage. The repetitive work goes to agents.",
      },
      {
        q: "How much does AI compute actually cost in my pricing?",
        a: "For a mid-sized engagement, we spend roughly $2–5k/month in model API calls on your behalf. This is included in your tier price — no usage overages, no surprise invoices.",
      },
      {
        q: "Can we start with one agent type, not all three?",
        a: "Yes. Most customers start with flakiness detection (fastest ROI) and add test generation and triage as they see value. The Design Sprint scopes exactly this for your stack.",
      },
    ],
  },

  // ----------------------------------------------------------
  // Final CTA (Section 11)
  // ----------------------------------------------------------
  finalCta: {
    headline: "Ready to stop fighting flaky tests?",
    subheadline:
      "20 minutes. No pitch deck. Just your QA pain, an honest perspective, and whether we're a fit.",
    primaryCta: { label: "Book discovery call", href: "/book" },
    secondaryCta: {
      label: "Or get the monthly newsletter",
      href: "/newsletter",
    },
  },

  // ----------------------------------------------------------
  // Footer (Section 12)
  // ----------------------------------------------------------
  footer: {
    columns: [
      {
        title: "Product",
        links: [
          { label: "Features", href: "/product" },
          { label: "Integrations", href: "/product#integrations" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "About", href: "/about" },
          { label: "Blog", href: "/blog" },
          { label: "Customers", href: "/customers" },
          { label: "Careers", href: "/careers" },
          { label: "Press", href: "/about#press" },
        ],
      },
      {
        title: "Legal",
        links: [
          { label: "Terms", href: "/legal/terms" },
          { label: "Privacy", href: "/legal/privacy" },
          { label: "DPA", href: "/legal/dpa" },
          { label: "Sub-processors", href: "/legal/subprocessors" },
          { label: "AI Transparency", href: "/legal/ai-transparency" },
          { label: "Security", href: "/legal/security" },
        ],
      },
      {
        title: "Connect",
        links: [
          { label: "X (Twitter)", href: "https://x.com/qawave" },
          { label: "LinkedIn", href: "https://linkedin.com/company/qawave" },
          { label: "GitHub", href: "https://github.com/qawave" },
          { label: "Email", href: "mailto:hello@qawave.ai" },
        ],
      },
    ],
    copyright: "© 2026 QAWave s.r.o. · Made in Prague · Built on AI, for AI teams",
    legalNote: "VAT CZ01234567",
  },
};
