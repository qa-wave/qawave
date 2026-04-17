"use client";

import { motion } from "framer-motion";
import {
  GitBranch,
  BrainCircuit,
  CheckCircle,
  Search,
  Wrench,
  GraduationCap,
  type LucideIcon,
} from "lucide-react";
import { howItWorksData } from "@/data/landing";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { SectionWrapper } from "@/components/ui/section-wrapper";

/* ------------------------------------------------------------------ */
/*  Icon map — resolve step icon names to Lucide components            */
/* ------------------------------------------------------------------ */

const ICON_MAP: Record<string, LucideIcon> = {
  GitBranch,
  BrainCircuit,
  CheckCircle,
  Search,
  Wrench,
  GraduationCap,
};

function resolveIcon(name: string): LucideIcon {
  return ICON_MAP[name] ?? GitBranch;
}

/* ------------------------------------------------------------------ */
/*  How It Works Section                                               */
/* ------------------------------------------------------------------ */

export function HowItWorksSection() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <SectionWrapper id="how-it-works">
        {/* ---- Headline block ---- */}
        <div className="mb-16 text-center md:mb-20">
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-bold leading-[1.12] tracking-tight text-foreground md:text-4xl lg:text-5xl"
          >
            {howItWorksData.headline}
          </motion.h2>
        </div>

        {/* ---- Steps grid ---- */}
        <motion.div
          variants={staggerContainer()}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8"
        >
          {/* Connector line (desktop only) */}
          <div
            className={cn(
              "pointer-events-none absolute left-[16%] right-[16%] top-8 hidden h-px md:block",
              "bg-gradient-to-r from-border via-border-accent to-border"
            )}
          />

          {howItWorksData.steps.map((step) => {
            const Icon = resolveIcon(step.icon);

            return (
              <motion.div
                key={step.number}
                variants={fadeInUp}
                className="relative flex flex-col items-center text-center"
              >
                {/* Icon box */}
                <div
                  className={cn(
                    "mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl",
                    "border border-border-accent bg-accent-muted"
                  )}
                >
                  <Icon className="h-8 w-8 text-accent-light" />
                </div>

                {/* Step number */}
                <span className="font-mono text-sm text-accent-light">
                  {step.number}
                </span>

                {/* Title */}
                <h3 className="mt-2 text-xl font-semibold leading-snug tracking-tight text-foreground md:text-2xl">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-neutral-400 md:text-base">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </SectionWrapper>
    </motion.div>
  );
}

export default HowItWorksSection;
