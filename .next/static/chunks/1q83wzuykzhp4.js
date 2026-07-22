(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,91676,e=>{"use strict";var t=e.i(43476),i=e.i(71645);e.s(["default",0,({items:e,className:s=""})=>{let a=(0,i.useId)(),n=`mobile-signal-rail-${a.replace(/[^a-zA-Z0-9_-]/g,"")}`;return(0,i.useEffect)(()=>{let e=document.getElementById(n),t=window.matchMedia("(max-width: 768px)").matches,i=window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(!e||!t)return;let s=null,a=null,r=!1,o=null,l=()=>{},c=!1,d=0,u=null,m=[],h=null,p=[],g=e=>new Promise(t=>{let i=window.setTimeout(t,e);p.push(i)}),w=async(t,i,s)=>{let a=t.querySelector(".mobile-signal-rail-card");if(!a)return void await g(520);let n=e.getBoundingClientRect(),o=a.getBoundingClientRect(),l=s.getBoundingClientRect(),c=parseFloat(getComputedStyle(e).getPropertyValue("--rail-x"))||34,d=o.top-n.top+o.height/2,u=l.top-n.top+l.height/2,m=o.left-n.left-5;i.style.transition="none",i.style.opacity="0",i.style.transform=`translate3d(${m}px, ${d}px, 0)`,i.getBoundingClientRect(),i.style.opacity="1",i.style.transition="transform 160ms ease-out, opacity 100ms ease-out",i.style.transform=`translate3d(${c-5}px, ${d}px, 0)`,await g(160),r||(i.style.transition="transform 420ms cubic-bezier(0.33, 0, 0.2, 1), opacity 120ms ease-out",i.style.transform=`translate3d(${c-5}px, ${u}px, 0)`,await g(420),i.style.opacity="0",await g(70))},b=async(t,i)=>{c||!u||(c=!0,await g(120),r||(await w(u,t,i),r||(i.classList.add("is-pulsing"),await g(220),i.classList.remove("is-pulsing"),e.classList.add("is-complete"))))},x=async()=>{if(e.classList.contains("is-running"))return;let t=e.querySelector(".mobile-signal-rail-brand"),i=e.querySelector(".mobile-signal-rail-line"),s=e.querySelector(".mobile-signal-rail-dot"),n=[...e.querySelectorAll("[data-mobile-signal-card]")];if(!t||!i||!s||!n.length||(e.classList.add("is-running"),t.classList.add("is-visible"),await g(180),r)||(i.classList.add("is-visible"),await g(180),r))return;let o=()=>{if(h=null,r)return;let e=m.shift();e&&(e=>{if(e.classList.contains("is-visible"))return;e.classList.add("is-visible","is-active"),u=e,d+=1;let i=window.setTimeout(()=>e.classList.remove("is-active"),260);p.push(i),d>=n.length&&(a?.disconnect(),b(s,t))})(e),m.length&&(h=window.setTimeout(o,90),p.push(h))},l=e=>{!(e.classList.contains("is-visible")||m.includes(e))&&(m.push(e),h||(h=window.setTimeout(o,60),p.push(h)))};a=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&l(e.target)})},{rootMargin:"0px 0px -12% 0px",threshold:.12}),n.forEach(e=>{a?.observe(e);let t=e.getBoundingClientRect();t.top<=.88*window.innerHeight&&t.bottom>0&&l(e)})};return i?e.classList.add("is-reduced","is-complete"):(l=()=>{o||(o=window.requestAnimationFrame(()=>{o=null;let t=e.getBoundingClientRect(),i=Math.min(.68*window.innerHeight,620);t.top<=i&&t.bottom>0&&(s?.disconnect(),e.classList.contains("is-running")||(o&&(window.cancelAnimationFrame(o),o=null),window.removeEventListener("scroll",l),window.removeEventListener("resize",l),x()))}))},(s=new IntersectionObserver((e,t)=>{e.forEach(e=>{e.isIntersecting&&(t.disconnect(),l())})},{rootMargin:"0px 0px -8% 0px",threshold:.01})).observe(e),window.addEventListener("scroll",l,{passive:!0}),window.addEventListener("resize",l),l()),()=>{r=!0,p.forEach(e=>clearTimeout(e)),m=[],h=null,o&&window.cancelAnimationFrame(o),window.removeEventListener("scroll",l),window.removeEventListener("resize",l),s&&s.disconnect(),a&&a.disconnect()}},[n]),(0,t.jsxs)("div",{className:`mobile-signal-rail-stage ${s}`.trim(),id:n,children:[(0,t.jsx)("div",{className:"mobile-signal-rail-brand","aria-hidden":"true",children:(0,t.jsx)("svg",{viewBox:"801 344 274 272",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{d:"M1014.2,569.56c1.74-38.31.87-92.29-14.17-126.43-4.45-10.09-11.39-18.02-21.2-22.92-19.98-9.99-55.06-15.74-77.2-15.78l-54.99-.1c-11.88-.02-22.87-4.01-24.19-14.77-1.4-11.46,9.4-19.23,20.5-20.7,37.6-5.01,74.9-7.39,112.77-5.34,18.7,1.01,36.2,3.78,53.65,9.6,17.16,5.73,29.66,17.62,35.66,34.79s8.71,34.06,9.87,52.44c2.45,39.04-.02,77.43-5.33,116.08-1.52,11.09-10.07,21.87-21.85,19.47-10.45-2.12-14.04-14.54-13.51-26.33Z"})})}),(0,t.jsx)("div",{className:"mobile-signal-rail-line","aria-hidden":"true"}),(0,t.jsx)("ol",{className:"mobile-signal-rail-list",children:e.map(e=>(0,t.jsxs)("li",{className:"mobile-signal-rail-item","data-mobile-signal-card":!0,children:[(0,t.jsx)("span",{className:"mobile-signal-rail-connector","aria-hidden":"true"}),(0,t.jsx)("div",{className:"mobile-signal-rail-card",children:e})]},e))}),(0,t.jsx)("span",{className:"mobile-signal-rail-dot","aria-hidden":"true"})]})}])},21570,e=>{"use strict";var t=e.i(43476),i=e.i(71645),s=e.i(18566),a=e.i(94008),n=e.i(62059),r=e.i(46035),o=e.i(51800),l=e.i(30133),c=e.i(63971),d=e.i(91676),u=e.i(40871),m=e.i(46835);let h=[{name:"Mumbai",slug:"mumbai"},{name:"Thane",slug:"thane"},{name:"Navi Mumbai",slug:"navi-mumbai"},{name:"Vashi",slug:"vashi"},{name:"Andheri",slug:"andheri"},{name:"Malad",slug:"malad"}],p=({currentLocation:e})=>{let[s,a]=(0,i.useState)(!1),n=(0,i.useRef)(null),r=h.filter(t=>t.name.toLowerCase()!==(e||"").toLowerCase());return(0,i.useEffect)(()=>{let e=e=>{n.current&&!n.current.contains(e.target)&&a(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]),(0,t.jsxs)("section",{className:"svc-section",style:{paddingBottom:"8rem",position:"relative",zIndex:9999,overflow:"visible"},children:[(0,t.jsx)("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"80%",height:"60%",background:"radial-gradient(circle, rgba(84, 61, 152, 0.15) 0%, rgba(0,0,0,0) 70%)",zIndex:0,pointerEvents:"none"}}),(0,t.jsxs)("div",{className:"container",style:{position:"relative",zIndex:2},children:[(0,t.jsx)("div",{style:{width:"100%",display:"flex",justifyContent:"center"},children:(0,t.jsxs)("h2",{className:"svc-h2",style:{fontSize:"clamp(2.5rem, 4vw, 4rem)",textAlign:"center",margin:"0 auto 3.5rem auto",width:"100%",padding:0},children:["Explore More ",(0,t.jsx)("span",{style:{color:"var(--impulse-violet)"},children:"Locations"})]})}),(0,t.jsx)("style",{children:`
          .loc-dropdown-container {
            max-width: 400px;
            margin: 0 auto;
            position: relative;
            z-index: 99999;
          }
          
          .loc-dropdown-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 1.2rem 2rem;
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 12px;
            color: var(--white);
            cursor: pointer;
            transition: all 0.3s ease;
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            font-family: var(--font-heading);
            font-size: 1.2rem;
            letter-spacing: 0.5px;
            user-select: none;
          }

          .loc-dropdown-header:hover {
            background: rgba(255, 255, 255, 0.08);
            border-color: rgba(124, 58, 237, 0.5);
            box-shadow: 0 0 20px rgba(124, 58, 237, 0.15);
          }

          .loc-dropdown-icon {
            transition: transform 0.3s ease;
          }

          .loc-dropdown-icon.open {
            transform: rotate(180deg);
          }

          .loc-dropdown-list {
            position: absolute;
            top: calc(100% + 0.5rem);
            bottom: auto;
            left: 0;
            width: 100%;
            background: #0f0f0f;
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 12px;
            max-height: 450px;
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;
            opacity: 0;
            visibility: hidden;
            pointer-events: none;
            transform: translateY(-10px);
            transition: all 0.3s ease;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.9);
            overscroll-behavior: auto !important;
            z-index: 99999;
          }

          .loc-dropdown-list.open {
            opacity: 1;
            visibility: visible;
            pointer-events: auto;
            transform: translateY(0);
          }

          /* Custom Scrollbar for dropdown */
          .loc-dropdown-list::-webkit-scrollbar {
            width: 8px;
          }
          .loc-dropdown-list::-webkit-scrollbar-track {
            background: rgba(255, 255, 255, 0.02);
            border-radius: 8px;
            margin: 4px 0;
          }
          .loc-dropdown-list::-webkit-scrollbar-thumb {
            background: rgba(124, 58, 237, 0.6);
            border-radius: 8px;
            border: 2px solid rgba(15, 15, 15, 0.98);
          }
          .loc-dropdown-list::-webkit-scrollbar-thumb:hover {
            background: rgba(124, 58, 237, 0.9);
          }

          .loc-dropdown-item {
            display: block;
            padding: 1rem 2rem;
            color: rgba(255, 255, 255, 0.85);
            text-decoration: none;
            font-family: var(--font-heading);
            font-size: 1.1rem;
            transition: all 0.2s ease;
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          }

          .loc-dropdown-item:last-child {
            border-bottom: none;
          }

          .loc-dropdown-item:hover {
            background: rgba(124, 58, 237, 0.15);
            color: #fff;
            padding-left: 2.5rem;
          }

          @media (max-width: 768px) {
            .loc-dropdown-list {
              position: absolute;
              max-height: 320px;
              overflow-y: auto;
              -webkit-overflow-scrolling: touch;
              top: calc(100% + 0.5rem);
              box-shadow: 0 10px 40px rgba(0, 0, 0, 0.9);
            }
          }
        `}),(0,t.jsxs)("div",{className:"loc-dropdown-container",ref:n,children:[(0,t.jsxs)("div",{className:"loc-dropdown-header",onClick:()=>a(!s),children:[(0,t.jsx)("span",{children:"Select a Location"}),(0,t.jsx)("svg",{className:`loc-dropdown-icon ${s?"open":""}`,width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,t.jsx)("polyline",{points:"6 9 12 15 18 9"})})]}),(0,t.jsx)("div",{className:`loc-dropdown-list ${s?"open":""}`,"data-lenis-prevent":"true",children:r.map(e=>(0,t.jsx)(m.default,{href:`/brand-infrastructure/social-media-marketing/${e.slug}/`,className:"loc-dropdown-item",onClick:()=>a(!1),children:e.name},e.slug))})]})]})]})};var g=e.i(88495);e.s(["default",0,({data:e})=>{let m=((0,s.usePathname)()||"").startsWith("/ae");return(0,u.useServicePageBackground)(),(0,i.useEffect)(()=>(document.body.classList.add("social-page"),()=>{document.body.classList.remove("social-page")}),[]),(0,a.useGsapSafeEffect)((e,t)=>{let i,s,a=document.getElementById("channels-stage"),n=document.getElementById("channels-orbit-lines"),r=document.querySelector(".svc-channels-center"),o=r?r.querySelector("path"):null,l=null,c=!1,d=null,u=()=>{};if(!window.matchMedia("(max-width: 768px)").matches&&a&&n&&r&&o){let t=[],m=0,h=0,p=80,g=()=>{e.fromTo(o,{strokeWidth:6,stroke:"rgba(138, 92, 246, 0.85)"},{strokeWidth:11,stroke:"rgba(220, 200, 255, 1)",duration:.18,yoyo:!0,repeat:1,ease:"power2.out"})},w=()=>{if(!t.length)return;let i=Math.floor(Math.random()*t.length),s=t[i],a=document.createElementNS("http://www.w3.org/2000/svg","circle");a.setAttribute("cx",String(s.x)),a.setAttribute("cy",String(s.y)),a.setAttribute("r","4.5"),a.setAttribute("class","svc-channels-pulse"),n.appendChild(a),e.timeline({onComplete:()=>a.remove()}).fromTo(a,{opacity:0,attr:{r:2}},{opacity:1,attr:{r:5},duration:.35,ease:"power2.out"}).to(a,{attr:{cx:s.tx,cy:s.ty},duration:1.3,ease:"power2.in"},0).to(a,{opacity:0,attr:{r:2},duration:.2,ease:"power2.in"},"-=0.18").add(g,"-=0.18")};(u=()=>{let e=a.getBoundingClientRect();n.setAttribute("viewBox",`0 0 ${e.width} ${e.height}`),m=e.width/2,h=e.height/2;let i=r.getBoundingClientRect();p=.46*Math.min(i.width,i.height),t=[...a.querySelectorAll(".svc-channel-chip")].map(t=>{let i=t.getBoundingClientRect(),s=i.left-e.left+i.width/2,a=i.top-e.top+i.height/2,n=m-s,r=h-a,o=Math.sqrt(n*n+r*r)||1,l=s+(o-p)/o*n,c=a+(o-p)/o*r;return{x:s,y:a,tx:l,ty:c}}),n.querySelectorAll("line").forEach(e=>e.remove()),t.forEach(e=>{let t=document.createElementNS("http://www.w3.org/2000/svg","line");t.setAttribute("x1",e.x),t.setAttribute("y1",e.y),t.setAttribute("x2",e.tx),t.setAttribute("y2",e.ty),n.appendChild(t)})})(),i=setTimeout(u,250),s=setTimeout(u,800),window.addEventListener("resize",u),(d=new IntersectionObserver(t=>{t.forEach(t=>{t.isIntersecting?c||(c=!0,e.fromTo(o,{opacity:.15,strokeWidth:4},{opacity:1,strokeWidth:6,duration:1.6,ease:"power2.out"}),l=setInterval(w,380)):(c=!1,l&&(clearInterval(l),l=null))})},{threshold:.2})).observe(a),e.set(o,{opacity:.15})}return()=>{window.removeEventListener("resize",u),l&&clearInterval(l),clearTimeout(i),clearTimeout(s),d&&d.disconnect()}},[]),(0,t.jsxs)("main",{id:"main-content",children:[(0,t.jsx)(n.default,{headlineParts:e.hero.headlineParts,headlineAccent:e.hero.headlineAccent,description:e.hero.description,buttons:e.hero.buttons}),e.stats&&(0,t.jsx)(g.ServiceStats,{data:e.stats}),(0,t.jsx)(r.default,{}),e.problem&&(0,t.jsx)(g.ServiceProblem,{data:e.problem}),(0,t.jsx)(r.default,{}),e.vs&&(0,t.jsx)(g.ServiceVs,{data:e.vs}),(0,t.jsx)(r.default,{}),e.uses&&(0,t.jsx)(g.ServiceUses,{data:e.uses}),(0,t.jsx)(r.default,{}),e.channels&&(0,t.jsx)("section",{className:"svc-channels has-mobile-signal",children:(0,t.jsxs)("div",{className:"container",children:[(0,t.jsx)("h2",{className:"svc-h2 split-text",children:e.channels.title}),(0,t.jsx)("p",{className:"svc-channels-intro",children:e.channels.intro}),(0,t.jsxs)("div",{className:"svc-channels-stage",id:"channels-stage",children:[(0,t.jsx)("svg",{className:"svc-channels-orbit-svg",id:"channels-orbit-lines","aria-hidden":"true"}),(0,t.jsx)("div",{className:"svc-channels-center","aria-hidden":"true",children:(0,t.jsx)("svg",{viewBox:"801 344 274 272",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{d:"M1014.2,569.56c1.74-38.31.87-92.29-14.17-126.43-4.45-10.09-11.39-18.02-21.2-22.92-19.98-9.99-55.06-15.74-77.2-15.78l-54.99-.1c-11.88-.02-22.87-4.01-24.19-14.77-1.4-11.46,9.4-19.23,20.5-20.7,37.6-5.01,74.9-7.39,112.77-5.34,18.7,1.01,36.2,3.78,53.65,9.6,17.16,5.73,29.66,17.62,35.66,34.79s8.71,34.06,9.87,52.44c2.45,39.04-.02,77.43-5.33,116.08-1.52,11.09-10.07,21.87-21.85,19.47-10.45-2.12-14.04-14.54-13.51-26.33Z"})})}),(0,t.jsx)("div",{className:"svc-channels-orbit",children:e.channels.list.map((e,i)=>(0,t.jsx)("span",{className:"svc-channel-chip",style:{"--chip-left":e.pos.left,"--chip-top":e.pos.top},children:e.label},i))})]}),(0,t.jsx)(d.default,{items:e.channels.list.map(e=>e.label)})]})}),(0,t.jsx)(r.default,{}),e.whenToUse&&(0,t.jsx)(g.ServiceWhenToUse,{data:e.whenToUse}),(0,t.jsx)(r.default,{}),e.guardrails&&(0,t.jsx)(g.ServiceGuardrails,{data:e.guardrails}),(0,t.jsx)(r.default,{}),e.process&&(0,t.jsx)(g.ServiceProcess,{data:e.process}),(0,t.jsx)(o.default,{title:"Trusted by Teams That See Social as a Growth Lever"}),(0,t.jsx)(l.default,{data:e.testimonials}),(0,t.jsx)(r.default,{}),e.fit&&(0,t.jsx)(g.ServiceFit,{data:e.fit}),(0,t.jsx)(r.default,{}),e.finalCta&&(0,t.jsx)(g.ServiceFinalCTA,{data:e.finalCta}),(0,t.jsx)(c.default,{title:"Let’s build social<br/>worth following."}),e.faq&&e.faq.items&&e.faq.items.length>0&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.default,{}),(0,t.jsx)(g.ServiceFAQ,{data:e.faq})]}),!m&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.default,{}),(0,t.jsx)(p,{currentLocation:e.location})]})]})}],21570)}]);