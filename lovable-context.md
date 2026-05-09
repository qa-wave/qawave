# QAWave — Project Brief for Lovable

> Paste this into a new Lovable project's first prompt (or upload as context). Self-contained: no external file references. Updated 2026-05-09.

---

## 1. What we're building

**QAWave** is a solo-founder, AI-native QA studio. We build custom AI agents that live in our customers' CI/CD pipelines. Three things the agents do:

- **Generate** — author Playwright / Cypress / API tests from user stories, production traffic, or PR diffs
- **Heal** — detect and fix flaky tests (selector drift, timing races, test data churn) and propose patches the team approves
- **Triage** — analyze CI failures (logs, traces, diffs) and propose root cause + assignee in under 90 seconds

Customers buy a **Design Sprint ($35k, 4 weeks)** as the entry product. From there: **Implementation (from $120k, 12 weeks)** then **Continuous Ops (from $8k/month)**. We are pre-seed, no paying customers yet — design partner pipeline forming.

The site you're building is the marketing front of `qawave.ai`. It has to:
1. Convert technical buyers (VPE, Head of QA) into 20-min discovery calls
2. Communicate that we are different from Applitools (visual-only), Mabl (record-replay), QA Wolf (human-driven)
3. Pass a 5-second clarity test for senior engineers — no marketing fluff, no AI-startup clichés

## 2. Audience

Two primary personas. Both are senior, technical, skeptical of AI hype.

**Elena — VP of Engineering, 42–55**
- Reports to CEO/COO, owns $5–50M eng budget
- KPIs: DORA metrics, incident rate, deploy frequency
- Pain: 90+ min CI pipelines, 5–15% flaky test rate, growing AI-generated code outpacing QA
- First reaction to a vendor: "Show me a case study from a company my size or stop wasting my time"

**Marek — Head of QA / Director of Test Engineering, 35–50**
- Reports to VPE, owns $500k–5M tooling budget
- KPIs: test coverage, flaky rate, release cadence
- Pain: SDETs maintaining frameworks instead of strategy, hiring SDETs takes 3–6 months
- Champion role — sells internally to Elena. Without him no deal closes.

Secondary: **Dr. Schmidt (CISO)** — gates self-hosted/VPC requirement. **Tomáš (Staff Eng)** — DX-focused, technical gatekeeper.

Markets: CZ + EU primary (Czech sites + DACH + UK + Nordics). US mid-market secondary.

## 3. Brand — voice & tone

**Tagline (primary):** "Ride the AI wave in QA."
**Tagline (short):** "The QA wave is here."

**Voice attributes:**
- Confident, clear, technical — never hype-y, salesy, or preachy
- Short sentences. Direct. Scannable. No purple prose.
- "We" as the company. "I, Tomas" in founder posts.
- Dry engineering humor. No memes, no slapstick.
- European directness — substance over Silicon Valley speak.

**Vocabulary YES:** agent, eval, CI, flaky test, heal, triage, deploy, pipeline, self-hosted, runner, sprint, proof-of-concept, refactor, regression, PR diff

**Vocabulary BANLIST — never appears anywhere on the site:**
revolutionary · transform · disruptive · next-gen · cutting-edge · game-changing · AI magic · paradigm shift · "leverage AI" · "unlock potential" · "the future of X" · "supercharge" · synergize · empower · seamless · world-class · best-in-class · enterprise-grade

CZ banlist: revoluční · transformovat · disruptivní · průlomový · nové generace · "změna hry" · AI kouzlo · maximální potenciál

**Honest-claims rule:** every numeric claim either cites a public source (DORA Report 2024, Forrester Q4 2025, Gartner Peer Insights) or is disclosed as "pilot data". **No fake customer names. No invented metrics. No fake testimonials.** If a logo bar or testimonial would require fabricating, hide the section instead.

**Signature phrases (allowed):**
- "Your code stays yours. Your tests stay yours. We just run the agents."
- "One founder. Forty agents."
- "We eat our own dog food."
- "Ride the wave, don't fight it."

## 4. Visual system

