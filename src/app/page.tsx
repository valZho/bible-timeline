'use client';

import React from 'react';
import { RecoilRoot } from 'recoil';
import RecoilNexus from 'recoil-nexus';

import '@mantine/core/styles.css';
import type { AppProps } from 'next/app';

import { I18nextProvider } from 'react-i18next';
import i18n from '../locales/init';

import PageWrapper from '../components/PageWrapper';
import './page.scss';

export default function Page({ pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <RecoilNexus />
      <I18nextProvider i18n={i18n}>
        <PageWrapper {...pageProps} />
      </I18nextProvider>
    </RecoilRoot>
  );
}
