import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from './use-reduced-motion';

const C = {
  amber: '#e8a13a',
  goldHi: '#f5d27a',
  sage: '#7fc88c',
  cyan: '#3fb8d6',
  fgMute: '#b6ae98',
} as const;

interface Moon {
  rx: number;
  /** Defaults to `rx * (1 - TILT)` when omitted (the standard horizontal-tilt orbits). */
  ry?: number;
  /** Degrees CCW around the planet center; 0 = orbit major axis horizontal. */
  rotation?: number;
  period: number;
  phase: number;
  size: number;
  color: string;
  label: string;
  core?: boolean;
}

const MOONS: Moon[] = [
  {
    rx: 244,
    rotation: 26,
    period: 22,
    phase: 0.1,
    size: 11,
    color: C.amber,
    label: 'Tech strategy',
    core: true,
  },
  {
    rx: 331,
    rotation: -24,
    period: 44,
    phase: 0.55,
    size: 7.9,
    color: C.goldHi,
    label: 'Core excellence',
  },
  {
    rx: 431,
    rotation: 38,
    period: 78,
    phase: 0.2,
    size: 7.2,
    color: C.sage,
    label: 'Dev enablement',
  },
  {
    rx: 478,
    rotation: -34,
    period: 130,
    phase: 0.78,
    size: 6.4,
    color: C.cyan,
    label: 'Leadership',
  },
  /** Horizontal track; labels sit above/below the wide path instead of piling on the sides. */
  { rx: 318, rotation: 0, period: 10, phase: 0.4, size: 6.6, color: C.cyan, label: 'AI' },
];

const W = 1150;
const H = 1150;
/**
 * Extra viewBox margin (user units) so orbit extremes + longest labels stay inside the SVG.
 * Larger than needed shrinks the graphic inside the layout box; keep tight but clip-safe.
 */
const VIEW_PAD = 136;
const TILT = 0.62;
const PLANET_R = 142;
const CORE_GLOW_R = 28;

const LABEL_FONT_CORE = 36;
const LABEL_FONT = 30;
const LABEL_TRACKING = '0.08em';

export default function SkillCloud() {
  const reduced = useReducedMotion();
  const ref = useRef<SVGSVGElement | null>(null);
  const [t, setT] = useState(0);

  // Absolute elapsed time since mount; see SolarSystem for the rationale.
  // Accumulating per-frame deltas was producing oscillating "tiny step forward,
  // tiny step back" motion under some scroll/hydration scenarios.
  useEffect(() => {
    if (reduced) return;
    const start = performance.now();
    let raf = 0;
    const tick = () => {
      setT((performance.now() - start) / 1000);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [reduced]);

  const cx = W / 2;
  const cy = H / 2;

  const vbW = W + 2 * VIEW_PAD;
  const vbH = H + 2 * VIEW_PAD;

  return (
    <svg
      ref={ref}
      viewBox={`${-VIEW_PAD} ${-VIEW_PAD} ${vbW} ${vbH}`}
      width="100%"
      style={{
        display: 'block',
        overflow: 'hidden',
        maxWidth: '100%',
        height: 'auto',
        verticalAlign: 'middle',
      }}
      role="img"
      aria-label="Skill cloud: a planet with five orbiting moons labelled Tech strategy, Core excellence, Dev enablement, Leadership, and AI"
    >
      <defs>
        <radialGradient id="planet-fill" cx="0.38" cy="0.34" r="0.78">
          <stop offset="0%" stopColor="#3a4663" />
          <stop offset="55%" stopColor="#1d2440" />
          <stop offset="100%" stopColor="#0c0f20" />
        </radialGradient>
        <radialGradient id="planet-atmo" cx="0.5" cy="0.5" r="0.5">
          <stop offset="60%" stopColor="rgba(127,200,140,0)" />
          <stop offset="92%" stopColor="rgba(127,200,140,0.18)" />
          <stop offset="100%" stopColor="rgba(127,200,140,0)" />
        </radialGradient>
        <filter id="moon-soft" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="8" />
        </filter>
      </defs>

      {MOONS.map((m) => {
        const ry = m.ry ?? m.rx * (1 - TILT);
        const rot = m.rotation ?? 0;
        return (
          <ellipse
            key={`orbit-${m.label}`}
            cx={cx}
            cy={cy}
            rx={m.rx}
            ry={ry}
            fill="none"
            stroke="#3a4258"
            strokeWidth="1.15"
            opacity="0.55"
            transform={`rotate(${rot} ${cx} ${cy})`}
          />
        );
      })}

      {/* Planet body */}
      <circle cx={cx} cy={cy} r={PLANET_R + 6} fill="url(#planet-atmo)" />
      <circle cx={cx} cy={cy} r={PLANET_R} fill="url(#planet-fill)" />
      <ellipse
        cx={cx}
        cy={cy}
        rx={PLANET_R}
        ry={PLANET_R * 0.18}
        fill="none"
        stroke="rgba(232,227,212,0.06)"
        strokeWidth="1.05"
      />
      <path
        d={`M ${cx - PLANET_R * 0.92} ${cy - PLANET_R * 0.18}
            A ${PLANET_R} ${PLANET_R} 0 0 1 ${cx - PLANET_R * 0.18} ${cy - PLANET_R * 0.92}`}
        stroke="rgba(245,210,122,0.18)"
        strokeWidth="1.6"
        fill="none"
      />

      {MOONS.map((m) => {
        const a = (t / m.period + m.phase) * Math.PI * 2;
        const ry = m.ry ?? m.rx * (1 - TILT);
        const localX = m.rx * Math.cos(a);
        const localY = ry * Math.sin(a);
        const rot = ((m.rotation ?? 0) * Math.PI) / 180;
        const cosR = Math.cos(rot);
        const sinR = Math.sin(rot);
        const mx = cx + cosR * localX - sinR * localY;
        const my = cy + sinR * localX + cosR * localY;
        // Parametric "back" of the ellipse vs planet disk (same phase test as pre-rotation).
        const behind = localY < 0 && Math.hypot(mx - cx, my - cy) < PLANET_R;
        return (
          <g
            key={`moon-${m.label}`}
            opacity={behind ? 0.25 : 1}
            style={{ transition: 'opacity 200ms' }}
          >
            {m.core && (
              <circle
                cx={mx}
                cy={my}
                r={CORE_GLOW_R}
                fill={m.color}
                opacity="0.22"
                filter="url(#moon-soft)"
              />
            )}
            <circle cx={mx} cy={my} r={m.size} fill={m.color} />
            <text
              x={mx}
              y={my - m.size - 20}
              textAnchor="middle"
              fontFamily="Montserrat, sans-serif"
              fontWeight={m.core ? 600 : 500}
              fontSize={m.core ? LABEL_FONT_CORE : LABEL_FONT}
              letterSpacing={LABEL_TRACKING}
              fill={m.core ? C.goldHi : C.fgMute}
              style={{ textTransform: 'uppercase' }}
            >
              {m.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
