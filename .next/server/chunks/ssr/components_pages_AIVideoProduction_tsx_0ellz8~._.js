module.exports=[93182,a=>{"use strict";var b=a.i(87924),c=a.i(72131),d=a.i(84600),e=a.i(14507),f=a.i(1634),g=a.i(72688),h=a.i(87408),i=a.i(70122),j=a.i(92263),k=a.i(56031);let l=["Reels & Shorts","Training Modules","Employer Branding","YouTube Videos","LinkedIn Ads","Website Banners","Multilingual Updates","Digital Ads","Internal Communication","Product Explainers","Sales Decks"],m=[{"--chip-left-desktop":"50%","--chip-top-desktop":"5%"},{"--chip-left-desktop":"74%","--chip-top-desktop":"12%"},{"--chip-left-desktop":"91%","--chip-top-desktop":"31%"},{"--chip-left-desktop":"94%","--chip-top-desktop":"56%"},{"--chip-left-desktop":"84%","--chip-top-desktop":"79%"},{"--chip-left-desktop":"62%","--chip-top-desktop":"93%"},{"--chip-left-desktop":"37%","--chip-top-desktop":"93%"},{"--chip-left-desktop":"16%","--chip-top-desktop":"79%"},{"--chip-left-desktop":"5%","--chip-top-desktop":"56%"},{"--chip-left-desktop":"9%","--chip-top-desktop":"31%"},{"--chip-left-desktop":"25%","--chip-top-desktop":"12%"}];a.s(["default",0,({data:a})=>((0,i.useServicePageBackground)(),(0,c.useEffect)(()=>{let a=document.createElement("style");a.textContent=`
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
    `,document.head.appendChild(a),document.body.classList.add("ai-video-production-page");let b=window.matchMedia("(max-width: 768px)").matches,c=window.matchMedia("(prefers-reduced-motion: reduce)").matches,d=document.getElementById("ai-video-signal-rail"),e=null,f=!1,g=null,h=()=>{},i=null,j=!1,k=0,l=null,m=[],n=null,o=[],p=a=>new Promise(b=>{let c=window.setTimeout(b,a);o.push(c)}),q=async(a,b,c)=>{let e=a.querySelector(".ai-video-signal-card");if(!e)return void await p(520);let g=d.getBoundingClientRect(),h=e.getBoundingClientRect(),i=c.getBoundingClientRect(),j=parseFloat(getComputedStyle(d).getPropertyValue("--rail-x"))||34,k=h.top-g.top+h.height/2,l=i.top-g.top+i.height/2,m=h.left-g.left-5;b.style.transition="none",b.style.opacity="0",b.style.transform=`translate3d(${m}px, ${k}px, 0)`,b.getBoundingClientRect(),b.style.opacity="1",b.style.transition="transform 160ms ease-out, opacity 100ms ease-out",b.style.transform=`translate3d(${j-5}px, ${k}px, 0)`,await p(160),f||(b.style.transition="transform 420ms cubic-bezier(0.33, 0, 0.2, 1), opacity 120ms ease-out",b.style.transform=`translate3d(${j-5}px, ${l}px, 0)`,await p(420),b.style.opacity="0",await p(70))},r=async(a,b)=>{j||!l||(j=!0,await p(120),f||(await q(l,a,b),f||(b.classList.add("is-pulsing"),await p(220),b.classList.remove("is-pulsing"),d?.classList.add("is-complete"))))},s=async()=>{if(!d||d.classList.contains("is-running"))return;let a=d.querySelector(".ai-video-signal-brand"),b=d.querySelector(".ai-video-signal-rail-line"),c=d.querySelector(".ai-video-signal-dot"),e=[...d.querySelectorAll("[data-signal-card]")];if(!a||!b||!c||!e.length||(d.classList.add("is-running"),a.classList.add("is-visible"),await p(180),f)||(b.classList.add("is-visible"),await p(180),f))return;let g=()=>{if(n=null,f)return;let b=m.shift();b&&(b=>{if(b.classList.contains("is-visible"))return;b.classList.add("is-visible","is-active"),l=b,k+=1;let d=window.setTimeout(()=>b.classList.remove("is-active"),260);o.push(d),k>=e.length&&(i?.disconnect(),r(c,a))})(b),m.length&&(n=window.setTimeout(g,90),o.push(n))},h=a=>{!(a.classList.contains("is-visible")||m.includes(a))&&(m.push(a),n||(n=window.setTimeout(g,60),o.push(n)))};i=new IntersectionObserver(a=>{a.forEach(a=>{a.isIntersecting&&h(a.target)})},{rootMargin:"0px 0px -12% 0px",threshold:.12}),e.forEach(a=>{i?.observe(a);let b=a.getBoundingClientRect();b.top<=.88*window.innerHeight&&b.bottom>0&&h(a)})};return d&&b&&(c?d.classList.add("is-reduced","is-complete"):(h=()=>{g||(g=window.requestAnimationFrame(()=>{g=null;let a=d.getBoundingClientRect(),b=Math.min(.68*window.innerHeight,620);a.top<=b&&a.bottom>0&&(e?.disconnect(),d.classList.contains("is-running")||(g&&(window.cancelAnimationFrame(g),g=null),window.removeEventListener("scroll",h),window.removeEventListener("resize",h),s()))}))},(e=new IntersectionObserver((a,b)=>{a.forEach(a=>{a.isIntersecting&&(b.disconnect(),h())})},{rootMargin:"0px 0px -8% 0px",threshold:.01})).observe(d),window.addEventListener("scroll",h,{passive:!0}),window.addEventListener("resize",h),h())),()=>{document.head.contains(a)&&document.head.removeChild(a),document.body.classList.remove("ai-video-production-page"),f=!0,o.forEach(a=>clearTimeout(a)),m=[],n=null,g&&window.cancelAnimationFrame(g),window.removeEventListener("scroll",h),window.removeEventListener("resize",h),e&&e.disconnect(),i&&i.disconnect()}},[]),(0,j.useGsapSafeEffect)((a,b)=>{let c,d,e=[],f=document.querySelector(".svc-stats-grid"),g=document.querySelectorAll(".svc-stat");if(f&&g.length){a.set(g,{opacity:0,y:32});let c=b.create({trigger:f,start:"top 70%",once:!0,onEnter:()=>{a.to(g,{opacity:1,y:0,duration:.8,stagger:.15,ease:"power3.out",onComplete:()=>{g.forEach(b=>{let c=b.querySelector("[data-stat-target]");if(!c)return;let d=parseFloat(c.getAttribute("data-stat-target")||"0"),e=c.getAttribute("data-stat-suffix")||"",f=parseInt(c.getAttribute("data-stat-decimals")||"0",10),g={v:0};a.to(g,{v:d,duration:2.2,ease:"power3.out",delay:.1,onUpdate:()=>{c.textContent=(f>0?g.v.toFixed(f):Math.round(g.v).toLocaleString())+e}})})}})}});e.push(c)}let h=document.querySelectorAll(".svc-problem-gaps li");if(h.length){let c=b.create({trigger:".svc-problem-gaps",start:"top 65%",once:!0,onEnter:()=>{h.forEach((b,c)=>{a.to(b,{opacity:.85,x:0,duration:.5,delay:.18*c,ease:"power2.out",onStart:()=>{setTimeout(()=>b.classList.add("struck"),200)}})})}});e.push(c)}let i=document.getElementById("channels-stage"),j=document.getElementById("channels-orbit-lines"),k=document.querySelector(".svc-channels-center"),l=k?k.querySelector("path"):null,m=null,n=!1,o=null,p=()=>{};if(!window.matchMedia("(max-width: 768px)").matches&&i&&j&&k&&l){let b=[],e=0,f=0,g=80,h=()=>{a.fromTo(l,{strokeWidth:6,stroke:"rgba(138, 92, 246, 0.85)"},{strokeWidth:11,stroke:"rgba(220, 200, 255, 1)",duration:.18,yoyo:!0,repeat:1,ease:"power2.out"})},q=()=>{if(!b.length)return;let c=Math.floor(Math.random()*b.length),d=b[c],e=document.createElementNS("http://www.w3.org/2000/svg","circle");e.setAttribute("cx",String(d.x)),e.setAttribute("cy",String(d.y)),e.setAttribute("r","4.5"),e.setAttribute("class","svc-channels-pulse"),j.appendChild(e),a.timeline({onComplete:()=>e.remove()}).fromTo(e,{opacity:0,attr:{r:2}},{opacity:1,attr:{r:5},duration:.35,ease:"power2.out"}).to(e,{attr:{cx:d.tx,cy:d.ty},duration:1.3,ease:"power2.in"},0).to(e,{opacity:0,attr:{r:2},duration:.2,ease:"power2.in"},"-=0.18").add(h,"-=0.18")};(p=()=>{let a=i.getBoundingClientRect();j.setAttribute("viewBox",`0 0 ${a.width} ${a.height}`),e=a.width/2,f=a.height/2;let c=k.getBoundingClientRect();g=.46*Math.min(c.width,c.height),b=[...i.querySelectorAll(".svc-channel-chip")].map(b=>{let c=b.getBoundingClientRect(),d=c.left-a.left+c.width/2,h=c.top-a.top+c.height/2,i=e-d,j=f-h,k=Math.sqrt(i*i+j*j)||1,l=d+(k-g)/k*i,m=h+(k-g)/k*j;return{x:d,y:h,tx:l,ty:m}}),j.querySelectorAll("line").forEach(a=>a.remove()),b.forEach(a=>{let b=document.createElementNS("http://www.w3.org/2000/svg","line");b.setAttribute("x1",a.x),b.setAttribute("y1",a.y),b.setAttribute("x2",a.tx),b.setAttribute("y2",a.ty),j.appendChild(b)})})(),c=setTimeout(p,250),d=setTimeout(p,800),window.addEventListener("resize",p),(o=new IntersectionObserver(b=>{b.forEach(b=>{b.isIntersecting?n||(n=!0,a.fromTo(l,{opacity:.15,strokeWidth:4},{opacity:1,strokeWidth:6,duration:1.6,ease:"power2.out"}),m=setInterval(q,380)):(n=!1,m&&(clearInterval(m),m=null))})},{threshold:.2})).observe(i),a.set(l,{opacity:.15})}return()=>{window.removeEventListener("resize",p),m&&clearInterval(m),clearTimeout(c),clearTimeout(d),o&&o.disconnect(),e.forEach(a=>a.kill())}},[]),(0,b.jsxs)("main",{id:"main-content",children:[(0,b.jsx)(d.default,{headlineParts:a.hero.headlineParts,headlineAccent:a.hero.headlineAccent,description:a.hero.description,buttons:a.hero.buttons}),(0,b.jsx)("section",{className:"svc-stats",id:"warp-start",children:(0,b.jsxs)("div",{className:"container",children:[(0,b.jsx)("h2",{className:"svc-h2 split-text",children:a.stats.title}),(0,b.jsx)("div",{className:"svc-stats-grid",children:a.stats.metrics.map((a,c)=>(0,b.jsxs)("div",{className:"svc-stat",children:[(0,b.jsx)("div",{className:"svc-stat-mark mark-glyph",children:(0,b.jsx)("svg",{viewBox:"801 344 274 272",children:(0,b.jsx)("use",{href:"#impulse-mark"})})}),(0,b.jsx)("div",{className:"svc-stat-number","data-stat-target":a.target,"data-stat-suffix":a.suffix,"data-stat-decimals":a.decimals,children:"0"}),(0,b.jsx)("p",{className:"svc-stat-desc",children:a.desc})]},c))}),(0,b.jsx)("p",{className:"svc-stats-footnote",children:a.stats.footnote})]})}),(0,b.jsx)(e.default,{}),(0,b.jsx)(k.ServiceProblem,{data:a.problem}),(0,b.jsx)(e.default,{}),(0,b.jsx)(k.ServiceVs,{data:a.vs}),(0,b.jsx)(e.default,{}),(0,b.jsx)(k.ServiceUses,{data:a.uses}),(0,b.jsx)(e.default,{}),(0,b.jsx)("section",{className:"svc-channels ai-video-channels",children:(0,b.jsxs)("div",{className:"container",children:[(0,b.jsx)("h2",{className:"svc-h2 split-text",children:"Built for the Screens People Actually Watch"}),(0,b.jsx)("p",{className:"svc-channels-intro",children:"AI-led videos can be created and adapted for:"}),(0,b.jsxs)("div",{className:"svc-channels-stage ai-video-channels-orbit-stage",id:"channels-stage",children:[(0,b.jsx)("svg",{className:"svc-channels-orbit-svg",id:"channels-orbit-lines","aria-hidden":"true"}),(0,b.jsx)("div",{className:"svc-channels-center","aria-hidden":"true",children:(0,b.jsx)("svg",{viewBox:"801 344 274 272",xmlns:"http://www.w3.org/2000/svg",children:(0,b.jsx)("path",{d:"M1014.2,569.56c1.74-38.31.87-92.29-14.17-126.43-4.45-10.09-11.39-18.02-21.2-22.92-19.98-9.99-55.06-15.74-77.2-15.78l-54.99-.1c-11.88-.02-22.87-4.01-24.19-14.77-1.4-11.46,9.4-19.23,20.5-20.7,37.6-5.01,74.9-7.39,112.77-5.34,18.7,1.01,36.2,3.78,53.65,9.6,17.16,5.73,29.66,17.62,35.66,34.79s8.71,34.06,9.87,52.44c2.45,39.04-.02,77.43-5.33,116.08-1.52,11.09-10.07,21.87-21.85,19.47-10.45-2.12-14.04-14.54-13.51-26.33Z"})})}),(0,b.jsx)("div",{className:"svc-channels-orbit ai-video-orbit",children:l.map((a,c)=>(0,b.jsx)("span",{className:"svc-channel-chip",style:m[c],children:a},a))})]}),(0,b.jsxs)("div",{className:"ai-video-signal-rail-stage",id:"ai-video-signal-rail",children:[(0,b.jsx)("div",{className:"ai-video-signal-brand","aria-hidden":"true",children:(0,b.jsx)("svg",{viewBox:"801 344 274 272",xmlns:"http://www.w3.org/2000/svg",children:(0,b.jsx)("path",{d:"M1014.2,569.56c1.74-38.31.87-92.29-14.17-126.43-4.45-10.09-11.39-18.02-21.2-22.92-19.98-9.99-55.06-15.74-77.2-15.78l-54.99-.1c-11.88-.02-22.87-4.01-24.19-14.77-1.4-11.46,9.4-19.23,20.5-20.7,37.6-5.01,74.9-7.39,112.77-5.34,18.7,1.01,36.2,3.78,53.65,9.6,17.16,5.73,29.66,17.62,35.66,34.79s8.71,34.06,9.87,52.44c2.45,39.04-.02,77.43-5.33,116.08-1.52,11.09-10.07,21.87-21.85,19.47-10.45-2.12-14.04-14.54-13.51-26.33Z"})})}),(0,b.jsx)("div",{className:"ai-video-signal-rail-line","aria-hidden":"true"}),(0,b.jsx)("ol",{className:"ai-video-signal-list",children:l.map(a=>(0,b.jsxs)("li",{className:"ai-video-signal-item","data-signal-card":!0,children:[(0,b.jsx)("span",{className:"ai-video-signal-connector","aria-hidden":"true"}),(0,b.jsx)("div",{className:"ai-video-signal-card",children:a})]},a))}),(0,b.jsx)("span",{className:"ai-video-signal-dot","aria-hidden":"true"})]}),(0,b.jsxs)("p",{style:{textAlign:"center",color:"var(--soft-grey)",fontSize:"1.15rem",marginTop:"3rem",fontStyle:"italic"},children:["One idea can become a film, a teaser, a vertical cut, an internal video, and an ad asset.",(0,b.jsx)("br",{}),"That is where AI starts creating scale."]})]})}),(0,b.jsx)(e.default,{}),(0,b.jsx)(k.ServiceGuardrails,{data:a.guardrails}),(0,b.jsx)(e.default,{}),(0,b.jsx)(k.ServiceProcess,{data:a.process}),(0,b.jsx)(f.default,{title:"Trusted by Brands Expecting AI Production Quality"}),(0,b.jsx)(g.default,{}),(0,b.jsx)(e.default,{}),(0,b.jsx)(k.ServiceFit,{data:a.fit}),(0,b.jsx)(e.default,{}),(0,b.jsx)(k.ServiceFinalCTA,{data:a.finalCta}),(0,b.jsx)(h.default,{}),(0,b.jsx)(k.ServiceFAQ,{data:a.faq})]}))])}];

//# sourceMappingURL=components_pages_AIVideoProduction_tsx_0ellz8~._.js.map