import {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
  type ReactNode,
} from 'react';
import { DEFAULT_LEVEL } from '../constants/levels';
import { STREAK_DAYS } from '../constants/rewards';
import { useLocalStorage } from '../hooks/useLocalStorage';
import type { Level } from '../types/game';
import type { Screen } from '../types/screen';

interface AppContextValue {
  screen: Screen;
  navigate: (screen: Screen) => void;
  level: Level;
  /** Number of completed daily-streak days (0..5). */
  streak: number;
  claimReward: () => void;
  bestScore: number;
  recordScore: (score: number) => void;
  muted: boolean;
  toggleMuted: () => void;
  toast: string | null;
  showToast: (message: string) => void;
}

const AppContext = createContext<AppContextValue | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [screen, setScreen] = useState<Screen>('home');
  const [streak, setStreak] = useLocalStorage<number>('memgame.streak', 2);
  const [bestScore, setBestScore] = useLocalStorage<number>('memgame.best', 0);
  const [muted, setMuted] = useLocalStorage<boolean>('memgame.muted', true);
  const [toast, setToast] = useState<string | null>(null);
  const toastTimer = useRef<number | undefined>(undefined);

  const showToast = useCallback((message: string) => {
    setToast(message);
    window.clearTimeout(toastTimer.current);
    toastTimer.current = window.setTimeout(() => setToast(null), 2200);
  }, []);

  const claimReward = () => {
    setStreak(streak >= STREAK_DAYS ? 1 : streak + 1);
    setScreen('rewards');
  };

  const recordScore = (score: number) => {
    if (score > bestScore) setBestScore(score);
  };

  const value: AppContextValue = {
    screen,
    navigate: setScreen,
    level: DEFAULT_LEVEL,
    streak,
    claimReward,
    bestScore,
    recordScore,
    muted,
    toggleMuted: () => setMuted(!muted),
    toast,
    showToast,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp(): AppContextValue {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error('useApp must be used inside <AppProvider>');
  }
  return ctx;
}
