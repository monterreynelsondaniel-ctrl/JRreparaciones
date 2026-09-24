# Auditoría visual inicial

## Objetivo

Evaluar cómo hacer más llamativas y dinámicas las cajas de servicios sin comprometer claridad, velocidad ni conversión.

## Diagnóstico de las tarjetas actuales

### Lo que funciona

- La cuadrícula separa bien los cinco servicios.
- Las imágenes de antes/después comunican evidencia de trabajo.
- Cada servicio tiene un color identificable.
- La tarjeta mantiene una acción directa hacia WhatsApp.
- Hay elevación y zoom al pasar el cursor.

### Lo que limita el impacto

- En escritorio se muestran cuatro columnas, dejando una tarjeta sola en la segunda fila; esto genera una composición desequilibrada.
- Todas las tarjetas tienen la misma jerarquía visual, aunque calentadores y gas parecen ser los servicios principales.
- El color de servicio solo aparece en una línea superior y en el enlace, por lo que la diferenciación es débil.
- La interacción depende demasiado del hover, que no existe en móvil.
- No hay icono, etiqueta de beneficio, estado o microcopy que ayude a escanear rápidamente.
- El bloque de imágenes no indica explícitamente cuál foto es “antes” y cuál “después”.
- Las alturas dependen del contenido; una descripción más larga puede alterar la alineación visual.

## Dirección recomendada para la primera iteración

### Opción A — tarjeta editorial con servicio destacado

Mantener la estructura actual, pero convertir la primera tarjeta (calentadores) en una tarjeta destacada de ancho completo o doble ancho en escritorio. Las demás quedan en una cuadrícula uniforme. Es la opción de menor riesgo y refuerza el servicio principal.

### Opción B — tarjetas con imagen dominante y panel de acción

Usar una imagen principal más alta, etiqueta de servicio, título breve y CTA fijo en la parte inferior. El color de cada servicio se aplica como acento lateral, fondo suave del icono y estado del botón. Es más moderna sin requerir JavaScript complejo.

### Opción C — comparación antes/después interactiva

Convertir las dos imágenes en una comparación visual con divisor deslizante. Es atractiva para trabajos demostrables, pero requiere más pruebas táctiles, accesibilidad y cuidado de rendimiento.

## Recomendación

Empezar por una combinación de A + B: destacar calentadores y red de gas, ordenar las cinco tarjetas en una composición equilibrada y hacer más visible el CTA. Dejar C para una segunda fase, cuando se confirme que las fotografías tienen encuadres comparables.

## Propuesta concreta de prueba

1. Cambiar el grid de escritorio a una composición de 3 + 2 centrada o a una tarjeta destacada más cuatro tarjetas.
2. Añadir a cada tarjeta una etiqueta corta: `Más solicitado`, `Seguridad`, `Antes / Después`, etc., solo cuando sea verdadera.
3. Aplicar un acento visual más amplio por servicio, sin saturar todo el fondo.
4. Mantener el CTA visible y alineado al fondo de todas las tarjetas.
5. Añadir estados `:focus-visible` y una alternativa sin animación.
6. Revisar la apariencia en 360 px, 768 px y escritorio antes de publicar.

## Métricas para evaluar

- Clics en CTA por servicio.
- Clics totales a WhatsApp.
- Porcentaje de desplazamiento hasta servicios y cobertura.
- Rendimiento móvil y estabilidad visual.
- Comentarios cualitativos sobre confianza, claridad y facilidad para elegir un servicio.

## Decisión pendiente

Antes de implementar, conviene elegir entre una estética más sobria/profesional o una más comercial/llamativa. La recomendación inicial es sobria con acentos de color y movimiento moderado, porque el servicio involucra gas, electricidad y reparaciones técnicas.

