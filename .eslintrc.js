/**
 * @type {import('eslint').Linter.Config}
 */
const config = {
  env: {
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'warn',
    'no-unused-vars': 'warn',
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
  },
};

module.exports = config;
