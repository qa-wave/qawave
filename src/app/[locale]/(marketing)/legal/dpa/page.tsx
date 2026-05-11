import type { Metadata } from "next";
import DpaContent from "./content";

export const metadata: Metadata = {
  title: "Data Processing Agreement",
  description: "QAWave Data Processing Agreement (DPA). Covers processing scope, sub-processors, security measures, and audit rights.",
};

export default function DpaPage() {
  return <DpaContent />;
}
