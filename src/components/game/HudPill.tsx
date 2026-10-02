import type { ReactNode } from 'react';
import { cx } from '../../utils/cx';
import styles from './HudPill.module.css';

interface HudPillProps {
  icon: ReactNode;
  value: string | number;
  /** Small caption above the value (used by the Moves pill). */
  label?: string;
  iconAfter?: boolean;
  urgent?: boolean;
}

export function HudPill({ icon, value, label, iconAfter = false, urgent = false }: HudPillProps) {
  return (
    <div className={cx(styles.pill, iconAfter && styles.reverse, urgent && styles.urgent)}>
      <span className={styles.icon}>{icon}</span>
      <span className={styles.text}>
        {label && <span className={styles.label}>{label}</span>}
        <span className={styles.value}>{value}</span>
      </span>
    </div>
  );
}
