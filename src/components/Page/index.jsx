'use client';

import React from 'react';
import { RecoilRoot } from 'recoil';

import { I18nextProvider } from 'react-i18next';
import i18n from '@/locales/init';

import BibleVersionsProvider from '@/data/BibleVersionsProvider';
import EventsProvider from '@/data/EventsProvider';

import Page from './Page';

const PageWrapper = () => {
  return (
    <RecoilRoot>
      <I18nextProvider i18n={i18n}>
        <BibleVersionsProvider />
        <EventsProvider />
        <Page />
      </I18nextProvider>
    </RecoilRoot>
  );
};

export default PageWrapper;
