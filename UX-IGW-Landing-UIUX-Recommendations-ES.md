# Guía de UI/UX para la Landing Page de Immigrant Gateway (IGW)

Objetivo: Convertir visitantes ansiosos en consultas agendadas reduciendo fricción cognitiva, transmitiendo calma y autoridad, y reforzando la confianza.

Principios Clave:
- Claridad sobre creatividad: layouts simples, escaneables.
- Confianza y profesionalismo: tonos sobrios, espaciado amplio, microinteracciones suaves.
- Jerarquía visual fuerte: qué leer primero (H1), qué entender después (Pilares), qué acción tomar (CTA).
- Mobile-first y accesibilidad (WCAG AA+): contraste suficiente, tipografías legibles, estados de foco visibles, targets táctiles ≥44px.

Tipografía y Sistema Base (Tailwind sugerido):
- Fuente: Poppins (ya incluida). Alternativa de sistema: `ui-sans-serif, system-ui`.
- Escala: `text-[32px]/tight` en móvil para H1, `text-[44px-56px]` en desktop según ancho. Subtítulos `text-lg` móvil, `text-xl/relaxed` desktop. Párrafos `text-base` móvil, `text-lg` desktop.
- Peso: H1 700; Títulos sección 600–700; Párrafo 400–500; énfasis 600.

Paleta de Color (segura y empática):
- Primario: Azul confianza `#1D4ED8` (Tailwind `blue-700`). Hover: `#1E40AF` (`blue-800`).
- Acento suave: `#0EA5E9` (`sky-500`) para subrayados/etiquetas.
- Texto: `slate-900`/`slate-800` en fondo claro; `white` en fondo oscuro.
- Fondo neutro: `slate-50`/`white`.
- Estado y fondos diferenciadores: `slate-100` secciones alternas; `blue-50` para resaltar método.
- Éxito/validación sutil: `emerald-600` solo en detalles (check).

Componentes Globales:
- Botón primario (CTA):
  - Clases: `inline-flex items-center justify-center rounded-lg bg-blue-700 text-white px-5 py-3 text-base md:text-lg font-semibold shadow-sm hover:bg-blue-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-300 active:scale-[0.99] transition`.
  - Variante secundaria: contorno `border border-blue-700 text-blue-700 hover:bg-blue-50`.
- Tarjetas: `rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition` con `p-5 md:p-6`.
- Etiquetas de marca: pill con `bg-blue-50 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-full`.

Sección 1. HÉROE
Contenido:
- H1: Deja la Ansiedad Atrás. Obtén tu Mapa de Ruta Migratorio Personal™ en ≤72 Horas.
- Subtítulo: Somos los profesionales que sí te entienden... Método IGW 247™...
- CTA Principal: Agendar mi Consulta para el Mapa de Ruta
- Texto de confianza: Consulta inicial aplica para desarrollar tu plan.

Recomendaciones UI/UX
- Layout:
  - Mobile-first: columna única, padding `px-4 py-10`, ancho máximo `max-w-xl` centrado.
  - Desktop: 2 columnas 6/6: izquierda texto, derecha imagen/ilustración humana; gap `gap-10`.
  - Espaciado respirable: `space-y-5` móvil, `space-y-6` desktop.
- Fondo/Imagen:
  - Evitar fondos ocupados. Usar fondo sólido claro (`white`/`slate-50`) o una imagen desaturada, suave y profesional de una persona consultora tranquila, mirando ligeramente a cámara en ambiente de oficina real (no stock de “abogado”).
  - Si se usa imagen de fondo, aplicar overlay sutil `bg-slate-900/60` y caja de contenido en tarjeta blanca translúcida `backdrop-blur` para legibilidad.
- Tipografía y jerarquía:
  - H1 grande, calmado, con tracking normal: `text-3xl md:text-5xl font-bold text-slate-900` (en fondo claro). En fondo oscuro: `text-white`.
  - Destacar marcas con etiqueta o subrayado suave: envolver “Mapa de Ruta Migratorio Personal™” y “Método IGW 247™” con pill de marca o `bg-blue-50` + `px-1` para resaltar sin agresividad.
  - Subtítulo `text-slate-700 text-base md:text-xl` con `max-w-prose`.
