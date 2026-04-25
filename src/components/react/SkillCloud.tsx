import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from './useReducedMotion';

const C = {
  amber:  '#e8a13a',
  goldHi: '#f5d27a',
  sage:   '#7fc88c',
  cyan:   '#3fb8d6',
  fgMute: '#b6ae98',
} as const;

interface Moon {
  rx: number;
  period: number;
  phase: number;
  size: number;
  color: string;
  label: string;
  core?: boolean;
}

const MOONS: Moon[] = [
  { rx: 110, period:  22, phase: 0.10, size: 5,   color: C.amber,  label: 'AI',           core: true },
  { rx: 150, period:  44, phase: 0.55, size: 3.6, color: C.goldHi, label: 'Architecture' },
  { rx: 195, period:  78, phase: 0.20, size: 3.2, color: C.sage,   label: 'Platform' },
  { rx: 235, period: 130, phase: 0.78, size: 2.8, color: C.cyan,   label: 'Craft' },
];

const W = 520;
const H = 520;
const TILT = 0.62;
const PLANET_R = 64;

export default function SkillCloud() {
  const reduced = useReducedMotion();
  const ref = useRef<SVGSVGElement | null>(null);
  const [t, setT] = useState(0);

  useEffect(() => {
    if (reduced) return;
    let raf = 0;
    let last = performance.now();
    const tick = (now: number) => {
      setT((x) => x + (now - last) / 1000);
      last = now;
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
          <stop offset="0%"   stopColor="#3a4663" />
          <stop offset="55%"  stopColor="#1d2440" />
          <stop offset="100%" stopColor="#0c0f20" />
        </radialGradient>
        <radialGradient id="planet-atmo" cx="0.5" cy="0.5" r="0.5">
          <stop offset="60%"  stopColor="rgba(127,200,140,0)" />
          <stop offset="92%"  stopColor="rgba(127,200,140,0.18)" />
          <stop offset="100%" stopColor="rgba(127,200,140,0)" />
        </radialGradient>
        <filter id="moon-soft" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="5" />
        </filter>
      </defs>

      {MOONS.map((m, i) => (
        <ellipse key={`o${i}`} cx={cx} cy={cy} rx={m.rx} ry={m.rx * (1 - TILT)}
          fill="none" stroke="#3a4258" strokeWidth="0.7" opacity="0.55" />
      ))}

      {/* Planet body */}
      <circle cx={cx} cy={cy} r={PLANET_R + 6} fill="url(#planet-atmo)" />
      <circle cx={cx} cy={cy} r={PLANET_R} fill="url(#planet-fill)" />
      <ellipse cx={cx} cy={cy} rx={PLANET_R} ry={PLANET_R * 0.18}
        fill="none" stroke="rgba(232,227,212,0.06)" strokeWidth="0.6" />
      <path
        d={`M ${cx - PLANET_R * 0.92} ${cy - PLANET_R * 0.18}
            A ${PLANET_R} ${PLANET_R} 0 0 1 ${cx - PLANET_R * 0.18} ${cy - PLANET_R * 0.92}`}
        stroke="rgba(245,210,122,0.18)" strokeWidth="1" fill="none"
      />

      {MOONS.map((m, i) => {
        const a = (t / m.period + m.phase) * Math.PI * 2;
        const mx = cx + m.rx * Math.cos(a);
        const my = cy + m.rx * (1 - TILT) * Math.sin(a);
        const behind =
          my < cy &&
          Math.abs(mx - cx) < PLANET_R * 0.95 &&
          Math.hypot(mx - cx, my - cy) < PLANET_R;
        return (
          <g key={`m${i}`} opacity={behind ? 0.25 : 1} style={{ transition: 'opacity 200ms' }}>
            {m.core && (
              <circle cx={mx} cy={my} r={14} fill={m.color} opacity="0.22" filter="url(#moon-soft)" />
            )}
            <circle cx={mx} cy={my} r={m.size} fill={m.color} />
            <text
              x={mx} y={my - m.size - 8}
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
