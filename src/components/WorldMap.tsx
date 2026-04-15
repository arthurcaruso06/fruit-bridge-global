export function WorldMap() {
  const brazil = { x: 30, y: 62 };
  const regions = [
    { name: 'USA', x: 18, y: 32 },
    { name: 'Chile', x: 24, y: 78 },
    { name: 'Argentina', x: 28, y: 76 },
    { name: 'Spain', x: 46, y: 34 },
    { name: 'Italy', x: 51, y: 33 },
    { name: 'South Africa', x: 54, y: 78 },
    { name: 'China', x: 78, y: 36 },
  ];

  return (
    <svg viewBox="0 0 100 100" className="w-full max-w-4xl mx-auto opacity-80" aria-hidden="true">
      <defs>
        <radialGradient id="glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.15" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </radialGradient>
      </defs>

      {regions.map((r) => (
        <line
          key={r.name}
          x1={brazil.x}
          y1={brazil.y}
          x2={r.x}
          y2={r.y}
          stroke="currentColor"
          strokeWidth="0.15"
          strokeDasharray="1 0.8"
          opacity="0.3"
        />
      ))}

      <circle cx={brazil.x} cy={brazil.y} r="6" fill="url(#glow)" />
      <circle cx={brazil.x} cy={brazil.y} r="1.8" fill="var(--gold)" opacity="0.9" />
      <text x={brazil.x} y={brazil.y - 4} textAnchor="middle" fontSize="2.2" fontWeight="600" fill="var(--gold)" fontFamily="var(--font-sans)">
        Brasil
      </text>

      {regions.map((r) => (
        <g key={r.name}>
          <circle cx={r.x} cy={r.y} r="0.8" fill="currentColor" opacity="0.6" />
          <text
            x={r.x}
            y={r.y - 2.5}
            textAnchor="middle"
            fontSize="1.8"
            fill="currentColor"
            opacity="0.6"
            fontFamily="var(--font-sans)"
            fontWeight="500"
          >
            {r.name}
          </text>
        </g>
      ))}
    </svg>
  );
}
