import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import SeoTurbheLocation from '@/components/pages/seo-locations/SeoTurbheLocation';
import { getFAQSchema, getComplexFAQSchema } from "@/lib/schemaHelper";
import { seoTurbheData } from "@/data/seoTurbheData";

export const metadata: Metadata = {
  title: 'SEO Company in Turbhe | SEO Agency | Impulse Digital',
  description: 'Impulse Digital is a trusted SEO company in Turbhe with proven results, including 737% organic traffic growth for Qure.ai. As a specialist SEO agency in Turbhe, we focus on lasting visibility.',
  keywords: 'seo agency in turbhe, seo company in turbhe, seo services, local seo turbhe, impulse digital',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'SEO Company in Turbhe | SEO Agency | Impulse Digital',
    description: 'Impulse Digital is a trusted SEO company in Turbhe with proven results, including 737% organic traffic growth for Qure.ai. As a specialist SEO agency in Turbhe, we focus on lasting visibility.',
    url: `${SITE_URL}/brand-infrastructure/search-engine-optimisation/turbhe/`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Company in Turbhe | SEO Agency | Impulse Digital',
    description: 'Impulse Digital is a trusted SEO company in Turbhe with proven results, including 737% organic traffic growth for Qure.ai. As a specialist SEO agency in Turbhe, we focus on lasting visibility.',
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function SeoTurbheLocationPage() {
    const schemas = [getComplexFAQSchema(seoTurbheData, false)];

  return <SeoTurbheLocation />;
}
