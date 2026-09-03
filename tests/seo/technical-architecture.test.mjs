import assert from 'node:assert/strict';
import { readdir, readFile, stat } from 'node:fs/promises';
import test from 'node:test';
import ts from 'typescript';

const root = new URL('../../', import.meta.url);
const read = (path) => readFile(new URL(path, root), 'utf8');

async function importTypeScript(path, transform = (source) => source) {
  const source = transform(await read(path));
  const output = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.ES2022,
      target: ts.ScriptTarget.ES2022,
    },
  }).outputText;
  return import(`data:text/javascript;base64,${Buffer.from(output).toString('base64')}`);
}

const pageRegistryModule = importTypeScript(
  'seo/registries/pages.ts',
  (source) => source.replace(
    "import { SITE_URL } from '@/lib/siteUrl';",
    "const SITE_URL = 'https://www.theimpulsedigital.com';",
  ),
);

test('publication registry has unique, real and sitemap-safe paths', async () => {
  const { PAGE_REGISTRY, SITEMAP_PAGES } = await pageRegistryModule;
  const paths = PAGE_REGISTRY.map(({ path }) => path);
  assert.equal(new Set(paths).size, paths.length);
  assert.ok(SITEMAP_PAGES.length >= 120);

  for (const page of SITEMAP_PAGES) {
    assert.equal(page.state, 'public', page.path);
    const file = page.path === '/'
      ? new URL('app/page.tsx', root)
      : new URL(`app/${page.path.replace(/^\/|\/$/g, '')}/page.tsx`, root);
    assert.equal((await stat(file)).isFile(), true, page.path);
  }

  const nonPublic = new Set(
    PAGE_REGISTRY.filter(({ state }) => state !== 'public').map(({ path }) => path),
  );
  for (const page of SITEMAP_PAGES) assert.equal(nonPublic.has(page.path), false);
});

test('hreflang is reciprocal and only emitted for registered equivalents', async () => {
  const { PAGE_REGISTRY, getAlternates, getPageRecord } = await pageRegistryModule;

  for (const page of PAGE_REGISTRY.filter(({ state }) => state === 'public')) {
    const alternates = getAlternates(page.path);
    assert.ok(alternates.canonical, page.path);
    assert.equal('x-default' in (alternates.languages || {}), false, page.path);

    if (page.canonicalPath) {
      assert.equal(alternates.canonical, `https://www.theimpulsedigital.com${page.canonicalPath}`);
      assert.equal(alternates.languages, undefined, page.path);
      continue;
    }

    if (page.equivalentPath) {
      const peer = getPageRecord(page.equivalentPath);
      assert.equal(peer?.equivalentPath, page.path, page.path);
      if (peer?.canonicalPath) {
        assert.equal(alternates.languages, undefined, page.path);
        continue;
      }
      assert.ok(alternates.languages['en-IN'], page.path);
      assert.ok(alternates.languages['en-AE'], page.path);
    } else {
      assert.equal(Object.keys(alternates.languages || {}).length, 1, page.path);
    }
  }

  const abuDhabi = getAlternates('/ae/digital-marketing-agency-in-abu-dhabi/');
  assert.deepEqual(Object.keys(abuDhabi.languages), ['en-AE']);
});

test('confirmed UAE content duplicates consolidate without redirects or noindex', async () => {
  const { PAGE_REGISTRY, SITEMAP_PAGES, getAlternates } = await pageRegistryModule;
  const duplicates = PAGE_REGISTRY.filter(({ canonicalPath }) => canonicalPath);
  const sitemapPaths = new Set(SITEMAP_PAGES.map(({ path }) => path));

  assert.equal(duplicates.length, 21);
  for (const page of duplicates) {
    assert.equal(page.market, 'ae', page.path);
    assert.equal(page.state, 'public', page.path);
    assert.equal(sitemapPaths.has(page.path), false, page.path);
    const alternates = getAlternates(page.path);
    assert.equal(
      alternates.canonical,
      `https://www.theimpulsedigital.com${page.canonicalPath}`,
      page.path,
    );
    assert.equal(alternates.languages, undefined, page.path);
  }
});

