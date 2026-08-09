/**
 * A small constellation of nodes held on strings from a fixed anchor: the
 * drawn hand in the hero. Nodes wander gently, springs pull them home, the
 * pointer nudges them away and the system settles back.
 *
 * Holding a moving system together. Pure math, shared by the hero island
 * and its unit tests.
 */

export type FieldNode = {
  /** Rest position, unit space (0..1, y grows downward like the screen). */
  hx: number;
  hy: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  /** Wander phase, so every node breathes on its own beat. */
  phase: number;
  /** True for the nodes tied to the anchor by a string. */
  strung: boolean;
};

export type FieldConfig = {
  count: number;
  strungCount: number;
  /** String anchor in unit space: where the drawn hand sits. */
  anchor: { x: number; y: number };
};

/** Layout given a seed function (pass Math.random in production). */
export function makeNodes(cfg: FieldConfig, rand: () => number): FieldNode[] {
  const nodes: FieldNode[] = [];
  for (let i = 0; i < cfg.count; i++) {
    const strung = i < cfg.strungCount;
    const t = cfg.strungCount > 1 ? i / (cfg.strungCount - 1) : 0.5;
    // Strung nodes fan out above the anchor; the rest scatter in the sky.
    const hx = strung
      ? cfg.anchor.x + (t - 0.5) * 0.55 + (rand() - 0.5) * 0.05
      : 0.06 + rand() * 0.88;
    const hy = strung ? cfg.anchor.y - 0.34 - rand() * 0.22 : 0.06 + rand() * 0.5;
    nodes.push({
      hx: Math.min(Math.max(hx, 0.03), 0.97),
      hy: Math.min(Math.max(hy, 0.05), 0.95),
      x: hx,
      y: hy,
      vx: 0,
      vy: 0,
      phase: rand() * Math.PI * 2,
      strung,
    });
  }
  return nodes;
}

export type Pointer = { x: number; y: number; active: boolean };

/** One integration step. dt in seconds, t absolute seconds for the wander. */
export function step(nodes: FieldNode[], t: number, dt: number, pointer: Pointer): void {
  const clamped = Math.min(dt, 0.05);
  for (const n of nodes) {
    const wx = n.hx + Math.sin(t * 0.5 + n.phase) * 0.012;
    const wy = n.hy + Math.cos(t * 0.4 + n.phase * 1.3) * 0.012;

    // Spring home.
    n.vx += (wx - n.x) * 2.2 * clamped;
    n.vy += (wy - n.y) * 2.2 * clamped;

    // Pointer nudge.
    if (pointer.active) {
      const dx = n.x - pointer.x;
      const dy = n.y - pointer.y;
      const d2 = dx * dx + dy * dy;
      const radius = 0.16;
      if (d2 < radius * radius && d2 > 1e-6) {
        const d = Math.sqrt(d2);
        const push = ((radius - d) / radius) * 0.5 * clamped;
        n.vx += (dx / d) * push;
        n.vy += (dy / d) * push;
      }
    }

    // Damping keeps it calm.
    n.vx *= 0.94;
    n.vy *= 0.94;
    n.x += n.vx;
    n.y += n.vy;
  }
}

/** Pairs of node indexes to link, by rest-position proximity. */
export function linkPairs(nodes: FieldNode[], maxDist: number): Array<[number, number]> {
  const pairs: Array<[number, number]> = [];
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const a = nodes[i];
      const b = nodes[j];
      if (!a || !b) continue;
      const dx = a.hx - b.hx;
      const dy = a.hy - b.hy;
      if (dx * dx + dy * dy < maxDist * maxDist) pairs.push([i, j]);
    }
  }
  return pairs;
}
