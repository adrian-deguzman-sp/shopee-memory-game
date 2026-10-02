import type { Level, LevelId } from '../types/game';

export const LEVELS: Record<LevelId, Level> = {
  easy: { id: 'easy', name: 'Easy', label: '4×3', cols: 4, rows: 3, timeLimit: 45 },
  normal: { id: 'normal', name: 'Normal', label: '4×4', cols: 4, rows: 4, timeLimit: 30 },
  hard: { id: 'hard', name: 'Hard', label: '4×5', cols: 4, rows: 5, timeLimit: 80 },
  expert: { id: 'expert', name: 'Expert', label: '6×4', cols: 6, rows: 4, timeLimit: 100 },
};

export const LEVEL_LIST: readonly Level[] = [LEVELS.easy, LEVELS.normal, LEVELS.hard, LEVELS.expert];
