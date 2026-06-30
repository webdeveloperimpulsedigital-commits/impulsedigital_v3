import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import SeoNaviMumbaiLocation from '@/components/pages/seo-locations/SeoNaviMumbaiLocation';

export const metadata: Metadata = {
  title: 'SEO Agency in Navi Mumbai | Best SEO Company | Impulse Digital',
  description: 'Looking for the best SEO agency in Navi Mumbai? Impulse Digital is a top SEO company offering expert SEO services in Navi Mumbai to drive real business growth.',
  keywords: 'seo company in navi mumbai, seo agency in navi mumbai, seo service in navi mumbai, best seo agency in navi mumbai, best seo company in navi mumbai, impulse digital',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'SEO Agency in Navi Mumbai | Best SEO Company | Impulse Digital',
    description: 'Looking for the best SEO agency in Navi Mumbai? Impulse Digital is a top SEO company offering expert SEO services in Navi Mumbai to drive real business growth.',
    url: `${SITE_URL}/brand-infrastructure/search-engine-optimisation/navi-mumbai/`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Agency in Navi Mumbai | Best SEO Company | Impulse Digital',
    description: 'Looking for the best SEO agency in Navi Mumbai? Impulse Digital is a top SEO company offering expert SEO services in Navi Mumbai to drive real business growth.',
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function SeoNaviMumbaiLocationPage() {
  return <SeoNaviMumbaiLocation />;
}
