interface GiftBoxProps {
  size?: number;
  color?: string;
  ribbon?: string;
  className?: string;
}

/** Decorative gift box with configurable colors. */
export function GiftBox({ size = 64, color = '#8E6BD8', ribbon = '#FFC83D', className }: GiftBoxProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <rect x="10" y="28" width="44" height="30" rx="4" fill={color} />
      <rect x="6" y="20" width="52" height="12" rx="4" fill={color} />
      <rect x="6" y="28" width="52" height="4" fill="rgba(0,0,0,0.15)" />
      <rect x="28" y="20" width="8" height="38" fill={ribbon} />
      <path
        d="M32 20c-4-12-16-10-13-4 2 4 9 4 13 4zM32 20c4-12 16-10 13-4-2 4-9 4-13 4z"
        fill="none"
        stroke={ribbon}
        strokeWidth="4"
        strokeLinejoin="round"
      />
    </svg>
  );
}
