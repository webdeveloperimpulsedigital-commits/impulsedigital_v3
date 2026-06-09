1:"$Sreact.fragment"
3:I[79520,["/_next/static/chunks/03htq7z4zumrb.js","/_next/static/chunks/0d3shmwh5_nmn.js"],""]
5:I[89433,["/_next/static/chunks/03htq7z4zumrb.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
6:I[79651,["/_next/static/chunks/03htq7z4zumrb.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
7:I[62319,["/_next/static/chunks/03htq7z4zumrb.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
8:I[39756,["/_next/static/chunks/03htq7z4zumrb.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
9:I[37457,["/_next/static/chunks/03htq7z4zumrb.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
a:I[36768,["/_next/static/chunks/03htq7z4zumrb.js","/_next/static/chunks/0d3shmwh5_nmn.js","/_next/static/chunks/10dq29k6t3r9..js"],"default"]
b:I[56691,["/_next/static/chunks/03htq7z4zumrb.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
13:I[68027,["/_next/static/chunks/03htq7z4zumrb.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default",1]
:HL["/_next/static/chunks/0ujqf0ucmygs1.css","style"]
:HL["/_next/static/chunks/0fwx12ld_1jig.css","style"]
:HL["/fonts/Satoshi-Bold.woff2","font",{"crossOrigin":"anonymous","type":"font/woff2"}]
:HL["/fonts/Satoshi-Regular.woff2","font",{"crossOrigin":"anonymous","type":"font/woff2"}]
:HL["https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap","style"]
:HL["https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css","style",{"media":"print"}]
2:["$","link",null,{"rel":"stylesheet","href":"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"}]
4:T56f,(function(){
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
        if (n.nodeType === 1) {
          removeZoho(n);
          if (n.tagName === 'DIV' || n.tagName === 'IFRAME' || n.tagName === 'SCRIPT') {
            n.querySelectorAll('[id*="zsiq"],[id*="siq_"],[class*="zsiq"],[class*="siq_"],iframe[src*="zohopublic"],script[src*="zohopublic"],iframe[aria-label*="SalesIQ"]')
             .forEach(removeZoho);
          }
        }
      });
    });
  });
  obs.observe(document.documentElement,{childList:true,subtree:true});
  /* Also clean up anything already in the DOM */
  document.querySelectorAll('[id*="zsiq"],[id*="siq_"],[class*="zsiq"],iframe[aria-label*="SalesIQ"]').forEach(removeZoho);
})();0:{"P":null,"c":["","blog","why-employer-branding-should-be-an-essential-element-of-your-marketing-plan",""],"q":"","i":false,"f":[[["",{"children":["blog",{"children":[["slug","why-employer-branding-should-be-an-essential-element-of-your-marketing-plan","d",null],{"children":["__PAGE__",{}]}]}]},"$undefined","$undefined",16],[["$","$1","c",{"children":[[["$","link","0",{"rel":"stylesheet","href":"/_next/static/chunks/0ujqf0ucmygs1.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}],["$","link","1",{"rel":"stylesheet","href":"/_next/static/chunks/0fwx12ld_1jig.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}],["$","script","script-0",{"src":"/_next/static/chunks/03htq7z4zumrb.js","async":true,"nonce":"$undefined"}],["$","script","script-1",{"src":"/_next/static/chunks/0d3shmwh5_nmn.js","async":true,"nonce":"$undefined"}]],["$","html",null,{"lang":"en","children":[["$","head",null,{"children":[["$","link",null,{"rel":"icon","type":"image/png","href":"/favicon.png"}],["$","link",null,{"rel":"preload","href":"/fonts/Satoshi-Bold.woff2","as":"font","type":"font/woff2","crossOrigin":"anonymous"}],["$","link",null,{"rel":"preload","href":"/fonts/Satoshi-Regular.woff2","as":"font","type":"font/woff2","crossOrigin":"anonymous"}],["$","link",null,{"rel":"preconnect","href":"https://fonts.googleapis.com"}],["$","link",null,{"rel":"preconnect","href":"https://fonts.gstatic.com","crossOrigin":"anonymous"}],["$","link",null,{"rel":"preconnect","href":"https://www.googletagmanager.com"}],["$","link",null,{"rel":"preconnect","href":"https://www.google-analytics.com"}],["$","link",null,{"rel":"preconnect","href":"https://cdnjs.cloudflare.com","crossOrigin":"anonymous"}],["$","link",null,{"rel":"preconnect","href":"https://unpkg.com","crossOrigin":"anonymous"}],["$","link",null,{"rel":"stylesheet","href":"https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"}],["$","link",null,{"rel":"preload","href":"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css","as":"style","media":"print"}],["$","link",null,{"rel":"stylesheet","href":"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css","media":"print"}],["$","noscript",null,{"children":"$2"}]]}],["$","body",null,{"children":[["$","$L3",null,{"id":"block-zoho-salesiq","strategy":"beforeInteractive","dangerouslySetInnerHTML":{"__html":"$4"}}],["$","$L5",null,{}],["$","$L6",null,{}],["$","$L7",null,{}],["$","$L8",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L9",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":[["$","$La",null,{}],[]],"forbidden":"$undefined","unauthorized":"$undefined"}],["$","$Lb",null,{}],"$Lc","$Ld"]}]]}]]}],{"children":["$Le",{"children":["$Lf",{"children":["$L10",{},null,false,null]},null,false,"$@11"]},null,false,null]},null,false,null],"$L12",false]],"m":"$undefined","G":["$13",["$L14","$L15"]],"S":true,"h":null,"s":"$undefined","l":"$undefined","p":"$undefined","d":"$undefined","b":"Wf1MBmI6bC1wSpSW7NBES"}
16:I[8142,["/_next/static/chunks/03htq7z4zumrb.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
17:I[69732,["/_next/static/chunks/03htq7z4zumrb.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
19:I[97367,["/_next/static/chunks/03htq7z4zumrb.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"OutletBoundary"]
1a:"$Sreact.suspense"
1d:I[97367,["/_next/static/chunks/03htq7z4zumrb.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"ViewportBoundary"]
1f:I[97367,["/_next/static/chunks/03htq7z4zumrb.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"MetadataBoundary"]
:HL["/css/blog.css?v=1","style"]
c:["$","$L16",null,{}]
d:["$","$L17",null,{}]
e:["$","$1","c",{"children":[null,[["$","link",null,{"rel":"stylesheet","href":"/css/blog.css?v=1"}],["$","$L8",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L9",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","forbidden":"$undefined","unauthorized":"$undefined"}]]]}]
f:["$","$1","c",{"children":[null,["$","$L8",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L9",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","forbidden":"$undefined","unauthorized":"$undefined"}]]}]
10:["$","$1","c",{"children":["$L18",null,["$","$L19",null,{"children":["$","$1a",null,{"name":"Next.MetadataOutlet","children":"$@1b"}]}]]}]
1c:[]
11:"$W1c"
12:["$","$1","h",{"children":[null,["$","$L1d",null,{"children":"$L1e"}],["$","div",null,{"hidden":true,"children":["$","$L1f",null,{"children":["$","$1a",null,{"name":"Next.Metadata","children":"$L20"}]}]}],null]}]
14:["$","link","0",{"rel":"stylesheet","href":"/_next/static/chunks/0ujqf0ucmygs1.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}]
15:["$","link","1",{"rel":"stylesheet","href":"/_next/static/chunks/0fwx12ld_1jig.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}]
1e:[["$","meta","0",{"charSet":"utf-8"}],["$","meta","1",{"name":"viewport","content":"width=device-width, initial-scale=1"}]]
18:E{"digest":"NEXT_HTTP_ERROR_FALLBACK;404"}
1b:null
20:[["$","title","0",{"children":"Best Digital Marketing Agency in Mumbai | Impulse Digital"}],["$","meta","1",{"name":"description","content":"Impulse Digital is a top digital marketing agency in Mumbai that helps businesses expand their reach in the digital space with strategy, performance marketing, SEO, social media, content, and creative solutions."}],["$","meta","2",{"name":"keywords","content":"digital marketing agency in mumbai,digital marketing company,impulse digital"}],["$","meta","3",{"name":"robots","content":"index, follow"}],["$","link","4",{"rel":"canonical","href":"https://www.theimpulsedigital.com/"}],["$","meta","5",{"property":"og:title","content":"Best Digital Marketing Agency in Mumbai | Impulse Digital"}],["$","meta","6",{"property":"og:description","content":"Impulse Digital is a top digital marketing agency in Mumbai helping brands with SEO, social media, performance marketing, content, website development, branding, Agentic AI, and AI video production."}],["$","meta","7",{"property":"og:url","content":"https://www.theimpulsedigital.com/"}],["$","meta","8",{"property":"og:site_name","content":"Impulse Digital"}],["$","meta","9",{"property":"og:image","content":"https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg"}],["$","meta","10",{"property":"og:type","content":"website"}],["$","meta","11",{"name":"twitter:card","content":"summary_large_image"}],["$","meta","12",{"name":"twitter:site","content":"@impulsedigi"}],["$","meta","13",{"name":"twitter:title","content":"Best Digital Marketing Agency in Mumbai | Impulse Digital"}],["$","meta","14",{"name":"twitter:description","content":"Impulse Digital is a top digital marketing agency in Mumbai helping brands with SEO, social media, performance marketing, content, website development, branding, Agentic AI, and AI video production."}],["$","meta","15",{"name":"twitter:image","content":"https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg"}]]
