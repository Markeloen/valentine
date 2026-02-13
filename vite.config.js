import { defineConfig } from 'vite';

export default defineConfig({
  base: './', // Ensures relative paths so it works on any repo/folder
  build: {
    outDir: 'dist',
  }
});