import { useEffect, useRef } from 'react';

/** Calls `onTick` every second while `running` is true. */
export function useTimer(running: boolean, onTick: () => void): void {
  const tickRef = useRef(onTick);

  useEffect(() => {
    tickRef.current = onTick;
  });

  useEffect(() => {
    if (!running) return undefined;
    const id = window.setInterval(() => tickRef.current(), 1000);
    return () => window.clearInterval(id);
  }, [running]);
}
