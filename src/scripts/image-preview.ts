/** Native dialog provides modal focus containment, background inertness and Escape. */
export function initImagePreview(): void {
  const dialog = document.querySelector<HTMLDialogElement>('#project-image-preview');
  const image = dialog?.querySelector<HTMLImageElement>('[data-preview-image]');
  const caption = dialog?.querySelector<HTMLElement>('[data-preview-caption]');
  const zoom = dialog?.querySelector<HTMLButtonElement>('[data-preview-zoom]');
  const viewport = dialog?.querySelector<HTMLElement>('.image-preview-viewport');
  if (!dialog || !image || !caption || !zoom || !viewport) return;
  let opener: HTMLButtonElement | undefined;

  const setZoom = (expanded: boolean): void => {
    dialog.classList.toggle('is-zoomed', expanded);
    zoom.setAttribute('aria-pressed', String(expanded));
    zoom.textContent = (expanded ? zoom.dataset.fitLabel : zoom.dataset.zoomLabel) ?? '';
    viewport.scrollTo(0, 0);
  };

  for (const trigger of document.querySelectorAll<HTMLButtonElement>('[data-preview-open]')) {
    const thumbnail = trigger.querySelector('img');
    if (!thumbnail) continue;
    // With scripting disabled the screenshots remain visible, without dead controls.
    trigger.disabled = false;
    trigger.addEventListener('click', () => {
      opener = trigger;
      image.src = thumbnail.src;
      image.alt = thumbnail.alt;
      image.width = Number(thumbnail.getAttribute('width'));
      image.height = Number(thumbnail.getAttribute('height'));
      caption.textContent = thumbnail.alt;
      setZoom(false);
      dialog.showModal();
      document.documentElement.classList.add('image-preview-open');
    });
  }
  zoom.addEventListener('click', () => setZoom(zoom.getAttribute('aria-pressed') !== 'true'));
  dialog.addEventListener('click', (event) => {
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (
      event.clientX < rect.left ||
      event.clientX > rect.right ||
      event.clientY < rect.top ||
      event.clientY > rect.bottom
    )
      dialog.close();
  });
  dialog.addEventListener('close', () => {
    document.documentElement.classList.remove('image-preview-open');
    setZoom(false);
    opener?.focus({ preventScroll: true });
  });
}
