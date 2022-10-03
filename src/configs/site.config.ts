import {merge} from 'lodash-es';

const websiteUrl = process.env.NEXT_PUBLIC_SITE_URL;

const organizationDefault = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  founder: 'Khanh Mai',
  logo: 'https://abcsoftwarecompany.com/android-chrome-512x512.png',
  url: 'https://abcsoftwarecompany.com',
  image: 'https://abcsoftwarecompany.com/og-abc.png',
  description: 'Simple solutions for complex problems. Improve work performance every day for your company',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'Vietnam',
    addressRegion: 'Khanh Hoa',
    addressLocality: 'Nha Trang',
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
  logo: 'https://pickonename.com/android-chrome-512x512.png',
  cover: 'https://pickonename.com/og-abc.png',
  url: 'https://pickonename.com',
  description:
    'A free wheel spinner for a random picker, free random spinner wheels to help make decisions. Enter choices and spin the wheel to decide a random result.',
  keyword:
    'lucky wheel, wheel of names, wheel decide, lucky draw, roulette, random name, spin the wheel, wheel of fortune, random name picker',
  author: {
    name: 'ABC Software Solutions',
    websiteUrl: 'https://www.abcsoftwarecompany.com'
  },
  facebookUrl: 'https://www.facebook.com/abcsoftwaresolutionscompany',
  linkedInUrl: 'https://www.linkedin.com/company/abc-software-solutions-company',
  contact: {
    email: 'hello@abcsoftwarecompany.com'
  },
  schemaJsonLd: {
    organization: merge(organizationDefault, {name: 'ABC Software Solution'}),
    website: merge(websiteDefault, {name: 'Pick One Name'})
  }
};
