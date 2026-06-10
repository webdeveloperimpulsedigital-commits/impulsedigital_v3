import { NextRequest, NextResponse } from 'next/server';
import { listChatSessions } from '@/lib/chatStorage';
import adminConfig from '@/config/admin.json';

export async function GET(req: NextRequest) {
  try {
    // Read password from JSON config (immune to dotenv # and $ parsing issues)
    const expectedPassword = adminConfig.password;

    // Try reading from Authorization header (Bearer token)
    const authHeader = req.headers.get('authorization');
    let passwordHeader = '';
    if (authHeader && authHeader.startsWith('Bearer ')) {
      passwordHeader = authHeader.substring(7);
    }

    // Fallback to custom header or query parameter
    if (!passwordHeader) {
      passwordHeader = req.headers.get('x-admin-password') || req.nextUrl.searchParams.get('password') || '';
    }

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
