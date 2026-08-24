import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SITE_URL } from '@/lib/siteUrl';
import PPTGalleryClient from '../PPTGalleryClient';

const CATEGORIES = [
  { name: 'Social Media PPT', slug: 'social-media' },
  { name: 'Google Ads / SEM PPT', slug: 'google-ads-sem' },
  { name: 'Content Marketing PPT', slug: 'content-marketing' },
  { name: 'Employer Branding PPT', slug: 'employer-branding' },
  { name: 'Website Design Development PPT', slug: 'website-design-development' }
];

const CATEGORY_SEO: Record<string, { title: string; description: string; keywords: string[] }> = {
  'social-media': {
    title: 'Social Media PPT | Free Presentations by Impulse Digital',
    description: 'Browse free social media PPT decks and PowerPoint presentations by Impulse Digital. Download strategy guides on Instagram, YouTube, Facebook, WhatsApp, and more.',
    keywords: ['social media ppt', 'Dubai', 'uae', 'Impulse digital']
  },
  'content-marketing': {
    title: 'Content Marketing PPT | Free Presentations by Impulse Digital',
    description: 'Browse free content marketing PPT decks and PowerPoint presentations by Impulse Digital. Download strategy guides on blogging, SEO content, B2B content, and more.',
    keywords: ['content marketing ppt', 'Dubai', 'uae', 'Impulse digital']
  },
  'employer-branding': {
    title: 'Employer Branding PPT | Free Presentations by Impulse Digital',
    description: 'Browse free employer branding PPT decks and PowerPoint presentations by Impulse Digital. Download guides on EVP design, recruitment marketing, and culture storytelling.',
    keywords: ['employer branding ppt', 'Dubai', 'uae', 'Impulse digital']
  },
  'google-ads-sem': {
    title: 'Google Ads PPT | Free SEM Presentations by Impulse Digital',
    description: 'Browse free Google Ads PPT decks and SEM PowerPoint presentations by Impulse Digital. Download strategy guides on search ads, display, Shopping campaigns, and more.',
    keywords: ['google ads ppt', 'SEM PPT', 'Dubai', 'uae', 'Impulse digital']
  },
  'website-design-development': {
    title: 'Web Design and Development PPT | Free Presentations by Impulse',
    description: 'Browse free web design and development PPT decks and PowerPoint presentations by Impulse Digital. Download guides on UX, CRO, website strategy, and development best practices.',
    keywords: ['web design and development ppt', 'Dubai', 'uae', 'Impulse digital']
  }
};

interface Props {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return CATEGORIES.map(c => ({ category: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const specificSeo = CATEGORY_SEO[category];
  const activeCategoryObj = CATEGORIES.find(c => c.slug === category);

  if (!activeCategoryObj) {
    return {};
  }

  const title = specificSeo?.title || `${activeCategoryObj.name} | Impulse Digital`;
  const description = specificSeo?.description || `Explore our collection of ${activeCategoryObj.name} presentations, insights, and strategies.`;
  const url = `${SITE_URL}/ae/ppt/${category}/`;
  const keywords = specificSeo?.keywords || [];

  return {
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
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      site: '@impulsedigi',
    }
  };
}

export default async function Page({ params }: Props) {
  const { category } = await params;
  const activeCategoryObj = CATEGORIES.find(c => c.slug === category);
  if (!activeCategoryObj) {
    notFound();
  }
  return <PPTGalleryClient />;
}
