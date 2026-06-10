'use client';

import React, { useState, useEffect } from 'react';
import styles from './adminChats.module.css';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp?: string;
}

interface LeadInfo {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  preferredTime?: string;
  userRequirement?: string;
  mainChallenge?: string;
  recommendedDirection?: string;
}

interface ChatSession {
  sessionId: string;
  updatedAt: string;
  ip?: string;
  location?: {
    city?: string;
    region?: string;
    country?: string;
    timezone?: string;
  };
  leadInfo?: LeadInfo;
  messages: Message[];
}

export default function AdminChatsPage() {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [error, setError] = useState('');
  
  const [sessions, setSessions] = useState<ChatSession[]>([]);
  const [filteredSessions, setFilteredSessions] = useState<ChatSession[]>([]);
  const [selectedSession, setSelectedSession] = useState<ChatSession | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<'chat' | 'details'>('chat');

  // Reset tab to chat when selected session changes
  useEffect(() => {
    setActiveTab('chat');
  }, [selectedSession?.sessionId]);

  // Check localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('impulse_admin_password');
      if (saved) {
        validateAndFetch(saved);
      } else {
        setIsAuthenticated(false);
      }
    }
  }, []);

  // Filter sessions based on search query
  useEffect(() => {
    if (!searchQuery.trim()) {
      setFilteredSessions(sessions);
      return;
    }
    const q = searchQuery.toLowerCase();
    const filtered = sessions.filter(s => {
      const name = s.leadInfo?.name?.toLowerCase() || '';
      const email = s.leadInfo?.email?.toLowerCase() || '';
      const company = s.leadInfo?.company?.toLowerCase() || '';
      const phone = s.leadInfo?.phone || '';
      const req = s.leadInfo?.userRequirement?.toLowerCase() || '';
      const sid = s.sessionId.toLowerCase();
      
      return name.includes(q) || 
             email.includes(q) || 
             company.includes(q) || 
             phone.includes(q) || 
             req.includes(q) || 
             sid.includes(q);
    });
    setFilteredSessions(filtered);
  }, [searchQuery, sessions]);

  const validateAndFetch = async (passToVerify: string) => {
    setIsLoading(true);
    setError('');
    try {
      const res = await fetch('/api/admin/chats', {
        headers: {
          'Authorization': `Bearer ${passToVerify}`
        }
      });

      if (res.ok) {
        const data = await res.json();
        setSessions(data.sessions || []);
        setFilteredSessions(data.sessions || []);
        setIsAuthenticated(true);
        if (typeof window !== 'undefined') {
          localStorage.setItem('impulse_admin_password', passToVerify);
        }
      } else if (res.status === 401) {
        setError('Invalid admin password. Please try again.');
        setIsAuthenticated(false);
        if (typeof window !== 'undefined') {
          localStorage.removeItem('impulse_admin_password');
        }
      } else {
        setError('An error occurred. Status: ' + res.status);
      }
    } catch (err) {
      console.error(err);
      setError('Connection failed. Please check your server.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!password) {
      setError('Password cannot be empty');
      return;
    }
    validateAndFetch(password);
  };

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('impulse_admin_password');
    }
    setIsAuthenticated(false);
    setSessions([]);
    setFilteredSessions([]);
    setSelectedSession(null);
    setPassword('');
  };

  const formatTime = (isoString: string) => {
    try {
      const date = new Date(isoString);
      return date.toLocaleString('en-IN', {
        timeZone: 'Asia/Kolkata',
        dateStyle: 'short',
        timeStyle: 'short'
      });
    } catch (e) {
      return isoString;
    }
  };

  // If initial auth check is not completed yet
  if (isAuthenticated === null) {
    return (
      <div className={styles.container} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <div className={styles.loadingSpinner}></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className={styles.container}>
        <div className={styles.loginWrapper}>
          <div className={styles.loginCard}>
            <h1>
              <span className={styles.gradientText}>Impulse Admin</span>
            </h1>
            <p>Access the Chatbot Conversations dashboard</p>
            <form onSubmit={handleLoginSubmit}>
              <input
                type="password"
                placeholder="Enter Admin Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={styles.inputField}
                autoFocus
              />
              {error && <div className={styles.errorText}>{error}</div>}
              <button type="submit" disabled={isLoading} className={styles.loginBtn}>
                {isLoading ? 'Verifying...' : 'Unlock Dashboard'}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`${styles.container} ${styles.dashboardContainer}`}>
      <header className={styles.header}>
        <div>
          <h1>Chatbot Logs</h1>
          <p style={{ margin: 0, fontSize: '0.85rem', color: '#9ca3af' }}>
            Monitor and review AI chatbot conversations in real time
          </p>
        </div>
        <div className={styles.headerActions}>
          <input
            type="text"
            placeholder="Search leads or sessions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={styles.searchBar}
          />
          <button onClick={handleLogout} className={styles.logoutBtn}>
            Logout
          </button>
        </div>
      </header>

      <div className={`${styles.dashboardGrid} ${selectedSession ? styles.hasSelected : ''}`}>
        {/* Left column: Chat list */}
        <div className={styles.sidebar}>
          <div className={styles.sidebarHeader}>
            Conversations ({filteredSessions.length})
          </div>
          <div className={styles.chatList}>
            {isLoading && sessions.length === 0 ? (
              <div style={{ display: 'flex', justifyContent: 'center', padding: '2rem' }}>
                <div className={styles.loadingSpinner}></div>
              </div>
            ) : filteredSessions.length === 0 ? (
              <div style={{ textAlign: 'center', color: '#6b7280', padding: '2rem', fontSize: '0.9rem' }}>
                No conversations found.
              </div>
            ) : (
              filteredSessions.map((session) => {
                const isLead = !!(session.leadInfo?.email || session.leadInfo?.phone);
                const displayName = session.leadInfo?.name || 'Anonymous Visitor';
                const messageCount = session.messages ? session.messages.length : 0;
                const companyName = session.leadInfo?.company || '';
                
                return (
                  <div
                    key={session.sessionId}
                    onClick={() => setSelectedSession(session)}
                    className={`${styles.chatItem} ${selectedSession?.sessionId === session.sessionId ? styles.chatItemActive : ''}`}
                  >
                    <div className={styles.chatItemHeader}>
                      <span className={styles.visitorName}>{displayName}</span>
                      <span className={styles.chatTime}>{formatTime(session.updatedAt)}</span>
                    </div>
                    {companyName && (
                      <div className={styles.company}>{companyName}</div>
                    )}
                    <div className={styles.chatMeta}>
                      <span style={{ fontSize: '0.75rem', color: '#4b5563', fontFamily: 'monospace' }}>
                        ID: {session.sessionId.substring(5, 12)}...
                      </span>
                      <div className={styles.badges}>
                        {isLead && <span className={`${styles.badge} ${styles.badgeLead}`}>Lead</span>}
                        <span className={`${styles.badge} ${styles.badgeCount}`}>{messageCount} msg</span>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* Right column: Chat details */}
        <div className={styles.mainView}>
          {selectedSession ? (
            <>
              <div className={styles.detailHeader}>
                <div className={styles.detailHeaderMain}>
                  <button 
                    onClick={() => setSelectedSession(null)} 
                    className={styles.backBtn}
                    aria-label="Back to conversations list"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="19" y1="12" x2="5" y2="12"></line>
                      <polyline points="12 19 5 12 12 5"></polyline>
                    </svg>
                    <span>Back</span>
                  </button>
                  <div>
                    <h2 className={styles.detailTitle}>
                      {selectedSession.leadInfo?.name || 'Anonymous Session'}
                    </h2>
                    <p className={styles.detailSub}>
                      Session ID: <code style={{ color: '#a78bfa', fontSize: '0.85rem' }}>{selectedSession.sessionId}</code> | Updated: {formatTime(selectedSession.updatedAt)}
                    </p>
                  </div>
                </div>
                
                <div className={styles.mobileTabs}>
                  <button 
                    onClick={() => setActiveTab('chat')} 
                    className={`${styles.tabBtn} ${activeTab === 'chat' ? styles.tabBtnActive : ''}`}
                  >
                    Chat
                  </button>
                  <button 
                    onClick={() => setActiveTab('details')} 
                    className={`${styles.tabBtn} ${activeTab === 'details' ? styles.tabBtnActive : ''}`}
                  >
                    Lead Info
                  </button>
                </div>
              </div>
              <div className={`${styles.detailBody} ${activeTab === 'details' ? styles.showDetailsTab : styles.showChatTab}`}>
                {/* Chat transcript */}
                <div className={styles.transcriptContainer}>
                  {selectedSession.messages && selectedSession.messages.map((msg, idx) => {
                    const isUser = msg.role === 'user';
                    return (
                      <div
                        key={idx}
                        className={`${styles.bubbleWrapper} ${isUser ? styles.bubbleUser : styles.bubbleAssistant}`}
                      >
                        <div className={styles.bubbleSender}>
                          {isUser ? 'Visitor' : 'Adwait (Assistant)'}
                        </div>
                        <div className={styles.bubbleText}>
                          {msg.content}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Sidebar details */}
                <div className={styles.detailsPanel}>
                  <h3 className={styles.panelTitle}>Lead Details</h3>
                  
                  <div className={styles.infoGroup}>
                    <div className={styles.infoLabel}>Name</div>
                    <div className={styles.infoValue}>
                      {selectedSession.leadInfo?.name || <em style={{ color: '#4b5563' }}>Not provided</em>}
                    </div>
                  </div>

                  <div className={styles.infoGroup}>
                    <div className={styles.infoLabel}>Email</div>
                    <div className={styles.infoValue}>
                      {selectedSession.leadInfo?.email ? (
                        <a href={`mailto:${selectedSession.leadInfo.email}`}>{selectedSession.leadInfo.email}</a>
                      ) : (
                        <em style={{ color: '#4b5563' }}>Not provided</em>
                      )}
                    </div>
                  </div>

                  <div className={styles.infoGroup}>
                    <div className={styles.infoLabel}>Phone</div>
                    <div className={styles.infoValue}>
                      {selectedSession.leadInfo?.phone ? (
                        <a href={`tel:${selectedSession.leadInfo.phone}`}>{selectedSession.leadInfo.phone}</a>
                      ) : (
                        <em style={{ color: '#4b5563' }}>Not provided</em>
                      )}
                    </div>
                  </div>

                  <div className={styles.infoGroup}>
                    <div className={styles.infoLabel}>Company</div>
                    <div className={styles.infoValue}>
                      {selectedSession.leadInfo?.company || <em style={{ color: '#4b5563' }}>Not provided</em>}
                    </div>
                  </div>

                  <div className={styles.infoGroup}>
                    <div className={styles.infoLabel}>Preferred Time</div>
                    <div className={styles.infoValue}>
                      {selectedSession.leadInfo?.preferredTime || <em style={{ color: '#4b5563' }}>Not provided</em>}
                    </div>
                  </div>

                  <div className={styles.infoGroup}>
                    <div className={styles.infoLabel}>Requirement</div>
                    <div className={styles.infoValue} style={{ whiteSpace: 'pre-wrap' }}>
                      {selectedSession.leadInfo?.userRequirement || <em style={{ color: '#4b5563' }}>Not specified</em>}
                    </div>
                  </div>

                  <div className={styles.infoGroup}>
                    <div className={styles.infoLabel}>Recommended Direction</div>
                    <div className={styles.infoValue}>
                      {selectedSession.leadInfo?.recommendedDirection || <em style={{ color: '#4b5563' }}>Not determined</em>}
                    </div>
                  </div>

                  <hr style={{ border: 'none', borderTop: '1px solid rgba(255, 255, 255, 0.08)', margin: '1.5rem 0' }} />
                  
                  <h3 className={styles.panelTitle}>Session Details</h3>

                  <div className={styles.infoGroup}>
                    <div className={styles.infoLabel}>IP Address</div>
                    <div className={styles.infoValue}>
                      {selectedSession.ip || <em style={{ color: '#4b5563' }}>Unknown</em>}
                    </div>
                  </div>

                  <div className={styles.infoGroup}>
                    <div className={styles.infoLabel}>Location</div>
                    <div className={styles.infoValue}>
                      {selectedSession.location ? (
                        `${selectedSession.location.city || ''}, ${selectedSession.location.region || ''}, ${selectedSession.location.country || ''}`.replace(/^, /, '').replace(/, , /, ', ')
                      ) : (
                        <em style={{ color: '#4b5563' }}>Unknown</em>
                      )}
                    </div>
                  </div>

                  <div className={styles.infoGroup}>
                    <div className={styles.infoLabel}>Timezone</div>
                    <div className={styles.infoValue}>
                      {selectedSession.location?.timezone || <em style={{ color: '#4b5563' }}>Unknown</em>}
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className={styles.emptyState}>
              <svg
                width="64"
                height="64"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
              <h3>Select a Conversation</h3>
              <p style={{ margin: 0, fontSize: '0.9rem' }}>
                Select a chat log from the sidebar to view full transcript and captured details.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
