(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,32694,e=>{"use strict";e.s(["initCaseStudyAnimations",0,function(){let e,s,a,t=document.querySelector(".cs-feature-wrapper"),i=document.querySelector(".cs-feature-image"),r=document.querySelector(".cs-feature-image img"),c=!window.matchMedia("(prefers-reduced-motion: reduce)").matches,n=window.matchMedia("(min-width: 769px)").matches,l=null,o=null;if(t&&i&&r&&c&&n){let e=()=>{let e=t.getBoundingClientRect(),s=Math.max(1,t.offsetHeight-window.innerHeight),a=1-Math.pow(1-Math.min(1,Math.max(0,-e.top/s)),3),c=25*(1-a),n=75+25*a;i.style.clipPath=`polygon(${c}% ${c}%, ${n}% ${c}%, ${n}% ${n}%, ${c}% ${n}%)`,i.style.WebkitClipPath=`polygon(${c}% ${c}%, ${n}% ${c}%, ${n}% ${n}%, ${c}% ${n}%)`,r.style.transform=`scale(${1.35-.35*a})`};e(),l=e,o=e,window.addEventListener("scroll",e,{passive:!0}),window.addEventListener("resize",e)}let d=!1,m=!1,h=()=>{let{gsap:e,ScrollTrigger:s,SplitType:t}=window;e&&s&&t&&!d&&!m&&(d=!0,a=p(e,s,t))},p=(e,s,a)=>{let t=null,i=e.context(()=>{let r=document.querySelector("#warp-start");if(r){e.to(document.body,{backgroundColor:"#000000",scrollTrigger:{trigger:r,start:"top bottom",end:"top top",scrub:!0}});let a=0,c=()=>{if(m)return;let{particlesMaterial:n}=window;n&&e&&s?i.add(()=>{e.killTweensOf(n),e.set(n,{opacity:.7}),e.fromTo(n,{opacity:.7},{opacity:0,scrollTrigger:{trigger:r,start:"top 80%",end:"top 20%",scrub:!0}})}):a<100&&(a++,t=setTimeout(c,50))};t=setTimeout(c,0)}document.querySelectorAll(".split-text:not(.split-done)").forEach(s=>{if(!s.classList.contains("cs-hero-title")&&!s.classList.contains("cs-hero-subtitle")){s.classList.add("split-done");let t=new a(s,{types:"lines, words"});t.lines&&t.lines.forEach(e=>{let s=document.createElement("div");s.classList.add("line-wrapper"),e.parentNode?.insertBefore(s,e),s.appendChild(e)}),t.words&&t.words.length&&e.fromTo(t.words,{yPercent:100,opacity:0},{scrollTrigger:{trigger:s,start:"top 90%"},yPercent:0,opacity:1,duration:.8,stagger:.015,ease:"power3.out"})}}),document.querySelectorAll(".counter").forEach((a,t)=>{s.create({trigger:".cs-results-module",start:"top 80%",once:!0,onEnter:()=>{let s=a.getAttribute("data-target")||"0",i=parseFloat(s),r=s.includes(".")?s.split(".")[1].length:0,c={value:0};e.to(c,{value:i,duration:2.2,delay:.08*t,ease:"power4.out",onUpdate:()=>{a.textContent=c.value.toLocaleString("en-IN",{minimumFractionDigits:r,maximumFractionDigits:r})}})}})}),document.querySelectorAll(".gsap-fade-up, .gsap-item").forEach(s=>{e.fromTo(s,{y:40,opacity:0},{scrollTrigger:{trigger:s,start:"top 90%"},y:0,opacity:1,duration:1,ease:"power3.out"})});let c=document.querySelector(".svc-final-cta-path");if(c){let a=c.getTotalLength();e.set(c,{strokeDasharray:a,strokeDashoffset:a}),s.create({trigger:".svc-final-cta",start:"top 60%",once:!0,onEnter:()=>e.to(c,{strokeDashoffset:0,duration:3.5,ease:"power2.inOut"})})}}),r=setTimeout(()=>{s.refresh()},100);return()=>{clearTimeout(r),t&&clearTimeout(t),i.revert(),e.to(document.body,{backgroundColor:"",duration:0});let{particlesMaterial:s}=window;s&&(e.killTweensOf(s),e.set(s,{opacity:.6}))}};return h(),d||(e=setInterval(h,100),s=setTimeout(()=>{clearInterval(e),d||document.querySelectorAll(".gsap-fade-up, .gsap-item").forEach(e=>{e.style.opacity="1",e.style.transform="none"})},15e3)),()=>{m=!0,e&&clearInterval(e),s&&clearTimeout(s),l&&window.removeEventListener("scroll",l),o&&window.removeEventListener("resize",o),a&&a()}}])},32323,e=>{"use strict";var s=e.i(43476),a=e.i(71645),t=e.i(32694);e.s(["default",0,()=>((0,a.useEffect)(()=>{document.body.classList.add("case-study-page");let e=(0,t.initCaseStudyAnimations)();return()=>{document.body.classList.remove("case-study-page"),e()}},[]),(0,s.jsxs)("main",{id:"main-content",children:[(0,s.jsx)("section",{className:"cs-hero",children:(0,s.jsxs)("div",{className:"cs-hero-header",children:[(0,s.jsx)("h1",{className:"cs-hero-title",children:"Amazon People-Led Talent Marketing"}),(0,s.jsxs)("h2",{className:"cs-hero-subtitle",children:["Keeping the employer brand alive",(0,s.jsx)("br",{}),"between hiring moments."]})]})}),(0,s.jsx)("div",{className:"cs-feature-wrapper",children:(0,s.jsx)("div",{className:"cs-feature-image",children:(0,s.jsx)("img",{src:"/case studies/Written Content/Amazon Comms/Amazon Comms Title.webp",alt:"Amazon India Talent Communication Engine - Impulse Digital Marketing Case Study",fetchPriority:"high",decoding:"async",width:1200,height:675})})}),(0,s.jsxs)("section",{className:"cs-intro-block",id:"warp-start",children:[(0,s.jsx)("p",{className:"cs-intro-text split-text",children:"Employer branding does not live in one campaign."}),(0,s.jsx)("p",{className:"cs-intro-text split-text",style:{color:"var(--impulse-violet)"},children:"It lives in the repeated signals talent sees over time."}),(0,s.jsx)("p",{className:"cs-p split-text",style:{fontSize:"1.5rem",maxWidth:"900px"},children:"Employee stories, leader conversations, job board pages, referral campaigns, social posts, advocacy content, and the way a company shows up when it is not actively asking someone to apply."}),(0,s.jsx)("p",{className:"cs-p split-text",style:{fontSize:"1.5rem",maxWidth:"900px",marginTop:"2rem"},children:"Amazon India needed a talent communication engine to keep this momentum moving. Impulse Digital supported Amazon across always-on employer brand content, employee advocacy, social media, job board optimisation, campaign-led storytelling, and internal referral communication."})]}),(0,s.jsxs)("section",{className:"cs-results-module custom-dashboard",children:[(0,s.jsx)("h2",{className:"cs-results-title split-text",style:{marginBottom:"1rem"},children:"Performance Snapshot"}),(0,s.jsxs)("div",{className:"dashboard-grid",children:[(0,s.jsxs)("div",{className:"dashboard-card gsap-fade-up",children:[(0,s.jsxs)("div",{className:"card-header",children:[(0,s.jsx)("span",{className:"card-num",children:"01 / CAMPAIGN"}),(0,s.jsx)("h3",{className:"card-title",children:"Powering Prime Day"})]}),(0,s.jsxs)("div",{className:"card-metrics",children:[(0,s.jsxs)("div",{className:"metric-row",children:[(0,s.jsxs)("div",{className:"metric-value",children:[(0,s.jsx)("span",{className:"counter","data-target":"75",children:"0"}),(0,s.jsx)("span",{className:"cs-result-suffix",children:"K+"})]}),(0,s.jsx)("div",{className:"metric-label",children:"Organic Views"})]}),(0,s.jsxs)("div",{className:"metric-row",children:[(0,s.jsxs)("div",{className:"metric-value",children:[(0,s.jsx)("span",{className:"counter","data-target":"10",children:"0"}),(0,s.jsx)("span",{className:"cs-result-suffix",children:"X"})]}),(0,s.jsx)("div",{className:"metric-label",children:"Advocacy Engagement Multiplier"})]}),(0,s.jsxs)("div",{className:"metric-row",children:[(0,s.jsxs)("div",{className:"metric-value",children:[(0,s.jsx)("span",{className:"counter","data-target":"2.4",children:"0"}),(0,s.jsx)("span",{className:"cs-result-suffix",children:"X"})]}),(0,s.jsx)("div",{className:"metric-label",children:"Social Media Engagement Rate"})]})]})]}),(0,s.jsxs)("div",{className:"dashboard-card gsap-fade-up",children:[(0,s.jsxs)("div",{className:"card-header",children:[(0,s.jsx)("span",{className:"card-num",children:"02 / ADVOCACY"}),(0,s.jsx)("h3",{className:"card-title",children:"Employee Advocacy"})]}),(0,s.jsxs)("div",{className:"card-metrics",children:[(0,s.jsxs)("div",{className:"metric-row",children:[(0,s.jsxs)("div",{className:"metric-value",children:[(0,s.jsx)("span",{className:"counter","data-target":"2.1",children:"0"}),(0,s.jsx)("span",{className:"cs-result-suffix",children:"M+"})]}),(0,s.jsx)("div",{className:"metric-label",children:"Impressions"})]}),(0,s.jsxs)("div",{className:"metric-row",children:[(0,s.jsxs)("div",{className:"metric-value",children:[(0,s.jsx)("span",{className:"counter","data-target":"67",children:"0"}),(0,s.jsx)("span",{className:"cs-result-suffix",children:"K+"})]}),(0,s.jsx)("div",{className:"metric-label",children:"Engagement Generated"})]}),(0,s.jsxs)("div",{className:"metric-row",children:[(0,s.jsxs)("div",{className:"metric-value",children:[(0,s.jsx)("span",{className:"counter","data-target":"5",children:"0"}),(0,s.jsx)("span",{className:"cs-result-suffix",children:"-digit ROI ($)"})]}),(0,s.jsx)("div",{className:"metric-label",children:"Measured via EveryoneSocial"})]})]})]}),(0,s.jsxs)("div",{className:"dashboard-card gsap-fade-up",children:[(0,s.jsxs)("div",{className:"card-header",children:[(0,s.jsx)("span",{className:"card-num",children:"03 / ORGANIC"}),(0,s.jsx)("h3",{className:"card-title",children:"Social Media Management"})]}),(0,s.jsxs)("div",{className:"card-metrics",children:[(0,s.jsxs)("div",{className:"metric-row",children:[(0,s.jsxs)("div",{className:"metric-value",children:[(0,s.jsx)("span",{className:"counter","data-target":"2",children:"0"}),(0,s.jsx)("span",{className:"cs-result-suffix",children:"M+"})]}),(0,s.jsx)("div",{className:"metric-label",children:"Views & Impressions"})]}),(0,s.jsxs)("div",{className:"metric-row",children:[(0,s.jsxs)("div",{className:"metric-value",children:[(0,s.jsx)("span",{className:"counter","data-target":"23",children:"0"}),(0,s.jsx)("span",{className:"cs-result-suffix",children:"K+"})]}),(0,s.jsx)("div",{className:"metric-label",children:"Organic Engagements"})]}),(0,s.jsxs)("div",{className:"metric-row",children:[(0,s.jsxs)("div",{className:"metric-value",children:[(0,s.jsx)("span",{className:"counter","data-target":"10",children:"0"}),(0,s.jsx)("span",{className:"cs-result-suffix",children:"K+"})]}),(0,s.jsx)("div",{className:"metric-label",children:"Followers Gained"})]})]})]}),(0,s.jsxs)("div",{className:"dashboard-card gsap-fade-up",children:[(0,s.jsxs)("div",{className:"card-header",children:[(0,s.jsx)("span",{className:"card-num",children:"04 / DISCOVERY"}),(0,s.jsx)("h3",{className:"card-title",children:"Job Board Optimisation"})]}),(0,s.jsxs)("div",{className:"card-metrics",children:[(0,s.jsxs)("div",{className:"metric-row",children:[(0,s.jsxs)("div",{className:"metric-value",children:[(0,s.jsx)("span",{className:"counter","data-target":"2.4",children:"0"}),(0,s.jsx)("span",{className:"cs-result-suffix",children:"M+"})]}),(0,s.jsx)("div",{className:"metric-label",children:"Platform Search Impressions"})]}),(0,s.jsxs)("div",{className:"metric-row",children:[(0,s.jsxs)("div",{className:"metric-value",children:[(0,s.jsx)("span",{className:"counter","data-target":"400",children:"0"}),(0,s.jsx)("span",{className:"cs-result-suffix",children:"K+"})]}),(0,s.jsx)("div",{className:"metric-label",children:"Candidate Interaction"})]}),(0,s.jsxs)("div",{className:"metric-row",children:[(0,s.jsxs)("div",{className:"metric-value",children:[(0,s.jsx)("span",{className:"counter","data-target":"60",children:"0"}),(0,s.jsx)("span",{className:"cs-result-suffix",children:"K+"})]}),(0,s.jsx)("div",{className:"metric-label",children:"Career Follower Growth"})]})]})]})]})]}),(0,s.jsxs)("section",{className:"cs-proof-module",children:[(0,s.jsx)("div",{className:"cs-proof-media gsap-fade-up",children:(0,s.jsx)("img",{src:"/case studies/Written Content/Amazon Comms/Supporting 1.webp",alt:"Amazon Powering Prime Day Campaign Spotlight - Impulse Digital Marketing Case Study",loading:"lazy",decoding:"async",width:1200,height:675})}),(0,s.jsxs)("div",{className:"cs-proof-copy",children:[(0,s.jsx)("span",{className:"workstream-tag",children:"Campaign Highlight"}),(0,s.jsx)("h2",{className:"cs-proof-title split-text",children:"Powering Prime Day."}),(0,s.jsx)("p",{className:"cs-proof-text split-text",children:"Spotlight content and design creatives created for operations and corporate employees behind the scenes during Amazon India's largest operations milestone, showing the real faces behind Prime Day."})]})]}),(0,s.jsxs)("section",{className:"cs-section",children:[(0,s.jsxs)("div",{className:"cs-split",children:[(0,s.jsx)("div",{className:"cs-split-left",children:(0,s.jsx)("h2",{className:"cs-h2 split-text",children:"The Context"})}),(0,s.jsxs)("div",{className:"cs-split-right",children:[(0,s.jsx)("p",{className:"cs-p split-text",children:"Amazon’s employer brand had to stay active across many talent touchpoints."}),(0,s.jsx)("p",{className:"cs-p highlight split-text",children:"Some content needed to tell employee stories. Some needed to support hiring moments. Some needed to keep job boards fresh."}),(0,s.jsx)("p",{className:"cs-p split-text",children:"Some needed to bring employees into advocacy. Some needed to make internal referrals feel more energetic and memorable."}),(0,s.jsx)("p",{className:"cs-p split-text",children:"The work was not one campaign. It was a talent communication system designed to keep the company's employer brand active and human-focused even during non-hiring cycles."})]})]}),(0,s.jsxs)("div",{className:"cs-split",children:[(0,s.jsx)("div",{className:"cs-split-left",children:(0,s.jsx)("h2",{className:"cs-h2 split-text",children:"The Challenge"})}),(0,s.jsxs)("div",{className:"cs-split-right",children:[(0,s.jsx)("p",{className:"cs-p split-text",children:"Always-on employer branding can easily become fragmented."}),(0,s.jsx)("p",{className:"cs-p highlight split-text",children:"When touchpoints don't sync, consistency falls apart."}),(0,s.jsx)("p",{className:"cs-p split-text",children:"Social media can become just a calendar. Job boards can turn into static pages. Employee advocacy can degenerate into a forced sharing request. Referral campaigns can start feeling like nagging internal reminders, and business moments can pass without becoming talent stories."}),(0,s.jsx)("p",{className:"cs-p split-text",children:"Amazon needed the employer brand to stay coherent and active across all of these disparate layers."})]})]})]}),(0,s.jsxs)("section",{className:"cs-section",children:[(0,s.jsxs)("div",{className:"cs-split",children:[(0,s.jsx)("div",{className:"cs-split-left",children:(0,s.jsxs)("h2",{className:"cs-h2 split-text",children:["What needed",(0,s.jsx)("br",{}),"to change"]})}),(0,s.jsxs)("div",{className:"cs-split-right",children:[(0,s.jsx)("p",{className:"cs-p split-text",children:"The execution layer needed to connect daily talent communication with real culture, people, and business milestones."}),(0,s.jsx)("p",{className:"cs-p highlight split-text",children:"Prime Day needed to become more than an operations milestone; it needed to show the people powering it."}),(0,s.jsx)("p",{className:"cs-p split-text",children:"Employee advocacy needed structure, calendar discipline, internal campaigns, and performance tracking. Social media needed sharper content execution, job boards needed active updates, and referral communication required creative energy, including the Superpowers internal referral campaign."})]})]}),(0,s.jsxs)("div",{className:"cs-split",children:[(0,s.jsx)("div",{className:"cs-split-left",children:(0,s.jsxs)("h2",{className:"cs-h2 split-text",children:["What Impulse",(0,s.jsx)("br",{}),"worked on"]})}),(0,s.jsx)("div",{className:"cs-split-right",children:(0,s.jsxs)("div",{className:"cs-workstream-list",children:[(0,s.jsxs)("div",{className:"cs-workstream-item gsap-fade-up",children:[(0,s.jsx)("span",{className:"workstream-tag",children:"Milestones"}),(0,s.jsx)("h4",{children:"Powering Prime Day"}),(0,s.jsx)("p",{children:"Created spotlight content and designs highlighting operations and corporate employees behind the scenes, making the work culture tangible."})]}),(0,s.jsxs)("div",{className:"cs-workstream-item gsap-fade-up",children:[(0,s.jsx)("span",{className:"workstream-tag",children:"Advocacy"}),(0,s.jsx)("h4",{children:"Employee Advocacy Strategy"}),(0,s.jsx)("p",{children:"Managed structured content calendars, internal campaign plans, and performance metric tracking via the EveryoneSocial platform."})]}),(0,s.jsxs)("div",{className:"cs-workstream-item gsap-fade-up",children:[(0,s.jsx)("span",{className:"workstream-tag",children:"Social"}),(0,s.jsx)("h4",{children:"Social Media Management"}),(0,s.jsx)("p",{children:"Oversaw content conceptualisation, topic relevance, copy execution, and program promotion across Instagram, Facebook, and LinkedIn."})]}),(0,s.jsxs)("div",{className:"cs-workstream-item gsap-fade-up",children:[(0,s.jsx)("span",{className:"workstream-tag",children:"Discovery"}),(0,s.jsx)("h4",{children:"Job Board Optimisation"}),(0,s.jsx)("p",{children:"Refreshed careers pages and organization-specific job board profiles with modern campaign assets, timely company news, and search optimisation."})]}),(0,s.jsxs)("div",{className:"cs-workstream-item gsap-fade-up",children:[(0,s.jsx)("span",{className:"workstream-tag",children:"Referrals"}),(0,s.jsx)("h4",{children:"Superpowers Internal Campaign"}),(0,s.jsx)("p",{children:"Designed creative referral messaging that helped employees see referrals as building Amazon's next teams rather than just filling positions."})]})]})})]})]}),(0,s.jsxs)("section",{className:"cs-section",children:[(0,s.jsxs)("div",{className:"cs-split",children:[(0,s.jsx)("div",{className:"cs-split-left",children:(0,s.jsx)("h2",{className:"cs-h2 split-text",children:"What changed"})}),(0,s.jsxs)("div",{className:"cs-split-right",children:[(0,s.jsx)("p",{className:"cs-p split-text",children:"Amazon’s talent communication became more active, visible, and connected across channels."}),(0,s.jsx)("p",{className:"cs-p highlight split-text",children:"Prime Day became a people-led story. Employee advocacy became measurable. Social content sustained audience growth."}),(0,s.jsx)("p",{className:"cs-p split-text",children:"Job board profiles became current, searchable, and useful, and internal referral communications gained a fresh creative layer. The metrics indicate sustained progress: 75K+ views on Prime Day spotlights, 2.1M+ impressions on advocacy, and major follower gains across career channels."})]})]}),(0,s.jsxs)("div",{className:"cs-split",children:[(0,s.jsx)("div",{className:"cs-split-left",children:(0,s.jsxs)("h2",{className:"cs-h2 split-text",children:["Why this matters",(0,s.jsx)("br",{}),"for future clients"]})}),(0,s.jsxs)("div",{className:"cs-split-right",children:[(0,s.jsx)("p",{className:"cs-p split-text",children:"Talent decisions are rarely made from one post. People notice patterns."}),(0,s.jsx)("p",{className:"cs-p highlight split-text",children:"They notice how employees speak, how leaders show up, and whether careers pages feel alive between hiring pushes."}),(0,s.jsx)("p",{className:"cs-p split-text",children:"Amazon’s talent communication shows why employer branding needs rhythm, not just campaigns. When touchpoints move together, the employer brand becomes easier to trust."})]})]})]}),(0,s.jsxs)("section",{className:"cs-final",children:[(0,s.jsx)("h2",{className:"cs-final-heading split-text",children:"Make every talent touchpoint count."}),(0,s.jsx)("p",{className:"cs-final-text split-text",children:"When the touchpoints move together, the employer brand becomes easier to trust. Amazon's talent communication engine demonstrates how consistent, employee-led narratives shape authentic reputation."}),(0,s.jsxs)("div",{className:"cs-final-punch gsap-fade-up",children:["From job description.",(0,s.jsx)("br",{}),"To leader conversation. To culture signal.",(0,s.jsx)("br",{}),(0,s.jsx)("span",{children:"To trust and clarity."})]})]}),(0,s.jsxs)("section",{className:"svc-final-cta",id:"connect",children:[(0,s.jsx)("div",{className:"svc-final-cta-mark","aria-hidden":"true",children:(0,s.jsx)("svg",{viewBox:"801 344 274 272",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("path",{className:"svc-final-cta-path",d:"M1014.2,569.56c1.74-38.31.87-92.29-14.17-126.43-4.45-10.09-11.39-18.02-21.2-22.92-19.98-9.99-55.06-15.74-77.2-15.78l-54.99-.1c-11.88-.02-22.87-4.01-24.19-14.77-1.4-11.46,9.4-19.23,20.5-20.7,37.6-5.01,74.9-7.39,112.77-5.34,18.7,1.01,36.2,3.78,53.65,9.6,17.16,5.73,29.66,17.62,35.66,34.79s8.71,34.06,9.87,52.44c2.45,39.04-.02,77.43-5.33,116.08-1.52,11.09-10.07,21.87-21.85,19.47-10.45-2.12-14.04-14.54-13.51-26.33Z",fill:"none"})})}),(0,s.jsxs)("div",{className:"container",children:[(0,s.jsx)("h2",{className:"split-text",children:"Your Problem Next?"}),(0,s.jsx)("div",{className:"svc-final-cta-actions gsap-fade-up",children:(0,s.jsxs)("a",{href:"/contact-us",className:"btn","data-cursor":"START",children:[(0,s.jsx)("span",{className:"btn-text",children:"START A CONVERSATION"}),(0,s.jsx)("div",{className:"btn-fill"})]})})]})]}),(0,s.jsx)("style",{children:`
        /* Dashboard styles */
        .dashboard-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
          width: 100%;
          margin-top: 3rem;
        }

        .dashboard-card {
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 24px;
          padding: 2.5rem;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
        }

        .dashboard-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at 100% 100%, rgba(138, 92, 246, 0.05) 0%, transparent 60%);
          pointer-events: none;
          transition: opacity 0.4s ease;
          opacity: 0.5;
        }

        .dashboard-card:hover {
          transform: translateY(-5px);
          border-color: rgba(138, 92, 246, 0.3);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.4), 0 0 20px rgba(138, 92, 246, 0.08), inset 0 0 15px rgba(138, 92, 246, 0.03);
        }

        .card-header {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 2rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          padding-bottom: 1.2rem;
        }

        .card-num {
          font-family: var(--font-heading, sans-serif);
          font-size: 0.8rem;
          color: var(--impulse-violet);
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .card-title {
          font-family: var(--font-heading, sans-serif);
          font-size: 1.35rem;
          font-weight: 700;
          color: var(--white);
          margin: 0;
        }

        .card-metrics {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .metric-row {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .metric-value {
          display: flex;
          align-items: baseline;
          font-family: var(--font-heading, sans-serif);
          font-size: 2.2rem;
          font-weight: 800;
          color: var(--white);
          line-height: 1;
        }

        .metric-label {
          font-size: 0.9rem;
          color: var(--soft-grey);
          font-weight: 450;
          letter-spacing: 0.3px;
        }

        /* Workstream items styling */
        .cs-workstream-list {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
          margin-top: 2rem;
        }

        .cs-workstream-item {
          border-left: 2px solid rgba(138, 92, 246, 0.3);
          padding-left: 2rem;
          transition: border-color 0.3s ease;
        }

        .cs-workstream-item:hover {
          border-color: var(--impulse-violet);
        }

        .workstream-tag {
          font-family: var(--font-heading, sans-serif);
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: var(--impulse-violet);
          font-weight: 700;
          display: block;
          margin-bottom: 0.5rem;
        }

        .cs-workstream-item h4 {
          font-family: var(--font-heading, sans-serif);
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--white);
          margin: 0 0 0.5rem 0;
        }

        .cs-workstream-item p {
          color: var(--soft-grey);
          margin: 0;
          line-height: 1.5;
        }

        @media (max-width: 768px) {
          .dashboard-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          .dashboard-card {
            padding: 1.8rem;
          }
          .metric-value {
            font-size: 1.8rem;
          }
          .cs-workstream-item {
            padding-left: 1.2rem;
          }
        }
      `})]}))])}]);