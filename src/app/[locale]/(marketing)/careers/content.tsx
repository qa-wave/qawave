"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeInUp, staggerContainer } from "@/lib/motion";

export default function CareersPage() {
  const t = useTranslations("careersPage");
  const body = t.raw("body") as string[];
  const agentRoles = t.raw("agentRoles") as Array<{
    title: string;
    body: string;
  }>;

  return (
    <>
      <section className="pb-16 pt-32 md:pb-24 md:pt-40">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
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
            className="mt-3 text-xl text-neutral-400 md:text-2xl"
          >
            {t("subheadline")}
          </motion.p>

          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            animate="visible"
            className="mt-10 space-y-5"
          >
            {body.map((p, i) => (
              <motion.p
                key={i}
                variants={fadeInUp}
                className="text-base leading-relaxed text-neutral-300 md:text-lg"
              >
                {p}
              </motion.p>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Agent roster */}
      <section className="bg-surface/40 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer(0.08)}
            initial="hidden"
            animate="visible"
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {agentRoles.map((role) => (
              <motion.div
                key={role.title}
                variants={fadeInUp}
                className="rounded-xl border border-border bg-background p-6"
              >
                <div className="mb-3 flex items-center gap-2">
                  <Bot
                    className="h-4 w-4 text-ai-purple"
                    aria-hidden="true"
                  />
                  <h3 className="text-sm font-medium text-foreground">
                    {role.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-neutral-400">
                  {role.body}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

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
