/**
 * Card overlays on native <dialog>.
 *
 * A card face carries data-overlay-open="id"; its dialog carries that id.
 * Esc is native; backdrop click and the close button are wired here. The
 * no-JS path is handled in CSS: dialogs render inline as plain sections.
 */
export function initOverlays(): void {
  for (const opener of document.querySelectorAll<HTMLElement>('[data-overlay-open]')) {
    const id = opener.dataset.overlayOpen;
    if (!id) continue;
    const dialog = document.getElementById(id);
    if (!(dialog instanceof HTMLDialogElement)) continue;

    opener.addEventListener('click', () => {
      dialog.showModal();
    });

    dialog.addEventListener('click', (e) => {
      // A click on the backdrop lands on the dialog element itself.
      if (e.target === dialog) dialog.close();
    });

    for (const closer of dialog.querySelectorAll<HTMLElement>('[data-overlay-close]')) {
      closer.addEventListener('click', () => dialog.close());
    }
  }
}
