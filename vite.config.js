import path from "path";
import { defineConfig } from "vite";
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  root: path.resolve(__dirname, 'src'),
  build: {
    outDir: '../dist',
    emptyOutDir: false,
    rollupOptions: {
      input: {
        main: './src/index.html',
        article1: './src/article-1.html',
        article2: './src/article-2.html',
        article3: './src/article-3.html',
      }
    }
  },
  plugins: [
    viteStaticCopy({
      targets: [
        { src: path.resolve(__dirname, './public/*'), dest: 'public' }
      ]
    })
  ]
}); 