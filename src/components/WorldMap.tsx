"use client";

import { motion } from "framer-motion";
import { worldMapPath } from "./worldMapPath";
import { useIsMobile } from "@/hooks/use-mobile";

// Equirectangular: x=(lon+180)/360*900, y=(90-lat)/180*500
const brazil = { x: 333.5, y: 315.3 };

const countries = [
  { name: "USA", x: 151.5, y: 147.8, label: "EUA" },
  { name: "Chile", x: 273.2, y: 342.8, label: "Chile" },
  { name: "Argentina", x: 304.0, y: 346.1, label: "Argentina" },
  { name: "Peru", x: 262.5, y: 275.0, label: "Peru" },
  { name: "Spain", x: 440.8, y: 137.8, label: "Espanha" },
  { name: "Portugal", x: 430.0, y: 141.6, label: "Portugal" },
  { name: "France", x: 455.0, y: 122.2, label: "França" },
  { name: "Netherlands", x: 462.5, y: 105.5, label: "Holanda" },
  { name: "Italy", x: 481.2, y: 133.6, label: "Itália" },
  { name: "Greece", x: 505.0, y: 141.6, label: "Grécia" },
  { name: "Egypt", x: 525.0, y: 177.7, label: "Egito" },
  { name: "China", x: 741.0, y: 139.2, label: "China" },
];

export function WorldMap() {
  const isMobile = useIsMobile();
  return (
    <div className="relative w-full max-w-5xl mx-auto">
      <svg viewBox="30 50 870 420" className="w-full">
        <defs>
          <radialGradient id="brazilGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--gold)" stopOpacity="0.35" />
            <stop offset="70%" stopColor="var(--gold)" stopOpacity="0.08" />
            <stop offset="100%" stopColor="var(--gold)" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="ptGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.4" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
          </radialGradient>
          <filter id="softGlow">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Real world map */}
        <path
          d={worldMapPath}
          fill="currentColor"
          opacity="0.08"
          stroke="currentColor"
          strokeWidth="0.3"
          strokeOpacity="0.2"
        />

        {/* Connection curves */}
        {countries.map((c, i) => {
          const mx = (brazil.x + c.x) / 2;
          const my = Math.min(brazil.y, c.y) - 30 - Math.abs(brazil.x - c.x) * 0.06;
          return (
            <motion.path
              key={c.name}
              d={`M${brazil.x},${brazil.y} Q${mx},${my} ${c.x},${c.y}`}
              fill="none"
              stroke="var(--gold)"
              strokeWidth="0.8"
              strokeDasharray="4 3"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.35 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, delay: 0.3 + i * 0.12, ease: "easeOut" }}
            />
          );
        })}

        {/* Brazil hub */}
        <circle cx={brazil.x} cy={brazil.y} r="30" fill="url(#brazilGlow)" />
        <motion.circle
          cx={brazil.x}
          cy={brazil.y}
          r="5.5"
          fill="var(--gold)"
          filter="url(#softGlow)"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
        <motion.circle
          cx={brazil.x}
          cy={brazil.y}
          r="11"
          fill="none"
          stroke="var(--gold)"
          strokeWidth="0.5"
          opacity="0.25"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        />
        <text
          x={brazil.x}
          y={brazil.y - 18}
          textAnchor="middle"
          fontSize="10"
          fontWeight="600"
          fill="var(--gold)"
          fontFamily="var(--font-serif)"
          letterSpacing="0.08em"
        >
          BRASIL
        </text>

        {/* Country points */}
        {countries.map((c, i) => (
          <g key={c.name}>
            <circle cx={c.x} cy={c.y} r="14" fill="url(#ptGlow)" />
            <motion.circle
              cx={c.x}
              cy={c.y}
              r="4"
              fill="currentColor"
              opacity="0.75"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
            />
            <motion.circle
              cx={c.x}
              cy={c.y}
              r="4"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              initial={{ scale: 1, opacity: 0.4 }}
              animate={isMobile ? undefined : { scale: [1, 2.8], opacity: [0.4, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.35, ease: "easeOut" }}
            />
            <text
              x={c.x}
              y={c.y - 10}
              textAnchor="middle"
              fontSize="8"
              fill="currentColor"
              opacity="0.65"
              fontFamily="var(--font-sans)"
              fontWeight="500"
              letterSpacing="0.03em"
            >
              {c.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