**Theme:** dark mode primary. Engineering-tool aesthetic, **not** business-SaaS.

**Color tokens (use exactly these, name them however your stack prefers):**
| Role | Hex | Use |
|---|---|---|
| Background (Deep Ocean) | `#0F172A` | Page bg |
| Foreground (Sea Foam) | `#F8FAFC` | Headings, body text |
| Surface | `#1E293B` | Cards, raised panels |
| Surface raised | `#334155` | Hover panels, inner cards |
| Accent (Wave Blue) | `#0EA5E9` | Primary CTAs, links, brand mark |
| Accent light (Cyan Crest) | `#06B6D4` | Hover states, secondary accents |
| Accent dark | `#0284C7` | Active/pressed CTA |
| Accent muted | `rgba(14,165,233,0.15)` | Badge backgrounds, soft fills |
| AI Purple | `#8B5CF6` | Hero gradient stop, agent-specific accents |
| Border | `rgba(255,255,255,0.08)` | Default borders |
| Border accent | `rgba(14,165,233,0.4)` | Hover borders |
| Success | `#10B981` | passing tests, green check |
| Warning | `#F59E0B` | flaky tests, partial states |
| Error | `#EF4444` | failed tests, danger |

**Hero gradient (decorative):** `linear-gradient(135deg, #0EA5E9 0%, #06B6D4 50%, #8B5CF6 100%)` at ~18 % opacity, used as radial blob behind hero text.

**Glow effects on CTAs:** primary button has `shadow: 0 0 20px rgba(14,165,233,0.3)` default, `0 0 30px rgba(14,165,233,0.5)` on hover. Card hover gets `0 0 30px rgba(14,165,233,0.1)`.

**Typography:**
- **Geist Sans** for everything except marketing display
- **Geist Mono** for code, prices, technical values
- **Instrument Serif** italic for hero accent moments and the agentic-moat stat ("40 agents. 1 founder.") — **not** for body. Used sparingly, max 2 places per page.
- H1: 5xl/6xl/7xl, font-semibold (600), tracking-tight, leading 1.05–1.08
- H2: 3xl/4xl/5xl, font-semibold, tracking-tight
- Body: 16/18px, leading-relaxed, neutral-400 color
- Caption: 12/14px, uppercase, tracking-widest, neutral-500

**Spacing rhythm:**
- Section vertical: `py-24 md:py-32 lg:py-40`
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Grid gap: `gap-6 md:gap-8`
- Card padding: `p-6 md:p-8 lg:p-10`

**Iconography:** lucide-react. Outline style. Common: Sparkles, HeartPulse, Target (for Generate/Heal/Triage), ArrowRight, ChevronDown, Check, Minus, X, Clock, CircleDollarSign, UserX, Menu, X.

**Visual references (do these, not the others):**
- DO: vercel.com, linear.app, anthropic.com, cursor.com, resend.com, railway.app
- DON'T: AI startup clichés (pink/purple gradients, robot faces), enterprise stock photos, vaporware ("the future of testing")

## 5. Tech stack (canonical homepage runs on this)

- **Next.js 16** App Router + React 19 + Tailwind CSS v4
- **Framer Motion 12** — subtle animations, respect `prefers-reduced-motion`
- **next-intl 4** for i18n (EN default + CZ)
- **lucide-react** for icons
- **No** shadcn/ui, **no** Radix, **no** Material UI, **no** Chakra. Custom Tailwind components only.

If Lovable's stack is Vite + React + Tailwind + shadcn, that's fine for the side project — keep tokens and voice identical, the framework can differ.

## 6. Information architecture

```
qawave.ai/
├── /                — auto-redirect to /<locale>/
├── /[en|cs]/        — homepage (12 sections, see §7)
├── /product         — deeper product page
├── /pricing         — full pricing detail (3 tiers + FAQ)
├── /customers       — case studies (gated until real references exist)
├── /docs            — public docs
├── /blog            — MDX blog
│   └── /[slug]
├── /about           — founder story, mission
├── /careers         — "We hire 0 humans. Here's why." marketing angle
├── /changelog       — version updates, new agents
├── /book            — Cal.com embed for discovery call
└── /legal/
    ├── /terms
    ├── /privacy
    ├── /dpa
    ├── /subprocessors
    └── /ai-transparency  — EU AI Act disclosure
```

