/*
👋 Hi! This file was autogenerated by tslint-to-eslint-config.
https://github.com/typescript-eslint/tslint-to-eslint-config

It represents the closest reasonable ESLint configuration to this
project's original TSLint configuration.

We recommend eventually switching this configuration to extend from
the recommended rulesets in typescript-eslint.
https://github.com/typescript-eslint/tslint-to-eslint-config/blob/master/docs/FAQs.md

Happy linting! 💖
*/
module.exports = {
  env: {
    es6: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
  },
  'extends': ['eslint:recommended', 'plugin:import/errors', 'plugin:import/warnings', 'plugin:prettier/recommended', 'plugin:import/typescript'],
  'plugins': ['@typescript-eslint', 'import', 'unused-imports', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    '@typescript-eslint/await-thenable': 'off',
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-misused-new': 'error',
    '@typescript-eslint/no-param-reassign': 'off',
    '@typescript-eslint/no-this-alias': 'off',
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'off',
    '@typescript-eslint/no-unused-expressions': 'warn',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/quotes': 'off',
    '@typescript-eslint/semi': ['error', 'always'],
    '@typescript-eslint/strict-boolean-expressions': 'off',
    'arrow-parens': ['off', 'always'],
    'comma-dangle': [
      'error',
      {
        imports: 'always-multiline',
        objects: 'always-multiline',
        arrays: 'always-multiline',
        functions: 'never',
      },
    ],
    curly: ['error', 'multi-line'],
    'default-case': 'error',
    'eol-last': 'error',
    eqeqeq: ['off', 'smart'],
    'id-blacklist': 'off',
    'id-match': 'off',
    'max-len': [
      'error',
      {
        code: 2500,
      },
    ],
    'space-before-blocks': 'error',
    'comma-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],
    'no-cond-assign': 'error',
    'no-console': 'error',
    'no-sparse-arrays': 'error',
    'no-unreachable': 'error',
    'no-constant-condition': 'warn',
    'no-duplicate-case': 'error',
    'no-duplicate-imports': 'error',
    'no-empty': 'error',
    'no-eval': 'error',
    'no-extra-semi': 'error',
    'no-magic-numbers': 'off',
    'no-multiple-empty-lines': 'error',
    'no-new-wrappers': 'error',
    'no-return-await': 'error',
    'no-trailing-spaces': 'error',
    'no-underscore-dangle': 'off',
    'no-unsafe-finally': 'error',
    'no-fallthrough': 'error',
    'no-var': 'error',
    'object-shorthand': 'off',
    'no-unneeded-ternary': 'error',
    'one-var': ['off', 'never'],
    'prefer-const': [
      'error',
      {
        destructuring: 'all',
      },
    ],
    'template-curly-spacing': 'error',
    'prefer-object-spread': 'error',
    'prefer-template': 'error',
    'quote-props': ['off', 'as-needed'],
    radix: 'error',
    'key-spacing': 'error',
    'keyword-spacing': 'error',
    'func-call-spacing': 'error',
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
      },
    ],
    'brace-style': [
      'error',
      '1tbs',
      {
        allowSingleLine: true,
      },
    ],
    'spaced-comment': [
      'off',
      'always',
      {
        markers: ['/'],
      },
    ],
    'object-curly-spacing': ['error', 'always'],
    'no-undef': 'off',
    'no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'warn',
    'no-redeclare': 'error',
    'getter-return': 'warn',
    'no-prototype-builtins': 'warn',
    'require-yield': 'warn',
    'no-useless-escape': 'off',
    'no-case-declarations': 'error',
    'no-useless-catch': 'warn',
    'no-extra-boolean-cast': 'warn',
    'no-async-promise-executor': 'error',
    'import/export': 'error',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
  },
};