#!/usr/bin/env bash
# Descarga el detector de voz público de Handy; los modelos de dictado se eligen en la app.
set -euo pipefail
cd "$(dirname "$0")/.."
model="src-tauri/resources/models/silero_vad_v4.onnx"
mkdir -p "$(dirname "$model")"
if [ ! -s "$model" ]; then
  curl --fail --location --retry 3 'https://blob.handy.computer/silero_vad_v4.onnx' -o "$model.tmp"
  mv "$model.tmp" "$model"
fi
printf '%s\n' 'Detector de voz listo. Ejecuta bun run tauri build para crear el instalador.'
