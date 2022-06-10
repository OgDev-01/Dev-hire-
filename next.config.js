/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["dl6lnggp44pnu.cloudfront.net"],
  },
};

module.exports = nextConfig;
