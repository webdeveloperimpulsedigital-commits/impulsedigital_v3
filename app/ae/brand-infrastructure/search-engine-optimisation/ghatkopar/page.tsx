import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import SeoGhatkoparLocation from '@/components/pages/seo-locations/SeoGhatkoparLocation';
import { getFAQSchema, getComplexFAQSchema } from "@/lib/schemaHelper";
import { seoGhatkoparData } from "@/data/seoGhatkoparData";

export const metadata: Metadata = {
  title: 'SEO Company in Ghatkopar | Best SEO Agency | Impulse Digital',
  description: 'Impulse Digital is a specialist SEO company in Ghatkopar with proven results 737% organic growth, 12,548 conversions. Get SEO services for Ghatkopar businesses.',
  keywords: 'seo agency in ghatkopar, seo company in ghatkopar, seo services in ghatkopar, local seo ghatkopar, impulse digital',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'SEO Company in Ghatkopar | Best SEO Agency | Impulse Digital',
    description: 'Impulse Digital is a specialist SEO company in Ghatkopar with proven results 737% organic growth, 12,548 conversions. Get SEO services for Ghatkopar businesses.',
    url: `${SITE_URL}/ae/brand-infrastructure/search-engine-optimisation/ghatkopar/`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Company in Ghatkopar | Best SEO Agency | Impulse Digital',
    description: 'Impulse Digital is a specialist SEO company in Ghatkopar with proven results 737% organic growth, 12,548 conversions. Get SEO services for Ghatkopar businesses.',
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function SeoGhatkoparLocationPage() {
    const schemas = [getComplexFAQSchema(seoGhatkoparData, true)];

  return <SeoGhatkoparLocation />;
}
