import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import SeoSharjahLocation from '@/components/pages/seo-locations/SeoSharjahLocation';

export const metadata: Metadata = {
  title: 'SEO Agency in Sharjah | Best SEO Company in Sharjah | Impulse Digital',
  description: 'Impulse Digital is a top SEO agency in Sharjah with transparent SEO strategies and proven results across Sharjah and Northern Emirates. Talk to us.',
  keywords: 'seo agency in sharjah, seo company in sharjah, SEO services in sharjah, best seo agency sharjah, uae, impulse digital',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'SEO Agency in Sharjah | Best SEO Company in Sharjah | Impulse Digital',
    description: 'Impulse Digital is a top SEO agency in Sharjah with transparent SEO strategies and proven results across Sharjah and Northern Emirates. Talk to us.',
    url: `${SITE_URL}/ae/brand-infrastructure/search-engine-optimisation/sharjah/`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Agency in Sharjah | Best SEO Company in Sharjah | Impulse Digital',
    description: 'Impulse Digital is a top SEO agency in Sharjah with transparent SEO strategies and proven results across Sharjah and Northern Emirates. Talk to us.',
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function SeoSharjahLocationPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.theimpulsedigital.com/ae/brand-infrastructure/search-engine-optimisation/sharjah/#service",
    "name": "SEO Services in Sharjah",
    "url": "https://www.theimpulsedigital.com/ae/brand-infrastructure/search-engine-optimisation/sharjah/",
    "description": "Impulse Digital is a top SEO agency in Sharjah with transparent SEO strategies and proven results across Sharjah and Northern Emirates.",
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
      <SeoSharjahLocation />
    </>
  );
}
