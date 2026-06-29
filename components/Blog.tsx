// @ts-nocheck
'use client';

import React, { useRef, useState, useEffect } from 'react';
import Link from '@/components/RegionLink';

const Blog: React.FC = () => {
  const blogSliderRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch('/api/blog-posts');
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data) && data.length > 0) {
            setPosts(data);
          }
        }
      } catch (err) {
        console.error('Error fetching blog posts:', err);
      }
    }
    fetchPosts();
  }, []);

  const handleScroll = () => {
    if (blogSliderRef.current) {
      const slider = blogSliderRef.current;
      const scrollLeft = slider.scrollLeft;
      const sliderWidth = slider.clientWidth;
      const scrollWidth = slider.scrollWidth;
      const children = Array.from(slider.children);

      if (scrollLeft <= 10) {
        setActiveIndex(0);
        return;
      }

      if (scrollLeft + sliderWidth >= scrollWidth - 10) {
        setActiveIndex(children.length - 1);
        return;
      }

      const sliderCenter = scrollLeft + sliderWidth / 2;
      let closestIndex = 0;
      let minDistance = Infinity;

      children.forEach((child, index) => {
        const htmlChild = child as HTMLElement;
        const childCenter = htmlChild.offsetLeft + htmlChild.offsetWidth / 2;
        const distance = Math.abs(sliderCenter - childCenter);
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);
    }
  };

  const scrollToSlide = (index: number) => {
    if (blogSliderRef.current) {
      const slider = blogSliderRef.current;
      const children = Array.from(slider.children);
      const targetChild = children[index] as HTMLElement;
      if (targetChild) {
        const sliderWidth = slider.clientWidth;
        const childCenter = targetChild.offsetLeft + targetChild.offsetWidth / 2;
        const targetScrollLeft = childCenter - sliderWidth / 2;
        slider.scrollTo({ left: targetScrollLeft, behavior: 'smooth' });
      }
    }
  };

  const displayPosts = posts.length > 0 ? posts : [
    {
      id: 'fallback-1',
      title: { rendered: 'Why Dashboarding is Not Intelligence' },
      excerpt: { rendered: 'Most analytics tools tell you what happened. Intelligence tells you what to do next. There is a distance between the two that most marketing teams have learned to ignore.' },
      slug: '',
      isFallback: true,
      categoryName: 'Growth Intelligence',
      imageUrl: '/images/dashboard.webp',
    },
    {
      id: 'fallback-2',
      title: { rendered: 'Agentic Workflows for Enterprise Content' },
      excerpt: { rendered: 'The shift is not from human to AI. It is from isolated tasks to coordinated systems. Here is what that looks like in a live marketing operation.' },
      slug: '',
      isFallback: true,
      categoryName: 'AI Agency',
      imageUrl: '/images/agency_office.webp',
    },
    {
      id: 'fallback-3',
      title: { rendered: 'Generative Search Optimisation in 2026' },
      excerpt: { rendered: 'The page one that matters is no longer a list of blue links. Brands that are not optimised for AI-generated answers are already invisible to half their audience.' },
      slug: '',
      isFallback: true,
      categoryName: 'Generative Search',
      imageUrl: '/images/glass_shape.webp',
    },
  ];

  const getPostData = (post: any) => {
    if (post.isFallback) {
      return {
        title: post.title.rendered,
        excerpt: post.excerpt.rendered,
        imageUrl: post.imageUrl,
        category: post.categoryName,
        link: '/blog/',
      };
    }

    const title = post.title?.rendered || '';
    let excerpt = post.excerpt?.rendered || '';
    excerpt = excerpt
      .replace(/<[^>]*>/g, '')
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&#8217;/g, "'")
      .replace(/&#8216;/g, "'")
      .replace(/&#8220;/g, '"')
      .replace(/&#8221;/g, '"')
      .replace(/&hellip;/g, '…')
      .replace(/&nbsp;/g, ' ')
      .trim();
    if (excerpt.length > 150) {
      excerpt = excerpt.slice(0, 150) + '…';
    }

    const imageUrl = post._embedded?.['wp:featuredmedia']?.[0]?.source_url 
      || post.yoast_head_json?.og_image?.[0]?.url 
      || '/images/dashboard.webp';

    let category = 'Digital Marketing';
    if (post._embedded?.['wp:term']?.[0]?.length > 0) {
      category = post._embedded['wp:term'][0][0].name;
    }

    const link = `/blog/${post.slug}/`;

    return { title, excerpt, imageUrl, category, link };
  };

  return (
    <section className="blog glass-panel">
      <style dangerouslySetInnerHTML={{ __html: `
        .home-blog-card {
          border-radius: 6px 48px 6px 48px !important;
          transition: border-color 0.4s, background 0.4s, transform 0.4s, box-shadow 0.4s !important;
          display: flex !important;
          flex-direction: column !important;
          text-decoration: none !important;
        }
        .home-blog-card:hover {
          border-color: rgba(84, 61, 152, 0.4) !important;
          background: rgba(2, 0, 24, 0.7) !important;
          transform: translateY(-8px) !important;
          box-shadow: 0 32px 64px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(84, 61, 152, 0.12) !important;
        }
      `}} />
      <div className="container">
        <div className="blog-header">
          <h2 className="section-heading split-text" style={{ marginBottom: 0 }}>The read before the next decision.</h2>
          <Link href="/blog/" className="btn" data-cursor="READ"><span className="btn-text">Go beyond the headline</span></Link>
        </div>
        <div className="blog-grid" ref={blogSliderRef} onScroll={handleScroll}>
          {displayPosts.map((post, index) => {
            const { title, excerpt, imageUrl, category, link } = getPostData(post);
            const isFeatured = index === 0;
            return (
              <Link 
                key={post.id || index} 
                href={link}
                className={`blog-card home-blog-card ${isFeatured ? 'blog-card--featured' : ''}`}
              >
                <img src={imageUrl} alt={title} className="blog-card-img" />
                <div className="blog-card-inner">
                  <div className="blog-card-top">
                    <span className="blog-category">{category}</span>
                  </div>
                  <h3 className="blog-title" dangerouslySetInnerHTML={{ __html: title }} />
                  <p className="blog-excerpt">{excerpt}</p>
                  <div className="blog-card-footer">
                    <span className="blog-read">Read</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        
        <div className="blog-slider-controls">
          <button className="blog-slider-btn" onClick={() => scrollToSlide(Math.max(0, activeIndex - 1))} aria-label="Previous Blog">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
          </button>

          <div className="slider-dots">
            {displayPosts.map((_, idx) => (
              <span
                key={idx}
                className={`slider-dot ${activeIndex === idx ? 'active' : ''}`}
                onClick={() => scrollToSlide(idx)}
              />
            ))}
          </div>

          <button className="blog-slider-btn" onClick={() => scrollToSlide(Math.min(displayPosts.length - 1, activeIndex + 1))} aria-label="Next Blog">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>

      </div>
    </section>
  );
};

export default Blog;
