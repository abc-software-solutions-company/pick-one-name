import Document, {DocumentContext, Head, Html, Main, NextScript} from 'next/document';

import {mediaStyles} from '@/components/media';
import {siteSettings} from '@/configs/site.config';

export default class CustomDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    return Document.getInitialProps(ctx);
  }

  render() {
    return (
      <Html lang="en" className="h-full">
        <Head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta httpEquiv="cleartype" content="on" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@500;600;700&display=swap" rel="stylesheet" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700&display=swap"
            rel="stylesheet"
          />
          <style type="text/css" dangerouslySetInnerHTML={{__html: mediaStyles}} />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{__html: JSON.stringify(siteSettings.schemaJsonLd.organization)}}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{__html: JSON.stringify(siteSettings.schemaJsonLd.website)}}
          />
        </Head>
        <body className="scrollbar h-full w-full bg-neutral-50 font-nunito text-dark-950">
          <Main />
          <NextScript />
          <div id="react-modal-root"></div>
          <div className="transform-gpu"></div>
        </body>
      </Html>
    );
  }
}
