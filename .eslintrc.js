const OFF = 0 // Turn the rule off
const WRN = 1 // Turn the rule on as a warning (doesn't affect exit code)
const ERR = 2 // Turn the rule on as an error (exit code will be 1)

module.exports = {
  root: true,
  env: {
    'es6': true
  },
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended'
  ],
  plugins: [],
  reportUnusedDisableDirectives: true,
  rules: {
    'prettier/prettier': OFF,
    '@typescript-eslint/explicit-module-boundary-types': OFF,
    '@typescript-eslint/no-empty-function': OFF,
    'array-element-newline': [ERR, 'consistent'],
    'arrow-parens': [ERR, 'always'],
    'comma-dangle': [ERR, 'never'],
    'comma-spacing': [ERR, { 'before': false, 'after': true }],
    'eol-last': [WRN, 'always'],
    'eqeqeq': WRN,
    'indent': [ERR, 2, { 'SwitchCase': 1 }],
    'no-alert': OFF,
    'no-console': WRN,
    'no-multi-spaces': [ERR],
    'object-curly-spacing': [ERR, 'always'],
    'quotes': [ERR, 'single'],
    'semi': [ERR, 'never']
  }
}
