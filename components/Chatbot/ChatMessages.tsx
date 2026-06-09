'use client';

import React from 'react';
import styles from './Chatbot.module.css';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface LeadInfo {
  name: string;
  email: string;
  phone: string;
  company: string;
  preferredTime: string;
  userRequirement: string;
  mainChallenge: string;
  recommendedDirection: string;
}

interface ChatMessagesProps {
  messages: Message[];
  isLoading: boolean;
  showCaptcha: boolean;
  captchaVerified: boolean;
  isLocalhost: boolean;
  leadForm: LeadInfo;
  handleWhatsAppHandoff: () => void;
  messagesEndRef: React.RefObject<HTMLDivElement | null>;
}

const parseBoldText = (text: string) => {
  const parts = text.split(/(\*\*.*?\*\*)/);
  return parts.map((part, idx) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={idx}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
};

const formatMessageContent = (text: string) => {
  return text.split('\n\n').map((paragraph, index) => {
    const trimmedParagraph = paragraph.trim();
    if (!trimmedParagraph) return null;

    if (trimmedParagraph.startsWith('- ') || trimmedParagraph.startsWith('* ')) {
      const items = trimmedParagraph
        .split(/\n[-*]\s+/)
        .map((item) => item.replace(/^[-*]\s+/, '').trim())
        .filter(Boolean);

      return (
        <ul key={index} style={{ margin: '0.5rem 0', paddingLeft: '1.2rem' }}>
          {items.map((item, idx) => (
            <li key={idx}>{parseBoldText(item)}</li>
          ))}
        </ul>
      );
    }

    if (/^\d+\.\s+/.test(trimmedParagraph)) {
      const items = trimmedParagraph
        .split(/\n\d+\.\s+/)
        .map((item) => item.replace(/^\d+\.\s+/, '').trim())
        .filter(Boolean);

      return (
        <ol key={index} style={{ margin: '0.5rem 0', paddingLeft: '1.2rem' }}>
          {items.map((item, idx) => (
            <li key={idx}>{parseBoldText(item)}</li>
          ))}
        </ol>
      );
    }

    return <p key={index}>{parseBoldText(paragraph)}</p>;
  });
};

const ChatMessages: React.FC<ChatMessagesProps> = ({
  messages,
  isLoading,
  showCaptcha,
  captchaVerified,
  isLocalhost,
  leadForm,
  handleWhatsAppHandoff,
  messagesEndRef,
}) => {
  return (
    <div className={styles.chatMessages} data-lenis-prevent="true">


      {messages.map((msg, index) => (
        <div
          key={index}
          className={`${styles.messageRow} ${msg.role === 'user' ? styles.userRow : styles.assistantRow}`}
        >
          <div className={`${styles.messageBubble} ${msg.role === 'user' ? styles.userBubble : styles.assistantBubble}`}>
            {formatMessageContent(msg.content)}
          </div>
        </div>
      ))}

      {isLoading && (
        <div className={`${styles.messageRow} ${styles.assistantRow}`}>
          <div className={styles.typingIndicator}>
            <span className={styles.typingDot}></span>
            <span className={styles.typingDot}></span>
            <span className={styles.typingDot}></span>
          </div>
        </div>
      )}

      {showCaptcha && !captchaVerified && (
        <div className={styles.leadFormCard} id="chatbot-recaptcha-card">
          <h4 className={styles.leadFormTitle}>
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#8a5cf6"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ display: 'inline-block', marginRight: '8px', verticalAlign: 'middle' }}
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
            Verification Required
          </h4>
          <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', marginBottom: '1.2rem', lineHeight: '1.5' }}>
            Please verify that you are not a robot to send your query to our team:
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.5rem' }}>
            <div id="chatbot-recaptcha-element"></div>
          </div>
          {isLocalhost && (
            <div style={{ marginTop: '12px', padding: '8px 10px', backgroundColor: 'rgba(255, 77, 77, 0.1)', border: '1px solid rgba(255, 77, 77, 0.2)', borderRadius: '6px', fontSize: '11px', color: '#ff8a8a', lineHeight: '1.4' }}>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ display: 'inline-block', marginRight: '6px', verticalAlign: 'middle' }}
              >
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                <line x1="12" y1="9" x2="12" y2="13"></line>
                <line x1="12" y1="17" x2="12.01" y2="17"></line>
              </svg>
              <strong>Note:</strong> To test locally, you must add <code>localhost</code> to the domains list in your Google reCAPTCHA Admin Console.
            </div>
          )}
        </div>
      )}

      {captchaVerified && (
        <div className={styles.leadFormCard}>
          <h4 className={styles.leadFormTitle}>
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="#25d366"
              style={{ display: 'inline-block', marginRight: '8px', verticalAlign: 'middle' }}
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.458L0 24zm6.59-4.846c1.6.95 3.473 1.452 5.38 1.453 5.485 0 9.948-4.469 9.95-9.95.002-2.654-1.02-5.152-2.879-7.015C17.189 1.777 14.697.755 12.014.755c-5.49 0-9.953 4.471-9.955 9.953-.001 2.051.521 4.054 1.516 5.827l-.991 3.616 3.702-.97L6.647 19.15zM17.486 14.39c-.3-.149-1.778-.878-2.046-.977-.267-.099-.462-.149-.655.149-.193.297-.748.977-.917 1.175-.169.198-.337.223-.637.074-.3-.149-1.265-.467-2.41-1.487-.89-.794-1.49-1.775-1.665-2.074-.175-.299-.019-.46.13-.608.135-.133.3-.347.45-.52.15-.173.2-.297.3-.495.1-.198.05-.371-.025-.52-.075-.149-.655-1.584-.9-2.178-.238-.574-.48-.495-.655-.504-.168-.008-.362-.01-.555-.01-.193 0-.507.073-.772.371-.265.297-1.01 1.002-1.01 2.443 0 1.44 1.047 2.834 1.192 3.033.146.198 2.06 3.146 4.992 4.41.697.302 1.242.482 1.667.618.7.223 1.338.191 1.843.116.562-.083 1.778-.726 2.028-1.396.25-.67.25-1.242.175-1.396-.075-.149-.27-.238-.57-.388z"/>
            </svg>
            Continue on WhatsApp
          </h4>
          <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', marginBottom: '1.2rem', lineHeight: '1.5' }}>
            Click the button below to connect with our team on WhatsApp.
          </p>
          <button
            className={styles.whatsappBtn}
            onClick={handleWhatsAppHandoff}
            id="continue-whatsapp-btn"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              style={{ display: 'inline-block', marginRight: '8px', verticalAlign: 'middle' }}
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.458L0 24zm6.59-4.846c1.6.95 3.473 1.452 5.38 1.453 5.485 0 9.948-4.469 9.95-9.95.002-2.654-1.02-5.152-2.879-7.015C17.189 1.777 14.697.755 12.014.755c-5.49 0-9.953 4.471-9.955 9.953-.001 2.051.521 4.054 1.516 5.827l-.991 3.616 3.702-.97L6.647 19.15zM17.486 14.39c-.3-.149-1.778-.878-2.046-.977-.267-.099-.462-.149-.655.149-.193.297-.748.977-.917 1.175-.169.198-.337.223-.637.074-.3-.149-1.265-.467-2.41-1.487-.89-.794-1.49-1.775-1.665-2.074-.175-.299-.019-.46.13-.608.135-.133.3-.347.45-.52.15-.173.2-.297.3-.495.1-.198.05-.371-.025-.52-.075-.149-.655-1.584-.9-2.178-.238-.574-.48-.495-.655-.504-.168-.008-.362-.01-.555-.01-.193 0-.507.073-.772.371-.265.297-1.01 1.002-1.01 2.443 0 1.44 1.047 2.834 1.192 3.033.146.198 2.06 3.146 4.992 4.41.697.302 1.242.482 1.667.618.7.223 1.338.191 1.843.116.562-.083 1.778-.726 2.028-1.396.25-.67.25-1.242.175-1.396-.075-.149-.27-.238-.57-.388z"/>
            </svg>
            Continue on WhatsApp
          </button>
        </div>
      )}

      <div ref={messagesEndRef} />
    </div>
  );
};

export default React.memo(ChatMessages);
