"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/motion";

export default function BlogPage() {
  const t = useTranslations("blogPage");

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

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="mt-16 rounded-xl border border-border bg-surface p-10 text-center"
        >
          <p className="text-base text-neutral-400">{t("emptyState")}</p>
        </motion.div>
      </div>
    </section>
  );
}
