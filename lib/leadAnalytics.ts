'use client';

export type LeadRegion = 'india' | 'uae';

type LeadEventParameters = Record<string, string | number | boolean | undefined>;

const SUBMISSION_KEY = 'impulse_lead_submission';
const LANDING_KEY = 'impulse_landing_page';
const ATTRIBUTION_KEY = 'impulse_attribution';
const INTERNAL_TEST_KEY = 'impulse_internal_test';
const MAX_SUBMISSION_AGE_MS = 30 * 60 * 1000;
const PRODUCTION_HOSTS = new Set([
  'www.theimpulsedigital.com',
  'theimpulsedigital.com',
]);

function isProductionPage(): boolean {
  return typeof window !== 'undefined'
    && PRODUCTION_HOSTS.has(window.location.hostname)
    && !window.location.pathname.startsWith('/admin/');
}

function regionForPath(pathname = window.location.pathname): LeadRegion {
  return pathname === '/ae' || pathname.startsWith('/ae/') ? 'uae' : 'india';
}

function formLocation(pathname: string): string {
  if (pathname === '/' || pathname === '/ae' || pathname === '/ae/') return 'homepage';
  if (pathname.endsWith('/contact-us/') || pathname.endsWith('/contact-us')) return 'contact_page';
  return 'service_page';
}

function currentPageAttribution() {
  const params = new URLSearchParams(window.location.search);
  let referrer: URL | null = null;
  try {
    referrer = document.referrer ? new URL(document.referrer) : null;
  } catch {
    referrer = null;
  }
  const source = params.get('utm_source')
    || referrer?.hostname.replace(/^www\./, '')
    || 'direct';
  const medium = params.get('utm_medium')
    || (referrer
      ? (/google\.|bing\.|yahoo\.|duckduckgo\./i.test(referrer.hostname) ? 'organic' : 'referral')
      : 'none');

  return {
    traffic_source: source,
    medium,
    campaign: params.get('utm_campaign') || 'none',
  };
}

function attribution() {
  const saved = sessionStorage.getItem(ATTRIBUTION_KEY);
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch {
      sessionStorage.removeItem(ATTRIBUTION_KEY);
    }
  }

  const initial = currentPageAttribution();
  sessionStorage.setItem(ATTRIBUTION_KEY, JSON.stringify(initial));
  return initial;
}

export function initialiseLeadAnalyticsContext() {
  if (!isProductionPage()) return;

  const params = new URLSearchParams(window.location.search);
  if (params.get('internal_test') === '1') {
    sessionStorage.setItem(INTERNAL_TEST_KEY, '1');
  }
  if (!sessionStorage.getItem(LANDING_KEY)) {
    sessionStorage.setItem(LANDING_KEY, `${window.location.pathname}${window.location.search}`);
  }
  attribution();
}

export function fireLeadEvent(name: string, parameters: LeadEventParameters = {}) {
  if (!isProductionPage()) return;

  initialiseLeadAnalyticsContext();
  const eventParameters = {
    region: regionForPath(),
    landing_page: sessionStorage.getItem(LANDING_KEY) || window.location.pathname,
    internal_test: sessionStorage.getItem(INTERNAL_TEST_KEY) === '1',
    ...attribution(),
    ...parameters,
  };

  const gtag = (window as any).gtag;
  if (typeof gtag === 'function') {
    gtag('event', name, eventParameters);
  }

  const clarity = (window as any).clarity;
  if (typeof clarity === 'function') {
    clarity('event', name);
    clarity('set', 'lead_region', String(eventParameters.region));
    clarity('set', 'internal_test', eventParameters.internal_test ? 'true' : 'false');
  }
}

export function markLeadFormAttempt(formPage = window.location.pathname, location?: string) {
  if (!isProductionPage()) return;

  const submission = {
    region: regionForPath(formPage),
    form_page: formPage,
    form_location: location || formLocation(formPage),
    landing_page: sessionStorage.getItem(LANDING_KEY) || formPage,
    timestamp: Date.now(),
  };
  sessionStorage.setItem(SUBMISSION_KEY, JSON.stringify(submission));
  fireLeadEvent('lead_form_attempt', submission);
}

export function consumeVerifiedLeadSuccess() {
  if (!isProductionPage()) return;

  const raw = sessionStorage.getItem(SUBMISSION_KEY);
  if (!raw) return;

  sessionStorage.removeItem(SUBMISSION_KEY);
  try {
    const submission = JSON.parse(raw);
    const expectedRegion = regionForPath();
    const isRecent = Number.isFinite(submission.timestamp)
      && Date.now() - submission.timestamp <= MAX_SUBMISSION_AGE_MS;
    if (!isRecent || submission.region !== expectedRegion) return;

    fireLeadEvent('lead_form_success', {
      form_page: submission.form_page,
      form_location: submission.form_location,
      landing_page: submission.landing_page,
    });
  } catch {
    // Invalid or stale client state must never create a conversion.
  }
}

export function leadFormLocation(pathname = window.location.pathname) {
  return formLocation(pathname);
}
