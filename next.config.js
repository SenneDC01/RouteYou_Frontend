/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    domains: ["localhost", "buffer.com"],
  },
};

module.exports = nextConfig;
