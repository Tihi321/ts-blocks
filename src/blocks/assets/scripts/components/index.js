import { media } from '../utils/media';

// -------------------------------------------------------------
// Main Navigation / Sticky Header
if (document.querySelector('.js-header')) {
  import('./header').then(({ Header }) => {
    const header = new Header();
    header.checkScrolling();

    document.addEventListener('scroll', () => {
      header.checkScrolling();
    }, {
      capture: true,
      passive: true,
    });

    header.mobileTriggerElement.addEventListener('click', (ev) => {
      ev.preventDefault();
      header.toggleMobileMenu();
    });

    header.mobileTriggerCloseElement.addEventListener('click', (ev) => {
      ev.preventDefault();
      header.toggleMobileMenu();
    });

    header.linkElements.forEach((el) => {
      el.addEventListener('click', () => {
        header.unsetMobileHeader();
      });
    });

    window.addEventListener('resize', () => {
      if (header.isMenuOpen() && window.innerWidth > media.tablet) {
        header.unsetMobileHeader();
      }
    });

  });
}

