import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import SeoDeiraLocation from '@/components/pages/seo-locations/SeoDeiraLocation';
import { getComplexFAQSchema } from "@/lib/schemaHelper";
import { seoDeiraData } from "@/data/seoDeiraData";

export const metadata: Metadata = {
  title: 'SEO Agency in Deira | Best SEO Company in Deira | Impulse Digital',
  description: 'Impulse Digital is a top SEO agency in Deira with transparent SEO strategies and proven results across Deira and across Dubai. Talk to us.',
  keywords: 'seo agency in deira, seo company in deira, SEO services in deira, best seo agency deira, uae, impulse digital',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'SEO Agency in Deira | Best SEO Company in Deira | Impulse Digital',
    description: 'Impulse Digital is a top SEO agency in Deira with transparent SEO strategies and proven results across Deira and across Dubai. Talk to us.',
    url: `${SITE_URL}/ae/brand-infrastructure/search-engine-optimisation/deira/`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Agency in Deira | Best SEO Company in Deira | Impulse Digital',
    description: 'Impulse Digital is a top SEO agency in Deira with transparent SEO strategies and proven results across Deira and across Dubai. Talk to us.',
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function SeoDeiraLocationPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.theimpulsedigital.com/ae/brand-infrastructure/search-engine-optimisation/deira/#service",
    "name": "SEO Services in Deira",
    "url": "https://www.theimpulsedigital.com/ae/brand-infrastructure/search-engine-optimisation/deira/",
    "description": "Impulse Digital is a top SEO agency in Deira with transparent SEO strategies and proven results across Deira and across Dubai.",
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
      "name": "Deira"
    }
  };

  const schemas = [serviceSchema, getComplexFAQSchema(seoDeiraData, true), localBusinessSchema];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }} />
      <SeoDeiraLocation />
    </>
  );
}
