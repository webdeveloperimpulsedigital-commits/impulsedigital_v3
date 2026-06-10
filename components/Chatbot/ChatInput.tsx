'use client';

import React, { useState, useRef } from 'react';
import styles from './Chatbot.module.css';

interface ChatInputProps {
  isLoading: boolean;
  onSend: (query: string) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ isLoading, onSend }) => {
  const [inputValue, setInputValue] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const query = inputValue.trim();
    if (!query || isLoading) return;

    onSend(query);
    setInputValue('');
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
    }
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 100)}px`;
    }
  };

  return (
    <form className={styles.chatInputForm} onSubmit={handleSubmit}>
      <div className={styles.inputWrapper}>
        <textarea
          ref={textareaRef}
          rows={1}
          value={inputValue}
          onChange={handleTextareaChange}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              handleSubmit(e);
            }
          }}
          placeholder="Ask a question..."
          className={styles.textareaInput}
          disabled={isLoading}
          id="chatbot-textarea-input"
        />
      </div>
      <button
        type="submit"
        className={styles.sendBtn}
        disabled={!inputValue.trim() || isLoading}
        aria-label="Send Message"
        id="chatbot-send-btn"
      >
        <span className={styles.sendBtnIcon}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ display: 'block' }}
          >
            <line x1="22" y1="2" x2="11" y2="13"></line>
            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
          </svg>
        </span>
      </button>
    </form>
  );
};

export default React.memo(ChatInput);
