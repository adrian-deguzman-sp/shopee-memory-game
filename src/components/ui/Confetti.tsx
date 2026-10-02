import type { CSSProperties } from 'react';
import styles from './Confetti.module.css';

const COLORS = ['#ffc83d', '#ff6a3d', '#ff8fb1', '#5ec8ff', '#7be495'] as const;
const PIECES = Array.from({ length: 30 }, (_, i) => i);

/** Pure-CSS falling confetti (deterministic positions, no randomness in render). */
export function Confetti() {
  return (
    <div className={styles.confetti} aria-hidden="true">
      {PIECES.map((i) => {
        const style: CSSProperties = {
          left: `${(i * 37) % 100}%`,
          background: COLORS[i % COLORS.length],
          animationDelay: `${((i * 13) % 15) / 10}s`,
          animationDuration: `${2.4 + (i % 4) * 0.4}s`,
          transform: `rotate(${(i * 47) % 360}deg)`,
        };
        return <span key={i} className={styles.piece} style={style} />;
      })}
    </div>
  );
}
