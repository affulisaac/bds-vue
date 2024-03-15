import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'


export default defineConfig({
  plugins: [
    vue(),
  ],
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: path.resolve(__dirname, "src/index.ts"),
      formats: ["es", "cjs"],
      fileName: format => `bds-vue.${format}.js`
    },
    rollupOptions: {
      external: ['vue'],
      output: {
          preserveModules: true,
          exports: 'named'
      },
    },
  },
})
