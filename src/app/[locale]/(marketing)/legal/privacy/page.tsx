import type { Metadata } from "next";
import { localeAlternates } from "@/lib/seo";
import PrivacyContent from "./content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How QAWave collects, uses, and protects your personal data. GDPR compliant, EU-hosted, no tracking cookies.",
  alternates: localeAlternates("/legal/privacy"),
};

export default function PrivacyPage() {
  return <PrivacyContent />;
}
