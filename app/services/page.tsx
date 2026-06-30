import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import ServicesIndex from '@/components/pages/ServicesIndex';
import { getFAQSchema } from "@/lib/schemaHelper";
import { defaultFaqs } from "@/lib/faqData";

export const metadata: Metadata = {
  title: 'Digital Marketing Services | Impulse Digital',
  description: 'Explore Impulse Digital\'s full range of digital marketing services: SEO, social media, branding, website development, AI marketing, video production, and growth intelligence.',
  keywords: 'digital marketing services, marketing services mumbai, impulse digital services',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Digital Marketing Services | Impulse Digital',
    description: 'Explore Impulse Digital\'s full range of digital marketing services: SEO, social media, branding, website development, AI marketing, video production, and growth intelligence.',
    url: `${SITE_URL}/services/`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing Services | Impulse Digital',
    description: 'Explore Impulse Digital\'s full range of digital marketing services: SEO, social media, branding, website development, AI marketing, video production, and growth intelligence.',
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function ServicesIndexPage() {
    const schemas = [getFAQSchema(defaultFaqs, false)];

  return <ServicesIndex />;
}
