import { Link } from '@tanstack/react-router';
import { useTranslation } from '@/i18n/LanguageContext';
import logoImg from '@/assets/logo-viva-fruta.png';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          <div>
            <img src={logoImg} alt="Viva Fruta" className="h-14 w-auto brightness-0 invert" />
            <p className="mt-4 text-sm text-primary-foreground/60 leading-relaxed max-w-xs">
              {t.footer.tagline}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-medium tracking-[0.2em] uppercase text-primary-foreground/40 mb-6">
              {t.nav.home === 'Home' ? 'Navigation' : t.nav.home === 'Inicio' ? 'Navegación' : 'Navegação'}
            </h4>
            <nav className="flex flex-col gap-3">
              <Link to="/" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">{t.nav.home}</Link>
              <Link to="/history" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">{t.nav.history}</Link>
              <Link to="/team" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">{t.nav.team}</Link>
              <Link to="/sas" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">{t.nav.sas}</Link>
              <Link to="/contact" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">{t.nav.contact}</Link>
            </nav>
          </div>

          <div>
            <h4 className="text-xs font-medium tracking-[0.2em] uppercase text-primary-foreground/40 mb-6">
              {t.contactPage.contactsTitle}
            </h4>
            <div className="space-y-2 text-sm text-primary-foreground/70">
              <p>{t.contactPage.phone}</p>
              <p className="whitespace-pre-line">{t.contactPage.address}</p>
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
