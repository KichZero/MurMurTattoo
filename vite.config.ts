import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import commonjs from "vite-plugin-commonjs";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    commonjs({
      filter: (id) => {
        // Обрабатываем все CommonJS модули, которые могут вызывать проблемы
        if (id.includes("node_modules")) {
          return (
            id.includes("hoist-non-react-statics") ||
            id.includes("use-sync-external-store")
          );
        }
        return false;
      },
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Выделяем reactbits в отдельный чанк (тяжелая библиотека)
          if (id.includes("@appletosolutions/reactbits")) {
            return "reactbits";
          }
          // Выделяем vendor библиотеки в отдельный чанк
          if (id.includes("node_modules")) {
            // React и React-DOM в основной чанк
            if (
              id.includes("react") ||
              id.includes("react-dom") ||
              id.includes("react-router")
            ) {
              return "vendor-react";
            }
            // Остальные vendor библиотеки
            return "vendor";
          }
        },
      },
    },
    chunkSizeWarningLimit: 1000,
    // Включаем сжатие
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true, // Удаляем console.log в production
        drop_debugger: true,
      },
    },
    // Оптимизация CSS
    cssCodeSplit: true,
    cssMinify: true,
  },
  optimizeDeps: {
    include: [
      "@appletosolutions/reactbits",
      "@use-gesture/react",
      "use-sync-external-store",
      "@emotion/react",
      "@emotion/styled",
      "hoist-non-react-statics",
    ],
    esbuildOptions: {
      // Решаем проблемы с CommonJS модулями
      mainFields: ["module", "main"],
    },
  },
  define: {
    // Fix for React DevTools semver error with React 19
    "process.env": {},
  },
  resolve: {
    dedupe: [
      "use-sync-external-store",
      "hoist-non-react-statics",
      "@emotion/react",
      "@emotion/styled",
    ],
  },
});
