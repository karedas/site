/* global React */
// SolarSystem — geometric, precise, editorial.
// Pure SVG so it's crisp at any scale.

const { useEffect, useRef, useState, useMemo } = React;

function Sun({ cx, cy, size, color, glowColor, style, variant }) {
  const sid = `sun-${variant}`;
  if (style === "minimal") {
    return (
      <>
        <radialGradient id={`${sid}-core`} cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#fff5d6" />
          <stop offset="55%" stopColor="#f5d27a" />
          <stop offset="100%" stopColor={color} />
        </radialGradient>
        <circle cx={cx} cy={cy} r={size} fill={`url(#${sid}-core)`} />
      </>
    );
  }

  if (style === "corona") {
    // crisp solid core + radial rays + soft halo
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
            <line key={i}
              x1={cx + innerR * Math.cos(a)} y1={cy + innerR * Math.sin(a)}
              x2={cx + outerR * Math.cos(a)} y2={cy + outerR * Math.sin(a)}
              stroke={color} strokeWidth="0.7" opacity="0.55" strokeLinecap="round" />
          );
        })}
        <circle cx={cx} cy={cy} r={size} fill={`url(#${sid}-core)`} />
      </>
    );
  }

  if (style === "ring") {
    // core + thin chromatic ring (amber → cyan) + halo
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
            <stop offset="0%" stopColor="#e8a13a" />
            <stop offset="50%" stopColor="#7fc88c" />
            <stop offset="100%" stopColor="#3fb8d6" />
          </linearGradient>
        </defs>
        <circle cx={cx} cy={cy} r={size * 3} fill={`url(#${sid}-halo)`} />
        <ellipse cx={cx} cy={cy} rx={size * 2.2} ry={size * 0.55}
          fill="none" stroke={`url(#${sid}-ring)`} strokeWidth="1.2" opacity="0.8" />
        <ellipse cx={cx} cy={cy} rx={size * 2.6} ry={size * 0.7}
          fill="none" stroke={`url(#${sid}-ring)`} strokeWidth="0.5" opacity="0.4" />
        <circle cx={cx} cy={cy} r={size} fill={`url(#${sid}-core)`} />
      </>
    );
  }

  if (style === "pulse") {
    // animated breathing halo via SMIL
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
        <circle cx={cx} cy={cy} r={size * 3} fill={`url(#${sid}-halo)`} filter={`url(#${sid}-blur)`}>
          <animate attributeName="r" values={`${size * 2.6};${size * 3.4};${size * 2.6}`}
            dur="4.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.85;1;0.85"
            dur="4.5s" repeatCount="indefinite" />
        </circle>
        <circle cx={cx} cy={cy} r={size * 1.8} fill={`url(#${sid}-halo)`} opacity="0.8" />
        <circle cx={cx} cy={cy} r={size} fill={`url(#${sid}-core)`} />
      </>
    );
  }

  // default "soft"
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
      <circle cx={cx} cy={cy} r={size * 4.5} fill={glowColor} filter={`url(#${sid}-blur)`} opacity="0.85" />
      <circle cx={cx} cy={cy} r={size * 2.4} fill={`url(#${sid}-halo)`} />
      <circle cx={cx} cy={cy} r={size} fill={`url(#${sid}-core)`} />
    </>
  );
}

