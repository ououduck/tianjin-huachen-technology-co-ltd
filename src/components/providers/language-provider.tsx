'use client';

import type { ReactNode } from 'react';
import { createContext, useState, useEffect, useCallback } from 'react';
import type { Locale } from '@/lib/content';

export interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const browserLang = navigator.language.split('-')[0];
    if (browserLang === 'zh') {
      setLocaleState('zh');
    } else {
      setLocaleState('en');
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
  };
  
  const t = useCallback((key: string): string => {
    // Lazy import content to allow for code splitting
    const { content } = require('@/lib/content');
    const effectiveLocale = isMounted ? locale : 'en';
    return content[key]?.[effectiveLocale] || key;
  }, [locale, isMounted]);

  const contextValue = {
    locale: isMounted ? locale : 'en',
    setLocale,
    t,
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
}
