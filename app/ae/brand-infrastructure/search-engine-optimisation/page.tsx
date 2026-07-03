import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import SearchEngineOptimisation from '@/components/pages/SearchEngineOptimisation';
import { searchEngineOptimisationData } from '@/data/ae/searchEngineOptimisationData';
;
import { getFAQSchema } from "@/lib/schemaHelper";
export const metadata: Metadata = {
  title: 'SEO Company in Dubai | Best SEO Agency | Impulse Digital',
  description: 'Impulse Digital is the best SEO company in Dubai, offering Technical SEO, Local SEO, B2B SEO, and eCommerce SEO services to improve rankings and drive organic growth for Dubai businesses.',
  keywords: 'seo company in Dubai, seo agency in Dubai, best seo service,search engine optimisation, seo services, Dubai, impulse digital',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'SEO Company in Dubai | Best SEO Agency | Impulse Digital',
    description: 'Impulse Digital is the best SEO company in Dubai, offering Technical SEO, Local SEO, B2B SEO, and eCommerce SEO services to improve rankings and drive organic growth for Dubai businesses.',
    url: `${SITE_URL}/ae/brand-infrastructure/search-engine-optimisation/`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Company in Dubai | Best SEO Agency | Impulse Digital',
    description: 'Impulse Digital is the best SEO company in Dubai, offering Technical SEO, Local SEO, B2B SEO, and eCommerce SEO services to improve rankings and drive organic growth for Dubai businesses.',
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function SearchEngineOptimisationPage() {

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://www.theimpulsedigital.com/ae/brand-infrastructure/search-engine-optimisation/#service",
      "name": "Search Engine Optimisation Services",
      "url": "https://www.theimpulsedigital.com/ae/brand-infrastructure/search-engine-optimisation/",
      "description": "Impulse Digital is the best SEO company in Dubai, offering Technical SEO, Local SEO, B2B SEO, and eCommerce SEO services to improve rankings and drive organic growth for Dubai businesses.",
      "serviceType": [
        "Search Engine Optimisation",
        "Technical SEO",
        "On Page SEO",
        "Off Page SEO",
        "Keyword Research",
        "Content Optimisation",
        "Local SEO",
        "eCommerce SEO",
        "B2B SEO",
        "Enterprise SEO"
      ],
      "areaServed": [
        "AE",
        "US"
      ],
      "provider": {
        "@type": "Organization",
        "name": "Impulse Digital",
        "url": "https://www.theimpulsedigital.com/ae/"
      }
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <SearchEngineOptimisation data={searchEngineOptimisationData} />
    </>
  );

}
