const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./ruffle_web-C9iHK4xz.js","./ruffle-imports-CztXuSei.js","./ruffle_web-wasm_mvp-CwgAGocr.js"])))=>i.map(i=>d[i]);
var Kv=Object.defineProperty;var Jv=(s,i,o)=>i in s?Kv(s,i,{enumerable:!0,configurable:!0,writable:!0,value:o}):s[i]=o;var kr=(s,i,o)=>Jv(s,typeof i!="symbol"?i+"":i,o);(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))u(f);new MutationObserver(f=>{for(const m of f)if(m.type==="childList")for(const h of m.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&u(h)}).observe(document,{childList:!0,subtree:!0});function o(f){const m={};return f.integrity&&(m.integrity=f.integrity),f.referrerPolicy&&(m.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?m.credentials="include":f.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function u(f){if(f.ep)return;f.ep=!0;const m=o(f);fetch(f.href,m)}})();function cp(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var $u={exports:{}},Kl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hm;function Pv(){if(hm)return Kl;hm=1;var s=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function o(u,f,m){var h=null;if(m!==void 0&&(h=""+m),f.key!==void 0&&(h=""+f.key),"key"in f){m={};for(var k in f)k!=="key"&&(m[k]=f[k])}else m=f;return f=m.ref,{$$typeof:s,type:u,key:h,ref:f!==void 0?f:null,props:m}}return Kl.Fragment=i,Kl.jsx=o,Kl.jsxs=o,Kl}var vm;function Iv(){return vm||(vm=1,$u.exports=Pv()),$u.exports}var q=Iv(),Gu={exports:{}},K={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gm;function eg(){if(gm)return K;gm=1;var s=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),m=Symbol.for("react.consumer"),h=Symbol.for("react.context"),k=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),b=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),L=Symbol.iterator;function Q(v){return v===null||typeof v!="object"?null:(v=L&&v[L]||v["@@iterator"],typeof v=="function"?v:null)}var F={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ae=Object.assign,ue={};function ge(v,O,$){this.props=v,this.context=O,this.refs=ue,this.updater=$||F}ge.prototype.isReactComponent={},ge.prototype.setState=function(v,O){if(typeof v!="object"&&typeof v!="function"&&v!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,v,O,"setState")},ge.prototype.forceUpdate=function(v){this.updater.enqueueForceUpdate(this,v,"forceUpdate")};function Ye(){}Ye.prototype=ge.prototype;function xe(v,O,$){this.props=v,this.context=O,this.refs=ue,this.updater=$||F}var be=xe.prototype=new Ye;be.constructor=xe,ae(be,ge.prototype),be.isPureReactComponent=!0;var ie=Array.isArray,X={H:null,A:null,T:null,S:null},Me=Object.prototype.hasOwnProperty;function Ee(v,O,$,V,U,re){return $=re.ref,{$$typeof:s,type:v,key:O,ref:$!==void 0?$:null,props:re}}function Ae(v,O){return Ee(v.type,O,void 0,void 0,void 0,v.props)}function x(v){return typeof v=="object"&&v!==null&&v.$$typeof===s}function M(v){var O={"=":"=0",":":"=2"};return"$"+v.replace(/[=:]/g,function($){return O[$]})}var ne=/\/+/g;function Je(v,O){return typeof v=="object"&&v!==null&&v.key!=null?M(""+v.key):O.toString(36)}function tn(){}function Ne(v){switch(v.status){case"fulfilled":return v.value;case"rejected":throw v.reason;default:switch(typeof v.status=="string"?v.then(tn,tn):(v.status="pending",v.then(function(O){v.status==="pending"&&(v.status="fulfilled",v.value=O)},function(O){v.status==="pending"&&(v.status="rejected",v.reason=O)})),v.status){case"fulfilled":return v.value;case"rejected":throw v.reason}}throw v}function cn(v,O,$,V,U){var re=typeof v;(re==="undefined"||re==="boolean")&&(v=null);var J=!1;if(v===null)J=!0;else switch(re){case"bigint":case"string":case"number":J=!0;break;case"object":switch(v.$$typeof){case s:case i:J=!0;break;case _:return J=v._init,cn(J(v._payload),O,$,V,U)}}if(J)return U=U(v),J=V===""?"."+Je(v,0):V,ie(U)?($="",J!=null&&($=J.replace(ne,"$&/")+"/"),cn(U,O,$,"",function(Le){return Le})):U!=null&&(x(U)&&(U=Ae(U,$+(U.key==null||v&&v.key===U.key?"":(""+U.key).replace(ne,"$&/")+"/")+J)),O.push(U)),1;J=0;var on=V===""?".":V+":";if(ie(v))for(var fe=0;fe<v.length;fe++)V=v[fe],re=on+Je(V,fe),J+=cn(V,O,$,re,U);else if(fe=Q(v),typeof fe=="function")for(v=fe.call(v),fe=0;!(V=v.next()).done;)V=V.value,re=on+Je(V,fe++),J+=cn(V,O,$,re,U);else if(re==="object"){if(typeof v.then=="function")return cn(Ne(v),O,$,V,U);throw O=String(v),Error("Objects are not valid as a React child (found: "+(O==="[object Object]"?"object with keys {"+Object.keys(v).join(", ")+"}":O)+"). If you meant to render a collection of children, use an array instead.")}return J}function C(v,O,$){if(v==null)return v;var V=[],U=0;return cn(v,V,"","",function(re){return O.call($,re,U++)}),V}function W(v){if(v._status===-1){var O=v._result;O=O(),O.then(function($){(v._status===0||v._status===-1)&&(v._status=1,v._result=$)},function($){(v._status===0||v._status===-1)&&(v._status=2,v._result=$)}),v._status===-1&&(v._status=0,v._result=O)}if(v._status===1)return v._result.default;throw v._result}var G=typeof reportError=="function"?reportError:function(v){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var O=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof v=="object"&&v!==null&&typeof v.message=="string"?String(v.message):String(v),error:v});if(!window.dispatchEvent(O))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",v);return}console.error(v)};function we(){}return K.Children={map:C,forEach:function(v,O,$){C(v,function(){O.apply(this,arguments)},$)},count:function(v){var O=0;return C(v,function(){O++}),O},toArray:function(v){return C(v,function(O){return O})||[]},only:function(v){if(!x(v))throw Error("React.Children.only expected to receive a single React element child.");return v}},K.Component=ge,K.Fragment=o,K.Profiler=f,K.PureComponent=xe,K.StrictMode=u,K.Suspense=w,K.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=X,K.act=function(){throw Error("act(...) is not supported in production builds of React.")},K.cache=function(v){return function(){return v.apply(null,arguments)}},K.cloneElement=function(v,O,$){if(v==null)throw Error("The argument must be a React element, but you passed "+v+".");var V=ae({},v.props),U=v.key,re=void 0;if(O!=null)for(J in O.ref!==void 0&&(re=void 0),O.key!==void 0&&(U=""+O.key),O)!Me.call(O,J)||J==="key"||J==="__self"||J==="__source"||J==="ref"&&O.ref===void 0||(V[J]=O[J]);var J=arguments.length-2;if(J===1)V.children=$;else if(1<J){for(var on=Array(J),fe=0;fe<J;fe++)on[fe]=arguments[fe+2];V.children=on}return Ee(v.type,U,void 0,void 0,re,V)},K.createContext=function(v){return v={$$typeof:h,_currentValue:v,_currentValue2:v,_threadCount:0,Provider:null,Consumer:null},v.Provider=v,v.Consumer={$$typeof:m,_context:v},v},K.createElement=function(v,O,$){var V,U={},re=null;if(O!=null)for(V in O.key!==void 0&&(re=""+O.key),O)Me.call(O,V)&&V!=="key"&&V!=="__self"&&V!=="__source"&&(U[V]=O[V]);var J=arguments.length-2;if(J===1)U.children=$;else if(1<J){for(var on=Array(J),fe=0;fe<J;fe++)on[fe]=arguments[fe+2];U.children=on}if(v&&v.defaultProps)for(V in J=v.defaultProps,J)U[V]===void 0&&(U[V]=J[V]);return Ee(v,re,void 0,void 0,null,U)},K.createRef=function(){return{current:null}},K.forwardRef=function(v){return{$$typeof:k,render:v}},K.isValidElement=x,K.lazy=function(v){return{$$typeof:_,_payload:{_status:-1,_result:v},_init:W}},K.memo=function(v,O){return{$$typeof:b,type:v,compare:O===void 0?null:O}},K.startTransition=function(v){var O=X.T,$={};X.T=$;try{var V=v(),U=X.S;U!==null&&U($,V),typeof V=="object"&&V!==null&&typeof V.then=="function"&&V.then(we,G)}catch(re){G(re)}finally{X.T=O}},K.unstable_useCacheRefresh=function(){return X.H.useCacheRefresh()},K.use=function(v){return X.H.use(v)},K.useActionState=function(v,O,$){return X.H.useActionState(v,O,$)},K.useCallback=function(v,O){return X.H.useCallback(v,O)},K.useContext=function(v){return X.H.useContext(v)},K.useDebugValue=function(){},K.useDeferredValue=function(v,O){return X.H.useDeferredValue(v,O)},K.useEffect=function(v,O){return X.H.useEffect(v,O)},K.useId=function(){return X.H.useId()},K.useImperativeHandle=function(v,O,$){return X.H.useImperativeHandle(v,O,$)},K.useInsertionEffect=function(v,O){return X.H.useInsertionEffect(v,O)},K.useLayoutEffect=function(v,O){return X.H.useLayoutEffect(v,O)},K.useMemo=function(v,O){return X.H.useMemo(v,O)},K.useOptimistic=function(v,O){return X.H.useOptimistic(v,O)},K.useReducer=function(v,O,$){return X.H.useReducer(v,O,$)},K.useRef=function(v){return X.H.useRef(v)},K.useState=function(v){return X.H.useState(v)},K.useSyncExternalStore=function(v,O,$){return X.H.useSyncExternalStore(v,O,$)},K.useTransition=function(){return X.H.useTransition()},K.version="19.0.0",K}var bm;function xs(){return bm||(bm=1,Gu.exports=eg()),Gu.exports}var nn=xs();const ds=cp(nn);var Zu={exports:{}},Jl={},Qu={exports:{}},Xu={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ym;function ng(){return ym||(ym=1,function(s){function i(C,W){var G=C.length;C.push(W);e:for(;0<G;){var we=G-1>>>1,v=C[we];if(0<f(v,W))C[we]=W,C[G]=v,G=we;else break e}}function o(C){return C.length===0?null:C[0]}function u(C){if(C.length===0)return null;var W=C[0],G=C.pop();if(G!==W){C[0]=G;e:for(var we=0,v=C.length,O=v>>>1;we<O;){var $=2*(we+1)-1,V=C[$],U=$+1,re=C[U];if(0>f(V,G))U<v&&0>f(re,V)?(C[we]=re,C[U]=G,we=U):(C[we]=V,C[$]=G,we=$);else if(U<v&&0>f(re,G))C[we]=re,C[U]=G,we=U;else break e}}return W}function f(C,W){var G=C.sortIndex-W.sortIndex;return G!==0?G:C.id-W.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var m=performance;s.unstable_now=function(){return m.now()}}else{var h=Date,k=h.now();s.unstable_now=function(){return h.now()-k}}var w=[],b=[],_=1,L=null,Q=3,F=!1,ae=!1,ue=!1,ge=typeof setTimeout=="function"?setTimeout:null,Ye=typeof clearTimeout=="function"?clearTimeout:null,xe=typeof setImmediate<"u"?setImmediate:null;function be(C){for(var W=o(b);W!==null;){if(W.callback===null)u(b);else if(W.startTime<=C)u(b),W.sortIndex=W.expirationTime,i(w,W);else break;W=o(b)}}function ie(C){if(ue=!1,be(C),!ae)if(o(w)!==null)ae=!0,Ne();else{var W=o(b);W!==null&&cn(ie,W.startTime-C)}}var X=!1,Me=-1,Ee=5,Ae=-1;function x(){return!(s.unstable_now()-Ae<Ee)}function M(){if(X){var C=s.unstable_now();Ae=C;var W=!0;try{e:{ae=!1,ue&&(ue=!1,Ye(Me),Me=-1),F=!0;var G=Q;try{n:{for(be(C),L=o(w);L!==null&&!(L.expirationTime>C&&x());){var we=L.callback;if(typeof we=="function"){L.callback=null,Q=L.priorityLevel;var v=we(L.expirationTime<=C);if(C=s.unstable_now(),typeof v=="function"){L.callback=v,be(C),W=!0;break n}L===o(w)&&u(w),be(C)}else u(w);L=o(w)}if(L!==null)W=!0;else{var O=o(b);O!==null&&cn(ie,O.startTime-C),W=!1}}break e}finally{L=null,Q=G,F=!1}W=void 0}}finally{W?ne():X=!1}}}var ne;if(typeof xe=="function")ne=function(){xe(M)};else if(typeof MessageChannel<"u"){var Je=new MessageChannel,tn=Je.port2;Je.port1.onmessage=M,ne=function(){tn.postMessage(null)}}else ne=function(){ge(M,0)};function Ne(){X||(X=!0,ne())}function cn(C,W){Me=ge(function(){C(s.unstable_now())},W)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(C){C.callback=null},s.unstable_continueExecution=function(){ae||F||(ae=!0,Ne())},s.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ee=0<C?Math.floor(1e3/C):5},s.unstable_getCurrentPriorityLevel=function(){return Q},s.unstable_getFirstCallbackNode=function(){return o(w)},s.unstable_next=function(C){switch(Q){case 1:case 2:case 3:var W=3;break;default:W=Q}var G=Q;Q=W;try{return C()}finally{Q=G}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(C,W){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var G=Q;Q=C;try{return W()}finally{Q=G}},s.unstable_scheduleCallback=function(C,W,G){var we=s.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?we+G:we):G=we,C){case 1:var v=-1;break;case 2:v=250;break;case 5:v=1073741823;break;case 4:v=1e4;break;default:v=5e3}return v=G+v,C={id:_++,callback:W,priorityLevel:C,startTime:G,expirationTime:v,sortIndex:-1},G>we?(C.sortIndex=G,i(b,C),o(w)===null&&C===o(b)&&(ue?(Ye(Me),Me=-1):ue=!0,cn(ie,G-we))):(C.sortIndex=v,i(w,C),ae||F||(ae=!0,Ne())),C},s.unstable_shouldYield=x,s.unstable_wrapCallback=function(C){var W=Q;return function(){var G=Q;Q=W;try{return C.apply(this,arguments)}finally{Q=G}}}}(Xu)),Xu}var wm;function tg(){return wm||(wm=1,Qu.exports=ng()),Qu.exports}var Wu={exports:{}},rn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var km;function ag(){if(km)return rn;km=1;var s=xs();function i(w){var b="https://react.dev/errors/"+w;if(1<arguments.length){b+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)b+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+w+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var u={d:{f:o,r:function(){throw Error(i(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},f=Symbol.for("react.portal");function m(w,b,_){var L=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:f,key:L==null?null:""+L,children:w,containerInfo:b,implementation:_}}var h=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function k(w,b){if(w==="font")return"";if(typeof b=="string")return b==="use-credentials"?b:""}return rn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,rn.createPortal=function(w,b){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!b||b.nodeType!==1&&b.nodeType!==9&&b.nodeType!==11)throw Error(i(299));return m(w,b,null,_)},rn.flushSync=function(w){var b=h.T,_=u.p;try{if(h.T=null,u.p=2,w)return w()}finally{h.T=b,u.p=_,u.d.f()}},rn.preconnect=function(w,b){typeof w=="string"&&(b?(b=b.crossOrigin,b=typeof b=="string"?b==="use-credentials"?b:"":void 0):b=null,u.d.C(w,b))},rn.prefetchDNS=function(w){typeof w=="string"&&u.d.D(w)},rn.preinit=function(w,b){if(typeof w=="string"&&b&&typeof b.as=="string"){var _=b.as,L=k(_,b.crossOrigin),Q=typeof b.integrity=="string"?b.integrity:void 0,F=typeof b.fetchPriority=="string"?b.fetchPriority:void 0;_==="style"?u.d.S(w,typeof b.precedence=="string"?b.precedence:void 0,{crossOrigin:L,integrity:Q,fetchPriority:F}):_==="script"&&u.d.X(w,{crossOrigin:L,integrity:Q,fetchPriority:F,nonce:typeof b.nonce=="string"?b.nonce:void 0})}},rn.preinitModule=function(w,b){if(typeof w=="string")if(typeof b=="object"&&b!==null){if(b.as==null||b.as==="script"){var _=k(b.as,b.crossOrigin);u.d.M(w,{crossOrigin:_,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0})}}else b==null&&u.d.M(w)},rn.preload=function(w,b){if(typeof w=="string"&&typeof b=="object"&&b!==null&&typeof b.as=="string"){var _=b.as,L=k(_,b.crossOrigin);u.d.L(w,_,{crossOrigin:L,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0,type:typeof b.type=="string"?b.type:void 0,fetchPriority:typeof b.fetchPriority=="string"?b.fetchPriority:void 0,referrerPolicy:typeof b.referrerPolicy=="string"?b.referrerPolicy:void 0,imageSrcSet:typeof b.imageSrcSet=="string"?b.imageSrcSet:void 0,imageSizes:typeof b.imageSizes=="string"?b.imageSizes:void 0,media:typeof b.media=="string"?b.media:void 0})}},rn.preloadModule=function(w,b){if(typeof w=="string")if(b){var _=k(b.as,b.crossOrigin);u.d.m(w,{as:typeof b.as=="string"&&b.as!=="script"?b.as:void 0,crossOrigin:_,integrity:typeof b.integrity=="string"?b.integrity:void 0})}else u.d.m(w)},rn.requestFormReset=function(w){u.d.r(w)},rn.unstable_batchedUpdates=function(w,b){return w(b)},rn.useFormState=function(w,b,_){return h.H.useFormState(w,b,_)},rn.useFormStatus=function(){return h.H.useHostTransitionStatus()},rn.version="19.0.0",rn}var Rm;function lg(){if(Rm)return Wu.exports;Rm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(i){console.error(i)}}return s(),Wu.exports=ag(),Wu.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sm;function ig(){if(Sm)return Jl;Sm=1;var s=tg(),i=xs(),o=lg();function u(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}var m=Symbol.for("react.element"),h=Symbol.for("react.transitional.element"),k=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),b=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),L=Symbol.for("react.provider"),Q=Symbol.for("react.consumer"),F=Symbol.for("react.context"),ae=Symbol.for("react.forward_ref"),ue=Symbol.for("react.suspense"),ge=Symbol.for("react.suspense_list"),Ye=Symbol.for("react.memo"),xe=Symbol.for("react.lazy"),be=Symbol.for("react.offscreen"),ie=Symbol.for("react.memo_cache_sentinel"),X=Symbol.iterator;function Me(e){return e===null||typeof e!="object"?null:(e=X&&e[X]||e["@@iterator"],typeof e=="function"?e:null)}var Ee=Symbol.for("react.client.reference");function Ae(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ee?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case w:return"Fragment";case k:return"Portal";case _:return"Profiler";case b:return"StrictMode";case ue:return"Suspense";case ge:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case F:return(e.displayName||"Context")+".Provider";case Q:return(e._context.displayName||"Context")+".Consumer";case ae:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ye:return n=e.displayName||null,n!==null?n:Ae(e.type)||"Memo";case xe:n=e._payload,e=e._init;try{return Ae(e(n))}catch{}}return null}var x=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,M=Object.assign,ne,Je;function tn(e){if(ne===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);ne=n&&n[1]||"",Je=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ne+e+Je}var Ne=!1;function cn(e,n){if(!e||Ne)return"";Ne=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(n){var D=function(){throw Error()};if(Object.defineProperty(D.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(D,[])}catch(E){var z=E}Reflect.construct(e,[],D)}else{try{D.call()}catch(E){z=E}e.call(D.prototype)}}else{try{throw Error()}catch(E){z=E}(D=e())&&typeof D.catch=="function"&&D.catch(function(){})}}catch(E){if(E&&z&&typeof E.stack=="string")return[E.stack,z.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=a.DetermineComponentFrameRoot(),c=r[0],d=r[1];if(c&&d){var p=c.split(`
`),y=d.split(`
`);for(l=a=0;a<p.length&&!p[a].includes("DetermineComponentFrameRoot");)a++;for(;l<y.length&&!y[l].includes("DetermineComponentFrameRoot");)l++;if(a===p.length||l===y.length)for(a=p.length-1,l=y.length-1;1<=a&&0<=l&&p[a]!==y[l];)l--;for(;1<=a&&0<=l;a--,l--)if(p[a]!==y[l]){if(a!==1||l!==1)do if(a--,l--,0>l||p[a]!==y[l]){var j=`
`+p[a].replace(" at new "," at ");return e.displayName&&j.includes("<anonymous>")&&(j=j.replace("<anonymous>",e.displayName)),j}while(1<=a&&0<=l);break}}}finally{Ne=!1,Error.prepareStackTrace=t}return(t=e?e.displayName||e.name:"")?tn(t):""}function C(e){switch(e.tag){case 26:case 27:case 5:return tn(e.type);case 16:return tn("Lazy");case 13:return tn("Suspense");case 19:return tn("SuspenseList");case 0:case 15:return e=cn(e.type,!1),e;case 11:return e=cn(e.type.render,!1),e;case 1:return e=cn(e.type,!0),e;default:return""}}function W(e){try{var n="";do n+=C(e),e=e.return;while(e);return n}catch(t){return`
Error generating stack: `+t.message+`
`+t.stack}}function G(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function we(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function v(e){if(G(e)!==e)throw Error(u(188))}function O(e){var n=e.alternate;if(!n){if(n=G(e),n===null)throw Error(u(188));return n!==e?null:e}for(var t=e,a=n;;){var l=t.return;if(l===null)break;var r=l.alternate;if(r===null){if(a=l.return,a!==null){t=a;continue}break}if(l.child===r.child){for(r=l.child;r;){if(r===t)return v(l),e;if(r===a)return v(l),n;r=r.sibling}throw Error(u(188))}if(t.return!==a.return)t=l,a=r;else{for(var c=!1,d=l.child;d;){if(d===t){c=!0,t=l,a=r;break}if(d===a){c=!0,a=l,t=r;break}d=d.sibling}if(!c){for(d=r.child;d;){if(d===t){c=!0,t=r,a=l;break}if(d===a){c=!0,a=r,t=l;break}d=d.sibling}if(!c)throw Error(u(189))}}if(t.alternate!==a)throw Error(u(190))}if(t.tag!==3)throw Error(u(188));return t.stateNode.current===t?e:n}function $(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=$(e),n!==null)return n;e=e.sibling}return null}var V=Array.isArray,U=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,re={pending:!1,data:null,method:null,action:null},J=[],on=-1;function fe(e){return{current:e}}function Le(e){0>on||(e.current=J[on],J[on]=null,on--)}function je(e,n){on++,J[on]=e.current,e.current=n}var Hn=fe(null),Ia=fe(null),ft=fe(null),oi=fe(null);function ui(e,n){switch(je(ft,n),je(Ia,e),je(Hn,null),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)&&(n=n.namespaceURI)?$d(n):0;break;default:if(e=e===8?n.parentNode:n,n=e.tagName,e=e.namespaceURI)e=$d(e),n=Gd(e,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}Le(Hn),je(Hn,n)}function ua(){Le(Hn),Le(Ia),Le(ft)}function Cr(e){e.memoizedState!==null&&je(oi,e);var n=Hn.current,t=Gd(n,e.type);n!==t&&(je(Ia,e),je(Hn,t))}function si(e){Ia.current===e&&(Le(Hn),Le(Ia)),oi.current===e&&(Le(oi),Gl._currentValue=re)}var qr=Object.prototype.hasOwnProperty,Ur=s.unstable_scheduleCallback,Nr=s.unstable_cancelCallback,Ap=s.unstable_shouldYield,Tp=s.unstable_requestPaint,Bn=s.unstable_now,Dp=s.unstable_getCurrentPriorityLevel,Ms=s.unstable_ImmediatePriority,_s=s.unstable_UserBlockingPriority,ci=s.unstable_NormalPriority,Op=s.unstable_LowPriority,Cs=s.unstable_IdlePriority,Mp=s.log,_p=s.unstable_setDisableYieldValue,el=null,pn=null;function Cp(e){if(pn&&typeof pn.onCommitFiberRoot=="function")try{pn.onCommitFiberRoot(el,e,void 0,(e.current.flags&128)===128)}catch{}}function dt(e){if(typeof Mp=="function"&&_p(e),pn&&typeof pn.setStrictMode=="function")try{pn.setStrictMode(el,e)}catch{}}var hn=Math.clz32?Math.clz32:Np,qp=Math.log,Up=Math.LN2;function Np(e){return e>>>=0,e===0?32:31-(qp(e)/Up|0)|0}var fi=128,di=4194304;function Lt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function mi(e,n){var t=e.pendingLanes;if(t===0)return 0;var a=0,l=e.suspendedLanes,r=e.pingedLanes,c=e.warmLanes;e=e.finishedLanes!==0;var d=t&134217727;return d!==0?(t=d&~l,t!==0?a=Lt(t):(r&=d,r!==0?a=Lt(r):e||(c=d&~c,c!==0&&(a=Lt(c))))):(d=t&~l,d!==0?a=Lt(d):r!==0?a=Lt(r):e||(c=t&~c,c!==0&&(a=Lt(c)))),a===0?0:n!==0&&n!==a&&(n&l)===0&&(l=a&-a,c=n&-n,l>=c||l===32&&(c&4194176)!==0)?n:a}function nl(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Lp(e,n){switch(e){case 1:case 2:case 4:case 8:return n+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qs(){var e=fi;return fi<<=1,(fi&4194176)===0&&(fi=128),e}function Us(){var e=di;return di<<=1,(di&62914560)===0&&(di=4194304),e}function Lr(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function tl(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Hp(e,n,t,a,l,r){var c=e.pendingLanes;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=t,e.entangledLanes&=t,e.errorRecoveryDisabledLanes&=t,e.shellSuspendCounter=0;var d=e.entanglements,p=e.expirationTimes,y=e.hiddenUpdates;for(t=c&~t;0<t;){var j=31-hn(t),D=1<<j;d[j]=0,p[j]=-1;var z=y[j];if(z!==null)for(y[j]=null,j=0;j<z.length;j++){var E=z[j];E!==null&&(E.lane&=-536870913)}t&=~D}a!==0&&Ns(e,a,0),r!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=r&~(c&~n))}function Ns(e,n,t){e.pendingLanes|=n,e.suspendedLanes&=~n;var a=31-hn(n);e.entangledLanes|=n,e.entanglements[a]=e.entanglements[a]|1073741824|t&4194218}function Ls(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var a=31-hn(t),l=1<<a;l&n|e[a]&n&&(e[a]|=n),t&=~l}}function Hs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Bs(){var e=U.p;return e!==0?e:(e=window.event,e===void 0?32:sm(e.type))}function Bp(e,n){var t=U.p;try{return U.p=e,n()}finally{U.p=t}}var mt=Math.random().toString(36).slice(2),an="__reactFiber$"+mt,fn="__reactProps$"+mt,sa="__reactContainer$"+mt,Hr="__reactEvents$"+mt,Fp="__reactListeners$"+mt,Vp="__reactHandles$"+mt,Fs="__reactResources$"+mt,al="__reactMarker$"+mt;function Br(e){delete e[an],delete e[fn],delete e[Hr],delete e[Fp],delete e[Vp]}function Ht(e){var n=e[an];if(n)return n;for(var t=e.parentNode;t;){if(n=t[sa]||t[an]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Xd(e);e!==null;){if(t=e[an])return t;e=Xd(e)}return n}e=t,t=e.parentNode}return null}function ca(e){if(e=e[an]||e[sa]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function ll(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(u(33))}function fa(e){var n=e[Fs];return n||(n=e[Fs]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Ze(e){e[al]=!0}var Vs=new Set,Ys={};function Bt(e,n){da(e,n),da(e+"Capture",n)}function da(e,n){for(Ys[e]=n,e=0;e<n.length;e++)Vs.add(n[e])}var Zn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Yp=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),$s={},Gs={};function $p(e){return qr.call(Gs,e)?!0:qr.call($s,e)?!1:Yp.test(e)?Gs[e]=!0:($s[e]=!0,!1)}function pi(e,n,t){if($p(n))if(t===null)e.removeAttribute(n);else{switch(typeof t){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var a=n.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+t)}}function hi(e,n,t){if(t===null)e.removeAttribute(n);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+t)}}function Qn(e,n,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttributeNS(n,t,""+a)}}function kn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Zs(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Gp(e){var n=Zs(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),a=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var l=t.get,r=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return l.call(this)},set:function(c){a=""+c,r.call(this,c)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return a},setValue:function(c){a=""+c},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function vi(e){e._valueTracker||(e._valueTracker=Gp(e))}function Qs(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),a="";return e&&(a=Zs(e)?e.checked?"true":"false":e.value),e=a,e!==t?(n.setValue(e),!0):!1}function gi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Zp=/[\n"\\]/g;function Rn(e){return e.replace(Zp,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Fr(e,n,t,a,l,r,c,d){e.name="",c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.type=c:e.removeAttribute("type"),n!=null?c==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+kn(n)):e.value!==""+kn(n)&&(e.value=""+kn(n)):c!=="submit"&&c!=="reset"||e.removeAttribute("value"),n!=null?Vr(e,c,kn(n)):t!=null?Vr(e,c,kn(t)):a!=null&&e.removeAttribute("value"),l==null&&r!=null&&(e.defaultChecked=!!r),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?e.name=""+kn(d):e.removeAttribute("name")}function Xs(e,n,t,a,l,r,c,d){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),n!=null||t!=null){if(!(r!=="submit"&&r!=="reset"||n!=null))return;t=t!=null?""+kn(t):"",n=n!=null?""+kn(n):t,d||n===e.value||(e.value=n),e.defaultValue=n}a=a??l,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=d?e.checked:!!a,e.defaultChecked=!!a,c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.name=c)}function Vr(e,n,t){n==="number"&&gi(e.ownerDocument)===e||e.defaultValue===""+t||(e.defaultValue=""+t)}function ma(e,n,t,a){if(e=e.options,n){n={};for(var l=0;l<t.length;l++)n["$"+t[l]]=!0;for(t=0;t<e.length;t++)l=n.hasOwnProperty("$"+e[t].value),e[t].selected!==l&&(e[t].selected=l),l&&a&&(e[t].defaultSelected=!0)}else{for(t=""+kn(t),n=null,l=0;l<e.length;l++){if(e[l].value===t){e[l].selected=!0,a&&(e[l].defaultSelected=!0);return}n!==null||e[l].disabled||(n=e[l])}n!==null&&(n.selected=!0)}}function Ws(e,n,t){if(n!=null&&(n=""+kn(n),n!==e.value&&(e.value=n),t==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=t!=null?""+kn(t):""}function Ks(e,n,t,a){if(n==null){if(a!=null){if(t!=null)throw Error(u(92));if(V(a)){if(1<a.length)throw Error(u(93));a=a[0]}t=a}t==null&&(t=""),n=t}t=kn(n),e.defaultValue=t,a=e.textContent,a===t&&a!==""&&a!==null&&(e.value=a)}function pa(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Qp=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Js(e,n,t){var a=n.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?a?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":a?e.setProperty(n,t):typeof t!="number"||t===0||Qp.has(n)?n==="float"?e.cssFloat=t:e[n]=(""+t).trim():e[n]=t+"px"}function Ps(e,n,t){if(n!=null&&typeof n!="object")throw Error(u(62));if(e=e.style,t!=null){for(var a in t)!t.hasOwnProperty(a)||n!=null&&n.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var l in n)a=n[l],n.hasOwnProperty(l)&&t[l]!==a&&Js(e,l,a)}else for(var r in n)n.hasOwnProperty(r)&&Js(e,r,n[r])}function Yr(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xp=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Wp=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function bi(e){return Wp.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var $r=null;function Gr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ha=null,va=null;function Is(e){var n=ca(e);if(n&&(e=n.stateNode)){var t=e[fn]||null;e:switch(e=n.stateNode,n.type){case"input":if(Fr(e,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+Rn(""+n)+'"][type="radio"]'),n=0;n<t.length;n++){var a=t[n];if(a!==e&&a.form===e.form){var l=a[fn]||null;if(!l)throw Error(u(90));Fr(a,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(n=0;n<t.length;n++)a=t[n],a.form===e.form&&Qs(a)}break e;case"textarea":Ws(e,t.value,t.defaultValue);break e;case"select":n=t.value,n!=null&&ma(e,!!t.multiple,n,!1)}}}var Zr=!1;function ec(e,n,t){if(Zr)return e(n,t);Zr=!0;try{var a=e(n);return a}finally{if(Zr=!1,(ha!==null||va!==null)&&(nr(),ha&&(n=ha,e=va,va=ha=null,Is(n),e)))for(n=0;n<e.length;n++)Is(e[n])}}function il(e,n){var t=e.stateNode;if(t===null)return null;var a=t[fn]||null;if(a===null)return null;t=a[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(u(231,n,typeof t));return t}var Qr=!1;if(Zn)try{var rl={};Object.defineProperty(rl,"passive",{get:function(){Qr=!0}}),window.addEventListener("test",rl,rl),window.removeEventListener("test",rl,rl)}catch{Qr=!1}var pt=null,Xr=null,yi=null;function nc(){if(yi)return yi;var e,n=Xr,t=n.length,a,l="value"in pt?pt.value:pt.textContent,r=l.length;for(e=0;e<t&&n[e]===l[e];e++);var c=t-e;for(a=1;a<=c&&n[t-a]===l[r-a];a++);return yi=l.slice(e,1<a?1-a:void 0)}function wi(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ki(){return!0}function tc(){return!1}function dn(e){function n(t,a,l,r,c){this._reactName=t,this._targetInst=l,this.type=a,this.nativeEvent=r,this.target=c,this.currentTarget=null;for(var d in e)e.hasOwnProperty(d)&&(t=e[d],this[d]=t?t(r):r[d]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?ki:tc,this.isPropagationStopped=tc,this}return M(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=ki)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=ki)},persist:function(){},isPersistent:ki}),n}var Ft={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ri=dn(Ft),ol=M({},Ft,{view:0,detail:0}),Kp=dn(ol),Wr,Kr,ul,Si=M({},ol,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Pr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ul&&(ul&&e.type==="mousemove"?(Wr=e.screenX-ul.screenX,Kr=e.screenY-ul.screenY):Kr=Wr=0,ul=e),Wr)},movementY:function(e){return"movementY"in e?e.movementY:Kr}}),ac=dn(Si),Jp=M({},Si,{dataTransfer:0}),Pp=dn(Jp),Ip=M({},ol,{relatedTarget:0}),Jr=dn(Ip),eh=M({},Ft,{animationName:0,elapsedTime:0,pseudoElement:0}),nh=dn(eh),th=M({},Ft,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ah=dn(th),lh=M({},Ft,{data:0}),lc=dn(lh),ih={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},oh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function uh(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=oh[e])?!!n[e]:!1}function Pr(){return uh}var sh=M({},ol,{key:function(e){if(e.key){var n=ih[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=wi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?rh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Pr,charCode:function(e){return e.type==="keypress"?wi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?wi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ch=dn(sh),fh=M({},Si,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ic=dn(fh),dh=M({},ol,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Pr}),mh=dn(dh),ph=M({},Ft,{propertyName:0,elapsedTime:0,pseudoElement:0}),hh=dn(ph),vh=M({},Si,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),gh=dn(vh),bh=M({},Ft,{newState:0,oldState:0}),yh=dn(bh),wh=[9,13,27,32],Ir=Zn&&"CompositionEvent"in window,sl=null;Zn&&"documentMode"in document&&(sl=document.documentMode);var kh=Zn&&"TextEvent"in window&&!sl,rc=Zn&&(!Ir||sl&&8<sl&&11>=sl),oc=" ",uc=!1;function sc(e,n){switch(e){case"keyup":return wh.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function cc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ga=!1;function Rh(e,n){switch(e){case"compositionend":return cc(n);case"keypress":return n.which!==32?null:(uc=!0,oc);case"textInput":return e=n.data,e===oc&&uc?null:e;default:return null}}function Sh(e,n){if(ga)return e==="compositionend"||!Ir&&sc(e,n)?(e=nc(),yi=Xr=pt=null,ga=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return rc&&n.locale!=="ko"?null:n.data;default:return null}}var zh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!zh[e.type]:n==="textarea"}function dc(e,n,t,a){ha?va?va.push(a):va=[a]:ha=a,n=rr(n,"onChange"),0<n.length&&(t=new Ri("onChange","change",null,t,a),e.push({event:t,listeners:n}))}var cl=null,fl=null;function xh(e){Hd(e,0)}function zi(e){var n=ll(e);if(Qs(n))return e}function mc(e,n){if(e==="change")return n}var pc=!1;if(Zn){var eo;if(Zn){var no="oninput"in document;if(!no){var hc=document.createElement("div");hc.setAttribute("oninput","return;"),no=typeof hc.oninput=="function"}eo=no}else eo=!1;pc=eo&&(!document.documentMode||9<document.documentMode)}function vc(){cl&&(cl.detachEvent("onpropertychange",gc),fl=cl=null)}function gc(e){if(e.propertyName==="value"&&zi(fl)){var n=[];dc(n,fl,e,Gr(e)),ec(xh,n)}}function Eh(e,n,t){e==="focusin"?(vc(),cl=n,fl=t,cl.attachEvent("onpropertychange",gc)):e==="focusout"&&vc()}function jh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return zi(fl)}function Ah(e,n){if(e==="click")return zi(n)}function Th(e,n){if(e==="input"||e==="change")return zi(n)}function Dh(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var vn=typeof Object.is=="function"?Object.is:Dh;function dl(e,n){if(vn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),a=Object.keys(n);if(t.length!==a.length)return!1;for(a=0;a<t.length;a++){var l=t[a];if(!qr.call(n,l)||!vn(e[l],n[l]))return!1}return!0}function bc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function yc(e,n){var t=bc(e);e=0;for(var a;t;){if(t.nodeType===3){if(a=e+t.textContent.length,e<=n&&a>=n)return{node:t,offset:n-e};e=a}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=bc(t)}}function wc(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?wc(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function kc(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=gi(e.document);n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=gi(e.document)}return n}function to(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Oh(e,n){var t=kc(n);n=e.focusedElem;var a=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&wc(n.ownerDocument.documentElement,n)){if(a!==null&&to(n)){if(e=a.start,t=a.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var l=n.textContent.length,r=Math.min(a.start,l);a=a.end===void 0?r:Math.min(a.end,l),!t.extend&&r>a&&(l=a,a=r,r=l),l=yc(n,r);var c=yc(n,a);l&&c&&(t.rangeCount!==1||t.anchorNode!==l.node||t.anchorOffset!==l.offset||t.focusNode!==c.node||t.focusOffset!==c.offset)&&(e=e.createRange(),e.setStart(l.node,l.offset),t.removeAllRanges(),r>a?(t.addRange(e),t.extend(c.node,c.offset)):(e.setEnd(c.node,c.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Mh=Zn&&"documentMode"in document&&11>=document.documentMode,ba=null,ao=null,ml=null,lo=!1;function Rc(e,n,t){var a=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;lo||ba==null||ba!==gi(a)||(a=ba,"selectionStart"in a&&to(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),ml&&dl(ml,a)||(ml=a,a=rr(ao,"onSelect"),0<a.length&&(n=new Ri("onSelect","select",null,n,t),e.push({event:n,listeners:a}),n.target=ba)))}function Vt(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var ya={animationend:Vt("Animation","AnimationEnd"),animationiteration:Vt("Animation","AnimationIteration"),animationstart:Vt("Animation","AnimationStart"),transitionrun:Vt("Transition","TransitionRun"),transitionstart:Vt("Transition","TransitionStart"),transitioncancel:Vt("Transition","TransitionCancel"),transitionend:Vt("Transition","TransitionEnd")},io={},Sc={};Zn&&(Sc=document.createElement("div").style,"AnimationEvent"in window||(delete ya.animationend.animation,delete ya.animationiteration.animation,delete ya.animationstart.animation),"TransitionEvent"in window||delete ya.transitionend.transition);function Yt(e){if(io[e])return io[e];if(!ya[e])return e;var n=ya[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Sc)return io[e]=n[t];return e}var zc=Yt("animationend"),xc=Yt("animationiteration"),Ec=Yt("animationstart"),_h=Yt("transitionrun"),Ch=Yt("transitionstart"),qh=Yt("transitioncancel"),jc=Yt("transitionend"),Ac=new Map,Tc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function Cn(e,n){Ac.set(e,n),Bt(n,[e])}var Sn=[],wa=0,ro=0;function xi(){for(var e=wa,n=ro=wa=0;n<e;){var t=Sn[n];Sn[n++]=null;var a=Sn[n];Sn[n++]=null;var l=Sn[n];Sn[n++]=null;var r=Sn[n];if(Sn[n++]=null,a!==null&&l!==null){var c=a.pending;c===null?l.next=l:(l.next=c.next,c.next=l),a.pending=l}r!==0&&Dc(t,l,r)}}function Ei(e,n,t,a){Sn[wa++]=e,Sn[wa++]=n,Sn[wa++]=t,Sn[wa++]=a,ro|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function oo(e,n,t,a){return Ei(e,n,t,a),ji(e)}function ht(e,n){return Ei(e,null,null,n),ji(e)}function Dc(e,n,t){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t);for(var l=!1,r=e.return;r!==null;)r.childLanes|=t,a=r.alternate,a!==null&&(a.childLanes|=t),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(l=!0)),e=r,r=r.return;l&&n!==null&&e.tag===3&&(r=e.stateNode,l=31-hn(t),r=r.hiddenUpdates,e=r[l],e===null?r[l]=[n]:e.push(n),n.lane=t|536870912)}function ji(e){if(50<Ll)throw Ll=0,pu=null,Error(u(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var ka={},Oc=new WeakMap;function zn(e,n){if(typeof e=="object"&&e!==null){var t=Oc.get(e);return t!==void 0?t:(n={value:e,source:n,stack:W(n)},Oc.set(e,n),n)}return{value:e,source:n,stack:W(n)}}var Ra=[],Sa=0,Ai=null,Ti=0,xn=[],En=0,$t=null,Xn=1,Wn="";function Gt(e,n){Ra[Sa++]=Ti,Ra[Sa++]=Ai,Ai=e,Ti=n}function Mc(e,n,t){xn[En++]=Xn,xn[En++]=Wn,xn[En++]=$t,$t=e;var a=Xn;e=Wn;var l=32-hn(a)-1;a&=~(1<<l),t+=1;var r=32-hn(n)+l;if(30<r){var c=l-l%5;r=(a&(1<<c)-1).toString(32),a>>=c,l-=c,Xn=1<<32-hn(n)+l|t<<l|a,Wn=r+e}else Xn=1<<r|t<<l|a,Wn=e}function uo(e){e.return!==null&&(Gt(e,1),Mc(e,1,0))}function so(e){for(;e===Ai;)Ai=Ra[--Sa],Ra[Sa]=null,Ti=Ra[--Sa],Ra[Sa]=null;for(;e===$t;)$t=xn[--En],xn[En]=null,Wn=xn[--En],xn[En]=null,Xn=xn[--En],xn[En]=null}var un=null,Pe=null,se=!1,qn=null,Fn=!1,co=Error(u(519));function Zt(e){var n=Error(u(418,""));throw vl(zn(n,e)),co}function _c(e){var n=e.stateNode,t=e.type,a=e.memoizedProps;switch(n[an]=e,n[fn]=a,t){case"dialog":le("cancel",n),le("close",n);break;case"iframe":case"object":case"embed":le("load",n);break;case"video":case"audio":for(t=0;t<Bl.length;t++)le(Bl[t],n);break;case"source":le("error",n);break;case"img":case"image":case"link":le("error",n),le("load",n);break;case"details":le("toggle",n);break;case"input":le("invalid",n),Xs(n,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0),vi(n);break;case"select":le("invalid",n);break;case"textarea":le("invalid",n),Ks(n,a.value,a.defaultValue,a.children),vi(n)}t=a.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||n.textContent===""+t||a.suppressHydrationWarning===!0||Yd(n.textContent,t)?(a.popover!=null&&(le("beforetoggle",n),le("toggle",n)),a.onScroll!=null&&le("scroll",n),a.onScrollEnd!=null&&le("scrollend",n),a.onClick!=null&&(n.onclick=or),n=!0):n=!1,n||Zt(e)}function Cc(e){for(un=e.return;un;)switch(un.tag){case 3:case 27:Fn=!0;return;case 5:case 13:Fn=!1;return;default:un=un.return}}function pl(e){if(e!==un)return!1;if(!se)return Cc(e),se=!0,!1;var n=!1,t;if((t=e.tag!==3&&e.tag!==27)&&((t=e.tag===5)&&(t=e.type,t=!(t!=="form"&&t!=="button")||Ou(e.type,e.memoizedProps)),t=!t),t&&(n=!0),n&&Pe&&Zt(e),Cc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(t=e.data,t==="/$"){if(n===0){Pe=Nn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++;e=e.nextSibling}Pe=null}}else Pe=un?Nn(e.stateNode.nextSibling):null;return!0}function hl(){Pe=un=null,se=!1}function vl(e){qn===null?qn=[e]:qn.push(e)}var gl=Error(u(460)),qc=Error(u(474)),fo={then:function(){}};function Uc(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Di(){}function Nc(e,n,t){switch(t=e[t],t===void 0?e.push(n):t!==n&&(n.then(Di,Di),n=t),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,e===gl?Error(u(483)):e;default:if(typeof n.status=="string")n.then(Di,Di);else{if(e=ke,e!==null&&100<e.shellSuspendCounter)throw Error(u(482));e=n,e.status="pending",e.then(function(a){if(n.status==="pending"){var l=n;l.status="fulfilled",l.value=a}},function(a){if(n.status==="pending"){var l=n;l.status="rejected",l.reason=a}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,e===gl?Error(u(483)):e}throw bl=n,gl}}var bl=null;function Lc(){if(bl===null)throw Error(u(459));var e=bl;return bl=null,e}var za=null,yl=0;function Oi(e){var n=yl;return yl+=1,za===null&&(za=[]),Nc(za,e,n)}function wl(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Mi(e,n){throw n.$$typeof===m?Error(u(525)):(e=Object.prototype.toString.call(n),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Hc(e){var n=e._init;return n(e._payload)}function Bc(e){function n(R,g){if(e){var S=R.deletions;S===null?(R.deletions=[g],R.flags|=16):S.push(g)}}function t(R,g){if(!e)return null;for(;g!==null;)n(R,g),g=g.sibling;return null}function a(R){for(var g=new Map;R!==null;)R.key!==null?g.set(R.key,R):g.set(R.index,R),R=R.sibling;return g}function l(R,g){return R=jt(R,g),R.index=0,R.sibling=null,R}function r(R,g,S){return R.index=S,e?(S=R.alternate,S!==null?(S=S.index,S<g?(R.flags|=33554434,g):S):(R.flags|=33554434,g)):(R.flags|=1048576,g)}function c(R){return e&&R.alternate===null&&(R.flags|=33554434),R}function d(R,g,S,A){return g===null||g.tag!==6?(g=ru(S,R.mode,A),g.return=R,g):(g=l(g,S),g.return=R,g)}function p(R,g,S,A){var N=S.type;return N===w?j(R,g,S.props.children,A,S.key):g!==null&&(g.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===xe&&Hc(N)===g.type)?(g=l(g,S.props),wl(g,S),g.return=R,g):(g=Ki(S.type,S.key,S.props,null,R.mode,A),wl(g,S),g.return=R,g)}function y(R,g,S,A){return g===null||g.tag!==4||g.stateNode.containerInfo!==S.containerInfo||g.stateNode.implementation!==S.implementation?(g=ou(S,R.mode,A),g.return=R,g):(g=l(g,S.children||[]),g.return=R,g)}function j(R,g,S,A,N){return g===null||g.tag!==7?(g=ta(S,R.mode,A,N),g.return=R,g):(g=l(g,S),g.return=R,g)}function D(R,g,S){if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return g=ru(""+g,R.mode,S),g.return=R,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case h:return S=Ki(g.type,g.key,g.props,null,R.mode,S),wl(S,g),S.return=R,S;case k:return g=ou(g,R.mode,S),g.return=R,g;case xe:var A=g._init;return g=A(g._payload),D(R,g,S)}if(V(g)||Me(g))return g=ta(g,R.mode,S,null),g.return=R,g;if(typeof g.then=="function")return D(R,Oi(g),S);if(g.$$typeof===F)return D(R,Qi(R,g),S);Mi(R,g)}return null}function z(R,g,S,A){var N=g!==null?g.key:null;if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return N!==null?null:d(R,g,""+S,A);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case h:return S.key===N?p(R,g,S,A):null;case k:return S.key===N?y(R,g,S,A):null;case xe:return N=S._init,S=N(S._payload),z(R,g,S,A)}if(V(S)||Me(S))return N!==null?null:j(R,g,S,A,null);if(typeof S.then=="function")return z(R,g,Oi(S),A);if(S.$$typeof===F)return z(R,g,Qi(R,S),A);Mi(R,S)}return null}function E(R,g,S,A,N){if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return R=R.get(S)||null,d(g,R,""+A,N);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case h:return R=R.get(A.key===null?S:A.key)||null,p(g,R,A,N);case k:return R=R.get(A.key===null?S:A.key)||null,y(g,R,A,N);case xe:var I=A._init;return A=I(A._payload),E(R,g,S,A,N)}if(V(A)||Me(A))return R=R.get(S)||null,j(g,R,A,N,null);if(typeof A.then=="function")return E(R,g,S,Oi(A),N);if(A.$$typeof===F)return E(R,g,S,Qi(g,A),N);Mi(g,A)}return null}function H(R,g,S,A){for(var N=null,I=null,B=g,Y=g=0,We=null;B!==null&&Y<S.length;Y++){B.index>Y?(We=B,B=null):We=B.sibling;var ce=z(R,B,S[Y],A);if(ce===null){B===null&&(B=We);break}e&&B&&ce.alternate===null&&n(R,B),g=r(ce,g,Y),I===null?N=ce:I.sibling=ce,I=ce,B=We}if(Y===S.length)return t(R,B),se&&Gt(R,Y),N;if(B===null){for(;Y<S.length;Y++)B=D(R,S[Y],A),B!==null&&(g=r(B,g,Y),I===null?N=B:I.sibling=B,I=B);return se&&Gt(R,Y),N}for(B=a(B);Y<S.length;Y++)We=E(B,R,Y,S[Y],A),We!==null&&(e&&We.alternate!==null&&B.delete(We.key===null?Y:We.key),g=r(We,g,Y),I===null?N=We:I.sibling=We,I=We);return e&&B.forEach(function(Ct){return n(R,Ct)}),se&&Gt(R,Y),N}function Z(R,g,S,A){if(S==null)throw Error(u(151));for(var N=null,I=null,B=g,Y=g=0,We=null,ce=S.next();B!==null&&!ce.done;Y++,ce=S.next()){B.index>Y?(We=B,B=null):We=B.sibling;var Ct=z(R,B,ce.value,A);if(Ct===null){B===null&&(B=We);break}e&&B&&Ct.alternate===null&&n(R,B),g=r(Ct,g,Y),I===null?N=Ct:I.sibling=Ct,I=Ct,B=We}if(ce.done)return t(R,B),se&&Gt(R,Y),N;if(B===null){for(;!ce.done;Y++,ce=S.next())ce=D(R,ce.value,A),ce!==null&&(g=r(ce,g,Y),I===null?N=ce:I.sibling=ce,I=ce);return se&&Gt(R,Y),N}for(B=a(B);!ce.done;Y++,ce=S.next())ce=E(B,R,Y,ce.value,A),ce!==null&&(e&&ce.alternate!==null&&B.delete(ce.key===null?Y:ce.key),g=r(ce,g,Y),I===null?N=ce:I.sibling=ce,I=ce);return e&&B.forEach(function(Wv){return n(R,Wv)}),se&&Gt(R,Y),N}function qe(R,g,S,A){if(typeof S=="object"&&S!==null&&S.type===w&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case h:e:{for(var N=S.key;g!==null;){if(g.key===N){if(N=S.type,N===w){if(g.tag===7){t(R,g.sibling),A=l(g,S.props.children),A.return=R,R=A;break e}}else if(g.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===xe&&Hc(N)===g.type){t(R,g.sibling),A=l(g,S.props),wl(A,S),A.return=R,R=A;break e}t(R,g);break}else n(R,g);g=g.sibling}S.type===w?(A=ta(S.props.children,R.mode,A,S.key),A.return=R,R=A):(A=Ki(S.type,S.key,S.props,null,R.mode,A),wl(A,S),A.return=R,R=A)}return c(R);case k:e:{for(N=S.key;g!==null;){if(g.key===N)if(g.tag===4&&g.stateNode.containerInfo===S.containerInfo&&g.stateNode.implementation===S.implementation){t(R,g.sibling),A=l(g,S.children||[]),A.return=R,R=A;break e}else{t(R,g);break}else n(R,g);g=g.sibling}A=ou(S,R.mode,A),A.return=R,R=A}return c(R);case xe:return N=S._init,S=N(S._payload),qe(R,g,S,A)}if(V(S))return H(R,g,S,A);if(Me(S)){if(N=Me(S),typeof N!="function")throw Error(u(150));return S=N.call(S),Z(R,g,S,A)}if(typeof S.then=="function")return qe(R,g,Oi(S),A);if(S.$$typeof===F)return qe(R,g,Qi(R,S),A);Mi(R,S)}return typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint"?(S=""+S,g!==null&&g.tag===6?(t(R,g.sibling),A=l(g,S),A.return=R,R=A):(t(R,g),A=ru(S,R.mode,A),A.return=R,R=A),c(R)):t(R,g)}return function(R,g,S,A){try{yl=0;var N=qe(R,g,S,A);return za=null,N}catch(B){if(B===gl)throw B;var I=Dn(29,B,null,R.mode);return I.lanes=A,I.return=R,I}finally{}}}var Qt=Bc(!0),Fc=Bc(!1),xa=fe(null),_i=fe(0);function Vc(e,n){e=rt,je(_i,e),je(xa,n),rt=e|n.baseLanes}function mo(){je(_i,rt),je(xa,xa.current)}function po(){rt=_i.current,Le(xa),Le(_i)}var jn=fe(null),Vn=null;function vt(e){var n=e.alternate;je($e,$e.current&1),je(jn,e),Vn===null&&(n===null||xa.current!==null||n.memoizedState!==null)&&(Vn=e)}function Yc(e){if(e.tag===22){if(je($e,$e.current),je(jn,e),Vn===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(Vn=e)}}else gt()}function gt(){je($e,$e.current),je(jn,jn.current)}function Kn(e){Le(jn),Vn===e&&(Vn=null),Le($e)}var $e=fe(0);function Ci(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Uh=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(t,a){e.push(a)}};this.abort=function(){n.aborted=!0,e.forEach(function(t){return t()})}},Nh=s.unstable_scheduleCallback,Lh=s.unstable_NormalPriority,Ge={$$typeof:F,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ho(){return{controller:new Uh,data:new Map,refCount:0}}function kl(e){e.refCount--,e.refCount===0&&Nh(Lh,function(){e.controller.abort()})}var Rl=null,vo=0,Ea=0,ja=null;function Hh(e,n){if(Rl===null){var t=Rl=[];vo=0,Ea=Ru(),ja={status:"pending",value:void 0,then:function(a){t.push(a)}}}return vo++,n.then($c,$c),n}function $c(){if(--vo===0&&Rl!==null){ja!==null&&(ja.status="fulfilled");var e=Rl;Rl=null,Ea=0,ja=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Bh(e,n){var t=[],a={status:"pending",value:null,reason:null,then:function(l){t.push(l)}};return e.then(function(){a.status="fulfilled",a.value=n;for(var l=0;l<t.length;l++)(0,t[l])(n)},function(l){for(a.status="rejected",a.reason=l,l=0;l<t.length;l++)(0,t[l])(void 0)}),a}var Gc=x.S;x.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&Hh(e,n),Gc!==null&&Gc(e,n)};var Xt=fe(null);function go(){var e=Xt.current;return e!==null?e:ke.pooledCache}function qi(e,n){n===null?je(Xt,Xt.current):je(Xt,n.pool)}function Zc(){var e=go();return e===null?null:{parent:Ge._currentValue,pool:e}}var bt=0,P=null,he=null,He=null,Ui=!1,Aa=!1,Wt=!1,Ni=0,Sl=0,Ta=null,Fh=0;function Ue(){throw Error(u(321))}function bo(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!vn(e[t],n[t]))return!1;return!0}function yo(e,n,t,a,l,r){return bt=r,P=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,x.H=e===null||e.memoizedState===null?Kt:yt,Wt=!1,r=t(a,l),Wt=!1,Aa&&(r=Xc(n,t,a,l)),Qc(e),r}function Qc(e){x.H=Yn;var n=he!==null&&he.next!==null;if(bt=0,He=he=P=null,Ui=!1,Sl=0,Ta=null,n)throw Error(u(300));e===null||Qe||(e=e.dependencies,e!==null&&Zi(e)&&(Qe=!0))}function Xc(e,n,t,a){P=e;var l=0;do{if(Aa&&(Ta=null),Sl=0,Aa=!1,25<=l)throw Error(u(301));if(l+=1,He=he=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}x.H=Jt,r=n(t,a)}while(Aa);return r}function Vh(){var e=x.H,n=e.useState()[0];return n=typeof n.then=="function"?zl(n):n,e=e.useState()[0],(he!==null?he.memoizedState:null)!==e&&(P.flags|=1024),n}function wo(){var e=Ni!==0;return Ni=0,e}function ko(e,n,t){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~t}function Ro(e){if(Ui){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Ui=!1}bt=0,He=he=P=null,Aa=!1,Sl=Ni=0,Ta=null}function mn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return He===null?P.memoizedState=He=e:He=He.next=e,He}function Be(){if(he===null){var e=P.alternate;e=e!==null?e.memoizedState:null}else e=he.next;var n=He===null?P.memoizedState:He.next;if(n!==null)He=n,he=e;else{if(e===null)throw P.alternate===null?Error(u(467)):Error(u(310));he=e,e={memoizedState:he.memoizedState,baseState:he.baseState,baseQueue:he.baseQueue,queue:he.queue,next:null},He===null?P.memoizedState=He=e:He=He.next=e}return He}var Li;Li=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function zl(e){var n=Sl;return Sl+=1,Ta===null&&(Ta=[]),e=Nc(Ta,e,n),n=P,(He===null?n.memoizedState:He.next)===null&&(n=n.alternate,x.H=n===null||n.memoizedState===null?Kt:yt),e}function Hi(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return zl(e);if(e.$$typeof===F)return ln(e)}throw Error(u(438,String(e)))}function So(e){var n=null,t=P.updateQueue;if(t!==null&&(n=t.memoCache),n==null){var a=P.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(n={data:a.data.map(function(l){return l.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),t===null&&(t=Li(),P.updateQueue=t),t.memoCache=n,t=n.data[n.index],t===void 0)for(t=n.data[n.index]=Array(e),a=0;a<e;a++)t[a]=ie;return n.index++,t}function Jn(e,n){return typeof n=="function"?n(e):n}function Bi(e){var n=Be();return zo(n,he,e)}function zo(e,n,t){var a=e.queue;if(a===null)throw Error(u(311));a.lastRenderedReducer=t;var l=e.baseQueue,r=a.pending;if(r!==null){if(l!==null){var c=l.next;l.next=r.next,r.next=c}n.baseQueue=l=r,a.pending=null}if(r=e.baseState,l===null)e.memoizedState=r;else{n=l.next;var d=c=null,p=null,y=n,j=!1;do{var D=y.lane&-536870913;if(D!==y.lane?(oe&D)===D:(bt&D)===D){var z=y.revertLane;if(z===0)p!==null&&(p=p.next={lane:0,revertLane:0,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null}),D===Ea&&(j=!0);else if((bt&z)===z){y=y.next,z===Ea&&(j=!0);continue}else D={lane:0,revertLane:y.revertLane,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null},p===null?(d=p=D,c=r):p=p.next=D,P.lanes|=z,At|=z;D=y.action,Wt&&t(r,D),r=y.hasEagerState?y.eagerState:t(r,D)}else z={lane:D,revertLane:y.revertLane,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null},p===null?(d=p=z,c=r):p=p.next=z,P.lanes|=D,At|=D;y=y.next}while(y!==null&&y!==n);if(p===null?c=r:p.next=d,!vn(r,e.memoizedState)&&(Qe=!0,j&&(t=ja,t!==null)))throw t;e.memoizedState=r,e.baseState=c,e.baseQueue=p,a.lastRenderedState=r}return l===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function xo(e){var n=Be(),t=n.queue;if(t===null)throw Error(u(311));t.lastRenderedReducer=e;var a=t.dispatch,l=t.pending,r=n.memoizedState;if(l!==null){t.pending=null;var c=l=l.next;do r=e(r,c.action),c=c.next;while(c!==l);vn(r,n.memoizedState)||(Qe=!0),n.memoizedState=r,n.baseQueue===null&&(n.baseState=r),t.lastRenderedState=r}return[r,a]}function Wc(e,n,t){var a=P,l=Be(),r=se;if(r){if(t===void 0)throw Error(u(407));t=t()}else t=n();var c=!vn((he||l).memoizedState,t);if(c&&(l.memoizedState=t,Qe=!0),l=l.queue,Ao(Pc.bind(null,a,l,e),[e]),l.getSnapshot!==n||c||He!==null&&He.memoizedState.tag&1){if(a.flags|=2048,Da(9,Jc.bind(null,a,l,t,n),{destroy:void 0},null),ke===null)throw Error(u(349));r||(bt&60)!==0||Kc(a,n,t)}return t}function Kc(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=P.updateQueue,n===null?(n=Li(),P.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Jc(e,n,t,a){n.value=t,n.getSnapshot=a,Ic(n)&&ef(e)}function Pc(e,n,t){return t(function(){Ic(n)&&ef(e)})}function Ic(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!vn(e,t)}catch{return!0}}function ef(e){var n=ht(e,2);n!==null&&sn(n,e,2)}function Eo(e){var n=mn();if(typeof e=="function"){var t=e;if(e=t(),Wt){dt(!0);try{t()}finally{dt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jn,lastRenderedState:e},n}function nf(e,n,t,a){return e.baseState=t,zo(e,he,typeof a=="function"?a:Jn)}function Yh(e,n,t,a,l){if(Yi(e))throw Error(u(485));if(e=n.action,e!==null){var r={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(c){r.listeners.push(c)}};x.T!==null?t(!0):r.isTransition=!1,a(r),t=n.pending,t===null?(r.next=n.pending=r,tf(n,r)):(r.next=t.next,n.pending=t.next=r)}}function tf(e,n){var t=n.action,a=n.payload,l=e.state;if(n.isTransition){var r=x.T,c={};x.T=c;try{var d=t(l,a),p=x.S;p!==null&&p(c,d),af(e,n,d)}catch(y){jo(e,n,y)}finally{x.T=r}}else try{r=t(l,a),af(e,n,r)}catch(y){jo(e,n,y)}}function af(e,n,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(a){lf(e,n,a)},function(a){return jo(e,n,a)}):lf(e,n,t)}function lf(e,n,t){n.status="fulfilled",n.value=t,rf(n),e.state=t,n=e.pending,n!==null&&(t=n.next,t===n?e.pending=null:(t=t.next,n.next=t,tf(e,t)))}function jo(e,n,t){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do n.status="rejected",n.reason=t,rf(n),n=n.next;while(n!==a)}e.action=null}function rf(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function of(e,n){return n}function uf(e,n){if(se){var t=ke.formState;if(t!==null){e:{var a=P;if(se){if(Pe){n:{for(var l=Pe,r=Fn;l.nodeType!==8;){if(!r){l=null;break n}if(l=Nn(l.nextSibling),l===null){l=null;break n}}r=l.data,l=r==="F!"||r==="F"?l:null}if(l){Pe=Nn(l.nextSibling),a=l.data==="F!";break e}}Zt(a)}a=!1}a&&(n=t[0])}}return t=mn(),t.memoizedState=t.baseState=n,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:of,lastRenderedState:n},t.queue=a,t=Ef.bind(null,P,a),a.dispatch=t,a=Eo(!1),r=_o.bind(null,P,!1,a.queue),a=mn(),l={state:n,dispatch:null,action:e,pending:null},a.queue=l,t=Yh.bind(null,P,l,r,t),l.dispatch=t,a.memoizedState=e,[n,t,!1]}function sf(e){var n=Be();return cf(n,he,e)}function cf(e,n,t){n=zo(e,n,of)[0],e=Bi(Jn)[0],n=typeof n=="object"&&n!==null&&typeof n.then=="function"?zl(n):n;var a=Be(),l=a.queue,r=l.dispatch;return t!==a.memoizedState&&(P.flags|=2048,Da(9,$h.bind(null,l,t),{destroy:void 0},null)),[n,r,e]}function $h(e,n){e.action=n}function ff(e){var n=Be(),t=he;if(t!==null)return cf(n,t,e);Be(),n=n.memoizedState,t=Be();var a=t.queue.dispatch;return t.memoizedState=e,[n,a,!1]}function Da(e,n,t,a){return e={tag:e,create:n,inst:t,deps:a,next:null},n=P.updateQueue,n===null&&(n=Li(),P.updateQueue=n),t=n.lastEffect,t===null?n.lastEffect=e.next=e:(a=t.next,t.next=e,e.next=a,n.lastEffect=e),e}function df(){return Be().memoizedState}function Fi(e,n,t,a){var l=mn();P.flags|=e,l.memoizedState=Da(1|n,t,{destroy:void 0},a===void 0?null:a)}function Vi(e,n,t,a){var l=Be();a=a===void 0?null:a;var r=l.memoizedState.inst;he!==null&&a!==null&&bo(a,he.memoizedState.deps)?l.memoizedState=Da(n,t,r,a):(P.flags|=e,l.memoizedState=Da(1|n,t,r,a))}function mf(e,n){Fi(8390656,8,e,n)}function Ao(e,n){Vi(2048,8,e,n)}function pf(e,n){return Vi(4,2,e,n)}function hf(e,n){return Vi(4,4,e,n)}function vf(e,n){if(typeof n=="function"){e=e();var t=n(e);return function(){typeof t=="function"?t():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function gf(e,n,t){t=t!=null?t.concat([e]):null,Vi(4,4,vf.bind(null,n,e),t)}function To(){}function bf(e,n){var t=Be();n=n===void 0?null:n;var a=t.memoizedState;return n!==null&&bo(n,a[1])?a[0]:(t.memoizedState=[e,n],e)}function yf(e,n){var t=Be();n=n===void 0?null:n;var a=t.memoizedState;if(n!==null&&bo(n,a[1]))return a[0];if(a=e(),Wt){dt(!0);try{e()}finally{dt(!1)}}return t.memoizedState=[a,n],a}function Do(e,n,t){return t===void 0||(bt&1073741824)!==0?e.memoizedState=n:(e.memoizedState=t,e=kd(),P.lanes|=e,At|=e,t)}function wf(e,n,t,a){return vn(t,n)?t:xa.current!==null?(e=Do(e,t,a),vn(e,n)||(Qe=!0),e):(bt&42)===0?(Qe=!0,e.memoizedState=t):(e=kd(),P.lanes|=e,At|=e,n)}function kf(e,n,t,a,l){var r=U.p;U.p=r!==0&&8>r?r:8;var c=x.T,d={};x.T=d,_o(e,!1,n,t);try{var p=l(),y=x.S;if(y!==null&&y(d,p),p!==null&&typeof p=="object"&&typeof p.then=="function"){var j=Bh(p,a);xl(e,n,j,wn(e))}else xl(e,n,a,wn(e))}catch(D){xl(e,n,{then:function(){},status:"rejected",reason:D},wn())}finally{U.p=r,x.T=c}}function Gh(){}function Oo(e,n,t,a){if(e.tag!==5)throw Error(u(476));var l=Rf(e).queue;kf(e,l,n,re,t===null?Gh:function(){return Sf(e),t(a)})}function Rf(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:re,baseState:re,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jn,lastRenderedState:re},next:null};var t={};return n.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jn,lastRenderedState:t},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Sf(e){var n=Rf(e).next.queue;xl(e,n,{},wn())}function Mo(){return ln(Gl)}function zf(){return Be().memoizedState}function xf(){return Be().memoizedState}function Zh(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var t=wn();e=Rt(t);var a=St(n,e,t);a!==null&&(sn(a,n,t),Al(a,n,t)),n={cache:ho()},e.payload=n;return}n=n.return}}function Qh(e,n,t){var a=wn();t={lane:a,revertLane:0,action:t,hasEagerState:!1,eagerState:null,next:null},Yi(e)?jf(n,t):(t=oo(e,n,t,a),t!==null&&(sn(t,e,a),Af(t,n,a)))}function Ef(e,n,t){var a=wn();xl(e,n,t,a)}function xl(e,n,t,a){var l={lane:a,revertLane:0,action:t,hasEagerState:!1,eagerState:null,next:null};if(Yi(e))jf(n,l);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=n.lastRenderedReducer,r!==null))try{var c=n.lastRenderedState,d=r(c,t);if(l.hasEagerState=!0,l.eagerState=d,vn(d,c))return Ei(e,n,l,0),ke===null&&xi(),!1}catch{}finally{}if(t=oo(e,n,l,a),t!==null)return sn(t,e,a),Af(t,n,a),!0}return!1}function _o(e,n,t,a){if(a={lane:2,revertLane:Ru(),action:a,hasEagerState:!1,eagerState:null,next:null},Yi(e)){if(n)throw Error(u(479))}else n=oo(e,t,a,2),n!==null&&sn(n,e,2)}function Yi(e){var n=e.alternate;return e===P||n!==null&&n===P}function jf(e,n){Aa=Ui=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Af(e,n,t){if((t&4194176)!==0){var a=n.lanes;a&=e.pendingLanes,t|=a,n.lanes=t,Ls(e,t)}}var Yn={readContext:ln,use:Hi,useCallback:Ue,useContext:Ue,useEffect:Ue,useImperativeHandle:Ue,useLayoutEffect:Ue,useInsertionEffect:Ue,useMemo:Ue,useReducer:Ue,useRef:Ue,useState:Ue,useDebugValue:Ue,useDeferredValue:Ue,useTransition:Ue,useSyncExternalStore:Ue,useId:Ue};Yn.useCacheRefresh=Ue,Yn.useMemoCache=Ue,Yn.useHostTransitionStatus=Ue,Yn.useFormState=Ue,Yn.useActionState=Ue,Yn.useOptimistic=Ue;var Kt={readContext:ln,use:Hi,useCallback:function(e,n){return mn().memoizedState=[e,n===void 0?null:n],e},useContext:ln,useEffect:mf,useImperativeHandle:function(e,n,t){t=t!=null?t.concat([e]):null,Fi(4194308,4,vf.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Fi(4194308,4,e,n)},useInsertionEffect:function(e,n){Fi(4,2,e,n)},useMemo:function(e,n){var t=mn();n=n===void 0?null:n;var a=e();if(Wt){dt(!0);try{e()}finally{dt(!1)}}return t.memoizedState=[a,n],a},useReducer:function(e,n,t){var a=mn();if(t!==void 0){var l=t(n);if(Wt){dt(!0);try{t(n)}finally{dt(!1)}}}else l=n;return a.memoizedState=a.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},a.queue=e,e=e.dispatch=Qh.bind(null,P,e),[a.memoizedState,e]},useRef:function(e){var n=mn();return e={current:e},n.memoizedState=e},useState:function(e){e=Eo(e);var n=e.queue,t=Ef.bind(null,P,n);return n.dispatch=t,[e.memoizedState,t]},useDebugValue:To,useDeferredValue:function(e,n){var t=mn();return Do(t,e,n)},useTransition:function(){var e=Eo(!1);return e=kf.bind(null,P,e.queue,!0,!1),mn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,t){var a=P,l=mn();if(se){if(t===void 0)throw Error(u(407));t=t()}else{if(t=n(),ke===null)throw Error(u(349));(oe&60)!==0||Kc(a,n,t)}l.memoizedState=t;var r={value:t,getSnapshot:n};return l.queue=r,mf(Pc.bind(null,a,r,e),[e]),a.flags|=2048,Da(9,Jc.bind(null,a,r,t,n),{destroy:void 0},null),t},useId:function(){var e=mn(),n=ke.identifierPrefix;if(se){var t=Wn,a=Xn;t=(a&~(1<<32-hn(a)-1)).toString(32)+t,n=":"+n+"R"+t,t=Ni++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=Fh++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},useCacheRefresh:function(){return mn().memoizedState=Zh.bind(null,P)}};Kt.useMemoCache=So,Kt.useHostTransitionStatus=Mo,Kt.useFormState=uf,Kt.useActionState=uf,Kt.useOptimistic=function(e){var n=mn();n.memoizedState=n.baseState=e;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=t,n=_o.bind(null,P,!0,t),t.dispatch=n,[e,n]};var yt={readContext:ln,use:Hi,useCallback:bf,useContext:ln,useEffect:Ao,useImperativeHandle:gf,useInsertionEffect:pf,useLayoutEffect:hf,useMemo:yf,useReducer:Bi,useRef:df,useState:function(){return Bi(Jn)},useDebugValue:To,useDeferredValue:function(e,n){var t=Be();return wf(t,he.memoizedState,e,n)},useTransition:function(){var e=Bi(Jn)[0],n=Be().memoizedState;return[typeof e=="boolean"?e:zl(e),n]},useSyncExternalStore:Wc,useId:zf};yt.useCacheRefresh=xf,yt.useMemoCache=So,yt.useHostTransitionStatus=Mo,yt.useFormState=sf,yt.useActionState=sf,yt.useOptimistic=function(e,n){var t=Be();return nf(t,he,e,n)};var Jt={readContext:ln,use:Hi,useCallback:bf,useContext:ln,useEffect:Ao,useImperativeHandle:gf,useInsertionEffect:pf,useLayoutEffect:hf,useMemo:yf,useReducer:xo,useRef:df,useState:function(){return xo(Jn)},useDebugValue:To,useDeferredValue:function(e,n){var t=Be();return he===null?Do(t,e,n):wf(t,he.memoizedState,e,n)},useTransition:function(){var e=xo(Jn)[0],n=Be().memoizedState;return[typeof e=="boolean"?e:zl(e),n]},useSyncExternalStore:Wc,useId:zf};Jt.useCacheRefresh=xf,Jt.useMemoCache=So,Jt.useHostTransitionStatus=Mo,Jt.useFormState=ff,Jt.useActionState=ff,Jt.useOptimistic=function(e,n){var t=Be();return he!==null?nf(t,he,e,n):(t.baseState=e,[e,t.queue.dispatch])};function Co(e,n,t,a){n=e.memoizedState,t=t(a,n),t=t==null?n:M({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var qo={isMounted:function(e){return(e=e._reactInternals)?G(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var a=wn(),l=Rt(a);l.payload=n,t!=null&&(l.callback=t),n=St(e,l,a),n!==null&&(sn(n,e,a),Al(n,e,a))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var a=wn(),l=Rt(a);l.tag=1,l.payload=n,t!=null&&(l.callback=t),n=St(e,l,a),n!==null&&(sn(n,e,a),Al(n,e,a))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=wn(),a=Rt(t);a.tag=2,n!=null&&(a.callback=n),n=St(e,a,t),n!==null&&(sn(n,e,t),Al(n,e,t))}};function Tf(e,n,t,a,l,r,c){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,r,c):n.prototype&&n.prototype.isPureReactComponent?!dl(t,a)||!dl(l,r):!0}function Df(e,n,t,a){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,a),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,a),n.state!==e&&qo.enqueueReplaceState(n,n.state,null)}function Pt(e,n){var t=n;if("ref"in n){t={};for(var a in n)a!=="ref"&&(t[a]=n[a])}if(e=e.defaultProps){t===n&&(t=M({},t));for(var l in e)t[l]===void 0&&(t[l]=e[l])}return t}var $i=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Of(e){$i(e)}function Mf(e){console.error(e)}function _f(e){$i(e)}function Gi(e,n){try{var t=e.onUncaughtError;t(n.value,{componentStack:n.stack})}catch(a){setTimeout(function(){throw a})}}function Cf(e,n,t){try{var a=e.onCaughtError;a(t.value,{componentStack:t.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Uo(e,n,t){return t=Rt(t),t.tag=3,t.payload={element:null},t.callback=function(){Gi(e,n)},t}function qf(e){return e=Rt(e),e.tag=3,e}function Uf(e,n,t,a){var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var r=a.value;e.payload=function(){return l(r)},e.callback=function(){Cf(n,t,a)}}var c=t.stateNode;c!==null&&typeof c.componentDidCatch=="function"&&(e.callback=function(){Cf(n,t,a),typeof l!="function"&&(Tt===null?Tt=new Set([this]):Tt.add(this));var d=a.stack;this.componentDidCatch(a.value,{componentStack:d!==null?d:""})})}function Xh(e,n,t,a,l){if(t.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(n=t.alternate,n!==null&&jl(n,t,l,!0),t=jn.current,t!==null){switch(t.tag){case 13:return Vn===null?gu():t.alternate===null&&Ce===0&&(Ce=3),t.flags&=-257,t.flags|=65536,t.lanes=l,a===fo?t.flags|=16384:(n=t.updateQueue,n===null?t.updateQueue=new Set([a]):n.add(a),yu(e,a,l)),!1;case 22:return t.flags|=65536,a===fo?t.flags|=16384:(n=t.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([a])},t.updateQueue=n):(t=n.retryQueue,t===null?n.retryQueue=new Set([a]):t.add(a)),yu(e,a,l)),!1}throw Error(u(435,t.tag))}return yu(e,a,l),gu(),!1}if(se)return n=jn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=l,a!==co&&(e=Error(u(422),{cause:a}),vl(zn(e,t)))):(a!==co&&(n=Error(u(423),{cause:a}),vl(zn(n,t))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,a=zn(a,t),l=Uo(e.stateNode,a,l),Jo(e,l),Ce!==4&&(Ce=2)),!1;var r=Error(u(520),{cause:a});if(r=zn(r,t),Ul===null?Ul=[r]:Ul.push(r),Ce!==4&&(Ce=2),n===null)return!0;a=zn(a,t),t=n;do{switch(t.tag){case 3:return t.flags|=65536,e=l&-l,t.lanes|=e,e=Uo(t.stateNode,a,e),Jo(t,e),!1;case 1:if(n=t.type,r=t.stateNode,(t.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(Tt===null||!Tt.has(r))))return t.flags|=65536,l&=-l,t.lanes|=l,l=qf(l),Uf(l,e,t,a),Jo(t,l),!1}t=t.return}while(t!==null);return!1}var Nf=Error(u(461)),Qe=!1;function Ie(e,n,t,a){n.child=e===null?Fc(n,null,t,a):Qt(n,e.child,t,a)}function Lf(e,n,t,a,l){t=t.render;var r=n.ref;if("ref"in a){var c={};for(var d in a)d!=="ref"&&(c[d]=a[d])}else c=a;return ea(n),a=yo(e,n,t,c,r,l),d=wo(),e!==null&&!Qe?(ko(e,n,l),Pn(e,n,l)):(se&&d&&uo(n),n.flags|=1,Ie(e,n,a,l),n.child)}function Hf(e,n,t,a,l){if(e===null){var r=t.type;return typeof r=="function"&&!iu(r)&&r.defaultProps===void 0&&t.compare===null?(n.tag=15,n.type=r,Bf(e,n,r,a,l)):(e=Ki(t.type,null,a,n,n.mode,l),e.ref=n.ref,e.return=n,n.child=e)}if(r=e.child,!Go(e,l)){var c=r.memoizedProps;if(t=t.compare,t=t!==null?t:dl,t(c,a)&&e.ref===n.ref)return Pn(e,n,l)}return n.flags|=1,e=jt(r,a),e.ref=n.ref,e.return=n,n.child=e}function Bf(e,n,t,a,l){if(e!==null){var r=e.memoizedProps;if(dl(r,a)&&e.ref===n.ref)if(Qe=!1,n.pendingProps=a=r,Go(e,l))(e.flags&131072)!==0&&(Qe=!0);else return n.lanes=e.lanes,Pn(e,n,l)}return No(e,n,t,a,l)}function Ff(e,n,t){var a=n.pendingProps,l=a.children,r=(n.stateNode._pendingVisibility&2)!==0,c=e!==null?e.memoizedState:null;if(El(e,n),a.mode==="hidden"||r){if((n.flags&128)!==0){if(a=c!==null?c.baseLanes|t:t,e!==null){for(l=n.child=e.child,r=0;l!==null;)r=r|l.lanes|l.childLanes,l=l.sibling;n.childLanes=r&~a}else n.childLanes=0,n.child=null;return Vf(e,n,a,t)}if((t&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&qi(n,c!==null?c.cachePool:null),c!==null?Vc(n,c):mo(),Yc(n);else return n.lanes=n.childLanes=536870912,Vf(e,n,c!==null?c.baseLanes|t:t,t)}else c!==null?(qi(n,c.cachePool),Vc(n,c),gt(),n.memoizedState=null):(e!==null&&qi(n,null),mo(),gt());return Ie(e,n,l,t),n.child}function Vf(e,n,t,a){var l=go();return l=l===null?null:{parent:Ge._currentValue,pool:l},n.memoizedState={baseLanes:t,cachePool:l},e!==null&&qi(n,null),mo(),Yc(n),e!==null&&jl(e,n,a,!0),null}function El(e,n){var t=n.ref;if(t===null)e!==null&&e.ref!==null&&(n.flags|=2097664);else{if(typeof t!="function"&&typeof t!="object")throw Error(u(284));(e===null||e.ref!==t)&&(n.flags|=2097664)}}function No(e,n,t,a,l){return ea(n),t=yo(e,n,t,a,void 0,l),a=wo(),e!==null&&!Qe?(ko(e,n,l),Pn(e,n,l)):(se&&a&&uo(n),n.flags|=1,Ie(e,n,t,l),n.child)}function Yf(e,n,t,a,l,r){return ea(n),n.updateQueue=null,t=Xc(n,a,t,l),Qc(e),a=wo(),e!==null&&!Qe?(ko(e,n,r),Pn(e,n,r)):(se&&a&&uo(n),n.flags|=1,Ie(e,n,t,r),n.child)}function $f(e,n,t,a,l){if(ea(n),n.stateNode===null){var r=ka,c=t.contextType;typeof c=="object"&&c!==null&&(r=ln(c)),r=new t(a,r),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=qo,n.stateNode=r,r._reactInternals=n,r=n.stateNode,r.props=a,r.state=n.memoizedState,r.refs={},Wo(n),c=t.contextType,r.context=typeof c=="object"&&c!==null?ln(c):ka,r.state=n.memoizedState,c=t.getDerivedStateFromProps,typeof c=="function"&&(Co(n,t,c,a),r.state=n.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(c=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),c!==r.state&&qo.enqueueReplaceState(r,r.state,null),Dl(n,a,r,l),Tl(),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308),a=!0}else if(e===null){r=n.stateNode;var d=n.memoizedProps,p=Pt(t,d);r.props=p;var y=r.context,j=t.contextType;c=ka,typeof j=="object"&&j!==null&&(c=ln(j));var D=t.getDerivedStateFromProps;j=typeof D=="function"||typeof r.getSnapshotBeforeUpdate=="function",d=n.pendingProps!==d,j||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(d||y!==c)&&Df(n,r,a,c),kt=!1;var z=n.memoizedState;r.state=z,Dl(n,a,r,l),Tl(),y=n.memoizedState,d||z!==y||kt?(typeof D=="function"&&(Co(n,t,D,a),y=n.memoizedState),(p=kt||Tf(n,t,p,a,z,y,c))?(j||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(n.flags|=4194308)):(typeof r.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=a,n.memoizedState=y),r.props=a,r.state=y,r.context=c,a=p):(typeof r.componentDidMount=="function"&&(n.flags|=4194308),a=!1)}else{r=n.stateNode,Ko(e,n),c=n.memoizedProps,j=Pt(t,c),r.props=j,D=n.pendingProps,z=r.context,y=t.contextType,p=ka,typeof y=="object"&&y!==null&&(p=ln(y)),d=t.getDerivedStateFromProps,(y=typeof d=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(c!==D||z!==p)&&Df(n,r,a,p),kt=!1,z=n.memoizedState,r.state=z,Dl(n,a,r,l),Tl();var E=n.memoizedState;c!==D||z!==E||kt||e!==null&&e.dependencies!==null&&Zi(e.dependencies)?(typeof d=="function"&&(Co(n,t,d,a),E=n.memoizedState),(j=kt||Tf(n,t,j,a,z,E,p)||e!==null&&e.dependencies!==null&&Zi(e.dependencies))?(y||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(a,E,p),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(a,E,p)),typeof r.componentDidUpdate=="function"&&(n.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof r.componentDidUpdate!="function"||c===e.memoizedProps&&z===e.memoizedState||(n.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&z===e.memoizedState||(n.flags|=1024),n.memoizedProps=a,n.memoizedState=E),r.props=a,r.state=E,r.context=p,a=j):(typeof r.componentDidUpdate!="function"||c===e.memoizedProps&&z===e.memoizedState||(n.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&z===e.memoizedState||(n.flags|=1024),a=!1)}return r=a,El(e,n),a=(n.flags&128)!==0,r||a?(r=n.stateNode,t=a&&typeof t.getDerivedStateFromError!="function"?null:r.render(),n.flags|=1,e!==null&&a?(n.child=Qt(n,e.child,null,l),n.child=Qt(n,null,t,l)):Ie(e,n,t,l),n.memoizedState=r.state,e=n.child):e=Pn(e,n,l),e}function Gf(e,n,t,a){return hl(),n.flags|=256,Ie(e,n,t,a),n.child}var Lo={dehydrated:null,treeContext:null,retryLane:0};function Ho(e){return{baseLanes:e,cachePool:Zc()}}function Bo(e,n,t){return e=e!==null?e.childLanes&~t:0,n&&(e|=On),e}function Zf(e,n,t){var a=n.pendingProps,l=!1,r=(n.flags&128)!==0,c;if((c=r)||(c=e!==null&&e.memoizedState===null?!1:($e.current&2)!==0),c&&(l=!0,n.flags&=-129),c=(n.flags&32)!==0,n.flags&=-33,e===null){if(se){if(l?vt(n):gt(),se){var d=Pe,p;if(p=d){e:{for(p=d,d=Fn;p.nodeType!==8;){if(!d){d=null;break e}if(p=Nn(p.nextSibling),p===null){d=null;break e}}d=p}d!==null?(n.memoizedState={dehydrated:d,treeContext:$t!==null?{id:Xn,overflow:Wn}:null,retryLane:536870912},p=Dn(18,null,null,0),p.stateNode=d,p.return=n,n.child=p,un=n,Pe=null,p=!0):p=!1}p||Zt(n)}if(d=n.memoizedState,d!==null&&(d=d.dehydrated,d!==null))return d.data==="$!"?n.lanes=16:n.lanes=536870912,null;Kn(n)}return d=a.children,a=a.fallback,l?(gt(),l=n.mode,d=Vo({mode:"hidden",children:d},l),a=ta(a,l,t,null),d.return=n,a.return=n,d.sibling=a,n.child=d,l=n.child,l.memoizedState=Ho(t),l.childLanes=Bo(e,c,t),n.memoizedState=Lo,a):(vt(n),Fo(n,d))}if(p=e.memoizedState,p!==null&&(d=p.dehydrated,d!==null)){if(r)n.flags&256?(vt(n),n.flags&=-257,n=Yo(e,n,t)):n.memoizedState!==null?(gt(),n.child=e.child,n.flags|=128,n=null):(gt(),l=a.fallback,d=n.mode,a=Vo({mode:"visible",children:a.children},d),l=ta(l,d,t,null),l.flags|=2,a.return=n,l.return=n,a.sibling=l,n.child=a,Qt(n,e.child,null,t),a=n.child,a.memoizedState=Ho(t),a.childLanes=Bo(e,c,t),n.memoizedState=Lo,n=l);else if(vt(n),d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var y=c.dgst;c=y,a=Error(u(419)),a.stack="",a.digest=c,vl({value:a,source:null,stack:null}),n=Yo(e,n,t)}else if(Qe||jl(e,n,t,!1),c=(t&e.childLanes)!==0,Qe||c){if(c=ke,c!==null){if(a=t&-t,(a&42)!==0)a=1;else switch(a){case 2:a=1;break;case 8:a=4;break;case 32:a=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:a=64;break;case 268435456:a=134217728;break;default:a=0}if(a=(a&(c.suspendedLanes|t))!==0?0:a,a!==0&&a!==p.retryLane)throw p.retryLane=a,ht(e,a),sn(c,e,a),Nf}d.data==="$?"||gu(),n=Yo(e,n,t)}else d.data==="$?"?(n.flags|=128,n.child=e.child,n=sv.bind(null,e),d._reactRetry=n,n=null):(e=p.treeContext,Pe=Nn(d.nextSibling),un=n,se=!0,qn=null,Fn=!1,e!==null&&(xn[En++]=Xn,xn[En++]=Wn,xn[En++]=$t,Xn=e.id,Wn=e.overflow,$t=n),n=Fo(n,a.children),n.flags|=4096);return n}return l?(gt(),l=a.fallback,d=n.mode,p=e.child,y=p.sibling,a=jt(p,{mode:"hidden",children:a.children}),a.subtreeFlags=p.subtreeFlags&31457280,y!==null?l=jt(y,l):(l=ta(l,d,t,null),l.flags|=2),l.return=n,a.return=n,a.sibling=l,n.child=a,a=l,l=n.child,d=e.child.memoizedState,d===null?d=Ho(t):(p=d.cachePool,p!==null?(y=Ge._currentValue,p=p.parent!==y?{parent:y,pool:y}:p):p=Zc(),d={baseLanes:d.baseLanes|t,cachePool:p}),l.memoizedState=d,l.childLanes=Bo(e,c,t),n.memoizedState=Lo,a):(vt(n),t=e.child,e=t.sibling,t=jt(t,{mode:"visible",children:a.children}),t.return=n,t.sibling=null,e!==null&&(c=n.deletions,c===null?(n.deletions=[e],n.flags|=16):c.push(e)),n.child=t,n.memoizedState=null,t)}function Fo(e,n){return n=Vo({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Vo(e,n){return bd(e,n,0,null)}function Yo(e,n,t){return Qt(n,e.child,null,t),e=Fo(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Qf(e,n,t){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n),Qo(e.return,n,t)}function $o(e,n,t,a,l){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:a,tail:t,tailMode:l}:(r.isBackwards=n,r.rendering=null,r.renderingStartTime=0,r.last=a,r.tail=t,r.tailMode=l)}function Xf(e,n,t){var a=n.pendingProps,l=a.revealOrder,r=a.tail;if(Ie(e,n,a.children,t),a=$e.current,(a&2)!==0)a=a&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Qf(e,t,n);else if(e.tag===19)Qf(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}switch(je($e,a),l){case"forwards":for(t=n.child,l=null;t!==null;)e=t.alternate,e!==null&&Ci(e)===null&&(l=t),t=t.sibling;t=l,t===null?(l=n.child,n.child=null):(l=t.sibling,t.sibling=null),$o(n,!1,l,t,r);break;case"backwards":for(t=null,l=n.child,n.child=null;l!==null;){if(e=l.alternate,e!==null&&Ci(e)===null){n.child=l;break}e=l.sibling,l.sibling=t,t=l,l=e}$o(n,!0,t,null,r);break;case"together":$o(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Pn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),At|=n.lanes,(t&n.childLanes)===0)if(e!==null){if(jl(e,n,t,!1),(t&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(u(153));if(n.child!==null){for(e=n.child,t=jt(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=jt(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Go(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Zi(e)))}function Wh(e,n,t){switch(n.tag){case 3:ui(n,n.stateNode.containerInfo),wt(n,Ge,e.memoizedState.cache),hl();break;case 27:case 5:Cr(n);break;case 4:ui(n,n.stateNode.containerInfo);break;case 10:wt(n,n.type,n.memoizedProps.value);break;case 13:var a=n.memoizedState;if(a!==null)return a.dehydrated!==null?(vt(n),n.flags|=128,null):(t&n.child.childLanes)!==0?Zf(e,n,t):(vt(n),e=Pn(e,n,t),e!==null?e.sibling:null);vt(n);break;case 19:var l=(e.flags&128)!==0;if(a=(t&n.childLanes)!==0,a||(jl(e,n,t,!1),a=(t&n.childLanes)!==0),l){if(a)return Xf(e,n,t);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),je($e,$e.current),a)break;return null;case 22:case 23:return n.lanes=0,Ff(e,n,t);case 24:wt(n,Ge,e.memoizedState.cache)}return Pn(e,n,t)}function Wf(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps)Qe=!0;else{if(!Go(e,t)&&(n.flags&128)===0)return Qe=!1,Wh(e,n,t);Qe=(e.flags&131072)!==0}else Qe=!1,se&&(n.flags&1048576)!==0&&Mc(n,Ti,n.index);switch(n.lanes=0,n.tag){case 16:e:{e=n.pendingProps;var a=n.elementType,l=a._init;if(a=l(a._payload),n.type=a,typeof a=="function")iu(a)?(e=Pt(a,e),n.tag=1,n=$f(null,n,a,e,t)):(n.tag=0,n=No(null,n,a,e,t));else{if(a!=null){if(l=a.$$typeof,l===ae){n.tag=11,n=Lf(null,n,a,e,t);break e}else if(l===Ye){n.tag=14,n=Hf(null,n,a,e,t);break e}}throw n=Ae(a)||a,Error(u(306,n,""))}}return n;case 0:return No(e,n,n.type,n.pendingProps,t);case 1:return a=n.type,l=Pt(a,n.pendingProps),$f(e,n,a,l,t);case 3:e:{if(ui(n,n.stateNode.containerInfo),e===null)throw Error(u(387));var r=n.pendingProps;l=n.memoizedState,a=l.element,Ko(e,n),Dl(n,r,null,t);var c=n.memoizedState;if(r=c.cache,wt(n,Ge,r),r!==l.cache&&Xo(n,[Ge],t,!0),Tl(),r=c.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:c.cache},n.updateQueue.baseState=l,n.memoizedState=l,n.flags&256){n=Gf(e,n,r,t);break e}else if(r!==a){a=zn(Error(u(424)),n),vl(a),n=Gf(e,n,r,t);break e}else for(Pe=Nn(n.stateNode.containerInfo.firstChild),un=n,se=!0,qn=null,Fn=!0,t=Fc(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(hl(),r===a){n=Pn(e,n,t);break e}Ie(e,n,r,t)}n=n.child}return n;case 26:return El(e,n),e===null?(t=Pd(n.type,null,n.pendingProps,null))?n.memoizedState=t:se||(t=n.type,e=n.pendingProps,a=ur(ft.current).createElement(t),a[an]=n,a[fn]=e,en(a,t,e),Ze(a),n.stateNode=a):n.memoizedState=Pd(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Cr(n),e===null&&se&&(a=n.stateNode=Wd(n.type,n.pendingProps,ft.current),un=n,Fn=!0,Pe=Nn(a.firstChild)),a=n.pendingProps.children,e!==null||se?Ie(e,n,a,t):n.child=Qt(n,null,a,t),El(e,n),n.child;case 5:return e===null&&se&&((l=a=Pe)&&(a=xv(a,n.type,n.pendingProps,Fn),a!==null?(n.stateNode=a,un=n,Pe=Nn(a.firstChild),Fn=!1,l=!0):l=!1),l||Zt(n)),Cr(n),l=n.type,r=n.pendingProps,c=e!==null?e.memoizedProps:null,a=r.children,Ou(l,r)?a=null:c!==null&&Ou(l,c)&&(n.flags|=32),n.memoizedState!==null&&(l=yo(e,n,Vh,null,null,t),Gl._currentValue=l),El(e,n),Ie(e,n,a,t),n.child;case 6:return e===null&&se&&((e=t=Pe)&&(t=Ev(t,n.pendingProps,Fn),t!==null?(n.stateNode=t,un=n,Pe=null,e=!0):e=!1),e||Zt(n)),null;case 13:return Zf(e,n,t);case 4:return ui(n,n.stateNode.containerInfo),a=n.pendingProps,e===null?n.child=Qt(n,null,a,t):Ie(e,n,a,t),n.child;case 11:return Lf(e,n,n.type,n.pendingProps,t);case 7:return Ie(e,n,n.pendingProps,t),n.child;case 8:return Ie(e,n,n.pendingProps.children,t),n.child;case 12:return Ie(e,n,n.pendingProps.children,t),n.child;case 10:return a=n.pendingProps,wt(n,n.type,a.value),Ie(e,n,a.children,t),n.child;case 9:return l=n.type._context,a=n.pendingProps.children,ea(n),l=ln(l),a=a(l),n.flags|=1,Ie(e,n,a,t),n.child;case 14:return Hf(e,n,n.type,n.pendingProps,t);case 15:return Bf(e,n,n.type,n.pendingProps,t);case 19:return Xf(e,n,t);case 22:return Ff(e,n,t);case 24:return ea(n),a=ln(Ge),e===null?(l=go(),l===null&&(l=ke,r=ho(),l.pooledCache=r,r.refCount++,r!==null&&(l.pooledCacheLanes|=t),l=r),n.memoizedState={parent:a,cache:l},Wo(n),wt(n,Ge,l)):((e.lanes&t)!==0&&(Ko(e,n),Dl(n,null,null,t),Tl()),l=e.memoizedState,r=n.memoizedState,l.parent!==a?(l={parent:a,cache:a},n.memoizedState=l,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=l),wt(n,Ge,a)):(a=r.cache,wt(n,Ge,a),a!==l.cache&&Xo(n,[Ge],t,!0))),Ie(e,n,n.pendingProps.children,t),n.child;case 29:throw n.pendingProps}throw Error(u(156,n.tag))}var Zo=fe(null),It=null,In=null;function wt(e,n,t){je(Zo,n._currentValue),n._currentValue=t}function et(e){e._currentValue=Zo.current,Le(Zo)}function Qo(e,n,t){for(;e!==null;){var a=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,a!==null&&(a.childLanes|=n)):a!==null&&(a.childLanes&n)!==n&&(a.childLanes|=n),e===t)break;e=e.return}}function Xo(e,n,t,a){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var r=l.dependencies;if(r!==null){var c=l.child;r=r.firstContext;e:for(;r!==null;){var d=r;r=l;for(var p=0;p<n.length;p++)if(d.context===n[p]){r.lanes|=t,d=r.alternate,d!==null&&(d.lanes|=t),Qo(r.return,t,e),a||(c=null);break e}r=d.next}}else if(l.tag===18){if(c=l.return,c===null)throw Error(u(341));c.lanes|=t,r=c.alternate,r!==null&&(r.lanes|=t),Qo(c,t,e),c=null}else c=l.child;if(c!==null)c.return=l;else for(c=l;c!==null;){if(c===e){c=null;break}if(l=c.sibling,l!==null){l.return=c.return,c=l;break}c=c.return}l=c}}function jl(e,n,t,a){e=null;for(var l=n,r=!1;l!==null;){if(!r){if((l.flags&524288)!==0)r=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var c=l.alternate;if(c===null)throw Error(u(387));if(c=c.memoizedProps,c!==null){var d=l.type;vn(l.pendingProps.value,c.value)||(e!==null?e.push(d):e=[d])}}else if(l===oi.current){if(c=l.alternate,c===null)throw Error(u(387));c.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(Gl):e=[Gl])}l=l.return}e!==null&&Xo(n,e,t,a),n.flags|=262144}function Zi(e){for(e=e.firstContext;e!==null;){if(!vn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ea(e){It=e,In=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ln(e){return Kf(It,e)}function Qi(e,n){return It===null&&ea(e),Kf(e,n)}function Kf(e,n){var t=n._currentValue;if(n={context:n,memoizedValue:t,next:null},In===null){if(e===null)throw Error(u(308));In=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else In=In.next=n;return t}var kt=!1;function Wo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ko(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Rt(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function St(e,n,t){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(De&2)!==0){var l=a.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),a.pending=n,n=ji(e),Dc(e,null,t),n}return Ei(e,a,n,t),ji(e)}function Al(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194176)!==0)){var a=n.lanes;a&=e.pendingLanes,t|=a,n.lanes=t,Ls(e,t)}}function Jo(e,n){var t=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,t===a)){var l=null,r=null;if(t=t.firstBaseUpdate,t!==null){do{var c={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};r===null?l=r=c:r=r.next=c,t=t.next}while(t!==null);r===null?l=r=n:r=r.next=n}else l=r=n;t={baseState:a.baseState,firstBaseUpdate:l,lastBaseUpdate:r,shared:a.shared,callbacks:a.callbacks},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}var Po=!1;function Tl(){if(Po){var e=ja;if(e!==null)throw e}}function Dl(e,n,t,a){Po=!1;var l=e.updateQueue;kt=!1;var r=l.firstBaseUpdate,c=l.lastBaseUpdate,d=l.shared.pending;if(d!==null){l.shared.pending=null;var p=d,y=p.next;p.next=null,c===null?r=y:c.next=y,c=p;var j=e.alternate;j!==null&&(j=j.updateQueue,d=j.lastBaseUpdate,d!==c&&(d===null?j.firstBaseUpdate=y:d.next=y,j.lastBaseUpdate=p))}if(r!==null){var D=l.baseState;c=0,j=y=p=null,d=r;do{var z=d.lane&-536870913,E=z!==d.lane;if(E?(oe&z)===z:(a&z)===z){z!==0&&z===Ea&&(Po=!0),j!==null&&(j=j.next={lane:0,tag:d.tag,payload:d.payload,callback:null,next:null});e:{var H=e,Z=d;z=n;var qe=t;switch(Z.tag){case 1:if(H=Z.payload,typeof H=="function"){D=H.call(qe,D,z);break e}D=H;break e;case 3:H.flags=H.flags&-65537|128;case 0:if(H=Z.payload,z=typeof H=="function"?H.call(qe,D,z):H,z==null)break e;D=M({},D,z);break e;case 2:kt=!0}}z=d.callback,z!==null&&(e.flags|=64,E&&(e.flags|=8192),E=l.callbacks,E===null?l.callbacks=[z]:E.push(z))}else E={lane:z,tag:d.tag,payload:d.payload,callback:d.callback,next:null},j===null?(y=j=E,p=D):j=j.next=E,c|=z;if(d=d.next,d===null){if(d=l.shared.pending,d===null)break;E=d,d=E.next,E.next=null,l.lastBaseUpdate=E,l.shared.pending=null}}while(!0);j===null&&(p=D),l.baseState=p,l.firstBaseUpdate=y,l.lastBaseUpdate=j,r===null&&(l.shared.lanes=0),At|=c,e.lanes=c,e.memoizedState=D}}function Jf(e,n){if(typeof e!="function")throw Error(u(191,e));e.call(n)}function Pf(e,n){var t=e.callbacks;if(t!==null)for(e.callbacks=null,e=0;e<t.length;e++)Jf(t[e],n)}function Ol(e,n){try{var t=n.updateQueue,a=t!==null?t.lastEffect:null;if(a!==null){var l=a.next;t=l;do{if((t.tag&e)===e){a=void 0;var r=t.create,c=t.inst;a=r(),c.destroy=a}t=t.next}while(t!==l)}}catch(d){ye(n,n.return,d)}}function zt(e,n,t){try{var a=n.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var r=l.next;a=r;do{if((a.tag&e)===e){var c=a.inst,d=c.destroy;if(d!==void 0){c.destroy=void 0,l=n;var p=t;try{d()}catch(y){ye(l,p,y)}}}a=a.next}while(a!==r)}}catch(y){ye(n,n.return,y)}}function If(e){var n=e.updateQueue;if(n!==null){var t=e.stateNode;try{Pf(n,t)}catch(a){ye(e,e.return,a)}}}function ed(e,n,t){t.props=Pt(e.type,e.memoizedProps),t.state=e.memoizedState;try{t.componentWillUnmount()}catch(a){ye(e,n,a)}}function na(e,n){try{var t=e.ref;if(t!==null){var a=e.stateNode;switch(e.tag){case 26:case 27:case 5:var l=a;break;default:l=a}typeof t=="function"?e.refCleanup=t(l):t.current=l}}catch(r){ye(e,n,r)}}function gn(e,n){var t=e.ref,a=e.refCleanup;if(t!==null)if(typeof a=="function")try{a()}catch(l){ye(e,n,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(l){ye(e,n,l)}else t.current=null}function nd(e){var n=e.type,t=e.memoizedProps,a=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":t.autoFocus&&a.focus();break e;case"img":t.src?a.src=t.src:t.srcSet&&(a.srcset=t.srcSet)}}catch(l){ye(e,e.return,l)}}function td(e,n,t){try{var a=e.stateNode;wv(a,e.type,t,n),a[fn]=n}catch(l){ye(e,e.return,l)}}function ad(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27||e.tag===4}function Io(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ad(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==27&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function eu(e,n,t){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=or));else if(a!==4&&a!==27&&(e=e.child,e!==null))for(eu(e,n,t),e=e.sibling;e!==null;)eu(e,n,t),e=e.sibling}function Xi(e,n,t){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(a!==4&&a!==27&&(e=e.child,e!==null))for(Xi(e,n,t),e=e.sibling;e!==null;)Xi(e,n,t),e=e.sibling}var nt=!1,_e=!1,nu=!1,ld=typeof WeakSet=="function"?WeakSet:Set,Xe=null,id=!1;function Kh(e,n){if(e=e.containerInfo,Tu=pr,e=kc(e),to(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var a=t.getSelection&&t.getSelection();if(a&&a.rangeCount!==0){t=a.anchorNode;var l=a.anchorOffset,r=a.focusNode;a=a.focusOffset;try{t.nodeType,r.nodeType}catch{t=null;break e}var c=0,d=-1,p=-1,y=0,j=0,D=e,z=null;n:for(;;){for(var E;D!==t||l!==0&&D.nodeType!==3||(d=c+l),D!==r||a!==0&&D.nodeType!==3||(p=c+a),D.nodeType===3&&(c+=D.nodeValue.length),(E=D.firstChild)!==null;)z=D,D=E;for(;;){if(D===e)break n;if(z===t&&++y===l&&(d=c),z===r&&++j===a&&(p=c),(E=D.nextSibling)!==null)break;D=z,z=D.parentNode}D=E}t=d===-1||p===-1?null:{start:d,end:p}}else t=null}t=t||{start:0,end:0}}else t=null;for(Du={focusedElem:e,selectionRange:t},pr=!1,Xe=n;Xe!==null;)if(n=Xe,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Xe=e;else for(;Xe!==null;){switch(n=Xe,r=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&r!==null){e=void 0,t=n,l=r.memoizedProps,r=r.memoizedState,a=t.stateNode;try{var H=Pt(t.type,l,t.elementType===t.type);e=a.getSnapshotBeforeUpdate(H,r),a.__reactInternalSnapshotBeforeUpdate=e}catch(Z){ye(t,t.return,Z)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,t=e.nodeType,t===9)Cu(e);else if(t===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Cu(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(u(163))}if(e=n.sibling,e!==null){e.return=n.return,Xe=e;break}Xe=n.return}return H=id,id=!1,H}function rd(e,n,t){var a=t.flags;switch(t.tag){case 0:case 11:case 15:at(e,t),a&4&&Ol(5,t);break;case 1:if(at(e,t),a&4)if(e=t.stateNode,n===null)try{e.componentDidMount()}catch(d){ye(t,t.return,d)}else{var l=Pt(t.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(l,n,e.__reactInternalSnapshotBeforeUpdate)}catch(d){ye(t,t.return,d)}}a&64&&If(t),a&512&&na(t,t.return);break;case 3:if(at(e,t),a&64&&(a=t.updateQueue,a!==null)){if(e=null,t.child!==null)switch(t.child.tag){case 27:case 5:e=t.child.stateNode;break;case 1:e=t.child.stateNode}try{Pf(a,e)}catch(d){ye(t,t.return,d)}}break;case 26:at(e,t),a&512&&na(t,t.return);break;case 27:case 5:at(e,t),n===null&&a&4&&nd(t),a&512&&na(t,t.return);break;case 12:at(e,t);break;case 13:at(e,t),a&4&&sd(e,t);break;case 22:if(l=t.memoizedState!==null||nt,!l){n=n!==null&&n.memoizedState!==null||_e;var r=nt,c=_e;nt=l,(_e=n)&&!c?xt(e,t,(t.subtreeFlags&8772)!==0):at(e,t),nt=r,_e=c}a&512&&(t.memoizedProps.mode==="manual"?na(t,t.return):gn(t,t.return));break;default:at(e,t)}}function od(e){var n=e.alternate;n!==null&&(e.alternate=null,od(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Br(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Fe=null,bn=!1;function tt(e,n,t){for(t=t.child;t!==null;)ud(e,n,t),t=t.sibling}function ud(e,n,t){if(pn&&typeof pn.onCommitFiberUnmount=="function")try{pn.onCommitFiberUnmount(el,t)}catch{}switch(t.tag){case 26:_e||gn(t,n),tt(e,n,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:_e||gn(t,n);var a=Fe,l=bn;for(Fe=t.stateNode,tt(e,n,t),t=t.stateNode,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Br(t),Fe=a,bn=l;break;case 5:_e||gn(t,n);case 6:l=Fe;var r=bn;if(Fe=null,tt(e,n,t),Fe=l,bn=r,Fe!==null)if(bn)try{e=Fe,a=t.stateNode,e.nodeType===8?e.parentNode.removeChild(a):e.removeChild(a)}catch(c){ye(t,n,c)}else try{Fe.removeChild(t.stateNode)}catch(c){ye(t,n,c)}break;case 18:Fe!==null&&(bn?(n=Fe,t=t.stateNode,n.nodeType===8?_u(n.parentNode,t):n.nodeType===1&&_u(n,t),Wl(n)):_u(Fe,t.stateNode));break;case 4:a=Fe,l=bn,Fe=t.stateNode.containerInfo,bn=!0,tt(e,n,t),Fe=a,bn=l;break;case 0:case 11:case 14:case 15:_e||zt(2,t,n),_e||zt(4,t,n),tt(e,n,t);break;case 1:_e||(gn(t,n),a=t.stateNode,typeof a.componentWillUnmount=="function"&&ed(t,n,a)),tt(e,n,t);break;case 21:tt(e,n,t);break;case 22:_e||gn(t,n),_e=(a=_e)||t.memoizedState!==null,tt(e,n,t),_e=a;break;default:tt(e,n,t)}}function sd(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Wl(e)}catch(t){ye(n,n.return,t)}}function Jh(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new ld),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new ld),n;default:throw Error(u(435,e.tag))}}function tu(e,n){var t=Jh(e);n.forEach(function(a){var l=cv.bind(null,e,a);t.has(a)||(t.add(a),a.then(l,l))})}function An(e,n){var t=n.deletions;if(t!==null)for(var a=0;a<t.length;a++){var l=t[a],r=e,c=n,d=c;e:for(;d!==null;){switch(d.tag){case 27:case 5:Fe=d.stateNode,bn=!1;break e;case 3:Fe=d.stateNode.containerInfo,bn=!0;break e;case 4:Fe=d.stateNode.containerInfo,bn=!0;break e}d=d.return}if(Fe===null)throw Error(u(160));ud(r,c,l),Fe=null,bn=!1,r=l.alternate,r!==null&&(r.return=null),l.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)cd(n,e),n=n.sibling}var Un=null;function cd(e,n){var t=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:An(n,e),Tn(e),a&4&&(zt(3,e,e.return),Ol(3,e),zt(5,e,e.return));break;case 1:An(n,e),Tn(e),a&512&&(_e||t===null||gn(t,t.return)),a&64&&nt&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(t=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=t===null?a:t.concat(a))));break;case 26:var l=Un;if(An(n,e),Tn(e),a&512&&(_e||t===null||gn(t,t.return)),a&4){var r=t!==null?t.memoizedState:null;if(a=e.memoizedState,t===null)if(a===null)if(e.stateNode===null){e:{a=e.type,t=e.memoizedProps,l=l.ownerDocument||l;n:switch(a){case"title":r=l.getElementsByTagName("title")[0],(!r||r[al]||r[an]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=l.createElement(a),l.head.insertBefore(r,l.querySelector("head > title"))),en(r,a,t),r[an]=e,Ze(r),a=r;break e;case"link":var c=nm("link","href",l).get(a+(t.href||""));if(c){for(var d=0;d<c.length;d++)if(r=c[d],r.getAttribute("href")===(t.href==null?null:t.href)&&r.getAttribute("rel")===(t.rel==null?null:t.rel)&&r.getAttribute("title")===(t.title==null?null:t.title)&&r.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){c.splice(d,1);break n}}r=l.createElement(a),en(r,a,t),l.head.appendChild(r);break;case"meta":if(c=nm("meta","content",l).get(a+(t.content||""))){for(d=0;d<c.length;d++)if(r=c[d],r.getAttribute("content")===(t.content==null?null:""+t.content)&&r.getAttribute("name")===(t.name==null?null:t.name)&&r.getAttribute("property")===(t.property==null?null:t.property)&&r.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&r.getAttribute("charset")===(t.charSet==null?null:t.charSet)){c.splice(d,1);break n}}r=l.createElement(a),en(r,a,t),l.head.appendChild(r);break;default:throw Error(u(468,a))}r[an]=e,Ze(r),a=r}e.stateNode=a}else tm(l,e.type,e.stateNode);else e.stateNode=em(l,a,e.memoizedProps);else r!==a?(r===null?t.stateNode!==null&&(t=t.stateNode,t.parentNode.removeChild(t)):r.count--,a===null?tm(l,e.type,e.stateNode):em(l,a,e.memoizedProps)):a===null&&e.stateNode!==null&&td(e,e.memoizedProps,t.memoizedProps)}break;case 27:if(a&4&&e.alternate===null){l=e.stateNode,r=e.memoizedProps;try{for(var p=l.firstChild;p;){var y=p.nextSibling,j=p.nodeName;p[al]||j==="HEAD"||j==="BODY"||j==="SCRIPT"||j==="STYLE"||j==="LINK"&&p.rel.toLowerCase()==="stylesheet"||l.removeChild(p),p=y}for(var D=e.type,z=l.attributes;z.length;)l.removeAttributeNode(z[0]);en(l,D,r),l[an]=e,l[fn]=r}catch(H){ye(e,e.return,H)}}case 5:if(An(n,e),Tn(e),a&512&&(_e||t===null||gn(t,t.return)),e.flags&32){l=e.stateNode;try{pa(l,"")}catch(H){ye(e,e.return,H)}}a&4&&e.stateNode!=null&&(l=e.memoizedProps,td(e,l,t!==null?t.memoizedProps:l)),a&1024&&(nu=!0);break;case 6:if(An(n,e),Tn(e),a&4){if(e.stateNode===null)throw Error(u(162));a=e.memoizedProps,t=e.stateNode;try{t.nodeValue=a}catch(H){ye(e,e.return,H)}}break;case 3:if(fr=null,l=Un,Un=sr(n.containerInfo),An(n,e),Un=l,Tn(e),a&4&&t!==null&&t.memoizedState.isDehydrated)try{Wl(n.containerInfo)}catch(H){ye(e,e.return,H)}nu&&(nu=!1,fd(e));break;case 4:a=Un,Un=sr(e.stateNode.containerInfo),An(n,e),Tn(e),Un=a;break;case 12:An(n,e),Tn(e);break;case 13:An(n,e),Tn(e),e.child.flags&8192&&e.memoizedState!==null!=(t!==null&&t.memoizedState!==null)&&(fu=Bn()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,tu(e,a)));break;case 22:if(a&512&&(_e||t===null||gn(t,t.return)),p=e.memoizedState!==null,y=t!==null&&t.memoizedState!==null,j=nt,D=_e,nt=j||p,_e=D||y,An(n,e),_e=D,nt=j,Tn(e),n=e.stateNode,n._current=e,n._visibility&=-3,n._visibility|=n._pendingVisibility&2,a&8192&&(n._visibility=p?n._visibility&-2:n._visibility|1,p&&(n=nt||_e,t===null||y||n||Oa(e)),e.memoizedProps===null||e.memoizedProps.mode!=="manual"))e:for(t=null,n=e;;){if(n.tag===5||n.tag===26||n.tag===27){if(t===null){y=t=n;try{if(l=y.stateNode,p)r=l.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{c=y.stateNode,d=y.memoizedProps.style;var E=d!=null&&d.hasOwnProperty("display")?d.display:null;c.style.display=E==null||typeof E=="boolean"?"":(""+E).trim()}}catch(H){ye(y,y.return,H)}}}else if(n.tag===6){if(t===null){y=n;try{y.stateNode.nodeValue=p?"":y.memoizedProps}catch(H){ye(y,y.return,H)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;t===n&&(t=null),n=n.return}t===n&&(t=null),n.sibling.return=n.return,n=n.sibling}a&4&&(a=e.updateQueue,a!==null&&(t=a.retryQueue,t!==null&&(a.retryQueue=null,tu(e,t))));break;case 19:An(n,e),Tn(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,tu(e,a)));break;case 21:break;default:An(n,e),Tn(e)}}function Tn(e){var n=e.flags;if(n&2){try{if(e.tag!==27){e:{for(var t=e.return;t!==null;){if(ad(t)){var a=t;break e}t=t.return}throw Error(u(160))}switch(a.tag){case 27:var l=a.stateNode,r=Io(e);Xi(e,r,l);break;case 5:var c=a.stateNode;a.flags&32&&(pa(c,""),a.flags&=-33);var d=Io(e);Xi(e,d,c);break;case 3:case 4:var p=a.stateNode.containerInfo,y=Io(e);eu(e,y,p);break;default:throw Error(u(161))}}}catch(j){ye(e,e.return,j)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function fd(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;fd(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function at(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)rd(e,n.alternate,n),n=n.sibling}function Oa(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:zt(4,n,n.return),Oa(n);break;case 1:gn(n,n.return);var t=n.stateNode;typeof t.componentWillUnmount=="function"&&ed(n,n.return,t),Oa(n);break;case 26:case 27:case 5:gn(n,n.return),Oa(n);break;case 22:gn(n,n.return),n.memoizedState===null&&Oa(n);break;default:Oa(n)}e=e.sibling}}function xt(e,n,t){for(t=t&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var a=n.alternate,l=e,r=n,c=r.flags;switch(r.tag){case 0:case 11:case 15:xt(l,r,t),Ol(4,r);break;case 1:if(xt(l,r,t),a=r,l=a.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(y){ye(a,a.return,y)}if(a=r,l=a.updateQueue,l!==null){var d=a.stateNode;try{var p=l.shared.hiddenCallbacks;if(p!==null)for(l.shared.hiddenCallbacks=null,l=0;l<p.length;l++)Jf(p[l],d)}catch(y){ye(a,a.return,y)}}t&&c&64&&If(r),na(r,r.return);break;case 26:case 27:case 5:xt(l,r,t),t&&a===null&&c&4&&nd(r),na(r,r.return);break;case 12:xt(l,r,t);break;case 13:xt(l,r,t),t&&c&4&&sd(l,r);break;case 22:r.memoizedState===null&&xt(l,r,t),na(r,r.return);break;default:xt(l,r,t)}n=n.sibling}}function au(e,n){var t=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==t&&(e!=null&&e.refCount++,t!=null&&kl(t))}function lu(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&kl(e))}function Et(e,n,t,a){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)dd(e,n,t,a),n=n.sibling}function dd(e,n,t,a){var l=n.flags;switch(n.tag){case 0:case 11:case 15:Et(e,n,t,a),l&2048&&Ol(9,n);break;case 3:Et(e,n,t,a),l&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&kl(e)));break;case 12:if(l&2048){Et(e,n,t,a),e=n.stateNode;try{var r=n.memoizedProps,c=r.id,d=r.onPostCommit;typeof d=="function"&&d(c,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(p){ye(n,n.return,p)}}else Et(e,n,t,a);break;case 23:break;case 22:r=n.stateNode,n.memoizedState!==null?r._visibility&4?Et(e,n,t,a):Ml(e,n):r._visibility&4?Et(e,n,t,a):(r._visibility|=4,Ma(e,n,t,a,(n.subtreeFlags&10256)!==0)),l&2048&&au(n.alternate,n);break;case 24:Et(e,n,t,a),l&2048&&lu(n.alternate,n);break;default:Et(e,n,t,a)}}function Ma(e,n,t,a,l){for(l=l&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var r=e,c=n,d=t,p=a,y=c.flags;switch(c.tag){case 0:case 11:case 15:Ma(r,c,d,p,l),Ol(8,c);break;case 23:break;case 22:var j=c.stateNode;c.memoizedState!==null?j._visibility&4?Ma(r,c,d,p,l):Ml(r,c):(j._visibility|=4,Ma(r,c,d,p,l)),l&&y&2048&&au(c.alternate,c);break;case 24:Ma(r,c,d,p,l),l&&y&2048&&lu(c.alternate,c);break;default:Ma(r,c,d,p,l)}n=n.sibling}}function Ml(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var t=e,a=n,l=a.flags;switch(a.tag){case 22:Ml(t,a),l&2048&&au(a.alternate,a);break;case 24:Ml(t,a),l&2048&&lu(a.alternate,a);break;default:Ml(t,a)}n=n.sibling}}var _l=8192;function _a(e){if(e.subtreeFlags&_l)for(e=e.child;e!==null;)md(e),e=e.sibling}function md(e){switch(e.tag){case 26:_a(e),e.flags&_l&&e.memoizedState!==null&&Hv(Un,e.memoizedState,e.memoizedProps);break;case 5:_a(e);break;case 3:case 4:var n=Un;Un=sr(e.stateNode.containerInfo),_a(e),Un=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=_l,_l=16777216,_a(e),_l=n):_a(e));break;default:_a(e)}}function pd(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Cl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var t=0;t<n.length;t++){var a=n[t];Xe=a,vd(a,e)}pd(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)hd(e),e=e.sibling}function hd(e){switch(e.tag){case 0:case 11:case 15:Cl(e),e.flags&2048&&zt(9,e,e.return);break;case 3:Cl(e);break;case 12:Cl(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&4&&(e.return===null||e.return.tag!==13)?(n._visibility&=-5,Wi(e)):Cl(e);break;default:Cl(e)}}function Wi(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var t=0;t<n.length;t++){var a=n[t];Xe=a,vd(a,e)}pd(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:zt(8,n,n.return),Wi(n);break;case 22:t=n.stateNode,t._visibility&4&&(t._visibility&=-5,Wi(n));break;default:Wi(n)}e=e.sibling}}function vd(e,n){for(;Xe!==null;){var t=Xe;switch(t.tag){case 0:case 11:case 15:zt(8,t,n);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var a=t.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:kl(t.memoizedState.cache)}if(a=t.child,a!==null)a.return=t,Xe=a;else e:for(t=e;Xe!==null;){a=Xe;var l=a.sibling,r=a.return;if(od(a),a===t){Xe=null;break e}if(l!==null){l.return=r,Xe=l;break e}Xe=r}}}function Ph(e,n,t,a){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Dn(e,n,t,a){return new Ph(e,n,t,a)}function iu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function jt(e,n){var t=e.alternate;return t===null?(t=Dn(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&31457280,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t.refCleanup=e.refCleanup,t}function gd(e,n){e.flags&=31457282;var t=e.alternate;return t===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,e.type=t.type,n=t.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Ki(e,n,t,a,l,r){var c=0;if(a=e,typeof e=="function")iu(e)&&(c=1);else if(typeof e=="string")c=Nv(e,t,Hn.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case w:return ta(t.children,l,r,n);case b:c=8,l|=24;break;case _:return e=Dn(12,t,n,l|2),e.elementType=_,e.lanes=r,e;case ue:return e=Dn(13,t,n,l),e.elementType=ue,e.lanes=r,e;case ge:return e=Dn(19,t,n,l),e.elementType=ge,e.lanes=r,e;case be:return bd(t,l,r,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case L:case F:c=10;break e;case Q:c=9;break e;case ae:c=11;break e;case Ye:c=14;break e;case xe:c=16,a=null;break e}c=29,t=Error(u(130,e===null?"null":typeof e,"")),a=null}return n=Dn(c,t,n,l),n.elementType=e,n.type=a,n.lanes=r,n}function ta(e,n,t,a){return e=Dn(7,e,a,n),e.lanes=t,e}function bd(e,n,t,a){e=Dn(22,e,a,n),e.elementType=be,e.lanes=t;var l={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var r=l._current;if(r===null)throw Error(u(456));if((l._pendingVisibility&2)===0){var c=ht(r,2);c!==null&&(l._pendingVisibility|=2,sn(c,r,2))}},attach:function(){var r=l._current;if(r===null)throw Error(u(456));if((l._pendingVisibility&2)!==0){var c=ht(r,2);c!==null&&(l._pendingVisibility&=-3,sn(c,r,2))}}};return e.stateNode=l,e}function ru(e,n,t){return e=Dn(6,e,null,n),e.lanes=t,e}function ou(e,n,t){return n=Dn(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function lt(e){e.flags|=4}function yd(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!am(n)){if(n=jn.current,n!==null&&((oe&4194176)===oe?Vn!==null:(oe&62914560)!==oe&&(oe&536870912)===0||n!==Vn))throw bl=fo,qc;e.flags|=8192}}function Ji(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Us():536870912,e.lanes|=n,qa|=n)}function ql(e,n){if(!se)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Te(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,a=0;if(n)for(var l=e.child;l!==null;)t|=l.lanes|l.childLanes,a|=l.subtreeFlags&31457280,a|=l.flags&31457280,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)t|=l.lanes|l.childLanes,a|=l.subtreeFlags,a|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=a,e.childLanes=t,n}function Ih(e,n,t){var a=n.pendingProps;switch(so(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Te(n),null;case 1:return Te(n),null;case 3:return t=n.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),et(Ge),ua(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(pl(n)?lt(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,qn!==null&&(hu(qn),qn=null))),Te(n),null;case 26:return t=n.memoizedState,e===null?(lt(n),t!==null?(Te(n),yd(n,t)):(Te(n),n.flags&=-16777217)):t?t!==e.memoizedState?(lt(n),Te(n),yd(n,t)):(Te(n),n.flags&=-16777217):(e.memoizedProps!==a&&lt(n),Te(n),n.flags&=-16777217),null;case 27:si(n),t=ft.current;var l=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==a&&lt(n);else{if(!a){if(n.stateNode===null)throw Error(u(166));return Te(n),null}e=Hn.current,pl(n)?_c(n):(e=Wd(l,a,t),n.stateNode=e,lt(n))}return Te(n),null;case 5:if(si(n),t=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==a&&lt(n);else{if(!a){if(n.stateNode===null)throw Error(u(166));return Te(n),null}if(e=Hn.current,pl(n))_c(n);else{switch(l=ur(ft.current),e){case 1:e=l.createElementNS("http://www.w3.org/2000/svg",t);break;case 2:e=l.createElementNS("http://www.w3.org/1998/Math/MathML",t);break;default:switch(t){case"svg":e=l.createElementNS("http://www.w3.org/2000/svg",t);break;case"math":e=l.createElementNS("http://www.w3.org/1998/Math/MathML",t);break;case"script":e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof a.is=="string"?l.createElement("select",{is:a.is}):l.createElement("select"),a.multiple?e.multiple=!0:a.size&&(e.size=a.size);break;default:e=typeof a.is=="string"?l.createElement(t,{is:a.is}):l.createElement(t)}}e[an]=n,e[fn]=a;e:for(l=n.child;l!==null;){if(l.tag===5||l.tag===6)e.appendChild(l.stateNode);else if(l.tag!==4&&l.tag!==27&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===n)break e;for(;l.sibling===null;){if(l.return===null||l.return===n)break e;l=l.return}l.sibling.return=l.return,l=l.sibling}n.stateNode=e;e:switch(en(e,t,a),t){case"button":case"input":case"select":case"textarea":e=!!a.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&lt(n)}}return Te(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==a&&lt(n);else{if(typeof a!="string"&&n.stateNode===null)throw Error(u(166));if(e=ft.current,pl(n)){if(e=n.stateNode,t=n.memoizedProps,a=null,l=un,l!==null)switch(l.tag){case 27:case 5:a=l.memoizedProps}e[an]=n,e=!!(e.nodeValue===t||a!==null&&a.suppressHydrationWarning===!0||Yd(e.nodeValue,t)),e||Zt(n)}else e=ur(e).createTextNode(a),e[an]=n,n.stateNode=e}return Te(n),null;case 13:if(a=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=pl(n),a!==null&&a.dehydrated!==null){if(e===null){if(!l)throw Error(u(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(u(317));l[an]=n}else hl(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Te(n),l=!1}else qn!==null&&(hu(qn),qn=null),l=!0;if(!l)return n.flags&256?(Kn(n),n):(Kn(n),null)}if(Kn(n),(n.flags&128)!==0)return n.lanes=t,n;if(t=a!==null,e=e!==null&&e.memoizedState!==null,t){a=n.child,l=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(l=a.alternate.memoizedState.cachePool.pool);var r=null;a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(r=a.memoizedState.cachePool.pool),r!==l&&(a.flags|=2048)}return t!==e&&t&&(n.child.flags|=8192),Ji(n,n.updateQueue),Te(n),null;case 4:return ua(),e===null&&Eu(n.stateNode.containerInfo),Te(n),null;case 10:return et(n.type),Te(n),null;case 19:if(Le($e),l=n.memoizedState,l===null)return Te(n),null;if(a=(n.flags&128)!==0,r=l.rendering,r===null)if(a)ql(l,!1);else{if(Ce!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(r=Ci(e),r!==null){for(n.flags|=128,ql(l,!1),e=r.updateQueue,n.updateQueue=e,Ji(n,e),n.subtreeFlags=0,e=t,t=n.child;t!==null;)gd(t,e),t=t.sibling;return je($e,$e.current&1|2),n.child}e=e.sibling}l.tail!==null&&Bn()>Pi&&(n.flags|=128,a=!0,ql(l,!1),n.lanes=4194304)}else{if(!a)if(e=Ci(r),e!==null){if(n.flags|=128,a=!0,e=e.updateQueue,n.updateQueue=e,Ji(n,e),ql(l,!0),l.tail===null&&l.tailMode==="hidden"&&!r.alternate&&!se)return Te(n),null}else 2*Bn()-l.renderingStartTime>Pi&&t!==536870912&&(n.flags|=128,a=!0,ql(l,!1),n.lanes=4194304);l.isBackwards?(r.sibling=n.child,n.child=r):(e=l.last,e!==null?e.sibling=r:n.child=r,l.last=r)}return l.tail!==null?(n=l.tail,l.rendering=n,l.tail=n.sibling,l.renderingStartTime=Bn(),n.sibling=null,e=$e.current,je($e,a?e&1|2:e&1),n):(Te(n),null);case 22:case 23:return Kn(n),po(),a=n.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(n.flags|=8192):a&&(n.flags|=8192),a?(t&536870912)!==0&&(n.flags&128)===0&&(Te(n),n.subtreeFlags&6&&(n.flags|=8192)):Te(n),t=n.updateQueue,t!==null&&Ji(n,t.retryQueue),t=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),a=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(a=n.memoizedState.cachePool.pool),a!==t&&(n.flags|=2048),e!==null&&Le(Xt),null;case 24:return t=null,e!==null&&(t=e.memoizedState.cache),n.memoizedState.cache!==t&&(n.flags|=2048),et(Ge),Te(n),null;case 25:return null}throw Error(u(156,n.tag))}function ev(e,n){switch(so(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return et(Ge),ua(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return si(n),null;case 13:if(Kn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(u(340));hl()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Le($e),null;case 4:return ua(),null;case 10:return et(n.type),null;case 22:case 23:return Kn(n),po(),e!==null&&Le(Xt),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return et(Ge),null;case 25:return null;default:return null}}function wd(e,n){switch(so(n),n.tag){case 3:et(Ge),ua();break;case 26:case 27:case 5:si(n);break;case 4:ua();break;case 13:Kn(n);break;case 19:Le($e);break;case 10:et(n.type);break;case 22:case 23:Kn(n),po(),e!==null&&Le(Xt);break;case 24:et(Ge)}}var nv={getCacheForType:function(e){var n=ln(Ge),t=n.data.get(e);return t===void 0&&(t=e(),n.data.set(e,t)),t}},tv=typeof WeakMap=="function"?WeakMap:Map,De=0,ke=null,te=null,oe=0,Re=0,yn=null,it=!1,Ca=!1,uu=!1,rt=0,Ce=0,At=0,aa=0,su=0,On=0,qa=0,Ul=null,$n=null,cu=!1,fu=0,Pi=1/0,Ii=null,Tt=null,er=!1,la=null,Nl=0,du=0,mu=null,Ll=0,pu=null;function wn(){if((De&2)!==0&&oe!==0)return oe&-oe;if(x.T!==null){var e=Ea;return e!==0?e:Ru()}return Bs()}function kd(){On===0&&(On=(oe&536870912)===0||se?qs():536870912);var e=jn.current;return e!==null&&(e.flags|=32),On}function sn(e,n,t){(e===ke&&Re===2||e.cancelPendingCommit!==null)&&(Ua(e,0),ot(e,oe,On,!1)),tl(e,t),((De&2)===0||e!==ke)&&(e===ke&&((De&2)===0&&(aa|=t),Ce===4&&ot(e,oe,On,!1)),Gn(e))}function Rd(e,n,t){if((De&6)!==0)throw Error(u(327));var a=!t&&(n&60)===0&&(n&e.expiredLanes)===0||nl(e,n),l=a?iv(e,n):bu(e,n,!0),r=a;do{if(l===0){Ca&&!a&&ot(e,n,0,!1);break}else if(l===6)ot(e,n,0,!it);else{if(t=e.current.alternate,r&&!av(t)){l=bu(e,n,!1),r=!1;continue}if(l===2){if(r=n,e.errorRecoveryDisabledLanes&r)var c=0;else c=e.pendingLanes&-536870913,c=c!==0?c:c&536870912?536870912:0;if(c!==0){n=c;e:{var d=e;l=Ul;var p=d.current.memoizedState.isDehydrated;if(p&&(Ua(d,c).flags|=256),c=bu(d,c,!1),c!==2){if(uu&&!p){d.errorRecoveryDisabledLanes|=r,aa|=r,l=4;break e}r=$n,$n=l,r!==null&&hu(r)}l=c}if(r=!1,l!==2)continue}}if(l===1){Ua(e,0),ot(e,n,0,!0);break}e:{switch(a=e,l){case 0:case 1:throw Error(u(345));case 4:if((n&4194176)===n){ot(a,n,On,!it);break e}break;case 2:$n=null;break;case 3:case 5:break;default:throw Error(u(329))}if(a.finishedWork=t,a.finishedLanes=n,(n&62914560)===n&&(r=fu+300-Bn(),10<r)){if(ot(a,n,On,!it),mi(a,0)!==0)break e;a.timeoutHandle=Zd(Sd.bind(null,a,t,$n,Ii,cu,n,On,aa,qa,it,2,-0,0),r);break e}Sd(a,t,$n,Ii,cu,n,On,aa,qa,it,0,-0,0)}}break}while(!0);Gn(e)}function hu(e){$n===null?$n=e:$n.push.apply($n,e)}function Sd(e,n,t,a,l,r,c,d,p,y,j,D,z){var E=n.subtreeFlags;if((E&8192||(E&16785408)===16785408)&&($l={stylesheets:null,count:0,unsuspend:Lv},md(n),n=Bv(),n!==null)){e.cancelPendingCommit=n(Dd.bind(null,e,t,a,l,c,d,p,1,D,z)),ot(e,r,c,!y);return}Dd(e,t,a,l,c,d,p,j,D,z)}function av(e){for(var n=e;;){var t=n.tag;if((t===0||t===11||t===15)&&n.flags&16384&&(t=n.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var a=0;a<t.length;a++){var l=t[a],r=l.getSnapshot;l=l.value;try{if(!vn(r(),l))return!1}catch{return!1}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ot(e,n,t,a){n&=~su,n&=~aa,e.suspendedLanes|=n,e.pingedLanes&=~n,a&&(e.warmLanes|=n),a=e.expirationTimes;for(var l=n;0<l;){var r=31-hn(l),c=1<<r;a[r]=-1,l&=~c}t!==0&&Ns(e,t,n)}function nr(){return(De&6)===0?(Hl(0),!1):!0}function vu(){if(te!==null){if(Re===0)var e=te.return;else e=te,In=It=null,Ro(e),za=null,yl=0,e=te;for(;e!==null;)wd(e.alternate,e),e=e.return;te=null}}function Ua(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;t!==-1&&(e.timeoutHandle=-1,Rv(t)),t=e.cancelPendingCommit,t!==null&&(e.cancelPendingCommit=null,t()),vu(),ke=e,te=t=jt(e.current,null),oe=n,Re=0,yn=null,it=!1,Ca=nl(e,n),uu=!1,qa=On=su=aa=At=Ce=0,$n=Ul=null,cu=!1,(n&8)!==0&&(n|=n&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=n;0<a;){var l=31-hn(a),r=1<<l;n|=e[l],a&=~r}return rt=n,xi(),t}function zd(e,n){P=null,x.H=Yn,n===gl?(n=Lc(),Re=3):n===qc?(n=Lc(),Re=4):Re=n===Nf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,yn=n,te===null&&(Ce=1,Gi(e,zn(n,e.current)))}function xd(){var e=x.H;return x.H=Yn,e===null?Yn:e}function Ed(){var e=x.A;return x.A=nv,e}function gu(){Ce=4,it||(oe&4194176)!==oe&&jn.current!==null||(Ca=!0),(At&134217727)===0&&(aa&134217727)===0||ke===null||ot(ke,oe,On,!1)}function bu(e,n,t){var a=De;De|=2;var l=xd(),r=Ed();(ke!==e||oe!==n)&&(Ii=null,Ua(e,n)),n=!1;var c=Ce;e:do try{if(Re!==0&&te!==null){var d=te,p=yn;switch(Re){case 8:vu(),c=6;break e;case 3:case 2:case 6:jn.current===null&&(n=!0);var y=Re;if(Re=0,yn=null,Na(e,d,p,y),t&&Ca){c=0;break e}break;default:y=Re,Re=0,yn=null,Na(e,d,p,y)}}lv(),c=Ce;break}catch(j){zd(e,j)}while(!0);return n&&e.shellSuspendCounter++,In=It=null,De=a,x.H=l,x.A=r,te===null&&(ke=null,oe=0,xi()),c}function lv(){for(;te!==null;)jd(te)}function iv(e,n){var t=De;De|=2;var a=xd(),l=Ed();ke!==e||oe!==n?(Ii=null,Pi=Bn()+500,Ua(e,n)):Ca=nl(e,n);e:do try{if(Re!==0&&te!==null){n=te;var r=yn;n:switch(Re){case 1:Re=0,yn=null,Na(e,n,r,1);break;case 2:if(Uc(r)){Re=0,yn=null,Ad(n);break}n=function(){Re===2&&ke===e&&(Re=7),Gn(e)},r.then(n,n);break e;case 3:Re=7;break e;case 4:Re=5;break e;case 7:Uc(r)?(Re=0,yn=null,Ad(n)):(Re=0,yn=null,Na(e,n,r,7));break;case 5:var c=null;switch(te.tag){case 26:c=te.memoizedState;case 5:case 27:var d=te;if(!c||am(c)){Re=0,yn=null;var p=d.sibling;if(p!==null)te=p;else{var y=d.return;y!==null?(te=y,tr(y)):te=null}break n}}Re=0,yn=null,Na(e,n,r,5);break;case 6:Re=0,yn=null,Na(e,n,r,6);break;case 8:vu(),Ce=6;break e;default:throw Error(u(462))}}rv();break}catch(j){zd(e,j)}while(!0);return In=It=null,x.H=a,x.A=l,De=t,te!==null?0:(ke=null,oe=0,xi(),Ce)}function rv(){for(;te!==null&&!Ap();)jd(te)}function jd(e){var n=Wf(e.alternate,e,rt);e.memoizedProps=e.pendingProps,n===null?tr(e):te=n}function Ad(e){var n=e,t=n.alternate;switch(n.tag){case 15:case 0:n=Yf(t,n,n.pendingProps,n.type,void 0,oe);break;case 11:n=Yf(t,n,n.pendingProps,n.type.render,n.ref,oe);break;case 5:Ro(n);default:wd(t,n),n=te=gd(n,rt),n=Wf(t,n,rt)}e.memoizedProps=e.pendingProps,n===null?tr(e):te=n}function Na(e,n,t,a){In=It=null,Ro(n),za=null,yl=0;var l=n.return;try{if(Xh(e,l,n,t,oe)){Ce=1,Gi(e,zn(t,e.current)),te=null;return}}catch(r){if(l!==null)throw te=l,r;Ce=1,Gi(e,zn(t,e.current)),te=null;return}n.flags&32768?(se||a===1?e=!0:Ca||(oe&536870912)!==0?e=!1:(it=e=!0,(a===2||a===3||a===6)&&(a=jn.current,a!==null&&a.tag===13&&(a.flags|=16384))),Td(n,e)):tr(n)}function tr(e){var n=e;do{if((n.flags&32768)!==0){Td(n,it);return}e=n.return;var t=Ih(n.alternate,n,rt);if(t!==null){te=t;return}if(n=n.sibling,n!==null){te=n;return}te=n=e}while(n!==null);Ce===0&&(Ce=5)}function Td(e,n){do{var t=ev(e.alternate,e);if(t!==null){t.flags&=32767,te=t;return}if(t=e.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!n&&(e=e.sibling,e!==null)){te=e;return}te=e=t}while(e!==null);Ce=6,te=null}function Dd(e,n,t,a,l,r,c,d,p,y){var j=x.T,D=U.p;try{U.p=2,x.T=null,ov(e,n,t,a,D,l,r,c,d,p,y)}finally{x.T=j,U.p=D}}function ov(e,n,t,a,l,r,c,d){do La();while(la!==null);if((De&6)!==0)throw Error(u(327));var p=e.finishedWork;if(a=e.finishedLanes,p===null)return null;if(e.finishedWork=null,e.finishedLanes=0,p===e.current)throw Error(u(177));e.callbackNode=null,e.callbackPriority=0,e.cancelPendingCommit=null;var y=p.lanes|p.childLanes;if(y|=ro,Hp(e,a,y,r,c,d),e===ke&&(te=ke=null,oe=0),(p.subtreeFlags&10256)===0&&(p.flags&10256)===0||er||(er=!0,du=y,mu=t,fv(ci,function(){return La(),null})),t=(p.flags&15990)!==0,(p.subtreeFlags&15990)!==0||t?(t=x.T,x.T=null,r=U.p,U.p=2,c=De,De|=4,Kh(e,p),cd(p,e),Oh(Du,e.containerInfo),pr=!!Tu,Du=Tu=null,e.current=p,rd(e,p.alternate,p),Tp(),De=c,U.p=r,x.T=t):e.current=p,er?(er=!1,la=e,Nl=a):Od(e,y),y=e.pendingLanes,y===0&&(Tt=null),Cp(p.stateNode),Gn(e),n!==null)for(l=e.onRecoverableError,p=0;p<n.length;p++)y=n[p],l(y.value,{componentStack:y.stack});return(Nl&3)!==0&&La(),y=e.pendingLanes,(a&4194218)!==0&&(y&42)!==0?e===pu?Ll++:(Ll=0,pu=e):Ll=0,Hl(0),null}function Od(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,kl(n)))}function La(){if(la!==null){var e=la,n=du;du=0;var t=Hs(Nl),a=x.T,l=U.p;try{if(U.p=32>t?32:t,x.T=null,la===null)var r=!1;else{t=mu,mu=null;var c=la,d=Nl;if(la=null,Nl=0,(De&6)!==0)throw Error(u(331));var p=De;if(De|=4,hd(c.current),dd(c,c.current,d,t),De=p,Hl(0,!1),pn&&typeof pn.onPostCommitFiberRoot=="function")try{pn.onPostCommitFiberRoot(el,c)}catch{}r=!0}return r}finally{U.p=l,x.T=a,Od(e,n)}}return!1}function Md(e,n,t){n=zn(t,n),n=Uo(e.stateNode,n,2),e=St(e,n,2),e!==null&&(tl(e,2),Gn(e))}function ye(e,n,t){if(e.tag===3)Md(e,e,t);else for(;n!==null;){if(n.tag===3){Md(n,e,t);break}else if(n.tag===1){var a=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Tt===null||!Tt.has(a))){e=zn(t,e),t=qf(2),a=St(n,t,2),a!==null&&(Uf(t,a,n,e),tl(a,2),Gn(a));break}}n=n.return}}function yu(e,n,t){var a=e.pingCache;if(a===null){a=e.pingCache=new tv;var l=new Set;a.set(n,l)}else l=a.get(n),l===void 0&&(l=new Set,a.set(n,l));l.has(t)||(uu=!0,l.add(t),e=uv.bind(null,e,n,t),n.then(e,e))}function uv(e,n,t){var a=e.pingCache;a!==null&&a.delete(n),e.pingedLanes|=e.suspendedLanes&t,e.warmLanes&=~t,ke===e&&(oe&t)===t&&(Ce===4||Ce===3&&(oe&62914560)===oe&&300>Bn()-fu?(De&2)===0&&Ua(e,0):su|=t,qa===oe&&(qa=0)),Gn(e)}function _d(e,n){n===0&&(n=Us()),e=ht(e,n),e!==null&&(tl(e,n),Gn(e))}function sv(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),_d(e,t)}function cv(e,n){var t=0;switch(e.tag){case 13:var a=e.stateNode,l=e.memoizedState;l!==null&&(t=l.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(u(314))}a!==null&&a.delete(n),_d(e,t)}function fv(e,n){return Ur(e,n)}var ar=null,Ha=null,wu=!1,lr=!1,ku=!1,ia=0;function Gn(e){e!==Ha&&e.next===null&&(Ha===null?ar=Ha=e:Ha=Ha.next=e),lr=!0,wu||(wu=!0,mv(dv))}function Hl(e,n){if(!ku&&lr){ku=!0;do for(var t=!1,a=ar;a!==null;){if(e!==0){var l=a.pendingLanes;if(l===0)var r=0;else{var c=a.suspendedLanes,d=a.pingedLanes;r=(1<<31-hn(42|e)+1)-1,r&=l&~(c&~d),r=r&201326677?r&201326677|1:r?r|2:0}r!==0&&(t=!0,Ud(a,r))}else r=oe,r=mi(a,a===ke?r:0),(r&3)===0||nl(a,r)||(t=!0,Ud(a,r));a=a.next}while(t);ku=!1}}function dv(){lr=wu=!1;var e=0;ia!==0&&(kv()&&(e=ia),ia=0);for(var n=Bn(),t=null,a=ar;a!==null;){var l=a.next,r=Cd(a,n);r===0?(a.next=null,t===null?ar=l:t.next=l,l===null&&(Ha=t)):(t=a,(e!==0||(r&3)!==0)&&(lr=!0)),a=l}Hl(e)}function Cd(e,n){for(var t=e.suspendedLanes,a=e.pingedLanes,l=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var c=31-hn(r),d=1<<c,p=l[c];p===-1?((d&t)===0||(d&a)!==0)&&(l[c]=Lp(d,n)):p<=n&&(e.expiredLanes|=d),r&=~d}if(n=ke,t=oe,t=mi(e,e===n?t:0),a=e.callbackNode,t===0||e===n&&Re===2||e.cancelPendingCommit!==null)return a!==null&&a!==null&&Nr(a),e.callbackNode=null,e.callbackPriority=0;if((t&3)===0||nl(e,t)){if(n=t&-t,n===e.callbackPriority)return n;switch(a!==null&&Nr(a),Hs(t)){case 2:case 8:t=_s;break;case 32:t=ci;break;case 268435456:t=Cs;break;default:t=ci}return a=qd.bind(null,e),t=Ur(t,a),e.callbackPriority=n,e.callbackNode=t,n}return a!==null&&a!==null&&Nr(a),e.callbackPriority=2,e.callbackNode=null,2}function qd(e,n){var t=e.callbackNode;if(La()&&e.callbackNode!==t)return null;var a=oe;return a=mi(e,e===ke?a:0),a===0?null:(Rd(e,a,n),Cd(e,Bn()),e.callbackNode!=null&&e.callbackNode===t?qd.bind(null,e):null)}function Ud(e,n){if(La())return null;Rd(e,n,!0)}function mv(e){Sv(function(){(De&6)!==0?Ur(Ms,e):e()})}function Ru(){return ia===0&&(ia=qs()),ia}function Nd(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:bi(""+e)}function Ld(e,n){var t=n.ownerDocument.createElement("input");return t.name=n.name,t.value=n.value,e.id&&t.setAttribute("form",e.id),n.parentNode.insertBefore(t,n),e=new FormData(e),t.parentNode.removeChild(t),e}function pv(e,n,t,a,l){if(n==="submit"&&t&&t.stateNode===l){var r=Nd((l[fn]||null).action),c=a.submitter;c&&(n=(n=c[fn]||null)?Nd(n.formAction):c.getAttribute("formAction"),n!==null&&(r=n,c=null));var d=new Ri("action","action",null,a,l);e.push({event:d,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(ia!==0){var p=c?Ld(l,c):new FormData(l);Oo(t,{pending:!0,data:p,method:l.method,action:r},null,p)}}else typeof r=="function"&&(d.preventDefault(),p=c?Ld(l,c):new FormData(l),Oo(t,{pending:!0,data:p,method:l.method,action:r},r,p))},currentTarget:l}]})}}for(var Su=0;Su<Tc.length;Su++){var zu=Tc[Su],hv=zu.toLowerCase(),vv=zu[0].toUpperCase()+zu.slice(1);Cn(hv,"on"+vv)}Cn(zc,"onAnimationEnd"),Cn(xc,"onAnimationIteration"),Cn(Ec,"onAnimationStart"),Cn("dblclick","onDoubleClick"),Cn("focusin","onFocus"),Cn("focusout","onBlur"),Cn(_h,"onTransitionRun"),Cn(Ch,"onTransitionStart"),Cn(qh,"onTransitionCancel"),Cn(jc,"onTransitionEnd"),da("onMouseEnter",["mouseout","mouseover"]),da("onMouseLeave",["mouseout","mouseover"]),da("onPointerEnter",["pointerout","pointerover"]),da("onPointerLeave",["pointerout","pointerover"]),Bt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Bt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Bt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Bt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Bt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Bt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Bl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gv=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Bl));function Hd(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var a=e[t],l=a.event;a=a.listeners;e:{var r=void 0;if(n)for(var c=a.length-1;0<=c;c--){var d=a[c],p=d.instance,y=d.currentTarget;if(d=d.listener,p!==r&&l.isPropagationStopped())break e;r=d,l.currentTarget=y;try{r(l)}catch(j){$i(j)}l.currentTarget=null,r=p}else for(c=0;c<a.length;c++){if(d=a[c],p=d.instance,y=d.currentTarget,d=d.listener,p!==r&&l.isPropagationStopped())break e;r=d,l.currentTarget=y;try{r(l)}catch(j){$i(j)}l.currentTarget=null,r=p}}}}function le(e,n){var t=n[Hr];t===void 0&&(t=n[Hr]=new Set);var a=e+"__bubble";t.has(a)||(Bd(n,e,2,!1),t.add(a))}function xu(e,n,t){var a=0;n&&(a|=4),Bd(t,e,a,n)}var ir="_reactListening"+Math.random().toString(36).slice(2);function Eu(e){if(!e[ir]){e[ir]=!0,Vs.forEach(function(t){t!=="selectionchange"&&(gv.has(t)||xu(t,!1,e),xu(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ir]||(n[ir]=!0,xu("selectionchange",!1,n))}}function Bd(e,n,t,a){switch(sm(n)){case 2:var l=Yv;break;case 8:l=$v;break;default:l=Hu}t=l.bind(null,n,t,e),l=void 0,!Qr||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),a?l!==void 0?e.addEventListener(n,t,{capture:!0,passive:l}):e.addEventListener(n,t,!0):l!==void 0?e.addEventListener(n,t,{passive:l}):e.addEventListener(n,t,!1)}function ju(e,n,t,a,l){var r=a;if((n&1)===0&&(n&2)===0&&a!==null)e:for(;;){if(a===null)return;var c=a.tag;if(c===3||c===4){var d=a.stateNode.containerInfo;if(d===l||d.nodeType===8&&d.parentNode===l)break;if(c===4)for(c=a.return;c!==null;){var p=c.tag;if((p===3||p===4)&&(p=c.stateNode.containerInfo,p===l||p.nodeType===8&&p.parentNode===l))return;c=c.return}for(;d!==null;){if(c=Ht(d),c===null)return;if(p=c.tag,p===5||p===6||p===26||p===27){a=r=c;continue e}d=d.parentNode}}a=a.return}ec(function(){var y=r,j=Gr(t),D=[];e:{var z=Ac.get(e);if(z!==void 0){var E=Ri,H=e;switch(e){case"keypress":if(wi(t)===0)break e;case"keydown":case"keyup":E=ch;break;case"focusin":H="focus",E=Jr;break;case"focusout":H="blur",E=Jr;break;case"beforeblur":case"afterblur":E=Jr;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":E=ac;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":E=Pp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":E=mh;break;case zc:case xc:case Ec:E=nh;break;case jc:E=hh;break;case"scroll":case"scrollend":E=Kp;break;case"wheel":E=gh;break;case"copy":case"cut":case"paste":E=ah;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":E=ic;break;case"toggle":case"beforetoggle":E=yh}var Z=(n&4)!==0,qe=!Z&&(e==="scroll"||e==="scrollend"),R=Z?z!==null?z+"Capture":null:z;Z=[];for(var g=y,S;g!==null;){var A=g;if(S=A.stateNode,A=A.tag,A!==5&&A!==26&&A!==27||S===null||R===null||(A=il(g,R),A!=null&&Z.push(Fl(g,A,S))),qe)break;g=g.return}0<Z.length&&(z=new E(z,H,null,t,j),D.push({event:z,listeners:Z}))}}if((n&7)===0){e:{if(z=e==="mouseover"||e==="pointerover",E=e==="mouseout"||e==="pointerout",z&&t!==$r&&(H=t.relatedTarget||t.fromElement)&&(Ht(H)||H[sa]))break e;if((E||z)&&(z=j.window===j?j:(z=j.ownerDocument)?z.defaultView||z.parentWindow:window,E?(H=t.relatedTarget||t.toElement,E=y,H=H?Ht(H):null,H!==null&&(qe=G(H),Z=H.tag,H!==qe||Z!==5&&Z!==27&&Z!==6)&&(H=null)):(E=null,H=y),E!==H)){if(Z=ac,A="onMouseLeave",R="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(Z=ic,A="onPointerLeave",R="onPointerEnter",g="pointer"),qe=E==null?z:ll(E),S=H==null?z:ll(H),z=new Z(A,g+"leave",E,t,j),z.target=qe,z.relatedTarget=S,A=null,Ht(j)===y&&(Z=new Z(R,g+"enter",H,t,j),Z.target=S,Z.relatedTarget=qe,A=Z),qe=A,E&&H)n:{for(Z=E,R=H,g=0,S=Z;S;S=Ba(S))g++;for(S=0,A=R;A;A=Ba(A))S++;for(;0<g-S;)Z=Ba(Z),g--;for(;0<S-g;)R=Ba(R),S--;for(;g--;){if(Z===R||R!==null&&Z===R.alternate)break n;Z=Ba(Z),R=Ba(R)}Z=null}else Z=null;E!==null&&Fd(D,z,E,Z,!1),H!==null&&qe!==null&&Fd(D,qe,H,Z,!0)}}e:{if(z=y?ll(y):window,E=z.nodeName&&z.nodeName.toLowerCase(),E==="select"||E==="input"&&z.type==="file")var N=mc;else if(fc(z))if(pc)N=Th;else{N=jh;var I=Eh}else E=z.nodeName,!E||E.toLowerCase()!=="input"||z.type!=="checkbox"&&z.type!=="radio"?y&&Yr(y.elementType)&&(N=mc):N=Ah;if(N&&(N=N(e,y))){dc(D,N,t,j);break e}I&&I(e,z,y),e==="focusout"&&y&&z.type==="number"&&y.memoizedProps.value!=null&&Vr(z,"number",z.value)}switch(I=y?ll(y):window,e){case"focusin":(fc(I)||I.contentEditable==="true")&&(ba=I,ao=y,ml=null);break;case"focusout":ml=ao=ba=null;break;case"mousedown":lo=!0;break;case"contextmenu":case"mouseup":case"dragend":lo=!1,Rc(D,t,j);break;case"selectionchange":if(Mh)break;case"keydown":case"keyup":Rc(D,t,j)}var B;if(Ir)e:{switch(e){case"compositionstart":var Y="onCompositionStart";break e;case"compositionend":Y="onCompositionEnd";break e;case"compositionupdate":Y="onCompositionUpdate";break e}Y=void 0}else ga?sc(e,t)&&(Y="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(Y="onCompositionStart");Y&&(rc&&t.locale!=="ko"&&(ga||Y!=="onCompositionStart"?Y==="onCompositionEnd"&&ga&&(B=nc()):(pt=j,Xr="value"in pt?pt.value:pt.textContent,ga=!0)),I=rr(y,Y),0<I.length&&(Y=new lc(Y,e,null,t,j),D.push({event:Y,listeners:I}),B?Y.data=B:(B=cc(t),B!==null&&(Y.data=B)))),(B=kh?Rh(e,t):Sh(e,t))&&(Y=rr(y,"onBeforeInput"),0<Y.length&&(I=new lc("onBeforeInput","beforeinput",null,t,j),D.push({event:I,listeners:Y}),I.data=B)),pv(D,e,y,t,j)}Hd(D,n)})}function Fl(e,n,t){return{instance:e,listener:n,currentTarget:t}}function rr(e,n){for(var t=n+"Capture",a=[];e!==null;){var l=e,r=l.stateNode;l=l.tag,l!==5&&l!==26&&l!==27||r===null||(l=il(e,t),l!=null&&a.unshift(Fl(e,l,r)),l=il(e,n),l!=null&&a.push(Fl(e,l,r))),e=e.return}return a}function Ba(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Fd(e,n,t,a,l){for(var r=n._reactName,c=[];t!==null&&t!==a;){var d=t,p=d.alternate,y=d.stateNode;if(d=d.tag,p!==null&&p===a)break;d!==5&&d!==26&&d!==27||y===null||(p=y,l?(y=il(t,r),y!=null&&c.unshift(Fl(t,y,p))):l||(y=il(t,r),y!=null&&c.push(Fl(t,y,p)))),t=t.return}c.length!==0&&e.push({event:n,listeners:c})}var bv=/\r\n?/g,yv=/\u0000|\uFFFD/g;function Vd(e){return(typeof e=="string"?e:""+e).replace(bv,`
`).replace(yv,"")}function Yd(e,n){return n=Vd(n),Vd(e)===n}function or(){}function ve(e,n,t,a,l,r){switch(t){case"children":typeof a=="string"?n==="body"||n==="textarea"&&a===""||pa(e,a):(typeof a=="number"||typeof a=="bigint")&&n!=="body"&&pa(e,""+a);break;case"className":hi(e,"class",a);break;case"tabIndex":hi(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":hi(e,t,a);break;case"style":Ps(e,a,r);break;case"data":if(n!=="object"){hi(e,"data",a);break}case"src":case"href":if(a===""&&(n!=="a"||t!=="href")){e.removeAttribute(t);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(t);break}a=bi(""+a),e.setAttribute(t,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(t==="formAction"?(n!=="input"&&ve(e,n,"name",l.name,l,null),ve(e,n,"formEncType",l.formEncType,l,null),ve(e,n,"formMethod",l.formMethod,l,null),ve(e,n,"formTarget",l.formTarget,l,null)):(ve(e,n,"encType",l.encType,l,null),ve(e,n,"method",l.method,l,null),ve(e,n,"target",l.target,l,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(t);break}a=bi(""+a),e.setAttribute(t,a);break;case"onClick":a!=null&&(e.onclick=or);break;case"onScroll":a!=null&&le("scroll",e);break;case"onScrollEnd":a!=null&&le("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(u(61));if(t=a.__html,t!=null){if(l.children!=null)throw Error(u(60));e.innerHTML=t}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}t=bi(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(t,""+a):e.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(t,""):e.removeAttribute(t);break;case"capture":case"download":a===!0?e.setAttribute(t,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(t,a):e.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(t,a):e.removeAttribute(t);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(t):e.setAttribute(t,a);break;case"popover":le("beforetoggle",e),le("toggle",e),pi(e,"popover",a);break;case"xlinkActuate":Qn(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Qn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Qn(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Qn(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Qn(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Qn(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Qn(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Qn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Qn(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":pi(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(t=Xp.get(t)||t,pi(e,t,a))}}function Au(e,n,t,a,l,r){switch(t){case"style":Ps(e,a,r);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(u(61));if(t=a.__html,t!=null){if(l.children!=null)throw Error(u(60));e.innerHTML=t}}break;case"children":typeof a=="string"?pa(e,a):(typeof a=="number"||typeof a=="bigint")&&pa(e,""+a);break;case"onScroll":a!=null&&le("scroll",e);break;case"onScrollEnd":a!=null&&le("scrollend",e);break;case"onClick":a!=null&&(e.onclick=or);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ys.hasOwnProperty(t))e:{if(t[0]==="o"&&t[1]==="n"&&(l=t.endsWith("Capture"),n=t.slice(2,l?t.length-7:void 0),r=e[fn]||null,r=r!=null?r[t]:null,typeof r=="function"&&e.removeEventListener(n,r,l),typeof a=="function")){typeof r!="function"&&r!==null&&(t in e?e[t]=null:e.hasAttribute(t)&&e.removeAttribute(t)),e.addEventListener(n,a,l);break e}t in e?e[t]=a:a===!0?e.setAttribute(t,""):pi(e,t,a)}}}function en(e,n,t){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":le("error",e),le("load",e);var a=!1,l=!1,r;for(r in t)if(t.hasOwnProperty(r)){var c=t[r];if(c!=null)switch(r){case"src":a=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,n));default:ve(e,n,r,c,t,null)}}l&&ve(e,n,"srcSet",t.srcSet,t,null),a&&ve(e,n,"src",t.src,t,null);return;case"input":le("invalid",e);var d=r=c=l=null,p=null,y=null;for(a in t)if(t.hasOwnProperty(a)){var j=t[a];if(j!=null)switch(a){case"name":l=j;break;case"type":c=j;break;case"checked":p=j;break;case"defaultChecked":y=j;break;case"value":r=j;break;case"defaultValue":d=j;break;case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(u(137,n));break;default:ve(e,n,a,j,t,null)}}Xs(e,r,d,p,y,c,l,!1),vi(e);return;case"select":le("invalid",e),a=c=r=null;for(l in t)if(t.hasOwnProperty(l)&&(d=t[l],d!=null))switch(l){case"value":r=d;break;case"defaultValue":c=d;break;case"multiple":a=d;default:ve(e,n,l,d,t,null)}n=r,t=c,e.multiple=!!a,n!=null?ma(e,!!a,n,!1):t!=null&&ma(e,!!a,t,!0);return;case"textarea":le("invalid",e),r=l=a=null;for(c in t)if(t.hasOwnProperty(c)&&(d=t[c],d!=null))switch(c){case"value":a=d;break;case"defaultValue":l=d;break;case"children":r=d;break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(u(91));break;default:ve(e,n,c,d,t,null)}Ks(e,a,l,r),vi(e);return;case"option":for(p in t)if(t.hasOwnProperty(p)&&(a=t[p],a!=null))switch(p){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:ve(e,n,p,a,t,null)}return;case"dialog":le("cancel",e),le("close",e);break;case"iframe":case"object":le("load",e);break;case"video":case"audio":for(a=0;a<Bl.length;a++)le(Bl[a],e);break;case"image":le("error",e),le("load",e);break;case"details":le("toggle",e);break;case"embed":case"source":case"link":le("error",e),le("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(y in t)if(t.hasOwnProperty(y)&&(a=t[y],a!=null))switch(y){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,n));default:ve(e,n,y,a,t,null)}return;default:if(Yr(n)){for(j in t)t.hasOwnProperty(j)&&(a=t[j],a!==void 0&&Au(e,n,j,a,t,void 0));return}}for(d in t)t.hasOwnProperty(d)&&(a=t[d],a!=null&&ve(e,n,d,a,t,null))}function wv(e,n,t,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,r=null,c=null,d=null,p=null,y=null,j=null;for(E in t){var D=t[E];if(t.hasOwnProperty(E)&&D!=null)switch(E){case"checked":break;case"value":break;case"defaultValue":p=D;default:a.hasOwnProperty(E)||ve(e,n,E,null,a,D)}}for(var z in a){var E=a[z];if(D=t[z],a.hasOwnProperty(z)&&(E!=null||D!=null))switch(z){case"type":r=E;break;case"name":l=E;break;case"checked":y=E;break;case"defaultChecked":j=E;break;case"value":c=E;break;case"defaultValue":d=E;break;case"children":case"dangerouslySetInnerHTML":if(E!=null)throw Error(u(137,n));break;default:E!==D&&ve(e,n,z,E,a,D)}}Fr(e,c,d,p,y,j,r,l);return;case"select":E=c=d=z=null;for(r in t)if(p=t[r],t.hasOwnProperty(r)&&p!=null)switch(r){case"value":break;case"multiple":E=p;default:a.hasOwnProperty(r)||ve(e,n,r,null,a,p)}for(l in a)if(r=a[l],p=t[l],a.hasOwnProperty(l)&&(r!=null||p!=null))switch(l){case"value":z=r;break;case"defaultValue":d=r;break;case"multiple":c=r;default:r!==p&&ve(e,n,l,r,a,p)}n=d,t=c,a=E,z!=null?ma(e,!!t,z,!1):!!a!=!!t&&(n!=null?ma(e,!!t,n,!0):ma(e,!!t,t?[]:"",!1));return;case"textarea":E=z=null;for(d in t)if(l=t[d],t.hasOwnProperty(d)&&l!=null&&!a.hasOwnProperty(d))switch(d){case"value":break;case"children":break;default:ve(e,n,d,null,a,l)}for(c in a)if(l=a[c],r=t[c],a.hasOwnProperty(c)&&(l!=null||r!=null))switch(c){case"value":z=l;break;case"defaultValue":E=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(u(91));break;default:l!==r&&ve(e,n,c,l,a,r)}Ws(e,z,E);return;case"option":for(var H in t)if(z=t[H],t.hasOwnProperty(H)&&z!=null&&!a.hasOwnProperty(H))switch(H){case"selected":e.selected=!1;break;default:ve(e,n,H,null,a,z)}for(p in a)if(z=a[p],E=t[p],a.hasOwnProperty(p)&&z!==E&&(z!=null||E!=null))switch(p){case"selected":e.selected=z&&typeof z!="function"&&typeof z!="symbol";break;default:ve(e,n,p,z,a,E)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Z in t)z=t[Z],t.hasOwnProperty(Z)&&z!=null&&!a.hasOwnProperty(Z)&&ve(e,n,Z,null,a,z);for(y in a)if(z=a[y],E=t[y],a.hasOwnProperty(y)&&z!==E&&(z!=null||E!=null))switch(y){case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(u(137,n));break;default:ve(e,n,y,z,a,E)}return;default:if(Yr(n)){for(var qe in t)z=t[qe],t.hasOwnProperty(qe)&&z!==void 0&&!a.hasOwnProperty(qe)&&Au(e,n,qe,void 0,a,z);for(j in a)z=a[j],E=t[j],!a.hasOwnProperty(j)||z===E||z===void 0&&E===void 0||Au(e,n,j,z,a,E);return}}for(var R in t)z=t[R],t.hasOwnProperty(R)&&z!=null&&!a.hasOwnProperty(R)&&ve(e,n,R,null,a,z);for(D in a)z=a[D],E=t[D],!a.hasOwnProperty(D)||z===E||z==null&&E==null||ve(e,n,D,z,a,E)}var Tu=null,Du=null;function ur(e){return e.nodeType===9?e:e.ownerDocument}function $d(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Gd(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Ou(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Mu=null;function kv(){var e=window.event;return e&&e.type==="popstate"?e===Mu?!1:(Mu=e,!0):(Mu=null,!1)}var Zd=typeof setTimeout=="function"?setTimeout:void 0,Rv=typeof clearTimeout=="function"?clearTimeout:void 0,Qd=typeof Promise=="function"?Promise:void 0,Sv=typeof queueMicrotask=="function"?queueMicrotask:typeof Qd<"u"?function(e){return Qd.resolve(null).then(e).catch(zv)}:Zd;function zv(e){setTimeout(function(){throw e})}function _u(e,n){var t=n,a=0;do{var l=t.nextSibling;if(e.removeChild(t),l&&l.nodeType===8)if(t=l.data,t==="/$"){if(a===0){e.removeChild(l),Wl(n);return}a--}else t!=="$"&&t!=="$?"&&t!=="$!"||a++;t=l}while(t);Wl(n)}function Cu(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var t=n;switch(n=n.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":Cu(t),Br(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}e.removeChild(t)}}function xv(e,n,t,a){for(;e.nodeType===1;){var l=t;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[al])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==l.rel||e.getAttribute("href")!==(l.href==null?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var r=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=Nn(e.nextSibling),e===null)break}return null}function Ev(e,n,t){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Nn(e.nextSibling),e===null))return null;return e}function Nn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}function Xd(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}function Wd(e,n,t){switch(n=ur(t),e){case"html":if(e=n.documentElement,!e)throw Error(u(452));return e;case"head":if(e=n.head,!e)throw Error(u(453));return e;case"body":if(e=n.body,!e)throw Error(u(454));return e;default:throw Error(u(451))}}var Mn=new Map,Kd=new Set;function sr(e){return typeof e.getRootNode=="function"?e.getRootNode():e.ownerDocument}var ut=U.d;U.d={f:jv,r:Av,D:Tv,C:Dv,L:Ov,m:Mv,X:Cv,S:_v,M:qv};function jv(){var e=ut.f(),n=nr();return e||n}function Av(e){var n=ca(e);n!==null&&n.tag===5&&n.type==="form"?Sf(n):ut.r(e)}var Fa=typeof document>"u"?null:document;function Jd(e,n,t){var a=Fa;if(a&&typeof n=="string"&&n){var l=Rn(n);l='link[rel="'+e+'"][href="'+l+'"]',typeof t=="string"&&(l+='[crossorigin="'+t+'"]'),Kd.has(l)||(Kd.add(l),e={rel:e,crossOrigin:t,href:n},a.querySelector(l)===null&&(n=a.createElement("link"),en(n,"link",e),Ze(n),a.head.appendChild(n)))}}function Tv(e){ut.D(e),Jd("dns-prefetch",e,null)}function Dv(e,n){ut.C(e,n),Jd("preconnect",e,n)}function Ov(e,n,t){ut.L(e,n,t);var a=Fa;if(a&&e&&n){var l='link[rel="preload"][as="'+Rn(n)+'"]';n==="image"&&t&&t.imageSrcSet?(l+='[imagesrcset="'+Rn(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(l+='[imagesizes="'+Rn(t.imageSizes)+'"]')):l+='[href="'+Rn(e)+'"]';var r=l;switch(n){case"style":r=Va(e);break;case"script":r=Ya(e)}Mn.has(r)||(e=M({rel:"preload",href:n==="image"&&t&&t.imageSrcSet?void 0:e,as:n},t),Mn.set(r,e),a.querySelector(l)!==null||n==="style"&&a.querySelector(Vl(r))||n==="script"&&a.querySelector(Yl(r))||(n=a.createElement("link"),en(n,"link",e),Ze(n),a.head.appendChild(n)))}}function Mv(e,n){ut.m(e,n);var t=Fa;if(t&&e){var a=n&&typeof n.as=="string"?n.as:"script",l='link[rel="modulepreload"][as="'+Rn(a)+'"][href="'+Rn(e)+'"]',r=l;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=Ya(e)}if(!Mn.has(r)&&(e=M({rel:"modulepreload",href:e},n),Mn.set(r,e),t.querySelector(l)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(Yl(r)))return}a=t.createElement("link"),en(a,"link",e),Ze(a),t.head.appendChild(a)}}}function _v(e,n,t){ut.S(e,n,t);var a=Fa;if(a&&e){var l=fa(a).hoistableStyles,r=Va(e);n=n||"default";var c=l.get(r);if(!c){var d={loading:0,preload:null};if(c=a.querySelector(Vl(r)))d.loading=5;else{e=M({rel:"stylesheet",href:e,"data-precedence":n},t),(t=Mn.get(r))&&qu(e,t);var p=c=a.createElement("link");Ze(p),en(p,"link",e),p._p=new Promise(function(y,j){p.onload=y,p.onerror=j}),p.addEventListener("load",function(){d.loading|=1}),p.addEventListener("error",function(){d.loading|=2}),d.loading|=4,cr(c,n,a)}c={type:"stylesheet",instance:c,count:1,state:d},l.set(r,c)}}}function Cv(e,n){ut.X(e,n);var t=Fa;if(t&&e){var a=fa(t).hoistableScripts,l=Ya(e),r=a.get(l);r||(r=t.querySelector(Yl(l)),r||(e=M({src:e,async:!0},n),(n=Mn.get(l))&&Uu(e,n),r=t.createElement("script"),Ze(r),en(r,"link",e),t.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},a.set(l,r))}}function qv(e,n){ut.M(e,n);var t=Fa;if(t&&e){var a=fa(t).hoistableScripts,l=Ya(e),r=a.get(l);r||(r=t.querySelector(Yl(l)),r||(e=M({src:e,async:!0,type:"module"},n),(n=Mn.get(l))&&Uu(e,n),r=t.createElement("script"),Ze(r),en(r,"link",e),t.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},a.set(l,r))}}function Pd(e,n,t,a){var l=(l=ft.current)?sr(l):null;if(!l)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(n=Va(t.href),t=fa(l).hoistableStyles,a=t.get(n),a||(a={type:"style",instance:null,count:0,state:null},t.set(n,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){e=Va(t.href);var r=fa(l).hoistableStyles,c=r.get(e);if(c||(l=l.ownerDocument||l,c={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,c),(r=l.querySelector(Vl(e)))&&!r._p&&(c.instance=r,c.state.loading=5),Mn.has(e)||(t={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},Mn.set(e,t),r||Uv(l,e,t,c.state))),n&&a===null)throw Error(u(528,""));return c}if(n&&a!==null)throw Error(u(529,""));return null;case"script":return n=t.async,t=t.src,typeof t=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Ya(t),t=fa(l).hoistableScripts,a=t.get(n),a||(a={type:"script",instance:null,count:0,state:null},t.set(n,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function Va(e){return'href="'+Rn(e)+'"'}function Vl(e){return'link[rel="stylesheet"]['+e+"]"}function Id(e){return M({},e,{"data-precedence":e.precedence,precedence:null})}function Uv(e,n,t,a){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?a.loading=1:(n=e.createElement("link"),a.preload=n,n.addEventListener("load",function(){return a.loading|=1}),n.addEventListener("error",function(){return a.loading|=2}),en(n,"link",t),Ze(n),e.head.appendChild(n))}function Ya(e){return'[src="'+Rn(e)+'"]'}function Yl(e){return"script[async]"+e}function em(e,n,t){if(n.count++,n.instance===null)switch(n.type){case"style":var a=e.querySelector('style[data-href~="'+Rn(t.href)+'"]');if(a)return n.instance=a,Ze(a),a;var l=M({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),Ze(a),en(a,"style",l),cr(a,t.precedence,e),n.instance=a;case"stylesheet":l=Va(t.href);var r=e.querySelector(Vl(l));if(r)return n.state.loading|=4,n.instance=r,Ze(r),r;a=Id(t),(l=Mn.get(l))&&qu(a,l),r=(e.ownerDocument||e).createElement("link"),Ze(r);var c=r;return c._p=new Promise(function(d,p){c.onload=d,c.onerror=p}),en(r,"link",a),n.state.loading|=4,cr(r,t.precedence,e),n.instance=r;case"script":return r=Ya(t.src),(l=e.querySelector(Yl(r)))?(n.instance=l,Ze(l),l):(a=t,(l=Mn.get(r))&&(a=M({},t),Uu(a,l)),e=e.ownerDocument||e,l=e.createElement("script"),Ze(l),en(l,"link",a),e.head.appendChild(l),n.instance=l);case"void":return null;default:throw Error(u(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(a=n.instance,n.state.loading|=4,cr(a,t.precedence,e));return n.instance}function cr(e,n,t){for(var a=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=a.length?a[a.length-1]:null,r=l,c=0;c<a.length;c++){var d=a[c];if(d.dataset.precedence===n)r=d;else if(r!==l)break}r?r.parentNode.insertBefore(e,r.nextSibling):(n=t.nodeType===9?t.head:t,n.insertBefore(e,n.firstChild))}function qu(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Uu(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var fr=null;function nm(e,n,t){if(fr===null){var a=new Map,l=fr=new Map;l.set(t,a)}else l=fr,a=l.get(t),a||(a=new Map,l.set(t,a));if(a.has(e))return a;for(a.set(e,null),t=t.getElementsByTagName(e),l=0;l<t.length;l++){var r=t[l];if(!(r[al]||r[an]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var c=r.getAttribute(n)||"";c=e+c;var d=a.get(c);d?d.push(r):a.set(c,[r])}}return a}function tm(e,n,t){e=e.ownerDocument||e,e.head.insertBefore(t,n==="title"?e.querySelector("head > title"):null)}function Nv(e,n,t){if(t===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function am(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var $l=null;function Lv(){}function Hv(e,n,t){if($l===null)throw Error(u(475));var a=$l;if(n.type==="stylesheet"&&(typeof t.media!="string"||matchMedia(t.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var l=Va(t.href),r=e.querySelector(Vl(l));if(r){e=r._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(a.count++,a=dr.bind(a),e.then(a,a)),n.state.loading|=4,n.instance=r,Ze(r);return}r=e.ownerDocument||e,t=Id(t),(l=Mn.get(l))&&qu(t,l),r=r.createElement("link"),Ze(r);var c=r;c._p=new Promise(function(d,p){c.onload=d,c.onerror=p}),en(r,"link",t),n.instance=r}a.stylesheets===null&&(a.stylesheets=new Map),a.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(a.count++,n=dr.bind(a),e.addEventListener("load",n),e.addEventListener("error",n))}}function Bv(){if($l===null)throw Error(u(475));var e=$l;return e.stylesheets&&e.count===0&&Nu(e,e.stylesheets),0<e.count?function(n){var t=setTimeout(function(){if(e.stylesheets&&Nu(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(t)}}:null}function dr(){if(this.count--,this.count===0){if(this.stylesheets)Nu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var mr=null;function Nu(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,mr=new Map,n.forEach(Fv,e),mr=null,dr.call(e))}function Fv(e,n){if(!(n.state.loading&4)){var t=mr.get(e);if(t)var a=t.get(null);else{t=new Map,mr.set(e,t);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<l.length;r++){var c=l[r];(c.nodeName==="LINK"||c.getAttribute("media")!=="not all")&&(t.set(c.dataset.precedence,c),a=c)}a&&t.set(null,a)}l=n.instance,c=l.getAttribute("data-precedence"),r=t.get(c)||a,r===a&&t.set(null,l),t.set(c,l),this.count++,a=dr.bind(this),l.addEventListener("load",a),l.addEventListener("error",a),r?r.parentNode.insertBefore(l,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),n.state.loading|=4}}var Gl={$$typeof:F,Provider:null,Consumer:null,_currentValue:re,_currentValue2:re,_threadCount:0};function Vv(e,n,t,a,l,r,c,d){this.tag=1,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Lr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Lr(0),this.hiddenUpdates=Lr(null),this.identifierPrefix=a,this.onUncaughtError=l,this.onCaughtError=r,this.onRecoverableError=c,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=d,this.incompleteTransitions=new Map}function lm(e,n,t,a,l,r,c,d,p,y,j,D){return e=new Vv(e,n,t,c,d,p,y,D),n=1,r===!0&&(n|=24),r=Dn(3,null,null,n),e.current=r,r.stateNode=e,n=ho(),n.refCount++,e.pooledCache=n,n.refCount++,r.memoizedState={element:a,isDehydrated:t,cache:n},Wo(r),e}function im(e){return e?(e=ka,e):ka}function rm(e,n,t,a,l,r){l=im(l),a.context===null?a.context=l:a.pendingContext=l,a=Rt(n),a.payload={element:t},r=r===void 0?null:r,r!==null&&(a.callback=r),t=St(e,a,n),t!==null&&(sn(t,e,n),Al(t,e,n))}function om(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Lu(e,n){om(e,n),(e=e.alternate)&&om(e,n)}function um(e){if(e.tag===13){var n=ht(e,67108864);n!==null&&sn(n,e,67108864),Lu(e,67108864)}}var pr=!0;function Yv(e,n,t,a){var l=x.T;x.T=null;var r=U.p;try{U.p=2,Hu(e,n,t,a)}finally{U.p=r,x.T=l}}function $v(e,n,t,a){var l=x.T;x.T=null;var r=U.p;try{U.p=8,Hu(e,n,t,a)}finally{U.p=r,x.T=l}}function Hu(e,n,t,a){if(pr){var l=Bu(a);if(l===null)ju(e,n,a,hr,t),cm(e,a);else if(Zv(l,e,n,t,a))a.stopPropagation();else if(cm(e,a),n&4&&-1<Gv.indexOf(e)){for(;l!==null;){var r=ca(l);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var c=Lt(r.pendingLanes);if(c!==0){var d=r;for(d.pendingLanes|=2,d.entangledLanes|=2;c;){var p=1<<31-hn(c);d.entanglements[1]|=p,c&=~p}Gn(r),(De&6)===0&&(Pi=Bn()+500,Hl(0))}}break;case 13:d=ht(r,2),d!==null&&sn(d,r,2),nr(),Lu(r,2)}if(r=Bu(a),r===null&&ju(e,n,a,hr,t),r===l)break;l=r}l!==null&&a.stopPropagation()}else ju(e,n,a,null,t)}}function Bu(e){return e=Gr(e),Fu(e)}var hr=null;function Fu(e){if(hr=null,e=Ht(e),e!==null){var n=G(e);if(n===null)e=null;else{var t=n.tag;if(t===13){if(e=we(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return hr=e,null}function sm(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Dp()){case Ms:return 2;case _s:return 8;case ci:case Op:return 32;case Cs:return 268435456;default:return 32}default:return 32}}var Vu=!1,Dt=null,Ot=null,Mt=null,Zl=new Map,Ql=new Map,_t=[],Gv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function cm(e,n){switch(e){case"focusin":case"focusout":Dt=null;break;case"dragenter":case"dragleave":Ot=null;break;case"mouseover":case"mouseout":Mt=null;break;case"pointerover":case"pointerout":Zl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ql.delete(n.pointerId)}}function Xl(e,n,t,a,l,r){return e===null||e.nativeEvent!==r?(e={blockedOn:n,domEventName:t,eventSystemFlags:a,nativeEvent:r,targetContainers:[l]},n!==null&&(n=ca(n),n!==null&&um(n)),e):(e.eventSystemFlags|=a,n=e.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),e)}function Zv(e,n,t,a,l){switch(n){case"focusin":return Dt=Xl(Dt,e,n,t,a,l),!0;case"dragenter":return Ot=Xl(Ot,e,n,t,a,l),!0;case"mouseover":return Mt=Xl(Mt,e,n,t,a,l),!0;case"pointerover":var r=l.pointerId;return Zl.set(r,Xl(Zl.get(r)||null,e,n,t,a,l)),!0;case"gotpointercapture":return r=l.pointerId,Ql.set(r,Xl(Ql.get(r)||null,e,n,t,a,l)),!0}return!1}function fm(e){var n=Ht(e.target);if(n!==null){var t=G(n);if(t!==null){if(n=t.tag,n===13){if(n=we(t),n!==null){e.blockedOn=n,Bp(e.priority,function(){if(t.tag===13){var a=wn(),l=ht(t,a);l!==null&&sn(l,t,a),Lu(t,a)}});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function vr(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Bu(e.nativeEvent);if(t===null){t=e.nativeEvent;var a=new t.constructor(t.type,t);$r=a,t.target.dispatchEvent(a),$r=null}else return n=ca(t),n!==null&&um(n),e.blockedOn=t,!1;n.shift()}return!0}function dm(e,n,t){vr(e)&&t.delete(n)}function Qv(){Vu=!1,Dt!==null&&vr(Dt)&&(Dt=null),Ot!==null&&vr(Ot)&&(Ot=null),Mt!==null&&vr(Mt)&&(Mt=null),Zl.forEach(dm),Ql.forEach(dm)}function gr(e,n){e.blockedOn===n&&(e.blockedOn=null,Vu||(Vu=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,Qv)))}var br=null;function mm(e){br!==e&&(br=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){br===e&&(br=null);for(var n=0;n<e.length;n+=3){var t=e[n],a=e[n+1],l=e[n+2];if(typeof a!="function"){if(Fu(a||t)===null)continue;break}var r=ca(t);r!==null&&(e.splice(n,3),n-=3,Oo(r,{pending:!0,data:l,method:t.method,action:a},a,l))}}))}function Wl(e){function n(p){return gr(p,e)}Dt!==null&&gr(Dt,e),Ot!==null&&gr(Ot,e),Mt!==null&&gr(Mt,e),Zl.forEach(n),Ql.forEach(n);for(var t=0;t<_t.length;t++){var a=_t[t];a.blockedOn===e&&(a.blockedOn=null)}for(;0<_t.length&&(t=_t[0],t.blockedOn===null);)fm(t),t.blockedOn===null&&_t.shift();if(t=(e.ownerDocument||e).$$reactFormReplay,t!=null)for(a=0;a<t.length;a+=3){var l=t[a],r=t[a+1],c=l[fn]||null;if(typeof r=="function")c||mm(t);else if(c){var d=null;if(r&&r.hasAttribute("formAction")){if(l=r,c=r[fn]||null)d=c.formAction;else if(Fu(l)!==null)continue}else d=c.action;typeof d=="function"?t[a+1]=d:(t.splice(a,3),a-=3),mm(t)}}}function Yu(e){this._internalRoot=e}yr.prototype.render=Yu.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(u(409));var t=n.current,a=wn();rm(t,a,e,n,null,null)},yr.prototype.unmount=Yu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;e.tag===0&&La(),rm(e.current,2,null,e,null,null),nr(),n[sa]=null}};function yr(e){this._internalRoot=e}yr.prototype.unstable_scheduleHydration=function(e){if(e){var n=Bs();e={blockedOn:null,target:e,priority:n};for(var t=0;t<_t.length&&n!==0&&n<_t[t].priority;t++);_t.splice(t,0,e),t===0&&fm(e)}};var pm=i.version;if(pm!=="19.0.0")throw Error(u(527,pm,"19.0.0"));U.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=O(n),e=e!==null?$(e):null,e=e===null?null:e.stateNode,e};var Xv={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:x,findFiberByHostInstance:Ht,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wr.isDisabled&&wr.supportsFiber)try{el=wr.inject(Xv),pn=wr}catch{}}return Jl.createRoot=function(e,n){if(!f(e))throw Error(u(299));var t=!1,a="",l=Of,r=Mf,c=_f,d=null;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(l=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(c=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(d=n.unstable_transitionCallbacks)),n=lm(e,1,!1,null,null,t,a,l,r,c,d,null),e[sa]=n.current,Eu(e.nodeType===8?e.parentNode:e),new Yu(n)},Jl.hydrateRoot=function(e,n,t){if(!f(e))throw Error(u(299));var a=!1,l="",r=Of,c=Mf,d=_f,p=null,y=null;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(r=t.onUncaughtError),t.onCaughtError!==void 0&&(c=t.onCaughtError),t.onRecoverableError!==void 0&&(d=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(p=t.unstable_transitionCallbacks),t.formState!==void 0&&(y=t.formState)),n=lm(e,1,!0,n,t??null,a,l,r,c,d,p,y),n.context=im(null),t=n.current,a=wn(),l=Rt(a),l.callback=null,St(t,l,a),n.current.lanes=a,tl(n,a),Gn(n),e[sa]=n.current,Eu(e),new yr(n)},Jl.version="19.0.0",Jl}var zm;function rg(){if(zm)return Zu.exports;zm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(i){console.error(i)}}return s(),Zu.exports=ig(),Zu.exports}var og=rg();const ug=cp(og);class sg extends ds.Component{constructor(o){super(o);kr(this,"container");kr(this,"player",null);kr(this,"isLoading",!1);this.container=ds.createRef()}componentDidMount(){this.player=window.RufflePlayer.newest().createPlayer(),this.player.id="player",this.player.addEventListener("loadedmetadata",()=>{this.props.onLoadedMetadata&&this.props.onLoadedMetadata(this.player.ruffle().metadata)}),this.isLoading=!1,this.container.current.appendChild(this.player)}componentWillUnmount(){var o;(o=this.player)==null||o.remove(),this.player=null,this.isLoading=!1}render(){return q.jsx("div",{id:this.props.id,ref:this.container,onDragEnter:this.props.onDragEnter,onDragLeave:this.props.onDragLeave,onDragOver:this.props.onDragOver,onDrop:this.props.onDragDrop,children:this.props.children})}reload(){var o;this.isLoading||(this.isLoading=!0,(o=this.player)==null||o.ruffle().reload().finally(()=>{this.isLoading=!1}))}loadUrl(o,u){var f;this.isLoading||(this.isLoading=!0,(f=this.player)==null||f.ruffle().load({url:o,...this.props.baseConfig,...u}).finally(()=>{this.isLoading=!1}))}loadFile(o){this.isLoading||(this.isLoading=!0,new Response(o).arrayBuffer().then(u=>{var f;return(f=this.player)==null?void 0:f.ruffle().load({data:u,...this.props.baseConfig})}).finally(()=>{this.isLoading=!1}))}}const cg=""+new URL("../logo.svg",import.meta.url).href,xm={Animation:"Animations",Game:"Games"};function fg({sampleSelectionInput:s,selectedSample:i,setSelectedSample:o,setSelectedFilename:u,onSelectUrl:f}){const[m,h]=nn.useState([]),k=b=>{const _=b.target,L=parseInt(_.value,10);m[L]&&w(m[L])},w=nn.useCallback(b=>{f(b.location,b.config??{}),o(b),u(null)},[f,u,o]);return nn.useEffect(()=>{(async()=>{const b=await fetch("swfs.json");if(b.ok){const _=await b.json();h(_.swfs),_.swfs.length>0&&w(_.swfs[0])}})()},[w]),q.jsxs("div",{id:"sample-swfs-container",className:m.length==0?"hidden":"",children:[q.jsx("span",{id:"sample-swfs-label",children:"Sample SWF:"}),q.jsxs("select",{id:"sample-swfs","aria-describedby":"sample-swfs-label",onChange:k,ref:s,children:[m.map((b,_)=>q.jsx(nn.Fragment,{children:b.type==null&&q.jsx("option",{value:_,children:b.title})},_)),Object.keys(xm).map(b=>q.jsx("optgroup",{label:xm[b],children:m.map((_,L)=>q.jsx(nn.Fragment,{children:_.type==b&&q.jsx("option",{value:L,children:_.title})},L))},b))]}),q.jsxs("div",{id:"author-container",className:i!=null&&i.author?"":"hidden",children:[q.jsx("span",{children:"Author: "}),q.jsx("a",{href:i==null?void 0:i.authorLink,target:"_blank",id:"author",children:i==null?void 0:i.author})]})]})}function dg({allowUrlLoading:s,allowSampleSwfs:i,onToggleMetadata:o,onReloadMovie:u,onSelectUrl:f,onSelectFile:m,selectedFilename:h,setSelectedFilename:k,onFileDragLeave:w,onFileDragOver:b,onFileDragDrop:_}){const L=nn.useRef(null),Q=nn.useRef(null),F=nn.useRef(null),[ae,ue]=nn.useState(null),ge=()=>{var Ee;(Ee=L.current)==null||Ee.click()},Ye=Ee=>{f(Ee,{}),k(null),ue(null),F.current&&(F.current.selectedIndex=-1)},xe=Ee=>{m(Ee),ue(null),k(Ee.name),F.current&&(F.current.selectedIndex=-1)},be=Ee=>{var Ae;Ee.preventDefault(),(Ae=Q.current)!=null&&Ae.value&&Ye(Q.current.value)},ie=Ee=>{const Ae=Ee.target;Ae!=null&&Ae.files&&(Ae==null?void 0:Ae.files.length)>0&&Ae.files[0]&&xe(Ae.files[0])},X=()=>{confirm("Reload the current SWF?")&&u()},Me=navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPhone/i)||navigator.platform==="MacIntel"&&typeof navigator.standalone<"u";return nn.useEffect(()=>{h!=null&&(ue(null),F.current&&(F.current.selectedIndex=-1))},[h]),q.jsxs("div",{id:"nav",children:[q.jsx("a",{id:"logo-container",href:"https://ruffle.rs/",target:"_blank",children:q.jsx("img",{className:"logo",src:cg,alt:"Ruffle"})}),q.jsxs("div",{className:"select-container",children:[q.jsxs("form",{id:"web-url-container",onSubmit:be,hidden:!s,children:[q.jsx("input",{id:"web-url",name:"web-url",type:"text",placeholder:"URL of a .swf file on the web",ref:Q}),q.jsx("button",{id:"web-form-submit",type:"submit",children:"Load"})]}),q.jsxs("div",{id:"local-file-container",onDragLeave:w,onDragOver:b,onDrop:_,children:[q.jsx("span",{id:"local-file-static-label",onClick:ge,children:"Local SWF:"}),q.jsx("input",{type:"file",accept:Me?void 0:".swf,.spl",id:"local-file","aria-describedby":"local-file-static-label",ref:L,onChange:ie}),q.jsx("button",{id:"local-file-label",onClick:ge,children:"Select File"}),q.jsx("label",{id:"local-file-name",htmlFor:"local-file",children:h??"No file selected."})]}),i&&q.jsx(fg,{onSelectUrl:f,selectedSample:ae,setSelectedFilename:k,setSelectedSample:ue,sampleSelectionInput:F})]}),q.jsxs("div",{children:[q.jsx("svg",{id:"toggle-info",width:"20px",viewBox:"0 0 416.979 416.979",onClick:o,children:q.jsx("path",{fill:"white",d:"M356.004 61.156c-81.37-81.47-213.377-81.551-294.848-.182-81.47 81.371-81.552 213.379-.181 294.85 81.369 81.47 213.378 81.551 294.849.181 81.469-81.369 81.551-213.379.18-294.849zM237.6 340.786a5.821 5.821 0 0 1-5.822 5.822h-46.576a5.821 5.821 0 0 1-5.822-5.822V167.885a5.821 5.821 0 0 1 5.822-5.822h46.576a5.82 5.82 0 0 1 5.822 5.822v172.901zm-29.11-202.885c-18.618 0-33.766-15.146-33.766-33.765 0-18.617 15.147-33.766 33.766-33.766s33.766 15.148 33.766 33.766c0 18.619-15.149 33.765-33.766 33.765z"})}),q.jsx("svg",{id:"reload-swf",width:"20px",viewBox:"0 0 489.711 489.711",onClick:X,children:q.jsx("path",{fill:"white",d:"M112.156 97.111c72.3-65.4 180.5-66.4 253.8-6.7l-58.1 2.2c-7.5.3-13.3 6.5-13 14 .3 7.3 6.3 13 13.5 13h.5l89.2-3.3c7.3-.3 13-6.2 13-13.5v-1.6l-3.3-88.2c-.3-7.5-6.6-13.3-14-13-7.5.3-13.3 6.5-13 14l2.1 55.3c-36.3-29.7-81-46.9-128.8-49.3-59.2-3-116.1 17.3-160 57.1-60.4 54.7-86 137.9-66.8 217.1 1.5 6.2 7 10.3 13.1 10.3 1.1 0 2.1-.1 3.2-.4 7.2-1.8 11.7-9.1 9.9-16.3-16.8-69.6 5.6-142.7 58.7-190.7zm350.3 98.4c-1.8-7.2-9.1-11.7-16.3-9.9-7.2 1.8-11.7 9.1-9.9 16.3 16.9 69.6-5.6 142.7-58.7 190.7-37.3 33.7-84.1 50.3-130.7 50.3-44.5 0-88.9-15.1-124.7-44.9l58.8-5.3c7.4-.7 12.9-7.2 12.2-14.7s-7.2-12.9-14.7-12.2l-88.9 8c-7.4.7-12.9 7.2-12.2 14.7l8 88.9c.6 7 6.5 12.3 13.4 12.3.4 0 .8 0 1.2-.1 7.4-.7 12.9-7.2 12.2-14.7l-4.8-54.1c36.3 29.4 80.8 46.5 128.3 48.9 3.8.2 7.6.3 11.3.3 55.1 0 107.5-20.2 148.7-57.4 60.4-54.7 86-137.8 66.8-217.1z"})})]})]})}const mg={1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9.0",10:"10.0/10.1",11:"10.2",12:"10.3",13:"11.0",14:"11.1",15:"11.2",16:"11.3",17:"11.4",18:"11.5",19:"11.6",20:"11.7",21:"11.8",22:"11.9",23:"12",24:"13",25:"14",26:"15",27:"16",28:"17",29:"18",30:"19",31:"20",32:"21",33:"22",34:"23",35:"24",36:"25",37:"26",38:"27",39:"28",40:"29",41:"30",42:"31",43:"32"};function pg({visible:s,metadata:i}){return q.jsxs("div",{id:"info-container",className:s?"":"hidden",children:[q.jsxs("div",{children:[q.jsx("span",{children:"Uncompressed Length"}),q.jsxs("span",{id:"uncompressedLength",children:[((i==null?void 0:i.uncompressedLength)??0)>>10,"Kb"]})]}),q.jsxs("div",{children:[q.jsx("span",{children:"SWF Version"}),q.jsx("span",{id:"swfVersion",children:i==null?void 0:i.swfVersion})]}),q.jsxs("div",{children:[q.jsx("span",{children:"FP Version"}),q.jsx("span",{id:"flashVersion",children:i?mg[i.swfVersion]??"Unknown":""})]}),q.jsxs("div",{children:[q.jsx("span",{children:"ActionScript 3"}),q.jsx("span",{id:"isActionScript3",children:i!=null&&i.isActionScript3?"true":"false"})]}),q.jsxs("div",{children:[q.jsx("span",{children:"Total Frames"}),q.jsx("span",{id:"numFrames",children:i==null?void 0:i.numFrames})]}),q.jsxs("div",{children:[q.jsx("span",{children:"Frame Rate"}),q.jsx("span",{id:"frameRate",children:i==null?void 0:i.frameRate})]}),q.jsxs("div",{children:[q.jsx("span",{children:"SWF Width"}),q.jsx("span",{id:"width",children:i==null?void 0:i.width})]}),q.jsxs("div",{children:[q.jsx("span",{children:"SWF Height"}),q.jsx("span",{id:"height",children:i==null?void 0:i.height})]}),q.jsxs("div",{children:[q.jsx("span",{children:"SWF Background Color"}),q.jsx("span",{id:"backgroundColor",style:{backgroundColor:(i==null?void 0:i.backgroundColor)??void 0}})]})]})}function hg({ruffleBaseConfig:s,allowUrlLoading:i,allowSampleSwfs:o}){const[u,f]=nn.useState(null),[m,h]=nn.useState(!1),[k,w]=nn.useState(null),[b,_]=nn.useState(!1),L=nn.useRef(null),Q=()=>{h(!m)},F=()=>{var ie;(ie=L.current)==null||ie.reload()},ae=nn.useCallback((ie,X)=>{var Me;(Me=L.current)==null||Me.loadUrl(ie,X)},[]),ue=ie=>{var X;(X=L.current)==null||X.loadFile(ie)},ge=ie=>{ie.stopPropagation(),ie.preventDefault()},Ye=ie=>{ie.stopPropagation(),ie.preventDefault(),_(!1)},xe=ie=>{ie.stopPropagation(),ie.preventDefault(),_(!0)},be=ie=>{var X;ie.stopPropagation(),ie.preventDefault(),_(!1),ie.dataTransfer&&(w(ie.dataTransfer.files[0].name),(X=L.current)==null||X.loadFile(ie.dataTransfer.files[0]))};return q.jsxs(q.Fragment,{children:[q.jsx(dg,{allowUrlLoading:i,allowSampleSwfs:o,onToggleMetadata:Q,onReloadMovie:F,onSelectUrl:ae,onSelectFile:ue,selectedFilename:k,setSelectedFilename:w,onFileDragLeave:Ye,onFileDragOver:xe,onFileDragDrop:be}),q.jsxs("div",{id:"main",className:m?"info-container-shown":"",children:[q.jsx(sg,{id:"player-container","aria-label":"Select a demo or drag an SWF",onLoadedMetadata:f,ref:L,onDragEnter:ge,onDragLeave:Ye,onDragOver:xe,onDragDrop:be,baseConfig:s,children:q.jsx("div",{id:"overlay",className:b?"drag":""})}),q.jsx(pg,{visible:m,metadata:u})]})]})}class Za{constructor(i,o,u,f,m){this.major=i,this.minor=o,this.patch=u,this.prIdent=f,this.buildIdent=m}static fromSemver(i){const o=i.split("+"),u=o[0].split("-"),f=u[0].split("."),m=parseInt(f[0],10);let h=0,k=0,w=null,b=null;return f[1]!==void 0&&(h=parseInt(f[1],10)),f[2]!==void 0&&(k=parseInt(f[2],10)),u[1]!==void 0&&(w=u[1].split(".")),o[1]!==void 0&&(b=o[1].split(".")),new Za(m,h,k,w,b)}isCompatibleWith(i){return this.major!==0&&this.major===i.major||this.major===0&&i.major===0&&this.minor!==0&&this.minor===i.minor||this.major===0&&i.major===0&&this.minor===0&&i.minor===0&&this.patch!==0&&this.patch===i.patch}hasPrecedenceOver(i){if(this.major>i.major)return!0;if(this.major<i.major)return!1;if(this.minor>i.minor)return!0;if(this.minor<i.minor)return!1;if(this.patch>i.patch)return!0;if(this.patch<i.patch)return!1;if(this.prIdent===null&&i.prIdent!==null)return!0;if(this.prIdent!==null&&i.prIdent===null)return!1;if(this.prIdent!==null&&i.prIdent!==null){const o=/^[0-9]*$/;for(let u=0;u<this.prIdent.length&&u<i.prIdent.length;u+=1){const f=o.test(i.prIdent[u]),m=o.test(this.prIdent[u]);if(!m&&f)return!0;if(m&&f){const h=parseInt(this.prIdent[u],10),k=parseInt(i.prIdent[u],10);if(h>k)return!0;if(h<k)return!1}else{if(m&&!f)return!1;if(!m&&!f){if(this.prIdent[u]>i.prIdent[u])return!0;if(this.prIdent[u]<i.prIdent[u])return!1}}}if(this.prIdent.length>i.prIdent.length)return!0;if(this.prIdent.length<i.prIdent.length)return!1}if(this.buildIdent!==null&&i.buildIdent===null)return!0;if(this.buildIdent===null&&i.buildIdent!==null)return!1;if(this.buildIdent!==null&&i.buildIdent!==null){const o=/^[0-9]*$/;for(let u=0;u<this.buildIdent.length&&u<i.buildIdent.length;u+=1){const f=o.test(this.buildIdent[u]),m=o.test(i.buildIdent[u]);if(!f&&m)return!0;if(f&&m){const h=parseInt(this.buildIdent[u],10),k=parseInt(i.buildIdent[u],10);if(h>k)return!0;if(h<k)return!1}else{if(f&&!m)return!1;if(!f&&!m){if(this.buildIdent[u]>i.buildIdent[u])return!0;if(this.buildIdent[u]<i.buildIdent[u])return!1}}}return this.buildIdent.length>i.buildIdent.length}return!1}isEqual(i){return this.major===i.major&&this.minor===i.minor&&this.patch===i.patch}isStableOrCompatiblePrerelease(i){return i.prIdent===null?!0:this.major===i.major&&this.minor===i.minor&&this.patch===i.patch}}class Es{constructor(i){this.requirements=i}satisfiedBy(i){for(const o of this.requirements){let u=!0;for(const{comparator:f,version:m}of o)u=u&&m.isStableOrCompatiblePrerelease(i),f===""||f==="="?u=u&&m.isEqual(i):f===">"?u=u&&i.hasPrecedenceOver(m):f===">="?u=u&&(i.hasPrecedenceOver(m)||m.isEqual(i)):f==="<"?u=u&&m.hasPrecedenceOver(i):f==="<="?u=u&&(m.hasPrecedenceOver(i)||m.isEqual(i)):f==="^"&&(u=u&&m.isCompatibleWith(i));if(u)return!0}return!1}static fromRequirementString(i){const o=i.split(" ");let u=[];const f=[];for(const m of o)if(m==="||")u.length>0&&(f.push(u),u=[]);else if(m.length>0){const h=/[0-9]/.exec(m);if(h){const k=m.slice(0,h.index).trim(),w=Za.fromSemver(m.slice(h.index).trim());u.push({comparator:k,version:w})}}return u.length>0&&f.push(u),new Es(f)}}class Em{constructor(i){var o;this.sources=(i==null?void 0:i.sources)||{},this.config=(i==null?void 0:i.config)||{},this.invoked=(i==null?void 0:i.invoked)||!1,this.newestName=(i==null?void 0:i.newestName)||null,(o=i==null?void 0:i.superseded)==null||o.call(i),document.readyState==="loading"?document.addEventListener("readystatechange",this.init.bind(this)):window.setTimeout(this.init.bind(this),0)}get version(){return"0.1.0"}newestSourceName(){let i=null,o=Za.fromSemver("0.0.0");for(const u in this.sources)if(Object.prototype.hasOwnProperty.call(this.sources,u)){const f=Za.fromSemver(this.sources[u].version);f.hasPrecedenceOver(o)&&(i=u,o=f)}return i}init(){if(!this.invoked){if(this.invoked=!0,this.newestName=this.newestSourceName(),this.newestName===null)throw new Error("No registered Ruffle source!");("polyfills"in this.config?this.config.polyfills:!0)!==!1&&this.sources[this.newestName].polyfill()}}newest(){const i=this.newestSourceName();return i!==null?this.sources[i]:null}satisfying(i){const o=Es.fromRequirementString(i);let u=null;for(const f in this.sources)if(Object.prototype.hasOwnProperty.call(this.sources,f)){const m=Za.fromSemver(this.sources[f].version);o.satisfiedBy(m)&&(u=this.sources[f])}return u}localCompatible(){return this.sources.local!==void 0?this.satisfying("^"+this.sources.local.version):this.newest()}local(){return this.sources.local!==void 0?this.satisfying("="+this.sources.local.version):this.newest()}superseded(){this.invoked=!0}}const _n={versionNumber:"0.1.0",versionName:"nightly 2025-03-26",versionChannel:"nightly",buildDate:"2025-03-26T00:06:47.947Z",commitHash:"ee37f4e6f987b1f579ee68f3605a40e56745d67a"};var Qa;(function(s){s[s.HaveNothing=0]="HaveNothing",s[s.Loading=1]="Loading",s[s.Loaded=2]="Loaded"})(Qa||(Qa={}));var $a={},Rr={},ra={},Ku={},jm;function vg(){return jm||(jm=1,Object.defineProperty(Ku,"__esModule",{value:!0})),Ku}var Ju={},Am;function gg(){return Am||(Am=1,Object.defineProperty(Ju,"__esModule",{value:!0})),Ju}var Pu={},Tm;function bg(){return Tm||(Tm=1,Object.defineProperty(Pu,"__esModule",{value:!0})),Pu}var Iu={},Dm;function yg(){return Dm||(Dm=1,Object.defineProperty(Iu,"__esModule",{value:!0})),Iu}var es={},Om;function wg(){return Om||(Om=1,Object.defineProperty(es,"__esModule",{value:!0})),es}var Sr={},Mm;function kg(){if(Mm)return Sr;Mm=1,Object.defineProperty(Sr,"__esModule",{value:!0}),Sr.classnames=m;const s=h=>Object.entries(h).map(([k,w])=>w&&k),i=h=>!!h,o=(h,k,w)=>w.indexOf(h)===k,u=[];function f(h){return h?typeof h=="string"?[h]:Array.isArray(h)?h.flatMap(f).filter(i):s(h).filter(i):u}function m(h){const k=f(h).filter(o);return k.length>0?k.join(" "):void 0}return Sr}var _m;function Rg(){return _m||(_m=1,function(s){var i=ra&&ra.__createBinding||(Object.create?function(u,f,m,h){h===void 0&&(h=m);var k=Object.getOwnPropertyDescriptor(f,m);(!k||("get"in k?!f.__esModule:k.writable||k.configurable))&&(k={enumerable:!0,get:function(){return f[m]}}),Object.defineProperty(u,h,k)}:function(u,f,m,h){h===void 0&&(h=m),u[h]=f[m]}),o=ra&&ra.__exportStar||function(u,f){for(var m in u)m!=="default"&&!Object.prototype.hasOwnProperty.call(f,m)&&i(f,u,m)};Object.defineProperty(s,"__esModule",{value:!0}),o(vg(),s),o(gg(),s),o(bg(),s),o(yg(),s),o(wg(),s),o(kg(),s)}(ra)),ra}var Cm;function fp(){if(Cm)return Rr;Cm=1,Object.defineProperty(Rr,"__esModule",{value:!0}),Rr.setAttributes=u;const s=Rg();function i(f,m){for(const h of Object.keys(f))h in m&&(m[h]=f[h])}const o=new RegExp("^on\\p{Lu}","u");function u(f,m){for(const h of Object.keys(m)){if(h==="__source"||h==="__self"||h==="tsxTag")continue;const k=m[h];if(h==="class"){const w=(0,s.classnames)(k);w&&f.setAttribute(h,w)}else if(h==="ref")k.current=f;else if(o.test(h)){const w=h.replace(/Capture$/,""),b=h!==w,_=w.toLowerCase().substring(2);f.addEventListener(_,k,b)}else h==="style"&&typeof k!="string"?i(k,f.style):h==="dangerouslySetInnerHTML"?f.innerHTML=k:k===!0?f.setAttribute(h,h):(k||k===0||k==="")&&f.setAttribute(h,k.toString())}}return Rr}var Ga={},qm;function dp(){if(qm)return Ga;qm=1,Object.defineProperty(Ga,"__esModule",{value:!0}),Ga.applyChildren=i,Ga.createDomElement=o,Ga.applyTsxTag=u;function s(f,m){m instanceof Element?f.appendChild(m):typeof m=="string"||typeof m=="number"?f.appendChild(document.createTextNode(m.toString())):console.warn("Unknown type to append: ",m)}function i(f,m){for(const h of m)!h&&h!==0||(Array.isArray(h)?i(f,h):s(f,h))}function o(f,m){const h=m!=null&&m.is?{is:m.is}:void 0;return m!=null&&m.xmlns?document.createElementNS(m.xmlns,f,h):document.createElement(f,h)}function u(f,m){let h=f,k=m;return k&&"tsxTag"in k&&(h=k.tsxTag,!k.is&&f.includes("-")&&(k={...k,is:f})),{finalTag:h,finalAttrs:k}}return Ga}var Um;function js(){if(Um)return $a;Um=1,Object.defineProperty($a,"__esModule",{value:!0}),$a.jsx=o,$a.jsxs=o,$a.jsxDEV=o;const s=fp(),i=dp();function o(u,f){if(typeof u=="function")return u(f);const{children:m,...h}=f,{finalTag:k,finalAttrs:w}=(0,i.applyTsxTag)(u,h),b=(0,i.createDomElement)(k,w);return(0,s.setAttributes)(b,w),(0,i.applyChildren)(b,[m]),b}return $a}var T=js(),Ka;(function(s){s.On="on",s.Off="off",s.Auto="auto"})(Ka||(Ka={}));var Ar;(function(s){s.Off="off",s.Fullscreen="fullscreen",s.On="on"})(Ar||(Ar={}));var li;(function(s){s.Visible="visible",s.Hidden="hidden"})(li||(li={}));var Tr;(function(s){s.Error="error",s.Warn="warn",s.Info="info",s.Debug="debug",s.Trace="trace"})(Tr||(Tr={}));var Dr;(function(s){s.Window="window",s.Opaque="opaque",s.Transparent="transparent",s.Direct="direct",s.Gpu="gpu"})(Dr||(Dr={}));var Or;(function(s){s.WebGpu="webgpu",s.WgpuWebgl="wgpu-webgl",s.Webgl="webgl",s.Canvas="canvas"})(Or||(Or={}));var Xa;(function(s){s.On="on",s.RightClickOnly="rightClickOnly",s.Off="off"})(Xa||(Xa={}));var ms;(function(s){s.AIR="air",s.FlashPlayer="flashPlayer"})(ms||(ms={}));var ps;(function(s){s.Allow="allow",s.Confirm="confirm",s.Deny="deny"})(ps||(ps={}));var hs;(function(s){s.All="all",s.Internal="internal",s.None="none"})(hs||(hs={}));var Nm;(function(s){s.South="south",s.East="east",s.North="north",s.West="west",s.LeftTrigger="left-trigger",s.LeftTrigger2="left-trigger-2",s.RightTrigger="right-trigger",s.RightTrigger2="right-trigger-2",s.Select="select",s.Start="start",s.DPadUp="dpad-up",s.DPadDown="dpad-down",s.DPadLeft="dpad-left",s.DPadRight="dpad-right"})(Nm||(Nm={}));const Sg={allowScriptAccess:!1,parameters:{},autoplay:Ka.Auto,backgroundColor:null,letterbox:Ar.Fullscreen,unmuteOverlay:li.Visible,upgradeToHttps:!0,compatibilityRules:!0,favorFlash:!0,warnOnUnsupportedContent:!0,logLevel:Tr.Error,showSwfDownload:!1,contextMenu:Xa.On,preloader:!0,splashScreen:!0,maxExecutionDuration:15,base:null,menu:!0,allowFullscreen:!1,salign:"",forceAlign:!1,quality:"high",scale:"showAll",forceScale:!1,frameRate:null,wmode:Dr.Window,publicPath:null,polyfills:!0,playerVersion:null,preferredRenderer:null,openUrlMode:ps.Allow,allowNetworking:hs.All,openInNewTab:null,socketProxy:[],fontSources:[],defaultFonts:{},credentialAllowList:[],playerRuntime:ms.FlashPlayer,gamepadButtonMapping:{},urlRewriteRules:[]},zg=`:host{all:initial;pointer-events:inherit;--ruffle-blue:#37528c;--ruffle-orange:#ffad33;display:inline-block;font-family:Arial,sans-serif;height:400px;letter-spacing:.4px;position:relative;touch-action:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:550px;-webkit-tap-highlight-color:transparent}:host(:-webkit-full-screen){display:block;height:100%!important;width:100%!important}.hidden{display:none!important}#container,#message-overlay,#panic,#play-button,#splash-screen,#unmute-overlay,#unmute-overlay .background{inset:0;position:absolute}#container{outline:none;overflow:hidden}#container canvas{height:100%;width:100%}#play-button,#unmute-overlay{cursor:pointer;display:none}#unmute-overlay .background{background:#000;opacity:.7}#play-button .icon,#unmute-overlay .icon{height:50%;left:50%;max-height:384px;max-width:384px;opacity:.8;position:absolute;top:50%;transform:translate(-50%,-50%);width:50%}#play-button:hover .icon,#unmute-overlay:hover .icon{opacity:1}#unmute-overlay-svg{scale:.8}#panic{background:linear-gradient(180deg,#fd3a40,#fda138);color:#fff;display:flex;flex-flow:column;font-size:20px;justify-content:space-around;overflow:auto;text-align:center}#panic a{color:var(--ruffle-blue);font-weight:700}#panic-title{font-size:xxx-large;font-weight:700}#panic-body.details{flex:0.9;margin:0 10px}#panic-body textarea{height:100%;resize:none;width:100%}#panic ul{display:flex;justify-content:space-evenly;list-style-type:none;padding:0}#message-overlay{align-items:center;background:var(--ruffle-blue);color:var(--ruffle-orange);display:flex;justify-content:center;opacity:1;overflow:auto;position:absolute;z-index:2}#message-overlay .message{font-size:20px;max-height:100%;max-width:100%;padding:5%;text-align:center}#message-overlay p{margin:.5em 0}#message-overlay .message div{-moz-column-gap:1em;column-gap:1em;display:flex;flex-wrap:wrap;justify-content:center}#message-overlay a,#message-overlay button{background:var(--ruffle-blue);border:2px solid var(--ruffle-orange);border-radius:.6em;color:var(--ruffle-orange);cursor:pointer;font-size:1.25em;font-weight:700;margin:2% 0;padding:10px;text-decoration:none}#message-overlay a:hover,#message-overlay button:hover{background:#ffffff4c}#continue-btn{background:var(--ruffle-blue);border:2px solid var(--ruffle-orange);border-radius:20px;color:var(--ruffle-orange);cursor:pointer;font-size:20px;font-weight:700;padding:10px}#continue-btn:hover{background:#ffffff4c}#context-menu-overlay,.modal{height:100%;position:absolute;width:100%;z-index:1}#context-menu{background-color:var(--modal-background);border:1px solid gray;box-shadow:0 5px 10px -5px #000;color:rgb(var(--modal-foreground-rgb));font-size:14px;list-style:none;margin:0;padding:3px 0;position:absolute;text-align:left;white-space:nowrap}#context-menu .menu-item{color:rgb(var(--modal-foreground-rgb));padding:5px 10px}#context-menu .menu-item.disabled{color:rgba(var(--modal-foreground-rgb),.5);cursor:default}#context-menu .menu-item:not(.disabled):hover{background-color:rgba(var(--modal-foreground-rgb),.15)}#context-menu .menu-separator hr{border:none;border-bottom:1px solid rgba(var(--modal-foreground-rgb),.2);margin:3px}#splash-screen{align-items:center;background:var(
        --splash-screen-background,var(--preloader-background,var(--ruffle-blue))
    );display:flex;flex-direction:column;justify-content:center}.loadbar{background:#253559;height:20%;max-height:10px;max-width:316px;width:100%}.loadbar-inner{background:var(--ruffle-orange);height:100%;max-width:100%;width:0}.logo{display:var(--logo-display,block);max-height:150px;max-width:380px}.loading-animation{aspect-ratio:1;margin-bottom:2%;max-height:28px;max-width:28px;width:10%}.spinner{stroke-dasharray:180;stroke-dashoffset:135;stroke:var(--ruffle-orange);animation:a 1.5s linear infinite;transform-origin:50% 50%}@keyframes a{to{transform:rotate(1turn)}}#virtual-keyboard{height:1px;opacity:0;position:absolute;top:-100px;width:1px}.modal{background-color:#0008}.modal-area{background-color:var(--modal-background);border-radius:12px;box-shadow:0 2px 6px 0 #0008;color:rgb(var(--modal-foreground-rgb));left:50%;padding:8px 12px;position:relative;transform:translateX(-50%);width:-moz-fit-content;width:fit-content}#modal-area{height:300px;width:450px}.close-modal{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 -960 960 960'%3E%3Cpath d='M480-392 300-212q-18 18-44 18t-44-18-18-44 18-44l180-180-180-180q-18-18-18-44t18-44 44-18 44 18l180 180 180-180q18-18 44-18t44 18 18 44-18 44L568-480l180 180q18 18 18 44t-18 44-44 18-44-18z'/%3E%3C/svg%3E");cursor:pointer;filter:var(--modal-foreground-filter);height:16px;width:16px}.modal-button{background-color:rgba(var(--modal-foreground-rgb),.2);border-radius:6px;color:rgb(var(--modal-foreground-rgb));cursor:pointer;display:inline-block;padding:4px 8px;text-decoration:none}:not(#volume-controls)>.close-modal{position:absolute;right:16px;top:14px}.general-save-options{border-bottom:2px solid rgba(var(--modal-foreground-rgb),.3);padding-bottom:8px;text-align:center}#local-saves{border-collapse:collapse;color:inherit;display:block;height:calc(100% - 45px);min-height:30px;overflow-y:auto}#local-saves td{border-bottom:2px solid rgba(var(--modal-foreground-rgb),.15);height:30px}#local-saves td:first-child{width:100%;word-break:break-all}.save-option{cursor:pointer;display:inline-block;filter:var(--modal-foreground-filter);height:24px;opacity:.4;vertical-align:middle;width:24px}#local-saves>tr:hover .save-option{opacity:1}#download-save{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 -960 960 960'%3E%3Cpath d='M480-337q-8 0-15-2.5t-13-8.5L308-492q-12-12-11.5-28t11.5-28q12-12 28.5-12.5T365-549l75 75v-286q0-17 11.5-28.5T480-800t28.5 11.5T520-760v286l75-75q12-12 28.5-11.5T652-548q11 12 11.5 28T652-492L508-348q-6 6-13 8.5t-15 2.5M240-160q-33 0-56.5-23.5T160-240v-80q0-17 11.5-28.5T200-360t28.5 11.5T240-320v80h480v-80q0-17 11.5-28.5T760-360t28.5 11.5T800-320v80q0 33-23.5 56.5T720-160z'/%3E%3C/svg%3E")}#replace-save{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 -1080 960 1200'%3E%3Cpath d='M440-367v127q0 17 11.5 28.5T480-200t28.5-11.5T520-240v-127l36 36q6 6 13.5 9t15 2.5T599-323t13-9q11-12 11.5-28T612-388L508-492q-6-6-13-8.5t-15-2.5-15 2.5-13 8.5L348-388q-12 12-11.5 28t12.5 28q12 11 28 11.5t28-11.5zM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h287q16 0 30.5 6t25.5 17l194 194q11 11 17 25.5t6 30.5v447q0 33-23.5 56.5T720-80zm280-560q0 17 11.5 28.5T560-600h160L520-800z'/%3E%3C/svg%3E")}#delete-save{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 -1020 960 1080'%3E%3Cpath d='M280-120q-33 0-56.5-23.5T200-200v-520q-17 0-28.5-11.5T160-760t11.5-28.5T200-800h160q0-17 11.5-28.5T400-840h160q17 0 28.5 11.5T600-800h160q17 0 28.5 11.5T800-760t-11.5 28.5T760-720v520q0 33-23.5 56.5T680-120zm120-160q17 0 28.5-11.5T440-320v-280q0-17-11.5-28.5T400-640t-28.5 11.5T360-600v280q0 17 11.5 28.5T400-280m160 0q17 0 28.5-11.5T600-320v-280q0-17-11.5-28.5T560-640t-28.5 11.5T520-600v280q0 17 11.5 28.5T560-280'/%3E%3C/svg%3E")}.replace-save{display:none}#video-modal .modal-area{box-sizing:border-box;height:95%;width:95%}#video-holder{box-sizing:border-box;height:100%;padding:36px 4px 6px}#video-holder video{background-color:#000;height:100%;width:100%}#volume-controls{align-items:center;display:flex;gap:6px}#mute-checkbox{display:none}label[for=mute-checkbox]{cursor:pointer;filter:var(--modal-foreground-filter);height:24px;line-height:0;width:24px}#volume-mute{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 -960 960 960'%3E%3Cpath d='m719.13-419.35-71.67 71.68Q634.78-335 617.13-335t-30.33-12.67q-12.67-12.68-12.67-30.33t12.67-30.33L658.48-480l-71.68-71.67q-12.67-12.68-12.67-30.33t12.67-30.33Q599.48-625 617.13-625t30.33 12.67l71.67 71.68 71.67-71.68Q803.48-625 821.13-625t30.33 12.67q12.67 12.68 12.67 30.33t-12.67 30.33L779.78-480l71.68 71.67q12.67 12.68 12.67 30.33t-12.67 30.33Q838.78-335 821.13-335t-30.33-12.67zM278-357.87H161.22q-17.66 0-30.33-12.67-12.67-12.68-12.67-30.33v-158.26q0-17.65 12.67-30.33 12.67-12.67 30.33-12.67H278l130.15-129.91q20.63-20.63 46.98-9.45 26.35 11.19 26.35 39.77v443.44q0 28.58-26.35 39.77-26.35 11.18-46.98-9.45z'/%3E%3C/svg%3E")}#volume-min{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='161 -960 960 960'%3E%3Cpath d='M438.65-357.87H321.87q-17.65 0-30.33-12.67-12.67-12.68-12.67-30.33v-158.26q0-17.65 12.67-30.33 12.68-12.67 30.33-12.67h116.78L568.8-732.04q20.63-20.63 46.98-9.45 26.35 11.19 26.35 39.77v443.44q0 28.58-26.35 39.77-26.35 11.18-46.98-9.45z'/%3E%3C/svg%3E")}#volume-mid{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='80 -960 960 960'%3E%3Cpath d='M357.98-357.87H241.2q-17.66 0-30.33-12.67-12.67-12.68-12.67-30.33v-158.26q0-17.65 12.67-30.33 12.67-12.67 30.33-12.67h116.78L487.65-731.8q20.63-20.64 47.1-9.57t26.47 39.65v443.44q0 28.58-26.47 39.65t-47.1-9.57zM741.8-480q0 42.48-20.47 80.09-20.48 37.61-54.94 60.82-10.22 5.98-20.19.25-9.98-5.73-9.98-17.44v-248.44q0-11.71 9.98-17.32 9.97-5.61 20.19.37 34.46 23.71 54.94 61.45Q741.8-522.48 741.8-480'/%3E%3C/svg%3E")}#volume-max{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='9 -960 960 960'%3E%3Cpath d='M754.22-480.5q0-78.52-41.88-143.9t-111.91-98.62q-14.47-6.74-20.47-20.96t-.53-28.93q5.74-15.72 20.34-22.46t29.58 0q92.48 42.46 147.97 127.05 55.48 84.6 55.48 187.82t-55.48 187.82q-55.49 84.59-147.97 127.05-14.98 6.74-29.58 0t-20.34-22.46q-5.47-14.71.53-28.93t20.47-20.96q70.03-33.24 111.91-98.62t41.88-143.9M286.98-357.87H170.2q-17.66 0-30.33-12.67-12.67-12.68-12.67-30.33v-158.26q0-17.65 12.67-30.33 12.67-12.67 30.33-12.67h116.78L416.65-731.8q20.63-20.64 47.1-9.57t26.47 39.65v443.44q0 28.58-26.47 39.65t-47.1-9.57zM670.8-480q0 42.48-20.47 80.09-20.48 37.61-54.94 60.82-10.22 5.98-20.19.25-9.98-5.73-9.98-17.44v-248.44q0-11.71 9.98-17.32 9.97-5.61 20.19.37 34.46 23.71 54.94 61.45Q670.8-522.48 670.8-480'/%3E%3C/svg%3E")}#volume-slider-text{text-align:center;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:4.8ch}#hardware-acceleration-modal .modal-area{box-sizing:border-box;padding:16px 48px;text-align:center;width:95%}#acceleration-text{display:block;margin-bottom:8px}#clipboard-modal h2{margin-right:36px;margin-top:4px}#clipboard-modal p:last-child{margin-bottom:2px}@media (prefers-color-scheme:light){:host{--modal-background:#fafafa;--modal-foreground-rgb:0,0,0;--modal-foreground-filter:none}}@media (prefers-color-scheme:dark){:host{--modal-background:#282828;--modal-foreground-rgb:221,221,221;--modal-foreground-filter:invert(90%)}}`;function xg(){return T.jsx("style",{children:zg})}function Eg(){return T.jsx("style",{id:"dynamic-styles"})}function jg(){return T.jsxs("div",{id:"container",children:[T.jsx("div",{id:"play-button",children:T.jsx("div",{class:"icon",children:T.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid",viewBox:"0 0 250 250",width:"100%",height:"100%",children:[T.jsxs("defs",{xmlns:"http://www.w3.org/2000/svg",children:[T.jsxs("linearGradient",{xmlns:"http://www.w3.org/2000/svg",id:"a",gradientUnits:"userSpaceOnUse",x1:"125",y1:"0",x2:"125",y2:"250",spreadMethod:"pad",children:[T.jsx("stop",{xmlns:"http://www.w3.org/2000/svg",offset:"0%","stop-color":"#FDA138"}),T.jsx("stop",{xmlns:"http://www.w3.org/2000/svg",offset:"100%","stop-color":"#FD3A40"})]}),T.jsxs("g",{xmlns:"http://www.w3.org/2000/svg",id:"b",children:[T.jsx("path",{xmlns:"http://www.w3.org/2000/svg",fill:"url(#a)",d:"M250 125q0-52-37-88-36-37-88-37T37 37Q0 73 0 125t37 88q36 37 88 37t88-37q37-36 37-88M87 195V55l100 70-100 70z"}),T.jsx("path",{xmlns:"http://www.w3.org/2000/svg",fill:"#FFF",d:"M87 55v140l100-70L87 55z"})]})]}),T.jsx("use",{xmlns:"http://www.w3.org/2000/svg",href:"#b"})]})})}),T.jsxs("div",{id:"unmute-overlay",children:[T.jsx("div",{class:"background"}),T.jsx("div",{class:"icon",children:T.jsxs("svg",{id:"unmute-overlay-svg",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid",viewBox:"0 0 512 584",width:"100%",height:"100%",children:[T.jsx("path",{xmlns:"http://www.w3.org/2000/svg",fill:"#FFF",stroke:"#FFF",d:"m457.941 256 47.029-47.029c9.372-9.373 9.372-24.568 0-33.941-9.373-9.373-24.568-9.373-33.941 0l-47.029 47.029-47.029-47.029c-9.373-9.373-24.568-9.373-33.941 0-9.372 9.373-9.372 24.568 0 33.941l47.029 47.029-47.029 47.029c-9.372 9.373-9.372 24.568 0 33.941 4.686 4.687 10.827 7.03 16.97 7.03s12.284-2.343 16.971-7.029l47.029-47.03 47.029 47.029c4.687 4.687 10.828 7.03 16.971 7.03s12.284-2.343 16.971-7.029c9.372-9.373 9.372-24.568 0-33.941z"}),T.jsx("path",{xmlns:"http://www.w3.org/2000/svg",fill:"#FFF",stroke:"#FFF",d:"m99 160h-55c-24.301 0-44 19.699-44 44v104c0 24.301 19.699 44 44 44h55c2.761 0 5-2.239 5-5v-182c0-2.761-2.239-5-5-5z"}),T.jsx("path",{xmlns:"http://www.w3.org/2000/svg",fill:"#FFF",stroke:"#FFF",d:"m280 56h-24c-5.269 0-10.392 1.734-14.578 4.935l-103.459 79.116c-1.237.946-1.963 2.414-1.963 3.972v223.955c0 1.557.726 3.026 1.963 3.972l103.459 79.115c4.186 3.201 9.309 4.936 14.579 4.936h23.999c13.255 0 24-10.745 24-24v-352.001c0-13.255-10.745-24-24-24z"}),T.jsx("text",{xmlns:"http://www.w3.org/2000/svg",id:"unmute-text",x:"256",y:"560","text-anchor":"middle","font-size":"60px",fill:"#FFF",stroke:"#FFF",children:"Click to unmute"})]})})]}),T.jsx("input",{"aria-hidden":"true",id:"virtual-keyboard",type:"text",autocomplete:"off",autocorrect:"off",autocapitalize:"none"})]})}function Ag(){return T.jsxs("div",{id:"splash-screen",class:"hidden",children:[T.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",class:"logo",preserveAspectRatio:"xMidYMid",viewBox:"0 0 380 150",children:T.jsxs("g",{xmlns:"http://www.w3.org/2000/svg",children:[T.jsx("path",{xmlns:"http://www.w3.org/2000/svg",fill:"#966214",d:"M58.75 85.6q.75-.1 1.5-.35.85-.25 1.65-.75.55-.35 1.05-.8.5-.45.95-1 .5-.5.75-1.2-.05.05-.15.1-.1.15-.25.25l-.1.2q-.15.05-.25.1-.4 0-.8.05-.5-.25-.9-.5-.3-.1-.55-.3l-.6-.6-4.25-6.45-1.5 11.25h3.45m83.15-.2h3.45q.75-.1 1.5-.35.25-.05.45-.15.35-.15.65-.3l.5-.3q.25-.15.5-.35.45-.35.9-.75.45-.35.75-.85l.1-.1q.1-.2.2-.35.2-.3.35-.6l-.3.4-.15.15q-.5.15-1.1.1-.25 0-.4-.05-.5-.15-.8-.4-.15-.1-.25-.25-.3-.3-.55-.6l-.05-.05v-.05l-4.25-6.4-1.5 11.25m-21.15-3.95q-.3-.3-.55-.6l-.05-.05v-.05l-4.25-6.4-1.5 11.25h3.45q.75-.1 1.5-.35.85-.25 1.6-.75.75-.5 1.4-1.1.45-.35.75-.85.35-.5.65-1.05l-.45.55q-.5.15-1.1.1-.9 0-1.45-.7m59.15.3q-.75-.5-1.4-1-3.15-2.55-3.5-6.4l-1.5 11.25h21q-3.1-.25-5.7-.75-5.6-1.05-8.9-3.1m94.2 3.85h3.45q.6-.1 1.2-.3.4-.1.75-.2.35-.15.65-.3.7-.35 1.35-.8.75-.55 1.3-1.25.1-.15.25-.3-2.55-.25-3.25-1.8l-4.2-6.3-1.5 11.25m-45.3-4.85q-.5-.4-.9-.8-2.3-2.35-2.6-5.6l-1.5 11.25h21q-11.25-.95-16-4.85m97.7 4.85q-.3-.05-.6-.05-10.8-1-15.4-4.8-3.15-2.55-3.5-6.35l-1.5 11.2h21Z"}),T.jsx("path",{xmlns:"http://www.w3.org/2000/svg",fill:"var(--ruffle-orange)",d:"M92.6 54.8q-1.95-1.4-4.5-1.4H60.35q-1.35 0-2.6.45-1.65.55-3.15 1.8-2.75 2.25-3.25 5.25l-1.65 12h.05v.3l5.85 1.15h-9.5q-.5.05-1 .15-.5.15-1 .35-.5.2-.95.45-.5.3-.95.7-.45.35-.85.8-.35.4-.65.85-.3.45-.5.9-.15.45-.3.95l-5.85 41.6H50.3l5-35.5 1.5-11.25 4.25 6.45.6.6q.25.2.55.3.4.25.9.5.4-.05.8-.05.1-.05.25-.1l.1-.2q.15-.1.25-.25.1-.05.15-.1l.3-1.05 1.75-12.3h11.15L75.8 82.6h16.5l2.3-16.25h-.05l.8-5.7q.4-2.45-1-4.2-.35-.4-.75-.8-.25-.25-.55-.5-.2-.2-.45-.35m16.2 18.1h.05l-.05.3 5.85 1.15H105.2q-.5.05-1 .15-.5.15-1 .35-.5.2-.95.45-.5.3-1 .65-.4.4-.8.85-.25.3-.55.65-.05.1-.15.2-.25.45-.4.9-.2.45-.3.95-.1.65-.2 1.25-.2 1.15-.4 2.25l-4.3 30.6q-.25 3 1.75 5.25 1.6 1.8 4 2.15.6.1 1.25.1h27.35q3.25 0 6-2.25.35-.35.7-.55l.3-.2q2-2 2.25-4.5l1.65-11.6q.05-.05.1-.05l1.65-11.35h.05l.7-5.2 1.5-11.25 4.25 6.4v.05l.05.05q.25.3.55.6.1.15.25.25.3.25.8.4.15.05.4.05.6.05 1.1-.1l.15-.15.3-.4.3-1.05 1.3-9.05h-.05l.7-5.05h-.05l.15-1.25h-.05l1.65-11.7h-16.25l-2.65 19.5h.05v.2l-.05.1h.05l5.8 1.15H132.7q-.5.05-1 .15-.5.15-1 .35-.15.05-.3.15-.3.1-.55.25-.05 0-.1.05-.5.3-1 .65-.4.35-.7.7-.55.7-.95 1.45-.35.65-.55 1.4-.15.7-.25 1.4v.05q-.15 1.05-.35 2.05l-1.2 8.75v.1l-2.1 14.7H111.4l2.25-15.55h.05l.7-5.2 1.5-11.25 4.25 6.4v.05l.05.05q.25.3.55.6.55.7 1.45.7.6.05 1.1-.1l.45-.55.3-1.05 1.3-9.05h-.05l.7-5.05h-.05l.15-1.25h-.05l1.65-11.7h-16.25l-2.65 19.5m106.5-41.75q-2.25-2.25-5.5-2.25h-27.75q-3 0-5.75 2.25-1.3.95-2.05 2.1-.45.6-.7 1.2-.2.5-.35 1-.1.45-.15.95l-4.15 29.95h-.05l-.7 5.2h-.05l-.2 1.35h.05l-.05.3 5.85 1.15h-9.45q-2.1.05-3.95 1.6-1.9 1.55-2.25 3.55l-.5 3.5h-.05l-5.3 38.1h16.25l5-35.5 1.5-11.25q.35 3.85 3.5 6.4.65.5 1.4 1 3.3 2.05 8.9 3.1 2.6.5 5.7.75l1.75-11.25h-12.2l.4-2.95h-.05l.7-5.05h-.05q.1-.9.3-1.9.1-.75.2-1.6.85-5.9 2.15-14.9 0-.15.05-.25l.1-.9q.2-1.55.45-3.15h11.25l-3.1 20.8h16.5l4.1-28.05q.15-1.7-.4-3.15-.5-1.1-1.35-2.1m46.65 44.15q-.5.3-1 .65-.4.4-.8.85-.35.4-.7.85-.25.45-.45.9-.15.45-.3.95l-5.85 41.6h16.25l5-35.5 1.5-11.25 4.2 6.3q.7 1.55 3.25 1.8l.05-.1q.25-.4.35-.85l.3-1.05 1.8-14.05v-.05l5.35-37.45h-16.25l-6.15 44.3 5.85 1.15h-9.45q-.5.05-1 .15-.5.15-1 .35-.5.2-.95.45m5.4-38.9q.15-1.7-.4-3.15-.5-1.1-1.35-2.1-2.25-2.25-5.5-2.25h-27.75q-2.3 0-4.45 1.35-.65.35-1.3.9-1.3.95-2.05 2.1-.45.6-.7 1.2-.4.9-.5 1.95l-4.15 29.95h-.05l-.7 5.2h-.05l-.2 1.35h.05l-.05.3 5.85 1.15h-9.45q-2.1.05-3.95 1.6-1.9 1.55-2.25 3.55l-.5 3.5h-.05l-1.2 8.75v.1l-4.1 29.25h16.25l5-35.5 1.5-11.25q.3 3.25 2.6 5.6.4.4.9.8 4.75 3.9 16 4.85l1.75-11.25h-12.2l.4-2.95h-.05l.7-5.05h-.05q.15-.9.3-1.9.1-.75.25-1.6.15-1.25.35-2.65v-.05q.95-6.7 2.35-16.5h11.25l-3.1 20.8h16.5l4.1-28.05M345 66.35h-.05l1.15-8.2q.5-3-1.75-5.25-1.25-1.25-3-1.75-1-.5-2.25-.5h-27.95q-.65 0-1.3.1-2.5.35-4.7 2.15-2.75 2.25-3.25 5.25l-1.95 14.7v.05l-.05.3 5.85 1.15h-9.45q-1.9.05-3.6 1.35-.2.1-.35.25-1.9 1.55-2.25 3.55l-4.85 34.1q-.25 3 1.75 5.25 1.25 1.4 3 1.95 1.05.3 2.25.3H320q3.25 0 6-2.25 2.75-2 3.25-5l2.75-18.5h-16.5l-1.75 11H302.5l2.1-14.75h.05l.85-6 1.5-11.2q.35 3.8 3.5 6.35 4.6 3.8 15.4 4.8.3 0 .6.05h15.75L345 66.35m-16.4-.95-1.25 8.95h-11.3l.4-2.95h-.05l.7-5.05h-.1l.15-.95h11.45Z"})]})}),T.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",class:"loading-animation",viewBox:"0 0 66 66",children:T.jsx("circle",{xmlns:"http://www.w3.org/2000/svg",class:"spinner",fill:"none","stroke-width":"6","stroke-linecap":"round",cx:"33",cy:"33",r:"30"})}),T.jsx("div",{class:"loadbar",children:T.jsx("div",{class:"loadbar-inner"})})]})}function Tg(){return T.jsx("div",{id:"save-manager",class:"modal hidden",children:T.jsxs("div",{id:"modal-area",class:"modal-area",children:[T.jsx("span",{class:"close-modal"}),T.jsx("div",{class:"general-save-options",children:T.jsx("span",{class:"modal-button"})}),T.jsx("table",{id:"local-saves"})]})})}class _r{constructor(i){this.value=i}valueOf(){return this.value}}class Ve extends _r{constructor(i="???"){super(i)}toString(i){return`{${this.value}}`}}class st extends _r{constructor(i,o={}){super(i),this.opts=o}toString(i){try{return i.memoizeIntlObject(Intl.NumberFormat,this.opts).format(this.value)}catch(o){return i.reportError(o),this.value.toString(10)}}}class Il extends _r{constructor(i,o={}){super(i),this.opts=o}toString(i){try{return i.memoizeIntlObject(Intl.DateTimeFormat,this.opts).format(this.value)}catch(o){return i.reportError(o),new Date(this.value).toISOString()}}}const Lm=100,Dg="⁨",Og="⁩";function Mg(s,i,o){if(o===i||o instanceof st&&i instanceof st&&o.value===i.value)return!0;if(i instanceof st&&typeof o=="string"){let u=s.memoizeIntlObject(Intl.PluralRules,i.opts).select(i.value);if(o===u)return!0}return!1}function Hm(s,i,o){return i[o]?Ja(s,i[o].value):(s.reportError(new RangeError("No default")),new Ve)}function vs(s,i){const o=[],u=Object.create(null);for(const f of i)f.type==="narg"?u[f.name]=ii(s,f.value):o.push(ii(s,f));return{positional:o,named:u}}function ii(s,i){switch(i.type){case"str":return i.value;case"num":return new st(i.value,{minimumFractionDigits:i.precision});case"var":return _g(s,i);case"mesg":return Cg(s,i);case"term":return qg(s,i);case"func":return Ug(s,i);case"select":return Ng(s,i);default:return new Ve}}function _g(s,{name:i}){let o;if(s.params)if(Object.prototype.hasOwnProperty.call(s.params,i))o=s.params[i];else return new Ve(`$${i}`);else if(s.args&&Object.prototype.hasOwnProperty.call(s.args,i))o=s.args[i];else return s.reportError(new ReferenceError(`Unknown variable: $${i}`)),new Ve(`$${i}`);if(o instanceof _r)return o;switch(typeof o){case"string":return o;case"number":return new st(o);case"object":if(o instanceof Date)return new Il(o.getTime());default:return s.reportError(new TypeError(`Variable type not supported: $${i}, ${typeof o}`)),new Ve(`$${i}`)}}function Cg(s,{name:i,attr:o}){const u=s.bundle._messages.get(i);if(!u)return s.reportError(new ReferenceError(`Unknown message: ${i}`)),new Ve(i);if(o){const f=u.attributes[o];return f?Ja(s,f):(s.reportError(new ReferenceError(`Unknown attribute: ${o}`)),new Ve(`${i}.${o}`))}return u.value?Ja(s,u.value):(s.reportError(new ReferenceError(`No value: ${i}`)),new Ve(i))}function qg(s,{name:i,attr:o,args:u}){const f=`-${i}`,m=s.bundle._terms.get(f);if(!m)return s.reportError(new ReferenceError(`Unknown term: ${f}`)),new Ve(f);if(o){const k=m.attributes[o];if(k){s.params=vs(s,u).named;const w=Ja(s,k);return s.params=null,w}return s.reportError(new ReferenceError(`Unknown attribute: ${o}`)),new Ve(`${f}.${o}`)}s.params=vs(s,u).named;const h=Ja(s,m.value);return s.params=null,h}function Ug(s,{name:i,args:o}){let u=s.bundle._functions[i];if(!u)return s.reportError(new ReferenceError(`Unknown function: ${i}()`)),new Ve(`${i}()`);if(typeof u!="function")return s.reportError(new TypeError(`Function ${i}() is not callable`)),new Ve(`${i}()`);try{let f=vs(s,o);return u(f.positional,f.named)}catch(f){return s.reportError(f),new Ve(`${i}()`)}}function Ng(s,{selector:i,variants:o,star:u}){let f=ii(s,i);if(f instanceof Ve)return Hm(s,o,u);for(const m of o){const h=ii(s,m.key);if(Mg(s,f,h))return Ja(s,m.value)}return Hm(s,o,u)}function mp(s,i){if(s.dirty.has(i))return s.reportError(new RangeError("Cyclic reference")),new Ve;s.dirty.add(i);const o=[],u=s.bundle._useIsolating&&i.length>1;for(const f of i){if(typeof f=="string"){o.push(s.bundle._transform(f));continue}if(s.placeables++,s.placeables>Lm)throw s.dirty.delete(i),new RangeError(`Too many placeables expanded: ${s.placeables}, max allowed is ${Lm}`);u&&o.push(Dg),o.push(ii(s,f).toString(s)),u&&o.push(Og)}return s.dirty.delete(i),o.join("")}function Ja(s,i){return typeof i=="string"?s.bundle._transform(i):mp(s,i)}class Lg{constructor(i,o,u){this.dirty=new WeakSet,this.params=null,this.placeables=0,this.bundle=i,this.errors=o,this.args=u}reportError(i){if(!this.errors||!(i instanceof Error))throw i;this.errors.push(i)}memoizeIntlObject(i,o){let u=this.bundle._intls.get(i);u||(u={},this.bundle._intls.set(i,u));let f=JSON.stringify(o);return u[f]||(u[f]=new i(this.bundle.locales,o)),u[f]}}function Mr(s,i){const o=Object.create(null);for(const[u,f]of Object.entries(s))i.includes(u)&&(o[u]=f.valueOf());return o}const Bm=["unitDisplay","currencyDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits"];function Hg(s,i){let o=s[0];if(o instanceof Ve)return new Ve(`NUMBER(${o.valueOf()})`);if(o instanceof st)return new st(o.valueOf(),{...o.opts,...Mr(i,Bm)});if(o instanceof Il)return new st(o.valueOf(),{...Mr(i,Bm)});throw new TypeError("Invalid argument to NUMBER")}const Fm=["dateStyle","timeStyle","fractionalSecondDigits","dayPeriod","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName"];function Bg(s,i){let o=s[0];if(o instanceof Ve)return new Ve(`DATETIME(${o.valueOf()})`);if(o instanceof Il)return new Il(o.valueOf(),{...o.opts,...Mr(i,Fm)});if(o instanceof st)return new Il(o.valueOf(),{...Mr(i,Fm)});throw new TypeError("Invalid argument to DATETIME")}const Vm=new Map;function Fg(s){const i=Array.isArray(s)?s.join(" "):s;let o=Vm.get(i);return o===void 0&&(o=new Map,Vm.set(i,o)),o}class Vg{constructor(i,{functions:o,useIsolating:u=!0,transform:f=m=>m}={}){this._terms=new Map,this._messages=new Map,this.locales=Array.isArray(i)?i:[i],this._functions={NUMBER:Hg,DATETIME:Bg,...o},this._useIsolating=u,this._transform=f,this._intls=Fg(i)}hasMessage(i){return this._messages.has(i)}getMessage(i){return this._messages.get(i)}addResource(i,{allowOverrides:o=!1}={}){const u=[];for(let f=0;f<i.body.length;f++){let m=i.body[f];if(m.id.startsWith("-")){if(o===!1&&this._terms.has(m.id)){u.push(new Error(`Attempt to override an existing term: "${m.id}"`));continue}this._terms.set(m.id,m)}else{if(o===!1&&this._messages.has(m.id)){u.push(new Error(`Attempt to override an existing message: "${m.id}"`));continue}this._messages.set(m.id,m)}}return u}formatPattern(i,o=null,u=null){if(typeof i=="string")return this._transform(i);let f=new Lg(this,u,o);try{return mp(f,i).toString(f)}catch(m){if(f.errors&&m instanceof Error)return f.errors.push(m),new Ve().toString(f);throw m}}}const ns=/^(-?[a-zA-Z][\w-]*) *= */gm,Ym=/\.([a-zA-Z][\w-]*) *= */y,Yg=/\*?\[/y,ts=/(-?[0-9]+(?:\.([0-9]+))?)/y,$g=/([a-zA-Z][\w-]*)/y,$m=/([$-])?([a-zA-Z][\w-]*)(?:\.([a-zA-Z][\w-]*))?/y,Gg=/^[A-Z][A-Z0-9_-]*$/,zr=/([^{}\n\r]+)/y,Zg=/([^\\"\n\r]*)/y,Gm=/\\([\\"])/y,Zm=/\\u([a-fA-F0-9]{4})|\\U([a-fA-F0-9]{6})/y,Qg=/^\n+/,Qm=/ +$/,Xg=/ *\r?\n/g,Wg=/( *)$/,Kg=/{\s*/y,Xm=/\s*}/y,Jg=/\[\s*/y,Pg=/\s*] */y,Ig=/\s*\(\s*/y,eb=/\s*->\s*/y,nb=/\s*:\s*/y,tb=/\s*,?\s*/y,ab=/\s+/y;class lb{constructor(i){this.body=[],ns.lastIndex=0;let o=0;for(;;){let x=ns.exec(i);if(x===null)break;o=ns.lastIndex;try{this.body.push(w(x[1]))}catch(M){if(M instanceof SyntaxError)continue;throw M}}function u(x){return x.lastIndex=o,x.test(i)}function f(x,M){if(i[o]===x)return o++,!0;if(M)throw new M(`Expected ${x}`);return!1}function m(x,M){if(u(x))return o=x.lastIndex,!0;if(M)throw new M(`Expected ${x.toString()}`);return!1}function h(x){x.lastIndex=o;let M=x.exec(i);if(M===null)throw new SyntaxError(`Expected ${x.toString()}`);return o=x.lastIndex,M}function k(x){return h(x)[1]}function w(x){let M=_(),ne=b();if(M===null&&Object.keys(ne).length===0)throw new SyntaxError("Expected message value or attributes");return{id:x,value:M,attributes:ne}}function b(){let x=Object.create(null);for(;u(Ym);){let M=k(Ym),ne=_();if(ne===null)throw new SyntaxError("Expected attribute value");x[M]=ne}return x}function _(){let x;if(u(zr)&&(x=k(zr)),i[o]==="{"||i[o]==="}")return L(x?[x]:[],1/0);let M=Me();return M?x?L([x,M],M.length):(M.value=Ee(M.value,Qg),L([M],M.length)):x?Ee(x,Qm):null}function L(x=[],M){for(;;){if(u(zr)){x.push(k(zr));continue}if(i[o]==="{"){x.push(Q());continue}if(i[o]==="}")throw new SyntaxError("Unbalanced closing brace");let Ne=Me();if(Ne){x.push(Ne),M=Math.min(M,Ne.length);continue}break}let ne=x.length-1,Je=x[ne];typeof Je=="string"&&(x[ne]=Ee(Je,Qm));let tn=[];for(let Ne of x)Ne instanceof Wm&&(Ne=Ne.value.slice(0,Ne.value.length-M)),Ne&&tn.push(Ne);return tn}function Q(){m(Kg,SyntaxError);let x=F();if(m(Xm))return x;if(m(eb)){let M=ge();return m(Xm,SyntaxError),{type:"select",selector:x,...M}}throw new SyntaxError("Unclosed placeable")}function F(){if(i[o]==="{")return Q();if(u($m)){let[,x,M,ne=null]=h($m);if(x==="$")return{type:"var",name:M};if(m(Ig)){let Je=ae();if(x==="-")return{type:"term",name:M,attr:ne,args:Je};if(Gg.test(M))return{type:"func",name:M,args:Je};throw new SyntaxError("Function names must be all upper-case")}return x==="-"?{type:"term",name:M,attr:ne,args:[]}:{type:"mesg",name:M,attr:ne}}return xe()}function ae(){let x=[];for(;;){switch(i[o]){case")":return o++,x;case void 0:throw new SyntaxError("Unclosed argument list")}x.push(ue()),m(tb)}}function ue(){let x=F();return x.type!=="mesg"?x:m(nb)?{type:"narg",name:x.name,value:xe()}:x}function ge(){let x=[],M=0,ne;for(;u(Yg);){f("*")&&(ne=M);let Je=Ye(),tn=_();if(tn===null)throw new SyntaxError("Expected variant value");x[M++]={key:Je,value:tn}}if(M===0)return null;if(ne===void 0)throw new SyntaxError("Expected default variant");return{variants:x,star:ne}}function Ye(){m(Jg,SyntaxError);let x;return u(ts)?x=be():x={type:"str",value:k($g)},m(Pg,SyntaxError),x}function xe(){if(u(ts))return be();if(i[o]==='"')return ie();throw new SyntaxError("Invalid expression")}function be(){let[,x,M=""]=h(ts),ne=M.length;return{type:"num",value:parseFloat(x),precision:ne}}function ie(){f('"',SyntaxError);let x="";for(;;){if(x+=k(Zg),i[o]==="\\"){x+=X();continue}if(f('"'))return{type:"str",value:x};throw new SyntaxError("Unclosed string literal")}}function X(){if(u(Gm))return k(Gm);if(u(Zm)){let[,x,M]=h(Zm),ne=parseInt(x||M,16);return ne<=55295||57344<=ne?String.fromCodePoint(ne):"�"}throw new SyntaxError("Unknown escape sequence")}function Me(){let x=o;switch(m(ab),i[o]){case".":case"[":case"*":case"}":case void 0:return!1;case"{":return Ae(i.slice(x,o))}return i[o-1]===" "?Ae(i.slice(x,o)):!1}function Ee(x,M){return x.replace(M,"")}function Ae(x){let M=x.replace(Xg,`
`),ne=Wg.exec(x)[1].length;return new Wm(M,ne)}}}class Wm{constructor(i,o){this.value=i,this.length=o}}const ib="([a-z]{2,3}|\\*)",rb="(?:-([a-z]{4}|\\*))",ob="(?:-([a-z]{2}|\\*))",ub="(?:-(([0-9][a-z0-9]{3}|[a-z0-9]{5,8})|\\*))",sb=new RegExp(`^${ib}${rb}?${ob}?${ub}?$`,"i");class ei{constructor(i){const o=sb.exec(i.replace(/_/g,"-"));if(!o){this.isWellFormed=!1;return}let[,u,f,m,h]=o;u&&(this.language=u.toLowerCase()),f&&(this.script=f[0].toUpperCase()+f.slice(1)),m&&(this.region=m.toUpperCase()),this.variant=h,this.isWellFormed=!0}isEqual(i){return this.language===i.language&&this.script===i.script&&this.region===i.region&&this.variant===i.variant}matches(i,o=!1,u=!1){return(this.language===i.language||o&&this.language===void 0||u&&i.language===void 0)&&(this.script===i.script||o&&this.script===void 0||u&&i.script===void 0)&&(this.region===i.region||o&&this.region===void 0||u&&i.region===void 0)&&(this.variant===i.variant||o&&this.variant===void 0||u&&i.variant===void 0)}toString(){return[this.language,this.script,this.region,this.variant].filter(i=>i!==void 0).join("-")}clearVariants(){this.variant=void 0}clearRegion(){this.region=void 0}addLikelySubtags(){const i=fb(this.toString().toLowerCase());return i?(this.language=i.language,this.script=i.script,this.region=i.region,this.variant=i.variant,!0):!1}}const Km={ar:"ar-arab-eg","az-arab":"az-arab-ir","az-ir":"az-arab-ir",be:"be-cyrl-by",da:"da-latn-dk",el:"el-grek-gr",en:"en-latn-us",fa:"fa-arab-ir",ja:"ja-jpan-jp",ko:"ko-kore-kr",pt:"pt-latn-br",sr:"sr-cyrl-rs","sr-ru":"sr-latn-ru",sv:"sv-latn-se",ta:"ta-taml-in",uk:"uk-cyrl-ua",zh:"zh-hans-cn","zh-hant":"zh-hant-tw","zh-hk":"zh-hant-hk","zh-mo":"zh-hant-mo","zh-tw":"zh-hant-tw","zh-gb":"zh-hant-gb","zh-us":"zh-hant-us"},cb=["az","bg","cs","de","es","fi","fr","hu","it","lt","lv","nl","pl","ro","ru"];function fb(s){if(Object.prototype.hasOwnProperty.call(Km,s))return new ei(Km[s]);const i=new ei(s);return i.language&&cb.includes(i.language)?(i.region=i.language.toUpperCase(),i):null}function db(s,i,o){const u=new Set,f=new Map;for(let m of i)new ei(m).isWellFormed&&f.set(m,new ei(m));e:for(const m of s){const h=m.toLowerCase(),k=new ei(h);if(k.language!==void 0){for(const w of f.keys())if(h===w.toLowerCase()){if(u.add(w),f.delete(w),o==="lookup")return Array.from(u);if(o==="filtering")continue;continue e}for(const[w,b]of f.entries())if(b.matches(k,!0,!1)){if(u.add(w),f.delete(w),o==="lookup")return Array.from(u);if(o==="filtering")continue;continue e}if(k.addLikelySubtags()){for(const[w,b]of f.entries())if(b.matches(k,!0,!1)){if(u.add(w),f.delete(w),o==="lookup")return Array.from(u);if(o==="filtering")continue;continue e}}k.clearVariants();for(const[w,b]of f.entries())if(b.matches(k,!0,!0)){if(u.add(w),f.delete(w),o==="lookup")return Array.from(u);if(o==="filtering")continue;continue e}if(k.clearRegion(),k.addLikelySubtags()){for(const[w,b]of f.entries())if(b.matches(k,!0,!1)){if(u.add(w),f.delete(w),o==="lookup")return Array.from(u);if(o==="filtering")continue;continue e}}k.clearRegion();for(const[w,b]of f.entries())if(b.matches(k,!0,!0)){if(u.add(w),f.delete(w),o==="lookup")return Array.from(u);if(o==="filtering")continue;continue e}}}return Array.from(u)}function mb(s,i,{strategy:o="filtering",defaultLocale:u}={}){const f=db(Array.from(s??[]).map(String),Array.from(i??[]).map(String),o);if(o==="lookup"){if(u===void 0)throw new Error("defaultLocale cannot be undefined for strategy `lookup`");f.length===0&&f.push(u)}else u&&!f.includes(u)&&f.push(u);return f}const pb={"ar-SA":{"context_menu.ftl":`context-menu-download-swf = حمِّل .swf
context-menu-copy-debug-info = إنسخ معلومات التصحيح
context-menu-open-save-manager = إفتح مدير الحفظ
context-menu-about-ruffle =
    { $flavor ->
        [extension] عن ملحق Ruffle ({ $version })
       *[other] عن Ruffle ({ $version })
    }
context-menu-hide = أخفِ هذه القائمة
context-menu-exit-fullscreen = إخرج من وضعية الشاشة الكاملة
context-menu-enter-fullscreen = إدخل وضعية الشاشة الكاملة
context-menu-volume-controls = التحكم بالصوت
`,"messages.ftl":`message-cant-embed =
    لم يكن رفل قادرًا على تشغيل الفلاش المضمنة في هذه الصفحة.
    يمكنك محاولة فتح الملف في علامة تبويب منفصلة لتجاوز هذه المشكلة.
panic-title = لقد حدث خطأ ما :(
more-info = معلومات أكثر
run-anyway = شغِّل على أي حال
continue = إستمر
report-bug = بلِّغ عن خلل
update-ruffle = تحديث رفل
ruffle-demo = العرض التجريبي
ruffle-desktop = برنامج سطح المكتب
ruffle-wiki = إعرض ويكي رفل
enable-hardware-acceleration = يبدو أن تسريع الجهاز معطل. على الرغم من أن رفل قد يعمل، إلا أنه قد يكون بطيئًا جدًا. يمكنك معرفة كيفية تمكين تسريع الأجهزة بالنقر على الرابط أدناه:
enable-hardware-acceleration-link = الأسئلة الشائعة - تسريع أجهزة كروم
view-error-details = إعرض تفاصيل الخطأ
open-in-new-tab = إفتح في علامة تبويب جديدة
click-to-unmute = إنقر لإلغاء الكتم
clipboard-message-title = النسخ واللصق في رفل
clipboard-message-description =
    {$variant ->
       *[unsupported] متصفحك لا يدعم الوصول للحافظة الكاملة،
        [access-denied] تم رفض الوصول للحافظة،
    } لكن يمكنك إستخدام هذه الاختصارات دائمًا:
clipboard-message-copy = { " " } للنسخ
clipboard-message-cut = { " " } للقص
clipboard-message-paste = { " " } للصق
error-file-protocol =
    يبدو أنك تقوم بتشغيل رفل على بروتوكول "file:".
    هذا لن يعمل لأن المتصفحات تمنع العديد من الميزات من العمل لأسباب أمنية.
    بدلاً من ذلك، ندعوك إلى إعداد خادم محلي أو إستخدام عرض الويب أو تطبيق سطح المكتب.
error-javascript-config =
    تعرض رفل إلى مشكلة كبيرة بسبب الإعدادات الخاطئة للجافا سكريبت.
    إذا كنت مسؤول الخادم، نحن ندعوك إلى التحقق من تفاصيل الخطأ لمعرفة سبب المشكلة.
    يمكنك أيضًا الرجوع إلى ويكي رفل للحصول على المساعدة.
error-wasm-not-found =
    فشل رفل في تحميل مكون الملف ".wasm" المطلوب.
    إذا كنت مسؤول الخادم، يرجى التأكد من أن الملف قد تم تحميله بشكل صحيح.
    إذا استمرت المشكلة، قد تحتاج إلى إستخدام إعدادات "publicPath": الرجاء مراجعة ويكي رفل للحصول على المساعدة.
error-wasm-mime-type =
    واجه رفل مشكلة كبيرة أثناء محاولة التهيئة.
    خادم الويب هذا لا يخدم ملفات ". wasm" مع نوع MIME الصحيح.
    إذا كنت مسؤول الخادم، يرجى مراجعة ويكي رفل للحصول على المساعدة.
error-invalid-swf =
    لا يمكن لرفل تحليل الملف المطلوب.
    السبب الأكثر إحتمالاً هو أن الملف المطلوب ليس صالحًا.
error-swf-fetch =
    فشل رفل في تحميل ملف فلاش SWF.
    السبب الأكثر إحتمالاً هو أن الملف لم يعد موجودًا، لذلك لا يوجد شيء ليحمله رفل.
    حاول الإتصال بمسؤول الموقع للحصول على المساعدة.
error-swf-cors =
    فشل رفل في تحميل ملف فلاش SWF.
    من المحتمل أن إحضار الملف قد حُظِر بواسطة سياسة CORS.
    إذا كنت مسؤول الخادم، يرجى مراجعة رفل ويكي للحصول على المساعدة.
error-wasm-cors =
    فشل رفل في تحميل مكون ملف ".wasm" المطلوب.
    من المحتمل أن إحضار الملف قد حُظِر بواسطة سياسة CORS.
    إذا كنت مسؤول الخادم، يرجى مراجعة رفل ويكي للحصول على المساعدة.
error-wasm-invalid =
    واجه رفل مشكلة كبيرة أثناء محاولة التهيئة.
    يبدو أن هذه الصفحة تحتوي على ملفات مفقودة أو غير صالحة لتشغيل رفل.
    إذا كنت مسؤول الخادم، يرجى مراجعة ويكي رفل للحصول على المساعدة.
error-wasm-download =
    واجه رفل مشكلة كبيرة أثناء محاولتها التهيئة.
    هذا يمكن أن يحل نفسه في كثير من الأحيان، لذلك يمكنك محاولة إعادة تحميل الصفحة.
    وإلا يرجى الاتصال بمدير الموقع.
error-wasm-disabled-on-edge =
    فشل Ruffle في تحميل مكون الملف ".wasm" المطلوب.
    لإصلاح هذه المشكلة، حاول فتح إعدادات متصفحك، ثم إنقر فوق "الخصوصية، البحث، الخدمات"، والتمرير لأسفل، وإيقاف "تعزيز أمانك على الويب".
    هذا سيسمح لمتصفحك بتحميل الملفات ".wasm" المطلوبة.
    إذا إستمرت المشكلة، قد تحتاج إلى إستخدام متصفح أخر.
error-wasm-unsupported-browser =
    لا يدعم المتصفح الذي تستخدمه امتدادات WebAssembly الذي يتطلبه رفل لتشغيله.
    رجاءً انتقل لمتصفح داعم.
    يمكنك إيجاد لائحة للمتصفحات الداعمة في الويكي.
error-javascript-conflict =
    واجه رفل مشكلة كبيرة أثناء محاولة التهيئة.
    يبدو أن هذه الصفحة تستخدم كود جافا سكريبت الذي يتعارض مع رفل.
    إذا كنت مسؤول الخادم، فإننا ندعوك إلى محاولة تحميل الملف على صفحة فارغة.
error-javascript-conflict-outdated = يمكنك أيضًا محاولة تحميل نسخة أحدث من رفل التي قد تحل المشكلة (النسخة الحالية قديمة: { $buildDate }).
error-csp-conflict =
    واجه Ruffle مشكلة كبيرة أثناء محاولة التهيئة.
    لا تسمح سياسة أمان المحتوى لخادم الويب هذا بتشغيل مكون ".wasm" المطلوب.
    إذا كنت مسؤول الخادم، يرجى الرجوع إلى ويكي Ruffle للحصول على المساعدة.
error-unknown =
    واجه رفل مشكلة كبيرة أثناء محاولة عرض محتوى الفلاش هذا.
    { $outdated ->
        [true] إذا كنت مسؤول الخادم، يرجى محاولة تحميل إصدار أحدث من رفل (النسخة الحالية قديمة: { $buildDate }).
       *[false] ليس من المفترض أن يحدث هذا، لذلك نحن نقدر حقًا إذا بلغت عن الخطأ!
    }
`,"save-manager.ftl":`save-delete-prompt = هل أنت متأكد أنك تريد حذف ملف الحفظ هذا؟
save-reload-prompt =
    الطريقة الوحيدة لـ { $action ->
        [delete] حذف
       *[replace] إستبدال
    } ملف الحفظ هذا دون تعارض محتمل هي إعادة تحميل هذه الصفحة. هل ترغب في المتابعة على أي حال؟
save-download = حمّل
save-replace = إستبدل
save-delete = إحذف
save-backup-all = حمّل جميع ملفات الحفظ
`,"volume-controls.ftl":`volume-controls-mute = إكتم
volume-controls-unmute = ألغِ الكتم
`},"ca-ES":{"context_menu.ftl":`context-menu-download-swf = Baixa el fitxer .swf
context-menu-copy-debug-info = Copia la informació de depuració
context-menu-open-save-manager = Obre el gestor d'emmagatzematge
context-menu-about-ruffle =
    { $flavor ->
        [extension] Quant a l'extensió de Ruffle ({ $version })
       *[other] Quant a Ruffle ({ $version })
    }
context-menu-hide = Amaga aquest menú
context-menu-exit-fullscreen = Surt de la pantalla completa
context-menu-enter-fullscreen = Pantalla completa
context-menu-volume-controls = Controls de volum
`,"messages.ftl":`message-cant-embed =
    Ruffle no ha pogut executar el contingut Flash incrustat en aquesta pàgina.
    Podeu provar d'obrir el fitxer en una pestanya a part per evitar aquest problema.
panic-title = Alguna cosa ha fallat :(
more-info = Més informació
run-anyway = Reprodueix igualment
continue = Continua
report-bug = Informa d'un error
update-ruffle = Actualitza Ruffle
ruffle-demo = Demostració web
ruffle-desktop = Aplicació d'escriptori
ruffle-wiki = Obre la wiki de Ruffle
view-error-details = Mostra detalls de l'error
open-in-new-tab = Obre en una pestanya nova
click-to-unmute = Feu clic per activar el so
error-file-protocol =
    Sembla que esteu executant Ruffle al protocol "file:".
    Això no funcionarà perquè els navegadors bloquegen moltes característiques per raons de seguretat. En comptes d'això, us suggerim que configureu un servidor local o bé utilitzeu la demostració web o l'aplicació d'escriptori.
error-javascript-config =
    Ruffle ha topat amb un problema greu a causa d'una configuració JavaScript errònia.
    Si sou l'administrador del servidor, us suggerim que comproveu els detalls de l'error per determinar el paràmetre culpable.
    També podeu consultar la wiki del Ruffle per obtenir ajuda.
error-wasm-not-found =
    Ruffle no ha pogut carregar el component de fitxer ".wasm" necessari.
    Si sou l'administrador del servidor, si us plau, comproveu que el fitxer ha estat carregat correctament.
    Si el problema continua, és possible que hàgiu d'utilitzar el parámetre "publicPath": us preguem que consulteu la wiki de Ruffle per obtenir ajuda.
error-wasm-mime-type =
    Ruffle ha topat amb un problema greu mentre provava d'inicialitzar-se.
    Aquest servidor no està servint els fitxers ".wasm" amb el tipus MIME adequat.
    Si sou l'administrador del servidor, us preguem que consulteu la wiki de Ruffle per obtenir ajuda.
error-invalid-swf =
    Ruffle no ha pogut llegir el fitxer sol·licitat.
    La raó més probable és que no sigui un fitxer SWF vàlid.
error-swf-fetch =
    Ruffle no ha pogut carregar el fitxer SWF Flash.
    La raó més probable és que el fitxer ja no existeixi, així que no hi ha res que el Ruffle pugui carregar.
    Proveu de contactar a l'administrador del lloc per obtenir ajuda.
error-swf-cors =
    Ruffle no ha pogut carregar el fitxer SWF Flash.
    És probable que l'accés a la càrrega hagi estat denegat per una política CORS.
    Si sou l'administrador del servidor, us preguem que consulteu la wiki del Ruffle per obtenir ajuda.
error-wasm-cors =
    Ruffle no ha pogut carregar el component de fitxer ".wasm" necessari.
    És probable que l'accés a la càrrega hagi estat denegat per una política CORS.
    Si sou l'administrador del servidor, us preguem que consulteu la wiki del Ruffle per obtenir ajuda.
error-wasm-invalid =
    Ruffle ha topat amb un problema greu mentre provava d'inicialitzar-se.
    Sembla que a aquest lloc li manquen fitxers o aquests no són vàlids per a l'execució de Ruffle.
    Si sou l'administrador del servidor, us preguem que consulteu la wiki de Ruffle per obtenir ajuda.
error-wasm-download =
    Ruffle ha topat amb un problema greu mentre provava d'inicialitzar-se.
    Això sovint això pot resoldre's sol, així que podeu provar de recarregar la pàgina.
    En cas contrari, us preguem que contacteu l'administrador del lloc.
error-wasm-disabled-on-edge =
    Ruffle no ha pogut carregar el component de fitxer ".wasm" necessari.
    Per a arreglar-ho, proveu d'obrir els paràmetres del navegador, feu clic sobre "Privadesa, cerca i serveis", i desactiveu "Prevenció de seguiment".
    Això permetrà que el vostre navegador carregui els fitxers ".wasm" necessaris.
    Si el problema continua, possiblement haureu d'utilitzar un altre navegador.
error-javascript-conflict =
    Ruffle ha topat amb un problema greu mentre provava d'inicialitzar-se.
    Sembla que aquest lloc fa servir codi JavaScript que entra en conflicte amb Ruffle.
    Si sou l'administrador del servidor, us preguem que consulteu la wiki de Ruffle per obtenir ajuda.
error-javascript-conflict-outdated = També podeu provar de carregar una versió més recent de Ruffle que podria resoldre el problema (la compilació actual està desactualitzada: { $buildDate }).
error-csp-conflict =
    Ruffle ha topat amb un problema greu mentre provava d'inicialitzar-se.
    La política de seguretat del contingut (CSP) no permet l'execució del component ".wasm" necessari.
    Si sou l'administrador del servidor, us preguem que consulteu la wiki de Ruffle per obtenir ajuda.
error-unknown =
    Ruffle ha topat amb un problema greu mentre provava de mostrar aquest contingut Flash.
    { $outdated ->
        [true] Si sou l'administrador del servidor, us preguem que proveu de carregar una versió més recent de Ruffle (la compilació actual està desactualitzada: { $buildDate }).
       *[false] Això no hauria d'haver passat, així que us agrairíem molt que n'informéssiu l'error!
    }
`,"save-manager.ftl":`save-delete-prompt = Segur que vols esborrar aquest fitxer desat?
save-reload-prompt =
    L'única forma d{ $action ->
        [delete] 'eliminar
       *[replace] e substituir
    } aquest fitxer desat sense crear un potencial conflicte és recarregant el contingut. Voleu continuar igualment?
save-download = Baixa
save-replace = Substitueix
save-delete = Elimina
save-backup-all = Baixa tots els fitxers desats
`,"volume-controls.ftl":`volume-controls-mute = Silenci
`},"cs-CZ":{"context_menu.ftl":`context-menu-download-swf = Stáhnout .swf
context-menu-copy-debug-info = Zkopírovat debug info
context-menu-open-save-manager = Otevřít správce uložení
context-menu-about-ruffle =
    { $flavor ->
         [extension] O Ruffle rozšíření ({ $version })
        *[other] O Ruffle ({ $version })
    }
context-menu-hide = Skrýt menu
context-menu-exit-fullscreen = Ukončit režim celé obrazovky
context-menu-enter-fullscreen = Přejít do režimu celé obrazovky
context-menu-volume-controls = Ovládání hlasitosti
`,"messages.ftl":`message-cant-embed =
    Ruffle nemohl spustit Flash vložený na této stránce.
    Můžete se pokusit otevřít soubor na samostatné kartě, abyste se vyhnuli tomuto problému.
panic-title = Něco se pokazilo :(
more-info = Další informace
run-anyway = Přesto spustit
continue = Pokračovat
report-bug = Nahlásit chybu
update-ruffle = Aktualizovat Ruffle
ruffle-demo = Web Demo
ruffle-desktop = Desktopová aplikace
ruffle-wiki = Zobrazit Ruffle Wiki
enable-hardware-acceleration = Zdá se, že hardwarová akcelerace je vypnutá. I když Ruffle funguje správně, může být nepřiměřeně pomalý. Jak povolit hardwarovou akceleraci zjistíte na tomto odkazu:
enable-hardware-acceleration-link = Časté dotazy - Hardwarová akcelerace Chrome
view-error-details = Zobrazit podrobnosti o chybě
open-in-new-tab = Otevřít na nové kartě
click-to-unmute = Kliknutím zrušíte ztlumení
clipboard-message-title = Kopírování a vkládání v Ruffle
clipboard-message-description =
    { $variant ->
       *[unsupported] Váš prohlížeč nepodporuje plný přístup ke schránce,
        [access-denied] Přístup ke schránce byl odepřen,
    } ale místo toho můžete vždy použít tyto zkratky:
clipboard-message-copy = { " " } pro kopírování
clipboard-message-cut = { " " } pro vystřihování
clipboard-message-paste = { " " } pro vkládání
error-canvas-reload = Nelze znovu načíst pomocí vykreslovače plátna, pokud je vykreslovač plátna již používán.
error-file-protocol =
    Zdá se, že používáte Ruffle na protokolu "file:".
    To není možné, protože prohlížeče blokují fungování mnoha funkcí z bezpečnostních důvodů.
    Namísto toho vám doporučujeme nastavit lokální server nebo použít web demo či desktopovou aplikaci.
error-javascript-config =
    Ruffle narazil na problém v důsledku nesprávné konfigurace JavaScriptu.
    Pokud jste správcem serveru, doporučujeme vám zkontrolovat podrobnosti o chybě, abyste zjistili, který parametr je vadný.
    Pomoc můžete získat také na wiki Ruffle.
error-wasm-not-found =
    Ruffle se nepodařilo načíst požadovanou komponentu souboru „.wasm“.
    Pokud jste správcem serveru, zkontrolujte, zda byl soubor správně nahrán.
    Pokud problém přetrvává, možná budete muset použít nastavení „publicPath“: pomoc naleznete na wiki Ruffle.
error-wasm-mime-type =
    Ruffle narazil na problém při pokusu o inicializaci.
    Tento webový server neposkytuje soubory „.wasm“ se správným typem MIME.
    Pokud jste správcem serveru, nápovědu najdete na Ruffle wiki.
error-invalid-swf =
    Ruffle nemůže zpracovat požadovaný soubor.
    Nejpravděpodobnějším důvodem je, že požadovaný soubor není platným souborem SWF.
error-swf-fetch =
    Ruffle se nepodařilo načíst SWF soubor Flash.
    Nejpravděpodobnějším důvodem je, že soubor již neexistuje, takže Ruffle nemá co načíst.
    Zkuste požádat o pomoc správce webu.
error-swf-cors =
    Ruffle se nepodařilo načíst SWF soubor Flash.
    Přístup k načítání byl pravděpodobně zablokován politikou CORS.
    Pokud jste správcem serveru, nápovědu najdete na Ruffle wiki.
error-wasm-cors =
    Ruffle se nepodařilo načíst požadovanou komponentu souboru „.wasm“.
    Přístup k načítání byl pravděpodobně zablokován politikou CORS.
    Pokud jste správcem serveru, nápovědu najdete na Ruffle wiki.
error-wasm-invalid =
    Ruffle narazil na problém při pokusu o inicializaci.
    Zdá se, že na této stránce chybí nebo jsou neplatné soubory ke spuštění Ruffle.
    Pokud jste správcem serveru, nápovědu najdete na Ruffle wiki.
error-wasm-download =
    Ruffle narazil na problém při pokusu o inicializaci.
    Problém se může vyřešit i sám, takže můžete zkusit stránku načíst znovu.
    V opačném případě kontaktujte administrátora stránky.
error-wasm-disabled-on-edge =
    Ruffle se nepodařilo načíst požadovanou komponentu souboru „.wasm“.
    Chcete-li tento problém vyřešit, zkuste otevřít nastavení prohlížeče, klikněte na položku „Ochrana osobních údajů, vyhledávání a služby“, přejděte dolů a vypněte možnost „Zvyšte svou bezpečnost na webu“.
    Vašemu prohlížeči to umožní načíst požadované soubory „.wasm“.
    Pokud problém přetrvává, budete možná muset použít jiný prohlížeč.
error-wasm-unsupported-browser =
    Prohlížeč, který používáte, nepodporuje rozšíření WebAssembly, které Ruffle vyžaduje ke spuštění.
    Přejděte na podporovaný prohlížeč.
    Seznam podporovaných prohlížečů naleznete na Wiki.
error-javascript-conflict =
    Ruffle narazil na problém při pokusu o inicializaci.
    Zdá se, že tato stránka používá kód JavaScript, který je v konfliktu s Ruffle.
    Pokud jste správcem serveru, doporučujeme vám zkusit načíst soubor na prázdnou stránku.
error-javascript-conflict-outdated = Můžete se také pokusit nahrát novější verzi Ruffle, která může daný problém vyřešit (aktuální build je zastaralý: { $buildDate }).
error-csp-conflict =
    Ruffle narazil na problém při pokusu o inicializaci.
    Zásady zabezpečení obsahu tohoto webového serveru nepovolují spuštění požadované komponenty „.wasm“.
    Pokud jste správcem serveru, nápovědu najdete na Ruffle wiki.
error-unknown =
    Ruffle narazil na problém při pokusu zobrazit tento Flash obsah.
    { $outdated ->
          [true] Pokud jste správcem serveru, zkuste nahrát novější verzi Ruffle (aktuální build je zastaralý: { $buildDate }).
         *[false] Toto by se nemělo stát, takže bychom opravdu ocenili, kdybyste mohli nahlásit chybu!
    }
`,"save-manager.ftl":`save-delete-prompt = Opravdu chcete odstranit tento soubor s uloženými pozicemi?
save-reload-prompt =
    Jediný způsob, jak { $action ->
          [delete] vymazat
         *[replace] nahradit
    } tento soubor s uloženými pozicemi bez potenciálního konfliktu je opětovné načtení tohoto obsahu. Chcete přesto pokračovat?
save-download = Stáhnout
save-replace = Nahradit
save-delete = Vymazat
save-backup-all = Stáhnout všechny soubory s uloženými pozicemi
`,"volume-controls.ftl":`volume-controls-mute = Ztlumit
volume-controls-unmute = Zrušit ztlumení
`},"de-DE":{"context_menu.ftl":`context-menu-download-swf = .swf herunterladen
context-menu-copy-debug-info = Debug-Info kopieren
context-menu-open-save-manager = Dateimanager öffnen
context-menu-about-ruffle =
    { $flavor ->
        [extension] Über Ruffle Erweiterung ({ $version })
       *[other] Über Ruffle ({ $version })
    }
context-menu-hide = Menü ausblenden
context-menu-exit-fullscreen = Vollbild verlassen
context-menu-enter-fullscreen = Vollbildmodus aktivieren
context-menu-volume-controls = Lautstärke einstellen
`,"messages.ftl":`message-cant-embed =
    Ruffle konnte den Flash in dieser Seite nicht ausführen.
    Du kannst versuchen, die Datei in einem separaten Tab zu öffnen, um dieses Problem zu umgehen.
panic-title = Etwas ist schief gelaufen
more-info = Weitere Informationen
run-anyway = Trotzdem ausführen
continue = Fortfahren
report-bug = Fehler melden
update-ruffle = Ruffle aktuallisieren
ruffle-demo = Web-Demo
ruffle-desktop = Desktop-Anwendung
ruffle-wiki = Ruffle-Wiki anzeigen
enable-hardware-acceleration = Es sieht so aus, als ob die Hardwarebeschleunigung deaktiviert ist. Ruffle kann zwar funktionieren, könnte aber sehr langsam sein. Wie Sie die Hardwarebeschleunigung aktivieren können, erfahren Sie unter dem folgenden Link:
enable-hardware-acceleration-link = FAQ - Chrome Hardwarebeschleunigung
view-error-details = Fehlerdetails anzeigen
open-in-new-tab = In einem neuen Tab öffnen
click-to-unmute = Klicke zum Entmuten
clipboard-message-title = Kopieren und Einfügen in Ruffle
clipboard-message-description =
    { $variant ->
       *[unsupported] Dein Browser unterstützt keinen vollständigen Zugriff auf die Zwischenablage,
        [access-denied] Zugriff auf die Zwischenablage wurde verweigert,
    } aber du kannst stattdessen auch diese Tastenkombinationen verwenden:
clipboard-message-copy = { " " } zum Kopieren
clipboard-message-cut = { " " } zum Ausschneiden
clipboard-message-paste = { " " } zum Einfügen
error-file-protocol =
    Es scheint, dass Sie Ruffle auf dem "file:"-Protokoll ausführen.
    Jedoch werden aus Sicherheitsgründen viele Funktionen vom Browser blockiert, weswegen die Datei nicht geladen werden kann.
    Setzen Sie stattdessen einen lokalen Server auf, verwenden Sie die Webdemo oder die Desktop-Anwendung.
error-javascript-config =
    Ruffle ist aufgrund einer falschen JavaScript-Konfiguration auf ein Problem gestoßen.
    Wenn du der Server-Administrator bist, laden wir dich ein, die Fehlerdetails zu überprüfen, um herauszufinden, welcher Parameter fehlerhaft ist.
    Sie können auch das Ruffle-Wiki für Hilfe konsultieren.
error-wasm-not-found =
    Ruffle konnte die erforderliche ".wasm"-Datei-Komponente nicht laden.
    Wenn Sie der Server-Administrator sind, stellen Sie bitte sicher, dass die Datei korrekt hochgeladen wurde.
    Wenn das Problem weiterhin besteht, müssen Sie unter Umständen die "publicPath"-Einstellung verwenden: Bitte konsultieren Sie das Ruffle-Wiki für Hilfe.
error-wasm-mime-type =
    Ruffle ist auf ein Fehler beim Initialisieren gestoßen.
    Dieser Webserver dient nicht ". asm"-Dateien mit dem korrekten MIME-Typ.
    Wenn Sie der Server-Administrator sind, konsultieren Sie bitte das Ruffle-Wiki für Hilfe.
error-invalid-swf =
    Ruffle konnte die angegebene Datei nicht lesen.
    Am wahrscheinlichsten ist die angegebene Datei keine gültige SWF.
error-swf-fetch =
    Ruffle konnte die Flash-SWF-Datei nicht laden.
    Der wahrscheinlichste Grund ist, dass die Datei nicht mehr existiert, so dass Ruffle nicht geladen werden kann.
    Kontaktieren Sie den Website-Administrator für Hilfe.
error-swf-cors =
    Ruffle konnte die Flash-SWF-Datei nicht laden.
    Der Zugriff auf den Abruf wurde wahrscheinlich durch die CORS-Richtlinie blockiert.
    Wenn Sie der Server-Administrator sind, konsultieren Sie bitte das Ruffle-Wiki für Hilfe.
error-wasm-cors =
    Ruffle konnte die Flash-SWF-Datei nicht laden.
    Der Zugriff auf den Abruf wurde wahrscheinlich durch die CORS-Richtlinie blockiert.
    Wenn Sie der Server-Administrator sind, konsultieren Sie bitte das Ruffle-Wiki für Hilfe.
error-wasm-invalid =
    Ruffle ist auf ein Fehler beim Initialisieren gestoßen.
    Dieser Webserver dient nicht ". asm"-Dateien mit dem korrekten MIME-Typ.
    Wenn Sie der Server-Administrator sind, konsultieren Sie bitte das Ruffle-Wiki für Hilfe.
error-wasm-download =
    Ruffle ist auf ein Fehler beim Initialisieren gestoßen.
    Dies kann sich oft selbst beheben, so dass Sie versuchen können, die Seite neu zu laden.
    Andernfalls kontaktieren Sie bitte den Website-Administrator.
error-wasm-disabled-on-edge =
    Ruffle konnte die erforderliche ".wasm"-Datei-Komponente nicht laden.
    Um dies zu beheben, versuche die Einstellungen deines Browsers zu öffnen, klicke auf "Privatsphäre, Suche und Dienste", scrollen nach unten und schalte "Verbessere deine Sicherheit im Web" aus.
    Dies erlaubt Ihrem Browser die erforderlichen ".wasm"-Dateien zu laden.
    Wenn das Problem weiterhin besteht, müssen Sie möglicherweise einen anderen Browser verwenden.
error-javascript-conflict =
    Ruffle ist auf ein Fehler beim Initialisieren gestoßen.
    Es scheint, als ob diese Seite JavaScript-Code verwendet, der mit Ruffle kollidiert.
    Wenn Sie der Server-Administrator sind, laden wir Sie ein, die Datei auf einer leeren Seite zu laden.
error-javascript-conflict-outdated = Du kannst auch versuchen, eine neuere Version von Ruffle hochzuladen, die das Problem umgehen könnte (aktuelle Version ist veraltet: { $buildDate }).
error-csp-conflict =
    Ruffle ist auf ein Fehler beim Initialisieren gestoßen.
    Dieser Webserver dient nicht ". asm"-Dateien mit dem korrekten MIME-Typ.
    Wenn Sie der Server-Administrator sind, konsultieren Sie bitte das Ruffle-Wiki für Hilfe.
error-unknown =
    Bei dem Versuch, diesen Flash-Inhalt anzuzeigen, ist Ruffle auf ein großes Problem gestoßen.
    { $outdated ->
        [true] Wenn Sie der Server-Administrator sind, Bitte versuchen Sie, eine neuere Version von Ruffle hochzuladen (aktuelle Version ist veraltet: { $buildDate }).
       *[false] Dies soll nicht passieren, deshalb würden wir uns sehr darüber freuen, wenn Sie einen Fehler melden könnten!
    }
`,"save-manager.ftl":`save-delete-prompt = Sind Sie sicher, dass Sie diese Speicherdatei löschen möchten?
save-reload-prompt =
    Der einzige Weg zu { $action ->
        [delete] löschen
       *[replace] ersetzen
    } diese Speicherdatei ohne möglichen Konflikt ist das erneute Laden dieses Inhalts. Möchten Sie trotzdem fortfahren?
save-download = Herunterladen
save-replace = Ersetzen
save-delete = Löschen
save-backup-all = Alle gespeicherten Dateien herunterladen
`,"volume-controls.ftl":`volume-controls-mute = Stummschalten
volume-controls-unmute = Stummschaltung aufheben
`},"en-US":{"context_menu.ftl":`context-menu-download-swf = Download .swf
context-menu-copy-debug-info = Copy debug info
context-menu-open-save-manager = Open Save Manager
context-menu-about-ruffle =
    { $flavor ->
        [extension] About Ruffle Extension ({$version})
        *[other] About Ruffle ({$version})
    }
context-menu-hide = Hide this menu
context-menu-exit-fullscreen = Exit fullscreen
context-menu-enter-fullscreen = Enter fullscreen
context-menu-volume-controls = Volume controls
`,"messages.ftl":`message-cant-embed =
    Ruffle wasn't able to run the Flash embedded in this page.
    You can try to open the file in a separate tab, to sidestep this issue.
panic-title = Something went wrong :(
more-info = More info
run-anyway = Run anyway
continue = Continue
report-bug = Report Bug
update-ruffle = Update Ruffle
ruffle-demo = Web Demo
ruffle-desktop = Desktop Application
ruffle-wiki = View Ruffle Wiki
enable-hardware-acceleration = It looks like hardware acceleration is disabled. While Ruffle may work, it could be very slow. You can find out how to enable hardware acceleration by following the link below:
enable-hardware-acceleration-link = FAQ - Chrome Hardware Acceleration
view-error-details = View Error Details
open-in-new-tab = Open in a new tab
click-to-unmute = Click to unmute
clipboard-message-title = Copying and pasting in Ruffle
clipboard-message-description =
    { $variant ->
        *[unsupported] Your browser does not support full clipboard access,
        [access-denied] Access to the clipboard has been denied,
    } but you can always use these shortcuts instead:
clipboard-message-copy = { " " } for copy
clipboard-message-cut = { " " } for cut
clipboard-message-paste = { " " } for paste
error-canvas-reload = Cannot reload with the canvas renderer when the canvas renderer is already in use.
error-file-protocol =
    It appears you are running Ruffle on the "file:" protocol.
    This doesn't work as browsers block many features from working for security reasons.
    Instead, we invite you to setup a local server or either use the web demo or the desktop application.
error-javascript-config =
    Ruffle has encountered a major issue due to an incorrect JavaScript configuration.
    If you are the server administrator, we invite you to check the error details to find out which parameter is at fault.
    You can also consult the Ruffle wiki for help.
error-wasm-not-found =
    Ruffle failed to load the required ".wasm" file component.
    If you are the server administrator, please ensure the file has correctly been uploaded.
    If the issue persists, you may need to use the "publicPath" setting: please consult the Ruffle wiki for help.
error-wasm-mime-type =
    Ruffle has encountered a major issue whilst trying to initialize.
    This web server is not serving ".wasm" files with the correct MIME type.
    If you are the server administrator, please consult the Ruffle wiki for help.
error-invalid-swf =
    Ruffle cannot parse the requested file.
    The most likely reason is that the requested file is not a valid SWF.
error-swf-fetch =
    Ruffle failed to load the Flash SWF file.
    The most likely reason is that the file no longer exists, so there is nothing for Ruffle to load.
    Try contacting the website administrator for help.
error-swf-cors =
    Ruffle failed to load the Flash SWF file.
    Access to fetch has likely been blocked by CORS policy.
    If you are the server administrator, please consult the Ruffle wiki for help.
error-wasm-cors =
    Ruffle failed to load the required ".wasm" file component.
    Access to fetch has likely been blocked by CORS policy.
    If you are the server administrator, please consult the Ruffle wiki for help.
error-wasm-invalid =
    Ruffle has encountered a major issue whilst trying to initialize.
    It seems like this page has missing or invalid files for running Ruffle.
    If you are the server administrator, please consult the Ruffle wiki for help.
error-wasm-download =
    Ruffle has encountered a major issue whilst trying to initialize.
    This can often resolve itself, so you can try reloading the page.
    Otherwise, please contact the website administrator.
error-wasm-disabled-on-edge =
    Ruffle failed to load the required ".wasm" file component.
    To fix this, try opening your browser's settings, clicking "Privacy, search, and services", scrolling down, and turning off "Enhance your security on the web".
    This will allow your browser to load the required ".wasm" files.
    If the issue persists, you might have to use a different browser.
error-wasm-unsupported-browser =
    The browser you are using does not support the WebAssembly extensions Ruffle requires to run.
    Please switch to a supported browser.
    You can find a list of supported browsers on the Wiki.
error-javascript-conflict =
    Ruffle has encountered a major issue whilst trying to initialize.
    It seems like this page uses JavaScript code that conflicts with Ruffle.
    If you are the server administrator, we invite you to try loading the file on a blank page.
error-javascript-conflict-outdated = You can also try to upload a more recent version of Ruffle that may circumvent the issue (current build is outdated: {$buildDate}).
error-csp-conflict =
    Ruffle has encountered a major issue whilst trying to initialize.
    This web server's Content Security Policy does not allow the required ".wasm" component to run.
    If you are the server administrator, please consult the Ruffle wiki for help.
error-unknown =
    Ruffle has encountered a major issue whilst trying to display this Flash content.
    {$outdated ->
        [true] If you are the server administrator, please try to upload a more recent version of Ruffle (current build is outdated: {$buildDate}).
        *[false] This isn't supposed to happen, so we'd really appreciate if you could file a bug!
    }
`,"save-manager.ftl":`save-delete-prompt = Are you sure you want to delete this save file?
save-reload-prompt =
    The only way to {$action ->
    [delete] delete
    *[replace] replace
    } this save file without potential conflict is to reload this content. Do you wish to continue anyway?
save-download = Download
save-replace = Replace
save-delete = Delete
save-backup-all = Download all save files`,"volume-controls.ftl":`volume-controls-mute = Mute
volume-controls-unmute = Unmute
`},"es-ES":{"context_menu.ftl":`context-menu-download-swf = Descargar .swf
context-menu-copy-debug-info = Copiar Información de depuración
context-menu-open-save-manager = Abrir gestor de guardado
context-menu-about-ruffle =
    { $flavor ->
        [extension] Sobre la extensión de Ruffle ({ $version })
       *[other] Sobre Ruffle ({ $version })
    }
context-menu-hide = Ocultar este menú
context-menu-exit-fullscreen = Salir de pantalla completa
context-menu-enter-fullscreen = Entrar a pantalla completa
context-menu-volume-controls = Controles de volumen
`,"messages.ftl":`message-cant-embed =
    Ruffle no pudo ejecutar el Flash incrustado en esta página.
    Puedes intentar abrir el archivo en una pestaña aparte, para evitar este problema.
panic-title = Algo salió mal :(
more-info = Más info
run-anyway = Ejecutar de todos modos
continue = Continuar
report-bug = Reportar un Error
update-ruffle = Actualizar Ruffle
ruffle-demo = Demostración de web
ruffle-desktop = Aplicación de Desktop
ruffle-wiki = Ver la página wiki
enable-hardware-acceleration = Al parecer, la aceleración de hardware está deshabilitada. Puede que Ruffle funcione, pero este podría funcionar muy lentamente. Puedes averiguar como habilitar aceleración de hardware presionando el enlace:
enable-hardware-acceleration-link = Preguntas frecuentes sobre la aceleración de hardware en Chrome
view-error-details = Ver los detalles del error
open-in-new-tab = Abrir en una pestaña nueva
click-to-unmute = Haz clic para dejar de silenciar
clipboard-message-title = Para copiar y pegar en Ruffle
clipboard-message-description =
    { $variant ->
       *[unsupported] Este navegador no apoya acceso completo al portapapeles,
        [access-denied] Se ha denegado el acceso al portapapeles,
    } pero siempre se puede utilizar estos atajos:
clipboard-message-copy = Para copiar
clipboard-message-cut = Para cortar
clipboard-message-paste = Para pegar
error-file-protocol =
    Parece que está ejecutando Ruffle en el protocolo "archivo:".
    Esto no funciona porque los navegadores bloquean que muchas características funcionen por razones de seguridad.
    En su lugar, le invitamos a configurar un servidor local o bien usar la demostración web o la aplicación de desktop.
error-javascript-config =
    Ruffle ha encontrado un problema crítico debido a una configuración JavaScript incorrecta.
    Si usted es el administrador del servidor, le invitamos a comprobar los detalles del error para averiguar qué parámetro está en falta.
    También puedes consultar la wiki de Ruffle para obtener ayuda.
error-wasm-not-found =
    Ruffle no pudo cargar el componente de archivo ".wasm" requerido.
    Si usted es el administrador del servidor, asegúrese de que el archivo ha sido subido correctamente.
    Si el problema persiste, puede que necesite usar la configuración "publicPath": por favor consulte la wiki de Ruffle para obtener ayuda.
error-wasm-mime-type =
    Ruffle ha encontrado un problema crítico al intentar inicializar.
    Este servidor web no está sirviendo archivos wasm" con el tipo MIME correcto.
    Si usted es el administrador del servidor, consulte la wiki de Ruffle para obtener ayuda.
error-invalid-swf = Ruffle no puede analizar el archivo solicitado. La razón más probable es que no es un archivo válido SWF.
error-swf-fetch =
    Ruffle no pudo cargar el archivo Flash SWF.
    La razón más probable es que el archivo ya no existe, así que no hay nada para cargar Ruffle.
    Intente ponerse en contacto con el administrador del sitio web para obtener ayuda.
error-swf-cors =
    Ruffle no pudo cargar el archivo Flash SWF.
    Es probable que el acceso a la búsqueda haya sido bloqueado por la política CORS.
    Si usted es el administrador del servidor, consulte la wiki de Ruffle para obtener ayuda.
error-wasm-cors =
    Ruffle no pudo cargar el archivo ".wasm."
    Es probable que el acceso a la búsqueda o la llamada a la función fetch haya sido bloqueado por la política CORS.
    Si usted es el administrador del servidor, consulte la wiki de Ruffle para obtener ayuda.
error-wasm-invalid =
    Ruffle ha encontrado un problema crítico al intentar inicializar.
    Este servidor web no está sirviendo archivos wasm" con el tipo Mime correcto.
    Si usted es el administrador del servidor, consulte la wiki de Ruffle para obtener ayuda.
error-wasm-download =
    Ruffle ha encontrado un problema crítico mientras intentaba inicializarse.
    Esto a menudo puede resolverse por sí mismo, así que puede intentar recargar la página.
    De lo contrario, póngase en contacto con el administrador del sitio web.
error-wasm-disabled-on-edge =
    Ruffle no pudo cargar el componente de archivo ".wasm" requerido.
    Para solucionar esto, intenta abrir la configuración de tu navegador, haciendo clic en "Privacidad, búsqueda y servicios", desplazándote y apagando "Mejore su seguridad en la web".
    Esto permitirá a su navegador cargar los archivos ".wasm" necesarios.
    Si el problema persiste, puede que tenga que utilizar un navegador diferente.
error-wasm-unsupported-browser =
    Este navegador no apoya las extensiones de WebAssembly que Ruffle requiere para ejecutar.
    Por favor, cambia a un navegador apoyado.
    Se puede ver una lista de navegadores apoyados en el Wiki.
error-javascript-conflict =
    Ruffle ha encontrado un problema crítico mientras intentaba inicializarse.
    Parece que esta página utiliza código JavaScript que entra en conflicto con Ruffle.
    Si usted es el administrador del servidor, le invitamos a intentar cargar el archivo en una página en blanco.
error-javascript-conflict-outdated = También puedes intentar subir una versión más reciente de Ruffle que puede eludir el problema (la versión actual está desactualizada: { $buildDate }).
error-csp-conflict =
    Ruffle encontró un problema al intentar inicializarse.
    La Política de Seguridad de Contenido de este servidor web no permite el componente requerido ".wasm". 
    Si usted es el administrador del servidor, por favor consulta la wiki de Ruffle para obtener ayuda.
error-unknown =
    Ruffle ha encontrado un problema al tratar de mostrar el contenido Flash.
    { $outdated ->
        [true] Si usted es el administrador del servidor, intenta cargar una version más reciente de Ruffle (la version actual esta desactualizada: { $buildDate }).
       *[false] Esto no deberia suceder! apreciariamos que reportes el error!
    }
`,"save-manager.ftl":`save-delete-prompt = ¿Está seguro de querer eliminar este archivo de guardado?
save-reload-prompt =
    La única forma de { $action ->
        [delete] eliminar
       *[replace] sobreescribir
    } este archivo de guardado sin conflictos potenciales es reiniciando el contenido. ¿Desea continuar de todos modos?
save-download = Descargar
save-replace = Sobreescribir
save-delete = Borrar
save-backup-all = Borrar todos los archivos de guardado
`,"volume-controls.ftl":`volume-controls-mute = Silenciar
volume-controls-unmute = Desmutear
`},"fr-FR":{"context_menu.ftl":`context-menu-download-swf = Télécharger en tant que .swf
context-menu-copy-debug-info = Copier les infos de débogage
context-menu-open-save-manager = Ouvrir le gestionnaire de stockage
context-menu-about-ruffle =
    { $flavor ->
        [extension] À propos de l'Extension Ruffle ({ $version })
       *[other] À propos de Ruffle ({ $version })
    }
context-menu-hide = Masquer ce menu
context-menu-exit-fullscreen = Sortir du mode plein écran
context-menu-enter-fullscreen = Afficher en plein écran
context-menu-volume-controls = Contrôles du volume
`,"messages.ftl":`message-cant-embed =
    Ruffle n'a pas été en mesure de lire le fichier Flash intégré dans cette page.
    Vous pouvez essayer d'ouvrir le fichier dans un onglet isolé, pour contourner le problème.
panic-title = Une erreur est survenue :(
more-info = Plus d'infos
run-anyway = Exécuter quand même
continue = Continuer
report-bug = Signaler le bug
update-ruffle = Mettre à jour Ruffle
ruffle-demo = Démo en ligne
ruffle-desktop = Application de bureau
ruffle-wiki = Wiki de Ruffle
enable-hardware-acceleration = Il semblerait que l'accélération matérielle soit désactivée. Cela n'empêche généralement pas Ruffle de fonctionner, mais il peut être beaucoup plus lent. Vous pouvez trouver comment activer l'accélération matérielle en suivant le lien ci-dessous :
enable-hardware-acceleration-link = FAQ - Accélération matérielle dans Chrome
view-error-details = Détails de l'erreur
open-in-new-tab = Ouvrir dans un nouvel onglet
click-to-unmute = Cliquez pour activer le son
clipboard-message-title = Copier et coller dans Ruffle
clipboard-message-description =
    { $variant ->
       *[unsupported] Votre navigateur ne prend pas en charge l'accès au presse-papiers,
        [access-denied] L'accès au presse-papiers a été refusé,
    } mais vous pouvez toujours utiliser ces raccourcis clavier à la place :
clipboard-message-copy = { " " } pour copier
clipboard-message-cut = { " " } pour couper
clipboard-message-paste = { " " } pour coller
error-file-protocol =
    Il semblerait que vous exécutiez Ruffle sur le protocole "file:".
    Cela ne fonctionne pas car les navigateurs bloquent de nombreuses fonctionnalités pour des raisons de sécurité.
    Nous vous invitons soit à configurer un serveur local, soit à utiliser la démo en ligne ou l'application de bureau.
error-javascript-config =
    Ruffle a rencontré un problème majeur en raison d'une configuration JavaScript incorrecte.
    Si vous êtes l'administrateur du serveur, nous vous invitons à vérifier les détails de l'erreur pour savoir quel est le paramètre en cause.
    Vous pouvez également consulter le wiki de Ruffle pour obtenir de l'aide.
error-wasm-not-found =
    Ruffle n'a pas réussi à charger son fichier ".wasm".
    Si vous êtes l'administrateur du serveur, veuillez vous assurer que ce fichier a bien été mis en ligne.
    Si le problème persiste, il vous faudra peut-être utiliser le paramètre "publicPath" : veuillez consulter le wiki de Ruffle pour obtenir de l'aide.
error-wasm-mime-type =
    Ruffle a rencontré un problème majeur durant sa phase d'initialisation.
    Ce serveur web ne renvoie pas le bon type MIME pour les fichiers ".wasm".
    Si vous êtes l'administrateur du serveur, veuillez consulter le wiki de Ruffle pour obtenir de l'aide.
error-invalid-swf =
    Ruffle n'a pas été en mesure de lire le fichier demandé.
    La raison la plus probable est que ce fichier n'est pas un SWF valide.
error-swf-fetch =
    Ruffle n'a pas réussi à charger le fichier Flash.
    La raison la plus probable est que le fichier n'existe pas ou plus.
    Vous pouvez essayer de prendre contact avec l'administrateur du site pour obtenir plus d'informations.
error-swf-cors =
    Ruffle n'a pas réussi à charger le fichier Flash.
    La requête a probablement été rejetée en raison de la configuration du CORS.
    Si vous êtes l'administrateur du serveur, veuillez consulter le wiki de Ruffle pour obtenir de l'aide.
error-wasm-cors =
    Ruffle n'a pas réussi à charger son fichier ".wasm".
    La requête a probablement été rejetée en raison de la configuration du CORS.
    Si vous êtes l'administrateur du serveur, veuillez consulter le wiki de Ruffle pour obtenir de l'aide.
error-wasm-invalid =
    Ruffle a rencontré un problème majeur durant sa phase d'initialisation.
    Il semblerait que cette page comporte des fichiers manquants ou invalides pour exécuter Ruffle.
    Si vous êtes l'administrateur du serveur, veuillez consulter le wiki de Ruffle pour obtenir de l'aide.
error-wasm-download =
    Ruffle a rencontré un problème majeur durant sa phase d'initialisation.
    Le problème détecté peut souvent se résoudre de lui-même, donc vous pouvez essayer de recharger la page.
    Si le problème persiste, veuillez prendre contact avec l'administrateur du site.
error-wasm-disabled-on-edge =
    Ruffle n'a pas réussi à charger son fichier ".wasm".
    Pour résoudre ce problème, essayez d'ouvrir les paramètres de votre navigateur et de cliquer sur "Confidentialité, recherche et services". Puis, vers le bas de la page, désactivez l'option "Améliorez votre sécurité sur le web".
    Cela permettra à votre navigateur de charger les fichiers ".wasm".
    Si le problème persiste, vous devrez peut-être utiliser un autre navigateur.
error-wasm-unsupported-browser =
    Votre navigateur ne prend pas en charge les extensions WebAssembly nécessaires au fonctionnement de Ruffle.
    Veuillez utiliser un navigateur les prenant en charge.
    Vous pouvez trouver une liste de navigateurs fonctionnant avec Ruffle sur le wiki.
error-javascript-conflict =
    Ruffle a rencontré un problème majeur durant sa phase d'initialisation.
    Il semblerait que cette page contienne du code JavaScript qui entre en conflit avec Ruffle.
    Si vous êtes l'administrateur du serveur, nous vous invitons à essayer de charger le fichier dans une page vide.
error-javascript-conflict-outdated = Vous pouvez également essayer de mettre en ligne une version plus récente de Ruffle qui pourrait avoir corrigé le problème (la version que vous utilisez est obsolète : { $buildDate }).
error-csp-conflict =
    Ruffle a rencontré un problème majeur durant sa phase d'initialisation.
    La stratégie de sécurité du contenu (CSP) de ce serveur web n'autorise pas l'exécution de fichiers ".wasm".
    Si vous êtes l'administrateur du serveur, veuillez consulter le wiki de Ruffle pour obtenir de l'aide.
error-unknown =
    Ruffle a rencontré un problème majeur durant l'exécution de ce contenu Flash.
    { $outdated ->
        [true] Si vous êtes l'administrateur du serveur, veuillez essayer de mettre en ligne une version plus récente de Ruffle (la version que vous utilisez est obsolète : { $buildDate }).
       *[false] Cela n'est pas censé se produire, donc nous vous serions reconnaissants si vous pouviez nous signaler ce bug !
    }
`,"save-manager.ftl":`save-delete-prompt = Voulez-vous vraiment supprimer ce fichier de sauvegarde ?
save-reload-prompt =
    La seule façon de { $action ->
        [delete] supprimer
       *[replace] remplacer
    } ce fichier de sauvegarde sans conflit potentiel est de recharger ce contenu. Souhaitez-vous quand même continuer ?
save-download = Télécharger
save-replace = Remplacer
save-delete = Supprimer
save-backup-all = Télécharger tous les fichiers de sauvegarde
`,"volume-controls.ftl":`volume-controls-mute = Rendre muet
volume-controls-unmute = Rendre audible
`},"he-IL":{"context_menu.ftl":`context-menu-download-swf = הורדת קובץ הswf.
context-menu-copy-debug-info = העתקת נתוני ניפוי שגיאות
context-menu-open-save-manager = פתח את מנהל השמירות
context-menu-about-ruffle =
    { $flavor ->
        [extension] אודות התוסף Ruffle ({ $version })
       *[other] אודות Ruffle ({ $version })
    }
context-menu-hide = הסתר תפריט זה
context-menu-exit-fullscreen = יציאה ממסך מלא
context-menu-enter-fullscreen = מסך מלא
context-menu-volume-controls = בקרת עוצמת קול
`,"messages.ftl":`message-cant-embed =
    Ruffle לא הצליח להריץ את תוכן הפלאש המוטמע בדף זה.
    אתה יכול לפתוח את הקובץ בלשונית נפרדת, על מנת לעקוף בעיה זו.
panic-title = משהו השתבש :(
more-info = מידע נוסף
run-anyway = הפעל בכל זאת
continue = המשך
report-bug = דווח על תקלה
update-ruffle = עדכן את Ruffle
ruffle-demo = הדגמה
ruffle-desktop = אפליקציית שולחן עבודה
ruffle-wiki = ראה את Ruffle wiki
enable-hardware-acceleration = נראה שהאצת החומרה שלך לא מופעלת. בעוד שRuffle עשוי לעבוד, הוא יכול להיות איטי. תוכל לראות כיצד להפעיל תכונה זו בלחיצה על הלינק הזה:
enable-hardware-acceleration-link = שאלות נפוצות - האצת החומרה של Chrome
view-error-details = ראה פרטי שגיאה
open-in-new-tab = פתח בכרטיסייה חדשה
click-to-unmute = לחץ על מנת לבטל השתקה
clipboard-message-title = העתקה והדבקה בRuffle
clipboard-message-copy = { " " } עבור העתקה
clipboard-message-cut = { " " } עבור גזירה
clipboard-message-paste = { " " } עבור הדבקה
error-file-protocol =
    נדמה שאתה מריץ את Ruffle תחת פרוטוקול "file:".
    זה לא יעבוד מכיוון שדפדפנים חוסמים אפשרויות רבות מלעבוד עקב סיבות אבטחה.
    במקום זה, אנו מזמינים אותך לאחסן אתר זה תחת שרת מקומי או הדגמה ברשת או דרך אפליקציית שולחן העבודה.
error-javascript-config =
    Ruffle נתקל בתקלה חמורה עקב הגדרת JavaScript שגויה.
    אם אתה מנהל האתר, אנו מזמינים אותך לבדוק את פרטי השגיאה על מנת למצוא איזה פרמטר הוא שגוי.
    אתה יכול לעיין ולהועץ בwiki של Ruffle על מנת לקבל עזרה.
error-wasm-not-found =
    Ruffle נכשל לטעון את קובץ ה"wasm." הדרוש.
    אם אתה מנהל האתר, אנא וודא כי הקובץ הועלה כשורה.
    אם הבעיה ממשיכה, ייתכן ותצטרך להשתמש בהגדרת "publicPath": אנא עיין והועץ בwiki של Ruffle על מנת לקבל עזרה.
error-wasm-mime-type =
    Ruffle נתקל בבעיה חמורה תוך כדי ניסיון לאתחל.
    שרתו של אתר זה לא משייך קבצי ".wasm" עם סוג הMIME הנכון.
    אם אתה מנהל האתר, אנא עיין והועץ בwiki של Ruffle על מנת לקבל עזרה.
error-invalid-swf =
    Ruffle לא יכול לנתח את הקובץ המבוקש.
    הסיבה הסבירה ביותר לבעיה זו היא בגלל שהקובץ המבוקש אינו SWF חוקי.
error-swf-fetch =
    Ruffle נכשל לטעון את קובץ הפלאש/swf. .
    זה נובע ככל הנראה מכיוון והקובץ לא קיים יותר, אז אין לRuffle מה לטעון.
    נסה ליצור קשר עם מנהל האתר על מנת לקבל עזרה.
error-swf-cors =
    Ruffle נכשל לטעון את קובץ הפלאש/swf. .
    גישה לfetch ככל הנראה נחסמה על ידי מדיניות CORS.
    אם אתה מנהל האתר, אנא עיין והועץ בwiki של Ruffle על מנת לקבל עזרה.
error-wasm-cors =
    Ruffle נכשל לטעון את קובץ ה".wasm" הדרוש.
    גישה לfetch ככל הנראה נחסמה על ידי מדיניות CORS.
    אם אתה מנהל האתר, אנא עיין והועץ בwiki של Ruffle על מנת לקבל עזרה.
error-wasm-invalid =
    Ruffle נתקל בבעיה חמורה תוך כדי ניסיון לאתחל.
    נדמה כי בדף זה חסרים או לא עובדים כראוי קבצים אשר משמשים את Ruffle כדי לפעול
    אם אתה מנהל האתר, אנא עיין והועץ בwiki של Ruffle על מנת לקבל עזרה.
error-wasm-download =
    Ruffle נתקל בבעיה חמורה תוך כדי ניסיון לאתחל.
    לעיתים בעיה זו יכולה לפתור את עצמה, אז אתה יכול לנסות לטעון מחדש את הדף זה.
    אם לא, אנא פנה למנהל האתר.
error-wasm-disabled-on-edge =
    Ruffle נכשל לטעון את קובץ ה".wasm" הדרוש.
    על מנת לתקן בעיה זו, נסה לפתוח את הגדרות הדפדפן שלך, לחץ על "אבטחה, חיפוש ושירות",
    גלול מטה, וכבה את "הגבר את האבטחה שלך ברשת".
    זה יאפשר לדפדפן שלך לטעון את קובץ ה".wasm" הדרוש.
    אם הבעיה ממשיכה, ייתכן ועליך להשתמש בדפדפן אחר.
error-wasm-unsupported-browser =
    הדפדפן שבו אתה משתמש אינו תומך בתוספי WebAssembly ש-Ruffle דורש כדי לפעול.
    אנא עבור לדפדפן נתמך.
    אתה יכול למצוא רשימה של דפדפנים נתמכים ב-Wiki שלנו.
error-javascript-conflict =
    Ruffle נתקל בבעיה חמורה תוך כדי ניסיון לאתחל.
    נדמה כי דף זה משתמש בקוד JavaScript אשר מתנגש עם Ruffle.
    אם אתה מנהל האתר, אנו מזמינים אותך לנסות לטעון את הדף תחת עמוד ריק.
error-javascript-conflict-outdated = בנוסף, אתה יכול לנסות ולהעלות גרסאות עדכניות של Ruffle אשר עלולים לעקוף בעיה זו (גרסה זו הינה מיושנת : { $buildDate }).
error-csp-conflict =
    Ruffle נתקל בבעיה חמורה תוך כדי ניסיון לאתחל.
    מדיניות אבטחת התוכן של שרתו של אתר זה אינה מאפשרת לקובץ ה"wasm." הדרוש לפעול.
    אם אתה מנהל האתר, אנא עיין והועץ בwiki של Ruffle על מנת לקבל עזרה.
error-unknown =
    Ruffle נתקל בבעיה חמורה בניסיון להציג את תוכן פלאש זה.
    { $outdated ->
        [true] אם אתה מנהל האתר, אנא נסה להעלות גרסה עדכנית יותר של Ruffle (גרסה זו הינה מיושנת:  { $buildDate }).
       *[false] זה לא אמור לקרות, נשמח אם תוכל לשתף תקלה זו!
    }
`,"save-manager.ftl":`save-delete-prompt = האם אתה בטוח שברצונך למחוק את קובץ שמירה זה?
save-reload-prompt =
    הדרך היחידה { $action ->
        [delete] למחוק
       *[replace] להחליף
    } את קובץ השמירה הזה מבלי לגרום לו להתנגש היא לטעון מחדש את תוכן זה. האם אתה רוצה להמשיך בכל זאת?
save-download = הורדה
save-replace = החלפה
save-delete = מחיקה
save-backup-all = הורדת כל קבצי השמירה
`,"volume-controls.ftl":`volume-controls-mute = השתק
volume-controls-unmute = ביטול השתקה
`},"hu-HU":{"context_menu.ftl":`context-menu-download-swf = .swf fájl letöltése
context-menu-copy-debug-info = Hibakeresési információk másolása
context-menu-open-save-manager = Mentéskezelő megnyitása
context-menu-about-ruffle =
    { $flavor ->
        [extension] A Ruffle kiegészítő ({ $version }) névjegye
       *[other] A Ruffle ({ $version }) névjegye
    }
context-menu-hide = Ezen menü elrejtése
context-menu-exit-fullscreen = Kilépés a teljes képernyőből
context-menu-enter-fullscreen = Váltás teljes képernyőre
context-menu-volume-controls = Hangerőszabályzó
`,"messages.ftl":`message-cant-embed =
    A Ruffle nem tudta futtatni az oldalba ágyazott Flash tartalmat.
    A probléma kikerüléséhez megpróbálhatod megnyitni a fájlt egy külön lapon.
panic-title = Valami baj történt :(
more-info = További információ
run-anyway = Futtatás mégis
continue = Folytatás
report-bug = Hiba jelentése
update-ruffle = Ruffle frissítése
ruffle-demo = Webes demó
ruffle-desktop = Asztali alkalmazás
ruffle-wiki = Ruffle Wiki megnyitása
enable-hardware-acceleration = Úgy tűnik, a hardveres gyorsítás ki van kapcsolva. Bár a Ruffle működhet, nagyon lassú lehet. Az alábbi hivatkozást követve megtudhatod, hogyan engedélyezd a hardveres gyorsítást:
enable-hardware-acceleration-link = GYIK - Chrome hardveres gyorsítás
view-error-details = Hiba részletei
open-in-new-tab = Megnyitás új lapon
click-to-unmute = Kattints a némítás feloldásához
clipboard-message-title = Másolás és beíllesztés a Ruffle-ben
clipboard-message-description =
    { $variant ->
       *[unsupported] A böngésződ nem támogatja a vágólaphoz való teljes hozzáférést,
        [access-denied] A vágólaphoz való hozzáférés el lett utasítva,
    } de mindig használhatod ezeket a gyorsbillentyűket helyette:
clipboard-message-copy = { " " } másoláshoz
clipboard-message-cut = { " " } kivágáshoz
clipboard-message-paste = { " " } beillesztéshez
error-file-protocol =
    Úgy tűnik, a Ruffle-t a "file:" protokollon futtatod.
    Ez nem működik, mivel így a böngészők biztonsági okokból számos funkció működését letiltják.
    Ehelyett azt ajánljuk hogy indíts egy helyi kiszolgálót, vagy használd a webes demót vagy az asztali alkalmazást.
error-javascript-config =
    A Ruffle komoly problémába ütközött egy helytelen JavaScript-konfiguráció miatt.
    Ha a szerver rendszergazdája vagy, kérjük, ellenőrizd a hiba részleteit, hogy megtudd, melyik paraméter a hibás.
    A Ruffle wikiben is találhatsz ehhez segítséget.
error-wasm-not-found =
    A Ruffle nem tudta betölteni a szükséges ".wasm" összetevőt.
    Ha a szerver rendszergazdája vagy, kérjük ellenőrizd, hogy a fájl megfelelően lett-e feltöltve.
    Ha a probléma továbbra is fennáll, előfordulhat, hogy a "publicPath" beállítást kell használnod: segítségért keresd fel a Ruffle wikit.
error-wasm-mime-type =
    A Ruffle komoly problémába ütközött az inicializálás során.
    Ez a webszerver a ".wasm" fájlokat nem a megfelelő MIME-típussal szolgálja ki.
    Ha a szerver rendszergazdája vagy, kérjük, keresd fel a Ruffle wikit segítségért.
error-invalid-swf =
    A Ruffle nem tudta értelmezni a kért fájlt.
    Ennek a legvalószínűbb oka az, hogy a kért fájl nem érvényes SWF.
error-swf-fetch =
    A Ruffle nem tudta betölteni a Flash SWF fájlt.
    A legvalószínűbb ok az, hogy a fájl már nem létezik, így a Ruffle számára nincs mit betölteni.
    Próbáld meg felvenni a kapcsolatot a webhely rendszergazdájával segítségért.
error-swf-cors =
    A Ruffle nem tudta betölteni a Flash SWF fájlt.
    A lekéréshez való hozzáférést valószínűleg letiltotta a CORS-házirend.
    Ha a szerver rendszergazdája vagy, kérjük, keresd fel a Ruffle wikit segítségért.
error-wasm-cors =
    A Ruffle nem tudta betölteni a szükséges ".wasm" összetevőt.
    A lekéréshez való hozzáférést valószínűleg letiltotta a CORS-házirend.
    Ha a szerver rendszergazdája vagy, kérjük keresd fel a Ruffle wikit segítségért.
error-wasm-invalid =
    A Ruffle komoly problémába ütközött az inicializálás során.
    Úgy tűnik, hogy ezen az oldalon hiányoznak vagy hibásak a Ruffle futtatásához szükséges fájlok.
    Ha a szerver rendszergazdája vagy, kérjük keresd fel a Ruffle wikit segítségért.
error-wasm-download =
    A Ruffle komoly problémába ütközött az inicializálás során.
    Ez gyakran magától megoldódik, ezért megpróbálhatod újratölteni az oldalt.
    Ellenkező esetben fordulj a webhely rendszergazdájához.
error-wasm-disabled-on-edge =
    A Ruffle nem tudta betölteni a szükséges ".wasm" összetevőt.
    A probléma megoldásához nyisd meg a böngésző beállításait, kattints az „Adatvédelem, keresés és szolgáltatások” elemre, görgess le, és kapcsold ki a „Fokozott biztonság a weben” opciót.
    Ez lehetővé teszi a böngésző számára, hogy betöltse a szükséges ".wasm" fájlokat.
    Ha a probléma továbbra is fennáll, lehet, hogy másik böngészőt kell használnod.
error-wasm-unsupported-browser =
    Az általad használt böngésző nem támogatja a Ruffle futtatásához szükséges WebAssembly kiegészítéseket.
    Kérlek, válts egy támogatott böngészőre.
    A támogatott böngészők listáját a Wikin találod.
error-javascript-conflict =
    A Ruffle komoly problémába ütközött az inicializálás során.
    Úgy tűnik, ez az oldal olyan JavaScript-kódot használ, amely ütközik a Ruffle-lel.
    Ha a kiszolgáló rendszergazdája vagy, kérjük, próbáld meg a fájlt egy üres oldalon betölteni.
error-javascript-conflict-outdated = Megpróbálhatod továbbá feltölteni a Ruffle egy újabb verzióját is, amely megkerülheti a problémát (a jelenlegi elavult: { $buildDate }).
error-csp-conflict =
    A Ruffle komoly problémába ütközött az inicializálás során.
    A kiszolgáló tartalombiztonsági házirendje nem teszi lehetővé a szükséges „.wasm” összetevők futtatását.
    Ha a szerver rendszergazdája vagy, kérjük, keresd fel a Ruffle wikit segítségért.
error-unknown =
    A Ruffle komoly problémába ütközött, miközben megpróbálta megjeleníteni ezt a Flash-tartalmat.
    { $outdated ->
        [true] Ha a szerver rendszergazdája vagy, kérjük, próbáld meg feltölteni a Ruffle egy újabb verzióját (a jelenlegi elavult: { $buildDate }).
       *[false] Ennek nem lett volna szabad megtörténnie, ezért nagyon hálásak lennénk, ha jeleznéd a hibát!
    }
`,"save-manager.ftl":`save-delete-prompt = Biztosan törölni akarod ezt a mentést?
save-reload-prompt =
    Ennek a mentésnek az esetleges konfliktus nélküli { $action ->
        [delete] törléséhez
       *[replace] cseréjéhez
    } újra kell tölteni a tartalmat. Mégis szeretnéd folytatni?
save-download = Letöltés
save-replace = Csere
save-delete = Törlés
save-backup-all = Az összes fájl letöltése
`,"volume-controls.ftl":`volume-controls-mute = Némítás
volume-controls-unmute = Némítás feloldása
`},"id-ID":{"context_menu.ftl":`context-menu-download-swf = Unduh .swf
context-menu-copy-debug-info = Salin info debug
context-menu-open-save-manager = Buka Manager Save
context-menu-about-ruffle =
    { $flavor ->
        [extension] Tentang Ekstensi Ruffle ({ $version })
       *[other] Tentang Ruffle ({ $version })
    }
context-menu-hide = Sembunyikan Menu ini
context-menu-exit-fullscreen = Keluar dari layar penuh
context-menu-enter-fullscreen = Masuk mode layar penuh
context-menu-volume-controls = Pengaturan Volume
`,"messages.ftl":`message-cant-embed =
    Ruffle tidak dapat menjalankan Flash yang disematkan di halaman ini.
    Anda dapat mencoba membuka file di tab terpisah, untuk menghindari masalah ini.
panic-title = Terjadi kesalahan :(
more-info = Info lebih lanjut
run-anyway = Jalankan
continue = Lanjutkan
report-bug = Laporkan Bug
update-ruffle = Perbarui Ruffle
ruffle-demo = Demo Web
ruffle-desktop = Aplikasi Desktop
ruffle-wiki = Kunjungi Wiki Ruffle
view-error-details = Tunjukan Detail Error
open-in-new-tab = Buka di Tab Baru
click-to-unmute = Tekan untuk menyalakan suara
error-file-protocol =
    Sepertinya anda menjalankan Ruffle di protokol "file:". 
    Ini tidak berfungsi karena browser memblokir fitur ini dengan alasan keamanan.
    Sebagai gantinya, kami mengajak anda untuk membuat server lokal, menggunakan demo web atau aplikasi desktop.
error-javascript-config =
    Ruffle mengalami masalah besar karena konfigurasi JavaScript yang salah.
    Jika Anda adalah administrator server ini, kami mengajak Anda untuk memeriksa detail kesalahan untuk mengetahui parameter mana yang salah.
    Anda juga dapat membaca wiki Ruffle untuk mendapatkan bantuan.
error-wasm-not-found =
    Ruffle gagal memuat komponen file ".wasm" yang diperlukan.
    Jika Anda adalah administrator server ini, pastikan file telah diunggah dengan benar.
    Jika masalah terus berlanjut, Anda mungkin perlu menggunakan pengaturan "publicPath": silakan baca wiki Ruffle untuk mendapatkan bantuan.
error-wasm-mime-type =
    Ruffle mengalami masalah ketika mencoba melakukan inisialisasi.
    Server web ini tidak melayani file ".wasm" dengan tipe MIME yang benar.
    Jika Anda adalah administrator server ini, silakan baca wiki Ruffle untuk mendapatkan bantuan.
error-swf-fetch =
    Ruffle gagal memuat file SWF Flash.
    Kemungkinan file tersebut sudah tidak ada, sehingga tidak dapat dimuat oleh Ruffle.
    Coba hubungi administrator situs web ini untuk mendapatkan bantuan.
error-swf-cors =
    Ruffle gagal memuat file SWF Flash.
    Akses untuk memuat kemungkinan telah diblokir oleh kebijakan CORS.
    Jika Anda adalah administrator server ini, silakan baca wiki Ruffle untuk mendapatkan bantuan.
error-wasm-cors =
    Ruffle gagal memuat komponen file ".wasm" yang diperlukan.
    Akses untuk mengambil kemungkinan telah diblokir oleh kebijakan CORS.
    Jika Anda adalah administrator server ini, silakan baca wiki Ruffle untuk mendapatkan bantuan.
error-wasm-invalid =
    Ruffle mengalami masalah besar ketika mencoba melakukan inisialisasi.
    Sepertinya halaman ini memiliki file yang hilang atau tidak valid untuk menjalankan Ruffle.
    Jika Anda adalah administrator server ini, silakan baca wiki Ruffle untuk mendapatkan bantuan.
error-wasm-download =
    Ruffle mengalami masalah besar ketika mencoba melakukan inisialisasi.
    Hal ini sering kali dapat teratasi dengan sendirinya, sehingga Anda dapat mencoba memuat ulang halaman.
    Jika tidak, silakan hubungi administrator situs web ini.
error-wasm-disabled-on-edge =
    Ruffle gagal memuat komponen file ".wasm" yang diperlukan.
    Untuk mengatasinya, coba buka pengaturan peramban Anda, klik "Privasi, pencarian, dan layanan", turun ke bawah, dan matikan "Tingkatkan keamanan Anda di web".
    Ini akan memungkinkan browser Anda memuat file ".wasm" yang diperlukan.
    Jika masalah berlanjut, Anda mungkin harus menggunakan browser yang berbeda.
error-javascript-conflict =
    Ruffle mengalami masalah besar ketika mencoba melakukan inisialisasi.
    Sepertinya situs web ini menggunakan kode JavaScript yang bertentangan dengan Ruffle.
    Jika Anda adalah administrator server ini, kami mengajak Anda untuk mencoba memuat file pada halaman kosong.
error-javascript-conflict-outdated = Anda juga dapat mencoba mengunggah versi Ruffle yang lebih baru yang mungkin dapat mengatasi masalah ini (versi saat ini sudah kedaluwarsa: { $buildDate }).
error-csp-conflict =
    Ruffle mengalami masalah besar ketika mencoba melakukan inisialisasi.
    Kebijakan Keamanan Konten server web ini tidak mengizinkan komponen ".wasm" yang diperlukan untuk dijalankan.
    Jika Anda adalah administrator server ini, silakan baca wiki Ruffle untuk mendapatkan bantuan.
error-unknown =
    Ruffle telah mengalami masalah besar saat menampilkan konten Flash ini.
    { $outdated ->
        [true] Jika Anda administrator server ini, cobalah untuk mengganti versi Ruffle yang lebih baru (versi saat ini sudah kedaluwarsa: { $buildDate }).
       *[false] Hal ini seharusnya tidak terjadi, jadi kami sangat menghargai jika Anda dapat melaporkan bug ini!
    }
`,"save-manager.ftl":`save-delete-prompt = Anda yakin ingin menghapus berkas ini?
save-reload-prompt =
    Satu-satunya cara untuk { $action ->
        [delete] menghapus
       *[replace] mengganti
    } berkas penyimpanan ini tanpa potensi konflik adalah dengan memuat ulang konten ini. Apakah Anda ingin melanjutkannya?
save-download = Unduh
save-replace = Ganti
save-delete = Hapus
save-backup-all = Unduh semua berkas penyimpanan
`,"volume-controls.ftl":`volume-controls-mute = Bisukan
`},"it-IT":{"context_menu.ftl":`context-menu-download-swf = Scarica .swf
context-menu-copy-debug-info = Copia informazioni di debug
context-menu-open-save-manager = Apri Gestione salvataggi
context-menu-about-ruffle =
    { $flavor ->
        [extension] Informazioni su Ruffle Extension ({ $version })
       *[other] Informazioni su Ruffle ({ $version })
    }
context-menu-hide = Nascondi questo menu
context-menu-exit-fullscreen = Esci dallo schermo intero
context-menu-enter-fullscreen = Entra a schermo intero
context-menu-volume-controls = Controlli volume
`,"messages.ftl":`message-cant-embed =
    Ruffle non è stato in grado di eseguire il Flash incorporato in questa pagina.
    Puoi provare ad aprire il file in una scheda separata, per evitare questo problema.
panic-title = Qualcosa è andato storto :(
more-info = Maggiori informazioni
run-anyway = Esegui comunque
continue = Continua
report-bug = Segnala Un Bug
update-ruffle = Aggiorna Ruffle
ruffle-demo = Demo Web
ruffle-desktop = Applicazione Desktop
ruffle-wiki = Visualizza Ruffle Wiki
enable-hardware-acceleration = Sembra che l'accelerazione hardware sia disabilitata. Sebbene Ruffle possa funzionare, potrebbe essere molto lento. Puoi scoprire come abilitare l'accelerazione hardware seguendo il link seguente:
view-error-details = Visualizza Dettagli Errore
open-in-new-tab = Apri in una nuova scheda
click-to-unmute = Clicca per riattivare l'audio
error-file-protocol =
    Sembra che tu stia eseguendo Ruffle sul protocollo "file:".
    Questo non funziona come browser blocca molte funzionalità di lavoro per motivi di sicurezza.
    Invece, ti invitiamo a configurare un server locale o a utilizzare la demo web o l'applicazione desktop.
error-javascript-config =
    Ruffle ha incontrato un problema importante a causa di una configurazione JavaScript non corretta.
    Se sei l'amministratore del server, ti invitiamo a controllare i dettagli dell'errore per scoprire quale parametro è in errore.
    Puoi anche consultare il wiki Ruffle per aiuto.
error-wasm-not-found =
    Ruffle non è riuscito a caricare il componente di file ".wasm".
    Se sei l'amministratore del server, assicurati che il file sia stato caricato correttamente.
    Se il problema persiste, potrebbe essere necessario utilizzare l'impostazione "publicPath": si prega di consultare il wiki Ruffle per aiuto.
error-wasm-mime-type =
    Ruffle ha incontrato un problema importante durante il tentativo di inizializzazione.
    Questo server web non serve ". asm" file con il tipo MIME corretto.
    Se sei l'amministratore del server, consulta la wiki Ruffle per aiuto.
error-swf-fetch =
    Ruffle non è riuscito a caricare il file Flash SWF.
    La ragione più probabile è che il file non esiste più, quindi non c'è nulla che Ruffle possa caricare.
    Prova a contattare l'amministratore del sito web per aiuto.
error-swf-cors =
    Ruffle non è riuscito a caricare il file SWF Flash.
    L'accesso al recupero probabilmente è stato bloccato dalla politica CORS.
    Se sei l'amministratore del server, consulta la wiki Ruffle per ricevere aiuto.
error-wasm-cors =
    Ruffle non è riuscito a caricare il componente di file ".wasm".
    L'accesso al recupero probabilmente è stato bloccato dalla politica CORS.
    Se sei l'amministratore del server, consulta la wiki Ruffle per ricevere aiuto.
error-wasm-invalid =
    Ruffle ha incontrato un problema importante durante il tentativo di inizializzazione.
    Sembra che questa pagina abbia file mancanti o non validi per l'esecuzione di Ruffle.
    Se sei l'amministratore del server, consulta la wiki Ruffle per ricevere aiuto.
error-wasm-download =
    Ruffle ha incontrato un problema importante durante il tentativo di inizializzazione.
    Questo può spesso risolversi da solo, quindi puoi provare a ricaricare la pagina.
    Altrimenti, contatta l'amministratore del sito.
error-wasm-disabled-on-edge =
    Ruffle non ha caricato il componente di file ".wasm" richiesto.
    Per risolvere il problema, prova ad aprire le impostazioni del tuo browser, facendo clic su "Privacy, search, and services", scorrendo verso il basso e disattivando "Migliora la tua sicurezza sul web".
    Questo permetterà al tuo browser di caricare i file ".wasm" richiesti.
    Se il problema persiste, potresti dover usare un browser diverso.
error-javascript-conflict =
    Ruffle ha riscontrato un problema importante durante il tentativo di inizializzazione.
    Sembra che questa pagina utilizzi il codice JavaScript che è in conflitto con Ruffle.
    Se sei l'amministratore del server, ti invitiamo a provare a caricare il file su una pagina vuota.
error-javascript-conflict-outdated = Puoi anche provare a caricare una versione più recente di Ruffle che potrebbe aggirare il problema (l'attuale build è obsoleta: { $buildDate }).
error-csp-conflict =
    Ruffle ha incontrato un problema importante durante il tentativo di inizializzare.
    La Politica di Sicurezza dei Contenuti di questo server web non consente l'impostazione richiesta". asm" componente da eseguire.
    Se sei l'amministratore del server, consulta la Ruffle wiki per aiuto.
error-unknown =
    Ruffle ha incontrato un problema importante durante il tentativo di visualizzare questo contenuto Flash.
    { $outdated ->
        [true] Se sei l'amministratore del server, prova a caricare una versione più recente di Ruffle (la versione attuale è obsoleta: { $buildDate }).
       *[false] Questo non dovrebbe accadere, quindi ci piacerebbe molto se si potesse inviare un bug!
    }
`,"save-manager.ftl":`save-delete-prompt = Sei sicuro di voler eliminare questo file di salvataggio?
save-reload-prompt =
    L'unico modo per { $action ->
        [delete] delete
       *[replace] replace
    } questo salvataggio file senza potenziali conflitti è quello di ricaricare questo contenuto. Volete continuare comunque?
save-download = Scarica
save-replace = Sostituisci
save-delete = Elimina
save-backup-all = Scarica tutti i file di salvataggio
`,"volume-controls.ftl":`volume-controls-mute = Silenzia
`},"ja-JP":{"context_menu.ftl":`context-menu-download-swf = .swfをダウンロード
context-menu-copy-debug-info = デバッグ情報をコピー
context-menu-open-save-manager = セーブマネージャーを開く
context-menu-about-ruffle =
    { $flavor ->
        [extension] Ruffle拡張機能について ({ $version })
       *[other] Ruffleについて ({ $version })
    }
context-menu-hide = メニューを隠す
context-menu-exit-fullscreen = フルスクリーンを終了
context-menu-enter-fullscreen = フルスクリーンにする
context-menu-volume-controls = 音量
`,"messages.ftl":`message-cant-embed =
    Ruffleはこのページに埋め込まれた Flash を実行できませんでした。
    別のタブでファイルを開くことで、この問題を解決できるかもしれません。
panic-title = エラーが発生しました :(
more-info = 詳細情報
run-anyway = とにかく実行する
continue = 続行
report-bug = バグを報告
update-ruffle = Ruffleを更新
ruffle-demo = Webデモ
ruffle-desktop = デスクトップアプリ
ruffle-wiki = Ruffle Wikiを閲覧
enable-hardware-acceleration = ハードウェア アクセラレーションが無効になっているようです。Ruffle は動作するかもしれませんが、非常に遅くなる可能性があります。ハードウェア アクセラレーションを有効にする方法については、以下のリンクを参照してください。
enable-hardware-acceleration-link = よくある質問 - Chromeのハードウェア アクセラレーション
view-error-details = エラーの詳細を表示
open-in-new-tab = 新しいタブで開く
click-to-unmute = クリックでミュートを解除
clipboard-message-title = Ruffleでのコピーと貼り付け
clipboard-message-description =
    { $variant ->
       *[unsupported] お使いのブラウザはクリップボードへのフルアクセスをサポートしていません。
        [access-denied] クリップボードへのアクセスが拒否されました。
    } 代わりに、以下のショートカットを利用できます:
clipboard-message-copy = { " " } : コピー
clipboard-message-cut = { " " } : 切り取り
clipboard-message-paste = { " " } : 貼り付け
error-file-protocol =
    Ruffleを"file:"プロトコルで使用しているようです。
    ブラウザはセキュリティ上の理由から多くの機能を制限しているため、正しく動作しません。
    ローカルサーバーをセットアップするか、ウェブデモまたはデスクトップアプリをご利用ください。
error-javascript-config =
    JavaScriptの設定が正しくないため、Ruffleで問題が発生しました。
    サーバー管理者の方は、エラーの詳細から、どのパラメーターに問題があるのかを確認してください。
    Ruffleのwikiを参照することで、解決方法が見つかるかもしれません。
error-wasm-not-found =
    Ruffleは、必要な「.wasm」ファイルコンポーネントの読み込みに失敗しました。
    サーバーの管理者は、ファイルが正しくアップロードされているか確認をしてください。問題が解決しない場合は、「publicPath」の設定が必要かもしれません。Ruffleのwikiを参照してください。
error-wasm-mime-type =
    Ruffleの初期化中に大きな問題が発生しました。
    このWebサーバーは「.wasm」ファイルを正しいMIMEタイプで提供していません。
    サーバーの管理者は、Ruffleのwikiを参照してください。
error-invalid-swf =
    Ruffle はリクエストされたファイルのパースに失敗しました。
    最も考えられる原因は、ファイルが有効な SWF でないことです。
error-swf-fetch =
    RuffleがFlash SWFファイルの読み込みに失敗しました。
    読み込むべきファイルが既に存在していないことが原因である可能性が高いです。
    Webサイトの管理者にお問い合わせください。
error-swf-cors =
    RuffleはSWFファイルの読み込みに失敗しました。
    CORSポリシーの設定により、fetchへのアクセスがブロックされている可能性があります。
    サーバー管理者の方は、Ruffleのwikiを参照してください。
error-wasm-cors =
    Ruffleに必要となる「.wasm」ファイルコンポーネントの読み込みに失敗しました。
    CORSポリシーによってfetchへのアクセスがブロックされている可能性があります。
    サーバーの管理者は、Ruffle wikiを参照してください。
error-wasm-invalid =
    Ruffleの初期化時に重大な問題が発生しました。
    このページにはRuffleを実行するためのファイルが存在しないか、無効なファイルがあるかもしれません。
    サーバーの管理者は、Ruffleのwikiを参照してください。
error-wasm-download =
    Ruffleの初期化時に重大な問題が発生しました。
    この問題は自然に解決する場合があるため、ページの再読み込みを試してください。
    それでも解決しない場合は、Webサイトの管理者にお問い合わせください。
error-wasm-disabled-on-edge =
    Ruffleに必要となる「.wasm」ファイルコンポーネントの読み込みに失敗しました。
    問題解決のため、ブラウザーの設定画面から、「プライバシー、検索、サービス」をクリックし、下にスクロールして「Web上のセキュリティを強化する」をオフにしてみてください。
    必要となる「.wasm」ファイルの読み込みが許可されます。
    それでも問題が解決しない場合、別のブラウザーを使用する必要があるかもしれません。
error-wasm-unsupported-browser =
    現在使用中のブラウザは、Ruffleの動作に必要なWebAssembly拡張をサポートしていません。
    サポートされているブラウザをご利用ください。
    サポートされているブラウザ一覧は、Wikiに記載されています。
error-javascript-conflict =
    Ruffleの初期化時に重大な問題が発生しました。
    このページではRuffleと競合するJavaScriptコードが使用されているかもしれません。
    サーバーの管理者は、空白のページでファイルを読み込みし直してみてください。
error-javascript-conflict-outdated = 新しいバージョンのRuffleをアップロードすることで、この問題を回避できる可能性があります。(現在のビルドは古い物です:{ $buildDate })
error-csp-conflict =
    Ruffleの初期化時に重大な問題が発生しました。
    このWebサーバーのコンテンツセキュリティポリシーが実行に必要となる「.wasm」コンポーネントの実行を許可していません。
    サーバーの管理者は、Ruffleのwikiを参照してください。
error-unknown =
    Flashコンテンツを表示する際にRuffleで問題が発生しました。
    { $outdated ->
        [true] 現在使用しているビルドは最新ではないため、サーバー管理者の方は、最新版のRuffleに更新してみてください(現在利用中のビルド: { $buildDate })。
       *[false] 想定外の問題なので、バグとして報告していただけると嬉しいです!
    }
`,"save-manager.ftl":`save-delete-prompt = このセーブファイルを削除してもよろしいですか?
save-reload-prompt =
    セーブファイルを競合の可能性なく { $action ->
        [delete] 削除する
       *[replace] 置き換える
    } ために、このコンテンツを再読み込みすることを推奨します。続行しますか？
save-download = ダウンロード
save-replace = 置き換え
save-delete = 削除
save-backup-all = すべてのセーブファイルをダウンロード
`,"volume-controls.ftl":`volume-controls-mute = ミュート
volume-controls-unmute = ミュート解除
`},"ko-KR":{"context_menu.ftl":`context-menu-download-swf = .swf 다운로드
context-menu-copy-debug-info = 디버그 정보 복사
context-menu-open-save-manager = 저장 관리자 열기
context-menu-about-ruffle =
    { $flavor ->
        [extension] Ruffle 확장 프로그램 정보 ({ $version })
       *[other] Ruffle 정보 ({ $version })
    }
context-menu-hide = 이 메뉴 숨기기
context-menu-exit-fullscreen = 전체화면 나가기
context-menu-enter-fullscreen = 전체화면으로 열기
context-menu-volume-controls = 음량 조절
`,"messages.ftl":`message-cant-embed = Ruffle이 이 페이지에 포함된 플래시를 실행할 수 없었습니다. 별도의 탭에서 파일을 열어봄으로서 이 문제를 해결할 수 있습니다.
panic-title = 문제가 발생했습니다 :(
more-info = 추가 정보
run-anyway = 그래도 실행하기
continue = 계속하기
report-bug = 버그 제보
update-ruffle = Ruffle 업데이트
ruffle-demo = 웹 데모
ruffle-desktop = 데스크톱 애플리케이션
ruffle-wiki = Ruffle 위키 보기
enable-hardware-acceleration = 하드웨어 가속이 비활성화되어 있는 것 같습니다. Ruffle은 계속 작동하지만 매우 느릴 수 있습니다. 아래 링크를 참고하여 하드웨어 가속을 활성화하는 방법을 찾아보세요:
enable-hardware-acceleration-link = FAQ - 크롬 하드웨어 가속
view-error-details = 오류 세부 정보 보기
open-in-new-tab = 새 탭에서 열기
click-to-unmute = 클릭하여 음소거 해제
clipboard-message-title = Ruffle에서 복사하고 붙여넣기
clipboard-message-description =
    { $variant ->
       *[unsupported] 이 브라우저는 클립보드 액세스를 지원하지 않습니다,
        [access-denied] 클립보드 액세스가 거절되었습니다,
    } 하지만 다음 단축키를 대신 사용할 수 있습니다:
clipboard-message-copy = { " " } 복사
clipboard-message-cut = { " " } 잘라내기
clipboard-message-paste = { " " } 붙여넣기
error-file-protocol =
    Ruffle을 "file:" 프로토콜에서 실행하고 있는 것으로 보입니다.
    브라우저에서는 이 프로토콜을 보안상의 이유로 많은 기능을 작동하지 않게 차단하므로 이 방법은 작동하지 않습니다.
    대신, 로컬 서버를 직접 열어서 설정하거나 웹 데모 또는 데스크톱 애플리케이션을 사용하시기 바랍니다.
error-javascript-config =
    잘못된 자바스크립트 설정으로 인해 Ruffle에서 중대한 문제가 발생했습니다.
    만약 당신이 서버 관리자인 경우, 오류 세부사항을 확인하여 어떤 매개변수가 잘못되었는지 알아보세요.
    또는 Ruffle 위키를 통해 도움을 받아 볼 수도 있습니다.
error-wasm-not-found =
    Ruffle이 ".wasm" 필수 파일 구성요소를 로드하지 못했습니다.
    만약 당신이 서버 관리자라면 파일이 올바르게 업로드되었는지 확인하세요.
    문제가 지속된다면 "publicPath" 옵션을 사용해야 할 수도 있습니다: Ruffle 위키를 참조하여 도움을 받으세요.
error-wasm-mime-type =
    Ruffle이 초기화를 시도하는 동안 중대한 문제가 발생했습니다.
    이 웹 서버는 올바른 MIME 유형의 ".wasm" 파일을 제공하지 않습니다.
    만약 당신이 서버 관리자라면 Ruffle 위키를 통해 도움을 받으세요.
error-invalid-swf =
    Ruffle이 요청한 파일을 분석하지 못했습니다.
    요청한 파일이 유효한 SWF 파일이 아닐 가능성이 높습니다.
error-swf-fetch =
    Ruffle이 플래시 SWF 파일을 로드하는 데 실패하였습니다.
    이는 주로 파일이 더 이상 존재하지 않아 Ruffle이 로드할 수 있는 것이 없을 가능성이 높습니다.
    웹사이트 관리자에게 문의하여 도움을 받아보세요.
error-swf-cors =
    Ruffle이 플래시 SWF 파일을 로드하는 데 실패하였습니다.
    CORS 정책에 의해 데이터 가져오기에 대한 액세스가 차단되었을 수 있습니다.
    만약 당신이 서버 관리자라면 Ruffle 위키를 참조하여 도움을 받아볼 수 있습니다.
error-wasm-cors =
    Ruffle이 ".wasm" 필수 파일 구성요소를 로드하지 못했습니다.
    CORS 정책에 의해 데이터 가져오기에 대한 액세스가 차단되었을 수 있습니다.
    만약 당신이 서버 관리자라면 Ruffle 위키를 참조하여 도움을 받아볼 수 있습니다.
error-wasm-invalid =
    Ruffle이 초기화를 시도하는 동안 중대한 문제가 발생했습니다.
    이 페이지에 Ruffle을 실행하기 위한 파일이 누락되었거나 잘못된 것 같습니다.
    만약 당신이 서버 관리자라면 Ruffle 위키를 참조하여 도움을 받아볼 수 있습니다.
error-wasm-download =
    Ruffle이 초기화를 시도하는 동안 중대한 문제가 발생했습니다.
    이 문제는 때때로 바로 해결될 수 있으므로 페이지를 새로고침하여 다시 시도해보세요.
    그래도 문제가 지속된다면, 웹사이트 관리자에게 문의해주세요.
error-wasm-disabled-on-edge =
    Ruffle이 ".wasm" 필수 파일 구성요소를 로드하지 못했습니다.
    이를 해결하려면 브라우저 설정에서 "개인 정보, 검색 및 서비스"를 클릭한 후, 하단으로 스크롤하여 "웹에서 보안 강화" 기능을 꺼야 합니다.
    이는 필요한 ".wasm" 파일을 브라우저에서 로드할 수 있도록 허용합니다.
    이 문제가 지속될 경우 다른 브라우저를 사용해야 할 수 있습니다.
error-wasm-unsupported-browser =
    사용 중인 브라우저에서 Ruffle이 필요한 웹 어셈블리 확장을 지원하지 않습니다. 
    지원되는 브라우저로 전환하세요. 지원되는 브라우저 목록은 위키에서 확인할 수 있습니다.
error-javascript-conflict =
    Ruffle이 초기화를 시도하는 동안 중대한 문제가 발생했습니다.
    이 페이지에서 사용되는 자바스크립트 코드가 Ruffle과 충돌하는 것으로 보입니다.
    만약 당신이 서버 관리자라면 빈 페이지에서 파일을 로드해보세요.
error-javascript-conflict-outdated = 또한 Ruffle의 최신 버전을 업로드하는 것을 시도하여 문제를 우회해볼 수 있습니다. (현재 빌드가 오래되었습니다: { $buildDate }).
error-csp-conflict =
    Ruffle이 초기화를 시도하는 동안 중대한 문제가 발생했습니다.
    이 웹 서버의 CSP(Content Security Policy) 정책이 ".wasm" 필수 구성요소를 실행하는 것을 허용하지 않습니다.
    만약 당신이 서버 관리자라면 Ruffle 위키를 참조하여 도움을 받아볼 수 있습니다.
error-unknown =
    Ruffle이 플래시 콘텐츠를 표시하려고 시도하는 동안 중대한 문제가 발생했습니다.
    { $outdated ->
        [true] 만약 당신이 서버 관리자라면, Ruffle의 최신 버전을 업로드하여 다시 시도해보세요. (현재 빌드가 오래되었습니다: { $buildDate }).
       *[false] 이런 현상이 발생해서는 안되므로, 버그를 제보해주신다면 감사하겠습니다!
    }
`,"save-manager.ftl":`save-delete-prompt = 정말로 이 세이브 파일을 삭제하시겠습니까?
save-reload-prompt =
    \b이 파일을 잠재적인 충돌 없이 { $action ->
        [delete] 삭제
       *[replace] 교체
    }하려면 콘텐츠를 다시 로드해야 합니다. 그래도 계속하시겠습니까?
save-download = 다운로드
save-replace = 교체
save-delete = 삭제
save-backup-all = 모든 저장 파일 다운로드
`,"volume-controls.ftl":`volume-controls-mute = 음소거
volume-controls-unmute = 음소거 해제
`},"nl-NL":{"context_menu.ftl":`context-menu-download-swf = .swf downloaden
context-menu-copy-debug-info = Kopieer debuginformatie
context-menu-open-save-manager = Open opgeslagen-data-manager
context-menu-about-ruffle =
    { $flavor ->
        [extension] Over Ruffle Uitbreiding ({ $version })
       *[other] Over Ruffle ({ $version })
    }
context-menu-hide = Verberg dit menu
context-menu-exit-fullscreen = Verlaat volledig scherm
context-menu-enter-fullscreen = Naar volledig scherm
context-menu-volume-controls = Geluidsniveaus
`,"messages.ftl":`message-cant-embed =
    Ruffle kon de Flash-inhoud op de pagina niet draaien.
    Je kan proberen het bestand in een apart tabblad te openen, om hier omheen te werken.
panic-title = Er ging iets mis :(
more-info = Meer informatie
run-anyway = Toch starten
continue = Doorgaan
report-bug = Bug rapporteren
update-ruffle = Ruffle updaten
ruffle-demo = Web Demo
ruffle-desktop = Desktopapplicatie
ruffle-wiki = Bekijk de Ruffle Wiki
enable-hardware-acceleration = Het lijkt erop dat hardwareversnelling is uitgeschakeld. Ruffle zou hierdoor erg traag kunnen zijn. In de link hieronder wordt uitgelegd hoe je hardwareversnelling kunt inschakelen:
enable-hardware-acceleration-link = FAQ - Chrome Hardwareversnelling
view-error-details = Foutdetails tonen
open-in-new-tab = Openen in een nieuw tabblad
click-to-unmute = Klik om te ontdempen
clipboard-message-title = Kopiëren en plakken in Ruffle
clipboard-message-description =
    { $variant ->
       *[unsupported] Je browser heeft geen ondersteuning voor volledige toegang tot het klembord,
        [access-denied] Toegang tot het klembord werd geweigerd,
    } maar je kunt altijd nog de volgende sneltoetsen gebruiken:
clipboard-message-copy = { " " } om te kopiëren
clipboard-message-cut = { " " } om te knippen
clipboard-message-paste = { " " } om te plakken
error-file-protocol =
    Het lijkt erop dat je Ruffle gebruikt met het "file" protocol.
    De meeste browsers blokkeren dit om veiligheidsredenen, waardoor het niet werkt.
    In plaats hiervan raden we aan om een lokale server te draaien, de web demo te gebruiken, of de desktopapplicatie.
error-javascript-config =
    Ruffle heeft een groot probleem ondervonden vanwege een onjuiste JavaScript configuratie.
    Als je de serverbeheerder bent, kijk dan naar de foutdetails om te zien wat er verkeerd is.
    Je kan ook in de Ruffle wiki kijken voor hulp.
error-wasm-not-found =
    Ruffle kon het vereiste ".wasm" bestandscomponent niet laden.
    Als je de serverbeheerder bent, controleer dan of het bestaand juist is geüpload.
    Mocht het probleem blijven voordoen, moet je misschien de "publicPath" instelling gebruiken: zie ook de Ruffle wiki voor hulp.
error-wasm-mime-type =
    Ruffle heeft een groot probleem ondervonden tijdens het initialiseren.
    Deze webserver serveert ".wasm" bestanden niet met het juiste MIME type.
    Als je de serverbeheerder bent, kijk dan in de Ruffle wiki voor hulp.
error-invalid-swf =
    Ruffle kon het gevraagde bestand niet verwerken.
    Waarschijnlijk is het geen geldig SWF bestand.
error-swf-fetch =
    Ruffle kon het Flash SWF bestand niet inladen.
    De meest waarschijnlijke reden is dat het bestand niet langer bestaat, en er dus niets is om in te laden.
    Probeer contact op te nemen met de websitebeheerder voor hulp.
error-swf-cors =
    Ruffle kon het Flash SWD bestand niet inladen.
    Toegang is waarschijnlijk geblokeerd door het CORS beleid.
    Als je de serverbeheerder bent, kijk dan in de Ruffle wiki voor hulp.
error-wasm-cors =
    Ruffle kon het vereiste ".wasm" bestandscomponent niet laden.
    Toegang is waarschijnlijk geblokeerd door het CORS beleid.
    Als je de serverbeheerder bent, kijk dan in de Ruffle wiki voor hulp.
error-wasm-invalid =
    Ruffle heeft een groot probleem ondervonden tijdens het initialiseren.
    Het lijkt erop dat de Ruffle bestanden ontbreken of ongeldig zijn.
    Als je de serverbeheerder bent, kijk dan in de Ruffle wiki voor hulp.
error-wasm-download =
    Ruffle heeft een groot probleem ondervonden tijdens het initialiseren.
    Dit lost zichzelf vaak op als je de bladzijde opnieuw inlaadt.
    Zo niet, neem dan contact op met de websitebeheerder.
error-wasm-disabled-on-edge =
    Ruffle kon het vereiste ".wasm" bestandscomponent niet laden.
    Om dit op te lossen, ga naar je browserinstellingen, klik op "Privacy, zoeken en diensten", scroll omlaag, en schakel "Verbeter je veiligheid op he web" uit.
    Dan kan je browser wel de vereiste ".wasm" bestanden inladen.
    Als het probleem zich blijft voordoen, moet je misschien een andere browser gebruiken.
error-javascript-conflict =
    Ruffle heeft een groot probleem ondervonden tijdens het initialiseren.
    Het lijkt erop dat deze pagina JavaScript code gebruikt die conflicteert met Ruffle.
    Als je de serverbeheerder bent, raden we aan om het bestand op een lege pagina te proberen in te laden.
error-javascript-conflict-outdated = Je kan ook proberen een nieuwe versie van Ruffle te installeren, om om het probleem heen te werken (huidige versie is oud: { $buildDate }).
error-csp-conflict =
    Ruffle heeft een groot probleem ondervonden tijdens het initialiseren.
    Het CSP-beleid staat niet toe dat het vereiste ".wasm" component kan draaien.
    Als je de serverbeheerder bent, kijk dan in de Ruffle wiki voor hulp.
error-unknown =
    Ruffle heeft een groot probleem onderbonden tijdens het weergeven van deze Flash-inhoud.
    { $outdated ->
        [true] Als je de serverbeheerder bent, upload dan een nieuwe versie van Ruffle (huidige versie is oud: { $buildDate }).
       *[false] Dit hoort niet te gebeuren, dus we stellen het op prijs als je de fout aan ons rapporteert!
    }
`,"save-manager.ftl":`save-delete-prompt = Weet je zeker dat je deze opgeslagen data wilt verwijderen?
save-reload-prompt =
    De enige manier om deze opgeslagen data te { $action ->
        [delete] verwijderen
       *[replace] vervangen
    } zonder potentiële problemen is door de inhoud opnieuw te laden. Toch doorgaan?
save-download = Downloaden
save-replace = Vervangen
save-delete = Verwijderen
save-backup-all = Download alle opgeslagen data
`,"volume-controls.ftl":`volume-controls-mute = Dempen
volume-controls-unmute = Dempen opheffen
`},"pl-PL":{"context_menu.ftl":`context-menu-download-swf = Pobierz .swf
context-menu-copy-debug-info = Kopiuj informacje debugowania
context-menu-open-save-manager = Otwórz Menadżer Zapisów
context-menu-about-ruffle =
    { $flavor ->
        [extension] O Rozszerzeniu Ruffle ({ $version })
       *[other] O Ruffle ({ $version })
    }
context-menu-hide = Ukryj to menu
context-menu-exit-fullscreen = Zamknij pełny ekran
context-menu-enter-fullscreen = Pełny ekran
context-menu-volume-controls = Sterowanie głośnością
`,"messages.ftl":`message-cant-embed =
    Ruffle nie było w stanie uruchomić zawartości Flash w tej stronie.
    Możesz spróbować otworzyć plik w nowej karcie, aby uniknąć tego problemu.
panic-title = Coś poszło nie tak :(
more-info = Więcej informacji
run-anyway = Uruchom mimo tego
continue = Kontynuuj
report-bug = Zgłoś błąd
update-ruffle = Zaktualizuj Ruffle
ruffle-demo = Webowe demo
ruffle-desktop = Aplikacja na komputer
ruffle-wiki = Zobacz Wiki Ruffle
enable-hardware-acceleration = Wygląda na to, że akceleracja grafiki jest wyłączona. Chociaż Ruffle może działać, może być bardzo powolny. Możesz dowiedzieć się, jak włączyć akcelerację grafiki, klikając poniższy link:
enable-hardware-acceleration-link = FAQ — Akceleracja Grafiki Chrome
view-error-details = Zobacz szczegóły błędu
open-in-new-tab = Otwórz w nowej karcie
click-to-unmute = Kliknij aby wyłączyć wyciszenie
clipboard-message-title = Kopiowanie i wklejanie w Ruffle
clipboard-message-description =
    { $variant ->
       *[unsupported] Twoja przeglądarka nie obsługuje pełnego dostępu do schowka,
        [access-denied] Odmówiono dostępu do schowka,
    } ale zawsze możesz stosować te skróty klawiszowe:
clipboard-message-copy = { " " } w celu skopiowania
clipboard-message-cut = { " " } w celu wycięcia
clipboard-message-paste = { " " } w celu wklejenia
error-canvas-reload = Nie można ponownie załadować renderera canvas, gdy jest już on używany.
error-file-protocol =
    Wygląda na to, że używasz Ruffle z protokołem "file:".
    To nie działa, ponieważ przeglądarka blokuje wiele funkcji przed działaniem ze względów bezpieczeństwa.
    Zamiast tego zachęcamy do konfiguracji lokalnego serwera lub użycia webowego demo lub aplikacji desktopowej.
error-javascript-config =
    Ruffle napotkał poważny problem z powodu nieprawidłowej konfiguracji JavaScript.
    Jeśli jesteś administratorem serwera, prosimy o sprawdzenie szczegółów błędu, aby dowiedzieć się, który parametr jest błędny.
    Możesz również zapoznać się z wiki Ruffle, aby uzyskać pomoc.
error-wasm-not-found =
    Nie udało się załadować wymaganego komponentu pliku ".wasm".
    Jeśli jesteś administratorem serwera, upewnij się, że plik został poprawnie przesłany.
    Jeśli problem będzie się powtarzał, być może będziesz musiał użyć ustawienia "publicPath": zapoznaj się z wiki Ruffle, aby uzyskać pomoc.
error-wasm-mime-type =
    Ruffle napotkał poważny problem podczas próby zainicjowania.
    Ten serwer nie serwuje plików ".wasm" z poprawnym typem MIME.
    Jeśli jesteś administratorem serwera, zasięgnij pomocy na wiki Ruffle.
error-invalid-swf =
    Ruffle nie może przetworzyć żądanego pliku.
    Prawdopodobnie to nie jest poprawny plik SWF.
error-swf-fetch =
    Nie udało się załadować pliku Flash SWF.
    Najbardziej prawdopodobnym powodem jest to, że plik już nie istnieje, więc Ruffle nie ma co załadować.
    Spróbuj skontaktować się z administratorem witryny, aby uzyskać pomoc.
error-swf-cors =
    Nie udało się załadować pliku Flash SWF.
    Pobieranie zostało prawdopodobnie zablokowane przez politykę CORS.
    Jeśli jesteś administratorem serwera, zasięgnij pomocy na wiki Ruffle.
error-wasm-cors =
    Nie udało się załadować wymaganego komponentu pliku ".wasm".
    Pobieranie zostało prawdopodobnie zablokowane przez politykę CORS.
    Jeśli jesteś administratorem serwera, zasięgnij pomocy na wiki Ruffle.
error-wasm-invalid =
    Ruffle napotkał poważny problem podczas próby zainicjowania.
    Wygląda na to, że ta strona ma brakujące lub nieprawidłowe pliki niezbędne do uruchomienia Ruffle.
    Jeśli jesteś administratorem serwera, zasięgnij pomocy na wiki Ruffle.
error-wasm-download =
    Ruffle napotkał poważny problem podczas próby zainicjowania.
    Ten problem często sam się rozwiązuje, więc możesz spróbować odświeżyć stronę.
    W przeciwnym razie skontaktuj się z administratorem witryny.
error-wasm-disabled-on-edge =
    Ruffle nie udało się załadować wymaganego komponentu pliku ".wasm".
    Aby to naprawić, spróbuj otworzyć ustawienia przeglądarki, klikając "Prywatność, wyszukiwanie i usługi", przewijając w dół i wyłączając "Zwiększ bezpieczeństwo w sieci".
    Pozwoli to przeglądarce załadować wymagane pliki ".wasm".
    Jeśli problem będzie się powtarzał, być może będziesz musiał użyć innej przeglądarki.
error-wasm-unsupported-browser =
    Przeglądarka, której używasz, nie obsługuje rozszerzeń WebAssembly wymaganych do działania Ruffle.
    Proszę użyć obsługiwanej przeglądarki.
    Listę obsługiwanych przeglądarek znajdziesz na Wiki.
error-javascript-conflict =
    Ruffle napotkał poważny problem podczas próby zainicjowania.
    Wygląda na to, że ta strona używa kodu JavaScript, który koliduje z Ruffle.
    Jeśli jesteś administratorem serwera, zapraszamy Cię do ładowania pliku na pustej stronie.
error-javascript-conflict-outdated = Możesz również spróbować przesłać nowszą wersję Ruffle, która może ominąć problem (obecna wersja jest przestarzała: { $buildDate }).
error-csp-conflict =
    Ruffle napotkał poważny problem podczas próby zainicjowania.
    Polityka bezpieczeństwa zawartości tego serwera (CSP) nie zezwala na komponent ".wasm" wymagany do uruchomienia.
    Jeśli jesteś administratorem serwera, zasięgnij pomocy na wiki Ruffle.
error-unknown =
    Ruffle napotkał poważny problem podczas próby wyświetlenia tej zawartości Flash.
    { $outdated ->
        [true] Jeśli jesteś administratorem serwera, spróbuj zaktualizować Ruffle (obecna wersja jest przestarzała: { $buildDate }).
       *[false] To nie powinno się wydarzyć, więc bylibyśmy wdzięczni, gdybyś zgłosił błąd!
    }
`,"save-manager.ftl":`save-delete-prompt = Czy na pewno chcesz skasować ten plik zapisu?
save-reload-prompt =
    Jedyną opcją, aby { $action ->
        [delete] usunąć
       *[replace] zamienić
    } ten plik zapisu bez potencjalnych konfliktów jest przeładowanie zawartości. Czy chcesz kontynuować?
save-download = Pobierz
save-replace = Zamień
save-delete = Usuń
save-backup-all = Pobierz wszystkie pliki zapisu
`,"volume-controls.ftl":`volume-controls-mute = Wycisz
volume-controls-unmute = Wyłącz wyciszenie
`},"pt-BR":{"context_menu.ftl":`context-menu-download-swf = Baixar .swf
context-menu-copy-debug-info = Copiar informação de depuração
context-menu-open-save-manager = Abrir o Gerenciador de Salvamento
context-menu-about-ruffle =
    { $flavor ->
        [extension] Sobre a extensão do Ruffle ({ $version })
       *[other] Sobre o Ruffle ({ $version })
    }
context-menu-hide = Esconder este menu
context-menu-exit-fullscreen = Sair da tela cheia
context-menu-enter-fullscreen = Entrar em tela cheia
context-menu-volume-controls = Controles de volume
`,"messages.ftl":`message-cant-embed =
    Ruffle não conseguiu executar o Flash incorporado nesta página.
    Você pode tentar abrir o arquivo em uma guia separada para evitar esse problema.
panic-title = Algo deu errado :(
more-info = Mais informação
run-anyway = Executar mesmo assim
continue = Continuar
report-bug = Reportar Bug
update-ruffle = Atualizar Ruffle
ruffle-demo = Demo Web
ruffle-desktop = Aplicativo de Desktop
ruffle-wiki = Ver Wiki do Ruffle
enable-hardware-acceleration = Parece que a aceleração de hardware está desabilitada. Embora o Ruffle possa funcionar, ele pode ser muito lento. Você pode descobrir como habilitar a aceleração de hardware seguindo o link abaixo:
enable-hardware-acceleration-link = FAQ - Aceleração de hardware do Chrome
view-error-details = Ver detalhes do erro
open-in-new-tab = Abrir em uma nova guia
click-to-unmute = Clique para ativar o som
clipboard-message-title = Copiando e colando no Ruffle
clipboard-message-description =
    { $variant ->
       *[unsupported] Seu navegador não suporta acesso total à área de transferência,
        [access-denied] O acesso à área de transferência foi negado,
    } mas você sempre pode usar estes atalhos:
clipboard-message-copy = { " " } para copiar
clipboard-message-cut = { " " } para recortar
clipboard-message-paste = { " " } para colar
error-file-protocol =
    Parece que você está executando o Ruffle no protocolo "file:".
    Isto não funciona como navegadores bloqueiam muitos recursos de funcionar por razões de segurança.
    Ao invés disso, convidamos você a configurar um servidor local ou a usar a demonstração da web, ou o aplicativo de desktop.
error-javascript-config =
    O Ruffle encontrou um grande problema devido a uma configuração incorreta do JavaScript.
    Se você for o administrador do servidor, convidamos você a verificar os detalhes do erro para descobrir qual parâmetro está com falha.
    Você também pode consultar o wiki do Ruffle para obter ajuda.
error-wasm-not-found =
    Ruffle falhou ao carregar o componente de arquivo ".wasm" necessário.
    Se você é o administrador do servidor, por favor, certifique-se de que o arquivo foi carregado corretamente.
    Se o problema persistir, você pode precisar usar a configuração "publicPath": por favor consulte a wiki do Ruffle para obter ajuda.
error-wasm-mime-type =
    Ruffle encontrou um grande problema ao tentar inicializar.
    Este servidor de web não está servindo ".wasm" arquivos com o tipo MIME correto.
    Se você é o administrador do servidor, por favor consulte o wiki do Ruffle para obter ajuda.
error-invalid-swf =
    Ruffle não pode analisar o arquivo solicitado.
    O motivo provável é que o arquivo solicitado não seja um SWF válido.
error-swf-fetch =
    Ruffle falhou ao carregar o arquivo Flash SWF.
    A razão provável é que o arquivo não existe mais, então não há nada para o Ruffle carregar.
    Tente contatar o administrador do site para obter ajuda.
error-swf-cors =
    Ruffle falhou ao carregar o arquivo Flash SWF.
    O acesso para fetch provavelmente foi bloqueado pela política CORS.
    Se você for o administrador do servidor, consulte o wiki do Ruffle para obter ajuda.
error-wasm-cors =
    Ruffle falhou ao carregar o componente de arquivo ".wasm" necessário.
    O acesso para fetch foi provavelmente bloqueado pela política CORS.
    Se você é o administrador do servidor, por favor consulte a wiki do Ruffle para obter ajuda.
error-wasm-invalid =
    Ruffle encontrou um grande problema ao tentar inicializar.
    Parece que esta página tem arquivos ausentes ou inválidos para executar o Ruffle.
    Se você for o administrador do servidor, consulte o wiki do Ruffle para obter ajuda.
error-wasm-download =
    O Ruffle encontrou um grande problema ao tentar inicializar.
    Muitas vezes isso pode se resolver sozinho, então você pode tentar recarregar a página.
    Caso contrário, contate o administrador do site.
error-wasm-disabled-on-edge =
    O Ruffle falhou ao carregar o componente de arquivo ".wasm" necessário.
    Para corrigir isso, tente abrir configurações do seu navegador, clicando em "Privacidade, pesquisa e serviços", rolando para baixo e desativando "Melhore sua segurança na web".
    Isso permitirá que seu navegador carregue os arquivos ".wasm" necessários.
    Se o problema persistir, talvez seja necessário usar um navegador diferente.
error-wasm-unsupported-browser =
    O navegador que você está usando não suporta as extensões WebAssembly Ruffle exige que seja executado.
    Por favor, mude para um navegador suportado.
    Você pode encontrar uma lista de navegadores suportados no wiki.
error-javascript-conflict =
    Ruffle encontrou um grande problema ao tentar inicializar.
    Parece que esta página usa código JavaScript que entra em conflito com o Ruffle.
    Se você for o administrador do servidor, convidamos você a tentar carregar o arquivo em uma página em branco.
error-javascript-conflict-outdated = Você também pode tentar fazer o upload de uma versão mais recente do Ruffle que pode contornar o problema (a compilação atual está desatualizada: { $buildDate }).
error-csp-conflict =
    Ruffle encontrou um grande problema ao tentar inicializar.
    A política de segurança de conteúdo deste servidor da web não permite a execução do componente ".wasm" necessário.
    Se você for o administrador do servidor, consulte o wiki do Ruffle para obter ajuda.
error-unknown =
    O Ruffle encontrou um grande problema enquanto tentava exibir este conteúdo em Flash.
    { $outdated ->
        [true] Se você é o administrador do servidor, por favor tente fazer o upload de uma versão mais recente do Ruffle (a compilação atual está desatualizada: { $buildDate }).
       *[false] Isso não deveria acontecer, então apreciaríamos muito se você pudesse arquivar um bug!
    }
`,"save-manager.ftl":`save-delete-prompt = Tem certeza que deseja excluir este arquivo de salvamento?
save-reload-prompt =
    A única maneira de { $action ->
        [delete] excluir
       *[replace] substituir
    } este arquivo sem potencial conflito é recarregar este conteúdo. Deseja continuar mesmo assim?
save-download = Baixar
save-replace = Substituir
save-delete = Excluir
save-backup-all = Baixar todos os arquivos de salvamento
`,"volume-controls.ftl":`volume-controls-mute = Silenciar
volume-controls-unmute = Ativar som
`},"pt-PT":{"context_menu.ftl":`context-menu-download-swf = Descarga.swf
context-menu-copy-debug-info = Copiar informações de depuração
context-menu-open-save-manager = Abrir Gestor de Gravações
context-menu-about-ruffle =
    { $flavor ->
        [extension] Sobre a extensão do Ruffle ({ $version })
       *[other] Sobre o Ruffle ({ $version })
    }
context-menu-hide = Esconder este menu
context-menu-exit-fullscreen = Fechar Ecrã Inteiro
context-menu-enter-fullscreen = Abrir Ecrã Inteiro
context-menu-volume-controls = Controlos de volume
`,"messages.ftl":`message-cant-embed =
    O Ruffle não conseguiu abrir o Flash integrado nesta página.
    Para tentar resolver o problema, pode abrir o ficheiro num novo separador.
panic-title = Algo correu mal :(
more-info = Mais informações
run-anyway = Executar mesmo assim
continue = Continuar
report-bug = Reportar falha
update-ruffle = Atualizar o Ruffle
ruffle-demo = Demonstração na Web
ruffle-desktop = Aplicação para Desktop
ruffle-wiki = Ver a Wiki do Ruffle
enable-hardware-acceleration = Parece que a aceleração de hardware está desativada. Mesmo que o Ruffle funcione, pode estar excessivamente lento. Descubra como ativar a aceleração de hardware seguindo este link:
enable-hardware-acceleration-link = Perguntas Frequentes - Aceleração de Hardware no Chrome
view-error-details = Ver detalhes do erro
open-in-new-tab = Abrir num novo separador
click-to-unmute = Clique para ativar o som
clipboard-message-title = Copiar e colar no Ruffle
clipboard-message-description =
    { $variant ->
       *[unsupported] O seu navegador não suporta acesso total à área de transferência,
        [access-denied] O acesso à área de transferência foi negado,
    } mas pode sempre usar estes atalhos em alternativa:
clipboard-message-copy = { " " } para copiar
clipboard-message-cut = { " " } para cortar
clipboard-message-paste = { " " } para colar
error-file-protocol =
    Parece que executa o Ruffle no protocolo "file:".
    Isto não funciona, já que os navegadores bloqueiam muitas funcionalidades por razões de segurança.
    Em vez disto, recomendados configurar um servidor local ou usar a demonstração na web, ou a aplicação para desktop.
error-javascript-config =
    O Ruffle encontrou um problema maior devido a uma configuração de JavaScript incorreta.
    Se é o administrador do servidor, convidamo-lo a verificar os detalhes do erro para descobrir o parâmetro problemático.
    Pode ainda consultar a wiki do Ruffle para obter ajuda.
error-wasm-not-found =
    O Ruffle falhou ao carregar o componente de ficheiro ".wasm" necessário.
    Se é o administrador do servidor, por favor certifique-se de que o ficheiro foi devidamente carregado.
    Se o problema persistir, poderá querer usar a configuração "publicPath": consulte a wiki do Ruffle para obter ajuda.
error-wasm-mime-type =
    O Ruffle encontrou um problema maior ao tentar inicializar.
    Este servidor de web não suporta ficheiros ".wasm" com o tipo MIME correto.
    Se é o administrador do servidor, por favor consulte o wiki do Ruffle para obter ajuda.
error-invalid-swf =
    O Ruffle não consegue analisar o ficheiro solicitado.
    O motivo provável é que o ficheiro solicitado não seja um SWF válido.
error-swf-fetch =
    Ruffle falhou ao carregar o arquivo SWF do Flash
    A razão mais provável é que o arquivo não existe mais, então não há nada para o Ruffle carregar.
    Tente contactar o administrador do site para obter ajuda.
error-swf-cors =
    O Ruffle falhou ao carregar o ficheiro Flash SWF.
    Acesso a buscar foi provavelmente bloqueado pela política de CORS.
    Se é o administrador do servidor, por favor consulte a wiki do Ruffle para obter ajuda.
error-wasm-cors =
    O Ruffle falhou ao carregar o componente de ficheiro ".wasm" necessário.
    O acesso a buscar foi provavelmente bloqueado pela política CORS.
    Se é o administrador do servidor, por favor consulte a wiki do Ruffle para obter ajuda.
error-wasm-invalid =
    Ruffle encontrou um grande problema ao tentar inicializar.
    Parece que esta página está ausente ou arquivos inválidos para executar o Ruffle.
    Se você é o administrador do servidor, por favor consulte a wiki do Ruffle para obter ajuda.
error-wasm-download =
    O Ruffle encontrou um problema maior ao tentar inicializar.
    Isto frequentemente resolve-se sozinho, portanto experimente recarregar a página.
    Caso contrário, por favor contacte o administrador do site.
error-wasm-disabled-on-edge =
    O Ruffle falhou ao carregar o componente de ficheiro ".wasm" necessário.
    Para corrigir isso, tente abrir as opções do seu navegador, clicando em "Privacidade, pesquisa e serviços", rolando para baixo e desativando "Melhore a sua segurança na web".
    Isto permitirá ao seu navegador carregar os ficheiros ".wasm" necessários.
    Se o problema persistir, talvez seja necessário usar um navegador diferente.
error-wasm-unsupported-browser =
    O navegador que utiliza não suporta as extensões WebAssembly de que o Ruffle necessita para ser executado.
    Deve mudar para um navegador suportado.
    Pode encontrar uma lista de navegadores suportados na Wiki.
error-javascript-conflict =
    O Ruffle encontrou um problema maior ao tentar inicializar.
    Parece que esta página usa código JavaScript que entra em conflito com o Ruffle.
    Se é o administrador do servidor, convidamo-lo a tentar carregar o ficheiro em numa página em branco.
error-javascript-conflict-outdated = Pode ainda tentar carregar uma versão mais recente do Ruffle que talvez contorne o problema (a compilação atual está desatualizada: { $buildDate }).
error-csp-conflict =
    O Ruffle encontrou um problema maior ao tentar inicializar.
    A Política de Segurança de Conteúdo deste servidor não permite que o componente ".wasm" necessário seja executado.
    Se é o administrador do servidor, por favor consulte o wiki do Ruffle para obter ajuda.
error-unknown =
    O Ruffle encontrou um problema maior enquanto tentava mostrar este conteúdo em Flash.
    { $outdated ->
        [true] Se é o administrador do servidor, por favor tente carregar uma versão mais recente do Ruffle (a compilação atual está desatualizada: { $buildDate }).
       *[false] Não era suposto isto ter acontecido, por isso agradeceríamos muito se pudesse reportar a falha!
    }
`,"save-manager.ftl":`save-delete-prompt = Tem a certeza de que quer apagar esta gravação?
save-reload-prompt =
    A única forma de { $action ->
        [delete] apagar
       *[replace] substituir
    } esta gravação sem um potencial conflito é recarregar este conteúdo. Deseja continuar mesmo assim?
save-download = Descarregar
save-replace = Substituir
save-delete = Apagar
save-backup-all = Descarregar todas as gravações
`,"volume-controls.ftl":`volume-controls-mute = Silenciar
volume-controls-unmute = Ativar o som
`},"ro-RO":{"context_menu.ftl":`context-menu-download-swf = Descarcă .swf
context-menu-copy-debug-info = Copiază informațiile de depanare
context-menu-open-save-manager = Deschide managerul de salvări
context-menu-about-ruffle =
    { $flavor ->
        [extension] Despre extensia Ruffle ({ $version })
       *[other] Despre Ruffle ({ $version })
    }
context-menu-hide = Ascunde acest meniu
context-menu-exit-fullscreen = Ieși din ecranul complet
context-menu-enter-fullscreen = Intră în ecran complet
context-menu-volume-controls = Comenzi pentru volum
`,"messages.ftl":`message-cant-embed =
    Ruffle nu a putut să ruleze Flash încorporat în această pagină.
    Poți încerca să deschizi fișierul într-o filă separată, pentru a evita această problemă.
panic-title = Ceva a mers prost :(
more-info = Mai multe informații
run-anyway = Rulează oricum
continue = Continuă
report-bug = Raportează un bug
update-ruffle = Actualizează Ruffle
ruffle-demo = Demo web
ruffle-desktop = Aplicație desktop
ruffle-wiki = Vezi wikiul Ruffle
view-error-details = Vezi detaliile erorii
open-in-new-tab = Deschide într-o filă nouă
click-to-unmute = Dă click pentru a dezmuți
error-file-protocol =
    Se pare că rulezi Ruffle pe protocolul „file:”.
    Acesta nu funcționează, deoarece browserele blochează funcționarea multor funcții din motive de securitate.
    În schimb, te invităm să configurezi un server local sau să folosești fie demoul web, fie aplicația desktop.
error-javascript-config =
    Ruffle a întâmpinat o problemă majoră din cauza unei configurări incorecte a JavaScript.
    Dacă ești administratorul serverului, te invităm să verifici detaliile erorii pentru a afla care parametru este defect.
    De asemenea, poți consulta wikiul Ruffle pentru ajutor.
error-wasm-not-found =
    Ruffle a eșuat la încărcarea componentei de fișier „.wasm”.
    Dacă ești administratorul serverului, te rugăm să te asiguri că fișierul a fost încărcat corect.
    Dacă problema persistă, poate fi necesar să folosești setarea „publicPath”: te rugăm să consulți wikiul Ruffle pentru ajutor.
error-wasm-mime-type =
    Ruffle a întâmpinat o problemă majoră în timp ce încerca să se inițializeze.
    Acest server web nu servește fișiere „.wasm” cu tipul MIME corect.
    Dacă ești administratorul serverului, te rugăm să consulți wikiul Ruffle pentru ajutor.
error-swf-fetch =
    Ruffle a eșuat la încărcarea fișierului SWF.
    Motivul cel mai probabil este că fișierul nu mai există, deci Ruffle nu mai are ce să încarce.
    Încearcă să contactezi administratorul site-ului web pentru ajutor.
error-swf-cors =
    Ruffle a eșuat la încărcarea fișierului SWF.
    Accesul de preluare a fost probabil blocat de politica CORS.
    Dacă ești administratorul serverului, te rugăm să consulți wikiul Ruffle pentru ajutor.
error-wasm-cors =
    Ruffle a eșuat la încărcarea componentei de fișier „.wasm”.
    Accesul de preluare a fost probabil blocat de politica CORS.
    Dacă ești administratorul serverului, te rugăm să consulți wikiul Ruffle pentru ajutor.
error-wasm-invalid =
    Ruffle a întâmpinat o problemă majoră în timp ce încerca să se inițializeze.
    Se pare că această pagină are fișiere lipsă sau nevalide pentru a rula Ruffle.
    Dacă ești administratorul serverului, te rugăm să consulți wikiul Ruffle pentru ajutor.
error-wasm-download =
    Ruffle a întâmpinat o problemă majoră în timp ce încerca să inițializeze.
    Acest lucru se poate rezolva adesea de la sine, așa că poți încerca să reîncarci pagina.
    În caz contrar, te rugăm să contactezi administratorul site-ului web.
error-wasm-disabled-on-edge =
    Ruffle a eșuat la încărcarea componentei de fișier „.wasm”.
    Pentru a remedia acest lucru, încearcă să deschizi setările browserului, să faci clic pe „Confidențialitate, căutare și servicii”, să derulezi în jos și să dezactivezi „Îmbunătățiți-vă securitatea pe web”.
    Acest lucru va permite browserului să încarce fișierele „.wasm” necesare.
    Dacă problema persistă, este posibil să trebuiască să folosești un alt browser.
error-javascript-conflict =
    Ruffle a întâmpinat o problemă majoră în timp ce încerca să se inițializeze.
    Se pare că această pagină folosește cod JavaScript care intră în conflict cu Ruffle.
    Dacă ești administratorul serverului, te invităm să încerci încărcarea fișierului pe o pagină goală.
error-javascript-conflict-outdated = De asemenea, poți încerca să încarci o versiune mai recentă de Ruffle care ar putea ocoli problema (versiunea actuală este învechită: { $buildDate }).
error-csp-conflict =
    Ruffle a întâmpinat o problemă majoră în timp ce încerca să se inițializeze.
    Politica de securitate a conținutului a acestui server web nu permite rularea componentei „.wasm” necesare.
    Dacă ești administratorul serverului, te rugăm să consulți wikiul Ruffle pentru ajutor.
error-unknown =
    Ruffle a întâmpinat o problemă majoră în timp ce încerca să afișeze acest conținut Flash.
    { $outdated ->
        [true] Dacă ești administratorul serverului, te rugăm să încerci să încarci o versiune mai recentă de Ruffle (versiunea actuală este învechită: { $buildDate }).
       *[false] Acest lucru nu ar trebui să se întâmple, așa că am aprecia foarte mult dacă ai putea trimite un bug!
    }
`,"save-manager.ftl":`save-delete-prompt = Sigur vrei să ștergi acest fișier de salvare?
save-reload-prompt =
    Singura cale de a { $action ->
        [delete] șterge
       *[replace] înlocui
    } acest fișier de salvare fără un conflict potențial este de a reîncărca acest conținut. Dorești să continui oricum?
save-download = Descarcă
save-replace = Înlocuiește
save-delete = Șterge
`,"volume-controls.ftl":""},"ru-RU":{"context_menu.ftl":`context-menu-download-swf = Скачать .swf
context-menu-copy-debug-info = Копировать отладочную информацию
context-menu-open-save-manager = Менеджер сохранений
context-menu-about-ruffle =
    { $flavor ->
        [extension] О расширении Ruffle ({ $version })
       *[other] О Ruffle ({ $version })
    }
context-menu-hide = Скрыть это меню
context-menu-exit-fullscreen = Оконный режим
context-menu-enter-fullscreen = Полноэкранный режим
context-menu-volume-controls = Громкость
`,"messages.ftl":`message-cant-embed =
    Ruffle не смог запустить Flash, используемый на этой странице.
    Чтобы обойти эту проблему, вы можете попробовать открыть файл в отдельной вкладке.
panic-title = Что-то пошло не так :(
more-info = Подробнее
run-anyway = Всё равно запустить
continue = Продолжить
report-bug = Сообщить об ошибке
update-ruffle = Обновить Ruffle
ruffle-demo = Веб-демо
ruffle-desktop = Настольное приложение
ruffle-wiki = Открыть вики Ruffle
enable-hardware-acceleration = Похоже, что аппаратное ускорение отключено. Хотя Ruffle может работать, но он может быть очень медленным. Вы можете узнать, как включить аппаратное ускорение, перейдя по ссылке ниже:
enable-hardware-acceleration-link = FAQ - Аппаратное ускорение Chrome
view-error-details = Сведения об ошибке
open-in-new-tab = Открыть в новой вкладке
click-to-unmute = Включить звук
clipboard-message-title = Копирование и вставка в Ruffle
clipboard-message-description =
    { $variant ->
       *[unsupported] Ваш браузер не поддерживает полный доступ к буферу обмена.
        [access-denied]  Доступ к буферу обмена был отклонён.
    } Используйте сочетания клавиш для вырезания, копирования и вставки:
clipboard-message-copy = { " " } копировать
clipboard-message-cut = { " " } вырезать
clipboard-message-paste = { " " } вставить
error-file-protocol =
    Похоже, что вы запускаете Ruffle по протоколу "file:".
    Это не работает, поскольку браузеры блокируют работу многих функций по соображениям безопасности.
    Вместо этого мы предлагаем вам использовать настольное приложение, веб-демо или настроить локальный сервер.
error-javascript-config =
    Возникла серьёзная ошибка из-за неправильной конфигурации JavaScript.
    Если вы являетесь администратором сервера, мы предлагаем вам проверить детали ошибки, чтобы выяснить, какой параметр дал сбой.
    Вы также можете обратиться за помощью к вики Ruffle.
error-wasm-not-found =
    Ruffle не удалось запустить необходимый компонент файла ".wasm".
    Если вы администратор сервера, пожалуйста, убедитесь, что файл был загружен правильно.
    Если проблема не устраняется, вам может потребоваться использовать настройку "publicPath": обратитесь к вики Ruffle.
error-wasm-mime-type =
    Ruffle столкнулся с серьёзной проблемой во время инициализации.
    Этот веб-сервер не предоставляет файлы ".wasm" с правильным типом MIME.
    Если вы администратор сервера, обратитесь за помощью к вики Ruffle.
error-invalid-swf =
    Ruffle не удалось обработать запрашиваемый файл.
    Вероятнее всего, данный SWF повреждён или не является таковым.
error-swf-fetch =
    Ruffle не удалось запустить SWF-файл Flash.
    Вероятнее всего, файл больше не существует, поэтому Ruffle нечего загружать.
    Попробуйте связаться с администратором сайта для получения помощи.
error-swf-cors =
    Ruffle не удалось запустить SWF-файл Flash.
    Скорее всего, доступ к файлу был заблокирован политикой CORS.
    Если вы администратор сервера, обратитесь за помощью к вики Ruffle.
error-wasm-cors =
    Ruffle не удалось загрузить необходимый компонент файла ".wasm".
    Скорее всего, доступ к файлу был заблокирован политикой CORS.
    Если вы администратор сервера, обратитесь за помощью к вики Ruffle.
error-wasm-invalid =
    Ruffle столкнулся с серьёзной проблемой во время инициализации.
    Похоже, что на этой странице отсутствуют файлы для запуска Ruffle или они недействительны.
    Если вы администратор сервера, обратитесь за помощью к вики Ruffle.
error-wasm-download =
    Ruffle столкнулся с серьёзной проблемой во время инициализации.
    Чаще всего эта проблема устраняется сама собою, поэтому вы можете просто перезагрузить страницу.
    Если ошибка продолжает появляться, свяжитесь с администратором сайта.
error-wasm-disabled-on-edge =
    Ruffle не удалось загрузить необходимый компонент файла ".wasm".
    Чтобы исправить эту ошибку, попробуйте отключить в настройках браузера дополнительную конфиденциальность. Это позволит браузеру загрузить необходимые WASM-файлы.
    Если проблема осталась, вам может потребоваться другой браузер.
error-wasm-unsupported-browser =
    Ваш браузер не поддерживает расширения WebAssembly, необходимые для запуска Ruffle.
    Пожалуйста, переключитесь на поддерживаемый браузер.
    Список поддерживаемых браузеров вы можете найти в Вики.
error-javascript-conflict =
    Ruffle столкнулся с серьёзной проблемой во время инициализации.
    Похоже, что эта страница использует конфликтующий с Ruffle код JavaScript.
    Если вы являетесь администратором сервера, мы предлагаем вам попробовать запустить файл на пустой странице.
error-javascript-conflict-outdated = Вы также можете попробовать загрузить последнюю версию Ruffle, которая может обойти проблему (текущая версия устарела: { $buildDate }).
error-csp-conflict =
    Ruffle столкнулся с серьёзной проблемой во время инициализации.
    Политика безопасности содержимого этого веб-сервера не позволяет использовать требуемые компоненты для запуска ".wasm".
    Если вы являетесь администратором сервера, обратитесь за помощью к вики Ruffle.
error-unknown =
    Ruffle столкнулся с серьёзной проблемой при попытке отобразить этот Flash-контент.
    { $outdated ->
        [true] Если вы администратор сервера, попробуйте загрузить более новую версию Ruffle (текущая версия устарела: { $buildDate }).
       *[false] Этого не должно происходить, поэтому мы будем очень признательны, если вы сообщите нам об ошибке!
    }
`,"save-manager.ftl":`save-delete-prompt = Удалить этот файл сохранения?
save-reload-prompt =
    Единственный способ { $action ->
        [delete] удалить
       *[replace] заменить
    } этот файл сохранения без потенциального конфликта – перезапустить запущенный контент. Всё равно продолжить?
save-download = Скачать
save-replace = Заменить
save-delete = Удалить
save-backup-all = Скачать все сохранения
`,"volume-controls.ftl":`volume-controls-mute = Без звука
volume-controls-unmute = Включить звук
`},"sk-SK":{"context_menu.ftl":`context-menu-download-swf = Stiahnuť .swf
context-menu-copy-debug-info = Skopírovať debug info
context-menu-open-save-manager = Otvoriť správcu uložení
context-menu-about-ruffle =
    { $flavor ->
        [extension] O Ruffle rozšírení ({ $version })
       *[other] O Ruffle ({ $version })
    }
context-menu-hide = Skryť menu
context-menu-exit-fullscreen = Ukončiť režim celej obrazovky
context-menu-enter-fullscreen = Prejsť do režimu celej obrazovky
context-menu-volume-controls = Ovládanie hlasitosti
`,"messages.ftl":`message-cant-embed =
    Ruffle nemohol spustiť Flash vložený na tejto stránke.
    Môžete sa pokúsiť otvoriť súbor na samostatnej karte, aby ste sa vyhli tomuto problému.
panic-title = Niečo sa pokazilo :(
more-info = Viac informácií
run-anyway = Spustiť aj tak
continue = Pokračovať
report-bug = Nahlásiť chybu
update-ruffle = Aktualizovať Ruffle
ruffle-demo = Web Demo
ruffle-desktop = Desktopová aplikácia
ruffle-wiki = Zobraziť Ruffle Wiki
enable-hardware-acceleration = Zdá sa, že hardvérová akcelerácia je vypnutá. Aj keď Ruffle funguje správne, môže byť neprimerane pomalý. Ako povoliť hardvérovú akceleráciu zistíte na tomto odkaze:
enable-hardware-acceleration-link = Časté otázky - Hardvérová akcelerácia Chrome
view-error-details = Zobraziť podrobnosti o chybe
open-in-new-tab = Otvoriť na novej karte
click-to-unmute = Kliknutím zapnete zvuk
clipboard-message-title = Kopírovanie a vkladanie v Ruffle
clipboard-message-description =
    { $variant ->
       *[unsupported] Váš prehliadač nepodporuje plný prístup k schránke,
        [access-denied] Prístup k schránke bol odmietnutý,
    } ale namiesto toho môžete vždy použiť tieto skratky:
clipboard-message-copy = { " " } pre kopírovanie
clipboard-message-cut = { " " } pre vystrihovanie
clipboard-message-paste = { " " } pre vloženie
error-file-protocol =
    Zdá sa, že používate Ruffle na protokole "file:".
    To nie je možné, pretože prehliadače blokujú fungovanie mnohých funkcií z bezpečnostných dôvodov.
    Namiesto toho vám odporúčame nastaviť lokálny server alebo použiť web demo či desktopovú aplikáciu.
error-javascript-config =
    Ruffle narazil na problém v dôsledku nesprávnej konfigurácie JavaScriptu.
    Ak ste správcom servera, odporúčame vám skontrolovať podrobnosti o chybe, aby ste zistili, ktorý parameter je chybný.
    Pomoc môžete získať aj na wiki Ruffle.
error-wasm-not-found =
    Ruffle sa nepodarilo načítať požadovaný komponent súboru „.wasm“.
    Ak ste správcom servera, skontrolujte, či bol súbor správne nahraný.
    Ak problém pretrváva, možno budete musieť použiť nastavenie „publicPath“: pomoc nájdete na wiki Ruffle.
error-wasm-mime-type =
    Ruffle narazil na problém pri pokuse o inicializáciu.
    Tento webový server neposkytuje súbory „.wasm“ so správnym typom MIME.
    Ak ste správcom servera, pomoc nájdete na Ruffle wiki.
error-invalid-swf =
    Ruffle nemôže spracovať požadovaný súbor.
    Najpravdepodobnejším dôvodom je, že požadovaný súbor nie je platným súborom SWF.
error-swf-fetch =
    Ruffle sa nepodarilo načítať SWF súbor Flash.
    Najpravdepodobnejším dôvodom je, že súbor už neexistuje, takže Ruffle nemá čo načítať.
    Skúste požiadať o pomoc správcu webovej lokality.
error-swf-cors =
    Ruffle sa nepodarilo načítať SWF súbor Flash.
    Prístup k načítaniu bol pravdepodobne zablokovaný politikou CORS.
    Ak ste správcom servera, pomoc nájdete na Ruffle wiki.
error-wasm-cors =
    Ruffle sa nepodarilo načítať požadovaný komponent súboru „.wasm“.
    Prístup k načítaniu bol pravdepodobne zablokovaný politikou CORS.
    Ak ste správcom servera, pomoc nájdete na Ruffle wiki.
error-wasm-invalid =
    Ruffle narazil na problém pri pokuse o inicializáciu.
    Zdá sa, že na tejto stránke chýbajú alebo sú neplatné súbory na spustenie Ruffle.
    Ak ste správcom servera, pomoc nájdete na Ruffle wiki.
error-wasm-download =
    Ruffle narazil na problém pri pokuse o inicializáciu.
    Problém sa môže vyriešiť aj sám, takže môžete skúsiť stránku načítať znova.
    V opačnom prípade kontaktujte administrátora stránky.
error-wasm-disabled-on-edge =
    Ruffle sa nepodarilo načítať požadovaný komponent súboru „.wasm“.
    Ak chcete tento problém vyriešiť, skúste otvoriť nastavenia prehliadača, kliknite na položku „Ochrana osobných údajov, vyhľadávanie a služby“, prejdite nadol a vypnite možnosť „Zvýšte svoju bezpečnosť na webe“.
    Vášmu prehliadaču to umožní načítať požadované súbory „.wasm“.
    Ak problém pretrváva, možno budete musieť použiť iný prehliadač.
error-wasm-unsupported-browser =
    Prehliadač, ktorý používate, nepodporuje rozšírenie WebAssembly, ktoré Ruffle vyžaduje na spustenie.
    Prejdite na podporovaný prehliadač.
    Zoznam podporovaných prehliadačov nájdete na Wiki.
error-javascript-conflict =
    Ruffle narazil na problém pri pokuse o inicializáciu.
    Zdá sa, že táto stránka používa kód JavaScript, ktorý je v konflikte s Ruffle.
    Ak ste správcom servera, odporúčame vám skúsiť načítať súbor na prázdnu stránku.
error-javascript-conflict-outdated = Môžete sa tiež pokúsiť nahrať novšiu verziu Ruffle, ktorá môže daný problém vyriešiť (aktuálny build je zastaraný: { $buildDate }).
error-csp-conflict =
    Ruffle narazil na problém pri pokuse o inicializáciu.
    Zásady zabezpečenia obsahu tohto webového servera nepovoľujú spustenie požadovaného komponentu „.wasm“.
    Ak ste správcom servera, pomoc nájdete na Ruffle wiki.
error-unknown =
    Ruffle narazil na problém pri pokuse zobraziť tento Flash obsah.
    { $outdated ->
         [true] Ak ste správcom servera, skúste nahrať novšiu verziu Ruffle (aktuálny build je zastaraný: { $buildDate }).
        *[false] Toto by sa nemalo stať, takže by sme naozaj ocenili, keby ste mohli nahlásiť chybu!
    }
`,"save-manager.ftl":`save-delete-prompt = Naozaj chcete odstrániť tento súbor s uloženými pozíciami?
save-reload-prompt =
    Jediný spôsob, ako { $action ->
         [delete] vymazať
        *[replace] nahradiť
    } tento súbor s uloženými pozíciami bez potenciálneho konfliktu je opätovné načítanie tohto obsahu. Chcete napriek tomu pokračovať?
save-download = Stiahnuť
save-replace = Nahradiť
save-delete = Vymazať
save-backup-all = Stiahnuť všetky súbory s uloženými pozíciami
`,"volume-controls.ftl":`volume-controls-mute = Stlmiť
volume-controls-unmute = Zrušiť stlmenie
`},"sv-SE":{"context_menu.ftl":`context-menu-download-swf = Ladda ner .swf
context-menu-copy-debug-info = Kopiera felsökningsinfo
context-menu-open-save-manager = Öppna Sparhanteraren
context-menu-about-ruffle =
    { $flavor ->
        [extension] Om Ruffle-tillägget ({ $version })
       *[other] Om Ruffle ({ $version })
    }
context-menu-hide = Dölj denna meny
context-menu-exit-fullscreen = Avsluta helskärm
context-menu-enter-fullscreen = Helskärm
context-menu-volume-controls = Ljudkontroller
`,"messages.ftl":`message-cant-embed =
    Ruffle kunde inte köra det inbäddade Flashinnehållet på denna sida.
    Du kan försöka öppna filen i en separat flik för att kringgå problemet.
panic-title = Något gick fel :(
more-info = Mer info
run-anyway = Kör ändå
continue = Fortsätt
report-bug = Rapportera Bugg
update-ruffle = Uppdatera Ruffle
ruffle-demo = Webbdemo
ruffle-desktop = Skrivbordsprogram
ruffle-wiki = Se Ruffle-wiki
enable-hardware-acceleration = Det ser ut som att hårdvaruacceleration är avstängt. På grund av det kan Ruffle fungera långsamt. Du kan ta reda på hur man sätter på hårdvaruacceleration genom länken nedan:
enable-hardware-acceleration-link = FAQ - Chrome Hårdvaruacceleration
view-error-details = Visa Felinformation
open-in-new-tab = Öppna i en ny flik
click-to-unmute = Klicka för ljud
clipboard-message-title = Kopierar och klistrar in i Ruffle
clipboard-message-description =
    { $variant ->
       *[unsupported] Din webbläsare har inte fullständig åtkomst till urklipp,
        [access-denied] Urklippsåtkomst har nekats,
    } men du kan använda dom här kortkommandon istället:
clipboard-message-copy = { " " } för att kopiera
clipboard-message-cut = { " " } för att klippa
clipboard-message-paste = { " " } för att klistra in
error-file-protocol =
    Det verkar som att du kör Ruffle på "fil:"-protokollet.
    Detta fungerar inte eftersom webbläsare blockerar många funktioner från att fungera av säkerhetsskäl.
    Istället bjuder vi in dig att sätta upp en lokal server eller antingen använda webbdemon eller skrivbordsprogrammet.
error-javascript-config =
    Ruffle har stött på ett stort fel på grund av en felaktig JavaScript-konfiguration.
    Om du är serveradministratören bjuder vi in dig att kontrollera feldetaljerna för att ta reda på vilken parameter som är felaktig.
    Du kan också konsultera Ruffle-wikin för hjälp.
error-wasm-not-found =
    Ruffle misslyckades ladda ".wasm"-filkomponenten.
    Om du är serveradministratören se till att filen har laddats upp korrekt.
    Om problemet kvarstår kan du behöva använda inställningen "publicPath": konsultera vänligen Ruffle-wikin för hjälp.
error-wasm-mime-type =
    Ruffle har stött på ett stort fel under initialiseringen.
    Denna webbserver serverar inte ".wasm"-filer med korrekt MIME-typ.
    Om du är serveradministratören konsultera vänligen Ruffle-wikin för hjälp.
error-invalid-swf =
    Ruffle kan inte läsa den begärda filen.
    Det mest sannolika skälet är att den begärda filen inte är en giltig SWF.
error-swf-fetch =
    Ruffle misslyckades ladda SWF-filen.
    Det mest sannolika skälet är att filen inte längre existerar, så det finns inget för Ruffle att köra.
    Försök att kontakta webbplatsadministratören för hjälp.
error-swf-cors =
    Ruffle misslyckades ladda SWF-filen.
    Åtkomst att hämta har sannolikt blockerats av CORS-policy.
    Om du är serveradministratören konsultera vänligen Ruffle-wikin för hjälp.
error-wasm-cors =
    Ruffle misslyckades ladda ".wasm"-filkomponenten.
    Åtkomst att hämta har sannolikt blockerats av CORS-policy.
    Om du är serveradministratören konsultera vänligen Ruffle-wikin för hjälp.
error-wasm-invalid =
    Ruffle har stött på ett stort fel under initialiseringen.
    Det verkar som att den här sidan har saknade eller ogiltiga filer för att köra Ruffle.
    Om du är serveradministratören konsultera vänligen Ruffle-wikin för hjälp.
error-wasm-download =
    Ruffle har stött på ett stort fel under initialiseringen.
    Detta kan ofta lösas av sig själv så du kan prova att ladda om sidan.
    Kontakta annars vänligen webbplatsens administratör.
error-wasm-disabled-on-edge =
    Ruffle misslyckades ladda ".wasm"-filkomponenten.
    För att åtgärda detta försök att öppna webbläsarens inställningar, klicka på "Sekretess, sökning och tjänster", bläddra ner och stäng av "Förbättra säkerheten på webben".
    Detta tillåter din webbläsare att ladda ".wasm"-filerna.
    Om problemet kvarstår kan du behöva använda en annan webbläsare.
error-javascript-conflict =
    Ruffle har stött på ett stort fel under initialiseringen.
    Det verkar som att den här sidan använder JavaScript-kod som stör Ruffle.
    Om du är serveradministratören bjuder vi in dig att försöka köra filen på en blank sida.
error-javascript-conflict-outdated = Du kan också försöka ladda upp en nyare version av Ruffle, vilket kan kringgå problemet (nuvarande version är utdaterad: { $buildDate }).
error-csp-conflict =
    Ruffle har stött på ett stort fel under initialiseringen.
    Webbserverns Content Security Policy tillåter inte ".wasm"-komponenten att köra.
    Om du är serveradministratören konsultera vänligen Ruffle-wikin för hjälp.
error-unknown =
    Ruffle har stött på ett stort fel medan den försökte visa Flashinnehållet.
    { $outdated ->
        [true] Om du är serveradministratören försök att ladda upp en nyare version av Ruffle (nuvarande version är utdaterad: { $buildDate }).
       *[false] Detta är inte tänkt att hända så vi skulle verkligen uppskatta om du kunde rapportera in en bugg!
    }
`,"save-manager.ftl":`save-delete-prompt = Är du säker på att du vill radera sparfilen?
save-reload-prompt =
    Det enda sättet att { $action ->
        [delete] radera
       *[replace] ersätta
    } denna sparfil utan potentiell konflikt är att ladda om innehållet. Vill du fortsätta ändå?
save-download = Ladda ner
save-replace = Ersätt
save-delete = Radera
save-backup-all = Ladda ner alla sparfiler
`,"volume-controls.ftl":`volume-controls-mute = Stäng av ljud
`},"tr-TR":{"context_menu.ftl":`context-menu-download-swf = İndir .swf
context-menu-copy-debug-info = Hata ayıklama bilgisini kopyala
context-menu-open-save-manager = Kayıt Yöneticisini Aç
context-menu-about-ruffle =
    { $flavor ->
        [extension] Ruffle Uzantısı Hakkında ({ $version })
       *[other] Ruffle Hakkında ({ $version })
    }
context-menu-hide = Bu menüyü gizle
context-menu-exit-fullscreen = Tam ekrandan çık
context-menu-enter-fullscreen = Tam ekran yap
context-menu-volume-controls = Ses kontrolleri
`,"messages.ftl":`message-cant-embed =
    Ruffle, bu sayfaya gömülü Flash'ı çalıştıramadı.
    Bu sorunu ortadan kaldırmak için dosyayı ayrı bir sekmede açmayı deneyebilirsiniz.
panic-title = Bir şeyler yanlış gitti :(
more-info = Daha fazla bilgi
run-anyway = Yine de çalıştır
continue = Devam et
report-bug = Hata Bildir
update-ruffle = Ruffle'ı Güncelle
ruffle-demo = Ağ Demosu
ruffle-desktop = Masaüstü Uygulaması
ruffle-wiki = Ruffle Wiki'yi Görüntüle
enable-hardware-acceleration = Görünüşe göre donanım hızlandırma etkin değil. Ruffle çalışabilir ancak fazlasıyla yavaş olabilir. Donanım hızlandırmayı nasıl etkinleştirebiliceğiniz hakkında bu linkten bilgi edinebilirsiniz:
enable-hardware-acceleration-link = SSS - Chrome Donanım Hızlandırma
view-error-details = Hata Ayrıntılarını Görüntüle
open-in-new-tab = Yeni sekmede aç
click-to-unmute = Sesi açmak için tıklayın
clipboard-message-title = Ruffle'da kopyalama ve yapıştırma
clipboard-message-description =
    { $variant ->
    *[unsupported] Tarayıcınız tam panoya erişimi desteklemiyor,
    [access-denied] Pano erişimi reddedildi,
    } ancak pano yerine her zaman bu kısayolları kullanabilirsiniz:
clipboard-message-copy = { " " } kopyalamak için
clipboard-message-cut = { " " } kesmek için
clipboard-message-paste = { " " } yapıştırmak için
error-file-protocol =
    Görünüşe göre Ruffle'ı "dosya:" protokolünde çalıştırıyorsunuz.
    Tarayıcılar güvenlik nedenleriyle birçok özelliğin çalışmasını engellediğinden bu işe yaramaz.
    Bunun yerine, sizi yerel bir sunucu kurmaya veya ağın demosunu ya da masaüstü uygulamasını kullanmaya davet ediyoruz.
error-javascript-config =
    Ruffle, yanlış bir JavaScript yapılandırması nedeniyle önemli bir sorunla karşılaştı.
    Sunucu yöneticisiyseniz, hangi parametrenin hatalı olduğunu bulmak için sizi hata ayrıntılarını kontrol etmeye davet ediyoruz.
    Yardım için Ruffle wiki'sine de başvurabilirsiniz.
error-wasm-not-found =
    Ruffle gerekli ".wasm" dosya bileşenini yükleyemedi.
    Sunucu yöneticisi iseniz, lütfen dosyanın doğru bir şekilde yüklendiğinden emin olun.
    Sorun devam ederse, "publicPath" ayarını kullanmanız gerekebilir: yardım için lütfen Ruffle wiki'sine başvurun.
error-wasm-mime-type =
    Ruffle, başlatmaya çalışırken önemli bir sorunla karşılaştı.
    Bu web sunucusu, doğru MIME tipinde ".wasm" dosyaları sunmuyor.
    Sunucu yöneticisiyseniz, yardım için lütfen Ruffle wiki'sine başvurun.
error-invalid-swf =
    Ruffle istenen dosyayı ayrıştıramıyor.
    Bunun en olası nedeni, istenen dosyanın geçerli bir SWF olmamasıdır.
error-swf-fetch =
    Ruffle, Flash SWF dosyasını yükleyemedi.
    Bunun en olası nedeni, dosyanın artık mevcut olmaması ve bu nedenle Ruffle'ın yükleyeceği hiçbir şeyin olmamasıdır.
    Yardım için web sitesi yöneticisiyle iletişime geçmeyi deneyin.
error-swf-cors =
    Ruffle, Flash SWF dosyasını yükleyemedi.
    Getirme erişimi muhtemelen CORS politikası tarafından engellenmiştir.
    Sunucu yöneticisiyseniz, yardım için lütfen Ruffle wiki'sine başvurun.
error-wasm-cors =
    Ruffle gerekli ".wasm" dosya bileşenini yükleyemedi.
    Getirme erişimi muhtemelen CORS politikası tarafından engellenmiştir.
    Sunucu yöneticisiyseniz, yardım için lütfen Ruffle wiki'sine başvurun.
error-wasm-invalid =
    Ruffle, başlatmaya çalışırken önemli bir sorunla karşılaştı.
    Görünüşe göre bu sayfada Ruffle'ı çalıştırmak için eksik veya geçersiz dosyalar var.
    Sunucu yöneticisiyseniz, yardım için lütfen Ruffle wiki'sine başvurun.
error-wasm-download =
    Ruffle, başlatmaya çalışırken önemli bir sorunla karşılaştı.
    Bu genellikle kendi kendine çözülebilir, bu nedenle sayfayı yeniden yüklemeyi deneyebilirsiniz.
    Aksi takdirde, lütfen site yöneticisiyle iletişime geçin.
error-wasm-disabled-on-edge =
    Ruffle gerekli ".wasm" dosya bileşenini yükleyemedi.
    Bunu düzeltmek için tarayıcınızın ayarlarını açın, "Gizlilik, arama ve hizmetler"i tıklayın, aşağı kaydırın ve "Web'de güvenliğinizi artırın"ı kapatmayı deneyin.
    Bu, tarayıcınızın gerekli ".wasm" dosyalarını yüklemesine izin verecektir.
    Sorun devam ederse, farklı bir tarayıcı kullanmanız gerekebilir.
error-javascript-conflict =
    Ruffle, başlatmaya çalışırken önemli bir sorunla karşılaştı.
    Görünüşe göre bu sayfa, Ruffle ile çakışan JavaScript kodu kullanıyor.
    Sunucu yöneticisiyseniz, sizi dosyayı boş bir sayfaya yüklemeyi denemeye davet ediyoruz.
error-javascript-conflict-outdated = Ayrıca sorunu giderebilecek daha yeni bir Ruffle sürümü yüklemeyi de deneyebilirsiniz (mevcut yapım eskimiş: { $buildDate }).
error-csp-conflict =
    Ruffle, başlatmaya çalışırken önemli bir sorunla karşılaştı.
    Bu web sunucusunun İçerik Güvenliği Politikası, gerekli ".wasm" bileşeninin çalışmasına izin vermiyor.
    Sunucu yöneticisiyseniz, yardım için lütfen Ruffle wiki'sine bakın.
error-unknown =
    Ruffle, bu Flash içeriğini görüntülemeye çalışırken önemli bir sorunla karşılaştı.
    { $outdated ->
        [true] Sunucu yöneticisiyseniz, lütfen Ruffle'ın daha yeni bir sürümünü yüklemeyi deneyin (mevcut yapım eskimiş: { $buildDate }).
       *[false] Bunun olmaması gerekiyor, bu yüzden bir hata bildirebilirseniz çok memnun oluruz!
    }
`,"save-manager.ftl":`save-delete-prompt = Bu kayıt dosyasını silmek istediğinize emin misiniz?
save-reload-prompt =
    Bu kaydetme dosyasını potansiyel çakışma olmadan { $action ->
        [delete] silmenin
       *[replace] değiştirmenin
    } tek yolu, bu içeriği yeniden yüklemektir. Yine de devam etmek istiyor musunuz?
save-download = İndir
save-replace = Değiştir
save-delete = Sil
save-backup-all = Tüm kayıt dosyalarını indir
`,"volume-controls.ftl":`volume-controls-mute = Sustur
volume-controls-unmute = Susturmayı kaldır
`},"uk-UA":{"context_menu.ftl":`context-menu-download-swf = Завантажити .swf
context-menu-copy-debug-info = Копіювати інформацію про налагодження
context-menu-open-save-manager = Відкрити менеджер збереження
context-menu-about-ruffle =
    { $flavor ->
        [extension] Про розширення Ruffle ({ $version })
       *[other] Про Ruffle ({ $version })
    }
context-menu-hide = Приховати це меню
context-menu-exit-fullscreen = Вийти з повноекранного режиму
context-menu-enter-fullscreen = Перейти в повноекранний режим
context-menu-volume-controls = Елементи керування гучністю
`,"messages.ftl":`message-cant-embed = Ruffle не вдалося запустити Flash, вбудований у цю сторінку. Ви можете спробувати відкрити файл в окремій вкладці, щоб уникнути цієї проблеми.
panic-title = Щось пішло не так :(
more-info = Більше інформації
run-anyway = Запустити все одно
continue = Продовжити
report-bug = Повідомити про помилку
update-ruffle = Оновити Ruffle
ruffle-demo = Вебдемонстрація
ruffle-desktop = Застосунок робочого столу
ruffle-wiki = Переглянути Ruffle Wiki
enable-hardware-acceleration = Схоже, апаратне прискорення вимкнено. Хоча Ruffle може працювати, це може бути дуже повільним. Ви можете дізнатися, як увімкнути апаратне прискорення, перейшовши за посиланням нижче:
enable-hardware-acceleration-link = FAQ - Апаратне прискорення Chrome
view-error-details = Переглянути деталі помилки
open-in-new-tab = Відкрити в новій вкладці
click-to-unmute = Натисніть, щоб увімкнути звук
clipboard-message-title = Копіювання та вставлення в Ruffle
clipboard-message-description =
    { $variant ->
       *[unsupported] Ваш браузер не підтримує повний доступ до буфера обміну,
        [access-denied] У доступі до буфера обміну відмовлено,
    } але ви завжди можете скористатися цими ярликами:
clipboard-message-copy = { " " } для копіювання
clipboard-message-cut = { " " } для вирізання
clipboard-message-paste = { " " } для вставлення
error-file-protocol = Здається, ви запускаєте Ruffle за протоколом "file:". Це не працює, оскільки браузери блокують роботу багатьох функцій з міркувань безпеки. Замість цього ми запрошуємо вас налаштувати локальний сервер або скористатися вебдемонстрацією чи застосунком робочого столу.
error-javascript-config = Ruffle зіткнувся з серйозною проблемою через неправильну конфігурацію JavaScript. Якщо ви адміністратор сервера, ми пропонуємо вам перевірити деталі помилки, щоб дізнатися, який параметр є несправним. Ви також можете звернутися за допомогою до Ruffle Wiki.
error-wasm-not-found = Ruffle не вдалося завантажити необхідний файловий компонент ".wasm". Якщо ви адміністратор сервера, переконайтеся, що файл завантажено правильно. Якщо проблема не зникає, можливо, вам знадобиться скористатися налаштуванням "publicPath": будь ласка, зверніться до Ruffle Wiki, щоб отримати допомогу.
error-wasm-mime-type = Ruffle зіткнувся з серйозною проблемою під час спроби ініціалізації. Цей вебсервер не обслуговує файли ".wasm" із правильним типом MIME. Якщо ви адміністратор сервера, зверніться до Ruffle Wiki, щоб отримати допомогу.
error-invalid-swf = Ruffle не може проаналізувати файл запиту. Найімовірніша причина полягає в тому, що файл запиту не є дійсним SWF.
error-swf-fetch = Ruffle не вдалося завантажити файл Flash SWF. Найімовірніша причина полягає в тому, що файл більше не існує, тому Ruffle нема чого завантажити. Спробуйте звернутися по допомогу до адміністратора сайту.
error-swf-cors = Ruffle не вдалося завантажити файл Flash SWF. Можливо, доступ до отримання було заблоковано політикою CORS. Якщо ви адміністратор сервера, зверніться до Ruffle Wiki, щоб отримати допомогу.
error-wasm-cors = Ruffle не вдалося завантажити необхідний файловий компонент ".wasm". Можливо, доступ до отримання було заблоковано політикою CORS. Якщо ви адміністратор сервера, зверніться до Ruffle Wiki, щоб отримати допомогу.
error-wasm-invalid = Ruffle зіткнувся з серйозною проблемою під час спроби ініціалізації. Здається, на цій сторінці відсутні або недійсні файли для запуску Ruffle. Якщо ви адміністратор сервера, зверніться до Ruffle Wiki, щоб отримати допомогу.
error-wasm-download = Ruffle зіткнувся з серйозною проблемою під час спроби ініціалізації. Часто це може вирішитися само собою, тому ви можете спробувати оновити сторінку. В іншому випадку зверніться до адміністратора сайту.
error-wasm-disabled-on-edge = Ruffle не вдалося завантажити необхідний файловий компонент ".wasm". Щоб виправити це, спробуйте відкрити налаштування вашого браузера, натиснути «Конфіденційність, пошук і служби», прокрутити вниз і вимкнути «Підвищити безпеку в інтернеті». Це дозволить вашому браузеру завантажити необхідні файли «.wasm». Якщо проблема не зникає, можливо, вам доведеться скористатися іншим браузером.
error-javascript-conflict = Ruffle зіткнувся з серйозною проблемою під час спроби ініціалізації. Схоже, що ця сторінка використовує код JavaScript, який конфліктує з Ruffle. Якщо ви адміністратор сервера, ми запрошуємо вас спробувати завантажити файл на порожній сторінці.
error-javascript-conflict-outdated = Ви також можете спробувати завантажити новішу версію Ruffle, яка може уникнути проблеми (поточна збірка застаріла: { $buildDate }).
error-csp-conflict = Ruffle зіткнувся з серйозною проблемою під час спроби ініціалізації. Політика безпеки контенту цього вебсервера не дозволяє запускати необхідний компонент ".wasm". Якщо ви адміністратор сервера, зверніться до Ruffle Wiki, щоб отримати допомогу.
error-unknown =
    Ruffle зіткнувся з серйозною проблемою під час спроби відобразити цей Flash контент.
    { $outdated ->
        [true] Якщо ви адміністратор сервера, спробуйте завантажити новішу версію Ruffle (поточна збірка застаріла: { $buildDate }).
       *[false] Цього не повинно відбуватися, тому ми будемо дуже вдячні, якщо ви повідомите про помилку!
    }
`,"save-manager.ftl":`save-delete-prompt = Ви впевнені, що хочете видалити цей файл збереження?
save-reload-prompt =
    Єдиний спосіб { $action ->
        [delete] видалити
       *[replace] замінити
    } цей файл збереження без потенційного конфлікту є перезавантаження цього контенту. Ви все одно бажаєте продовжити?
save-download = Завантажити
save-replace = Замінити
save-delete = Видалити
save-backup-all = Завантажити всі файли збереження
`,"volume-controls.ftl":`volume-controls-mute = Вимкнути звук
volume-controls-unmute = Увімкнути звук
`},"vi-VN":{"context_menu.ftl":`context-menu-download-swf = Tải về file .swf
context-menu-copy-debug-info = Sao chép thông tin gỡ lỗi
context-menu-open-save-manager = Mở trình quản lý lưu file
context-menu-about-ruffle =
    { $flavor ->
        [extension] Giới thiệu về phần mở rộng Ruffle ({ $version })
       *[other] Giới thiệu về Ruffle ({ $version })
    }
context-menu-hide = Ẩn menu này
context-menu-exit-fullscreen = Thoát chế độ toàn màn hình
context-menu-enter-fullscreen = Chuyển sang chế độ toàn màn hình
context-menu-volume-controls = Tuỳ chỉnh âm lượng
`,"messages.ftl":`message-cant-embed =
    Ruffle không thể chạy nội dung Flash được nhúng trong trang này.
    Bạn có thể thử mở tệp ở một tab riêng biệt để tránh sự cố này.
panic-title = Có lỗi xảy ra :(
more-info = Thông tin thêm
run-anyway = Vẫn khởi chạy
continue = Tiếp tục
report-bug = Báo cáo lỗi
update-ruffle = Cập nhật Ruffle
ruffle-demo = Trang demo
ruffle-desktop = Ứng dụng desktop
ruffle-wiki = Truy cập Ruffle Wiki
enable-hardware-acceleration = Có vẻ như tăng tốc phần cứng đã bị vô hiệu hoá. Mặc dù Ruffle vẫn có thể hoạt động, nhưng nó có thể rất chậm. Bạn có thể tìm cách bật tăng tốc phần cứng bằng cách làm theo hướng dẫn trong đường dẫn bên dưới:
enable-hardware-acceleration-link = Các câu hỏi thường gặp - Tăng tốc phần cứng cho Chrome
view-error-details = Xem chi tiết lỗi
open-in-new-tab = Mở trong thẻ mới
click-to-unmute = Bấm để bật tiếng
clipboard-message-title = Sao chép và dán bên trong Ruffle
clipboard-message-description =
    { $variant ->
       *[unsupported] Trình duyệt của bạn không hỗ trợ đầy đủ truy xuất bộ nhớ tạm,
        [access-denied] Truy xuất bộ nhớ tạm bị từ chối,
    } nhưng bạn luôn có thể sử dụng phím tắt để làm điều đó:
clipboard-message-copy = { " " } để sao chép
clipboard-message-cut = { " " } để cắt
clipboard-message-paste = { " " } để dán
error-file-protocol =
    Có vẻ như bạn đang chạy Ruffle trên giao thức "file:".
    Điều này không được phép vì trình duyệt chặn nhiều tính năng hoạt động vì lý do bảo mật.
    Thay vào đó, chúng tôi mời bạn thiết lập một máy chủ cục bộ hoặc sử dụng trang demo hoặc ứng dụng desktop.
error-javascript-config =
    Ruffle đã gặp phải sự cố lớn do cấu hình JavaScript không chính xác.
    Nếu bạn là người quản trị máy chủ, chúng tôi mời bạn kiểm tra chi tiết lỗi để tìm ra tham số nào không đúng.
    Bạn cũng có thể tham khảo thông tin trợ giúp từ Ruffle Wiki.
error-wasm-not-found =
    Ruffle không tải được tệp ".wasm" cần thiết.
    Nếu bạn là người quản trị máy chủ, vui lòng đảm bảo tệp đã được tải lên đúng cách.
    Nếu sự cố vẫn tiếp diễn, bạn có thể cần phải sử dụng thiết lập "publicPath": vui lòng tham khảo thông tin trợ giúp từ Ruffle Wiki.
error-wasm-mime-type =
    Ruffle đã gặp phải một vấn đề lớn khi cố gắng khởi tạo.
    Máy chủ web không cung cấp tệp ".wasm" với đúng loại MIME.
    Nếu bạn là quản trị viên máy chủ, vui lòng tham khảo wiki Ruffle để được trợ giúp.
error-invalid-swf =
    Ruffle không thể phân tích tệp được yêu cầu.
    Khả năng lớn nhất là do tệp được yêu cầu không phải là một tệp SWF hợp lệ.
error-swf-fetch =
    Ruffle không tải được tệp Flash SWF.
    Khả năng lớn nhất là do tệp không còn tồn tại nữa, vì vậy không có gì để Ruffle tải.
    Hãy thử liên hệ với quản trị viên trang web để được trợ giúp.
error-swf-cors =
    Ruffle không tải được tệp Flash SWF.
    Quyền truy cập để lấy dữ liệu có thể đã bị chính sách CORS chặn.
    Nếu bạn là quản trị viên máy chủ, vui lòng tham khảo Ruffle Wiki để được trợ giúp.
error-wasm-cors =
    Ruffle không tải được tệp ".wasm" cần thiết.
    Quyền truy cập để lấy dữ liệu có thể đã bị chính sách CORS chặn.
    Nếu bạn là quản trị viên máy chủ, vui lòng tham khảo wiki Ruffle để được trợ giúp.
error-wasm-invalid =
    Ruffle đã gặp phải một vấn đề lớn khi cố gắng khởi tạo.
    Có vẻ như trang này có các tệp bị thiếu hoặc không hợp lệ để chạy Ruffle.
    Nếu bạn là quản trị viên máy chủ, vui lòng tham khảo Ruffle Wiki để được trợ giúp.
error-wasm-download =
    Ruffle đã gặp phải một vấn đề lớn khi cố gắng khởi tạo.
    Vấn đề này thường có thể tự giải quyết, vì vậy bạn có thể thử tải lại trang.
    Nếu không, vui lòng liên hệ với quản trị viên trang web.
error-wasm-disabled-on-edge =
    Ruffle không tải được thành phần tệp ".wasm" cần thiết.
    Để khắc phục sự cố này, hãy thử mở cài đặt của trình duyệt, nhấp vào "Quyền riêng tư, tìm kiếm và dịch vụ", cuộn xuống và tắt "Nâng cao bảo mật trên web".
    Thao tác này sẽ cho phép trình duyệt của bạn tải các tệp ".wasm" cần thiết.
    Nếu sự cố vẫn tiếp diễn, bạn có thể phải sử dụng trình duyệt khác.
error-wasm-unsupported-browser =
    Trình duyệt bạn đang sử dụng không hỗ trợ tiện ích mở rộng WebAssembly cần thiết để chạy Ruffle.
    Vui lòng chuyển sang trình duyệt được hỗ trợ.
    Bạn có thể xem danh sách các trình duyệt được hỗ trợ trên Ruffle Wiki.
error-javascript-conflict =
    Ruffle gặp phải một vấn đề lớn khi cố gắng khởi tạo.
    Có vẻ trang này sử dụng mã JavaScript xung đột với Ruffle.
    Nếu bạn là quản trị viên máy chủ, chúng tôi mời bạn thử tải tệp trên một trang trắng.
error-javascript-conflict-outdated = Bạn cũng có thể thử tải lên phiên bản Ruffle mới hơn để xem sự cố có thể được khắc phục (bản dựng hiện tại đã cũ: { $buildDate }).
error-csp-conflict =
    Ruffle đã gặp phải một vấn đề lớn khi cố gắng khởi tạo.
    Chính sách bảo mật nội dung của máy chủ web này không cho phép chạy thành phần tệp ".wasm" bắt buộc phải có để hoạt động.
    Nếu bạn là quản trị viên máy chủ, vui lòng tham khảo Ruffle Wiki để được trợ giúp.
error-unknown =
    Ruffle đã gặp phải một vấn đề lớn khi cố gắng hiển thị nội dung Flash này.
    { $outdated ->
        [true] Nếu bạn là quản trị viên máy chủ, vui lòng thử tải lên phiên bản Ruffle mới hơn (bản dựng hiện tại đã cũ: { $buildDate }).
       *[false] Vấn đề này đáng lẽ không nên xảy ra, vì vậy chúng tôi thực sự biết ơn nếu bạn có thể báo cáo lỗi!
    }
`,"save-manager.ftl":`save-delete-prompt = Bạn có chắc chắn muốn xoá tệp đã lưu này không?
save-reload-prompt =
    Cách duy nhất để { $action ->
        [delete] xoá
       *[replace] thay thế
    } tệp đã lưu này mà không có nguy cơ xung đột là tải lại nội dung này. Bạn có muốn tiếp tục không?
save-download = Tải về
save-replace = Thay thế
save-delete = Xoá
save-backup-all = Tải xuống tất cả tệp đã lưu
`,"volume-controls.ftl":`volume-controls-mute = Tắt tiếng
volume-controls-unmute = Bật tiếng
`},"zh-CN":{"context_menu.ftl":`context-menu-download-swf = 下载 .swf
context-menu-copy-debug-info = 复制调试信息
context-menu-open-save-manager = 打开存档管理器
context-menu-about-ruffle =
    { $flavor ->
        [extension] 关于 Ruffle 扩展 ({ $version })
       *[other] 关于 Ruffle ({ $version })
    }
context-menu-hide = 隐藏此菜单
context-menu-exit-fullscreen = 退出全屏
context-menu-enter-fullscreen = 进入全屏
context-menu-volume-controls = 音量控制
`,"messages.ftl":`message-cant-embed =
    Ruffle 无法运行嵌入在此页面中的 Flash。
    您可以尝试在单独的标签页中打开该文件，以回避此问题。
panic-title = 出了些问题 :(
more-info = 更多信息
run-anyway = 仍然运行
continue = 继续
report-bug = 反馈问题
update-ruffle = 更新 Ruffle
ruffle-demo = 网页演示
ruffle-desktop = 桌面应用程序
ruffle-wiki = 查看 Ruffle Wiki
enable-hardware-acceleration = 看起来硬件加速已被禁用。虽然Ruffle可能可以运行，但速度可能会非常慢。您可以通过下面的链接了解如何启用硬件加速：
enable-hardware-acceleration-link = 常见问题 - Chrome 硬件加速
view-error-details = 查看错误详情
open-in-new-tab = 在新标签页中打开
click-to-unmute = 点击取消静音
clipboard-message-title = 在Ruffle中复制粘贴
clipboard-message-description =
    { $variant ->
       *[unsupported] 您的浏览器不支持完全剪贴板访问,
        [access-denied] 对剪贴板的访问已被拒绝,
    } 但您仍然可以使用以下快捷键:
clipboard-message-copy = { " " } 复制
clipboard-message-cut = { " " } 剪切
clipboard-message-paste = { " " } 粘贴
error-canvas-reload = Canvas 渲染器已在使用中时，无法使用 Canvas 渲染器重新加载。
error-file-protocol =
    看来您正在 "file:" 协议上使用 Ruffle。
    由于浏览器以安全原因阻止许多功能，因此这不起作用。
    相反我们邀请您设置本地服务器或使用网页演示或桌面应用程序。
error-javascript-config =
    由于错误的 JavaScript 配置，Ruffle 遇到了一个重大问题。
    如果您是服务器管理员，我们邀请您检查错误详细信息，以找出哪个参数有故障。
    您也可以查阅 Ruffle 的 Wiki 获取帮助。
error-wasm-not-found =
    Ruffle 无法加载所需的 “.wasm” 文件组件。
    如果您是服务器管理员，请确保文件已正确上传。
    如果问题仍然存在，您可能需要使用 “publicPath” 设置：请查看 Ruffle 的 Wiki 获取帮助。
error-wasm-mime-type =
    Ruffle 在试图初始化时遇到了一个重大问题。
    该网站服务器没有提供 ".asm” 文件正确的 MIME 类型。
    如果您是服务器管理员，请查阅 Ruffle Wiki 获取帮助。
error-invalid-swf =
    Ruffle无法解析请求的文件。
    最有可能的原因是该请求文件不是一个合法的SWF文件。
error-swf-fetch =
    Ruffle 无法加载 Flash SWF 文件。
    最可能的原因是文件不再存在所以 Ruffle 没有要加载的内容。
    请尝试联系网站管理员寻求帮助。
error-swf-cors =
    Ruffle 无法加载 Flash SWF 文件。
    获取权限可能被 CORS 策略阻止。
    如果您是服务器管理员，请参考 Ruffle Wiki 获取帮助。
error-wasm-cors =
    Ruffle 无法加载所需的“.wasm”文件组件。
    获取权限可能被 CORS 策略阻止。
    如果您是服务器管理员，请查阅 Ruffle Wiki 获取帮助。
error-wasm-invalid =
    Ruffle 在试图初始化时遇到了一个重大问题。
    这个页面似乎缺少文件来运行 Curl。
    如果您是服务器管理员，请查阅 Ruffle Wiki 获取帮助。
error-wasm-download =
    Ruffle 在试图初始化时遇到了一个重大问题。
    这通常可以自行解决，因此您可以尝试重新加载页面。
    否则请联系网站管理员。
error-wasm-disabled-on-edge =
    Ruffle 无法加载所需的 “.wasm” 文件组件。
    要解决这个问题，请尝试打开您的浏览器设置，单击"隐私、搜索和服务"，向下滚动并关闭"增强 Web 安全性"。
    这将允许您的浏览器加载所需的 “.wasm” 文件。
    如果问题仍然存在，您可能必须使用不同的浏览器。
error-wasm-unsupported-browser =
    您使用的浏览器不支持 Ruffle 运行所需的 WebAssembly 扩展。
    请切换到支持的浏览器。
    您可以在 Wiki 上找到支持的浏览器列表。
error-javascript-conflict =
    Ruffle 在试图初始化时遇到了一个重大问题。
    这个页面似乎使用了与 Ruffle 冲突的 JavaScript 代码。
    如果您是服务器管理员，我们建议您尝试在空白页面上加载文件。
error-javascript-conflict-outdated = 您还可以尝试上传可能规避该问题的最新版本的 (当前构建已过时: { $buildDate })。
error-csp-conflict =
    Ruffle 在试图初始化时遇到了一个重大问题。
    该网站服务器的内容安全策略不允许运行所需的 “.wasm” 组件。
    如果您是服务器管理员，请查阅 Ruffle Wiki 获取帮助。
error-unknown =
    Ruffle 在试图显示此 Flash 内容时遇到了一个重大问题。
    { $outdated ->
        [true] 如果您是服务器管理员，请尝试上传更新的 Ruffle 版本 (当前版本已过时: { $buildDate }).
       *[false] 这不应该发生，因此如果您可以报告错误，我们将非常感谢！
    }
`,"save-manager.ftl":`save-delete-prompt = 确定要删除此存档吗？
save-reload-prompt =
    为了避免潜在的冲突，{ $action ->
        [delete] 删除
       *[replace] 替换
    } 此存档文件需要重新加载当前内容。是否仍然继续？
save-download = 下载
save-replace = 替换
save-delete = 删除
save-backup-all = 下载所有存档文件
`,"volume-controls.ftl":`volume-controls-mute = 静音
volume-controls-unmute = 取消静音
`},"zh-TW":{"context_menu.ftl":`context-menu-download-swf = 下載SWF檔案
context-menu-copy-debug-info = 複製除錯資訊
context-menu-open-save-manager = 開啟存檔管理器
context-menu-about-ruffle =
    { $flavor ->
        [extension] 關於Ruffle擴充功能 ({ $version })
       *[other] 關於Ruffle ({ $version })
    }
context-menu-hide = 隱藏菜單
context-menu-exit-fullscreen = 退出全螢幕
context-menu-enter-fullscreen = 進入全螢幕
context-menu-volume-controls = 音量控制
`,"messages.ftl":`message-cant-embed =
    Ruffle 無法執行本頁面內嵌的 Flash。
    您可以嘗試在單獨的標籤頁中開啟檔案，以避免此問題。
panic-title = 發生了某些錯誤 :(
more-info = 更多資訊
run-anyway = 直接執行
continue = 繼續
report-bug = 回報BUG
update-ruffle = 更新Ruffle
ruffle-demo = 網頁展示
ruffle-desktop = 桌面應用程式
ruffle-wiki = 查看Ruffle Wiki
enable-hardware-acceleration = 看起來硬體加速已停用。雖然 Ruffle 可以運作，但速度可能很慢。您可以透過以下連結瞭解如何啟用硬體加速：
enable-hardware-acceleration-link = FAQ - Chrome硬體加速
view-error-details = 檢視錯誤詳細資料
open-in-new-tab = 開啟新增分頁
click-to-unmute = 點擊以取消靜音
clipboard-message-title = 在 Ruffle 中複製和貼上
clipboard-message-description =
    { $variant ->
       *[unsupported] 您的瀏覽器不支援完整的剪貼板存取、
        [access-denied] 已拒絕存取剪貼簿、
    } 但您可以使用這些捷徑來代替：
clipboard-message-copy = { " " } 複製
clipboard-message-cut = { " " } 剪下
clipboard-message-paste = { " " } 貼上
error-file-protocol =
    您似乎是在 「file: 」協定上執行 Ruffle。
    這並不可行，因為瀏覽器基於安全理由會阻擋許多功能的運作。
    相反，我們邀請您設定本機伺服器，或使用網頁示範或桌面應用程式。
error-javascript-config =
    由於 JavaScript 設定不正確，Ruffle 遇到了重大問題。
    如果您是伺服器管理員，我們邀請您檢查錯誤細節，找出是哪個參數出了問題。
    您也可以參考 Ruffle wiki 以獲得協助。
error-wasm-not-found =
    Ruffle 未能載入所需的 「.wasm」 檔案元件。
    如果您是伺服器管理員，請確認檔案已正確上傳。
    如果問題仍然存在，您可能需要使用「publicPath」設定：請參閱 Ruffle wiki 以獲得協助。
error-wasm-mime-type =
    Ruffle 在嘗試初始化時遇到重大問題。
    此 Web 伺服器無法提供 MIME 類型正確的 「.wasm 」檔案。
    如果您是伺服器管理員，請參閱 Ruffle wiki 以獲得協助。
error-invalid-swf =
    Ruffle 無法解析請求的檔案。
    最可能的原因是請求的檔案不是有效的 SWF。
error-swf-fetch =
    Ruffle 未能載入 Flash SWF 檔案。
    最可能的原因是該檔案已不存在，因此 Ruffle 無法載入任何內容。
    請嘗試聯絡網站管理員尋求協助。
error-swf-cors =
    Ruffle 未能載入 Flash SWF 檔案。
    訪問 fetch 可能已被 CORS 策略封鎖。
    如果您是伺服器管理員，請參閱 Ruffle wiki 以獲得協助。
error-wasm-cors =
    Ruffle 未能載入所需的 「.wasm」 檔案元件。
    訪問 fetch 可能已被 CORS 策略封鎖。
    如果您是伺服器管理員，請參閱 Ruffle wiki 以獲得協助。
error-wasm-invalid =
    Ruffle 在嘗試初始化時遇到重大問題。
    此頁面似乎有遺失或無效的檔案，無法執行 Ruffle。
    如果您是伺服器管理員，請參閱 Ruffle wiki 以獲得協助。
error-wasm-download =
    Ruffle 在嘗試初始化時遇到重大問題。
    這通常可以自行解決，因此您可以嘗試重新載入頁面。
    否則，請聯絡網站管理員。
error-wasm-disabled-on-edge =
    Ruffle 未能載入所需的「.wasm 」檔案元件。
    要解決這個問題，請嘗試打開瀏覽器的設定，按一下「隱私、搜尋和服務」，向下捲動，然後關閉「加強您在網路上的安全性」。
    這將允許您的瀏覽器載入所需的「.wasm 」檔案。
    如果問題仍然存在，您可能必須使用其他瀏覽器。
error-wasm-unsupported-browser =
    您使用的瀏覽器不支援 Ruffle 執行所需的 WebAssembly 擴充套件。
    請切換到支援的瀏覽器。
    您可以在 Wiki 上找到支援的瀏覽器清單。
error-javascript-conflict =
    Ruffle 在嘗試初始化時遇到重大問題。
    這個頁面似乎使用了與 Ruffle 相衝突的 JavaScript 程式碼。
    如果您是伺服器管理員，請嘗試在空白頁面上載入檔案。
error-javascript-conflict-outdated = 您也可以嘗試上傳較新版本的 Ruffle，可能會避免此問題 (目前的版本已過時：{ $buildDate })。
error-csp-conflict =
    Ruffle 在嘗試初始化時遇到重大問題。
    此網頁伺服器的內容安全政策不允許執行所需的 「.wasm 」元件。
    如果您是伺服器管理員，請參閱 Ruffle wiki 以取得協助。
error-unknown =
    Ruffle 在嘗試顯示此 Flash 內容時遇到了重大問題。
    { $outdated ->
        [true]  如果您是伺服器管理員，請嘗試上傳較新版本的 Ruffle (目前的版本已經過時 { $buildDate })。
       *[false] 這不應該發生，所以如果您能提出錯誤，我們會非常感激！
    }
`,"save-manager.ftl":`save-delete-prompt = 你確定要刪除這個存檔嗎？
save-reload-prompt =
    唯一方法只有 { $action ->
        [delete] 刪除
       *[replace] 取代
    } 這個存檔不會完全取代直到重新啟動。 你需要繼續嗎?
save-download = 下載
save-replace = 取代
save-delete = 刪除
save-backup-all = 下載所有存檔檔案。
`,"volume-controls.ftl":`volume-controls-mute = 靜音
volume-controls-unmute = 取消靜音
`}},As={};for(const[s,i]of Object.entries(pb)){const o=new Vg(s);if(i){for(const[u,f]of Object.entries(i))if(f)for(const m of o.addResource(new lb(f)))console.error(`Error in text for ${s} ${u}: ${m}`)}As[s]=o}function hb(s,i,o){const u=As[s];if(u!==void 0){const f=u.getMessage(i);if(f!==void 0&&f.value)return u.formatPattern(f.value,o)}return null}function ee(s,i){const o=mb(navigator.languages,Object.keys(As),{defaultLocale:"en-US"});for(const u in o){const f=hb(o[u],s,i);if(f)return f}return console.error(`Unknown text key '${s}'`),s}function Ke(s,i){const o=document.createElement("div");return ee(s,i).split(`
`).forEach(u=>{const f=document.createElement("p");f.innerText=u,o.appendChild(f)}),o}function vb(){return T.jsx("div",{id:"volume-controls-modal",class:"modal hidden",children:T.jsx("div",{class:"modal-area",children:T.jsxs("div",{id:"volume-controls",children:[T.jsx("input",{id:"mute-checkbox",type:"checkbox"}),T.jsx("label",{id:"volume-mute",for:"mute-checkbox",title:ee("volume-controls-unmute")}),T.jsx("label",{id:"volume-min",for:"mute-checkbox",title:ee("volume-controls-mute")}),T.jsx("label",{id:"volume-mid",for:"mute-checkbox",title:ee("volume-controls-mute")}),T.jsx("label",{id:"volume-max",for:"mute-checkbox",title:ee("volume-controls-mute")}),T.jsx("input",{id:"volume-slider",type:"range",min:"0",max:"100",step:"1"}),T.jsx("span",{id:"volume-slider-text"}),T.jsx("span",{class:"close-modal"})]})})})}function gb(){return T.jsx("div",{id:"video-modal",class:"modal hidden",children:T.jsxs("div",{class:"modal-area",children:[T.jsx("span",{class:"close-modal"}),T.jsx("div",{id:"video-holder"})]})})}function bb(){return T.jsx("div",{id:"hardware-acceleration-modal",class:"modal hidden",children:T.jsxs("div",{class:"modal-area",children:[T.jsx("span",{class:"close-modal"}),T.jsx("span",{id:"acceleration-text",children:ee("enable-hardware-acceleration")}),T.jsx("a",{href:"https://github.com/ruffle-rs/ruffle/wiki/Frequently-Asked-Questions-For-Users#chrome-hardware-acceleration",target:"_blank",class:"modal-button",children:ee("enable-hardware-acceleration-link")})]})})}const as=navigator.userAgent.includes("Mac OS X")?"Command":"Ctrl";function yb(){return T.jsx("div",{id:"clipboard-modal",class:"modal hidden",children:T.jsxs("div",{class:"modal-area",children:[T.jsx("span",{class:"close-modal"}),T.jsx("h2",{children:ee("clipboard-message-title")}),T.jsx("p",{id:"clipboard-modal-description"}),T.jsxs("p",{children:[T.jsxs("b",{children:[as,"+C"]}),T.jsx("span",{children:ee("clipboard-message-copy")})]}),T.jsxs("p",{children:[T.jsxs("b",{children:[as,"+X"]}),T.jsx("span",{children:ee("clipboard-message-cut")})]}),T.jsxs("p",{children:[T.jsxs("b",{children:[as,"+V"]}),T.jsx("span",{children:ee("clipboard-message-paste")})]})]})})}function wb(){return T.jsx("div",{id:"context-menu-overlay",class:"hidden",children:T.jsx("ul",{id:"context-menu"})})}const Ln=document.createElement("template");Ln.content.appendChild(T.jsx(xg,{}));Ln.content.appendChild(T.jsx(Eg,{}));Ln.content.appendChild(T.jsx(jg,{}));Ln.content.appendChild(T.jsx(Ag,{}));Ln.content.appendChild(T.jsx(Tg,{}));Ln.content.appendChild(T.jsx(vb,{}));Ln.content.appendChild(T.jsx(gb,{}));Ln.content.appendChild(T.jsx(bb,{}));Ln.content.appendChild(T.jsx(yb,{}));Ln.content.appendChild(T.jsx(wb,{}));const pp="application/x-shockwave-flash",hp="application/futuresplash",vp="application/x-shockwave-flash2-preview",gp="application/vnd.adobe.flash.movie",kb="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000";function Rb(s){let i="";try{i=new URL(s,"https://example.com").pathname}catch{}if(i&&i.length>=4){const o=i.slice(-4).toLowerCase();if(o===".swf"||o===".spl")return!0}return!1}function Sb(s,i){switch(s=s.toLowerCase(),s){case pp.toLowerCase():case hp.toLowerCase():case vp.toLowerCase():case gp.toLowerCase():return!0;default:if(i)switch(s){case"application/octet-stream":case"binary/octet-stream":return!0}}return!1}function bp(s,i){const o=Rb(s);return i?Sb(i,o):o}function zb(s){const i=s.pathname;return i.substring(i.lastIndexOf("/")+1)}let ni=null,Nt=!1;try{if(document.currentScript!==void 0&&document.currentScript!==null&&"src"in document.currentScript&&document.currentScript.src!==""){let s=document.currentScript.src;!s.endsWith(".js")&&!s.endsWith("/")&&(s+="/"),ni=new URL(".",s),Nt=ni.protocol.includes("extension")}}catch{console.warn("Unable to get currentScript URL")}const ti="https://ruffle.rs";class yp extends Error{constructor(i){super(`Failed to fetch ${i}`),this.swfUrl=i,this.swfUrl=i}}class wp extends Error{constructor(i){super(`Not a valid swf: ${i}`)}}class gs extends Error{constructor(i){super("Failed to load Ruffle WASM"),this.cause=i}}class kp extends Error{constructor(i){super(`Invalid options: ${i}`)}}var oa={},qt={},Jm;function xb(){if(Jm)return qt;Jm=1,Object.defineProperty(qt,"__esModule",{value:!0}),qt.createRef=qt.h=void 0,qt.createElement=o;const s=fp(),i=dp();function o(f,m,...h){if(typeof f=="function")return f({...m,children:h});const{finalTag:k,finalAttrs:w}=(0,i.applyTsxTag)(f,m),b=(0,i.createDomElement)(k,w);return w&&(0,s.setAttributes)(b,w),(0,i.applyChildren)(b,h),b}qt.h=o;const u=()=>({current:null});return qt.createRef=u,qt}var xr={},Pm;function Eb(){if(Pm)return xr;Pm=1,Object.defineProperty(xr,"__esModule",{value:!0}),xr.defineCustomElement=i;const s=js();function i(o,u,f){return customElements.define(o,u,f),m=>(0,s.jsx)(o,m)}return xr}var ls={},Im;function jb(){return Im||(Im=1,Object.defineProperty(ls,"__esModule",{value:!0})),ls}var ep;function Ab(){return ep||(ep=1,function(s){var i=oa&&oa.__createBinding||(Object.create?function(u,f,m,h){h===void 0&&(h=m);var k=Object.getOwnPropertyDescriptor(f,m);(!k||("get"in k?!f.__esModule:k.writable||k.configurable))&&(k={enumerable:!0,get:function(){return f[m]}}),Object.defineProperty(u,h,k)}:function(u,f,m,h){h===void 0&&(h=m),u[h]=f[m]}),o=oa&&oa.__exportStar||function(u,f){for(var m in u)m!=="default"&&!Object.prototype.hasOwnProperty.call(f,m)&&i(f,u,m)};Object.defineProperty(s,"__esModule",{value:!0}),o(xb(),s),o(Eb(),s),o(js(),s),o(jb(),s)}(oa)),oa}var Tb=Ab();function Db({action:s,showDetails:i,errorArray:o,errorText:u,swfUrl:f}){if(s.type=="show_details"){const m=()=>(i(),!1);return T.jsx("li",{children:T.jsx("a",{href:"#",id:"panic-view-details",onClick:m,children:ee("view-error-details")})})}else{if(s.type=="open_link")return T.jsx("li",{children:T.jsx("a",{href:s.url,target:"_top",children:s.label})});{let m;document.location.protocol.includes("extension")&&f?m=f.href:m=document.location.href,m=m.split(/[?#]/,1)[0];const h=`Error on ${m}`;let k=`https://github.com/ruffle-rs/ruffle/issues/new?title=${encodeURIComponent(h)}&template=error_report.md&labels=error-report&body=`,w=encodeURIComponent(u);return o.stackIndex>-1&&String(k+w).length>8195&&(o[o.stackIndex]=null,o.avmStackIndex>-1&&(o[o.avmStackIndex]=null),w=encodeURIComponent(o.join(""))),k+=w,T.jsx("li",{children:T.jsx("a",{href:k,target:"_top",children:ee("report-bug")})})}}}function bs(){const s=new Date(_n.buildDate),i=new Date;return i.setMonth(i.getMonth()-6),i>s}const me={OpenDemo:{type:"open_link",url:ti+"/demo",label:ee("ruffle-demo")},DownloadDesktop:{type:"open_link",url:ti+"/downloads#desktop-app",label:ee("ruffle-desktop")},UpdateRuffle:{type:"open_link",url:ti+"/downloads",label:ee("update-ruffle")},CreateReport:{type:"create_report"},ShowDetails:{type:"show_details"},createReportOrUpdate(){return bs()?this.UpdateRuffle:this.CreateReport},openWiki(s,i){return{type:"open_link",url:`https://github.com/ruffle-rs/ruffle/wiki/${s}`,label:i??ee("ruffle-wiki")}}};function Ob(s){var i;if(s instanceof yp)return s.swfUrl&&!s.swfUrl.protocol.includes("http")?{body:Ke("error-file-protocol"),actions:[me.OpenDemo,me.DownloadDesktop]}:window.location.origin===((i=s.swfUrl)==null?void 0:i.origin)||window.location.protocol.includes("extension")?{body:Ke("error-swf-fetch"),actions:[me.ShowDetails]}:{body:Ke("error-swf-cors"),actions:[me.openWiki("Using-Ruffle#configure-cors-header"),me.ShowDetails]};if(s instanceof wp)return{body:Ke("error-invalid-swf"),actions:[me.ShowDetails]};if(s instanceof gs){if(window.location.protocol==="file:")return{body:Ke("error-file-protocol"),actions:[me.OpenDemo,me.DownloadDesktop]};const o=String(s.cause.message).toLowerCase();if(o.includes("mime"))return{body:Ke("error-wasm-mime-type"),actions:[me.openWiki("Using-Ruffle#configure-webassembly-mime-type"),me.ShowDetails]};if(o.includes("networkerror")||o.includes("failed to fetch"))return{body:Ke("error-wasm-cors"),actions:[me.openWiki("Using-Ruffle#configure-cors-header"),me.ShowDetails]};if(o.includes("disallowed by embedder"))return{body:Ke("error-csp-conflict"),actions:[me.openWiki("Using-Ruffle#configure-wasm-csp"),me.ShowDetails]};if(s.cause.name==="CompileError"&&o.includes("bad type"))return{body:Ke("error-wasm-unsupported-browser"),actions:[me.openWiki("#web"),me.ShowDetails]};if(s.cause.name==="CompileError")return{body:Ke("error-wasm-invalid"),actions:[me.openWiki("Using-Ruffle#addressing-a-compileerror"),me.ShowDetails]};if((o.includes("could not download wasm module")||o.includes("webassembly compilation aborted"))&&s.cause.name==="TypeError")return{body:Ke("error-wasm-download"),actions:[me.ShowDetails]};if(s.cause.name==="TypeError"){const u=Ke("error-javascript-conflict");return bs()&&u.appendChild(Ke("error-javascript-conflict-outdated",{buildDate:_n.buildDate})),{body:u,actions:[me.createReportOrUpdate(),me.ShowDetails]}}return navigator.userAgent.includes("Edg")&&o.includes("webassembly is not defined")?{body:Ke("error-wasm-disabled-on-edge"),actions:[me.openWiki("Frequently-Asked-Questions-For-Users#edge-webassembly-error",ee("more-info")),me.ShowDetails]}:{body:Ke("error-wasm-not-found"),actions:[me.openWiki("Using-Ruffle#configuration-options"),me.ShowDetails]}}return s instanceof kp?{body:Ke("error-javascript-config"),actions:[me.openWiki("Using-Ruffle#javascript-api"),me.ShowDetails]}:{body:Ke("error-unknown",{buildDate:_n.buildDate,outdated:String(bs)}),actions:[me.createReportOrUpdate(),me.ShowDetails]}}function Mb(s,i,o,u){const f=o.join("");let{body:m,actions:h}=Ob(i);const k=Tb.createRef(),w=()=>{k.current.classList.add("details"),k.current.replaceChildren(T.jsx("textarea",{readOnly:!0,children:f}))};s.textContent="",s.appendChild(T.jsxs("div",{id:"panic",children:[T.jsx("div",{id:"panic-title",children:ee("panic-title")}),T.jsx("div",{id:"panic-body",ref:k,children:m}),T.jsx("div",{id:"panic-footer",children:T.jsx("ul",{children:h.map(b=>Db({action:b,showDetails:w,errorText:f,errorArray:o,swfUrl:u}))})})]}))}const _b="modulepreload",Cb=function(s,i){return new URL(s,i).href},np={},tp=function(i,o,u){let f=Promise.resolve();if(o&&o.length>0){const h=document.getElementsByTagName("link"),k=document.querySelector("meta[property=csp-nonce]"),w=(k==null?void 0:k.nonce)||(k==null?void 0:k.getAttribute("nonce"));f=Promise.allSettled(o.map(b=>{if(b=Cb(b,u),b in np)return;np[b]=!0;const _=b.endsWith(".css"),L=_?'[rel="stylesheet"]':"";if(!!u)for(let ae=h.length-1;ae>=0;ae--){const ue=h[ae];if(ue.href===b&&(!_||ue.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${b}"]${L}`))return;const F=document.createElement("link");if(F.rel=_?"stylesheet":_b,_||(F.as="script"),F.crossOrigin="",F.href=b,w&&F.setAttribute("nonce",w),document.head.appendChild(F),_)return new Promise((ae,ue)=>{F.addEventListener("load",ae),F.addEventListener("error",()=>ue(new Error(`Unable to preload CSS for ${b}`)))})}))}function m(h){const k=new Event("vite:preloadError",{cancelable:!0});if(k.payload=h,window.dispatchEvent(k),!k.defaultPrevented)throw h}return f.then(h=>{for(const k of h||[])k.status==="rejected"&&m(k.reason);return i().catch(m)})},qb=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,3,1,0,1,10,14,1,12,0,65,0,65,0,65,0,252,10,0,0,11])),Ub=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,7,1,5,0,208,112,26,11])),Nb=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,12,1,10,0,67,0,0,0,0,252,0,26,11])),Lb=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,8,1,6,0,65,0,192,26,11])),Hb=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11]));function Bb(){Object.defineProperty(Array.prototype,"reduce",{value(...s){if(s.length===0&&window.Prototype&&window.Prototype.Version&&window.Prototype.Version<"1.6.1")return this.length>1?this:this[0];const i=s[0];if(this===null)throw new TypeError("Array.prototype.reduce called on null or undefined");if(typeof i!="function")throw new TypeError(`${i} is not a function`);const o=Object(this),u=o.length>>>0;let f=0,m;if(s.length>=2)m=s[1];else{for(;f<u&&!(f in o);)f++;if(f>=u)throw new TypeError("Reduce of empty array with no initial value");m=o[f++]}for(;f<u;)f in o&&(m=i(m,o[f],f,o)),f++;return m}})}function Fb(){typeof window.constructor!="function"||!ys(window.constructor)||(window.Window=window.constructor)}function Vb(){(window.Reflect===void 0||window.Reflect===null)&&(window.Reflect={}),typeof Reflect.get!="function"&&Object.defineProperty(Reflect,"get",{value(s,i){return s[i]}}),typeof Reflect.set!="function"&&Object.defineProperty(Reflect,"set",{value(s,i,o){s[i]=o}}),typeof Reflect.has!="function"&&Object.defineProperty(Reflect,"has",{value(s,i){return i in s}}),typeof Reflect.ownKeys!="function"&&Object.defineProperty(Reflect,"ownKeys",{value(s){return[...Object.getOwnPropertyNames(s),...Object.getOwnPropertySymbols(s)]}})}function ys(s){const i=typeof Function.prototype.toString=="function"?Function.prototype.toString():null;return typeof i=="string"&&i.indexOf("[native code]")>=0?Function.prototype.toString.call(s).indexOf("[native code]")>=0:!1}function Yb(){(typeof Array.prototype.reduce!="function"||!ys(Array.prototype.reduce))&&Bb(),(typeof Window!="function"||!ys(Window))&&Fb(),Vb()}async function $b(s){var b,_,L;Yb();const i=(await Promise.all([qb(),Hb(),Nb(),Lb(),Ub()])).every(Boolean);i||console.log("Some WebAssembly extensions are NOT available, falling back to the vanilla WebAssembly module"),(_=(b=ai.options).onFirstLoad)==null||_.call(b),ai.options.onFirstLoad=()=>{};const{default:o,RuffleInstanceBuilder:u,ZipWriter:f}=await(i?tp(()=>import("./ruffle_web-C9iHK4xz.js"),__vite__mapDeps([0,1]),import.meta.url):tp(()=>import("./ruffle_web-wasm_mvp-CwgAGocr.js"),__vite__mapDeps([2,1]),import.meta.url));let m;const h=i?new URL(""+new URL("ruffle_web_bg-DZwhJ4AP.wasm",import.meta.url).href,import.meta.url):new URL(""+new URL("ruffle_web-wasm_mvp_bg-DG2nW_Ve.wasm",import.meta.url).href,import.meta.url),k=await fetch(h);if(s&&typeof ReadableStreamDefaultController=="function"){const Q=((L=k==null?void 0:k.headers)==null?void 0:L.get("content-length"))||"";let F=0;const ae=parseInt(Q);m=new Response(new ReadableStream({async start(ue){var Ye;const ge=(Ye=k.body)==null?void 0:Ye.getReader();if(!ge)throw"Response had no body";for(s(F,ae);;){const{done:xe,value:be}=await ge.read();if(xe)break;be!=null&&be.byteLength&&(F+=be==null?void 0:be.byteLength),ue.enqueue(be),s(F,ae)}ue.close()}}),k)}else m=k;return await o(m),[u,f]}let is=null;async function Gb(s){is===null&&(is=$b(s));const i=await is;return[new i[0],()=>new i[1]]}const Zb=999,ws={};function Qb(s){const i=ws[s];return i!==void 0?{internalName:s,name:i.name,class:i.class}:null}function Ts(s,i){const o=ws[s];if(o!==void 0){if(o.class!==i)throw new Error("Internal naming conflict on "+s);return o.name}let u=0;if(window.customElements!==void 0)for(;u<Zb;){let f=s;if(u>0&&(f=f+"-"+u),window.customElements.get(f)!==void 0){u+=1;continue}else window.customElements.define(f,i);return ws[s]={class:i,name:f,internalName:s},f}throw new Error("Failed to assign custom element "+s)}function Se(s){return s!=null}function Xb(s,i){if(Se(i.allowScriptAccess)&&s.setAllowScriptAccess(i.allowScriptAccess),Se(i.backgroundColor)&&s.setBackgroundColor(Wb(i.backgroundColor)),Se(i.upgradeToHttps)&&s.setUpgradeToHttps(i.upgradeToHttps),Se(i.compatibilityRules)&&s.setCompatibilityRules(i.compatibilityRules),Se(i.letterbox)&&s.setLetterbox(i.letterbox.toLowerCase()),Se(i.base)&&s.setBaseUrl(i.base),Se(i.menu)&&s.setShowMenu(i.menu),Se(i.allowFullscreen)&&s.setAllowFullscreen(i.allowFullscreen),Se(i.salign)&&s.setStageAlign(i.salign.toLowerCase()),Se(i.forceAlign)&&s.setForceAlign(i.forceAlign),Se(i.quality)?s.setQuality(i.quality.toLowerCase()):Jb()&&(console.log("Running on a mobile device; defaulting to low quality"),s.setQuality("low")),Se(i.scale)&&s.setScale(i.scale.toLowerCase()),Se(i.forceScale)&&s.setForceScale(i.forceScale),Se(i.frameRate)&&s.setFrameRate(i.frameRate),Se(i.wmode)&&s.setWmode(i.wmode),Se(i.logLevel)&&s.setLogLevel(i.logLevel),Se(i.maxExecutionDuration)&&s.setMaxExecutionDuration(Kb(i.maxExecutionDuration)),Se(i.playerVersion)&&s.setPlayerVersion(i.playerVersion),Se(i.preferredRenderer)&&s.setPreferredRenderer(i.preferredRenderer),Se(i.openUrlMode)&&s.setOpenUrlMode(i.openUrlMode.toLowerCase()),Se(i.allowNetworking)&&s.setAllowNetworking(i.allowNetworking.toLowerCase()),Se(i.credentialAllowList)&&s.setCredentialAllowList(i.credentialAllowList),Se(i.playerRuntime)&&s.setPlayerRuntime(i.playerRuntime),Se(i.socketProxy))for(const o of i.socketProxy)s.addSocketProxy(o.host,o.port,o.proxyUrl);if(Se(i.gamepadButtonMapping))for(const[o,u]of Object.entries(i.gamepadButtonMapping))s.addGamepadButtonMapping(o,u);if(Se(i.urlRewriteRules))for(const[o,u]of i.urlRewriteRules)if(o instanceof RegExp)s.addUrlRewriteRule(o,u);else{const f=o.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),m=new RegExp(`^${f}$`),h=u.replace(/\$/g,"$$$$");s.addUrlRewriteRule(m,h)}}function Wb(s){if(s.startsWith("#")&&(s=s.substring(1)),s.length<6)return;let i=0;for(let o=0;o<6;o++){const u=parseInt(s[o],16);isNaN(u)?i=i<<4:i=i<<4|u}return i}function Kb(s){return typeof s=="number"?s:s.secs}function Jb(){return typeof window.orientation<"u"}const Pb=/^\s*(\d+(\.\d+)?(%)?)/;let Er=!1;function rs(s){if(s==null)return{};s instanceof URLSearchParams||(s=new URLSearchParams(s));const i={};for(const[o,u]of s)i[o]=u.toString();return i}class ap{constructor(i,o){this.x=i,this.y=o}distanceTo(i){const o=i.x-this.x,u=i.y-this.y;return Math.sqrt(o*o+u*u)}}class Ut{constructor(i,o,u){this.contextMenuForceDisabled=!1,this.isTouch=!1,this.contextMenuSupported=!1,this._suppressContextMenu=!1,this.panicked=!1,this.rendererDebugInfo="",this.longPressTimer=null,this.pointerDownPosition=null,this.pointerMoveMaxDistance=0,this.onFSCommand=[],this.config={},this.SaveRow=({rowKey:k,solName:w,solData:b})=>T.jsxs("tr",{children:[T.jsx("td",{title:k,children:w}),T.jsx("td",{children:T.jsx("span",{class:"save-option",id:"download-save",title:ee("save-download"),onClick:()=>os(ey(b,"application/octet-stream"),w+".sol")})}),T.jsxs("td",{children:[T.jsx("input",{type:"file",accept:".sol",class:"replace-save",id:"replace-save-"+k,onChange:_=>this.replaceSOL(_,k)}),T.jsx("label",{for:"replace-save-"+k,class:"save-option",id:"replace-save",title:ee("save-replace")})]}),T.jsx("td",{children:T.jsx("span",{class:"save-option",id:"delete-save",title:ee("save-delete"),onClick:()=>this.deleteSave(k)})})]}),this.element=i,this.debugPlayerInfo=o,this.onCallbackAvailable=u,this.shadow=this.element.attachShadow({mode:"open",delegatesFocus:!0}),this.shadow.appendChild(Ln.content.cloneNode(!0)),this.dynamicStyles=this.shadow.getElementById("dynamic-styles"),this.container=this.shadow.getElementById("container"),this.playButton=this.shadow.getElementById("play-button"),this.playButton.addEventListener("click",()=>this.play()),this.unmuteOverlay=this.shadow.getElementById("unmute-overlay"),this.splashScreen=this.shadow.getElementById("splash-screen"),this.virtualKeyboard=this.shadow.getElementById("virtual-keyboard"),this.virtualKeyboard.addEventListener("input",this.virtualKeyboardInput.bind(this)),this.saveManager=this.shadow.getElementById("save-manager"),this.videoModal=this.shadow.getElementById("video-modal"),this.hardwareAccelerationModal=this.shadow.getElementById("hardware-acceleration-modal"),this.volumeControls=this.shadow.getElementById("volume-controls-modal"),this.clipboardModal=this.shadow.getElementById("clipboard-modal"),this.addModalJavaScript(this.saveManager),this.addModalJavaScript(this.volumeControls),this.addModalJavaScript(this.videoModal),this.addModalJavaScript(this.hardwareAccelerationModal),this.addModalJavaScript(this.clipboardModal),this.volumeSettings=new Ib(!1,100),this.addVolumeControlsJavaScript(this.volumeControls);const f=this.saveManager.querySelector(".modal-button");f&&(f.addEventListener("click",this.backupSaves.bind(this)),f.innerText=ee("save-backup-all"));const m=this.unmuteOverlay.querySelector("#unmute-overlay-svg");if(m){const k=m.querySelector("#unmute-text");k.textContent=ee("click-to-unmute")}this.contextMenuOverlay=this.shadow.getElementById("context-menu-overlay"),this.contextMenuElement=this.shadow.getElementById("context-menu");const h=k=>{k.preventDefault(),k.stopPropagation()};this.contextMenuElement.addEventListener("contextmenu",h),this.contextMenuElement.addEventListener("click",h),document.documentElement.addEventListener("pointerdown",this.checkIfTouch.bind(this)),this.element.addEventListener("contextmenu",this.showContextMenu.bind(this)),this.container.addEventListener("pointerdown",this.pointerDown.bind(this)),this.container.addEventListener("pointermove",this.checkLongPressMovement.bind(this)),this.container.addEventListener("pointerup",this.checkLongPress.bind(this)),this.container.addEventListener("pointercancel",this.clearLongPressTimer.bind(this)),this.element.addEventListener("fullscreenchange",this.fullScreenChange.bind(this)),this.element.addEventListener("webkitfullscreenchange",this.fullScreenChange.bind(this)),this.instance=null,this.newZipWriter=null,this._readyState=Qa.HaveNothing,this.metadata=null,this.lastActivePlayingState=!1,this.setupPauseOnTabHidden()}addFSCommandHandler(i){this.onFSCommand.push(i)}callFSCommand(i,o){if(this.onFSCommand.length==0)return!1;for(const u of this.onFSCommand)u(i,o);return!0}addModalJavaScript(i){const o=i.querySelector("#video-holder"),u=()=>{i.classList.add("hidden"),o&&(o.textContent="")};i.parentNode.addEventListener("click",u);const f=i.querySelector(".modal-area");f&&f.addEventListener("click",h=>h.stopPropagation());const m=i.querySelector(".close-modal");m&&m.addEventListener("click",u)}addVolumeControlsJavaScript(i){const o=i.querySelector("#mute-checkbox"),u=i.querySelector("#volume-mute"),f=[i.querySelector("#volume-min"),i.querySelector("#volume-mid"),i.querySelector("#volume-max")],m=i.querySelector("#volume-slider"),h=i.querySelector("#volume-slider-text"),k=()=>{if(this.volumeSettings.isMuted)u.style.display="inline",f.forEach(w=>{w.style.display="none"});else{u.style.display="none";const w=Math.round(this.volumeSettings.volume/50);f.forEach((b,_)=>{b.style.display=_===w?"inline":"none"})}};o.checked=this.volumeSettings.isMuted,m.disabled=o.checked,m.valueAsNumber=this.volumeSettings.volume,h.textContent=m.value+"%",k(),o.addEventListener("change",()=>{var w;m.disabled=o.checked,this.volumeSettings.isMuted=o.checked,(w=this.instance)==null||w.set_volume(this.volumeSettings.get_volume()),k()}),m.addEventListener("input",()=>{var w;h.textContent=m.value+"%",this.volumeSettings.volume=m.valueAsNumber,(w=this.instance)==null||w.set_volume(this.volumeSettings.get_volume()),k()})}setupPauseOnTabHidden(){document.addEventListener("visibilitychange",()=>{this.instance&&(document.hidden&&(this.lastActivePlayingState=this.instance.is_playing(),this.instance.pause()),!document.hidden&&this.lastActivePlayingState===!0&&this.instance.play())},!1)}updateStyles(){if(this.dynamicStyles.sheet){if(this.dynamicStyles.sheet.cssRules)for(let u=this.dynamicStyles.sheet.cssRules.length-1;u>=0;u--)this.dynamicStyles.sheet.deleteRule(u);const i=this.element.attributes.getNamedItem("width");if(i!=null){const u=Ut.htmlDimensionToCssDimension(i.value);u!==null&&this.dynamicStyles.sheet.insertRule(`:host { width: ${u}; }`)}const o=this.element.attributes.getNamedItem("height");if(o!=null){const u=Ut.htmlDimensionToCssDimension(o.value);u!==null&&this.dynamicStyles.sheet.insertRule(`:host { height: ${u}; }`)}}}isUnusedFallbackObject(){const i=Qb("ruffle-object");if(i!==null){let o=this.element.parentNode;for(;o!==document&&o!==null;){if(o.nodeName===i.name)return!0;o=o.parentNode}}return!1}async ensureFreshInstance(){var m,h,k;this.destroy(),this.loadedConfig&&this.loadedConfig.splashScreen!==!1&&this.loadedConfig.preloader!==!1&&this.showSplashScreen(),this.loadedConfig&&this.loadedConfig.preloader===!1&&console.warn("The configuration option preloader has been replaced with splashScreen. If you own this website, please update the configuration."),this.loadedConfig&&this.loadedConfig.maxExecutionDuration&&typeof this.loadedConfig.maxExecutionDuration!="number"&&console.warn("Configuration: An obsolete format for duration for 'maxExecutionDuration' was used, please use a single number indicating seconds instead. For instance '15' instead of '{secs: 15, nanos: 0}'."),this.loadedConfig&&typeof this.loadedConfig.contextMenu=="boolean"&&console.warn('The configuration option contextMenu no longer takes a boolean. Use "on", "off", or "rightClickOnly".');const[i,o]=await Gb(this.onRuffleDownloadProgress.bind(this)).catch(w=>{console.error(`Serious error loading Ruffle: ${w}`);const b=new gs(w);throw this.panic(b),b});if(this.newZipWriter=o,Xb(i,this.loadedConfig||{}),i.setVolume(this.volumeSettings.get_volume()),(m=this.loadedConfig)!=null&&m.fontSources)for(const w of this.loadedConfig.fontSources)try{const b=await fetch(w);i.addFont(w,new Uint8Array(await b.arrayBuffer()))}catch(b){console.warn(`Couldn't download font source from ${w}`,b)}for(const w in(h=this.loadedConfig)==null?void 0:h.defaultFonts){const b=this.loadedConfig.defaultFonts[w];b&&i.setDefaultFont(w,b)}this.instance=await i.build(this.container,this).catch(w=>{throw console.error(`Serious error loading Ruffle: ${w}`),this.panic(w),w}),this.rendererDebugInfo=this.instance.renderer_debug_info(),this.rendererDebugInfo.includes("Adapter Device Type: Cpu")&&this.container.addEventListener("mouseover",this.openHardwareAccelerationModal.bind(this),{once:!0});const u=this.instance.renderer_name(),f=this.instance.constructor;if(console.log("%cNew Ruffle instance created (Version: "+_n.versionName+" | WebAssembly extensions: "+(f.is_wasm_simd_used()?"ON":"OFF")+" | Used renderer: "+(u??"")+")","background: #37528C; color: #FFAD33"),this.audioState()!=="running"&&(this.container.style.visibility="hidden",await new Promise(w=>{window.setTimeout(()=>{w()},200)}),this.container.style.visibility=""),this.unmuteAudioContext(),!this.loadedConfig||this.loadedConfig.autoplay===Ka.On||this.loadedConfig.autoplay!==Ka.Off&&this.audioState()==="running"){if(this.play(),this.audioState()!=="running"){(!this.loadedConfig||this.loadedConfig.unmuteOverlay!==li.Hidden)&&(this.unmuteOverlay.style.display="block"),this.container.addEventListener("click",this.unmuteOverlayClicked.bind(this),{once:!0});const w=(k=this.instance)==null?void 0:k.audio_context();w&&(w.onstatechange=()=>{w.state==="running"&&this.unmuteOverlayClicked(),w.onstatechange=null})}}else this.playButton.style.display="block"}onRuffleDownloadProgress(i,o){const u=this.splashScreen.querySelector(".loadbar-inner"),f=this.splashScreen.querySelector(".loadbar");Number.isNaN(o)?f&&(f.style.display="none"):u.style.width=`${100*(i/o)}%`}destroy(){this.instance&&(this.instance.destroy(),this.instance=null,this.metadata=null,this._readyState=Qa.HaveNothing,console.log("Ruffle instance destroyed."))}checkOptions(i){if(typeof i=="string")return{url:i};const o=(u,f)=>{if(!u){const m=new kp(f);throw this.panic(m),m}};return o(i!==null&&typeof i=="object","Argument 0 must be a string or object"),o("url"in i||"data"in i,"Argument 0 must contain a `url` or `data` key"),o(!("url"in i)||typeof i.url=="string","`url` must be a string"),i}async reload(){if(this.loadedConfig)await this.load(this.loadedConfig);else throw new Error("Cannot reload if load wasn't first called")}async reloadWithCanvasRenderer(){if(this.loadedConfig&&this.loadedConfig.preferredRenderer!==Or.Canvas){const i={...this.loadedConfig,preferredRenderer:Or.Canvas};await this.load(i)}else if(this.loadedConfig)this.panic(new Error(ee("error-canvas-reload")));else throw new Error("Cannot reload if load wasn't first called")}async load(i,o=!1){var u;if(i=this.checkOptions(i),!this.element.isConnected||this.isUnusedFallbackObject()){console.warn("Ignoring attempt to play a disconnected or suspended Ruffle element");return}if(!Ds(this.element))try{this.loadedConfig={...Sg,...o&&"url"in i?{allowScriptAccess:Sp("samedomain",i.url)}:{},...((u=window.RufflePlayer)==null?void 0:u.config)??{},...this.config,...i},this.loadedConfig.backgroundColor&&this.loadedConfig.wmode!==Dr.Transparent&&(this.container.style.backgroundColor=this.loadedConfig.backgroundColor),await this.ensureFreshInstance(),"url"in i?(console.log(`Loading SWF file ${i.url}`),this.swfUrl=new URL(i.url,document.baseURI),this.instance.stream_from(this.swfUrl.href,rs(i.parameters))):"data"in i&&(console.log("Loading SWF data"),delete this.swfUrl,this.instance.load_data(new Uint8Array(i.data),rs(i.parameters),i.swfFileName||"movie.swf"))}catch(f){console.error(`Serious error occurred loading SWF file: ${f}`);const m=new Error(f);throw this.panic(m),m}}play(){this.instance&&(this.instance.play(),this.playButton.style.display="none")}get isPlaying(){return this.instance?this.instance.is_playing():!1}get volume(){return this.instance?this.instance.volume():1}set volume(i){this.instance&&this.instance.set_volume(i)}get fullscreenEnabled(){return!!(document.fullscreenEnabled||document.webkitFullscreenEnabled)}get isFullscreen(){return(document.fullscreenElement||document.webkitFullscreenElement)===this.element}setFullscreen(i){this.fullscreenEnabled&&i!==this.isFullscreen&&(i?this.enterFullscreen():this.exitFullscreen())}enterFullscreen(){const i={navigationUI:"hide"};this.element.requestFullscreen?this.element.requestFullscreen(i):this.element.webkitRequestFullscreen?this.element.webkitRequestFullscreen(i):this.element.webkitRequestFullScreen&&this.element.webkitRequestFullScreen(i)}exitFullscreen(){document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.webkitCancelFullScreen&&document.webkitCancelFullScreen()}fullScreenChange(){var i;(i=this.instance)==null||i.set_fullscreen(this.isFullscreen)}checkIfTouch(i){this.isTouch=i.pointerType==="touch"||i.pointerType==="pen"}confirmReloadSave(i,o,u){if(jr(o)&&localStorage[i]){if(!u&&!confirm(ee("save-delete-prompt")))return;const f=this.swfUrl?this.swfUrl.pathname:"",m=this.swfUrl?this.swfUrl.hostname:document.location.hostname,h=i.split("/").slice(1,-1).join("/");if(f.includes(h)&&i.startsWith(m)){confirm(ee("save-reload-prompt",{action:u?"replace":"delete"}))&&this.loadedConfig&&(this.destroy(),u?localStorage.setItem(i,o):localStorage.removeItem(i),this.reload(),this.populateSaves(),this.saveManager.classList.add("hidden"));return}u?localStorage.setItem(i,o):localStorage.removeItem(i),this.populateSaves(),this.saveManager.classList.add("hidden")}}replaceSOL(i,o){const u=i.target,f=new FileReader;f.addEventListener("load",()=>{if(f.result&&typeof f.result=="string"){const m=new RegExp("data:.*;base64,"),h=f.result.replace(m,"");this.confirmReloadSave(o,h,!0)}}),u&&u.files&&u.files.length>0&&u.files[0]&&f.readAsDataURL(u.files[0])}checkSaves(){if(!this.saveManager.querySelector("#local-saves"))return!1;try{if(localStorage===null)return!1}catch{return!1}return Object.keys(localStorage).some(i=>{const o=i.split("/").pop(),u=localStorage.getItem(i);return o&&u&&jr(u)})}deleteSave(i){const o=localStorage.getItem(i);o&&this.confirmReloadSave(i,o,!1)}populateSaves(){if(!this.checkSaves())return;const i=this.saveManager.querySelector("#local-saves");i.textContent="",Object.keys(localStorage).forEach(o=>{const u=o.split("/").pop(),f=localStorage.getItem(o);u&&f&&jr(f)&&i.appendChild(T.jsx(this.SaveRow,{rowKey:o,solName:u,solData:f}))})}async backupSaves(){const i=this.newZipWriter(),o=[];Object.keys(localStorage).forEach(f=>{let m=String(f.split("/").pop());const h=localStorage.getItem(f);if(h&&jr(h)){const k=Rp(h),w=o.filter(b=>b===m).length;o.push(m),w>0&&(m+=` (${w+1})`),i.addFile(m+".sol",k)}});const u=new Blob([i.save()],{type:"application/zip"});os(u,"saves.zip")}openHardwareAccelerationModal(){this.hardwareAccelerationModal.classList.remove("hidden")}async openSaveManager(){this.populateSaves(),this.saveManager.classList.remove("hidden")}openVolumeControls(){this.volumeControls.classList.remove("hidden")}async downloadSwf(){try{if(this.swfUrl){console.log("Downloading SWF: "+this.swfUrl);const i=await fetch(this.swfUrl.href);if(!i.ok){console.error("SWF download failed");return}const o=await i.blob();os(o,zb(this.swfUrl))}else console.error("SWF download failed")}catch{console.error("SWF download failed")}}virtualKeyboardInput(){const i=this.virtualKeyboard,o=i.value;for(const u of o)for(const f of["keydown","keyup"])this.element.dispatchEvent(new KeyboardEvent(f,{key:u,bubbles:!0}));i.value=""}openVirtualKeyboard(){var i;(i=this.instance)!=null&&i.has_focus()?this.virtualKeyboard.focus({preventScroll:!0}):setTimeout(()=>{this.virtualKeyboard.focus({preventScroll:!0})},0)}closeVirtualKeyboard(){this.isVirtualKeyboardFocused()&&this.container.focus({preventScroll:!0})}isVirtualKeyboardFocused(){return this.shadow.activeElement===this.virtualKeyboard}contextMenuItems(){const i="✓",o=[],u=()=>{o.length>0&&o[o.length-1]!==null&&o.push(null)};return this.instance&&this.isPlaying&&(this.instance.prepare_context_menu().forEach((m,h)=>{m.separatorBefore&&u(),o.push({text:m.caption+(m.checked?` (${i})`:""),onClick:async()=>{var k;return(k=this.instance)==null?void 0:k.run_context_menu_callback(h)},enabled:m.enabled})}),u()),this.fullscreenEnabled&&(this.isFullscreen?o.push({text:ee("context-menu-exit-fullscreen"),onClick:async()=>this.setFullscreen(!1)}):o.push({text:ee("context-menu-enter-fullscreen"),onClick:async()=>this.setFullscreen(!0)})),o.push({text:ee("context-menu-volume-controls"),onClick:async()=>{this.openVolumeControls()}}),this.instance&&this.swfUrl&&this.loadedConfig&&this.loadedConfig.showSwfDownload===!0&&(u(),o.push({text:ee("context-menu-download-swf"),onClick:this.downloadSwf.bind(this)})),navigator.clipboard&&window.isSecureContext&&o.push({text:ee("context-menu-copy-debug-info"),onClick:()=>navigator.clipboard.writeText(this.getPanicData())}),this.checkSaves()&&o.push({text:ee("context-menu-open-save-manager"),onClick:this.openSaveManager.bind(this)}),u(),o.push({text:ee("context-menu-about-ruffle",{flavor:Nt?"extension":"",version:_n.versionName}),async onClick(){window.open(ti,"_blank")}}),this.isTouch&&(u(),o.push({text:ee("context-menu-hide"),onClick:async()=>{this.contextMenuForceDisabled=!0}})),o}pointerDown(i){this.pointerDownPosition=new ap(i.pageX,i.pageY),this.pointerMoveMaxDistance=0,this.startLongPressTimer()}clearLongPressTimer(){this.longPressTimer&&(clearTimeout(this.longPressTimer),this.longPressTimer=null)}startLongPressTimer(){this.clearLongPressTimer(),this.longPressTimer=setTimeout(()=>this.clearLongPressTimer(),800)}checkLongPressMovement(i){if(this.pointerDownPosition!==null){const o=new ap(i.pageX,i.pageY),u=this.pointerDownPosition.distanceTo(o);u>this.pointerMoveMaxDistance&&(this.pointerMoveMaxDistance=u)}}checkLongPress(i){this.longPressTimer?this.clearLongPressTimer():!this.contextMenuSupported&&i.pointerType!=="mouse"&&this.pointerMoveMaxDistance<15&&this.showContextMenu(i)}suppressContextMenu(){this._suppressContextMenu=!0}showContextMenu(i){var w,b;if(this.panicked)return;if(i.preventDefault(),this._suppressContextMenu){this._suppressContextMenu=!1;return}if(this.shadow.querySelectorAll(".modal:not(.hidden)").length!==0||(i.type==="contextmenu"?(this.contextMenuSupported=!0,document.documentElement.addEventListener("click",this.hideContextMenu.bind(this),{once:!0})):(document.documentElement.addEventListener("pointerup",this.hideContextMenu.bind(this),{once:!0}),i.stopPropagation()),[!1,Xa.Off].includes(((w=this.loadedConfig)==null?void 0:w.contextMenu)??Xa.On)||this.isTouch&&((b=this.loadedConfig)==null?void 0:b.contextMenu)===Xa.RightClickOnly||this.contextMenuForceDisabled))return;for(;this.contextMenuElement.firstChild;)this.contextMenuElement.removeChild(this.contextMenuElement.firstChild);for(const _ of this.contextMenuItems())if(_===null)this.contextMenuElement.appendChild(T.jsx("li",{class:"menu-separator",children:T.jsx("hr",{})}));else{const{text:L,onClick:Q,enabled:F}=_,ae=T.jsx("li",{class:{"menu-item":!0,disabled:F===!1},"data-text":L,children:L});if(this.contextMenuElement.appendChild(ae),F!==!1){const ue=async ge=>{ge.preventDefault(),ge.stopPropagation(),await Q(ge),this.hideContextMenu()};this.contextMenuSupported?(ae.addEventListener("click",ue),ae.addEventListener("contextmenu",ue)):ae.addEventListener("pointerup",ue)}}this.contextMenuOverlay.classList.remove("hidden");const o=this.element.getBoundingClientRect(),u=this.contextMenuElement.getBoundingClientRect(),f=Math.max(0,i.clientX+u.width-document.documentElement.clientWidth),m=Math.max(0,i.clientY+u.height-document.documentElement.clientHeight),h=i.clientX-o.x-f,k=i.clientY-o.y-m;this.contextMenuElement.style.transform=`translate(${h}px, ${k}px)`}hideContextMenu(){var i;(i=this.instance)==null||i.clear_custom_menu_items(),this.contextMenuOverlay.classList.add("hidden")}pause(){this.instance&&(this.instance.pause(),this.playButton.style.display="block")}audioState(){if(this.instance){const i=this.instance.audio_context();return i&&i.state||"running"}return"suspended"}unmuteOverlayClicked(){if(this.instance){if(this.audioState()!=="running"){const i=this.instance.audio_context();i&&i.resume()}this.unmuteOverlay.style.display="none"}}unmuteAudioContext(){if(!Er){if(navigator.maxTouchPoints<1){Er=!0;return}"audioSession"in navigator?navigator.audioSession.type="playback":this.container.addEventListener("click",()=>{var u;if(Er)return;const i=(u=this.instance)==null?void 0:u.audio_context();if(!i)return;const o=new Audio;o.src=(()=>{const f=new ArrayBuffer(10),m=new DataView(f),h=i.sampleRate;return m.setUint32(0,h,!0),m.setUint32(4,h,!0),m.setUint16(8,1,!0),`data:audio/wav;base64,UklGRisAAABXQVZFZm10IBAAAAABAAEA${window.btoa(String.fromCharCode(...new Uint8Array(f))).slice(0,13)}AgAZGF0YQcAAACAgICAgICAAAA=`})(),o.load(),o.play().then(()=>{Er=!0}).catch(f=>{console.warn(`Failed to play dummy sound: ${f}`)})},{once:!0})}}static htmlDimensionToCssDimension(i){if(i){const o=i.match(Pb);if(o){let u=o[1];return o[3]||(u+="px"),u}}return null}callExternalInterface(i,o){var u;return(u=this.instance)==null?void 0:u.call_exposed_callback(i,o)}getObjectId(){return this.element.getAttribute("name")}set traceObserver(i){var o;(o=this.instance)==null||o.set_trace_observer(i)}getPanicData(){let i=`
# Player Info
`;if(i+=`Allows script access: ${this.loadedConfig?this.loadedConfig.allowScriptAccess:!1}
`,i+=`${this.rendererDebugInfo}
`,i+=this.debugPlayerInfo(),i+=`
# Page Info
`,i+=`Page URL: ${document.location.href}
`,this.swfUrl&&(i+=`SWF URL: ${this.swfUrl}
`),i+=`
# Browser Info
`,i+=`User Agent: ${window.navigator.userAgent}
`,i+=`Platform: ${window.navigator.platform}
`,i+=`Has touch support: ${window.navigator.maxTouchPoints>0}
`,i+=`
# Ruffle Info
`,i+=`Version: ${_n.versionNumber}
`,i+=`Name: ${_n.versionName}
`,i+=`Channel: ${_n.versionChannel}
`,i+=`Built: ${_n.buildDate}
`,i+=`Commit: ${_n.commitHash}
`,i+=`Is extension: ${Nt}
`,i+=`
# Metadata
`,this.metadata)for(const[o,u]of Object.entries(this.metadata))i+=`${o}: ${u}
`;return i}panic(i){var f;if(this.panicked)return;this.panicked=!0,this.hideSplashScreen();const o=i;if(i instanceof Error&&(i.name==="AbortError"||i.message.includes("AbortError")))return;if(i instanceof gs){const m=(f=this.loadedConfig)==null?void 0:f.openInNewTab,h=this.loadedConfig&&"url"in this.loadedConfig?new URL(this.loadedConfig.url,document.baseURI):void 0;if(m&&h){this.addOpenInNewTabMessage(m,h);return}i=i.cause}const u=Object.assign([],{stackIndex:-1,avmStackIndex:-1});if(u.push(`# Error Info
`),i instanceof Error){if(u.push(`Error name: ${i.name}
`),u.push(`Error message: ${i.message}
`),i.stack){const m=u.push(`Error stack:
\`\`\`
${i.stack}
\`\`\`
`)-1;if(i.avmStack){const h=u.push(`AVM2 stack:
\`\`\`
    ${i.avmStack.trim().replace(/\t/g,"    ")}
\`\`\`
`)-1;u.avmStackIndex=h}u.stackIndex=m}}else u.push(`Error: ${i}
`);u.push(this.getPanicData()),Mb(this.container,o,u,this.swfUrl),this.destroy()}addOpenInNewTabMessage(i,o){var w,b;const u=new URL(o);if((w=this.loadedConfig)!=null&&w.parameters){const _=rs((b=this.loadedConfig)==null?void 0:b.parameters);Object.entries(_).forEach(([L,Q])=>{u.searchParams.set(L,Q)})}this.hideSplashScreen();const f=document.createElement("div");f.id="message-overlay";const m=document.createElement("div");m.className="message",m.appendChild(Ke("message-cant-embed"));const h=document.createElement("div"),k=document.createElement("a");k.innerText=ee("open-in-new-tab"),k.onclick=()=>i(u),h.appendChild(k),m.appendChild(h),f.appendChild(m),this.container.prepend(f)}displayRootMovieDownloadFailedMessage(i){var u;const o=(u=this.loadedConfig)==null?void 0:u.openInNewTab;if(o&&this.swfUrl&&window.location.origin!==this.swfUrl.origin)this.addOpenInNewTabMessage(o,this.swfUrl);else{const f=i?new wp(this.swfUrl):new yp(this.swfUrl);this.panic(f)}}displayMessage(i){const o=document.createElement("div");o.id="message-overlay";const u=document.createElement("div");u.className="message";const f=document.createElement("p");f.textContent=i,u.appendChild(f);const m=document.createElement("div"),h=document.createElement("button");h.id="continue-btn",h.textContent=ee("continue"),m.appendChild(h),u.appendChild(m),o.appendChild(u),this.container.prepend(o),this.container.querySelector("#continue-btn").onclick=()=>{o.parentNode.removeChild(o)}}displayUnsupportedVideo(i){const o=this.videoModal.querySelector("#video-holder");if(o){const u=document.createElement("video");u.addEventListener("contextmenu",f=>f.stopPropagation()),u.src=i,u.autoplay=!0,u.controls=!0,o.textContent="",o.appendChild(u),this.videoModal.classList.remove("hidden")}}displayClipboardModal(i){const o=this.clipboardModal.querySelector("#clipboard-modal-description");o&&(o.textContent=ee("clipboard-message-description",{variant:i?"access-denied":"unsupported"}),this.clipboardModal.classList.remove("hidden"))}hideSplashScreen(){this.splashScreen.classList.add("hidden"),this.container.classList.remove("hidden")}showSplashScreen(){this.splashScreen.classList.remove("hidden"),this.container.classList.add("hidden")}setMetadata(i){this.metadata=i,this._readyState=Qa.Loaded,this.hideSplashScreen(),this.element.dispatchEvent(new CustomEvent(Ut.LOADED_METADATA)),this.element.dispatchEvent(new CustomEvent(Ut.LOADED_DATA))}}Ut.LOADED_METADATA="loadedmetadata";Ut.LOADED_DATA="loadeddata";class Ib{constructor(i,o){this.isMuted=i,this.volume=o}get_volume(){return this.isMuted?0:this.volume/100}}function ks(s,i){const o={url:s},u=i("allowNetworking");u!==null&&(o.allowNetworking=u);const f=Sp(i("allowScriptAccess"),s);f!==null&&(o.allowScriptAccess=f);const m=i("bgcolor");m!==null&&(o.backgroundColor=m);const h=i("base");if(h!==null)if(h==="."){const ae=new URL(s,document.baseURI);o.base=new URL(h,ae).href}else o.base=h;const k=lp(i("menu"));k!==null&&(o.menu=k);const w=lp(i("allowFullScreen"));w!==null&&(o.allowFullscreen=w);const b=i("flashvars");b!==null&&(o.parameters=b);const _=i("quality");_!==null&&(o.quality=_);const L=i("salign");L!==null&&(o.salign=L);const Q=i("scale");Q!==null&&(o.scale=Q);const F=i("wmode");return F!==null&&(o.wmode=F),o}function Rs(s){if(s){let i="",o="";try{const u=new URL(s,ti);i=u.pathname,o=u.hostname}catch{}if(i.startsWith("/v/")&&/^(?:(?:www\.|m\.)?youtube(?:-nocookie)?\.com)|(?:youtu\.be)$/i.test(o))return!0}return!1}function Ss(s,i){var f;const o=s.getAttribute(i),u=((f=window.RufflePlayer)==null?void 0:f.config)??{};if(o)try{const m=new URL(o);m.protocol==="http:"&&window.location.protocol==="https:"&&(!("upgradeToHttps"in u)||u.upgradeToHttps!==!1)&&(m.protocol="https:",s.setAttribute(i,m.toString()))}catch{}}function Ds(s){let i=s.parentElement;for(;i!==null;){switch(i.tagName){case"AUDIO":case"VIDEO":return!0}i=i.parentElement}return!1}function os(s,i){const o=URL.createObjectURL(s),u=document.createElement("a");u.href=o,u.download=i,u.click(),URL.revokeObjectURL(o)}function Rp(s){const i=atob(s);return Uint8Array.from(i,o=>o.charCodeAt(0))}function ey(s,i){const o=Rp(s);return new Blob([o],{type:i})}function jr(s){try{const i=atob(s);return ny(i)}catch{return!1}}function ny(s){return s.charCodeAt(0)===0&&s.charCodeAt(1)===191&&s.slice(6,10)==="TCSO"&&[0,4,0,0,0,0].every((i,o)=>s.charCodeAt(10+o)===i)}function lp(s){switch(s==null?void 0:s.toLowerCase()){case"true":return!0;case"false":return!1;default:return null}}function Sp(s,i){switch(s==null?void 0:s.toLowerCase()){case"always":return!0;case"never":return!1;case"samedomain":try{return new URL(window.location.href).origin===new URL(i,window.location.href).origin}catch{return!1}default:return null}}var ty=function(s,i,o,u,f){if(u==="m")throw new TypeError("Private method is not writable");if(u==="a"&&!f)throw new TypeError("Private accessor was defined without a setter");if(typeof i=="function"?s!==i||!f:!i.has(s))throw new TypeError("Cannot write private member to an object whose class did not declare it");return u==="a"?f.call(s,o):f?f.value=o:i.set(s,o),o},Oe=function(s,i,o,u){if(o==="a"&&!u)throw new TypeError("Private accessor was defined without a getter");if(typeof i=="function"?s!==i||!u:!i.has(s))throw new TypeError("Cannot read private member from an object whose class did not declare it");return o==="m"?u:o==="a"?u.call(s):u?u.value:i.get(s)},ze;class ay{constructor(i){ze.set(this,void 0),ty(this,ze,i,"f")}addFSCommandHandler(i){Oe(this,ze,"f").addFSCommandHandler(i)}get readyState(){return Oe(this,ze,"f")._readyState}get metadata(){return Oe(this,ze,"f").metadata}get loadedConfig(){return Oe(this,ze,"f").loadedConfig??null}async reload(){await Oe(this,ze,"f").reload()}async load(i,o=!1){await Oe(this,ze,"f").load(i,o)}resume(){Oe(this,ze,"f").play()}get isPlaying(){return Oe(this,ze,"f").isPlaying}get volume(){return Oe(this,ze,"f").volume}set volume(i){Oe(this,ze,"f").volume=i}get fullscreenEnabled(){return Oe(this,ze,"f").fullscreenEnabled}get isFullscreen(){return Oe(this,ze,"f").isFullscreen}setFullscreen(i){Oe(this,ze,"f").setFullscreen(i)}requestFullscreen(){Oe(this,ze,"f").enterFullscreen()}exitFullscreen(){Oe(this,ze,"f").exitFullscreen()}async downloadSwf(){await Oe(this,ze,"f").downloadSwf()}displayMessage(i){Oe(this,ze,"f").displayMessage(i)}suspend(){Oe(this,ze,"f").pause()}get suspended(){return!Oe(this,ze,"f").isPlaying}set traceObserver(i){Oe(this,ze,"f").traceObserver=i}get config(){return Oe(this,ze,"f").config}set config(i){Oe(this,ze,"f").config=i}callExternalInterface(i,...o){return Oe(this,ze,"f").callExternalInterface(i,o)}}ze=new WeakMap;var pe=function(s,i,o,u){if(o==="a"&&!u)throw new TypeError("Private accessor was defined without a getter");if(typeof i=="function"?s!==i||!u:!i.has(s))throw new TypeError("Cannot read private member from an object whose class did not declare it");return o==="m"?u:o==="a"?u.call(s):u?u.value:i.get(s)},ip=function(s,i,o,u,f){if(u==="m")throw new TypeError("Private method is not writable");if(u==="a"&&!f)throw new TypeError("Private accessor was defined without a setter");if(typeof i=="function"?s!==i||!f:!i.has(s))throw new TypeError("Cannot write private member to an object whose class did not declare it");return u==="a"?f.call(s,o):f?f.value=o:i.set(s,o),o},de,Pl;class Os extends HTMLElement{get onFSCommand(){return pe(this,Pl,"f")}set onFSCommand(i){ip(this,Pl,i,"f")}get readyState(){return pe(this,de,"f")._readyState}get metadata(){return pe(this,de,"f").metadata}constructor(){super(),de.set(this,void 0),Pl.set(this,null),ip(this,de,new Ut(this,()=>this.debugPlayerInfo(),i=>{try{Object.defineProperty(this,i,{value:(...o)=>pe(this,de,"f").callExternalInterface(i,o),configurable:!0})}catch(o){console.warn(`Error setting ExternalInterface legacy callback for ${i}`,o)}}),"f"),pe(this,de,"f").addFSCommandHandler((i,o)=>{var u;(u=pe(this,Pl,"f"))==null||u.call(this,i,o)})}ruffle(i){if((i??1)===1)return new ay(pe(this,de,"f"));throw new Error(`Version ${i} not supported.`)}get loadedConfig(){return pe(this,de,"f").loadedConfig??null}connectedCallback(){pe(this,de,"f").updateStyles()}static get observedAttributes(){return["width","height"]}attributeChangedCallback(i,o,u){(i==="width"||i==="height")&&pe(this,de,"f").updateStyles()}disconnectedCallback(){pe(this,de,"f").destroy()}async reload(){await pe(this,de,"f").reload()}async load(i,o=!1){await pe(this,de,"f").load(i,o)}play(){pe(this,de,"f").play()}get isPlaying(){return pe(this,de,"f").isPlaying}get volume(){return pe(this,de,"f").volume}set volume(i){pe(this,de,"f").volume=i}get fullscreenEnabled(){return pe(this,de,"f").fullscreenEnabled}get isFullscreen(){return pe(this,de,"f").isFullscreen}setFullscreen(i){pe(this,de,"f").setFullscreen(i)}enterFullscreen(){pe(this,de,"f").enterFullscreen()}exitFullscreen(){pe(this,de,"f").exitFullscreen()}async downloadSwf(){await pe(this,de,"f").downloadSwf()}pause(){pe(this,de,"f").pause()}set traceObserver(i){pe(this,de,"f").traceObserver=i}debugPlayerInfo(){return""}PercentLoaded(){return pe(this,de,"f")._readyState===Qa.Loaded?100:0}get config(){return pe(this,de,"f").config}set config(i){pe(this,de,"f").config=i}displayMessage(i){pe(this,de,"f").displayMessage(i)}}de=new WeakMap,Pl=new WeakMap;function zp(s,i){if(s){for(const o of s.attributes)if(o.specified){if(o.name==="title"&&o.value==="Adobe Flash Player")continue;try{i.setAttribute(o.name,o.value)}catch{console.warn(`Unable to set attribute ${o.name} on Ruffle instance`)}}for(const o of Array.from(s.children))i.appendChild(o)}}class Pa extends Os{connectedCallback(){super.connectedCallback();const i=this.attributes.getNamedItem("src");if(i){const o=f=>{var m;return((m=this.attributes.getNamedItem(f))==null?void 0:m.value)??null},u=ks(i.value,o);this.load(u,!0)}}get nodeName(){return"EMBED"}get src(){var i;return(i=this.attributes.getNamedItem("src"))==null?void 0:i.value}set src(i){if(i){const o=document.createAttribute("src");o.value=i,this.attributes.setNamedItem(o)}else this.attributes.removeNamedItem("src")}static get observedAttributes(){return["src","width","height"]}attributeChangedCallback(i,o,u){if(super.attributeChangedCallback(i,o,u),this.isConnected&&i==="src"){const f=this.attributes.getNamedItem("src");if(f){const m=k=>{var w;return((w=this.attributes.getNamedItem(k))==null?void 0:w.value)??null},h=ks(f.value,m);this.load(h,!0)}}}static isInterdictable(i){const o=i.getAttribute("src"),u=i.getAttribute("type");return!o||Ds(i)?!1:Rs(o)?(Ss(i,"src"),!1):bp(o,u)}static fromNativeEmbedElement(i){const o=Ts("ruffle-embed",Pa),u=document.createElement(o);return zp(i,u),u}get height(){return this.getAttribute("height")||""}set height(i){this.setAttribute("height",i)}get width(){return this.getAttribute("width")||""}set width(i){this.setAttribute("width",i)}get type(){return this.getAttribute("type")||""}set type(i){this.setAttribute("type",i)}}function ly(s,i,o){i=i.toLowerCase();for(const[u,f]of Object.entries(s))if(u.toLowerCase()===i)return f;return o}function rp(s){var o,u;const i={};for(const f of s.children)if(f instanceof HTMLParamElement){const m=(o=f.attributes.getNamedItem("name"))==null?void 0:o.value,h=(u=f.attributes.getNamedItem("value"))==null?void 0:u.value;m&&h&&(i[m]=h)}return i}class Wa extends Os{constructor(){super(...arguments),this.params={}}connectedCallback(){var o;super.connectedCallback(),this.params=rp(this);let i=null;if(this.attributes.getNamedItem("data")?i=(o=this.attributes.getNamedItem("data"))==null?void 0:o.value:this.params.movie&&(i=this.params.movie),i){const u=["allowNetworking","base","bgcolor","flashvars"],m=ks(i,h=>ly(this.params,h,u.includes(h)?this.getAttribute(h):null));this.load(m,!0)}}debugPlayerInfo(){var u;let i=`Player type: Object
`,o=null;return this.attributes.getNamedItem("data")?o=(u=this.attributes.getNamedItem("data"))==null?void 0:u.value:this.params.movie&&(o=this.params.movie),i+=`SWF URL: ${o}
`,Object.keys(this.params).forEach(f=>{i+=`Param ${f}: ${this.params[f]}
`}),Object.keys(this.attributes).forEach(f=>{var m;i+=`Attribute ${f}: ${(m=this.attributes.getNamedItem(f))==null?void 0:m.value}
`}),i}get nodeName(){return"OBJECT"}get data(){return this.getAttribute("data")}set data(i){if(i){const o=document.createAttribute("data");o.value=i,this.attributes.setNamedItem(o)}else this.attributes.removeNamedItem("data")}static isInterdictable(i){var k,w,b;if(Ds(i)||i.getElementsByTagName("ruffle-object").length>0||i.getElementsByTagName("ruffle-embed").length>0)return!1;const o=(k=i.attributes.getNamedItem("data"))==null?void 0:k.value.toLowerCase(),u=((w=i.attributes.getNamedItem("type"))==null?void 0:w.value)??null,f=rp(i);let m;if(o){if(Rs(o))return Ss(i,"data"),!1;m=o}else if(f&&f.movie){if(Rs(f.movie)){const _=i.querySelector("param[name='movie']");if(_){Ss(_,"value");const L=_.getAttribute("value");L&&i.setAttribute("data",L)}return!1}m=f.movie}else return!1;const h=(b=i.attributes.getNamedItem("classid"))==null?void 0:b.value.toLowerCase();return h===kb.toLowerCase()?!Array.from(i.getElementsByTagName("object")).some(Wa.isInterdictable)&&!Array.from(i.getElementsByTagName("embed")).some(Pa.isInterdictable):h?!1:bp(m,u)}static fromNativeObjectElement(i){const o=Ts("ruffle-object",Wa),u=document.createElement(o);for(const f of Array.from(i.getElementsByTagName("embed")))Pa.isInterdictable(f)&&f.remove();for(const f of Array.from(i.getElementsByTagName("object")))Wa.isInterdictable(f)&&f.remove();return zp(i,u),u}get height(){return this.getAttribute("height")||""}set height(i){this.setAttribute("height",i)}get width(){return this.getAttribute("width")||""}set width(i){this.setAttribute("width",i)}get type(){return this.getAttribute("type")||""}set type(i){this.setAttribute("type",i)}}class zs{constructor(i){if(this.__mimeTypes=[],this.__namedMimeTypes={},i)for(let o=0;o<i.length;o++)this.install(i[o])}install(i){const o=new xp(i),u=this.__mimeTypes.length;this.__mimeTypes.push(o),this.__namedMimeTypes[i.type]=o,this[o.type]=o,this[u]=o}item(i){return this.__mimeTypes[i>>>0]}namedItem(i){return this.__namedMimeTypes[i]}get length(){return this.__mimeTypes.length}[Symbol.iterator](){return this.__mimeTypes[Symbol.iterator]()}get[Symbol.toStringTag](){return"MimeTypeArray"}}class xp{constructor(i){this.__mimeType=i}get type(){return this.__mimeType.type}get description(){return this.__mimeType.description}get suffixes(){return this.__mimeType.suffixes}get enabledPlugin(){return this.__mimeType.enabledPlugin}get[Symbol.toStringTag](){return"MimeType"}}class iy extends zs{constructor(i,o,u){super(),this.name=i,this.description=o,this.filename=u}}class op{constructor(i){this.__plugins=[],this.__namedPlugins={};for(let o=0;o<i.length;o++)this.install(i[o])}install(i){const o=this.__plugins.length;this.__plugins.push(i),this.__namedPlugins[i.name]=i,this[i.name]=i,this[o]=i}item(i){return this.__plugins[i>>>0]}namedItem(i){return this.__namedPlugins[i]}refresh(){}[Symbol.iterator](){return this.__plugins[Symbol.iterator]()}get[Symbol.toStringTag](){return"PluginArray"}get length(){return this.__plugins.length}}const ct=new iy("Shockwave Flash","Shockwave Flash 32.0 r0","ruffle.js");ct.install({type:hp,description:"Shockwave Flash",suffixes:"spl",enabledPlugin:ct});ct.install({type:pp,description:"Shockwave Flash",suffixes:"swf",enabledPlugin:ct});ct.install({type:vp,description:"Shockwave Flash",suffixes:"swf",enabledPlugin:ct});ct.install({type:gp,description:"Shockwave Flash",suffixes:"swf",enabledPlugin:ct});function ry(s){if(navigator.plugins.namedItem("Shockwave Flash"))return;(!("install"in navigator.plugins)||!navigator.plugins.install)&&(Object.defineProperty(window,"PluginArray",{value:op}),Object.defineProperty(navigator,"plugins",{value:new op(navigator.plugins),writable:!1})),navigator.plugins.install(s),s.length>0&&(!("install"in navigator.mimeTypes)||!navigator.mimeTypes.install)&&(Object.defineProperty(window,"MimeTypeArray",{value:zs}),Object.defineProperty(window,"MimeType",{value:xp}),Object.defineProperty(navigator,"mimeTypes",{value:new zs(navigator.mimeTypes),writable:!1}));const o=navigator.mimeTypes;for(let u=0;u<s.length;u+=1)o.install(s[u])}function oy(s){let i=(ni==null?void 0:ni.href)??"";return!Nt&&"publicPath"in s&&s.publicPath!==null&&s.publicPath!==void 0&&(i=s.publicPath),i!==""&&!i.endsWith("/")&&(i+="/"),i}var sp;const ri=((sp=window.RufflePlayer)==null?void 0:sp.config)??{},uy=oy(ri)+"ruffle.js";let us,ss;function sy(){var s;return"favorFlash"in ri&&ri.favorFlash===!1?!1:(((s=navigator.plugins.namedItem("Shockwave Flash"))==null?void 0:s.filename)??"ruffle.js")!=="ruffle.js"}function Ep(){try{us=us??document.getElementsByTagName("object"),ss=ss??document.getElementsByTagName("embed");for(const s of Array.from(us))if(Wa.isInterdictable(s)){const i=Wa.fromNativeObjectElement(s);s.replaceWith(i)}for(const s of Array.from(ss))if(Pa.isInterdictable(s)){const i=Pa.fromNativeEmbedElement(s);s.replaceWith(i)}}catch(s){console.error(`Serious error encountered when polyfilling native Flash elements: ${s}`)}}let cs,fs;function jp(){cs=cs??document.getElementsByTagName("iframe"),fs=fs??document.getElementsByTagName("frame"),[cs,fs].forEach(s=>{for(const i of s){if(i.dataset.rufflePolyfilled!==void 0)continue;i.dataset.rufflePolyfilled="";const o=i.contentWindow,u=`Couldn't load Ruffle into ${i.tagName}[${i.src}]: `;try{o.document.readyState==="complete"&&up(o,u)}catch(f){Nt||console.warn(u+f)}i.addEventListener("load",()=>{up(o,u)},!1)}})}async function up(s,i){await new Promise(u=>{window.setTimeout(()=>{u()},100)});let o;try{if(o=s.document,!o)return}catch(u){Nt||console.warn(i+u);return}if(!(!Nt&&o.documentElement.dataset.ruffleOptout!==void 0)){if(Nt)s.RufflePlayer||(s.RufflePlayer={}),s.RufflePlayer.config={...ri,...s.RufflePlayer.config??{}};else if(!s.RufflePlayer){const u=o.createElement("script");u.setAttribute("src",uy),u.onload=()=>{s.RufflePlayer={},s.RufflePlayer.config=ri},o.head.appendChild(u)}}}function cy(){new MutationObserver(function(i){i.some(u=>Array.from(u.addedNodes).some(f=>["EMBED","OBJECT"].includes(f.nodeName)||f instanceof Element&&f.querySelector("embed, object")!==null))&&(Ep(),jp())}).observe(document,{childList:!0,subtree:!0})}function fy(){ry(ct)}function dy(){sy()||(Ep(),jp(),cy())}const ai={version:_n.versionNumber+"+"+_n.buildDate.substring(0,10),polyfill(){dy()},pluginPolyfill(){fy()},createPlayer(){const s=Ts("ruffle-player",Os);return document.createElement(s)},options:{}};function my(s,i={}){let o;window.RufflePlayer instanceof Em?o=window.RufflePlayer:(o=new Em(window.RufflePlayer),window.RufflePlayer=o),o.sources[s]=ai,ai.options=i,("polyfills"in o.config?o.config.polyfills:!0)!==!1&&ai.pluginPolyfill()}my("local");ug.createRoot(document.getElementById("root")).render(q.jsx(ds.StrictMode,{children:q.jsx(hg,{ruffleBaseConfig:{autoplay:Ka.On,unmuteOverlay:li.Hidden,logLevel:Tr.Warn,letterbox:Ar.On,forceScale:!0,forceAlign:!0},allowSampleSwfs:!0,allowUrlLoading:!1})}));