## 7. Homepage — 12 sections (top to bottom)

1. **Navigation (sticky)** — logo `QAWave` (Wave Blue accent on "Wave"), 6 nav links (Product · Customers · Docs · Pricing · Blog · Changelog), language switcher pill (EN/CS), primary CTA "Book a call"
2. **Hero** — badge "Agentic AI for QA Engineering", H1 "Ride the AI wave in QA.", subheadline (we build custom AI agents that live in your CI/CD…), 2 CTAs (Book 20-min discovery call / Join waitlist), trust pill ("Your code stays yours…"), decorative wave gradient + network graph visual
3. **Built-with bar** — "Powered by best-in-class AI infrastructure" + 5 logo names (Anthropic, Vercel, Supabase, Cloudflare, Stripe). "Trusted by" row hidden until real customer logos exist.
4. **Problem statement** — H2 "Your test suite is costing you more than you think.", 3 stat cards: 12h/eng/week lost to flaky tests · 30–40% CI budget waste · 3–6 mo SDET hiring cycle. Closing line "If any of this sounds familiar, let's talk."
5. **How it works (Generate/Heal/Triage)** — H2 "AI agents that actually ship tests.", 3 pillar cards with lucide icons (Sparkles/HeartPulse/Target). Body copy peer-to-peer technical.
6. **Comparison table** — H2 "Code-first. Custom. Yours.", 4 columns (QAWave / Applitools / Mabl / in-house SDET), 8 rows (Code-first, Git repo, Custom agents, 24/7, No vendor lock-in, AI-native, Self-hosted, Live in 4 weeks). Indicators: ✅ yes / 🟡 partial / ❌ no.
7. **Agentic moat** — H2 "We don't just build agents. We run on them.", body explains the meta-positioning, big Instrument Serif italic stat **"40 agents. 1 founder."**
8. **Pricing teaser** — H2 "Start small. Scale with your wins.", 3 tier cards: Design Sprint $35k (highlight + "Refund guarantee" badge) · Implementation from $120k · Continuous Ops from $8k/month. Mono font for prices.
9. **Testimonial** — gated `enabled: false` until real reference exists. Renders nothing currently.
10. **FAQ accordion** — H2 "Common questions", 8 questions (hosting, hallucinations, shutdown risk, "wrapper around Claude?", SOC 2/GDPR/EU AI Act, hire SDETs vs agents, AI compute cost, start with one agent).
11. **Final CTA** — H2 "Ready to stop fighting flaky tests?", subhead "20 minutes. No pitch deck.", 2 CTAs (book call / monthly newsletter). Hero-gradient backdrop + pulse glow.
12. **Footer** — 4 columns (Product · Company · Legal · Connect), copyright "© 2026 QAWave s.r.o. · Made in Prague · Built on AI, for AI teams", VAT placeholder.

## 8. Pricing (canonical — never change without owner sign-off)

| Tier | Price | Duration | Refund |
|---|---|---|---|
| Design Sprint | **$35,000** fixed | 4 weeks | Yes — full refund if projected ROI < 3× |
| Implementation | from **$120,000** | 12 weeks | — |
| Continuous Ops | from **$8,000** / month | ongoing | — |

CZ version: prices in EUR roughly equivalent (~€32k / from €110k / from €7k/mo).

## 9. i18n approach

Two locales: **`en` (default)** and **`cs`** (Czech). URL prefix always (`/en/...`, `/cs/...`). The brand line "Ride the AI wave in QA." stays English in both versions — it's a brand mark, not a tagline to translate.

CZ writing rules:
- Vykání (formal you), never tykání
- No Americanisms ("Hope this finds you well" → just open with the question)
- English tech terms stay as loanwords: `flaky`, `CI/CD`, `agent`, `deploy`, `eval`, `triage`, `stack`, `runner`, `proof-of-concept`, `record-replay`, `selector drift`, `merge`, `pipeline`, `waitlist`, `newsletter`, `DPA`, `NDA`
- Pricing displayed in EUR for CZ

