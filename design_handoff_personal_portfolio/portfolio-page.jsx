/* global React, SolarSystem */
// Andrea Lisi — single-page portfolio.
// Stacked sections: Hero (solar system + name) → About → Skills (orbital cloud) → Selected Work.
// Montserrat throughout. Gradient palette (amber → cyan) on the hero planets.

const { useEffect, useRef, useState } = React;

const C = {
  amber:  "#e8a13a",
  gold:   "#d4a84b",
  goldHi: "#f5d27a",
  ember:  "#c97a3b",
  sage:   "#7fc88c",
  jade:   "#4ea890",
  cyan:   "#3fb8d6",
  ice:    "#7fd9ea",
  parch:  "#e8e3d4",
  dim:    "#6e5318",
  fg:     "#e8e3d4",
  fgMute: "#b6ae98",
  fgDim:  "#7a735e",
};

// Hero planets — gradient ambra → ciano, tilt prospettico marcato (0.62)
const heroPlanets = [
  { a: 0.16, size: 2.4, period:   8, phase: 0.10, color: C.amber, glow: true },
  { a: 0.26, size: 3.4, period:  14, phase: 0.55, color: C.gold },
  { a: 0.38, size: 4.2, period:  22, phase: 0.20, color: C.goldHi },
  { a: 0.50, size: 5.4, period:  34, phase: 0.78, color: C.sage, ring: true },
  { a: 0.64, size: 3.8, period:  52, phase: 0.42, color: C.jade },
  { a: 0.78, size: 4.6, period:  78, phase: 0.62, color: C.sage },
  { a: 0.90, size: 3.2, period: 105, phase: 0.05, color: C.cyan },
  { a: 1.02, size: 2.8, period: 142, phase: 0.30, color: C.cyan, glow: true },
];

/* =================================================================
   EDITORIAL TELEMETRY — small live components
   ================================================================= */

// Roman numerals 1→MMM
function toRoman(n) {
  const map = [[1000,"M"],[900,"CM"],[500,"D"],[400,"CD"],[100,"C"],[90,"XC"],[50,"L"],[40,"XL"],[10,"X"],[9,"IX"],[5,"V"],[4,"IV"],[1,"I"]];
  let s = "";
  for (const [v, l] of map) { while (n >= v) { s += l; n -= v; } }
  return s;
}

// Auto-current-year, glitching every 8–12s for ~120ms to a different roman.
function YearGlitch({ style }) {
  const now = new Date().getFullYear();
  const real = toRoman(now);
  const [shown, setShown] = useState(real);
  useEffect(() => {
    let timeout, interval;
    const schedule = () => {
      const wait = 8000 + Math.random() * 4000;
      timeout = setTimeout(() => {
        // pick a plausible alt year between 1900 and 2050, not equal to now
        let alt;
        do { alt = 1900 + Math.floor(Math.random() * 150); } while (alt === now);
        setShown(toRoman(alt));
        setTimeout(() => setShown(real), 100 + Math.random() * 80);
        schedule();
      }, wait);
    };
    schedule();
    return () => { clearTimeout(timeout); clearInterval(interval); };
  }, [real, now]);
  return <span style={style}>{shown}</span>;
}

// Coordinates with seconds incrementing in real time.
function GeoCoords() {
  const [t, setT] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setT((x) => x + 1), 1000);
    return () => clearInterval(id);
  }, []);
  // base: Vienna 48°12′31.4″ N, 16°22′38.7″ E. Drift the decimal.
  const lat = (31.4 + (t % 60) * 0.05).toFixed(1);
  const lon = (38.7 + (t % 60) * 0.03).toFixed(1);
  return (
    <span>
      N&nbsp;48°12′{lat}″ &nbsp;·&nbsp; E&nbsp;16°22′{lon}″
    </span>
  );
}

// TRANSMITTING with a slowly-incrementing hex packet counter + pulsing LED.
function TransmittingTicker() {
  const [pkt, setPkt] = useState(0x7F4A2C);
  useEffect(() => {
    const id = setInterval(() => {
      setPkt((p) => (p + Math.floor(1 + Math.random() * 4)) % 0xFFFFFF);
    }, 600);
    return () => clearInterval(id);
  }, []);
  const hex = pkt.toString(16).toUpperCase().padStart(6, "0");
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
      <span style={{
        width: 6, height: 6, borderRadius: "50%",
        background: "#fe6442",
        boxShadow: "0 0 6px #fe6442",
        animation: "al-led-pulse 1.6s ease-in-out infinite",
      }} />
      <span>TRANSMITTING</span>
      <span className="al-pkt-hex" style={{ color: "var(--gold-dim, #6e5318)" }}>0x{hex}</span>
      <span style={{ marginLeft: 8 }}>MMXXVI</span>
    </span>
  );
}

