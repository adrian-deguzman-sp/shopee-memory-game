import { useApp } from '../../context/AppContext';
import { Button } from '../ui/Button';
import { Modal } from './Modal';
import styles from './SimpleModal.module.css';

export function HelpModal({ onClose }: { onClose: () => void }) {
  const { muted, toggleMuted } = useApp();

  return (
    <Modal label="How to play">
      <h2 className={styles.title}>How to play</h2>
      <ul className={styles.list}>
        <li>Flip two cards at a time.</li>
        <li>Match every pair before the timer runs out.</li>
        <li>Complete the game to win a voucher reward!</li>
      </ul>
      <div className={styles.actions}>
        <Button block variant="secondary" onClick={toggleMuted}>
          Sound: {muted ? 'Off' : 'On'}
        </Button>
        <Button block onClick={onClose}>
          Got it
        </Button>
      </div>
    </Modal>
  );
}
