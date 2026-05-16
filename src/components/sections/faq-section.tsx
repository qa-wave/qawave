"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FaqItem {
  q: string;
  a: string;
}

export function FaqSection() {
  const t = useTranslations("faq");
  const items = t.raw("items") as FaqItem[];
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="relative py-24 md:py-32 lg:py-40" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2
          id="faq-heading"
          className="text-center text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl"
        >
          {t("headline")}
        </h2>

        <ul className="mt-14 divide-y divide-border rounded-2xl border border-border bg-surface md:mt-16">
          {items.map((item, i) => {
            const open = openIdx === i;
            return (
              <li key={i}>
                <button
                  type="button"
                  aria-expanded={open}
                  aria-controls={`faq-panel-${i}`}
                  id={`faq-trigger-${i}`}
                  onClick={() => setOpenIdx(open ? null : i)}
                  className={cn(
                    "flex w-full items-start justify-between gap-6 px-5 py-5 text-left transition-colors md:px-6 md:py-6",
                    "hover:bg-surface-raised/40 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
                  )}
                >
                  <span className="text-base font-medium text-foreground md:text-lg">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={cn(
                      "mt-1 h-5 w-5 flex-shrink-0 text-neutral-400 transition-transform duration-300",
                      open && "rotate-180 text-accent"
                    )}
                    aria-hidden="true"
                  />
                </button>
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      id={`faq-panel-${i}`}
                      role="region"
                      aria-labelledby={`faq-trigger-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-sm leading-relaxed text-neutral-400 md:px-6 md:pb-6 md:text-base">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default FaqSection;
