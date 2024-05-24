import React from 'react';

// next.js default imports
import type { Metadata } from 'next';
import { M_PLUS_2 } from 'next/font/google';

// Mantine UI imports
import '@mantine/core/styles.css';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';

const font = M_PLUS_2({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Bible Timeline',
  description: 'Created by Darren Doyle',
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
