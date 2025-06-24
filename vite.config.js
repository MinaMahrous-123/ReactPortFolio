import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/ReactPortFolio/', // ← مهم جداً علشان يعرف يشتغل على GitHub Pages
  plugins: [react()],
})

