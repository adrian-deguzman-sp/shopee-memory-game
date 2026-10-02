export type SoundName = 'flip' | 'match' | 'win' | 'lose';

/**
 * PLACEHOLDER sounds: tiny synthesized beeps (no audio files needed).
 * Replace `playSound` with real <audio> assets later.
 */
const NOTES: Record<SoundName, readonly number[]> = {
  flip: [520],
  match: [660, 880],
  win: [523, 659, 784, 1046],
  lose: [330, 247],
};

let audioContext: AudioContext | null = null;

export function playSound(name: SoundName, muted: boolean): void {
  if (muted) return;
  try {
    audioContext = audioContext ?? new AudioContext();
    const ctx = audioContext;
    if (ctx.state === 'suspended') {
      void ctx.resume();
    }
    NOTES[name].forEach((frequency, index) => {
      const start = ctx.currentTime + index * 0.11;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.value = frequency;
      gain.gain.setValueAtTime(0.0001, start);
      gain.gain.exponentialRampToValueAtTime(0.12, start + 0.01);
      gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.14);
      osc.connect(gain).connect(ctx.destination);
      osc.start(start);
      osc.stop(start + 0.16);
    });
  } catch {
    /* audio unavailable: ignore */
  }
}
