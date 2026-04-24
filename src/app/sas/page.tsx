"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/i18n/LanguageContext";
import sasLogo from "@/assets/vivafruta-sas-logo.png";

const fadeUp = {
  initial: { opacity: 0, y: 30 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true } as const,
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

export default function SasPage() {
  const { t } = useTranslation();

  return (
    <div className="pt-32 pb-24 lg:pt-40 lg:pb-32">
      {/* Hero com logo */}
      <div className="mx-auto max-w-4xl px-6 lg:px-12 text-center mb-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center"
        >
          <img src={sasLogo.src} alt="Viva Fruta SAS" className="h-56 lg:h-72 w-auto" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "5rem" }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="h-0.5 bg-gold mx-auto mt-10"
        />
      </div>

      {/* Conteúdo editorial — layout vertical com blocos alternados */}
      <div className="mx-auto max-w-3xl px-6 lg:px-12 space-y-16">
        {t.sasPage.paragraphs.map((p, i) => (
          <motion.div
            key={i}
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: i * 0.12 }}
            className="relative"
          >
            <div className="flex items-start gap-6">
              <div className="hidden sm:flex flex-col items-center shrink-0 pt-1">
                <span className="w-8 h-8 rounded-full border-2 border-primary/30 flex items-center justify-center text-xs font-bold text-primary">
                  {i + 1}
                </span>
                {i < t.sasPage.paragraphs.length - 1 && (
                  <div className="w-px flex-1 min-h-16 bg-border mt-3" />
                )}
              </div>
              <p className="text-foreground/80 text-base lg:text-lg leading-[1.85] font-light">
                {p}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Endereço */}
      <motion.div
        {...fadeUp}
        className="mx-auto max-w-3xl px-6 lg:px-12 mt-20"
      >
        <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mb-12" />
        <div className="text-center">
          <h3 className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4">
            Endereço
          </h3>
          <p className="text-foreground/80 text-base lg:text-lg font-light leading-relaxed">
            Gral. Dr Arturo J. Balinas
            <br />
            Montevideo, Uruguai
          </p>
          <p className="mt-3 text-sm text-muted-foreground">RUT: 219035730017</p>
        </div>
      </motion.div>
    </div>
  );
}
