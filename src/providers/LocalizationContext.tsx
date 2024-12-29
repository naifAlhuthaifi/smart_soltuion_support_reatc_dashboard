import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import Cookies from 'js-cookie';

type LanguageCode = 'en' | 'ar';

type LocalizationContextType = {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  translate: (key: string) => string;
};

type LocalizationProviderProps = {
  children: ReactNode;
};

const LocalizationContext = createContext<LocalizationContextType | undefined>(undefined);

export const LocalizationProvider: React.FC<LocalizationProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<LanguageCode>('en');

  useEffect(() => {
    // Check if there is a saved language in cookies
    const savedLanguage = Cookies.get('language') as LanguageCode;
    if (savedLanguage) {
      setLanguage(savedLanguage);  // Set language if found in cookies
    }
  }, []);

  const changeLanguage = (lang: LanguageCode) => {
    setLanguage(lang);
    // Save the selected language in a cookie for 30 days (you can adjust the duration as needed)
    Cookies.set('language', lang, { expires: 30 });
  };

  const translate = (key: string): string => {
    if (!key || key === '||') return '';
    const parts = key.split('||');
    return language === 'ar' && parts.length > 1 ? parts[1] : parts[0];
  };

  return (
    <LocalizationContext.Provider value={{ language, setLanguage: changeLanguage, translate }}>
      <div dir={language === 'ar' ? 'rtl' : 'ltr'}>{children}</div>
    </LocalizationContext.Provider>
  );
};

export const useLocalization = () => {
  const context = useContext(LocalizationContext);
  if (!context) {
    throw new Error('useLocalization must be used within a LocalizationProvider');
  }
  return context;
};
