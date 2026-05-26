import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Output standalone build for Hostinger Passenger Node.js compatibility
  output: 'standalone',

  // Preserve existing URL structure — all routes have trailing slashes
  trailingSlash: true,

  // Disable x-powered-by header
  poweredByHeader: false,

  // Image optimization — serve WebP/AVIF automatically
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: 'www.theimpulsedigital.com' },
      { protocol: 'https', hostname: 'lightcyan-pig-140007.hostingersite.com' },
    ],
  },

  // Security & caching headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
      {
        source: '/_next/static/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/fonts/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/css/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=86400, stale-while-revalidate=3600' },
        ],
      },
    ];
  },

  // Redirect legacy URL variants
  async redirects() {
    return [
      {
        source: '/local seo',
        destination: '/brand-infrastructure/search-engine-optimisation/local-seo/',
        permanent: true,
      },
      {
        source: '/local%20seo',
        destination: '/brand-infrastructure/search-engine-optimisation/local-seo/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

