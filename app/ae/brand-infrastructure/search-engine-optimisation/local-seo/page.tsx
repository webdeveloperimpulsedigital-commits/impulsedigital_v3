import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import LocalSEO from '@/components/pages/LocalSEO';
import { getFAQSchema } from "@/lib/schemaHelper";
export const metadata: Metadata = {
  title: 'Local SEO Services in Mumbai | Impulse Digital',
  description: 'Impulse Digital\'s local SEO services help businesses in Mumbai and across India rank higher in local search results, Google Maps, and location-based queries.',
  keywords: 'local seo, local seo services, local seo agency mumbai',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Local SEO Services in Mumbai | Impulse Digital',
    description: 'Impulse Digital\'s local SEO services help businesses in Mumbai and across India rank higher in local search results, Google Maps, and location-based queries.',
    url: `${SITE_URL}/ae/brand-infrastructure/search-engine-optimisation/local-seo/`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Local SEO Services in Mumbai | Impulse Digital',
    description: 'Impulse Digital\'s local SEO services help businesses in Mumbai and across India rank higher in local search results, Google Maps, and location-based queries.',
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function LocalSEOPage() {

      const schemas = [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": "https://www.theimpulsedigital.com/brand-infrastructure/search-engine-optimisation/local-seo/#service",
        "name": "Local SEO Services",
        "url": "https://www.theimpulsedigital.com/brand-infrastructure/search-engine-optimisation/local-seo/",
        "description": "Impulse Digital provides local SEO services including Google Business Profile optimisation, local keyword targeting, citation building, map ranking improvements, review optimisation, and location-based search visibility.",
        "serviceType": [
          "Local SEO",
          "Google Business Profile Optimisation",
          "Maps SEO",
          "Local Citation Building",
          "Review Optimisation",
          "Location-Based SEO"
        ],
        "areaServed": "IN",
        "provider": {
          "@type": "Organization",
          "name": "Impulse Digital",
          "url": "https://www.theimpulsedigital.com/"
        }
      }
    ];

      return (
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
          />
          <LocalSEO />
        </>
      );
        
}
