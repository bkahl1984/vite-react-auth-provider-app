import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(() => {
  return {
    plugins: [
      react(),
      tailwindcss(),
    ],
    server: {
      port: 3000,
      // Other server options can be added here, like 'open: true' to automatically open the app in the browser
    },
    base: "/vite-react-auth-provider-app",
  }
})
