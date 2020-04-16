const prettierOptions = require('./prettier.config.js')

module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier', 'plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': ['error', prettierOptions],
  },
}
