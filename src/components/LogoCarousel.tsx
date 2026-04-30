"use client";

import { motion } from "framer-motion";
import frutariaLogo from "@/assets/logos/frutaria.jpeg";
import zhenhaiLogo from "@/assets/logos/zhenhai.jpeg";
import chilfreshLogo from "@/assets/logos/chilfresh.jpeg";
import novafruitLogo from "@/assets/logos/novafruit.png";
import frueatLogo from "@/assets/logos/frueat.png";
import novacoopLogo from "@/assets/logos/novacoop.png";
import cleeLogo from "@/assets/logos/clee-logo.jpeg";
import agrolandLogo from "@/assets/logos/agroland-logo.jpeg";
import propalLogo from "@/assets/logos/propal-logo.jpeg";
import vegLogo from "@/assets/logos/veg-logo.jpeg";

const logos = [
  { src: frutariaLogo.src, alt: "Frutaria" },
  { src: zhenhaiLogo.src, alt: "Zhenhai" },
  { src: chilfreshLogo.src, alt: "Chilfresh" },
  { src: novafruitLogo.src, alt: "Novafruit Italia" },
  { src: frueatLogo.src, alt: "Frueat by Moudiris" },
  { src: novacoopLogo.src, alt: "Novacoop Mediterranea" },
  { src: cleeLogo.src, alt: "Clee" },
  { src: agrolandLogo.src, alt: "Agroland" },
  { src: propalLogo.src, alt: "Propal" },
  { src: vegLogo.src, alt: "Veg" },
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
