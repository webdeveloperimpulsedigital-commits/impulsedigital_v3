import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import NaviMumbaiLocation from '@/components/pages/NaviMumbaiLocation';

export const metadata: Metadata = {
  title: 'Digital Marketing Agency in Navi Mumbai | Impulse Digital',
  description: 'Impulse Digital is a leading digital marketing agency in Navi Mumbai providing SEO, social media marketing, and performance marketing for businesses in Navi Mumbai.',
  keywords: 'digital marketing agency in navi mumbai, digital marketing navi mumbai, seo navi mumbai',
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${SITE_URL}/digital-marketing-agency-in-navi-mumbai/`,
  },
  openGraph: {
    title: 'Digital Marketing Agency in Navi Mumbai | Impulse Digital',
    description: 'Impulse Digital is a leading digital marketing agency in Navi Mumbai providing SEO, social media marketing, and performance marketing for businesses in Navi Mumbai.',
    url: `${SITE_URL}/digital-marketing-agency-in-navi-mumbai/`,
    images: [{ url: `${SITE_URL}/img/logo-id-new.webp` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing Agency in Navi Mumbai | Impulse Digital',
    description: 'Impulse Digital is a leading digital marketing agency in Navi Mumbai providing SEO, social media marketing, and performance marketing for businesses in Navi Mumbai.',
    images: [`${SITE_URL}/img/logo-id-new.webp`],
    site: '@impulsedigi',
  },
};

export default function NaviMumbaiLocationPage() {
  return <NaviMumbaiLocation />;
}
