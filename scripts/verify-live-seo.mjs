#!/usr/bin/env node

import assert from 'node:assert/strict';

const args = process.argv.slice(2);
const valueAfter = (flag) => {
  const index = args.indexOf(flag);
  return index >= 0 ? args[index + 1] : undefined;
};

const baseUrl = new URL(
  valueAfter('--base') ||
    process.env.SEO_BASE_URL ||
    'http://127.0.0.1:3100',
);
const withBlogs = args.includes('--with-blogs');
const canonicalOrigin = 'https://www.theimpulsedigital.com';
const failures = [];
let checks = 0;

function check(label, callback) {
  checks += 1;
  try {
    callback();
    console.log(`PASS ${label}`);
  } catch (error) {
    failures.push(`${label}: ${error.message}`);
    console.error(`FAIL ${label}: ${error.message}`);
  }
}

async function request(pathname, init = {}) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 20_000);
  try {
    return await fetch(new URL(pathname, baseUrl), {
      ...init,
      signal: controller.signal,
      headers: {
        'user-agent': 'Impulse-SEO-Release-Verification/1.0',
        ...(init.headers || {}),
      },
    });
  } finally {
    clearTimeout(timeout);
  }
}

function headValue(html, attribute, value, target = 'content') {
  const tags = html.match(/<(?:meta|link)\b[^>]*>/gi) || [];
  const tag = tags.find((candidate) => {
    const pattern = new RegExp(`\\b${attribute}=["']${value}["']`, 'i');
    return pattern.test(candidate);
  });
  if (!tag) return null;
  const targetMatch = tag.match(new RegExp(`\\b${target}=["']([^"']+)["']`, 'i'));
  return targetMatch?.[1] || null;
}

function canonicalFor(pathname) {
  return `${canonicalOrigin}${pathname === '/' ? '/' : pathname}`;
}

function jsonLdBlocks(html) {
  return [...html.matchAll(
    /<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi,
  )].map((match) => match[1]);
}

function headTags(html) {
  const head = html.match(/<head\b[^>]*>([\s\S]*?)<\/head>/i)?.[1] || '';
  return head.match(/<(?:meta|link)\b[^>]*>/gi) || [];
}

const indexablePages = [
  { path: '/', lang: 'en-IN', alternates: ['en-IN', 'en-AE'] },
  { path: '/ae/', lang: 'en-AE', alternates: ['en-IN', 'en-AE'] },
  { path: '/contact-us/', lang: 'en-IN', alternates: ['en-IN', 'en-AE'] },
  { path: '/ae/contact-us/', lang: 'en-AE', alternates: ['en-IN', 'en-AE'] },
  {
    path: '/digital-marketing-agency-in-thane/',
    lang: 'en-IN',
    alternates: ['en-IN'],
  },
  {
    path: '/ae/digital-marketing-agency-in-abu-dhabi/',
    lang: 'en-AE',
    alternates: ['en-AE'],
  },
  {
    path: '/brand-infrastructure/search-engine-optimisation/',
    lang: 'en-IN',
    alternates: ['en-IN', 'en-AE'],
  },
  {
    path: '/ae/brand-infrastructure/search-engine-optimisation/',
    lang: 'en-AE',
    alternates: ['en-IN', 'en-AE'],
  },
  { path: '/growth-intelligence/', lang: 'en-IN', alternates: ['en-IN', 'en-AE'] },
  { path: '/ae/growth-intelligence/', lang: 'en-AE', alternates: ['en-IN', 'en-AE'] },
  { path: '/services/', lang: 'en-IN', alternates: ['en-IN', 'en-AE'] },
  { path: '/ae/services/', lang: 'en-AE', alternates: ['en-IN', 'en-AE'] },
  { path: '/brand-infrastructure/', lang: 'en-IN', alternates: ['en-IN', 'en-AE'] },
  { path: '/ae/brand-infrastructure/', lang: 'en-AE', alternates: ['en-IN', 'en-AE'] },
  { path: '/ai-marketing-systems/', lang: 'en-IN', alternates: ['en-IN', 'en-AE'] },
  { path: '/ae/ai-marketing-systems/', lang: 'en-AE', alternates: ['en-IN', 'en-AE'] },
  {
    path: '/brand-infrastructure/search-engine-optimisation/b2b-seo/',
    lang: 'en-IN',
    alternates: ['en-IN', 'en-AE'],
  },
  {
    path: '/ae/brand-infrastructure/search-engine-optimisation/b2b-seo/',
    lang: 'en-AE',
    alternates: ['en-IN', 'en-AE'],
  },
];

