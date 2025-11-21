/**
 * Prefetch routes для ускорения навигации
 * Использует requestIdleCallback для неблокирующей загрузки
 */
export const prefetchRoutes = () => {
  if (typeof window === "undefined") return;

  const routesToPrefetch = ["/benefits", "/styles", "/feed", "/booking"];

  // Используем requestIdleCallback для неблокирующей загрузки
  const prefetch = () => {
    routesToPrefetch.forEach((route) => {
      const link = document.createElement("link");
      link.rel = "prefetch";
      link.href = route;
      link.as = "document";
      document.head.appendChild(link);
    });
  };

  if ("requestIdleCallback" in window) {
    requestIdleCallback(prefetch, { timeout: 2000 });
  } else {
    // Fallback для браузеров без requestIdleCallback
    setTimeout(prefetch, 2000);
  }
};
