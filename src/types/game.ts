export type CardFaceId =
  | 'coin'
  | 'cart'
  | 'bag'
  | 'parcel'
  | 'voucher'
  | 'flashSale'
  | 'truck'
  | 'gift'
  | 'heart'
  | 'star'
  | 'storefront'
  | 'priceTag'
  | 'wallet';

export interface CardModel {
  id: string;
  pairId: CardFaceId;
  isFlipped: boolean;
  isMatched: boolean;
}

export type GameStatus = 'idle' | 'playing' | 'paused' | 'won' | 'lost';

export type LevelId = 'easy' | 'normal' | 'hard' | 'expert';

export interface Level {
  id: LevelId;
  name: string;
  /** Grid label shown on the chips, e.g. "4×4". */
  label: string;
  cols: number;
  rows: number;
  /** Countdown in seconds. */
  timeLimit: number;
}

export interface GameState {
  level: Level;
  status: GameStatus;
  cards: CardModel[];
  /** Ids of cards currently face-up and awaiting resolution (max 2). */
  openIds: string[];
  moves: number;
  timeLeft: number;
  score: number;
}
