"use client";

import { motion } from "framer-motion";
import { ArrowRight, Radar, RefreshCw, ShieldCheck } from "lucide-react";
import {
  ctaData,
  heroData,
  problemData,
  uvpData,
} from "@/data/landing";
import type { DesignPreset } from "@/data/design-presets";
import { cn } from "@/lib/utils";

interface ShowcaseProps {
  preset: DesignPreset;
}

const ICONS = [Radar, RefreshCw, ShieldCheck] as const;

export function StyledShowcase({ preset }: ShowcaseProps) {
  const c = preset.componentClass ?? {};
  const sc = preset.sectionClass ?? {};

  const headlineCase = preset.headlineTransform === "uppercase" ? "uppercase" : "";
  const headlineSerif = preset.headlineSerif
    ? "[font-family:Georgia,'Times_New_Roman',serif]"
    : "";

  const cssVars = preset.vars as React.CSSProperties;

  return (
    <div
      className={cn(
        "qa-style-root relative min-h-screen overflow-hidden",
        preset.rootClass,
        preset.bodyClass
      )}
      style={{
        ...cssVars,
        fontFamily: preset.fontFamily,
        colorScheme: preset.scheme,
      }}
    >
      {/* ============================== HERO ============================== */}
      <section
        className={cn(
          "relative flex min-h-[88vh] items-center overflow-hidden pt-32 pb-20",
          sc.hero
        )}
      >
        {preset.heroDecorClass && (
          <div
            aria-hidden
            className={cn(
              "pointer-events-none absolute inset-0",
              preset.heroDecorClass
            )}
          />
        )}

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[55%_45%] lg:gap-12 lg:px-8">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className={cn(
                "mb-6 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium",
                "border-[var(--ds-border-strong)] bg-[var(--ds-accent-soft)] text-[var(--ds-accent)]",
                c.badge
              )}
            >
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: "var(--ds-accent)" }}
                aria-hidden
              />
              {heroData.badge}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className={cn(
                "text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl",
                "text-[var(--ds-text)]",
                headlineCase,
                headlineSerif,
                c.headline
              )}
            >
              {heroData.headline}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className={cn(
                "mt-6 max-w-xl text-base leading-relaxed md:text-lg",
                "text-[var(--ds-text-muted)]",
                c.body
              )}
            >
              {heroData.subheadline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <PrimaryCta preset={preset}>
                {heroData.primaryCta.label}
              </PrimaryCta>
              <SecondaryCta preset={preset}>
                {heroData.secondaryCta.label}
              </SecondaryCta>
            </motion.div>
          </div>

          {/* Visual */}
          <div className="hidden items-center justify-center lg:flex">
            <PresetVisual preset={preset} />
          </div>
        </div>
      </section>

      {/* ============================== PROBLEM (stat band) ============================== */}
      <section className="relative px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-3">
          {problemData.stats.map((stat) => (
            <div
              key={stat.label}
              className={cn(
                "group rounded-[var(--ds-radius)] border border-[var(--ds-border)] p-6 transition-all duration-300",
                "bg-[var(--ds-surface)] hover:border-[var(--ds-border-strong)]",
                c.pillarCard
              )}
            >
              <div
                className={cn(
                  "text-5xl font-bold leading-none tracking-tighter md:text-6xl",
                  "text-[var(--ds-text)]",
                  headlineSerif
                )}
              >
                {stat.number}
              </div>
              <div className="mt-3 text-sm font-semibold text-[var(--ds-text)]">
                {stat.label}
              </div>
              <p className="mt-2 text-sm leading-relaxed text-[var(--ds-text-muted)]">
                {stat.supportingText}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ============================== PILLARS ============================== */}
      <section className={cn("relative px-4 py-24 sm:px-6 lg:px-8", sc.pillars)}>
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <h2
              className={cn(
                "text-3xl font-bold leading-[1.12] tracking-tight md:text-4xl lg:text-5xl",
                "text-[var(--ds-text)]",
                headlineCase,
                headlineSerif,
                c.headline
              )}
            >
              {uvpData.headline}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--ds-text-muted)] md:mt-6 md:text-lg">
              {uvpData.subheadline}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 md:gap-8">
            {uvpData.pillars.map((pillar, i) => {
              const Icon = ICONS[i] ?? Radar;
              return (
                <motion.div
                  key={pillar.headline}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className={cn(
                    "group relative flex flex-col rounded-[var(--ds-radius)] border border-[var(--ds-border)] p-6 transition-all duration-300 md:p-8",
                    "bg-[var(--ds-surface)] hover:border-[var(--ds-border-strong)]",
                    c.pillarCard
                  )}
                >
                  <div
                    className={cn(
                      "flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 md:h-14 md:w-14",
                      "bg-[var(--ds-accent-soft)] text-[var(--ds-accent)] group-hover:scale-110",
                      c.pillarIcon
                    )}
                  >
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3
                    className={cn(
                      "mt-4 text-xl font-semibold leading-snug tracking-tight md:text-2xl",
                      "text-[var(--ds-text)]",
                      headlineCase,
                      headlineSerif
                    )}
                  >
                    {pillar.headline}
                  </h3>

                  <p
                    className={cn(
                      "mt-2 text-base font-normal italic leading-relaxed md:text-lg",
                      "text-[var(--ds-accent-2)]",
                      c.pillarTagline
                    )}
                  >
                    {pillar.tagline}
                  </p>

                  <p className="mt-3 text-sm leading-relaxed text-[var(--ds-text-muted)] md:text-base">
                    {pillar.description}
                  </p>

                  <ul className="mt-4 space-y-2">
                    {pillar.bullets.slice(0, 2).map((b) => (
                      <li
                        key={b.bold}
                        className="text-sm text-[var(--ds-text-muted)]"
                      >
                        <span className="font-semibold text-[var(--ds-text)]">
                          {b.bold}
                        </span>{" "}
                        — {b.text}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================== CTA ============================== */}
      <section
        className={cn(
          "relative px-4 py-32 text-center sm:px-6 lg:px-8",
          sc.cta
        )}
      >
        <div className="relative mx-auto max-w-3xl">
          <h2
            className={cn(
              "text-3xl font-bold leading-[1.12] tracking-tight md:text-4xl lg:text-5xl",
              "text-[var(--ds-text)]",
              headlineCase,
              headlineSerif,
              c.headline
            )}
          >
            {ctaData.headline}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[var(--ds-text-muted)] md:text-lg">
            {ctaData.subheadline}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <PrimaryCta preset={preset}>{ctaData.primaryCta.label}</PrimaryCta>
            <SecondaryCta preset={preset}>
              {ctaData.secondaryCta.label}
            </SecondaryCta>
          </div>
        </div>
      </section>

      {/* Footer marker */}
      <footer className="border-t border-[var(--ds-border)] px-4 py-8 text-center text-xs text-[var(--ds-text-muted)] sm:px-6">
        Style preset:{" "}
        <span className="font-semibold text-[var(--ds-text)]">
          {preset.label}
        </span>{" "}
        · qawave.ai · /design/styles
      </footer>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Buttons                                                            */
/* ------------------------------------------------------------------ */

function PrimaryCta({
  preset,
  children,
}: {
  preset: DesignPreset;
  children: React.ReactNode;
}) {
  const c = preset.componentClass ?? {};
  return (
    <button
      type="button"
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-[var(--ds-radius)] px-7 py-3 text-sm font-semibold transition-all duration-200 md:text-base",
        "bg-[var(--ds-accent)] text-white shadow-[0_0_24px_var(--ds-accent-soft)] hover:scale-[1.03] hover:shadow-[0_0_36px_var(--ds-accent-soft)]",
        c.primaryButton
      )}
    >
      {children}
      <ArrowRight className="h-4 w-4" aria-hidden />
    </button>
  );
}

function SecondaryCta({
  preset,
  children,
}: {
  preset: DesignPreset;
  children: React.ReactNode;
}) {
  const c = preset.componentClass ?? {};
  return (
    <button
      type="button"
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-[var(--ds-radius)] border border-[var(--ds-border-strong)] bg-transparent px-7 py-3 text-sm font-semibold transition-all duration-200 md:text-base",
        "text-[var(--ds-text)] hover:bg-[var(--ds-surface-2)]",
        c.secondaryButton
      )}
    >
      {children}
    </button>
  );
}

/* ------------------------------------------------------------------ */
/*  Per-preset hero visual                                             */
/* ------------------------------------------------------------------ */

function PresetVisual({ preset }: { preset: DesignPreset }) {
  return <NetworkGraph preset={preset} />;
}

/* ------------------------------------------------------------------ */
/*  Network graph (default visual)                                    */
/* ------------------------------------------------------------------ */

const NODES: { id: number; cx: number; cy: number }[] = [
  { id: 0, cx: 200, cy: 60 },
  { id: 1, cx: 100, cy: 130 },
  { id: 2, cx: 300, cy: 120 },
  { id: 3, cx: 55, cy: 220 },
  { id: 4, cx: 175, cy: 200 },
  { id: 5, cx: 310, cy: 210 },
  { id: 6, cx: 120, cy: 300 },
  { id: 7, cx: 250, cy: 285 },
  { id: 8, cx: 350, cy: 300 },
  { id: 9, cx: 200, cy: 365 },
];

const EDGES: { from: number; to: number }[] = [
  { from: 0, to: 1 },
  { from: 0, to: 2 },
  { from: 1, to: 3 },
  { from: 1, to: 4 },
  { from: 2, to: 4 },
  { from: 2, to: 5 },
  { from: 3, to: 6 },
  { from: 4, to: 6 },
  { from: 4, to: 7 },
  { from: 5, to: 7 },
  { from: 5, to: 8 },
  { from: 6, to: 9 },
  { from: 7, to: 9 },
  { from: 8, to: 7 },
];

function NetworkGraph({ preset }: { preset: DesignPreset }) {
  const stroke = preset.vars["--ds-accent-2"] ?? "#6366f1";
  const fill = preset.vars["--ds-accent"] ?? "#4f46e5";

  return (
    <div className="relative aspect-square w-full max-w-[400px]">
      <svg
        viewBox="0 0 400 420"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
      >
        {EDGES.map((edge, i) => {
          const from = NODES[edge.from];
          const to = NODES[edge.to];
          return (
            <motion.path
              key={`edge-${edge.from}-${edge.to}`}
              d={`M ${from.cx} ${from.cy} L ${to.cx} ${to.cy}`}
              stroke={stroke}
              strokeWidth={1.5}
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.4 }}
              transition={{ delay: 0.4 + i * 0.06, duration: 0.6 }}
            />
          );
        })}

        {NODES.map((node) => (
          <g key={`node-${node.id}`}>
            <motion.circle
              cx={node.cx}
              cy={node.cy}
              r={12}
              fill={fill}
              initial={{ scale: 1, opacity: 0 }}
              animate={{ scale: [1, 1.8, 1], opacity: [0, 0.35, 0] }}
              transition={{
                delay: 1.2 + node.id * 0.12,
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3,
                ease: "easeInOut",
              }}
            />
            <motion.circle
              cx={node.cx}
              cy={node.cy}
              r={6}
              fill={stroke}
              stroke={fill}
              strokeWidth={2}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3 + node.id * 0.08, duration: 0.4 }}
            />
          </g>
        ))}
      </svg>
    </div>
  );
}
