# Impulse Digital technical SEO implementation log

## 1. Document control

| Field | Value |
|---|---|
| Programme | Impulse Digital technical SEO remediation |
| Site | `https://www.theimpulsedigital.com/` |
| Markets | India and UAE |
| Execution date | 23 July 2026 |
| Executor | Codex |
| Baseline production SHA | `a42bce9736f82a506034ba7b9adce64358425dcc` |
| Working branch | `codex/complete-technical-seo-20260723` |
| Working copy | `/Users/adwaitjoshi/Desktop/Impulse SEO Audit_Codex/impulsedigital_v3-seo-complete` |
| Production deployment | Not performed; reserved for the site owner |
| Hostinger password rotation | Not performed; owner will rotate after deployment |
| Content work | Excluded |

This log records the technical implementation completed after reviewing:

- `FINAL-SEO-IMPLEMENTATION-PLAN.md`;
- `SEO-IMPLEMENTATION-EXECUTION-LOG.md`;
- the live website in Chrome;
- authenticated Google Search Console reports;
- authenticated Hostinger configuration screens;
- both live WordPress blog surfaces; and
- the actual Next.js repository at the production baseline SHA.

No third-party historic crawl export was treated as proof of current implementation. Current-site findings came from direct browser inspection, defined HTTP checks, authenticated first-party systems, repository inspection, and the local production build.

## 2. Operating boundaries followed

1. No content, positioning, brand voice, headings, service claims, or keyword copy was rewritten.
2. No visual redesign was performed.
3. Image edits were limited to technical intrinsic dimensions in JSX; image assets were not regenerated or visually changed.
4. The protected case-study closing CTA was preserved exactly:
   - `Your Problem Next?`
   - `START A CONVERSATION`
   - `/contact-us`
5. No production deployment, Git push, Search Console submission, CDN purge, WordPress save, plugin change, or Hostinger environment-value change was made.
6. Authenticated external systems were inspected read-only.
7. No password, API key, cookie, nonce, personal data, or unmasked environment value was written into this log.
8. Ambiguous redirects and unverified business/entity facts were not guessed.

## 3. Starting state and workspace isolation

The supplied repository at `/Volumes/Data/impulsedigital_v3` was not writable. A writable exact clone was created at:

`/Users/adwaitjoshi/Desktop/Impulse SEO Audit_Codex/impulsedigital_v3-seo-complete`

The clone was established from production SHA:

`a42bce9736f82a506034ba7b9adce64358425dcc`

The implementation branch is:

`codex/complete-technical-seo-20260723`

The original mounted repository was not modified.

Current implementation scope before this log was added:

- 74 tracked files modified;
- 1 tracked file deleted;
- 10 new implementation/handoff files;
- 507 tracked-line insertions;
- 968 tracked-line deletions; and
- no commit or push performed by Codex.

The net deletion count is primarily caused by replacing repeated sitemap, metadata, and structured-data declarations with centralized registries and graph builders.

## 4. Directly observed production baseline

### 4.1 Google Search Console

Authenticated property:

`https://www.theimpulsedigital.com/`

Observed overview:

- 2,063 total web-search clicks.
- 467 indexed URLs.
- 920 URLs reported as not indexed.

Observed indexing reasons:

| Reason | URLs |
|---|---:|
| Not found (404) | 304 |
| Soft 404 | 57 |
| Duplicate without user-selected canonical | 57 |
| Page with redirect | 34 |
| Blocked due to access forbidden (403) | 27 |
| Excluded by noindex | 15 |
| Other 4xx | 1 |
| Crawled — currently not indexed | 395 |
| Duplicate — Google chose different canonical | 17 |
| Discovered — currently not indexed | 13 |

Submitted sitemap state:

| Sitemap | Status | Discovered |
|---|---|---:|
| `/sitemap.xml` | Success | 144 |
| `/blog/sitemap_index.xml` | Success | 101 |
| `/ae/blog/sitemap_index.xml` | Success | 15 |

Other observed enhancements and security state:

- Breadcrumbs: 84 valid, 0 invalid.
- HTTPS: 131 HTTPS URLs, 0 non-HTTPS URLs.

