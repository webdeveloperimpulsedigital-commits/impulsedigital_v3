import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import PuneLocation from '@/components/pages/PuneLocation';

export const metadata: Metadata = {
  title: 'Digital Marketing Agency in Pune | Impulse Digital',
  description: 'Impulse Digital is a leading digital marketing agency in Pune providing SEO, social media marketing, branding, and performance marketing for businesses in Pune.',
  keywords: 'digital marketing agency in pune, digital marketing company pune, seo pune',
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${SITE_URL}/digital-marketing-agency-in-pune/`,
  },
  openGraph: {
    title: 'Digital Marketing Agency in Pune | Impulse Digital',
    description: 'Impulse Digital is a leading digital marketing agency in Pune providing SEO, social media marketing, branding, and performance marketing for businesses in Pune.',
    url: `${SITE_URL}/digital-marketing-agency-in-pune/`,
    images: [{ url: `${SITE_URL}/img/logo-id-new.webp` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing Agency in Pune | Impulse Digital',
    description: 'Impulse Digital is a leading digital marketing agency in Pune providing SEO, social media marketing, branding, and performance marketing for businesses in Pune.',
    images: [`${SITE_URL}/img/logo-id-new.webp`],
    site: '@impulsedigi',
  },
};

export default function PuneLocationPage() {

      const schemas = [
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Why should businesses in Pune use digital marketing services?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Digital marketing helps businesses in Pune improve online visibility, build stronger brand positioning, reach relevant audiences, and generate business enquiries across digital platforms."
            }
          },
          {
            "@type": "Question",
            "name": "What digital marketing services are commonly used in Pune?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Businesses in Pune commonly invest in SEO, social media marketing, website development, performance marketing, branding, local SEO, and content marketing."
            }
          },
          {
            "@type": "Question",
            "name": "Can SEO help businesses in Pune generate enquiries?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. SEO can improve search visibility, attract relevant audiences, and support long-term enquiry generation through organic discovery."
            }
          },
          {
            "@type": "Question",
            "name": "How is digital marketing performance measured?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Performance is measured through conversions, search visibility, engagement quality, traffic behaviour, campaign efficiency, and business-level outcomes."
            }
          },
          {
            "@type": "Question",
            "name": "Does digital marketing work for startups and growing businesses?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Digital marketing helps startups and growing businesses improve discoverability, build trust, communicate value clearly, and generate growth opportunities."
            }
          }
        ]
      }
    ];

      return (
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
          />
          <PuneLocation />
        </>
      );
        
}
