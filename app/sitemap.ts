import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/siteUrl';

/**
 * Auto-generated sitemap for all main website and UAE routes.
 * Note: Blog URLs are excluded as they are handled separately by the Yoast SEO sitemap (/blog/sitemap_index.xml).
 * Next.js serves this at /sitemap.xml automatically.
 * 
 * To switch staging → production: change NEXT_PUBLIC_SITE_URL in Hostinger hPanel.
 * All sitemap URLs update automatically — no code changes needed.
 * 
 * IMPORTANT: Update the date constants below when you make meaningful content
 * changes to pages in that group. Do NOT use new Date() — it makes lastmod
 * useless to search engines.
 */

// Last meaningful content update dates — update these when content actually changes
const CORE_PAGES_UPDATED       = '2026-07-13';  // Homepage, About, Services, Contact, Careers
const SERVICE_PAGES_UPDATED    = '2026-07-13';  // Growth Intelligence, AI Marketing, Brand Infrastructure sub-pages
const CASE_STUDIES_UPDATED     = '2026-06-01';  // Case studies (rarely change)
const LOCATION_PAGES_UPDATED   = '2026-07-01';  // Location pages (India, UAE, city-level)
const SEO_SUBPAGES_UPDATED     = '2026-07-01';  // SEO location sub-pages (Airoli, Andheri, etc.)
const AE_SEO_SUBPAGES_UPDATED  = '2026-07-01';  // AE SEO location sub-pages (Dubai, Abu Dhabi, etc.)

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    // Core Pages
    { url: '/', priority: 1.0, changeFrequency: 'weekly' as const, lastModified: CORE_PAGES_UPDATED },
    { url: '/about-us/', priority: 0.9, changeFrequency: 'monthly' as const, lastModified: CORE_PAGES_UPDATED },
    { url: '/services/', priority: 0.9, changeFrequency: 'monthly' as const, lastModified: CORE_PAGES_UPDATED },
    { url: '/case-studies/', priority: 0.8, changeFrequency: 'weekly' as const, lastModified: CORE_PAGES_UPDATED },
    { url: '/careers/', priority: 0.7, changeFrequency: 'weekly' as const, lastModified: CORE_PAGES_UPDATED },
    { url: '/contact-us/', priority: 0.8, changeFrequency: 'monthly' as const, lastModified: CORE_PAGES_UPDATED },
    // Growth Intelligence
    { url: '/growth-intelligence/', priority: 0.8, changeFrequency: 'monthly' as const, lastModified: SERVICE_PAGES_UPDATED },
    { url: '/growth-intelligence/customer-intelligence/', priority: 0.7, changeFrequency: 'monthly' as const, lastModified: SERVICE_PAGES_UPDATED },
    { url: '/growth-intelligence/market-intelligence/', priority: 0.7, changeFrequency: 'monthly' as const, lastModified: SERVICE_PAGES_UPDATED },
    { url: '/growth-intelligence/social-intelligence/', priority: 0.7, changeFrequency: 'monthly' as const, lastModified: SERVICE_PAGES_UPDATED },
    { url: '/growth-intelligence/campaign-intelligence/', priority: 0.7, changeFrequency: 'monthly' as const, lastModified: SERVICE_PAGES_UPDATED },
    { url: '/growth-intelligence/always-on-intelligence/', priority: 0.7, changeFrequency: 'monthly' as const, lastModified: SERVICE_PAGES_UPDATED },
    // AI Marketing Systems
    { url: '/ai-marketing-systems/', priority: 0.8, changeFrequency: 'monthly' as const, lastModified: SERVICE_PAGES_UPDATED },
    { url: '/ai-marketing-systems/archer-ai/', priority: 0.7, changeFrequency: 'monthly' as const, lastModified: SERVICE_PAGES_UPDATED },
    { url: '/ai-marketing-systems/agentic-ai/', priority: 0.7, changeFrequency: 'monthly' as const, lastModified: SERVICE_PAGES_UPDATED },
    { url: '/ai-marketing-systems/generative-search-optimisation/', priority: 0.7, changeFrequency: 'monthly' as const, lastModified: SERVICE_PAGES_UPDATED },
    { url: '/ai-marketing-systems/ai-video-production/', priority: 0.7, changeFrequency: 'monthly' as const, lastModified: SERVICE_PAGES_UPDATED },
    // Brand Infrastructure
    { url: '/brand-infrastructure/', priority: 0.8, changeFrequency: 'monthly' as const, lastModified: SERVICE_PAGES_UPDATED },
    { url: '/brand-infrastructure/search-engine-optimisation/', priority: 0.8, changeFrequency: 'monthly' as const, lastModified: SERVICE_PAGES_UPDATED },
    { url: '/brand-infrastructure/search-engine-optimisation/local-seo/', priority: 0.7, changeFrequency: 'monthly' as const, lastModified: SERVICE_PAGES_UPDATED },
    { url: '/brand-infrastructure/search-engine-optimisation/ecommerce-seo/', priority: 0.7, changeFrequency: 'monthly' as const, lastModified: SERVICE_PAGES_UPDATED },
    { url: '/brand-infrastructure/search-engine-optimisation/enterprise-seo/', priority: 0.7, changeFrequency: 'monthly' as const, lastModified: SERVICE_PAGES_UPDATED },
    { url: '/brand-infrastructure/search-engine-optimisation/b2b-seo/', priority: 0.7, changeFrequency: 'monthly' as const, lastModified: SERVICE_PAGES_UPDATED },
    { url: '/brand-infrastructure/social-media-marketing/', priority: 0.7, changeFrequency: 'monthly' as const, lastModified: SERVICE_PAGES_UPDATED },
    { url: '/brand-infrastructure/website-development/', priority: 0.7, changeFrequency: 'monthly' as const, lastModified: SERVICE_PAGES_UPDATED },
    { url: '/brand-infrastructure/branding/', priority: 0.7, changeFrequency: 'monthly' as const, lastModified: SERVICE_PAGES_UPDATED },
    { url: '/brand-infrastructure/employer-branding/', priority: 0.7, changeFrequency: 'monthly' as const, lastModified: SERVICE_PAGES_UPDATED },
    { url: '/brand-infrastructure/video-production/', priority: 0.7, changeFrequency: 'monthly' as const, lastModified: SERVICE_PAGES_UPDATED },
    // Case Studies
    { url: '/case-studies/amazon-unplugged/', priority: 0.6, changeFrequency: 'yearly' as const, lastModified: CASE_STUDIES_UPDATED },
    { url: '/case-studies/amazon-india-evp-strategy/', priority: 0.6, changeFrequency: 'yearly' as const, lastModified: CASE_STUDIES_UPDATED },
    { url: '/case-studies/amazon-talent-communication-engine/', priority: 0.6, changeFrequency: 'yearly' as const, lastModified: CASE_STUDIES_UPDATED },
    { url: '/case-studies/uppercase/', priority: 0.6, changeFrequency: 'yearly' as const, lastModified: CASE_STUDIES_UPDATED },
    { url: '/case-studies/qure-ai/', priority: 0.6, changeFrequency: 'yearly' as const, lastModified: CASE_STUDIES_UPDATED },
    { url: '/case-studies/mastercard/', priority: 0.6, changeFrequency: 'yearly' as const, lastModified: CASE_STUDIES_UPDATED },
    { url: '/case-studies/lg-hing/', priority: 0.6, changeFrequency: 'yearly' as const, lastModified: CASE_STUDIES_UPDATED },
    { url: '/case-studies/hul/', priority: 0.6, changeFrequency: 'yearly' as const, lastModified: CASE_STUDIES_UPDATED },
    { url: '/case-studies/fours-for-good/', priority: 0.6, changeFrequency: 'yearly' as const, lastModified: CASE_STUDIES_UPDATED },
    { url: '/case-studies/electromech/', priority: 0.6, changeFrequency: 'yearly' as const, lastModified: CASE_STUDIES_UPDATED },
    { url: '/case-studies/dmart/', priority: 0.6, changeFrequency: 'yearly' as const, lastModified: CASE_STUDIES_UPDATED },
    { url: '/case-studies/abg-brut-india/', priority: 0.6, changeFrequency: 'yearly' as const, lastModified: CASE_STUDIES_UPDATED },
    { url: '/case-studies/abg-kbc/', priority: 0.6, changeFrequency: 'yearly' as const, lastModified: CASE_STUDIES_UPDATED },
    { url: '/case-studies/automag-bajaj-auto/', priority: 0.6, changeFrequency: 'yearly' as const, lastModified: CASE_STUDIES_UPDATED },
    { url: '/case-studies/automag-india/', priority: 0.6, changeFrequency: 'yearly' as const, lastModified: CASE_STUDIES_UPDATED },
    { url: '/case-studies/employer-branding/', priority: 0.6, changeFrequency: 'yearly' as const, lastModified: CASE_STUDIES_UPDATED },
    { url: '/case-studies/shaking-things-up/', priority: 0.6, changeFrequency: 'yearly' as const, lastModified: CASE_STUDIES_UPDATED },
    { url: '/case-studies/tata-soulfull/', priority: 0.6, changeFrequency: 'yearly' as const, lastModified: CASE_STUDIES_UPDATED },
    { url: '/case-studies/tcpl/', priority: 0.6, changeFrequency: 'yearly' as const, lastModified: CASE_STUDIES_UPDATED },
    { url: '/case-studies/chings-kurkure/', priority: 0.6, changeFrequency: 'yearly' as const, lastModified: CASE_STUDIES_UPDATED },
    { url: '/case-studies/chings-foodfarmer/', priority: 0.6, changeFrequency: 'yearly' as const, lastModified: CASE_STUDIES_UPDATED },
    // UAE Main Pages
    { url: '/ae/', priority: 1.0, changeFrequency: 'weekly' as const, lastModified: CORE_PAGES_UPDATED },
    { url: '/ae/about-us/', priority: 0.9, changeFrequency: 'monthly' as const, lastModified: CORE_PAGES_UPDATED },
    { url: '/ae/services/', priority: 0.9, changeFrequency: 'monthly' as const, lastModified: CORE_PAGES_UPDATED },
    { url: '/ae/case-studies/', priority: 0.8, changeFrequency: 'weekly' as const, lastModified: CORE_PAGES_UPDATED },
    { url: '/ae/careers/', priority: 0.7, changeFrequency: 'weekly' as const, lastModified: CORE_PAGES_UPDATED },
    { url: '/ae/contact-us/', priority: 0.8, changeFrequency: 'monthly' as const, lastModified: CORE_PAGES_UPDATED },
    // UAE Case Studies
    { url: '/ae/case-studies/amazon-unplugged/', priority: 0.6, changeFrequency: 'yearly' as const, lastModified: CASE_STUDIES_UPDATED },
    { url: '/ae/case-studies/amazon-india-evp-strategy/', priority: 0.6, changeFrequency: 'yearly' as const, lastModified: CASE_STUDIES_UPDATED },
    { url: '/ae/case-studies/amazon-talent-communication-engine/', priority: 0.6, changeFrequency: 'yearly' as const, lastModified: CASE_STUDIES_UPDATED },
    { url: '/ae/case-studies/uppercase/', priority: 0.6, changeFrequency: 'yearly' as const, lastModified: CASE_STUDIES_UPDATED },
    { url: '/ae/case-studies/qure-ai/', priority: 0.6, changeFrequency: 'yearly' as const, lastModified: CASE_STUDIES_UPDATED },
    { url: '/ae/case-studies/mastercard/', priority: 0.6, changeFrequency: 'yearly' as const, lastModified: CASE_STUDIES_UPDATED },
    { url: '/ae/case-studies/lg-hing/', priority: 0.6, changeFrequency: 'yearly' as const, lastModified: CASE_STUDIES_UPDATED },
    { url: '/ae/case-studies/hul/', priority: 0.6, changeFrequency: 'yearly' as const, lastModified: CASE_STUDIES_UPDATED },
    { url: '/ae/case-studies/fours-for-good/', priority: 0.6, changeFrequency: 'yearly' as const, lastModified: CASE_STUDIES_UPDATED },
    { url: '/ae/case-studies/electromech/', priority: 0.6, changeFrequency: 'yearly' as const, lastModified: CASE_STUDIES_UPDATED },
    { url: '/ae/case-studies/dmart/', priority: 0.6, changeFrequency: 'yearly' as const, lastModified: CASE_STUDIES_UPDATED },
    { url: '/ae/case-studies/abg-brut-india/', priority: 0.6, changeFrequency: 'yearly' as const, lastModified: CASE_STUDIES_UPDATED },
    { url: '/ae/case-studies/abg-kbc/', priority: 0.6, changeFrequency: 'yearly' as const, lastModified: CASE_STUDIES_UPDATED },
    { url: '/ae/case-studies/automag-bajaj-auto/', priority: 0.6, changeFrequency: 'yearly' as const, lastModified: CASE_STUDIES_UPDATED },
    { url: '/ae/case-studies/automag-india/', priority: 0.6, changeFrequency: 'yearly' as const, lastModified: CASE_STUDIES_UPDATED },
    { url: '/ae/case-studies/employer-branding/', priority: 0.6, changeFrequency: 'yearly' as const, lastModified: CASE_STUDIES_UPDATED },
    { url: '/ae/case-studies/shaking-things-up/', priority: 0.6, changeFrequency: 'yearly' as const, lastModified: CASE_STUDIES_UPDATED },
    { url: '/ae/case-studies/tata-soulfull/', priority: 0.6, changeFrequency: 'yearly' as const, lastModified: CASE_STUDIES_UPDATED },
    { url: '/ae/case-studies/tcpl/', priority: 0.6, changeFrequency: 'yearly' as const, lastModified: CASE_STUDIES_UPDATED },
    { url: '/ae/case-studies/chings-kurkure/', priority: 0.6, changeFrequency: 'yearly' as const, lastModified: CASE_STUDIES_UPDATED },
    { url: '/ae/case-studies/chings-foodfarmer/', priority: 0.6, changeFrequency: 'yearly' as const, lastModified: CASE_STUDIES_UPDATED },
    // UAE Services
    { url: '/ae/growth-intelligence/', priority: 0.8, changeFrequency: 'monthly' as const, lastModified: SERVICE_PAGES_UPDATED },
    { url: '/ae/growth-intelligence/customer-intelligence/', priority: 0.7, changeFrequency: 'monthly' as const, lastModified: SERVICE_PAGES_UPDATED },
    { url: '/ae/growth-intelligence/market-intelligence/', priority: 0.7, changeFrequency: 'monthly' as const, lastModified: SERVICE_PAGES_UPDATED },
    { url: '/ae/growth-intelligence/social-intelligence/', priority: 0.7, changeFrequency: 'monthly' as const, lastModified: SERVICE_PAGES_UPDATED },
    { url: '/ae/growth-intelligence/campaign-intelligence/', priority: 0.7, changeFrequency: 'monthly' as const, lastModified: SERVICE_PAGES_UPDATED },
    { url: '/ae/growth-intelligence/always-on-intelligence/', priority: 0.7, changeFrequency: 'monthly' as const, lastModified: SERVICE_PAGES_UPDATED },
    { url: '/ae/ai-marketing-systems/', priority: 0.8, changeFrequency: 'monthly' as const, lastModified: SERVICE_PAGES_UPDATED },
    { url: '/ae/ai-marketing-systems/archer-ai/', priority: 0.7, changeFrequency: 'monthly' as const, lastModified: SERVICE_PAGES_UPDATED },
    { url: '/ae/ai-marketing-systems/agentic-ai/', priority: 0.7, changeFrequency: 'monthly' as const, lastModified: SERVICE_PAGES_UPDATED },
    { url: '/ae/ai-marketing-systems/generative-search-optimisation/', priority: 0.7, changeFrequency: 'monthly' as const, lastModified: SERVICE_PAGES_UPDATED },
    { url: '/ae/ai-marketing-systems/ai-video-production/', priority: 0.7, changeFrequency: 'monthly' as const, lastModified: SERVICE_PAGES_UPDATED },
    { url: '/ae/brand-infrastructure/', priority: 0.8, changeFrequency: 'monthly' as const, lastModified: SERVICE_PAGES_UPDATED },
    { url: '/ae/brand-infrastructure/search-engine-optimisation/', priority: 0.8, changeFrequency: 'monthly' as const, lastModified: SERVICE_PAGES_UPDATED },
    { url: '/ae/brand-infrastructure/search-engine-optimisation/local-seo/', priority: 0.7, changeFrequency: 'monthly' as const, lastModified: SERVICE_PAGES_UPDATED },
    { url: '/ae/brand-infrastructure/search-engine-optimisation/ecommerce-seo/', priority: 0.7, changeFrequency: 'monthly' as const, lastModified: SERVICE_PAGES_UPDATED },
    { url: '/ae/brand-infrastructure/search-engine-optimisation/enterprise-seo/', priority: 0.7, changeFrequency: 'monthly' as const, lastModified: SERVICE_PAGES_UPDATED },
    { url: '/ae/brand-infrastructure/search-engine-optimisation/b2b-seo/', priority: 0.7, changeFrequency: 'monthly' as const, lastModified: SERVICE_PAGES_UPDATED },
    { url: '/ae/brand-infrastructure/social-media-marketing/', priority: 0.7, changeFrequency: 'monthly' as const, lastModified: SERVICE_PAGES_UPDATED },
    { url: '/ae/brand-infrastructure/website-development/', priority: 0.7, changeFrequency: 'monthly' as const, lastModified: SERVICE_PAGES_UPDATED },
    { url: '/ae/brand-infrastructure/branding/', priority: 0.7, changeFrequency: 'monthly' as const, lastModified: SERVICE_PAGES_UPDATED },
    { url: '/ae/brand-infrastructure/employer-branding/', priority: 0.7, changeFrequency: 'monthly' as const, lastModified: SERVICE_PAGES_UPDATED },
    { url: '/ae/brand-infrastructure/video-production/', priority: 0.7, changeFrequency: 'monthly' as const, lastModified: SERVICE_PAGES_UPDATED },
    // Location pages
    { url: '/digital-marketing-agency-in-india/', priority: 0.7, changeFrequency: 'monthly' as const, lastModified: LOCATION_PAGES_UPDATED },
    { url: '/digital-marketing-agency-in-thane/', priority: 0.7, changeFrequency: 'monthly' as const, lastModified: LOCATION_PAGES_UPDATED },
    { url: '/digital-marketing-agency-in-navi-mumbai/', priority: 0.7, changeFrequency: 'monthly' as const, lastModified: LOCATION_PAGES_UPDATED },
    { url: '/digital-marketing-agency-in-pune/', priority: 0.7, changeFrequency: 'monthly' as const, lastModified: LOCATION_PAGES_UPDATED },
    // UAE Location pages
    { url: '/ae/digital-marketing-agency-in-uae/', priority: 0.7, changeFrequency: 'monthly' as const, lastModified: LOCATION_PAGES_UPDATED },
    { url: '/ae/digital-marketing-agency-in-abu-dhabi/', priority: 0.7, changeFrequency: 'monthly' as const, lastModified: LOCATION_PAGES_UPDATED },
    { url: '/ae/digital-marketing-agency-in-sharjah/', priority: 0.7, changeFrequency: 'monthly' as const, lastModified: LOCATION_PAGES_UPDATED },
    { url: '/ae/digital-marketing-agency-in-ajman/', priority: 0.7, changeFrequency: 'monthly' as const, lastModified: LOCATION_PAGES_UPDATED },
    // SEO Location sub-pages
    { url: '/brand-infrastructure/search-engine-optimisation/airoli/', priority: 0.6, changeFrequency: 'monthly' as const, lastModified: SEO_SUBPAGES_UPDATED },
    { url: '/brand-infrastructure/search-engine-optimisation/andheri/', priority: 0.6, changeFrequency: 'monthly' as const, lastModified: SEO_SUBPAGES_UPDATED },
    { url: '/brand-infrastructure/search-engine-optimisation/bandra/', priority: 0.6, changeFrequency: 'monthly' as const, lastModified: SEO_SUBPAGES_UPDATED },
    { url: '/brand-infrastructure/search-engine-optimisation/borivali/', priority: 0.6, changeFrequency: 'monthly' as const, lastModified: SEO_SUBPAGES_UPDATED },
    { url: '/brand-infrastructure/search-engine-optimisation/dadar/', priority: 0.6, changeFrequency: 'monthly' as const, lastModified: SEO_SUBPAGES_UPDATED },
    { url: '/brand-infrastructure/search-engine-optimisation/ghansoli/', priority: 0.6, changeFrequency: 'monthly' as const, lastModified: SEO_SUBPAGES_UPDATED },
    { url: '/brand-infrastructure/search-engine-optimisation/ghatkopar/', priority: 0.6, changeFrequency: 'monthly' as const, lastModified: SEO_SUBPAGES_UPDATED },
    { url: '/brand-infrastructure/search-engine-optimisation/goregaon/', priority: 0.6, changeFrequency: 'monthly' as const, lastModified: SEO_SUBPAGES_UPDATED },
    { url: '/brand-infrastructure/search-engine-optimisation/jogeshwari/', priority: 0.6, changeFrequency: 'monthly' as const, lastModified: SEO_SUBPAGES_UPDATED },
    { url: '/brand-infrastructure/search-engine-optimisation/kandivali/', priority: 0.6, changeFrequency: 'monthly' as const, lastModified: SEO_SUBPAGES_UPDATED },
    { url: '/brand-infrastructure/search-engine-optimisation/kharghar/', priority: 0.6, changeFrequency: 'monthly' as const, lastModified: SEO_SUBPAGES_UPDATED },
    { url: '/brand-infrastructure/search-engine-optimisation/koparkhairane/', priority: 0.6, changeFrequency: 'monthly' as const, lastModified: SEO_SUBPAGES_UPDATED },
    { url: '/brand-infrastructure/search-engine-optimisation/malad/', priority: 0.6, changeFrequency: 'monthly' as const, lastModified: SEO_SUBPAGES_UPDATED },
    { url: '/brand-infrastructure/search-engine-optimisation/mansarovar/', priority: 0.6, changeFrequency: 'monthly' as const, lastModified: SEO_SUBPAGES_UPDATED },
    { url: '/brand-infrastructure/search-engine-optimisation/mira-road/', priority: 0.6, changeFrequency: 'monthly' as const, lastModified: SEO_SUBPAGES_UPDATED },
    { url: '/brand-infrastructure/search-engine-optimisation/mulund/', priority: 0.6, changeFrequency: 'monthly' as const, lastModified: SEO_SUBPAGES_UPDATED },
    { url: '/brand-infrastructure/search-engine-optimisation/mumbai/', priority: 0.7, changeFrequency: 'monthly' as const, lastModified: SEO_SUBPAGES_UPDATED },
    { url: '/brand-infrastructure/search-engine-optimisation/navi-mumbai/', priority: 0.7, changeFrequency: 'monthly' as const, lastModified: SEO_SUBPAGES_UPDATED },
    { url: '/brand-infrastructure/search-engine-optimisation/nerul/', priority: 0.6, changeFrequency: 'monthly' as const, lastModified: SEO_SUBPAGES_UPDATED },
    { url: '/brand-infrastructure/search-engine-optimisation/panvel/', priority: 0.6, changeFrequency: 'monthly' as const, lastModified: SEO_SUBPAGES_UPDATED },
    { url: '/brand-infrastructure/search-engine-optimisation/sanpada/', priority: 0.6, changeFrequency: 'monthly' as const, lastModified: SEO_SUBPAGES_UPDATED },
    { url: '/brand-infrastructure/search-engine-optimisation/turbhe/', priority: 0.6, changeFrequency: 'monthly' as const, lastModified: SEO_SUBPAGES_UPDATED },
    { url: '/brand-infrastructure/search-engine-optimisation/vashi/', priority: 0.6, changeFrequency: 'monthly' as const, lastModified: SEO_SUBPAGES_UPDATED },
    // AE SEO location pages
    { url: '/ae/brand-infrastructure/search-engine-optimisation/uae/', priority: 0.7, changeFrequency: 'monthly' as const, lastModified: AE_SEO_SUBPAGES_UPDATED },
    { url: '/ae/brand-infrastructure/search-engine-optimisation/abu-dhabi/', priority: 0.7, changeFrequency: 'monthly' as const, lastModified: AE_SEO_SUBPAGES_UPDATED },
    { url: '/ae/brand-infrastructure/search-engine-optimisation/sharjah/', priority: 0.7, changeFrequency: 'monthly' as const, lastModified: AE_SEO_SUBPAGES_UPDATED },
    { url: '/ae/brand-infrastructure/search-engine-optimisation/deira/', priority: 0.6, changeFrequency: 'monthly' as const, lastModified: AE_SEO_SUBPAGES_UPDATED },
    { url: '/ae/brand-infrastructure/search-engine-optimisation/ajman/', priority: 0.6, changeFrequency: 'monthly' as const, lastModified: AE_SEO_SUBPAGES_UPDATED },
    { url: '/ae/brand-infrastructure/search-engine-optimisation/al-ain/', priority: 0.6, changeFrequency: 'monthly' as const, lastModified: AE_SEO_SUBPAGES_UPDATED },
    { url: '/ae/brand-infrastructure/search-engine-optimisation/ras-al-khaimah/', priority: 0.6, changeFrequency: 'monthly' as const, lastModified: AE_SEO_SUBPAGES_UPDATED },
    { url: '/ae/brand-infrastructure/search-engine-optimisation/fujairah/', priority: 0.6, changeFrequency: 'monthly' as const, lastModified: AE_SEO_SUBPAGES_UPDATED },
    { url: '/ae/brand-infrastructure/search-engine-optimisation/business-bay/', priority: 0.6, changeFrequency: 'monthly' as const, lastModified: AE_SEO_SUBPAGES_UPDATED },
  ];

  return staticRoutes.map((route) => ({
    url: `${SITE_URL}${route.url}`,
    lastModified: route.lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}

