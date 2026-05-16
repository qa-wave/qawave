"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "./language-switcher";

interface NavLink {
  label: string;
  href: string;
}

export function Navbar() {
  const t = useTranslations("nav");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const links = t.raw("links") as NavLink[];
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 80);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Focus trap for mobile menu
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!open || !menuRef.current) return;
      if (e.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
        return;
      }
      if (e.key !== "Tab") return;
      const focusable = menuRef.current.querySelectorAll<HTMLElement>(
        'a, button, input, [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    },
    [open]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Auto-focus first link when menu opens
  useEffect(() => {
    if (open && menuRef.current) {
      const firstLink = menuRef.current.querySelector<HTMLElement>("a, button");
      firstLink?.focus();
    }
  }, [open]);

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-lg"
          : "bg-background/40 backdrop-blur-sm"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 md:h-20 lg:px-8">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-foreground"
        >
          QA<span className="text-accent">Wave</span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-neutral-400 transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
          <LanguageSwitcher />
          <Button variant="primary" size="sm" href={t("cta.href")}>
            {t("cta.label")}
          </Button>
        </div>

        <button
          ref={menuButtonRef}
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-md text-neutral-400 transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-accent md:hidden"
          onClick={() => setOpen((p) => !p)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-16 z-40 bg-background/95 backdrop-blur-xl md:hidden"
            ref={menuRef}
          >
            <nav className="flex flex-col px-4 pt-6">
              {links.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border px-4 py-4 text-lg font-medium text-neutral-300 transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-6 flex items-center justify-between gap-3 px-4">
                <LanguageSwitcher />
              </div>
              <div className="mt-6 px-4">
                <Button
                  variant="primary"
                  href={t("cta.href")}
                  className="w-full justify-center"
                >
                  {t("cta.label")}
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
