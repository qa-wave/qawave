import type { Metadata } from "next";
import { localeAlternates } from "@/lib/seo";
import BlogPostContent from "./content";

// Static metadata for the blog post route — individual post titles
// are set via JSON-LD in the client component since they're data-driven.
export const metadata: Metadata = {
  title: "40 agents. 1 founder. This is how I run QAWave.",
  description:
    "QAWave has no employees. One human and 40 AI agents. The architecture, the failures, and what actually works.",
  alternates: localeAlternates("/blog/40-agents"),
};

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function BlogPostPage() {
  return <BlogPostContent />;
}
