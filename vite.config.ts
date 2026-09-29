import build from '@hono/vite-build/cloudflare-workers'
import adapter from '@hono/vite-dev-server/cloudflare'
import tailwindcss from '@tailwindcss/vite'
import honox from 'honox/vite'
import { defineConfig, type Plugin } from 'vite'

const clientPlugin: Plugin = {
  name: 'hono-workers-vite-client',
  apply: (_config, { command, mode }) => command === 'build' && mode === 'client',
  config: () => ({
    build: {
      rollupOptions: { input: ['/app/client.ts', '/app/style.css'] },
      assetsDir: 'static',
      manifest: true
    },
    oxc: { jsx: { runtime: 'automatic', importSource: 'hono/jsx/dom' } }
  })
}

export default defineConfig({
  plugins: [
    ...honox({ devServer: { adapter } }).filter(
      (plugin) => (plugin as Plugin).name !== 'honox-vite-client'
    ),
    clientPlugin,
    tailwindcss(),
    build()
  ]
})
