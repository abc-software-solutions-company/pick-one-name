const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const withPlugins = require('next-compose-plugins');
// const withFonts = require('next-fonts');
const {i18n} = require('./next-i18next.config');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
  output: 'standalone',
  webpack(config, {isServer}) {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false
      };

      // config.module.rules.push({
      //   test: /\.(woff|woff2|ttf|eot)$/,
      //   type: 'asset/resource',
      //   generator: {
      //     filename: `${path.join(__dirname, './public/fonts')}/[name][ext]`
      //   }
      // });

      // config.module.rules.push({
      //   test: /\.(woff|woff2|ttf|eot)$/,
      //   use: {
      //     loader: 'url-loader',
      //     options: {
      //       limit: 0,
      //       name: './public/fonts/[name].[ext]'
      //     },
      //   },
      //   type: 'javascript/auto'
      // });

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
