/// <reference types="vitest" />

import react from '@vitejs/plugin-react-swc'
import { fileURLToPath } from 'url'
import { defineConfig, loadEnv } from 'vite'
import viteCompression from 'vite-plugin-compression'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react(), viteCompression({ algorithm: 'brotliCompress' }), svgr()],
  resolve: {
    alias: [{ find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) }],
  },
  test: {
    // https://vitest.dev/guide/coverage.html#coverage-providers
    coverage: {
      provider: 'istanbul', // or 'v8'
      thresholds: {
        branches: 80,
        functions: 65,
        lines: 80,
        statements: 80,
      },
    },
    // https://vitest.dev/guide/features.html#environment-variables
    // mode defines what ".env.{mode}" file to choose if exists
    env: loadEnv(mode, process.cwd(), ''),
    // https://vitest.dev/config/#environment
    environment: 'jsdom',
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      '**/cypress/**',
      '**/.{idea,git,cache,output,temp}/**',
      '**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build,eslint,prettier}.config.*',
      'vite-env.d.ts',
    ],
    // https://vitest.dev/config/#globals
    globals: true,
    // https://vitest.dev/guide/reporters.html#html-reporter
    // reporters: ['html'],
    // https://vitest.dev/config/#setupfiles
    setupFiles: ['./vitest.setup.ts'],
  },
}))
