function tN(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Zw(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var $a={},nN={get exports(){return $a},set exports(t){$a=t}},gh={},C={},rN={get exports(){return C},set exports(t){C=t}},pe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nl=Symbol.for("react.element"),iN=Symbol.for("react.portal"),sN=Symbol.for("react.fragment"),oN=Symbol.for("react.strict_mode"),aN=Symbol.for("react.profiler"),lN=Symbol.for("react.provider"),uN=Symbol.for("react.context"),cN=Symbol.for("react.forward_ref"),hN=Symbol.for("react.suspense"),dN=Symbol.for("react.memo"),fN=Symbol.for("react.lazy"),Ev=Symbol.iterator;function pN(t){return t===null||typeof t!="object"?null:(t=Ev&&t[Ev]||t["@@iterator"],typeof t=="function"?t:null)}var eE={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},tE=Object.assign,nE={};function So(t,e,n){this.props=t,this.context=e,this.refs=nE,this.updater=n||eE}So.prototype.isReactComponent={};So.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};So.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function rE(){}rE.prototype=So.prototype;function km(t,e,n){this.props=t,this.context=e,this.refs=nE,this.updater=n||eE}var Nm=km.prototype=new rE;Nm.constructor=km;tE(Nm,So.prototype);Nm.isPureReactComponent=!0;var Cv=Array.isArray,iE=Object.prototype.hasOwnProperty,Rm={current:null},sE={key:!0,ref:!0,__self:!0,__source:!0};function oE(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)iE.call(e,r)&&!sE.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Nl,type:t,key:s,ref:o,props:i,_owner:Rm.current}}function mN(t,e){return{$$typeof:Nl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Am(t){return typeof t=="object"&&t!==null&&t.$$typeof===Nl}function gN(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Sv=/\/+/g;function bd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?gN(""+t.key):e.toString(36)}function Vu(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Nl:case iN:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+bd(o,0):r,Cv(i)?(n="",t!=null&&(n=t.replace(Sv,"$&/")+"/"),Vu(i,e,n,"",function(u){return u})):i!=null&&(Am(i)&&(i=mN(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Sv,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Cv(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+bd(s,a);o+=Vu(s,e,n,l,i)}else if(l=pN(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+bd(s,a++),o+=Vu(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function hu(t,e,n){if(t==null)return t;var r=[],i=0;return Vu(t,r,"","",function(s){return e.call(n,s,i++)}),r}function yN(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ht={current:null},zu={transition:null},vN={ReactCurrentDispatcher:Ht,ReactCurrentBatchConfig:zu,ReactCurrentOwner:Rm};pe.Children={map:hu,forEach:function(t,e,n){hu(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return hu(t,function(){e++}),e},toArray:function(t){return hu(t,function(e){return e})||[]},only:function(t){if(!Am(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};pe.Component=So;pe.Fragment=sN;pe.Profiler=aN;pe.PureComponent=km;pe.StrictMode=oN;pe.Suspense=hN;pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vN;pe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=tE({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Rm.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)iE.call(e,l)&&!sE.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Nl,type:t.type,key:i,ref:s,props:r,_owner:o}};pe.createContext=function(t){return t={$$typeof:uN,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:lN,_context:t},t.Consumer=t};pe.createElement=oE;pe.createFactory=function(t){var e=oE.bind(null,t);return e.type=t,e};pe.createRef=function(){return{current:null}};pe.forwardRef=function(t){return{$$typeof:cN,render:t}};pe.isValidElement=Am;pe.lazy=function(t){return{$$typeof:fN,_payload:{_status:-1,_result:t},_init:yN}};pe.memo=function(t,e){return{$$typeof:dN,type:t,compare:e===void 0?null:e}};pe.startTransition=function(t){var e=zu.transition;zu.transition={};try{t()}finally{zu.transition=e}};pe.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};pe.useCallback=function(t,e){return Ht.current.useCallback(t,e)};pe.useContext=function(t){return Ht.current.useContext(t)};pe.useDebugValue=function(){};pe.useDeferredValue=function(t){return Ht.current.useDeferredValue(t)};pe.useEffect=function(t,e){return Ht.current.useEffect(t,e)};pe.useId=function(){return Ht.current.useId()};pe.useImperativeHandle=function(t,e,n){return Ht.current.useImperativeHandle(t,e,n)};pe.useInsertionEffect=function(t,e){return Ht.current.useInsertionEffect(t,e)};pe.useLayoutEffect=function(t,e){return Ht.current.useLayoutEffect(t,e)};pe.useMemo=function(t,e){return Ht.current.useMemo(t,e)};pe.useReducer=function(t,e,n){return Ht.current.useReducer(t,e,n)};pe.useRef=function(t){return Ht.current.useRef(t)};pe.useState=function(t){return Ht.current.useState(t)};pe.useSyncExternalStore=function(t,e,n){return Ht.current.useSyncExternalStore(t,e,n)};pe.useTransition=function(){return Ht.current.useTransition()};pe.version="18.2.0";(function(t){t.exports=pe})(rN);const ut=Zw(C),Lf=tN({__proto__:null,default:ut},[C]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _N=C,wN=Symbol.for("react.element"),EN=Symbol.for("react.fragment"),CN=Object.prototype.hasOwnProperty,SN=_N.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,IN={key:!0,ref:!0,__self:!0,__source:!0};function aE(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)CN.call(e,r)&&!IN.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:wN,type:t,key:s,ref:o,props:i,_owner:SN.current}}gh.Fragment=EN;gh.jsx=aE;gh.jsxs=aE;(function(t){t.exports=gh})(nN);const ft=$a.Fragment,w=$a.jsx,q=$a.jsxs;var Ff={},oc={},TN={get exports(){return oc},set exports(t){oc=t}},pn={},$f={},kN={get exports(){return $f},set exports(t){$f=t}},lE={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(M,W){var $=M.length;M.push(W);e:for(;0<$;){var we=$-1>>>1,x=M[we];if(0<i(x,W))M[we]=W,M[$]=x,$=we;else break e}}function n(M){return M.length===0?null:M[0]}function r(M){if(M.length===0)return null;var W=M[0],$=M.pop();if($!==W){M[0]=$;e:for(var we=0,x=M.length,ee=x>>>1;we<ee;){var ae=2*(we+1)-1,sn=M[ae],Ze=ae+1,Cn=M[Ze];if(0>i(sn,$))Ze<x&&0>i(Cn,sn)?(M[we]=Cn,M[Ze]=$,we=Ze):(M[we]=sn,M[ae]=$,we=ae);else if(Ze<x&&0>i(Cn,$))M[we]=Cn,M[Ze]=$,we=Ze;else break e}}return W}function i(M,W){var $=M.sortIndex-W.sortIndex;return $!==0?$:M.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,m=!1,v=!1,_=!1,g=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(M){for(var W=n(u);W!==null;){if(W.callback===null)r(u);else if(W.startTime<=M)r(u),W.sortIndex=W.expirationTime,e(l,W);else break;W=n(u)}}function E(M){if(_=!1,y(M),!v)if(n(l)!==null)v=!0,rn(T);else{var W=n(u);W!==null&&nr(E,W.startTime-M)}}function T(M,W){v=!1,_&&(_=!1,p(R),R=-1),m=!0;var $=d;try{for(y(W),h=n(l);h!==null&&(!(h.expirationTime>W)||M&&!Ce());){var we=h.callback;if(typeof we=="function"){h.callback=null,d=h.priorityLevel;var x=we(h.expirationTime<=W);W=t.unstable_now(),typeof x=="function"?h.callback=x:h===n(l)&&r(l),y(W)}else r(l);h=n(l)}if(h!==null)var ee=!0;else{var ae=n(u);ae!==null&&nr(E,ae.startTime-W),ee=!1}return ee}finally{h=null,d=$,m=!1}}var D=!1,I=null,R=-1,ie=5,Q=-1;function Ce(){return!(t.unstable_now()-Q<ie)}function at(){if(I!==null){var M=t.unstable_now();Q=M;var W=!0;try{W=I(!0,M)}finally{W?V():(D=!1,I=null)}}else D=!1}var V;if(typeof f=="function")V=function(){f(at)};else if(typeof MessageChannel<"u"){var _e=new MessageChannel,Ie=_e.port2;_e.port1.onmessage=at,V=function(){Ie.postMessage(null)}}else V=function(){g(at,0)};function rn(M){I=M,D||(D=!0,V())}function nr(M,W){R=g(function(){M(t.unstable_now())},W)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(M){M.callback=null},t.unstable_continueExecution=function(){v||m||(v=!0,rn(T))},t.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ie=0<M?Math.floor(1e3/M):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(M){switch(d){case 1:case 2:case 3:var W=3;break;default:W=d}var $=d;d=W;try{return M()}finally{d=$}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(M,W){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var $=d;d=M;try{return W()}finally{d=$}},t.unstable_scheduleCallback=function(M,W,$){var we=t.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?we+$:we):$=we,M){case 1:var x=-1;break;case 2:x=250;break;case 5:x=1073741823;break;case 4:x=1e4;break;default:x=5e3}return x=$+x,M={id:c++,callback:W,priorityLevel:M,startTime:$,expirationTime:x,sortIndex:-1},$>we?(M.sortIndex=$,e(u,M),n(l)===null&&M===n(u)&&(_?(p(R),R=-1):_=!0,nr(E,$-we))):(M.sortIndex=x,e(l,M),v||m||(v=!0,rn(T))),M},t.unstable_shouldYield=Ce,t.unstable_wrapCallback=function(M){var W=d;return function(){var $=d;d=W;try{return M.apply(this,arguments)}finally{d=$}}}})(lE);(function(t){t.exports=lE})(kN);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uE=C,dn=$f;function P(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var cE=new Set,Ua={};function cs(t,e){no(t,e),no(t+"Capture",e)}function no(t,e){for(Ua[t]=e,t=0;t<e.length;t++)cE.add(e[t])}var vr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Uf=Object.prototype.hasOwnProperty,NN=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Iv={},Tv={};function RN(t){return Uf.call(Tv,t)?!0:Uf.call(Iv,t)?!1:NN.test(t)?Tv[t]=!0:(Iv[t]=!0,!1)}function AN(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function DN(t,e,n,r){if(e===null||typeof e>"u"||AN(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function qt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ct={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ct[t]=new qt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ct[e]=new qt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ct[t]=new qt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ct[t]=new qt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ct[t]=new qt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ct[t]=new qt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ct[t]=new qt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ct[t]=new qt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ct[t]=new qt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Dm=/[\-:]([a-z])/g;function xm(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Dm,xm);Ct[e]=new qt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Dm,xm);Ct[e]=new qt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Dm,xm);Ct[e]=new qt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ct[t]=new qt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ct.xlinkHref=new qt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ct[t]=new qt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Pm(t,e,n,r){var i=Ct.hasOwnProperty(e)?Ct[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(DN(e,n,i,r)&&(n=null),r||i===null?RN(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Ar=uE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,du=Symbol.for("react.element"),Is=Symbol.for("react.portal"),Ts=Symbol.for("react.fragment"),bm=Symbol.for("react.strict_mode"),Vf=Symbol.for("react.profiler"),hE=Symbol.for("react.provider"),dE=Symbol.for("react.context"),Om=Symbol.for("react.forward_ref"),zf=Symbol.for("react.suspense"),Bf=Symbol.for("react.suspense_list"),Mm=Symbol.for("react.memo"),Fr=Symbol.for("react.lazy"),fE=Symbol.for("react.offscreen"),kv=Symbol.iterator;function qo(t){return t===null||typeof t!="object"?null:(t=kv&&t[kv]||t["@@iterator"],typeof t=="function"?t:null)}var je=Object.assign,Od;function la(t){if(Od===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Od=e&&e[1]||""}return`
`+Od+t}var Md=!1;function Ld(t,e){if(!t||Md)return"";Md=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Md=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?la(t):""}function xN(t){switch(t.tag){case 5:return la(t.type);case 16:return la("Lazy");case 13:return la("Suspense");case 19:return la("SuspenseList");case 0:case 2:case 15:return t=Ld(t.type,!1),t;case 11:return t=Ld(t.type.render,!1),t;case 1:return t=Ld(t.type,!0),t;default:return""}}function jf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ts:return"Fragment";case Is:return"Portal";case Vf:return"Profiler";case bm:return"StrictMode";case zf:return"Suspense";case Bf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case dE:return(t.displayName||"Context")+".Consumer";case hE:return(t._context.displayName||"Context")+".Provider";case Om:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Mm:return e=t.displayName||null,e!==null?e:jf(t.type)||"Memo";case Fr:e=t._payload,t=t._init;try{return jf(t(e))}catch{}}return null}function PN(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return jf(e);case 8:return e===bm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ui(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function pE(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function bN(t){var e=pE(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function fu(t){t._valueTracker||(t._valueTracker=bN(t))}function mE(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=pE(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function ac(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Wf(t,e){var n=e.checked;return je({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Nv(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=ui(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function gE(t,e){e=e.checked,e!=null&&Pm(t,"checked",e,!1)}function Hf(t,e){gE(t,e);var n=ui(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?qf(t,e.type,n):e.hasOwnProperty("defaultValue")&&qf(t,e.type,ui(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Rv(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function qf(t,e,n){(e!=="number"||ac(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ua=Array.isArray;function zs(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+ui(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Gf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(P(91));return je({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Av(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(P(92));if(ua(n)){if(1<n.length)throw Error(P(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ui(n)}}function yE(t,e){var n=ui(e.value),r=ui(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Dv(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function vE(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Kf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?vE(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var pu,_E=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(pu=pu||document.createElement("div"),pu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=pu.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Va(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ya={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ON=["Webkit","ms","Moz","O"];Object.keys(ya).forEach(function(t){ON.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ya[e]=ya[t]})});function wE(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ya.hasOwnProperty(t)&&ya[t]?(""+e).trim():e+"px"}function EE(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=wE(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var MN=je({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Qf(t,e){if(e){if(MN[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(P(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(P(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(P(61))}if(e.style!=null&&typeof e.style!="object")throw Error(P(62))}}function Yf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xf=null;function Lm(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Jf=null,Bs=null,js=null;function xv(t){if(t=Dl(t)){if(typeof Jf!="function")throw Error(P(280));var e=t.stateNode;e&&(e=Eh(e),Jf(t.stateNode,t.type,e))}}function CE(t){Bs?js?js.push(t):js=[t]:Bs=t}function SE(){if(Bs){var t=Bs,e=js;if(js=Bs=null,xv(t),e)for(t=0;t<e.length;t++)xv(e[t])}}function IE(t,e){return t(e)}function TE(){}var Fd=!1;function kE(t,e,n){if(Fd)return t(e,n);Fd=!0;try{return IE(t,e,n)}finally{Fd=!1,(Bs!==null||js!==null)&&(TE(),SE())}}function za(t,e){var n=t.stateNode;if(n===null)return null;var r=Eh(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(P(231,e,typeof n));return n}var Zf=!1;if(vr)try{var Go={};Object.defineProperty(Go,"passive",{get:function(){Zf=!0}}),window.addEventListener("test",Go,Go),window.removeEventListener("test",Go,Go)}catch{Zf=!1}function LN(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var va=!1,lc=null,uc=!1,ep=null,FN={onError:function(t){va=!0,lc=t}};function $N(t,e,n,r,i,s,o,a,l){va=!1,lc=null,LN.apply(FN,arguments)}function UN(t,e,n,r,i,s,o,a,l){if($N.apply(this,arguments),va){if(va){var u=lc;va=!1,lc=null}else throw Error(P(198));uc||(uc=!0,ep=u)}}function hs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function NE(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Pv(t){if(hs(t)!==t)throw Error(P(188))}function VN(t){var e=t.alternate;if(!e){if(e=hs(t),e===null)throw Error(P(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Pv(i),t;if(s===r)return Pv(i),e;s=s.sibling}throw Error(P(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(P(189))}}if(n.alternate!==r)throw Error(P(190))}if(n.tag!==3)throw Error(P(188));return n.stateNode.current===n?t:e}function RE(t){return t=VN(t),t!==null?AE(t):null}function AE(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=AE(t);if(e!==null)return e;t=t.sibling}return null}var DE=dn.unstable_scheduleCallback,bv=dn.unstable_cancelCallback,zN=dn.unstable_shouldYield,BN=dn.unstable_requestPaint,Ge=dn.unstable_now,jN=dn.unstable_getCurrentPriorityLevel,Fm=dn.unstable_ImmediatePriority,xE=dn.unstable_UserBlockingPriority,cc=dn.unstable_NormalPriority,WN=dn.unstable_LowPriority,PE=dn.unstable_IdlePriority,yh=null,Gn=null;function HN(t){if(Gn&&typeof Gn.onCommitFiberRoot=="function")try{Gn.onCommitFiberRoot(yh,t,void 0,(t.current.flags&128)===128)}catch{}}var On=Math.clz32?Math.clz32:KN,qN=Math.log,GN=Math.LN2;function KN(t){return t>>>=0,t===0?32:31-(qN(t)/GN|0)|0}var mu=64,gu=4194304;function ca(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function hc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=ca(a):(s&=o,s!==0&&(r=ca(s)))}else o=n&~i,o!==0?r=ca(o):s!==0&&(r=ca(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-On(e),i=1<<n,r|=t[n],e&=~i;return r}function QN(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function YN(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-On(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=QN(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function tp(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function bE(){var t=mu;return mu<<=1,!(mu&4194240)&&(mu=64),t}function $d(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Rl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-On(e),t[e]=n}function XN(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-On(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function $m(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-On(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ke=0;function OE(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var ME,Um,LE,FE,$E,np=!1,yu=[],Gr=null,Kr=null,Qr=null,Ba=new Map,ja=new Map,Ur=[],JN="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ov(t,e){switch(t){case"focusin":case"focusout":Gr=null;break;case"dragenter":case"dragleave":Kr=null;break;case"mouseover":case"mouseout":Qr=null;break;case"pointerover":case"pointerout":Ba.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ja.delete(e.pointerId)}}function Ko(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Dl(e),e!==null&&Um(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function ZN(t,e,n,r,i){switch(e){case"focusin":return Gr=Ko(Gr,t,e,n,r,i),!0;case"dragenter":return Kr=Ko(Kr,t,e,n,r,i),!0;case"mouseover":return Qr=Ko(Qr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ba.set(s,Ko(Ba.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ja.set(s,Ko(ja.get(s)||null,t,e,n,r,i)),!0}return!1}function UE(t){var e=xi(t.target);if(e!==null){var n=hs(e);if(n!==null){if(e=n.tag,e===13){if(e=NE(n),e!==null){t.blockedOn=e,$E(t.priority,function(){LE(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Bu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=rp(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Xf=r,n.target.dispatchEvent(r),Xf=null}else return e=Dl(n),e!==null&&Um(e),t.blockedOn=n,!1;e.shift()}return!0}function Mv(t,e,n){Bu(t)&&n.delete(e)}function eR(){np=!1,Gr!==null&&Bu(Gr)&&(Gr=null),Kr!==null&&Bu(Kr)&&(Kr=null),Qr!==null&&Bu(Qr)&&(Qr=null),Ba.forEach(Mv),ja.forEach(Mv)}function Qo(t,e){t.blockedOn===e&&(t.blockedOn=null,np||(np=!0,dn.unstable_scheduleCallback(dn.unstable_NormalPriority,eR)))}function Wa(t){function e(i){return Qo(i,t)}if(0<yu.length){Qo(yu[0],t);for(var n=1;n<yu.length;n++){var r=yu[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Gr!==null&&Qo(Gr,t),Kr!==null&&Qo(Kr,t),Qr!==null&&Qo(Qr,t),Ba.forEach(e),ja.forEach(e),n=0;n<Ur.length;n++)r=Ur[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Ur.length&&(n=Ur[0],n.blockedOn===null);)UE(n),n.blockedOn===null&&Ur.shift()}var Ws=Ar.ReactCurrentBatchConfig,dc=!0;function tR(t,e,n,r){var i=ke,s=Ws.transition;Ws.transition=null;try{ke=1,Vm(t,e,n,r)}finally{ke=i,Ws.transition=s}}function nR(t,e,n,r){var i=ke,s=Ws.transition;Ws.transition=null;try{ke=4,Vm(t,e,n,r)}finally{ke=i,Ws.transition=s}}function Vm(t,e,n,r){if(dc){var i=rp(t,e,n,r);if(i===null)Kd(t,e,r,fc,n),Ov(t,r);else if(ZN(i,t,e,n,r))r.stopPropagation();else if(Ov(t,r),e&4&&-1<JN.indexOf(t)){for(;i!==null;){var s=Dl(i);if(s!==null&&ME(s),s=rp(t,e,n,r),s===null&&Kd(t,e,r,fc,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Kd(t,e,r,null,n)}}var fc=null;function rp(t,e,n,r){if(fc=null,t=Lm(r),t=xi(t),t!==null)if(e=hs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=NE(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return fc=t,null}function VE(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(jN()){case Fm:return 1;case xE:return 4;case cc:case WN:return 16;case PE:return 536870912;default:return 16}default:return 16}}var Hr=null,zm=null,ju=null;function zE(){if(ju)return ju;var t,e=zm,n=e.length,r,i="value"in Hr?Hr.value:Hr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return ju=i.slice(t,1<r?1-r:void 0)}function Wu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function vu(){return!0}function Lv(){return!1}function mn(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?vu:Lv,this.isPropagationStopped=Lv,this}return je(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=vu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=vu)},persist:function(){},isPersistent:vu}),e}var Io={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bm=mn(Io),Al=je({},Io,{view:0,detail:0}),rR=mn(Al),Ud,Vd,Yo,vh=je({},Al,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Yo&&(Yo&&t.type==="mousemove"?(Ud=t.screenX-Yo.screenX,Vd=t.screenY-Yo.screenY):Vd=Ud=0,Yo=t),Ud)},movementY:function(t){return"movementY"in t?t.movementY:Vd}}),Fv=mn(vh),iR=je({},vh,{dataTransfer:0}),sR=mn(iR),oR=je({},Al,{relatedTarget:0}),zd=mn(oR),aR=je({},Io,{animationName:0,elapsedTime:0,pseudoElement:0}),lR=mn(aR),uR=je({},Io,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),cR=mn(uR),hR=je({},Io,{data:0}),$v=mn(hR),dR={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fR={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pR={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function mR(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=pR[t])?!!e[t]:!1}function jm(){return mR}var gR=je({},Al,{key:function(t){if(t.key){var e=dR[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Wu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?fR[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jm,charCode:function(t){return t.type==="keypress"?Wu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Wu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),yR=mn(gR),vR=je({},vh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Uv=mn(vR),_R=je({},Al,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jm}),wR=mn(_R),ER=je({},Io,{propertyName:0,elapsedTime:0,pseudoElement:0}),CR=mn(ER),SR=je({},vh,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),IR=mn(SR),TR=[9,13,27,32],Wm=vr&&"CompositionEvent"in window,_a=null;vr&&"documentMode"in document&&(_a=document.documentMode);var kR=vr&&"TextEvent"in window&&!_a,BE=vr&&(!Wm||_a&&8<_a&&11>=_a),Vv=String.fromCharCode(32),zv=!1;function jE(t,e){switch(t){case"keyup":return TR.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function WE(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ks=!1;function NR(t,e){switch(t){case"compositionend":return WE(e);case"keypress":return e.which!==32?null:(zv=!0,Vv);case"textInput":return t=e.data,t===Vv&&zv?null:t;default:return null}}function RR(t,e){if(ks)return t==="compositionend"||!Wm&&jE(t,e)?(t=zE(),ju=zm=Hr=null,ks=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return BE&&e.locale!=="ko"?null:e.data;default:return null}}var AR={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!AR[t.type]:e==="textarea"}function HE(t,e,n,r){CE(r),e=pc(e,"onChange"),0<e.length&&(n=new Bm("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var wa=null,Ha=null;function DR(t){n1(t,0)}function _h(t){var e=As(t);if(mE(e))return t}function xR(t,e){if(t==="change")return e}var qE=!1;if(vr){var Bd;if(vr){var jd="oninput"in document;if(!jd){var jv=document.createElement("div");jv.setAttribute("oninput","return;"),jd=typeof jv.oninput=="function"}Bd=jd}else Bd=!1;qE=Bd&&(!document.documentMode||9<document.documentMode)}function Wv(){wa&&(wa.detachEvent("onpropertychange",GE),Ha=wa=null)}function GE(t){if(t.propertyName==="value"&&_h(Ha)){var e=[];HE(e,Ha,t,Lm(t)),kE(DR,e)}}function PR(t,e,n){t==="focusin"?(Wv(),wa=e,Ha=n,wa.attachEvent("onpropertychange",GE)):t==="focusout"&&Wv()}function bR(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return _h(Ha)}function OR(t,e){if(t==="click")return _h(e)}function MR(t,e){if(t==="input"||t==="change")return _h(e)}function LR(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var $n=typeof Object.is=="function"?Object.is:LR;function qa(t,e){if($n(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Uf.call(e,i)||!$n(t[i],e[i]))return!1}return!0}function Hv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function qv(t,e){var n=Hv(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Hv(n)}}function KE(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?KE(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function QE(){for(var t=window,e=ac();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ac(t.document)}return e}function Hm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function FR(t){var e=QE(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&KE(n.ownerDocument.documentElement,n)){if(r!==null&&Hm(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=qv(n,s);var o=qv(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var $R=vr&&"documentMode"in document&&11>=document.documentMode,Ns=null,ip=null,Ea=null,sp=!1;function Gv(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;sp||Ns==null||Ns!==ac(r)||(r=Ns,"selectionStart"in r&&Hm(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ea&&qa(Ea,r)||(Ea=r,r=pc(ip,"onSelect"),0<r.length&&(e=new Bm("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ns)))}function _u(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Rs={animationend:_u("Animation","AnimationEnd"),animationiteration:_u("Animation","AnimationIteration"),animationstart:_u("Animation","AnimationStart"),transitionend:_u("Transition","TransitionEnd")},Wd={},YE={};vr&&(YE=document.createElement("div").style,"AnimationEvent"in window||(delete Rs.animationend.animation,delete Rs.animationiteration.animation,delete Rs.animationstart.animation),"TransitionEvent"in window||delete Rs.transitionend.transition);function wh(t){if(Wd[t])return Wd[t];if(!Rs[t])return t;var e=Rs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in YE)return Wd[t]=e[n];return t}var XE=wh("animationend"),JE=wh("animationiteration"),ZE=wh("animationstart"),e1=wh("transitionend"),t1=new Map,Kv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function vi(t,e){t1.set(t,e),cs(e,[t])}for(var Hd=0;Hd<Kv.length;Hd++){var qd=Kv[Hd],UR=qd.toLowerCase(),VR=qd[0].toUpperCase()+qd.slice(1);vi(UR,"on"+VR)}vi(XE,"onAnimationEnd");vi(JE,"onAnimationIteration");vi(ZE,"onAnimationStart");vi("dblclick","onDoubleClick");vi("focusin","onFocus");vi("focusout","onBlur");vi(e1,"onTransitionEnd");no("onMouseEnter",["mouseout","mouseover"]);no("onMouseLeave",["mouseout","mouseover"]);no("onPointerEnter",["pointerout","pointerover"]);no("onPointerLeave",["pointerout","pointerover"]);cs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));cs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));cs("onBeforeInput",["compositionend","keypress","textInput","paste"]);cs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));cs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));cs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ha="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zR=new Set("cancel close invalid load scroll toggle".split(" ").concat(ha));function Qv(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,UN(r,e,void 0,t),t.currentTarget=null}function n1(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Qv(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Qv(i,a,u),s=l}}}if(uc)throw t=ep,uc=!1,ep=null,t}function Pe(t,e){var n=e[cp];n===void 0&&(n=e[cp]=new Set);var r=t+"__bubble";n.has(r)||(r1(e,t,2,!1),n.add(r))}function Gd(t,e,n){var r=0;e&&(r|=4),r1(n,t,r,e)}var wu="_reactListening"+Math.random().toString(36).slice(2);function Ga(t){if(!t[wu]){t[wu]=!0,cE.forEach(function(n){n!=="selectionchange"&&(zR.has(n)||Gd(n,!1,t),Gd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[wu]||(e[wu]=!0,Gd("selectionchange",!1,e))}}function r1(t,e,n,r){switch(VE(e)){case 1:var i=tR;break;case 4:i=nR;break;default:i=Vm}n=i.bind(null,e,n,t),i=void 0,!Zf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Kd(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=xi(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}kE(function(){var u=s,c=Lm(n),h=[];e:{var d=t1.get(t);if(d!==void 0){var m=Bm,v=t;switch(t){case"keypress":if(Wu(n)===0)break e;case"keydown":case"keyup":m=yR;break;case"focusin":v="focus",m=zd;break;case"focusout":v="blur",m=zd;break;case"beforeblur":case"afterblur":m=zd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Fv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=sR;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=wR;break;case XE:case JE:case ZE:m=lR;break;case e1:m=CR;break;case"scroll":m=rR;break;case"wheel":m=IR;break;case"copy":case"cut":case"paste":m=cR;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Uv}var _=(e&4)!==0,g=!_&&t==="scroll",p=_?d!==null?d+"Capture":null:d;_=[];for(var f=u,y;f!==null;){y=f;var E=y.stateNode;if(y.tag===5&&E!==null&&(y=E,p!==null&&(E=za(f,p),E!=null&&_.push(Ka(f,E,y)))),g)break;f=f.return}0<_.length&&(d=new m(d,v,null,n,c),h.push({event:d,listeners:_}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",d&&n!==Xf&&(v=n.relatedTarget||n.fromElement)&&(xi(v)||v[_r]))break e;if((m||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,m?(v=n.relatedTarget||n.toElement,m=u,v=v?xi(v):null,v!==null&&(g=hs(v),v!==g||v.tag!==5&&v.tag!==6)&&(v=null)):(m=null,v=u),m!==v)){if(_=Fv,E="onMouseLeave",p="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(_=Uv,E="onPointerLeave",p="onPointerEnter",f="pointer"),g=m==null?d:As(m),y=v==null?d:As(v),d=new _(E,f+"leave",m,n,c),d.target=g,d.relatedTarget=y,E=null,xi(c)===u&&(_=new _(p,f+"enter",v,n,c),_.target=y,_.relatedTarget=g,E=_),g=E,m&&v)t:{for(_=m,p=v,f=0,y=_;y;y=ws(y))f++;for(y=0,E=p;E;E=ws(E))y++;for(;0<f-y;)_=ws(_),f--;for(;0<y-f;)p=ws(p),y--;for(;f--;){if(_===p||p!==null&&_===p.alternate)break t;_=ws(_),p=ws(p)}_=null}else _=null;m!==null&&Yv(h,d,m,_,!1),v!==null&&g!==null&&Yv(h,g,v,_,!0)}}e:{if(d=u?As(u):window,m=d.nodeName&&d.nodeName.toLowerCase(),m==="select"||m==="input"&&d.type==="file")var T=xR;else if(Bv(d))if(qE)T=MR;else{T=bR;var D=PR}else(m=d.nodeName)&&m.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(T=OR);if(T&&(T=T(t,u))){HE(h,T,n,c);break e}D&&D(t,d,u),t==="focusout"&&(D=d._wrapperState)&&D.controlled&&d.type==="number"&&qf(d,"number",d.value)}switch(D=u?As(u):window,t){case"focusin":(Bv(D)||D.contentEditable==="true")&&(Ns=D,ip=u,Ea=null);break;case"focusout":Ea=ip=Ns=null;break;case"mousedown":sp=!0;break;case"contextmenu":case"mouseup":case"dragend":sp=!1,Gv(h,n,c);break;case"selectionchange":if($R)break;case"keydown":case"keyup":Gv(h,n,c)}var I;if(Wm)e:{switch(t){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else ks?jE(t,n)&&(R="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(BE&&n.locale!=="ko"&&(ks||R!=="onCompositionStart"?R==="onCompositionEnd"&&ks&&(I=zE()):(Hr=c,zm="value"in Hr?Hr.value:Hr.textContent,ks=!0)),D=pc(u,R),0<D.length&&(R=new $v(R,t,null,n,c),h.push({event:R,listeners:D}),I?R.data=I:(I=WE(n),I!==null&&(R.data=I)))),(I=kR?NR(t,n):RR(t,n))&&(u=pc(u,"onBeforeInput"),0<u.length&&(c=new $v("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=I))}n1(h,e)})}function Ka(t,e,n){return{instance:t,listener:e,currentTarget:n}}function pc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=za(t,n),s!=null&&r.unshift(Ka(t,s,i)),s=za(t,e),s!=null&&r.push(Ka(t,s,i))),t=t.return}return r}function ws(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Yv(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=za(n,s),l!=null&&o.unshift(Ka(n,l,a))):i||(l=za(n,s),l!=null&&o.push(Ka(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var BR=/\r\n?/g,jR=/\u0000|\uFFFD/g;function Xv(t){return(typeof t=="string"?t:""+t).replace(BR,`
`).replace(jR,"")}function Eu(t,e,n){if(e=Xv(e),Xv(t)!==e&&n)throw Error(P(425))}function mc(){}var op=null,ap=null;function lp(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var up=typeof setTimeout=="function"?setTimeout:void 0,WR=typeof clearTimeout=="function"?clearTimeout:void 0,Jv=typeof Promise=="function"?Promise:void 0,HR=typeof queueMicrotask=="function"?queueMicrotask:typeof Jv<"u"?function(t){return Jv.resolve(null).then(t).catch(qR)}:up;function qR(t){setTimeout(function(){throw t})}function Qd(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Wa(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Wa(e)}function Yr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Zv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var To=Math.random().toString(36).slice(2),Hn="__reactFiber$"+To,Qa="__reactProps$"+To,_r="__reactContainer$"+To,cp="__reactEvents$"+To,GR="__reactListeners$"+To,KR="__reactHandles$"+To;function xi(t){var e=t[Hn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[_r]||n[Hn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Zv(t);t!==null;){if(n=t[Hn])return n;t=Zv(t)}return e}t=n,n=t.parentNode}return null}function Dl(t){return t=t[Hn]||t[_r],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function As(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(P(33))}function Eh(t){return t[Qa]||null}var hp=[],Ds=-1;function _i(t){return{current:t}}function Me(t){0>Ds||(t.current=hp[Ds],hp[Ds]=null,Ds--)}function xe(t,e){Ds++,hp[Ds]=t.current,t.current=e}var ci={},$t=_i(ci),Jt=_i(!1),qi=ci;function ro(t,e){var n=t.type.contextTypes;if(!n)return ci;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Zt(t){return t=t.childContextTypes,t!=null}function gc(){Me(Jt),Me($t)}function e_(t,e,n){if($t.current!==ci)throw Error(P(168));xe($t,e),xe(Jt,n)}function i1(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(P(108,PN(t)||"Unknown",i));return je({},n,r)}function yc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ci,qi=$t.current,xe($t,t),xe(Jt,Jt.current),!0}function t_(t,e,n){var r=t.stateNode;if(!r)throw Error(P(169));n?(t=i1(t,e,qi),r.__reactInternalMemoizedMergedChildContext=t,Me(Jt),Me($t),xe($t,t)):Me(Jt),xe(Jt,n)}var lr=null,Ch=!1,Yd=!1;function s1(t){lr===null?lr=[t]:lr.push(t)}function QR(t){Ch=!0,s1(t)}function wi(){if(!Yd&&lr!==null){Yd=!0;var t=0,e=ke;try{var n=lr;for(ke=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}lr=null,Ch=!1}catch(i){throw lr!==null&&(lr=lr.slice(t+1)),DE(Fm,wi),i}finally{ke=e,Yd=!1}}return null}var xs=[],Ps=0,vc=null,_c=0,gn=[],yn=0,Gi=null,ur=1,cr="";function Ni(t,e){xs[Ps++]=_c,xs[Ps++]=vc,vc=t,_c=e}function o1(t,e,n){gn[yn++]=ur,gn[yn++]=cr,gn[yn++]=Gi,Gi=t;var r=ur;t=cr;var i=32-On(r)-1;r&=~(1<<i),n+=1;var s=32-On(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,ur=1<<32-On(e)+i|n<<i|r,cr=s+t}else ur=1<<s|n<<i|r,cr=t}function qm(t){t.return!==null&&(Ni(t,1),o1(t,1,0))}function Gm(t){for(;t===vc;)vc=xs[--Ps],xs[Ps]=null,_c=xs[--Ps],xs[Ps]=null;for(;t===Gi;)Gi=gn[--yn],gn[yn]=null,cr=gn[--yn],gn[yn]=null,ur=gn[--yn],gn[yn]=null}var cn=null,ln=null,$e=!1,Dn=null;function a1(t,e){var n=vn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function n_(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,cn=t,ln=Yr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,cn=t,ln=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Gi!==null?{id:ur,overflow:cr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=vn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,cn=t,ln=null,!0):!1;default:return!1}}function dp(t){return(t.mode&1)!==0&&(t.flags&128)===0}function fp(t){if($e){var e=ln;if(e){var n=e;if(!n_(t,e)){if(dp(t))throw Error(P(418));e=Yr(n.nextSibling);var r=cn;e&&n_(t,e)?a1(r,n):(t.flags=t.flags&-4097|2,$e=!1,cn=t)}}else{if(dp(t))throw Error(P(418));t.flags=t.flags&-4097|2,$e=!1,cn=t}}}function r_(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;cn=t}function Cu(t){if(t!==cn)return!1;if(!$e)return r_(t),$e=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!lp(t.type,t.memoizedProps)),e&&(e=ln)){if(dp(t))throw l1(),Error(P(418));for(;e;)a1(t,e),e=Yr(e.nextSibling)}if(r_(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(P(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){ln=Yr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}ln=null}}else ln=cn?Yr(t.stateNode.nextSibling):null;return!0}function l1(){for(var t=ln;t;)t=Yr(t.nextSibling)}function io(){ln=cn=null,$e=!1}function Km(t){Dn===null?Dn=[t]:Dn.push(t)}var YR=Ar.ReactCurrentBatchConfig;function Rn(t,e){if(t&&t.defaultProps){e=je({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var wc=_i(null),Ec=null,bs=null,Qm=null;function Ym(){Qm=bs=Ec=null}function Xm(t){var e=wc.current;Me(wc),t._currentValue=e}function pp(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Hs(t,e){Ec=t,Qm=bs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Qt=!0),t.firstContext=null)}function wn(t){var e=t._currentValue;if(Qm!==t)if(t={context:t,memoizedValue:e,next:null},bs===null){if(Ec===null)throw Error(P(308));bs=t,Ec.dependencies={lanes:0,firstContext:t}}else bs=bs.next=t;return e}var Pi=null;function Jm(t){Pi===null?Pi=[t]:Pi.push(t)}function u1(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Jm(e)):(n.next=i.next,i.next=n),e.interleaved=n,wr(t,r)}function wr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var $r=!1;function Zm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function c1(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function mr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Xr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ve&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,wr(t,n)}return i=r.interleaved,i===null?(e.next=e,Jm(r)):(e.next=i.next,i.next=e),r.interleaved=e,wr(t,n)}function Hu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,$m(t,n)}}function i_(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Cc(t,e,n,r){var i=t.updateQueue;$r=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,m=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,_=a;switch(d=e,m=n,_.tag){case 1:if(v=_.payload,typeof v=="function"){h=v.call(m,h,d);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=_.payload,d=typeof v=="function"?v.call(m,h,d):v,d==null)break e;h=je({},h,d);break e;case 2:$r=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else m={eventTime:m,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=m,l=h):c=c.next=m,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Qi|=o,t.lanes=o,t.memoizedState=h}}function s_(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(P(191,i));i.call(r)}}}var h1=new uE.Component().refs;function mp(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:je({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Sh={isMounted:function(t){return(t=t._reactInternals)?hs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Wt(),i=Zr(t),s=mr(r,i);s.payload=e,n!=null&&(s.callback=n),e=Xr(t,s,i),e!==null&&(Mn(e,t,i,r),Hu(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Wt(),i=Zr(t),s=mr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Xr(t,s,i),e!==null&&(Mn(e,t,i,r),Hu(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Wt(),r=Zr(t),i=mr(n,r);i.tag=2,e!=null&&(i.callback=e),e=Xr(t,i,r),e!==null&&(Mn(e,t,r,n),Hu(e,t,r))}};function o_(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!qa(n,r)||!qa(i,s):!0}function d1(t,e,n){var r=!1,i=ci,s=e.contextType;return typeof s=="object"&&s!==null?s=wn(s):(i=Zt(e)?qi:$t.current,r=e.contextTypes,s=(r=r!=null)?ro(t,i):ci),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Sh,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function a_(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Sh.enqueueReplaceState(e,e.state,null)}function gp(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=h1,Zm(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=wn(s):(s=Zt(e)?qi:$t.current,i.context=ro(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(mp(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Sh.enqueueReplaceState(i,i.state,null),Cc(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Xo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(P(309));var r=n.stateNode}if(!r)throw Error(P(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===h1&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(P(284));if(!n._owner)throw Error(P(290,t))}return t}function Su(t,e){throw t=Object.prototype.toString.call(e),Error(P(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function l_(t){var e=t._init;return e(t._payload)}function f1(t){function e(p,f){if(t){var y=p.deletions;y===null?(p.deletions=[f],p.flags|=16):y.push(f)}}function n(p,f){if(!t)return null;for(;f!==null;)e(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=ei(p,f),p.index=0,p.sibling=null,p}function s(p,f,y){return p.index=y,t?(y=p.alternate,y!==null?(y=y.index,y<f?(p.flags|=2,f):y):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,f,y,E){return f===null||f.tag!==6?(f=rf(y,p.mode,E),f.return=p,f):(f=i(f,y),f.return=p,f)}function l(p,f,y,E){var T=y.type;return T===Ts?c(p,f,y.props.children,E,y.key):f!==null&&(f.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Fr&&l_(T)===f.type)?(E=i(f,y.props),E.ref=Xo(p,f,y),E.return=p,E):(E=Xu(y.type,y.key,y.props,null,p.mode,E),E.ref=Xo(p,f,y),E.return=p,E)}function u(p,f,y,E){return f===null||f.tag!==4||f.stateNode.containerInfo!==y.containerInfo||f.stateNode.implementation!==y.implementation?(f=sf(y,p.mode,E),f.return=p,f):(f=i(f,y.children||[]),f.return=p,f)}function c(p,f,y,E,T){return f===null||f.tag!==7?(f=zi(y,p.mode,E,T),f.return=p,f):(f=i(f,y),f.return=p,f)}function h(p,f,y){if(typeof f=="string"&&f!==""||typeof f=="number")return f=rf(""+f,p.mode,y),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case du:return y=Xu(f.type,f.key,f.props,null,p.mode,y),y.ref=Xo(p,null,f),y.return=p,y;case Is:return f=sf(f,p.mode,y),f.return=p,f;case Fr:var E=f._init;return h(p,E(f._payload),y)}if(ua(f)||qo(f))return f=zi(f,p.mode,y,null),f.return=p,f;Su(p,f)}return null}function d(p,f,y,E){var T=f!==null?f.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return T!==null?null:a(p,f,""+y,E);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case du:return y.key===T?l(p,f,y,E):null;case Is:return y.key===T?u(p,f,y,E):null;case Fr:return T=y._init,d(p,f,T(y._payload),E)}if(ua(y)||qo(y))return T!==null?null:c(p,f,y,E,null);Su(p,y)}return null}function m(p,f,y,E,T){if(typeof E=="string"&&E!==""||typeof E=="number")return p=p.get(y)||null,a(f,p,""+E,T);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case du:return p=p.get(E.key===null?y:E.key)||null,l(f,p,E,T);case Is:return p=p.get(E.key===null?y:E.key)||null,u(f,p,E,T);case Fr:var D=E._init;return m(p,f,y,D(E._payload),T)}if(ua(E)||qo(E))return p=p.get(y)||null,c(f,p,E,T,null);Su(f,E)}return null}function v(p,f,y,E){for(var T=null,D=null,I=f,R=f=0,ie=null;I!==null&&R<y.length;R++){I.index>R?(ie=I,I=null):ie=I.sibling;var Q=d(p,I,y[R],E);if(Q===null){I===null&&(I=ie);break}t&&I&&Q.alternate===null&&e(p,I),f=s(Q,f,R),D===null?T=Q:D.sibling=Q,D=Q,I=ie}if(R===y.length)return n(p,I),$e&&Ni(p,R),T;if(I===null){for(;R<y.length;R++)I=h(p,y[R],E),I!==null&&(f=s(I,f,R),D===null?T=I:D.sibling=I,D=I);return $e&&Ni(p,R),T}for(I=r(p,I);R<y.length;R++)ie=m(I,p,R,y[R],E),ie!==null&&(t&&ie.alternate!==null&&I.delete(ie.key===null?R:ie.key),f=s(ie,f,R),D===null?T=ie:D.sibling=ie,D=ie);return t&&I.forEach(function(Ce){return e(p,Ce)}),$e&&Ni(p,R),T}function _(p,f,y,E){var T=qo(y);if(typeof T!="function")throw Error(P(150));if(y=T.call(y),y==null)throw Error(P(151));for(var D=T=null,I=f,R=f=0,ie=null,Q=y.next();I!==null&&!Q.done;R++,Q=y.next()){I.index>R?(ie=I,I=null):ie=I.sibling;var Ce=d(p,I,Q.value,E);if(Ce===null){I===null&&(I=ie);break}t&&I&&Ce.alternate===null&&e(p,I),f=s(Ce,f,R),D===null?T=Ce:D.sibling=Ce,D=Ce,I=ie}if(Q.done)return n(p,I),$e&&Ni(p,R),T;if(I===null){for(;!Q.done;R++,Q=y.next())Q=h(p,Q.value,E),Q!==null&&(f=s(Q,f,R),D===null?T=Q:D.sibling=Q,D=Q);return $e&&Ni(p,R),T}for(I=r(p,I);!Q.done;R++,Q=y.next())Q=m(I,p,R,Q.value,E),Q!==null&&(t&&Q.alternate!==null&&I.delete(Q.key===null?R:Q.key),f=s(Q,f,R),D===null?T=Q:D.sibling=Q,D=Q);return t&&I.forEach(function(at){return e(p,at)}),$e&&Ni(p,R),T}function g(p,f,y,E){if(typeof y=="object"&&y!==null&&y.type===Ts&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case du:e:{for(var T=y.key,D=f;D!==null;){if(D.key===T){if(T=y.type,T===Ts){if(D.tag===7){n(p,D.sibling),f=i(D,y.props.children),f.return=p,p=f;break e}}else if(D.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Fr&&l_(T)===D.type){n(p,D.sibling),f=i(D,y.props),f.ref=Xo(p,D,y),f.return=p,p=f;break e}n(p,D);break}else e(p,D);D=D.sibling}y.type===Ts?(f=zi(y.props.children,p.mode,E,y.key),f.return=p,p=f):(E=Xu(y.type,y.key,y.props,null,p.mode,E),E.ref=Xo(p,f,y),E.return=p,p=E)}return o(p);case Is:e:{for(D=y.key;f!==null;){if(f.key===D)if(f.tag===4&&f.stateNode.containerInfo===y.containerInfo&&f.stateNode.implementation===y.implementation){n(p,f.sibling),f=i(f,y.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else e(p,f);f=f.sibling}f=sf(y,p.mode,E),f.return=p,p=f}return o(p);case Fr:return D=y._init,g(p,f,D(y._payload),E)}if(ua(y))return v(p,f,y,E);if(qo(y))return _(p,f,y,E);Su(p,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,y),f.return=p,p=f):(n(p,f),f=rf(y,p.mode,E),f.return=p,p=f),o(p)):n(p,f)}return g}var so=f1(!0),p1=f1(!1),xl={},Kn=_i(xl),Ya=_i(xl),Xa=_i(xl);function bi(t){if(t===xl)throw Error(P(174));return t}function eg(t,e){switch(xe(Xa,e),xe(Ya,t),xe(Kn,xl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Kf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Kf(e,t)}Me(Kn),xe(Kn,e)}function oo(){Me(Kn),Me(Ya),Me(Xa)}function m1(t){bi(Xa.current);var e=bi(Kn.current),n=Kf(e,t.type);e!==n&&(xe(Ya,t),xe(Kn,n))}function tg(t){Ya.current===t&&(Me(Kn),Me(Ya))}var ze=_i(0);function Sc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Xd=[];function ng(){for(var t=0;t<Xd.length;t++)Xd[t]._workInProgressVersionPrimary=null;Xd.length=0}var qu=Ar.ReactCurrentDispatcher,Jd=Ar.ReactCurrentBatchConfig,Ki=0,Be=null,tt=null,ht=null,Ic=!1,Ca=!1,Ja=0,XR=0;function Nt(){throw Error(P(321))}function rg(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!$n(t[n],e[n]))return!1;return!0}function ig(t,e,n,r,i,s){if(Ki=s,Be=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,qu.current=t===null||t.memoizedState===null?tA:nA,t=n(r,i),Ca){s=0;do{if(Ca=!1,Ja=0,25<=s)throw Error(P(301));s+=1,ht=tt=null,e.updateQueue=null,qu.current=rA,t=n(r,i)}while(Ca)}if(qu.current=Tc,e=tt!==null&&tt.next!==null,Ki=0,ht=tt=Be=null,Ic=!1,e)throw Error(P(300));return t}function sg(){var t=Ja!==0;return Ja=0,t}function jn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ht===null?Be.memoizedState=ht=t:ht=ht.next=t,ht}function En(){if(tt===null){var t=Be.alternate;t=t!==null?t.memoizedState:null}else t=tt.next;var e=ht===null?Be.memoizedState:ht.next;if(e!==null)ht=e,tt=t;else{if(t===null)throw Error(P(310));tt=t,t={memoizedState:tt.memoizedState,baseState:tt.baseState,baseQueue:tt.baseQueue,queue:tt.queue,next:null},ht===null?Be.memoizedState=ht=t:ht=ht.next=t}return ht}function Za(t,e){return typeof e=="function"?e(t):e}function Zd(t){var e=En(),n=e.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=t;var r=tt,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Ki&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,Be.lanes|=c,Qi|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,$n(r,e.memoizedState)||(Qt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Be.lanes|=s,Qi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ef(t){var e=En(),n=e.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);$n(s,e.memoizedState)||(Qt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function g1(){}function y1(t,e){var n=Be,r=En(),i=e(),s=!$n(r.memoizedState,i);if(s&&(r.memoizedState=i,Qt=!0),r=r.queue,og(w1.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||ht!==null&&ht.memoizedState.tag&1){if(n.flags|=2048,el(9,_1.bind(null,n,r,i,e),void 0,null),mt===null)throw Error(P(349));Ki&30||v1(n,e,i)}return i}function v1(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Be.updateQueue,e===null?(e={lastEffect:null,stores:null},Be.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function _1(t,e,n,r){e.value=n,e.getSnapshot=r,E1(e)&&C1(t)}function w1(t,e,n){return n(function(){E1(e)&&C1(t)})}function E1(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!$n(t,n)}catch{return!0}}function C1(t){var e=wr(t,1);e!==null&&Mn(e,t,1,-1)}function u_(t){var e=jn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Za,lastRenderedState:t},e.queue=t,t=t.dispatch=eA.bind(null,Be,t),[e.memoizedState,t]}function el(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Be.updateQueue,e===null?(e={lastEffect:null,stores:null},Be.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function S1(){return En().memoizedState}function Gu(t,e,n,r){var i=jn();Be.flags|=t,i.memoizedState=el(1|e,n,void 0,r===void 0?null:r)}function Ih(t,e,n,r){var i=En();r=r===void 0?null:r;var s=void 0;if(tt!==null){var o=tt.memoizedState;if(s=o.destroy,r!==null&&rg(r,o.deps)){i.memoizedState=el(e,n,s,r);return}}Be.flags|=t,i.memoizedState=el(1|e,n,s,r)}function c_(t,e){return Gu(8390656,8,t,e)}function og(t,e){return Ih(2048,8,t,e)}function I1(t,e){return Ih(4,2,t,e)}function T1(t,e){return Ih(4,4,t,e)}function k1(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function N1(t,e,n){return n=n!=null?n.concat([t]):null,Ih(4,4,k1.bind(null,e,t),n)}function ag(){}function R1(t,e){var n=En();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&rg(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function A1(t,e){var n=En();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&rg(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function D1(t,e,n){return Ki&21?($n(n,e)||(n=bE(),Be.lanes|=n,Qi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Qt=!0),t.memoizedState=n)}function JR(t,e){var n=ke;ke=n!==0&&4>n?n:4,t(!0);var r=Jd.transition;Jd.transition={};try{t(!1),e()}finally{ke=n,Jd.transition=r}}function x1(){return En().memoizedState}function ZR(t,e,n){var r=Zr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},P1(t))b1(e,n);else if(n=u1(t,e,n,r),n!==null){var i=Wt();Mn(n,t,r,i),O1(n,e,r)}}function eA(t,e,n){var r=Zr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(P1(t))b1(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,$n(a,o)){var l=e.interleaved;l===null?(i.next=i,Jm(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=u1(t,e,i,r),n!==null&&(i=Wt(),Mn(n,t,r,i),O1(n,e,r))}}function P1(t){var e=t.alternate;return t===Be||e!==null&&e===Be}function b1(t,e){Ca=Ic=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function O1(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,$m(t,n)}}var Tc={readContext:wn,useCallback:Nt,useContext:Nt,useEffect:Nt,useImperativeHandle:Nt,useInsertionEffect:Nt,useLayoutEffect:Nt,useMemo:Nt,useReducer:Nt,useRef:Nt,useState:Nt,useDebugValue:Nt,useDeferredValue:Nt,useTransition:Nt,useMutableSource:Nt,useSyncExternalStore:Nt,useId:Nt,unstable_isNewReconciler:!1},tA={readContext:wn,useCallback:function(t,e){return jn().memoizedState=[t,e===void 0?null:e],t},useContext:wn,useEffect:c_,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Gu(4194308,4,k1.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Gu(4194308,4,t,e)},useInsertionEffect:function(t,e){return Gu(4,2,t,e)},useMemo:function(t,e){var n=jn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=jn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=ZR.bind(null,Be,t),[r.memoizedState,t]},useRef:function(t){var e=jn();return t={current:t},e.memoizedState=t},useState:u_,useDebugValue:ag,useDeferredValue:function(t){return jn().memoizedState=t},useTransition:function(){var t=u_(!1),e=t[0];return t=JR.bind(null,t[1]),jn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Be,i=jn();if($e){if(n===void 0)throw Error(P(407));n=n()}else{if(n=e(),mt===null)throw Error(P(349));Ki&30||v1(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,c_(w1.bind(null,r,s,t),[t]),r.flags|=2048,el(9,_1.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=jn(),e=mt.identifierPrefix;if($e){var n=cr,r=ur;n=(r&~(1<<32-On(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ja++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=XR++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},nA={readContext:wn,useCallback:R1,useContext:wn,useEffect:og,useImperativeHandle:N1,useInsertionEffect:I1,useLayoutEffect:T1,useMemo:A1,useReducer:Zd,useRef:S1,useState:function(){return Zd(Za)},useDebugValue:ag,useDeferredValue:function(t){var e=En();return D1(e,tt.memoizedState,t)},useTransition:function(){var t=Zd(Za)[0],e=En().memoizedState;return[t,e]},useMutableSource:g1,useSyncExternalStore:y1,useId:x1,unstable_isNewReconciler:!1},rA={readContext:wn,useCallback:R1,useContext:wn,useEffect:og,useImperativeHandle:N1,useInsertionEffect:I1,useLayoutEffect:T1,useMemo:A1,useReducer:ef,useRef:S1,useState:function(){return ef(Za)},useDebugValue:ag,useDeferredValue:function(t){var e=En();return tt===null?e.memoizedState=t:D1(e,tt.memoizedState,t)},useTransition:function(){var t=ef(Za)[0],e=En().memoizedState;return[t,e]},useMutableSource:g1,useSyncExternalStore:y1,useId:x1,unstable_isNewReconciler:!1};function ao(t,e){try{var n="",r=e;do n+=xN(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function tf(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function yp(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var iA=typeof WeakMap=="function"?WeakMap:Map;function M1(t,e,n){n=mr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Nc||(Nc=!0,Np=r),yp(t,e)},n}function L1(t,e,n){n=mr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){yp(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){yp(t,e),typeof r!="function"&&(Jr===null?Jr=new Set([this]):Jr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function h_(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new iA;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=vA.bind(null,t,e,n),e.then(t,t))}function d_(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function f_(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=mr(-1,1),e.tag=2,Xr(n,e,1))),n.lanes|=1),t)}var sA=Ar.ReactCurrentOwner,Qt=!1;function Bt(t,e,n,r){e.child=t===null?p1(e,null,n,r):so(e,t.child,n,r)}function p_(t,e,n,r,i){n=n.render;var s=e.ref;return Hs(e,i),r=ig(t,e,n,r,s,i),n=sg(),t!==null&&!Qt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Er(t,e,i)):($e&&n&&qm(e),e.flags|=1,Bt(t,e,r,i),e.child)}function m_(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!mg(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,F1(t,e,s,r,i)):(t=Xu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:qa,n(o,r)&&t.ref===e.ref)return Er(t,e,i)}return e.flags|=1,t=ei(s,r),t.ref=e.ref,t.return=e,e.child=t}function F1(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(qa(s,r)&&t.ref===e.ref)if(Qt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Qt=!0);else return e.lanes=t.lanes,Er(t,e,i)}return vp(t,e,n,r,i)}function $1(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},xe(Ms,an),an|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,xe(Ms,an),an|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,xe(Ms,an),an|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,xe(Ms,an),an|=r;return Bt(t,e,i,n),e.child}function U1(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function vp(t,e,n,r,i){var s=Zt(n)?qi:$t.current;return s=ro(e,s),Hs(e,i),n=ig(t,e,n,r,s,i),r=sg(),t!==null&&!Qt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Er(t,e,i)):($e&&r&&qm(e),e.flags|=1,Bt(t,e,n,i),e.child)}function g_(t,e,n,r,i){if(Zt(n)){var s=!0;yc(e)}else s=!1;if(Hs(e,i),e.stateNode===null)Ku(t,e),d1(e,n,r),gp(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=wn(u):(u=Zt(n)?qi:$t.current,u=ro(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&a_(e,o,r,u),$r=!1;var d=e.memoizedState;o.state=d,Cc(e,r,o,i),l=e.memoizedState,a!==r||d!==l||Jt.current||$r?(typeof c=="function"&&(mp(e,n,c,r),l=e.memoizedState),(a=$r||o_(e,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,c1(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Rn(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=wn(l):(l=Zt(n)?qi:$t.current,l=ro(e,l));var m=n.getDerivedStateFromProps;(c=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&a_(e,o,r,l),$r=!1,d=e.memoizedState,o.state=d,Cc(e,r,o,i);var v=e.memoizedState;a!==h||d!==v||Jt.current||$r?(typeof m=="function"&&(mp(e,n,m,r),v=e.memoizedState),(u=$r||o_(e,n,u,r,d,v,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return _p(t,e,n,r,s,i)}function _p(t,e,n,r,i,s){U1(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&t_(e,n,!1),Er(t,e,s);r=e.stateNode,sA.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=so(e,t.child,null,s),e.child=so(e,null,a,s)):Bt(t,e,a,s),e.memoizedState=r.state,i&&t_(e,n,!0),e.child}function V1(t){var e=t.stateNode;e.pendingContext?e_(t,e.pendingContext,e.pendingContext!==e.context):e.context&&e_(t,e.context,!1),eg(t,e.containerInfo)}function y_(t,e,n,r,i){return io(),Km(i),e.flags|=256,Bt(t,e,n,r),e.child}var wp={dehydrated:null,treeContext:null,retryLane:0};function Ep(t){return{baseLanes:t,cachePool:null,transitions:null}}function z1(t,e,n){var r=e.pendingProps,i=ze.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),xe(ze,i&1),t===null)return fp(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Nh(o,r,0,null),t=zi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Ep(n),e.memoizedState=wp,t):lg(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return oA(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=ei(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=ei(a,s):(s=zi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Ep(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=wp,r}return s=t.child,t=s.sibling,r=ei(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function lg(t,e){return e=Nh({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Iu(t,e,n,r){return r!==null&&Km(r),so(e,t.child,null,n),t=lg(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function oA(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=tf(Error(P(422))),Iu(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Nh({mode:"visible",children:r.children},i,0,null),s=zi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&so(e,t.child,null,o),e.child.memoizedState=Ep(o),e.memoizedState=wp,s);if(!(e.mode&1))return Iu(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(P(419)),r=tf(s,r,void 0),Iu(t,e,o,r)}if(a=(o&t.childLanes)!==0,Qt||a){if(r=mt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,wr(t,i),Mn(r,t,i,-1))}return pg(),r=tf(Error(P(421))),Iu(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=_A.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,ln=Yr(i.nextSibling),cn=e,$e=!0,Dn=null,t!==null&&(gn[yn++]=ur,gn[yn++]=cr,gn[yn++]=Gi,ur=t.id,cr=t.overflow,Gi=e),e=lg(e,r.children),e.flags|=4096,e)}function v_(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),pp(t.return,e,n)}function nf(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function B1(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Bt(t,e,r.children,n),r=ze.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&v_(t,n,e);else if(t.tag===19)v_(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(xe(ze,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Sc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),nf(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Sc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}nf(e,!0,n,null,s);break;case"together":nf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ku(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Er(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Qi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(P(153));if(e.child!==null){for(t=e.child,n=ei(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ei(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function aA(t,e,n){switch(e.tag){case 3:V1(e),io();break;case 5:m1(e);break;case 1:Zt(e.type)&&yc(e);break;case 4:eg(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;xe(wc,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(xe(ze,ze.current&1),e.flags|=128,null):n&e.child.childLanes?z1(t,e,n):(xe(ze,ze.current&1),t=Er(t,e,n),t!==null?t.sibling:null);xe(ze,ze.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return B1(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),xe(ze,ze.current),r)break;return null;case 22:case 23:return e.lanes=0,$1(t,e,n)}return Er(t,e,n)}var j1,Cp,W1,H1;j1=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Cp=function(){};W1=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,bi(Kn.current);var s=null;switch(n){case"input":i=Wf(t,i),r=Wf(t,r),s=[];break;case"select":i=je({},i,{value:void 0}),r=je({},r,{value:void 0}),s=[];break;case"textarea":i=Gf(t,i),r=Gf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=mc)}Qf(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ua.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ua.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Pe("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};H1=function(t,e,n,r){n!==r&&(e.flags|=4)};function Jo(t,e){if(!$e)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Rt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function lA(t,e,n){var r=e.pendingProps;switch(Gm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Rt(e),null;case 1:return Zt(e.type)&&gc(),Rt(e),null;case 3:return r=e.stateNode,oo(),Me(Jt),Me($t),ng(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Cu(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Dn!==null&&(Dp(Dn),Dn=null))),Cp(t,e),Rt(e),null;case 5:tg(e);var i=bi(Xa.current);if(n=e.type,t!==null&&e.stateNode!=null)W1(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(P(166));return Rt(e),null}if(t=bi(Kn.current),Cu(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Hn]=e,r[Qa]=s,t=(e.mode&1)!==0,n){case"dialog":Pe("cancel",r),Pe("close",r);break;case"iframe":case"object":case"embed":Pe("load",r);break;case"video":case"audio":for(i=0;i<ha.length;i++)Pe(ha[i],r);break;case"source":Pe("error",r);break;case"img":case"image":case"link":Pe("error",r),Pe("load",r);break;case"details":Pe("toggle",r);break;case"input":Nv(r,s),Pe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Pe("invalid",r);break;case"textarea":Av(r,s),Pe("invalid",r)}Qf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Eu(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Eu(r.textContent,a,t),i=["children",""+a]):Ua.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Pe("scroll",r)}switch(n){case"input":fu(r),Rv(r,s,!0);break;case"textarea":fu(r),Dv(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=mc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=vE(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Hn]=e,t[Qa]=r,j1(t,e,!1,!1),e.stateNode=t;e:{switch(o=Yf(n,r),n){case"dialog":Pe("cancel",t),Pe("close",t),i=r;break;case"iframe":case"object":case"embed":Pe("load",t),i=r;break;case"video":case"audio":for(i=0;i<ha.length;i++)Pe(ha[i],t);i=r;break;case"source":Pe("error",t),i=r;break;case"img":case"image":case"link":Pe("error",t),Pe("load",t),i=r;break;case"details":Pe("toggle",t),i=r;break;case"input":Nv(t,r),i=Wf(t,r),Pe("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=je({},r,{value:void 0}),Pe("invalid",t);break;case"textarea":Av(t,r),i=Gf(t,r),Pe("invalid",t);break;default:i=r}Qf(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?EE(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&_E(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Va(t,l):typeof l=="number"&&Va(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ua.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Pe("scroll",t):l!=null&&Pm(t,s,l,o))}switch(n){case"input":fu(t),Rv(t,r,!1);break;case"textarea":fu(t),Dv(t);break;case"option":r.value!=null&&t.setAttribute("value",""+ui(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?zs(t,!!r.multiple,s,!1):r.defaultValue!=null&&zs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=mc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Rt(e),null;case 6:if(t&&e.stateNode!=null)H1(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(P(166));if(n=bi(Xa.current),bi(Kn.current),Cu(e)){if(r=e.stateNode,n=e.memoizedProps,r[Hn]=e,(s=r.nodeValue!==n)&&(t=cn,t!==null))switch(t.tag){case 3:Eu(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Eu(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Hn]=e,e.stateNode=r}return Rt(e),null;case 13:if(Me(ze),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if($e&&ln!==null&&e.mode&1&&!(e.flags&128))l1(),io(),e.flags|=98560,s=!1;else if(s=Cu(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(P(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(P(317));s[Hn]=e}else io(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Rt(e),s=!1}else Dn!==null&&(Dp(Dn),Dn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ze.current&1?rt===0&&(rt=3):pg())),e.updateQueue!==null&&(e.flags|=4),Rt(e),null);case 4:return oo(),Cp(t,e),t===null&&Ga(e.stateNode.containerInfo),Rt(e),null;case 10:return Xm(e.type._context),Rt(e),null;case 17:return Zt(e.type)&&gc(),Rt(e),null;case 19:if(Me(ze),s=e.memoizedState,s===null)return Rt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Jo(s,!1);else{if(rt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Sc(t),o!==null){for(e.flags|=128,Jo(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return xe(ze,ze.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ge()>lo&&(e.flags|=128,r=!0,Jo(s,!1),e.lanes=4194304)}else{if(!r)if(t=Sc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Jo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!$e)return Rt(e),null}else 2*Ge()-s.renderingStartTime>lo&&n!==1073741824&&(e.flags|=128,r=!0,Jo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ge(),e.sibling=null,n=ze.current,xe(ze,r?n&1|2:n&1),e):(Rt(e),null);case 22:case 23:return fg(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?an&1073741824&&(Rt(e),e.subtreeFlags&6&&(e.flags|=8192)):Rt(e),null;case 24:return null;case 25:return null}throw Error(P(156,e.tag))}function uA(t,e){switch(Gm(e),e.tag){case 1:return Zt(e.type)&&gc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return oo(),Me(Jt),Me($t),ng(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return tg(e),null;case 13:if(Me(ze),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(P(340));io()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Me(ze),null;case 4:return oo(),null;case 10:return Xm(e.type._context),null;case 22:case 23:return fg(),null;case 24:return null;default:return null}}var Tu=!1,xt=!1,cA=typeof WeakSet=="function"?WeakSet:Set,L=null;function Os(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){We(t,e,r)}else n.current=null}function Sp(t,e,n){try{n()}catch(r){We(t,e,r)}}var __=!1;function hA(t,e){if(op=dc,t=QE(),Hm(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var m;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(m=h.firstChild)!==null;)d=h,h=m;for(;;){if(h===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(m=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(ap={focusedElem:t,selectionRange:n},dc=!1,L=e;L!==null;)if(e=L,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,L=t;else for(;L!==null;){e=L;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var _=v.memoizedProps,g=v.memoizedState,p=e.stateNode,f=p.getSnapshotBeforeUpdate(e.elementType===e.type?_:Rn(e.type,_),g);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(E){We(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,L=t;break}L=e.return}return v=__,__=!1,v}function Sa(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Sp(e,n,s)}i=i.next}while(i!==r)}}function Th(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Ip(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function q1(t){var e=t.alternate;e!==null&&(t.alternate=null,q1(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Hn],delete e[Qa],delete e[cp],delete e[GR],delete e[KR])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function G1(t){return t.tag===5||t.tag===3||t.tag===4}function w_(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||G1(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Tp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=mc));else if(r!==4&&(t=t.child,t!==null))for(Tp(t,e,n),t=t.sibling;t!==null;)Tp(t,e,n),t=t.sibling}function kp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(kp(t,e,n),t=t.sibling;t!==null;)kp(t,e,n),t=t.sibling}var yt=null,An=!1;function Mr(t,e,n){for(n=n.child;n!==null;)K1(t,e,n),n=n.sibling}function K1(t,e,n){if(Gn&&typeof Gn.onCommitFiberUnmount=="function")try{Gn.onCommitFiberUnmount(yh,n)}catch{}switch(n.tag){case 5:xt||Os(n,e);case 6:var r=yt,i=An;yt=null,Mr(t,e,n),yt=r,An=i,yt!==null&&(An?(t=yt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):yt.removeChild(n.stateNode));break;case 18:yt!==null&&(An?(t=yt,n=n.stateNode,t.nodeType===8?Qd(t.parentNode,n):t.nodeType===1&&Qd(t,n),Wa(t)):Qd(yt,n.stateNode));break;case 4:r=yt,i=An,yt=n.stateNode.containerInfo,An=!0,Mr(t,e,n),yt=r,An=i;break;case 0:case 11:case 14:case 15:if(!xt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Sp(n,e,o),i=i.next}while(i!==r)}Mr(t,e,n);break;case 1:if(!xt&&(Os(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){We(n,e,a)}Mr(t,e,n);break;case 21:Mr(t,e,n);break;case 22:n.mode&1?(xt=(r=xt)||n.memoizedState!==null,Mr(t,e,n),xt=r):Mr(t,e,n);break;default:Mr(t,e,n)}}function E_(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new cA),e.forEach(function(r){var i=wA.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Nn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:yt=a.stateNode,An=!1;break e;case 3:yt=a.stateNode.containerInfo,An=!0;break e;case 4:yt=a.stateNode.containerInfo,An=!0;break e}a=a.return}if(yt===null)throw Error(P(160));K1(s,o,i),yt=null,An=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){We(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Q1(e,t),e=e.sibling}function Q1(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Nn(e,t),Bn(t),r&4){try{Sa(3,t,t.return),Th(3,t)}catch(_){We(t,t.return,_)}try{Sa(5,t,t.return)}catch(_){We(t,t.return,_)}}break;case 1:Nn(e,t),Bn(t),r&512&&n!==null&&Os(n,n.return);break;case 5:if(Nn(e,t),Bn(t),r&512&&n!==null&&Os(n,n.return),t.flags&32){var i=t.stateNode;try{Va(i,"")}catch(_){We(t,t.return,_)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&gE(i,s),Yf(a,o);var u=Yf(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?EE(i,h):c==="dangerouslySetInnerHTML"?_E(i,h):c==="children"?Va(i,h):Pm(i,c,h,u)}switch(a){case"input":Hf(i,s);break;case"textarea":yE(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?zs(i,!!s.multiple,m,!1):d!==!!s.multiple&&(s.defaultValue!=null?zs(i,!!s.multiple,s.defaultValue,!0):zs(i,!!s.multiple,s.multiple?[]:"",!1))}i[Qa]=s}catch(_){We(t,t.return,_)}}break;case 6:if(Nn(e,t),Bn(t),r&4){if(t.stateNode===null)throw Error(P(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(_){We(t,t.return,_)}}break;case 3:if(Nn(e,t),Bn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Wa(e.containerInfo)}catch(_){We(t,t.return,_)}break;case 4:Nn(e,t),Bn(t);break;case 13:Nn(e,t),Bn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(hg=Ge())),r&4&&E_(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(xt=(u=xt)||c,Nn(e,t),xt=u):Nn(e,t),Bn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(L=t,c=t.child;c!==null;){for(h=L=c;L!==null;){switch(d=L,m=d.child,d.tag){case 0:case 11:case 14:case 15:Sa(4,d,d.return);break;case 1:Os(d,d.return);var v=d.stateNode;if(typeof v.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(_){We(r,n,_)}}break;case 5:Os(d,d.return);break;case 22:if(d.memoizedState!==null){S_(h);continue}}m!==null?(m.return=d,L=m):S_(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=wE("display",o))}catch(_){We(t,t.return,_)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(_){We(t,t.return,_)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Nn(e,t),Bn(t),r&4&&E_(t);break;case 21:break;default:Nn(e,t),Bn(t)}}function Bn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(G1(n)){var r=n;break e}n=n.return}throw Error(P(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Va(i,""),r.flags&=-33);var s=w_(t);kp(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=w_(t);Tp(t,a,o);break;default:throw Error(P(161))}}catch(l){We(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function dA(t,e,n){L=t,Y1(t)}function Y1(t,e,n){for(var r=(t.mode&1)!==0;L!==null;){var i=L,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Tu;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||xt;a=Tu;var u=xt;if(Tu=o,(xt=l)&&!u)for(L=i;L!==null;)o=L,l=o.child,o.tag===22&&o.memoizedState!==null?I_(i):l!==null?(l.return=o,L=l):I_(i);for(;s!==null;)L=s,Y1(s),s=s.sibling;L=i,Tu=a,xt=u}C_(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,L=s):C_(t)}}function C_(t){for(;L!==null;){var e=L;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:xt||Th(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!xt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Rn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&s_(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}s_(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&Wa(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}xt||e.flags&512&&Ip(e)}catch(d){We(e,e.return,d)}}if(e===t){L=null;break}if(n=e.sibling,n!==null){n.return=e.return,L=n;break}L=e.return}}function S_(t){for(;L!==null;){var e=L;if(e===t){L=null;break}var n=e.sibling;if(n!==null){n.return=e.return,L=n;break}L=e.return}}function I_(t){for(;L!==null;){var e=L;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Th(4,e)}catch(l){We(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){We(e,i,l)}}var s=e.return;try{Ip(e)}catch(l){We(e,s,l)}break;case 5:var o=e.return;try{Ip(e)}catch(l){We(e,o,l)}}}catch(l){We(e,e.return,l)}if(e===t){L=null;break}var a=e.sibling;if(a!==null){a.return=e.return,L=a;break}L=e.return}}var fA=Math.ceil,kc=Ar.ReactCurrentDispatcher,ug=Ar.ReactCurrentOwner,_n=Ar.ReactCurrentBatchConfig,ve=0,mt=null,Xe=null,wt=0,an=0,Ms=_i(0),rt=0,tl=null,Qi=0,kh=0,cg=0,Ia=null,Gt=null,hg=0,lo=1/0,or=null,Nc=!1,Np=null,Jr=null,ku=!1,qr=null,Rc=0,Ta=0,Rp=null,Qu=-1,Yu=0;function Wt(){return ve&6?Ge():Qu!==-1?Qu:Qu=Ge()}function Zr(t){return t.mode&1?ve&2&&wt!==0?wt&-wt:YR.transition!==null?(Yu===0&&(Yu=bE()),Yu):(t=ke,t!==0||(t=window.event,t=t===void 0?16:VE(t.type)),t):1}function Mn(t,e,n,r){if(50<Ta)throw Ta=0,Rp=null,Error(P(185));Rl(t,n,r),(!(ve&2)||t!==mt)&&(t===mt&&(!(ve&2)&&(kh|=n),rt===4&&Vr(t,wt)),en(t,r),n===1&&ve===0&&!(e.mode&1)&&(lo=Ge()+500,Ch&&wi()))}function en(t,e){var n=t.callbackNode;YN(t,e);var r=hc(t,t===mt?wt:0);if(r===0)n!==null&&bv(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&bv(n),e===1)t.tag===0?QR(T_.bind(null,t)):s1(T_.bind(null,t)),HR(function(){!(ve&6)&&wi()}),n=null;else{switch(OE(r)){case 1:n=Fm;break;case 4:n=xE;break;case 16:n=cc;break;case 536870912:n=PE;break;default:n=cc}n=iC(n,X1.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function X1(t,e){if(Qu=-1,Yu=0,ve&6)throw Error(P(327));var n=t.callbackNode;if(qs()&&t.callbackNode!==n)return null;var r=hc(t,t===mt?wt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Ac(t,r);else{e=r;var i=ve;ve|=2;var s=Z1();(mt!==t||wt!==e)&&(or=null,lo=Ge()+500,Vi(t,e));do try{gA();break}catch(a){J1(t,a)}while(1);Ym(),kc.current=s,ve=i,Xe!==null?e=0:(mt=null,wt=0,e=rt)}if(e!==0){if(e===2&&(i=tp(t),i!==0&&(r=i,e=Ap(t,i))),e===1)throw n=tl,Vi(t,0),Vr(t,r),en(t,Ge()),n;if(e===6)Vr(t,r);else{if(i=t.current.alternate,!(r&30)&&!pA(i)&&(e=Ac(t,r),e===2&&(s=tp(t),s!==0&&(r=s,e=Ap(t,s))),e===1))throw n=tl,Vi(t,0),Vr(t,r),en(t,Ge()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(P(345));case 2:Ri(t,Gt,or);break;case 3:if(Vr(t,r),(r&130023424)===r&&(e=hg+500-Ge(),10<e)){if(hc(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Wt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=up(Ri.bind(null,t,Gt,or),e);break}Ri(t,Gt,or);break;case 4:if(Vr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-On(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ge()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*fA(r/1960))-r,10<r){t.timeoutHandle=up(Ri.bind(null,t,Gt,or),r);break}Ri(t,Gt,or);break;case 5:Ri(t,Gt,or);break;default:throw Error(P(329))}}}return en(t,Ge()),t.callbackNode===n?X1.bind(null,t):null}function Ap(t,e){var n=Ia;return t.current.memoizedState.isDehydrated&&(Vi(t,e).flags|=256),t=Ac(t,e),t!==2&&(e=Gt,Gt=n,e!==null&&Dp(e)),t}function Dp(t){Gt===null?Gt=t:Gt.push.apply(Gt,t)}function pA(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!$n(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Vr(t,e){for(e&=~cg,e&=~kh,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-On(e),r=1<<n;t[n]=-1,e&=~r}}function T_(t){if(ve&6)throw Error(P(327));qs();var e=hc(t,0);if(!(e&1))return en(t,Ge()),null;var n=Ac(t,e);if(t.tag!==0&&n===2){var r=tp(t);r!==0&&(e=r,n=Ap(t,r))}if(n===1)throw n=tl,Vi(t,0),Vr(t,e),en(t,Ge()),n;if(n===6)throw Error(P(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ri(t,Gt,or),en(t,Ge()),null}function dg(t,e){var n=ve;ve|=1;try{return t(e)}finally{ve=n,ve===0&&(lo=Ge()+500,Ch&&wi())}}function Yi(t){qr!==null&&qr.tag===0&&!(ve&6)&&qs();var e=ve;ve|=1;var n=_n.transition,r=ke;try{if(_n.transition=null,ke=1,t)return t()}finally{ke=r,_n.transition=n,ve=e,!(ve&6)&&wi()}}function fg(){an=Ms.current,Me(Ms)}function Vi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,WR(n)),Xe!==null)for(n=Xe.return;n!==null;){var r=n;switch(Gm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&gc();break;case 3:oo(),Me(Jt),Me($t),ng();break;case 5:tg(r);break;case 4:oo();break;case 13:Me(ze);break;case 19:Me(ze);break;case 10:Xm(r.type._context);break;case 22:case 23:fg()}n=n.return}if(mt=t,Xe=t=ei(t.current,null),wt=an=e,rt=0,tl=null,cg=kh=Qi=0,Gt=Ia=null,Pi!==null){for(e=0;e<Pi.length;e++)if(n=Pi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Pi=null}return t}function J1(t,e){do{var n=Xe;try{if(Ym(),qu.current=Tc,Ic){for(var r=Be.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ic=!1}if(Ki=0,ht=tt=Be=null,Ca=!1,Ja=0,ug.current=null,n===null||n.return===null){rt=1,tl=e,Xe=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=wt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=d_(o);if(m!==null){m.flags&=-257,f_(m,o,a,s,e),m.mode&1&&h_(s,u,e),e=m,l=u;var v=e.updateQueue;if(v===null){var _=new Set;_.add(l),e.updateQueue=_}else v.add(l);break e}else{if(!(e&1)){h_(s,u,e),pg();break e}l=Error(P(426))}}else if($e&&a.mode&1){var g=d_(o);if(g!==null){!(g.flags&65536)&&(g.flags|=256),f_(g,o,a,s,e),Km(ao(l,a));break e}}s=l=ao(l,a),rt!==4&&(rt=2),Ia===null?Ia=[s]:Ia.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=M1(s,l,e);i_(s,p);break e;case 1:a=l;var f=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Jr===null||!Jr.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=L1(s,a,e);i_(s,E);break e}}s=s.return}while(s!==null)}tC(n)}catch(T){e=T,Xe===n&&n!==null&&(Xe=n=n.return);continue}break}while(1)}function Z1(){var t=kc.current;return kc.current=Tc,t===null?Tc:t}function pg(){(rt===0||rt===3||rt===2)&&(rt=4),mt===null||!(Qi&268435455)&&!(kh&268435455)||Vr(mt,wt)}function Ac(t,e){var n=ve;ve|=2;var r=Z1();(mt!==t||wt!==e)&&(or=null,Vi(t,e));do try{mA();break}catch(i){J1(t,i)}while(1);if(Ym(),ve=n,kc.current=r,Xe!==null)throw Error(P(261));return mt=null,wt=0,rt}function mA(){for(;Xe!==null;)eC(Xe)}function gA(){for(;Xe!==null&&!zN();)eC(Xe)}function eC(t){var e=rC(t.alternate,t,an);t.memoizedProps=t.pendingProps,e===null?tC(t):Xe=e,ug.current=null}function tC(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=uA(n,e),n!==null){n.flags&=32767,Xe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{rt=6,Xe=null;return}}else if(n=lA(n,e,an),n!==null){Xe=n;return}if(e=e.sibling,e!==null){Xe=e;return}Xe=e=t}while(e!==null);rt===0&&(rt=5)}function Ri(t,e,n){var r=ke,i=_n.transition;try{_n.transition=null,ke=1,yA(t,e,n,r)}finally{_n.transition=i,ke=r}return null}function yA(t,e,n,r){do qs();while(qr!==null);if(ve&6)throw Error(P(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(P(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(XN(t,s),t===mt&&(Xe=mt=null,wt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ku||(ku=!0,iC(cc,function(){return qs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=_n.transition,_n.transition=null;var o=ke;ke=1;var a=ve;ve|=4,ug.current=null,hA(t,n),Q1(n,t),FR(ap),dc=!!op,ap=op=null,t.current=n,dA(n),BN(),ve=a,ke=o,_n.transition=s}else t.current=n;if(ku&&(ku=!1,qr=t,Rc=i),s=t.pendingLanes,s===0&&(Jr=null),HN(n.stateNode),en(t,Ge()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Nc)throw Nc=!1,t=Np,Np=null,t;return Rc&1&&t.tag!==0&&qs(),s=t.pendingLanes,s&1?t===Rp?Ta++:(Ta=0,Rp=t):Ta=0,wi(),null}function qs(){if(qr!==null){var t=OE(Rc),e=_n.transition,n=ke;try{if(_n.transition=null,ke=16>t?16:t,qr===null)var r=!1;else{if(t=qr,qr=null,Rc=0,ve&6)throw Error(P(331));var i=ve;for(ve|=4,L=t.current;L!==null;){var s=L,o=s.child;if(L.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(L=u;L!==null;){var c=L;switch(c.tag){case 0:case 11:case 15:Sa(8,c,s)}var h=c.child;if(h!==null)h.return=c,L=h;else for(;L!==null;){c=L;var d=c.sibling,m=c.return;if(q1(c),c===u){L=null;break}if(d!==null){d.return=m,L=d;break}L=m}}}var v=s.alternate;if(v!==null){var _=v.child;if(_!==null){v.child=null;do{var g=_.sibling;_.sibling=null,_=g}while(_!==null)}}L=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,L=o;else e:for(;L!==null;){if(s=L,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Sa(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,L=p;break e}L=s.return}}var f=t.current;for(L=f;L!==null;){o=L;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,L=y;else e:for(o=f;L!==null;){if(a=L,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Th(9,a)}}catch(T){We(a,a.return,T)}if(a===o){L=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,L=E;break e}L=a.return}}if(ve=i,wi(),Gn&&typeof Gn.onPostCommitFiberRoot=="function")try{Gn.onPostCommitFiberRoot(yh,t)}catch{}r=!0}return r}finally{ke=n,_n.transition=e}}return!1}function k_(t,e,n){e=ao(n,e),e=M1(t,e,1),t=Xr(t,e,1),e=Wt(),t!==null&&(Rl(t,1,e),en(t,e))}function We(t,e,n){if(t.tag===3)k_(t,t,n);else for(;e!==null;){if(e.tag===3){k_(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Jr===null||!Jr.has(r))){t=ao(n,t),t=L1(e,t,1),e=Xr(e,t,1),t=Wt(),e!==null&&(Rl(e,1,t),en(e,t));break}}e=e.return}}function vA(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Wt(),t.pingedLanes|=t.suspendedLanes&n,mt===t&&(wt&n)===n&&(rt===4||rt===3&&(wt&130023424)===wt&&500>Ge()-hg?Vi(t,0):cg|=n),en(t,e)}function nC(t,e){e===0&&(t.mode&1?(e=gu,gu<<=1,!(gu&130023424)&&(gu=4194304)):e=1);var n=Wt();t=wr(t,e),t!==null&&(Rl(t,e,n),en(t,n))}function _A(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),nC(t,n)}function wA(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(P(314))}r!==null&&r.delete(e),nC(t,n)}var rC;rC=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Jt.current)Qt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Qt=!1,aA(t,e,n);Qt=!!(t.flags&131072)}else Qt=!1,$e&&e.flags&1048576&&o1(e,_c,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ku(t,e),t=e.pendingProps;var i=ro(e,$t.current);Hs(e,n),i=ig(null,e,r,t,i,n);var s=sg();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Zt(r)?(s=!0,yc(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Zm(e),i.updater=Sh,e.stateNode=i,i._reactInternals=e,gp(e,r,t,n),e=_p(null,e,r,!0,s,n)):(e.tag=0,$e&&s&&qm(e),Bt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ku(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=CA(r),t=Rn(r,t),i){case 0:e=vp(null,e,r,t,n);break e;case 1:e=g_(null,e,r,t,n);break e;case 11:e=p_(null,e,r,t,n);break e;case 14:e=m_(null,e,r,Rn(r.type,t),n);break e}throw Error(P(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Rn(r,i),vp(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Rn(r,i),g_(t,e,r,i,n);case 3:e:{if(V1(e),t===null)throw Error(P(387));r=e.pendingProps,s=e.memoizedState,i=s.element,c1(t,e),Cc(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ao(Error(P(423)),e),e=y_(t,e,r,n,i);break e}else if(r!==i){i=ao(Error(P(424)),e),e=y_(t,e,r,n,i);break e}else for(ln=Yr(e.stateNode.containerInfo.firstChild),cn=e,$e=!0,Dn=null,n=p1(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(io(),r===i){e=Er(t,e,n);break e}Bt(t,e,r,n)}e=e.child}return e;case 5:return m1(e),t===null&&fp(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,lp(r,i)?o=null:s!==null&&lp(r,s)&&(e.flags|=32),U1(t,e),Bt(t,e,o,n),e.child;case 6:return t===null&&fp(e),null;case 13:return z1(t,e,n);case 4:return eg(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=so(e,null,r,n):Bt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Rn(r,i),p_(t,e,r,i,n);case 7:return Bt(t,e,e.pendingProps,n),e.child;case 8:return Bt(t,e,e.pendingProps.children,n),e.child;case 12:return Bt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,xe(wc,r._currentValue),r._currentValue=o,s!==null)if($n(s.value,o)){if(s.children===i.children&&!Jt.current){e=Er(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=mr(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),pp(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(P(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),pp(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Bt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Hs(e,n),i=wn(i),r=r(i),e.flags|=1,Bt(t,e,r,n),e.child;case 14:return r=e.type,i=Rn(r,e.pendingProps),i=Rn(r.type,i),m_(t,e,r,i,n);case 15:return F1(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Rn(r,i),Ku(t,e),e.tag=1,Zt(r)?(t=!0,yc(e)):t=!1,Hs(e,n),d1(e,r,i),gp(e,r,i,n),_p(null,e,r,!0,t,n);case 19:return B1(t,e,n);case 22:return $1(t,e,n)}throw Error(P(156,e.tag))};function iC(t,e){return DE(t,e)}function EA(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vn(t,e,n,r){return new EA(t,e,n,r)}function mg(t){return t=t.prototype,!(!t||!t.isReactComponent)}function CA(t){if(typeof t=="function")return mg(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Om)return 11;if(t===Mm)return 14}return 2}function ei(t,e){var n=t.alternate;return n===null?(n=vn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Xu(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")mg(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ts:return zi(n.children,i,s,e);case bm:o=8,i|=8;break;case Vf:return t=vn(12,n,e,i|2),t.elementType=Vf,t.lanes=s,t;case zf:return t=vn(13,n,e,i),t.elementType=zf,t.lanes=s,t;case Bf:return t=vn(19,n,e,i),t.elementType=Bf,t.lanes=s,t;case fE:return Nh(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case hE:o=10;break e;case dE:o=9;break e;case Om:o=11;break e;case Mm:o=14;break e;case Fr:o=16,r=null;break e}throw Error(P(130,t==null?t:typeof t,""))}return e=vn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function zi(t,e,n,r){return t=vn(7,t,r,e),t.lanes=n,t}function Nh(t,e,n,r){return t=vn(22,t,r,e),t.elementType=fE,t.lanes=n,t.stateNode={isHidden:!1},t}function rf(t,e,n){return t=vn(6,t,null,e),t.lanes=n,t}function sf(t,e,n){return e=vn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function SA(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=$d(0),this.expirationTimes=$d(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$d(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function gg(t,e,n,r,i,s,o,a,l){return t=new SA(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=vn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Zm(s),t}function IA(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Is,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function sC(t){if(!t)return ci;t=t._reactInternals;e:{if(hs(t)!==t||t.tag!==1)throw Error(P(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Zt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(P(171))}if(t.tag===1){var n=t.type;if(Zt(n))return i1(t,n,e)}return e}function oC(t,e,n,r,i,s,o,a,l){return t=gg(n,r,!0,t,i,s,o,a,l),t.context=sC(null),n=t.current,r=Wt(),i=Zr(n),s=mr(r,i),s.callback=e??null,Xr(n,s,i),t.current.lanes=i,Rl(t,i,r),en(t,r),t}function Rh(t,e,n,r){var i=e.current,s=Wt(),o=Zr(i);return n=sC(n),e.context===null?e.context=n:e.pendingContext=n,e=mr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Xr(i,e,o),t!==null&&(Mn(t,i,o,s),Hu(t,i,o)),o}function Dc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function N_(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function yg(t,e){N_(t,e),(t=t.alternate)&&N_(t,e)}function TA(){return null}var aC=typeof reportError=="function"?reportError:function(t){console.error(t)};function vg(t){this._internalRoot=t}Ah.prototype.render=vg.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(P(409));Rh(t,e,null,null)};Ah.prototype.unmount=vg.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Yi(function(){Rh(null,t,null,null)}),e[_r]=null}};function Ah(t){this._internalRoot=t}Ah.prototype.unstable_scheduleHydration=function(t){if(t){var e=FE();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ur.length&&e!==0&&e<Ur[n].priority;n++);Ur.splice(n,0,t),n===0&&UE(t)}};function _g(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Dh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function R_(){}function kA(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Dc(o);s.call(u)}}var o=oC(e,r,t,0,null,!1,!1,"",R_);return t._reactRootContainer=o,t[_r]=o.current,Ga(t.nodeType===8?t.parentNode:t),Yi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Dc(l);a.call(u)}}var l=gg(t,0,!1,null,null,!1,!1,"",R_);return t._reactRootContainer=l,t[_r]=l.current,Ga(t.nodeType===8?t.parentNode:t),Yi(function(){Rh(e,l,n,r)}),l}function xh(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Dc(o);a.call(l)}}Rh(e,o,t,i)}else o=kA(n,e,t,i,r);return Dc(o)}ME=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ca(e.pendingLanes);n!==0&&($m(e,n|1),en(e,Ge()),!(ve&6)&&(lo=Ge()+500,wi()))}break;case 13:Yi(function(){var r=wr(t,1);if(r!==null){var i=Wt();Mn(r,t,1,i)}}),yg(t,1)}};Um=function(t){if(t.tag===13){var e=wr(t,134217728);if(e!==null){var n=Wt();Mn(e,t,134217728,n)}yg(t,134217728)}};LE=function(t){if(t.tag===13){var e=Zr(t),n=wr(t,e);if(n!==null){var r=Wt();Mn(n,t,e,r)}yg(t,e)}};FE=function(){return ke};$E=function(t,e){var n=ke;try{return ke=t,e()}finally{ke=n}};Jf=function(t,e,n){switch(e){case"input":if(Hf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Eh(r);if(!i)throw Error(P(90));mE(r),Hf(r,i)}}}break;case"textarea":yE(t,n);break;case"select":e=n.value,e!=null&&zs(t,!!n.multiple,e,!1)}};IE=dg;TE=Yi;var NA={usingClientEntryPoint:!1,Events:[Dl,As,Eh,CE,SE,dg]},Zo={findFiberByHostInstance:xi,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},RA={bundleType:Zo.bundleType,version:Zo.version,rendererPackageName:Zo.rendererPackageName,rendererConfig:Zo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ar.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=RE(t),t===null?null:t.stateNode},findFiberByHostInstance:Zo.findFiberByHostInstance||TA,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Nu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Nu.isDisabled&&Nu.supportsFiber)try{yh=Nu.inject(RA),Gn=Nu}catch{}}pn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=NA;pn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_g(e))throw Error(P(200));return IA(t,e,null,n)};pn.createRoot=function(t,e){if(!_g(t))throw Error(P(299));var n=!1,r="",i=aC;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=gg(t,1,!1,null,null,n,!1,r,i),t[_r]=e.current,Ga(t.nodeType===8?t.parentNode:t),new vg(e)};pn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(P(188)):(t=Object.keys(t).join(","),Error(P(268,t)));return t=RE(e),t=t===null?null:t.stateNode,t};pn.flushSync=function(t){return Yi(t)};pn.hydrate=function(t,e,n){if(!Dh(e))throw Error(P(200));return xh(null,t,e,!0,n)};pn.hydrateRoot=function(t,e,n){if(!_g(t))throw Error(P(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=aC;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=oC(e,null,t,1,n??null,i,!1,s,o),t[_r]=e.current,Ga(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Ah(e)};pn.render=function(t,e,n){if(!Dh(e))throw Error(P(200));return xh(null,t,e,!1,n)};pn.unmountComponentAtNode=function(t){if(!Dh(t))throw Error(P(40));return t._reactRootContainer?(Yi(function(){xh(null,null,t,!1,function(){t._reactRootContainer=null,t[_r]=null})}),!0):!1};pn.unstable_batchedUpdates=dg;pn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Dh(n))throw Error(P(200));if(t==null||t._reactInternals===void 0)throw Error(P(38));return xh(t,e,n,!1,r)};pn.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=pn})(TN);const AA=Zw(oc);var A_=oc;Ff.createRoot=A_.createRoot,Ff.hydrateRoot=A_.hydrateRoot;/**
 * @remix-run/router v1.5.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ge(){return ge=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ge.apply(this,arguments)}var Qe;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Qe||(Qe={}));const D_="popstate";function DA(t){t===void 0&&(t={});function e(i,s){let{pathname:o="/",search:a="",hash:l=""}=er(i.location.hash.substr(1));return nl("",{pathname:o,search:a,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let o=i.document.querySelector("base"),a="";if(o&&o.getAttribute("href")){let l=i.location.href,u=l.indexOf("#");a=u===-1?l:l.slice(0,u)}return a+"#"+(typeof s=="string"?s:Ji(s))}function r(i,s){Xi(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return PA(e,n,r,t)}function le(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Xi(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function xA(){return Math.random().toString(36).substr(2,8)}function x_(t,e){return{usr:t.state,key:t.key,idx:e}}function nl(t,e,n,r){return n===void 0&&(n=null),ge({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?er(e):e,{state:n,key:e&&e.key||r||xA()})}function Ji(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function er(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function PA(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Qe.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(ge({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function h(){a=Qe.Pop;let g=c(),p=g==null?null:g-u;u=g,l&&l({action:a,location:_.location,delta:p})}function d(g,p){a=Qe.Push;let f=nl(_.location,g,p);n&&n(f,g),u=c()+1;let y=x_(f,u),E=_.createHref(f);try{o.pushState(y,"",E)}catch{i.location.assign(E)}s&&l&&l({action:a,location:_.location,delta:1})}function m(g,p){a=Qe.Replace;let f=nl(_.location,g,p);n&&n(f,g),u=c();let y=x_(f,u),E=_.createHref(f);o.replaceState(y,"",E),s&&l&&l({action:a,location:_.location,delta:0})}function v(g){let p=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof g=="string"?g:Ji(g);return le(p,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,p)}let _={get action(){return a},get location(){return t(i,o)},listen(g){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(D_,h),l=g,()=>{i.removeEventListener(D_,h),l=null}},createHref(g){return e(i,g)},createURL:v,encodeLocation(g){let p=v(g);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:d,replace:m,go(g){return o.go(g)}};return _}var et;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(et||(et={}));const bA=new Set(["lazy","caseSensitive","path","id","index","children"]);function OA(t){return t.index===!0}function lC(t,e,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),t.map((i,s)=>{let o=[...n,s],a=typeof i.id=="string"?i.id:o.join("-");if(le(i.index!==!0||!i.children,"Cannot specify children on an index route"),le(!r[a],'Found a route id collision on id "'+a+`".  Route id's must be globally unique within Data Router usages`),OA(i)){let l=ge({},i,{hasErrorBoundary:e(i),id:a});return r[a]=l,l}else{let l=ge({},i,{id:a,hasErrorBoundary:e(i),children:void 0});return r[a]=l,i.children&&(l.children=lC(i.children,e,o,r)),l}})}function Ls(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?er(e):e,i=Ph(r.pathname||"/",n);if(i==null)return null;let s=uC(t);MA(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=WA(s[a],GA(i));return o}function uC(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(le(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=ti([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(le(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),uC(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:BA(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of cC(s.path))i(s,o,l)}),e}function cC(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=cC(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function MA(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:jA(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const LA=/^:\w+$/,FA=3,$A=2,UA=1,VA=10,zA=-2,P_=t=>t==="*";function BA(t,e){let n=t.split("/"),r=n.length;return n.some(P_)&&(r+=zA),e&&(r+=$A),n.filter(i=>!P_(i)).reduce((i,s)=>i+(LA.test(s)?FA:s===""?UA:VA),r)}function jA(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function WA(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=HA({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:ti([i,c.pathname]),pathnameBase:XA(ti([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=ti([i,c.pathnameBase]))}return s}function HA(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=qA(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{if(c==="*"){let d=a[h]||"";o=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}return u[c]=KA(a[h]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function qA(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Xi(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function GA(t){try{return decodeURI(t)}catch(e){return Xi(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function KA(t,e){try{return decodeURIComponent(t)}catch(n){return Xi(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function Ph(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function QA(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?er(t):t;return{pathname:n?n.startsWith("/")?n:YA(n,e):e,search:JA(r),hash:ZA(i)}}function YA(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function of(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function wg(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function hC(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=er(t):(i=ge({},t),le(!i.pathname||!i.pathname.includes("?"),of("?","pathname","search",i)),le(!i.pathname||!i.pathname.includes("#"),of("#","pathname","hash",i)),le(!i.search||!i.search.includes("#"),of("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let h=e.length-1;if(o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),h-=1;i.pathname=d.join("/")}a=h>=0?e[h]:"/"}let l=QA(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const ti=t=>t.join("/").replace(/\/\/+/g,"/"),XA=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),JA=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,ZA=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class Eg{constructor(e,n,r,i){i===void 0&&(i=!1),this.status=e,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function dC(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const fC=["post","put","patch","delete"],eD=new Set(fC),tD=["get",...fC],nD=new Set(tD),rD=new Set([301,302,303,307,308]),iD=new Set([307,308]),af={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},sD={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},b_={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},pC=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,mC=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",oD=!mC,aD=t=>!!t.hasErrorBoundary;function lD(t){le(t.routes.length>0,"You must provide a non-empty routes array to createRouter");let e=t.detectErrorBoundary||aD,n={},r=lC(t.routes,e,void 0,n),i,s=ge({v7_normalizeFormMethod:!1},t.future),o=null,a=new Set,l=null,u=null,c=null,h=t.hydrationData!=null,d=Ls(r,t.history.location,t.basename),m=null;if(d==null){let S=Wn(404,{pathname:t.history.location.pathname}),{matches:k,route:A}=V_(r);d=k,m={[A.id]:S}}let v=!d.some(S=>S.route.lazy)&&(!d.some(S=>S.route.loader)||t.hydrationData!=null),_,g={historyAction:t.history.action,location:t.history.location,matches:d,initialized:v,navigation:af,restoreScrollPosition:t.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||m,fetchers:new Map,blockers:new Map},p=Qe.Pop,f=!1,y,E=!1,T=!1,D=[],I=[],R=new Map,ie=0,Q=-1,Ce=new Map,at=new Set,V=new Map,_e=new Map,Ie=new Map,rn=!1;function nr(){return o=t.history.listen(S=>{let{action:k,location:A,delta:U}=S;if(rn){rn=!1;return}Xi(Ie.size===0||U!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let B=Tt({currentLocation:g.location,nextLocation:A,historyAction:k});if(B&&U!=null){rn=!0,t.history.go(U*-1),Ti(B,{state:"blocked",location:A,proceed(){Ti(B,{state:"proceeding",proceed:void 0,reset:void 0,location:A}),t.history.go(U)},reset(){Or(B),$({blockers:new Map(_.state.blockers)})}});return}return ae(k,A)}),g.initialized||ae(Qe.Pop,g.location),_}function M(){o&&o(),a.clear(),y&&y.abort(),g.fetchers.forEach((S,k)=>gs(k)),g.blockers.forEach((S,k)=>Or(k))}function W(S){return a.add(S),()=>a.delete(S)}function $(S){g=ge({},g,S),a.forEach(k=>k(g))}function we(S,k){var A,U;let B=g.actionData!=null&&g.navigation.formMethod!=null&&ar(g.navigation.formMethod)&&g.navigation.state==="loading"&&((A=S.state)==null?void 0:A._isRedirect)!==!0,Y;k.actionData?Object.keys(k.actionData).length>0?Y=k.actionData:Y=null:B?Y=g.actionData:Y=null;let X=k.loaderData?U_(g.loaderData,k.loaderData,k.matches||[],k.errors):g.loaderData;for(let[K]of Ie)Or(K);let ne=f===!0||g.navigation.formMethod!=null&&ar(g.navigation.formMethod)&&((U=S.state)==null?void 0:U._isRedirect)!==!0;i&&(r=i,i=void 0),$(ge({},k,{actionData:Y,loaderData:X,historyAction:p,location:S,initialized:!0,navigation:af,revalidation:"idle",restoreScrollPosition:vs(S,k.matches||g.matches),preventScrollReset:ne,blockers:new Map(g.blockers)})),E||p===Qe.Pop||(p===Qe.Push?t.history.push(S,S.state):p===Qe.Replace&&t.history.replace(S,S.state)),p=Qe.Pop,f=!1,E=!1,T=!1,D=[],I=[]}async function x(S,k){if(typeof S=="number"){t.history.go(S);return}let{path:A,submission:U,error:B}=O_(S,s,k),Y=g.location,X=nl(g.location,A,k&&k.state);X=ge({},X,t.history.encodeLocation(X));let ne=k&&k.replace!=null?k.replace:void 0,K=Qe.Push;ne===!0?K=Qe.Replace:ne===!1||U!=null&&ar(U.formMethod)&&U.formAction===g.location.pathname+g.location.search&&(K=Qe.Replace);let Ne=k&&"preventScrollReset"in k?k.preventScrollReset===!0:void 0,ye=Tt({currentLocation:Y,nextLocation:X,historyAction:K});if(ye){Ti(ye,{state:"blocked",location:X,proceed(){Ti(ye,{state:"proceeding",proceed:void 0,reset:void 0,location:X}),x(S,k)},reset(){Or(ye),$({blockers:new Map(g.blockers)})}});return}return await ae(K,X,{submission:U,pendingError:B,preventScrollReset:Ne,replace:k&&k.replace})}function ee(){if(Bo(),$({revalidation:"loading"}),g.navigation.state!=="submitting"){if(g.navigation.state==="idle"){ae(g.historyAction,g.location,{startUninterruptedRevalidation:!0});return}ae(p||g.historyAction,g.navigation.location,{overrideNavigation:g.navigation})}}async function ae(S,k,A){y&&y.abort(),y=null,p=S,E=(A&&A.startUninterruptedRevalidation)===!0,zn(g.location,g.matches),f=(A&&A.preventScrollReset)===!0;let U=i||r,B=A&&A.overrideNavigation,Y=Ls(U,k,t.basename);if(!Y){let de=Wn(404,{pathname:k.pathname}),{matches:H,route:Ae}=V_(U);ir(),we(k,{matches:H,loaderData:{},errors:{[Ae.id]:de}});return}if(fD(g.location,k)&&!(A&&A.submission&&ar(A.submission.formMethod))){we(k,{matches:Y});return}y=new AbortController;let X=ta(t.history,k,y.signal,A&&A.submission),ne,K;if(A&&A.pendingError)K={[Fs(Y).route.id]:A.pendingError};else if(A&&A.submission&&ar(A.submission.formMethod)){let de=await sn(X,k,A.submission,Y,{replace:A.replace});if(de.shortCircuited)return;ne=de.pendingActionData,K=de.pendingActionError,B=ge({state:"loading",location:k},A.submission),X=new Request(X.url,{signal:X.signal})}let{shortCircuited:Ne,loaderData:ye,errors:on}=await Ze(X,k,Y,B,A&&A.submission,A&&A.fetcherSubmission,A&&A.replace,ne,K);Ne||(y=null,we(k,ge({matches:Y},ne?{actionData:ne}:{},{loaderData:ye,errors:on})))}async function sn(S,k,A,U,B){Bo();let Y=ge({state:"submitting",location:k},A);$({navigation:Y});let X,ne=xp(U,k);if(!ne.route.action&&!ne.route.lazy)X={type:et.error,error:Wn(405,{method:S.method,pathname:k.pathname,routeId:ne.route.id})};else if(X=await ea("action",S,ne,U,n,e,_.basename),S.signal.aborted)return{shortCircuited:!0};if(Gs(X)){let K;return B&&B.replace!=null?K=B.replace:K=X.location===g.location.pathname+g.location.search,await Ii(g,X,{submission:A,replace:K}),{shortCircuited:!0}}if(ka(X)){let K=Fs(U,ne.route.id);return(B&&B.replace)!==!0&&(p=Qe.Push),{pendingActionData:{},pendingActionError:{[K.route.id]:X.error}}}if(Oi(X))throw Wn(400,{type:"defer-action"});return{pendingActionData:{[ne.route.id]:X.data}}}async function Ze(S,k,A,U,B,Y,X,ne,K){let Ne=U;Ne||(Ne=ge({state:"loading",location:k,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},B));let ye=B||Y?B||Y:Ne.formMethod&&Ne.formAction&&Ne.formData&&Ne.formEncType?{formMethod:Ne.formMethod,formAction:Ne.formAction,formData:Ne.formData,formEncType:Ne.formEncType}:void 0,on=i||r,[de,H]=M_(t.history,g,A,ye,k,T,D,I,V,on,t.basename,ne,K);if(ir(kt=>!(A&&A.some(kn=>kn.route.id===kt))||de&&de.some(kn=>kn.route.id===kt)),de.length===0&&H.length===0)return we(k,ge({matches:A,loaderData:{},errors:K||null},ne?{actionData:ne}:{})),{shortCircuited:!0};if(!E){H.forEach(kn=>{let ki=g.fetchers.get(kn.key),Ho={state:"loading",data:ki&&ki.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};g.fetchers.set(kn.key,Ho)});let kt=ne||g.actionData;$(ge({navigation:Ne},kt?Object.keys(kt).length===0?{actionData:null}:{actionData:kt}:{},H.length>0?{fetchers:new Map(g.fetchers)}:{}))}Q=++ie,H.forEach(kt=>R.set(kt.key,y));let{results:Ae,loaderResults:Fe,fetcherResults:In}=await zo(g.matches,A,de,H,S);if(S.signal.aborted)return{shortCircuited:!0};H.forEach(kt=>R.delete(kt.key));let Tn=z_(Ae);if(Tn)return await Ii(g,Tn,{replace:X}),{shortCircuited:!0};let{loaderData:_s,errors:Dd}=$_(g,A,de,Fe,K,H,In,_e);_e.forEach((kt,kn)=>{kt.subscribe(ki=>{(ki||kt.done)&&_e.delete(kn)})}),Sn();let xd=It(Q);return ge({loaderData:_s,errors:Dd},xd||H.length>0?{fetchers:new Map(g.fetchers)}:{})}function Cn(S){return g.fetchers.get(S)||sD}function uu(S,k,A,U){if(oD)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");R.has(S)&&zt(S);let Y=Ls(i||r,A,t.basename);if(!Y){br(S,k,Wn(404,{pathname:A}));return}let{path:X,submission:ne}=O_(A,s,U,!0),K=xp(Y,X);if(f=(U&&U.preventScrollReset)===!0,ne&&ar(ne.formMethod)){Ad(S,k,X,K,Y,ne);return}V.set(S,{routeId:k,path:X}),cu(S,k,X,K,Y,ne)}async function Ad(S,k,A,U,B,Y){if(Bo(),V.delete(S),!U.route.action&&!U.route.lazy){let sr=Wn(405,{method:Y.formMethod,pathname:A,routeId:k});br(S,k,sr);return}let X=g.fetchers.get(S),ne=ge({state:"submitting"},Y,{data:X&&X.data," _hasFetcherDoneAnything ":!0});g.fetchers.set(S,ne),$({fetchers:new Map(g.fetchers)});let K=new AbortController,Ne=ta(t.history,A,K.signal,Y);R.set(S,K);let ye=await ea("action",Ne,U,B,n,e,_.basename);if(Ne.signal.aborted){R.get(S)===K&&R.delete(S);return}if(Gs(ye)){R.delete(S),at.add(S);let sr=ge({state:"loading"},Y,{data:void 0," _hasFetcherDoneAnything ":!0});return g.fetchers.set(S,sr),$({fetchers:new Map(g.fetchers)}),Ii(g,ye,{submission:Y,isFetchActionRedirect:!0})}if(ka(ye)){br(S,k,ye.error);return}if(Oi(ye))throw Wn(400,{type:"defer-action"});let on=g.navigation.location||g.location,de=ta(t.history,on,K.signal),H=i||r,Ae=g.navigation.state!=="idle"?Ls(H,g.navigation.location,t.basename):g.matches;le(Ae,"Didn't find any matches after fetcher action");let Fe=++ie;Ce.set(S,Fe);let In=ge({state:"loading",data:ye.data},Y,{" _hasFetcherDoneAnything ":!0});g.fetchers.set(S,In);let[Tn,_s]=M_(t.history,g,Ae,Y,on,T,D,I,V,H,t.basename,{[U.route.id]:ye.data},void 0);_s.filter(sr=>sr.key!==S).forEach(sr=>{let Pd=sr.key,wv=g.fetchers.get(Pd),eN={state:"loading",data:wv&&wv.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};g.fetchers.set(Pd,eN),R.set(Pd,K)}),$({fetchers:new Map(g.fetchers)});let{results:Dd,loaderResults:xd,fetcherResults:kt}=await zo(g.matches,Ae,Tn,_s,de);if(K.signal.aborted)return;Ce.delete(S),R.delete(S),_s.forEach(sr=>R.delete(sr.key));let kn=z_(Dd);if(kn)return Ii(g,kn);let{loaderData:ki,errors:Ho}=$_(g,g.matches,Tn,xd,void 0,_s,kt,_e),Jk={state:"idle",data:ye.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};g.fetchers.set(S,Jk);let Zk=It(Fe);g.navigation.state==="loading"&&Fe>Q?(le(p,"Expected pending action"),y&&y.abort(),we(g.navigation.location,{matches:Ae,loaderData:ki,errors:Ho,fetchers:new Map(g.fetchers)})):($(ge({errors:Ho,loaderData:U_(g.loaderData,ki,Ae,Ho)},Zk?{fetchers:new Map(g.fetchers)}:{})),T=!1)}async function cu(S,k,A,U,B,Y){let X=g.fetchers.get(S),ne=ge({state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},Y,{data:X&&X.data," _hasFetcherDoneAnything ":!0});g.fetchers.set(S,ne),$({fetchers:new Map(g.fetchers)});let K=new AbortController,Ne=ta(t.history,A,K.signal);R.set(S,K);let ye=await ea("loader",Ne,U,B,n,e,_.basename);if(Oi(ye)&&(ye=await _C(ye,Ne.signal,!0)||ye),R.get(S)===K&&R.delete(S),Ne.signal.aborted)return;if(Gs(ye)){await Ii(g,ye);return}if(ka(ye)){let de=Fs(g.matches,k);g.fetchers.delete(S),$({fetchers:new Map(g.fetchers),errors:{[de.route.id]:ye.error}});return}le(!Oi(ye),"Unhandled fetcher deferred data");let on={state:"idle",data:ye.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};g.fetchers.set(S,on),$({fetchers:new Map(g.fetchers)})}async function Ii(S,k,A){var U;let{submission:B,replace:Y,isFetchActionRedirect:X}=A===void 0?{}:A;k.revalidate&&(T=!0);let ne=nl(S.location,k.location,ge({_isRedirect:!0},X?{_isFetchActionRedirect:!0}:{}));if(le(ne,"Expected a location on the redirect navigation"),pC.test(k.location)&&mC&&typeof((U=window)==null?void 0:U.location)<"u"){let H=t.history.createURL(k.location),Ae=Ph(H.pathname,t.basename||"/")==null;if(window.location.origin!==H.origin||Ae){Y?window.location.replace(k.location):window.location.assign(k.location);return}}y=null;let K=Y===!0?Qe.Replace:Qe.Push,{formMethod:Ne,formAction:ye,formEncType:on,formData:de}=S.navigation;!B&&Ne&&ye&&de&&on&&(B={formMethod:Ne,formAction:ye,formEncType:on,formData:de}),iD.has(k.status)&&B&&ar(B.formMethod)?await ae(K,ne,{submission:ge({},B,{formAction:k.location}),preventScrollReset:f}):X?await ae(K,ne,{overrideNavigation:{state:"loading",location:ne,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},fetcherSubmission:B,preventScrollReset:f}):await ae(K,ne,{overrideNavigation:{state:"loading",location:ne,formMethod:B?B.formMethod:void 0,formAction:B?B.formAction:void 0,formEncType:B?B.formEncType:void 0,formData:B?B.formData:void 0},preventScrollReset:f})}async function zo(S,k,A,U,B){let Y=await Promise.all([...A.map(K=>ea("loader",B,K,k,n,e,_.basename)),...U.map(K=>K.matches&&K.match?ea("loader",ta(t.history,K.path,B.signal),K.match,K.matches,n,e,_.basename):{type:et.error,error:Wn(404,{pathname:K.path})})]),X=Y.slice(0,A.length),ne=Y.slice(A.length);return await Promise.all([B_(S,A,X,B.signal,!1,g.loaderData),B_(S,U.map(K=>K.match),ne,B.signal,!0)]),{results:Y,loaderResults:X,fetcherResults:ne}}function Bo(){T=!0,D.push(...ir()),V.forEach((S,k)=>{R.has(k)&&(I.push(k),zt(k))})}function br(S,k,A){let U=Fs(g.matches,k);gs(S),$({errors:{[U.route.id]:A},fetchers:new Map(g.fetchers)})}function gs(S){R.has(S)&&zt(S),V.delete(S),Ce.delete(S),at.delete(S),g.fetchers.delete(S)}function zt(S){let k=R.get(S);le(k,"Expected fetch controller: "+S),k.abort(),R.delete(S)}function jo(S){for(let k of S){let U={state:"idle",data:Cn(k).data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};g.fetchers.set(k,U)}}function Sn(){let S=[];for(let k of at){let A=g.fetchers.get(k);le(A,"Expected fetcher: "+k),A.state==="loading"&&(at.delete(k),S.push(k))}jo(S)}function It(S){let k=[];for(let[A,U]of Ce)if(U<S){let B=g.fetchers.get(A);le(B,"Expected fetcher: "+A),B.state==="loading"&&(zt(A),Ce.delete(A),k.push(A))}return jo(k),k.length>0}function rr(S,k){let A=g.blockers.get(S)||b_;return Ie.get(S)!==k&&Ie.set(S,k),A}function Or(S){g.blockers.delete(S),Ie.delete(S)}function Ti(S,k){let A=g.blockers.get(S)||b_;le(A.state==="unblocked"&&k.state==="blocked"||A.state==="blocked"&&k.state==="blocked"||A.state==="blocked"&&k.state==="proceeding"||A.state==="blocked"&&k.state==="unblocked"||A.state==="proceeding"&&k.state==="unblocked","Invalid blocker state transition: "+A.state+" -> "+k.state),g.blockers.set(S,k),$({blockers:new Map(g.blockers)})}function Tt(S){let{currentLocation:k,nextLocation:A,historyAction:U}=S;if(Ie.size===0)return;Ie.size>1&&Xi(!1,"A router only supports one blocker at a time");let B=Array.from(Ie.entries()),[Y,X]=B[B.length-1],ne=g.blockers.get(Y);if(!(ne&&ne.state==="proceeding")&&X({currentLocation:k,nextLocation:A,historyAction:U}))return Y}function ir(S){let k=[];return _e.forEach((A,U)=>{(!S||S(U))&&(A.cancel(),k.push(U),_e.delete(U))}),k}function ys(S,k,A){if(l=S,c=k,u=A||(U=>U.key),!h&&g.navigation===af){h=!0;let U=vs(g.location,g.matches);U!=null&&$({restoreScrollPosition:U})}return()=>{l=null,c=null,u=null}}function zn(S,k){if(l&&u&&c){let A=k.map(B=>j_(B,g.loaderData)),U=u(S,A)||S.key;l[U]=c()}}function vs(S,k){if(l&&u&&c){let A=k.map(Y=>j_(Y,g.loaderData)),U=u(S,A)||S.key,B=l[U];if(typeof B=="number")return B}return null}function Wo(S){i=S}return _={get basename(){return t.basename},get state(){return g},get routes(){return r},initialize:nr,subscribe:W,enableScrollRestoration:ys,navigate:x,fetch:uu,revalidate:ee,createHref:S=>t.history.createHref(S),encodeLocation:S=>t.history.encodeLocation(S),getFetcher:Cn,deleteFetcher:gs,dispose:M,getBlocker:rr,deleteBlocker:Or,_internalFetchControllers:R,_internalActiveDeferreds:_e,_internalSetRoutes:Wo},_}function uD(t){return t!=null&&"formData"in t}function O_(t,e,n,r){r===void 0&&(r=!1);let i=typeof t=="string"?t:Ji(t);if(!n||!uD(n))return{path:i};if(n.formMethod&&!gD(n.formMethod))return{path:i,error:Wn(405,{method:n.formMethod})};let s;if(n.formData){let l=n.formMethod||"get";if(s={formMethod:e.v7_normalizeFormMethod?l.toUpperCase():l.toLowerCase(),formAction:vC(i),formEncType:n&&n.formEncType||"application/x-www-form-urlencoded",formData:n.formData},ar(s.formMethod))return{path:i,submission:s}}let o=er(i),a=yC(n.formData);return r&&o.search&&wC(o.search)&&a.append("index",""),o.search="?"+a,{path:Ji(o),submission:s}}function cD(t,e){let n=t;if(e){let r=t.findIndex(i=>i.route.id===e);r>=0&&(n=t.slice(0,r))}return n}function M_(t,e,n,r,i,s,o,a,l,u,c,h,d){let m=d?Object.values(d)[0]:h?Object.values(h)[0]:void 0,v=t.createURL(e.location),_=t.createURL(i),g=s||v.toString()===_.toString()||v.search!==_.search,p=d?Object.keys(d)[0]:void 0,y=cD(n,p).filter((T,D)=>{if(T.route.lazy)return!0;if(T.route.loader==null)return!1;if(hD(e.loaderData,e.matches[D],T)||o.some(ie=>ie===T.route.id))return!0;let I=e.matches[D],R=T;return L_(T,ge({currentUrl:v,currentParams:I.params,nextUrl:_,nextParams:R.params},r,{actionResult:m,defaultShouldRevalidate:g||gC(I,R)}))}),E=[];return l.forEach((T,D)=>{if(!n.some(Q=>Q.route.id===T.routeId))return;let I=Ls(u,T.path,c);if(!I){E.push(ge({key:D},T,{matches:null,match:null}));return}let R=xp(I,T.path);if(a.includes(D)){E.push(ge({key:D,matches:I,match:R},T));return}L_(R,ge({currentUrl:v,currentParams:e.matches[e.matches.length-1].params,nextUrl:_,nextParams:n[n.length-1].params},r,{actionResult:m,defaultShouldRevalidate:g}))&&E.push(ge({key:D,matches:I,match:R},T))}),[y,E]}function hD(t,e,n){let r=!e||n.route.id!==e.route.id,i=t[n.route.id]===void 0;return r||i}function gC(t,e){let n=t.route.path;return t.pathname!==e.pathname||n!=null&&n.endsWith("*")&&t.params["*"]!==e.params["*"]}function L_(t,e){if(t.route.shouldRevalidate){let n=t.route.shouldRevalidate(e);if(typeof n=="boolean")return n}return e.defaultShouldRevalidate}async function F_(t,e,n){if(!t.lazy)return;let r=await t.lazy();if(!t.lazy)return;let i=n[t.id];le(i,"No route found in manifest");let s={};for(let o in r){let l=i[o]!==void 0&&o!=="hasErrorBoundary";Xi(!l,'Route "'+i.id+'" has a static property "'+o+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+o+'" will be ignored.')),!l&&!bA.has(o)&&(s[o]=r[o])}Object.assign(i,s),Object.assign(i,{hasErrorBoundary:e(ge({},i)),lazy:void 0})}async function ea(t,e,n,r,i,s,o,a,l,u){o===void 0&&(o="/"),a===void 0&&(a=!1),l===void 0&&(l=!1);let c,h,d,m=g=>{let p,f=new Promise((y,E)=>p=E);return d=()=>p(),e.signal.addEventListener("abort",d),Promise.race([g({request:e,params:n.params,context:u}),f])};try{let g=n.route[t];if(n.route.lazy)if(g)h=(await Promise.all([m(g),F_(n.route,s,i)]))[0];else if(await F_(n.route,s,i),g=n.route[t],g)h=await m(g);else{if(t==="action")throw Wn(405,{method:e.method,pathname:new URL(e.url).pathname,routeId:n.route.id});return{type:et.data,data:void 0}}else le(g,"Could not find the "+t+' to run on the "'+n.route.id+'" route'),h=await m(g);le(h!==void 0,"You defined "+(t==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+t+"` ")+"function. Please return a value or `null`.")}catch(g){c=et.error,h=g}finally{d&&e.signal.removeEventListener("abort",d)}if(mD(h)){let g=h.status;if(rD.has(g)){let y=h.headers.get("Location");if(le(y,"Redirects returned/thrown from loaders/actions must have a Location header"),pC.test(y)){if(!a){let E=new URL(e.url),T=y.startsWith("//")?new URL(E.protocol+y):new URL(y),D=Ph(T.pathname,o)!=null;T.origin===E.origin&&D&&(y=T.pathname+T.search+T.hash)}}else{let E=r.slice(0,r.indexOf(n)+1),T=wg(E).map(I=>I.pathnameBase),D=hC(y,T,new URL(e.url).pathname);if(le(Ji(D),"Unable to resolve redirect location: "+y),o){let I=D.pathname;D.pathname=I==="/"?o:ti([o,I])}y=Ji(D)}if(a)throw h.headers.set("Location",y),h;return{type:et.redirect,status:g,location:y,revalidate:h.headers.get("X-Remix-Revalidate")!==null}}if(l)throw{type:c||et.data,response:h};let p,f=h.headers.get("Content-Type");return f&&/\bapplication\/json\b/.test(f)?p=await h.json():p=await h.text(),c===et.error?{type:c,error:new Eg(g,h.statusText,p),headers:h.headers}:{type:et.data,data:p,statusCode:h.status,headers:h.headers}}if(c===et.error)return{type:c,error:h};if(pD(h)){var v,_;return{type:et.deferred,deferredData:h,statusCode:(v=h.init)==null?void 0:v.status,headers:((_=h.init)==null?void 0:_.headers)&&new Headers(h.init.headers)}}return{type:et.data,data:h}}function ta(t,e,n,r){let i=t.createURL(vC(e)).toString(),s={signal:n};if(r&&ar(r.formMethod)){let{formMethod:o,formEncType:a,formData:l}=r;s.method=o.toUpperCase(),s.body=a==="application/x-www-form-urlencoded"?yC(l):l}return new Request(i,s)}function yC(t){let e=new URLSearchParams;for(let[n,r]of t.entries())e.append(n,r instanceof File?r.name:r);return e}function dD(t,e,n,r,i){let s={},o=null,a,l=!1,u={};return n.forEach((c,h)=>{let d=e[h].route.id;if(le(!Gs(c),"Cannot handle redirect results in processLoaderData"),ka(c)){let m=Fs(t,d),v=c.error;r&&(v=Object.values(r)[0],r=void 0),o=o||{},o[m.route.id]==null&&(o[m.route.id]=v),s[d]=void 0,l||(l=!0,a=dC(c.error)?c.error.status:500),c.headers&&(u[d]=c.headers)}else Oi(c)?(i.set(d,c.deferredData),s[d]=c.deferredData.data):s[d]=c.data,c.statusCode!=null&&c.statusCode!==200&&!l&&(a=c.statusCode),c.headers&&(u[d]=c.headers)}),r&&(o=r,s[Object.keys(r)[0]]=void 0),{loaderData:s,errors:o,statusCode:a||200,loaderHeaders:u}}function $_(t,e,n,r,i,s,o,a){let{loaderData:l,errors:u}=dD(e,n,r,i,a);for(let c=0;c<s.length;c++){let{key:h,match:d}=s[c];le(o!==void 0&&o[c]!==void 0,"Did not find corresponding fetcher result");let m=o[c];if(ka(m)){let v=Fs(t.matches,d==null?void 0:d.route.id);u&&u[v.route.id]||(u=ge({},u,{[v.route.id]:m.error})),t.fetchers.delete(h)}else if(Gs(m))le(!1,"Unhandled fetcher revalidation redirect");else if(Oi(m))le(!1,"Unhandled fetcher deferred data");else{let v={state:"idle",data:m.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};t.fetchers.set(h,v)}}return{loaderData:l,errors:u}}function U_(t,e,n,r){let i=ge({},e);for(let s of n){let o=s.route.id;if(e.hasOwnProperty(o)?e[o]!==void 0&&(i[o]=e[o]):t[o]!==void 0&&s.route.loader&&(i[o]=t[o]),r&&r.hasOwnProperty(o))break}return i}function Fs(t,e){return(e?t.slice(0,t.findIndex(r=>r.route.id===e)+1):[...t]).reverse().find(r=>r.route.hasErrorBoundary===!0)||t[0]}function V_(t){let e=t.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function Wn(t,e){let{pathname:n,routeId:r,method:i,type:s}=e===void 0?{}:e,o="Unknown Server Error",a="Unknown @remix-run/router error";return t===400?(o="Bad Request",i&&n&&r?a="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":s==="defer-action"&&(a="defer() is not supported in actions")):t===403?(o="Forbidden",a='Route "'+r+'" does not match URL "'+n+'"'):t===404?(o="Not Found",a='No route matches URL "'+n+'"'):t===405&&(o="Method Not Allowed",i&&n&&r?a="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(a='Invalid request method "'+i.toUpperCase()+'"')),new Eg(t||500,o,new Error(a),!0)}function z_(t){for(let e=t.length-1;e>=0;e--){let n=t[e];if(Gs(n))return n}}function vC(t){let e=typeof t=="string"?er(t):t;return Ji(ge({},e,{hash:""}))}function fD(t,e){return t.pathname===e.pathname&&t.search===e.search&&t.hash!==e.hash}function Oi(t){return t.type===et.deferred}function ka(t){return t.type===et.error}function Gs(t){return(t&&t.type)===et.redirect}function pD(t){let e=t;return e&&typeof e=="object"&&typeof e.data=="object"&&typeof e.subscribe=="function"&&typeof e.cancel=="function"&&typeof e.resolveData=="function"}function mD(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.headers=="object"&&typeof t.body<"u"}function gD(t){return nD.has(t.toLowerCase())}function ar(t){return eD.has(t.toLowerCase())}async function B_(t,e,n,r,i,s){for(let o=0;o<n.length;o++){let a=n[o],l=e[o];if(!l)continue;let u=t.find(h=>h.route.id===l.route.id),c=u!=null&&!gC(u,l)&&(s&&s[l.route.id])!==void 0;Oi(a)&&(i||c)&&await _C(a,r,i).then(h=>{h&&(n[o]=h||n[o])})}}async function _C(t,e,n){if(n===void 0&&(n=!1),!await t.deferredData.resolveData(e)){if(n)try{return{type:et.data,data:t.deferredData.unwrappedData}}catch(i){return{type:et.error,error:i}}return{type:et.data,data:t.deferredData.data}}}function wC(t){return new URLSearchParams(t).getAll("index").some(e=>e==="")}function j_(t,e){let{route:n,pathname:r,params:i}=t;return{id:n.id,pathname:r,params:i,data:e[n.id],handle:n.handle}}function xp(t,e){let n=typeof e=="string"?er(e).search:e.search;if(t[t.length-1].route.index&&wC(n||""))return t[t.length-1];let r=wg(t);return r[r.length-1]}/**
 * React Router v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function yD(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}const vD=typeof Object.is=="function"?Object.is:yD,{useState:_D,useEffect:wD,useLayoutEffect:ED,useDebugValue:CD}=Lf;function SD(t,e,n){const r=e(),[{inst:i},s]=_D({inst:{value:r,getSnapshot:e}});return ED(()=>{i.value=r,i.getSnapshot=e,lf(i)&&s({inst:i})},[t,r,e]),wD(()=>(lf(i)&&s({inst:i}),t(()=>{lf(i)&&s({inst:i})})),[t]),CD(r),r}function lf(t){const e=t.getSnapshot,n=t.value;try{const r=e();return!vD(n,r)}catch{return!0}}function ID(t,e,n){return e()}const TD=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",kD=!TD,ND=kD?ID:SD,RD="useSyncExternalStore"in Lf?(t=>t.useSyncExternalStore)(Lf):ND,Cg=C.createContext(null),Sg=C.createContext(null),Ig=C.createContext(null),bh=C.createContext(null),ko=C.createContext({outlet:null,matches:[]}),EC=C.createContext(null);function Pp(){return Pp=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Pp.apply(this,arguments)}function Oh(){return C.useContext(bh)!=null}function CC(){return Oh()||le(!1),C.useContext(bh).location}function AD(){Oh()||le(!1);let{basename:t,navigator:e}=C.useContext(Ig),{matches:n}=C.useContext(ko),{pathname:r}=CC(),i=JSON.stringify(wg(n).map(a=>a.pathnameBase)),s=C.useRef(!1);return C.useEffect(()=>{s.current=!0}),C.useCallback(function(a,l){if(l===void 0&&(l={}),!s.current)return;if(typeof a=="number"){e.go(a);return}let u=hC(a,JSON.parse(i),r,l.relative==="path");t!=="/"&&(u.pathname=u.pathname==="/"?t:ti([t,u.pathname])),(l.replace?e.replace:e.push)(u,l.state,l)},[t,e,i,r])}const DD=C.createContext(null);function xD(t){let e=C.useContext(ko).outlet;return e&&C.createElement(DD.Provider,{value:t},e)}function PD(t,e){Oh()||le(!1);let{navigator:n}=C.useContext(Ig),r=C.useContext(Sg),{matches:i}=C.useContext(ko),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=CC(),u;if(e){var c;let _=typeof e=="string"?er(e):e;a==="/"||(c=_.pathname)!=null&&c.startsWith(a)||le(!1),u=_}else u=l;let h=u.pathname||"/",d=a==="/"?h:h.slice(a.length)||"/",m=Ls(t,{pathname:d}),v=LD(m&&m.map(_=>Object.assign({},_,{params:Object.assign({},o,_.params),pathname:ti([a,n.encodeLocation?n.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?a:ti([a,n.encodeLocation?n.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),i,r||void 0);return e&&v?C.createElement(bh.Provider,{value:{location:Pp({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Qe.Pop}},v):v}function bD(){let t=VD(),e=dC(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},e),n?C.createElement("pre",{style:i},n):null,s)}class OD extends C.Component{constructor(e){super(e),this.state={location:e.location,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location?{error:e.error,location:e.location}:{error:e.error||n.error,location:n.location}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?C.createElement(ko.Provider,{value:this.props.routeContext},C.createElement(EC.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function MD(t){let{routeContext:e,match:n,children:r}=t,i=C.useContext(Cg);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),C.createElement(ko.Provider,{value:e},r)}function LD(t,e,n){if(e===void 0&&(e=[]),t==null)if(n!=null&&n.errors)t=n.matches;else return null;let r=t,i=n==null?void 0:n.errors;if(i!=null){let s=r.findIndex(o=>o.route.id&&(i==null?void 0:i[o.route.id]));s>=0||le(!1),r=r.slice(0,Math.min(r.length,s+1))}return r.reduceRight((s,o,a)=>{let l=o.route.id?i==null?void 0:i[o.route.id]:null,u=null;n&&(o.route.ErrorBoundary?u=C.createElement(o.route.ErrorBoundary,null):o.route.errorElement?u=o.route.errorElement:u=C.createElement(bD,null));let c=e.concat(r.slice(0,a+1)),h=()=>{let d=s;return l?d=u:o.route.Component?d=C.createElement(o.route.Component,null):o.route.element&&(d=o.route.element),C.createElement(MD,{match:o,routeContext:{outlet:s,matches:c},children:d})};return n&&(o.route.ErrorBoundary||o.route.errorElement||a===0)?C.createElement(OD,{location:n.location,component:u,error:l,children:h(),routeContext:{outlet:null,matches:c}}):h()},null)}var W_;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator"})(W_||(W_={}));var xc;(function(t){t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator"})(xc||(xc={}));function FD(t){let e=C.useContext(Sg);return e||le(!1),e}function $D(t){let e=C.useContext(ko);return e||le(!1),e}function UD(t){let e=$D(),n=e.matches[e.matches.length-1];return n.route.id||le(!1),n.route.id}function VD(){var t;let e=C.useContext(EC),n=FD(xc.UseRouteError),r=UD(xc.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function zD(t){let{fallbackElement:e,router:n}=t,r=C.useCallback(()=>n.state,[n]),i=RD(n.subscribe,r,r),s=C.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:l=>n.navigate(l),push:(l,u,c)=>n.navigate(l,{state:u,preventScrollReset:c==null?void 0:c.preventScrollReset}),replace:(l,u,c)=>n.navigate(l,{replace:!0,state:u,preventScrollReset:c==null?void 0:c.preventScrollReset})}),[n]),o=n.basename||"/",a=C.useMemo(()=>({router:n,navigator:s,static:!1,basename:o}),[n,s,o]);return C.createElement(C.Fragment,null,C.createElement(Cg.Provider,{value:a},C.createElement(Sg.Provider,{value:i},C.createElement(WD,{basename:n.basename,location:n.state.location,navigationType:n.state.historyAction,navigator:s},n.state.initialized?C.createElement(HD,null):e))),null)}function BD(t){return xD(t.context)}function jD(t){le(!1)}function WD(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Qe.Pop,navigator:s,static:o=!1}=t;Oh()&&le(!1);let a=e.replace(/^\/*/,"/"),l=C.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=er(r));let{pathname:u="/",search:c="",hash:h="",state:d=null,key:m="default"}=r,v=C.useMemo(()=>{let _=Ph(u,a);return _==null?null:{location:{pathname:_,search:c,hash:h,state:d,key:m},navigationType:i}},[a,u,c,h,d,m,i]);return v==null?null:C.createElement(Ig.Provider,{value:l},C.createElement(bh.Provider,{children:n,value:v}))}function HD(t){let{children:e,location:n}=t,r=C.useContext(Cg),i=r&&!e?r.router.routes:bp(e);return PD(i,n)}var H_;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(H_||(H_={}));new Promise(()=>{});function bp(t,e){e===void 0&&(e=[]);let n=[];return C.Children.forEach(t,(r,i)=>{if(!C.isValidElement(r))return;let s=[...e,i];if(r.type===C.Fragment){n.push.apply(n,bp(r.props.children,s));return}r.type!==jD&&le(!1),!r.props.index||!r.props.children||le(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=bp(r.props.children,s)),n.push(o)}),n}function qD(t){return!!t.ErrorBoundary||!!t.errorElement}/**
 * React Router DOM v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Op(){return Op=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Op.apply(this,arguments)}function GD(t,e){return lD({basename:e==null?void 0:e.basename,future:e==null?void 0:e.future,history:DA({window:e==null?void 0:e.window}),hydrationData:(e==null?void 0:e.hydrationData)||KD(),routes:t,detectErrorBoundary:qD}).initialize()}function KD(){var t;let e=(t=window)==null?void 0:t.__staticRouterHydrationData;return e&&e.errors&&(e=Op({},e,{errors:QD(e.errors)})),e}function QD(t){if(!t)return null;let e=Object.entries(t),n={};for(let[r,i]of e)if(i&&i.__type==="RouteErrorResponse")n[r]=new Eg(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){let s=new Error(i.message);s.stack="",n[r]=s}else n[r]=i;return n}var q_;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(q_||(q_={}));var G_;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(G_||(G_={}));const No=C.createContext(null);/**
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
 */const SC={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const O=function(t,e){if(!t)throw Ro(e)},Ro=function(t){return new Error("Firebase Database ("+SC.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const IC=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},YD=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Tg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,m=u&63;l||(m=64,o||(d=64)),r.push(n[c],n[h],n[d],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(IC(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):YD(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new XD;const d=s<<2|a>>4;if(r.push(d),u!==64){const m=a<<4&240|u>>2;if(r.push(m),h!==64){const v=u<<6&192|h;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class XD extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const TC=function(t){const e=IC(t);return Tg.encodeByteArray(e,!0)},Pc=function(t){return TC(t).replace(/\./g,"")},bc=function(t){try{return Tg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function JD(t){return kC(void 0,t)}function kC(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!ZD(n)||(t[n]=kC(t[n],e[n]));return t}function ZD(t){return t!=="__proto__"}/**
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
 */function ex(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const tx=()=>ex().__FIREBASE_DEFAULTS__,nx=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},rx=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&bc(t[1]);return e&&JSON.parse(e)},kg=()=>{try{return tx()||nx()||rx()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},NC=t=>{var e,n;return(n=(e=kg())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},RC=t=>{const e=NC(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},ix=()=>{var t;return(t=kg())===null||t===void 0?void 0:t.config},AC=t=>{var e;return(e=kg())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Mh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function DC(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Pc(JSON.stringify(n)),Pc(JSON.stringify(o)),a].join(".")}/**
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
 */function Ut(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ng(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ut())}function sx(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function xC(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ox(){const t=Ut();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function PC(){return SC.NODE_ADMIN===!0}function ax(){try{return typeof indexedDB=="object"}catch{return!1}}function lx(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const ux="FirebaseError";class Dr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=ux,Object.setPrototypeOf(this,Dr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Pl.prototype.create)}}class Pl{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?cx(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Dr(i,a,r)}}function cx(t,e){return t.replace(hx,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const hx=/\{\$([^}]+)}/g;/**
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
 */function rl(t){return JSON.parse(t)}function pt(t){return JSON.stringify(t)}/**
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
 */const bC=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=rl(bc(s[0])||""),n=rl(bc(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},dx=function(t){const e=bC(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},fx=function(t){const e=bC(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function xr(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function uo(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Mp(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Oc(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Mc(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(K_(s)&&K_(o)){if(!Mc(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function K_(t){return t!==null&&typeof t=="object"}/**
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
 */function Ao(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function da(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function fa(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class px{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)r[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)r[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=r[h-3]^r[h-8]^r[h-14]^r[h-16];r[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,c;for(let h=0;h<80;h++){h<40?h<20?(u=a^s&(o^a),c=1518500249):(u=s^o^a,c=1859775393):h<60?(u=s&o|a&(s|o),c=2400959708):(u=s^o^a,c=3395469782);const d=(i<<5|i>>>27)+u+l+c+r[h]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function mx(t,e){const n=new gx(t,e);return n.subscribe.bind(n)}class gx{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");yx(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=uf),i.error===void 0&&(i.error=uf),i.complete===void 0&&(i.complete=uf);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function yx(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function uf(){}function Rg(t,e){return`${t} failed: ${e} argument `}/**
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
 */const vx=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,O(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Lh=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Ve(t){return t&&t._delegate?t._delegate:t}class hi{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ai="[DEFAULT]";/**
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
 */class _x{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Mh;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ex(e))try{this.getOrInitializeService({instanceIdentifier:Ai})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ai){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ai){return this.instances.has(e)}getOptions(e=Ai){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:wx(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ai){return this.component?this.component.multipleInstances?e:Ai:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function wx(t){return t===Ai?void 0:t}function Ex(t){return t.instantiationMode==="EAGER"}/**
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
 */class Cx{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new _x(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ee||(Ee={}));const Sx={debug:Ee.DEBUG,verbose:Ee.VERBOSE,info:Ee.INFO,warn:Ee.WARN,error:Ee.ERROR,silent:Ee.SILENT},Ix=Ee.INFO,Tx={[Ee.DEBUG]:"log",[Ee.VERBOSE]:"log",[Ee.INFO]:"info",[Ee.WARN]:"warn",[Ee.ERROR]:"error"},kx=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Tx[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Fh{constructor(e){this.name=e,this._logLevel=Ix,this._logHandler=kx,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Sx[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ee.DEBUG,...e),this._logHandler(this,Ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ee.VERBOSE,...e),this._logHandler(this,Ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ee.INFO,...e),this._logHandler(this,Ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ee.WARN,...e),this._logHandler(this,Ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ee.ERROR,...e),this._logHandler(this,Ee.ERROR,...e)}}const Nx=(t,e)=>e.some(n=>t instanceof n);let Q_,Y_;function Rx(){return Q_||(Q_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ax(){return Y_||(Y_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const OC=new WeakMap,Lp=new WeakMap,MC=new WeakMap,cf=new WeakMap,Ag=new WeakMap;function Dx(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(ni(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&OC.set(n,t)}).catch(()=>{}),Ag.set(e,t),e}function xx(t){if(Lp.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Lp.set(t,e)}let Fp={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Lp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||MC.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ni(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Px(t){Fp=t(Fp)}function bx(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(hf(this),e,...n);return MC.set(r,e.sort?e.sort():[e]),ni(r)}:Ax().includes(t)?function(...e){return t.apply(hf(this),e),ni(OC.get(this))}:function(...e){return ni(t.apply(hf(this),e))}}function Ox(t){return typeof t=="function"?bx(t):(t instanceof IDBTransaction&&xx(t),Nx(t,Rx())?new Proxy(t,Fp):t)}function ni(t){if(t instanceof IDBRequest)return Dx(t);if(cf.has(t))return cf.get(t);const e=Ox(t);return e!==t&&(cf.set(t,e),Ag.set(e,t)),e}const hf=t=>Ag.get(t);function Mx(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=ni(o);return r&&o.addEventListener("upgradeneeded",l=>{r(ni(o.result),l.oldVersion,l.newVersion,ni(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const Lx=["get","getKey","getAll","getAllKeys","count"],Fx=["put","add","delete","clear"],df=new Map;function X_(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(df.get(e))return df.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Fx.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Lx.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return df.set(e,s),s}Px(t=>({...t,get:(e,n,r)=>X_(e,n)||t.get(e,n,r),has:(e,n)=>!!X_(e,n)||t.has(e,n)}));/**
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
 */class $x{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ux(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Ux(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const $p="@firebase/app",J_="0.9.7";/**
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
 */const Zi=new Fh("@firebase/app"),Vx="@firebase/app-compat",zx="@firebase/analytics-compat",Bx="@firebase/analytics",jx="@firebase/app-check-compat",Wx="@firebase/app-check",Hx="@firebase/auth",qx="@firebase/auth-compat",Gx="@firebase/database",Kx="@firebase/database-compat",Qx="@firebase/functions",Yx="@firebase/functions-compat",Xx="@firebase/installations",Jx="@firebase/installations-compat",Zx="@firebase/messaging",eP="@firebase/messaging-compat",tP="@firebase/performance",nP="@firebase/performance-compat",rP="@firebase/remote-config",iP="@firebase/remote-config-compat",sP="@firebase/storage",oP="@firebase/storage-compat",aP="@firebase/firestore",lP="@firebase/firestore-compat",uP="firebase",cP="9.19.1";/**
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
 */const Up="[DEFAULT]",hP={[$p]:"fire-core",[Vx]:"fire-core-compat",[Bx]:"fire-analytics",[zx]:"fire-analytics-compat",[Wx]:"fire-app-check",[jx]:"fire-app-check-compat",[Hx]:"fire-auth",[qx]:"fire-auth-compat",[Gx]:"fire-rtdb",[Kx]:"fire-rtdb-compat",[Qx]:"fire-fn",[Yx]:"fire-fn-compat",[Xx]:"fire-iid",[Jx]:"fire-iid-compat",[Zx]:"fire-fcm",[eP]:"fire-fcm-compat",[tP]:"fire-perf",[nP]:"fire-perf-compat",[rP]:"fire-rc",[iP]:"fire-rc-compat",[sP]:"fire-gcs",[oP]:"fire-gcs-compat",[aP]:"fire-fst",[lP]:"fire-fst-compat","fire-js":"fire-js",[uP]:"fire-js-all"};/**
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
 */const Lc=new Map,Vp=new Map;function dP(t,e){try{t.container.addComponent(e)}catch(n){Zi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function es(t){const e=t.name;if(Vp.has(e))return Zi.debug(`There were multiple attempts to register component ${e}.`),!1;Vp.set(e,t);for(const n of Lc.values())dP(n,t);return!0}function $h(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const fP={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ri=new Pl("app","Firebase",fP);/**
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
 */class pP{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new hi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ri.create("app-deleted",{appName:this._name})}}/**
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
 */const Do=cP;function LC(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Up,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw ri.create("bad-app-name",{appName:String(i)});if(n||(n=ix()),!n)throw ri.create("no-options");const s=Lc.get(i);if(s){if(Mc(n,s.options)&&Mc(r,s.config))return s;throw ri.create("duplicate-app",{appName:i})}const o=new Cx(i);for(const l of Vp.values())o.addComponent(l);const a=new pP(n,r,o);return Lc.set(i,a),a}function Dg(t=Up){const e=Lc.get(t);if(!e&&t===Up)return LC();if(!e)throw ri.create("no-app",{appName:t});return e}function Qn(t,e,n){var r;let i=(r=hP[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Zi.warn(a.join(" "));return}es(new hi(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const mP="firebase-heartbeat-database",gP=1,il="firebase-heartbeat-store";let ff=null;function FC(){return ff||(ff=Mx(mP,gP,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(il)}}}).catch(t=>{throw ri.create("idb-open",{originalErrorMessage:t.message})})),ff}async function yP(t){try{return(await FC()).transaction(il).objectStore(il).get($C(t))}catch(e){if(e instanceof Dr)Zi.warn(e.message);else{const n=ri.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Zi.warn(n.message)}}}async function Z_(t,e){try{const r=(await FC()).transaction(il,"readwrite");return await r.objectStore(il).put(e,$C(t)),r.done}catch(n){if(n instanceof Dr)Zi.warn(n.message);else{const r=ri.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Zi.warn(r.message)}}}function $C(t){return`${t.name}!${t.options.appId}`}/**
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
 */const vP=1024,_P=30*24*60*60*1e3;class wP{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new CP(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=e0();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=_P}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=e0(),{heartbeatsToSend:n,unsentEntries:r}=EP(this._heartbeatsCache.heartbeats),i=Pc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function e0(){return new Date().toISOString().substring(0,10)}function EP(t,e=vP){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),t0(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),t0(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class CP{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ax()?lx().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await yP(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Z_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Z_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function t0(t){return Pc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function SP(t){es(new hi("platform-logger",e=>new $x(e),"PRIVATE")),es(new hi("heartbeat",e=>new wP(e),"PRIVATE")),Qn($p,J_,t),Qn($p,J_,"esm2017"),Qn("fire-js","")}SP("");var IP="firebase",TP="9.19.1";/**
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
 */Qn(IP,TP,"app");function xg(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function UC(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const kP=UC,VC=new Pl("auth","Firebase",UC());/**
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
 */const n0=new Fh("@firebase/auth");function Ju(t,...e){n0.logLevel<=Ee.ERROR&&n0.error(`Auth (${Do}): ${t}`,...e)}/**
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
 */function Un(t,...e){throw Pg(t,...e)}function Yn(t,...e){return Pg(t,...e)}function NP(t,e,n){const r=Object.assign(Object.assign({},kP()),{[e]:n});return new Pl("auth","Firebase",r).create(e,{appName:t.name})}function Pg(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return VC.create(t,...e)}function Z(t,e,...n){if(!t)throw Pg(e,...n)}function hr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ju(e),new Error(e)}function Cr(t,e){t||hr(e)}/**
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
 */const r0=new Map;function dr(t){Cr(t instanceof Function,"Expected a class definition");let e=r0.get(t);return e?(Cr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,r0.set(t,e),e)}/**
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
 */function RP(t,e){const n=$h(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Mc(s,e??{}))return i;Un(i,"already-initialized")}return n.initialize({options:e})}function AP(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(dr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function zp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function DP(){return i0()==="http:"||i0()==="https:"}function i0(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function xP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(DP()||sx()||"connection"in navigator)?navigator.onLine:!0}function PP(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class bl{constructor(e,n){this.shortDelay=e,this.longDelay=n,Cr(n>e,"Short delay should be less than long delay!"),this.isMobile=Ng()||xC()}get(){return xP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function bg(t,e){Cr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class zC{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;hr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;hr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;hr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const bP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const OP=new bl(3e4,6e4);function Ol(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ml(t,e,n,r,i={}){return BC(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Ao(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),zC.fetch()(jC(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function BC(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},bP),e);try{const i=new MP(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ru(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ru(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ru(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ru(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw NP(t,c,u);Un(t,c)}}catch(i){if(i instanceof Dr)throw i;Un(t,"network-request-failed",{message:String(i)})}}async function Ll(t,e,n,r,i={}){const s=await Ml(t,e,n,r,i);return"mfaPendingCredential"in s&&Un(t,"multi-factor-auth-required",{_serverResponse:s}),s}function jC(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?bg(t.config,i):`${t.config.apiScheme}://${i}`}class MP{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Yn(this.auth,"network-request-failed")),OP.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ru(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Yn(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function LP(t,e){return Ml(t,"POST","/v1/accounts:delete",e)}async function FP(t,e){return Ml(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Na(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function $P(t,e=!1){const n=Ve(t),r=await n.getIdToken(e),i=Og(r);Z(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Na(pf(i.auth_time)),issuedAtTime:Na(pf(i.iat)),expirationTime:Na(pf(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function pf(t){return Number(t)*1e3}function Og(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ju("JWT malformed, contained fewer than 3 sections"),null;try{const i=bc(n);return i?JSON.parse(i):(Ju("Failed to decode base64 JWT payload"),null)}catch(i){return Ju("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function UP(t){const e=Og(t);return Z(e,"internal-error"),Z(typeof e.exp<"u","internal-error"),Z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function sl(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Dr&&VP(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function VP({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class zP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class WC{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Na(this.lastLoginAt),this.creationTime=Na(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Fc(t){var e;const n=t.auth,r=await t.getIdToken(),i=await sl(t,FP(n,{idToken:r}));Z(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?WP(s.providerUserInfo):[],a=jP(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new WC(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function BP(t){const e=Ve(t);await Fc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function jP(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function WP(t){return t.map(e=>{var{providerId:n}=e,r=xg(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function HP(t,e){const n=await BC(t,{},async()=>{const r=Ao({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=jC(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",zC.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class ol{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Z(e.idToken,"internal-error"),Z(typeof e.idToken<"u","internal-error"),Z(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):UP(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return Z(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await HP(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ol;return r&&(Z(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(Z(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(Z(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ol,this.toJSON())}_performRefresh(){return hr("not implemented")}}/**
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
 */function Lr(t,e){Z(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Bi{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=xg(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new zP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new WC(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await sl(this,this.stsTokenManager.getToken(this.auth,e));return Z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return $P(this,e)}reload(){return BP(this)}_assign(e){this!==e&&(Z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Bi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Fc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await sl(this,LP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,g=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:y,emailVerified:E,isAnonymous:T,providerData:D,stsTokenManager:I}=n;Z(y&&I,e,"internal-error");const R=ol.fromJSON(this.name,I);Z(typeof y=="string",e,"internal-error"),Lr(h,e.name),Lr(d,e.name),Z(typeof E=="boolean",e,"internal-error"),Z(typeof T=="boolean",e,"internal-error"),Lr(m,e.name),Lr(v,e.name),Lr(_,e.name),Lr(g,e.name),Lr(p,e.name),Lr(f,e.name);const ie=new Bi({uid:y,auth:e,email:d,emailVerified:E,displayName:h,isAnonymous:T,photoURL:v,phoneNumber:m,tenantId:_,stsTokenManager:R,createdAt:p,lastLoginAt:f});return D&&Array.isArray(D)&&(ie.providerData=D.map(Q=>Object.assign({},Q))),g&&(ie._redirectEventId=g),ie}static async _fromIdTokenResponse(e,n,r=!1){const i=new ol;i.updateFromServerResponse(n);const s=new Bi({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Fc(s),s}}/**
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
 */class HC{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}HC.type="NONE";const s0=HC;/**
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
 */function Zu(t,e,n){return`firebase:${t}:${e}:${n}`}class Ks{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Zu(this.userKey,i.apiKey,s),this.fullPersistenceKey=Zu("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Bi._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ks(dr(s0),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||dr(s0);const o=Zu(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=Bi._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Ks(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Ks(s,e,r))}}/**
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
 */function o0(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(KC(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(qC(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(YC(e))return"Blackberry";if(XC(e))return"Webos";if(Mg(e))return"Safari";if((e.includes("chrome/")||GC(e))&&!e.includes("edge/"))return"Chrome";if(QC(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function qC(t=Ut()){return/firefox\//i.test(t)}function Mg(t=Ut()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function GC(t=Ut()){return/crios\//i.test(t)}function KC(t=Ut()){return/iemobile/i.test(t)}function QC(t=Ut()){return/android/i.test(t)}function YC(t=Ut()){return/blackberry/i.test(t)}function XC(t=Ut()){return/webos/i.test(t)}function Uh(t=Ut()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function qP(t=Ut()){var e;return Uh(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function GP(){return ox()&&document.documentMode===10}function JC(t=Ut()){return Uh(t)||QC(t)||XC(t)||YC(t)||/windows phone/i.test(t)||KC(t)}function KP(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function ZC(t,e=[]){let n;switch(t){case"Browser":n=o0(Ut());break;case"Worker":n=`${o0(Ut())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Do}/${r}`}/**
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
 */class QP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class YP{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new a0(this),this.idTokenSubscription=new a0(this),this.beforeStateQueue=new QP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=VC,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=dr(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ks.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Fc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=PP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ve(e):null;return n&&Z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(dr(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Pl("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&dr(e)||this._popupRedirectResolver;Z(n,this,"argument-error"),this.redirectPersistenceManager=await Ks.create(this,[dr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return Z(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ZC(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Fl(t){return Ve(t)}class a0{constructor(e){this.auth=e,this.observer=null,this.addObserver=mx(n=>this.observer=n)}get next(){return Z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function XP(t,e,n){const r=Fl(t);Z(r._canInitEmulator,r,"emulator-config-failed"),Z(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=eS(e),{host:o,port:a}=JP(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||ZP()}function eS(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function JP(t){const e=eS(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:l0(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:l0(o)}}}function l0(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function ZP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Lg{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return hr("not implemented")}_getIdTokenResponse(e){return hr("not implemented")}_linkToIdToken(e,n){return hr("not implemented")}_getReauthenticationResolver(e){return hr("not implemented")}}async function eb(t,e){return Ml(t,"POST","/v1/accounts:update",e)}/**
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
 */async function tb(t,e){return Ll(t,"POST","/v1/accounts:signInWithPassword",Ol(t,e))}/**
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
 */async function nb(t,e){return Ll(t,"POST","/v1/accounts:signInWithEmailLink",Ol(t,e))}async function rb(t,e){return Ll(t,"POST","/v1/accounts:signInWithEmailLink",Ol(t,e))}/**
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
 */class al extends Lg{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new al(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new al(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return tb(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return nb(e,{email:this._email,oobCode:this._password});default:Un(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return eb(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return rb(e,{idToken:n,email:this._email,oobCode:this._password});default:Un(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Qs(t,e){return Ll(t,"POST","/v1/accounts:signInWithIdp",Ol(t,e))}/**
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
 */const ib="http://localhost";class ts extends Lg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ts(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Un("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=xg(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new ts(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Qs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Qs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Qs(e,n)}buildRequest(){const e={requestUri:ib,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ao(n)}return e}}/**
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
 */function sb(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ob(t){const e=da(fa(t)).link,n=e?da(fa(e)).deep_link_id:null,r=da(fa(t)).deep_link_id;return(r?da(fa(r)).link:null)||r||n||e||t}class Fg{constructor(e){var n,r,i,s,o,a;const l=da(fa(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,h=sb((i=l.mode)!==null&&i!==void 0?i:null);Z(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=ob(e);try{return new Fg(n)}catch{return null}}}/**
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
 */class xo{constructor(){this.providerId=xo.PROVIDER_ID}static credential(e,n){return al._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Fg.parseLink(n);return Z(r,"argument-error"),al._fromEmailAndCode(e,r.code,r.tenantId)}}xo.PROVIDER_ID="password";xo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";xo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class tS{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class $l extends tS{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class zr extends $l{constructor(){super("facebook.com")}static credential(e){return ts._fromParams({providerId:zr.PROVIDER_ID,signInMethod:zr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return zr.credentialFromTaggedObject(e)}static credentialFromError(e){return zr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return zr.credential(e.oauthAccessToken)}catch{return null}}}zr.FACEBOOK_SIGN_IN_METHOD="facebook.com";zr.PROVIDER_ID="facebook.com";/**
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
 */class Br extends $l{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ts._fromParams({providerId:Br.PROVIDER_ID,signInMethod:Br.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Br.credentialFromTaggedObject(e)}static credentialFromError(e){return Br.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Br.credential(n,r)}catch{return null}}}Br.GOOGLE_SIGN_IN_METHOD="google.com";Br.PROVIDER_ID="google.com";/**
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
 */class jr extends $l{constructor(){super("github.com")}static credential(e){return ts._fromParams({providerId:jr.PROVIDER_ID,signInMethod:jr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return jr.credentialFromTaggedObject(e)}static credentialFromError(e){return jr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return jr.credential(e.oauthAccessToken)}catch{return null}}}jr.GITHUB_SIGN_IN_METHOD="github.com";jr.PROVIDER_ID="github.com";/**
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
 */class Wr extends $l{constructor(){super("twitter.com")}static credential(e,n){return ts._fromParams({providerId:Wr.PROVIDER_ID,signInMethod:Wr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Wr.credentialFromTaggedObject(e)}static credentialFromError(e){return Wr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Wr.credential(n,r)}catch{return null}}}Wr.TWITTER_SIGN_IN_METHOD="twitter.com";Wr.PROVIDER_ID="twitter.com";/**
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
 */async function ab(t,e){return Ll(t,"POST","/v1/accounts:signUp",Ol(t,e))}/**
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
 */class ns{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Bi._fromIdTokenResponse(e,r,i),o=u0(r);return new ns({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=u0(r);return new ns({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function u0(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class $c extends Dr{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,$c.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new $c(e,n,r,i)}}function nS(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?$c._fromErrorAndOperation(t,s,e,r):s})}async function lb(t,e,n=!1){const r=await sl(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ns._forOperation(t,"link",r)}/**
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
 */async function ub(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await sl(t,nS(r,i,e,t),n);Z(s.idToken,r,"internal-error");const o=Og(s.idToken);Z(o,r,"internal-error");const{sub:a}=o;return Z(t.uid===a,r,"user-mismatch"),ns._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Un(r,"user-mismatch"),s}}/**
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
 */async function rS(t,e,n=!1){const r="signIn",i=await nS(t,r,e),s=await ns._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function cb(t,e){return rS(Fl(t),e)}async function hb(t,e,n){const r=Fl(t),i=await ab(r,{returnSecureToken:!0,email:e,password:n}),s=await ns._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function db(t,e,n){return cb(Ve(t),xo.credential(e,n))}function fb(t,e,n,r){return Ve(t).onIdTokenChanged(e,n,r)}function pb(t,e,n){return Ve(t).beforeAuthStateChanged(e,n)}function mb(t,e,n,r){return Ve(t).onAuthStateChanged(e,n,r)}function iS(t){return Ve(t).signOut()}const Uc="__sak";/**
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
 */class sS{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Uc,"1"),this.storage.removeItem(Uc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function gb(){const t=Ut();return Mg(t)||Uh(t)}const yb=1e3,vb=10;class oS extends sS{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=gb()&&KP(),this.fallbackToPolling=JC(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);GP()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,vb):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},yb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}oS.type="LOCAL";const _b=oS;/**
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
 */class aS extends sS{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}aS.type="SESSION";const lS=aS;/**
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
 */function wb(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Vh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Vh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await wb(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Vh.receivers=[];/**
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
 */function $g(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Eb{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=$g("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Xn(){return window}function Cb(t){Xn().location.href=t}/**
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
 */function uS(){return typeof Xn().WorkerGlobalScope<"u"&&typeof Xn().importScripts=="function"}async function Sb(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Ib(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Tb(){return uS()?self:null}/**
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
 */const cS="firebaseLocalStorageDb",kb=1,Vc="firebaseLocalStorage",hS="fbase_key";class Ul{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function zh(t,e){return t.transaction([Vc],e?"readwrite":"readonly").objectStore(Vc)}function Nb(){const t=indexedDB.deleteDatabase(cS);return new Ul(t).toPromise()}function Bp(){const t=indexedDB.open(cS,kb);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Vc,{keyPath:hS})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Vc)?e(r):(r.close(),await Nb(),e(await Bp()))})})}async function c0(t,e,n){const r=zh(t,!0).put({[hS]:e,value:n});return new Ul(r).toPromise()}async function Rb(t,e){const n=zh(t,!1).get(e),r=await new Ul(n).toPromise();return r===void 0?null:r.value}function h0(t,e){const n=zh(t,!0).delete(e);return new Ul(n).toPromise()}const Ab=800,Db=3;class dS{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Bp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Db)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return uS()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Vh._getInstance(Tb()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Sb(),!this.activeServiceWorker)return;this.sender=new Eb(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Ib()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Bp();return await c0(e,Uc,"1"),await h0(e,Uc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>c0(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Rb(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>h0(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=zh(i,!1).getAll();return new Ul(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ab)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}dS.type="LOCAL";const xb=dS;/**
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
 */function Pb(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function bb(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Yn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Pb().appendChild(r)})}function Ob(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new bl(3e4,6e4);/**
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
 */function Mb(t,e){return e?dr(e):(Z(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Ug extends Lg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Qs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Qs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Qs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Lb(t){return rS(t.auth,new Ug(t),t.bypassAuthState)}function Fb(t){const{auth:e,user:n}=t;return Z(n,e,"internal-error"),ub(n,new Ug(t),t.bypassAuthState)}async function $b(t){const{auth:e,user:n}=t;return Z(n,e,"internal-error"),lb(n,new Ug(t),t.bypassAuthState)}/**
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
 */class fS{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Lb;case"linkViaPopup":case"linkViaRedirect":return $b;case"reauthViaPopup":case"reauthViaRedirect":return Fb;default:Un(this.auth,"internal-error")}}resolve(e){Cr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Cr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Ub=new bl(2e3,1e4);class $s extends fS{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,$s.currentPopupAction&&$s.currentPopupAction.cancel(),$s.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Z(e,this.auth,"internal-error"),e}async onExecution(){Cr(this.filter.length===1,"Popup operations only handle one event");const e=$g();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Yn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Yn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,$s.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Yn(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Ub.get())};e()}}$s.currentPopupAction=null;/**
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
 */const Vb="pendingRedirect",ec=new Map;class zb extends fS{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ec.get(this.auth._key());if(!e){try{const r=await Bb(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ec.set(this.auth._key(),e)}return this.bypassAuthState||ec.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Bb(t,e){const n=Hb(e),r=Wb(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function jb(t,e){ec.set(t._key(),e)}function Wb(t){return dr(t._redirectPersistence)}function Hb(t){return Zu(Vb,t.config.apiKey,t.name)}async function qb(t,e,n=!1){const r=Fl(t),i=Mb(r,e),o=await new zb(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const Gb=10*60*1e3;class Kb{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Qb(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!pS(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Yn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Gb&&this.cachedEventUids.clear(),this.cachedEventUids.has(d0(e))}saveEventToCache(e){this.cachedEventUids.add(d0(e)),this.lastProcessedEventTime=Date.now()}}function d0(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function pS({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Qb(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return pS(t);default:return!1}}/**
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
 */async function Yb(t,e={}){return Ml(t,"GET","/v1/projects",e)}/**
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
 */const Xb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Jb=/^https?/;async function Zb(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Yb(t);for(const n of e)try{if(eO(n))return}catch{}Un(t,"unauthorized-domain")}function eO(t){const e=zp(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Jb.test(n))return!1;if(Xb.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const tO=new bl(3e4,6e4);function f0(){const t=Xn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function nO(t){return new Promise((e,n)=>{var r,i,s;function o(){f0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{f0(),n(Yn(t,"network-request-failed"))},timeout:tO.get()})}if(!((i=(r=Xn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Xn().gapi)===null||s===void 0)&&s.load)o();else{const a=Ob("iframefcb");return Xn()[a]=()=>{gapi.load?o():n(Yn(t,"network-request-failed"))},bb(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw tc=null,e})}let tc=null;function rO(t){return tc=tc||nO(t),tc}/**
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
 */const iO=new bl(5e3,15e3),sO="__/auth/iframe",oO="emulator/auth/iframe",aO={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},lO=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function uO(t){const e=t.config;Z(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?bg(e,oO):`https://${t.config.authDomain}/${sO}`,r={apiKey:e.apiKey,appName:t.name,v:Do},i=lO.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ao(r).slice(1)}`}async function cO(t){const e=await rO(t),n=Xn().gapi;return Z(n,t,"internal-error"),e.open({where:document.body,url:uO(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:aO,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Yn(t,"network-request-failed"),a=Xn().setTimeout(()=>{s(o)},iO.get());function l(){Xn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const hO={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},dO=500,fO=600,pO="_blank",mO="http://localhost";class p0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function gO(t,e,n,r=dO,i=fO){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},hO),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Ut().toLowerCase();n&&(a=GC(u)?pO:n),qC(u)&&(e=e||mO,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[m,v])=>`${d}${m}=${v},`,"");if(qP(u)&&a!=="_self")return yO(e||"",a),new p0(null);const h=window.open(e||"",a,c);Z(h,t,"popup-blocked");try{h.focus()}catch{}return new p0(h)}function yO(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const vO="__/auth/handler",_O="emulator/auth/handler";function m0(t,e,n,r,i,s){Z(t.config.authDomain,t,"auth-domain-config-required"),Z(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Do,eventId:i};if(e instanceof tS){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Mp(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,u]of Object.entries(s||{}))o[l]=u}if(e instanceof $l){const l=e.getScopes().filter(u=>u!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${wO(t)}?${Ao(a).slice(1)}`}function wO({config:t}){return t.emulator?bg(t,_O):`https://${t.authDomain}/${vO}`}/**
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
 */const mf="webStorageSupport";class EO{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=lS,this._completeRedirectFn=qb,this._overrideRedirectResult=jb}async _openPopup(e,n,r,i){var s;Cr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=m0(e,n,r,zp(),i);return gO(e,o,$g())}async _openRedirect(e,n,r,i){return await this._originValidation(e),Cb(m0(e,n,r,zp(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Cr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await cO(e),r=new Kb(e);return n.register("authEvent",i=>(Z(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(mf,{type:mf},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[mf];o!==void 0&&n(!!o),Un(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Zb(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return JC()||Mg()||Uh()}}const CO=EO;var g0="@firebase/auth",y0="0.22.0";/**
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
 */class SO{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function IO(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function TO(t){es(new hi("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,l)=>{Z(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),Z(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ZC(t)},c=new YP(a,l,u);return AP(c,n),c})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),es(new hi("auth-internal",e=>{const n=Fl(e.getProvider("auth").getImmediate());return(r=>new SO(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Qn(g0,y0,IO(t)),Qn(g0,y0,"esm2017")}/**
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
 */const kO=5*60,NO=AC("authIdTokenMaxAge")||kO;let v0=null;const RO=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>NO)return;const i=n==null?void 0:n.token;v0!==i&&(v0=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function mS(t=Dg()){const e=$h(t,"auth");if(e.isInitialized())return e.getImmediate();const n=RP(t,{popupRedirectResolver:CO,persistence:[xb,_b,lS]}),r=AC("authTokenSyncURL");if(r){const s=RO(r);pb(n,s,()=>s(n.currentUser)),fb(n,o=>s(o))}const i=NC("auth");return i&&XP(n,`http://${i}`),n}TO("Browser");var AO=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},z,Vg=Vg||{},re=AO||self;function zc(){}function Bh(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Vl(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function DO(t){return Object.prototype.hasOwnProperty.call(t,gf)&&t[gf]||(t[gf]=++xO)}var gf="closure_uid_"+(1e9*Math.random()>>>0),xO=0;function PO(t,e,n){return t.call.apply(t.bind,arguments)}function bO(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Lt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Lt=PO:Lt=bO,Lt.apply(null,arguments)}function Au(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function St(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Ei(){this.s=this.s,this.o=this.o}var OO=0;Ei.prototype.s=!1;Ei.prototype.na=function(){!this.s&&(this.s=!0,this.M(),OO!=0)&&DO(this)};Ei.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const gS=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function zg(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function _0(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Bh(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function Ft(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Ft.prototype.h=function(){this.defaultPrevented=!0};var MO=function(){if(!re.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{re.addEventListener("test",zc,e),re.removeEventListener("test",zc,e)}catch{}return t}();function Bc(t){return/^[\s\xa0]*$/.test(t)}var w0=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function yf(t,e){return t<e?-1:t>e?1:0}function jh(){var t=re.navigator;return t&&(t=t.userAgent)?t:""}function qn(t){return jh().indexOf(t)!=-1}function Bg(t){return Bg[" "](t),t}Bg[" "]=zc;function LO(t){var e=UO;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var FO=qn("Opera"),co=qn("Trident")||qn("MSIE"),yS=qn("Edge"),jp=yS||co,vS=qn("Gecko")&&!(jh().toLowerCase().indexOf("webkit")!=-1&&!qn("Edge"))&&!(qn("Trident")||qn("MSIE"))&&!qn("Edge"),$O=jh().toLowerCase().indexOf("webkit")!=-1&&!qn("Edge");function _S(){var t=re.document;return t?t.documentMode:void 0}var jc;e:{var vf="",_f=function(){var t=jh();if(vS)return/rv:([^\);]+)(\)|;)/.exec(t);if(yS)return/Edge\/([\d\.]+)/.exec(t);if(co)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if($O)return/WebKit\/(\S+)/.exec(t);if(FO)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(_f&&(vf=_f?_f[1]:""),co){var wf=_S();if(wf!=null&&wf>parseFloat(vf)){jc=String(wf);break e}}jc=vf}var UO={};function VO(){return LO(function(){let t=0;const e=w0(String(jc)).split("."),n=w0("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=yf(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||yf(i[2].length==0,s[2].length==0)||yf(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var Wp;if(re.document&&co){var E0=_S();Wp=E0||parseInt(jc,10)||void 0}else Wp=void 0;var zO=Wp;function ll(t,e){if(Ft.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(vS){e:{try{Bg(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:BO[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ll.X.h.call(this)}}St(ll,Ft);var BO={2:"touch",3:"pen",4:"mouse"};ll.prototype.h=function(){ll.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var zl="closure_listenable_"+(1e6*Math.random()|0),jO=0;function WO(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=i,this.key=++jO,this.ba=this.ea=!1}function Wh(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function jg(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function wS(t){const e={};for(const n in t)e[n]=t[n];return e}const C0="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ES(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<C0.length;s++)n=C0[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Hh(t){this.src=t,this.g={},this.h=0}Hh.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=qp(t,e,r,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new WO(e,this.src,s,!!r,i),e.ea=n,t.push(e)),e};function Hp(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=gS(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Wh(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function qp(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ba&&s.listener==e&&s.capture==!!n&&s.ha==r)return i}return-1}var Wg="closure_lm_"+(1e6*Math.random()|0),Ef={};function CS(t,e,n,r,i){if(r&&r.once)return IS(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)CS(t,e[s],n,r,i);return null}return n=Gg(n),t&&t[zl]?t.N(e,n,Vl(r)?!!r.capture:!!r,i):SS(t,e,n,!1,r,i)}function SS(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Vl(i)?!!i.capture:!!i,a=qg(t);if(a||(t[Wg]=a=new Hh(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=HO(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)MO||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(kS(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function HO(){function t(n){return e.call(t.src,t.listener,n)}const e=qO;return t}function IS(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)IS(t,e[s],n,r,i);return null}return n=Gg(n),t&&t[zl]?t.O(e,n,Vl(r)?!!r.capture:!!r,i):SS(t,e,n,!0,r,i)}function TS(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)TS(t,e[s],n,r,i);else r=Vl(r)?!!r.capture:!!r,n=Gg(n),t&&t[zl]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=qp(s,n,r,i),-1<n&&(Wh(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=qg(t))&&(e=t.g[e.toString()],t=-1,e&&(t=qp(e,n,r,i)),(n=-1<t?e[t]:null)&&Hg(n))}function Hg(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[zl])Hp(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(kS(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=qg(e))?(Hp(n,t),n.h==0&&(n.src=null,e[Wg]=null)):Wh(t)}}}function kS(t){return t in Ef?Ef[t]:Ef[t]="on"+t}function qO(t,e){if(t.ba)t=!0;else{e=new ll(e,this);var n=t.listener,r=t.ha||t.src;t.ea&&Hg(t),t=n.call(r,e)}return t}function qg(t){return t=t[Wg],t instanceof Hh?t:null}var Cf="__closure_events_fn_"+(1e9*Math.random()>>>0);function Gg(t){return typeof t=="function"?t:(t[Cf]||(t[Cf]=function(e){return t.handleEvent(e)}),t[Cf])}function gt(){Ei.call(this),this.i=new Hh(this),this.P=this,this.I=null}St(gt,Ei);gt.prototype[zl]=!0;gt.prototype.removeEventListener=function(t,e,n,r){TS(this,t,e,n,r)};function Et(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new Ft(e,t);else if(e instanceof Ft)e.target=e.target||t;else{var i=e;e=new Ft(r,t),ES(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Du(o,r,!0,e)&&i}if(o=e.g=t,i=Du(o,r,!0,e)&&i,i=Du(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Du(o,r,!1,e)&&i}gt.prototype.M=function(){if(gt.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Wh(n[r]);delete t.g[e],t.h--}}this.I=null};gt.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};gt.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Du(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&Hp(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Kg=re.JSON.stringify;function GO(){var t=AS;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class KO{constructor(){this.h=this.g=null}add(e,n){const r=NS.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var NS=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new QO,t=>t.reset());class QO{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function YO(t){re.setTimeout(()=>{throw t},0)}function RS(t,e){Gp||XO(),Kp||(Gp(),Kp=!0),AS.add(t,e)}var Gp;function XO(){var t=re.Promise.resolve(void 0);Gp=function(){t.then(JO)}}var Kp=!1,AS=new KO;function JO(){for(var t;t=GO();){try{t.h.call(t.g)}catch(n){YO(n)}var e=NS;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Kp=!1}function qh(t,e){gt.call(this),this.h=t||1,this.g=e||re,this.j=Lt(this.lb,this),this.l=Date.now()}St(qh,gt);z=qh.prototype;z.ca=!1;z.R=null;z.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Et(this,"tick"),this.ca&&(Qg(this),this.start()))}};z.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Qg(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}z.M=function(){qh.X.M.call(this),Qg(this),delete this.g};function Yg(t,e,n){if(typeof t=="function")n&&(t=Lt(t,n));else if(t&&typeof t.handleEvent=="function")t=Lt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:re.setTimeout(t,e||0)}function DS(t){t.g=Yg(()=>{t.g=null,t.i&&(t.i=!1,DS(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class ZO extends Ei{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:DS(this)}M(){super.M(),this.g&&(re.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ul(t){Ei.call(this),this.h=t,this.g={}}St(ul,Ei);var S0=[];function xS(t,e,n,r){Array.isArray(n)||(n&&(S0[0]=n.toString()),n=S0);for(var i=0;i<n.length;i++){var s=CS(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function PS(t){jg(t.g,function(e,n){this.g.hasOwnProperty(n)&&Hg(e)},t),t.g={}}ul.prototype.M=function(){ul.X.M.call(this),PS(this)};ul.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Gh(){this.g=!0}Gh.prototype.Aa=function(){this.g=!1};function eM(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function tM(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Us(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+rM(t,n)+(r?" "+r:"")})}function nM(t,e){t.info(function(){return"TIMEOUT: "+e})}Gh.prototype.info=function(){};function rM(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Kg(n)}catch{return e}}var ds={},I0=null;function Kh(){return I0=I0||new gt}ds.Pa="serverreachability";function bS(t){Ft.call(this,ds.Pa,t)}St(bS,Ft);function cl(t){const e=Kh();Et(e,new bS(e))}ds.STAT_EVENT="statevent";function OS(t,e){Ft.call(this,ds.STAT_EVENT,t),this.stat=e}St(OS,Ft);function jt(t){const e=Kh();Et(e,new OS(e,t))}ds.Qa="timingevent";function MS(t,e){Ft.call(this,ds.Qa,t),this.size=e}St(MS,Ft);function Bl(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return re.setTimeout(function(){t()},e)}var Qh={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},LS={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Xg(){}Xg.prototype.h=null;function T0(t){return t.h||(t.h=t.i())}function FS(){}var jl={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Jg(){Ft.call(this,"d")}St(Jg,Ft);function Zg(){Ft.call(this,"c")}St(Zg,Ft);var Qp;function Yh(){}St(Yh,Xg);Yh.prototype.g=function(){return new XMLHttpRequest};Yh.prototype.i=function(){return{}};Qp=new Yh;function Wl(t,e,n,r){this.l=t,this.j=e,this.m=n,this.U=r||1,this.S=new ul(this),this.O=iM,t=jp?125:void 0,this.T=new qh(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new $S}function $S(){this.i=null,this.g="",this.h=!1}var iM=45e3,Yp={},Wc={};z=Wl.prototype;z.setTimeout=function(t){this.O=t};function Xp(t,e,n){t.K=1,t.v=Jh(Sr(e)),t.s=n,t.P=!0,US(t,null)}function US(t,e){t.F=Date.now(),Hl(t),t.A=Sr(t.v);var n=t.A,r=t.U;Array.isArray(r)||(r=[String(r)]),GS(n.i,"t",r),t.C=0,n=t.l.H,t.h=new $S,t.g=pI(t.l,n?e:null,!t.s),0<t.N&&(t.L=new ZO(Lt(t.La,t,t.g),t.N)),xS(t.S,t.g,"readystatechange",t.ib),e=t.H?wS(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),cl(),eM(t.j,t.u,t.A,t.m,t.U,t.s)}z.ib=function(t){t=t.target;const e=this.L;e&&fr(t)==3?e.l():this.La(t)};z.La=function(t){try{if(t==this.g)e:{const c=fr(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>c)&&(c!=3||jp||this.g&&(this.h.h||this.g.fa()||A0(this.g)))){this.I||c!=4||e==7||(e==8||0>=h?cl(3):cl(2)),Xh(this);var n=this.g.aa();this.Y=n;t:if(VS(this)){var r=A0(this.g);t="";var i=r.length,s=fr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Mi(this),Ra(this);var o="";break t}this.h.i=new re.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,tM(this.j,this.u,this.A,this.m,this.U,c,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Bc(a)){var u=a;break t}}u=null}if(n=u)Us(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Jp(this,n);else{this.i=!1,this.o=3,jt(12),Mi(this),Ra(this);break e}}this.P?(zS(this,c,o),jp&&this.i&&c==3&&(xS(this.S,this.T,"tick",this.hb),this.T.start())):(Us(this.j,this.m,o,null),Jp(this,o)),c==4&&Mi(this),this.i&&!this.I&&(c==4?cI(this.l,this):(this.i=!1,Hl(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,jt(12)):(this.o=0,jt(13)),Mi(this),Ra(this)}}}catch{}finally{}};function VS(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function zS(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=sM(t,n),i==Wc){e==4&&(t.o=4,jt(14),r=!1),Us(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Yp){t.o=4,jt(15),Us(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Us(t.j,t.m,i,null),Jp(t,i);VS(t)&&i!=Wc&&i!=Yp&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,jt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),oy(e),e.K=!0,jt(11))):(Us(t.j,t.m,n,"[Invalid Chunked Response]"),Mi(t),Ra(t))}z.hb=function(){if(this.g){var t=fr(this.g),e=this.g.fa();this.C<e.length&&(Xh(this),zS(this,t,e),this.i&&t!=4&&Hl(this))}};function sM(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Wc:(n=Number(e.substring(n,r)),isNaN(n)?Yp:(r+=1,r+n>e.length?Wc:(e=e.substr(r,n),t.C=r+n,e)))}z.cancel=function(){this.I=!0,Mi(this)};function Hl(t){t.V=Date.now()+t.O,BS(t,t.O)}function BS(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Bl(Lt(t.gb,t),e)}function Xh(t){t.B&&(re.clearTimeout(t.B),t.B=null)}z.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(nM(this.j,this.A),this.K!=2&&(cl(),jt(17)),Mi(this),this.o=2,Ra(this)):BS(this,this.V-t)};function Ra(t){t.l.G==0||t.I||cI(t.l,t)}function Mi(t){Xh(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Qg(t.T),PS(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Jp(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Zp(n.h,t))){if(!t.J&&Zp(n.h,t)&&n.G==3){try{var r=n.Fa.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Gc(n),td(n);else break e;sy(n),jt(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=Bl(Lt(n.cb,n),6e3));if(1>=YS(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Li(n,11)}else if((t.J||n.g==t)&&Gc(n),!Bc(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const c=u[3];c!=null&&(n.ma=c,n.j.info("VER="+n.ma));const h=u[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const m=t.g;if(m){const v=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var s=r.h;s.g||v.indexOf("spdy")==-1&&v.indexOf("quic")==-1&&v.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(ey(s,s.h),s.h=null))}if(r.D){const _=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(r.za=_,Ue(r.F,r.D,_))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var o=t;if(r.sa=fI(r,r.H?r.ka:null,r.V),o.J){XS(r.h,o);var a=o,l=r.J;l&&a.setTimeout(l),a.B&&(Xh(a),Hl(a)),r.g=o}else lI(r);0<n.i.length&&nd(n)}else u[0]!="stop"&&u[0]!="close"||Li(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Li(n,7):iy(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}cl(4)}catch{}}function oM(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Bh(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function aM(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Bh(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function jS(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Bh(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=aM(t),r=oM(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var WS=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function lM(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function ji(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof ji){this.h=e!==void 0?e:t.h,Hc(this,t.j),this.s=t.s,this.g=t.g,qc(this,t.m),this.l=t.l,e=t.i;var n=new hl;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),k0(this,n),this.o=t.o}else t&&(n=String(t).match(WS))?(this.h=!!e,Hc(this,n[1]||"",!0),this.s=pa(n[2]||""),this.g=pa(n[3]||"",!0),qc(this,n[4]),this.l=pa(n[5]||"",!0),k0(this,n[6]||"",!0),this.o=pa(n[7]||"")):(this.h=!!e,this.i=new hl(null,this.h))}ji.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ma(e,N0,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(ma(e,N0,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(ma(n,n.charAt(0)=="/"?hM:cM,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ma(n,fM)),t.join("")};function Sr(t){return new ji(t)}function Hc(t,e,n){t.j=n?pa(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function qc(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function k0(t,e,n){e instanceof hl?(t.i=e,pM(t.i,t.h)):(n||(e=ma(e,dM)),t.i=new hl(e,t.h))}function Ue(t,e,n){t.i.set(e,n)}function Jh(t){return Ue(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function pa(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ma(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,uM),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function uM(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var N0=/[#\/\?@]/g,cM=/[#\?:]/g,hM=/[#\?]/g,dM=/[#\?@]/g,fM=/#/g;function hl(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ci(t){t.g||(t.g=new Map,t.h=0,t.i&&lM(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}z=hl.prototype;z.add=function(t,e){Ci(this),this.i=null,t=Po(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function HS(t,e){Ci(t),e=Po(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function qS(t,e){return Ci(t),e=Po(t,e),t.g.has(e)}z.forEach=function(t,e){Ci(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};z.oa=function(){Ci(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};z.W=function(t){Ci(this);let e=[];if(typeof t=="string")qS(this,t)&&(e=e.concat(this.g.get(Po(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};z.set=function(t,e){return Ci(this),this.i=null,t=Po(this,t),qS(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};z.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function GS(t,e,n){HS(t,e),0<n.length&&(t.i=null,t.g.set(Po(t,e),zg(n)),t.h+=n.length)}z.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function Po(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function pM(t,e){e&&!t.j&&(Ci(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(HS(this,r),GS(this,i,n))},t)),t.j=e}var mM=class{constructor(e,n){this.h=e,this.g=n}};function KS(t){this.l=t||gM,re.PerformanceNavigationTiming?(t=re.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(re.g&&re.g.Ga&&re.g.Ga()&&re.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var gM=10;function QS(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function YS(t){return t.h?1:t.g?t.g.size:0}function Zp(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function ey(t,e){t.g?t.g.add(e):t.h=e}function XS(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}KS.prototype.cancel=function(){if(this.i=JS(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function JS(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return zg(t.i)}function ty(){}ty.prototype.stringify=function(t){return re.JSON.stringify(t,void 0)};ty.prototype.parse=function(t){return re.JSON.parse(t,void 0)};function yM(){this.g=new ty}function vM(t,e,n){const r=n||"";try{jS(t,function(i,s){let o=i;Vl(i)&&(o=Kg(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function _M(t,e){const n=new Gh;if(re.Image){const r=new Image;r.onload=Au(xu,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Au(xu,n,r,"TestLoadImage: error",!1,e),r.onabort=Au(xu,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Au(xu,n,r,"TestLoadImage: timeout",!1,e),re.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function xu(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function ql(t){this.l=t.ac||null,this.j=t.jb||!1}St(ql,Xg);ql.prototype.g=function(){return new Zh(this.l,this.j)};ql.prototype.i=function(t){return function(){return t}}({});function Zh(t,e){gt.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=ny,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}St(Zh,gt);var ny=0;z=Zh.prototype;z.open=function(t,e){if(this.readyState!=ny)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,dl(this)};z.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||re).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};z.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Gl(this)),this.readyState=ny};z.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,dl(this)),this.g&&(this.readyState=3,dl(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof re.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ZS(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function ZS(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}z.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Gl(this):dl(this),this.readyState==3&&ZS(this)}};z.Va=function(t){this.g&&(this.response=this.responseText=t,Gl(this))};z.Ua=function(t){this.g&&(this.response=t,Gl(this))};z.ga=function(){this.g&&Gl(this)};function Gl(t){t.readyState=4,t.l=null,t.j=null,t.A=null,dl(t)}z.setRequestHeader=function(t,e){this.v.append(t,e)};z.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};z.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function dl(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Zh.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var wM=re.JSON.parse;function qe(t){gt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=eI,this.K=this.L=!1}St(qe,gt);var eI="",EM=/^https?$/i,CM=["POST","PUT"];z=qe.prototype;z.Ka=function(t){this.L=t};z.da=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Qp.g(),this.C=this.u?T0(this.u):T0(Qp),this.g.onreadystatechange=Lt(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){R0(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=re.FormData&&t instanceof re.FormData,!(0<=gS(CM,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{rI(this),0<this.B&&((this.K=SM(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Lt(this.qa,this)):this.A=Yg(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){R0(this,s)}};function SM(t){return co&&VO()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}z.qa=function(){typeof Vg<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Et(this,"timeout"),this.abort(8))};function R0(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,tI(t),ed(t)}function tI(t){t.D||(t.D=!0,Et(t,"complete"),Et(t,"error"))}z.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Et(this,"complete"),Et(this,"abort"),ed(this))};z.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ed(this,!0)),qe.X.M.call(this)};z.Ha=function(){this.s||(this.F||this.v||this.l?nI(this):this.fb())};z.fb=function(){nI(this)};function nI(t){if(t.h&&typeof Vg<"u"&&(!t.C[1]||fr(t)!=4||t.aa()!=2)){if(t.v&&fr(t)==4)Yg(t.Ha,0,t);else if(Et(t,"readystatechange"),fr(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(WS)[1]||null;if(!i&&re.self&&re.self.location){var s=re.self.location.protocol;i=s.substr(0,s.length-1)}r=!EM.test(i?i.toLowerCase():"")}n=r}if(n)Et(t,"complete"),Et(t,"success");else{t.m=6;try{var o=2<fr(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",tI(t)}}finally{ed(t)}}}}function ed(t,e){if(t.g){rI(t);const n=t.g,r=t.C[0]?zc:null;t.g=null,t.C=null,e||Et(t,"ready");try{n.onreadystatechange=r}catch{}}}function rI(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(re.clearTimeout(t.A),t.A=null)}function fr(t){return t.g?t.g.readyState:0}z.aa=function(){try{return 2<fr(this)?this.g.status:-1}catch{return-1}};z.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};z.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),wM(e)}};function A0(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case eI:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}z.Ea=function(){return this.m};z.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function iI(t){let e="";return jg(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function ry(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=iI(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ue(t,e,n))}function na(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function sI(t){this.Ca=0,this.i=[],this.j=new Gh,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=na("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=na("baseRetryDelayMs",5e3,t),this.bb=na("retryDelaySeedMs",1e4,t),this.$a=na("forwardChannelMaxRetries",2,t),this.ta=na("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new KS(t&&t.concurrentRequestLimit),this.Fa=new yM,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}z=sI.prototype;z.ma=8;z.G=1;function iy(t){if(oI(t),t.G==3){var e=t.U++,n=Sr(t.F);Ue(n,"SID",t.I),Ue(n,"RID",e),Ue(n,"TYPE","terminate"),Kl(t,n),e=new Wl(t,t.j,e,void 0),e.K=2,e.v=Jh(Sr(n)),n=!1,re.navigator&&re.navigator.sendBeacon&&(n=re.navigator.sendBeacon(e.v.toString(),"")),!n&&re.Image&&(new Image().src=e.v,n=!0),n||(e.g=pI(e.l,null),e.g.da(e.v)),e.F=Date.now(),Hl(e)}dI(t)}function td(t){t.g&&(oy(t),t.g.cancel(),t.g=null)}function oI(t){td(t),t.u&&(re.clearTimeout(t.u),t.u=null),Gc(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&re.clearTimeout(t.m),t.m=null)}function nd(t){QS(t.h)||t.m||(t.m=!0,RS(t.Ja,t),t.C=0)}function IM(t,e){return YS(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Bl(Lt(t.Ja,t,e),hI(t,t.C)),t.C++,!0)}z.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new Wl(this,this.j,t,void 0);let s=this.s;if(this.S&&(s?(s=wS(s),ES(s,this.S)):s=this.S),this.o!==null||this.N||(i.H=s,s=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=aI(this,i,e),n=Sr(this.F),Ue(n,"RID",t),Ue(n,"CVER",22),this.D&&Ue(n,"X-HTTP-Session-Id",this.D),Kl(this,n),s&&(this.N?e="headers="+encodeURIComponent(String(iI(s)))+"&"+e:this.o&&ry(n,this.o,s)),ey(this.h,i),this.Ya&&Ue(n,"TYPE","init"),this.O?(Ue(n,"$req",e),Ue(n,"SID","null"),i.Z=!0,Xp(i,n,null)):Xp(i,n,e),this.G=2}}else this.G==3&&(t?D0(this,t):this.i.length==0||QS(this.h)||D0(this))};function D0(t,e){var n;e?n=e.m:n=t.U++;const r=Sr(t.F);Ue(r,"SID",t.I),Ue(r,"RID",n),Ue(r,"AID",t.T),Kl(t,r),t.o&&t.s&&ry(r,t.o,t.s),n=new Wl(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=aI(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),ey(t.h,n),Xp(n,r,e)}function Kl(t,e){t.ia&&jg(t.ia,function(n,r){Ue(e,r,n)}),t.l&&jS({},function(n,r){Ue(e,r,n)})}function aI(t,e,n){n=Math.min(t.i.length,n);var r=t.l?Lt(t.l.Ra,t.l,t):null;e:{var i=t.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].h;const c=i[l].g;if(u-=s,0>u)s=Math.max(0,i[l].h-100),a=!1;else try{vM(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,r}function lI(t){t.g||t.u||(t.Z=1,RS(t.Ia,t),t.A=0)}function sy(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Bl(Lt(t.Ia,t),hI(t,t.A)),t.A++,!0)}z.Ia=function(){if(this.u=null,uI(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Bl(Lt(this.eb,this),t)}};z.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,jt(10),td(this),uI(this))};function oy(t){t.B!=null&&(re.clearTimeout(t.B),t.B=null)}function uI(t){t.g=new Wl(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Sr(t.sa);Ue(e,"RID","rpc"),Ue(e,"SID",t.I),Ue(e,"CI",t.L?"0":"1"),Ue(e,"AID",t.T),Ue(e,"TYPE","xmlhttp"),Kl(t,e),t.o&&t.s&&ry(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Jh(Sr(e)),n.s=null,n.P=!0,US(n,t)}z.cb=function(){this.v!=null&&(this.v=null,td(this),sy(this),jt(19))};function Gc(t){t.v!=null&&(re.clearTimeout(t.v),t.v=null)}function cI(t,e){var n=null;if(t.g==e){Gc(t),oy(t),t.g=null;var r=2}else if(Zp(t.h,e))n=e.D,XS(t.h,e),r=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=Kh(),Et(r,new MS(r,n)),nd(t)}else lI(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(r==1&&IM(t,e)||r==2&&sy(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:Li(t,5);break;case 4:Li(t,10);break;case 3:Li(t,6);break;default:Li(t,2)}}}function hI(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Li(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=Lt(t.kb,t);n||(n=new ji("//www.google.com/images/cleardot.gif"),re.location&&re.location.protocol=="http"||Hc(n,"https"),Jh(n)),_M(n.toString(),r)}else jt(2);t.G=0,t.l&&t.l.va(e),dI(t),oI(t)}z.kb=function(t){t?(this.j.info("Successfully pinged google.com"),jt(2)):(this.j.info("Failed to ping google.com"),jt(1))};function dI(t){if(t.G=0,t.la=[],t.l){const e=JS(t.h);(e.length!=0||t.i.length!=0)&&(_0(t.la,e),_0(t.la,t.i),t.h.i.length=0,zg(t.i),t.i.length=0),t.l.ua()}}function fI(t,e,n){var r=n instanceof ji?Sr(n):new ji(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),qc(r,r.m);else{var i=re.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new ji(null,void 0);r&&Hc(s,r),e&&(s.g=e),i&&qc(s,i),n&&(s.l=n),r=s}return n=t.D,e=t.za,n&&e&&Ue(r,n,e),Ue(r,"VER",t.ma),Kl(t,r),r}function pI(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new qe(new ql({jb:!0})):new qe(t.ra),e.Ka(t.H),e}function mI(){}z=mI.prototype;z.xa=function(){};z.wa=function(){};z.va=function(){};z.ua=function(){};z.Ra=function(){};function Kc(){if(co&&!(10<=Number(zO)))throw Error("Environmental error: no available transport.")}Kc.prototype.g=function(t,e){return new fn(t,e)};function fn(t,e){gt.call(this),this.g=new sI(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Bc(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Bc(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new bo(this)}St(fn,gt);fn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;jt(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=fI(t,null,t.V),nd(t)};fn.prototype.close=function(){iy(this.g)};fn.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Kg(t),t=n);e.i.push(new mM(e.ab++,t)),e.G==3&&nd(e)};fn.prototype.M=function(){this.g.l=null,delete this.j,iy(this.g),delete this.g,fn.X.M.call(this)};function gI(t){Jg.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}St(gI,Jg);function yI(){Zg.call(this),this.status=1}St(yI,Zg);function bo(t){this.g=t}St(bo,mI);bo.prototype.xa=function(){Et(this.g,"a")};bo.prototype.wa=function(t){Et(this.g,new gI(t))};bo.prototype.va=function(t){Et(this.g,new yI)};bo.prototype.ua=function(){Et(this.g,"b")};Kc.prototype.createWebChannel=Kc.prototype.g;fn.prototype.send=fn.prototype.u;fn.prototype.open=fn.prototype.m;fn.prototype.close=fn.prototype.close;Qh.NO_ERROR=0;Qh.TIMEOUT=8;Qh.HTTP_ERROR=6;LS.COMPLETE="complete";FS.EventType=jl;jl.OPEN="a";jl.CLOSE="b";jl.ERROR="c";jl.MESSAGE="d";gt.prototype.listen=gt.prototype.N;qe.prototype.listenOnce=qe.prototype.O;qe.prototype.getLastError=qe.prototype.Oa;qe.prototype.getLastErrorCode=qe.prototype.Ea;qe.prototype.getStatus=qe.prototype.aa;qe.prototype.getResponseJson=qe.prototype.Sa;qe.prototype.getResponseText=qe.prototype.fa;qe.prototype.send=qe.prototype.da;qe.prototype.setWithCredentials=qe.prototype.Ka;var TM=function(){return new Kc},kM=function(){return Kh()},Sf=Qh,NM=LS,RM=ds,x0={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},AM=ql,Pu=FS,DM=qe;const P0="@firebase/firestore";/**
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
 */class Dt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Dt.UNAUTHENTICATED=new Dt(null),Dt.GOOGLE_CREDENTIALS=new Dt("google-credentials-uid"),Dt.FIRST_PARTY=new Dt("first-party-uid"),Dt.MOCK_USER=new Dt("mock-user");/**
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
 */let Oo="9.19.0";/**
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
 */const rs=new Fh("@firebase/firestore");function b0(){return rs.logLevel}function j(t,...e){if(rs.logLevel<=Ee.DEBUG){const n=e.map(ay);rs.debug(`Firestore (${Oo}): ${t}`,...n)}}function Ir(t,...e){if(rs.logLevel<=Ee.ERROR){const n=e.map(ay);rs.error(`Firestore (${Oo}): ${t}`,...n)}}function Qc(t,...e){if(rs.logLevel<=Ee.WARN){const n=e.map(ay);rs.warn(`Firestore (${Oo}): ${t}`,...n)}}function ay(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function te(t="Unexpected state"){const e=`FIRESTORE (${Oo}) INTERNAL ASSERTION FAILED: `+t;throw Ir(e),new Error(e)}function Le(t,e){t||te()}function oe(t,e){return t}/**
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
 */const N={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class F extends Dr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ii{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class vI{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class xM{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Dt.UNAUTHENTICATED))}shutdown(){}}class PM{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class bM{constructor(e){this.t=e,this.currentUser=Dt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new ii;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new ii,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{j("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(j("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new ii)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(j("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Le(typeof r.accessToken=="string"),new vI(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Le(e===null||typeof e=="string"),new Dt(e)}}class OM{constructor(e,n,r){this.h=e,this.l=n,this.m=r,this.type="FirstParty",this.user=Dt.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class MM{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new OM(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(Dt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class LM{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class FM{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const r=s=>{s.error!=null&&j("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.T;return this.T=s.token,j("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{j("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.I.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.I.getImmediate({optional:!0});s?i(s):j("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Le(typeof n.token=="string"),this.T=n.token,new LM(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function $M(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class _I{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=$M(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function Te(t,e){return t<e?-1:t>e?1:0}function ho(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class it{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new F(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new F(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new F(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new F(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return it.fromMillis(Date.now())}static fromDate(e){return it.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new it(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Te(this.nanoseconds,e.nanoseconds):Te(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class se{constructor(e){this.timestamp=e}static fromTimestamp(e){return new se(e)}static min(){return new se(new it(0,0))}static max(){return new se(new it(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class fl{constructor(e,n,r){n===void 0?n=0:n>e.length&&te(),r===void 0?r=e.length-n:r>e.length-n&&te(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return fl.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof fl?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Oe extends fl{construct(e,n,r){return new Oe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new F(N.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Oe(n)}static emptyPath(){return new Oe([])}}const UM=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ot extends fl{construct(e,n,r){return new Ot(e,n,r)}static isValidIdentifier(e){return UM.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ot.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ot(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new F(N.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new F(N.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new F(N.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new F(N.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ot(n)}static emptyPath(){return new Ot([])}}/**
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
 */class G{constructor(e){this.path=e}static fromPath(e){return new G(Oe.fromString(e))}static fromName(e){return new G(Oe.fromString(e).popFirst(5))}static empty(){return new G(Oe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Oe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Oe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new G(new Oe(e.slice()))}}function VM(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=se.fromTimestamp(r===1e9?new it(n+1,0):new it(n,r));return new di(i,G.empty(),e)}function zM(t){return new di(t.readTime,t.key,-1)}class di{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new di(se.min(),G.empty(),-1)}static max(){return new di(se.max(),G.empty(),-1)}}function BM(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=G.comparator(t.documentKey,e.documentKey),n!==0?n:Te(t.largestBatchId,e.largestBatchId))}/**
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
 */const jM="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class WM{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Ql(t){if(t.code!==N.FAILED_PRECONDITION||t.message!==jM)throw t;j("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class b{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&te(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new b((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof b?n:b.resolve(n)}catch(n){return b.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):b.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):b.reject(n)}static resolve(e){return new b((n,r)=>{n(e)})}static reject(e){return new b((n,r)=>{r(e)})}static waitFor(e){return new b((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=b.resolve(!1);for(const r of e)n=n.next(i=>i?b.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new b((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new b((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function Yl(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class ly{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ot(r),this.ut=r=>n.writeSequenceNumber(r))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}ly.ct=-1;function rd(t){return t==null}function Yc(t){return t===0&&1/t==-1/0}function HM(t){return typeof t=="number"&&Number.isInteger(t)&&!Yc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function O0(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function fs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function wI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class ot{constructor(e,n){this.comparator=e,this.root=n||vt.EMPTY}insert(e,n){return new ot(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,vt.BLACK,null,null))}remove(e){return new ot(this.comparator,this.root.remove(e,this.comparator).copy(null,null,vt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new bu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new bu(this.root,e,this.comparator,!1)}getReverseIterator(){return new bu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new bu(this.root,e,this.comparator,!0)}}class bu{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class vt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??vt.RED,this.left=i??vt.EMPTY,this.right=s??vt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new vt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return vt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return vt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,vt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,vt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw te();const e=this.left.check();if(e!==this.right.check())throw te();return e+(this.isRed()?0:1)}}vt.EMPTY=null,vt.RED=!0,vt.BLACK=!1;vt.EMPTY=new class{constructor(){this.size=0}get key(){throw te()}get value(){throw te()}get color(){throw te()}get left(){throw te()}get right(){throw te()}copy(t,e,n,r,i){return this}insert(t,e,n){return new vt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class st{constructor(e){this.comparator=e,this.data=new ot(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new M0(this.data.getIterator())}getIteratorFrom(e){return new M0(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof st)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new st(this.comparator);return n.data=e,n}}class M0{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class un{constructor(e){this.fields=e,e.sort(Ot.comparator)}static empty(){return new un([])}unionWith(e){let n=new st(Ot.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new un(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ho(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class qM extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Vt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new qM("Invalid base64 string: "+i):i}}(e);return new Vt(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new Vt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Te(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Vt.EMPTY_BYTE_STRING=new Vt("");const GM=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function fi(t){if(Le(!!t),typeof t=="string"){let e=0;const n=GM.exec(t);if(Le(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ye(t.seconds),nanos:Ye(t.nanos)}}function Ye(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function fo(t){return typeof t=="string"?Vt.fromBase64String(t):Vt.fromUint8Array(t)}/**
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
 */function EI(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function CI(t){const e=t.mapValue.fields.__previous_value__;return EI(e)?CI(e):e}function pl(t){const e=fi(t.mapValue.fields.__local_write_time__.timestampValue);return new it(e.seconds,e.nanos)}/**
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
 */class KM{constructor(e,n,r,i,s,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class ml{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ml("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ml&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Ou={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function is(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?EI(t)?4:QM(t)?9007199254740991:10:te()}function Zn(t,e){if(t===e)return!0;const n=is(t);if(n!==is(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return pl(t).isEqual(pl(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=fi(r.timestampValue),o=fi(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return fo(r.bytesValue).isEqual(fo(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return Ye(r.geoPointValue.latitude)===Ye(i.geoPointValue.latitude)&&Ye(r.geoPointValue.longitude)===Ye(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Ye(r.integerValue)===Ye(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=Ye(r.doubleValue),o=Ye(i.doubleValue);return s===o?Yc(s)===Yc(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return ho(t.arrayValue.values||[],e.arrayValue.values||[],Zn);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(O0(s)!==O0(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!Zn(s[a],o[a])))return!1;return!0}(t,e);default:return te()}}function gl(t,e){return(t.values||[]).find(n=>Zn(n,e))!==void 0}function po(t,e){if(t===e)return 0;const n=is(t),r=is(e);if(n!==r)return Te(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Te(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=Ye(i.integerValue||i.doubleValue),a=Ye(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return L0(t.timestampValue,e.timestampValue);case 4:return L0(pl(t),pl(e));case 5:return Te(t.stringValue,e.stringValue);case 6:return function(i,s){const o=fo(i),a=fo(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=Te(o[l],a[l]);if(u!==0)return u}return Te(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=Te(Ye(i.latitude),Ye(s.latitude));return o!==0?o:Te(Ye(i.longitude),Ye(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=po(o[l],a[l]);if(u)return u}return Te(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===Ou.mapValue&&s===Ou.mapValue)return 0;if(i===Ou.mapValue)return 1;if(s===Ou.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const h=Te(a[c],u[c]);if(h!==0)return h;const d=po(o[a[c]],l[u[c]]);if(d!==0)return d}return Te(a.length,u.length)}(t.mapValue,e.mapValue);default:throw te()}}function L0(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Te(t,e);const n=fi(t),r=fi(e),i=Te(n.seconds,r.seconds);return i!==0?i:Te(n.nanos,r.nanos)}function mo(t){return em(t)}function em(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=fi(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?fo(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,G.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=em(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${em(r.fields[a])}`;return s+"}"}(t.mapValue):te();var e,n}function F0(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function tm(t){return!!t&&"integerValue"in t}function uy(t){return!!t&&"arrayValue"in t}function $0(t){return!!t&&"nullValue"in t}function U0(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function nc(t){return!!t&&"mapValue"in t}function Aa(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return fs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Aa(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Aa(t.arrayValue.values[n]);return e}return Object.assign({},t)}function QM(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Kt{constructor(e){this.value=e}static empty(){return new Kt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!nc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Aa(n)}setAll(e){let n=Ot.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Aa(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());nc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Zn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];nc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){fs(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Kt(Aa(this.value))}}function SI(t){const e=[];return fs(t.fields,(n,r)=>{const i=new Ot([n]);if(nc(r)){const s=SI(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new un(e)}/**
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
 */class Pt{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Pt(e,0,se.min(),se.min(),se.min(),Kt.empty(),0)}static newFoundDocument(e,n,r,i){return new Pt(e,1,n,se.min(),r,i,0)}static newNoDocument(e,n){return new Pt(e,2,n,se.min(),se.min(),Kt.empty(),0)}static newUnknownDocument(e,n){return new Pt(e,3,n,se.min(),se.min(),Kt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(se.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Kt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Kt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=se.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Pt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Pt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Xc{constructor(e,n){this.position=e,this.inclusive=n}}function V0(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=G.comparator(G.fromName(o.referenceValue),n.key):r=po(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function z0(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Zn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Da{constructor(e,n="asc"){this.field=e,this.dir=n}}function YM(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class II{}class Je extends II{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new JM(e,n,r):n==="array-contains"?new tL(e,r):n==="in"?new nL(e,r):n==="not-in"?new rL(e,r):n==="array-contains-any"?new iL(e,r):new Je(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new ZM(e,r):new eL(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(po(n,this.value)):n!==null&&is(this.value)===is(n)&&this.matchesComparison(po(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return te()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Vn extends II{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new Vn(e,n)}matches(e){return TI(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function TI(t){return t.op==="and"}function kI(t){return XM(t)&&TI(t)}function XM(t){for(const e of t.filters)if(e instanceof Vn)return!1;return!0}function nm(t){if(t instanceof Je)return t.field.canonicalString()+t.op.toString()+mo(t.value);if(kI(t))return t.filters.map(e=>nm(e)).join(",");{const e=t.filters.map(n=>nm(n)).join(",");return`${t.op}(${e})`}}function NI(t,e){return t instanceof Je?function(n,r){return r instanceof Je&&n.op===r.op&&n.field.isEqual(r.field)&&Zn(n.value,r.value)}(t,e):t instanceof Vn?function(n,r){return r instanceof Vn&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,s,o)=>i&&NI(s,r.filters[o]),!0):!1}(t,e):void te()}function RI(t){return t instanceof Je?function(e){return`${e.field.canonicalString()} ${e.op} ${mo(e.value)}`}(t):t instanceof Vn?function(e){return e.op.toString()+" {"+e.getFilters().map(RI).join(" ,")+"}"}(t):"Filter"}class JM extends Je{constructor(e,n,r){super(e,n,r),this.key=G.fromName(r.referenceValue)}matches(e){const n=G.comparator(e.key,this.key);return this.matchesComparison(n)}}class ZM extends Je{constructor(e,n){super(e,"in",n),this.keys=AI("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class eL extends Je{constructor(e,n){super(e,"not-in",n),this.keys=AI("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function AI(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>G.fromName(r.referenceValue))}class tL extends Je{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return uy(n)&&gl(n.arrayValue,this.value)}}class nL extends Je{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&gl(this.value.arrayValue,n)}}class rL extends Je{constructor(e,n){super(e,"not-in",n)}matches(e){if(gl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!gl(this.value.arrayValue,n)}}class iL extends Je{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!uy(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>gl(this.value.arrayValue,r))}}/**
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
 */class sL{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ft=null}}function B0(t,e=null,n=[],r=[],i=null,s=null,o=null){return new sL(t,e,n,r,i,s,o)}function cy(t){const e=oe(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>nm(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),rd(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>mo(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>mo(r)).join(",")),e.ft=n}return e.ft}function hy(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!YM(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!NI(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!z0(t.startAt,e.startAt)&&z0(t.endAt,e.endAt)}function rm(t){return G.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Xl{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.dt=null,this.wt=null,this.startAt,this.endAt}}function oL(t,e,n,r,i,s,o,a){return new Xl(t,e,n,r,i,s,o,a)}function DI(t){return new Xl(t)}function j0(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function xI(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function dy(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function PI(t){return t.collectionGroup!==null}function Ys(t){const e=oe(t);if(e.dt===null){e.dt=[];const n=dy(e),r=xI(e);if(n!==null&&r===null)n.isKeyField()||e.dt.push(new Da(n)),e.dt.push(new Da(Ot.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.dt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new Da(Ot.keyField(),s))}}}return e.dt}function Tr(t){const e=oe(t);if(!e.wt)if(e.limitType==="F")e.wt=B0(e.path,e.collectionGroup,Ys(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of Ys(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new Da(s.field,o))}const r=e.endAt?new Xc(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Xc(e.startAt.position,e.startAt.inclusive):null;e.wt=B0(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.wt}function im(t,e){e.getFirstInequalityField(),dy(t);const n=t.filters.concat([e]);return new Xl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function sm(t,e,n){return new Xl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function id(t,e){return hy(Tr(t),Tr(e))&&t.limitType===e.limitType}function bI(t){return`${cy(Tr(t))}|lt:${t.limitType}`}function om(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>RI(r)).join(", ")}]`),rd(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>mo(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>mo(r)).join(",")),`Target(${n})`}(Tr(t))}; limitType=${t.limitType})`}function sd(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):G.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of Ys(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=V0(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,Ys(n),r)||n.endAt&&!function(i,s,o){const a=V0(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,Ys(n),r))}(t,e)}function aL(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function OI(t){return(e,n)=>{let r=!1;for(const i of Ys(t)){const s=lL(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function lL(t,e,n){const r=t.field.isKeyField()?G.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?po(a,l):te()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return te()}}/**
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
 */class Mo{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){fs(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return wI(this.inner)}size(){return this.innerSize}}/**
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
 */const uL=new ot(G.comparator);function kr(){return uL}const MI=new ot(G.comparator);function ga(...t){let e=MI;for(const n of t)e=e.insert(n.key,n);return e}function LI(t){let e=MI;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Fi(){return xa()}function FI(){return xa()}function xa(){return new Mo(t=>t.toString(),(t,e)=>t.isEqual(e))}const cL=new ot(G.comparator),hL=new st(G.comparator);function fe(...t){let e=hL;for(const n of t)e=e.add(n);return e}const dL=new st(Te);function $I(){return dL}/**
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
 */function UI(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Yc(e)?"-0":e}}function VI(t){return{integerValue:""+t}}function fL(t,e){return HM(e)?VI(e):UI(t,e)}/**
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
 */class od{constructor(){this._=void 0}}function pL(t,e,n){return t instanceof Jc?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof yl?BI(t,e):t instanceof vl?jI(t,e):function(r,i){const s=zI(r,i),o=W0(s)+W0(r._t);return tm(s)&&tm(r._t)?VI(o):UI(r.serializer,o)}(t,e)}function mL(t,e,n){return t instanceof yl?BI(t,e):t instanceof vl?jI(t,e):n}function zI(t,e){return t instanceof Zc?tm(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class Jc extends od{}class yl extends od{constructor(e){super(),this.elements=e}}function BI(t,e){const n=WI(e);for(const r of t.elements)n.some(i=>Zn(i,r))||n.push(r);return{arrayValue:{values:n}}}class vl extends od{constructor(e){super(),this.elements=e}}function jI(t,e){let n=WI(e);for(const r of t.elements)n=n.filter(i=>!Zn(i,r));return{arrayValue:{values:n}}}class Zc extends od{constructor(e,n){super(),this.serializer=e,this._t=n}}function W0(t){return Ye(t.integerValue||t.doubleValue)}function WI(t){return uy(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function gL(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof yl&&r instanceof yl||n instanceof vl&&r instanceof vl?ho(n.elements,r.elements,Zn):n instanceof Zc&&r instanceof Zc?Zn(n._t,r._t):n instanceof Jc&&r instanceof Jc}(t.transform,e.transform)}class yL{constructor(e,n){this.version=e,this.transformResults=n}}class Ln{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ln}static exists(e){return new Ln(void 0,e)}static updateTime(e){return new Ln(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function rc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ad{}function HI(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new fy(t.key,Ln.none()):new Jl(t.key,t.data,Ln.none());{const n=t.data,r=Kt.empty();let i=new st(Ot.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Si(t.key,r,new un(i.toArray()),Ln.none())}}function vL(t,e,n){t instanceof Jl?function(r,i,s){const o=r.value.clone(),a=q0(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Si?function(r,i,s){if(!rc(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=q0(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(qI(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function Pa(t,e,n,r){return t instanceof Jl?function(i,s,o,a){if(!rc(i.precondition,s))return o;const l=i.value.clone(),u=G0(i.fieldTransforms,a,s);return l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof Si?function(i,s,o,a){if(!rc(i.precondition,s))return o;const l=G0(i.fieldTransforms,a,s),u=s.data;return u.setAll(qI(i)),u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return rc(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function _L(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=zI(r.transform,i||null);s!=null&&(n===null&&(n=Kt.empty()),n.set(r.field,s))}return n||null}function H0(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&ho(n,r,(i,s)=>gL(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Jl extends ad{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Si extends ad{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function qI(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function q0(t,e,n){const r=new Map;Le(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,mL(o,a,n[i]))}return r}function G0(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,pL(s,o,e))}return r}class fy extends ad{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class wL extends ad{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class EL{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&vL(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Pa(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Pa(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=FI();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=HI(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(se.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),fe())}isEqual(e){return this.batchId===e.batchId&&ho(this.mutations,e.mutations,(n,r)=>H0(n,r))&&ho(this.baseMutations,e.baseMutations,(n,r)=>H0(n,r))}}class py{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Le(e.mutations.length===r.length);let i=cL;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new py(e,n,r,i)}}/**
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
 */class CL{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class SL{constructor(e){this.count=e}}/**
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
 */var Ke,me;function IL(t){switch(t){default:return te();case N.CANCELLED:case N.UNKNOWN:case N.DEADLINE_EXCEEDED:case N.RESOURCE_EXHAUSTED:case N.INTERNAL:case N.UNAVAILABLE:case N.UNAUTHENTICATED:return!1;case N.INVALID_ARGUMENT:case N.NOT_FOUND:case N.ALREADY_EXISTS:case N.PERMISSION_DENIED:case N.FAILED_PRECONDITION:case N.ABORTED:case N.OUT_OF_RANGE:case N.UNIMPLEMENTED:case N.DATA_LOSS:return!0}}function GI(t){if(t===void 0)return Ir("GRPC error has no .code"),N.UNKNOWN;switch(t){case Ke.OK:return N.OK;case Ke.CANCELLED:return N.CANCELLED;case Ke.UNKNOWN:return N.UNKNOWN;case Ke.DEADLINE_EXCEEDED:return N.DEADLINE_EXCEEDED;case Ke.RESOURCE_EXHAUSTED:return N.RESOURCE_EXHAUSTED;case Ke.INTERNAL:return N.INTERNAL;case Ke.UNAVAILABLE:return N.UNAVAILABLE;case Ke.UNAUTHENTICATED:return N.UNAUTHENTICATED;case Ke.INVALID_ARGUMENT:return N.INVALID_ARGUMENT;case Ke.NOT_FOUND:return N.NOT_FOUND;case Ke.ALREADY_EXISTS:return N.ALREADY_EXISTS;case Ke.PERMISSION_DENIED:return N.PERMISSION_DENIED;case Ke.FAILED_PRECONDITION:return N.FAILED_PRECONDITION;case Ke.ABORTED:return N.ABORTED;case Ke.OUT_OF_RANGE:return N.OUT_OF_RANGE;case Ke.UNIMPLEMENTED:return N.UNIMPLEMENTED;case Ke.DATA_LOSS:return N.DATA_LOSS;default:return te()}}(me=Ke||(Ke={}))[me.OK=0]="OK",me[me.CANCELLED=1]="CANCELLED",me[me.UNKNOWN=2]="UNKNOWN",me[me.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",me[me.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",me[me.NOT_FOUND=5]="NOT_FOUND",me[me.ALREADY_EXISTS=6]="ALREADY_EXISTS",me[me.PERMISSION_DENIED=7]="PERMISSION_DENIED",me[me.UNAUTHENTICATED=16]="UNAUTHENTICATED",me[me.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",me[me.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",me[me.ABORTED=10]="ABORTED",me[me.OUT_OF_RANGE=11]="OUT_OF_RANGE",me[me.UNIMPLEMENTED=12]="UNIMPLEMENTED",me[me.INTERNAL=13]="INTERNAL",me[me.UNAVAILABLE=14]="UNAVAILABLE",me[me.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class my{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Mu}static getOrCreateInstance(){return Mu===null&&(Mu=new my),Mu}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let Mu=null;/**
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
 */class ld{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Zl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new ld(se.min(),i,$I(),kr(),fe())}}class Zl{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Zl(r,n,fe(),fe(),fe())}}/**
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
 */class ic{constructor(e,n,r,i){this.It=e,this.removedTargetIds=n,this.key=r,this.Tt=i}}class KI{constructor(e,n){this.targetId=e,this.Et=n}}class QI{constructor(e,n,r=Vt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class K0{constructor(){this.At=0,this.Rt=Y0(),this.vt=Vt.EMPTY_BYTE_STRING,this.bt=!1,this.Pt=!0}get current(){return this.bt}get resumeToken(){return this.vt}get Vt(){return this.At!==0}get St(){return this.Pt}Dt(e){e.approximateByteSize()>0&&(this.Pt=!0,this.vt=e)}Ct(){let e=fe(),n=fe(),r=fe();return this.Rt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:te()}}),new Zl(this.vt,this.bt,e,n,r)}xt(){this.Pt=!1,this.Rt=Y0()}Nt(e,n){this.Pt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.Pt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}$t(){this.At-=1}Mt(){this.Pt=!0,this.bt=!0}}class TL{constructor(e){this.Ft=e,this.Bt=new Map,this.Lt=kr(),this.qt=Q0(),this.Ut=new st(Te)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}zt(e){this.forEachTarget(e,n=>{const r=this.jt(n);switch(e.state){case 0:this.Wt(n)&&r.Dt(e.resumeToken);break;case 1:r.$t(),r.Vt||r.xt(),r.Dt(e.resumeToken);break;case 2:r.$t(),r.Vt||this.removeTarget(n);break;case 3:this.Wt(n)&&(r.Mt(),r.Dt(e.resumeToken));break;case 4:this.Wt(n)&&(this.Ht(n),r.Dt(e.resumeToken));break;default:te()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((r,i)=>{this.Wt(i)&&n(i)})}Jt(e){var n;const r=e.targetId,i=e.Et.count,s=this.Yt(r);if(s){const o=s.target;if(rm(o))if(i===0){const a=new G(o.path);this.Qt(r,a,Pt.newNoDocument(a,se.min()))}else Le(i===1);else{const a=this.Zt(r);a!==i&&(this.Ht(r),this.Ut=this.Ut.add(r),(n=my.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch({localCacheCount:a,existenceFilterCount:e.Et.count}))}}}Xt(e){const n=new Map;this.Bt.forEach((s,o)=>{const a=this.Yt(o);if(a){if(s.current&&rm(a.target)){const l=new G(a.target.path);this.Lt.get(l)!==null||this.te(o,l)||this.Qt(o,l,Pt.newNoDocument(l,e))}s.St&&(n.set(o,s.Ct()),s.xt())}});let r=fe();this.qt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Yt(l);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))}),this.Lt.forEach((s,o)=>o.setReadTime(e));const i=new ld(e,n,this.Ut,this.Lt,r);return this.Lt=kr(),this.qt=Q0(),this.Ut=new st(Te),i}Gt(e,n){if(!this.Wt(e))return;const r=this.te(e,n.key)?2:0;this.jt(e).Nt(n.key,r),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,r){if(!this.Wt(e))return;const i=this.jt(e);this.te(e,n)?i.Nt(n,1):i.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),r&&(this.Lt=this.Lt.insert(n,r))}removeTarget(e){this.Bt.delete(e)}Zt(e){const n=this.jt(e).Ct();return this.Ft.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.jt(e).Ot()}jt(e){let n=this.Bt.get(e);return n||(n=new K0,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new st(Te),this.qt=this.qt.insert(e,n)),n}Wt(e){const n=this.Yt(e)!==null;return n||j("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.Ft.ne(e)}Ht(e){this.Bt.set(e,new K0),this.Ft.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.Ft.getRemoteKeysForTarget(e).has(n)}}function Q0(){return new ot(G.comparator)}function Y0(){return new ot(G.comparator)}/**
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
 */const kL=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),NL=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),RL=(()=>({and:"AND",or:"OR"}))();class AL{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function eh(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function YI(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function DL(t,e){return eh(t,e.toTimestamp())}function Jn(t){return Le(!!t),se.fromTimestamp(function(e){const n=fi(e);return new it(n.seconds,n.nanos)}(t))}function gy(t,e){return function(n){return new Oe(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function XI(t){const e=Oe.fromString(t);return Le(tT(e)),e}function am(t,e){return gy(t.databaseId,e.path)}function If(t,e){const n=XI(e);if(n.get(1)!==t.databaseId.projectId)throw new F(N.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new F(N.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new G(JI(n))}function lm(t,e){return gy(t.databaseId,e)}function xL(t){const e=XI(t);return e.length===4?Oe.emptyPath():JI(e)}function um(t){return new Oe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function JI(t){return Le(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function X0(t,e,n){return{name:am(t,e),fields:n.value.mapValue.fields}}function PL(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:te()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.useProto3Json?(Le(u===void 0||typeof u=="string"),Vt.fromBase64String(u||"")):(Le(u===void 0||u instanceof Uint8Array),Vt.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?N.UNKNOWN:GI(l.code);return new F(u,l.message||"")}(o);n=new QI(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=If(t,r.document.name),s=Jn(r.document.updateTime),o=r.document.createTime?Jn(r.document.createTime):se.min(),a=new Kt({mapValue:{fields:r.document.fields}}),l=Pt.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new ic(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=If(t,r.document),s=r.readTime?Jn(r.readTime):se.min(),o=Pt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new ic([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=If(t,r.document),s=r.removedTargetIds||[];n=new ic([],s,i,null)}else{if(!("filter"in e))return te();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new SL(i),o=r.targetId;n=new KI(o,s)}}return n}function bL(t,e){let n;if(e instanceof Jl)n={update:X0(t,e.key,e.value)};else if(e instanceof fy)n={delete:am(t,e.key)};else if(e instanceof Si)n={update:X0(t,e.key,e.data),updateMask:BL(e.fieldMask)};else{if(!(e instanceof wL))return te();n={verify:am(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof Jc)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof yl)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof vl)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Zc)return{fieldPath:s.field.canonicalString(),increment:o._t};throw te()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:DL(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:te()}(t,e.precondition)),n}function OL(t,e){return t&&t.length>0?(Le(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?Jn(r.updateTime):Jn(i);return s.isEqual(se.min())&&(s=Jn(i)),new yL(s,r.transformResults||[])}(n,e))):[]}function ML(t,e){return{documents:[lm(t,e.path)]}}function LL(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=lm(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=lm(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return eT(Vn.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:Cs(c.field),direction:UL(c.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(l,u){return l.useProto3Json||rd(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function FL(t){let e=xL(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Le(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(c){const h=ZI(c);return h instanceof Vn&&kI(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new Da(Ss(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,rd(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(c){const h=!!c.before,d=c.values||[];return new Xc(d,h)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const h=!c.before,d=c.values||[];return new Xc(d,h)}(n.endAt)),oL(e,i,o,s,a,"F",l,u)}function $L(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return te()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function ZI(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Ss(e.unaryFilter.field);return Je.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=Ss(e.unaryFilter.field);return Je.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ss(e.unaryFilter.field);return Je.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Ss(e.unaryFilter.field);return Je.create(s,"!=",{nullValue:"NULL_VALUE"});default:return te()}}(t):t.fieldFilter!==void 0?function(e){return Je.create(Ss(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return te()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Vn.create(e.compositeFilter.filters.map(n=>ZI(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return te()}}(e.compositeFilter.op))}(t):te()}function UL(t){return kL[t]}function VL(t){return NL[t]}function zL(t){return RL[t]}function Cs(t){return{fieldPath:t.canonicalString()}}function Ss(t){return Ot.fromServerFormat(t.fieldPath)}function eT(t){return t instanceof Je?function(e){if(e.op==="=="){if(U0(e.value))return{unaryFilter:{field:Cs(e.field),op:"IS_NAN"}};if($0(e.value))return{unaryFilter:{field:Cs(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(U0(e.value))return{unaryFilter:{field:Cs(e.field),op:"IS_NOT_NAN"}};if($0(e.value))return{unaryFilter:{field:Cs(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Cs(e.field),op:VL(e.op),value:e.value}}}(t):t instanceof Vn?function(e){const n=e.getFilters().map(r=>eT(r));return n.length===1?n[0]:{compositeFilter:{op:zL(e.op),filters:n}}}(t):te()}function BL(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function tT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Wi{constructor(e,n,r,i,s=se.min(),o=se.min(),a=Vt.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Wi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Wi(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Wi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class jL{constructor(e){this.se=e}}function WL(t){const e=FL({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?sm(e,e.limit,"L"):e}/**
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
 */class HL{constructor(){this.He=new qL}addToCollectionParentIndex(e,n){return this.He.add(n),b.resolve()}getCollectionParents(e,n){return b.resolve(this.He.getEntries(n))}addFieldIndex(e,n){return b.resolve()}deleteFieldIndex(e,n){return b.resolve()}getDocumentsMatchingTarget(e,n){return b.resolve(null)}getIndexType(e,n){return b.resolve(0)}getFieldIndexes(e,n){return b.resolve([])}getNextCollectionGroupToUpdate(e){return b.resolve(null)}getMinOffset(e,n){return b.resolve(di.min())}getMinOffsetFromCollectionGroup(e,n){return b.resolve(di.min())}updateCollectionGroup(e,n,r){return b.resolve()}updateIndexEntries(e,n){return b.resolve()}}class qL{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new st(Oe.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new st(Oe.comparator)).toArray()}}/**
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
 */class go{constructor(e){this.Rn=e}next(){return this.Rn+=2,this.Rn}static vn(){return new go(0)}static bn(){return new go(-1)}}/**
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
 */class GL{constructor(){this.changes=new Mo(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Pt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?b.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class KL{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class QL{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Pa(r.mutation,i,un.empty(),it.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,fe()).next(()=>r))}getLocalViewOfDocuments(e,n,r=fe()){const i=Fi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=ga();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Fi();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,fe()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=kr();const o=xa(),a=xa();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof Si)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),Pa(c.mutation,u,c.mutation.getFieldMask(),it.now())):o.set(u.key,un.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new KL(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=xa();let i=new ot((o,a)=>o-a),s=fe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||un.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||fe()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=FI();c.forEach(d=>{if(!s.has(d)){const m=HI(n.get(d),r.get(d));m!==null&&h.set(d,m),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return b.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return G.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):PI(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):b.resolve(Fi());let a=-1,l=s;return o.next(u=>b.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?b.resolve():this.remoteDocumentCache.getEntry(e,c).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,fe())).next(c=>({batchId:a,changes:LI(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new G(n)).next(r=>{let i=ga();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=ga();return this.indexManager.getCollectionParents(e,i).next(o=>b.forEach(o,a=>{const l=function(u,c){return new Xl(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,l)=>{const u=l.getKey();s.get(u)===null&&(s=s.insert(u,Pt.newInvalidDocument(u)))});let o=ga();return s.forEach((a,l)=>{const u=i.get(a);u!==void 0&&Pa(u.mutation,l,un.empty(),it.now()),sd(n,l)&&(o=o.insert(a,l))}),o})}}/**
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
 */class YL{constructor(e){this.serializer=e,this.Zn=new Map,this.Xn=new Map}getBundleMetadata(e,n){return b.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var r;return this.Zn.set(n.id,{id:(r=n).id,version:r.version,createTime:Jn(r.createTime)}),b.resolve()}getNamedQuery(e,n){return b.resolve(this.Xn.get(n))}saveNamedQuery(e,n){return this.Xn.set(n.name,function(r){return{name:r.name,query:WL(r.bundledQuery),readTime:Jn(r.readTime)}}(n)),b.resolve()}}/**
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
 */class XL{constructor(){this.overlays=new ot(G.comparator),this.ts=new Map}getOverlay(e,n){return b.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Fi();return b.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.re(e,n,s)}),b.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.ts.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.ts.delete(r)),b.resolve()}getOverlaysForCollection(e,n,r){const i=Fi(),s=n.length+1,o=new G(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return b.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new ot((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=Fi(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=Fi(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return b.resolve(a)}re(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.ts.get(i.largestBatchId).delete(r.key);this.ts.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new CL(n,r));let s=this.ts.get(n);s===void 0&&(s=fe(),this.ts.set(n,s)),this.ts.set(n,s.add(r.key))}}/**
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
 */class yy{constructor(){this.es=new st(ct.ns),this.ss=new st(ct.rs)}isEmpty(){return this.es.isEmpty()}addReference(e,n){const r=new ct(e,n);this.es=this.es.add(r),this.ss=this.ss.add(r)}os(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.us(new ct(e,n))}cs(e,n){e.forEach(r=>this.removeReference(r,n))}hs(e){const n=new G(new Oe([])),r=new ct(n,e),i=new ct(n,e+1),s=[];return this.ss.forEachInRange([r,i],o=>{this.us(o),s.push(o.key)}),s}ls(){this.es.forEach(e=>this.us(e))}us(e){this.es=this.es.delete(e),this.ss=this.ss.delete(e)}fs(e){const n=new G(new Oe([])),r=new ct(n,e),i=new ct(n,e+1);let s=fe();return this.ss.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new ct(e,0),r=this.es.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ct{constructor(e,n){this.key=e,this.ds=n}static ns(e,n){return G.comparator(e.key,n.key)||Te(e.ds,n.ds)}static rs(e,n){return Te(e.ds,n.ds)||G.comparator(e.key,n.key)}}/**
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
 */class JL{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this._s=new st(ct.ns)}checkEmpty(e){return b.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new EL(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this._s=this._s.add(new ct(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return b.resolve(o)}lookupMutationBatch(e,n){return b.resolve(this.gs(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ys(r),s=i<0?0:i;return b.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return b.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ct(n,0),i=new ct(n,Number.POSITIVE_INFINITY),s=[];return this._s.forEachInRange([r,i],o=>{const a=this.gs(o.ds);s.push(a)}),b.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new st(Te);return n.forEach(i=>{const s=new ct(i,0),o=new ct(i,Number.POSITIVE_INFINITY);this._s.forEachInRange([s,o],a=>{r=r.add(a.ds)})}),b.resolve(this.ps(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;G.isDocumentKey(s)||(s=s.child(""));const o=new ct(new G(s),0);let a=new st(Te);return this._s.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.ds)),!0)},o),b.resolve(this.ps(a))}ps(e){const n=[];return e.forEach(r=>{const i=this.gs(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Le(this.Is(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this._s;return b.forEach(n.mutations,i=>{const s=new ct(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this._s=r})}En(e){}containsKey(e,n){const r=new ct(n,0),i=this._s.firstAfterOrEqual(r);return b.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,b.resolve()}Is(e,n){return this.ys(e)}ys(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}gs(e){const n=this.ys(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class ZL{constructor(e){this.Ts=e,this.docs=new ot(G.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Ts(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return b.resolve(r?r.document.mutableCopy():Pt.newInvalidDocument(n))}getEntries(e,n){let r=kr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Pt.newInvalidDocument(i))}),b.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=kr();const o=n.path,a=new G(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||BM(zM(c),r)<=0||(i.has(c.key)||sd(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return b.resolve(s)}getAllFromCollectionGroup(e,n,r,i){te()}Es(e,n){return b.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new eF(this)}getSize(e){return b.resolve(this.size)}}class eF extends GL{constructor(e){super(),this.Jn=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Jn.addEntry(e,i)):this.Jn.removeEntry(r)}),b.waitFor(n)}getFromCache(e,n){return this.Jn.getEntry(e,n)}getAllFromCache(e,n){return this.Jn.getEntries(e,n)}}/**
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
 */class tF{constructor(e){this.persistence=e,this.As=new Mo(n=>cy(n),hy),this.lastRemoteSnapshotVersion=se.min(),this.highestTargetId=0,this.Rs=0,this.vs=new yy,this.targetCount=0,this.bs=go.vn()}forEachTarget(e,n){return this.As.forEach((r,i)=>n(i)),b.resolve()}getLastRemoteSnapshotVersion(e){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return b.resolve(this.Rs)}allocateTargetId(e){return this.highestTargetId=this.bs.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Rs&&(this.Rs=n),b.resolve()}Sn(e){this.As.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.bs=new go(n),this.highestTargetId=n),e.sequenceNumber>this.Rs&&(this.Rs=e.sequenceNumber)}addTargetData(e,n){return this.Sn(n),this.targetCount+=1,b.resolve()}updateTargetData(e,n){return this.Sn(n),b.resolve()}removeTargetData(e,n){return this.As.delete(n.target),this.vs.hs(n.targetId),this.targetCount-=1,b.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.As.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.As.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),b.waitFor(s).next(()=>i)}getTargetCount(e){return b.resolve(this.targetCount)}getTargetData(e,n){const r=this.As.get(n)||null;return b.resolve(r)}addMatchingKeys(e,n,r){return this.vs.os(n,r),b.resolve()}removeMatchingKeys(e,n,r){this.vs.cs(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),b.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.vs.hs(n),b.resolve()}getMatchingKeysForTargetId(e,n){const r=this.vs.fs(n);return b.resolve(r)}containsKey(e,n){return b.resolve(this.vs.containsKey(n))}}/**
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
 */class nF{constructor(e,n){this.Ps={},this.overlays={},this.Vs=new ly(0),this.Ss=!1,this.Ss=!0,this.referenceDelegate=e(this),this.Ds=new tF(this),this.indexManager=new HL,this.remoteDocumentCache=function(r){return new ZL(r)}(r=>this.referenceDelegate.Cs(r)),this.serializer=new jL(n),this.xs=new YL(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ss=!1,Promise.resolve()}get started(){return this.Ss}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new XL,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Ps[e.toKey()];return r||(r=new JL(n,this.referenceDelegate),this.Ps[e.toKey()]=r),r}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.xs}runTransaction(e,n,r){j("MemoryPersistence","Starting transaction:",e);const i=new rF(this.Vs.next());return this.referenceDelegate.Ns(),r(i).next(s=>this.referenceDelegate.ks(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Os(e,n){return b.or(Object.values(this.Ps).map(r=>()=>r.containsKey(e,n)))}}class rF extends WM{constructor(e){super(),this.currentSequenceNumber=e}}class vy{constructor(e){this.persistence=e,this.$s=new yy,this.Ms=null}static Fs(e){return new vy(e)}get Bs(){if(this.Ms)return this.Ms;throw te()}addReference(e,n,r){return this.$s.addReference(r,n),this.Bs.delete(r.toString()),b.resolve()}removeReference(e,n,r){return this.$s.removeReference(r,n),this.Bs.add(r.toString()),b.resolve()}markPotentiallyOrphaned(e,n){return this.Bs.add(n.toString()),b.resolve()}removeTarget(e,n){this.$s.hs(n.targetId).forEach(i=>this.Bs.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Bs.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ns(){this.Ms=new Set}ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.Bs,r=>{const i=G.fromPath(r);return this.Ls(e,i).next(s=>{s||n.removeEntry(i,se.min())})}).next(()=>(this.Ms=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ls(e,n).next(r=>{r?this.Bs.delete(n.toString()):this.Bs.add(n.toString())})}Cs(e){return 0}Ls(e,n){return b.or([()=>b.resolve(this.$s.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Os(e,n)])}}/**
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
 */class _y{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Vi=r,this.Si=i}static Di(e,n){let r=fe(),i=fe();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new _y(e,n.fromCache,r,i)}}/**
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
 */class iF{constructor(){this.Ci=!1}initialize(e,n){this.xi=e,this.indexManager=n,this.Ci=!0}getDocumentsMatchingQuery(e,n,r,i){return this.Ni(e,n).next(s=>s||this.ki(e,n,i,r)).next(s=>s||this.Oi(e,n))}Ni(e,n){if(j0(n))return b.resolve(null);let r=Tr(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=sm(n,null,"F"),r=Tr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=fe(...s);return this.xi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.$i(n,a);return this.Mi(n,u,o,l.readTime)?this.Ni(e,sm(n,null,"F")):this.Fi(e,u,n,l)}))})))}ki(e,n,r,i){return j0(n)||i.isEqual(se.min())?this.Oi(e,n):this.xi.getDocuments(e,r).next(s=>{const o=this.$i(n,s);return this.Mi(n,o,r,i)?this.Oi(e,n):(b0()<=Ee.DEBUG&&j("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),om(n)),this.Fi(e,o,n,VM(i,-1)))})}$i(e,n){let r=new st(OI(e));return n.forEach((i,s)=>{sd(e,s)&&(r=r.add(s))}),r}Mi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Oi(e,n){return b0()<=Ee.DEBUG&&j("QueryEngine","Using full collection scan to execute query:",om(n)),this.xi.getDocumentsMatchingQuery(e,n,di.min())}Fi(e,n,r,i){return this.xi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class sF{constructor(e,n,r,i){this.persistence=e,this.Bi=n,this.serializer=i,this.Li=new ot(Te),this.qi=new Mo(s=>cy(s),hy),this.Ui=new Map,this.Ki=e.getRemoteDocumentCache(),this.Ds=e.getTargetCache(),this.xs=e.getBundleCache(),this.Gi(r)}Gi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new QL(this.Ki,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ki.setIndexManager(this.indexManager),this.Bi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Li))}}function oF(t,e,n,r){return new sF(t,e,n,r)}async function nT(t,e){const n=oe(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Gi(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=fe();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({Qi:u,removedBatchIds:o,addedBatchIds:a}))})})}function aF(t,e){const n=oe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Ki.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,h=c.keys();let d=b.resolve();return h.forEach(m=>{d=d.next(()=>u.getEntry(a,m)).next(v=>{const _=l.docVersions.get(m);Le(_!==null),v.version.compareTo(_)<0&&(c.applyToRemoteDocument(v,l),v.isValidDocument()&&(v.setReadTime(l.commitVersion),u.addEntry(v)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=fe();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function rT(t){const e=oe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ds.getLastRemoteSnapshotVersion(n))}function lF(t,e){const n=oe(t),r=e.snapshotVersion;let i=n.Li;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Ki.newChangeBuffer({trackRemovals:!0});i=n.Li;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.Ds.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Ds.addMatchingKeys(s,c.addedDocuments,h)));let m=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(h)?m=m.withResumeToken(Vt.EMPTY_BYTE_STRING,se.min()).withLastLimboFreeSnapshotVersion(se.min()):c.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(c.resumeToken,r)),i=i.insert(h,m),function(v,_,g){return v.resumeToken.approximateByteSize()===0||_.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:g.addedDocuments.size+g.modifiedDocuments.size+g.removedDocuments.size>0}(d,m,c)&&a.push(n.Ds.updateTargetData(s,m))});let l=kr(),u=fe();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(uF(s,o,e.documentUpdates).next(c=>{l=c.zi,u=c.ji})),!r.isEqual(se.min())){const c=n.Ds.getLastRemoteSnapshotVersion(s).next(h=>n.Ds.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return b.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.Li=i,s))}function uF(t,e,n){let r=fe(),i=fe();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=kr();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(se.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):j("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{zi:o,ji:i}})}function cF(t,e){const n=oe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function hF(t,e){const n=oe(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ds.getTargetData(r,e).next(s=>s?(i=s,b.resolve(i)):n.Ds.allocateTargetId(r).next(o=>(i=new Wi(e,o,0,r.currentSequenceNumber),n.Ds.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Li.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Li=n.Li.insert(r.targetId,r),n.qi.set(e,r.targetId)),r})}async function cm(t,e,n){const r=oe(t),i=r.Li.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Yl(o))throw o;j("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Li=r.Li.remove(e),r.qi.delete(i.target)}function J0(t,e,n){const r=oe(t);let i=se.min(),s=fe();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=oe(a),h=c.qi.get(u);return h!==void 0?b.resolve(c.Li.get(h)):c.Ds.getTargetData(l,u)}(r,o,Tr(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Ds.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Bi.getDocumentsMatchingQuery(o,e,n?i:se.min(),n?s:fe())).next(a=>(dF(r,aL(e),a),{documents:a,Wi:s})))}function dF(t,e,n){let r=t.Ui.get(e)||se.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Ui.set(e,r)}class Z0{constructor(){this.activeTargetIds=$I()}tr(e){this.activeTargetIds=this.activeTargetIds.add(e)}er(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Xi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class fF{constructor(){this.Br=new Z0,this.Lr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Br.tr(e),this.Lr[e]||"not-current"}updateQueryState(e,n,r){this.Lr[e]=n}removeLocalQueryTarget(e){this.Br.er(e)}isLocalQueryTarget(e){return this.Br.activeTargetIds.has(e)}clearQueryState(e){delete this.Lr[e]}getAllActiveQueryTargets(){return this.Br.activeTargetIds}isActiveQueryTarget(e){return this.Br.activeTargetIds.has(e)}start(){return this.Br=new Z0,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class pF{qr(e){}shutdown(){}}/**
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
 */class ew{constructor(){this.Ur=()=>this.Kr(),this.Gr=()=>this.Qr(),this.zr=[],this.jr()}qr(e){this.zr.push(e)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Gr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Gr)}Kr(){j("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.zr)e(0)}Qr(){j("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.zr)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Lu=null;function Tf(){return Lu===null?Lu=268435456+Math.round(2147483648*Math.random()):Lu++,"0x"+Lu.toString(16)}/**
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
 */const mF={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class gF{constructor(e){this.Wr=e.Wr,this.Hr=e.Hr}Jr(e){this.Yr=e}Zr(e){this.Xr=e}onMessage(e){this.eo=e}close(){this.Hr()}send(e){this.Wr(e)}no(){this.Yr()}so(e){this.Xr(e)}io(e){this.eo(e)}}/**
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
 */const At="WebChannelConnection";class yF extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.ro=n+"://"+e.host,this.oo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get uo(){return!1}co(e,n,r,i,s){const o=Tf(),a=this.ao(e,n);j("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const l={};return this.ho(l,i,s),this.lo(e,a,l,r).then(u=>(j("RestConnection",`Received RPC '${e}' ${o}: `,u),u),u=>{throw Qc("RestConnection",`RPC '${e}' ${o} failed with error: `,u,"url: ",a,"request:",r),u})}fo(e,n,r,i,s,o){return this.co(e,n,r,i,s)}ho(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Oo,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}ao(e,n){const r=mF[e];return`${this.ro}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,n,r,i){const s=Tf();return new Promise((o,a)=>{const l=new DM;l.setWithCredentials(!0),l.listenOnce(NM.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Sf.NO_ERROR:const c=l.getResponseJson();j(At,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case Sf.TIMEOUT:j(At,`RPC '${e}' ${s} timed out`),a(new F(N.DEADLINE_EXCEEDED,"Request time out"));break;case Sf.HTTP_ERROR:const h=l.getStatus();if(j(At,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const m=d==null?void 0:d.error;if(m&&m.status&&m.message){const v=function(_){const g=_.toLowerCase().replace(/_/g,"-");return Object.values(N).indexOf(g)>=0?g:N.UNKNOWN}(m.status);a(new F(v,m.message))}else a(new F(N.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new F(N.UNAVAILABLE,"Connection failed."));break;default:te()}}finally{j(At,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);j(At,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}wo(e,n,r){const i=Tf(),s=[this.ro,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=TM(),a=kM(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(l.xmlHttpFactory=new AM({})),this.ho(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const u=s.join("");j(At,`Creating RPC '${e}' stream ${i}: ${u}`,l);const c=o.createWebChannel(u,l);let h=!1,d=!1;const m=new gF({Wr:_=>{d?j(At,`Not sending because RPC '${e}' stream ${i} is closed:`,_):(h||(j(At,`Opening RPC '${e}' stream ${i} transport.`),c.open(),h=!0),j(At,`RPC '${e}' stream ${i} sending:`,_),c.send(_))},Hr:()=>c.close()}),v=(_,g,p)=>{_.listen(g,f=>{try{p(f)}catch(y){setTimeout(()=>{throw y},0)}})};return v(c,Pu.EventType.OPEN,()=>{d||j(At,`RPC '${e}' stream ${i} transport opened.`)}),v(c,Pu.EventType.CLOSE,()=>{d||(d=!0,j(At,`RPC '${e}' stream ${i} transport closed`),m.so())}),v(c,Pu.EventType.ERROR,_=>{d||(d=!0,Qc(At,`RPC '${e}' stream ${i} transport errored:`,_),m.so(new F(N.UNAVAILABLE,"The operation could not be completed")))}),v(c,Pu.EventType.MESSAGE,_=>{var g;if(!d){const p=_.data[0];Le(!!p);const f=p,y=f.error||((g=f[0])===null||g===void 0?void 0:g.error);if(y){j(At,`RPC '${e}' stream ${i} received error:`,y);const E=y.status;let T=function(I){const R=Ke[I];if(R!==void 0)return GI(R)}(E),D=y.message;T===void 0&&(T=N.INTERNAL,D="Unknown error status: "+E+" with message "+y.message),d=!0,m.so(new F(T,D)),c.close()}else j(At,`RPC '${e}' stream ${i} received:`,p),m.io(p)}}),v(a,RM.STAT_EVENT,_=>{_.stat===x0.PROXY?j(At,`RPC '${e}' stream ${i} detected buffering proxy`):_.stat===x0.NOPROXY&&j(At,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{m.no()},0),m}}function kf(){return typeof document<"u"?document:null}/**
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
 */function ud(t){return new AL(t,!0)}/**
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
 */class iT{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Ws=e,this.timerId=n,this._o=r,this.mo=i,this.yo=s,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const n=Math.floor(this.po+this.Ro()),r=Math.max(0,Date.now()-this.To),i=Math.max(0,n-r);i>0&&j("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.po} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,i,()=>(this.To=Date.now(),e())),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
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
 */class sT{constructor(e,n,r,i,s,o,a,l){this.Ws=e,this.bo=r,this.Po=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Vo=0,this.So=null,this.Do=null,this.stream=null,this.Co=new iT(e,n)}xo(){return this.state===1||this.state===5||this.No()}No(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.ko()}async stop(){this.xo()&&await this.close(0)}Oo(){this.state=0,this.Co.reset()}$o(){this.No()&&this.So===null&&(this.So=this.Ws.enqueueAfterDelay(this.bo,6e4,()=>this.Mo()))}Fo(e){this.Bo(),this.stream.send(e)}async Mo(){if(this.No())return this.close(0)}Bo(){this.So&&(this.So.cancel(),this.So=null)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}async close(e,n){this.Bo(),this.Lo(),this.Co.cancel(),this.Vo++,e!==4?this.Co.reset():n&&n.code===N.RESOURCE_EXHAUSTED?(Ir(n.toString()),Ir("Using maximum backoff delay to prevent overloading the backend."),this.Co.Eo()):n&&n.code===N.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Uo(this.Vo),n=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Vo===n&&this.Ko(r,i)},r=>{e(()=>{const i=new F(N.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Go(i)})})}Ko(e,n){const r=this.Uo(this.Vo);this.stream=this.Qo(e,n),this.stream.Jr(()=>{r(()=>(this.state=2,this.Do=this.Ws.enqueueAfterDelay(this.Po,1e4,()=>(this.No()&&(this.state=3),Promise.resolve())),this.listener.Jr()))}),this.stream.Zr(i=>{r(()=>this.Go(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}ko(){this.state=5,this.Co.Ao(async()=>{this.state=0,this.start()})}Go(e){return j("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Uo(e){return n=>{this.Ws.enqueueAndForget(()=>this.Vo===e?n():(j("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class vF extends sT{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}Qo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.Co.reset();const n=PL(this.serializer,e),r=function(i){if(!("targetChange"in i))return se.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?se.min():s.readTime?Jn(s.readTime):se.min()}(e);return this.listener.zo(n,r)}jo(e){const n={};n.database=um(this.serializer),n.addTarget=function(i,s){let o;const a=s.target;return o=rm(a)?{documents:ML(i,a)}:{query:LL(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=YI(i,s.resumeToken):s.snapshotVersion.compareTo(se.min())>0&&(o.readTime=eh(i,s.snapshotVersion.toTimestamp())),o}(this.serializer,e);const r=$L(this.serializer,e);r&&(n.labels=r),this.Fo(n)}Wo(e){const n={};n.database=um(this.serializer),n.removeTarget=e,this.Fo(n)}}class _F extends sT{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.Ho=!1}get Jo(){return this.Ho}start(){this.Ho=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Ho&&this.Yo([])}Qo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(Le(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Ho){this.Co.reset();const n=OL(e.writeResults,e.commitTime),r=Jn(e.commitTime);return this.listener.Zo(r,n)}return Le(!e.writeResults||e.writeResults.length===0),this.Ho=!0,this.listener.Xo()}tu(){const e={};e.database=um(this.serializer),this.Fo(e)}Yo(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>bL(this.serializer,r))};this.Fo(n)}}/**
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
 */class wF extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.eu=!1}nu(){if(this.eu)throw new F(N.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,n,r){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.co(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new F(N.UNKNOWN,i.toString())})}fo(e,n,r,i){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.fo(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new F(N.UNKNOWN,s.toString())})}terminate(){this.eu=!0}}class EF{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.su=0,this.iu=null,this.ru=!0}ou(){this.su===0&&(this.uu("Unknown"),this.iu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.iu=null,this.cu("Backend didn't respond within 10 seconds."),this.uu("Offline"),Promise.resolve())))}au(e){this.state==="Online"?this.uu("Unknown"):(this.su++,this.su>=1&&(this.hu(),this.cu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.uu("Offline")))}set(e){this.hu(),this.su=0,e==="Online"&&(this.ru=!1),this.uu(e)}uu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}cu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ru?(Ir(n),this.ru=!1):j("OnlineStateTracker",n)}hu(){this.iu!==null&&(this.iu.cancel(),this.iu=null)}}/**
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
 */class CF{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.lu=[],this.fu=new Map,this.du=new Set,this.wu=[],this._u=s,this._u.qr(o=>{r.enqueueAndForget(async()=>{ps(this)&&(j("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=oe(a);l.du.add(4),await eu(l),l.mu.set("Unknown"),l.du.delete(4),await cd(l)}(this))})}),this.mu=new EF(r,i)}}async function cd(t){if(ps(t))for(const e of t.wu)await e(!0)}async function eu(t){for(const e of t.wu)await e(!1)}function oT(t,e){const n=oe(t);n.fu.has(e.targetId)||(n.fu.set(e.targetId,e),Cy(n)?Ey(n):Lo(n).No()&&wy(n,e))}function aT(t,e){const n=oe(t),r=Lo(n);n.fu.delete(e),r.No()&&lT(n,e),n.fu.size===0&&(r.No()?r.$o():ps(n)&&n.mu.set("Unknown"))}function wy(t,e){t.gu.Ot(e.targetId),Lo(t).jo(e)}function lT(t,e){t.gu.Ot(e),Lo(t).Wo(e)}function Ey(t){t.gu=new TL({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.fu.get(e)||null}),Lo(t).start(),t.mu.ou()}function Cy(t){return ps(t)&&!Lo(t).xo()&&t.fu.size>0}function ps(t){return oe(t).du.size===0}function uT(t){t.gu=void 0}async function SF(t){t.fu.forEach((e,n)=>{wy(t,e)})}async function IF(t,e){uT(t),Cy(t)?(t.mu.au(e),Ey(t)):t.mu.set("Unknown")}async function TF(t,e,n){if(t.mu.set("Online"),e instanceof QI&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.fu.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.fu.delete(o),r.gu.removeTarget(o))}(t,e)}catch(r){j("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await th(t,r)}else if(e instanceof ic?t.gu.Kt(e):e instanceof KI?t.gu.Jt(e):t.gu.zt(e),!n.isEqual(se.min()))try{const r=await rT(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.gu.Xt(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.fu.get(l);u&&i.fu.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const l=i.fu.get(a);if(!l)return;i.fu.set(a,l.withResumeToken(Vt.EMPTY_BYTE_STRING,l.snapshotVersion)),lT(i,a);const u=new Wi(l.target,a,1,l.sequenceNumber);wy(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){j("RemoteStore","Failed to raise snapshot:",r),await th(t,r)}}async function th(t,e,n){if(!Yl(e))throw e;t.du.add(1),await eu(t),t.mu.set("Offline"),n||(n=()=>rT(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{j("RemoteStore","Retrying IndexedDB access"),await n(),t.du.delete(1),await cd(t)})}function cT(t,e){return e().catch(n=>th(t,n,e))}async function hd(t){const e=oe(t),n=pi(e);let r=e.lu.length>0?e.lu[e.lu.length-1].batchId:-1;for(;kF(e);)try{const i=await cF(e.localStore,r);if(i===null){e.lu.length===0&&n.$o();break}r=i.batchId,NF(e,i)}catch(i){await th(e,i)}hT(e)&&dT(e)}function kF(t){return ps(t)&&t.lu.length<10}function NF(t,e){t.lu.push(e);const n=pi(t);n.No()&&n.Jo&&n.Yo(e.mutations)}function hT(t){return ps(t)&&!pi(t).xo()&&t.lu.length>0}function dT(t){pi(t).start()}async function RF(t){pi(t).tu()}async function AF(t){const e=pi(t);for(const n of t.lu)e.Yo(n.mutations)}async function DF(t,e,n){const r=t.lu.shift(),i=py.from(r,e,n);await cT(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await hd(t)}async function xF(t,e){e&&pi(t).Jo&&await async function(n,r){if(i=r.code,IL(i)&&i!==N.ABORTED){const s=n.lu.shift();pi(n).Oo(),await cT(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await hd(n)}var i}(t,e),hT(t)&&dT(t)}async function tw(t,e){const n=oe(t);n.asyncQueue.verifyOperationInProgress(),j("RemoteStore","RemoteStore received new credentials");const r=ps(n);n.du.add(3),await eu(n),r&&n.mu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.du.delete(3),await cd(n)}async function PF(t,e){const n=oe(t);e?(n.du.delete(2),await cd(n)):e||(n.du.add(2),await eu(n),n.mu.set("Unknown"))}function Lo(t){return t.yu||(t.yu=function(e,n,r){const i=oe(e);return i.nu(),new vF(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{Jr:SF.bind(null,t),Zr:IF.bind(null,t),zo:TF.bind(null,t)}),t.wu.push(async e=>{e?(t.yu.Oo(),Cy(t)?Ey(t):t.mu.set("Unknown")):(await t.yu.stop(),uT(t))})),t.yu}function pi(t){return t.pu||(t.pu=function(e,n,r){const i=oe(e);return i.nu(),new _F(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{Jr:RF.bind(null,t),Zr:xF.bind(null,t),Xo:AF.bind(null,t),Zo:DF.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Oo(),await hd(t)):(await t.pu.stop(),t.lu.length>0&&(j("RemoteStore",`Stopping write stream with ${t.lu.length} pending writes`),t.lu=[]))})),t.pu}/**
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
 */class Sy{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new ii,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Sy(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new F(N.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Iy(t,e){if(Ir("AsyncQueue",`${e}: ${t}`),Yl(t))return new F(N.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Xs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||G.comparator(n.key,r.key):(n,r)=>G.comparator(n.key,r.key),this.keyedMap=ga(),this.sortedSet=new ot(this.comparator)}static emptySet(e){return new Xs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Xs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Xs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class nw{constructor(){this.Iu=new ot(G.comparator)}track(e){const n=e.doc.key,r=this.Iu.get(n);r?e.type!==0&&r.type===3?this.Iu=this.Iu.insert(n,e):e.type===3&&r.type!==1?this.Iu=this.Iu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Iu=this.Iu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Iu=this.Iu.remove(n):e.type===1&&r.type===2?this.Iu=this.Iu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):te():this.Iu=this.Iu.insert(n,e)}Tu(){const e=[];return this.Iu.inorderTraversal((n,r)=>{e.push(r)}),e}}class yo{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new yo(e,n,Xs.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&id(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class bF{constructor(){this.Eu=void 0,this.listeners=[]}}class OF{constructor(){this.queries=new Mo(e=>bI(e),id),this.onlineState="Unknown",this.Au=new Set}}async function MF(t,e){const n=oe(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new bF),i)try{s.Eu=await n.onListen(r)}catch(o){const a=Iy(o,`Initialization of query '${om(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.Ru(n.onlineState),s.Eu&&e.vu(s.Eu)&&Ty(n)}async function LF(t,e){const n=oe(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function FF(t,e){const n=oe(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.vu(i)&&(r=!0);o.Eu=i}}r&&Ty(n)}function $F(t,e,n){const r=oe(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Ty(t){t.Au.forEach(e=>{e.next()})}class UF{constructor(e,n,r){this.query=e,this.bu=n,this.Pu=!1,this.Vu=null,this.onlineState="Unknown",this.options=r||{}}vu(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new yo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Pu?this.Su(e)&&(this.bu.next(e),n=!0):this.Du(e,this.onlineState)&&(this.Cu(e),n=!0),this.Vu=e,n}onError(e){this.bu.error(e)}Ru(e){this.onlineState=e;let n=!1;return this.Vu&&!this.Pu&&this.Du(this.Vu,e)&&(this.Cu(this.Vu),n=!0),n}Du(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.xu||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Su(e){if(e.docChanges.length>0)return!0;const n=this.Vu&&this.Vu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Cu(e){e=yo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Pu=!0,this.bu.next(e)}}/**
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
 */class fT{constructor(e){this.key=e}}class pT{constructor(e){this.key=e}}class VF{constructor(e,n){this.query=e,this.Lu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Uu=fe(),this.mutatedKeys=fe(),this.Ku=OI(e),this.Gu=new Xs(this.Ku)}get Qu(){return this.Lu}zu(e,n){const r=n?n.ju:new nw,i=n?n.Gu:this.Gu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),m=sd(this.query,h)?h:null,v=!!d&&this.mutatedKeys.has(d.key),_=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let g=!1;d&&m?d.data.isEqual(m.data)?v!==_&&(r.track({type:3,doc:m}),g=!0):this.Wu(d,m)||(r.track({type:2,doc:m}),g=!0,(l&&this.Ku(m,l)>0||u&&this.Ku(m,u)<0)&&(a=!0)):!d&&m?(r.track({type:0,doc:m}),g=!0):d&&!m&&(r.track({type:1,doc:d}),g=!0,(l||u)&&(a=!0)),g&&(m?(o=o.add(m),s=_?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{Gu:o,ju:r,Mi:a,mutatedKeys:s}}Wu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;const s=e.ju.Tu();s.sort((u,c)=>function(h,d){const m=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return te()}};return m(h)-m(d)}(u.type,c.type)||this.Ku(u.doc,c.doc)),this.Hu(r);const o=n?this.Ju():[],a=this.Uu.size===0&&this.current?1:0,l=a!==this.qu;return this.qu=a,s.length!==0||l?{snapshot:new yo(this.query,e.Gu,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Yu:o}:{Yu:o}}Ru(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Gu:this.Gu,ju:new nw,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{Yu:[]}}Zu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach(n=>this.Lu=this.Lu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Lu=this.Lu.delete(n)),this.current=e.current)}Ju(){if(!this.current)return[];const e=this.Uu;this.Uu=fe(),this.Gu.forEach(r=>{this.Zu(r.key)&&(this.Uu=this.Uu.add(r.key))});const n=[];return e.forEach(r=>{this.Uu.has(r)||n.push(new pT(r))}),this.Uu.forEach(r=>{e.has(r)||n.push(new fT(r))}),n}Xu(e){this.Lu=e.Wi,this.Uu=fe();const n=this.zu(e.documents);return this.applyChanges(n,!0)}tc(){return yo.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class zF{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class BF{constructor(e){this.key=e,this.ec=!1}}class jF{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.nc={},this.sc=new Mo(a=>bI(a),id),this.ic=new Map,this.rc=new Set,this.oc=new ot(G.comparator),this.uc=new Map,this.cc=new yy,this.ac={},this.hc=new Map,this.lc=go.bn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return this.fc===!0}}async function WF(t,e){const n=e2(t);let r,i;const s=n.sc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.tc();else{const o=await hF(n.localStore,Tr(e));n.isPrimaryClient&&oT(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await HF(n,e,r,a==="current",o.resumeToken)}return i}async function HF(t,e,n,r,i){t.dc=(h,d,m)=>async function(v,_,g,p){let f=_.view.zu(g);f.Mi&&(f=await J0(v.localStore,_.query,!1).then(({documents:T})=>_.view.zu(T,f)));const y=p&&p.targetChanges.get(_.targetId),E=_.view.applyChanges(f,v.isPrimaryClient,y);return iw(v,_.targetId,E.Yu),E.snapshot}(t,h,d,m);const s=await J0(t.localStore,e,!0),o=new VF(e,s.Wi),a=o.zu(s.documents),l=Zl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);iw(t,n,u.Yu);const c=new zF(e,n,o);return t.sc.set(e,c),t.ic.has(n)?t.ic.get(n).push(e):t.ic.set(n,[e]),u.snapshot}async function qF(t,e){const n=oe(t),r=n.sc.get(e),i=n.ic.get(r.targetId);if(i.length>1)return n.ic.set(r.targetId,i.filter(s=>!id(s,e))),void n.sc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await cm(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),aT(n.remoteStore,r.targetId),hm(n,r.targetId)}).catch(Ql)):(hm(n,r.targetId),await cm(n.localStore,r.targetId,!0))}async function GF(t,e,n){const r=t2(t);try{const i=await function(s,o){const a=oe(s),l=it.now(),u=o.reduce((d,m)=>d.add(m.key),fe());let c,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let m=kr(),v=fe();return a.Ki.getEntries(d,u).next(_=>{m=_,m.forEach((g,p)=>{p.isValidDocument()||(v=v.add(g))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,m)).next(_=>{c=_;const g=[];for(const p of o){const f=_L(p,c.get(p.key).overlayedDocument);f!=null&&g.push(new Si(p.key,f,SI(f.value.mapValue),Ln.exists(!0)))}return a.mutationQueue.addMutationBatch(d,l,g,o)}).next(_=>{h=_;const g=_.applyToLocalDocumentSet(c,v);return a.documentOverlayCache.saveOverlays(d,_.batchId,g)})}).then(()=>({batchId:h.batchId,changes:LI(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.ac[s.currentUser.toKey()];l||(l=new ot(Te)),l=l.insert(o,a),s.ac[s.currentUser.toKey()]=l}(r,i.batchId,n),await tu(r,i.changes),await hd(r.remoteStore)}catch(i){const s=Iy(i,"Failed to persist write");n.reject(s)}}async function mT(t,e){const n=oe(t);try{const r=await lF(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.uc.get(s);o&&(Le(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ec=!0:i.modifiedDocuments.size>0?Le(o.ec):i.removedDocuments.size>0&&(Le(o.ec),o.ec=!1))}),await tu(n,r,e)}catch(r){await Ql(r)}}function rw(t,e,n){const r=oe(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.sc.forEach((s,o)=>{const a=o.view.Ru(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=oe(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const h of c.listeners)h.Ru(o)&&(l=!0)}),l&&Ty(a)}(r.eventManager,e),i.length&&r.nc.zo(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function KF(t,e,n){const r=oe(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.uc.get(e),s=i&&i.key;if(s){let o=new ot(G.comparator);o=o.insert(s,Pt.newNoDocument(s,se.min()));const a=fe().add(s),l=new ld(se.min(),new Map,new st(Te),o,a);await mT(r,l),r.oc=r.oc.remove(s),r.uc.delete(e),ky(r)}else await cm(r.localStore,e,!1).then(()=>hm(r,e,n)).catch(Ql)}async function QF(t,e){const n=oe(t),r=e.batch.batchId;try{const i=await aF(n.localStore,e);yT(n,r,null),gT(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await tu(n,i)}catch(i){await Ql(i)}}async function YF(t,e,n){const r=oe(t);try{const i=await function(s,o){const a=oe(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.mutationQueue.lookupMutationBatch(l,o).next(c=>(Le(c!==null),u=c.keys(),a.mutationQueue.removeMutationBatch(l,c))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>a.localDocuments.getDocuments(l,u))})}(r.localStore,e);yT(r,e,n),gT(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await tu(r,i)}catch(i){await Ql(i)}}function gT(t,e){(t.hc.get(e)||[]).forEach(n=>{n.resolve()}),t.hc.delete(e)}function yT(t,e,n){const r=oe(t);let i=r.ac[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.ac[r.currentUser.toKey()]=i}}function hm(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ic.get(e))t.sc.delete(r),n&&t.nc.wc(r,n);t.ic.delete(e),t.isPrimaryClient&&t.cc.hs(e).forEach(r=>{t.cc.containsKey(r)||vT(t,r)})}function vT(t,e){t.rc.delete(e.path.canonicalString());const n=t.oc.get(e);n!==null&&(aT(t.remoteStore,n),t.oc=t.oc.remove(e),t.uc.delete(n),ky(t))}function iw(t,e,n){for(const r of n)r instanceof fT?(t.cc.addReference(r.key,e),XF(t,r)):r instanceof pT?(j("SyncEngine","Document no longer in limbo: "+r.key),t.cc.removeReference(r.key,e),t.cc.containsKey(r.key)||vT(t,r.key)):te()}function XF(t,e){const n=e.key,r=n.path.canonicalString();t.oc.get(n)||t.rc.has(r)||(j("SyncEngine","New document in limbo: "+n),t.rc.add(r),ky(t))}function ky(t){for(;t.rc.size>0&&t.oc.size<t.maxConcurrentLimboResolutions;){const e=t.rc.values().next().value;t.rc.delete(e);const n=new G(Oe.fromString(e)),r=t.lc.next();t.uc.set(r,new BF(n)),t.oc=t.oc.insert(n,r),oT(t.remoteStore,new Wi(Tr(DI(n.path)),r,2,ly.ct))}}async function tu(t,e,n){const r=oe(t),i=[],s=[],o=[];r.sc.isEmpty()||(r.sc.forEach((a,l)=>{o.push(r.dc(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=_y.Di(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.nc.zo(i),await async function(a,l){const u=oe(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>b.forEach(l,h=>b.forEach(h.Vi,d=>u.persistence.referenceDelegate.addReference(c,h.targetId,d)).next(()=>b.forEach(h.Si,d=>u.persistence.referenceDelegate.removeReference(c,h.targetId,d)))))}catch(c){if(!Yl(c))throw c;j("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const h=c.targetId;if(!c.fromCache){const d=u.Li.get(h),m=d.snapshotVersion,v=d.withLastLimboFreeSnapshotVersion(m);u.Li=u.Li.insert(h,v)}}}(r.localStore,s))}async function JF(t,e){const n=oe(t);if(!n.currentUser.isEqual(e)){j("SyncEngine","User change. New user:",e.toKey());const r=await nT(n.localStore,e);n.currentUser=e,function(i,s){i.hc.forEach(o=>{o.forEach(a=>{a.reject(new F(N.CANCELLED,s))})}),i.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await tu(n,r.Qi)}}function ZF(t,e){const n=oe(t),r=n.uc.get(e);if(r&&r.ec)return fe().add(r.key);{let i=fe();const s=n.ic.get(e);if(!s)return i;for(const o of s){const a=n.sc.get(o);i=i.unionWith(a.view.Qu)}return i}}function e2(t){const e=oe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=mT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ZF.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=KF.bind(null,e),e.nc.zo=FF.bind(null,e.eventManager),e.nc.wc=$F.bind(null,e.eventManager),e}function t2(t){const e=oe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=QF.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=YF.bind(null,e),e}class sw{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=ud(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return oF(this.persistence,new iF,e.initialUser,this.serializer)}createPersistence(e){return new nF(vy.Fs,this.serializer)}createSharedClientState(e){return new fF}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class n2{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>rw(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=JF.bind(null,this.syncEngine),await PF(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new OF}createDatastore(e){const n=ud(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new yF(i));var i;return function(s,o,a,l){return new wF(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>rw(this.syncEngine,a,0),o=ew.D()?new ew:new pF,new CF(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const c=new jF(r,i,s,o,a,l);return u&&(c.fc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=oe(e);j("RemoteStore","RemoteStore shutting down."),n.du.add(5),await eu(n),n._u.shutdown(),n.mu.set("Unknown")}(this.remoteStore)}}/**
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
 */class r2{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.gc(this.observer.next,e)}error(e){this.observer.error?this.gc(this.observer.error,e):Ir("Uncaught Error in snapshot listener:",e.toString())}yc(){this.muted=!0}gc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class i2{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Dt.UNAUTHENTICATED,this.clientId=_I.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{j("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(j("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new F(N.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ii;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Iy(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Nf(t,e){t.asyncQueue.verifyOperationInProgress(),j("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await nT(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function ow(t,e){t.asyncQueue.verifyOperationInProgress();const n=await o2(t);j("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>tw(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>tw(e.remoteStore,s)),t._onlineComponents=e}function s2(t){return t.name==="FirebaseError"?t.code===N.FAILED_PRECONDITION||t.code===N.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function o2(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){j("FirestoreClient","Using user provided OfflineComponentProvider");try{await Nf(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!s2(n))throw n;Qc("Error using user provided cache. Falling back to memory cache: "+n),await Nf(t,new sw)}}else j("FirestoreClient","Using default OfflineComponentProvider"),await Nf(t,new sw);return t._offlineComponents}async function _T(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(j("FirestoreClient","Using user provided OnlineComponentProvider"),await ow(t,t._uninitializedComponentsProvider._online)):(j("FirestoreClient","Using default OnlineComponentProvider"),await ow(t,new n2))),t._onlineComponents}function a2(t){return _T(t).then(e=>e.syncEngine)}async function l2(t){const e=await _T(t),n=e.eventManager;return n.onListen=WF.bind(null,e.syncEngine),n.onUnlisten=qF.bind(null,e.syncEngine),n}function u2(t,e,n={}){const r=new ii;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new r2({next:h=>{s.enqueueAndForget(()=>LF(i,c)),h.fromCache&&a.source==="server"?l.reject(new F(N.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(h)},error:h=>l.reject(h)}),c=new UF(o,u,{includeMetadataChanges:!0,xu:!0});return MF(i,c)}(await l2(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */const aw=new Map;/**
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
 */function wT(t,e,n){if(!n)throw new F(N.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function c2(t,e,n,r){if(e===!0&&r===!0)throw new F(N.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function lw(t){if(!G.isDocumentKey(t))throw new F(N.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function uw(t){if(G.isDocumentKey(t))throw new F(N.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function dd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":te()}function ss(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new F(N.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=dd(t);throw new F(N.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class cw{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new F(N.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new F(N.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,c2("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class fd{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new cw({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new F(N.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new F(N.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new cw(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new xM;switch(n.type){case"firstParty":return new MM(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new F(N.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=aw.get(e);n&&(j("ComponentProvider","Removing Datastore"),aw.delete(e),n.terminate())}(this),Promise.resolve()}}function h2(t,e,n,r={}){var i;const s=(t=ss(t,fd))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&Qc("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=Dt.MOCK_USER;else{o=DC(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new F(N.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Dt(l)}t._authCredentials=new PM(new vI(o,a))}}/**
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
 */class hn{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new si(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new hn(this.firestore,e,this._key)}}class Fo{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Fo(this.firestore,e,this._query)}}class si extends Fo{constructor(e,n,r){super(e,n,DI(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new hn(this.firestore,null,new G(e))}withConverter(e){return new si(this.firestore,e,this._path)}}function mi(t,e,...n){if(t=Ve(t),wT("collection","path",e),t instanceof fd){const r=Oe.fromString(e,...n);return uw(r),new si(t,null,r)}{if(!(t instanceof hn||t instanceof si))throw new F(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Oe.fromString(e,...n));return uw(r),new si(t.firestore,null,r)}}function gr(t,e,...n){if(t=Ve(t),arguments.length===1&&(e=_I.A()),wT("doc","path",e),t instanceof fd){const r=Oe.fromString(e,...n);return lw(r),new hn(t,null,new G(r))}{if(!(t instanceof hn||t instanceof si))throw new F(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Oe.fromString(e,...n));return lw(r),new hn(t.firestore,t instanceof si?t.converter:null,new G(r))}}/**
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
 */class d2{constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new iT(this,"async_queue_retry"),this.qc=()=>{const n=kf();n&&j("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Co.vo()};const e=kf();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.qc)}get isShuttingDown(){return this.Oc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Uc(),this.Kc(e)}enterRestrictedMode(e){if(!this.Oc){this.Oc=!0,this.Bc=e||!1;const n=kf();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.qc)}}enqueue(e){if(this.Uc(),this.Oc)return new Promise(()=>{});const n=new ii;return this.Kc(()=>this.Oc&&this.Bc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.kc.push(e),this.Gc()))}async Gc(){if(this.kc.length!==0){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(e){if(!Yl(e))throw e;j("AsyncQueue","Operation failed with retryable error: "+e)}this.kc.length>0&&this.Co.Ao(()=>this.Gc())}}Kc(e){const n=this.Nc.then(()=>(this.Fc=!0,e().catch(r=>{this.Mc=r,this.Fc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw Ir("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Fc=!1,r))));return this.Nc=n,n}enqueueAfterDelay(e,n,r){this.Uc(),this.Lc.indexOf(e)>-1&&(n=0);const i=Sy.createAndSchedule(this,e,n,r,s=>this.Qc(s));return this.$c.push(i),i}Uc(){this.Mc&&te()}verifyOperationInProgress(){}async zc(){let e;do e=this.Nc,await e;while(e!==this.Nc)}jc(e){for(const n of this.$c)if(n.timerId===e)return!0;return!1}Wc(e){return this.zc().then(()=>{this.$c.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.zc()})}Hc(e){this.Lc.push(e)}Qc(e){const n=this.$c.indexOf(e);this.$c.splice(n,1)}}class nu extends fd{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new d2,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||CT(this),this._firestoreClient.terminate()}}function f2(t,e){const n=typeof t=="object"?t:Dg(),r=typeof t=="string"?t:e||"(default)",i=$h(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=RC("firestore");s&&h2(i,...s)}return i}function ET(t){return t._firestoreClient||CT(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function CT(t){var e,n,r;const i=t._freezeSettings(),s=function(o,a,l,u){return new KM(o,a,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new i2(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.cache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}/**
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
 */class vo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new vo(Vt.fromBase64String(e))}catch(n){throw new F(N.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new vo(Vt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class pd{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new F(N.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ot(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Ny{constructor(e){this._methodName=e}}/**
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
 */class Ry{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new F(N.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new F(N.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Te(this._lat,e._lat)||Te(this._long,e._long)}}/**
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
 */const p2=/^__.*__$/;class m2{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Si(e,this.data,this.fieldMask,n,this.fieldTransforms):new Jl(e,this.data,n,this.fieldTransforms)}}class ST{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Si(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function IT(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw te()}}class Ay{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Jc(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Yc(){return this.settings.Yc}Zc(e){return new Ay(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Xc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Zc({path:r,ta:!1});return i.ea(e),i}na(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Zc({path:r,ta:!1});return i.Jc(),i}sa(e){return this.Zc({path:void 0,ta:!0})}ia(e){return nh(e,this.settings.methodName,this.settings.ra||!1,this.path,this.settings.oa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Jc(){if(this.path)for(let e=0;e<this.path.length;e++)this.ea(this.path.get(e))}ea(e){if(e.length===0)throw this.ia("Document fields must not be empty");if(IT(this.Yc)&&p2.test(e))throw this.ia('Document fields cannot begin and end with "__"')}}class g2{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||ud(e)}ua(e,n,r,i=!1){return new Ay({Yc:e,methodName:n,oa:r,path:Ot.emptyPath(),ta:!1,ra:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Dy(t){const e=t._freezeSettings(),n=ud(t._databaseId);return new g2(t._databaseId,!!e.ignoreUndefinedProperties,n)}function y2(t,e,n,r,i,s={}){const o=t.ua(s.merge||s.mergeFields?2:0,e,n,i);xy("Data must be an object, but it was:",o,r);const a=TT(r,o);let l,u;if(s.merge)l=new un(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=dm(e,h,n);if(!o.contains(d))throw new F(N.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);NT(c,d)||c.push(d)}l=new un(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new m2(new Kt(a),l,u)}class md extends Ny{_toFieldTransform(e){if(e.Yc!==2)throw e.Yc===1?e.ia(`${this._methodName}() can only appear at the top level of your update data`):e.ia(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof md}}function v2(t,e,n,r){const i=t.ua(1,e,n);xy("Data must be an object, but it was:",i,r);const s=[],o=Kt.empty();fs(r,(l,u)=>{const c=Py(e,l,n);u=Ve(u);const h=i.na(c);if(u instanceof md)s.push(c);else{const d=ru(u,h);d!=null&&(s.push(c),o.set(c,d))}});const a=new un(s);return new ST(o,a,i.fieldTransforms)}function _2(t,e,n,r,i,s){const o=t.ua(1,e,n),a=[dm(e,r,n)],l=[i];if(s.length%2!=0)throw new F(N.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(dm(e,s[d])),l.push(s[d+1]);const u=[],c=Kt.empty();for(let d=a.length-1;d>=0;--d)if(!NT(u,a[d])){const m=a[d];let v=l[d];v=Ve(v);const _=o.na(m);if(v instanceof md)u.push(m);else{const g=ru(v,_);g!=null&&(u.push(m),c.set(m,g))}}const h=new un(u);return new ST(c,h,o.fieldTransforms)}function w2(t,e,n,r=!1){return ru(n,t.ua(r?4:3,e))}function ru(t,e){if(kT(t=Ve(t)))return xy("Unsupported field value:",e,t),TT(t,e);if(t instanceof Ny)return function(n,r){if(!IT(r.Yc))throw r.ia(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.ia(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ta&&e.Yc!==4)throw e.ia("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=ru(o,r.sa(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=Ve(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return fL(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=it.fromDate(n);return{timestampValue:eh(r.serializer,i)}}if(n instanceof it){const i=new it(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:eh(r.serializer,i)}}if(n instanceof Ry)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof vo)return{bytesValue:YI(r.serializer,n._byteString)};if(n instanceof hn){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.ia(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:gy(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.ia(`Unsupported field value: ${dd(n)}`)}(t,e)}function TT(t,e){const n={};return wI(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):fs(t,(r,i)=>{const s=ru(i,e.Xc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function kT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof it||t instanceof Ry||t instanceof vo||t instanceof hn||t instanceof Ny)}function xy(t,e,n){if(!kT(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=dd(n);throw r==="an object"?e.ia(t+" a custom object"):e.ia(t+" "+r)}}function dm(t,e,n){if((e=Ve(e))instanceof pd)return e._internalPath;if(typeof e=="string")return Py(t,e);throw nh("Field path arguments must be of type string or ",t,!1,void 0,n)}const E2=new RegExp("[~\\*/\\[\\]]");function Py(t,e,n){if(e.search(E2)>=0)throw nh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new pd(...e.split("."))._internalPath}catch{throw nh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function nh(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new F(N.INVALID_ARGUMENT,a+t+l)}function NT(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class RT{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new hn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new C2(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(by("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class C2 extends RT{data(){return super.data()}}function by(t,e){return typeof e=="string"?Py(t,e):e instanceof pd?e._internalPath:e._delegate._internalPath}/**
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
 */function S2(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new F(N.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Oy{}class I2 extends Oy{}function gd(t,e,...n){let r=[];e instanceof Oy&&r.push(e),r=r.concat(n),function(i){const s=i.filter(a=>a instanceof My).length,o=i.filter(a=>a instanceof yd).length;if(s>1||s>0&&o>0)throw new F(N.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class yd extends I2{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new yd(e,n,r)}_apply(e){const n=this._parse(e);return AT(e._query,n),new Fo(e.firestore,e.converter,im(e._query,n))}_parse(e){const n=Dy(e.firestore);return function(i,s,o,a,l,u,c){let h;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new F(N.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){dw(c,u);const d=[];for(const m of c)d.push(hw(a,i,m));h={arrayValue:{values:d}}}else h=hw(a,i,c)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||dw(c,u),h=w2(o,s,c,u==="in"||u==="not-in");return Je.create(l,u,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function vd(t,e,n){const r=e,i=by("where",t);return yd._create(i,r,n)}class My extends Oy{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new My(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Vn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,i){let s=r;const o=i.getFlattenedFilters();for(const a of o)AT(s,a),s=im(s,a)}(e._query,n),new Fo(e.firestore,e.converter,im(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function hw(t,e,n){if(typeof(n=Ve(n))=="string"){if(n==="")throw new F(N.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!PI(e)&&n.indexOf("/")!==-1)throw new F(N.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Oe.fromString(n));if(!G.isDocumentKey(r))throw new F(N.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return F0(t,new G(r))}if(n instanceof hn)return F0(t,n._key);throw new F(N.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${dd(n)}.`)}function dw(t,e){if(!Array.isArray(t)||t.length===0)throw new F(N.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function AT(t,e){if(e.isInequality()){const r=dy(t),i=e.field;if(r!==null&&!r.isEqual(i))throw new F(N.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=xI(t);s!==null&&T2(t,i,s)}const n=function(r,i){for(const s of r)for(const o of s.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new F(N.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new F(N.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function T2(t,e,n){if(!n.isEqual(e))throw new F(N.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class k2{convertValue(e,n="none"){switch(is(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ye(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(fo(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw te()}}convertObject(e,n){const r={};return fs(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Ry(Ye(e.latitude),Ye(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=CI(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(pl(e));default:return null}}convertTimestamp(e){const n=fi(e);return new it(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Oe.fromString(e);Le(tT(r));const i=new ml(r.get(1),r.get(3)),s=new G(r.popFirst(5));return i.isEqual(n)||Ir(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function N2(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class Fu{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class R2 extends RT{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new sc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(by("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class sc extends R2{data(e={}){return super.data(e)}}class A2{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Fu(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new sc(this._firestore,this._userDataWriter,r.key,r,new Fu(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new F(N.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new sc(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Fu(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new sc(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Fu(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:D2(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function D2(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return te()}}class x2 extends k2{constructor(e){super(),this.firestore=e}convertBytes(e){return new vo(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new hn(this.firestore,null,n)}}function _d(t){t=ss(t,Fo);const e=ss(t.firestore,nu),n=ET(e),r=new x2(e);return S2(t._query),u2(n,t._query).then(i=>new A2(e,r,t,i))}function _l(t,e,n,...r){t=ss(t,hn);const i=ss(t.firestore,nu),s=Dy(i);let o;return o=typeof(e=Ve(e))=="string"||e instanceof pd?_2(s,"updateDoc",t._key,e,n,r):v2(s,"updateDoc",t._key,e),Fy(i,[o.toMutation(t._key,Ln.exists(!0))])}function Ly(t){return Fy(ss(t.firestore,nu),[new fy(t._key,Ln.none())])}function wd(t,e){const n=ss(t.firestore,nu),r=gr(t),i=N2(t.converter,e);return Fy(n,[y2(Dy(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Ln.exists(!1))]).then(()=>r)}function Fy(t,e){return function(n,r){const i=new ii;return n.asyncQueue.enqueueAndForget(async()=>GF(await a2(n),r,i)),i.promise}(ET(t),e)}(function(t,e=!0){(function(n){Oo=n})(Do),es(new hi("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new nu(new bM(n.getProvider("auth-internal")),new FM(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new F(N.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ml(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Qn(P0,"3.10.0",t),Qn(P0,"3.10.0","esm2017")})();const fw="@firebase/database",pw="0.14.4";/**
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
 */let DT="";function P2(t){DT=t}/**
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
 */class b2{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),pt(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:rl(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class O2{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return xr(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const xT=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new b2(e)}}catch{}return new O2},$i=xT("localStorage"),fm=xT("sessionStorage");/**
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
 */const Js=new Fh("@firebase/database"),M2=function(){let t=1;return function(){return t++}}(),PT=function(t){const e=vx(t),n=new px;n.update(e);const r=n.digest();return Tg.encodeByteArray(r)},iu=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=iu.apply(null,r):typeof r=="object"?e+=pt(r):e+=r,e+=" "}return e};let Hi=null,mw=!0;const L2=function(t,e){O(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Js.logLevel=Ee.VERBOSE,Hi=Js.log.bind(Js),e&&fm.set("logging_enabled",!0)):typeof t=="function"?Hi=t:(Hi=null,fm.remove("logging_enabled"))},bt=function(...t){if(mw===!0&&(mw=!1,Hi===null&&fm.get("logging_enabled")===!0&&L2(!0)),Hi){const e=iu.apply(null,t);Hi(e)}},su=function(t){return function(...e){bt(t,...e)}},pm=function(...t){const e="FIREBASE INTERNAL ERROR: "+iu(...t);Js.error(e)},Nr=function(...t){const e=`FIREBASE FATAL ERROR: ${iu(...t)}`;throw Js.error(e),new Error(e)},tn=function(...t){const e="FIREBASE WARNING: "+iu(...t);Js.warn(e)},F2=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&tn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},bT=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},$2=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},_o="[MIN_NAME]",os="[MAX_NAME]",$o=function(t,e){if(t===e)return 0;if(t===_o||e===os)return-1;if(e===_o||t===os)return 1;{const n=gw(t),r=gw(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},U2=function(t,e){return t===e?0:t<e?-1:1},ra=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+pt(e))},$y=function(t){if(typeof t!="object"||t===null)return pt(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=pt(e[r]),n+=":",n+=$y(t[e[r]]);return n+="}",n},OT=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function nn(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const MT=function(t){O(!bT(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const c=u.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(c.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},V2=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},z2=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function B2(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const j2=new RegExp("^-?(0*)\\d{1,10}$"),W2=-2147483648,H2=2147483647,gw=function(t){if(j2.test(t)){const e=Number(t);if(e>=W2&&e<=H2)return e}return null},Uo=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw tn("Exception was thrown by user callback.",n),e},Math.floor(0))}},q2=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ba=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class G2{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){tn(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class K2{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(bt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',tn(e)}}class Zs{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Zs.OWNER="owner";/**
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
 */const Uy="5",LT="v",FT="s",$T="r",UT="f",VT=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,zT="ls",BT="p",mm="ac",jT="websocket",WT="long_polling";/**
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
 */class HT{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=$i.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&$i.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Q2(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function qT(t,e,n){O(typeof e=="string","typeof type must == string"),O(typeof n=="object","typeof params must == object");let r;if(e===jT)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===WT)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Q2(t)&&(n.ns=t.namespace);const i=[];return nn(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class Y2{constructor(){this.counters_={}}incrementCounter(e,n=1){xr(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return JD(this.counters_)}}/**
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
 */const Rf={},Af={};function Vy(t){const e=t.toString();return Rf[e]||(Rf[e]=new Y2),Rf[e]}function X2(t,e){const n=t.toString();return Af[n]||(Af[n]=e()),Af[n]}/**
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
 */class J2{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Uo(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const yw="start",Z2="close",e$="pLPCommand",t$="pRTLPCB",GT="id",KT="pw",QT="ser",n$="cb",r$="seg",i$="ts",s$="d",o$="dframe",YT=1870,XT=30,a$=YT-XT,l$=25e3,u$=3e4;class Vs{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=su(e),this.stats_=Vy(n),this.urlFn=l=>(this.appCheckToken&&(l[mm]=this.appCheckToken),qT(n,WT,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new J2(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(u$)),$2(()=>{if(this.isClosed_)return;this.scriptTagHolder=new zy((...s)=>{const[o,a,l,u,c]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===yw)this.id=a,this.password=l;else if(o===Z2)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[yw]="t",r[QT]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[n$]=this.scriptTagHolder.uniqueCallbackIdentifier),r[LT]=Uy,this.transportSessionId&&(r[FT]=this.transportSessionId),this.lastSessionId&&(r[zT]=this.lastSessionId),this.applicationId&&(r[BT]=this.applicationId),this.appCheckToken&&(r[mm]=this.appCheckToken),typeof location<"u"&&location.hostname&&VT.test(location.hostname)&&(r[$T]=UT);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Vs.forceAllow_=!0}static forceDisallow(){Vs.forceDisallow_=!0}static isAvailable(){return Vs.forceAllow_?!0:!Vs.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!V2()&&!z2()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=pt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=TC(n),i=OT(r,a$);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[o$]="t",r[GT]=e,r[KT]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=pt(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class zy{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=M2(),window[e$+this.uniqueCallbackIdentifier]=e,window[t$+this.uniqueCallbackIdentifier]=n,this.myIFrame=zy.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){bt("frame writing exception"),a.stack&&bt(a.stack),bt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||bt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[GT]=this.myID,e[KT]=this.myPW,e[QT]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+XT+r.length<=YT;){const o=this.pendingSegs.shift();r=r+"&"+r$+i+"="+o.seg+"&"+i$+i+"="+o.ts+"&"+s$+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(l$)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{bt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const c$=16384,h$=45e3;let rh=null;typeof MozWebSocket<"u"?rh=MozWebSocket:typeof WebSocket<"u"&&(rh=WebSocket);class xn{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=su(this.connId),this.stats_=Vy(n),this.connURL=xn.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[LT]=Uy,typeof location<"u"&&location.hostname&&VT.test(location.hostname)&&(o[$T]=UT),n&&(o[FT]=n),r&&(o[zT]=r),i&&(o[mm]=i),s&&(o[BT]=s),qT(e,jT,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,$i.set("previous_websocket_failure",!0);try{let r;PC(),this.mySock=new rh(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){xn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&rh!==null&&!xn.forceDisallow_}static previouslyFailed(){return $i.isInMemoryStorage||$i.get("previous_websocket_failure")===!0}markConnectionHealthy(){$i.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=rl(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(O(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=pt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=OT(n,c$);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(h$))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}xn.responsesRequiredToBeHealthy=2;xn.healthyTimeout=3e4;/**
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
 */class wl{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Vs,xn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=xn&&xn.isAvailable();let r=n&&!xn.previouslyFailed();if(e.webSocketOnly&&(n||tn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[xn];else{const i=this.transports_=[];for(const s of wl.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);wl.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}wl.globalTransportInitialized_=!1;/**
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
 */const d$=6e4,f$=5e3,p$=10*1024,m$=100*1024,Df="t",vw="d",g$="s",_w="r",y$="e",ww="o",Ew="a",Cw="n",Sw="p",v$="h";class _${constructor(e,n,r,i,s,o,a,l,u,c){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=su("c:"+this.id+":"),this.transportManager_=new wl(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=ba(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>m$?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>p$?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Df in e){const n=e[Df];n===Ew?this.upgradeIfSecondaryHealthy_():n===_w?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===ww&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ra("t",e),r=ra("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Sw,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Ew,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Cw,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ra("t",e),r=ra("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ra(Df,e);if(vw in e){const r=e[vw];if(n===v$){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Cw){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===g$?this.onConnectionShutdown_(r):n===_w?this.onReset_(r):n===y$?pm("Server Error: "+r):n===ww?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):pm("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Uy!==r&&tn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),ba(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(d$))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ba(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(f$))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Sw,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&($i.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class JT{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class ZT{constructor(e){this.allowedEvents_=e,this.listeners_={},O(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){O(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class ih extends ZT{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Ng()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new ih}getInitialEvent(e){return O(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Iw=32,Tw=768;class Re{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Se(){return new Re("")}function ue(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function gi(t){return t.pieces_.length-t.pieceNum_}function De(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Re(t.pieces_,e)}function ek(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function w$(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function tk(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function nk(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Re(e,0)}function nt(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof Re)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new Re(n,0)}function he(t){return t.pieceNum_>=t.pieces_.length}function Yt(t,e){const n=ue(t),r=ue(e);if(n===null)return e;if(n===r)return Yt(De(t),De(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function By(t,e){if(gi(t)!==gi(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Pn(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(gi(t)>gi(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class E${constructor(e,n){this.errorPrefix_=n,this.parts_=tk(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Lh(this.parts_[r]);rk(this)}}function C$(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Lh(e),rk(t)}function S$(t){const e=t.parts_.pop();t.byteLength_-=Lh(e),t.parts_.length>0&&(t.byteLength_-=1)}function rk(t){if(t.byteLength_>Tw)throw new Error(t.errorPrefix_+"has a key path longer than "+Tw+" bytes ("+t.byteLength_+").");if(t.parts_.length>Iw)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Iw+") or object contains a cycle "+Di(t))}function Di(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class jy extends ZT{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new jy}getInitialEvent(e){return O(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const ia=1e3,I$=60*5*1e3,kw=30*1e3,T$=1.3,k$=3e4,N$="server_kill",Nw=3;class yr extends JT{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=yr.nextPersistentConnectionId_++,this.log_=su("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ia,this.maxReconnectDelay_=I$,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!PC())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");jy.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ih.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(pt(s)),O(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Mh,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),O(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),O(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,u=a.s;yr.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&xr(e,"w")){const r=uo(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();tn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||fx(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=kw)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=dx(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),O(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+pt(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):pm("Unrecognized action received from server: "+pt(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){O(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ia,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ia,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>k$&&(this.reconnectDelay_=ia),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*T$)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+yr.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},u=function(h){O(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?bt("getToken() completed but was canceled"):(bt("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new _$(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,m=>{tn(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(N$)},s))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&tn(h),l())}}}interrupt(e){bt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){bt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Mp(this.interruptReasons_)&&(this.reconnectDelay_=ia,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>$y(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new Re(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){bt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Nw&&(this.reconnectDelay_=kw,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){bt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Nw&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+DT.replace(/\./g,"-")]=1,Ng()?e["framework.cordova"]=1:xC()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ih.getInstance().currentlyOnline();return Mp(this.interruptReasons_)&&e}}yr.nextPersistentConnectionId_=0;yr.nextConnectionId_=0;/**
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
 */class ce{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new ce(e,n)}}/**
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
 */class Ed{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new ce(_o,e),i=new ce(_o,n);return this.compare(r,i)!==0}minPost(){return ce.MIN}}/**
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
 */let $u;class ik extends Ed{static get __EMPTY_NODE(){return $u}static set __EMPTY_NODE(e){$u=e}compare(e,n){return $o(e.name,n.name)}isDefinedOn(e){throw Ro("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ce.MIN}maxPost(){return new ce(os,$u)}makePost(e,n){return O(typeof e=="string","KeyIndex indexValue must always be a string."),new ce(e,$u)}toString(){return".key"}}const eo=new ik;/**
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
 */class Uu{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class dt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??dt.RED,this.left=i??Xt.EMPTY_NODE,this.right=s??Xt.EMPTY_NODE}copy(e,n,r,i,s){return new dt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Xt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Xt.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,dt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,dt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}dt.RED=!0;dt.BLACK=!1;class R${copy(e,n,r,i,s){return this}insert(e,n,r){return new dt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Xt{constructor(e,n=Xt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Xt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,dt.BLACK,null,null))}remove(e){return new Xt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,dt.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Uu(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Uu(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Uu(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Uu(this.root_,null,this.comparator_,!0,e)}}Xt.EMPTY_NODE=new R$;/**
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
 */function A$(t,e){return $o(t.name,e.name)}function Wy(t,e){return $o(t,e)}/**
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
 */let gm;function D$(t){gm=t}const sk=function(t){return typeof t=="number"?"number:"+MT(t):"string:"+t},ok=function(t){if(t.isLeafNode()){const e=t.val();O(typeof e=="string"||typeof e=="number"||typeof e=="object"&&xr(e,".sv"),"Priority must be a string or number.")}else O(t===gm||t.isEmpty(),"priority of unexpected type.");O(t===gm||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Rw;class lt{constructor(e,n=lt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,O(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),ok(this.priorityNode_)}static set __childrenNodeConstructor(e){Rw=e}static get __childrenNodeConstructor(){return Rw}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new lt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:lt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return he(e)?this:ue(e)===".priority"?this.priorityNode_:lt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:lt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=ue(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(O(r!==".priority"||gi(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,lt.__childrenNodeConstructor.EMPTY_NODE.updateChild(De(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+sk(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=MT(this.value_):e+=this.value_,this.lazyHash_=PT(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===lt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof lt.__childrenNodeConstructor?-1:(O(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=lt.VALUE_TYPE_ORDER.indexOf(n),s=lt.VALUE_TYPE_ORDER.indexOf(r);return O(i>=0,"Unknown leaf type: "+n),O(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}lt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let ak,lk;function x$(t){ak=t}function P$(t){lk=t}class b$ extends Ed{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?$o(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ce.MIN}maxPost(){return new ce(os,new lt("[PRIORITY-POST]",lk))}makePost(e,n){const r=ak(e);return new ce(n,new lt("[PRIORITY-POST]",r))}toString(){return".priority"}}const He=new b$;/**
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
 */const O$=Math.log(2);class M${constructor(e){const n=s=>parseInt(Math.log(s)/O$,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const sh=function(t,e,n,r){t.sort(e);const i=function(l,u){const c=u-l;let h,d;if(c===0)return null;if(c===1)return h=t[l],d=n?n(h):h,new dt(d,h.node,dt.BLACK,null,null);{const m=parseInt(c/2,10)+l,v=i(l,m),_=i(m+1,u);return h=t[m],d=n?n(h):h,new dt(d,h.node,dt.BLACK,v,_)}},s=function(l){let u=null,c=null,h=t.length;const d=function(v,_){const g=h-v,p=h;h-=v;const f=i(g+1,p),y=t[g],E=n?n(y):y;m(new dt(E,y.node,_,null,f))},m=function(v){u?(u.left=v,u=v):(c=v,u=v)};for(let v=0;v<l.count;++v){const _=l.nextBitIsOne(),g=Math.pow(2,l.count-(v+1));_?d(g,dt.BLACK):(d(g,dt.BLACK),d(g,dt.RED))}return c},o=new M$(t.length),a=s(o);return new Xt(r||e,a)};/**
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
 */let xf;const Es={};class pr{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return O(Es&&He,"ChildrenNode.ts has not been loaded"),xf=xf||new pr({".priority":Es},{".priority":He}),xf}get(e){const n=uo(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Xt?n:null}hasIndex(e){return xr(this.indexSet_,e.toString())}addIndex(e,n){O(e!==eo,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(ce.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=sh(r,e.getCompare()):a=Es;const l=e.toString(),u=Object.assign({},this.indexSet_);u[l]=e;const c=Object.assign({},this.indexes_);return c[l]=a,new pr(c,u)}addToIndexes(e,n){const r=Oc(this.indexes_,(i,s)=>{const o=uo(this.indexSet_,s);if(O(o,"Missing index implementation for "+s),i===Es)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(ce.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),sh(a,o.getCompare())}else return Es;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new ce(e.name,a))),l.insert(e,e.node)}});return new pr(r,this.indexSet_)}removeFromIndexes(e,n){const r=Oc(this.indexes_,i=>{if(i===Es)return i;{const s=n.get(e.name);return s?i.remove(new ce(e.name,s)):i}});return new pr(r,this.indexSet_)}}/**
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
 */let sa;class J{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&ok(this.priorityNode_),this.children_.isEmpty()&&O(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return sa||(sa=new J(new Xt(Wy),null,pr.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||sa}updatePriority(e){return this.children_.isEmpty()?this:new J(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?sa:n}}getChild(e){const n=ue(e);return n===null?this:this.getImmediateChild(n).getChild(De(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(O(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new ce(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?sa:this.priorityNode_;return new J(i,o,s)}}updateChild(e,n){const r=ue(e);if(r===null)return n;{O(ue(e)!==".priority"||gi(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(De(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(He,(o,a)=>{n[o]=a.val(e),r++,s&&J.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+sk(this.getPriority().val())+":"),this.forEachChild(He,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":PT(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new ce(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ce(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ce(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,ce.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,ce.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ou?-1:0}withIndex(e){if(e===eo||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new J(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===eo||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(He),i=n.getIterator(He);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===eo?null:this.indexMap_.get(e.toString())}}J.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class L$ extends J{constructor(){super(new Xt(Wy),J.EMPTY_NODE,pr.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return J.EMPTY_NODE}isEmpty(){return!1}}const ou=new L$;Object.defineProperties(ce,{MIN:{value:new ce(_o,J.EMPTY_NODE)},MAX:{value:new ce(os,ou)}});ik.__EMPTY_NODE=J.EMPTY_NODE;lt.__childrenNodeConstructor=J;D$(ou);P$(ou);/**
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
 */const F$=!0;function _t(t,e=null){if(t===null)return J.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),O(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new lt(n,_t(e))}if(!(t instanceof Array)&&F$){const n=[];let r=!1;if(nn(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=_t(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new ce(o,l)))}}),n.length===0)return J.EMPTY_NODE;const s=sh(n,A$,o=>o.name,Wy);if(r){const o=sh(n,He.getCompare());return new J(s,_t(e),new pr({".priority":o},{".priority":He}))}else return new J(s,_t(e),pr.Default)}else{let n=J.EMPTY_NODE;return nn(t,(r,i)=>{if(xr(t,r)&&r.substring(0,1)!=="."){const s=_t(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(_t(e))}}x$(_t);/**
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
 */class $$ extends Ed{constructor(e){super(),this.indexPath_=e,O(!he(e)&&ue(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?$o(e.name,n.name):s}makePost(e,n){const r=_t(e),i=J.EMPTY_NODE.updateChild(this.indexPath_,r);return new ce(n,i)}maxPost(){const e=J.EMPTY_NODE.updateChild(this.indexPath_,ou);return new ce(os,e)}toString(){return tk(this.indexPath_,0).join("/")}}/**
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
 */class U$ extends Ed{compare(e,n){const r=e.node.compareTo(n.node);return r===0?$o(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ce.MIN}maxPost(){return ce.MAX}makePost(e,n){const r=_t(e);return new ce(n,r)}toString(){return".value"}}const V$=new U$;/**
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
 */function uk(t){return{type:"value",snapshotNode:t}}function wo(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function El(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Cl(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function z$(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Hy{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){O(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(El(n,a)):O(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(wo(n,r)):o.trackChildChange(Cl(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(He,(i,s)=>{n.hasChild(i)||r.trackChildChange(El(i,s))}),n.isLeafNode()||n.forEachChild(He,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(Cl(i,s,o))}else r.trackChildChange(wo(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?J.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Sl{constructor(e){this.indexedFilter_=new Hy(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Sl.getStartPost_(e),this.endPost_=Sl.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new ce(n,r))||(r=J.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=J.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(J.EMPTY_NODE);const s=this;return n.forEachChild(He,(o,a)=>{s.matches(new ce(o,a))||(i=i.updateImmediateChild(o,J.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class B${constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Sl(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new ce(n,r))||(r=J.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=J.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=J.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(J.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,J.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,m)=>h(m,d)}else o=this.index_.getCompare();const a=e;O(a.numChildren()===this.limit_,"");const l=new ce(n,r),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),c=this.rangedFilter_.matches(l);if(a.hasChild(n)){const h=a.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,u,this.reverse_);for(;d!=null&&(d.name===n||a.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const m=d==null?1:o(d,l);if(c&&!r.isEmpty()&&m>=0)return s!=null&&s.trackChildChange(Cl(n,r,h)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(El(n,h));const _=a.updateImmediateChild(n,J.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(s!=null&&s.trackChildChange(wo(d.name,d.node)),_.updateImmediateChild(d.name,d.node)):_}}else return r.isEmpty()?e:c&&o(u,l)>=0?(s!=null&&(s.trackChildChange(El(u.name,u.node)),s.trackChildChange(wo(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(u.name,J.EMPTY_NODE)):e}}/**
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
 */class qy{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=He}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return O(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return O(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:_o}hasEnd(){return this.endSet_}getIndexEndValue(){return O(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return O(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:os}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return O(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===He}copy(){const e=new qy;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function j$(t){return t.loadsAllData()?new Hy(t.getIndex()):t.hasLimit()?new B$(t):new Sl(t)}function Aw(t){const e={};if(t.isDefault())return e;let n;if(t.index_===He?n="$priority":t.index_===V$?n="$value":t.index_===eo?n="$key":(O(t.index_ instanceof $$,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=pt(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=pt(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+pt(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=pt(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+pt(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Dw(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==He&&(e.i=t.index_.toString()),e}/**
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
 */class oh extends JT{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=su("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(O(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=oh.getListenId_(e,r),a={};this.listens_[o]=a;const l=Aw(e._queryParams);this.restRequest_(s+".json",l,(u,c)=>{let h=c;if(u===404&&(h=null,u=null),u===null&&this.onDataUpdate_(s,h,!1,r),uo(this.listens_,o)===a){let d;u?u===401?d="permission_denied":d="rest_error:"+u:d="ok",i(d,null)}})}unlisten(e,n){const r=oh.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Aw(e._queryParams),r=e._path.toString(),i=new Mh;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ao(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=rl(a.responseText)}catch{tn("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&tn("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class W${constructor(){this.rootNode_=J.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function ah(){return{value:null,children:new Map}}function ck(t,e,n){if(he(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=ue(e);t.children.has(r)||t.children.set(r,ah());const i=t.children.get(r);e=De(e),ck(i,e,n)}}function ym(t,e,n){t.value!==null?n(e,t.value):H$(t,(r,i)=>{const s=new Re(e.toString()+"/"+r);ym(i,s,n)})}function H$(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class q${constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&nn(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const xw=10*1e3,G$=30*1e3,K$=5*60*1e3;class Q${constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new q$(e);const r=xw+(G$-xw)*Math.random();ba(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;nn(e,(i,s)=>{s>0&&xr(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),ba(this.reportStats_.bind(this),Math.floor(Math.random()*2*K$))}}/**
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
 */var bn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(bn||(bn={}));function hk(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Gy(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Ky(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class lh{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=bn.ACK_USER_WRITE,this.source=hk()}operationForChild(e){if(he(this.path)){if(this.affectedTree.value!=null)return O(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Re(e));return new lh(Se(),n,this.revert)}}else return O(ue(this.path)===e,"operationForChild called for unrelated child."),new lh(De(this.path),this.affectedTree,this.revert)}}/**
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
 */class Il{constructor(e,n){this.source=e,this.path=n,this.type=bn.LISTEN_COMPLETE}operationForChild(e){return he(this.path)?new Il(this.source,Se()):new Il(this.source,De(this.path))}}/**
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
 */class as{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=bn.OVERWRITE}operationForChild(e){return he(this.path)?new as(this.source,Se(),this.snap.getImmediateChild(e)):new as(this.source,De(this.path),this.snap)}}/**
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
 */class Tl{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=bn.MERGE}operationForChild(e){if(he(this.path)){const n=this.children.subtree(new Re(e));return n.isEmpty()?null:n.value?new as(this.source,Se(),n.value):new Tl(this.source,Se(),n)}else return O(ue(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Tl(this.source,De(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class ls{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(he(e))return this.isFullyInitialized()&&!this.filtered_;const n=ue(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class Y${constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function X$(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(z$(o.childName,o.snapshotNode))}),oa(t,i,"child_removed",e,r,n),oa(t,i,"child_added",e,r,n),oa(t,i,"child_moved",s,r,n),oa(t,i,"child_changed",e,r,n),oa(t,i,"value",e,r,n),i}function oa(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>Z$(t,a,l)),o.forEach(a=>{const l=J$(t,a,s);i.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,t.query_))})})}function J$(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Z$(t,e,n){if(e.childName==null||n.childName==null)throw Ro("Should only compare child_ events.");const r=new ce(e.childName,e.snapshotNode),i=new ce(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function Cd(t,e){return{eventCache:t,serverCache:e}}function Oa(t,e,n,r){return Cd(new ls(e,n,r),t.serverCache)}function dk(t,e,n,r){return Cd(t.eventCache,new ls(e,n,r))}function vm(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function us(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Pf;const eU=()=>(Pf||(Pf=new Xt(U2)),Pf);class be{constructor(e,n=eU()){this.value=e,this.children=n}static fromObject(e){let n=new be(null);return nn(e,(r,i)=>{n=n.set(new Re(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Se(),value:this.value};if(he(e))return null;{const r=ue(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(De(e),n);return s!=null?{path:nt(new Re(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(he(e))return this;{const n=ue(e),r=this.children.get(n);return r!==null?r.subtree(De(e)):new be(null)}}set(e,n){if(he(e))return new be(n,this.children);{const r=ue(e),s=(this.children.get(r)||new be(null)).set(De(e),n),o=this.children.insert(r,s);return new be(this.value,o)}}remove(e){if(he(e))return this.children.isEmpty()?new be(null):new be(null,this.children);{const n=ue(e),r=this.children.get(n);if(r){const i=r.remove(De(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new be(null):new be(this.value,s)}else return this}}get(e){if(he(e))return this.value;{const n=ue(e),r=this.children.get(n);return r?r.get(De(e)):null}}setTree(e,n){if(he(e))return n;{const r=ue(e),s=(this.children.get(r)||new be(null)).setTree(De(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new be(this.value,o)}}fold(e){return this.fold_(Se(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(nt(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,Se(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(he(e))return null;{const s=ue(e),o=this.children.get(s);return o?o.findOnPath_(De(e),nt(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Se(),n)}foreachOnPath_(e,n,r){if(he(e))return this;{this.value&&r(n,this.value);const i=ue(e),s=this.children.get(i);return s?s.foreachOnPath_(De(e),nt(n,i),r):new be(null)}}foreach(e){this.foreach_(Se(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(nt(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class Fn{constructor(e){this.writeTree_=e}static empty(){return new Fn(new be(null))}}function Ma(t,e,n){if(he(e))return new Fn(new be(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Yt(i,e);return s=s.updateChild(o,n),new Fn(t.writeTree_.set(i,s))}else{const i=new be(n),s=t.writeTree_.setTree(e,i);return new Fn(s)}}}function Pw(t,e,n){let r=t;return nn(n,(i,s)=>{r=Ma(r,nt(e,i),s)}),r}function bw(t,e){if(he(e))return Fn.empty();{const n=t.writeTree_.setTree(e,new be(null));return new Fn(n)}}function _m(t,e){return ms(t,e)!=null}function ms(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Yt(n.path,e)):null}function Ow(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(He,(r,i)=>{e.push(new ce(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new ce(r,i.value))}),e}function oi(t,e){if(he(e))return t;{const n=ms(t,e);return n!=null?new Fn(new be(n)):new Fn(t.writeTree_.subtree(e))}}function wm(t){return t.writeTree_.isEmpty()}function Eo(t,e){return fk(Se(),t.writeTree_,e)}function fk(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(O(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=fk(nt(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(nt(t,".priority"),r)),n}}/**
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
 */function Qy(t,e){return yk(e,t)}function tU(t,e,n,r,i){O(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Ma(t.visibleWrites,e,n)),t.lastWriteId=r}function nU(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function rU(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);O(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&iU(a,r.path)?i=!1:Pn(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return sU(t),!0;if(r.snap)t.visibleWrites=bw(t.visibleWrites,r.path);else{const a=r.children;nn(a,l=>{t.visibleWrites=bw(t.visibleWrites,nt(r.path,l))})}return!0}else return!1}function iU(t,e){if(t.snap)return Pn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Pn(nt(t.path,n),e))return!0;return!1}function sU(t){t.visibleWrites=pk(t.allWrites,oU,Se()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function oU(t){return t.visible}function pk(t,e,n){let r=Fn.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)Pn(n,o)?(a=Yt(n,o),r=Ma(r,a,s.snap)):Pn(o,n)&&(a=Yt(o,n),r=Ma(r,Se(),s.snap.getChild(a)));else if(s.children){if(Pn(n,o))a=Yt(n,o),r=Pw(r,a,s.children);else if(Pn(o,n))if(a=Yt(o,n),he(a))r=Pw(r,Se(),s.children);else{const l=uo(s.children,ue(a));if(l){const u=l.getChild(De(a));r=Ma(r,Se(),u)}}}else throw Ro("WriteRecord should have .snap or .children")}}return r}function mk(t,e,n,r,i){if(!r&&!i){const s=ms(t.visibleWrites,e);if(s!=null)return s;{const o=oi(t.visibleWrites,e);if(wm(o))return n;if(n==null&&!_m(o,Se()))return null;{const a=n||J.EMPTY_NODE;return Eo(o,a)}}}else{const s=oi(t.visibleWrites,e);if(!i&&wm(s))return n;if(!i&&n==null&&!_m(s,Se()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(Pn(u.path,e)||Pn(e,u.path))},a=pk(t.allWrites,o,e),l=n||J.EMPTY_NODE;return Eo(a,l)}}}function aU(t,e,n){let r=J.EMPTY_NODE;const i=ms(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(He,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=oi(t.visibleWrites,e);return n.forEachChild(He,(o,a)=>{const l=Eo(oi(s,new Re(o)),a);r=r.updateImmediateChild(o,l)}),Ow(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=oi(t.visibleWrites,e);return Ow(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function lU(t,e,n,r,i){O(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=nt(e,n);if(_m(t.visibleWrites,s))return null;{const o=oi(t.visibleWrites,s);return wm(o)?i.getChild(n):Eo(o,i.getChild(n))}}function uU(t,e,n,r){const i=nt(e,n),s=ms(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=oi(t.visibleWrites,i);return Eo(o,r.getNode().getImmediateChild(n))}else return null}function cU(t,e){return ms(t.visibleWrites,e)}function hU(t,e,n,r,i,s,o){let a;const l=oi(t.visibleWrites,e),u=ms(l,Se());if(u!=null)a=u;else if(n!=null)a=Eo(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const c=[],h=o.getCompare(),d=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let m=d.getNext();for(;m&&c.length<i;)h(m,r)!==0&&c.push(m),m=d.getNext();return c}else return[]}function dU(){return{visibleWrites:Fn.empty(),allWrites:[],lastWriteId:-1}}function uh(t,e,n,r){return mk(t.writeTree,t.treePath,e,n,r)}function Yy(t,e){return aU(t.writeTree,t.treePath,e)}function Mw(t,e,n,r){return lU(t.writeTree,t.treePath,e,n,r)}function ch(t,e){return cU(t.writeTree,nt(t.treePath,e))}function fU(t,e,n,r,i,s){return hU(t.writeTree,t.treePath,e,n,r,i,s)}function Xy(t,e,n){return uU(t.writeTree,t.treePath,e,n)}function gk(t,e){return yk(nt(t.treePath,e),t.writeTree)}function yk(t,e){return{treePath:t,writeTree:e}}/**
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
 */class pU{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;O(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),O(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,Cl(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,El(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,wo(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,Cl(r,e.snapshotNode,i.oldSnap));else throw Ro("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class mU{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const vk=new mU;class Jy{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new ls(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Xy(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:us(this.viewCache_),s=fU(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
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
 */function gU(t){return{filter:t}}function yU(t,e){O(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),O(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function vU(t,e,n,r,i){const s=new pU;let o,a;if(n.type===bn.OVERWRITE){const u=n;u.source.fromUser?o=Em(t,e,u.path,u.snap,r,i,s):(O(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!he(u.path),o=hh(t,e,u.path,u.snap,r,i,a,s))}else if(n.type===bn.MERGE){const u=n;u.source.fromUser?o=wU(t,e,u.path,u.children,r,i,s):(O(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=Cm(t,e,u.path,u.children,r,i,a,s))}else if(n.type===bn.ACK_USER_WRITE){const u=n;u.revert?o=SU(t,e,u.path,r,i,s):o=EU(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===bn.LISTEN_COMPLETE)o=CU(t,e,n.path,r,s);else throw Ro("Unknown operation type: "+n.type);const l=s.getChanges();return _U(e,o,l),{viewCache:o,changes:l}}function _U(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=vm(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(uk(vm(e)))}}function _k(t,e,n,r,i,s){const o=e.eventCache;if(ch(r,n)!=null)return e;{let a,l;if(he(n))if(O(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=us(e),c=u instanceof J?u:J.EMPTY_NODE,h=Yy(r,c);a=t.filter.updateFullNode(e.eventCache.getNode(),h,s)}else{const u=uh(r,us(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=ue(n);if(u===".priority"){O(gi(n)===1,"Can't have a priority with additional path components");const c=o.getNode();l=e.serverCache.getNode();const h=Mw(r,n,c,l);h!=null?a=t.filter.updatePriority(c,h):a=o.getNode()}else{const c=De(n);let h;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const d=Mw(r,n,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(u).updateChild(c,d):h=o.getNode().getImmediateChild(u)}else h=Xy(r,u,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),u,h,c,i,s):a=o.getNode()}}return Oa(e,a,o.isFullyInitialized()||he(n),t.filter.filtersNodes())}}function hh(t,e,n,r,i,s,o,a){const l=e.serverCache;let u;const c=o?t.filter:t.filter.getIndexedFilter();if(he(n))u=c.updateFullNode(l.getNode(),r,null);else if(c.filtersNodes()&&!l.isFiltered()){const m=l.getNode().updateChild(n,r);u=c.updateFullNode(l.getNode(),m,null)}else{const m=ue(n);if(!l.isCompleteForPath(n)&&gi(n)>1)return e;const v=De(n),g=l.getNode().getImmediateChild(m).updateChild(v,r);m===".priority"?u=c.updatePriority(l.getNode(),g):u=c.updateChild(l.getNode(),m,g,v,vk,null)}const h=dk(e,u,l.isFullyInitialized()||he(n),c.filtersNodes()),d=new Jy(i,h,s);return _k(t,h,n,i,d,a)}function Em(t,e,n,r,i,s,o){const a=e.eventCache;let l,u;const c=new Jy(i,e,s);if(he(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=Oa(e,u,!0,t.filter.filtersNodes());else{const h=ue(n);if(h===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),l=Oa(e,u,a.isFullyInitialized(),a.isFiltered());else{const d=De(n),m=a.getNode().getImmediateChild(h);let v;if(he(d))v=r;else{const _=c.getCompleteChild(h);_!=null?ek(d)===".priority"&&_.getChild(nk(d)).isEmpty()?v=_:v=_.updateChild(d,r):v=J.EMPTY_NODE}if(m.equals(v))l=e;else{const _=t.filter.updateChild(a.getNode(),h,v,d,c,o);l=Oa(e,_,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Lw(t,e){return t.eventCache.isCompleteForChild(e)}function wU(t,e,n,r,i,s,o){let a=e;return r.foreach((l,u)=>{const c=nt(n,l);Lw(e,ue(c))&&(a=Em(t,a,c,u,i,s,o))}),r.foreach((l,u)=>{const c=nt(n,l);Lw(e,ue(c))||(a=Em(t,a,c,u,i,s,o))}),a}function Fw(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Cm(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;he(n)?u=r:u=new be(null).setTree(n,r);const c=e.serverCache.getNode();return u.children.inorderTraversal((h,d)=>{if(c.hasChild(h)){const m=e.serverCache.getNode().getImmediateChild(h),v=Fw(t,m,d);l=hh(t,l,new Re(h),v,i,s,o,a)}}),u.children.inorderTraversal((h,d)=>{const m=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!c.hasChild(h)&&!m){const v=e.serverCache.getNode().getImmediateChild(h),_=Fw(t,v,d);l=hh(t,l,new Re(h),_,i,s,o,a)}}),l}function EU(t,e,n,r,i,s,o){if(ch(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(he(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return hh(t,e,n,l.getNode().getChild(n),i,s,a,o);if(he(n)){let u=new be(null);return l.getNode().forEachChild(eo,(c,h)=>{u=u.set(new Re(c),h)}),Cm(t,e,n,u,i,s,a,o)}else return e}else{let u=new be(null);return r.foreach((c,h)=>{const d=nt(n,c);l.isCompleteForPath(d)&&(u=u.set(c,l.getNode().getChild(d)))}),Cm(t,e,n,u,i,s,a,o)}}function CU(t,e,n,r,i){const s=e.serverCache,o=dk(e,s.getNode(),s.isFullyInitialized()||he(n),s.isFiltered());return _k(t,o,n,r,vk,i)}function SU(t,e,n,r,i,s){let o;if(ch(r,n)!=null)return e;{const a=new Jy(r,e,i),l=e.eventCache.getNode();let u;if(he(n)||ue(n)===".priority"){let c;if(e.serverCache.isFullyInitialized())c=uh(r,us(e));else{const h=e.serverCache.getNode();O(h instanceof J,"serverChildren would be complete if leaf node"),c=Yy(r,h)}c=c,u=t.filter.updateFullNode(l,c,s)}else{const c=ue(n);let h=Xy(r,c,e.serverCache);h==null&&e.serverCache.isCompleteForChild(c)&&(h=l.getImmediateChild(c)),h!=null?u=t.filter.updateChild(l,c,h,De(n),a,s):e.eventCache.getNode().hasChild(c)?u=t.filter.updateChild(l,c,J.EMPTY_NODE,De(n),a,s):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=uh(r,us(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||ch(r,Se())!=null,Oa(e,u,o,t.filter.filtersNodes())}}/**
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
 */class IU{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Hy(r.getIndex()),s=j$(r);this.processor_=gU(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(J.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(J.EMPTY_NODE,a.getNode(),null),c=new ls(l,o.isFullyInitialized(),i.filtersNodes()),h=new ls(u,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=Cd(h,c),this.eventGenerator_=new Y$(this.query_)}get query(){return this.query_}}function TU(t){return t.viewCache_.serverCache.getNode()}function kU(t,e){const n=us(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!he(e)&&!n.getImmediateChild(ue(e)).isEmpty())?n.getChild(e):null}function $w(t){return t.eventRegistrations_.length===0}function NU(t,e){t.eventRegistrations_.push(e)}function Uw(t,e,n){const r=[];if(n){O(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function Vw(t,e,n,r){e.type===bn.MERGE&&e.source.queryId!==null&&(O(us(t.viewCache_),"We should always have a full cache before handling merges"),O(vm(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=vU(t.processor_,i,e,n,r);return yU(t.processor_,s.viewCache),O(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,wk(t,s.changes,s.viewCache.eventCache.getNode(),null)}function RU(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(He,(s,o)=>{r.push(wo(s,o))}),n.isFullyInitialized()&&r.push(uk(n.getNode())),wk(t,r,n.getNode(),e)}function wk(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return X$(t.eventGenerator_,e,n,i)}/**
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
 */let dh;class AU{constructor(){this.views=new Map}}function DU(t){O(!dh,"__referenceConstructor has already been defined"),dh=t}function xU(){return O(dh,"Reference.ts has not been loaded"),dh}function PU(t){return t.views.size===0}function Zy(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return O(s!=null,"SyncTree gave us an op for an invalid query."),Vw(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(Vw(o,e,n,r));return s}}function bU(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=uh(n,i?r:null),l=!1;a?l=!0:r instanceof J?(a=Yy(n,r),l=!1):(a=J.EMPTY_NODE,l=!1);const u=Cd(new ls(a,l,!1),new ls(r,i,!1));return new IU(e,u)}return o}function OU(t,e,n,r,i,s){const o=bU(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),NU(o,n),RU(o,n)}function MU(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=yi(t);if(i==="default")for(const[l,u]of t.views.entries())o=o.concat(Uw(u,n,r)),$w(u)&&(t.views.delete(l),u.query._queryParams.loadsAllData()||s.push(u.query));else{const l=t.views.get(i);l&&(o=o.concat(Uw(l,n,r)),$w(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!yi(t)&&s.push(new(xU())(e._repo,e._path)),{removed:s,events:o}}function Ek(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function to(t,e){let n=null;for(const r of t.views.values())n=n||kU(r,e);return n}function Ck(t,e){if(e._queryParams.loadsAllData())return Sd(t);{const r=e._queryIdentifier;return t.views.get(r)}}function Sk(t,e){return Ck(t,e)!=null}function yi(t){return Sd(t)!=null}function Sd(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let fh;function LU(t){O(!fh,"__referenceConstructor has already been defined"),fh=t}function FU(){return O(fh,"Reference.ts has not been loaded"),fh}let $U=1;class zw{constructor(e){this.listenProvider_=e,this.syncPointTree_=new be(null),this.pendingWriteTree_=dU(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Ik(t,e,n,r,i){return tU(t.pendingWriteTree_,e,n,r,i),i?au(t,new as(hk(),e,n)):[]}function Ui(t,e,n=!1){const r=nU(t.pendingWriteTree_,e);if(rU(t.pendingWriteTree_,e)){let s=new be(null);return r.snap!=null?s=s.set(Se(),!0):nn(r.children,o=>{s=s.set(new Re(o),!0)}),au(t,new lh(r.path,s,n))}else return[]}function Id(t,e,n){return au(t,new as(Gy(),e,n))}function UU(t,e,n){const r=be.fromObject(n);return au(t,new Tl(Gy(),e,r))}function VU(t,e){return au(t,new Il(Gy(),e))}function zU(t,e,n){const r=tv(t,n);if(r){const i=nv(r),s=i.path,o=i.queryId,a=Yt(s,e),l=new Il(Ky(o),a);return rv(t,s,l)}else return[]}function Sm(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||Sk(o,e))){const l=MU(o,e,n,r);PU(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=l.removed;if(a=l.events,!i){const c=u.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(s,(d,m)=>yi(m));if(c&&!h){const d=t.syncPointTree_.subtree(s);if(!d.isEmpty()){const m=WU(d);for(let v=0;v<m.length;++v){const _=m[v],g=_.query,p=Nk(t,_);t.listenProvider_.startListening(La(g),ph(t,g),p.hashFn,p.onComplete)}}}!h&&u.length>0&&!r&&(c?t.listenProvider_.stopListening(La(e),null):u.forEach(d=>{const m=t.queryToTagMap.get(Td(d));t.listenProvider_.stopListening(La(d),m)}))}HU(t,u)}return a}function BU(t,e,n,r){const i=tv(t,r);if(i!=null){const s=nv(i),o=s.path,a=s.queryId,l=Yt(o,e),u=new as(Ky(a),l,n);return rv(t,o,u)}else return[]}function jU(t,e,n,r){const i=tv(t,r);if(i){const s=nv(i),o=s.path,a=s.queryId,l=Yt(o,e),u=be.fromObject(n),c=new Tl(Ky(a),l,u);return rv(t,o,c)}else return[]}function Bw(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,m)=>{const v=Yt(d,i);s=s||to(m,v),o=o||yi(m)});let a=t.syncPointTree_.get(i);a?(o=o||yi(a),s=s||to(a,Se())):(a=new AU,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=J.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((m,v)=>{const _=to(v,Se());_&&(s=s.updateImmediateChild(m,_))}));const u=Sk(a,e);if(!u&&!e._queryParams.loadsAllData()){const d=Td(e);O(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const m=qU();t.queryToTagMap.set(d,m),t.tagToQueryMap.set(m,d)}const c=Qy(t.pendingWriteTree_,i);let h=OU(a,e,n,c,s,l);if(!u&&!o&&!r){const d=Ck(a,e);h=h.concat(GU(t,e,d))}return h}function ev(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Yt(o,e),u=to(a,l);if(u)return u});return mk(i,e,s,n,!0)}function au(t,e){return Tk(e,t.syncPointTree_,null,Qy(t.pendingWriteTree_,Se()))}function Tk(t,e,n,r){if(he(t.path))return kk(t,e,n,r);{const i=e.get(Se());n==null&&i!=null&&(n=to(i,Se()));let s=[];const o=ue(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,c=gk(r,o);s=s.concat(Tk(a,l,u,c))}return i&&(s=s.concat(Zy(i,t,r,n))),s}}function kk(t,e,n,r){const i=e.get(Se());n==null&&i!=null&&(n=to(i,Se()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=gk(r,o),c=t.operationForChild(o);c&&(s=s.concat(kk(c,a,l,u)))}),i&&(s=s.concat(Zy(i,t,r,n))),s}function Nk(t,e){const n=e.query,r=ph(t,n);return{hashFn:()=>(TU(e)||J.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?zU(t,n._path,r):VU(t,n._path);{const s=B2(i,n);return Sm(t,n,null,s)}}}}function ph(t,e){const n=Td(e);return t.queryToTagMap.get(n)}function Td(t){return t._path.toString()+"$"+t._queryIdentifier}function tv(t,e){return t.tagToQueryMap.get(e)}function nv(t){const e=t.indexOf("$");return O(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Re(t.substr(0,e))}}function rv(t,e,n){const r=t.syncPointTree_.get(e);O(r,"Missing sync point for query tag that we're tracking");const i=Qy(t.pendingWriteTree_,e);return Zy(r,n,i,null)}function WU(t){return t.fold((e,n,r)=>{if(n&&yi(n))return[Sd(n)];{let i=[];return n&&(i=Ek(n)),nn(r,(s,o)=>{i=i.concat(o)}),i}})}function La(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(FU())(t._repo,t._path):t}function HU(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Td(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function qU(){return $U++}function GU(t,e,n){const r=e._path,i=ph(t,e),s=Nk(t,n),o=t.listenProvider_.startListening(La(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)O(!yi(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((u,c,h)=>{if(!he(u)&&c&&yi(c))return[Sd(c).query];{let d=[];return c&&(d=d.concat(Ek(c).map(m=>m.query))),nn(h,(m,v)=>{d=d.concat(v)}),d}});for(let u=0;u<l.length;++u){const c=l[u];t.listenProvider_.stopListening(La(c),ph(t,c))}}return o}/**
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
 */class iv{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new iv(n)}node(){return this.node_}}class sv{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=nt(this.path_,e);return new sv(this.syncTree_,n)}node(){return ev(this.syncTree_,this.path_)}}const KU=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},jw=function(t,e,n){if(!t||typeof t!="object")return t;if(O(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return QU(t[".sv"],e,n);if(typeof t[".sv"]=="object")return YU(t[".sv"],e);O(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},QU=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:O(!1,"Unexpected server value: "+t)}},YU=function(t,e,n){t.hasOwnProperty("increment")||O(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&O(!1,"Unexpected increment value: "+r);const i=e.node();if(O(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},XU=function(t,e,n,r){return ov(e,new sv(n,t),r)},Rk=function(t,e,n){return ov(t,new iv(e),n)};function ov(t,e,n){const r=t.getPriority().val(),i=jw(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=jw(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new lt(a,_t(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new lt(i))),o.forEachChild(He,(a,l)=>{const u=ov(l,e.getImmediateChild(a),n);u!==l&&(s=s.updateImmediateChild(a,u))}),s}}/**
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
 */class av{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function lv(t,e){let n=e instanceof Re?e:new Re(e),r=t,i=ue(n);for(;i!==null;){const s=uo(r.node.children,i)||{children:{},childCount:0};r=new av(i,r,s),n=De(n),i=ue(n)}return r}function Vo(t){return t.node.value}function Ak(t,e){t.node.value=e,Im(t)}function Dk(t){return t.node.childCount>0}function JU(t){return Vo(t)===void 0&&!Dk(t)}function kd(t,e){nn(t.node.children,(n,r)=>{e(new av(n,t,r))})}function xk(t,e,n,r){n&&!r&&e(t),kd(t,i=>{xk(i,e,!0,r)}),n&&r&&e(t)}function ZU(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function lu(t){return new Re(t.parent===null?t.name:lu(t.parent)+"/"+t.name)}function Im(t){t.parent!==null&&eV(t.parent,t.name,t)}function eV(t,e,n){const r=JU(n),i=xr(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Im(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Im(t))}/**
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
 */const tV=/[\[\].#$\/\u0000-\u001F\u007F]/,nV=/[\[\].#$\u0000-\u001F\u007F]/,bf=10*1024*1024,Pk=function(t){return typeof t=="string"&&t.length!==0&&!tV.test(t)},bk=function(t){return typeof t=="string"&&t.length!==0&&!nV.test(t)},rV=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),bk(t)},Ok=function(t,e,n,r){r&&e===void 0||uv(Rg(t,"value"),e,n)},uv=function(t,e,n){const r=n instanceof Re?new E$(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Di(r));if(typeof e=="function")throw new Error(t+"contains a function "+Di(r)+" with contents = "+e.toString());if(bT(e))throw new Error(t+"contains "+e.toString()+" "+Di(r));if(typeof e=="string"&&e.length>bf/3&&Lh(e)>bf)throw new Error(t+"contains a string greater than "+bf+" utf8 bytes "+Di(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(nn(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Pk(o)))throw new Error(t+" contains an invalid key ("+o+") "+Di(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);C$(r,o),uv(t,a,r),S$(r)}),i&&s)throw new Error(t+' contains ".value" child '+Di(r)+" in addition to actual children.")}},Mk=function(t,e,n,r){if(!(r&&n===void 0)&&!bk(n))throw new Error(Rg(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},iV=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Mk(t,e,n,r)},Lk=function(t,e){if(ue(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},sV=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Pk(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!rV(n))throw new Error(Rg(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class oV{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function cv(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!By(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function Fk(t,e,n){cv(t,n),$k(t,r=>By(r,e))}function Rr(t,e,n){cv(t,n),$k(t,r=>Pn(r,e)||Pn(e,r))}function $k(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(aV(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function aV(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Hi&&bt("event: "+n.toString()),Uo(r)}}}/**
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
 */const lV="repo_interrupt",uV=25;class cV{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new oV,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ah(),this.transactionQueueTree_=new av,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function hV(t,e,n){if(t.stats_=Vy(t.repoInfo_),t.forceRestClient_||q2())t.server_=new oh(t.repoInfo_,(r,i,s,o)=>{Ww(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Hw(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{pt(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new yr(t.repoInfo_,e,(r,i,s,o)=>{Ww(t,r,i,s,o)},r=>{Hw(t,r)},r=>{dV(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=X2(t.repoInfo_,()=>new Q$(t.stats_,t.server_)),t.infoData_=new W$,t.infoSyncTree_=new zw({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=Id(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),dv(t,"connected",!1),t.serverSyncTree_=new zw({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const u=o(a,l);Rr(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function Uk(t){const n=t.infoData_.getNode(new Re(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function hv(t){return KU({timestamp:Uk(t)})}function Ww(t,e,n,r,i){t.dataUpdateCount++;const s=new Re(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=Oc(n,u=>_t(u));o=jU(t.serverSyncTree_,s,l,i)}else{const l=_t(n);o=BU(t.serverSyncTree_,s,l,i)}else if(r){const l=Oc(n,u=>_t(u));o=UU(t.serverSyncTree_,s,l)}else{const l=_t(n);o=Id(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=Nd(t,s)),Rr(t.eventQueue_,a,o)}function Hw(t,e){dv(t,"connected",e),e===!1&&pV(t)}function dV(t,e){nn(e,(n,r)=>{dv(t,n,r)})}function dv(t,e,n){const r=new Re("/.info/"+e),i=_t(n);t.infoData_.updateSnapshot(r,i);const s=Id(t.infoSyncTree_,r,i);Rr(t.eventQueue_,r,s)}function Vk(t){return t.nextWriteId_++}function fV(t,e,n,r,i){fv(t,"set",{path:e.toString(),value:n,priority:r});const s=hv(t),o=_t(n,r),a=ev(t.serverSyncTree_,e),l=Rk(o,a,s),u=Vk(t),c=Ik(t.serverSyncTree_,e,l,u,!0);cv(t.eventQueue_,c),t.server_.put(e.toString(),o.val(!0),(d,m)=>{const v=d==="ok";v||tn("set at "+e+" failed: "+d);const _=Ui(t.serverSyncTree_,u,!v);Rr(t.eventQueue_,e,_),yV(t,i,d,m)});const h=Hk(t,e);Nd(t,h),Rr(t.eventQueue_,h,[])}function pV(t){fv(t,"onDisconnectEvents");const e=hv(t),n=ah();ym(t.onDisconnect_,Se(),(i,s)=>{const o=XU(i,s,t.serverSyncTree_,e);ck(n,i,o)});let r=[];ym(n,Se(),(i,s)=>{r=r.concat(Id(t.serverSyncTree_,i,s));const o=Hk(t,i);Nd(t,o)}),t.onDisconnect_=ah(),Rr(t.eventQueue_,Se(),r)}function mV(t,e,n){let r;ue(e._path)===".info"?r=Bw(t.infoSyncTree_,e,n):r=Bw(t.serverSyncTree_,e,n),Fk(t.eventQueue_,e._path,r)}function qw(t,e,n){let r;ue(e._path)===".info"?r=Sm(t.infoSyncTree_,e,n):r=Sm(t.serverSyncTree_,e,n),Fk(t.eventQueue_,e._path,r)}function gV(t){t.persistentConnection_&&t.persistentConnection_.interrupt(lV)}function fv(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),bt(n,...e)}function yV(t,e,n,r){e&&Uo(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function zk(t,e,n){return ev(t.serverSyncTree_,e,n)||J.EMPTY_NODE}function pv(t,e=t.transactionQueueTree_){if(e||Rd(t,e),Vo(e)){const n=jk(t,e);O(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&vV(t,lu(e),n)}else Dk(e)&&kd(e,n=>{pv(t,n)})}function vV(t,e,n){const r=n.map(u=>u.currentWriteId),i=zk(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const c=n[u];O(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const h=Yt(e,c.path);s=s.updateChild(h,c.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,u=>{fv(t,"transaction put response",{path:l.toString(),status:u});let c=[];if(u==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,c=c.concat(Ui(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();Rd(t,lv(t.transactionQueueTree_,e)),pv(t,t.transactionQueueTree_),Rr(t.eventQueue_,e,c);for(let d=0;d<h.length;d++)Uo(h[d])}else{if(u==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{tn("transaction at "+l.toString()+" failed: "+u);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=u}Nd(t,e)}},o)}function Nd(t,e){const n=Bk(t,e),r=lu(n),i=jk(t,n);return _V(t,i,r),r}function _V(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=Yt(n,l.path);let c=!1,h;if(O(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)c=!0,h=l.abortReason,i=i.concat(Ui(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=uV)c=!0,h="maxretry",i=i.concat(Ui(t.serverSyncTree_,l.currentWriteId,!0));else{const d=zk(t,l.path,o);l.currentInputSnapshot=d;const m=e[a].update(d.val());if(m!==void 0){uv("transaction failed: Data returned ",m,l.path);let v=_t(m);typeof m=="object"&&m!=null&&xr(m,".priority")||(v=v.updatePriority(d.getPriority()));const g=l.currentWriteId,p=hv(t),f=Rk(v,d,p);l.currentOutputSnapshotRaw=v,l.currentOutputSnapshotResolved=f,l.currentWriteId=Vk(t),o.splice(o.indexOf(g),1),i=i.concat(Ik(t.serverSyncTree_,l.path,f,l.currentWriteId,l.applyLocally)),i=i.concat(Ui(t.serverSyncTree_,g,!0))}else c=!0,h="nodata",i=i.concat(Ui(t.serverSyncTree_,l.currentWriteId,!0))}Rr(t.eventQueue_,n,i),i=[],c&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(h),!1,null))))}Rd(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)Uo(r[a]);pv(t,t.transactionQueueTree_)}function Bk(t,e){let n,r=t.transactionQueueTree_;for(n=ue(e);n!==null&&Vo(r)===void 0;)r=lv(r,n),e=De(e),n=ue(e);return r}function jk(t,e){const n=[];return Wk(t,e,n),n.sort((r,i)=>r.order-i.order),n}function Wk(t,e,n){const r=Vo(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);kd(e,i=>{Wk(t,i,n)})}function Rd(t,e){const n=Vo(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,Ak(e,n.length>0?n:void 0)}kd(e,r=>{Rd(t,r)})}function Hk(t,e){const n=lu(Bk(t,e)),r=lv(t.transactionQueueTree_,e);return ZU(r,i=>{Of(t,i)}),Of(t,r),xk(r,i=>{Of(t,i)}),n}function Of(t,e){const n=Vo(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(O(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(O(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Ui(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?Ak(e,void 0):n.length=s+1,Rr(t.eventQueue_,lu(e),i);for(let o=0;o<r.length;o++)Uo(r[o])}}/**
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
 */function wV(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function EV(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):tn(`Invalid query segment '${n}' in query '${t}'`)}return e}const Gw=function(t,e){const n=CV(t),r=n.namespace;n.domain==="firebase.com"&&Nr(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Nr("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||F2();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new HT(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new Re(n.pathString)}},CV=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let c=t.indexOf("/");c===-1&&(c=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(c,h)),c<h&&(i=wV(t.substring(c,h)));const d=EV(t.substring(Math.min(t.length,h)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const m=e.slice(0,u);if(m.toLowerCase()==="localhost")n="localhost";else if(m.split(".").length<=2)n=m;else{const v=e.indexOf(".");r=e.substring(0,v).toLowerCase(),n=e.substring(v+1),s=r}"ns"in d&&(s=d.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
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
 */const Kw="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",SV=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=Kw.charAt(n%64),n=Math.floor(n/64);O(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=Kw.charAt(e[i]);return O(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */class qk{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+pt(this.snapshot.exportVal())}}class Gk{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class IV{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return O(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class mv{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return he(this._path)?null:ek(this._path)}get ref(){return new Pr(this._repo,this._path)}get _queryIdentifier(){const e=Dw(this._queryParams),n=$y(e);return n==="{}"?"default":n}get _queryObject(){return Dw(this._queryParams)}isEqual(e){if(e=Ve(e),!(e instanceof mv))return!1;const n=this._repo===e._repo,r=By(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+w$(this._path)}}class Pr extends mv{constructor(e,n){super(e,n,new qy,!1)}get parent(){const e=nk(this._path);return e===null?null:new Pr(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class kl{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new Re(e),r=Co(this.ref,e);return new kl(this._node.getChild(n),r,He)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new kl(i,Co(this.ref,r),He)))}hasChild(e){const n=new Re(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Qw(t,e){return t=Ve(t),t._checkNotDeleted("ref"),e!==void 0?Co(t._root,e):t._root}function Co(t,e){return t=Ve(t),ue(t._path)===null?iV("child","path",e,!1):Mk("child","path",e,!1),new Pr(t._repo,nt(t._path,e))}function TV(t,e){t=Ve(t),Lk("push",t._path),Ok("push",e,t._path,!0);const n=Uk(t._repo),r=SV(n),i=Co(t,r),s=Co(t,r);let o;return e!=null?o=Kk(s,e).then(()=>s):o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function Kk(t,e){t=Ve(t),Lk("set",t._path),Ok("set",e,t._path,!1);const n=new Mh;return fV(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}class gv{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new qk("value",this,new kl(e.snapshotNode,new Pr(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Gk(this,e,n):null}matches(e){return e instanceof gv?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class yv{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Gk(this,e,n):null}createEvent(e,n){O(e.childName!=null,"Child events should have a childName.");const r=Co(new Pr(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new qk(e.type,this,new kl(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof yv?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function kV(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const l=n,u=(c,h)=>{qw(t._repo,t,a),l(c,h)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new IV(n,s||void 0),a=e==="value"?new gv(o):new yv(e,o);return mV(t._repo,t,a),()=>qw(t._repo,t,a)}function NV(t,e,n,r){return kV(t,"child_added",e,n,r)}DU(Pr);LU(Pr);/**
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
 */const RV="FIREBASE_DATABASE_EMULATOR_HOST",Tm={};let AV=!1;function DV(t,e,n,r){t.repoInfo_=new HT(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function xV(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Nr("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),bt("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Gw(s,i),a=o.repoInfo,l,u;typeof process<"u"&&process.env&&(u=process.env[RV]),u?(l=!0,s=`http://${u}?ns=${a.namespace}`,o=Gw(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const c=i&&l?new Zs(Zs.OWNER):new K2(t.name,t.options,e);sV("Invalid Firebase Database URL",o),he(o.path)||Nr("Database URL must point to the root of a Firebase Database (not including a child path).");const h=bV(a,t,c,new G2(t.name,n));return new OV(h,t)}function PV(t,e){const n=Tm[e];(!n||n[t.key]!==t)&&Nr(`Database ${e}(${t.repoInfo_}) has already been deleted.`),gV(t),delete n[t.key]}function bV(t,e,n,r){let i=Tm[e.name];i||(i={},Tm[e.name]=i);let s=i[t.toURLString()];return s&&Nr("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new cV(t,AV,n,r),i[t.toURLString()]=s,s}class OV{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(hV(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Pr(this._repo,Se())),this._rootInternal}_delete(){return this._rootInternal!==null&&(PV(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Nr("Cannot call "+e+" on a deleted database.")}}function MV(t=Dg(),e){const n=$h(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=RC("database");r&&LV(n,...r)}return n}function LV(t,e,n,r={}){t=Ve(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Nr("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Nr('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Zs(Zs.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:DC(r.mockUserToken,t.app.options.projectId);s=new Zs(o)}DV(i,e,n,s)}/**
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
 */function FV(t){P2(Do),es(new hi("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return xV(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Qn(fw,pw,t),Qn(fw,pw,"esm2017")}yr.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};yr.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};FV();const $V={apiKey:"AIzaSyB9mhGhX7XmhYk2c32gGnNbLJVdwbzU2rg",authDomain:"react-home-dashboard.firebaseapp.com",projectId:"react-home-dashboard",storageBucket:"react-home-dashboard.appspot.com",messagingSenderId:"1043759629603",appId:"1:1043759629603:web:e5c9b3c9e1928849f5b896"},vv=LC($V),mh=mS(vv),Mt=f2(vv),Yw=MV(vv),UV=()=>{const[t,e]=C.useState(!0),[n,r]=C.useState(null),[i,s]=C.useState(!0),o=AD();return C.useEffect(()=>{const a=mb(mh,l=>{s(!1),l!==null?(r(l),e(!!l)):(r(null),e(!1)),console.log("Our user is: ",l)});return i||o(t?"/":"/login"),a},[t,i]),w(No.Provider,{value:n,children:i?w("div",{children:"Loading..."}):w(BD,{})})},VV=()=>{const[t,e]=C.useState(""),[n,r]=C.useState("");function i(){hb(mh,t,n).then(({user:o})=>{console.log(o)})}function s(){db(mh,t,n).then(({user:o})=>{console.log(o)})}return w("div",{className:"container",children:q("div",{className:"login",children:[w("div",{children:"Login / Create Account"}),w("input",{type:"email",value:t,onChange:o=>e(o.target.value),placeholder:"Email"}),w("input",{type:"password",value:n,onChange:o=>r(o.target.value),placeholder:"Password"}),q("div",{className:"login-controls",children:[w("button",{className:"secondary",onClick:i,children:"Create Account"}),w("button",{onClick:s,children:"Sign In"})]})]})})},zV=()=>{const t=C.useContext(No),[e,n]=C.useState([]),[r,i]=C.useState([]),[s,o]=C.useState(null),[a,l]=C.useState(""),[u,c]=C.useState(""),[h,d]=C.useState(""),[m,v]=C.useState("");C.useEffect(()=>{async function f(){const y=await _d(gd(mi(Mt,"rooms"),vd("creatorId","==",t.uid))),E=[];y.forEach(T=>{E.push({...T.data(),id:T.id})}),i(E)}f()},[]),console.log(r),C.useEffect(()=>{if(n([]),!s)return;const f=Qw(Yw,`/messages/${s.id}`);return NV(f,E=>{console.log("Message recieved");const T={...E.val(),id:E.key};n(D=>[T,...D])})},[s]);async function _(){if(!m||!h)return;const f={name:h,code:m,creatorId:t.uid},y=await wd(mi(Mt,"rooms"),f);f.id=y.id,i([...r,f])}function g(f){o(f)}function p(){const f=Qw(Yw,`/messages/${s.id}`),y=TV(f);Kk(y,{authorId:t.uid,authorEmail:t.email,content:u})}return q("div",{className:"panels",children:[q("div",{className:"rooms-panel",children:[w("h2",{children:"Rooms"}),q("div",{className:"create-room",children:[w("input",{type:"text",placeholder:"Room Name",value:h,onChange:f=>d(f.target.value)}),w("input",{type:"text",placeholder:"Code",value:m,onChange:f=>v(f.target.value)}),w("div",{className:"create-room-controls",children:w("button",{onClick:_,children:"Create Room"})})]}),w("div",{children:r.map(f=>q("div",{className:"room",children:[w("div",{children:f.name}),w("button",{onClick:()=>g(f),children:"Join"})]},f.id))})]}),s?q("div",{className:"chat-panel",children:[w("div",{className:"messages",children:e.map(f=>q("div",{children:[w("h3",{children:f.authorEmail}),f.content]},f.id))}),q("div",{className:"chatbar",children:[w("input",{type:"text",className:"chat-input",placeholder:"Message",value:u,onChange:f=>c(f.target.value)}),w("button",{className:"send-button",onClick:p,children:"Send"})]})]}):q("div",{className:"join-room",children:[w("h2",{children:"Chat"}),w("input",{type:"text",value:a,onChange:f=>l(f.target.value),placeholder:"Room Code"}),w("button",{children:"Join"}),w("button",{onClick:()=>iS(mh),children:"Logout"})]})]})};var Qk={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Xw=ut.createContext&&ut.createContext(Qk),ai=globalThis&&globalThis.__assign||function(){return ai=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},ai.apply(this,arguments)},BV=globalThis&&globalThis.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n};function Yk(t){return t&&t.map(function(e,n){return ut.createElement(e.tag,ai({key:n},e.attr),Yk(e.child))})}function tr(t){return function(e){return ut.createElement(jV,ai({attr:ai({},t.attr)},e),Yk(t.child))}}function jV(t){var e=function(n){var r=t.attr,i=t.size,s=t.title,o=BV(t,["attr","size","title"]),a=i||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),ut.createElement("svg",ai({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:l,style:ai(ai({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&ut.createElement("title",null,s),t.children)};return Xw!==void 0?ut.createElement(Xw.Consumer,null,function(n){return e(n)}):e(Qk)}function WV(t){return tr({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88a9.947 9.947 0 0112.28 0C16.43 19.18 14.03 20 12 20z"}}]})(t)}function Xk(t){return tr({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}}]})(t)}function HV(t){return tr({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"}}]})(t)}function qV(t){return tr({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 00.12-.61l-1.92-3.32a.488.488 0 00-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 00-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 00-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"}}]})(t)}function GV(t){return tr({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}}]})(t)}function _v(t){return tr({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}}]})(t)}function Jw(t){return tr({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M12 5V2L8 6l4 4V7c3.31 0 6 2.69 6 6 0 2.97-2.17 5.43-5 5.91v2.02c3.95-.49 7-3.85 7-7.93 0-4.42-3.58-8-8-8zM6 13c0-1.65.67-3.15 1.76-4.24L6.34 7.34A8.014 8.014 0 004 13c0 4.08 3.05 7.44 7 7.93v-2.02c-2.83-.48-5-2.94-5-5.91z"}}]})(t)}function KV(t){return tr({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 000-1.41l-2.34-2.34a.996.996 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}}]})(t)}function li(t){return tr({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}}]})(t)}function QV(t){return tr({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"}}]})(t)}const YV=()=>{const t=C.useContext(No),[e,n]=C.useState(0),[r,i]=C.useState([]),[s,o]=C.useState(""),[a,l]=C.useState(""),[u,c]=C.useState(""),[h,d]=C.useState(!1),[m,v]=C.useState(null),[_,g]=C.useState();C.useEffect(()=>{f()},[]),C.useEffect(()=>{clearTimeout(_),m!=null&&g(setTimeout(()=>{v(null)},3e3))},[m]),C.useEffect(()=>{e===0&&(l(""),c(""))},[e]);function p(I,R){v({message:I,type:R})}async function f(){const I=await _d(gd(mi(Mt,"grocery_items"),vd("creatorId","==",t.uid))),R=[];I.forEach(ie=>{R.push({...ie.data(),id:ie.id})}),i(R)}async function y(){if(!s)return;const I={content:s,isCompleted:!1,creatorId:t.uid},R=await wd(mi(Mt,"grocery_items"),I);I.id=R.id,i([...r,I])}async function E(I){I.isCompleted=!0,Ly(gr(Mt,"grocery_items",I.id));const R=r.filter(ie=>ie.id!=I.id);i(R),p(`Completed ${I.content}`,"success")}function T(I){n(2),l(I.id),c(I.content)}async function D(I){const R=gr(Mt,"grocery_items",a);try{await _l(R,{content:I}),i([]),f(),n(0),p(`Updated "${I}"`,"success")}catch(ie){alert(ie),p(`Error: Could not update "${I}"`,"error")}}return q(ft,{children:[q("div",{className:"widget__header",children:[w("div",{className:"widget__title",children:"Grocery List"}),w("div",{className:"widget__action",children:e===0?w("button",{onClick:()=>n(1),children:w(_v,{className:"widget__action__icon"})}):e===1?w("button",{onClick:()=>n(0),children:w(li,{className:"widget__action__icon"})}):e===2?w("button",{onClick:()=>n(0),children:w(li,{className:"widget__action__icon"})}):w(ft,{})})]}),w("div",{className:"widget__content",children:e===0?w("div",{children:r.map(I=>q("span",{className:"checklist-item",children:[w("input",{type:"checkbox",checked:I.isCompleted,onChange:()=>E(I)}),w("p",{className:"todo-info",onClick:()=>{T(I)},children:I.content})]},I.id))}):e===1?w("div",{className:"flip",children:q("form",{onSubmit:I=>{s!=null&&y(),h||n(0),o(""),I.preventDefault()},children:[w("input",{type:"text",placeholder:"Grocery item...",value:s,onChange:I=>o(I.target.value)}),w("input",{type:"submit",value:"Save"}),q("p",{className:"add-another",children:[w("input",{type:"checkbox",checked:h,onChange:()=>{d(!h)}}),"Add another"]})]})}):e===2?w("div",{className:"flip",children:q("form",{onSubmit:I=>{u!=null&&D(u),I.preventDefault()},children:[w("input",{type:"text",value:u,onChange:I=>c(I.target.value)}),w("input",{type:"submit",value:"Save"})]})}):w(ft,{})}),m!=null?w("div",{className:`toast toast--${m.type}`,children:m.message}):w(ft,{})]})},XV=()=>{const t=C.useContext(No),[e,n]=C.useState(0),[r,i]=C.useState([]),[s,o]=C.useState(""),[a,l]=C.useState(0),[u,c]=C.useState(""),[h,d]=C.useState(""),[m,v]=C.useState(0),[_,g]=C.useState(!1),[p,f]=C.useState(null),[y,E]=C.useState();C.useEffect(()=>{D()},[]),C.useEffect(()=>{clearTimeout(y),p!=null&&E(setTimeout(()=>{f(null)},3e3))},[p]),C.useEffect(()=>{e===0&&(c(""),d(""),v(0))},[e]);function T(V,_e){f({message:V,type:_e})}async function D(){const V=await _d(gd(mi(Mt,"pets"),vd("creatorId","==",t.uid))),_e=[];V.forEach(Ie=>{_e.push({...Ie.data(),id:Ie.id})}),i(_e)}async function I(){if(!s)return;const V={name:s,freq_hr:1,was_fed:!1,creatorId:t.uid},_e=await wd(mi(Mt,"pets"),V);V.id=_e.id,i([...r,V])}function R(V){n(2),c(V.id),d(V.name),v(V.freq_hr)}async function ie(V){V.was_fed=!V.was_fed,i([...r]);const _e=gr(Mt,"pets",V.id);try{await _l(_e,{was_fed:V.was_fed}),V.was_fed?T(`Fed ${V.name}`,"success"):T(`Marked ${V.name} as unfed`,"info")}catch(Ie){alert(Ie),T(`Error: Could not update ${V.name}`,"error")}}async function Q(V){const _e=gr(Mt,"pets",u);try{await _l(_e,{name:V}),i([]),D(),n(0),T(`Updated "${V}"`,"success")}catch(Ie){alert(Ie),T(`Error: Could not update "${V}"`,"error")}}function Ce(V,_e){confirm(`Are you sure you want to delete ${_e}?`)&&at(V)}async function at(V){try{await Ly(gr(Mt,"pets",V)),T(`Deleted ${h}`,"success");const _e=r.filter(Ie=>Ie.id!=V);i(_e),d(""),c(""),n(0)}catch(_e){alert(_e),T(`Error: Unable to delete ${h}`,"error")}}return q(ft,{children:[q("div",{className:"widget__header",children:[w("div",{className:"widget__title",children:"Pet Feeding Tracker"}),w("div",{className:"widget__action",children:e===0?w("button",{onClick:()=>n(1),children:w(_v,{className:"widget__action__icon"})}):e===1?w("button",{onClick:()=>n(0),children:w(li,{className:"widget__action__icon"})}):e===2?w("button",{onClick:()=>n(0),children:w(li,{className:"widget__action__icon"})}):w(ft,{})})]}),w("div",{className:"widget__content",children:e===0?w("div",{children:r.map(V=>q("div",{className:V.was_fed?"pet fed":"pet unfed",children:[w("p",{className:"pet__name",onClick:()=>{ie(V)},children:V.name}),w("button",{className:"pet__action",onClick:()=>{R(V)},children:w(KV,{})})]},V.id))}):e===1?w("div",{className:"flip",children:q("form",{onSubmit:V=>{s!=null&&I(),_||n(0),o(""),l(0),V.preventDefault()},children:[w("input",{type:"text",placeholder:"Pet name...",value:s,onChange:V=>o(V.target.value)}),q("p",{className:"add-another",children:[w("input",{type:"checkbox",checked:_,onChange:()=>{g(!_)}}),"Add another"]}),w("input",{className:"fw-btn",type:"submit",value:"Save"})]})}):e===2?q("div",{className:"flip",children:[q("form",{onSubmit:V=>{h!=null&&Q(h),V.preventDefault()},children:[w("input",{type:"text",value:h,onChange:V=>d(V.target.value)}),w("input",{type:"submit",value:"Save"})]}),w("p",{children:q("button",{className:"fw-btn err-btn",onClick:()=>{Ce(u,h)},children:["Delete ",w(Xk,{})]})})]}):w(ft,{})}),p!=null?w("div",{className:`toast toast--${p.type}`,children:p.message}):w(ft,{})]})};function Fa(){return Fa=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Fa.apply(this,arguments)}var JV=function(e,n){n===void 0&&(n=!0),C.useEffect(function(){if(n){var r=function(s){s.key==="Escape"&&e(s)};return document.addEventListener("keyup",r),function(){n&&document.removeEventListener("keyup",r)}}},[e,n])},ZV=function(e,n){n===void 0&&(n=!0),C.useEffect(function(){if(n){var r=function(){e()};return window.addEventListener("resize",r),function(){n&&window.removeEventListener("resize",r)}}},[e,n])},e3=function(e,n,r){r===void 0&&(r=!0),C.useEffect(function(){if(r){var i=function(o){var a=Array.isArray(e)?e:[e],l=!1;a.forEach(function(u){if(!u.current||u.current.contains(o.target)){l=!0;return}}),o.stopPropagation(),l||n(o)};return document.addEventListener("mousedown",i),document.addEventListener("touchstart",i),function(){r&&(document.removeEventListener("mousedown",i),document.removeEventListener("touchstart",i))}}},[e,n,r])},t3=function(e,n){n===void 0&&(n=!0),C.useEffect(function(){if(n){var r=function(s){if(s.keyCode===9){var o,a=e==null||(o=e.current)===null||o===void 0?void 0:o.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]'),l=Array.prototype.slice.call(a);if(l.length===1){s.preventDefault();return}var u=l[0],c=l[l.length-1];s.shiftKey&&document.activeElement===u?(s.preventDefault(),c.focus()):document.activeElement===c&&(s.preventDefault(),u.focus())}};return document.addEventListener("keydown",r),function(){n&&document.removeEventListener("keydown",r)}}},[e,n])},n3=typeof window<"u"?C.useLayoutEffect:C.useEffect,aa={popupContent:{tooltip:{position:"absolute",zIndex:999},modal:{position:"relative",margin:"auto"}},popupArrow:{height:"8px",width:"16px",position:"absolute",background:"transparent",color:"#FFF",zIndex:-1},overlay:{tooltip:{position:"fixed",top:"0",bottom:"0",left:"0",right:"0",zIndex:999},modal:{position:"fixed",top:"0",bottom:"0",left:"0",right:"0",display:"flex",zIndex:999}}},r3=["top left","top center","top right","right top","right center","right bottom","bottom left","bottom center","bottom right","left top","left center","left bottom"],i3=function(e,n,r,i,s){var o=s.offsetX,a=s.offsetY,l=i?8:0,u=r.split(" "),c=e.top+e.height/2,h=e.left+e.width/2,d=n.height,m=n.width,v=c-d/2,_=h-m/2,g="",p="0%",f="0%";switch(u[0]){case"top":v-=d/2+e.height/2+l,g="rotate(180deg)  translateX(50%)",p="100%",f="50%";break;case"bottom":v+=d/2+e.height/2+l,g="rotate(0deg) translateY(-100%) translateX(-50%)",f="50%";break;case"left":_-=m/2+e.width/2+l,g=" rotate(90deg)  translateY(50%) translateX(-25%)",f="100%",p="50%";break;case"right":_+=m/2+e.width/2+l,g="rotate(-90deg)  translateY(-150%) translateX(25%)",p="50%";break}switch(u[1]){case"top":v=e.top,p=e.height/2+"px";break;case"bottom":v=e.top-d+e.height,p=d-e.height/2+"px";break;case"left":_=e.left,f=e.width/2+"px";break;case"right":_=e.left-m+e.width,f=m-e.width/2+"px";break}return v=u[0]==="top"?v-a:v+a,_=u[0]==="left"?_-o:_+o,{top:v,left:_,transform:g,arrowLeft:f,arrowTop:p}},s3=function(e){var n={top:0,left:0,width:window.innerWidth,height:window.innerHeight};if(typeof e=="string"){var r=document.querySelector(e);r!==null&&(n=r.getBoundingClientRect())}return n},o3=function(e,n,r,i,s,o){var a=s.offsetX,l=s.offsetY,u={arrowLeft:"0%",arrowTop:"0%",left:0,top:0,transform:"rotate(135deg)"},c=0,h=s3(o),d=Array.isArray(r)?r:[r];for((o||Array.isArray(r))&&(d=[].concat(d,r3));c<d.length;){u=i3(e,n,d[c],i,{offsetX:a,offsetY:l});var m={top:u.top,left:u.left,width:n.width,height:n.height};if(m.top<=h.top||m.left<=h.left||m.top+m.height>=h.top+h.height||m.left+m.width>=h.left+h.width)c++;else break}return u},a3=0,l3=function(){var e=document.getElementById("popup-root");return e===null&&(e=document.createElement("div"),e.setAttribute("id","popup-root"),document.body.appendChild(e)),e},u3=C.forwardRef(function(t,e){var n=t.trigger,r=n===void 0?null:n,i=t.onOpen,s=i===void 0?function(){}:i,o=t.onClose,a=o===void 0?function(){}:o,l=t.defaultOpen,u=l===void 0?!1:l,c=t.open,h=c===void 0?void 0:c,d=t.disabled,m=d===void 0?!1:d,v=t.nested,_=v===void 0?!1:v,g=t.closeOnDocumentClick,p=g===void 0?!0:g,f=t.repositionOnResize,y=f===void 0?!0:f,E=t.closeOnEscape,T=E===void 0?!0:E,D=t.on,I=D===void 0?["click"]:D,R=t.contentStyle,ie=R===void 0?{}:R,Q=t.arrowStyle,Ce=Q===void 0?{}:Q,at=t.overlayStyle,V=at===void 0?{}:at,_e=t.className,Ie=_e===void 0?"":_e,rn=t.position,nr=rn===void 0?"bottom center":rn,M=t.modal,W=M===void 0?!1:M,$=t.lockScroll,we=$===void 0?!1:$,x=t.arrow,ee=x===void 0?!0:x,ae=t.offsetX,sn=ae===void 0?0:ae,Ze=t.offsetY,Cn=Ze===void 0?0:Ze,uu=t.mouseEnterDelay,Ad=uu===void 0?100:uu,cu=t.mouseLeaveDelay,Ii=cu===void 0?100:cu,zo=t.keepTooltipInside,Bo=zo===void 0?!1:zo,br=t.children,gs=C.useState(h||u),zt=gs[0],jo=gs[1],Sn=C.useRef(null),It=C.useRef(null),rr=C.useRef(null),Or=C.useRef(null),Ti=C.useRef("popup-"+ ++a3),Tt=W?!0:!r,ir=C.useRef(0);n3(function(){return zt?(Or.current=document.activeElement,Y(),B(),A()):U(),function(){clearTimeout(ir.current)}},[zt]),C.useEffect(function(){typeof h=="boolean"&&(h?ys():zn())},[h,m]);var ys=function(H){zt||m||(jo(!0),setTimeout(function(){return s(H)},0))},zn=function(H){var Ae;!zt||m||(jo(!1),Tt&&((Ae=Or.current)===null||Ae===void 0||Ae.focus()),setTimeout(function(){return a(H)},0))},vs=function(H){H==null||H.stopPropagation(),zt?zn(H):ys(H)},Wo=function(H){clearTimeout(ir.current),ir.current=setTimeout(function(){return ys(H)},Ad)},S=function(H){H==null||H.preventDefault(),vs()},k=function(H){clearTimeout(ir.current),ir.current=setTimeout(function(){return zn(H)},Ii)},A=function(){Tt&&we&&(document.getElementsByTagName("body")[0].style.overflow="hidden")},U=function(){Tt&&we&&(document.getElementsByTagName("body")[0].style.overflow="auto")},B=function(){var H,Ae=It==null||(H=It.current)===null||H===void 0?void 0:H.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]'),Fe=Array.prototype.slice.call(Ae)[0];Fe==null||Fe.focus()};C.useImperativeHandle(e,function(){return{open:function(){ys()},close:function(){zn()},toggle:function(){vs()}}});var Y=function(){if(!(Tt||!zt)&&!(!(Sn!=null&&Sn.current)||!(Sn!=null&&Sn.current)||!(It!=null&&It.current))){var H=Sn.current.getBoundingClientRect(),Ae=It.current.getBoundingClientRect(),Fe=o3(H,Ae,nr,ee,{offsetX:sn,offsetY:Cn},Bo);if(It.current.style.top=Fe.top+window.scrollY+"px",It.current.style.left=Fe.left+window.scrollX+"px",ee&&rr.current){var In,Tn;rr.current.style.transform=Fe.transform,rr.current.style.setProperty("-ms-transform",Fe.transform),rr.current.style.setProperty("-webkit-transform",Fe.transform),rr.current.style.top=((In=Ce.top)===null||In===void 0?void 0:In.toString())||Fe.arrowTop,rr.current.style.left=((Tn=Ce.left)===null||Tn===void 0?void 0:Tn.toString())||Fe.arrowLeft}}};JV(zn,T),t3(It,zt&&Tt),ZV(Y,y),e3(r?[It,Sn]:[It],zn,p&&!_);var X=function(){for(var H={key:"T",ref:Sn,"aria-describedby":Ti.current},Ae=Array.isArray(I)?I:[I],Fe=0,In=Ae.length;Fe<In;Fe++)switch(Ae[Fe]){case"click":H.onClick=vs;break;case"right-click":H.onContextMenu=S;break;case"hover":H.onMouseEnter=Wo,H.onMouseLeave=k;break;case"focus":H.onFocus=Wo,H.onBlur=k;break}if(typeof r=="function"){var Tn=r(zt);return!!r&&ut.cloneElement(Tn,H)}return!!r&&ut.cloneElement(r,H)},ne=function(){var H=Tt?aa.popupContent.modal:aa.popupContent.tooltip,Ae={className:"popup-content "+(Ie!==""?Ie.split(" ").map(function(Fe){return Fe+"-content"}).join(" "):""),style:Fa({},H,ie,{pointerEvents:"auto"}),ref:It,onClick:function(In){In.stopPropagation()}};return!W&&I.indexOf("hover")>=0&&(Ae.onMouseEnter=Wo,Ae.onMouseLeave=k),Ae},K=function(){return ut.createElement("div",Object.assign({},ne(),{key:"C",role:Tt?"dialog":"tooltip",id:Ti.current}),ee&&!Tt&&ut.createElement("div",{ref:rr,style:aa.popupArrow},ut.createElement("svg",{"data-testid":"arrow",className:"popup-arrow "+(Ie!==""?Ie.split(" ").map(function(H){return H+"-arrow"}).join(" "):""),viewBox:"0 0 32 16",style:Fa({position:"absolute"},Ce)},ut.createElement("path",{d:"M16 0l16 16H0z",fill:"currentcolor"}))),br&&typeof br=="function"?br(zn,zt):br)},Ne=!(I.indexOf("hover")>=0),ye=Tt?aa.overlay.modal:aa.overlay.tooltip,on=[Ne&&ut.createElement("div",{key:"O","data-testid":"overlay","data-popup":Tt?"modal":"tooltip",className:"popup-overlay "+(Ie!==""?Ie.split(" ").map(function(de){return de+"-overlay"}).join(" "):""),style:Fa({},ye,V,{pointerEvents:p&&_||Tt?"auto":"none"}),onClick:p&&_?zn:void 0,tabIndex:-1},Tt&&K()),!Tt&&K()];return ut.createElement(ut.Fragment,null,X(),zt&&AA.createPortal(on,l3()))});const Mf=()=>["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][new Date().getDay()],c3=()=>{const t=C.useContext(No),[e,n]=C.useState(0),[r,i]=C.useState([]),[s,o]=C.useState([]),[a,l]=C.useState(""),[u,c]=C.useState([]),[h,d]=C.useState(!1),[m,v]=C.useState(""),[_,g]=C.useState(""),[p,f]=C.useState([]),[y,E]=C.useState(!1),[T,D]=C.useState(!1),[I,R]=C.useState(null),[ie,Q]=C.useState();C.useEffect(()=>{at()},[]),C.useEffect(()=>{clearTimeout(ie),I!=null&&Q(setTimeout(()=>{R(null)},3e3))},[I]),C.useEffect(()=>{e===0&&(v(""),g(""))},[e]);function Ce(x,ee){R({message:x,type:ee})}async function at(){const x=Mf().toLowerCase().toString(),ee=await _d(gd(mi(Mt,"todo_items"),vd("creatorId","==",t.uid))),ae=[];ee.forEach(Ze=>{ae.push({...Ze.data(),id:Ze.id})});const sn=ae.filter(Ze=>Ze.dates.includes(x));i(sn),o(ae)}async function V(){if(!a)return;const x=Mf().toLowerCase().toString();u.length===0&&u.push(x);const ee={content:a,isCompleted:!1,dates:u,repeat:h,creatorId:t.uid},ae=await wd(mi(Mt,"todo_items"),ee);ee.id=ae.id,ee.dates.includes(x)&&i([...r,ee]),o([...s,ee])}async function _e(x){x.isCompleted=!x.isCompleted,i([...r]);const ee=gr(Mt,"todo_items",x.id);if(x.repeat)try{await _l(ee,{isCompleted:x.isCompleted}),x.isCompleted?Ce(`Completed "${x.content}"`,"success"):Ce(`Marked "${x.content}" as incomplete`,"info")}catch(ae){alert(ae),Ce(`Error: Could not update "${x.content}"`,"error")}else Ie(x.id,x.content)}async function Ie(x,ee){try{await Ly(gr(Mt,"todo_items",x)),Ce(`Completed "${ee}"`,"success");const ae=r.filter(sn=>sn.id!=x);i(ae),g(""),f([]),E(!1),v(""),n(0)}catch(ae){alert(ae),Ce(`Error: Could not complete "${ee}"`,"error")}}function rn(x){n(2),v(x.id),g(x.content),f(x.dates),E(x.repeat)}async function nr(x,ee,ae){const sn=Mf().toLowerCase().toString();ee.length===0&&ee.push(sn);const Ze=gr(Mt,"todo_items",m);try{await _l(Ze,{content:x,dates:ee,repeat:ae}),i([]),at(),n(0),Ce(`Updated "${x}"`,"success")}catch(Cn){alert(Cn),Ce(`Error: Could not update "${x}"`,"error")}}function M(x){const ee=u.filter(ae=>ae!==x);c([...ee])}function W(x){const ee=p.filter(ae=>ae!==x);f([...ee])}function $(x){var ee="";return x.includes("sunday")&&(ee+="Sun "),x.includes("monday")&&(ee+="Mon "),x.includes("tuesday")&&(ee+="Tue "),x.includes("wednesday")&&(ee+="Wed "),x.includes("thursday")&&(ee+="Thu "),x.includes("friday")&&(ee+="Fri "),x.includes("saturday")&&(ee+="Sat "),ee}function we(x,ee){console.log(`Trying to delete ${ee}`),confirm(`Are you sure you want to delete "${ee}"?`)&&Ie(x,ee)}return q(ft,{children:[q("div",{className:"widget__header",children:[w("div",{className:"widget__title",children:"Todo:"}),w("div",{className:"widget__action",children:e===0?q(u3,{trigger:w("button",{children:w(QV,{className:"widget__action__icon"})}),position:"bottom right",children:[q("button",{className:"fw-btn menu-btn",onClick:()=>n(1),children:[w(_v,{className:"decor-icon"})," Add Todo "]}),q("button",{className:"fw-btn menu-btn",onClick:()=>n(3),children:[w(GV,{className:"decor-icon"})," View All "]})]}):e===1?w("button",{onClick:()=>n(0),children:w(li,{className:"widget__action__icon"})}):e===2?w("button",{onClick:()=>n(0),children:w(li,{className:"widget__action__icon"})}):e===3?w("button",{onClick:()=>n(0),children:w(li,{className:"widget__action__icon"})}):w(ft,{})})]}),w("div",{className:"widget__content",children:e===0?w(ft,{children:w("div",{children:r.map(x=>q("span",{className:"checklist-item",children:[w("input",{type:"checkbox",checked:x.isCompleted,onChange:()=>_e(x)}),q("span",{className:"todo-info",onClick:()=>{rn(x)},children:[w("p",{className:x.isCompleted?"todo-info__name completed":"todo-info__name",children:x.content}),q("p",{className:"todo-info__dates",children:[x.repeat?w(Jw,{className:"decor-icon"}):w(ft,{}),$(x.dates)]})]})]},x.id))})}):e===1?w("div",{className:"flip",children:q("form",{onSubmit:x=>{a!=null&&V(),T||n(0),l(""),c([]),d(!1),x.preventDefault()},children:[w("input",{type:"text",placeholder:"Todo item...",value:a,onChange:x=>l(x.target.value)}),q("span",{className:"dates",children:[w("button",{type:"button",className:u.includes("sunday")?"date-btn date-btn__selected":"date-btn date-btn__unselected",onClick:()=>{u.includes("sunday")?M("sunday"):c([...u,"sunday"])},children:" Su "}),w("button",{type:"button",className:u.includes("monday")?"date-btn date-btn__selected":"date-btn date-btn__unselected",onClick:()=>{u.includes("monday")?M("monday"):c([...u,"monday"])},children:" M "}),w("button",{type:"button",className:u.includes("tuesday")?"date-btn date-btn__selected":"date-btn date-btn__unselected",onClick:()=>{u.includes("tuesday")?M("tuesday"):c([...u,"tuesday"])},children:" Tu "}),w("button",{type:"button",className:u.includes("wednesday")?"date-btn date-btn__selected":"date-btn date-btn__unselected",onClick:()=>{u.includes("wednesday")?M("wednesday"):c([...u,"wednesday"])},children:" W "}),w("button",{type:"button",className:u.includes("thursday")?"date-btn date-btn__selected":"date-btn date-btn__unselected",onClick:()=>{u.includes("thursday")?M("thursday"):c([...u,"thursday"])},children:" Th "}),w("button",{type:"button",className:u.includes("friday")?"date-btn date-btn__selected":"date-btn date-btn__unselected",onClick:()=>{u.includes("friday")?M("friday"):c([...u,"friday"])},children:" F "}),w("button",{type:"button",className:u.includes("saturday")?"date-btn date-btn__selected":"date-btn date-btn__unselected",onClick:()=>{u.includes("saturday")?M("saturday"):c([...u,"saturday"])},children:" Sa "})]}),q("p",{className:"add-another",children:[w("input",{type:"checkbox",checked:h,onChange:()=>{d(!h)}})," Repeat? "]}),q("p",{className:"add-another",children:[w("input",{type:"checkbox",checked:T,onChange:()=>{D(!T)}}),"Add another"]}),w("input",{className:"fw-btn",type:"submit",value:"Save"})]})}):e===2?q("div",{className:"flip",children:[q("form",{onSubmit:x=>{_!=null&&nr(_,p,y),x.preventDefault()},children:[w("input",{type:"text",value:_,onChange:x=>g(x.target.value)}),q("span",{className:"dates",children:[w("button",{type:"button",className:p.includes("sunday")?"date-btn date-btn__selected":"date-btn date-btn__unselected",onClick:()=>{p.includes("sunday")?W("sunday"):f([...p,"sunday"])},children:" Su "}),w("button",{type:"button",className:p.includes("monday")?"date-btn date-btn__selected":"date-btn date-btn__unselected",onClick:()=>{p.includes("monday")?W("monday"):f([...p,"monday"])},children:" M "}),w("button",{type:"button",className:p.includes("tuesday")?"date-btn date-btn__selected":"date-btn date-btn__unselected",onClick:()=>{p.includes("tuesday")?W("tuesday"):f([...p,"tuesday"])},children:" Tu "}),w("button",{type:"button",className:p.includes("wednesday")?"date-btn date-btn__selected":"date-btn date-btn__unselected",onClick:()=>{p.includes("wednesday")?W("wednesday"):f([...p,"wednesday"])},children:" W "}),w("button",{type:"button",className:p.includes("thursday")?"date-btn date-btn__selected":"date-btn date-btn__unselected",onClick:()=>{p.includes("thursday")?W("thursday"):f([...p,"thursday"])},children:" Th "}),w("button",{type:"button",className:p.includes("friday")?"date-btn date-btn__selected":"date-btn date-btn__unselected",onClick:()=>{p.includes("friday")?W("friday"):f([...p,"friday"])},children:" F "}),w("button",{type:"button",className:p.includes("saturday")?"date-btn date-btn__selected":"date-btn date-btn__unselected",onClick:()=>{p.includes("saturday")?W("saturday"):f([...p,"saturday"])},children:" Sa "})]}),q("p",{className:"add-another",children:[w("input",{type:"checkbox",checked:y,onChange:()=>{E(!y)}})," Repeat? "]}),w("input",{className:"fw-btn",type:"submit",value:"Save"})]}),w("p",{children:q("button",{className:"fw-btn err-btn",onClick:()=>{we(m,_)},children:[w(Xk,{})," Delete "]})})]}):e===3?w("div",{className:"flip",children:w("div",{children:s.map(x=>w("span",{className:"checklist-item",children:q("span",{className:"todo-info",onClick:()=>{rn(x)},children:[w("p",{className:x.isCompleted?"todo-info__name completed":"todo-info__name",children:x.content}),q("p",{className:"todo-info__dates",children:[x.repeat?w(Jw,{}):w(ft,{}),$(x.dates)]})]})},x.id))})}):w(ft,{})}),I!=null?w("div",{className:`toast toast--${I.type}`,children:I.message}):w(ft,{})]})},h3=t=>{const e=C.useContext(No);function n(){const r=mS();iS(r).then(function(){console.log("weve signed out")}).catch(function(i){console.log("Signout error")})}return q(ft,{children:[q("div",{className:"sidebar__header",children:[w(WV,{className:"sidebar__icon"}),w("h1",{className:"sidebar__logo",children:e!==null?e.email:""})]}),q("div",{className:"sidebar__items",children:[q("div",{className:"item",onClick:()=>n(),children:[w(HV,{className:"sidebar__icon"}),w("span",{className:"sidebar__text",children:"Logout"})]}),w("div",{className:"sidebar__back item",onClick:()=>t.setState(!t.state),children:w(li,{className:"sidebar__icon"})})]})]})},d3=()=>{const[t,e]=C.useState("1:00 am"),[n,r]=C.useState("Mai 00, 2020");C.useEffect(()=>{s(new Date),i(),setInterval(i,15e3)},[]);const i=()=>{let o=new Date,a=o.getHours(),l=o.getMinutes(),u="am";a>12&&(a-=12,u="pm"),a==12&&(u="pm"),a==0&&(l==0&&s(o),a=12,u="am");let c=l<10?"0"+l:l;const h=a+":"+c+u;e(h)},s=o=>{const a={weekday:"short",month:"long",day:"numeric"},l=o.toLocaleString("en-us",a);r(l)};return q(ft,{children:[w("div",{className:"widget__content clock",children:t}),q("div",{className:"widget__content today",children:[" ",n]})]})},f3=()=>{const[t,e]=C.useState(!1);return q(ft,{children:[w("div",{className:t?"sidebar":"sidebar collapsed",children:w(h3,{state:t,setState:e})}),q("div",{className:"dashboard",children:[q("div",{className:"col",children:[w("div",{className:"widget widget__sm",children:w(d3,{})}),w("div",{className:"widget widget__lg",children:w(c3,{})})]}),q("div",{className:"col",children:[w("div",{className:"widget widget__lg",children:w(YV,{})}),w("div",{className:"widget widget__sm",children:w("div",{className:"widget__title",children:"Hello from Dashboard2"})})]}),q("div",{className:"col",children:[w("div",{className:"widget widget__md",children:w(XV,{})}),w("div",{className:"widget widget__md",children:w("div",{className:"widget__title",children:"Hello from Dashboard3"})})]}),w("div",{className:"settings",children:w("button",{onClick:()=>e(!0),children:w(qV,{})})})]})]})},p3=GD([{path:"/",element:w(UV,{}),children:[{path:"/",element:w(f3,{})},{path:"/login",element:w(VV,{})},{path:"/chat",element:w(zV,{})}]}]);function m3(){return w(zD,{router:p3})}Ff.createRoot(document.getElementById("root")).render(w(ut.StrictMode,{children:w(m3,{})}));
