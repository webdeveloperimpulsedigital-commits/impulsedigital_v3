import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import Home from '@/components/pages/Home';

export const metadata: Metadata = {
  title: 'Best Digital Marketing Agency in Mumbai | Impulse Digital',
  description: 'Impulse Digital is a top digital marketing agency in Mumbai that helps businesses expand their reach in the digital space with strategy, performance marketing, SEO, social media, content, and creative solutions for brands like Amazon, HUL, OLA, Dmart, HDFC and more.',
  keywords: 'digital marketing agency in mumbai, digital marketing company, impulse digital',
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${SITE_URL}/`,
  },
  openGraph: {
    title: 'Best Digital Marketing Agency in Mumbai | Impulse Digital',
    description: 'Impulse Digital is a top digital marketing agency in Mumbai that helps businesses expand their reach in the digital space with strategy, performance marketing, SEO, social media, content, and creative solutions for brands like Amazon, HUL, OLA, Dmart, HDFC and more.',
    url: `${SITE_URL}/`,
    images: [{ url: `${SITE_URL}/img/logo-id-new.webp` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Digital Marketing Agency in Mumbai | Impulse Digital',
    description: 'Impulse Digital is a top digital marketing agency in Mumbai that helps businesses expand their reach in the digital space with strategy, performance marketing, SEO, social media, content, and creative solutions for brands like Amazon, HUL, OLA, Dmart, HDFC and more.',
    images: [`${SITE_URL}/img/logo-id-new.webp`],
    site: '@impulsedigi',
  },
};

export default function HomePage() {
  return <Home />;
}
