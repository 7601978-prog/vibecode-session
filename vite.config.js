import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // base: './' позволяет открывать сборку (dist/index.html) напрямую с диска
  // или класть в подпапку существующего сайта (например /vibecode/) без перенастройки.
  base: './',
  server: {
    port: 5174,
    open: true
  }
})
