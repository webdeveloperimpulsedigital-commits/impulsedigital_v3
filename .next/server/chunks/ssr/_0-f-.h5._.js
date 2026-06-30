module.exports=[77876,47761,a=>{"use strict";var b=a.i(87924),c=a.i(94333);a.s(["default",0,()=>(0,b.jsxs)("section",{className:"cosmos-section",id:"cases-pin",children:[(0,b.jsx)("div",{className:"container",style:{position:"relative",zIndex:10,textAlign:"center",paddingTop:"8rem"},children:(0,b.jsx)("h2",{className:"section-heading split-text",children:"Work that earned its numbers"})}),(0,b.jsxs)("div",{className:"cosmos-wrapper",children:[(0,b.jsxs)(c.default,{href:"/case-studies/mastercard/",className:"cosmos-card",style:{textDecoration:"none",color:"inherit"},children:[(0,b.jsx)("img",{src:"/case studies/Written Content/Mastercard/Mastercard Title.webp",className:"hs-card-img",alt:"Mastercard WhatsApp Marketing and Merchant Outreach Strategy",loading:"lazy",decoding:"async",width:"600",height:"400"}),(0,b.jsxs)("div",{className:"hs-card-inner",children:[(0,b.jsx)("h3",{className:"hs-client",children:"Mastercard"}),(0,b.jsx)("p",{className:"hs-desc",children:"101 merchant queries through a channel they already trusted."})]})]}),(0,b.jsxs)(c.default,{href:"/case-studies/hul/",className:"cosmos-card",style:{textDecoration:"none",color:"inherit"},children:[(0,b.jsx)("img",{src:"/case studies/Written Content/HUL 1/HUL 1 Title.webp",className:"hs-card-img",alt:"Hindustan Unilever Performance Marketing and Coupon Campaign",loading:"lazy",decoding:"async",width:"600",height:"400"}),(0,b.jsxs)("div",{className:"hs-card-inner",children:[(0,b.jsx)("h3",{className:"hs-client",children:"HUL"}),(0,b.jsx)("p",{className:"hs-desc",children:"12,548+ coupon journeys built to move people from click to store."})]})]}),(0,b.jsxs)(c.default,{href:"/case-studies/shaking-things-up/",className:"cosmos-card",style:{textDecoration:"none",color:"inherit"},children:[(0,b.jsx)("img",{src:"/images/case-study-image/salt/tata-cunsumer.png",className:"hs-card-img",alt:"Tata Consumer Products Case Study",loading:"lazy",decoding:"async",width:"600",height:"400"}),(0,b.jsxs)("div",{className:"hs-card-inner",children:[(0,b.jsx)("h3",{className:"hs-client",children:"Tata Consumer Products"}),(0,b.jsx)("p",{className:"hs-desc",children:"Decoding category transformation for staple ingredients and mapping diaspora demand to market launch."})]})]}),(0,b.jsxs)(c.default,{href:"/case-studies/abg-kbc/",className:"cosmos-card",style:{textDecoration:"none",color:"inherit"},children:[(0,b.jsx)("img",{src:"/case studies/Written Content/ABG x KBC/ABG x KBC Title.webp",className:"hs-card-img",alt:"Aditya Birla Group x KBC CSR Campaign Case Study",loading:"lazy",decoding:"async",width:"600",height:"400"}),(0,b.jsxs)("div",{className:"hs-card-inner",children:[(0,b.jsx)("h3",{className:"hs-client",children:"Aditya Birla Group × KBC"}),(0,b.jsx)("p",{className:"hs-desc",children:"A question on KBC became a child’s shot at education."})]})]}),(0,b.jsxs)(c.default,{href:"/case-studies/qure-ai/",className:"cosmos-card",style:{textDecoration:"none",color:"inherit"},children:[(0,b.jsx)("img",{src:"/case studies/Written Content/Qure.ai/QureAI Title.webp",className:"hs-card-img",alt:"Qure.ai Healthcare AI SEO Traffic Case Study",loading:"lazy",decoding:"async",width:"600",height:"400"}),(0,b.jsxs)("div",{className:"hs-card-inner",children:[(0,b.jsx)("h3",{className:"hs-client",children:"Qure.ai"}),(0,b.jsx)("p",{className:"hs-desc",children:"737% increase in organic traffic from healthcare buyers who search with intent."})]})]}),(0,b.jsxs)(c.default,{href:"/case-studies/uppercase/",className:"cosmos-card",style:{textDecoration:"none",color:"inherit"},children:[(0,b.jsx)("img",{src:"/case studies/Written Content/Uppercase/Uppercase Title.webp",className:"hs-card-img",alt:"Uppercase AI-Led Social Media Campaign Case Study",loading:"lazy",decoding:"async",width:"600",height:"400"}),(0,b.jsxs)("div",{className:"hs-card-inner",children:[(0,b.jsx)("h3",{className:"hs-client",children:"Uppercase"}),(0,b.jsx)("p",{className:"hs-desc",children:"5.49M plays for a New Year idea built with AI, led by human instinct."})]})]})]}),(0,b.jsx)("div",{className:"cosmos-cta",style:{position:"absolute",bottom:"12vh",left:"50%",transform:"translateX(-50%)",zIndex:10},children:(0,b.jsx)(c.default,{href:"/case-studies/",className:"btn","data-cursor":"EXPLORE",children:"SEE THE WORK BEHIND THE NUMBERS"})})]})],77876);var d=a.i(72131);a.s(["default",0,()=>{let a=(0,d.useRef)(null),[c,e]=(0,d.useState)(!1);return(0,d.useEffect)(()=>{let b=a.current;if(!b)return;let c=new IntersectionObserver(a=>{a[0].isIntersecting&&(e(!0),c.disconnect())},{rootMargin:"200px"});return c.observe(b),()=>{c.disconnect()}},[]),(0,b.jsx)("section",{className:"brand-film","aria-label":"Brand film",children:(0,b.jsx)("div",{className:"brand-film-frame",children:(0,b.jsx)("video",{ref:a,className:"brand-film-video",autoPlay:!0,muted:!0,loop:!0,playsInline:!0,preload:"none","aria-hidden":"true",children:c&&(0,b.jsx)("source",{src:"/Impulse Video.mp4",type:"video/mp4"})})})})}],47761)},27463,a=>{"use strict";let b=a=>(Array.isArray(a)?a:[a]).filter(a=>a instanceof HTMLElement);a.s(["startHeroCopyReveal",0,({primary:a,supporting:c,actions:d})=>{let e=[{elements:b(a),delay:0},{elements:b(c),delay:120},{elements:b(d),delay:220}],f=e.flatMap(({elements:a})=>a),g=0,h=!1;return(async()=>{h||(g=window.requestAnimationFrame(()=>{e.forEach(({elements:a,delay:b})=>{a.forEach((a,c)=>{a.style.setProperty("--hero-copy-delay",`${b+70*c}ms`),a.classList.add("hero-copy-reveal-active")})})}))})(),()=>{h=!0,g&&window.cancelAnimationFrame(g),f.forEach(a=>{a.classList.remove("hero-copy-reveal-active"),a.style.removeProperty("--hero-copy-delay")})}}])},84600,a=>{"use strict";var b=a.i(87924),c=a.i(72131),d=a.i(27463);a.s(["default",0,({headlineParts:a,headlineAccent:e,headlineHtml:f,description:g,buttons:h})=>((0,c.useLayoutEffect)(()=>(0,d.startHeroCopyReveal)({primary:document.querySelector(".svc-hero-headline"),supporting:document.querySelector(".svc-hero-page-desc"),actions:Array.from(document.querySelectorAll(".svc-hero-cta-row .btn"))}),[]),(0,b.jsx)("section",{className:"svc-hero-page",id:"hero",children:(0,b.jsxs)("div",{className:"svc-hero-page-content",children:[f?(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("h1",{style:{position:"absolute",width:"1px",height:"1px",padding:0,margin:"-1px",overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",border:0},dangerouslySetInnerHTML:{__html:f.replace(/<[^>]*>?/gm,"")}}),(0,b.jsx)("div",{className:"svc-hero-headline hero-copy-reveal","aria-hidden":"true",dangerouslySetInnerHTML:{__html:f}})]}):(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("h1",{style:{position:"absolute",width:"1px",height:"1px",padding:0,margin:"-1px",overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",border:0},children:a?.join(" ")}),(0,b.jsx)("div",{className:"svc-hero-headline hero-copy-reveal","aria-hidden":"true",children:a?.map((d,f)=>(0,b.jsxs)(c.default.Fragment,{children:[d===e?(0,b.jsx)("span",{style:{color:"var(--impulse-violet)"},children:d}):d,f<(a?.length||0)-1&&(0,b.jsxs)(b.Fragment,{children:[" ",(0,b.jsx)("br",{})]})]},f))})]}),(0,b.jsx)("p",{className:"svc-hero-page-desc hero-copy-reveal",dangerouslySetInnerHTML:{__html:g}}),(0,b.jsx)("div",{className:"svc-hero-cta-row",children:h.map((a,c)=>(0,b.jsxs)("a",{href:a.link,className:"btn hero-copy-reveal","data-cursor":a.cursor,style:{"--hero-copy-offset":"1.15rem"},onClick:b=>((a,b)=>{if(b.startsWith("#")){a.preventDefault();let c=document.querySelector(b);c&&c.scrollIntoView({behavior:"smooth"})}})(b,a.link),children:[(0,b.jsx)("span",{className:"btn-text",dangerouslySetInnerHTML:{__html:a.text}}),(0,b.jsx)("div",{className:"btn-fill"})]},c))})]})}))])},14507,a=>{"use strict";var b=a.i(87924);a.s(["default",0,()=>(0,b.jsxs)("div",{className:"svc-handoff","aria-hidden":"true",children:[(0,b.jsx)("div",{className:"svc-handoff-line"}),(0,b.jsx)("div",{className:"svc-handoff-mark",children:(0,b.jsx)("svg",{viewBox:"801 344 274 272",children:(0,b.jsx)("use",{href:"#impulse-mark"})})})]})])},19218,a=>{"use strict";var b=a.i(87924),c=a.i(72131),d=a.i(94333);let e=[{name:"Airoli",slug:"airoli",compName:"SeoAiroliLocation",varName:"seoAiroliData"},{name:"Andheri",slug:"andheri",compName:"SeoAndheriLocation",varName:"seoAndheriData"},{name:"Bandra",slug:"bandra",compName:"SeoBandraLocation",varName:"seoBandraData"},{name:"Borivali",slug:"borivali",compName:"SeoBorivaliLocation",varName:"seoBorivaliData"},{name:"Dadar",slug:"dadar",compName:"SeoDadarLocation",varName:"seoDadarData"},{name:"Ghansoli",slug:"ghansoli",compName:"SeoGhansoliLocation",varName:"seoGhansoliData"},{name:"Ghatkopar",slug:"ghatkopar",compName:"SeoGhatkoparLocation",varName:"seoGhatkoparData"},{name:"Goregaon",slug:"goregaon",compName:"SeoGoregaonLocation",varName:"seoGoregaonData"},{name:"Jogeshwari",slug:"jogeshwari",compName:"SeoJogeshwariLocation",varName:"seoJogeshwariData"},{name:"Kandivali",slug:"kandivali",compName:"SeoKandivaliLocation",varName:"seoKandivaliData"},{name:"Kharghar",slug:"kharghar",compName:"SeoKhargharLocation",varName:"seoKhargharData"},{name:"Koparkhairane",slug:"koparkhairane",compName:"SeoKoparkhairaneLocation",varName:"seoKoparkhairaneData"},{name:"Malad",slug:"malad",compName:"SeoMaladLocation",varName:"seoMaladData"},{name:"Mansarovar",slug:"mansarovar",compName:"SeoMansarovarLocation",varName:"seoMansarovarData"},{name:"Mira Road",slug:"mira-road",compName:"SeoMiraRoadLocation",varName:"seoMiraRoadData"},{name:"Mulund",slug:"mulund",compName:"SeoMulundLocation",varName:"seoMulundData"},{name:"Mumbai",slug:"mumbai",compName:"SeoMumbaiLocation",varName:"seoMumbaiData"},{name:"Navi Mumbai",slug:"navi-mumbai",compName:"SeoNaviMumbaiLocation",varName:"seoNaviMumbaiData"},{name:"Nerul",slug:"nerul",compName:"SeoNerulLocation",varName:"seoNerulData"},{name:"Panvel",slug:"panvel",compName:"SeoPanvelLocation",varName:"seoPanvelData"},{name:"Sanpada",slug:"sanpada",compName:"SeoSanpadaLocation",varName:"seoSanpadaData"},{name:"Turbhe",slug:"turbhe",compName:"SeoTurbheLocation",varName:"seoTurbheData"},{name:"Vashi",slug:"vashi",compName:"SeoVashiLocation",varName:"seoVashiData"}];a.s(["SEOLocationsGrid",0,({currentLocation:a})=>{let[f,g]=(0,c.useState)(!1),[h,i]=(0,c.useState)(!1),j=(0,c.useRef)(null),k=e.filter(b=>b.name!==a);return(0,c.useEffect)(()=>{let a=a=>{j.current&&!j.current.contains(a.target)&&g(!1)};return document.addEventListener("mousedown",a),()=>document.removeEventListener("mousedown",a)},[]),(0,b.jsxs)("section",{className:"svc-section",style:{paddingBottom:"8rem",position:"relative",zIndex:9999,overflow:"visible"},children:[(0,b.jsx)("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"80%",height:"60%",background:"radial-gradient(circle, rgba(84, 61, 152, 0.15) 0%, rgba(0,0,0,0) 70%)",zIndex:0,pointerEvents:"none"}}),(0,b.jsxs)("div",{className:"container",style:{position:"relative",zIndex:2},children:[(0,b.jsx)("div",{style:{width:"100%",display:"flex",justifyContent:"center"},children:(0,b.jsxs)("h2",{className:"svc-h2",style:{fontSize:"clamp(2.5rem, 4vw, 4rem)",textAlign:"center",margin:"0 auto 3.5rem auto",width:"100%",padding:0},children:["Explore More ",(0,b.jsx)("span",{style:{color:"var(--impulse-violet)"},children:"Locations"})]})}),(0,b.jsx)("style",{children:`
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

          .loc-show-all-btn {
            display: block;
            width: 100%;
            padding: 1rem 2rem;
            color: var(--impulse-violet);
            background: rgba(124, 58, 237, 0.05);
            border: none;
            border-top: 1px solid rgba(255, 255, 255, 0.05);
            font-family: var(--font-heading);
            font-size: 1.1rem;
            font-weight: 600;
            cursor: pointer;
            text-align: center;
            transition: all 0.2s ease;
          }

          .loc-show-all-btn:hover {
            background: rgba(124, 58, 237, 0.15);
            color: #fff;
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
        `}),(0,b.jsxs)("div",{className:"loc-dropdown-container",ref:j,children:[(0,b.jsxs)("div",{className:"loc-dropdown-header",onClick:()=>g(!f),children:[(0,b.jsx)("span",{children:"Select a Location"}),(0,b.jsx)("svg",{className:`loc-dropdown-icon ${f?"open":""}`,width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,b.jsx)("polyline",{points:"6 9 12 15 18 9"})})]}),(0,b.jsxs)("div",{className:`loc-dropdown-list ${f?"open":""}`,"data-lenis-prevent":"true",children:[k.slice(0,h?void 0:5).map(a=>(0,b.jsx)(d.default,{href:`/brand-infrastructure/search-engine-optimisation/${a.slug}/`,className:"loc-dropdown-item",onClick:()=>g(!1),children:a.name},a.slug)),!h&&k.length>5&&(0,b.jsx)("button",{className:"loc-show-all-btn",onClick:()=>i(!0),children:"+ Show More"})]})]})]})]})}],19218)},32218,a=>{"use strict";var b=a.i(87924),c=a.i(72131),d=a.i(50944),e=a.i(19218),f=a.i(14507);a.s(["default",0,({data:a})=>{let[g,h]=(0,c.useState)(null),i=(0,d.usePathname)(),j="/ae"===i||i&&i.startsWith("/ae/");return(0,c.useEffect)(()=>{let a=function(a=8e3){return()=>{}}();return()=>{a()}},[]),(0,b.jsxs)(b.Fragment,{children:[a.services&&a.services.items&&a.services.items.length>0&&(0,b.jsx)("section",{className:"svc-uses glass-panel",id:"loc-services",children:(0,b.jsxs)("div",{className:"container",children:[a.services.title&&(0,b.jsx)("h2",{className:"svc-h2 split-text",children:a.services.title}),(0,b.jsx)("div",{className:"svc-uses-grid",children:a.services.items.map((a,c)=>a.title&&(0,b.jsxs)("div",{className:"svc-use-card seo-loc-card","data-cursor":"DEFAULT",children:[(0,b.jsx)("div",{className:"svc-use-corner",children:(0,b.jsx)("svg",{viewBox:"801 344 274 272",children:(0,b.jsx)("use",{href:"#impulse-mark"})})}),(0,b.jsx)("h3",{className:"svc-use-title",children:a.title}),a.text.map((a,c)=>(0,b.jsx)("p",{className:"svc-use-body",children:a},c))]},c))})]})}),a.whyUs&&a.whyUs.items&&a.whyUs.items.length>0&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(f.default,{}),(0,b.jsx)("section",{className:"svc-fit svc-text-list-wrapper",children:(0,b.jsx)("div",{className:"container",children:(0,b.jsxs)("div",{className:"svc-fit-grid",children:[(0,b.jsx)("div",{children:a.whyUs.title&&(0,b.jsx)("h2",{className:"svc-h2 split-text",children:a.whyUs.title})}),(0,b.jsx)("div",{children:(0,b.jsx)("ul",{className:"svc-fit-list",children:a.whyUs.items.map((a,c)=>(0,b.jsxs)("li",{children:[(0,b.jsx)("strong",{style:{display:"block",marginBottom:"0.5rem",color:"var(--impulse-violet)"},children:a.title}),a.text.map((a,c)=>(0,b.jsx)("p",{style:{color:"var(--soft-grey)"},children:a},c))]},c))})})]})})})]}),a.process&&a.process.items&&a.process.items.length>0&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(f.default,{}),(0,b.jsx)("section",{className:"services glass-panel",id:"loc-process",children:(0,b.jsxs)("div",{className:"container",children:[a.process.title&&(0,b.jsx)("h2",{className:"section-heading split-text",children:a.process.title}),(0,b.jsx)("div",{className:"scrub-container",children:a.process.items.map((a,c)=>(0,b.jsxs)("div",{className:"scrub-item",children:[(0,b.jsxs)("div",{className:"scrub-left",children:[(0,b.jsx)("div",{className:"service-mark-draw","aria-hidden":"true",children:(0,b.jsx)("svg",{viewBox:"801 344 274 272",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:(0,b.jsx)("path",{className:"service-mark-svg-path",d:"M1014.2,569.56c1.74-38.31.87-92.29-14.17-126.43-4.45-10.09-11.39-18.02-21.2-22.92-19.98-9.99-55.06-15.74-77.2-15.78l-54.99-.1c-11.88-.02-22.87-4.01-24.19-14.77-1.4-11.46,9.4-19.23,20.5-20.7,37.6-5.01,74.9-7.39,112.77-5.34,18.7,1.01,36.2,3.78,53.65,9.6,17.16,5.73,29.66,17.62,35.66,34.79s8.71,34.06,9.87,52.44c2.45,39.04-.02,77.43-5.33,116.08-1.52,11.09-10.07,21.87-21.85,19.47-10.45-2.12-14.04-14.54-13.51-26.33Z",fill:"none",stroke:"#543D98",strokeWidth:"12",strokeLinecap:"round",strokeLinejoin:"round"})})}),(0,b.jsx)("span",{className:"service-num",children:(c+1).toString().padStart(2,"0")})]}),(0,b.jsxs)("div",{className:"scrub-right",children:[(0,b.jsx)("h3",{className:"scrub-title text-fill","data-text":a.title,children:a.title}),a.text.map((a,c)=>(0,b.jsx)("p",{className:"scrub-desc",children:a},c))]})]},c))})]})})]}),a.deliverables&&a.deliverables.items&&a.deliverables.items.length>0&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(f.default,{}),(0,b.jsx)("section",{className:"svc-guardrails",children:(0,b.jsxs)("div",{className:"container",children:[a.deliverables.title&&(0,b.jsx)("h2",{className:"svc-h2 split-text",children:a.deliverables.title}),(0,b.jsx)("div",{className:"svc-guard-list",children:a.deliverables.items.map((a,c)=>(0,b.jsxs)("div",{className:"svc-guard-row",children:[(0,b.jsx)("span",{className:"mark-glyph",children:(0,b.jsx)("svg",{viewBox:"801 344 274 272",children:(0,b.jsx)("use",{href:"#impulse-mark"})})}),(0,b.jsx)("div",{className:"svc-guard-title",children:a.title}),(0,b.jsx)("div",{className:"svc-guard-desc",children:a.text.map((a,c)=>(0,b.jsx)("p",{children:a},c))})]},c))})]})})]}),a.faq&&a.faq.items&&a.faq.items.length>0&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(f.default,{}),(0,b.jsx)("section",{className:"faq glass-panel",id:"faq",children:(0,b.jsxs)("div",{className:"container",children:[(0,b.jsx)("h2",{className:"section-heading split-text",children:a.faq.title||"FAQ's Curious Much?"}),(0,b.jsx)("div",{className:"accordion",children:a.faq.items.map((a,c)=>{let d=g===c;return(0,b.jsxs)("div",{className:`acc-item ${d?"active":""}`,children:[(0,b.jsxs)("div",{className:"acc-header",style:{cursor:"pointer"},onClick:()=>{h(g===c?null:c),setTimeout(()=>{let{ScrollTrigger:a}=window;a&&a.refresh()},350)},children:[(0,b.jsx)("h3",{children:j?a.question.replace(/\bMumbai\b/g,"Dubai").replace(/\bmumbai\b/g,"dubai"):a.question}),(0,b.jsx)("span",{className:"acc-icon",style:{transform:d?"rotate(45deg)":"none",transition:"transform 0.3s"},children:"+"})]}),(0,b.jsx)("div",{className:"acc-content",style:{maxHeight:d?"1000px":"0px",overflow:"hidden",transition:"max-height 0.4s ease"},children:a.answer.map((a,c)=>(0,b.jsx)("p",{dangerouslySetInnerHTML:{__html:j?a.replace(/\bMumbai\b/g,"Dubai").replace(/\bmumbai\b/g,"dubai"):a}},c))})]},c)})})]})})]}),(0,b.jsx)(e.SEOLocationsGrid,{currentLocation:a.location})]})}])}];

//# sourceMappingURL=_0-f-.h5._.js.map