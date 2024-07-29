import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/covitenfig/
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_APP_BASE_NAME,
  resolve: {
    alias: {
      "@": "/src",
      "@api": "/src/api",
      "@pages": "/src/pages",
      "@hooks": "/src/hooks",
      "@layout": "/src/layout",
      "@routes": "/src/routes",
      "@utils": "/src/utils",
      "@assets": "/src/assets",
      "@contexts": "/src/contexts",
      "@components": "/src/components",
      "@runtime": "/wailsjs/runtime/runtime",
      "@config": "/config",
    },
  },
});
