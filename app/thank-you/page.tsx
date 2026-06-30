import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import ThankYou from '@/components/pages/ThankYou';

export const metadata: Metadata = {
  title: 'Thank You | Impulse Digital',
  description: 'Thank you for reaching out to Impulse Digital. Our team will get back to you shortly.',

  robots: { index: false, follow: false },
  openGraph: {
    title: 'Thank You | Impulse Digital',
    description: 'Thank you for reaching out to Impulse Digital. Our team will get back to you shortly.',
    url: `${SITE_URL}/thank-you/`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Thank You | Impulse Digital',
    description: 'Thank you for reaching out to Impulse Digital. Our team will get back to you shortly.',
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function ThankYouPage() {
  return <ThankYou />;
}
