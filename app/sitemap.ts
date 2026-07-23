import type { MetadataRoute } from 'next';
import { absoluteUrl, SITEMAP_PAGES } from '@/seo/registries/pages';

/**
 * The page registry is the only source of truth for main-site sitemap
 * eligibility. WordPress posts remain in their market-specific Yoast sitemaps.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return SITEMAP_PAGES.map((page) => ({
    url: absoluteUrl(page.path),
    lastModified: page.lastModified,
  }));
}
