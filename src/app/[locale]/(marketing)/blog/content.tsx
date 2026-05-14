"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import type { BlogPost } from "@/data/messages/types";

export default function BlogPage() {
  const t = useTranslations("blogPage");
  const posts = t.raw("posts") as BlogPost[];

  return (
    <section className="pb-16 pt-32 md:pb-32 md:pt-40">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.h1
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl"
        >
          {t("headline")}
        </motion.h1>
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="mt-4 text-base text-neutral-400 md:text-lg"
        >
          {t("subheadline")}
        </motion.p>

        {posts.length > 0 ? (
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            animate="visible"
            className="mt-14 space-y-8"
          >
            {posts.map((post) => (
              <motion.article
                key={post.slug}
                variants={fadeInUp}
                className="group rounded-xl border border-border bg-surface p-6 transition-all hover:border-border-accent hover:shadow-[0_0_30px_rgba(14,165,233,0.08)] md:p-8"
              >
                <div className="flex items-center gap-3 text-xs text-neutral-500">
                  <time>{post.date}</time>
                  <span aria-hidden="true">·</span>
                  <span>{post.readingTime}</span>
                </div>
                <h2 className="mt-3 text-xl font-medium tracking-tight text-foreground md:text-2xl">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:text-accent"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-neutral-400">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-accent-light"
                >
                  Read more
                  <ArrowRight
                    className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </Link>
              </motion.article>
            ))}
          </motion.div>
        ) : (
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="mt-16 rounded-xl border border-border bg-surface p-10 text-center"
          >
            <p className="text-base text-neutral-400">{t("emptyState")}</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
