import { domReady } from '../../../assets/scripts/utils/dom';

domReady(() => {

  // -------------------------------------------------------------
  // Jobs Search App
  if (document.querySelector('.js-jobs-search')) {
    import('./jobs-search-app').then(({ JobsSearchApp }) => {
      const jobsSearchApp = new JobsSearchApp();
      jobsSearchApp.init();
    });
  }

});
