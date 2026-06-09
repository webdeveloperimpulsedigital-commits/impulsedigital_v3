module.exports=[93695,(e,t,r)=>{t.exports=e.x("next/dist/shared/lib/no-fallback-error.external.js",()=>require("next/dist/shared/lib/no-fallback-error.external.js"))},18622,(e,t,r)=>{t.exports=e.x("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js",()=>require("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js"))},56704,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/work-async-storage.external.js",()=>require("next/dist/server/app-render/work-async-storage.external.js"))},32319,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/work-unit-async-storage.external.js",()=>require("next/dist/server/app-render/work-unit-async-storage.external.js"))},24725,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/after-task-async-storage.external.js",()=>require("next/dist/server/app-render/after-task-async-storage.external.js"))},70406,(e,t,r)=>{t.exports=e.x("next/dist/compiled/@opentelemetry/api",()=>require("next/dist/compiled/@opentelemetry/api"))},84931,e=>{"use strict";var t=e.i(47909),r=e.i(74017),a=e.i(96250),o=e.i(59756),n=e.i(61916),i=e.i(74677),s=e.i(69741),l=e.i(16795),d=e.i(87718),p=e.i(95169),c=e.i(47587),u=e.i(66012),h=e.i(70101),f=e.i(26937),g=e.i(10372),m=e.i(93695);e.i(52474);var x=e.i(220),b=e.i(89171);async function w(e){try{let{name:t,company:r,email:a,phone:o,preferredTime:n,userRequirement:i,recommendedDirection:s,chatHistory:l}=await e.json(),d=!1,p="";try{let e=process.env.RESEND_API_KEY;if(e){let c=new Date().toLocaleString("en-US",{timeZone:"Asia/Kolkata",dateStyle:"medium",timeStyle:"short"})+" (IST)",u="";l&&Array.isArray(l)&&(u=`
            <h2 style="font-size: 15px; font-weight: 600; margin-top: 20px; margin-bottom: 12px; border-bottom: 2px solid #f3f4f6; padding-bottom: 6px; color: #1f2937;">Chat Transcript</h2>
            <div style="font-size: 13px; color: #4b5563; background-color: #f9fafb; padding: 12px; border-radius: 8px; border: 1px solid #e5e7eb; max-height: 250px; overflow-y: auto;">
              ${l.map(e=>{let t="user"===e.role?"Client":"Assistant (Adwait)",r="user"===e.role?"#8a5cf6":"#1f2937";return`<div style="margin-bottom: 10px;">
                  <strong style="color: ${r};">${t}:</strong>
                  <span style="white-space: pre-wrap;">${e.content}</span>
                </div>`}).join("")}
            </div>
          `);let h=`
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <title>New Chatbot Lead</title>
          </head>
          <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f9fafb; margin: 0; padding: 20px; color: #111827;">
            <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05); border: 1px solid #e5e7eb;">
              <tr>
                <td style="background: linear-gradient(135deg, #8a5cf6 0%, #b829ea 100%); padding: 24px; text-align: center;">
                  <h1 style="color: #ffffff; margin: 0; font-size: 20px; font-weight: 700;">New Chatbot Lead Captured</h1>
                  <p style="color: rgba(255, 255, 255, 0.85); margin: 4px 0 0 0; font-size: 13px;">Impulse Digital Growth Assistant (Adwait)</p>
                </td>
              </tr>
              <tr>
                <td style="padding: 24px;">
                  <h2 style="font-size: 15px; font-weight: 600; margin-top: 0; margin-bottom: 12px; border-bottom: 2px solid #f3f4f6; padding-bottom: 6px; color: #1f2937;">Contact Information</h2>
                  <table width="100%" cellpadding="6" cellspacing="0" style="font-size: 14px; margin-bottom: 20px; color: #4b5563;">
                    <tr>
                      <td width="35%" style="font-weight: 600; color: #374151;">Name:</td>
                      <td>${t}</td>
                    </tr>
                    <tr>
                      <td style="font-weight: 600; color: #374151;">Company:</td>
                      <td>${r}</td>
                    </tr>
                    <tr>
                      <td style="font-weight: 600; color: #374151;">Email:</td>
                      <td><a href="mailto:${a}" style="color: #8a5cf6; text-decoration: none;">${a}</a></td>
                    </tr>
                    <tr>
                      <td style="font-weight: 600; color: #374151;">Phone Number:</td>
                      <td><a href="tel:${o}" style="color: #8a5cf6; text-decoration: none;">${o}</a></td>
                    </tr>
                    <tr>
                      <td style="font-weight: 600; color: #374151;">Preferred Time:</td>
                      <td>${n}</td>
                    </tr>
                  </table>

                  <h2 style="font-size: 15px; font-weight: 600; margin-bottom: 12px; border-bottom: 2px solid #f3f4f6; padding-bottom: 6px; color: #1f2937;">Consultation Details</h2>
                  <table width="100%" cellpadding="6" cellspacing="0" style="font-size: 14px; color: #4b5563;">
                    <tr>
                      <td width="35%" style="font-weight: 600; color: #374151;">Requirement:</td>
                      <td>${i||"Not specified"}</td>
                    </tr>
                    <tr>
                      <td style="font-weight: 600; color: #374151;">Recommended Path:</td>
                      <td>${s||"Not specified"}</td>
                    </tr>
                    <tr>
                      <td style="font-weight: 600; color: #374151;">Captured Time:</td>
                      <td>${c}</td>
                    </tr>
                  </table>

                  ${u}
                </td>
              </tr>
              <tr>
                <td style="background-color: #f3f4f6; padding: 14px; text-align: center; font-size: 11px; color: #9ca3af; border-top: 1px solid #e5e7eb;">
                  This notification was generated automatically from the chat widget on <a href="https://www.theimpulsedigital.com" target="_blank" style="color: #9ca3af; text-decoration: underline;">www.theimpulsedigital.com</a>.
                </td>
              </tr>
            </table>
          </body>
          </html>
        `,f=await fetch("https://api.resend.com/emails",{method:"POST",headers:{Authorization:`Bearer ${e}`,"Content-Type":"application/json"},body:JSON.stringify({from:"Impulse Digital Chatbot <onboarding@resend.dev>",to:["adwait@theimpulsedigital.com","abhishek@theimpulsedigital.com"],subject:`New Chatbot Lead - ${r}`,html:h})});if(f.ok)d=!0,console.log("Lead email notification sent successfully");else{let e=await f.text();console.error("Resend API error response:",e),p=`Resend API error status ${f.status}`}}else console.error("RESEND_API_KEY is not defined in environment variables."),p="RESEND_API_KEY is missing"}catch(e){console.error("Error sending Resend email alert:",e),p=e.message||"Error executing Resend email alert"}return b.NextResponse.json({success:!0,emailSent:d,emailError:p||void 0})}catch(e){return console.error("Error in lead email API route:",e),b.NextResponse.json({error:e.message||"Internal server error"},{status:500})}}e.s(["POST",0,w,"dynamic",0,"force-dynamic"],52122);var y=e.i(52122);let v=new t.AppRouteRouteModule({definition:{kind:r.RouteKind.APP_ROUTE,page:"/api/lead/route",pathname:"/api/lead",filename:"route",bundlePath:""},distDir:".next",relativeProjectDir:"",resolvedPagePath:"[project]/app/api/lead/route.ts",nextConfigOutput:"standalone",userland:y,...{}}),{workAsyncStorage:R,workUnitAsyncStorage:E,serverHooks:C}=v;async function A(e,t,a){a.requestMeta&&(0,o.setRequestMeta)(e,a.requestMeta),v.isDev&&(0,o.addRequestMeta)(e,"devRequestTimingInternalsEnd",process.hrtime.bigint());let b="/api/lead/route";b=b.replace(/\/index$/,"")||"/";let w=await v.prepare(e,t,{srcPage:b,multiZoneDraftMode:!1});if(!w)return t.statusCode=400,t.end("Bad Request"),null==a.waitUntil||a.waitUntil.call(a,Promise.resolve()),null;let{buildId:y,deploymentId:R,params:E,nextConfig:C,parsedUrl:A,isDraftMode:N,prerenderManifest:P,routerServerContext:S,isOnDemandRevalidate:T,revalidateOnlyGenerated:k,resolvedPathname:_,clientReferenceManifest:I,serverActionsManifest:$}=w,q=(0,s.normalizeAppPath)(b),O=!!(P.dynamicRoutes[q]||P.routes[_]),j=async()=>((null==S?void 0:S.render404)?await S.render404(e,t,A,!1):t.end("This page could not be found"),null);if(O&&!N){let e=!!P.routes[_],t=P.dynamicRoutes[q];if(t&&!1===t.fallback&&!e){if(C.adapterPath)return await j();throw new m.NoFallbackError}}let D=null;!O||v.isDev||N||(D="/index"===(D=_)?"/":D);let H=!0===v.isDev||!O,U=O&&!H;$&&I&&(0,i.setManifestsSingleton)({page:b,clientReferenceManifest:I,serverActionsManifest:$});let M=e.method||"GET",K=(0,n.getTracer)(),z=K.getActiveScopeSpan(),L=!!(null==S?void 0:S.isWrappedByNextServer),F=!!(0,o.getRequestMeta)(e,"minimalMode"),B=(0,o.getRequestMeta)(e,"incrementalCache")||await v.getIncrementalCache(e,C,P,F);null==B||B.resetRequestCache(),globalThis.__incrementalCache=B;let G={params:E,previewProps:P.preview,renderOpts:{experimental:{authInterrupts:!!C.experimental.authInterrupts},cacheComponents:!!C.cacheComponents,supportsDynamicResponse:H,incrementalCache:B,cacheLifeProfiles:C.cacheLife,waitUntil:a.waitUntil,onClose:e=>{t.on("close",e)},onAfterTaskError:void 0,onInstrumentationRequestError:(t,r,a,o)=>v.onRequestError(e,t,a,o,S)},sharedContext:{buildId:y,deploymentId:R}},Y=new l.NodeNextRequest(e),V=new l.NodeNextResponse(t),W=d.NextRequestAdapter.fromNodeNextRequest(Y,(0,d.signalFromNodeResponse)(t));try{let o,i=async e=>v.handle(W,G).finally(()=>{if(!e)return;e.setAttributes({"http.status_code":t.statusCode,"next.rsc":!1});let r=K.getRootSpanAttributes();if(!r)return;if(r.get("next.span_type")!==p.BaseServerSpan.handleRequest)return void console.warn(`Unexpected root span type '${r.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let a=r.get("next.route");if(a){let t=`${M} ${a}`;e.setAttributes({"next.route":a,"http.route":a,"next.span_name":t}),e.updateName(t),o&&o!==e&&(o.setAttribute("http.route",a),o.updateName(t))}else e.updateName(`${M} ${b}`)}),s=async o=>{var n,s;let l=async({previousCacheEntry:r})=>{try{if(!F&&T&&k&&!r)return t.statusCode=404,t.setHeader("x-nextjs-cache","REVALIDATED"),t.end("This page could not be found"),null;let n=await i(o);e.fetchMetrics=G.renderOpts.fetchMetrics;let s=G.renderOpts.pendingWaitUntil;s&&a.waitUntil&&(a.waitUntil(s),s=void 0);let l=G.renderOpts.collectedTags;if(!O)return await (0,u.sendResponse)(Y,V,n,G.renderOpts.pendingWaitUntil),null;{let e=await n.blob(),t=(0,h.toNodeOutgoingHttpHeaders)(n.headers);l&&(t[g.NEXT_CACHE_TAGS_HEADER]=l),!t["content-type"]&&e.type&&(t["content-type"]=e.type);let r=void 0!==G.renderOpts.collectedRevalidate&&!(G.renderOpts.collectedRevalidate>=g.INFINITE_CACHE)&&G.renderOpts.collectedRevalidate,a=void 0===G.renderOpts.collectedExpire||G.renderOpts.collectedExpire>=g.INFINITE_CACHE?void 0:G.renderOpts.collectedExpire;return{value:{kind:x.CachedRouteKind.APP_ROUTE,status:n.status,body:Buffer.from(await e.arrayBuffer()),headers:t},cacheControl:{revalidate:r,expire:a}}}}catch(t){throw(null==r?void 0:r.isStale)&&await v.onRequestError(e,t,{routerKind:"App Router",routePath:b,routeType:"route",revalidateReason:(0,c.getRevalidateReason)({isStaticGeneration:U,isOnDemandRevalidate:T})},!1,S),t}},d=await v.handleResponse({req:e,nextConfig:C,cacheKey:D,routeKind:r.RouteKind.APP_ROUTE,isFallback:!1,prerenderManifest:P,isRoutePPREnabled:!1,isOnDemandRevalidate:T,revalidateOnlyGenerated:k,responseGenerator:l,waitUntil:a.waitUntil,isMinimalMode:F});if(!O)return null;if((null==d||null==(n=d.value)?void 0:n.kind)!==x.CachedRouteKind.APP_ROUTE)throw Object.defineProperty(Error(`Invariant: app-route received invalid cache entry ${null==d||null==(s=d.value)?void 0:s.kind}`),"__NEXT_ERROR_CODE",{value:"E701",enumerable:!1,configurable:!0});F||t.setHeader("x-nextjs-cache",T?"REVALIDATED":d.isMiss?"MISS":d.isStale?"STALE":"HIT"),N&&t.setHeader("Cache-Control","private, no-cache, no-store, max-age=0, must-revalidate");let p=(0,h.fromNodeOutgoingHttpHeaders)(d.value.headers);return F&&O||p.delete(g.NEXT_CACHE_TAGS_HEADER),!d.cacheControl||t.getHeader("Cache-Control")||p.get("Cache-Control")||p.set("Cache-Control",(0,f.getCacheControlHeader)(d.cacheControl)),await (0,u.sendResponse)(Y,V,new Response(d.value.body,{headers:p,status:d.value.status||200})),null};L&&z?await s(z):(o=K.getActiveScopeSpan(),await K.withPropagatedContext(e.headers,()=>K.trace(p.BaseServerSpan.handleRequest,{spanName:`${M} ${b}`,kind:n.SpanKind.SERVER,attributes:{"http.method":M,"http.target":e.url}},s),void 0,!L))}catch(t){if(t instanceof m.NoFallbackError||await v.onRequestError(e,t,{routerKind:"App Router",routePath:q,routeType:"route",revalidateReason:(0,c.getRevalidateReason)({isStaticGeneration:U,isOnDemandRevalidate:T})},!1,S),O)throw t;return await (0,u.sendResponse)(Y,V,new Response(null,{status:500})),null}}e.s(["handler",0,A,"patchFetch",0,function(){return(0,a.patchFetch)({workAsyncStorage:R,workUnitAsyncStorage:E})},"routeModule",0,v,"serverHooks",0,C,"workAsyncStorage",0,R,"workUnitAsyncStorage",0,E],84931)}];

//# sourceMappingURL=%5Broot-of-the-server%5D__0nfyv32._.js.map