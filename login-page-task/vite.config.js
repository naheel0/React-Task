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
        // Create .nojekyll in dist folder for GitHub Pages
        const distNoJekyll = path.resolve('dist', '.nojekyll')
        fs.writeFileSync(distNoJekyll, '')
        console.log('Created .nojekyll file in dist folder')
      }
    }
  ],
  base: '/React-Task/login-page-task/'  // <-- make sure this matches repo/folder
})
