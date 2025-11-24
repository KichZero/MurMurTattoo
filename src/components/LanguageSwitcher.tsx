import { useState, useRef, useEffect } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import "./LanguageSwitcher.css";

const languages = [
  { code: "ru", name: "Рус", display: "RU" },
  { code: "ro", name: "Rom", display: "RO" },
  { code: "en", name: "Eng", display: "EN" },
];

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const currentLanguage =
    languages.find((lang) => lang.code === language) || languages[0];

  return (
    <div
      className={`language-switcher ${isOpen ? "is-open" : ""}`}
      ref={dropdownRef}
    >
      <button
        className="language-switcher-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Switch language"
      >
        <span className="language-circle">{currentLanguage.display}</span>
        <svg
          className={`language-arrow ${isOpen ? "open" : ""}`}
          width="10"
          height="10"
          viewBox="0 0 12 12"
          fill="none"
        >
          <path
            d="M2 4L6 8L10 4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        {isOpen && (
          <div className="language-dropdown">
            {languages
              .filter((lang) => lang.code !== language)
              .map((lang, index) => (
                <button
                  key={lang.code}
                  className="language-option"
                  onClick={() => {
                    setLanguage(lang.code as "ru" | "ro" | "en");
                    setIsOpen(false);
                  }}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <span className="language-circle">{lang.display}</span>
                </button>
              ))}
          </div>
        )}
      </button>
    </div>
  );
}