// Cycling telemetry line above the greeting.
function Telemetry() {
  const lines = [
    { text: "OBSERVED FROM EARTH" },
    { text: "LISTENING ON 1420 MHz" },
    { text: () => `RANGE: ${(1.3 + (Date.now() / 60000) % 0.4).toFixed(2)} LY` },
    { text: "BEARING: 287°·14′" },
  ];
  const [i, setI] = useState(0);
  const [phase, setPhase] = useState("in"); // in | out
  useEffect(() => {
    const id = setInterval(() => {
      setPhase("out");
      setTimeout(() => {
        setI((x) => (x + 1) % lines.length);
        setPhase("in");
      }, 280);
    }, 6000);
    return () => clearInterval(id);
  }, []);
  const cur = lines[i];
  const text = typeof cur.text === "function" ? cur.text() : cur.text;
  return (
    <div style={{
      ...hero.eyebrow,
      transition: "opacity 280ms ease, transform 280ms ease",
      opacity: phase === "in" ? 1 : 0,
      transform: phase === "in" ? "translateY(0)" : "translateY(4px)",
      whiteSpace: "nowrap",
    }}>
      — {text} —
    </div>
  );
}

/* =================================================================
   HERO
   ================================================================= */
function Hero({ sunStyle = "soft" }) {
  return (
    <section style={hero.root}>
      <div className="al-topmeta" style={hero.topMeta}>
        <GeoCoords />
        <span className="al-topmeta-name">ANDREA LISI</span>
        <TransmittingTicker />
      </div>

      <div style={hero.systemWrap}>
        <SolarSystem
          width={1440}
          height={620}
          tilt={0.62}
          planets={heroPlanets}
          sunSize={12}
          sunColor={C.goldHi}
          sunGlowColor="rgba(245,210,122,0.45)"
          sunStyle={sunStyle}
          orbitColor="#3a4258"
          orbitOpacity={0.45}
          centerOffset={[0, 30]}
          parallaxStrength={18}
          variant="hero"
          starCount={140}
          showComet={true}
        />
      </div>

      <div className="al-hero-compose" style={hero.compose}>
        <Telemetry />

        <p className="al-hero-welcome" style={hero.welcome}>
          Hi, I’m <em style={hero.welcomeEm}>Andrea</em>.
        </p>

        <GradientArc />

        <div className="al-hero-role" style={hero.role}>
          Senior Software Engineer
          <span style={hero.roleSep}> / </span>
          <span style={hero.roleSub}>twenty years where art keeps bumping into code.</span>
        </div>

        <div style={hero.links}>
          <SocialLink label="github" />
          <Sep />
          <SocialLink label="linkedin" />
          <Sep />
          <SocialLink label="instagram" />
          <Sep />
          <SocialLink label="email" />
        </div>
      </div>

      <ScrollHint />
    </section>
  );
}

/* =================================================================
   ABOUT
   ================================================================= */
function About() {
  return (
    <section className="al-section" style={sec.root} id="about">
      <SectionHeader num="01" title="About" subtitle="A short transmission" accent={C.amber} />
      <div className="al-about-body" style={about.body}>
        <p className="al-about-lead" style={about.lead}>
          Twenty years of building on the web — as engineer, designer, sometimes both at
          once. I sit at the seam where <span style={about.hl}>art meets programming</span>:
          where a typeface decision becomes a render budget, where a model's confidence
          becomes an interface, where a deploy pipeline carries someone's intent intact.
        </p>
        <p className="al-about-body2" style={about.body2}>
          Currently in Vienna, leading the AI transformation of software quality at
          Tricentis. My focus is <span style={about.hl}>governance and platform</span> —
          the rails other teams build on: monorepo orchestration, architectural standards,
          observability, and the AI-driven workflows that are quietly reshaping how we ship.
        </p>
        <div className="al-about-meta-row" style={about.metaRow}>
          <Meta k="Based" v="Vienna, AT" />
          <Meta k="Mode" v="Remote / Hybrid" />
          <Meta k="Languages" v="IT · EN" />
          <Meta k="Status" v={<span style={{ color: C.sage }}>● In orbit — quietly building</span>} />
        </div>
      </div>
    </section>
  );
}

function Meta({ k, v }) {
  return (
    <div style={about.meta}>
      <div style={about.metaK}>{k}</div>
      <div style={about.metaV}>{v}</div>
    </div>
  );
}

/* =================================================================
   SKILLS — Orbital cloud (mirrors the hero, smaller). AI highlighted.
   ================================================================= */
