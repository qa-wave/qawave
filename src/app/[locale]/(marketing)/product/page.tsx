import type { Metadata } from "next";
import ProductContent from "./content";

export const metadata: Metadata = {
  title: "Product — How QAWave agents work",
  description:
    "Generate tests from PR diffs, heal flaky selectors, triage CI failures in seconds. See code examples, architecture, and eval harness details.",
  keywords: [
    "AI test generation",
    "flaky test healing",
    "CI failure triage",
    "Playwright agent",
    "QA automation agent",
  ],
};

export default function ProductPage() {
<<<<<<< Updated upstream
  return <ProductContent />;
=======
  const t = useTranslations("productPage");
  const capabilities = t.raw("capabilities") as {
    title: string;
    items: ProductCapability[];
  };
  const integrations = t.raw("integrations") as {
    title: string;
    subtitle: string;
    categories: IntegrationCategory[];
  };

  return (
    <>
      {/* Hero */}
      <section className="pb-16 pt-32 md:pb-24 md:pt-40">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl lg:text-6xl"
          >
            {t("headline")}
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-neutral-400 md:text-lg"
          >
            {t("subheadline")}
          </motion.p>
        </div>
      </section>

      {/* Capabilities with code examples */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="text-center text-3xl font-semibold tracking-tight text-foreground md:text-4xl"
          >
            {capabilities.title}
          </motion.h2>

          <motion.div
            variants={staggerContainer(0.15)}
            initial="hidden"
            animate="visible"
            className="mt-16 space-y-24"
          >
            {capabilities.items.map((cap, idx) => {
              const Icon = ICON_MAP[cap.icon] ?? Sparkles;
              const codeBlocks = [GENERATED_TEST, HEALED_DIFF, TRIAGE_OUTPUT];
              const codeLabels = [
                "Agent output: generated test",
                "Agent output: healed selector",
                "Agent output: triage report",
              ];
              return (
                <motion.div key={cap.title} variants={fadeInUp}>
                  {/* Header */}
                  <div className="mb-6 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-muted">
                      <Icon
                        className="h-5 w-5 text-accent"
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="text-2xl font-medium text-foreground">
                      {cap.title}
                    </h3>
                  </div>

                  <div className="grid gap-8 lg:grid-cols-2">
                    {/* Left: description + details */}
                    <div>
                      <p className="text-base leading-relaxed text-neutral-400">
                        {cap.body}
                      </p>
                      <ul className="mt-6 space-y-3">
                        {cap.details.map((detail) => (
                          <li
                            key={detail}
                            className="flex gap-3 text-sm text-neutral-300"
                          >
                            <Check
                              className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                              aria-hidden="true"
                            />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Right: code example */}
                    <div className="overflow-hidden rounded-xl border border-border bg-[#0c1222]">
                      <div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
                        <div className="flex gap-1.5">
                          <span className="h-2.5 w-2.5 rounded-full bg-neutral-700" />
                          <span className="h-2.5 w-2.5 rounded-full bg-neutral-700" />
                          <span className="h-2.5 w-2.5 rounded-full bg-neutral-700" />
                        </div>
                        <span className="ml-2 text-xs text-neutral-500">
                          {codeLabels[idx]}
                        </span>
                      </div>
                      <pre className="overflow-x-auto p-4 text-[13px] leading-relaxed text-neutral-300">
                        <code>{codeBlocks[idx]}</code>
                      </pre>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Architecture diagram */}
      <section className="bg-surface/40 py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              How agents fit in your pipeline.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-neutral-400">
              Agents run inside your CI/CD. Your code never leaves your
              infrastructure.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="mx-auto mt-14 max-w-3xl"
          >
            {/* ASCII-style architecture as styled blocks */}
            <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
              {/* Your repo */}
              <div className="rounded-xl border border-border bg-background p-5">
                <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-neutral-500">
                  <GitPullRequest className="h-4 w-4" aria-hidden="true" />
                  Your repo
                </div>
                <ul className="space-y-1.5 text-sm text-neutral-400">
                  <li>Source code</li>
                  <li>Test suites</li>
                  <li>PR diffs</li>
                </ul>
              </div>

              {/* QAWave agents */}
              <div className="rounded-xl border border-border-accent bg-accent-muted p-5 shadow-[0_0_30px_rgba(14,165,233,0.08)]">
                <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
                  <Bot className="h-4 w-4" aria-hidden="true" />
                  QAWave agents
                </div>
                <ul className="space-y-1.5 text-sm text-neutral-300">
                  <li className="flex items-center gap-1.5">
                    <Sparkles className="h-3 w-3 text-accent" aria-hidden="true" />
                    Generate
                  </li>
                  <li className="flex items-center gap-1.5">
                    <HeartPulse className="h-3 w-3 text-accent" aria-hidden="true" />
                    Heal
                  </li>
                  <li className="flex items-center gap-1.5">
                    <Target className="h-3 w-3 text-accent" aria-hidden="true" />
                    Triage
                  </li>
                </ul>
              </div>

              {/* Your CI/CD */}
              <div className="rounded-xl border border-border bg-background p-5">
                <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-neutral-500">
                  <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                  Your CI/CD
                </div>
                <ul className="space-y-1.5 text-sm text-neutral-400">
                  <li>GitHub Actions</li>
                  <li>Test results</li>
                  <li>Deploy pipeline</li>
                </ul>
              </div>
            </div>

            {/* Flow arrows on desktop */}
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-neutral-600">
              <span className="text-xs">PR opened</span>
              <ArrowRight className="h-3 w-3 shrink-0" aria-hidden="true" />
              <span className="text-xs text-accent">agents analyze & generate</span>
              <ArrowRight className="h-3 w-3 shrink-0" aria-hidden="true" />
              <span className="text-xs">tests run in CI</span>
              <ArrowRight className="h-3 w-3 shrink-0" aria-hidden="true" />
              <span className="text-xs">PR ready for review</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Eval harness */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-center text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              Every agent output is evaluated.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-base text-neutral-400">
              Our eval harness runs nightly against a dataset of expected
              behaviors. Regressions are blocked before they reach your review
              queue.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            animate="visible"
            className="mt-14 grid gap-6 md:grid-cols-3"
          >
            <motion.div
              variants={fadeInUp}
              className="rounded-xl border border-border bg-surface p-6"
            >
              <p className="font-mono text-3xl font-semibold text-green-500">
                {"< 0.5 %"}
              </p>
              <p className="mt-2 text-sm text-neutral-400">
                Regression rate across all agent outputs in pilot engagements.
              </p>
              <p className="mt-1 text-xs text-neutral-600">Pilot data</p>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="rounded-xl border border-border bg-surface p-6"
            >
              <p className="font-mono text-3xl font-semibold text-accent">
                Nightly
              </p>
              <p className="mt-2 text-sm text-neutral-400">
                Eval harness runs against expected behaviors every night.
                Flagged outputs never reach your queue.
              </p>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="rounded-xl border border-border bg-surface p-6"
            >
              <p className="font-mono text-3xl font-semibold text-foreground">
                Full audit
              </p>
              <p className="mt-2 text-sm text-neutral-400">
                Every agent action logged: what was read, generated, and
                proposed. Audit trail available to customers.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Integrations */}
      <section id="integrations" className="bg-surface/40 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              {integrations.title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-neutral-400">
              {integrations.subtitle}
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            animate="visible"
            className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
          >
            {integrations.categories.map((cat) => (
              <motion.div
                key={cat.name}
                variants={fadeInUp}
                className="rounded-xl border border-border bg-surface p-6"
              >
                <h3 className="text-xs font-semibold uppercase tracking-widest text-accent">
                  {cat.name}
                </h3>
                <ul className="mt-4 space-y-2">
                  {cat.items.map((item) => (
                    <li key={item} className="text-sm text-neutral-300">
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <Button variant="primary" size="lg" href={t("cta.href")}>
            {t("cta.label")}
          </Button>
        </div>
      </section>
    </>
  );
>>>>>>> Stashed changes
}
