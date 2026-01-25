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
        article: './src/article.html',
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