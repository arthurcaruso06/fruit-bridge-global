import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useTranslation } from "@/i18n/LanguageContext";

export const Route = createFileRoute("/team")({
  component: TeamPage,
  head: () => ({
    meta: [
      { title: "Nosso Time — Viva Frutas" },
      { name: "description", content: "Conheça o time da Viva Frutas: qualidade, comercial, financeiro e operacional." },
      { property: "og:title", content: "Nosso Time — Viva Frutas" },
      { property: "og:description", content: "Na Viva, nossa força está no time que faz acontecer." },
    ],
  }),
});

const fadeUp = {
  initial: { opacity: 0, y: 30 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true } as const,
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

function TeamPage() {
  const { t } = useTranslation();

  return (
    <div className="pt-32 pb-24 lg:pt-40 lg:pb-32">
      {/* Header */}
      <div className="mx-auto max-w-5xl px-6 lg:px-12 mb-24">
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "5rem" }}
          transition={{ duration: 0.8 }}
          className="h-0.5 bg-gold mb-10"
        />
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-4xl lg:text-6xl font-light text-foreground mb-6"
        >
          {t.teamPage.title}
        </motion.h1>
        <motion.p
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.2 }}
          className="text-lg text-muted-foreground leading-relaxed font-light max-w-2xl"
        >
          {t.teamPage.intro}
        </motion.p>
      </div>

      {/* Departamentos — layout alternado editorial */}
      <div className="mx-auto max-w-6xl px-6 lg:px-12 space-y-0">
        {t.teamPage.sections.map((section, i) => {
          const isEven = i % 2 === 0;
          return (
            <motion.div
              key={i}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.1 }}
              className={`flex flex-col lg:flex-row items-stretch border-b border-border ${
                !isEven ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Bloco numérico/visual */}
              <div className="lg:w-2/5 bg-secondary flex items-center justify-center p-12 lg:p-16">
                <div className="text-center">
                  <span className="block font-serif text-7xl lg:text-8xl font-light text-primary/20">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="mt-4 font-serif text-xl lg:text-2xl font-medium text-foreground tracking-tight">
                    {section.title}
                  </h2>
                </div>
              </div>

              {/* Bloco de texto */}
              <div className="lg:w-3/5 flex items-center p-10 lg:p-16">
                <p className="text-foreground/75 text-base lg:text-lg leading-[1.9] font-light">
                  {section.text}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Linha decorativa final */}
      <motion.div {...fadeUp} className="mx-auto max-w-6xl px-6 lg:px-12 mt-20">
        <div className="h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      </motion.div>
    </div>
  );
}
