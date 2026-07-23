import { ENTITY_IDS, ORGANIZATION_REFERENCE } from '@/seo/registries/entities';
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

export function buildHomeGraph(market: Market): Record<string, unknown> {
  const isAe = market === 'ae';
  const pageUrl = absoluteUrl(isAe ? '/ae/' : '/');
  const presenceId = isAe ? ENTITY_IDS.uaePresence : ENTITY_IDS.indiaPresence;
  const logo = `${SITE_URL}/ImpulseDigital_Logo.svg`;

  const presence = isAe
    ? {
        '@type': 'ProfessionalService',
        '@id': presenceId,
        name: 'Impulse Digital UAE',
        url: pageUrl,
        image: logo,
        telephone: '+97145276816',
        email: 'collabs@theimpulsedigital.com',
        parentOrganization: ORGANIZATION_REFERENCE,
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Regus Boulevard Tower 1, 9th Floor, Boulevard Plaza Tower 1, Shk. Mohammed Bin Rashid Blvd., P.O Box 340733 Downtown',
          addressLocality: 'Dubai',
          addressRegion: 'Dubai',
          postalCode: '340733',
          addressCountry: 'AE',
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
        name: 'Impulse Digital India',
        url: pageUrl,
        image: logo,
        telephone: '+91-9769285224',
        email: 'collabs@theimpulsedigital.com',
        parentOrganization: ORGANIZATION_REFERENCE,
        address: {
          '@type': 'PostalAddress',
          streetAddress: '304 - 305, Chirag Infotech, Road No. 16/Z, Ambica Nagar, Wagle Industrial Estate',
          addressLocality: 'Thane',
          addressRegion: 'Maharashtra',
          postalCode: '400604',
          addressCountry: 'IN',
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
        name: 'Impulse Digital',
        url: `${SITE_URL}/`,
        logo,
        image: logo,
        email: 'collabs@theimpulsedigital.com',
        sameAs: [
          'https://www.facebook.com/theimpulsedigital',
          'https://twitter.com/impulsedigi',
          'https://www.instagram.com/_impulse_digital/',
          'https://www.linkedin.com/company/impulse-digital-marketing-mumbai',
          'https://www.youtube.com/channel/UCzQglQAeXGI99Z-LZI9jBkw',
        ],
      },
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
          ? 'Impulse Digital: Best Digital Marketing Agency in Dubai'
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
