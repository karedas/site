import { render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import SignalCanvas from '@/components/react/signal-canvas';

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

function stub2dContext() {
  const ctx = {
    clearRect: vi.fn(),
    beginPath: vi.fn(),
    moveTo: vi.fn(),
    lineTo: vi.fn(),
    stroke: vi.fn(),
    arc: vi.fn(),
    fill: vi.fn(),
    shadowColor: '',
    shadowBlur: 0,
    strokeStyle: '',
    fillStyle: '',
    lineWidth: 0,
  };
  vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue(ctx as any);
  return ctx;
}

describe('SignalCanvas', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  it('renders a decorative, non-interactive canvas', () => {
    const { container } = render(<SignalCanvas />);
    const canvas = container.querySelector('canvas');
    expect(canvas).toBeInTheDocument();
    expect(canvas).toHaveStyle({ pointerEvents: 'none' });
  });

  it('starts the animation loop when motion is allowed', () => {
    stubMatchMedia(false);
    stub2dContext();
    const rafSpy = vi
      .spyOn(globalThis, 'requestAnimationFrame')
      .mockReturnValue(1 as unknown as number);
    render(
      <div>
        <SignalCanvas />
      </div>,
    );
    expect(rafSpy).toHaveBeenCalled();
  });

  it('draws a single static frame under reduced motion (no rAF loop)', () => {
    stubMatchMedia(true);
    const ctx = stub2dContext();
    const rafSpy = vi.spyOn(globalThis, 'requestAnimationFrame');
    render(
      <div>
        <SignalCanvas />
      </div>,
    );
    expect(rafSpy).not.toHaveBeenCalled();
    expect(ctx.stroke).toHaveBeenCalled();
  });

  it('bails out gracefully when the 2D context is unavailable', () => {
    stubMatchMedia(false);
    vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue(null);
    expect(() =>
      render(
        <div>
          <SignalCanvas />
        </div>,
      ),
    ).not.toThrow();
    expect(screen.getByTestId('signal-canvas')).toBeInTheDocument();
  });
});
