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
          <link
            href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300;400;500;600;700;800&display=swap"
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
        <body className="h-full overflow-hidden bg-slate-700 text-slate-300">
          <Main />
          <NextScript />
          <div id="react-modal-root"></div>
          <div className="transform-gpu"></div>
        </body>
      </Html>
    );
  }
}
