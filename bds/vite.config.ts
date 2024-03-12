import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
import typescript2 from 'rollup-plugin-typescript2';
import dts from "vite-plugin-dts";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";


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
