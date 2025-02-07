import js from '@eslint/js'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      'react': { version: 19.0 },
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'max-len': ['error', { code: 200 }],
      indent: ['error', 2, { ignoredNodes: ['TemplateLiteral'] }],
      'template-curly-spacing': 'off',
      'keyword-spacing': ['error', { after: true }],
      'space-before-blocks': ['error', 'always'],
      'space-before-function-paren': ['error', 'never'],
      'space-infix-ops': ['error', { int32Hint: true }],
      'key-spacing': ['error', { beforeColon: false, afterColon: true }],
      'no-console': ['error', { allow: ['error'] }],
      'object-curly-spacing': ['error', 'always', { objectsInObjects: false }],
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['error'],
      'no-invalid-this': 'off',
      '@typescript-eslint/ban-ts-ignore': 'off',
    },
  },
)
