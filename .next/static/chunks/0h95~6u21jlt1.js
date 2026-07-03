(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,29870,e=>{"use strict";let t=e=>(Array.isArray(e)?e:[e]).filter(e=>e instanceof HTMLElement);e.s(["startHeroCopyReveal",0,({primary:e,supporting:r,actions:i})=>{let o=[{elements:t(e),delay:0},{elements:t(r),delay:120},{elements:t(i),delay:220}],s=o.flatMap(({elements:e})=>e),l=0,a=!1;return(async()=>{window.innerWidth<=768||a||(l=window.requestAnimationFrame(()=>{o.forEach(({elements:e,delay:t})=>{e.forEach((e,r)=>{e.style.setProperty("--hero-copy-delay",`${t+70*r}ms`),e.classList.add("hero-copy-reveal-active")})})}))})(),()=>{a=!0,l&&window.cancelAnimationFrame(l),s.forEach(e=>{e.classList.remove("hero-copy-reveal-active"),e.style.removeProperty("--hero-copy-delay")})}}])},94008,e=>{"use strict";var t=e.i(71645);e.s(["useGsapSafeEffect",0,function(e,r=[],i=!1){(0,t.useEffect)(()=>{let t,r,o,s=!1,l=()=>{let t=window.gsap,r=window.ScrollTrigger,l=window.SplitType;t&&r&&(!i||l)&&!s&&(s=!0,o=e(t,r,l))};return l(),s||(t=setInterval(()=>{l()},100),r=setTimeout(()=>{clearInterval(t)},15e3)),()=>{t&&clearInterval(t),r&&clearTimeout(r),o&&o()}},r)}])},2105,e=>{"use strict";var t=e.i(43476),r=e.i(71645),i=e.i(94008),o=e.i(18566),s=e.i(29870);let l=({study:e,isReady:i})=>{let[s,l]=(0,r.useState)(0),a=(0,r.useRef)(null),n=(0,r.useRef)(!1),c=(0,r.useRef)(null),d=(0,o.useRouter)(),p=(0,o.usePathname)(),h="/ae"===p||p&&p.startsWith("/ae/"),m=e=>{if(l(e),a.current){n.current=!0,c.current&&clearTimeout(c.current),c.current=setTimeout(()=>{n.current=!1},600);let t=a.current.children[e];if(t){let e=a.current.getBoundingClientRect(),r=t.getBoundingClientRect().left-e.left+a.current.scrollLeft;a.current.scrollTo({left:r,behavior:"smooth"})}}},g=(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:"work-list-left",style:{alignSelf:"center"},children:(0,t.jsx)("h2",{className:"work-list-title",style:{textTransform:"uppercase",margin:0,color:"#ffffff"},children:e.client})}),(0,t.jsxs)("div",{className:"work-list-right",style:{display:"flex",flexDirection:"column",gap:"1rem",width:"100%",minWidth:0},children:[e.images.length>1&&(0,t.jsxs)("div",{className:"slider-controls",onClick:e=>e.stopPropagation(),style:{display:"flex",alignItems:"center",justifyContent:"flex-end",gap:"1.25rem",paddingRight:"0.5rem",color:"#fff",pointerEvents:"auto"},children:[(0,t.jsx)("button",{onClick:e=>{e.preventDefault(),e.stopPropagation(),m(Math.max(0,s-1))},style:{background:"transparent",border:"1px solid rgba(255,255,255,0.3)",borderRadius:"50%",width:"40px",height:"40px",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",cursor:0===s?"default":"pointer",opacity:0===s?.3:1,transition:"all 0.3s"},children:(0,t.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,t.jsx)("path",{d:"M19 12H5M12 19l-7-7 7-7"})})}),(0,t.jsxs)("span",{style:{fontSize:"1rem",fontWeight:500,letterSpacing:"2px",fontFamily:"monospace"},children:[s+1," / ",e.images.length]}),(0,t.jsx)("button",{onClick:t=>{t.preventDefault(),t.stopPropagation(),m(Math.min(e.images.length-1,s+1))},style:{background:"transparent",border:"1px solid rgba(255,255,255,0.3)",borderRadius:"50%",width:"40px",height:"40px",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",cursor:s===e.images.length-1?"default":"pointer",opacity:s===e.images.length-1?.3:1,transition:"all 0.3s"},children:(0,t.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,t.jsx)("path",{d:"M5 12h14M12 5l7 7-7 7"})})})]}),(0,t.jsx)("div",{className:"work-list-gallery",ref:a,onScroll:()=>{if(!n.current&&a.current){let e=a.current,t=Array.from(e.children),r=e.getBoundingClientRect();if(e.scrollLeft+e.clientWidth>=e.scrollWidth-10){s!==t.length-1&&l(t.length-1);return}let i=0,o=0;t.forEach((e,t)=>{let s=e.getBoundingClientRect(),l=Math.max(s.left,r.left),a=Math.max(0,Math.min(s.right,r.right)-l);a>i&&(i=a,o=t)}),o!==s&&l(o)}},children:e.images.map((r,i)=>{let o=e.subNames?e.subNames[i]:e.client,s=e.subDescriptions?e.subDescriptions[i]:e.description;return(0,t.jsxs)("div",{className:"work-list-slide-wrapper",onClick:t=>{t.stopPropagation(),t.preventDefault(),e.subSlugs&&e.subSlugs[i]?d.push(h?`/ae${e.subSlugs[i]}`:e.subSlugs[i]):e.slug&&d.push(h?`/ae${e.slug}`:e.slug)},style:{cursor:"pointer",position:"relative"},children:[(0,t.jsx)("img",{className:"work-list-slide",src:`/${r.replace(/^\//,"")}`,alt:`${o} Digital Marketing Campaign Case Study by Impulse Digital`}),(0,t.jsxs)("div",{style:{position:"absolute",bottom:0,left:0,right:0,padding:"4rem 2rem 1.5rem",background:"linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.5) 60%, transparent 100%)",color:"#fff",display:"flex",flexDirection:"column",gap:"0.5rem",pointerEvents:"none",borderBottomLeftRadius:"64px",borderBottomRightRadius:"12px"},children:[(0,t.jsx)("h3",{className:"slide-title",style:{margin:0,fontWeight:700,textTransform:"uppercase"},children:o}),(0,t.jsx)("p",{className:"slide-desc",style:{margin:0,lineHeight:1.4,opacity:.9},children:s})]})]},i)})})]})]});return i?(0,t.jsx)("div",{onClick:()=>d.push(e.slug?h?`/ae${e.slug}`:e.slug:"#"),className:"work-list-item",style:{textDecoration:"none",color:"inherit",display:"flex",cursor:"pointer"},children:g}):(0,t.jsx)("div",{className:"work-list-item pending-case-study",style:{display:"flex",cursor:"default"},children:g})};e.s(["default",0,({data:e})=>{let o=(0,r.useRef)(null);return(0,r.useEffect)(()=>{document.body.classList.add("work-page"),document.body.classList.add("service-page");let e=(0,s.startHeroCopyReveal)({primary:o.current?.querySelector(".work-hero-title"),supporting:o.current?.querySelector(".work-hero-desc")});return()=>{e(),document.body.classList.remove("work-page"),document.body.classList.remove("service-page")}},[]),(0,i.useGsapSafeEffect)((e,t)=>{if(!o.current)return;let r=document.querySelector(".work-list-section");return r&&(e.to(document.body,{backgroundColor:"#000000",scrollTrigger:{trigger:r,start:"top 60%",end:"top 10%",scrub:!0}}),window.particlesMaterial&&e.fromTo(window.particlesMaterial,{opacity:.6},{opacity:0,scrollTrigger:{trigger:r,start:"top 60%",end:"top 10%",scrub:!0}})),o.current.querySelectorAll(".work-list-separator").forEach(e=>{t.create({trigger:e,start:"top 95%",onEnter:()=>e.classList.add("active"),once:!0})}),t.refresh(),()=>{e.to(document.body,{backgroundColor:"#020018",duration:0}),window.particlesMaterial&&e.to(window.particlesMaterial,{opacity:.6,duration:0}),t&&t.getAll().forEach(e=>{e.trigger&&e.trigger.closest&&e.trigger.closest(".work-wrapper")&&e.kill()})}},[]),(0,t.jsxs)("main",{id:"main-content",className:"work-wrapper",ref:o,children:[(0,t.jsx)("section",{className:"work-hero",children:(0,t.jsx)("div",{className:"work-container",children:(0,t.jsxs)("div",{className:"work-hero-content",children:[(0,t.jsxs)("h1",{className:"work-hero-title hero-copy-reveal",children:[e?.hero?.titleLine1||"The Work"," ",(0,t.jsx)("br",{}),(0,t.jsx)("span",{className:"work-hero-highlight",style:{color:"#aa3bff"},children:e?.hero?.titleHighlight||"Behind the Numbers."})]}),(0,t.jsx)("p",{className:"work-hero-desc hero-copy-reveal",children:e?.hero?.description||"The final number is never the full story. The real story is what had to be questioned, rebuilt, sharpened and pushed before the result had a chance to happen."})]})})}),(0,t.jsx)("section",{className:"work-list-section",children:(0,t.jsx)("div",{className:"work-container",children:(0,t.jsx)("div",{className:"work-list",children:(e?.cases||[]).map((i,o)=>(0,t.jsxs)(r.default.Fragment,{children:[(0,t.jsx)(l,{study:i,isReady:!0}),o<(e?.cases?.length||0)-1&&(0,t.jsx)("div",{className:"work-list-separator"})]},o))})})}),(0,t.jsx)("style",{children:`
        .work-wrapper {
          color: #fff;
          position: relative;
          z-index: 2;
          overflow: hidden;
          padding-bottom: 12rem;
        }

        .work-container {
          max-width: 1600px;
          margin: 0 auto;
          padding: 0 4vw;
        }

        /* Hero */
        .work-hero {
          padding-top: 14rem;
          padding-bottom: 6rem;
          text-align: center;
        }

        .work-hero-content {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .work-hero-title {
          font-family: var(--font-heading, sans-serif);
          font-size: clamp(3.5rem, 8vw, 8rem);
          font-weight: 800;
          letter-spacing: -0.05em;
          line-height: 0.95;
          margin-bottom: 2rem;
          text-transform: none;
        }

        .work-hero-desc {
          font-size: clamp(1.2rem, 2vw, 1.6rem);
          line-height: 1.5;
          color: rgba(255, 255, 255, 0.6);
          max-width: 800px;
          font-weight: 300;
        }

        /* List Layout */
        .work-list-section {
          padding: 8rem 0;
          background-color: transparent;
          color: #ffffff;
        }

        .work-list {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .work-list-separator {
          width: 100%;
          height: 1px;
          background: rgba(138, 92, 246, 0.8);
          box-shadow: 0 0 15px rgba(138, 92, 246, 0.6);
          margin: 0;
          display: block;
        }

        .work-list-item {
          display: flex;
          align-items: flex-start;
          gap: 4rem;
          width: 100%;
        }

        /* Left Side */
        .work-list-left {
          flex: 0 0 25%;
          display: flex;
          flex-direction: column;
        }



        .work-list-title {
          font-family: var(--font-heading, sans-serif);
          font-size: clamp(2.5rem, 4vw, 3.5rem);
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -0.03em;
          margin-bottom: 1.5rem;
          color: #ffffff;
        }

        /* Right Side Image */
        .work-list-right {
          flex: 1;
          width: 100%;
          min-width: 0;
          position: relative;
        }

        .work-list-gallery {
          display: flex;
          gap: 2.5rem;
          width: calc(100% + 4vw + max(0px, (100vw - 1600px) / 2));
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          scrollbar-width: none; /* Firefox */
          padding: 20px 0;
          margin: -20px 0;
        }
        
        .work-list-gallery::-webkit-scrollbar {
          display: none; /* Chrome/Safari */
        }

        .work-list-slide-wrapper {
          flex: 0 0 calc((100% - 2.5rem) / 1.5);
          scroll-snap-align: start;
          aspect-ratio: 16 / 9;
          position: relative;
          overflow: visible;
          transition: transform 0.3s ease;
        }
        
        .work-list-slide-wrapper::after {
          content: "";
          position: absolute;
          inset: 0;
          border: 1px solid transparent;
          pointer-events: none;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
          border-radius: 12px 64px 12px 64px;
        }

        .work-list-slide-wrapper:hover {
          transform: translateY(-1px);
        }

        .work-list-slide-wrapper:hover::after {
          border-color: rgba(138, 92, 246, 1);
          box-shadow: 0 0 20px rgba(138, 92, 246, 0.6), inset 0 0 12px rgba(138, 92, 246, 0.3);
        }

        .work-list-slide {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
          border-radius: 12px 64px 12px 64px;
        }

        .slide-title {
          font-size: 1.5rem;
        }

        .slide-desc {
          font-size: 1rem;
        }

        .work-hero-highlight {
          white-space: nowrap;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .work-list-item {
            flex-direction: column;
            gap: 2rem;
          }
          .work-list-left {
            flex: 1;
            width: 100%;
          }
          .work-list-slide-wrapper {
            flex: 0 0 100%;
          }
        }

        @media (max-width: 768px) {
          .work-hero {
            padding-top: 10rem;
            padding-bottom: 4rem;
          }
          .work-hero-title {
            font-size: clamp(2.5rem, 10vw, 3.5rem);
            margin-bottom: 1.5rem;
          }
          .work-hero-highlight {
            white-space: normal;
          }
          .slide-title {
            font-size: 1.1rem;
          }
          .slide-desc {
            font-size: 0.85rem;
          }
          .work-list-section {
            padding: 4rem 0;
          }
        }
      `})]})}])}]);