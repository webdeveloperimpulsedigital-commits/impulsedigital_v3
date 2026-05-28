/**
 * Transparent WordPress proxy middleware.
 *
 * Intercepts every /blog/* request BEFORE any Next.js page is rendered,
 * fetches the real WordPress page from impulsedigital.co.in/ID-web-blog/,
 * rewrites all internal WordPress URLs to theimpulsedigital.com/blog/,
 * and returns the WordPress HTML/CSS/JS directly to the browser.
 *
 * This gives the exact WordPress theme UI at theimpulsedigital.com/blog/,
 * with all links pointing to the correct domain.
 *
 * Requirements:
 *   - WordPress WP_HOME   = https://impulsedigital.co.in/ID-web-blog
 *   - WordPress WP_SITEURL = https://impulsedigital.co.in/ID-web-blog
 *   (If WP redirects to theimpulsedigital.com it creates a loop.)
 */

import { NextRequest, NextResponse } from 'next/server';

const WP_ORIGIN  = 'https://impulsedigital.co.in';
const WP_PATH    = '/ID-web-blog';                          // install sub-path
const SITE_BLOG  = 'https://www.theimpulsedigital.com/blog'; // public blog URL

/** Replace every occurrence of the WordPress origin+path with our blog URL. */
function rewriteUrls(text: string): string {
  // Match both http and https, with or without trailing slash
  return text
    .replace(/https?:\/\/impulsedigital\.co\.in\/ID-web-blog\//g, `${SITE_BLOG}/`)
    .replace(/https?:\/\/impulsedigital\.co\.in\/ID-web-blog/g,   SITE_BLOG);
}

/**
 * Large binary types we REDIRECT (not proxy) to avoid buffering huge files.
 * Images are fine to redirect — no CORS restriction on <img> tags.
 * Fonts MUST be proxied — browsers block cross-origin fonts without CORS headers.
 */
function shouldRedirectBinary(ct: string): boolean {
  return (
    ct.startsWith('image/') ||
    ct.startsWith('video/') ||
    ct.startsWith('audio/') ||
    ct.includes('application/pdf') ||
    ct.includes('application/zip')
  );
}

/**
 * Small binary types (fonts, wasm, etc.) that must be PROXIED
 * because browsers enforce CORS on them.
 */
function shouldProxyBinary(ct: string): boolean {
  return (
    ct.includes('font/') ||
    ct.includes('application/font') ||
    ct.includes('font-woff') ||
    ct.includes('application/x-font') ||
    ct.includes('application/wasm') ||
    ct.includes('application/octet-stream')
  );
}

export async function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  // Build the equivalent WordPress URL
  // /blog/foo/bar  →  /ID-web-blog/foo/bar
  const wpPathname = pathname.replace(/^\/blog/, WP_PATH) || `${WP_PATH}/`;
  const targetUrl  = `${WP_ORIGIN}${wpPathname}${search}`;

  let wpResponse: Response;
  try {
    wpResponse = await fetch(targetUrl, {
      headers: {
        'User-Agent':      request.headers.get('user-agent')       || 'Mozilla/5.0',
        'Accept':          request.headers.get('accept')           || 'text/html,*/*',
        'Accept-Language': request.headers.get('accept-language')  || 'en-US,en;q=0.9',
        // Request uncompressed so we can read/rewrite the body as text
        'Accept-Encoding': 'identity',
      },
      // Do NOT auto-follow redirects — we rewrite the Location header ourselves
      redirect: 'manual',
      // No cache — always serve fresh WordPress content
      cache: 'no-store',
    });
  } catch {
    return new NextResponse('Blog temporarily unavailable.', {
      status: 502,
      headers: { 'Content-Type': 'text/plain' },
    });
  }

  const status      = wpResponse.status;
  const contentType = wpResponse.headers.get('content-type') || '';

  // ── 3xx Redirects: rewrite Location header ─────────────────────────
  if (status >= 300 && status < 400) {
    const location    = wpResponse.headers.get('location') || '/blog/';
    const newLocation = rewriteUrls(location);
    return NextResponse.redirect(newLocation, { status });
  }

  // ── Large binary assets (images / video / audio / pdf): redirect ────
  // <img> tags & downloads don't enforce CORS, so redirecting to the
  // WordPress origin is fine and avoids buffering megabytes in memory.
  if (shouldRedirectBinary(contentType)) {
    return NextResponse.redirect(targetUrl, { status: 302 });
  }

  // ── Font / wasm / octet-stream: PROXY (never redirect) ─────────────
  // Browsers enforce same-origin CORS on @font-face src files.
  // Redirecting to a different origin would cause CORS failures, so we
  // buffer and return the file ourselves with permissive CORS headers.
  if (shouldProxyBinary(contentType)) {
    const buffer = await wpResponse.arrayBuffer();
    const cacheControl = wpResponse.headers.get('cache-control') || 'public, max-age=2592000';
    return new NextResponse(buffer, {
      status,
      headers: {
        'Content-Type': contentType,
        'Cache-Control': cacheControl,
        'Access-Control-Allow-Origin': '*',
      },
    });
  }

  // ── Text content (HTML / CSS / JS): rewrite URLs and return ─────────
  const body      = await wpResponse.text();
  const rewritten = rewriteUrls(body);

  const isHtml = contentType.includes('text/html');

  return new NextResponse(rewritten, {
    status,
    headers: {
      'Content-Type': isHtml
        ? 'text/html; charset=utf-8'
        : contentType || 'text/plain; charset=utf-8',
      // HTML: never cache (show WordPress edits immediately)
      // CSS/JS: short cache (WordPress assets change rarely)
      'Cache-Control': isHtml
        ? 'no-store, must-revalidate'
        : wpResponse.headers.get('cache-control') || 'public, max-age=86400',
    },
  });
}

export const config = {
  // Match /blog, /blog/, and every sub-path under /blog/
  matcher: ['/blog', '/blog/:path*'],
};
