import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    }
  },
  build: {
    minify: 'terser',  // Use terser for minification
    assetsInlineLimit: 4096,  // Inline assets less than 4kb
  }
})
