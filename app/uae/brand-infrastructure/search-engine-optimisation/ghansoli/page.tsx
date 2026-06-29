import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import SeoGhansoliLocation from '@/components/pages/seo-locations/SeoGhansoliLocation';

export const metadata: Metadata = {
  title: 'SEO Agency in Ghansoli | Best SEO Company | Impulse Digital',
  description: 'Impulse Digital is a specialist SEO agency in Ghansoli offering Technical SEO, Local SEO and B2B SEO for businesses in Ghansoli. Rank higher and attract more customers. Talk to us.',
  keywords: 'seo agency in ghansoli, seo company in ghansoli, seo services in ghansoli, local seo ghansoli, impulse digital',
  alternates: {
    canonical: `${SITE_URL}/brand-infrastructure/search-engine-optimisation/ghansoli/`,
  },
  openGraph: {
    title: 'SEO Agency in Ghansoli | Best SEO Company | Impulse Digital',
    description: 'Impulse Digital is a specialist SEO agency in Ghansoli offering Technical SEO, Local SEO and B2B SEO for businesses in Ghansoli. Rank higher and attract more customers. Talk to us.',
    url: `${SITE_URL}/brand-infrastructure/search-engine-optimisation/ghansoli/`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Agency in Ghansoli | Best SEO Company | Impulse Digital',
    description: 'Impulse Digital is a specialist SEO agency in Ghansoli offering Technical SEO, Local SEO and B2B SEO for businesses in Ghansoli. Rank higher and attract more customers. Talk to us.',
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function SeoGhansoliLocationPage() {
  return <SeoGhansoliLocation />;
}
