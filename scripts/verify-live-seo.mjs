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
    assert.ok(urls.length >= 146, `found ${urls.length}`);
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
