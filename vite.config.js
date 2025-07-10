import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createHash } from 'crypto'

// Polyfill: crypto.subtle.digest fallback
globalThis.crypto ??= {}
globalThis.crypto.subtle ??= {
  digest: async (algorithm, data) => {
    return createHash(algorithm.toLowerCase().replace('-', ''))
      .update(Buffer.from(data))
      .digest()
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
