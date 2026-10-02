import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: false,
    // allow Cloudflare quick-tunnel URLs (newer Vite versions block unknown hosts)
    allowedHosts: ['.trycloudflare.com'],
  },
});
