import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import Careers from '@/components/pages/Careers';
import { getFAQSchema } from "@/lib/schemaHelper";
export const metadata: Metadata = {
  title: 'Careers at Impulse Digital | Join Our Team',
  description: 'Explore career opportunities at Impulse Digital, a leading digital marketing agency in Mumbai. Join a team that values creativity, strategy, and commercial impact.',
  keywords: 'careers impulse digital, digital marketing jobs mumbai, marketing agency careers',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Careers at Impulse Digital | Join Our Team',
    description: 'Explore career opportunities at Impulse Digital, a leading digital marketing agency in Mumbai. Join a team that values creativity, strategy, and commercial impact.',
    url: `${SITE_URL}/careers/`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Careers at Impulse Digital | Join Our Team',
    description: 'Explore career opportunities at Impulse Digital, a leading digital marketing agency in Mumbai. Join a team that values creativity, strategy, and commercial impact.',
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function CareersPage() {
    const schemas: any[] = [];

  return <Careers />;
}
