import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // outDir par défaut = dist (pour Railway frontend service)
  server: {
    port: 5173,
    // Proxy les appels /api vers le backend Express en dev local
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      },
    },
  },
});
