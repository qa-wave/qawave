import { useTranslations } from "next-intl";
import {
  AnthropicLogo,
  VercelLogo,
  SupabaseLogo,
  CloudflareLogo,
  StripeLogo,
} from "@/components/logos";

const LOGO_MAP: Record<string, React.FC<{ className?: string }>> = {
  Anthropic: AnthropicLogo,
  Vercel: VercelLogo,
  Supabase: SupabaseLogo,
  Cloudflare: CloudflareLogo,
  Stripe: StripeLogo,
};

export function BuiltWithSection() {
  const t = useTranslations("builtWith");
  const badges = (t.raw("badges") as string[]) ?? [];
  const trustedLogos = (t.raw("trustedByLogos") as string[]) ?? [];

  return (
    <section
      className="relative border-y border-border bg-surface/40 py-12 md:py-16"
      aria-labelledby="built-with-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          id="built-with-heading"
          className="text-center text-xs font-medium uppercase tracking-widest text-neutral-400"
        >
          {t("label")}
        </h2>
        <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 md:gap-x-14">
          {badges.map((name) => {
            const Logo = LOGO_MAP[name];
            return (
              <li
                key={name}
                className="text-neutral-400 transition-colors hover:text-foreground"
              >
                {Logo ? (
                  <Logo className="h-5 w-auto md:h-6" />
                ) : (
                  <span className="text-base font-semibold tracking-tight">
                    {name}
                  </span>
                )}
              </li>
            );
          })}
        </ul>

        {trustedLogos.length > 0 && (
          <div className="mt-12 border-t border-border pt-10 text-center">
            <h3 className="text-xs font-medium uppercase tracking-widest text-neutral-400">
              {t("trustedByLabel")}
            </h3>
            <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
              {trustedLogos.map((name) => {
                const Logo = LOGO_MAP[name];
                return (
                  <li
                    key={name}
                    className="text-foreground"
                  >
                    {Logo ? (
                      <Logo className="h-5 w-auto md:h-6" />
                    ) : (
                      <span className="text-base font-semibold tracking-tight">
                        {name}
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}

export default BuiltWithSection;
