"use client";

import { createContext, useContext, useState, useEffect, useCallback } from "react";
import { translations, getNestedValue } from "@/lib/i18n/translations";

const LanguageContext = createContext(null);

const STORAGE_KEY = "gpg-locale";

export function LanguageProvider({ children }) {
  const [locale, setLocaleState] = useState("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "en" || saved === "ar") {
      setLocaleState(saved);
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    root.lang = locale;
    root.dir = locale === "ar" ? "rtl" : "ltr";
    localStorage.setItem(STORAGE_KEY, locale);
  }, [locale, mounted]);

  const setLocale = useCallback((newLocale) => {
    if (newLocale === "en" || newLocale === "ar") {
      setLocaleState(newLocale);
    }
  }, []);

  const t = useCallback(
    (key) => {
      const value = getNestedValue(translations[locale], key);
      if (value !== undefined) return value;
      const fallback = getNestedValue(translations.en, key);
      return fallback ?? key;
    },
    [locale]
  );

  const isRTL = locale === "ar";

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t, isRTL, mounted }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
