import type { ReactNode } from 'react';
import { cx } from '../../utils/cx';
import styles from './PhoneFrame.module.css';

interface PhoneFrameProps {
  /** light = white status bar (over orange), dark = dark status bar. */
  tone: 'light' | 'dark';
  children: ReactNode;
}

/** Centered 375x812 phone container on desktop; full-bleed on small screens. */
export function PhoneFrame({ tone, children }: PhoneFrameProps) {
  return (
    <div className={cx(styles.frame, tone === 'light' ? styles.light : styles.dark)}>
      <div className={styles.status} aria-hidden="true">
        <span>9:41</span>
        <span className={styles.icons}>
          <svg width="18" height="12" viewBox="0 0 18 12" fill="currentColor">
            <rect x="0" y="8" width="3" height="4" rx="1" />
            <rect x="5" y="5" width="3" height="7" rx="1" />
            <rect x="10" y="2.5" width="3" height="9.5" rx="1" />
            <rect x="15" y="0" width="3" height="12" rx="1" />
          </svg>
          <svg width="26" height="12" viewBox="0 0 26 12" fill="none" stroke="currentColor">
            <rect x="0.5" y="0.5" width="22" height="11" rx="3" opacity="0.5" />
            <rect x="2" y="2" width="19" height="8" rx="2" fill="currentColor" stroke="none" />
            <rect x="24" y="4" width="2" height="4" rx="1" fill="currentColor" stroke="none" opacity="0.5" />
          </svg>
        </span>
      </div>
      {children}
      <div className={styles.indicator} aria-hidden="true" />
    </div>
  );
}
