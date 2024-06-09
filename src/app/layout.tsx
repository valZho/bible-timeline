import React from 'react';

// next.js default imports
import type { Viewport, Metadata } from 'next';
import { Inter } from 'next/font/google';

// Mantine UI imports
import '@mantine/core/styles.css';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';

const font = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Bible Timeline',
  description: 'Created by Darren Doyle',
  icons: {
    icon: [
      { url: 'icons/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: 'icons/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
      { url: 'icons/safari-pinned-tab.svg', rel: 'mask-icon', color: '#5bbad5' },
    ],
    apple: [{ url: 'icons/apple-touch-icon.png', sizes: '180x180' }],
  },
  manifest: 'site.webmanifest',
};

export const viewport: Viewport = {
  themeColor: '#424242',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={font.className}>
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}
