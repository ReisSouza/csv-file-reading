module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    'class-methods-use-this': 'off',
    'no-unused-vars': 'off',
    'no-empty-function': 'off',
    'no-useless-constructor': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-duplicates': 'off',
    'import/no-dynamic-require': 'off',
    'import/prefer-default-export': 'off',
    'no-unreachable-loop': ['error', { ignore: ['ForInStatement', 'ForOfStatement'] }],
    'no-restricted-syntax': ['off', 'FunctionExpression', 'WithStatement', "BinaryExpression[operator='in']"],
  },
};
