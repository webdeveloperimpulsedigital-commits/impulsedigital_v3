import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import VideoProduction from '@/components/pages/VideoProduction';

export const metadata: Metadata = {
  title: 'Video Production Company in Mumbai | Production Agency | Impulse Digital',
  description: 'Impulse Digital is a leading video production company in Mumbai offering creative video production services in Mumbai for brands, campaigns, and corporate storytelling with measurable impact.',
  keywords: 'video production company in mumbai, video production agency in mumbai, video production services',
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${SITE_URL}/brand-infrastructure/video-production/`,
  },
  openGraph: {
    title: 'Video Production Company in Mumbai | Production Agency | Impulse Digital',
    description: 'Impulse Digital is a leading video production company in Mumbai offering creative video production services in Mumbai for brands, campaigns, and corporate storytelling with measurable impact.',
    url: `${SITE_URL}/brand-infrastructure/video-production/`,
    images: [{ url: `${SITE_URL}/video-production.webp` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Video Production Company in Mumbai | Production Agency | Impulse Digital',
    description: 'Impulse Digital is a leading video production company in Mumbai offering creative video production services in Mumbai for brands, campaigns, and corporate storytelling with measurable impact.',
    images: [`${SITE_URL}/video-production.webp`],
    site: '@impulsedigi',
  },
};

export default function VideoProductionPage() {

      const schemas = [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": "https://www.theimpulsedigital.com/brand-infrastructure/video-production/#service",
        "name": "Video Production Services",
        "url": "https://www.theimpulsedigital.com/brand-infrastructure/video-production/",
        "description": "Impulse Digital provides video production services including brand films, corporate videos, product videos, explainer videos, testimonial videos, event videos, animation, motion graphics, and short-form video content.",
        "serviceType": [
          "Video Production",
          "Brand Films",
          "Corporate Videos",
          "Product Videos",
          "Explainer Videos",
          "Testimonial Videos",
          "Event Videos",
          "Animation",
          "Motion Graphics",
          "Short-Form Video Content"
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
        "@id": "https://www.theimpulsedigital.com/brand-infrastructure/video-production/#faq",
        "url": "https://www.theimpulsedigital.com/brand-infrastructure/video-production/",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What does Video Production include?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Video Production can include concept development, scripting, storyboarding, shoot planning, filming, editing, motion graphics, sound design, subtitles, format adaptation, AI cinematic production, and platform-ready delivery."
            }
          },
          {
            "@type": "Question",
            "name": "What kind of videos can Impulse Digital create?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We can create brand films, digital video commercials, concept videos, product videos, service explainers, testimonial videos, reels, social media videos, campaign films, website videos, and AI cinematic productions."
            }
          },
          {
            "@type": "Question",
            "name": "Is this only for social media videos?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Social media video is one part of the service. The larger focus is video production for brand communication, campaigns, DVCs, concepts, products, websites, social media, and digital distribution."
            }
          },
          {
            "@type": "Question",
            "name": "Do you handle scripting and concepts?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We can build the concept, script, storyboard, visual treatment, shot list, and production plan before filming or editing begins."
            }
          },
          {
            "@type": "Question",
            "name": "Do you manage shoots?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We can manage product shoots, brand shoots, interviews, lifestyle shoots, testimonials, location shoots, and content shoots with the required crew and planning."
            }
          },
          {
            "@type": "Question",
            "name": "Can you work with existing footage?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. If you already have footage, we can shape it through editing, storytelling, sound, graphics, subtitles, cutdowns, and platform adaptations."
            }
          },
          {
            "@type": "Question",
            "name": "What is AI Cinematic Production?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "AI Cinematic Production uses AI tools to create scenes, visual worlds, cinematic shots, animated sequences, and concept-led films faster. The creative direction, judgment, story, and final quality control remain human-led."
            }
          },
          {
            "@type": "Question",
            "name": "How do you tailor videos for different platforms?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We adapt pacing, aspect ratio, hook, edit length, subtitle style, thumbnail, title, and format based on whether the video is meant for Instagram, YouTube, LinkedIn, paid ads, websites, or sales journeys."
            }
          },
          {
            "@type": "Question",
            "name": "How do you measure video performance?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We look at watch time, retention, completion rate, engagement, clicks, enquiries, audience response, and what each video teaches the next one."
            }
          },
          {
            "@type": "Question",
            "name": "Is Video Production right for every brand?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "It is right when your brand needs an idea to be seen, understood, remembered, and acted on. If the goal is only to produce more content without a clear thought, this is not the right fit."
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
          <VideoProduction />
        </>
      );
        
}
