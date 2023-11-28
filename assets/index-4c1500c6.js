import"./dark-theme-f0b52185.js";function ke(e,t){return function(){return e.apply(t,arguments)}}const{toString:Ge}=Object.prototype,{getPrototypeOf:oe}=Object,H=(e=>t=>{const n=Ge.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),O=e=>(e=e.toLowerCase(),t=>H(t)===e),$=e=>t=>typeof t===e,{isArray:C}=Array,P=$("undefined");function Xe(e){return e!==null&&!P(e)&&e.constructor!==null&&!P(e.constructor)&&S(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Ae=O("ArrayBuffer");function Qe(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Ae(e.buffer),t}const Ye=$("string"),S=$("function"),Te=$("number"),z=e=>e!==null&&typeof e=="object",Ze=e=>e===!0||e===!1,I=e=>{if(H(e)!=="object")return!1;const t=oe(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},et=O("Date"),tt=O("File"),nt=O("Blob"),rt=O("FileList"),ot=e=>z(e)&&S(e.pipe),st=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||S(e.append)&&((t=H(e))==="formdata"||t==="object"&&S(e.toString)&&e.toString()==="[object FormData]"))},it=O("URLSearchParams"),at=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function F(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,o;if(typeof e!="object"&&(e=[e]),C(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const s=n?Object.getOwnPropertyNames(e):Object.keys(e),i=s.length;let c;for(r=0;r<i;r++)c=s[r],t.call(null,e[c],c,e)}}function Be(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,o;for(;r-- >0;)if(o=n[r],t===o.toLowerCase())return o;return null}const Le=e=>!P(e)&&e!=={};function Y(){const{caseless:e}=Le(this)&&this||{},t={},n=(r,o)=>{const s=e&&Be(t,o)||o;I(t[s])&&I(r)?t[s]=Y(t[s],r):I(r)?t[s]=Y({},r):C(r)?t[s]=r.slice():t[s]=r};for(let r=0,o=arguments.length;r<o;r++)arguments[r]&&F(arguments[r],n);return t}const ct=(e,t,n,{allOwnKeys:r}={})=>(F(t,(o,s)=>{n&&S(o)?e[s]=ke(o,n):e[s]=o},{allOwnKeys:r}),e),lt=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),ut=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},dt=(e,t,n,r)=>{let o,s,i;const c={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),s=o.length;s-- >0;)i=o[s],(!r||r(i,e,t))&&!c[i]&&(t[i]=e[i],c[i]=!0);e=n!==!1&&oe(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},ft=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},pt=e=>{if(!e)return null;if(C(e))return e;let t=e.length;if(!Te(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},mt=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&oe(Uint8Array)),ht=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let o;for(;(o=r.next())&&!o.done;){const s=o.value;t.call(e,s[0],s[1])}},yt=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},bt=O("HTMLFormElement"),wt=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,o){return r.toUpperCase()+o}),de=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Et=O("RegExp"),xe=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};F(n,(o,s)=>{let i;(i=t(o,s,e))!==!1&&(r[s]=i||o)}),Object.defineProperties(e,r)},St=e=>{xe(e,(t,n)=>{if(S(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(S(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},gt=(e,t)=>{const n={},r=o=>{o.forEach(s=>{n[s]=!0})};return C(e)?r(e):r(String(e).split(t)),n},Rt=()=>{},Ot=(e,t)=>(e=+e,Number.isFinite(e)?e:t),W="abcdefghijklmnopqrstuvwxyz",fe="0123456789",Ce={DIGIT:fe,ALPHA:W,ALPHA_DIGIT:W+W.toUpperCase()+fe},kt=(e=16,t=Ce.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function At(e){return!!(e&&S(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Tt=e=>{const t=new Array(10),n=(r,o)=>{if(z(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[o]=r;const s=C(r)?[]:{};return F(r,(i,c)=>{const d=n(i,o+1);!P(d)&&(s[c]=d)}),t[o]=void 0,s}}return r};return n(e,0)},Bt=O("AsyncFunction"),Lt=e=>e&&(z(e)||S(e))&&S(e.then)&&S(e.catch),a={isArray:C,isArrayBuffer:Ae,isBuffer:Xe,isFormData:st,isArrayBufferView:Qe,isString:Ye,isNumber:Te,isBoolean:Ze,isObject:z,isPlainObject:I,isUndefined:P,isDate:et,isFile:tt,isBlob:nt,isRegExp:Et,isFunction:S,isStream:ot,isURLSearchParams:it,isTypedArray:mt,isFileList:rt,forEach:F,merge:Y,extend:ct,trim:at,stripBOM:lt,inherits:ut,toFlatObject:dt,kindOf:H,kindOfTest:O,endsWith:ft,toArray:pt,forEachEntry:ht,matchAll:yt,isHTMLForm:bt,hasOwnProperty:de,hasOwnProp:de,reduceDescriptors:xe,freezeMethods:St,toObjectSet:gt,toCamelCase:wt,noop:Rt,toFiniteNumber:Ot,findKey:Be,global:{},isContextDefined:Le,ALPHABET:Ce,generateString:kt,isSpecCompliantForm:At,toJSONObject:Tt,isAsyncFn:Bt,isThenable:Lt};function h(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}a.inherits(h,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Ne=h.prototype,Pe={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Pe[e]={value:e}});Object.defineProperties(h,Pe);Object.defineProperty(Ne,"isAxiosError",{value:!0});h.from=(e,t,n,r,o,s)=>{const i=Object.create(Ne);return a.toFlatObject(e,i,function(d){return d!==Error.prototype},c=>c!=="isAxiosError"),h.call(i,e.message,t,n,r,o),i.cause=e,i.name=e.name,s&&Object.assign(i,s),i};const xt=null;function Z(e){return a.isPlainObject(e)||a.isArray(e)}function Fe(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function pe(e,t,n){return e?e.concat(t).map(function(o,s){return o=Fe(o),!n&&s?"["+o+"]":o}).join(n?".":""):t}function Ct(e){return a.isArray(e)&&!e.some(Z)}const Nt=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function J(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(m,E){return!a.isUndefined(E[m])});const r=n.metaTokens,o=n.visitor||l,s=n.dots,i=n.indexes,d=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(o))throw new TypeError("visitor must be a function");function f(u){if(u===null)return"";if(a.isDate(u))return u.toISOString();if(!d&&a.isBlob(u))throw new h("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(u)||a.isTypedArray(u)?d&&typeof Blob=="function"?new Blob([u]):Buffer.from(u):u}function l(u,m,E){let k=u;if(u&&!E&&typeof u=="object"){if(a.endsWith(m,"{}"))m=r?m:m.slice(0,-2),u=JSON.stringify(u);else if(a.isArray(u)&&Ct(u)||(a.isFileList(u)||a.endsWith(m,"[]"))&&(k=a.toArray(u)))return m=Fe(m),k.forEach(function(U,Ke){!(a.isUndefined(U)||U===null)&&t.append(i===!0?pe([m],Ke,s):i===null?m:m+"[]",f(U))}),!1}return Z(u)?!0:(t.append(pe(E,m,s),f(u)),!1)}const p=[],b=Object.assign(Nt,{defaultVisitor:l,convertValue:f,isVisitable:Z});function w(u,m){if(!a.isUndefined(u)){if(p.indexOf(u)!==-1)throw Error("Circular reference detected in "+m.join("."));p.push(u),a.forEach(u,function(k,g){(!(a.isUndefined(k)||k===null)&&o.call(t,k,a.isString(g)?g.trim():g,m,b))===!0&&w(k,m?m.concat(g):[g])}),p.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return w(e),t}function me(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function se(e,t){this._pairs=[],e&&J(e,this,t)}const _e=se.prototype;_e.append=function(t,n){this._pairs.push([t,n])};_e.toString=function(t){const n=t?function(r){return t.call(this,r,me)}:me;return this._pairs.map(function(o){return n(o[0])+"="+n(o[1])},"").join("&")};function Pt(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function De(e,t,n){if(!t)return e;const r=n&&n.encode||Pt,o=n&&n.serialize;let s;if(o?s=o(t,n):s=a.isURLSearchParams(t)?t.toString():new se(t,n).toString(r),s){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+s}return e}class Ft{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const he=Ft,Ue={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},_t=typeof URLSearchParams<"u"?URLSearchParams:se,Dt=typeof FormData<"u"?FormData:null,Ut=typeof Blob<"u"?Blob:null,It=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),jt=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),R={isBrowser:!0,classes:{URLSearchParams:_t,FormData:Dt,Blob:Ut},isStandardBrowserEnv:It,isStandardBrowserWebWorkerEnv:jt,protocols:["http","https","file","blob","url","data"]};function qt(e,t){return J(e,new R.classes.URLSearchParams,Object.assign({visitor:function(n,r,o,s){return R.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},t))}function vt(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Mt(e){const t={},n=Object.keys(e);let r;const o=n.length;let s;for(r=0;r<o;r++)s=n[r],t[s]=e[s];return t}function Ie(e){function t(n,r,o,s){let i=n[s++];const c=Number.isFinite(+i),d=s>=n.length;return i=!i&&a.isArray(o)?o.length:i,d?(a.hasOwnProp(o,i)?o[i]=[o[i],r]:o[i]=r,!c):((!o[i]||!a.isObject(o[i]))&&(o[i]=[]),t(n,r,o[i],s)&&a.isArray(o[i])&&(o[i]=Mt(o[i])),!c)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,o)=>{t(vt(r),o,n,0)}),n}return null}function Ht(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const ie={transitional:Ue,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",o=r.indexOf("application/json")>-1,s=a.isObject(t);if(s&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return o&&o?JSON.stringify(Ie(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let c;if(s){if(r.indexOf("application/x-www-form-urlencoded")>-1)return qt(t,this.formSerializer).toString();if((c=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const d=this.env&&this.env.FormData;return J(c?{"files[]":t}:t,d&&new d,this.formSerializer)}}return s||o?(n.setContentType("application/json",!1),Ht(t)):t}],transformResponse:[function(t){const n=this.transitional||ie.transitional,r=n&&n.forcedJSONParsing,o=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||o)){const i=!(n&&n.silentJSONParsing)&&o;try{return JSON.parse(t)}catch(c){if(i)throw c.name==="SyntaxError"?h.from(c,h.ERR_BAD_RESPONSE,this,null,this.response):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:R.classes.FormData,Blob:R.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};a.forEach(["delete","get","head","post","put","patch"],e=>{ie.headers[e]={}});const ae=ie,$t=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),zt=e=>{const t={};let n,r,o;return e&&e.split(`
`).forEach(function(i){o=i.indexOf(":"),n=i.substring(0,o).trim().toLowerCase(),r=i.substring(o+1).trim(),!(!n||t[n]&&$t[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},ye=Symbol("internals");function N(e){return e&&String(e).trim().toLowerCase()}function j(e){return e===!1||e==null?e:a.isArray(e)?e.map(j):String(e)}function Jt(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const Vt=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function K(e,t,n,r,o){if(a.isFunction(r))return r.call(this,t,n);if(o&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function Wt(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Kt(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(o,s,i){return this[r].call(this,t,o,s,i)},configurable:!0})})}class V{constructor(t){t&&this.set(t)}set(t,n,r){const o=this;function s(c,d,f){const l=N(d);if(!l)throw new Error("header name must be a non-empty string");const p=a.findKey(o,l);(!p||o[p]===void 0||f===!0||f===void 0&&o[p]!==!1)&&(o[p||d]=j(c))}const i=(c,d)=>a.forEach(c,(f,l)=>s(f,l,d));return a.isPlainObject(t)||t instanceof this.constructor?i(t,n):a.isString(t)&&(t=t.trim())&&!Vt(t)?i(zt(t),n):t!=null&&s(n,t,r),this}get(t,n){if(t=N(t),t){const r=a.findKey(this,t);if(r){const o=this[r];if(!n)return o;if(n===!0)return Jt(o);if(a.isFunction(n))return n.call(this,o,r);if(a.isRegExp(n))return n.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=N(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||K(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let o=!1;function s(i){if(i=N(i),i){const c=a.findKey(r,i);c&&(!n||K(r,r[c],c,n))&&(delete r[c],o=!0)}}return a.isArray(t)?t.forEach(s):s(t),o}clear(t){const n=Object.keys(this);let r=n.length,o=!1;for(;r--;){const s=n[r];(!t||K(this,this[s],s,t,!0))&&(delete this[s],o=!0)}return o}normalize(t){const n=this,r={};return a.forEach(this,(o,s)=>{const i=a.findKey(r,s);if(i){n[i]=j(o),delete n[s];return}const c=t?Wt(s):String(s).trim();c!==s&&delete n[s],n[c]=j(o),r[c]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,o)=>{r!=null&&r!==!1&&(n[o]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(o=>r.set(o)),r}static accessor(t){const r=(this[ye]=this[ye]={accessors:{}}).accessors,o=this.prototype;function s(i){const c=N(i);r[c]||(Kt(o,i),r[c]=!0)}return a.isArray(t)?t.forEach(s):s(t),this}}V.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.reduceDescriptors(V.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});a.freezeMethods(V);const A=V;function G(e,t){const n=this||ae,r=t||n,o=A.from(r.headers);let s=r.data;return a.forEach(e,function(c){s=c.call(n,s,o.normalize(),t?t.status:void 0)}),o.normalize(),s}function je(e){return!!(e&&e.__CANCEL__)}function _(e,t,n){h.call(this,e??"canceled",h.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(_,h,{__CANCEL__:!0});function Gt(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new h("Request failed with status code "+n.status,[h.ERR_BAD_REQUEST,h.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const Xt=R.isStandardBrowserEnv?function(){return{write:function(n,r,o,s,i,c){const d=[];d.push(n+"="+encodeURIComponent(r)),a.isNumber(o)&&d.push("expires="+new Date(o).toGMTString()),a.isString(s)&&d.push("path="+s),a.isString(i)&&d.push("domain="+i),c===!0&&d.push("secure"),document.cookie=d.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function Qt(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Yt(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function qe(e,t){return e&&!Qt(t)?Yt(e,t):t}const Zt=R.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function o(s){let i=s;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=o(window.location.href),function(i){const c=a.isString(i)?o(i):i;return c.protocol===r.protocol&&c.host===r.host}}():function(){return function(){return!0}}();function en(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function tn(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o=0,s=0,i;return t=t!==void 0?t:1e3,function(d){const f=Date.now(),l=r[s];i||(i=f),n[o]=d,r[o]=f;let p=s,b=0;for(;p!==o;)b+=n[p++],p=p%e;if(o=(o+1)%e,o===s&&(s=(s+1)%e),f-i<t)return;const w=l&&f-l;return w?Math.round(b*1e3/w):void 0}}function be(e,t){let n=0;const r=tn(50,250);return o=>{const s=o.loaded,i=o.lengthComputable?o.total:void 0,c=s-n,d=r(c),f=s<=i;n=s;const l={loaded:s,total:i,progress:i?s/i:void 0,bytes:c,rate:d||void 0,estimated:d&&i&&f?(i-s)/d:void 0,event:o};l[t?"download":"upload"]=!0,e(l)}}const nn=typeof XMLHttpRequest<"u",rn=nn&&function(e){return new Promise(function(n,r){let o=e.data;const s=A.from(e.headers).normalize(),i=e.responseType;let c;function d(){e.cancelToken&&e.cancelToken.unsubscribe(c),e.signal&&e.signal.removeEventListener("abort",c)}let f;a.isFormData(o)&&(R.isStandardBrowserEnv||R.isStandardBrowserWebWorkerEnv?s.setContentType(!1):s.getContentType(/^\s*multipart\/form-data/)?a.isString(f=s.getContentType())&&s.setContentType(f.replace(/^\s*(multipart\/form-data);+/,"$1")):s.setContentType("multipart/form-data"));let l=new XMLHttpRequest;if(e.auth){const u=e.auth.username||"",m=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";s.set("Authorization","Basic "+btoa(u+":"+m))}const p=qe(e.baseURL,e.url);l.open(e.method.toUpperCase(),De(p,e.params,e.paramsSerializer),!0),l.timeout=e.timeout;function b(){if(!l)return;const u=A.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders()),E={data:!i||i==="text"||i==="json"?l.responseText:l.response,status:l.status,statusText:l.statusText,headers:u,config:e,request:l};Gt(function(g){n(g),d()},function(g){r(g),d()},E),l=null}if("onloadend"in l?l.onloadend=b:l.onreadystatechange=function(){!l||l.readyState!==4||l.status===0&&!(l.responseURL&&l.responseURL.indexOf("file:")===0)||setTimeout(b)},l.onabort=function(){l&&(r(new h("Request aborted",h.ECONNABORTED,e,l)),l=null)},l.onerror=function(){r(new h("Network Error",h.ERR_NETWORK,e,l)),l=null},l.ontimeout=function(){let m=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const E=e.transitional||Ue;e.timeoutErrorMessage&&(m=e.timeoutErrorMessage),r(new h(m,E.clarifyTimeoutError?h.ETIMEDOUT:h.ECONNABORTED,e,l)),l=null},R.isStandardBrowserEnv){const u=(e.withCredentials||Zt(p))&&e.xsrfCookieName&&Xt.read(e.xsrfCookieName);u&&s.set(e.xsrfHeaderName,u)}o===void 0&&s.setContentType(null),"setRequestHeader"in l&&a.forEach(s.toJSON(),function(m,E){l.setRequestHeader(E,m)}),a.isUndefined(e.withCredentials)||(l.withCredentials=!!e.withCredentials),i&&i!=="json"&&(l.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&l.addEventListener("progress",be(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&l.upload&&l.upload.addEventListener("progress",be(e.onUploadProgress)),(e.cancelToken||e.signal)&&(c=u=>{l&&(r(!u||u.type?new _(null,e,l):u),l.abort(),l=null)},e.cancelToken&&e.cancelToken.subscribe(c),e.signal&&(e.signal.aborted?c():e.signal.addEventListener("abort",c)));const w=en(p);if(w&&R.protocols.indexOf(w)===-1){r(new h("Unsupported protocol "+w+":",h.ERR_BAD_REQUEST,e));return}l.send(o||null)})},ee={http:xt,xhr:rn};a.forEach(ee,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const we=e=>`- ${e}`,on=e=>a.isFunction(e)||e===null||e===!1,ve={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;const o={};for(let s=0;s<t;s++){n=e[s];let i;if(r=n,!on(n)&&(r=ee[(i=String(n)).toLowerCase()],r===void 0))throw new h(`Unknown adapter '${i}'`);if(r)break;o[i||"#"+s]=r}if(!r){const s=Object.entries(o).map(([c,d])=>`adapter ${c} `+(d===!1?"is not supported by the environment":"is not available in the build"));let i=t?s.length>1?`since :
`+s.map(we).join(`
`):" "+we(s[0]):"as no adapter specified";throw new h("There is no suitable adapter to dispatch the request "+i,"ERR_NOT_SUPPORT")}return r},adapters:ee};function X(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new _(null,e)}function Ee(e){return X(e),e.headers=A.from(e.headers),e.data=G.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),ve.getAdapter(e.adapter||ae.adapter)(e).then(function(r){return X(e),r.data=G.call(e,e.transformResponse,r),r.headers=A.from(r.headers),r},function(r){return je(r)||(X(e),r&&r.response&&(r.response.data=G.call(e,e.transformResponse,r.response),r.response.headers=A.from(r.response.headers))),Promise.reject(r)})}const Se=e=>e instanceof A?e.toJSON():e;function x(e,t){t=t||{};const n={};function r(f,l,p){return a.isPlainObject(f)&&a.isPlainObject(l)?a.merge.call({caseless:p},f,l):a.isPlainObject(l)?a.merge({},l):a.isArray(l)?l.slice():l}function o(f,l,p){if(a.isUndefined(l)){if(!a.isUndefined(f))return r(void 0,f,p)}else return r(f,l,p)}function s(f,l){if(!a.isUndefined(l))return r(void 0,l)}function i(f,l){if(a.isUndefined(l)){if(!a.isUndefined(f))return r(void 0,f)}else return r(void 0,l)}function c(f,l,p){if(p in t)return r(f,l);if(p in e)return r(void 0,f)}const d={url:s,method:s,data:s,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:c,headers:(f,l)=>o(Se(f),Se(l),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(l){const p=d[l]||o,b=p(e[l],t[l],l);a.isUndefined(b)&&p!==c||(n[l]=b)}),n}const Me="1.5.1",ce={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{ce[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const ge={};ce.transitional=function(t,n,r){function o(s,i){return"[Axios v"+Me+"] Transitional option '"+s+"'"+i+(r?". "+r:"")}return(s,i,c)=>{if(t===!1)throw new h(o(i," has been removed"+(n?" in "+n:"")),h.ERR_DEPRECATED);return n&&!ge[i]&&(ge[i]=!0,console.warn(o(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(s,i,c):!0}};function sn(e,t,n){if(typeof e!="object")throw new h("options must be an object",h.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const s=r[o],i=t[s];if(i){const c=e[s],d=c===void 0||i(c,s,e);if(d!==!0)throw new h("option "+s+" must be "+d,h.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new h("Unknown option "+s,h.ERR_BAD_OPTION)}}const te={assertOptions:sn,validators:ce},T=te.validators;class v{constructor(t){this.defaults=t,this.interceptors={request:new he,response:new he}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=x(this.defaults,n);const{transitional:r,paramsSerializer:o,headers:s}=n;r!==void 0&&te.assertOptions(r,{silentJSONParsing:T.transitional(T.boolean),forcedJSONParsing:T.transitional(T.boolean),clarifyTimeoutError:T.transitional(T.boolean)},!1),o!=null&&(a.isFunction(o)?n.paramsSerializer={serialize:o}:te.assertOptions(o,{encode:T.function,serialize:T.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i=s&&a.merge(s.common,s[n.method]);s&&a.forEach(["delete","get","head","post","put","patch","common"],u=>{delete s[u]}),n.headers=A.concat(i,s);const c=[];let d=!0;this.interceptors.request.forEach(function(m){typeof m.runWhen=="function"&&m.runWhen(n)===!1||(d=d&&m.synchronous,c.unshift(m.fulfilled,m.rejected))});const f=[];this.interceptors.response.forEach(function(m){f.push(m.fulfilled,m.rejected)});let l,p=0,b;if(!d){const u=[Ee.bind(this),void 0];for(u.unshift.apply(u,c),u.push.apply(u,f),b=u.length,l=Promise.resolve(n);p<b;)l=l.then(u[p++],u[p++]);return l}b=c.length;let w=n;for(p=0;p<b;){const u=c[p++],m=c[p++];try{w=u(w)}catch(E){m.call(this,E);break}}try{l=Ee.call(this,w)}catch(u){return Promise.reject(u)}for(p=0,b=f.length;p<b;)l=l.then(f[p++],f[p++]);return l}getUri(t){t=x(this.defaults,t);const n=qe(t.baseURL,t.url);return De(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){v.prototype[t]=function(n,r){return this.request(x(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(s,i,c){return this.request(x(c||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:s,data:i}))}}v.prototype[t]=n(),v.prototype[t+"Form"]=n(!0)});const q=v;class le{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const r=this;this.promise.then(o=>{if(!r._listeners)return;let s=r._listeners.length;for(;s-- >0;)r._listeners[s](o);r._listeners=null}),this.promise.then=o=>{let s;const i=new Promise(c=>{r.subscribe(c),s=c}).then(o);return i.cancel=function(){r.unsubscribe(s)},i},t(function(s,i,c){r.reason||(r.reason=new _(s,i,c),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new le(function(o){t=o}),cancel:t}}}const an=le;function cn(e){return function(n){return e.apply(null,n)}}function ln(e){return a.isObject(e)&&e.isAxiosError===!0}const ne={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ne).forEach(([e,t])=>{ne[t]=e});const un=ne;function He(e){const t=new q(e),n=ke(q.prototype.request,t);return a.extend(n,q.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(o){return He(x(e,o))},n}const y=He(ae);y.Axios=q;y.CanceledError=_;y.CancelToken=an;y.isCancel=je;y.VERSION=Me;y.toFormData=J;y.AxiosError=h;y.Cancel=y.CanceledError;y.all=function(t){return Promise.all(t)};y.spread=cn;y.isAxiosError=ln;y.mergeConfig=x;y.AxiosHeaders=A;y.formToJSON=e=>Ie(a.isHTMLForm(e)?new FormData(e):e);y.getAdapter=ve.getAdapter;y.HttpStatusCode=un;y.default=y;const D=y;D.defaults.baseURL="https://books-backend.p.goit.global/books";async function dn(){return(await D.get("/category-list")).data}async function fn(){return(await D.get("/top-books")).data}async function $e(e){return(await D.get(`/category?category=${e}`)).data}const pn=document.querySelector(".categories-list"),ze=document.querySelector(".books");pn.addEventListener("click",mn);async function mn(e){e.preventDefault(),ze.innerHTML="";const t=e.target.name;if(t!=="all-categories"){const n=await $e(t);(!n||n.length===0)&&alert("За вказаною категорією не знайдено жодної книги!"),Je(n,t)}}function Je(e,t){let n=t.split(" ");n[n.length-1]=`<span class="speccolor">${n[n.length-1]}</span>`,t=n.join(" ");const r=`<h2 class="category-tittle">${t}</h2>`,o=`<ul class="book-list">${e.map(({book_image:s,title:i,author:c,_id:d})=>`

      <li class="book-list-item" data-id=${d}>
      <div class="image-container">



        <img
          class="book-item-img"
          src="${s}"
          alt="${i}"
        />
        <div class="image-caption">quick view</div></div>
        <h3 class="book-item-tittle">${i}</h3>
        <p class="book-item-text">${c}</p>
      </li>
    `).join("")}</ul>`;ze.insertAdjacentHTML("beforeend",r+o)}const Ve=document.querySelector(".categories-list");async function hn(){try{const t=(await dn()).sort((r,o)=>r.list_name.localeCompare(o.list_name)),n=yn(t);Ve.insertAdjacentHTML("beforeend",n)}catch(e){console.error(e)}}function yn(e){return e.map(({list_name:t})=>`<li class="categories-element"> 
        <button class="categories-item" name="${t}" type="submit"> 
    ${t}</button> 
    </li>`).join("")}(async()=>{await hn();const e=Ve.querySelectorAll(".categories-item");function t(n){const r=n.target;r.classList.add("active-btn"),e.forEach(o=>{o!==r&&o.classList.remove("active-btn")})}e.forEach(n=>{n.addEventListener("click",t)})})();const ue=document.querySelector(".books"),bn=document.querySelector(".all-category");async function We(){try{const e=await fn();wn(e)}catch{console.log("Error with your API")}}We();bn.addEventListener("click",function(){We()});function wn(e){const t=e.map(r=>{const o=window.innerWidth,s=r.books,i=r.list_name;let c;return o<768?c=s.slice(0,1):o<1440?c=s.slice(0,3):c=s,`

<p class="category-title-top">${i}</p>
<ul class="list book-list book-list-top">
  ${c.map(({book_image:d,author:f,title:l,_id:p})=>`
  <li class="item book-list-item item-top-books" data-id=${p}>
    <div class="image-container"><img
      src="${d}"
      alt="Books created by ${f}"
      class="book-top-img"
    />
    <div class="image-caption">quick view</div></div>
    <h3 class="book-item-tittle book-item-top">${l}</h3>
    <p class="book-item-text">${f}</p>
  </li>
  `).join("")}
  <button class="see-more-btn">see more</button>
</ul>
`}).join(""),n=`
<h1 class="heading-top-books">
  Best Sellers <span class="part-heading-top">Books</span>
</h1>
`;ue.insertAdjacentHTML("beforeend",n+t)}ue.addEventListener("click",En);async function En(e){if(e.target.classList.value==="see-more-btn"){const t=e.target.parentNode.previousElementSibling,n=await $e(t.textContent);ue.innerHTML="",Je(n,t.textContent)}}async function Sn(e){const t=`https://books-backend.p.goit.global/books/${e}`;return(await D.get(t)).data}const gn=document.querySelector(".modal-information"),Rn=document.querySelector(".containerImg"),On=document.querySelector(".modal-amazon-link"),kn=document.querySelector(".modal-applebook-link");function An(e){var s,i;const t=`
    <img class="modal-book-image" src="${e.book_image}" alt="${e.title}"/>
  `;Rn.innerHTML=t;const n=`
    <div class="modal-box">
    <h3 class="modal-book-title">${e.title}</h3>
    <p class="modal-author">Author: ${e.author}</p>
    <p class="modal-description">${e.description}</p>
    </div>
  `;gn.innerHTML=n;const r=(s=e.buy_links.find(c=>c.name==="Amazon"))==null?void 0:s.url,o=(i=e.buy_links.find(c=>c.name==="Apple Books"))==null?void 0:i.url;return On.setAttribute("href",r),kn.setAttribute("href",o),{amazon:r,appleBook:o}}const Re="storedBooks";function Tn(e){const t=JSON.parse(localStorage.getItem(Re))||[];t.push(e),localStorage.setItem(Re,JSON.stringify(t))}document.querySelector("modal-section");const re=document.querySelector(".add-btn"),M=document.querySelector(".remove-btn"),Oe=document.querySelector(".modal-message");let L=[];document.addEventListener("DOMContentLoaded",function(){document.addEventListener("click",async function(r){const o=r.target.closest("li.book-item-top-books")||r.target.closest("li.book-list-item");if(o){const s=o.dataset.id;try{L=await Sn(s),An(L),Bn(),B(),re.addEventListener("click",e),M.addEventListener("click",t)}catch(i){console.error("Error:",i)}}});function e(){Ln(L),B()}function t(){xn(L),B()}document.querySelector(".modal-icon-x-close").addEventListener("click",Q),document.addEventListener("keydown",function(r){r.key==="Escape"&&Q()}),document.addEventListener("click",function(r){r.target.closest(".modal-container")||Q()}),B(),window.addEventListener("storage",function(r){r.key==="storedBooks"&&B()}),M.addEventListener("click",function(){const r=JSON.parse(localStorage.getItem("storedBooks"))||[],o=r.findIndex(s=>s._id===L._id);o!==-1&&(r.splice(o,1),localStorage.setItem("storedBooks",JSON.stringify(r)),B())})});function Bn(){const e=document.querySelector(".modal-section");e.style.display="flex",e==null||e.classList.remove("visually-hidden"),document.body.style.overflow="hidden"}function Q(){const e=document.querySelector(".modal-section");e.style.display="none",e==null||e.classList.add("visually-hidden"),document.body.style.overflow=""}async function Ln(e){await Tn(e),B()}async function xn(e){const t=JSON.parse(localStorage.getItem("storedBooks"))||[],n=t.findIndex(r=>r._id===e._id);n!==-1&&(t.splice(n,1),localStorage.setItem("storedBooks",JSON.stringify(t)))}function B(){(JSON.parse(localStorage.getItem("storedBooks"))||[]).some(n=>n._id===L._id)?(re.classList.add("visually-hidden"),M.classList.remove("visually-hidden"),Oe.classList.remove("visually-hidden")):(re.classList.remove("visually-hidden"),M.classList.add("visually-hidden"),Oe.classList.add("visually-hidden"))}document.addEventListener("DOMContentLoaded",function(){var e=document.getElementById("scrollToTopButton");window.onscroll=function(){document.body.scrollTop>20||document.documentElement.scrollTop>20?e.style.display="block":e.style.display="none"},e.addEventListener("click",function(){t(1e3)});function t(n){var r=performance.now(),o=window.scrollY;function s(c){var d=(c-r)/n;d<1?(window.scrollTo(0,o+(0-o)*i(d)),requestAnimationFrame(s)):window.scrollTo(0,0)}function i(c){return c<.5?4*c*c*c:(c-1)*(2*c-2)*(2*c-2)+1}requestAnimationFrame(s)}});