import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import PPTGalleryClient from './PPTGalleryClient';
import { getFAQSchema } from "@/lib/schemaHelper";
const CATEGORIES = [
  { name: 'All PPTs', slug: '' },
  { name: 'Social Media PPT', slug: 'social-media' },
  { name: 'Google Ads / SEM PPT', slug: 'google-ads-sem' },
  { name: 'Content Marketing PPT', slug: 'content-marketing' },
  { name: 'Employer Branding PPT', slug: 'employer-branding' },
  { name: 'Website Design Development PPT', slug: 'website-design-development' }
];

interface Props {
  params: Promise<{ category?: string[] }>;
}

const CATEGORY_SEO: Record<string, { title: string; description: string; keywords: string[] }> = {
  'social-media': {
    title: 'Social Media PPT | Free Presentations by Impulse Digital',
    description: 'Browse free social media PPT decks and PowerPoint presentations by Impulse Digital. Download strategy guides on Instagram, YouTube, Facebook, WhatsApp, and more.',
    keywords: ['social media ppt', 'dubai', 'uae', 'Impulse digital']
  },
  'content-marketing': {
    title: 'Content Marketing PPT | Free Presentations by Impulse Digital',
    description: 'Browse free content marketing PPT decks and PowerPoint presentations by Impulse Digital. Download strategy guides on blogging, SEO content, B2B content, and more.',
    keywords: ['content marketing ppt', 'dubai', 'uae', 'Impulse digital']
  },
  'employer-branding': {
    title: 'Employer Branding PPT | Free Presentations by Impulse Digital',
    description: 'Browse free employer branding PPT decks and PowerPoint presentations by Impulse Digital. Download guides on EVP design, recruitment marketing, and culture storytelling.',
    keywords: ['employer branding ppt', 'dubai', 'uae', 'Impulse digital']
  },
  'google-ads-sem': {
    title: 'Google Ads PPT | Free SEM Presentations by Impulse Digital',
    description: 'Browse free Google Ads PPT decks and SEM PowerPoint presentations by Impulse Digital. Download strategy guides on search ads, display, Shopping campaigns, and more.',
    keywords: ['google ads ppt', 'SEM PPT', 'dubai', 'uae', 'Impulse digital']
  },
  'website-design-development': {
    title: 'Web Design and Development PPT | Free Presentations by Impulse',
    description: 'Browse free web design and development PPT decks and PowerPoint presentations by Impulse Digital. Download guides on UX, CRO, website strategy, and development best practices.',
    keywords: ['web design and development ppt', 'dubai', 'uae', 'Impulse digital']
  }
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const categoryParam = resolvedParams?.category;
  const currentSlug = Array.isArray(categoryParam) ? categoryParam[0] : (categoryParam || '');

  const activeCategoryObj = CATEGORIES.find(c => c.slug === currentSlug) || CATEGORIES[0];
  const specificSeo = CATEGORY_SEO[currentSlug];

  const title = specificSeo?.title || (currentSlug
    ? `${activeCategoryObj.name} | Impulse Digital`
    : `Digital Marketing PPT | Impulse Digital Presentations`);

  const description = specificSeo?.description || (currentSlug
    ? `Explore our collection of ${activeCategoryObj.name} presentations, insights, and strategies.`
    : `Browse free digital marketing PPT and PowerPoint presentations by Impulse Digital. Download strategy decks on social media, content, SEO, Google Ads, and more.`);

  const url = currentSlug ? `${SITE_URL}/ae/ppt/${currentSlug}/` : `${SITE_URL}/ae/ppt/`;

  const keywords = specificSeo?.keywords || (!currentSlug ? ['digital marketing ppt', 'digital marketing powerpoint presentation', 'Dubai', 'uae', 'Impulse digital'] : []);

  const baseMetadata: Metadata = {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: 'Impulse Digital',
      type: 'website',
      images: [
        {
          url: '[ADD BANNER IMAGE URL - 1200x628px]',
          width: 1200,
          height: 628,
          alt: title,
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      site: '@impulsedigi',
      images: ['[ADD BANNER IMAGE URL - 1200x628px]'],
    }
  };

  return baseMetadata;
}

export default async function Page() {
  const schemas: any[] = [];

  return <PPTGalleryClient />;
}
