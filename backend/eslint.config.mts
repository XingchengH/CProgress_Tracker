// eslint.config.mts
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';
import globals from 'globals';

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tseslint.parser,
      sourceType: 'module',
      parserOptions: {
        // 如果你有 tsconfig 严格类型规则，可改为 project 指定 tsconfig 路径
        project: false
      },
      globals: {
        ...globals.node,
        ...globals.es2024
      }
    },
    plugins: {
      prettier: prettierPlugin
    },
    rules: {
      'prettier/prettier': 'error',
      'no-console': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }
      ]
    }
  },
  // 这会在最后关掉所有与 Prettier 冲突的 ESLint 规则
  prettierConfig,
  {
    ignores: ['dist', 'node_modules', '**/*.d.ts']
  }
);
