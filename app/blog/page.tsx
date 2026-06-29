import type { Metadata } from 'next';
import Link from '@/components/RegionLink';
import { SITE_URL } from '@/lib/siteUrl';
import { getPosts, formatDate, stripHtml } from '@/lib/wordpress';

export const metadata: Metadata = {
  title: 'Blog | Digital Marketing Insights & Strategies | Impulse Digital',
  description:
    "Read our latest articles on digital marketing, SEO, AI marketing, social media, and growth strategies from Impulse Digital — India's leading digital marketing agency.",
  alternates: { canonical: `${SITE_URL}/blog/` },
  openGraph: {
    title: 'Blog | Impulse Digital',
    description:
      'Digital marketing insights, SEO guides, and AI marketing strategies from Impulse Digital.',
    url: `${SITE_URL}/blog/`,
    type: 'website',
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
  },
};

export const revalidate = 3600;

export default async function BlogPage() {
  const { posts } = await getPosts(1, 12);

  return (
    <main className="blog-page">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="blog-hero">
        <div className="blog-hero-inner">
          <span className="blog-eyebrow">Knowledge Hub</span>
          <h1 className="blog-hero-title">
            Insights &amp; <span className="blog-hero-accent">Strategies</span>
          </h1>
          <p className="blog-hero-desc">
            Digital marketing intelligence, SEO playbooks, AI marketing insights, and growth
            strategies from the Impulse Digital team.
          </p>
        </div>
      </section>

      {/* ── Posts Grid ───────────────────────────────────────── */}
      <section className="blog-grid-section">
        <div className="blog-container">
          {posts.length === 0 ? (
            <p className="blog-empty">No articles found. Check back soon.</p>
          ) : (
            <div className="blog-grid">
              {posts.map((post) => {
                const ogImage = post.yoast_head_json?.og_image?.[0]?.url || post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
                const rawExcerpt = stripHtml(post.excerpt.rendered);
                const excerpt =
                  rawExcerpt.length > 150 ? rawExcerpt.slice(0, 150) + '…' : rawExcerpt;

                return (
                  <article key={post.id} className="blog-card">
                    <Link href={`/blog/${post.slug}/`} className="blog-card-link">
                      {ogImage && (
                        <div className="blog-card-image-wrap">
                          <img
                            src={ogImage}
                            alt={stripHtml(post.title.rendered)}
                            className="blog-card-image"
                            loading="lazy"
                            width="800"
                            height="450"
                          />
                        </div>
                      )}
                      <div className="blog-card-body">
                        <time className="blog-card-date" dateTime={post.date}>
                          {formatDate(post.date)}
                        </time>
                        <h2
                          className="blog-card-title"
                          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                        />
                        {excerpt && <p className="blog-card-excerpt">{excerpt}</p>}
                        <span className="blog-card-cta">
                          Read Article
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path
                              d="M3 8H13M13 8L9 4M13 8L9 12"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </div>
                    </Link>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
