import { useCallback, useEffect, useReducer } from 'react';
import type { CardModel, GameState, Level } from '../types/game';
import { buildDeck } from '../utils/buildDeck';
import { useTimer } from './useTimer';

/** How long a mismatched pair stays face-up before flipping back. */
const MISMATCH_DELAY_MS = 800;

type Action =
  | { type: 'START'; level: Level }
  | { type: 'FLIP'; id: string }
  | { type: 'RESOLVE' }
  | { type: 'PAUSE' }
  | { type: 'RESUME' }
  | { type: 'TICK' };

function createState(level: Level): GameState {
  return {
    level,
    status: 'playing',
    cards: buildDeck(level),
    openIds: [],
    moves: 0,
    timeLeft: level.timeLimit,
    score: 0,
  };
}

function calcScore(cards: readonly CardModel[], moves: number, timeLeft: number): number {
  const pairs = cards.length / 2;
  const extraMoves = Math.max(0, moves - pairs);
  return Math.max(0, pairs * 100 + timeLeft * 5 - extraMoves * 5);
}

function reducer(state: GameState, action: Action): GameState {
  switch (action.type) {
    case 'START':
      return createState(action.level);

    case 'FLIP': {
      if (state.status !== 'playing' || state.openIds.length >= 2) return state;
      const target = state.cards.find((c) => c.id === action.id);
      if (!target || target.isFlipped || target.isMatched) return state;

      let cards = state.cards.map((c) => (c.id === action.id ? { ...c, isFlipped: true } : c));
      const openIds = [...state.openIds, action.id];
      if (openIds.length < 2) return { ...state, cards, openIds };

      // Second card flipped: this counts as one move.
      const moves = state.moves + 1;
      const first = cards.find((c) => c.id === openIds[0]);
      if (first && first.pairId === target.pairId) {
        cards = cards.map((c) => (c.pairId === target.pairId ? { ...c, isMatched: true } : c));
        const next: GameState = { ...state, cards, openIds: [], moves };
        if (cards.every((c) => c.isMatched)) {
          return { ...next, status: 'won', score: calcScore(cards, moves, state.timeLeft) };
        }
        return next;
      }
      // Mismatch: keep both open (input locked) until RESOLVE fires.
      return { ...state, cards, openIds, moves };
    }

    case 'RESOLVE': {
      if (state.openIds.length === 0) return state;
      const cards = state.cards.map((c) =>
        state.openIds.includes(c.id) ? { ...c, isFlipped: false } : c,
      );
      return { ...state, cards, openIds: [] };
    }

    case 'PAUSE':
      return state.status === 'playing' ? { ...state, status: 'paused' } : state;

    case 'RESUME':
      return state.status === 'paused' ? { ...state, status: 'playing' } : state;

    case 'TICK': {
      if (state.status !== 'playing') return state;
      const timeLeft = state.timeLeft - 1;
      return timeLeft <= 0 ? { ...state, timeLeft: 0, status: 'lost' } : { ...state, timeLeft };
    }

    default:
      return state;
  }
}

export interface MemoryGameApi {
  state: GameState;
  /** True while a mismatched pair is being shown; clicks are ignored. */
  isLocked: boolean;
  flip: (id: string) => void;
  pause: () => void;
  resume: () => void;
  restart: () => void;
}

export function useMemoryGame(level: Level): MemoryGameApi {
  const [state, dispatch] = useReducer(reducer, level, createState);

  useTimer(state.status === 'playing', () => dispatch({ type: 'TICK' }));

  // Flip a mismatched pair back after a short delay. Pausing clears the timeout.
  useEffect(() => {
    if (state.status !== 'playing' || state.openIds.length < 2) return undefined;
    const id = window.setTimeout(() => dispatch({ type: 'RESOLVE' }), MISMATCH_DELAY_MS);
    return () => window.clearTimeout(id);
  }, [state.status, state.openIds]);

  const flip = useCallback((id: string) => dispatch({ type: 'FLIP', id }), []);
  const pause = useCallback(() => dispatch({ type: 'PAUSE' }), []);
  const resume = useCallback(() => dispatch({ type: 'RESUME' }), []);
  const restart = useCallback(() => dispatch({ type: 'START', level: state.level }), [state.level]);

  return { state, isLocked: state.openIds.length >= 2, flip, pause, resume, restart };
}
