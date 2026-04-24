"use client";

import Link from "next/link";
import { useTranslation } from "@/i18n/LanguageContext";
import logoImg from "@/assets/logo-viva-fruta.png";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          <div>
            <img src={logoImg.src} alt="Viva Fruta" className="h-16 w-auto brightness-0 invert" />
            <p className="mt-4 text-sm text-primary-foreground/60 leading-relaxed max-w-xs">
              {t.footer.tagline}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-medium tracking-[0.2em] uppercase text-primary-foreground/40 mb-6">
              {t.nav.home === "Home"
                ? "Navigation"
                : t.nav.home === "Inicio"
                  ? "Navegación"
                  : "Navegação"}
            </h4>
            <nav className="flex flex-col gap-3">
              <Link
                href="/"
                className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                {t.nav.home}
              </Link>
              <Link
                href="/history"
                className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                {t.nav.history}
              </Link>
              <Link
                href="/team"
                className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                {t.nav.team}
              </Link>
              <Link
                href="/sas"
                className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                {t.nav.sas}
              </Link>
              <Link
                href="/contact"
                className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                {t.nav.contact}
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="text-xs font-medium tracking-[0.2em] uppercase text-primary-foreground/40 mb-6">
              {t.contactPage.contactsTitle}
            </h4>
            <div className="space-y-3 text-sm text-primary-foreground/70">
              <p>{t.contactPage.phone}</p>
              <div>
                <p className="text-xs uppercase tracking-wider text-primary-foreground/40 mb-1">
                  Viva Fruta
                </p>
                <p className="whitespace-pre-line">{t.contactPage.address}</p>
                <p className="mt-1">CNPJ: 18.792.280/0001-83</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-primary-foreground/40 mb-1">
                  Viva Fruta SAS
                </p>
                <p>Gral. Dr Arturo J. Balinas – Montevideo, Uruguai</p>
                <p>RUT: 219035730017</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-primary-foreground/10 text-xs text-primary-foreground/40">
          &copy; {new Date().getFullYear()} Viva Frutas. {t.footer.rights}
        </div>
      </div>
    </footer>
  );
}
