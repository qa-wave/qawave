"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeInUp, staggerContainer } from "@/lib/motion";

export default function CustomersPage() {
  const t = useTranslations("customersPage");
  const benefits = t.raw("designPartner.benefits") as string[];

  return (
    <section className="pb-24 pt-32 md:pb-32 md:pt-40">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.h1
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl"
        >
          {t("headline")}
        </motion.h1>
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="mt-4 text-base text-neutral-400 md:text-lg"
        >
          {t("subheadline")}
        </motion.p>

        {/* Empty state */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="mt-16 rounded-xl border border-border bg-surface p-8 md:p-10"
        >
          <h2 className="text-xl font-medium text-foreground">
            {t("emptyState.title")}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-neutral-400">
            {t("emptyState.body")}
          </p>
        </motion.div>

        {/* Design partner pitch */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="mt-12"
        >
          <h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
            {t("designPartner.title")}
          </h2>
          <motion.ul
            variants={staggerContainer(0.08)}
            initial="hidden"
            animate="visible"
            className="mt-8 space-y-4"
          >
            {benefits.map((benefit) => (
              <motion.li
                key={benefit}
                variants={fadeInUp}
                className="flex gap-3 text-base text-neutral-300"
              >
                <Check
                  className="mt-1 h-4 w-4 shrink-0 text-accent"
                  aria-hidden="true"
                />
                {benefit}
              </motion.li>
            ))}
          </motion.ul>

          <div className="mt-10">
            <Button variant="primary" size="lg" href={t("cta.href")}>
              {t("cta.label")}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
