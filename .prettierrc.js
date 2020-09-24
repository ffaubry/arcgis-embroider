'use strict';

module.exports = {
  trailingComma: 'none',
  tabWidth: 2,
  singleQuote: true,
  arrowParens: 'avoid',
  printWidth: 120,
  overrides: [
    {
      files: ['*.hbs'],
      options: { parser: 'glimmer' }
    }
  ]
};
