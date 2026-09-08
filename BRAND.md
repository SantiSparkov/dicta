# Dicta · Identidad de marca

## La idea

**Tu próximo commit empieza hablando.** Dicta es para personas que piensan en español y construyen software conversando con IA. Reduce la distancia entre tener una idea y explicarla en un prompt.

**Nombre:** Dicta. Corto, fácil de pronunciar y de escribir, funciona como acción. Se escribe `Dicta` en texto y `dicta.` en el wordmark. Es una propuesta creativa; no representa una búsqueda ni un registro de marca o dominio.

**Promesa:** tu voz convertida en texto, donde ya trabajas, con control local.

**Titular principal:** Menos teclado. Más idea.

## Personalidad

Una compañera de equipo que te ayuda a seguir construyendo: directa, curiosa, tranquila y cercana. Sabe qué es un prompt y no necesita explicar «vibe coding» como si fuera una tendencia de consultora. Habla español latino comprensible entre países, sin acumular modismos.

Usamos «tu compu», «el atajo», «vuelve a construir», «sin perder el hilo». Podemos decir prompt, commit, hook y flow cuando la comunidad ya los usa. No decimos «revoluciona tu productividad», «potencia tu potencial» ni prometemos velocidades sin medir.

El producto dicta texto. No inventamos integraciones oficiales, certificaciones, testimonios ni métricas de uso.

## Sistema visual

| Token | Valor | Uso |
| --- | --- | --- |
| Tinta | `#121510` | Fondo oscuro |
| Panel | `#1B2018` | Superficies de trabajo |
| Lima | `#C4ED79` | Acciones y marca |
| Texto | `#F0F1E9` | Lectura principal |
| Texto secundario | `#A9B19F` | Ayuda y contexto |
| Borde | `#343B2E` | Separación |

La web respeta también el tema claro del sistema con tinta sobre superficie `#F1F3EC`. En ese tema, los titulares de acento usan verde `#45651D` para contraste. La app arranca en oscuro y conserva el ajuste de apariencia.

**Tipografía:** Geist Sans + Geist Mono en la landing, tipografía de sistema en la app para un arranque sin depender de fuentes remotas. Títulos compactos, alineación izquierda, etiquetas mono discretas. Sin degradados ni brillos. Dirección visual editorial de herramienta indie, no simulación de un editor.

**Geometría:** superficies con radio 8–14 px, bordes discretos, espacios generosos. Símbolo: una D sólida con tres trazos de voz en negativo. Los archivos maestros están en `src-tauri/icons/dicta.svg` y `landing/public/dicta.svg`. Mantener proporciones y margen libre de al menos un trazo del símbolo.

**Diales de diseño:** variación 7/10, movimiento 3/10, densidad 4/10. La tipografía y el producto sostienen la página. El movimiento se reserva para feedback y estados; se respeta movimiento reducido.

## Ejemplos de voz

- Bienvenida: «Tu voz, lista para construir».
- Modelo: «Elige cómo escucha tu compu».
- Error: «No pudimos descargar el modelo. Revisa la conexión y vuelve a intentar».
- Permisos: «Dicta necesita el micrófono para escucharte».
- Descarga: «La próxima idea, dila en voz alta».

## Guardas de producto

La transcripción local funciona sin conexión después de descargar modelos. El postprocesado externo se explica por separado porque puede enviar texto a terceros. Los ejemplos web están etiquetados como ejemplos; no simulan una grabación real. Las descargas siempre apuntan a artefactos de Dicta y los créditos a Handy permanecen visibles.
