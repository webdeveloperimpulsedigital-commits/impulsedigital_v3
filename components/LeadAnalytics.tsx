'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import {
  consumeVerifiedLeadSuccess,
  fireLeadEvent,
  initialiseLeadAnalyticsContext,
  leadFormLocation,
} from '@/lib/leadAnalytics';

export default function LeadAnalytics() {
  const pathname = usePathname();

  useEffect(() => {
    initialiseLeadAnalyticsContext();

    if (pathname === '/thank-you/' || pathname === '/ae/thank-you/') {
      consumeVerifiedLeadSuccess();
    }

    const form = document.getElementById('webform1132219000000597005');
    let formObserver: IntersectionObserver | undefined;
    let removeFormStartListener: (() => void) | undefined;
    if (form) {
      let formViewed = false;
      let formStarted = false;
      formObserver = new IntersectionObserver((entries) => {
        if (!formViewed && entries.some((entry) => entry.isIntersecting)) {
          formViewed = true;
          fireLeadEvent('lead_form_view', {
            form_page: pathname,
            form_location: leadFormLocation(pathname),
          });
          formObserver?.disconnect();
        }
      }, { threshold: 0.25 });
      formObserver.observe(form);

      const onFormStart = (event: Event) => {
        const target = event.target as HTMLElement;
        if (formStarted || !target.matches('input:not([type="hidden"]), textarea, select')) return;
        formStarted = true;
        fireLeadEvent('lead_form_start', {
          form_page: pathname,
          form_location: leadFormLocation(pathname),
        });
      };
      form.addEventListener('focusin', onFormStart);
      removeFormStartListener = () => form.removeEventListener('focusin', onFormStart);
    }

    const onClick = (event: MouseEvent) => {
      const target = (event.target as Element | null)?.closest('a, button');
      if (!target) return;

      const href = target instanceof HTMLAnchorElement ? target.getAttribute('href') || '' : '';
      if (href.startsWith('tel:')) {
        fireLeadEvent('phone_click', { cta_page: pathname });
        return;
      }
      if (href.startsWith('mailto:')) {
        fireLeadEvent('email_click', { cta_page: pathname });
        return;
      }
      if (href.includes('contact-us') || href === '#connect') {
        fireLeadEvent('lead_cta_click', {
          cta_page: pathname,
          cta_name: target.textContent?.trim().replace(/\s+/g, ' ').slice(0, 100) || 'contact_cta',
        });
      }
    };
    document.addEventListener('click', onClick);

    return () => {
      formObserver?.disconnect();
      removeFormStartListener?.();
      document.removeEventListener('click', onClick);
    };
  }, [pathname]);

  return null;
}
