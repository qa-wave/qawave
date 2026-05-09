"use client";

import { useTranslations } from "next-intl";
import type { LegalDocument } from "@/data/messages/types";

export function LegalPage({ documentKey }: { documentKey: string }) {
  const t = useTranslations("legal");
  const doc = t.raw(documentKey) as LegalDocument;

  return (
    <section className="pb-24 pt-32 md:pb-32 md:pt-40">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          {doc.title}
        </h1>
        <p className="mt-2 text-sm text-neutral-500">
          {doc.lastUpdated}
        </p>
        <p className="mt-8 text-base leading-relaxed text-neutral-300">
          {doc.intro}
        </p>

        <div className="mt-12 space-y-10">
          {doc.sections.map((section) => (
            <div key={section.heading}>
              <h2 className="text-lg font-medium text-foreground">
                {section.heading}
              </h2>
              <div className="mt-3 space-y-3">
                {section.body.map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-sm leading-relaxed text-neutral-400"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
