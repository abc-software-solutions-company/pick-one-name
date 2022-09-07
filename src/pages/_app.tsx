import '@/vendors/bootstrap/bootstrap.scss';
import '@/vendors/tailwindcss/style.scss';

import type {AppProps} from 'next/app';
import {useRouter} from 'next/router';
import {appWithTranslation} from 'next-i18next';
import NextNProgress from 'nextjs-progressbar';
import React from 'react';

import DefaultSeo from '@/components/common/seo/default-seo';
import GoogleAnalytics from '@/components/common/third-party/google-analytics';
import {AppContextProvider} from '@/contexts/app.context';
import QueryProvider from '@/contexts/query.provider';

const Noop: React.FC = ({children}: React.PropsWithChildren<any>) => (
  <>{children}</>
);

const CustomApp = ({Component, pageProps}: AppProps) => {
  const router = useRouter();

  const Layout = (Component as any).Layout || Noop;

  return (
    <QueryProvider pageProps={pageProps}>
      <AppContextProvider>
        <DefaultSeo />
        <NextNProgress />
        <GoogleAnalytics />
        <Layout pageProps={pageProps}>
          <Component {...pageProps} key={router.route} />
        </Layout>
      </AppContextProvider>
    </QueryProvider>
  );
};

export default appWithTranslation(CustomApp);
