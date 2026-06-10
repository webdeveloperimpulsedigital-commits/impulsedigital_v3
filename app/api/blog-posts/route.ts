import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const targetUrl = 'https://impulsedigital.co.in/ID-web-blog/wp-json/wp/v2/posts?_embed&per_page=3&status=publish';
    const response = await fetch(targetUrl, {
      next: { revalidate: 1800 }, // Cache for 30 minutes
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'Mozilla/5.0 (NextJS Blog Fetcher)'
      }
    });

    if (!response.ok) {
      throw new Error(`WordPress API returned status ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data, {
      headers: {
        'Cache-Control': 'public, max-age=1800, stale-while-revalidate=600',
      }
    });
  } catch (error) {
    console.error('Error in blog-posts API route:', error);
    // Return empty array on failure so client fallback is triggered cleanly
    return NextResponse.json([], { status: 500 });
  }
}
