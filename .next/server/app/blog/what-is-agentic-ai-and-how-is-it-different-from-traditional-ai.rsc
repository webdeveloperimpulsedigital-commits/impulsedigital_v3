1:"$Sreact.fragment"
3:I[79520,["/_next/static/chunks/0p3e74px1dngy.js","/_next/static/chunks/0d3shmwh5_nmn.js"],""]
5:I[89433,["/_next/static/chunks/0p3e74px1dngy.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
6:I[79651,["/_next/static/chunks/0p3e74px1dngy.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
7:I[62319,["/_next/static/chunks/0p3e74px1dngy.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
8:I[39756,["/_next/static/chunks/0p3e74px1dngy.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
9:I[37457,["/_next/static/chunks/0p3e74px1dngy.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
a:I[36768,["/_next/static/chunks/0p3e74px1dngy.js","/_next/static/chunks/0d3shmwh5_nmn.js","/_next/static/chunks/0uwksrfmsi3kt.js"],"default"]
b:I[56691,["/_next/static/chunks/0p3e74px1dngy.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
c:I[8142,["/_next/static/chunks/0p3e74px1dngy.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
d:I[69732,["/_next/static/chunks/0p3e74px1dngy.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
13:I[68027,["/_next/static/chunks/0p3e74px1dngy.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default",1]
:HL["/_next/static/chunks/0v6--n2q10xjq.css","style"]
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
})();0:{"P":null,"c":["","blog","what-is-agentic-ai-and-how-is-it-different-from-traditional-ai",""],"q":"","i":false,"f":[[["",{"children":["blog",{"children":[["slug","what-is-agentic-ai-and-how-is-it-different-from-traditional-ai","d",null],{"children":["__PAGE__",{}]}]}]},"$undefined","$undefined",16],[["$","$1","c",{"children":[[["$","link","0",{"rel":"stylesheet","href":"/_next/static/chunks/0v6--n2q10xjq.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}],["$","link","1",{"rel":"stylesheet","href":"/_next/static/chunks/0fwx12ld_1jig.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}],["$","script","script-0",{"src":"/_next/static/chunks/0p3e74px1dngy.js","async":true,"nonce":"$undefined"}],["$","script","script-1",{"src":"/_next/static/chunks/0d3shmwh5_nmn.js","async":true,"nonce":"$undefined"}]],["$","html",null,{"lang":"en","children":[["$","head",null,{"children":[["$","link",null,{"rel":"icon","type":"image/png","href":"/favicon.png"}],["$","link",null,{"rel":"preload","href":"/fonts/Satoshi-Bold.woff2","as":"font","type":"font/woff2","crossOrigin":"anonymous"}],["$","link",null,{"rel":"preload","href":"/fonts/Satoshi-Regular.woff2","as":"font","type":"font/woff2","crossOrigin":"anonymous"}],["$","link",null,{"rel":"preconnect","href":"https://fonts.googleapis.com"}],["$","link",null,{"rel":"preconnect","href":"https://fonts.gstatic.com","crossOrigin":"anonymous"}],["$","link",null,{"rel":"preconnect","href":"https://www.googletagmanager.com"}],["$","link",null,{"rel":"preconnect","href":"https://www.google-analytics.com"}],["$","link",null,{"rel":"preconnect","href":"https://cdnjs.cloudflare.com","crossOrigin":"anonymous"}],["$","link",null,{"rel":"preconnect","href":"https://unpkg.com","crossOrigin":"anonymous"}],["$","link",null,{"rel":"stylesheet","href":"https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"}],["$","link",null,{"rel":"preload","href":"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css","as":"style","media":"print"}],["$","link",null,{"rel":"stylesheet","href":"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css","media":"print"}],["$","noscript",null,{"children":"$2"}]]}],["$","body",null,{"children":[["$","$L3",null,{"id":"block-zoho-salesiq","strategy":"beforeInteractive","dangerouslySetInnerHTML":{"__html":"$4"}}],["$","$L5",null,{}],["$","$L6",null,{}],["$","$L7",null,{}],["$","$L8",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L9",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":[["$","$La",null,{}],[]],"forbidden":"$undefined","unauthorized":"$undefined"}],["$","$Lb",null,{}],["$","$Lc",null,{}],["$","$Ld",null,{}]]}]]}]]}],{"children":[["$","$1","c",{"children":[null,"$Le"]}],{"children":["$Lf",{"children":["$L10",{},null,false,null]},null,false,"$@11"]},null,false,null]},null,false,null],"$L12",false]],"m":"$undefined","G":["$13",["$L14","$L15"]],"S":true,"h":null,"s":"$undefined","l":"$undefined","p":"$undefined","d":"$undefined","b":"EDuCn2_AS1MmGGBXXIi-7"}
17:I[97367,["/_next/static/chunks/0p3e74px1dngy.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"OutletBoundary"]
18:"$Sreact.suspense"
1b:I[97367,["/_next/static/chunks/0p3e74px1dngy.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"ViewportBoundary"]
1d:I[97367,["/_next/static/chunks/0p3e74px1dngy.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"MetadataBoundary"]
:HL["/css/blog.css?v=1","style"]
e:[["$","link",null,{"rel":"stylesheet","href":"/css/blog.css?v=1"}],["$","$L8",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L9",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","forbidden":"$undefined","unauthorized":"$undefined"}]]
f:["$","$1","c",{"children":[null,["$","$L8",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L9",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","forbidden":"$undefined","unauthorized":"$undefined"}]]}]
10:["$","$1","c",{"children":["$L16",null,["$","$L17",null,{"children":["$","$18",null,{"name":"Next.MetadataOutlet","children":"$@19"}]}]]}]
1a:[]
11:"$W1a"
12:["$","$1","h",{"children":[null,["$","$L1b",null,{"children":"$L1c"}],["$","div",null,{"hidden":true,"children":["$","$L1d",null,{"children":["$","$18",null,{"name":"Next.Metadata","children":"$L1e"}]}]}],null]}]
14:["$","link","0",{"rel":"stylesheet","href":"/_next/static/chunks/0v6--n2q10xjq.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}]
15:["$","link","1",{"rel":"stylesheet","href":"/_next/static/chunks/0fwx12ld_1jig.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}]
1c:[["$","meta","0",{"charSet":"utf-8"}],["$","meta","1",{"name":"viewport","content":"width=device-width, initial-scale=1"}]]
16:E{"digest":"NEXT_HTTP_ERROR_FALLBACK;404"}
19:null
1e:[["$","title","0",{"children":"What Is Agentic AI and How Is It Different from Traditional AI?"}],["$","meta","1",{"name":"description","content":"Learn what Agentic AI is, how it differs from traditional AI, and why autonomous, goal-driven AI systems matter for modern businesses."}],["$","meta","2",{"name":"keywords","content":"digital marketing agency in mumbai,digital marketing company,impulse digital"}],["$","meta","3",{"name":"robots","content":"index, follow"}],["$","link","4",{"rel":"canonical","href":"https://www.theimpulsedigital.com/blog/what-is-agentic-ai-and-how-is-it-different-from-traditional-ai/"}],["$","meta","5",{"property":"og:title","content":"What Is Agentic AI and How Is It Different from Traditional AI?"}],["$","meta","6",{"property":"og:description","content":"Learn what Agentic AI is, how it differs from traditional AI, and why autonomous, goal-driven AI systems matter for modern businesses."}],["$","meta","7",{"property":"og:url","content":"https://www.theimpulsedigital.com/blog/what-is-agentic-ai-and-how-is-it-different-from-traditional-ai/"}],["$","meta","8",{"property":"og:site_name","content":"Impulse Digital"}],["$","meta","9",{"property":"og:image","content":"https://impulsedigital.co.in/ID-web-blog/wp-content/uploads/2026/06/what-is-agentic-ai.jpg"}],["$","meta","10",{"property":"og:type","content":"article"}],["$","meta","11",{"property":"article:published_time","content":"2026-01-29T06:36:18"}],["$","meta","12",{"name":"twitter:card","content":"summary_large_image"}],["$","meta","13",{"name":"twitter:title","content":"What Is Agentic AI and How Is It Different from Traditional AI?"}],["$","meta","14",{"name":"twitter:description","content":"Learn what Agentic AI is, how it differs from traditional AI, and why autonomous, goal-driven AI systems matter for modern businesses."}],["$","meta","15",{"name":"twitter:image","content":"https://impulsedigital.co.in/ID-web-blog/wp-content/uploads/2026/06/what-is-agentic-ai.jpg"}]]
