import type { ReactNode } from 'react';
import { cx } from '../../utils/cx';
import styles from './Button.module.css';

interface ButtonProps {
  variant?: 'primary' | 'play' | 'secondary' | 'link';
  block?: boolean;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
}

export function Button({ variant = 'primary', block = false, onClick, children, className }: ButtonProps) {
  return (
    <button
      type="button"
      className={cx(styles.btn, styles[variant], block && styles.block, className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
