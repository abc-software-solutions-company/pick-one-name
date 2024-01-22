import '@/vendors/tailwindcss/tailwind.scss';
import '@/vendors/tailwindcss/theme.scss';
import '@/vendors/abc-icons/dist/abc.scss';

import {StyledEngineProvider} from '@mui/material';
import type {AppProps} from 'next/app';
import {useRouter} from 'next/router';
import {appWithTranslation} from 'next-i18next';
import React from 'react';

import DefaultSeo from '@/components/common/seo/default-seo';
import ServiceWorker from '@/components/common/service-worker';
import Tracking from '@/components/common/third-party/tracking';
import QueryProvider from '@/contexts/query.provider';
import {GameProvider} from '@/states/game';
import {GlobalProvider} from '@/states/global';

const Noop: React.FC = ({children}: React.PropsWithChildren<any>) => <>{children}</>;

const CustomApp = ({Component, pageProps}: AppProps) => {
  const router = useRouter();
  const Layout = (Component as any).Layout || Noop;

  return (
    <QueryProvider pageProps={pageProps}>
      <ServiceWorker />
      <DefaultSeo />
      <Tracking />
      <GlobalProvider>
        <GameProvider>
          <StyledEngineProvider injectFirst>
            <Layout pageProps={pageProps}>
              <Component {...pageProps} key={router.route} />
            </Layout>
          </StyledEngineProvider>
        </GameProvider>
      </GlobalProvider>
    </QueryProvider>
  );
};

export default appWithTranslation(CustomApp);
