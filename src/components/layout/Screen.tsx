import type { ReactNode } from 'react';
import { cx } from '../../utils/cx';
import styles from './Screen.module.css';

interface ScreenProps {
  className?: string;
  children: ReactNode;
}

/** Full-size screen container that fades in on mount. */
export function Screen({ className, children }: ScreenProps) {
  return <main className={cx(styles.screen, className)}>{children}</main>;
}
