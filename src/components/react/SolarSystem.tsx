import { useEffect, useMemo, useRef, useState } from 'react';
import { useReducedMotion } from './useReducedMotion';

// ── Palette (single source of truth in CSS; mirrored here for SVG attrs) ──
const C = {
  amber: '#e8a13a',
  gold: '#d4a84b',
  goldHi: '#f5d27a',
  sage: '#7fc88c',
  jade: '#4ea890',
  cyan: '#3fb8d6',
  ice: '#7fd9ea',
  parch: '#e8e3d4',
} as const;

interface Planet {
  a: number;
  size: number;
  period: number;
  phase: number;
  color: string;
  glow?: boolean;
  ring?: boolean;
}

const PLANETS: Planet[] = [
  { a: 0.16, size: 2.4, period: 8, phase: 0.1, color: C.amber, glow: true },
  { a: 0.26, size: 3.4, period: 14, phase: 0.55, color: C.gold },
  { a: 0.38, size: 4.2, period: 22, phase: 0.2, color: C.goldHi },
  { a: 0.5, size: 5.4, period: 34, phase: 0.78, color: C.sage, ring: true },
  { a: 0.64, size: 3.8, period: 52, phase: 0.42, color: C.jade },
  { a: 0.78, size: 4.6, period: 78, phase: 0.62, color: C.sage },
  { a: 0.9, size: 3.2, period: 105, phase: 0.05, color: C.cyan },
  { a: 1.02, size: 2.8, period: 142, phase: 0.3, color: C.cyan, glow: true },
];

type SunStyle = 'soft' | 'corona' | 'ring' | 'pulse' | 'minimal';

interface SunProps {
  cx: number;
  cy: number;
  size: number;
  color: string;
  glowColor: string;
  style: SunStyle;
  variant: string;
  reduced: boolean;
}

