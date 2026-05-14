"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeInUp } from "@/lib/motion";

export function CtaSection() {
  const t = useTranslations("finalCta");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    // For now, send via the contact API with just email
    fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "Newsletter subscriber",
        email,
        company: "—",
        message: "Newsletter signup from final CTA",
      }),
    }).then(() => {
      setSubscribed(true);
      setEmail("");
    });
  }

  return (
    <section
      className="relative overflow-hidden py-24 md:py-32 lg:py-40"
      aria-labelledby="final-cta-heading"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 50% 50%, rgba(14,165,233,0.18), transparent)",
        }}
      />
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8"
      >
        <h2
          id="final-cta-heading"
          className="text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl"
        >
          {t("headline")}
        </h2>
        <p className="mt-6 text-base leading-relaxed text-neutral-400 md:text-lg">
          {t("subheadline")}
        </p>

        <div className="mt-10 md:mt-12">
          <Button variant="primary" size="lg" href={t("primaryCta.href")}>
            {t("primaryCta.label")}
          </Button>
        </div>

        {/* Newsletter inline */}
        <div className="mx-auto mt-10 max-w-md">
          <p className="mb-3 text-sm text-neutral-500">
            {t("newsletter.label")}
          </p>
          {subscribed ? (
            <div className="flex items-center justify-center gap-2 text-sm text-green-500">
              <CheckCircle className="h-4 w-4" aria-hidden="true" />
              {t("newsletter.success")}
            </div>
          ) : (
            <form
              onSubmit={handleSubscribe}
              className="flex gap-2"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                {t("newsletter.placeholder")}
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t("newsletter.placeholder")}
                className="flex-1 rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-foreground placeholder:text-neutral-600 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
              />
              <button
                type="submit"
                className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <Send className="h-3.5 w-3.5" aria-hidden="true" />
                {t("newsletter.submit")}
              </button>
            </form>
          )}
        </div>
      </motion.div>
    </section>
  );
}

export default CtaSection;
