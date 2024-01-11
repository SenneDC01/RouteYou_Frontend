/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['localhost', 'buffer.com', 'storage.googleapis.com'],
  },
};

module.exports = nextConfig;