const skillGroups = [
  {
    title: "AI & DX",
    pillar: true,
    items: [
      { name: "AI-driven workflows", weight: 1.0 },
      { name: "Cursor / Claude Code", weight: 1.0 },
      { name: "AI for QA & quality", weight: 0.95 },
      { name: "Developer Experience", weight: 0.95 },
      { name: "Tooling & automation", weight: 0.9 },
    ],
  },
  {
    title: "Architecture",
    items: [
      { name: "Clean Architecture",  weight: 1.0 },
      { name: "Domain-Driven Design",weight: 0.95 },
      { name: "Type Safety (Zod)",   weight: 0.9 },
      { name: "GraphQL contracts",   weight: 0.9 },
      { name: "Observability",       weight: 0.85 },
    ],
  },
  {
    title: "Platform",
    items: [
      { name: "Nx / Turborepo",      weight: 1.0 },
      { name: "Azure DevOps",        weight: 0.95 },
      { name: "GitHub Enterprise",   weight: 0.9 },
      { name: "Docker / Kubernetes", weight: 0.85 },
      { name: "Cloudflare Workers",  weight: 0.8 },
      { name: "App Insights",        weight: 0.8 },
    ],
  },
  {
    title: "Engineering",
    items: [
      { name: "TypeScript",        weight: 1.0 },
      { name: "React / RSC",       weight: 0.95 },
      { name: "Vue 3",             weight: 0.85 },
      { name: "Node.js",           weight: 0.9 },
      { name: "GraphQL",           weight: 0.9 },
      { name: "Playwright / Vitest",weight: 0.85 },
    ],
  },
  {
    title: "Craft & Leadership",
    items: [
      { name: "Architectural steering", weight: 0.95 },
      { name: "Technical governance",   weight: 0.95 },
      { name: "Mentoring & growth",     weight: 0.9 },
      { name: "Figma / Adobe CC",       weight: 0.85 },
      { name: "Writing & docs",         weight: 0.8 },
    ],
  },
];