Observed Core Web Vitals:

| Device | Good | Needs improvement | Poor |
|---|---:|---:|---:|
| Mobile | 130 | 0 | 0 |
| Desktop | 85 | 0 | 45 |

All 45 poor desktop URLs were grouped under a homepage cohort with CLS above 0.25. The group value displayed by Search Console was 0.68.

### 4.2 Hostinger

Authenticated Hostinger inspection confirmed:

- the production website was running;
- the baseline deployment SHA was current;
- the application used Next.js;
- the production environment-variable panel was accessible;
- `ADMIN_PASSWORD` existed as a masked runtime variable;
- `CHAT_STORAGE_DIR` existed as a masked runtime variable;
- `NEXT_PUBLIC_SITE_URL`, `OPENAI_API_KEY`, `CALLMEBOT_APIKEY`, `RESEND_API_KEY`, `NODE_ENV`, and `WORDPRESS_PERSISTENT_PATH` were also present as masked variables; and
- no environment value was revealed, copied, or changed.

### 4.3 Analytics observation

The live homepage loaded:

- GTM container `GTM-M4TW43X3`; and
- direct GA measurement ID `G-EFFQ2YYFN8`.

The browser extension blocked direct inspection of the GTM JavaScript request, so it was not possible to prove whether the same GA property was also configured inside GTM. Existing measurement code was preserved to avoid an unverified analytics outage. Single-source analytics ownership remains a post-deployment governance item.

### 4.4 WordPress blogs

The two canonical public blog surfaces inspected were:

- `https://www.theimpulsedigital.com/blog/`
- `https://www.theimpulsedigital.com/ae/blog/`

Both are served through the application proxy while WordPress/Yoast remains the underlying content and blog-SEO producer.

## 5. Architecture decisions encoded

### 5.1 Canonical origin

Canonical public origin:

`https://www.theimpulsedigital.com`

### 5.2 Public URL format

- Public HTML routes retain the existing trailing-slash architecture.
- Canonicals are absolute and server rendered.
- No blind global lowercase transform was introduced.
- No unapproved query-stripping policy was introduced.

### 5.3 Market model

- India and UAE have stable crawlable URLs.
- Market selection remains user initiated.
- No automatic geo-IP redirect was added.
- Hreflang is created only for explicitly equivalent pages.
- City pages are not paired with unrelated cities in the other market.
- `x-default` is omitted because there is no approved global neutral selector page.

### 5.4 Publication model

Route existence no longer determines sitemap eligibility. Each managed route has:

- market;
- publication state;
- page class;
- last-modified date; and
- optional approved equivalent path.

The implemented states include public/indexable and noindex utility surfaces. Historical decision-gated routes are maintained separately from automatic redirects.

### 5.5 Entity model

Stable structured-data identifiers were created for:

- the root Organization;
- the root WebSite;
- the India professional-service presence; and
- the UAE professional-service presence.

Unverified UAE legal structure, ratings, reviews, hours, telephone numbers, staffed-office status, and local-business claims were not invented.

## 6. Detailed implementation chronology

### TSEO-001 — Repository and plan reconciliation

- Reviewed the approved implementation plan and the previous execution log.
- Compared planned phases with the actual repository and current live state.
- Identified that the earlier release addressed a high-confidence subset but did not implement the centralized publication, market, entity, sitemap, schema, blog-proxy, performance, observability, and release-verification architecture.

### TSEO-002 — Writable branch and dependency preparation

- Created the isolated writable working copy from the exact production SHA.
- Created `codex/complete-technical-seo-20260723`.
- Replaced a non-portable external `node_modules` symlink with a real local dependency directory so production builds could be verified without changing the original repository.

### TSEO-003 — Current first-party evidence

- Inspected the live homepage and regional architecture in Chrome.
- Inspected GSC indexing, sitemap, HTTPS, breadcrumbs, and Core Web Vitals reports.
- Inspected Hostinger deployment and environment-variable key presence.
- Inspected both canonical public blog surfaces.
- Preserved all authenticated systems without making external writes.

### TSEO-004 — Publication and market registry

