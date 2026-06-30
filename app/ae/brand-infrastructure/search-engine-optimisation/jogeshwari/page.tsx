import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import SeoJogeshwariLocation from '@/components/pages/seo-locations/SeoJogeshwariLocation';
import { getFAQSchema, getComplexFAQSchema } from "@/lib/schemaHelper";
import { defaultFaqs } from "@/lib/faqData";
import { seoJogeshwariData } from "@/data/seoJogeshwariData";

export const metadata: Metadata = {
  title: 'SEO Agency in Jogeshwari | Best SEO Company | Impulse Digital',
  description: 'Impulse Digital is a trusted SEO agency in Jogeshwari helping businesses improve Google rankings, local visibility, and organic traffic. Our SEO service in Jogeshwari includes technical SEO, keyword research, content optimisation, and clear performance reporting to generate qualified inquiries.',
  keywords: 'seo agency in jogeshwari, seo company in jogeshwari, seo services in jogeshwari, impulse digital',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'SEO Agency in Jogeshwari | Best SEO Company | Impulse Digital',
    description: 'Impulse Digital is a trusted SEO agency in Jogeshwari helping businesses improve Google rankings, local visibility, and organic traffic. Our SEO service in Jogeshwari includes technical SEO, keyword research, content optimisation, and clear performance reporting to generate qualified inquiries.',
    url: `${SITE_URL}/ae/brand-infrastructure/search-engine-optimisation/jogeshwari/`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Agency in Jogeshwari | Best SEO Company | Impulse Digital',
    description: 'Impulse Digital is a trusted SEO agency in Jogeshwari helping businesses improve Google rankings, local visibility, and organic traffic. Our SEO service in Jogeshwari includes technical SEO, keyword research, content optimisation, and clear performance reporting to generate qualified inquiries.',
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function SeoJogeshwariLocationPage() {
    const schemas = [getFAQSchema(defaultFaqs, true), getComplexFAQSchema(seoJogeshwariData, true)];

  return <SeoJogeshwariLocation />;
}
