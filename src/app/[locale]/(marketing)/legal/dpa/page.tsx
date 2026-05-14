import type { Metadata } from "next";
import { localeAlternates } from "@/lib/seo";
import DpaContent from "./content";

export const metadata: Metadata = {
  title: "Data Processing Agreement",
  description: "QAWave Data Processing Agreement (DPA). Covers processing scope, sub-processors, security measures, and audit rights.",
  alternates: localeAlternates("/legal/dpa"),
};

export default function DpaPage() {
  return <DpaContent />;
}
