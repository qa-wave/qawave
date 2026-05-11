import type { Metadata } from "next";
import PrivacyContent from "./content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How QAWave collects, uses, and protects your personal data. GDPR compliant, EU-hosted, no tracking cookies.",
};

export default function PrivacyPage() {
  return <PrivacyContent />;
}
