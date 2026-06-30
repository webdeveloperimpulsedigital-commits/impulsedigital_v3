import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import BrandInfrastructure from '@/components/pages/BrandInfrastructure';

export const metadata: Metadata = {
  title: 'Brand Infrastructure Services | Impulse Digital',
  description: 'Impulse Digital\'s Brand Infrastructure division builds the digital foundations brands need to grow: SEO, social media, websites, branding, and video production.',
  keywords: 'brand infrastructure, digital marketing services, brand building',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Brand Infrastructure Services | Impulse Digital',
    description: 'Impulse Digital\'s Brand Infrastructure division builds the digital foundations brands need to grow: SEO, social media, websites, branding, and video production.',
    url: `${SITE_URL}/brand-infrastructure/`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brand Infrastructure Services | Impulse Digital',
    description: 'Impulse Digital\'s Brand Infrastructure division builds the digital foundations brands need to grow: SEO, social media, websites, branding, and video production.',
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function BrandInfrastructurePage() {

      const schemas = [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": "https://www.theimpulsedigital.com/brand-infrastructure/#service",
        "name": "Brand Infrastructure Services",
        "url": "https://www.theimpulsedigital.com/brand-infrastructure/",
        "description": "Impulse Digital provides Brand Infrastructure services including branding, SEO, social media marketing, video production, website development, and employer branding.",
        "serviceType": [
          "Brand Infrastructure",
          "Branding",
          "Search Engine Optimisation",
          "Social Media Marketing",
          "Video Production",
          "Website Development",
          "Employer Branding"
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
          <BrandInfrastructure />
        </>
      );
        
}
