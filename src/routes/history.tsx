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
      <div className="mx-auto max-w-3xl px-6 lg:px-12">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-serif text-4xl lg:text-6xl font-light text-foreground mb-16"
        >
          {t.historyPage.title}
        </motion.h1>

        <div className="space-y-8">
          {t.historyPage.paragraphs.map((p, i) => {
            const isQuote = p.startsWith('"');
            return (
              <motion.p
                key={i}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.1 }}
                className={
                  isQuote
                    ? "text-xl lg:text-2xl font-serif italic text-primary leading-relaxed pl-6 border-l-2 border-primary/30"
                    : "text-lg text-foreground/75 leading-relaxed font-light"
                }
              >
                {p}
              </motion.p>
            );
          })}
        </div>
      </div>
    </div>
  );
}