Created:

`seo/registries/pages.ts`

The registry:

- covers the managed public application route set;
- includes India and UAE legal routes;
- records noindex utility pages;
- normalizes route lookup;
- generates sitemap eligibility;
- generates absolute URLs;
- generates explicit alternates;
- resolves equivalent-market destinations; and
- provides safe commercial fallbacks where a direct counterpart does not exist.

No city-to-city pairing is inferred from string similarity.

### TSEO-005 — Stable entity registry

Created:

`seo/registries/entities.ts`

This registry prevents route components from inventing or duplicating Organization, WebSite, and market-presence identifiers.

### TSEO-006 — Historical URL lifecycle registry

Created:

`seo/registries/url-lifecycle.ts`

The following historical URLs remain explicitly decision required:

- `/online-paid-advertising/`
- `/services/content-writing-services/`
- `/content-marketing-services/`
- `/slideshare-ppt/`
- `/resources/slideshare-ppt/`
- `/case-studies-vendiman/`

The supplied historical evidence associated with these six paths totals:

- 101,627 impressions; and
- 107 clicks.

An additional malformed historical PDF record represented:

- 2,859 impressions; and
- 130 clicks.

Its exact raw URL is unknown. No rule was created.

### TSEO-007 — Metadata and hreflang ownership

Modified:

`app/layout.tsx`

Implemented:

- registry-driven canonical generation;
- registry-driven hreflang generation;
- no inferred cross-market city pairing;
- no `x-default`;
- canonical Open Graph URL alignment; and
- no canonical/hreflang inheritance for noindex utility pages.

Modified:

- `app/not-found.tsx`
- `app/thank-you/page.tsx`
- `app/ae/thank-you/page.tsx`

Implemented:

- explicit noindex/nofollow;
- no canonical;
- no hreflang cluster; and
- no-store behavior where appropriate.

### TSEO-008 — Main sitemap

Replaced the route list in:

`app/sitemap.ts`

The sitemap now:

- reads only `SITEMAP_PAGES`;
- includes public/indexable registered pages;
- excludes redirects, noindex pages, admin, API, tests, and 404s;
- uses stable registry last-modified values;
- does not create a fresh current timestamp on each request;
- does not publish priority;
- does not publish change frequency; and
- avoids manually duplicated route arrays.

### TSEO-009 — robots.txt

Modified:

`app/robots.ts`

Implemented:

- discovery of the main application sitemap;
- discovery of the India Yoast sitemap index;
- discovery of the UAE Yoast sitemap index;
- crawler exclusions for admin/API/test-chatbot surfaces; and
- continued crawlability of pages that need to expose noindex.

### TSEO-010 — Market-aware links

Modified:

- `components/RegionLink.tsx`
- `components/Navbar.tsx`
- `components/Service/ServiceHero.tsx`

Implemented:

- explicit market-destination resolution;
- reciprocal equivalent routing;
- commercial fallback routing for unmatched city pages;
- UAE-aware contact destinations;
- selector links rendered as real anchors;
- `hreflang="en-IN"` and `hreflang="en-AE"` on selector items;
- `aria-haspopup`, `aria-expanded`, `aria-controls`, menu, and menuitem semantics;
- Escape-key close behavior;
- intrinsic flag dimensions; and
- user-initiated navigation.

During final Chrome verification, a real interaction defect was found:

1. pointer entry opened the menu through `onMouseEnter`;
2. the subsequent click toggled the state;
3. the menu immediately closed.

The button click now sets the menu open rather than inverting a state that hover may already have changed. The menu still closes through selection, mouse leave, or Escape.

### TSEO-011 — JSON-LD safety and graph builders

Created:

- `components/JsonLd.tsx`
- `lib/structuredData.ts`

Implemented:

- safe serialization of `<` as `\u003c`;
- `buildHomeGraph`;
- `buildServicePageGraph`;
- stable shared entity references;
- factual market-level ProfessionalService nodes;
- page-level WebPage nodes; and
- one controlled graph per page owner.

### TSEO-012 — Homepage schema consolidation

Modified:

- `app/page.tsx`
- `app/ae/page.tsx`

