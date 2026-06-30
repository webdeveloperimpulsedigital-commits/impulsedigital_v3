import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import GenerativeSearchOptimisation from '@/components/pages/GenerativeSearchOptimisation';
import { getFAQSchema } from "@/lib/schemaHelper";
import { defaultFaqs } from "@/lib/faqData";

export const metadata: Metadata = {
  title: 'AI SEO Agency in India | Advanced AI SEO Service | Impulse Digital',
  description: 'Impulse Digital is a specialist AI SEO service provider for enterprise brands across India. As a trusted AI SEO agency in India, we offer Answer Engine, Generative Engine and Entity Optimisation. Talk to us.',
  keywords: 'ai seo agency, ai seo service, ai seo company, aeo, geo, mumbai, india, impulse digital',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'AI SEO Agency in India | Advanced AI SEO Service | Impulse Digital',
    description: 'Impulse Digital is a specialist AI SEO service provider for enterprise brands across India. As a trusted AI SEO agency in India, we offer Answer Engine, Generative Engine and Entity Optimisation. Talk to us.',
    url: `${SITE_URL}/ai-marketing-systems/generative-search-optimisation/`,
    images: [{ url: `${SITE_URL}/AI-SEO-Agency.png` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI SEO Agency in India | Advanced AI SEO Service | Impulse Digital',
    description: 'Impulse Digital is a specialist AI SEO service provider for enterprise brands across India. As a trusted AI SEO agency in India, we offer Answer Engine, Generative Engine and Entity Optimisation. Talk to us.',
    images: [`${SITE_URL}/AI-SEO-Agency.png`],
    site: '@impulsedigi',
  },
};

export default function GenerativeSearchOptimisationPage() {

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://www.theimpulsedigital.com/ai-marketing-systems/generative-search-optimisation/#service",
      "name": "Generative Search Optimisation Services",
      "url": "https://www.theimpulsedigital.com/ai-marketing-systems/generative-search-optimisation/",
      "description": "Impulse Digital provides Generative Search Optimisation services to help brands improve visibility across AI search engines, answer engines, large language models, and generative discovery platforms.",
      "serviceType": [
        "Generative Search Optimisation",
        "GEO",
        "AI SEO",
        "Answer Engine Optimisation",
        "Entity SEO",
        "Structured Data Optimisation"
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
      getFAQSchema(defaultFaqs, false)
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
