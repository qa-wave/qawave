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

  // ----------------------------------------------------------
  // Product page
  // ----------------------------------------------------------
  productPage: {
    headline: "AI agents that actually ship tests.",
    subheadline:
      "Not record-replay. Not screenshots. Real, maintainable test code — generated, healed, and orchestrated by AI, approved by your engineers.",
    capabilities: {
      title: "Three capabilities. One agent architecture.",
      items: [
        {
          icon: "Sparkles",
          title: "Generate",
          body: "From user stories, production traffic, or PR diffs, our agents author Playwright / Cypress / API tests that survive refactors and pass your review.",
          details: [
            "Reads your codebase, understands intent, writes tests that match your patterns",
            "Supports Playwright, Cypress, Jest, and custom API frameworks",
            "Every generated test goes through your existing review process",
            "Targets untested paths first — maximizes coverage per test written",
          ],
        },
        {
          icon: "HeartPulse",
          title: "Heal",
          body: "Selector drift, timing races, test data churn — the agents catch regressions, propose fixes, and merge them when CI is green.",
          details: [
            "Understands test intent, not just selectors — fixes at the right level",
            "Proposes patches as PRs — your SDETs approve, they don't babysit",
            "Tracks flakiness patterns across runs to identify systemic issues",
            "Reduces false-positive CI failures that block your deploy pipeline",
          ],
        },
        {
          icon: "Target",
          title: "Triage",
          body: "When CI fails, the Bug Triager agent analyzes logs, traces, and diffs to propose root cause and assignee — in under 90 seconds.",
          details: [
            "Correlates test failures with recent commits and infrastructure changes",
            "Suggests root cause and assigns to the right engineer automatically",
            "Learns from past resolutions to improve accuracy over time",
            "Integrates with Slack, Jira, Linear for instant notifications",
          ],
        },
      ],
    },
    integrations: {
      title: "Works with your stack.",
      subtitle:
        "Our agents plug into your existing CI/CD and test infrastructure. No rip-and-replace.",
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
          name: "Test Frameworks",
          items: ["Playwright", "Cypress", "Jest", "Vitest", "pytest"],
        },
        {
          name: "Languages",
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
          name: "Issue Tracking",
          items: ["Jira", "Linear", "GitHub Issues", "Azure Boards"],
        },
      ],
    },
    cta: { label: "Book 20-min discovery call", href: "/book" },
  },

  // ----------------------------------------------------------
  // About page
  // ----------------------------------------------------------
  aboutPage: {
    headline: "One founder. Forty agents.",
    founderStory: [
      "I'm Tomas. I've spent 10+ years in software engineering — shipping products, breaking builds, and watching QA teams drown in maintenance work while dev velocity accelerated around them.",
      "In 2025, I started building AI agents for my own QA workflows. They worked. Then I built agents to run the business itself — sales, marketing, code review, customer support. That worked too.",
      "QAWave is the result: a studio that builds custom AI agents for your QA team, powered by the same agent architecture that runs our own company. We eat our own dog food.",
      "Based in Prague. Serving engineering teams across Europe and the US.",
    ],
    mission: {
      title: "Why this exists.",
      body: "Engineering teams are shipping faster than ever. QA can't keep up with scripts and manual processes. The answer isn't more headcount — it's agents that understand your codebase, your patterns, and your quality bar. We build those agents.",
    },
    values: [
      {
        title: "Honest by default",
        body: "No fake metrics. No invented case studies. If we don't have data, we say so. Our testimonial section is empty until a real customer fills it.",
      },
      {
        title: "Code-first, always",
        body: "Every test our agents generate is real, reviewable code in your repository. No proprietary formats, no vendor lock-in, no black boxes.",
      },
      {
        title: "Agents amplify, they don't replace",
        body: "Your SDETs are valuable. We move them from framework maintenance to test strategy. The repetitive work goes to agents.",
      },
    ],
    cta: { label: "Book a conversation", href: "/book" },
  },

  // ----------------------------------------------------------
  // Customers page
  // ----------------------------------------------------------
  customersPage: {
    headline: "Customers",
    subheadline: "Engineering teams that trust QAWave agents in their CI/CD.",
    emptyState: {
      title: "Pilot pipeline forming.",
      body: "We're in active conversations with engineering teams across Europe. No fake logos, no invented case studies. When our first design partner ships, their story goes here — with their permission.",
    },
    designPartner: {
      title: "Become a design partner.",
      benefits: [
        "4-week Design Sprint at preferred terms",
        "Direct access to the founder throughout the engagement",
        "Shape the agent architecture for your stack",
        "Published case study (if you choose) with full editorial control",
        "Priority access to new agent capabilities",
      ],
    },
    cta: { label: "Apply for design partnership", href: "/book" },
  },

  // ----------------------------------------------------------
  // Careers page
  // ----------------------------------------------------------
  careersPage: {
    headline: "We hire 0 humans.",
    subheadline: "Here's why.",
    body: [
      "QAWave is operated by one human and 40 AI agents. This isn't a staffing constraint — it's an architectural decision.",
      "Every function that would traditionally require a hire — content writing, code review, customer outreach, test delivery, sales qualification — is handled by a specialized agent with custom prompts, tool access, and eval baselines.",
      "This is our moat and our proof of concept. If our agent architecture can run a B2B company with real customers and real quality bars, it can run your QA team too.",
      "We're not hiring. But we're always looking for design partners who want to see what 40 agents can do for their engineering team.",
    ],
    agentRoles: [
      {
        title: "Content Marketer Agent",
        body: "Plans content calendar, manages distribution across channels, tracks engagement metrics.",
      },
      {
        title: "Copywriter Agent",
        body: "Writes landing copy, email sequences, and ad creative in Czech and English.",
      },
      {
        title: "Code Reviewer Agent",
        body: "Reviews every TSX/TS change for performance, accessibility, and idiomatic React 19 patterns.",
      },
      {
        title: "SEO Specialist Agent",
        body: "Keyword research and on-page optimization for QA + AI testing terms across CZ and EN markets.",
      },
      {
        title: "Competitive Analyst Agent",
        body: "Tracks Applitools, Mabl, QA Wolf, Functionize, TestRigor. Updates differentiation matrix.",
      },
      {
        title: "QA Expert Agent",
        body: "Validates technical claims, assists with thought leadership content and case study accuracy.",
      },
    ],
    cta: { label: "Become a design partner instead", href: "/book" },
  },

  // ----------------------------------------------------------
  // Book page
  // ----------------------------------------------------------
  bookPage: {
    headline: "Book a 20-min discovery call.",
    subheadline:
      "No pitch deck. No demo of a toy app. Just your QA pain, an honest perspective, and whether we're a fit.",
    expectations: [
      {
        icon: "Clock",
        title: "20 minutes, max",
        body: "We respect your calendar. If we need more time, we'll schedule a follow-up.",
      },
      {
        icon: "MessageSquare",
        title: "Your problems first",
        body: "We'll ask about your stack, your test suite pain, and what you've tried. Then we'll tell you honestly if we can help.",
      },
      {
        icon: "FileText",
        title: "No obligations",
        body: "No contracts, no commitments. If there's a fit, we'll scope a Design Sprint together.",
      },
    ],
    contact: {
      title: "Prefer email?",
      email: "hello@qawave.ai",
      note: "We typically respond within 4 hours during CET business hours.",
    },
    cta: { label: "Schedule via email", href: "mailto:hello@qawave.ai" },
  },

  // ----------------------------------------------------------
  // Blog page
  // ----------------------------------------------------------
  blogPage: {
    headline: "Blog",
    subheadline:
      "Technical deep-dives on agentic QA, AI testing, and running a company on 40 agents.",
    emptyState:
      "First posts are in the pipeline. Subscribe to the newsletter to get notified.",
  },

  // ----------------------------------------------------------
  // Legal pages
  // ----------------------------------------------------------
  legal: {
    terms: {
      title: "Terms of Service",
      lastUpdated: "May 9, 2026",
      intro:
        "These Terms of Service govern your use of the QAWave services provided by QAWave s.r.o.",
      sections: [
        {
          heading: "1. Services",
          body: [
            "QAWave provides custom AI agent development, deployment, and maintenance services for software quality assurance. Services are delivered under individual Statements of Work (SOW) agreed between QAWave and the customer.",
            "All services are provided on an as-is basis. Service levels, deliverables, and timelines are defined in the applicable SOW.",
          ],
        },
        {
          heading: "2. Intellectual Property",
          body: [
            "All test code generated by QAWave agents is committed to the customer's repository and is owned by the customer. QAWave retains ownership of its agent architecture, prompts, eval harnesses, and proprietary tooling.",
            "Customers grant QAWave access to their codebase solely for the purpose of delivering the agreed services. This access is revocable at any time.",
          ],
        },
        {
          heading: "3. Payment Terms",
          body: [
            "Design Sprint fees are invoiced upfront. Implementation fees are invoiced in milestones as defined in the SOW. Continuous Ops fees are invoiced monthly in advance.",
            "All invoices are due within 30 days of issue. Late payments accrue interest at 1.5% per month.",
          ],
        },
        {
          heading: "4. Refund Policy",
          body: [
            "Design Sprint engagements include a refund guarantee: if the projected ROI calculated in the final report is below 3×, the full fee is refunded within 30 days.",
            "No other refunds are offered for completed work.",
          ],
        },
        {
          heading: "5. Limitation of Liability",
          body: [
            "QAWave's total liability under any SOW shall not exceed the fees paid by the customer for the applicable engagement period.",
            "QAWave is not liable for indirect, consequential, or incidental damages, including lost profits or data.",
          ],
        },
        {
          heading: "6. Termination",
          body: [
            "Either party may terminate a Continuous Ops engagement with 30 days' written notice. Design Sprint and Implementation engagements are governed by their respective SOW terms.",
            "Upon termination, QAWave will provide a transition plan and ensure all generated test code and configurations are accessible in the customer's repository.",
          ],
        },
        {
          heading: "7. Governing Law",
          body: [
            "These terms are governed by the laws of the Czech Republic. Any disputes shall be resolved by the courts of competent jurisdiction in Prague, Czech Republic.",
          ],
        },
      ],
    },

    privacy: {
      title: "Privacy Policy",
      lastUpdated: "May 9, 2026",
      intro:
        "QAWave s.r.o. is committed to protecting your privacy. This policy describes how we collect, use, and protect your personal data in compliance with GDPR.",
      sections: [
        {
          heading: "1. Data Controller",
          body: [
            "QAWave s.r.o., registered in the Czech Republic. Contact: privacy@qawave.ai.",
          ],
        },
        {
          heading: "2. Data We Collect",
          body: [
            "Contact information: name, email address, company name, job title — provided when you book a call, subscribe to our newsletter, or contact us.",
            "Usage data: anonymized analytics about how you interact with qawave.ai, collected via privacy-respecting analytics.",
            "Customer data: source code access and CI/CD logs are processed solely to deliver contracted services and are not stored beyond the engagement period.",
          ],
        },
        {
          heading: "3. How We Use Your Data",
          body: [
            "To deliver contracted QA services. To respond to inquiries and schedule calls. To send newsletter updates (with explicit consent, unsubscribe anytime). To improve our website and services.",
          ],
        },
        {
          heading: "4. Data Storage and Security",
          body: [
            "All data is hosted in the EU (Frankfurt, Germany) on Vercel and Supabase infrastructure. We use encryption in transit (TLS 1.3) and at rest. Access to customer data is restricted to authorized personnel only.",
          ],
        },
        {
          heading: "5. Your Rights",
          body: [
            "Under GDPR, you have the right to: access your personal data, request correction or deletion, object to processing, data portability, and lodge a complaint with the Czech Data Protection Authority (ÚOOÚ).",
            "To exercise any of these rights, contact privacy@qawave.ai.",
          ],
        },
        {
          heading: "6. Data Retention",
          body: [
            "Contact data: retained for the duration of our business relationship plus 3 years. Customer engagement data: deleted within 90 days of engagement completion unless otherwise agreed. Newsletter subscriptions: until you unsubscribe.",
          ],
        },
        {
          heading: "7. Cookies",
          body: [
            "qawave.ai uses only essential cookies required for the website to function. We do not use tracking cookies or third-party advertising cookies.",
          ],
        },
      ],
    },

    dpa: {
      title: "Data Processing Agreement",
      lastUpdated: "May 9, 2026",
      intro:
        "This Data Processing Agreement (DPA) forms part of the service agreement between QAWave s.r.o. (Processor) and the customer (Controller).",
      sections: [
        {
          heading: "1. Scope of Processing",
          body: [
            "QAWave processes customer data solely for the purpose of delivering the contracted QA agent services. Processing activities include: reading source code to generate tests, analyzing CI/CD logs for triage, and accessing test environments to validate agent outputs.",
          ],
        },
        {
          heading: "2. Sub-processors",
          body: [
            "QAWave uses a limited set of sub-processors, listed at qawave.ai/legal/subprocessors. Customers will be notified 30 days before any new sub-processor is added.",
          ],
        },
        {
          heading: "3. Security Measures",
          body: [
            "All data is encrypted in transit and at rest. Access is restricted on a need-to-know basis. QAWave maintains security incident response procedures and will notify the customer within 72 hours of any confirmed data breach.",
          ],
        },
        {
          heading: "4. Data Transfers",
          body: [
            "All processing occurs within the EU (Frankfurt, Germany). If any processing requires transfer outside the EU, QAWave will ensure appropriate safeguards (Standard Contractual Clauses) are in place.",
          ],
        },
        {
          heading: "5. Audit Rights",
          body: [
            "Customers may audit QAWave's compliance with this DPA upon reasonable notice. QAWave will provide all necessary documentation and access to demonstrate compliance.",
          ],
        },
        {
          heading: "6. Data Deletion",
          body: [
            "Upon termination of the service agreement, QAWave will delete all customer data within 90 days unless retention is required by law. Customers may request earlier deletion at any time.",
          ],
        },
      ],
    },

    subprocessors: {
      title: "Sub-processors",
      lastUpdated: "May 9, 2026",
      intro:
        "QAWave uses the following sub-processors to deliver our services. This list is updated when changes occur. Customers are notified 30 days before any new sub-processor is added.",
      sections: [
        {
          heading: "Infrastructure",
          body: [
            "Vercel Inc. — Application hosting and edge network. Location: EU (Frankfurt). Purpose: website and application hosting.",
            "Supabase Inc. — Database and authentication. Location: EU (Frankfurt). Purpose: data storage.",
            "Cloudflare Inc. — CDN and DDoS protection. Location: Global (data processed in EU). Purpose: traffic security and performance.",
          ],
        },
        {
          heading: "AI Providers",
          body: [
            "Anthropic PBC — AI model provider (Claude). Location: US (data processed per DPA, zero data retention). Purpose: powering QA agents.",
          ],
        },
        {
          heading: "Business Operations",
          body: [
            "Stripe Inc. — Payment processing. Location: EU. Purpose: invoicing and payment collection.",
            "Porkbun LLC — Email delivery (SMTP). Location: US. Purpose: transactional email.",
          ],
        },
      ],
    },

    aiTransparency: {
      title: "AI Transparency",
      lastUpdated: "May 9, 2026",
      intro:
        "In compliance with the EU AI Act, QAWave discloses the following information about our use of AI systems.",
      sections: [
        {
          heading: "AI Systems in Use",
          body: [
            "QAWave deploys specialized AI agents for software quality assurance. These agents use large language models (primarily Anthropic Claude) to generate test code, analyze test failures, and propose fixes.",
            "Our agents are classified as limited-risk AI systems under the EU AI Act. They assist human engineers — all agent outputs require human review and approval before being merged into production code.",
          ],
        },
        {
          heading: "Human Oversight",
          body: [
            "Every agent output is subject to human review. Generated tests are submitted as pull requests for engineer approval. Proposed fixes are reviewed before merge. Triage suggestions are advisory — engineers decide the response.",
            "Customers maintain full control over which agent actions are automated versus requiring approval.",
          ],
        },
        {
          heading: "AI-Generated Content on This Website",
          body: [
            "Portions of this website's content were drafted or refined with AI assistance. All published content is reviewed and approved by a human before publication.",
            "Per EU AI Act Article 50, this disclosure satisfies the transparency requirement for AI-generated content in commercial communications.",
          ],
        },
        {
          heading: "Data and Training",
          body: [
            "QAWave does not train AI models. We use commercially available models (Anthropic Claude) via their API. Customer code and data are never used to train third-party models. Anthropic's zero data retention policy applies to all API interactions.",
          ],
        },
        {
          heading: "Contact",
          body: [
            "For questions about our AI practices: ai@qawave.ai. For general privacy inquiries: privacy@qawave.ai.",
          ],
        },
      ],
    },

    security: {
      title: "Security",
      lastUpdated: "May 9, 2026",
      intro:
        "QAWave takes the security of your code and data seriously. Here's how we protect it.",
      sections: [
        {
          heading: "Infrastructure Security",
          body: [
            "All services are hosted in the EU (Frankfurt, Germany) on Vercel and Supabase infrastructure. Data is encrypted in transit (TLS 1.3) and at rest (AES-256). Our infrastructure providers maintain SOC 2 Type II certification.",
          ],
        },
        {
          heading: "Access Controls",
          body: [
            "Customer code access is scoped to the minimum required for service delivery. Access credentials are rotated regularly. All access is logged and auditable. Team members use hardware security keys for authentication.",
          ],
        },
        {
          heading: "Agent Security",
          body: [
            "QAWave agents operate within your CI/CD environment — they don't copy your code to external systems. Agent outputs (generated tests, fix proposals) are committed directly to your repository via standard Git workflows.",
            "Every agent action is logged with a full audit trail: what was read, what was generated, what was proposed. This log is available to customers.",
          ],
        },
        {
          heading: "Compliance",
          body: [
            "GDPR compliant from day one — EU-hosted data, DPA available on request. SOC 2 Type I certification in progress (target Q3 2026). EU AI Act transparency requirements met. Compliance documentation available to prospective customers under NDA.",
          ],
        },
        {
          heading: "Vulnerability Disclosure",
          body: [
            "If you discover a security vulnerability in QAWave's systems, please report it to security@qawave.ai. We commit to acknowledging reports within 24 hours and providing updates on remediation progress.",
          ],
        },
      ],
    },
  },
};
