const withPlugins = require('next-compose-plugins');
const {i18n} = require('./next-i18next.config');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // env: {
  //   NEXT_PUBLIC_STRAPI_API_URL: process.env.NEXT_PUBLIC_STRAPI_API_URL || '',
  //   NEXT_PUBLIC_MAILCHIMP_URL: process.env.NEXT_PUBLIC_MAILCHIMP_URL || '',
  //   NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || '',
  //   NEXT_PUBLIC_WEBHOOK_TOKEN: process.env.NEXT_PUBLIC_WEBHOOK_TOKEN || '',
  //   NEXT_PUBLIC_NO_INDEX: process.env.NEXT_PUBLIC_NO_INDEX || ''
  // },
  reactStrictMode: false,
  i18n,
  images: {
    domains: [
      'abc-cms-1740798364.ap-southeast-1.elb.amazonaws.com',
      'localhost',
      '127.0.0.1',
      'strapiv4cms.abcsoftwarecompany.com',
      'strapiv4cms.stage.abcsoftwarecompany.com',
      'abc-cms-stage.s3.ap-southeast-1.amazonaws.com',
      'abc-cms-production.s3.ap-southeast-1.amazonaws.com'
    ]
  },
  output: 'standalone'
};

module.exports = withPlugins([[withBundleAnalyzer]], nextConfig);
