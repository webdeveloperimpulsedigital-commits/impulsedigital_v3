'use client';

import { useEffect } from 'react';

/**
 * Custom hook to safely initialize GSAP/ScrollTrigger/SplitType animations.
 * Because these scripts are deferred via InteractionLoader to optimize performance,
 * they may not be loaded when the component mounts. This hook polls until they are
 * ready on window before invoking the callback, preventing "window.gsap is not defined"
 * type errors on direct page reloads.
 */
export function useGsapSafeEffect(
  callback: (gsap: any, ScrollTrigger: any, SplitType?: any) => void | (() => void),
  dependencies: any[] = [],
  requireSplitType: boolean = false
) {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    let checkInterval: NodeJS.Timeout;
    let timeoutId: NodeJS.Timeout;
    let cleanupFn: (() => void) | void;
    let initialized = false;

    const init = () => {
      const gsap = (window as any).gsap;
      const ScrollTrigger = (window as any).ScrollTrigger;
      const SplitType = (window as any).SplitType;

      const isReady = gsap && ScrollTrigger && (!requireSplitType || SplitType);

      if (isReady && !initialized) {
        initialized = true;
        cleanupFn = callback(gsap, ScrollTrigger, SplitType);
      }
    };

    // Try immediate execution
    init();

    if (!initialized) {
      checkInterval = setInterval(() => {
        init();
      }, 100);

      // 15 seconds timeout fallback to prevent memory leaks
      timeoutId = setTimeout(() => {
        clearInterval(checkInterval);
      }, 15000);
    }

    return () => {
      if (checkInterval) clearInterval(checkInterval);
      if (timeoutId) clearTimeout(timeoutId);
      if (cleanupFn) cleanupFn();
    };
  }, dependencies);
}
