import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA({
    injectRegister: 'script',
    includeAssets: ['favicon.png', 'apple-touch-icon.png', 'mask-icon.png'],
    manifest: {
      name: 'Eco Buddy: Calendario per la raccolta differenziata',
      short_name: 'Eco Buddy',
      description: 'App per la creazione di un calendario di raccolta settimanale o mensile, con promemoria tramite notifiche push',
      theme_color: '#ffffff',
      icons: [
        {
          src: 'pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png'
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any'
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'maskable'
        }
      ]
    }
  })],
});
