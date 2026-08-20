/**
 * Promote the deferred font stylesheet.
 *
 * The <link> ships as media="print" so the fonts request stays off the critical
 * path: as a plain stylesheet it blocks first paint by roughly a second on a
 * cold mobile connection. Once it has loaded, switching the media query to all
 * applies it without ever having held up the page.
 *
 * The sheet may already be parsed by the time this runs, in which case the load
 * event is gone and there is nothing left to wait for.
 */
export function initFonts(): void {
  const link = document.querySelector<HTMLLinkElement>('link[data-fonts]');
  if (!link) return;

  const apply = (): void => {
    link.media = 'all';
  };

  if (link.sheet) apply();
  else link.addEventListener('load', apply, { once: true });
}
