import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import SeoFujairahLocation from '@/components/pages/seo-locations/SeoFujairahLocation';

export const metadata: Metadata = {
  title: 'SEO Agency in Fujairah | SEO Services | Impulse Digital',
  description: 'SEO services in Fujairah covering technical SEO, local search, content planning, ecommerce SEO, B2B SEO, and measurable organic search improvement.',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'SEO Agency in Fujairah | SEO Services | Impulse Digital',
    description: 'SEO services in Fujairah covering technical SEO, local search, content planning, ecommerce SEO, B2B SEO, and measurable organic search improvement.',
    url: `${SITE_URL}/ae/brand-infrastructure/search-engine-optimisation/fujairah/`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Agency in Fujairah | SEO Services | Impulse Digital',
    description: 'SEO services in Fujairah covering technical SEO, local search, content planning, ecommerce SEO, B2B SEO, and measurable organic search improvement.',
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function SeoFujairahLocationPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.theimpulsedigital.com/ae/brand-infrastructure/search-engine-optimisation/fujairah/#service",
    "name": "SEO Services in Fujairah",
    "url": "https://www.theimpulsedigital.com/ae/brand-infrastructure/search-engine-optimisation/fujairah/",
    "description": "SEO services in Fujairah covering technical SEO, local search, content planning, ecommerce SEO, B2B SEO, and measurable organic search improvement.",
    "serviceType": [
      "Search Engine Optimisation",
      "Technical SEO",
      "Local SEO",
      "eCommerce SEO",
      "Enterprise SEO"
    ],
    "areaServed": [
      "AE"
    ],
    "provider": {
      "@type": "Organization",
      "name": "Impulse Digital",
      "url": "https://www.theimpulsedigital.com/ae/"
    }
  };

  const schemas = [serviceSchema];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }} />
      <SeoFujairahLocation />
    </>
  );
}
