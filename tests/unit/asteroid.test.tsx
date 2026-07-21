import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Asteroid from '@/components/react/asteroid';

describe('Asteroid', () => {
  // jsdom has no WebGL: the component must catch the renderer failure and
  // leave the (decorative, hidden) host empty instead of crashing the page.
  it('renders an aria-hidden host and survives missing WebGL', () => {
    expect(() => render(<Asteroid />)).not.toThrow();
    const host = screen.getByTestId('asteroid');
    expect(host).toHaveAttribute('aria-hidden', 'true');
    expect(host).toBeEmptyDOMElement();
  });
});
