import type { ReactNode } from 'react';
import { CoinIcon, GiftIcon } from '../../assets/icons/CardIcons';
import { CheckIcon } from '../../assets/icons/UiIcons';
import { STREAK_DAYS } from '../../constants/rewards';
import { cx } from '../../utils/cx';
import styles from './StreakRow.module.css';

/** Daily streak: days up to `completed` get a check, Day 5 is the gift. */
export function StreakRow({ completed }: { completed: number }) {
  const days = Array.from({ length: STREAK_DAYS }, (_, i) => i + 1);

  return (
    <ul className={styles.row}>
      {days.map((day) => {
        const done = day <= completed;
        let icon: ReactNode;
        if (done) {
          icon = <CheckIcon size={30} />;
        } else if (day === STREAK_DAYS) {
          icon = <GiftIcon size={34} />;
        } else {
          icon = <CoinIcon size={34} />;
        }
        return (
          <li key={day} className={styles.day}>
            <span className={cx(styles.badge, done && styles.done, day === completed && styles.current)}>
              {icon}
            </span>
            <span className={styles.label}>Day {day}</span>
          </li>
        );
      })}
    </ul>
  );
}
