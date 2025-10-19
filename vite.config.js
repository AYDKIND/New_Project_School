import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  // Use base only for production builds (GitHub Pages)
  base: command === 'build' ? '/trail-web/' : '/',
}))