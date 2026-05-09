"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface Tier {
  id: string;
  emoji: string;
  name: string;
  price: string;
  priceUnit: string;
  duration: string;
  description: string;
  badge?: string;
  cta: { label: string; href: string };
}

export function PricingTeaserSection() {
  const t = useTranslations("pricing");
  const tiers = t.raw("tiers") as Tier[];

  return (
    <section
      className="relative bg-surface/40 py-24 md:py-32 lg:py-40"
      aria-labelledby="pricing-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          id="pricing-heading"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mx-auto max-w-3xl text-center text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl"
        >
          {t("headline")}
        </motion.h2>

        <motion.ul
          variants={staggerContainer(0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-6 md:mt-20 md:grid-cols-3 md:gap-8"
        >
          {tiers.map((tier, i) => {
            const isMiddle = i === 0;
            return (
              <motion.li
                key={tier.id}
                variants={fadeInUp}
                className={cn(
                  "relative flex flex-col rounded-2xl border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 md:p-8",
                  isMiddle
                    ? "border-border-accent shadow-[0_0_40px_rgba(14,165,233,0.12)]"
                    : "border-border hover:border-border-accent hover:shadow-[0_0_30px_rgba(14,165,233,0.08)]"
                )}
              >
                {tier.badge && (
                  <span className="absolute -top-3 left-6 inline-flex items-center rounded-full border border-border-accent bg-accent px-3 py-1 text-xs font-semibold text-white shadow-[0_0_20px_rgba(14,165,233,0.3)]">
                    {tier.badge}
                  </span>
                )}
                <p className="text-2xl">{tier.emoji}</p>
                <h3 className="mt-4 text-xl font-medium tracking-tight text-foreground md:text-2xl">
                  {tier.name}
                </h3>
                <p className="mt-3 font-mono text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                  {tier.price}
                </p>
                <p className="mt-1 text-xs uppercase tracking-widest text-neutral-500">
                  {tier.priceUnit} · {tier.duration}
                </p>
                <p className="mt-5 text-sm leading-relaxed text-neutral-400 md:text-base">
                  {tier.description}
                </p>
                <div className="mt-auto pt-6">
                  <Button
                    variant={isMiddle ? "primary" : "secondary"}
                    size="sm"
                    href={tier.cta.href}
                    className="w-full"
                  >
                    {tier.cta.label}
                  </Button>
                </div>
              </motion.li>
            );
          })}
        </motion.ul>

        <div className="mt-12 text-center">
          <Link
            href={t("cta.href")}
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-accent-light md:text-base"
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

export default PricingTeaserSection;
