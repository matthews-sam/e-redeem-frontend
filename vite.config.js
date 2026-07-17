import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/e-redeem-frontend/',
  plugins: [react(), tailwindcss()],
  optimizeDeps: {
    include: ['embla-carousel-react', 'embla-carousel', 'lucide-react'],
  },
})
