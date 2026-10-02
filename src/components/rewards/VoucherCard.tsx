import { BagGlyph } from '../../assets/art/BagGlyph';
import { ClockIcon } from '../../assets/icons/UiIcons';
import { cx } from '../../utils/cx';
import styles from './VoucherCard.module.css';

interface VoucherCardProps {
  variant: 'compact' | 'full';
  amount: string;
  title: string;
  /** Caption above the amount, e.g. "You earned a" (compact). */
  label?: string;
  validUntil?: string;
}

export function VoucherCard({ variant, amount, title, label, validUntil }: VoucherCardProps) {
  return (
    <div className={cx(styles.card, styles[variant])}>
      <div className={styles.stub}>
        <BagGlyph size={variant === 'full' ? 52 : 44} />
      </div>
      <div className={styles.body}>
        {label && <span className={styles.label}>{label}</span>}
        <span className={styles.amount}>{amount}</span>
        <span className={styles.title}>{title}</span>
        {validUntil && (
          <span className={styles.valid}>
            <ClockIcon size={14} /> Valid until {validUntil}
          </span>
        )}
      </div>
    </div>
  );
}
