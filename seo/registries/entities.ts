import { SITE_URL } from '@/lib/siteUrl';

/**
 * Stable entity identifiers. Page schemas must reference these IDs instead of
 * minting a new Organization entity for each URL or market.
 */
export const ENTITY_IDS = {
  organization: `${SITE_URL}/#organization`,
  website: `${SITE_URL}/#website`,
  indiaPresence: `${SITE_URL}/#india-presence`,
  uaePresence: `${SITE_URL}/#uae-presence`,
} as const;

export const ORGANIZATION_REFERENCE = {
  '@type': 'Organization',
  '@id': ENTITY_IDS.organization,
} as const;
