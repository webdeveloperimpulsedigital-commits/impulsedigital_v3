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
  adwaitJoshi: `${SITE_URL}/about-us/#adwait-joshi`,
  abhishekArekar: `${SITE_URL}/about-us/#abhishek-arekar`,
} as const;

/**
 * Approved public entity facts. Keep identity, leadership, contact and profile
 * data here so visible pages, llms.txt and structured data do not drift apart.
 * Quantitative performance claims belong in the separate claim register and
 * must not be added here.
 */
export const ENTITY_FACTS = {
  organization: {
    name: 'Impulse Digital',
    foundingDate: '2014',
    url: `${SITE_URL}/`,
    email: 'collabs@theimpulsedigital.com',
    logo: `${SITE_URL}/ImpulseDigital_Logo.svg`,
    description:
      'Impulse Digital is a digital marketing agency founded in 2014 and headquartered in Thane, Maharashtra, serving enterprise and growth brands across India, the UAE and international markets.',
    sameAs: [
      'https://www.facebook.com/theimpulsedigital/',
      'https://x.com/impulsedigi',
      'https://www.instagram.com/_impulse_digital/',
      'https://www.linkedin.com/company/impulse-digital-marketing-mumbai/',
      'https://www.youtube.com/channel/UCzQglQAeXGI99Z-LZI9jBkw',
    ],
  },
  people: {
    adwaitJoshi: {
      id: ENTITY_IDS.adwaitJoshi,
      name: 'Adwait Joshi',
      jobTitle: 'Founder and CEO',
      image: `${SITE_URL}/images/About%20Us/Adwait-cutout-v2.webp`,
    },
    abhishekArekar: {
      id: ENTITY_IDS.abhishekArekar,
      name: 'Abhishek Arekar',
      jobTitle: 'Co-Founder',
      image: `${SITE_URL}/images/About%20Us/Abhishek-cutout-v2.webp`,
    },
  },
  presences: {
    india: {
      name: 'Impulse Digital India',
      telephone: '+91-9769285224',
      streetAddress:
        '304 - 305, Chirag Infotech, Road No. 16/Z, Ambica Nagar, Wagle Industrial Estate',
      addressLocality: 'Thane',
      addressRegion: 'Maharashtra',
      postalCode: '400604',
      addressCountry: 'IN',
    },
    uae: {
      name: 'Impulse Digital UAE',
      telephone: '+97145276816',
      streetAddress:
        'Regus Boulevard Tower 1, 9th Floor, Boulevard Plaza Tower 1, Shk. Mohammed Bin Rashid Blvd., P.O Box 340733 Downtown',
      addressLocality: 'Dubai',
      addressRegion: 'Dubai',
      postalCode: '340733',
      addressCountry: 'AE',
    },
  },
} as const;

export const ORGANIZATION_REFERENCE = {
  '@type': 'Organization',
  '@id': ENTITY_IDS.organization,
} as const;
