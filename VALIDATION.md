# Validación de lanzamiento · 2026-09-08

## Entregado

- [Landing pública](https://dicta-dev-latam.enzisparki123.chatgpt.site), versión Sites 2, deployment confirmado como `succeeded`.
- [Repositorio de trabajo](https://github.com/SantiSparkov/dicta), con historial de Handy conservado y remote `upstream` separado.
- [Release v0.9.6](https://github.com/SantiSparkov/dicta/releases/tag/v0.9.6), con instalador macOS Apple Silicon y SHA-256.
- Código, guía de marca, README, instrucciones de compilación y publicación en esta subcarpeta.

## Comprobado

- Frontend desktop: `bun run build` (TypeScript + Vite) y `bun run lint` pasan.
- Traducciones: todas las claves presentes en los 23 idiomas opcionales contra la fuente inglesa. El copy nuevo de marca usa español como respaldo en las traducciones heredadas. Español es el idioma inicial.
- Catálogo: `bun run check:model-languages` pasa.
- Formato: Prettier del proyecto desktop y `cargo fmt --check` pasan. La landing mantiene su configuración independiente.
- [CI code quality](https://github.com/SantiSparkov/dicta/actions/runs/34187547138): éxito, incluye traducciones, catálogo, ESLint y formato.
- Landing: `npx tsc --noEmit` y `npm run build` pasan, la ruta responde HTTP 200, publicación confirmada por Sites.
- App macOS: compilación Rust/Tauri release completada. Apertura nativa y onboarding en español observados.
- Paquete distribuido: DMG montado y verificado, `codesign --verify --deep --strict` pasa para la app dentro del DMG. Firma ad-hoc, sin notarización Apple.
- `otool -L` del ejecutable local solo muestra frameworks/librerías del sistema, sin rutas de desarrollo externas.
- CodeGraph inicial: 304 archivos, 5.889 nodos, 11.786 relaciones. MCP `codegraph_explore` consultado correctamente. Índice adicional de landing: 67 archivos, 740 nodos y 1.329 relaciones. Son índices locales y se refrescan con `codegraph sync`.

## Límites y trabajo posterior

- No se completó una prueba real micrófono → transcripción → pegado: hace falta conceder permisos de micrófono y Accesibilidad, descargar un modelo y dictar. La apertura del onboarding no equivale a esa prueba.
- La compilación local no incluye Apple Intelligence porque el entorno tiene Command Line Tools sin Xcode completo. No afecta al motor de dictado local.
- [Compilaciones de otras plataformas](https://github.com/SantiSparkov/dicta/actions/runs/34187066711) lanzadas. La disponibilidad se determina por los artefactos y resultados de cada job, no por la matriz configurada. No se hicieron pruebas manuales de Windows/Linux/macOS Intel.
- Las suites amplias de Rust/Nix están separadas del control de calidad y no se presentan aquí como completadas.
- No se hizo QA de navegador interactivo ni medición Lighthouse para la landing; se verificaron tipos, build y respuesta HTTP. La revisión visual nativa cubrió el onboarding.
- Dicta es una propuesta de marca; no se realizó registro ni búsqueda de disponibilidad jurídica.
