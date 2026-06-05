import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import EmployerBranding from '@/components/pages/EmployerBranding';

export const metadata: Metadata = {
  title: 'Employer Branding Agency & Employee Branding Consulting | Impulse',
  description: 'Impulse Digital is a specialist employer branding agency and employee branding consulting firm helping enterprise brands build EVP, culture storytelling, and recruitment marketing. Talk to us.',
  keywords: 'employer branding agency, employer brand, EVP development',
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${SITE_URL}/brand-infrastructure/employer-branding/`,
  },
  openGraph: {
    title: 'Employer Branding Agency & Employee Branding Consulting | Impulse Digital',
    description: 'Impulse Digital is a specialist employer branding agency and employee branding consulting firm helping enterprise brands build EVP, culture storytelling, and recruitment marketing. Talk to us.',
    url: `${SITE_URL}/brand-infrastructure/employer-branding/`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Employer Branding Agency & Employee Branding Consulting | Impulse Digital',
    description: 'Impulse Digital is a specialist employer branding agency and employee branding consulting firm helping enterprise brands build EVP, culture storytelling, and recruitment marketing. Talk to us.',
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function EmployerBrandingPage() {

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://www.theimpulsedigital.com/brand-infrastructure/employer-branding/#service",
      "name": "Employer Branding Services",
      "url": "https://www.theimpulsedigital.com/brand-infrastructure/employer-branding/",
      "description": "Impulse Digital is a specialist employer branding agency and employee branding consulting firm helping enterprise brands build EVP, culture storytelling, and recruitment marketing. Talk to us.",
      "serviceType": [
        "Employer Branding",
        "EVP Development",
        "Recruitment Marketing",
        "Internal Communication Campaigns",
        "Culture Storytelling",
        "Employee Engagement Content",
        "Talent Attraction Strategy"
      ],
      "areaServed": [
        "IN",
        "US"
      ],
      "provider": {
        "@type": "Organization",
        "name": "Impulse Digital",
        "url": "https://www.theimpulsedigital.com/"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": "https://www.theimpulsedigital.com/brand-infrastructure/employer-branding/#faq",
      "url": "https://www.theimpulsedigital.com/brand-infrastructure/employer-branding/",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is employer branding and why is it important?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Employer branding defines how your current and potential employees perceive you as a workplace. A strong employer brand increases applicant quality, retention, engagement, and overall satisfaction, while reducing recruitment costs in the long run."
          }
        },
        {
          "@type": "Question",
          "name": "How does Impulse Digital create an employer branding strategy?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "As a result-oriented employer branding agency, we begin with research, surveys, and interviews to understand your existing perception and goals. We then define positioning, messaging, and tone to create a structured strategy supported by creative and communication guidelines."
          }
        },
        {
          "@type": "Question",
          "name": "What deliverables are included in an employer branding service?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We deliver a comprehensive strategy document, EVP and messaging framework, tone and design guidelines, recruitment marketing plans, leadership content toolkits, internal communication templates, and detailed reporting dashboards."
          }
        },
        {
          "@type": "Question",
          "name": "How does Impulse Digital ensure internal alignment across teams?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We conduct workshops with leadership, HR, and communication teams to align vision and goals. We also create easy-to-use toolkits and content frameworks to ensure that the brand voice remains consistent across all internal and external touchpoints."
          }
        },
        {
          "@type": "Question",
          "name": "How do you handle reputation management and online reviews in employer branding?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our team monitors sentiment across digital platforms, manages responses to reviews, and builds proactive content to enhance brand perception. We focus on transparency and address concerns quickly to maintain trust and credibility."
          }
        },
        {
          "@type": "Question",
          "name": "How is success measured for employer branding programs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "As a result-oriented employer branding agency, we track metrics such as application quality, offer acceptance rate, time-to-hire, employee referrals, engagement on career platforms, and retention trends. The performance data helps refine strategy and showcase tangible business outcomes."
          }
        },
        {
          "@type": "Question",
          "name": "How does employer branding connect with recruitment marketing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Employer branding builds awareness and preference, while recruitment marketing turns that preference into applications. We align both to ensure candidates experience a seamless journey from discovering your brand to applying and joining."
          }
        },
        {
          "@type": "Question",
          "name": "What types of content are most effective for employer branding?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Authentic employee stories, leadership features, behind-the-scenes visuals, event highlights, and growth journey narratives work best. We tailor the format for each platform to ensure maximum reach and engagement."
          }
        },
        {
          "@type": "Question",
          "name": "How do we know if our company needs your employer branding services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Employer Branding Services convey an authentic story about what it is like to be a part of your company and work toward your mission. This lets you attract, engage and retain productive candidates who think and strive for the same goals."
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
      <EmployerBranding />
    </>
  );

}