- Marca destacada:
  - Inserta un pequeño chip antes del H1: `span` “Método IGW 247™” en `bg-blue-50 text-blue-700 text-xs font-semibold rounded-full px-3 py-1` para reconocimiento inmediato.
  - Dentro del H1, destacar “Mapa de Ruta Migratorio Personal™” con `underline decoration-blue-300/50 underline-offset-4`.
- CTA:
  - Único, prominente. Color primario azul (ver botón global). Ancho completo en móvil, `w-auto` en desktop. Añadir ícono “event”/calendario.
  - Tamaño: `text-base md:text-lg`, padding suficiente `py-3`.
  - Microcopia debajo del CTA (texto de confianza): colocar a 8px–12px debajo, `text-slate-500 text-sm` con ícono `info` sutil. Mantiene ética y visibilidad sin competir con el CTA.
- Interacciones:
  - Hover suave, sombra leve; no usar animaciones vistosas.
  - Atajos de teclado/foco: `:focus-visible` anillo azul claro.
- Racional: H1 limpio y espacios amplios reducen carga cognitiva; azul transmite seguridad; destacar términos de marca mejora recuerdo sin parecer venta agresiva.

Sección 2. POR QUÉ ELEGIRNOS (Pilares del Método IGW 247™)
Contenido: 3 pilares (Claridad, Precisión, Empatía/Profesionales que sí te entienden)

Recomendaciones UI/UX
- Diferenciación visual:
  - Fondo alterno `bg-blue-50` o `bg-slate-50` para separar del héroe.
  - Título sección `text-2xl md:text-3xl font-semibold` con pequeño descriptor.
- Layout:
  - Mobile: stack vertical de tarjetas (3), `space-y-4`.
  - Tablet/Desktop: grid de 3 columnas `grid grid-cols-1 md:grid-cols-3 gap-5`.
  - Alternativa si se quiere narrativa: step-by-step vertical numerado (1–3) con conectores. Evitar tabs para no ocultar info crítica.
- Iconografía profesional (línea simple, consistencia de stroke):
  - Claridad: mapa/brújula minimalista.
  - Precisión: sello/check + escudo.
  - Empatía: siluetas/persona con burbuja de diálogo.
  - Librerías sugeridas: Heroicons (outline), Phosphor, Iconoir. Mantener un solo set.
- Cada Pilar (tarjeta):
  - Ícono en círculo suave `bg-white text-blue-700 p-3 rounded-full border border-blue-100`.
  - Título `font-semibold text-slate-900`.
  - Descripción `text-slate-700` con palabras clave en negrita: “Mapa de Ruta Personal™”, “Cero Errores*”, “doble validación”.
  - Micro-evidencia: pequeño subtexto o bullet corto con `check` verde sobre proceso (“Doble validación humana”, “Checklist 247 puntos”).
- Interacción: hover-lift ligero en desktop, sin mover layout.
- Racional: grid de 3 resume el “cómo” sin sobrecargar; consistencia visual refuerza profesionalismo.

Sección 3. QUIÉNES SOMOS
Contenido: Título y texto institucional

Recomendaciones UI/UX
- Refuerzo de “Puente Seguro” y “Tranquilidad”:
  - Visual metáfora sutil: imagen de equipo caminando sobre un puente peatonal moderno o gesto de acompañamiento en oficina real.
  - Paleta calmada; bordes redondeados; mucho aire.
- Foto de equipo:
  - Auténtica, natural, luz suave; diversidad real; vestimenta business-casual.
  - Evitar pose rígida corporativa; incluir sonrisas discretas.
- Layout:
  - Mobile: imagen encima, texto debajo con `space-y-4`.
  - Desktop: 2 columnas `md:grid md:grid-cols-2 md:items-center md:gap-10`. Opción de texto sobre fondo limpio con imagen en tarjeta con borde.
- Tipografía:
  - Título `text-2xl md:text-3xl font-semibold`.
  - Párrafos `text-slate-700 max-w-prose`.
- Racional: humaniza sin perder precisión; reduce escepticismo mostrando personas reales.

Sección 4. SERVICIOS
Contenido: Listado amplio con fines SEO

Recomendaciones UI/UX
- Escaneabilidad sin aburrir:
  - Usar grid de tarjetas pequeñas (chips) o lista en 2–3 columnas con íconos ligeros.
  - Sugerencia principal: grid de tarjetas simples con título + microdescripción opcional al hover.
