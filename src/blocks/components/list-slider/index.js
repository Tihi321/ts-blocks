import Swiper from 'swiper/dist/js/swiper.min';

export class ListSlider {
  constructor(
    defaultSelectorNode = '.js-block-post-list',
    defaultPaginationSelector = '.js-block-post-list-pagination',
    type = 'selector',
    paginationType = 'bullets',
  ) {
    this.defaultSelector = defaultSelectorNode;
    this.defaultElements = (type === 'selector') ? document.querySelectorAll(defaultSelectorNode) : [defaultSelectorNode];
    this.defaultPaginationSelector = defaultPaginationSelector;
    this.paginationType = paginationType;
  }

  init() {
    this.defaultElements.forEach((el) => {
      const mySwiper = new Swiper(el, { // eslint-disable-line no-unused-vars
        init: true,
        roundLengths: true,
        speed: 350,
        effect: 'slide',
        slidesPerColumnFill: 'row',
        spaceBetween: 15,
        slidesPerView: 1,
        keyboard: {
          enabled: true,
        },
        simulateTouch: true,
        grabCursor: true,
        freeMode: false,
        breakpointsInverse: true,
        pagination: {
          el: el.querySelector(this.defaultPaginationSelector),
          type: this.paginationType,
        },
        breakpoints: {
          780: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
          1140: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
        },
      });
    });
  }
}
