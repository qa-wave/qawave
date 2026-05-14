import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { localeAlternates } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isCs = locale === "cs";
  return {
    title: isCs
      ? { absolute: "QAWave — AI agenti pro softwarové testování" }
      : { absolute: "QAWave — Ride the AI wave in QA" },
    description: isCs
      ? "Vlastní AI agenti přímo ve vašem CI/CD. Generují testy, opravují flaky a triage bugy 24/7. Domluvte si 20minutový hovor."
      : "Custom AI agents that live in your CI/CD. Generate tests, heal flakiness, triage bugs 24/7. Book a 20-min discovery call.",
    alternates: localeAlternates("", locale),
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
import { en } from "@/data/messages/en";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: en.faq.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
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
