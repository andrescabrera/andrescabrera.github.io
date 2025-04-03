/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

    // Configure images properly
    images: {
      // Add your image configuration here
      domains: [], // Add any domains you need to load images from
      formats: ['image/avif', 'image/webp'],
      // Remove the 'unoptimized' property as it's not a valid option
    }
}

module.exports = nextConfig
