/**
 * Legacy URLs with an evidence-backed, exact current equivalent.
 * Decision-gated URLs are intentionally absent.
 */
const redirectPairs = [
  ['/services/social-media-marketing', '/brand-infrastructure/social-media-marketing/'],
  ['/social-media-marketing', '/brand-infrastructure/social-media-marketing/'],
  ['/employer-branding-agency', '/brand-infrastructure/employer-branding/'],
  ['/case-studies/employer-branding', '/brand-infrastructure/employer-branding/'],
  ['/ae/case-studies/employer-branding', '/ae/brand-infrastructure/employer-branding/'],
  ['/career', '/careers/'],
  ['/social-media-video-production', '/brand-infrastructure/video-production/'],
  ['/local-seo-service', '/brand-infrastructure/search-engine-optimisation/local-seo/'],
  ['/search-engine-optimization', '/brand-infrastructure/search-engine-optimisation/'],
  ['/digital-marketing-services', '/digital-marketing-agency-in-india/'],
  ['/services/branding-creative-services', '/brand-infrastructure/branding/'],
  ['/branding-creative-services', '/brand-infrastructure/branding/'],
  ['/enterprise-seo-service', '/brand-infrastructure/search-engine-optimisation/enterprise-seo/'],
  ['/b2b-seo-service', '/brand-infrastructure/search-engine-optimisation/b2b-seo/'],
  ['/clients-works', '/case-studies/'],
  ['/website-development', '/brand-infrastructure/website-development/'],
  ['/ecommerce-seo-service', '/brand-infrastructure/search-engine-optimisation/ecommerce-seo/'],
  ['/agentic-ai', '/ai-marketing-systems/agentic-ai/'],
  ['/ae/digital-marketing-agency-in-uae', '/ae/'],
  ['/ae/brand-infrastructure/search-engine-optimisation/uae', '/ae/brand-infrastructure/search-engine-optimisation/'],
  ['/ae/brand-infrastructure/search-engine-optimisation/deira', '/ae/brand-infrastructure/search-engine-optimisation/dubai/'],
  ['/ae/brand-infrastructure/search-engine-optimisation/business-bay', '/ae/brand-infrastructure/search-engine-optimisation/dubai/'],
  ['/case-studies-dmart', '/case-studies/dmart/'],
  ['/casestudies/d-mart', '/case-studies/dmart/'],
  ['/dmart', '/case-studies/dmart/'],
  ['/case-studies-hul', '/case-studies/hul/'],
  ['/hul_new', '/case-studies/hul/'],
  ['/hul', '/case-studies/hul/'],
  ['/case-studies-mastercard', '/case-studies/mastercard/'],
  ['/casestudies/mastercard', '/case-studies/mastercard/'],
  ['/casestudies/fourseforgood', '/case-studies/fours-for-good/'],
  ['/casestudies/crafting-the-employer-value-proposition-for-amazon-india', '/case-studies/amazon-india-evp-strategy/'],
  ['/case-studies-emech', '/case-studies/electromech/'],
  ['/casestudies/electromech', '/case-studies/electromech/'],
  ['/slideshare-ppt', '/ppt/'],
  ['/slide-share-ppt', '/ppt/'],
  ['/resources/slideshare-ppt', '/ppt/'],
  ['/online-paid-advertising', '/growth-intelligence/campaign-intelligence/'],
  ['/services/content-writing-services', '/brand-infrastructure/branding/'],
  ['/content-marketing-services', '/brand-infrastructure/branding/'],
  ['/case-studies-vendiman', '/case-studies/'],
];

export const highConfidenceRedirects = redirectPairs.flatMap(([source, destination]) => {
  const rule = { source, destination, permanent: true };
  if (source.endsWith('/')) return [rule];
  return [rule, { ...rule, source: `${source}/` }];
});
