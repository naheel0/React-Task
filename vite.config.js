import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [tailwindcss()],
  base: '/login-page-task/', // your GitHub Pages repo

  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('index.html', import.meta.url)),
        404: fileURLToPath(new URL('index.html', import.meta.url)), // fallback for GitHub Pages
      },
    },
  },
})
