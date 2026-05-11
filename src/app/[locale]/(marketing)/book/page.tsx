"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import {
  Clock,
  MessageSquare,
  FileText,
  Mail,
  Send,
  CheckCircle,
  AlertCircle,
  type LucideIcon,
} from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/motion";

const ICON_MAP: Record<string, LucideIcon> = {
  Clock,
  MessageSquare,
  FileText,
};

type FormState = "idle" | "sending" | "success" | "error";

export default function BookPage() {
  const t = useTranslations("bookPage");
  const expectations = t.raw("expectations") as Array<{
    icon: string;
    title: string;
    body: string;
  }>;

  const [state, setState] = useState<FormState>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      role: (form.elements.namedItem("role") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
      website: (form.elements.namedItem("website") as HTMLInputElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setState("success");
        form.reset();
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  }

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

        <div className="mt-14 grid gap-12 md:grid-cols-[1fr_1.2fr]">
          {/* Left: expectations */}
          <motion.div
            variants={staggerContainer(0.12)}
            initial="hidden"
            animate="visible"
            className="space-y-5"
          >
            {expectations.map((item) => {
              const Icon = ICON_MAP[item.icon] ?? Clock;
              return (
                <motion.div
                  key={item.title}
                  variants={fadeInUp}
                  className="flex gap-3"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent-muted">
                    <Icon
                      className="h-4 w-4 text-accent"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <h2 className="text-sm font-medium text-foreground">
                      {item.title}
                    </h2>
                    <p className="mt-0.5 text-sm leading-relaxed text-neutral-500">
                      {item.body}
                    </p>
                  </div>
                </motion.div>
              );
            })}

            {/* Email fallback */}
            <div className="mt-8 border-t border-border pt-6">
              <p className="text-sm font-medium text-neutral-400">
                {t("contact.title")}
              </p>
              <a
                href={`mailto:${t("contact.email")}`}
                className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent-light"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                {t("contact.email")}
              </a>
              <p className="mt-1 text-xs text-neutral-600">
                {t("contact.note")}
              </p>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            {state === "success" ? (
              <div className="flex flex-col items-center justify-center rounded-xl border border-border-accent bg-surface p-10 text-center">
                <CheckCircle
                  className="h-10 w-10 text-green-500"
                  aria-hidden="true"
                />
                <p className="mt-4 text-base font-medium text-foreground">
                  {t("form.success")}
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-4 rounded-xl border border-border bg-surface p-6 md:p-8"
              >
                {/* Honeypot — hidden from humans, traps bots */}
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  className="absolute -left-[9999px] h-0 w-0 opacity-0"
                  aria-hidden="true"
                />
                <div>
                  <label htmlFor="name" className="sr-only">
                    {t("form.name")}
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder={t("form.name")}
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-neutral-600 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent [&:not(:placeholder-shown):invalid]:border-error"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">
                    {t("form.email")}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder={t("form.email")}
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-neutral-600 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent [&:not(:placeholder-shown):invalid]:border-error"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="sr-only">
                    {t("form.company")}
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    required
                    placeholder={t("form.company")}
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-neutral-600 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent [&:not(:placeholder-shown):invalid]:border-error"
                  />
                </div>
                <div>
                  <label htmlFor="role" className="sr-only">
                    {t("form.role")}
                  </label>
                  <input
                    id="role"
                    name="role"
                    type="text"
                    placeholder={t("form.role")}
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-neutral-600 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent [&:not(:placeholder-shown):invalid]:border-error"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">
                    {t("form.message")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder={t("form.message")}
                    className="w-full resize-none rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-neutral-600 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  />
                </div>

                {state === "error" && (
                  <div className="flex items-center gap-2 text-sm text-red-400">
                    <AlertCircle className="h-4 w-4" aria-hidden="true" />
                    {t("form.error")}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={state === "sending"}
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white shadow-[0_0_20px_rgba(14,165,233,0.3)] transition-all hover:shadow-[0_0_30px_rgba(14,165,233,0.5)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:opacity-60"
                >
                  <Send className="h-4 w-4" aria-hidden="true" />
                  {state === "sending" ? "..." : t("form.submit")}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
