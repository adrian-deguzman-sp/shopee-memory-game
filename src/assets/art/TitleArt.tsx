interface TitleArtProps {
  className?: string;
}

const FONT = "'Baloo 2', 'Arial Black', Impact, sans-serif";

/** "MEMORY GAME" 3D-style title drawn with SVG text (stroke + offset shadow). */
export function TitleArt({ className }: TitleArtProps) {
  return (
    <svg
      viewBox="0 0 300 160"
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
        <text x="152" y="72" fontSize="64" textLength="268" lengthAdjust="spacingAndGlyphs" fill="#5B1F08" stroke="#5B1F08" strokeWidth="16">
          MEMORY
        </text>
        <text x="152" y="144" fontSize="84" textLength="204" lengthAdjust="spacingAndGlyphs" fill="#5B1F08" stroke="#5B1F08" strokeWidth="16">
          GAME
        </text>
        {/* outlines */}
        <text x="150" y="66" fontSize="64" textLength="268" lengthAdjust="spacingAndGlyphs" fill="none" stroke="#7A2E0E" strokeWidth="12">
          MEMORY
        </text>
        <text x="150" y="138" fontSize="84" textLength="204" lengthAdjust="spacingAndGlyphs" fill="none" stroke="#7A2E0E" strokeWidth="12">
          GAME
        </text>
        {/* fills */}
        <text x="150" y="66" fontSize="64" textLength="268" lengthAdjust="spacingAndGlyphs" fill="url(#titleYellow)" stroke="#fff" strokeWidth="1.5">
          MEMORY
        </text>
        <text x="150" y="138" fontSize="84" textLength="204" lengthAdjust="spacingAndGlyphs" fill="url(#titleWhite)">
          GAME
        </text>
      </g>
    </svg>
  );
}
