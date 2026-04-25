import { act, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import TopMeta from '@/components/react/topMeta';

describe('TopMeta', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('renders the brand name', () => {
    render(<TopMeta />);
    expect(screen.getByText('ANDREA LISI')).toBeInTheDocument();
  });

  it('renders the static MMXXVI year marker', () => {
    render(<TopMeta />);
    expect(screen.getByText('MMXXVI')).toBeInTheDocument();
  });

  it('renders the TRANSMITTING label', () => {
    render(<TopMeta />);
    expect(screen.getByText('TRANSMITTING')).toBeInTheDocument();
  });

  it('renders Vienna coordinates with N/E hemispheres', () => {
    render(<TopMeta />);
    expect(screen.getByText(/N\s*48°12′\d+\.\d″/u)).toBeInTheDocument();
    expect(screen.getByText(/E\s*16°22′\d+\.\d″/u)).toBeInTheDocument();
  });

  it('renders a 6-digit hex packet counter prefixed with 0x', () => {
    render(<TopMeta />);
    expect(screen.getByText(/^0x[0-9A-F]{6}$/)).toBeInTheDocument();
  });

  it('increments the packet counter on tick', () => {
    render(<TopMeta />);
    const initial = screen.getByText(/^0x[0-9A-F]{6}$/).textContent;
    act(() => {
      vi.advanceTimersByTime(600);
    });
    const next = screen.getByText(/^0x[0-9A-F]{6}$/).textContent;
    expect(next).not.toBe(initial);
  });
});
