/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
    serverComponentsExternalPackages: ['mongoose'],
  },
  images: {
    remotePatterns: [
      {
        hostname: 'img.clerk.com',
      },
    ],
  },
};

module.exports = nextConfig;
