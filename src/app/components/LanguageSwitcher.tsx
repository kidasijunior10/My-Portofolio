'use client';

import { useTranslation } from 'react-i18next';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex space-x-1">
      <button
        onClick={() => changeLanguage('en')}
        className={`px-2 py-1 rounded text-sm font-inter transition-colors ${
          i18n.language === 'en'
            ? 'font-bold text-accent bg-accent/10'
            : 'text-primary hover:text-accent'
        }`}
      >
        EN
      </button>
      <span className="text-secondary">/</span>
      <button
        onClick={() => changeLanguage('fr')}
        className={`px-2 py-1 rounded text-sm font-inter transition-colors ${
          i18n.language === 'fr'
            ? 'font-bold text-accent bg-accent/10'
            : 'text-primary hover:text-accent'
        }`}
      >
        FR
      </button>
    </div>
  );
};
