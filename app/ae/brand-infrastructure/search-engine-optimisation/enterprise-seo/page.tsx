import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import EnterpriseSEO from '@/components/pages/EnterpriseSEO';

export const metadata: Metadata = {
  title: 'Enterprise SEO Services | Impulse Digital',
  description: 'Impulse Digital delivers enterprise SEO solutions for large-scale websites, helping businesses improve rankings, drive organic traffic, and dominate competitive search markets.',
  keywords: 'enterprise seo, enterprise seo agency, large scale seo services',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Enterprise SEO Services | Impulse Digital',
    description: 'Impulse Digital delivers enterprise SEO solutions for large-scale websites, helping businesses improve rankings, drive organic traffic, and dominate competitive search markets.',
    url: `${SITE_URL}/ae/brand-infrastructure/search-engine-optimisation/enterprise-seo/`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enterprise SEO Services | Impulse Digital',
    description: 'Impulse Digital delivers enterprise SEO solutions for large-scale websites, helping businesses improve rankings, drive organic traffic, and dominate competitive search markets.',
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function EnterpriseSEOPage() {

      const schemas = [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": "https://www.theimpulsedigital.com/brand-infrastructure/search-engine-optimisation/enterprise-seo/#service",
        "name": "Enterprise SEO Services",
        "url": "https://www.theimpulsedigital.com/brand-infrastructure/search-engine-optimisation/enterprise-seo/",
        "description": "Impulse Digital provides enterprise SEO services for large websites, multi-location brands, complex digital ecosystems, multilingual websites, scalable technical SEO, and long-term organic growth.",
        "serviceType": [
          "Enterprise SEO",
          "Large Website SEO",
          "Scalable Technical SEO",
          "Multi-Location SEO",
          "Multilingual SEO",
          "Organic Growth Strategy"
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
      }
    ];

      return (
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
          />
          <EnterpriseSEO />
        </>
      );
        
}
