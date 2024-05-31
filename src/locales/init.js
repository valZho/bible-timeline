import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
// import FsBackend from 'i18next-fs-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import enCommon from './en/common';
import esCommon from './es/common';
import jaCommon from './ja/common';

import format from './format';

const resources = {
  en: { common: enCommon },
  es: { common: esCommon },
  ja: { common: jaCommon },
};

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    ns: ['common'],
    defaultNS: 'common',
    fallbackLng: 'en',
    initImmediate: false,
    resources,
    transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'p', 'code'],
    supportedLanguages: Object.keys(resources),
    detection: { order: ['navigator', 'queryString', 'cookie', 'localStorage', 'sessionStorage'] },
    interpolation: {
      escapeValue: false,
      format,
    },
  });

export default i18n;
