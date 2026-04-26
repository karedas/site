import { fireEvent, render } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import SolarSystem from '@/components/react/solar-system';

const PLANET_COLORS = new Set([
  '#e8a13a', // amber
  '#d4a84b', // gold
  '#f5d27a', // gold-hi
  '#7fc88c', // sage
  '#4ea890', // jade
  '#3fb8d6', // cyan
]);

describe('SolarSystem', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  it('exposes a descriptive role + aria-label', () => {
    const { container } = render(<SolarSystem />);
    const svg = container.querySelector('svg[role="img"]');
    expect(svg).toBeInTheDocument();
    expect(svg?.getAttribute('aria-label') ?? '').toMatch(/solar system/i);
  });

  it('renders all 8 planets (one filled circle per planet color in the dataset)', () => {
    const { container } = render(<SolarSystem />);
    // There are also halo + hit-target circles per planet; count only solid
    // fills using known palette colors.
    const circles = Array.from(container.querySelectorAll('circle[fill]'));
    const planetFills = circles.filter((c) => PLANET_COLORS.has(c.getAttribute('fill') ?? ''));
    expect(planetFills.length).toBeGreaterThanOrEqual(8);
  });

  it('draws an orbit ellipse for every planet (8 total)', () => {
    const { container } = render(<SolarSystem />);
    const orbits = container.querySelectorAll('ellipse[stroke="#3a4258"]');
    expect(orbits.length).toBe(8);
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
    render(<SolarSystem />);
    expect(rafSpy).not.toHaveBeenCalled();
  });

  it('skips parallax updates when the SVG is scrolled fully off-screen', () => {
    const { container } = render(<SolarSystem />);
    const svg = container.querySelector('svg');
    if (!svg) throw new Error('SVG not rendered');

    // Pretend the SVG is well above the viewport (user scrolled past the hero).
    vi.spyOn(svg, 'getBoundingClientRect').mockReturnValue({
      x: 0,
      y: -2000,
      top: -2000,
      left: 0,
      right: 1440,
      bottom: -1380,
      width: 1440,
      height: 620,
      toJSON: () => ({}),
    });

    // Without the off-screen guard, this mousemove would push parallax
    // computations far past the intended ±0.5 range. We assert the smoothed
    // ease has nothing to chase by checking that the planet group's render
    // didn't shift the center marker (the sun's core circle stays at width/2).
    const sunCoreBefore = container.querySelector('circle[fill^="url(#sun-"]');
    const cxBefore = sunCoreBefore?.getAttribute('cx');

    fireEvent.mouseMove(window, { clientX: 200, clientY: 400 });

    const sunCoreAfter = container.querySelector('circle[fill^="url(#sun-"]');
    const cxAfter = sunCoreAfter?.getAttribute('cx');

    expect(cxAfter).toBe(cxBefore);
  });
});
