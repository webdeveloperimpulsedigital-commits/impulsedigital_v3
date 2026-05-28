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
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing Agency in India | Impulse Digital',
    description: 'Impulse Digital is a top digital marketing agency in India offering SEO, social media, content, performance marketing, and branding solutions for brands across India.',
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function IndiaLocationPage() {

      const schemas = [
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is a digital marketing agency?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A digital marketing agency helps businesses grow online using services like performance ads, SEO, social, content, automation and analytics tailored to goals and budgets."
              }
            },
            {
              "@type": "Question",
              "name": "What are the benefits of hiring a digital marketing agency to leverage your business?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "You get senior expertise, speed of execution, cross-channel strategy, creative at scale, and measurable performance without building a large in-house team."
              }
            },
            {
              "@type": "Question",
              "name": "What is the role of a result-oriented digital marketing agency in elevating your business?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A results-driven partner aligns channels to KPIs, runs continuous experiments, optimizes budgets in real-time, and reports outcomes clearly to drive revenue and efficiency."
              }
            },
            {
              "@type": "Question",
              "name": "Top 6 services an agency should offer for your business?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Strategy, Performance Ads, SEO, Social & Content, Marketing Automation/CRM, and Analytics/Attribution."
              }
            },
            {
              "@type": "Question",
              "name": "What are the advantages of hiring a leading digital marketing agency?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Proven playbooks, specialized teams, enterprise-grade tools, faster time-to-value, and lower total cost of ownership."
              }
            },
            {
              "@type": "Question",
              "name": "Can I expect instant results after hiring an agency?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Some channels show quick lifts, such as performance ads. Others compound over time, such as SEO. A balanced mix delivers both short-term and long-term ROI."
              }
            },
            {
              "@type": "Question",
              "name": "Is it possible to measure the efficacy of your digital marketing agency's strategies?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. With clear KPIs, proper tracking, conversion events, and multi-touch attribution, you can measure impact across the funnel."
              }
            },
            {
              "@type": "Question",
              "name": "What is the budget to hire a digital marketing agency for your business?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The budget to hire the best digital marketing agency in Mumbai depends on your requirements, including scope of services, industry, business size, marketing goals, and expectations. It is essential to contact the agency directly for further queries about budget or services. Approximately, the budget ranges from 70k to 2 lakh to hire a good marketing agency for your business."
              }
            },
            {
              "@type": "Question",
              "name": "Before signing up with an agency, should I consider geographic factors like location?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No, one does not need to consider the agency's location, as digital marketing services are provided online and are not restricted to physical presence or areas. Anyone can receive top digital marketing services from Mumbai to anywhere in the world. However, it is essential to consider the agency's expertise in your domain, industry alignment, experience, and facilities they provide for online operations."
              }
            },
            {
              "@type": "Question",
              "name": "What skills are necessary for an agency before onboarding?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "When onboarding and deciding on an agency, it is essential to prioritize domain expertise, transparent communication, creative design and marketing strategy, and a track record of quality work. The team coordinating should have problem-solving qualities and efficiency, showing that the agency is dependable and trustworthy."
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
          <IndiaLocation />
        </>
      );
        
}
