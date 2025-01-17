import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts}'] },
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ignores: ['node_modules', 'dist'],
    rules: {
      'no-unused-vars': 'error', // Disallow unused variables
      'no-unused-expressions': 'error', // Disallow unused expressions
      'prefer-const': 'error', // Prefer const declarations
      'no-console': 'warn', // Warn on console usage
      'no-undef': 'error', // Disallow undefined variables
    },
  },
];
