import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import SeoBusinessBayLocation from '@/components/pages/seo-locations/SeoBusinessBayLocation';
import { getComplexFAQSchema } from "@/lib/schemaHelper";
import { seoBusinessBayData } from "@/data/seoBusinessBayData";

export const metadata: Metadata = {
  title: 'SEO Agency in Business Bay | Best SEO Company in Business Bay | Impulse Digital',
  description: 'Impulse Digital is a top SEO agency in Business Bay with transparent SEO strategies and proven results across Business Bay and Downtown Dubai. Talk to us.',
  keywords: 'seo agency in business bay, seo company in business bay, SEO services in business bay, best seo agency business bay, uae, impulse digital',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'SEO Agency in Business Bay | Best SEO Company in Business Bay | Impulse Digital',
    description: 'Impulse Digital is a top SEO agency in Business Bay with transparent SEO strategies and proven results across Business Bay and Downtown Dubai. Talk to us.',
    url: `${SITE_URL}/ae/brand-infrastructure/search-engine-optimisation/business-bay/`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Agency in Business Bay | Best SEO Company in Business Bay | Impulse Digital',
    description: 'Impulse Digital is a top SEO agency in Business Bay with transparent SEO strategies and proven results across Business Bay and Downtown Dubai. Talk to us.',
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function SeoBusinessBayLocationPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.theimpulsedigital.com/ae/brand-infrastructure/search-engine-optimisation/business-bay/#service",
    "name": "SEO Services in Business Bay",
    "url": "https://www.theimpulsedigital.com/ae/brand-infrastructure/search-engine-optimisation/business-bay/",
    "description": "Impulse Digital is a top SEO agency in Business Bay with transparent SEO strategies and proven results across Business Bay and Downtown Dubai.",
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

  const schemas = [serviceSchema, getComplexFAQSchema(seoBusinessBayData, true)];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }} />
      <SeoBusinessBayLocation />
    </>
  );
}
