interface TitleArtProps {
  className?: string;
}

const FONT = "'Baloo 2', 'Arial Black', Impact, sans-serif";

/** "MEMORY GAME" 3D-style title drawn with SVG text (stroke + offset shadow). */
export function TitleArt({ className }: TitleArtProps) {
  return (
    <svg
      viewBox="0 0 360 160"
      className={className}
      role="img"
      aria-label="Memory Game"
      focusable="false"
    >
      <defs>
        <linearGradient id="titleYellow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FFE680" />
          <stop offset="1" stopColor="#FFB020" />
        </linearGradient>
        <linearGradient id="titleWhite" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FFFFFF" />
          <stop offset="1" stopColor="#FFE9D6" />
        </linearGradient>
      </defs>
      <g fontFamily={FONT} fontWeight="800" textAnchor="middle" strokeLinejoin="round">
        {/* shadows */}
        <text x="180" y="72" fontSize="64" fill="#5B1F08" stroke="#5B1F08" strokeWidth="16">
          MEMORY
        </text>
        <text x="180" y="144" fontSize="84" fill="#5B1F08" stroke="#5B1F08" strokeWidth="16">
          GAME
        </text>
        {/* outline + fill in one element; stroke is painted under the fill so it can't eat the letters */}
        <text x="180" y="66" fontSize="64" fill="url(#titleYellow)" stroke="#7A2E0E" strokeWidth="12" paintOrder="stroke fill">
          MEMORY
        </text>
        <text x="180" y="138" fontSize="84" fill="url(#titleWhite)" stroke="#7A2E0E" strokeWidth="12" paintOrder="stroke fill">
          GAME
        </text>
      </g>
    </svg>
  );
}
