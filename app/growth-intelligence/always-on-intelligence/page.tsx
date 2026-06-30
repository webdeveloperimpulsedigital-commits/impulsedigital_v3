import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import AlwaysOnIntelligence from '@/components/pages/AlwaysOnIntelligence';

export const metadata: Metadata = {
  title: 'Always-On Intelligence | Impulse Digital',
  description: 'Always-on intelligence from Impulse Digital keeps your brand informed with continuous data monitoring, insight generation, and real-time decision support.',
  keywords: 'always on intelligence, continuous monitoring, brand intelligence',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Always-On Intelligence | Impulse Digital',
    description: 'Always-on intelligence from Impulse Digital keeps your brand informed with continuous data monitoring, insight generation, and real-time decision support.',
    url: `${SITE_URL}/growth-intelligence/always-on-intelligence/`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Always-On Intelligence | Impulse Digital',
    description: 'Always-on intelligence from Impulse Digital keeps your brand informed with continuous data monitoring, insight generation, and real-time decision support.',
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function AlwaysOnIntelligencePage() {

      const schemas = [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": "https://www.theimpulsedigital.com/growth-intelligence/always-on-intelligence/#service",
        "name": "Always-On Intelligence Services",
        "url": "https://www.theimpulsedigital.com/growth-intelligence/always-on-intelligence/",
        "description": "Impulse Digital provides Always-On Intelligence services that continuously monitor brand mentions, category movement, competitor activity, reviews, reputation signals, and digital market risks.",
        "serviceType": [
          "Always-On Intelligence",
          "Reputation Tracking",
          "Crisis Monitoring",
          "Social Listening",
          "E-Commerce Review Intelligence",
          "Brand Health Monitoring"
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
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is Always-On Intelligence?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "It is a continuous monitoring system that tracks brand mentions, category movement, competitor activity, reviews, and reputation signals across digital platforms to help teams act early."
            }
          },
          {
            "@type": "Question",
            "name": "How is this different from standard social listening?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Standard listening often provides raw dashboard metrics. Always-On Intelligence filters out noise, connects multiple platforms (social, news, e-commerce), and adds human interpretation so the output is decision-ready."
            }
          },
          {
            "@type": "Question",
            "name": "What decisions can this support?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "It can support crisis management, campaign tracking, e-commerce optimisation, brand health monitoring, leadership reporting, and rapid response planning."
            }
          },
          {
            "@type": "Question",
            "name": "What is Reputation and Crisis Tracking?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "It is a specialized layer of monitoring designed to catch negative sentiment, complaint spikes, and risky conversations before they escalate into larger brand issues."
            }
          },
          {
            "@type": "Question",
            "name": "What is E-Commerce and Review Intelligence?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "It tracks product feedback, reviews, ratings, and sentiment across marketplaces, helping teams understand what drives or blocks conversion at the point of sale."
            }
          },
          {
            "@type": "Question",
            "name": "What do we receive?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Outputs depend on the rhythm you need—ranging from live dashboards and instant risk alerts to weekly summaries, monthly insight reports, and quarterly deep dives."
            }
          },
          {
            "@type": "Question",
            "name": "Who should use this?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Brand teams, corporate communications, digital marketing, e-commerce managers, and leadership teams who need real-time visibility into brand health and market risks."
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
          <AlwaysOnIntelligence />
        </>
      );
        
}
