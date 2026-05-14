import type { Metadata } from "next";
import { localeAlternates } from "@/lib/seo";
import SubprocessorsContent from "./content";

export const metadata: Metadata = {
  title: "Sub-processors",
  description: "List of sub-processors used by QAWave to deliver services. Updated when changes occur, 30-day advance notice.",
  alternates: localeAlternates("/legal/subprocessors"),
};

export default function SubprocessorsPage() {
  return <SubprocessorsContent />;
}
