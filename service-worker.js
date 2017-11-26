"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/gsound/index.html","04a8d0dead88d103a29ff396e649fc70"],["/gsound/static/css/main.ce4de553.css","99d88998ad58e901071c97384ce88b7a"],["/gsound/static/js/main.b7b33090.js","8d9383645441193559d67042a0bee8ac"],["/gsound/static/media/album1.18673e17.png","18673e176ee5b2f5f7e56459cb5b75a8"],["/gsound/static/media/album10.0685b049.png","0685b049a96048a0f14710c1af1eb676"],["/gsound/static/media/album11.ee00ab5f.png","ee00ab5f8e4f6144b69ccd1f8f9fab0a"],["/gsound/static/media/album12.e025660f.png","e025660f482b19dcf794ee6a1ea13595"],["/gsound/static/media/album13.3fa7cecd.png","3fa7cecdcef0178553eb46d8f2ee3cf2"],["/gsound/static/media/album14.1914ed07.png","1914ed0784bcb86f12161b256b9946d9"],["/gsound/static/media/album16.b467808f.png","b467808f5bc0deaf5c496d6da78a0116"],["/gsound/static/media/album2.fb18491b.png","fb18491bf395e996cae9052941bce7a5"],["/gsound/static/media/album3.2d1b9d9d.png","2d1b9d9da90e6b0373c83b433dfc6a03"],["/gsound/static/media/album4.f9236f7e.png","f9236f7e723ea8499e56a1b265e01729"],["/gsound/static/media/album5.fd4849bb.png","fd4849bbe1b2b598da968fd027250f58"],["/gsound/static/media/album7.0e515150.png","0e515150c00ad217469149dc339e21ee"],["/gsound/static/media/album8.7d8f85db.png","7d8f85db9225b95e38c7469d664521e3"],["/gsound/static/media/album9.47af7b7e.png","47af7b7e51aff42946b882cefadfe849"],["/gsound/static/media/gallery1.2ca83eac.png","2ca83eac3a5a0d0bcee4e0fdfa54a16e"],["/gsound/static/media/gallery2.6bcc5c2a.png","6bcc5c2ad619534183f5c7100d11d5d2"],["/gsound/static/media/gallery3.49251d57.png","49251d574c328e2dd3126403af870988"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/gsound/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});