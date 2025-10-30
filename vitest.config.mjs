import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [react()],
  test: {
    include: ['src/**/*.{test,spec}.{js,ts,jsx,tsx}'],
    exclude: ['node_modules', 'dist', 'robots.ts', 'sitemap.ts'],
    environment: 'jsdom',
    coverage: {
      all: true,
      include: ['src/**/*.{js,ts,jsx,tsx}'],
      provider: 'v8',
      reporter: ['text', 'html'],
    },
  },
})
