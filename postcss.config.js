// Other build files.
const config = require('./webpack/config');

// Load plugins for postcss.
const autoPrefixer = require('autoprefixer');
const postcssFontMagician = require('postcss-font-magician');
const cssNano = require('cssnano');

// All Plugins used in production and development build.
const plugins = [
  autoPrefixer,
  postcssFontMagician({
    variants: {
      'Roboto Condensed': {
        300: [],
        400: [],
        700: [],
      },
    },
    foundries: ['google'],
  }),
];

module.exports = () => {

  // // Use only for production build
  if (config.env === 'production') {
    plugins.push(cssNano);
  }

  return { plugins };
};
