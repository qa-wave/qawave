import type { Metadata } from "next";
import { localeAlternates } from "@/lib/seo";
import ProductContent from "./content";

export const metadata: Metadata = {
  title: "Product — How QAWave agents work",
  description:
    "Generate tests from PR diffs, heal flaky selectors, triage CI failures in seconds. See code examples, architecture, and eval harness details.",
  keywords: [
    "AI test generation",
    "flaky test healing",
    "CI failure triage",
    "Playwright agent",
    "QA automation agent",
  ],
  alternates: localeAlternates("/product"),
};

export default function ProductPage() {
  return <ProductContent />;
}
