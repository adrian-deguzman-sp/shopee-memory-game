import { BagGlyph } from './BagGlyph';

/** PLACEHOLDER logo: generic bag glyph + plain text wordmark. Replace with the real brand logo asset. */
export function Logo({ height = 44 }: { height?: number }) {
  return (
    <div
      role="img"
      aria-label="Shopee"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        color: '#fff',
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: height * 0.82,
        lineHeight: 1,
      }}
    >
      <BagGlyph size={height} />
      <span>Shopee</span>
    </div>
  );
}
