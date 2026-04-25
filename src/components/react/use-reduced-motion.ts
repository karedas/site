import { useEffect, useState } from 'react';

/**
 * Tracks the user's `prefers-reduced-motion` preference.
 * Defaults to `false` on first render so SSR output matches the typical
 * client default; the effect updates the value once the component mounts.
 */
export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  return reduced;
}
