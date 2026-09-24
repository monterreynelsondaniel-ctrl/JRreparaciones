# Reparaciones JR — ficha del proyecto

## Estado

Sitio web estático actualmente orientado a captar solicitudes de servicio por WhatsApp. Este documento sirve como referencia antes de hacer cambios visuales en producción.

## Arquitectura actual

- `index.html`: estructura completa de la página, contenido SEO, navegación, tarjetas de servicios, cobertura, testimonios y footer.
- `assets/css/variables.css`: colores, tipografía, espaciados y tokens globales.
- `assets/css/style.css`: estilos responsive y componentes visuales.
- `assets/js/main.js`: archivo JavaScript externo; el menú móvil también tiene un script inline en `index.html`.
- `assets/images/`: fotografías locales organizadas por servicio y logo.
- Bootstrap 5 Grid se carga desde CDN; no hay `package.json` ni proceso de compilación.

## Flujo comercial

La acción principal es contactar por WhatsApp al número `320 754 2635`. Hay CTA en el hero, cada tarjeta de servicio, cobertura y botón flotante.

## Criterios para cambios en producción

1. Mantener las rutas y mensajes de WhatsApp salvo que se pruebe el reemplazo.
2. Priorizar mobile-first: la mayoría del tráfico esperado es móvil.
3. No esconder información esencial detrás de hover; debe ser visible y usable con toque.
4. Respetar contraste, foco de teclado y `prefers-reduced-motion`.
5. Hacer cambios visuales aislados y verificables antes de publicar.

## Pendientes técnicos detectados

- El hero referencia `assets/images/hero-bg.jpg`, pero ese archivo no aparece en el inventario actual.
- Existen reglas CSS antiguas para `.main-nav`, `.logo` y otros nombres que no coinciden con el HTML actual.
- La animación `pulse-whatsapp-float` está declarada dos veces.
- El comportamiento del menú móvil está inline en `index.html`, mientras `assets/js/main.js` no muestra lógica equivalente en la revisión actual.
- La sección footer enlaza a `#contacto`, pero no existe un elemento con ese `id`.
- Las imágenes de las tarjetas son `background-image`, por lo que no aportan texto alternativo accesible.

