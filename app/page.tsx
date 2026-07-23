import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import Home from '@/components/pages/Home';
import JsonLd from '@/components/JsonLd';
import { homeData } from '@/data/homeData';
import { buildHomeGraph } from '@/lib/structuredData';

export const metadata: Metadata = {
  title: 'Best Digital Marketing Agency in Mumbai | Impulse Digital',
  description: 'Impulse Digital is a top digital marketing agency in Mumbai that helps businesses expand their reach in the digital space with strategy, performance marketing, SEO, social media, content, and creative solutions for brands like Amazon, HUL, OLA, Dmart, HDFC and more.',
  keywords: 'digital marketing agency in mumbai, digital marketing company, impulse digital',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Best Digital Marketing Agency in Mumbai | Impulse Digital',
    description: 'Impulse Digital is a top digital marketing agency in Mumbai that helps businesses expand their reach in the digital space with strategy, performance marketing, SEO, social media, content, and creative solutions for brands like Amazon, HUL, OLA, Dmart, HDFC and more.',
    url: `${SITE_URL}/`,
    images: [{ url: `${SITE_URL}/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Digital Marketing Agency in Mumbai | Impulse Digital',
    description: 'Impulse Digital is a top digital marketing agency in Mumbai that helps businesses expand their reach in the digital space with strategy, performance marketing, SEO, social media, content, and creative solutions for brands like Amazon, HUL, OLA, Dmart, HDFC and more.',
    images: [`${SITE_URL}/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={buildHomeGraph('in')} id="site-entity-graph" />
      <Home data={homeData} />
    </>
  );
}
