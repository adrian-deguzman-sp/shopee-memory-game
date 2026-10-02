import { CARD_FACE_IDS } from '../constants/cards';
import type { CardModel, Level } from '../types/game';
import { shuffle } from './shuffle';

/** Builds a shuffled deck with `cols * rows / 2` distinct pairs. */
export function buildDeck(level: Level): CardModel[] {
  const pairCount = Math.floor((level.cols * level.rows) / 2);
  const faces = shuffle(CARD_FACE_IDS).slice(0, pairCount);
  const cards = faces.flatMap((pairId): CardModel[] => [
    { id: `${pairId}-a`, pairId, isFlipped: false, isMatched: false },
    { id: `${pairId}-b`, pairId, isFlipped: false, isMatched: false },
  ]);
  return shuffle(cards);
}
