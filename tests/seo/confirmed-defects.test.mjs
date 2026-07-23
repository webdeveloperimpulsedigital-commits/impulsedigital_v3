import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const read = (path) => readFile(new URL(`../../${path}`, import.meta.url), 'utf8');

const uaeLocationPages = [
  'app/ae/brand-infrastructure/search-engine-optimisation/abu-dhabi/page.tsx',
  'app/ae/brand-infrastructure/search-engine-optimisation/ajman/page.tsx',
  'app/ae/brand-infrastructure/search-engine-optimisation/al-ain/page.tsx',
  'app/ae/brand-infrastructure/search-engine-optimisation/business-bay/page.tsx',
  'app/ae/brand-infrastructure/search-engine-optimisation/deira/page.tsx',
  'app/ae/brand-infrastructure/search-engine-optimisation/fujairah/page.tsx',
  'app/ae/brand-infrastructure/search-engine-optimisation/ras-al-khaimah/page.tsx',
  'app/ae/brand-infrastructure/search-engine-optimisation/sharjah/page.tsx',
  'app/ae/brand-infrastructure/search-engine-optimisation/uae/page.tsx',
];

test('UAE location pages do not claim an unverified LocalBusiness', async () => {
  for (const path of uaeLocationPages) {
    const source = await read(path);
    assert.doesNotMatch(source, /const schemas\s*=\s*\[[^\]]*localBusinessSchema/, path);
  }
});

test('UAE location pages do not duplicate FAQPage owned by SEOLocationTemplate', async () => {
  for (const path of uaeLocationPages) {
    const source = await read(path);
    assert.doesNotMatch(source, /getComplexFAQSchema/, path);
  }
});

test('root metadata does not infer cross-market city equivalence', async () => {
  const source = await read('app/layout.tsx');
  assert.doesNotMatch(source, /exactLocationMap/);
  assert.doesNotMatch(source, /navi-mumbai\/?['"]\s*:\s*['"]\/brand-infrastructure\/search-engine-optimisation\/abu-dhabi/);
});

test('regional links do not route one city to a different city', async () => {
  const source = await read('components/RegionLink.tsx');
  assert.doesNotMatch(source, /const seoMap/);
  assert.doesNotMatch(source, /digital-marketing-agency-in-thane['"]?\)?\s*\{?[\s\S]{0,160}abu-dhabi/);
});

test('UAE homepage graph references the stable root organization ID', async () => {
  const source = await read('app/ae/page.tsx');
  assert.doesNotMatch(source, /https:\/\/www\.theimpulsedigital\.com\/ae\/#organization/);
  assert.match(source, /buildHomeGraph\(['"]ae['"]\)/);
  const entities = await read('seo/registries/entities.ts');
  assert.match(entities, /organization:\s*`\$\{SITE_URL\}\/#organization`/);
});

test('blog proxy explicitly preserves the incoming request method', async () => {
  const source = await read('proxy.ts');
  assert.match(source, /method:\s*request\.method/);
  assert.match(source, /request\.method\s*===\s*['"]HEAD['"]/);
});
