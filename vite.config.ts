import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Выделяем reactbits в отдельный чанк (тяжелая библиотека)
          if (id.includes("@appletosolutions/reactbits")) {
            return "reactbits";
          }
          // НЕ разделяем React - оставляем в основном бандле для стабильности
          // React, React-DOM и React-Router должны быть вместе
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
  optimizeDeps: {
    include: [
      "@appletosolutions/reactbits",
      "@use-gesture/react",
    ],
    exclude: [
      // Исключаем неиспользуемые тяжелые библиотеки
      "@chakra-ui/react",
      "@emotion/react",
      "@emotion/styled",
      "@react-three/drei",
      "@react-three/fiber",
      "@react-three/postprocessing",
      "@react-three/rapier",
      "framer-motion",
      "gsap",
      "matter-js",
      "ogl",
      "gl-matrix",
      "three",
      "three-stdlib",
      "meshline",
      "postprocessing",
    ],
  },
  define: {
    // Fix for React DevTools semver error with React 19
    "process.env": {},
  },
});
