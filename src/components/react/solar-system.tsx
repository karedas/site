import { useEffect, useMemo, useState } from 'react';
import { useReducedMotion } from './use-reduced-motion';

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
              key={`ray-${a.toFixed(6)}`}
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
  starCount?: number;
  showComet?: boolean;
  showShip?: boolean;
}

export default function SolarSystem({
  width = 1440,
  height = 620,
  tilt = 0.62,
  sunStyle = 'pulse',
  starCount = 140,
  showComet = true,
  showShip = true,
}: Props) {
  const reduced = useReducedMotion();
  const [t, setT] = useState(0);
  const [hover, setHover] = useState(-1);

  // Animation loop. When reduced-motion, render a single frozen frame (t=0).
  // We track time as ABSOLUTE elapsed seconds since mount instead of accumulating
  // per-frame deltas; accumulation is fragile under React Strict-Mode double-mount,
  // hidden-tab rAF throttling, and any other case where `last` may get reset while
  // `t` carries forward (or vice versa), which manifests as planets oscillating in
  // place / making tiny back-and-forth steps.
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

  const centerOffsetX = 0;
  const centerOffsetY = 30;
  const cx = width / 2 + centerOffsetX;
  const cy = height / 2 + centerOffsetY;
  const maxA = Math.max(...PLANETS.map((p) => p.a));
  const baseRx = (Math.min(width, height * 1.6) / 2) * 0.92;
  const stars = useStars(starCount, width, height, 7);

  const variant = 'hero';
  const sunSize = 12;
  const sunColor = C.goldHi;
  const sunGlowColor = 'rgba(245,210,122,0.45)';
  const orbitColor = '#3a4258';
  const orbitOpacity = 0.45;

  // Comet pacing: one diagonal streak every 18s, traversing in ~2.2s.
  const cometCycle = 42;
  const cometDuration = 2.2;
  const cycleT = t % cometCycle;
  const cometActive = !reduced && showComet && cycleT < cometDuration;
  const cometP = cycleT / cometDuration;

  // Trajectory crosses the full viewport diagonally so the streak visibly
  // cuts through the orbits instead of grazing one corner. Endpoints sit
  // outside the viewBox on both ends to avoid pop-in.
  const cometStartX = -180;
  const cometStartY = -100;
  const cometEndX = width + 180;
  const cometEndY = height + 80;
  const cometX = cometStartX + cometP * (cometEndX - cometStartX);
  const cometY = cometStartY + cometP * (cometEndY - cometStartY);

  // Tail vector aligned with motion (opposite of velocity, fixed pixel length).
  // Without this, the tail looks pinned at a constant angle and the comet
  // reads as a sliding sprite rather than something flying through the system.
  const cometDx = cometEndX - cometStartX;
  const cometDy = cometEndY - cometStartY;
  const cometLen = Math.hypot(cometDx, cometDy);
  const cometTailPx = 140;
  const cometTailX = cometX - (cometDx / cometLen) * cometTailPx;
  const cometTailY = cometY - (cometDy / cometLen) * cometTailPx;

  // Alien craft: traces a quadratic curve through the lower part of the canvas,
  // dipping below the orbits before climbing back up to the opposite edge.
  // Different rhythm from the comet so the two scenery elements rarely overlap.
  const shipCycle = 65;
  const shipDuration = 8;
  const shipCycleT = (t + 52) % shipCycle;
  const shipActive = !reduced && showShip && shipCycleT < shipDuration;
  const shipP = shipCycleT / shipDuration;

  // Quadratic Bezier control points; the middle one sits below the canvas
  // so the visible portion is a clean U-shaped sweep across the lower half.
  const shipP0X = width + 40;
  const shipP0Y = height * 0.86;
  const shipP1X = width / 2;
  const shipP1Y = height * 1.02;
  const shipP2X = -40;
  const shipP2Y = height * 0.86;
  const shipOM = 1 - shipP;
  const shipX = shipOM * shipOM * shipP0X + 2 * shipOM * shipP * shipP1X + shipP * shipP * shipP2X;
  const shipY = shipOM * shipOM * shipP0Y + 2 * shipOM * shipP * shipP1Y + shipP * shipP * shipP2Y;

  // Tangent vector; used to point the engine wake opposite to the motion.
  const shipTanX = 2 * shipOM * (shipP1X - shipP0X) + 2 * shipP * (shipP2X - shipP1X);
  const shipTanY = 2 * shipOM * (shipP1Y - shipP0Y) + 2 * shipP * (shipP2Y - shipP1Y);
  const shipTanLen = Math.hypot(shipTanX, shipTanY) || 1;
  const shipTrailUx = -shipTanX / shipTanLen;
  const shipTrailUy = -shipTanY / shipTanLen;
  const shipTrailInnerX = shipX + shipTrailUx * 9;
  const shipTrailInnerY = shipY + shipTrailUy * 9;
  const shipTrailOuterX = shipX + shipTrailUx * 36;
  const shipTrailOuterY = shipY + shipTrailUy * 36;

  const shipFade = Math.sin(shipP * Math.PI);
  const shipPulse = 0.55 + 0.45 * Math.sin(t * 3.2);

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      width="100%"
      height="100%"
      style={{ display: 'block', overflow: 'visible' }}
      role="img"
      aria-label="Solar system illustration with eight planets in elliptical orbits around a glowing sun"
    >
      {/* star field */}
      <g style={{ pointerEvents: 'none' }}>
        {stars.map((s) => {
          const tw = reduced ? 0.5 : 0.5 + 0.5 * Math.sin(t / s.tw + s.ph);
          const starOpacity = Number((s.o * (0.5 + tw * 0.5)).toFixed(6));
          return (
            <circle
              key={`star-${s.x.toFixed(3)}-${s.y.toFixed(3)}`}
              cx={s.x}
              cy={s.y}
              r={s.r}
              fill={C.parch}
              opacity={starOpacity}
            />
          );
        })}
      </g>

      {/* comet */}
      {cometActive && (
        <g style={{ pointerEvents: 'none' }} opacity={Math.sin(cometP * Math.PI)}>
          <defs>
            <linearGradient
              id={`comet-${variant}`}
              gradientUnits="userSpaceOnUse"
              x1={cometTailX}
              y1={cometTailY}
              x2={cometX}
              y2={cometY}
            >
              <stop offset="0%" stopColor={C.ice} stopOpacity="0" />
              <stop offset="55%" stopColor={C.ice} stopOpacity="0.35" />
              <stop offset="100%" stopColor="#e0f6ff" stopOpacity="0.95" />
            </linearGradient>
            <linearGradient
              id={`comet-${variant}-glow`}
              gradientUnits="userSpaceOnUse"
              x1={cometTailX}
              y1={cometTailY}
              x2={cometX}
              y2={cometY}
            >
              <stop offset="0%" stopColor={C.ice} stopOpacity="0" />
              <stop offset="100%" stopColor={C.ice} stopOpacity="0.55" />
            </linearGradient>
          </defs>
          <line
            x1={cometTailX}
            y1={cometTailY}
            x2={cometX}
            y2={cometY}
            stroke={`url(#comet-${variant}-glow)`}
            strokeWidth="4"
            strokeLinecap="round"
            opacity="0.5"
            style={{ filter: 'blur(3px)' }}
          />
          <line
            x1={cometTailX}
            y1={cometTailY}
            x2={cometX}
            y2={cometY}
            stroke={`url(#comet-${variant})`}
            strokeWidth="1.4"
            strokeLinecap="round"
          />
          <circle
            cx={cometX}
            cy={cometY}
            r="4.5"
            fill="#e0f6ff"
            opacity="0.45"
            style={{ filter: 'blur(2.5px)' }}
          />
          <circle cx={cometX} cy={cometY} r="1.8" fill="#ffffff" />
        </g>
      )}

      {/* alien craft; curves through the lower half, well clear of the orbits */}
      {shipActive && (
        <g style={{ pointerEvents: 'none' }} opacity={shipFade}>
          <defs>
            <linearGradient
              id="ship-trail"
              gradientUnits="userSpaceOnUse"
              x1={shipTrailOuterX}
              y1={shipTrailOuterY}
              x2={shipTrailInnerX}
              y2={shipTrailInnerY}
            >
              <stop offset="0%" stopColor={C.cyan} stopOpacity="0" />
              <stop offset="100%" stopColor={C.cyan} stopOpacity="0.75" />
            </linearGradient>
            <radialGradient id="ship-body" cx="0.35" cy="0.3" r="0.75">
              <stop offset="0%" stopColor="#cfeef7" />
              <stop offset="35%" stopColor="#5b9fb8" />
              <stop offset="100%" stopColor="#0f1a2e" />
            </radialGradient>
            <radialGradient id="ship-halo" cx="0.5" cy="0.5" r="0.5">
              <stop offset="0%" stopColor={C.cyan} stopOpacity="0.45" />
              <stop offset="100%" stopColor={C.cyan} stopOpacity="0" />
            </radialGradient>
          </defs>

          <line
            x1={shipTrailOuterX}
            y1={shipTrailOuterY}
            x2={shipTrailInnerX}
            y2={shipTrailInnerY}
            stroke="url(#ship-trail)"
            strokeWidth="1.3"
            strokeLinecap="round"
            opacity="0.7"
          />

          <circle cx={shipX} cy={shipY} r="20" fill="url(#ship-halo)" />
          <circle
            cx={shipX}
            cy={shipY + 5.5}
            r="3.5"
            fill={C.cyan}
            opacity="0.5"
            style={{ filter: 'blur(2.5px)' }}
          />

          <ellipse cx={shipX} cy={shipY + 0.4} rx="13" ry="2.7" fill={C.cyan} opacity="0.14" />
          <ellipse
            cx={shipX}
            cy={shipY + 0.4}
            rx="13"
            ry="2.7"
            fill="none"
            stroke={C.cyan}
            strokeWidth="0.8"
            opacity="0.7"
          />

          <circle
            cx={shipX}
            cy={shipY}
            r="6"
            fill="url(#ship-body)"
            stroke={C.cyan}
            strokeWidth="0.55"
            opacity="0.97"
          />
          <ellipse
            cx={shipX - 1.4}
            cy={shipY - 2.2}
            rx="2.4"
            ry="1.4"
            fill={C.ice}
            opacity={0.45 + 0.4 * shipPulse}
          />

          <circle
            cx={shipX}
            cy={shipY + 5.2}
            r="1.2"
            fill="#ff7060"
            opacity={0.65 + 0.35 * shipPulse}
          />
        </g>
      )}

      {/* Orbits */}
      {PLANETS.map((p, i) => {
        const rx = baseRx * (p.a / maxA);
        const ry = rx * (1 - tilt);
        return (
          <ellipse
            key={`orbit-${p.a}`}
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
          <g
            key={`planet-${p.a}`}
            onMouseEnter={() => setHover(i)}
            onMouseLeave={() => setHover(-1)}
          >
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
