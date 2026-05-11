import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export function Footer() {
  const t = useTranslations("footer");
  const columns = t.raw("columns") as FooterColumn[];

  return (
    <footer className="border-t border-border bg-surface/60">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <div className="mb-12 flex flex-col items-start justify-between gap-8 md:flex-row">
          <div>
            <Link
              href="/"
              className="text-lg font-semibold tracking-tight text-foreground"
            >
              QA<span className="text-accent">Wave</span>
            </Link>
            <p className="mt-2 max-w-xs text-sm text-neutral-400">
              Ride the AI wave in QA.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {columns.map((col) => (
            <div key={col.title}>
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-foreground">
                {col.title}
              </p>
              <ul className="space-y-2">
                {col.links.map((link) => {
                  const isExternal =
                    link.href.startsWith("http") ||
                    link.href.startsWith("mailto:");
                  if (isExternal) {
                    return (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          className="text-sm text-neutral-400 transition-colors hover:text-foreground"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {link.label}
                        </a>
                      </li>
                    );
                  }
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-neutral-400 transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-8 md:flex-row md:items-center">
          <p className="text-xs text-neutral-500">{t("copyright")}</p>
          <p className="text-xs text-neutral-500">{t("legalNote")}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
