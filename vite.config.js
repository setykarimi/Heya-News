import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      Components: "/src/components",
      Cards: "/src/components/card",
      Layout: "/src/layout",
      Images:  "/src/assets/images/",
      Pages:  "/src/pages/",
      Services:  "/src/services/",
    },
  },
})
