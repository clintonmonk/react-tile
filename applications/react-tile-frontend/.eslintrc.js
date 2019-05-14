// eslint-disable-next-line import/no-extraneous-dependencies
const typescriptEslint = require('@typescript-eslint/eslint-plugin');

const typescriptRules = Object.assign(typescriptEslint.configs.recommended.rules, {
  '@typescript-eslint/indent': ['error', 2],
});

module.exports = {
  env: { browser: true },
  extends: ['airbnb'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      plugins: ['@typescript-eslint'],
      parser: '@typescript-eslint/parser',
      rules: typescriptRules,
      settings: {
        'import/resolver': {
          node: {
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
          },
        },
        'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  ],
};
