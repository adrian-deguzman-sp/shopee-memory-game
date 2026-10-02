interface BagGlyphProps {
  size?: number | string;
  bag?: string;
  letter?: string;
  className?: string;
}

/** Original simplified shopping-bag mark with an "S" (stand-in for the brand mark). */
export function BagGlyph({ size = 64, bag = '#FFFFFF', letter = '#EE4D2D', className }: BagGlyphProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M22 22v-4a10 10 0 0 1 20 0v4"
        fill="none"
        stroke={bag}
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path d="M12 22h40l3 34a3 3 0 0 1-3 3H12a3 3 0 0 1-3-3z" fill={bag} />
      <text
        x="32"
        y="51"
        textAnchor="middle"
        fontSize="28"
        fontWeight="900"
        fill={letter}
        fontFamily="'Baloo 2', Arial, sans-serif"
      >
        S
      </text>
    </svg>
  );
}
