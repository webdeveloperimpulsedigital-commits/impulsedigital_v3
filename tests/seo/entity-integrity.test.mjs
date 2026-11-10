import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const read = (path) => readFile(new URL(`../../${path}`, import.meta.url), 'utf8');

test('approved entity facts drive organization and founder schema', async () => {
  const entities = await read('seo/registries/entities.ts');
  const schema = await read('lib/structuredData.ts');

  assert.match(entities, /foundingDate:\s*['"]2014['"]/);
  assert.match(entities, /name:\s*['"]Adwait Joshi['"][\s\S]*jobTitle:\s*['"]Founder and CEO['"]/);
  assert.match(entities, /name:\s*['"]Abhishek Arekar['"][\s\S]*jobTitle:\s*['"]Co-Founder['"]/);
  assert.match(schema, /foundingDate:\s*ENTITY_FACTS\.organization\.foundingDate/);
  assert.match(schema, /buildPersonNode\(ENTITY_FACTS\.people\.adwaitJoshi\)/);
  assert.match(schema, /buildPersonNode\(ENTITY_FACTS\.people\.abhishekArekar\)/);
});

test('India and UAE about pages publish the shared entity graph', async () => {
  const india = await read('app/about-us/page.tsx');
  const uae = await read('app/ae/about-us/page.tsx');

  assert.match(india, /buildAboutGraph\(['"]in['"]\)/);
  assert.match(uae, /buildAboutGraph\(['"]ae['"]\)/);
});

test('founder roles are visible text, not image-alt-only facts', async () => {
  const component = await read('components/pages/AboutUs.tsx');
  const indiaData = await read('data/aboutData.ts');
  const uaeData = await read('data/ae/aboutData.ts');

  assert.match(component, /className="ab-founder-role"/);
  for (const source of [indiaData, uaeData]) {
    assert.match(source, /role:\s*['"]Founder and CEO['"]/);
    assert.match(source, /role:\s*['"]Co-Founder['"]/);
  }
});

test('homepage Qure proof matches the published case study', async () => {
  const sources = await Promise.all([
    read('components/CaseStudies.tsx'),
    read('data/homeData.ts'),
    read('data/ae/homeData.ts'),
  ]);

  for (const source of sources) {
    assert.doesNotMatch(source, /737% increase in organic traffic/);
    assert.match(source, /20 organic leads in one month/);
  }
});

test('llms guidance states the approved founding and leadership facts', async () => {
  const llms = await read('public/llms.txt');

  assert.match(llms, /founded in 2014/);
  assert.match(llms, /founder and CEO Adwait Joshi/);
  assert.match(llms, /co-founder Abhishek Arekar/);
});
