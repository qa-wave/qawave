import type { Metadata } from "next";
import { localeAlternates } from "@/lib/seo";
import BlogPostContent from "./content";

// Static metadata for the blog post route — individual post titles
// are set via JSON-LD in the server component since they're data-driven.
export const metadata: Metadata = {
  title: "40 agents. 1 founder. This is how I run QAWave.",
  description:
    "QAWave has no employees. One human and 40 AI agents. The architecture, the failures, and what actually works.",
  alternates: localeAlternates("/blog/40-agents"),
};

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <BlogPostContent slug={slug} />;
}
