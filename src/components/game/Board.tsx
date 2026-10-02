import type { CardModel, Level } from '../../types/game';
import { cx } from '../../utils/cx';
import { Card } from './Card';
import styles from './Board.module.css';

interface BoardProps {
  cards: readonly CardModel[];
  level: Level;
  /** Ids of a currently mismatched pair (shake feedback). */
  mismatchIds: readonly string[];
  onFlip: (id: string) => void;
}

export function Board({ cards, level, mismatchIds, onFlip }: BoardProps) {
  return (
    <div
      className={cx(styles.board, level.cols >= 6 && styles.dense)}
      style={{ gridTemplateColumns: `repeat(${level.cols}, minmax(0, 1fr))` }}
    >
      {cards.map((card, index) => (
        <Card
          key={card.id}
          card={card}
          index={index}
          mismatch={mismatchIds.includes(card.id)}
          onFlip={onFlip}
        />
      ))}
    </div>
  );
}
