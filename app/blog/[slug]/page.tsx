import type { Metadata } from 'next';
import Link from '@/components/RegionLink';
import { notFound } from 'next/navigation';
import { SITE_URL } from '@/lib/siteUrl';
import {
  getPostBySlug,
  getAllPostSlugs,
  rewriteWPContent,
  formatDate,
  stripHtml,
} from '@/lib/wordpress';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};

  const yoast = post.yoast_head_json;
  const ogImage = yoast?.og_image?.[0]?.url || post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
  const title = yoast?.title || stripHtml(post.title.rendered);
  const description = yoast?.description || '';

  return {
    title,
    description,
    alternates: { canonical: `${SITE_URL}/blog/${slug}/` },
    openGraph: {
      title: yoast?.og_title || title,
      description: yoast?.og_description || description,
      url: `${SITE_URL}/blog/${slug}/`,
      type: 'article',
      publishedTime: post.date,
      siteName: 'Impulse Digital',
      ...(ogImage ? { images: [{ url: ogImage }] } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: yoast?.og_title || title,
      description: yoast?.og_description || description,
      ...(ogImage ? { images: [ogImage] } : {}),
    },
  };
}

export const revalidate = 3600;

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const ogImage = post.yoast_head_json?.og_image?.[0]?.url || post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
  const content = rewriteWPContent(post.content.rendered);

  return (
    <main className="blog-post-page">
      {/* ── Featured Image ────────────────────────────────────── */}
      {ogImage && (
        <div className="blog-post-featured-wrap">
          <img
            src={ogImage}
            alt={stripHtml(post.title.rendered)}
            className="blog-post-featured-img"
            width="1200"
            height="630"
          />
        </div>
      )}

      {/* ── Post Header ───────────────────────────────────────── */}
      <div className="blog-post-header">
        <div className="blog-post-header-inner">
          <Link href="/blog/" className="blog-back-link">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M13 8H3M3 8L7 4M3 8L7 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            All Articles
          </Link>

          <h1
            className="blog-post-title"
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          />
          <div className="blog-post-meta">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span className="blog-post-meta-dot">·</span>
            <span>Impulse Digital</span>
          </div>
        </div>
      </div>

      {/* ── Post Content ──────────────────────────────────────── */}
      <div className="blog-post-content-wrap">
        <div className="blog-post-content-inner">
          <article
            className="wp-content"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </div>

      {/* ── Back CTA ──────────────────────────────────────────── */}
      <div className="blog-post-back-cta">
        <div className="blog-post-content-inner">
          <Link href="/blog/" className="blog-back-btn">
            ← Back to All Articles
          </Link>
        </div>
      </div>
    </main>
  );
}
