import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import ThaneLocation from '@/components/pages/ThaneLocation';

export const metadata: Metadata = {
  title: 'Digital Marketing Agency in Thane | Impulse Digital',
  description: 'Impulse Digital is a leading digital marketing agency in Thane offering SEO, social media, content, and performance marketing solutions for businesses in Thane.',
  keywords: 'digital marketing agency in thane, digital marketing company thane, seo thane',
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${SITE_URL}/digital-marketing-agency-in-thane/`,
  },
  openGraph: {
    title: 'Digital Marketing Agency in Thane | Impulse Digital',
    description: 'Impulse Digital is a leading digital marketing agency in Thane offering SEO, social media, content, and performance marketing solutions for businesses in Thane.',
    url: `${SITE_URL}/digital-marketing-agency-in-thane/`,
    images: [{ url: `${SITE_URL}/img/logo-id-new.webp` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing Agency in Thane | Impulse Digital',
    description: 'Impulse Digital is a leading digital marketing agency in Thane offering SEO, social media, content, and performance marketing solutions for businesses in Thane.',
    images: [`${SITE_URL}/img/logo-id-new.webp`],
    site: '@impulsedigi',
  },
};

export default function ThaneLocationPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why should businesses in Thane hire a digital marketing agency?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A digital marketing agency can help businesses in Thane improve online visibility, attract relevant audiences, strengthen brand positioning, and generate enquiries through structured digital growth strategies."
        }
      },
      {
        "@type": "Question",
        "name": "What digital marketing services are useful for businesses in Thane?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Businesses in Thane commonly use SEO, social media marketing, paid advertising, website development, branding, local SEO, content marketing, and performance marketing to improve growth and visibility."
        }
      },
      {
        "@type": "Question",
        "name": "Can local SEO help businesses in Thane?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Local SEO helps businesses improve visibility in location-based searches, Google Maps results, and nearby audience discovery."
        }
      },
      {
        "@type": "Question",
        "name": "How do you measure digital marketing success?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Success can be measured through enquiries, conversions, traffic quality, search visibility, engagement quality, and campaign performance against business objectives."
        }
      },
      {
        "@type": "Question",
        "name": "Does digital marketing work for small and medium businesses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Digital marketing can help small and medium businesses improve visibility, generate leads, build credibility, and compete more effectively within their category."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ThaneLocation />
    </>
  );
}
