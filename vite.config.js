import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import fs from 'fs'
import path from 'path'

export default defineConfig({
  plugins: [
    tailwindcss(),
    {
      name: 'create-nojekyll',
      buildStart() {
        // Create in project root
        const rootNoJekyll = path.resolve('.nojekyll')
        if (!fs.existsSync(rootNoJekyll)) {
          fs.writeFileSync(rootNoJekyll, '')
        }
      },
      closeBundle() {
        // Create in dist folder
        const distNoJekyll = path.resolve('dist', '.nojekyll')
        fs.writeFileSync(distNoJekyll, '')
        console.log('Created .nojekyll files')
      }
    }
  ],
  base: '/login-page-task/',
})