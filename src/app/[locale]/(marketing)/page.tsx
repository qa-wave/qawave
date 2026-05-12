import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isCs = locale === "cs";
  return {
    title: isCs
      ? "QAWave — AI agenti pro softwarové testování"
      : "QAWave — Ride the AI wave in QA",
    description: isCs
      ? "Vlastní AI agenti přímo ve vašem CI/CD. Generují testy, opravují flaky a triage bugy 24/7. Domluvte si 20minutový hovor."
      : "Custom AI agents that live in your CI/CD. Generate tests, heal flakiness, triage bugs 24/7. Book a 20-min discovery call.",
  };
}
import { HeroSection } from "@/components/sections/hero-section";
import { BuiltWithSection } from "@/components/sections/built-with-section";
import { ProblemSection } from "@/components/sections/problem-section";
import { HowItWorksSection } from "@/components/sections/how-it-works-section";
import { ComparisonSection } from "@/components/sections/comparison-section";
import { AgenticMoatSection } from "@/components/sections/agentic-moat-section";
import { TestimonialSection } from "@/components/sections/testimonial-section";
import { FaqSection } from "@/components/sections/faq-section";
import { CtaSection } from "@/components/sections/cta-section";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <HeroSection />
      <BuiltWithSection />
      <ProblemSection />
      <HowItWorksSection />
      <ComparisonSection />
      <AgenticMoatSection />
      <TestimonialSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
