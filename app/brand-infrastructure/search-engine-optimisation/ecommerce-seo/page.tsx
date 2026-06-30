import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import ECommerceSEO from '@/components/pages/ECommerceSEO';

export const metadata: Metadata = {
  title: 'Ecommerce SEO Services | Impulse Digital',
  description: 'Impulse Digital\'s ecommerce SEO services help online stores rank higher, drive organic traffic, and grow revenue through strategic search engine optimisation.',
  keywords: 'ecommerce seo, ecommerce seo agency, ecommerce seo services',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Ecommerce SEO Services | Impulse Digital',
    description: 'Impulse Digital\'s ecommerce SEO services help online stores rank higher, drive organic traffic, and grow revenue through strategic search engine optimisation.',
    url: `${SITE_URL}/brand-infrastructure/search-engine-optimisation/ecommerce-seo/`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ecommerce SEO Services | Impulse Digital',
    description: 'Impulse Digital\'s ecommerce SEO services help online stores rank higher, drive organic traffic, and grow revenue through strategic search engine optimisation.',
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function ECommerceSEOPage() {

      const schemas = [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": "https://www.theimpulsedigital.com/brand-infrastructure/search-engine-optimisation/ecommerce-seo/#service",
        "name": "eCommerce SEO Services",
        "url": "https://www.theimpulsedigital.com/brand-infrastructure/search-engine-optimisation/ecommerce-seo/",
        "description": "Impulse Digital provides eCommerce SEO services to improve product visibility, category rankings, technical performance, organic traffic, and conversions for online stores.",
        "serviceType": [
          "eCommerce SEO",
          "Product Page SEO",
          "Category Page SEO",
          "Technical SEO for eCommerce",
          "Online Store SEO",
          "Conversion-Focused SEO"
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
          <ECommerceSEO />
        </>
      );
        
}
