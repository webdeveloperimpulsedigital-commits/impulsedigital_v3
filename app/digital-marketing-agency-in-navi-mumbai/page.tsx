import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import NaviMumbaiLocation from '@/components/pages/NaviMumbaiLocation';

export const metadata: Metadata = {
  title: 'Digital Marketing Agency in Navi Mumbai | Impulse Digital',
  description: 'Impulse Digital is a leading digital marketing agency in Navi Mumbai providing SEO, social media marketing, and performance marketing for businesses in Navi Mumbai.',
  keywords: 'digital marketing agency in navi mumbai, digital marketing navi mumbai, seo navi mumbai',
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${SITE_URL}/digital-marketing-agency-in-navi-mumbai/`,
  },
  openGraph: {
    title: 'Digital Marketing Agency in Navi Mumbai | Impulse Digital',
    description: 'Impulse Digital is a leading digital marketing agency in Navi Mumbai providing SEO, social media marketing, and performance marketing for businesses in Navi Mumbai.',
    url: `${SITE_URL}/digital-marketing-agency-in-navi-mumbai/`,
    images: [{ url: `${SITE_URL}/img/logo-id-new.webp` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing Agency in Navi Mumbai | Impulse Digital',
    description: 'Impulse Digital is a leading digital marketing agency in Navi Mumbai providing SEO, social media marketing, and performance marketing for businesses in Navi Mumbai.',
    images: [`${SITE_URL}/img/logo-id-new.webp`],
    site: '@impulsedigi',
  },
};

export default function NaviMumbaiLocationPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why should businesses in Navi Mumbai invest in digital marketing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Digital marketing helps businesses in Navi Mumbai improve discoverability, strengthen online positioning, reach relevant audiences, and generate enquiries through measurable digital channels."
        }
      },
      {
        "@type": "Question",
        "name": "What digital marketing services are most useful for businesses in Navi Mumbai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SEO, social media marketing, paid advertising, branding, website development, local SEO, and performance marketing are commonly used by businesses in Navi Mumbai."
        }
      },
      {
        "@type": "Question",
        "name": "Can local SEO improve visibility for Navi Mumbai businesses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Local SEO improves visibility in nearby searches, Google Maps results, and local audience discovery for businesses operating in Navi Mumbai."
        }
      },
      {
        "@type": "Question",
        "name": "How long does digital marketing take to show impact?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Performance marketing can show early traction quickly, while SEO and branding strategies generally build stronger long-term momentum over time."
        }
      },
      {
        "@type": "Question",
        "name": "How do you measure campaign performance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Campaign performance is evaluated through conversions, engagement quality, traffic behaviour, lead quality, search visibility, and business outcomes."
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
      <NaviMumbaiLocation />
    </>
  );
}
