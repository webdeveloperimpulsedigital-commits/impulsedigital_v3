'use client';

import { useEffect, useLayoutEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * ClientProviders — runs client-side route lifecycle logic.
 * Replaces ScrollToTop + RouteAnimationState from the old react-router-dom App.tsx.
 * Uses Next.js usePathname() instead of react-router's useLocation().
 */
export default function ClientProviders() {
  const pathname = usePathname();

  // Disable browser automatic scroll restoration and force scroll to top on route change
  useLayoutEffect(() => {
    if (typeof window === 'undefined') return;

    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const forceScrollToTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;

      if ((window as any).globalLenis) {
        (window as any).globalLenis.stop();
        (window as any).globalLenis.scrollTo('top', { immediate: true, force: true });
        (window as any).globalLenis.start();
      }
    };

    forceScrollToTop();
    const t1 = setTimeout(forceScrollToTop, 50);
    const t2 = setTimeout(forceScrollToTop, 150);

    // Re-initialize SplitType for new page sections
    const t3 = setTimeout(() => {
      const { gsap, ScrollTrigger, SplitType } = window as any;
      if (gsap && SplitType && ScrollTrigger) {
        document.querySelectorAll('.split-text:not(.split-done)').forEach((text: any) => {
          text.classList.add('split-done');
          const split = new SplitType(text, { types: 'lines, words' });
          if (split.lines) {
            split.lines.forEach((line: any) => {
              const wrapper = document.createElement('div');
              wrapper.classList.add('line-wrapper');
              line.parentNode?.insertBefore(wrapper, line);
              wrapper.appendChild(line);
            });
          }

          if (split.words && split.words.length) {
            const splitStart = document.body.classList.contains('service-page')
              ? 'top 68%'
              : 'top 95%';
            gsap.fromTo(
              split.words,
              { yPercent: 120, opacity: 0 },
              {
                scrollTrigger: {
                  trigger: text,
                  start: splitStart,
                  toggleActions: 'play none none reverse',
                },
                yPercent: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.015,
                ease: 'power4.out',
              }
            );
          }
        });
        ScrollTrigger.refresh();
      }
    }, 150);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [pathname]);

  // Route animation state — sets data attribute and dispatches custom event
  useLayoutEffect(() => {
    if (typeof window === 'undefined') return;

    const activePathname = pathname || '/';
    document.body.dataset.impulseRoute = activePathname;

    const background = (window as any).impulseBackground;
    if (background?.resetForRoute) {
      background.resetForRoute(activePathname);
    }

    window.dispatchEvent(
      new CustomEvent('impulse:route-change', {
        detail: { pathname: activePathname },
      })
    );
  }, [pathname]);

  return null;
}
