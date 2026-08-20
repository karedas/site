import { describe, expect, it } from 'vitest';
import {
  type FieldConfig,
  linkPairs,
  makeNodes,
  type Pointer,
  step,
} from '@/scripts/field-physics';

const cfg: FieldConfig = { count: 12, strungCount: 4, anchor: { x: 0.5, y: 0.7 } };

/** Deterministic pseudo-random for repeatable layouts. */
function seeded(): () => number {
  let s = 42;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

const still: Pointer = { x: 0, y: 0, active: false };

describe('makeNodes', () => {
  it('creates the requested number of nodes, strung ones first', () => {
    const nodes = makeNodes(cfg, seeded());
    expect(nodes).toHaveLength(12);
    expect(nodes.slice(0, 4).every((n) => n.strung)).toBe(true);
    expect(nodes.slice(4).every((n) => !n.strung)).toBe(true);
  });

  it('keeps every node inside unit space', () => {
    const nodes = makeNodes(cfg, seeded());
    for (const n of nodes) {
      expect(n.hx).toBeGreaterThanOrEqual(0);
      expect(n.hx).toBeLessThanOrEqual(1);
      expect(n.hy).toBeGreaterThanOrEqual(0);
      expect(n.hy).toBeLessThanOrEqual(1);
    }
  });

  it('hangs strung nodes above the anchor', () => {
    const nodes = makeNodes(cfg, seeded());
    for (const n of nodes.slice(0, 4)) {
      expect(n.hy).toBeLessThan(cfg.anchor.y);
    }
  });
});

describe('step', () => {
  it('stays near home when nothing disturbs it', () => {
    const nodes = makeNodes(cfg, seeded());
    for (let i = 0; i < 300; i++) step(nodes, i / 60, 1 / 60, still);
    for (const n of nodes) {
      expect(Math.abs(n.x - n.hx)).toBeLessThan(0.05);
      expect(Math.abs(n.y - n.hy)).toBeLessThan(0.05);
    }
  });

  it('pushes nodes away from the pointer, then settles back', () => {
    const nodes = makeNodes(cfg, seeded());
    const target = nodes[0];
    if (!target) throw new Error('no node');

    const pointer: Pointer = { x: target.hx + 0.02, y: target.hy, active: true };
    for (let i = 0; i < 60; i++) step(nodes, i / 60, 1 / 60, pointer);
    const displaced = Math.abs(target.x - target.hx);
    expect(displaced).toBeGreaterThan(0.005);

    for (let i = 60; i < 600; i++) step(nodes, i / 60, 1 / 60, still);
    expect(Math.abs(target.x - target.hx)).toBeLessThan(0.05);
  });
});

describe('linkPairs', () => {
  it('links only nodes that rest near each other', () => {
    const nodes = makeNodes(cfg, seeded());
    const pairs = linkPairs(nodes, 0.25);
    for (const [a, b] of pairs) {
      const na = nodes[a];
      const nb = nodes[b];
      if (!na || !nb) throw new Error('bad pair');
      const d = Math.hypot(na.hx - nb.hx, na.hy - nb.hy);
      expect(d).toBeLessThan(0.25);
    }
  });
});
