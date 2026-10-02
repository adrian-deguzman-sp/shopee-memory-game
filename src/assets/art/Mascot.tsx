interface MascotProps {
  size?: number;
  expression?: 'wink' | 'happy';
  className?: string;
}

/**
 * PLACEHOLDER mascot: an original, simplified shopping-bag character.
 * Replace with the real mascot artwork when available.
 */
export function Mascot({ size = 200, expression = 'wink', className }: MascotProps) {
  return (
    <svg
      viewBox="0 0 200 220"
      width={size}
      height={(size * 220) / 200}
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="mascotBody" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FF8A5B" />
          <stop offset="1" stopColor="#EE4D2D" />
        </linearGradient>
      </defs>
      <ellipse cx="100" cy="212" rx="62" ry="7" fill="rgba(0,0,0,0.15)" />
      {/* handle */}
      <path d="M70 68V48a30 30 0 0 1 60 0v20" fill="none" stroke="#C93A1C" strokeWidth="12" strokeLinecap="round" />
      {/* arms */}
      <ellipse cx="24" cy="132" rx="15" ry="19" fill="#EE4D2D" transform="rotate(18 24 132)" />
      <ellipse cx="176" cy="116" rx="15" ry="19" fill="#EE4D2D" transform="rotate(-28 176 116)" />
      {/* body */}
      <rect x="28" y="62" width="144" height="142" rx="38" fill="url(#mascotBody)" />
      {/* face */}
      <rect x="44" y="86" width="112" height="74" rx="36" fill="#FFF4EA" />
      {expression === 'wink' ? (
        <>
          <ellipse cx="78" cy="116" rx="6" ry="8" fill="#3A1A10" />
          <path d="M114 118q9-11 18 0" fill="none" stroke="#3A1A10" strokeWidth="4.5" strokeLinecap="round" />
        </>
      ) : (
        <>
          <path d="M70 120q9-13 18 0" fill="none" stroke="#3A1A10" strokeWidth="4.5" strokeLinecap="round" />
          <path d="M112 120q9-13 18 0" fill="none" stroke="#3A1A10" strokeWidth="4.5" strokeLinecap="round" />
        </>
      )}
      <circle cx="64" cy="138" r="8" fill="#FFB3A0" opacity="0.85" />
      <circle cx="136" cy="138" r="8" fill="#FFB3A0" opacity="0.85" />
      <path d="M86 132q14 20 28 0z" fill="#D8402A" />
      <ellipse cx="100" cy="143" rx="6" ry="3.5" fill="#FF8C7A" />
      {/* S badge */}
      <circle cx="100" cy="182" r="14" fill="#fff" />
      <text
        x="100"
        y="189"
        textAnchor="middle"
        fontSize="20"
        fontWeight="900"
        fill="#EE4D2D"
        fontFamily="Arial, sans-serif"
      >
        S
      </text>
    </svg>
  );
}
