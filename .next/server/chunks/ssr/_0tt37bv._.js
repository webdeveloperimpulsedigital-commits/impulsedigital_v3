module.exports=[27463,a=>{"use strict";let b=a=>(Array.isArray(a)?a:[a]).filter(a=>a instanceof HTMLElement);a.s(["startHeroCopyReveal",0,({primary:a,supporting:c,actions:d})=>{let e=[{elements:b(a),delay:0},{elements:b(c),delay:120},{elements:b(d),delay:220}],f=e.flatMap(({elements:a})=>a),g=0,h=!1;return(async()=>{h||(g=window.requestAnimationFrame(()=>{e.forEach(({elements:a,delay:b})=>{a.forEach((a,c)=>{a.style.setProperty("--hero-copy-delay",`${b+70*c}ms`),a.classList.add("hero-copy-reveal-active")})})}))})(),()=>{h=!0,g&&window.cancelAnimationFrame(g),f.forEach(a=>{a.classList.remove("hero-copy-reveal-active"),a.style.removeProperty("--hero-copy-delay")})}}])},92263,a=>{"use strict";var b=a.i(72131);a.s(["useGsapSafeEffect",0,function(a,c=[],d=!1){(0,b.useEffect)(()=>{},c)}])},57217,a=>{"use strict";var b=a.i(87924),c=a.i(72131),d=a.i(92263),e=a.i(50944),f=a.i(27463);let g=[{client:"Amazon India",subNames:["Amazon Unplugged","Amazon India EVP Strategy","Amazon People-Led Talent Marketing"],subDescriptions:["Employer brand video series featuring leadership conversations, delivering 1.2M+ views and 9.5M+ impressions.","Employee-backed EVP development through immersion, primary research, and thematic focus group synthesis.","Keeping the employer brand alive between hiring moments through a structured, multi-channel communication engine."],subSlugs:["/case-studies/amazon-unplugged","/case-studies/amazon-india-evp-strategy","/case-studies/amazon-talent-communication-engine"],title:"Employer Branding & EVP Strategy",category:"Employer Branding",description:"Employer brand video series, research-backed EVP development, and always-on talent communication engine.",images:["/case studies/Written Content/Amazon Unplugged/Amazon Unplugged Title.webp","/case studies/Written Content/Amazon EVP/Amazon EVP Title.webp","/case studies/Written Content/Amazon Comms/Amazon Comms Title.webp"],slug:"/case-studies/amazon-unplugged"},{client:"Mastercard",title:"Merchant Outreach",category:"Outreach",description:"90.9% merchant response rate through an AI-led WhatsApp cluster-head outreach strategy.",images:["/case studies/Written Content/Mastercard/Mastercard Title.webp"],slug:"/case-studies/mastercard"},{client:"HUL",title:"Consumer Centricity",category:"Growth Intelligence",description:"Geo-targeted digital coupon campaign delivering 90% higher CTR and 12,548 landing page sessions.",images:["/case studies/Written Content/HUL 1/HUL 1 Title.webp"],slug:"/case-studies/hul"},{client:"Tata Consumer Products",subNames:["Shaking Things Up","What Should Travel"],subDescriptions:["A mature staple category began showing early signals of transformation, with consumers moving beyond price and habit toward health and premium cues.","Identifying which products had the strongest market readiness, portfolio fit, and repeatable demand potential for Australia and the US."],subSlugs:["/case-studies/shaking-things-up","/case-studies/tcpl"],title:"Category Growth & Market Expansion",category:"Brand Research",description:"Decoding category transformation for staple ingredients and mapping diaspora demand to market launch.",images:["/images/case-study-image/salt/shaking-things-up.png","/images/case-study-image/tcpl/AUS_us.png"],slug:"/case-studies/shaking-things-up"},{client:"Aditya Birla Group",subNames:["Aditya Birla Group × KBC","ABG × Brut India","Fours for Good"],subDescriptions:["A question on KBC became a child’s shot at education.","10 changemakers. 27M+ views. One purpose made human.","Every four became a chance for 200+ children to train like cricketers."],subSlugs:["/case-studies/abg-kbc","/case-studies/abg-brut-india","/case-studies/fours-for-good"],title:"Brand Campaigns",category:"Brand Campaigns",description:"Three high-impact campaigns — a Brut India collaboration, cricket-driven social impact, and KBC-led purpose storytelling.",images:["/case studies/Written Content/ABG x KBC/ABG x KBC Title.webp","/case studies/Written Content/ABG x Brut India/ABG Brut India Title.webp","/case studies/Written Content/Fours for good/Fours for good title.webp"],slug:"/case-studies/abg-kbc"},{client:"Tata Soulfull",title:"The Next Bite",category:"Brand Research",description:"Decoding what drives trial, repeat purchase, and how the category could stretch from functional fuel to mainstream snacking.",images:["/images/case-study-image/tata-soulfull/Generated image 1.png"],slug:"/case-studies/tata-soulfull"},{client:"Ching's Secret",subNames:["The Chatpata Test (Ching's × Kurkure)","The Reputation Radar (Food Pharmer)"],subDescriptions:["Decoding public response across search and social, reading sentiment, flavour expectations, celebrity impact, and brand recall signals.","A command-center approach tracked sentiment, platform narratives, creator influence, and reputational risk signals."],subSlugs:["/case-studies/chings-kurkure","/case-studies/chings-foodfarmer"],title:"Consumer Response & Reputation",category:"Brand Monitoring",description:"Decoding public response to a major brand collaboration and monitoring consumer pulse to manage reputational risk.",images:["/images/case-study-image/chings- kurkure/CHing+Kurkure.png","/images/case-study-image/chings-foodfarmer/Foodfarmer.png"],slug:"/case-studies/chings-kurkure"},{client:"Qure.ai",title:"Healthcare AI SEO",category:"SEO",description:"Rebuilt Qure.ai’s US SEO structure from a one-page presence into a search-led system.",images:["/case studies/Written Content/Qure.ai/QureAI Title.webp"],slug:"/case-studies/qure-ai"},{client:"DMart",title:"Digital Retail Transformation",category:"Growth Intelligence",description:"13.43 lakh unique reach and 53K clicks that drove measurable in-store footfall at scale.",images:["/case studies/Written Content/Dmart/Dmart Title.webp"],slug:"/case-studies/dmart"},{client:"ElectroMech",title:"Website & SEO",category:"Growth Intelligence",description:"Rebuilding digital visibility to capture verified global B2B leads.",images:["/case studies/Written Content/ElectroMech/ElectroMech title.webp"],slug:"/case-studies/electromech"},{client:"Automag",subNames:["Automag India","Automag × Bajaj Auto"],subDescriptions:["45-50 qualified B2B leads a month from buyers already searching.","The system worked. The film made buyers understand what changed."],subSlugs:["/case-studies/automag-india","/case-studies/automag-bajaj-auto"],title:"SEO & Brand Film",category:"SEO",description:"B2B SEO that turned 1–2 leads a month into 45+, and a brand film for Bajaj Auto.",images:["/case studies/Written Content/Automag India/Automag SEO/Automag Title.webp","/case studies/Written Content/Automag India/Automag x Bajaj Auto title.webp"],slug:"/case-studies/automag-india"},{client:"Uppercase",title:"Sustainable Luggage",category:"AI Marketing Systems",description:"A complete brand film produced entirely with generative AI—script, visuals, voice, and edit.",images:["/case studies/Written Content/Uppercase/Uppercase Title.webp"],slug:"/case-studies/uppercase"},{client:"LG Hing",title:"LG Hing Diwali Campaign",category:"Purpose-Led Campaign",description:"Celebrating the women who make Diwali feel alive for a heritage food brand.",images:["/case studies/Written Content/LG/LG title.webp"],slug:"/case-studies/lg-hing"}],h=({study:a,isReady:d})=>{let[f,g]=(0,c.useState)(0),h=(0,c.useRef)(null),i=(0,c.useRef)(!1),j=(0,c.useRef)(null),k=(0,e.useRouter)(),l=a=>{if(g(a),h.current){i.current=!0,j.current&&clearTimeout(j.current),j.current=setTimeout(()=>{i.current=!1},600);let b=h.current.children[a];if(b){let a=h.current.getBoundingClientRect(),c=b.getBoundingClientRect().left-a.left+h.current.scrollLeft;h.current.scrollTo({left:c,behavior:"smooth"})}}},m=(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("div",{className:"work-list-left",style:{alignSelf:"center"},children:(0,b.jsx)("h2",{className:"work-list-title",style:{textTransform:"uppercase",margin:0,color:"#ffffff"},children:a.client})}),(0,b.jsxs)("div",{className:"work-list-right",style:{display:"flex",flexDirection:"column",gap:"1rem",width:"100%",minWidth:0},children:[a.images.length>1&&(0,b.jsxs)("div",{className:"slider-controls",onClick:a=>a.stopPropagation(),style:{display:"flex",alignItems:"center",justifyContent:"flex-end",gap:"1.25rem",paddingRight:"0.5rem",color:"#fff",pointerEvents:"auto"},children:[(0,b.jsx)("button",{onClick:a=>{a.preventDefault(),a.stopPropagation(),l(Math.max(0,f-1))},style:{background:"transparent",border:"1px solid rgba(255,255,255,0.3)",borderRadius:"50%",width:"40px",height:"40px",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",cursor:0===f?"default":"pointer",opacity:0===f?.3:1,transition:"all 0.3s"},children:(0,b.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,b.jsx)("path",{d:"M19 12H5M12 19l-7-7 7-7"})})}),(0,b.jsxs)("span",{style:{fontSize:"1rem",fontWeight:500,letterSpacing:"2px",fontFamily:"monospace"},children:[f+1," / ",a.images.length]}),(0,b.jsx)("button",{onClick:b=>{b.preventDefault(),b.stopPropagation(),l(Math.min(a.images.length-1,f+1))},style:{background:"transparent",border:"1px solid rgba(255,255,255,0.3)",borderRadius:"50%",width:"40px",height:"40px",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",cursor:f===a.images.length-1?"default":"pointer",opacity:f===a.images.length-1?.3:1,transition:"all 0.3s"},children:(0,b.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,b.jsx)("path",{d:"M5 12h14M12 5l7 7-7 7"})})})]}),(0,b.jsx)("div",{className:"work-list-gallery",ref:h,onScroll:()=>{if(!i.current&&h.current){let a=h.current,b=Array.from(a.children),c=a.getBoundingClientRect();if(a.scrollLeft+a.clientWidth>=a.scrollWidth-10){f!==b.length-1&&g(b.length-1);return}let d=0,e=0;b.forEach((a,b)=>{let f=a.getBoundingClientRect(),g=Math.max(f.left,c.left),h=Math.max(0,Math.min(f.right,c.right)-g);h>d&&(d=h,e=b)}),e!==f&&g(e)}},children:a.images.map((c,d)=>{let e=a.subNames?a.subNames[d]:a.client,f=a.subDescriptions?a.subDescriptions[d]:a.description;return(0,b.jsxs)("div",{className:"work-list-slide-wrapper",onClick:b=>{b.stopPropagation(),b.preventDefault(),a.subSlugs&&a.subSlugs[d]?k.push(a.subSlugs[d]):a.slug&&k.push(a.slug)},style:{cursor:"pointer",position:"relative"},children:[(0,b.jsx)("img",{className:"work-list-slide",src:`/${c.replace(/^\//,"")}`,alt:`${e} Digital Marketing Campaign Case Study by Impulse Digital`}),(0,b.jsxs)("div",{style:{position:"absolute",bottom:0,left:0,right:0,padding:"4rem 2rem 1.5rem",background:"linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.5) 60%, transparent 100%)",color:"#fff",display:"flex",flexDirection:"column",gap:"0.5rem",pointerEvents:"none",borderBottomLeftRadius:"64px",borderBottomRightRadius:"12px"},children:[(0,b.jsx)("h3",{className:"slide-title",style:{margin:0,fontWeight:700,textTransform:"uppercase"},children:e}),(0,b.jsx)("p",{className:"slide-desc",style:{margin:0,lineHeight:1.4,opacity:.9},children:f})]})]},d)})})]})]});return d?(0,b.jsx)("div",{onClick:()=>k.push(a.slug||"#"),className:"work-list-item",style:{textDecoration:"none",color:"inherit",display:"flex",cursor:"pointer"},children:m}):(0,b.jsx)("div",{className:"work-list-item pending-case-study",style:{display:"flex",cursor:"default"},children:m})};a.s(["default",0,()=>{let a=(0,c.useRef)(null);return(0,c.useEffect)(()=>{document.body.classList.add("work-page"),document.body.classList.add("service-page");let b=(0,f.startHeroCopyReveal)({primary:a.current?.querySelector(".work-hero-title"),supporting:a.current?.querySelector(".work-hero-desc")});return()=>{b(),document.body.classList.remove("work-page"),document.body.classList.remove("service-page")}},[]),(0,d.useGsapSafeEffect)((b,c)=>{if(!a.current)return;let d=document.querySelector(".work-list-section");return d&&(b.to(document.body,{backgroundColor:"#000000",scrollTrigger:{trigger:d,start:"top 60%",end:"top 10%",scrub:!0}}),window.particlesMaterial&&b.fromTo(window.particlesMaterial,{opacity:.6},{opacity:0,scrollTrigger:{trigger:d,start:"top 60%",end:"top 10%",scrub:!0}})),a.current.querySelectorAll(".work-list-separator").forEach(a=>{c.create({trigger:a,start:"top 95%",onEnter:()=>a.classList.add("active"),once:!0})}),c.refresh(),()=>{b.to(document.body,{backgroundColor:"#020018",duration:0}),window.particlesMaterial&&b.to(window.particlesMaterial,{opacity:.6,duration:0}),c&&c.getAll().forEach(a=>{a.trigger&&a.trigger.closest&&a.trigger.closest(".work-wrapper")&&a.kill()})}},[]),(0,b.jsxs)("main",{id:"main-content",className:"work-wrapper",ref:a,children:[(0,b.jsx)("section",{className:"work-hero",children:(0,b.jsx)("div",{className:"work-container",children:(0,b.jsxs)("div",{className:"work-hero-content",children:[(0,b.jsxs)("h1",{className:"work-hero-title hero-copy-reveal",children:["The Work ",(0,b.jsx)("br",{}),(0,b.jsx)("span",{className:"work-hero-highlight",style:{color:"#aa3bff"},children:"Behind the Numbers."})]}),(0,b.jsx)("p",{className:"work-hero-desc hero-copy-reveal",children:"The final number is never the full story. The real story is what had to be questioned, rebuilt, sharpened and pushed before the result had a chance to happen."})]})})}),(0,b.jsx)("section",{className:"work-list-section",children:(0,b.jsx)("div",{className:"work-container",children:(0,b.jsx)("div",{className:"work-list",children:g.map((a,d)=>(0,b.jsxs)(c.default.Fragment,{children:[(0,b.jsx)(h,{study:a,isReady:!0}),d<g.length-1&&(0,b.jsx)("div",{className:"work-list-separator"})]},d))})})}),(0,b.jsx)("style",{children:`
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
      `})]})}])}];

//# sourceMappingURL=_0tt37bv._.js.map