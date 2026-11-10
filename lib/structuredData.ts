import { ENTITY_FACTS, ENTITY_IDS, ORGANIZATION_REFERENCE } from '@/seo/registries/entities';
import { absoluteUrl, type Market } from '@/seo/registries/pages';
import { SITE_URL } from '@/lib/siteUrl';

type ServicePageGraphInput = {
  path: string;
  name: string;
  description: string;
  market: Market;
  areaServed: string;
};

export function buildServicePageGraph({
  path,
  name,
  description,
  market,
  areaServed,
}: ServicePageGraphInput): Record<string, unknown> {
  const url = absoluteUrl(path);
  const countryName = market === 'ae' ? 'United Arab Emirates' : 'India';
  const isCountry = areaServed === countryName || areaServed === 'UAE';

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name,
        description,
        inLanguage: market === 'ae' ? 'en-AE' : 'en-IN',
        isPartOf: { '@id': ENTITY_IDS.website },
        about: ORGANIZATION_REFERENCE,
        breadcrumb: { '@id': `${url}#breadcrumb` },
      },
      {
        '@type': 'Service',
        '@id': `${url}#service`,
        url,
        name,
        description,
        provider: ORGANIZATION_REFERENCE,
        areaServed: {
          '@type': isCountry ? 'Country' : 'City',
          name: isCountry ? countryName : areaServed,
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${url}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: market === 'ae' ? 'Impulse Digital UAE' : 'Impulse Digital India',
            item: absoluteUrl(market === 'ae' ? '/ae/' : '/'),
          },
          {
            '@type': 'ListItem',
            position: 2,
            name,
            item: url,
          },
        ],
      },
    ],
  };
}

export function buildCaseStudyPageGraph({
  path,
  name,
  description,
  market,
  isIndex = false,
}: {
  path: string;
  name: string;
  description: string;
  market: Market;
  isIndex?: boolean;
}): Record<string, unknown> {
  const url = absoluteUrl(path);
  const homeName = market === 'ae' ? 'Impulse Digital UAE' : 'Impulse Digital India';
  const homeUrl = absoluteUrl(market === 'ae' ? '/ae/' : '/');
  const caseStudiesUrl = absoluteUrl(market === 'ae' ? '/ae/case-studies/' : '/case-studies/');

  const breadcrumbItems = isIndex
    ? [
        {
          '@type': 'ListItem',
          position: 1,
          name: homeName,
          item: homeUrl,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Case Studies',
          item: caseStudiesUrl,
        },
      ]
    : [
        {
          '@type': 'ListItem',
          position: 1,
          name: homeName,
          item: homeUrl,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Case Studies',
          item: caseStudiesUrl,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name,
          item: url,
        },
      ];

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name,
        description,
        inLanguage: market === 'ae' ? 'en-AE' : 'en-IN',
        isPartOf: { '@id': ENTITY_IDS.website },
        about: ORGANIZATION_REFERENCE,
        breadcrumb: { '@id': `${url}#breadcrumb` },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${url}#breadcrumb`,
        itemListElement: breadcrumbItems,
      },
    ],
  };
}

