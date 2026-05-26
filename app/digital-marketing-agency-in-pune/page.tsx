import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import PuneLocation from '@/components/pages/PuneLocation';

export const metadata: Metadata = {
  title: 'Digital Marketing Agency in Pune | Impulse Digital',
  description: 'Impulse Digital is a leading digital marketing agency in Pune providing SEO, social media marketing, branding, and performance marketing for businesses in Pune.',
  keywords: 'digital marketing agency in pune, digital marketing company pune, seo pune',
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${SITE_URL}/digital-marketing-agency-in-pune/`,
  },
  openGraph: {
    title: 'Digital Marketing Agency in Pune | Impulse Digital',
    description: 'Impulse Digital is a leading digital marketing agency in Pune providing SEO, social media marketing, branding, and performance marketing for businesses in Pune.',
    url: `${SITE_URL}/digital-marketing-agency-in-pune/`,
    images: [{ url: `${SITE_URL}/img/logo-id-new.webp` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing Agency in Pune | Impulse Digital',
    description: 'Impulse Digital is a leading digital marketing agency in Pune providing SEO, social media marketing, branding, and performance marketing for businesses in Pune.',
    images: [`${SITE_URL}/img/logo-id-new.webp`],
    site: '@impulsedigi',
  },
};

export default function PuneLocationPage() {
  return <PuneLocation />;
}
