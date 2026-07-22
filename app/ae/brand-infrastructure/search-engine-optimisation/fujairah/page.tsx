import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import SeoFujairahLocation from '@/components/pages/seo-locations/SeoFujairahLocation';

export const metadata: Metadata = {
  title: 'SEO Agency in Fujairah | Best SEO Company in Fujairah | Impulse Digital',
  description: 'Impulse Digital is a top SEO agency in Fujairah with transparent SEO strategies and proven results across Fujairah and Eastern Coast. Talk to us.',
  keywords: 'seo agency in fujairah, seo company in fujairah, SEO services in fujairah, best seo agency fujairah, uae, impulse digital',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'SEO Agency in Fujairah | Best SEO Company in Fujairah | Impulse Digital',
    description: 'Impulse Digital is a top SEO agency in Fujairah with transparent SEO strategies and proven results across Fujairah and Eastern Coast. Talk to us.',
    url: `${SITE_URL}/ae/brand-infrastructure/search-engine-optimisation/fujairah/`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Agency in Fujairah | Best SEO Company in Fujairah | Impulse Digital',
    description: 'Impulse Digital is a top SEO agency in Fujairah with transparent SEO strategies and proven results across Fujairah and Eastern Coast. Talk to us.',
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
    "description": "Impulse Digital is a top SEO agency in Fujairah with transparent SEO strategies and proven results across Fujairah and Eastern Coast.",
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
