var Y=typeof global=="object"&&global&&global.Object===Object&&global;const R=Y;var Z=typeof self=="object"&&self&&self.Object===Object&&self,k=R||Z||Function("return this")();const _=k;var tt=_.Symbol;const m=tt;var H=Object.prototype,et=H.hasOwnProperty,rt=H.toString,h=m?m.toStringTag:void 0;function nt(t){var e=et.call(t,h),r=t[h];try{t[h]=void 0;var n=!0}catch{}var a=rt.call(t);return n&&(e?t[h]=r:delete t[h]),a}var at=Object.prototype,ot=at.toString;function it(t){return ot.call(t)}var st="[object Null]",ct="[object Undefined]",I=m?m.toStringTag:void 0;function w(t){return t==null?t===void 0?ct:st:I&&I in Object(t)?nt(t):it(t)}function O(t){return t!=null&&typeof t=="object"}var ut=Array.isArray;const ft=ut;function b(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}function L(t){return t}var lt="[object AsyncFunction]",pt="[object Function]",dt="[object GeneratorFunction]",ht="[object Proxy]";function G(t){if(!b(t))return!1;var e=w(t);return e==pt||e==dt||e==lt||e==ht}var yt=_["__core-js_shared__"];const $=yt;var E=function(){var t=/[^.]+$/.exec($&&$.keys&&$.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function gt(t){return!!E&&E in t}var _t=Function.prototype,bt=_t.toString;function vt(t){if(t!=null){try{return bt.call(t)}catch{}try{return t+""}catch{}}return""}var mt=/[\\^$.*+?()[\]{}|]/g,Tt=/^\[object .+?Constructor\]$/,Ot=Function.prototype,jt=Object.prototype,At=Ot.toString,$t=jt.hasOwnProperty,St=RegExp("^"+At.call($t).replace(mt,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function wt(t){if(!b(t)||gt(t))return!1;var e=G(t)?St:Tt;return e.test(vt(t))}function xt(t,e){return t==null?void 0:t[e]}function x(t,e){var r=xt(t,e);return wt(r)?r:void 0}var z=Object.create,Pt=function(){function t(){}return function(e){if(!b(e))return{};if(z)return z(e);t.prototype=e;var r=new t;return t.prototype=void 0,r}}();const wr=Pt;function Ct(t,e,r){switch(r.length){case 0:return t.call(e);case 1:return t.call(e,r[0]);case 2:return t.call(e,r[0],r[1]);case 3:return t.call(e,r[0],r[1],r[2])}return t.apply(e,r)}function xr(t,e){var r=-1,n=t.length;for(e||(e=Array(n));++r<n;)e[r]=t[r];return e}var It=800,Et=16,zt=Date.now;function Mt(t){var e=0,r=0;return function(){var n=zt(),a=Et-(n-r);if(r=n,a>0){if(++e>=It)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}function Nt(t){return function(){return t}}var Ut=function(){try{var t=x(Object,"defineProperty");return t({},"",{}),t}catch{}}();const T=Ut;var Ft=T?function(t,e){return T(t,"toString",{configurable:!0,enumerable:!1,value:Nt(e),writable:!0})}:L;const Bt=Ft;var Dt=Mt(Bt);const Rt=Dt;var Ht=9007199254740991,Lt=/^(?:0|[1-9]\d*)$/;function q(t,e){var r=typeof t;return e=e??Ht,!!e&&(r=="number"||r!="symbol"&&Lt.test(t))&&t>-1&&t%1==0&&t<e}function K(t,e,r){e=="__proto__"&&T?T(t,e,{configurable:!0,enumerable:!0,value:r,writable:!0}):t[e]=r}function P(t,e){return t===e||t!==t&&e!==e}var Gt=Object.prototype,qt=Gt.hasOwnProperty;function Kt(t,e,r){var n=t[e];(!(qt.call(t,e)&&P(n,r))||r===void 0&&!(e in t))&&K(t,e,r)}function Pr(t,e,r,n){var a=!r;r||(r={});for(var s=-1,u=e.length;++s<u;){var i=e[s],f=n?n(r[i],t[i],i,r,t):void 0;f===void 0&&(f=t[i]),a?K(r,i,f):Kt(r,i,f)}return r}var M=Math.max;function Vt(t,e,r){return e=M(e===void 0?t.length-1:e,0),function(){for(var n=arguments,a=-1,s=M(n.length-e,0),u=Array(s);++a<s;)u[a]=n[e+a];a=-1;for(var i=Array(e+1);++a<e;)i[a]=n[a];return i[e]=r(u),Ct(t,this,i)}}function Jt(t,e){return Rt(Vt(t,e,L),t+"")}var Wt=9007199254740991;function V(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=Wt}function C(t){return t!=null&&V(t.length)&&!G(t)}function Xt(t,e,r){if(!b(r))return!1;var n=typeof e;return(n=="number"?C(r)&&q(e,r.length):n=="string"&&e in r)?P(r[e],t):!1}function Cr(t){return Jt(function(e,r){var n=-1,a=r.length,s=a>1?r[a-1]:void 0,u=a>2?r[2]:void 0;for(s=t.length>3&&typeof s=="function"?(a--,s):void 0,u&&Xt(r[0],r[1],u)&&(s=a<3?void 0:s,a=1),e=Object(e);++n<a;){var i=r[n];i&&t(e,i,n,s)}return e})}var Qt=Object.prototype;function Yt(t){var e=t&&t.constructor,r=typeof e=="function"&&e.prototype||Qt;return t===r}function Zt(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}var kt="[object Arguments]";function N(t){return O(t)&&w(t)==kt}var J=Object.prototype,te=J.hasOwnProperty,ee=J.propertyIsEnumerable,re=N(function(){return arguments}())?N:function(t){return O(t)&&te.call(t,"callee")&&!ee.call(t,"callee")};const ne=re;function ae(){return!1}var W=typeof exports=="object"&&exports&&!exports.nodeType&&exports,U=W&&typeof module=="object"&&module&&!module.nodeType&&module,oe=U&&U.exports===W,F=oe?_.Buffer:void 0,ie=F?F.isBuffer:void 0,se=ie||ae;const ce=se;var ue="[object Arguments]",fe="[object Array]",le="[object Boolean]",pe="[object Date]",de="[object Error]",he="[object Function]",ye="[object Map]",ge="[object Number]",_e="[object Object]",be="[object RegExp]",ve="[object Set]",me="[object String]",Te="[object WeakMap]",Oe="[object ArrayBuffer]",je="[object DataView]",Ae="[object Float32Array]",$e="[object Float64Array]",Se="[object Int8Array]",we="[object Int16Array]",xe="[object Int32Array]",Pe="[object Uint8Array]",Ce="[object Uint8ClampedArray]",Ie="[object Uint16Array]",Ee="[object Uint32Array]",o={};o[Ae]=o[$e]=o[Se]=o[we]=o[xe]=o[Pe]=o[Ce]=o[Ie]=o[Ee]=!0;o[ue]=o[fe]=o[Oe]=o[le]=o[je]=o[pe]=o[de]=o[he]=o[ye]=o[ge]=o[_e]=o[be]=o[ve]=o[me]=o[Te]=!1;function ze(t){return O(t)&&V(t.length)&&!!o[w(t)]}function Me(t){return function(e){return t(e)}}var X=typeof exports=="object"&&exports&&!exports.nodeType&&exports,y=X&&typeof module=="object"&&module&&!module.nodeType&&module,Ne=y&&y.exports===X,S=Ne&&R.process,Ue=function(){try{var t=y&&y.require&&y.require("util").types;return t||S&&S.binding&&S.binding("util")}catch{}}();const B=Ue;var D=B&&B.isTypedArray,Fe=D?Me(D):ze;const Be=Fe;var De=Object.prototype,Re=De.hasOwnProperty;function He(t,e){var r=ft(t),n=!r&&ne(t),a=!r&&!n&&ce(t),s=!r&&!n&&!a&&Be(t),u=r||n||a||s,i=u?Zt(t.length,String):[],f=i.length;for(var c in t)(e||Re.call(t,c))&&!(u&&(c=="length"||a&&(c=="offset"||c=="parent")||s&&(c=="buffer"||c=="byteLength"||c=="byteOffset")||q(c,f)))&&i.push(c);return i}function Ir(t,e){return function(r){return t(e(r))}}function Le(t){var e=[];if(t!=null)for(var r in Object(t))e.push(r);return e}var Ge=Object.prototype,qe=Ge.hasOwnProperty;function Ke(t){if(!b(t))return Le(t);var e=Yt(t),r=[];for(var n in t)n=="constructor"&&(e||!qe.call(t,n))||r.push(n);return r}function Er(t){return C(t)?He(t,!0):Ke(t)}var Ve=x(Object,"create");const g=Ve;function Je(){this.__data__=g?g(null):{},this.size=0}function We(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}var Xe="__lodash_hash_undefined__",Qe=Object.prototype,Ye=Qe.hasOwnProperty;function Ze(t){var e=this.__data__;if(g){var r=e[t];return r===Xe?void 0:r}return Ye.call(e,t)?e[t]:void 0}var ke=Object.prototype,tr=ke.hasOwnProperty;function er(t){var e=this.__data__;return g?e[t]!==void 0:tr.call(e,t)}var rr="__lodash_hash_undefined__";function nr(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=g&&e===void 0?rr:e,this}function p(t){var e=-1,r=t==null?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}p.prototype.clear=Je;p.prototype.delete=We;p.prototype.get=Ze;p.prototype.has=er;p.prototype.set=nr;function ar(){this.__data__=[],this.size=0}function j(t,e){for(var r=t.length;r--;)if(P(t[r][0],e))return r;return-1}var or=Array.prototype,ir=or.splice;function sr(t){var e=this.__data__,r=j(e,t);if(r<0)return!1;var n=e.length-1;return r==n?e.pop():ir.call(e,r,1),--this.size,!0}function cr(t){var e=this.__data__,r=j(e,t);return r<0?void 0:e[r][1]}function ur(t){return j(this.__data__,t)>-1}function fr(t,e){var r=this.__data__,n=j(r,t);return n<0?(++this.size,r.push([t,e])):r[n][1]=e,this}function l(t){var e=-1,r=t==null?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}l.prototype.clear=ar;l.prototype.delete=sr;l.prototype.get=cr;l.prototype.has=ur;l.prototype.set=fr;var lr=x(_,"Map");const Q=lr;function pr(){this.size=0,this.__data__={hash:new p,map:new(Q||l),string:new p}}function dr(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}function A(t,e){var r=t.__data__;return dr(e)?r[typeof e=="string"?"string":"hash"]:r.map}function hr(t){var e=A(this,t).delete(t);return this.size-=e?1:0,e}function yr(t){return A(this,t).get(t)}function gr(t){return A(this,t).has(t)}function _r(t,e){var r=A(this,t),n=r.size;return r.set(t,e),this.size+=r.size==n?0:1,this}function d(t){var e=-1,r=t==null?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}d.prototype.clear=pr;d.prototype.delete=hr;d.prototype.get=yr;d.prototype.has=gr;d.prototype.set=_r;function br(){this.__data__=new l,this.size=0}function vr(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r}function mr(t){return this.__data__.get(t)}function Tr(t){return this.__data__.has(t)}var Or=200;function jr(t,e){var r=this.__data__;if(r instanceof l){var n=r.__data__;if(!Q||n.length<Or-1)return n.push([t,e]),this.size=++r.size,this;r=this.__data__=new d(n)}return r.set(t,e),this.size=r.size,this}function v(t){var e=this.__data__=new l(t);this.size=e.size}v.prototype.clear=br;v.prototype.delete=vr;v.prototype.get=mr;v.prototype.has=Tr;v.prototype.set=jr;var Ar=_.Uint8Array;const zr=Ar;function $r(t){return function(e,r,n){for(var a=-1,s=Object(e),u=n(e),i=u.length;i--;){var f=u[t?i:++a];if(r(s[f],f,s)===!1)break}return e}}var Sr=$r();const Mr=Sr;function Nr(t){return O(t)&&C(t)}const Ur=t=>{const e=document.createElement("div");return t&&typeof t=="string"&&(t=t.replace(/<script[^>]*>([\S\s]*?)<\/script>/gmi,""),t=t.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gmi,""),e.innerHTML=t,t=e.textContent),t},Fr=t=>(typeof t!="string"||!t.includes("&")||(Object.entries({"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"'}).forEach(([r,n])=>{t=t.replaceAll(r,n)}),t=t.replace(/<script[^>]*>([\S\s]*?)<\/script>/gmi,"")),t),Br=t=>{new MutationObserver(function(){let e=t.id?document.getElementById(t.id):document.querySelector(t.selector);const r=document.querySelector(".edit-site-visual-editor__editor-canvas");!e&&r&&(e=t.id?r.contentWindow.document.getElementById(t.id):r.contentWindow.document.querySelector(t.selector)),e&&(t.done(e),t.loop||this.disconnect())}).observe(t.parent||document,{subtree:!!t.subtree||!t.parent,childList:!0})},Dr=t=>/^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/.test(t),Rr=t=>new URL(t,import.meta.url).href,Hr=t=>JSON.parse(JSON.stringify(t)),Lr=(t,e,r)=>{let n,a=0;const s={dev:-6,alpha:-5,a:-5,beta:-4,b:-4,RC:-3,rc:-3,"#":-2,p:1,pl:1},u=function(c){return c=(""+c).replace(/[_\-+]/g,"."),c=c.replace(/([^.\d]+)/g,".$1.").replace(/\.{2,}/g,"."),c.length?c.split("."):[-8]},i=function(c){return c?isNaN(c)?s[c]||-7:parseInt(c,10):0};t=u(t),e=u(e);const f=Math.max(t.length,e.length);for(n=0;n<f;n++)if(t[n]!==e[n]){if(t[n]=i(t[n]),e[n]=i(e[n]),t[n]<e[n]){a=-1;break}else if(t[n]>e[n]){a=1;break}}if(!r)return a;switch(r){case">":case"gt":return 0<a;case">=":case"ge":return 0<=a;case"<=":case"le":return 0>=a;case"===":case"=":case"eq":return a===0;case"<>":case"!==":case"ne":return a!==0;case"":case"<":case"lt":return 0>a;default:return null}},Gr=t=>{var n;const e=[],r=[...t];for(;r.length;){const{...a}=r.shift();(n=a.innerBlocks)!=null&&n.length&&r.push(...a.innerBlocks),a.innerBlocks=[],e.push(a)}return e},qr=(t,e)=>t.filter(r=>!e.includes(r)),Kr=(t,e)=>t.filter(r=>e.includes(r));export{V as A,L as B,Gr as C,wr as D,K as E,Pr as F,Nr as G,xr as H,G as I,Mr as J,Cr as K,B as L,Q as M,Me as N,Rr as O,Rt as P,Vt as Q,Br as R,m as S,Jt as T,zr as U,Xt as V,Fr as W,ft as a,O as b,w as c,Ur as d,q as e,Kt as f,C as g,ce as h,b as i,Be as j,ne as k,Yt as l,Er as m,Dr as n,Hr as o,x as p,Ir as q,_ as r,He as s,vt as t,qr as u,Lr as v,Kr as w,d as x,P as y,v as z};