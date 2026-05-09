"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { fadeInUp } from "@/lib/motion";

export function AgenticMoatSection() {
  const t = useTranslations("agenticMoat");
  const paragraphs = t("body").split("\n\n");

  return (
    <section
      className="relative overflow-hidden py-24 md:py-32 lg:py-40"
      aria-labelledby="agentic-moat-heading"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          background:
            "linear-gradient(135deg, #0EA5E9 0%, #06B6D4 50%, #8B5CF6 100%)",
        }}
      />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeInUp}
          
          animate="visible" 
        >
          <h2
            id="agentic-moat-heading"
            className="text-center text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl"
          >
            {t("headline")}
          </h2>

          <div className="mt-12 space-y-5 text-base leading-relaxed text-neutral-300 md:text-lg">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <p
            className="mt-14 text-center font-serif text-5xl italic leading-tight text-accent-light md:text-6xl lg:text-7xl"
            style={{ fontFamily: "var(--font-instrument-serif), serif" }}
          >
            {t("stat")}
          </p>

          <div className="mt-12 text-center">
            <Link
              href={t("cta.href")}
              className="group inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-accent-light md:text-base"
            >
              {t("cta.label")}
              <ArrowRight
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AgenticMoatSection;
