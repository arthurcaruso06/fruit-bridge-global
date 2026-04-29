"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/i18n/LanguageContext";

const fadeUp = {
  initial: { opacity: 0, y: 30 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true } as const,
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

export default function ContactPage() {
  const { t } = useTranslation();

  return (
    <div className="pt-32 pb-24 lg:pt-40 lg:pb-32">
      {/* Header */}
      <div className="mx-auto max-w-5xl px-6 lg:px-12 mb-16">
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
          {t.contactPage.title}
        </motion.h1>
      </div>

      {/* Info cards com ícones */}
      <div className="mx-auto max-w-5xl px-6 lg:px-12 mb-20">
        <motion.div {...fadeUp} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-8 lg:p-10 border border-border bg-card hover:border-primary/30 transition-all duration-500">
            <span className="text-2xl mb-4 block">📞</span>
            <h3 className="text-xs font-medium tracking-[0.2em] uppercase text-primary/60 mb-4">
              {t.contactPage.title === "Contatos"
                ? "Telefone"
                : t.contactPage.title === "Contact"
                  ? "Phone"
                  : "Teléfono"}
            </h3>
            <p className="text-lg text-foreground font-light">{t.contactPage.phone}</p>
          </div>
          <div className="p-8 lg:p-10 border border-border bg-card hover:border-primary/30 transition-all duration-500">
            <span className="text-2xl mb-4 block">📍</span>
            <h3 className="text-xs font-medium tracking-[0.2em] uppercase text-primary/60 mb-4">
              {t.contactPage.title === "Contatos"
                ? "Endereço"
                : t.contactPage.title === "Contact"
                  ? "Address"
                  : "Dirección"}
            </h3>
            <p className="text-foreground/80 whitespace-pre-line leading-relaxed font-light">
              {t.contactPage.address}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Equipe */}
      <div className="mx-auto max-w-5xl px-6 lg:px-12">
        <motion.div {...fadeUp} className="flex items-center gap-4 mb-10">
          <div className="h-px w-12 bg-primary/30" />
          <h2 className="font-serif text-2xl lg:text-3xl font-light text-foreground">
            {t.contactPage.contactsTitle}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.contactPage.contacts.map((c, i) => (
            <motion.div
              key={c.email}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.06 }}
              className="group p-6 lg:p-8 border border-border bg-card hover:border-primary/30 hover:shadow-md transition-all duration-500"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-primary font-serif text-sm font-medium">
                  {c.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>
              <h3 className="font-medium text-foreground mb-1">{c.name}</h3>
              <p className="text-xs font-medium tracking-wide uppercase text-primary/60 mb-3">
                {c.department}
              </p>
              <div className="space-y-2 text-sm">
                <a
                  href={`mailto:${c.email}`}
                  className="block text-primary hover:text-primary/80 transition-colors"
                >
                  {c.email}
                </a>
                <a
                  href={`tel:${c.phone.replace(/\s/g, "")}`}
                  className="block text-muted-foreground hover:text-foreground transition-colors"
                >
                  {c.phone}
                </a>
              </div>
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
