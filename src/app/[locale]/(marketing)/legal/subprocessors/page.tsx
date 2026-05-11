import type { Metadata } from "next";
import SubprocessorsContent from "./content";

export const metadata: Metadata = {
  title: "Sub-processors",
  description: "List of sub-processors used by QAWave to deliver services. Updated when changes occur, 30-day advance notice.",
};

export default function SubprocessorsPage() {
  return <SubprocessorsContent />;
}
