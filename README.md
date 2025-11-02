# Immigrant Gateway — Landing Page (Vite)

Este repositorio contiene el landing page desplegado en Vercel. Está configurado para:
- Compilar Tailwind CSS para producción (sin CDN en runtime).
- Inicializar el Píxel de Meta con una variable de entorno (VITE_META_PIXEL_ID).
- Aplicar una CSP que permite conectar con los dominios de Meta necesarios.


## 1) Requisitos
- Node.js 18+
- Vercel para despliegue (recomendado)


## 2) Píxel de Meta: cómo funciona aquí
- El snippet de Meta Pixel vive en `index.html` y utiliza una variable de entorno de Vite reemplazada en build: `%VITE_META_PIXEL_ID%`.
- En tiempo de ejecución, el script sólo inicializa `fbq` si existe un ID válido. Si falta, se muestra un warning en consola y NO se inicializa el píxel.
- La etiqueta `noscript` también usa el mismo ID para el endpoint de Facebook.

Fragmento relevante simplificado:

```html
<script>
  window.__META_PIXEL_ID__ = '%VITE_META_PIXEL_ID%';
  // ... carga de fbevents.js ...
  const PIXEL_ID = (window.__META_PIXEL_ID__ && window.__META_PIXEL_ID__ !== '%VITE_META_PIXEL_ID%')
    ? window.__META_PIXEL_ID__
    : null;
  if (PIXEL_ID) {
    fbq('init', PIXEL_ID);
    fbq('track', 'PageView');
  } else {
    console.warn('[Meta Pixel] Missing VITE_META_PIXEL_ID environment variable');
  }
</script>
<noscript>
  <img height="1" width="1" style="display:none"
       src="https://www.facebook.com/tr?id=%VITE_META_PIXEL_ID%&ev=PageView&noscript=1" />
</noscript>
```

### Configuración en Vercel
1. Entra a Vercel > tu proyecto > Settings > Environment Variables.
2. Añade la variable:
   - Name: `VITE_META_PIXEL_ID`
   - Value: tu ID real de Meta Pixel (p.ej. `123456789012345`)
   - Environments: Production (y opcionalmente Preview).
3. Guarda y haz un Redeploy del proyecto para que Vite reemplace `%VITE_META_PIXEL_ID%` en `index.html`.

### Pruebas locales
- Puedes crear un archivo `.env` en la raíz con:
  ```
  VITE_META_PIXEL_ID=123456789012345
  ```
- Ejecuta `npm run dev` y luego abre el sitio. La variable será inyectada en `index.html` durante el dev server de Vite.


## 3) Política de Seguridad de Contenido (CSP)
La CSP se define en `vercel.json` mediante encabezados personalizados. Ya incluye la directiva necesaria para el Píxel de Meta:

```
Content-Security-Policy: connect-src 'self' https://connect.facebook.net https://*.facebook.com
```

Esto permite que el píxel se comunique con los servidores de Meta. Si integras nuevos SDKs/servicios que requieran conexiones salientes, añade sus dominios a esta lista.

### Extender la CSP (ejemplos)
- Google Analytics (Measurement Protocol o gtag.js) podría requerir dominios de Google, p.ej. `https://www.google-analytics.com`.
- Hotjar, Segment u otros también tendrán sus endpoints.

Para agregar dominios:
1. Edita `vercel.json`, encuentra el header `Content-Security-Policy` y añade dominios a `connect-src` separados por espacios.
2. Haz redeploy.


## 4) Tailwind CSS en producción (sin CDN)
- Se compila a un CSS estático en `public/styles.css` mediante `npm run build:css` y Vite copia `public/` a `dist/`.
- Todas las páginas HTML (`index.html`, `booking.html`, `privacy.html`, `schedule.html`) enlazan `/<styles.css>`.
- El purgado está configurado en `tailwind.config.js` con `content: ['./*.html', './src/**/*.{js,ts,jsx,tsx}']`.

Comandos relevantes:
- `npm run build:css` → genera `public/styles.css` (minificado).
- `npm run build` → ejecuta `build:css` y luego `vite build`.


## 5) Build y Deploy
- Build local: `npm ci && npm run build`.
- La salida queda en `dist/` (Vercel sirve este directorio según `vercel.json`).
- Vite copia a `dist`:
  - `public/` (incluye `styles.css` generado y otros estáticos).
  - Páginas estáticas extra mediante `vite-plugin-static-copy` (`privacy.html`, `booking.html`, `schedule.html`, etc.).


## 6) Verificación post‑deploy
Después de cada despliegue:
- Consola del navegador: no debe aparecer `[Meta Pixel] Invalid Pixel ID: null/undefined`.
- Network: se debe cargar `https://connect.facebook.net/en_US/fbevents.js` y las conexiones a `facebook.com`/`connect.facebook.net` no deben estar bloqueadas por CSP.
- Meta Events Manager: deben verse `PageView` poco después de la carga.

Si no aparece el evento:
- Asegúrate de haber configurado `VITE_META_PIXEL_ID` en Vercel y redeployado.
- Usa el Facebook Sharing Debugger para forzar re-scrape y limpia la caché/CDN si aplica.


## 7) Mantenimiento
- Cambiar el ID del Píxel:
  - Actualiza la variable `VITE_META_PIXEL_ID` en Vercel.
  - Redeploy. No se requieren cambios de código.
- Extender CSP por nuevas integraciones:
  - Agrega los dominios necesarios en `vercel.json` (directiva `connect-src`).
  - Si la integración también carga scripts/imágenes desde orígenes externos y en el futuro defines `script-src` o `img-src`, añade también ahí los dominios.
- Depuración rápida:
  - Si ves el warning `[Meta Pixel] Missing VITE_META_PIXEL_ID environment variable`, faltó la env var o el redeploy.
  - Si la red bloquea conexiones a Meta, revisa la CSP en respuestas (Headers → Content-Security-Policy).


## 8) Notas adicionales
- La metaetiqueta de verificación de dominio de Facebook está presente en todas las páginas HTML estáticas (`index.html`, `booking.html`, `privacy.html`, `schedule.html`).
- Para limpiar estilos no usados, asegúrate de que todas las rutas/clases usadas aparezcan dentro de los globs declarados en `tailwind.config.js`.
