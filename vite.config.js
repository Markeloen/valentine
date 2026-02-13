import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        ask: resolve(__dirname, 'ask/index.html'),
        flowers: resolve(__dirname, 'flowers/index.html'),
        flowerAnim: resolve(__dirname, 'flowers/flower.html')
      }
    }
  }
});
