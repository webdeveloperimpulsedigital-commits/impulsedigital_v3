module.exports=[26803,a=>{"use strict";var b=a.i(87924),c=a.i(72131),d=a.i(50944),e=a.i(92263),f=a.i(84600),g=a.i(14507),h=a.i(1634),i=a.i(72688),j=a.i(87408),k=a.i(68406),l=a.i(70122),m=a.i(94333);let n=[{name:"Mumbai",slug:"mumbai"},{name:"Thane",slug:"thane"},{name:"Navi Mumbai",slug:"navi-mumbai"},{name:"Vashi",slug:"vashi"},{name:"Andheri",slug:"andheri"},{name:"Malad",slug:"malad"}],o=({currentLocation:a})=>{let[d,e]=(0,c.useState)(!1),f=(0,c.useRef)(null),g=n.filter(b=>b.name.toLowerCase()!==(a||"").toLowerCase());return(0,c.useEffect)(()=>{let a=a=>{f.current&&!f.current.contains(a.target)&&e(!1)};return document.addEventListener("mousedown",a),()=>document.removeEventListener("mousedown",a)},[]),(0,b.jsxs)("section",{className:"svc-section",style:{paddingBottom:"8rem",position:"relative",zIndex:9999,overflow:"visible"},children:[(0,b.jsx)("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"80%",height:"60%",background:"radial-gradient(circle, rgba(84, 61, 152, 0.15) 0%, rgba(0,0,0,0) 70%)",zIndex:0,pointerEvents:"none"}}),(0,b.jsxs)("div",{className:"container",style:{position:"relative",zIndex:2},children:[(0,b.jsx)("div",{style:{width:"100%",display:"flex",justifyContent:"center"},children:(0,b.jsxs)("h2",{className:"svc-h2",style:{fontSize:"clamp(2.5rem, 4vw, 4rem)",textAlign:"center",margin:"0 auto 3.5rem auto",width:"100%",padding:0},children:["Explore More ",(0,b.jsx)("span",{style:{color:"var(--impulse-violet)"},children:"Locations"})]})}),(0,b.jsx)("style",{children:`
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
        `}),(0,b.jsxs)("div",{className:"loc-dropdown-container",ref:f,children:[(0,b.jsxs)("div",{className:"loc-dropdown-header",onClick:()=>e(!d),children:[(0,b.jsx)("span",{children:"Select a Location"}),(0,b.jsx)("svg",{className:`loc-dropdown-icon ${d?"open":""}`,width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,b.jsx)("polyline",{points:"6 9 12 15 18 9"})})]}),(0,b.jsx)("div",{className:`loc-dropdown-list ${d?"open":""}`,"data-lenis-prevent":"true",children:g.map(a=>(0,b.jsx)(m.default,{href:`/brand-infrastructure/social-media-marketing/${a.slug}/`,className:"loc-dropdown-item",onClick:()=>e(!1),children:a.name},a.slug))})]})]})]})};var p=a.i(56031);a.s(["default",0,({data:a})=>{let m=((0,d.usePathname)()||"").startsWith("/ae");return(0,l.f)(),(0,c.useEffect)(()=>(document.body.classList.add("social-page"),()=>{document.body.classList.remove("social-page")}),[]),(0,e.f)((a,b)=>{let c,d,e=document.getElementById("channels-stage"),f=document.getElementById("channels-orbit-lines"),g=document.querySelector(".svc-channels-center"),h=g?g.querySelector("path"):null,i=null,j=!1,k=null,l=()=>{};if(!window.matchMedia("(max-width: 768px)").matches&&e&&f&&g&&h){let b=[],m=0,n=0,o=80,p=()=>{a.fromTo(h,{strokeWidth:6,stroke:"rgba(138, 92, 246, 0.85)"},{strokeWidth:11,stroke:"rgba(220, 200, 255, 1)",duration:.18,yoyo:!0,repeat:1,ease:"power2.out"})},q=()=>{if(!b.length)return;let c=Math.floor(Math.random()*b.length),d=b[c],e=document.createElementNS("http://www.w3.org/2000/svg","circle");e.setAttribute("cx",String(d.x)),e.setAttribute("cy",String(d.y)),e.setAttribute("r","4.5"),e.setAttribute("class","svc-channels-pulse"),f.appendChild(e),a.timeline({onComplete:()=>e.remove()}).fromTo(e,{opacity:0,attr:{r:2}},{opacity:1,attr:{r:5},duration:.35,ease:"power2.out"}).to(e,{attr:{cx:d.tx,cy:d.ty},duration:1.3,ease:"power2.in"},0).to(e,{opacity:0,attr:{r:2},duration:.2,ease:"power2.in"},"-=0.18").add(p,"-=0.18")};(l=()=>{let a=e.getBoundingClientRect();f.setAttribute("viewBox",`0 0 ${a.width} ${a.height}`),m=a.width/2,n=a.height/2;let c=g.getBoundingClientRect();o=.46*Math.min(c.width,c.height),b=[...e.querySelectorAll(".svc-channel-chip")].map(b=>{let c=b.getBoundingClientRect(),d=c.left-a.left+c.width/2,e=c.top-a.top+c.height/2,f=m-d,g=n-e,h=Math.sqrt(f*f+g*g)||1,i=d+(h-o)/h*f,j=e+(h-o)/h*g;return{x:d,y:e,tx:i,ty:j}}),f.querySelectorAll("line").forEach(a=>a.remove()),b.forEach(a=>{let b=document.createElementNS("http://www.w3.org/2000/svg","line");b.setAttribute("x1",a.x),b.setAttribute("y1",a.y),b.setAttribute("x2",a.tx),b.setAttribute("y2",a.ty),f.appendChild(b)})})(),c=setTimeout(l,250),d=setTimeout(l,800),window.addEventListener("resize",l),(k=new IntersectionObserver(b=>{b.forEach(b=>{b.isIntersecting?j||(j=!0,a.fromTo(h,{opacity:.15,strokeWidth:4},{opacity:1,strokeWidth:6,duration:1.6,ease:"power2.out"}),i=setInterval(q,380)):(j=!1,i&&(clearInterval(i),i=null))})},{threshold:.2})).observe(e),a.set(h,{opacity:.15})}return()=>{window.removeEventListener("resize",l),i&&clearInterval(i),clearTimeout(c),clearTimeout(d),k&&k.disconnect()}},[]),(0,b.jsxs)("main",{id:"main-content",children:[(0,b.jsx)(f.f,{headlineParts:a.hero.headlineParts,headlineAccent:a.hero.headlineAccent,description:a.hero.description,buttons:a.hero.buttons}),a.stats&&(0,b.jsx)(p.r,{data:a.stats}),(0,b.jsx)(g.f,{}),a.problem&&(0,b.jsx)(p.x,{data:a.problem}),(0,b.jsx)(g.f,{}),a.vs&&(0,b.jsx)(p.A,{data:a.vs}),(0,b.jsx)(g.f,{}),a.uses&&(0,b.jsx)(p.X,{data:a.uses}),(0,b.jsx)(g.f,{}),a.channels&&(0,b.jsx)("section",{className:"svc-channels has-mobile-signal",children:(0,b.jsxs)("div",{className:"container",children:[(0,b.jsx)("h2",{className:"svc-h2 split-text",children:a.channels.title}),(0,b.jsx)("p",{className:"svc-channels-intro",children:a.channels.intro}),(0,b.jsxs)("div",{className:"svc-channels-stage",id:"channels-stage",children:[(0,b.jsx)("svg",{className:"svc-channels-orbit-svg",id:"channels-orbit-lines","aria-hidden":"true"}),(0,b.jsx)("div",{className:"svc-channels-center","aria-hidden":"true",children:(0,b.jsx)("svg",{viewBox:"801 344 274 272",xmlns:"http://www.w3.org/2000/svg",children:(0,b.jsx)("path",{d:"M1014.2,569.56c1.74-38.31.87-92.29-14.17-126.43-4.45-10.09-11.39-18.02-21.2-22.92-19.98-9.99-55.06-15.74-77.2-15.78l-54.99-.1c-11.88-.02-22.87-4.01-24.19-14.77-1.4-11.46,9.4-19.23,20.5-20.7,37.6-5.01,74.9-7.39,112.77-5.34,18.7,1.01,36.2,3.78,53.65,9.6,17.16,5.73,29.66,17.62,35.66,34.79s8.71,34.06,9.87,52.44c2.45,39.04-.02,77.43-5.33,116.08-1.52,11.09-10.07,21.87-21.85,19.47-10.45-2.12-14.04-14.54-13.51-26.33Z"})})}),(0,b.jsx)("div",{className:"svc-channels-orbit",children:a.channels.list.map((a,c)=>(0,b.jsx)("span",{className:"svc-channel-chip",style:{"--chip-left":a.pos.left,"--chip-top":a.pos.top},children:a.label},c))})]}),(0,b.jsx)(k.f,{items:a.channels.list.map(a=>a.label)})]})}),(0,b.jsx)(g.f,{}),a.whenToUse&&(0,b.jsx)(p.z,{data:a.whenToUse}),(0,b.jsx)(g.f,{}),a.guardrails&&(0,b.jsx)(p.V,{data:a.guardrails}),(0,b.jsx)(g.f,{}),a.process&&(0,b.jsx)(p.t,{data:a.process}),(0,b.jsx)(h.f,{title:"Trusted by Teams That See Social as a Growth Lever"}),(0,b.jsx)(i.f,{data:a.testimonials}),(0,b.jsx)(g.f,{}),a.fit&&(0,b.jsx)(p.i,{data:a.fit}),(0,b.jsx)(g.f,{}),a.finalCta&&(0,b.jsx)(p.l,{data:a.finalCta}),(0,b.jsx)(j.f,{title:"Let’s build social<br/>worth following."}),a.faq&&a.faq.items&&a.faq.items.length>0&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(g.f,{}),(0,b.jsx)(p.W,{data:a.faq})]}),!m&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(g.f,{}),(0,b.jsx)(o,{currentLocation:a.location})]})]})}],26803)}];

//# sourceMappingURL=components_pages_SocialMediaManagement_tsx_0uo_9sd1p9xno._.js.map