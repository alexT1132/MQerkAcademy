import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '192.168.1.3', // Permite acceso desde otras direcciones IP
    port: 5000,      // Cambia el puerto si lo necesitas
},
})
