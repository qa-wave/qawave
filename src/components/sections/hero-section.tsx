"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Node {
  id: number;
  cx: number;
  cy: number;
}

interface Edge {
  from: number;
  to: number;
}

const NODES: Node[] = [
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

const EDGES: Edge[] = [
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

const edgeLine: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => ({
    pathLength: 1,
    opacity: 0.4,
    transition: { delay: 0.6 + i * 0.08, duration: 0.6, ease: "easeOut" },
  }),
};

const nodeCircle: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: (i: number) => ({
    scale: 1,
    opacity: 1,
    transition: {
      delay: 0.4 + i * 0.1,
      duration: 0.5,
      type: "spring",
      stiffness: 200,
    },
  }),
};

const pulseGlow: Variants = {
  hidden: { scale: 1, opacity: 0 },
  visible: (i: number) => ({
    scale: [1, 1.8, 1],
    opacity: [0, 0.4, 0],
    transition: {
      delay: 1.4 + i * 0.15,
      duration: 2,
      repeat: Infinity,
      repeatDelay: 3 + i * 0.3,
      ease: "easeInOut",
    },
  }),
};

function NetworkGraph() {
  const reduced = useReducedMotion();

  return (
    <div className="relative aspect-square w-full max-w-[400px]">
      <svg
        viewBox="0 0 400 420"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
        aria-hidden="true"
      >
        {EDGES.map((edge, i) => {
          const from = NODES[edge.from];
          const to = NODES[edge.to];
          return reduced ? (
            <path
              key={`edge-${edge.from}-${edge.to}`}
              d={`M ${from.cx} ${from.cy} L ${to.cx} ${to.cy}`}
              stroke="#06B6D4"
              strokeWidth={1.5}
              strokeLinecap="round"
              opacity={0.4}
            />
          ) : (
            <motion.path
              key={`edge-${edge.from}-${edge.to}`}
              d={`M ${from.cx} ${from.cy} L ${to.cx} ${to.cy}`}
              stroke="#06B6D4"
              strokeWidth={1.5}
              strokeLinecap="round"
              custom={i}
              variants={edgeLine}
              initial="hidden"
              animate="visible"
            />
          );
        })}
        {NODES.map((node) =>
          reduced ? (
            <circle
              key={`node-${node.id}`}
              cx={node.cx}
              cy={node.cy}
              r={6}
              fill="#06B6D4"
              stroke="#0EA5E9"
              strokeWidth={2}
            />
          ) : (
            <g key={`node-${node.id}`}>
              <motion.circle
                cx={node.cx}
                cy={node.cy}
                r={12}
                fill="#0EA5E9"
                custom={node.id}
                variants={pulseGlow}
                initial="hidden"
                animate="visible"
              />
              <motion.circle
                cx={node.cx}
                cy={node.cy}
                r={6}
                fill="#06B6D4"
                stroke="#0EA5E9"
                strokeWidth={2}
                custom={node.id}
                variants={nodeCircle}
                initial="hidden"
                animate="visible"
              />
            </g>
          ),
        )}
      </svg>
    </div>
  );
}

export function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section
      className={cn(
        "relative flex min-h-screen items-center overflow-hidden pt-24"
      )}
    >
      {/* Decorative wave gradient backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 70% 30%, rgba(14,165,233,1) 0%, rgba(6,182,212,0.6) 40%, rgba(139,92,246,0.4) 75%, transparent 100%)",
        }}
      />

      <div
        className={cn(
          "relative mx-auto grid w-full max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8"
        )}
      >
        <div>
          <div className="mb-6">
            <Badge>{t("badge")}</Badge>
          </div>

          <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-6xl lg:text-7xl">
            {t("headline")}
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-neutral-400 md:text-lg">
            {t("subheadline")}
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button variant="primary" href={t("primaryCta.href")}>
              {t("primaryCta.label")}
            </Button>
            <Button variant="secondary" href={t("secondaryCta.href")}>
              {t("secondaryCta.label")}
            </Button>
          </div>

          <p className="mt-8 max-w-md text-sm text-neutral-300">
            {t("trustPill")}
          </p>
        </div>

        <div className="hidden items-center justify-center lg:flex">
          <NetworkGraph />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
}

export default HeroSection;
