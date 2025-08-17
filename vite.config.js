import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import ui from '@nuxt/ui/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    ui({
      ui: {
        colors: {
          primary: 'purple',
          secondary: 'pink',
          tertiary: 'blue',
          success: 'green',
          warning: 'yellow',
          error: 'red',
          neutral: 'gray',
        },
        defaultVariants: {
          shade: 600,
          radius: 'sm',
        },
        strategy: 'merge',
        variables: {

          light: {
            background: 'gray-100',
            text: 'gray-900',
            hover: {
              primary: 'primary-700',
              secondary: 'secondary-700'
            }
          },
          dark: {
            background: 'gray-900',
            text: 'gray-100',
            hover: {
              primary: 'primary-500',
              secondary: 'secondary-500'
            }
          }
        }
      }
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
