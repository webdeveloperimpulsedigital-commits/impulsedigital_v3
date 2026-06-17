import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import PPTGalleryClient from './PPTGalleryClient';

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

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const categoryParam = resolvedParams?.category;
  const currentSlug = Array.isArray(categoryParam) ? categoryParam[0] : (categoryParam || '');
  
  const activeCategoryObj = CATEGORIES.find(c => c.slug === currentSlug) || CATEGORIES[0];
  
  const title = currentSlug 
    ? `${activeCategoryObj.name} | Impulse Digital`
    : `Presentations & Strategies | Impulse Digital`;
    
  const description = currentSlug
    ? `Explore our collection of ${activeCategoryObj.name} presentations, insights, and strategies.`
    : `Browse all digital marketing presentations, strategies, and execution insights from Impulse Digital.`;
    
  const url = currentSlug ? `${SITE_URL}/ppt/${currentSlug}/` : `${SITE_URL}/ppt/`;

  return {
    title,
    description,
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
    }
  };
}

export default async function Page() {
  return <PPTGalleryClient />;
}
