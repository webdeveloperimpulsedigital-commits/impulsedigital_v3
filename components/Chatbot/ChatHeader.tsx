'use client';

import React from 'react';
import styles from './Chatbot.module.css';

interface ChatHeaderProps {
  handleToggle: () => void;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ handleToggle }) => {
  return (
    <div className={styles.chatHeader}>
      <div className={styles.headerInfo}>
        <div className={styles.avatar}>
          <img
            src="/images/About Us/avtar.webp"
            alt="Adwait AI"
            className={styles.headerAvatarImg}
            width="128"
            height="128"
          />
        </div>
        <div className={styles.titleContainer}>
          <h3 className={styles.title}>Adwait</h3>
          <div className={styles.status}>
            <span className={styles.statusDot}></span>
            <span>Active | Impulse Digital</span>
          </div>
        </div>
      </div>
      <button className={styles.closeBtn} onClick={handleToggle} aria-label="Close Chat">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ display: 'block' }}
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>
  );
};

export default React.memo(ChatHeader);
