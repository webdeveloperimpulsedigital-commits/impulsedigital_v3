import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import AjmanLocation from '@/components/pages/AjmanLocation';

export const metadata: Metadata = {
  title: 'Best Digital Marketing Agency in Ajman | Impulse Digital',
  description: 'Impulse Digital is the best digital marketing company in Ajman, combining Growth Intelligence, AI Marketing Systems, and Brand Infrastructure to deliver measurable results for enterprise companies in Ajman.',
  keywords: 'digital marketing agency in ajman, digital marketing company in ajman, impulse digital',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Best Digital Marketing Agency in Ajman | Impulse Digital',
    description: 'Impulse Digital is the best digital marketing company in Ajman, combining Growth Intelligence, AI Marketing Systems, and Brand Infrastructure to deliver measurable results for enterprise companies in Ajman.',
    url: `${SITE_URL}/ae/digital-marketing-agency-in-ajman/`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Digital Marketing Agency in Ajman | Impulse Digital',
    description: 'Impulse Digital is the best digital marketing company in Ajman, combining Growth Intelligence, AI Marketing Systems, and Brand Infrastructure to deliver measurable results for enterprise companies in Ajman.',
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function AjmanLocationPage() {

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What does it mean that Impulse Digital is a growth partner rather than a vendor?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "As a leading digital marketing agency in Ajman, it means we work as an extension of your team, aligning strategy and execution with your goals and sharing responsibility for outcomes. Collaboration, transparency, and measurable progress drive every decision."
          }
        },
        {
          "@type": "Question",
          "name": "How do you build a strategy that fits my brand and market?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We begin with discovery and a performance audit, define clear objectives, and map audience journeys. From there we create a test and learn roadmap that prioritizes initiatives by impact and effort."
          }
        },
        {
          "@type": "Question",
          "name": "How will success be measured and reported to us?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "At our digital marketing agency in Ajman, we set KPIs at the start and track visibility, engagement, conversions, and return on investment. Dashboards and review calls convert the data into actions for the next cycle."
          }
        },
        {
          "@type": "Question",
          "name": "Do you serve only Ajman based businesses or work across regions as well?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "While we are a digital marketing company in Ajman, we support clients across the UAE and overseas. Our delivery models remain flexible so collaboration stays smooth regardless of location."
          }
        },
        {
          "@type": "Question",
          "name": "What services can you manage under one engagement?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer performance marketing, search engine optimization, social media, content, branding, website design and development, video production, and analytics. You can choose full service or project based support."
          }
        },
        {
          "@type": "Question",
          "name": "How soon can we expect results from a new engagement?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Paid campaigns can show directional signals within days once tracking is verified. Organic growth compounds over weeks and months as technical and content improvements take effect."
          }
        },
        {
          "@type": "Question",
          "name": "What does the process look like from first call to launch?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We align on goals, run an audit, agree on a plan with milestones, set up tracking, and prepare creative and landing experiences. Launch follows a quality checklist so that data and delivery are reliable from day one."
          }
        },
        {
          "@type": "Question",
          "name": "Can you share case studies and references before we decide?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. As a transparent digital marketing company in Ajman, we provide public case studies and can share additional references on request, subject to confidentiality terms."
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
      <AjmanLocation />
    </>
  );

}
