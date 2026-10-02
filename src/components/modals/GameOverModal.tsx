import { Mascot } from '../../assets/art/Mascot';
import { Button } from '../ui/Button';
import { Modal } from './Modal';
import styles from './SimpleModal.module.css';

interface GameOverModalProps {
  moves: number;
  pairsFound: number;
  totalPairs: number;
  onTryAgain: () => void;
  onHome: () => void;
}

export function GameOverModal({ moves, pairsFound, totalPairs, onTryAgain, onHome }: GameOverModalProps) {
  return (
    <Modal label="Time's up">
      <div className={styles.mascot}>
        <Mascot size={110} expression="wink" />
      </div>
      <h2 className={styles.title}>Time&apos;s up!</h2>
      <p className={styles.text}>
        You found {pairsFound} of {totalPairs} pairs in {moves} moves. So close, try again!
      </p>
      <div className={styles.actions}>
        <Button block onClick={onTryAgain}>
          Try Again
        </Button>
        <Button variant="link" onClick={onHome}>
          Back to Home
        </Button>
      </div>
    </Modal>
  );
}
