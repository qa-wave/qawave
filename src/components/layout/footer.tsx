import { footerColumns, footerTagline, footerCopyright } from "@/data/landing";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        {/* Top: Logo + tagline */}
        <div className="mb-12 flex flex-col items-start justify-between gap-8 md:flex-row">
          <div>
            <a href="/" className="text-lg font-bold text-foreground">
              qawave<span className="text-accent">.ai</span>
            </a>
            <p className="mt-2 text-sm text-neutral-500">{footerTagline}</p>
          </div>
        </div>

        {/* Columns grid */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {footerColumns.map((col) => (
            <div key={col.title}>
              <p className="mb-4 text-sm font-semibold text-foreground">
                {col.title}
              </p>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-neutral-500 transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-border pt-8">
          <p className="text-xs text-neutral-600">{footerCopyright}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
