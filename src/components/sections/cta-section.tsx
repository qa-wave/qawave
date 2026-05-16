"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeInUp } from "@/lib/motion";

export function CtaSection() {
  const t = useTranslations("finalCta");
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "success" | "error">("idle");

  function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setState("sending");
    fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "Newsletter subscriber",
        email,
        company: "—",
        message: "Newsletter signup from final CTA",
      }),
    })
      .then((res) => {
        if (res.ok) {
          setState("success");
          setEmail("");
        } else {
          setState("error");
        }
      })
      .catch(() => setState("error"));
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
          <p className="mb-3 text-sm text-neutral-300">
            {t("newsletter.label")}
          </p>
          {state === "success" ? (
            <div role="status" className="flex items-center justify-center gap-2 text-sm text-green-500">
              <CheckCircle className="h-4 w-4" aria-hidden="true" />
              {t("newsletter.success")}
            </div>
          ) : (
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col gap-2"
            >
              <div className="flex gap-2">
                <label htmlFor="newsletter-email" className="sr-only">
                  {t("newsletter.placeholder")}
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (state === "error") setState("idle");
                  }}
                  placeholder={t("newsletter.placeholder")}
                  aria-invalid={state === "error"}
                  aria-describedby={state === "error" ? "newsletter-error" : undefined}
                  className="flex-1 rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-foreground placeholder:text-neutral-600 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent aria-[invalid=true]:border-error"
                />
                <button
                  type="submit"
                  disabled={state === "sending"}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:opacity-60"
                >
                  <Send className="h-3.5 w-3.5" aria-hidden="true" />
                  {state === "sending" ? "..." : t("newsletter.submit")}
                </button>
              </div>
              {state === "error" && (
                <p id="newsletter-error" role="alert" className="flex items-center justify-center gap-1.5 text-sm text-red-400">
                  <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          )}
        </div>
      </motion.div>
    </section>
  );
}

export default CtaSection;
