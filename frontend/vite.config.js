import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sitemap from 'vite-plugin-sitemap';
// https://vite.dev/config/
export default defineConfig({
  // This is the line you need to change:
 base: '/', 
 plugins: [react(), sitemap({hostname: 'https://www.stacknstones.in/'}),],
});