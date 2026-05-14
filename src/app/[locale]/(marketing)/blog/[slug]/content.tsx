"use client";

import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { fadeInUp } from "@/lib/motion";
import type { BlogPost } from "@/data/messages/types";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function BlogPostPage() {
  const t = useTranslations("blogPage");
  const params = useParams<{ slug: string }>();
  const posts = t.raw("posts") as BlogPost[];
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    return (
      <section className="pb-24 pt-32 md:pb-32 md:pt-40">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
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

  const headings = post.body
    .filter((p) => p.startsWith("## "))
    .map((p) => ({ text: p.slice(3), id: slugify(p.slice(3)) }));

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
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/blog"
          className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-neutral-400 transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          All posts
        </Link>

        <motion.header variants={fadeInUp} initial="hidden" animate="visible">
          <div className="flex items-center gap-3 text-sm text-neutral-500">
            <time>{post.date}</time>
            <span aria-hidden="true">·</span>
            <span>{post.readingTime}</span>
          </div>
          <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-4xl">
            {post.title}
          </h1>
          <p className="mt-4 text-base text-neutral-400 md:text-lg">
            {post.excerpt}
          </p>
        </motion.header>

        {/* Table of contents */}
        {headings.length > 0 && (
          <nav
            aria-label="Table of contents"
            className="mt-10 rounded-lg border border-border bg-surface/60 p-5"
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-neutral-500">
              In this post
            </p>
            <ol className="space-y-1.5">
              {headings.map((h) => (
                <li key={h.id}>
                  <a
                    href={`#${h.id}`}
                    className="text-sm text-neutral-400 transition-colors hover:text-accent"
                  >
                    {h.text}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        )}

        <div className="mt-12 space-y-6 md:space-y-5">
          {post.body.map((paragraph, i) => {
            if (paragraph.startsWith("## ")) {
              const text = paragraph.slice(3);
              const id = slugify(text);
              return (
                <h2
                  key={i}
                  id={id}
                  className="mt-14 scroll-mt-24 text-xl font-semibold tracking-tight text-foreground md:mt-12 md:text-2xl"
                >
                  {text}
                </h2>
              );
            }
            if (paragraph.includes("**")) {
              const parts = paragraph.split(/\*\*([^*]+)\*\*/g);
              return (
                <p
                  key={i}
                  className="text-base leading-relaxed text-neutral-300"
                >
                  {parts.map((part, j) =>
                    j % 2 === 1 ? (
                      <strong key={j} className="text-foreground">{part}</strong>
                    ) : (
                      part
                    )
                  )}
                </p>
              );
            }
            return (
              <p
                key={i}
                className="text-[15px] leading-7 text-neutral-300 md:text-base md:leading-relaxed"
              >
                {paragraph}
              </p>
            );
          })}
        </div>

        <div className="mt-16 border-t border-border pt-10 text-center">
          <Button variant="primary" size="lg" href="/book">
            Book a 20-min call
          </Button>
        </div>
      </div>
    </article>
  );
}
