// vite.config.ts
import { defineConfig } from "file:///C:/Users/damel/OneDrive/Documentos/GitHub/landing-page-ig/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/damel/OneDrive/Documentos/GitHub/landing-page-ig/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { viteStaticCopy } from "file:///C:/Users/damel/OneDrive/Documentos/GitHub/landing-page-ig/node_modules/vite-plugin-static-copy/dist/index.js";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: "assets/Guia-Migratoria-Immigrant-Gateway.pdf",
          dest: ""
          // copia al directorio raíz de salida (dist)
        },
        {
          src: "public/privacy.html",
          dest: ""
          // asegura que la Política de Privacidad esté disponible en producción
        },
        {
          src: "public/oficina-miami.html",
          dest: ""
          // página de la oficina de Miami
        },
        {
          src: "public/consulta-72h.html",
          dest: ""
          // página de consulta 72h
        },
        {
          src: "public/booking.html",
          dest: ""
          // página de booking
        },
        {
          src: "public/schedule.html",
          dest: ""
          // página de schedule
        },
        {
          src: "public/archivo-de-verificaci\xF3n.html",
          dest: ""
          // archivo de verificación
        },
        {
          src: "public/facebook-domain-verification.html",
          dest: ""
          // verificación de dominio de Facebook
        }
      ]
    })
  ],
  build: {
    rollupOptions: {
      input: {
        main: "index.html"
      }
    }
  },
  optimizeDeps: {
    exclude: ["lucide-react"]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxkYW1lbFxcXFxPbmVEcml2ZVxcXFxEb2N1bWVudG9zXFxcXEdpdEh1YlxcXFxsYW5kaW5nLXBhZ2UtaWdcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXGRhbWVsXFxcXE9uZURyaXZlXFxcXERvY3VtZW50b3NcXFxcR2l0SHViXFxcXGxhbmRpbmctcGFnZS1pZ1xcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvZGFtZWwvT25lRHJpdmUvRG9jdW1lbnRvcy9HaXRIdWIvbGFuZGluZy1wYWdlLWlnL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XHJcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XHJcbmltcG9ydCB7IHZpdGVTdGF0aWNDb3B5IH0gZnJvbSAndml0ZS1wbHVnaW4tc3RhdGljLWNvcHknO1xyXG5cclxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBwbHVnaW5zOiBbXHJcbiAgICByZWFjdCgpLFxyXG4gICAgdml0ZVN0YXRpY0NvcHkoe1xyXG4gICAgICB0YXJnZXRzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgc3JjOiAnYXNzZXRzL0d1aWEtTWlncmF0b3JpYS1JbW1pZ3JhbnQtR2F0ZXdheS5wZGYnLFxyXG4gICAgICAgICAgZGVzdDogJycgLy8gY29waWEgYWwgZGlyZWN0b3JpbyByYVx1MDBFRHogZGUgc2FsaWRhIChkaXN0KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgc3JjOiAncHVibGljL3ByaXZhY3kuaHRtbCcsXHJcbiAgICAgICAgICBkZXN0OiAnJyAvLyBhc2VndXJhIHF1ZSBsYSBQb2xcdTAwRUR0aWNhIGRlIFByaXZhY2lkYWQgZXN0XHUwMEU5IGRpc3BvbmlibGUgZW4gcHJvZHVjY2lcdTAwRjNuXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBzcmM6ICdwdWJsaWMvb2ZpY2luYS1taWFtaS5odG1sJyxcclxuICAgICAgICAgIGRlc3Q6ICcnIC8vIHBcdTAwRTFnaW5hIGRlIGxhIG9maWNpbmEgZGUgTWlhbWlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHNyYzogJ3B1YmxpYy9jb25zdWx0YS03MmguaHRtbCcsXHJcbiAgICAgICAgICBkZXN0OiAnJyAvLyBwXHUwMEUxZ2luYSBkZSBjb25zdWx0YSA3MmhcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHNyYzogJ3B1YmxpYy9ib29raW5nLmh0bWwnLFxyXG4gICAgICAgICAgZGVzdDogJycgLy8gcFx1MDBFMWdpbmEgZGUgYm9va2luZ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgc3JjOiAncHVibGljL3NjaGVkdWxlLmh0bWwnLFxyXG4gICAgICAgICAgZGVzdDogJycgLy8gcFx1MDBFMWdpbmEgZGUgc2NoZWR1bGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHNyYzogJ3B1YmxpYy9hcmNoaXZvLWRlLXZlcmlmaWNhY2lcdTAwRjNuLmh0bWwnLFxyXG4gICAgICAgICAgZGVzdDogJycgLy8gYXJjaGl2byBkZSB2ZXJpZmljYWNpXHUwMEYzblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgc3JjOiAncHVibGljL2ZhY2Vib29rLWRvbWFpbi12ZXJpZmljYXRpb24uaHRtbCcsXHJcbiAgICAgICAgICBkZXN0OiAnJyAvLyB2ZXJpZmljYWNpXHUwMEYzbiBkZSBkb21pbmlvIGRlIEZhY2Vib29rXHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9KVxyXG4gIF0sXHJcbiAgYnVpbGQ6IHtcclxuICAgIHJvbGx1cE9wdGlvbnM6IHtcclxuICAgICAgaW5wdXQ6IHtcclxuICAgICAgICBtYWluOiAnaW5kZXguaHRtbCcsXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIG9wdGltaXplRGVwczoge1xyXG4gICAgZXhjbHVkZTogWydsdWNpZGUtcmVhY3QnXSxcclxuICB9LFxyXG59KTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUEyVyxTQUFTLG9CQUFvQjtBQUN4WSxPQUFPLFdBQVc7QUFDbEIsU0FBUyxzQkFBc0I7QUFHL0IsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sZUFBZTtBQUFBLE1BQ2IsU0FBUztBQUFBLFFBQ1A7QUFBQSxVQUNFLEtBQUs7QUFBQSxVQUNMLE1BQU07QUFBQTtBQUFBLFFBQ1I7QUFBQSxRQUNBO0FBQUEsVUFDRSxLQUFLO0FBQUEsVUFDTCxNQUFNO0FBQUE7QUFBQSxRQUNSO0FBQUEsUUFDQTtBQUFBLFVBQ0UsS0FBSztBQUFBLFVBQ0wsTUFBTTtBQUFBO0FBQUEsUUFDUjtBQUFBLFFBQ0E7QUFBQSxVQUNFLEtBQUs7QUFBQSxVQUNMLE1BQU07QUFBQTtBQUFBLFFBQ1I7QUFBQSxRQUNBO0FBQUEsVUFDRSxLQUFLO0FBQUEsVUFDTCxNQUFNO0FBQUE7QUFBQSxRQUNSO0FBQUEsUUFDQTtBQUFBLFVBQ0UsS0FBSztBQUFBLFVBQ0wsTUFBTTtBQUFBO0FBQUEsUUFDUjtBQUFBLFFBQ0E7QUFBQSxVQUNFLEtBQUs7QUFBQSxVQUNMLE1BQU07QUFBQTtBQUFBLFFBQ1I7QUFBQSxRQUNBO0FBQUEsVUFDRSxLQUFLO0FBQUEsVUFDTCxNQUFNO0FBQUE7QUFBQSxRQUNSO0FBQUEsTUFDRjtBQUFBLElBQ0YsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLGVBQWU7QUFBQSxNQUNiLE9BQU87QUFBQSxRQUNMLE1BQU07QUFBQSxNQUNSO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLGNBQWM7QUFBQSxJQUNaLFNBQVMsQ0FBQyxjQUFjO0FBQUEsRUFDMUI7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
