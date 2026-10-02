import { CARD_LABELS } from '../../constants/cards';
import { CARD_ICONS } from '../../assets/icons/CardIcons';
import { BagGlyph } from '../../assets/art/BagGlyph';
import type { CardModel } from '../../types/game';
import { cx } from '../../utils/cx';
import styles from './Card.module.css';

interface CardProps {
  card: CardModel;
  index: number;
  mismatch: boolean;
  onFlip: (id: string) => void;
}

export function Card({ card, index, mismatch, onFlip }: CardProps) {
  const Icon = CARD_ICONS[card.pairId];
  const label = card.isFlipped || card.isMatched
    ? `${CARD_LABELS[card.pairId]}${card.isMatched ? ', matched' : ''}`
    : `Card ${index + 1}, face down`;

  return (
    <button
      type="button"
      className={cx(
        styles.card,
        (card.isFlipped || card.isMatched) && styles.flipped,
      )}
      onClick={() => onFlip(card.id)}
      disabled={card.isMatched}
      aria-label={label}
    >
      <span className={cx(styles.scene, card.isMatched && styles.matched, mismatch && styles.mismatch)}>
      <span className={styles.inner} data-keep-motion>
        <span className={cx(styles.face, styles.back)}>
          <BagGlyph size="52%" bag="#FFFFFF" letter="#EE4D2D" />
        </span>
        <span className={cx(styles.face, styles.front)}>
          <span className={styles.icon}>
            <Icon />
          </span>
        </span>
      </span>
      </span>
    </button>
  );
}
