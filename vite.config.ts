import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

const root: string = process.cwd()
const pathResolve = (path: string): string => resolve(root, path)

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react()
  ],
  resolve: {
    alias: {
      '@': pathResolve('./src'),
      '@api': pathResolve('./src/api'),
      '@assets': pathResolve('./src/assets'),
      '@components': pathResolve('./src/components'),
      '@hooks': pathResolve('./src/hooks'),
      '@pages': pathResolve('./src/pages'),
      '@route': pathResolve('./src/route'),
      '@features': pathResolve('./src/features'),
      '@utils': pathResolve('./src/utils'),
    },
  },
});
