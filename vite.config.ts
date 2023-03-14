import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import alias from '@rollup/plugin-alias'
import { resolve } from 'path'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(),
    alias({
      entries: [
        {
          find: '@',
          replacement: resolve(__dirname, 'src'),
        },
      ],
    }),
  ],
})
