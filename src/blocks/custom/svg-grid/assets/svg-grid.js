import App from './app.svelte';

export class SvgGrid {
  constructor(defaultElement = '.js-block-svg-grid') {
    this.defaultElement = document.querySelector(defaultElement);
  }

  init() {
    const app = new App({
      target: this.defaultElement,
    });
  }
}
