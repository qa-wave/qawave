"use client";

import { motion } from "framer-motion";
import {
  Radar,
  RefreshCw,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { uvpData } from "@/data/landing";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { SectionWrapper } from "@/components/ui/section-wrapper";

/* ------------------------------------------------------------------ */
/*  Icon map — resolve pillar icon names to Lucide components          */
/* ------------------------------------------------------------------ */

const ICON_MAP: Record<string, LucideIcon> = {
  Radar,
  RefreshCw,
  ShieldCheck,
  // Fallback aliases for common alternative names from data
  radar: Radar,
  "refresh-cw": RefreshCw,
  refreshCw: RefreshCw,
  "shield-check": ShieldCheck,
  shieldCheck: ShieldCheck,
};

function resolveIcon(name: string): LucideIcon {
  return ICON_MAP[name] ?? Radar;
}

/* ------------------------------------------------------------------ */
/*  UVP Section                                                        */
/* ------------------------------------------------------------------ */

export function UvpSection() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <SectionWrapper id="platform">
        {/* ---- Headline block ---- */}
        <div className="mb-16 text-center md:mb-20">
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-bold leading-[1.12] tracking-tight text-foreground md:text-4xl lg:text-5xl"
          >
            {uvpData.headline}
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-neutral-400 md:mt-6 md:text-lg"
          >
            {uvpData.subheadline}
          </motion.p>
        </div>

        {/* ---- Pillar cards grid ---- */}
        <motion.div
          variants={staggerContainer()}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8"
        >
          {uvpData.pillars.map((pillar) => {
            const Icon = resolveIcon(pillar.icon);

            return (
              <motion.div
                key={pillar.headline}
                variants={fadeInUp}
                className={cn(
                  "group relative flex flex-col rounded-2xl border border-border bg-surface-raised",
                  "p-6 md:p-8 lg:p-10",
                  "transition-all duration-300 hover:-translate-y-1 hover:border-border-accent",
                  "hover:shadow-[0_0_40px_rgba(79,70,229,0.12)]"
                )}
              >
                {/* Icon */}
                <div
                  className={cn(
                    "flex h-12 w-12 items-center justify-center rounded-xl bg-accent-muted md:h-14 md:w-14",
                    "text-accent transition-transform duration-300 group-hover:scale-110"
                  )}
                >
                  <Icon className="h-6 w-6" />
                </div>

                {/* Headline */}
                <h3 className="mt-4 text-xl font-semibold leading-snug tracking-tight text-foreground md:text-2xl">
                  {pillar.headline}
                </h3>

                {/* Tagline */}
                <p className="mt-2 text-base font-normal italic leading-relaxed text-accent-light md:text-lg">
                  {pillar.tagline}
                </p>

                {/* Description */}
                <p className="mt-3 text-sm leading-relaxed text-neutral-400 md:text-base">
                  {pillar.description}
                </p>

                {/* Bullet points */}
                <ul className="mt-4 space-y-3">
                  {pillar.bullets.map((b) => (
                    <li
                      key={b.bold}
                      className="text-sm text-neutral-400"
                    >
                      <span className="font-semibold text-foreground">
                        {b.bold}
                      </span>{" "}
                      &mdash; {b.text}
                    </li>
                  ))}
                </ul>

                {/* Learn more link */}
                <a
                  href={pillar.href ?? "#"}
                  className={cn(
                    "mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-medium",
                    "text-accent transition-colors duration-200 group-hover:text-accent-light"
                  )}
                >
                  Learn more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 10a.75.75 0 0 1 .75-.75h6.638L10.23 7.29a.75.75 0 1 1 1.04-1.08l3.5 3.25a.75.75 0 0 1 0 1.08l-3.5 3.25a.75.75 0 1 1-1.04-1.08l2.158-1.96H5.75A.75.75 0 0 1 5 10Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </motion.div>
            );
          })}
        </motion.div>
      </SectionWrapper>
    </motion.div>
  );
}

export default UvpSection;
