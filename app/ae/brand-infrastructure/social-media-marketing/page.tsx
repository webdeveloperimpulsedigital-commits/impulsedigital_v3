import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import SocialMediaManagement from '@/components/pages/SocialMediaManagement';

export const metadata: Metadata = {
  title: 'Social Media Marketing Agency in Mumbai | Best SMM Company | Impulse Digital',
  description: 'Impulse Digital is the best social media marketing agency in Mumbai and a trusted SMM agency for enterprise brands. We are offering content creation, community management, paid social, and social media strategy.',
  keywords: 'social media marketing agency in mumbai, social media marketing company in mumbai, smm agency in mumbai, smm company, social media management, social media agency, impulse digital, mumbai, navi mumbai, thane, india',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Social Media Marketing Agency in Mumbai | Best SMM Company | Impulse Digital',
    description: 'Impulse Digital is the best social media marketing agency in Mumbai and a trusted SMM agency for enterprise brands. We are offering content creation, community management, paid social, and social media strategy.',
    url: `${SITE_URL}/ae/brand-infrastructure/social-media-marketing/`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Social Media Marketing Agency in Mumbai | Best SMM Company | Impulse Digital',
    description: 'Impulse Digital is the best social media marketing agency in Mumbai and a trusted SMM agency for enterprise brands. We are offering content creation, community management, paid social, and social media strategy.',
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function SocialMediaManagementPage() {

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://www.theimpulsedigital.com/brand-infrastructure/social-media-marketing/#service",
      "name": "Social Media Marketing Services",
      "url": "https://www.theimpulsedigital.com/brand-infrastructure/social-media-marketing/",
      "description": "Impulse Digital provides social media marketing services including social media strategy, content creation, campaign planning, community management, paid social campaigns, analytics, and platform-specific brand communication.",
      "serviceType": [
        "Social Media Marketing",
        "Social Media Strategy",
        "Content Creation",
        "Community Management",
        "Paid Social Campaigns",
        "Social Media Analytics",
        "Brand Communication"
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
      "@id": "https://www.theimpulsedigital.com/brand-infrastructure/social-media-marketing/#faq",
      "url": "https://www.theimpulsedigital.com/brand-infrastructure/social-media-marketing/",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What does social media marketing with Impulse Digital include?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We manage strategy, content creation, publishing, community engagement, paid advertising, and analytics. Every activity is designed to strengthen visibility, engagement, and measurable business growth across relevant platforms."
          }
        },
        {
          "@type": "Question",
          "name": "How do you develop a social media strategy for each brand?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We start by studying your brand, audience, and competitors to identify opportunities. Based on this research, we create a customized strategy with defined goals, content pillars, and posting schedules that align with your overall marketing objectives."
          }
        },
        {
          "@type": "Question",
          "name": "Which platforms do you recommend for my business?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Platform selection depends on your audience's demographics, business goals, and content format. We evaluate each platform’s potential to achieve your objectives and then create platform-specific content to maximize impact."
          }
        },
        {
          "@type": "Question",
          "name": "How do you ensure the content aligns with our brand voice?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We develop a content style guide during onboarding, covering tone, vocabulary, and visual preferences. All posts, captions, and designs are created and reviewed against this guide before they go live to ensure brand consistency."
          }
        },
        {
          "@type": "Question",
          "name": "Do you handle engagement and community management?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We monitor and manage comments, mentions, and direct messages daily. Our team responds promptly within approved guidelines to maintain a positive, consistent brand presence and build long-term relationships with your audience."
          }
        },
        {
          "@type": "Question",
          "name": "How does Impulse Digital manage paid social campaigns?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We plan and execute paid campaigns with defined objectives, audiences, and budgets. Campaigns are continuously optimized through A/B testing, audience segmentation, and performance tracking to achieve maximum efficiency and return on investment."
          }
        },
        {
          "@type": "Question",
          "name": "How do you measure success on social media?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We track engagement, reach, impressions, website traffic, and conversion metrics using analytics tools. Monthly reports include performance summaries, insights, and recommendations for improving upcoming campaigns."
          }
        },
        {
          "@type": "Question",
          "name": "Do you create specialized or seasonal campaigns?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We design campaigns around key occasions, product launches, and topical events to amplify visibility and engagement. Each campaign is aligned with your brand’s positioning and focuses on generating relevant conversations and measurable results."
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
      <SocialMediaManagement />
    </>
  );

}
