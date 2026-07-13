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

      },
    ],
    sitemap: [
      `${SITE_URL}/sitemap.xml`,
      `${SITE_URL}/blog/sitemap_index.xml`,
      `${SITE_URL}/ae/blog/sitemap_index.xml`,
    ],
    host: SITE_URL,
  };
}
