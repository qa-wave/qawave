import type { Metadata } from "next";
import { localeAlternates } from "@/lib/seo";
import BlogContent from "./content";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Technical deep-dives on agentic QA, AI testing, and running a B2B company on 40 AI agents. By Tomas Mertin.",
  alternates: localeAlternates("/blog"),
};

export default function BlogPage() {
  return <BlogContent />;
}
