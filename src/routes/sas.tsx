import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useTranslation } from "@/i18n/LanguageContext";

export const Route = createFileRoute("/sas")({
  component: SasPage,
  head: () => ({
    meta: [
      { title: "SAS — Viva Frutas" },
      { name: "description", content: "SAS: empresa de trade especializada na comercialização e distribuição de frutas frescas importadas." },
      { property: "og:title", content: "SAS — Viva Frutas" },
      { property: "og:description", content: "Comercialização e distribuição de frutas frescas importadas." },
    ],
  }),
});

const fadeUp = {
  initial: { opacity: 0, y: 30 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true } as const,
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

function SasPage() {
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
          {t.sasPage.title}
        </motion.h1>

        <div className="space-y-8">
          {t.sasPage.paragraphs.map((p, i) => (
            <motion.p
              key={i}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.1 }}
              className="text-lg text-foreground/75 leading-relaxed font-light"
            >
              {p}
            </motion.p>
          ))}
        </div>
      </div>
    </div>
  );
}
