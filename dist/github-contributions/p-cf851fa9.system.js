var __extends=this&&this.__extends||function(){var e=function(r,n){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var n in r)if(r.hasOwnProperty(n))e[n]=r[n]};return e(r,n)};return function(r,n){e(r,n);function t(){this.constructor=r}r.prototype=n===null?Object.create(n):(t.prototype=n.prototype,new t)}}();var __awaiter=this&&this.__awaiter||function(e,r,n,t){function a(e){return e instanceof n?e:new n((function(r){r(e)}))}return new(n||(n=Promise))((function(n,i){function s(e){try{l(t.next(e))}catch(r){i(r)}}function o(e){try{l(t["throw"](e))}catch(r){i(r)}}function l(e){e.done?n(e.value):a(e.value).then(s,o)}l((t=t.apply(e,r||[])).next())}))};var __generator=this&&this.__generator||function(e,r){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},t,a,i,s;return s={next:o(0),throw:o(1),return:o(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function o(e){return function(r){return l([e,r])}}function l(s){if(t)throw new TypeError("Generator is already executing.");while(n)try{if(t=1,a&&(i=s[0]&2?a["return"]:s[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,s[1])).done)return i;if(a=0,i)s=[s[0]&2,i.value];switch(s[0]){case 0:case 1:i=s;break;case 4:n.label++;return{value:s[1],done:false};case 5:n.label++;a=s[1];s=[0];continue;case 7:s=n.ops.pop();n.trys.pop();continue;default:if(!(i=n.trys,i=i.length>0&&i[i.length-1])&&(s[0]===6||s[0]===2)){n=0;continue}if(s[0]===3&&(!i||s[1]>i[0]&&s[1]<i[3])){n.label=s[1];break}if(s[0]===6&&n.label<i[1]){n.label=i[1];i=s;break}if(i&&n.label<i[2]){n.label=i[2];n.ops.push(s);break}if(i[2])n.ops.pop();n.trys.pop();continue}s=r.call(e,n)}catch(o){s=[6,o];a=0}finally{t=i=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,r=0,n=arguments.length;r<n;r++)e+=arguments[r].length;for(var t=Array(e),a=0,r=0;r<n;r++)for(var i=arguments[r],s=0,o=i.length;s<o;s++,a++)t[a]=i[s];return t};System.register([],(function(e,r){"use strict";return{execute:function(){var n=this;var t="github-contributions";var a=0;var i=false;var s=false;var o=typeof window!=="undefined"?window:{};var l=o.document||{head:{}};var f={$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,r,n,t){return e.addEventListener(r,n,t)},rel:function(e,r,n,t){return e.removeEventListener(r,n,t)}};var u=function(){try{new CSSStyleSheet;return true}catch(e){}return false}();var c=new WeakMap;var $=function(e){return c.get(e)};var v=e("r",(function(e,r){return c.set(r.$lazyInstance$=e,r)}));var h=function(e){var r={$flags$:0,$hostElement$:e,$instanceValues$:new Map};{r.$onReadyPromise$=new Promise((function(e){return r.$onReadyResolve$=e}));e["s-p"]=[];e["s-rc"]=[]}return c.set(e,r)};var m=function(e,r){return r in e};var d=function(e){return console.error(e)};var p=new Map;var g=function(e,n,t){var a=e.$tagName$.replace(/-/g,"_");var i=e.$lazyBundleIds$;var s=p.get(i);if(s){return s[a]}return r.import("./"+i+".entry.js"+"").then((function(e){{p.set(i,e)}return e[a]}),d)};var y=new Map;var b=[];var w=[];var S=[];var _=function(e,r){return function(n){e.push(n);if(!i){i=true;if(r&&f.$flags$&4){C(E)}else{f.raf(E)}}}};var R=function(e){for(var r=0;r<e.length;r++){try{e[r](performance.now())}catch(n){d(n)}}e.length=0};var j=function(e,r){var n=0;var t=0;while(n<e.length&&(t=performance.now())<r){try{e[n++](t)}catch(a){d(a)}}if(n===e.length){e.length=0}else if(n!==0){e.splice(0,n)}};var E=function(){a++;R(b);var e=(f.$flags$&6)===2?performance.now()+10*Math.ceil(a*(1/22)):Infinity;j(w,e);j(S,e);if(w.length>0){S.push.apply(S,w);w.length=0}if(i=b.length+w.length+S.length>0){f.raf(E)}else{a=0}};var C=function(e){return Promise.resolve().then(e)};var N=_(w,true);var x={};var L=function(e){e=typeof e;return e==="object"||e==="function"};var U=function(e){return"__sc_import_"+e.replace(/\s|-/g,"_")};var A=e("a",(function(){if(!(o.CSS&&o.CSS.supports&&o.CSS.supports("color","var(--c)"))){return r.import("./p-447ccb56.system.js").then((function(){f.$cssShim$=o.__stencil_cssshim;if(f.$cssShim$){return f.$cssShim$.initShim()}}))}return Promise.resolve()}));var P=e("p",(function(){{f.$cssShim$=o.__stencil_cssshim}var e=Array.from(l.querySelectorAll("script")).find((function(e){return new RegExp("/"+t+"(\\.esm)?\\.js($|\\?|#)").test(e.src)||e.getAttribute("data-stencil-namespace")===t}));var n=e["data-opts"]||{};var a=r.meta.url;if("onbeforeload"in e&&!history.scrollRestoration&&false){return{then:function(){}}}if(a!==""){n.resourcesUrl=new URL(".",a).href}else{n.resourcesUrl=new URL(".",new URL(e.getAttribute("data-resources-url")||e.src,o.location.href)).href;k(n.resourcesUrl,e);if(!window.customElements){return r.import("./p-7f10eb01.system.js").then((function(){return n}))}}return Promise.resolve(n)}));var k=function(e,r){var n=U(t);try{o[n]=new Function("w","return import(w);//"+Math.random())}catch(i){var a=new Map;o[n]=function(t){var i=new URL(t,e).href;var s=a.get(i);if(!s){var f=l.createElement("script");f.type="module";f.crossOrigin=r.crossOrigin;f.src=URL.createObjectURL(new Blob(["import * as m from '"+i+"'; window."+n+".m = m;"],{type:"application/javascript"}));s=new Promise((function(e){f.onload=function(){e(o[n].m);f.remove()}}));a.set(i,s);l.head.appendChild(f)}return s}}};var O=function(e,r){if(e!=null&&!L(e)){if(r&1){return String(e)}return e}return e};var M="hydrated";var B=function(e,r){if(r===void 0){r=""}{return function(){return}}};var I=function(e,r){{return function(){return}}};var T=new WeakMap;var z=function(e,r,n){var t=y.get(e);if(u&&n){t=t||new CSSStyleSheet;t.replace(r)}else{t=r}y.set(e,t)};var H=function(e,r,n,t){var a=V(r.$tagName$);var i=y.get(a);e=e.nodeType===11?e:l;if(i){if(typeof i==="string"){e=e.head||e;var s=T.get(e);var o=void 0;if(!s){T.set(e,s=new Set)}if(!s.has(a)){{if(f.$cssShim$){o=f.$cssShim$.createHostStyle(t,a,i,!!(r.$flags$&10));var u=o["s-sc"];if(u){a=u;s=null}}else{o=l.createElement("style");o.innerHTML=i}e.insertBefore(o,e.querySelector("link"))}if(s){s.add(a)}}}else if(!e.adoptedStyleSheets.includes(i)){e.adoptedStyleSheets=__spreadArrays(e.adoptedStyleSheets,[i])}}return a};var q=function(e,r,n){var t=B("attachStyles",r.$tagName$);var a=H(e.getRootNode(),r,n,e);t()};var V=function(e,r){return"sc-"+e};var F=e("h",(function(e,r){var n=[];for(var t=2;t<arguments.length;t++){n[t-2]=arguments[t]}var a=null;var i=false;var s=false;var o=[];var l=function(r){for(var n=0;n<r.length;n++){a=r[n];if(Array.isArray(a)){l(a)}else if(a!=null&&typeof a!=="boolean"){if(i=typeof e!=="function"&&!L(a)){a=String(a)}if(i&&s){o[o.length-1].$text$+=a}else{o.push(i?W(null,a):a)}s=i}}};l(n);if(r){{var f=r.className||r.class;if(f){r.class=typeof f!=="object"?f:Object.keys(f).filter((function(e){return f[e]})).join(" ")}}}var u=W(e,null);u.$attrs$=r;if(o.length>0){u.$children$=o}return u}));var W=function(e,r){var n={$flags$:0,$tag$:e,$text$:r,$elm$:null,$children$:null};{n.$attrs$=null}return n};var D={};var G=function(e){return e&&e.$tag$===D};var Q=function(e,r,n,t,a,i){if(n===t){return}var s=m(e,r);var o=r.toLowerCase();if(r==="class"){var l=e.classList;var f=K(n);var u=K(t);l.remove.apply(l,f.filter((function(e){return e&&!u.includes(e)})));l.add.apply(l,u.filter((function(e){return e&&!f.includes(e)})))}else{var c=L(t);if((s||c&&t!==null)&&!a){try{if(!e.tagName.includes("-")){var $=t==null?"":t;if(r==="list"){s=false}else if(n==null||e[r]!=$){e[r]=$}}else{e[r]=t}}catch(v){}}if(t==null||t===false){{e.removeAttribute(r)}}else if((!s||i&4||a)&&!c){t=t===true?"":t;{e.setAttribute(r,t)}}}};var J=/\s/;var K=function(e){return!e?[]:e.split(J)};var X=function(e,r,n,t){var a=r.$elm$.nodeType===11&&r.$elm$.host?r.$elm$.host:r.$elm$;var i=e&&e.$attrs$||x;var s=r.$attrs$||x;{for(t in i){if(!(t in s)){Q(a,t,i[t],undefined,n,r.$flags$)}}}for(t in s){Q(a,t,i[t],s[t],n,r.$flags$)}};var Y=function(e,r,n,t){var a=r.$children$[n];var i=0;var o;var f;{o=a.$elm$=l.createElement(a.$tag$);{X(null,a,s)}if(a.$children$){for(i=0;i<a.$children$.length;++i){f=Y(e,a,i);if(f){o.appendChild(f)}}}}return o};var Z=function(e,r,n,t,a,i){var s=e;var o;for(;a<=i;++a){if(t[a]){o=Y(null,n,a);if(o){t[a].$elm$=o;s.insertBefore(o,r)}}}};var ee=function(e,r,n,t,a){for(;r<=n;++r){if(t=e[r]){a=t.$elm$;a.remove()}}};var re=function(e,r,n,t){var a=0;var i=0;var s=r.length-1;var o=r[0];var l=r[s];var f=t.length-1;var u=t[0];var c=t[f];var $;while(a<=s&&i<=f){if(o==null){o=r[++a]}else if(l==null){l=r[--s]}else if(u==null){u=t[++i]}else if(c==null){c=t[--f]}else if(ne(o,u)){te(o,u);o=r[++a];u=t[++i]}else if(ne(l,c)){te(l,c);l=r[--s];c=t[--f]}else if(ne(o,c)){te(o,c);e.insertBefore(o.$elm$,l.$elm$.nextSibling);o=r[++a];c=t[--f]}else if(ne(l,u)){te(l,u);e.insertBefore(l.$elm$,o.$elm$);l=r[--s];u=t[++i]}else{{$=Y(r&&r[i],n,i);u=t[++i]}if($){{o.$elm$.parentNode.insertBefore($,o.$elm$)}}}}if(a>s){Z(e,t[f+1]==null?null:t[f+1].$elm$,n,t,i,f)}else if(i>f){ee(r,a,s)}};var ne=function(e,r){if(e.$tag$===r.$tag$){return true}return false};var te=function(e,r){var n=r.$elm$=e.$elm$;var t=e.$children$;var a=r.$children$;{{{X(e,r,s)}}if(t!==null&&a!==null){re(n,t,r,a)}else if(a!==null){Z(n,null,r,a,0,a.length-1)}else if(t!==null){ee(t,0,t.length-1)}}};var ae=function(e,r,n,t){var a=r.$vnode$||W(null,null);var i=G(t)?t:F(null,null,t);i.$tag$=null;i.$flags$|=4;r.$vnode$=i;i.$elm$=a.$elm$=e;te(a,i)};var ie=function(e,r){if(r&&!e.$onRenderResolve$){r["s-p"].push(new Promise((function(r){return e.$onRenderResolve$=r})))}};var se=function(e,r,n,t){{r.$flags$|=16}if(r.$flags$&4){r.$flags$|=512;return}var a=B("scheduleUpdate",n.$tagName$);var i=r.$ancestorComponent$;var s=r.$lazyInstance$;var o=function(){return oe(e,r,n,s,t)};ie(r,i);var l;a();return ve(l,(function(){return N(o)}))};var oe=function(e,r,n,t,a){var i=B("update",n.$tagName$);var s=e["s-rc"];if(a){q(e,n,r.$modeName$)}var o=B("render",n.$tagName$);{{ae(e,r,n,le(t))}}if(f.$cssShim$){f.$cssShim$.updateHost(e)}{r.$flags$&=~16}{r.$flags$|=2}if(s){s.forEach((function(e){return e()}));e["s-rc"]=undefined}o();i();{var l=e["s-p"];var u=function(){return fe(e,r,n)};if(l.length===0){u()}else{Promise.all(l).then(u);r.$flags$|=4;l.length=0}}};var le=function(e,r){try{e=e.render()}catch(n){d(n)}return e};var fe=function(e,r,n){var t=B("postUpdate",n.$tagName$);var a=r.$lazyInstance$;var i=r.$ancestorComponent$;if(!(r.$flags$&64)){r.$flags$|=64;{e.classList.add(M)}{$e(a,"componentDidLoad")}t();{r.$onReadyResolve$(e);if(!i){ce()}}}else{t()}{if(r.$onRenderResolve$){r.$onRenderResolve$();r.$onRenderResolve$=undefined}if(r.$flags$&512){C((function(){return se(e,r,n,false)}))}r.$flags$&=~(4|512)}};var ue=function(e,r){{var n=$(e);var t=n.$hostElement$.isConnected;if(t&&(n.$flags$&(2|16))===2){se(e,n,r,false)}return t}};var ce=function(e){{l.documentElement.classList.add(M)}{f.$flags$|=2}};var $e=function(e,r,n){if(e&&e[r]){try{return e[r](n)}catch(t){d(t)}}return undefined};var ve=function(e,r){return e&&e.then?e.then(r):r()};var he=function(e,r){return $(e).$instanceValues$.get(r)};var me=function(e,r,n,t){var a=$(e);var i=a.$hostElement$;var s=a.$instanceValues$.get(r);var o=a.$flags$;var l=a.$lazyInstance$;n=O(n,t.$members$[r][0]);if(n!==s&&(!(o&8)||s===undefined)){a.$instanceValues$.set(r,n);if(l){if((o&(2|16))===2){se(i,a,t,false)}}}};var de=function(e,r,n){if(r.$members$){var t=Object.entries(r.$members$);var a=e.prototype;t.forEach((function(e){var t=e[0],i=e[1][0];if(i&31||n&2&&i&32){Object.defineProperty(a,t,{get:function(){return he(this,t)},set:function(e){me(this,t,e,r)},configurable:true,enumerable:true})}}));if(n&1){var i=new Map;a.attributeChangedCallback=function(e,r,n){var t=this;f.jmp((function(){var r=i.get(e);t[r]=n===null&&typeof t[r]==="boolean"?false:n}))};e.observedAttributes=t.filter((function(e){var r=e[0],n=e[1];return n[0]&15})).map((function(e){var r=e[0],n=e[1];var t=n[1]||r;i.set(t,r);return t}))}}return e};var pe=function(e,r,t,a,i){return __awaiter(n,void 0,void 0,(function(){var n,a,s,o,l,f,u;return __generator(this,(function(c){switch(c.label){case 0:if(!((r.$flags$&32)===0))return[3,3];r.$flags$|=32;i=g(t);if(!i.then)return[3,2];n=I();return[4,i];case 1:i=c.sent();n();c.label=2;case 2:if(!i.isProxied){de(i,t,2);i.isProxied=true}a=B("createInstance",t.$tagName$);{r.$flags$|=8}try{new i(r)}catch($){d($)}{r.$flags$&=~8}a();s=V(t.$tagName$);if(!y.has(s)&&i.style){o=B("registerStyles",t.$tagName$);l=i.style;z(s,l,!!(t.$flags$&1));o()}c.label=3;case 3:f=r.$ancestorComponent$;u=function(){return se(e,r,t,true)};if(f&&f["s-rc"]){f["s-rc"].push(u)}else{u()}return[2]}}))}))};var ge=function(e,r){if((f.$flags$&1)===0){var n=B("connectedCallback",r.$tagName$);var t=$(e);if(!(t.$flags$&1)){t.$flags$|=1;{var a=e;while(a=a.parentNode||a.host){if(a["s-p"]){ie(t,t.$ancestorComponent$=a);break}}}if(r.$members$){Object.entries(r.$members$).forEach((function(r){var n=r[0],t=r[1][0];if(t&31&&e.hasOwnProperty(n)){var a=e[n];delete e[n];e[n]=a}}))}{C((function(){return pe(e,t,r)}))}}n()}};var ye=function(e){if((f.$flags$&1)===0){var r=$(e);if(f.$cssShim$){f.$cssShim$.removeHost(e)}}};var be=e("b",(function(e,r){if(r===void 0){r={}}var n=B();var t=[];var a=r.exclude||[];var i=l.head;var s=o.customElements;var u=i.querySelector("meta[charset]");var c=l.createElement("style");var v=[];var m;var d=true;Object.assign(f,r);f.$resourcesUrl$=new URL(r.resourcesUrl||"./",l.baseURI).href;if(r.syncQueue){f.$flags$|=4}e.forEach((function(e){return e[1].forEach((function(r){var n={$flags$:r[0],$tagName$:r[1],$members$:r[2],$listeners$:r[3]};{n.$members$=r[2]}var i=n.$tagName$;var o=function(e){__extends(r,e);function r(r){var n=e.call(this,r)||this;r=n;h(r);return n}r.prototype.connectedCallback=function(){var e=this;if(m){clearTimeout(m);m=null}if(d){v.push(this)}else{f.jmp((function(){return ge(e,n)}))}};r.prototype.disconnectedCallback=function(){var e=this;f.jmp((function(){return ye(e)}))};r.prototype.forceUpdate=function(){ue(this,n)};r.prototype.componentOnReady=function(){return $(this).$onReadyPromise$};return r}(HTMLElement);n.$lazyBundleIds$=e[0];if(!a.includes(i)&&!s.get(i)){t.push(i);s.define(i,de(o,n,1))}}))}));c.innerHTML=t+"{visibility:hidden}.hydrated{visibility:inherit}";c.setAttribute("data-styles","");i.insertBefore(c,u?u.nextSibling:i.firstChild);d=false;if(v.length>0){v.forEach((function(e){return e.connectedCallback()}))}else{f.jmp((function(){return m=setTimeout(ce,30,"timeout")}))}n()}))}}}));