test('UAE SEO conversion routes stay inside the UAE journey', async () => {
  for (const path of [
    'data/ae/searchEngineOptimisationData.ts',
    'data/ae/searchEngineOptimisationDubaiData.ts',
    'data/ae/b2bSEOData.ts',
  ]) {
    const source = await read(path);
    assert.doesNotMatch(source, /link:\s*["']\/contact-us\//, path);
    assert.match(source, /link:\s*["']\/ae\/contact-us\//, path);
  }
});

test('lead analytics requires a recent same-tab submission and excludes non-production traffic', async () => {
  const analytics = await read('lib/leadAnalytics.ts');
  const layout = await read('app/layout.tsx');
  const contact = await read('components/Contact.tsx');

  assert.match(analytics, /sessionStorage\.setItem\(SUBMISSION_KEY/);
  assert.match(analytics, /sessionStorage\.removeItem\(SUBMISSION_KEY\)/);
  assert.match(analytics, /MAX_SUBMISSION_AGE_MS/);
  assert.match(analytics, /submission\.region !== expectedRegion/);
  assert.match(analytics, /lead_form_success/);
  assert.match(layout, /!pathname\.startsWith\('\/admin\/'\)/);
  assert.match(layout, /hostname === 'www\.theimpulsedigital\.com'/);
  assert.match(contact, /markLeadFormAttempt/);
});

test('market switching uses equivalents and market-safe fallbacks', async () => {
  const { getMarketDestination } = await pageRegistryModule;
  assert.equal(
    getMarketDestination('/contact-us/', 'ae'),
    '/ae/contact-us/',
  );
  assert.equal(
    getMarketDestination('/digital-marketing-agency-in-thane/', 'ae'),
    '/ae/',
  );
  assert.equal(
    getMarketDestination(
      '/ae/brand-infrastructure/search-engine-optimisation/abu-dhabi/',
      'in',
    ),
    '/brand-infrastructure/search-engine-optimisation/',
  );
});

test('market selector click cannot close a menu already opened by hover', async () => {
  const navbar = await read('components/Navbar.tsx');
  assert.match(navbar, /onClick=\{\(\) => setIsRegionDropdownOpen\(true\)\}/);
  assert.doesNotMatch(
    navbar,
    /setIsRegionDropdownOpen\(\(open\) => !open\)/,
  );
  assert.match(navbar, /aria-expanded=\{isRegionDropdownOpen\}/);
  assert.match(navbar, /role="menuitem"/);
});

test('UAE subpages retain UAE navigation identity', async () => {
  const navbar = await read('components/Navbar.tsx');
  assert.match(navbar, /pathname\?\.startsWith\('\/ae\/'\)/);
});

test('sitemap and root metadata are driven by the publication registry', async () => {
  const sitemap = await read('app/sitemap.ts');
  const layout = await read('app/layout.tsx');
  assert.match(sitemap, /SITEMAP_PAGES/);
  assert.doesNotMatch(sitemap, /priority|changeFrequency|new Date/);
  assert.match(layout, /getAlternates\(pathname\)/);
  assert.doesNotMatch(layout, /x-default/);
});

test('noindex and not-found pages cannot inherit hreflang clusters', async () => {
  for (const path of [
    'app/not-found.tsx',
    'app/thank-you/page.tsx',
    'app/ae/thank-you/page.tsx',
  ]) {
    const source = await read(path);
    assert.match(source, /index:\s*false/, path);
    assert.match(source, /alternates:\s*\{\}/, path);
  }
});

test('blog proxy rewrites raw, JSON-escaped and encoded legacy identities', async () => {
  const module = await importTypeScript('lib/blogProxySeo.ts');
  const publicOrigin = 'https://www.theimpulsedigital.com';
  const legacy = 'https://impulsedigital.co.in/ae/blog/example/';
  const escaped = 'https:\\/\\/impulsedigital.co.in\\/ae\\/blog\\/example\\/';
  const encoded = encodeURIComponent(legacy);
  const result = module.rewriteBlogText(
    `<html lang="en-US"><body>${legacy} ${escaped} ${encoded}</body></html>`,
    true,
    publicOrigin,
    'text/html',
  );

  assert.match(result, /<html lang="en-AE">/);
  assert.doesNotMatch(result, /impulsedigital\.co\.in/);
  assert.match(result, /www\.theimpulsedigital\.com/);
  assert.match(result, /www\.theimpulsedigital\.com%2Fae%2Fblog/i);
});

test('one visible component owns FAQ schema on commercial and social location pages', async () => {
  const files = [
    'app/digital-marketing-agency-in-india/page.tsx',
    'app/digital-marketing-agency-in-thane/page.tsx',
    'app/digital-marketing-agency-in-navi-mumbai/page.tsx',
    'app/digital-marketing-agency-in-pune/page.tsx',
    'app/ae/digital-marketing-agency-in-abu-dhabi/page.tsx',
    'app/ae/digital-marketing-agency-in-sharjah/page.tsx',
    'app/ae/digital-marketing-agency-in-ajman/page.tsx',
  ];
  for (const path of files) {
    const source = await read(path);
    assert.doesNotMatch(source, /getFAQSchema|FAQPage|ProfessionalService/, path);
    assert.match(source, /buildServicePageGraph/, path);
  }

  const socialDir = new URL(
    'app/brand-infrastructure/social-media-marketing/',
    root,
  );
  for (const slug of ['andheri', 'malad', 'mumbai', 'navi-mumbai', 'thane', 'vashi']) {
    const source = await readFile(new URL(`${slug}/page.tsx`, socialDir), 'utf8');
    assert.doesNotMatch(source, /getServiceFAQSchema/, slug);
  }
});

test('homepage entity graph uses stable IDs and only existing assets', async () => {
  const structuredData = await read('lib/structuredData.ts');
  const india = await read('app/page.tsx');
  const uae = await read('app/ae/page.tsx');

  assert.match(structuredData, /ENTITY_IDS\.organization/);
  assert.match(structuredData, /ENTITY_IDS\.website/);
  assert.match(structuredData, /ENTITY_IDS\.uaePresence/);
  assert.doesNotMatch(structuredData, /SearchAction|header-logo\.png/);
  assert.match(india, /buildHomeGraph\('in'\)/);
  assert.match(uae, /buildHomeGraph\('ae'\)/);
});

async function sourceFiles(directory) {
  const result = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const url = new URL(
      `${entry.name}${entry.isDirectory() ? '/' : ''}`,
      directory,
    );
    if (entry.isDirectory()) result.push(...await sourceFiles(url));
    else if (/\.(tsx|jsx)$/.test(entry.name)) result.push(url);
  }
  return result;
}

test('rendered images reserve intrinsic dimensions to prevent layout shifts', async () => {
  const files = [
    ...await sourceFiles(new URL('app/', root)),
    ...await sourceFiles(new URL('components/', root)),
  ];
  for (const file of files) {
    const source = await readFile(file, 'utf8');
    for (const match of source.matchAll(/<img\b[^>]*>/g)) {
      const line = source.slice(0, match.index).split('\n').length;
      assert.match(match[0], /\bwidth=/, `${file.pathname}:${line}`);
      assert.match(match[0], /\bheight=/, `${file.pathname}:${line}`);
    }
  }
});

test('chatbot and visible lead form do not share DOM identifiers', async () => {
  const contact = await read('components/Contact.tsx');
  const chatbot = await read('components/Chatbot/Chatbot.tsx');
  assert.match(contact, /id="webform1132219000000597005"/);
  assert.doesNotMatch(chatbot, /id="webform1132219000000597005"/);
  assert.match(chatbot, /id="chatbot-zoho-lead-form"/);
});

test('admin authentication is runtime-only and fails closed', async () => {
  const route = await read('app/api/admin/chats/route.ts');
  const productionEnv = await read('.env.production');

  assert.match(route, /process\.env\.ADMIN_PASSWORD/);
  assert.match(route, /status:\s*503/);
  assert.match(route, /timingSafeEqual/);
  assert.doesNotMatch(route, /searchParams\.get\(['"]password['"]\)/);
  assert.doesNotMatch(productionEnv, /^ADMIN_PASSWORD=.+$/m);
  await assert.rejects(stat(new URL('config/admin.json', root)));
});

test('protected case-study final CTA remains exact', async () => {
  const files = await sourceFiles(new URL('components/pages/', root));
  const protectedPages = [];

  for (const file of files) {
    const source = await readFile(file, 'utf8');
    if (!source.includes('Your Problem Next?')) continue;
    protectedPages.push(file.pathname);
    assert.match(source, />Your Problem Next\?</);
    assert.match(source, />START A CONVERSATION</);
    assert.match(source, /<a\b[^>]*href="\/contact-us"/);
  }

  assert.equal(protectedPages.length, 15);
});
