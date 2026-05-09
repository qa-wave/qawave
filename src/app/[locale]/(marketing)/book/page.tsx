"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import {
  Clock,
  MessageSquare,
  FileText,
  Mail,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeInUp, staggerContainer } from "@/lib/motion";

const ICON_MAP: Record<string, LucideIcon> = {
  Clock,
  MessageSquare,
  FileText,
};

export default function BookPage() {
  const t = useTranslations("bookPage");
  const expectations = t.raw("expectations") as Array<{
    icon: string;
    title: string;
    body: string;
  }>;

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

        {/* What to expect */}
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          animate="visible"
          className="mt-14 space-y-6"
        >
          {expectations.map((item) => {
            const Icon = ICON_MAP[item.icon] ?? Clock;
            return (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                className="flex gap-4 rounded-xl border border-border bg-surface p-6"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-muted">
                  <Icon
                    className="h-5 w-5 text-accent"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <h2 className="text-base font-medium text-foreground">
                    {item.title}
                  </h2>
                  <p className="mt-1 text-sm leading-relaxed text-neutral-400">
                    {item.body}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Contact */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="mt-14 rounded-xl border border-border-accent bg-surface p-8 text-center"
        >
          <h2 className="text-lg font-medium text-foreground">
            {t("contact.title")}
          </h2>
          <a
            href={`mailto:${t("contact.email")}`}
            className="mt-3 inline-flex items-center gap-2 text-lg font-medium text-accent transition-colors hover:text-accent-light"
          >
            <Mail className="h-5 w-5" aria-hidden="true" />
            {t("contact.email")}
          </a>
          <p className="mt-3 text-sm text-neutral-500">
            {t("contact.note")}
          </p>
        </motion.div>

        <div className="mt-10 text-center">
          <Button variant="primary" size="lg" href={t("cta.href")}>
            {t("cta.label")}
          </Button>
        </div>
      </div>
    </section>
  );
}
