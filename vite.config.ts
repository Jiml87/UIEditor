import { defineConfig } from 'vite';
// @ts-ignore
import path from 'path';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  base: '/UIEditor/',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      // @ts-ignore
      '@': path.resolve(__dirname, './src'), // Alias for the src directory
    },
  },
});
