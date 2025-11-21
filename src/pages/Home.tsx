import { useEffect, useState, useMemo, useCallback } from "react";
import logo from "../assets/logo.png";
import CircularText from "../components/CircularText";
import { prefetchRoutes } from "../utils/prefetchRoutes";

const STATS = [
  { label: "Опыт работы", value: "7+" },
  { label: "Ожидание ответа", value: "24часа" },
  {
    label: "Где мы",
    value: "Strada Petru Zadnipru 18",
    link: "https://www.google.com/maps/place/Strada+Petru+Zadnipru+18,+MD-2044,+Chi%C8%99in%C4%83u,+%D0%9C%D0%BE%D0%BB%D0%B4%D0%BE%D0%B2%D0%B0/@47.0419005,28.8963663,21z/data=!4m6!3m5!1s0x40c97c8fbd529b97:0xab82d17b03607a6f!8m2!3d47.0418778!4d28.8963074!16s%2Fg%2F11l5b4tjt8?entry=ttu",
  },
];

export default function Home() {
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

  const stats = useMemo(() => STATS, []);

  const logoStyle = useMemo(
    () => ({
      width: isMobile ? "170px" : "220px",
      height: isMobile ? "170px" : "220px",
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
                marginBottom: "1.5rem",
                marginTop: "2rem",
              }}
            >
              <div className="circular-text-wrapper">
                <CircularText
                  topText="• TATTOO •"
                  bottomText="• STUDIO •"
                  radius={isMobile ? 100 : 115}
                  fontSize={isMobile ? 32 : 46}
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
              Профессиональная тату-студия в Chișinău. Делаем татуировки
              качественно и честно. Скажем цену сразу, создадим 3D-визуализацию
              перед началом, поможем с уходом после. Индивидуальный подход к
              каждому клиенту.
            </p>
            <div className="hero-cta slide-up-delay-3">
              <a
                className="btn btn-primary"
                href="https://t.me/MurMur13tattoo"
                target="_blank"
                rel="noreferrer"
              >
                <span>Связаться в Telegram</span>
              </a>
              <a className="btn btn-secondary" href="/booking">
                <span>Записаться</span>
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
