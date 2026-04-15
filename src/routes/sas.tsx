import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useTranslation } from "@/i18n/LanguageContext";
import sasLogo from "@/assets/vivafruta-sas-logo.png";

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
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-16"
        >
          <img src={sasLogo} alt="Viva Fruta SAS" className="h-48 lg:h-64 w-auto" />
        </motion.div>

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
