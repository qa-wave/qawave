import type { Metadata } from "next";
import { localeAlternates } from "@/lib/seo";
import AiTransparencyContent from "./content";

export const metadata: Metadata = {
  title: "AI Transparency",
  description: "EU AI Act disclosure. How QAWave uses AI systems, human oversight, AI-generated content policy, and data handling.",
  alternates: localeAlternates("/legal/ai-transparency"),
};

export default function AiTransparencyPage() {
  return <AiTransparencyContent />;
}
