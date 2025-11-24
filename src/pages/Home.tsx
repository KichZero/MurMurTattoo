import { useEffect, useState, useMemo, useCallback } from "react";
import logo from "../assets/logo.png";
import CircularText from "../components/CircularText";
import { prefetchRoutes } from "../utils/prefetchRoutes";
import { useLanguage } from "../contexts/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  // Ленивая инициализация для определения мобильного устройства
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth <= 768;
    }
    return false;
  });

  const checkMobile = useCallback(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", checkMobile);
    // Prefetch другие маршруты для быстрой навигации
    prefetchRoutes();

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, [checkMobile]);

  const STATS = useMemo(
    () => [
      { label: t("home.stats.experience"), value: "7+" },
      { label: t("home.stats.response"), value: "24часа" },
      {
        label: t("home.stats.location"),
        value: "Strada Petru Zadnipru 18/4",
        link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3090.591641709716!2d28.894330076561022!3d47.04276212674277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97c8fc3fa54f3%3A0x35db3bebaba30860!2zNCwgU3RyYWRhIFBldHJ1IFphZG5pcHJ1IDE4LCBNRC0yMDQ0LCBDaGnImWluxIN1LCDQnNC-0LvQtNC-0LLQsA!5e1!3m2!1sru!2s!4v1763831166116!5m2!1sru!2s",
      },
    ],
    [t]
  );

  const stats = useMemo(() => STATS, [STATS]);

  const logoStyle = useMemo(
    () => ({
      width: isMobile ? "100px" : "180px",
      height: isMobile ? "100px" : "180px",
      borderRadius: "50%",
      objectFit: "cover" as const,
    }),
    [isMobile]
  );

  return (
    <header className="hero" id="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text fade-in">
            <div
              className="hero-tag slide-up"
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div className="circular-text-wrapper">
                <CircularText
                  topText="• TATTOO •"
                  bottomText="• STUDIO •"
                  radius={isMobile ? 60 : 95}
                  fontSize={isMobile ? 20 : 38}
                  textDy={isMobile ? "0.35em" : "0.35em"}
                >
                  <img
                    src={logo}
                    alt="Mur Mur 13 Tattoo Studio"
                    loading="eager"
                    decoding="async"
                    fetchPriority="high"
                    style={logoStyle}
                  />
                </CircularText>
              </div>
            </div>
            <p className="hero-description slide-up-delay-2">
              {t("home.description")}
            </p>
            <div className="hero-cta slide-up-delay-3">
              <a
                className="btn btn-primary"
                href="https://t.me/MurMur13tattoo"
                target="_blank"
                rel="noreferrer"
              >
                <span>{t("home.telegram")}</span>
              </a>
              <a className="btn btn-secondary" href="/booking">
                <span>{t("home.book")}</span>
              </a>
            </div>
            <div className="hero-stats">
              {stats.map((stat) => (
                <div key={stat.label} className="stat-item">
                  <span className="stat-label">{stat.label}</span>
                  {stat.link ? (
                    <strong className="stat-value">
                      <a
                        href={stat.link}
                        target="_blank"
                        rel="noreferrer"
                        className="stat-link"
                      >
                        {stat.value}
                      </a>
                    </strong>
                  ) : (
                    <strong className="stat-value">{stat.value}</strong>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
