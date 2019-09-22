export class VideoPlayer {
  constructor(posterSelector = '.js-video-element-poster') {
    this.posterElements = document.querySelectorAll(posterSelector);
    this.videoSelector = '.js-video-element';

    this.HIDDEN_CLASS = 'is-hidden';
  }

  init() {
    this.posterElements.forEach((el) => {
      el.addEventListener('click', (e) => {
        const element = e.currentTarget;
        element.classList.add(this.HIDDEN_CLASS);
        element.parentElement.querySelector(this.videoSelector).play();
      });
    });
  }
}
