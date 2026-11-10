import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import test from 'node:test';

const root = new URL('../../', import.meta.url);
const read = (file) => readFile(new URL(file, root), 'utf8');

async function sourceFiles(directory) {
  const entries = await readdir(new URL(directory, root), { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const relative = path.posix.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await sourceFiles(relative));
    else if (/\.(ts|tsx)$/.test(entry.name)) files.push(relative);
  }
  return files;
}

test('Grasim proof uses the approved exact wording and native source', async () => {
  const approved = 'A single LinkedIn post created for Grasim Industries recorded 959,000 impressions and a 31% engagement rate, according to LinkedIn’s native post analytics.';
  const sources = await Promise.all([
    read('data/socialMediaManagementData.ts'),
    read('data/ae/socialMediaManagementData.ts'),
  ]);

  for (const source of sources) {
    assert.ok(source.includes(approved));
    assert.match(source, /Source: LinkedIn native analytics\./);
  }
});

test('34 years is always identified as combined senior-team experience', async () => {
  const files = [
    ...await sourceFiles('app'),
    ...await sourceFiles('components'),
    ...await sourceFiles('data'),
  ];

  for (const file of files) {
    const source = await read(file);
    for (const match of source.matchAll(/34 years[^\n"'<]*/g)) {
      assert.match(match[0], /^34 years of combined senior-team experience/, `${file}: ${match[0]}`);
    }
  }
});

test('ecommerce proof is qualified to selected engagements', async () => {
  const wording = /In selected ecommerce website-redesign engagements, clients have recorded sales growth of 30% or more within six months\./;
  const sources = await Promise.all([
    read('data/websiteDevelopmentData.ts'),
    read('data/ae/websiteDevelopmentData.ts'),
    read('app/ppt/PPTGalleryClient.tsx'),
    read('app/ae/ppt/PPTGalleryClient.tsx'),
  ]);

  for (const source of sources) {
    assert.match(source, wording);
    assert.doesNotMatch(source, /E-commerce clients seeing a 30%\+|Our own e-commerce clients have seen/);
  }
});

test('Qure.ai and ElectroMech proof pages state results and private-source context', async () => {
  const [qure, electromech] = await Promise.all([
    read('components/pages/QureAICaseStudy.tsx'),
    read('components/pages/ElectroMechCaseStudy.tsx'),
  ]);

  assert.match(qure, /organic traffic increased by 737%/);
  assert.match(qure, /Independent platform analytics from Google Analytics 4/);
  assert.match(electromech, /Google Search impressions increased by 3,500%/);
  assert.match(electromech, /Independent platform analytics from Google Search Console/);
  assert.match(qure, /Underlying client analytics are private/);
  assert.match(electromech, /Underlying client analytics are private/);
});

test('public proof never uses self-review language as source attribution', async () => {
  const files = [
    ...await sourceFiles('app'),
    ...await sourceFiles('components'),
    ...await sourceFiles('data'),
    'public/llms.txt',
  ];

  for (const file of files) {
    assert.doesNotMatch(await read(file), /reviewed by Impulse Digital/i, file);
  }
});

test('individual case studies publish Article schema with Impulse as author and publisher', async () => {
  const schema = await read('lib/structuredData.ts');

  assert.match(schema, /'@type': 'Article'/);
  assert.match(schema, /author: ORGANIZATION_REFERENCE/);
  assert.match(schema, /publisher: ORGANIZATION_REFERENCE/);
  assert.match(schema, /pageNode\.mainEntity = \{ '@id': `\$\{url\}#case-study` \}/);
});

test('llms guidance explains private evidence and points to primary proof pages', async () => {
  const llms = await read('public/llms.txt');

  assert.match(llms, /underlying dashboards remain private/i);
  assert.match(llms, /case-studies\/qure-ai\//);
  assert.match(llms, /case-studies\/electromech\//);
  assert.match(llms, /brand-infrastructure\/social-media-marketing\//);
});
