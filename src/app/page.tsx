import React from 'react';

import type { AppProps } from 'next/app';

import PageWrapper from '@/components/Page';

import '@mantine/core/styles.css';
import './page.scss';

function Page({ pageProps }: AppProps) {
  return <PageWrapper {...pageProps} />;
}

export default Page;
