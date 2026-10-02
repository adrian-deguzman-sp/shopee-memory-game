import type { Level } from '../types/game';

/** The game uses a single 4×4 board (8 pairs, 60s countdown). */
export const DEFAULT_LEVEL: Level = {
  id: 'normal',
  name: 'Normal',
  label: '4×4',
  cols: 4,
  rows: 4,
  timeLimit: 60,
};
