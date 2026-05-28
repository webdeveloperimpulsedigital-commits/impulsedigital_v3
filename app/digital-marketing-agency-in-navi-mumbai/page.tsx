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
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing Agency in Navi Mumbai | Impulse Digital',
    description: 'Impulse Digital is a leading digital marketing agency in Navi Mumbai providing SEO, social media marketing, and performance marketing for businesses in Navi Mumbai.',
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function NaviMumbaiLocationPage() {

      const schemas = [
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What does Impulse Digital do for brands in Navi Mumbai?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "As a trusted digital marketing agency in Navi Mumbai, Impulse Digital plans and executes digital marketing strategies that align closely with business goals. Our team blends strategy, creative, media, web, content, and analytics to build strong visibility, meaningful engagement, and consistent conversions."
              }
            },
            {
              "@type": "Question",
              "name": "How do you create a strategy that matches our goals and timelines?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We begin with discovery and an audit of your market and current performance, define clear objectives, and build a roadmap that prioritizes actions by expected impact and required effort."
              }
            },
            {
              "@type": "Question",
              "name": "Which services can you manage within one engagement?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We manage performance marketing, search engine optimization, social media, content creation, branding, website design and development, video production, and analytics under one coordinated plan."
              }
            },
            {
              "@type": "Question",
              "name": "Do you work only with brands in Navi Mumbai or across regions as well?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "While we are a digital marketing agency in Navi Mumbai, we partner with clients across India and overseas. Our collaborations are supported through shared workspaces, regular reviews, and clear points of contact to ensure seamless communication and execution across regions."
              }
            },
            {
              "@type": "Question",
              "name": "How do you measure success and report progress?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Success is defined through agreed KPIs such as reach, engagement, qualified leads, sales, and return on investment. Dashboards and review calls translate data into actions for the next cycle."
              }
            },
            {
              "@type": "Question",
              "name": "How quickly can we expect results after launch?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Paid campaigns can show early signals within days once tracking is verified, while organic growth builds over weeks and months as technical fixes, content, and community programs take effect."
              }
            },
            {
              "@type": "Question",
              "name": "Will you handle content creation and production or do we need other partners?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our in-house teams produce copy, design, and video so execution stays consistent with strategy. We can also collaborate with your existing partners where preferred."
              }
            },
            {
              "@type": "Question",
              "name": "Can you share case studies and learning resources before we decide?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. Public case studies and knowledge resources are available, and additional references can be shared on request subject to confidentiality. We can outline expected benchmarks for similar categories."
              }
            },
            {
              "@type": "Question",
              "name": "How do you ensure brand safety and data privacy?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We request only the access required, follow your privacy and compliance policies, and document permissions in the agreement. Creative and placements follow platform guidelines and category norms."
              }
            },
            {
              "@type": "Question",
              "name": "How do we get a proposal tailored to our needs?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "As a digital marketing agency in Navi Mumbai, we start by understanding your objectives, timelines, target markets, and any past reports shared through our contact form. We then set up a discovery call and return with a clear plan that outlines scope, milestones, and measurement."
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
          <NaviMumbaiLocation />
        </>
      );
        
}
