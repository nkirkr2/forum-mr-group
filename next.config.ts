/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'forum.mr-group.ru',
        port: '',
        pathname: '/**', 
      },
    ],
  },
};

module.exports = nextConfig;
