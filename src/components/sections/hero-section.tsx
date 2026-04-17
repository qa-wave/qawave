"use client";

import { useEffect, useState } from "react";
import { motion, type Variants } from "framer-motion";
import { heroData } from "@/data/landing";
import { heroTextReveal } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

/* ------------------------------------------------------------------ */
/*  Animated network graph — AI agent exploring an application         */
/* ------------------------------------------------------------------ */

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
    opacity: 0.35,
    transition: { delay: 0.6 + i * 0.08, duration: 0.6, ease: "easeOut" },
  }),
};

const nodeCircle: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: (i: number) => ({
    scale: 1,
    opacity: 1,
    transition: { delay: 0.4 + i * 0.1, duration: 0.5, type: "spring", stiffness: 200 },
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
  return (
    <div className="relative w-full max-w-[400px] aspect-square">
      <svg
        viewBox="0 0 400 420"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Edges */}
        {EDGES.map((edge, i) => {
          const from = NODES[edge.from];
          const to = NODES[edge.to];
          return (
            <motion.path
              key={`edge-${edge.from}-${edge.to}`}
              d={`M ${from.cx} ${from.cy} L ${to.cx} ${to.cy}`}
              stroke="#6366f1"
              strokeWidth={1.5}
              strokeLinecap="round"
              custom={i}
              variants={edgeLine}
              initial="hidden"
              animate="visible"
            />
          );
        })}

        {/* Nodes */}
        {NODES.map((node) => (
          <g key={`node-${node.id}`}>
            {/* Pulse glow */}
            <motion.circle
              cx={node.cx}
              cy={node.cy}
              r={12}
              fill="#4f46e5"
              custom={node.id}
              variants={pulseGlow}
              initial="hidden"
              animate="visible"
            />
            {/* Core dot */}
            <motion.circle
              cx={node.cx}
              cy={node.cy}
              r={6}
              fill="#6366f1"
              stroke="#4f46e5"
              strokeWidth={2}
              custom={node.id}
              variants={nodeCircle}
              initial="hidden"
              animate="visible"
            />
          </g>
        ))}
      </svg>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Hero Section                                                       */
/* ------------------------------------------------------------------ */

export function HeroSection() {
  /* Prevent hydration flicker for animated elements */
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section
      className={cn(
        "relative flex min-h-screen items-center overflow-hidden"
      )}
    >
      <div
        className={cn(
          "mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8"
        )}
      >
        {/* ---- LEFT: Text ---- */}
        <div>
          {/* Badge */}
          <motion.div
            variants={heroTextReveal}
            initial="hidden"
            animate={mounted ? "visible" : "hidden"}
            custom={0}
            className="mb-6 mt-2"
          >
            <Badge>{heroData.badge}</Badge>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={heroTextReveal}
            initial="hidden"
            animate={mounted ? "visible" : "hidden"}
            custom={0.15}
            className="text-5xl font-bold leading-[1.08] tracking-tight text-foreground md:text-6xl lg:text-7xl"
          >
            {heroData.headline}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={heroTextReveal}
            initial="hidden"
            animate={mounted ? "visible" : "hidden"}
            custom={0.3}
            className="mt-6 max-w-xl text-base leading-relaxed text-neutral-400 md:text-lg"
          >
            {heroData.subheadline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={heroTextReveal}
            initial="hidden"
            animate={mounted ? "visible" : "hidden"}
            custom={0.45}
            className="mt-8 flex flex-col gap-4 sm:flex-row"
          >
            <Button variant="primary" href={heroData.primaryCta.href}>
              {heroData.primaryCta.label}
            </Button>
            <Button variant="secondary" href={heroData.secondaryCta.href}>
              {heroData.secondaryCta.label}
            </Button>
          </motion.div>
        </div>

        {/* ---- RIGHT: Visual ---- */}
        <div className="hidden items-center justify-center lg:flex">
          {mounted && <NetworkGraph />}
        </div>
      </div>

      {/* Bottom gradient separator */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
}

export default HeroSection;
