import type { Metadata } from "next";
import { localeAlternates } from "@/lib/seo";
import CustomersContent from "./content";

export const metadata: Metadata = {
  title: "Customers — Design partner program",
  description:
    "Become a QAWave design partner. 4-week Design Sprint at preferred terms, direct founder access, and shape the agent architecture for your stack.",
  alternates: localeAlternates("/customers"),
};

export default function CustomersPage() {
  return <CustomersContent />;
}