- Layout:
  - Mobile: `grid grid-cols-1 gap-3`.
  - Tablet: `grid-cols-2`; Desktop: `grid-cols-3`.
- Alternativas:
  - Tags (etiquetas) si son muchos: pills con `bg-slate-100 text-slate-800`.
  - Accordion si crece con contenido extenso (SEO + UX), pero mantener abiertos por defecto en desktop para no ocultar.
- Tipografía:
  - Título de sección `text-2xl md:text-3xl font-semibold`.
  - Ítems `font-medium text-slate-800`.
- Racional: grid modular facilita escaneo y mantiene consistencia visual.

Sección 5. TESTIMONIOS
Contenido: 2 testimonios clave

Recomendaciones UI/UX
- Máxima credibilidad:
  - Tarjetas con cita, nombre, caso y, si es posible, iniciales o avatars reales. Evitar estrellas si no hay sistema de calificación verificable.
  - Añadir sello “Verificado” con ícono check si cuentas con evidencia.
- Layout:
  - Mobile: carrusel simple por deslizamiento (opcional) o stack vertical.
  - Desktop: 2–3 tarjetas en fila `grid md:grid-cols-2 gap-5`.
- Resaltar frases clave de la PUV:
  - Usar negritas y resaltar con `bg-yellow-50` o `underline` frases como “plan claro”, “cero errores”, “sí te entienden”. Máximo 1–2 resaltados por testimonio para no saturar.
- Tipografía y microinteracciones:
  - Cita `text-slate-800` con comillas estilizadas.
  - Nombre `font-semibold`, caso `text-slate-600 text-sm`.
- Racional: prueba social concreta y legible que conecta con los miedos y la promesa.

Sección 6. FINAL CTA
Contenido: Título, Subtítulo, CTA, Pie Legal

Recomendaciones UI/UX
- Sentido de cierre limpio que impulsa acción:
  - Fondo diferenciado oscuro sereno `bg-slate-900` con texto blanco o azul profundo `bg-blue-900`.
  - Caja central `max-w-2xl text-center mx-auto` con `space-y-4`.
- Tipografía:
  - Título `text-2xl md:text-4xl font-bold text-white`.
  - Subtítulo `text-slate-200`.
- CTA:
  - Igual estilo que el principal para consistencia; puede incluir un ícono de calendario.
  - Diferenciación opcional: añadir `shadow-lg` o borde luminoso sutil `ring-1 ring-white/20`.
- Pie Legal:
  - Colocar debajo del CTA con `text-xs text-slate-300 leading-relaxed max-w-prose mx-auto`.
  - Mantener legible (contraste AA), no más de 80ch de ancho.
- Racional: repetición de la promesa con alto contraste y foco en acción final.

Accesibilidad y Estados (aplica a toda la página)
- Contraste: verificar con AA mínimo (herramientas como Stark/Deque). Azul 700 sobre blanco cumple.
- Estados de foco visibles: `focus-visible:ring-4 ring-blue-300` en CTA y links.
- Targets táctiles: botones y chips ≥44px alto.
- Semántica: `h1` único; subsecciones con `h2`/`h3`; listas `ul/li` para servicios; `blockquote` para testimonios; `aria-label` en carrusel si se usa.
- Errores/Éxito: color no como único medio; añadir íconos/labels.

Móvil Primero y Responsive
- Contenedores `px-4` móvil, `px-6 md:px-8` tablet/desktop; `max-w-screen-xl` para el wrapper.
- Grids que colapsan a 1 columna en móvil.
- Imágenes con `object-cover` y `aspect-[4/3]` o `aspect-square` según caso; `loading="lazy"`.

Sourcing de Imágenes/Iconos
- Usar fotos reales de equipo. Si no es posible, banco confiable con look natural (Pexels/Unsplash) evitando clichés legales.
- Iconos consistentes: Heroicons outline/solid.

Ejemplos de estructuras (Tailwind)

