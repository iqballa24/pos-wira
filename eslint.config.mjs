import { includeIgnoreFile } from '@eslint/compat';
import { FlatCompat } from '@eslint/eslintrc';
import path from 'node:path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const gitignorePath = path.resolve(__dirname, '.gitignore');

const eslintConfig = [
  includeIgnoreFile(gitignorePath),
  ...compat.config({
    plugins: ['@typescript-eslint', 'simple-import-sort', 'unused-imports'],
    extends: [
      'next',
      'next/core-web-vitals',
      'next/typescript',
      'prettier',
      'plugin:tailwindcss/recommended',
      'plugin:@typescript-eslint/recommended',
    ],
    rules: {
      'no-unused-vars': ['error'],
      'no-console': ['error'],
      'jsx-quotes': ['error', 'prefer-double'],
      '@typescript-eslint/no-explicit-any': 'warn',
      'prefer-arrow-callback': 'error',
      'react/jsx-curly-brace-presence': ['warn', { props: 'never', children: 'never' }],

      //#region  //*=========== Unused Import ===========
      '@typescript-eslint/no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'warn',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
      //#endregion  //*======== Unused Import ===========

      //#region  //*=========== Import Sort ===========
      'simple-import-sort/exports': 'warn',
      'simple-import-sort/imports': [
        'warn',
        {
          groups: [
            // Side effect imports (e.g., `import './setup'`)
            ['^\\u0000'],
            // Packages. `react` related packages first.
            ['^react', '^@?\\w'],
            // Lib, utils, and hooks
            ['^@/lib', '^@/hooks', '^@/utils'],
            // components
            ['^@/components'],
            ['^@/features'],
            // // zustand store
            ['^@/store'],
            // Other imports
            ['^@/'],
            // relative paths up until 3 level
            [
              '^\\./?$',
              '^\\.(?!/?$)',
              '^\\.\\./?$',
              '^\\.\\.(?!/?$)',
              '^\\.\\./\\.\\./?$',
              '^\\.\\./\\.\\.(?!/?$)',
              '^\\.\\./\\.\\./\\.\\./?$',
              '^\\.\\./\\.\\./\\.\\.(?!/?$)',
            ],
            ['^@/types'],
            // other that didnt fit in
            ['^'],
            // {s}css files
            ['^.+\\.s?css$'],
          ],
        },
      ],
      //#endregion  //*======== Import Sort ===========
    },
  }),
];

export default eslintConfig;
