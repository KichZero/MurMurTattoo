import { useEffect, useState, lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import BottomNav from "./components/BottomNav";
import LanguageSwitcher from "./components/LanguageSwitcher";
import { cachedLazy } from "./utils/cache";

// Lazy load всех страниц кроме Home с кэшированием для быстрой работы
const Benefits = lazy(cachedLazy(() => import("./pages/Benefits"), "Benefits"));
const Process = lazy(cachedLazy(() => import("./pages/Process"), "Process"));
// Загружаем Styles без кэширования для более быстрой первой загрузки
const Styles = lazy(() => import("./pages/Styles"));
const Feed = lazy(cachedLazy(() => import("./pages/Feed"), "Feed"));
const Booking = lazy(cachedLazy(() => import("./pages/Booking"), "Booking"));

function AppContent() {
  const location = useLocation();

  return (
    <div>
      <Suspense
        fallback={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "50vh",
              color: "white",
              opacity: 0.8,
            }}
            aria-label="Загрузка страницы"
          >
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  border: "3px solid rgba(255,255,255,0.1)",
                  borderTopColor: "#367faf",
                  borderRadius: "50%",
                  animation: "spin 0.8s linear infinite",
                  margin: "0 auto 1rem",
                }}
              />
              <p style={{ fontSize: "0.9rem", margin: 0 }}>Загрузка...</p>
            </div>
          </div>
        }
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/benefits" element={<Benefits />} />
          <Route path="/process" element={<Process />} />
          <Route path="/styles" element={<Styles />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
      </Suspense>
    </div>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showCookies, setShowCookies] = useState(false);

  useEffect(() => {
    // Wait for DOM to be ready, no need to wait for all resources
    const handleReady = () => {
      // Убрали задержку - показываем контент сразу как DOM готов
      setIsLoading(false);
    };

    // Используем DOMContentLoaded вместо load для более быстрого отображения
    if (
      document.readyState === "complete" ||
      document.readyState === "interactive"
    ) {
      // Используем requestAnimationFrame для синхронизации с браузером
      requestAnimationFrame(() => {
        requestAnimationFrame(handleReady);
      });
    } else {
      const handler = () => {
        requestAnimationFrame(() => {
          requestAnimationFrame(handleReady);
        });
      };
      document.addEventListener("DOMContentLoaded", handler, { once: true });
      return () => {
        document.removeEventListener("DOMContentLoaded", handler);
      };
    }

    // Показываем cookies после загрузки основного контента
    if (
      typeof window !== "undefined" &&
      !localStorage.getItem("murmur-cookie-ok")
    ) {
      // Уменьшили задержку для быстрого отображения
      const cookieTimer = setTimeout(() => setShowCookies(true), 1000);
      return () => {
        clearTimeout(cookieTimer);
      };
    }
  }, []);

  return (
    <div className={`site ${isLoading ? "site--loading" : ""}`}>
      {isLoading && (
        <div className="loader-overlay">
          <div className="loader-spinner" />
          <p>Загрузка...</p>
        </div>
      )}

      {showCookies && !isLoading && (
        <div className="cookie-banner">
          <div>
            <strong>Использование cookies</strong>
            <p>
              Мы используем cookies для улучшения работы сайта и запоминания
              ваших предпочтений.
            </p>
          </div>
          <div className="cookie-actions">
            <button
              onClick={() => {
                localStorage.setItem("murmur-cookie-ok", "ok");
                setShowCookies(false);
              }}
            >
              Принять
            </button>
            <button onClick={() => setShowCookies(false)}>Отклонить</button>
          </div>
        </div>
      )}

      {/* Переключатель языков */}
      <div className="language-switcher-container">
        <LanguageSwitcher />
      </div>

      <AppContent />

      <footer className="footer">
        <div className="container">
          <p>Mur Mur 13 Tattoo Studio · Chișinău · 2025</p>
        </div>
      </footer>

      {/* Навигация вне AppContent чтобы гарантировать fixed позиционирование */}
      <BottomNav />
    </div>
  );
}

export default App;
