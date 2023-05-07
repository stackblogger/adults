module.exports = {
  env: {
    node: true,
    es2021: true
  },
  extends: ['airbnb-base', 'airbnb-typescript/base'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json']
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'linebreak-style': 0,
    'comma-dangle': ['error', 'never'],
    'import/prefer-default-export': 'off',
    'import/export': 0
  },
  ignorePatterns: ['dist', 'node_modules', '.eslintrc.js', 'rollup.config.js', '__tests__', 'coverage']
};
