"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import {
  Sparkles,
  HeartPulse,
  Target,
  type LucideIcon,
} from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/motion";

const ICON_MAP: Record<string, LucideIcon> = {
  Sparkles,
  HeartPulse,
  Target,
};

interface Pillar {
  icon: string;
  emoji: string;
  title: string;
  body: string;
}

export function HowItWorksSection() {
  const t = useTranslations("howItWorks");
  const pillars = t.raw("pillars") as Pillar[];

  return (
    <section
      className="relative bg-surface/40 py-24 md:py-32 lg:py-40"
      aria-labelledby="how-it-works-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeInUp}
          
          animate="visible" 
          className="mx-auto max-w-3xl text-center"
        >
          <h2
            id="how-it-works-heading"
            className="text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl"
          >
            {t("headline")}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-neutral-400 md:text-lg">
            {t("subheadline")}
          </p>
        </motion.div>

        <motion.ul
          variants={staggerContainer(0.2)}
          
          animate="visible" 
          className="mt-16 grid grid-cols-1 gap-6 md:mt-20 md:grid-cols-3 md:gap-8"
        >
          {pillars.map((pillar) => {
            const Icon = ICON_MAP[pillar.icon] ?? Sparkles;
            return (
              <motion.li
                key={pillar.title}
                variants={fadeInUp}
                className="group flex flex-col rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-border-accent hover:shadow-[0_0_40px_rgba(14,165,233,0.12)] md:p-8 lg:p-10"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-muted text-accent transition-transform duration-300 group-hover:scale-110 md:h-14 md:w-14">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-xl font-medium tracking-tight text-foreground md:text-2xl">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-400 md:text-base">
                  {pillar.body}
                </p>
              </motion.li>
            );
          })}
        </motion.ul>

      </div>
    </section>
  );
}

export default HowItWorksSection;
