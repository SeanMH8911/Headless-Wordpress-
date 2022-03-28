/** @type {import('next').NextConfig} */

const allowedImageWordPressDomain = new URL(
  process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL
).hostname;

const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;

const path = require("path");
module.exports = {
  trailingSlash: false,
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    };

    return config;
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    domains: [allowedImageWordPressDomain, "via.placeholder.com"],
  },
};
