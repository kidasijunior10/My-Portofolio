'use client';

import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import enTranslation from '../../../locales/en/translation.json';
import frTranslation from '../../../locales/fr/translation.json';

// Only initialize on the client side
if (typeof window !== 'undefined') {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      debug: false,
      fallbackLng: 'en',
      interpolation: {
        escapeValue: false,
      },
      resources: {
        en: {
          translation: enTranslation,
        },
        fr: {
          translation: frTranslation,
        },
      }
    });
}

export default i18n;
