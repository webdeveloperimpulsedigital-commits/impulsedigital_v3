import { SITE_URL } from '@/lib/siteUrl';

export type Market = 'in' | 'ae';
export type PublicationState = 'public' | 'noindex' | 'decision_required';
export type PageClass =
  | 'core'
  | 'service'
  | 'case-study'
  | 'commercial-location'
  | 'seo-location'
  | 'social-location'
  | 'legal'
  | 'utility';

export interface PageRecord {
  path: string;
  market: Market;
  state: PublicationState;
  pageClass: PageClass;
  lastModified: string;
  equivalentPath?: string;
}

const UPDATED = {
  core: '2026-07-13',
  service: '2026-07-13',
  caseStudy: '2026-06-01',
  location: '2026-07-01',
  locationCurrent: '2026-07-24',
  legal: '2026-07-13',
} as const;

const sharedCore = [
  '/',
  '/about-us/',
  '/services/',
  '/case-studies/',
  '/careers/',
  '/contact-us/',
  '/ppt/',
] as const;

const sharedServices = [
  '/growth-intelligence/',
  '/growth-intelligence/customer-intelligence/',
  '/growth-intelligence/market-intelligence/',
  '/growth-intelligence/social-intelligence/',
  '/growth-intelligence/campaign-intelligence/',
  '/ai-marketing-systems/',
  '/ai-marketing-systems/archer-ai/',
  '/ai-marketing-systems/agentic-ai/',
  '/ai-marketing-systems/generative-search-optimisation/',
  '/ai-marketing-systems/ai-video-production/',
  '/brand-infrastructure/',
  '/brand-infrastructure/search-engine-optimisation/',
  '/brand-infrastructure/search-engine-optimisation/local-seo/',
  '/brand-infrastructure/search-engine-optimisation/ecommerce-seo/',
  '/brand-infrastructure/search-engine-optimisation/enterprise-seo/',
  '/brand-infrastructure/search-engine-optimisation/b2b-seo/',
  '/brand-infrastructure/social-media-marketing/',
  '/brand-infrastructure/website-development/',
  '/brand-infrastructure/branding/',
  '/brand-infrastructure/employer-branding/',
  '/brand-infrastructure/video-production/',
] as const;

const caseStudies = [
  'amazon-unplugged',
  'amazon-india-evp-strategy',
  'amazon-talent-communication-engine',
  'uppercase',
  'qure-ai',
  'mastercard',
  'lg-hing',
  'hul',
  'fours-for-good',
  'electromech',
  'dmart',
  'abg-brut-india',
  'abg-kbc',
  'automag-bajaj-auto',
  'automag-india',
  'shaking-things-up',
  'tata-soulfull',
  'tcpl',
  'chings-kurkure',
  'chings-foodfarmer',
] as const;

const indiaSocialLocations = [
  'mumbai',
  'thane',
  'navi-mumbai',
  'vashi',
  'andheri',
  'malad',
] as const;

const indiaCommercialLocations = [
  'india',
  'thane',
  'navi-mumbai',
  'pune',
] as const;

const uaeCommercialLocations = [
  'dubai',
  'abu-dhabi',
  'sharjah',
  'ajman',
] as const;

const indiaSeoLocations = [
  'airoli',
  'andheri',
  'bandra',
  'borivali',
  'dadar',
  'ghansoli',
  'ghatkopar',
  'goregaon',
  'jogeshwari',
  'kandivali',
  'kharghar',
  'koparkhairane',
  'malad',
  'mansarovar',
  'mira-road',
  'mulund',
  'mumbai',
  'thane',
  'navi-mumbai',
  'nerul',
  'panvel',
  'sanpada',
  'turbhe',
  'vashi',
] as const;

const uaeSeoLocations = [
  'dubai',
  'abu-dhabi',
  'sharjah',
  'ajman',
  'al-ain',
  'ras-al-khaimah',
  'fujairah',
] as const;

const toAe = (path: string) => path === '/' ? '/ae/' : `/ae${path}`;

const pairedRecords = (
  paths: readonly string[],
  pageClass: PageClass,
  lastModified: string,
): PageRecord[] => paths.flatMap((path) => {
  const aePath = toAe(path);
  const recordLastModified =
    path === '/brand-infrastructure/search-engine-optimisation/'
      ? UPDATED.locationCurrent
      : lastModified;
  return [
    { path, market: 'in', state: 'public', pageClass, lastModified: recordLastModified, equivalentPath: aePath },
    { path: aePath, market: 'ae', state: 'public', pageClass, lastModified: recordLastModified, equivalentPath: path },
  ];
});