## 10. What you can build right now (priority list for Lovable)

These pages exist as links in nav/footer but haven't been built yet. Pick any:

| Page | Purpose | Key sections |
|---|---|---|
| `/pricing` | Full pricing detail | 3 tiers expanded, refund mechanics, FAQ on procurement, ROI calculator placeholder |
| `/product` | Deeper "how it works" | Generate/Heal/Triage with code snippets, eval harness explanation, integration diagram (GHA/GitLab/Jenkins) |
| `/about` | Founder + mission | Tomas's story, 40-agent operating model, why now, why solo |
| `/blog` | MDX blog index | Filter by tag (engineering/industry/customer/founder), search, RSS |
| `/blog/40-agents` | First post | Founder narrative on running QAWave on 40 AI agents — needed for Touch 4 outreach |
| `/changelog` | Version + agent additions | Reverse chronological, badge per agent type |
| `/customers` | Case studies | Empty state honest design ("Pilot pipeline forming") until real cases |
| `/careers` | Marketing angle | "We hire 0 humans. Here's why." — provocative, links to agent ops post |
| `/legal/*` | T&Cs, Privacy, DPA, Sub-processors, AI Transparency | Standard B2B legal templates, EU-friendly, AI Act compliant |
| `/book` | Cal.com embed | Wrapper around iframe + scoping FAQ |

## 11. Hard rules (non-negotiable)

1. No banned words (§3 banlist). CZ + EN.
2. No fake customer names, fake metrics, fake testimonials. Hide sections rather than fabricate.
3. Every number cited needs a public source or "pilot data" disclosure.
4. Pricing ($35k / $120k+ / $8k+/mo) is canonical — don't round, don't change tier names.
5. Wave Blue `#0EA5E9` and Deep Ocean `#0F172A` are the brand. Don't drift to indigo or near-black.
6. Mobile-first responsive. 83% of B2B traffic is mobile. Test mobile breakpoints first.
7. Respect `prefers-reduced-motion` — animations should fade to no-op, not block content.
8. WCAG AA contrast minimum (Sea Foam on Deep Ocean = 17.4:1, Wave Blue on Deep Ocean = 5.5:1, both pass).
9. Footer copyright always reads "© 2026 QAWave s.r.o. · Made in Prague · Built on AI, for AI teams" + VAT placeholder.
10. Any AI-generated public content has to be tagged for EU AI Act transparency requirement.

## 12. Brand pillars summary (for cross-checking copy)

**3 value pillars** — sell the why:
1. **Custom, not cookie-cutter** — agents built for your stack
2. **Own the code, we own the agent** — Playwright/Cypress code lives in your repo, no lock-in
3. **Continuous, not project-based** — agents run 24/7, not a one-shot consulting engagement

**3 capability pillars** — explain the what (used in homepage section 5):
1. **Generate** — author tests from user stories / traffic / PR diffs
2. **Heal** — fix flaky tests at intent level, not just selector patches
3. **Triage** — analyze CI failures and propose root cause in under 90 seconds

When you write copy for any new section, ask: which pillar does this serve? If none, cut it.

---

## TL;DR for the first Lovable prompt

Build [page name] for QAWave, an AI-native QA studio. Dark mode (Deep Ocean `#0F172A`), Wave Blue accent (`#0EA5E9`), Geist Sans (semibold for headings), Tailwind utility classes only, no shadcn. Voice: confident, technical, no hype. The brand line is "Ride the AI wave in QA." Pricing tiers are $35k Design Sprint / $120k+ Implementation / $8k+/mo Continuous Ops. Audience: VP of Engineering and Head of QA at 200–2000-FTE B2B SaaS. Reference look-and-feel: vercel.com / linear.app / cursor.com. No fake metrics, no banned words (revolutionary, transform, disruptive, next-gen, cutting-edge, game-changing). See full context above.
