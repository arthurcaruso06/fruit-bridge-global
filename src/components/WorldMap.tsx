import { motion } from "framer-motion";

const brazil = { x: 285, y: 370 };

const countries = [
  { name: "USA", x: 170, y: 220, label: "EUA" },
  { name: "Chile", x: 240, y: 430, label: "Chile" },
  { name: "Argentina", x: 265, y: 440, label: "Argentina" },
  { name: "Spain", x: 440, y: 230, label: "Espanha" },
  { name: "Italy", x: 480, y: 225, label: "Itália" },
  { name: "South Africa", x: 510, y: 440, label: "África do Sul" },
  { name: "China", x: 700, y: 240, label: "China" },
];

// Simplified world map path (continents outline)
const worldPath = `M150,200 Q160,180 180,175 Q200,170 220,180 Q230,175 240,180 Q250,172 260,175 
Q270,170 280,175 Q285,180 290,185 Q280,190 275,200 Q270,210 265,220 Q255,225 250,230 
Q245,240 240,250 Q235,260 230,265 Q225,275 220,280 Q215,290 210,300 Q205,310 200,320 
Q195,330 190,335 Q185,340 180,345 Q175,350 170,355 Q165,360 160,365 Q155,370 150,370 
Q148,365 147,360 Q146,350 147,340 Q148,330 150,320 Q152,310 153,300 Q154,290 155,280 
Q156,270 155,260 Q154,250 153,240 Q152,230 150,220 Z
M230,290 Q240,285 250,290 Q260,295 270,300 Q280,310 285,320 Q290,330 295,340 
Q300,350 305,360 Q310,370 312,380 Q314,390 310,400 Q305,410 300,420 Q295,430 290,440 
Q285,445 280,450 Q275,455 270,458 Q265,460 260,458 Q255,455 252,450 Q248,445 245,440 
Q240,430 238,420 Q236,410 235,400 Q234,390 232,380 Q230,370 228,360 Q226,350 225,340 
Q224,330 224,320 Q225,310 228,300 Z
M420,160 Q440,155 460,158 Q480,160 500,165 Q520,170 540,168 Q560,165 580,168 
Q600,170 620,175 Q640,172 660,175 Q680,178 700,180 Q720,185 730,190 Q740,195 745,200 
Q748,210 745,220 Q742,230 738,240 Q735,250 730,255 Q725,260 720,262 Q715,265 710,260 
Q705,255 700,258 Q690,260 680,258 Q670,255 660,258 Q650,260 640,258 Q630,255 620,258 
Q610,260 600,255 Q590,250 580,252 Q570,255 560,250 Q550,248 540,250 Q530,248 520,245 
Q510,242 500,240 Q490,238 480,240 Q470,238 460,235 Q450,232 440,230 Q430,228 420,225 
Q415,222 412,218 Q410,215 412,210 Q415,205 418,200 Q420,195 422,190 Q424,185 425,180 
Q423,170 420,165 Z
M500,300 Q520,295 540,300 Q560,305 570,310 Q575,320 578,330 Q580,340 578,350 
Q575,360 572,370 Q568,380 565,390 Q560,400 555,410 Q550,420 545,430 Q540,435 535,440 
Q530,442 525,440 Q520,438 515,435 Q510,430 505,420 Q500,410 498,400 Q496,390 495,380 
Q494,370 495,360 Q496,350 498,340 Q500,330 502,320 Q503,310 502,305 Z
M680,300 Q700,295 720,300 Q740,310 750,320 Q755,330 758,340 Q760,350 758,360 
Q755,370 750,375 Q745,380 740,382 Q730,380 720,375 Q710,370 705,360 Q700,350 698,340 
Q696,330 695,320 Q694,310 692,305 Q690,300 685,298 Z`;

export function WorldMap() {
  return (
    <div className="relative w-full max-w-5xl mx-auto">
      <svg viewBox="100 130 700 370" className="w-full" style={{ filter: "drop-shadow(0 0 40px rgba(var(--gold-rgb, 200,170,80), 0.08))" }}>
        <defs>
          <radialGradient id="brazilGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--gold)" stopOpacity="0.4" />
            <stop offset="60%" stopColor="var(--gold)" stopOpacity="0.1" />
            <stop offset="100%" stopColor="var(--gold)" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="countryGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.6" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
          </radialGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Continents */}
        <path
          d={worldPath}
          fill="currentColor"
          opacity="0.06"
          stroke="currentColor"
          strokeWidth="0.5"
          strokeOpacity="0.15"
        />

        {/* Connection lines from Brazil to each country */}
        {countries.map((c, i) => (
          <motion.line
            key={c.name}
            x1={brazil.x}
            y1={brazil.y}
            x2={c.x}
            y2={c.y}
            stroke="var(--gold)"
            strokeWidth="0.8"
            strokeDasharray="4 3"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.35 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3 + i * 0.15, ease: "easeOut" }}
          />
        ))}

        {/* Brazil hub */}
        <circle cx={brazil.x} cy={brazil.y} r="30" fill="url(#brazilGlow)" />
        <motion.circle
          cx={brazil.x}
          cy={brazil.y}
          r="6"
          fill="var(--gold)"
          opacity="0.9"
          filter="url(#glow)"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />
        <motion.circle
          cx={brazil.x}
          cy={brazil.y}
          r="12"
          fill="none"
          stroke="var(--gold)"
          strokeWidth="0.5"
          opacity="0.3"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        />
        <text
          x={brazil.x}
          y={brazil.y - 18}
          textAnchor="middle"
          fontSize="10"
          fontWeight="600"
          fill="var(--gold)"
          fontFamily="var(--font-serif)"
          letterSpacing="0.05em"
        >
          BRASIL
        </text>

        {/* Country points with pulse animation */}
        {countries.map((c, i) => (
          <g key={c.name}>
            <circle cx={c.x} cy={c.y} r="14" fill="url(#countryGlow)" />
            <motion.circle
              cx={c.x}
              cy={c.y}
              r="4"
              fill="currentColor"
              opacity="0.8"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.12 }}
            />
            {/* Pulse ring */}
            <motion.circle
              cx={c.x}
              cy={c.y}
              r="4"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.6"
              initial={{ scale: 1, opacity: 0.5 }}
              animate={{ scale: [1, 2.5], opacity: [0.5, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4, ease: "easeOut" }}
            />
            <text
              x={c.x}
              y={c.y - 10}
              textAnchor="middle"
              fontSize="8"
              fill="currentColor"
              opacity="0.7"
              fontFamily="var(--font-sans)"
              fontWeight="500"
              letterSpacing="0.04em"
            >
              {c.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
