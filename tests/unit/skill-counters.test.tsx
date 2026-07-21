import { act, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import SkillCounters from '@/components/react/skill-counters';
import { SKILL_COUNTS } from '@/data/skill-inventory';

function stubMatchMedia(matches: boolean) {
  vi.stubGlobal(
    'matchMedia',
    vi.fn(() => ({
      matches,
      media: '(prefers-reduced-motion: reduce)',
      onchange: null,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      addListener: vi.fn(),
      removeListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  );
}

describe('SkillCounters', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
    vi.useRealTimers();
  });

  it('renders the three tiers and the self-assessed meta line', () => {
    render(<SkillCounters />);
    const legend = screen.getByTestId('skill-legend');
    expect(legend).toHaveTextContent('EXPERT');
    expect(legend).toHaveTextContent('SOLID');
    expect(legend).toHaveTextContent('FAMILIAR');
    expect(legend).toHaveTextContent('SELF-ASSESSED · DISTILLED FROM 179 ITEMS · 2026');
  });

  it('starts the counters at 0 before the legend intersects', () => {
    stubMatchMedia(false);
    render(<SkillCounters />);
    const legend = screen.getByTestId('skill-legend');
    expect(legend).toHaveTextContent('0 EXPERT');
    expect(legend).toHaveTextContent('0 SOLID');
    expect(legend).toHaveTextContent('0 FAMILIAR');
  });

  it('shows the final values immediately under reduced motion', () => {
    stubMatchMedia(true);
    render(<SkillCounters />);
    const legend = screen.getByTestId('skill-legend');
    expect(legend).toHaveTextContent(`${SKILL_COUNTS.expert} EXPERT`);
    expect(legend).toHaveTextContent(`${SKILL_COUNTS.solid} SOLID`);
    expect(legend).toHaveTextContent(`${SKILL_COUNTS.familiar} FAMILIAR`);
  });

  it('observes the legend for intersection when motion is allowed', () => {
    stubMatchMedia(false);
    const observe = vi.fn();
    class SpyIntersectionObserver {
      readonly root = null;
      readonly rootMargin = '';
      readonly thresholds: readonly number[] = [];
      observe = observe;
      unobserve = vi.fn();
      disconnect = vi.fn();
      takeRecords = (): IntersectionObserverEntry[] => [];
    }
    vi.stubGlobal('IntersectionObserver', SpyIntersectionObserver);
    render(<SkillCounters />);
    expect(observe).toHaveBeenCalledTimes(1);
  });

  it('settles on the final values via the failsafe when the observer never fires', async () => {
    stubMatchMedia(false);
    vi.useFakeTimers();
    render(<SkillCounters />);
    await act(async () => {
      await vi.advanceTimersByTimeAsync(1500);
    });
    const legend = screen.getByTestId('skill-legend');
    expect(legend).toHaveTextContent(`${SKILL_COUNTS.expert} EXPERT`);
    expect(legend).toHaveTextContent(`${SKILL_COUNTS.solid} SOLID`);
    expect(legend).toHaveTextContent(`${SKILL_COUNTS.familiar} FAMILIAR`);
  });
});
