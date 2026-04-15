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

const iconMap = ["🍇", "📊", "💰", "🚢", "📦", "🌍"];

function TeamPage() {
  const { t } = useTranslation();

  return (
    <div className="pt-32 pb-24 lg:pt-40 lg:pb-32">
      {/* Header */}
      <div className="mx-auto max-w-5xl px-6 lg:px-12 mb-20">
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "4rem" }}
          transition={{ duration: 0.8 }}
          className="h-px bg-primary mb-8"
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
          className="text-lg text-foreground/65 leading-relaxed font-light max-w-2xl"
        >
          {t.teamPage.intro}
        </motion.p>
      </div>

      {/* Grid de departamentos */}
      <div className="mx-auto max-w-5xl px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.teamPage.sections.map((section, i) => (
            <motion.div
              key={i}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.1 }}
              className="group p-8 lg:p-10 border border-border bg-card hover:border-primary/30 hover:shadow-lg transition-all duration-500"
            >
              <span className="text-3xl mb-4 block">{iconMap[i] || "🍊"}</span>
              <h2 className="font-serif text-xl lg:text-2xl font-medium text-foreground mb-3">
                {section.title}
              </h2>
              <p className="text-foreground/65 leading-relaxed font-light text-sm">
                {section.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Barra decorativa */}
      <motion.div {...fadeUp} className="mx-auto max-w-5xl px-6 lg:px-12 mt-20">
        <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </motion.div>
    </div>
  );
}