const publicPages: PageRecord[] = [
  ...pairedRecords(sharedCore, 'core', UPDATED.core),
  ...pairedRecords(sharedServices, 'service', UPDATED.service),
  ...pairedRecords(
    caseStudies.map((slug) => `/case-studies/${slug}/`),
    'case-study',
    UPDATED.caseStudy,
  ),
  ...pairedRecords(
    ['/privacy-policy/', '/terms-and-conditions/'],
    'legal',
    UPDATED.legal,
  ),
  ...indiaSocialLocations.map((slug): PageRecord => ({
    path: `/brand-infrastructure/social-media-marketing/${slug}/`,
    market: 'in',
    state: 'public',
    pageClass: 'social-location',
    lastModified: UPDATED.location,
  })),
  ...indiaCommercialLocations.map((slug): PageRecord => ({
    path: `/digital-marketing-agency-in-${slug}/`,
    market: 'in',
    state: 'public',
    pageClass: 'commercial-location',
    lastModified: UPDATED.location,
  })),
  ...uaeCommercialLocations.map((slug): PageRecord => ({
    path: `/ae/digital-marketing-agency-in-${slug}/`,
    market: 'ae',
    state: 'public',
    pageClass: 'commercial-location',
    lastModified: UPDATED.locationCurrent,
  })),
  ...indiaSeoLocations.map((slug): PageRecord => ({
    path: `/brand-infrastructure/search-engine-optimisation/${slug}/`,
    market: 'in',
    state: 'public',
    pageClass: 'seo-location',
    lastModified: slug === 'thane' ? UPDATED.locationCurrent : UPDATED.location,
  })),
  ...uaeSeoLocations.map((slug): PageRecord => ({
    path: `/ae/brand-infrastructure/search-engine-optimisation/${slug}/`,
    market: 'ae',
    state: 'public',
    pageClass: 'seo-location',
    lastModified: UPDATED.locationCurrent,
  })),
];

const nonPublicPages: PageRecord[] = [
  {
    path: '/thank-you/',
    market: 'in',
    state: 'noindex',
    pageClass: 'utility',
    lastModified: UPDATED.core,
  },
  {
    path: '/ae/thank-you/',
    market: 'ae',
    state: 'noindex',
    pageClass: 'utility',
    lastModified: UPDATED.core,
  },
  {
    path: '/test-chatbot/',
    market: 'in',
    state: 'noindex',
    pageClass: 'utility',
    lastModified: UPDATED.core,
  },
  {
    path: '/ae/test-chatbot/',
    market: 'ae',
    state: 'noindex',
    pageClass: 'utility',
    lastModified: UPDATED.core,
  },
];

export const PAGE_REGISTRY: readonly PageRecord[] = [
  ...publicPages,
  ...nonPublicPages,
];

const pageByPath = new Map(PAGE_REGISTRY.map((page) => [page.path, page]));

export function normalizeSeoPath(pathname: string): string {
  const withoutQuery = pathname.split(/[?#]/, 1)[0] || '/';
  if (withoutQuery === '/') return '/';
  return `/${withoutQuery.replace(/^\/+|\/+$/g, '')}/`;
}

export function getPageRecord(pathname: string): PageRecord | undefined {
  return pageByPath.get(normalizeSeoPath(pathname));
}

export function isSitemapEligible(page: PageRecord): boolean {
  return page.state === 'public';
}

export const SITEMAP_PAGES = PAGE_REGISTRY.filter(isSitemapEligible);

export function absoluteUrl(pathname: string): string {
  const path = normalizeSeoPath(pathname);
  return path === '/' ? SITE_URL : `${SITE_URL}${path}`;
}

export function getAlternates(pathname: string): {
  canonical?: string;
  languages?: Record<string, string>;
} {
  const page = getPageRecord(pathname);
  if (!page || page.state !== 'public') return {};

  const canonical = absoluteUrl(page.path);
  if (!page.equivalentPath) {
    return {
      canonical,
      languages: {
        [page.market === 'ae' ? 'en-AE' : 'en-IN']: canonical,
      },
    };
  }

  const equivalent = getPageRecord(page.equivalentPath);
  if (!equivalent || equivalent.state !== 'public') {
    return {
      canonical,
      languages: {
        [page.market === 'ae' ? 'en-AE' : 'en-IN']: canonical,
      },
    };
  }

  return {
    canonical,
    languages: {
      'en-IN': absoluteUrl(page.market === 'in' ? page.path : equivalent.path),
      'en-AE': absoluteUrl(page.market === 'ae' ? page.path : equivalent.path),
    },
  };
}

export function getMarketDestination(pathname: string, targetMarket: Market): string {
  const normalized = normalizeSeoPath(pathname);
  const current = getPageRecord(normalized);

  if (current?.market === targetMarket) return current.path;
  if (current?.equivalentPath) {
    const equivalent = getPageRecord(current.equivalentPath);
    if (equivalent?.market === targetMarket && equivalent.state === 'public') {
      return equivalent.path;
    }
  }

  if (targetMarket === 'ae') {
    const aeCandidate = `/ae${normalized}`;
    if (getPageRecord(aeCandidate)?.state === 'public') {
      return aeCandidate;
    }
    if (normalized.startsWith('/digital-marketing-agency-in-')) {
      return '/ae/';
    }
    if (normalized.startsWith('/brand-infrastructure/search-engine-optimisation/')) {
      return '/ae/brand-infrastructure/search-engine-optimisation/';
    }
    if (normalized.startsWith('/brand-infrastructure/social-media-marketing/')) {
      return '/ae/brand-infrastructure/social-media-marketing/';
    }
    return '/ae/';
  }

  if (normalized.startsWith('/ae/digital-marketing-agency-in-')) {
    return '/digital-marketing-agency-in-india/';
  }
  if (normalized.startsWith('/ae/brand-infrastructure/search-engine-optimisation/')) {
    return '/brand-infrastructure/search-engine-optimisation/';
  }
  return '/';
}
