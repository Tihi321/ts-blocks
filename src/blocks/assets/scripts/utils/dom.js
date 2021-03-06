export const domReady = (callback) => {
  return document.readyState === 'interactive' || document.readyState === 'complete' ? callback() : document.addEventListener('DOMContentLoaded', callback);
};


// Simulates jQuery chaining
export const classList = (elt) => {
  return {
    toggle(c) {
      elt.classList.toggle(c); return this;
    },
    add(c) {
      elt.classList.add(c); return this;
    },
    remove(c) {
      elt.classList.remove(c); return this;
    },
  };

};
