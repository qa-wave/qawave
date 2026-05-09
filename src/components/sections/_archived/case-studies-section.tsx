"use client";

import { motion } from "framer-motion";
import {
  Landmark,
  ShoppingCart,
  HeartPulse,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { caseStudiesData, type CaseStudy } from "@/data/landing";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { cn } from "@/lib/utils";

const ICON_MAP: Record<string, LucideIcon> = {
  Landmark,
  ShoppingCart,
  HeartPulse,
};

function CaseStudyCard({ study, index }: { study: CaseStudy; index: number }) {
  const Icon = ICON_MAP[study.icon] ?? Landmark;

  return (
    <motion.article
      variants={fadeInUp}
      className={cn(
        "group relative rounded-2xl border border-border bg-surface-raised overflow-hidden",
        "hover:border-border-accent transition-colors duration-300",
      )}
    >
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-border px-6 py-4 md:px-8 md:py-5">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-muted">
          <Icon className="h-5 w-5 text-accent-light" />
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-accent-light">
            {study.industry}
          </p>
          <p className="mt-0.5 text-sm text-neutral-500">
            {study.companyDescription}
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="px-6 py-6 md:px-8 md:py-8">
        {/* Challenge */}
        <div className="mb-6">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-neutral-500">
            Challenge
          </p>
          <p className="text-sm leading-relaxed text-neutral-400">
            {study.challenge}
          </p>
        </div>

        {/* Approach */}
        <div className="mb-6">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-neutral-500">
            Our approach
          </p>
          <p className="text-sm leading-relaxed text-neutral-400">
            {study.approach}
          </p>
        </div>

        {/* Results */}
        <div className="mb-6 grid grid-cols-3 gap-4 rounded-xl border border-border bg-surface p-4">
          {study.results.map((r) => (
            <div key={r.label} className="text-center">
              <p className="text-xl font-bold tracking-tight text-foreground md:text-2xl">
                {r.metric}
              </p>
              <p className="mt-1 text-xs text-neutral-500">{r.label}</p>
            </div>
          ))}
        </div>

        {/* Quote */}
        {study.quote && (
          <blockquote className="border-l-2 border-accent-muted pl-4">
            <p className="text-sm italic leading-relaxed text-neutral-300">
              &ldquo;{study.quote}&rdquo;
            </p>
            {study.quoteAttribution && (
              <footer className="mt-2 text-xs text-neutral-500">
                &mdash; {study.quoteAttribution}
              </footer>
            )}
          </blockquote>
        )}
      </div>
    </motion.article>
  );
}

export function CaseStudiesSection() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <SectionWrapper id="case-studies">
        {/* Headline */}
        <div className="mx-auto mb-16 max-w-3xl text-center md:mb-20">
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-bold leading-[1.12] tracking-tight text-foreground md:text-4xl lg:text-5xl"
          >
            {caseStudiesData.headline}
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mt-4 text-base leading-relaxed text-neutral-400 md:mt-6 md:text-lg"
          >
            {caseStudiesData.subheadline}
          </motion.p>
        </div>

        {/* Cards */}
        <motion.div
          variants={staggerContainer(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-6 lg:grid-cols-3 md:gap-8"
        >
          {caseStudiesData.studies.map((study, i) => (
            <CaseStudyCard key={study.industry} study={study} index={i} />
          ))}
        </motion.div>

        {/* CTA link */}
        <motion.div variants={fadeInUp} className="mt-12 text-center">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent-light hover:text-accent-foreground transition-colors"
          >
            Discuss your project with us
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </SectionWrapper>
    </motion.div>
  );
}

export default CaseStudiesSection;
