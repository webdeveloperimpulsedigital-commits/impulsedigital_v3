import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import PPTGalleryClient from './PPTGalleryClient';

export const metadata: Metadata = {
  title: 'Digital Marketing PPT | Impulse Digital Presentations',
  description: 'Browse free digital marketing PPT and PowerPoint presentations by Impulse Digital. Download strategy decks on social media, content, SEO, Google Ads, and more.',
  keywords: ['digital marketing ppt', 'digital marketing powerpoint presentation', 'Mumbai', 'india', 'Impulse digital'],
  alternates: { canonical: `${SITE_URL}/ppt/` },
  openGraph: {
    title: 'Digital Marketing PPT | Impulse Digital Presentations',
    description: 'Browse free digital marketing PPT and PowerPoint presentations by Impulse Digital. Download strategy decks on social media, content, SEO, Google Ads, and more.',
    url: `${SITE_URL}/ppt/`,
    siteName: 'Impulse Digital',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing PPT | Impulse Digital Presentations',
    description: 'Browse free digital marketing PPT and PowerPoint presentations by Impulse Digital. Download strategy decks on social media, content, SEO, Google Ads, and more.',
    site: '@impulsedigi',
  }
};

export default function Page() {
  return <PPTGalleryClient />;
}
