(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,15634,e=>{"use strict";var t=e.i(43476),i=e.i(71645),a=e.i(62059),s=e.i(46035),o=e.i(51800),n=e.i(30133),r=e.i(63971),l=e.i(40871),d=e.i(94008),c=e.i(88495);let p=["Reels & Shorts","Training Modules","Employer Branding","YouTube Videos","LinkedIn Ads","Website Banners","Multilingual Updates","Digital Ads","Internal Communication","Product Explainers","Sales Decks"],h=[{"--chip-left-desktop":"50%","--chip-top-desktop":"5%"},{"--chip-left-desktop":"74%","--chip-top-desktop":"12%"},{"--chip-left-desktop":"91%","--chip-top-desktop":"31%"},{"--chip-left-desktop":"94%","--chip-top-desktop":"56%"},{"--chip-left-desktop":"84%","--chip-top-desktop":"79%"},{"--chip-left-desktop":"62%","--chip-top-desktop":"93%"},{"--chip-left-desktop":"37%","--chip-top-desktop":"93%"},{"--chip-left-desktop":"16%","--chip-top-desktop":"79%"},{"--chip-left-desktop":"5%","--chip-top-desktop":"56%"},{"--chip-left-desktop":"9%","--chip-top-desktop":"31%"},{"--chip-left-desktop":"25%","--chip-top-desktop":"12%"}];e.s(["default",0,({data:e})=>((0,l.useServicePageBackground)(),(0,i.useEffect)(()=>{let e=document.createElement("style");e.textContent=`
      .svc-problem-gaps .gap-text::after {
        top: 100% !important;
        height: 2px !important;
      }
      .ai-video-orbit .svc-channel-chip {
        --chip-left: var(--chip-left-desktop);
        --chip-top: var(--chip-top-desktop);
      }
      .ai-video-signal-rail-stage {
        display: none;
      }
      @media (max-width: 768px) {
        .ai-video-channels .container {
          width: min(100% - 2rem, 1120px);
        }
        .ai-video-channels .svc-channels-intro {
          margin-bottom: 2.25rem;
        }
        .ai-video-channels-orbit-stage {
          display: none !important;
        }
        body.ai-video-production-page .scroll-to-top {
          display: none !important;
        }
        .ai-video-signal-rail-stage {
          --rail-x: 34px;
          --card-offset: 86px;
          display: block;
          position: relative;
          width: 100%;
          margin: 3rem auto 0;
          padding: 4.5rem 0 0;
          overflow: visible;
        }
        .ai-video-signal-brand {
          position: absolute;
          top: 0;
          left: calc(var(--rail-x) - 31px);
          width: 62px;
          height: 62px;
          border: 1px solid rgba(168, 130, 255, 0.72);
          border-radius: 50%;
          display: grid;
          place-items: center;
          background: rgba(4, 0, 24, 0.86);
          box-shadow: 0 0 0 rgba(138, 92, 246, 0);
          opacity: 0;
          transform: scale(0.92);
          transition: opacity 350ms ease, transform 350ms ease, box-shadow 350ms ease;
          z-index: 4;
        }
        .ai-video-signal-brand svg {
          width: 36px;
          height: 36px;
          display: block;
        }
        .ai-video-signal-brand path {
          fill: none;
          stroke: rgba(245, 239, 255, 0.96);
          stroke-width: 20;
          stroke-linecap: round;
          stroke-linejoin: round;
        }
        .ai-video-signal-brand.is-visible,
        .ai-video-signal-rail-stage.is-reduced .ai-video-signal-brand {
          opacity: 1;
          transform: scale(1);
          box-shadow: 0 0 22px rgba(138, 92, 246, 0.62);
        }
        .ai-video-signal-brand.is-pulsing {
          transform: scale(1.08);
          box-shadow: 0 0 34px rgba(187, 156, 255, 0.86);
        }
        .ai-video-signal-rail-line {
          position: absolute;
          top: 3.5rem;
          bottom: 0.65rem;
          left: var(--rail-x);
          width: 2px;
          border-radius: 999px;
          background: linear-gradient(180deg, rgba(222, 205, 255, 0.98), rgba(138, 92, 246, 0.88) 48%, rgba(93, 40, 220, 0.18));
          box-shadow: 0 0 16px rgba(138, 92, 246, 0.45);
          transform: scaleY(0);
          transform-origin: top;
          opacity: 0;
          transition: opacity 220ms ease, transform 500ms ease;
          z-index: 1;
        }
        .ai-video-signal-rail-line.is-visible,
        .ai-video-signal-rail-stage.is-reduced .ai-video-signal-rail-line {
          opacity: 1;
          transform: scaleY(1);
        }
        .ai-video-signal-list {
          position: relative;
          display: grid;
          gap: 0.95rem;
          margin: 0;
          padding: 0;
          list-style: none;
          z-index: 2;
        }
        .ai-video-signal-item {
          position: relative;
          margin-left: var(--card-offset);
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 300ms ease, transform 300ms ease;
        }
        .ai-video-signal-item.is-visible,
        .ai-video-signal-rail-stage.is-reduced .ai-video-signal-item {
          opacity: 1;
          transform: translateY(0);
        }
        .ai-video-signal-connector {
          position: absolute;
          top: 50%;
          left: calc(var(--rail-x) - var(--card-offset));
          width: calc(var(--card-offset) - var(--rail-x));
          height: 2px;
          transform: translateY(-50%);
          border-radius: 999px;
          background: rgba(138, 92, 246, 0.34);
          box-shadow: 0 0 0 rgba(138, 92, 246, 0);
          transition: background 180ms ease, box-shadow 180ms ease;
        }
        .ai-video-signal-connector::before {
          content: "";
          position: absolute;
          left: -5px;
          top: 50%;
          width: 10px;
          height: 10px;
          border: 2px solid rgba(229, 217, 255, 0.86);
          border-radius: 50%;
          background: #050014;
          box-shadow: 0 0 14px rgba(138, 92, 246, 0.58);
          transform: translateY(-50%);
        }
        .ai-video-signal-item.is-active .ai-video-signal-connector {
          background: rgba(208, 187, 255, 0.95);
          box-shadow: 0 0 18px rgba(138, 92, 246, 0.82);
        }
        .ai-video-signal-card {
          min-height: 72px;
          width: 100%;
          display: flex;
          align-items: center;
          padding: 1rem 1rem;
          border: 1px solid rgba(138, 92, 246, 0.34);
          border-radius: 8px;
          background: rgba(3, 0, 20, 0.98);
          box-shadow: inset 0 0 26px rgba(28, 11, 71, 0.2);
          color: var(--white);
          font-family: var(--font-body);
          font-size: clamp(0.88rem, 3.8vw, 1rem);
          font-weight: 650;
          letter-spacing: 0;
          line-height: 1.35;
          transition: border-color 180ms ease, box-shadow 180ms ease, background 180ms ease;
        }
        .ai-video-signal-item.is-active .ai-video-signal-card {
          border-color: rgba(201, 178, 255, 0.92);
          box-shadow: 0 0 20px rgba(138, 92, 246, 0.28), inset 0 0 28px rgba(95, 50, 195, 0.22);
          background: rgba(8, 2, 30, 0.98);
        }
        .ai-video-signal-dot {
          position: absolute;
          top: 0;
          left: 0;
          width: 11px;
          height: 11px;
          border-radius: 50%;
          background: #f5efff;
          box-shadow: 0 0 14px rgba(168, 130, 255, 1), 0 0 26px rgba(138, 92, 246, 0.72);
          opacity: 0;
          pointer-events: none;
          transform: translate3d(var(--rail-x), 0, 0);
          z-index: 5;
        }
        .ai-video-signal-rail-stage.is-complete .ai-video-signal-rail-line {
          box-shadow: 0 0 18px rgba(138, 92, 246, 0.5);
        }
      }
      @media (max-width: 768px) and (prefers-reduced-motion: reduce) {
        .ai-video-signal-brand,
        .ai-video-signal-rail-line,
        .ai-video-signal-item,
        .ai-video-signal-card,
        .ai-video-signal-connector {
          transition: none !important;
          animation: none !important;
        }
        .ai-video-signal-dot {
          display: none !important;
        }
      }
      @media (max-width: 380px) {
        .ai-video-signal-rail-stage {
          --rail-x: 27px;
          --card-offset: 72px;
        }
        .ai-video-signal-brand {
          left: calc(var(--rail-x) - 27px);
          width: 54px;
          height: 54px;
        }
        .ai-video-signal-brand svg {
          width: 31px;
          height: 31px;
        }
        .ai-video-signal-card {
          padding: 0.9rem 0.85rem;
        }
      }
    `,document.head.appendChild(e),document.body.classList.add("ai-video-production-page");let t=window.matchMedia("(max-width: 768px)").matches,i=window.matchMedia("(prefers-reduced-motion: reduce)").matches,a=document.getElementById("ai-video-signal-rail"),s=null,o=!1,n=null,r=()=>{},l=null,d=!1,c=0,p=null,h=[],g=null,m=[],u=e=>new Promise(t=>{let i=window.setTimeout(t,e);m.push(i)}),v=async(e,t,i)=>{let s=e.querySelector(".ai-video-signal-card");if(!s)return void await u(520);let n=a.getBoundingClientRect(),r=s.getBoundingClientRect(),l=i.getBoundingClientRect(),d=parseFloat(getComputedStyle(a).getPropertyValue("--rail-x"))||34,c=r.top-n.top+r.height/2,p=l.top-n.top+l.height/2,h=r.left-n.left-5;t.style.transition="none",t.style.opacity="0",t.style.transform=`translate3d(${h}px, ${c}px, 0)`,t.getBoundingClientRect(),t.style.opacity="1",t.style.transition="transform 160ms ease-out, opacity 100ms ease-out",t.style.transform=`translate3d(${d-5}px, ${c}px, 0)`,await u(160),o||(t.style.transition="transform 420ms cubic-bezier(0.33, 0, 0.2, 1), opacity 120ms ease-out",t.style.transform=`translate3d(${d-5}px, ${p}px, 0)`,await u(420),t.style.opacity="0",await u(70))},x=async(e,t)=>{d||!p||(d=!0,await u(120),o||(await v(p,e,t),o||(t.classList.add("is-pulsing"),await u(220),t.classList.remove("is-pulsing"),a?.classList.add("is-complete"))))},b=async()=>{if(!a||a.classList.contains("is-running"))return;let e=a.querySelector(".ai-video-signal-brand"),t=a.querySelector(".ai-video-signal-rail-line"),i=a.querySelector(".ai-video-signal-dot"),s=[...a.querySelectorAll("[data-signal-card]")];if(!e||!t||!i||!s.length||(a.classList.add("is-running"),e.classList.add("is-visible"),await u(180),o)||(t.classList.add("is-visible"),await u(180),o))return;let n=()=>{if(g=null,o)return;let t=h.shift();t&&(t=>{if(t.classList.contains("is-visible"))return;t.classList.add("is-visible","is-active"),p=t,c+=1;let a=window.setTimeout(()=>t.classList.remove("is-active"),260);m.push(a),c>=s.length&&(l?.disconnect(),x(i,e))})(t),h.length&&(g=window.setTimeout(n,90),m.push(g))},r=e=>{!(e.classList.contains("is-visible")||h.includes(e))&&(h.push(e),g||(g=window.setTimeout(n,60),m.push(g)))};l=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&r(e.target)})},{rootMargin:"0px 0px -12% 0px",threshold:.12}),s.forEach(e=>{l?.observe(e);let t=e.getBoundingClientRect();t.top<=.88*window.innerHeight&&t.bottom>0&&r(e)})};return a&&t&&(i?a.classList.add("is-reduced","is-complete"):(r=()=>{n||(n=window.requestAnimationFrame(()=>{n=null;let e=a.getBoundingClientRect(),t=Math.min(.68*window.innerHeight,620);e.top<=t&&e.bottom>0&&(s?.disconnect(),a.classList.contains("is-running")||(n&&(window.cancelAnimationFrame(n),n=null),window.removeEventListener("scroll",r),window.removeEventListener("resize",r),b()))}))},(s=new IntersectionObserver((e,t)=>{e.forEach(e=>{e.isIntersecting&&(t.disconnect(),r())})},{rootMargin:"0px 0px -8% 0px",threshold:.01})).observe(a),window.addEventListener("scroll",r,{passive:!0}),window.addEventListener("resize",r),r())),()=>{document.head.contains(e)&&document.head.removeChild(e),document.body.classList.remove("ai-video-production-page"),o=!0,m.forEach(e=>clearTimeout(e)),h=[],g=null,n&&window.cancelAnimationFrame(n),window.removeEventListener("scroll",r),window.removeEventListener("resize",r),s&&s.disconnect(),l&&l.disconnect()}},[]),(0,d.useGsapSafeEffect)((e,t)=>{let i,a,s=[],o=document.querySelector(".svc-stats-grid"),n=document.querySelectorAll(".svc-stat");if(o&&n.length){e.set(n,{opacity:0,y:32});let i=t.create({trigger:o,start:"top 70%",once:!0,onEnter:()=>{e.to(n,{opacity:1,y:0,duration:.8,stagger:.15,ease:"power3.out",onComplete:()=>{n.forEach(t=>{let i=t.querySelector("[data-stat-target]");if(!i)return;let a=parseFloat(i.getAttribute("data-stat-target")||"0"),s=i.getAttribute("data-stat-suffix")||"",o=parseInt(i.getAttribute("data-stat-decimals")||"0",10),n={v:0};e.to(n,{v:a,duration:2.2,ease:"power3.out",delay:.1,onUpdate:()=>{i.textContent=(o>0?n.v.toFixed(o):Math.round(n.v).toLocaleString())+s}})})}})}});s.push(i)}let r=document.querySelectorAll(".svc-problem-gaps li");if(r.length){let i=t.create({trigger:".svc-problem-gaps",start:"top 65%",once:!0,onEnter:()=>{r.forEach((t,i)=>{e.to(t,{opacity:.85,x:0,duration:.5,delay:.18*i,ease:"power2.out",onStart:()=>{setTimeout(()=>t.classList.add("struck"),200)}})})}});s.push(i)}let l=document.getElementById("channels-stage"),d=document.getElementById("channels-orbit-lines"),c=document.querySelector(".svc-channels-center"),p=c?c.querySelector("path"):null,h=null,g=!1,m=null,u=()=>{};if(!window.matchMedia("(max-width: 768px)").matches&&l&&d&&c&&p){let t=[],s=0,o=0,n=80,r=()=>{e.fromTo(p,{strokeWidth:6,stroke:"rgba(138, 92, 246, 0.85)"},{strokeWidth:11,stroke:"rgba(220, 200, 255, 1)",duration:.18,yoyo:!0,repeat:1,ease:"power2.out"})},v=()=>{if(!t.length)return;let i=Math.floor(Math.random()*t.length),a=t[i],s=document.createElementNS("http://www.w3.org/2000/svg","circle");s.setAttribute("cx",String(a.x)),s.setAttribute("cy",String(a.y)),s.setAttribute("r","4.5"),s.setAttribute("class","svc-channels-pulse"),d.appendChild(s),e.timeline({onComplete:()=>s.remove()}).fromTo(s,{opacity:0,attr:{r:2}},{opacity:1,attr:{r:5},duration:.35,ease:"power2.out"}).to(s,{attr:{cx:a.tx,cy:a.ty},duration:1.3,ease:"power2.in"},0).to(s,{opacity:0,attr:{r:2},duration:.2,ease:"power2.in"},"-=0.18").add(r,"-=0.18")};(u=()=>{let e=l.getBoundingClientRect();d.setAttribute("viewBox",`0 0 ${e.width} ${e.height}`),s=e.width/2,o=e.height/2;let i=c.getBoundingClientRect();n=.46*Math.min(i.width,i.height),t=[...l.querySelectorAll(".svc-channel-chip")].map(t=>{let i=t.getBoundingClientRect(),a=i.left-e.left+i.width/2,r=i.top-e.top+i.height/2,l=s-a,d=o-r,c=Math.sqrt(l*l+d*d)||1,p=a+(c-n)/c*l,h=r+(c-n)/c*d;return{x:a,y:r,tx:p,ty:h}}),d.querySelectorAll("line").forEach(e=>e.remove()),t.forEach(e=>{let t=document.createElementNS("http://www.w3.org/2000/svg","line");t.setAttribute("x1",e.x),t.setAttribute("y1",e.y),t.setAttribute("x2",e.tx),t.setAttribute("y2",e.ty),d.appendChild(t)})})(),i=setTimeout(u,250),a=setTimeout(u,800),window.addEventListener("resize",u),(m=new IntersectionObserver(t=>{t.forEach(t=>{t.isIntersecting?g||(g=!0,e.fromTo(p,{opacity:.15,strokeWidth:4},{opacity:1,strokeWidth:6,duration:1.6,ease:"power2.out"}),h=setInterval(v,380)):(g=!1,h&&(clearInterval(h),h=null))})},{threshold:.2})).observe(l),e.set(p,{opacity:.15})}return()=>{window.removeEventListener("resize",u),h&&clearInterval(h),clearTimeout(i),clearTimeout(a),m&&m.disconnect(),s.forEach(e=>e.kill())}},[]),(0,t.jsxs)("main",{id:"main-content",children:[(0,t.jsx)(a.default,{headlineParts:e.hero.headlineParts,headlineAccent:e.hero.headlineAccent,description:e.hero.description,buttons:e.hero.buttons}),(0,t.jsx)("section",{className:"svc-stats",id:"warp-start",children:(0,t.jsxs)("div",{className:"container",children:[(0,t.jsx)("h2",{className:"svc-h2 split-text",children:e.stats.title}),(0,t.jsx)("div",{className:"svc-stats-grid",children:e.stats.metrics.map((e,i)=>(0,t.jsxs)("div",{className:"svc-stat",children:[(0,t.jsx)("div",{className:"svc-stat-mark mark-glyph",children:(0,t.jsx)("svg",{viewBox:"801 344 274 272",children:(0,t.jsx)("use",{href:"#impulse-mark"})})}),(0,t.jsx)("div",{className:"svc-stat-number","data-stat-target":e.target,"data-stat-suffix":e.suffix,"data-stat-decimals":e.decimals,children:"0"}),(0,t.jsx)("p",{className:"svc-stat-desc",children:e.desc})]},i))}),(0,t.jsx)("p",{className:"svc-stats-footnote",children:e.stats.footnote})]})}),(0,t.jsx)(s.default,{}),(0,t.jsx)(c.ServiceProblem,{data:e.problem}),(0,t.jsx)(s.default,{}),(0,t.jsx)(c.ServiceVs,{data:e.vs}),(0,t.jsx)(s.default,{}),(0,t.jsx)(c.ServiceUses,{data:e.uses}),(0,t.jsx)(s.default,{}),(0,t.jsx)("section",{className:"svc-channels ai-video-channels",children:(0,t.jsxs)("div",{className:"container",children:[(0,t.jsx)("h2",{className:"svc-h2 split-text",children:"Built for the Screens People Actually Watch"}),(0,t.jsx)("p",{className:"svc-channels-intro",children:"AI-led videos can be created and adapted for:"}),(0,t.jsxs)("div",{className:"svc-channels-stage ai-video-channels-orbit-stage",id:"channels-stage",children:[(0,t.jsx)("svg",{className:"svc-channels-orbit-svg",id:"channels-orbit-lines","aria-hidden":"true"}),(0,t.jsx)("div",{className:"svc-channels-center","aria-hidden":"true",children:(0,t.jsx)("svg",{viewBox:"801 344 274 272",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{d:"M1014.2,569.56c1.74-38.31.87-92.29-14.17-126.43-4.45-10.09-11.39-18.02-21.2-22.92-19.98-9.99-55.06-15.74-77.2-15.78l-54.99-.1c-11.88-.02-22.87-4.01-24.19-14.77-1.4-11.46,9.4-19.23,20.5-20.7,37.6-5.01,74.9-7.39,112.77-5.34,18.7,1.01,36.2,3.78,53.65,9.6,17.16,5.73,29.66,17.62,35.66,34.79s8.71,34.06,9.87,52.44c2.45,39.04-.02,77.43-5.33,116.08-1.52,11.09-10.07,21.87-21.85,19.47-10.45-2.12-14.04-14.54-13.51-26.33Z"})})}),(0,t.jsx)("div",{className:"svc-channels-orbit ai-video-orbit",children:p.map((e,i)=>(0,t.jsx)("span",{className:"svc-channel-chip",style:h[i],children:e},e))})]}),(0,t.jsxs)("div",{className:"ai-video-signal-rail-stage",id:"ai-video-signal-rail",children:[(0,t.jsx)("div",{className:"ai-video-signal-brand","aria-hidden":"true",children:(0,t.jsx)("svg",{viewBox:"801 344 274 272",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{d:"M1014.2,569.56c1.74-38.31.87-92.29-14.17-126.43-4.45-10.09-11.39-18.02-21.2-22.92-19.98-9.99-55.06-15.74-77.2-15.78l-54.99-.1c-11.88-.02-22.87-4.01-24.19-14.77-1.4-11.46,9.4-19.23,20.5-20.7,37.6-5.01,74.9-7.39,112.77-5.34,18.7,1.01,36.2,3.78,53.65,9.6,17.16,5.73,29.66,17.62,35.66,34.79s8.71,34.06,9.87,52.44c2.45,39.04-.02,77.43-5.33,116.08-1.52,11.09-10.07,21.87-21.85,19.47-10.45-2.12-14.04-14.54-13.51-26.33Z"})})}),(0,t.jsx)("div",{className:"ai-video-signal-rail-line","aria-hidden":"true"}),(0,t.jsx)("ol",{className:"ai-video-signal-list",children:p.map(e=>(0,t.jsxs)("li",{className:"ai-video-signal-item","data-signal-card":!0,children:[(0,t.jsx)("span",{className:"ai-video-signal-connector","aria-hidden":"true"}),(0,t.jsx)("div",{className:"ai-video-signal-card",children:e})]},e))}),(0,t.jsx)("span",{className:"ai-video-signal-dot","aria-hidden":"true"})]}),(0,t.jsxs)("p",{style:{textAlign:"center",color:"var(--soft-grey)",fontSize:"1.15rem",marginTop:"3rem",fontStyle:"italic"},children:["One idea can become a film, a teaser, a vertical cut, an internal video, and an ad asset.",(0,t.jsx)("br",{}),"That is where AI starts creating scale."]})]})}),(0,t.jsx)(s.default,{}),(0,t.jsx)(c.ServiceGuardrails,{data:e.guardrails}),(0,t.jsx)(s.default,{}),(0,t.jsx)(c.ServiceProcess,{data:e.process}),(0,t.jsx)(o.default,{title:"Trusted by Brands Expecting AI Production Quality"}),(0,t.jsx)(n.default,{}),(0,t.jsx)(s.default,{}),(0,t.jsx)(c.ServiceFit,{data:e.fit}),(0,t.jsx)(s.default,{}),(0,t.jsx)(c.ServiceFinalCTA,{data:e.finalCta}),(0,t.jsx)(r.default,{}),(0,t.jsx)(c.ServiceFAQ,{data:e.faq})]}))])}]);