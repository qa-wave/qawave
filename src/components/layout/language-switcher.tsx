"use client";

import { useLocale, useTranslations } from "next-intl";
import { Globe } from "lucide-react";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({ className }: { className?: string }) {
  const t = useTranslations("nav.languageSwitcher");
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  return (
    <div
      role="group"
      aria-label="Language"
      className={cn(
        "inline-flex items-center gap-1 rounded-full border border-border bg-surface/40 p-1 text-xs font-medium",
        className
      )}
    >
      <Globe className="ml-1.5 h-3.5 w-3.5 text-neutral-500" aria-hidden="true" />
      {routing.locales.map((loc) => {
        const active = loc === locale;
        return (
          <button
            key={loc}
            type="button"
            onClick={() => router.replace(pathname, { locale: loc })}
            aria-pressed={active}
            className={cn(
              "rounded-full px-3 py-1 transition-colors",
              "focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2",
              active
                ? "bg-accent text-white shadow-[0_0_12px_rgba(14,165,233,0.4)]"
                : "text-neutral-400 hover:text-foreground"
            )}
          >
            {loc === "en" ? t("en") : t("cs")}
          </button>
        );
      })}
    </div>
  );
}

export default LanguageSwitcher;
