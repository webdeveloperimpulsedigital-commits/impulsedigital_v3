import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import SeoAlAinLocation from '@/components/pages/seo-locations/SeoAlAinLocation';

export const metadata: Metadata = {
  title: 'SEO Agency in Al Ain | Best SEO Company in Al Ain | Impulse Digital',
  description: 'Impulse Digital is a top SEO agency in Al Ain with transparent SEO strategies and proven results across Al Ain and Abu Dhabi Emirate. Talk to us.',
  keywords: 'seo agency in al ain, seo company in al ain, SEO services in al ain, best seo agency al ain, uae, impulse digital',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'SEO Agency in Al Ain | Best SEO Company in Al Ain | Impulse Digital',
    description: 'Impulse Digital is a top SEO agency in Al Ain with transparent SEO strategies and proven results across Al Ain and Abu Dhabi Emirate. Talk to us.',
    url: `${SITE_URL}/ae/brand-infrastructure/search-engine-optimisation/al-ain/`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Agency in Al Ain | Best SEO Company in Al Ain | Impulse Digital',
    description: 'Impulse Digital is a top SEO agency in Al Ain with transparent SEO strategies and proven results across Al Ain and Abu Dhabi Emirate. Talk to us.',
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function SeoAlAinLocationPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.theimpulsedigital.com/ae/brand-infrastructure/search-engine-optimisation/al-ain/#service",
    "name": "SEO Services in Al Ain",
    "url": "https://www.theimpulsedigital.com/ae/brand-infrastructure/search-engine-optimisation/al-ain/",
    "description": "Impulse Digital is a top SEO agency in Al Ain with transparent SEO strategies and proven results across Al Ain and Abu Dhabi Emirate.",
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
      <SeoAlAinLocation />
    </>
  );
}
