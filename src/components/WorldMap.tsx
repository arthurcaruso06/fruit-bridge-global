import { motion } from "framer-motion";

const brazil = { x: 310, y: 340 };

const countries = [
  { name: "USA", x: 150, y: 200, label: "EUA" },
  { name: "Chile", x: 250, y: 410, label: "Chile" },
  { name: "Argentina", x: 280, y: 420, label: "Argentina" },
  { name: "Spain", x: 460, y: 210, label: "Espanha" },
  { name: "Italy", x: 500, y: 205, label: "Itália" },
  { name: "South Africa", x: 530, y: 420, label: "Á. do Sul" },
  { name: "China", x: 720, y: 220, label: "China" },
];

// Dot-matrix world map — each row is [y, ...x-ranges as [start, end]]
// Simplified but recognizable continent shapes
const dotMap: [number, ...([number, number])[]][] = [
  // North America
  [140, [120, 210]],
  [150, [110, 220]],
  [160, [100, 230]],
  [170, [100, 230]],
  [180, [110, 240]],
  [190, [120, 230]],
  [200, [110, 210]],
  [210, [120, 200]],
  [220, [130, 190]],
  [230, [140, 185]],
  [240, [145, 180]],
  [250, [150, 178]],
  [260, [155, 175]],
  // Central America
  [270, [160, 175]],
  [280, [165, 175]],
  [290, [168, 178]],
  // South America
  [300, [240, 310]],
  [310, [235, 320]],
  [320, [230, 330]],
  [330, [235, 335]],
  [340, [240, 330]],
  [350, [245, 325]],
  [360, [250, 320]],
  [370, [255, 315]],
  [380, [260, 310]],
  [390, [260, 305]],
  [400, [265, 300]],
  [410, [265, 295]],
  [420, [268, 290]],
  [430, [270, 285]],
  [440, [272, 280]],
  [450, [275, 278]],
  // Europe
  [160, [430, 540]],
  [170, [420, 560]],
  [180, [420, 570]],
  [190, [430, 560]],
  [200, [435, 555]],
  [210, [440, 550]],
  [220, [445, 540]],
  [230, [450, 530]],
  [240, [455, 520]],
  // Africa
  [250, [450, 540]],
  [260, [440, 560]],
  [270, [435, 570]],
  [280, [440, 575]],
  [290, [445, 575]],
  [300, [448, 575]],
  [310, [450, 570]],
  [320, [455, 565]],
  [330, [458, 560]],
  [340, [460, 558]],
  [350, [465, 555]],
  [360, [468, 552]],
  [370, [472, 548]],
  [380, [475, 545]],
  [390, [478, 542]],
  [400, [482, 540]],
  [410, [486, 538]],
  [420, [490, 535]],
  [430, [495, 530]],
  [440, [500, 525]],
  // Asia
  [160, [560, 760]],
  [170, [560, 780]],
  [180, [570, 790]],
  [190, [565, 790]],
  [200, [560, 780]],
  [210, [558, 770]],
  [220, [555, 760]],
  [230, [560, 750]],
  [240, [565, 745]],
  [250, [570, 740]],
  [260, [580, 730]],
  [270, [590, 720]],
  [280, [600, 715]],
  [290, [610, 710]],
  // Australia
  [370, [700, 780]],
  [380, [695, 790]],
  [390, [690, 795]],
  [400, [695, 790]],
  [410, [700, 785]],
  [420, [705, 780]],
  [430, [710, 770]],
  [440, [720, 760]],
];

function generateDots(): { x: number; y: number }[] {
  const dots: { x: number; y: number }[] = [];
  const spacing = 8;
  for (const row of dotMap) {
    const y = row[0] as number;
    for (let r = 1; r < row.length; r++) {
      const range = row[r] as [number, number];
      for (let x = range[0]; x <= range[1]; x += spacing) {
        dots.push({ x, y });
      }
    }
  }
  return dots;
}

const dots = generateDots();

export function WorldMap() {
  return (
    <div className="relative w-full max-w-5xl mx-auto">
      <svg viewBox="60 120 780 360" className="w-full">
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

        {/* Dot matrix continents */}
        {dots.map((d, i) => (
          <circle
            key={i}
            cx={d.x}
            cy={d.y}
            r="1.6"
            fill="currentColor"
            opacity="0.12"
          />
        ))}

        {/* Connection lines */}
        {countries.map((c, i) => {
          const mx = (brazil.x + c.x) / 2;
          const my = Math.min(brazil.y, c.y) - 30 - Math.abs(brazil.x - c.x) * 0.08;
          return (
            <motion.path
              key={c.name}
              d={`M${brazil.x},${brazil.y} Q${mx},${my} ${c.x},${c.y}`}
              fill="none"
              stroke="var(--gold)"
              strokeWidth="0.7"
              strokeDasharray="3 3"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.3 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, delay: 0.3 + i * 0.12, ease: "easeOut" }}
            />
          );
        })}

        {/* Brazil hub */}
        <circle cx={brazil.x} cy={brazil.y} r="28" fill="url(#brazilGlow)" />
        <motion.circle
          cx={brazil.x}
          cy={brazil.y}
          r="5"
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
          r="10"
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
          y={brazil.y - 16}
          textAnchor="middle"
          fontSize="9"
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
            <circle cx={c.x} cy={c.y} r="12" fill="url(#ptGlow)" />
            <motion.circle
              cx={c.x}
              cy={c.y}
              r="3.5"
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
              r="3.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              initial={{ scale: 1, opacity: 0.4 }}
              animate={{ scale: [1, 2.8], opacity: [0.4, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.35, ease: "easeOut" }}
            />
            <text
              x={c.x}
              y={c.y - 9}
              textAnchor="middle"
              fontSize="7.5"
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
