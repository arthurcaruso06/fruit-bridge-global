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
      <div className="mx-auto max-w-4xl px-6 lg:px-12">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-serif text-4xl lg:text-6xl font-light text-foreground mb-8"
        >
          {t.teamPage.title}
        </motion.h1>

        <motion.p {...fadeUp} className="text-lg text-foreground/75 leading-relaxed font-light mb-20 max-w-2xl">
          {t.teamPage.intro}
        </motion.p>

        <div className="space-y-16">
          {t.teamPage.sections.map((section, i) => (
            <motion.div
              key={i}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.1 }}
              className="border-l-2 border-primary/30 pl-8"
            >
              <h2 className="font-serif text-2xl lg:text-3xl font-medium text-foreground mb-4">
                {section.title}
              </h2>
              <p className="text-foreground/70 leading-relaxed font-light">
                {section.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
