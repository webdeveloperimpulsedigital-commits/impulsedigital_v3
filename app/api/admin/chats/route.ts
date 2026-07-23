import { NextRequest, NextResponse } from 'next/server';
import { timingSafeEqual } from 'crypto';
import { listChatSessions, getStorageDiagnostics } from '@/lib/chatStorage';

function credentialsMatch(received: string, expected: string): boolean {
  const receivedBuffer = Buffer.from(received);
  const expectedBuffer = Buffer.from(expected);

  return (
    receivedBuffer.length === expectedBuffer.length &&
    timingSafeEqual(receivedBuffer, expectedBuffer)
  );
}

export async function GET(req: NextRequest) {
  try {
    const expectedPassword = process.env.ADMIN_PASSWORD;
    if (!expectedPassword) {
      console.error('[API/admin/chats] ADMIN_PASSWORD is not configured.');
      return NextResponse.json({ error: 'Service unavailable' }, { status: 503 });
    }

    // Try reading from Authorization header (Bearer token)
    const authHeader = req.headers.get('authorization');
    let passwordHeader = '';
    if (authHeader && authHeader.startsWith('Bearer ')) {
      passwordHeader = authHeader.substring(7);
    }

    // Fallback to a custom header. Never accept credentials in query strings,
    // where they can leak into browser history, analytics, and proxy logs.
    if (!passwordHeader) {
      passwordHeader = req.headers.get('x-admin-password') || '';
    }

    if (!credentialsMatch(passwordHeader, expectedPassword)) {
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
