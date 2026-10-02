import { useEffect, useRef, useState } from 'react';
import { BgDecor } from '../../assets/art/BgDecor';
import { ClockIcon, MovesIcon } from '../../assets/icons/UiIcons';
import { Board } from '../../components/game/Board';
import { HudPill } from '../../components/game/HudPill';
import { Screen } from '../../components/layout/Screen';
import { ScreenHeader } from '../../components/layout/ScreenHeader';
import { GameOverModal } from '../../components/modals/GameOverModal';
import { HelpModal } from '../../components/modals/HelpModal';
import { PauseModal } from '../../components/modals/PauseModal';
import { WinModal } from '../../components/modals/WinModal';
import { useApp } from '../../context/AppContext';
import { useMemoryGame } from '../../hooks/useMemoryGame';
import { formatTime } from '../../utils/format';
import { playSound } from '../../utils/sound';
import styles from './GameScreen.module.css';

export function GameScreen() {
  const { navigate, level, muted, bestScore, recordScore, claimReward } = useApp();
  const { state, flip, pause, resume, restart } = useMemoryGame(level);
  const [showHelp, setShowHelp] = useState(false);

  const matchedCount = state.cards.filter((c) => c.isMatched).length;
  const prevMatched = useRef(0);

  // Sound + best-score side effects.
  useEffect(() => {
    if (matchedCount > prevMatched.current && state.status === 'playing') {
      playSound('match', muted);
    }
    prevMatched.current = matchedCount;
  }, [matchedCount, state.status, muted]);

  useEffect(() => {
    if (state.status === 'won') {
      playSound('win', muted);
      recordScore(state.score);
    } else if (state.status === 'lost') {
      playSound('lose', muted);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.status]);

  const handleFlip = (id: string) => {
    if (state.status === 'playing') playSound('flip', muted);
    flip(id);
  };

  const openHelp = () => {
    pause();
    setShowHelp(true);
  };

  const mismatchIds = state.openIds.length === 2 ? state.openIds : [];
  const totalPairs = state.cards.length / 2;

  return (
    <Screen className={styles.game}>
      <BgDecor />
      <ScreenHeader tone="dark" center="Shopee Memory Game" onBack={pause} onHelp={openHelp} />

      <div className={styles.hud}>
        <HudPill
          icon={<ClockIcon size={34} />}
          value={formatTime(state.timeLeft)}
          urgent={state.timeLeft <= 10 && state.status === 'playing'}
        />
        <HudPill icon={<MovesIcon size={30} />} label="Moves" value={state.moves} iconAfter />
      </div>

      <div className={styles.boardWrap}>
        <Board cards={state.cards} level={level} mismatchIds={mismatchIds} onFlip={handleFlip} />
      </div>

      {state.status === 'won' && (
        <WinModal
          moves={state.moves}
          timeLeft={state.timeLeft}
          score={state.score}
          best={Math.max(bestScore, state.score)}
          onClaim={claimReward}
          onPlayAgain={restart}
        />
      )}
      {state.status === 'lost' && (
        <GameOverModal
          moves={state.moves}
          pairsFound={matchedCount / 2}
          totalPairs={totalPairs}
          onTryAgain={restart}
          onHome={() => navigate('home')}
        />
      )}
      {state.status === 'paused' && !showHelp && (
        <PauseModal onResume={resume} onRestart={restart} onQuit={() => navigate('home')} />
      )}
      {showHelp && <HelpModal onClose={() => setShowHelp(false)} />}
    </Screen>
  );
}
