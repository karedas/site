import { useEffect, useRef, useState } from 'react';
import { SKILL_COUNTS } from '@/data/skill-inventory';
import { useReducedMotion } from './use-reduced-motion';

const DURATION = 1100;

/**
 * Skill-matrix legend with counters that ease from 0 to their targets the
 * first time the legend scrolls into view. Static under reduced motion.
 * Targets are derived from the shared skill inventory, so the legend always
 * matches the chips rendered in the full-inventory panel.
 */
export function SkillCounters() {
  const rootRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const [done, setDone] = useState(false);
  const [n, setN] = useState({ expert: 0, solid: 0, familiar: 0 });

  useEffect(() => {
    if (reduceMotion || done) return;
    const root = rootRef.current;
    if (!root) return;

    let raf = 0;
    const run = () => {
      const t0 = performance.now();
      const step = (now: number) => {
        const p = Math.min(1, (now - t0) / DURATION);
        const e = 1 - (1 - p) ** 3;
        setN({
          expert: Math.round(SKILL_COUNTS.expert * e),
          solid: Math.round(SKILL_COUNTS.solid * e),
          familiar: Math.round(SKILL_COUNTS.familiar * e),
        });
        if (p < 1) raf = requestAnimationFrame(step);
        else setDone(true);
      };
      raf = requestAnimationFrame(step);
    };

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          io.disconnect();
          run();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(root);

    // Failsafe: if the observer never fires, settle on the final values.
    const failsafe = setTimeout(() => {
      if (!raf) {
        setN({ ...SKILL_COUNTS });
        setDone(true);
      }
    }, 1400);

    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
      clearTimeout(failsafe);
    };
  }, [reduceMotion, done]);

  const shown = reduceMotion || done ? SKILL_COUNTS : n;

  return (
    <div ref={rootRef} className="skill-legend" data-testid="skill-legend">
      <span>
        <span className="sq expert">■</span> {shown.expert} EXPERT
      </span>
      <span>
        <span className="sq solid">■</span> {shown.solid} SOLID
      </span>
      <span>
        <span className="sq familiar">■</span> {shown.familiar} FAMILIAR
      </span>
      <span className="meta">SELF-ASSESSED · DISTILLED FROM 179 ITEMS · 2026</span>
    </div>
  );
}

export default SkillCounters;
