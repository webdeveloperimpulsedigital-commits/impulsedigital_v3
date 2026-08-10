import assert from 'node:assert/strict';
import test from 'node:test';

import { highConfidenceRedirects } from '../../seo/registries/redirects.mjs';

const required = new Map([
  ['/services/social-media-marketing', '/brand-infrastructure/social-media-marketing/'],
  ['/social-media-marketing', '/brand-infrastructure/social-media-marketing/'],
  ['/employer-branding-agency', '/brand-infrastructure/employer-branding/'],
  ['/case-studies/employer-branding', '/brand-infrastructure/employer-branding/'],
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
  ['/resources/slideshare-ppt', '/ppt/'],
  ['/online-paid-advertising', '/growth-intelligence/campaign-intelligence/'],
  ['/services/content-writing-services', '/brand-infrastructure/branding/'],
  ['/content-marketing-services', '/brand-infrastructure/branding/'],
  ['/case-studies-vendiman', '/case-studies/'],
]);

const decisionGated = [];

test('redirect registry contains every approved high-confidence mapping', () => {
  const actual = new Map(highConfidenceRedirects.map(({ source, destination }) => [source, destination]));
  for (const [source, destination] of required) {
    assert.equal(actual.get(source), destination, source);
  }
});

test('redirect sources are unique and destinations are canonical paths', () => {
  const sources = highConfidenceRedirects.map(({ source }) => source);
  assert.equal(new Set(sources).size, sources.length);
  for (const { source, destination, permanent } of highConfidenceRedirects) {
    assert.ok(source.startsWith('/'), source);
    assert.ok(destination.startsWith('/') && destination.endsWith('/'), destination);
    assert.equal(permanent, true, source);
    assert.notEqual(source, destination);
  }
});

test('decision-gated URLs are absent from automatic redirects', () => {
  const sources = new Set(highConfidenceRedirects.map(({ source }) => source));
  for (const source of decisionGated) assert.equal(sources.has(source), false, source);
});

