import fs from 'fs';
import path from 'path';

export interface ChatSession {
  sessionId: string;
  updatedAt: string;
  ip?: string;
  location?: {
    city?: string;
    region?: string;
    country?: string;
    timezone?: string;
  };
  leadInfo?: {
    name?: string;
    email?: string;
    phone?: string;
    company?: string;
    preferredTime?: string;
    userRequirement?: string;
    mainChallenge?: string;
    recommendedDirection?: string;
  };
  messages: {
    role: 'user' | 'assistant';
    content: string;
    timestamp?: string;
  }[];
}

const STORAGE_DIR = path.join(process.cwd(), 'storage', 'chats');

/**
 * Saves or updates a chat session JSON file on the local filesystem.
 */
export async function saveChatSession(
  sessionId: string,
  messages: { role: 'user' | 'assistant'; content: string; timestamp?: string }[],
  leadInfo?: any,
  ip?: string
) {
  console.log('[chatStorage] saveChatSession called with sessionId:', sessionId, 'IP:', ip);
  try {
    if (!sessionId) {
      console.warn('[chatStorage] Cannot save chat: sessionId is empty.');
      return false;
    }

    // Ensure the directory exists
    if (!fs.existsSync(STORAGE_DIR)) {
      fs.mkdirSync(STORAGE_DIR, { recursive: true });
    }

    const filePath = path.join(STORAGE_DIR, `${sessionId}.json`);
    
    // Check if we already have an existing file to load existing data
    let existingData: Partial<ChatSession> = {};
    if (fs.existsSync(filePath)) {
      try {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        existingData = JSON.parse(fileContent);
      } catch (e) {
        // Ignore
      }
    }

    // Safe merge of leadInfo (do not overwrite populated fields with empty strings)
    const mergedLeadInfo = { ...(existingData.leadInfo || {}) } as any;
    if (leadInfo) {
      Object.keys(leadInfo).forEach((key) => {
        const val = leadInfo[key];
        if (val !== undefined && val !== null && val !== '') {
          mergedLeadInfo[key] = val;
        }
      });
    }

    // Determine IP and Location
    const activeIp = ip || existingData.ip || '127.0.0.1';
    let location = existingData.location;

    if (!location && activeIp) {
      if (activeIp === '127.0.0.1' || activeIp === '::1' || activeIp.startsWith('192.168.') || activeIp.startsWith('10.')) {
        location = {
          city: 'Localhost',
          region: 'Development',
          country: 'Local Host',
          timezone: 'Local'
        };
      } else {
        try {
          const controller = new AbortController();
          const timeoutId = setTimeout(() => controller.abort(), 2000); // 2s timeout
          
          const geoResponse = await fetch(`https://ipapi.co/${activeIp}/json/`, { signal: controller.signal });
          clearTimeout(timeoutId);
          
          if (geoResponse.ok) {
            const geoData = await geoResponse.json();
            if (!geoData.error) {
              location = {
                city: geoData.city || 'Unknown City',
                region: geoData.region || 'Unknown Region',
                country: geoData.country_name || 'Unknown Country',
                timezone: geoData.timezone || 'Unknown'
              };
            }
          }
        } catch (e) {
          console.error('[chatStorage] Failed to resolve IP location:', e);
        }
      }
    }

    const sessionData: ChatSession = {
      sessionId,
      updatedAt: new Date().toISOString(),
      ip: activeIp,
      messages,
    };

    if (location) {
      sessionData.location = location;
    }

    // Only include leadInfo if it has actual values
    if (Object.keys(mergedLeadInfo).length > 0) {
      sessionData.leadInfo = mergedLeadInfo;
    }

    fs.writeFileSync(filePath, JSON.stringify(sessionData, null, 2), 'utf8');
    console.log('[chatStorage] Successfully wrote chat session file to:', filePath);
    return true;
  } catch (error) {
    console.error('[chatStorage] Failed to save chat session:', error);
    return false;
  }
}

/**
 * Retrieves a chat session by its sessionId.
 */
export async function getChatSession(sessionId: string): Promise<ChatSession | null> {
  try {
    const filePath = path.join(STORAGE_DIR, `${sessionId}.json`);
    if (!fs.existsSync(filePath)) {
      return null;
    }
    const fileContent = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileContent) as ChatSession;
  } catch (error) {
    console.error(`Failed to read chat session ${sessionId}:`, error);
    return null;
  }
}

/**
 * Lists all saved chat sessions sorted by updatedAt descending.
 */
export async function listChatSessions(): Promise<ChatSession[]> {
  console.log('[chatStorage] listChatSessions called');
  try {
    if (!fs.existsSync(STORAGE_DIR)) {
      console.log('[chatStorage] Storage directory does not exist:', STORAGE_DIR);
      return [];
    }

    const files = fs.readdirSync(STORAGE_DIR);
    const sessions: ChatSession[] = [];

    for (const file of files) {
      if (file.endsWith('.json')) {
        try {
          const filePath = path.join(STORAGE_DIR, file);
          const fileContent = fs.readFileSync(filePath, 'utf8');
          const parsed = JSON.parse(fileContent) as ChatSession;
          sessions.push(parsed);
        } catch (e) {
          // Skip corrupted or un-parseable files
        }
      }
    }

    // Sort by updatedAt descending (most recent first)
    return sessions.sort(
      (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
    );
  } catch (error) {
    console.error('Failed to list chat sessions:', error);
    return [];
  }
}
