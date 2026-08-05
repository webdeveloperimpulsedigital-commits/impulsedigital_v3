import type { NextConfig } from 'next';
import { highConfidenceRedirects } from './seo/registries/redirects.mjs';

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
      // WordPress media served from the source domain
      { protocol: 'https', hostname: 'impulsedigital.co.in' },
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
          { key: 'X-XSS-Protection', value: '0' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Strict-Transport-Security', value: 'max-age=31536000' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          {
            key: 'Content-Security-Policy-Report-Only',
            value: [
              "default-src 'self'",
              "base-uri 'self'",
              "object-src 'none'",
              "frame-ancestors 'self'",
              "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://static.hotjar.com https://script.hotjar.com https://cdnjs.cloudflare.com https://cdn.jsdelivr.net https://unpkg.com https://www.clarity.ms https://*.clarity.ms",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdnjs.cloudflare.com",
              "font-src 'self' data: https://fonts.gstatic.com https://cdnjs.cloudflare.com",
              "img-src 'self' data: blob: https:",
              "media-src 'self' blob: https:",
              "connect-src 'self' https: wss:",
              "frame-src 'self' https://www.googletagmanager.com https://*.hotjar.com https://*.hotjar.io",
              "worker-src 'self' blob:",
            ].join('; '),
          },
        ],
      },
      {
        source: '/admin/:path*',
        headers: [
          { key: 'X-Robots-Tag', value: 'noindex, nofollow, noarchive' },
          { key: 'Cache-Control', value: 'private, no-store' },
        ],
      },
      {
        source: '/api/:path*',
        headers: [
          { key: 'X-Robots-Tag', value: 'noindex, nofollow, noarchive' },
          { key: 'Cache-Control', value: 'private, no-store' },
        ],
      },
      {
        source: '/test-chatbot',
        headers: [
          { key: 'X-Robots-Tag', value: 'noindex, nofollow, noarchive' },
        ],
      },
      {
        source: '/ae/test-chatbot',
        headers: [
          { key: 'X-Robots-Tag', value: 'noindex, nofollow, noarchive' },
        ],
      },
      {
        source: '/sitemap.xml',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400' },
        ],
      },
      {
        source: '/robots.txt',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400' },
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
      ...highConfidenceRedirects,

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

      // ── Blog URL rename: /blogs/ → /blog/ ─────────────────────────────────
      {
        source: '/blogs',
        destination: '/blog/',
        permanent: true,
      },
      {
        source: '/blogs/:path*',
        destination: '/blog/:path*',
        permanent: true,
      },

      // ── Growth Intelligence ────────────────────────────────────────────────
      {
        source: '/services/performance-marketing',
        destination: '/growth-intelligence/campaign-intelligence/',
        permanent: true,
      },
      {
        source: '/services/performance-marketing/',
        destination: '/growth-intelligence/campaign-intelligence/',
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
        source: '/services/social-media-video-production',
        destination: '/brand-infrastructure/video-production/',
        permanent: true,
      },
      {
        source: '/services/social-media-video-production/',
        destination: '/brand-infrastructure/video-production/',
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
      {
        source: '/case-studies/employer-branding',
        destination: '/brand-infrastructure/employer-branding/',
        permanent: true,
      },
      {
        source: '/case-studies/employer-branding/',
        destination: '/brand-infrastructure/employer-branding/',
        permanent: true,
      },
      {
        source: '/ae/case-studies/employer-branding',
        destination: '/ae/brand-infrastructure/employer-branding/',
        permanent: true,
      },
      {
        source: '/ae/case-studies/employer-branding/',
        destination: '/ae/brand-infrastructure/employer-branding/',
        permanent: true,
      },
    ];
  },

  // /blog/ is now handled by Next.js pages (app/blog/page.tsx and
  // app/blog/[slug]/page.tsx) which fetch from WordPress REST API.
  // No proxy rewrite needed — all blog URLs stay on theimpulsedigital.com.
  async rewrites() {
    return [
      // India blog sitemap
      {
        source: '/blog/sitemap_index.xml',
        destination: '/blog/sitemap-index/',
      },
      {
        source: '/blog/sitemap_index.xml/',
        destination: '/blog/sitemap-index/',
      },
      // AE blog sitemap
      {
        source: '/ae/blog/sitemap_index.xml',
        destination: '/ae/blog/sitemap-index/',
      },
      {
        source: '/ae/blog/sitemap_index.xml/',
        destination: '/ae/blog/sitemap-index/',
      },
    ];
  },
};

export default nextConfig;
