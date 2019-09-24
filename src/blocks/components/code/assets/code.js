import { hljs } from '../assets/hljs';

export class Code {
  constructor(defaultSelector = '.js-block-code') {
    this.defaultElements = document.querySelectorAll(defaultSelector);
  }

  init() {
    this.defaultElements.forEach((node) => {
      hljs.highlightBlock(node);
    });
  }
}
