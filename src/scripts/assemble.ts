/**
 * The name assembles itself: each letter starts scattered a little way off,
 * then settles into place in under a second. Runs once, on load.
 *
 * The plain text is what ships; this only decorates it. Styles live in
 * src/styles/motion.css under .split-char / .assembled.
 */

function scatterInto(el: HTMLElement, spreadEm: number, spreadDeg: number): void {
  let index = 0;

  const scatter = (node: Node): void => {
    if (node.nodeType !== Node.TEXT_NODE) {
      for (const child of Array.from(node.childNodes)) scatter(child);
      return;
    }
    const text = node.textContent ?? '';
    const frag = document.createDocumentFragment();
    for (const ch of text) {
      if (ch === ' ') {
        frag.appendChild(document.createTextNode(' '));
        continue;
      }
      const span = document.createElement('span');
      span.className = 'split-char';
      span.textContent = ch;
      span.style.setProperty('--dx', `${(Math.random() - 0.5) * spreadEm}em`);
      span.style.setProperty('--dy', `${(Math.random() - 0.5) * spreadEm * 0.8}em`);
      span.style.setProperty('--dr', `${(Math.random() - 0.5) * spreadDeg}deg`);
      span.style.setProperty('--i', `${index}`);
      index += 1;
      frag.appendChild(span);
    }
    node.parentNode?.replaceChild(frag, node);
  };

  // Screen readers keep the intact text, the spans are decoration.
  el.setAttribute('aria-label', (el.textContent ?? '').trim());
  scatter(el);
  for (const span of el.querySelectorAll('.split-char')) {
    span.setAttribute('aria-hidden', 'true');
  }
}

export function initAssemble(): void {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) return;

  const hero = document.querySelector<HTMLElement>('[data-assemble]');
  if (hero) {
    scatterInto(hero, 1.4, 24);
    // Double rAF: the scattered state must paint before the settle starts.
    requestAnimationFrame(() => {
      requestAnimationFrame(() => hero.classList.add('assembled'));
    });
  }
}
