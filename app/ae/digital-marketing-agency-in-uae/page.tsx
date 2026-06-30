import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import UaeLocation from '@/components/pages/UaeLocation';

export const metadata: Metadata = {
  title: 'Best Digital Marketing Agency in UAE | Impulse Digital',
  description: 'Impulse Digital is a top digital marketing agency in UAE offering SEO, social media, content, performance marketing, and branding solutions for companies in UAE.',
  keywords: 'digital marketing agency in uae, digital marketing company in uae, services, impulse digital',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Best Digital Marketing Agency in UAE | Impulse Digital',
    description: 'Impulse Digital is a top digital marketing agency in UAE offering SEO, social media, content, performance marketing, and branding solutions for companies in UAE.',
    url: `${SITE_URL}/ae/digital-marketing-agency-in-uae/`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Digital Marketing Agency in UAE | Impulse Digital',
    description: 'Impulse Digital is a top digital marketing agency in UAE offering SEO, social media, content, performance marketing, and branding solutions for companies in UAE.',
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function UaeLocationPage() {
  return (
    <>
      
      <UaeLocation />
    </>
  );

}
