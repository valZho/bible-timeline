'use client';

import React from 'react';
import i18n from 'i18next';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
// import FsBackend from 'i18next-fs-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import PageWrapper from '../components/PageWrapper';
import './page.scss';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    backend: {
      backends: [
        {
          HttpBackend,
          // FsBackend,
        },
      ],
      backendOptions: [
        {
          loadPath: '/src/locales/{{lng}}/{{ns}}.json',
        },
      ],
    },
    ns: ['common'],
    defaultNS: 'common',
    fallbackLng: 'en',
    initImmediate: false,
    load: 'languageOnly',
    interpolation: {
      escapeValue: false,
      format: () => {},
    },
  });

export default function Page() {
  return (
    <I18nextProvider i18n={i18n}>
      <PageWrapper />
    </I18nextProvider>
  );
}