const canonicalDuplicatePages = [
  ['/ae/about-us/', '/about-us/'],
  ['/ae/careers/', '/careers/'],
  ['/ae/privacy-policy/', '/privacy-policy/'],
  ['/ae/case-studies/', '/case-studies/'],
  ['/ae/case-studies/amazon-india-evp-strategy/', '/case-studies/amazon-india-evp-strategy/'],
  ['/ae/case-studies/qure-ai/', '/case-studies/qure-ai/'],
  ['/ae/case-studies/abg-brut-india/', '/case-studies/abg-brut-india/'],
  ['/ae/case-studies/electromech/', '/case-studies/electromech/'],
  ['/ae/case-studies/fours-for-good/', '/case-studies/fours-for-good/'],
  ['/ae/case-studies/shaking-things-up/', '/case-studies/shaking-things-up/'],
  ['/ae/case-studies/automag-india/', '/case-studies/automag-india/'],
  ['/ae/case-studies/abg-kbc/', '/case-studies/abg-kbc/'],
  ['/ae/case-studies/chings-foodfarmer/', '/case-studies/chings-foodfarmer/'],
  ['/ae/case-studies/uppercase/', '/case-studies/uppercase/'],
  ['/ae/case-studies/tcpl/', '/case-studies/tcpl/'],
  ['/ae/case-studies/amazon-talent-communication-engine/', '/case-studies/amazon-talent-communication-engine/'],
  ['/ae/case-studies/amazon-unplugged/', '/case-studies/amazon-unplugged/'],
  ['/ae/case-studies/automag-bajaj-auto/', '/case-studies/automag-bajaj-auto/'],
  ['/ae/case-studies/dmart/', '/case-studies/dmart/'],
];

