import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import { getAllPostsForSitemap } from '@/lib/wordpress';

/**
 * Auto-generated sitemap for all routes including dynamic blog posts.
 * Next.js serves this at /sitemap.xml automatically.
 * 
 * To switch staging → production: change NEXT_PUBLIC_SITE_URL in Hostinger hPanel.
 * All sitemap URLs update automatically — no code changes needed.
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticRoutes = [
    { url: '/', priority: 1.0, changeFrequency: 'weekly' as const },
    { url: '/about-us/', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/services/', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/blog/', priority: 0.8, changeFrequency: 'daily' as const },
    { url: '/case-studies/', priority: 0.8, changeFrequency: 'weekly' as const },
    { url: '/careers/', priority: 0.7, changeFrequency: 'weekly' as const },
    { url: '/contact-us/', priority: 0.8, changeFrequency: 'monthly' as const },
    // Growth Intelligence
    { url: '/growth-intelligence/', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/growth-intelligence/consumer-intelligence/', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/growth-intelligence/market-intelligence/', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/growth-intelligence/always-on-intelligence/', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/growth-intelligence/campaign-intelligence/', priority: 0.7, changeFrequency: 'monthly' as const },
    // AI Marketing Systems
    { url: '/ai-marketing-systems/', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/ai-marketing-systems/archer-ai/', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/ai-marketing-systems/agentic-ai/', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/ai-marketing-systems/generative-search-optimisation/', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/ai-marketing-systems/ai-video-production/', priority: 0.7, changeFrequency: 'monthly' as const },
    // Brand Infrastructure
    { url: '/brand-infrastructure/', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/brand-infrastructure/search-engine-optimisation/', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/brand-infrastructure/search-engine-optimisation/local-seo/', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/brand-infrastructure/search-engine-optimisation/ecommerce-seo/', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/brand-infrastructure/search-engine-optimisation/enterprise-seo/', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/brand-infrastructure/search-engine-optimisation/b2b-seo/', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/brand-infrastructure/social-media-marketing/', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/brand-infrastructure/website-development/', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/brand-infrastructure/branding/', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/brand-infrastructure/employer-branding/', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/brand-infrastructure/video-production/', priority: 0.7, changeFrequency: 'monthly' as const },
    // Case Studies
    { url: '/case-studies/amazon-unplugged/', priority: 0.6, changeFrequency: 'yearly' as const },
    { url: '/case-studies/amazon-india-evp-strategy/', priority: 0.6, changeFrequency: 'yearly' as const },
    { url: '/case-studies/amazon-talent-communication-engine/', priority: 0.6, changeFrequency: 'yearly' as const },
    { url: '/case-studies/uppercase/', priority: 0.6, changeFrequency: 'yearly' as const },
    { url: '/case-studies/qure-ai/', priority: 0.6, changeFrequency: 'yearly' as const },
    { url: '/case-studies/mastercard/', priority: 0.6, changeFrequency: 'yearly' as const },
    { url: '/case-studies/lg-hing/', priority: 0.6, changeFrequency: 'yearly' as const },
    { url: '/case-studies/hul/', priority: 0.6, changeFrequency: 'yearly' as const },
    { url: '/case-studies/fours-for-good/', priority: 0.6, changeFrequency: 'yearly' as const },
    { url: '/case-studies/electromech/', priority: 0.6, changeFrequency: 'yearly' as const },
    { url: '/case-studies/dmart/', priority: 0.6, changeFrequency: 'yearly' as const },
    { url: '/case-studies/abg-brut-india/', priority: 0.6, changeFrequency: 'yearly' as const },
    { url: '/case-studies/abg-kbc/', priority: 0.6, changeFrequency: 'yearly' as const },
    { url: '/case-studies/automag-bajaj-auto/', priority: 0.6, changeFrequency: 'yearly' as const },
    { url: '/case-studies/automag-india/', priority: 0.6, changeFrequency: 'yearly' as const },
    { url: '/case-studies/employer-branding/', priority: 0.6, changeFrequency: 'yearly' as const },
    { url: '/case-studies/shaking-things-up/', priority: 0.6, changeFrequency: 'yearly' as const },
    { url: '/case-studies/tata-soulfull/', priority: 0.6, changeFrequency: 'yearly' as const },
    { url: '/case-studies/tcpl/', priority: 0.6, changeFrequency: 'yearly' as const },
    { url: '/case-studies/chings-kurkure/', priority: 0.6, changeFrequency: 'yearly' as const },
    { url: '/case-studies/chings-foodfarmer/', priority: 0.6, changeFrequency: 'yearly' as const },
    // Location pages
    { url: '/digital-marketing-agency-in-india/', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/digital-marketing-agency-in-thane/', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/digital-marketing-agency-in-navi-mumbai/', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/digital-marketing-agency-in-pune/', priority: 0.7, changeFrequency: 'monthly' as const },
    // SEO Location sub-pages
    { url: '/brand-infrastructure/search-engine-optimisation/airoli/', priority: 0.6, changeFrequency: 'monthly' as const },
    { url: '/brand-infrastructure/search-engine-optimisation/andheri/', priority: 0.6, changeFrequency: 'monthly' as const },
    { url: '/brand-infrastructure/search-engine-optimisation/bandra/', priority: 0.6, changeFrequency: 'monthly' as const },
    { url: '/brand-infrastructure/search-engine-optimisation/borivali/', priority: 0.6, changeFrequency: 'monthly' as const },
    { url: '/brand-infrastructure/search-engine-optimisation/dadar/', priority: 0.6, changeFrequency: 'monthly' as const },
    { url: '/brand-infrastructure/search-engine-optimisation/ghansoli/', priority: 0.6, changeFrequency: 'monthly' as const },
    { url: '/brand-infrastructure/search-engine-optimisation/ghatkopar/', priority: 0.6, changeFrequency: 'monthly' as const },
    { url: '/brand-infrastructure/search-engine-optimisation/goregaon/', priority: 0.6, changeFrequency: 'monthly' as const },
    { url: '/brand-infrastructure/search-engine-optimisation/jogeshwari/', priority: 0.6, changeFrequency: 'monthly' as const },
    { url: '/brand-infrastructure/search-engine-optimisation/kandivali/', priority: 0.6, changeFrequency: 'monthly' as const },
    { url: '/brand-infrastructure/search-engine-optimisation/kharghar/', priority: 0.6, changeFrequency: 'monthly' as const },
    { url: '/brand-infrastructure/search-engine-optimisation/koparkhairane/', priority: 0.6, changeFrequency: 'monthly' as const },
    { url: '/brand-infrastructure/search-engine-optimisation/malad/', priority: 0.6, changeFrequency: 'monthly' as const },
    { url: '/brand-infrastructure/search-engine-optimisation/mansarovar/', priority: 0.6, changeFrequency: 'monthly' as const },
    { url: '/brand-infrastructure/search-engine-optimisation/mira-road/', priority: 0.6, changeFrequency: 'monthly' as const },
    { url: '/brand-infrastructure/search-engine-optimisation/mulund/', priority: 0.6, changeFrequency: 'monthly' as const },
    { url: '/brand-infrastructure/search-engine-optimisation/mumbai/', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/brand-infrastructure/search-engine-optimisation/navi-mumbai/', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/brand-infrastructure/search-engine-optimisation/nerul/', priority: 0.6, changeFrequency: 'monthly' as const },
    { url: '/brand-infrastructure/search-engine-optimisation/panvel/', priority: 0.6, changeFrequency: 'monthly' as const },
    { url: '/brand-infrastructure/search-engine-optimisation/sanpada/', priority: 0.6, changeFrequency: 'monthly' as const },
    { url: '/brand-infrastructure/search-engine-optimisation/turbhe/', priority: 0.6, changeFrequency: 'monthly' as const },
    { url: '/brand-infrastructure/search-engine-optimisation/vashi/', priority: 0.6, changeFrequency: 'monthly' as const },
  ];

  const blogPosts = await getAllPostsForSitemap();
  const blogRoutes = blogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}/`,
    lastModified: post.date ? new Date(post.date) : now,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [
    ...staticRoutes.map((route) => ({
      url: `${SITE_URL}${route.url}`,
      lastModified: now,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...blogRoutes,
  ];
}
