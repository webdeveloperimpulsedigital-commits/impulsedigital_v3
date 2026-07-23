# Impulse Digital technical SEO deployment handoff

Status: implementation complete and ready for the owner-managed deployment.

## Release identity

- Working copy: `/Users/adwaitjoshi/Desktop/Impulse SEO Audit_Codex/impulsedigital_v3-seo-complete`
- Branch: `codex/complete-technical-seo-20260723`
- Baseline production SHA: `a42bce9736f82a506034ba7b9adce64358425dcc`
- Production deployment performed by Codex: no
- WordPress, Hostinger, or Search Console settings changed by Codex: no

## Implemented technical scope

### URL architecture and indexability

- Added a machine-readable page/publication registry with explicit market, state, page class, last-modified date, and approved equivalent-page relationships.
- Replaced route-presence-driven sitemap generation with the publication registry.
- Removed unstable runtime timestamps, priority, and change-frequency noise from sitemaps.
- Added explicit noindex isolation for thank-you, test, admin, API, and genuine 404 pages.
- Preserved the approved canonical host and trailing-slash policy.
- Kept ambiguous historical URLs out of automatic redirects.

### International SEO

- Replaced inferred cross-city alternates with explicit reciprocal India/UAE equivalence.
- Omitted `x-default` because no approved global-selector destination exists.
- Made the market selector user-initiated, keyboard/ARIA-aware, and crawlable.
- Corrected the hover/click race that immediately closed the selector after a click.
- Routed equivalent pages to their counterpart and unmatched city pages to a market-safe commercial fallback.
- Corrected UAE contact CTA routing.

### Structured data

- Added stable Organization, WebSite, India-presence, and UAE-presence entity identifiers.
- Consolidated homepage and commercial-page JSON-LD graphs.
- Removed duplicate FAQ ownership and unsupported location-business claims.
- Removed the invalid site-search action for a search function that does not exist.
- Corrected the schema logo reference to an existing asset.
- Added safe JSON-LD serialization.

### WordPress blog integration

- Rewrote raw, JSON-escaped, and URL-encoded legacy WordPress identities at the proxy boundary.
- Enforced `en-IN` and `en-AE` document languages.
- Preserved request methods, including HEAD.
- Corrected UAE oEmbed/schema identity rewriting.
- Made both blog sitemaps use WordPress modification dates and stable hub timestamps.
- Verified both proxied blogs through the local production server.

### Crawl controls and headers

- Aligned robots.txt with the main sitemap and both WordPress sitemap indexes.
- Added crawler exclusions for admin, API, and chatbot test surfaces.
- Added HSTS, MIME-sniffing, framing, referrer, permissions, cache, and report-only CSP headers.
- Kept CSP report-only to avoid blocking production analytics, forms, WordPress media, or third-party dependencies before live observation.

### Core Web Vitals and media stability

- Added intrinsic dimensions to every rendered image found in application and component JSX.
- Changed the Google font strategy to reduce layout-shift risk and preloaded the required local font.
- Added Web Vitals reporting to `dataLayer` for CLS, LCP, INP, and related metrics.
- Targeted the Search Console desktop homepage cohort that reported CLS 0.68 across 45 URLs.

### Forms, analytics safety, and security

- Removed duplicate DOM identifiers between the visible contact form and hidden chatbot form.
- Preserved market-correct thank-you routes and existing measurement tags.
- Removed the source-committed admin credential and tracked JSON credential fallback.
- Made admin authentication runtime-only, timing-safe, query-string-free, and fail-closed.
- Confirmed read-only in Hostinger that `ADMIN_PASSWORD` and `CHAT_STORAGE_DIR` exist as masked runtime variables.
- Scoped runtime chat-storage filesystem operations so the standalone build no longer traces the entire repository.

### Regression prevention

- Expanded the technical SEO suite to cover redirects, publication eligibility, canonical/hreflang behavior, noindex pages, schema ownership, blog identity rewriting, image dimensions, form IDs, runtime-only authentication, market-selector behavior, and protected case-study CTAs.
- Added TypeScript and SEO tests to the deployment workflow.
- Added a read-only local/live release verifier.

## Final verification evidence

- `npm run test:seo`: 22/22 passing.
- `npm run typecheck`: passing.
- `npm run build`: passing with no Turbopack/NFT warning.
- Production build generated the full 274-page route set.
- `npm run seo:verify:local`: all 72 checks passing.
- `git diff --check`: passing.
- Real Chrome verification:
  - selector exposes two accessible menu items;
  - India `/` links to UAE `/ae/`;
  - `hreflang` values are `en-IN` and `en-AE`;
  - selector collapses after navigation;
  - UAE contact navigation resolves to `/ae/contact-us/`.
- Protected case-study CTA remains exactly:
  - `Your Problem Next?`
  - `START A CONVERSATION`
  - `/contact-us`

## Required owner deployment sequence

1. Review and commit the changes on `codex/complete-technical-seo-20260723`.
2. Rotate `ADMIN_PASSWORD` in Hostinger because its previous value exists in older Git history. Do not add the replacement to any repository file.
3. Merge/push through the existing `main` workflow. Do not copy local `.next` artifacts.
4. Confirm Hostinger marks the intended new commit as the current completed deployment.
5. Check runtime logs before clearing any cache.
6. Run:

   ```bash
   npm run seo:verify:live
   ```

7. Clear the Hostinger CDN only if the live verifier or browser shows stale output, then rerun the verifier.
8. Do not resubmit successful Search Console sitemaps merely because code was deployed. Recheck their fetched state after Google recrawls them.

## Rollback

- Application rollback reference: `a42bce9736f82a506034ba7b9adce64358425dcc`.
- Prefer redeploying the prior known-good Hostinger deployment or reverting the technical SEO commit.
- Roll back immediately for new crawler blocking, sitemap failure, redirect loops, unexpected indexability changes, broken regional navigation/forms, lost analytics, or material visual regression.

## Deliberately unresolved decisions

No rule was guessed for:

- `/online-paid-advertising/`
- `/services/content-writing-services/`
- `/content-marketing-services/`
- `/slideshare-ppt/`
- `/resources/slideshare-ppt/`
- `/case-studies-vendiman/`

The exact malformed historical PDF URL also remains unknown. Recover its raw URL before creating a rule. The combined historical evidence attached to these decision gates is material, but an incorrect redirect could consolidate relevance into the wrong destination and is therefore not an acceptable automatic change.

## Post-deployment monitoring

- 0 hours: run the live verifier; check Hostinger runtime logs, both blogs, market journeys, forms, headers, and sitemap responses.
- 24 hours: repeat synthetic checks and inspect errors/conversions.
- 72 hours: inspect representative India/UAE URLs and canonical selection in Search Console.
- 7 days: compare page-class impressions, clicks, indexing cohorts, and crawler errors.
- 14 days: review CLS/RUM, excluded-page cohorts, leads, and incidents.
- 28 days: document directional organic/indexing results and decide the next technical or content wave.

Search Console baseline observed before this deployment:

- 2,063 total web-search clicks.
- 467 indexed and 920 not indexed.
- 304 Not found (404), 57 Soft 404, 57 duplicate without a selected canonical, and 395 crawled but currently not indexed.
- All three submitted sitemap records were successful.
- Mobile Core Web Vitals: 130 good URLs.
- Desktop Core Web Vitals: 85 good and 45 poor URLs, with the poor cohort grouped under homepage CLS.
