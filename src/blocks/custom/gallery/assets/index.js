// -------------------------------------------------------------
// Gallery slider
if (document.querySelector('.js-block-gallery')) {
  import('./gallery').then(({ Gallery }) => {
    const gallery = new Gallery();
    gallery.init();
  });
}
