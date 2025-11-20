import { useEffect, useRef, useState } from "react";
import gothicLogo from "../assets/60218315_2195312547253914_5590963038934007808_n.jpg";
import { CircularText } from "@appletosolutions/reactbits";
import ElectricBorder from "../components/ElectricBorder";

const stats = [
  { label: "Опыт работы", value: "7+" },
  { label: "Ожидание ответа", value: "24часа" },
  {
    label: "Где мы",
    value: "Strada Petru Zadnipru 18",
    link: "https://www.google.com/maps/place/Strada+Petru+Zadnipru+18,+MD-2044,+Chi%C8%99in%C4%83u,+%D0%9C%D0%BE%D0%BB%D0%B4%D0%BE%D0%B2%D0%B0/@47.0419005,28.8963663,21z/data=!4m6!3m5!1s0x40c97c8fbd529b97:0xab82d17b03607a6f!8m2!3d47.0418778!4d28.8963074!16s%2Fg%2F11l5b4tjt8?entry=ttu",
  },
];

export default function Home() {
  const circularTextRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  useEffect(() => {
    if (isMobile) return; // На мобильных не обновляем цвет

    const updateTextColor = () => {
      if (circularTextRef.current) {
        const svg = circularTextRef.current.querySelector("svg");
        if (svg) {
          const textElements = svg.querySelectorAll("text, textPath, tspan");
          textElements.forEach((el) => {
            (el as SVGElement).setAttribute("fill", "#367faf");
            (el as SVGElement).style.fill = "#367faf";
          });
        }
      }
    };

    // Обновляем сразу
    updateTextColor();
    const interval = setInterval(updateTextColor, 200);

    return () => clearInterval(interval);
  }, [isMobile]);

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
              }}
            >
              <div className="circular-text-wrapper" ref={circularTextRef}>
                {isMobile ? (
                  <h1 className="circular-text-mobile">
                    MUR MUR 13 · TATTOO STUDIO
                  </h1>
                ) : (
                  <CircularText
                    text="MUR MUR 13 · TATTOO STUDIO · "
                    spinDuration={15}
                    onHover="slowDown"
                    className="circular-text-gothic"
                  />
                )}
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
          <div className="hero-image scale-in">
            <ElectricBorder
              className="image-frame"
              color="#b30000"
              speed={1}
              chaos={0.5}
              thickness={2}
            >
              <img
                src={gothicLogo}
                alt="Mur Mur 13 Tattoo Studio"
                loading="eager"
                decoding="async"
                fetchPriority="high"
              />
            </ElectricBorder>
          </div>
        </div>
      </div>
    </header>
  );
}
