import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import AmazonEVPCaseStudy from '@/components/pages/AmazonEVPCaseStudy';
import { getFAQSchema } from "@/lib/schemaHelper";
import { defaultFaqs } from "@/lib/faqData";

export const metadata: Metadata = {
  title: 'Amazon India EVP Strategy Case Study | Employer Branding by Impulse Digital',
  description: 'See how Impulse Digital supported Amazon India’s EVP development through employee research, focus group discussions, thematic synthesis, and employer brand messaging clarity.',
  keywords: 'amazon india evp strategy, employer branding case study, employee research, focus groups, thematic synthesis',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Amazon India EVP Strategy Case Study | Employer Branding by Impulse Digital',
    description: 'See how Impulse Digital supported Amazon India’s EVP development through employee research, focus group discussions, thematic synthesis, and employer brand messaging clarity.',
    url: `${SITE_URL}/case-studies/amazon-india-evp-strategy/`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amazon India EVP Strategy Case Study | Employer Branding by Impulse Digital',
    description: 'See how Impulse Digital supported Amazon India’s EVP development through employee research, focus group discussions, thematic synthesis, and employer brand messaging clarity.',
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function AmazonEVPPage() {
    const schemas = [getFAQSchema(defaultFaqs, false)];

  return <AmazonEVPCaseStudy />;
}
