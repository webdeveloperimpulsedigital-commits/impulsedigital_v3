import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import AutomagBajajAutoCaseStudy from '@/components/pages/AutomagBajajAutoCaseStudy';

export const metadata: Metadata = {
  title: 'Automag Bajaj Auto Case Study | Impulse Digital',
  description: 'How Impulse Digital and Automag partnered with Bajaj Auto to execute high-impact digital campaigns that drove brand engagement and sales.',
  keywords: 'bajaj auto case study, automotive digital marketing',
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${SITE_URL}/case-studies/automag-bajaj-auto/`,
  },
  openGraph: {
    title: 'Automag Bajaj Auto Case Study | Impulse Digital',
    description: 'How Impulse Digital and Automag partnered with Bajaj Auto to execute high-impact digital campaigns that drove brand engagement and sales.',
    url: `${SITE_URL}/case-studies/automag-bajaj-auto/`,
    images: [{ url: `${SITE_URL}/img/logo-id-new.webp` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Automag Bajaj Auto Case Study | Impulse Digital',
    description: 'How Impulse Digital and Automag partnered with Bajaj Auto to execute high-impact digital campaigns that drove brand engagement and sales.',
    images: [`${SITE_URL}/img/logo-id-new.webp`],
    site: '@impulsedigi',
  },
};

export default function AutomagBajajAutoCaseStudyPage() {
  return <AutomagBajajAutoCaseStudy />;
}
