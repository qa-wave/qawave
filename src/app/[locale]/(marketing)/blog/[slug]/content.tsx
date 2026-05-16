import { getTranslations } from "next-intl/server";
import { ArrowLeft } from "lucide-react";
import { Link } from "@/i18n/navigation";
import type { BlogPost } from "@/data/messages/types";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default async function BlogPostContent({ slug }: { slug: string }) {
  const t = await getTranslations("blogPage");
  const posts = t.raw("posts") as BlogPost[];
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <section className="pb-24 pt-32 md:pb-32 md:pt-40">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-3xl font-semibold text-foreground">
            Post not found.
          </h1>
          <div className="mt-8">
            <Link
              href="/blog"
              className="inline-flex items-center justify-center rounded-lg border border-border bg-surface px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-border-accent"
            >
              Back to blog
            </Link>
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
    datePublished: post.date,
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

        <header>
          <div className="flex items-center gap-3 text-sm text-neutral-400">
            <time dateTime={post.date}>{post.date}</time>
            <span aria-hidden="true">·</span>
            <span>{post.readingTime}</span>
          </div>
          <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-4xl">
            {post.title}
          </h1>
          <p className="mt-4 text-base text-neutral-400 md:text-lg">
            {post.excerpt}
          </p>
        </header>

        {/* Table of contents */}
        {headings.length > 0 && (
          <nav
            aria-label="Table of contents"
            className="mt-10 rounded-lg border border-border bg-surface/60 p-5"
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-neutral-400">
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
          <Link href="/book" className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-8 py-3.5 text-base font-medium text-white shadow-[0_0_20px_rgba(14,165,233,0.3)] transition-all hover:shadow-[0_0_30px_rgba(14,165,233,0.5)]">
            Book a 20-min call
          </Link>
        </div>
      </div>
    </article>
  );
}
