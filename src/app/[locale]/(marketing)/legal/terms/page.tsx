import type { Metadata } from "next";
import TermsContent from "./content";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for QAWave AI agent services. Covers intellectual property, payment terms, refund policy, and liability.",
};

export default function TermsPage() {
  return <TermsContent />;
}
