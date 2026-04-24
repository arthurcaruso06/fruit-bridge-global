import type { Metadata } from "next";
import { LanguageProvider } from "@/i18n/LanguageContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Viva Frutas — Trading Internacional de Frutas",
  description:
    "Representamos produtores globais e garantimos qualidade na chegada, conectando origem e mercado com precisão.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body>
        <LanguageProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
