import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import fs from 'fs'
import path from 'path'

export default defineConfig({
  plugins: [
    tailwindcss(),
    {
      name: 'create-nojekyll',
      closeBundle() {
        // Create .nojekyll only in dist folder (for deployment)
        const distNoJekyll = path.resolve('dist', '.nojekyll')
        fs.writeFileSync(distNoJekyll, '')
        console.log('Created .nojekyll file in dist folder')
      }
    }
  ],
  base: '/login-page-task/',
})