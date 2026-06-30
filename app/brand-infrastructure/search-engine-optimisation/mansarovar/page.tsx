import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import SeoMansarovarLocation from '@/components/pages/seo-locations/SeoMansarovarLocation';
import { getFAQSchema, getComplexFAQSchema } from "@/lib/schemaHelper";
import { defaultFaqs } from "@/lib/faqData";
import { seoMansarovarData } from "@/data/seoMansarovarData";

export const metadata: Metadata = {
  title: 'SEO Company in Mansarovar | SEO Services by Impulse Digital',
  description: 'Impulse Digital provides expert local SEO services in Mansarovar to drive better local search rankings and business growth.',
  keywords: 'seo company in mansarovar, seo agency in mansarovar, seo services in mansarovar, local seo company, impulse digital',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'SEO Company in Mansarovar | SEO Services by Impulse Digital',
    description: 'Impulse Digital is best SEO company in Mansarovar helping businesses improve Google rankings, local visibility, organic traffic, and qualified enquiries through technical SEO, content optimisation, keyword research, and clear reporting.',
    url: `${SITE_URL}/brand-infrastructure/search-engine-optimisation/mansarovar/`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Company in Mansarovar | SEO Services by Impulse Digital',
    description: 'Impulse Digital is best SEO company in Mansarovar helping businesses improve Google rankings, local visibility, organic traffic, and qualified enquiries through technical SEO, content optimisation, keyword research, and clear reporting.',
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function SeoMansarovarLocationPage() {
    const schemas = [getFAQSchema(defaultFaqs, false), getComplexFAQSchema(seoMansarovarData, false)];

  return <SeoMansarovarLocation />;
}
