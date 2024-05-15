'use client';

import React from 'react';

import { I18nextProvider } from 'react-i18next';
import i18n from '../locales/init';

import PageWrapper from '../components/PageWrapper';
import './page.scss';

export default function Page() {
  return (
    <I18nextProvider i18n={i18n}>
      <PageWrapper />
    </I18nextProvider>
  );
}