Removed:

- repeated inline Organization/WebSite/schema declarations;
- inconsistent UAE root identifiers;
- invalid SearchAction for a nonexistent site-search function; and
- reference to nonexistent `/header-logo.png`.

The schema logo now uses existing:

`/ImpulseDigital_Logo.svg`

### TSEO-013 — Commercial location schema consolidation

Modified India routes:

- `app/digital-marketing-agency-in-india/page.tsx`
- `app/digital-marketing-agency-in-thane/page.tsx`
- `app/digital-marketing-agency-in-navi-mumbai/page.tsx`
- `app/digital-marketing-agency-in-pune/page.tsx`

Modified UAE routes:

- `app/ae/digital-marketing-agency-in-uae/page.tsx`
- `app/ae/digital-marketing-agency-in-abu-dhabi/page.tsx`
- `app/ae/digital-marketing-agency-in-sharjah/page.tsx`
- `app/ae/digital-marketing-agency-in-ajman/page.tsx`

Implemented:

- centralized service-page graph ownership;
- removal of duplicate page-specific Organization/ProfessionalService graphs;
- removal of unsupported LocalBusiness claims; and
- one visible FAQ owner.

### TSEO-014 — Social-location FAQ deduplication

Modified:

- `app/brand-infrastructure/social-media-marketing/andheri/page.tsx`
- `app/brand-infrastructure/social-media-marketing/malad/page.tsx`
- `app/brand-infrastructure/social-media-marketing/mumbai/page.tsx`
- `app/brand-infrastructure/social-media-marketing/navi-mumbai/page.tsx`
- `app/brand-infrastructure/social-media-marketing/thane/page.tsx`
- `app/brand-infrastructure/social-media-marketing/vashi/page.tsx`

Removed route-level duplicate FAQ emitters. The visible shared service template remains the single FAQ owner.

Modified shared emitters:

- `components/FAQ.tsx`
- `components/Service/SEOLocationTemplate.tsx`
- `components/Service/ServiceTemplate.tsx`

All now use the safe JSON-LD component.

### TSEO-015 — WordPress proxy identity repair

Created:

`lib/blogProxySeo.ts`

Modified:

`proxy.ts`

Implemented:

- raw legacy-origin rewriting;
- JSON-escaped legacy-origin rewriting;
- URL-encoded legacy-origin rewriting;
- `en-IN` for India blog HTML;
- `en-AE` for UAE blog HTML;
- method preservation, including HEAD;
- market-specific Accept-Language forwarding;
- redirect-location rewriting;
- response-body rewriting; and
- correction of UAE oEmbed/schema IDs exposed through the proxy.

### TSEO-016 — WordPress sitemap stability

Modified:

- `app/blog/sitemap-index/route.ts`
- `app/ae/blog/sitemap-index/route.ts`
- `lib/wordpress.ts`
- `lib/wordpress-ae.ts`

Implemented:

- WordPress `modified` date retrieval;
- post-specific last-modified output;
- a stable hub timestamp based on the newest post;
- encoded post slugs;
- no runtime `new Date()` freshness noise;
- no priority; and
- no change-frequency output.

The UAE pretty REST endpoint returned HTTP 500 during local builds, but the existing `rest_route` fallback succeeded. Static generation completed.

### TSEO-017 — Image dimension and CLS remediation

Modified:

`scripts/add_image_dimensions_impl.js`

The helper was corrected to:

- understand template/literal image sources;
- use the installed image-size API correctly;
- read image buffers correctly; and
- preserve valid self-closing JSX.

Intrinsic dimensions were added to rendered `<img>` elements across:

- blog cards;
- footer branding;
- chatbot avatar/header;
- region flags;
- founders/about assets;
- case-study sliders;
- careers assets;
- ranking proof assets; and
- case-study component media.

Modified case-study/page components:

