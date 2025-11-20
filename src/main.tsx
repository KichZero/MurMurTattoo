import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";

// Убрали предзагрузку reactbits - загружается по требованию

// Suppress React DevTools semver error (known issue with React 19.2.0 and React DevTools)
if (typeof window !== "undefined") {
  // Handle uncaught errors
  window.addEventListener(
    "error",
    (event) => {
      if (
        event.message?.includes("semver") ||
        event.message?.includes("Invalid argument not valid semver")
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
    if (
      event.reason?.message?.includes("semver") ||
      event.reason?.message?.includes("Invalid argument not valid semver")
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
