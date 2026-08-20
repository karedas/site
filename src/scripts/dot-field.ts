/**
 * Move the pointer glow across the dot grid.
 *
 * Coordinates are written to two CSS variables inside a single rAF, so a
 * burst of pointermove events costs one style write per frame. Styles live
 * in src/components/dot-field.css.
 */
export function initDotField(): void {
  const field = document.querySelector<HTMLElement>('[data-dot-field]');
  if (!field) return;

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (reduce || !fine) return;

  let x = 0;
  let y = 0;
  let queued = false;

  const paint = (): void => {
    queued = false;
    field.style.setProperty('--px', `${x}px`);
    field.style.setProperty('--py', `${y}px`);
  };

  window.addEventListener(
    'pointermove',
    (e) => {
      x = e.clientX;
      y = e.clientY;
      field.classList.add('is-lit');
      if (!queued) {
        queued = true;
        requestAnimationFrame(paint);
      }
    },
    { passive: true },
  );

  window.addEventListener('pointerleave', () => field.classList.remove('is-lit'));
  document.addEventListener('mouseleave', () => field.classList.remove('is-lit'));
}
