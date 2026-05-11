import type { Metadata } from "next";
import CustomersContent from "./content";

export const metadata: Metadata = {
  title: "Customers — Design partner program",
  description:
    "Become a QAWave design partner. 4-week Design Sprint at preferred terms, direct founder access, and shape the agent architecture for your stack.",
};

export default function CustomersPage() {
  return <CustomersContent />;
}
