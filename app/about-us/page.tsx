import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import AboutUs from '@/components/pages/AboutUs';

export const metadata: Metadata = {
  title: 'About Impulse Digital - Creative Digital Marketing Agency',
  description: 'Get to know Impulse Digital, a trusted digital marketing agency delivering SEO, paid media, branding, agentic ai, and website solutions that drive measurable business growth.',
  keywords: 'digital marketing agency, impulse digital',
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${SITE_URL}/about-us/`,
  },
  openGraph: {
    title: 'About Impulse Digital - Creative Digital Marketing Agency',
    description: 'Get to know Impulse Digital, a trusted digital marketing agency delivering SEO, paid media, branding, agentic ai, and website solutions that drive measurable business growth.',
    url: `${SITE_URL}/about-us/`,
    images: [{ url: `${SITE_URL}/img/logo-id-new.webp` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Impulse Digital - Creative Digital Marketing Agency',
    description: 'Get to know Impulse Digital, a trusted digital marketing agency delivering SEO, paid media, branding, agentic ai, and website solutions that drive measurable business growth.',
    images: [`${SITE_URL}/img/logo-id-new.webp`],
    site: '@impulsedigi',
  },
};

export default function AboutUsPage() {
  return <AboutUs />;
}
