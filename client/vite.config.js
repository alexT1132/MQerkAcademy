import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
<<<<<<< Updated upstream
    host: '192.168.1.22', // Permite acceso desde otras direcciones IP
=======
    host: '192.168.0.19', // Permite acceso desde otras direcciones IP
>>>>>>> Stashed changes
    port: 5000,      // Cambia el puerto si lo necesitas
},
})
