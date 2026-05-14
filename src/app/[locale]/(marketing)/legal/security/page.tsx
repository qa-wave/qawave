import type { Metadata } from "next";
import { localeAlternates } from "@/lib/seo";
import SecurityContent from "./content";

export const metadata: Metadata = {
  title: "Security",
  description: "QAWave security practices. EU-hosted infrastructure, encrypted data, agent audit trails, SOC 2 in progress, vulnerability disclosure.",
  alternates: localeAlternates("/legal/security"),
};

export default function SecurityPage() {
  return <SecurityContent />;
}
