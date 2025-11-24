import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "ru" | "ro" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    // Проверяем сохраненный язык в localStorage
    const saved = localStorage.getItem("language") as Language;
    if (saved && ["ru", "ro", "en"].includes(saved)) {
      return saved;
    }
    
    // Определяем язык устройства - проверяем все предпочитаемые языки
    const getBrowserLanguage = (): Language => {
      // Получаем все языки браузера
      const languages = navigator.languages || [navigator.language];
      
      for (const lang of languages) {
        const langCode = lang.toLowerCase().split("-")[0]; // Берем только основной код (ru, ro, en)
        
        if (langCode === "ro") return "ro";
        if (langCode === "en") return "en";
        if (langCode === "ru") return "ru";
        
        // Проверяем полные коды для румынского
        if (lang.toLowerCase().startsWith("ro")) return "ro";
        // Проверяем полные коды для русского
        if (lang.toLowerCase().startsWith("ru")) return "ru";
      }
      
      // Fallback на язык браузера
      const browserLang = navigator.language.toLowerCase();
      if (browserLang.startsWith("ro")) return "ro";
      if (browserLang.startsWith("en")) return "en";
      if (browserLang.startsWith("ru")) return "ru";
      
      // По умолчанию русский
      return "ru";
    };
    
    return getBrowserLanguage();
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
    document.documentElement.lang = lang;
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  // Импортируем переводы
  const [translations, setTranslations] = useState<any>(null);

  useEffect(() => {
    import(`../translations/${language}.json`)
      .then((module) => setTranslations(module.default))
      .catch(() => {
        // Fallback на русский если перевод не найден
        import(`../translations/ru.json`)
          .then((module) => setTranslations(module.default))
          .catch(() => setTranslations({}));
      });
  }, [language]);

  const t = (key: string): any => {
    if (!translations) return key;
    const keys = key.split(".");
    let value: any = translations;
    for (const k of keys) {
      value = value?.[k];
      if (value === undefined) {
        console.warn(`Translation missing for key: ${key}`);
        return key;
      }
    }
    return value;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

