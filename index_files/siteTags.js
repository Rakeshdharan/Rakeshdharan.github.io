!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="https://static.parastorage.com/services/tag-manager-client/1.126.0/",n(n.s=7)}([function(t,e,n){"use strict";n.d(e,"c",(function(){return E})),n.d(e,"i",(function(){return b})),n.d(e,"k",(function(){return l})),n.d(e,"e",(function(){return O})),n.d(e,"m",(function(){return g})),n.d(e,"d",(function(){return A})),n.d(e,"l",(function(){return T})),n.d(e,"j",(function(){return p})),n.d(e,"h",(function(){return I})),n.d(e,"b",(function(){return _})),n.d(e,"g",(function(){return m})),n.d(e,"a",(function(){return v})),n.d(e,"f",(function(){return y}));var o=n(5),r=function(){return(r=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)},i=function(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var o=Array(t),r=0;for(e=0;e<n;e++)for(var i=arguments[e],c=0,a=i.length;c<a;c++,r++)o[r]=i[c];return o},c=[],a=[],u=[],d=[],f=[],s={};function E(t){t.forEach((function(t){d.push({tag:t,embeddedNodes:null})}))}function b(){return d}function l(t){"object"!=typeof t||Array.isArray(t)||(s=r(r({},s),t))}function O(){return N(s)}function g(t){t&&"object"==typeof t&&(f=i(f,A(t)))}function A(t){return Object.keys(t).filter((function(e){return!!t[e]&&-1===f.indexOf(e)}))}function T(t){c=t}function p(t){c=c.filter((function(e){return e.name!==t}))}function I(){return N(c)}function _(t){a.push(t)}function m(){return N(a)}function v(t){u.push(t)}function y(){return N(u)}function N(t){return Object(o.a)(JSON.stringify(t))}},function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return r}));var o=function(){var t=!1;try{var e=window;t=e&&e.debug||e.location&&(e.location.search||"").toLowerCase().indexOf("debug=")>-1}catch(t){}return t}();function r(t){o&&console&&console.error("Tag Manager:  "+t)}function i(t){o&&console&&console.log("Tag Manager:  "+t)}},function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return a}));var o=n(3),r=n(0),i=n(1);function c(t,e,n){var o=function(){try{if("function"==typeof t)return t(e)}catch(t){Object(i.a)(t)}};return!0===n?setTimeout(o,0):o()}function a(t,e,n,i){return function(){Object(o.b)(t,window,{tagName:e,embed:n}),i(n),Object(r.j)(n.name)}}},function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return r}));var o=!!document.documentMode;function r(t,e,n){var r;o?(r=document.createEvent("CustomEvent")).initCustomEvent(t,!0,!0,n):r=new CustomEvent(t,{detail:n}),e&&e.dispatchEvent&&setTimeout((function(){e.dispatchEvent(r)}),0)}var i={TAG_MANAGER_LOADED:"TagManagerLoaded",TAGS_LOADING:"LoadingTags",TAG_LOADED:"TagLoaded",TAG_LOAD_ERROR:"TagLoadError"}},function(t,e,n){"use strict";n.d(e,"d",(function(){return r})),n.d(e,"a",(function(){return i})),n.d(e,"e",(function(){return c})),n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return u}));var o="_api/tag-manager/api/v1/tags/",r=o+"sites/",i="/"+o+"hosts/",c=[".wix.com",".editorx.com"],a={EDITOR:"EDITOR",EDITOR_X:"EDITOR_X",ADI:"ADI",APP_BUILDER:"APP_BUILDER",BUSINESS_MANAGER:"BUSINESS_MANAGER",SITES_LIST:"SITES_LIST",VIEWER:"VIEWER",LOGO_BUILDER:"LOGO_BUILDER",ART_STORE:"ART_STORE",TEMPLATES:"TEMPLATES",FUNNEL:"FUNNEL",DEV_CENTER:"DEV_CENTER",ARENA:"ARENA",LOGIN_PAGE:"LOGIN_PAGE",LOGIN_PAGE_EDITOR_X:"LOGIN_PAGE_EDITOR_X",PREMIUM:"PREMIUM",PREMIUM_TAGS:"PREMIUM_TAGS",SUPPORT:"SUPPORT",ACCOUNT_MANAGER:"ACCOUNT_MANAGER",APP_MARKET_STANDALONE:"APP_MARKET_STANDALONE",COMPONENT_STUDIO:"COMPONENT_STUDIO",PREMIUM_DOMAINS_WHOIS:"PREMIUM_DOMAINS_WHOIS",PREMIUM_DOMAINS:"PREMIUM_DOMAINS",RELEASE_NOTES:"RELEASE_NOTES",PREMIUM_MP_CONTAINER:"PREMIUM_MP_CONTAINER",GET_FEEDBACK:"GET_FEEDBACK",MOBILE_WEB_DASHBOARD:"MOBILE_WEB_DASHBOARD"},u="22bef345-3c5b-4c18-b782-74d4085112ff"},function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var o=n(1);function r(t){var e=t;try{e=JSON.parse(t)}catch(t){Object(o.a)("Parse error in string"),Object(o.a)(t.message)}return e}},function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return i}));var o=n(2);function r(t,e,n,r){var c=r&&r.headers||{},a=r&&r.query||{};c["content-type"]=c["content-type"]||"application/json";var u=new XMLHttpRequest,d=r&&r.postBody?"POST":"GET",f=""+t+i(a);u.open(d,f,!0),u.onreadystatechange=function(){if(4===u.readyState){var t=u.status;t<200||t>=300?Object(o.b)(n,{status:t,responseText:u.responseText}):Object(o.b)(e,u.responseText)}},Object.keys(c).forEach((function(t){void 0!==c[t]&&u.setRequestHeader(t,c[t])})),u.send(r&&r.postBody||null)}function i(t){var e="";return"object"==typeof t&&Object.keys(t).forEach((function(n){if(void 0!==t[n]){var o=encodeURIComponent(t[n]);e+=encodeURIComponent(n)+"="+o+"&"}})),(e=e?e.substr(0,e.length-1):"")?"?"+e:""}},function(t,e,n){"use strict";n.r(e),n.d(e,"api",(function(){return T}));var o,r=n(0),i=n(3),c=n(2);function a(t,e){var n;return t.nodeType===Node.TEXT_NODE?n=document.createTextNode(t.content):t.nodeType===Node.COMMENT_NODE?n=document.createComment(t.content):(n=document.createElement(t.tag),t&&t.attributes instanceof NamedNodeMap?Array.prototype.forEach.call(t.attributes,(function(t){u(n,t.name,t.value)})):"object"==typeof t.attributes&&Object.keys(t.attributes).forEach((function(e){void 0!==typeof t.attributes[e]&&u(n,e,t.attributes[e])})),"SCRIPT"===t.tag&&function(t,e,n){void 0===e&&(e="");e&&(t.src=function(t){var e=new Blob([t],{type:"text/javascript;charset=utf-8"});return URL.createObjectURL(e)}(e));t.addEventListener("load",(function(){Object(c.b)(n&&n.onload,null)}),!1),t.addEventListener("error",(function(){Object(c.b)(n&&n.onerror,null)}),!1)}(n,t.content,e)),n}function u(t,e,n){t.setAttribute(e,n)}function d(t){var e=(t||Object(r.i)()).filter((function(t){return!t.embeddedNodes})),n=e.map((function(t){return t.tag}));Object(r.l)(n),Object(i.b)(i.a.TAGS_LOADING,window,n),e.forEach((function(t){var e,n,u,d=t.tag,f=(e=d.content,n=[],(u=document.createElement("DIV")).innerHTML=e,Array.prototype.forEach.call(u.childNodes,(function(t){var e=t.nodeType,o=t.innerHTML||t.textContent||t.nodeValue;n.push({nodeType:e,tag:t.nodeName,attributes:t.attributes,content:o})})),n),s=d.position&&d.position!==o.HEAD?document.body:document.head,E=function(t,e,n,o){var r=[],i=0,u=function(){(i-=1)>=0&&Object(c.b)(e.onload,{})},d=function(){!0,(i-=1)>=0&&Object(c.b)(e.onerror,{error:!0})},f=n.firstChild;t.forEach((function(t){"SCRIPT"===t.tag&&(i+=1);var e=a(t,{onload:u,onerror:d});r.push(e),o?n.insertBefore(e,f):n.appendChild(e)})),0===i&&Object(c.b)(e.onload,{},!0);return r}(f,{onload:Object(c.a)(i.a.TAG_LOADED,d.name,d,r.b),onerror:Object(c.a)(i.a.TAG_LOAD_ERROR,d.name,d,r.a)},s,d.position===o.BODY_START);t.embeddedNodes=E}))}!function(t){t.HEAD="head",t.BODY_START="bodyStart",t.BODY_END="bodyEnd"}(o||(o={}));var f=n(6),s=n(4),E=n(1),b=n(5);function l(t,e,n){return(t&&!function(t){var e=!1;return s.e.forEach((function(t){e||(e=location.hostname.indexOf(t)>0)})),e||t}(!!n)?t:"")+"/"+s.d+e}function O(t){var e=t.metasiteId,n=t.htmlsiteId,o=t.baseUrl,i=t.wixSite,a=t.language,u=t.categories,O=l(o,e,i),g=!i&&window.consentPolicyManager?window.consentPolicyManager._getConsentPolicyHeader():{},A=window.wixEmbedsAPI.getAppToken;A&&(g.authorization=Object(c.b)(A,s.c)),Object(f.b)(O,(function(t){!function(t,e){void 0===e&&(e=!1);var n=Object(b.a)(t);n.errors&&n.errors.length>0&&Object(E.a)(JSON.stringify(n.errors)),n.config&&(Object(r.m)(n.config.consentPolicy),e&&window.consentPolicyManager&&window.consentPolicyManager.init({consentPolicy:n.config.consentPolicy}),Object(r.k)(n.config)),n.tags&&(Object(r.c)(n.tags),d())}(t,!u&&!!i)}),(function(t){Object(E.a)("Error loading site tags at "+O),Object(E.a)(t.message)}),{query:{wixSite:!!i,htmlsiteId:n,language:a,categories:u},headers:g})}function g(){Object(r.i)().forEach((function(t){t.tag.loadOnce||(t.embeddedNodes.forEach((function(t){Object(c.b)((function(){t.parentNode.removeChild(t)}))})),t.embeddedNodes=null)})),d()}function A(t){if(t&&t.detail&&t.detail.policy){var e=Object(r.d)(t.detail.policy);e.length&&O({baseUrl:window.wixEmbedsAPI.getExternalBaseUrl(),htmlsiteId:window.wixEmbedsAPI.getHtmlSiteId(),metasiteId:window.wixEmbedsAPI.getMetaSiteId(),wixSite:window.wixEmbedsAPI.isWixSite(),language:window.wixEmbedsAPI.getLanguage(),categories:e})}}var T={getLoadedTags:r.g,getLoadingTags:r.h,getLoadErrorTags:r.f,getConfig:r.e},p=function(){var t=window.wixEmbedsAPI;O({baseUrl:t.getExternalBaseUrl(),htmlsiteId:t.getHtmlSiteId(),metasiteId:t.getMetaSiteId(),language:t.getLanguage(),wixSite:t.isWixSite()}),window.wixEmbedsAPI.registerToEvent("pageNavigation",g),document.addEventListener("consentPolicyChanged",A),window.wixTagManager=T,Object(i.b)(i.a.TAG_MANAGER_LOADED,window,T)};window.wixEmbedsAPI&&"function"==typeof window.wixEmbedsAPI.registerToEvent?p():window.addEventListener("wixEmbedsAPIReady",(function(){p(),p=function(){}}),!1)}]);
//# sourceMappingURL=siteTags.bundle.min.js.map