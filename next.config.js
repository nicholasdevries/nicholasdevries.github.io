/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    imageSizes: [16, 32, 48, 64, 96, 144, 192, 224, 256, 384],
    loader: "custom",
  },
};

module.exports = nextConfig;
