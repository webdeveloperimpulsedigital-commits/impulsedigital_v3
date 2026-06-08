1:"$Sreact.fragment"
3:I[79520,["/_next/static/chunks/0n__e7jb9u5fz.js","/_next/static/chunks/0d3shmwh5_nmn.js"],""]
14:I[68027,["/_next/static/chunks/0n__e7jb9u5fz.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default",1]
:HL["/_next/static/chunks/0dvbfi7o62pne.css","style"]
:HL["/_next/static/chunks/0fwx12ld_1jig.css","style"]
:HL["/fonts/Satoshi-Bold.woff2","font",{"crossOrigin":"anonymous","type":"font/woff2"}]
:HL["/fonts/Satoshi-Regular.woff2","font",{"crossOrigin":"anonymous","type":"font/woff2"}]
:HL["https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap","style"]
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
})();0:{"P":null,"c":["","growth-intelligence",""],"q":"","i":false,"f":[[["",{"children":["growth-intelligence",{"children":["__PAGE__",{}]}]},"$undefined","$undefined",16],[["$","$1","c",{"children":[[["$","link","0",{"rel":"stylesheet","href":"/_next/static/chunks/0dvbfi7o62pne.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}],["$","link","1",{"rel":"stylesheet","href":"/_next/static/chunks/0fwx12ld_1jig.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}],["$","script","script-0",{"src":"/_next/static/chunks/0n__e7jb9u5fz.js","async":true,"nonce":"$undefined"}],["$","script","script-1",{"src":"/_next/static/chunks/0d3shmwh5_nmn.js","async":true,"nonce":"$undefined"}]],["$","html",null,{"lang":"en","children":[["$","head",null,{"children":[["$","link",null,{"rel":"icon","type":"image/png","href":"/favicon.png"}],["$","link",null,{"rel":"preload","href":"/fonts/Satoshi-Bold.woff2","as":"font","type":"font/woff2","crossOrigin":"anonymous"}],["$","link",null,{"rel":"preload","href":"/fonts/Satoshi-Regular.woff2","as":"font","type":"font/woff2","crossOrigin":"anonymous"}],["$","link",null,{"rel":"preconnect","href":"https://fonts.googleapis.com"}],["$","link",null,{"rel":"preconnect","href":"https://fonts.gstatic.com","crossOrigin":"anonymous"}],["$","link",null,{"rel":"preconnect","href":"https://www.googletagmanager.com"}],["$","link",null,{"rel":"preconnect","href":"https://www.google-analytics.com"}],["$","link",null,{"rel":"preconnect","href":"https://cdnjs.cloudflare.com","crossOrigin":"anonymous"}],["$","link",null,{"rel":"preconnect","href":"https://unpkg.com","crossOrigin":"anonymous"}],["$","link",null,{"rel":"stylesheet","href":"https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"}],["$","link",null,{"rel":"preload","href":"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css","as":"style","media":"print"}],["$","link",null,{"rel":"stylesheet","href":"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css","media":"print"}],["$","noscript",null,{"children":"$2"}]]}],["$","body",null,{"children":[["$","$L3",null,{"id":"block-zoho-salesiq","strategy":"beforeInteractive","dangerouslySetInnerHTML":{"__html":"$4"}}],["$","$L3",null,{"id":"gtm-script","strategy":"afterInteractive","dangerouslySetInnerHTML":{"__html":"(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-M4TW43X3');"}}],"$L5","$L6","$L7","$L8","$L9","$La","$Lb","$Lc","$Ld","$Le","$Lf"]}]]}]]}],{"children":["$L10",{"children":["$L11",{},null,false,null]},null,false,"$@12"]},null,false,null],"$L13",false]],"m":"$undefined","G":["$14",["$L15","$L16"]],"S":true,"h":null,"s":"$undefined","l":"$undefined","p":"$undefined","d":"$undefined","b":"5fsN2mvfp1qvRXjDTGAg5"}
18:I[89433,["/_next/static/chunks/0n__e7jb9u5fz.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
19:I[79651,["/_next/static/chunks/0n__e7jb9u5fz.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
1a:I[62319,["/_next/static/chunks/0n__e7jb9u5fz.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
1b:I[39756,["/_next/static/chunks/0n__e7jb9u5fz.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
1c:I[37457,["/_next/static/chunks/0n__e7jb9u5fz.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
1d:I[36768,["/_next/static/chunks/0n__e7jb9u5fz.js","/_next/static/chunks/0d3shmwh5_nmn.js","/_next/static/chunks/0uwksrfmsi3kt.js"],"default"]
1e:I[56691,["/_next/static/chunks/0n__e7jb9u5fz.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
1f:I[8142,["/_next/static/chunks/0n__e7jb9u5fz.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
20:I[69732,["/_next/static/chunks/0n__e7jb9u5fz.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
21:I[8018,["/_next/static/chunks/0n__e7jb9u5fz.js","/_next/static/chunks/0d3shmwh5_nmn.js","/_next/static/chunks/0f2pjg.s3z147.js"],"default"]
22:I[97367,["/_next/static/chunks/0n__e7jb9u5fz.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"OutletBoundary"]
23:"$Sreact.suspense"
26:I[97367,["/_next/static/chunks/0n__e7jb9u5fz.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"ViewportBoundary"]
28:I[97367,["/_next/static/chunks/0n__e7jb9u5fz.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"MetadataBoundary"]
17:["$","iframe",null,{"src":"https://www.googletagmanager.com/ns.html?id=GTM-M4TW43X3","height":"0","width":"0","style":{"display":"none","visibility":"hidden"}}]
5:["$","noscript",null,{"children":"$17"}]
6:["$","$L18",null,{}]
7:["$","$L19",null,{}]
8:["$","$L1a",null,{}]
9:["$","$L1b",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L1c",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":[["$","$L1d",null,{}],[]],"forbidden":"$undefined","unauthorized":"$undefined"}]
a:["$","$L1e",null,{}]
b:["$","$L1f",null,{}]
c:["$","$L20",null,{}]
d:["$","$L3",null,{"src":"https://www.googletagmanager.com/gtag/js?id=G-EFFQ2YYFN8","strategy":"lazyOnload"}]
e:["$","$L3",null,{"id":"ga4-init","strategy":"lazyOnload","dangerouslySetInnerHTML":{"__html":"window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','G-EFFQ2YYFN8');"}}]
f:["$","$L3",null,{"id":"fa-media-switch","strategy":"afterInteractive","dangerouslySetInnerHTML":{"__html":"document.querySelectorAll('link[rel=\"stylesheet\"][media=\"print\"]').forEach(function(l){l.media='all';});"}}]
10:["$","$1","c",{"children":[null,["$","$L1b",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L1c",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","forbidden":"$undefined","unauthorized":"$undefined"}]]}]
11:["$","$1","c",{"children":[[["$","script",null,{"type":"application/ld+json","dangerouslySetInnerHTML":{"__html":"[{\"@context\":\"https://schema.org\",\"@type\":\"Service\",\"@id\":\"https://www.theimpulsedigital.com/growth-intelligence/#service\",\"name\":\"Growth Intelligence Services\",\"url\":\"https://www.theimpulsedigital.com/growth-intelligence/\",\"description\":\"Impulse Digital provides Growth Intelligence services that help brands make sharper marketing, consumer, market, campaign, and performance decisions through data-backed insights.\",\"serviceType\":[\"Growth Intelligence\",\"Consumer Intelligence\",\"Market Intelligence\",\"Campaign Intelligence\",\"Performance Intelligence\"],\"areaServed\":[\"IN\",\"US\"],\"provider\":{\"@type\":\"Organization\",\"name\":\"Impulse Digital\",\"url\":\"https://www.theimpulsedigital.com/\"}}]"}}],["$","$L21",null,{}]],[["$","script","script-0",{"src":"/_next/static/chunks/0f2pjg.s3z147.js","async":true,"nonce":"$undefined"}]],["$","$L22",null,{"children":["$","$23",null,{"name":"Next.MetadataOutlet","children":"$@24"}]}]]}]
25:[]
12:"$W25"
13:["$","$1","h",{"children":[null,["$","$L26",null,{"children":"$L27"}],["$","div",null,{"hidden":true,"children":["$","$L28",null,{"children":["$","$23",null,{"name":"Next.Metadata","children":"$L29"}]}]}],null]}]
15:["$","link","0",{"rel":"stylesheet","href":"/_next/static/chunks/0dvbfi7o62pne.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}]
16:["$","link","1",{"rel":"stylesheet","href":"/_next/static/chunks/0fwx12ld_1jig.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}]
27:[["$","meta","0",{"charSet":"utf-8"}],["$","meta","1",{"name":"viewport","content":"width=device-width, initial-scale=1"}]]
24:null
29:[["$","title","0",{"children":"Growth Intelligence Services | Impulse Digital"}],["$","meta","1",{"name":"description","content":"Impulse Digital's Growth Intelligence division helps brands use data, insights, and intelligence to drive smarter growth across all marketing channels."}],["$","meta","2",{"name":"keywords","content":"growth intelligence, data-driven marketing, brand intelligence"}],["$","meta","3",{"name":"robots","content":"index, follow"}],["$","link","4",{"rel":"canonical","href":"https://www.theimpulsedigital.com/growth-intelligence/"}],["$","meta","5",{"property":"og:title","content":"Growth Intelligence Services | Impulse Digital"}],["$","meta","6",{"property":"og:description","content":"Impulse Digital's Growth Intelligence division helps brands use data, insights, and intelligence to drive smarter growth across all marketing channels."}],["$","meta","7",{"property":"og:url","content":"https://www.theimpulsedigital.com/growth-intelligence/"}],["$","meta","8",{"property":"og:site_name","content":"Impulse Digital"}],["$","meta","9",{"property":"og:image","content":"https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg"}],["$","meta","10",{"property":"og:type","content":"website"}],["$","meta","11",{"name":"twitter:card","content":"summary_large_image"}],["$","meta","12",{"name":"twitter:site","content":"@impulsedigi"}],["$","meta","13",{"name":"twitter:title","content":"Growth Intelligence Services | Impulse Digital"}],["$","meta","14",{"name":"twitter:description","content":"Impulse Digital's Growth Intelligence division helps brands use data, insights, and intelligence to drive smarter growth across all marketing channels."}],["$","meta","15",{"name":"twitter:image","content":"https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg"}]]
