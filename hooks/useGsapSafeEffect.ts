'use client';

import { useEffect } from 'react';

/**
 * Custom hook to safely initialize GSAP/ScrollTrigger/SplitType animations.
 * Because these scripts are deferred via InteractionLoader to optimize performance,
 * they may not be loaded when the component mounts. InteractionLoader emits a readiness
 * event after its ordered script queue completes, so effects can initialize without
 * background polling or an arbitrary timeout.
 */
export function useGsapSafeEffect(
  callback: (gsap: any, ScrollTrigger: any, SplitType?: any) => void | (() => void),
  dependencies: any[] = [],
  requireSplitType: boolean = false
) {
  useEffect(() => {
    if (typeof window === 'undefined') return;

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

    window.addEventListener('impulse:animations-ready', init);

    return () => {
      window.removeEventListener('impulse:animations-ready', init);
      if (cleanupFn) cleanupFn();
    };
  }, dependencies);
}
