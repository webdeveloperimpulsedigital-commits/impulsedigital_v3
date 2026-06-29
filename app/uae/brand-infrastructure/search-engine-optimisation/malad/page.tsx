import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import SeoMaladLocation from '@/components/pages/seo-locations/SeoMaladLocation';

export const metadata: Metadata = {
  title: 'SEO Company in Malad | Best SEO in Malad | Impulse Digital',
  description: 'Impulse Digital is widely regarded as the best SEO in Malad, offering Technical SEO, Local SEO and B2B SEO. Results for Emech, Automag and Qure.ai. Talk to us.',
  keywords: 'seo agency in malad, seo company in malad, seo in malad, seo service, local seo malad, impulse digital',
  alternates: {
    canonical: `${SITE_URL}/brand-infrastructure/search-engine-optimisation/malad/`,
  },
  openGraph: {
    title: 'SEO Company in Malad | Best SEO in Malad | Impulse Digital',
    description: 'Impulse Digital is widely regarded as the best SEO in Malad, offering Technical SEO, Local SEO and B2B SEO. Results for Emech, Automag and Qure.ai. Talk to us.',
    url: `${SITE_URL}/brand-infrastructure/search-engine-optimisation/malad/`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Company in Malad | Best SEO in Malad | Impulse Digital',
    description: 'Impulse Digital is widely regarded as the best SEO in Malad, offering Technical SEO, Local SEO and B2B SEO. Results for Emech, Automag and Qure.ai. Talk to us.',
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function SeoMaladLocationPage() {
  return <SeoMaladLocation />;
}
