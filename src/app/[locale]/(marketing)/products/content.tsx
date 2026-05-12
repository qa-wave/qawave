"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import {
  Globe,
  Monitor,
  Check,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import type { ProductItem } from "@/data/messages/types";

const PRODUCT_ICONS: Record<string, LucideIcon> = {
  theridion: Globe,
  zornik: Monitor,
};

export default function ProductsContent() {
  const t = useTranslations("productsPage");
  const products = t.raw("products") as ProductItem[];

  return (
    <>
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

      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer(0.2)}
            initial="hidden"
            animate="visible"
            className="space-y-12"
          >
            {products.map((product) => {
              const Icon = PRODUCT_ICONS[product.slug] ?? Globe;
              const isExternal = product.cta.href.startsWith("http");
              return (
                <motion.div
                  key={product.slug}
                  variants={fadeInUp}
                  className="overflow-hidden rounded-2xl border border-border bg-surface transition-all hover:border-border-accent hover:shadow-[0_0_40px_rgba(14,165,233,0.08)]"
                >
                  <div className="p-8 md:p-10 lg:p-12">
                    <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
                      {/* Left: info */}
                      <div className="flex-1">
                        <div className="mb-4 flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-muted">
                            <Icon
                              className="h-5 w-5 text-accent"
                              aria-hidden="true"
                            />
                          </div>
                          <div>
                            <h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                              {product.name}
                            </h2>
                            <p className="text-sm text-accent">
                              {product.tagline}
                            </p>
                          </div>
                        </div>

                        <span className="mt-2 inline-block rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-neutral-400">
                          {product.status}
                        </span>

                        <p className="mt-6 text-base leading-relaxed text-neutral-300">
                          {product.description}
                        </p>

                        {/* Stack */}
                        <div className="mt-6 flex flex-wrap gap-2">
                          {product.stack.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-md bg-accent-muted px-2.5 py-1 font-mono text-xs text-accent"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* CTA */}
                        <div className="mt-8">
                          {isExternal ? (
                            <a
                              href={product.cta.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-white shadow-[0_0_20px_rgba(14,165,233,0.3)] transition-all hover:shadow-[0_0_30px_rgba(14,165,233,0.5)]"
                            >
                              {product.cta.label}
                              <ArrowRight
                                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                                aria-hidden="true"
                              />
                            </a>
                          ) : (
                            <a
                              href={product.cta.href}
                              className="group inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-white shadow-[0_0_20px_rgba(14,165,233,0.3)] transition-all hover:shadow-[0_0_30px_rgba(14,165,233,0.5)]"
                            >
                              {product.cta.label}
                              <ArrowRight
                                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                                aria-hidden="true"
                              />
                            </a>
                          )}
                        </div>
                      </div>

                      {/* Right: features */}
                      <div className="lg:w-80">
                        <ul className="space-y-3">
                          {product.features.map((feature) => (
                            <li
                              key={feature}
                              className="flex gap-3 text-sm text-neutral-300"
                            >
                              <Check
                                className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                                aria-hidden="true"
                              />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </>
  );
}
