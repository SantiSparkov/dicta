# Publicar Dicta

## App

1. Mantén alineadas las versiones de `package.json`, `src-tauri/tauri.conf.json` y `src-tauri/Cargo.toml` (conserva la entrada del paquete en Cargo.lock).
2. Ejecuta `bun install`, `bun run build`, `bun run lint` y `cargo fmt --manifest-path src-tauri/Cargo.toml -- --check`.
3. Compila y prueba la apertura, el modelo, el micrófono, los permisos y el pegado en una app del sistema destino. No declares probado un flujo que no ejecutaste.
4. Sube un commit al repositorio propio. Ejecuta manualmente `.github/workflows/release.yml` en GitHub Actions.
5. El workflow crea un **borrador** y compila los targets. Revisa cada job y los instaladores. La matriz no significa que todos los paquetes ya estén disponibles.
6. Adjunta `SHA256SUMS.txt` y notas en español con arquitectura, estado de firma, limitaciones y pruebas realizadas. Publica el borrador solo con artefactos comprobados.

```bash
gh workflow run release.yml --repo SantiSparkov/dicta
gh run list --repo SantiSparkov/dicta --workflow release.yml
```

La release usa tags `v<VERSIÓN>` y títulos `Dicta v<VERSIÓN>`. No vuelvas a ejecutar el creador de release si ya existe ese tag; reutiliza el borrador y vuelve a ejecutar los jobs fallidos.

### Compilación local macOS

```bash
./scripts/prepare-native.sh
CMAKE_POLICY_VERSION_MINIMUM=3.5 bun run tauri build --bundles dmg
shasum -a 256 src-tauri/target/release/bundle/dmg/*.dmg
```

El primer build descarga dependencias de Rust y librerías de inferencia y puede tardar. Para notarización comercial necesitas tu propia identidad Developer ID y credenciales Apple. Los certificados y cuentas de firma de Handy no se reutilizan. La primera distribución comunitaria puede publicarse ad-hoc, describiendo esa limitación.

## Landing

La implementación está en `landing/`. Tiene repositorio de fuente independiente para Sites; el repositorio de producto conserva una copia normal de sus archivos. El lockfile npm debe viajar con la web.

```bash
cd landing
npm ci
npx tsc --noEmit
npm run build
```

Publica exactamente el output validado a Sites usando el `project_id` existente. No guardes credenciales en archivos o remotes. La portada enlaza a `/releases/latest` del repositorio propio, que sigue sirviendo tras nuevas versiones. Verifica el destino antes de compartir.

## Actualizaciones y privacidad

El actualizador automático está deshabilitado tanto en backend como en configuración. Para reactivarlo hace falta un canal y una clave de firma de Dicta, más validación end-to-end. El dictado local continúa sin proveedores externos; el postprocesado es opt-in.
