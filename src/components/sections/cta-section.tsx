"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { fadeInUp } from "@/lib/motion";

export function CtaSection() {
  const t = useTranslations("finalCta");

  return (
    <section
      className="relative overflow-hidden py-32 md:py-40 lg:py-48"
      aria-labelledby="final-cta-heading"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 50% 50%, rgba(14,165,233,0.18), transparent)",
        }}
      />
      <motion.div
        variants={fadeInUp}
        
        whileInView="visible" 
        viewport={{ once: true, amount: 0.1 }}
        className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8"
      >
        <h2
          id="final-cta-heading"
          className="text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl"
        >
          {t("headline")}
        </h2>
        <p className="mt-6 text-base leading-relaxed text-neutral-400 md:text-lg">
          {t("subheadline")}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row md:mt-12">
          <Button variant="primary" size="lg" href={t("primaryCta.href")}>
            {t("primaryCta.label")}
          </Button>
          <Button variant="ghost" href={t("secondaryCta.href")}>
            {t("secondaryCta.label")}
          </Button>
        </div>
      </motion.div>
    </section>
  );
}

export default CtaSection;
