import type { ReactNode } from 'react';
import { BackIcon, HelpIcon } from '../../assets/icons/UiIcons';
import { cx } from '../../utils/cx';
import styles from './ScreenHeader.module.css';

interface ScreenHeaderProps {
  tone: 'light' | 'dark';
  /** Centered content: a title string or a logo. */
  center?: ReactNode;
  onBack?: () => void;
  onHelp?: () => void;
}

export function ScreenHeader({ tone, center, onBack, onHelp }: ScreenHeaderProps) {
  return (
    <header className={cx(styles.header, tone === 'light' ? styles.light : styles.dark)}>
      <button type="button" className={styles.btn} onClick={onBack} disabled={!onBack} aria-label="Back">
        <BackIcon size={26} />
      </button>
      <div className={styles.center}>{center}</div>
      {onHelp ? (
        <button type="button" className={cx(styles.btn, styles.help)} onClick={onHelp} aria-label="How to play">
          <HelpIcon size={tone === 'light' ? 30 : 28} />
        </button>
      ) : (
        <span className={styles.btn} />
      )}
    </header>
  );
}
