import React from "react";
import { useLanguage } from "../contexts/LanguageContext";

const contactLinks = [
  { 
    label: "Telegram",
    href: "https://t.me/MurMur13tattoo",
    handle: "@MurMur13tattoo",
    icon: "M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.12l-6.87 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z",
    color: "#0088cc",
  },
  { 
    label: "Viber",
    href: "https://chats.viber.com/37378986338",
    handle: "+373 789 863 38",
    icon: "M12.5 0C5.596 0 0 5.596 0 12.5c0 2.442.743 4.71 2.014 6.587L0 24l5.118-2.966c1.8 1.01 3.82 1.59 5.982 1.59C18.404 22.624 24 17.028 24 10.124S18.404-2.376 11.5-2.376c-1.162 0-2.284.19-3.33.54C10.24-1.5 13.5 0 13.5 0zm-2 4c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zm4 0c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zm-2 2c-3.314 0-6 2.686-6 6s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6zm0 2c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm-2 0c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm4 0c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z",
    color: "#665cac",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/37378986338",
    handle: "+373 789 863 38",
    icon: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z",
    color: "#25d366",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/murmur13tattoo/",
    handle: "@murmur13tattoo",
    icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
    color: "#e4405f",
  },
  { 
    label: "TikTok",
    href: "https://www.tiktok.com/@murmur13tattoo",
    handle: "@murmur13tattoo",
    icon: "M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z",
    color: "#ffffff",
  },
];

export default function Booking() {
  const { t } = useLanguage();

  return (
    <section className="booking-section" id="booking">
      <div className="container">
        <div className="section-header fade-in">
          <p className="section-tag section-tag-blue slide-up">
            {t("booking.tag")}
          </p>
          <h2 className="slide-up-delay-1">{t("booking.title")}</h2>
        </div>
        <div
          className="fade-in-delay-2"
          style={{
            maxWidth: "600px",
            margin: "0 auto 2rem",
            textAlign: "center",
          }}
        >
          <p
            style={{
              color: "rgba(255, 255, 255, 0.9)",
              fontSize: "1rem",
              lineHeight: "1.7",
              margin: 0,
            }}
          >
            {t("booking.description")}
          </p>
        </div>
        <div className="contacts-grid fade-in-delay-3">
          {contactLinks.map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              target="_blank"
              rel="noreferrer"
              className="contact-card"
              data-platform={contact.label.toLowerCase()}
              style={
                { "--platform-color": contact.color } as React.CSSProperties
              }
            >
              <div className="contact-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d={contact.icon} />
                </svg>
              </div>
              <div className="contact-info">
                <span className="contact-label">{contact.label}</span>
                <strong className="contact-handle">{contact.handle}</strong>
              </div>
              <div className="contact-arrow">→</div>
            </a>
          ))}
        </div>
        <div className="booking-map fade-in-delay-4">
          <h3>{t("booking.location")}</h3>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193.1653861741443!2d28.8960606113497!3d47.0418207094536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97c8fbd529b97%3A0xab82d17b03607a6f!2zU3RyYWRhIFBldHJ1IFphZG5pcHJ1IDE4LCBNRC0yMDQ0LCBDaGnImWluxIN1LCDQnNC-0LvQtNC-0LLQsA!5e1!3m2!1sru!2s!4v1763831396656!5m2!1sru!2s"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mur Mur 13 Tattoo Studio Location"
            />
            <a
              href="https://www.google.com/maps/place/Strada+Petru+Zadnipru+18,+MD-2044,+Chi%C8%99in%C4%83u,+%D0%9C%D0%BE%D0%BB%D0%B4%D0%BE%D0%B2%D0%B0/@47.0418207,28.8960606,44m/data=!3m1!1e3!4m14!1m7!3m6!1s0x40c97c8fc3fa54f3:0x35db3bebaba30860!2zNCwgU3RyYWRhIFBldHJ1IFphZG5pcHJ1IDE4LCBNRC0yMDQ0LCBDaGnImWluxIN1LCDQnNC-0LvQtNC-0LLQsA!3b1!8m2!3d47.0427585!4d28.896905!3m5!1s0x40c97c8fbd529b97:0xab82d17b03607a6f!8m2!3d47.0418778!4d28.8963074!16s%2Fg%2F11l5b4tjt8?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noreferrer"
              className="map-link"
            >
              {t("booking.openMap")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
