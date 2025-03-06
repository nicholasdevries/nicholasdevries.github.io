import nextPlugin from '@next/eslint-plugin-next'
import { tanstackConfig } from '@tanstack/eslint-config'
import reactPlugin from 'eslint-plugin-react'
import tailwind from 'eslint-plugin-tailwindcss'
import reactHooks from 'eslint-plugin-react-hooks'

/** @type {import('eslint').Linter.Config[]} */
export default [
  // Base
  ...tanstackConfig,
  // Next
  {
    plugins: {
      '@next/next': nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
    },
  },
  // React
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat['jsx-runtime'],
  { settings: { react: { version: 'detect' } } },
  reactHooks.configs['recommended-latest'],
  // Tailwind
  ...tailwind.configs['flat/recommended'],
]
