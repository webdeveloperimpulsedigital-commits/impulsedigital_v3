1:"$Sreact.fragment"
3:I[79520,["/_next/static/chunks/0m7tho08~my~c.js","/_next/static/chunks/0d3shmwh5_nmn.js"],""]
6:I[89433,["/_next/static/chunks/0m7tho08~my~c.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
7:I[79651,["/_next/static/chunks/0m7tho08~my~c.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
8:I[62319,["/_next/static/chunks/0m7tho08~my~c.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
9:I[39756,["/_next/static/chunks/0m7tho08~my~c.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
a:I[37457,["/_next/static/chunks/0m7tho08~my~c.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
b:I[36768,["/_next/static/chunks/0m7tho08~my~c.js","/_next/static/chunks/0d3shmwh5_nmn.js","/_next/static/chunks/0uwksrfmsi3kt.js"],"default"]
c:I[56691,["/_next/static/chunks/0m7tho08~my~c.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
1b:I[68027,["/_next/static/chunks/0m7tho08~my~c.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default",1]
:HL["/_next/static/chunks/0mtcuu7cd2iei.css","style"]
:HL["/fonts/Satoshi-Bold.woff2","font",{"crossOrigin":"anonymous","type":"font/woff2"}]
:HL["/fonts/Satoshi-Regular.woff2","font",{"crossOrigin":"anonymous","type":"font/woff2"}]
:HL["https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap","style"]
:HL["/css/styles.css?v=40","style"]
:HL["https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css","style",{"media":"print"}]
2:["$","link",null,{"rel":"stylesheet","href":"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"}]
4:T504,(function(){
  function removeZoho(node){
    if(!node||!node.parentNode)return;
    var src=node.src||'';
    var id=node.id||'';
    var cls=(node.className&&typeof node.className==='string')?node.className:'';
    var label=(node.getAttribute&&node.getAttribute('aria-label'))||'';
    if(src.indexOf('zohopublic')>-1||src.indexOf('salesiq.zoho')>-1||
       id.indexOf('zsiq')>-1||id.indexOf('zsales')>-1||
       id.indexOf('siq_')>-1||id==='siq_chatwindow'||
       cls.indexOf('zsiq')>-1||cls.indexOf('siq_')>-1||
       label.toLowerCase().indexOf('salesiq')>-1){
      node.parentNode.removeChild(node);
    }
  }
  var obs=new MutationObserver(function(muts){
    muts.forEach(function(m){
      m.addedNodes.forEach(function(n){
        removeZoho(n);
        if(n.querySelectorAll){
          n.querySelectorAll('[id*="zsiq"],[id*="siq_"],[class*="zsiq"],[class*="siq_"],iframe[src*="zohopublic"],script[src*="zohopublic"],iframe[aria-label*="SalesIQ"]')
           .forEach(removeZoho);
        }
      });
    });
  });
  obs.observe(document.documentElement,{childList:true,subtree:true});
  /* Also clean up anything already in the DOM */
  document.querySelectorAll('[id*="zsiq"],[id*="siq_"],[class*="zsiq"],iframe[aria-label*="SalesIQ"]').forEach(removeZoho);
})();5:["$","iframe",null,{"src":"https://www.googletagmanager.com/ns.html?id=GTM-M4TW43X3","height":"0","width":"0","style":{"display":"none","visibility":"hidden"}}]
0:{"P":null,"c":["","case-studies","abg-brut-india",""],"q":"","i":false,"f":[[["",{"children":["case-studies",{"children":["abg-brut-india",{"children":["__PAGE__",{}]}]}]},"$undefined","$undefined",16],[["$","$1","c",{"children":[[["$","link","0",{"rel":"stylesheet","href":"/_next/static/chunks/0mtcuu7cd2iei.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}],["$","script","script-0",{"src":"/_next/static/chunks/0m7tho08~my~c.js","async":true,"nonce":"$undefined"}],["$","script","script-1",{"src":"/_next/static/chunks/0d3shmwh5_nmn.js","async":true,"nonce":"$undefined"}]],["$","html",null,{"lang":"en","children":[["$","head",null,{"children":[["$","link",null,{"rel":"icon","type":"image/png","href":"/favicon.png"}],["$","link",null,{"rel":"preload","href":"/fonts/Satoshi-Bold.woff2","as":"font","type":"font/woff2","crossOrigin":"anonymous"}],["$","link",null,{"rel":"preload","href":"/fonts/Satoshi-Regular.woff2","as":"font","type":"font/woff2","crossOrigin":"anonymous"}],["$","link",null,{"rel":"preconnect","href":"https://fonts.googleapis.com"}],["$","link",null,{"rel":"preconnect","href":"https://fonts.gstatic.com","crossOrigin":"anonymous"}],["$","link",null,{"rel":"stylesheet","href":"https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"}],["$","link",null,{"rel":"stylesheet","href":"/css/styles.css?v=40"}],["$","link",null,{"rel":"preload","href":"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css","as":"style","media":"print"}],["$","link",null,{"rel":"stylesheet","href":"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css","media":"print"}],["$","noscript",null,{"children":"$2"}]]}],["$","body",null,{"children":[["$","$L3",null,{"id":"block-zoho-salesiq","strategy":"beforeInteractive","dangerouslySetInnerHTML":{"__html":"$4"}}],["$","$L3",null,{"id":"gtm-script","strategy":"afterInteractive","dangerouslySetInnerHTML":{"__html":"(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-M4TW43X3');"}}],["$","noscript",null,{"children":"$5"}],["$","$L6",null,{}],["$","$L7",null,{}],["$","$L8",null,{}],["$","$L9",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$La",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":[["$","$Lb",null,{}],[]],"forbidden":"$undefined","unauthorized":"$undefined"}],["$","$Lc",null,{}],["$","$L3",null,{"src":"https://cdnjs.cloudflare.com/ajax/libs/vanilla-tilt/1.8.0/vanilla-tilt.min.js","strategy":"beforeInteractive"}],"$Ld","$Le","$Lf","$L10","$L11","$L12","$L13","$L14","$L15"]}]]}]]}],{"children":["$L16",{"children":["$L17",{"children":["$L18",{},null,false,null]},null,false,"$@19"]},null,false,null]},null,false,null],"$L1a",false]],"m":"$undefined","G":["$1b",["$L1c"]],"S":true,"h":null,"s":"$undefined","l":"$undefined","p":"$undefined","d":"$undefined","b":"acGzoZ4kPNQ7VPUD6lDSG"}
1d:I[41801,["/_next/static/chunks/0m7tho08~my~c.js","/_next/static/chunks/0d3shmwh5_nmn.js","/_next/static/chunks/0~ijtit1aklpd.js"],"default"]
1e:I[97367,["/_next/static/chunks/0m7tho08~my~c.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"OutletBoundary"]
1f:"$Sreact.suspense"
22:I[97367,["/_next/static/chunks/0m7tho08~my~c.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"ViewportBoundary"]
24:I[97367,["/_next/static/chunks/0m7tho08~my~c.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"MetadataBoundary"]
:HL["/css/case-study.css?v=27","style"]
d:["$","$L3",null,{"src":"https://cdn.jsdelivr.net/gh/studio-freight/lenis@1.0.19/bundled/lenis.min.js","strategy":"beforeInteractive"}]
e:["$","$L3",null,{"src":"https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js","strategy":"beforeInteractive"}]
f:["$","$L3",null,{"src":"https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js","strategy":"beforeInteractive"}]
10:["$","$L3",null,{"src":"https://unpkg.com/split-type","strategy":"beforeInteractive"}]
11:["$","$L3",null,{"src":"https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js","strategy":"afterInteractive"}]
12:["$","$L3",null,{"src":"/js/script.js?v=70","strategy":"afterInteractive"}]
13:["$","$L3",null,{"src":"https://www.googletagmanager.com/gtag/js?id=G-EFFQ2YYFN8","strategy":"lazyOnload"}]
14:["$","$L3",null,{"id":"ga4-init","strategy":"lazyOnload","dangerouslySetInnerHTML":{"__html":"window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','G-EFFQ2YYFN8');"}}]
15:["$","$L3",null,{"id":"fa-media-switch","strategy":"afterInteractive","dangerouslySetInnerHTML":{"__html":"document.querySelectorAll('link[rel=\"stylesheet\"][media=\"print\"]').forEach(function(l){l.media='all';});"}}]
16:["$","$1","c",{"children":[null,[["$","link",null,{"rel":"stylesheet","href":"/css/case-study.css?v=27"}],["$","$L9",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$La",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","forbidden":"$undefined","unauthorized":"$undefined"}]]]}]
17:["$","$1","c",{"children":[null,["$","$L9",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$La",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","forbidden":"$undefined","unauthorized":"$undefined"}]]}]
18:["$","$1","c",{"children":[["$","$L1d",null,{}],[["$","script","script-0",{"src":"/_next/static/chunks/0~ijtit1aklpd.js","async":true,"nonce":"$undefined"}]],["$","$L1e",null,{"children":["$","$1f",null,{"name":"Next.MetadataOutlet","children":"$@20"}]}]]}]
21:[]
19:"$W21"
1a:["$","$1","h",{"children":[null,["$","$L22",null,{"children":"$L23"}],["$","div",null,{"hidden":true,"children":["$","$L24",null,{"children":["$","$1f",null,{"name":"Next.Metadata","children":"$L25"}]}]}],null]}]
1c:["$","link","0",{"rel":"stylesheet","href":"/_next/static/chunks/0mtcuu7cd2iei.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}]
23:[["$","meta","0",{"charSet":"utf-8"}],["$","meta","1",{"name":"viewport","content":"width=device-width, initial-scale=1"}]]
20:null
25:[["$","title","0",{"children":"ABG Brut India Case Study | Impulse Digital"}],["$","meta","1",{"name":"description","content":"How Impulse Digital helped ABG Brut India build digital brand presence and drive consumer engagement through creative digital marketing campaigns."}],["$","meta","2",{"name":"keywords","content":"abg brut india case study, digital marketing case study"}],["$","meta","3",{"name":"robots","content":"index, follow"}],["$","link","4",{"rel":"canonical","href":"https://www.theimpulsedigital.com/case-studies/abg-brut-india/"}],["$","meta","5",{"property":"og:title","content":"ABG Brut India Case Study | Impulse Digital"}],["$","meta","6",{"property":"og:description","content":"How Impulse Digital helped ABG Brut India build digital brand presence and drive consumer engagement through creative digital marketing campaigns."}],["$","meta","7",{"property":"og:url","content":"https://www.theimpulsedigital.com/case-studies/abg-brut-india/"}],["$","meta","8",{"property":"og:site_name","content":"Impulse Digital"}],["$","meta","9",{"property":"og:image","content":"https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg"}],["$","meta","10",{"property":"og:type","content":"website"}],["$","meta","11",{"name":"twitter:card","content":"summary_large_image"}],["$","meta","12",{"name":"twitter:site","content":"@impulsedigi"}],["$","meta","13",{"name":"twitter:title","content":"ABG Brut India Case Study | Impulse Digital"}],["$","meta","14",{"name":"twitter:description","content":"How Impulse Digital helped ABG Brut India build digital brand presence and drive consumer engagement through creative digital marketing campaigns."}],["$","meta","15",{"name":"twitter:image","content":"https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg"}]]
