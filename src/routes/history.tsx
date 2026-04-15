import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useTranslation } from "@/i18n/LanguageContext";

export const Route = createFileRoute("/history")({
  component: HistoryPage,
  head: () => ({
    meta: [
      { title: "Nossa História — Viva Frutas" },
      { name: "description", content: "A história da Viva Fruta, fundada por André Schenk em 2012 em São Paulo." },
      { property: "og:title", content: "Nossa História — Viva Frutas" },
      { property: "og:description", content: "Conheça a trajetória da Viva Frutas no comércio internacional de frutas." },
    ],
  }),
});

const fadeUp = {
  initial: { opacity: 0, y: 30 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true } as const,
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

function HistoryPage() {
  const { t } = useTranslation();

  return (
    <div className="pt-32 pb-24 lg:pt-40 lg:pb-32">
      {/* Header decorativo */}
      <div className="mx-auto max-w-4xl px-6 lg:px-12 mb-20">
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
          className="font-serif text-4xl lg:text-6xl font-light text-foreground"
        >
          {t.historyPage.title}
        </motion.h1>
      </div>

      {/* Timeline de parágrafos */}
      <div className="mx-auto max-w-4xl px-6 lg:px-12">
        <div className="relative">
          {/* Linha vertical da timeline */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute left-0 lg:left-8 top-0 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent"
          />

          <div className="space-y-12 pl-8 lg:pl-20">
            {t.historyPage.paragraphs.map((p, i) => {
              const isQuote = p.startsWith('"');
              return (
                <motion.div
                  key={i}
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: i * 0.12 }}
                  className="relative"
                >
                  {/* Dot na timeline */}
                  <div className="absolute -left-8 lg:-left-20 top-2 w-2 h-2 rounded-full bg-primary/50" />

                  {isQuote ? (
                    <blockquote className="text-xl lg:text-2xl font-serif italic text-primary leading-relaxed py-4 px-6 bg-primary/5 border-l-2 border-primary/30">
                      {p}
                    </blockquote>
                  ) : (
                    <p className="text-lg text-foreground/75 leading-relaxed font-light">
                      {p}
                    </p>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
