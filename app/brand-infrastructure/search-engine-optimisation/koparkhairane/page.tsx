import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import SeoKoparkhairaneLocation from '@/components/pages/seo-locations/SeoKoparkhairaneLocation';

export const metadata: Metadata = {
  title: 'SEO Agency in Koparkhairane | Best SEO Services | Impulse Digital',
  description: 'Struggling to rank in Koparkhairane? Impulse Digital is the SEO company that fixes that, offering Technical SEO, Local SEO and B2B SEO. A results-driven SEO company. Talk to us.',
  keywords: 'seo agency in koparkhairane, local seo in koparkhairane, seo company in koparkhairane, seo service, impulse digital',
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${SITE_URL}/brand-infrastructure/search-engine-optimisation/koparkhairane/`,
  },
  openGraph: {
    title: 'SEO Agency in Koparkhairane | Best SEO Services | Impulse Digital',
    description: 'Struggling to rank in Koparkhairane? Impulse Digital is the SEO company that fixes that, offering Technical SEO, Local SEO and B2B SEO. A results-driven SEO company. Talk to us.',
    url: `${SITE_URL}/brand-infrastructure/search-engine-optimisation/koparkhairane/`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Agency in Koparkhairane | Best SEO Services | Impulse Digital',
    description: 'Struggling to rank in Koparkhairane? Impulse Digital is the SEO company that fixes that, offering Technical SEO, Local SEO and B2B SEO. A results-driven SEO company. Talk to us.',
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function SeoKoparkhairaneLocationPage() {
  return <SeoKoparkhairaneLocation />;
}
