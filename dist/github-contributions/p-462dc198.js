const t="github-contributions";let e=0,n=!1;const o="undefined"!=typeof window?window:{},l=o.document||{head:{}},s={t:0,o:"",jmp:t=>t(),raf:t=>requestAnimationFrame(t),ael:(t,e,n,o)=>t.addEventListener(e,n,o),rel:(t,e,n,o)=>t.removeEventListener(e,n,o)},r=(()=>{try{return new CSSStyleSheet,!0}catch(t){}return!1})(),i=new WeakMap,c=t=>i.get(t),a=(t,e)=>i.set(e.l=t,e),u=t=>console.error(t),f=new Map,p=new Map,m=[],d=[],$=[],h=(t,e)=>o=>{t.push(o),n||(n=!0,e&&4&s.t?b(y):s.raf(y))},w=(t,e)=>{let n=0,o=0;for(;n<t.length&&(o=performance.now())<e;)try{t[n++](o)}catch(l){u(l)}n===t.length?t.length=0:0!==n&&t.splice(0,n)},y=()=>{e++,(t=>{for(let n=0;n<t.length;n++)try{t[n](performance.now())}catch(e){u(e)}t.length=0})(m);const t=2==(6&s.t)?performance.now()+10*Math.ceil(e*(1/22)):1/0;w(d,t),w($,t),d.length>0&&($.push(...d),d.length=0),(n=m.length+d.length+$.length>0)?s.raf(y):e=0},b=t=>Promise.resolve().then(t),_=h(d,!0),g={},j=t=>"object"==(t=typeof t)||"function"===t,v=()=>o.CSS&&o.CSS.supports&&o.CSS.supports("color","var(--c)")?Promise.resolve():__sc_import_github_contributions("./p-73bc5e11.js").then(()=>{s.s=o.__stencil_cssshim}),S=()=>{s.s=o.__stencil_cssshim;const e=Array.from(l.querySelectorAll("script")).find(e=>new RegExp(`/${t}(\\.esm)?\\.js($|\\?|#)`).test(e.src)||e.getAttribute("data-stencil-namespace")===t),n=e["data-opts"]||{};return"onbeforeload"in e&&!history.scrollRestoration?{then(){}}:(n.resourcesUrl=new URL(".",new URL(e.getAttribute("data-resources-url")||e.src,o.location.href)).href,M(n.resourcesUrl,e),window.customElements?Promise.resolve(n):__sc_import_github_contributions("./p-3b66a627.js").then(()=>n))},M=(e,n)=>{const s=(t=>`__sc_import_${t.replace(/\s|-/g,"_")}`)(t);try{o[s]=new Function("w",`return import(w);//${Math.random()}`)}catch(r){const t=new Map;o[s]=r=>{const i=new URL(r,e).href;let c=t.get(i);if(!c){const e=l.createElement("script");e.type="module",e.crossOrigin=n.crossOrigin,e.src=URL.createObjectURL(new Blob([`import * as m from '${i}'; window.${s}.m = m;`],{type:"application/javascript"})),c=new Promise(t=>{e.onload=()=>{t(o[s].m),e.remove()}}),t.set(i,c),l.head.appendChild(e)}return c}}},L=new WeakMap,P=t=>"sc-"+t,R=(t,e,...n)=>{let o=null,l=!1,s=!1,r=[];const i=e=>{for(let n=0;n<e.length;n++)o=e[n],Array.isArray(o)?i(o):null!=o&&"boolean"!=typeof o&&((l="function"!=typeof t&&!j(o))&&(o=String(o)),l&&s?r[r.length-1].i+=o:r.push(l?U(null,o):o),s=l)};if(i(n),e){const t=e.className||e.class;t&&(e.class="object"!=typeof t?t:Object.keys(t).filter(e=>t[e]).join(" "))}const c=U(t,null);return c.u=e,r.length>0&&(c.p=r),c},U=(t,e)=>({t:0,$:t,i:e,h:null,p:null,u:null}),k={},O=(t,e,n,o,l,s)=>{if(n===o)return;let r=((t,e)=>e in t)(t,e);if(e.toLowerCase(),"class"===e){const e=t.classList,l=C(n),s=C(o);e.remove(...l.filter(t=>t&&!s.includes(t))),e.add(...s.filter(t=>t&&!l.includes(t)))}else{const c=j(o);if((r||c&&null!==o)&&!l)try{if(t.tagName.includes("-"))t[e]=o;else{let l=null==o?"":o;"list"===e?r=!1:null!=n&&t[e]==l||(t[e]=l)}}catch(i){}null==o||!1===o?t.removeAttribute(e):(!r||4&s||l)&&!c&&t.setAttribute(e,o=!0===o?"":o)}},x=/\s/,C=t=>t?t.split(x):[],A=(t,e,n,o)=>{const l=11===e.h.nodeType&&e.h.host?e.h.host:e.h,s=t&&t.u||g,r=e.u||g;for(o in s)o in r||O(l,o,s[o],void 0,n,e.t);for(o in r)O(l,o,s[o],r[o],n,e.t)},E=(t,e,n)=>{let o,s,r=e.p[n],i=0;if(o=r.h=l.createElement(r.$),A(null,r,!1),r.p)for(i=0;i<r.p.length;++i)(s=E(t,r,i))&&o.appendChild(s);return o},T=(t,e,n,o,l,s)=>{let r,i=t;for(;l<=s;++l)o[l]&&(r=E(null,n,l))&&(o[l].h=r,i.insertBefore(r,e))},F=(t,e,n,o)=>{for(;e<=n;++e)(o=t[e])&&o.h.remove()},W=(t,e)=>t.$===e.$,q=(t,e)=>{const n=e.h=t.h,o=t.p,l=e.p;A(t,e,!1),null!==o&&null!==l?((t,e,n,o)=>{let l,s=0,r=0,i=e.length-1,c=e[0],a=e[i],u=o.length-1,f=o[0],p=o[u];for(;s<=i&&r<=u;)null==c?c=e[++s]:null==a?a=e[--i]:null==f?f=o[++r]:null==p?p=o[--u]:W(c,f)?(q(c,f),c=e[++s],f=o[++r]):W(a,p)?(q(a,p),a=e[--i],p=o[--u]):W(c,p)?(q(c,p),t.insertBefore(c.h,a.h.nextSibling),c=e[++s],p=o[--u]):W(a,f)?(q(a,f),t.insertBefore(a.h,c.h),a=e[--i],f=o[++r]):(l=E(e&&e[r],n,r),f=o[++r],l&&c.h.parentNode.insertBefore(l,c.h));s>i?T(t,null==o[u+1]?null:o[u+1].h,n,o,r,u):r>u&&F(e,s,i)})(n,o,e,l):null!==l?T(n,null,e,l,0,l.length-1):null!==o&&F(o,0,o.length-1)},B=(t,e)=>{e&&!t._&&e["s-p"].push(new Promise(e=>t._=e))},D=(t,e,n,o)=>{if(e.t|=16,4&e.t)return void(e.t|=512);const l=e.l,s=()=>H(t,e,n,l,o);return B(e,e.g),I(void 0,()=>_(s))},H=(t,e,n,o,s)=>{const r=t["s-rc"];s&&((t,e)=>{((t,e)=>{let n=P(e.j),o=p.get(n);if(t=11===t.nodeType?t:l,o)if("string"==typeof o){let e,s=L.get(t=t.head||t);s||L.set(t,s=new Set),s.has(n)||((e=l.createElement("style")).innerHTML=o,t.insertBefore(e,t.querySelector("link")),s&&s.add(n))}else t.adoptedStyleSheets.includes(o)||(t.adoptedStyleSheets=[...t.adoptedStyleSheets,o])})(t.getRootNode(),e)})(t,n),((t,e,n,o)=>{const l=e.v||U(null,null),s=(t=>t&&t.$===k)(o)?o:R(null,null,o);s.$=null,s.t|=4,e.v=s,s.h=l.h=t,q(l,s)})(t,e,0,N(o)),e.t&=-17,e.t|=2,r&&(r.forEach(t=>t()),t["s-rc"]=void 0);{const o=t["s-p"],l=()=>V(t,e,n);0===o.length?l():(Promise.all(o).then(l),e.t|=4,o.length=0)}},N=t=>{try{t=t.render()}catch(e){u(e)}return t},V=(t,e,n)=>{const o=e.l,l=e.g;64&e.t||(e.t|=64,t.classList.add("hydrated"),G(o,"componentDidLoad"),e.S(t),l||z()),e._&&(e._(),e._=void 0),512&e.t&&b(()=>D(t,e,n,!1)),e.t&=-517},z=()=>{l.documentElement.classList.add("hydrated"),s.t|=2},G=(t,e,n)=>{if(t&&t[e])try{return t[e](n)}catch(o){u(o)}},I=(t,e)=>t&&t.then?t.then(e):e(),J=(t,e,n)=>{if(e.M){const o=Object.entries(e.M),l=t.prototype;if(o.forEach(([t,[o]])=>{(31&o||2&n&&32&o)&&Object.defineProperty(l,t,{get(){return((t,e)=>c(t).L.get(e))(this,t)},set(n){((t,e,n,o)=>{const l=c(this),s=l.P,r=l.L.get(e),i=l.t,a=l.l;(n=((t,e)=>null==t||j(t)?t:1&e?String(t):t)(n,o.M[e][0]))===r||8&i&&void 0!==r||(l.L.set(e,n),a&&2==(18&i)&&D(s,l,o,!1))})(0,t,n,e)},configurable:!0,enumerable:!0})}),1&n){const e=new Map;l.attributeChangedCallback=function(t,n,o){s.jmp(()=>{const n=e.get(t);this[n]=(null!==o||"boolean"!=typeof this[n])&&o})},t.observedAttributes=o.filter(([t,e])=>15&e[0]).map(([t,n])=>{const o=n[1]||t;return e.set(o,t),o})}}return t},K=(t,e={})=>{const n=[],a=e.exclude||[],m=l.head,d=o.customElements,$=m.querySelector("meta[charset]"),h=l.createElement("style"),w=[];let y,_=!0;Object.assign(s,e),s.o=new URL(e.resourcesUrl||"./",l.baseURI).href,e.syncQueue&&(s.t|=4),t.forEach(t=>t[1].forEach(e=>{const o={t:e[0],j:e[1],M:e[2],R:e[3]};o.M=e[2];const l=o.j,m=class extends HTMLElement{constructor(t){super(t),(t=>{const e={t:0,P:t,L:new Map};e.U=new Promise(t=>e.S=t),t["s-p"]=[],t["s-rc"]=[],i.set(t,e)})(t=this)}connectedCallback(){y&&(clearTimeout(y),y=null),_?w.push(this):s.jmp(()=>((t,e)=>{if(0==(1&s.t)){const n=()=>{},o=c(t);if(!(1&o.t)){o.t|=1;{let e=t;for(;e=e.parentNode||e.host;)if(e["s-p"]){B(o,o.g=e);break}}e.M&&Object.entries(e.M).forEach(([e,[n]])=>{if(31&n&&t.hasOwnProperty(e)){const n=t[e];delete t[e],t[e]=n}}),b(()=>(async(t,e,n,o,l)=>{if(0==(32&e.t)){e.t|=32;{if((l=(t=>{const e=t.j.replace(/-/g,"_"),n=t.k,o=f.get(n);return o?o[e]:__sc_import_github_contributions(`./${n}.entry.js`).then(t=>(f.set(n,t),t[e]),u)})(n)).then){const t=()=>{};l=await l,t()}l.isProxied||(J(l,n,2),l.isProxied=!0);const t=()=>{};e.t|=8;try{new l(e)}catch(c){u(c)}e.t&=-9,t()}const t=P(n.j);if(!p.has(t)&&l.style){const e=()=>{};((t,e,n)=>{let o=p.get(t);r&&n?(o=o||new CSSStyleSheet).replace(e):o=e,p.set(t,o)})(t,l.style,!!(1&n.t)),e()}}const s=e.g,i=()=>D(t,e,n,!0);s&&s["s-rc"]?s["s-rc"].push(i):i()})(t,o,e))}n()}})(this,o))}disconnectedCallback(){s.jmp(()=>void 0)}forceUpdate(){((t,e)=>{{const n=c(t);n.P.isConnected&&2==(18&n.t)&&D(t,n,e,!1)}})(this,o)}componentOnReady(){return c(this).U}};o.k=t[0],a.includes(l)||d.get(l)||(n.push(l),d.define(l,J(m,o,1)))})),h.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",h.setAttribute("data-styles",""),m.insertBefore(h,$?$.nextSibling:m.firstChild),_=!1,w.length>0?w.forEach(t=>t.connectedCallback()):s.jmp(()=>y=setTimeout(z,30,"timeout"))};export{v as a,K as b,R as h,S as p,a as r};