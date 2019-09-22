import Swiper from 'swiper/dist/js/swiper.min';

export class Gallery {
  constructor(
    defaultSelector = '.js-block-gallery',
    modalSelector = '.js-block-gallery-modal',
    imageSelector = '.js-block-gallery-item',
    paginationPrevSelector = '.js-block-gallery-navigation--prev',
    paginationNextSelector = '.js-block-gallery-navigation--next',
  ) {
    this.defaultElements = document.querySelectorAll(defaultSelector);
    this.modalSelector = modalSelector;
    this.modalElements = document.querySelectorAll(this.modalSelector);
    this.imageElements = document.querySelectorAll(imageSelector);

    this.paginationPrevSelector = paginationPrevSelector;
    this.paginationNextSelector = paginationNextSelector;

    this.CLASS_IS_VISIBLE = 'is-visible';
  }

  galleryImageCallback = (e) => {
    e.currentTarget.parentNode.parentNode.querySelector(this.modalSelector).classList.add(this.CLASS_IS_VISIBLE);
  }

  galleryModalCallback = (e) => {
    e.currentTarget.classList.remove(this.CLASS_IS_VISIBLE);
  }

  // to stop modal closing when click on slider.
  stopPropagationCallback = (e) => {
    e.stopImmediatePropagation();
  }

  init() {
    this.defaultElements.forEach((el) => {
      el.addEventListener('click', this.stopPropagationCallback);
      const mySwiper = new Swiper(el, { // eslint-disable-line no-unused-vars
        init: true,
        roundLengths: true,
        speed: 350,
        effect: 'slide',
        slidesPerColumnFill: 'row',
        slidesPerView: 1,
        keyboard: {
          enabled: true,
        },
        simulateTouch: true,
        grabCursor: true,
        freeMode: false,
        breakpointsInverse: true,
        navigation: {
          nextEl: el.querySelector(this.paginationPrevSelector),
          prevEl: el.querySelector(this.paginationNextSelector),
        },
      });
    });

    this.modalElements.forEach((el) => {
      el.addEventListener('click', this.galleryModalCallback);
    });

    this.imageElements.forEach((el) => {
      el.addEventListener('click', this.galleryImageCallback);
    });
  }
}
