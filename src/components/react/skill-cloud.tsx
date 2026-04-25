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
  /** Degrees, rotation around the planet center. Defaults to 0. */
  rotation?: number;
  period: number;
  phase: number;
  size: number;
  color: string;
  label: string;
  core?: boolean;
}

const MOONS: Moon[] = [
  { rx: 110, period: 22, phase: 0.1, size: 5, color: C.amber, label: 'Architecture', core: true },
  { rx: 150, period: 44, phase: 0.55, size: 3.6, color: C.goldHi, label: 'Engineering' },
  { rx: 195, period: 78, phase: 0.2, size: 3.2, color: C.sage, label: 'Platform' },
  { rx: 235, period: 130, phase: 0.78, size: 2.8, color: C.cyan, label: 'Craft' },
  // 5th orbit: rotated ~75° so the AI moon travels on a near-vertical inclined path.
  { rx: 180, ry: 60, rotation: 75, period: 100, phase: 0.4, size: 3, color: C.cyan, label: 'AI' },
];

const W = 520;
const H = 520;
const TILT = 0.62;
const PLANET_R = 64;

export default function SkillCloud() {
  const reduced = useReducedMotion();
  const ref = useRef<SVGSVGElement | null>(null);
  const [t, setT] = useState(0);

  // Absolute elapsed time since mount — see SolarSystem for the rationale.
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

  return (
    <svg
      ref={ref}
      viewBox={`0 0 ${W} ${H}`}
      width="100%"
      height="100%"
      style={{ display: 'block' }}
      role="img"
      aria-label="Skill cloud: a planet with four orbiting moons labelled AI, Architecture, Platform, and Craft"
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
          <feGaussianBlur stdDeviation="5" />
        </filter>
      </defs>

      {MOONS.map((m) => {
        const ry = m.ry ?? m.rx * (1 - TILT);
        const transform = m.rotation ? `rotate(${m.rotation} ${cx} ${cy})` : undefined;
        return (
          <ellipse
            key={`orbit-${m.label}`}
            cx={cx}
            cy={cy}
            rx={m.rx}
            ry={ry}
            fill="none"
            stroke="#3a4258"
            strokeWidth="0.7"
            opacity="0.55"
            transform={transform}
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
        strokeWidth="0.6"
      />
      <path
        d={`M ${cx - PLANET_R * 0.92} ${cy - PLANET_R * 0.18}
            A ${PLANET_R} ${PLANET_R} 0 0 1 ${cx - PLANET_R * 0.18} ${cy - PLANET_R * 0.92}`}
        stroke="rgba(245,210,122,0.18)"
        strokeWidth="1"
        fill="none"
      />

      {MOONS.map((m) => {
        const a = (t / m.period + m.phase) * Math.PI * 2;
        const ry = m.ry ?? m.rx * (1 - TILT);
        const localX = m.rx * Math.cos(a);
        const localY = ry * Math.sin(a);
        let mx = cx + localX;
        let my = cy + localY;
        if (m.rotation) {
          const rad = (m.rotation * Math.PI) / 180;
          const cosR = Math.cos(rad);
          const sinR = Math.sin(rad);
          mx = cx + cosR * localX - sinR * localY;
          my = cy + sinR * localX + cosR * localY;
        }
        // Far side of orbit (sin(a) < 0 by convention) AND visually over the planet disk.
        const behind = Math.sin(a) < 0 && Math.hypot(mx - cx, my - cy) < PLANET_R;
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
                r={14}
                fill={m.color}
                opacity="0.22"
                filter="url(#moon-soft)"
              />
            )}
            <circle cx={mx} cy={my} r={m.size} fill={m.color} />
            <text
              x={mx}
              y={my - m.size - 8}
              textAnchor="middle"
              fontFamily="Montserrat, sans-serif"
              fontWeight={m.core ? 600 : 500}
              fontSize={m.core ? 11 : 10}
              letterSpacing="0.32em"
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
