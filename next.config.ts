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
      // ── Space-encoded legacy URLs ──────────────────────────────────────────
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

      // ── AI Marketing Systems ───────────────────────────────────────────────
      {
        source: '/services/agentic-ai',
        destination: '/ai-marketing-systems/agentic-ai/',
        permanent: true,
      },
      {
        source: '/services/agentic-ai/',
        destination: '/ai-marketing-systems/agentic-ai/',
        permanent: true,
      },
      {
        source: '/services/video-production/ai-video-production',
        destination: '/ai-marketing-systems/ai-video-production/',
        permanent: true,
      },
      {
        source: '/services/video-production/ai-video-production/',
        destination: '/ai-marketing-systems/ai-video-production/',
        permanent: true,
      },
      {
        source: '/services/search-engine-optimization/ai-seo-agency',
        destination: '/ai-marketing-systems/generative-search-optimisation/',
        permanent: true,
      },
      {
        source: '/services/search-engine-optimization/ai-seo-agency/',
        destination: '/ai-marketing-systems/generative-search-optimisation/',
        permanent: true,
      },

      // ── Brand Infrastructure — SEO ─────────────────────────────────────────
      {
        source: '/services/search-engine-optimization',
        destination: '/brand-infrastructure/search-engine-optimisation/',
        permanent: true,
      },
      {
        source: '/services/search-engine-optimization/',
        destination: '/brand-infrastructure/search-engine-optimisation/',
        permanent: true,
      },
      {
        source: '/services/search-engine-optimization/local-seo-services',
        destination: '/brand-infrastructure/search-engine-optimisation/local-seo/',
        permanent: true,
      },
      {
        source: '/services/search-engine-optimization/local-seo-services/',
        destination: '/brand-infrastructure/search-engine-optimisation/local-seo/',
        permanent: true,
      },
      {
        source: '/services/search-engine-optimization/ecommerce-seo-services',
        destination: '/brand-infrastructure/search-engine-optimisation/ecommerce-seo/',
        permanent: true,
      },
      {
        source: '/services/search-engine-optimization/ecommerce-seo-services/',
        destination: '/brand-infrastructure/search-engine-optimisation/ecommerce-seo/',
        permanent: true,
      },
      {
        source: '/services/search-engine-optimization/b2b-seo-services',
        destination: '/brand-infrastructure/search-engine-optimisation/b2b-seo/',
        permanent: true,
      },
      {
        source: '/services/search-engine-optimization/b2b-seo-services/',
        destination: '/brand-infrastructure/search-engine-optimisation/b2b-seo/',
        permanent: true,
      },
      {
        source: '/services/search-engine-optimization/enterprise-seo-services',
        destination: '/brand-infrastructure/search-engine-optimisation/enterprise-seo/',
        permanent: true,
      },
      {
        source: '/services/search-engine-optimization/enterprise-seo-services/',
        destination: '/brand-infrastructure/search-engine-optimisation/enterprise-seo/',
        permanent: true,
      },

      // ── Brand Infrastructure — Other Services ──────────────────────────────
      {
        source: '/services/social-media-management',
        destination: '/brand-infrastructure/social-media-marketing/',
        permanent: true,
      },
      {
        source: '/services/social-media-management/',
        destination: '/brand-infrastructure/social-media-marketing/',
        permanent: true,
      },
      {
        source: '/services/video-production',
        destination: '/brand-infrastructure/video-production/',
        permanent: true,
      },
      {
        source: '/services/video-production/',
        destination: '/brand-infrastructure/video-production/',
        permanent: true,
      },
      {
        source: '/services/website-development',
        destination: '/brand-infrastructure/website-development/',
        permanent: true,
      },
      {
        source: '/services/website-development/',
        destination: '/brand-infrastructure/website-development/',
        permanent: true,
      },
      {
        source: '/services/employer-branding-agency',
        destination: '/brand-infrastructure/employer-branding/',
        permanent: true,
      },
      {
        source: '/services/employer-branding-agency/',
        destination: '/brand-infrastructure/employer-branding/',
        permanent: true,
      },
    ];
  },

  // Proxy /blogs/ to the existing WordPress installation on impulsedigital.co.in
  // Hostinger Node.js hosting routes ALL requests to Node.js — PHP cannot run
  // inside the app directory. The only way to serve WordPress at /blogs/ is to
  // have Next.js proxy the requests to the WordPress server transparently.
  //
  // IMPORTANT: Also update WordPress site URL in wp-admin → Settings → General:
  //   WordPress Address (URL): https://www.theimpulsedigital.com/blogs
  //   Site Address (URL):      https://www.theimpulsedigital.com/blogs
  async rewrites() {
    return [
      {
        // Proxy /blogs (no trailing slash)
        source: '/blogs',
        destination: 'https://impulsedigital.co.in/ID-web-blog/',
      },
      {
        // Proxy /blogs/ and all sub-paths (posts, wp-admin, wp-content, etc.)
        source: '/blogs/:path*',
        destination: 'https://impulsedigital.co.in/ID-web-blog/:path*',
      },
    ];
  },
};

export default nextConfig;

