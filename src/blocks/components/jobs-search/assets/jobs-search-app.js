import React from 'react';
import { render } from 'react-dom';
import App from './App';

export class JobsSearchApp {
  constructor(jobsSearchAppSelector = '.js-jobs-search') {
    this.jobsSearchAppElement = document.querySelector(jobsSearchAppSelector);
  }

  init() {
    if (this.jobsSearchAppElement) {
      const { options, className } = this.jobsSearchAppElement.dataset;
      render(
        <App options={options.split(';')} className={className} />,
        this.jobsSearchAppElement
      );
    }
  }
}
