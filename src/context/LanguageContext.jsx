import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { translations } from "../data/translations";

const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguageState] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("app_language");
      if (saved === "km" || saved === "en") return saved;
    }
    return "km";
  });

  const setLanguage = useCallback((newLang) => {
    if (newLang !== "en" && newLang !== "km") return;
    setLanguageState(newLang);
    if (typeof window !== "undefined") {
      localStorage.setItem("app_language", newLang);
      document.documentElement.lang = newLang;
      // Dispatch custom event for external sync if needed
      window.dispatchEvent(
        new CustomEvent("app_language_change", { detail: { language: newLang } })
      );
    }
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguage(language === "en" ? "km" : "en");
  }, [language, setLanguage]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.lang = language;
    }
  }, [language]);

  // Translation helper function with nested key support
  const t = useCallback(
    (keyPath, fallback = "") => {
      if (!keyPath) return fallback;
      const keys = keyPath.split(".");
      
      // Try active language
      let current = translations[language];
      for (const k of keys) {
        if (current && typeof current === "object" && k in current) {
          current = current[k];
        } else {
          current = undefined;
          break;
        }
      }

      if (current !== undefined) return current;

      // Fallback to English
      let fallbackCurrent = translations.en;
      for (const k of keys) {
        if (fallbackCurrent && typeof fallbackCurrent === "object" && k in fallbackCurrent) {
          fallbackCurrent = fallbackCurrent[k];
        } else {
          fallbackCurrent = undefined;
          break;
        }
      }

      if (fallbackCurrent !== undefined) return fallbackCurrent;
      return fallback || keyPath;
    },
    [language]
  );

  const value = {
    language,
    setLanguage,
    toggleLanguage,
    t,
    isKhmer: language === "km",
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

export default LanguageContext;
