import { NextRequest, NextResponse } from 'next/server';

const WP_ORIGIN  = 'https://impulsedigital.co.in';
const WP_PATH    = '/ID-web-blog';   // India install sub-path
const WP_PATH_AE   = '/ae/blog';     // AE install sub-path

/** Replace every occurrence of the WordPress origin+path with our absolute blog URL. */
function rewriteUrls(text: string, isAe: boolean, origin: string): string {
  const siteBlog = `${origin}${isAe ? '/ae/blog' : '/blog'}`;
  if (isAe) {
    return text
      .replace(/https?:\/\/impulsedigital\.co\.in\/ae\/blog\//g, `${siteBlog}/`)
      .replace(/https?:\/\/impulsedigital\.co\.in\/ae\/blog/g,   siteBlog);
  } else {
    return text
      .replace(/https?:\/\/impulsedigital\.co\.in\/ID-web-blog\//g, `${siteBlog}/`)
      .replace(/https?:\/\/impulsedigital\.co\.in\/ID-web-blog/g,   siteBlog);
  }
}

/**
 * Large binary types we REDIRECT (not proxy) to avoid buffering huge files.
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
 * Small binary types (fonts, wasm, etc.) that must be PROXIED.
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

export async function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  // Resolve the actual public origin dynamically using HTTP headers
  const host = request.headers.get('x-forwarded-host') || request.headers.get('host') || 'www.theimpulsedigital.com';
  const proto = request.headers.get('x-forwarded-proto') || 'https';
  const publicOrigin = `${proto}://${host}`;

  // Add x-pathname header for all requests so layouts can detect the route
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-pathname', pathname);
  
  const isAeRoute = pathname.startsWith('/ae');
  if (isAeRoute) {
    requestHeaders.set('x-region', 'ae');
  } else {
    requestHeaders.set('x-region', 'in');
  }

  // --- BLOG PROXY LOGIC ---
  const isAeBlog = pathname.startsWith('/ae/blog');
  const isInBlog = !isAeBlog && pathname.startsWith('/blog');

  if (isAeBlog || isInBlog) {
    const sitemapBypass = isAeBlog
      ? (pathname === '/ae/blog/sitemap_index.xml' ||
         pathname === '/ae/blog/sitemap_index.xml/' ||
         pathname === '/ae/blog/sitemap-index' ||
         pathname === '/ae/blog/sitemap-index/')
      : (pathname === '/blog/sitemap_index.xml' ||
         pathname === '/blog/sitemap_index.xml/' ||
         pathname === '/blog/sitemap-index' ||
         pathname === '/blog/sitemap-index/');

    if (sitemapBypass) {
      return NextResponse.next({
        request: {
          headers: requestHeaders,
        },
      });
    }

    // Build the equivalent WordPress URL
    const targetUrl = isAeBlog
      ? `${WP_ORIGIN}${pathname}${search}`
      : `${WP_ORIGIN}${pathname.replace(/^\/blog/, WP_PATH) || `${WP_PATH}/`}${search}`;

    let wpResponse: Response;
    try {
      wpResponse = await fetch(targetUrl, {
        headers: {
          'User-Agent':      request.headers.get('user-agent')       || 'Mozilla/5.0',
          'Accept':          request.headers.get('accept')           || 'text/html,*/*',
          'Accept-Language': request.headers.get('accept-language')  || 'en-US,en;q=0.9',
          'Accept-Encoding': 'identity',
        },
        redirect: 'manual',
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
      const defaultLoc = isAeBlog ? '/ae/blog/' : '/blog/';
      const location    = wpResponse.headers.get('location') || defaultLoc;
      const newLocation = rewriteUrls(location, isAeBlog, publicOrigin);
      return NextResponse.redirect(newLocation, { status });
    }

    // ── Large binary assets (images / video / audio / pdf): redirect ────
    if (shouldRedirectBinary(contentType)) {
      return NextResponse.redirect(targetUrl, { status: 302 });
    }

    // ── Font / wasm / octet-stream: PROXY (never redirect) ─────────────
    if (shouldProxyBinary(contentType)) {
      const buffer = await wpResponse.arrayBuffer();
      const cacheControl = wpResponse.headers.get('cache-control') || 'public, max-age=2592000';
      return new NextResponse(buffer, {
        status,
        headers: {
          'Content-Type': contentType,
          'Cache-Control': cacheControl,
          'Access-Control-Allow-Origin': '*',
          'x-pathname': pathname,
        },
      });
    }

    // ── Text content (HTML / CSS / JS): rewrite URLs and return ─────────
    const body      = await wpResponse.text();
    const rewritten = rewriteUrls(body, isAeBlog, publicOrigin);
    const isHtml = contentType.includes('text/html');

    return new NextResponse(rewritten, {
      status,
      headers: {
        'Content-Type': isHtml
          ? 'text/html; charset=utf-8'
          : contentType || 'text/plain; charset=utf-8',
        'x-pathname': pathname,
        'Cache-Control': isHtml
          ? 'no-store, must-revalidate'
          : wpResponse.headers.get('cache-control') || 'public, max-age=86400',
      },
    });
  }
  
  // --- DEFAULT NEXT.JS RESPONSE FOR NON-BLOG ROUTES ---
  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
};
