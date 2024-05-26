import path from 'path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'
import { VitePWA } from 'vite-plugin-pwa'

import tailwind from "tailwindcss"
import autoprefixer from "autoprefixer"

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwind(), autoprefixer()],
    },
  },
  plugins: [
    vue(),
    VueDevTools(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true
      },
      injectRegister: 'auto',
      manifest: {
        // настройки манифеста
        name: 'WSpark Admin',
        short_name: 'WSpark Admin',
        description: 'WSpark Admin page',
        display: 'standalone',
        orientation: 'portrait',
        start_url: '/',
        theme_color: '#f5f5f5',
        background_color: '#f5f5f5',
        icons: [
          {
            src: '/img/icons/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/img/icons/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/img/icons/android-chrome-maskable-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'maskable',
          },
          {
            src: '/img/icons/android-chrome-maskable-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
          {
            src: '/img/icons/apple-touch-icon.png',
            sizes: '180x180',
            type: 'image/png',
          },
          {
            src: '/img/icons/apple-touch-icon-60x60.png',
            sizes: '60x60',
            type: 'image/png',
          },
          {
            src: '/img/icons/apple-touch-icon-76x76.png',
            sizes: '76x76',
            type: 'image/png',
          },
          {
            src: '/img/icons/apple-touch-icon-120x120.png',
            sizes: '120x120',
            type: 'image/png',
          },
          {
            src: '/img/icons/apple-touch-icon-152x152.png',
            sizes: '152x152',
            type: 'image/png',
          },
          {
            src: '/img/icons/apple-touch-icon-180x180.png',
            sizes: '180x180',
            type: 'image/png',
          },
          {
            src: '/img/icons/favicon-16x16.png',
            sizes: '16x16',
            type: 'image/png',
          },
          {
            src: '/img/icons/favicon-32x32.png',
            sizes: '32x32',
            type: 'image/png',
          },
          {
            src: '/img/icons/msapplication-icon-144x144.png',
            sizes: '144x144',
            type: 'image/png',
          },
          {
            src: '/img/icons/mstile-150x150.png',
            sizes: '270x270',
            type: 'image/png',
          },
          {
            src: '/img/icons/safari-pinned-tab.svg',
            sizes: 'any',
            type: 'image/svg+xml',
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
