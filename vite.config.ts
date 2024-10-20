/// <reference types="vitest" />

import react from '@vitejs/plugin-react-swc'
import { defineConfig, loadEnv } from 'vite'
import viteCompression from 'vite-plugin-compression'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react(), viteCompression({ algorithm: 'brotliCompress' })],
  test: {
    // https://vitest.dev/guide/coverage.html#coverage-providers
    coverage: {
      provider: 'istanbul', // or 'v8'
    },
    // https://vitest.dev/guide/features.html#environment-variables
    // mode defines what ".env.{mode}" file to choose if exists
    env: loadEnv(mode, process.cwd(), ''),
    // https://vitest.dev/config/#environment
    environment: 'jsdom',
    // https://vitest.dev/config/#globals
    globals: true,
    // https://vitest.dev/guide/reporters.html#html-reporter
    // reporters: ['html'],
    // https://vitest.dev/config/#setupfiles
    setupFiles: ['./vitest.setup.ts'],
  },
}))
