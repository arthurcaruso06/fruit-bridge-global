import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useTranslation } from "@/i18n/LanguageContext";
import { WorldMap } from "@/components/WorldMap";
import heroImg from "@/assets/hero-port.jpg";
import fruitsImg from "@/assets/fruits-premium.png";
import sasLogo from "@/assets/vivafruta-sas-logo.png";

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
          {t.process.steps.map((step, i) => (
            <motion.div
              key={step.number}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.1 }}
              className="relative"
            >
              <span className="text-5xl font-serif font-light text-primary/20">{step.number}</span>
              <h3 className="mt-3 font-serif text-xl font-medium text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              {i < t.process.steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 -right-3 w-6 text-border">
                  <svg viewBox="0 0 24 8" fill="none" stroke="currentColor" strokeWidth="1">
                    <path d="M0 4h20M16 1l4 3-4 3" />
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
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.h2 {...fadeUp} className="font-serif text-3xl lg:text-5xl font-light text-foreground mb-16">
          {t.differentials.title}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.differentials.items.map((item, i) => (
            <motion.div
              key={i}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.08 }}
              className="flex items-start gap-4 p-6 border border-border hover:border-primary/30 transition-colors"
            >
              <svg className="w-5 h-5 text-primary mt-0.5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-foreground/80">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GlobalSection() {
  const { t } = useTranslation();
  return (
    <section className="py-24 lg:py-32 bg-primary text-primary-foreground overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div {...fadeUp} className="text-center mb-12">
          <h2 className="font-serif text-3xl lg:text-5xl font-light">{t.global.title}</h2>
          <p className="mt-6 text-lg text-primary-foreground/70 max-w-2xl mx-auto font-light leading-relaxed">
            {t.global.text}
          </p>
        </motion.div>
        <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.2 }}>
          <WorldMap />
        </motion.div>
      </div>
    </section>
  );
}

function ProductsSection() {
  const { t } = useTranslation();
  return (
    <section id="produtos" className="py-24 lg:py-32 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.h2 {...fadeUp} className="font-serif text-3xl lg:text-5xl font-light text-foreground mb-16">
          {t.products.title}
        </motion.h2>
        <motion.div {...fadeUp} className="flex flex-wrap gap-3">
          {t.products.items.map((item) => (
            <span
              key={item}
              className="px-5 py-2.5 border border-border text-sm text-foreground/70 hover:border-primary/40 hover:text-foreground transition-colors cursor-default"
            >
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function PartnersSection() {
  const { t } = useTranslation();
  return (
    <section className="py-24 lg:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.h2 {...fadeUp} className="font-serif text-3xl lg:text-5xl font-light text-foreground mb-16">
          {t.partners.title}
        </motion.h2>
        <motion.div {...fadeUp} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {t.partners.main.map((name) => (
            <div key={name} className="p-8 bg-card border border-border text-center">
              <span className="font-serif text-2xl font-medium text-foreground">{name}</span>
            </div>
          ))}
        </motion.div>
        <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.2 }}>
          <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center">
            {t.partners.all.map((name) => (
              <span key={name} className="text-sm text-muted-foreground">{name}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TeamPreviewSection() {
  const { t } = useTranslation();
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 text-center">
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
    <section className="py-24 lg:py-32 bg-muted">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 text-center">
        <motion.div {...fadeUp} className="flex justify-center">
          <img src={sasLogo} alt="Viva Fruta SAS" className="h-24 lg:h-32 w-auto" />
        </motion.div>
        <motion.p {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }} className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto font-light">
          {t.sasPreview.text}
        </motion.p>
        <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.2 }}>
          <Link
            to="/sas"
            className="inline-block mt-10 px-8 py-3.5 border border-foreground text-foreground text-sm font-medium tracking-wider hover:bg-foreground hover:text-background transition-colors"
          >
            {t.sasPreview.cta}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
