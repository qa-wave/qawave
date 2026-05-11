import type { Metadata } from "next";
import CareersContent from "./content";

export const metadata: Metadata = {
  title: "Careers — We hire 0 humans",
  description:
    "QAWave is operated by one human and 40 AI agents. No open positions — but we're looking for design partners who want to see what agents can do.",
};

export default function CareersPage() {
  return <CareersContent />;
}
