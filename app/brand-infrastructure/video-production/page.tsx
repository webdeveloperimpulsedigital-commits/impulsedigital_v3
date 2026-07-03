import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import VideoProduction from '@/components/pages/VideoProduction';
import { videoProductionData } from '@/data/videoProductionData';
;
import { getFAQSchema } from "@/lib/schemaHelper";
export const metadata: Metadata = {
  title: 'Video Production Company in Mumbai | Production Agency | Impulse Digital',
  description: 'Impulse Digital is a leading video production company in Mumbai offering creative video production services in Mumbai for brands, campaigns, and corporate storytelling with measurable impact.',
  keywords: 'video production company in mumbai, video production agency in mumbai, video production services, thane, navi mumbai, india, impulse digital',
  robots: { index: true, follow: true },
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
    }
];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <VideoProduction data={videoProductionData} />
    </>
  );

}
