import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      injectRegister: 'inline',
      includeAssets: ['maskable_icon.png', 'maskable_icon_x192.png', 'icon.svg'],
      manifest: {
        "short_name": "villageAPP",
        "name": "villageAPP - Kruszyn Krajeński",
        "description": "Aplikacja mobilna dla wsi Kruszyn Krajeński",
        "lang": "pl",
        "id": "io.villageapp.kruszynkraj",
        "orientation": "portrait",
        "shortcuts": [
          {
            "name": "Wyświetl wszystkie dokumenty",
            "short_name": "Dokumenty",
            "description": "Wyświetl wszystkie dokumenty",
            "url": "/dokumenty",
            "icons": [{ "src": "/icons/maskable_icon_x512.png", "sizes": "512x512", "type": "image/x-icon" }]
          }
        ],
        "icons": [
          {
            "src": "/icons/maskable_icon.png",
            "sizes": "1024x1024",
            "type": "image/x-icon"
          },
          {
            "src": "/icons/maskable_icon_x512.png",
            "sizes": "512x512",
            "type": "image/x-icon"
          },
          {
            "src": "/icons/maskable_icon_x512.png",
            "sizes": "512x512",
            "type": "image/x-icon"
          },
          {
            "src": "/icons/maskable_icon_x512.png",
            "type": "image/png",
            "sizes": "512x512",
            "purpose": "any maskable"
          }
        ],
        "start_url": ".",
        "display": "standalone",
        "scope": "/",
        "theme_color": "#000",
        "background_color": "#fff"
      },
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      }
    })
  ],

})
