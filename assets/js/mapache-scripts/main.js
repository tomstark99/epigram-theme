/*!
 * mapache v4.0.0
 * Copyright 2021 GodoFredoNinja <hello@godofredo.ninja> (https://github.com/godofredoninja/mapache)
 * Licensed under gpl-3.0
 */!function n(o,a,i){function s(t,e){if(!a[t]){if(!o[t]){var r="function"==typeof require&&require;if(!e&&r)return r(t,!0);if(l)return l(t,!0);throw(r=new Error("Cannot find module '"+t+"'")).code="MODULE_NOT_FOUND",r}r=a[t]={exports:{}},o[t][0].call(r.exports,function(e){return s(o[t][1][e]||e)},r,r.exports,n,o,a,i)}return a[t].exports}for(var l="function"==typeof require&&require,e=0;e<i.length;e++)s(i[e]);return s}({1:[function(e,t,r){t.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},t.exports.__esModule=!0,t.exports.default=t.exports},{}],2:[function(e,t,r){t.exports=function(e){if(Array.isArray(e))return e},t.exports.__esModule=!0,t.exports.default=t.exports},{}],3:[function(e,t,r){t.exports=function(e){return e&&e.__esModule?e:{default:e}},t.exports.__esModule=!0,t.exports.default=t.exports},{}],4:[function(e,t,r){t.exports=function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],i=!0,s=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(e){s=!0,o=e}finally{try{i||null==r.return||r.return()}finally{if(s)throw o}}return a}},t.exports.__esModule=!0,t.exports.default=t.exports},{}],5:[function(e,t,r){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},t.exports.__esModule=!0,t.exports.default=t.exports},{}],6:[function(e,t,r){var n=e("./arrayWithHoles.js"),o=e("./iterableToArrayLimit.js"),a=e("./unsupportedIterableToArray.js"),i=e("./nonIterableRest.js");t.exports=function(e,t){return n(e)||o(e,t)||a(e,t)||i()},t.exports.__esModule=!0,t.exports.default=t.exports},{"./arrayWithHoles.js":2,"./iterableToArrayLimit.js":4,"./nonIterableRest.js":5,"./unsupportedIterableToArray.js":8}],7:[function(e,t,r){function n(e){return t.exports=n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t.exports.__esModule=!0,t.exports.default=t.exports,n(e)}t.exports=n,t.exports.__esModule=!0,t.exports.default=t.exports},{}],8:[function(e,t,r){var n=e("./arrayLikeToArray.js");t.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(r="Object"===r&&e.constructor?e.constructor.name:r)||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},t.exports.__esModule=!0,t.exports.default=t.exports},{"./arrayLikeToArray.js":1}],9:[function(e,r,t){!function(e,t){t=t(e,e.document,Date);e.lazySizes=t,"object"==typeof r&&r.exports&&(r.exports=t)}("undefined"!=typeof window?window:{},function(n,f,a){"use strict";var p,m;if(!function(){var e,t={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",fastLoadedClass:"ls-is-cached",iframeLoadMode:0,srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};for(e in m=n.lazySizesConfig||n.lazysizesConfig||{},t)e in m||(m[e]=t[e])}(),!f||!f.getElementsByClassName)return{init:function(){},cfg:m,noSupport:!0};function c(e,t){C(e,t)||e.setAttribute("class",(e[v]("class")||"").trim()+" "+t)}function d(e,t){(t=C(e,t))&&e.setAttribute("class",(e[v]("class")||"").replace(t," "))}function y(e,t){var r;!l&&(r=n.picturefill||m.pf)?(t&&t.src&&!e[v]("srcset")&&e.setAttribute("srcset",t.src),r({reevaluate:!0,elements:[e]})):t&&t.src&&(e.src=t.src)}var r,o,t,i,s,h=f.documentElement,l=n.HTMLPictureElement,u="addEventListener",v="getAttribute",e=n[u].bind(n),b=n.setTimeout,g=n.requestAnimationFrame||b,z=n.requestIdleCallback,_=/^picture$/i,x=["load","error","lazyincluded","_lazyloaded"],A={},w=Array.prototype.forEach,C=function(e,t){return A[t]||(A[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")),A[t].test(e[v]("class")||"")&&A[t]},E=function(t,r,e){var n=e?u:"removeEventListener";e&&E(t,r),x.forEach(function(e){t[n](e,r)})},M=function(e,t,r,n,o){var a=f.createEvent("Event");return(r=r||{}).instance=p,a.initEvent(t,!n,!o),a.detail=r,e.dispatchEvent(a),a},L=function(e,t){return(getComputedStyle(e,null)||{})[t]},S=function(e,t,r){for(r=r||e.offsetWidth;r<m.minSize&&t&&!e._lazysizesWidth;)r=t.offsetWidth,t=t.parentNode;return r},j=(i=[],s=t=[],O._lsFlush=q,O);function q(){var e=s;for(s=t.length?i:t,o=!(r=!0);e.length;)e.shift()();r=!1}function O(e,t){r&&!t?e.apply(this,arguments):(s.push(e),o||(o=!0,(f.hidden?b:g)(q)))}function T(r,e){return e?function(){j(r)}:function(){var e=this,t=arguments;j(function(){r.apply(e,t)})}}function k(e){function t(){var e=a.now()-n;e<99?b(t,99-e):(z||o)(o)}var r,n,o=function(){r=null,e()};return function(){n=a.now(),r=r||b(t,99)}}var D,N,R,W,P,I,B,F,H,$,U,Y,Z,G,J,K,Q,V,X,ee,te,re,ne,oe,ae,ie,se,le,ue,ce,de,fe=(X=/^img$/i,ee=/^iframe$/i,te="onscroll"in n&&!/(gle|ing)bot/.test(navigator.userAgent),oe=-1,ae=function(e){return(Y=null==Y?"hidden"==L(f.body,"visibility"):Y)||!("hidden"==L(e.parentNode,"visibility")&&"hidden"==L(e,"visibility"))},Z=me,J=ne=re=0,K=m.throttleDelay,Q=m.ricTimeout,V=z&&49<Q?function(){z(ye,{timeout:Q}),Q!==m.ricTimeout&&(Q=m.ricTimeout)}:T(function(){b(ye)},!0),se=T(he),le=function(e){se({target:e.target})},ue=T(function(t,e,r,n,o){var a,i,s,l,u;(s=M(t,"lazybeforeunveil",e)).defaultPrevented||(n&&(r?c(t,m.autosizesClass):t.setAttribute("sizes",n)),a=t[v](m.srcsetAttr),r=t[v](m.srcAttr),o&&(i=(u=t.parentNode)&&_.test(u.nodeName||"")),l=e.firesLoad||"src"in t&&(a||r||i),s={target:t},c(t,m.loadingClass),l&&(clearTimeout(R),R=b(pe,2500),E(t,le,!0)),i&&w.call(u.getElementsByTagName("source"),ve),a?t.setAttribute("srcset",a):r&&!i&&(ee.test(t.nodeName)?(n=r,0==(u=(e=t).getAttribute("data-load-mode")||m.iframeLoadMode)?e.contentWindow.location.replace(n):1==u&&(e.src=n)):t.src=r),o&&(a||i)&&y(t,{src:r})),t._lazyRace&&delete t._lazyRace,d(t,m.lazyClass),j(function(){var e=t.complete&&1<t.naturalWidth;l&&!e||(e&&c(t,m.fastLoadedClass),he(s),t._lazyCache=!0,b(function(){"_lazyCache"in t&&delete t._lazyCache},9)),"lazy"==t.loading&&ne--},!0)}),de=k(function(){m.loadMode=3,ie()}),{_:function(){P=a.now(),p.elements=f.getElementsByClassName(m.lazyClass),D=f.getElementsByClassName(m.lazyClass+" "+m.preloadClass),e("scroll",ie,!0),e("resize",ie,!0),e("pageshow",function(e){var t;!e.persisted||(t=f.querySelectorAll("."+m.loadingClass)).length&&t.forEach&&g(function(){t.forEach(function(e){e.complete&&ce(e)})})}),n.MutationObserver?new MutationObserver(ie).observe(h,{childList:!0,subtree:!0,attributes:!0}):(h[u]("DOMNodeInserted",ie,!0),h[u]("DOMAttrModified",ie,!0),setInterval(ie,999)),e("hashchange",ie,!0),["focus","mouseover","click","load","transitionend","animationend"].forEach(function(e){f[u](e,ie,!0)}),/d$|^c/.test(f.readyState)?ge():(e("load",ge),f[u]("DOMContentLoaded",ie),b(ge,2e4)),p.elements.length?(me(),j._lsFlush()):ie()},checkElems:ie=function(e){var t;(e=!0===e)&&(Q=33),G||(G=!0,(t=K-(a.now()-J))<0&&(t=0),e||t<9?V():b(V,t))},unveil:ce=function(e){var t,r,n,o;e._lazyRace||(!(o="auto"==(n=(r=X.test(e.nodeName))&&(e[v](m.sizesAttr)||e[v]("sizes"))))&&N||!r||!e[v]("src")&&!e.srcset||e.complete||C(e,m.errorClass)||!C(e,m.lazyClass))&&(t=M(e,"lazyunveilread").detail,o&&Ae.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,ne++,ue(e,t,o,n,r))},_aLSL:be});function pe(e){ne--,e&&!(ne<0)&&e.target||(ne=0)}function me(){var e,t,r,n,o,a,i,s,l,u,c,d=p.elements;if((W=m.loadMode)&&ne<8&&(e=d.length)){for(t=0,oe++;t<e;t++)if(d[t]&&!d[t]._lazyRace)if(!te||p.prematureUnveil&&p.prematureUnveil(d[t]))ce(d[t]);else if((i=d[t][v]("data-expand"))&&(o=+i)||(o=re),l||(l=!m.expand||m.expand<1?500<h.clientHeight&&500<h.clientWidth?500:370:m.expand,u=(p._defEx=l)*m.expFactor,c=m.hFac,Y=null,re<u&&ne<1&&2<oe&&2<W&&!f.hidden?(re=u,oe=0):re=1<W&&1<oe&&ne<6?l:0),s!==o&&(I=innerWidth+o*c,B=innerHeight+o,a=-1*o,s=o),u=d[t].getBoundingClientRect(),(U=u.bottom)>=a&&(F=u.top)<=B&&($=u.right)>=a*c&&(H=u.left)<=I&&(U||$||H||F)&&(m.loadHidden||ae(d[t]))&&(N&&ne<3&&!i&&(W<3||oe<4)||function(e,t){var r,n=e,o=ae(e);for(F-=t,U+=t,H-=t,$+=t;o&&(n=n.offsetParent)&&n!=f.body&&n!=h;)(o=0<(L(n,"opacity")||1))&&"visible"!=L(n,"overflow")&&(r=n.getBoundingClientRect(),o=$>r.left&&H<r.right&&U>r.top-1&&F<r.bottom+1);return o}(d[t],o))){if(ce(d[t]),n=!0,9<ne)break}else!n&&N&&!r&&ne<4&&oe<4&&2<W&&(D[0]||m.preloadAfterLoad)&&(D[0]||!i&&(U||$||H||F||"auto"!=d[t][v](m.sizesAttr)))&&(r=D[0]||d[t]);r&&!n&&ce(r)}}function ye(){G=!1,J=a.now(),Z()}function he(e){var t=e.target;t._lazyCache?delete t._lazyCache:(pe(e),c(t,m.loadedClass),d(t,m.loadingClass),E(t,le),M(t,"lazyloaded"))}function ve(e){var t,r=e[v](m.srcsetAttr);(t=m.customMedia[e[v]("data-media")||e[v]("media")])&&e.setAttribute("media",t),r&&e.setAttribute("srcset",r)}function be(){3==m.loadMode&&(m.loadMode=2),de()}function ge(){N||(a.now()-P<999?b(ge,999):(N=!0,m.loadMode=3,ie(),e("scroll",be,!0)))}var ze,_e,xe,Ae=(_e=T(function(e,t,r,n){var o,a,i;if(e._lazysizesWidth=n,e.setAttribute("sizes",n+="px"),_.test(t.nodeName||""))for(a=0,i=(o=t.getElementsByTagName("source")).length;a<i;a++)o[a].setAttribute("sizes",n);r.detail.dataAttr||y(e,r.detail)}),{_:function(){ze=f.getElementsByClassName(m.autosizesClass),e("resize",xe)},checkElems:xe=k(function(){var e,t=ze.length;if(t)for(e=0;e<t;e++)we(ze[e])}),updateElem:we});function we(e,t,r){var n=e.parentNode;n&&(r=S(e,n,r),(t=M(e,"lazybeforesizes",{width:r,dataAttr:!!t})).defaultPrevented||(r=t.detail.width)&&r!==e._lazysizesWidth&&_e(e,n,t,r))}function Ce(){!Ce.i&&f.getElementsByClassName&&(Ce.i=!0,Ae._(),fe._())}return b(function(){m.init&&Ce()}),p={cfg:m,autoSizer:Ae,loader:fe,init:Ce,uP:y,aC:c,rC:d,hC:C,fire:M,gW:S,rAF:j}})},{}],10:[function(e,t,r){"use strict";var n=e("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var o=n(e("./document-query-selector-all"));r.default=function(e){var t,e=(0,o.default)(e);e.length&&(t=document.documentElement,e.forEach(function(e){return e.addEventListener("click",function(e){e.preventDefault(),t.classList.contains("dark")?(t.classList.remove("dark"),localStorage.theme="light"):(t.classList.add("dark"),localStorage.theme="dark")})}))}},{"./document-query-selector-all":11,"@babel/runtime/helpers/interopRequireDefault":3}],11:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:document;return Array.prototype.slice.call(t.querySelectorAll(e),0)}},{}],12:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;r.default=function(e,t){var r=document.body;r.closest(e)&&window.addEventListener("scroll",function(){60<=window.scrollY?r.classList.remove(t):r.classList.add(t)},{passive:!0})}},{}],13:[function(e,t,r){"use strict";var n=e("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var a=n(e("@babel/runtime/helpers/slicedToArray")),o=n(e("./document-query-selector-all"));r.default=function(e,t){t=(0,o.default)(t);if(t.length)return t.forEach(function(o){Object.entries(e).forEach(function(e){var t=(0,a.default)(e,2),r=t[0],n=t[1],e=n[0];/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/.test(e)&&((t=document.createElement("a")).href=e,t.title=n[1],t.classList="button border-none hover:text-".concat(r),t.target="_blank",t.rel="noopener noreferrer",t.innerHTML='<svg class="icon icon--'.concat(r,'"><use xlink:href="#icon-').concat(r,'"></use></svg>'),o.appendChild(t))})})}},{"./document-query-selector-all":11,"@babel/runtime/helpers/interopRequireDefault":3,"@babel/runtime/helpers/slicedToArray":6}],14:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;r.default=function(e,t){var r=document.createElement("script");r.src=e,r.defer=!0,r.async=!0,t&&r.addEventListener("load",t),document.body.appendChild(r)}},{}],15:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;r.default=function(e){var t,r,n=document.querySelector(e);n&&(t=document.querySelector(".js-search"),r=window.pageYOffset,window.onscroll=function(){var e=window.pageYOffset;e<r?(n.classList.remove("-top-18"),t.classList.add("mt-16")):(n.classList.add("-top-18"),t.classList.remove("mt-16")),r=e})}},{}],16:[function(e,t,r){"use strict";var n=e("@babel/runtime/helpers/interopRequireDefault"),o=n(e("@babel/runtime/helpers/typeof"));e("lazysizes");var a=n(e("./app/social-media")),i=n(e("./app/dark-mode")),s=n(e("./app/header-transparency")),l=n(e("./components/load-script")),u=n(e("./components/scroll-hide-header"));document.addEventListener("DOMContentLoaded",function(){"object"===("undefined"==typeof followSocialMedia?"undefined":(0,o.default)(followSocialMedia))&&null!==followSocialMedia&&(0,a.default)(followSocialMedia,".js-social-media"),(0,i.default)(".js-dark-mode"),(0,s.default)(".has-cover","is-head-transparent"),document.querySelector(".js-menu-open").addEventListener("click",function(e){e.preventDefault(),document.querySelector(".js-search").classList.add("hidden"),document.body.classList.add("has-menu")}),document.querySelector(".js-menu-close").addEventListener("click",function(e){e.preventDefault(),document.body.classList.remove("has-menu")}),"undefined"!=typeof searchSettings&&"undefined"!=typeof siteSearch&&(0,l.default)(siteSearch),(0,u.default)(".js-hide-header")})},{"./app/dark-mode":10,"./app/header-transparency":12,"./app/social-media":13,"./components/load-script":14,"./components/scroll-hide-header":15,"@babel/runtime/helpers/interopRequireDefault":3,"@babel/runtime/helpers/typeof":7,lazysizes:9}]},{},[16]);