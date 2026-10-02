import type { ReactNode } from 'react';
import { cx } from '../../utils/cx';
import styles from './Ribbon.module.css';

interface RibbonProps {
  tone: 'yellow' | 'red';
  tilt?: boolean;
  className?: string;
  children: ReactNode;
}

/** Banner with folded tails on both sides. */
export function Ribbon({ tone, tilt = false, className, children }: RibbonProps) {
  return (
    <div className={cx(styles.ribbon, styles[tone], tilt && styles.tilt, className)}>
      <span className={styles.text}>{children}</span>
    </div>
  );
}
