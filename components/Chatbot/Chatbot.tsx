'use client';

import React, { useState, useEffect, useRef } from 'react';
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

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "How can I help you today?",
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [recommendationGiven, setRecommendationGiven] = useState(false);
  const [isHandoffReady, setIsHandoffReady] = useState(false);
  const [showCaptcha, setShowCaptcha] = useState(false);
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [captchaToken, setCaptchaToken] = useState('');
  const [isLocalhost, setIsLocalhost] = useState(false);
  
  const [leadForm, setLeadForm] = useState<LeadInfo>({
    name: '',
    email: '',
    phone: '',
    company: '',
    preferredTime: '',
    userRequirement: '',
    mainChallenge: '',
    recommendedDirection: '',
  });

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const leadSubmittedRef = useRef(false);
  const zohoFormRef = useRef<HTMLFormElement>(null);

  const submitLead = async (
    info: {
      name: string;
      company: string;
      email: string;
      phone: string;
      preferredTime: string;
      userRequirement: string;
      recommendedDirection: string;
    },
    token: string
  ) => {
    if (leadSubmittedRef.current) return;
    leadSubmittedRef.current = true;

    // 1. Submit natively to Zoho CRM via hidden iframe
    try {
      if (zohoFormRef.current) {
        const form = zohoFormRef.current;
        const nameInput = form.elements.namedItem('Last Name') as HTMLInputElement;
        const companyInput = form.elements.namedItem('Company') as HTMLInputElement;
        const emailInput = form.elements.namedItem('Email') as HTMLInputElement;
        const phoneInput = form.elements.namedItem('Phone') as HTMLInputElement;
        const descInput = form.elements.namedItem('Description') as HTMLTextAreaElement;

        if (nameInput) nameInput.value = info.name || 'Website Visitor';
        if (companyInput) companyInput.value = info.company || 'Not Specified';
        if (emailInput) emailInput.value = info.email || '';
        if (phoneInput) phoneInput.value = info.phone || '';
        
        if (descInput) {
          descInput.value = `Requirement: ${info.userRequirement || 'Not specified'}\nRecommended Direction: ${info.recommendedDirection || 'Not specified'}\nPreferred connection time: ${info.preferredTime || 'Not specified'}`;
        }

        // Set Zoho SalesIQ unique visitor ID and details
        try {
          const $zoho = (window as any).$zoho;
          if ($zoho && $zoho.salesiq) {
            const ldtuvidInput = form.elements.namedItem('LDTuvid') as HTMLInputElement;
            if (ldtuvidInput) {
              ldtuvidInput.value = $zoho.salesiq.visitor.uniqueid() || '';
            }
            $zoho.salesiq.visitor.name(info.name || 'Website Visitor');
            if (info.email) {
              $zoho.salesiq.visitor.email(info.email);
            }
          }
        } catch (err) {
          console.error('Error tracking SalesIQ visitor in chatbot:', err);
        }

        // Append g-recaptcha-response to the form dynamically
        let captchaInput = form.elements.namedItem('g-recaptcha-response') as HTMLTextAreaElement;
        if (!captchaInput) {
          captchaInput = document.createElement('textarea');
          captchaInput.name = 'g-recaptcha-response';
          captchaInput.style.display = 'none';
          form.appendChild(captchaInput);
        }
        captchaInput.value = token;

        form.submit();
        console.log('Zoho CRM lead submission triggered natively via hidden iframe with Captcha token.');
      }
    } catch (zohoErr) {
      console.error('Error submitting natively to Zoho:', zohoErr);
    }

    // 2. Submit to backend API for Resend email alert
    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(info),
      });
      console.log('Resend email alert triggered via backend successfully');
    } catch (error) {
      console.error('Error sending email alert to backend:', error);
    }
  };



  // Check if current hostname is localhost to toggle local helper messages
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hn = window.location.hostname;
      setIsLocalhost(hn === 'localhost' || hn === '127.0.0.1' || hn.startsWith('192.168.'));
    }
  }, []);

  // Load Zoho SalesIQ and WebForm Analytics scripts if not already present
  useEffect(() => {
    const loadZohoScripts = () => {
      // 1. Zoho SalesIQ
      if (!document.getElementById('zsiqscript')) {
        const $zoho = (window as any).$zoho || {};
        (window as any).$zoho = $zoho;
        $zoho.salesiq = $zoho.salesiq || {
          widgetcode: 'siqe8e2de51a58ff011f46d1d5718469d24fb1812f710b8e38bd932663adc239364',
          values: {},
          ready: function() {}
        };
        const s = document.createElement('script');
        s.type = 'text/javascript';
        s.id = 'zsiqscript';
        s.defer = true;
        s.src = 'https://salesiq.zoho.in/widget';
        document.body.appendChild(s);
      }

      // 2. Zoho WebForm Analytics
      if (!document.getElementById('wf_anal')) {
        const s = document.createElement('script');
        s.id = 'wf_anal';
        s.src = 'https://crm.zohopublic.in/crm/WebFormAnalyticsServeServlet?rid=067668c42525f92cfed5f91050cdbfa8489c91874a5a54216702fcf877cd09f2852c07a02518ad7dce00158ab836b3bbgidf49cea193c2cf8b393426a36d01b0ab349078788f5831fbf064b6096965a444dgid0c1d92dd9017ebb9f13e39c13cebbc5bf318167b2b6f826f9a7040e44cc9d9abgidc6e30ae4a0a75b59822449105d7bdf8697ffbb537da4c276848fdfd4b89026a2&tw=6415fe8afd736bd3ade910387402f0e6a9a16c831797ff621152ee2c123cbbf3';
        s.defer = true;
        document.body.appendChild(s);
      }
    };

    // Trigger on interaction or fallback after 4 seconds
    const triggerLoad = () => {
      loadZohoScripts();
      cleanupListeners();
    };

    const addListeners = () => {
      window.addEventListener('scroll', triggerLoad, { passive: true });
      window.addEventListener('mousemove', triggerLoad, { passive: true });
      window.addEventListener('mousedown', triggerLoad, { passive: true });
      window.addEventListener('touchstart', triggerLoad, { passive: true });
      window.addEventListener('keydown', triggerLoad, { passive: true });
    };

    const cleanupListeners = () => {
      window.removeEventListener('scroll', triggerLoad);
      window.removeEventListener('mousemove', triggerLoad);
      window.removeEventListener('mousedown', triggerLoad);
      window.removeEventListener('touchstart', triggerLoad);
      window.removeEventListener('keydown', triggerLoad);
    };

    addListeners();
    const timeoutId = setTimeout(triggerLoad, 4000);

    return () => {
      cleanupListeners();
      clearTimeout(timeoutId);
    };
  }, []);

  // Scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading, recommendationGiven, showCaptcha]);

  const loadRecaptchaScript = (callback: () => void) => {
    if ((window as any).grecaptcha && (window as any).grecaptcha.render) {
      callback();
      return;
    }
    
    let script = document.getElementById('recaptcha-key-script') as HTMLScriptElement;
    if (!script) {
      script = document.createElement('script');
      script.id = 'recaptcha-key-script';
      script.src = 'https://www.google.com/recaptcha/api.js?render=explicit';
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    }
    
    const interval = setInterval(() => {
      if ((window as any).grecaptcha && (window as any).grecaptcha.render) {
        clearInterval(interval);
        callback();
      }
    }, 100);
    
    setTimeout(() => clearInterval(interval), 10000);
  };

  const handleCaptchaSuccess = (token: string) => {
    setCaptchaVerified(true);
    setCaptchaToken(token);
    setShowCaptcha(false);
    
    setMessages((prev) => [
      ...prev,
      {
        role: 'assistant',
        content: "Verification successful! I've sent your details to our team.",
      },
    ]);

    submitLead({
      name: leadForm.name,
      company: leadForm.company || 'Not Specified',
      email: leadForm.email,
      phone: leadForm.phone,
      preferredTime: leadForm.preferredTime,
      userRequirement: leadForm.userRequirement,
      recommendedDirection: leadForm.recommendedDirection
    }, token);
  };

  useEffect(() => {
    if (showCaptcha && !captchaVerified) {
      loadRecaptchaScript(() => {
        try {
          const grecaptcha = (window as any).grecaptcha;
          const container = document.getElementById('chatbot-recaptcha-element');
          if (container) {
            container.innerHTML = '';
            grecaptcha.render('chatbot-recaptcha-element', {
              sitekey: '6LdaK0osAAAAADC8CEqZGlK1VgN2CkYB-iRXfn3y',
              theme: 'dark',
              callback: (token: string) => {
                handleCaptchaSuccess(token);
              }
            });
          }
        } catch (e) {
          console.error('Error rendering chatbot recaptcha:', e);
        }
      });
    }
  }, [showCaptcha, captchaVerified]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
    // Auto resize
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 100)}px`;
    }
  };

  const handleFormChange = (field: keyof LeadInfo, value: string) => {
    setLeadForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

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

      // Handle unordered lists (lines starting with - or * )
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

      // Handle ordered lists (lines starting with number followed by period)
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

      // Default paragraph
      return <p key={index}>{parseBoldText(paragraph)}</p>;
    });
  };

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    const query = inputValue.trim();
    if (!query || isLoading) return;

    const userMessage: Message = { role: 'user', content: query };
    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);
    setInputValue('');
    setIsLoading(true);

    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
    }

    try {
      // Exclude first system-like welcome message from context to save tokens and align prompt,
      // or map properly for the LLM call. The backend endpoint expects standard messages format.
      const chatHistory = updatedMessages.slice(1);

      const response = await fetch('/api/chat/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages: chatHistory }),
      });

      let data: any = null;
      try {
        data = await response.json();
      } catch (jsonErr) {
        console.error('Error parsing response JSON:', jsonErr);
      }

      if (!response.ok) {
        throw new Error(data?.message || 'Network response error');
      }
      console.log('Chatbot response data:', data);

      if (data.message) {
        setMessages((prev) => [...prev, { role: 'assistant', content: data.message }]);
      }

      if (data.metadata) {
        const meta = data.metadata;
        if (meta.recommendationGiven) {
          setRecommendationGiven(true);
        }
        if (meta.handoffReady) {
          setIsHandoffReady(true);
        }

        let updatedForm = { ...leadForm };
        if (meta.leadInfo) {
          const incoming = meta.leadInfo;
          updatedForm = {
            ...leadForm,
            name: incoming.name || leadForm.name,
            email: incoming.email || leadForm.email,
            phone: incoming.phone || leadForm.phone,
            company: incoming.company || leadForm.company,
            preferredTime: incoming.preferredTime || leadForm.preferredTime,
            userRequirement: incoming.userRequirement || leadForm.userRequirement,
            mainChallenge: incoming.mainChallenge || leadForm.mainChallenge,
            recommendedDirection: incoming.recommendedDirection || leadForm.recommendedDirection,
          };
          setLeadForm(updatedForm);
        }

        // Show Captcha verification card if name and email/phone are populated, and handoff/recommendation is ready
        const hasContactInfo = updatedForm.email || updatedForm.phone;
        const hasName = updatedForm.name;
        const isHandoffTriggered = meta.handoffReady || meta.recommendationGiven || recommendationGiven;

        if (isHandoffTriggered && hasName && hasContactInfo && !leadSubmittedRef.current && !showCaptcha && !captchaVerified) {
          console.log('Lead details captured, prompting for Captcha verification:', updatedForm);
          setShowCaptcha(true);
        }
      }
    } catch (err: any) {
      console.error('Chat error:', err);
      const errMsg = err.message === 'Network response error'
        ? "I apologize, but I encountered an error connecting to our system. Please try again, or feel free to message our team directly via the WhatsApp button."
        : (err.message || "I apologize, but I encountered an error. Please try again.");
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: errMsg,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleWhatsAppHandoff = () => {
    const { name, email, phone, company, preferredTime, userRequirement, mainChallenge, recommendedDirection } = leadForm;

    const reqPart = userRequirement 
      ? userRequirement 
      : "I'm looking to discuss my digital growth requirements and explore customized services.";

    const messageTemplate = `Hello Impulse Digital,

