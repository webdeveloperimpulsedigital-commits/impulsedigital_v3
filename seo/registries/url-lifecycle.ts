export type UrlLifecycleDecision = {
  path: string;
  state: 'decision_required';
  evidence: {
    clicks: number | null;
    impressions: number | null;
  };
  requiredDecision: 'redirect' | 'restore' | 'gone';
  note: string;
};

/**
 * These historical URLs have measurable demand but no factually verified
 * successor. They intentionally remain outside the redirect registry until the
 * business owner chooses redirect, restoration, or 410 Gone.
 */
export const DECISION_REQUIRED_URLS: readonly UrlLifecycleDecision[] = [
  {
    path: '/online-paid-advertising/',
    state: 'decision_required',
    evidence: { clicks: null, impressions: null },
    requiredDecision: 'redirect',
    note: 'Confirm whether Campaign Intelligence is a true intent-equivalent successor.',
  },
  {
    path: '/services/content-writing-services/',
    state: 'decision_required',
    evidence: { clicks: null, impressions: null },
    requiredDecision: 'redirect',
    note: 'No current content-writing service page has been verified as equivalent.',
  },
  {
    path: '/content-marketing-services/',
    state: 'decision_required',
    evidence: { clicks: null, impressions: null },
    requiredDecision: 'redirect',
    note: 'No current content-marketing service page has been verified as equivalent.',
  },
  {
    path: '/slideshare-ppt/',
    state: 'decision_required',
    evidence: { clicks: null, impressions: null },
    requiredDecision: 'restore',
    note: 'Confirm whether the current PPT gallery is the intended successor.',
  },
  {
    path: '/resources/slideshare-ppt/',
    state: 'decision_required',
    evidence: { clicks: null, impressions: null },
    requiredDecision: 'restore',
    note: 'Confirm whether the current PPT gallery is the intended successor.',
  },
  {
    path: '/case-studies-vendiman/',
    state: 'decision_required',
    evidence: { clicks: null, impressions: null },
    requiredDecision: 'gone',
    note: 'No replacement case study exists in the repository.',
  },
];
