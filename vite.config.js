import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/AtlasIQ/', // Base path for GitHub Pages
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://restcountries.com/v3.1',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
