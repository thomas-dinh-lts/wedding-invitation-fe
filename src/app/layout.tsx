'use client';
import AntdMessageWrapper from '@/components/common/AntdMessageWrapper';
import { useClient } from '@/hooks/common/useClient';
import AntdConfigProvider from '@/providers/AntdConfigProvider';
import AuthProvider from '@/providers/AuthProvider';
import QueryProvider from '@/providers/QueryProvider';
import StoreProvider from '@/providers/StoreProvider';
import '@ant-design/v5-patch-for-react-19';
import { App } from 'antd';
import { Gentium_Plus } from 'next/font/google';
import './globals.css';

const gentiumPlus = Gentium_Plus({
  weight: '400',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isClient = useClient();

  return (
    <html lang="en" className={gentiumPlus.className}>
      <head>
        <title>Phú Tùng & Quỳnh Anh wedding</title>
        <meta property="og:title" content="Phú Tùng & Quỳnh Anh wedding" />
        <meta
          property="og:description"
          content="Trân trọng kính mời bạn đến chung vui với chúng tôi"
        />
        <meta
          property="og:image"
          content="https://random-bullshit-name.d3vmnsbm9tpbuf.amplifyapp.com/og_image.jpg"
        />
      </head>
      <body>
        <StoreProvider>
          <AuthProvider>
            <App>
              <AntdMessageWrapper />
              <AntdConfigProvider>
                <QueryProvider>{isClient ? children : null}</QueryProvider>
              </AntdConfigProvider>
            </App>
          </AuthProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
