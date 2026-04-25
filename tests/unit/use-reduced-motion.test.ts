import { renderHook } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { useReducedMotion } from '@/components/react/use-reduced-motion';

interface ListenerStore {
  listeners: Set<(e: MediaQueryListEvent) => void>;
}

function mockMatchMedia(matches: boolean): ListenerStore {
  const store: ListenerStore = { listeners: new Set() };
  vi.stubGlobal(
    'matchMedia',
    vi.fn((query: string) => ({
      matches,
      media: query,
      onchange: null,
      addEventListener: (_: 'change', cb: (e: MediaQueryListEvent) => void) => {
        store.listeners.add(cb);
      },
      removeEventListener: (_: 'change', cb: (e: MediaQueryListEvent) => void) => {
        store.listeners.delete(cb);
      },
      addListener: vi.fn(),
      removeListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  );
  return store;
}

describe('useReducedMotion', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('returns false when prefers-reduced-motion does not match', () => {
    mockMatchMedia(false);
    const { result } = renderHook(() => useReducedMotion());
    expect(result.current).toBe(false);
  });

  it('returns true when prefers-reduced-motion matches', () => {
    mockMatchMedia(true);
    const { result } = renderHook(() => useReducedMotion());
    expect(result.current).toBe(true);
  });

  it('cleans up its listener on unmount', () => {
    const store = mockMatchMedia(false);
    const { unmount } = renderHook(() => useReducedMotion());
    expect(store.listeners.size).toBe(1);
    unmount();
    expect(store.listeners.size).toBe(0);
  });
});
