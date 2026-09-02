// @ts-nocheck
'use client';


import React, { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

interface ContactProps {
  title?: string;
}

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '6LdaK0osAAAAADC8CEqZGlK1VgN2CkYB-iRXfn3y';

const Contact: React.FC<ContactProps> = ({ title }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const pathname = usePathname();
  const isAe = pathname === '/ae' || Boolean(pathname?.startsWith('/ae/'));

  useEffect(() => {
    if (formRef.current) {
      const fields = formRef.current.querySelectorAll('input:not([type="hidden"]), textarea');
      const handleFocus = (e: Event) => {
        const field = e.target as HTMLInputElement | HTMLTextAreaElement;
        field.closest('label')?.classList.add('active');
      };
      const handleBlur = (e: Event) => {
        const field = e.target as HTMLInputElement | HTMLTextAreaElement;
        field.closest('label')?.classList.toggle('active', Boolean(field.value));
      };

      fields.forEach((field) => {
        field.addEventListener('focus', handleFocus);
        field.addEventListener('blur', handleBlur);
      });

      return () => {
        fields.forEach((field) => {
          field.removeEventListener('focus', handleFocus);
          field.removeEventListener('blur', handleBlur);
        });
      };
    }
  }, []);

  useEffect(() => {
    let hasLoaded = false;
    let timeoutId: NodeJS.Timeout;

    const loadThirdPartyScripts = () => {
      if (hasLoaded) return;
      hasLoaded = true;

      // Clean up event listeners
      cleanupListeners();

      // 1. Load reCAPTCHA v3
      if (!document.getElementById('recaptcha-v3-script')) {
        const script = document.createElement('script');
        script.id = 'recaptcha-v3-script';
        script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
      }

      // 2. Load Zoho SalesIQ
      if (!document.getElementById('zsiqscript')) {
        const $zoho = (window as any).$zoho || {};
        (window as any).$zoho = $zoho;
        $zoho.salesiq = $zoho.salesiq || {
          widgetcode: 'siqe8e2de51a58ff011f46d1d5718469d24fb1812f710b8e38bd932663adc239364',
          values: {},
          ready: function() {
            try {
              if ($zoho.salesiq && $zoho.salesiq.floatbutton) {
                $zoho.salesiq.floatbutton.visible('hide');
              }
            } catch (e) {
              console.error('Error hiding Zoho floatbutton:', e);
            }
          }
        };
        const s = document.createElement('script');
        s.type = 'text/javascript';
        s.id = 'zsiqscript';
        s.defer = true;
        s.src = 'https://salesiq.zoho.in/widget';
        document.body.appendChild(s);
      }

      // 3. Load Zoho WebForm Analytics
      if (!document.getElementById('wf_anal')) {
        const s = document.createElement('script');
        s.id = 'wf_anal';
        s.src = 'https://crm.zohopublic.in/crm/WebFormAnalyticsServeServlet?rid=067668c42525f92cfed5f91050cdbfa8489c91874a5a54216702fcf877cd09f2852c07a02518ad7dce00158ab836b3bbgidf49cea193c2cf8b393426a36d01b0ab349078788f5831fbf064b6096965a444dgid0c1d92dd9017ebb9f13e39c13cebbc5bf318167b2b6f826f9a7040e44cc9d9abgidc6e30ae4a0a75b59822449105d7bdf8697ffbb537da4c276848fdfd4b89026a2&tw=6415fe8afd736bd3ade910387402f0e6a9a16c831797ff621152ee2c123cbbf3';
        s.defer = true;
        document.body.appendChild(s);
      }
    };

    const triggerLoad = () => {
      loadThirdPartyScripts();
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
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };

    if ((window as any).grecaptcha) {
      loadThirdPartyScripts();
    } else {
      addListeners();
    }

    return () => {
      cleanupListeners();
    };
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const company = form.elements.namedItem('Company') as HTMLInputElement;
    const name = form.elements.namedItem('Last Name') as HTMLInputElement;
    const email = form.elements.namedItem('Email') as HTMLInputElement;
    const phone = form.elements.namedItem('Phone') as HTMLInputElement;

    if (!company || company.value.trim().length === 0) {
      alert('Company cannot be empty');
      company?.focus();
      return;
    }
    if (!name || name.value.trim().length === 0) {
      alert('Name cannot be empty');
      name?.focus();
      return;
    }
    if (!email || email.value.trim().length === 0) {
      alert('Email cannot be empty');
      email?.focus();
      return;
    }
    if (!phone || phone.value.trim().length === 0) {
      alert('Phone cannot be empty');
      phone?.focus();
      return;
    }

    const uploadedFiles = document.getElementById('theFile1132219000000597005') as HTMLInputElement;
    if (uploadedFiles && uploadedFiles.files) {
      if (uploadedFiles.files.length > 3) {
        alert('You can upload a maximum of three files at a time.');
        uploadedFiles.focus();
        return;
      }
      let totalFileSize = 0;
      for (let i = 0; i < uploadedFiles.files.length; i++) {
        totalFileSize += uploadedFiles.files[i].size;
      }
      if (totalFileSize > 20971520) {
        alert('Total file(s) size should not exceed 20MB.');
        uploadedFiles.focus();
        return;
      }
    }

    try {
      const $zoho = (window as any).$zoho;
      if ($zoho && $zoho.salesiq) {
        const LDTuvidObj = form.elements.namedItem('LDTuvid') as HTMLInputElement;
        if (LDTuvidObj) {
          LDTuvidObj.value = $zoho.salesiq.visitor.uniqueid() || '';
        }

        let fullName = name.value;
        const firstNameObj = form.elements.namedItem('First Name') as HTMLInputElement;
        if (firstNameObj) {
          fullName = firstNameObj.value + ' ' + fullName;
        }
        $zoho.salesiq.visitor.name(fullName);

        if (email) {
          $zoho.salesiq.visitor.email(email.value);
        }
      }
    } catch (err) {
      console.error('Error tracking visitor:', err);
    }

    const emailVal = email.value;
    if (emailVal.replace(/^\s+|\s+$/g, '').length !== 0) {
      const atpos = emailVal.indexOf('@');
      const dotpos = emailVal.lastIndexOf('.');
      if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= emailVal.length) {
        alert('Please enter a valid email address.');
        email.focus();
        return;
      }
    }

    const urlparams = new URLSearchParams(window.location.search);
    if (urlparams.has('service') && urlparams.get('service') === 'smarturl') {
      const service = urlparams.get('service') as string;
      const smarturlfield = document.createElement('input');
      smarturlfield.setAttribute('type', 'hidden');
      smarturlfield.setAttribute('value', service);
      smarturlfield.setAttribute('name', 'service');
      form.appendChild(smarturlfield);
    }

    const submitBtn = form.querySelector('.contact-submit') as HTMLButtonElement;
    if (submitBtn) {
      submitBtn.setAttribute('disabled', 'true');
    }

    const submitWithToken = (token?: string) => {
      let captchaInput = form.elements.namedItem('g-recaptcha-response') as HTMLInputElement;
      if (!captchaInput) {
        captchaInput = document.createElement('input');
        captchaInput.type = 'hidden';
        captchaInput.name = 'g-recaptcha-response';
        captchaInput.id = 'g-recaptcha-response';
        form.appendChild(captchaInput);
      }
      if (token) {
        captchaInput.value = token;
      }
      form.submit();
    };

    const grecaptcha = (window as any).grecaptcha;
    if (grecaptcha && typeof grecaptcha.ready === 'function') {
      grecaptcha.ready(async () => {
        try {
          const token = await grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: 'submit' });
          submitWithToken(token);
        } catch (error) {
          console.error('reCAPTCHA v3 execution failed:', error);
          submitWithToken();
        }
      });
    } else {
      submitWithToken();
    }
  };

  return (
    <section id="connect" className="contact glass-panel">
      <div className="container" style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap' }}>
        <div className="contact-left" style={{ flex: '1 1 400px', position: 'relative', overflow: 'visible' }}>
          <h2 className="section-heading split-text" style={{ position: 'relative', zIndex: 1 }} dangerouslySetInnerHTML={{ __html: title || "Let's build<br>something<br>together." }}>
          </h2>
          <div className="contact-details" style={{ marginTop: '3rem', position: 'relative', zIndex: 1 }}>
            <a href={isAe ? "tel:+97145276816" : "tel:+919769285224"} className="contact-channel">
              <div className="contact-channel-icon">
                <i className="fas fa-phone"></i>
              </div>
              <div className="contact-channel-body">
                <span className="contact-channel-label">Call us</span>
                <span className="contact-channel-value">{isAe ? "+97145276816" : "+91-9769285224"}</span>
              </div>
              <div className="contact-channel-arrow"><i className="fas fa-arrow-right"></i></div>
            </a>
            <a href="mailto:collabs@theimpulsedigital.com" className="contact-channel">
              <div className="contact-channel-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="contact-channel-body">
                <span className="contact-channel-label">Email us</span>
                <span className="contact-channel-value">collabs@theimpulsedigital.com</span>
              </div>
              <div className="contact-channel-arrow"><i className="fas fa-arrow-right"></i></div>
            </a>
          </div>
        </div>
        <div className="contact-right contact-page" id="contact-form" style={{ flex: '1 1 500px' }}>
            <form 
              id="webform1132219000000597005"
              name="WebToLeads1132219000000597005"
              action="https://crm.zoho.in/crm/WebToLeadForm"
              method="POST"
              onSubmit={handleSubmit}
              acceptCharset="UTF-8"
              className="contact-shell-form" 
              encType="multipart/form-data" 
              ref={formRef}
            >
              <input type="text" style={{display:'none'}} name="xnQsjsdp" value="3fdab897f0bcfb046c089a96653ff3ce3e052ac4ee2710bf1975f74e718c56f5" readOnly />
              <input type="hidden" name="zc_gad" id="zc_gad" value="" />
              <input type="text" style={{display:'none'}} name="xmIwtLD" value="73b678a6bc6723d2f2228f3b5916f3593bf43d1fbc528d305c97cc00bea7dec6afe8822544be20609bd9f6ee44997ec6" readOnly />
              <input type="text" style={{display:'none'}} name="actionType" value="TGVhZHM=" readOnly />
              <input type="text" style={{display:'none'}} name="returnURL" value={isAe ? "https://www.theimpulsedigital.com/ae/thank-you/" : "https://www.theimpulsedigital.com/thank-you/"} readOnly />
              <input type="hidden" name="Lead Source" value="Website Contact Us" />
              {/* Do not remove this code. */}
              <input type="text" style={{display:'none'}} id="ldeskuid" name="ldeskuid" readOnly />
              <input type="text" style={{display:'none'}} id="LDTuvid" name="LDTuvid" readOnly />
              {/* Do not remove this code. */}
              <input type="text" style={{display: 'none'}} name="aG9uZXlwb3Q" value="" readOnly />

              <div className="contact-form-grid">
                <label>
                  <span>Company name <span style={{color: '#ff4d4d'}}>*</span></span>
                  <input type="text" id="Company" name="Company" autoComplete="organization" required />
                </label>
                <label>
                  <span>Your name <span style={{color: '#ff4d4d'}}>*</span></span>
                  <input type="text" id="Last_Name" name="Last Name" autoComplete="name" required />
                </label>
                <label>
                  <span>Email <span style={{color: '#ff4d4d'}}>*</span></span>
                  <input type="email" id="Email" name="Email" autoComplete="email" required />
                </label>
                <label>
                  <span>Phone number <span style={{color: '#ff4d4d'}}>*</span></span>
                  <input type="tel" id="Phone" name="Phone" autoComplete="tel" required />
                </label>
              </div>
              <label className="contact-message-field">
                <span>Message</span>
                <textarea id="Description" name="Description" rows={5} placeholder="What is the problem you want us to understand?"></textarea>
              </label>

              <input type="hidden" name="g-recaptcha-response" id="g-recaptcha-response" />

              <button type="submit" className="contact-submit">
                <span>Start a Conversation</span>
              </button>

              <p style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.45)', marginTop: '0.75rem', lineHeight: '1.4' }}>
                This site is protected by reCAPTCHA and the Google{' '}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255, 255, 255, 0.65)', textDecoration: 'underline' }}>Privacy Policy</a> and{' '}
                <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255, 255, 255, 0.65)', textDecoration: 'underline' }}>Terms of Service</a> apply.
              </p>
            </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