for (const page of indexablePages) {
  const response = await request(page.path);
  const html = await response.text();

  check(`${page.path} returns 200`, () => assert.equal(response.status, 200));
  check(`${page.path} uses the expected document language`, () => {
    assert.match(html, new RegExp(`<html[^>]+lang=["']${page.lang}["']`, 'i'));
  });
  check(`${page.path} has one correct canonical`, () => {
    const canonicalTags = html.match(
      /<link\b[^>]*rel=["']canonical["'][^>]*>/gi,
    ) || [];
    assert.equal(canonicalTags.length, 1);
    assert.equal(
      headValue(html, 'rel', 'canonical', 'href'),
      canonicalFor(page.path),
    );
  });
  check(`${page.path} has only approved hreflang entries`, () => {
    const tags = html.match(/<link\b[^>]*hreflang=["'][^"']+["'][^>]*>/gi) || [];
    const languages = tags
      .map((tag) => tag.match(/\bhreflang=["']([^"']+)["']/i)?.[1])
      .filter(Boolean)
      .sort();
    assert.deepEqual(languages, [...page.alternates].sort());
    assert.equal(languages.includes('x-default'), false);
  });
  check(`${page.path} has no index-blocking meta`, () => {
    const robots = headValue(html, 'name', 'robots') || '';
    assert.doesNotMatch(robots, /\bnoindex\b/i);
  });
  check(`${page.path} JSON-LD is syntactically valid`, () => {
    for (const block of jsonLdBlocks(html)) JSON.parse(block);
  });
}

for (const [duplicatePath, canonicalPath] of canonicalDuplicatePages) {
  const response = await request(duplicatePath);
  const html = await response.text();
  check(`${duplicatePath} remains accessible`, () => assert.equal(response.status, 200));
  check(`${duplicatePath} consolidates to its India canonical`, () => {
    assert.equal(headValue(html, 'rel', 'canonical', 'href'), canonicalFor(canonicalPath));
  });
  check(`${duplicatePath} is absent from hreflang clusters`, () => {
    assert.equal(headTags(html).some((tag) => /\bhreflang=/i.test(tag)), false);
  });
  check(`${duplicatePath} is not noindex`, () => {
    assert.doesNotMatch(headValue(html, 'name', 'robots') || '', /\bnoindex\b/i);
  });
}

for (const pathname of ['/thank-you/', '/ae/thank-you/']) {
  const response = await request(pathname);
  const html = await response.text();
  check(`${pathname} returns 200`, () => assert.equal(response.status, 200));
  check(`${pathname} is noindex`, () => {
    assert.match(headValue(html, 'name', 'robots') || '', /\bnoindex\b/i);
  });
  check(`${pathname} has no canonical or hreflang cluster`, () => {
    assert.equal(headValue(html, 'rel', 'canonical', 'href'), null);
    assert.equal(headTags(html).some((tag) => /\bhreflang=/i.test(tag)), false);
  });
}

{
  const pathname = '/codex-seo-verification-missing-page/';
  const response = await request(pathname);
  const html = await response.text();
  check('a genuine missing page returns 404', () => assert.equal(response.status, 404));
  check('the 404 page is noindex', () => {
    assert.match(headValue(html, 'name', 'robots') || '', /\bnoindex\b/i);
  });
  check('the 404 page has no canonical', () => {
    assert.equal(headValue(html, 'rel', 'canonical', 'href'), null);
  });
}

{
  const chain = [];
  let currentPath = '/services/social-media-marketing';
  let response;
  while (chain.length < 3) {
    response = await request(currentPath, { redirect: 'manual' });
    if (![301, 308].includes(response.status)) break;
    const location = new URL(response.headers.get('location'), baseUrl);
    chain.push({ status: response.status, pathname: location.pathname });
    currentPath = location.pathname;
  }
  check('legacy redirect uses only the approved normalization and content hops', () => {
    assert.ok(chain.length >= 1 && chain.length <= 2, JSON.stringify(chain));
    assert.ok(chain.every(({ status }) => [301, 308].includes(status)));
    assert.equal(
      chain.at(-1).pathname,
      '/brand-infrastructure/social-media-marketing/',
    );
    assert.equal(response.status, 200);
  });
}

{
  const response = await request('/robots.txt');
  const body = await response.text();
  check('robots.txt returns plain text 200', () => {
    assert.equal(response.status, 200);
    assert.match(response.headers.get('content-type') || '', /text\/plain/i);
  });
  for (const pathname of ['/admin/', '/api/', '/test-chatbot/']) {
    check(`robots.txt protects ${pathname}`, () => {
      assert.match(body, new RegExp(`Disallow:\\s*${pathname.replaceAll('/', '\\/')}`, 'i'));
    });
  }
  for (const sitemap of [
    '/sitemap.xml',
    '/blog/sitemap_index.xml',
    '/ae/blog/sitemap_index.xml',
  ]) {
    check(`robots.txt advertises ${sitemap}`, () => {
      assert.ok(body.includes(`${canonicalOrigin}${sitemap}`));
    });
  }
}

{
  const response = await request('/sitemap.xml');
  const xml = await response.text();
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
  check('main sitemap returns XML 200', () => {
    assert.equal(response.status, 200);
    assert.match(response.headers.get('content-type') || '', /xml/i);
  });
  check('main sitemap has a substantial unique URL set', () => {
    assert.ok(urls.length >= 126, `found ${urls.length}`);
    assert.equal(new Set(urls).size, urls.length);
  });
  check('main sitemap contains only canonical HTTPS URLs', () => {
    for (const url of urls) {
      assert.ok(
        url === canonicalOrigin || url.startsWith(`${canonicalOrigin}/`),
        url,
      );
      assert.ok(url === canonicalOrigin || url.endsWith('/'), url);
      assert.doesNotMatch(url, /\/(?:admin|api|thank-you|test-chatbot)(?:\/|$)/);
    }
    for (const [duplicatePath] of canonicalDuplicatePages) {
      assert.equal(urls.includes(canonicalFor(duplicatePath)), false, duplicatePath);
    }
  });
}

{
  const homepage = await (await request('/')).text();
  const admin = await (await request('/admin/chats/')).text();
  const analyticsIds = /G-(?:EFFQ2YYFN8|69R7Z1PMXQ)|GTM-(?:M4TW43X3|5Z8KMKBC)|xsz8wxw6mn/;
  if (['127.0.0.1', 'localhost'].includes(baseUrl.hostname)) {
    check('local builds do not initialise production analytics', () => {
      assert.doesNotMatch(homepage, analyticsIds);
    });
  } else {
    check('production homepage initialises the regional analytics stack', () => {
      assert.match(homepage, analyticsIds);
    });
  }
  check('admin routes do not initialise production analytics', () => {
    assert.doesNotMatch(admin, analyticsIds);
  });
}

if (withBlogs) {
  const expectedBlogOrigin = ['127.0.0.1', 'localhost'].includes(baseUrl.hostname)
    ? baseUrl.origin
    : canonicalOrigin;
  for (const blog of [
    { path: '/blog/', lang: 'en-IN' },
    { path: '/ae/blog/', lang: 'en-AE' },
  ]) {
    const response = await request(blog.path);
    const html = await response.text();
    check(`${blog.path} proxy returns 200`, () => assert.equal(response.status, 200));
    check(`${blog.path} proxy owns its public identity`, () => {
      assert.match(html, new RegExp(`<html[^>]+lang=["']${blog.lang}["']`, 'i'));
      assert.equal(
        headValue(html, 'rel', 'canonical', 'href'),
        `${expectedBlogOrigin}${blog.path}`,
      );
      for (const block of jsonLdBlocks(html)) {
        assert.doesNotMatch(
          block,
          /"(?:@id|url)":"https:\\\/\\\/impulsedigital\.co\.in/i,
        );
      }
    });
  }
}

if (failures.length) {
  console.error(`\n${failures.length} of ${checks} release checks failed:`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exitCode = 1;
} else {
  console.log(`\nAll ${checks} SEO release checks passed for ${baseUrl.origin}.`);
}
