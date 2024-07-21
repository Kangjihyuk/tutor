import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Dalam file vite.config.js
  build: {
    sourcemap: true,
  },
});
