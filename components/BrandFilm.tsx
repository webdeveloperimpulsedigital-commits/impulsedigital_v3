// @ts-nocheck
'use client';


import React, { useRef, useState, useEffect } from 'react';

const BrandFilm: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const currentVideoRef = videoRef.current;
    
    if (!currentVideoRef) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' } // Load slightly before it comes into view
    );

    observer.observe(currentVideoRef);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="brand-film" aria-label="Brand film">
      <div className="brand-film-frame">
        <video 
          ref={videoRef}
          className="brand-film-video" 
          autoPlay 
          muted 
          loop 
          playsInline 
          preload="none" 
          aria-hidden="true"
        >
          {inView && <source src="/Impulse Video.mp4" type="video/mp4" />}
        </video>
      </div>
    </section>
  );
};

export default BrandFilm;
