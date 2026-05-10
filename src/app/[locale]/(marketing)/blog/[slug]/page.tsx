"use client";

import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { fadeInUp } from "@/lib/motion";
import type { BlogPost } from "@/data/messages/types";

export default function BlogPostPage() {
  const t = useTranslations("blogPage");
  const params = useParams<{ slug: string }>();
  const posts = t.raw("posts") as BlogPost[];
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    return (
      <section className="pb-24 pt-32 md:pb-32 md:pt-40">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-3xl font-semibold text-foreground">
            Post not found.
          </h1>
          <div className="mt-8">
            <Button variant="secondary" href="/blog">
              Back to blog
            </Button>
          </div>
        </div>
      </section>
    );
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: "2026-05-10",
    author: { "@type": "Person", name: "Tomas Mertin" },
    publisher: { "@type": "Organization", name: "QAWave" },
  };

  return (
    <article className="pb-24 pt-32 md:pb-32 md:pt-40">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/blog"
          className="mb-8 inline-flex items-center gap-1.5 text-sm text-neutral-500 transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
          Blog
        </Link>

        <motion.header variants={fadeInUp} initial="hidden" animate="visible">
          <div className="flex items-center gap-3 text-sm text-neutral-500">
            <time>{post.date}</time>
            <span aria-hidden="true">·</span>
            <span>{post.readingTime}</span>
          </div>
          <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 text-base text-neutral-400 md:text-lg">
            {post.excerpt}
          </p>
        </motion.header>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="mt-12 space-y-5"
        >
          {post.body.map((paragraph, i) => {
            // Handle ## headings
            if (paragraph.startsWith("## ")) {
              return (
                <h2
                  key={i}
                  className="mt-10 text-xl font-semibold tracking-tight text-foreground md:text-2xl"
                >
                  {paragraph.slice(3)}
                </h2>
              );
            }
            // Handle **bold prefix** paragraphs
            if (paragraph.startsWith("**")) {
              return (
                <p
                  key={i}
                  className="text-base leading-relaxed text-neutral-300"
                  dangerouslySetInnerHTML={{
                    __html: paragraph
                      .replace(/\*\*([^*]+)\*\*/g, "<strong class='text-foreground'>$1</strong>"),
                  }}
                />
              );
            }
            return (
              <p
                key={i}
                className="text-base leading-relaxed text-neutral-300 md:text-lg"
              >
                {paragraph}
              </p>
            );
          })}
        </motion.div>

        <div className="mt-16 border-t border-border pt-10 text-center">
          <Button variant="primary" size="lg" href="/book">
            Book a 20-min call
          </Button>
        </div>
      </div>
    </article>
  );
}
