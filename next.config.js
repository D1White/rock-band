/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    prependData: `
      @import 'styles/app.scss';
    `,
  },
};

module.exports = nextConfig;
