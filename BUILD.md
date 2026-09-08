# Compilar Dicta

Dicta usa Tauri 2, React y Rust. Los instaladores se generan para el sistema donde compilas; el workflow `release.yml` cubre macOS, Windows y Linux.

## Preparación

Necesitas [Rust estable](https://rustup.rs/), [Bun](https://bun.sh/), CMake y los [requisitos de Tauri](https://tauri.app/start/prerequisites/).

```bash
bun install
bash scripts/prepare-native.sh
bun run tauri dev
```

El detector Silero se incluye en el repositorio. El script lo recupera del servidor público de Handy si falta. Los modelos de reconocimiento se descargan desde la app y necesitan espacio adicional.

## macOS

Instala las herramientas de línea de comandos de Xcode y CMake:

```bash
xcode-select --install
brew install cmake
CMAKE_POLICY_VERSION_MINIMUM=3.5 bun run tauri build
```

En Apple Silicon la inferencia Whisper usa Metal. Con Command Line Tools se compila sin Apple Intelligence; esa función requiere Xcode completo y el SDK adecuado. El dictado local sigue disponible.

En Intel instala ONNX Runtime y exporta su ubicación:

```bash
brew install onnxruntime
ORT_LIB_LOCATION=$(brew --prefix onnxruntime)/lib ORT_PREFER_DYNAMIC_LINK=1 bun run tauri build
```

El resultado está en `src-tauri/target/release/bundle/dmg/` y `bundle/macos/`. Si especificaste `--target`, la arquitectura aparece antes de `release`.

La distribución inicial tiene firma ad-hoc, sin notarización de Apple. Al abrir una descarga, macOS puede requerir **Ajustes del Sistema → Privacidad y seguridad → Abrir igualmente**. Antes de distribución masiva, configura certificados propios y notarización; nunca reutilices los de Handy.

## Windows

Instala Visual Studio Build Tools con desarrollo C++, CMake y Vulkan SDK. Abre una terminal nueva después de instalarlos:

```powershell
bun install
bun run tauri build
```

Los instaladores quedan en `src-tauri/target/release/bundle/nsis/` y `bundle/msi/`. La configuración inicial no requiere Azure Trusted Signing ni certificados de terceros. SmartScreen puede mostrar una advertencia por ser una distribución nueva sin firma comercial.

## Linux (Ubuntu / Debian)

```bash
sudo apt update
sudo apt install build-essential clang libclang-dev libevdev-dev libasound2-dev pkg-config libssl-dev libvulkan-dev vulkan-tools glslc spirv-headers glslang-tools libgtk-3-dev libwebkit2gtk-4.1-dev libayatana-appindicator3-dev librsvg2-dev libgtk-layer-shell0 libgtk-layer-shell-dev patchelf cmake libopenblas-dev
bun run tauri build
```

Usa el paquete generado en `src-tauri/target/release/bundle/`: el binario suelto necesita recursos y bibliotecas. El workflow prepara ONNX Runtime, Vulkan y las bibliotecas privadas dentro de `/usr/lib/Dicta`.

En Wayland, la compatibilidad de atajos y pegado depende del compositor. Para desactivar el overlay basado en GTK layer shell se conserva la variable de compatibilidad `HANDY_NO_GTK_LAYER_SHELL=1`.

## Publicar una versión

1. Actualiza la versión de `package.json`, `src-tauri/Cargo.toml` y `src-tauri/tauri.conf.json` en conjunto.
2. Ejecuta `bun run build`, `bun run lint`, `cargo fmt --manifest-path src-tauri/Cargo.toml --check` y `git diff --check`.
3. Sube los cambios al repositorio propio y ejecuta **Actions → Dicta · compilación de descarga → Run workflow**.
4. Verifica los trabajos y los instaladores en la release borrador. Prueba permisos de micrófono, accesibilidad, descarga de modelo y pegado en un editor.
5. Publica la release borrador cuando las plataformas anunciadas estén comprobadas.

El updater automático está desactivado. Las nuevas versiones se descargan manualmente desde las releases de Dicta. El workflow usa el repositorio que lo ejecuta, no publica en el proyecto original.