function Sun({ cx, cy, size, color, glowColor, style, variant, reduced }: SunProps) {
  const sid = `sun-${variant}`;

  if (style === 'minimal') {
    return (
      <>
        <defs>
          <radialGradient id={`${sid}-core`} cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="#fff5d6" />
            <stop offset="55%" stopColor="#f5d27a" />
            <stop offset="100%" stopColor={color} />
          </radialGradient>
        </defs>
        <circle cx={cx} cy={cy} r={size} fill={`url(#${sid}-core)`} />
      </>
    );
  }

  if (style === 'corona') {
    const rays = 16;
    return (
      <>
        <defs>
          <radialGradient id={`${sid}-core`} cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="#fff5d6" />
            <stop offset="55%" stopColor="#f5d27a" />
            <stop offset="100%" stopColor={color} />
          </radialGradient>
          <radialGradient id={`${sid}-halo`} cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor={color} stopOpacity="0.45" />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx={cx} cy={cy} r={size * 3.2} fill={`url(#${sid}-halo)`} />
        {Array.from({ length: rays }).map((_, i) => {
          const a = (i / rays) * Math.PI * 2;
          const innerR = size * 1.4;
          const outerR = size * (i % 2 === 0 ? 2.6 : 2.0);
          return (
            <line
              key={i}
              x1={cx + innerR * Math.cos(a)}
              y1={cy + innerR * Math.sin(a)}
              x2={cx + outerR * Math.cos(a)}
              y2={cy + outerR * Math.sin(a)}
              stroke={color}
              strokeWidth="0.7"
              opacity="0.55"
              strokeLinecap="round"
            />
          );
        })}
        <circle cx={cx} cy={cy} r={size} fill={`url(#${sid}-core)`} />
      </>
    );
  }

  if (style === 'ring') {
    return (
      <>
        <defs>
          <radialGradient id={`${sid}-core`} cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="#fff5d6" />
            <stop offset="55%" stopColor="#f5d27a" />
            <stop offset="100%" stopColor={color} />
          </radialGradient>
          <radialGradient id={`${sid}-halo`} cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor={color} stopOpacity="0.4" />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </radialGradient>
          <linearGradient id={`${sid}-ring`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor={C.amber} />
            <stop offset="50%" stopColor={C.sage} />
            <stop offset="100%" stopColor={C.cyan} />
          </linearGradient>
        </defs>
        <circle cx={cx} cy={cy} r={size * 3} fill={`url(#${sid}-halo)`} />
        <ellipse
          cx={cx}
          cy={cy}
          rx={size * 2.2}
          ry={size * 0.55}
          fill="none"
          stroke={`url(#${sid}-ring)`}
          strokeWidth="1.2"
          opacity="0.8"
        />
        <ellipse
          cx={cx}
          cy={cy}
          rx={size * 2.6}
          ry={size * 0.7}
          fill="none"
          stroke={`url(#${sid}-ring)`}
          strokeWidth="0.5"
          opacity="0.4"
        />
        <circle cx={cx} cy={cy} r={size} fill={`url(#${sid}-core)`} />
      </>
    );
  }

  if (style === 'pulse') {
    return (
      <>
        <defs>
          <radialGradient id={`${sid}-core`} cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="#fff5d6" />
            <stop offset="55%" stopColor="#f5d27a" />
            <stop offset="100%" stopColor={color} />
          </radialGradient>
          <radialGradient id={`${sid}-halo`} cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor={color} stopOpacity="0.5" />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </radialGradient>
          <filter id={`${sid}-blur`}>
            <feGaussianBlur stdDeviation="4" />
          </filter>
        </defs>
        <circle
          cx={cx}
          cy={cy}
          r={size * 3}
          fill={`url(#${sid}-halo)`}
          filter={`url(#${sid}-blur)`}
        >
          {!reduced && (
            <>
              <animate
                attributeName="r"
                values={`${size * 2.6};${size * 3.4};${size * 2.6}`}
                dur="4.5s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0.85;1;0.85"
                dur="4.5s"
                repeatCount="indefinite"
              />
            </>
          )}
        </circle>
        <circle cx={cx} cy={cy} r={size * 1.8} fill={`url(#${sid}-halo)`} opacity="0.8" />
        <circle cx={cx} cy={cy} r={size} fill={`url(#${sid}-core)`} />
      </>
    );
  }

  // default: 'soft'
  return (
    <>
      <defs>
        <radialGradient id={`${sid}-halo`} cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor={color} stopOpacity="0.55" />
          <stop offset="60%" stopColor={color} stopOpacity="0.18" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </radialGradient>
        <radialGradient id={`${sid}-core`} cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#fff5d6" />
          <stop offset="55%" stopColor="#f5d27a" />
          <stop offset="100%" stopColor={color} />
        </radialGradient>
        <filter id={`${sid}-blur`}>
          <feGaussianBlur stdDeviation="6" />
        </filter>
      </defs>
      <circle
        cx={cx}
        cy={cy}
        r={size * 4.5}
        fill={glowColor}
        filter={`url(#${sid}-blur)`}
        opacity="0.85"
      />
      <circle cx={cx} cy={cy} r={size * 2.4} fill={`url(#${sid}-halo)`} />
      <circle cx={cx} cy={cy} r={size} fill={`url(#${sid}-core)`} />
    </>
  );
}

interface Star {
  x: number;
  y: number;
  r: number;
  o: number;
  tw: number;
  ph: number;
}

function useStars(count: number, w: number, h: number, seed = 1): Star[] {
  return useMemo(() => {
    let s = seed;
    const rnd = () => {
      s = (s * 9301 + 49297) % 233280;
      return s / 233280;
    };
    return Array.from({ length: count }).map(() => ({
      x: rnd() * w,
      y: rnd() * h,
      r: 0.3 + rnd() * 1.1,
      o: 0.15 + rnd() * 0.55,
      tw: 1.5 + rnd() * 4,
      ph: rnd() * Math.PI * 2,
    }));
  }, [count, w, h, seed]);
}

interface Props {
  width?: number;
  height?: number;
  tilt?: number;
  sunStyle?: SunStyle;
  parallaxStrength?: number;
  starCount?: number;
  showComet?: boolean;
}

export default function SolarSystem({
  width = 1440,
  height = 620,
  tilt = 0.62,
  sunStyle = 'pulse',
  parallaxStrength = 18,
  starCount = 140,
  showComet = true,
}: Props) {
  const reduced = useReducedMotion();
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [t, setT] = useState(0);
  const [hover, setHover] = useState(-1);
  const parallaxRef = useRef({ x: 0, y: 0 });
  const smoothedRef = useRef({ x: 0, y: 0 });

  // Animation loop. When reduced-motion, render a single frozen frame (t=0).
  useEffect(() => {
    if (reduced) return;
    let raf = 0;
    let last = performance.now();
    const tick = (now: number) => {
      smoothedRef.current.x += (parallaxRef.current.x - smoothedRef.current.x) * 0.08;
      smoothedRef.current.y += (parallaxRef.current.y - smoothedRef.current.y) * 0.08;
      setT((p) => p + (now - last) / 1000);
      last = now;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [reduced]);

  // Mouse parallax — ref only, no setState (avoids re-render storm)
  useEffect(() => {
    if (reduced || !parallaxStrength) return;
    const onMove = (e: MouseEvent) => {
      const r = svgRef.current?.getBoundingClientRect();
      if (!r) return;
      const nx = (e.clientX - r.left) / r.width - 0.5;
      const ny = (e.clientY - r.top) / r.height - 0.5;
      parallaxRef.current = { x: nx * parallaxStrength, y: ny * parallaxStrength };
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [parallaxStrength, reduced]);

  const centerOffsetX = 0;
  const centerOffsetY = 30;
  const cx = width / 2 + centerOffsetX + smoothedRef.current.x;
  const cy = height / 2 + centerOffsetY + smoothedRef.current.y;
  const maxA = Math.max(...PLANETS.map((p) => p.a));
  const baseRx = (Math.min(width, height * 1.6) / 2) * 0.92;
  const stars = useStars(starCount, width, height, 7);

  const variant = 'hero';
  const sunSize = 12;
  const sunColor = C.goldHi;
  const sunGlowColor = 'rgba(245,210,122,0.45)';
  const orbitColor = '#3a4258';
  const orbitOpacity = 0.45;

  // Comet pacing: appears every 18s, streaks across in 3s.
  const cometCycle = 18;
  const cometT = (t % cometCycle) / cometCycle;
  const cometActive = !reduced && showComet && cometT < 0.18;
  const cometP = cometT / 0.18;
  const cometX = -100 + cometP * (width + 200);
  const cometY = height * 0.18 + cometP * (height * 0.55);

  return (
    <svg
      ref={svgRef}
      viewBox={`0 0 ${width} ${height}`}
      width="100%"
      height="100%"
      style={{ display: 'block', overflow: 'visible' }}
      role="img"
      aria-label="Solar system illustration with eight planets in elliptical orbits around a glowing sun"
    >
      {/* star field */}
      <g style={{ pointerEvents: 'none' }}>
        {stars.map((s, i) => {
          const tw = reduced ? 0.5 : 0.5 + 0.5 * Math.sin(t / s.tw + s.ph);
          return (
            <circle
              key={i}
              cx={s.x}
              cy={s.y}
              r={s.r}
              fill={C.parch}
              opacity={s.o * (0.5 + tw * 0.5)}
            />
          );
        })}
      </g>

      {/* comet */}
      {cometActive && (
        <g style={{ pointerEvents: 'none' }} opacity={Math.sin(cometP * Math.PI)}>
          <defs>
            <linearGradient id={`comet-${variant}`} x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor={C.ice} stopOpacity="0" />
              <stop offset="100%" stopColor={C.ice} stopOpacity="0.85" />
            </linearGradient>
          </defs>
          <line
            x1={cometX - 80}
            y1={cometY - 40}
            x2={cometX}
            y2={cometY}
            stroke={`url(#comet-${variant})`}
            strokeWidth="1.2"
          />
          <circle cx={cometX} cy={cometY} r="1.6" fill="#e0f6ff" />
        </g>
      )}

      {/* Orbits */}
      {PLANETS.map((p, i) => {
        const rx = baseRx * (p.a / maxA);
        const ry = rx * (1 - tilt);
        return (
          <ellipse
            key={`o-${i}`}
            cx={cx}
            cy={cy}
            rx={rx}
            ry={ry}
            fill="none"
            stroke={orbitColor}
            strokeWidth={hover === i ? 1.2 : 0.7}
            opacity={hover === i ? Math.min(orbitOpacity * 2.3, 0.9) : orbitOpacity}
            style={{ transition: 'opacity 350ms ease, stroke-width 350ms ease' }}
          />
        );
      })}

      <Sun
        cx={cx}
        cy={cy}
        size={sunSize}
        color={sunColor}
        glowColor={sunGlowColor}
        style={sunStyle}
        variant={variant}
        reduced={reduced}
      />

      {/* Planets */}
      {PLANETS.map((p, i) => {
        const rx = baseRx * (p.a / maxA);
        const ry = rx * (1 - tilt);
        const angle = ((t / p.period + p.phase) * Math.PI * 2) % (Math.PI * 2);
        const px = cx + rx * Math.cos(angle);
        const py = cy + ry * Math.sin(angle);
        const isHover = hover === i;
        return (
          <g key={`p-${i}`} onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(-1)}>
            {p.glow && (
              <circle
                cx={px}
                cy={py}
                r={p.size * 4}
                fill={p.color}
                opacity={isHover ? 0.35 : 0.18}
                style={{ filter: 'blur(6px)', transition: 'opacity 300ms' }}
              />
            )}
            <circle cx={px} cy={py} r={Math.max(p.size * 3, 18)} fill="transparent" />
            {p.ring && (
              <ellipse
                cx={px}
                cy={py}
                rx={p.size * 2.2}
                ry={p.size * 0.7}
                fill="none"
                stroke={p.color}
                strokeWidth="0.8"
                opacity={isHover ? 0.9 : 0.55}
              />
            )}
            <circle
              cx={px}
              cy={py}
              r={isHover ? p.size * 1.25 : p.size}
              fill={p.color}
              style={{ transition: 'r 300ms ease' }}
            />
          </g>
        );
      })}
    </svg>
  );
}
