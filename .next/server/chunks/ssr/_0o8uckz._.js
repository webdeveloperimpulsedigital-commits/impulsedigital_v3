module.exports=[27463,a=>{"use strict";let b=a=>(Array.isArray(a)?a:[a]).filter(a=>a instanceof HTMLElement),c=async()=>{document.fonts?.ready&&await Promise.race([document.fonts.ready,new Promise(a=>window.setTimeout(a,900))])};a.s(["startHeroCopyReveal",0,({primary:a,supporting:d,actions:e})=>{let f=[{elements:b(a),delay:0},{elements:b(d),delay:120},{elements:b(e),delay:220}],g=f.flatMap(({elements:a})=>a),h=0,i=!1;return(async()=>{try{await c()}catch{}i||(h=window.requestAnimationFrame(()=>{f.forEach(({elements:a,delay:b})=>{a.forEach((a,c)=>{a.style.setProperty("--hero-copy-delay",`${b+70*c}ms`),a.classList.add("hero-copy-reveal-active")})})}))})(),()=>{i=!0,h&&window.cancelAnimationFrame(h),g.forEach(a=>{a.classList.remove("hero-copy-reveal-active"),a.style.removeProperty("--hero-copy-delay")})}}])},84600,a=>{"use strict";var b=a.i(87924),c=a.i(72131),d=a.i(27463);a.s(["default",0,({headlineParts:a,headlineAccent:e,headlineHtml:f,description:g,buttons:h})=>((0,c.useLayoutEffect)(()=>(0,d.startHeroCopyReveal)({primary:document.querySelector(".svc-hero-headline"),supporting:document.querySelector(".svc-hero-page-desc"),actions:Array.from(document.querySelectorAll(".svc-hero-cta-row .btn"))}),[]),(0,b.jsx)("section",{className:"svc-hero-page",id:"hero",children:(0,b.jsxs)("div",{className:"svc-hero-page-content",children:[f?(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("h1",{style:{position:"absolute",width:"1px",height:"1px",padding:0,margin:"-1px",overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",border:0},dangerouslySetInnerHTML:{__html:f.replace(/<[^>]*>?/gm,"")}}),(0,b.jsx)("div",{className:"svc-hero-headline hero-copy-reveal","aria-hidden":"true",dangerouslySetInnerHTML:{__html:f}})]}):(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("h1",{style:{position:"absolute",width:"1px",height:"1px",padding:0,margin:"-1px",overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",border:0},children:a?.join(" ")}),(0,b.jsx)("div",{className:"svc-hero-headline hero-copy-reveal","aria-hidden":"true",children:a?.map((d,f)=>(0,b.jsxs)(c.default.Fragment,{children:[d===e?(0,b.jsx)("span",{style:{color:"var(--impulse-violet)"},children:d}):d,f<(a?.length||0)-1&&(0,b.jsxs)(b.Fragment,{children:[" ",(0,b.jsx)("br",{})]})]},f))})]}),(0,b.jsx)("p",{className:"svc-hero-page-desc hero-copy-reveal",dangerouslySetInnerHTML:{__html:g}}),(0,b.jsx)("div",{className:"svc-hero-cta-row",children:h.map((a,c)=>(0,b.jsxs)("a",{href:a.link,className:"btn hero-copy-reveal","data-cursor":a.cursor,style:{"--hero-copy-offset":"1.15rem"},onClick:b=>((a,b)=>{if(b.startsWith("#")){a.preventDefault();let c=document.querySelector(b);c&&c.scrollIntoView({behavior:"smooth"})}})(b,a.link),children:[(0,b.jsx)("span",{className:"btn-text",dangerouslySetInnerHTML:{__html:a.text}}),(0,b.jsx)("div",{className:"btn-fill"})]},c))})]})}))])},14507,a=>{"use strict";var b=a.i(87924);a.s(["default",0,()=>(0,b.jsxs)("div",{className:"svc-handoff","aria-hidden":"true",children:[(0,b.jsx)("div",{className:"svc-handoff-line"}),(0,b.jsx)("div",{className:"svc-handoff-mark",children:(0,b.jsx)("svg",{viewBox:"801 344 274 272",children:(0,b.jsx)("use",{href:"#impulse-mark"})})})]})])},19218,a=>{"use strict";var b=a.i(87924),c=a.i(72131);let d=[{name:"Airoli",slug:"airoli",compName:"SeoAiroliLocation",varName:"seoAiroliData"},{name:"Andheri",slug:"andheri",compName:"SeoAndheriLocation",varName:"seoAndheriData"},{name:"Bandra",slug:"bandra",compName:"SeoBandraLocation",varName:"seoBandraData"},{name:"Borivali",slug:"borivali",compName:"SeoBorivaliLocation",varName:"seoBorivaliData"},{name:"Dadar",slug:"dadar",compName:"SeoDadarLocation",varName:"seoDadarData"},{name:"Ghansoli",slug:"ghansoli",compName:"SeoGhansoliLocation",varName:"seoGhansoliData"},{name:"Ghatkopar",slug:"ghatkopar",compName:"SeoGhatkoparLocation",varName:"seoGhatkoparData"},{name:"Goregaon",slug:"goregaon",compName:"SeoGoregaonLocation",varName:"seoGoregaonData"},{name:"Jogeshwari",slug:"jogeshwari",compName:"SeoJogeshwariLocation",varName:"seoJogeshwariData"},{name:"Kandivali",slug:"kandivali",compName:"SeoKandivaliLocation",varName:"seoKandivaliData"},{name:"Kharghar",slug:"kharghar",compName:"SeoKhargharLocation",varName:"seoKhargharData"},{name:"Koparkhairane",slug:"koparkhairane",compName:"SeoKoparkhairaneLocation",varName:"seoKoparkhairaneData"},{name:"Malad",slug:"malad",compName:"SeoMaladLocation",varName:"seoMaladData"},{name:"Mansarovar",slug:"mansarovar",compName:"SeoMansarovarLocation",varName:"seoMansarovarData"},{name:"Mira Road",slug:"mira-road",compName:"SeoMiraRoadLocation",varName:"seoMiraRoadData"},{name:"Mulund",slug:"mulund",compName:"SeoMulundLocation",varName:"seoMulundData"},{name:"Mumbai",slug:"mumbai",compName:"SeoMumbaiLocation",varName:"seoMumbaiData"},{name:"Navi Mumbai",slug:"navi-mumbai",compName:"SeoNaviMumbaiLocation",varName:"seoNaviMumbaiData"},{name:"Nerul",slug:"nerul",compName:"SeoNerulLocation",varName:"seoNerulData"},{name:"Panvel",slug:"panvel",compName:"SeoPanvelLocation",varName:"seoPanvelData"},{name:"Sanpada",slug:"sanpada",compName:"SeoSanpadaLocation",varName:"seoSanpadaData"},{name:"Turbhe",slug:"turbhe",compName:"SeoTurbheLocation",varName:"seoTurbheData"},{name:"Vashi",slug:"vashi",compName:"SeoVashiLocation",varName:"seoVashiData"}];a.s(["SEOLocationsGrid",0,({currentLocation:a})=>{let[e,f]=(0,c.useState)(!1),g=(0,c.useRef)(null),h=d.filter(b=>b.name!==a);return(0,c.useEffect)(()=>{let a=a=>{g.current&&!g.current.contains(a.target)&&f(!1)};return document.addEventListener("mousedown",a),()=>document.removeEventListener("mousedown",a)},[]),(0,b.jsxs)("section",{className:"svc-section",style:{paddingBottom:"8rem",position:"relative",zIndex:9999,overflow:"visible"},children:[(0,b.jsx)("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"80%",height:"60%",background:"radial-gradient(circle, rgba(84, 61, 152, 0.15) 0%, rgba(0,0,0,0) 70%)",zIndex:0,pointerEvents:"none"}}),(0,b.jsxs)("div",{className:"container",style:{position:"relative",zIndex:2},children:[(0,b.jsx)("div",{style:{width:"100%",display:"flex",justifyContent:"center"},children:(0,b.jsxs)("h2",{className:"svc-h2",style:{fontSize:"clamp(2.5rem, 4vw, 4rem)",textAlign:"center",margin:"0 auto 3.5rem auto",width:"100%",padding:0},children:["Explore More ",(0,b.jsx)("span",{style:{color:"var(--impulse-violet)"},children:"Locations"})]})}),(0,b.jsx)("style",{children:`
          .loc-dropdown-container {
            max-width: 400px;
            margin: 0 auto;
            position: relative;
            z-index: 100;
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
            bottom: calc(100% + 0.5rem);
            top: auto;
            left: 0;
            width: 100%;
            background: #0f0f0f;
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 12px;
            max-height: 250px;
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;
            opacity: 0;
            visibility: hidden;
            pointer-events: none;
            transform: translateY(10px);
            transition: all 0.3s ease;
            box-shadow: 0 -10px 40px rgba(0, 0, 0, 0.9);
            overscroll-behavior: contain;
            z-index: 101;
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
        `}),(0,b.jsxs)("div",{className:"loc-dropdown-container",ref:g,children:[(0,b.jsxs)("div",{className:"loc-dropdown-header",onClick:()=>f(!e),children:[(0,b.jsx)("span",{children:"Select a Location"}),(0,b.jsx)("svg",{className:`loc-dropdown-icon ${e?"open":""}`,width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,b.jsx)("polyline",{points:"6 9 12 15 18 9"})})]}),(0,b.jsx)("div",{className:`loc-dropdown-list ${e?"open":""}`,children:h.map(a=>(0,b.jsx)("a",{href:`/brand-infrastructure/search-engine-optimisation/${a.slug}/`,className:"loc-dropdown-item",children:a.name},a.slug))})]})]})]})}],19218)},70122,a=>{"use strict";var b=a.i(72131);a.s(["useServicePageBackground",0,function(a="#hero"){(0,b.useEffect)(()=>{},[a])}])},68406,a=>{"use strict";var b=a.i(87924),c=a.i(72131);a.s(["default",0,({items:a,className:d=""})=>{let e=(0,c.useId)(),f=`mobile-signal-rail-${e.replace(/[^a-zA-Z0-9_-]/g,"")}`;return(0,c.useEffect)(()=>{let a=document.getElementById(f),b=window.matchMedia("(max-width: 768px)").matches,c=window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(!a||!b)return;let d=null,e=null,g=!1,h=null,i=()=>{},j=!1,k=0,l=null,m=[],n=null,o=[],p=a=>new Promise(b=>{let c=window.setTimeout(b,a);o.push(c)}),q=async(b,c,d)=>{let e=b.querySelector(".mobile-signal-rail-card");if(!e)return void await p(520);let f=a.getBoundingClientRect(),h=e.getBoundingClientRect(),i=d.getBoundingClientRect(),j=parseFloat(getComputedStyle(a).getPropertyValue("--rail-x"))||34,k=h.top-f.top+h.height/2,l=i.top-f.top+i.height/2,m=h.left-f.left-5;c.style.transition="none",c.style.opacity="0",c.style.transform=`translate3d(${m}px, ${k}px, 0)`,c.getBoundingClientRect(),c.style.opacity="1",c.style.transition="transform 160ms ease-out, opacity 100ms ease-out",c.style.transform=`translate3d(${j-5}px, ${k}px, 0)`,await p(160),g||(c.style.transition="transform 420ms cubic-bezier(0.33, 0, 0.2, 1), opacity 120ms ease-out",c.style.transform=`translate3d(${j-5}px, ${l}px, 0)`,await p(420),c.style.opacity="0",await p(70))},r=async(b,c)=>{j||!l||(j=!0,await p(120),g||(await q(l,b,c),g||(c.classList.add("is-pulsing"),await p(220),c.classList.remove("is-pulsing"),a.classList.add("is-complete"))))},s=async()=>{if(a.classList.contains("is-running"))return;let b=a.querySelector(".mobile-signal-rail-brand"),c=a.querySelector(".mobile-signal-rail-line"),d=a.querySelector(".mobile-signal-rail-dot"),f=[...a.querySelectorAll("[data-mobile-signal-card]")];if(!b||!c||!d||!f.length||(a.classList.add("is-running"),b.classList.add("is-visible"),await p(180),g)||(c.classList.add("is-visible"),await p(180),g))return;let h=()=>{if(n=null,g)return;let a=m.shift();a&&(a=>{if(a.classList.contains("is-visible"))return;a.classList.add("is-visible","is-active"),l=a,k+=1;let c=window.setTimeout(()=>a.classList.remove("is-active"),260);o.push(c),k>=f.length&&(e?.disconnect(),r(d,b))})(a),m.length&&(n=window.setTimeout(h,90),o.push(n))},i=a=>{!(a.classList.contains("is-visible")||m.includes(a))&&(m.push(a),n||(n=window.setTimeout(h,60),o.push(n)))};e=new IntersectionObserver(a=>{a.forEach(a=>{a.isIntersecting&&i(a.target)})},{rootMargin:"0px 0px -12% 0px",threshold:.12}),f.forEach(a=>{e?.observe(a);let b=a.getBoundingClientRect();b.top<=.88*window.innerHeight&&b.bottom>0&&i(a)})};return c?a.classList.add("is-reduced","is-complete"):(i=()=>{h||(h=window.requestAnimationFrame(()=>{h=null;let b=a.getBoundingClientRect(),c=Math.min(.68*window.innerHeight,620);b.top<=c&&b.bottom>0&&(d?.disconnect(),a.classList.contains("is-running")||(h&&(window.cancelAnimationFrame(h),h=null),window.removeEventListener("scroll",i),window.removeEventListener("resize",i),s()))}))},(d=new IntersectionObserver((a,b)=>{a.forEach(a=>{a.isIntersecting&&(b.disconnect(),i())})},{rootMargin:"0px 0px -8% 0px",threshold:.01})).observe(a),window.addEventListener("scroll",i,{passive:!0}),window.addEventListener("resize",i),i()),()=>{g=!0,o.forEach(a=>clearTimeout(a)),m=[],n=null,h&&window.cancelAnimationFrame(h),window.removeEventListener("scroll",i),window.removeEventListener("resize",i),d&&d.disconnect(),e&&e.disconnect()}},[f]),(0,b.jsxs)("div",{className:`mobile-signal-rail-stage ${d}`.trim(),id:f,children:[(0,b.jsx)("div",{className:"mobile-signal-rail-brand","aria-hidden":"true",children:(0,b.jsx)("svg",{viewBox:"801 344 274 272",xmlns:"http://www.w3.org/2000/svg",children:(0,b.jsx)("path",{d:"M1014.2,569.56c1.74-38.31.87-92.29-14.17-126.43-4.45-10.09-11.39-18.02-21.2-22.92-19.98-9.99-55.06-15.74-77.2-15.78l-54.99-.1c-11.88-.02-22.87-4.01-24.19-14.77-1.4-11.46,9.4-19.23,20.5-20.7,37.6-5.01,74.9-7.39,112.77-5.34,18.7,1.01,36.2,3.78,53.65,9.6,17.16,5.73,29.66,17.62,35.66,34.79s8.71,34.06,9.87,52.44c2.45,39.04-.02,77.43-5.33,116.08-1.52,11.09-10.07,21.87-21.85,19.47-10.45-2.12-14.04-14.54-13.51-26.33Z"})})}),(0,b.jsx)("div",{className:"mobile-signal-rail-line","aria-hidden":"true"}),(0,b.jsx)("ol",{className:"mobile-signal-rail-list",children:a.map(a=>(0,b.jsxs)("li",{className:"mobile-signal-rail-item","data-mobile-signal-card":!0,children:[(0,b.jsx)("span",{className:"mobile-signal-rail-connector","aria-hidden":"true"}),(0,b.jsx)("div",{className:"mobile-signal-rail-card",children:a})]},a))}),(0,b.jsx)("span",{className:"mobile-signal-rail-dot","aria-hidden":"true"})]})}])}];

//# sourceMappingURL=_0o8uckz._.js.map