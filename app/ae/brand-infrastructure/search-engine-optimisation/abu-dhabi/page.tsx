import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import SeoAbuDhabiLocation from '@/components/pages/seo-locations/SeoAbuDhabiLocation';

export const metadata: Metadata = {
  title: 'SEO Agency in Abu Dhabi | Best SEO Company in Abu Dhabi | Impulse Digital',
  description: 'Impulse Digital is a top SEO agency in Abu Dhabi with transparent SEO strategies and proven results across Abu Dhabi and across the UAE. Talk to us.',
  keywords: 'seo agency in abu dhabi, seo company in abu dhabi, SEO services in abu dhabi, best seo agency abu dhabi, uae, impulse digital',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'SEO Agency in Abu Dhabi | Best SEO Company in Abu Dhabi | Impulse Digital',
    description: 'Impulse Digital is a top SEO agency in Abu Dhabi with transparent SEO strategies and proven results across Abu Dhabi and across the UAE. Talk to us.',
    url: `${SITE_URL}/ae/brand-infrastructure/search-engine-optimisation/abu-dhabi/`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Agency in Abu Dhabi | Best SEO Company in Abu Dhabi | Impulse Digital',
    description: 'Impulse Digital is a top SEO agency in Abu Dhabi with transparent SEO strategies and proven results across Abu Dhabi and across the UAE. Talk to us.',
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function SeoAbuDhabiLocationPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.theimpulsedigital.com/ae/brand-infrastructure/search-engine-optimisation/abu-dhabi/#service",
    "name": "SEO Services in Abu Dhabi",
    "url": "https://www.theimpulsedigital.com/ae/brand-infrastructure/search-engine-optimisation/abu-dhabi/",
    "description": "Impulse Digital is a top SEO agency in Abu Dhabi with transparent SEO strategies and proven results across Abu Dhabi and across the UAE.",
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
      <SeoAbuDhabiLocation />
    </>
  );
}
