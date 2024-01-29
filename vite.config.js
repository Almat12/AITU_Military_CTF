import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  host: '10.1.14.35',
  port: 80,
  plugins: [vue()],
})
