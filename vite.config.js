import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: false,
    allowedHosts: ['7dc2e8f5-1749-4d9c-a29b-a501e1a1be99-00-h1fr7aj0hq8v.kirk.replit.dev', 'localhost', '127.0.0.1'],
    hmr: {
      port: 443,
      clientPort: 443
    }
  }
});