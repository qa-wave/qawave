"use client";

import { useTranslations } from "next-intl";
import { motion, useReducedMotion } from "framer-motion";
import { Clock, CircleDollarSign, UserX, type LucideIcon } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/motion";

const ICON_MAP: Record<string, LucideIcon> = {
  Clock,
  CircleDollarSign,
  UserX,
};

interface Stat {
  icon: string;
  number: string;
  unit: string;
  label: string;
  supporting: string;
}

export function ProblemSection() {
  const t = useTranslations("problem");
  const stats = t.raw("stats") as Stat[];
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative py-24 md:py-32 lg:py-40" aria-labelledby="problem-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          id="problem-heading"
          variants={fadeInUp}
          initial={prefersReducedMotion ? "visible" : "hidden"}
          animate="visible"
          className="mx-auto max-w-3xl text-center text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl"
        >
          {t("headline")}
        </motion.h2>

        <motion.ul
          variants={staggerContainer(0.15)}
          initial={prefersReducedMotion ? "visible" : "hidden"}
          animate="visible"
          className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-6 md:mt-20 md:grid-cols-3 md:gap-8"
        >
          {stats.map((stat) => {
            const Icon = ICON_MAP[stat.icon] ?? Clock;
            return (
              <motion.li
                key={stat.label}
                variants={fadeInUp}
                className="group rounded-2xl border border-border bg-surface p-6 text-center transition-all duration-300 hover:border-border-accent hover:shadow-[0_0_30px_rgba(14,165,233,0.1)] md:p-8"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent-muted text-accent">
                  <Icon className="h-6 w-6" />
                </div>
                <p className="mt-5 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
                  {stat.number}
                </p>
                <p className="mt-1 text-xs uppercase tracking-widest text-neutral-300">
                  {stat.unit}
                </p>
                <p className="mt-4 text-base font-medium text-foreground">
                  {stat.label}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                  {stat.supporting}
                </p>
              </motion.li>
            );
          })}
        </motion.ul>

        <motion.p
          variants={fadeInUp}
          initial={prefersReducedMotion ? "visible" : "hidden"}
          animate="visible"
          className="mx-auto mt-14 max-w-2xl text-center text-base leading-relaxed text-neutral-400 md:text-lg"
        >
          {t("closingLine")}
        </motion.p>
      </div>
    </section>
  );
}

export default ProblemSection;
