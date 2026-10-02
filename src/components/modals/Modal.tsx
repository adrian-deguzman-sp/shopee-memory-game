import type { ReactNode } from 'react';
import { cx } from '../../utils/cx';
import styles from './Modal.module.css';

interface ModalProps {
  label: string;
  /** Rendered inside the backdrop, outside the panel (e.g. confetti). */
  overlay?: ReactNode;
  panelClassName?: string;
  children: ReactNode;
}

export function Modal({ label, overlay, panelClassName, children }: ModalProps) {
  return (
    <div className={styles.backdrop}>
      {overlay}
      <div className={cx(styles.panel, panelClassName)} role="dialog" aria-modal="true" aria-label={label}>
        {children}
      </div>
    </div>
  );
}
