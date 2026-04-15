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
      {/* Hero com logo grande */}
      <div className="mx-auto max-w-4xl px-6 lg:px-12 text-center mb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center"
        >
          <img src={sasLogo} alt="Viva Fruta SAS" className="h-56 lg:h-72 w-auto" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "6rem" }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="h-px bg-primary mx-auto mt-10"
        />
      </div>

      {/* Conteúdo em cards */}
      <div className="mx-auto max-w-5xl px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.sasPage.paragraphs.map((p, i) => (
            <motion.div
              key={i}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.12 }}
              className="group p-8 lg:p-10 border border-border bg-card hover:border-primary/30 transition-all duration-500"
            >
              <span className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-primary/60 mb-4">
                0{i + 1}
              </span>
              <p className="text-foreground/75 leading-relaxed font-light">
                {p}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Barra decorativa final */}
      <motion.div
        {...fadeUp}
        className="mx-auto max-w-5xl px-6 lg:px-12 mt-20"
      >
        <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </motion.div>
    </div>
  );
}
