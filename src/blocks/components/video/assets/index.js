import { domReady } from '../../../assets/scripts/utils/dom';

domReady(() => {

  // -------------------------------------------------------------
  // Video Player
  if (document.querySelector('.js-video-element-poster')) {
    import('./video-player').then(({ VideoPlayer }) => {
      const videoPlayer = new VideoPlayer();
      videoPlayer.init();
    });
  }

});
