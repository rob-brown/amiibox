let e=!1,t=0,n=!1;const l="undefined"!=typeof window?window:{},s=l.CSS,o=l.document||{head:{}},r={t:0,l:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,l)=>e.addEventListener(t,n,l),rel:(e,t,n,l)=>e.removeEventListener(t,n,l)},c=e=>Promise.resolve(e),a=(()=>{try{return new CSSStyleSheet,!0}catch(e){}return!1})(),i=new WeakMap,u=e=>"sc-"+e,f={},p=e=>"object"==(e=typeof e)||"function"===e,d=(e,t,...n)=>{let l=null,s=!1,o=!1,r=[];const c=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?c(l):null!=l&&"boolean"!=typeof l&&((s="function"!=typeof e&&!p(l))&&(l+=""),s&&o?r[r.length-1].s+=l:r.push(s?m(null,l):l),o=s)};if(c(n),t){const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter(t=>e[t]).join(" "))}const a=m(e,null);return a.o=t,r.length>0&&(a.u=r),a},m=(e,t)=>({t:0,p:e,s:t,$:null,u:null,o:null}),w={},$=(e,t,n,s,o,c)=>{if(n!==s){let i=N(e,t),u=t.toLowerCase();if("class"===t){const t=e.classList,l=y(n),o=y(s);t.remove(...l.filter(e=>e&&!o.includes(e))),t.add(...o.filter(e=>e&&!l.includes(e)))}else if("style"===t){for(const t in n)s&&null!=s[t]||(t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(const t in s)n&&s[t]===n[t]||(t.includes("-")?e.style.setProperty(t,s[t]):e.style[t]=s[t])}else if(i||"o"!==t[0]||"n"!==t[1]){const l=p(s);if((i||l&&null!==s)&&!o)try{if(e.tagName.includes("-"))e[t]=s;else{let l=null==s?"":s;"list"===t?i=!1:null!=n&&e[t]==l||(e[t]=l)}}catch(a){}null==s||!1===s?e.removeAttribute(t):(!i||4&c||o)&&!l&&e.setAttribute(t,s=!0===s?"":s)}else t="-"===t[2]?t.slice(3):N(l,u)?u.slice(2):u[2]+t.slice(3),n&&r.rel(e,t,n,!1),s&&r.ael(e,t,s,!1)}},h=/\s/,y=e=>e?e.split(h):[],b=(e,t,n,l)=>{const s=11===t.$.nodeType&&t.$.host?t.$.host:t.$,o=e&&e.o||f,r=t.o||f;for(l in o)l in r||$(s,l,o[l],void 0,n,t.t);for(l in r)$(s,l,o[l],r[l],n,t.t)},g=(t,n,l)=>{let s,r,c=n.u[l],a=0;if(null!==c.s)s=c.$=o.createTextNode(c.s);else{if(e||(e="svg"===c.p),s=c.$=o.createElementNS(e?"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",c.p),e&&"foreignObject"===c.p&&(e=!1),b(null,c,e),c.u)for(a=0;a<c.u.length;++a)r=g(t,c,a),r&&s.appendChild(r);"svg"===c.p?e=!1:"foreignObject"===s.tagName&&(e=!0)}return s},j=(e,t,n,l,s,o)=>{let r,c=e;for(;s<=o;++s)l[s]&&(r=g(null,n,s),r&&(l[s].$=r,c.insertBefore(r,t)))},_=(e,t,n,l)=>{for(;t<=n;++t)(l=e[t])&&l.$.remove()},v=(e,t)=>e.p===t.p,M=(t,n)=>{const l=n.$=t.$,s=t.u,o=n.u,r=n.p,c=n.s;null===c?(e="svg"===r||"foreignObject"!==r&&e,b(t,n,e),null!==s&&null!==o?((e,t,n,l)=>{let s,o=0,r=0,c=t.length-1,a=t[0],i=t[c],u=l.length-1,f=l[0],p=l[u];for(;o<=c&&r<=u;)null==a?a=t[++o]:null==i?i=t[--c]:null==f?f=l[++r]:null==p?p=l[--u]:v(a,f)?(M(a,f),a=t[++o],f=l[++r]):v(i,p)?(M(i,p),i=t[--c],p=l[--u]):v(a,p)?(M(a,p),e.insertBefore(a.$,i.$.nextSibling),a=t[++o],p=l[--u]):v(i,f)?(M(i,f),e.insertBefore(i.$,a.$),i=t[--c],f=l[++r]):(s=g(t&&t[r],n,r),f=l[++r],s&&a.$.parentNode.insertBefore(s,a.$));o>c?j(e,null==l[u+1]?null:l[u+1].$,n,l,r,u):r>u&&_(t,o,c)})(l,s,n,o):null!==o?(null!==t.s&&(l.textContent=""),j(l,null,n,o,0,o.length-1)):null!==s&&_(s,0,s.length-1),e&&"svg"===r&&(e=!1)):t.s!==c&&(l.data=c)},O=(e,t,n)=>{const l=(e=>B(e).h)(e);return{emit:e=>S(l,t,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:e})}},S=(e,t,n)=>{const l=new CustomEvent(t,n);return e.dispatchEvent(l),l},L=(e,t)=>{t&&!e.g&&t["s-p"].push(new Promise(t=>e.g=t))},U=(e,t)=>{if(e.t|=16,4&e.t)return void(e.t|=512);const n=e.j,l=()=>k(e,n,t);let s;return L(e,e._),t&&(s=A(n,"componentWillLoad")),E(s,()=>te(l))},k=(e,t,n)=>{const l=e.h,s=l["s-rc"];n&&(e=>{const t=e.v;((e,t)=>{let n=u(t.M),l=I.get(n);if(e=11===e.nodeType?e:o,l)if("string"==typeof l){let t,s=i.get(e=e.head||e);s||i.set(e,s=new Set),s.has(n)||(t=o.createElement("style"),t.innerHTML=l,e.insertBefore(t,e.querySelector("link")),s&&s.add(n))}else e.adoptedStyleSheets.includes(l)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,l])})(e.h.getRootNode(),t)})(e),((e,t)=>{const n=e.h,l=e.O||m(null,null),s=(e=>e&&e.p===w)(t)?t:d(null,null,t);s.p=null,s.t|=4,e.O=s,s.$=l.$=n,M(l,s)})(e,P(t)),e.t&=-17,e.t|=2,s&&(s.map(e=>e()),l["s-rc"]=void 0);{const t=l["s-p"],n=()=>R(e);0===t.length?n():(Promise.all(t).then(n),e.t|=4,t.length=0)}},P=e=>{try{e=e.render()}catch(t){V(t)}return e},R=e=>{const t=e.h,n=e.j,l=e._;64&e.t||(e.t|=64,F(t),A(n,"componentDidLoad"),e.S(t),l||x()),e.L(t),e.g&&(e.g(),e.g=void 0),512&e.t&&ee(()=>U(e,!1)),e.t&=-517},C=e=>{{const t=B(e),n=t.h.isConnected;return n&&2==(18&t.t)&&U(t,!1),n}},x=()=>{F(o.documentElement),r.t|=2,ee(()=>S(l,"appload",{detail:{namespace:"fudgeapps"}}))},A=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(l){V(l)}},E=(e,t)=>e&&e.then?e.then(t):t(),F=e=>e.classList.add("hydrated"),T=(e,t,n)=>{if(t.U){const l=Object.entries(t.U),s=e.prototype;if(l.map(([e,[l]])=>{31&l||2&n&&32&l?Object.defineProperty(s,e,{get(){return((e,t)=>B(this).k.get(t))(0,e)},set(n){((e,t,n,l)=>{const s=B(this),o=s.k.get(t),r=s.t,c=s.j;n=((e,t)=>null==e||p(e)?e:4&t?"false"!==e&&(""===e||!!e):2&t?parseFloat(e):1&t?e+"":e)(n,l.U[t][0]),8&r&&void 0!==o||n===o||(s.k.set(t,n),c&&2==(18&r)&&U(s,!1))})(0,e,n,t)},configurable:!0,enumerable:!0}):1&n&&64&l&&Object.defineProperty(s,e,{value(...t){const n=B(this);return n.P.then(()=>n.j[e](...t))}})}),1&n){const t=new Map;s.attributeChangedCallback=function(e,n,l){r.jmp(()=>{const n=t.get(e);this[n]=(null!==l||"boolean"!=typeof this[n])&&l})},e.observedAttributes=l.filter(([e,t])=>15&t[0]).map(([e,n])=>{const l=n[1]||e;return t.set(l,e),l})}}return e},W=(e,t={})=>{const n=[],s=t.exclude||[],c=l.customElements,i=o.head,f=i.querySelector("meta[charset]"),p=o.createElement("style"),d=[];let m,w=!0;Object.assign(r,t),r.l=new URL(t.resourcesUrl||"./",o.baseURI).href,t.syncQueue&&(r.t|=4),e.map(e=>e[1].map(t=>{const l={t:t[0],M:t[1],U:t[2],R:t[3]};l.U=t[2];const o=l.M,i=class extends HTMLElement{constructor(e){super(e),H(e=this,l)}connectedCallback(){m&&(clearTimeout(m),m=null),w?d.push(this):r.jmp(()=>(e=>{if(0==(1&r.t)){const t=B(e),n=t.v,l=()=>{};if(!(1&t.t)){t.t|=1;{let n=e;for(;n=n.parentNode||n.host;)if(n["s-p"]){L(t,t._=n);break}}n.U&&Object.entries(n.U).map(([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}}),(async(e,t,n,l,s)=>{if(0==(32&t.t)){t.t|=32;{if((s=G(n)).then){const e=()=>{};s=await s,e()}s.isProxied||(T(s,n,2),s.isProxied=!0);const e=()=>{};t.t|=8;try{new s(t)}catch(c){V(c)}t.t&=-9,e()}const e=u(n.M);if(!I.has(e)&&s.style){const t=()=>{};((e,t,n)=>{let l=I.get(e);a&&n?(l=l||new CSSStyleSheet,l.replace(t)):l=t,I.set(e,l)})(e,s.style,!!(1&n.t)),t()}}const o=t._,r=()=>U(t,!0);o&&o["s-rc"]?o["s-rc"].push(r):r()})(0,t,n)}l()}})(this))}disconnectedCallback(){r.jmp(()=>{})}forceUpdate(){C(this)}componentOnReady(){return B(this).C}};l.A=e[0],s.includes(o)||c.get(o)||(n.push(o),c.define(o,T(i,l,1)))})),p.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",p.setAttribute("data-styles",""),i.insertBefore(p,f?f.nextSibling:i.firstChild),w=!1,d.length?d.map(e=>e.connectedCallback()):r.jmp(()=>m=setTimeout(x,30))},q=new WeakMap,B=e=>q.get(e),D=(e,t)=>q.set(t.j=e,t),H=(e,t)=>{const n={t:0,h:e,v:t,k:new Map};return n.P=new Promise(e=>n.L=e),n.C=new Promise(e=>n.S=e),e["s-p"]=[],e["s-rc"]=[],q.set(e,n)},N=(e,t)=>t in e,V=e=>console.error(e),z=new Map,G=e=>{const t=e.M.replace(/-/g,"_"),n=e.A,l=z.get(n);return l?l[t]:__sc_import_fudgeapps(`./${n}.entry.js`).then(e=>(z.set(n,e),e[t]),V)},I=new Map,J=[],K=[],Q=[],X=(e,t)=>l=>{e.push(l),n||(n=!0,t&&4&r.t?ee(Z):r.raf(Z))},Y=(e,t)=>{let n=0,l=0;for(;n<e.length&&(l=performance.now())<t;)try{e[n++](l)}catch(s){V(s)}n===e.length?e.length=0:0!==n&&e.splice(0,n)},Z=()=>{t++,(e=>{for(let n=0;n<e.length;n++)try{e[n](performance.now())}catch(t){V(t)}e.length=0})(J);{const e=2==(6&r.t)?performance.now()+14*Math.ceil(.1*t):1/0;Y(K,e),Y(Q,e),K.length>0&&(Q.push(...K),K.length=0),(n=J.length+K.length+Q.length>0)?r.raf(Z):t=0}},ee=e=>c().then(e),te=X(K,!0),ne=()=>s&&s.supports&&s.supports("color","var(--c)")?c():__sc_import_fudgeapps("./p-08cee778.js").then(()=>(r.F=l.__cssshim)?(!1).i():0),le=()=>{r.F=l.__cssshim;const e=Array.from(o.querySelectorAll("script")).find(e=>/\/fudgeapps(\.esm)?\.js($|\?|#)/.test(e.src)||"fudgeapps"===e.getAttribute("data-stencil-namespace")),t=e["data-opts"]||{};return"onbeforeload"in e&&!history.scrollRestoration?{then(){}}:(t.resourcesUrl=new URL(".",new URL(e.getAttribute("data-resources-url")||e.src,l.location.href)).href,se(t.resourcesUrl,e),l.customElements?c(t):__sc_import_fudgeapps("./p-3743bade.js").then(()=>t))},se=(e,t)=>{try{l.__sc_import_fudgeapps=Function("w",`return import(w);//${Math.random()}`)}catch(n){const s=new Map;l.__sc_import_fudgeapps=n=>{const r=new URL(n,e).href;let c=s.get(r);if(!c){const e=o.createElement("script");e.type="module",e.crossOrigin=t.crossOrigin,e.src=URL.createObjectURL(new Blob([`import * as m from '${r}'; window.__sc_import_fudgeapps.m = m;`],{type:"application/javascript"})),c=new Promise(t=>{e.onload=()=>{t(l.__sc_import_fudgeapps.m),e.remove()}}),s.set(r,c),o.head.appendChild(e)}return c}}};export{ne as a,W as b,O as c,C as f,d as h,le as p,D as r}