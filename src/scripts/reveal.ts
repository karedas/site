/**
 * Reveal each [data-reveal] block the first time it enters the viewport.
 * Styles live in src/styles/motion.css.
 */
export function initReveal(): void {
  const blocks = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduce) {
    for (const el of blocks) el.classList.add('is-in');
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add('is-in');
          io.unobserve(e.target);
        }
      }
    },
    { threshold: 0.08, rootMargin: '0px 0px -8% 0px' },
  );
  for (const el of blocks) io.observe(el);

  // Failsafe: nothing stays hidden if the observer never fires.
  setTimeout(() => {
    for (const el of blocks) el.classList.add('is-in');
  }, 2200);
}