export function buildHomeGraph(market: Market): Record<string, unknown> {
  const isAe = market === 'ae';
  const pageUrl = absoluteUrl(isAe ? '/ae/' : '/');
  const presenceId = isAe ? ENTITY_IDS.uaePresence : ENTITY_IDS.indiaPresence;
  const logo = ENTITY_FACTS.organization.logo;
  const marketFacts = isAe ? ENTITY_FACTS.presences.uae : ENTITY_FACTS.presences.india;

  const presence = isAe
    ? {
        '@type': 'ProfessionalService',
        '@id': presenceId,
        name: marketFacts.name,
        url: pageUrl,
        image: logo,
        telephone: marketFacts.telephone,
        email: ENTITY_FACTS.organization.email,
        parentOrganization: ORGANIZATION_REFERENCE,
        address: {
          '@type': 'PostalAddress',
          streetAddress: marketFacts.streetAddress,
          addressLocality: marketFacts.addressLocality,
          addressRegion: marketFacts.addressRegion,
          postalCode: marketFacts.postalCode,
          addressCountry: marketFacts.addressCountry,
        },
        areaServed: [
          { '@type': 'Country', name: 'United Arab Emirates' },
          { '@type': 'City', name: 'Dubai' },
          { '@type': 'City', name: 'Abu Dhabi' },
          { '@type': 'City', name: 'Sharjah' },
        ],
      }
    : {
        '@type': 'ProfessionalService',
        '@id': presenceId,
        name: marketFacts.name,
        url: pageUrl,
        image: logo,
        telephone: marketFacts.telephone,
        email: ENTITY_FACTS.organization.email,
        parentOrganization: ORGANIZATION_REFERENCE,
        address: {
          '@type': 'PostalAddress',
          streetAddress: marketFacts.streetAddress,
          addressLocality: marketFacts.addressLocality,
          addressRegion: marketFacts.addressRegion,
          postalCode: marketFacts.postalCode,
          addressCountry: marketFacts.addressCountry,
        },
        areaServed: [
          { '@type': 'Country', name: 'India' },
          { '@type': 'City', name: 'Thane' },
          { '@type': 'City', name: 'Mumbai' },
          { '@type': 'City', name: 'Pune' },
        ],
      };

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': ENTITY_IDS.organization,
        name: ENTITY_FACTS.organization.name,
        url: ENTITY_FACTS.organization.url,
        logo,
        image: logo,
        description: ENTITY_FACTS.organization.description,
        foundingDate: ENTITY_FACTS.organization.foundingDate,
        email: ENTITY_FACTS.organization.email,
        founder: [
          { '@id': ENTITY_IDS.adwaitJoshi },
          { '@id': ENTITY_IDS.abhishekArekar },
        ],
        sameAs: ENTITY_FACTS.organization.sameAs,
      },
      buildPersonNode(ENTITY_FACTS.people.adwaitJoshi),
      buildPersonNode(ENTITY_FACTS.people.abhishekArekar),
      presence,
      {
        '@type': 'WebSite',
        '@id': ENTITY_IDS.website,
        url: `${SITE_URL}/`,
        name: 'Impulse Digital',
        publisher: ORGANIZATION_REFERENCE,
      },
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: isAe
          ? 'Impulse Digital: Best Digital Marketing Agency in UAE'
          : 'Impulse Digital: Best Digital Marketing Agency in Mumbai',
        inLanguage: isAe ? 'en-AE' : 'en-IN',
        isPartOf: { '@id': ENTITY_IDS.website },
        about: { '@id': presenceId },
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: logo,
        },
        publisher: ORGANIZATION_REFERENCE,
      },
    ],
  };
}

function buildPersonNode(person: {
  id: string;
  name: string;
  jobTitle: string;
  image: string;
}): Record<string, unknown> {
  return {
    '@type': 'Person',
    '@id': person.id,
    name: person.name,
    jobTitle: person.jobTitle,
    image: person.image,
    worksFor: ORGANIZATION_REFERENCE,
  };
}

export function buildAboutGraph(market: Market): Record<string, unknown> {
  const isAe = market === 'ae';
  const pageUrl = absoluteUrl(isAe ? '/ae/about-us/' : '/about-us/');

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'AboutPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: 'About Impulse Digital',
        inLanguage: isAe ? 'en-AE' : 'en-IN',
        isPartOf: { '@id': ENTITY_IDS.website },
        about: ORGANIZATION_REFERENCE,
        mainEntity: ORGANIZATION_REFERENCE,
      },
      {
        '@type': 'Organization',
        '@id': ENTITY_IDS.organization,
        name: ENTITY_FACTS.organization.name,
        url: ENTITY_FACTS.organization.url,
        foundingDate: ENTITY_FACTS.organization.foundingDate,
        founder: [
          { '@id': ENTITY_IDS.adwaitJoshi },
          { '@id': ENTITY_IDS.abhishekArekar },
        ],
      },
      buildPersonNode(ENTITY_FACTS.people.adwaitJoshi),
      buildPersonNode(ENTITY_FACTS.people.abhishekArekar),
    ],
  };
}
