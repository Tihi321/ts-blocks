export class Header {
  constructor(
    mobileTriggerElement = '.js-mobile-menu-trigger',
    mobileTriggerCloseElement = '.js-mobile-menu-close-trigger',
    headerElement = '.js-header',
    linkElement = '.main-navigation__link', // unable to change.

    IS_SCROLLING_CLASS = 'is-scrolling',
    IS_SCROLLING_DOWN_CLASS = 'is-scrolling-down',
    IS_SCROLLING_UP_CLASS = 'is-scrolling-up',
    IS_MOBILE_MENU_ACTIVE_CLASS = 'is-mobile-menu-active',
    NO_SCROLL_CLASS = 'no-scroll'
  ) {
    this.headerElement = document.querySelector(headerElement);
    this.linkElements = document.querySelectorAll(linkElement);

    this.bodyElement = document.querySelector('body');
    this.mobileTriggerElement = document.querySelector(mobileTriggerElement);
    this.mobileTriggerCloseElement = document.querySelector(mobileTriggerCloseElement);

    this.IS_SCROLLING_CLASS = IS_SCROLLING_CLASS;
    this.IS_SCROLLING_DOWN_CLASS = IS_SCROLLING_DOWN_CLASS;
    this.IS_SCROLLING_UP_CLASS = IS_SCROLLING_UP_CLASS;
    this.IS_MOBILE_MENU_ACTIVE_CLASS = IS_MOBILE_MENU_ACTIVE_CLASS;
    this.NO_SCROLL_CLASS = NO_SCROLL_CLASS;

    this.scrollPosition = window.pageYOffset;
    this.headerHeight = this.headerElement.offsetHeight;
    this.position = 0;
  }

  set scrollPosition(scrollPosition) {
    this._scrollPosition = scrollPosition;
  }

  get scrollPosition() {
    return this._scrollPosition;
  }

  checkScrolling() {
    const currentPosition = window.pageYOffset;

    if (currentPosition < this.position) {

      // Up.
      this.setScrollingUp();
      this.unsetScrollingDown();

      if (currentPosition <= this.headerHeight) {
        this.unsetScrollingUp();
        this.unsetScrolling();
      }
    } else {

      // Down.
      this.setScrolling();
      this.setScrollingDown();
      this.unsetScrollingUp();

      if (currentPosition <= this.headerHeight) {
        this.unsetScrollingDown();
        this.unsetScrolling();
      }
    }

    this.position = currentPosition;
  }

  setScrolling() {
    this.headerElement.classList.add(this.IS_SCROLLING_CLASS);
  }

  unsetScrolling() {
    this.headerElement.classList.remove(this.IS_SCROLLING_CLASS);
  }

  setScrollingDown() {
    this.headerElement.classList.add(this.IS_SCROLLING_DOWN_CLASS);
  }

  unsetScrollingDown() {
    this.headerElement.classList.remove(this.IS_SCROLLING_DOWN_CLASS);
  }

  setScrollingUp() {
    this.headerElement.classList.add(this.IS_SCROLLING_UP_CLASS);
  }

  unsetScrollingUp() {
    this.headerElement.classList.remove(this.IS_SCROLLING_UP_CLASS);
  }

  // MOBILE MENU PARTS.
  setMobileHeader() {
    this.headerElement.classList.add(this.IS_MOBILE_MENU_ACTIVE_CLASS);
    this.bodyElement.classList.add(this.NO_SCROLL_CLASS);
  }

  unsetMobileHeader() {
    this.headerElement.classList.remove(this.IS_MOBILE_MENU_ACTIVE_CLASS);
    this.bodyElement.classList.remove(this.NO_SCROLL_CLASS);
  }

  isMenuOpen() {
    return this.headerElement.classList.contains(this.IS_MOBILE_MENU_ACTIVE_CLASS);
  }

  toggleMobileMenu() {
    if (!this.isMenuOpen()) {
      this.setMobileHeader();
    } else {
      this.unsetMobileHeader();
    }
  }
}
