import type { Metadata } from "next";
import AboutContent from "./content";

export const metadata: Metadata = {
  title: "About — One founder, forty agents",
  description:
    "QAWave is a solo-founder AI-native QA studio based in Prague. One human, 40 AI agents, building custom QA automation for engineering teams.",
};

export default function AboutPage() {
  return <AboutContent />;
}
