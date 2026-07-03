import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import GenerativeSearchOptimisation from '@/components/pages/GenerativeSearchOptimisation';
import { getFAQSchema } from "@/lib/schemaHelper";
export const metadata: Metadata = {
  title: 'AI SEO Agency | Advanced AI SEO Service | Impulse Digital',
  description: 'Impulse Digital is a specialist AI SEO service provider for enterprise brands across UAE. As a trusted AI SEO agency in Dubai, we offer Answer Engine, Generative Engine and Entity Optimisation. Talk to us.',
  keywords: 'ai seo agency, ai seo service, ai seo company, aeo, geo, dubai, uae, united arab emirates, impulse digital',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'AI SEO Agency | Advanced AI SEO Service | Impulse Digital',
    description: 'Impulse Digital is a specialist AI SEO service provider for enterprise brands across UAE. As a trusted AI SEO agency in Dubai, we offer Answer Engine, Generative Engine and Entity Optimisation. Talk to us.',
    url: `${SITE_URL}/ae/ai-marketing-systems/generative-search-optimisation/`,
    images: [{ url: `${SITE_URL}/ae/AI-SEO-Agency.png` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI SEO Agency | Advanced AI SEO Service | Impulse Digital',
    description: 'Impulse Digital is a specialist AI SEO service provider for enterprise brands across UAE. As a trusted AI SEO agency in Dubai, we offer Answer Engine, Generative Engine and Entity Optimisation. Talk to us.',
    images: [`${SITE_URL}/ae/AI-SEO-Agency.png`],
    site: '@impulsedigi',
  },
};

export default function GenerativeSearchOptimisationPage() {

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://www.theimpulsedigital.com/ae/ai-marketing-systems/generative-search-optimisation/#service",
      "name": "Generative Search Optimisation Services",
      "url": "https://www.theimpulsedigital.com/ae/ai-marketing-systems/generative-search-optimisation/",
      "description": "Impulse Digital is a specialist AI SEO service provider for enterprise brands across UAE. As a trusted AI SEO agency in Dubai, we offer Answer Engine, Generative Engine and Entity Optimisation. Talk to us.",
      "serviceType": [
        "Generative Search Optimisation",
        "GEO",
        "AI SEO",
        "Answer Engine Optimisation",
        "Entity SEO",
        "Structured Data Optimisation"
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
      <GenerativeSearchOptimisation />
    </>
  );

}
