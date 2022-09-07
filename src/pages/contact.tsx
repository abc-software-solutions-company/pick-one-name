import {GetStaticProps} from 'next';
import Head from 'next/head';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';

import Seo from '@/components/common/seo/seo';
import ContactForm from '@/components/partials/contact-form';
import {ROUTES} from '@/configs/routes.config';
import {siteSettings} from '@/configs/site.config';
import LayoutDefault from '@/layouts/default';

export default function PageContact() {
  return (
    <>
      <Seo title="Contact" url={ROUTES.CONTACT} />
      <div data-testid="contactpage">
        <Head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(siteSettings.schemaJsonLd.contact)
            }}
          />
        </Head>
        <ContactForm headingTextVisible={false} className="contact-form" />
      </div>
    </>
  );
}

PageContact.Layout = LayoutDefault;

export const getStaticProps: GetStaticProps = async ({locale}) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ['common']))
    }
  };
};