// Static star field — deterministic so it doesn't reshuffle on re-render.
function useStars(count, w, h, seed = 1) {
  return useMemo(() => {
    let s = seed;
    const rnd = () => { s = (s * 9301 + 49297) % 233280; return s / 233280; };
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

function SolarSystem({
  width = 1200,
  height = 700,
  tilt = 0.55,
  planets = [],
  sunSize = 14,
  sunColor = "#d4a84b",
  sunGlowColor = "rgba(212,168,75,0.45)",
  sunStyle = "soft",
  orbitColor = "#6e5318",
  orbitOpacity = 0.32,
  parallaxStrength = 0,
  centerOffset = [0, 0],
  variant = "classic",
  starCount = 120,
  showComet = true,
}) {
  const svgRef = useRef(null);
  const [t, setT] = useState(0);
  const [hover, setHover] = useState(-1);
  const parallaxRef = useRef({ x: 0, y: 0 });
  // smoothed parallax used for rendering — read inside the rAF tick
  const smoothedRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    let raf;
    let last = performance.now();
    const tick = (now) => {
      // ease smoothed toward target each frame
      smoothedRef.current.x += (parallaxRef.current.x - smoothedRef.current.x) * 0.08;
      smoothedRef.current.y += (parallaxRef.current.y - smoothedRef.current.y) * 0.08;
      setT((p) => p + (now - last) / 1000);
      last = now;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    if (!parallaxStrength) return;
    const onMove = (e) => {
      const r = svgRef.current?.getBoundingClientRect();
      if (!r) return;
      const nx = (e.clientX - r.left) / r.width - 0.5;
      const ny = (e.clientY - r.top) / r.height - 0.5;
      // ref only — NO setState, no re-render storm on mousemove
      parallaxRef.current = { x: nx * parallaxStrength, y: ny * parallaxStrength };
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [parallaxStrength]);

  const cx = width / 2 + centerOffset[0] + smoothedRef.current.x;
  const cy = height / 2 + centerOffset[1] + smoothedRef.current.y;
  const maxA = Math.max(...planets.map((p) => p.a));
  const baseRx = (Math.min(width, height * 1.6) / 2) * 0.92;
  const stars = useStars(starCount, width, height, 7);

  // comet — appears every cometCycle seconds, streaks across in 3s
  const cometCycle = 18;
  const cometT = ((t % cometCycle) / cometCycle); // 0..1
  const cometActive = cometT < 0.18;
  const cometP = cometT / 0.18;
  const cometX = -100 + cometP * (width + 200);
  const cometY = height * 0.18 + cometP * (height * 0.55);

  return (
    <svg
      ref={svgRef}
      viewBox={`0 0 ${width} ${height}`}
      width="100%"
      height="100%"
      style={{ display: "block", overflow: "visible" }}
    >
      {/* star field */}
      <g style={{ pointerEvents: "none" }}>
        {stars.map((s, i) => {
          const tw = 0.5 + 0.5 * Math.sin(t / s.tw + s.ph);
          return (
            <circle key={i} cx={s.x} cy={s.y} r={s.r}
              fill="#e8e3d4" opacity={s.o * (0.5 + tw * 0.5)} />
          );
        })}
      </g>

      {/* comet */}
      {showComet && cometActive && (
        <g style={{ pointerEvents: "none" }} opacity={Math.sin(cometP * Math.PI)}>
          <defs>
            <linearGradient id={`comet-${variant}`} x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#7fd9ea" stopOpacity="0" />
              <stop offset="100%" stopColor="#7fd9ea" stopOpacity="0.85" />
            </linearGradient>
          </defs>
          <line x1={cometX - 80} y1={cometY - 40} x2={cometX} y2={cometY}
            stroke={`url(#comet-${variant})`} strokeWidth="1.2" />
          <circle cx={cometX} cy={cometY} r="1.6" fill="#e0f6ff" />
        </g>
      )}

      {/* Orbits */}
      {planets.map((p, i) => {
        const rx = baseRx * (p.a / maxA);
        const ry = rx * (1 - tilt);
        return (
          <ellipse key={`o-${i}`} cx={cx} cy={cy} rx={rx} ry={ry}
            fill="none" stroke={orbitColor}
            strokeWidth={hover === i ? 1.2 : 0.7}
            opacity={hover === i ? Math.min(orbitOpacity * 2.3, 0.9) : orbitOpacity}
            style={{ transition: "opacity 350ms ease, stroke-width 350ms ease" }} />
        );
      })}

      {/* Sun (style-driven) */}
      <Sun cx={cx} cy={cy} size={sunSize} color={sunColor}
        glowColor={sunGlowColor} style={sunStyle} variant={variant} />

      {/* Planets */}
      {planets.map((p, i) => {
        const rx = baseRx * (p.a / maxA);
        const ry = rx * (1 - tilt);
        const angle = ((t / p.period + p.phase) * Math.PI * 2) % (Math.PI * 2);
        const px = cx + rx * Math.cos(angle);
        const py = cy + ry * Math.sin(angle);
        const isHover = hover === i;
        return (
          <g key={`p-${i}`}
            onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(-1)}>
            {p.glow && (
              <circle cx={px} cy={py} r={p.size * 4} fill={p.color}
                opacity={isHover ? 0.35 : 0.18}
                style={{ filter: "blur(6px)", transition: "opacity 300ms" }} />
            )}
            <circle cx={px} cy={py} r={Math.max(p.size * 3, 18)} fill="transparent" />
            {p.ring && (
              <ellipse cx={px} cy={py} rx={p.size * 2.2} ry={p.size * 0.7}
                fill="none" stroke={p.color} strokeWidth="0.8"
                opacity={isHover ? 0.9 : 0.55} />
            )}
            <circle cx={px} cy={py} r={isHover ? p.size * 1.25 : p.size}
              fill={p.color} style={{ transition: "r 300ms ease" }} />
          </g>
        );
      })}
    </svg>
  );
}

window.SolarSystem = SolarSystem;
