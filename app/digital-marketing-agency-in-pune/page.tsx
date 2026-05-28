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
              "name": "What does it mean that Impulse Digital is a growth partner rather than a vendor?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "As a leading digital marketing agency in Pune, it means we work as an extension of your team, aligning strategy and execution with your goals and sharing responsibility for outcomes. Collaboration, transparency, and measurable progress drive every decision."
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
                "text": "At our digital marketing agency in Pune, we set KPIs at the start and track visibility, engagement, conversions, and return on investment. Dashboards and review calls convert the data into actions for the next cycle."
              }
            },
            {
              "@type": "Question",
              "name": "Do you serve only Pune based businesses or work across regions as well?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "While we are a digital marketing company in Pune, we support clients across India and overseas. Our delivery models remain flexible so collaboration stays smooth regardless of location."
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
                "text": "Yes. As a transparent digital marketing company in Pune, we provide public case studies and can share additional references on request, subject to confidentiality terms."
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
