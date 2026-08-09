/**
 * Short entrances, once per element, on first viewport entry.
 * Styles live in src/styles/motion.css under [data-rv].
 */
export function initReveal(): void {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const blocks = Array.from(document.querySelectorAll<HTMLElement>('[data-rv]'));

  if (reduce) {
    for (const el of blocks) el.classList.add('rv-in');
    return;
  }

  // Sibling stagger, capped so late blocks never feel sluggish.
  for (const el of blocks) {
    const parent = el.parentElement;
    if (!parent) continue;
    const sibs = Array.from(parent.children).filter((c) => c.hasAttribute('data-rv'));
    const k = sibs.indexOf(el);
    if (k > 0) el.style.transitionDelay = `${Math.min(k * 0.05, 0.25)}s`;
  }

  const rv = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add('rv-in');
          rv.unobserve(e.target);
        }
      }
    },
    { threshold: 0.1 },
  );
  for (const el of blocks) rv.observe(el);

  // Failsafe: nothing stays hidden if the observer never fires.
  setTimeout(() => {
    for (const el of blocks) el.classList.add('rv-in');
  }, 1400);
}
