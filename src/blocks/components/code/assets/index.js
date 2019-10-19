import { domReady } from '../../../assets/scripts/utils/dom';

domReady(() => {

  // -------------------------------------------------------------
  // Code highlight
  if (document.querySelector('.js-block-code')) {
    import('./code.js').then(({ Code }) => {
      const code = new Code();
      code.init();
    });
  }

});
