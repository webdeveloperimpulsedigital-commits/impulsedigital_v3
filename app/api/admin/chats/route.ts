import { NextRequest, NextResponse } from 'next/server';
import { listChatSessions, getStorageDiagnostics } from '@/lib/chatStorage';
import adminConfig from '@/config/admin.json';

export async function GET(req: NextRequest) {
  try {
    // Read password from JSON config with fallback to env variable (immune to dotenv # and $ parsing issues)
    const expectedPassword = adminConfig?.password || process.env.ADMIN_PASSWORD;

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
    const diagnostics = await getStorageDiagnostics();
    console.log('[API/admin/chats] Returning sessions count:', sessions.length);
    return NextResponse.json({ sessions, diagnostics });
  } catch (error: any) {
    console.error('Error in admin chats API:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export const dynamic = 'force-dynamic';
