import type { Metadata } from "next";
import { localeAlternates } from "@/lib/seo";
import TermsContent from "./content";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for QAWave AI agent services. Covers intellectual property, payment terms, refund policy, and liability.",
  alternates: localeAlternates("/legal/terms"),
};

export default function TermsPage() {
  return <TermsContent />;
}
