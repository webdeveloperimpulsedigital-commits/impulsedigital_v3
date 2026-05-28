import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import IndiaLocation from '@/components/pages/IndiaLocation';

export const metadata: Metadata = {
  title: 'Digital Marketing Agency in India | Impulse Digital',
  description: 'Impulse Digital is a top digital marketing agency in India offering SEO, social media, content, performance marketing, and branding solutions for brands across India.',
  keywords: 'digital marketing agency in india, digital marketing company india, impulse digital india',
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${SITE_URL}/digital-marketing-agency-in-india/`,
  },
  openGraph: {
    title: 'Digital Marketing Agency in India | Impulse Digital',
    description: 'Impulse Digital is a top digital marketing agency in India offering SEO, social media, content, performance marketing, and branding solutions for brands across India.',
    url: `${SITE_URL}/digital-marketing-agency-in-india/`,
    images: [{ url: `${SITE_URL}/img/logo-id-new.webp` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing Agency in India | Impulse Digital',
    description: 'Impulse Digital is a top digital marketing agency in India offering SEO, social media, content, performance marketing, and branding solutions for brands across India.',
    images: [`${SITE_URL}/img/logo-id-new.webp`],
    site: '@impulsedigi',
  },
};

export default function IndiaLocationPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I choose the right digital marketing agency in India for my business?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The right agency should understand your business model, audience behaviour, category competition, and growth objectives before suggesting channels or campaigns. At Impulse Digital, every engagement begins with understanding the business problem first and building strategy around measurable outcomes."
        }
      },
      {
        "@type": "Question",
        "name": "What services does a digital marketing agency in India usually offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A digital marketing agency can offer SEO, social media marketing, performance marketing, branding, website development, video production, AI marketing systems, content strategy, and growth intelligence services."
        }
      },
      {
        "@type": "Question",
        "name": "Can digital marketing help generate business enquiries?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. A structured digital marketing strategy can help improve visibility, attract qualified audiences, strengthen positioning, and generate enquiries across organic and paid channels."
        }
      },
      {
        "@type": "Question",
        "name": "How long does digital marketing take to show results?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Some channels like paid advertising can generate early signals quickly, while SEO, branding, and content-led growth usually compound over a longer period. Timelines depend on category competition, positioning, and current digital infrastructure."
        }
      },
      {
        "@type": "Question",
        "name": "How do you measure digital marketing performance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Performance can be measured through traffic quality, conversion behaviour, lead quality, search visibility, engagement patterns, campaign efficiency, and business outcomes tied to marketing activity."
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
      <IndiaLocation />
    </>
  );
}
