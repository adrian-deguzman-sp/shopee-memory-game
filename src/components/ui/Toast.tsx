import styles from './Toast.module.css';

export function Toast({ message }: { message: string | null }) {
  if (!message) return null;
  return (
    <div key={message} className={styles.toast} role="status">
      {message}
    </div>
  );
}
