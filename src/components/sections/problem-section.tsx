"use client";

import { motion } from "framer-motion";
import { problemData } from "@/data/landing";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { MetricCard } from "@/components/ui/metric-card";

export function ProblemSection() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <SectionWrapper id="problem">
        {/* ---- Headline block ---- */}
        <div className="mx-auto mb-16 max-w-3xl text-center md:mb-20">
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-bold leading-[1.12] tracking-tight text-foreground md:text-4xl lg:text-5xl"
          >
            {problemData.headline}
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mt-4 text-base leading-relaxed text-neutral-400 md:mt-6 md:text-lg"
          >
            {problemData.subheadline}
          </motion.p>
        </div>

        {/* ---- Stat cards grid ---- */}
        <motion.div
          variants={staggerContainer()}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8"
        >
          {problemData.stats.map((stat) => (
            <MetricCard
              key={stat.label}
              value={stat.number}
              numericValue={stat.numericValue}
              suffix={stat.suffix}
              label={stat.label}
              supportingText={stat.supportingText}
              source={stat.source}
              sourceUrl={stat.sourceUrl}
            />
          ))}
        </motion.div>
      </SectionWrapper>
    </motion.div>
  );
}

export default ProblemSection;