- `components/pages/ABGBrutIndiaCaseStudy.tsx`
- `components/pages/ABGKBCCaseStudy.tsx`
- `components/pages/AboutUs.tsx`
- `components/pages/AmazonEVPCaseStudy.tsx`
- `components/pages/AmazonTalentCommunicationCaseStudy.tsx`
- `components/pages/AmazonUnpluggedCaseStudy.tsx`
- `components/pages/AutomagBajajAutoCaseStudy.tsx`
- `components/pages/AutomagIndiaCaseStudy.tsx`
- `components/pages/Careers.tsx`
- `components/pages/CaseStudies.tsx`
- `components/pages/ChingsFoodfarmerCaseStudy.tsx`
- `components/pages/ChingsKurkureCaseStudy.tsx`
- `components/pages/ContactUs.tsx`
- `components/pages/DMartCaseStudy.tsx`
- `components/pages/ElectroMechCaseStudy.tsx`
- `components/pages/FoursForGoodCaseStudy.tsx`
- `components/pages/HULCaseStudy.tsx`
- `components/pages/LGHingCaseStudy.tsx`
- `components/pages/MastercardCaseStudy.tsx`
- `components/pages/QureAICaseStudy.tsx`
- `components/pages/SaltCaseStudy.tsx`
- `components/pages/TataSoulfullCaseStudy.tsx`
- `components/pages/TcplCaseStudy.tsx`
- `components/pages/TermsAndConditions.tsx`
- `components/pages/UppercaseCaseStudy.tsx`

No image file was visually altered.

### TSEO-018 — Font stability

Modified root font loading in:

`app/layout.tsx`

Implemented:

- Google Inter `display: optional`; and
- preload for the required Satoshi Black font alongside the existing local font assets.

This work targets the live desktop CLS cohort while preserving typography and layout intent.

### TSEO-019 — Real-user Core Web Vitals

Created:

`components/WebVitals.tsx`

Integrated in:

`app/layout.tsx`

The component sends web-vital events to `dataLayer`, including:

- CLS;
- LCP;
- INP; and
- other metrics provided by Next.js.

This creates post-deployment field evidence without installing a second analytics library.

### TSEO-020 — Form DOM integrity

Modified:

- `components/Chatbot/Chatbot.tsx`
- `components/Contact.tsx`
- `components/CareersForm.tsx`
- `components/DownloadCaseStudyForm.tsx`
- `components/Chatbot/ChatHeader.tsx`
- `components/ClientProviders.tsx`

Implemented:

- chatbot-specific form identifiers;
- removal of duplicate IDs shared with the visible contact form;
- continued market-correct return routes; and
- nullable pathname safety required by the production TypeScript build.

### TSEO-021 — Security and caching headers

Modified:

`next.config.ts`

Implemented:

- `X-Content-Type-Options: nosniff`;
- `X-Frame-Options: SAMEORIGIN`;
- `X-XSS-Protection: 0`;
- `Referrer-Policy: strict-origin-when-cross-origin`;
- HSTS with one-year max age;
- camera, microphone, and geolocation restrictions;
- report-only CSP inventory covering observed first/third-party dependencies;
- noindex/no-store headers for admin and API routes;
- noindex headers for test routes;
- sitemap and robots cache controls;
- immutable font caching; and
- CSS caching.

CSP remains report only so production telemetry can be evaluated before enforcement.

### TSEO-022 — Admin credential remediation

Deleted:

`config/admin.json`

Modified:

- `.env.production`
- `app/api/admin/chats/route.ts`

Implemented:

- removal of the committed plaintext credential;
- removal of the source JSON fallback;
- runtime-only `ADMIN_PASSWORD`;
- fail-closed HTTP 503 if the runtime variable is missing;
- timing-safe credential comparison;
- removal of password query-string acceptance; and
- continued Authorization/custom-header authentication.

The Hostinger runtime variable already exists. Its value was not changed. Per owner instruction, it will be rotated after deployment.

Important: removing the value from the current source tree does not erase it from older Git history. Rotation remains required.

### TSEO-023 — Runtime chat-storage bundling repair

Modified:

`lib/chatStorage.ts`

Implemented:

- static `/tmp` local/preview fallback;
- preservation of the Hostinger persistent runtime path;
- exact `turbopackIgnore` annotations on runtime-owned filesystem paths and operations; and
- elimination of the previous whole-repository NFT trace warning.