I came from the website to discuss my growth requirement.

${reqPart}

Please connect with me.`;

    const encodedMessage = encodeURIComponent(messageTemplate);
    const whatsappUrl = `https://wa.me/919769285224?text=${encodedMessage}`;
    
    // Add handoff log to chat
    setMessages((prev) => [
      ...prev,
      {
        role: 'assistant',
        content: `Great! I've prepared your WhatsApp message with all the context about your requirements. Click below if the WhatsApp window did not open automatically.`,
      },
    ]);

    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <button 
        className={`${styles.chatTrigger} ${isOpen ? styles.active : ''}`} 
        onClick={handleToggle}
        aria-label="Open AI Growth Assistant"
        id="chatbot-trigger-btn"
      >
        <span className={styles.chatTriggerIcon}>
          {isOpen ? <i className="fas fa-times"></i> : <i className="fas fa-comment-dots"></i>}
        </span>
      </button>

      {/* Chat window */}
      <div 
        className={`${styles.chatContainer} ${isOpen ? styles.open : ''}`}
        id="chatbot-window-container"
      >
        {/* Header */}
        <div className={styles.chatHeader}>
          <div className={styles.headerInfo}>
            <div className={styles.avatar}>ID</div>
            <div className={styles.titleContainer}>
              <h3 className={styles.title}>Adwait</h3>
              <div className={styles.status}>
                <span className={styles.statusDot}></span>
                <span>Active | Impulse Digital</span>
              </div>
            </div>
          </div>
          <button className={styles.closeBtn} onClick={handleToggle} aria-label="Close Chat">
            <i className="fas fa-times"></i>
          </button>
        </div>

        {/* Messages */}
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

          {/* Typing Indicator */}
          {isLoading && (
            <div className={`${styles.messageRow} ${styles.assistantRow}`}>
              <div className={styles.typingIndicator}>
                <span className={styles.typingDot}></span>
                <span className={styles.typingDot}></span>
                <span className={styles.typingDot}></span>
              </div>
            </div>
          )}

          {/* Google reCAPTCHA Card */}
          {showCaptcha && !captchaVerified && (
            <div className={styles.leadFormCard} id="chatbot-recaptcha-card">
              <h4 className={styles.leadFormTitle}>
                <i className="fas fa-shield-alt" style={{ color: '#8a5cf6', fontSize: '15px' }}></i> Verification Required
              </h4>
              <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', marginBottom: '1.2rem', lineHeight: '1.5' }}>
                Please verify that you are not a robot to send your query to our team:
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.5rem' }}>
                <div id="chatbot-recaptcha-element"></div>
              </div>
              {showCaptcha && !captchaVerified && isLocalhost && (
                <div style={{ marginTop: '12px', padding: '8px 10px', backgroundColor: 'rgba(255, 77, 77, 0.1)', border: '1px solid rgba(255, 77, 77, 0.2)', borderRadius: '6px', fontSize: '11px', color: '#ff8a8a', lineHeight: '1.4' }}>
                  <i className="fas fa-exclamation-triangle" style={{ marginRight: '6px' }}></i>
                  <strong>Note:</strong> To test locally, you must add <code>localhost</code> to the domains list in your Google reCAPTCHA Admin Console.
                </div>
              )}
            </div>
          )}

          {/* WhatsApp Direct Handoff */}
          {recommendationGiven && (
            <div className={styles.leadFormCard}>
              <h4 className={styles.leadFormTitle}>
                <i className="fab fa-whatsapp" style={{ color: '#25d366', fontSize: '15px' }}></i> Continue on WhatsApp
              </h4>
              <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', marginBottom: '1.2rem', lineHeight: '1.5' }}>
                Click the button below to connect with our team on WhatsApp.
              </p>
              <button
                className={styles.whatsappBtn}
                onClick={handleWhatsAppHandoff}
                id="continue-whatsapp-btn"
              >
                <i className="fab fa-whatsapp"></i> Continue on WhatsApp
              </button>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input form */}
        <form className={styles.chatInputForm} onSubmit={handleSend}>
          <div className={styles.inputWrapper}>
            <textarea
              ref={textareaRef}
              rows={1}
              value={inputValue}
              onChange={handleTextareaChange}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSend(e);
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
              <i className="fas fa-paper-plane"></i>
            </span>
          </button>
        </form>

        {/* Hidden Zoho Web-to-Lead Form and target iframe */}
        <iframe name="zoho-submit-iframe" style={{ display: 'none' }}></iframe>
        <form
          ref={zohoFormRef}
          id="webform1132219000000597005"
          name="WebToLeads1132219000000597005"
          action="https://crm.zoho.in/crm/WebToLeadForm"
          method="POST"
          target="zoho-submit-iframe"
          style={{ display: 'none' }}
          acceptCharset="UTF-8"
        >
          <input type="text" style={{display:'none'}} name="xnQsjsdp" value="3fdab897f0bcfb046c089a96653ff3ce3e052ac4ee2710bf1975f74e718c56f5" readOnly />
          <input type="hidden" name="zc_gad" id="zc_gad" value="" />
          <input type="text" style={{display:'none'}} name="xmIwtLD" value="73b678a6bc6723d2f2228f3b5916f3593bf43d1fbc528d305c97cc00bea7dec6afe8822544be20609bd9f6ee44997ec6" readOnly />
          <input type="text" style={{display:'none'}} name="actionType" value="TGVhZHM=" readOnly />
          <input type="text" style={{display:'none'}} name="returnURL" value="https://www.theimpulsedigital.com/thank-you/" readOnly />
          <input type="hidden" name="Lead Source" value="Website Contact Us" />
          {/* Do not remove this code. */}
          <input type="text" style={{display:'none'}} id="ldeskuid" name="ldeskuid" readOnly />
          <input type="text" style={{display:'none'}} id="LDTuvid" name="LDTuvid" readOnly />
          {/* Do not remove this code. */}
          <input type="text" style={{display: 'none'}} name="aG9uZXlwb3Q" value="" readOnly />
          
          <input type="text" style={{display:'none'}} id="Last_Name" name="Last Name" readOnly />
          <input type="text" style={{display:'none'}} id="Company" name="Company" readOnly />
          <input type="text" style={{display:'none'}} id="Email" name="Email" readOnly />
          <input type="text" style={{display:'none'}} id="Phone" name="Phone" readOnly />
          <textarea id="Description" name="Description" style={{ display: 'none' }} readOnly />
        </form>
      </div>
    </>
  );
}
