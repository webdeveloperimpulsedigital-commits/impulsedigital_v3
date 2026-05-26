import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import ThaneLocation from '@/components/pages/ThaneLocation';

export const metadata: Metadata = {
  title: 'Digital Marketing Agency in Thane | Impulse Digital',
  description: 'Impulse Digital is a leading digital marketing agency in Thane offering SEO, social media, content, and performance marketing solutions for businesses in Thane.',
  keywords: 'digital marketing agency in thane, digital marketing company thane, seo thane',
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${SITE_URL}/digital-marketing-agency-in-thane/`,
  },
  openGraph: {
    title: 'Digital Marketing Agency in Thane | Impulse Digital',
    description: 'Impulse Digital is a leading digital marketing agency in Thane offering SEO, social media, content, and performance marketing solutions for businesses in Thane.',
    url: `${SITE_URL}/digital-marketing-agency-in-thane/`,
    images: [{ url: `${SITE_URL}/img/logo-id-new.webp` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing Agency in Thane | Impulse Digital',
    description: 'Impulse Digital is a leading digital marketing agency in Thane offering SEO, social media, content, and performance marketing solutions for businesses in Thane.',
    images: [`${SITE_URL}/img/logo-id-new.webp`],
    site: '@impulsedigi',
  },
};

export default function ThaneLocationPage() {
  return <ThaneLocation />;
}
