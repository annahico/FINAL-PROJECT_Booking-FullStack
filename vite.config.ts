import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  root: './frontend', // Asegúrate de que este directorio sea correcto
  base: 'FINAL-PROJECT_Booking_Frontend/', // Asegúrate de que sea correcto para GitHub Pages
  build: {
    outDir: '../dist', // Carpeta de salida para el build
    emptyOutDir: true, // Limpiar la carpeta de salida antes de la compilación
    rollupOptions: {
      input: './index.html', // Asegúrate de que la ruta de entrada sea correcta
    },
  },
});
