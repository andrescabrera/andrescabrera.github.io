/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
    // Configure images properly
    images: {
      // Add your image configuration here
      domains: [], // Add any domains you need to load images from
      formats: ['image/avif', 'image/webp'],
      unoptimized: true  // Add this for static exports
    }
}

module.exports = nextConfig
