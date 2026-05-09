import { useTranslations } from "next-intl";

export function TestimonialSection() {
  const t = useTranslations("testimonial");
  const enabled = t.raw("enabled") as boolean;

  if (!enabled) {
    return null;
  }

  return (
    <section
      className="relative py-24 md:py-32"
      aria-labelledby="testimonial-heading"
    >
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 id="testimonial-heading" className="sr-only">
          What customers say
        </h2>
        <blockquote
          className="font-serif text-2xl italic leading-relaxed text-foreground/90 md:text-3xl lg:text-4xl"
          style={{ fontFamily: "var(--font-instrument-serif), serif" }}
        >
          “{t("quote")}”
        </blockquote>
        <footer className="mt-6 text-sm text-neutral-400">
          <span className="font-semibold text-foreground">{t("author")}</span>
          <span className="mx-2 text-neutral-600">·</span>
          <span>{t("role")}</span>
          {t("company") && (
            <>
              <span className="mx-2 text-neutral-600">·</span>
              <span>{t("company")}</span>
            </>
          )}
        </footer>
      </div>
    </section>
  );
}

export default TestimonialSection;