The final production build completed without the warning.

### TSEO-024 — CI gates

Modified:

- `package.json`
- `.github/workflows/build-and-push.yml`

Added scripts:

- `npm run typecheck`
- `npm run test:seo`
- `npm run seo:verify:local`
- `npm run seo:verify:live`

The deployment workflow now runs:

1. dependency installation;
2. SEO regression tests;
3. TypeScript checks;
4. production build; and
5. existing Hostinger package preparation.

### TSEO-025 — Technical SEO regression suite

Created:

`tests/seo/technical-architecture.test.mjs`

Updated:

`tests/seo/confirmed-defects.test.mjs`

The final 22-test suite covers:

1. absence of unverified UAE LocalBusiness claims;
2. no duplicate FAQPage on UAE locations;
3. no inferred cross-market city equivalence;
4. no fabricated city-to-city regional link;
5. stable UAE/root Organization reference;
6. blog request-method preservation;
7. complete high-confidence redirect registry;
8. unique canonical redirect sources/destinations;
9. absence of decision-gated automatic redirects;
10. unique real sitemap-safe publication paths;
11. reciprocal explicit hreflang;
12. market-safe equivalent/fallback routing;
13. selector hover/click race prevention;
14. registry-owned sitemap and metadata;
15. noindex/not-found alternate isolation;
16. raw, escaped, and encoded blog identity rewriting;
17. single FAQ owner;
18. stable homepage entity IDs and existing assets;
19. intrinsic dimensions on all rendered images;
20. unique form IDs;
21. runtime-only fail-closed admin authentication; and
22. exact protected case-study final CTA.

### TSEO-026 — Release verifier

Created:

`scripts/verify-live-seo.mjs`

The verifier checks a defined representative matrix without crawling the full site. It validates:

- HTTP status;
- document language;
- one correct canonical;
- approved hreflang only;
- absence of unintended noindex;
- JSON-LD parseability;
- noindex utility behavior;
- true 404 behavior;
- approved normalization/content redirect path;
- robots content and sitemap declarations;
- sitemap uniqueness and eligibility;
- India blog proxy identity; and
- UAE blog proxy identity.

### TSEO-027 — Local production verification

A fresh production build was started on local port 3100.

Result:

`All 72 SEO release checks passed`

The local server was stopped after verification.

### TSEO-028 — Real Chrome market-journey verification

The fresh local production build was opened in the connected Chrome browser.

Verified:

- page title: India homepage title;
- selector button was present;
- selector opened after click;
- button exposed expanded state;
- menu exposed two accessible menuitems;
- India item:
  - `href="/"`;
  - `hreflang="en-IN"`;
- UAE item:
  - `href="/ae/"`;
  - `hreflang="en-AE"`;
- selecting UAE navigated to `/ae/`;
- UAE homepage title loaded;
- menu collapsed after navigation; and
- UAE Contact Us link resolved to `/ae/contact-us/`.

The agent-created verification tab was closed. User-owned authenticated tabs were released unchanged.

### TSEO-029 — Deployment handoff

Created:

`SEO-TECHNICAL-DEPLOYMENT-HANDOFF.md`

It contains:

- release identity;
- implemented categories;
- final validation;
- deployment sequence;
- rollback instructions;
- unresolved decisions; and
- 0-hour through 28-day monitoring.

### TSEO-030 — Final staged whitespace correction

The final staged `git diff --check` surfaced extra blank lines at end of file in
three newly added TypeScript sources that were not visible to the earlier
unstaged diff check.

The EOF whitespace was removed from the three files. The affected SEO test,
TypeScript, build, local verifier, and staged diff-integrity gates were rerun
before release.

## 7. Final validation record

### 7.1 SEO tests

Command:

```bash
npm run test:seo
```

Result:

- tests: 22;
- passed: 22;
- failed: 0;
- skipped: 0.

### 7.2 TypeScript

Command:

```bash
npm run typecheck
```

Result:

Passed with no TypeScript errors.

### 7.3 Production build

Command:

```bash
npm run build
```

Result:

