import type { Metadata } from "next";
import AiTransparencyContent from "./content";

export const metadata: Metadata = {
  title: "AI Transparency",
  description: "EU AI Act disclosure. How QAWave uses AI systems, human oversight, AI-generated content policy, and data handling.",
};

export default function AiTransparencyPage() {
  return <AiTransparencyContent />;
}
