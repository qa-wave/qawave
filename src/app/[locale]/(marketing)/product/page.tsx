"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import {
  Sparkles,
  HeartPulse,
  Target,
  Check,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import type { ProductCapability, IntegrationCategory } from "@/data/messages/types";

const ICON_MAP: Record<string, LucideIcon> = {
  Sparkles,
  HeartPulse,
  Target,
};

export default function ProductPage() {
  const t = useTranslations("productPage");
  const capabilities = t.raw("capabilities") as {
    title: string;
    items: ProductCapability[];
  };
  const integrations = t.raw("integrations") as {
    title: string;
    subtitle: string;
    categories: IntegrationCategory[];
  };

  return (
    <>
      {/* Hero */}
      <section className="pb-16 pt-32 md:pb-24 md:pt-40">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl lg:text-6xl"
          >
            {t("headline")}
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-neutral-400 md:text-lg"
          >
            {t("subheadline")}
          </motion.p>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="text-center text-3xl font-semibold tracking-tight text-foreground md:text-4xl"
          >
            {capabilities.title}
          </motion.h2>

          <motion.div
            variants={staggerContainer(0.15)}
            initial="hidden"
            animate="visible"
            className="mt-16 space-y-16"
          >
            {capabilities.items.map((cap) => {
              const Icon = ICON_MAP[cap.icon] ?? Sparkles;
              return (
                <motion.div
                  key={cap.title}
                  variants={fadeInUp}
                  className="grid gap-8 md:grid-cols-2 md:gap-12"
                >
                  <div>
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-muted">
                        <Icon
                          className="h-5 w-5 text-accent"
                          aria-hidden="true"
                        />
                      </div>
                      <h3 className="text-2xl font-medium text-foreground">
                        {cap.title}
                      </h3>
                    </div>
                    <p className="text-base leading-relaxed text-neutral-400">
                      {cap.body}
                    </p>
                  </div>
                  <ul className="space-y-3">
                    {cap.details.map((detail) => (
                      <li key={detail} className="flex gap-3 text-sm text-neutral-300">
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                          aria-hidden="true"
                        />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Integrations */}
      <section id="integrations" className="bg-surface/40 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              {integrations.title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-neutral-400">
              {integrations.subtitle}
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            animate="visible"
            className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
          >
            {integrations.categories.map((cat) => (
              <motion.div
                key={cat.name}
                variants={fadeInUp}
                className="rounded-xl border border-border bg-surface p-6"
              >
                <h3 className="text-xs font-semibold uppercase tracking-widest text-accent">
                  {cat.name}
                </h3>
                <ul className="mt-4 space-y-2">
                  {cat.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-neutral-300"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <Button variant="primary" size="lg" href={t("cta.href")}>
            {t("cta.label")}
          </Button>
        </div>
      </section>
    </>
  );
}
