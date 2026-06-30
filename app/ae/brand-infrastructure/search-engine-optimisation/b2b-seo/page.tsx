import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import B2BSEO from '@/components/pages/B2BSEO';
import { getFAQSchema } from "@/lib/schemaHelper";
import { defaultFaqs } from "@/lib/faqData";

export const metadata: Metadata = {
  title: 'B2B SEO Services | B2B Search Engine Optimisation | Impulse Digital',
  description: 'Impulse Digital\'s B2B SEO services help business-to-business companies rank for high-intent commercial keywords and generate qualified leads through organic search.',
  keywords: 'b2b seo, b2b seo agency, b2b search engine optimisation',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'B2B SEO Services | B2B Search Engine Optimisation | Impulse Digital',
    description: 'Impulse Digital\'s B2B SEO services help business-to-business companies rank for high-intent commercial keywords and generate qualified leads through organic search.',
    url: `${SITE_URL}/ae/brand-infrastructure/search-engine-optimisation/b2b-seo/`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'B2B SEO Services | B2B Search Engine Optimisation | Impulse Digital',
    description: 'Impulse Digital\'s B2B SEO services help business-to-business companies rank for high-intent commercial keywords and generate qualified leads through organic search.',
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function B2BSEOPage() {

      const schemas = [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": "https://www.theimpulsedigital.com/brand-infrastructure/search-engine-optimisation/b2b-seo/#service",
        "name": "B2B SEO Services",
        "url": "https://www.theimpulsedigital.com/brand-infrastructure/search-engine-optimisation/b2b-seo/",
        "description": "Impulse Digital provides B2B SEO services focused on improving search visibility, qualified lead generation, industry authority, technical optimisation, and content strategy for business-to-business brands.",
        "serviceType": [
          "B2B SEO",
          "Lead Generation SEO",
          "Technical SEO",
          "B2B Content SEO",
          "Authority Building",
          "Search Strategy"
        ],
        "areaServed": [
          "IN",
          "US"
        ],
        "provider": {
          "@type": "Organization",
          "name": "Impulse Digital",
          "url": "https://www.theimpulsedigital.com/"
        }
      },
          getFAQSchema(defaultFaqs, true)
    ];

      return (
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
          />
          <B2BSEO />
        </>
      );
        
}
