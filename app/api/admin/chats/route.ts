import { NextRequest, NextResponse } from 'next/server';
import { listChatSessions } from '@/lib/chatStorage';

export async function GET(req: NextRequest) {
  try {
    let expectedPassword = process.env.ADMIN_PASSWORD || '';
    // Strip surrounding quotes from the env var value (in case .env has ADMIN_PASSWORD="...")
    if (expectedPassword.startsWith('"') && expectedPassword.endsWith('"')) {
      expectedPassword = expectedPassword.slice(1, -1);
    }

    // Try reading from Authorization header (Bearer token)
    const authHeader = req.headers.get('authorization');
    let passwordHeader = '';
    if (authHeader && authHeader.startsWith('Bearer ')) {
      passwordHeader = authHeader.substring(7);
    }
    // Decode URL‑encoded values (useful for query‑string usage)
    if (passwordHeader) {
      try {
        passwordHeader = decodeURIComponent(passwordHeader);
      } catch (e) {
        // ignore decode errors – keep original value
      }
    }
    // Strip surrounding quotes that might appear when env var is quoted
    if (passwordHeader.startsWith('"') && passwordHeader.endsWith('"')) {
      passwordHeader = passwordHeader.slice(1, -1);
    }

    // Fallback to custom header or query parameter
    if (!passwordHeader) {
      passwordHeader = req.headers.get('x-admin-password') || req.nextUrl.searchParams.get('password') || '';
      // Decode & strip as above for fallback sources as well
      if (passwordHeader) {
        try { passwordHeader = decodeURIComponent(passwordHeader); } catch (e) {}
        if (passwordHeader.startsWith('"') && passwordHeader.endsWith('"')) {
          passwordHeader = passwordHeader.slice(1, -1);
        }
      }
    }

    console.log('[API/admin/chats] Received request. Password provided:', !!passwordHeader);
    if (passwordHeader !== expectedPassword) {
      console.warn('[API/admin/chats] Unauthorized: Password mismatch.');
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const sessions = await listChatSessions();
    console.log('[API/admin/chats] Returning sessions count:', sessions.length);
    return NextResponse.json({ sessions });
  } catch (error: any) {
    console.error('Error in admin chats API:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export const dynamic = 'force-dynamic';
