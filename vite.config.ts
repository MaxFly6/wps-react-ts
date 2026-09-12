import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { functionsScanner, copyFile } from "wpsjs/vite_plugins"

// https://vitejs.dev/config/
export default defineConfig({
  base:'./',
  plugins: [
    copyFile({
      src: 'manifest.xml',
      dest: 'manifest.xml',
    }),
    functionsScanner({
      inputJsPath: 'src/js/functions.ts',
      outputJsonPath: 'functions.json',
      namespace: 'HelloEt',
    }),
    react()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    host: '0.0.0.0'
  }
})

