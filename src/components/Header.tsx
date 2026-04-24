"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "@/i18n/LanguageContext";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Language } from "@/i18n/translations";
import logoImg from "@/assets/logo-viva-fruta.png";

const langs: { code: Language; label: string }[] = [
  { code: "pt", label: "PT" },
  { code: "en", label: "EN" },
  { code: "es", label: "ES" },
];

export function Header() {
  const { language, setLanguage, t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const onScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 60);

      // Hide navbar when scrolling down past 100px, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100 && !mobileOpen) {
        setHidden(true);
      } else if (currentScrollY < lastScrollY || currentScrollY <= 100) {
        setHidden(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [mobileOpen]);

  useEffect(() => setMobileOpen(false), [pathname]);

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/history", label: t.nav.history },
    { href: "/team", label: t.nav.team },
    { href: "/sas", label: t.nav.sas },
    { href: "/contact", label: t.nav.contact },
  ];

  const headerBg =
    scrolled || !isHome || mobileOpen
      ? "bg-background/95 backdrop-blur-md shadow-sm"
      : "bg-transparent";

  const textColor = scrolled || !isHome ? "text-foreground" : "text-primary-foreground";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${headerBg} ${hidden ? "-translate-y-full" : "translate-y-0"}`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center transition-colors">
            <img
              src={logoImg.src}
              alt="Viva Fruta"
              className={`h-14 w-auto transition-all duration-500 ${scrolled || !isHome ? "" : "brightness-0 invert"}`}
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors hover:opacity-70 ${textColor} ${pathname === link.href ? "!opacity-100 border-b border-current" : ""}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-1">
            {langs.map((l) => (
              <button
                key={l.code}
                onClick={() => setLanguage(l.code)}
                className={`px-2 py-1 text-xs font-medium tracking-wider transition-colors ${
                  language === l.code
                    ? `${textColor} opacity-100`
                    : `${textColor} opacity-50 hover:opacity-75`
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 ${scrolled || !isHome ? "text-foreground" : "text-primary-foreground"}`}
            aria-label="Menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              {mobileOpen ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 8h16M4 16h16" />}
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-t border-border overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-foreground text-lg font-serif tracking-wide ${pathname === link.href ? "text-primary" : ""}`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex gap-3 pt-4 border-t border-border">
                {langs.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => setLanguage(l.code)}
                    className={`px-3 py-1.5 text-sm font-medium tracking-wider transition-colors ${
                      language === l.code
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