- Next.js 16.2.11;
- compilation successful;
- TypeScript build phase successful;
- full 274-page route generation completed;
- no Turbopack/NFT warning;
- postbuild completed; and
- no build failure.

The local postbuild reports that `/Users/adwaitjoshi/wordpress_blogs` does not exist. This is expected outside Hostinger. Hostinger already has the persistent WordPress runtime environment configuration; no production path was changed.

### 7.4 Defined release matrix

Command:

```bash
npm run seo:verify:local
```

Result:

- checks: 72;
- passed: 72;
- failed: 0.

### 7.5 Diff integrity

Command:

```bash
git diff --check
```

Result:

Passed.

### 7.6 Secret handling

Current tracked production defaults contain no `ADMIN_PASSWORD` value.

The application reads only:

`process.env.ADMIN_PASSWORD`

The prior value remains in older repository history and must be rotated after deployment as instructed by the owner.

## 8. File-level change manifest

### 8.1 New files

| File | Purpose |
|---|---|
| `SEO-TECHNICAL-DEPLOYMENT-HANDOFF.md` | Deployment, rollback, and monitoring handoff |
| `SEO-TECHNICAL-IMPLEMENTATION-LOG-2026-07-23.md` | This complete execution record |
| `components/JsonLd.tsx` | Safe JSON-LD output |
| `components/WebVitals.tsx` | RUM/dataLayer Web Vitals |
| `lib/blogProxySeo.ts` | Blog origin/lang rewriting |
| `lib/structuredData.ts` | Consolidated graph builders |
| `scripts/verify-live-seo.mjs` | Local/live release verifier |
| `seo/registries/entities.ts` | Stable entity IDs |
| `seo/registries/pages.ts` | Publication/market/equivalence registry |
| `seo/registries/url-lifecycle.ts` | Decision-gated historical URL record |
| `tests/seo/technical-architecture.test.mjs` | Technical SEO regression suite |

### 8.2 Deleted file

| File | Reason |
|---|---|
| `config/admin.json` | Contained a source-level admin credential fallback |

### 8.3 Modified application/configuration files

| Area | Files |
|---|---|
| Root SEO | `app/layout.tsx`, `app/page.tsx`, `app/ae/page.tsx`, `app/not-found.tsx` |
| Robots/sitemap | `app/robots.ts`, `app/sitemap.ts` |
| Utility indexability | `app/thank-you/page.tsx`, `app/ae/thank-you/page.tsx` |
| Blog sitemaps | `app/blog/sitemap-index/route.ts`, `app/ae/blog/sitemap-index/route.ts` |
| Blog data/proxy | `lib/wordpress.ts`, `lib/wordpress-ae.ts`, `proxy.ts` |
| Commercial pages | Four India and four UAE digital-marketing location pages |
| Social locations | Andheri, Malad, Mumbai, Navi Mumbai, Thane, and Vashi route pages |
| Shared schema | `components/FAQ.tsx`, `components/Service/SEOLocationTemplate.tsx`, `components/Service/ServiceTemplate.tsx` |
| Market UX | `components/Navbar.tsx`, `components/RegionLink.tsx`, `components/Service/ServiceHero.tsx` |
| Forms/providers | `components/Contact.tsx`, `components/CareersForm.tsx`, `components/DownloadCaseStudyForm.tsx`, `components/Chatbot/Chatbot.tsx`, `components/Chatbot/ChatHeader.tsx`, `components/ClientProviders.tsx` |
| Media stability | `components/Blog.tsx`, `components/Footer.tsx`, case-study/page components listed in TSEO-017 |
| Runtime/security | `.env.production`, `app/api/admin/chats/route.ts`, `lib/chatStorage.ts`, `next.config.ts` |
| CI/tooling | `package.json`, `.github/workflows/build-and-push.yml`, `scripts/add_image_dimensions_impl.js` |
| Existing tests | `tests/seo/confirmed-defects.test.mjs` |

## 9. External actions explicitly not performed

- No Git commit.
- No Git push.
- No merge to `main`.
- No Hostinger deployment.
- No Hostinger password rotation.
- No Hostinger environment-variable change.
- No CDN purge.
- No WordPress content or plugin save.
- No Wordfence or WP Ghost change.
- No Search Console sitemap resubmission.
- No URL Inspection indexing request.
- No analytics/container change.
- No DNS or SSL change.

