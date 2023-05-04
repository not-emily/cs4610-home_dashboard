function ck(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function gw(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Da={},hk={get exports(){return Da},set exports(t){Da=t}},Zc={},E={},dk={get exports(){return E},set exports(t){E=t}},ce={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pl=Symbol.for("react.element"),fk=Symbol.for("react.portal"),pk=Symbol.for("react.fragment"),mk=Symbol.for("react.strict_mode"),gk=Symbol.for("react.profiler"),yk=Symbol.for("react.provider"),vk=Symbol.for("react.context"),_k=Symbol.for("react.forward_ref"),wk=Symbol.for("react.suspense"),Ek=Symbol.for("react.memo"),Sk=Symbol.for("react.lazy"),By=Symbol.iterator;function Ck(t){return t===null||typeof t!="object"?null:(t=By&&t[By]||t["@@iterator"],typeof t=="function"?t:null)}var yw={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},vw=Object.assign,_w={};function yo(t,e,n){this.props=t,this.context=e,this.refs=_w,this.updater=n||yw}yo.prototype.isReactComponent={};yo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};yo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function ww(){}ww.prototype=yo.prototype;function nm(t,e,n){this.props=t,this.context=e,this.refs=_w,this.updater=n||yw}var rm=nm.prototype=new ww;rm.constructor=nm;vw(rm,yo.prototype);rm.isPureReactComponent=!0;var jy=Array.isArray,Ew=Object.prototype.hasOwnProperty,im={current:null},Sw={key:!0,ref:!0,__self:!0,__source:!0};function Cw(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Ew.call(e,r)&&!Sw.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:pl,type:t,key:s,ref:o,props:i,_owner:im.current}}function Tk(t,e){return{$$typeof:pl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function sm(t){return typeof t=="object"&&t!==null&&t.$$typeof===pl}function Ik(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Wy=/\/+/g;function ld(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Ik(""+t.key):e.toString(36)}function Ru(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case pl:case fk:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+ld(o,0):r,jy(i)?(n="",t!=null&&(n=t.replace(Wy,"$&/")+"/"),Ru(i,e,n,"",function(u){return u})):i!=null&&(sm(i)&&(i=Tk(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Wy,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",jy(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+ld(s,a);o+=Ru(s,e,n,l,i)}else if(l=Ck(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+ld(s,a++),o+=Ru(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Zl(t,e,n){if(t==null)return t;var r=[],i=0;return Ru(t,r,"","",function(s){return e.call(n,s,i++)}),r}function kk(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Wt={current:null},Au={transition:null},Nk={ReactCurrentDispatcher:Wt,ReactCurrentBatchConfig:Au,ReactCurrentOwner:im};ce.Children={map:Zl,forEach:function(t,e,n){Zl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Zl(t,function(){e++}),e},toArray:function(t){return Zl(t,function(e){return e})||[]},only:function(t){if(!sm(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ce.Component=yo;ce.Fragment=pk;ce.Profiler=gk;ce.PureComponent=nm;ce.StrictMode=mk;ce.Suspense=wk;ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Nk;ce.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=vw({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=im.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Ew.call(e,l)&&!Sw.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:pl,type:t.type,key:i,ref:s,props:r,_owner:o}};ce.createContext=function(t){return t={$$typeof:vk,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:yk,_context:t},t.Consumer=t};ce.createElement=Cw;ce.createFactory=function(t){var e=Cw.bind(null,t);return e.type=t,e};ce.createRef=function(){return{current:null}};ce.forwardRef=function(t){return{$$typeof:_k,render:t}};ce.isValidElement=sm;ce.lazy=function(t){return{$$typeof:Sk,_payload:{_status:-1,_result:t},_init:kk}};ce.memo=function(t,e){return{$$typeof:Ek,type:t,compare:e===void 0?null:e}};ce.startTransition=function(t){var e=Au.transition;Au.transition={};try{t()}finally{Au.transition=e}};ce.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ce.useCallback=function(t,e){return Wt.current.useCallback(t,e)};ce.useContext=function(t){return Wt.current.useContext(t)};ce.useDebugValue=function(){};ce.useDeferredValue=function(t){return Wt.current.useDeferredValue(t)};ce.useEffect=function(t,e){return Wt.current.useEffect(t,e)};ce.useId=function(){return Wt.current.useId()};ce.useImperativeHandle=function(t,e,n){return Wt.current.useImperativeHandle(t,e,n)};ce.useInsertionEffect=function(t,e){return Wt.current.useInsertionEffect(t,e)};ce.useLayoutEffect=function(t,e){return Wt.current.useLayoutEffect(t,e)};ce.useMemo=function(t,e){return Wt.current.useMemo(t,e)};ce.useReducer=function(t,e,n){return Wt.current.useReducer(t,e,n)};ce.useRef=function(t){return Wt.current.useRef(t)};ce.useState=function(t){return Wt.current.useState(t)};ce.useSyncExternalStore=function(t,e,n){return Wt.current.useSyncExternalStore(t,e,n)};ce.useTransition=function(){return Wt.current.useTransition()};ce.version="18.2.0";(function(t){t.exports=ce})(dk);const lt=gw(E),hf=ck({__proto__:null,default:lt},[E]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rk=E,Ak=Symbol.for("react.element"),Dk=Symbol.for("react.fragment"),xk=Object.prototype.hasOwnProperty,Pk=Rk.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,bk={key:!0,ref:!0,__self:!0,__source:!0};function Tw(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)xk.call(e,r)&&!bk.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Ak,type:t,key:s,ref:o,props:i,_owner:Pk.current}}Zc.Fragment=Dk;Zc.jsx=Tw;Zc.jsxs=Tw;(function(t){t.exports=Zc})(hk);const Qe=Da.Fragment,w=Da.jsx,K=Da.jsxs;var df={},Ku={},Ok={get exports(){return Ku},set exports(t){Ku=t}},dn={},ff={},Mk={get exports(){return ff},set exports(t){ff=t}},Iw={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(O,W){var $=O.length;O.push(W);e:for(;0<$;){var _e=$-1>>>1,x=O[_e];if(0<i(x,W))O[_e]=W,O[$]=x,$=_e;else break e}}function n(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var W=O[0],$=O.pop();if($!==W){O[0]=$;e:for(var _e=0,x=O.length,Z=x>>>1;_e<Z;){var oe=2*(_e+1)-1,tn=O[oe],Ze=oe+1,Sn=O[Ze];if(0>i(tn,$))Ze<x&&0>i(Sn,tn)?(O[_e]=Sn,O[Ze]=$,_e=Ze):(O[_e]=tn,O[oe]=$,_e=oe);else if(Ze<x&&0>i(Sn,$))O[_e]=Sn,O[Ze]=$,_e=Ze;else break e}}return W}function i(O,W){var $=O.sortIndex-W.sortIndex;return $!==0?$:O.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,m=!1,v=!1,_=!1,g=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(O){for(var W=n(u);W!==null;){if(W.callback===null)r(u);else if(W.startTime<=O)r(u),W.sortIndex=W.expirationTime,e(l,W);else break;W=n(u)}}function S(O){if(_=!1,y(O),!v)if(n(l)!==null)v=!0,en(I);else{var W=n(u);W!==null&&nr(S,W.startTime-O)}}function I(O,W){v=!1,_&&(_=!1,p(R),R=-1),m=!0;var $=d;try{for(y(W),h=n(l);h!==null&&(!(h.expirationTime>W)||O&&!Ee());){var _e=h.callback;if(typeof _e=="function"){h.callback=null,d=h.priorityLevel;var x=_e(h.expirationTime<=W);W=t.unstable_now(),typeof x=="function"?h.callback=x:h===n(l)&&r(l),y(W)}else r(l);h=n(l)}if(h!==null)var Z=!0;else{var oe=n(u);oe!==null&&nr(S,oe.startTime-W),Z=!1}return Z}finally{h=null,d=$,m=!1}}var D=!1,T=null,R=-1,re=5,Q=-1;function Ee(){return!(t.unstable_now()-Q<re)}function ot(){if(T!==null){var O=t.unstable_now();Q=O;var W=!0;try{W=T(!0,O)}finally{W?V():(D=!1,T=null)}}else D=!1}var V;if(typeof f=="function")V=function(){f(ot)};else if(typeof MessageChannel<"u"){var ve=new MessageChannel,Se=ve.port2;ve.port1.onmessage=ot,V=function(){Se.postMessage(null)}}else V=function(){g(ot,0)};function en(O){T=O,D||(D=!0,V())}function nr(O,W){R=g(function(){O(t.unstable_now())},W)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(O){O.callback=null},t.unstable_continueExecution=function(){v||m||(v=!0,en(I))},t.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):re=0<O?Math.floor(1e3/O):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(O){switch(d){case 1:case 2:case 3:var W=3;break;default:W=d}var $=d;d=W;try{return O()}finally{d=$}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(O,W){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var $=d;d=O;try{return W()}finally{d=$}},t.unstable_scheduleCallback=function(O,W,$){var _e=t.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?_e+$:_e):$=_e,O){case 1:var x=-1;break;case 2:x=250;break;case 5:x=1073741823;break;case 4:x=1e4;break;default:x=5e3}return x=$+x,O={id:c++,callback:W,priorityLevel:O,startTime:$,expirationTime:x,sortIndex:-1},$>_e?(O.sortIndex=$,e(u,O),n(l)===null&&O===n(u)&&(_?(p(R),R=-1):_=!0,nr(S,$-_e))):(O.sortIndex=x,e(l,O),v||m||(v=!0,en(I))),O},t.unstable_shouldYield=Ee,t.unstable_wrapCallback=function(O){var W=d;return function(){var $=d;d=W;try{return O.apply(this,arguments)}finally{d=$}}}})(Iw);(function(t){t.exports=Iw})(Mk);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kw=E,cn=ff;function P(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Nw=new Set,xa={};function is(t,e){Xs(t,e),Xs(t+"Capture",e)}function Xs(t,e){for(xa[t]=e,t=0;t<e.length;t++)Nw.add(e[t])}var vr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),pf=Object.prototype.hasOwnProperty,Lk=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Hy={},qy={};function Fk(t){return pf.call(qy,t)?!0:pf.call(Hy,t)?!1:Lk.test(t)?qy[t]=!0:(Hy[t]=!0,!1)}function $k(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Uk(t,e,n,r){if(e===null||typeof e>"u"||$k(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ht(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var wt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){wt[t]=new Ht(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];wt[e]=new Ht(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){wt[t]=new Ht(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){wt[t]=new Ht(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){wt[t]=new Ht(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){wt[t]=new Ht(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){wt[t]=new Ht(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){wt[t]=new Ht(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){wt[t]=new Ht(t,5,!1,t.toLowerCase(),null,!1,!1)});var om=/[\-:]([a-z])/g;function am(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(om,am);wt[e]=new Ht(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(om,am);wt[e]=new Ht(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(om,am);wt[e]=new Ht(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){wt[t]=new Ht(t,1,!1,t.toLowerCase(),null,!1,!1)});wt.xlinkHref=new Ht("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){wt[t]=new Ht(t,1,!1,t.toLowerCase(),null,!0,!0)});function lm(t,e,n,r){var i=wt.hasOwnProperty(e)?wt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Uk(e,n,i,r)&&(n=null),r||i===null?Fk(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Rr=kw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,eu=Symbol.for("react.element"),_s=Symbol.for("react.portal"),ws=Symbol.for("react.fragment"),um=Symbol.for("react.strict_mode"),mf=Symbol.for("react.profiler"),Rw=Symbol.for("react.provider"),Aw=Symbol.for("react.context"),cm=Symbol.for("react.forward_ref"),gf=Symbol.for("react.suspense"),yf=Symbol.for("react.suspense_list"),hm=Symbol.for("react.memo"),Mr=Symbol.for("react.lazy"),Dw=Symbol.for("react.offscreen"),Gy=Symbol.iterator;function Uo(t){return t===null||typeof t!="object"?null:(t=Gy&&t[Gy]||t["@@iterator"],typeof t=="function"?t:null)}var Be=Object.assign,ud;function ta(t){if(ud===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ud=e&&e[1]||""}return`
`+ud+t}var cd=!1;function hd(t,e){if(!t||cd)return"";cd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{cd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ta(t):""}function Vk(t){switch(t.tag){case 5:return ta(t.type);case 16:return ta("Lazy");case 13:return ta("Suspense");case 19:return ta("SuspenseList");case 0:case 2:case 15:return t=hd(t.type,!1),t;case 11:return t=hd(t.type.render,!1),t;case 1:return t=hd(t.type,!0),t;default:return""}}function vf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ws:return"Fragment";case _s:return"Portal";case mf:return"Profiler";case um:return"StrictMode";case gf:return"Suspense";case yf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Aw:return(t.displayName||"Context")+".Consumer";case Rw:return(t._context.displayName||"Context")+".Provider";case cm:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case hm:return e=t.displayName||null,e!==null?e:vf(t.type)||"Memo";case Mr:e=t._payload,t=t._init;try{return vf(t(e))}catch{}}return null}function zk(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return vf(e);case 8:return e===um?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ai(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function xw(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Bk(t){var e=xw(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function tu(t){t._valueTracker||(t._valueTracker=Bk(t))}function Pw(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=xw(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Qu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function _f(t,e){var n=e.checked;return Be({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Ky(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=ai(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function bw(t,e){e=e.checked,e!=null&&lm(t,"checked",e,!1)}function wf(t,e){bw(t,e);var n=ai(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ef(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ef(t,e.type,ai(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Qy(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ef(t,e,n){(e!=="number"||Qu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var na=Array.isArray;function Fs(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+ai(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Sf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(P(91));return Be({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Yy(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(P(92));if(na(n)){if(1<n.length)throw Error(P(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ai(n)}}function Ow(t,e){var n=ai(e.value),r=ai(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Xy(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Mw(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Cf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Mw(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var nu,Lw=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(nu=nu||document.createElement("div"),nu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=nu.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Pa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ca={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},jk=["Webkit","ms","Moz","O"];Object.keys(ca).forEach(function(t){jk.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ca[e]=ca[t]})});function Fw(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ca.hasOwnProperty(t)&&ca[t]?(""+e).trim():e+"px"}function $w(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Fw(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Wk=Be({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Tf(t,e){if(e){if(Wk[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(P(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(P(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(P(61))}if(e.style!=null&&typeof e.style!="object")throw Error(P(62))}}function If(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var kf=null;function dm(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Nf=null,$s=null,Us=null;function Jy(t){if(t=yl(t)){if(typeof Nf!="function")throw Error(P(280));var e=t.stateNode;e&&(e=ih(e),Nf(t.stateNode,t.type,e))}}function Uw(t){$s?Us?Us.push(t):Us=[t]:$s=t}function Vw(){if($s){var t=$s,e=Us;if(Us=$s=null,Jy(t),e)for(t=0;t<e.length;t++)Jy(e[t])}}function zw(t,e){return t(e)}function Bw(){}var dd=!1;function jw(t,e,n){if(dd)return t(e,n);dd=!0;try{return zw(t,e,n)}finally{dd=!1,($s!==null||Us!==null)&&(Bw(),Vw())}}function ba(t,e){var n=t.stateNode;if(n===null)return null;var r=ih(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(P(231,e,typeof n));return n}var Rf=!1;if(vr)try{var Vo={};Object.defineProperty(Vo,"passive",{get:function(){Rf=!0}}),window.addEventListener("test",Vo,Vo),window.removeEventListener("test",Vo,Vo)}catch{Rf=!1}function Hk(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var ha=!1,Yu=null,Xu=!1,Af=null,qk={onError:function(t){ha=!0,Yu=t}};function Gk(t,e,n,r,i,s,o,a,l){ha=!1,Yu=null,Hk.apply(qk,arguments)}function Kk(t,e,n,r,i,s,o,a,l){if(Gk.apply(this,arguments),ha){if(ha){var u=Yu;ha=!1,Yu=null}else throw Error(P(198));Xu||(Xu=!0,Af=u)}}function ss(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Ww(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Zy(t){if(ss(t)!==t)throw Error(P(188))}function Qk(t){var e=t.alternate;if(!e){if(e=ss(t),e===null)throw Error(P(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Zy(i),t;if(s===r)return Zy(i),e;s=s.sibling}throw Error(P(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(P(189))}}if(n.alternate!==r)throw Error(P(190))}if(n.tag!==3)throw Error(P(188));return n.stateNode.current===n?t:e}function Hw(t){return t=Qk(t),t!==null?qw(t):null}function qw(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=qw(t);if(e!==null)return e;t=t.sibling}return null}var Gw=cn.unstable_scheduleCallback,ev=cn.unstable_cancelCallback,Yk=cn.unstable_shouldYield,Xk=cn.unstable_requestPaint,He=cn.unstable_now,Jk=cn.unstable_getCurrentPriorityLevel,fm=cn.unstable_ImmediatePriority,Kw=cn.unstable_UserBlockingPriority,Ju=cn.unstable_NormalPriority,Zk=cn.unstable_LowPriority,Qw=cn.unstable_IdlePriority,eh=null,Gn=null;function eN(t){if(Gn&&typeof Gn.onCommitFiberRoot=="function")try{Gn.onCommitFiberRoot(eh,t,void 0,(t.current.flags&128)===128)}catch{}}var bn=Math.clz32?Math.clz32:rN,tN=Math.log,nN=Math.LN2;function rN(t){return t>>>=0,t===0?32:31-(tN(t)/nN|0)|0}var ru=64,iu=4194304;function ra(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Zu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=ra(a):(s&=o,s!==0&&(r=ra(s)))}else o=n&~i,o!==0?r=ra(o):s!==0&&(r=ra(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-bn(e),i=1<<n,r|=t[n],e&=~i;return r}function iN(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function sN(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-bn(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=iN(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Df(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Yw(){var t=ru;return ru<<=1,!(ru&4194240)&&(ru=64),t}function fd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ml(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-bn(e),t[e]=n}function oN(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-bn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function pm(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-bn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Ie=0;function Xw(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Jw,mm,Zw,eE,tE,xf=!1,su=[],Hr=null,qr=null,Gr=null,Oa=new Map,Ma=new Map,Fr=[],aN="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function tv(t,e){switch(t){case"focusin":case"focusout":Hr=null;break;case"dragenter":case"dragleave":qr=null;break;case"mouseover":case"mouseout":Gr=null;break;case"pointerover":case"pointerout":Oa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ma.delete(e.pointerId)}}function zo(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=yl(e),e!==null&&mm(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function lN(t,e,n,r,i){switch(e){case"focusin":return Hr=zo(Hr,t,e,n,r,i),!0;case"dragenter":return qr=zo(qr,t,e,n,r,i),!0;case"mouseover":return Gr=zo(Gr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Oa.set(s,zo(Oa.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ma.set(s,zo(Ma.get(s)||null,t,e,n,r,i)),!0}return!1}function nE(t){var e=Ni(t.target);if(e!==null){var n=ss(e);if(n!==null){if(e=n.tag,e===13){if(e=Ww(n),e!==null){t.blockedOn=e,tE(t.priority,function(){Zw(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Du(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Pf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);kf=r,n.target.dispatchEvent(r),kf=null}else return e=yl(n),e!==null&&mm(e),t.blockedOn=n,!1;e.shift()}return!0}function nv(t,e,n){Du(t)&&n.delete(e)}function uN(){xf=!1,Hr!==null&&Du(Hr)&&(Hr=null),qr!==null&&Du(qr)&&(qr=null),Gr!==null&&Du(Gr)&&(Gr=null),Oa.forEach(nv),Ma.forEach(nv)}function Bo(t,e){t.blockedOn===e&&(t.blockedOn=null,xf||(xf=!0,cn.unstable_scheduleCallback(cn.unstable_NormalPriority,uN)))}function La(t){function e(i){return Bo(i,t)}if(0<su.length){Bo(su[0],t);for(var n=1;n<su.length;n++){var r=su[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Hr!==null&&Bo(Hr,t),qr!==null&&Bo(qr,t),Gr!==null&&Bo(Gr,t),Oa.forEach(e),Ma.forEach(e),n=0;n<Fr.length;n++)r=Fr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Fr.length&&(n=Fr[0],n.blockedOn===null);)nE(n),n.blockedOn===null&&Fr.shift()}var Vs=Rr.ReactCurrentBatchConfig,ec=!0;function cN(t,e,n,r){var i=Ie,s=Vs.transition;Vs.transition=null;try{Ie=1,gm(t,e,n,r)}finally{Ie=i,Vs.transition=s}}function hN(t,e,n,r){var i=Ie,s=Vs.transition;Vs.transition=null;try{Ie=4,gm(t,e,n,r)}finally{Ie=i,Vs.transition=s}}function gm(t,e,n,r){if(ec){var i=Pf(t,e,n,r);if(i===null)Cd(t,e,r,tc,n),tv(t,r);else if(lN(i,t,e,n,r))r.stopPropagation();else if(tv(t,r),e&4&&-1<aN.indexOf(t)){for(;i!==null;){var s=yl(i);if(s!==null&&Jw(s),s=Pf(t,e,n,r),s===null&&Cd(t,e,r,tc,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Cd(t,e,r,null,n)}}var tc=null;function Pf(t,e,n,r){if(tc=null,t=dm(r),t=Ni(t),t!==null)if(e=ss(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Ww(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return tc=t,null}function rE(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Jk()){case fm:return 1;case Kw:return 4;case Ju:case Zk:return 16;case Qw:return 536870912;default:return 16}default:return 16}}var jr=null,ym=null,xu=null;function iE(){if(xu)return xu;var t,e=ym,n=e.length,r,i="value"in jr?jr.value:jr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return xu=i.slice(t,1<r?1-r:void 0)}function Pu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ou(){return!0}function rv(){return!1}function fn(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ou:rv,this.isPropagationStopped=rv,this}return Be(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ou)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ou)},persist:function(){},isPersistent:ou}),e}var vo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vm=fn(vo),gl=Be({},vo,{view:0,detail:0}),dN=fn(gl),pd,md,jo,th=Be({},gl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_m,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==jo&&(jo&&t.type==="mousemove"?(pd=t.screenX-jo.screenX,md=t.screenY-jo.screenY):md=pd=0,jo=t),pd)},movementY:function(t){return"movementY"in t?t.movementY:md}}),iv=fn(th),fN=Be({},th,{dataTransfer:0}),pN=fn(fN),mN=Be({},gl,{relatedTarget:0}),gd=fn(mN),gN=Be({},vo,{animationName:0,elapsedTime:0,pseudoElement:0}),yN=fn(gN),vN=Be({},vo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),_N=fn(vN),wN=Be({},vo,{data:0}),sv=fn(wN),EN={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},SN={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},CN={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function TN(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=CN[t])?!!e[t]:!1}function _m(){return TN}var IN=Be({},gl,{key:function(t){if(t.key){var e=EN[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Pu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?SN[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_m,charCode:function(t){return t.type==="keypress"?Pu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Pu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),kN=fn(IN),NN=Be({},th,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ov=fn(NN),RN=Be({},gl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_m}),AN=fn(RN),DN=Be({},vo,{propertyName:0,elapsedTime:0,pseudoElement:0}),xN=fn(DN),PN=Be({},th,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),bN=fn(PN),ON=[9,13,27,32],wm=vr&&"CompositionEvent"in window,da=null;vr&&"documentMode"in document&&(da=document.documentMode);var MN=vr&&"TextEvent"in window&&!da,sE=vr&&(!wm||da&&8<da&&11>=da),av=String.fromCharCode(32),lv=!1;function oE(t,e){switch(t){case"keyup":return ON.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function aE(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Es=!1;function LN(t,e){switch(t){case"compositionend":return aE(e);case"keypress":return e.which!==32?null:(lv=!0,av);case"textInput":return t=e.data,t===av&&lv?null:t;default:return null}}function FN(t,e){if(Es)return t==="compositionend"||!wm&&oE(t,e)?(t=iE(),xu=ym=jr=null,Es=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return sE&&e.locale!=="ko"?null:e.data;default:return null}}var $N={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function uv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!$N[t.type]:e==="textarea"}function lE(t,e,n,r){Uw(r),e=nc(e,"onChange"),0<e.length&&(n=new vm("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var fa=null,Fa=null;function UN(t){_E(t,0)}function nh(t){var e=Ts(t);if(Pw(e))return t}function VN(t,e){if(t==="change")return e}var uE=!1;if(vr){var yd;if(vr){var vd="oninput"in document;if(!vd){var cv=document.createElement("div");cv.setAttribute("oninput","return;"),vd=typeof cv.oninput=="function"}yd=vd}else yd=!1;uE=yd&&(!document.documentMode||9<document.documentMode)}function hv(){fa&&(fa.detachEvent("onpropertychange",cE),Fa=fa=null)}function cE(t){if(t.propertyName==="value"&&nh(Fa)){var e=[];lE(e,Fa,t,dm(t)),jw(UN,e)}}function zN(t,e,n){t==="focusin"?(hv(),fa=e,Fa=n,fa.attachEvent("onpropertychange",cE)):t==="focusout"&&hv()}function BN(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return nh(Fa)}function jN(t,e){if(t==="click")return nh(e)}function WN(t,e){if(t==="input"||t==="change")return nh(e)}function HN(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Fn=typeof Object.is=="function"?Object.is:HN;function $a(t,e){if(Fn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!pf.call(e,i)||!Fn(t[i],e[i]))return!1}return!0}function dv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function fv(t,e){var n=dv(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=dv(n)}}function hE(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?hE(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function dE(){for(var t=window,e=Qu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Qu(t.document)}return e}function Em(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function qN(t){var e=dE(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&hE(n.ownerDocument.documentElement,n)){if(r!==null&&Em(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=fv(n,s);var o=fv(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var GN=vr&&"documentMode"in document&&11>=document.documentMode,Ss=null,bf=null,pa=null,Of=!1;function pv(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Of||Ss==null||Ss!==Qu(r)||(r=Ss,"selectionStart"in r&&Em(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),pa&&$a(pa,r)||(pa=r,r=nc(bf,"onSelect"),0<r.length&&(e=new vm("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ss)))}function au(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Cs={animationend:au("Animation","AnimationEnd"),animationiteration:au("Animation","AnimationIteration"),animationstart:au("Animation","AnimationStart"),transitionend:au("Transition","TransitionEnd")},_d={},fE={};vr&&(fE=document.createElement("div").style,"AnimationEvent"in window||(delete Cs.animationend.animation,delete Cs.animationiteration.animation,delete Cs.animationstart.animation),"TransitionEvent"in window||delete Cs.transitionend.transition);function rh(t){if(_d[t])return _d[t];if(!Cs[t])return t;var e=Cs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in fE)return _d[t]=e[n];return t}var pE=rh("animationend"),mE=rh("animationiteration"),gE=rh("animationstart"),yE=rh("transitionend"),vE=new Map,mv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function pi(t,e){vE.set(t,e),is(e,[t])}for(var wd=0;wd<mv.length;wd++){var Ed=mv[wd],KN=Ed.toLowerCase(),QN=Ed[0].toUpperCase()+Ed.slice(1);pi(KN,"on"+QN)}pi(pE,"onAnimationEnd");pi(mE,"onAnimationIteration");pi(gE,"onAnimationStart");pi("dblclick","onDoubleClick");pi("focusin","onFocus");pi("focusout","onBlur");pi(yE,"onTransitionEnd");Xs("onMouseEnter",["mouseout","mouseover"]);Xs("onMouseLeave",["mouseout","mouseover"]);Xs("onPointerEnter",["pointerout","pointerover"]);Xs("onPointerLeave",["pointerout","pointerover"]);is("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));is("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));is("onBeforeInput",["compositionend","keypress","textInput","paste"]);is("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));is("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));is("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ia="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),YN=new Set("cancel close invalid load scroll toggle".split(" ").concat(ia));function gv(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Kk(r,e,void 0,t),t.currentTarget=null}function _E(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;gv(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;gv(i,a,u),s=l}}}if(Xu)throw t=Af,Xu=!1,Af=null,t}function De(t,e){var n=e[Uf];n===void 0&&(n=e[Uf]=new Set);var r=t+"__bubble";n.has(r)||(wE(e,t,2,!1),n.add(r))}function Sd(t,e,n){var r=0;e&&(r|=4),wE(n,t,r,e)}var lu="_reactListening"+Math.random().toString(36).slice(2);function Ua(t){if(!t[lu]){t[lu]=!0,Nw.forEach(function(n){n!=="selectionchange"&&(YN.has(n)||Sd(n,!1,t),Sd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[lu]||(e[lu]=!0,Sd("selectionchange",!1,e))}}function wE(t,e,n,r){switch(rE(e)){case 1:var i=cN;break;case 4:i=hN;break;default:i=gm}n=i.bind(null,e,n,t),i=void 0,!Rf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Cd(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Ni(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}jw(function(){var u=s,c=dm(n),h=[];e:{var d=vE.get(t);if(d!==void 0){var m=vm,v=t;switch(t){case"keypress":if(Pu(n)===0)break e;case"keydown":case"keyup":m=kN;break;case"focusin":v="focus",m=gd;break;case"focusout":v="blur",m=gd;break;case"beforeblur":case"afterblur":m=gd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=iv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=pN;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=AN;break;case pE:case mE:case gE:m=yN;break;case yE:m=xN;break;case"scroll":m=dN;break;case"wheel":m=bN;break;case"copy":case"cut":case"paste":m=_N;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=ov}var _=(e&4)!==0,g=!_&&t==="scroll",p=_?d!==null?d+"Capture":null:d;_=[];for(var f=u,y;f!==null;){y=f;var S=y.stateNode;if(y.tag===5&&S!==null&&(y=S,p!==null&&(S=ba(f,p),S!=null&&_.push(Va(f,S,y)))),g)break;f=f.return}0<_.length&&(d=new m(d,v,null,n,c),h.push({event:d,listeners:_}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",d&&n!==kf&&(v=n.relatedTarget||n.fromElement)&&(Ni(v)||v[_r]))break e;if((m||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,m?(v=n.relatedTarget||n.toElement,m=u,v=v?Ni(v):null,v!==null&&(g=ss(v),v!==g||v.tag!==5&&v.tag!==6)&&(v=null)):(m=null,v=u),m!==v)){if(_=iv,S="onMouseLeave",p="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(_=ov,S="onPointerLeave",p="onPointerEnter",f="pointer"),g=m==null?d:Ts(m),y=v==null?d:Ts(v),d=new _(S,f+"leave",m,n,c),d.target=g,d.relatedTarget=y,S=null,Ni(c)===u&&(_=new _(p,f+"enter",v,n,c),_.target=y,_.relatedTarget=g,S=_),g=S,m&&v)t:{for(_=m,p=v,f=0,y=_;y;y=ms(y))f++;for(y=0,S=p;S;S=ms(S))y++;for(;0<f-y;)_=ms(_),f--;for(;0<y-f;)p=ms(p),y--;for(;f--;){if(_===p||p!==null&&_===p.alternate)break t;_=ms(_),p=ms(p)}_=null}else _=null;m!==null&&yv(h,d,m,_,!1),v!==null&&g!==null&&yv(h,g,v,_,!0)}}e:{if(d=u?Ts(u):window,m=d.nodeName&&d.nodeName.toLowerCase(),m==="select"||m==="input"&&d.type==="file")var I=VN;else if(uv(d))if(uE)I=WN;else{I=BN;var D=zN}else(m=d.nodeName)&&m.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(I=jN);if(I&&(I=I(t,u))){lE(h,I,n,c);break e}D&&D(t,d,u),t==="focusout"&&(D=d._wrapperState)&&D.controlled&&d.type==="number"&&Ef(d,"number",d.value)}switch(D=u?Ts(u):window,t){case"focusin":(uv(D)||D.contentEditable==="true")&&(Ss=D,bf=u,pa=null);break;case"focusout":pa=bf=Ss=null;break;case"mousedown":Of=!0;break;case"contextmenu":case"mouseup":case"dragend":Of=!1,pv(h,n,c);break;case"selectionchange":if(GN)break;case"keydown":case"keyup":pv(h,n,c)}var T;if(wm)e:{switch(t){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else Es?oE(t,n)&&(R="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(sE&&n.locale!=="ko"&&(Es||R!=="onCompositionStart"?R==="onCompositionEnd"&&Es&&(T=iE()):(jr=c,ym="value"in jr?jr.value:jr.textContent,Es=!0)),D=nc(u,R),0<D.length&&(R=new sv(R,t,null,n,c),h.push({event:R,listeners:D}),T?R.data=T:(T=aE(n),T!==null&&(R.data=T)))),(T=MN?LN(t,n):FN(t,n))&&(u=nc(u,"onBeforeInput"),0<u.length&&(c=new sv("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=T))}_E(h,e)})}function Va(t,e,n){return{instance:t,listener:e,currentTarget:n}}function nc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ba(t,n),s!=null&&r.unshift(Va(t,s,i)),s=ba(t,e),s!=null&&r.push(Va(t,s,i))),t=t.return}return r}function ms(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function yv(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=ba(n,s),l!=null&&o.unshift(Va(n,l,a))):i||(l=ba(n,s),l!=null&&o.push(Va(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var XN=/\r\n?/g,JN=/\u0000|\uFFFD/g;function vv(t){return(typeof t=="string"?t:""+t).replace(XN,`
`).replace(JN,"")}function uu(t,e,n){if(e=vv(e),vv(t)!==e&&n)throw Error(P(425))}function rc(){}var Mf=null,Lf=null;function Ff(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var $f=typeof setTimeout=="function"?setTimeout:void 0,ZN=typeof clearTimeout=="function"?clearTimeout:void 0,_v=typeof Promise=="function"?Promise:void 0,eR=typeof queueMicrotask=="function"?queueMicrotask:typeof _v<"u"?function(t){return _v.resolve(null).then(t).catch(tR)}:$f;function tR(t){setTimeout(function(){throw t})}function Td(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),La(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);La(e)}function Kr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function wv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var _o=Math.random().toString(36).slice(2),Wn="__reactFiber$"+_o,za="__reactProps$"+_o,_r="__reactContainer$"+_o,Uf="__reactEvents$"+_o,nR="__reactListeners$"+_o,rR="__reactHandles$"+_o;function Ni(t){var e=t[Wn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[_r]||n[Wn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=wv(t);t!==null;){if(n=t[Wn])return n;t=wv(t)}return e}t=n,n=t.parentNode}return null}function yl(t){return t=t[Wn]||t[_r],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ts(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(P(33))}function ih(t){return t[za]||null}var Vf=[],Is=-1;function mi(t){return{current:t}}function Oe(t){0>Is||(t.current=Vf[Is],Vf[Is]=null,Is--)}function Ae(t,e){Is++,Vf[Is]=t.current,t.current=e}var li={},Ft=mi(li),Xt=mi(!1),zi=li;function Js(t,e){var n=t.type.contextTypes;if(!n)return li;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Jt(t){return t=t.childContextTypes,t!=null}function ic(){Oe(Xt),Oe(Ft)}function Ev(t,e,n){if(Ft.current!==li)throw Error(P(168));Ae(Ft,e),Ae(Xt,n)}function EE(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(P(108,zk(t)||"Unknown",i));return Be({},n,r)}function sc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||li,zi=Ft.current,Ae(Ft,t),Ae(Xt,Xt.current),!0}function Sv(t,e,n){var r=t.stateNode;if(!r)throw Error(P(169));n?(t=EE(t,e,zi),r.__reactInternalMemoizedMergedChildContext=t,Oe(Xt),Oe(Ft),Ae(Ft,t)):Oe(Xt),Ae(Xt,n)}var lr=null,sh=!1,Id=!1;function SE(t){lr===null?lr=[t]:lr.push(t)}function iR(t){sh=!0,SE(t)}function gi(){if(!Id&&lr!==null){Id=!0;var t=0,e=Ie;try{var n=lr;for(Ie=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}lr=null,sh=!1}catch(i){throw lr!==null&&(lr=lr.slice(t+1)),Gw(fm,gi),i}finally{Ie=e,Id=!1}}return null}var ks=[],Ns=0,oc=null,ac=0,pn=[],mn=0,Bi=null,ur=1,cr="";function Ci(t,e){ks[Ns++]=ac,ks[Ns++]=oc,oc=t,ac=e}function CE(t,e,n){pn[mn++]=ur,pn[mn++]=cr,pn[mn++]=Bi,Bi=t;var r=ur;t=cr;var i=32-bn(r)-1;r&=~(1<<i),n+=1;var s=32-bn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,ur=1<<32-bn(e)+i|n<<i|r,cr=s+t}else ur=1<<s|n<<i|r,cr=t}function Sm(t){t.return!==null&&(Ci(t,1),CE(t,1,0))}function Cm(t){for(;t===oc;)oc=ks[--Ns],ks[Ns]=null,ac=ks[--Ns],ks[Ns]=null;for(;t===Bi;)Bi=pn[--mn],pn[mn]=null,cr=pn[--mn],pn[mn]=null,ur=pn[--mn],pn[mn]=null}var an=null,sn=null,$e=!1,Dn=null;function TE(t,e){var n=gn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Cv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,an=t,sn=Kr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,an=t,sn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Bi!==null?{id:ur,overflow:cr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=gn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,an=t,sn=null,!0):!1;default:return!1}}function zf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Bf(t){if($e){var e=sn;if(e){var n=e;if(!Cv(t,e)){if(zf(t))throw Error(P(418));e=Kr(n.nextSibling);var r=an;e&&Cv(t,e)?TE(r,n):(t.flags=t.flags&-4097|2,$e=!1,an=t)}}else{if(zf(t))throw Error(P(418));t.flags=t.flags&-4097|2,$e=!1,an=t}}}function Tv(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;an=t}function cu(t){if(t!==an)return!1;if(!$e)return Tv(t),$e=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Ff(t.type,t.memoizedProps)),e&&(e=sn)){if(zf(t))throw IE(),Error(P(418));for(;e;)TE(t,e),e=Kr(e.nextSibling)}if(Tv(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(P(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){sn=Kr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}sn=null}}else sn=an?Kr(t.stateNode.nextSibling):null;return!0}function IE(){for(var t=sn;t;)t=Kr(t.nextSibling)}function Zs(){sn=an=null,$e=!1}function Tm(t){Dn===null?Dn=[t]:Dn.push(t)}var sR=Rr.ReactCurrentBatchConfig;function Rn(t,e){if(t&&t.defaultProps){e=Be({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var lc=mi(null),uc=null,Rs=null,Im=null;function km(){Im=Rs=uc=null}function Nm(t){var e=lc.current;Oe(lc),t._currentValue=e}function jf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function zs(t,e){uc=t,Im=Rs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Qt=!0),t.firstContext=null)}function _n(t){var e=t._currentValue;if(Im!==t)if(t={context:t,memoizedValue:e,next:null},Rs===null){if(uc===null)throw Error(P(308));Rs=t,uc.dependencies={lanes:0,firstContext:t}}else Rs=Rs.next=t;return e}var Ri=null;function Rm(t){Ri===null?Ri=[t]:Ri.push(t)}function kE(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Rm(e)):(n.next=i.next,i.next=n),e.interleaved=n,wr(t,r)}function wr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Lr=!1;function Am(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function NE(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function mr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Qr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ye&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,wr(t,n)}return i=r.interleaved,i===null?(e.next=e,Rm(r)):(e.next=i.next,i.next=e),r.interleaved=e,wr(t,n)}function bu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,pm(t,n)}}function Iv(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function cc(t,e,n,r){var i=t.updateQueue;Lr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,m=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,_=a;switch(d=e,m=n,_.tag){case 1:if(v=_.payload,typeof v=="function"){h=v.call(m,h,d);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=_.payload,d=typeof v=="function"?v.call(m,h,d):v,d==null)break e;h=Be({},h,d);break e;case 2:Lr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else m={eventTime:m,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=m,l=h):c=c.next=m,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Wi|=o,t.lanes=o,t.memoizedState=h}}function kv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(P(191,i));i.call(r)}}}var RE=new kw.Component().refs;function Wf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Be({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var oh={isMounted:function(t){return(t=t._reactInternals)?ss(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=jt(),i=Xr(t),s=mr(r,i);s.payload=e,n!=null&&(s.callback=n),e=Qr(t,s,i),e!==null&&(On(e,t,i,r),bu(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=jt(),i=Xr(t),s=mr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Qr(t,s,i),e!==null&&(On(e,t,i,r),bu(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=jt(),r=Xr(t),i=mr(n,r);i.tag=2,e!=null&&(i.callback=e),e=Qr(t,i,r),e!==null&&(On(e,t,r,n),bu(e,t,r))}};function Nv(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!$a(n,r)||!$a(i,s):!0}function AE(t,e,n){var r=!1,i=li,s=e.contextType;return typeof s=="object"&&s!==null?s=_n(s):(i=Jt(e)?zi:Ft.current,r=e.contextTypes,s=(r=r!=null)?Js(t,i):li),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=oh,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Rv(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&oh.enqueueReplaceState(e,e.state,null)}function Hf(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=RE,Am(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=_n(s):(s=Jt(e)?zi:Ft.current,i.context=Js(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Wf(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&oh.enqueueReplaceState(i,i.state,null),cc(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Wo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(P(309));var r=n.stateNode}if(!r)throw Error(P(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===RE&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(P(284));if(!n._owner)throw Error(P(290,t))}return t}function hu(t,e){throw t=Object.prototype.toString.call(e),Error(P(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Av(t){var e=t._init;return e(t._payload)}function DE(t){function e(p,f){if(t){var y=p.deletions;y===null?(p.deletions=[f],p.flags|=16):y.push(f)}}function n(p,f){if(!t)return null;for(;f!==null;)e(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=Jr(p,f),p.index=0,p.sibling=null,p}function s(p,f,y){return p.index=y,t?(y=p.alternate,y!==null?(y=y.index,y<f?(p.flags|=2,f):y):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,f,y,S){return f===null||f.tag!==6?(f=Pd(y,p.mode,S),f.return=p,f):(f=i(f,y),f.return=p,f)}function l(p,f,y,S){var I=y.type;return I===ws?c(p,f,y.props.children,S,y.key):f!==null&&(f.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===Mr&&Av(I)===f.type)?(S=i(f,y.props),S.ref=Wo(p,f,y),S.return=p,S):(S=Uu(y.type,y.key,y.props,null,p.mode,S),S.ref=Wo(p,f,y),S.return=p,S)}function u(p,f,y,S){return f===null||f.tag!==4||f.stateNode.containerInfo!==y.containerInfo||f.stateNode.implementation!==y.implementation?(f=bd(y,p.mode,S),f.return=p,f):(f=i(f,y.children||[]),f.return=p,f)}function c(p,f,y,S,I){return f===null||f.tag!==7?(f=Li(y,p.mode,S,I),f.return=p,f):(f=i(f,y),f.return=p,f)}function h(p,f,y){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Pd(""+f,p.mode,y),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case eu:return y=Uu(f.type,f.key,f.props,null,p.mode,y),y.ref=Wo(p,null,f),y.return=p,y;case _s:return f=bd(f,p.mode,y),f.return=p,f;case Mr:var S=f._init;return h(p,S(f._payload),y)}if(na(f)||Uo(f))return f=Li(f,p.mode,y,null),f.return=p,f;hu(p,f)}return null}function d(p,f,y,S){var I=f!==null?f.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return I!==null?null:a(p,f,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case eu:return y.key===I?l(p,f,y,S):null;case _s:return y.key===I?u(p,f,y,S):null;case Mr:return I=y._init,d(p,f,I(y._payload),S)}if(na(y)||Uo(y))return I!==null?null:c(p,f,y,S,null);hu(p,y)}return null}function m(p,f,y,S,I){if(typeof S=="string"&&S!==""||typeof S=="number")return p=p.get(y)||null,a(f,p,""+S,I);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case eu:return p=p.get(S.key===null?y:S.key)||null,l(f,p,S,I);case _s:return p=p.get(S.key===null?y:S.key)||null,u(f,p,S,I);case Mr:var D=S._init;return m(p,f,y,D(S._payload),I)}if(na(S)||Uo(S))return p=p.get(y)||null,c(f,p,S,I,null);hu(f,S)}return null}function v(p,f,y,S){for(var I=null,D=null,T=f,R=f=0,re=null;T!==null&&R<y.length;R++){T.index>R?(re=T,T=null):re=T.sibling;var Q=d(p,T,y[R],S);if(Q===null){T===null&&(T=re);break}t&&T&&Q.alternate===null&&e(p,T),f=s(Q,f,R),D===null?I=Q:D.sibling=Q,D=Q,T=re}if(R===y.length)return n(p,T),$e&&Ci(p,R),I;if(T===null){for(;R<y.length;R++)T=h(p,y[R],S),T!==null&&(f=s(T,f,R),D===null?I=T:D.sibling=T,D=T);return $e&&Ci(p,R),I}for(T=r(p,T);R<y.length;R++)re=m(T,p,R,y[R],S),re!==null&&(t&&re.alternate!==null&&T.delete(re.key===null?R:re.key),f=s(re,f,R),D===null?I=re:D.sibling=re,D=re);return t&&T.forEach(function(Ee){return e(p,Ee)}),$e&&Ci(p,R),I}function _(p,f,y,S){var I=Uo(y);if(typeof I!="function")throw Error(P(150));if(y=I.call(y),y==null)throw Error(P(151));for(var D=I=null,T=f,R=f=0,re=null,Q=y.next();T!==null&&!Q.done;R++,Q=y.next()){T.index>R?(re=T,T=null):re=T.sibling;var Ee=d(p,T,Q.value,S);if(Ee===null){T===null&&(T=re);break}t&&T&&Ee.alternate===null&&e(p,T),f=s(Ee,f,R),D===null?I=Ee:D.sibling=Ee,D=Ee,T=re}if(Q.done)return n(p,T),$e&&Ci(p,R),I;if(T===null){for(;!Q.done;R++,Q=y.next())Q=h(p,Q.value,S),Q!==null&&(f=s(Q,f,R),D===null?I=Q:D.sibling=Q,D=Q);return $e&&Ci(p,R),I}for(T=r(p,T);!Q.done;R++,Q=y.next())Q=m(T,p,R,Q.value,S),Q!==null&&(t&&Q.alternate!==null&&T.delete(Q.key===null?R:Q.key),f=s(Q,f,R),D===null?I=Q:D.sibling=Q,D=Q);return t&&T.forEach(function(ot){return e(p,ot)}),$e&&Ci(p,R),I}function g(p,f,y,S){if(typeof y=="object"&&y!==null&&y.type===ws&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case eu:e:{for(var I=y.key,D=f;D!==null;){if(D.key===I){if(I=y.type,I===ws){if(D.tag===7){n(p,D.sibling),f=i(D,y.props.children),f.return=p,p=f;break e}}else if(D.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===Mr&&Av(I)===D.type){n(p,D.sibling),f=i(D,y.props),f.ref=Wo(p,D,y),f.return=p,p=f;break e}n(p,D);break}else e(p,D);D=D.sibling}y.type===ws?(f=Li(y.props.children,p.mode,S,y.key),f.return=p,p=f):(S=Uu(y.type,y.key,y.props,null,p.mode,S),S.ref=Wo(p,f,y),S.return=p,p=S)}return o(p);case _s:e:{for(D=y.key;f!==null;){if(f.key===D)if(f.tag===4&&f.stateNode.containerInfo===y.containerInfo&&f.stateNode.implementation===y.implementation){n(p,f.sibling),f=i(f,y.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else e(p,f);f=f.sibling}f=bd(y,p.mode,S),f.return=p,p=f}return o(p);case Mr:return D=y._init,g(p,f,D(y._payload),S)}if(na(y))return v(p,f,y,S);if(Uo(y))return _(p,f,y,S);hu(p,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,y),f.return=p,p=f):(n(p,f),f=Pd(y,p.mode,S),f.return=p,p=f),o(p)):n(p,f)}return g}var eo=DE(!0),xE=DE(!1),vl={},Kn=mi(vl),Ba=mi(vl),ja=mi(vl);function Ai(t){if(t===vl)throw Error(P(174));return t}function Dm(t,e){switch(Ae(ja,e),Ae(Ba,t),Ae(Kn,vl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Cf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Cf(e,t)}Oe(Kn),Ae(Kn,e)}function to(){Oe(Kn),Oe(Ba),Oe(ja)}function PE(t){Ai(ja.current);var e=Ai(Kn.current),n=Cf(e,t.type);e!==n&&(Ae(Ba,t),Ae(Kn,n))}function xm(t){Ba.current===t&&(Oe(Kn),Oe(Ba))}var Ve=mi(0);function hc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var kd=[];function Pm(){for(var t=0;t<kd.length;t++)kd[t]._workInProgressVersionPrimary=null;kd.length=0}var Ou=Rr.ReactCurrentDispatcher,Nd=Rr.ReactCurrentBatchConfig,ji=0,ze=null,tt=null,ct=null,dc=!1,ma=!1,Wa=0,oR=0;function It(){throw Error(P(321))}function bm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Fn(t[n],e[n]))return!1;return!0}function Om(t,e,n,r,i,s){if(ji=s,ze=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ou.current=t===null||t.memoizedState===null?cR:hR,t=n(r,i),ma){s=0;do{if(ma=!1,Wa=0,25<=s)throw Error(P(301));s+=1,ct=tt=null,e.updateQueue=null,Ou.current=dR,t=n(r,i)}while(ma)}if(Ou.current=fc,e=tt!==null&&tt.next!==null,ji=0,ct=tt=ze=null,dc=!1,e)throw Error(P(300));return t}function Mm(){var t=Wa!==0;return Wa=0,t}function Bn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ct===null?ze.memoizedState=ct=t:ct=ct.next=t,ct}function wn(){if(tt===null){var t=ze.alternate;t=t!==null?t.memoizedState:null}else t=tt.next;var e=ct===null?ze.memoizedState:ct.next;if(e!==null)ct=e,tt=t;else{if(t===null)throw Error(P(310));tt=t,t={memoizedState:tt.memoizedState,baseState:tt.baseState,baseQueue:tt.baseQueue,queue:tt.queue,next:null},ct===null?ze.memoizedState=ct=t:ct=ct.next=t}return ct}function Ha(t,e){return typeof e=="function"?e(t):e}function Rd(t){var e=wn(),n=e.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=t;var r=tt,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((ji&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,ze.lanes|=c,Wi|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Fn(r,e.memoizedState)||(Qt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ze.lanes|=s,Wi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ad(t){var e=wn(),n=e.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Fn(s,e.memoizedState)||(Qt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function bE(){}function OE(t,e){var n=ze,r=wn(),i=e(),s=!Fn(r.memoizedState,i);if(s&&(r.memoizedState=i,Qt=!0),r=r.queue,Lm(FE.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||ct!==null&&ct.memoizedState.tag&1){if(n.flags|=2048,qa(9,LE.bind(null,n,r,i,e),void 0,null),ft===null)throw Error(P(349));ji&30||ME(n,e,i)}return i}function ME(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ze.updateQueue,e===null?(e={lastEffect:null,stores:null},ze.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function LE(t,e,n,r){e.value=n,e.getSnapshot=r,$E(e)&&UE(t)}function FE(t,e,n){return n(function(){$E(e)&&UE(t)})}function $E(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Fn(t,n)}catch{return!0}}function UE(t){var e=wr(t,1);e!==null&&On(e,t,1,-1)}function Dv(t){var e=Bn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ha,lastRenderedState:t},e.queue=t,t=t.dispatch=uR.bind(null,ze,t),[e.memoizedState,t]}function qa(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ze.updateQueue,e===null?(e={lastEffect:null,stores:null},ze.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function VE(){return wn().memoizedState}function Mu(t,e,n,r){var i=Bn();ze.flags|=t,i.memoizedState=qa(1|e,n,void 0,r===void 0?null:r)}function ah(t,e,n,r){var i=wn();r=r===void 0?null:r;var s=void 0;if(tt!==null){var o=tt.memoizedState;if(s=o.destroy,r!==null&&bm(r,o.deps)){i.memoizedState=qa(e,n,s,r);return}}ze.flags|=t,i.memoizedState=qa(1|e,n,s,r)}function xv(t,e){return Mu(8390656,8,t,e)}function Lm(t,e){return ah(2048,8,t,e)}function zE(t,e){return ah(4,2,t,e)}function BE(t,e){return ah(4,4,t,e)}function jE(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function WE(t,e,n){return n=n!=null?n.concat([t]):null,ah(4,4,jE.bind(null,e,t),n)}function Fm(){}function HE(t,e){var n=wn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&bm(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function qE(t,e){var n=wn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&bm(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function GE(t,e,n){return ji&21?(Fn(n,e)||(n=Yw(),ze.lanes|=n,Wi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Qt=!0),t.memoizedState=n)}function aR(t,e){var n=Ie;Ie=n!==0&&4>n?n:4,t(!0);var r=Nd.transition;Nd.transition={};try{t(!1),e()}finally{Ie=n,Nd.transition=r}}function KE(){return wn().memoizedState}function lR(t,e,n){var r=Xr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},QE(t))YE(e,n);else if(n=kE(t,e,n,r),n!==null){var i=jt();On(n,t,r,i),XE(n,e,r)}}function uR(t,e,n){var r=Xr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(QE(t))YE(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Fn(a,o)){var l=e.interleaved;l===null?(i.next=i,Rm(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=kE(t,e,i,r),n!==null&&(i=jt(),On(n,t,r,i),XE(n,e,r))}}function QE(t){var e=t.alternate;return t===ze||e!==null&&e===ze}function YE(t,e){ma=dc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function XE(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,pm(t,n)}}var fc={readContext:_n,useCallback:It,useContext:It,useEffect:It,useImperativeHandle:It,useInsertionEffect:It,useLayoutEffect:It,useMemo:It,useReducer:It,useRef:It,useState:It,useDebugValue:It,useDeferredValue:It,useTransition:It,useMutableSource:It,useSyncExternalStore:It,useId:It,unstable_isNewReconciler:!1},cR={readContext:_n,useCallback:function(t,e){return Bn().memoizedState=[t,e===void 0?null:e],t},useContext:_n,useEffect:xv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Mu(4194308,4,jE.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Mu(4194308,4,t,e)},useInsertionEffect:function(t,e){return Mu(4,2,t,e)},useMemo:function(t,e){var n=Bn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Bn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=lR.bind(null,ze,t),[r.memoizedState,t]},useRef:function(t){var e=Bn();return t={current:t},e.memoizedState=t},useState:Dv,useDebugValue:Fm,useDeferredValue:function(t){return Bn().memoizedState=t},useTransition:function(){var t=Dv(!1),e=t[0];return t=aR.bind(null,t[1]),Bn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ze,i=Bn();if($e){if(n===void 0)throw Error(P(407));n=n()}else{if(n=e(),ft===null)throw Error(P(349));ji&30||ME(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,xv(FE.bind(null,r,s,t),[t]),r.flags|=2048,qa(9,LE.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Bn(),e=ft.identifierPrefix;if($e){var n=cr,r=ur;n=(r&~(1<<32-bn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Wa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=oR++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},hR={readContext:_n,useCallback:HE,useContext:_n,useEffect:Lm,useImperativeHandle:WE,useInsertionEffect:zE,useLayoutEffect:BE,useMemo:qE,useReducer:Rd,useRef:VE,useState:function(){return Rd(Ha)},useDebugValue:Fm,useDeferredValue:function(t){var e=wn();return GE(e,tt.memoizedState,t)},useTransition:function(){var t=Rd(Ha)[0],e=wn().memoizedState;return[t,e]},useMutableSource:bE,useSyncExternalStore:OE,useId:KE,unstable_isNewReconciler:!1},dR={readContext:_n,useCallback:HE,useContext:_n,useEffect:Lm,useImperativeHandle:WE,useInsertionEffect:zE,useLayoutEffect:BE,useMemo:qE,useReducer:Ad,useRef:VE,useState:function(){return Ad(Ha)},useDebugValue:Fm,useDeferredValue:function(t){var e=wn();return tt===null?e.memoizedState=t:GE(e,tt.memoizedState,t)},useTransition:function(){var t=Ad(Ha)[0],e=wn().memoizedState;return[t,e]},useMutableSource:bE,useSyncExternalStore:OE,useId:KE,unstable_isNewReconciler:!1};function no(t,e){try{var n="",r=e;do n+=Vk(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Dd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function qf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var fR=typeof WeakMap=="function"?WeakMap:Map;function JE(t,e,n){n=mr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){mc||(mc=!0,np=r),qf(t,e)},n}function ZE(t,e,n){n=mr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){qf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){qf(t,e),typeof r!="function"&&(Yr===null?Yr=new Set([this]):Yr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Pv(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new fR;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=NR.bind(null,t,e,n),e.then(t,t))}function bv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Ov(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=mr(-1,1),e.tag=2,Qr(n,e,1))),n.lanes|=1),t)}var pR=Rr.ReactCurrentOwner,Qt=!1;function zt(t,e,n,r){e.child=t===null?xE(e,null,n,r):eo(e,t.child,n,r)}function Mv(t,e,n,r,i){n=n.render;var s=e.ref;return zs(e,i),r=Om(t,e,n,r,s,i),n=Mm(),t!==null&&!Qt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Er(t,e,i)):($e&&n&&Sm(e),e.flags|=1,zt(t,e,r,i),e.child)}function Lv(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Hm(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,e1(t,e,s,r,i)):(t=Uu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:$a,n(o,r)&&t.ref===e.ref)return Er(t,e,i)}return e.flags|=1,t=Jr(s,r),t.ref=e.ref,t.return=e,e.child=t}function e1(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if($a(s,r)&&t.ref===e.ref)if(Qt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Qt=!0);else return e.lanes=t.lanes,Er(t,e,i)}return Gf(t,e,n,r,i)}function t1(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ae(Ds,rn),rn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ae(Ds,rn),rn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Ae(Ds,rn),rn|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Ae(Ds,rn),rn|=r;return zt(t,e,i,n),e.child}function n1(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Gf(t,e,n,r,i){var s=Jt(n)?zi:Ft.current;return s=Js(e,s),zs(e,i),n=Om(t,e,n,r,s,i),r=Mm(),t!==null&&!Qt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Er(t,e,i)):($e&&r&&Sm(e),e.flags|=1,zt(t,e,n,i),e.child)}function Fv(t,e,n,r,i){if(Jt(n)){var s=!0;sc(e)}else s=!1;if(zs(e,i),e.stateNode===null)Lu(t,e),AE(e,n,r),Hf(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=_n(u):(u=Jt(n)?zi:Ft.current,u=Js(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Rv(e,o,r,u),Lr=!1;var d=e.memoizedState;o.state=d,cc(e,r,o,i),l=e.memoizedState,a!==r||d!==l||Xt.current||Lr?(typeof c=="function"&&(Wf(e,n,c,r),l=e.memoizedState),(a=Lr||Nv(e,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,NE(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Rn(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=_n(l):(l=Jt(n)?zi:Ft.current,l=Js(e,l));var m=n.getDerivedStateFromProps;(c=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&Rv(e,o,r,l),Lr=!1,d=e.memoizedState,o.state=d,cc(e,r,o,i);var v=e.memoizedState;a!==h||d!==v||Xt.current||Lr?(typeof m=="function"&&(Wf(e,n,m,r),v=e.memoizedState),(u=Lr||Nv(e,n,u,r,d,v,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return Kf(t,e,n,r,s,i)}function Kf(t,e,n,r,i,s){n1(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Sv(e,n,!1),Er(t,e,s);r=e.stateNode,pR.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=eo(e,t.child,null,s),e.child=eo(e,null,a,s)):zt(t,e,a,s),e.memoizedState=r.state,i&&Sv(e,n,!0),e.child}function r1(t){var e=t.stateNode;e.pendingContext?Ev(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Ev(t,e.context,!1),Dm(t,e.containerInfo)}function $v(t,e,n,r,i){return Zs(),Tm(i),e.flags|=256,zt(t,e,n,r),e.child}var Qf={dehydrated:null,treeContext:null,retryLane:0};function Yf(t){return{baseLanes:t,cachePool:null,transitions:null}}function i1(t,e,n){var r=e.pendingProps,i=Ve.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Ae(Ve,i&1),t===null)return Bf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ch(o,r,0,null),t=Li(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Yf(n),e.memoizedState=Qf,t):$m(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return mR(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Jr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Jr(a,s):(s=Li(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Yf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Qf,r}return s=t.child,t=s.sibling,r=Jr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function $m(t,e){return e=ch({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function du(t,e,n,r){return r!==null&&Tm(r),eo(e,t.child,null,n),t=$m(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function mR(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Dd(Error(P(422))),du(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=ch({mode:"visible",children:r.children},i,0,null),s=Li(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&eo(e,t.child,null,o),e.child.memoizedState=Yf(o),e.memoizedState=Qf,s);if(!(e.mode&1))return du(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(P(419)),r=Dd(s,r,void 0),du(t,e,o,r)}if(a=(o&t.childLanes)!==0,Qt||a){if(r=ft,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,wr(t,i),On(r,t,i,-1))}return Wm(),r=Dd(Error(P(421))),du(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=RR.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,sn=Kr(i.nextSibling),an=e,$e=!0,Dn=null,t!==null&&(pn[mn++]=ur,pn[mn++]=cr,pn[mn++]=Bi,ur=t.id,cr=t.overflow,Bi=e),e=$m(e,r.children),e.flags|=4096,e)}function Uv(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),jf(t.return,e,n)}function xd(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function s1(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(zt(t,e,r.children,n),r=Ve.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Uv(t,n,e);else if(t.tag===19)Uv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Ae(Ve,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&hc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),xd(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&hc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}xd(e,!0,n,null,s);break;case"together":xd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Lu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Er(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Wi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(P(153));if(e.child!==null){for(t=e.child,n=Jr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Jr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function gR(t,e,n){switch(e.tag){case 3:r1(e),Zs();break;case 5:PE(e);break;case 1:Jt(e.type)&&sc(e);break;case 4:Dm(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Ae(lc,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Ae(Ve,Ve.current&1),e.flags|=128,null):n&e.child.childLanes?i1(t,e,n):(Ae(Ve,Ve.current&1),t=Er(t,e,n),t!==null?t.sibling:null);Ae(Ve,Ve.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return s1(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ae(Ve,Ve.current),r)break;return null;case 22:case 23:return e.lanes=0,t1(t,e,n)}return Er(t,e,n)}var o1,Xf,a1,l1;o1=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Xf=function(){};a1=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Ai(Kn.current);var s=null;switch(n){case"input":i=_f(t,i),r=_f(t,r),s=[];break;case"select":i=Be({},i,{value:void 0}),r=Be({},r,{value:void 0}),s=[];break;case"textarea":i=Sf(t,i),r=Sf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=rc)}Tf(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(xa.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(xa.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&De("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};l1=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ho(t,e){if(!$e)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function kt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function yR(t,e,n){var r=e.pendingProps;switch(Cm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return kt(e),null;case 1:return Jt(e.type)&&ic(),kt(e),null;case 3:return r=e.stateNode,to(),Oe(Xt),Oe(Ft),Pm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(cu(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Dn!==null&&(sp(Dn),Dn=null))),Xf(t,e),kt(e),null;case 5:xm(e);var i=Ai(ja.current);if(n=e.type,t!==null&&e.stateNode!=null)a1(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(P(166));return kt(e),null}if(t=Ai(Kn.current),cu(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Wn]=e,r[za]=s,t=(e.mode&1)!==0,n){case"dialog":De("cancel",r),De("close",r);break;case"iframe":case"object":case"embed":De("load",r);break;case"video":case"audio":for(i=0;i<ia.length;i++)De(ia[i],r);break;case"source":De("error",r);break;case"img":case"image":case"link":De("error",r),De("load",r);break;case"details":De("toggle",r);break;case"input":Ky(r,s),De("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},De("invalid",r);break;case"textarea":Yy(r,s),De("invalid",r)}Tf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&uu(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&uu(r.textContent,a,t),i=["children",""+a]):xa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&De("scroll",r)}switch(n){case"input":tu(r),Qy(r,s,!0);break;case"textarea":tu(r),Xy(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=rc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Mw(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Wn]=e,t[za]=r,o1(t,e,!1,!1),e.stateNode=t;e:{switch(o=If(n,r),n){case"dialog":De("cancel",t),De("close",t),i=r;break;case"iframe":case"object":case"embed":De("load",t),i=r;break;case"video":case"audio":for(i=0;i<ia.length;i++)De(ia[i],t);i=r;break;case"source":De("error",t),i=r;break;case"img":case"image":case"link":De("error",t),De("load",t),i=r;break;case"details":De("toggle",t),i=r;break;case"input":Ky(t,r),i=_f(t,r),De("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Be({},r,{value:void 0}),De("invalid",t);break;case"textarea":Yy(t,r),i=Sf(t,r),De("invalid",t);break;default:i=r}Tf(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?$w(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Lw(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Pa(t,l):typeof l=="number"&&Pa(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(xa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&De("scroll",t):l!=null&&lm(t,s,l,o))}switch(n){case"input":tu(t),Qy(t,r,!1);break;case"textarea":tu(t),Xy(t);break;case"option":r.value!=null&&t.setAttribute("value",""+ai(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Fs(t,!!r.multiple,s,!1):r.defaultValue!=null&&Fs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=rc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return kt(e),null;case 6:if(t&&e.stateNode!=null)l1(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(P(166));if(n=Ai(ja.current),Ai(Kn.current),cu(e)){if(r=e.stateNode,n=e.memoizedProps,r[Wn]=e,(s=r.nodeValue!==n)&&(t=an,t!==null))switch(t.tag){case 3:uu(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&uu(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Wn]=e,e.stateNode=r}return kt(e),null;case 13:if(Oe(Ve),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if($e&&sn!==null&&e.mode&1&&!(e.flags&128))IE(),Zs(),e.flags|=98560,s=!1;else if(s=cu(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(P(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(P(317));s[Wn]=e}else Zs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;kt(e),s=!1}else Dn!==null&&(sp(Dn),Dn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ve.current&1?nt===0&&(nt=3):Wm())),e.updateQueue!==null&&(e.flags|=4),kt(e),null);case 4:return to(),Xf(t,e),t===null&&Ua(e.stateNode.containerInfo),kt(e),null;case 10:return Nm(e.type._context),kt(e),null;case 17:return Jt(e.type)&&ic(),kt(e),null;case 19:if(Oe(Ve),s=e.memoizedState,s===null)return kt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ho(s,!1);else{if(nt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=hc(t),o!==null){for(e.flags|=128,Ho(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ae(Ve,Ve.current&1|2),e.child}t=t.sibling}s.tail!==null&&He()>ro&&(e.flags|=128,r=!0,Ho(s,!1),e.lanes=4194304)}else{if(!r)if(t=hc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ho(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!$e)return kt(e),null}else 2*He()-s.renderingStartTime>ro&&n!==1073741824&&(e.flags|=128,r=!0,Ho(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=He(),e.sibling=null,n=Ve.current,Ae(Ve,r?n&1|2:n&1),e):(kt(e),null);case 22:case 23:return jm(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?rn&1073741824&&(kt(e),e.subtreeFlags&6&&(e.flags|=8192)):kt(e),null;case 24:return null;case 25:return null}throw Error(P(156,e.tag))}function vR(t,e){switch(Cm(e),e.tag){case 1:return Jt(e.type)&&ic(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return to(),Oe(Xt),Oe(Ft),Pm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return xm(e),null;case 13:if(Oe(Ve),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(P(340));Zs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Oe(Ve),null;case 4:return to(),null;case 10:return Nm(e.type._context),null;case 22:case 23:return jm(),null;case 24:return null;default:return null}}var fu=!1,At=!1,_R=typeof WeakSet=="function"?WeakSet:Set,L=null;function As(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){je(t,e,r)}else n.current=null}function Jf(t,e,n){try{n()}catch(r){je(t,e,r)}}var Vv=!1;function wR(t,e){if(Mf=ec,t=dE(),Em(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var m;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(m=h.firstChild)!==null;)d=h,h=m;for(;;){if(h===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(m=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Lf={focusedElem:t,selectionRange:n},ec=!1,L=e;L!==null;)if(e=L,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,L=t;else for(;L!==null;){e=L;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var _=v.memoizedProps,g=v.memoizedState,p=e.stateNode,f=p.getSnapshotBeforeUpdate(e.elementType===e.type?_:Rn(e.type,_),g);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(S){je(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,L=t;break}L=e.return}return v=Vv,Vv=!1,v}function ga(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Jf(e,n,s)}i=i.next}while(i!==r)}}function lh(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Zf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function u1(t){var e=t.alternate;e!==null&&(t.alternate=null,u1(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Wn],delete e[za],delete e[Uf],delete e[nR],delete e[rR])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function c1(t){return t.tag===5||t.tag===3||t.tag===4}function zv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||c1(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ep(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=rc));else if(r!==4&&(t=t.child,t!==null))for(ep(t,e,n),t=t.sibling;t!==null;)ep(t,e,n),t=t.sibling}function tp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(tp(t,e,n),t=t.sibling;t!==null;)tp(t,e,n),t=t.sibling}var mt=null,An=!1;function br(t,e,n){for(n=n.child;n!==null;)h1(t,e,n),n=n.sibling}function h1(t,e,n){if(Gn&&typeof Gn.onCommitFiberUnmount=="function")try{Gn.onCommitFiberUnmount(eh,n)}catch{}switch(n.tag){case 5:At||As(n,e);case 6:var r=mt,i=An;mt=null,br(t,e,n),mt=r,An=i,mt!==null&&(An?(t=mt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):mt.removeChild(n.stateNode));break;case 18:mt!==null&&(An?(t=mt,n=n.stateNode,t.nodeType===8?Td(t.parentNode,n):t.nodeType===1&&Td(t,n),La(t)):Td(mt,n.stateNode));break;case 4:r=mt,i=An,mt=n.stateNode.containerInfo,An=!0,br(t,e,n),mt=r,An=i;break;case 0:case 11:case 14:case 15:if(!At&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Jf(n,e,o),i=i.next}while(i!==r)}br(t,e,n);break;case 1:if(!At&&(As(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){je(n,e,a)}br(t,e,n);break;case 21:br(t,e,n);break;case 22:n.mode&1?(At=(r=At)||n.memoizedState!==null,br(t,e,n),At=r):br(t,e,n);break;default:br(t,e,n)}}function Bv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new _R),e.forEach(function(r){var i=AR.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Nn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:mt=a.stateNode,An=!1;break e;case 3:mt=a.stateNode.containerInfo,An=!0;break e;case 4:mt=a.stateNode.containerInfo,An=!0;break e}a=a.return}if(mt===null)throw Error(P(160));h1(s,o,i),mt=null,An=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){je(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)d1(e,t),e=e.sibling}function d1(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Nn(e,t),zn(t),r&4){try{ga(3,t,t.return),lh(3,t)}catch(_){je(t,t.return,_)}try{ga(5,t,t.return)}catch(_){je(t,t.return,_)}}break;case 1:Nn(e,t),zn(t),r&512&&n!==null&&As(n,n.return);break;case 5:if(Nn(e,t),zn(t),r&512&&n!==null&&As(n,n.return),t.flags&32){var i=t.stateNode;try{Pa(i,"")}catch(_){je(t,t.return,_)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&bw(i,s),If(a,o);var u=If(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?$w(i,h):c==="dangerouslySetInnerHTML"?Lw(i,h):c==="children"?Pa(i,h):lm(i,c,h,u)}switch(a){case"input":wf(i,s);break;case"textarea":Ow(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Fs(i,!!s.multiple,m,!1):d!==!!s.multiple&&(s.defaultValue!=null?Fs(i,!!s.multiple,s.defaultValue,!0):Fs(i,!!s.multiple,s.multiple?[]:"",!1))}i[za]=s}catch(_){je(t,t.return,_)}}break;case 6:if(Nn(e,t),zn(t),r&4){if(t.stateNode===null)throw Error(P(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(_){je(t,t.return,_)}}break;case 3:if(Nn(e,t),zn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{La(e.containerInfo)}catch(_){je(t,t.return,_)}break;case 4:Nn(e,t),zn(t);break;case 13:Nn(e,t),zn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(zm=He())),r&4&&Bv(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(At=(u=At)||c,Nn(e,t),At=u):Nn(e,t),zn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(L=t,c=t.child;c!==null;){for(h=L=c;L!==null;){switch(d=L,m=d.child,d.tag){case 0:case 11:case 14:case 15:ga(4,d,d.return);break;case 1:As(d,d.return);var v=d.stateNode;if(typeof v.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(_){je(r,n,_)}}break;case 5:As(d,d.return);break;case 22:if(d.memoizedState!==null){Wv(h);continue}}m!==null?(m.return=d,L=m):Wv(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Fw("display",o))}catch(_){je(t,t.return,_)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(_){je(t,t.return,_)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Nn(e,t),zn(t),r&4&&Bv(t);break;case 21:break;default:Nn(e,t),zn(t)}}function zn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(c1(n)){var r=n;break e}n=n.return}throw Error(P(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Pa(i,""),r.flags&=-33);var s=zv(t);tp(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=zv(t);ep(t,a,o);break;default:throw Error(P(161))}}catch(l){je(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function ER(t,e,n){L=t,f1(t)}function f1(t,e,n){for(var r=(t.mode&1)!==0;L!==null;){var i=L,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||fu;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||At;a=fu;var u=At;if(fu=o,(At=l)&&!u)for(L=i;L!==null;)o=L,l=o.child,o.tag===22&&o.memoizedState!==null?Hv(i):l!==null?(l.return=o,L=l):Hv(i);for(;s!==null;)L=s,f1(s),s=s.sibling;L=i,fu=a,At=u}jv(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,L=s):jv(t)}}function jv(t){for(;L!==null;){var e=L;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:At||lh(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!At)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Rn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&kv(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}kv(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&La(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}At||e.flags&512&&Zf(e)}catch(d){je(e,e.return,d)}}if(e===t){L=null;break}if(n=e.sibling,n!==null){n.return=e.return,L=n;break}L=e.return}}function Wv(t){for(;L!==null;){var e=L;if(e===t){L=null;break}var n=e.sibling;if(n!==null){n.return=e.return,L=n;break}L=e.return}}function Hv(t){for(;L!==null;){var e=L;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{lh(4,e)}catch(l){je(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){je(e,i,l)}}var s=e.return;try{Zf(e)}catch(l){je(e,s,l)}break;case 5:var o=e.return;try{Zf(e)}catch(l){je(e,o,l)}}}catch(l){je(e,e.return,l)}if(e===t){L=null;break}var a=e.sibling;if(a!==null){a.return=e.return,L=a;break}L=e.return}}var SR=Math.ceil,pc=Rr.ReactCurrentDispatcher,Um=Rr.ReactCurrentOwner,vn=Rr.ReactCurrentBatchConfig,ye=0,ft=null,Ye=null,vt=0,rn=0,Ds=mi(0),nt=0,Ga=null,Wi=0,uh=0,Vm=0,ya=null,qt=null,zm=0,ro=1/0,or=null,mc=!1,np=null,Yr=null,pu=!1,Wr=null,gc=0,va=0,rp=null,Fu=-1,$u=0;function jt(){return ye&6?He():Fu!==-1?Fu:Fu=He()}function Xr(t){return t.mode&1?ye&2&&vt!==0?vt&-vt:sR.transition!==null?($u===0&&($u=Yw()),$u):(t=Ie,t!==0||(t=window.event,t=t===void 0?16:rE(t.type)),t):1}function On(t,e,n,r){if(50<va)throw va=0,rp=null,Error(P(185));ml(t,n,r),(!(ye&2)||t!==ft)&&(t===ft&&(!(ye&2)&&(uh|=n),nt===4&&$r(t,vt)),Zt(t,r),n===1&&ye===0&&!(e.mode&1)&&(ro=He()+500,sh&&gi()))}function Zt(t,e){var n=t.callbackNode;sN(t,e);var r=Zu(t,t===ft?vt:0);if(r===0)n!==null&&ev(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&ev(n),e===1)t.tag===0?iR(qv.bind(null,t)):SE(qv.bind(null,t)),eR(function(){!(ye&6)&&gi()}),n=null;else{switch(Xw(r)){case 1:n=fm;break;case 4:n=Kw;break;case 16:n=Ju;break;case 536870912:n=Qw;break;default:n=Ju}n=E1(n,p1.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function p1(t,e){if(Fu=-1,$u=0,ye&6)throw Error(P(327));var n=t.callbackNode;if(Bs()&&t.callbackNode!==n)return null;var r=Zu(t,t===ft?vt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=yc(t,r);else{e=r;var i=ye;ye|=2;var s=g1();(ft!==t||vt!==e)&&(or=null,ro=He()+500,Mi(t,e));do try{IR();break}catch(a){m1(t,a)}while(1);km(),pc.current=s,ye=i,Ye!==null?e=0:(ft=null,vt=0,e=nt)}if(e!==0){if(e===2&&(i=Df(t),i!==0&&(r=i,e=ip(t,i))),e===1)throw n=Ga,Mi(t,0),$r(t,r),Zt(t,He()),n;if(e===6)$r(t,r);else{if(i=t.current.alternate,!(r&30)&&!CR(i)&&(e=yc(t,r),e===2&&(s=Df(t),s!==0&&(r=s,e=ip(t,s))),e===1))throw n=Ga,Mi(t,0),$r(t,r),Zt(t,He()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(P(345));case 2:Ti(t,qt,or);break;case 3:if($r(t,r),(r&130023424)===r&&(e=zm+500-He(),10<e)){if(Zu(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){jt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=$f(Ti.bind(null,t,qt,or),e);break}Ti(t,qt,or);break;case 4:if($r(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-bn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=He()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*SR(r/1960))-r,10<r){t.timeoutHandle=$f(Ti.bind(null,t,qt,or),r);break}Ti(t,qt,or);break;case 5:Ti(t,qt,or);break;default:throw Error(P(329))}}}return Zt(t,He()),t.callbackNode===n?p1.bind(null,t):null}function ip(t,e){var n=ya;return t.current.memoizedState.isDehydrated&&(Mi(t,e).flags|=256),t=yc(t,e),t!==2&&(e=qt,qt=n,e!==null&&sp(e)),t}function sp(t){qt===null?qt=t:qt.push.apply(qt,t)}function CR(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Fn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function $r(t,e){for(e&=~Vm,e&=~uh,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-bn(e),r=1<<n;t[n]=-1,e&=~r}}function qv(t){if(ye&6)throw Error(P(327));Bs();var e=Zu(t,0);if(!(e&1))return Zt(t,He()),null;var n=yc(t,e);if(t.tag!==0&&n===2){var r=Df(t);r!==0&&(e=r,n=ip(t,r))}if(n===1)throw n=Ga,Mi(t,0),$r(t,e),Zt(t,He()),n;if(n===6)throw Error(P(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ti(t,qt,or),Zt(t,He()),null}function Bm(t,e){var n=ye;ye|=1;try{return t(e)}finally{ye=n,ye===0&&(ro=He()+500,sh&&gi())}}function Hi(t){Wr!==null&&Wr.tag===0&&!(ye&6)&&Bs();var e=ye;ye|=1;var n=vn.transition,r=Ie;try{if(vn.transition=null,Ie=1,t)return t()}finally{Ie=r,vn.transition=n,ye=e,!(ye&6)&&gi()}}function jm(){rn=Ds.current,Oe(Ds)}function Mi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,ZN(n)),Ye!==null)for(n=Ye.return;n!==null;){var r=n;switch(Cm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ic();break;case 3:to(),Oe(Xt),Oe(Ft),Pm();break;case 5:xm(r);break;case 4:to();break;case 13:Oe(Ve);break;case 19:Oe(Ve);break;case 10:Nm(r.type._context);break;case 22:case 23:jm()}n=n.return}if(ft=t,Ye=t=Jr(t.current,null),vt=rn=e,nt=0,Ga=null,Vm=uh=Wi=0,qt=ya=null,Ri!==null){for(e=0;e<Ri.length;e++)if(n=Ri[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Ri=null}return t}function m1(t,e){do{var n=Ye;try{if(km(),Ou.current=fc,dc){for(var r=ze.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}dc=!1}if(ji=0,ct=tt=ze=null,ma=!1,Wa=0,Um.current=null,n===null||n.return===null){nt=1,Ga=e,Ye=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=vt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=bv(o);if(m!==null){m.flags&=-257,Ov(m,o,a,s,e),m.mode&1&&Pv(s,u,e),e=m,l=u;var v=e.updateQueue;if(v===null){var _=new Set;_.add(l),e.updateQueue=_}else v.add(l);break e}else{if(!(e&1)){Pv(s,u,e),Wm();break e}l=Error(P(426))}}else if($e&&a.mode&1){var g=bv(o);if(g!==null){!(g.flags&65536)&&(g.flags|=256),Ov(g,o,a,s,e),Tm(no(l,a));break e}}s=l=no(l,a),nt!==4&&(nt=2),ya===null?ya=[s]:ya.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=JE(s,l,e);Iv(s,p);break e;case 1:a=l;var f=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Yr===null||!Yr.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=ZE(s,a,e);Iv(s,S);break e}}s=s.return}while(s!==null)}v1(n)}catch(I){e=I,Ye===n&&n!==null&&(Ye=n=n.return);continue}break}while(1)}function g1(){var t=pc.current;return pc.current=fc,t===null?fc:t}function Wm(){(nt===0||nt===3||nt===2)&&(nt=4),ft===null||!(Wi&268435455)&&!(uh&268435455)||$r(ft,vt)}function yc(t,e){var n=ye;ye|=2;var r=g1();(ft!==t||vt!==e)&&(or=null,Mi(t,e));do try{TR();break}catch(i){m1(t,i)}while(1);if(km(),ye=n,pc.current=r,Ye!==null)throw Error(P(261));return ft=null,vt=0,nt}function TR(){for(;Ye!==null;)y1(Ye)}function IR(){for(;Ye!==null&&!Yk();)y1(Ye)}function y1(t){var e=w1(t.alternate,t,rn);t.memoizedProps=t.pendingProps,e===null?v1(t):Ye=e,Um.current=null}function v1(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=vR(n,e),n!==null){n.flags&=32767,Ye=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{nt=6,Ye=null;return}}else if(n=yR(n,e,rn),n!==null){Ye=n;return}if(e=e.sibling,e!==null){Ye=e;return}Ye=e=t}while(e!==null);nt===0&&(nt=5)}function Ti(t,e,n){var r=Ie,i=vn.transition;try{vn.transition=null,Ie=1,kR(t,e,n,r)}finally{vn.transition=i,Ie=r}return null}function kR(t,e,n,r){do Bs();while(Wr!==null);if(ye&6)throw Error(P(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(P(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(oN(t,s),t===ft&&(Ye=ft=null,vt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||pu||(pu=!0,E1(Ju,function(){return Bs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=vn.transition,vn.transition=null;var o=Ie;Ie=1;var a=ye;ye|=4,Um.current=null,wR(t,n),d1(n,t),qN(Lf),ec=!!Mf,Lf=Mf=null,t.current=n,ER(n),Xk(),ye=a,Ie=o,vn.transition=s}else t.current=n;if(pu&&(pu=!1,Wr=t,gc=i),s=t.pendingLanes,s===0&&(Yr=null),eN(n.stateNode),Zt(t,He()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(mc)throw mc=!1,t=np,np=null,t;return gc&1&&t.tag!==0&&Bs(),s=t.pendingLanes,s&1?t===rp?va++:(va=0,rp=t):va=0,gi(),null}function Bs(){if(Wr!==null){var t=Xw(gc),e=vn.transition,n=Ie;try{if(vn.transition=null,Ie=16>t?16:t,Wr===null)var r=!1;else{if(t=Wr,Wr=null,gc=0,ye&6)throw Error(P(331));var i=ye;for(ye|=4,L=t.current;L!==null;){var s=L,o=s.child;if(L.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(L=u;L!==null;){var c=L;switch(c.tag){case 0:case 11:case 15:ga(8,c,s)}var h=c.child;if(h!==null)h.return=c,L=h;else for(;L!==null;){c=L;var d=c.sibling,m=c.return;if(u1(c),c===u){L=null;break}if(d!==null){d.return=m,L=d;break}L=m}}}var v=s.alternate;if(v!==null){var _=v.child;if(_!==null){v.child=null;do{var g=_.sibling;_.sibling=null,_=g}while(_!==null)}}L=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,L=o;else e:for(;L!==null;){if(s=L,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ga(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,L=p;break e}L=s.return}}var f=t.current;for(L=f;L!==null;){o=L;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,L=y;else e:for(o=f;L!==null;){if(a=L,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:lh(9,a)}}catch(I){je(a,a.return,I)}if(a===o){L=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,L=S;break e}L=a.return}}if(ye=i,gi(),Gn&&typeof Gn.onPostCommitFiberRoot=="function")try{Gn.onPostCommitFiberRoot(eh,t)}catch{}r=!0}return r}finally{Ie=n,vn.transition=e}}return!1}function Gv(t,e,n){e=no(n,e),e=JE(t,e,1),t=Qr(t,e,1),e=jt(),t!==null&&(ml(t,1,e),Zt(t,e))}function je(t,e,n){if(t.tag===3)Gv(t,t,n);else for(;e!==null;){if(e.tag===3){Gv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Yr===null||!Yr.has(r))){t=no(n,t),t=ZE(e,t,1),e=Qr(e,t,1),t=jt(),e!==null&&(ml(e,1,t),Zt(e,t));break}}e=e.return}}function NR(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=jt(),t.pingedLanes|=t.suspendedLanes&n,ft===t&&(vt&n)===n&&(nt===4||nt===3&&(vt&130023424)===vt&&500>He()-zm?Mi(t,0):Vm|=n),Zt(t,e)}function _1(t,e){e===0&&(t.mode&1?(e=iu,iu<<=1,!(iu&130023424)&&(iu=4194304)):e=1);var n=jt();t=wr(t,e),t!==null&&(ml(t,e,n),Zt(t,n))}function RR(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),_1(t,n)}function AR(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(P(314))}r!==null&&r.delete(e),_1(t,n)}var w1;w1=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Xt.current)Qt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Qt=!1,gR(t,e,n);Qt=!!(t.flags&131072)}else Qt=!1,$e&&e.flags&1048576&&CE(e,ac,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Lu(t,e),t=e.pendingProps;var i=Js(e,Ft.current);zs(e,n),i=Om(null,e,r,t,i,n);var s=Mm();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Jt(r)?(s=!0,sc(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Am(e),i.updater=oh,e.stateNode=i,i._reactInternals=e,Hf(e,r,t,n),e=Kf(null,e,r,!0,s,n)):(e.tag=0,$e&&s&&Sm(e),zt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Lu(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=xR(r),t=Rn(r,t),i){case 0:e=Gf(null,e,r,t,n);break e;case 1:e=Fv(null,e,r,t,n);break e;case 11:e=Mv(null,e,r,t,n);break e;case 14:e=Lv(null,e,r,Rn(r.type,t),n);break e}throw Error(P(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Rn(r,i),Gf(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Rn(r,i),Fv(t,e,r,i,n);case 3:e:{if(r1(e),t===null)throw Error(P(387));r=e.pendingProps,s=e.memoizedState,i=s.element,NE(t,e),cc(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=no(Error(P(423)),e),e=$v(t,e,r,n,i);break e}else if(r!==i){i=no(Error(P(424)),e),e=$v(t,e,r,n,i);break e}else for(sn=Kr(e.stateNode.containerInfo.firstChild),an=e,$e=!0,Dn=null,n=xE(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Zs(),r===i){e=Er(t,e,n);break e}zt(t,e,r,n)}e=e.child}return e;case 5:return PE(e),t===null&&Bf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Ff(r,i)?o=null:s!==null&&Ff(r,s)&&(e.flags|=32),n1(t,e),zt(t,e,o,n),e.child;case 6:return t===null&&Bf(e),null;case 13:return i1(t,e,n);case 4:return Dm(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=eo(e,null,r,n):zt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Rn(r,i),Mv(t,e,r,i,n);case 7:return zt(t,e,e.pendingProps,n),e.child;case 8:return zt(t,e,e.pendingProps.children,n),e.child;case 12:return zt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Ae(lc,r._currentValue),r._currentValue=o,s!==null)if(Fn(s.value,o)){if(s.children===i.children&&!Xt.current){e=Er(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=mr(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),jf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(P(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),jf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}zt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,zs(e,n),i=_n(i),r=r(i),e.flags|=1,zt(t,e,r,n),e.child;case 14:return r=e.type,i=Rn(r,e.pendingProps),i=Rn(r.type,i),Lv(t,e,r,i,n);case 15:return e1(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Rn(r,i),Lu(t,e),e.tag=1,Jt(r)?(t=!0,sc(e)):t=!1,zs(e,n),AE(e,r,i),Hf(e,r,i,n),Kf(null,e,r,!0,t,n);case 19:return s1(t,e,n);case 22:return t1(t,e,n)}throw Error(P(156,e.tag))};function E1(t,e){return Gw(t,e)}function DR(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gn(t,e,n,r){return new DR(t,e,n,r)}function Hm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function xR(t){if(typeof t=="function")return Hm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===cm)return 11;if(t===hm)return 14}return 2}function Jr(t,e){var n=t.alternate;return n===null?(n=gn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Uu(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Hm(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ws:return Li(n.children,i,s,e);case um:o=8,i|=8;break;case mf:return t=gn(12,n,e,i|2),t.elementType=mf,t.lanes=s,t;case gf:return t=gn(13,n,e,i),t.elementType=gf,t.lanes=s,t;case yf:return t=gn(19,n,e,i),t.elementType=yf,t.lanes=s,t;case Dw:return ch(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Rw:o=10;break e;case Aw:o=9;break e;case cm:o=11;break e;case hm:o=14;break e;case Mr:o=16,r=null;break e}throw Error(P(130,t==null?t:typeof t,""))}return e=gn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Li(t,e,n,r){return t=gn(7,t,r,e),t.lanes=n,t}function ch(t,e,n,r){return t=gn(22,t,r,e),t.elementType=Dw,t.lanes=n,t.stateNode={isHidden:!1},t}function Pd(t,e,n){return t=gn(6,t,null,e),t.lanes=n,t}function bd(t,e,n){return e=gn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function PR(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=fd(0),this.expirationTimes=fd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=fd(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function qm(t,e,n,r,i,s,o,a,l){return t=new PR(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=gn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Am(s),t}function bR(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_s,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function S1(t){if(!t)return li;t=t._reactInternals;e:{if(ss(t)!==t||t.tag!==1)throw Error(P(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Jt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(P(171))}if(t.tag===1){var n=t.type;if(Jt(n))return EE(t,n,e)}return e}function C1(t,e,n,r,i,s,o,a,l){return t=qm(n,r,!0,t,i,s,o,a,l),t.context=S1(null),n=t.current,r=jt(),i=Xr(n),s=mr(r,i),s.callback=e??null,Qr(n,s,i),t.current.lanes=i,ml(t,i,r),Zt(t,r),t}function hh(t,e,n,r){var i=e.current,s=jt(),o=Xr(i);return n=S1(n),e.context===null?e.context=n:e.pendingContext=n,e=mr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Qr(i,e,o),t!==null&&(On(t,i,o,s),bu(t,i,o)),o}function vc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Kv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Gm(t,e){Kv(t,e),(t=t.alternate)&&Kv(t,e)}function OR(){return null}var T1=typeof reportError=="function"?reportError:function(t){console.error(t)};function Km(t){this._internalRoot=t}dh.prototype.render=Km.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(P(409));hh(t,e,null,null)};dh.prototype.unmount=Km.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Hi(function(){hh(null,t,null,null)}),e[_r]=null}};function dh(t){this._internalRoot=t}dh.prototype.unstable_scheduleHydration=function(t){if(t){var e=eE();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Fr.length&&e!==0&&e<Fr[n].priority;n++);Fr.splice(n,0,t),n===0&&nE(t)}};function Qm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function fh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Qv(){}function MR(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=vc(o);s.call(u)}}var o=C1(e,r,t,0,null,!1,!1,"",Qv);return t._reactRootContainer=o,t[_r]=o.current,Ua(t.nodeType===8?t.parentNode:t),Hi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=vc(l);a.call(u)}}var l=qm(t,0,!1,null,null,!1,!1,"",Qv);return t._reactRootContainer=l,t[_r]=l.current,Ua(t.nodeType===8?t.parentNode:t),Hi(function(){hh(e,l,n,r)}),l}function ph(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=vc(o);a.call(l)}}hh(e,o,t,i)}else o=MR(n,e,t,i,r);return vc(o)}Jw=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ra(e.pendingLanes);n!==0&&(pm(e,n|1),Zt(e,He()),!(ye&6)&&(ro=He()+500,gi()))}break;case 13:Hi(function(){var r=wr(t,1);if(r!==null){var i=jt();On(r,t,1,i)}}),Gm(t,1)}};mm=function(t){if(t.tag===13){var e=wr(t,134217728);if(e!==null){var n=jt();On(e,t,134217728,n)}Gm(t,134217728)}};Zw=function(t){if(t.tag===13){var e=Xr(t),n=wr(t,e);if(n!==null){var r=jt();On(n,t,e,r)}Gm(t,e)}};eE=function(){return Ie};tE=function(t,e){var n=Ie;try{return Ie=t,e()}finally{Ie=n}};Nf=function(t,e,n){switch(e){case"input":if(wf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=ih(r);if(!i)throw Error(P(90));Pw(r),wf(r,i)}}}break;case"textarea":Ow(t,n);break;case"select":e=n.value,e!=null&&Fs(t,!!n.multiple,e,!1)}};zw=Bm;Bw=Hi;var LR={usingClientEntryPoint:!1,Events:[yl,Ts,ih,Uw,Vw,Bm]},qo={findFiberByHostInstance:Ni,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},FR={bundleType:qo.bundleType,version:qo.version,rendererPackageName:qo.rendererPackageName,rendererConfig:qo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Rr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Hw(t),t===null?null:t.stateNode},findFiberByHostInstance:qo.findFiberByHostInstance||OR,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var mu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!mu.isDisabled&&mu.supportsFiber)try{eh=mu.inject(FR),Gn=mu}catch{}}dn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=LR;dn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Qm(e))throw Error(P(200));return bR(t,e,null,n)};dn.createRoot=function(t,e){if(!Qm(t))throw Error(P(299));var n=!1,r="",i=T1;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=qm(t,1,!1,null,null,n,!1,r,i),t[_r]=e.current,Ua(t.nodeType===8?t.parentNode:t),new Km(e)};dn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(P(188)):(t=Object.keys(t).join(","),Error(P(268,t)));return t=Hw(e),t=t===null?null:t.stateNode,t};dn.flushSync=function(t){return Hi(t)};dn.hydrate=function(t,e,n){if(!fh(e))throw Error(P(200));return ph(null,t,e,!0,n)};dn.hydrateRoot=function(t,e,n){if(!Qm(t))throw Error(P(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=T1;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=C1(e,null,t,1,n??null,i,!1,s,o),t[_r]=e.current,Ua(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new dh(e)};dn.render=function(t,e,n){if(!fh(e))throw Error(P(200));return ph(null,t,e,!1,n)};dn.unmountComponentAtNode=function(t){if(!fh(t))throw Error(P(40));return t._reactRootContainer?(Hi(function(){ph(null,null,t,!1,function(){t._reactRootContainer=null,t[_r]=null})}),!0):!1};dn.unstable_batchedUpdates=Bm;dn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!fh(n))throw Error(P(200));if(t==null||t._reactInternals===void 0)throw Error(P(38));return ph(t,e,n,!1,r)};dn.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=dn})(Ok);const $R=gw(Ku);var Yv=Ku;df.createRoot=Yv.createRoot,df.hydrateRoot=Yv.hydrateRoot;/**
 * @remix-run/router v1.5.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fe(){return fe=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},fe.apply(this,arguments)}var Ge;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Ge||(Ge={}));const Xv="popstate";function UR(t){t===void 0&&(t={});function e(i,s){let{pathname:o="/",search:a="",hash:l=""}=er(i.location.hash.substr(1));return Ka("",{pathname:o,search:a,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let o=i.document.querySelector("base"),a="";if(o&&o.getAttribute("href")){let l=i.location.href,u=l.indexOf("#");a=u===-1?l:l.slice(0,u)}return a+"#"+(typeof s=="string"?s:Gi(s))}function r(i,s){qi(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return zR(e,n,r,t)}function ae(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function qi(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function VR(){return Math.random().toString(36).substr(2,8)}function Jv(t,e){return{usr:t.state,key:t.key,idx:e}}function Ka(t,e,n,r){return n===void 0&&(n=null),fe({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?er(e):e,{state:n,key:e&&e.key||r||VR()})}function Gi(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function er(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function zR(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Ge.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(fe({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function h(){a=Ge.Pop;let g=c(),p=g==null?null:g-u;u=g,l&&l({action:a,location:_.location,delta:p})}function d(g,p){a=Ge.Push;let f=Ka(_.location,g,p);n&&n(f,g),u=c()+1;let y=Jv(f,u),S=_.createHref(f);try{o.pushState(y,"",S)}catch{i.location.assign(S)}s&&l&&l({action:a,location:_.location,delta:1})}function m(g,p){a=Ge.Replace;let f=Ka(_.location,g,p);n&&n(f,g),u=c();let y=Jv(f,u),S=_.createHref(f);o.replaceState(y,"",S),s&&l&&l({action:a,location:_.location,delta:0})}function v(g){let p=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof g=="string"?g:Gi(g);return ae(p,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,p)}let _={get action(){return a},get location(){return t(i,o)},listen(g){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Xv,h),l=g,()=>{i.removeEventListener(Xv,h),l=null}},createHref(g){return e(i,g)},createURL:v,encodeLocation(g){let p=v(g);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:d,replace:m,go(g){return o.go(g)}};return _}var et;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(et||(et={}));const BR=new Set(["lazy","caseSensitive","path","id","index","children"]);function jR(t){return t.index===!0}function I1(t,e,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),t.map((i,s)=>{let o=[...n,s],a=typeof i.id=="string"?i.id:o.join("-");if(ae(i.index!==!0||!i.children,"Cannot specify children on an index route"),ae(!r[a],'Found a route id collision on id "'+a+`".  Route id's must be globally unique within Data Router usages`),jR(i)){let l=fe({},i,{hasErrorBoundary:e(i),id:a});return r[a]=l,l}else{let l=fe({},i,{id:a,hasErrorBoundary:e(i),children:void 0});return r[a]=l,i.children&&(l.children=I1(i.children,e,o,r)),l}})}function xs(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?er(e):e,i=mh(r.pathname||"/",n);if(i==null)return null;let s=k1(t);WR(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=ZR(s[a],nA(i));return o}function k1(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(ae(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Zr([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(ae(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),k1(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:XR(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of N1(s.path))i(s,o,l)}),e}function N1(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=N1(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function WR(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:JR(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const HR=/^:\w+$/,qR=3,GR=2,KR=1,QR=10,YR=-2,Zv=t=>t==="*";function XR(t,e){let n=t.split("/"),r=n.length;return n.some(Zv)&&(r+=YR),e&&(r+=GR),n.filter(i=>!Zv(i)).reduce((i,s)=>i+(HR.test(s)?qR:s===""?KR:QR),r)}function JR(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function ZR(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=eA({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:Zr([i,c.pathname]),pathnameBase:oA(Zr([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=Zr([i,c.pathnameBase]))}return s}function eA(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=tA(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{if(c==="*"){let d=a[h]||"";o=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}return u[c]=rA(a[h]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function tA(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),qi(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function nA(t){try{return decodeURI(t)}catch(e){return qi(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function rA(t,e){try{return decodeURIComponent(t)}catch(n){return qi(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function mh(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function iA(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?er(t):t;return{pathname:n?n.startsWith("/")?n:sA(n,e):e,search:aA(r),hash:lA(i)}}function sA(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Od(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Ym(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function R1(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=er(t):(i=fe({},t),ae(!i.pathname||!i.pathname.includes("?"),Od("?","pathname","search",i)),ae(!i.pathname||!i.pathname.includes("#"),Od("#","pathname","hash",i)),ae(!i.search||!i.search.includes("#"),Od("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let h=e.length-1;if(o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),h-=1;i.pathname=d.join("/")}a=h>=0?e[h]:"/"}let l=iA(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Zr=t=>t.join("/").replace(/\/\/+/g,"/"),oA=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),aA=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,lA=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class Xm{constructor(e,n,r,i){i===void 0&&(i=!1),this.status=e,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function A1(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const D1=["post","put","patch","delete"],uA=new Set(D1),cA=["get",...D1],hA=new Set(cA),dA=new Set([301,302,303,307,308]),fA=new Set([307,308]),Md={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},pA={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},e_={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},x1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,P1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",mA=!P1,gA=t=>!!t.hasErrorBoundary;function yA(t){ae(t.routes.length>0,"You must provide a non-empty routes array to createRouter");let e=t.detectErrorBoundary||gA,n={},r=I1(t.routes,e,void 0,n),i,s=fe({v7_normalizeFormMethod:!1},t.future),o=null,a=new Set,l=null,u=null,c=null,h=t.hydrationData!=null,d=xs(r,t.history.location,t.basename),m=null;if(d==null){let C=jn(404,{pathname:t.history.location.pathname}),{matches:k,route:A}=a_(r);d=k,m={[A.id]:C}}let v=!d.some(C=>C.route.lazy)&&(!d.some(C=>C.route.loader)||t.hydrationData!=null),_,g={historyAction:t.history.action,location:t.history.location,matches:d,initialized:v,navigation:Md,restoreScrollPosition:t.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||m,fetchers:new Map,blockers:new Map},p=Ge.Pop,f=!1,y,S=!1,I=!1,D=[],T=[],R=new Map,re=0,Q=-1,Ee=new Map,ot=new Set,V=new Map,ve=new Map,Se=new Map,en=!1;function nr(){return o=t.history.listen(C=>{let{action:k,location:A,delta:U}=C;if(en){en=!1;return}qi(Se.size===0||U!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let B=Ct({currentLocation:g.location,nextLocation:A,historyAction:k});if(B&&U!=null){en=!0,t.history.go(U*-1),Ei(B,{state:"blocked",location:A,proceed(){Ei(B,{state:"proceeding",proceed:void 0,reset:void 0,location:A}),t.history.go(U)},reset(){Pr(B),$({blockers:new Map(_.state.blockers)})}});return}return oe(k,A)}),g.initialized||oe(Ge.Pop,g.location),_}function O(){o&&o(),a.clear(),y&&y.abort(),g.fetchers.forEach((C,k)=>hs(k)),g.blockers.forEach((C,k)=>Pr(k))}function W(C){return a.add(C),()=>a.delete(C)}function $(C){g=fe({},g,C),a.forEach(k=>k(g))}function _e(C,k){var A,U;let B=g.actionData!=null&&g.navigation.formMethod!=null&&ar(g.navigation.formMethod)&&g.navigation.state==="loading"&&((A=C.state)==null?void 0:A._isRedirect)!==!0,Y;k.actionData?Object.keys(k.actionData).length>0?Y=k.actionData:Y=null:B?Y=g.actionData:Y=null;let X=k.loaderData?o_(g.loaderData,k.loaderData,k.matches||[],k.errors):g.loaderData;for(let[G]of Se)Pr(G);let te=f===!0||g.navigation.formMethod!=null&&ar(g.navigation.formMethod)&&((U=C.state)==null?void 0:U._isRedirect)!==!0;i&&(r=i,i=void 0),$(fe({},k,{actionData:Y,loaderData:X,historyAction:p,location:C,initialized:!0,navigation:Md,revalidation:"idle",restoreScrollPosition:fs(C,k.matches||g.matches),preventScrollReset:te,blockers:new Map(g.blockers)})),S||p===Ge.Pop||(p===Ge.Push?t.history.push(C,C.state):p===Ge.Replace&&t.history.replace(C,C.state)),p=Ge.Pop,f=!1,S=!1,I=!1,D=[],T=[]}async function x(C,k){if(typeof C=="number"){t.history.go(C);return}let{path:A,submission:U,error:B}=t_(C,s,k),Y=g.location,X=Ka(g.location,A,k&&k.state);X=fe({},X,t.history.encodeLocation(X));let te=k&&k.replace!=null?k.replace:void 0,G=Ge.Push;te===!0?G=Ge.Replace:te===!1||U!=null&&ar(U.formMethod)&&U.formAction===g.location.pathname+g.location.search&&(G=Ge.Replace);let ke=k&&"preventScrollReset"in k?k.preventScrollReset===!0:void 0,ge=Ct({currentLocation:Y,nextLocation:X,historyAction:G});if(ge){Ei(ge,{state:"blocked",location:X,proceed(){Ei(ge,{state:"proceeding",proceed:void 0,reset:void 0,location:X}),x(C,k)},reset(){Pr(ge),$({blockers:new Map(g.blockers)})}});return}return await oe(G,X,{submission:U,pendingError:B,preventScrollReset:ke,replace:k&&k.replace})}function Z(){if(Mo(),$({revalidation:"loading"}),g.navigation.state!=="submitting"){if(g.navigation.state==="idle"){oe(g.historyAction,g.location,{startUninterruptedRevalidation:!0});return}oe(p||g.historyAction,g.navigation.location,{overrideNavigation:g.navigation})}}async function oe(C,k,A){y&&y.abort(),y=null,p=C,S=(A&&A.startUninterruptedRevalidation)===!0,Vn(g.location,g.matches),f=(A&&A.preventScrollReset)===!0;let U=i||r,B=A&&A.overrideNavigation,Y=xs(U,k,t.basename);if(!Y){let le=jn(404,{pathname:k.pathname}),{matches:H,route:Re}=a_(U);ir(),_e(k,{matches:H,loaderData:{},errors:{[Re.id]:le}});return}if(SA(g.location,k)&&!(A&&A.submission&&ar(A.submission.formMethod))){_e(k,{matches:Y});return}y=new AbortController;let X=Ko(t.history,k,y.signal,A&&A.submission),te,G;if(A&&A.pendingError)G={[Ps(Y).route.id]:A.pendingError};else if(A&&A.submission&&ar(A.submission.formMethod)){let le=await tn(X,k,A.submission,Y,{replace:A.replace});if(le.shortCircuited)return;te=le.pendingActionData,G=le.pendingActionError,B=fe({state:"loading",location:k},A.submission),X=new Request(X.url,{signal:X.signal})}let{shortCircuited:ke,loaderData:ge,errors:nn}=await Ze(X,k,Y,B,A&&A.submission,A&&A.fetcherSubmission,A&&A.replace,te,G);ke||(y=null,_e(k,fe({matches:Y},te?{actionData:te}:{},{loaderData:ge,errors:nn})))}async function tn(C,k,A,U,B){Mo();let Y=fe({state:"submitting",location:k},A);$({navigation:Y});let X,te=op(U,k);if(!te.route.action&&!te.route.lazy)X={type:et.error,error:jn(405,{method:C.method,pathname:k.pathname,routeId:te.route.id})};else if(X=await Go("action",C,te,U,n,e,_.basename),C.signal.aborted)return{shortCircuited:!0};if(js(X)){let G;return B&&B.replace!=null?G=B.replace:G=X.location===g.location.pathname+g.location.search,await wi(g,X,{submission:A,replace:G}),{shortCircuited:!0}}if(_a(X)){let G=Ps(U,te.route.id);return(B&&B.replace)!==!0&&(p=Ge.Push),{pendingActionData:{},pendingActionError:{[G.route.id]:X.error}}}if(Di(X))throw jn(400,{type:"defer-action"});return{pendingActionData:{[te.route.id]:X.data}}}async function Ze(C,k,A,U,B,Y,X,te,G){let ke=U;ke||(ke=fe({state:"loading",location:k,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},B));let ge=B||Y?B||Y:ke.formMethod&&ke.formAction&&ke.formData&&ke.formEncType?{formMethod:ke.formMethod,formAction:ke.formAction,formData:ke.formData,formEncType:ke.formEncType}:void 0,nn=i||r,[le,H]=n_(t.history,g,A,ge,k,I,D,T,V,nn,t.basename,te,G);if(ir(Tt=>!(A&&A.some(kn=>kn.route.id===Tt))||le&&le.some(kn=>kn.route.id===Tt)),le.length===0&&H.length===0)return _e(k,fe({matches:A,loaderData:{},errors:G||null},te?{actionData:te}:{})),{shortCircuited:!0};if(!S){H.forEach(kn=>{let Si=g.fetchers.get(kn.key),$o={state:"loading",data:Si&&Si.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};g.fetchers.set(kn.key,$o)});let Tt=te||g.actionData;$(fe({navigation:ke},Tt?Object.keys(Tt).length===0?{actionData:null}:{actionData:Tt}:{},H.length>0?{fetchers:new Map(g.fetchers)}:{}))}Q=++re,H.forEach(Tt=>R.set(Tt.key,y));let{results:Re,loaderResults:Fe,fetcherResults:Tn}=await Oo(g.matches,A,le,H,C);if(C.signal.aborted)return{shortCircuited:!0};H.forEach(Tt=>R.delete(Tt.key));let In=l_(Re);if(In)return await wi(g,In,{replace:X}),{shortCircuited:!0};let{loaderData:ps,errors:sd}=s_(g,A,le,Fe,G,H,Tn,ve);ve.forEach((Tt,kn)=>{Tt.subscribe(Si=>{(Si||Tt.done)&&ve.delete(kn)})}),Cn();let od=St(Q);return fe({loaderData:ps,errors:sd},od||H.length>0?{fetchers:new Map(g.fetchers)}:{})}function Sn(C){return g.fetchers.get(C)||pA}function Xl(C,k,A,U){if(mA)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");R.has(C)&&Vt(C);let Y=xs(i||r,A,t.basename);if(!Y){xr(C,k,jn(404,{pathname:A}));return}let{path:X,submission:te}=t_(A,s,U,!0),G=op(Y,X);if(f=(U&&U.preventScrollReset)===!0,te&&ar(te.formMethod)){id(C,k,X,G,Y,te);return}V.set(C,{routeId:k,path:X}),Jl(C,k,X,G,Y,te)}async function id(C,k,A,U,B,Y){if(Mo(),V.delete(C),!U.route.action&&!U.route.lazy){let sr=jn(405,{method:Y.formMethod,pathname:A,routeId:k});xr(C,k,sr);return}let X=g.fetchers.get(C),te=fe({state:"submitting"},Y,{data:X&&X.data," _hasFetcherDoneAnything ":!0});g.fetchers.set(C,te),$({fetchers:new Map(g.fetchers)});let G=new AbortController,ke=Ko(t.history,A,G.signal,Y);R.set(C,G);let ge=await Go("action",ke,U,B,n,e,_.basename);if(ke.signal.aborted){R.get(C)===G&&R.delete(C);return}if(js(ge)){R.delete(C),ot.add(C);let sr=fe({state:"loading"},Y,{data:void 0," _hasFetcherDoneAnything ":!0});return g.fetchers.set(C,sr),$({fetchers:new Map(g.fetchers)}),wi(g,ge,{submission:Y,isFetchActionRedirect:!0})}if(_a(ge)){xr(C,k,ge.error);return}if(Di(ge))throw jn(400,{type:"defer-action"});let nn=g.navigation.location||g.location,le=Ko(t.history,nn,G.signal),H=i||r,Re=g.navigation.state!=="idle"?xs(H,g.navigation.location,t.basename):g.matches;ae(Re,"Didn't find any matches after fetcher action");let Fe=++re;Ee.set(C,Fe);let Tn=fe({state:"loading",data:ge.data},Y,{" _hasFetcherDoneAnything ":!0});g.fetchers.set(C,Tn);let[In,ps]=n_(t.history,g,Re,Y,nn,I,D,T,V,H,t.basename,{[U.route.id]:ge.data},void 0);ps.filter(sr=>sr.key!==C).forEach(sr=>{let ad=sr.key,zy=g.fetchers.get(ad),uk={state:"loading",data:zy&&zy.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};g.fetchers.set(ad,uk),R.set(ad,G)}),$({fetchers:new Map(g.fetchers)});let{results:sd,loaderResults:od,fetcherResults:Tt}=await Oo(g.matches,Re,In,ps,le);if(G.signal.aborted)return;Ee.delete(C),R.delete(C),ps.forEach(sr=>R.delete(sr.key));let kn=l_(sd);if(kn)return wi(g,kn);let{loaderData:Si,errors:$o}=s_(g,g.matches,In,od,void 0,ps,Tt,ve),ak={state:"idle",data:ge.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};g.fetchers.set(C,ak);let lk=St(Fe);g.navigation.state==="loading"&&Fe>Q?(ae(p,"Expected pending action"),y&&y.abort(),_e(g.navigation.location,{matches:Re,loaderData:Si,errors:$o,fetchers:new Map(g.fetchers)})):($(fe({errors:$o,loaderData:o_(g.loaderData,Si,Re,$o)},lk?{fetchers:new Map(g.fetchers)}:{})),I=!1)}async function Jl(C,k,A,U,B,Y){let X=g.fetchers.get(C),te=fe({state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},Y,{data:X&&X.data," _hasFetcherDoneAnything ":!0});g.fetchers.set(C,te),$({fetchers:new Map(g.fetchers)});let G=new AbortController,ke=Ko(t.history,A,G.signal);R.set(C,G);let ge=await Go("loader",ke,U,B,n,e,_.basename);if(Di(ge)&&(ge=await L1(ge,ke.signal,!0)||ge),R.get(C)===G&&R.delete(C),ke.signal.aborted)return;if(js(ge)){await wi(g,ge);return}if(_a(ge)){let le=Ps(g.matches,k);g.fetchers.delete(C),$({fetchers:new Map(g.fetchers),errors:{[le.route.id]:ge.error}});return}ae(!Di(ge),"Unhandled fetcher deferred data");let nn={state:"idle",data:ge.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};g.fetchers.set(C,nn),$({fetchers:new Map(g.fetchers)})}async function wi(C,k,A){var U;let{submission:B,replace:Y,isFetchActionRedirect:X}=A===void 0?{}:A;k.revalidate&&(I=!0);let te=Ka(C.location,k.location,fe({_isRedirect:!0},X?{_isFetchActionRedirect:!0}:{}));if(ae(te,"Expected a location on the redirect navigation"),x1.test(k.location)&&P1&&typeof((U=window)==null?void 0:U.location)<"u"){let H=t.history.createURL(k.location),Re=mh(H.pathname,t.basename||"/")==null;if(window.location.origin!==H.origin||Re){Y?window.location.replace(k.location):window.location.assign(k.location);return}}y=null;let G=Y===!0?Ge.Replace:Ge.Push,{formMethod:ke,formAction:ge,formEncType:nn,formData:le}=C.navigation;!B&&ke&&ge&&le&&nn&&(B={formMethod:ke,formAction:ge,formEncType:nn,formData:le}),fA.has(k.status)&&B&&ar(B.formMethod)?await oe(G,te,{submission:fe({},B,{formAction:k.location}),preventScrollReset:f}):X?await oe(G,te,{overrideNavigation:{state:"loading",location:te,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},fetcherSubmission:B,preventScrollReset:f}):await oe(G,te,{overrideNavigation:{state:"loading",location:te,formMethod:B?B.formMethod:void 0,formAction:B?B.formAction:void 0,formEncType:B?B.formEncType:void 0,formData:B?B.formData:void 0},preventScrollReset:f})}async function Oo(C,k,A,U,B){let Y=await Promise.all([...A.map(G=>Go("loader",B,G,k,n,e,_.basename)),...U.map(G=>G.matches&&G.match?Go("loader",Ko(t.history,G.path,B.signal),G.match,G.matches,n,e,_.basename):{type:et.error,error:jn(404,{pathname:G.path})})]),X=Y.slice(0,A.length),te=Y.slice(A.length);return await Promise.all([u_(C,A,X,B.signal,!1,g.loaderData),u_(C,U.map(G=>G.match),te,B.signal,!0)]),{results:Y,loaderResults:X,fetcherResults:te}}function Mo(){I=!0,D.push(...ir()),V.forEach((C,k)=>{R.has(k)&&(T.push(k),Vt(k))})}function xr(C,k,A){let U=Ps(g.matches,k);hs(C),$({errors:{[U.route.id]:A},fetchers:new Map(g.fetchers)})}function hs(C){R.has(C)&&Vt(C),V.delete(C),Ee.delete(C),ot.delete(C),g.fetchers.delete(C)}function Vt(C){let k=R.get(C);ae(k,"Expected fetch controller: "+C),k.abort(),R.delete(C)}function Lo(C){for(let k of C){let U={state:"idle",data:Sn(k).data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};g.fetchers.set(k,U)}}function Cn(){let C=[];for(let k of ot){let A=g.fetchers.get(k);ae(A,"Expected fetcher: "+k),A.state==="loading"&&(ot.delete(k),C.push(k))}Lo(C)}function St(C){let k=[];for(let[A,U]of Ee)if(U<C){let B=g.fetchers.get(A);ae(B,"Expected fetcher: "+A),B.state==="loading"&&(Vt(A),Ee.delete(A),k.push(A))}return Lo(k),k.length>0}function rr(C,k){let A=g.blockers.get(C)||e_;return Se.get(C)!==k&&Se.set(C,k),A}function Pr(C){g.blockers.delete(C),Se.delete(C)}function Ei(C,k){let A=g.blockers.get(C)||e_;ae(A.state==="unblocked"&&k.state==="blocked"||A.state==="blocked"&&k.state==="blocked"||A.state==="blocked"&&k.state==="proceeding"||A.state==="blocked"&&k.state==="unblocked"||A.state==="proceeding"&&k.state==="unblocked","Invalid blocker state transition: "+A.state+" -> "+k.state),g.blockers.set(C,k),$({blockers:new Map(g.blockers)})}function Ct(C){let{currentLocation:k,nextLocation:A,historyAction:U}=C;if(Se.size===0)return;Se.size>1&&qi(!1,"A router only supports one blocker at a time");let B=Array.from(Se.entries()),[Y,X]=B[B.length-1],te=g.blockers.get(Y);if(!(te&&te.state==="proceeding")&&X({currentLocation:k,nextLocation:A,historyAction:U}))return Y}function ir(C){let k=[];return ve.forEach((A,U)=>{(!C||C(U))&&(A.cancel(),k.push(U),ve.delete(U))}),k}function ds(C,k,A){if(l=C,c=k,u=A||(U=>U.key),!h&&g.navigation===Md){h=!0;let U=fs(g.location,g.matches);U!=null&&$({restoreScrollPosition:U})}return()=>{l=null,c=null,u=null}}function Vn(C,k){if(l&&u&&c){let A=k.map(B=>c_(B,g.loaderData)),U=u(C,A)||C.key;l[U]=c()}}function fs(C,k){if(l&&u&&c){let A=k.map(Y=>c_(Y,g.loaderData)),U=u(C,A)||C.key,B=l[U];if(typeof B=="number")return B}return null}function Fo(C){i=C}return _={get basename(){return t.basename},get state(){return g},get routes(){return r},initialize:nr,subscribe:W,enableScrollRestoration:ds,navigate:x,fetch:Xl,revalidate:Z,createHref:C=>t.history.createHref(C),encodeLocation:C=>t.history.encodeLocation(C),getFetcher:Sn,deleteFetcher:hs,dispose:O,getBlocker:rr,deleteBlocker:Pr,_internalFetchControllers:R,_internalActiveDeferreds:ve,_internalSetRoutes:Fo},_}function vA(t){return t!=null&&"formData"in t}function t_(t,e,n,r){r===void 0&&(r=!1);let i=typeof t=="string"?t:Gi(t);if(!n||!vA(n))return{path:i};if(n.formMethod&&!IA(n.formMethod))return{path:i,error:jn(405,{method:n.formMethod})};let s;if(n.formData){let l=n.formMethod||"get";if(s={formMethod:e.v7_normalizeFormMethod?l.toUpperCase():l.toLowerCase(),formAction:M1(i),formEncType:n&&n.formEncType||"application/x-www-form-urlencoded",formData:n.formData},ar(s.formMethod))return{path:i,submission:s}}let o=er(i),a=O1(n.formData);return r&&o.search&&F1(o.search)&&a.append("index",""),o.search="?"+a,{path:Gi(o),submission:s}}function _A(t,e){let n=t;if(e){let r=t.findIndex(i=>i.route.id===e);r>=0&&(n=t.slice(0,r))}return n}function n_(t,e,n,r,i,s,o,a,l,u,c,h,d){let m=d?Object.values(d)[0]:h?Object.values(h)[0]:void 0,v=t.createURL(e.location),_=t.createURL(i),g=s||v.toString()===_.toString()||v.search!==_.search,p=d?Object.keys(d)[0]:void 0,y=_A(n,p).filter((I,D)=>{if(I.route.lazy)return!0;if(I.route.loader==null)return!1;if(wA(e.loaderData,e.matches[D],I)||o.some(re=>re===I.route.id))return!0;let T=e.matches[D],R=I;return r_(I,fe({currentUrl:v,currentParams:T.params,nextUrl:_,nextParams:R.params},r,{actionResult:m,defaultShouldRevalidate:g||b1(T,R)}))}),S=[];return l.forEach((I,D)=>{if(!n.some(Q=>Q.route.id===I.routeId))return;let T=xs(u,I.path,c);if(!T){S.push(fe({key:D},I,{matches:null,match:null}));return}let R=op(T,I.path);if(a.includes(D)){S.push(fe({key:D,matches:T,match:R},I));return}r_(R,fe({currentUrl:v,currentParams:e.matches[e.matches.length-1].params,nextUrl:_,nextParams:n[n.length-1].params},r,{actionResult:m,defaultShouldRevalidate:g}))&&S.push(fe({key:D,matches:T,match:R},I))}),[y,S]}function wA(t,e,n){let r=!e||n.route.id!==e.route.id,i=t[n.route.id]===void 0;return r||i}function b1(t,e){let n=t.route.path;return t.pathname!==e.pathname||n!=null&&n.endsWith("*")&&t.params["*"]!==e.params["*"]}function r_(t,e){if(t.route.shouldRevalidate){let n=t.route.shouldRevalidate(e);if(typeof n=="boolean")return n}return e.defaultShouldRevalidate}async function i_(t,e,n){if(!t.lazy)return;let r=await t.lazy();if(!t.lazy)return;let i=n[t.id];ae(i,"No route found in manifest");let s={};for(let o in r){let l=i[o]!==void 0&&o!=="hasErrorBoundary";qi(!l,'Route "'+i.id+'" has a static property "'+o+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+o+'" will be ignored.')),!l&&!BR.has(o)&&(s[o]=r[o])}Object.assign(i,s),Object.assign(i,{hasErrorBoundary:e(fe({},i)),lazy:void 0})}async function Go(t,e,n,r,i,s,o,a,l,u){o===void 0&&(o="/"),a===void 0&&(a=!1),l===void 0&&(l=!1);let c,h,d,m=g=>{let p,f=new Promise((y,S)=>p=S);return d=()=>p(),e.signal.addEventListener("abort",d),Promise.race([g({request:e,params:n.params,context:u}),f])};try{let g=n.route[t];if(n.route.lazy)if(g)h=(await Promise.all([m(g),i_(n.route,s,i)]))[0];else if(await i_(n.route,s,i),g=n.route[t],g)h=await m(g);else{if(t==="action")throw jn(405,{method:e.method,pathname:new URL(e.url).pathname,routeId:n.route.id});return{type:et.data,data:void 0}}else ae(g,"Could not find the "+t+' to run on the "'+n.route.id+'" route'),h=await m(g);ae(h!==void 0,"You defined "+(t==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+t+"` ")+"function. Please return a value or `null`.")}catch(g){c=et.error,h=g}finally{d&&e.signal.removeEventListener("abort",d)}if(TA(h)){let g=h.status;if(dA.has(g)){let y=h.headers.get("Location");if(ae(y,"Redirects returned/thrown from loaders/actions must have a Location header"),x1.test(y)){if(!a){let S=new URL(e.url),I=y.startsWith("//")?new URL(S.protocol+y):new URL(y),D=mh(I.pathname,o)!=null;I.origin===S.origin&&D&&(y=I.pathname+I.search+I.hash)}}else{let S=r.slice(0,r.indexOf(n)+1),I=Ym(S).map(T=>T.pathnameBase),D=R1(y,I,new URL(e.url).pathname);if(ae(Gi(D),"Unable to resolve redirect location: "+y),o){let T=D.pathname;D.pathname=T==="/"?o:Zr([o,T])}y=Gi(D)}if(a)throw h.headers.set("Location",y),h;return{type:et.redirect,status:g,location:y,revalidate:h.headers.get("X-Remix-Revalidate")!==null}}if(l)throw{type:c||et.data,response:h};let p,f=h.headers.get("Content-Type");return f&&/\bapplication\/json\b/.test(f)?p=await h.json():p=await h.text(),c===et.error?{type:c,error:new Xm(g,h.statusText,p),headers:h.headers}:{type:et.data,data:p,statusCode:h.status,headers:h.headers}}if(c===et.error)return{type:c,error:h};if(CA(h)){var v,_;return{type:et.deferred,deferredData:h,statusCode:(v=h.init)==null?void 0:v.status,headers:((_=h.init)==null?void 0:_.headers)&&new Headers(h.init.headers)}}return{type:et.data,data:h}}function Ko(t,e,n,r){let i=t.createURL(M1(e)).toString(),s={signal:n};if(r&&ar(r.formMethod)){let{formMethod:o,formEncType:a,formData:l}=r;s.method=o.toUpperCase(),s.body=a==="application/x-www-form-urlencoded"?O1(l):l}return new Request(i,s)}function O1(t){let e=new URLSearchParams;for(let[n,r]of t.entries())e.append(n,r instanceof File?r.name:r);return e}function EA(t,e,n,r,i){let s={},o=null,a,l=!1,u={};return n.forEach((c,h)=>{let d=e[h].route.id;if(ae(!js(c),"Cannot handle redirect results in processLoaderData"),_a(c)){let m=Ps(t,d),v=c.error;r&&(v=Object.values(r)[0],r=void 0),o=o||{},o[m.route.id]==null&&(o[m.route.id]=v),s[d]=void 0,l||(l=!0,a=A1(c.error)?c.error.status:500),c.headers&&(u[d]=c.headers)}else Di(c)?(i.set(d,c.deferredData),s[d]=c.deferredData.data):s[d]=c.data,c.statusCode!=null&&c.statusCode!==200&&!l&&(a=c.statusCode),c.headers&&(u[d]=c.headers)}),r&&(o=r,s[Object.keys(r)[0]]=void 0),{loaderData:s,errors:o,statusCode:a||200,loaderHeaders:u}}function s_(t,e,n,r,i,s,o,a){let{loaderData:l,errors:u}=EA(e,n,r,i,a);for(let c=0;c<s.length;c++){let{key:h,match:d}=s[c];ae(o!==void 0&&o[c]!==void 0,"Did not find corresponding fetcher result");let m=o[c];if(_a(m)){let v=Ps(t.matches,d==null?void 0:d.route.id);u&&u[v.route.id]||(u=fe({},u,{[v.route.id]:m.error})),t.fetchers.delete(h)}else if(js(m))ae(!1,"Unhandled fetcher revalidation redirect");else if(Di(m))ae(!1,"Unhandled fetcher deferred data");else{let v={state:"idle",data:m.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};t.fetchers.set(h,v)}}return{loaderData:l,errors:u}}function o_(t,e,n,r){let i=fe({},e);for(let s of n){let o=s.route.id;if(e.hasOwnProperty(o)?e[o]!==void 0&&(i[o]=e[o]):t[o]!==void 0&&s.route.loader&&(i[o]=t[o]),r&&r.hasOwnProperty(o))break}return i}function Ps(t,e){return(e?t.slice(0,t.findIndex(r=>r.route.id===e)+1):[...t]).reverse().find(r=>r.route.hasErrorBoundary===!0)||t[0]}function a_(t){let e=t.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function jn(t,e){let{pathname:n,routeId:r,method:i,type:s}=e===void 0?{}:e,o="Unknown Server Error",a="Unknown @remix-run/router error";return t===400?(o="Bad Request",i&&n&&r?a="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":s==="defer-action"&&(a="defer() is not supported in actions")):t===403?(o="Forbidden",a='Route "'+r+'" does not match URL "'+n+'"'):t===404?(o="Not Found",a='No route matches URL "'+n+'"'):t===405&&(o="Method Not Allowed",i&&n&&r?a="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(a='Invalid request method "'+i.toUpperCase()+'"')),new Xm(t||500,o,new Error(a),!0)}function l_(t){for(let e=t.length-1;e>=0;e--){let n=t[e];if(js(n))return n}}function M1(t){let e=typeof t=="string"?er(t):t;return Gi(fe({},e,{hash:""}))}function SA(t,e){return t.pathname===e.pathname&&t.search===e.search&&t.hash!==e.hash}function Di(t){return t.type===et.deferred}function _a(t){return t.type===et.error}function js(t){return(t&&t.type)===et.redirect}function CA(t){let e=t;return e&&typeof e=="object"&&typeof e.data=="object"&&typeof e.subscribe=="function"&&typeof e.cancel=="function"&&typeof e.resolveData=="function"}function TA(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.headers=="object"&&typeof t.body<"u"}function IA(t){return hA.has(t.toLowerCase())}function ar(t){return uA.has(t.toLowerCase())}async function u_(t,e,n,r,i,s){for(let o=0;o<n.length;o++){let a=n[o],l=e[o];if(!l)continue;let u=t.find(h=>h.route.id===l.route.id),c=u!=null&&!b1(u,l)&&(s&&s[l.route.id])!==void 0;Di(a)&&(i||c)&&await L1(a,r,i).then(h=>{h&&(n[o]=h||n[o])})}}async function L1(t,e,n){if(n===void 0&&(n=!1),!await t.deferredData.resolveData(e)){if(n)try{return{type:et.data,data:t.deferredData.unwrappedData}}catch(i){return{type:et.error,error:i}}return{type:et.data,data:t.deferredData.data}}}function F1(t){return new URLSearchParams(t).getAll("index").some(e=>e==="")}function c_(t,e){let{route:n,pathname:r,params:i}=t;return{id:n.id,pathname:r,params:i,data:e[n.id],handle:n.handle}}function op(t,e){let n=typeof e=="string"?er(e).search:e.search;if(t[t.length-1].route.index&&F1(n||""))return t[t.length-1];let r=Ym(t);return r[r.length-1]}/**
 * React Router v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function kA(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}const NA=typeof Object.is=="function"?Object.is:kA,{useState:RA,useEffect:AA,useLayoutEffect:DA,useDebugValue:xA}=hf;function PA(t,e,n){const r=e(),[{inst:i},s]=RA({inst:{value:r,getSnapshot:e}});return DA(()=>{i.value=r,i.getSnapshot=e,Ld(i)&&s({inst:i})},[t,r,e]),AA(()=>(Ld(i)&&s({inst:i}),t(()=>{Ld(i)&&s({inst:i})})),[t]),xA(r),r}function Ld(t){const e=t.getSnapshot,n=t.value;try{const r=e();return!NA(n,r)}catch{return!0}}function bA(t,e,n){return e()}const OA=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",MA=!OA,LA=MA?bA:PA,FA="useSyncExternalStore"in hf?(t=>t.useSyncExternalStore)(hf):LA,Jm=E.createContext(null),Zm=E.createContext(null),eg=E.createContext(null),gh=E.createContext(null),wo=E.createContext({outlet:null,matches:[]}),$1=E.createContext(null);function ap(){return ap=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ap.apply(this,arguments)}function yh(){return E.useContext(gh)!=null}function U1(){return yh()||ae(!1),E.useContext(gh).location}function $A(){yh()||ae(!1);let{basename:t,navigator:e}=E.useContext(eg),{matches:n}=E.useContext(wo),{pathname:r}=U1(),i=JSON.stringify(Ym(n).map(a=>a.pathnameBase)),s=E.useRef(!1);return E.useEffect(()=>{s.current=!0}),E.useCallback(function(a,l){if(l===void 0&&(l={}),!s.current)return;if(typeof a=="number"){e.go(a);return}let u=R1(a,JSON.parse(i),r,l.relative==="path");t!=="/"&&(u.pathname=u.pathname==="/"?t:Zr([t,u.pathname])),(l.replace?e.replace:e.push)(u,l.state,l)},[t,e,i,r])}const UA=E.createContext(null);function VA(t){let e=E.useContext(wo).outlet;return e&&E.createElement(UA.Provider,{value:t},e)}function zA(t,e){yh()||ae(!1);let{navigator:n}=E.useContext(eg),r=E.useContext(Zm),{matches:i}=E.useContext(wo),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=U1(),u;if(e){var c;let _=typeof e=="string"?er(e):e;a==="/"||(c=_.pathname)!=null&&c.startsWith(a)||ae(!1),u=_}else u=l;let h=u.pathname||"/",d=a==="/"?h:h.slice(a.length)||"/",m=xs(t,{pathname:d}),v=HA(m&&m.map(_=>Object.assign({},_,{params:Object.assign({},o,_.params),pathname:Zr([a,n.encodeLocation?n.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?a:Zr([a,n.encodeLocation?n.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),i,r||void 0);return e&&v?E.createElement(gh.Provider,{value:{location:ap({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Ge.Pop}},v):v}function BA(){let t=QA(),e=A1(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},e),n?E.createElement("pre",{style:i},n):null,s)}class jA extends E.Component{constructor(e){super(e),this.state={location:e.location,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location?{error:e.error,location:e.location}:{error:e.error||n.error,location:n.location}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?E.createElement(wo.Provider,{value:this.props.routeContext},E.createElement($1.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function WA(t){let{routeContext:e,match:n,children:r}=t,i=E.useContext(Jm);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),E.createElement(wo.Provider,{value:e},r)}function HA(t,e,n){if(e===void 0&&(e=[]),t==null)if(n!=null&&n.errors)t=n.matches;else return null;let r=t,i=n==null?void 0:n.errors;if(i!=null){let s=r.findIndex(o=>o.route.id&&(i==null?void 0:i[o.route.id]));s>=0||ae(!1),r=r.slice(0,Math.min(r.length,s+1))}return r.reduceRight((s,o,a)=>{let l=o.route.id?i==null?void 0:i[o.route.id]:null,u=null;n&&(o.route.ErrorBoundary?u=E.createElement(o.route.ErrorBoundary,null):o.route.errorElement?u=o.route.errorElement:u=E.createElement(BA,null));let c=e.concat(r.slice(0,a+1)),h=()=>{let d=s;return l?d=u:o.route.Component?d=E.createElement(o.route.Component,null):o.route.element&&(d=o.route.element),E.createElement(WA,{match:o,routeContext:{outlet:s,matches:c},children:d})};return n&&(o.route.ErrorBoundary||o.route.errorElement||a===0)?E.createElement(jA,{location:n.location,component:u,error:l,children:h(),routeContext:{outlet:null,matches:c}}):h()},null)}var h_;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator"})(h_||(h_={}));var _c;(function(t){t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator"})(_c||(_c={}));function qA(t){let e=E.useContext(Zm);return e||ae(!1),e}function GA(t){let e=E.useContext(wo);return e||ae(!1),e}function KA(t){let e=GA(),n=e.matches[e.matches.length-1];return n.route.id||ae(!1),n.route.id}function QA(){var t;let e=E.useContext($1),n=qA(_c.UseRouteError),r=KA(_c.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function YA(t){let{fallbackElement:e,router:n}=t,r=E.useCallback(()=>n.state,[n]),i=FA(n.subscribe,r,r),s=E.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:l=>n.navigate(l),push:(l,u,c)=>n.navigate(l,{state:u,preventScrollReset:c==null?void 0:c.preventScrollReset}),replace:(l,u,c)=>n.navigate(l,{replace:!0,state:u,preventScrollReset:c==null?void 0:c.preventScrollReset})}),[n]),o=n.basename||"/",a=E.useMemo(()=>({router:n,navigator:s,static:!1,basename:o}),[n,s,o]);return E.createElement(E.Fragment,null,E.createElement(Jm.Provider,{value:a},E.createElement(Zm.Provider,{value:i},E.createElement(ZA,{basename:n.basename,location:n.state.location,navigationType:n.state.historyAction,navigator:s},n.state.initialized?E.createElement(eD,null):e))),null)}function XA(t){return VA(t.context)}function JA(t){ae(!1)}function ZA(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Ge.Pop,navigator:s,static:o=!1}=t;yh()&&ae(!1);let a=e.replace(/^\/*/,"/"),l=E.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=er(r));let{pathname:u="/",search:c="",hash:h="",state:d=null,key:m="default"}=r,v=E.useMemo(()=>{let _=mh(u,a);return _==null?null:{location:{pathname:_,search:c,hash:h,state:d,key:m},navigationType:i}},[a,u,c,h,d,m,i]);return v==null?null:E.createElement(eg.Provider,{value:l},E.createElement(gh.Provider,{children:n,value:v}))}function eD(t){let{children:e,location:n}=t,r=E.useContext(Jm),i=r&&!e?r.router.routes:lp(e);return zA(i,n)}var d_;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(d_||(d_={}));new Promise(()=>{});function lp(t,e){e===void 0&&(e=[]);let n=[];return E.Children.forEach(t,(r,i)=>{if(!E.isValidElement(r))return;let s=[...e,i];if(r.type===E.Fragment){n.push.apply(n,lp(r.props.children,s));return}r.type!==JA&&ae(!1),!r.props.index||!r.props.children||ae(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=lp(r.props.children,s)),n.push(o)}),n}function tD(t){return!!t.ErrorBoundary||!!t.errorElement}/**
 * React Router DOM v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function up(){return up=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},up.apply(this,arguments)}function nD(t,e){return yA({basename:e==null?void 0:e.basename,future:e==null?void 0:e.future,history:UR({window:e==null?void 0:e.window}),hydrationData:(e==null?void 0:e.hydrationData)||rD(),routes:t,detectErrorBoundary:tD}).initialize()}function rD(){var t;let e=(t=window)==null?void 0:t.__staticRouterHydrationData;return e&&e.errors&&(e=up({},e,{errors:iD(e.errors)})),e}function iD(t){if(!t)return null;let e=Object.entries(t),n={};for(let[r,i]of e)if(i&&i.__type==="RouteErrorResponse")n[r]=new Xm(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){let s=new Error(i.message);s.stack="",n[r]=s}else n[r]=i;return n}var f_;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(f_||(f_={}));var p_;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(p_||(p_={}));const _l=E.createContext(null);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V1={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M=function(t,e){if(!t)throw Eo(e)},Eo=function(t){return new Error("Firebase Database ("+V1.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z1=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},sD=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},tg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,m=u&63;l||(m=64,o||(d=64)),r.push(n[c],n[h],n[d],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(z1(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):sD(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new oD;const d=s<<2|a>>4;if(r.push(d),u!==64){const m=a<<4&240|u>>2;if(r.push(m),h!==64){const v=u<<6&192|h;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class oD extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const B1=function(t){const e=z1(t);return tg.encodeByteArray(e,!0)},wc=function(t){return B1(t).replace(/\./g,"")},Ec=function(t){try{return tg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aD(t){return j1(void 0,t)}function j1(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!lD(n)||(t[n]=j1(t[n],e[n]));return t}function lD(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uD(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cD=()=>uD().__FIREBASE_DEFAULTS__,hD=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},dD=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ec(t[1]);return e&&JSON.parse(e)},ng=()=>{try{return cD()||hD()||dD()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},W1=t=>{var e,n;return(n=(e=ng())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},H1=t=>{const e=W1(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},fD=()=>{var t;return(t=ng())===null||t===void 0?void 0:t.config},q1=t=>{var e;return(e=ng())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G1(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[wc(JSON.stringify(n)),wc(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ig(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test($t())}function pD(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function K1(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function mD(){const t=$t();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Q1(){return V1.NODE_ADMIN===!0}function gD(){try{return typeof indexedDB=="object"}catch{return!1}}function yD(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vD="FirebaseError";class Ar extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=vD,Object.setPrototypeOf(this,Ar.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,wl.prototype.create)}}class wl{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?_D(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Ar(i,a,r)}}function _D(t,e){return t.replace(wD,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const wD=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qa(t){return JSON.parse(t)}function yt(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y1=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Qa(Ec(s[0])||""),n=Qa(Ec(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},ED=function(t){const e=Y1(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},SD=function(t){const e=Y1(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dr(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function io(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function cp(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Sc(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Cc(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(m_(s)&&m_(o)){if(!Cc(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function m_(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function So(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function sa(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function oa(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CD{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)r[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)r[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=r[h-3]^r[h-8]^r[h-14]^r[h-16];r[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,c;for(let h=0;h<80;h++){h<40?h<20?(u=a^s&(o^a),c=1518500249):(u=s^o^a,c=1859775393):h<60?(u=s&o|a&(s|o),c=2400959708):(u=s^o^a,c=3395469782);const d=(i<<5|i>>>27)+u+l+c+r[h]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function TD(t,e){const n=new ID(t,e);return n.subscribe.bind(n)}class ID{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");kD(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Fd),i.error===void 0&&(i.error=Fd),i.complete===void 0&&(i.complete=Fd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function kD(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Fd(){}function ND(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RD=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,M(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},vh=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(t){return t&&t._delegate?t._delegate:t}class ui{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ii="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AD{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new rg;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(xD(e))try{this.getOrInitializeService({instanceIdentifier:Ii})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ii){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ii){return this.instances.has(e)}getOptions(e=Ii){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:DD(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ii){return this.component?this.component.multipleInstances?e:Ii:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function DD(t){return t===Ii?void 0:t}function xD(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PD{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new AD(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var we;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(we||(we={}));const bD={debug:we.DEBUG,verbose:we.VERBOSE,info:we.INFO,warn:we.WARN,error:we.ERROR,silent:we.SILENT},OD=we.INFO,MD={[we.DEBUG]:"log",[we.VERBOSE]:"log",[we.INFO]:"info",[we.WARN]:"warn",[we.ERROR]:"error"},LD=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=MD[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class _h{constructor(e){this.name=e,this._logLevel=OD,this._logHandler=LD,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in we))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?bD[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,we.DEBUG,...e),this._logHandler(this,we.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,we.VERBOSE,...e),this._logHandler(this,we.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,we.INFO,...e),this._logHandler(this,we.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,we.WARN,...e),this._logHandler(this,we.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,we.ERROR,...e),this._logHandler(this,we.ERROR,...e)}}const FD=(t,e)=>e.some(n=>t instanceof n);let g_,y_;function $D(){return g_||(g_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function UD(){return y_||(y_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const X1=new WeakMap,hp=new WeakMap,J1=new WeakMap,$d=new WeakMap,sg=new WeakMap;function VD(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(ei(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&X1.set(n,t)}).catch(()=>{}),sg.set(e,t),e}function zD(t){if(hp.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});hp.set(t,e)}let dp={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return hp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||J1.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ei(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function BD(t){dp=t(dp)}function jD(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ud(this),e,...n);return J1.set(r,e.sort?e.sort():[e]),ei(r)}:UD().includes(t)?function(...e){return t.apply(Ud(this),e),ei(X1.get(this))}:function(...e){return ei(t.apply(Ud(this),e))}}function WD(t){return typeof t=="function"?jD(t):(t instanceof IDBTransaction&&zD(t),FD(t,$D())?new Proxy(t,dp):t)}function ei(t){if(t instanceof IDBRequest)return VD(t);if($d.has(t))return $d.get(t);const e=WD(t);return e!==t&&($d.set(t,e),sg.set(e,t)),e}const Ud=t=>sg.get(t);function HD(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=ei(o);return r&&o.addEventListener("upgradeneeded",l=>{r(ei(o.result),l.oldVersion,l.newVersion,ei(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const qD=["get","getKey","getAll","getAllKeys","count"],GD=["put","add","delete","clear"],Vd=new Map;function v_(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Vd.get(e))return Vd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=GD.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||qD.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Vd.set(e,s),s}BD(t=>({...t,get:(e,n,r)=>v_(e,n)||t.get(e,n,r),has:(e,n)=>!!v_(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KD{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(QD(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function QD(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const fp="@firebase/app",__="0.9.7";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ki=new _h("@firebase/app"),YD="@firebase/app-compat",XD="@firebase/analytics-compat",JD="@firebase/analytics",ZD="@firebase/app-check-compat",ex="@firebase/app-check",tx="@firebase/auth",nx="@firebase/auth-compat",rx="@firebase/database",ix="@firebase/database-compat",sx="@firebase/functions",ox="@firebase/functions-compat",ax="@firebase/installations",lx="@firebase/installations-compat",ux="@firebase/messaging",cx="@firebase/messaging-compat",hx="@firebase/performance",dx="@firebase/performance-compat",fx="@firebase/remote-config",px="@firebase/remote-config-compat",mx="@firebase/storage",gx="@firebase/storage-compat",yx="@firebase/firestore",vx="@firebase/firestore-compat",_x="firebase",wx="9.19.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pp="[DEFAULT]",Ex={[fp]:"fire-core",[YD]:"fire-core-compat",[JD]:"fire-analytics",[XD]:"fire-analytics-compat",[ex]:"fire-app-check",[ZD]:"fire-app-check-compat",[tx]:"fire-auth",[nx]:"fire-auth-compat",[rx]:"fire-rtdb",[ix]:"fire-rtdb-compat",[sx]:"fire-fn",[ox]:"fire-fn-compat",[ax]:"fire-iid",[lx]:"fire-iid-compat",[ux]:"fire-fcm",[cx]:"fire-fcm-compat",[hx]:"fire-perf",[dx]:"fire-perf-compat",[fx]:"fire-rc",[px]:"fire-rc-compat",[mx]:"fire-gcs",[gx]:"fire-gcs-compat",[yx]:"fire-fst",[vx]:"fire-fst-compat","fire-js":"fire-js",[_x]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tc=new Map,mp=new Map;function Sx(t,e){try{t.container.addComponent(e)}catch(n){Ki.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Qi(t){const e=t.name;if(mp.has(e))return Ki.debug(`There were multiple attempts to register component ${e}.`),!1;mp.set(e,t);for(const n of Tc.values())Sx(n,t);return!0}function wh(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cx={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ti=new wl("app","Firebase",Cx);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tx{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ui("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ti.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Co=wx;function Z1(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:pp,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw ti.create("bad-app-name",{appName:String(i)});if(n||(n=fD()),!n)throw ti.create("no-options");const s=Tc.get(i);if(s){if(Cc(n,s.options)&&Cc(r,s.config))return s;throw ti.create("duplicate-app",{appName:i})}const o=new PD(i);for(const l of mp.values())o.addComponent(l);const a=new Tx(n,r,o);return Tc.set(i,a),a}function og(t=pp){const e=Tc.get(t);if(!e&&t===pp)return Z1();if(!e)throw ti.create("no-app",{appName:t});return e}function Qn(t,e,n){var r;let i=(r=Ex[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ki.warn(a.join(" "));return}Qi(new ui(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ix="firebase-heartbeat-database",kx=1,Ya="firebase-heartbeat-store";let zd=null;function eS(){return zd||(zd=HD(Ix,kx,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ya)}}}).catch(t=>{throw ti.create("idb-open",{originalErrorMessage:t.message})})),zd}async function Nx(t){try{return(await eS()).transaction(Ya).objectStore(Ya).get(tS(t))}catch(e){if(e instanceof Ar)Ki.warn(e.message);else{const n=ti.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ki.warn(n.message)}}}async function w_(t,e){try{const r=(await eS()).transaction(Ya,"readwrite");return await r.objectStore(Ya).put(e,tS(t)),r.done}catch(n){if(n instanceof Ar)Ki.warn(n.message);else{const r=ti.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ki.warn(r.message)}}}function tS(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rx=1024,Ax=30*24*60*60*1e3;class Dx{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Px(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=E_();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=Ax}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=E_(),{heartbeatsToSend:n,unsentEntries:r}=xx(this._heartbeatsCache.heartbeats),i=wc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function E_(){return new Date().toISOString().substring(0,10)}function xx(t,e=Rx){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),S_(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),S_(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Px{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return gD()?yD().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Nx(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return w_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return w_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function S_(t){return wc(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bx(t){Qi(new ui("platform-logger",e=>new KD(e),"PRIVATE")),Qi(new ui("heartbeat",e=>new Dx(e),"PRIVATE")),Qn(fp,__,t),Qn(fp,__,"esm2017"),Qn("fire-js","")}bx("");var Ox="firebase",Mx="9.19.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qn(Ox,Mx,"app");function ag(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function nS(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Lx=nS,rS=new wl("auth","Firebase",nS());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C_=new _h("@firebase/auth");function Vu(t,...e){C_.logLevel<=we.ERROR&&C_.error(`Auth (${Co}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $n(t,...e){throw lg(t,...e)}function Yn(t,...e){return lg(t,...e)}function Fx(t,e,n){const r=Object.assign(Object.assign({},Lx()),{[e]:n});return new wl("auth","Firebase",r).create(e,{appName:t.name})}function lg(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return rS.create(t,...e)}function J(t,e,...n){if(!t)throw lg(e,...n)}function hr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Vu(e),new Error(e)}function Sr(t,e){t||hr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T_=new Map;function dr(t){Sr(t instanceof Function,"Expected a class definition");let e=T_.get(t);return e?(Sr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,T_.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $x(t,e){const n=wh(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Cc(s,e??{}))return i;$n(i,"already-initialized")}return n.initialize({options:e})}function Ux(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(dr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Vx(){return I_()==="http:"||I_()==="https:"}function I_(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zx(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Vx()||pD()||"connection"in navigator)?navigator.onLine:!0}function Bx(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(e,n){this.shortDelay=e,this.longDelay=n,Sr(n>e,"Short delay should be less than long delay!"),this.isMobile=ig()||K1()}get(){return zx()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ug(t,e){Sr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iS{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;hr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;hr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;hr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jx={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wx=new El(3e4,6e4);function Sl(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Cl(t,e,n,r,i={}){return sS(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=So(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),iS.fetch()(oS(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function sS(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},jx),e);try{const i=new Hx(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw gu(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw gu(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw gu(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw gu(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Fx(t,c,u);$n(t,c)}}catch(i){if(i instanceof Ar)throw i;$n(t,"network-request-failed",{message:String(i)})}}async function Tl(t,e,n,r,i={}){const s=await Cl(t,e,n,r,i);return"mfaPendingCredential"in s&&$n(t,"multi-factor-auth-required",{_serverResponse:s}),s}function oS(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?ug(t.config,i):`${t.config.apiScheme}://${i}`}class Hx{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Yn(this.auth,"network-request-failed")),Wx.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function gu(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Yn(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qx(t,e){return Cl(t,"POST","/v1/accounts:delete",e)}async function Gx(t,e){return Cl(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wa(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Kx(t,e=!1){const n=Je(t),r=await n.getIdToken(e),i=cg(r);J(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:wa(Bd(i.auth_time)),issuedAtTime:wa(Bd(i.iat)),expirationTime:wa(Bd(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Bd(t){return Number(t)*1e3}function cg(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Vu("JWT malformed, contained fewer than 3 sections"),null;try{const i=Ec(n);return i?JSON.parse(i):(Vu("Failed to decode base64 JWT payload"),null)}catch(i){return Vu("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Qx(t){const e=cg(t);return J(e,"internal-error"),J(typeof e.exp<"u","internal-error"),J(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xa(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ar&&Yx(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Yx({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xx{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aS{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=wa(this.lastLoginAt),this.creationTime=wa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ic(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Xa(t,Gx(n,{idToken:r}));J(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?eP(s.providerUserInfo):[],a=Zx(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new aS(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function Jx(t){const e=Je(t);await Ic(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Zx(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function eP(t){return t.map(e=>{var{providerId:n}=e,r=ag(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tP(t,e){const n=await sS(t,{},async()=>{const r=So({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=oS(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",iS.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){J(e.idToken,"internal-error"),J(typeof e.idToken<"u","internal-error"),J(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Qx(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return J(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await tP(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ja;return r&&(J(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(J(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(J(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ja,this.toJSON())}_performRefresh(){return hr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Or(t,e){J(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Fi{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=ag(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Xx(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new aS(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Xa(this,this.stsTokenManager.getToken(this.auth,e));return J(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Kx(this,e)}reload(){return Jx(this)}_assign(e){this!==e&&(J(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Fi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){J(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ic(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Xa(this,qx(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,g=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:y,emailVerified:S,isAnonymous:I,providerData:D,stsTokenManager:T}=n;J(y&&T,e,"internal-error");const R=Ja.fromJSON(this.name,T);J(typeof y=="string",e,"internal-error"),Or(h,e.name),Or(d,e.name),J(typeof S=="boolean",e,"internal-error"),J(typeof I=="boolean",e,"internal-error"),Or(m,e.name),Or(v,e.name),Or(_,e.name),Or(g,e.name),Or(p,e.name),Or(f,e.name);const re=new Fi({uid:y,auth:e,email:d,emailVerified:S,displayName:h,isAnonymous:I,photoURL:v,phoneNumber:m,tenantId:_,stsTokenManager:R,createdAt:p,lastLoginAt:f});return D&&Array.isArray(D)&&(re.providerData=D.map(Q=>Object.assign({},Q))),g&&(re._redirectEventId=g),re}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ja;i.updateFromServerResponse(n);const s=new Fi({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ic(s),s}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lS{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}lS.type="NONE";const k_=lS;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zu(t,e,n){return`firebase:${t}:${e}:${n}`}class Ws{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=zu(this.userKey,i.apiKey,s),this.fullPersistenceKey=zu("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Fi._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ws(dr(k_),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||dr(k_);const o=zu(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=Fi._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Ws(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Ws(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(hS(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(uS(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(fS(e))return"Blackberry";if(pS(e))return"Webos";if(hg(e))return"Safari";if((e.includes("chrome/")||cS(e))&&!e.includes("edge/"))return"Chrome";if(dS(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function uS(t=$t()){return/firefox\//i.test(t)}function hg(t=$t()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function cS(t=$t()){return/crios\//i.test(t)}function hS(t=$t()){return/iemobile/i.test(t)}function dS(t=$t()){return/android/i.test(t)}function fS(t=$t()){return/blackberry/i.test(t)}function pS(t=$t()){return/webos/i.test(t)}function Eh(t=$t()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function nP(t=$t()){var e;return Eh(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function rP(){return mD()&&document.documentMode===10}function mS(t=$t()){return Eh(t)||dS(t)||pS(t)||fS(t)||/windows phone/i.test(t)||hS(t)}function iP(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gS(t,e=[]){let n;switch(t){case"Browser":n=N_($t());break;case"Worker":n=`${N_($t())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Co}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oP{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new R_(this),this.idTokenSubscription=new R_(this),this.beforeStateQueue=new sP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=rS,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=dr(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ws.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return J(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ic(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Bx()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Je(e):null;return n&&J(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&J(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(dr(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new wl("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&dr(e)||this._popupRedirectResolver;J(n,this,"argument-error"),this.redirectPersistenceManager=await Ws.create(this,[dr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return J(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return J(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=gS(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Il(t){return Je(t)}class R_{constructor(e){this.auth=e,this.observer=null,this.addObserver=TD(n=>this.observer=n)}get next(){return J(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function aP(t,e,n){const r=Il(t);J(r._canInitEmulator,r,"emulator-config-failed"),J(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=yS(e),{host:o,port:a}=lP(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||uP()}function yS(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function lP(t){const e=yS(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:A_(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:A_(o)}}}function A_(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function uP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dg{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return hr("not implemented")}_getIdTokenResponse(e){return hr("not implemented")}_linkToIdToken(e,n){return hr("not implemented")}_getReauthenticationResolver(e){return hr("not implemented")}}async function cP(t,e){return Cl(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hP(t,e){return Tl(t,"POST","/v1/accounts:signInWithPassword",Sl(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dP(t,e){return Tl(t,"POST","/v1/accounts:signInWithEmailLink",Sl(t,e))}async function fP(t,e){return Tl(t,"POST","/v1/accounts:signInWithEmailLink",Sl(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za extends dg{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Za(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Za(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return hP(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return dP(e,{email:this._email,oobCode:this._password});default:$n(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return cP(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return fP(e,{idToken:n,email:this._email,oobCode:this._password});default:$n(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hs(t,e){return Tl(t,"POST","/v1/accounts:signInWithIdp",Sl(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pP="http://localhost";class Yi extends dg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Yi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):$n("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=ag(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Yi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Hs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Hs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Hs(e,n)}buildRequest(){const e={requestUri:pP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=So(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mP(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function gP(t){const e=sa(oa(t)).link,n=e?sa(oa(e)).deep_link_id:null,r=sa(oa(t)).deep_link_id;return(r?sa(oa(r)).link:null)||r||n||e||t}class fg{constructor(e){var n,r,i,s,o,a;const l=sa(oa(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,h=mP((i=l.mode)!==null&&i!==void 0?i:null);J(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=gP(e);try{return new fg(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(){this.providerId=To.PROVIDER_ID}static credential(e,n){return Za._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=fg.parseLink(n);return J(r,"argument-error"),Za._fromEmailAndCode(e,r.code,r.tenantId)}}To.PROVIDER_ID="password";To.EMAIL_PASSWORD_SIGN_IN_METHOD="password";To.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vS{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl extends vS{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur extends kl{constructor(){super("facebook.com")}static credential(e){return Yi._fromParams({providerId:Ur.PROVIDER_ID,signInMethod:Ur.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ur.credentialFromTaggedObject(e)}static credentialFromError(e){return Ur.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ur.credential(e.oauthAccessToken)}catch{return null}}}Ur.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ur.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr extends kl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Yi._fromParams({providerId:Vr.PROVIDER_ID,signInMethod:Vr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Vr.credentialFromTaggedObject(e)}static credentialFromError(e){return Vr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Vr.credential(n,r)}catch{return null}}}Vr.GOOGLE_SIGN_IN_METHOD="google.com";Vr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr extends kl{constructor(){super("github.com")}static credential(e){return Yi._fromParams({providerId:zr.PROVIDER_ID,signInMethod:zr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return zr.credentialFromTaggedObject(e)}static credentialFromError(e){return zr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return zr.credential(e.oauthAccessToken)}catch{return null}}}zr.GITHUB_SIGN_IN_METHOD="github.com";zr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br extends kl{constructor(){super("twitter.com")}static credential(e,n){return Yi._fromParams({providerId:Br.PROVIDER_ID,signInMethod:Br.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Br.credentialFromTaggedObject(e)}static credentialFromError(e){return Br.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Br.credential(n,r)}catch{return null}}}Br.TWITTER_SIGN_IN_METHOD="twitter.com";Br.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yP(t,e){return Tl(t,"POST","/v1/accounts:signUp",Sl(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Fi._fromIdTokenResponse(e,r,i),o=D_(r);return new Xi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=D_(r);return new Xi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function D_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc extends Ar{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,kc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new kc(e,n,r,i)}}function _S(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?kc._fromErrorAndOperation(t,s,e,r):s})}async function vP(t,e,n=!1){const r=await Xa(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Xi._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _P(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Xa(t,_S(r,i,e,t),n);J(s.idToken,r,"internal-error");const o=cg(s.idToken);J(o,r,"internal-error");const{sub:a}=o;return J(t.uid===a,r,"user-mismatch"),Xi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&$n(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wS(t,e,n=!1){const r="signIn",i=await _S(t,r,e),s=await Xi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function wP(t,e){return wS(Il(t),e)}async function EP(t,e,n){const r=Il(t),i=await yP(r,{returnSecureToken:!0,email:e,password:n}),s=await Xi._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function SP(t,e,n){return wP(Je(t),To.credential(e,n))}function CP(t,e,n,r){return Je(t).onIdTokenChanged(e,n,r)}function TP(t,e,n){return Je(t).beforeAuthStateChanged(e,n)}function IP(t,e,n,r){return Je(t).onAuthStateChanged(e,n,r)}function kP(t){return Je(t).signOut()}const Nc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ES{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Nc,"1"),this.storage.removeItem(Nc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NP(){const t=$t();return hg(t)||Eh(t)}const RP=1e3,AP=10;class SS extends ES{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=NP()&&iP(),this.fallbackToPolling=mS(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);rP()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,AP):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},RP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}SS.type="LOCAL";const DP=SS;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CS extends ES{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}CS.type="SESSION";const TS=CS;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Sh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await xP(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Sh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pg(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=pg("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xn(){return window}function bP(t){Xn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IS(){return typeof Xn().WorkerGlobalScope<"u"&&typeof Xn().importScripts=="function"}async function OP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function MP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function LP(){return IS()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kS="firebaseLocalStorageDb",FP=1,Rc="firebaseLocalStorage",NS="fbase_key";class Nl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ch(t,e){return t.transaction([Rc],e?"readwrite":"readonly").objectStore(Rc)}function $P(){const t=indexedDB.deleteDatabase(kS);return new Nl(t).toPromise()}function yp(){const t=indexedDB.open(kS,FP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Rc,{keyPath:NS})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Rc)?e(r):(r.close(),await $P(),e(await yp()))})})}async function x_(t,e,n){const r=Ch(t,!0).put({[NS]:e,value:n});return new Nl(r).toPromise()}async function UP(t,e){const n=Ch(t,!1).get(e),r=await new Nl(n).toPromise();return r===void 0?null:r.value}function P_(t,e){const n=Ch(t,!0).delete(e);return new Nl(n).toPromise()}const VP=800,zP=3;class RS{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await yp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>zP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return IS()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Sh._getInstance(LP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await OP(),!this.activeServiceWorker)return;this.sender=new PP(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||MP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await yp();return await x_(e,Nc,"1"),await P_(e,Nc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>x_(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>UP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>P_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Ch(i,!1).getAll();return new Nl(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),VP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}RS.type="LOCAL";const BP=RS;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jP(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function WP(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Yn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",jP().appendChild(r)})}function HP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new El(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qP(t,e){return e?dr(e):(J(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mg extends dg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Hs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Hs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Hs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function GP(t){return wS(t.auth,new mg(t),t.bypassAuthState)}function KP(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),_P(n,new mg(t),t.bypassAuthState)}async function QP(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),vP(n,new mg(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AS{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return GP;case"linkViaPopup":case"linkViaRedirect":return QP;case"reauthViaPopup":case"reauthViaRedirect":return KP;default:$n(this.auth,"internal-error")}}resolve(e){Sr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Sr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YP=new El(2e3,1e4);class bs extends AS{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,bs.currentPopupAction&&bs.currentPopupAction.cancel(),bs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return J(e,this.auth,"internal-error"),e}async onExecution(){Sr(this.filter.length===1,"Popup operations only handle one event");const e=pg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Yn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Yn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,bs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Yn(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,YP.get())};e()}}bs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XP="pendingRedirect",Bu=new Map;class JP extends AS{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Bu.get(this.auth._key());if(!e){try{const r=await ZP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Bu.set(this.auth._key(),e)}return this.bypassAuthState||Bu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ZP(t,e){const n=nb(e),r=tb(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function eb(t,e){Bu.set(t._key(),e)}function tb(t){return dr(t._redirectPersistence)}function nb(t){return zu(XP,t.config.apiKey,t.name)}async function rb(t,e,n=!1){const r=Il(t),i=qP(r,e),o=await new JP(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ib=10*60*1e3;class sb{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ob(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!DS(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Yn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ib&&this.cachedEventUids.clear(),this.cachedEventUids.has(b_(e))}saveEventToCache(e){this.cachedEventUids.add(b_(e)),this.lastProcessedEventTime=Date.now()}}function b_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function DS({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ob(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return DS(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ab(t,e={}){return Cl(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ub=/^https?/;async function cb(t){if(t.config.emulator)return;const{authorizedDomains:e}=await ab(t);for(const n of e)try{if(hb(n))return}catch{}$n(t,"unauthorized-domain")}function hb(t){const e=gp(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!ub.test(n))return!1;if(lb.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const db=new El(3e4,6e4);function O_(){const t=Xn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function fb(t){return new Promise((e,n)=>{var r,i,s;function o(){O_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{O_(),n(Yn(t,"network-request-failed"))},timeout:db.get()})}if(!((i=(r=Xn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Xn().gapi)===null||s===void 0)&&s.load)o();else{const a=HP("iframefcb");return Xn()[a]=()=>{gapi.load?o():n(Yn(t,"network-request-failed"))},WP(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw ju=null,e})}let ju=null;function pb(t){return ju=ju||fb(t),ju}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mb=new El(5e3,15e3),gb="__/auth/iframe",yb="emulator/auth/iframe",vb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},_b=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function wb(t){const e=t.config;J(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ug(e,yb):`https://${t.config.authDomain}/${gb}`,r={apiKey:e.apiKey,appName:t.name,v:Co},i=_b.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${So(r).slice(1)}`}async function Eb(t){const e=await pb(t),n=Xn().gapi;return J(n,t,"internal-error"),e.open({where:document.body,url:wb(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:vb,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Yn(t,"network-request-failed"),a=Xn().setTimeout(()=>{s(o)},mb.get());function l(){Xn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Cb=500,Tb=600,Ib="_blank",kb="http://localhost";class M_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Nb(t,e,n,r=Cb,i=Tb){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Sb),{width:r.toString(),height:i.toString(),top:s,left:o}),u=$t().toLowerCase();n&&(a=cS(u)?Ib:n),uS(u)&&(e=e||kb,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[m,v])=>`${d}${m}=${v},`,"");if(nP(u)&&a!=="_self")return Rb(e||"",a),new M_(null);const h=window.open(e||"",a,c);J(h,t,"popup-blocked");try{h.focus()}catch{}return new M_(h)}function Rb(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ab="__/auth/handler",Db="emulator/auth/handler";function L_(t,e,n,r,i,s){J(t.config.authDomain,t,"auth-domain-config-required"),J(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Co,eventId:i};if(e instanceof vS){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",cp(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,u]of Object.entries(s||{}))o[l]=u}if(e instanceof kl){const l=e.getScopes().filter(u=>u!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${xb(t)}?${So(a).slice(1)}`}function xb({config:t}){return t.emulator?ug(t,Db):`https://${t.authDomain}/${Ab}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jd="webStorageSupport";class Pb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=TS,this._completeRedirectFn=rb,this._overrideRedirectResult=eb}async _openPopup(e,n,r,i){var s;Sr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=L_(e,n,r,gp(),i);return Nb(e,o,pg())}async _openRedirect(e,n,r,i){return await this._originValidation(e),bP(L_(e,n,r,gp(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Sr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Eb(e),r=new sb(e);return n.register("authEvent",i=>(J(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(jd,{type:jd},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[jd];o!==void 0&&n(!!o),$n(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=cb(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return mS()||hg()||Eh()}}const bb=Pb;var F_="@firebase/auth",$_="0.22.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ob{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){J(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mb(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Lb(t){Qi(new ui("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,l)=>{J(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),J(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:gS(t)},c=new oP(a,l,u);return Ux(c,n),c})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Qi(new ui("auth-internal",e=>{const n=Il(e.getProvider("auth").getImmediate());return(r=>new Ob(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Qn(F_,$_,Mb(t)),Qn(F_,$_,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fb=5*60,$b=q1("authIdTokenMaxAge")||Fb;let U_=null;const Ub=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>$b)return;const i=n==null?void 0:n.token;U_!==i&&(U_=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function xS(t=og()){const e=wh(t,"auth");if(e.isInitialized())return e.getImmediate();const n=$x(t,{popupRedirectResolver:bb,persistence:[BP,DP,TS]}),r=q1("authTokenSyncURL");if(r){const s=Ub(r);TP(n,s,()=>s(n.currentUser)),CP(n,o=>s(o))}const i=W1("auth");return i&&aP(n,`http://${i}`),n}Lb("Browser");var Vb=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},z,gg=gg||{},ne=Vb||self;function Ac(){}function Th(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Rl(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function zb(t){return Object.prototype.hasOwnProperty.call(t,Wd)&&t[Wd]||(t[Wd]=++Bb)}var Wd="closure_uid_"+(1e9*Math.random()>>>0),Bb=0;function jb(t,e,n){return t.call.apply(t.bind,arguments)}function Wb(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Mt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Mt=jb:Mt=Wb,Mt.apply(null,arguments)}function yu(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Et(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function yi(){this.s=this.s,this.o=this.o}var Hb=0;yi.prototype.s=!1;yi.prototype.na=function(){!this.s&&(this.s=!0,this.M(),Hb!=0)&&zb(this)};yi.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const PS=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function yg(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function V_(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Th(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function Lt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Lt.prototype.h=function(){this.defaultPrevented=!0};var qb=function(){if(!ne.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{ne.addEventListener("test",Ac,e),ne.removeEventListener("test",Ac,e)}catch{}return t}();function Dc(t){return/^[\s\xa0]*$/.test(t)}var z_=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Hd(t,e){return t<e?-1:t>e?1:0}function Ih(){var t=ne.navigator;return t&&(t=t.userAgent)?t:""}function Hn(t){return Ih().indexOf(t)!=-1}function vg(t){return vg[" "](t),t}vg[" "]=Ac;function Gb(t){var e=Yb;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var Kb=Hn("Opera"),so=Hn("Trident")||Hn("MSIE"),bS=Hn("Edge"),vp=bS||so,OS=Hn("Gecko")&&!(Ih().toLowerCase().indexOf("webkit")!=-1&&!Hn("Edge"))&&!(Hn("Trident")||Hn("MSIE"))&&!Hn("Edge"),Qb=Ih().toLowerCase().indexOf("webkit")!=-1&&!Hn("Edge");function MS(){var t=ne.document;return t?t.documentMode:void 0}var xc;e:{var qd="",Gd=function(){var t=Ih();if(OS)return/rv:([^\);]+)(\)|;)/.exec(t);if(bS)return/Edge\/([\d\.]+)/.exec(t);if(so)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(Qb)return/WebKit\/(\S+)/.exec(t);if(Kb)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Gd&&(qd=Gd?Gd[1]:""),so){var Kd=MS();if(Kd!=null&&Kd>parseFloat(qd)){xc=String(Kd);break e}}xc=qd}var Yb={};function Xb(){return Gb(function(){let t=0;const e=z_(String(xc)).split("."),n=z_("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=Hd(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||Hd(i[2].length==0,s[2].length==0)||Hd(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var _p;if(ne.document&&so){var B_=MS();_p=B_||parseInt(xc,10)||void 0}else _p=void 0;var Jb=_p;function el(t,e){if(Lt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(OS){e:{try{vg(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Zb[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&el.X.h.call(this)}}Et(el,Lt);var Zb={2:"touch",3:"pen",4:"mouse"};el.prototype.h=function(){el.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Al="closure_listenable_"+(1e6*Math.random()|0),eO=0;function tO(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=i,this.key=++eO,this.ba=this.ea=!1}function kh(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function _g(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function LS(t){const e={};for(const n in t)e[n]=t[n];return e}const j_="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function FS(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<j_.length;s++)n=j_[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Nh(t){this.src=t,this.g={},this.h=0}Nh.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Ep(t,e,r,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new tO(e,this.src,s,!!r,i),e.ea=n,t.push(e)),e};function wp(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=PS(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(kh(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Ep(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ba&&s.listener==e&&s.capture==!!n&&s.ha==r)return i}return-1}var wg="closure_lm_"+(1e6*Math.random()|0),Qd={};function $S(t,e,n,r,i){if(r&&r.once)return VS(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)$S(t,e[s],n,r,i);return null}return n=Cg(n),t&&t[Al]?t.N(e,n,Rl(r)?!!r.capture:!!r,i):US(t,e,n,!1,r,i)}function US(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Rl(i)?!!i.capture:!!i,a=Sg(t);if(a||(t[wg]=a=new Nh(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=nO(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)qb||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(BS(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function nO(){function t(n){return e.call(t.src,t.listener,n)}const e=rO;return t}function VS(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)VS(t,e[s],n,r,i);return null}return n=Cg(n),t&&t[Al]?t.O(e,n,Rl(r)?!!r.capture:!!r,i):US(t,e,n,!0,r,i)}function zS(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)zS(t,e[s],n,r,i);else r=Rl(r)?!!r.capture:!!r,n=Cg(n),t&&t[Al]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Ep(s,n,r,i),-1<n&&(kh(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Sg(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Ep(e,n,r,i)),(n=-1<t?e[t]:null)&&Eg(n))}function Eg(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Al])wp(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(BS(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Sg(e))?(wp(n,t),n.h==0&&(n.src=null,e[wg]=null)):kh(t)}}}function BS(t){return t in Qd?Qd[t]:Qd[t]="on"+t}function rO(t,e){if(t.ba)t=!0;else{e=new el(e,this);var n=t.listener,r=t.ha||t.src;t.ea&&Eg(t),t=n.call(r,e)}return t}function Sg(t){return t=t[wg],t instanceof Nh?t:null}var Yd="__closure_events_fn_"+(1e9*Math.random()>>>0);function Cg(t){return typeof t=="function"?t:(t[Yd]||(t[Yd]=function(e){return t.handleEvent(e)}),t[Yd])}function pt(){yi.call(this),this.i=new Nh(this),this.P=this,this.I=null}Et(pt,yi);pt.prototype[Al]=!0;pt.prototype.removeEventListener=function(t,e,n,r){zS(this,t,e,n,r)};function _t(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new Lt(e,t);else if(e instanceof Lt)e.target=e.target||t;else{var i=e;e=new Lt(r,t),FS(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=vu(o,r,!0,e)&&i}if(o=e.g=t,i=vu(o,r,!0,e)&&i,i=vu(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=vu(o,r,!1,e)&&i}pt.prototype.M=function(){if(pt.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)kh(n[r]);delete t.g[e],t.h--}}this.I=null};pt.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};pt.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function vu(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&wp(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Tg=ne.JSON.stringify;function iO(){var t=HS;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class sO{constructor(){this.h=this.g=null}add(e,n){const r=jS.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var jS=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new oO,t=>t.reset());class oO{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function aO(t){ne.setTimeout(()=>{throw t},0)}function WS(t,e){Sp||lO(),Cp||(Sp(),Cp=!0),HS.add(t,e)}var Sp;function lO(){var t=ne.Promise.resolve(void 0);Sp=function(){t.then(uO)}}var Cp=!1,HS=new sO;function uO(){for(var t;t=iO();){try{t.h.call(t.g)}catch(n){aO(n)}var e=jS;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Cp=!1}function Rh(t,e){pt.call(this),this.h=t||1,this.g=e||ne,this.j=Mt(this.lb,this),this.l=Date.now()}Et(Rh,pt);z=Rh.prototype;z.ca=!1;z.R=null;z.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),_t(this,"tick"),this.ca&&(Ig(this),this.start()))}};z.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Ig(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}z.M=function(){Rh.X.M.call(this),Ig(this),delete this.g};function kg(t,e,n){if(typeof t=="function")n&&(t=Mt(t,n));else if(t&&typeof t.handleEvent=="function")t=Mt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:ne.setTimeout(t,e||0)}function qS(t){t.g=kg(()=>{t.g=null,t.i&&(t.i=!1,qS(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class cO extends yi{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:qS(this)}M(){super.M(),this.g&&(ne.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function tl(t){yi.call(this),this.h=t,this.g={}}Et(tl,yi);var W_=[];function GS(t,e,n,r){Array.isArray(n)||(n&&(W_[0]=n.toString()),n=W_);for(var i=0;i<n.length;i++){var s=$S(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function KS(t){_g(t.g,function(e,n){this.g.hasOwnProperty(n)&&Eg(e)},t),t.g={}}tl.prototype.M=function(){tl.X.M.call(this),KS(this)};tl.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Ah(){this.g=!0}Ah.prototype.Aa=function(){this.g=!1};function hO(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function dO(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Os(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+pO(t,n)+(r?" "+r:"")})}function fO(t,e){t.info(function(){return"TIMEOUT: "+e})}Ah.prototype.info=function(){};function pO(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Tg(n)}catch{return e}}var os={},H_=null;function Dh(){return H_=H_||new pt}os.Pa="serverreachability";function QS(t){Lt.call(this,os.Pa,t)}Et(QS,Lt);function nl(t){const e=Dh();_t(e,new QS(e))}os.STAT_EVENT="statevent";function YS(t,e){Lt.call(this,os.STAT_EVENT,t),this.stat=e}Et(YS,Lt);function Bt(t){const e=Dh();_t(e,new YS(e,t))}os.Qa="timingevent";function XS(t,e){Lt.call(this,os.Qa,t),this.size=e}Et(XS,Lt);function Dl(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return ne.setTimeout(function(){t()},e)}var xh={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},JS={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Ng(){}Ng.prototype.h=null;function q_(t){return t.h||(t.h=t.i())}function ZS(){}var xl={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Rg(){Lt.call(this,"d")}Et(Rg,Lt);function Ag(){Lt.call(this,"c")}Et(Ag,Lt);var Tp;function Ph(){}Et(Ph,Ng);Ph.prototype.g=function(){return new XMLHttpRequest};Ph.prototype.i=function(){return{}};Tp=new Ph;function Pl(t,e,n,r){this.l=t,this.j=e,this.m=n,this.U=r||1,this.S=new tl(this),this.O=mO,t=vp?125:void 0,this.T=new Rh(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new eC}function eC(){this.i=null,this.g="",this.h=!1}var mO=45e3,Ip={},Pc={};z=Pl.prototype;z.setTimeout=function(t){this.O=t};function kp(t,e,n){t.K=1,t.v=Oh(Cr(e)),t.s=n,t.P=!0,tC(t,null)}function tC(t,e){t.F=Date.now(),bl(t),t.A=Cr(t.v);var n=t.A,r=t.U;Array.isArray(r)||(r=[String(r)]),uC(n.i,"t",r),t.C=0,n=t.l.H,t.h=new eC,t.g=DC(t.l,n?e:null,!t.s),0<t.N&&(t.L=new cO(Mt(t.La,t,t.g),t.N)),GS(t.S,t.g,"readystatechange",t.ib),e=t.H?LS(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),nl(),hO(t.j,t.u,t.A,t.m,t.U,t.s)}z.ib=function(t){t=t.target;const e=this.L;e&&fr(t)==3?e.l():this.La(t)};z.La=function(t){try{if(t==this.g)e:{const c=fr(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>c)&&(c!=3||vp||this.g&&(this.h.h||this.g.fa()||Y_(this.g)))){this.I||c!=4||e==7||(e==8||0>=h?nl(3):nl(2)),bh(this);var n=this.g.aa();this.Y=n;t:if(nC(this)){var r=Y_(this.g);t="";var i=r.length,s=fr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){xi(this),Ea(this);var o="";break t}this.h.i=new ne.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,dO(this.j,this.u,this.A,this.m,this.U,c,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Dc(a)){var u=a;break t}}u=null}if(n=u)Os(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Np(this,n);else{this.i=!1,this.o=3,Bt(12),xi(this),Ea(this);break e}}this.P?(rC(this,c,o),vp&&this.i&&c==3&&(GS(this.S,this.T,"tick",this.hb),this.T.start())):(Os(this.j,this.m,o,null),Np(this,o)),c==4&&xi(this),this.i&&!this.I&&(c==4?kC(this.l,this):(this.i=!1,bl(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Bt(12)):(this.o=0,Bt(13)),xi(this),Ea(this)}}}catch{}finally{}};function nC(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function rC(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=gO(t,n),i==Pc){e==4&&(t.o=4,Bt(14),r=!1),Os(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Ip){t.o=4,Bt(15),Os(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Os(t.j,t.m,i,null),Np(t,i);nC(t)&&i!=Pc&&i!=Ip&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Bt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Lg(e),e.K=!0,Bt(11))):(Os(t.j,t.m,n,"[Invalid Chunked Response]"),xi(t),Ea(t))}z.hb=function(){if(this.g){var t=fr(this.g),e=this.g.fa();this.C<e.length&&(bh(this),rC(this,t,e),this.i&&t!=4&&bl(this))}};function gO(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Pc:(n=Number(e.substring(n,r)),isNaN(n)?Ip:(r+=1,r+n>e.length?Pc:(e=e.substr(r,n),t.C=r+n,e)))}z.cancel=function(){this.I=!0,xi(this)};function bl(t){t.V=Date.now()+t.O,iC(t,t.O)}function iC(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Dl(Mt(t.gb,t),e)}function bh(t){t.B&&(ne.clearTimeout(t.B),t.B=null)}z.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(fO(this.j,this.A),this.K!=2&&(nl(),Bt(17)),xi(this),this.o=2,Ea(this)):iC(this,this.V-t)};function Ea(t){t.l.G==0||t.I||kC(t.l,t)}function xi(t){bh(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Ig(t.T),KS(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Np(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Rp(n.h,t))){if(!t.J&&Rp(n.h,t)&&n.G==3){try{var r=n.Fa.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Mc(n),Fh(n);else break e;Mg(n),Bt(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=Dl(Mt(n.cb,n),6e3));if(1>=dC(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Pi(n,11)}else if((t.J||n.g==t)&&Mc(n),!Dc(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const c=u[3];c!=null&&(n.ma=c,n.j.info("VER="+n.ma));const h=u[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const m=t.g;if(m){const v=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var s=r.h;s.g||v.indexOf("spdy")==-1&&v.indexOf("quic")==-1&&v.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Dg(s,s.h),s.h=null))}if(r.D){const _=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(r.za=_,Ue(r.F,r.D,_))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var o=t;if(r.sa=AC(r,r.H?r.ka:null,r.V),o.J){fC(r.h,o);var a=o,l=r.J;l&&a.setTimeout(l),a.B&&(bh(a),bl(a)),r.g=o}else TC(r);0<n.i.length&&$h(n)}else u[0]!="stop"&&u[0]!="close"||Pi(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Pi(n,7):Og(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}nl(4)}catch{}}function yO(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Th(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function vO(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Th(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function sC(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Th(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=vO(t),r=yO(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var oC=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function _O(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function $i(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof $i){this.h=e!==void 0?e:t.h,bc(this,t.j),this.s=t.s,this.g=t.g,Oc(this,t.m),this.l=t.l,e=t.i;var n=new rl;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),G_(this,n),this.o=t.o}else t&&(n=String(t).match(oC))?(this.h=!!e,bc(this,n[1]||"",!0),this.s=aa(n[2]||""),this.g=aa(n[3]||"",!0),Oc(this,n[4]),this.l=aa(n[5]||"",!0),G_(this,n[6]||"",!0),this.o=aa(n[7]||"")):(this.h=!!e,this.i=new rl(null,this.h))}$i.prototype.toString=function(){var t=[],e=this.j;e&&t.push(la(e,K_,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(la(e,K_,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(la(n,n.charAt(0)=="/"?SO:EO,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",la(n,TO)),t.join("")};function Cr(t){return new $i(t)}function bc(t,e,n){t.j=n?aa(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Oc(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function G_(t,e,n){e instanceof rl?(t.i=e,IO(t.i,t.h)):(n||(e=la(e,CO)),t.i=new rl(e,t.h))}function Ue(t,e,n){t.i.set(e,n)}function Oh(t){return Ue(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function aa(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function la(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,wO),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function wO(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var K_=/[#\/\?@]/g,EO=/[#\?:]/g,SO=/[#\?]/g,CO=/[#\?@]/g,TO=/#/g;function rl(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function vi(t){t.g||(t.g=new Map,t.h=0,t.i&&_O(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}z=rl.prototype;z.add=function(t,e){vi(this),this.i=null,t=Io(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function aC(t,e){vi(t),e=Io(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function lC(t,e){return vi(t),e=Io(t,e),t.g.has(e)}z.forEach=function(t,e){vi(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};z.oa=function(){vi(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};z.W=function(t){vi(this);let e=[];if(typeof t=="string")lC(this,t)&&(e=e.concat(this.g.get(Io(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};z.set=function(t,e){return vi(this),this.i=null,t=Io(this,t),lC(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};z.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function uC(t,e,n){aC(t,e),0<n.length&&(t.i=null,t.g.set(Io(t,e),yg(n)),t.h+=n.length)}z.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function Io(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function IO(t,e){e&&!t.j&&(vi(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(aC(this,r),uC(this,i,n))},t)),t.j=e}var kO=class{constructor(e,n){this.h=e,this.g=n}};function cC(t){this.l=t||NO,ne.PerformanceNavigationTiming?(t=ne.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(ne.g&&ne.g.Ga&&ne.g.Ga()&&ne.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var NO=10;function hC(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function dC(t){return t.h?1:t.g?t.g.size:0}function Rp(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Dg(t,e){t.g?t.g.add(e):t.h=e}function fC(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}cC.prototype.cancel=function(){if(this.i=pC(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function pC(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return yg(t.i)}function xg(){}xg.prototype.stringify=function(t){return ne.JSON.stringify(t,void 0)};xg.prototype.parse=function(t){return ne.JSON.parse(t,void 0)};function RO(){this.g=new xg}function AO(t,e,n){const r=n||"";try{sC(t,function(i,s){let o=i;Rl(i)&&(o=Tg(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function DO(t,e){const n=new Ah;if(ne.Image){const r=new Image;r.onload=yu(_u,n,r,"TestLoadImage: loaded",!0,e),r.onerror=yu(_u,n,r,"TestLoadImage: error",!1,e),r.onabort=yu(_u,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=yu(_u,n,r,"TestLoadImage: timeout",!1,e),ne.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function _u(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Ol(t){this.l=t.ac||null,this.j=t.jb||!1}Et(Ol,Ng);Ol.prototype.g=function(){return new Mh(this.l,this.j)};Ol.prototype.i=function(t){return function(){return t}}({});function Mh(t,e){pt.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Pg,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Et(Mh,pt);var Pg=0;z=Mh.prototype;z.open=function(t,e){if(this.readyState!=Pg)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,il(this)};z.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||ne).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};z.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ml(this)),this.readyState=Pg};z.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,il(this)),this.g&&(this.readyState=3,il(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof ne.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;mC(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function mC(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}z.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ml(this):il(this),this.readyState==3&&mC(this)}};z.Va=function(t){this.g&&(this.response=this.responseText=t,Ml(this))};z.Ua=function(t){this.g&&(this.response=t,Ml(this))};z.ga=function(){this.g&&Ml(this)};function Ml(t){t.readyState=4,t.l=null,t.j=null,t.A=null,il(t)}z.setRequestHeader=function(t,e){this.v.append(t,e)};z.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};z.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function il(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Mh.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var xO=ne.JSON.parse;function We(t){pt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=gC,this.K=this.L=!1}Et(We,pt);var gC="",PO=/^https?$/i,bO=["POST","PUT"];z=We.prototype;z.Ka=function(t){this.L=t};z.da=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Tp.g(),this.C=this.u?q_(this.u):q_(Tp),this.g.onreadystatechange=Mt(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){Q_(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=ne.FormData&&t instanceof ne.FormData,!(0<=PS(bO,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{_C(this),0<this.B&&((this.K=OO(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Mt(this.qa,this)):this.A=kg(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Q_(this,s)}};function OO(t){return so&&Xb()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}z.qa=function(){typeof gg<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,_t(this,"timeout"),this.abort(8))};function Q_(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,yC(t),Lh(t)}function yC(t){t.D||(t.D=!0,_t(t,"complete"),_t(t,"error"))}z.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,_t(this,"complete"),_t(this,"abort"),Lh(this))};z.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Lh(this,!0)),We.X.M.call(this)};z.Ha=function(){this.s||(this.F||this.v||this.l?vC(this):this.fb())};z.fb=function(){vC(this)};function vC(t){if(t.h&&typeof gg<"u"&&(!t.C[1]||fr(t)!=4||t.aa()!=2)){if(t.v&&fr(t)==4)kg(t.Ha,0,t);else if(_t(t,"readystatechange"),fr(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(oC)[1]||null;if(!i&&ne.self&&ne.self.location){var s=ne.self.location.protocol;i=s.substr(0,s.length-1)}r=!PO.test(i?i.toLowerCase():"")}n=r}if(n)_t(t,"complete"),_t(t,"success");else{t.m=6;try{var o=2<fr(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",yC(t)}}finally{Lh(t)}}}}function Lh(t,e){if(t.g){_C(t);const n=t.g,r=t.C[0]?Ac:null;t.g=null,t.C=null,e||_t(t,"ready");try{n.onreadystatechange=r}catch{}}}function _C(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(ne.clearTimeout(t.A),t.A=null)}function fr(t){return t.g?t.g.readyState:0}z.aa=function(){try{return 2<fr(this)?this.g.status:-1}catch{return-1}};z.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};z.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),xO(e)}};function Y_(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case gC:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}z.Ea=function(){return this.m};z.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function wC(t){let e="";return _g(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function bg(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=wC(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ue(t,e,n))}function Qo(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function EC(t){this.Ca=0,this.i=[],this.j=new Ah,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Qo("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Qo("baseRetryDelayMs",5e3,t),this.bb=Qo("retryDelaySeedMs",1e4,t),this.$a=Qo("forwardChannelMaxRetries",2,t),this.ta=Qo("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new cC(t&&t.concurrentRequestLimit),this.Fa=new RO,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}z=EC.prototype;z.ma=8;z.G=1;function Og(t){if(SC(t),t.G==3){var e=t.U++,n=Cr(t.F);Ue(n,"SID",t.I),Ue(n,"RID",e),Ue(n,"TYPE","terminate"),Ll(t,n),e=new Pl(t,t.j,e,void 0),e.K=2,e.v=Oh(Cr(n)),n=!1,ne.navigator&&ne.navigator.sendBeacon&&(n=ne.navigator.sendBeacon(e.v.toString(),"")),!n&&ne.Image&&(new Image().src=e.v,n=!0),n||(e.g=DC(e.l,null),e.g.da(e.v)),e.F=Date.now(),bl(e)}RC(t)}function Fh(t){t.g&&(Lg(t),t.g.cancel(),t.g=null)}function SC(t){Fh(t),t.u&&(ne.clearTimeout(t.u),t.u=null),Mc(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&ne.clearTimeout(t.m),t.m=null)}function $h(t){hC(t.h)||t.m||(t.m=!0,WS(t.Ja,t),t.C=0)}function MO(t,e){return dC(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Dl(Mt(t.Ja,t,e),NC(t,t.C)),t.C++,!0)}z.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new Pl(this,this.j,t,void 0);let s=this.s;if(this.S&&(s?(s=LS(s),FS(s,this.S)):s=this.S),this.o!==null||this.N||(i.H=s,s=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=CC(this,i,e),n=Cr(this.F),Ue(n,"RID",t),Ue(n,"CVER",22),this.D&&Ue(n,"X-HTTP-Session-Id",this.D),Ll(this,n),s&&(this.N?e="headers="+encodeURIComponent(String(wC(s)))+"&"+e:this.o&&bg(n,this.o,s)),Dg(this.h,i),this.Ya&&Ue(n,"TYPE","init"),this.O?(Ue(n,"$req",e),Ue(n,"SID","null"),i.Z=!0,kp(i,n,null)):kp(i,n,e),this.G=2}}else this.G==3&&(t?X_(this,t):this.i.length==0||hC(this.h)||X_(this))};function X_(t,e){var n;e?n=e.m:n=t.U++;const r=Cr(t.F);Ue(r,"SID",t.I),Ue(r,"RID",n),Ue(r,"AID",t.T),Ll(t,r),t.o&&t.s&&bg(r,t.o,t.s),n=new Pl(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=CC(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Dg(t.h,n),kp(n,r,e)}function Ll(t,e){t.ia&&_g(t.ia,function(n,r){Ue(e,r,n)}),t.l&&sC({},function(n,r){Ue(e,r,n)})}function CC(t,e,n){n=Math.min(t.i.length,n);var r=t.l?Mt(t.l.Ra,t.l,t):null;e:{var i=t.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].h;const c=i[l].g;if(u-=s,0>u)s=Math.max(0,i[l].h-100),a=!1;else try{AO(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,r}function TC(t){t.g||t.u||(t.Z=1,WS(t.Ia,t),t.A=0)}function Mg(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Dl(Mt(t.Ia,t),NC(t,t.A)),t.A++,!0)}z.Ia=function(){if(this.u=null,IC(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Dl(Mt(this.eb,this),t)}};z.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Bt(10),Fh(this),IC(this))};function Lg(t){t.B!=null&&(ne.clearTimeout(t.B),t.B=null)}function IC(t){t.g=new Pl(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Cr(t.sa);Ue(e,"RID","rpc"),Ue(e,"SID",t.I),Ue(e,"CI",t.L?"0":"1"),Ue(e,"AID",t.T),Ue(e,"TYPE","xmlhttp"),Ll(t,e),t.o&&t.s&&bg(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Oh(Cr(e)),n.s=null,n.P=!0,tC(n,t)}z.cb=function(){this.v!=null&&(this.v=null,Fh(this),Mg(this),Bt(19))};function Mc(t){t.v!=null&&(ne.clearTimeout(t.v),t.v=null)}function kC(t,e){var n=null;if(t.g==e){Mc(t),Lg(t),t.g=null;var r=2}else if(Rp(t.h,e))n=e.D,fC(t.h,e),r=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=Dh(),_t(r,new XS(r,n)),$h(t)}else TC(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(r==1&&MO(t,e)||r==2&&Mg(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:Pi(t,5);break;case 4:Pi(t,10);break;case 3:Pi(t,6);break;default:Pi(t,2)}}}function NC(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Pi(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=Mt(t.kb,t);n||(n=new $i("//www.google.com/images/cleardot.gif"),ne.location&&ne.location.protocol=="http"||bc(n,"https"),Oh(n)),DO(n.toString(),r)}else Bt(2);t.G=0,t.l&&t.l.va(e),RC(t),SC(t)}z.kb=function(t){t?(this.j.info("Successfully pinged google.com"),Bt(2)):(this.j.info("Failed to ping google.com"),Bt(1))};function RC(t){if(t.G=0,t.la=[],t.l){const e=pC(t.h);(e.length!=0||t.i.length!=0)&&(V_(t.la,e),V_(t.la,t.i),t.h.i.length=0,yg(t.i),t.i.length=0),t.l.ua()}}function AC(t,e,n){var r=n instanceof $i?Cr(n):new $i(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),Oc(r,r.m);else{var i=ne.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new $i(null,void 0);r&&bc(s,r),e&&(s.g=e),i&&Oc(s,i),n&&(s.l=n),r=s}return n=t.D,e=t.za,n&&e&&Ue(r,n,e),Ue(r,"VER",t.ma),Ll(t,r),r}function DC(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new We(new Ol({jb:!0})):new We(t.ra),e.Ka(t.H),e}function xC(){}z=xC.prototype;z.xa=function(){};z.wa=function(){};z.va=function(){};z.ua=function(){};z.Ra=function(){};function Lc(){if(so&&!(10<=Number(Jb)))throw Error("Environmental error: no available transport.")}Lc.prototype.g=function(t,e){return new hn(t,e)};function hn(t,e){pt.call(this),this.g=new EC(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Dc(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Dc(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ko(this)}Et(hn,pt);hn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;Bt(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=AC(t,null,t.V),$h(t)};hn.prototype.close=function(){Og(this.g)};hn.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Tg(t),t=n);e.i.push(new kO(e.ab++,t)),e.G==3&&$h(e)};hn.prototype.M=function(){this.g.l=null,delete this.j,Og(this.g),delete this.g,hn.X.M.call(this)};function PC(t){Rg.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Et(PC,Rg);function bC(){Ag.call(this),this.status=1}Et(bC,Ag);function ko(t){this.g=t}Et(ko,xC);ko.prototype.xa=function(){_t(this.g,"a")};ko.prototype.wa=function(t){_t(this.g,new PC(t))};ko.prototype.va=function(t){_t(this.g,new bC)};ko.prototype.ua=function(){_t(this.g,"b")};Lc.prototype.createWebChannel=Lc.prototype.g;hn.prototype.send=hn.prototype.u;hn.prototype.open=hn.prototype.m;hn.prototype.close=hn.prototype.close;xh.NO_ERROR=0;xh.TIMEOUT=8;xh.HTTP_ERROR=6;JS.COMPLETE="complete";ZS.EventType=xl;xl.OPEN="a";xl.CLOSE="b";xl.ERROR="c";xl.MESSAGE="d";pt.prototype.listen=pt.prototype.N;We.prototype.listenOnce=We.prototype.O;We.prototype.getLastError=We.prototype.Oa;We.prototype.getLastErrorCode=We.prototype.Ea;We.prototype.getStatus=We.prototype.aa;We.prototype.getResponseJson=We.prototype.Sa;We.prototype.getResponseText=We.prototype.fa;We.prototype.send=We.prototype.da;We.prototype.setWithCredentials=We.prototype.Ka;var LO=function(){return new Lc},FO=function(){return Dh()},Xd=xh,$O=JS,UO=os,J_={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},VO=Ol,wu=ZS,zO=We;const Z_="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Rt.UNAUTHENTICATED=new Rt(null),Rt.GOOGLE_CREDENTIALS=new Rt("google-credentials-uid"),Rt.FIRST_PARTY=new Rt("first-party-uid"),Rt.MOCK_USER=new Rt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let No="9.19.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ji=new _h("@firebase/firestore");function e0(){return Ji.logLevel}function j(t,...e){if(Ji.logLevel<=we.DEBUG){const n=e.map(Fg);Ji.debug(`Firestore (${No}): ${t}`,...n)}}function Tr(t,...e){if(Ji.logLevel<=we.ERROR){const n=e.map(Fg);Ji.error(`Firestore (${No}): ${t}`,...n)}}function Fc(t,...e){if(Ji.logLevel<=we.WARN){const n=e.map(Fg);Ji.warn(`Firestore (${No}): ${t}`,...n)}}function Fg(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ee(t="Unexpected state"){const e=`FIRESTORE (${No}) INTERNAL ASSERTION FAILED: `+t;throw Tr(e),new Error(e)}function Me(t,e){t||ee()}function se(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class F extends Ar{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OC{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class BO{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Rt.UNAUTHENTICATED))}shutdown(){}}class jO{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class WO{constructor(e){this.t=e,this.currentUser=Rt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new ni;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new ni,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{j("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(j("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new ni)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(j("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Me(typeof r.accessToken=="string"),new OC(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Me(e===null||typeof e=="string"),new Rt(e)}}class HO{constructor(e,n,r){this.h=e,this.l=n,this.m=r,this.type="FirstParty",this.user=Rt.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class qO{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new HO(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(Rt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class GO{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class KO{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const r=s=>{s.error!=null&&j("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.T;return this.T=s.token,j("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{j("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.I.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.I.getImmediate({optional:!0});s?i(s):j("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Me(typeof n.token=="string"),this.T=n.token,new GO(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QO(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MC{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=QO(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function Ce(t,e){return t<e?-1:t>e?1:0}function oo(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new F(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new F(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new F(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new F(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return rt.fromMillis(Date.now())}static fromDate(e){return rt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new rt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ce(this.nanoseconds,e.nanoseconds):Ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ie(e)}static min(){return new ie(new rt(0,0))}static max(){return new ie(new rt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(e,n,r){n===void 0?n=0:n>e.length&&ee(),r===void 0?r=e.length-n:r>e.length-n&&ee(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return sl.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof sl?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class be extends sl{construct(e,n,r){return new be(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new F(N.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new be(n)}static emptyPath(){return new be([])}}const YO=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class bt extends sl{construct(e,n,r){return new bt(e,n,r)}static isValidIdentifier(e){return YO.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),bt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new bt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new F(N.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new F(N.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new F(N.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new F(N.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new bt(n)}static emptyPath(){return new bt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(be.fromString(e))}static fromName(e){return new q(be.fromString(e).popFirst(5))}static empty(){return new q(be.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&be.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return be.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new be(e.slice()))}}function XO(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ie.fromTimestamp(r===1e9?new rt(n+1,0):new rt(n,r));return new ci(i,q.empty(),e)}function JO(t){return new ci(t.readTime,t.key,-1)}class ci{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new ci(ie.min(),q.empty(),-1)}static max(){return new ci(ie.max(),q.empty(),-1)}}function ZO(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=q.comparator(t.documentKey,e.documentKey),n!==0?n:Ce(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eM="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class tM{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fl(t){if(t.code!==N.FAILED_PRECONDITION||t.message!==eM)throw t;j("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ee(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new b((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof b?n:b.resolve(n)}catch(n){return b.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):b.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):b.reject(n)}static resolve(e){return new b((n,r)=>{n(e)})}static reject(e){return new b((n,r)=>{r(e)})}static waitFor(e){return new b((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=b.resolve(!1);for(const r of e)n=n.next(i=>i?b.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new b((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new b((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function $l(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $g{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ot(r),this.ut=r=>n.writeSequenceNumber(r))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}$g.ct=-1;function Uh(t){return t==null}function $c(t){return t===0&&1/t==-1/0}function nM(t){return typeof t=="number"&&Number.isInteger(t)&&!$c(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t0(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function as(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function LC(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e,n){this.comparator=e,this.root=n||gt.EMPTY}insert(e,n){return new st(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,gt.BLACK,null,null))}remove(e){return new st(this.comparator,this.root.remove(e,this.comparator).copy(null,null,gt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Eu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Eu(this.root,e,this.comparator,!1)}getReverseIterator(){return new Eu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Eu(this.root,e,this.comparator,!0)}}class Eu{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class gt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??gt.RED,this.left=i??gt.EMPTY,this.right=s??gt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new gt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return gt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return gt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,gt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,gt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ee();const e=this.left.check();if(e!==this.right.check())throw ee();return e+(this.isRed()?0:1)}}gt.EMPTY=null,gt.RED=!0,gt.BLACK=!1;gt.EMPTY=new class{constructor(){this.size=0}get key(){throw ee()}get value(){throw ee()}get color(){throw ee()}get left(){throw ee()}get right(){throw ee()}copy(t,e,n,r,i){return this}insert(t,e,n){return new gt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e){this.comparator=e,this.data=new st(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new n0(this.data.getIterator())}getIteratorFrom(e){return new n0(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof it)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new it(this.comparator);return n.data=e,n}}class n0{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e){this.fields=e,e.sort(bt.comparator)}static empty(){return new on([])}unionWith(e){let n=new it(bt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new on(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return oo(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rM extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new rM("Invalid base64 string: "+i):i}}(e);return new Ut(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new Ut(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ut.EMPTY_BYTE_STRING=new Ut("");const iM=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function hi(t){if(Me(!!t),typeof t=="string"){let e=0;const n=iM.exec(t);if(Me(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ke(t.seconds),nanos:Ke(t.nanos)}}function Ke(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ao(t){return typeof t=="string"?Ut.fromBase64String(t):Ut.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FC(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function $C(t){const e=t.mapValue.fields.__previous_value__;return FC(e)?$C(e):e}function ol(t){const e=hi(t.mapValue.fields.__local_write_time__.timestampValue);return new rt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sM{constructor(e,n,r,i,s,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class al{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new al("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof al&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Su={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Zi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?FC(t)?4:oM(t)?9007199254740991:10:ee()}function Zn(t,e){if(t===e)return!0;const n=Zi(t);if(n!==Zi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ol(t).isEqual(ol(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=hi(r.timestampValue),o=hi(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return ao(r.bytesValue).isEqual(ao(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return Ke(r.geoPointValue.latitude)===Ke(i.geoPointValue.latitude)&&Ke(r.geoPointValue.longitude)===Ke(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Ke(r.integerValue)===Ke(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=Ke(r.doubleValue),o=Ke(i.doubleValue);return s===o?$c(s)===$c(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return oo(t.arrayValue.values||[],e.arrayValue.values||[],Zn);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(t0(s)!==t0(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!Zn(s[a],o[a])))return!1;return!0}(t,e);default:return ee()}}function ll(t,e){return(t.values||[]).find(n=>Zn(n,e))!==void 0}function lo(t,e){if(t===e)return 0;const n=Zi(t),r=Zi(e);if(n!==r)return Ce(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ce(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=Ke(i.integerValue||i.doubleValue),a=Ke(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return r0(t.timestampValue,e.timestampValue);case 4:return r0(ol(t),ol(e));case 5:return Ce(t.stringValue,e.stringValue);case 6:return function(i,s){const o=ao(i),a=ao(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=Ce(o[l],a[l]);if(u!==0)return u}return Ce(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=Ce(Ke(i.latitude),Ke(s.latitude));return o!==0?o:Ce(Ke(i.longitude),Ke(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=lo(o[l],a[l]);if(u)return u}return Ce(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===Su.mapValue&&s===Su.mapValue)return 0;if(i===Su.mapValue)return 1;if(s===Su.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const h=Ce(a[c],u[c]);if(h!==0)return h;const d=lo(o[a[c]],l[u[c]]);if(d!==0)return d}return Ce(a.length,u.length)}(t.mapValue,e.mapValue);default:throw ee()}}function r0(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ce(t,e);const n=hi(t),r=hi(e),i=Ce(n.seconds,r.seconds);return i!==0?i:Ce(n.nanos,r.nanos)}function uo(t){return Ap(t)}function Ap(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=hi(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?ao(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,q.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=Ap(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${Ap(r.fields[a])}`;return s+"}"}(t.mapValue):ee();var e,n}function i0(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Dp(t){return!!t&&"integerValue"in t}function Ug(t){return!!t&&"arrayValue"in t}function s0(t){return!!t&&"nullValue"in t}function o0(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Wu(t){return!!t&&"mapValue"in t}function Sa(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return as(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Sa(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Sa(t.arrayValue.values[n]);return e}return Object.assign({},t)}function oM(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e){this.value=e}static empty(){return new Gt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Wu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Sa(n)}setAll(e){let n=bt.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Sa(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Wu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Zn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Wu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){as(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Gt(Sa(this.value))}}function UC(t){const e=[];return as(t.fields,(n,r)=>{const i=new bt([n]);if(Wu(r)){const s=UC(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new on(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Dt(e,0,ie.min(),ie.min(),ie.min(),Gt.empty(),0)}static newFoundDocument(e,n,r,i){return new Dt(e,1,n,ie.min(),r,i,0)}static newNoDocument(e,n){return new Dt(e,2,n,ie.min(),ie.min(),Gt.empty(),0)}static newUnknownDocument(e,n){return new Dt(e,3,n,ie.min(),ie.min(),Gt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ie.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Gt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Gt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ie.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Dt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Dt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(e,n){this.position=e,this.inclusive=n}}function a0(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=q.comparator(q.fromName(o.referenceValue),n.key):r=lo(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function l0(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Zn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca{constructor(e,n="asc"){this.field=e,this.dir=n}}function aM(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VC{}class Xe extends VC{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new uM(e,n,r):n==="array-contains"?new dM(e,r):n==="in"?new fM(e,r):n==="not-in"?new pM(e,r):n==="array-contains-any"?new mM(e,r):new Xe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new cM(e,r):new hM(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(lo(n,this.value)):n!==null&&Zi(this.value)===Zi(n)&&this.matchesComparison(lo(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ee()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Un extends VC{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new Un(e,n)}matches(e){return zC(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function zC(t){return t.op==="and"}function BC(t){return lM(t)&&zC(t)}function lM(t){for(const e of t.filters)if(e instanceof Un)return!1;return!0}function xp(t){if(t instanceof Xe)return t.field.canonicalString()+t.op.toString()+uo(t.value);if(BC(t))return t.filters.map(e=>xp(e)).join(",");{const e=t.filters.map(n=>xp(n)).join(",");return`${t.op}(${e})`}}function jC(t,e){return t instanceof Xe?function(n,r){return r instanceof Xe&&n.op===r.op&&n.field.isEqual(r.field)&&Zn(n.value,r.value)}(t,e):t instanceof Un?function(n,r){return r instanceof Un&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,s,o)=>i&&jC(s,r.filters[o]),!0):!1}(t,e):void ee()}function WC(t){return t instanceof Xe?function(e){return`${e.field.canonicalString()} ${e.op} ${uo(e.value)}`}(t):t instanceof Un?function(e){return e.op.toString()+" {"+e.getFilters().map(WC).join(" ,")+"}"}(t):"Filter"}class uM extends Xe{constructor(e,n,r){super(e,n,r),this.key=q.fromName(r.referenceValue)}matches(e){const n=q.comparator(e.key,this.key);return this.matchesComparison(n)}}class cM extends Xe{constructor(e,n){super(e,"in",n),this.keys=HC("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class hM extends Xe{constructor(e,n){super(e,"not-in",n),this.keys=HC("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function HC(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>q.fromName(r.referenceValue))}class dM extends Xe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Ug(n)&&ll(n.arrayValue,this.value)}}class fM extends Xe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ll(this.value.arrayValue,n)}}class pM extends Xe{constructor(e,n){super(e,"not-in",n)}matches(e){if(ll(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ll(this.value.arrayValue,n)}}class mM extends Xe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Ug(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ll(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gM{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ft=null}}function u0(t,e=null,n=[],r=[],i=null,s=null,o=null){return new gM(t,e,n,r,i,s,o)}function Vg(t){const e=se(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>xp(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Uh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>uo(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>uo(r)).join(",")),e.ft=n}return e.ft}function zg(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!aM(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!jC(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!l0(t.startAt,e.startAt)&&l0(t.endAt,e.endAt)}function Pp(t){return q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.dt=null,this.wt=null,this.startAt,this.endAt}}function yM(t,e,n,r,i,s,o,a){return new Ul(t,e,n,r,i,s,o,a)}function qC(t){return new Ul(t)}function c0(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function GC(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Bg(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function KC(t){return t.collectionGroup!==null}function qs(t){const e=se(t);if(e.dt===null){e.dt=[];const n=Bg(e),r=GC(e);if(n!==null&&r===null)n.isKeyField()||e.dt.push(new Ca(n)),e.dt.push(new Ca(bt.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.dt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new Ca(bt.keyField(),s))}}}return e.dt}function Ir(t){const e=se(t);if(!e.wt)if(e.limitType==="F")e.wt=u0(e.path,e.collectionGroup,qs(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of qs(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new Ca(s.field,o))}const r=e.endAt?new Uc(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Uc(e.startAt.position,e.startAt.inclusive):null;e.wt=u0(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.wt}function bp(t,e){e.getFirstInequalityField(),Bg(t);const n=t.filters.concat([e]);return new Ul(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Op(t,e,n){return new Ul(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Vh(t,e){return zg(Ir(t),Ir(e))&&t.limitType===e.limitType}function QC(t){return`${Vg(Ir(t))}|lt:${t.limitType}`}function Mp(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>WC(r)).join(", ")}]`),Uh(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>uo(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>uo(r)).join(",")),`Target(${n})`}(Ir(t))}; limitType=${t.limitType})`}function zh(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):q.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of qs(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=a0(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,qs(n),r)||n.endAt&&!function(i,s,o){const a=a0(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,qs(n),r))}(t,e)}function vM(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function YC(t){return(e,n)=>{let r=!1;for(const i of qs(t)){const s=_M(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function _M(t,e,n){const r=t.field.isKeyField()?q.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?lo(a,l):ee()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ee()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){as(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return LC(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wM=new st(q.comparator);function kr(){return wM}const XC=new st(q.comparator);function ua(...t){let e=XC;for(const n of t)e=e.insert(n.key,n);return e}function JC(t){let e=XC;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function bi(){return Ta()}function ZC(){return Ta()}function Ta(){return new Ro(t=>t.toString(),(t,e)=>t.isEqual(e))}const EM=new st(q.comparator),SM=new it(q.comparator);function ue(...t){let e=SM;for(const n of t)e=e.add(n);return e}const CM=new it(Ce);function eT(){return CM}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tT(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:$c(e)?"-0":e}}function nT(t){return{integerValue:""+t}}function TM(t,e){return nM(e)?nT(e):tT(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bh{constructor(){this._=void 0}}function IM(t,e,n){return t instanceof Vc?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof ul?iT(t,e):t instanceof cl?sT(t,e):function(r,i){const s=rT(r,i),o=h0(s)+h0(r._t);return Dp(s)&&Dp(r._t)?nT(o):tT(r.serializer,o)}(t,e)}function kM(t,e,n){return t instanceof ul?iT(t,e):t instanceof cl?sT(t,e):n}function rT(t,e){return t instanceof zc?Dp(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class Vc extends Bh{}class ul extends Bh{constructor(e){super(),this.elements=e}}function iT(t,e){const n=oT(e);for(const r of t.elements)n.some(i=>Zn(i,r))||n.push(r);return{arrayValue:{values:n}}}class cl extends Bh{constructor(e){super(),this.elements=e}}function sT(t,e){let n=oT(e);for(const r of t.elements)n=n.filter(i=>!Zn(i,r));return{arrayValue:{values:n}}}class zc extends Bh{constructor(e,n){super(),this.serializer=e,this._t=n}}function h0(t){return Ke(t.integerValue||t.doubleValue)}function oT(t){return Ug(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function NM(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof ul&&r instanceof ul||n instanceof cl&&r instanceof cl?oo(n.elements,r.elements,Zn):n instanceof zc&&r instanceof zc?Zn(n._t,r._t):n instanceof Vc&&r instanceof Vc}(t.transform,e.transform)}class RM{constructor(e,n){this.version=e,this.transformResults=n}}class Mn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Mn}static exists(e){return new Mn(void 0,e)}static updateTime(e){return new Mn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Hu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class jh{}function aT(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new jg(t.key,Mn.none()):new Vl(t.key,t.data,Mn.none());{const n=t.data,r=Gt.empty();let i=new it(bt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new _i(t.key,r,new on(i.toArray()),Mn.none())}}function AM(t,e,n){t instanceof Vl?function(r,i,s){const o=r.value.clone(),a=f0(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof _i?function(r,i,s){if(!Hu(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=f0(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(lT(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function Ia(t,e,n,r){return t instanceof Vl?function(i,s,o,a){if(!Hu(i.precondition,s))return o;const l=i.value.clone(),u=p0(i.fieldTransforms,a,s);return l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof _i?function(i,s,o,a){if(!Hu(i.precondition,s))return o;const l=p0(i.fieldTransforms,a,s),u=s.data;return u.setAll(lT(i)),u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return Hu(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function DM(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=rT(r.transform,i||null);s!=null&&(n===null&&(n=Gt.empty()),n.set(r.field,s))}return n||null}function d0(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&oo(n,r,(i,s)=>NM(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Vl extends jh{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class _i extends jh{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function lT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function f0(t,e,n){const r=new Map;Me(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,kM(o,a,n[i]))}return r}function p0(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,IM(s,o,e))}return r}class jg extends jh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class xM extends jh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PM{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&AM(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ia(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ia(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=ZC();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=aT(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(ie.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ue())}isEqual(e){return this.batchId===e.batchId&&oo(this.mutations,e.mutations,(n,r)=>d0(n,r))&&oo(this.baseMutations,e.baseMutations,(n,r)=>d0(n,r))}}class Wg{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Me(e.mutations.length===r.length);let i=EM;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Wg(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bM{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OM{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var qe,de;function MM(t){switch(t){default:return ee();case N.CANCELLED:case N.UNKNOWN:case N.DEADLINE_EXCEEDED:case N.RESOURCE_EXHAUSTED:case N.INTERNAL:case N.UNAVAILABLE:case N.UNAUTHENTICATED:return!1;case N.INVALID_ARGUMENT:case N.NOT_FOUND:case N.ALREADY_EXISTS:case N.PERMISSION_DENIED:case N.FAILED_PRECONDITION:case N.ABORTED:case N.OUT_OF_RANGE:case N.UNIMPLEMENTED:case N.DATA_LOSS:return!0}}function uT(t){if(t===void 0)return Tr("GRPC error has no .code"),N.UNKNOWN;switch(t){case qe.OK:return N.OK;case qe.CANCELLED:return N.CANCELLED;case qe.UNKNOWN:return N.UNKNOWN;case qe.DEADLINE_EXCEEDED:return N.DEADLINE_EXCEEDED;case qe.RESOURCE_EXHAUSTED:return N.RESOURCE_EXHAUSTED;case qe.INTERNAL:return N.INTERNAL;case qe.UNAVAILABLE:return N.UNAVAILABLE;case qe.UNAUTHENTICATED:return N.UNAUTHENTICATED;case qe.INVALID_ARGUMENT:return N.INVALID_ARGUMENT;case qe.NOT_FOUND:return N.NOT_FOUND;case qe.ALREADY_EXISTS:return N.ALREADY_EXISTS;case qe.PERMISSION_DENIED:return N.PERMISSION_DENIED;case qe.FAILED_PRECONDITION:return N.FAILED_PRECONDITION;case qe.ABORTED:return N.ABORTED;case qe.OUT_OF_RANGE:return N.OUT_OF_RANGE;case qe.UNIMPLEMENTED:return N.UNIMPLEMENTED;case qe.DATA_LOSS:return N.DATA_LOSS;default:return ee()}}(de=qe||(qe={}))[de.OK=0]="OK",de[de.CANCELLED=1]="CANCELLED",de[de.UNKNOWN=2]="UNKNOWN",de[de.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",de[de.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",de[de.NOT_FOUND=5]="NOT_FOUND",de[de.ALREADY_EXISTS=6]="ALREADY_EXISTS",de[de.PERMISSION_DENIED=7]="PERMISSION_DENIED",de[de.UNAUTHENTICATED=16]="UNAUTHENTICATED",de[de.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",de[de.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",de[de.ABORTED=10]="ABORTED",de[de.OUT_OF_RANGE=11]="OUT_OF_RANGE",de[de.UNIMPLEMENTED=12]="UNIMPLEMENTED",de[de.INTERNAL=13]="INTERNAL",de[de.UNAVAILABLE=14]="UNAVAILABLE",de[de.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hg{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Cu}static getOrCreateInstance(){return Cu===null&&(Cu=new Hg),Cu}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let Cu=null;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,zl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Wh(ie.min(),i,eT(),kr(),ue())}}class zl{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new zl(r,n,ue(),ue(),ue())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu{constructor(e,n,r,i){this.It=e,this.removedTargetIds=n,this.key=r,this.Tt=i}}class cT{constructor(e,n){this.targetId=e,this.Et=n}}class hT{constructor(e,n,r=Ut.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class m0{constructor(){this.At=0,this.Rt=y0(),this.vt=Ut.EMPTY_BYTE_STRING,this.bt=!1,this.Pt=!0}get current(){return this.bt}get resumeToken(){return this.vt}get Vt(){return this.At!==0}get St(){return this.Pt}Dt(e){e.approximateByteSize()>0&&(this.Pt=!0,this.vt=e)}Ct(){let e=ue(),n=ue(),r=ue();return this.Rt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:ee()}}),new zl(this.vt,this.bt,e,n,r)}xt(){this.Pt=!1,this.Rt=y0()}Nt(e,n){this.Pt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.Pt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}$t(){this.At-=1}Mt(){this.Pt=!0,this.bt=!0}}class LM{constructor(e){this.Ft=e,this.Bt=new Map,this.Lt=kr(),this.qt=g0(),this.Ut=new it(Ce)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}zt(e){this.forEachTarget(e,n=>{const r=this.jt(n);switch(e.state){case 0:this.Wt(n)&&r.Dt(e.resumeToken);break;case 1:r.$t(),r.Vt||r.xt(),r.Dt(e.resumeToken);break;case 2:r.$t(),r.Vt||this.removeTarget(n);break;case 3:this.Wt(n)&&(r.Mt(),r.Dt(e.resumeToken));break;case 4:this.Wt(n)&&(this.Ht(n),r.Dt(e.resumeToken));break;default:ee()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((r,i)=>{this.Wt(i)&&n(i)})}Jt(e){var n;const r=e.targetId,i=e.Et.count,s=this.Yt(r);if(s){const o=s.target;if(Pp(o))if(i===0){const a=new q(o.path);this.Qt(r,a,Dt.newNoDocument(a,ie.min()))}else Me(i===1);else{const a=this.Zt(r);a!==i&&(this.Ht(r),this.Ut=this.Ut.add(r),(n=Hg.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch({localCacheCount:a,existenceFilterCount:e.Et.count}))}}}Xt(e){const n=new Map;this.Bt.forEach((s,o)=>{const a=this.Yt(o);if(a){if(s.current&&Pp(a.target)){const l=new q(a.target.path);this.Lt.get(l)!==null||this.te(o,l)||this.Qt(o,l,Dt.newNoDocument(l,e))}s.St&&(n.set(o,s.Ct()),s.xt())}});let r=ue();this.qt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Yt(l);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))}),this.Lt.forEach((s,o)=>o.setReadTime(e));const i=new Wh(e,n,this.Ut,this.Lt,r);return this.Lt=kr(),this.qt=g0(),this.Ut=new it(Ce),i}Gt(e,n){if(!this.Wt(e))return;const r=this.te(e,n.key)?2:0;this.jt(e).Nt(n.key,r),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,r){if(!this.Wt(e))return;const i=this.jt(e);this.te(e,n)?i.Nt(n,1):i.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),r&&(this.Lt=this.Lt.insert(n,r))}removeTarget(e){this.Bt.delete(e)}Zt(e){const n=this.jt(e).Ct();return this.Ft.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.jt(e).Ot()}jt(e){let n=this.Bt.get(e);return n||(n=new m0,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new it(Ce),this.qt=this.qt.insert(e,n)),n}Wt(e){const n=this.Yt(e)!==null;return n||j("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.Ft.ne(e)}Ht(e){this.Bt.set(e,new m0),this.Ft.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.Ft.getRemoteKeysForTarget(e).has(n)}}function g0(){return new st(q.comparator)}function y0(){return new st(q.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FM=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),$M=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),UM=(()=>({and:"AND",or:"OR"}))();class VM{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Bc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function dT(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function zM(t,e){return Bc(t,e.toTimestamp())}function Jn(t){return Me(!!t),ie.fromTimestamp(function(e){const n=hi(e);return new rt(n.seconds,n.nanos)}(t))}function qg(t,e){return function(n){return new be(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function fT(t){const e=be.fromString(t);return Me(yT(e)),e}function Lp(t,e){return qg(t.databaseId,e.path)}function Jd(t,e){const n=fT(e);if(n.get(1)!==t.databaseId.projectId)throw new F(N.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new F(N.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new q(pT(n))}function Fp(t,e){return qg(t.databaseId,e)}function BM(t){const e=fT(t);return e.length===4?be.emptyPath():pT(e)}function $p(t){return new be(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function pT(t){return Me(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function v0(t,e,n){return{name:Lp(t,e),fields:n.value.mapValue.fields}}function jM(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:ee()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.useProto3Json?(Me(u===void 0||typeof u=="string"),Ut.fromBase64String(u||"")):(Me(u===void 0||u instanceof Uint8Array),Ut.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?N.UNKNOWN:uT(l.code);return new F(u,l.message||"")}(o);n=new hT(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Jd(t,r.document.name),s=Jn(r.document.updateTime),o=r.document.createTime?Jn(r.document.createTime):ie.min(),a=new Gt({mapValue:{fields:r.document.fields}}),l=Dt.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new qu(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Jd(t,r.document),s=r.readTime?Jn(r.readTime):ie.min(),o=Dt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new qu([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Jd(t,r.document),s=r.removedTargetIds||[];n=new qu([],s,i,null)}else{if(!("filter"in e))return ee();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new OM(i),o=r.targetId;n=new cT(o,s)}}return n}function WM(t,e){let n;if(e instanceof Vl)n={update:v0(t,e.key,e.value)};else if(e instanceof jg)n={delete:Lp(t,e.key)};else if(e instanceof _i)n={update:v0(t,e.key,e.data),updateMask:ZM(e.fieldMask)};else{if(!(e instanceof xM))return ee();n={verify:Lp(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof Vc)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof ul)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof cl)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof zc)return{fieldPath:s.field.canonicalString(),increment:o._t};throw ee()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:zM(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ee()}(t,e.precondition)),n}function HM(t,e){return t&&t.length>0?(Me(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?Jn(r.updateTime):Jn(i);return s.isEqual(ie.min())&&(s=Jn(i)),new RM(s,r.transformResults||[])}(n,e))):[]}function qM(t,e){return{documents:[Fp(t,e.path)]}}function GM(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Fp(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Fp(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return gT(Un.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:ys(c.field),direction:YM(c.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(l,u){return l.useProto3Json||Uh(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function KM(t){let e=BM(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Me(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(c){const h=mT(c);return h instanceof Un&&BC(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new Ca(vs(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,Uh(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(c){const h=!!c.before,d=c.values||[];return new Uc(d,h)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const h=!c.before,d=c.values||[];return new Uc(d,h)}(n.endAt)),yM(e,i,o,s,a,"F",l,u)}function QM(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return ee()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function mT(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=vs(e.unaryFilter.field);return Xe.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=vs(e.unaryFilter.field);return Xe.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=vs(e.unaryFilter.field);return Xe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=vs(e.unaryFilter.field);return Xe.create(s,"!=",{nullValue:"NULL_VALUE"});default:return ee()}}(t):t.fieldFilter!==void 0?function(e){return Xe.create(vs(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ee()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Un.create(e.compositeFilter.filters.map(n=>mT(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return ee()}}(e.compositeFilter.op))}(t):ee()}function YM(t){return FM[t]}function XM(t){return $M[t]}function JM(t){return UM[t]}function ys(t){return{fieldPath:t.canonicalString()}}function vs(t){return bt.fromServerFormat(t.fieldPath)}function gT(t){return t instanceof Xe?function(e){if(e.op==="=="){if(o0(e.value))return{unaryFilter:{field:ys(e.field),op:"IS_NAN"}};if(s0(e.value))return{unaryFilter:{field:ys(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(o0(e.value))return{unaryFilter:{field:ys(e.field),op:"IS_NOT_NAN"}};if(s0(e.value))return{unaryFilter:{field:ys(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ys(e.field),op:XM(e.op),value:e.value}}}(t):t instanceof Un?function(e){const n=e.getFilters().map(r=>gT(r));return n.length===1?n[0]:{compositeFilter:{op:JM(e.op),filters:n}}}(t):ee()}function ZM(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function yT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(e,n,r,i,s=ie.min(),o=ie.min(),a=Ut.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Ui(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Ui(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Ui(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eL{constructor(e){this.se=e}}function tL(t){const e=KM({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Op(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nL{constructor(){this.He=new rL}addToCollectionParentIndex(e,n){return this.He.add(n),b.resolve()}getCollectionParents(e,n){return b.resolve(this.He.getEntries(n))}addFieldIndex(e,n){return b.resolve()}deleteFieldIndex(e,n){return b.resolve()}getDocumentsMatchingTarget(e,n){return b.resolve(null)}getIndexType(e,n){return b.resolve(0)}getFieldIndexes(e,n){return b.resolve([])}getNextCollectionGroupToUpdate(e){return b.resolve(null)}getMinOffset(e,n){return b.resolve(ci.min())}getMinOffsetFromCollectionGroup(e,n){return b.resolve(ci.min())}updateCollectionGroup(e,n,r){return b.resolve()}updateIndexEntries(e,n){return b.resolve()}}class rL{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new it(be.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new it(be.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(e){this.Rn=e}next(){return this.Rn+=2,this.Rn}static vn(){return new co(0)}static bn(){return new co(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iL{constructor(){this.changes=new Ro(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Dt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?b.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sL{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oL{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Ia(r.mutation,i,on.empty(),rt.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ue()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ue()){const i=bi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=ua();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=bi();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ue()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=kr();const o=Ta(),a=Ta();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof _i)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),Ia(c.mutation,u,c.mutation.getFieldMask(),rt.now())):o.set(u.key,on.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new sL(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Ta();let i=new st((o,a)=>o-a),s=ue();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||on.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||ue()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=ZC();c.forEach(d=>{if(!s.has(d)){const m=aT(n.get(d),r.get(d));m!==null&&h.set(d,m),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return b.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return q.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):KC(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):b.resolve(bi());let a=-1,l=s;return o.next(u=>b.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?b.resolve():this.remoteDocumentCache.getEntry(e,c).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,ue())).next(c=>({batchId:a,changes:JC(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new q(n)).next(r=>{let i=ua();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=ua();return this.indexManager.getCollectionParents(e,i).next(o=>b.forEach(o,a=>{const l=function(u,c){return new Ul(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,l)=>{const u=l.getKey();s.get(u)===null&&(s=s.insert(u,Dt.newInvalidDocument(u)))});let o=ua();return s.forEach((a,l)=>{const u=i.get(a);u!==void 0&&Ia(u.mutation,l,on.empty(),rt.now()),zh(n,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aL{constructor(e){this.serializer=e,this.Zn=new Map,this.Xn=new Map}getBundleMetadata(e,n){return b.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var r;return this.Zn.set(n.id,{id:(r=n).id,version:r.version,createTime:Jn(r.createTime)}),b.resolve()}getNamedQuery(e,n){return b.resolve(this.Xn.get(n))}saveNamedQuery(e,n){return this.Xn.set(n.name,function(r){return{name:r.name,query:tL(r.bundledQuery),readTime:Jn(r.readTime)}}(n)),b.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lL{constructor(){this.overlays=new st(q.comparator),this.ts=new Map}getOverlay(e,n){return b.resolve(this.overlays.get(n))}getOverlays(e,n){const r=bi();return b.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.re(e,n,s)}),b.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.ts.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.ts.delete(r)),b.resolve()}getOverlaysForCollection(e,n,r){const i=bi(),s=n.length+1,o=new q(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return b.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new st((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=bi(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=bi(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return b.resolve(a)}re(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.ts.get(i.largestBatchId).delete(r.key);this.ts.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new bM(n,r));let s=this.ts.get(n);s===void 0&&(s=ue(),this.ts.set(n,s)),this.ts.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gg{constructor(){this.es=new it(ut.ns),this.ss=new it(ut.rs)}isEmpty(){return this.es.isEmpty()}addReference(e,n){const r=new ut(e,n);this.es=this.es.add(r),this.ss=this.ss.add(r)}os(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.us(new ut(e,n))}cs(e,n){e.forEach(r=>this.removeReference(r,n))}hs(e){const n=new q(new be([])),r=new ut(n,e),i=new ut(n,e+1),s=[];return this.ss.forEachInRange([r,i],o=>{this.us(o),s.push(o.key)}),s}ls(){this.es.forEach(e=>this.us(e))}us(e){this.es=this.es.delete(e),this.ss=this.ss.delete(e)}fs(e){const n=new q(new be([])),r=new ut(n,e),i=new ut(n,e+1);let s=ue();return this.ss.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new ut(e,0),r=this.es.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ut{constructor(e,n){this.key=e,this.ds=n}static ns(e,n){return q.comparator(e.key,n.key)||Ce(e.ds,n.ds)}static rs(e,n){return Ce(e.ds,n.ds)||q.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uL{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this._s=new it(ut.ns)}checkEmpty(e){return b.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new PM(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this._s=this._s.add(new ut(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return b.resolve(o)}lookupMutationBatch(e,n){return b.resolve(this.gs(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ys(r),s=i<0?0:i;return b.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return b.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ut(n,0),i=new ut(n,Number.POSITIVE_INFINITY),s=[];return this._s.forEachInRange([r,i],o=>{const a=this.gs(o.ds);s.push(a)}),b.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new it(Ce);return n.forEach(i=>{const s=new ut(i,0),o=new ut(i,Number.POSITIVE_INFINITY);this._s.forEachInRange([s,o],a=>{r=r.add(a.ds)})}),b.resolve(this.ps(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;q.isDocumentKey(s)||(s=s.child(""));const o=new ut(new q(s),0);let a=new it(Ce);return this._s.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.ds)),!0)},o),b.resolve(this.ps(a))}ps(e){const n=[];return e.forEach(r=>{const i=this.gs(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Me(this.Is(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this._s;return b.forEach(n.mutations,i=>{const s=new ut(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this._s=r})}En(e){}containsKey(e,n){const r=new ut(n,0),i=this._s.firstAfterOrEqual(r);return b.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,b.resolve()}Is(e,n){return this.ys(e)}ys(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}gs(e){const n=this.ys(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cL{constructor(e){this.Ts=e,this.docs=new st(q.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Ts(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return b.resolve(r?r.document.mutableCopy():Dt.newInvalidDocument(n))}getEntries(e,n){let r=kr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Dt.newInvalidDocument(i))}),b.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=kr();const o=n.path,a=new q(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||ZO(JO(c),r)<=0||(i.has(c.key)||zh(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return b.resolve(s)}getAllFromCollectionGroup(e,n,r,i){ee()}Es(e,n){return b.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new hL(this)}getSize(e){return b.resolve(this.size)}}class hL extends iL{constructor(e){super(),this.Jn=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Jn.addEntry(e,i)):this.Jn.removeEntry(r)}),b.waitFor(n)}getFromCache(e,n){return this.Jn.getEntry(e,n)}getAllFromCache(e,n){return this.Jn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dL{constructor(e){this.persistence=e,this.As=new Ro(n=>Vg(n),zg),this.lastRemoteSnapshotVersion=ie.min(),this.highestTargetId=0,this.Rs=0,this.vs=new Gg,this.targetCount=0,this.bs=co.vn()}forEachTarget(e,n){return this.As.forEach((r,i)=>n(i)),b.resolve()}getLastRemoteSnapshotVersion(e){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return b.resolve(this.Rs)}allocateTargetId(e){return this.highestTargetId=this.bs.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Rs&&(this.Rs=n),b.resolve()}Sn(e){this.As.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.bs=new co(n),this.highestTargetId=n),e.sequenceNumber>this.Rs&&(this.Rs=e.sequenceNumber)}addTargetData(e,n){return this.Sn(n),this.targetCount+=1,b.resolve()}updateTargetData(e,n){return this.Sn(n),b.resolve()}removeTargetData(e,n){return this.As.delete(n.target),this.vs.hs(n.targetId),this.targetCount-=1,b.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.As.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.As.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),b.waitFor(s).next(()=>i)}getTargetCount(e){return b.resolve(this.targetCount)}getTargetData(e,n){const r=this.As.get(n)||null;return b.resolve(r)}addMatchingKeys(e,n,r){return this.vs.os(n,r),b.resolve()}removeMatchingKeys(e,n,r){this.vs.cs(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),b.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.vs.hs(n),b.resolve()}getMatchingKeysForTargetId(e,n){const r=this.vs.fs(n);return b.resolve(r)}containsKey(e,n){return b.resolve(this.vs.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fL{constructor(e,n){this.Ps={},this.overlays={},this.Vs=new $g(0),this.Ss=!1,this.Ss=!0,this.referenceDelegate=e(this),this.Ds=new dL(this),this.indexManager=new nL,this.remoteDocumentCache=function(r){return new cL(r)}(r=>this.referenceDelegate.Cs(r)),this.serializer=new eL(n),this.xs=new aL(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ss=!1,Promise.resolve()}get started(){return this.Ss}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new lL,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Ps[e.toKey()];return r||(r=new uL(n,this.referenceDelegate),this.Ps[e.toKey()]=r),r}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.xs}runTransaction(e,n,r){j("MemoryPersistence","Starting transaction:",e);const i=new pL(this.Vs.next());return this.referenceDelegate.Ns(),r(i).next(s=>this.referenceDelegate.ks(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Os(e,n){return b.or(Object.values(this.Ps).map(r=>()=>r.containsKey(e,n)))}}class pL extends tM{constructor(e){super(),this.currentSequenceNumber=e}}class Kg{constructor(e){this.persistence=e,this.$s=new Gg,this.Ms=null}static Fs(e){return new Kg(e)}get Bs(){if(this.Ms)return this.Ms;throw ee()}addReference(e,n,r){return this.$s.addReference(r,n),this.Bs.delete(r.toString()),b.resolve()}removeReference(e,n,r){return this.$s.removeReference(r,n),this.Bs.add(r.toString()),b.resolve()}markPotentiallyOrphaned(e,n){return this.Bs.add(n.toString()),b.resolve()}removeTarget(e,n){this.$s.hs(n.targetId).forEach(i=>this.Bs.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Bs.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ns(){this.Ms=new Set}ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.Bs,r=>{const i=q.fromPath(r);return this.Ls(e,i).next(s=>{s||n.removeEntry(i,ie.min())})}).next(()=>(this.Ms=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ls(e,n).next(r=>{r?this.Bs.delete(n.toString()):this.Bs.add(n.toString())})}Cs(e){return 0}Ls(e,n){return b.or([()=>b.resolve(this.$s.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Os(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Vi=r,this.Si=i}static Di(e,n){let r=ue(),i=ue();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Qg(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mL{constructor(){this.Ci=!1}initialize(e,n){this.xi=e,this.indexManager=n,this.Ci=!0}getDocumentsMatchingQuery(e,n,r,i){return this.Ni(e,n).next(s=>s||this.ki(e,n,i,r)).next(s=>s||this.Oi(e,n))}Ni(e,n){if(c0(n))return b.resolve(null);let r=Ir(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Op(n,null,"F"),r=Ir(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ue(...s);return this.xi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.$i(n,a);return this.Mi(n,u,o,l.readTime)?this.Ni(e,Op(n,null,"F")):this.Fi(e,u,n,l)}))})))}ki(e,n,r,i){return c0(n)||i.isEqual(ie.min())?this.Oi(e,n):this.xi.getDocuments(e,r).next(s=>{const o=this.$i(n,s);return this.Mi(n,o,r,i)?this.Oi(e,n):(e0()<=we.DEBUG&&j("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Mp(n)),this.Fi(e,o,n,XO(i,-1)))})}$i(e,n){let r=new it(YC(e));return n.forEach((i,s)=>{zh(e,s)&&(r=r.add(s))}),r}Mi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Oi(e,n){return e0()<=we.DEBUG&&j("QueryEngine","Using full collection scan to execute query:",Mp(n)),this.xi.getDocumentsMatchingQuery(e,n,ci.min())}Fi(e,n,r,i){return this.xi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gL{constructor(e,n,r,i){this.persistence=e,this.Bi=n,this.serializer=i,this.Li=new st(Ce),this.qi=new Ro(s=>Vg(s),zg),this.Ui=new Map,this.Ki=e.getRemoteDocumentCache(),this.Ds=e.getTargetCache(),this.xs=e.getBundleCache(),this.Gi(r)}Gi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new oL(this.Ki,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ki.setIndexManager(this.indexManager),this.Bi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Li))}}function yL(t,e,n,r){return new gL(t,e,n,r)}async function vT(t,e){const n=se(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Gi(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=ue();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({Qi:u,removedBatchIds:o,addedBatchIds:a}))})})}function vL(t,e){const n=se(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Ki.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,h=c.keys();let d=b.resolve();return h.forEach(m=>{d=d.next(()=>u.getEntry(a,m)).next(v=>{const _=l.docVersions.get(m);Me(_!==null),v.version.compareTo(_)<0&&(c.applyToRemoteDocument(v,l),v.isValidDocument()&&(v.setReadTime(l.commitVersion),u.addEntry(v)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=ue();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function _T(t){const e=se(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ds.getLastRemoteSnapshotVersion(n))}function _L(t,e){const n=se(t),r=e.snapshotVersion;let i=n.Li;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Ki.newChangeBuffer({trackRemovals:!0});i=n.Li;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.Ds.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Ds.addMatchingKeys(s,c.addedDocuments,h)));let m=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(h)?m=m.withResumeToken(Ut.EMPTY_BYTE_STRING,ie.min()).withLastLimboFreeSnapshotVersion(ie.min()):c.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(c.resumeToken,r)),i=i.insert(h,m),function(v,_,g){return v.resumeToken.approximateByteSize()===0||_.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:g.addedDocuments.size+g.modifiedDocuments.size+g.removedDocuments.size>0}(d,m,c)&&a.push(n.Ds.updateTargetData(s,m))});let l=kr(),u=ue();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(wL(s,o,e.documentUpdates).next(c=>{l=c.zi,u=c.ji})),!r.isEqual(ie.min())){const c=n.Ds.getLastRemoteSnapshotVersion(s).next(h=>n.Ds.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return b.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.Li=i,s))}function wL(t,e,n){let r=ue(),i=ue();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=kr();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(ie.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):j("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{zi:o,ji:i}})}function EL(t,e){const n=se(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function SL(t,e){const n=se(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ds.getTargetData(r,e).next(s=>s?(i=s,b.resolve(i)):n.Ds.allocateTargetId(r).next(o=>(i=new Ui(e,o,0,r.currentSequenceNumber),n.Ds.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Li.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Li=n.Li.insert(r.targetId,r),n.qi.set(e,r.targetId)),r})}async function Up(t,e,n){const r=se(t),i=r.Li.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!$l(o))throw o;j("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Li=r.Li.remove(e),r.qi.delete(i.target)}function _0(t,e,n){const r=se(t);let i=ie.min(),s=ue();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=se(a),h=c.qi.get(u);return h!==void 0?b.resolve(c.Li.get(h)):c.Ds.getTargetData(l,u)}(r,o,Ir(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Ds.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Bi.getDocumentsMatchingQuery(o,e,n?i:ie.min(),n?s:ue())).next(a=>(CL(r,vM(e),a),{documents:a,Wi:s})))}function CL(t,e,n){let r=t.Ui.get(e)||ie.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Ui.set(e,r)}class w0{constructor(){this.activeTargetIds=eT()}tr(e){this.activeTargetIds=this.activeTargetIds.add(e)}er(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Xi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class TL{constructor(){this.Br=new w0,this.Lr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Br.tr(e),this.Lr[e]||"not-current"}updateQueryState(e,n,r){this.Lr[e]=n}removeLocalQueryTarget(e){this.Br.er(e)}isLocalQueryTarget(e){return this.Br.activeTargetIds.has(e)}clearQueryState(e){delete this.Lr[e]}getAllActiveQueryTargets(){return this.Br.activeTargetIds}isActiveQueryTarget(e){return this.Br.activeTargetIds.has(e)}start(){return this.Br=new w0,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IL{qr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E0{constructor(){this.Ur=()=>this.Kr(),this.Gr=()=>this.Qr(),this.zr=[],this.jr()}qr(e){this.zr.push(e)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Gr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Gr)}Kr(){j("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.zr)e(0)}Qr(){j("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.zr)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tu=null;function Zd(){return Tu===null?Tu=268435456+Math.round(2147483648*Math.random()):Tu++,"0x"+Tu.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kL={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NL{constructor(e){this.Wr=e.Wr,this.Hr=e.Hr}Jr(e){this.Yr=e}Zr(e){this.Xr=e}onMessage(e){this.eo=e}close(){this.Hr()}send(e){this.Wr(e)}no(){this.Yr()}so(e){this.Xr(e)}io(e){this.eo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nt="WebChannelConnection";class RL extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.ro=n+"://"+e.host,this.oo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get uo(){return!1}co(e,n,r,i,s){const o=Zd(),a=this.ao(e,n);j("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const l={};return this.ho(l,i,s),this.lo(e,a,l,r).then(u=>(j("RestConnection",`Received RPC '${e}' ${o}: `,u),u),u=>{throw Fc("RestConnection",`RPC '${e}' ${o} failed with error: `,u,"url: ",a,"request:",r),u})}fo(e,n,r,i,s,o){return this.co(e,n,r,i,s)}ho(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+No,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}ao(e,n){const r=kL[e];return`${this.ro}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,n,r,i){const s=Zd();return new Promise((o,a)=>{const l=new zO;l.setWithCredentials(!0),l.listenOnce($O.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Xd.NO_ERROR:const c=l.getResponseJson();j(Nt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case Xd.TIMEOUT:j(Nt,`RPC '${e}' ${s} timed out`),a(new F(N.DEADLINE_EXCEEDED,"Request time out"));break;case Xd.HTTP_ERROR:const h=l.getStatus();if(j(Nt,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const m=d==null?void 0:d.error;if(m&&m.status&&m.message){const v=function(_){const g=_.toLowerCase().replace(/_/g,"-");return Object.values(N).indexOf(g)>=0?g:N.UNKNOWN}(m.status);a(new F(v,m.message))}else a(new F(N.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new F(N.UNAVAILABLE,"Connection failed."));break;default:ee()}}finally{j(Nt,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);j(Nt,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}wo(e,n,r){const i=Zd(),s=[this.ro,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=LO(),a=FO(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(l.xmlHttpFactory=new VO({})),this.ho(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const u=s.join("");j(Nt,`Creating RPC '${e}' stream ${i}: ${u}`,l);const c=o.createWebChannel(u,l);let h=!1,d=!1;const m=new NL({Wr:_=>{d?j(Nt,`Not sending because RPC '${e}' stream ${i} is closed:`,_):(h||(j(Nt,`Opening RPC '${e}' stream ${i} transport.`),c.open(),h=!0),j(Nt,`RPC '${e}' stream ${i} sending:`,_),c.send(_))},Hr:()=>c.close()}),v=(_,g,p)=>{_.listen(g,f=>{try{p(f)}catch(y){setTimeout(()=>{throw y},0)}})};return v(c,wu.EventType.OPEN,()=>{d||j(Nt,`RPC '${e}' stream ${i} transport opened.`)}),v(c,wu.EventType.CLOSE,()=>{d||(d=!0,j(Nt,`RPC '${e}' stream ${i} transport closed`),m.so())}),v(c,wu.EventType.ERROR,_=>{d||(d=!0,Fc(Nt,`RPC '${e}' stream ${i} transport errored:`,_),m.so(new F(N.UNAVAILABLE,"The operation could not be completed")))}),v(c,wu.EventType.MESSAGE,_=>{var g;if(!d){const p=_.data[0];Me(!!p);const f=p,y=f.error||((g=f[0])===null||g===void 0?void 0:g.error);if(y){j(Nt,`RPC '${e}' stream ${i} received error:`,y);const S=y.status;let I=function(T){const R=qe[T];if(R!==void 0)return uT(R)}(S),D=y.message;I===void 0&&(I=N.INTERNAL,D="Unknown error status: "+S+" with message "+y.message),d=!0,m.so(new F(I,D)),c.close()}else j(Nt,`RPC '${e}' stream ${i} received:`,p),m.io(p)}}),v(a,UO.STAT_EVENT,_=>{_.stat===J_.PROXY?j(Nt,`RPC '${e}' stream ${i} detected buffering proxy`):_.stat===J_.NOPROXY&&j(Nt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{m.no()},0),m}}function ef(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hh(t){return new VM(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wT{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Ws=e,this.timerId=n,this._o=r,this.mo=i,this.yo=s,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const n=Math.floor(this.po+this.Ro()),r=Math.max(0,Date.now()-this.To),i=Math.max(0,n-r);i>0&&j("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.po} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,i,()=>(this.To=Date.now(),e())),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ET{constructor(e,n,r,i,s,o,a,l){this.Ws=e,this.bo=r,this.Po=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Vo=0,this.So=null,this.Do=null,this.stream=null,this.Co=new wT(e,n)}xo(){return this.state===1||this.state===5||this.No()}No(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.ko()}async stop(){this.xo()&&await this.close(0)}Oo(){this.state=0,this.Co.reset()}$o(){this.No()&&this.So===null&&(this.So=this.Ws.enqueueAfterDelay(this.bo,6e4,()=>this.Mo()))}Fo(e){this.Bo(),this.stream.send(e)}async Mo(){if(this.No())return this.close(0)}Bo(){this.So&&(this.So.cancel(),this.So=null)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}async close(e,n){this.Bo(),this.Lo(),this.Co.cancel(),this.Vo++,e!==4?this.Co.reset():n&&n.code===N.RESOURCE_EXHAUSTED?(Tr(n.toString()),Tr("Using maximum backoff delay to prevent overloading the backend."),this.Co.Eo()):n&&n.code===N.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Uo(this.Vo),n=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Vo===n&&this.Ko(r,i)},r=>{e(()=>{const i=new F(N.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Go(i)})})}Ko(e,n){const r=this.Uo(this.Vo);this.stream=this.Qo(e,n),this.stream.Jr(()=>{r(()=>(this.state=2,this.Do=this.Ws.enqueueAfterDelay(this.Po,1e4,()=>(this.No()&&(this.state=3),Promise.resolve())),this.listener.Jr()))}),this.stream.Zr(i=>{r(()=>this.Go(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}ko(){this.state=5,this.Co.Ao(async()=>{this.state=0,this.start()})}Go(e){return j("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Uo(e){return n=>{this.Ws.enqueueAndForget(()=>this.Vo===e?n():(j("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class AL extends ET{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}Qo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.Co.reset();const n=jM(this.serializer,e),r=function(i){if(!("targetChange"in i))return ie.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?ie.min():s.readTime?Jn(s.readTime):ie.min()}(e);return this.listener.zo(n,r)}jo(e){const n={};n.database=$p(this.serializer),n.addTarget=function(i,s){let o;const a=s.target;return o=Pp(a)?{documents:qM(i,a)}:{query:GM(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=dT(i,s.resumeToken):s.snapshotVersion.compareTo(ie.min())>0&&(o.readTime=Bc(i,s.snapshotVersion.toTimestamp())),o}(this.serializer,e);const r=QM(this.serializer,e);r&&(n.labels=r),this.Fo(n)}Wo(e){const n={};n.database=$p(this.serializer),n.removeTarget=e,this.Fo(n)}}class DL extends ET{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.Ho=!1}get Jo(){return this.Ho}start(){this.Ho=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Ho&&this.Yo([])}Qo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(Me(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Ho){this.Co.reset();const n=HM(e.writeResults,e.commitTime),r=Jn(e.commitTime);return this.listener.Zo(r,n)}return Me(!e.writeResults||e.writeResults.length===0),this.Ho=!0,this.listener.Xo()}tu(){const e={};e.database=$p(this.serializer),this.Fo(e)}Yo(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>WM(this.serializer,r))};this.Fo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xL extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.eu=!1}nu(){if(this.eu)throw new F(N.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,n,r){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.co(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new F(N.UNKNOWN,i.toString())})}fo(e,n,r,i){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.fo(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new F(N.UNKNOWN,s.toString())})}terminate(){this.eu=!0}}class PL{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.su=0,this.iu=null,this.ru=!0}ou(){this.su===0&&(this.uu("Unknown"),this.iu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.iu=null,this.cu("Backend didn't respond within 10 seconds."),this.uu("Offline"),Promise.resolve())))}au(e){this.state==="Online"?this.uu("Unknown"):(this.su++,this.su>=1&&(this.hu(),this.cu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.uu("Offline")))}set(e){this.hu(),this.su=0,e==="Online"&&(this.ru=!1),this.uu(e)}uu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}cu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ru?(Tr(n),this.ru=!1):j("OnlineStateTracker",n)}hu(){this.iu!==null&&(this.iu.cancel(),this.iu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bL{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.lu=[],this.fu=new Map,this.du=new Set,this.wu=[],this._u=s,this._u.qr(o=>{r.enqueueAndForget(async()=>{ls(this)&&(j("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=se(a);l.du.add(4),await Bl(l),l.mu.set("Unknown"),l.du.delete(4),await qh(l)}(this))})}),this.mu=new PL(r,i)}}async function qh(t){if(ls(t))for(const e of t.wu)await e(!0)}async function Bl(t){for(const e of t.wu)await e(!1)}function ST(t,e){const n=se(t);n.fu.has(e.targetId)||(n.fu.set(e.targetId,e),Jg(n)?Xg(n):Ao(n).No()&&Yg(n,e))}function CT(t,e){const n=se(t),r=Ao(n);n.fu.delete(e),r.No()&&TT(n,e),n.fu.size===0&&(r.No()?r.$o():ls(n)&&n.mu.set("Unknown"))}function Yg(t,e){t.gu.Ot(e.targetId),Ao(t).jo(e)}function TT(t,e){t.gu.Ot(e),Ao(t).Wo(e)}function Xg(t){t.gu=new LM({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.fu.get(e)||null}),Ao(t).start(),t.mu.ou()}function Jg(t){return ls(t)&&!Ao(t).xo()&&t.fu.size>0}function ls(t){return se(t).du.size===0}function IT(t){t.gu=void 0}async function OL(t){t.fu.forEach((e,n)=>{Yg(t,e)})}async function ML(t,e){IT(t),Jg(t)?(t.mu.au(e),Xg(t)):t.mu.set("Unknown")}async function LL(t,e,n){if(t.mu.set("Online"),e instanceof hT&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.fu.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.fu.delete(o),r.gu.removeTarget(o))}(t,e)}catch(r){j("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await jc(t,r)}else if(e instanceof qu?t.gu.Kt(e):e instanceof cT?t.gu.Jt(e):t.gu.zt(e),!n.isEqual(ie.min()))try{const r=await _T(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.gu.Xt(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.fu.get(l);u&&i.fu.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const l=i.fu.get(a);if(!l)return;i.fu.set(a,l.withResumeToken(Ut.EMPTY_BYTE_STRING,l.snapshotVersion)),TT(i,a);const u=new Ui(l.target,a,1,l.sequenceNumber);Yg(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){j("RemoteStore","Failed to raise snapshot:",r),await jc(t,r)}}async function jc(t,e,n){if(!$l(e))throw e;t.du.add(1),await Bl(t),t.mu.set("Offline"),n||(n=()=>_T(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{j("RemoteStore","Retrying IndexedDB access"),await n(),t.du.delete(1),await qh(t)})}function kT(t,e){return e().catch(n=>jc(t,n,e))}async function Gh(t){const e=se(t),n=di(e);let r=e.lu.length>0?e.lu[e.lu.length-1].batchId:-1;for(;FL(e);)try{const i=await EL(e.localStore,r);if(i===null){e.lu.length===0&&n.$o();break}r=i.batchId,$L(e,i)}catch(i){await jc(e,i)}NT(e)&&RT(e)}function FL(t){return ls(t)&&t.lu.length<10}function $L(t,e){t.lu.push(e);const n=di(t);n.No()&&n.Jo&&n.Yo(e.mutations)}function NT(t){return ls(t)&&!di(t).xo()&&t.lu.length>0}function RT(t){di(t).start()}async function UL(t){di(t).tu()}async function VL(t){const e=di(t);for(const n of t.lu)e.Yo(n.mutations)}async function zL(t,e,n){const r=t.lu.shift(),i=Wg.from(r,e,n);await kT(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Gh(t)}async function BL(t,e){e&&di(t).Jo&&await async function(n,r){if(i=r.code,MM(i)&&i!==N.ABORTED){const s=n.lu.shift();di(n).Oo(),await kT(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await Gh(n)}var i}(t,e),NT(t)&&RT(t)}async function S0(t,e){const n=se(t);n.asyncQueue.verifyOperationInProgress(),j("RemoteStore","RemoteStore received new credentials");const r=ls(n);n.du.add(3),await Bl(n),r&&n.mu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.du.delete(3),await qh(n)}async function jL(t,e){const n=se(t);e?(n.du.delete(2),await qh(n)):e||(n.du.add(2),await Bl(n),n.mu.set("Unknown"))}function Ao(t){return t.yu||(t.yu=function(e,n,r){const i=se(e);return i.nu(),new AL(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{Jr:OL.bind(null,t),Zr:ML.bind(null,t),zo:LL.bind(null,t)}),t.wu.push(async e=>{e?(t.yu.Oo(),Jg(t)?Xg(t):t.mu.set("Unknown")):(await t.yu.stop(),IT(t))})),t.yu}function di(t){return t.pu||(t.pu=function(e,n,r){const i=se(e);return i.nu(),new DL(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{Jr:UL.bind(null,t),Zr:BL.bind(null,t),Xo:VL.bind(null,t),Zo:zL.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Oo(),await Gh(t)):(await t.pu.stop(),t.lu.length>0&&(j("RemoteStore",`Stopping write stream with ${t.lu.length} pending writes`),t.lu=[]))})),t.pu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new ni,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Zg(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new F(N.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ey(t,e){if(Tr("AsyncQueue",`${e}: ${t}`),$l(t))return new F(N.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||q.comparator(n.key,r.key):(n,r)=>q.comparator(n.key,r.key),this.keyedMap=ua(),this.sortedSet=new st(this.comparator)}static emptySet(e){return new Gs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Gs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Gs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C0{constructor(){this.Iu=new st(q.comparator)}track(e){const n=e.doc.key,r=this.Iu.get(n);r?e.type!==0&&r.type===3?this.Iu=this.Iu.insert(n,e):e.type===3&&r.type!==1?this.Iu=this.Iu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Iu=this.Iu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Iu=this.Iu.remove(n):e.type===1&&r.type===2?this.Iu=this.Iu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):ee():this.Iu=this.Iu.insert(n,e)}Tu(){const e=[];return this.Iu.inorderTraversal((n,r)=>{e.push(r)}),e}}class ho{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new ho(e,n,Gs.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Vh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WL{constructor(){this.Eu=void 0,this.listeners=[]}}class HL{constructor(){this.queries=new Ro(e=>QC(e),Vh),this.onlineState="Unknown",this.Au=new Set}}async function qL(t,e){const n=se(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new WL),i)try{s.Eu=await n.onListen(r)}catch(o){const a=ey(o,`Initialization of query '${Mp(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.Ru(n.onlineState),s.Eu&&e.vu(s.Eu)&&ty(n)}async function GL(t,e){const n=se(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function KL(t,e){const n=se(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.vu(i)&&(r=!0);o.Eu=i}}r&&ty(n)}function QL(t,e,n){const r=se(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function ty(t){t.Au.forEach(e=>{e.next()})}class YL{constructor(e,n,r){this.query=e,this.bu=n,this.Pu=!1,this.Vu=null,this.onlineState="Unknown",this.options=r||{}}vu(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new ho(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Pu?this.Su(e)&&(this.bu.next(e),n=!0):this.Du(e,this.onlineState)&&(this.Cu(e),n=!0),this.Vu=e,n}onError(e){this.bu.error(e)}Ru(e){this.onlineState=e;let n=!1;return this.Vu&&!this.Pu&&this.Du(this.Vu,e)&&(this.Cu(this.Vu),n=!0),n}Du(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.xu||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Su(e){if(e.docChanges.length>0)return!0;const n=this.Vu&&this.Vu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Cu(e){e=ho.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Pu=!0,this.bu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AT{constructor(e){this.key=e}}class DT{constructor(e){this.key=e}}class XL{constructor(e,n){this.query=e,this.Lu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Uu=ue(),this.mutatedKeys=ue(),this.Ku=YC(e),this.Gu=new Gs(this.Ku)}get Qu(){return this.Lu}zu(e,n){const r=n?n.ju:new C0,i=n?n.Gu:this.Gu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),m=zh(this.query,h)?h:null,v=!!d&&this.mutatedKeys.has(d.key),_=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let g=!1;d&&m?d.data.isEqual(m.data)?v!==_&&(r.track({type:3,doc:m}),g=!0):this.Wu(d,m)||(r.track({type:2,doc:m}),g=!0,(l&&this.Ku(m,l)>0||u&&this.Ku(m,u)<0)&&(a=!0)):!d&&m?(r.track({type:0,doc:m}),g=!0):d&&!m&&(r.track({type:1,doc:d}),g=!0,(l||u)&&(a=!0)),g&&(m?(o=o.add(m),s=_?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{Gu:o,ju:r,Mi:a,mutatedKeys:s}}Wu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;const s=e.ju.Tu();s.sort((u,c)=>function(h,d){const m=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ee()}};return m(h)-m(d)}(u.type,c.type)||this.Ku(u.doc,c.doc)),this.Hu(r);const o=n?this.Ju():[],a=this.Uu.size===0&&this.current?1:0,l=a!==this.qu;return this.qu=a,s.length!==0||l?{snapshot:new ho(this.query,e.Gu,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Yu:o}:{Yu:o}}Ru(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Gu:this.Gu,ju:new C0,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{Yu:[]}}Zu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach(n=>this.Lu=this.Lu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Lu=this.Lu.delete(n)),this.current=e.current)}Ju(){if(!this.current)return[];const e=this.Uu;this.Uu=ue(),this.Gu.forEach(r=>{this.Zu(r.key)&&(this.Uu=this.Uu.add(r.key))});const n=[];return e.forEach(r=>{this.Uu.has(r)||n.push(new DT(r))}),this.Uu.forEach(r=>{e.has(r)||n.push(new AT(r))}),n}Xu(e){this.Lu=e.Wi,this.Uu=ue();const n=this.zu(e.documents);return this.applyChanges(n,!0)}tc(){return ho.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class JL{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class ZL{constructor(e){this.key=e,this.ec=!1}}class e2{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.nc={},this.sc=new Ro(a=>QC(a),Vh),this.ic=new Map,this.rc=new Set,this.oc=new st(q.comparator),this.uc=new Map,this.cc=new Gg,this.ac={},this.hc=new Map,this.lc=co.bn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return this.fc===!0}}async function t2(t,e){const n=h2(t);let r,i;const s=n.sc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.tc();else{const o=await SL(n.localStore,Ir(e));n.isPrimaryClient&&ST(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await n2(n,e,r,a==="current",o.resumeToken)}return i}async function n2(t,e,n,r,i){t.dc=(h,d,m)=>async function(v,_,g,p){let f=_.view.zu(g);f.Mi&&(f=await _0(v.localStore,_.query,!1).then(({documents:I})=>_.view.zu(I,f)));const y=p&&p.targetChanges.get(_.targetId),S=_.view.applyChanges(f,v.isPrimaryClient,y);return I0(v,_.targetId,S.Yu),S.snapshot}(t,h,d,m);const s=await _0(t.localStore,e,!0),o=new XL(e,s.Wi),a=o.zu(s.documents),l=zl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);I0(t,n,u.Yu);const c=new JL(e,n,o);return t.sc.set(e,c),t.ic.has(n)?t.ic.get(n).push(e):t.ic.set(n,[e]),u.snapshot}async function r2(t,e){const n=se(t),r=n.sc.get(e),i=n.ic.get(r.targetId);if(i.length>1)return n.ic.set(r.targetId,i.filter(s=>!Vh(s,e))),void n.sc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Up(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),CT(n.remoteStore,r.targetId),Vp(n,r.targetId)}).catch(Fl)):(Vp(n,r.targetId),await Up(n.localStore,r.targetId,!0))}async function i2(t,e,n){const r=d2(t);try{const i=await function(s,o){const a=se(s),l=rt.now(),u=o.reduce((d,m)=>d.add(m.key),ue());let c,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let m=kr(),v=ue();return a.Ki.getEntries(d,u).next(_=>{m=_,m.forEach((g,p)=>{p.isValidDocument()||(v=v.add(g))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,m)).next(_=>{c=_;const g=[];for(const p of o){const f=DM(p,c.get(p.key).overlayedDocument);f!=null&&g.push(new _i(p.key,f,UC(f.value.mapValue),Mn.exists(!0)))}return a.mutationQueue.addMutationBatch(d,l,g,o)}).next(_=>{h=_;const g=_.applyToLocalDocumentSet(c,v);return a.documentOverlayCache.saveOverlays(d,_.batchId,g)})}).then(()=>({batchId:h.batchId,changes:JC(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.ac[s.currentUser.toKey()];l||(l=new st(Ce)),l=l.insert(o,a),s.ac[s.currentUser.toKey()]=l}(r,i.batchId,n),await jl(r,i.changes),await Gh(r.remoteStore)}catch(i){const s=ey(i,"Failed to persist write");n.reject(s)}}async function xT(t,e){const n=se(t);try{const r=await _L(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.uc.get(s);o&&(Me(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ec=!0:i.modifiedDocuments.size>0?Me(o.ec):i.removedDocuments.size>0&&(Me(o.ec),o.ec=!1))}),await jl(n,r,e)}catch(r){await Fl(r)}}function T0(t,e,n){const r=se(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.sc.forEach((s,o)=>{const a=o.view.Ru(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=se(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const h of c.listeners)h.Ru(o)&&(l=!0)}),l&&ty(a)}(r.eventManager,e),i.length&&r.nc.zo(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function s2(t,e,n){const r=se(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.uc.get(e),s=i&&i.key;if(s){let o=new st(q.comparator);o=o.insert(s,Dt.newNoDocument(s,ie.min()));const a=ue().add(s),l=new Wh(ie.min(),new Map,new it(Ce),o,a);await xT(r,l),r.oc=r.oc.remove(s),r.uc.delete(e),ny(r)}else await Up(r.localStore,e,!1).then(()=>Vp(r,e,n)).catch(Fl)}async function o2(t,e){const n=se(t),r=e.batch.batchId;try{const i=await vL(n.localStore,e);bT(n,r,null),PT(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await jl(n,i)}catch(i){await Fl(i)}}async function a2(t,e,n){const r=se(t);try{const i=await function(s,o){const a=se(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.mutationQueue.lookupMutationBatch(l,o).next(c=>(Me(c!==null),u=c.keys(),a.mutationQueue.removeMutationBatch(l,c))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>a.localDocuments.getDocuments(l,u))})}(r.localStore,e);bT(r,e,n),PT(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await jl(r,i)}catch(i){await Fl(i)}}function PT(t,e){(t.hc.get(e)||[]).forEach(n=>{n.resolve()}),t.hc.delete(e)}function bT(t,e,n){const r=se(t);let i=r.ac[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.ac[r.currentUser.toKey()]=i}}function Vp(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ic.get(e))t.sc.delete(r),n&&t.nc.wc(r,n);t.ic.delete(e),t.isPrimaryClient&&t.cc.hs(e).forEach(r=>{t.cc.containsKey(r)||OT(t,r)})}function OT(t,e){t.rc.delete(e.path.canonicalString());const n=t.oc.get(e);n!==null&&(CT(t.remoteStore,n),t.oc=t.oc.remove(e),t.uc.delete(n),ny(t))}function I0(t,e,n){for(const r of n)r instanceof AT?(t.cc.addReference(r.key,e),l2(t,r)):r instanceof DT?(j("SyncEngine","Document no longer in limbo: "+r.key),t.cc.removeReference(r.key,e),t.cc.containsKey(r.key)||OT(t,r.key)):ee()}function l2(t,e){const n=e.key,r=n.path.canonicalString();t.oc.get(n)||t.rc.has(r)||(j("SyncEngine","New document in limbo: "+n),t.rc.add(r),ny(t))}function ny(t){for(;t.rc.size>0&&t.oc.size<t.maxConcurrentLimboResolutions;){const e=t.rc.values().next().value;t.rc.delete(e);const n=new q(be.fromString(e)),r=t.lc.next();t.uc.set(r,new ZL(n)),t.oc=t.oc.insert(n,r),ST(t.remoteStore,new Ui(Ir(qC(n.path)),r,2,$g.ct))}}async function jl(t,e,n){const r=se(t),i=[],s=[],o=[];r.sc.isEmpty()||(r.sc.forEach((a,l)=>{o.push(r.dc(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=Qg.Di(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.nc.zo(i),await async function(a,l){const u=se(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>b.forEach(l,h=>b.forEach(h.Vi,d=>u.persistence.referenceDelegate.addReference(c,h.targetId,d)).next(()=>b.forEach(h.Si,d=>u.persistence.referenceDelegate.removeReference(c,h.targetId,d)))))}catch(c){if(!$l(c))throw c;j("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const h=c.targetId;if(!c.fromCache){const d=u.Li.get(h),m=d.snapshotVersion,v=d.withLastLimboFreeSnapshotVersion(m);u.Li=u.Li.insert(h,v)}}}(r.localStore,s))}async function u2(t,e){const n=se(t);if(!n.currentUser.isEqual(e)){j("SyncEngine","User change. New user:",e.toKey());const r=await vT(n.localStore,e);n.currentUser=e,function(i,s){i.hc.forEach(o=>{o.forEach(a=>{a.reject(new F(N.CANCELLED,s))})}),i.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await jl(n,r.Qi)}}function c2(t,e){const n=se(t),r=n.uc.get(e);if(r&&r.ec)return ue().add(r.key);{let i=ue();const s=n.ic.get(e);if(!s)return i;for(const o of s){const a=n.sc.get(o);i=i.unionWith(a.view.Qu)}return i}}function h2(t){const e=se(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=xT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=c2.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=s2.bind(null,e),e.nc.zo=KL.bind(null,e.eventManager),e.nc.wc=QL.bind(null,e.eventManager),e}function d2(t){const e=se(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=o2.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=a2.bind(null,e),e}class k0{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Hh(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return yL(this.persistence,new mL,e.initialUser,this.serializer)}createPersistence(e){return new fL(Kg.Fs,this.serializer)}createSharedClientState(e){return new TL}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class f2{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>T0(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=u2.bind(null,this.syncEngine),await jL(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new HL}createDatastore(e){const n=Hh(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new RL(i));var i;return function(s,o,a,l){return new xL(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>T0(this.syncEngine,a,0),o=E0.D()?new E0:new IL,new bL(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const c=new e2(r,i,s,o,a,l);return u&&(c.fc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=se(e);j("RemoteStore","RemoteStore shutting down."),n.du.add(5),await Bl(n),n._u.shutdown(),n.mu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p2{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.gc(this.observer.next,e)}error(e){this.observer.error?this.gc(this.observer.error,e):Tr("Uncaught Error in snapshot listener:",e.toString())}yc(){this.muted=!0}gc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m2{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Rt.UNAUTHENTICATED,this.clientId=MC.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{j("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(j("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new F(N.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ni;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=ey(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function tf(t,e){t.asyncQueue.verifyOperationInProgress(),j("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await vT(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function N0(t,e){t.asyncQueue.verifyOperationInProgress();const n=await y2(t);j("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>S0(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>S0(e.remoteStore,s)),t._onlineComponents=e}function g2(t){return t.name==="FirebaseError"?t.code===N.FAILED_PRECONDITION||t.code===N.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function y2(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){j("FirestoreClient","Using user provided OfflineComponentProvider");try{await tf(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!g2(n))throw n;Fc("Error using user provided cache. Falling back to memory cache: "+n),await tf(t,new k0)}}else j("FirestoreClient","Using default OfflineComponentProvider"),await tf(t,new k0);return t._offlineComponents}async function MT(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(j("FirestoreClient","Using user provided OnlineComponentProvider"),await N0(t,t._uninitializedComponentsProvider._online)):(j("FirestoreClient","Using default OnlineComponentProvider"),await N0(t,new f2))),t._onlineComponents}function v2(t){return MT(t).then(e=>e.syncEngine)}async function _2(t){const e=await MT(t),n=e.eventManager;return n.onListen=t2.bind(null,e.syncEngine),n.onUnlisten=r2.bind(null,e.syncEngine),n}function w2(t,e,n={}){const r=new ni;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new p2({next:h=>{s.enqueueAndForget(()=>GL(i,c)),h.fromCache&&a.source==="server"?l.reject(new F(N.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(h)},error:h=>l.reject(h)}),c=new YL(o,u,{includeMetadataChanges:!0,xu:!0});return qL(i,c)}(await _2(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R0=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LT(t,e,n){if(!n)throw new F(N.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function E2(t,e,n,r){if(e===!0&&r===!0)throw new F(N.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function A0(t){if(!q.isDocumentKey(t))throw new F(N.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function D0(t){if(q.isDocumentKey(t))throw new F(N.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Kh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ee()}function es(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new F(N.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Kh(t);throw new F(N.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x0{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new F(N.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new F(N.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,E2("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new x0({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new F(N.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new F(N.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new x0(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new BO;switch(n.type){case"firstParty":return new qO(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new F(N.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=R0.get(e);n&&(j("ComponentProvider","Removing Datastore"),R0.delete(e),n.terminate())}(this),Promise.resolve()}}function S2(t,e,n,r={}){var i;const s=(t=es(t,Qh))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&Fc("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=Rt.MOCK_USER;else{o=G1(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new F(N.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Rt(l)}t._authCredentials=new jO(new OC(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ri(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ln(this.firestore,e,this._key)}}class Do{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Do(this.firestore,e,this._query)}}class ri extends Do{constructor(e,n,r){super(e,n,qC(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ln(this.firestore,null,new q(e))}withConverter(e){return new ri(this.firestore,e,this._path)}}function fo(t,e,...n){if(t=Je(t),LT("collection","path",e),t instanceof Qh){const r=be.fromString(e,...n);return D0(r),new ri(t,null,r)}{if(!(t instanceof ln||t instanceof ri))throw new F(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(be.fromString(e,...n));return D0(r),new ri(t.firestore,null,r)}}function gr(t,e,...n){if(t=Je(t),arguments.length===1&&(e=MC.A()),LT("doc","path",e),t instanceof Qh){const r=be.fromString(e,...n);return A0(r),new ln(t,null,new q(r))}{if(!(t instanceof ln||t instanceof ri))throw new F(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(be.fromString(e,...n));return A0(r),new ln(t.firestore,t instanceof ri?t.converter:null,new q(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C2{constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new wT(this,"async_queue_retry"),this.qc=()=>{const n=ef();n&&j("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Co.vo()};const e=ef();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.qc)}get isShuttingDown(){return this.Oc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Uc(),this.Kc(e)}enterRestrictedMode(e){if(!this.Oc){this.Oc=!0,this.Bc=e||!1;const n=ef();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.qc)}}enqueue(e){if(this.Uc(),this.Oc)return new Promise(()=>{});const n=new ni;return this.Kc(()=>this.Oc&&this.Bc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.kc.push(e),this.Gc()))}async Gc(){if(this.kc.length!==0){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(e){if(!$l(e))throw e;j("AsyncQueue","Operation failed with retryable error: "+e)}this.kc.length>0&&this.Co.Ao(()=>this.Gc())}}Kc(e){const n=this.Nc.then(()=>(this.Fc=!0,e().catch(r=>{this.Mc=r,this.Fc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw Tr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Fc=!1,r))));return this.Nc=n,n}enqueueAfterDelay(e,n,r){this.Uc(),this.Lc.indexOf(e)>-1&&(n=0);const i=Zg.createAndSchedule(this,e,n,r,s=>this.Qc(s));return this.$c.push(i),i}Uc(){this.Mc&&ee()}verifyOperationInProgress(){}async zc(){let e;do e=this.Nc,await e;while(e!==this.Nc)}jc(e){for(const n of this.$c)if(n.timerId===e)return!0;return!1}Wc(e){return this.zc().then(()=>{this.$c.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.zc()})}Hc(e){this.Lc.push(e)}Qc(e){const n=this.$c.indexOf(e);this.$c.splice(n,1)}}class Wl extends Qh{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new C2,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||$T(this),this._firestoreClient.terminate()}}function T2(t,e){const n=typeof t=="object"?t:og(),r=typeof t=="string"?t:e||"(default)",i=wh(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=H1("firestore");s&&S2(i,...s)}return i}function FT(t){return t._firestoreClient||$T(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function $T(t){var e,n,r;const i=t._freezeSettings(),s=function(o,a,l,u){return new sM(o,a,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new m2(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.cache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(e){this._byteString=e}static fromBase64String(e){try{return new po(Ut.fromBase64String(e))}catch(n){throw new F(N.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new po(Ut.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new F(N.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new bt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ry{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iy{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new F(N.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new F(N.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ce(this._lat,e._lat)||Ce(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I2=/^__.*__$/;class k2{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new _i(e,this.data,this.fieldMask,n,this.fieldTransforms):new Vl(e,this.data,n,this.fieldTransforms)}}class UT{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new _i(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function VT(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ee()}}class sy{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Jc(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Yc(){return this.settings.Yc}Zc(e){return new sy(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Xc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Zc({path:r,ta:!1});return i.ea(e),i}na(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Zc({path:r,ta:!1});return i.Jc(),i}sa(e){return this.Zc({path:void 0,ta:!0})}ia(e){return Wc(e,this.settings.methodName,this.settings.ra||!1,this.path,this.settings.oa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Jc(){if(this.path)for(let e=0;e<this.path.length;e++)this.ea(this.path.get(e))}ea(e){if(e.length===0)throw this.ia("Document fields must not be empty");if(VT(this.Yc)&&I2.test(e))throw this.ia('Document fields cannot begin and end with "__"')}}class N2{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Hh(e)}ua(e,n,r,i=!1){return new sy({Yc:e,methodName:n,oa:r,path:bt.emptyPath(),ta:!1,ra:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function oy(t){const e=t._freezeSettings(),n=Hh(t._databaseId);return new N2(t._databaseId,!!e.ignoreUndefinedProperties,n)}function R2(t,e,n,r,i,s={}){const o=t.ua(s.merge||s.mergeFields?2:0,e,n,i);ay("Data must be an object, but it was:",o,r);const a=zT(r,o);let l,u;if(s.merge)l=new on(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=zp(e,h,n);if(!o.contains(d))throw new F(N.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);jT(c,d)||c.push(d)}l=new on(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new k2(new Gt(a),l,u)}class Xh extends ry{_toFieldTransform(e){if(e.Yc!==2)throw e.Yc===1?e.ia(`${this._methodName}() can only appear at the top level of your update data`):e.ia(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Xh}}function A2(t,e,n,r){const i=t.ua(1,e,n);ay("Data must be an object, but it was:",i,r);const s=[],o=Gt.empty();as(r,(l,u)=>{const c=ly(e,l,n);u=Je(u);const h=i.na(c);if(u instanceof Xh)s.push(c);else{const d=Hl(u,h);d!=null&&(s.push(c),o.set(c,d))}});const a=new on(s);return new UT(o,a,i.fieldTransforms)}function D2(t,e,n,r,i,s){const o=t.ua(1,e,n),a=[zp(e,r,n)],l=[i];if(s.length%2!=0)throw new F(N.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(zp(e,s[d])),l.push(s[d+1]);const u=[],c=Gt.empty();for(let d=a.length-1;d>=0;--d)if(!jT(u,a[d])){const m=a[d];let v=l[d];v=Je(v);const _=o.na(m);if(v instanceof Xh)u.push(m);else{const g=Hl(v,_);g!=null&&(u.push(m),c.set(m,g))}}const h=new on(u);return new UT(c,h,o.fieldTransforms)}function x2(t,e,n,r=!1){return Hl(n,t.ua(r?4:3,e))}function Hl(t,e){if(BT(t=Je(t)))return ay("Unsupported field value:",e,t),zT(t,e);if(t instanceof ry)return function(n,r){if(!VT(r.Yc))throw r.ia(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.ia(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ta&&e.Yc!==4)throw e.ia("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=Hl(o,r.sa(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=Je(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return TM(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=rt.fromDate(n);return{timestampValue:Bc(r.serializer,i)}}if(n instanceof rt){const i=new rt(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Bc(r.serializer,i)}}if(n instanceof iy)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof po)return{bytesValue:dT(r.serializer,n._byteString)};if(n instanceof ln){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.ia(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:qg(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.ia(`Unsupported field value: ${Kh(n)}`)}(t,e)}function zT(t,e){const n={};return LC(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):as(t,(r,i)=>{const s=Hl(i,e.Xc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function BT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof rt||t instanceof iy||t instanceof po||t instanceof ln||t instanceof ry)}function ay(t,e,n){if(!BT(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Kh(n);throw r==="an object"?e.ia(t+" a custom object"):e.ia(t+" "+r)}}function zp(t,e,n){if((e=Je(e))instanceof Yh)return e._internalPath;if(typeof e=="string")return ly(t,e);throw Wc("Field path arguments must be of type string or ",t,!1,void 0,n)}const P2=new RegExp("[~\\*/\\[\\]]");function ly(t,e,n){if(e.search(P2)>=0)throw Wc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Yh(...e.split("."))._internalPath}catch{throw Wc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Wc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new F(N.INVALID_ARGUMENT,a+t+l)}function jT(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WT{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new ln(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new b2(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(uy("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class b2 extends WT{data(){return super.data()}}function uy(t,e){return typeof e=="string"?ly(t,e):e instanceof Yh?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O2(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new F(N.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class cy{}class M2 extends cy{}function hy(t,e,...n){let r=[];e instanceof cy&&r.push(e),r=r.concat(n),function(i){const s=i.filter(a=>a instanceof fy).length,o=i.filter(a=>a instanceof Jh).length;if(s>1||s>0&&o>0)throw new F(N.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Jh extends M2{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Jh(e,n,r)}_apply(e){const n=this._parse(e);return HT(e._query,n),new Do(e.firestore,e.converter,bp(e._query,n))}_parse(e){const n=oy(e.firestore);return function(i,s,o,a,l,u,c){let h;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new F(N.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){b0(c,u);const d=[];for(const m of c)d.push(P0(a,i,m));h={arrayValue:{values:d}}}else h=P0(a,i,c)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||b0(c,u),h=x2(o,s,c,u==="in"||u==="not-in");return Xe.create(l,u,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function dy(t,e,n){const r=e,i=uy("where",t);return Jh._create(i,r,n)}class fy extends cy{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new fy(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Un.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,i){let s=r;const o=i.getFlattenedFilters();for(const a of o)HT(s,a),s=bp(s,a)}(e._query,n),new Do(e.firestore,e.converter,bp(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function P0(t,e,n){if(typeof(n=Je(n))=="string"){if(n==="")throw new F(N.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!KC(e)&&n.indexOf("/")!==-1)throw new F(N.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(be.fromString(n));if(!q.isDocumentKey(r))throw new F(N.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return i0(t,new q(r))}if(n instanceof ln)return i0(t,n._key);throw new F(N.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Kh(n)}.`)}function b0(t,e){if(!Array.isArray(t)||t.length===0)throw new F(N.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function HT(t,e){if(e.isInequality()){const r=Bg(t),i=e.field;if(r!==null&&!r.isEqual(i))throw new F(N.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=GC(t);s!==null&&L2(t,i,s)}const n=function(r,i){for(const s of r)for(const o of s.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new F(N.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new F(N.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function L2(t,e,n){if(!n.isEqual(e))throw new F(N.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class F2{convertValue(e,n="none"){switch(Zi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ke(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ao(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw ee()}}convertObject(e,n){const r={};return as(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new iy(Ke(e.latitude),Ke(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=$C(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ol(e));default:return null}}convertTimestamp(e){const n=hi(e);return new rt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=be.fromString(e);Me(yT(r));const i=new al(r.get(1),r.get(3)),s=new q(r.popFirst(5));return i.isEqual(n)||Tr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $2(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class U2 extends WT{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Gu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(uy("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Gu extends U2{data(e={}){return super.data(e)}}class V2{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Iu(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Gu(this._firestore,this._userDataWriter,r.key,r,new Iu(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new F(N.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new Gu(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Iu(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Gu(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Iu(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:z2(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function z2(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ee()}}class B2 extends F2{constructor(e){super(),this.firestore=e}convertBytes(e){return new po(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ln(this.firestore,null,n)}}function py(t){t=es(t,Do);const e=es(t.firestore,Wl),n=FT(e),r=new B2(e);return O2(t._query),w2(n,t._query).then(i=>new V2(e,r,t,i))}function hl(t,e,n,...r){t=es(t,ln);const i=es(t.firestore,Wl),s=oy(i);let o;return o=typeof(e=Je(e))=="string"||e instanceof Yh?D2(s,"updateDoc",t._key,e,n,r):A2(s,"updateDoc",t._key,e),yy(i,[o.toMutation(t._key,Mn.exists(!0))])}function my(t){return yy(es(t.firestore,Wl),[new jg(t._key,Mn.none())])}function gy(t,e){const n=es(t.firestore,Wl),r=gr(t),i=$2(t.converter,e);return yy(n,[R2(oy(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Mn.exists(!1))]).then(()=>r)}function yy(t,e){return function(n,r){const i=new ni;return n.asyncQueue.enqueueAndForget(async()=>i2(await v2(n),r,i)),i.promise}(FT(t),e)}(function(t,e=!0){(function(n){No=n})(Co),Qi(new ui("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new Wl(new WO(n.getProvider("auth-internal")),new KO(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new F(N.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new al(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Qn(Z_,"3.10.0",t),Qn(Z_,"3.10.0","esm2017")})();const O0="@firebase/database",M0="0.14.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qT="";function j2(t){qT=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W2{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),yt(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Qa(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H2{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Dr(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GT=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new W2(e)}}catch{}return new H2},Oi=GT("localStorage"),Bp=GT("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ks=new _h("@firebase/database"),q2=function(){let t=1;return function(){return t++}}(),KT=function(t){const e=RD(t),n=new CD;n.update(e);const r=n.digest();return tg.encodeByteArray(r)},ql=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=ql.apply(null,r):typeof r=="object"?e+=yt(r):e+=r,e+=" "}return e};let Vi=null,L0=!0;const G2=function(t,e){M(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Ks.logLevel=we.VERBOSE,Vi=Ks.log.bind(Ks),e&&Bp.set("logging_enabled",!0)):typeof t=="function"?Vi=t:(Vi=null,Bp.remove("logging_enabled"))},xt=function(...t){if(L0===!0&&(L0=!1,Vi===null&&Bp.get("logging_enabled")===!0&&G2(!0)),Vi){const e=ql.apply(null,t);Vi(e)}},Gl=function(t){return function(...e){xt(t,...e)}},jp=function(...t){const e="FIREBASE INTERNAL ERROR: "+ql(...t);Ks.error(e)},Nr=function(...t){const e=`FIREBASE FATAL ERROR: ${ql(...t)}`;throw Ks.error(e),new Error(e)},un=function(...t){const e="FIREBASE WARNING: "+ql(...t);Ks.warn(e)},K2=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&un("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},QT=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Q2=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},mo="[MIN_NAME]",ts="[MAX_NAME]",xo=function(t,e){if(t===e)return 0;if(t===mo||e===ts)return-1;if(e===mo||t===ts)return 1;{const n=F0(t),r=F0(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},Y2=function(t,e){return t===e?0:t<e?-1:1},Yo=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+yt(e))},vy=function(t){if(typeof t!="object"||t===null)return yt(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=yt(e[r]),n+=":",n+=vy(t[e[r]]);return n+="}",n},YT=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function En(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const XT=function(t){M(!QT(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const c=u.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(c.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},X2=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},J2=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},Z2=new RegExp("^-?(0*)\\d{1,10}$"),eF=-2147483648,tF=2147483647,F0=function(t){if(Z2.test(t)){const e=Number(t);if(e>=eF&&e<=tF)return e}return null},Kl=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw un("Exception was thrown by user callback.",n),e},Math.floor(0))}},nF=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ka=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rF{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){un(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iF{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(xt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',un(e)}}class Qs{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Qs.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _y="5",JT="v",ZT="s",eI="r",tI="f",nI=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,rI="ls",iI="p",Wp="ac",sI="websocket",oI="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aI{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Oi.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Oi.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function sF(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function lI(t,e,n){M(typeof e=="string","typeof type must == string"),M(typeof n=="object","typeof params must == object");let r;if(e===sI)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===oI)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);sF(t)&&(n.ns=t.namespace);const i=[];return En(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oF{constructor(){this.counters_={}}incrementCounter(e,n=1){Dr(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return aD(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nf={},rf={};function wy(t){const e=t.toString();return nf[e]||(nf[e]=new oF),nf[e]}function aF(t,e){const n=t.toString();return rf[n]||(rf[n]=e()),rf[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lF{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Kl(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $0="start",uF="close",cF="pLPCommand",hF="pRTLPCB",uI="id",cI="pw",hI="ser",dF="cb",fF="seg",pF="ts",mF="d",gF="dframe",dI=1870,fI=30,yF=dI-fI,vF=25e3,_F=3e4;class Ms{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Gl(e),this.stats_=wy(n),this.urlFn=l=>(this.appCheckToken&&(l[Wp]=this.appCheckToken),lI(n,oI,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new lF(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(_F)),Q2(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ey((...s)=>{const[o,a,l,u,c]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===$0)this.id=a,this.password=l;else if(o===uF)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[$0]="t",r[hI]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[dF]=this.scriptTagHolder.uniqueCallbackIdentifier),r[JT]=_y,this.transportSessionId&&(r[ZT]=this.transportSessionId),this.lastSessionId&&(r[rI]=this.lastSessionId),this.applicationId&&(r[iI]=this.applicationId),this.appCheckToken&&(r[Wp]=this.appCheckToken),typeof location<"u"&&location.hostname&&nI.test(location.hostname)&&(r[eI]=tI);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ms.forceAllow_=!0}static forceDisallow(){Ms.forceDisallow_=!0}static isAvailable(){return Ms.forceAllow_?!0:!Ms.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!X2()&&!J2()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=yt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=B1(n),i=YT(r,yF);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[gF]="t",r[uI]=e,r[cI]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=yt(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Ey{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=q2(),window[cF+this.uniqueCallbackIdentifier]=e,window[hF+this.uniqueCallbackIdentifier]=n,this.myIFrame=Ey.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){xt("frame writing exception"),a.stack&&xt(a.stack),xt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||xt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[uI]=this.myID,e[cI]=this.myPW,e[hI]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+fI+r.length<=dI;){const o=this.pendingSegs.shift();r=r+"&"+fF+i+"="+o.seg+"&"+pF+i+"="+o.ts+"&"+mF+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(vF)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{xt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wF=16384,EF=45e3;let Hc=null;typeof MozWebSocket<"u"?Hc=MozWebSocket:typeof WebSocket<"u"&&(Hc=WebSocket);class xn{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Gl(this.connId),this.stats_=wy(n),this.connURL=xn.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[JT]=_y,typeof location<"u"&&location.hostname&&nI.test(location.hostname)&&(o[eI]=tI),n&&(o[ZT]=n),r&&(o[rI]=r),i&&(o[Wp]=i),s&&(o[iI]=s),lI(e,sI,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Oi.set("previous_websocket_failure",!0);try{let r;Q1(),this.mySock=new Hc(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){xn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Hc!==null&&!xn.forceDisallow_}static previouslyFailed(){return Oi.isInMemoryStorage||Oi.get("previous_websocket_failure")===!0}markConnectionHealthy(){Oi.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Qa(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(M(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=yt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=YT(n,wF);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(EF))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}xn.responsesRequiredToBeHealthy=2;xn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Ms,xn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=xn&&xn.isAvailable();let r=n&&!xn.previouslyFailed();if(e.webSocketOnly&&(n||un("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[xn];else{const i=this.transports_=[];for(const s of dl.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);dl.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}dl.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SF=6e4,CF=5e3,TF=10*1024,IF=100*1024,sf="t",U0="d",kF="s",V0="r",NF="e",z0="o",B0="a",j0="n",W0="p",RF="h";class AF{constructor(e,n,r,i,s,o,a,l,u,c){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Gl("c:"+this.id+":"),this.transportManager_=new dl(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=ka(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>IF?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>TF?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(sf in e){const n=e[sf];n===B0?this.upgradeIfSecondaryHealthy_():n===V0?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===z0&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Yo("t",e),r=Yo("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:W0,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:B0,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:j0,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Yo("t",e),r=Yo("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Yo(sf,e);if(U0 in e){const r=e[U0];if(n===RF){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===j0){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===kF?this.onConnectionShutdown_(r):n===V0?this.onReset_(r):n===NF?jp("Server Error: "+r):n===z0?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):jp("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),_y!==r&&un("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),ka(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(SF))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ka(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(CF))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:W0,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Oi.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pI{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mI{constructor(e){this.allowedEvents_=e,this.listeners_={},M(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){M(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc extends mI{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!ig()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new qc}getInitialEvent(e){return M(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H0=32,q0=768;class Le{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Ne(){return new Le("")}function pe(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function fi(t){return t.pieces_.length-t.pieceNum_}function Pe(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Le(t.pieces_,e)}function gI(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function DF(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function yI(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function vI(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Le(e,0)}function dt(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof Le)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new Le(n,0)}function he(t){return t.pieceNum_>=t.pieces_.length}function yn(t,e){const n=pe(t),r=pe(e);if(n===null)return e;if(n===r)return yn(Pe(t),Pe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function _I(t,e){if(fi(t)!==fi(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Pn(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(fi(t)>fi(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class xF{constructor(e,n){this.errorPrefix_=n,this.parts_=yI(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=vh(this.parts_[r]);wI(this)}}function PF(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=vh(e),wI(t)}function bF(t){const e=t.parts_.pop();t.byteLength_-=vh(e),t.parts_.length>0&&(t.byteLength_-=1)}function wI(t){if(t.byteLength_>q0)throw new Error(t.errorPrefix_+"has a key path longer than "+q0+" bytes ("+t.byteLength_+").");if(t.parts_.length>H0)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+H0+") or object contains a cycle "+ki(t))}function ki(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sy extends mI{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Sy}getInitialEvent(e){return M(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xo=1e3,OF=60*5*1e3,G0=30*1e3,MF=1.3,LF=3e4,FF="server_kill",K0=3;class yr extends pI{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=yr.nextPersistentConnectionId_++,this.log_=Gl("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Xo,this.maxReconnectDelay_=OF,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Q1())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Sy.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&qc.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(yt(s)),M(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new rg,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),M(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),M(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,u=a.s;yr.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Dr(e,"w")){const r=io(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();un(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||SD(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=G0)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=ED(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),M(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+yt(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):jp("Unrecognized action received from server: "+yt(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){M(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Xo,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Xo,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>LF&&(this.reconnectDelay_=Xo),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*MF)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+yr.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},u=function(h){M(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?xt("getToken() completed but was canceled"):(xt("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new AF(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,m=>{un(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(FF)},s))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&un(h),l())}}}interrupt(e){xt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){xt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],cp(this.interruptReasons_)&&(this.reconnectDelay_=Xo,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>vy(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new Le(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){xt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=K0&&(this.reconnectDelay_=G0,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){xt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=K0&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+qT.replace(/\./g,"-")]=1,ig()?e["framework.cordova"]=1:K1()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=qc.getInstance().currentlyOnline();return cp(this.interruptReasons_)&&e}}yr.nextPersistentConnectionId_=0;yr.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new me(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new me(mo,e),i=new me(mo,n);return this.compare(r,i)!==0}minPost(){return me.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ku;class EI extends Zh{static get __EMPTY_NODE(){return ku}static set __EMPTY_NODE(e){ku=e}compare(e,n){return xo(e.name,n.name)}isDefinedOn(e){throw Eo("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return me.MIN}maxPost(){return new me(ts,ku)}makePost(e,n){return M(typeof e=="string","KeyIndex indexValue must always be a string."),new me(e,ku)}toString(){return".key"}}const Ys=new EI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ht{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??ht.RED,this.left=i??Yt.EMPTY_NODE,this.right=s??Yt.EMPTY_NODE}copy(e,n,r,i,s){return new ht(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Yt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Yt.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ht.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ht.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ht.RED=!0;ht.BLACK=!1;class $F{copy(e,n,r,i,s){return this}insert(e,n,r){return new ht(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Yt{constructor(e,n=Yt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Yt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ht.BLACK,null,null))}remove(e){return new Yt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ht.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Nu(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Nu(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Nu(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Nu(this.root_,null,this.comparator_,!0,e)}}Yt.EMPTY_NODE=new $F;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UF(t,e){return xo(t.name,e.name)}function Cy(t,e){return xo(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hp;function VF(t){Hp=t}const SI=function(t){return typeof t=="number"?"number:"+XT(t):"string:"+t},CI=function(t){if(t.isLeafNode()){const e=t.val();M(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Dr(e,".sv"),"Priority must be a string or number.")}else M(t===Hp||t.isEmpty(),"priority of unexpected type.");M(t===Hp||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Q0;class at{constructor(e,n=at.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,M(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),CI(this.priorityNode_)}static set __childrenNodeConstructor(e){Q0=e}static get __childrenNodeConstructor(){return Q0}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new at(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:at.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return he(e)?this:pe(e)===".priority"?this.priorityNode_:at.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:at.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=pe(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(M(r!==".priority"||fi(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,at.__childrenNodeConstructor.EMPTY_NODE.updateChild(Pe(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+SI(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=XT(this.value_):e+=this.value_,this.lazyHash_=KT(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===at.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof at.__childrenNodeConstructor?-1:(M(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=at.VALUE_TYPE_ORDER.indexOf(n),s=at.VALUE_TYPE_ORDER.indexOf(r);return M(i>=0,"Unknown leaf type: "+n),M(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}at.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let TI,II;function zF(t){TI=t}function BF(t){II=t}class jF extends Zh{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?xo(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return me.MIN}maxPost(){return new me(ts,new at("[PRIORITY-POST]",II))}makePost(e,n){const r=TI(e);return new me(n,new at("[PRIORITY-POST]",r))}toString(){return".priority"}}const Ot=new jF;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WF=Math.log(2);class HF{constructor(e){const n=s=>parseInt(Math.log(s)/WF,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Gc=function(t,e,n,r){t.sort(e);const i=function(l,u){const c=u-l;let h,d;if(c===0)return null;if(c===1)return h=t[l],d=n?n(h):h,new ht(d,h.node,ht.BLACK,null,null);{const m=parseInt(c/2,10)+l,v=i(l,m),_=i(m+1,u);return h=t[m],d=n?n(h):h,new ht(d,h.node,ht.BLACK,v,_)}},s=function(l){let u=null,c=null,h=t.length;const d=function(v,_){const g=h-v,p=h;h-=v;const f=i(g+1,p),y=t[g],S=n?n(y):y;m(new ht(S,y.node,_,null,f))},m=function(v){u?(u.left=v,u=v):(c=v,u=v)};for(let v=0;v<l.count;++v){const _=l.nextBitIsOne(),g=Math.pow(2,l.count-(v+1));_?d(g,ht.BLACK):(d(g,ht.BLACK),d(g,ht.RED))}return c},o=new HF(t.length),a=s(o);return new Yt(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let of;const gs={};class pr{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return M(gs&&Ot,"ChildrenNode.ts has not been loaded"),of=of||new pr({".priority":gs},{".priority":Ot}),of}get(e){const n=io(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Yt?n:null}hasIndex(e){return Dr(this.indexSet_,e.toString())}addIndex(e,n){M(e!==Ys,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(me.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=Gc(r,e.getCompare()):a=gs;const l=e.toString(),u=Object.assign({},this.indexSet_);u[l]=e;const c=Object.assign({},this.indexes_);return c[l]=a,new pr(c,u)}addToIndexes(e,n){const r=Sc(this.indexes_,(i,s)=>{const o=io(this.indexSet_,s);if(M(o,"Missing index implementation for "+s),i===gs)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(me.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),Gc(a,o.getCompare())}else return gs;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new me(e.name,a))),l.insert(e,e.node)}});return new pr(r,this.indexSet_)}removeFromIndexes(e,n){const r=Sc(this.indexes_,i=>{if(i===gs)return i;{const s=n.get(e.name);return s?i.remove(new me(e.name,s)):i}});return new pr(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jo;class Te{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&CI(this.priorityNode_),this.children_.isEmpty()&&M(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Jo||(Jo=new Te(new Yt(Cy),null,pr.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Jo}updatePriority(e){return this.children_.isEmpty()?this:new Te(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Jo:n}}getChild(e){const n=pe(e);return n===null?this:this.getImmediateChild(n).getChild(Pe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(M(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new me(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Jo:this.priorityNode_;return new Te(i,o,s)}}updateChild(e,n){const r=pe(e);if(r===null)return n;{M(pe(e)!==".priority"||fi(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(Pe(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(Ot,(o,a)=>{n[o]=a.val(e),r++,s&&Te.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+SI(this.getPriority().val())+":"),this.forEachChild(Ot,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":KT(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new me(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new me(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new me(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,me.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,me.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ql?-1:0}withIndex(e){if(e===Ys||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new Te(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Ys||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Ot),i=n.getIterator(Ot);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ys?null:this.indexMap_.get(e.toString())}}Te.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class qF extends Te{constructor(){super(new Yt(Cy),Te.EMPTY_NODE,pr.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Te.EMPTY_NODE}isEmpty(){return!1}}const Ql=new qF;Object.defineProperties(me,{MIN:{value:new me(mo,Te.EMPTY_NODE)},MAX:{value:new me(ts,Ql)}});EI.__EMPTY_NODE=Te.EMPTY_NODE;at.__childrenNodeConstructor=Te;VF(Ql);BF(Ql);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GF=!0;function Pt(t,e=null){if(t===null)return Te.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),M(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new at(n,Pt(e))}if(!(t instanceof Array)&&GF){const n=[];let r=!1;if(En(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Pt(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new me(o,l)))}}),n.length===0)return Te.EMPTY_NODE;const s=Gc(n,UF,o=>o.name,Cy);if(r){const o=Gc(n,Ot.getCompare());return new Te(s,Pt(e),new pr({".priority":o},{".priority":Ot}))}else return new Te(s,Pt(e),pr.Default)}else{let n=Te.EMPTY_NODE;return En(t,(r,i)=>{if(Dr(t,r)&&r.substring(0,1)!=="."){const s=Pt(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(Pt(e))}}zF(Pt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KF extends Zh{constructor(e){super(),this.indexPath_=e,M(!he(e)&&pe(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?xo(e.name,n.name):s}makePost(e,n){const r=Pt(e),i=Te.EMPTY_NODE.updateChild(this.indexPath_,r);return new me(n,i)}maxPost(){const e=Te.EMPTY_NODE.updateChild(this.indexPath_,Ql);return new me(ts,e)}toString(){return yI(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QF extends Zh{compare(e,n){const r=e.node.compareTo(n.node);return r===0?xo(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return me.MIN}maxPost(){return me.MAX}makePost(e,n){const r=Pt(e);return new me(n,r)}toString(){return".value"}}const YF=new QF;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XF(t){return{type:"value",snapshotNode:t}}function JF(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function ZF(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Y0(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function e$(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ty{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ot}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return M(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return M(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:mo}hasEnd(){return this.endSet_}getIndexEndValue(){return M(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return M(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ts}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return M(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ot}copy(){const e=new Ty;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function X0(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Ot?n="$priority":t.index_===YF?n="$value":t.index_===Ys?n="$key":(M(t.index_ instanceof KF,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=yt(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=yt(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+yt(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=yt(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+yt(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function J0(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Ot&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc extends pI{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Gl("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(M(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Kc.getListenId_(e,r),a={};this.listens_[o]=a;const l=X0(e._queryParams);this.restRequest_(s+".json",l,(u,c)=>{let h=c;if(u===404&&(h=null,u=null),u===null&&this.onDataUpdate_(s,h,!1,r),io(this.listens_,o)===a){let d;u?u===401?d="permission_denied":d="rest_error:"+u:d="ok",i(d,null)}})}unlisten(e,n){const r=Kc.getListenId_(e,n);delete this.listens_[r]}get(e){const n=X0(e._queryParams),r=e._path.toString(),i=new rg;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+So(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Qa(a.responseText)}catch{un("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&un("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t${constructor(){this.rootNode_=Te.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qc(){return{value:null,children:new Map}}function kI(t,e,n){if(he(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=pe(e);t.children.has(r)||t.children.set(r,Qc());const i=t.children.get(r);e=Pe(e),kI(i,e,n)}}function qp(t,e,n){t.value!==null?n(e,t.value):n$(t,(r,i)=>{const s=new Le(e.toString()+"/"+r);qp(i,s,n)})}function n$(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r${constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&En(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z0=10*1e3,i$=30*1e3,s$=5*60*1e3;class o${constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new r$(e);const r=Z0+(i$-Z0)*Math.random();ka(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;En(e,(i,s)=>{s>0&&Dr(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),ka(this.reportStats_.bind(this),Math.floor(Math.random()*2*s$))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var qn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(qn||(qn={}));function NI(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function RI(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function AI(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=qn.ACK_USER_WRITE,this.source=NI()}operationForChild(e){if(he(this.path)){if(this.affectedTree.value!=null)return M(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Le(e));return new Yc(Ne(),n,this.revert)}}else return M(pe(this.path)===e,"operationForChild called for unrelated child."),new Yc(Pe(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=qn.OVERWRITE}operationForChild(e){return he(this.path)?new ns(this.source,Ne(),this.snap.getImmediateChild(e)):new ns(this.source,Pe(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=qn.MERGE}operationForChild(e){if(he(this.path)){const n=this.children.subtree(new Le(e));return n.isEmpty()?null:n.value?new ns(this.source,Ne(),n.value):new fl(this.source,Ne(),n)}else return M(pe(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new fl(this.source,Pe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iy{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(he(e))return this.isFullyInitialized()&&!this.filtered_;const n=pe(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function a$(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(e$(o.childName,o.snapshotNode))}),Zo(t,i,"child_removed",e,r,n),Zo(t,i,"child_added",e,r,n),Zo(t,i,"child_moved",s,r,n),Zo(t,i,"child_changed",e,r,n),Zo(t,i,"value",e,r,n),i}function Zo(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>u$(t,a,l)),o.forEach(a=>{const l=l$(t,a,s);i.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,t.query_))})})}function l$(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function u$(t,e,n){if(e.childName==null||n.childName==null)throw Eo("Should only compare child_ events.");const r=new me(e.childName,e.snapshotNode),i=new me(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DI(t,e){return{eventCache:t,serverCache:e}}function Na(t,e,n,r){return DI(new Iy(e,n,r),t.serverCache)}function xI(t,e,n,r){return DI(t.eventCache,new Iy(e,n,r))}function Gp(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function rs(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let af;const c$=()=>(af||(af=new Yt(Y2)),af);class xe{constructor(e,n=c$()){this.value=e,this.children=n}static fromObject(e){let n=new xe(null);return En(e,(r,i)=>{n=n.set(new Le(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Ne(),value:this.value};if(he(e))return null;{const r=pe(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(Pe(e),n);return s!=null?{path:dt(new Le(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(he(e))return this;{const n=pe(e),r=this.children.get(n);return r!==null?r.subtree(Pe(e)):new xe(null)}}set(e,n){if(he(e))return new xe(n,this.children);{const r=pe(e),s=(this.children.get(r)||new xe(null)).set(Pe(e),n),o=this.children.insert(r,s);return new xe(this.value,o)}}remove(e){if(he(e))return this.children.isEmpty()?new xe(null):new xe(null,this.children);{const n=pe(e),r=this.children.get(n);if(r){const i=r.remove(Pe(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new xe(null):new xe(this.value,s)}else return this}}get(e){if(he(e))return this.value;{const n=pe(e),r=this.children.get(n);return r?r.get(Pe(e)):null}}setTree(e,n){if(he(e))return n;{const r=pe(e),s=(this.children.get(r)||new xe(null)).setTree(Pe(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new xe(this.value,o)}}fold(e){return this.fold_(Ne(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(dt(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,Ne(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(he(e))return null;{const s=pe(e),o=this.children.get(s);return o?o.findOnPath_(Pe(e),dt(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Ne(),n)}foreachOnPath_(e,n,r){if(he(e))return this;{this.value&&r(n,this.value);const i=pe(e),s=this.children.get(i);return s?s.foreachOnPath_(Pe(e),dt(n,i),r):new xe(null)}}foreach(e){this.foreach_(Ne(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(dt(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(e){this.writeTree_=e}static empty(){return new Ln(new xe(null))}}function Ra(t,e,n){if(he(e))return new Ln(new xe(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=yn(i,e);return s=s.updateChild(o,n),new Ln(t.writeTree_.set(i,s))}else{const i=new xe(n),s=t.writeTree_.setTree(e,i);return new Ln(s)}}}function ew(t,e,n){let r=t;return En(n,(i,s)=>{r=Ra(r,dt(e,i),s)}),r}function tw(t,e){if(he(e))return Ln.empty();{const n=t.writeTree_.setTree(e,new xe(null));return new Ln(n)}}function Kp(t,e){return us(t,e)!=null}function us(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(yn(n.path,e)):null}function nw(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Ot,(r,i)=>{e.push(new me(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new me(r,i.value))}),e}function ii(t,e){if(he(e))return t;{const n=us(t,e);return n!=null?new Ln(new xe(n)):new Ln(t.writeTree_.subtree(e))}}function Qp(t){return t.writeTree_.isEmpty()}function go(t,e){return PI(Ne(),t.writeTree_,e)}function PI(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(M(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=PI(dt(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(dt(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bI(t,e){return $I(e,t)}function h$(t,e,n,r,i){M(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Ra(t.visibleWrites,e,n)),t.lastWriteId=r}function d$(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function f$(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);M(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&p$(a,r.path)?i=!1:Pn(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return m$(t),!0;if(r.snap)t.visibleWrites=tw(t.visibleWrites,r.path);else{const a=r.children;En(a,l=>{t.visibleWrites=tw(t.visibleWrites,dt(r.path,l))})}return!0}else return!1}function p$(t,e){if(t.snap)return Pn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Pn(dt(t.path,n),e))return!0;return!1}function m$(t){t.visibleWrites=OI(t.allWrites,g$,Ne()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function g$(t){return t.visible}function OI(t,e,n){let r=Ln.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)Pn(n,o)?(a=yn(n,o),r=Ra(r,a,s.snap)):Pn(o,n)&&(a=yn(o,n),r=Ra(r,Ne(),s.snap.getChild(a)));else if(s.children){if(Pn(n,o))a=yn(n,o),r=ew(r,a,s.children);else if(Pn(o,n))if(a=yn(o,n),he(a))r=ew(r,Ne(),s.children);else{const l=io(s.children,pe(a));if(l){const u=l.getChild(Pe(a));r=Ra(r,Ne(),u)}}}else throw Eo("WriteRecord should have .snap or .children")}}return r}function MI(t,e,n,r,i){if(!r&&!i){const s=us(t.visibleWrites,e);if(s!=null)return s;{const o=ii(t.visibleWrites,e);if(Qp(o))return n;if(n==null&&!Kp(o,Ne()))return null;{const a=n||Te.EMPTY_NODE;return go(o,a)}}}else{const s=ii(t.visibleWrites,e);if(!i&&Qp(s))return n;if(!i&&n==null&&!Kp(s,Ne()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(Pn(u.path,e)||Pn(e,u.path))},a=OI(t.allWrites,o,e),l=n||Te.EMPTY_NODE;return go(a,l)}}}function y$(t,e,n){let r=Te.EMPTY_NODE;const i=us(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Ot,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=ii(t.visibleWrites,e);return n.forEachChild(Ot,(o,a)=>{const l=go(ii(s,new Le(o)),a);r=r.updateImmediateChild(o,l)}),nw(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=ii(t.visibleWrites,e);return nw(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function v$(t,e,n,r,i){M(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=dt(e,n);if(Kp(t.visibleWrites,s))return null;{const o=ii(t.visibleWrites,s);return Qp(o)?i.getChild(n):go(o,i.getChild(n))}}function _$(t,e,n,r){const i=dt(e,n),s=us(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=ii(t.visibleWrites,i);return go(o,r.getNode().getImmediateChild(n))}else return null}function w$(t,e){return us(t.visibleWrites,e)}function E$(t,e,n,r,i,s,o){let a;const l=ii(t.visibleWrites,e),u=us(l,Ne());if(u!=null)a=u;else if(n!=null)a=go(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const c=[],h=o.getCompare(),d=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let m=d.getNext();for(;m&&c.length<i;)h(m,r)!==0&&c.push(m),m=d.getNext();return c}else return[]}function S$(){return{visibleWrites:Ln.empty(),allWrites:[],lastWriteId:-1}}function Yp(t,e,n,r){return MI(t.writeTree,t.treePath,e,n,r)}function LI(t,e){return y$(t.writeTree,t.treePath,e)}function rw(t,e,n,r){return v$(t.writeTree,t.treePath,e,n,r)}function Xc(t,e){return w$(t.writeTree,dt(t.treePath,e))}function C$(t,e,n,r,i,s){return E$(t.writeTree,t.treePath,e,n,r,i,s)}function ky(t,e,n){return _$(t.writeTree,t.treePath,e,n)}function FI(t,e){return $I(dt(t.treePath,e),t.writeTree)}function $I(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T${constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;M(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),M(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,Y0(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,ZF(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,JF(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,Y0(r,e.snapshotNode,i.oldSnap));else throw Eo("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I${getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const UI=new I$;class Ny{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Iy(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return ky(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:rs(this.viewCache_),s=C$(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}function k$(t,e){M(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),M(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function N$(t,e,n,r,i){const s=new T$;let o,a;if(n.type===qn.OVERWRITE){const u=n;u.source.fromUser?o=Xp(t,e,u.path,u.snap,r,i,s):(M(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!he(u.path),o=Jc(t,e,u.path,u.snap,r,i,a,s))}else if(n.type===qn.MERGE){const u=n;u.source.fromUser?o=A$(t,e,u.path,u.children,r,i,s):(M(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=Jp(t,e,u.path,u.children,r,i,a,s))}else if(n.type===qn.ACK_USER_WRITE){const u=n;u.revert?o=P$(t,e,u.path,r,i,s):o=D$(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===qn.LISTEN_COMPLETE)o=x$(t,e,n.path,r,s);else throw Eo("Unknown operation type: "+n.type);const l=s.getChanges();return R$(e,o,l),{viewCache:o,changes:l}}function R$(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Gp(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(XF(Gp(e)))}}function VI(t,e,n,r,i,s){const o=e.eventCache;if(Xc(r,n)!=null)return e;{let a,l;if(he(n))if(M(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=rs(e),c=u instanceof Te?u:Te.EMPTY_NODE,h=LI(r,c);a=t.filter.updateFullNode(e.eventCache.getNode(),h,s)}else{const u=Yp(r,rs(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=pe(n);if(u===".priority"){M(fi(n)===1,"Can't have a priority with additional path components");const c=o.getNode();l=e.serverCache.getNode();const h=rw(r,n,c,l);h!=null?a=t.filter.updatePriority(c,h):a=o.getNode()}else{const c=Pe(n);let h;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const d=rw(r,n,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(u).updateChild(c,d):h=o.getNode().getImmediateChild(u)}else h=ky(r,u,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),u,h,c,i,s):a=o.getNode()}}return Na(e,a,o.isFullyInitialized()||he(n),t.filter.filtersNodes())}}function Jc(t,e,n,r,i,s,o,a){const l=e.serverCache;let u;const c=o?t.filter:t.filter.getIndexedFilter();if(he(n))u=c.updateFullNode(l.getNode(),r,null);else if(c.filtersNodes()&&!l.isFiltered()){const m=l.getNode().updateChild(n,r);u=c.updateFullNode(l.getNode(),m,null)}else{const m=pe(n);if(!l.isCompleteForPath(n)&&fi(n)>1)return e;const v=Pe(n),g=l.getNode().getImmediateChild(m).updateChild(v,r);m===".priority"?u=c.updatePriority(l.getNode(),g):u=c.updateChild(l.getNode(),m,g,v,UI,null)}const h=xI(e,u,l.isFullyInitialized()||he(n),c.filtersNodes()),d=new Ny(i,h,s);return VI(t,h,n,i,d,a)}function Xp(t,e,n,r,i,s,o){const a=e.eventCache;let l,u;const c=new Ny(i,e,s);if(he(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=Na(e,u,!0,t.filter.filtersNodes());else{const h=pe(n);if(h===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),l=Na(e,u,a.isFullyInitialized(),a.isFiltered());else{const d=Pe(n),m=a.getNode().getImmediateChild(h);let v;if(he(d))v=r;else{const _=c.getCompleteChild(h);_!=null?gI(d)===".priority"&&_.getChild(vI(d)).isEmpty()?v=_:v=_.updateChild(d,r):v=Te.EMPTY_NODE}if(m.equals(v))l=e;else{const _=t.filter.updateChild(a.getNode(),h,v,d,c,o);l=Na(e,_,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function iw(t,e){return t.eventCache.isCompleteForChild(e)}function A$(t,e,n,r,i,s,o){let a=e;return r.foreach((l,u)=>{const c=dt(n,l);iw(e,pe(c))&&(a=Xp(t,a,c,u,i,s,o))}),r.foreach((l,u)=>{const c=dt(n,l);iw(e,pe(c))||(a=Xp(t,a,c,u,i,s,o))}),a}function sw(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Jp(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;he(n)?u=r:u=new xe(null).setTree(n,r);const c=e.serverCache.getNode();return u.children.inorderTraversal((h,d)=>{if(c.hasChild(h)){const m=e.serverCache.getNode().getImmediateChild(h),v=sw(t,m,d);l=Jc(t,l,new Le(h),v,i,s,o,a)}}),u.children.inorderTraversal((h,d)=>{const m=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!c.hasChild(h)&&!m){const v=e.serverCache.getNode().getImmediateChild(h),_=sw(t,v,d);l=Jc(t,l,new Le(h),_,i,s,o,a)}}),l}function D$(t,e,n,r,i,s,o){if(Xc(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(he(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Jc(t,e,n,l.getNode().getChild(n),i,s,a,o);if(he(n)){let u=new xe(null);return l.getNode().forEachChild(Ys,(c,h)=>{u=u.set(new Le(c),h)}),Jp(t,e,n,u,i,s,a,o)}else return e}else{let u=new xe(null);return r.foreach((c,h)=>{const d=dt(n,c);l.isCompleteForPath(d)&&(u=u.set(c,l.getNode().getChild(d)))}),Jp(t,e,n,u,i,s,a,o)}}function x$(t,e,n,r,i){const s=e.serverCache,o=xI(e,s.getNode(),s.isFullyInitialized()||he(n),s.isFiltered());return VI(t,o,n,r,UI,i)}function P$(t,e,n,r,i,s){let o;if(Xc(r,n)!=null)return e;{const a=new Ny(r,e,i),l=e.eventCache.getNode();let u;if(he(n)||pe(n)===".priority"){let c;if(e.serverCache.isFullyInitialized())c=Yp(r,rs(e));else{const h=e.serverCache.getNode();M(h instanceof Te,"serverChildren would be complete if leaf node"),c=LI(r,h)}c=c,u=t.filter.updateFullNode(l,c,s)}else{const c=pe(n);let h=ky(r,c,e.serverCache);h==null&&e.serverCache.isCompleteForChild(c)&&(h=l.getImmediateChild(c)),h!=null?u=t.filter.updateChild(l,c,h,Pe(n),a,s):e.eventCache.getNode().hasChild(c)?u=t.filter.updateChild(l,c,Te.EMPTY_NODE,Pe(n),a,s):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Yp(r,rs(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||Xc(r,Ne())!=null,Na(e,u,o,t.filter.filtersNodes())}}function b$(t,e){const n=rs(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!he(e)&&!n.getImmediateChild(pe(e)).isEmpty())?n.getChild(e):null}function ow(t,e,n,r){e.type===qn.MERGE&&e.source.queryId!==null&&(M(rs(t.viewCache_),"We should always have a full cache before handling merges"),M(Gp(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=N$(t.processor_,i,e,n,r);return k$(t.processor_,s.viewCache),M(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,O$(t,s.changes,s.viewCache.eventCache.getNode(),null)}function O$(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return a$(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let aw;function M$(t){M(!aw,"__referenceConstructor has already been defined"),aw=t}function Ry(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return M(s!=null,"SyncTree gave us an op for an invalid query."),ow(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(ow(o,e,n,r));return s}}function Ay(t,e){let n=null;for(const r of t.views.values())n=n||b$(r,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lw;function L$(t){M(!lw,"__referenceConstructor has already been defined"),lw=t}class uw{constructor(e){this.listenProvider_=e,this.syncPointTree_=new xe(null),this.pendingWriteTree_=S$(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function F$(t,e,n,r,i){return h$(t.pendingWriteTree_,e,n,r,i),i?td(t,new ns(NI(),e,n)):[]}function Ls(t,e,n=!1){const r=d$(t.pendingWriteTree_,e);if(f$(t.pendingWriteTree_,e)){let s=new xe(null);return r.snap!=null?s=s.set(Ne(),!0):En(r.children,o=>{s=s.set(new Le(o),!0)}),td(t,new Yc(r.path,s,n))}else return[]}function ed(t,e,n){return td(t,new ns(RI(),e,n))}function $$(t,e,n){const r=xe.fromObject(n);return td(t,new fl(RI(),e,r))}function U$(t,e,n,r){const i=WI(t,r);if(i!=null){const s=HI(i),o=s.path,a=s.queryId,l=yn(o,e),u=new ns(AI(a),l,n);return qI(t,o,u)}else return[]}function V$(t,e,n,r){const i=WI(t,r);if(i){const s=HI(i),o=s.path,a=s.queryId,l=yn(o,e),u=xe.fromObject(n),c=new fl(AI(a),l,u);return qI(t,o,c)}else return[]}function zI(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=yn(o,e),u=Ay(a,l);if(u)return u});return MI(i,e,s,n,!0)}function td(t,e){return BI(e,t.syncPointTree_,null,bI(t.pendingWriteTree_,Ne()))}function BI(t,e,n,r){if(he(t.path))return jI(t,e,n,r);{const i=e.get(Ne());n==null&&i!=null&&(n=Ay(i,Ne()));let s=[];const o=pe(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,c=FI(r,o);s=s.concat(BI(a,l,u,c))}return i&&(s=s.concat(Ry(i,t,r,n))),s}}function jI(t,e,n,r){const i=e.get(Ne());n==null&&i!=null&&(n=Ay(i,Ne()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=FI(r,o),c=t.operationForChild(o);c&&(s=s.concat(jI(c,a,l,u)))}),i&&(s=s.concat(Ry(i,t,r,n))),s}function WI(t,e){return t.tagToQueryMap.get(e)}function HI(t){const e=t.indexOf("$");return M(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Le(t.substr(0,e))}}function qI(t,e,n){const r=t.syncPointTree_.get(e);M(r,"Missing sync point for query tag that we're tracking");const i=bI(t.pendingWriteTree_,e);return Ry(r,n,i,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dy{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Dy(n)}node(){return this.node_}}class xy{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=dt(this.path_,e);return new xy(this.syncTree_,n)}node(){return zI(this.syncTree_,this.path_)}}const z$=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},cw=function(t,e,n){if(!t||typeof t!="object")return t;if(M(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return B$(t[".sv"],e,n);if(typeof t[".sv"]=="object")return j$(t[".sv"],e);M(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},B$=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:M(!1,"Unexpected server value: "+t)}},j$=function(t,e,n){t.hasOwnProperty("increment")||M(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&M(!1,"Unexpected increment value: "+r);const i=e.node();if(M(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},W$=function(t,e,n,r){return Py(e,new xy(n,t),r)},H$=function(t,e,n){return Py(t,new Dy(e),n)};function Py(t,e,n){const r=t.getPriority().val(),i=cw(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=cw(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new at(a,Pt(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new at(i))),o.forEachChild(Ot,(a,l)=>{const u=Py(l,e.getImmediateChild(a),n);u!==l&&(s=s.updateImmediateChild(a,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class by{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Oy(t,e){let n=e instanceof Le?e:new Le(e),r=t,i=pe(n);for(;i!==null;){const s=io(r.node.children,i)||{children:{},childCount:0};r=new by(i,r,s),n=Pe(n),i=pe(n)}return r}function Po(t){return t.node.value}function GI(t,e){t.node.value=e,Zp(t)}function KI(t){return t.node.childCount>0}function q$(t){return Po(t)===void 0&&!KI(t)}function nd(t,e){En(t.node.children,(n,r)=>{e(new by(n,t,r))})}function QI(t,e,n,r){n&&!r&&e(t),nd(t,i=>{QI(i,e,!0,r)}),n&&r&&e(t)}function G$(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Yl(t){return new Le(t.parent===null?t.name:Yl(t.parent)+"/"+t.name)}function Zp(t){t.parent!==null&&K$(t.parent,t.name,t)}function K$(t,e,n){const r=q$(n),i=Dr(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Zp(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Zp(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q$=/[\[\].#$\/\u0000-\u001F\u007F]/,Y$=/[\[\].#$\u0000-\u001F\u007F]/,lf=10*1024*1024,YI=function(t){return typeof t=="string"&&t.length!==0&&!Q$.test(t)},X$=function(t){return typeof t=="string"&&t.length!==0&&!Y$.test(t)},J$=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),X$(t)},XI=function(t,e,n){const r=n instanceof Le?new xF(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+ki(r));if(typeof e=="function")throw new Error(t+"contains a function "+ki(r)+" with contents = "+e.toString());if(QT(e))throw new Error(t+"contains "+e.toString()+" "+ki(r));if(typeof e=="string"&&e.length>lf/3&&vh(e)>lf)throw new Error(t+"contains a string greater than "+lf+" utf8 bytes "+ki(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(En(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!YI(o)))throw new Error(t+" contains an invalid key ("+o+") "+ki(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);PF(r,o),XI(t,a,r),bF(r)}),i&&s)throw new Error(t+' contains ".value" child '+ki(r)+" in addition to actual children.")}},Z$=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!YI(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!J$(n))throw new Error(ND(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eU{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function tU(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!_I(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function cs(t,e,n){tU(t,n),nU(t,r=>Pn(r,e)||Pn(e,r))}function nU(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(rU(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function rU(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Vi&&xt("event: "+n.toString()),Kl(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iU="repo_interrupt",sU=25;class oU{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new eU,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Qc(),this.transactionQueueTree_=new by,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function aU(t,e,n){if(t.stats_=wy(t.repoInfo_),t.forceRestClient_||nF())t.server_=new Kc(t.repoInfo_,(r,i,s,o)=>{hw(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>dw(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{yt(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new yr(t.repoInfo_,e,(r,i,s,o)=>{hw(t,r,i,s,o)},r=>{dw(t,r)},r=>{uU(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=aF(t.repoInfo_,()=>new o$(t.stats_,t.server_)),t.infoData_=new t$,t.infoSyncTree_=new uw({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=ed(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),My(t,"connected",!1),t.serverSyncTree_=new uw({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const u=o(a,l);cs(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function lU(t){const n=t.infoData_.getNode(new Le(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function JI(t){return z$({timestamp:lU(t)})}function hw(t,e,n,r,i){t.dataUpdateCount++;const s=new Le(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=Sc(n,u=>Pt(u));o=V$(t.serverSyncTree_,s,l,i)}else{const l=Pt(n);o=U$(t.serverSyncTree_,s,l,i)}else if(r){const l=Sc(n,u=>Pt(u));o=$$(t.serverSyncTree_,s,l)}else{const l=Pt(n);o=ed(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=Fy(t,s)),cs(t.eventQueue_,a,o)}function dw(t,e){My(t,"connected",e),e===!1&&hU(t)}function uU(t,e){En(e,(n,r)=>{My(t,n,r)})}function My(t,e,n){const r=new Le("/.info/"+e),i=Pt(n);t.infoData_.updateSnapshot(r,i);const s=ed(t.infoSyncTree_,r,i);cs(t.eventQueue_,r,s)}function cU(t){return t.nextWriteId_++}function hU(t){ZI(t,"onDisconnectEvents");const e=JI(t),n=Qc();qp(t.onDisconnect_,Ne(),(i,s)=>{const o=W$(i,s,t.serverSyncTree_,e);kI(n,i,o)});let r=[];qp(n,Ne(),(i,s)=>{r=r.concat(ed(t.serverSyncTree_,i,s));const o=mU(t,i);Fy(t,o)}),t.onDisconnect_=Qc(),cs(t.eventQueue_,Ne(),r)}function dU(t){t.persistentConnection_&&t.persistentConnection_.interrupt(iU)}function ZI(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),xt(n,...e)}function ek(t,e,n){return zI(t.serverSyncTree_,e,n)||Te.EMPTY_NODE}function Ly(t,e=t.transactionQueueTree_){if(e||rd(t,e),Po(e)){const n=nk(t,e);M(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&fU(t,Yl(e),n)}else KI(e)&&nd(e,n=>{Ly(t,n)})}function fU(t,e,n){const r=n.map(u=>u.currentWriteId),i=ek(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const c=n[u];M(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const h=yn(e,c.path);s=s.updateChild(h,c.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,u=>{ZI(t,"transaction put response",{path:l.toString(),status:u});let c=[];if(u==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,c=c.concat(Ls(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();rd(t,Oy(t.transactionQueueTree_,e)),Ly(t,t.transactionQueueTree_),cs(t.eventQueue_,e,c);for(let d=0;d<h.length;d++)Kl(h[d])}else{if(u==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{un("transaction at "+l.toString()+" failed: "+u);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=u}Fy(t,e)}},o)}function Fy(t,e){const n=tk(t,e),r=Yl(n),i=nk(t,n);return pU(t,i,r),r}function pU(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=yn(n,l.path);let c=!1,h;if(M(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)c=!0,h=l.abortReason,i=i.concat(Ls(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=sU)c=!0,h="maxretry",i=i.concat(Ls(t.serverSyncTree_,l.currentWriteId,!0));else{const d=ek(t,l.path,o);l.currentInputSnapshot=d;const m=e[a].update(d.val());if(m!==void 0){XI("transaction failed: Data returned ",m,l.path);let v=Pt(m);typeof m=="object"&&m!=null&&Dr(m,".priority")||(v=v.updatePriority(d.getPriority()));const g=l.currentWriteId,p=JI(t),f=H$(v,d,p);l.currentOutputSnapshotRaw=v,l.currentOutputSnapshotResolved=f,l.currentWriteId=cU(t),o.splice(o.indexOf(g),1),i=i.concat(F$(t.serverSyncTree_,l.path,f,l.currentWriteId,l.applyLocally)),i=i.concat(Ls(t.serverSyncTree_,g,!0))}else c=!0,h="nodata",i=i.concat(Ls(t.serverSyncTree_,l.currentWriteId,!0))}cs(t.eventQueue_,n,i),i=[],c&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(h),!1,null))))}rd(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)Kl(r[a]);Ly(t,t.transactionQueueTree_)}function tk(t,e){let n,r=t.transactionQueueTree_;for(n=pe(e);n!==null&&Po(r)===void 0;)r=Oy(r,n),e=Pe(e),n=pe(e);return r}function nk(t,e){const n=[];return rk(t,e,n),n.sort((r,i)=>r.order-i.order),n}function rk(t,e,n){const r=Po(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);nd(e,i=>{rk(t,i,n)})}function rd(t,e){const n=Po(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,GI(e,n.length>0?n:void 0)}nd(e,r=>{rd(t,r)})}function mU(t,e){const n=Yl(tk(t,e)),r=Oy(t.transactionQueueTree_,e);return G$(r,i=>{uf(t,i)}),uf(t,r),QI(r,i=>{uf(t,i)}),n}function uf(t,e){const n=Po(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(M(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(M(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Ls(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?GI(e,void 0):n.length=s+1,cs(t.eventQueue_,Yl(e),i);for(let o=0;o<r.length;o++)Kl(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gU(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function yU(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):un(`Invalid query segment '${n}' in query '${t}'`)}return e}const fw=function(t,e){const n=vU(t),r=n.namespace;n.domain==="firebase.com"&&Nr(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Nr("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||K2();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new aI(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new Le(n.pathString)}},vU=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let c=t.indexOf("/");c===-1&&(c=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(c,h)),c<h&&(i=gU(t.substring(c,h)));const d=yU(t.substring(Math.min(t.length,h)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const m=e.slice(0,u);if(m.toLowerCase()==="localhost")n="localhost";else if(m.split(".").length<=2)n=m;else{const v=e.indexOf(".");r=e.substring(0,v).toLowerCase(),n=e.substring(v+1),s=r}"ns"in d&&(s=d.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $y{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return he(this._path)?null:gI(this._path)}get ref(){return new bo(this._repo,this._path)}get _queryIdentifier(){const e=J0(this._queryParams),n=vy(e);return n==="{}"?"default":n}get _queryObject(){return J0(this._queryParams)}isEqual(e){if(e=Je(e),!(e instanceof $y))return!1;const n=this._repo===e._repo,r=_I(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+DF(this._path)}}class bo extends $y{constructor(e,n){super(e,n,new Ty,!1)}get parent(){const e=vI(this._path);return e===null?null:new bo(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}M$(bo);L$(bo);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _U="FIREBASE_DATABASE_EMULATOR_HOST",em={};let wU=!1;function EU(t,e,n,r){t.repoInfo_=new aI(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function SU(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Nr("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),xt("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=fw(s,i),a=o.repoInfo,l,u;typeof process<"u"&&process.env&&(u=process.env[_U]),u?(l=!0,s=`http://${u}?ns=${a.namespace}`,o=fw(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const c=i&&l?new Qs(Qs.OWNER):new iF(t.name,t.options,e);Z$("Invalid Firebase Database URL",o),he(o.path)||Nr("Database URL must point to the root of a Firebase Database (not including a child path).");const h=TU(a,t,c,new rF(t.name,n));return new IU(h,t)}function CU(t,e){const n=em[e];(!n||n[t.key]!==t)&&Nr(`Database ${e}(${t.repoInfo_}) has already been deleted.`),dU(t),delete n[t.key]}function TU(t,e,n,r){let i=em[e.name];i||(i={},em[e.name]=i);let s=i[t.toURLString()];return s&&Nr("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new oU(t,wU,n,r),i[t.toURLString()]=s,s}class IU{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(aU(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new bo(this._repo,Ne())),this._rootInternal}_delete(){return this._rootInternal!==null&&(CU(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Nr("Cannot call "+e+" on a deleted database.")}}function kU(t=og(),e){const n=wh(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=H1("database");r&&NU(n,...r)}return n}function NU(t,e,n,r={}){t=Je(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Nr("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Nr('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Qs(Qs.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:G1(r.mockUserToken,t.app.options.projectId);s=new Qs(o)}EU(i,e,n,s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RU(t){j2(Co),Qi(new ui("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return SU(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Qn(O0,M0,t),Qn(O0,M0,"esm2017")}yr.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};yr.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};RU();const AU={apiKey:"AIzaSyB9mhGhX7XmhYk2c32gGnNbLJVdwbzU2rg",authDomain:"react-home-dashboard.firebaseapp.com",projectId:"react-home-dashboard",storageBucket:"react-home-dashboard.appspot.com",messagingSenderId:"1043759629603",appId:"1:1043759629603:web:e5c9b3c9e1928849f5b896"},Uy=Z1(AU),tm=xS(Uy),Kt=T2(Uy);kU(Uy);const DU=()=>{const[t,e]=E.useState(!0),[n,r]=E.useState(null),[i,s]=E.useState(!0),o=$A();return E.useEffect(()=>{const a=IP(tm,l=>{s(!1),l!==null?(r(l),e(!!l)):(r(null),e(!1)),console.log("Our user is: ",l)});return i||o(t?"/":"/login"),a},[t,i]),w(_l.Provider,{value:n,children:i?w("div",{children:"Loading..."}):w(XA,{})})},xU=()=>{const[t,e]=E.useState(""),[n,r]=E.useState("");function i(){EP(tm,t,n).then(({user:o})=>{console.log(o)})}function s(){SP(tm,t,n).then(({user:o})=>{console.log(o)})}return w("div",{className:"container",children:K("div",{className:"login widget",children:[w("div",{children:"Login / Create Account"}),w("input",{type:"email",value:t,onChange:o=>e(o.target.value),placeholder:"Email"}),w("input",{type:"password",value:n,onChange:o=>r(o.target.value),placeholder:"Password"}),K("div",{className:"login-controls",children:[w("button",{className:"secondary",onClick:i,children:"Create Account"}),w("button",{onClick:s,children:"Sign In"})]})]})})};var ik={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},pw=lt.createContext&&lt.createContext(ik),si=globalThis&&globalThis.__assign||function(){return si=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},si.apply(this,arguments)},PU=globalThis&&globalThis.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n};function sk(t){return t&&t.map(function(e,n){return lt.createElement(e.tag,si({key:n},e.attr),sk(e.child))})}function tr(t){return function(e){return lt.createElement(bU,si({attr:si({},t.attr)},e),sk(t.child))}}function bU(t){var e=function(n){var r=t.attr,i=t.size,s=t.title,o=PU(t,["attr","size","title"]),a=i||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),lt.createElement("svg",si({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:l,style:si(si({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&lt.createElement("title",null,s),t.children)};return pw!==void 0?lt.createElement(pw.Consumer,null,function(n){return e(n)}):e(ik)}function OU(t){return tr({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88a9.947 9.947 0 0112.28 0C16.43 19.18 14.03 20 12 20z"}}]})(t)}function ok(t){return tr({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}}]})(t)}function MU(t){return tr({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"}}]})(t)}function LU(t){return tr({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 00.12-.61l-1.92-3.32a.488.488 0 00-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 00-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 00-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"}}]})(t)}function FU(t){return tr({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}}]})(t)}function Vy(t){return tr({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}}]})(t)}function mw(t){return tr({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M12 5V2L8 6l4 4V7c3.31 0 6 2.69 6 6 0 2.97-2.17 5.43-5 5.91v2.02c3.95-.49 7-3.85 7-7.93 0-4.42-3.58-8-8-8zM6 13c0-1.65.67-3.15 1.76-4.24L6.34 7.34A8.014 8.014 0 004 13c0 4.08 3.05 7.44 7 7.93v-2.02c-2.83-.48-5-2.94-5-5.91z"}}]})(t)}function $U(t){return tr({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 000-1.41l-2.34-2.34a.996.996 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}}]})(t)}function oi(t){return tr({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}}]})(t)}function UU(t){return tr({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"}}]})(t)}const VU=()=>{const t=E.useContext(_l),[e,n]=E.useState(0),[r,i]=E.useState([]),[s,o]=E.useState(""),[a,l]=E.useState(""),[u,c]=E.useState(""),[h,d]=E.useState(!1),[m,v]=E.useState(null),[_,g]=E.useState();E.useEffect(()=>{f()},[]),E.useEffect(()=>{clearTimeout(_),m!=null&&g(setTimeout(()=>{v(null)},3e3))},[m]),E.useEffect(()=>{e===0&&(l(""),c(""))},[e]);function p(T,R){v({message:T,type:R})}async function f(){const T=await py(hy(fo(Kt,"grocery_items"),dy("creatorId","==",t.uid))),R=[];T.forEach(re=>{R.push({...re.data(),id:re.id})}),i(R)}async function y(){if(!s)return;const T={content:s,isCompleted:!1,creatorId:t.uid},R=await gy(fo(Kt,"grocery_items"),T);T.id=R.id,i([...r,T])}async function S(T){T.isCompleted=!0,my(gr(Kt,"grocery_items",T.id));const R=r.filter(re=>re.id!=T.id);i(R),p(`Completed ${T.content}`,"success")}function I(T){n(2),l(T.id),c(T.content)}async function D(T){const R=gr(Kt,"grocery_items",a);try{await hl(R,{content:T}),i([]),f(),n(0),p(`Updated "${T}"`,"success")}catch(re){alert(re),p(`Error: Could not update "${T}"`,"error")}}return K(Qe,{children:[K("div",{className:"widget__header",children:[w("div",{className:"widget__title",children:"Grocery List"}),w("div",{className:"widget__action",children:e===0?w("button",{onClick:()=>n(1),children:w(Vy,{className:"widget__action__icon"})}):e===1?w("button",{onClick:()=>n(0),children:w(oi,{className:"widget__action__icon"})}):e===2?w("button",{onClick:()=>n(0),children:w(oi,{className:"widget__action__icon"})}):w(Qe,{})})]}),w("div",{className:"widget__content",children:e===0?w("div",{children:r.map(T=>K("span",{className:"checklist-item",children:[w("input",{type:"checkbox",checked:T.isCompleted,onChange:()=>S(T)}),w("p",{className:"todo-info",onClick:()=>{I(T)},children:T.content})]},T.id))}):e===1?w("div",{className:"flip",children:K("form",{onSubmit:T=>{s!=null&&y(),h||n(0),o(""),T.preventDefault()},children:[w("input",{type:"text",placeholder:"Grocery item...",value:s,onChange:T=>o(T.target.value)}),w("input",{type:"submit",value:"Save"}),K("p",{className:"add-another",children:[w("input",{type:"checkbox",checked:h,onChange:()=>{d(!h)}}),"Add another"]})]})}):e===2?w("div",{className:"flip",children:K("form",{onSubmit:T=>{u!=null&&D(u),T.preventDefault()},children:[w("input",{type:"text",value:u,onChange:T=>c(T.target.value)}),w("input",{type:"submit",value:"Save"})]})}):w(Qe,{})}),m!=null?w("div",{className:`toast toast--${m.type}`,children:m.message}):w(Qe,{})]})},zU=()=>{const t=E.useContext(_l),[e,n]=E.useState(0),[r,i]=E.useState([]),[s,o]=E.useState(""),[a,l]=E.useState(0),[u,c]=E.useState(""),[h,d]=E.useState(""),[m,v]=E.useState(0),[_,g]=E.useState(!1),[p,f]=E.useState(null),[y,S]=E.useState();E.useEffect(()=>{D()},[]),E.useEffect(()=>{clearTimeout(y),p!=null&&S(setTimeout(()=>{f(null)},3e3))},[p]),E.useEffect(()=>{e===0&&(c(""),d(""),v(0))},[e]);function I(V,ve){f({message:V,type:ve})}async function D(){const V=await py(hy(fo(Kt,"pets"),dy("creatorId","==",t.uid))),ve=[];V.forEach(Se=>{ve.push({...Se.data(),id:Se.id})}),i(ve)}async function T(){if(!s)return;const V={name:s,freq_hr:1,was_fed:!1,creatorId:t.uid},ve=await gy(fo(Kt,"pets"),V);V.id=ve.id,i([...r,V])}function R(V){n(2),c(V.id),d(V.name),v(V.freq_hr)}async function re(V){V.was_fed=!V.was_fed,i([...r]);const ve=gr(Kt,"pets",V.id);try{await hl(ve,{was_fed:V.was_fed}),V.was_fed?I(`Fed ${V.name}`,"success"):I(`Marked ${V.name} as unfed`,"info")}catch(Se){alert(Se),I(`Error: Could not update ${V.name}`,"error")}}async function Q(V){const ve=gr(Kt,"pets",u);try{await hl(ve,{name:V}),i([]),D(),n(0),I(`Updated "${V}"`,"success")}catch(Se){alert(Se),I(`Error: Could not update "${V}"`,"error")}}function Ee(V,ve){confirm(`Are you sure you want to delete ${ve}?`)&&ot(V)}async function ot(V){try{await my(gr(Kt,"pets",V)),I(`Deleted ${h}`,"success");const ve=r.filter(Se=>Se.id!=V);i(ve),d(""),c(""),n(0)}catch(ve){alert(ve),I(`Error: Unable to delete ${h}`,"error")}}return K(Qe,{children:[K("div",{className:"widget__header",children:[w("div",{className:"widget__title",children:"Pet Feeding Tracker"}),w("div",{className:"widget__action",children:e===0?w("button",{onClick:()=>n(1),children:w(Vy,{className:"widget__action__icon"})}):e===1?w("button",{onClick:()=>n(0),children:w(oi,{className:"widget__action__icon"})}):e===2?w("button",{onClick:()=>n(0),children:w(oi,{className:"widget__action__icon"})}):w(Qe,{})})]}),w("div",{className:"widget__content",children:e===0?w("div",{children:r.map(V=>K("div",{className:V.was_fed?"pet fed":"pet unfed",children:[w("p",{className:"pet__name",onClick:()=>{re(V)},children:V.name}),w("button",{className:"pet__action",onClick:()=>{R(V)},children:w($U,{})})]},V.id))}):e===1?w("div",{className:"flip",children:K("form",{onSubmit:V=>{s!=null&&T(),_||n(0),o(""),l(0),V.preventDefault()},children:[w("input",{type:"text",placeholder:"Pet name...",value:s,onChange:V=>o(V.target.value)}),K("p",{className:"add-another",children:[w("input",{type:"checkbox",checked:_,onChange:()=>{g(!_)}}),"Add another"]}),w("input",{className:"fw-btn",type:"submit",value:"Save"})]})}):e===2?K("div",{className:"flip",children:[K("form",{onSubmit:V=>{h!=null&&Q(h),V.preventDefault()},children:[w("input",{type:"text",value:h,onChange:V=>d(V.target.value)}),w("input",{type:"submit",value:"Save"})]}),w("p",{children:K("button",{className:"fw-btn err-btn",onClick:()=>{Ee(u,h)},children:["Delete ",w(ok,{})]})})]}):w(Qe,{})}),p!=null?w("div",{className:`toast toast--${p.type}`,children:p.message}):w(Qe,{})]})},BU="b7a04089d7546d97af027ed92d836cf0",jU=()=>{const[t,e]=E.useState(0),[n,r]=E.useState(0),[i,s]=E.useState(""),[o,a]=E.useState(0),[l,u]=E.useState(0),[c,h]=E.useState(0),[d,m]=E.useState("");E.useEffect(()=>{navigator.geolocation.getCurrentPosition(p,f)}),E.useEffect(()=>{v(t,n)},[n,t]);const v=(y,S)=>{fetch("https://api.openweathermap.org/data/2.5/weather?lat="+S+"&lon="+y+"&appid="+BU).then(function(I){return I.json()}).then(function(I){console.log("data of weather incoming"),console.log(I),_(I)}).catch(function(){console.error("error occured in api call")})},_=y=>{a(g(y.main.temp)),u(g(y.main.temp_max)),h(g(y.main.temp_min)),s(y.weather[0].description),m(y.weather[0].icon)},g=y=>Math.round((parseFloat(y)-273.15)*1.8+32);function p(y){console.log("position is:"),console.log(y),e(y.coords.longitude),r(y.coords.latitude),console.log(t,n)}const f=y=>{console.error(y)};return w(Qe,{children:t==0&&n==0?w("div",{className:"widget__content",children:" Loading Weather "}):K("div",{className:"widget__content weather",children:[K("div",{className:"weather-conditions",children:[K("div",{className:"currentTemp",children:[o,"°"]}),w("div",{className:"descript",children:i}),w("br",{}),K("div",{className:"highLowTemp",children:["High: ",l,"° Low: ",c,"°"]})]}),w("div",{className:"weather-icon",children:w("img",{className:"weather-icon__image",src:`https://openweathermap.org/img/wn/${d}@2x.png`})})]})})},WU=()=>{const[t,e]=E.useState(59);return K(Qe,{children:["Timer widget ",t]})};function Aa(){return Aa=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Aa.apply(this,arguments)}var HU=function(e,n){n===void 0&&(n=!0),E.useEffect(function(){if(n){var r=function(s){s.key==="Escape"&&e(s)};return document.addEventListener("keyup",r),function(){n&&document.removeEventListener("keyup",r)}}},[e,n])},qU=function(e,n){n===void 0&&(n=!0),E.useEffect(function(){if(n){var r=function(){e()};return window.addEventListener("resize",r),function(){n&&window.removeEventListener("resize",r)}}},[e,n])},GU=function(e,n,r){r===void 0&&(r=!0),E.useEffect(function(){if(r){var i=function(o){var a=Array.isArray(e)?e:[e],l=!1;a.forEach(function(u){if(!u.current||u.current.contains(o.target)){l=!0;return}}),o.stopPropagation(),l||n(o)};return document.addEventListener("mousedown",i),document.addEventListener("touchstart",i),function(){r&&(document.removeEventListener("mousedown",i),document.removeEventListener("touchstart",i))}}},[e,n,r])},KU=function(e,n){n===void 0&&(n=!0),E.useEffect(function(){if(n){var r=function(s){if(s.keyCode===9){var o,a=e==null||(o=e.current)===null||o===void 0?void 0:o.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]'),l=Array.prototype.slice.call(a);if(l.length===1){s.preventDefault();return}var u=l[0],c=l[l.length-1];s.shiftKey&&document.activeElement===u?(s.preventDefault(),c.focus()):document.activeElement===c&&(s.preventDefault(),u.focus())}};return document.addEventListener("keydown",r),function(){n&&document.removeEventListener("keydown",r)}}},[e,n])},QU=typeof window<"u"?E.useLayoutEffect:E.useEffect,ea={popupContent:{tooltip:{position:"absolute",zIndex:999},modal:{position:"relative",margin:"auto"}},popupArrow:{height:"8px",width:"16px",position:"absolute",background:"transparent",color:"#FFF",zIndex:-1},overlay:{tooltip:{position:"fixed",top:"0",bottom:"0",left:"0",right:"0",zIndex:999},modal:{position:"fixed",top:"0",bottom:"0",left:"0",right:"0",display:"flex",zIndex:999}}},YU=["top left","top center","top right","right top","right center","right bottom","bottom left","bottom center","bottom right","left top","left center","left bottom"],XU=function(e,n,r,i,s){var o=s.offsetX,a=s.offsetY,l=i?8:0,u=r.split(" "),c=e.top+e.height/2,h=e.left+e.width/2,d=n.height,m=n.width,v=c-d/2,_=h-m/2,g="",p="0%",f="0%";switch(u[0]){case"top":v-=d/2+e.height/2+l,g="rotate(180deg)  translateX(50%)",p="100%",f="50%";break;case"bottom":v+=d/2+e.height/2+l,g="rotate(0deg) translateY(-100%) translateX(-50%)",f="50%";break;case"left":_-=m/2+e.width/2+l,g=" rotate(90deg)  translateY(50%) translateX(-25%)",f="100%",p="50%";break;case"right":_+=m/2+e.width/2+l,g="rotate(-90deg)  translateY(-150%) translateX(25%)",p="50%";break}switch(u[1]){case"top":v=e.top,p=e.height/2+"px";break;case"bottom":v=e.top-d+e.height,p=d-e.height/2+"px";break;case"left":_=e.left,f=e.width/2+"px";break;case"right":_=e.left-m+e.width,f=m-e.width/2+"px";break}return v=u[0]==="top"?v-a:v+a,_=u[0]==="left"?_-o:_+o,{top:v,left:_,transform:g,arrowLeft:f,arrowTop:p}},JU=function(e){var n={top:0,left:0,width:window.innerWidth,height:window.innerHeight};if(typeof e=="string"){var r=document.querySelector(e);r!==null&&(n=r.getBoundingClientRect())}return n},ZU=function(e,n,r,i,s,o){var a=s.offsetX,l=s.offsetY,u={arrowLeft:"0%",arrowTop:"0%",left:0,top:0,transform:"rotate(135deg)"},c=0,h=JU(o),d=Array.isArray(r)?r:[r];for((o||Array.isArray(r))&&(d=[].concat(d,YU));c<d.length;){u=XU(e,n,d[c],i,{offsetX:a,offsetY:l});var m={top:u.top,left:u.left,width:n.width,height:n.height};if(m.top<=h.top||m.left<=h.left||m.top+m.height>=h.top+h.height||m.left+m.width>=h.left+h.width)c++;else break}return u},eV=0,tV=function(){var e=document.getElementById("popup-root");return e===null&&(e=document.createElement("div"),e.setAttribute("id","popup-root"),document.body.appendChild(e)),e},nV=E.forwardRef(function(t,e){var n=t.trigger,r=n===void 0?null:n,i=t.onOpen,s=i===void 0?function(){}:i,o=t.onClose,a=o===void 0?function(){}:o,l=t.defaultOpen,u=l===void 0?!1:l,c=t.open,h=c===void 0?void 0:c,d=t.disabled,m=d===void 0?!1:d,v=t.nested,_=v===void 0?!1:v,g=t.closeOnDocumentClick,p=g===void 0?!0:g,f=t.repositionOnResize,y=f===void 0?!0:f,S=t.closeOnEscape,I=S===void 0?!0:S,D=t.on,T=D===void 0?["click"]:D,R=t.contentStyle,re=R===void 0?{}:R,Q=t.arrowStyle,Ee=Q===void 0?{}:Q,ot=t.overlayStyle,V=ot===void 0?{}:ot,ve=t.className,Se=ve===void 0?"":ve,en=t.position,nr=en===void 0?"bottom center":en,O=t.modal,W=O===void 0?!1:O,$=t.lockScroll,_e=$===void 0?!1:$,x=t.arrow,Z=x===void 0?!0:x,oe=t.offsetX,tn=oe===void 0?0:oe,Ze=t.offsetY,Sn=Ze===void 0?0:Ze,Xl=t.mouseEnterDelay,id=Xl===void 0?100:Xl,Jl=t.mouseLeaveDelay,wi=Jl===void 0?100:Jl,Oo=t.keepTooltipInside,Mo=Oo===void 0?!1:Oo,xr=t.children,hs=E.useState(h||u),Vt=hs[0],Lo=hs[1],Cn=E.useRef(null),St=E.useRef(null),rr=E.useRef(null),Pr=E.useRef(null),Ei=E.useRef("popup-"+ ++eV),Ct=W?!0:!r,ir=E.useRef(0);QU(function(){return Vt?(Pr.current=document.activeElement,Y(),B(),A()):U(),function(){clearTimeout(ir.current)}},[Vt]),E.useEffect(function(){typeof h=="boolean"&&(h?ds():Vn())},[h,m]);var ds=function(H){Vt||m||(Lo(!0),setTimeout(function(){return s(H)},0))},Vn=function(H){var Re;!Vt||m||(Lo(!1),Ct&&((Re=Pr.current)===null||Re===void 0||Re.focus()),setTimeout(function(){return a(H)},0))},fs=function(H){H==null||H.stopPropagation(),Vt?Vn(H):ds(H)},Fo=function(H){clearTimeout(ir.current),ir.current=setTimeout(function(){return ds(H)},id)},C=function(H){H==null||H.preventDefault(),fs()},k=function(H){clearTimeout(ir.current),ir.current=setTimeout(function(){return Vn(H)},wi)},A=function(){Ct&&_e&&(document.getElementsByTagName("body")[0].style.overflow="hidden")},U=function(){Ct&&_e&&(document.getElementsByTagName("body")[0].style.overflow="auto")},B=function(){var H,Re=St==null||(H=St.current)===null||H===void 0?void 0:H.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]'),Fe=Array.prototype.slice.call(Re)[0];Fe==null||Fe.focus()};E.useImperativeHandle(e,function(){return{open:function(){ds()},close:function(){Vn()},toggle:function(){fs()}}});var Y=function(){if(!(Ct||!Vt)&&!(!(Cn!=null&&Cn.current)||!(Cn!=null&&Cn.current)||!(St!=null&&St.current))){var H=Cn.current.getBoundingClientRect(),Re=St.current.getBoundingClientRect(),Fe=ZU(H,Re,nr,Z,{offsetX:tn,offsetY:Sn},Mo);if(St.current.style.top=Fe.top+window.scrollY+"px",St.current.style.left=Fe.left+window.scrollX+"px",Z&&rr.current){var Tn,In;rr.current.style.transform=Fe.transform,rr.current.style.setProperty("-ms-transform",Fe.transform),rr.current.style.setProperty("-webkit-transform",Fe.transform),rr.current.style.top=((Tn=Ee.top)===null||Tn===void 0?void 0:Tn.toString())||Fe.arrowTop,rr.current.style.left=((In=Ee.left)===null||In===void 0?void 0:In.toString())||Fe.arrowLeft}}};HU(Vn,I),KU(St,Vt&&Ct),qU(Y,y),GU(r?[St,Cn]:[St],Vn,p&&!_);var X=function(){for(var H={key:"T",ref:Cn,"aria-describedby":Ei.current},Re=Array.isArray(T)?T:[T],Fe=0,Tn=Re.length;Fe<Tn;Fe++)switch(Re[Fe]){case"click":H.onClick=fs;break;case"right-click":H.onContextMenu=C;break;case"hover":H.onMouseEnter=Fo,H.onMouseLeave=k;break;case"focus":H.onFocus=Fo,H.onBlur=k;break}if(typeof r=="function"){var In=r(Vt);return!!r&&lt.cloneElement(In,H)}return!!r&&lt.cloneElement(r,H)},te=function(){var H=Ct?ea.popupContent.modal:ea.popupContent.tooltip,Re={className:"popup-content "+(Se!==""?Se.split(" ").map(function(Fe){return Fe+"-content"}).join(" "):""),style:Aa({},H,re,{pointerEvents:"auto"}),ref:St,onClick:function(Tn){Tn.stopPropagation()}};return!W&&T.indexOf("hover")>=0&&(Re.onMouseEnter=Fo,Re.onMouseLeave=k),Re},G=function(){return lt.createElement("div",Object.assign({},te(),{key:"C",role:Ct?"dialog":"tooltip",id:Ei.current}),Z&&!Ct&&lt.createElement("div",{ref:rr,style:ea.popupArrow},lt.createElement("svg",{"data-testid":"arrow",className:"popup-arrow "+(Se!==""?Se.split(" ").map(function(H){return H+"-arrow"}).join(" "):""),viewBox:"0 0 32 16",style:Aa({position:"absolute"},Ee)},lt.createElement("path",{d:"M16 0l16 16H0z",fill:"currentcolor"}))),xr&&typeof xr=="function"?xr(Vn,Vt):xr)},ke=!(T.indexOf("hover")>=0),ge=Ct?ea.overlay.modal:ea.overlay.tooltip,nn=[ke&&lt.createElement("div",{key:"O","data-testid":"overlay","data-popup":Ct?"modal":"tooltip",className:"popup-overlay "+(Se!==""?Se.split(" ").map(function(le){return le+"-overlay"}).join(" "):""),style:Aa({},ge,V,{pointerEvents:p&&_||Ct?"auto":"none"}),onClick:p&&_?Vn:void 0,tabIndex:-1},Ct&&G()),!Ct&&G()];return lt.createElement(lt.Fragment,null,X(),Vt&&$R.createPortal(nn,tV()))});const cf=()=>["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][new Date().getDay()],rV=()=>{const t=E.useContext(_l),[e,n]=E.useState(0),[r,i]=E.useState([]),[s,o]=E.useState([]),[a,l]=E.useState(""),[u,c]=E.useState([]),[h,d]=E.useState(!1),[m,v]=E.useState(""),[_,g]=E.useState(""),[p,f]=E.useState([]),[y,S]=E.useState(!1),[I,D]=E.useState(!1),[T,R]=E.useState(null),[re,Q]=E.useState();E.useEffect(()=>{ot()},[]),E.useEffect(()=>{clearTimeout(re),T!=null&&Q(setTimeout(()=>{R(null)},3e3))},[T]),E.useEffect(()=>{e===0&&(v(""),g(""))},[e]);function Ee(x,Z){R({message:x,type:Z})}async function ot(){const x=cf().toLowerCase().toString(),Z=await py(hy(fo(Kt,"todo_items"),dy("creatorId","==",t.uid))),oe=[];Z.forEach(Ze=>{oe.push({...Ze.data(),id:Ze.id})});const tn=oe.filter(Ze=>Ze.dates.includes(x));i(tn),o(oe)}async function V(){if(!a)return;const x=cf().toLowerCase().toString();u.length===0&&u.push(x);const Z={content:a,isCompleted:!1,dates:u,repeat:h,creatorId:t.uid},oe=await gy(fo(Kt,"todo_items"),Z);Z.id=oe.id,Z.dates.includes(x)&&i([...r,Z]),o([...s,Z])}async function ve(x){x.isCompleted=!x.isCompleted,i([...r]);const Z=gr(Kt,"todo_items",x.id);if(x.repeat)try{await hl(Z,{isCompleted:x.isCompleted}),x.isCompleted?Ee(`Completed "${x.content}"`,"success"):Ee(`Marked "${x.content}" as incomplete`,"info")}catch(oe){alert(oe),Ee(`Error: Could not update "${x.content}"`,"error")}else Se(x.id,x.content)}async function Se(x,Z){try{await my(gr(Kt,"todo_items",x)),Ee(`Completed "${Z}"`,"success");const oe=r.filter(tn=>tn.id!=x);i(oe),g(""),f([]),S(!1),v(""),n(0)}catch(oe){alert(oe),Ee(`Error: Could not complete "${Z}"`,"error")}}function en(x){n(2),v(x.id),g(x.content),f(x.dates),S(x.repeat)}async function nr(x,Z,oe){const tn=cf().toLowerCase().toString();Z.length===0&&Z.push(tn);const Ze=gr(Kt,"todo_items",m);try{await hl(Ze,{content:x,dates:Z,repeat:oe}),i([]),ot(),n(0),Ee(`Updated "${x}"`,"success")}catch(Sn){alert(Sn),Ee(`Error: Could not update "${x}"`,"error")}}function O(x){const Z=u.filter(oe=>oe!==x);c([...Z])}function W(x){const Z=p.filter(oe=>oe!==x);f([...Z])}function $(x){var Z="";return x.includes("sunday")&&(Z+="Sun "),x.includes("monday")&&(Z+="Mon "),x.includes("tuesday")&&(Z+="Tue "),x.includes("wednesday")&&(Z+="Wed "),x.includes("thursday")&&(Z+="Thu "),x.includes("friday")&&(Z+="Fri "),x.includes("saturday")&&(Z+="Sat "),Z}function _e(x,Z){console.log(`Trying to delete ${Z}`),confirm(`Are you sure you want to delete "${Z}"?`)&&Se(x,Z)}return K(Qe,{children:[K("div",{className:"widget__header",children:[w("div",{className:"widget__title",children:"Todo:"}),w("div",{className:"widget__action",children:e===0?K(nV,{trigger:w("button",{children:w(UU,{className:"widget__action__icon"})}),position:"bottom right",children:[K("button",{className:"fw-btn menu-btn",onClick:()=>n(1),children:[w(Vy,{className:"decor-icon"})," Add Todo "]}),K("button",{className:"fw-btn menu-btn",onClick:()=>n(3),children:[w(FU,{className:"decor-icon"})," View All "]})]}):e===1?w("button",{onClick:()=>n(0),children:w(oi,{className:"widget__action__icon"})}):e===2?w("button",{onClick:()=>n(0),children:w(oi,{className:"widget__action__icon"})}):e===3?w("button",{onClick:()=>n(0),children:w(oi,{className:"widget__action__icon"})}):w(Qe,{})})]}),w("div",{className:"widget__content",children:e===0?w(Qe,{children:w("div",{children:r.map(x=>K("span",{className:"checklist-item",children:[w("input",{type:"checkbox",checked:x.isCompleted,onChange:()=>ve(x)}),K("span",{className:"todo-info",onClick:()=>{en(x)},children:[w("p",{className:x.isCompleted?"todo-info__name completed":"todo-info__name",children:x.content}),K("p",{className:"todo-info__dates",children:[x.repeat?w(mw,{className:"decor-icon"}):w(Qe,{}),$(x.dates)]})]})]},x.id))})}):e===1?w("div",{className:"flip",children:K("form",{onSubmit:x=>{a!=null&&V(),I||n(0),l(""),c([]),d(!1),x.preventDefault()},children:[w("input",{type:"text",placeholder:"Todo item...",value:a,onChange:x=>l(x.target.value)}),K("span",{className:"dates",children:[w("button",{type:"button",className:u.includes("sunday")?"date-btn date-btn__selected":"date-btn date-btn__unselected",onClick:()=>{u.includes("sunday")?O("sunday"):c([...u,"sunday"])},children:" Su "}),w("button",{type:"button",className:u.includes("monday")?"date-btn date-btn__selected":"date-btn date-btn__unselected",onClick:()=>{u.includes("monday")?O("monday"):c([...u,"monday"])},children:" M "}),w("button",{type:"button",className:u.includes("tuesday")?"date-btn date-btn__selected":"date-btn date-btn__unselected",onClick:()=>{u.includes("tuesday")?O("tuesday"):c([...u,"tuesday"])},children:" Tu "}),w("button",{type:"button",className:u.includes("wednesday")?"date-btn date-btn__selected":"date-btn date-btn__unselected",onClick:()=>{u.includes("wednesday")?O("wednesday"):c([...u,"wednesday"])},children:" W "}),w("button",{type:"button",className:u.includes("thursday")?"date-btn date-btn__selected":"date-btn date-btn__unselected",onClick:()=>{u.includes("thursday")?O("thursday"):c([...u,"thursday"])},children:" Th "}),w("button",{type:"button",className:u.includes("friday")?"date-btn date-btn__selected":"date-btn date-btn__unselected",onClick:()=>{u.includes("friday")?O("friday"):c([...u,"friday"])},children:" F "}),w("button",{type:"button",className:u.includes("saturday")?"date-btn date-btn__selected":"date-btn date-btn__unselected",onClick:()=>{u.includes("saturday")?O("saturday"):c([...u,"saturday"])},children:" Sa "})]}),K("p",{className:"add-another",children:[w("input",{type:"checkbox",checked:h,onChange:()=>{d(!h)}})," Repeat? "]}),K("p",{className:"add-another",children:[w("input",{type:"checkbox",checked:I,onChange:()=>{D(!I)}}),"Add another"]}),w("input",{className:"fw-btn",type:"submit",value:"Save"})]})}):e===2?K("div",{className:"flip",children:[K("form",{onSubmit:x=>{_!=null&&nr(_,p,y),x.preventDefault()},children:[w("input",{type:"text",value:_,onChange:x=>g(x.target.value)}),K("span",{className:"dates",children:[w("button",{type:"button",className:p.includes("sunday")?"date-btn date-btn__selected":"date-btn date-btn__unselected",onClick:()=>{p.includes("sunday")?W("sunday"):f([...p,"sunday"])},children:" Su "}),w("button",{type:"button",className:p.includes("monday")?"date-btn date-btn__selected":"date-btn date-btn__unselected",onClick:()=>{p.includes("monday")?W("monday"):f([...p,"monday"])},children:" M "}),w("button",{type:"button",className:p.includes("tuesday")?"date-btn date-btn__selected":"date-btn date-btn__unselected",onClick:()=>{p.includes("tuesday")?W("tuesday"):f([...p,"tuesday"])},children:" Tu "}),w("button",{type:"button",className:p.includes("wednesday")?"date-btn date-btn__selected":"date-btn date-btn__unselected",onClick:()=>{p.includes("wednesday")?W("wednesday"):f([...p,"wednesday"])},children:" W "}),w("button",{type:"button",className:p.includes("thursday")?"date-btn date-btn__selected":"date-btn date-btn__unselected",onClick:()=>{p.includes("thursday")?W("thursday"):f([...p,"thursday"])},children:" Th "}),w("button",{type:"button",className:p.includes("friday")?"date-btn date-btn__selected":"date-btn date-btn__unselected",onClick:()=>{p.includes("friday")?W("friday"):f([...p,"friday"])},children:" F "}),w("button",{type:"button",className:p.includes("saturday")?"date-btn date-btn__selected":"date-btn date-btn__unselected",onClick:()=>{p.includes("saturday")?W("saturday"):f([...p,"saturday"])},children:" Sa "})]}),K("p",{className:"add-another",children:[w("input",{type:"checkbox",checked:y,onChange:()=>{S(!y)}})," Repeat? "]}),w("input",{className:"fw-btn",type:"submit",value:"Save"})]}),w("p",{children:K("button",{className:"fw-btn err-btn",onClick:()=>{_e(m,_)},children:[w(ok,{})," Delete "]})})]}):e===3?w("div",{className:"flip",children:w("div",{children:s.map(x=>w("span",{className:"checklist-item",children:K("span",{className:"todo-info",onClick:()=>{en(x)},children:[w("p",{className:x.isCompleted?"todo-info__name completed":"todo-info__name",children:x.content}),K("p",{className:"todo-info__dates",children:[x.repeat?w(mw,{}):w(Qe,{}),$(x.dates)]})]})},x.id))})}):w(Qe,{})}),T!=null?w("div",{className:`toast toast--${T.type}`,children:T.message}):w(Qe,{})]})},iV=t=>{const e=E.useContext(_l);function n(){const r=xS();kP(r).then(function(){console.log("weve signed out")}).catch(function(i){console.log("Signout error")})}return K(Qe,{children:[K("div",{className:"sidebar__header",children:[w(OU,{className:"sidebar__icon"}),w("h1",{className:"sidebar__logo",children:e!==null?e.email:""})]}),K("div",{className:"sidebar__items",children:[K("div",{className:"item",onClick:()=>n(),children:[w(MU,{className:"sidebar__icon"}),w("span",{className:"sidebar__text",children:"Logout"})]}),w("div",{className:"sidebar__back item",onClick:()=>t.setState(!t.state),children:w(oi,{className:"sidebar__icon"})})]})]})},sV=()=>{const[t,e]=E.useState("1:00 am"),[n,r]=E.useState("Mai 00, 2020");E.useEffect(()=>{s(new Date),i(),setInterval(i,15e3)},[]);const i=()=>{let o=new Date,a=o.getHours(),l=o.getMinutes(),u="am";a>12&&(a-=12,u="pm"),a==12&&(u="pm"),a==0&&(l==0&&s(o),a=12,u="am");let c=l<10?"0"+l:l;const h=a+":"+c+u;e(h)},s=o=>{const a={weekday:"short",month:"long",day:"numeric"},l=o.toLocaleString("en-us",a);r(l)};return K(Qe,{children:[w("div",{className:"clock",children:t}),K("div",{className:"today",children:[" ",n]})]})},oV=()=>{const[t,e]=E.useState(!1);return K(Qe,{children:[w("div",{className:t?"sidebar":"sidebar collapsed",children:w(iV,{state:t,setState:e})}),K("div",{className:"dashboard",children:[K("div",{className:"col",children:[w("div",{className:"widget widget__sm",children:w(sV,{})}),w("div",{className:"widget widget__lg",children:w(rV,{})})]}),K("div",{className:"col",children:[w("div",{className:"widget widget__lg",children:w(VU,{})}),w("div",{className:"widget widget__sm",children:w(jU,{})})]}),K("div",{className:"col",children:[w("div",{className:"widget widget__md",children:w(zU,{})}),w("div",{className:"widget widget__md",children:w(WU,{})})]}),w("div",{className:"settings",children:w("button",{onClick:()=>e(!0),children:w(LU,{})})})]})]})},aV=nD([{path:"/",element:w(DU,{}),children:[{path:"/",element:w(oV,{})},{path:"/login",element:w(xU,{})}]}]);function lV(){return w(YA,{router:aV})}df.createRoot(document.getElementById("root")).render(w(lt.StrictMode,{children:w(lV,{})}));
