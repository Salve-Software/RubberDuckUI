import { fixupConfigRules } from '@eslint/compat';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import importPlugin from 'eslint-plugin-import';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default defineConfig([
  {
    extends: fixupConfigRules(compat.extends('@react-native', 'prettier')),
    plugins: { import: importPlugin },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'object-curly-newline': [
        'error',
        {
          ObjectPattern: { minProperties: 4 },
        },
      ],
      'import/order': [
        'error',
        {
          groups: [
            'type',
            ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          ],
          'newlines-between': 'never',
        },
      ],
    },
  },
  {
    ignores: ['node_modules/', 'lib/'],
  },
]);
