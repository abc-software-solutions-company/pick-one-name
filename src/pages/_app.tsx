import React from 'react';
import type {AppProps} from 'next/app';
import {useRouter} from 'next/router';
import {SessionProvider} from 'next-auth/react';
import {appWithTranslation} from 'next-i18next';
import QueryProvider from '@/contexts/query.provider';
import {GameProvider} from '@/states/game';
import {GlobalProvider} from '@/states/global';
import {StyledEngineProvider} from '@mui/material';

import DefaultSeo from '@/components/common/seo/default-seo';
import ServiceWorker from '@/components/common/service-worker';
import Tracking from '@/components/common/third-party/tracking';

import '@/vendors/tailwindcss/tailwind.scss';
import '@/vendors/tailwindcss/theme.scss';
import '@/vendors/abc-icons/dist/abc.scss';
import './global.scss';

const Noop: React.FC = ({children}: React.PropsWithChildren<any>) => <>{children}</>;

const CustomApp = ({Component, pageProps: {session, ...pageProps}}: AppProps) => {
  const router = useRouter();
  const Layout = (Component as any).Layout || Noop;

  return (
    <SessionProvider session={session}>
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
    </SessionProvider>
  );
};

export default appWithTranslation(CustomApp);
