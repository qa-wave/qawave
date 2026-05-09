import { setRequestLocale } from "next-intl/server";
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
