import {merge} from 'lodash-es';

const websiteUrl = process.env.NEXT_PUBLIC_SITE_URL;

const organizationDefault = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  founder: 'Khanh Mai',
  defaultLanguage: 'en',
  logo: {
    url: 'https://abcsoftwarecompany.com/android-chrome-512x512.png',
    alt: 'Pick One Name',
    width: 512,
    height: 512
  },
  url: 'https://abcsoftwarecompany.com',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'Viet Nam',
    addressRegion: 'Nha Trang',
    postalCode: '650000'
  }
};

const websiteDefault = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  datePublished: 'September 2022',
  url: websiteUrl,
  sameAs: [
    'https://www.facebook.com/abcsoftwaresolutionscompany',
    'https://www.linkedin.com/company/abc-software-solutions-company'
  ]
};

export const siteSettings = {
  name: 'Pick One Name',
  description:
    'A free wheel spinner for a random picker, free random spinner wheels to help make decisions. Enter choices and spin the wheel to decide a random result.',
  author: {
    name: 'ABC Software Solutions',
    websiteUrl: 'https://www.abcsoftwarecompany.com'
  },
  logo: {
    url: 'https://pickonename.com/android-chrome-512x512.png',
    alt: 'Pick One Name',
    width: 512,
    height: 512
  },
  defaultLanguage: 'en',
  facebookUrl: 'https://www.facebook.com/abcsoftwaresolutionscompany',
  linkedInUrl: 'https://www.linkedin.com/company/abc-software-solutions-company',
  contact: {
    email: 'hello@abcsoftwarecompany.com'
  },
  schemaJsonLd: {
    organization: merge(organizationDefault, {
      name: 'ABC Software Solution'
    }),
    website: merge(websiteDefault, {
      name: 'Pick One Name'
    })
  }
};
