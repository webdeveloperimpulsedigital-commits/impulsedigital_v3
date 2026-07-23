'use client';

import { useReportWebVitals } from 'next/web-vitals';

export default function WebVitals() {
  useReportWebVitals((metric) => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'web_vital',
      web_vital_name: metric.name,
      web_vital_id: metric.id,
      web_vital_value: metric.value,
      web_vital_delta: metric.delta,
      web_vital_rating: metric.rating,
      web_vital_navigation_type: metric.navigationType,
    });
  });

  return null;
}
