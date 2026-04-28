import { render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import SkillCloud from '@/components/react/skill-cloud';

describe('SkillCloud', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('exposes a descriptive role + aria-label that mentions all 5 moons', () => {
    const { container } = render(<SkillCloud />);
    const svg = container.querySelector('svg[role="img"]');
    expect(svg).toBeInTheDocument();
    const label = svg?.getAttribute('aria-label') ?? '';
    for (const moon of ['Tech strategy', 'Core excellence', 'Dev enablement', 'Leadership', 'AI']) {
      expect(label).toContain(moon);
    }
  });

  it('renders one labelled <text> per moon', () => {
    render(<SkillCloud />);
    for (const moon of ['Tech strategy', 'Core excellence', 'Dev enablement', 'Leadership', 'AI']) {
      expect(screen.getByText(moon)).toBeInTheDocument();
    }
  });

  it('draws exactly 5 orbit ellipses', () => {
    const { container } = render(<SkillCloud />);
    const orbits = container.querySelectorAll('ellipse[stroke="#3a4258"]');
    expect(orbits.length).toBe(5);
  });

  it('tilts every orbit with rotate(cx cy) and keeps the AI path horizontal (0°)', () => {
    const { container } = render(<SkillCloud />);
    const orbits = Array.from(container.querySelectorAll('ellipse[stroke="#3a4258"]'));
    const transforms = orbits.map((o) => o.getAttribute('transform'));
    expect(transforms.length).toBe(5);
    for (const t of transforms) {
      expect(t).toMatch(/^rotate\(-?\d+(\.\d+)?\s+[\d.]+\s+[\d.]+\)/);
    }
    // Last orbit is AI: major axis horizontal (0°) so labels stay above/below, not to the sides.
    expect(transforms[4]).toMatch(/^rotate\(0\s/);
  });

  it('does not start the rAF loop when prefers-reduced-motion is set', () => {
    vi.stubGlobal(
      'matchMedia',
      vi.fn(() => ({
        matches: true,
        media: '(prefers-reduced-motion: reduce)',
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        addListener: vi.fn(),
        removeListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    );
    const rafSpy = vi.spyOn(globalThis, 'requestAnimationFrame');
    render(<SkillCloud />);
    expect(rafSpy).not.toHaveBeenCalled();
    rafSpy.mockRestore();
  });
});
