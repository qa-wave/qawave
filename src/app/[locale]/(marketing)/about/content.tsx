"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { fadeInUp, staggerContainer } from "@/lib/motion";

export default function AboutPage() {
  const t = useTranslations("aboutPage");
  const founderStory = t.raw("founderStory") as string[];
  const values = t.raw("values") as Array<{ title: string; body: string }>;

  return (
    <>
      {/* Hero */}
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

          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            animate="visible"
            className="mt-10 space-y-5"
          >
            {founderStory.map((p, i) => (
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

      {/* Mission */}
      <section className="bg-surface/40 py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} initial="hidden" animate="visible">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
              {t("mission.title")}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-neutral-300 md:text-lg">
              {t("mission.body")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section id="press" className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer(0.15)}
            initial="hidden"
            animate="visible"
            className="grid gap-8 md:grid-cols-3"
          >
            {values.map((value) => (
              <motion.div
                key={value.title}
                variants={fadeInUp}
                className="rounded-2xl border border-border bg-surface p-6 md:p-8"
              >
                <h3 className="text-lg font-medium text-foreground">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-400">
                  {value.body}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <Button variant="primary" size="lg" href={t("cta.href")}>
            {t("cta.label")}
          </Button>
        </div>
      </section>
    </>
  );
}
