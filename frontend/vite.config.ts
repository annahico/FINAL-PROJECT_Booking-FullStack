import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  base: '/FINAL-PROJECT_Booking-FullStack/' // Cambia <nombre-del-repo> por el nombre de tu repositorio de GitHub
});
