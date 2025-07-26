/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['github.com', 'images.unsplash.com'],
  },
  experimental: {
    //appDir: true,
  },
  // Tell Next.js to produce a fully static export
  output: 'export',
  distDir: 'docs',
  // Serving from /docs on GitHub Pages
  basePath: '/docs',
  assetPrefix: '/docs/',
}

module.exports = nextConfig
