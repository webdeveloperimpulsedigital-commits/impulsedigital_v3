import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import ContactUs from '@/components/pages/ContactUs';

export const metadata: Metadata = {
  title: 'Contact Impulse Digital | Get in Touch',
  description: 'Get in touch with Impulse Digital, Mumbai\'s leading digital marketing agency. Reach out to discuss your marketing goals, campaigns, and growth challenges.',
  keywords: 'contact impulse digital, digital marketing agency contact, marketing agency mumbai',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Contact Impulse Digital | Get in Touch',
    description: 'Get in touch with Impulse Digital, Mumbai\'s leading digital marketing agency. Reach out to discuss your marketing goals, campaigns, and growth challenges.',
    url: `${SITE_URL}/ae/contact-us/`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Impulse Digital | Get in Touch',
    description: 'Get in touch with Impulse Digital, Mumbai\'s leading digital marketing agency. Reach out to discuss your marketing goals, campaigns, and growth challenges.',
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function ContactUsPage() {
  return <ContactUs />;
}
