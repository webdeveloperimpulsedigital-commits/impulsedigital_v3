import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import SeoRasAlKhaimahLocation from '@/components/pages/seo-locations/SeoRasAlKhaimahLocation';
import { getComplexFAQSchema } from "@/lib/schemaHelper";
import { seoRasAlKhaimahData } from "@/data/seoRasAlKhaimahData";

export const metadata: Metadata = {
  title: 'SEO Agency in Ras Al Khaimah | Best SEO Company in Ras Al Khaimah | Impulse Digital',
  description: 'Impulse Digital is a top SEO agency in Ras Al Khaimah with transparent SEO strategies and proven results across Ras Al Khaimah and RAK Free Zone. Talk to us.',
  keywords: 'seo agency in ras al khaimah, seo company in ras al khaimah, SEO services in ras al khaimah, best seo agency ras al khaimah, uae, impulse digital',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'SEO Agency in Ras Al Khaimah | Best SEO Company in Ras Al Khaimah | Impulse Digital',
    description: 'Impulse Digital is a top SEO agency in Ras Al Khaimah with transparent SEO strategies and proven results across Ras Al Khaimah and RAK Free Zone. Talk to us.',
    url: `${SITE_URL}/ae/brand-infrastructure/search-engine-optimisation/ras-al-khaimah/`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Agency in Ras Al Khaimah | Best SEO Company in Ras Al Khaimah | Impulse Digital',
    description: 'Impulse Digital is a top SEO agency in Ras Al Khaimah with transparent SEO strategies and proven results across Ras Al Khaimah and RAK Free Zone. Talk to us.',
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function SeoRasAlKhaimahLocationPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.theimpulsedigital.com/ae/brand-infrastructure/search-engine-optimisation/ras-al-khaimah/#service",
    "name": "SEO Services in Ras Al Khaimah",
    "url": "https://www.theimpulsedigital.com/ae/brand-infrastructure/search-engine-optimisation/ras-al-khaimah/",
    "description": "Impulse Digital is a top SEO agency in Ras Al Khaimah with transparent SEO strategies and proven results across Ras Al Khaimah and RAK Free Zone.",
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

  const schemas = [serviceSchema, getComplexFAQSchema(seoRasAlKhaimahData, true)];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }} />
      <SeoRasAlKhaimahLocation />
    </>
  );
}
