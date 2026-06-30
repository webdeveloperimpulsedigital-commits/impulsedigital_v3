import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/siteUrl';

/**
 * Auto-generated robots.txt
 * Next.js serves this at /robots.txt
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/ae/', '/thank-you/', '/_next/'],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
