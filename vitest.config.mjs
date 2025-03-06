import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [react()],
  test: {
    include: ['src/**/*.{test,spec}.?(c|m)[jt]s?(x)'],
    exclude: ['robots.ts', 'sitemap.ts'],
    environment: 'jsdom',
    coverage: {
      all: true,
      include: ['src/**/*'],
      provider: 'v8',
      reporter: ['text'],
    },
  },
})
