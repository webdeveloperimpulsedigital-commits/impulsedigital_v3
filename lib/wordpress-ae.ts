/**
 * WordPress REST API helpers for the AE (UAE) headless blog.
 *
 * Source WordPress: Set via AE_WP_API environment variable.
 *   - Local dev default: https://impulsedigital.co.in/ae/blog/wp-json/wp/v2
 *   - Update AE_WP_API in Hostinger hPanel once your AE WordPress is installed.
 *
 * Renders at: https://www.theimpulsedigital.com/ae/blog/
 */

const AE_WP_API =
  process.env.AE_WP_API ||
  'https://impulsedigital.co.in/ae/blog/wp-json/wp/v2';

export interface WPPost {
  id: number;
  date: string;
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  featured_media: number;
  categories: number[];
  yoast_head_json: {
    title?: string;
    description?: string;
    og_title?: string;
    og_description?: string;
    og_image?: Array<{ url: string; width?: number; height?: number }>;
    canonical?: string;
  };
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
    }>;
  };
}

/**
 * Smart fetcher that tries pretty URLs first, and falls back to
 * ?rest_route= if pretty permalinks are disabled on WordPress (returning 404).
 */
async function fetchFromAeWp(subPath: string, queryParams: string): Promise<Response> {
  const prettyUrl = `${AE_WP_API}${subPath}?${queryParams}`;
  try {
    const res = await fetch(prettyUrl, {
      next: { revalidate: 3600 },
      signal: AbortSignal.timeout(6000),
    });
    if (res.ok) {
      return res;
    }
    // If not ok (e.g. 404), log warning and proceed to fallback
    console.warn(`[wordpress-ae] Pretty URL fetch failed with status ${res.status}. Trying rest_route fallback.`);
  } catch (e: any) {
    console.error(`[wordpress-ae] Pretty URL fetch failed: ${e.message}. Trying rest_route fallback.`);
  }

  // Fallback: https://impulsedigital.co.in/ae/blog/?rest_route=/wp/v2/posts&...
  const rootUrl = AE_WP_API.replace(/\/wp-json\/wp\/v2\/?$/, '');
  const fallbackUrl = `${rootUrl}/?rest_route=/wp/v2${subPath}&${queryParams}`;
  
  return await fetch(fallbackUrl, {
    next: { revalidate: 3600 },
    signal: AbortSignal.timeout(6000),
  });
}

/** Fetch paginated list of AE posts (listing page). */
export async function getAePosts(
  page = 1,
  perPage = 12,
): Promise<{ posts: WPPost[]; total: number; totalPages: number }> {
  try {
    const query = `_fields=id,title,slug,excerpt,date,featured_media,categories,yoast_head_json,_links,_embedded&_embed=true&per_page=${perPage}&page=${page}&status=publish&orderby=date&order=desc`;
    const res = await fetchFromAeWp('/posts', query);
    
    if (!res.ok) return { posts: [], total: 0, totalPages: 0 };
    const posts: WPPost[] = await res.json();
    const total = parseInt(res.headers.get('X-WP-Total') || '0', 10);
    const totalPages = parseInt(res.headers.get('X-WP-TotalPages') || '0', 10);
    return { posts, total, totalPages };
  } catch (e: any) {
    console.error('[wordpress-ae] Error in getAePosts:', e.message);
    return { posts: [], total: 0, totalPages: 0 };
  }
}

/** Fetch a single AE post by its slug (post detail page). */
export async function getAePostBySlug(slug: string): Promise<WPPost | null> {
  try {
    const query = `slug=${encodeURIComponent(slug)}&_fields=id,title,slug,content,date,featured_media,categories,yoast_head_json,_links,_embedded&_embed=true&status=publish`;
    const res = await fetchFromAeWp('/posts', query);
    
    if (!res.ok) return null;
    const posts: WPPost[] = await res.json();
    return posts.length > 0 ? posts[0] : null;
  } catch (e: any) {
    console.error('[wordpress-ae] Error in getAePostBySlug:', e.message);
    return null;
  }
}

/** Fetch all AE post slugs — used by generateStaticParams at build time. */
export async function getAllAePostSlugs(): Promise<string[]> {
  try {
    const query = '_fields=slug&per_page=100&status=publish';
    const res = await fetchFromAeWp('/posts', query);
    
    if (!res.ok) return [];
    const posts: Pick<WPPost, 'slug'>[] = await res.json();
    return posts.map((p) => p.slug);
  } catch (e: any) {
    console.error('[wordpress-ae] Error in getAllAePostSlugs:', e.message);
    return [];
  }
}

/** Fetch all AE post slugs and dates for sitemap generation. */
export async function getAllAePostsForSitemap(): Promise<
  Array<{ slug: string; date: string }>
> {
  try {
    const query = '_fields=slug,date&per_page=100&status=publish';
    const res = await fetchFromAeWp('/posts', query);
    
    if (!res.ok) return [];
    return await res.json();
  } catch (e: any) {
    console.error('[wordpress-ae] Error in getAllAePostsForSitemap:', e.message);
    return [];
  }
}

/**
 * Rewrite internal WordPress URLs in rendered content so links stay on
 * theimpulsedigital.com/ae/blog/ instead of pointing back to the WP source.
 */
export function rewriteAeWPContent(html: string): string {
  const wpBase = AE_WP_API.replace('/wp-json/wp/v2', '');
  return html
    .replace(new RegExp(wpBase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '/', 'g'), '/ae/blog/')
    .replace(new RegExp('href="' + wpBase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '/', 'g'), 'href="/ae/blog/');
}

/** Strip HTML tags for plain-text excerpts. */
export function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&#8217;/g, "'")
    .replace(/&#8216;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&hellip;/g, '…')
    .replace(/&nbsp;/g, ' ')
    .trim();
}

/** Format an ISO date string to a human-readable date. */
export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-AE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
