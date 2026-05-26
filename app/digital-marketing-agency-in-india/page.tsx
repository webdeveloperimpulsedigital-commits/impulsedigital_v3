import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import IndiaLocation from '@/components/pages/IndiaLocation';

export const metadata: Metadata = {
  title: 'Digital Marketing Agency in India | Impulse Digital',
  description: 'Impulse Digital is a top digital marketing agency in India offering SEO, social media, content, performance marketing, and branding solutions for brands across India.',
  keywords: 'digital marketing agency in india, digital marketing company india, impulse digital india',
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${SITE_URL}/digital-marketing-agency-in-india/`,
  },
  openGraph: {
    title: 'Digital Marketing Agency in India | Impulse Digital',
    description: 'Impulse Digital is a top digital marketing agency in India offering SEO, social media, content, performance marketing, and branding solutions for brands across India.',
    url: `${SITE_URL}/digital-marketing-agency-in-india/`,
    images: [{ url: `${SITE_URL}/img/logo-id-new.webp` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing Agency in India | Impulse Digital',
    description: 'Impulse Digital is a top digital marketing agency in India offering SEO, social media, content, performance marketing, and branding solutions for brands across India.',
    images: [`${SITE_URL}/img/logo-id-new.webp`],
    site: '@impulsedigi',
  },
};

export default function IndiaLocationPage() {
  return <IndiaLocation />;
}
