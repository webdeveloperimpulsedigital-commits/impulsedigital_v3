import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import AIVideoProduction from '@/components/pages/AIVideoProduction';

export const metadata: Metadata = {
  title: 'AI Video Production Agency & Services | Impulse Digital',
  description: 'Impulse Digital is an AI video production agency offering AI video production services for campaign films, product explainers, social media videos, training videos, multilingual content, and digital ads. Create faster, scalable, brand-ready videos with human creative direction and AI-enabled production.',
  keywords: 'ai video production, ai cinematic production, ai video production agency, ai video production service, mumbai, india, impulse digital',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'AI Video Production Agency & Services | Impulse Digital',
    description: 'Impulse Digital is an AI video production agency offering AI video production services for campaign films, product explainers, social media videos, training videos, multilingual content, and digital ads. Create faster, scalable, brand-ready videos with human creative direction and AI-enabled production.',
    url: `${SITE_URL}/ai-marketing-systems/ai-video-production/`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Video Production Agency & Services | Impulse Digital',
    description: 'Impulse Digital is an AI video production agency offering AI video production services for campaign films, product explainers, social media videos, training videos, multilingual content, and digital ads. Create faster, scalable, brand-ready videos with human creative direction and AI-enabled production.',
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function AIVideoProductionPage() {

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://www.theimpulsedigital.com/ai-marketing-systems/ai-video-production/#service",
      "name": "AI Video Production Services",
      "url": "https://www.theimpulsedigital.com/ai-marketing-systems/ai-video-production/",
      "description": "Impulse Digital is an AI video production agency offering AI video production services for campaign films, product explainers, social media videos, training videos, multilingual content, and digital ads. Create faster, scalable, brand-ready videos with human creative direction and AI-enabled production.",
      "serviceType": [
        "AI Video Production",
        "AI Generated Videos",
        "Product Videos",
        "Social Media Videos",
        "Campaign Videos",
        "Digital Video Content"
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
      "@id": "https://www.theimpulsedigital.com/ai-marketing-systems/ai-video-production/#faq",
      "url": "https://www.theimpulsedigital.com/ai-marketing-systems/ai-video-production/",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is AI video production?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "AI video production uses AI tools to support or create parts of the video process, including scripting, avatars, visuals, voiceovers, dubbing, editing, subtitles, and format adaptations. The best results still need human creative direction."
          }
        },
        {
          "@type": "Question",
          "name": "Is AI video a replacement for traditional shoots?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not always. Some ideas need a live shoot. Some are better built with AI. Many work best as a hybrid."
          }
        },
        {
          "@type": "Question",
          "name": "What types of videos can you create?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Campaign films, explainers, product videos, social media videos, launch assets, training videos, onboarding videos, corporate communication, multilingual videos, and digital ad creatives."
          }
        },
        {
          "@type": "Question",
          "name": "Will the video look obviously AI-generated?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not if it is directed properly. We focus on scripting, visual treatment, editing, sound, and brand checks so the output feels intentional."
          }
        },
        {
          "@type": "Question",
          "name": "Can one video become multiple formats?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. One video direction can be adapted into vertical cuts, teasers, short-form edits, ad versions, internal videos, and presentation-ready assets."
          }
        },
        {
          "@type": "Question",
          "name": "What do you need from us to start?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We need the objective, audience, message, brand guidelines, references, timelines, platforms, and any mandatory product, legal, or compliance details."
          }
        },
        {
          "@type": "Question",
          "name": "Is AI video right for every brand?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "AI video is right when the idea benefits from speed, scale, flexibility, multilingual adaptation, or visual imagination. It is not right when real people, live proof, or documentary credibility are essential."
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
      <AIVideoProduction />
    </>
  );

}
