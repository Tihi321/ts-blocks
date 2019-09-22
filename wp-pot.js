const wpPot = require('wp-pot');

wpPot({
  destFile: 'languages/ts-blocks-php.pot',
  domain: 'ts-blocks',
  package: 'TS_Blocks',
  src: ['src/**/*.php'],
});
