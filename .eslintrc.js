/**
 * @type {import('eslint').Linter.Config}
 */
const config = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb',
    'prettier',
  ],
  globals: {
    JSX: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  overrides: [
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
      },
    },
    {
      files: ['next.config.js'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
  plugins: ['react', '@typescript-eslint'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'warn',
    '@next/next/no-img-element': 'off',
    'no-control-regex': 'off',
    'no-unused-vars': 'warn',
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
    'react/jsx-uses-react': 'off',
    'import/extensions': 'off',
    // TODO: Improve these rules to be more strict
    'operator-linebreak': 'off',
    'implicit-arrow-linebreak': 'off',
    'react/require-default-props': 'off',
    'jsx-a11y/media-has-caption': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'consistent-return': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
  },
};

module.exports = config;
