import { defineConfig } from 'vite';

// Dominios externos utilizados en la aplicación:
// - https://res.cloudinary.com (Logos y recursos estáticos)
// - https://api.whatsapp.com (Enlaces de contacto y redirección)
// - https://lh3.googleusercontent.com (Imágenes de testimonios y contenido dinámico)
// - https://www.google.com (Google Maps y enlaces de búsqueda)
// - https://images.pexels.com (Imágenes de fondo/stock)
// - https://www.facebook.com (Redes sociales)
// - https://www.instagram.com (Redes sociales)
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'assets/Guia-Migratoria-Immigrant-Gateway.pdf',
          dest: '' // copia al directorio raíz de salida (dist)
        },
        {
          src: 'public/privacy.html',
          dest: '' // asegura que la Política de Privacidad esté disponible en producción
        },
        {
          src: 'public/oficina-miami.html',
          dest: '' // página de la oficina de Miami
        },
        {
          src: 'public/consulta-72h.html',
          dest: '' // página de consulta 72h
        },
        {
          src: 'public/booking.html',
          dest: '' // página de booking
        },
        {
          src: 'public/schedule.html',
          dest: '' // página de schedule
        },
        {
          src: 'public/archivo-de-verificación.html',
          dest: '' // archivo de verificación
        },
        {
          src: 'public/facebook-domain-verification.html',
          dest: '' // verificación de dominio de Facebook
        }
      ]
    })
  ],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
      }
    }
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
