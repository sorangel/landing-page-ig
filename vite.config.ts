import { defineConfig } from 'vite';
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
          src: 'privacy.html',
          dest: '' // asegura que la Política de Privacidad esté disponible en producción
        }
      ]
    })
  ],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        consulta72h: 'consulta-72h.html',
      }
    }
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
