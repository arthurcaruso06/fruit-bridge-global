import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useTranslation } from "@/i18n/LanguageContext";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contatos — Viva Frutas" },
      { name: "description", content: "Entre em contato com a Viva Frutas. São Paulo, Brasil." },
      { property: "og:title", content: "Contatos — Viva Frutas" },
      { property: "og:description", content: "Telefone, endereço e contatos da equipe Viva Frutas." },
    ],
  }),
});

const fadeUp = {
  initial: { opacity: 0, y: 30 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true } as const,
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

function ContactPage() {
  const { t } = useTranslation();

  return (
    <div className="pt-32 pb-24 lg:pt-40 lg:pb-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-12">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-serif text-4xl lg:text-6xl font-light text-foreground mb-16"
        >
          {t.contactPage.title}
        </motion.h1>

        <motion.div {...fadeUp} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="p-8 border border-border">
            <h3 className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4">
              {t.contactPage.title === 'Contatos' ? 'Telefone' : t.contactPage.title === 'Contact' ? 'Phone' : 'Teléfono'}
            </h3>
            <p className="text-lg text-foreground">{t.contactPage.phone}</p>
          </div>
          <div className="p-8 border border-border">
            <h3 className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4">
              {t.contactPage.title === 'Contatos' ? 'Endereço' : t.contactPage.title === 'Contact' ? 'Address' : 'Dirección'}
            </h3>
            <p className="text-foreground/80 whitespace-pre-line leading-relaxed">{t.contactPage.address}</p>
          </div>
        </motion.div>

        <motion.h2 {...fadeUp} className="font-serif text-2xl lg:text-3xl font-light text-foreground mb-10">
          {t.contactPage.contactsTitle}
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.contactPage.contacts.map((c, i) => (
            <motion.div
              key={c.email}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.05 }}
              className="p-6 border border-border hover:border-primary/30 transition-colors"
            >
              <h3 className="font-medium text-foreground mb-3">{c.name}</h3>
              <div className="space-y-1.5 text-sm">
                <a
                  href={`mailto:${c.email}`}
                  className="block text-primary hover:text-primary/80 transition-colors"
                >
                  {c.email}
                </a>
                <a
                  href={`tel:${c.phone.replace(/\s/g, '')}`}
                  className="block text-muted-foreground hover:text-foreground transition-colors"
                >
                  {c.phone}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
