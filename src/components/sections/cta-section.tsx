"use client";

import { motion } from "framer-motion";
import { ctaData } from "@/data/landing";
import { fadeInUp } from "@/lib/motion";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="relative py-32 md:py-40 lg:py-48">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-muted/50 to-transparent" />

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8"
      >
        <h2 className="text-3xl font-bold leading-[1.12] tracking-tight text-foreground md:text-4xl lg:text-5xl">
          {ctaData.headline}
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-neutral-400 md:text-lg">
          {ctaData.subheadline}
        </p>
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Button variant="primary" href={ctaData.primaryCta.href}>
            {ctaData.primaryCta.label}
          </Button>
          <Button variant="secondary" href={ctaData.secondaryCta.href}>
            {ctaData.secondaryCta.label}
          </Button>
        </div>
      </motion.div>
    </section>
  );
}

export default CtaSection;
