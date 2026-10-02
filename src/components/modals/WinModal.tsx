import { Mascot } from '../../assets/art/Mascot';
import { REWARD } from '../../constants/rewards';
import { formatTime } from '../../utils/format';
import { Button } from '../ui/Button';
import { Confetti } from '../ui/Confetti';
import { Ribbon } from '../ui/Ribbon';
import { VoucherCard } from '../rewards/VoucherCard';
import { Modal } from './Modal';
import styles from './WinModal.module.css';

interface WinModalProps {
  moves: number;
  timeLeft: number;
  score: number;
  best: number;
  onClaim: () => void;
  onPlayAgain: () => void;
}

export function WinModal({ moves, timeLeft, score, best, onClaim, onPlayAgain }: WinModalProps) {
  return (
    <Modal label="Congratulations" overlay={<Confetti />} panelClassName={styles.panel}>
      <div className={styles.mascot}>
        <Mascot size={170} expression="happy" />
      </div>
      <Ribbon tone="red" className={styles.ribbon}>
        Congratulations!
      </Ribbon>
      <p className={styles.message}>
        You completed the
        <br />
        Memory Game!
      </p>
      <VoucherCard variant="compact" label="You earned a" amount={REWARD.amount} title={REWARD.title} />
      <p className={styles.stats}>
        Moves {moves} · {formatTime(timeLeft)} left · Score {score} · Best {best}
      </p>
      <Button block onClick={onClaim}>
        Claim Now
      </Button>
      <Button variant="link" onClick={onPlayAgain}>
        Play Again
      </Button>
    </Modal>
  );
}