## 10. Deliberate non-implementation decisions

### 10.1 Content

Content and keyword work remains a separate priority. No content change was made merely to satisfy a technical implementation.

### 10.2 Ambiguous historical URLs

The six historical URLs and malformed PDF record require factual destination decisions. They were not redirected to superficially similar pages.

### 10.3 x-default

No neutral/global page exists with an approved purpose. `x-default` was omitted.

### 10.4 UAE business facts

No legal entity, local office, staffed address, public telephone, opening hours, rating, review, or Google Business Profile URL was assumed.

### 10.5 Analytics consolidation

Existing GTM and direct GA were preserved because duplicate ownership could not be conclusively verified. Removing either without proof could interrupt measurement.

### 10.6 CSP enforcement

CSP was introduced in report-only mode. Enforcement should occur only after production violation review confirms all required sources.

### 10.7 IndexNow

IndexNow was not added.

## 11. Deployment instructions

1. Review this log and `SEO-TECHNICAL-DEPLOYMENT-HANDOFF.md`.
2. Review the branch diff.
3. Commit the intended working tree.
4. Merge/push through the existing production workflow.
5. Confirm Hostinger completes the intended commit.
6. Check runtime logs.
7. Run:

```bash
npm run seo:verify:live
```

8. Clear CDN cache only if live verification demonstrates stale output.
9. Rerun the live verifier if cache was cleared.
10. Rotate `ADMIN_PASSWORD` in Hostinger after the deployment, as directed by the owner.
11. Confirm admin access using the new password.
12. Never place the replacement password in Git.

## 12. Rollback instructions

Known-good application reference:

`a42bce9736f82a506034ba7b9adce64358425dcc`

Rollback if any of the following occurs:

- unexpected crawler blocking;
- sitemap failure;
- redirect loop or material redirect chain;
- canonical/hreflang disagreement;
- public page unintentionally noindexed;
- schema serialization failure;
- broken India/UAE navigation;
- broken forms or thank-you routing;
- analytics loss;
- elevated 4xx/5xx;
- material visual regression; or
- performance regression beyond the observed baseline.

Preferred rollback:

1. redeploy the prior known-good Hostinger deployment or revert the implementation commit;
2. confirm the baseline SHA is current;
3. verify homepage, both blogs, robots, and all three sitemaps;
4. document the trigger; and
5. do not re-release until the triggering issue is reproduced and fixed locally.

## 13. Monitoring schedule

### Immediately after deployment

- Run `npm run seo:verify:live`.
- Verify homepage, `/ae/`, both contacts, both blogs, robots, and sitemaps.
- Verify the market selector in a normal browser.
- Inspect Hostinger runtime logs.
- Confirm forms and thank-you routes.
- Confirm analytics requests are present.

### 24 hours

- Repeat release checks.
- Inspect 4xx/5xx and form/conversion errors.
- Confirm all sitemap endpoints remain reachable.
- Review initial CSP report-only violations if available.

### 72 hours

- Inspect representative India and UAE URLs in GSC.
- Review canonical selection and crawler access.
- Review redirect-source handling.

### 7 days

- Compare clicks and impressions by page class.
- Review indexing cohorts.
- Review crawled-currently-not-indexed and duplicate-canonical changes.
- Check crawler/security logs.

### 14 days

- Review CLS, LCP, and INP RUM events.
- Review the 45-URL desktop CLS cohort.
- Review leads, conversion integrity, and incidents.

### 28 days

- Produce a post-release comparison.
- Do not infer causality from a single metric.
- Decide whether the next wave is technical cleanup, historical URL resolution, or content work.

## 14. Final execution state

Technical implementation: complete.

Local verification: complete.

Production deployment: pending owner action.

Password rotation: pending owner action after deployment.

Content programme: not started in this technical wave.

Decision-gated historical redirects: pending factual decisions.

Long-latency GSC and Core Web Vitals outcomes: pending post-deployment observation.
