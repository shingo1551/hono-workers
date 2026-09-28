import { defineConfig, mergeConfig } from 'vitest/config'
import viteConfig from './vite.config.ts'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      include: ['tests/**/*.test.{ts,tsx}'],
      coverage: {
        provider: 'v8',
        include: ['app/routes/index.tsx', 'app/islands/counter.tsx'],
        reporter: ['text', 'html'],
        thresholds: {
          branches: 100,
        },
      },
    },
  })
)
