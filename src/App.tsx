import { useEffect, useState, lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import { Lightning } from "@appletosolutions/reactbits";

import Home from "./pages/Home";
import BottomNav from "./components/BottomNav";

// Lazy load всех страниц кроме Home для уменьшения начального бандла
const Benefits = lazy(() => import("./pages/Benefits"));
const Process = lazy(() => import("./pages/Process"));
const Styles = lazy(() => import("./pages/Styles"));
const Feed = lazy(() => import("./pages/Feed"));
const Booking = lazy(() => import("./pages/Booking"));

function AppContent() {
  const location = useLocation();

  return (
    <div className={`page-transition`} key={location.pathname}>
      <Suspense
        fallback={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "50vh",
              color: "white",
            }}
          >
            Загрузка...
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
  const [isMobile, setIsMobile] = useState(false);
  const [isFullyLoaded, setIsFullyLoaded] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    const resizeHandler = () => checkMobile();
    window.addEventListener("resize", resizeHandler);

    // Wait for all resources to load
    const handleLoad = () => {
      // Small delay to ensure everything is rendered
      setTimeout(() => {
        setIsFullyLoaded(true);
        setTimeout(() => {
          setIsLoading(false);
        }, 300);
      }, 100);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    if (
      typeof window !== "undefined" &&
      !localStorage.getItem("murmur-cookie-ok")
    ) {
      setTimeout(() => setShowCookies(true), 2000);
    }

    return () => {
      window.removeEventListener("resize", resizeHandler);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <div className={`site ${isLoading ? "site--loading" : ""}`}>
      {/* Lightning эффект - отключаем на мобильных и до полной загрузки */}
      {!isMobile && isFullyLoaded && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
            pointerEvents: "none",
          }}
        >
          <Lightning
            hue={0}
            speed={0.4}
            intensity={0.8}
            size={0.5}
            xOffset={-0.9}
          />
        </div>
      )}
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

      <AppContent />

      <footer className="footer">
        <div className="container">
          <p>Mur Mur 13 Tattoo Studio · Chișinău · 2025</p>
        </div>
      </footer>

      <BottomNav />
    </div>
  );
}

export default App;
