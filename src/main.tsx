import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import "./utils/cache"; // Инициализируем кэш при старте приложения

// Убрали предзагрузку reactbits - загружается по требованию

// Suppress React DevTools semver error and WebGL errors (known issues)
if (typeof window !== "undefined") {
  // Подавляем console.error и console.warn для специфичных ошибок
  const originalConsoleError = console.error;
  const originalConsoleWarn = console.warn;

  console.error = (...args) => {
    const message = args.join(" ");
    if (
      message.includes("semver") ||
      message.includes("Invalid argument not valid semver") ||
      message.includes("React instrumentation encountered an error") ||
      message.includes("WebGL:") ||
      message.includes("INVALID_OPERATION") ||
      message.includes("uniform2f") ||
      message.includes("uniform1f") ||
      message.includes("location is not from the associated program")
    ) {
      return; // Подавляем эти ошибки
    }
    originalConsoleError.apply(console, args);
  };

  console.warn = (...args) => {
    const message = args.join(" ");
    if (
      message.includes("THREE.WARNING") ||
      message.includes("Multiple instances of Three.js") ||
      message.includes("WebGL")
    ) {
      return; // Подавляем эти предупреждения
    }
    originalConsoleWarn.apply(console, args);
  };

  // Handle uncaught errors
  window.addEventListener(
    "error",
    (event) => {
      const message = event.message || "";
      if (
        message.includes("semver") ||
        message.includes("Invalid argument not valid semver") ||
        message.includes("React instrumentation") ||
        message.includes("WebGL")
      ) {
        event.preventDefault();
        event.stopPropagation();
        return false;
      }
    },
    true
  );

  // Handle unhandled promise rejections
  window.addEventListener("unhandledrejection", (event) => {
    const reason = event.reason;
    const message = reason?.message || String(reason || "");
    if (
      message.includes("semver") ||
      message.includes("Invalid argument not valid semver") ||
      message.includes("React instrumentation")
    ) {
      event.preventDefault();
    }
  });
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
