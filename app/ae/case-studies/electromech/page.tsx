import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import ElectroMechCaseStudy from '@/components/pages/ElectroMechCaseStudy';

export const metadata: Metadata = {
  title: 'ElectroMech Case Study | Impulse Digital',
  description: 'How Impulse Digital helped ElectroMech strengthen their B2B digital presence and generate quality leads through targeted SEO and content marketing.',
  keywords: 'electromech case study, b2b digital marketing case study',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'ElectroMech Case Study | Impulse Digital',
    description: 'How Impulse Digital helped ElectroMech strengthen their B2B digital presence and generate quality leads through targeted SEO and content marketing.',
    url: `${SITE_URL}/ae/case-studies/electromech/`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ElectroMech Case Study | Impulse Digital',
    description: 'How Impulse Digital helped ElectroMech strengthen their B2B digital presence and generate quality leads through targeted SEO and content marketing.',
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function ElectroMechCaseStudyPage() {
  return <ElectroMechCaseStudy />;
}
