import { useEffect, useState } from 'react';
import { useReducedMotion } from './useReducedMotion';

type Line = string | (() => string);

const LINES: Line[] = [
  'OBSERVED FROM EARTH',
  'LISTENING ON 1420 MHz',
  () => `RANGE: ${(1.3 + ((Date.now() / 60000) % 0.4)).toFixed(2)} LY`,
  'BEARING: 287°·14′',
];

export default function Telemetry() {
  const reduced = useReducedMotion();
  const [i, setI] = useState(0);
  const [phase, setPhase] = useState<'in' | 'out'>('in');

  useEffect(() => {
    if (reduced) return;
    const id = window.setInterval(() => {
      setPhase('out');
      window.setTimeout(() => {
        setI((x) => (x + 1) % LINES.length);
        setPhase('in');
      }, 280);
    }, 6000);
    return () => window.clearInterval(id);
  }, [reduced]);

  const cur = LINES[i] ?? LINES[0] ?? '';
  const text = typeof cur === 'function' ? cur() : cur;

  return (
    <div
      style={{
        transition: 'opacity 280ms ease, transform 280ms ease',
        opacity: phase === 'in' ? 1 : 0,
        transform: phase === 'in' ? 'translateY(0)' : 'translateY(4px)',
        whiteSpace: 'nowrap',
      }}
    >
      — {text} —
    </div>
  );
}
