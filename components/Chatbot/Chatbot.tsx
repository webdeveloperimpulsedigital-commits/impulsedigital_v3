'use client';

import React, { useState, useEffect, useRef } from 'react';
import styles from './Chatbot.module.css';
import { usePathname } from 'next/navigation';
import ChatHeader from './ChatHeader';
import ChatMessages from './ChatMessages';
import ChatInput from './ChatInput';


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
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "How can I help you today?",
    },
  ]);
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

  const queryCache = useRef<Map<string, any>>(new Map());
  const messagesEndRef = useRef<HTMLDivElement>(null);
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
      chatHistory?: { role: string; content: string }[];
    },
    token: string
  ) => {
    if (leadSubmittedRef.current) return;
    leadSubmittedRef.current = true;

    try {
      if (zohoFormRef && zohoFormRef.current) {
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

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hn = window.location.hostname;
      setIsLocalhost(hn === 'localhost' || hn === '127.0.0.1' || hn.startsWith('192.168.'));
    }
  }, []);

  useEffect(() => {
    let greeting = "How can I help you today?";

    if (pathname) {
      if (pathname.includes('/search-engine-optimisation')) {
        greeting = "Looking to grow your search traffic and rank higher on Google? Let's discuss your SEO goals!";
      } else if (pathname.includes('/video-production') || pathname.includes('/brand-film')) {
        greeting = "Hey! Need high-impact brand films or AI-powered video production? Tell me about your video requirements.";
      } else if (pathname.includes('/website-development')) {
        greeting = "Looking to build a premium, high-performance website? Let's chat about what you need.";
      } else if (pathname.includes('/social-media-marketing')) {
        greeting = "Hey there! Want to elevate your brand's presence across social platforms? Let's talk content strategy.";
      } else if (pathname.includes('/careers')) {
        greeting = "Hey! Interested in joining the team at Impulse Digital? Ask me anything about our open roles!";
      }
    }

    setMessages((prev) => {
      // If a conversation has already started (user messages exist or history is longer than 1), do not reset it
      const hasStarted = prev.some((m) => m.role === 'user') || prev.length > 1;
      if (hasStarted) return prev;

      // If the greeting is already correct, do not update state to prevent unnecessary re-renders
      if (prev.length === 1 && prev[0].role === 'assistant' && prev[0].content === greeting) {
        return prev;
      }

      return [
        {
          role: 'assistant',
          content: greeting,
        },
      ];
    });
  }, [pathname]);

  useEffect(() => {
    const loadZohoScripts = () => {
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

      if (!document.getElementById('wf_anal')) {
        const s = document.createElement('script');
        s.id = 'wf_anal';
        s.src = 'https://crm.zohopublic.in/crm/WebFormAnalyticsServeServlet?rid=067668c42525f92cfed5f91050cdbfa8489c91874a5a54216702fcf877cd09f2852c07a02518ad7dce00158ab836b3bbgidf49cea193c2cf8b393426a36d01b0ab349078788f5831fbf064b6096965a444dgid0c1d92dd9017ebb9f13e39c13cebbc5bf318167b2b6f826f9a7040e44cc9d9abgidc6e30ae4a0a75b59822449105d7bdf8697ffbb537da4c276848fdfd4b89026a2&tw=6415fe8afd736bd3ade910387402f0e6a9a16c831797ff621152ee2c123cbbf3';
        s.defer = true;
        document.body.appendChild(s);
      }
    };

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

    return () => {
      cleanupListeners();
    };
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading, recommendationGiven, showCaptcha, captchaVerified]);

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
      recommendedDirection: leadForm.recommendedDirection,
      chatHistory: messages.map(m => ({ role: m.role, content: m.content }))
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

  const executeQuery = async (query: string) => {
    const userMessage: Message = { role: 'user', content: query };
    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);
    setIsLoading(true);

    try {
      let data: any = null;

      if (queryCache.current.has(query)) {
        data = queryCache.current.get(query);
        console.log('Serving chat response from client cache:', query);
      } else {
        const chatHistory = updatedMessages.slice(1);

        const response = await fetch('/api/chat/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ messages: chatHistory }),
        });

        try {
          data = await response.json();
        } catch (jsonErr) {
          console.error('Error parsing response JSON:', jsonErr);
        }

        if (!response.ok) {
          throw new Error(data?.message || 'Network response error');
        }
        
        if (data) {
          queryCache.current.set(query, data);
        }
      }

      console.log('Chatbot response data:', data);

      if (data && data.message) {
        const paragraphs = data.message.split('\n\n').filter((p: string) => p.trim() !== '');
        
        const deliverMessages = async () => {
          for (let i = 0; i < paragraphs.length; i++) {
            const paragraph = paragraphs[i];
            setIsLoading(true);
            
            const delay = Math.max(600, Math.min(2000, paragraph.length * 10));
            await new Promise((resolve) => setTimeout(resolve, delay));
            
            setMessages((prev) => [...prev, { role: 'assistant', content: paragraph }]);
            
            if (i < paragraphs.length - 1) {
              setIsLoading(false);
              await new Promise((resolve) => setTimeout(resolve, 400));
            }
          }
          setIsLoading(false);
        };
        
        await deliverMessages();
      }

      if (data && data.metadata) {
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

  const handleSend = async (query: string) => {
    await executeQuery(query);
  };

  const handleWhatsAppHandoff = () => {
    const { name, email, phone, company, userRequirement } = leadForm;

    const reqPart = userRequirement 
      ? userRequirement 
      : "I came from the website to discuss my growth requirements.";

    const messageTemplate = `Hello Impulse Digital,

I came from the website to discuss my growth requirement.

Summary of Requirement:
${reqPart}

My Details:
- Name: ${name || 'Not specified'}
- Email: ${email || 'Not specified'}
- Phone: ${phone || 'Not specified'}
- Company: ${company || 'Not specified'}`;

    const encodedMessage = encodeURIComponent(messageTemplate);
    const whatsappUrl = `https://wa.me/919769285224?text=${encodedMessage}`;
    
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
      {!isOpen && (
        <div 
          className={styles.chatTooltip}
          onClick={handleToggle}
          id="chatbot-trigger-tooltip"
        >
          <span className={styles.tooltipDot}></span>
          <span>How can we help you today?</span>
        </div>
      )}
      <button 
        className={`${styles.chatTrigger} ${isOpen ? styles.active : ''}`} 
        onClick={handleToggle}
        aria-label="Open AI Growth Assistant"
        id="chatbot-trigger-btn"
      >
        <span className={styles.chatTriggerIcon}>
          {isOpen ? (
            <svg
              width="20"
              height="20"
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
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ display: 'block' }}
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" fill="rgba(255, 255, 255, 0.15)"></path>
              <path d="M8 10h8" strokeWidth="2"></path>
              <path d="M8 14h6" strokeWidth="2"></path>
            </svg>
          )}
        </span>
      </button>

      {/* Chat window */}
      <div 
        className={`${styles.chatContainer} ${isOpen ? styles.open : ''}`}
        id="chatbot-window-container"
      >
        <ChatHeader handleToggle={handleToggle} />

        <ChatMessages
          messages={messages}
          isLoading={isLoading}
          showCaptcha={showCaptcha}
          captchaVerified={captchaVerified}
          isLocalhost={isLocalhost}
          leadForm={leadForm}
          handleWhatsAppHandoff={handleWhatsAppHandoff}
          messagesEndRef={messagesEndRef}
        />

        <ChatInput
          isLoading={isLoading}
          onSend={handleSend}
        />

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
          <input type="text" style={{display:'none'}} id="ldeskuid" name="ldeskuid" readOnly />
          <input type="text" style={{display:'none'}} id="LDTuvid" name="LDTuvid" readOnly />
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
