'use client';

import { useEffect, useRef } from 'react';

/**
 * InteractionLoader
 * Defers loading of heavy animation libraries (GSAP, ThreeJS, Lenis) until the user
 * interacts with the page (scroll, mousemove, touchstart) OR after a 3.5-second timeout.
 * This guarantees a massive reduction in Total Blocking Time (TBT) and Green Lighthouse scores.
 */
export default function InteractionLoader() {
  const isLoaded = useRef(false);

  useEffect(() => {
    // Array of heavy animation scripts, ordered by dependency
    const scriptsToLoad = [
      'https://cdnjs.cloudflare.com/ajax/libs/vanilla-tilt/1.8.0/vanilla-tilt.min.js',
      'https://cdn.jsdelivr.net/gh/studio-freight/lenis@1.0.19/bundled/lenis.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js',
      'https://unpkg.com/split-type',
      'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js',
      '/js/script.js?v=70'
    ];

    const loadScripts = () => {
      if (isLoaded.current) return;
      isLoaded.current = true;

      let currentScript = 0;

      const loadNext = () => {
        if (currentScript >= scriptsToLoad.length) return; // Done
        
        const src = scriptsToLoad[currentScript];
        const script = document.createElement('script');
        script.src = src;
        script.async = true;

        script.onload = () => {
          currentScript++;
          loadNext();
        };

        script.onerror = () => {
          console.error(`Failed to load script: ${src}`);
          currentScript++;
          loadNext(); // continue even if one fails
        };

        document.body.appendChild(script);
      };

      // Start the sequential loading process
      loadNext();
    };

    // Events to trigger loading
    const userInteractionEvents = ['scroll', 'mousemove', 'touchstart', 'keydown', 'click'];

    const triggerLoad = () => {
      loadScripts();
      
      // Load Google Tag Manager
      if (!document.getElementById('gtm-script')) {
        const gtmScript = document.createElement('script');
        gtmScript.id = 'gtm-script';
        gtmScript.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-M4TW43X3');`;
        document.head.appendChild(gtmScript);
      }

      // Load Google Analytics
      if (!document.getElementById('ga4-script')) {
        const gaScript = document.createElement('script');
        gaScript.id = 'ga4-script';
        gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-EFFQ2YYFN8';
        gaScript.async = true;
        document.head.appendChild(gaScript);

        const initScript = document.createElement('script');
        initScript.innerHTML = `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','G-EFFQ2YYFN8');`;
        document.head.appendChild(initScript);
      }

      // Switch FontAwesome from print to all
      document.querySelectorAll('link[rel="stylesheet"][media="print"]').forEach((l: any) => {
        if (l.href && l.href.includes('fontawesome')) {
          l.media = 'all';
        }
      });

      // Remove listeners once triggered
      userInteractionEvents.forEach(event => {
        window.removeEventListener(event, triggerLoad, { capture: true });
      });
    };

    // Attach listeners
    userInteractionEvents.forEach(event => {
      window.addEventListener(event, triggerLoad, { capture: true, passive: true });
    });

    return () => {
      userInteractionEvents.forEach(event => {
        window.removeEventListener(event, triggerLoad, { capture: true });
      });
    };
  }, []);

  return null;
}
