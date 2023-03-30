(function(E,T){typeof exports=="object"&&typeof module<"u"?T(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],T):(E=typeof globalThis<"u"?globalThis:E||self,T(E["react-spinner-loading"]={},E.React))})(this,function(E,T){"use strict";var U={},Ce={get exports(){return U},set exports(y){U=y}},x={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Q;function Pe(){if(Q)return x;Q=1;var y=T,k=Symbol.for("react.element"),B=Symbol.for("react.fragment"),O=Object.prototype.hasOwnProperty,I=y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,W={key:!0,ref:!0,__self:!0,__source:!0};function D(m,l,S){var v,g={},R=null,Y=null;S!==void 0&&(R=""+S),l.key!==void 0&&(R=""+l.key),l.ref!==void 0&&(Y=l.ref);for(v in l)O.call(l,v)&&!W.hasOwnProperty(v)&&(g[v]=l[v]);if(m&&m.defaultProps)for(v in l=m.defaultProps,l)g[v]===void 0&&(g[v]=l[v]);return{$$typeof:k,type:m,key:R,ref:Y,props:g,_owner:I.current}}return x.Fragment=B,x.jsx=D,x.jsxs=D,x}var j={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ee;function we(){return ee||(ee=1,process.env.NODE_ENV!=="production"&&function(){var y=T,k=Symbol.for("react.element"),B=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),W=Symbol.for("react.profiler"),D=Symbol.for("react.provider"),m=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),v=Symbol.for("react.suspense_list"),g=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),Y=Symbol.for("react.offscreen"),re=Symbol.iterator,je="@@iterator";function ke(e){if(e===null||typeof e!="object")return null;var r=re&&e[re]||e[je];return typeof r=="function"?r:null}var C=y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function c(e){{for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];De("error",e,t)}}function De(e,r,t){{var n=C.ReactDebugCurrentFrame,o=n.getStackAddendum();o!==""&&(r+="%s",t=t.concat([o]));var u=t.map(function(i){return String(i)});u.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,u)}}var Fe=!1,Ae=!1,Ie=!1,We=!1,Ye=!1,te;te=Symbol.for("react.module.reference");function $e(e){return!!(typeof e=="string"||typeof e=="function"||e===O||e===W||Ye||e===I||e===S||e===v||We||e===Y||Fe||Ae||Ie||typeof e=="object"&&e!==null&&(e.$$typeof===R||e.$$typeof===g||e.$$typeof===D||e.$$typeof===m||e.$$typeof===l||e.$$typeof===te||e.getModuleId!==void 0))}function Ne(e,r,t){var n=e.displayName;if(n)return n;var o=r.displayName||r.name||"";return o!==""?t+"("+o+")":t}function ne(e){return e.displayName||"Context"}function b(e){if(e==null)return null;if(typeof e.tag=="number"&&c("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case O:return"Fragment";case B:return"Portal";case W:return"Profiler";case I:return"StrictMode";case S:return"Suspense";case v:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case m:var r=e;return ne(r)+".Consumer";case D:var t=e;return ne(t._context)+".Provider";case l:return Ne(e,e.render,"ForwardRef");case g:var n=e.displayName||null;return n!==null?n:b(e.type)||"Memo";case R:{var o=e,u=o._payload,i=o._init;try{return b(i(u))}catch{return null}}}return null}var _=Object.assign,F=0,ae,ie,oe,ue,se,fe,le;function ce(){}ce.__reactDisabledLog=!0;function Le(){{if(F===0){ae=console.log,ie=console.info,oe=console.warn,ue=console.error,se=console.group,fe=console.groupCollapsed,le=console.groupEnd;var e={configurable:!0,enumerable:!0,value:ce,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}F++}}function Me(){{if(F--,F===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:_({},e,{value:ae}),info:_({},e,{value:ie}),warn:_({},e,{value:oe}),error:_({},e,{value:ue}),group:_({},e,{value:se}),groupCollapsed:_({},e,{value:fe}),groupEnd:_({},e,{value:le})})}F<0&&c("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var q=C.ReactCurrentDispatcher,J;function $(e,r,t){{if(J===void 0)try{throw Error()}catch(o){var n=o.stack.trim().match(/\n( *(at )?)/);J=n&&n[1]||""}return`
`+J+e}}var G=!1,N;{var Ve=typeof WeakMap=="function"?WeakMap:Map;N=new Ve}function de(e,r){if(!e||G)return"";{var t=N.get(e);if(t!==void 0)return t}var n;G=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var u;u=q.current,q.current=null,Le();try{if(r){var i=function(){throw Error()};if(Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(h){n=h}Reflect.construct(e,[],i)}else{try{i.call()}catch(h){n=h}e.call(i.prototype)}}else{try{throw Error()}catch(h){n=h}e()}}catch(h){if(h&&n&&typeof h.stack=="string"){for(var a=h.stack.split(`
`),d=n.stack.split(`
`),s=a.length-1,f=d.length-1;s>=1&&f>=0&&a[s]!==d[f];)f--;for(;s>=1&&f>=0;s--,f--)if(a[s]!==d[f]){if(s!==1||f!==1)do if(s--,f--,f<0||a[s]!==d[f]){var p=`
`+a[s].replace(" at new "," at ");return e.displayName&&p.includes("<anonymous>")&&(p=p.replace("<anonymous>",e.displayName)),typeof e=="function"&&N.set(e,p),p}while(s>=1&&f>=0);break}}}finally{G=!1,q.current=u,Me(),Error.prepareStackTrace=o}var w=e?e.displayName||e.name:"",Se=w?$(w):"";return typeof e=="function"&&N.set(e,Se),Se}function Ue(e,r,t){return de(e,!1)}function Be(e){var r=e.prototype;return!!(r&&r.isReactComponent)}function L(e,r,t){if(e==null)return"";if(typeof e=="function")return de(e,Be(e));if(typeof e=="string")return $(e);switch(e){case S:return $("Suspense");case v:return $("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case l:return Ue(e.render);case g:return L(e.type,r,t);case R:{var n=e,o=n._payload,u=n._init;try{return L(u(o),r,t)}catch{}}}return""}var M=Object.prototype.hasOwnProperty,ve={},pe=C.ReactDebugCurrentFrame;function V(e){if(e){var r=e._owner,t=L(e.type,e._source,r?r.type:null);pe.setExtraStackFrame(t)}else pe.setExtraStackFrame(null)}function qe(e,r,t,n,o){{var u=Function.call.bind(M);for(var i in e)if(u(e,i)){var a=void 0;try{if(typeof e[i]!="function"){var d=Error((n||"React class")+": "+t+" type `"+i+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[i]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw d.name="Invariant Violation",d}a=e[i](r,i,n,t,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(s){a=s}a&&!(a instanceof Error)&&(V(o),c("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",n||"React class",t,i,typeof a),V(null)),a instanceof Error&&!(a.message in ve)&&(ve[a.message]=!0,V(o),c("Failed %s type: %s",t,a.message),V(null))}}}var Je=Array.isArray;function z(e){return Je(e)}function Ge(e){{var r=typeof Symbol=="function"&&Symbol.toStringTag,t=r&&e[Symbol.toStringTag]||e.constructor.name||"Object";return t}}function ze(e){try{return ge(e),!1}catch{return!0}}function ge(e){return""+e}function be(e){if(ze(e))return c("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",Ge(e)),ge(e)}var A=C.ReactCurrentOwner,Ke={key:!0,ref:!0,__self:!0,__source:!0},he,ye,K;K={};function He(e){if(M.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return e.ref!==void 0}function Xe(e){if(M.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function Ze(e,r){if(typeof e.ref=="string"&&A.current&&r&&A.current.stateNode!==r){var t=b(A.current.type);K[t]||(c('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',b(A.current.type),e.ref),K[t]=!0)}}function Qe(e,r){{var t=function(){he||(he=!0,c("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"key",{get:t,configurable:!0})}}function er(e,r){{var t=function(){ye||(ye=!0,c("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"ref",{get:t,configurable:!0})}}var rr=function(e,r,t,n,o,u,i){var a={$$typeof:k,type:e,key:r,ref:t,props:i,_owner:u};return a._store={},Object.defineProperty(a._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(a,"_self",{configurable:!1,enumerable:!1,writable:!1,value:n}),Object.defineProperty(a,"_source",{configurable:!1,enumerable:!1,writable:!1,value:o}),Object.freeze&&(Object.freeze(a.props),Object.freeze(a)),a};function tr(e,r,t,n,o){{var u,i={},a=null,d=null;t!==void 0&&(be(t),a=""+t),Xe(r)&&(be(r.key),a=""+r.key),He(r)&&(d=r.ref,Ze(r,o));for(u in r)M.call(r,u)&&!Ke.hasOwnProperty(u)&&(i[u]=r[u]);if(e&&e.defaultProps){var s=e.defaultProps;for(u in s)i[u]===void 0&&(i[u]=s[u])}if(a||d){var f=typeof e=="function"?e.displayName||e.name||"Unknown":e;a&&Qe(i,f),d&&er(i,f)}return rr(e,a,d,o,n,A.current,i)}}var H=C.ReactCurrentOwner,Ee=C.ReactDebugCurrentFrame;function P(e){if(e){var r=e._owner,t=L(e.type,e._source,r?r.type:null);Ee.setExtraStackFrame(t)}else Ee.setExtraStackFrame(null)}var X;X=!1;function Z(e){return typeof e=="object"&&e!==null&&e.$$typeof===k}function me(){{if(H.current){var e=b(H.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function nr(e){{if(e!==void 0){var r=e.fileName.replace(/^.*[\\\/]/,""),t=e.lineNumber;return`

Check your code at `+r+":"+t+"."}return""}}var Re={};function ar(e){{var r=me();if(!r){var t=typeof e=="string"?e:e.displayName||e.name;t&&(r=`

Check the top-level render call using <`+t+">.")}return r}}function _e(e,r){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var t=ar(r);if(Re[t])return;Re[t]=!0;var n="";e&&e._owner&&e._owner!==H.current&&(n=" It was passed a child from "+b(e._owner.type)+"."),P(e),c('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',t,n),P(null)}}function Te(e,r){{if(typeof e!="object")return;if(z(e))for(var t=0;t<e.length;t++){var n=e[t];Z(n)&&_e(n,r)}else if(Z(e))e._store&&(e._store.validated=!0);else if(e){var o=ke(e);if(typeof o=="function"&&o!==e.entries)for(var u=o.call(e),i;!(i=u.next()).done;)Z(i.value)&&_e(i.value,r)}}}function ir(e){{var r=e.type;if(r==null||typeof r=="string")return;var t;if(typeof r=="function")t=r.propTypes;else if(typeof r=="object"&&(r.$$typeof===l||r.$$typeof===g))t=r.propTypes;else return;if(t){var n=b(r);qe(t,e.props,"prop",n,e)}else if(r.PropTypes!==void 0&&!X){X=!0;var o=b(r);c("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",o||"Unknown")}typeof r.getDefaultProps=="function"&&!r.getDefaultProps.isReactClassApproved&&c("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function or(e){{for(var r=Object.keys(e.props),t=0;t<r.length;t++){var n=r[t];if(n!=="children"&&n!=="key"){P(e),c("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",n),P(null);break}}e.ref!==null&&(P(e),c("Invalid attribute `ref` supplied to `React.Fragment`."),P(null))}}function Oe(e,r,t,n,o,u){{var i=$e(e);if(!i){var a="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(a+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var d=nr(o);d?a+=d:a+=me();var s;e===null?s="null":z(e)?s="array":e!==void 0&&e.$$typeof===k?(s="<"+(b(e.type)||"Unknown")+" />",a=" Did you accidentally export a JSX literal instead of a component?"):s=typeof e,c("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",s,a)}var f=tr(e,r,t,o,u);if(f==null)return f;if(i){var p=r.children;if(p!==void 0)if(n)if(z(p)){for(var w=0;w<p.length;w++)Te(p[w],e);Object.freeze&&Object.freeze(p)}else c("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else Te(p,e)}return e===O?or(f):ir(f),f}}function ur(e,r,t){return Oe(e,r,t,!0)}function sr(e,r,t){return Oe(e,r,t,!1)}var fr=sr,lr=ur;j.Fragment=O,j.jsx=fr,j.jsxs=lr}()),j}(function(y){process.env.NODE_ENV==="production"?y.exports=Pe():y.exports=we()})(Ce);const xe=()=>U.jsx("div",{className:"spin"});E.Spinner=xe,Object.defineProperty(E,Symbol.toStringTag,{value:"Module"})});
//# sourceMappingURL=index.umd.js.map
