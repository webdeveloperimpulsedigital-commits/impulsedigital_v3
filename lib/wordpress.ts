/**
 * WordPress REST API helpers for headless blog.
 * Source: https://impulsedigital.co.in/ID-web-blog/wp-json/wp/v2
 * Renders at: https://www.theimpulsedigital.com/blog/
 */

const WP_API = 'https://impulsedigital.co.in/ID-web-blog/wp-json/wp/v2';

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

/** Fetch paginated list of posts (listing page). */
export async function getPosts(
  page = 1,
  perPage = 12,
): Promise<{ posts: WPPost[]; total: number; totalPages: number }> {
  try {
    const res = await fetch(
      `${WP_API}/posts?_fields=id,title,slug,excerpt,date,featured_media,categories,yoast_head_json,_links,_embedded&_embed=true&per_page=${perPage}&page=${page}&status=publish&orderby=date&order=desc`,
      { 
        next: { revalidate: 3600 },
        signal: AbortSignal.timeout(6000)
      },
    );
    if (!res.ok) return { posts: [], total: 0, totalPages: 0 };
    const posts: WPPost[] = await res.json();
    const total = parseInt(res.headers.get('X-WP-Total') || '0', 10);
    const totalPages = parseInt(res.headers.get('X-WP-TotalPages') || '0', 10);
    return { posts, total, totalPages };
  } catch {
    return { posts: [], total: 0, totalPages: 0 };
  }
}

/** Fetch a single post by its slug (post detail page). */
export async function getPostBySlug(slug: string): Promise<WPPost | null> {
  try {
    const res = await fetch(
      `${WP_API}/posts?slug=${encodeURIComponent(slug)}&_fields=id,title,slug,content,date,featured_media,categories,yoast_head_json,_links,_embedded&_embed=true&status=publish`,
      { 
        next: { revalidate: 3600 },
        signal: AbortSignal.timeout(6000)
      },
    );
    if (!res.ok) return null;
    const posts: WPPost[] = await res.json();
    return posts.length > 0 ? posts[0] : null;
  } catch {
    return null;
  }
}

/** Fetch all post slugs — used by generateStaticParams at build time. */
export async function getAllPostSlugs(): Promise<string[]> {
  try {
    const res = await fetch(
      `${WP_API}/posts?_fields=slug&per_page=100&status=publish`,
      { 
        next: { revalidate: 3600 },
        signal: AbortSignal.timeout(6000)
      },
    );
    if (!res.ok) return [];
    const posts: Pick<WPPost, 'slug'>[] = await res.json();
    return posts.map((p) => p.slug);
  } catch {
    return [];
  }
}

/** Fetch all post slugs and modification dates for sitemap generation. */
export async function getAllPostsForSitemap(): Promise<Array<{ slug: string; date: string }>> {
  try {
    const res = await fetch(
      `${WP_API}/posts?_fields=slug,date&per_page=100&status=publish`,
      { 
        next: { revalidate: 3600 },
        signal: AbortSignal.timeout(6000)
      },
    );
    if (!res.ok) return [];
    return await res.json();
  } catch {
    return [];
  }
}


/**
 * Rewrite internal WordPress URLs in rendered content so links stay on
 * theimpulsedigital.com instead of pointing back to impulsedigital.co.in.
 */
export function rewriteWPContent(html: string): string {
  return html
    .replace(/https:\/\/impulsedigital\.co\.in\/ID-web-blog\//g, '/blog/')
    .replace(/href="\/ID-web-blog\//g, 'href="/blog/');
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
  return new Date(dateString).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
