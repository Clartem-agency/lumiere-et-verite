import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './', // Ajoute bien cette ligne !
  plugins: [react()],
})
