import { domReady } from '../../../assets/scripts/utils/dom';

domReady(() => {

  // -------------------------------------------------------------
  // Grid
  if (document.querySelector('.js-block-svg-grid')) {
    import('./svg-grid').then(({ SvgGrid }) => {
      const svgGrid = new SvgGrid();
      svgGrid.init();
    });
  }
});
