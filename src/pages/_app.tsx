import '@/vendors/tailwindcss/tailwind.scss';
import '@/vendors/tailwindcss/theme.scss';
import '@/vendors/abc-icons/dist/abc.scss';

import type {AppProps} from 'next/app';
import {useRouter} from 'next/router';
import {appWithTranslation} from 'next-i18next';
import React from 'react';

import DefaultSeo from '@/components/common/seo/default-seo';
import ServiceWorker from '@/components/common/service-worker';
import {GameProvider} from '@/states/game';
import {GlobalProvider} from '@/states/global';

const Noop: React.FC = ({children}: React.PropsWithChildren<any>) => <>{children}</>;

const CustomApp = ({Component, pageProps}: AppProps) => {
  const router = useRouter();

  const Layout = (Component as any).Layout || Noop;

  return (
    <>
      <ServiceWorker />
      <DefaultSeo />
      <GlobalProvider>
        <GameProvider>
          <Layout pageProps={pageProps}>
            <Component {...pageProps} key={router.route} />
          </Layout>
        </GameProvider>
      </GlobalProvider>
    </>
  );
};

export default appWithTranslation(CustomApp);
