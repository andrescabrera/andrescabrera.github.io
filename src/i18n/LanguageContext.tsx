import React, { createContext, useContext, useEffect, useState } from 'react';
import { Dictionary, en, es } from './dictionaries';

export type Lang = 'en' | 'es';

interface LanguageValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Dictionary;
}

const LanguageContext = createContext<LanguageValue>({ lang: 'en', setLang: () => {}, t: en });

export const useLanguage = () => useContext(LanguageContext);

function setMeta(selector: string, attr: string, value: string) {
  const el = document.querySelector(selector);
  if (el) el.setAttribute(attr, value);
}

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Lang>('en');

  // First visit: saved preference, else browser culture
  useEffect(() => {
    try {
      const saved = localStorage.getItem('lang');
      if (saved === 'en' || saved === 'es') {
        setLangState(saved);
      } else if (navigator.language?.toLowerCase().startsWith('es')) {
        setLangState('es');
      }
    } catch {
      /* private mode — keep default */
    }
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem('lang', l);
    } catch {
      /* ignore */
    }
  };

  // Reflect language in <html lang>, title and SEO/social meta.
  // Title/description belong to the home page; /schedule manages its own.
  useEffect(() => {
    const t = lang === 'es' ? es : en;
    document.documentElement.lang = lang;
    setMeta('meta[property="og:locale"]', 'content', t.meta.locale);
    const path = window.location.pathname;
    const isHome = path === '/' || path.endsWith('/index.html');
    if (!isHome) return;
    document.title = t.meta.title;
    setMeta('meta[name="description"]', 'content', t.meta.description);
    setMeta('meta[property="og:title"]', 'content', t.meta.title);
    setMeta('meta[property="og:description"]', 'content', t.meta.description);
    setMeta('meta[name="twitter:title"]', 'content', t.meta.title);
    setMeta('meta[name="twitter:description"]', 'content', t.meta.description);
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: lang === 'es' ? es : en }}>
      {children}
    </LanguageContext.Provider>
  );
};
