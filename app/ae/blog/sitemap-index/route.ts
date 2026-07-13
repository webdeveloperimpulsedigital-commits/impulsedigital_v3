import { NextResponse } from 'next/server';
import { SITE_URL } from '@/lib/siteUrl';
import { getAllAePostsForSitemap } from '@/lib/wordpress-ae';

export const dynamic = 'force-dynamic';

export async function GET() {
  console.log("GET AE sitemap route handler invoked...");
  try {
    console.log("Fetching AE posts for sitemap...");
    const posts = await getAllAePostsForSitemap();
    console.log(`Fetched ${posts.length} AE posts for sitemap.`);
    const now = new Date().toISOString();

    let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${SITE_URL}/ae/blog/</loc>
    <lastmod>${now}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>`;

    posts.forEach((post) => {
      const date = post.date ? new Date(post.date).toISOString() : now;
      xml += `
  <url>
    <loc>${SITE_URL}/ae/blog/${post.slug}/</loc>
    <lastmod>${date}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
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
    console.error('Error generating AE blog sitemap:', error);
    return new NextResponse('Error generating sitemap', { status: 500 });
  }
}
