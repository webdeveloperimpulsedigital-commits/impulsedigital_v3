import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import SeoUaeLocation from '@/components/pages/seo-locations/SeoUaeLocation';
import { getComplexFAQSchema } from "@/lib/schemaHelper";
import { seoUaeData } from "@/data/seoUaeData";

export const metadata: Metadata = {
  title: 'SEO Agency in UAE | Best SEO Company in UAE | Impulse Digital',
  description: 'Impulse Digital is a top SEO agency in UAE with transparent SEO strategies and proven results across Dubai, Abu Dhabi, and wider Emirates. Talk to us.',
  keywords: 'seo agency in uae, seo company in uae, SEO services in uae, best seo agency uae, dubai, abu dhabi, impulse digital',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'SEO Agency in UAE | Best SEO Company in UAE | Impulse Digital',
    description: 'Impulse Digital is a top SEO agency in UAE with transparent SEO strategies and proven results across Dubai, Abu Dhabi, and wider Emirates. Talk to us.',
    url: `${SITE_URL}/ae/brand-infrastructure/search-engine-optimisation/uae/`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Agency in UAE | Best SEO Company in UAE | Impulse Digital',
    description: 'Impulse Digital is a top SEO agency in UAE with transparent SEO strategies and proven results across Dubai, Abu Dhabi, and wider Emirates. Talk to us.',
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function SeoUaeLocationPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.theimpulsedigital.com/ae/brand-infrastructure/search-engine-optimisation/uae/#service",
    "name": "SEO Services in UAE",
    "url": "https://www.theimpulsedigital.com/ae/brand-infrastructure/search-engine-optimisation/uae/",
    "description": "Impulse Digital is a top SEO agency in UAE with transparent SEO strategies and proven results across Dubai, Abu Dhabi, and wider Emirates.",
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

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Impulse Digital",
    "telephone": "+97145276816",
    "email": "collabs@theimpulsedigital.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Regus Boulevard Tower 1, 9th Floor, Boulevard Plaza Tower 1, Sheikh Mohammed Bin Rashid Boulevard",
      "postOfficeBoxNumber": "P.O. Box 340733",
      "addressLocality": "Downtown Dubai",
      "addressRegion": "Dubai",
      "postalCode": "340733",
      "addressCountry": "AE"
    },
    "areaServed": {
      "@type": "Place",
      "name": "UAE"
    }
  };

  const schemas = [serviceSchema, getComplexFAQSchema(seoUaeData, true), localBusinessSchema];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }} />
      <SeoUaeLocation />
    </>
  );
}