function Skills() {
  return (
    <section className="al-section" style={sec.root} id="skills">
      <SectionHeader num="02" title="Skills" subtitle="Governance, platform, and the AI shift" accent={C.sage} />

      <div className="al-skills-layout" style={skill.layout}>
        {/* left: orbital cloud */}
        <div className="al-skills-cloud-wrap" style={skill.cloudWrap}>
          <SkillCloud />
          <div style={skill.cloudChart}>
            <div style={skill.chartLine}>
              <span style={skill.chartKey}>SECTOR</span>
              <span style={skill.chartDot}>·</span>
              <span style={skill.chartVal}>02 / SKILLS</span>
            </div>
            <div style={skill.chartLine}>
              <span style={skill.chartKey}>R</span>
              <span style={skill.chartVal}>235 AU</span>
              <span style={skill.chartDot}>·</span>
              <span style={skill.chartKey}>OBS</span>
              <span style={skill.chartVal}>MMXXVI</span>
            </div>
          </div>
        </div>

        {/* right: grouped flat list, AI first */}
        <div className="al-skill-list" style={skill.list}>
          {skillGroups.map((g, i) => (
            <SkillGroup key={i} group={g} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillGroup({ group }) {
  return (
    <div style={{
      ...skill.group,
      borderLeft: group.pillar ? `2px solid ${C.amber}` : `1px solid var(--border)`,
      paddingLeft: group.pillar ? 22 : 18,
    }}>
      <h3 style={{
        ...skill.groupTitle,
        color: group.pillar ? C.amber : C.fgDim,
      }}>
        {group.title}
        {group.pillar && <span style={skill.pillarTag}>· CORE</span>}
      </h3>
      <div style={skill.chips}>
        {group.items.map((s, i) => (
          <SkillChip key={i} skill={s} pillar={group.pillar} />
        ))}
      </div>
    </div>
  );
}

function SkillChip({ skill: s, pillar }) {
  const [hover, setHover] = useState(false);
  const baseColor = pillar ? C.amber : C.fgMute;
  const hoverColor = pillar ? C.goldHi : C.parch;
  return (
    <span
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        fontFamily: "Montserrat, sans-serif",
        fontSize: pillar ? 13 : 12,
        fontWeight: pillar ? 500 : 400,
        letterSpacing: "0.04em",
        color: hover ? hoverColor : baseColor,
        padding: "6px 12px",
        border: `1px solid ${hover ? (pillar ? C.amber : "var(--border)") : "var(--border-soft)"}`,
        borderRadius: 2,
        transition: "color 200ms, border-color 200ms, background 200ms",
        background: hover ? (pillar ? "rgba(232,161,58,0.08)" : "rgba(255,255,255,0.02)") : "transparent",
        cursor: "default",
      }}
    >
      {s.name}
    </span>
  );
}

// A single planet with its moons. The planet is the engineer; each moon a domain.
// No center monogram. Planet is a clean filled circle with subtle limb shading
// and a faint atmospheric glow. Moons orbit at different speeds with skill labels.
function SkillCloud() {
  const ref = useRef(null);
  const [t, setT] = useState(0);
  useEffect(() => {
    let raf;
    let last = performance.now();
    const tick = (now) => {
      setT((x) => x + (now - last) / 1000);
      last = now;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const W = 520, H = 520;
  const cx = W / 2, cy = H / 2;
  const tilt = 0.62;

  // The planet — geometric, filled, slight limb gradient. NO label inside.
  const planetR = 64;

  // Moons. Inner one is AI (highlighted). Each moon: its own orbit + period.
  const moons = [
    { rx: 110, period:  22, phase: 0.10, size: 5,   color: C.amber,  label: "AI",           core: true  },
    { rx: 150, period:  44, phase: 0.55, size: 3.6, color: C.goldHi, label: "Architecture"  },
    { rx: 195, period:  78, phase: 0.20, size: 3.2, color: C.sage,   label: "Platform"  },
    { rx: 235, period: 130, phase: 0.78, size: 2.8, color: C.cyan,   label: "Craft"     },
  ];

  return (
    <svg ref={ref} viewBox={`0 0 ${W} ${H}`} width="100%" height="100%" style={{ display: "block" }}>
      <defs>
        <radialGradient id="planet-fill" cx="0.38" cy="0.34" r="0.78">
          <stop offset="0%"  stopColor="#3a4663" />
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

      {/* moon orbits — drawn first so the planet sits on top */}
      {moons.map((m, i) => (
        <ellipse key={`o${i}`} cx={cx} cy={cy} rx={m.rx} ry={m.rx * (1 - tilt)}
          fill="none" stroke="#3a4258" strokeWidth="0.7" opacity="0.55" />
      ))}

      {/* planet — atmosphere ring + body */}
      <circle cx={cx} cy={cy} r={planetR + 6} fill="url(#planet-atmo)" />
      <circle cx={cx} cy={cy} r={planetR} fill="url(#planet-fill)" />
      {/* equator hairline */}
      <ellipse cx={cx} cy={cy} rx={planetR} ry={planetR * 0.18}
        fill="none" stroke="rgba(232,227,212,0.06)" strokeWidth="0.6" />
      {/* terminator highlight (thin crescent of light on upper-left) */}
      <path d={`M ${cx - planetR * 0.92} ${cy - planetR * 0.18}
                 A ${planetR} ${planetR} 0 0 1 ${cx - planetR * 0.18} ${cy - planetR * 0.92}`}
        stroke="rgba(245,210,122,0.18)" strokeWidth="1" fill="none" />

      {/* moons */}
      {moons.map((m, i) => {
        const a = ((t / m.period) + m.phase) * Math.PI * 2;
        const mx = cx + m.rx * Math.cos(a);
        const my = cy + m.rx * (1 - tilt) * Math.sin(a);
        // moon is "behind" the planet when in the upper half-orbit AND close on x
        // Simple check: dim if y < cy AND |x - cx| < planetR
        const behind = my < cy && Math.abs(mx - cx) < planetR * 0.95 && Math.hypot(mx - cx, my - cy) < planetR;
        return (
          <g key={`m${i}`} opacity={behind ? 0.25 : 1} style={{ transition: "opacity 200ms" }}>
            {m.core && (
              <circle cx={mx} cy={my} r="14" fill={m.color} opacity="0.22" filter="url(#moon-soft)" />
            )}
            <circle cx={mx} cy={my} r={m.size} fill={m.color} />
            <text x={mx} y={my - m.size - 8}
              textAnchor="middle"
              fontFamily="Montserrat, sans-serif"
              fontWeight={m.core ? 600 : 500}
              fontSize={m.core ? 11 : 10}
              letterSpacing="0.32em"
              fill={m.core ? C.goldHi : C.fgMute}
              style={{ textTransform: "uppercase" }}>
              {m.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

/* =================================================================
   SELECTED WORK
   ================================================================= */
const works = [
  {
    year: "2023 — present",
    title: "Tricentis · Tosca Cloud",
    location: "Vienna",
    role: "Senior Software Engineer · Governance & Platform",
    tags: ["AI Transformation", "Nx Monorepo", "Azure DevOps"],
    note: "Technical governance and architectural validation across teams. Leading the adoption of AI-driven workflows for software quality.",
  },
  {
    year: "2019 — 2023",
    title: "Treedom",
    location: "Florence",
    role: "Senior Frontend · Tech Lead",
    tags: ["React", "Vue", "GraphQL", "MongoDB"],
    note: "Direction of the frontend team through 3x growth — recruiting, mentoring, and a full-stack modernization with focus on scalability.",
  },
  {
    year: "2017 — 2019",
    title: "Forzieri.com",
    location: "Florence",
    role: "Frontend Developer",
    tags: ["React", "Webpack", "Angular 2"],
    note: "E-commerce migration from ASP to React/Webpack and a modular Angular 2 backoffice.",
  },
  {
    year: "2007 — 2017",
    title: "Easysystem",
    location: "Figline Valdarno",
    role: "Head of Web · Full-Stack Designer",
    tags: ["Adobe Suite", "Full-stack", "Windows Server"],
    note: "Sole owner of the web department — creative direction, full-stack delivery, and Active Directory sysadmin.",
  },
];

function Work() {
  return (
    <section className="al-section" style={sec.root} id="work">
      <SectionHeader num="03" title="Selected Work" subtitle="The ones that mattered" accent={C.cyan} />
      <div style={work.list}>
        {works.map((w, i) => <WorkRow key={i} w={w} />)}
      </div>
    </section>
  );
}

function WorkRow({ w }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      className="al-work-row"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        ...work.row,
        borderTop: `1px solid ${hover ? C.gold : "var(--border)"}`,
        background: hover ? "linear-gradient(90deg, rgba(232,161,58,0.05), transparent 60%)" : "transparent",
      }}
    >
      <span className="al-w-year" style={work.year}>{w.year}</span>
      <span className="al-w-title" style={{ ...work.title, color: hover ? C.goldHi : C.parch }}>
        {w.title}
        {w.location && (
          <span style={work.location}>{w.location}</span>
        )}
      </span>
      <span className="al-w-role" style={work.role}>{w.role}</span>
      <span className="al-w-tags" style={work.tags}>
        {w.tags.map((t, i) => (
          <span key={i} style={work.tag}>{t}</span>
        ))}
      </span>
      <span className="al-w-note" style={work.note}>{w.note}</span>
    </div>
  );
}

/* =================================================================
   FOOTER
   ================================================================= */
function Footer() {
  return (
    <footer className="al-foot" style={foot.root}>
      <div style={foot.gradientBar} />
      <div className="al-foot-row" style={foot.row}>
        <span style={foot.brand}>◆ ANDREA LISI</span>
        <span style={foot.dim}>Built quietly, in Vienna.</span>
        <span style={foot.dim}>© MMXXVI</span>
      </div>
    </footer>
  );
}

/* =================================================================
   SHARED BITS
   ================================================================= */
function SectionHeader({ num, title, subtitle, accent = C.amber }) {
  return (
    <div className="al-section-header" style={shared.headerRow}>
      <div style={shared.headerLeft}>
        <span style={{ ...shared.headerNum, color: accent }}>{num}</span>
        <span style={{ ...shared.headerLine, background: `linear-gradient(90deg, ${accent}, transparent)` }} />
        <span style={shared.headerSub}>{subtitle}</span>
      </div>
      <h2 className="al-section-title" style={shared.headerTitle}>{title}</h2>
    </div>
  );
}

function SocialLink({ label }) {
  const [hover, setHover] = useState(false);
  return (
    <a
      href="#"
      onClick={(e) => e.preventDefault()}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        fontFamily: "Montserrat, sans-serif",
        fontSize: 11,
        fontWeight: 500,
        letterSpacing: "0.32em",
        textTransform: "uppercase",
        color: hover ? C.goldHi : C.fgMute,
        borderBottom: hover ? `1px solid ${C.gold}` : "1px solid transparent",
        paddingBottom: 3,
        textDecoration: "none",
        transition: "color 200ms, border-color 200ms",
      }}
    >
      {label}
    </a>
  );
}

function Sep() {
  return <span style={{ color: C.fgDim, margin: "0 18px", fontSize: 10 }}>◆</span>;
}

// A curved, non-linear gradient sweep under the wordmark.
// Two stacked bezier curves with the amber→sage→cyan palette, soft blur on one,
// crisp on the other. Replaces the per-letter rainbow without losing the palette.
function GradientArc() {
  return (
    <svg viewBox="0 0 600 60" width="min(560px, 80vw)" height="56"
      style={{ display: "block", marginTop: 22, overflow: "visible" }}>
      <defs>
        <linearGradient id="arc-grad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor={C.amber}  stopOpacity="0" />
          <stop offset="14%"  stopColor={C.amber}  stopOpacity="1" />
          <stop offset="38%"  stopColor={C.goldHi} stopOpacity="1" />
          <stop offset="58%"  stopColor={C.sage}   stopOpacity="1" />
          <stop offset="82%"  stopColor={C.cyan}   stopOpacity="1" />
          <stop offset="100%" stopColor={C.cyan}   stopOpacity="0" />
        </linearGradient>
        <filter id="arc-soft" x="-10%" y="-50%" width="120%" height="200%">
          <feGaussianBlur stdDeviation="6" />
        </filter>
      </defs>
      {/* halo blur */}
      <path
        d="M 20 32 C 160 4, 280 56, 360 26 S 540 8, 580 30"
        stroke="url(#arc-grad)" strokeWidth="6" fill="none"
        filter="url(#arc-soft)" opacity="0.55"
      />
      {/* crisp curve */}
      <path
        d="M 20 32 C 160 4, 280 56, 360 26 S 540 8, 580 30"
        stroke="url(#arc-grad)" strokeWidth="1.3" fill="none"
      />
      {/* tiny terminal dots */}
      <circle cx="20" cy="32" r="2" fill={C.amber} opacity="0.6" />
      <circle cx="580" cy="30" r="2" fill={C.cyan}  opacity="0.6" />
    </svg>
  );
}

function ScrollHint() {  return (
    <div style={shared.scrollHint}>
      <span style={shared.scrollLine} />
      <span style={shared.scrollText}>SCROLL</span>
    </div>
  );
}

function CornerMarks() {
  const m = { position: "fixed", width: 14, height: 14, opacity: 0.5, zIndex: 50, pointerEvents: "none" };
  return (
    <>
      <div style={{ ...m, top: 22, left: 22, borderTop: `1px solid ${C.dim}`, borderLeft: `1px solid ${C.dim}` }} />
      <div style={{ ...m, top: 22, right: 22, borderTop: `1px solid ${C.dim}`, borderRight: `1px solid ${C.dim}` }} />
      <div style={{ ...m, bottom: 22, left: 22, borderBottom: `1px solid ${C.dim}`, borderLeft: `1px solid ${C.dim}` }} />
      <div style={{ ...m, bottom: 22, right: 22, borderBottom: `1px solid ${C.dim}`, borderRight: `1px solid ${C.dim}` }} />
    </>
  );
}

/* =================================================================
   APP ROOT
   ================================================================= */
function Portfolio() {
  const [tweaks, setTweaks] = useState({ sunStyle: "pulse" });
  const [panelOpen, setPanelOpen] = useState(false);

  useEffect(() => {
    const onMsg = (e) => {
      const d = e.data || {};
      if (d.type === "__activate_edit_mode") setPanelOpen(true);
      if (d.type === "__deactivate_edit_mode") setPanelOpen(false);
    };
    window.addEventListener("message", onMsg);
    window.parent.postMessage({ type: "__edit_mode_available" }, "*");
    return () => window.removeEventListener("message", onMsg);
  }, []);

  return (
    <div style={app.root}>
      <CornerMarks />
      <Hero sunStyle={tweaks.sunStyle} />
      <About />
      <Skills />
      <Work />
      <Footer />
      {panelOpen && (
        <SunTweakPanel
          value={tweaks.sunStyle}
          onChange={(v) => setTweaks((t) => ({ ...t, sunStyle: v }))}
          onClose={() => {
            setPanelOpen(false);
            window.parent.postMessage({ type: "__edit_mode_dismissed" }, "*");
          }}
        />
      )}
    </div>
  );
}

function SunTweakPanel({ value, onChange, onClose }) {
  const opts = [
    { id: "soft",    label: "Soft halo",     desc: "Default — warm glow, no rays" },
    { id: "corona",  label: "Corona",        desc: "Radial rays, Sun-like" },
    { id: "ring",    label: "Chromatic ring",desc: "Saturn-style equatorial ring (amber→cyan)" },
    { id: "pulse",   label: "Pulse",         desc: "Slow breathing halo" },
    { id: "minimal", label: "Minimal",       desc: "Just the core, no halo" },
  ];
  return (
    <div className="al-tweak-panel" style={panel.root}>
      <div style={panel.header}>
        <span style={panel.title}>Tweaks — Sun</span>
        <button onClick={onClose} style={panel.close}>×</button>
      </div>
      <div style={panel.body}>
        {opts.map((o) => (
          <button key={o.id}
            onClick={() => onChange(o.id)}
            style={{
              ...panel.opt,
              borderColor: value === o.id ? C.gold : "var(--border)",
              background: value === o.id ? "rgba(232,161,58,0.08)" : "transparent",
            }}>
            <div style={panel.optLabel}>{o.label}</div>
            <div style={panel.optDesc}>{o.desc}</div>
          </button>
        ))}
      </div>
    </div>
  );
}

/* =================================================================
   STYLES
   ================================================================= */
const app = {
  root: {
    background: "var(--bg)",
    color: C.fg,
    fontFamily: "Montserrat, sans-serif",
    minHeight: "100vh",
    overflowX: "hidden",
  },
};

const hero = {
  root: {
    position: "relative",
    minHeight: "100vh",
    background: "radial-gradient(ellipse at 50% 35%, #11142a 0%, #0a0c17 65%, #05060b 100%)",
    paddingTop: 56,
    paddingBottom: 80,
    overflow: "hidden",
  },
  topMeta: {
    display: "flex",
    justifyContent: "space-between",
    padding: "0 80px",
    fontFamily: "Montserrat, sans-serif",
    fontSize: 10,
    fontWeight: 500,
    letterSpacing: "0.42em",
    color: C.fgDim,
    textTransform: "uppercase",
  },
  systemWrap: {
    position: "relative",
    width: "100%",
    height: "min(620px, 60vh)",
    marginTop: 30,
  },
  compose: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    padding: "0 24px",
    marginTop: 20,
  },
  eyebrow: {
    fontFamily: "Montserrat, sans-serif",
    fontSize: 10,
    fontWeight: 500,
    letterSpacing: "0.5em",
    color: C.fgDim,
    marginBottom: 28,
  },
  welcome: {
    margin: "0 0 18px",
    fontFamily: "Montserrat, sans-serif",
    fontWeight: 300,
    fontSize: "clamp(28px, 3.6vw, 44px)",
    color: C.parch,
    letterSpacing: "-0.005em",
    lineHeight: 1.15,
  },
  welcomeEm: {
    fontStyle: "italic",
    fontWeight: 400,
    background: `linear-gradient(95deg, ${C.amber} 0%, ${C.goldHi} 30%, ${C.sage} 60%, ${C.cyan} 100%)`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    color: "transparent",
  },
  name: {
    margin: 0,
    fontFamily: "Montserrat, sans-serif",
    fontWeight: 600,
    fontSize: "clamp(28px, 3.4vw, 44px)",
    letterSpacing: "0.32em",
    textTransform: "uppercase",
    color: C.parch,
    lineHeight: 1,
  },
  surname: {
    fontFamily: "Montserrat, sans-serif",
    fontWeight: 500,
    fontSize: 13,
    letterSpacing: "0.42em",
    textTransform: "uppercase",
    color: C.fgMute,
    marginTop: 14,
  },
  role: {
    marginTop: 28,
    fontFamily: "Montserrat, sans-serif",
    fontSize: 16,
    fontWeight: 400,
    color: C.fg,
    letterSpacing: "0.04em",
  },
  roleSep: { color: C.fgDim, margin: "0 4px" },
  roleSub: { color: C.fgMute, fontStyle: "italic", fontWeight: 300 },
  links: {
    marginTop: 38,
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "center",
  },
};

const sec = {
  root: {
    maxWidth: 1280,
    margin: "0 auto",
    padding: "120px 80px",
    position: "relative",
  },
};

const shared = {
  headerRow: {
    display: "flex",
    flexDirection: "column",
    gap: 16,
    marginBottom: 72,
  },
  headerLeft: {
    display: "flex",
    alignItems: "center",
    gap: 18,
  },
  headerNum: {
    fontFamily: "Montserrat, sans-serif",
    fontSize: 12,
    fontWeight: 600,
    letterSpacing: "0.3em",
    color: C.amber,
  },
  headerLine: {
    flex: "0 0 80px",
    height: 1,
    background: `linear-gradient(90deg, ${C.dim}, transparent)`,
  },
  headerSub: {
    fontFamily: "Montserrat, sans-serif",
    fontSize: 11,
    fontWeight: 400,
    letterSpacing: "0.3em",
    color: C.fgDim,
    textTransform: "uppercase",
  },
  headerTitle: {
    fontFamily: "Montserrat, sans-serif",
    fontWeight: 700,
    fontSize: "clamp(40px, 5vw, 64px)",
    letterSpacing: "-0.01em",
    color: C.parch,
    margin: 0,
    textTransform: "none",
  },
  scrollHint: {
    position: "absolute",
    bottom: 30,
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 12,
  },
  scrollLine: {
    width: 1,
    height: 36,
    background: `linear-gradient(180deg, transparent, ${C.dim})`,
  },
  scrollText: {
    fontFamily: "Montserrat, sans-serif",
    fontSize: 9,
    fontWeight: 500,
    letterSpacing: "0.42em",
    color: C.fgDim,
  },
};

const about = {
  body: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 48,
    alignItems: "start",
  },
  lead: {
    fontFamily: "Montserrat, sans-serif",
    fontSize: 22,
    lineHeight: 1.5,
    fontWeight: 300,
    color: C.parch,
    margin: 0,
    textWrap: "pretty",
  },
  hl: {
    color: C.goldHi,
    fontWeight: 500,
    background: "linear-gradient(180deg, transparent 60%, rgba(232,161,58,0.18) 60%)",
    padding: "0 4px",
  },
  body2: {
    fontFamily: "Montserrat, sans-serif",
    fontSize: 16,
    lineHeight: 1.65,
    fontWeight: 300,
    color: C.fgMute,
    margin: 0,
    textWrap: "pretty",
  },
  metaRow: {
    gridColumn: "1 / -1",
    marginTop: 24,
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 24,
    paddingTop: 32,
    borderTop: "1px solid var(--border)",
  },
  meta: { display: "flex", flexDirection: "column", gap: 6 },
  metaK: {
    fontFamily: "Montserrat, sans-serif",
    fontSize: 10,
    fontWeight: 500,
    letterSpacing: "0.32em",
    textTransform: "uppercase",
    color: C.fgDim,
  },
  metaV: {
    fontFamily: "Montserrat, sans-serif",
    fontSize: 14,
    fontWeight: 400,
    color: C.parch,
  },
};

const skill = {
  layout: {
    display: "grid",
    gridTemplateColumns: "minmax(360px, 0.9fr) 1fr",
    gap: 64,
    alignItems: "center",
  },
  cloudWrap: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  cloudChart: {
    marginTop: 28,
    display: "flex",
    flexDirection: "column",
    gap: 6,
    alignItems: "center",
  },
  chartLine: {
    fontFamily: "Montserrat, sans-serif",
    fontSize: 10,
    fontWeight: 500,
    letterSpacing: "0.42em",
    textTransform: "uppercase",
    display: "flex",
    alignItems: "center",
    gap: 10,
    color: C.fgDim,
  },
  chartKey: {
    color: C.fgMute,
    fontWeight: 400,
  },
  chartVal: {
    color: C.parch,
    fontWeight: 500,
  },
  chartDot: {
    color: C.gold,
    fontWeight: 400,
    letterSpacing: 0,
  },
  list: {
    display: "flex",
    flexDirection: "column",
    gap: 36,
  },
  group: {
    paddingLeft: 18,
  },
  groupTitle: {
    fontFamily: "Montserrat, sans-serif",
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: "0.42em",
    textTransform: "uppercase",
    margin: "0 0 18px",
    display: "flex",
    alignItems: "center",
    gap: 10,
  },
  pillarTag: {
    color: C.gold,
    fontWeight: 400,
    letterSpacing: "0.32em",
    fontSize: 10,
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
    gap: 8,
  },
};

const work = {
  list: {
    display: "flex",
    flexDirection: "column",
  },
  row: {
    display: "grid",
    gridTemplateColumns: "130px 1.6fr 1.2fr 1.3fr 2.0fr",
    alignItems: "center",
    gap: 24,
    padding: "28px 12px",
    transition: "background 250ms, border-color 250ms",
  },
  year: {
    fontFamily: "Montserrat, sans-serif",
    fontSize: 12,
    fontWeight: 500,
    letterSpacing: "0.18em",
    color: C.amber,
    whiteSpace: "nowrap",
  },
  title: {
    fontFamily: "Montserrat, sans-serif",
    fontSize: 22,
    fontWeight: 600,
    letterSpacing: "-0.005em",
    transition: "color 200ms",
  },
  role: {
    fontFamily: "Montserrat, sans-serif",
    fontSize: 12,
    fontWeight: 500,
    letterSpacing: "0.32em",
    textTransform: "uppercase",
    color: C.fgDim,
  },
  tags: {
    display: "flex",
    gap: 8,
    flexWrap: "wrap",
  },
  tag: {
    fontFamily: "Montserrat, sans-serif",
    fontSize: 10,
    fontWeight: 500,
    letterSpacing: "0.18em",
    color: C.fgMute,
    border: "1px solid var(--border)",
    padding: "4px 8px",
    borderRadius: 2,
  },
  note: {
    fontFamily: "Montserrat, sans-serif",
    fontSize: 13,
    fontWeight: 300,
    color: C.fgMute,
    lineHeight: 1.5,
    textWrap: "pretty",
  },
  location: {
    display: "block",
    fontFamily: "Montserrat, sans-serif",
    fontWeight: 400,
    fontSize: 9,
    letterSpacing: "0.32em",
    color: C.fgDim,
    textTransform: "uppercase",
    marginTop: 6,
    lineHeight: 1,
  },
};

const foot = {
  root: {
    borderTop: "1px solid var(--border)",
    padding: "40px 80px",
    marginTop: 80,
    position: "relative",
  },
  gradientBar: {
    position: "absolute",
    top: -1,
    left: "15%",
    right: "15%",
    height: 1,
    background: `linear-gradient(90deg, transparent 0%, ${C.amber} 20%, ${C.goldHi} 40%, ${C.sage} 60%, ${C.cyan} 80%, transparent 100%)`,
    opacity: 0.85,
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontFamily: "Montserrat, sans-serif",
    fontSize: 11,
    fontWeight: 500,
    letterSpacing: "0.32em",
    textTransform: "uppercase",
  },
  brand: { color: C.gold },
  dim: { color: C.fgDim },
};

window.Portfolio = Portfolio;

/* Tweaks panel styles */
const panel = {
  root: {
    position: "fixed",
    bottom: 24,
    right: 24,
    width: 320,
    background: "rgba(17,20,39,0.96)",
    backdropFilter: "blur(12px)",
    border: `1px solid ${C.dim}`,
    boxShadow: "0 24px 60px -20px rgba(0,0,0,0.8)",
    zIndex: 9999,
    fontFamily: "Montserrat, sans-serif",
    color: C.fg,
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "14px 18px",
    borderBottom: "1px solid var(--border)",
  },
  title: {
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: "0.32em",
    textTransform: "uppercase",
    color: C.gold,
  },
  close: {
    background: "transparent",
    border: "none",
    color: C.fgMute,
    fontSize: 20,
    cursor: "pointer",
    padding: 0,
    width: 24,
    height: 24,
  },
  body: {
    padding: 14,
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },
  opt: {
    textAlign: "left",
    padding: "12px 14px",
    border: "1px solid var(--border)",
    background: "transparent",
    color: C.fg,
    cursor: "pointer",
    fontFamily: "inherit",
    transition: "border-color 200ms, background 200ms",
  },
  optLabel: {
    fontSize: 12,
    fontWeight: 600,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    marginBottom: 4,
  },
  optDesc: {
    fontSize: 11,
    fontWeight: 400,
    color: C.fgMute,
    letterSpacing: "0.02em",
  },
};
