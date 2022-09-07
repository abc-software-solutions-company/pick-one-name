import {InferGetStaticPropsType} from 'next';
import Head from 'next/head';
import React from 'react';

import {siteSettings} from '@/configs/site.config';
import {getStaticProps} from '@/data/ssr/home.ssr';
import LayoutDefault from '@/layouts/default';

export {getStaticProps};

export default function PageHome({}: InferGetStaticPropsType<
  typeof getStaticProps
>) {
  return (
    <div>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(siteSettings.schemaJsonLd.index)
          }}
        />
      </Head>
      <h1>Hello!</h1>
    </div>
  );
}

PageHome.Layout = LayoutDefault;
