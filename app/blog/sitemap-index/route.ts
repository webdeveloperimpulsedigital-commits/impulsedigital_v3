import { NextResponse } from 'next/server';
import { SITE_URL } from '@/lib/siteUrl';
import { getAllPostsForSitemap } from '@/lib/wordpress';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const posts = await getAllPostsForSitemap();
    const hubLastModified = posts.reduce(
      (latest, post) => post.modified > latest ? post.modified : latest,
      '2026-07-13',
    );

    let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${SITE_URL}/blog/</loc>
    <lastmod>${new Date(hubLastModified).toISOString()}</lastmod>
  </url>`;

    posts.forEach((post) => {
      const date = new Date(post.modified).toISOString();
      xml += `
  <url>
    <loc>${SITE_URL}/blog/${encodeURIComponent(post.slug)}/</loc>
    <lastmod>${date}</lastmod>
  </url>`;
    });

    xml += `
</urlset>`;

    return new NextResponse(xml, {
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=59',
      },
    });
  } catch (error) {
    console.error('Error generating blog sitemap:', error);
    return new NextResponse('Error generating sitemap', { status: 500 });
  }
}
