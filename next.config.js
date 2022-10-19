const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const withPlugins = require('next-compose-plugins');
const {i18n} = require('./next-i18next.config');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  i18n,
  output: 'standalone',
  webpack(config, {isServer}) {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false
      };
      config.plugins.push(
        new CopyPlugin({
          patterns: [
            {
              from: path.join(__dirname, './src/vendors/abc-icons/dist'),
              to: path.join(__dirname, './public/fonts'),
              noErrorOnMissing: true
            }
          ]
        })
      );
    }

    return config;
  }
};

module.exports = withPlugins([[withBundleAnalyzer]], nextConfig);
