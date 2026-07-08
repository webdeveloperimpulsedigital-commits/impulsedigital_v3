import { NextResponse } from 'next/server';
import { getAePosts } from '@/lib/wordpress-ae';

export async function GET() {
  try {
    // Fetch 3 posts for the home page blog section
    const { posts } = await getAePosts(1, 3);
    return NextResponse.json(posts, {
      headers: {
        'Cache-Control': 'public, max-age=1800, stale-while-revalidate=600',
      }
    });
  } catch (error) {
    console.error('Error in ae-blog-posts API route:', error);
    // Return empty array on failure so client fallback is triggered cleanly
    return NextResponse.json([], { status: 500 });
  }
}
