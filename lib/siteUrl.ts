/**
 * Single source of truth for the site URL.
 * Switch staging → production by changing NEXT_PUBLIC_SITE_URL
 * in Hostinger hPanel environment variables. Zero code changes needed.
 *
 * Staging:    NEXT_PUBLIC_SITE_URL=https://cyan-woodcock-459640.hostingersite.com
 * Production: NEXT_PUBLIC_SITE_URL=https://www.theimpulsedigital.com
 */
const rawSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://www.theimpulsedigital.com';

export const SITE_URL = rawSiteUrl.endsWith('/') ? rawSiteUrl.slice(0, -1) : rawSiteUrl;

