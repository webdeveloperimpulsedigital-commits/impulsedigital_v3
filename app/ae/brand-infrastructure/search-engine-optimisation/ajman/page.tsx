import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import SeoAjmanLocation from '@/components/pages/seo-locations/SeoAjmanLocation';
import { getComplexFAQSchema } from "@/lib/schemaHelper";
import { seoAjmanData } from "@/data/seoAjmanData";

export const metadata: Metadata = {
  title: 'SEO Agency in Ajman | Best SEO Company in Ajman | Impulse Digital',
  description: 'Impulse Digital is a top SEO agency in Ajman with transparent SEO strategies and proven results across Ajman and neighboring Emirates. Talk to us.',
  keywords: 'seo agency in ajman, seo company in ajman, SEO services in ajman, best seo agency ajman, uae, impulse digital',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'SEO Agency in Ajman | Best SEO Company in Ajman | Impulse Digital',
    description: 'Impulse Digital is a top SEO agency in Ajman with transparent SEO strategies and proven results across Ajman and neighboring Emirates. Talk to us.',
    url: `${SITE_URL}/ae/brand-infrastructure/search-engine-optimisation/ajman/`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Agency in Ajman | Best SEO Company in Ajman | Impulse Digital',
    description: 'Impulse Digital is a top SEO agency in Ajman with transparent SEO strategies and proven results across Ajman and neighboring Emirates. Talk to us.',
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function SeoAjmanLocationPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.theimpulsedigital.com/ae/brand-infrastructure/search-engine-optimisation/ajman/#service",
    "name": "SEO Services in Ajman",
    "url": "https://www.theimpulsedigital.com/ae/brand-infrastructure/search-engine-optimisation/ajman/",
    "description": "Impulse Digital is a top SEO agency in Ajman with transparent SEO strategies and proven results across Ajman and neighboring Emirates.",
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
      "name": "Ajman"
    }
  };

  const schemas = [serviceSchema, getComplexFAQSchema(seoAjmanData, true), localBusinessSchema];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }} />
      <SeoAjmanLocation />
    </>
  );
}
