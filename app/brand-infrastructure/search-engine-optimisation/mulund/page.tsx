import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import SeoMulundLocation from '@/components/pages/seo-locations/SeoMulundLocation';
import { getFAQSchema, getComplexFAQSchema } from "@/lib/schemaHelper";
import { defaultFaqs } from "@/lib/faqData";
import { seoMulundData } from "@/data/seoMulundData";

export const metadata: Metadata = {
  title: 'SEO Company in Mulund | SEO Services for Impulse Digital',
  description: 'Impulse Digital is an SEO company in Mulund offering SEO services for stronger Google rankings, local visibility, relevant traffic, and qualified enquiries through technical SEO, content optimisation, and local search strategy.',
  keywords: 'seo company in mulund, seo services in mulund, seo agency, impulse digital',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'SEO Company in Mulund | SEO Services for Impulse Digital',
    description: 'Impulse Digital is an SEO company in Mulund offering SEO services for stronger Google rankings, local visibility, relevant traffic, and qualified enquiries through technical SEO, content optimisation, and local search strategy.',
    url: `${SITE_URL}/brand-infrastructure/search-engine-optimisation/mulund/`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Company in Mulund | SEO Services for Impulse Digital',
    description: 'Impulse Digital is an SEO company in Mulund offering SEO services for stronger Google rankings, local visibility, relevant traffic, and qualified enquiries through technical SEO, content optimisation, and local search strategy.',
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function SeoMulundLocationPage() {
    const schemas = [getFAQSchema(defaultFaqs, false), getComplexFAQSchema(seoMulundData, false)];

  return <SeoMulundLocation />;
}
