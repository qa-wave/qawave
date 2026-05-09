"use client";

import { motion } from "framer-motion";
import {
  GitBranch,
  Workflow,
  TestTube,
  MessageSquare,
  SquareKanban,
  type LucideIcon,
} from "lucide-react";
import { techCredData } from "@/data/landing";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import { SectionWrapper } from "@/components/ui/section-wrapper";

const iconMap: Record<string, LucideIcon> = {
  GitBranch,
  Workflow,
  TestTube,
  MessageSquare,
  SquareKanban,
};

export function TechCredSection() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <SectionWrapper id="integrations">
        {/* ---- Headline block ---- */}
        <div className="mx-auto mb-16 max-w-3xl text-center md:mb-20">
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-bold leading-[1.12] tracking-tight text-foreground md:text-4xl lg:text-5xl"
          >
            {techCredData.headline}
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mt-4 text-base leading-relaxed text-neutral-400 md:mt-6 md:text-lg"
          >
            {techCredData.subheadline}
          </motion.p>
        </div>

        {/* ---- Integrations grid ---- */}
        <motion.div
          variants={staggerContainer()}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-3 md:gap-6"
        >
          {techCredData.integrations.map((integration) => {
            const Icon = iconMap[integration.icon];
            return (
              <motion.div
                key={integration.name}
                variants={fadeInUp}
                className="flex items-center gap-3 rounded-xl border border-border bg-surface-raised px-4 py-3 transition-colors duration-200 hover:border-border-accent md:px-5 md:py-4"
              >
                {Icon ? (
                  <Icon className="h-5 w-5 shrink-0 text-accent-light" />
                ) : (
                  <div className="h-5 w-5 shrink-0 rounded bg-neutral-700" />
                )}
                <div>
                  <p className="text-sm font-medium text-foreground">
                    {integration.name}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ---- Exit strategy line ---- */}
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto mt-12 max-w-2xl border-t border-border pt-8 text-center text-sm text-neutral-500"
        >
          {techCredData.exitStrategyLine}
        </motion.p>
      </SectionWrapper>
    </motion.div>
  );
}

export default TechCredSection;
