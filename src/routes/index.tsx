import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useTranslation } from "@/i18n/LanguageContext";
import { WorldMap } from "@/components/WorldMap";
import heroImg from "@/assets/hero-port.jpg";
import fruitsImg from "@/assets/fruits-premium.png";
import sasLogo from "@/assets/vivafruta-sas-logo.png";
import { LogoCarousel } from "@/components/LogoCarousel";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Viva Frutas — Trading Internacional de Frutas" },
      { name: "description", content: "Trading internacional de frutas com controle, velocidade e confiança." },
      { property: "og:title", content: "Viva Frutas — Trading Internacional de Frutas" },
      { property: "og:description", content: "Representamos produtores globais e garantimos qualidade na chegada." },
    ],
  }),
});

const fadeUp = {
  initial: { opacity: 0, y: 30 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true, margin: "-80px" } as const,
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

function Index() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProcessSection />
      <DifferentialsSection />
      <GlobalSection />
      <ProductsSection />
      <PartnersSection />
      <TeamPreviewSection />
      <SasPreviewSection />
    </>
  );
}

function HeroSection() {
  const { t } = useTranslation();
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-foreground/65" />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-20">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-primary-foreground leading-[1.1] tracking-tight"
        >
          {t.hero.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 text-lg md:text-xl text-primary-foreground/75 max-w-2xl mx-auto font-light leading-relaxed"
        >
          {t.hero.subtitle}
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid grid-cols-3 max-w-3xl mx-auto"
        >
          {[t.hero.experience, t.hero.international, t.hero.quality].map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + i * 0.2, ease: [0.22, 1, 0.36, 1] }}
              className={`flex flex-col items-center gap-3 py-5 px-4 ${i < 2 ? "border-r border-primary-foreground/15" : ""}`}
            >
              <span className="w-2 h-2 rounded-full bg-gold animate-[pulse_3s_ease-in-out_infinite]" />
              <span className="text-sm md:text-base font-medium text-primary-foreground tracking-wider uppercase text-center leading-snug">{item}</span>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            to="/history"
            className="px-8 py-3.5 bg-primary-foreground text-foreground text-sm font-medium tracking-wider hover:bg-primary-foreground/90 transition-colors"
          >
            {t.hero.cta1}
          </Link>
          <a
            href="#produtos"
            className="px-8 py-3.5 border border-primary-foreground/30 text-primary-foreground text-sm font-medium tracking-wider hover:bg-primary-foreground/10 transition-colors"
          >
            {t.hero.cta2}
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function AboutSection() {
  const { t } = useTranslation();
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div {...fadeUp}>
            <h2 className="text-xs font-medium tracking-[0.25em] uppercase text-muted-foreground mb-6">
              {t.about.title}
            </h2>
            <p className="text-lg lg:text-xl text-foreground/80 leading-relaxed font-light">
              {t.about.text}
            </p>
          </motion.div>
          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.2 }}>
            <img
              src={fruitsImg}
              alt="Fresh fruits"
              className="w-full aspect-[4/3] object-cover"
              loading="lazy"
              width={1280}
              height={720}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  const { t } = useTranslation();
  return (
    <section className="py-24 lg:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.h2 {...fadeUp} className="font-serif text-3xl lg:text-5xl font-light text-foreground mb-16 lg:mb-20">
          {t.process.title}
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
          {t.process.steps.map((step, i) => (
            <motion.div
              key={step.number}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.1 }}
              className="relative bg-card border border-border p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              <span className="text-6xl font-serif font-light text-primary/15 group-hover:text-primary/30 transition-colors absolute top-3 right-4">{step.number}</span>
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-sm font-bold text-primary">{step.number}</span>
                </div>
                <h3 className="font-serif text-lg font-medium text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
              {i < t.process.steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-5 text-primary/40 -translate-y-1/2 z-20">
                  <svg viewBox="0 0 20 8" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M0 4h16M12 1l4 3-4 3" />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DifferentialsSection() {
  const { t } = useTranslation();
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div {...fadeUp} className="mb-16">
          <h2 className="font-serif text-3xl lg:text-5xl font-light text-foreground">
            {t.differentials.title}
          </h2>
          <div className="mt-4 w-20 h-0.5 bg-gold" />
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.differentials.items.map((item, i) => (
            <motion.div
              key={i}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.08 }}
              className="group relative p-8 bg-card border border-border hover:border-primary/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <span className="absolute top-4 right-5 text-5xl font-serif font-light text-primary/8 group-hover:text-primary/15 transition-colors">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="relative z-10 flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <svg className="w-5 h-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-foreground/85 text-base leading-relaxed pt-2">{item}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GlobalSection() {
  const { t } = useTranslation();

  const stats = [
    { value: "7+", label: "Países" },
    { value: "3", label: "Continentes" },
    { value: "365", label: "Dias ativos" },
    { value: "100%", label: "Rastreável" },
  ];

  const origins = [
    { country: "Chile", flag: "🇨🇱", products: "Uvas, Cerejas, Ameixas" },
    { country: "Argentina", flag: "🇦🇷", products: "Peras, Maçãs, Limões" },
    { country: "EUA", flag: "🇺🇸", products: "Maçãs, Cerejas" },
    { country: "Espanha", flag: "🇪🇸", products: "Citros, Caquis" },
    { country: "Itália", flag: "🇮🇹", products: "Kiwis, Uvas" },
    { country: "África do Sul", flag: "🇿🇦", products: "Citros, Uvas" },
    { country: "China", flag: "🇨🇳", products: "Peras, Alho" },
  ];

  return (
    <section className="py-24 lg:py-32 bg-primary text-primary-foreground overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Header */}
        <motion.div {...fadeUp} className="mb-20">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div className="max-w-2xl">
              <div className="w-16 h-0.5 bg-gold mb-8" />
              <h2 className="font-serif text-3xl lg:text-5xl font-light">{t.global.title}</h2>
              <p className="mt-6 text-lg text-primary-foreground/60 font-light leading-relaxed">
                {t.global.text}
              </p>
            </div>
            {/* Stats */}
            <div className="flex gap-8 lg:gap-12">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="text-center"
                >
                  <span className="block font-serif text-3xl lg:text-4xl font-light text-gold">{stat.value}</span>
                  <span className="block mt-1 text-xs tracking-[0.2em] uppercase text-primary-foreground/50">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Mapa */}
        <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.2 }} className="mb-16">
          <WorldMap />
        </motion.div>

        {/* Grid de origens */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
          {origins.map((origin, i) => (
            <motion.div
              key={origin.country}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group relative bg-primary-foreground/5 border border-primary-foreground/10 p-6 text-center hover:bg-primary-foreground/10 hover:border-gold/30 transition-all duration-300"
            >
              <span className="text-3xl block mb-3">{origin.flag}</span>
              <span className="block font-serif text-sm font-medium text-primary-foreground tracking-wide">{origin.country}</span>
              <span className="block mt-2 text-xs text-primary-foreground/45 leading-relaxed">{origin.products}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductsSection() {
  const { t } = useTranslation();

  // Group products into categories for visual interest
  const fruits = t.products.items;

  return (
    <section id="produtos" className="py-24 lg:py-32 scroll-mt-20 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div {...fadeUp} className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <h2 className="font-serif text-3xl lg:text-5xl font-light text-foreground">
              {t.products.title}
            </h2>
            <div className="mt-4 w-20 h-0.5 bg-gold" />
          </div>
          <p className="text-sm text-muted-foreground max-w-md lg:text-right leading-relaxed">
            Frutas frescas, congeladas e processadas de alta qualidade, selecionadas nos melhores pomares do mundo.
          </p>
        </motion.div>

        <motion.div {...fadeUp} className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
          {fruits.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.02 }}
              className="group relative px-4 py-5 bg-card border border-border text-center hover:border-gold/50 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 cursor-default overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-gold/0 group-hover:from-primary/5 group-hover:to-gold/5 transition-all duration-300" />
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gold/0 group-hover:bg-gold transition-colors duration-300" />
              <span className="relative z-10 text-sm font-medium text-foreground/70 group-hover:text-foreground transition-colors duration-300">{item}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function PartnersSection() {
  const { t } = useTranslation();
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div {...fadeUp} className="mb-16">
          <h2 className="font-serif text-3xl lg:text-5xl font-light text-foreground">
            {t.partners.title}
          </h2>
          <div className="mt-4 w-20 h-0.5 bg-gold" />
        </motion.div>
        <motion.div {...fadeUp}>
          <LogoCarousel />
        </motion.div>
      </div>
    </section>
  );
}

function TeamPreviewSection() {
  const { t } = useTranslation();
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden" style={{ background: "linear-gradient(135deg, var(--secondary) 0%, var(--background) 50%, var(--secondary) 100%)" }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-12 text-center">
        <motion.div {...fadeUp} className="flex justify-center mb-8">
          <div className="w-16 h-0.5 bg-gold" />
        </motion.div>
        <motion.p {...fadeUp} className="font-serif text-2xl lg:text-4xl font-light text-foreground max-w-2xl mx-auto leading-snug">
          {t.teamPreview.text}
        </motion.p>
        <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.2 }}>
          <Link
            to="/team"
            className="inline-block mt-10 px-8 py-3.5 bg-primary text-primary-foreground text-sm font-medium tracking-wider hover:bg-primary/90 transition-colors"
          >
            {t.teamPreview.cta}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function SasPreviewSection() {
  const { t } = useTranslation();
  return (
    <section className="py-24 lg:py-32 bg-foreground text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 text-center">
        <motion.div {...fadeUp} className="flex justify-center">
          <div className="p-6 border border-primary-foreground/15 rounded-lg inline-block">
            <img src={sasLogo} alt="Viva Fruta SAS" className="h-36 lg:h-48 w-auto" />
          </div>
        </motion.div>
        <motion.p {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }} className="mt-8 text-lg text-primary-foreground/65 max-w-xl mx-auto font-light">
          {t.sasPreview.text}
        </motion.p>
        <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.2 }}>
          <Link
            to="/sas"
            className="inline-block mt-10 px-8 py-3.5 border border-primary-foreground/30 text-primary-foreground text-sm font-medium tracking-wider hover:bg-primary-foreground hover:text-foreground transition-colors"
          >
            {t.sasPreview.cta}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}