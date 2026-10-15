import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import netlifyPlugin from "@netlify/vite-plugin-react-router";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), netlifyPlugin()],
  base: "/movieSearch",
})
