import { Button } from '../ui/Button';
import { Modal } from './Modal';
import styles from './SimpleModal.module.css';

interface PauseModalProps {
  onResume: () => void;
  onRestart: () => void;
  onQuit: () => void;
}

export function PauseModal({ onResume, onRestart, onQuit }: PauseModalProps) {
  return (
    <Modal label="Game paused">
      <h2 className={styles.title}>Paused</h2>
      <p className={styles.text}>The timer is stopped. Take your time!</p>
      <div className={styles.actions}>
        <Button block onClick={onResume}>
          Resume
        </Button>
        <Button block variant="secondary" onClick={onRestart}>
          Restart
        </Button>
        <Button variant="link" onClick={onQuit}>
          Quit to Home
        </Button>
      </div>
    </Modal>
  );
}
