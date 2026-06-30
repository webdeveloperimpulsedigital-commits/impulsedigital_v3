import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import SeoBandraLocation from '@/components/pages/seo-locations/SeoBandraLocation';
import { getFAQSchema, getComplexFAQSchema } from "@/lib/schemaHelper";
import { defaultFaqs } from "@/lib/faqData";
import { seoBandraData } from "@/data/seoBandraData";

export const metadata: Metadata = {
  title: 'SEO Agency in Bandra | Best SEO Company | Impulse Digital',
  description: 'Impulse Digital is a trusted SEO company in Bandra offering Technical SEO, Local SEO, B2B SEO and eCommerce SEO services for businesses in Bandra and BKC. Rank higher. Talk to us.',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'SEO Agency in Bandra | Best SEO Company | Impulse Digital',
    description: 'Impulse Digital provides expert local SEO services in Bandra, helping businesses improve their search rankings and attract local customers. Rank higher. Talk to us.',
    url: `${SITE_URL}/ae/brand-infrastructure/search-engine-optimisation/bandra/`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Agency in Bandra | Best SEO Company | Impulse Digital',
    description: 'Impulse Digital provides expert local SEO services in Bandra, helping businesses improve their search rankings and attract local customers. Rank higher. Talk to us.',
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function SeoBandraLocationPage() {
    const schemas = [getFAQSchema(defaultFaqs, true), getComplexFAQSchema(seoBandraData, true)];

  return <SeoBandraLocation />;
}
