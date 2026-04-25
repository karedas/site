import { act, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import Telemetry from '@/components/react/telemetry';

describe('Telemetry', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('renders the first telemetry line on mount', () => {
    render(<Telemetry />);
    expect(screen.getByText(/OBSERVED FROM EARTH/)).toBeInTheDocument();
  });

  it('cycles to the next line after the 6s interval + 280ms fade', () => {
    render(<Telemetry />);
    act(() => {
      vi.advanceTimersByTime(6000);
    });
    act(() => {
      vi.advanceTimersByTime(280);
    });
    expect(screen.getByText(/LISTENING ON 1420 MHz/)).toBeInTheDocument();
  });

  it('renders the runtime range line when the cycle reaches it', () => {
    render(<Telemetry />);
    for (let cycle = 0; cycle < 2; cycle++) {
      act(() => {
        vi.advanceTimersByTime(6000);
      });
      act(() => {
        vi.advanceTimersByTime(280);
      });
    }
    expect(screen.getByText(/RANGE: \d+\.\d{2} LY/)).toBeInTheDocument();
  });
});
