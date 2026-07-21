"use client";

import { motion } from "framer-motion";
import frutariaLogo from "@/assets/logos/frutaria.jpeg";
import zhenhaiLogo from "@/assets/logos/zhenhai.jpeg";
import chilfreshLogo from "@/assets/logos/chilfresh.jpeg";
import novafruitLogo from "@/assets/logos/novafruit.png";
import frueatLogo from "@/assets/logos/frueat.png";
import cleeLogo from "@/assets/logos/clee-logo.jpeg";
import agrolandLogo from "@/assets/logos/agroland-logo.jpeg";
import propalLogo from "@/assets/logos/propal-logo.jpeg";
import vegLogo from "@/assets/logos/veg-logo.jpeg";
import palomaLogo from "@/assets/logos/paloma.jpeg";
import fruilomarLogo from "@/assets/logos/fruilomar.jpeg";
import orientalFruitsLogo from "@/assets/logos/oriental-fruits.jpeg";
import spreaficoLogo from "@/assets/logos/spreafico.jpeg";
import yassineLogo from "@/assets/logos/yassine-delight-factory.jpeg";
import bellaSiciliaLogo from "@/assets/logos/bella-sicilia.jpeg";
import nogalfruitsLogo from "@/assets/logos/nogalfruits.jpeg";
import mspOnionsLogo from "@/assets/logos/msp-onions.jpeg";
import especialFrutasLogo from "@/assets/logos/especial-frutas.jpeg";
import snowValleyLogo from "@/assets/logos/snow-valley.jpeg";
import fazendaSantaMariaLogo from "@/assets/logos/fazenda-santa-maria-rio-pardo.jpeg";
import kirliogluLogo from "@/assets/logos/kirlioglu.jpeg";

const logos = [
  { src: frutariaLogo.src, alt: "Frutaria" },
  { src: zhenhaiLogo.src, alt: "Zhenhai" },
  { src: chilfreshLogo.src, alt: "Chilfresh" },
  { src: novafruitLogo.src, alt: "Novafruit Italia" },
  { src: frueatLogo.src, alt: "Frueat by Moudiris" },
  { src: cleeLogo.src, alt: "Clee" },
  { src: agrolandLogo.src, alt: "Agroland" },
  { src: propalLogo.src, alt: "Propal" },
  { src: vegLogo.src, alt: "Veg" },
  { src: palomaLogo.src, alt: "Paloma" },
  { src: fruilomarLogo.src, alt: "Fruilomar" },
  { src: orientalFruitsLogo.src, alt: "Oriental Fruits" },
  { src: spreaficoLogo.src, alt: "Spreafico" },
  { src: yassineLogo.src, alt: "Yassine Delight Factory" },
  { src: bellaSiciliaLogo.src, alt: "Bella Sicilia" },
  { src: nogalfruitsLogo.src, alt: "Nogalfruits" },
  { src: mspOnionsLogo.src, alt: "MSP Onions" },
  { src: especialFrutasLogo.src, alt: "Especial Frutas" },
  { src: snowValleyLogo.src, alt: "Snow Valley" },
  { src: fazendaSantaMariaLogo.src, alt: "Fazenda Santa Maria do Rio Pardo" },
  { src: kirliogluLogo.src, alt: "Kirlioğlu" },
];

// Duplicate for seamless loop
const allLogos = [...logos, ...logos];

export function LogoCarousel() {
  return (
    <div className="relative overflow-hidden py-8">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex w-max items-center gap-16"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 25,
            ease: "linear",
          },
        }}
      >
        {allLogos.map((logo, i) => (
          <div
            key={`${logo.alt}-${i}`}
            className="flex-shrink-0 flex items-center justify-center h-20 w-48 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="max-h-full max-w-full object-contain"
              loading="lazy"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