Hero (fondo claro):
```
<section class="px-4 py-12 bg-white">
  <div class="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-10 items-center">
    <div class="space-y-4">
      <span class="inline-flex bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">Método IGW 247™</span>
      <h1 class="text-3xl md:text-5xl font-bold text-slate-900">Deja la Ansiedad Atrás. Obtén tu <span class="underline decoration-blue-300/50 underline-offset-4">Mapa de Ruta Migratorio Personal™</span> en ≤72 Horas.</h1>
      <p class="text-slate-700 text-base md:text-xl max-w-prose">Somos los profesionales que sí te entienden... Método IGW 247™...</p>
      <div>
        <a href="#agendar" class="inline-flex items-center rounded-lg bg-blue-700 text-white px-5 py-3 text-base md:text-lg font-semibold shadow-sm hover:bg-blue-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-300">Agendar mi Consulta para el Mapa de Ruta</a>
        <p class="mt-2 text-slate-500 text-sm flex items-start gap-2"><span class="material-icons text-base">info</span> Consulta inicial aplica para desarrollar tu plan.</p>
      </div>
    </div>
    <div>
      <img src="[foto-persona-profesional]" alt="Consultora de IGW atendiendo a un cliente" class="rounded-xl border border-slate-200 shadow-sm object-cover w-full aspect-[4/3]"/>
    </div>
  </div>
</section>
```

Pilares (3 columnas):
```
<section class="px-4 py-12 bg-blue-50">
  <div class="max-w-screen-xl mx-auto">
    <h2 class="text-2xl md:text-3xl font-semibold text-slate-900">Experiencia Humana, Precisión Digital: El Método IGW 247™</h2>
    <div class="mt-6 grid grid-cols-1 md:grid-cols-3 gap-5">
      <!-- Repetir tarjeta por pilar -->
      <article class="p-6 rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition">
        <div class="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white text-blue-700 border border-blue-100 mb-4">
          <span class="material-icons">explore</span>
        </div>
        <h3 class="font-semibold text-slate-900 mb-2">Claridad en ≤72 Horas</h3>
        <p class="text-slate-700">Después de tu consulta, te entregamos un <strong>Mapa de Ruta Personal™</strong> con pasos, costos exactos y cronogramas.</p>
      </article>
      <!-- ... -->
    </div>
  </div>
</section>
```

Testimonios (2 columnas desktop):
```
<section class="px-4 py-12 bg-white">
  <div class="max-w-screen-xl mx-auto">
    <h2 class="text-2xl md:text-3xl font-semibold text-slate-900">No solo lo decimos nosotros. Nuestros clientes lo confirman.</h2>
    <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
      <blockquote class="p-6 rounded-xl border border-slate-200 bg-white shadow-sm">
        <p class="text-slate-800">“Estaba perdido... IGW me dio un <mark class="bg-yellow-50 px-1 rounded">plan claro</mark> (mi Mapa de Ruta)…”</p>
        <footer class="mt-3 text-sm text-slate-600">— Luis R., Permiso de Trabajo Aprobado</footer>
      </blockquote>
      <!-- ... -->
    </div>
  </div>
</section>
```

Final CTA (oscuro):
```
<section class="px-4 py-16 bg-slate-900 text-white">
  <div class="max-w-2xl mx-auto text-center space-y-4">
    <h2 class="text-2xl md:text-4xl font-bold">Da el Primer Paso Hacia tu Claridad Hoy Mismo</h2>
    <p class="text-slate-200">Deja de adivinar. Obtén el plan de acción profesional...</p>
    <a href="#agendar" class="inline-flex items-center justify-center rounded-lg bg-blue-600 text-white px-6 py-3 text-lg font-semibold shadow-lg hover:bg-blue-700 focus-visible:ring-4 focus-visible:ring-blue-300">Agendar mi Consulta Ahora</a>
    <p class="text-xs text-slate-300 max-w-prose mx-auto">[Pie legal aquí]</p>
  </div>
</section>
```

Notas de implementación en el proyecto actual
- Ya se usa Tailwind y Poppins en `index.html`. Puedes mapear las clases sugeridas directamente.
- Evitar overlays de imagen muy oscuros en el héroe actual; si se conserva, coloca el texto dentro de una tarjeta blanca con `backdrop-blur` para legibilidad.
- Reutilizar utilidades existentes como `.hover-lift` solo en tarjetas, no en CTAs principales.

Métricas y CRO a monitorear
- CTR del CTA principal vs final.
- Scroll depth hasta Pilares y Final CTA.
- Tasa de interacción con Testimonios.
- Conversiones de “Agendar”.

Fin de documento.