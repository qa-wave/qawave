"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Check, Minus, X, ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { fadeInUp } from "@/lib/motion";
import { cn } from "@/lib/utils";

type ComparisonValue = "yes" | "partial" | "no";

interface Row {
  feature: string;
  values: [ComparisonValue, ComparisonValue, ComparisonValue, ComparisonValue];
}

function ValueCell({ value }: { value: ComparisonValue }) {
  if (value === "yes") {
    return (
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-accent-muted text-accent">
        <Check className="h-4 w-4" aria-label="yes" />
      </span>
    );
  }
  if (value === "partial") {
    return (
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-warning/15 text-warning">
        <Minus className="h-4 w-4" aria-label="partial" />
      </span>
    );
  }
  return (
    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-error/15 text-error">
      <X className="h-4 w-4" aria-label="no" />
    </span>
  );
}

export function ComparisonSection() {
  const t = useTranslations("comparison");
  const columns = t.raw("columns") as [string, string, string, string];
  const rows = t.raw("rows") as Row[];

  return (
    <section className="relative py-24 md:py-32 lg:py-40" aria-labelledby="comparison-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          id="comparison-heading"
          variants={fadeInUp}
          
          animate="visible" 
          className="mx-auto max-w-3xl text-center text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl"
        >
          {t("headline")}
        </motion.h2>

        <motion.div
          variants={fadeInUp}
          
          animate="visible" 
          className="mx-auto mt-14 max-w-5xl overflow-x-auto rounded-2xl border border-border bg-surface/60 md:mt-20"
        >
          <table className="w-full min-w-[520px] text-left">
            <thead>
              <tr className="border-b border-border">
                <th className="px-3 py-3 text-[10px] font-medium uppercase tracking-widest text-neutral-400 md:px-6 md:py-4 md:text-xs">
                  &nbsp;
                </th>
                {columns.map((col, i) => (
                  <th
                    key={col}
                    className={cn(
                      "px-3 py-3 text-center text-xs font-semibold tracking-tight md:px-6 md:py-4 md:text-sm",
                      i === 0 ? "text-accent" : "text-neutral-400"
                    )}
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, rIdx) => (
                <tr
                  key={row.feature}
                  className={cn(
                    "border-b border-border last:border-0",
                    rIdx % 2 === 1 && "bg-surface/40"
                  )}
                >
                  <th
                    scope="row"
                    className="px-3 py-3 text-xs font-medium text-foreground md:px-6 md:py-4 md:text-sm"
                  >
                    {row.feature}
                  </th>
                  {row.values.map((value, vIdx) => (
                    <td
                      key={`${row.feature}-${vIdx}`}
                      className="px-3 py-3 text-center md:px-6 md:py-4"
                    >
                      <ValueCell value={value} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 text-sm text-neutral-400 md:flex-row md:gap-8">
          <p className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            <span className="inline-flex items-center gap-1.5">
              <ValueCell value="yes" /> {t("legend.yes")}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <ValueCell value="partial" /> {t("legend.partial")}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <ValueCell value="no" /> {t("legend.no")}
            </span>
          </p>
          <Link
            href={t("cta.href")}
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-accent-light"
          >
            {t("cta.label")}
            <ArrowRight
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ComparisonSection;
