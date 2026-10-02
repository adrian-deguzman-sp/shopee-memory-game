import type { CSSProperties } from 'react';
import { PriceTagIcon } from '../icons/CardIcons';
import { SparkleIcon } from '../icons/UiIcons';
import { BagGlyph } from './BagGlyph';

const layer: CSSProperties = {
  position: 'absolute',
  inset: 0,
  overflow: 'hidden',
  pointerEvents: 'none',
  zIndex: 0,
};

interface Item {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  size: number;
  rotate: number;
}

const SPARKLES: readonly Item[] = [
  { top: '3%', left: '52%', size: 14, rotate: 0 },
  { top: '8%', right: '8%', size: 22, rotate: 0 },
  { top: '26%', left: '4%', size: 18, rotate: 0 },
  { bottom: '30%', right: '6%', size: 22, rotate: 0 },
  { bottom: '8%', left: '40%', size: 26, rotate: 0 },
  { bottom: '36%', left: '8%', size: 14, rotate: 0 },
];

/** Faded decorative shapes for the gameplay background. */
export function BgDecor() {
  return (
    <div style={layer} aria-hidden="true">
      {SPARKLES.map((s, i) => (
        <span
          key={i}
          style={{
            position: 'absolute',
            top: s.top,
            bottom: s.bottom,
            left: s.left,
            right: s.right,
            color: '#FFC9A6',
            opacity: 0.7,
          }}
        >
          <SparkleIcon size={s.size} />
        </span>
      ))}
      <span style={{ position: 'absolute', bottom: '3%', left: '4%', opacity: 0.22, transform: 'rotate(-10deg)' }}>
        <BagGlyph size={96} bag="#F4A57F" letter="#FDF0E6" />
      </span>
      <span style={{ position: 'absolute', bottom: '5%', right: '4%', opacity: 0.2, transform: 'rotate(12deg)' }}>
        <BagGlyph size={84} bag="#F4A57F" letter="#FDF0E6" />
      </span>
      <span style={{ position: 'absolute', bottom: '9%', left: '34%', opacity: 0.18, transform: 'rotate(-14deg)' }}>
        <PriceTagIcon size={76} />
      </span>
    </div>
  );
}
