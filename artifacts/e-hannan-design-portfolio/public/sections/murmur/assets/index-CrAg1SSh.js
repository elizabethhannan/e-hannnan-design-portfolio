(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))s(u);new MutationObserver(u=>{for(const f of u)if(f.type==="childList")for(const h of f.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function a(u){const f={};return u.integrity&&(f.integrity=u.integrity),u.referrerPolicy&&(f.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?f.credentials="include":u.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function s(u){if(u.ep)return;u.ep=!0;const f=a(u);fetch(u.href,f)}})();var kh={exports:{}},Zo={};var Lv;function Wy(){if(Lv)return Zo;Lv=1;var o=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function a(s,u,f){var h=null;if(f!==void 0&&(h=""+f),u.key!==void 0&&(h=""+u.key),"key"in u){f={};for(var d in u)d!=="key"&&(f[d]=u[d])}else f=u;return u=f.ref,{$$typeof:o,type:s,key:h,ref:u!==void 0?u:null,props:f}}return Zo.Fragment=n,Zo.jsx=a,Zo.jsxs=a,Zo}var Ov;function jy(){return Ov||(Ov=1,kh.exports=Wy()),kh.exports}var ae=jy(),Yh={exports:{}},oe={};var zv;function Zy(){if(zv)return oe;zv=1;var o=Symbol.for("react.transitional.element"),n=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),p=Symbol.for("react.activity"),x=Symbol.for("react.view_transition"),M=Symbol.iterator;function C(A){return A===null||typeof A!="object"?null:(A=M&&A[M]||A["@@iterator"],typeof A=="function"?A:null)}var U={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,S={};function L(A,q,ht){this.props=A,this.context=q,this.refs=S,this.updater=ht||U}L.prototype.isReactComponent={},L.prototype.setState=function(A,q){if(typeof A!="object"&&typeof A!="function"&&A!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,A,q,"setState")},L.prototype.forceUpdate=function(A){this.updater.enqueueForceUpdate(this,A,"forceUpdate")};function N(){}N.prototype=L.prototype;function w(A,q,ht){this.props=A,this.context=q,this.refs=S,this.updater=ht||U}var X=w.prototype=new N;X.constructor=w,y(X,L.prototype),X.isPureReactComponent=!0;var B=Array.isArray;function O(){}var I={H:null,A:null,T:null,S:null},D=Object.prototype.hasOwnProperty;function b(A,q,ht){var lt=ht.ref;return{$$typeof:o,type:A,key:q,ref:lt!==void 0?lt:null,props:ht}}function F(A,q){return b(A.type,q,A.props)}function ot(A){return typeof A=="object"&&A!==null&&A.$$typeof===o}function st(A){var q={"=":"=0",":":"=2"};return"$"+A.replace(/[=:]/g,function(ht){return q[ht]})}var mt=/\/+/g;function ft(A,q){return typeof A=="object"&&A!==null&&A.key!=null?st(""+A.key):q.toString(36)}function Y(A){switch(A.status){case"fulfilled":return A.value;case"rejected":throw A.reason;default:switch(typeof A.status=="string"?A.then(O,O):(A.status="pending",A.then(function(q){A.status==="pending"&&(A.status="fulfilled",A.value=q)},function(q){A.status==="pending"&&(A.status="rejected",A.reason=q)})),A.status){case"fulfilled":return A.value;case"rejected":throw A.reason}}throw A}function nt(A,q,ht,lt,Tt){var Gt=typeof A;(Gt==="undefined"||Gt==="boolean")&&(A=null);var Rt=!1;if(A===null)Rt=!0;else switch(Gt){case"bigint":case"string":case"number":Rt=!0;break;case"object":switch(A.$$typeof){case o:case n:Rt=!0;break;case v:return Rt=A._init,nt(Rt(A._payload),q,ht,lt,Tt)}}if(Rt)return Tt=Tt(A),Rt=lt===""?"."+ft(A,0):lt,B(Tt)?(ht="",Rt!=null&&(ht=Rt.replace(mt,"$&/")+"/"),nt(Tt,q,ht,"",function(ce){return ce})):Tt!=null&&(ot(Tt)&&(Tt=F(Tt,ht+(Tt.key==null||A&&A.key===Tt.key?"":(""+Tt.key).replace(mt,"$&/")+"/")+Rt)),q.push(Tt)),1;Rt=0;var At=lt===""?".":lt+":";if(B(A))for(var zt=0;zt<A.length;zt++)lt=A[zt],Gt=At+ft(lt,zt),Rt+=nt(lt,q,ht,Gt,Tt);else if(zt=C(A),typeof zt=="function")for(A=zt.call(A),zt=0;!(lt=A.next()).done;)lt=lt.value,Gt=At+ft(lt,zt++),Rt+=nt(lt,q,ht,Gt,Tt);else if(Gt==="object"){if(typeof A.then=="function")return nt(Y(A),q,ht,lt,Tt);throw q=String(A),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(A).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.")}return Rt}function K(A,q,ht){if(A==null)return A;var lt=[],Tt=0;return nt(A,lt,"","",function(Gt){return q.call(ht,Gt,Tt++)}),lt}function vt(A){if(A._status===-1){var q=A._result,ht=q();ht.then(function(lt){(A._status===0||A._status===-1)&&(A._status=1,A._result=lt,ht.status===void 0&&(ht.status="fulfilled",ht.value=lt))},function(lt){(A._status===0||A._status===-1)&&(A._status=2,A._result=lt,ht.status===void 0&&(ht.status="rejected",ht.reason=lt))}),A._status===-1&&(A._status=0,A._result=ht)}if(A._status===1)return A._result.default;throw A._result}var yt=typeof reportError=="function"?reportError:function(A){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof A=="object"&&A!==null&&typeof A.message=="string"?String(A.message):String(A),error:A});if(!window.dispatchEvent(q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",A);return}console.error(A)};function Ht(A){var q=I.T,ht={};ht.types=q!==null?q.types:null,I.T=ht;try{var lt=A(),Tt=I.S;Tt!==null&&Tt(ht,lt),typeof lt=="object"&&lt!==null&&typeof lt.then=="function"&&lt.then(O,yt)}catch(Gt){yt(Gt)}finally{q!==null&&ht.types!==null&&(q.types=ht.types),I.T=q}}function ee(A){var q=I.T;if(q!==null){var ht=q.types;ht===null?q.types=[A]:ht.indexOf(A)===-1&&ht.push(A)}else Ht(ee.bind(null,A))}var Et={map:K,forEach:function(A,q,ht){K(A,function(){q.apply(this,arguments)},ht)},count:function(A){var q=0;return K(A,function(){q++}),q},toArray:function(A){return K(A,function(q){return q})||[]},only:function(A){if(!ot(A))throw Error("React.Children.only expected to receive a single React element child.");return A}};return oe.Activity=p,oe.Children=Et,oe.Component=L,oe.Fragment=a,oe.Profiler=u,oe.PureComponent=w,oe.StrictMode=s,oe.Suspense=g,oe.ViewTransition=x,oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,oe.__COMPILER_RUNTIME={__proto__:null,c:function(A){return I.H.useMemoCache(A)}},oe.addTransitionType=ee,oe.cache=function(A){return function(){return A.apply(null,arguments)}},oe.cacheSignal=function(){return null},oe.cloneElement=function(A,q,ht){if(A==null)throw Error("The argument must be a React element, but you passed "+A+".");var lt=y({},A.props),Tt=A.key;if(q!=null)for(Gt in q.key!==void 0&&(Tt=""+q.key),q)!D.call(q,Gt)||Gt==="key"||Gt==="__self"||Gt==="__source"||Gt==="ref"&&q.ref===void 0||(lt[Gt]=q[Gt]);var Gt=arguments.length-2;if(Gt===1)lt.children=ht;else if(1<Gt){for(var Rt=Array(Gt),At=0;At<Gt;At++)Rt[At]=arguments[At+2];lt.children=Rt}return b(A.type,Tt,lt)},oe.createContext=function(A){return A={$$typeof:h,_currentValue:A,_currentValue2:A,_threadCount:0,Provider:null,Consumer:null},A.Provider=A,A.Consumer={$$typeof:f,_context:A},A},oe.createElement=function(A,q,ht){var lt,Tt={},Gt=null;if(q!=null)for(lt in q.key!==void 0&&(Gt=""+q.key),q)D.call(q,lt)&&lt!=="key"&&lt!=="__self"&&lt!=="__source"&&(Tt[lt]=q[lt]);var Rt=arguments.length-2;if(Rt===1)Tt.children=ht;else if(1<Rt){for(var At=Array(Rt),zt=0;zt<Rt;zt++)At[zt]=arguments[zt+2];Tt.children=At}if(A&&A.defaultProps)for(lt in Rt=A.defaultProps,Rt)Tt[lt]===void 0&&(Tt[lt]=Rt[lt]);return b(A,Gt,Tt)},oe.createRef=function(){return{current:null}},oe.forwardRef=function(A){return{$$typeof:d,render:A}},oe.isValidElement=ot,oe.lazy=function(A){return{$$typeof:v,_payload:{_status:-1,_result:A},_init:vt}},oe.memo=function(A,q){return{$$typeof:_,type:A,compare:q===void 0?null:q}},oe.startTransition=Ht,oe.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},oe.use=function(A){return I.H.use(A)},oe.useActionState=function(A,q,ht){return I.H.useActionState(A,q,ht)},oe.useCallback=function(A,q){return I.H.useCallback(A,q)},oe.useContext=function(A){return I.H.useContext(A)},oe.useDebugValue=function(){},oe.useDeferredValue=function(A,q){return I.H.useDeferredValue(A,q)},oe.useEffect=function(A,q){return I.H.useEffect(A,q)},oe.useEffectEvent=function(A){return I.H.useEffectEvent(A)},oe.useId=function(){return I.H.useId()},oe.useImperativeHandle=function(A,q,ht){return I.H.useImperativeHandle(A,q,ht)},oe.useInsertionEffect=function(A,q){return I.H.useInsertionEffect(A,q)},oe.useLayoutEffect=function(A,q){return I.H.useLayoutEffect(A,q)},oe.useMemo=function(A,q){return I.H.useMemo(A,q)},oe.useOptimistic=function(A,q){return I.H.useOptimistic(A,q)},oe.useReducer=function(A,q,ht){return I.H.useReducer(A,q,ht)},oe.useRef=function(A){return I.H.useRef(A)},oe.useState=function(A){return I.H.useState(A)},oe.useSyncExternalStore=function(A,q,ht){return I.H.useSyncExternalStore(A,q,ht)},oe.useTransition=function(){return I.H.useTransition()},oe.version="19.3.1",oe}var Pv;function mp(){return Pv||(Pv=1,Yh.exports=Zy()),Yh.exports}var Ke=mp(),Wh={exports:{}},Ko={},jh={exports:{}},Zh={};var Bv;function Ky(){return Bv||(Bv=1,(function(o){function n(Y,nt){var K=Y.length;Y.push(nt);t:for(;0<K;){var vt=K-1>>>1,yt=Y[vt];if(0<u(yt,nt))Y[vt]=nt,Y[K]=yt,K=vt;else break t}}function a(Y){return Y.length===0?null:Y[0]}function s(Y){if(Y.length===0)return null;var nt=Y[0],K=Y.pop();if(K!==nt){Y[0]=K;t:for(var vt=0,yt=Y.length,Ht=yt>>>1;vt<Ht;){var ee=2*(vt+1)-1,Et=Y[ee],A=ee+1,q=Y[A];if(0>u(Et,K))A<yt&&0>u(q,Et)?(Y[vt]=q,Y[A]=K,vt=A):(Y[vt]=Et,Y[ee]=K,vt=ee);else if(A<yt&&0>u(q,K))Y[vt]=q,Y[A]=K,vt=A;else break t}}return nt}function u(Y,nt){var K=Y.sortIndex-nt.sortIndex;return K!==0?K:Y.id-nt.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;o.unstable_now=function(){return f.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var g=[],_=[],v=1,p=null,x=3,M=!1,C=!1,U=!1,y=!1,S=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function w(Y){for(var nt=a(_);nt!==null;){if(nt.callback===null)s(_);else if(nt.startTime<=Y)s(_),nt.sortIndex=nt.expirationTime,n(g,nt);else break;nt=a(_)}}function X(Y){if(U=!1,w(Y),!C)if(a(g)!==null)C=!0,B||(B=!0,ot());else{var nt=a(_);nt!==null&&ft(X,nt.startTime-Y)}}var B=!1,O=-1,I=5,D=-1;function b(){return y?!0:!(o.unstable_now()-D<I)}function F(){if(y=!1,B){var Y=o.unstable_now();D=Y;var nt=!0;try{t:{C=!1,U&&(U=!1,L(O),O=-1),M=!0;var K=x;try{e:{for(w(Y),p=a(g);p!==null&&!(p.expirationTime>Y&&b());){var vt=p.callback;if(typeof vt=="function"){p.callback=null,x=p.priorityLevel;var yt=vt(p.expirationTime<=Y);if(Y=o.unstable_now(),typeof yt=="function"){p.callback=yt,w(Y),nt=!0;break e}p===a(g)&&s(g),w(Y)}else s(g);p=a(g)}if(p!==null)nt=!0;else{var Ht=a(_);Ht!==null&&ft(X,Ht.startTime-Y),nt=!1}}break t}finally{p=null,x=K,M=!1}nt=void 0}}finally{nt?ot():B=!1}}}var ot;if(typeof N=="function")ot=function(){N(F)};else if(typeof MessageChannel<"u"){var st=new MessageChannel,mt=st.port2;st.port1.onmessage=F,ot=function(){mt.postMessage(null)}}else ot=function(){S(F,0)};function ft(Y,nt){O=S(function(){Y(o.unstable_now())},nt)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(Y){Y.callback=null},o.unstable_forceFrameRate=function(Y){0>Y||125<Y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<Y?Math.floor(1e3/Y):5},o.unstable_getCurrentPriorityLevel=function(){return x},o.unstable_next=function(Y){switch(x){case 1:case 2:case 3:var nt=3;break;default:nt=x}var K=x;x=nt;try{return Y()}finally{x=K}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(Y,nt){switch(Y){case 1:case 2:case 3:case 4:case 5:break;default:Y=3}var K=x;x=Y;try{return nt()}finally{x=K}},o.unstable_scheduleCallback=function(Y,nt,K){var vt=o.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?vt+K:vt):K=vt,Y){case 1:var yt=-1;break;case 2:yt=250;break;case 5:yt=1073741823;break;case 4:yt=1e4;break;default:yt=5e3}return yt=K+yt,Y={id:v++,callback:nt,priorityLevel:Y,startTime:K,expirationTime:yt,sortIndex:-1},K>vt?(Y.sortIndex=K,n(_,Y),a(g)===null&&Y===a(_)&&(U?(L(O),O=-1):U=!0,ft(X,K-vt))):(Y.sortIndex=yt,n(g,Y),C||M||(C=!0,B||(B=!0,ot()))),Y},o.unstable_shouldYield=b,o.unstable_wrapCallback=function(Y){var nt=x;return function(){var K=x;x=nt;try{return Y.apply(this,arguments)}finally{x=K}}}})(Zh)),Zh}var Iv;function Qy(){return Iv||(Iv=1,jh.exports=Ky()),jh.exports}var Kh={exports:{}},Dn={};var Fv;function Jy(){if(Fv)return Dn;Fv=1;var o=mp();function n(v){var p="https://react.dev/errors/"+v;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)p+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+v+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(){}var s={d:{f:a,r:function(){throw Error(n(522))},D:a,C:a,L:a,m:a,X:a,S:a,M:a},p:0,findDOMNode:null},u=Symbol.for("react.portal"),f=Symbol.for("react.recoverable"),h=Symbol.for("react.optimistic_key");function d(v,p,x){var M=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:M==null?null:M===h?h:""+M,children:v,containerInfo:p,implementation:x}}var g=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function _(v,p){if(v==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Dn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Dn.browser=function(v){return{$$typeof:f,_reason:v}},Dn.createPortal=function(v,p){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(n(299));return d(v,p,null,x)},Dn.flushSync=function(v){var p=g.T,x=s.p;try{if(g.T=null,s.p=2,v)return v()}finally{g.T=p,s.p=x,s.d.f()}},Dn.preconnect=function(v,p){typeof v=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(v,p))},Dn.prefetchDNS=function(v){typeof v=="string"&&s.d.D(v)},Dn.preinit=function(v,p){if(typeof v=="string"&&p&&typeof p.as=="string"){var x=p.as,M=_(x,p.crossOrigin),C=typeof p.integrity=="string"?p.integrity:void 0,U=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;x==="style"?s.d.S(v,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:M,integrity:C,fetchPriority:U}):x==="script"&&s.d.X(v,{crossOrigin:M,integrity:C,fetchPriority:U,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Dn.preinitModule=function(v,p){if(typeof v=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var x=_(p.as,p.crossOrigin);s.d.M(v,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0})}}else p==null&&s.d.M(v)},Dn.preload=function(v,p){if(typeof v=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var x=p.as,M=_(x,p.crossOrigin);s.d.L(v,x,{crossOrigin:M,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Dn.preloadModule=function(v,p){if(typeof v=="string")if(p){var x=_(p.as,p.crossOrigin);s.d.m(v,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0})}else s.d.m(v)},Dn.requestFormReset=function(v){s.d.r(v)},Dn.unstable_batchedUpdates=function(v,p){return v(p)},Dn.useFormState=function(v,p,x){return g.H.useFormState(v,p,x)},Dn.useFormStatus=function(){return g.H.useHostTransitionStatus()},Dn.version="19.3.1",Dn}var Hv;function $y(){if(Hv)return Kh.exports;Hv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(n){console.error(n)}}return o(),Kh.exports=Jy(),Kh.exports}var Gv;function tM(){if(Gv)return Ko;Gv=1;var o=Qy(),n=mp(),a=$y();function s(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var i=2;i<arguments.length;i++)e+="&args[]="+encodeURIComponent(arguments[i])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function f(t){for(var e=t,i=e;i&&!i.alternate;)e=i,(e.flags&4098)!==0&&(t=e.return),i=e.return;for(;e.return;)e=e.return;return e.tag===3?t:null}function h(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function d(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function g(t){if(f(t)!==t)throw Error(s(188))}function _(t){var e=t.alternate;if(!e){if(e=f(t),e===null)throw Error(s(188));return e!==t?null:t}for(var i=t,r=e;;){var l=i.return;if(l===null)break;var c=l.alternate;if(c===null){if(r=l.return,r!==null){i=r;continue}break}if(l.child===c.child){for(c=l.child;c;){if(c===i)return g(l),t;if(c===r)return g(l),e;c=c.sibling}throw Error(s(188))}if(i.return!==r.return)i=l,r=c;else{for(var m=!1,E=l.child;E;){if(E===i){m=!0,i=l,r=c;break}if(E===r){m=!0,r=l,i=c;break}E=E.sibling}if(!m){for(E=c.child;E;){if(E===i){m=!0,i=c,r=l;break}if(E===r){m=!0,r=c,i=l;break}E=E.sibling}if(!m)throw Error(s(189))}}if(i.alternate!==r)throw Error(s(190))}if(i.tag!==3)throw Error(s(188));return i.stateNode.current===i?t:e}function v(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=v(t),e!==null)return e;t=t.sibling}return null}function p(t,e,i,r,l,c){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&i(t,r,l,c)||(t.tag!==22||t.memoizedState===null)&&(e||t.tag!==5&&t.tag!==27)&&p(t.child,e,i,r,l,c))return!0;t=t.sibling}return!1}function x(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function M(t){var e=!1;for(t=t.return;t!==null&&(t.tag===4&&(e=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return e}function C(t){var e=[null,null],i=x(t);return i===null||U(e,t,i.child,{foundSelf:!1}),e}function U(t,e,i,r){for(;i!==null;){if(i===e)r.foundSelf=!0;else if(i.tag===5||i.tag===27||i.tag===6){if(r.foundSelf)return t[1]=i,!0;t[0]=i}else if((i.tag!==22||i.memoizedState===null)&&U(t,e,i.child,r))return!0;i=i.sibling}return!1}function y(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(s(559))}}var S=null,L=null;function N(t,e,i){return t===i?!0:t===e?(S=t,!0):!1}function w(t,e,i){return t===i?(L=t,!1):t===e?(L!==null&&(S=t),!0):!1}function X(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function B(t,e,i){for(var r=0,l=t;l;l=i(l))r++;l=0;for(var c=e;c;c=i(c))l++;for(;0<r-l;)t=i(t),r--;for(;0<l-r;)e=i(e),l--;for(;r--;){if(t===e||e!==null&&t===e.alternate)return t;t=i(t),e=i(e)}return null}var O=Object.assign,I=Symbol.for("react.element"),D=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),ot=Symbol.for("react.strict_mode"),st=Symbol.for("react.profiler"),mt=Symbol.for("react.consumer"),ft=Symbol.for("react.context"),Y=Symbol.for("react.forward_ref"),nt=Symbol.for("react.suspense"),K=Symbol.for("react.suspense_list"),vt=Symbol.for("react.memo"),yt=Symbol.for("react.lazy"),Ht=Symbol.for("react.activity"),ee=Symbol.for("react.legacy_hidden"),Et=Symbol.for("react.memo_cache_sentinel"),A=Symbol.for("react.view_transition"),q=Symbol.for("react.recoverable"),ht=Symbol.iterator;function lt(t){return t===null||typeof t!="object"?null:(t=ht&&t[ht]||t["@@iterator"],typeof t=="function"?t:null)}var Tt=Symbol.for("react.client.reference");function Gt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Tt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case F:return"Fragment";case st:return"Profiler";case ot:return"StrictMode";case nt:return"Suspense";case K:return"SuspenseList";case Ht:return"Activity";case A:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case b:return"Portal";case ft:return t.displayName||"Context";case mt:return(t._context.displayName||"Context")+".Consumer";case Y:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case vt:return e=t.displayName||null,e!==null?e:Gt(t.type)||"Memo";case yt:e=t._payload,t=t._init;try{return Gt(t(e))}catch{}}return null}var Rt=Array.isArray,At=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,zt=a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ce={pending:!1,data:null,method:null,action:null},H=[],tn=-1;function he(t){return{current:t}}function ue(t){0>tn||(t.current=H[tn],H[tn]=null,tn--)}function Ct(t,e){tn++,H[tn]=t.current,t.current=e}var fe=he(null),Zt=he(null),ie=he(null),Qe=he(null);function z(t,e){switch(Ct(ie,e),Ct(Zt,t),Ct(fe,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?V_(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=V_(e),t=X_(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ue(fe),Ct(fe,t)}function T(){ue(fe),ue(Zt),ue(ie)}function tt(t){var e=t.memoizedState;e!==null&&(ws._currentValue=e.memoizedState,Ct(Qe,t)),e=fe.current;var i=X_(e,t.type);e!==i&&(Ct(Zt,t),Ct(fe,i))}function pt(t){Zt.current===t&&(ue(fe),ue(Zt)),Qe.current===t&&(ue(Qe),ws._currentValue=ce)}var _t,ut;function Xt(t){if(_t===void 0)try{throw Error()}catch(i){var e=i.stack.trim().match(/\n( *(at )?)/);_t=e&&e[1]||"",ut=-1<i.stack.indexOf(`
    at`)?" (<anonymous>)":-1<i.stack.indexOf("@")?"@unknown:0:0":""}return`
`+_t+t+ut}var Lt=!1;function Yt(t,e){if(!t||Lt)return"";Lt=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(e){var dt=function(){throw Error()};if(Object.defineProperty(dt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(dt,[])}catch(Ut){var k=Ut}Reflect.construct(t,[],dt)}else{try{dt.call()}catch(Ut){k=Ut}dt=!1;try{var $=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),dt=!0,new t}finally{dt&&($!==void 0?Object.defineProperty(t.prototype,"props",$):delete t.prototype.props)}}}else{try{throw Error()}catch(Ut){k=Ut}(dt=t())&&typeof dt.catch=="function"&&dt.catch(function(){})}}catch(Ut){if(Ut&&k&&typeof Ut.stack=="string")return[Ut.stack,k.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=r.DetermineComponentFrameRoot(),m=c[0],E=c[1];if(m&&E){var P=m.split(`
`),j=E.split(`
`);for(l=r=0;r<P.length&&!P[r].includes("DetermineComponentFrameRoot");)r++;for(;l<j.length&&!j[l].includes("DetermineComponentFrameRoot");)l++;if(r===P.length||l===j.length)for(r=P.length-1,l=j.length-1;1<=r&&0<=l&&P[r]!==j[l];)l--;for(;1<=r&&0<=l;r--,l--)if(P[r]!==j[l]){if(r!==1||l!==1)do if(r--,l--,0>l||P[r]!==j[l]){var et=`
`+P[r].replace(" at new "," at ");return t.displayName&&et.includes("<anonymous>")&&(et=et.replace("<anonymous>",t.displayName)),et}while(1<=r&&0<=l);break}}}finally{Lt=!1,Error.prepareStackTrace=i}return(i=t?t.displayName||t.name:"")?Xt(i):""}function jt(t,e){switch(t.tag){case 26:case 27:case 5:return Xt(t.type);case 16:return Xt("Lazy");case 13:return t.child!==e&&e!==null?Xt("Suspense Fallback"):Xt("Suspense");case 19:return Xt("SuspenseList");case 0:case 15:return Yt(t.type,!1);case 11:return Yt(t.type.render,!1);case 1:return Yt(t.type,!0);case 31:return Xt("Activity");case 30:return Xt("ViewTransition");default:return""}}function St(t){try{var e="",i=null;do e+=jt(t,i),i=t,t=t.return;while(t);return e}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var It=Object.prototype.hasOwnProperty,te=o.unstable_scheduleCallback,Jt=o.unstable_cancelCallback,Ot=o.unstable_shouldYield,se=o.unstable_requestPaint,V=o.unstable_now,Bt=o.unstable_getCurrentPriorityLevel,xt=o.unstable_ImmediatePriority,Vt=o.unstable_UserBlockingPriority,Mt=o.unstable_NormalPriority,gt=o.unstable_LowPriority,qt=o.unstable_IdlePriority,le=o.log,Xe=o.unstable_setDisableYieldValue,Te=null,je=null;function vn(t){if(typeof le=="function"&&Xe(t),je&&typeof je.setStrictMode=="function")try{je.setStrictMode(Te,t)}catch{}}var Un=Math.clz32?Math.clz32:io,hl=Math.log,Wi=Math.LN2;function io(t){return t>>>=0,t===0?32:31-(hl(t)/Wi|0)|0}var ur=256,cr=262144,ji=4194304;function Di(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Zi(t,e,i){var r=t.pendingLanes;if(r===0)return 0;var l=0,c=t.suspendedLanes,m=t.pingedLanes;t=t.warmLanes;var E=r&134217727;return E!==0?(r=E&~c,r!==0?l=Di(r):(m&=E,m!==0?l=Di(m):i||(i=E&~t,i!==0&&(l=Di(i))))):(E=r&~c,E!==0?l=Di(E):m!==0?l=Di(m):i||(i=r&~t,i!==0&&(l=Di(i)))),l===0?0:e!==0&&e!==l&&(e&c)===0&&(c=l&-l,i=e&-e,c>=i||c===32&&(i&4194048)!==0)?e:l}function Ta(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function ao(t,e){(e&8)!==0&&(e|=e&32);var i=t.entangledLanes;if(i!==0)for(t=t.entanglements,i&=e;0<i;){var r=31-Un(i),l=1<<r;e|=t[r],i&=~l}return e}function vc(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function dl(){var t=ji;return ji<<=1,(ji&62914560)===0&&(ji=4194304),t}function ro(t){for(var e=[],i=0;31>i;i++)e.push(t);return e}function fr(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Sc(t,e,i,r,l,c){var m=t.pendingLanes;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=i,t.entangledLanes&=i,t.errorRecoveryDisabledLanes&=i,t.shellSuspendCounter=0;var E=t.entanglements,P=t.expirationTimes,j=t.hiddenUpdates;for(i=m&~i;0<i;){var et=31-Un(i),dt=1<<et;E[et]=0,P[et]=-1;var k=j[et];if(k!==null)for(j[et]=null,et=0;et<k.length;et++){var $=k[et];$!==null&&($.lane&=-536870913)}i&=~dt}r!==0&&pl(t,r,0),c!==0&&l===0&&t.tag!==0&&(t.suspendedLanes|=c&~(m&~e))}function pl(t,e,i){t.pendingLanes|=e,t.suspendedLanes&=~e;var r=31-Un(e);t.entangledLanes|=e,t.entanglements[r]=t.entanglements[r]|1073741824|i&261930}function R(t,e){var i=t.entangledLanes|=e;for(t=t.entanglements;i;){var r=31-Un(i),l=1<<r;l&e|t[r]&e&&(t[r]|=e),i&=~l}}function Z(t,e){var i=e&-e;return i=(i&42)!==0?1:at(i),(i&(t.suspendedLanes|e))!==0?0:i}function at(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function rt(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Q(){var t=zt.p;return t!==0?t:(t=window.event,t===void 0?32:Av(t.type))}function bt(t,e){var i=zt.p;try{return zt.p=t,e()}finally{zt.p=i}}var wt=Math.random().toString(36).slice(2),Nt="__reactFiber$"+wt,Dt="__reactProps$"+wt,$t="__reactContainer$"+wt,re="__reactEvents$"+wt,Qt="__reactListeners$"+wt,ve="__reactHandles$"+wt,Ue="__reactResources$"+wt,He="__reactMarker$"+wt,Oe="__reactLoad$"+wt;function Ce(t){delete t[Nt],delete t[Dt],delete t[Qt],delete t[ve]}function Wt(t){var e;if(e=t[Nt])return e;for(var i=t.parentNode;i;){if(e=i[$t]||i[Nt]){if(i=e.alternate,e.child!==null||i!==null&&i.child!==null)for(t=sv(t);t!==null;){if(i=t[Nt])return i;t=sv(t)}return e}t=i,i=t.parentNode}return null}function ze(t){if(t=t[Nt]||t[$t]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function Se(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(s(33))}function sn(t){var e=t[Ue];return e||(e=t[Ue]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Ze(t){t[He]=!0}function Nn(t){t[Oe]=void 0}var ba=new Set,qe={};function on(t,e){pn(t,e),pn(t+"Capture",e)}function pn(t,e){for(qe[t]=e,t=0;t<e.length;t++)ba.add(e[t])}var En=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Tn={},Yr={};function Ki(t){return It.call(Yr,t)?!0:It.call(Tn,t)?!1:En.test(t)?Yr[t]=!0:(Tn[t]=!0,!1)}var we=!1;function Cp(){var t=we;return we=!1,t}function ml(t,e,i){if(Ki(e))if(i===null)t.removeAttribute(e);else{switch(typeof i){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var r=e.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,i)}}function gl(t,e,i){if(i===null)t.removeAttribute(e);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,i)}}function Qi(t,e,i,r){if(r===null)t.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttributeNS(e,i,r)}}function Zn(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function wp(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function dS(t,e,i){var r=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var l=r.get,c=r.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return l.call(this)},set:function(m){i=""+m,c.call(this,m)}}),Object.defineProperty(t,e,{enumerable:r.enumerable}),{getValue:function(){return i},setValue:function(m){i=""+m},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function xc(t){if(!t._valueTracker){var e=wp(t)?"checked":"value";t._valueTracker=dS(t,e,""+t[e])}}function Dp(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var i=e.getValue(),r="";return t&&(r=wp(t)?t.checked?"true":"false":t.value),t=r,t!==i?(e.setValue(t),!0):!1}var pS=/[\n"\\]/g;function si(t){return t.replace(pS,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function yc(t,e,i,r,l,c,m,E){t.name="",m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?t.type=m:t.removeAttribute("type"),e!=null?m==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Zn(e)):t.value!==""+Zn(e)&&(t.value=""+Zn(e)):m!=="submit"&&m!=="reset"||t.removeAttribute("value"),e!=null?m==="number"&&t.value==e?Mc(t,Zn(t.value)):Mc(t,Zn(e)):i!=null?Mc(t,Zn(i)):r!=null&&t.removeAttribute("value"),l==null&&c!=null&&(t.defaultChecked=!!c),l!=null&&(t.checked=l&&typeof l!="function"&&typeof l!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.name=""+Zn(E):t.removeAttribute("name")}function Up(t,e,i,r,l,c,m,E){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(t.type=c),e!=null||i!=null){if(!(c!=="submit"&&c!=="reset"||e!=null)){xc(t);return}i=i!=null?""+Zn(i):"",e=e!=null?""+Zn(e):i,E||e===t.value||(t.value=e),t.defaultValue=e}r=r??l,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=E?t.checked:!!r,t.defaultChecked=!!r,m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(t.name=m),xc(t)}function Mc(t,e){t.defaultValue!==""+e&&(t.defaultValue=""+e)}function Wr(t,e,i,r){if(t=t.options,e){e={};for(var l=0;l<i.length;l++)e["$"+i[l]]=!0;for(i=0;i<t.length;i++)l=e.hasOwnProperty("$"+t[i].value),t[i].selected!==l&&(t[i].selected=l),l&&r&&(t[i].defaultSelected=!0)}else{for(i=""+Zn(i),e=null,l=0;l<t.length;l++){if(t[l].value===i){t[l].selected=!0,r&&(t[l].defaultSelected=!0);return}e!==null||t[l].disabled||(e=t[l])}e!==null&&(e.selected=!0)}}function Np(t,e,i){if(e!=null&&(e=""+Zn(e),e!==t.value&&(t.value=e),i==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=i!=null?""+Zn(i):""}function Lp(t,e,i,r){if(e==null){if(r!=null){if(i!=null)throw Error(s(92));if(Rt(r)){if(1<r.length)throw Error(s(93));r=r[0]}i=r}i==null&&(i=""),e=i}i=Zn(e),t.defaultValue=i,r=t.textContent,r===i&&r!==""&&r!==null&&(t.value=r),xc(t)}function jr(t,e){if(e){var i=t.firstChild;if(i&&i===t.lastChild&&i.nodeType===3){i.nodeValue=e;return}}t.textContent=e}var mS=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Op(t,e,i){var r=e.indexOf("--")===0;i==null||typeof i=="boolean"||i===""?r?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":r?t.setProperty(e,i):typeof i!="number"||i===0||mS.has(e)?e==="float"?t.cssFloat=i:t[e]=(""+i).trim():t[e]=i+"px"}function zp(t,e,i){if(e!=null&&typeof e!="object")throw Error(s(62));if(t=t.style,i!=null){for(var r in i)!i.hasOwnProperty(r)||e!=null&&e.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="",we=!0);for(var l in e)r=e[l],e.hasOwnProperty(l)&&i[l]!==r&&(Op(t,l,r),we=!0)}else for(var c in e)e.hasOwnProperty(c)&&Op(t,c,e[c])}function Ec(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gS=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),_S=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function _l(t){return _S.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Ui(){}var Tc=null;function bc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Zr=null,Kr=null;function Pp(t){var e=ze(t);if(e&&(t=e.stateNode)){var i=t[Dt]||null;t:switch(t=e.stateNode,e.type){case"input":if(yc(t,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name),e=i.name,i.type==="radio"&&e!=null){for(i=t;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll('input[name="'+si(""+e)+'"][type="radio"]'),e=0;e<i.length;e++){var r=i[e];if(r!==t&&r.form===t.form){var l=r[Dt]||null;if(!l)throw Error(s(90));yc(r,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(e=0;e<i.length;e++)r=i[e],r.form===t.form&&Dp(r)}break t;case"textarea":Np(t,i.value,i.defaultValue);break t;case"select":e=i.value,e!=null&&Wr(t,!!i.multiple,e,!1)}}}var Ac=!1;function Bp(t,e,i){if(Ac)return t(e,i);Ac=!0;try{var r=t(e);return r}finally{if(Ac=!1,(Zr!==null||Kr!==null)&&(_u(),Zr&&(e=Zr,t=Kr,Kr=Zr=null,Pp(e),t)))for(e=0;e<t.length;e++)Pp(t[e])}}function so(t,e){var i=t.stateNode;if(i===null)return null;var r=i[Dt]||null;if(r===null)return null;i=r[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break t;default:t=!1}if(t)return null;if(i&&typeof i!="function")throw Error(s(231,e,typeof i));return i}var Ji=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Rc=!1;if(Ji)try{var oo={};Object.defineProperty(oo,"passive",{get:function(){Rc=!0}}),window.addEventListener("test",oo,oo),window.removeEventListener("test",oo,oo)}catch{Rc=!1}var Aa=null,Cc=null,vl=null;function Ip(){if(vl)return vl;var t,e=Cc,i=e.length,r,l="value"in Aa?Aa.value:Aa.textContent,c=l.length;for(t=0;t<i&&e[t]===l[t];t++);var m=i-t;for(r=1;r<=m&&e[i-r]===l[c-r];r++);return vl=l.slice(t,1<r?1-r:void 0)}function Sl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function xl(){return!0}function Fp(){return!1}function Pn(t){function e(i,r,l,c,m){this._reactName=i,this._targetInst=l,this.type=r,this.nativeEvent=c,this.target=m,this.currentTarget=null;for(var E in t)t.hasOwnProperty(E)&&(i=t[E],this[E]=i?i(c):c[E]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?xl:Fp,this.isPropagationStopped=Fp,this}return O(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=xl)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=xl)},persist:function(){},isPersistent:xl}),e}var Ra={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yl=Pn(Ra),lo=O({},Ra,{view:0,detail:0}),vS=Pn(lo),wc,Dc,uo,Ml=O({},lo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Nc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==uo&&(uo&&t.type==="mousemove"?(wc=t.screenX-uo.screenX,Dc=t.screenY-uo.screenY):Dc=wc=0,uo=t),wc)},movementY:function(t){return"movementY"in t?t.movementY:Dc}}),Hp=Pn(Ml),SS=O({},Ml,{dataTransfer:0}),xS=Pn(SS),yS=O({},lo,{relatedTarget:0}),Uc=Pn(yS),MS=O({},Ra,{animationName:0,elapsedTime:0,pseudoElement:0}),ES=Pn(MS),TS=O({},Ra,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),bS=Pn(TS),AS=O({},Ra,{data:0}),Gp=Pn(AS),RS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},CS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function DS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=wS[t])?!!e[t]:!1}function Nc(){return DS}var US=O({},lo,{key:function(t){if(t.key){var e=RS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Sl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?CS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Nc,charCode:function(t){return t.type==="keypress"?Sl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Sl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),NS=Pn(US),LS=O({},Ml,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vp=Pn(LS),OS=O({},Ra,{submitter:0}),zS=Pn(OS),PS=O({},lo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Nc}),BS=Pn(PS),IS=O({},Ra,{propertyName:0,elapsedTime:0,pseudoElement:0}),FS=Pn(IS),HS=O({},Ml,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),GS=Pn(HS),VS=O({},Ra,{newState:0,oldState:0,source:0}),XS=Pn(VS),qS=[9,13,27,32],Lc=Ji&&"CompositionEvent"in window,co=null;Ji&&"documentMode"in document&&(co=document.documentMode);var kS=Ji&&"TextEvent"in window&&!co,Xp=Ji&&(!Lc||co&&8<co&&11>=co),qp=" ",kp=!1;function Yp(t,e){switch(t){case"keyup":return qS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Qr=!1;function YS(t,e){switch(t){case"compositionend":return Wp(e);case"keypress":return e.which!==32?null:(kp=!0,qp);case"textInput":return t=e.data,t===qp&&kp?null:t;default:return null}}function WS(t,e){if(Qr)return t==="compositionend"||!Lc&&Yp(t,e)?(t=Ip(),vl=Cc=Aa=null,Qr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Xp&&e.locale!=="ko"?null:e.data;default:return null}}var jS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!jS[t.type]:e==="textarea"}function Zp(t,e,i,r){Zr?Kr?Kr.push(r):Kr=[r]:Zr=r,e=Eu(e,"onChange"),0<e.length&&(i=new yl("onChange","change",null,i,r),t.push({event:i,listeners:e}))}var fo=null,ho=null;function ZS(t){P_(t,0)}function El(t){var e=Se(t);if(Dp(e))return t}function Kp(t,e){if(t==="change")return e}var Qp=!1;if(Ji){var Oc;if(Ji){var zc="oninput"in document;if(!zc){var Jp=document.createElement("div");Jp.setAttribute("oninput","return;"),zc=typeof Jp.oninput=="function"}Oc=zc}else Oc=!1;Qp=Oc&&(!document.documentMode||9<document.documentMode)}function $p(){fo&&(fo.detachEvent("onpropertychange",tm),ho=fo=null)}function tm(t){if(t.propertyName==="value"&&El(ho)){var e=[];Zp(e,ho,t,bc(t)),Bp(ZS,e)}}function KS(t,e,i){t==="focusin"?($p(),fo=e,ho=i,fo.attachEvent("onpropertychange",tm)):t==="focusout"&&$p()}function QS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return El(ho)}function JS(t,e){if(t==="click")return El(e)}function $S(t,e){if(t==="input"||t==="change")return El(e)}function tx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Kn=typeof Object.is=="function"?Object.is:tx;function po(t,e){if(Kn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var i=Object.keys(t),r=Object.keys(e);if(i.length!==r.length)return!1;for(r=0;r<i.length;r++){var l=i[r];if(!It.call(e,l)||!Kn(t[l],e[l]))return!1}return!0}function Pc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function em(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function nm(t,e){var i=em(t);t=0;for(var r;i;){if(i.nodeType===3){if(r=t+i.textContent.length,t<=e&&r>=e)return{node:i,offset:e-t};t=r}t:{for(;i;){if(i.nextSibling){i=i.nextSibling;break t}i=i.parentNode}i=void 0}i=em(i)}}function im(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?im(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function am(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=Pc(t.document);e instanceof t.HTMLIFrameElement;){try{var i=typeof e.contentWindow.location.href=="string"}catch{i=!1}if(i)t=e.contentWindow;else break;e=Pc(t.document)}return e}function Bc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var ex=Ji&&"documentMode"in document&&11>=document.documentMode,Jr=null,Ic=null,mo=null,Fc=!1;function rm(t,e,i){var r=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;Fc||Jr==null||Jr!==Pc(r)||(r=Jr,"selectionStart"in r&&Bc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),mo&&po(mo,r)||(mo=r,r=Eu(Ic,"onSelect"),0<r.length&&(e=new yl("onSelect","select",null,e,i),t.push({event:e,listeners:r}),e.target=Jr)))}function hr(t,e){var i={};return i[t.toLowerCase()]=e.toLowerCase(),i["Webkit"+t]="webkit"+e,i["Moz"+t]="moz"+e,i}var $r={animationend:hr("Animation","AnimationEnd"),animationiteration:hr("Animation","AnimationIteration"),animationstart:hr("Animation","AnimationStart"),transitionrun:hr("Transition","TransitionRun"),transitionstart:hr("Transition","TransitionStart"),transitioncancel:hr("Transition","TransitionCancel"),transitionend:hr("Transition","TransitionEnd")},Hc={},sm={};Ji&&(sm=document.createElement("div").style,"AnimationEvent"in window||(delete $r.animationend.animation,delete $r.animationiteration.animation,delete $r.animationstart.animation),"TransitionEvent"in window||delete $r.transitionend.transition);function dr(t){if(Hc[t])return Hc[t];if(!$r[t])return t;var e=$r[t],i;for(i in e)if(e.hasOwnProperty(i)&&i in sm)return Hc[t]=e[i];return t}var om=dr("animationend"),lm=dr("animationiteration"),um=dr("animationstart"),nx=dr("transitionrun"),ix=dr("transitionstart"),ax=dr("transitioncancel"),cm=dr("transitionend"),fm=new Map,Gc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Gc.push("scrollEnd");function vi(t,e){fm.set(t,e),on(e,[t])}var rx=0;function $i(t,e){if(t.name!=null&&t.name!=="auto")return t.name;if(e.autoName!==null)return e.autoName;t=Mi.identifierPrefix;var i=rx++;return t="_"+t+"t_"+i.toString(32)+"_",e.autoName=t}function hm(t){if(t==null||typeof t=="string")return t;var e=null,i=Ss;if(i!==null)for(var r=0;r<i.length;r++){var l=t[i[r]];if(l!=null){if(l==="none")return"none";e=e==null?l:e+(" "+l)}}return e??t.default}function ta(t,e){return t=hm(t),e=hm(e),e==null?t==="auto"?null:t:e==="auto"?null:e}var Tl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},oi=[],ts=0,Vc=0;function bl(){for(var t=ts,e=Vc=ts=0;e<t;){var i=oi[e];oi[e++]=null;var r=oi[e];oi[e++]=null;var l=oi[e];oi[e++]=null;var c=oi[e];if(oi[e++]=null,r!==null&&l!==null){var m=r.pending;m===null?l.next=l:(l.next=m.next,m.next=l),r.pending=l}c!==0&&dm(i,l,c)}}function Al(t,e,i,r){oi[ts++]=t,oi[ts++]=e,oi[ts++]=i,oi[ts++]=r,Vc|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function Xc(t,e,i,r){return Al(t,e,i,r),Rl(t)}function pr(t,e){return Al(t,null,null,e),Rl(t)}function dm(t,e,i){t.lanes|=i;var r=t.alternate;r!==null&&(r.lanes|=i);for(var l=!1,c=t.return;c!==null;)c.childLanes|=i,r=c.alternate,r!==null&&(r.childLanes|=i),c.tag===22&&(t=c.stateNode,t===null||t._visibility&1||(l=!0)),t=c,c=c.return;return t.tag===3?(c=t.stateNode,l&&e!==null&&(l=31-Un(i),t=c.hiddenUpdates,r=t[l],r===null?t[l]=[e]:r.push(e),e.lane=i|536870912),c):null}function Rl(t){if(50<Bo)throw Bo=0,gu=null,Error(s(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var es={};function sx(t,e,i,r){this.tag=t,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Gn(t,e,i,r){return new sx(t,e,i,r)}function qc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ea(t,e){var i=t.alternate;return i===null?(i=Gn(t.tag,e,t.key,t.mode),i.elementType=t.elementType,i.type=t.type,i.stateNode=t.stateNode,i.alternate=t,t.alternate=i):(i.pendingProps=e,i.type=t.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=t.flags&1206910976,i.childLanes=t.childLanes,i.lanes=t.lanes,i.child=t.child,i.memoizedProps=t.memoizedProps,i.memoizedState=t.memoizedState,i.updateQueue=t.updateQueue,e=t.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},i.sibling=t.sibling,i.index=t.index,i.ref=t.ref,i.refCleanup=t.refCleanup,i}function pm(t,e){t.flags&=1206910978;var i=t.alternate;return i===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=i.childLanes,t.lanes=i.lanes,t.child=i.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=i.memoizedProps,t.memoizedState=i.memoizedState,t.updateQueue=i.updateQueue,t.type=i.type,e=i.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Cl(t,e,i,r,l,c){var m=0;if(r=t,typeof r=="function")qc(r)&&(m=1);else if(typeof r=="string")m=Oy(t,i,fe.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(r){case Ht:return t=Gn(31,i,e,l),t.elementType=Ht,t.lanes=c,t;case F:return mr(i.children,l,c,e);case ot:m=8,l|=24;break;case st:return t=Gn(12,i,e,l|2),t.elementType=st,t.lanes=c,t;case nt:return t=Gn(13,i,e,l),t.elementType=nt,t.lanes=c,t;case K:return t=Gn(19,i,e,l),t.elementType=K,t.lanes=c,t;case ee:case A:return t=l|32,t=Gn(30,i,e,t),t.elementType=A,t.lanes=c,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case ft:m=10;break t;case mt:m=9;break t;case Y:m=11;break t;case vt:m=14;break t;case yt:m=16,r=null;break t}m=29,i=Error(s(130,t===null?"null":typeof t,"")),r=null}return e=Gn(m,i,e,l),e.elementType=t,e.type=r,e.lanes=c,e}function mr(t,e,i,r){return t=Gn(7,t,r,e),t.lanes=i,t}function kc(t,e,i){return t=Gn(6,t,null,e),t.lanes=i,t}function mm(t){var e=Gn(18,null,null,0);return e.stateNode=t,e}function Yc(t,e,i){return e=Gn(4,t.children!==null?t.children:[],t.key,e),e.lanes=i,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var gm=new WeakMap;function li(t,e){if(typeof t=="object"&&t!==null){var i=gm.get(t);return i!==void 0?i:(e={value:t,source:e,stack:St(e)},gm.set(t,e),e)}return{value:t,source:e,stack:St(e)}}var ns=[],is=0,wl=null,go=0,ui=[],ci=0,Ca=null,Ni=1,Li="";function na(t,e){ns[is++]=go,ns[is++]=wl,wl=t,go=e}function _m(t,e,i){ui[ci++]=Ni,ui[ci++]=Li,ui[ci++]=Ca,Ca=t;var r=Ni;t=Li;var l=32-Un(r)-1;r&=~(1<<l),i+=1;var c=32-Un(e)+l;if(30<c){var m=l-l%5;c=(r&(1<<m)-1).toString(32),r>>=m,l-=m,Ni=1<<32-Un(e)+l|i<<l|r,Li=c+t}else Ni=1<<c|i<<l|r,Li=t}function Dl(t){t.return!==null&&(na(t,1),_m(t,1,0))}function Wc(t){for(;t===wl;)wl=ns[--is],ns[is]=null,go=ns[--is],ns[is]=null;for(;t===Ca;)Ca=ui[--ci],ui[ci]=null,Li=ui[--ci],ui[ci]=null,Ni=ui[--ci],ui[ci]=null}function vm(t,e){ui[ci++]=Ni,ui[ci++]=Li,ui[ci++]=Ca,Ni=e.id,Li=e.overflow,Ca=t}var Sn=null,Ye=null,_e=!1,wa=null,fi=!1,jc=Error(s(519));function Da(t){var e=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw _o(li(e,t)),jc}function Sm(t){var e=t.stateNode,i=t.type,r=t.memoizedProps;switch(e[Nt]=t,e[Dt]=r,i){case"dialog":ye("cancel",e),ye("close",e);break;case"iframe":case"object":case"embed":ye("load",e);break;case"video":case"audio":for(i=0;i<Fo.length;i++)ye(Fo[i],e);break;case"source":ye("error",e);break;case"img":case"image":case"link":ye("error",e),ye("load",e);break;case"details":ye("toggle",e);break;case"input":ye("invalid",e),Up(e,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":ye("invalid",e);break;case"textarea":ye("invalid",e),Lp(e,r.value,r.defaultValue,r.children)}i=r.children,typeof i!="string"&&typeof i!="number"&&typeof i!="bigint"||e.textContent===""+i||r.suppressHydrationWarning===!0||H_(e.textContent,i)?(r.popover!=null&&(ye("beforetoggle",e),ye("toggle",e)),r.onScroll!=null&&ye("scroll",e),r.onScrollEnd!=null&&ye("scrollend",e),r.onClick!=null&&(e.onclick=Ui),e=!0):e=!1,e||Da(t,!0)}function Ul(t){for(Sn=t.return;Sn;)switch(Sn.tag){case 5:case 31:case 13:fi=!1;return;case 27:case 3:fi=!0;return;default:Sn=Sn.return}}function as(t){if(t!==Sn)return!1;if(!_e)return Ul(t),_e=!0,!1;var e=t.tag,i;if((i=e!==3&&e!==27)&&((i=e===5)&&(i=t.type,i=!(i!=="form"&&i!=="button")||bh(t.type,t.memoizedProps)),i=!i),i&&Ye&&Da(t),Ul(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Ye=rv(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Ye=rv(t)}else e===27?(e=Ye,Ya(t.type)?(t=Oh,Oh=null,Ye=t):Ye=e):Ye=Sn?di(t.stateNode.nextSibling):null;return!0}function gr(){Ye=Sn=null,_e=!1}function Zc(){var t=wa;return t!==null&&(qn===null?qn=t:qn.push.apply(qn,t),wa=null),t}function _o(t){wa===null?wa=[t]:wa.push(t)}var Kc=he(null),_r=null,ia=null;function Ua(t,e,i){Ct(Kc,e._currentValue),e._currentValue=i}function aa(t){t._currentValue=Kc.current,ue(Kc)}function Nl(t,e,i){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===i)break;t=t.return}}function Qc(t,e,i,r){var l=t.child;for(l!==null&&(l.return=t);l!==null;){var c=l.dependencies;if(c!==null){var m=l.child;c=c.firstContext;t:for(;c!==null;){var E=c;c=l;for(var P=0;P<e.length;P++)if(E.context===e[P]){c.lanes|=i,E=c.alternate,E!==null&&(E.lanes|=i),Nl(c.return,i,t),r||(m=null);break t}c=E.next}}else if(l.tag===18){if(m=l.return,m===null)throw Error(s(341));m.lanes|=i,c=m.alternate,c!==null&&(c.lanes|=i),Nl(m,i,t),m=null}else l.tag===13&&l.memoizedState!==null&&l.memoizedState.dehydrated===null?(l.lanes|=i,m=l.alternate,m!==null&&(m.lanes|=i),Nl(l.return,i,t),m=l.child,m=m!==null?m.sibling:null):m=l.child;if(m!==null)m.return=l;else for(m=l;m!==null;){if(m===t){m=null;break}if(l=m.sibling,l!==null){l.return=m.return,m=l;break}m=m.return}l=m}}function vr(t,e,i,r){t=null;for(var l=e,c=!1;l!==null;){if(!c){if((l.flags&524288)!==0)c=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var m=l.alternate;if(m===null)throw Error(s(387));if(m=m.memoizedProps,m!==null){var E=l.type;Kn(l.pendingProps.value,m.value)||(t!==null?t.push(E):t=[E])}}else if(l===Qe.current){if(m=l.alternate,m===null)throw Error(s(387));m.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(t!==null?t.push(ws):t=[ws])}l=l.return}return t!==null&&Qc(e,t,i,r),e.flags|=262144,t!==null}function Ll(t){for(t=t.firstContext;t!==null;){if(!Kn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Sr(t){_r=t,ia=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function bn(t){return xm(_r,t)}function Ol(t,e){return _r===null&&Sr(t),xm(t,e)}function xm(t,e){var i=e._currentValue;if(e={context:e,memoizedValue:i,next:null},ia===null){if(t===null)throw Error(s(308));ia=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else ia=ia.next=e;return i}var ox=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(i,r){t.push(r)}};this.abort=function(){e.aborted=!0,t.forEach(function(i){return i()})}},lx=o.unstable_scheduleCallback,ux=o.unstable_NormalPriority,ln={$$typeof:ft,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Jc(){return{controller:new ox,data:new Map,refCount:0}}function vo(t){t.refCount--,t.refCount===0&&lx(ux,function(){t.controller.abort()})}function ym(t,e){if((t.pendingLanes&4194048)!==0){var i=t.transitionTypes;for(i===null&&(i=t.transitionTypes=[]),t=0;t<e.length;t++){var r=e[t];i.indexOf(r)===-1&&i.push(r)}}}var So=null;function cx(t){var e=t.transitionTypes;return t.transitionTypes=null,e}var xo=null,$c=0,xr=0,rs=null;function fx(t,e){if(xo===null){var i=xo=[];$c=0,xr=gh(),rs={status:"pending",value:void 0,then:function(r){i.push(r)}}}return $c++,e.then(Mm,Mm),e}function Mm(){if(--$c===0&&(So=null,xo!==null)){rs!==null&&(rs.status="fulfilled");var t=xo;xo=null,xr=0,rs=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function hx(t,e){var i=[],r={status:"pending",value:null,reason:null,then:function(l){i.push(l)}};return t.then(function(){r.status="fulfilled",r.value=e;for(var l=0;l<i.length;l++)(0,i[l])(e)},function(l){for(r.status="rejected",r.reason=l,l=0;l<i.length;l++)(0,i[l])(void 0)}),r}var Em=At.S;At.S=function(t,e){if(m_=V(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&fx(t,e),So!==null)for(var i=Es;i!==null;)ym(i,So),i=i.next;if(i=t.types,i!==null){for(var r=Es;r!==null;)ym(r,i),r=r.next;if(xr!==0){r=So,r===null&&(r=So=[]);for(var l=0;l<i.length;l++){var c=i[l];r.indexOf(c)===-1&&r.push(c)}}}Em!==null&&Em(t,e)};var yr=he(null);function tf(){var t=yr.current;return t!==null?t:ke.pooledCache}function zl(t,e){e===null?Ct(yr,yr.current):Ct(yr,e.pool)}function Tm(){var t=tf();return t===null?null:{parent:ln._currentValue,pool:t}}var ss=Error(s(460)),ef=Error(s(474)),Pl=Error(s(542)),Bl={then:function(){}};function bm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Am(t,e,i){switch(i=t[i],i===void 0?t.push(e):i!==e&&(e.then(Ui,Ui),e=i),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Cm(t),t===void 0&&!("reason"in e)?Error(s(600)):t;default:if(typeof e.status=="string")e.then(Ui,Ui);else{if(t=ke,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=e,t.status="pending",t.then(function(r){if(e.status==="pending"){var l=e;l.status="fulfilled",l.value=r}},function(r){if(e.status==="pending"){var l=e;l.status="rejected",l.reason=r}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Cm(t),t}throw Er=e,ss}}function Mr(t){try{var e=t._init;return e(t._payload)}catch(i){throw i!==null&&typeof i=="object"&&typeof i.then=="function"?(Er=i,ss):i}}var Er=null;function Rm(){if(Er===null)throw Error(s(459));var t=Er;return Er=null,t}function Cm(t){if(t===ss||t===Pl)throw Error(s(483))}var os=null,yo=0;function Il(t){var e=yo;return yo+=1,os===null&&(os=[]),Am(os,t,e)}function Na(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function Fl(t,e){throw e.$$typeof===I?Error(s(525)):(t=Object.prototype.toString.call(e),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function wm(t){function e(W,G){if(t){var J=W.deletions;J===null?(W.deletions=[G],W.flags|=16):J.push(G)}}function i(W,G){if(!t)return null;for(;G!==null;)e(W,G),G=G.sibling;return null}function r(W){for(var G=new Map;W!==null;)W.key===null?G.set(W.index,W):G.set(W.key,W),W=W.sibling;return G}function l(W,G){return W=ea(W,G),W.index=0,W.sibling=null,W}function c(W,G,J){return W.index=J,t?(J=W.alternate,J!==null?(J=J.index,J<G?(W.flags|=2,G):J):(W.flags|=134217730,G)):(W.flags|=1048576,G)}function m(W){return t&&W.alternate===null&&(W.flags|=134217730),W}function E(W,G,J,ct){return G===null||G.tag!==6?(G=kc(J,W.mode,ct),G.return=W,G):(G=l(G,J),G.return=W,G)}function P(W,G,J,ct){var Ft=J.type;return Ft===F?(W=et(W,G,J.props.children,ct,J.key),Na(W,J),W):G!==null&&(G.elementType===Ft||typeof Ft=="object"&&Ft!==null&&Ft.$$typeof===yt&&Mr(Ft)===G.type)?(G=l(G,J.props),Na(G,J),G.return=W,G):(G=Cl(J.type,J.key,J.props,null,W.mode,ct),Na(G,J),G.return=W,G)}function j(W,G,J,ct){return G===null||G.tag!==4||G.stateNode.containerInfo!==J.containerInfo||G.stateNode.implementation!==J.implementation?(G=Yc(J,W.mode,ct),G.return=W,G):(G=l(G,J.children||[]),G.return=W,G)}function et(W,G,J,ct,Ft){return G===null||G.tag!==7?(G=mr(J,W.mode,ct,Ft),G.return=W,G):(G=l(G,J),G.return=W,G)}function dt(W,G,J){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return G=kc(""+G,W.mode,J),G.return=W,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case D:return J=Cl(G.type,G.key,G.props,null,W.mode,J),Na(J,G),J.return=W,J;case b:return G=Yc(G,W.mode,J),G.return=W,G;case yt:return G=Mr(G),dt(W,G,J)}if(Rt(G)||lt(G))return G=mr(G,W.mode,J,null),G.return=W,G;if(typeof G.then=="function")return dt(W,Il(G),J);if(G.$$typeof===ft)return dt(W,Ol(W,G),J);Fl(W,G)}return null}function k(W,G,J,ct){var Ft=G!==null?G.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return Ft!==null?null:E(W,G,""+J,ct);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case D:return J.key===Ft?P(W,G,J,ct):null;case b:return J.key===Ft?j(W,G,J,ct):null;case yt:return J=Mr(J),k(W,G,J,ct)}if(Rt(J)||lt(J))return Ft!==null?null:et(W,G,J,ct,null);if(typeof J.then=="function")return k(W,G,Il(J),ct);if(J.$$typeof===ft)return k(W,G,Ol(W,J),ct);Fl(W,J)}return null}function $(W,G,J,ct,Ft){if(typeof ct=="string"&&ct!==""||typeof ct=="number"||typeof ct=="bigint")return W=W.get(J)||null,E(G,W,""+ct,Ft);if(typeof ct=="object"&&ct!==null){switch(ct.$$typeof){case D:return W=W.get(ct.key===null?J:ct.key)||null,P(G,W,ct,Ft);case b:return W=W.get(ct.key===null?J:ct.key)||null,j(G,W,ct,Ft);case yt:return ct=Mr(ct),$(W,G,J,ct,Ft)}if(Rt(ct)||lt(ct))return W=W.get(J)||null,et(G,W,ct,Ft,null);if(typeof ct.then=="function")return $(W,G,J,Il(ct),Ft);if(ct.$$typeof===ft)return $(W,G,J,Ol(G,ct),Ft);Fl(G,ct)}return null}function Ut(W,G,J,ct){for(var Ft=null,Ee=null,Kt=G,ne=G=0,fn=null;Kt!==null&&ne<J.length;ne++){Kt.index>ne?(fn=Kt,Kt=null):fn=Kt.sibling;var Ae=k(W,Kt,J[ne],ct);if(Ae===null){Kt===null&&(Kt=fn);break}t&&Kt&&Ae.alternate===null&&e(W,Kt),G=c(Ae,G,ne),Ee===null?Ft=Ae:Ee.sibling=Ae,Ee=Ae,Kt=fn}if(ne===J.length)return i(W,Kt),_e&&na(W,ne),Ft;if(Kt===null){for(;ne<J.length;ne++)Kt=dt(W,J[ne],ct),Kt!==null&&(G=c(Kt,G,ne),Ee===null?Ft=Kt:Ee.sibling=Kt,Ee=Kt);return _e&&na(W,ne),Ft}for(Kt=r(Kt);ne<J.length;ne++)fn=$(Kt,W,ne,J[ne],ct),fn!==null&&(t&&(Ae=fn.alternate,Ae!==null&&Kt.delete(Ae.key===null?ne:Ae.key)),G=c(fn,G,ne),Ee===null?Ft=fn:Ee.sibling=fn,Ee=fn);return t&&Kt.forEach(function(Qa){return e(W,Qa)}),_e&&na(W,ne),Ft}function kt(W,G,J,ct){if(J==null)throw Error(s(151));for(var Ft=null,Ee=null,Kt=G,ne=G=0,fn=null,Ae=J.next();Kt!==null&&!Ae.done;ne++,Ae=J.next()){Kt.index>ne?(fn=Kt,Kt=null):fn=Kt.sibling;var Qa=k(W,Kt,Ae.value,ct);if(Qa===null){Kt===null&&(Kt=fn);break}t&&Kt&&Qa.alternate===null&&e(W,Kt),G=c(Qa,G,ne),Ee===null?Ft=Qa:Ee.sibling=Qa,Ee=Qa,Kt=fn}if(Ae.done)return i(W,Kt),_e&&na(W,ne),Ft;if(Kt===null){for(;!Ae.done;ne++,Ae=J.next())Ae=dt(W,Ae.value,ct),Ae!==null&&(G=c(Ae,G,ne),Ee===null?Ft=Ae:Ee.sibling=Ae,Ee=Ae);return _e&&na(W,ne),Ft}for(Kt=r(Kt);!Ae.done;ne++,Ae=J.next())Ae=$(Kt,W,ne,Ae.value,ct),Ae!==null&&(t&&(fn=Ae.alternate,fn!==null&&Kt.delete(fn.key===null?ne:fn.key)),G=c(Ae,G,ne),Ee===null?Ft=Ae:Ee.sibling=Ae,Ee=Ae);return t&&Kt.forEach(function(Yy){return e(W,Yy)}),_e&&na(W,ne),Ft}function pe(W,G,J,ct){if(typeof J=="object"&&J!==null&&J.type===F&&J.key===null&&J.props.ref===void 0&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case D:t:{for(var Ft=J.key;G!==null;){if(G.key===Ft){if(Ft=J.type,Ft===F){if(G.tag===7){i(W,G.sibling),ct=l(G,J.props.children),Na(ct,J),ct.return=W,W=ct;break t}}else if(G.elementType===Ft||typeof Ft=="object"&&Ft!==null&&Ft.$$typeof===yt&&Mr(Ft)===G.type){i(W,G.sibling),ct=l(G,J.props),Na(ct,J),ct.return=W,W=ct;break t}i(W,G);break}else e(W,G);G=G.sibling}J.type===F?(ct=mr(J.props.children,W.mode,ct,J.key),Na(ct,J),ct.return=W,W=ct):(ct=Cl(J.type,J.key,J.props,null,W.mode,ct),Na(ct,J),ct.return=W,W=ct)}return m(W);case b:t:{for(Ft=J.key;G!==null;){if(G.key===Ft)if(G.tag===4&&G.stateNode.containerInfo===J.containerInfo&&G.stateNode.implementation===J.implementation){i(W,G.sibling),ct=l(G,J.children||[]),ct.return=W,W=ct;break t}else{i(W,G);break}else e(W,G);G=G.sibling}ct=Yc(J,W.mode,ct),ct.return=W,W=ct}return m(W);case yt:return J=Mr(J),pe(W,G,J,ct)}if(Rt(J))return Ut(W,G,J,ct);if(lt(J)){if(Ft=lt(J),typeof Ft!="function")throw Error(s(150));return J=Ft.call(J),kt(W,G,J,ct)}if(typeof J.then=="function")return pe(W,G,Il(J),ct);if(J.$$typeof===ft)return pe(W,G,Ol(W,J),ct);Fl(W,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,G!==null&&G.tag===6?(i(W,G.sibling),ct=l(G,J),ct.return=W,W=ct):(i(W,G),ct=kc(J,W.mode,ct),ct.return=W,W=ct),m(W)):i(W,G)}return function(W,G,J,ct){try{yo=0;var Ft=pe(W,G,J,ct);return os=null,Ft}catch(Kt){if(Kt===ss||Kt===Pl)throw Kt;var Ee=Gn(29,Kt,null,W.mode);return Ee.lanes=ct,Ee.return=W,Ee}}}var Tr=wm(!0),Dm=wm(!1),La=!1;function nf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function af(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Oa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function za(t,e,i){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(Ne&2)!==0){var l=r.pending;return l===null?e.next=e:(e.next=l.next,l.next=e),r.pending=e,e=Rl(t),dm(t,null,i),e}return Al(t,r,e,i),Rl(t)}function Mo(t,e,i){if(e=e.updateQueue,e!==null&&(e=e.shared,(i&4194048)!==0)){var r=e.lanes;r&=t.pendingLanes,i|=r,e.lanes=i,R(t,i)}}function rf(t,e){var i=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,i===r)){var l=null,c=null;if(i=i.firstBaseUpdate,i!==null){do{var m={lane:i.lane,tag:i.tag,payload:i.payload,callback:null,next:null};c===null?l=c=m:c=c.next=m,i=i.next}while(i!==null);c===null?l=c=e:c=c.next=e}else l=c=e;i={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:c,shared:r.shared,callbacks:r.callbacks},t.updateQueue=i;return}t=i.lastBaseUpdate,t===null?i.firstBaseUpdate=e:t.next=e,i.lastBaseUpdate=e}var sf=!1;function Eo(){if(sf){var t=rs;if(t!==null)throw t}}function To(t,e,i,r){sf=!1;var l=t.updateQueue;La=!1;var c=l.firstBaseUpdate,m=l.lastBaseUpdate,E=l.shared.pending;if(E!==null){l.shared.pending=null;var P=E,j=P.next;P.next=null,m===null?c=j:m.next=j,m=P;var et=t.alternate;et!==null&&(et=et.updateQueue,E=et.lastBaseUpdate,E!==m&&(E===null?et.firstBaseUpdate=j:E.next=j,et.lastBaseUpdate=P))}if(c!==null){var dt=l.baseState;m=0,et=j=P=null,E=c;do{var k=E.lane&-536870913,$=k!==E.lane;if($?(Me&k)===k:(r&k)===k){k!==0&&k===xr&&(sf=!0),et!==null&&(et=et.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});t:{var Ut=t,kt=E;k=e;var pe=i;switch(kt.tag){case 1:if(Ut=kt.payload,typeof Ut=="function"){dt=Ut.call(pe,dt,k);break t}dt=Ut;break t;case 3:Ut.flags=Ut.flags&-65537|128;case 0:if(Ut=kt.payload,k=typeof Ut=="function"?Ut.call(pe,dt,k):Ut,k==null)break t;dt=O({},dt,k);break t;case 2:La=!0}}k=E.callback,k!==null&&(t.flags|=64,$&&(t.flags|=8192),$=l.callbacks,$===null?l.callbacks=[k]:$.push(k))}else $={lane:k,tag:E.tag,payload:E.payload,callback:E.callback,next:null},et===null?(j=et=$,P=dt):et=et.next=$,m|=k;if(E=E.next,E===null){if(E=l.shared.pending,E===null)break;$=E,E=$.next,$.next=null,l.lastBaseUpdate=$,l.shared.pending=null}}while(!0);et===null&&(P=dt),l.baseState=P,l.firstBaseUpdate=j,l.lastBaseUpdate=et,c===null&&(l.shared.lanes=0),Va|=m,t.lanes=m,t.memoizedState=dt}}function Um(t,e){if(typeof t!="function")throw Error(s(191,t));t.call(e)}function Nm(t,e){var i=t.callbacks;if(i!==null)for(t.callbacks=null,t=0;t<i.length;t++)Um(i[t],e)}var Pa=he(null),Hl=he(0);function Lm(t,e){t=ua,Ct(Hl,t),Ct(Pa,e),ua=t|e.baseLanes}function of(){Ct(Hl,ua),Ct(Pa,Pa.current)}function lf(){ua=Hl.current,ue(Pa),ue(Hl)}var An=he(null),Ln=null;function Ba(t){var e=t.alternate;Ct(Rn,Rn.current&1),Ct(An,t),Ln===null&&(e===null||Pa.current!==null||e.memoizedState!==null)&&(Ln=t)}function uf(t){Ct(Rn,Rn.current),Ct(An,t),Ln===null&&(Ln=t)}function Om(t){t.tag===22?(Ct(Rn,Rn.current),Ct(An,t),Ln===null&&(Ln=t)):Ia()}function Ia(){Ct(Rn,Rn.current),Ct(An,An.current)}function Qn(t){ue(An),Ln===t&&(Ln=null),ue(Rn)}var Rn=he(0);function bo(t,e){Ct(An,An.current),Ct(Rn,e)}function cf(t){ue(Rn),ue(An),Ln===t&&(Ln=null)}function Gl(t){for(var e=t;e!==null;){if(e.tag===13){var i=e.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||Nh(i)||Lh(i)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!=="independent"){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ra=0,de=null,Ge=null,un=null,Vl=!1,ls=!1,br=!1,Xl=0,Ao=0,us=null,dx=0;function en(){throw Error(s(321))}function ff(t,e){if(e===null)return!1;for(var i=0;i<e.length&&i<t.length;i++)if(!Kn(t[i],e[i]))return!1;return!0}function hf(t,e,i,r,l,c){return ra=c,de=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,At.H=t===null||t.memoizedState===null?_g:vg,br=!1,c=i(r,l),br=!1,ls&&(c=Pm(e,i,r,l)),zm(t),c}function zm(t){At.H=Kl;var e=Ge!==null&&Ge.next!==null;if(ra=0,un=Ge=de=null,Vl=!1,Ao=0,us=null,e)throw Error(s(300));t===null||cn||(t=t.dependencies,t!==null&&Ll(t)&&(cn=!0))}function Pm(t,e,i,r){de=t;var l=0;do{if(ls&&(us=null),Ao=0,ls=!1,25<=l)throw Error(s(301));if(l+=1,un=Ge=null,t.updateQueue!=null){var c=t.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}At.H=yx,c=e(i,r)}while(ls);return c}function px(){var t=At.H,e=t.useState()[0];return e=typeof e.then=="function"?Ro(e):e,t=t.useState()[0],(Ge!==null?Ge.memoizedState:null)!==t&&(de.flags|=1024),e}function df(){var t=Xl!==0;return Xl=0,t}function pf(t,e,i){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i}function mf(t){if(Vl){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}Vl=!1}ra=0,un=Ge=de=null,ls=!1,Ao=Xl=0,us=null}function Bn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return un===null?de.memoizedState=un=t:un=un.next=t,un}function an(){if(Ge===null){var t=de.alternate;t=t!==null?t.memoizedState:null}else t=Ge.next;var e=un===null?de.memoizedState:un.next;if(e!==null)un=e,Ge=t;else{if(t===null)throw de.alternate===null?Error(s(467)):Error(s(310));Ge=t,t={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},un===null?de.memoizedState=un=t:un=un.next=t}return un}function ql(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ro(t){var e=Ao;return Ao+=1,us===null&&(us=[]),t=Am(us,t,e),e=de,(un===null?e.memoizedState:un.next)===null&&(e=e.alternate,At.H=e===null||e.memoizedState===null?_g:vg),t}function kl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Ro(t);if(t.$$typeof===q)return;if(t.$$typeof===ft)return bn(t)}throw Error(s(438,String(t)))}function gf(t){var e=null,i=de.updateQueue;if(i!==null&&(e=i.memoCache),e==null){var r=de.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(e={data:r.data.map(function(l){return l.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),i===null&&(i=ql(),de.updateQueue=i),i.memoCache=e,i=e.data[e.index],i===void 0)for(i=e.data[e.index]=Array(t),r=0;r<t;r++)i[r]=Et;return e.index++,i}function sa(t,e){return typeof e=="function"?e(t):e}function Yl(t){var e=an();return _f(e,Ge,t)}function _f(t,e,i){var r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=i;var l=t.baseQueue,c=r.pending;if(c!==null){if(l!==null){var m=l.next;l.next=c.next,c.next=m}e.baseQueue=l=c,r.pending=null}if(c=t.baseState,l===null)t.memoizedState=c;else{e=l.next;var E=m=null,P=null,j=e,et=!1;do{var dt=j.lane&-536870913;if(dt!==j.lane?(Me&dt)===dt:(ra&dt)===dt){var k=j.revertLane;if(k===0)P!==null&&(P=P.next={lane:0,revertLane:0,gesture:null,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),dt===xr&&(et=!0);else if((ra&k)===k){j=j.next,k===xr&&(et=!0);continue}else dt={lane:0,revertLane:j.revertLane,gesture:null,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},P===null?(E=P=dt,m=c):P=P.next=dt,de.lanes|=k,Va|=k;dt=j.action,br&&i(c,dt),c=j.hasEagerState?j.eagerState:i(c,dt)}else k={lane:dt,revertLane:j.revertLane,gesture:j.gesture,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},P===null?(E=P=k,m=c):P=P.next=k,de.lanes|=dt,Va|=dt;j=j.next}while(j!==null&&j!==e);if(P===null?m=c:P.next=E,!Kn(c,t.memoizedState)&&(cn=!0,et&&(i=rs,i!==null)))throw i;t.memoizedState=c,t.baseState=m,t.baseQueue=P,r.lastRenderedState=c}return l===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function vf(t){var e=an(),i=e.queue;if(i===null)throw Error(s(311));i.lastRenderedReducer=t;var r=i.dispatch,l=i.pending,c=e.memoizedState;if(l!==null){i.pending=null;var m=l=l.next;do c=t(c,m.action),m=m.next;while(m!==l);Kn(c,e.memoizedState)||(cn=!0),e.memoizedState=c,e.baseQueue===null&&(e.baseState=c),i.lastRenderedState=c}return[c,r]}function Bm(t,e,i){var r=de,l=an(),c=_e;if(c){if(i===void 0)throw Error(s(407));i=i()}else i=e();var m=!Kn((Ge||l).memoizedState,i);if(m&&(l.memoizedState=i,cn=!0),l=l.queue,yf(Hm.bind(null,r,l,t),[t]),t=l.getSnapshot!==e||m||un!==null&&(un.memoizedState.tag&1)!==0,cs(t?9:8,{destroy:void 0},Fm.bind(null,r,l,i,e),null),t){if(r.flags|=2048,ke===null)throw Error(s(349));c||(ra&127)!==0||Im(r,e,i)}return i}function Im(t,e,i){t.flags|=16384,t={getSnapshot:e,value:i},e=de.updateQueue,e===null?(e=ql(),de.updateQueue=e,e.stores=[t]):(i=e.stores,i===null?e.stores=[t]:i.push(t))}function Fm(t,e,i,r){e.value=i,e.getSnapshot=r,Gm(e)&&Vm(t)}function Hm(t,e,i){return i(function(){Gm(e)&&Vm(t)})}function Gm(t){var e=t.getSnapshot;t=t.value;try{var i=e();return!Kn(t,i)}catch{return!0}}function Vm(t){var e=pr(t,2);e!==null&&kn(e,t,2)}function Sf(t){var e=Bn();if(typeof t=="function"){var i=t;if(t=i(),br){vn(!0);try{i()}finally{vn(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:t},e}function Xm(t,e,i,r){return t.baseState=i,_f(t,Ge,typeof r=="function"?r:sa)}function mx(t,e,i,r,l){if(Zl(t))throw Error(s(485));if(t=e.action,t!==null){var c={payload:l,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(m){c.listeners.push(m)}};At.T!==null?i(!0):c.isTransition=!1,r(c),i=e.pending,i===null?(c.next=e.pending=c,qm(e,c)):(c.next=i.next,e.pending=i.next=c)}}function qm(t,e){var i=e.action,r=e.payload,l=t.state;if(e.isTransition){var c=At.T,m={};m.types=c!==null?c.types:null,At.T=m;try{var E=i(l,r),P=At.S;P!==null&&P(m,E),km(t,e,E)}catch(j){xf(t,e,j)}finally{c!==null&&m.types!==null&&(c.types=m.types),At.T=c}}else try{c=i(l,r),km(t,e,c)}catch(j){xf(t,e,j)}}function km(t,e,i){i!==null&&typeof i=="object"&&typeof i.then=="function"?i.then(function(r){Ym(t,e,r)},function(r){return xf(t,e,r)}):Ym(t,e,i)}function Ym(t,e,i){e.status="fulfilled",e.value=i,Wm(e),t.state=i,e=t.pending,e!==null&&(i=e.next,i===e?t.pending=null:(i=i.next,e.next=i,qm(t,i)))}function xf(t,e,i){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do e.status="rejected",e.reason=i,Wm(e),e=e.next;while(e!==r)}t.action=null}function Wm(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function jm(t,e){return e}function Zm(t,e){if(_e){var i=ke.formState;if(i!==null){t:{var r=de;if(_e){if(Ye){e:{for(var l=Ye,c=fi;l.nodeType!==8;){if(!c){l=null;break e}if(l=di(l.nextSibling),l===null){l=null;break e}}c=l.data,l=c==="F!"||c==="F"?l:null}if(l){Ye=di(l.nextSibling),r=l.data==="F!";break t}}Da(r)}r=!1}r&&(e=i[0])}}return i=Bn(),i.memoizedState=i.baseState=e,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:jm,lastRenderedState:e},i.queue=r,i=pg.bind(null,de,r),r.dispatch=i,r=Sf(!1),c=Af.bind(null,de,!1,r.queue),r=Bn(),l={state:e,dispatch:null,action:t,pending:null},r.queue=l,i=mx.bind(null,de,l,c,i),l.dispatch=i,r.memoizedState=t,[e,i,!1]}function Km(t){var e=an();return Qm(e,Ge,t)}function Qm(t,e,i){if(e=_f(t,e,jm)[0],t=Yl(sa)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var r=Ro(e)}catch(m){throw m===ss?Pl:m}else r=e;e=an();var l=e.queue,c=l.dispatch;return i!==e.memoizedState&&(de.flags|=2048,cs(9,{destroy:void 0},gx.bind(null,l,i),null)),[r,c,t]}function gx(t,e){t.action=e}function Jm(t){var e=an(),i=Ge;if(i!==null)return Qm(e,i,t);an(),e=e.memoizedState,i=an();var r=i.queue.dispatch;return i.memoizedState=t,[e,r,!1]}function cs(t,e,i,r){return t={tag:t,create:i,deps:r,inst:e,next:null},e=de.updateQueue,e===null&&(e=ql(),de.updateQueue=e),i=e.lastEffect,i===null?e.lastEffect=t.next=t:(r=i.next,i.next=t,t.next=r,e.lastEffect=t),t}function $m(){return an().memoizedState}function Wl(t,e,i,r){var l=Bn();de.flags|=t,l.memoizedState=cs(1|e,{destroy:void 0},i,r===void 0?null:r)}function jl(t,e,i,r){var l=an();r=r===void 0?null:r;var c=l.memoizedState.inst;Ge!==null&&r!==null&&ff(r,Ge.memoizedState.deps)?l.memoizedState=cs(e,c,i,r):(de.flags|=t,l.memoizedState=cs(1|e,c,i,r))}function tg(t,e){Wl(8390656,8,t,e)}function yf(t,e){jl(2048,8,t,e)}function _x(t){de.flags|=4;var e=de.updateQueue;if(e===null)e=ql(),de.updateQueue=e,e.events=[t];else{var i=e.events;i===null?e.events=[t]:i.push(t)}}function eg(t){var e=an().memoizedState;return _x({ref:e,nextImpl:t}),function(){if((Ne&2)!==0)throw Error(s(440));return e.impl.apply(void 0,arguments)}}function ng(t,e){return jl(4,2,t,e)}function ig(t,e){return jl(4,4,t,e)}function ag(t,e){if(typeof e=="function"){t=t();var i=e(t);return function(){typeof i=="function"?i():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function rg(t,e,i){i=i!=null?i.concat([t]):null,jl(4,4,ag.bind(null,e,t),i)}function Mf(){}function sg(t,e){var i=an();e=e===void 0?null:e;var r=i.memoizedState;return e!==null&&ff(e,r[1])?r[0]:(i.memoizedState=[t,e],t)}function og(t,e){var i=an();e=e===void 0?null:e;var r=i.memoizedState;if(e!==null&&ff(e,r[1]))return r[0];if(r=t(),br){vn(!0);try{t()}finally{vn(!1)}}return i.memoizedState=[r,e],r}function Ef(t,e,i){return i===void 0||(ra&1073741824)!==0&&(Me&261930)===0?t.memoizedState=e:(t.memoizedState=i,t=__(),de.lanes|=t,Va|=t,i)}function lg(t,e,i,r){return Kn(i,e)?i:Pa.current!==null?(t=Ef(t,i,r),Kn(t,e)||(cn=!0),t):(ra&106)===0||(ra&1073741824)!==0&&(Me&261930)===0?(cn=!0,t.memoizedState=i):(t=__(),de.lanes|=t,Va|=t,e)}function ug(t,e,i,r,l){var c=zt.p;zt.p=c!==0&&8>c?c:8;var m=At.T,E={};E.types=m!==null?m.types:null,At.T=E,Af(t,!1,e,i);try{var P=l(),j=At.S;if(j!==null&&j(E,P),P!==null&&typeof P=="object"&&typeof P.then=="function"){var et=hx(P,r);Co(t,e,et,ei(t))}else Co(t,e,r,ei(t))}catch(dt){Co(t,e,{then:function(){},status:"rejected",reason:dt},ei())}finally{zt.p=c,m!==null&&E.types!==null&&(m.types=E.types),At.T=m}}function vx(){}function Tf(t,e,i,r){if(t.tag!==5)throw Error(s(476));var l=cg(t).queue;ug(t,l,e,ce,i===null?vx:function(){return fg(t),i(r)})}function cg(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:ce,baseState:ce,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:ce},next:null};var i={};return e.next={memoizedState:i,baseState:i,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:i},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function fg(t){var e=cg(t);e.next===null&&(e=t.alternate.memoizedState),Co(t,e.next.queue,{},ei())}function bf(){return bn(ws)}function hg(){return an().memoizedState}function dg(){return an().memoizedState}function Sx(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var i=ei();t=Oa(i);var r=za(e,t,i);r!==null&&(kn(r,e,i),Mo(r,e,i)),e={cache:Jc()},t.payload=e;return}e=e.return}}function xx(t,e,i){var r=ei();i={lane:r,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Zl(t)?mg(e,i):(i=Xc(t,e,i,r),i!==null&&(kn(i,t,r),gg(i,e,r)))}function pg(t,e,i){var r=ei();Co(t,e,i,r)}function Co(t,e,i,r){var l={lane:r,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null};if(Zl(t))mg(e,l);else{var c=t.alternate;if(t.lanes===0&&(c===null||c.lanes===0)&&(c=e.lastRenderedReducer,c!==null))try{var m=e.lastRenderedState,E=c(m,i);if(l.hasEagerState=!0,l.eagerState=E,Kn(E,m))return Al(t,e,l,0),ke===null&&bl(),!1}catch{}if(i=Xc(t,e,l,r),i!==null)return kn(i,t,r),gg(i,e,r),!0}return!1}function Af(t,e,i,r){if(r={lane:2,revertLane:gh(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Zl(t)){if(e)throw Error(s(479))}else e=Xc(t,i,r,2),e!==null&&kn(e,t,2)}function Zl(t){var e=t.alternate;return t===de||e!==null&&e===de}function mg(t,e){ls=Vl=!0;var i=t.pending;i===null?e.next=e:(e.next=i.next,i.next=e),t.pending=e}function gg(t,e,i){if((i&4194048)!==0){var r=e.lanes;r&=t.pendingLanes,i|=r,e.lanes=i,R(t,i)}}var Kl={readContext:bn,use:kl,useCallback:en,useContext:en,useEffect:en,useImperativeHandle:en,useLayoutEffect:en,useInsertionEffect:en,useMemo:en,useReducer:en,useRef:en,useState:en,useDebugValue:en,useDeferredValue:en,useTransition:en,useSyncExternalStore:en,useId:en,useHostTransitionStatus:en,useFormState:en,useActionState:en,useOptimistic:en,useMemoCache:en,useCacheRefresh:en,useEffectEvent:en},_g={readContext:bn,use:kl,useCallback:function(t,e){return Bn().memoizedState=[t,e===void 0?null:e],t},useContext:bn,useEffect:tg,useImperativeHandle:function(t,e,i){i=i!=null?i.concat([t]):null,Wl(4194308,4,ag.bind(null,e,t),i)},useLayoutEffect:function(t,e){return Wl(4194308,4,t,e)},useInsertionEffect:function(t,e){Wl(4,2,t,e)},useMemo:function(t,e){var i=Bn();e=e===void 0?null:e;var r=t();if(br){vn(!0);try{t()}finally{vn(!1)}}return i.memoizedState=[r,e],r},useReducer:function(t,e,i){var r=Bn();if(i!==void 0){var l=i(e);if(br){vn(!0);try{i(e)}finally{vn(!1)}}}else l=e;return r.memoizedState=r.baseState=l,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:l},r.queue=t,t=t.dispatch=xx.bind(null,de,t),[r.memoizedState,t]},useRef:function(t){var e=Bn();return t={current:t},e.memoizedState=t},useState:function(t){t=Sf(t);var e=t.queue,i=pg.bind(null,de,e);return e.dispatch=i,[t.memoizedState,i]},useDebugValue:Mf,useDeferredValue:function(t,e){var i=Bn();return Ef(i,t,e)},useTransition:function(){var t=Sf(!1);return t=ug.bind(null,de,t.queue,!0,!1),Bn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,i){var r=de,l=Bn();if(_e){if(i===void 0)throw Error(s(407));i=i()}else{if(i=e(),ke===null)throw Error(s(349));(Me&127)!==0||Im(r,e,i)}l.memoizedState=i;var c={value:i,getSnapshot:e};return l.queue=c,tg(Hm.bind(null,r,c,t),[t]),r.flags|=2048,cs(9,{destroy:void 0},Fm.bind(null,r,c,i,e),null),i},useId:function(){var t=Bn(),e=ke.identifierPrefix;if(_e){var i=Li,r=Ni;i=(r&~(1<<32-Un(r)-1)).toString(32)+i,e="_"+e+"R_"+i,i=Xl++,0<i&&(e+="H"+i.toString(32)),e+="_"}else i=dx++,e="_"+e+"r_"+i.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:bf,useFormState:Zm,useActionState:Zm,useOptimistic:function(t){var e=Bn();e.memoizedState=e.baseState=t;var i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=i,e=Af.bind(null,de,!0,i),i.dispatch=e,[t,e]},useMemoCache:gf,useCacheRefresh:function(){return Bn().memoizedState=Sx.bind(null,de)},useEffectEvent:function(t){var e=Bn(),i={impl:t};return e.memoizedState=i,function(){if((Ne&2)!==0)throw Error(s(440));return i.impl.apply(void 0,arguments)}}},vg={readContext:bn,use:kl,useCallback:sg,useContext:bn,useEffect:yf,useImperativeHandle:rg,useInsertionEffect:ng,useLayoutEffect:ig,useMemo:og,useReducer:Yl,useRef:$m,useState:function(){return Yl(sa)},useDebugValue:Mf,useDeferredValue:function(t,e){var i=an();return lg(i,Ge.memoizedState,t,e)},useTransition:function(){var t=Yl(sa)[0],e=an().memoizedState;return[typeof t=="boolean"?t:Ro(t),e]},useSyncExternalStore:Bm,useId:hg,useHostTransitionStatus:bf,useFormState:Km,useActionState:Km,useOptimistic:function(t,e){var i=an();return Xm(i,Ge,t,e)},useMemoCache:gf,useCacheRefresh:dg,useEffectEvent:eg},yx={readContext:bn,use:kl,useCallback:sg,useContext:bn,useEffect:yf,useImperativeHandle:rg,useInsertionEffect:ng,useLayoutEffect:ig,useMemo:og,useReducer:vf,useRef:$m,useState:function(){return vf(sa)},useDebugValue:Mf,useDeferredValue:function(t,e){var i=an();return Ge===null?Ef(i,t,e):lg(i,Ge.memoizedState,t,e)},useTransition:function(){var t=vf(sa)[0],e=an().memoizedState;return[typeof t=="boolean"?t:Ro(t),e]},useSyncExternalStore:Bm,useId:hg,useHostTransitionStatus:bf,useFormState:Jm,useActionState:Jm,useOptimistic:function(t,e){var i=an();return Ge!==null?Xm(i,Ge,t,e):(i.baseState=t,[t,i.queue.dispatch])},useMemoCache:gf,useCacheRefresh:dg,useEffectEvent:eg};function Rf(t,e,i,r){e=t.memoizedState,i=i(r,e),i=i==null?e:O({},e,i),t.memoizedState=i,t.lanes===0&&(t.updateQueue.baseState=i)}var Cf={enqueueSetState:function(t,e,i){t=t._reactInternals;var r=ei(),l=Oa(r);l.payload=e,i!=null&&(l.callback=i),e=za(t,l,r),e!==null&&(kn(e,t,r),Mo(e,t,r))},enqueueReplaceState:function(t,e,i){t=t._reactInternals;var r=ei(),l=Oa(r);l.tag=1,l.payload=e,i!=null&&(l.callback=i),e=za(t,l,r),e!==null&&(kn(e,t,r),Mo(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var i=ei(),r=Oa(i);r.tag=2,e!=null&&(r.callback=e),e=za(t,r,i),e!==null&&(kn(e,t,i),Mo(e,t,i))}};function Sg(t,e,i,r,l,c,m){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,c,m):e.prototype&&e.prototype.isPureReactComponent?!po(i,r)||!po(l,c):!0}function xg(t,e,i,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(i,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(i,r),e.state!==t&&Cf.enqueueReplaceState(e,e.state,null)}function Ar(t,e){var i=e;if("ref"in e){i={};for(var r in e)r!=="ref"&&(i[r]=e[r])}if(t=t.defaultProps){i===e&&(i=O({},i));for(var l in t)i[l]===void 0&&(i[l]=t[l])}return i}function yg(t){Tl(t)}function Mg(t){console.error(t)}function Eg(t){Tl(t)}function Ql(t,e){try{var i=t.onUncaughtError;i(e.value,{componentStack:e.stack})}catch(r){setTimeout(function(){throw r})}}function Tg(t,e,i){try{var r=t.onCaughtError;r(i.value,{componentStack:i.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function wf(t,e,i){return i=Oa(i),i.tag=3,i.payload={element:null},i.callback=function(){Ql(t,e)},i}function bg(t){return t=Oa(t),t.tag=3,t}function Ag(t,e,i,r){var l=i.type.getDerivedStateFromError;if(typeof l=="function"){var c=r.value;t.payload=function(){return l(c)},t.callback=function(){Tg(e,i,r)}}var m=i.stateNode;m!==null&&typeof m.componentDidCatch=="function"&&(t.callback=function(){Tg(e,i,r),typeof l!="function"&&(Xa===null?Xa=new Set([this]):Xa.add(this));var E=r.stack;this.componentDidCatch(r.value,{componentStack:E!==null?E:""})})}function Mx(t,e,i,r,l){if(i.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(e=i.alternate,e!==null&&vr(e,i,l,!0),i=An.current,i!==null){switch(i.tag){case 31:case 13:case 19:return Ln===null?vu():i.alternate===null&&nn===0&&(nn=3),i.flags&=-257,i.flags|=65536,i.lanes=l,r===Bl?i.flags|=16384:(e=i.updateQueue,e===null?i.updateQueue=new Set([r]):e.add(r),dh(t,r,l)),!1;case 22:return i.flags|=65536,r===Bl?i.flags|=16384:(e=i.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([r])},i.updateQueue=e):(i=e.retryQueue,i===null?e.retryQueue=new Set([r]):i.add(r)),dh(t,r,l)),!1}throw Error(s(435,i.tag))}return dh(t,r,l),vu(),!1}if(_e)return e=An.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=l,r!==jc&&(t=Error(s(422),{cause:r}),_o(li(t,i)))):(r!==jc&&(e=Error(s(423),{cause:r}),_o(li(e,i))),t=t.current.alternate,t.flags|=65536,l&=-l,t.lanes|=l,r=li(r,i),l=wf(t.stateNode,r,l),rf(t,l),nn!==4&&(nn=2)),!1;var c=Error(s(520),{cause:r});if(c=li(c,i),Po===null?Po=[c]:Po.push(c),nn!==4&&(nn=2),e===null)return!0;r=li(r,i),i=e;do{switch(i.tag){case 3:return i.flags|=65536,t=l&-l,i.lanes|=t,t=wf(i.stateNode,r,t),rf(i,t),!1;case 1:if(e=i.type,c=i.stateNode,(i.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(Xa===null||!Xa.has(c))))return i.flags|=65536,l&=-l,i.lanes|=l,l=bg(l),Ag(l,t,i,r),rf(i,l),!1;break;case 22:if(i.memoizedState!==null)return i.flags|=65536,!1}i=i.return}while(i!==null);return!1}var Df=Error(s(461)),cn=!1;function mn(t,e,i,r){e.child=t===null?Dm(e,null,i,r):Tr(e,t.child,i,r)}function Rg(t,e,i,r,l){i=i.render;var c=e.ref;if("ref"in r){var m={};for(var E in r)E!=="ref"&&(m[E]=r[E])}else m=r;return Sr(e),r=hf(t,e,i,m,c,l),E=df(),t!==null&&!cn?(pf(t,e,l),oa(t,e,l)):(_e&&E&&Dl(e),e.flags|=1,mn(t,e,r,l),e.child)}function Cg(t,e,i,r,l){if(t===null){var c=i.type;return typeof c=="function"&&!qc(c)&&c.defaultProps===void 0&&i.compare===null?(e.tag=15,e.type=c,wg(t,e,c,r,l)):(t=Cl(i.type,null,r,e,e.mode,l),t.ref=e.ref,t.return=e,e.child=t)}if(c=t.child,!If(t,l)){var m=c.memoizedProps;if(i=i.compare,i=i!==null?i:po,i(m,r)&&t.ref===e.ref)return oa(t,e,l)}return e.flags|=1,t=ea(c,r),t.ref=e.ref,t.return=e,e.child=t}function wg(t,e,i,r,l){if(t!==null){var c=t.memoizedProps;if(po(c,r)&&t.ref===e.ref)if(cn=!1,e.pendingProps=r=c,If(t,l))(t.flags&131072)!==0&&(cn=!0);else return e.lanes=t.lanes,oa(t,e,l)}return Uf(t,e,i,r,l)}function Dg(t,e,i,r){var l=r.children,c=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((e.flags&128)!==0){if(c=c!==null?c.baseLanes|i:i,t!==null){for(r=e.child=t.child,l=0;r!==null;)l=l|r.lanes|r.childLanes,r=r.sibling;r=l&~c}else r=0,e.child=null;return Ug(t,e,c,i,r)}if((i&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&zl(e,c!==null?c.cachePool:null),c!==null?Lm(e,c):of(),Om(e);else return r=e.lanes=536870912,Ug(t,e,c!==null?c.baseLanes|i:i,i,r)}else c!==null?(zl(e,c.cachePool),Lm(e,c),Ia(),e.memoizedState=null):(t!==null&&zl(e,null),of(),Ia());return mn(t,e,l,i),e.child}function wo(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function Ug(t,e,i,r,l){var c=tf();return c=c===null?null:{parent:ln._currentValue,pool:c},e.memoizedState={baseLanes:i,cachePool:c},t!==null&&zl(e,null),of(),Om(e),t!==null&&vr(t,e,r,!0),e.childLanes=l,null}function Jl(t,e){return e=$l({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function Ng(t,e,i){return Tr(e,t.child,null,i),t=Jl(e,e.pendingProps),t.flags|=2,Qn(e),e.memoizedState=null,t}function Ex(t,e,i){var r=e.pendingProps,l=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(_e){if(r.mode==="hidden")return t=Jl(e,r),e.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},wo(null,t);if(uf(e),(t=Ye)?(t=av(t,fi),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Ca!==null?{id:Ni,overflow:Li}:null,retryLane:536870912,hydrationErrors:null},i=mm(t),i.return=e,e.child=i,Sn=e,Ye=null)):t=null,t===null)throw Da(e);return e.lanes=536870912,null}return Jl(e,r)}var c=t.memoizedState;if(c!==null){var m=c.dehydrated;if(uf(e),l)if(e.flags&256)e.flags&=-257,e=Ng(t,e,i);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(s(558));else if(cn||vr(t,e,i,!1),l=(i&t.childLanes)!==0,cn||l){if(Pa.current===null){if(r=ke,r!==null&&(m=Z(r,i),m!==0&&m!==c.retryLane))throw c.retryLane=m,pr(t,m),kn(r,t,m),Df;vu()}e=Ng(t,e,i)}else t=c.treeContext,Ye=di(m.nextSibling),Sn=e,_e=!0,wa=null,fi=!1,t!==null&&vm(e,t),e=Jl(e,r),e.flags|=134221824;return e}return t=ea(t.child,{mode:r.mode,children:r.children}),t.ref=e.ref,e.child=t,t.return=e,t}function fs(t,e){var i=e.ref;if(i===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof i!="function"&&typeof i!="object")throw Error(s(284));(t===null||t.ref!==i)&&(e.flags|=4194816)}}function Uf(t,e,i,r,l){return Sr(e),i=hf(t,e,i,r,void 0,l),r=df(),t!==null&&!cn?(pf(t,e,l),oa(t,e,l)):(_e&&r&&Dl(e),e.flags|=1,mn(t,e,i,l),e.child)}function Lg(t,e,i,r,l,c){return Sr(e),e.updateQueue=null,i=Pm(e,r,i,l),zm(t),r=df(),t!==null&&!cn?(pf(t,e,c),oa(t,e,c)):(_e&&r&&Dl(e),e.flags|=1,mn(t,e,i,c),e.child)}function Og(t,e,i,r,l){if(Sr(e),e.stateNode===null){var c=es,m=i.contextType;typeof m=="object"&&m!==null&&(c=bn(m)),c=new i(r,c),e.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=Cf,e.stateNode=c,c._reactInternals=e,c=e.stateNode,c.props=r,c.state=e.memoizedState,c.refs={},nf(e),m=i.contextType,c.context=typeof m=="object"&&m!==null?bn(m):es,c.state=e.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(Rf(e,i,m,r),c.state=e.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(m=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),m!==c.state&&Cf.enqueueReplaceState(c,c.state,null),To(e,r,c,l),Eo(),c.state=e.memoizedState),typeof c.componentDidMount=="function"&&(e.flags|=4194308),r=!0}else if(t===null){c=e.stateNode;var E=e.memoizedProps,P=Ar(i,E);c.props=P;var j=c.context,et=i.contextType;m=es,typeof et=="object"&&et!==null&&(m=bn(et));var dt=i.getDerivedStateFromProps;et=typeof dt=="function"||typeof c.getSnapshotBeforeUpdate=="function",E=e.pendingProps!==E,et||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(E||j!==m)&&xg(e,c,r,m),La=!1;var k=e.memoizedState;c.state=k,To(e,r,c,l),Eo(),j=e.memoizedState,E||k!==j||La?(typeof dt=="function"&&(Rf(e,i,dt,r),j=e.memoizedState),(P=La||Sg(e,i,P,r,k,j,m))?(et||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(e.flags|=4194308)):(typeof c.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=j),c.props=r,c.state=j,c.context=m,r=P):(typeof c.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{c=e.stateNode,af(t,e),m=e.memoizedProps,et=Ar(i,m),c.props=et,dt=e.pendingProps,k=c.context,j=i.contextType,P=es,typeof j=="object"&&j!==null&&(P=bn(j)),E=i.getDerivedStateFromProps,(j=typeof E=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(m!==dt||k!==P)&&xg(e,c,r,P),La=!1,k=e.memoizedState,c.state=k,To(e,r,c,l),Eo();var $=e.memoizedState;m!==dt||k!==$||La||t!==null&&t.dependencies!==null&&Ll(t.dependencies)?(typeof E=="function"&&(Rf(e,i,E,r),$=e.memoizedState),(et=La||Sg(e,i,et,r,k,$,P)||t!==null&&t.dependencies!==null&&Ll(t.dependencies))?(j||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(r,$,P),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(r,$,P)),typeof c.componentDidUpdate=="function"&&(e.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof c.componentDidUpdate!="function"||m===t.memoizedProps&&k===t.memoizedState||(e.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||m===t.memoizedProps&&k===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=$),c.props=r,c.state=$,c.context=P,r=et):(typeof c.componentDidUpdate!="function"||m===t.memoizedProps&&k===t.memoizedState||(e.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||m===t.memoizedProps&&k===t.memoizedState||(e.flags|=1024),r=!1)}return c=r,fs(t,e),r=(e.flags&128)!==0,c||r?(c=e.stateNode,i=r&&typeof i.getDerivedStateFromError!="function"?null:c.render(),e.flags|=1,t!==null&&r?(e.child=Tr(e,t.child,null,l),e.child=Tr(e,null,i,l)):mn(t,e,i,l),e.memoizedState=c.state,t=e.child):t=oa(t,e,l),t}function zg(t,e,i,r){return gr(),e.flags|=256,mn(t,e,i,r),e.child}var Nf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Lf(t){return{baseLanes:t,cachePool:Tm()}}function Of(t,e,i){return t=t!==null?t.childLanes&~i:0,e&&(t|=ti),t}function Pg(t,e,i){var r=e.pendingProps,l=!1,c=(e.flags&128)!==0,m;if((m=c)||(m=t!==null&&t.memoizedState===null?!1:(Rn.current&2)!==0),m&&(l=!0,e.flags&=-129),m=(e.flags&32)!==0,e.flags&=-33,t===null){if(_e){if(l?Ba(e):Ia(),(t=Ye)?(t=av(t,fi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Ca!==null?{id:Ni,overflow:Li}:null,retryLane:536870912,hydrationErrors:null},i=mm(t),i.return=e,e.child=i,Sn=e,Ye=null)):t=null,t===null)throw Da(e);return Lh(t)?e.lanes=32:e.lanes=536870912,null}return c=r.children,r=r.fallback,l?(Ia(),l=e.mode,c=$l({mode:"hidden",children:c},l),r=mr(r,l,i,null),c.return=e,r.return=e,c.sibling=r,e.child=c,r=e.child,r.memoizedState=Lf(i),r.childLanes=Of(t,m,i),e.memoizedState=Nf,wo(null,r)):(Ba(e),zf(e,c))}var E=t.memoizedState;if(E!==null){var P=E.dehydrated;if(P!==null)return Tx(t,e,c,m,r,P,E,i)}return l?(Ia(),l=r.fallback,c=e.mode,E=t.child,P=E.sibling,r=ea(E,{mode:"hidden",children:r.children}),r.subtreeFlags=E.subtreeFlags&1206910976,P!==null?l=ea(P,l):(l=mr(l,c,i,null),l.flags|=2),l.return=e,r.return=e,r.sibling=l,e.child=r,wo(null,r),r=e.child,l=t.child.memoizedState,l===null?l=Lf(i):(c=l.cachePool,c!==null?(E=ln._currentValue,c=c.parent!==E?{parent:E,pool:E}:c):c=Tm(),l={baseLanes:l.baseLanes|i,cachePool:c}),r.memoizedState=l,r.childLanes=Of(t,m,i),e.memoizedState=Nf,wo(t.child,r)):(Ba(e),i=t.child,t=i.sibling,i=ea(i,{mode:"visible",children:r.children}),i.return=e,i.sibling=null,t!==null&&(m=e.deletions,m===null?(e.deletions=[t],e.flags|=16):m.push(t)),e.child=i,e.memoizedState=null,i)}function zf(t,e){return e=$l({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function $l(t,e){return t=Gn(22,t,null,e),t.lanes=0,t}function tu(t,e,i){return Tr(e,t.child,null,i),t=zf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Tx(t,e,i,r,l,c,m,E){if(i)return e.flags&256?(Ba(e),e.flags&=-257,tu(t,e,E)):e.memoizedState!==null?(Ia(),e.child=t.child,e.flags|=128,null):(Ia(),c=l.fallback,m=e.mode,l=$l({mode:"visible",children:l.children},m),c=mr(c,m,E,null),c.flags|=2,l.return=e,c.return=e,l.sibling=c,e.child=l,Tr(e,t.child,null,E),l=e.child,l.memoizedState=Lf(E),l.childLanes=Of(t,r,E),e.memoizedState=Nf,wo(null,l));if(Ba(e),Lh(c)){if(r=c.nextSibling&&c.nextSibling.dataset,r)var P=r.dgst;return r=P,r!==""&&(l=Error(s(419)),l.stack="",l.digest=r,_o({value:l,source:null,stack:null})),tu(t,e,E)}if(cn||vr(t,e,E,!1),r=(E&t.childLanes)!==0,cn||r){if(Pa.current!==null)return tu(t,e,E);if(r=ke,r!==null&&(l=Z(r,E),l!==0&&l!==m.retryLane))throw m.retryLane=l,pr(t,l),kn(r,t,l),Df;return Nh(c)||vu(),tu(t,e,E)}return Nh(c)?(e.flags|=192,e.child=t.child,null):(t=m.treeContext,Ye=di(c.nextSibling),Sn=e,_e=!0,wa=null,fi=!1,t!==null&&vm(e,t),e=zf(e,l.children),e.flags|=134221824,e)}function Bg(t,e,i){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Nl(t.return,e,i)}function Ig(t){for(var e=null;t!==null;){var i=t.alternate;i!==null&&Gl(i)===null&&(e=t),t=t.sibling}return e}function eu(t,e,i,r,l,c){var m=t.memoizedState;m===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:i,tailMode:l,treeForkCount:c}:(m.isBackwards=e,m.rendering=null,m.renderingStartTime=0,m.last=r,m.tail=i,m.tailMode=l,m.treeForkCount=c)}function Pf(t){var e=t.child;for(t.child=null;e!==null;){var i=e.sibling;e.sibling=t.child,t.child=e,e=i}}function Bf(t,e,i){var r=e.pendingProps,l=r.revealOrder,c=r.tail;r=r.children;var m=Rn.current;if(e.flags&128)return bo(e,m),null;var E=(m&2)!==0;if(E?(m=m&1|2,e.flags|=128):m&=1,bo(e,m),l==="backwards"&&t!==null?(Pf(t),mn(t,e,r,i),Pf(t)):mn(t,e,r,i),r=_e?go:0,!E&&t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Bg(t,i,e);else if(t.tag===19)Bg(t,i,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(l){case"backwards":i=Ig(e.child),i===null?(l=e.child,e.child=null):(l=i.sibling,i.sibling=null,Pf(e)),eu(e,!0,l,null,c,r);break;case"unstable_legacy-backwards":for(i=null,l=e.child,e.child=null;l!==null;){if(t=l.alternate,t!==null&&Gl(t)===null){e.child=l;break}t=l.sibling,l.sibling=i,i=l,l=t}eu(e,!0,i,null,c,r);break;case"together":eu(e,!1,null,null,void 0,r);break;case"independent":e.memoizedState=null;break;default:i=Ig(e.child),i===null?(l=e.child,e.child=null):(l=i.sibling,i.sibling=null),eu(e,!1,l,i,c,r)}return e.child}function Fg(t,e,i){var r=e.pendingProps;return Ua(e,e.type,r.value),mn(t,e,r.children,i),e.child}function oa(t,e,i){if(t!==null&&(e.dependencies=t.dependencies),Va|=e.lanes,(i&e.childLanes)===0)if(t!==null){if(vr(t,e,i,!1),(i&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(s(153));if(e.child!==null){for(t=e.child,i=ea(t,t.pendingProps),e.child=i,i.return=e;t.sibling!==null;)t=t.sibling,i=i.sibling=ea(t,t.pendingProps),i.return=e;i.sibling=null}return e.child}function If(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&Ll(t)))}function bx(t,e,i){switch(e.tag){case 3:z(e,e.stateNode.containerInfo),Ua(e,ln,t.memoizedState.cache),gr();break;case 27:case 5:tt(e);break;case 4:z(e,e.stateNode.containerInfo);break;case 10:Ua(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,uf(e),null;break;case 13:var r=e.memoizedState;if(r!==null){if(r.dehydrated!==null)return Ba(e),e.flags|=128,null;r=vr(t,e,i,!1);var l=e.child.childLanes;return r||(i&l)!==0?Pg(t,e,i):(Ba(e),t=oa(t,e,i),t!==null?t.sibling:null)}Ba(e);break;case 19:if(e.flags&128)return Bf(t,e,i);if(l=(t.flags&128)!==0,r=(i&e.childLanes)!==0,r||(vr(t,e,i,!1),r=(i&e.childLanes)!==0),l){if(r)return Bf(t,e,i);e.flags|=128}if(l=e.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),bo(e,Rn.current),r)break;return null;case 22:return e.lanes=0,Dg(t,e,i,e.pendingProps);case 24:Ua(e,ln,t.memoizedState.cache)}return oa(t,e,i)}function Hg(t,e,i){if(t!==null)if(t.memoizedProps!==e.pendingProps)cn=!0;else{if(!If(t,i)&&(e.flags&128)===0)return cn=!1,bx(t,e,i);cn=(t.flags&131072)!==0}else cn=!1,_e&&(e.flags&1048576)!==0&&_m(e,go,e.index);switch(e.lanes=0,e.tag){case 16:t:{var r=e.pendingProps;if(t=Mr(e.elementType),e.type=t,typeof t=="function")qc(t)?(r=Ar(t,r),e.tag=1,e=Og(null,e,t,r,i)):(e.tag=0,e=Uf(null,e,t,r,i));else{if(t!=null){var l=t.$$typeof;if(l===Y){e.tag=11,e=Rg(null,e,t,r,i);break t}else if(l===vt){e.tag=14,e=Cg(null,e,t,r,i);break t}else if(l===ft){e.tag=10,e.type=t,e=Fg(null,e,i);break t}}throw e=Gt(t)||t,Error(s(306,e,""))}}return e;case 0:return Uf(t,e,e.type,e.pendingProps,i);case 1:return r=e.type,l=Ar(r,e.pendingProps),Og(t,e,r,l,i);case 3:t:{if(z(e,e.stateNode.containerInfo),t===null)throw Error(s(387));r=e.pendingProps;var c=e.memoizedState;l=c.element,af(t,e),To(e,r,null,i);var m=e.memoizedState;if(r=m.cache,Ua(e,ln,r),r!==c.cache&&Qc(e,[ln],i,!0),Eo(),r=m.element,c.isDehydrated)if(c={element:r,isDehydrated:!1,cache:m.cache},e.updateQueue.baseState=c,e.memoizedState=c,e.flags&256){e=zg(t,e,r,i);break t}else if(r!==l){l=li(Error(s(424)),e),_o(l),e=zg(t,e,r,i);break t}else for(t=e.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Ye=di(t.firstChild),Sn=e,_e=!0,wa=null,fi=!0,i=Dm(e,null,r,i),e.child=i;i;)i.flags=i.flags&-3|134221824,i=i.sibling;else{if(gr(),r===l){e=oa(t,e,i);break t}mn(t,e,r,i)}e=e.child}return e;case 26:return fs(t,e),t===null?(i=fv(e.type,null,e.pendingProps,null))?e.memoizedState=i:_e||(e.stateNode=q_(e.type,e.pendingProps,ie.current,e)):e.memoizedState=fv(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return tt(e),t===null&&_e&&(r=e.stateNode=ov(e.type,e.pendingProps,ie.current),Sn=e,fi=!0,l=Ye,Ya(e.type)?(Oh=l,Ye=di(r.firstChild)):Ye=l),mn(t,e,e.pendingProps.children,i),fs(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&_e&&((l=r=Ye)&&(r=Sy(r,e.type,e.pendingProps,fi),r!==null?(e.stateNode=r,Sn=e,Ye=di(r.firstChild),fi=!1,l=!0):l=!1),l||Da(e)),tt(e),l=e.type,c=e.pendingProps,m=t!==null?t.memoizedProps:null,r=c.children,bh(l,c)?r=null:m!==null&&bh(l,m)&&(e.flags|=32),e.memoizedState!==null&&(l=hf(t,e,px,null,null,i),ws._currentValue=l),fs(t,e),mn(t,e,r,i),e.child;case 6:return t===null&&_e&&((t=i=Ye)&&(i=xy(i,e.pendingProps,fi),i!==null?(e.stateNode=i,Sn=e,Ye=null,t=!0):t=!1),t||Da(e)),null;case 13:return Pg(t,e,i);case 4:return z(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Tr(e,null,r,i):mn(t,e,r,i),e.child;case 11:return Rg(t,e,e.type,e.pendingProps,i);case 7:return r=e.pendingProps,fs(t,e),mn(t,e,r,i),e.child;case 8:return mn(t,e,e.pendingProps.children,i),e.child;case 12:return mn(t,e,e.pendingProps.children,i),e.child;case 10:return Fg(t,e,i);case 9:return l=e.type._context,r=e.pendingProps.children,Sr(e),l=bn(l),r=r(l),e.flags|=1,mn(t,e,r,i),e.child;case 14:return Cg(t,e,e.type,e.pendingProps,i);case 15:return wg(t,e,e.type,e.pendingProps,i);case 19:return Bf(t,e,i);case 31:return Ex(t,e,i);case 22:return Dg(t,e,i,e.pendingProps);case 24:return Sr(e),r=bn(ln),t===null?(l=tf(),l===null&&(l=ke,c=Jc(),l.pooledCache=c,c.refCount++,c!==null&&(l.pooledCacheLanes|=i),l=c),e.memoizedState={parent:r,cache:l},nf(e),Ua(e,ln,l)):((t.lanes&i)!==0&&(af(t,e),To(e,null,null,i),Eo()),l=t.memoizedState,c=e.memoizedState,l.parent!==r?(l={parent:r,cache:r},e.memoizedState=l,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=l),Ua(e,ln,r)):(r=c.cache,Ua(e,ln,r),r!==l.cache&&Qc(e,[ln],i,!0))),mn(t,e,e.pendingProps.children,i),e.child;case 30:return e.stateNode===null&&(e.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=e.pendingProps,r.name!=null&&r.name!=="auto"?e.flags|=t===null?18882560:18874368:_e&&Dl(e),t!==null&&t.memoizedProps.name!==r.name?e.flags|=4194816:fs(t,e),mn(t,e,r.children,i),e.child;case 29:throw e.pendingProps}throw Error(s(156,e.tag))}function la(t){t.flags|=4}function Ff(t,e,i,r,l){var c;if((c=(t.mode&32)!==0)&&(c=i===null?mv(e,r):mv(e,r)&&(r.src!==i.src||r.srcSet!==i.srcSet)),c){if(t.flags|=16777216,(l&335544128)===l)if(t.stateNode.complete)t.flags|=8192;else if(y_())t.flags|=8192;else throw Er=Bl,ef}else t.flags&=-16777217}function Gg(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!gv(e))if(y_())t.flags|=8192;else throw Er=Bl,ef}function nu(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?dl():536870912,t.lanes|=e,gs|=e)}function Do(t,e){if(!_e)switch(t.tailMode){case"visible":break;case"collapsed":for(var i=t.tail,r=null;i!==null;)i.alternate!==null&&(r=i),i=i.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null;break;default:for(e=t.tail,i=null;e!==null;)e.alternate!==null&&(i=e),e=e.sibling;i===null?t.tail=null:i.sibling=null}}function We(t){var e=t.alternate!==null&&t.alternate.child===t.child,i=0,r=0;if(e)for(var l=t.child;l!==null;)i|=l.lanes|l.childLanes,r|=l.subtreeFlags&1206910976,r|=l.flags&1206910976,l.return=t,l=l.sibling;else for(l=t.child;l!==null;)i|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=t,l=l.sibling;return t.subtreeFlags|=r,t.childLanes=i,e}function Ax(t,e,i){var r=e.pendingProps;switch(Wc(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return We(e),null;case 1:return We(e),null;case 3:return i=e.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),e.memoizedState.cache!==r&&(e.flags|=2048),aa(ln),T(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(as(e)?la(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Zc())),We(e),null;case 26:var l=e.type,c=e.memoizedState;return t===null?(la(e),c!==null?(We(e),Gg(e,c)):(We(e),Ff(e,l,null,r,i))):c?c!==t.memoizedState?(la(e),We(e),Gg(e,c)):(We(e),e.flags&=-16777217):(t=t.memoizedProps,t!==r&&la(e),We(e),Ff(e,l,t,r,i)),null;case 27:if(pt(e),i=ie.current,l=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==r&&la(e);else{if(!r){if(e.stateNode===null)throw Error(s(166));return We(e),e.subtreeFlags&=-33554433,null}t=fe.current,as(e)?Sm(e):(t=ov(l,r,i),e.stateNode=t,la(e))}return We(e),e.subtreeFlags&=-33554433,null;case 5:if(pt(e),l=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==r&&la(e);else{if(!r){if(e.stateNode===null)throw Error(s(166));return We(e),e.subtreeFlags&=-33554433,null}if(c=fe.current,as(e))Sm(e);else{var m=Go(ie.current);switch(c){case 1:c=m.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:c=m.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":c=m.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":c=m.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":c=m.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof r.is=="string"?m.createElement("select",{is:r.is}):m.createElement("select"),r.multiple?c.multiple=!0:r.size&&(c.size=r.size);break;default:c=typeof r.is=="string"?m.createElement(l,{is:r.is}):m.createElement(l)}}c[Nt]=e,c[Dt]=r;t:for(m=e.child;m!==null;){if(m.tag===5||m.tag===6)c.appendChild(m.stateNode);else if(m.tag!==4&&m.tag!==27&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break t;for(;m.sibling===null;){if(m.return===null||m.return===e)break t;m=m.return}m.sibling.return=m.return,m=m.sibling}e.stateNode=c;t:switch(wn(c,l,r),l){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&la(e)}}return We(e),e.subtreeFlags&=-33554433,Ff(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,i),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==r&&la(e);else{if(typeof r!="string"&&e.stateNode===null)throw Error(s(166));if(t=ie.current,as(e)){if(t=e.stateNode,i=e.memoizedProps,r=null,l=Sn,l!==null)switch(l.tag){case 27:case 5:r=l.memoizedProps}t[Nt]=e,t=!!(t.nodeValue===i||r!==null&&r.suppressHydrationWarning===!0||H_(t.nodeValue,i)),t||Da(e,!0)}else t=Go(t).createTextNode(r),t[Nt]=e,e.stateNode=t}return We(e),null;case 31:if(i=e.memoizedState,t===null||t.memoizedState!==null){if(r=as(e),i!==null){if(t===null){if(!r)throw Error(s(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[Nt]=e}else gr(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;We(e),t=!1}else i=Zc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=i),t=!0;if(!t)return e.flags&256?(Qn(e),e):(Qn(e),null);if((e.flags&128)!==0)throw Error(s(558))}return We(e),null;case 13:if(r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(l=as(e),r!==null&&r.dehydrated!==null){if(t===null){if(!l)throw Error(s(318));if(l=e.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(s(317));l[Nt]=e}else gr(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;We(e),l=!1}else l=Zc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=l),l=!0;if(!l)return e.flags&256?(Qn(e),e):(Qn(e),null)}return Qn(e),(e.flags&128)!==0?(e.lanes=i,e):(i=r!==null,t=t!==null&&t.memoizedState!==null,i&&(r=e.child,l=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(l=r.alternate.memoizedState.cachePool.pool),c=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(c=r.memoizedState.cachePool.pool),c!==l&&(r.flags|=2048)),i!==t&&i&&(e.child.flags|=8192),nu(e,e.updateQueue),We(e),null);case 4:return T(),t===null&&xh(e.stateNode.containerInfo),e.flags|=67108864,We(e),null;case 10:return aa(e.type),We(e),null;case 19:if(cf(e),r=e.memoizedState,r===null)return We(e),null;if(l=(e.flags&128)!==0,c=r.rendering,c===null)if(l)Do(r,!1);else{if(nn!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(c=Gl(t),c!==null){for(e.flags|=128,Do(r,!1),t=c.updateQueue,e.updateQueue=t,nu(e,t),e.subtreeFlags=0,t=i,i=e.child;i!==null;)pm(i,t),i=i.sibling;return bo(e,Rn.current&1|2),_e&&na(e,r.treeForkCount),e.child}t=t.sibling}r.tail!==null&&V()>pu&&(e.flags|=128,l=!0,Do(r,!1),e.lanes=4194304)}else{if(!l)if(t=Gl(c),t!==null){if(e.flags|=128,l=!0,t=t.updateQueue,e.updateQueue=t,nu(e,t),Do(r,!0),r.tail===null&&r.tailMode!=="collapsed"&&r.tailMode!=="visible"&&!c.alternate&&!_e)return We(e),null}else 2*V()-r.renderingStartTime>pu&&i!==536870912&&(e.flags|=128,l=!0,Do(r,!1),e.lanes=4194304);r.isBackwards?(c.sibling=e.child,e.child=c):(t=r.last,t!==null?t.sibling=c:e.child=c,r.last=c)}if(r.tail!==null){t=r.tail;t:{for(i=t;i!==null;){if(i.alternate!==null){i=!1;break t}i=i.sibling}i=!0}return r.rendering=t,r.tail=t.sibling,r.renderingStartTime=V(),t.sibling=null,c=Rn.current,c=l?c&1|2:c&1,r.tailMode==="visible"||r.tailMode==="collapsed"||!i||_e?bo(e,c):(i=c,Ct(An,e),Ct(Rn,i),Ln===null&&(Ln=e)),_e&&na(e,r.treeForkCount),t}return We(e),null;case 22:case 23:return Qn(e),lf(),r=e.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(e.flags|=8192):r&&(e.flags|=8192),r?(i&536870912)!==0&&(e.flags&128)===0&&(We(e),e.subtreeFlags&6&&(e.flags|=8192)):We(e),i=e.updateQueue,i!==null&&nu(e,i.retryQueue),i=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),r=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),r!==i&&(e.flags|=2048),t!==null&&ue(yr),null;case 24:return i=null,t!==null&&(i=t.memoizedState.cache),e.memoizedState.cache!==i&&(e.flags|=2048),aa(ln),We(e),null;case 25:return null;case 30:return e.flags|=33554432,We(e),null}throw Error(s(156,e.tag))}function Rx(t,e){switch(Wc(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return aa(ln),T(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return pt(e),null;case 31:if(e.memoizedState!==null){if(Qn(e),e.alternate===null)throw Error(s(340));gr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(Qn(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(s(340));gr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return cf(e),t=e.flags,t&65536?(e.flags=t&-65537|128,t=e.memoizedState,t!==null&&(t.rendering=null,t.tail=null),e.flags|=4,e):null;case 4:return T(),null;case 10:return aa(e.type),null;case 22:case 23:return Qn(e),lf(),t!==null&&ue(yr),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return aa(ln),null;case 25:return null;default:return null}}function Vg(t,e){switch(Wc(e),e.tag){case 3:aa(ln),T();break;case 26:case 27:case 5:pt(e);break;case 4:T();break;case 31:e.memoizedState!==null&&Qn(e);break;case 13:Qn(e);break;case 19:cf(e);break;case 10:aa(e.type);break;case 22:case 23:Qn(e),lf(),t!==null&&ue(yr);break;case 24:aa(ln)}}function Uo(t,e){try{var i=e.updateQueue,r=i!==null?i.lastEffect:null;if(r!==null){var l=r.next;i=l;do{if((i.tag&t)===t){r=void 0;var c=i.create,m=i.inst;r=c(),m.destroy=r}i=i.next}while(i!==l)}}catch(E){Ie(e,e.return,E)}}function Fa(t,e,i){try{var r=e.updateQueue,l=r!==null?r.lastEffect:null;if(l!==null){var c=l.next;r=c;do{if((r.tag&t)===t){var m=r.inst,E=m.destroy;if(E!==void 0){m.destroy=void 0,l=e;var P=i,j=E;try{j()}catch(et){Ie(l,P,et)}}}r=r.next}while(r!==c)}}catch(et){Ie(e,e.return,et)}}function Xg(t){var e=t.updateQueue;if(e!==null){var i=t.stateNode;try{Nm(e,i)}catch(r){Ie(t,t.return,r)}}}function qg(t,e,i){i.props=Ar(t.type,t.memoizedProps),i.state=t.memoizedState;try{i.componentWillUnmount()}catch(r){Ie(t,e,r)}}function Oi(t,e){try{var i=t.ref;if(i!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:var l=t.stateNode,c=$i(t.memoizedProps,l);(l.ref===null||l.ref.name!==c)&&(l.ref=Q_(c)),r=l.ref;break;case 7:if(t.stateNode===null){var m=new ni(t);p(t.child,!1,_y,m,void 0,void 0),t.stateNode=m}r=t.stateNode;break;default:r=t.stateNode}typeof i=="function"?t.refCleanup=i(r):i.current=r}}catch(E){Ie(t,e,E)}}function Cn(t,e){var i=t.ref,r=t.refCleanup;if(i!==null)if(typeof r=="function")try{r()}catch(l){Ie(t,e,l)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof i=="function")try{i(null)}catch(l){Ie(t,e,l)}else i.current=null}function iu(t,e){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&e!==null)for(var i=0;i<e.length;i++)iv(t.stateNode,e[i])}function kg(t){for(var e=t.return;e!==null&&(Gf(e)&&iv(t.stateNode,e.stateNode),!Hf(e));)e=e.return}function No(t){for(var e=t.return;e!==null&&(Gf(e)&&vy(t.stateNode,e.stateNode),!Hf(e));)e=e.return}function Hf(t){return t.tag===5||t.tag===3||t.tag===27}function Gf(t){return t&&t.tag===7&&t.stateNode!==null}function Vf(t){var e=t.type,i=t.memoizedProps,r=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":i.autoFocus&&r.focus();break t;case"img":i.src?r.src=i.src:i.srcSet&&(r.srcset=i.srcSet)}}catch(l){Ie(t,t.return,l)}}function Xf(t,e,i){try{var r=t.stateNode;$x(r,t.type,i,e),r[Dt]=e}catch(l){Ie(t,t.return,l)}}function Yg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ya(t.type)||t.tag===4}function qf(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Yg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ya(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function kf(t,e,i,r){var l=t.tag;if(l===5||l===6)l=t.stateNode,e?(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i).insertBefore(l,e):(e=i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,e.appendChild(l),i=i._reactRootContainer,i!=null||e.onclick!==null||(e.onclick=Ui)),iu(t,r),we=!0;else if(l!==4&&(l===27&&(iu(t,r),r=null,Ya(t.type)&&(i=t.stateNode,e=null)),t=t.child,t!==null))for(kf(t,e,i,r),t=t.sibling;t!==null;)kf(t,e,i,r),t=t.sibling}function au(t,e,i,r){var l=t.tag;if(l===5||l===6)l=t.stateNode,e?i.insertBefore(l,e):i.appendChild(l),iu(t,r),we=!0;else if(l!==4&&(l===27&&(iu(t,r),r=null,Ya(t.type)&&(i=t.stateNode)),t=t.child,t!==null))for(au(t,e,i,r),t=t.sibling;t!==null;)au(t,e,i,r),t=t.sibling}function Wg(t){var e=t.stateNode,i=t.memoizedProps;try{for(var r=t.type,l=e.attributes;l.length;)e.removeAttributeNode(l[0]);wn(e,r,i),e[Nt]=t,e[Dt]=i}catch(c){Ie(t,t.return,c)}}var ru=!1,Jn=null;function jg(t){(t.tag===30||(t.subtreeFlags&33554432)!==0)&&(ru=!0)}var zi=null;function Zg(){var t=zi;return zi=null,t}var Vn=0;function hs(t,e,i,r,l){return Vn=0,Kg(t.child,e,i,r,l)}function Kg(t,e,i,r,l){for(var c=!1;t!==null;){if(t.tag===5){var m=t.stateNode;if(r!==null){var E=Ch(m);r.push(E),E.view&&(c=!0)}else c||Ch(m).view&&(c=!0);ru=!0,Z_(m,Vn===0?e:e+"_"+Vn,i),Vn++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&l||Kg(t.child,e,i,r,l)&&(c=!0));t=t.sibling}return c}function Pi(t,e){for(;t!==null;)t.tag===5?K_(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&e||Pi(t.child,e)),t=t.sibling}function su(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(su(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var e=t.memoizedProps;if(e.name==null||e.name==="auto")throw Error(s(544));var i=e.name;e=ta(e.default,e.share),e!=="none"&&(hs(t,i,e,null,!1)||Pi(t.child,!1))}t=t.sibling}}function Yf(t,e){if(t.tag===30){var i=t.stateNode,r=t.memoizedProps,l=$i(r,i),c=ta(r.default,i.paired?r.share:r.enter);c!=="none"?hs(t,l,c,null,!1)?(su(t),i.paired||e||xs(t,r.onEnter)):Pi(t.child,!1):su(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Yf(t,e),t=t.sibling;else su(t)}function Wf(t){if(Jn!==null&&Jn.size!==0){var e=Jn;if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var i=t.memoizedProps,r=i.name;if(r!=null&&r!=="auto"){var l=e.get(r);if(l!==void 0){var c=ta(i.default,i.share);if(c!=="none"&&(hs(t,r,c,null,!1)?(c=t.stateNode,l.paired=c,c.paired=l,xs(t,i.onShare)):Pi(t.child,!1)),e.delete(r),e.size===0)break}}}Wf(t)}t=t.sibling}}}function jf(t){if(t.tag===30){var e=t.memoizedProps,i=$i(e,t.stateNode),r=Jn!==null?Jn.get(i):void 0,l=ta(e.default,r!==void 0?e.share:e.exit);l!=="none"&&(hs(t,i,l,null,!1)?r!==void 0?(l=t.stateNode,r.paired=l,l.paired=r,Jn.delete(i),xs(t,e.onShare)):xs(t,e.onExit):Pi(t.child,!1)),Jn!==null&&Wf(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)jf(t),t=t.sibling;else Jn!==null&&Wf(t)}function Qg(t){for(t=t.child;t!==null;){if(t.tag===30){var e=t.memoizedProps,i=$i(e,t.stateNode);e=ta(e.default,e.update),t.flags&=-5,e!=="none"&&hs(t,i,e,t.memoizedState=[],!1)}else(t.subtreeFlags&33554432)!==0&&Qg(t);t=t.sibling}}function Zf(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var e=t.stateNode;e.paired!==null&&(e.paired=null,Pi(t.child,!1))}Zf(t)}t=t.sibling}}function ou(t){if(t.tag===30)t.stateNode.paired=null,Pi(t.child,!1),Zf(t);else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)ou(t),t=t.sibling;else Zf(t)}function Jg(t){for(t=t.child;t!==null;)t.tag===30?Pi(t.child,!1):(t.subtreeFlags&33554432)!==0&&Jg(t),t=t.sibling}function Kf(t,e,i,r,l,c,m){for(var E=!1;e!==null;){if(e.tag===5){var P=e.stateNode;if(c!==null&&Vn<c.length){var j=c[Vn],et=Ch(P);(j.view||et.view)&&(E=!0);var dt;if(dt=(t.flags&4)===0)if(et.clip)dt=!0;else{dt=j.rect;var k=et.rect;dt=dt.y!==k.y||dt.x!==k.x||dt.height!==k.height||dt.width!==k.width}dt&&(t.flags|=4),et.abs?et=!j.abs:(j=j.rect,et=et.rect,et=j.height!==et.height||j.width!==et.width),et&&(t.flags|=32)}else t.flags|=32;(t.flags&4)!==0&&Z_(P,Vn===0?i:i+"_"+Vn,l),E&&(t.flags&4)!==0||(zi===null&&(zi=[]),zi.push(P,Vn===0?r:r+"_"+Vn,e.memoizedProps)),Vn++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&m?t.flags|=e.flags&32:Kf(t,e.child,i,r,l,c,m)&&(E=!0));e=e.sibling}return E}function $g(t,e){for(t=t.child;t!==null;){if(t.tag===30){var i=t.memoizedProps,r=t.stateNode,l=$i(i,r),c=ta(i.default,i.update),m;m=t.memoizedState,t.memoizedState=null,r=t;var E=t.child;Vn=0,l=Kf(r,E,l,l,c,m,!1),(t.flags&4)!==0&&l&&xs(t,i.onUpdate)}else(t.subtreeFlags&33554432)!==0&&$g(t);t=t.sibling}}var xn=!1,Pe=!1,Bi=!1,Qf=!1,t_=typeof WeakSet=="function"?WeakSet:Set,yn=null,Ii=!1,Lo=!1,lu=!1,Jf=!1;function Cx(t,e,i){if(t=t.containerInfo,Eh=Ds,t=am(t),Bc(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else t:{r=(r=t.ownerDocument)&&r.defaultView||window;var l=r.getSelection&&r.getSelection();if(l&&l.rangeCount!==0){r=l.anchorNode;var c=l.anchorOffset,m=l.focusNode;l=l.focusOffset;try{r.nodeType,m.nodeType}catch{r=null;break t}var E=0,P=-1,j=-1,et=0,dt=0,k=t,$=null;e:for(;;){for(var Ut;k!==r||c!==0&&k.nodeType!==3||(P=E+c),k!==m||l!==0&&k.nodeType!==3||(j=E+l),k.nodeType===3&&(E+=k.nodeValue.length),(Ut=k.firstChild)!==null;)$=k,k=Ut;for(;;){if(k===t)break e;if($===r&&++et===c&&(P=E),$===m&&++dt===l&&(j=E),(Ut=k.nextSibling)!==null)break;k=$,$=k.parentNode}k=Ut}r=P===-1||j===-1?null:{start:P,end:j}}else r=null}r=r||{start:0,end:0}}else r=null;for(Th={focusedElem:t,selectionRange:r},Ds=!1,i=(i&335544064)===i,yn=e,e=i?9270:1024;yn!==null;){if(t=yn,i&&(r=t.deletions,r!==null))for(c=0;c<r.length;c++)i&&jf(r[c]);if(t.alternate===null&&(t.flags&2)!==0)i&&jg(t),uu(i);else{if(t.tag===22){if(r=t.alternate,t.memoizedState!==null){r!==null&&r.memoizedState===null&&i&&jf(r),uu(i);continue}else if(r!==null&&r.memoizedState!==null){i&&jg(t),uu(i);continue}}r=t.child,(t.subtreeFlags&e)!==0&&r!==null?(r.return=t,yn=r):(i&&Qg(t),uu(i))}}Jn=null}function uu(t){for(;yn!==null;){var e=yn,i=t,r=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 15:break;case 1:if((l&1024)!==0&&r!==null){i=void 0,l=r.memoizedProps,r=r.memoizedState;var c=e.stateNode;try{var m=Ar(e.type,l);i=c.getSnapshotBeforeUpdate(m,r),c.__reactInternalSnapshotBeforeUpdate=i}catch(E){Ie(e,e.return,E)}}break;case 3:if((l&1024)!==0){if(r=e.stateNode.containerInfo,i=r.nodeType,i===9)Uh(r);else if(i===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":Uh(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:i&&r!==null&&(i=$i(r.memoizedProps,r.stateNode),l=e.memoizedProps,l=ta(l.default,l.update),l!=="none"&&hs(r,i,l,r.memoizedState=[],!0));break;default:if((l&1024)!==0)throw Error(s(163))}if(r=e.sibling,r!==null){r.return=e.return,yn=r;break}yn=e.return}}function e_(t,e,i){var r=i.flags;switch(i.tag){case 0:case 11:case 15:Fi(t,i),r&4&&Uo(5,i);break;case 1:if(Fi(t,i),r&4)if(t=i.stateNode,e===null)try{t.componentDidMount()}catch(m){Ie(i,i.return,m)}else{var l=Ar(i.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(l,e,t.__reactInternalSnapshotBeforeUpdate)}catch(m){Ie(i,i.return,m)}}r&64&&Xg(i),r&512&&Oi(i,i.return);break;case 3:if(Fi(t,i),r&64&&(t=i.updateQueue,t!==null)){if(e=null,i.child!==null)switch(i.child.tag){case 27:case 5:e=i.child.stateNode;break;case 1:e=i.child.stateNode}try{Nm(t,e)}catch(m){Ie(i,i.return,m)}}break;case 27:e===null&&r&4&&Wg(i);case 26:case 5:Fi(t,i),e===null&&r&4&&Vf(i),r&512&&Oi(i,i.return);break;case 12:Fi(t,i);break;case 31:Fi(t,i),r&4&&r_(t,i);break;case 13:Fi(t,i),r&4&&s_(t,i),r&64&&(t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(i=Hx.bind(null,i),yy(t,i))));break;case 22:if(r=i.memoizedState!==null||xn,!r){var c=e!==null&&e.memoizedState!==null||Pe;e=xn,l=Pe,xn=r,(Pe=c)&&!l?(r=2,(i.subtreeFlags&8772)!==0&&(r|=1),yi(t,i,r)):Fi(t,i),xn=e,Pe=l}break;case 30:Fi(t,i),r&512&&Oi(i,i.return);break;case 7:r&512&&Oi(i,i.return);default:Fi(t,i)}}function $f(t,e){for(t=t.child;t!==null;)n_(t,e),t=t.sibling}function n_(t,e){switch(t.tag){case 5:case 26:try{var i=t.stateNode;if(e){var r=i.style;typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"}else{var l=t.stateNode,c=t.memoizedProps.style,m=c!=null&&c.hasOwnProperty("display")?c.display:null;l.style.display=m==null||typeof m=="boolean"?"":(""+m).trim()}}catch(P){Ie(t,t.return,P)}th(t,e);break;case 6:try{t.stateNode.nodeValue=e?"":t.memoizedProps,we=!0}catch(P){Ie(t,t.return,P)}break;case 18:try{var E=t.stateNode;e?j_(E,!0):j_(t.stateNode,!1)}catch(P){Ie(t,t.return,P)}break;case 22:case 23:t.memoizedState===null&&$f(t,e);break;default:$f(t,e)}}function th(t,e){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){t:{var i=t,r=e;switch(i.tag){case 4:n_(i,r);break t;case 22:i.memoizedState===null&&th(i,r);break t;default:th(i,r)}}t=t.sibling}}function i_(t){var e=t.alternate;e!==null&&(t.alternate=null,i_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&Ce(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Je=null,Xn=!1;function Si(t,e,i){for(i=i.child;i!==null;)a_(t,e,i),i=i.sibling}function a_(t,e,i){if(je&&typeof je.onCommitFiberUnmount=="function")try{je.onCommitFiberUnmount(Te,i)}catch{}switch(i.tag){case 26:Pe||Cn(i,e),Si(t,e,i),i.memoizedState?i.memoizedState.count--:i.stateNode&&!Pe&&(i=i.stateNode,i.parentNode.removeChild(i));break;case 27:Pe||Cn(i,e),No(i);var r=Je,l=Xn;Ya(i.type)&&(Je=i.stateNode,Xn=!1),Si(t,e,i),lv(i.stateNode,i.type,i.memoizedProps),Je=r,Xn=l;break;case 5:Pe||Cn(i,e),No(i);case 6:if(i.tag===6&&No(i),r=Je,l=Xn,Je=null,Si(t,e,i),Je=r,Xn=l,Je!==null)if(Xn)try{(Je.nodeType===9?Je.body:Je.nodeName==="HTML"?Je.ownerDocument.body:Je).removeChild(i.stateNode),we=!0}catch(c){Ie(i,e,c)}else try{Je.removeChild(i.stateNode),we=!0}catch(c){Ie(i,e,c)}break;case 18:Je!==null&&(Xn?(t=Je,W_(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,i.stateNode),Us(t)):W_(Je,i.stateNode));break;case 4:r=Je,l=Xn,Je=i.stateNode.containerInfo,Xn=!0,Si(t,e,i),Je=r,Xn=l;break;case 0:case 11:case 14:case 15:Fa(2,i,e),Pe||Fa(4,i,e),Si(t,e,i);break;case 1:Pe||(Cn(i,e),r=i.stateNode,typeof r.componentWillUnmount=="function"&&qg(i,e,r)),Si(t,e,i);break;case 21:Si(t,e,i);break;case 22:Pe=(r=Pe)||i.memoizedState!==null,Si(t,e,i),Pe=r;break;case 30:Cn(i,e),Si(t,e,i);break;case 7:Pe||Cn(i,e),Si(t,e,i);break;default:Si(t,e,i)}}function r_(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Us(t)}catch(i){Ie(e,e.return,i)}}}function s_(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Us(t)}catch(i){Ie(e,e.return,i)}}function wx(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new t_),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new t_),e;default:throw Error(s(435,t.tag))}}function cu(t,e){var i=wx(t);e.forEach(function(r){if(!i.has(r)){i.add(r);var l=Gx.bind(null,t,r);r.then(l,l)}})}function In(t,e,i){var r=e.deletions;if(r!==null)for(var l=0;l<r.length;l++){var c=r[l],m=t,E=e,P=E;t:for(;P!==null;){switch(P.tag){case 27:if(Ya(P.type)){Je=P.stateNode,Xn=!1;break t}break;case 5:Je=P.stateNode,Xn=!1;break t;case 3:case 4:Je=P.stateNode.containerInfo,Xn=!0;break t}P=P.return}if(Je===null)throw Error(s(160));a_(m,E,c),Je=null,Xn=!1,m=c.alternate,m!==null&&(m.return=null),c.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)o_(e,t,i),e=e.sibling}var xi=null;function o_(t,e,i){var r=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(l&4&&(r=t.updateQueue,r=r!==null?r.events:null,r!==null))for(var c=0;c<r.length;c++){var m=r[c];m.ref.impl=m.nextImpl}In(e,t,i),Fn(t),l&4&&(Fa(3,t,t.return),Uo(3,t),Fa(5,t,t.return));break;case 1:In(e,t,i),Fn(t),l&512&&(Pe||r===null||Cn(r,r.return)),l&64&&xn&&(t=t.updateQueue,t!==null&&(e=t.callbacks,e!==null&&(i=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=i===null?e:i.concat(e))));break;case 26:if(c=xi,In(e,t,i),Fn(t),l&512&&(Pe||r===null||Cn(r,r.return)),l&4)if(l=r!==null?r.memoizedState:null,i=t.memoizedState,r===null)if(i===null)if(t.stateNode===null)if(xn)t.stateNode=q_(t.type,t.memoizedProps,e.containerInfo,t);else{t:{e=t.type,i=t.memoizedProps,l=c.ownerDocument||c;e:switch(e){case"title":r=l.getElementsByTagName("title")[0],(!r||r[He]||r[Nt]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=l.createElement(e),l.head.insertBefore(r,l.querySelector("head > title"))),wn(r,e,i),r[Nt]=t,Ze(r),e=r;break t;case"link":if(c=pv("link","href",l).get(e+(i.href||""))){for(m=0;m<c.length;m++)if(r=c[m],r.getAttribute("href")===(i.href==null||i.href===""?null:i.href)&&r.getAttribute("rel")===(i.rel==null?null:i.rel)&&r.getAttribute("title")===(i.title==null?null:i.title)&&r.getAttribute("crossorigin")===(i.crossOrigin==null?null:i.crossOrigin)){c.splice(m,1);break e}}r=l.createElement(e),wn(r,e,i),l.head.appendChild(r);break;case"meta":if(c=pv("meta","content",l).get(e+(i.content||""))){for(m=0;m<c.length;m++)if(r=c[m],r.getAttribute("content")===(i.content==null?null:""+i.content)&&r.getAttribute("name")===(i.name==null?null:i.name)&&r.getAttribute("property")===(i.property==null?null:i.property)&&r.getAttribute("http-equiv")===(i.httpEquiv==null?null:i.httpEquiv)&&r.getAttribute("charset")===(i.charSet==null?null:i.charSet)){c.splice(m,1);break e}}r=l.createElement(e),wn(r,e,i),l.head.appendChild(r);break;default:throw Error(s(468,e))}r[Nt]=t,Ze(r),e=r}t.stateNode=e}else xn||Ih(c,t.type,t.stateNode);else t.stateNode=dv(c,i,t.memoizedProps);else l!==i?(l===null?(e=r.stateNode,e===null||Pe||e.parentNode.removeChild(e)):l.count--,i===null?xn||Ih(c,t.type,t.stateNode):dv(c,i,t.memoizedProps)):i===null&&t.stateNode!==null&&Xf(t,t.memoizedProps,r.memoizedProps);break;case 27:In(e,t,i),Fn(t),l&512&&(Pe||r===null||Cn(r,r.return)),r!==null&&l&4&&Xf(t,t.memoizedProps,r.memoizedProps);break;case 5:if(c=Bi,Bi=!1,In(e,t,i),Bi=c,Fn(t),l&512&&(Pe||r===null||Cn(r,r.return)),t.flags&32){e=t.stateNode;try{jr(e,""),we=!0}catch(et){Ie(t,t.return,et)}}l&4&&t.stateNode!=null&&(e=t.memoizedProps,Xf(t,e,r!==null?r.memoizedProps:e)),l&1024&&(Qf=!0);break;case 6:if(In(e,t,i),Fn(t),l&4){if(t.stateNode===null)throw Error(s(162));e=t.memoizedProps,i=t.stateNode;try{i.nodeValue=e,we=!0}catch(et){Ie(t,t.return,et)}}break;case 3:if(we=!1,bu=null,c=xi,xi=Vo(e.containerInfo),In(e,t,i),xi=c,Fn(t),l&4&&r!==null&&r.memoizedState.isDehydrated)try{Us(e.containerInfo)}catch(et){Ie(t,t.return,et)}Qf&&(Qf=!1,l_(t)),we=!1;break;case 4:l=Bi,Bi=xn,r=Cp(),c=xi,xi=Vo(t.stateNode.containerInfo),In(e,t,i),Fn(t),xi=c,we&&Lo&&(lu=!0),we=r,Bi=l;break;case 12:In(e,t,i),Fn(t);break;case 31:In(e,t,i),Fn(t),l&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,cu(t,e)));break;case 13:In(e,t,i),Fn(t),t.child.flags&8192&&t.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(du=V()),l&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,cu(t,e)));break;case 22:c=t.memoizedState!==null,m=r!==null&&r.memoizedState!==null;var E=xn,P=Pe,j=Bi;xn=E||c,Bi=j||c,Pe=P||m,In(e,t,i),Pe=P,Bi=j,xn=E,Fn(t),l&8192&&(e=t.stateNode,e._visibility=c?e._visibility&-2:e._visibility|1,!c||r===null||m||xn||Pe||(e=m||Pe,i=xn,r=Pe,xn=c||xn,Pe=e,Ha(t,2),xn=i,Pe=r),!c&&Bi||$f(t,c)),l&4&&(e=t.updateQueue,e!==null&&(i=e.retryQueue,i!==null&&(e.retryQueue=null,cu(t,i))));break;case 19:In(e,t,i),Fn(t),l&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,cu(t,e)));break;case 30:l&512&&(Pe||r===null||Cn(r,r.return)),l=Cp(),c=Lo,m=(i&335544064)===i,E=t.memoizedProps,Lo=m&&ta(E.default,E.update)!=="none",In(e,t,i),Fn(t),m&&r!==null&&we&&(t.flags|=4),Lo=c,we=l;break;case 21:break;case 7:l&512&&(Pe||r===null||Cn(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=t);default:In(e,t,i),Fn(t)}}function Fn(t){var e=t.flags;if(e&2){try{for(var i,r=t.return;r!==null;){if(Yg(r)){i=r;break}r=r.return}r=null;for(var l=t.return;l!==null;){if(Gf(l)){var c=l.stateNode;r===null?r=[c]:r.push(c)}if(Hf(l))break;l=l.return}var m=r;if(i==null)throw Error(s(160));switch(i.tag){case 27:var E=i.stateNode,P=qf(t);au(t,P,E,m);break;case 5:var j=i.stateNode;i.flags&32&&(jr(j,""),i.flags&=-33);var et=qf(t);au(t,et,j,m);break;case 3:case 4:var dt=i.stateNode.containerInfo,k=qf(t);kf(t,k,dt,m);break;default:throw Error(s(161))}}catch($){Ie(t,t.return,$)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function l_(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;l_(e),e.tag===5&&e.flags&1024&&(e=e.stateNode,Ds=!0,e.reset(),Ds=!1),t=t.sibling}}function ds(t,e){if(e.subtreeFlags&9270)for(e=e.child;e!==null;)u_(e,t),e=e.sibling;else $g(e)}function u_(t,e){var i=t.alternate;if(i===null)Yf(t,!1);else switch(t.tag){case 3:if(Jf=Ii=!1,Zg(),ds(e,t),!Ii&&!lu){if(t=zi,t!==null)for(var r=0;r<t.length;r+=3){i=t[r];var l=t[r+1];K_(i,t[r+2]),i=i.ownerDocument.documentElement,i!==null&&i.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+l+")"})}t=e.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Jf=!0}zi=null;break;case 5:ds(e,t);break;case 4:r=Ii,Ii=!1,ds(e,t),Ii&&(lu=!0),Ii=r;break;case 22:t.memoizedState===null&&(i.memoizedState!==null?Yf(t,!1):ds(e,t));break;case 30:r=Ii,l=Zg(),Ii=!1,ds(e,t),Ii&&(t.flags|=4);var c=t.memoizedProps,m=t.stateNode;e=$i(c,m),m=$i(i.memoizedProps,m);var E=ta(c.default,c.update);E==="none"?e=!1:(c=i.memoizedState,i.memoizedState=null,i=t.child,Vn=0,e=Kf(t,i,e,m,E,c,!0),Vn!==(c===null?0:c.length)&&(t.flags|=32)),(t.flags&4)!==0&&e?(xs(t,t.memoizedProps.onUpdate),zi=l):l!==null&&(l.push.apply(l,zi),zi=l),Ii=(t.flags&32)!==0?!0:r;break;default:ds(e,t)}}function Fi(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)e_(t,e.alternate,e),e=e.sibling}function Ha(t,e){for(t=t.child;t!==null;){var i=t,r=e;switch(i.tag){case 0:case 11:case 14:case 15:Fa(4,i,i.return),Ha(i,r);break;case 1:Cn(i,i.return);var l=i.stateNode;typeof l.componentWillUnmount=="function"&&qg(i,i.return,l),Ha(i,r);break;case 27:(r&2)!==0&&lv(i.stateNode,i.type,i.memoizedProps);case 5:Cn(i,i.return),i.tag!==5&&i.tag!==27||No(i),Ha(i,r);break;case 6:No(i);break;case 26:Cn(i,i.return),l=i.stateNode,i.memoizedState!==null||l===null||Pe||l.parentNode.removeChild(l),Ha(i,r);break;case 22:i.memoizedState===null&&Ha(i,r);break;case 30:Cn(i,i.return),Ha(i,r);break;case 7:Cn(i,i.return);default:Ha(i,r)}t=t.sibling}}function yi(t,e,i){for(i=(e.subtreeFlags&8772)!==0?i:i&-2,e=e.child;e!==null;){var r=e.alternate,l=t,c=e,m=c.flags,E=(i&1)!==0;switch(c.tag){case 0:case 11:case 15:yi(l,c,i),Uo(4,c);break;case 1:if(yi(l,c,i),r=c,l=r.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(et){Ie(r,r.return,et)}if(r=c,l=r.updateQueue,l!==null){var P=r.stateNode;try{var j=l.shared.hiddenCallbacks;if(j!==null)for(l.shared.hiddenCallbacks=null,l=0;l<j.length;l++)Um(j[l],P)}catch(et){Ie(r,r.return,et)}}E&&m&64&&Xg(c),Oi(c,c.return);break;case 27:(i&2)!==0&&Wg(c);case 5:c.tag!==5&&c.tag!==27||kg(c),yi(l,c,i),E&&r===null&&m&4&&Vf(c),Oi(c,c.return);break;case 6:kg(c);break;case 26:P=c.stateNode,c.memoizedState!==null||P===null||xn||Ih(Vo(P.ownerDocument),c.type,P),yi(l,c,i),E&&r===null&&m&4&&Vf(c),Oi(c,c.return);break;case 12:yi(l,c,i);break;case 31:yi(l,c,i),E&&m&4&&r_(l,c);break;case 13:yi(l,c,i),E&&m&4&&s_(l,c);break;case 22:c.memoizedState===null&&yi(l,c,i),Oi(c,c.return);break;case 30:yi(l,c,i),Oi(c,c.return);break;case 7:Oi(c,c.return);default:yi(l,c,i)}e=e.sibling}}function eh(t,e){var i=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==i&&(t!=null&&t.refCount++,i!=null&&vo(i))}function nh(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&vo(t))}function hi(t,e,i,r){var l=(i&335544064)===i;if(e.subtreeFlags&(l?10262:10256))for(e=e.child;e!==null;)c_(t,e,i,r),e=e.sibling;else l&&Jg(e)}function c_(t,e,i,r){var l=(i&335544064)===i;l&&e.alternate===null&&e.return!==null&&e.return.alternate!==null&&ou(e);var c=e.flags;switch(e.tag){case 0:case 11:case 15:hi(t,e,i,r),c&2048&&Uo(9,e);break;case 1:hi(t,e,i,r);break;case 3:hi(t,e,i,r),l&&Jf&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),c&2048&&(c=null,e.alternate!==null&&(c=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==c&&(e.refCount++,c!=null&&vo(c)));break;case 12:if(c&2048){hi(t,e,i,r),c=e.stateNode;try{var m=e.memoizedProps,E=m.id,P=m.onPostCommit;typeof P=="function"&&P(E,e.alternate===null?"mount":"update",c.passiveEffectDuration,-0)}catch(j){Ie(e,e.return,j)}}else hi(t,e,i,r);break;case 31:hi(t,e,i,r);break;case 13:hi(t,e,i,r);break;case 23:break;case 22:m=e.stateNode,E=e.alternate,e.memoizedState!==null?(l&&E!==null&&E.memoizedState===null&&ou(E),m._visibility&2?hi(t,e,i,r):Oo(t,e)):(l&&E!==null&&E.memoizedState!==null&&ou(e),m._visibility&2?hi(t,e,i,r):(m._visibility|=2,ps(t,e,i,r,(e.subtreeFlags&10256)!==0||!1))),c&2048&&eh(E,e);break;case 24:hi(t,e,i,r),c&2048&&nh(e.alternate,e);break;case 30:l&&(c=e.alternate,c!==null&&(Pi(c.child,!0),Pi(e.child,!0))),hi(t,e,i,r);break;default:hi(t,e,i,r)}}function ps(t,e,i,r,l){for(l=l&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var c=t,m=e,E=i,P=r,j=m.flags;switch(m.tag){case 0:case 11:case 15:ps(c,m,E,P,l),Uo(8,m);break;case 23:break;case 22:var et=m.stateNode;m.memoizedState!==null?et._visibility&2?ps(c,m,E,P,l):Oo(c,m):(et._visibility|=2,ps(c,m,E,P,l)),l&&j&2048&&eh(m.alternate,m);break;case 24:ps(c,m,E,P,l),l&&j&2048&&nh(m.alternate,m);break;default:ps(c,m,E,P,l)}e=e.sibling}}function Oo(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var i=t,r=e,l=r.flags;switch(r.tag){case 22:Oo(i,r),l&2048&&eh(r.alternate,r);break;case 24:Oo(i,r),l&2048&&nh(r.alternate,r);break;default:Oo(i,r)}e=e.sibling}}var Rr=8192;function Cr(t,e,i){if(t.subtreeFlags&Rr)for(t=t.child;t!==null;)f_(t,e,i),t=t.sibling}function f_(t,e,i){switch(t.tag){case 26:Cr(t,e,i),t.flags&Rr&&(t.memoizedState!==null?zy(i,xi,t.memoizedState,t.memoizedProps):(t=t.stateNode,(e&335544128)===e&&vv(i,t)));break;case 5:Cr(t,e,i),t.flags&Rr&&(t=t.stateNode,(e&335544128)===e&&vv(i,t));break;case 3:case 4:var r=xi;xi=Vo(t.stateNode.containerInfo),Cr(t,e,i),xi=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=Rr,Rr=16777216,Cr(t,e,i),Rr=r):Cr(t,e,i));break;case 30:if((t.flags&Rr)!==0&&(r=t.memoizedProps.name,r!=null&&r!=="auto")){var l=t.stateNode;l.paired=null,Jn===null&&(Jn=new Map),Jn.set(r,l)}Cr(t,e,i);break;default:Cr(t,e,i)}}function h_(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function zo(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var i=0;i<e.length;i++){var r=e[i];yn=r,p_(r,t)}h_(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)d_(t),t=t.sibling}function d_(t){switch(t.tag){case 0:case 11:case 15:zo(t),t.flags&2048&&Fa(9,t,t.return);break;case 3:zo(t);break;case 12:zo(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,fu(t)):zo(t);break;default:zo(t)}}function fu(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var i=0;i<e.length;i++){var r=e[i];yn=r,p_(r,t)}h_(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Fa(8,e,e.return),fu(e);break;case 22:i=e.stateNode,i._visibility&2&&(i._visibility&=-3,fu(e));break;default:fu(e)}t=t.sibling}}function p_(t,e){for(;yn!==null;){var i=yn;switch(i.tag){case 0:case 11:case 15:Fa(8,i,e);break;case 23:case 22:if(i.memoizedState!==null&&i.memoizedState.cachePool!==null){var r=i.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:vo(i.memoizedState.cache)}if(r=i.child,r!==null)r.return=i,yn=r;else t:for(i=t;yn!==null;){r=yn;var l=r.sibling,c=r.return;if(i_(r),r===i){yn=null;break t}if(l!==null){l.return=c,yn=l;break t}yn=c}}}var Dx={getCacheForType:function(t){var e=bn(ln),i=e.data.get(t);return i===void 0&&(i=t(),e.data.set(t,i)),i},cacheSignal:function(){return bn(ln).controller.signal}},Ux=typeof WeakMap=="function"?WeakMap:Map,Ne=0,ke=null,xe=null,Me=0,Be=0,$n=null,Ga=!1,ms=!1,ih=!1,ua=0,nn=0,Va=0,wr=0,hu=0,ti=0,gs=0,Po=null,qn=null,ah=!1,du=0,m_=0,pu=1/0,mu=null,Xa=null,$e=0,Mi=null,Dr=null,Hi=0,rh=0,sh=null,g_=null,_s=null,vs=null,Ss=null,Bo=0,gu=null;function ei(){return(Ne&2)!==0&&Me!==0?Me&-Me:At.T!==null?gh():Q()}function __(){if(ti===0)if((Me&536870912)===0||_e){var t=cr;cr<<=1,(cr&3932160)===0&&(cr=262144),ti=t}else ti=536870912;return t=An.current,t!==null&&(t.flags|=32),ti}function xs(t,e){if(e!=null){var i=t.stateNode,r=i.ref;r===null&&(r=i.ref=Q_($i(t.memoizedProps,i))),vs===null&&(vs=[]),vs.push(e.bind(null,r))}}function kn(t,e,i){(t===ke&&(Be===2||Be===9)||t.cancelPendingCommit!==null)&&(ys(t,0),qa(t,Me,ti,!1)),fr(t,i),((Ne&2)===0||t!==ke)&&(t===ke&&((Ne&2)===0&&(wr|=i),nn===4&&qa(t,Me,ti,!1)),Gi(t))}function v_(t,e,i){if((Ne&6)!==0)throw Error(s(327));var r=!i&&(e&127)===0&&(e&t.expiredLanes)===0||Ta(t,e),l=r?Ox(t,e):lh(t,e,!0),c=r;do{if(l===0){ms&&!r&&qa(t,e,0,!1);break}else{if(i=t.current.alternate,c&&!Nx(i)){l=lh(t,e,!1),c=!1;continue}if(l===2){if(c=e,t.errorRecoveryDisabledLanes&c)var m=0;else m=t.pendingLanes&-536870913,m=m!==0?m:m&536870912?536870912:0;if(m!==0){e=m;t:{var E=t;l=Po;var P=E.current.memoizedState.isDehydrated;if(P&&(ys(E,m).flags|=256),m=lh(E,m,!1),m!==2&&m!==6){if(ih&&!P){E.errorRecoveryDisabledLanes|=c,wr|=c,l=4;break t}c=qn,qn=l,c!==null&&(qn===null?qn=c:qn.push.apply(qn,c))}l=m}if(c=!1,l!==2)continue}}if(l===1){ys(t,0),qa(t,e,0,!0);break}t:{switch(r=t,c=l,c){case 0:case 1:throw Error(s(345));case 4:if((e&4194048)!==e&&(e&62914560)!==e)break;case 6:qa(r,e,ti,!Ga);break t;case 2:qn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((e&62914560)===e&&(l=du+300-V(),10<l)){if(qa(r,e,ti,!Ga),Zi(r,0,!0)!==0)break t;Hi=e,r.timeoutHandle=Rh(S_.bind(null,r,i,qn,mu,ah,e,ti,wr,gs,Ga,c,"Throttled",-0,0),l);break t}S_(r,i,qn,mu,ah,e,ti,wr,gs,Ga,c,null,-0,0)}}break}while(!0);Gi(t)}function S_(t,e,i,r,l,c,m,E,P,j,et,dt,k,$){t.timeoutHandle=-1;var Ut=e.subtreeFlags,kt=(c&335544064)===c;if(dt=null,(kt||Ut&8192||(Ut&16785408)===16785408)&&(dt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ui},Jn=null,f_(e,c,dt),kt&&(Ut=dt,kt=t.containerInfo,kt=(kt.nodeType===9?kt:kt.ownerDocument).__reactViewTransition,kt!=null&&(Ut.count++,Ut.waitingForViewTransition=!0,Ut=ko.bind(Ut),kt.finished.then(Ut,Ut))),Ut=(c&62914560)===c?du-V():(c&4194048)===c?m_-V():0,Ut=Py(dt,Ut),Ut!==null)){Hi=c,t.cancelPendingCommit=Ut(R_.bind(null,t,e,c,i,r,l,m,E,P,j,et,dt,null,k,$)),qa(t,c,m,!j);return}R_(t,e,c,i,r,l,m,E,P,j,et,dt)}function Nx(t){for(var e=t;;){var i=e.tag;if((i===0||i===11||i===15)&&e.flags&16384&&(i=e.updateQueue,i!==null&&(i=i.stores,i!==null)))for(var r=0;r<i.length;r++){var l=i[r],c=l.getSnapshot;l=l.value;try{if(!Kn(c(),l))return!1}catch{return!1}}if(i=e.child,e.subtreeFlags&16384&&i!==null)i.return=e,e=i;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function qa(t,e,i,r){e=ao(t,e),e&=~hu,e&=~wr,t.suspendedLanes|=e,t.pingedLanes&=~e,r&&(t.warmLanes|=e),r=t.expirationTimes;for(var l=e;0<l;){var c=31-Un(l),m=1<<c;r[c]=-1,l&=~m}i!==0&&pl(t,i,e)}function _u(){return(Ne&6)===0?(Io(0),!1):!0}function oh(){if(xe!==null){if(Be===0)var t=xe.return;else t=xe,ia=_r=null,mf(t),os=null,yo=0,t=xe;for(;t!==null;)Vg(t.alternate,t),t=t.return;xe=null}}function ys(t,e){var i=t.timeoutHandle;return i!==-1&&(t.timeoutHandle=-1,ny(i)),i=t.cancelPendingCommit,i!==null&&(t.cancelPendingCommit=null,i()),Hi=0,oh(),ke=t,xe=i=ea(t.current,null),Me=e,Be=0,$n=null,Ga=!1,ms=Ta(t,e),ih=!1,gs=ti=hu=wr=Va=nn=0,qn=Po=null,ah=!1,ua=ao(t,e),bl(),i}function x_(t,e){de=null,At.H=Kl,e===ss||e===Pl?(e=Rm(),Be=3):e===ef?(e=Rm(),Be=4):Be=e===Df?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,$n=e,xe===null&&(nn=1,Ql(t,li(e,t.current)))}function y_(){var t=An.current;return t===null?!0:(Me&4194048)===Me?Ln===null:(Me&62914560)===Me||(Me&536870912)!==0?t===Ln:!1}function M_(){var t=At.H;return At.H=Kl,t===null?Kl:t}function E_(){var t=At.A;return At.A=Dx,t}function vu(){nn=4,Ga||(Me&4194048)!==Me&&An.current!==null||(ms=!0),(Va&134217727)===0&&(wr&134217727)===0||ke===null||qa(ke,Me,ti,!1)}function lh(t,e,i){var r=Ne;Ne|=2;var l=M_(),c=E_();(ke!==t||Me!==e)&&(mu=null,ys(t,e)),e=!1;var m=nn;t:do try{if(Be!==0&&xe!==null){var E=xe,P=$n;switch(Be){case 8:oh(),m=6;break t;case 3:case 2:case 9:case 6:An.current===null&&(e=!0);var j=Be;if(Be=0,$n=null,Ms(t,E,P,j),i&&ms){m=0;break t}break;default:j=Be,Be=0,$n=null,Ms(t,E,P,j)}}Lx(),m=nn;break}catch(et){x_(t,et)}while(!0);return e&&t.shellSuspendCounter++,ia=_r=null,Ne=r,At.H=l,At.A=c,xe===null&&(ke=null,Me=0,bl()),m}function Lx(){for(;xe!==null;)T_(xe)}function Ox(t,e){var i=Ne;Ne|=2;var r=M_(),l=E_();ke!==t||Me!==e?(mu=null,pu=V()+500,ys(t,e)):ms=Ta(t,e);t:do try{if(Be!==0&&xe!==null){e=xe;var c=$n;e:switch(Be){case 1:Be=0,$n=null,Ms(t,e,c,1);break;case 2:case 9:if(bm(c)){Be=0,$n=null,b_(e);break}e=function(){Be!==2&&Be!==9||ke!==t||(Be=7),Gi(t)},c.then(e,e);break t;case 3:Be=7;break t;case 4:Be=5;break t;case 7:bm(c)?(Be=0,$n=null,b_(e)):(Be=0,$n=null,Ms(t,e,c,7));break;case 5:var m=null;switch(xe.tag){case 26:m=xe.memoizedState;case 5:case 27:var E=xe;if(m?gv(m):E.stateNode.complete){Be=0,$n=null;var P=E.sibling;if(P!==null)xe=P;else{var j=E.return;j!==null?(xe=j,Su(j)):xe=null}break e}}Be=0,$n=null,Ms(t,e,c,5);break;case 6:Be=0,$n=null,Ms(t,e,c,6);break;case 8:oh(),nn=6;break t;default:throw Error(s(462))}}zx();break}catch(et){x_(t,et)}while(!0);return ia=_r=null,At.H=r,At.A=l,Ne=i,xe!==null?0:(ke=null,Me=0,bl(),nn)}function zx(){for(;xe!==null&&!Ot();)T_(xe)}function T_(t){var e=Hg(t.alternate,t,ua);t.memoizedProps=t.pendingProps,e===null?Su(t):xe=e}function b_(t){var e=t,i=e.alternate;switch(e.tag){case 15:case 0:e=Lg(i,e,e.pendingProps,e.type,void 0,Me);break;case 11:e=Lg(i,e,e.pendingProps,e.type.render,e.ref,Me);break;case 5:mf(e);var r=e;r===Sn&&(_e?(Ul(r),r.tag===5&&r.stateNode!=null&&(Ye=r.stateNode)):(Ul(r),_e=!0));default:Vg(i,e),e=xe=pm(e,ua),e=Hg(i,e,ua)}t.memoizedProps=t.pendingProps,e===null?Su(t):xe=e}function Ms(t,e,i,r){ia=_r=null,mf(e),os=null,yo=0;var l=e.return;try{if(Mx(t,l,e,i,Me)){nn=1,Ql(t,li(i,t.current)),xe=null;return}}catch(c){if(l!==null)throw xe=l,c;nn=1,Ql(t,li(i,t.current)),xe=null;return}e.flags&32768?(_e||r===1?t=!0:ms||(Me&536870912)!==0?t=!1:(Ga=t=!0,(r===2||r===9||r===3||r===6)&&(r=An.current,r!==null&&r.tag===13&&(r.flags|=16384))),A_(e,t)):Su(e)}function Su(t){var e=t;do{if((e.flags&32768)!==0){A_(e,Ga);return}t=e.return;var i=Ax(e.alternate,e,ua);if(i!==null){xe=i;return}if(e=e.sibling,e!==null){xe=e;return}xe=e=t}while(e!==null);nn===0&&(nn=5)}function A_(t,e){do{var i=Rx(t.alternate,t);if(i!==null){i.flags&=32767,xe=i;return}if(i=t.return,i!==null&&(i.flags|=32768,i.subtreeFlags=0,i.deletions=null),!e&&(t=t.sibling,t!==null)){xe=t;return}xe=t=i}while(t!==null);nn=6,xe=null}function R_(t,e,i,r,l,c,m,E,P,j,et,dt){t.cancelPendingCommit=null;do xu();while($e!==0);if((Ne&6)!==0)throw Error(s(327));if(e!==null){if(e===t.current)throw Error(s(177));t===ke&&(xe=ke=null,Me=0),Dr=e,Mi=t,Hi=i,sh=l,g_=r,Px(t,e,i,m,E,P,dt)}}function Px(t,e,i,r,l,c,m){var E=e.lanes|e.childLanes;if(rh=E,E|=Vc,Sc(t,i,E,r,l,c),vs=null,(i&335544064)===i?(Ss=cx(t),r=10262):(Ss=null,r=10256),(e.subtreeFlags&r)!==0||(e.flags&r)!==0?(t.callbackNode=null,t.callbackPriority=0,Vx(Mt,function(){return hh(),null})):(t.callbackNode=null,t.callbackPriority=0),ru=!1,r=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||r){r=At.T,At.T=null,l=zt.p,zt.p=2,c=Ne,Ne|=4;try{Cx(t,e,i)}finally{Ne=c,zt.p=l,At.T=r}}$e=1,ru?_s=ly(m,t.containerInfo,Ss,uh,ch,Ix,fh,hh,Bx):(uh(),ch(),fh())}function Bx(t){if($e!==0){var e=Mi.onRecoverableError;e(t,{componentStack:null})}}function Ix(){$e===3&&($e=0,u_(Dr,Mi),$e=4)}function uh(){if($e===1){$e=0;var t=Mi,e=Dr,i=Hi,r=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||r){r=At.T,At.T=null;var l=zt.p;zt.p=2;var c=Ne;Ne|=4;try{Lo=lu=!1,o_(e,t,i),i=Th;var m=am(t.containerInfo),E=i.focusedElem,P=i.selectionRange;if(m!==E&&E&&E.ownerDocument&&im(E.ownerDocument.documentElement,E)){if(P!==null&&Bc(E)){var j=P.start,et=P.end;if(et===void 0&&(et=j),"selectionStart"in E)E.selectionStart=j,E.selectionEnd=Math.min(et,E.value.length);else{var dt=E.ownerDocument||document,k=dt&&dt.defaultView||window;if(k.getSelection){var $=k.getSelection(),Ut=E.textContent.length,kt=Math.min(P.start,Ut),pe=P.end===void 0?kt:Math.min(P.end,Ut);!$.extend&&kt>pe&&(m=pe,pe=kt,kt=m);var W=nm(E,kt),G=nm(E,pe);if(W&&G&&($.rangeCount!==1||$.anchorNode!==W.node||$.anchorOffset!==W.offset||$.focusNode!==G.node||$.focusOffset!==G.offset)){var J=dt.createRange();J.setStart(W.node,W.offset),$.removeAllRanges(),kt>pe?($.addRange(J),$.extend(G.node,G.offset)):(J.setEnd(G.node,G.offset),$.addRange(J))}}}}for(dt=[],$=E;$=$.parentNode;)$.nodeType===1&&dt.push({element:$,left:$.scrollLeft,top:$.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<dt.length;E++){var ct=dt[E];ct.element.scrollLeft=ct.left,ct.element.scrollTop=ct.top}}Ds=!!Eh,Th=Eh=null}finally{Ne=c,zt.p=l,At.T=r}}t.current=e,$e=2}}function ch(){if($e===2){$e=0;var t=Mi,e=Dr,i=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||i){i=At.T,At.T=null;var r=zt.p;zt.p=2;var l=Ne;Ne|=4;try{e_(t,e.alternate,e)}finally{Ne=l,zt.p=r,At.T=i}}$e=3}}function fh(){if($e===4||$e===3){$e=0;var t=_s;_s=null,se();var e=Mi,i=Dr,r=Hi,l=g_,c=(r&335544064)===r?10262:10256;if((i.subtreeFlags&c)!==0||(i.flags&c)!==0?$e=5:($e=0,Dr=Mi=null,C_(e,e.pendingLanes)),c=e.pendingLanes,c===0&&(Xa=null),rt(r),i=i.stateNode,je&&typeof je.onCommitFiberRoot=="function")try{je.onCommitFiberRoot(Te,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=At.T,c=zt.p,zt.p=2,At.T=null;try{for(var m=e.onRecoverableError,E=0;E<l.length;E++){var P=l[E];m(P.value,{componentStack:P.stack})}}finally{At.T=i,zt.p=c}}if(l=vs,m=Ss,Ss=null,l!==null&&(vs=null,m===null&&(m=[]),t!==null))for(P=0;P<l.length;P++)i=(0,l[P])(m),i!==void 0&&t.finished.finally(i);(Hi&3)!==0&&xu(),Gi(e),c=e.pendingLanes,(r&261930)!==0&&(c&42)!==0?e===gu?Bo++:(Bo=0,gu=e):(Bo=0,gu=null),Io(0)}}function C_(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,vo(e)))}function xu(){return _s!==null&&(_s.skipTransition(),_s=null),uh(),ch(),fh(),hh()}function hh(){if($e!==5)return!1;var t=Mi,e=rh;rh=0;var i=rt(Hi),r=At.T,l=zt.p;try{zt.p=32>i?32:i,At.T=null,i=sh,sh=null;var c=Mi,m=Hi;if($e=0,Dr=Mi=null,Hi=0,(Ne&6)!==0)throw Error(s(331));var E=Ne;if(Ne|=4,d_(c.current),c_(c,c.current,m,i),Ne=E,Io(0,!1),je&&typeof je.onPostCommitFiberRoot=="function")try{je.onPostCommitFiberRoot(Te,c)}catch{}return!0}finally{zt.p=l,At.T=r,C_(t,e)}}function w_(t,e,i){e=li(i,e),e=wf(t.stateNode,e,2),t=za(t,e,2),t!==null&&(fr(t,2),Gi(t))}function Ie(t,e,i){if(t.tag===3)w_(t,t,i);else for(;e!==null;){if(e.tag===3){w_(e,t,i);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Xa===null||!Xa.has(r))){t=li(i,t),i=bg(2),r=za(e,i,2),r!==null&&(Ag(i,r,e,t),fr(r,2),Gi(r));break}}e=e.return}}function dh(t,e,i){var r=t.pingCache;if(r===null){r=t.pingCache=new Ux;var l=new Set;r.set(e,l)}else l=r.get(e),l===void 0&&(l=new Set,r.set(e,l));l.has(i)||(ih=!0,l.add(i),t=Fx.bind(null,t,e,i),e.then(t,t))}function Fx(t,e,i){var r=t.pingCache;r!==null&&r.delete(e),t.pingedLanes|=t.suspendedLanes&i,t.warmLanes&=~i,ke===t&&(Me&i)===i&&((nn===4||nn===3&&(Me&62914560)===Me&&300>V()-du)&&(Ne&2)===0?ys(t,0):hu|=i,gs===Me&&(gs=0)),Gi(t)}function D_(t,e){e===0&&(e=dl()),t=pr(t,e),t!==null&&(fr(t,e),Gi(t))}function Hx(t){var e=t.memoizedState,i=0;e!==null&&(i=e.retryLane),D_(t,i)}function Gx(t,e){var i=0;switch(t.tag){case 31:case 13:var r=t.stateNode,l=t.memoizedState;l!==null&&(i=l.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(e),D_(t,i)}function Vx(t,e){return te(t,e)}var Es=null,Ts=null,ph=!1,yu=!1,mh=!1,ka=0;function Gi(t){t!==Ts&&t.next===null&&(Ts===null?Es=Ts=t:Ts=Ts.next=t),yu=!0,ph||(ph=!0,qx())}function Io(t,e){if(!mh&&yu){mh=!0;do for(var i=!1,r=Es;r!==null;){if(t!==0){var l=r.pendingLanes;if(l===0)var c=0;else{var m=r.suspendedLanes,E=r.pingedLanes;c=(1<<31-Un(42|t)+1)-1,c&=l&~(m&~E),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(i=!0,O_(r,c))}else c=Me,c=Zi(r,r===ke?c:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(c&3)===0||Ta(r,c)||(i=!0,O_(r,c));r=r.next}while(i);mh=!1}}function Xx(){U_()}function U_(){yu=ph=!1;var t=0;ka!==0&&ey()&&(t=ka);for(var e=V(),i=null,r=Es;r!==null;){var l=r.next,c=N_(r,e);c===0?(r.next=null,i===null?Es=l:i.next=l,l===null&&(Ts=i)):(i=r,(t!==0||(c&3)!==0)&&(yu=!0)),r=l}$e!==0&&$e!==5||Io(t),ka!==0&&(ka=0)}function N_(t,e){for(var i=t.suspendedLanes,r=t.pingedLanes,l=t.expirationTimes,c=t.pendingLanes&-62914561;0<c;){var m=31-Un(c),E=1<<m,P=l[m];P===-1?((E&i)===0||(E&r)!==0)&&(l[m]=vc(E,e)):P<=e&&(t.expiredLanes|=E),c&=~E}if(e=ke,i=Me,i=Zi(t,t===e?i:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,i===0||t===e&&(Be===2||Be===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&Jt(r),t.callbackNode=null,t.callbackPriority=0;if((i&3)===0||Ta(t,i)){if(e=i&-i,e===t.callbackPriority)return e;switch(r!==null&&Jt(r),rt(i)){case 2:case 8:i=Vt;break;case 32:i=Mt;break;case 268435456:i=qt;break;default:i=Mt}return r=L_.bind(null,t),i=te(i,r),t.callbackPriority=e,t.callbackNode=i,e}return r!==null&&r!==null&&Jt(r),t.callbackPriority=2,t.callbackNode=null,2}function L_(t,e){if($e!==0&&$e!==5)return t.callbackNode=null,t.callbackPriority=0,null;var i=t.callbackNode;if(xu()&&t.callbackNode!==i)return null;var r=Me;return r=Zi(t,t===ke?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(v_(t,r,e),N_(t,V()),t.callbackNode!=null&&t.callbackNode===i?L_.bind(null,t):null)}function O_(t,e){if(xu())return null;v_(t,e,!0)}function qx(){iy(function(){(Ne&6)!==0?te(xt,Xx):U_()})}function gh(){if(ka===0){var t=xr;t===0&&(t=ur,ur<<=1,(ur&261888)===0&&(ur=256)),ka=t}return ka}function z_(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:_l(t)}function kx(t,e,i,r,l){if(e==="submit"&&i&&i.stateNode===l){var c=z_((l[Dt]||null).action),m=r.submitter;m&&(e=(e=m[Dt]||null)?z_(e.formAction):m.getAttribute("formAction"),e!==null&&(c=e,m=null));var E=new yl("action","action",null,r,l);t.push({event:E,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(ka!==0){var P=new FormData(l,m);Tf(i,{pending:!0,data:P,method:l.method,action:c},null,P)}}else typeof c=="function"&&(E.preventDefault(),P=new FormData(l,m),Tf(i,{pending:!0,data:P,method:l.method,action:c},c,P))},currentTarget:l}]})}}for(var _h=0;_h<Gc.length;_h++){var vh=Gc[_h],Yx=vh.toLowerCase(),Wx=vh[0].toUpperCase()+vh.slice(1);vi(Yx,"on"+Wx)}vi(om,"onAnimationEnd"),vi(lm,"onAnimationIteration"),vi(um,"onAnimationStart"),vi("dblclick","onDoubleClick"),vi("focusin","onFocus"),vi("focusout","onBlur"),vi(nx,"onTransitionRun"),vi(ix,"onTransitionStart"),vi(ax,"onTransitionCancel"),vi(cm,"onTransitionEnd"),pn("onMouseEnter",["mouseout","mouseover"]),pn("onMouseLeave",["mouseout","mouseover"]),pn("onPointerEnter",["pointerout","pointerover"]),pn("onPointerLeave",["pointerout","pointerover"]),on("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),on("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),on("onBeforeInput",["compositionend","keypress","textInput","paste"]),on("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),on("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),on("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Fo));function P_(t,e){e=(e&4)!==0;for(var i=0;i<t.length;i++){var r=t[i],l=r.event;r=r.listeners;t:{var c=void 0;if(e)for(var m=r.length-1;0<=m;m--){var E=r[m],P=E.instance,j=E.currentTarget;if(E=E.listener,P!==c&&l.isPropagationStopped())break t;c=E,l.currentTarget=j;try{c(l)}catch(et){Tl(et)}l.currentTarget=null,c=P}else for(m=0;m<r.length;m++){if(E=r[m],P=E.instance,j=E.currentTarget,E=E.listener,P!==c&&l.isPropagationStopped())break t;c=E,l.currentTarget=j;try{c(l)}catch(et){Tl(et)}l.currentTarget=null,c=P}}}}function ye(t,e){var i=e[re];i===void 0&&(i=e[re]=new Set);var r=t+"__bubble";i.has(r)||(B_(e,t,2,!1),i.add(r))}function Sh(t,e,i){var r=0;e&&(r|=4),B_(i,t,r,e)}var Mu="_reactListening"+Math.random().toString(36).slice(2);function xh(t){if(!t[Mu]){t[Mu]=!0,ba.forEach(function(i){i!=="selectionchange"&&(jx.has(i)||Sh(i,!1,t),Sh(i,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Mu]||(e[Mu]=!0,Sh("selectionchange",!1,e))}}function B_(t,e,i,r){switch(Av(e)){case 2:var l=Hy;break;case 8:l=Gy;break;default:l=Hh}i=l.bind(null,e,i,t),l=void 0,!Rc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(l=!0),r?l!==void 0?t.addEventListener(e,i,{capture:!0,passive:l}):t.addEventListener(e,i,!0):l!==void 0?t.addEventListener(e,i,{passive:l}):t.addEventListener(e,i,!1)}function yh(t,e,i,r,l){var c=r;if((e&1)===0&&(e&2)===0&&r!==null)t:for(;;){if(r===null)return;var m=r.tag;if(m===3||m===4){var E=r.stateNode.containerInfo;if(E===l)break;if(m===4)for(m=r.return;m!==null;){var P=m.tag;if((P===3||P===4)&&m.stateNode.containerInfo===l)return;m=m.return}for(;E!==null;){if(m=Wt(E),m===null)return;if(P=m.tag,P===5||P===6||P===26||P===27){r=c=m;continue t}E=E.parentNode}}r=r.return}Bp(function(){var j=c,et=bc(i),dt=[];t:{var k=fm.get(t);if(k!==void 0){var $=yl,Ut=t;switch(t){case"keypress":if(Sl(i)===0)break t;case"keydown":case"keyup":$=NS;break;case"focusin":Ut="focus",$=Uc;break;case"focusout":Ut="blur",$=Uc;break;case"beforeblur":case"afterblur":$=Uc;break;case"click":if(i.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":$=Hp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":$=xS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":$=BS;break;case om:case lm:case um:$=ES;break;case cm:$=FS;break;case"scroll":case"scrollend":$=vS;break;case"wheel":$=GS;break;case"copy":case"cut":case"paste":$=bS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":$=Vp;break;case"submit":$=zS;break;case"toggle":case"beforetoggle":$=XS}var kt=(e&4)!==0,pe=!kt&&(t==="scroll"||t==="scrollend"),W=kt?k!==null?k+"Capture":null:k;kt=[];for(var G=j,J;G!==null;){var ct=G;if(J=ct.stateNode,ct=ct.tag,ct!==5&&ct!==26&&ct!==27||J===null||W===null||(ct=so(G,W),ct!=null&&kt.push(Ho(G,ct,J))),pe)break;G=G.return}0<kt.length&&(k=new $(k,Ut,null,i,et),dt.push({event:k,listeners:kt}))}}if((e&7)===0){t:{if($=t==="mouseover"||t==="pointerover",k=t==="mouseout"||t==="pointerout",$&&i!==Tc&&(Ut=i.relatedTarget||i.fromElement)&&(Wt(Ut)||Ut[$t]))break t;(k||$)&&(Ut=et.window===et?et:($=et.ownerDocument)?$.defaultView||$.parentWindow:window,k?($=i.relatedTarget||i.toElement,k=j,$=$?Wt($):null,$!==null&&(pe=f($),kt=$.tag,$!==pe||kt!==5&&kt!==27&&kt!==6)&&($=null)):(k=null,$=j),k!==$&&(kt=Hp,ct="onMouseLeave",W="onMouseEnter",G="mouse",(t==="pointerout"||t==="pointerover")&&(kt=Vp,ct="onPointerLeave",W="onPointerEnter",G="pointer"),pe=k==null?Ut:Se(k),J=$==null?Ut:Se($),Ut=new kt(ct,G+"leave",k,i,et),Ut.target=pe,Ut.relatedTarget=J,ct=null,Wt(et)===j&&(kt=new kt(W,G+"enter",$,i,et),kt.target=J,kt.relatedTarget=pe,ct=kt),pe=ct,kt=k&&$?B(k,$,Zx):null,k!==null&&I_(dt,Ut,k,kt,!1),$!==null&&pe!==null&&I_(dt,pe,$,kt,!0)))}t:{if(k=j?Se(j):window,$=k.nodeName&&k.nodeName.toLowerCase(),$==="select"||$==="input"&&k.type==="file")var Ft=Kp;else if(jp(k))if(Qp)Ft=$S;else{Ft=QS;var Ee=KS}else $=k.nodeName,!$||$.toLowerCase()!=="input"||k.type!=="checkbox"&&k.type!=="radio"?j&&Ec(j.elementType)&&(Ft=Kp):Ft=JS;if(Ft&&(Ft=Ft(t,j))){Zp(dt,Ft,i,et);break t}Ee&&Ee(t,k,j)}switch(Ee=j?Se(j):window,t){case"focusin":(jp(Ee)||Ee.contentEditable==="true")&&(Jr=Ee,Ic=j,mo=null);break;case"focusout":mo=Ic=Jr=null;break;case"mousedown":Fc=!0;break;case"contextmenu":case"mouseup":case"dragend":Fc=!1,rm(dt,i,et);break;case"selectionchange":if(ex)break;case"keydown":case"keyup":rm(dt,i,et)}var Kt;if(Lc)t:{switch(t){case"compositionstart":var ne="onCompositionStart";break t;case"compositionend":ne="onCompositionEnd";break t;case"compositionupdate":ne="onCompositionUpdate";break t}ne=void 0}else Qr?Yp(t,i)&&(ne="onCompositionEnd"):t==="keydown"&&i.keyCode===229&&(ne="onCompositionStart");ne&&(Xp&&i.locale!=="ko"&&(Qr||ne!=="onCompositionStart"?ne==="onCompositionEnd"&&Qr&&(Kt=Ip()):(Aa=et,Cc="value"in Aa?Aa.value:Aa.textContent,Qr=!0)),Ee=Eu(j,ne),0<Ee.length&&(ne=new Gp(ne,t,null,i,et),dt.push({event:ne,listeners:Ee}),Kt?ne.data=Kt:(Kt=Wp(i),Kt!==null&&(ne.data=Kt)))),(Kt=kS?YS(t,i):WS(t,i))&&(ne=Eu(j,"onBeforeInput"),0<ne.length&&(Ee=new Gp("onBeforeInput","beforeinput",null,i,et),dt.push({event:Ee,listeners:ne}),Ee.data=Kt)),kx(dt,t,j,i,et)}P_(dt,e)})}function Ho(t,e,i){return{instance:t,listener:e,currentTarget:i}}function Eu(t,e){for(var i=e+"Capture",r=[];t!==null;){var l=t,c=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||c===null||(l=so(t,i),l!=null&&r.unshift(Ho(t,l,c)),l=so(t,e),l!=null&&r.push(Ho(t,l,c))),t.tag===3)return r;t=t.return}return[]}function Zx(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function I_(t,e,i,r,l){for(var c=e._reactName,m=[];i!==null&&i!==r;){var E=i,P=E.alternate,j=E.stateNode;if(E=E.tag,P!==null&&P===r)break;E!==5&&E!==26&&E!==27||j===null||(P=j,l?(j=so(i,c),j!=null&&m.unshift(Ho(i,j,P))):l||(j=so(i,c),j!=null&&m.push(Ho(i,j,P)))),i=i.return}m.length!==0&&t.push({event:e,listeners:m})}var Kx=/\r\n?/g,Qx=/\u0000|\uFFFD/g;function F_(t){return(typeof t=="string"?t:""+t).replace(Kx,`
`).replace(Qx,"")}function H_(t,e){return e=F_(e),F_(t)===e}function Fe(t,e,i,r,l,c){switch(i){case"children":if(typeof r=="string")e==="body"||e==="textarea"&&r===""||jr(t,r);else if(typeof r=="number"||typeof r=="bigint")e!=="body"&&jr(t,""+r);else return;break;case"className":gl(t,"class",r);break;case"tabIndex":gl(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":gl(t,i,r);break;case"style":zp(t,r,c);return;case"data":if(e!=="object"){gl(t,"data",r);break}case"src":case"href":if(r===""&&(e!=="a"||i!=="href")){t.removeAttribute(i);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(i);break}r=_l(r),t.setAttribute(i,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(i,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(i==="formAction"?(e!=="input"&&Fe(t,e,"name",l.name,l,null),Fe(t,e,"formEncType",l.formEncType,l,null),Fe(t,e,"formMethod",l.formMethod,l,null),Fe(t,e,"formTarget",l.formTarget,l,null)):(Fe(t,e,"encType",l.encType,l,null),Fe(t,e,"method",l.method,l,null),Fe(t,e,"target",l.target,l,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(i);break}r=_l(r),t.setAttribute(i,r);break;case"onClick":r!=null&&(t.onclick=Ui);return;case"onScroll":r!=null&&ye("scroll",t);return;case"onScrollEnd":r!=null&&ye("scrollend",t);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(i=r.__html,i!=null){if(l.children!=null)throw Error(s(60));c?.__html!==i&&(t.innerHTML=i)}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}i=_l(r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",i);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(i,r):t.removeAttribute(i);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(i,""):t.removeAttribute(i);break;case"capture":case"download":r===!0?t.setAttribute(i,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(i,r):t.removeAttribute(i);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(i,r):t.removeAttribute(i);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(i):t.setAttribute(i,r);break;case"popover":ye("beforetoggle",t),ye("toggle",t),ml(t,"popover",r);break;case"xlinkActuate":Qi(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Qi(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Qi(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Qi(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Qi(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Qi(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Qi(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Qi(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Qi(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":ml(t,"is",r);break;case"innerText":case"textContent":return;default:if(!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")i=gS.get(i)||i,ml(t,i,r);else return}we=!0}function Mh(t,e,i,r,l,c){switch(i){case"style":zp(t,r,c);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(i=r.__html,i!=null){if(l.children!=null)throw Error(s(60));c?.__html!==i&&(t.innerHTML=i)}}break;case"children":if(typeof r=="string")jr(t,r);else if(typeof r=="number"||typeof r=="bigint")jr(t,""+r);else return;break;case"onScroll":r!=null&&ye("scroll",t);return;case"onScrollEnd":r!=null&&ye("scrollend",t);return;case"onClick":r!=null&&(t.onclick=Ui);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!qe.hasOwnProperty(i))t:{if(i[0]==="o"&&i[1]==="n"&&(l=i.endsWith("Capture"),c=i.slice(2,l?i.length-7:void 0),e=t[Dt]||null,e=e!=null?e[i]:null,typeof e=="function"&&t.removeEventListener(c,e,l),typeof r=="function")){typeof e!="function"&&e!==null&&(i in t?t[i]=null:t.hasAttribute(i)&&t.removeAttribute(i)),t.addEventListener(c,r,l);break t}we=!0,i in t?t[i]=r:r===!0?t.setAttribute(i,""):ml(t,i,r)}return}we=!0}function wn(t,e,i){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ye("error",t),ye("load",t);var r=!1,l=!1,c;for(c in i)if(i.hasOwnProperty(c)){var m=i[c];if(m!=null)switch(c){case"src":r=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,e));default:Fe(t,e,c,m,i,null)}}l&&Fe(t,e,"srcSet",i.srcSet,i,null),r&&Fe(t,e,"src",i.src,i,null);return;case"input":ye("invalid",t);var E=c=m=l=null,P=null,j=null;for(r in i)if(i.hasOwnProperty(r)){var et=i[r];if(et!=null)switch(r){case"name":l=et;break;case"type":m=et;break;case"checked":P=et;break;case"defaultChecked":j=et;break;case"value":c=et;break;case"defaultValue":E=et;break;case"children":case"dangerouslySetInnerHTML":if(et!=null)throw Error(s(137,e));break;default:Fe(t,e,r,et,i,null)}}Up(t,c,E,P,j,m,l,!1);return;case"select":ye("invalid",t),r=m=c=null;for(l in i)if(i.hasOwnProperty(l)&&(E=i[l],E!=null))switch(l){case"value":c=E;break;case"defaultValue":m=E;break;case"multiple":r=E;default:Fe(t,e,l,E,i,null)}e=c,i=m,t.multiple=!!r,e!=null?Wr(t,!!r,e,!1):i!=null&&Wr(t,!!r,i,!0);return;case"textarea":ye("invalid",t),c=l=r=null;for(m in i)if(i.hasOwnProperty(m)&&(E=i[m],E!=null))switch(m){case"value":r=E;break;case"defaultValue":l=E;break;case"children":c=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(s(91));break;default:Fe(t,e,m,E,i,null)}Lp(t,r,l,c);return;case"option":for(P in i)i.hasOwnProperty(P)&&(r=i[P],r!=null)&&(P==="selected"?t.selected=r&&typeof r!="function"&&typeof r!="symbol":Fe(t,e,P,r,i,null));return;case"dialog":ye("beforetoggle",t),ye("toggle",t),ye("cancel",t),ye("close",t);break;case"iframe":case"object":ye("load",t);break;case"video":case"audio":for(r=0;r<Fo.length;r++)ye(Fo[r],t);break;case"image":ye("error",t),ye("load",t);break;case"details":ye("toggle",t);break;case"embed":case"source":case"link":ye("error",t),ye("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(j in i)if(i.hasOwnProperty(j)&&(r=i[j],r!=null))switch(j){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,e));default:Fe(t,e,j,r,i,null)}return;default:if(Ec(e)){for(et in i)i.hasOwnProperty(et)&&(r=i[et],r!==void 0&&Mh(t,e,et,r,i,void 0));return}}for(E in i)i.hasOwnProperty(E)&&(r=i[E],r!=null&&Fe(t,e,E,r,i,null))}var Jx={};function $x(t,e,i,r){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,c=null,m=null,E=null,P=null,j=null,et=null;for($ in i){var dt=i[$];if(i.hasOwnProperty($)&&dt!=null)switch($){case"checked":break;case"value":break;case"defaultValue":P=dt;default:r.hasOwnProperty($)||Fe(t,e,$,null,r,dt)}}for(var k in r){var $=r[k];if(dt=i[k],r.hasOwnProperty(k)&&($!=null||dt!=null))switch(k){case"type":$!==dt&&(we=!0),c=$;break;case"name":$!==dt&&(we=!0),l=$;break;case"checked":$!==dt&&(we=!0),j=$;break;case"defaultChecked":$!==dt&&(we=!0),et=$;break;case"value":$!==dt&&(we=!0),m=$;break;case"defaultValue":$!==dt&&(we=!0),E=$;break;case"children":case"dangerouslySetInnerHTML":if($!=null)throw Error(s(137,e));break;default:$!==dt&&Fe(t,e,k,$,r,dt)}}yc(t,m,E,P,j,et,c,l);return;case"select":$=m=E=k=null;for(c in i)if(P=i[c],i.hasOwnProperty(c)&&P!=null)switch(c){case"value":break;case"multiple":$=P;default:r.hasOwnProperty(c)||Fe(t,e,c,null,r,P)}for(l in r)if(c=r[l],P=i[l],r.hasOwnProperty(l)&&(c!=null||P!=null))switch(l){case"value":c!==P&&(we=!0),k=c;break;case"defaultValue":c!==P&&(we=!0),E=c;break;case"multiple":c!==P&&(we=!0),m=c;default:c!==P&&Fe(t,e,l,c,r,P)}e=E,i=m,r=$,k!=null?Wr(t,!!i,k,!1):!!r!=!!i&&(e!=null?Wr(t,!!i,e,!0):Wr(t,!!i,i?[]:"",!1));return;case"textarea":$=k=null;for(E in i)if(l=i[E],i.hasOwnProperty(E)&&l!=null&&!r.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:Fe(t,e,E,null,r,l)}for(m in r)if(l=r[m],c=i[m],r.hasOwnProperty(m)&&(l!=null||c!=null))switch(m){case"value":l!==c&&(we=!0),k=l;break;case"defaultValue":l!==c&&(we=!0),$=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(s(91));break;default:l!==c&&Fe(t,e,m,l,r,c)}Np(t,k,$);return;case"option":for(var Ut in i)k=i[Ut],i.hasOwnProperty(Ut)&&k!=null&&!r.hasOwnProperty(Ut)&&(Ut==="selected"?t.selected=!1:Fe(t,e,Ut,null,r,k));for(P in r)k=r[P],$=i[P],r.hasOwnProperty(P)&&k!==$&&(k!=null||$!=null)&&(P==="selected"?(k!==$&&(we=!0),t.selected=k&&typeof k!="function"&&typeof k!="symbol"):Fe(t,e,P,k,r,$));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var kt in i)k=i[kt],i.hasOwnProperty(kt)&&k!=null&&!r.hasOwnProperty(kt)&&Fe(t,e,kt,null,r,k);for(j in r)if(k=r[j],$=i[j],r.hasOwnProperty(j)&&k!==$&&(k!=null||$!=null))switch(j){case"children":case"dangerouslySetInnerHTML":if(k!=null)throw Error(s(137,e));break;default:Fe(t,e,j,k,r,$)}return;default:if(Ec(e)){for(var pe in i)k=i[pe],i.hasOwnProperty(pe)&&k!==void 0&&!r.hasOwnProperty(pe)&&Mh(t,e,pe,void 0,r,k);for(et in r)k=r[et],$=i[et],!r.hasOwnProperty(et)||k===$||k===void 0&&$===void 0||Mh(t,e,et,k,r,$);return}}for(var W in i)k=i[W],i.hasOwnProperty(W)&&k!=null&&!r.hasOwnProperty(W)&&Fe(t,e,W,null,r,k);for(dt in r)k=r[dt],$=i[dt],!r.hasOwnProperty(dt)||k===$||k==null&&$==null||Fe(t,e,dt,k,r,$)}function G_(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function ty(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,i=performance.getEntriesByType("resource"),r=0;r<i.length;r++){var l=i[r],c=l.transferSize,m=l.initiatorType,E=l.duration;if(c&&E&&G_(m)){for(m=0,E=l.responseEnd,r+=1;r<i.length;r++){var P=i[r],j=P.startTime;if(j>E)break;var et=P.transferSize,dt=P.initiatorType;et&&G_(dt)&&(P=P.responseEnd,m+=et*(P<E?1:(E-j)/(P-j)))}if(--r,e+=8*(c+m)/(l.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Eh=null,Th=null;function Go(t){return t.nodeType===9?t:t.ownerDocument}function V_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function X_(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function q_(t,e,i,r){return i=Go(i).createElement(t),i[Nt]=r,i[Dt]=e,wn(i,t,e),Ze(i),i}function bh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ah=null;function ey(){var t=window.event;return t&&t.type==="popstate"?t===Ah?!1:(Ah=t,!0):(Ah=null,!1)}var Rh=typeof setTimeout=="function"?setTimeout:void 0,ny=typeof clearTimeout=="function"?clearTimeout:void 0,k_=typeof Promise=="function"?Promise:void 0,Y_=typeof requestAnimationFrame=="function"?requestAnimationFrame:Rh,iy=typeof queueMicrotask=="function"?queueMicrotask:typeof k_<"u"?function(t){return k_.resolve(null).then(t).catch(ay)}:Rh;function ay(t){setTimeout(function(){throw t})}function Ya(t){return t==="head"}function W_(t,e){var i=e,r=0;do{var l=i.nextSibling;if(t.removeChild(i),l&&l.nodeType===8)if(i=l.data,i==="/$"||i==="/&"){if(r===0){t.removeChild(l),Us(e);return}r--}else if(i==="$"||i==="$?"||i==="$~"||i==="$!"||i==="&")r++;else if(i==="html")zh(t.ownerDocument.documentElement);else if(i==="head"){i=t.ownerDocument.head,zh(i);for(var c=i.firstChild;c;){var m=c.nextSibling,E=c.nodeName;c[He]||E==="SCRIPT"||E==="STYLE"||E==="LINK"&&c.rel.toLowerCase()==="stylesheet"||i.removeChild(c),c=m}}else i==="body"&&zh(t.ownerDocument.body);i=l}while(i);Us(e)}function j_(t,e){var i=t;t=0;do{var r=i.nextSibling;if(i.nodeType===1?e?(i._stashedDisplay=i.style.display,i.style.display="none"):(i.style.display=i._stashedDisplay||"",i.getAttribute("style")===""&&i.removeAttribute("style")):i.nodeType===3&&(e?(i._stashedText=i.nodeValue,i.nodeValue=""):i.nodeValue=i._stashedText||""),r&&r.nodeType===8)if(i=r.data,i==="/$"){if(t===0)break;t--}else i!=="$"&&i!=="$?"&&i!=="$~"&&i!=="$!"||t++;i=r}while(i)}function Z_(t,e,i){if(e=CSS.escape(e)!==e?"r-"+btoa(e).replace(/=/g,""):e,t.style.viewTransitionName=e,i!=null&&(t.style.viewTransitionClass=i),i=getComputedStyle(t),i.display==="inline"){if(e=t.getClientRects(),e.length===1)var r=1;else for(var l=r=0;l<e.length;l++){var c=e[l];0<c.width&&0<c.height&&r++}r===1&&(t=t.style,t.display=e.length===1?"inline-block":"block",t.marginTop="-"+i.paddingTop,t.marginBottom="-"+i.paddingBottom)}}function K_(t,e){t=t.style,e=e.style;var i=e!=null?e.hasOwnProperty("viewTransitionName")?e.viewTransitionName:e.hasOwnProperty("view-transition-name")?e["view-transition-name"]:null:null;t.viewTransitionName=i==null||typeof i=="boolean"?"":(""+i).trim(),i=e!=null?e.hasOwnProperty("viewTransitionClass")?e.viewTransitionClass:e.hasOwnProperty("view-transition-class")?e["view-transition-class"]:null:null,t.viewTransitionClass=i==null||typeof i=="boolean"?"":(""+i).trim(),t.display==="inline-block"&&(e==null?t.display=t.margin="":(i=e.display,t.display=i==null||typeof i=="boolean"?"":i,i=e.margin,i!=null?t.margin=i:(i=e.hasOwnProperty("marginTop")?e.marginTop:e["margin-top"],t.marginTop=i==null||typeof i=="boolean"?"":i,e=e.hasOwnProperty("marginBottom")?e.marginBottom:e["margin-bottom"],t.marginBottom=e==null||typeof e=="boolean"?"":e)))}function ry(t,e,i){return i=i.ownerDocument.defaultView,{rect:t,abs:e.position==="absolute"||e.position==="fixed",clip:e.clipPath!=="none"||e.overflow!=="visible"||e.filter!=="none"||e.mask!=="none"||e.mask!=="none"||e.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=i.innerHeight&&t.left<=i.innerWidth}}function Ch(t){var e=t.getBoundingClientRect(),i=getComputedStyle(t);return ry(e,i,t)}function sy(t){return t.documentElement.clientHeight}function oy(t){this.addEventListener("load",t),this.addEventListener("error",t)}function ly(t,e,i,r,l,c,m,E,P){var j=e.nodeType===9?e:e.ownerDocument;try{var et=j.startViewTransition({update:function(){var k=j.defaultView,$=k.navigation&&k.navigation.transition,Ut=j.fonts.status;r();var kt=[];if(Ut==="loaded"&&(sy(j),j.fonts.status==="loading"&&kt.push(j.fonts.ready)),Ut=kt.length,t!==null)for(var pe=t.suspenseyImages,W=0,G=0;G<pe.length;G++){var J=pe[G];if(!J.complete){var ct=J.getBoundingClientRect();if(0<ct.bottom&&0<ct.right&&ct.top<k.innerHeight&&ct.left<k.innerWidth){if(W+=_v(J),W>Au){kt.length=Ut;break}J=new Promise(oy.bind(J)),kt.push(J)}}}if(0<kt.length)return k=Promise.race([Promise.all(kt),new Promise(function(Ft){return setTimeout(Ft,500)})]).then(l,l),($?Promise.allSettled([$.finished,k]):k).then(c,c);if(l(),$)return $.finished.then(c,c);c()},types:i});j.__reactViewTransition=et;var dt=[];return et.ready.then(function(){for(var k=j.documentElement.getAnimations({subtree:!0}),$=0;$<k.length;$++){var Ut=k[$],kt=Ut.effect,pe=kt.pseudoElement;if(pe!=null&&pe.startsWith("::view-transition")){dt.push(Ut),Ut=kt.getKeyframes();for(var W=pe=void 0,G=!0,J=0;J<Ut.length;J++){var ct=Ut[J],Ft=ct.width;if(pe===void 0)pe=Ft;else if(pe!==Ft){G=!1;break}if(Ft=ct.height,W===void 0)W=Ft;else if(W!==Ft){G=!1;break}delete ct.width,delete ct.height,ct.transform==="none"&&delete ct.transform}G&&pe!==void 0&&W!==void 0&&(kt.setKeyframes(Ut),G=getComputedStyle(kt.target,kt.pseudoElement),G.width!==pe||G.height!==W)&&(G=Ut[0],G.width=pe,G.height=W,G=Ut[Ut.length-1],G.width=pe,G.height=W,kt.setKeyframes(Ut))}}m()},function(k){j.__reactViewTransition===et&&(j.__reactViewTransition=null);try{typeof k=="object"&&k!==null&&k.name==="InvalidStateError"&&(k.message==="View transition was skipped because document visibility state is hidden."||k.message==="Skipping view transition because document visibility state has become hidden."||k.message==="Skipping view transition because viewport size changed."||k.message==="Transition was aborted because of invalid state")&&(k=null),k!==null&&P(k)}finally{r(),l(),m()}}),et.finished.finally(function(){for(var k=0;k<dt.length;k++)dt[k].cancel();j.__reactViewTransition===et&&(j.__reactViewTransition=null),E()}),et}catch{return r(),l(),m(),null}}function Ur(t,e){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+e+")"}Ur.prototype.animate=function(t,e){return e=typeof e=="number"?{duration:e}:O({},e),e.pseudoElement=this._selector,this._scope.animate(t,e)},Ur.prototype.getAnimations=function(){for(var t=this._scope,e=this._selector,i=t.getAnimations({subtree:!0}),r=[],l=0;l<i.length;l++){var c=i[l].effect;c!==null&&c.target===t&&c.pseudoElement===e&&r.push(i[l])}return r},Ur.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function Q_(t){return{name:t,group:new Ur("group",t),imagePair:new Ur("image-pair",t),old:new Ur("old",t),new:new Ur("new",t)}}function ni(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}ni.prototype.addEventListener=function(t,e,i){var r=null,l=null;if(!(i!=null&&typeof i!="boolean"&&(r=i.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var c=this._eventListeners;if($_(c,t,e,i)===-1){var m=this,E=e;i!=null&&typeof i!="boolean"&&i.once===!0&&(E=function(P){m.removeEventListener(t,e,i),typeof e=="function"?e.call(this,P):e.handleEvent(P)}),r!==null&&(l=m.removeEventListener.bind(m,t,e,i),r.addEventListener("abort",l,{once:!0}),l=r.removeEventListener.bind(r,"abort",l)),r=bs(i),c.push({type:t,listener:e,optionsOrUseCapture:i,attachedListener:E,cleanup:l}),p(this._fragmentFiber.child,!1,uy,t,E,r)}this._eventListeners=c}};function uy(t,e,i,r){return y(t).addEventListener(e,i,r),!1}ni.prototype.removeEventListener=function(t,e,i){var r=this._eventListeners;if(r!==null&&(e=$_(r,t,e,i),e!==-1)){var l=r[e];i=l.attachedListener;var c=l.cleanup;l=bs(l.optionsOrUseCapture),p(this._fragmentFiber.child,!1,cy,t,i,l),r.splice(e,1),c!==null&&c()}};function cy(t,e,i,r){return y(t).removeEventListener(e,i,r),!1}function bs(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function J_(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function $_(t,e,i,r){if(t.length===0)return-1;r=J_(r);for(var l=0;l<t.length;l++){var c=t[l];if(c.type===e&&c.listener===i&&J_(c.optionsOrUseCapture)===r)return l}return-1}ni.prototype.dispatchEvent=function(t){var e=x(this._fragmentFiber);if(e===null)return!0;e=y(e);var i=this._eventListeners;if(i!==null&&0<i.length||!t.bubbles){var r=e.nodeType===9?e.createComment(""):document.createTextNode("");if(i)for(var l=0;l<i.length;l++){var c=i[l];r.addEventListener(c.type,c.attachedListener,bs(c.optionsOrUseCapture))}if(e.appendChild(r),t=r.dispatchEvent(t),i)for(l=0;l<i.length;l++)c=i[l],r.removeEventListener(c.type,c.attachedListener,bs(c.optionsOrUseCapture));return e.removeChild(r),t}return e.dispatchEvent(t)},ni.prototype.focus=function(t){p(this._fragmentFiber.child,!0,tv,t,void 0,void 0)};function tv(t,e){return t.tag===6?!1:(t=y(t),My(t,e))}ni.prototype.focusLast=function(t){var e=[];p(this._fragmentFiber.child,!0,wh,e,void 0,void 0);for(var i=e.length-1;0<=i&&!tv(e[i],t);i--);};function wh(t,e){return e.push(t),!1}ni.prototype.blur=function(){var t=x(this._fragmentFiber);t!==null&&(t=y(t),t=Go(t).activeElement,t!==null&&p(this._fragmentFiber.child,!1,fy,t,void 0,void 0))};function fy(t,e){return t.tag===6?!1:(t=y(t),t===e||t.contains(e)?(e.blur(),!0):!1)}ni.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),p(this._fragmentFiber.child,!1,hy,t,void 0,void 0)};function hy(t,e){return t.tag===6||(t=y(t),e.observe(t)),!1}ni.prototype.unobserveUsing=function(t){var e=this._observers;if(e!==null&&e.has(t)){e.delete(t),p(this._fragmentFiber.child,!1,dy,t,void 0,void 0);for(var i=e=0;i<Ei.length;i++){var r=Ei[i];r.fragmentInstance===this&&r.observer===t?t.unobserve(r.instance):Ei[e++]=r}Ei.length=e}};function dy(t,e){return t.tag===6||(t=y(t),e.unobserve(t)),!1}var Ei=[],Dh=!1;function py(t,e,i){Ei.push({fragmentInstance:t,observer:e,instance:i}),Dh||(Dh=!0,Ey(function(){Dh=!1;var r=Ei;Ei=[];for(var l=0;l<r.length;l++){var c=r[l];c.observer.unobserve(c.instance)}}))}ni.prototype.getClientRects=function(){var t=[];return p(this._fragmentFiber.child,!1,my,t,void 0,void 0),t};function my(t,e){if(t.tag===6){t=t.stateNode;var i=t.ownerDocument.createRange();i.selectNodeContents(t),e.push.apply(e,i.getClientRects())}else t=y(t),e.push.apply(e,t.getClientRects());return!1}ni.prototype.getRootNode=function(t){var e=x(this._fragmentFiber);return e===null?this:y(e).getRootNode(t)},ni.prototype.compareDocumentPosition=function(t){var e=x(this._fragmentFiber);if(e===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var i=[];p(this._fragmentFiber.child,!1,wh,i,void 0,void 0);var r=y(e);if(i.length===0){if(i=r,M(this._fragmentFiber)){t:{for(e=this._fragmentFiber.return;e!==null;){if(e.tag===4){e=e.stateNode.containerInfo;break t}if(e.tag===3||e.tag===5||e.tag===27)break;e=e.return}e=null}e!=null&&(i=e)}e=this._fragmentFiber;var l=r=i.compareDocumentPosition(t);return i===t?l=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(i=C(e)[1],i===null?l=Node.DOCUMENT_POSITION_PRECEDING:(t=y(i).compareDocumentPosition(t),l=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),l|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}e=y(i[0]),l=y(i[i.length-1]);var c=M(this._fragmentFiber)?e.parentElement:r;if(c==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=c.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_CONTAINED_BY,c=c.compareDocumentPosition(l)&Node.DOCUMENT_POSITION_CONTAINED_BY;var m=e.compareDocumentPosition(t),E=l.compareDocumentPosition(t),P=m&Node.DOCUMENT_POSITION_CONTAINED_BY||E&Node.DOCUMENT_POSITION_CONTAINED_BY;return E=r&&c&&m&Node.DOCUMENT_POSITION_FOLLOWING&&E&Node.DOCUMENT_POSITION_PRECEDING,e=r&&e===t||c&&l===t||P||E?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&e===t||!c&&l===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:m,e&Node.DOCUMENT_POSITION_DISCONNECTED||e&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||gy(e,this._fragmentFiber,i[0],i[i.length-1],t)?e:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function gy(t,e,i,r,l){var c=Wt(l);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(i=!!c)t:{for(;c!==null;){if(c.tag===7&&(c===e||c.alternate===e)){i=!0;break t}c=c.return}i=!1}return i}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(c===null)return c=l.ownerDocument,l===c||l===c.documentElement||l===c.body;t:{for(c=e,e=x(e);c!==null;){if(!(c.tag!==5&&c.tag!==3&&c.tag!==27||c!==e&&c.alternate!==e)){c=!0;break t}c=c.return}c=!1}return c}return t&Node.DOCUMENT_POSITION_PRECEDING?((e=!!c)&&!(e=c===i)&&(e=B(i,c,X),e===null?e=!1:(p(e,!0,N,c,i),c=S,S=null,e=c!==null)),e):t&Node.DOCUMENT_POSITION_FOLLOWING?((e=!!c)&&!(e=c===r)&&(e=B(r,c,X),e===null?e=!1:(p(e,!0,w,c,r),c=S,L=S=null,e=c!==null)),e):!1}function ev(t,e){var i=t.ownerDocument.createRange();i.selectNodeContents(t),t=i.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,e?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}ni.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(s(566));var e=[];p(this._fragmentFiber.child,!1,wh,e,void 0,void 0);var i=t!==!1;if(e.length===0){var r=C(this._fragmentFiber);if(r=i?r[1]||r[0]||x(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){t=y(r),ev(t,i);return}if(r=y(r),r.nodeType!==9){if(r.nodeType===11){i="host"in r?r.host:null,i!==null&&i.scrollIntoView(t);return}r.scrollIntoView(t)}}for(r=i?e.length-1:0;r!==(i?-1:e.length);){var l=e[r];l.tag===6?(l=y(l),ev(l,i)):y(l).scrollIntoView(t),r+=i?-1:1}};function _y(t,e){return t=y(t),nv(t,e),!1}function nv(t,e){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(e)}function iv(t,e){var i=e._eventListeners;if(i!==null)for(var r=0;r<i.length;r++){var l=i[r];t.addEventListener(l.type,l.attachedListener,bs(l.optionsOrUseCapture))}t.nodeType!==3&&(i=e._observers,i!==null&&i.forEach(function(c){for(var m=0,E=0;E<Ei.length;E++){var P=Ei[E];(P.fragmentInstance!==e||P.observer!==c||P.instance!==t)&&(Ei[m++]=P)}Ei.length=m,c.observe(t)}),nv(t,e))}function vy(t,e){var i=e._eventListeners;if(i!==null)for(var r=0;r<i.length;r++){var l=i[r];t.removeEventListener(l.type,l.attachedListener,bs(l.optionsOrUseCapture))}t.nodeType!==3&&(i=e._observers,i!==null&&i.forEach(function(c){typeof c.rootMargin=="string"?py(e,c,t):c.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(e))}function Uh(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var i=e;switch(e=e.nextSibling,i.nodeName){case"HTML":case"HEAD":case"BODY":Uh(i),Ce(i);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(i.rel.toLowerCase()==="stylesheet")continue}t.removeChild(i)}}function Sy(t,e,i,r){for(;t.nodeType===1;){var l=i;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[He])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(c=t.getAttribute("rel"),c==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(c!==l.rel||t.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||t.getAttribute("title")!==(l.title==null?null:l.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(c=t.getAttribute("src"),(c!==(l.src==null?null:l.src)||t.getAttribute("type")!==(l.type==null?null:l.type)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&c&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var c=l.name==null?null:""+l.name;if(l.type==="hidden"&&t.getAttribute("name")===c)return t}else return t;if(t=di(t.nextSibling),t===null)break}return null}function xy(t,e,i){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!i||(t=di(t.nextSibling),t===null))return null;return t}function av(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=di(t.nextSibling),t===null))return null;return t}function Nh(t){return t.data==="$?"||t.data==="$~"}function Lh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function yy(t,e){var i=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||i.readyState!=="loading")e();else{var r=function(){e(),i.removeEventListener("DOMContentLoaded",r)};i.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function di(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var Oh=null;function rv(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var i=t.data;if(i==="/$"||i==="/&"){if(e===0)return di(t.nextSibling);e--}else i!=="$"&&i!=="$!"&&i!=="$?"&&i!=="$~"&&i!=="&"||e++}t=t.nextSibling}return null}function sv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var i=t.data;if(i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"){if(e===0)return t;e--}else i!=="/$"&&i!=="/&"||e++}t=t.previousSibling}return null}function My(t,e){function i(){r=!0}if(t.ownerDocument.activeElement===t)return!0;var r=!1;try{t.ownerDocument.addEventListener("focus",i,!0),(t.focus||HTMLElement.prototype.focus).call(t,e)}finally{t.ownerDocument.removeEventListener("focus",i,!0)}return r}function Ey(t){Y_(function(){Y_(function(e){return t(e)})})}function ov(t,e,i){switch(e=Go(i),t){case"html":if(t=e.documentElement,!t)throw Error(s(452));return t;case"head":if(t=e.head,!t)throw Error(s(453));return t;case"body":if(t=e.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function lv(t,e,i){for(var r in i){var l=i[r];i.hasOwnProperty(r)&&l!=null&&Fe(t,e,r,null,Jx,l)}i.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===Ui&&(t.onclick=null),Ce(t)}function zh(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);Ce(t)}var pi=new Map,uv=new Set;function Vo(t){if(typeof t.getRootNode=="function"){var e=t.getRootNode();if(e.nodeType===9||e.nodeType===11)return e}return t.nodeType===9?t:t.ownerDocument}var ca=zt.d;zt.d={f:Ty,r:by,D:Ay,C:Ry,L:Cy,m:wy,X:Uy,S:Dy,M:Ny};function Ty(){var t=ca.f(),e=_u();return t||e}function by(t){var e=ze(t);e!==null&&e.tag===5&&e.type==="form"?fg(e):ca.r(t)}var As=typeof document>"u"?null:document;function cv(t,e,i){var r=As;if(r&&typeof e=="string"&&e){var l=si(e);l='link[rel="'+t+'"][href="'+l+'"]',typeof i=="string"&&(l+='[crossorigin="'+i+'"]'),uv.has(l)||(uv.add(l),t={rel:t,crossOrigin:i,href:e},r.querySelector(l)===null&&(e=r.createElement("link"),wn(e,"link",t),Ze(e),r.head.appendChild(e)))}}function Ay(t){ca.D(t),cv("dns-prefetch",t,null)}function Ry(t,e){ca.C(t,e),cv("preconnect",t,e)}function Cy(t,e,i){ca.L(t,e,i);var r=As;if(r&&t&&e){var l='link[rel="preload"][as="'+si(e)+'"]';e==="image"&&i&&i.imageSrcSet?(l+='[imagesrcset="'+si(i.imageSrcSet)+'"]',typeof i.imageSizes=="string"&&(l+='[imagesizes="'+si(i.imageSizes)+'"]')):l+='[href="'+si(t)+'"]';var c=l;switch(e){case"style":c=Rs(t);break;case"script":c=Cs(t)}if(!(pi.has(c)||(t=O({rel:"preload",href:e==="image"&&i&&i.imageSrcSet?void 0:t,as:e},i),pi.set(c,t),r.querySelector(l)!==null||e==="style"&&r.querySelector(Xo(c))||e==="script"&&r.querySelector(qo(c))))){var m=r.createElement("link");wn(m,"link",t),e==="style"&&(m[Oe]=!0,m.onload=m.onerror=function(){Nn(m)}),Ze(m),r.head.appendChild(m)}}}function wy(t,e){ca.m(t,e);var i=As;if(i&&t){var r=e&&typeof e.as=="string"?e.as:"script",l='link[rel="modulepreload"][as="'+si(r)+'"][href="'+si(t)+'"]',c=l;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=Cs(t)}if(!pi.has(c)&&(t=O({rel:"modulepreload",href:t},e),pi.set(c,t),i.querySelector(l)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(i.querySelector(qo(c)))return}r=i.createElement("link"),wn(r,"link",t),Ze(r),i.head.appendChild(r)}}}function Dy(t,e,i){ca.S(t,e,i);var r=As;if(r&&t){var l=sn(r).hoistableStyles,c=Rs(t);e=e||"default";var m=l.get(c);if(!m){var E={loading:0,preload:null};if(m=r.querySelector(Xo(c)))E.loading=5;else{t=O({rel:"stylesheet",href:t,"data-precedence":e},i),(i=pi.get(c))&&Ph(t,i);var P=m=r.createElement("link");Ze(P),wn(P,"link",t),P._p=new Promise(function(j,et){P.onload=j,P.onerror=et}),P.addEventListener("load",function(){E.loading|=1}),P.addEventListener("error",function(){E.loading|=2}),E.loading|=4,Tu(m,e,r)}m={type:"stylesheet",instance:m,count:1,state:E},l.set(c,m)}}}function Uy(t,e){ca.X(t,e);var i=As;if(i&&t){var r=sn(i).hoistableScripts,l=Cs(t),c=r.get(l);c||(c=i.querySelector(qo(l)),c||(t=O({src:t,async:!0},e),(e=pi.get(l))&&Bh(t,e),c=i.createElement("script"),Ze(c),wn(c,"link",t),i.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},r.set(l,c))}}function Ny(t,e){ca.M(t,e);var i=As;if(i&&t){var r=sn(i).hoistableScripts,l=Cs(t),c=r.get(l);c||(c=i.querySelector(qo(l)),c||(t=O({src:t,async:!0,type:"module"},e),(e=pi.get(l))&&Bh(t,e),c=i.createElement("script"),Ze(c),wn(c,"link",t),i.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},r.set(l,c))}}function fv(t,e,i,r){var l=(l=ie.current)?Vo(l):null;if(!l)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof i.precedence=="string"&&typeof i.href=="string"?(i=Rs(i.href),e=sn(l).hoistableStyles,r=e.get(i),r||(r={type:"style",instance:null,count:0,state:null},e.set(i,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(i.rel==="stylesheet"&&typeof i.href=="string"&&typeof i.precedence=="string"){t=Rs(i.href);var c=sn(l).hoistableStyles,m=c.get(t);if(m||(l=l.ownerDocument||l,m={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(t,m),(c=l.querySelector(Xo(t)))?c._p||(m.instance=c,m.state.loading=5):(c=pi.get(t),c||(c={rel:"preload",as:"style",href:i.href,crossOrigin:i.crossOrigin,integrity:i.integrity,media:i.media,hrefLang:i.hrefLang,referrerPolicy:i.referrerPolicy},pi.set(t,c)),Ly(l,t,c,m.state))),e&&r===null)throw Error(s(528,""));return m}if(e&&r!==null)throw Error(s(529,""));return null;case"script":return e=i.async,i=i.src,typeof i=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(i=Cs(i),e=sn(l).hoistableScripts,r=e.get(i),r||(r={type:"script",instance:null,count:0,state:null},e.set(i,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Rs(t){return'href="'+si(t)+'"'}function Xo(t){return'link[rel="stylesheet"]['+t+"]"}function hv(t){return O({},t,{"data-precedence":t.precedence,precedence:null})}function Ly(t,e,i,r){if(e=t.querySelector('link[rel="preload"][as="style"]['+e+"]")){if(e[Oe]!==!0){r.loading=1;return}}else e=t.createElement("link"),e[Oe]=!0,e.onload=e.onerror=Nn.bind(null,e),wn(e,"link",i),Ze(e),t.head.appendChild(e);r.preload=e,e.addEventListener("load",function(){return r.loading|=1}),e.addEventListener("error",function(){return r.loading|=2})}function Cs(t){return'[src="'+si(t)+'"]'}function qo(t){return"script[async]"+t}function dv(t,e,i){if(e.count++,e.instance===null)switch(e.type){case"style":var r=t.querySelector('style[data-href~="'+si(i.href)+'"]');if(r)return e.instance=r,Ze(r),r;var l=O({},i,{"data-href":i.href,"data-precedence":i.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),Ze(r),wn(r,"style",l),Tu(r,i.precedence,t),e.instance=r;case"stylesheet":l=Rs(i.href);var c=t.querySelector(Xo(l));if(c)return e.state.loading|=4,e.instance=c,Ze(c),c;r=hv(i),(l=pi.get(l))&&Ph(r,l),c=(t.ownerDocument||t).createElement("link"),Ze(c);var m=c;return m._p=new Promise(function(E,P){m.onload=E,m.onerror=P}),wn(c,"link",r),e.state.loading|=4,Tu(c,i.precedence,t),e.instance=c;case"script":return c=Cs(i.src),(l=t.querySelector(qo(c)))?(e.instance=l,Ze(l),l):(r=i,(l=pi.get(c))&&(r=O({},i),Bh(r,l)),t=t.ownerDocument||t,l=t.createElement("script"),Ze(l),wn(l,"link",r),t.head.appendChild(l),e.instance=l);case"void":return null;default:throw Error(s(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(r=e.instance,e.state.loading|=4,Tu(r,i.precedence,t));return e.instance}function Tu(t,e,i){for(var r=i.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=r.length?r[r.length-1]:null,c=l,m=0;m<r.length;m++){var E=r[m];if(E.dataset.precedence===e)c=E;else if(c!==l)break}c?c.parentNode.insertBefore(t,c.nextSibling):(e=i.nodeType===9?i.head:i,e.insertBefore(t,e.firstChild))}function Ph(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function Bh(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var bu=null;function pv(t,e,i){if(bu===null){var r=new Map,l=bu=new Map;l.set(i,r)}else l=bu,r=l.get(i),r||(r=new Map,l.set(i,r));if(r.has(t))return r;for(r.set(t,null),i=i.getElementsByTagName(t),l=0;l<i.length;l++){var c=i[l];if(!(c[He]||c[Nt]||t==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var m=c.getAttribute(e)||"";m=t+m;var E=r.get(m);E?E.push(c):r.set(m,[c])}}return r}function Ih(t,e,i){t=t.ownerDocument||t,t.head.insertBefore(i,e==="title"?t.querySelector("head > title"):null)}function Oy(t,e,i){if(i===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;return e.rel==="stylesheet"?(t=e.disabled,typeof e.precedence=="string"&&t==null):!0;case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function mv(t,e){return t==="img"&&e.src!=null&&e.src!==""&&e.onLoad==null&&e.loading!=="lazy"}function gv(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function _v(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function vv(t,e){typeof e.decode=="function"&&(t.imgCount++,e.complete||(t.imgBytes+=_v(e),t.suspenseyImages.push(e)),t=By.bind(t),e.decode().then(t,t))}function zy(t,e,i,r){if(i.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var l=Rs(r.href),c=e.querySelector(Xo(l));if(c){e=c._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=ko.bind(t),e.then(t,t)),i.state.loading|=4,i.instance=c,Ze(c);return}c=e.ownerDocument||e,r=hv(r),(l=pi.get(l))&&Ph(r,l),c=c.createElement("link"),Ze(c);var m=c;m._p=new Promise(function(E,P){m.onload=E,m.onerror=P}),wn(c,"link",r),i.instance=c}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(i,e),(e=i.state.preload)&&(i.state.loading&3)===0&&(t.count++,i=ko.bind(t),e.addEventListener("load",i),e.addEventListener("error",i))}}var Au=0;function Py(t,e){return t.stylesheets&&t.count===0&&Cu(t,t.stylesheets),0<t.count||0<t.imgCount?function(i){var r=setTimeout(function(){if(t.stylesheets&&Cu(t,t.stylesheets),t.unsuspend){var c=t.unsuspend;t.unsuspend=null,c()}},6e4+e);0<t.imgBytes&&Au===0&&(Au=62500*ty());var l=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Cu(t,t.stylesheets),t.unsuspend)){var c=t.unsuspend;t.unsuspend=null,c()}},(t.imgBytes>Au?50:800)+e);return t.unsuspend=i,function(){t.unsuspend=null,clearTimeout(r),clearTimeout(l)}}:null}function Sv(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)Cu(t,t.stylesheets);else if(t.unsuspend){var e=t.unsuspend;t.unsuspend=null,e()}}}function ko(){this.count--,Sv(this)}function By(){this.imgCount--,Sv(this)}var Ru=null;function Cu(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Ru=new Map,e.forEach(Iy,t),Ru=null,ko.call(t))}function Iy(t,e){if(!(e.state.loading&4)){var i=Ru.get(t);if(i)var r=i.get(null);else{i=new Map,Ru.set(t,i);for(var l=t.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<l.length;c++){var m=l[c];(m.nodeName==="LINK"||m.getAttribute("media")!=="not all")&&(i.set(m.dataset.precedence,m),r=m)}r&&i.set(null,r)}l=e.instance,m=l.getAttribute("data-precedence"),c=i.get(m)||r,c===r&&i.set(null,l),i.set(m,l),this.count++,r=ko.bind(this),l.addEventListener("load",r),l.addEventListener("error",r),c?c.parentNode.insertBefore(l,c.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(l,t.firstChild)),e.state.loading|=4}}var ws={$$typeof:ft,Provider:null,Consumer:null,_currentValue:ce,_currentValue2:ce,_threadCount:0};function Fy(t,e,i,r,l,c,m,E,P){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ro(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ro(0),this.hiddenUpdates=ro(null),this.identifierPrefix=r,this.onUncaughtError=l,this.onCaughtError=c,this.onRecoverableError=m,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=P,this.transitionTypes=null,this.incompleteTransitions=new Map}function xv(t,e,i,r,l,c,m,E,P,j,et,dt){return t=new Fy(t,e,i,m,P,j,et,dt,E),e=1,c===!0&&(e|=24),c=Gn(3,null,null,e),t.current=c,c.stateNode=t,e=Jc(),e.refCount++,t.pooledCache=e,e.refCount++,c.memoizedState={element:r,isDehydrated:i,cache:e},nf(c),t}function yv(t){return t?(t=es,t):es}function Mv(t,e,i,r,l,c){l=yv(l),r.context===null?r.context=l:r.pendingContext=l,r=Oa(e),r.payload={element:i},c=c===void 0?null:c,c!==null&&(r.callback=c),i=za(t,r,e),i!==null&&(kn(i,t,e),Mo(i,t,e))}function Ev(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var i=t.retryLane;t.retryLane=i!==0&&i<e?i:e}}function Fh(t,e){Ev(t,e),(t=t.alternate)&&Ev(t,e)}function Tv(t){if(t.tag===13||t.tag===31){var e=pr(t,67108864);e!==null&&kn(e,t,67108864),Fh(t,67108864)}}function bv(t){if(t.tag===13||t.tag===31){var e=ei();e=at(e);var i=pr(t,e);i!==null&&kn(i,t,e),Fh(t,e)}}var Ds=!0;function Hy(t,e,i,r){var l=At.T;At.T=null;var c=zt.p;try{zt.p=2,Hh(t,e,i,r)}finally{zt.p=c,At.T=l}}function Gy(t,e,i,r){var l=At.T;At.T=null;var c=zt.p;try{zt.p=8,Hh(t,e,i,r)}finally{zt.p=c,At.T=l}}function Hh(t,e,i,r){if(Ds){var l=Gh(r);if(l===null)yh(t,e,r,wu,i),Rv(t,r);else if(Xy(l,t,e,i,r))r.stopPropagation();else if(Rv(t,r),e&4&&-1<Vy.indexOf(t)){for(;l!==null;){var c=ze(l);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var m=Di(c.pendingLanes);if(m!==0){var E=c;for(E.pendingLanes|=2,E.entangledLanes|=2;m;){var P=1<<31-Un(m);E.entanglements[1]|=P,m&=~P}Gi(c),(Ne&6)===0&&(pu=V()+500,Io(0))}}break;case 31:case 13:E=pr(c,2),E!==null&&kn(E,c,2),_u(),Fh(c,2)}if(c=Gh(r),c===null&&yh(t,e,r,wu,i),c===l)break;l=c}l!==null&&r.stopPropagation()}else yh(t,e,r,null,i)}}function Gh(t){return t=bc(t),Vh(t)}var wu=null;function Vh(t){if(wu=null,t=Wt(t),t!==null){var e=f(t);if(e===null)t=null;else{var i=e.tag;if(i===13){if(t=h(e),t!==null)return t;t=null}else if(i===31){if(t=d(e),t!==null)return t;t=null}else if(i===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return wu=t,null}function Av(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Bt()){case xt:return 2;case Vt:return 8;case Mt:case gt:return 32;case qt:return 268435456;default:return 32}default:return 32}}var Xh=!1,Wa=null,ja=null,Za=null,Yo=new Map,Wo=new Map,Ka=[],Vy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Rv(t,e){switch(t){case"focusin":case"focusout":Wa=null;break;case"dragenter":case"dragleave":ja=null;break;case"mouseover":case"mouseout":Za=null;break;case"pointerover":case"pointerout":Yo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wo.delete(e.pointerId)}}function jo(t,e,i,r,l,c){return t===null||t.nativeEvent!==c?(t={blockedOn:e,domEventName:i,eventSystemFlags:r,nativeEvent:c,targetContainers:[l]},e!==null&&(e=ze(e),e!==null&&Tv(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,l!==null&&e.indexOf(l)===-1&&e.push(l),t)}function Xy(t,e,i,r,l){switch(e){case"focusin":return Wa=jo(Wa,t,e,i,r,l),!0;case"dragenter":return ja=jo(ja,t,e,i,r,l),!0;case"mouseover":return Za=jo(Za,t,e,i,r,l),!0;case"pointerover":var c=l.pointerId;return Yo.set(c,jo(Yo.get(c)||null,t,e,i,r,l)),!0;case"gotpointercapture":return c=l.pointerId,Wo.set(c,jo(Wo.get(c)||null,t,e,i,r,l)),!0}return!1}function Cv(t){var e=Wt(t.target);if(e!==null){var i=f(e);if(i!==null){if(e=i.tag,e===13){if(e=h(i),e!==null){t.blockedOn=e,bt(t.priority,function(){bv(i)});return}}else if(e===31){if(e=d(i),e!==null){t.blockedOn=e,bt(t.priority,function(){bv(i)});return}}else if(e===3&&i.stateNode.current.memoizedState.isDehydrated){t.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Du(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var i=Gh(t.nativeEvent);if(i===null){i=t.nativeEvent;var r=new i.constructor(i.type,i);Tc=r,i.target.dispatchEvent(r),Tc=null}else return e=ze(i),e!==null&&Tv(e),t.blockedOn=i,!1;e.shift()}return!0}function wv(t,e,i){Du(t)&&i.delete(e)}function qy(){Xh=!1,Wa!==null&&Du(Wa)&&(Wa=null),ja!==null&&Du(ja)&&(ja=null),Za!==null&&Du(Za)&&(Za=null),Yo.forEach(wv),Wo.forEach(wv)}function Uu(t,e){t.blockedOn===e&&(t.blockedOn=null,Xh||(Xh=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,qy)))}var Nu=null;function Dv(t){Nu!==t&&(Nu=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Nu===t&&(Nu=null);for(var e=0;e<t.length;e+=3){var i=t[e],r=t[e+1],l=t[e+2];if(typeof r!="function"){if(Vh(r||i)===null)continue;break}var c=ze(i);c!==null&&(t.splice(e,3),e-=3,Tf(c,{pending:!0,data:l,method:i.method,action:r},r,l))}}))}function Us(t){function e(P){return Uu(P,t)}Wa!==null&&Uu(Wa,t),ja!==null&&Uu(ja,t),Za!==null&&Uu(Za,t),Yo.forEach(e),Wo.forEach(e);for(var i=0;i<Ka.length;i++){var r=Ka[i];r.blockedOn===t&&(r.blockedOn=null)}for(;0<Ka.length&&(i=Ka[0],i.blockedOn===null);)Cv(i),i.blockedOn===null&&Ka.shift();if(i=(t.ownerDocument||t).$$reactFormReplay,i!=null)for(r=0;r<i.length;r+=3){var l=i[r],c=i[r+1],m=l[Dt]||null;if(typeof c=="function")m||Dv(i);else if(m){var E=null;if(c&&c.hasAttribute("formAction")){if(l=c,m=c[Dt]||null)E=m.formAction;else if(Vh(l)!==null)continue}else E=m.action;typeof E=="function"?i[r+1]=E:(i.splice(r,3),r-=3),Dv(i)}}}function Uv(){function t(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(m){return l=m})},focusReset:"manual",scroll:"manual"})}function e(){l!==null&&(l(),l=null),r||setTimeout(i,20)}function i(){if(!r&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,l=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(i,100),function(){r=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),l!==null&&(l(),l=null)}}}function qh(t){this._internalRoot=t}Lu.prototype.render=qh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(s(409));var i=e.current,r=ei();Mv(i,r,t,e,null,null)},Lu.prototype.unmount=qh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Mv(t.current,2,null,t,null,null),_u(),e[$t]=null}};function Lu(t){this._internalRoot=t}Lu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Q();t={blockedOn:null,target:t,priority:e};for(var i=0;i<Ka.length&&e!==0&&e<Ka[i].priority;i++);Ka.splice(i,0,t),i===0&&Cv(t)}};var Nv=n.version;if(Nv!=="19.3.1")throw Error(s(527,Nv,"19.3.1"));zt.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=_(e),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var ky={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:At,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ou=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ou.isDisabled&&Ou.supportsFiber)try{Te=Ou.inject(ky),je=Ou}catch{}}return Ko.createRoot=function(t,e){if(!u(t))throw Error(s(299));var i=!1,r="",l=yg,c=Mg,m=Eg;return e!=null&&(e.unstable_strictMode===!0&&(i=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onUncaughtError!==void 0&&(l=e.onUncaughtError),e.onCaughtError!==void 0&&(c=e.onCaughtError),e.onRecoverableError!==void 0&&(m=e.onRecoverableError)),e=xv(t,1,!1,null,null,i,r,null,l,c,m,Uv),t[$t]=e.current,xh(t),new qh(e)},Ko.hydrateRoot=function(t,e,i){if(!u(t))throw Error(s(299));var r=!1,l="",c=yg,m=Mg,E=Eg,P=null;return i!=null&&(i.unstable_strictMode===!0&&(r=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(c=i.onUncaughtError),i.onCaughtError!==void 0&&(m=i.onCaughtError),i.onRecoverableError!==void 0&&(E=i.onRecoverableError),i.formState!==void 0&&(P=i.formState)),e=xv(t,1,!0,e,i??null,r,l,P,c,m,E,Uv),e.context=yv(null),i=e.current,r=ei(),r=at(r),l=Oa(r),l.callback=null,za(i,l,r),i=r,e.current.lanes=i,fr(e,i),Gi(e),t[$t]=e.current,xh(t),new Lu(e)},Ko.version="19.3.1",Ko}var Vv;function eM(){if(Vv)return Wh.exports;Vv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(n){console.error(n)}}return o(),Wh.exports=tM(),Wh.exports}var nM=eM();const gp="178",iM=0,Xv=1,aM=2,I0=1,rM=2,ga=3,or=0,Wn=1,_a=2,rr=0,Ws=1,qv=2,kv=3,Yv=4,sM=5,Hr=100,oM=101,lM=102,uM=103,cM=104,fM=200,hM=201,dM=202,pM=203,Cd=204,wd=205,mM=206,gM=207,_M=208,vM=209,SM=210,xM=211,yM=212,MM=213,EM=214,Dd=0,Ud=1,Nd=2,Ks=3,Ld=4,Od=5,zd=6,Pd=7,F0=0,TM=1,bM=2,sr=0,AM=1,RM=2,CM=3,wM=4,DM=5,UM=6,NM=7,H0=300,Qs=301,Js=302,Bd=303,Id=304,pc=306,Fd=1e3,Vr=1001,Hd=1002,wi=1003,LM=1004,zu=1005,Xi=1006,Qh=1007,Xr=1008,ya=1009,G0=1010,V0=1011,il=1012,_p=1013,qr=1014,va=1015,ol=1016,vp=1017,Sp=1018,al=1020,X0=35902,q0=1021,k0=1022,Ci=1023,rl=1026,sl=1027,Y0=1028,xp=1029,W0=1030,yp=1031,Mp=1033,rc=33776,sc=33777,oc=33778,lc=33779,Gd=35840,Vd=35841,Xd=35842,qd=35843,kd=36196,Yd=37492,Wd=37496,jd=37808,Zd=37809,Kd=37810,Qd=37811,Jd=37812,$d=37813,tp=37814,ep=37815,np=37816,ip=37817,ap=37818,rp=37819,sp=37820,op=37821,uc=36492,lp=36494,up=36495,j0=36283,cp=36284,fp=36285,hp=36286,OM=3200,zM=3201,PM=0,BM=1,ar="",gi="srgb",$s="srgb-linear",fc="linear",Ve="srgb",Ns=7680,Wv=519,IM=512,FM=513,HM=514,Z0=515,GM=516,VM=517,XM=518,qM=519,jv=35044,Zv="300 es",Sa=2e3,hc=2001;class eo{addEventListener(n,a){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[n]===void 0&&(s[n]=[]),s[n].indexOf(a)===-1&&s[n].push(a)}hasEventListener(n,a){const s=this._listeners;return s===void 0?!1:s[n]!==void 0&&s[n].indexOf(a)!==-1}removeEventListener(n,a){const s=this._listeners;if(s===void 0)return;const u=s[n];if(u!==void 0){const f=u.indexOf(a);f!==-1&&u.splice(f,1)}}dispatchEvent(n){const a=this._listeners;if(a===void 0)return;const s=a[n.type];if(s!==void 0){n.target=this;const u=s.slice(0);for(let f=0,h=u.length;f<h;f++)u[f].call(this,n);n.target=null}}}const On=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Jh=Math.PI/180,dp=180/Math.PI;function ll(){const o=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(On[o&255]+On[o>>8&255]+On[o>>16&255]+On[o>>24&255]+"-"+On[n&255]+On[n>>8&255]+"-"+On[n>>16&15|64]+On[n>>24&255]+"-"+On[a&63|128]+On[a>>8&255]+"-"+On[a>>16&255]+On[a>>24&255]+On[s&255]+On[s>>8&255]+On[s>>16&255]+On[s>>24&255]).toLowerCase()}function be(o,n,a){return Math.max(n,Math.min(a,o))}function kM(o,n){return(o%n+n)%n}function $h(o,n,a){return(1-a)*o+a*n}function Qo(o,n){switch(n.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Yn(o,n){switch(n.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Le{constructor(n=0,a=0){Le.prototype.isVector2=!0,this.x=n,this.y=a}get width(){return this.x}set width(n){this.x=n}get height(){return this.y}set height(n){this.y=n}set(n,a){return this.x=n,this.y=a,this}setScalar(n){return this.x=n,this.y=n,this}setX(n){return this.x=n,this}setY(n){return this.y=n,this}setComponent(n,a){switch(n){case 0:this.x=a;break;case 1:this.y=a;break;default:throw new Error("index is out of range: "+n)}return this}getComponent(n){switch(n){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+n)}}clone(){return new this.constructor(this.x,this.y)}copy(n){return this.x=n.x,this.y=n.y,this}add(n){return this.x+=n.x,this.y+=n.y,this}addScalar(n){return this.x+=n,this.y+=n,this}addVectors(n,a){return this.x=n.x+a.x,this.y=n.y+a.y,this}addScaledVector(n,a){return this.x+=n.x*a,this.y+=n.y*a,this}sub(n){return this.x-=n.x,this.y-=n.y,this}subScalar(n){return this.x-=n,this.y-=n,this}subVectors(n,a){return this.x=n.x-a.x,this.y=n.y-a.y,this}multiply(n){return this.x*=n.x,this.y*=n.y,this}multiplyScalar(n){return this.x*=n,this.y*=n,this}divide(n){return this.x/=n.x,this.y/=n.y,this}divideScalar(n){return this.multiplyScalar(1/n)}applyMatrix3(n){const a=this.x,s=this.y,u=n.elements;return this.x=u[0]*a+u[3]*s+u[6],this.y=u[1]*a+u[4]*s+u[7],this}min(n){return this.x=Math.min(this.x,n.x),this.y=Math.min(this.y,n.y),this}max(n){return this.x=Math.max(this.x,n.x),this.y=Math.max(this.y,n.y),this}clamp(n,a){return this.x=be(this.x,n.x,a.x),this.y=be(this.y,n.y,a.y),this}clampScalar(n,a){return this.x=be(this.x,n,a),this.y=be(this.y,n,a),this}clampLength(n,a){const s=this.length();return this.divideScalar(s||1).multiplyScalar(be(s,n,a))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(n){return this.x*n.x+this.y*n.y}cross(n){return this.x*n.y-this.y*n.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(n){const a=Math.sqrt(this.lengthSq()*n.lengthSq());if(a===0)return Math.PI/2;const s=this.dot(n)/a;return Math.acos(be(s,-1,1))}distanceTo(n){return Math.sqrt(this.distanceToSquared(n))}distanceToSquared(n){const a=this.x-n.x,s=this.y-n.y;return a*a+s*s}manhattanDistanceTo(n){return Math.abs(this.x-n.x)+Math.abs(this.y-n.y)}setLength(n){return this.normalize().multiplyScalar(n)}lerp(n,a){return this.x+=(n.x-this.x)*a,this.y+=(n.y-this.y)*a,this}lerpVectors(n,a,s){return this.x=n.x+(a.x-n.x)*s,this.y=n.y+(a.y-n.y)*s,this}equals(n){return n.x===this.x&&n.y===this.y}fromArray(n,a=0){return this.x=n[a],this.y=n[a+1],this}toArray(n=[],a=0){return n[a]=this.x,n[a+1]=this.y,n}fromBufferAttribute(n,a){return this.x=n.getX(a),this.y=n.getY(a),this}rotateAround(n,a){const s=Math.cos(a),u=Math.sin(a),f=this.x-n.x,h=this.y-n.y;return this.x=f*s-h*u+n.x,this.y=f*u+h*s+n.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ul{constructor(n=0,a=0,s=0,u=1){this.isQuaternion=!0,this._x=n,this._y=a,this._z=s,this._w=u}static slerpFlat(n,a,s,u,f,h,d){let g=s[u+0],_=s[u+1],v=s[u+2],p=s[u+3];const x=f[h+0],M=f[h+1],C=f[h+2],U=f[h+3];if(d===0){n[a+0]=g,n[a+1]=_,n[a+2]=v,n[a+3]=p;return}if(d===1){n[a+0]=x,n[a+1]=M,n[a+2]=C,n[a+3]=U;return}if(p!==U||g!==x||_!==M||v!==C){let y=1-d;const S=g*x+_*M+v*C+p*U,L=S>=0?1:-1,N=1-S*S;if(N>Number.EPSILON){const X=Math.sqrt(N),B=Math.atan2(X,S*L);y=Math.sin(y*B)/X,d=Math.sin(d*B)/X}const w=d*L;if(g=g*y+x*w,_=_*y+M*w,v=v*y+C*w,p=p*y+U*w,y===1-d){const X=1/Math.sqrt(g*g+_*_+v*v+p*p);g*=X,_*=X,v*=X,p*=X}}n[a]=g,n[a+1]=_,n[a+2]=v,n[a+3]=p}static multiplyQuaternionsFlat(n,a,s,u,f,h){const d=s[u],g=s[u+1],_=s[u+2],v=s[u+3],p=f[h],x=f[h+1],M=f[h+2],C=f[h+3];return n[a]=d*C+v*p+g*M-_*x,n[a+1]=g*C+v*x+_*p-d*M,n[a+2]=_*C+v*M+d*x-g*p,n[a+3]=v*C-d*p-g*x-_*M,n}get x(){return this._x}set x(n){this._x=n,this._onChangeCallback()}get y(){return this._y}set y(n){this._y=n,this._onChangeCallback()}get z(){return this._z}set z(n){this._z=n,this._onChangeCallback()}get w(){return this._w}set w(n){this._w=n,this._onChangeCallback()}set(n,a,s,u){return this._x=n,this._y=a,this._z=s,this._w=u,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(n){return this._x=n.x,this._y=n.y,this._z=n.z,this._w=n.w,this._onChangeCallback(),this}setFromEuler(n,a=!0){const s=n._x,u=n._y,f=n._z,h=n._order,d=Math.cos,g=Math.sin,_=d(s/2),v=d(u/2),p=d(f/2),x=g(s/2),M=g(u/2),C=g(f/2);switch(h){case"XYZ":this._x=x*v*p+_*M*C,this._y=_*M*p-x*v*C,this._z=_*v*C+x*M*p,this._w=_*v*p-x*M*C;break;case"YXZ":this._x=x*v*p+_*M*C,this._y=_*M*p-x*v*C,this._z=_*v*C-x*M*p,this._w=_*v*p+x*M*C;break;case"ZXY":this._x=x*v*p-_*M*C,this._y=_*M*p+x*v*C,this._z=_*v*C+x*M*p,this._w=_*v*p-x*M*C;break;case"ZYX":this._x=x*v*p-_*M*C,this._y=_*M*p+x*v*C,this._z=_*v*C-x*M*p,this._w=_*v*p+x*M*C;break;case"YZX":this._x=x*v*p+_*M*C,this._y=_*M*p+x*v*C,this._z=_*v*C-x*M*p,this._w=_*v*p-x*M*C;break;case"XZY":this._x=x*v*p-_*M*C,this._y=_*M*p-x*v*C,this._z=_*v*C+x*M*p,this._w=_*v*p+x*M*C;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return a===!0&&this._onChangeCallback(),this}setFromAxisAngle(n,a){const s=a/2,u=Math.sin(s);return this._x=n.x*u,this._y=n.y*u,this._z=n.z*u,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(n){const a=n.elements,s=a[0],u=a[4],f=a[8],h=a[1],d=a[5],g=a[9],_=a[2],v=a[6],p=a[10],x=s+d+p;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(v-g)*M,this._y=(f-_)*M,this._z=(h-u)*M}else if(s>d&&s>p){const M=2*Math.sqrt(1+s-d-p);this._w=(v-g)/M,this._x=.25*M,this._y=(u+h)/M,this._z=(f+_)/M}else if(d>p){const M=2*Math.sqrt(1+d-s-p);this._w=(f-_)/M,this._x=(u+h)/M,this._y=.25*M,this._z=(g+v)/M}else{const M=2*Math.sqrt(1+p-s-d);this._w=(h-u)/M,this._x=(f+_)/M,this._y=(g+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(n,a){let s=n.dot(a)+1;return s<1e-8?(s=0,Math.abs(n.x)>Math.abs(n.z)?(this._x=-n.y,this._y=n.x,this._z=0,this._w=s):(this._x=0,this._y=-n.z,this._z=n.y,this._w=s)):(this._x=n.y*a.z-n.z*a.y,this._y=n.z*a.x-n.x*a.z,this._z=n.x*a.y-n.y*a.x,this._w=s),this.normalize()}angleTo(n){return 2*Math.acos(Math.abs(be(this.dot(n),-1,1)))}rotateTowards(n,a){const s=this.angleTo(n);if(s===0)return this;const u=Math.min(1,a/s);return this.slerp(n,u),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(n){return this._x*n._x+this._y*n._y+this._z*n._z+this._w*n._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let n=this.length();return n===0?(this._x=0,this._y=0,this._z=0,this._w=1):(n=1/n,this._x=this._x*n,this._y=this._y*n,this._z=this._z*n,this._w=this._w*n),this._onChangeCallback(),this}multiply(n){return this.multiplyQuaternions(this,n)}premultiply(n){return this.multiplyQuaternions(n,this)}multiplyQuaternions(n,a){const s=n._x,u=n._y,f=n._z,h=n._w,d=a._x,g=a._y,_=a._z,v=a._w;return this._x=s*v+h*d+u*_-f*g,this._y=u*v+h*g+f*d-s*_,this._z=f*v+h*_+s*g-u*d,this._w=h*v-s*d-u*g-f*_,this._onChangeCallback(),this}slerp(n,a){if(a===0)return this;if(a===1)return this.copy(n);const s=this._x,u=this._y,f=this._z,h=this._w;let d=h*n._w+s*n._x+u*n._y+f*n._z;if(d<0?(this._w=-n._w,this._x=-n._x,this._y=-n._y,this._z=-n._z,d=-d):this.copy(n),d>=1)return this._w=h,this._x=s,this._y=u,this._z=f,this;const g=1-d*d;if(g<=Number.EPSILON){const M=1-a;return this._w=M*h+a*this._w,this._x=M*s+a*this._x,this._y=M*u+a*this._y,this._z=M*f+a*this._z,this.normalize(),this}const _=Math.sqrt(g),v=Math.atan2(_,d),p=Math.sin((1-a)*v)/_,x=Math.sin(a*v)/_;return this._w=h*p+this._w*x,this._x=s*p+this._x*x,this._y=u*p+this._y*x,this._z=f*p+this._z*x,this._onChangeCallback(),this}slerpQuaternions(n,a,s){return this.copy(n).slerp(a,s)}random(){const n=2*Math.PI*Math.random(),a=2*Math.PI*Math.random(),s=Math.random(),u=Math.sqrt(1-s),f=Math.sqrt(s);return this.set(u*Math.sin(n),u*Math.cos(n),f*Math.sin(a),f*Math.cos(a))}equals(n){return n._x===this._x&&n._y===this._y&&n._z===this._z&&n._w===this._w}fromArray(n,a=0){return this._x=n[a],this._y=n[a+1],this._z=n[a+2],this._w=n[a+3],this._onChangeCallback(),this}toArray(n=[],a=0){return n[a]=this._x,n[a+1]=this._y,n[a+2]=this._z,n[a+3]=this._w,n}fromBufferAttribute(n,a){return this._x=n.getX(a),this._y=n.getY(a),this._z=n.getZ(a),this._w=n.getW(a),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(n){return this._onChangeCallback=n,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class it{constructor(n=0,a=0,s=0){it.prototype.isVector3=!0,this.x=n,this.y=a,this.z=s}set(n,a,s){return s===void 0&&(s=this.z),this.x=n,this.y=a,this.z=s,this}setScalar(n){return this.x=n,this.y=n,this.z=n,this}setX(n){return this.x=n,this}setY(n){return this.y=n,this}setZ(n){return this.z=n,this}setComponent(n,a){switch(n){case 0:this.x=a;break;case 1:this.y=a;break;case 2:this.z=a;break;default:throw new Error("index is out of range: "+n)}return this}getComponent(n){switch(n){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+n)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(n){return this.x=n.x,this.y=n.y,this.z=n.z,this}add(n){return this.x+=n.x,this.y+=n.y,this.z+=n.z,this}addScalar(n){return this.x+=n,this.y+=n,this.z+=n,this}addVectors(n,a){return this.x=n.x+a.x,this.y=n.y+a.y,this.z=n.z+a.z,this}addScaledVector(n,a){return this.x+=n.x*a,this.y+=n.y*a,this.z+=n.z*a,this}sub(n){return this.x-=n.x,this.y-=n.y,this.z-=n.z,this}subScalar(n){return this.x-=n,this.y-=n,this.z-=n,this}subVectors(n,a){return this.x=n.x-a.x,this.y=n.y-a.y,this.z=n.z-a.z,this}multiply(n){return this.x*=n.x,this.y*=n.y,this.z*=n.z,this}multiplyScalar(n){return this.x*=n,this.y*=n,this.z*=n,this}multiplyVectors(n,a){return this.x=n.x*a.x,this.y=n.y*a.y,this.z=n.z*a.z,this}applyEuler(n){return this.applyQuaternion(Kv.setFromEuler(n))}applyAxisAngle(n,a){return this.applyQuaternion(Kv.setFromAxisAngle(n,a))}applyMatrix3(n){const a=this.x,s=this.y,u=this.z,f=n.elements;return this.x=f[0]*a+f[3]*s+f[6]*u,this.y=f[1]*a+f[4]*s+f[7]*u,this.z=f[2]*a+f[5]*s+f[8]*u,this}applyNormalMatrix(n){return this.applyMatrix3(n).normalize()}applyMatrix4(n){const a=this.x,s=this.y,u=this.z,f=n.elements,h=1/(f[3]*a+f[7]*s+f[11]*u+f[15]);return this.x=(f[0]*a+f[4]*s+f[8]*u+f[12])*h,this.y=(f[1]*a+f[5]*s+f[9]*u+f[13])*h,this.z=(f[2]*a+f[6]*s+f[10]*u+f[14])*h,this}applyQuaternion(n){const a=this.x,s=this.y,u=this.z,f=n.x,h=n.y,d=n.z,g=n.w,_=2*(h*u-d*s),v=2*(d*a-f*u),p=2*(f*s-h*a);return this.x=a+g*_+h*p-d*v,this.y=s+g*v+d*_-f*p,this.z=u+g*p+f*v-h*_,this}project(n){return this.applyMatrix4(n.matrixWorldInverse).applyMatrix4(n.projectionMatrix)}unproject(n){return this.applyMatrix4(n.projectionMatrixInverse).applyMatrix4(n.matrixWorld)}transformDirection(n){const a=this.x,s=this.y,u=this.z,f=n.elements;return this.x=f[0]*a+f[4]*s+f[8]*u,this.y=f[1]*a+f[5]*s+f[9]*u,this.z=f[2]*a+f[6]*s+f[10]*u,this.normalize()}divide(n){return this.x/=n.x,this.y/=n.y,this.z/=n.z,this}divideScalar(n){return this.multiplyScalar(1/n)}min(n){return this.x=Math.min(this.x,n.x),this.y=Math.min(this.y,n.y),this.z=Math.min(this.z,n.z),this}max(n){return this.x=Math.max(this.x,n.x),this.y=Math.max(this.y,n.y),this.z=Math.max(this.z,n.z),this}clamp(n,a){return this.x=be(this.x,n.x,a.x),this.y=be(this.y,n.y,a.y),this.z=be(this.z,n.z,a.z),this}clampScalar(n,a){return this.x=be(this.x,n,a),this.y=be(this.y,n,a),this.z=be(this.z,n,a),this}clampLength(n,a){const s=this.length();return this.divideScalar(s||1).multiplyScalar(be(s,n,a))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(n){return this.x*n.x+this.y*n.y+this.z*n.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(n){return this.normalize().multiplyScalar(n)}lerp(n,a){return this.x+=(n.x-this.x)*a,this.y+=(n.y-this.y)*a,this.z+=(n.z-this.z)*a,this}lerpVectors(n,a,s){return this.x=n.x+(a.x-n.x)*s,this.y=n.y+(a.y-n.y)*s,this.z=n.z+(a.z-n.z)*s,this}cross(n){return this.crossVectors(this,n)}crossVectors(n,a){const s=n.x,u=n.y,f=n.z,h=a.x,d=a.y,g=a.z;return this.x=u*g-f*d,this.y=f*h-s*g,this.z=s*d-u*h,this}projectOnVector(n){const a=n.lengthSq();if(a===0)return this.set(0,0,0);const s=n.dot(this)/a;return this.copy(n).multiplyScalar(s)}projectOnPlane(n){return td.copy(this).projectOnVector(n),this.sub(td)}reflect(n){return this.sub(td.copy(n).multiplyScalar(2*this.dot(n)))}angleTo(n){const a=Math.sqrt(this.lengthSq()*n.lengthSq());if(a===0)return Math.PI/2;const s=this.dot(n)/a;return Math.acos(be(s,-1,1))}distanceTo(n){return Math.sqrt(this.distanceToSquared(n))}distanceToSquared(n){const a=this.x-n.x,s=this.y-n.y,u=this.z-n.z;return a*a+s*s+u*u}manhattanDistanceTo(n){return Math.abs(this.x-n.x)+Math.abs(this.y-n.y)+Math.abs(this.z-n.z)}setFromSpherical(n){return this.setFromSphericalCoords(n.radius,n.phi,n.theta)}setFromSphericalCoords(n,a,s){const u=Math.sin(a)*n;return this.x=u*Math.sin(s),this.y=Math.cos(a)*n,this.z=u*Math.cos(s),this}setFromCylindrical(n){return this.setFromCylindricalCoords(n.radius,n.theta,n.y)}setFromCylindricalCoords(n,a,s){return this.x=n*Math.sin(a),this.y=s,this.z=n*Math.cos(a),this}setFromMatrixPosition(n){const a=n.elements;return this.x=a[12],this.y=a[13],this.z=a[14],this}setFromMatrixScale(n){const a=this.setFromMatrixColumn(n,0).length(),s=this.setFromMatrixColumn(n,1).length(),u=this.setFromMatrixColumn(n,2).length();return this.x=a,this.y=s,this.z=u,this}setFromMatrixColumn(n,a){return this.fromArray(n.elements,a*4)}setFromMatrix3Column(n,a){return this.fromArray(n.elements,a*3)}setFromEuler(n){return this.x=n._x,this.y=n._y,this.z=n._z,this}setFromColor(n){return this.x=n.r,this.y=n.g,this.z=n.b,this}equals(n){return n.x===this.x&&n.y===this.y&&n.z===this.z}fromArray(n,a=0){return this.x=n[a],this.y=n[a+1],this.z=n[a+2],this}toArray(n=[],a=0){return n[a]=this.x,n[a+1]=this.y,n[a+2]=this.z,n}fromBufferAttribute(n,a){return this.x=n.getX(a),this.y=n.getY(a),this.z=n.getZ(a),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const n=Math.random()*Math.PI*2,a=Math.random()*2-1,s=Math.sqrt(1-a*a);return this.x=s*Math.cos(n),this.y=a,this.z=s*Math.sin(n),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const td=new it,Kv=new ul;class me{constructor(n,a,s,u,f,h,d,g,_){me.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],n!==void 0&&this.set(n,a,s,u,f,h,d,g,_)}set(n,a,s,u,f,h,d,g,_){const v=this.elements;return v[0]=n,v[1]=u,v[2]=d,v[3]=a,v[4]=f,v[5]=g,v[6]=s,v[7]=h,v[8]=_,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(n){const a=this.elements,s=n.elements;return a[0]=s[0],a[1]=s[1],a[2]=s[2],a[3]=s[3],a[4]=s[4],a[5]=s[5],a[6]=s[6],a[7]=s[7],a[8]=s[8],this}extractBasis(n,a,s){return n.setFromMatrix3Column(this,0),a.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(n){const a=n.elements;return this.set(a[0],a[4],a[8],a[1],a[5],a[9],a[2],a[6],a[10]),this}multiply(n){return this.multiplyMatrices(this,n)}premultiply(n){return this.multiplyMatrices(n,this)}multiplyMatrices(n,a){const s=n.elements,u=a.elements,f=this.elements,h=s[0],d=s[3],g=s[6],_=s[1],v=s[4],p=s[7],x=s[2],M=s[5],C=s[8],U=u[0],y=u[3],S=u[6],L=u[1],N=u[4],w=u[7],X=u[2],B=u[5],O=u[8];return f[0]=h*U+d*L+g*X,f[3]=h*y+d*N+g*B,f[6]=h*S+d*w+g*O,f[1]=_*U+v*L+p*X,f[4]=_*y+v*N+p*B,f[7]=_*S+v*w+p*O,f[2]=x*U+M*L+C*X,f[5]=x*y+M*N+C*B,f[8]=x*S+M*w+C*O,this}multiplyScalar(n){const a=this.elements;return a[0]*=n,a[3]*=n,a[6]*=n,a[1]*=n,a[4]*=n,a[7]*=n,a[2]*=n,a[5]*=n,a[8]*=n,this}determinant(){const n=this.elements,a=n[0],s=n[1],u=n[2],f=n[3],h=n[4],d=n[5],g=n[6],_=n[7],v=n[8];return a*h*v-a*d*_-s*f*v+s*d*g+u*f*_-u*h*g}invert(){const n=this.elements,a=n[0],s=n[1],u=n[2],f=n[3],h=n[4],d=n[5],g=n[6],_=n[7],v=n[8],p=v*h-d*_,x=d*g-v*f,M=_*f-h*g,C=a*p+s*x+u*M;if(C===0)return this.set(0,0,0,0,0,0,0,0,0);const U=1/C;return n[0]=p*U,n[1]=(u*_-v*s)*U,n[2]=(d*s-u*h)*U,n[3]=x*U,n[4]=(v*a-u*g)*U,n[5]=(u*f-d*a)*U,n[6]=M*U,n[7]=(s*g-_*a)*U,n[8]=(h*a-s*f)*U,this}transpose(){let n;const a=this.elements;return n=a[1],a[1]=a[3],a[3]=n,n=a[2],a[2]=a[6],a[6]=n,n=a[5],a[5]=a[7],a[7]=n,this}getNormalMatrix(n){return this.setFromMatrix4(n).invert().transpose()}transposeIntoArray(n){const a=this.elements;return n[0]=a[0],n[1]=a[3],n[2]=a[6],n[3]=a[1],n[4]=a[4],n[5]=a[7],n[6]=a[2],n[7]=a[5],n[8]=a[8],this}setUvTransform(n,a,s,u,f,h,d){const g=Math.cos(f),_=Math.sin(f);return this.set(s*g,s*_,-s*(g*h+_*d)+h+n,-u*_,u*g,-u*(-_*h+g*d)+d+a,0,0,1),this}scale(n,a){return this.premultiply(ed.makeScale(n,a)),this}rotate(n){return this.premultiply(ed.makeRotation(-n)),this}translate(n,a){return this.premultiply(ed.makeTranslation(n,a)),this}makeTranslation(n,a){return n.isVector2?this.set(1,0,n.x,0,1,n.y,0,0,1):this.set(1,0,n,0,1,a,0,0,1),this}makeRotation(n){const a=Math.cos(n),s=Math.sin(n);return this.set(a,-s,0,s,a,0,0,0,1),this}makeScale(n,a){return this.set(n,0,0,0,a,0,0,0,1),this}equals(n){const a=this.elements,s=n.elements;for(let u=0;u<9;u++)if(a[u]!==s[u])return!1;return!0}fromArray(n,a=0){for(let s=0;s<9;s++)this.elements[s]=n[s+a];return this}toArray(n=[],a=0){const s=this.elements;return n[a]=s[0],n[a+1]=s[1],n[a+2]=s[2],n[a+3]=s[3],n[a+4]=s[4],n[a+5]=s[5],n[a+6]=s[6],n[a+7]=s[7],n[a+8]=s[8],n}clone(){return new this.constructor().fromArray(this.elements)}}const ed=new me;function K0(o){for(let n=o.length-1;n>=0;--n)if(o[n]>=65535)return!0;return!1}function dc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function YM(){const o=dc("canvas");return o.style.display="block",o}const Qv={};function js(o){o in Qv||(Qv[o]=!0,console.warn(o))}function WM(o,n,a){return new Promise(function(s,u){function f(){switch(o.clientWaitSync(n,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:u();break;case o.TIMEOUT_EXPIRED:setTimeout(f,a);break;default:s()}}setTimeout(f,a)})}function jM(o){const n=o.elements;n[2]=.5*n[2]+.5*n[3],n[6]=.5*n[6]+.5*n[7],n[10]=.5*n[10]+.5*n[11],n[14]=.5*n[14]+.5*n[15]}function ZM(o){const n=o.elements;n[11]===-1?(n[10]=-n[10]-1,n[14]=-n[14]):(n[10]=-n[10],n[14]=-n[14]+1)}const Jv=new me().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$v=new me().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function KM(){const o={enabled:!0,workingColorSpace:$s,spaces:{},convert:function(u,f,h){return this.enabled===!1||f===h||!f||!h||(this.spaces[f].transfer===Ve&&(u.r=xa(u.r),u.g=xa(u.g),u.b=xa(u.b)),this.spaces[f].primaries!==this.spaces[h].primaries&&(u.applyMatrix3(this.spaces[f].toXYZ),u.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Ve&&(u.r=Zs(u.r),u.g=Zs(u.g),u.b=Zs(u.b))),u},workingToColorSpace:function(u,f){return this.convert(u,this.workingColorSpace,f)},colorSpaceToWorking:function(u,f){return this.convert(u,f,this.workingColorSpace)},getPrimaries:function(u){return this.spaces[u].primaries},getTransfer:function(u){return u===ar?fc:this.spaces[u].transfer},getLuminanceCoefficients:function(u,f=this.workingColorSpace){return u.fromArray(this.spaces[f].luminanceCoefficients)},define:function(u){Object.assign(this.spaces,u)},_getMatrix:function(u,f,h){return u.copy(this.spaces[f].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(u){return this.spaces[u].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(u=this.workingColorSpace){return this.spaces[u].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(u,f){return js("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(u,f)},toWorkingColorSpace:function(u,f){return js("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(u,f)}},n=[.64,.33,.3,.6,.15,.06],a=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[$s]:{primaries:n,whitePoint:s,transfer:fc,toXYZ:Jv,fromXYZ:$v,luminanceCoefficients:a,workingColorSpaceConfig:{unpackColorSpace:gi},outputColorSpaceConfig:{drawingBufferColorSpace:gi}},[gi]:{primaries:n,whitePoint:s,transfer:Ve,toXYZ:Jv,fromXYZ:$v,luminanceCoefficients:a,outputColorSpaceConfig:{drawingBufferColorSpace:gi}}}),o}const De=KM();function xa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Zs(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Ls;class QM{static getDataURL(n,a="image/png"){if(/^data:/i.test(n.src)||typeof HTMLCanvasElement>"u")return n.src;let s;if(n instanceof HTMLCanvasElement)s=n;else{Ls===void 0&&(Ls=dc("canvas")),Ls.width=n.width,Ls.height=n.height;const u=Ls.getContext("2d");n instanceof ImageData?u.putImageData(n,0,0):u.drawImage(n,0,0,n.width,n.height),s=Ls}return s.toDataURL(a)}static sRGBToLinear(n){if(typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap){const a=dc("canvas");a.width=n.width,a.height=n.height;const s=a.getContext("2d");s.drawImage(n,0,0,n.width,n.height);const u=s.getImageData(0,0,n.width,n.height),f=u.data;for(let h=0;h<f.length;h++)f[h]=xa(f[h]/255)*255;return s.putImageData(u,0,0),a}else if(n.data){const a=n.data.slice(0);for(let s=0;s<a.length;s++)a instanceof Uint8Array||a instanceof Uint8ClampedArray?a[s]=Math.floor(xa(a[s]/255)*255):a[s]=xa(a[s]);return{data:a,width:n.width,height:n.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),n}}let JM=0;class Ep{constructor(n=null){this.isSource=!0,Object.defineProperty(this,"id",{value:JM++}),this.uuid=ll(),this.data=n,this.dataReady=!0,this.version=0}getSize(n){const a=this.data;return a instanceof HTMLVideoElement?n.set(a.videoWidth,a.videoHeight):a!==null?n.set(a.width,a.height,a.depth||0):n.set(0,0,0),n}set needsUpdate(n){n===!0&&this.version++}toJSON(n){const a=n===void 0||typeof n=="string";if(!a&&n.images[this.uuid]!==void 0)return n.images[this.uuid];const s={uuid:this.uuid,url:""},u=this.data;if(u!==null){let f;if(Array.isArray(u)){f=[];for(let h=0,d=u.length;h<d;h++)u[h].isDataTexture?f.push(nd(u[h].image)):f.push(nd(u[h]))}else f=nd(u);s.url=f}return a||(n.images[this.uuid]=s),s}}function nd(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?QM.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let $M=0;const id=new it;class jn extends eo{constructor(n=jn.DEFAULT_IMAGE,a=jn.DEFAULT_MAPPING,s=Vr,u=Vr,f=Xi,h=Xr,d=Ci,g=ya,_=jn.DEFAULT_ANISOTROPY,v=ar){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$M++}),this.uuid=ll(),this.name="",this.source=new Ep(n),this.mipmaps=[],this.mapping=a,this.channel=0,this.wrapS=s,this.wrapT=u,this.magFilter=f,this.minFilter=h,this.anisotropy=_,this.format=d,this.internalFormat=null,this.type=g,this.offset=new Le(0,0),this.repeat=new Le(1,1),this.center=new Le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new me,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(n&&n.depth&&n.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(id).x}get height(){return this.source.getSize(id).y}get depth(){return this.source.getSize(id).z}get image(){return this.source.data}set image(n=null){this.source.data=n}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(n,a){this.updateRanges.push({start:n,count:a})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(n){return this.name=n.name,this.source=n.source,this.mipmaps=n.mipmaps.slice(0),this.mapping=n.mapping,this.channel=n.channel,this.wrapS=n.wrapS,this.wrapT=n.wrapT,this.magFilter=n.magFilter,this.minFilter=n.minFilter,this.anisotropy=n.anisotropy,this.format=n.format,this.internalFormat=n.internalFormat,this.type=n.type,this.offset.copy(n.offset),this.repeat.copy(n.repeat),this.center.copy(n.center),this.rotation=n.rotation,this.matrixAutoUpdate=n.matrixAutoUpdate,this.matrix.copy(n.matrix),this.generateMipmaps=n.generateMipmaps,this.premultiplyAlpha=n.premultiplyAlpha,this.flipY=n.flipY,this.unpackAlignment=n.unpackAlignment,this.colorSpace=n.colorSpace,this.renderTarget=n.renderTarget,this.isRenderTargetTexture=n.isRenderTargetTexture,this.isArrayTexture=n.isArrayTexture,this.userData=JSON.parse(JSON.stringify(n.userData)),this.needsUpdate=!0,this}setValues(n){for(const a in n){const s=n[a];if(s===void 0){console.warn(`THREE.Texture.setValues(): parameter '${a}' has value of undefined.`);continue}const u=this[a];if(u===void 0){console.warn(`THREE.Texture.setValues(): property '${a}' does not exist.`);continue}u&&s&&u.isVector2&&s.isVector2||u&&s&&u.isVector3&&s.isVector3||u&&s&&u.isMatrix3&&s.isMatrix3?u.copy(s):this[a]=s}}toJSON(n){const a=n===void 0||typeof n=="string";if(!a&&n.textures[this.uuid]!==void 0)return n.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(n).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),a||(n.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(n){if(this.mapping!==H0)return n;if(n.applyMatrix3(this.matrix),n.x<0||n.x>1)switch(this.wrapS){case Fd:n.x=n.x-Math.floor(n.x);break;case Vr:n.x=n.x<0?0:1;break;case Hd:Math.abs(Math.floor(n.x)%2)===1?n.x=Math.ceil(n.x)-n.x:n.x=n.x-Math.floor(n.x);break}if(n.y<0||n.y>1)switch(this.wrapT){case Fd:n.y=n.y-Math.floor(n.y);break;case Vr:n.y=n.y<0?0:1;break;case Hd:Math.abs(Math.floor(n.y)%2)===1?n.y=Math.ceil(n.y)-n.y:n.y=n.y-Math.floor(n.y);break}return this.flipY&&(n.y=1-n.y),n}set needsUpdate(n){n===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(n){n===!0&&this.pmremVersion++}}jn.DEFAULT_IMAGE=null;jn.DEFAULT_MAPPING=H0;jn.DEFAULT_ANISOTROPY=1;class rn{constructor(n=0,a=0,s=0,u=1){rn.prototype.isVector4=!0,this.x=n,this.y=a,this.z=s,this.w=u}get width(){return this.z}set width(n){this.z=n}get height(){return this.w}set height(n){this.w=n}set(n,a,s,u){return this.x=n,this.y=a,this.z=s,this.w=u,this}setScalar(n){return this.x=n,this.y=n,this.z=n,this.w=n,this}setX(n){return this.x=n,this}setY(n){return this.y=n,this}setZ(n){return this.z=n,this}setW(n){return this.w=n,this}setComponent(n,a){switch(n){case 0:this.x=a;break;case 1:this.y=a;break;case 2:this.z=a;break;case 3:this.w=a;break;default:throw new Error("index is out of range: "+n)}return this}getComponent(n){switch(n){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+n)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(n){return this.x=n.x,this.y=n.y,this.z=n.z,this.w=n.w!==void 0?n.w:1,this}add(n){return this.x+=n.x,this.y+=n.y,this.z+=n.z,this.w+=n.w,this}addScalar(n){return this.x+=n,this.y+=n,this.z+=n,this.w+=n,this}addVectors(n,a){return this.x=n.x+a.x,this.y=n.y+a.y,this.z=n.z+a.z,this.w=n.w+a.w,this}addScaledVector(n,a){return this.x+=n.x*a,this.y+=n.y*a,this.z+=n.z*a,this.w+=n.w*a,this}sub(n){return this.x-=n.x,this.y-=n.y,this.z-=n.z,this.w-=n.w,this}subScalar(n){return this.x-=n,this.y-=n,this.z-=n,this.w-=n,this}subVectors(n,a){return this.x=n.x-a.x,this.y=n.y-a.y,this.z=n.z-a.z,this.w=n.w-a.w,this}multiply(n){return this.x*=n.x,this.y*=n.y,this.z*=n.z,this.w*=n.w,this}multiplyScalar(n){return this.x*=n,this.y*=n,this.z*=n,this.w*=n,this}applyMatrix4(n){const a=this.x,s=this.y,u=this.z,f=this.w,h=n.elements;return this.x=h[0]*a+h[4]*s+h[8]*u+h[12]*f,this.y=h[1]*a+h[5]*s+h[9]*u+h[13]*f,this.z=h[2]*a+h[6]*s+h[10]*u+h[14]*f,this.w=h[3]*a+h[7]*s+h[11]*u+h[15]*f,this}divide(n){return this.x/=n.x,this.y/=n.y,this.z/=n.z,this.w/=n.w,this}divideScalar(n){return this.multiplyScalar(1/n)}setAxisAngleFromQuaternion(n){this.w=2*Math.acos(n.w);const a=Math.sqrt(1-n.w*n.w);return a<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=n.x/a,this.y=n.y/a,this.z=n.z/a),this}setAxisAngleFromRotationMatrix(n){let a,s,u,f;const g=n.elements,_=g[0],v=g[4],p=g[8],x=g[1],M=g[5],C=g[9],U=g[2],y=g[6],S=g[10];if(Math.abs(v-x)<.01&&Math.abs(p-U)<.01&&Math.abs(C-y)<.01){if(Math.abs(v+x)<.1&&Math.abs(p+U)<.1&&Math.abs(C+y)<.1&&Math.abs(_+M+S-3)<.1)return this.set(1,0,0,0),this;a=Math.PI;const N=(_+1)/2,w=(M+1)/2,X=(S+1)/2,B=(v+x)/4,O=(p+U)/4,I=(C+y)/4;return N>w&&N>X?N<.01?(s=0,u=.707106781,f=.707106781):(s=Math.sqrt(N),u=B/s,f=O/s):w>X?w<.01?(s=.707106781,u=0,f=.707106781):(u=Math.sqrt(w),s=B/u,f=I/u):X<.01?(s=.707106781,u=.707106781,f=0):(f=Math.sqrt(X),s=O/f,u=I/f),this.set(s,u,f,a),this}let L=Math.sqrt((y-C)*(y-C)+(p-U)*(p-U)+(x-v)*(x-v));return Math.abs(L)<.001&&(L=1),this.x=(y-C)/L,this.y=(p-U)/L,this.z=(x-v)/L,this.w=Math.acos((_+M+S-1)/2),this}setFromMatrixPosition(n){const a=n.elements;return this.x=a[12],this.y=a[13],this.z=a[14],this.w=a[15],this}min(n){return this.x=Math.min(this.x,n.x),this.y=Math.min(this.y,n.y),this.z=Math.min(this.z,n.z),this.w=Math.min(this.w,n.w),this}max(n){return this.x=Math.max(this.x,n.x),this.y=Math.max(this.y,n.y),this.z=Math.max(this.z,n.z),this.w=Math.max(this.w,n.w),this}clamp(n,a){return this.x=be(this.x,n.x,a.x),this.y=be(this.y,n.y,a.y),this.z=be(this.z,n.z,a.z),this.w=be(this.w,n.w,a.w),this}clampScalar(n,a){return this.x=be(this.x,n,a),this.y=be(this.y,n,a),this.z=be(this.z,n,a),this.w=be(this.w,n,a),this}clampLength(n,a){const s=this.length();return this.divideScalar(s||1).multiplyScalar(be(s,n,a))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(n){return this.x*n.x+this.y*n.y+this.z*n.z+this.w*n.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(n){return this.normalize().multiplyScalar(n)}lerp(n,a){return this.x+=(n.x-this.x)*a,this.y+=(n.y-this.y)*a,this.z+=(n.z-this.z)*a,this.w+=(n.w-this.w)*a,this}lerpVectors(n,a,s){return this.x=n.x+(a.x-n.x)*s,this.y=n.y+(a.y-n.y)*s,this.z=n.z+(a.z-n.z)*s,this.w=n.w+(a.w-n.w)*s,this}equals(n){return n.x===this.x&&n.y===this.y&&n.z===this.z&&n.w===this.w}fromArray(n,a=0){return this.x=n[a],this.y=n[a+1],this.z=n[a+2],this.w=n[a+3],this}toArray(n=[],a=0){return n[a]=this.x,n[a+1]=this.y,n[a+2]=this.z,n[a+3]=this.w,n}fromBufferAttribute(n,a){return this.x=n.getX(a),this.y=n.getY(a),this.z=n.getZ(a),this.w=n.getW(a),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class tE extends eo{constructor(n=1,a=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=n,this.height=a,this.depth=s.depth,this.scissor=new rn(0,0,n,a),this.scissorTest=!1,this.viewport=new rn(0,0,n,a);const u={width:n,height:a,depth:s.depth},f=new jn(u);this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=f.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(n={}){const a={minFilter:Xi,generateMipmaps:!1,flipY:!1,internalFormat:null};n.mapping!==void 0&&(a.mapping=n.mapping),n.wrapS!==void 0&&(a.wrapS=n.wrapS),n.wrapT!==void 0&&(a.wrapT=n.wrapT),n.wrapR!==void 0&&(a.wrapR=n.wrapR),n.magFilter!==void 0&&(a.magFilter=n.magFilter),n.minFilter!==void 0&&(a.minFilter=n.minFilter),n.format!==void 0&&(a.format=n.format),n.type!==void 0&&(a.type=n.type),n.anisotropy!==void 0&&(a.anisotropy=n.anisotropy),n.colorSpace!==void 0&&(a.colorSpace=n.colorSpace),n.flipY!==void 0&&(a.flipY=n.flipY),n.generateMipmaps!==void 0&&(a.generateMipmaps=n.generateMipmaps),n.internalFormat!==void 0&&(a.internalFormat=n.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(a)}get texture(){return this.textures[0]}set texture(n){this.textures[0]=n}set depthTexture(n){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),n!==null&&(n.renderTarget=this),this._depthTexture=n}get depthTexture(){return this._depthTexture}setSize(n,a,s=1){if(this.width!==n||this.height!==a||this.depth!==s){this.width=n,this.height=a,this.depth=s;for(let u=0,f=this.textures.length;u<f;u++)this.textures[u].image.width=n,this.textures[u].image.height=a,this.textures[u].image.depth=s,this.textures[u].isArrayTexture=this.textures[u].image.depth>1;this.dispose()}this.viewport.set(0,0,n,a),this.scissor.set(0,0,n,a)}clone(){return new this.constructor().copy(this)}copy(n){this.width=n.width,this.height=n.height,this.depth=n.depth,this.scissor.copy(n.scissor),this.scissorTest=n.scissorTest,this.viewport.copy(n.viewport),this.textures.length=0;for(let a=0,s=n.textures.length;a<s;a++){this.textures[a]=n.textures[a].clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;const u=Object.assign({},n.textures[a].image);this.textures[a].source=new Ep(u)}return this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,n.depthTexture!==null&&(this.depthTexture=n.depthTexture.clone()),this.samples=n.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class kr extends tE{constructor(n=1,a=1,s={}){super(n,a,s),this.isWebGLRenderTarget=!0}}class Q0 extends jn{constructor(n=null,a=1,s=1,u=1){super(null),this.isDataArrayTexture=!0,this.image={data:n,width:a,height:s,depth:u},this.magFilter=wi,this.minFilter=wi,this.wrapR=Vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(n){this.layerUpdates.add(n)}clearLayerUpdates(){this.layerUpdates.clear()}}class eE extends jn{constructor(n=null,a=1,s=1,u=1){super(null),this.isData3DTexture=!0,this.image={data:n,width:a,height:s,depth:u},this.magFilter=wi,this.minFilter=wi,this.wrapR=Vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class cl{constructor(n=new it(1/0,1/0,1/0),a=new it(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=n,this.max=a}set(n,a){return this.min.copy(n),this.max.copy(a),this}setFromArray(n){this.makeEmpty();for(let a=0,s=n.length;a<s;a+=3)this.expandByPoint(Ti.fromArray(n,a));return this}setFromBufferAttribute(n){this.makeEmpty();for(let a=0,s=n.count;a<s;a++)this.expandByPoint(Ti.fromBufferAttribute(n,a));return this}setFromPoints(n){this.makeEmpty();for(let a=0,s=n.length;a<s;a++)this.expandByPoint(n[a]);return this}setFromCenterAndSize(n,a){const s=Ti.copy(a).multiplyScalar(.5);return this.min.copy(n).sub(s),this.max.copy(n).add(s),this}setFromObject(n,a=!1){return this.makeEmpty(),this.expandByObject(n,a)}clone(){return new this.constructor().copy(this)}copy(n){return this.min.copy(n.min),this.max.copy(n.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(n){return this.isEmpty()?n.set(0,0,0):n.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(n){return this.isEmpty()?n.set(0,0,0):n.subVectors(this.max,this.min)}expandByPoint(n){return this.min.min(n),this.max.max(n),this}expandByVector(n){return this.min.sub(n),this.max.add(n),this}expandByScalar(n){return this.min.addScalar(-n),this.max.addScalar(n),this}expandByObject(n,a=!1){n.updateWorldMatrix(!1,!1);const s=n.geometry;if(s!==void 0){const f=s.getAttribute("position");if(a===!0&&f!==void 0&&n.isInstancedMesh!==!0)for(let h=0,d=f.count;h<d;h++)n.isMesh===!0?n.getVertexPosition(h,Ti):Ti.fromBufferAttribute(f,h),Ti.applyMatrix4(n.matrixWorld),this.expandByPoint(Ti);else n.boundingBox!==void 0?(n.boundingBox===null&&n.computeBoundingBox(),Pu.copy(n.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Pu.copy(s.boundingBox)),Pu.applyMatrix4(n.matrixWorld),this.union(Pu)}const u=n.children;for(let f=0,h=u.length;f<h;f++)this.expandByObject(u[f],a);return this}containsPoint(n){return n.x>=this.min.x&&n.x<=this.max.x&&n.y>=this.min.y&&n.y<=this.max.y&&n.z>=this.min.z&&n.z<=this.max.z}containsBox(n){return this.min.x<=n.min.x&&n.max.x<=this.max.x&&this.min.y<=n.min.y&&n.max.y<=this.max.y&&this.min.z<=n.min.z&&n.max.z<=this.max.z}getParameter(n,a){return a.set((n.x-this.min.x)/(this.max.x-this.min.x),(n.y-this.min.y)/(this.max.y-this.min.y),(n.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(n){return n.max.x>=this.min.x&&n.min.x<=this.max.x&&n.max.y>=this.min.y&&n.min.y<=this.max.y&&n.max.z>=this.min.z&&n.min.z<=this.max.z}intersectsSphere(n){return this.clampPoint(n.center,Ti),Ti.distanceToSquared(n.center)<=n.radius*n.radius}intersectsPlane(n){let a,s;return n.normal.x>0?(a=n.normal.x*this.min.x,s=n.normal.x*this.max.x):(a=n.normal.x*this.max.x,s=n.normal.x*this.min.x),n.normal.y>0?(a+=n.normal.y*this.min.y,s+=n.normal.y*this.max.y):(a+=n.normal.y*this.max.y,s+=n.normal.y*this.min.y),n.normal.z>0?(a+=n.normal.z*this.min.z,s+=n.normal.z*this.max.z):(a+=n.normal.z*this.max.z,s+=n.normal.z*this.min.z),a<=-n.constant&&s>=-n.constant}intersectsTriangle(n){if(this.isEmpty())return!1;this.getCenter(Jo),Bu.subVectors(this.max,Jo),Os.subVectors(n.a,Jo),zs.subVectors(n.b,Jo),Ps.subVectors(n.c,Jo),Ja.subVectors(zs,Os),$a.subVectors(Ps,zs),Nr.subVectors(Os,Ps);let a=[0,-Ja.z,Ja.y,0,-$a.z,$a.y,0,-Nr.z,Nr.y,Ja.z,0,-Ja.x,$a.z,0,-$a.x,Nr.z,0,-Nr.x,-Ja.y,Ja.x,0,-$a.y,$a.x,0,-Nr.y,Nr.x,0];return!ad(a,Os,zs,Ps,Bu)||(a=[1,0,0,0,1,0,0,0,1],!ad(a,Os,zs,Ps,Bu))?!1:(Iu.crossVectors(Ja,$a),a=[Iu.x,Iu.y,Iu.z],ad(a,Os,zs,Ps,Bu))}clampPoint(n,a){return a.copy(n).clamp(this.min,this.max)}distanceToPoint(n){return this.clampPoint(n,Ti).distanceTo(n)}getBoundingSphere(n){return this.isEmpty()?n.makeEmpty():(this.getCenter(n.center),n.radius=this.getSize(Ti).length()*.5),n}intersect(n){return this.min.max(n.min),this.max.min(n.max),this.isEmpty()&&this.makeEmpty(),this}union(n){return this.min.min(n.min),this.max.max(n.max),this}applyMatrix4(n){return this.isEmpty()?this:(fa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(n),fa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(n),fa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(n),fa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(n),fa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(n),fa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(n),fa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(n),fa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(n),this.setFromPoints(fa),this)}translate(n){return this.min.add(n),this.max.add(n),this}equals(n){return n.min.equals(this.min)&&n.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(n){return this.min.fromArray(n.min),this.max.fromArray(n.max),this}}const fa=[new it,new it,new it,new it,new it,new it,new it,new it],Ti=new it,Pu=new cl,Os=new it,zs=new it,Ps=new it,Ja=new it,$a=new it,Nr=new it,Jo=new it,Bu=new it,Iu=new it,Lr=new it;function ad(o,n,a,s,u){for(let f=0,h=o.length-3;f<=h;f+=3){Lr.fromArray(o,f);const d=u.x*Math.abs(Lr.x)+u.y*Math.abs(Lr.y)+u.z*Math.abs(Lr.z),g=n.dot(Lr),_=a.dot(Lr),v=s.dot(Lr);if(Math.max(-Math.max(g,_,v),Math.min(g,_,v))>d)return!1}return!0}const nE=new cl,$o=new it,rd=new it;class Tp{constructor(n=new it,a=-1){this.isSphere=!0,this.center=n,this.radius=a}set(n,a){return this.center.copy(n),this.radius=a,this}setFromPoints(n,a){const s=this.center;a!==void 0?s.copy(a):nE.setFromPoints(n).getCenter(s);let u=0;for(let f=0,h=n.length;f<h;f++)u=Math.max(u,s.distanceToSquared(n[f]));return this.radius=Math.sqrt(u),this}copy(n){return this.center.copy(n.center),this.radius=n.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(n){return n.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(n){return n.distanceTo(this.center)-this.radius}intersectsSphere(n){const a=this.radius+n.radius;return n.center.distanceToSquared(this.center)<=a*a}intersectsBox(n){return n.intersectsSphere(this)}intersectsPlane(n){return Math.abs(n.distanceToPoint(this.center))<=this.radius}clampPoint(n,a){const s=this.center.distanceToSquared(n);return a.copy(n),s>this.radius*this.radius&&(a.sub(this.center).normalize(),a.multiplyScalar(this.radius).add(this.center)),a}getBoundingBox(n){return this.isEmpty()?(n.makeEmpty(),n):(n.set(this.center,this.center),n.expandByScalar(this.radius),n)}applyMatrix4(n){return this.center.applyMatrix4(n),this.radius=this.radius*n.getMaxScaleOnAxis(),this}translate(n){return this.center.add(n),this}expandByPoint(n){if(this.isEmpty())return this.center.copy(n),this.radius=0,this;$o.subVectors(n,this.center);const a=$o.lengthSq();if(a>this.radius*this.radius){const s=Math.sqrt(a),u=(s-this.radius)*.5;this.center.addScaledVector($o,u/s),this.radius+=u}return this}union(n){return n.isEmpty()?this:this.isEmpty()?(this.copy(n),this):(this.center.equals(n.center)===!0?this.radius=Math.max(this.radius,n.radius):(rd.subVectors(n.center,this.center).setLength(n.radius),this.expandByPoint($o.copy(n.center).add(rd)),this.expandByPoint($o.copy(n.center).sub(rd))),this)}equals(n){return n.center.equals(this.center)&&n.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(n){return this.radius=n.radius,this.center.fromArray(n.center),this}}const ha=new it,sd=new it,Fu=new it,tr=new it,od=new it,Hu=new it,ld=new it;class iE{constructor(n=new it,a=new it(0,0,-1)){this.origin=n,this.direction=a}set(n,a){return this.origin.copy(n),this.direction.copy(a),this}copy(n){return this.origin.copy(n.origin),this.direction.copy(n.direction),this}at(n,a){return a.copy(this.origin).addScaledVector(this.direction,n)}lookAt(n){return this.direction.copy(n).sub(this.origin).normalize(),this}recast(n){return this.origin.copy(this.at(n,ha)),this}closestPointToPoint(n,a){a.subVectors(n,this.origin);const s=a.dot(this.direction);return s<0?a.copy(this.origin):a.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(n){return Math.sqrt(this.distanceSqToPoint(n))}distanceSqToPoint(n){const a=ha.subVectors(n,this.origin).dot(this.direction);return a<0?this.origin.distanceToSquared(n):(ha.copy(this.origin).addScaledVector(this.direction,a),ha.distanceToSquared(n))}distanceSqToSegment(n,a,s,u){sd.copy(n).add(a).multiplyScalar(.5),Fu.copy(a).sub(n).normalize(),tr.copy(this.origin).sub(sd);const f=n.distanceTo(a)*.5,h=-this.direction.dot(Fu),d=tr.dot(this.direction),g=-tr.dot(Fu),_=tr.lengthSq(),v=Math.abs(1-h*h);let p,x,M,C;if(v>0)if(p=h*g-d,x=h*d-g,C=f*v,p>=0)if(x>=-C)if(x<=C){const U=1/v;p*=U,x*=U,M=p*(p+h*x+2*d)+x*(h*p+x+2*g)+_}else x=f,p=Math.max(0,-(h*x+d)),M=-p*p+x*(x+2*g)+_;else x=-f,p=Math.max(0,-(h*x+d)),M=-p*p+x*(x+2*g)+_;else x<=-C?(p=Math.max(0,-(-h*f+d)),x=p>0?-f:Math.min(Math.max(-f,-g),f),M=-p*p+x*(x+2*g)+_):x<=C?(p=0,x=Math.min(Math.max(-f,-g),f),M=x*(x+2*g)+_):(p=Math.max(0,-(h*f+d)),x=p>0?f:Math.min(Math.max(-f,-g),f),M=-p*p+x*(x+2*g)+_);else x=h>0?-f:f,p=Math.max(0,-(h*x+d)),M=-p*p+x*(x+2*g)+_;return s&&s.copy(this.origin).addScaledVector(this.direction,p),u&&u.copy(sd).addScaledVector(Fu,x),M}intersectSphere(n,a){ha.subVectors(n.center,this.origin);const s=ha.dot(this.direction),u=ha.dot(ha)-s*s,f=n.radius*n.radius;if(u>f)return null;const h=Math.sqrt(f-u),d=s-h,g=s+h;return g<0?null:d<0?this.at(g,a):this.at(d,a)}intersectsSphere(n){return n.radius<0?!1:this.distanceSqToPoint(n.center)<=n.radius*n.radius}distanceToPlane(n){const a=n.normal.dot(this.direction);if(a===0)return n.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(n.normal)+n.constant)/a;return s>=0?s:null}intersectPlane(n,a){const s=this.distanceToPlane(n);return s===null?null:this.at(s,a)}intersectsPlane(n){const a=n.distanceToPoint(this.origin);return a===0||n.normal.dot(this.direction)*a<0}intersectBox(n,a){let s,u,f,h,d,g;const _=1/this.direction.x,v=1/this.direction.y,p=1/this.direction.z,x=this.origin;return _>=0?(s=(n.min.x-x.x)*_,u=(n.max.x-x.x)*_):(s=(n.max.x-x.x)*_,u=(n.min.x-x.x)*_),v>=0?(f=(n.min.y-x.y)*v,h=(n.max.y-x.y)*v):(f=(n.max.y-x.y)*v,h=(n.min.y-x.y)*v),s>h||f>u||((f>s||isNaN(s))&&(s=f),(h<u||isNaN(u))&&(u=h),p>=0?(d=(n.min.z-x.z)*p,g=(n.max.z-x.z)*p):(d=(n.max.z-x.z)*p,g=(n.min.z-x.z)*p),s>g||d>u)||((d>s||s!==s)&&(s=d),(g<u||u!==u)&&(u=g),u<0)?null:this.at(s>=0?s:u,a)}intersectsBox(n){return this.intersectBox(n,ha)!==null}intersectTriangle(n,a,s,u,f){od.subVectors(a,n),Hu.subVectors(s,n),ld.crossVectors(od,Hu);let h=this.direction.dot(ld),d;if(h>0){if(u)return null;d=1}else if(h<0)d=-1,h=-h;else return null;tr.subVectors(this.origin,n);const g=d*this.direction.dot(Hu.crossVectors(tr,Hu));if(g<0)return null;const _=d*this.direction.dot(od.cross(tr));if(_<0||g+_>h)return null;const v=-d*tr.dot(ld);return v<0?null:this.at(v/h,f)}applyMatrix4(n){return this.origin.applyMatrix4(n),this.direction.transformDirection(n),this}equals(n){return n.origin.equals(this.origin)&&n.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class dn{constructor(n,a,s,u,f,h,d,g,_,v,p,x,M,C,U,y){dn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],n!==void 0&&this.set(n,a,s,u,f,h,d,g,_,v,p,x,M,C,U,y)}set(n,a,s,u,f,h,d,g,_,v,p,x,M,C,U,y){const S=this.elements;return S[0]=n,S[4]=a,S[8]=s,S[12]=u,S[1]=f,S[5]=h,S[9]=d,S[13]=g,S[2]=_,S[6]=v,S[10]=p,S[14]=x,S[3]=M,S[7]=C,S[11]=U,S[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new dn().fromArray(this.elements)}copy(n){const a=this.elements,s=n.elements;return a[0]=s[0],a[1]=s[1],a[2]=s[2],a[3]=s[3],a[4]=s[4],a[5]=s[5],a[6]=s[6],a[7]=s[7],a[8]=s[8],a[9]=s[9],a[10]=s[10],a[11]=s[11],a[12]=s[12],a[13]=s[13],a[14]=s[14],a[15]=s[15],this}copyPosition(n){const a=this.elements,s=n.elements;return a[12]=s[12],a[13]=s[13],a[14]=s[14],this}setFromMatrix3(n){const a=n.elements;return this.set(a[0],a[3],a[6],0,a[1],a[4],a[7],0,a[2],a[5],a[8],0,0,0,0,1),this}extractBasis(n,a,s){return n.setFromMatrixColumn(this,0),a.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(n,a,s){return this.set(n.x,a.x,s.x,0,n.y,a.y,s.y,0,n.z,a.z,s.z,0,0,0,0,1),this}extractRotation(n){const a=this.elements,s=n.elements,u=1/Bs.setFromMatrixColumn(n,0).length(),f=1/Bs.setFromMatrixColumn(n,1).length(),h=1/Bs.setFromMatrixColumn(n,2).length();return a[0]=s[0]*u,a[1]=s[1]*u,a[2]=s[2]*u,a[3]=0,a[4]=s[4]*f,a[5]=s[5]*f,a[6]=s[6]*f,a[7]=0,a[8]=s[8]*h,a[9]=s[9]*h,a[10]=s[10]*h,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,this}makeRotationFromEuler(n){const a=this.elements,s=n.x,u=n.y,f=n.z,h=Math.cos(s),d=Math.sin(s),g=Math.cos(u),_=Math.sin(u),v=Math.cos(f),p=Math.sin(f);if(n.order==="XYZ"){const x=h*v,M=h*p,C=d*v,U=d*p;a[0]=g*v,a[4]=-g*p,a[8]=_,a[1]=M+C*_,a[5]=x-U*_,a[9]=-d*g,a[2]=U-x*_,a[6]=C+M*_,a[10]=h*g}else if(n.order==="YXZ"){const x=g*v,M=g*p,C=_*v,U=_*p;a[0]=x+U*d,a[4]=C*d-M,a[8]=h*_,a[1]=h*p,a[5]=h*v,a[9]=-d,a[2]=M*d-C,a[6]=U+x*d,a[10]=h*g}else if(n.order==="ZXY"){const x=g*v,M=g*p,C=_*v,U=_*p;a[0]=x-U*d,a[4]=-h*p,a[8]=C+M*d,a[1]=M+C*d,a[5]=h*v,a[9]=U-x*d,a[2]=-h*_,a[6]=d,a[10]=h*g}else if(n.order==="ZYX"){const x=h*v,M=h*p,C=d*v,U=d*p;a[0]=g*v,a[4]=C*_-M,a[8]=x*_+U,a[1]=g*p,a[5]=U*_+x,a[9]=M*_-C,a[2]=-_,a[6]=d*g,a[10]=h*g}else if(n.order==="YZX"){const x=h*g,M=h*_,C=d*g,U=d*_;a[0]=g*v,a[4]=U-x*p,a[8]=C*p+M,a[1]=p,a[5]=h*v,a[9]=-d*v,a[2]=-_*v,a[6]=M*p+C,a[10]=x-U*p}else if(n.order==="XZY"){const x=h*g,M=h*_,C=d*g,U=d*_;a[0]=g*v,a[4]=-p,a[8]=_*v,a[1]=x*p+U,a[5]=h*v,a[9]=M*p-C,a[2]=C*p-M,a[6]=d*v,a[10]=U*p+x}return a[3]=0,a[7]=0,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,this}makeRotationFromQuaternion(n){return this.compose(aE,n,rE)}lookAt(n,a,s){const u=this.elements;return ii.subVectors(n,a),ii.lengthSq()===0&&(ii.z=1),ii.normalize(),er.crossVectors(s,ii),er.lengthSq()===0&&(Math.abs(s.z)===1?ii.x+=1e-4:ii.z+=1e-4,ii.normalize(),er.crossVectors(s,ii)),er.normalize(),Gu.crossVectors(ii,er),u[0]=er.x,u[4]=Gu.x,u[8]=ii.x,u[1]=er.y,u[5]=Gu.y,u[9]=ii.y,u[2]=er.z,u[6]=Gu.z,u[10]=ii.z,this}multiply(n){return this.multiplyMatrices(this,n)}premultiply(n){return this.multiplyMatrices(n,this)}multiplyMatrices(n,a){const s=n.elements,u=a.elements,f=this.elements,h=s[0],d=s[4],g=s[8],_=s[12],v=s[1],p=s[5],x=s[9],M=s[13],C=s[2],U=s[6],y=s[10],S=s[14],L=s[3],N=s[7],w=s[11],X=s[15],B=u[0],O=u[4],I=u[8],D=u[12],b=u[1],F=u[5],ot=u[9],st=u[13],mt=u[2],ft=u[6],Y=u[10],nt=u[14],K=u[3],vt=u[7],yt=u[11],Ht=u[15];return f[0]=h*B+d*b+g*mt+_*K,f[4]=h*O+d*F+g*ft+_*vt,f[8]=h*I+d*ot+g*Y+_*yt,f[12]=h*D+d*st+g*nt+_*Ht,f[1]=v*B+p*b+x*mt+M*K,f[5]=v*O+p*F+x*ft+M*vt,f[9]=v*I+p*ot+x*Y+M*yt,f[13]=v*D+p*st+x*nt+M*Ht,f[2]=C*B+U*b+y*mt+S*K,f[6]=C*O+U*F+y*ft+S*vt,f[10]=C*I+U*ot+y*Y+S*yt,f[14]=C*D+U*st+y*nt+S*Ht,f[3]=L*B+N*b+w*mt+X*K,f[7]=L*O+N*F+w*ft+X*vt,f[11]=L*I+N*ot+w*Y+X*yt,f[15]=L*D+N*st+w*nt+X*Ht,this}multiplyScalar(n){const a=this.elements;return a[0]*=n,a[4]*=n,a[8]*=n,a[12]*=n,a[1]*=n,a[5]*=n,a[9]*=n,a[13]*=n,a[2]*=n,a[6]*=n,a[10]*=n,a[14]*=n,a[3]*=n,a[7]*=n,a[11]*=n,a[15]*=n,this}determinant(){const n=this.elements,a=n[0],s=n[4],u=n[8],f=n[12],h=n[1],d=n[5],g=n[9],_=n[13],v=n[2],p=n[6],x=n[10],M=n[14],C=n[3],U=n[7],y=n[11],S=n[15];return C*(+f*g*p-u*_*p-f*d*x+s*_*x+u*d*M-s*g*M)+U*(+a*g*M-a*_*x+f*h*x-u*h*M+u*_*v-f*g*v)+y*(+a*_*p-a*d*M-f*h*p+s*h*M+f*d*v-s*_*v)+S*(-u*d*v-a*g*p+a*d*x+u*h*p-s*h*x+s*g*v)}transpose(){const n=this.elements;let a;return a=n[1],n[1]=n[4],n[4]=a,a=n[2],n[2]=n[8],n[8]=a,a=n[6],n[6]=n[9],n[9]=a,a=n[3],n[3]=n[12],n[12]=a,a=n[7],n[7]=n[13],n[13]=a,a=n[11],n[11]=n[14],n[14]=a,this}setPosition(n,a,s){const u=this.elements;return n.isVector3?(u[12]=n.x,u[13]=n.y,u[14]=n.z):(u[12]=n,u[13]=a,u[14]=s),this}invert(){const n=this.elements,a=n[0],s=n[1],u=n[2],f=n[3],h=n[4],d=n[5],g=n[6],_=n[7],v=n[8],p=n[9],x=n[10],M=n[11],C=n[12],U=n[13],y=n[14],S=n[15],L=p*y*_-U*x*_+U*g*M-d*y*M-p*g*S+d*x*S,N=C*x*_-v*y*_-C*g*M+h*y*M+v*g*S-h*x*S,w=v*U*_-C*p*_+C*d*M-h*U*M-v*d*S+h*p*S,X=C*p*g-v*U*g-C*d*x+h*U*x+v*d*y-h*p*y,B=a*L+s*N+u*w+f*X;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/B;return n[0]=L*O,n[1]=(U*x*f-p*y*f-U*u*M+s*y*M+p*u*S-s*x*S)*O,n[2]=(d*y*f-U*g*f+U*u*_-s*y*_-d*u*S+s*g*S)*O,n[3]=(p*g*f-d*x*f-p*u*_+s*x*_+d*u*M-s*g*M)*O,n[4]=N*O,n[5]=(v*y*f-C*x*f+C*u*M-a*y*M-v*u*S+a*x*S)*O,n[6]=(C*g*f-h*y*f-C*u*_+a*y*_+h*u*S-a*g*S)*O,n[7]=(h*x*f-v*g*f+v*u*_-a*x*_-h*u*M+a*g*M)*O,n[8]=w*O,n[9]=(C*p*f-v*U*f-C*s*M+a*U*M+v*s*S-a*p*S)*O,n[10]=(h*U*f-C*d*f+C*s*_-a*U*_-h*s*S+a*d*S)*O,n[11]=(v*d*f-h*p*f-v*s*_+a*p*_+h*s*M-a*d*M)*O,n[12]=X*O,n[13]=(v*U*u-C*p*u+C*s*x-a*U*x-v*s*y+a*p*y)*O,n[14]=(C*d*u-h*U*u-C*s*g+a*U*g+h*s*y-a*d*y)*O,n[15]=(h*p*u-v*d*u+v*s*g-a*p*g-h*s*x+a*d*x)*O,this}scale(n){const a=this.elements,s=n.x,u=n.y,f=n.z;return a[0]*=s,a[4]*=u,a[8]*=f,a[1]*=s,a[5]*=u,a[9]*=f,a[2]*=s,a[6]*=u,a[10]*=f,a[3]*=s,a[7]*=u,a[11]*=f,this}getMaxScaleOnAxis(){const n=this.elements,a=n[0]*n[0]+n[1]*n[1]+n[2]*n[2],s=n[4]*n[4]+n[5]*n[5]+n[6]*n[6],u=n[8]*n[8]+n[9]*n[9]+n[10]*n[10];return Math.sqrt(Math.max(a,s,u))}makeTranslation(n,a,s){return n.isVector3?this.set(1,0,0,n.x,0,1,0,n.y,0,0,1,n.z,0,0,0,1):this.set(1,0,0,n,0,1,0,a,0,0,1,s,0,0,0,1),this}makeRotationX(n){const a=Math.cos(n),s=Math.sin(n);return this.set(1,0,0,0,0,a,-s,0,0,s,a,0,0,0,0,1),this}makeRotationY(n){const a=Math.cos(n),s=Math.sin(n);return this.set(a,0,s,0,0,1,0,0,-s,0,a,0,0,0,0,1),this}makeRotationZ(n){const a=Math.cos(n),s=Math.sin(n);return this.set(a,-s,0,0,s,a,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(n,a){const s=Math.cos(a),u=Math.sin(a),f=1-s,h=n.x,d=n.y,g=n.z,_=f*h,v=f*d;return this.set(_*h+s,_*d-u*g,_*g+u*d,0,_*d+u*g,v*d+s,v*g-u*h,0,_*g-u*d,v*g+u*h,f*g*g+s,0,0,0,0,1),this}makeScale(n,a,s){return this.set(n,0,0,0,0,a,0,0,0,0,s,0,0,0,0,1),this}makeShear(n,a,s,u,f,h){return this.set(1,s,f,0,n,1,h,0,a,u,1,0,0,0,0,1),this}compose(n,a,s){const u=this.elements,f=a._x,h=a._y,d=a._z,g=a._w,_=f+f,v=h+h,p=d+d,x=f*_,M=f*v,C=f*p,U=h*v,y=h*p,S=d*p,L=g*_,N=g*v,w=g*p,X=s.x,B=s.y,O=s.z;return u[0]=(1-(U+S))*X,u[1]=(M+w)*X,u[2]=(C-N)*X,u[3]=0,u[4]=(M-w)*B,u[5]=(1-(x+S))*B,u[6]=(y+L)*B,u[7]=0,u[8]=(C+N)*O,u[9]=(y-L)*O,u[10]=(1-(x+U))*O,u[11]=0,u[12]=n.x,u[13]=n.y,u[14]=n.z,u[15]=1,this}decompose(n,a,s){const u=this.elements;let f=Bs.set(u[0],u[1],u[2]).length();const h=Bs.set(u[4],u[5],u[6]).length(),d=Bs.set(u[8],u[9],u[10]).length();this.determinant()<0&&(f=-f),n.x=u[12],n.y=u[13],n.z=u[14],bi.copy(this);const _=1/f,v=1/h,p=1/d;return bi.elements[0]*=_,bi.elements[1]*=_,bi.elements[2]*=_,bi.elements[4]*=v,bi.elements[5]*=v,bi.elements[6]*=v,bi.elements[8]*=p,bi.elements[9]*=p,bi.elements[10]*=p,a.setFromRotationMatrix(bi),s.x=f,s.y=h,s.z=d,this}makePerspective(n,a,s,u,f,h,d=Sa){const g=this.elements,_=2*f/(a-n),v=2*f/(s-u),p=(a+n)/(a-n),x=(s+u)/(s-u);let M,C;if(d===Sa)M=-(h+f)/(h-f),C=-2*h*f/(h-f);else if(d===hc)M=-h/(h-f),C=-h*f/(h-f);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return g[0]=_,g[4]=0,g[8]=p,g[12]=0,g[1]=0,g[5]=v,g[9]=x,g[13]=0,g[2]=0,g[6]=0,g[10]=M,g[14]=C,g[3]=0,g[7]=0,g[11]=-1,g[15]=0,this}makeOrthographic(n,a,s,u,f,h,d=Sa){const g=this.elements,_=1/(a-n),v=1/(s-u),p=1/(h-f),x=(a+n)*_,M=(s+u)*v;let C,U;if(d===Sa)C=(h+f)*p,U=-2*p;else if(d===hc)C=f*p,U=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return g[0]=2*_,g[4]=0,g[8]=0,g[12]=-x,g[1]=0,g[5]=2*v,g[9]=0,g[13]=-M,g[2]=0,g[6]=0,g[10]=U,g[14]=-C,g[3]=0,g[7]=0,g[11]=0,g[15]=1,this}equals(n){const a=this.elements,s=n.elements;for(let u=0;u<16;u++)if(a[u]!==s[u])return!1;return!0}fromArray(n,a=0){for(let s=0;s<16;s++)this.elements[s]=n[s+a];return this}toArray(n=[],a=0){const s=this.elements;return n[a]=s[0],n[a+1]=s[1],n[a+2]=s[2],n[a+3]=s[3],n[a+4]=s[4],n[a+5]=s[5],n[a+6]=s[6],n[a+7]=s[7],n[a+8]=s[8],n[a+9]=s[9],n[a+10]=s[10],n[a+11]=s[11],n[a+12]=s[12],n[a+13]=s[13],n[a+14]=s[14],n[a+15]=s[15],n}}const Bs=new it,bi=new dn,aE=new it(0,0,0),rE=new it(1,1,1),er=new it,Gu=new it,ii=new it,t0=new dn,e0=new ul;class Ma{constructor(n=0,a=0,s=0,u=Ma.DEFAULT_ORDER){this.isEuler=!0,this._x=n,this._y=a,this._z=s,this._order=u}get x(){return this._x}set x(n){this._x=n,this._onChangeCallback()}get y(){return this._y}set y(n){this._y=n,this._onChangeCallback()}get z(){return this._z}set z(n){this._z=n,this._onChangeCallback()}get order(){return this._order}set order(n){this._order=n,this._onChangeCallback()}set(n,a,s,u=this._order){return this._x=n,this._y=a,this._z=s,this._order=u,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(n){return this._x=n._x,this._y=n._y,this._z=n._z,this._order=n._order,this._onChangeCallback(),this}setFromRotationMatrix(n,a=this._order,s=!0){const u=n.elements,f=u[0],h=u[4],d=u[8],g=u[1],_=u[5],v=u[9],p=u[2],x=u[6],M=u[10];switch(a){case"XYZ":this._y=Math.asin(be(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-h,f)):(this._x=Math.atan2(x,_),this._z=0);break;case"YXZ":this._x=Math.asin(-be(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(g,_)):(this._y=Math.atan2(-p,f),this._z=0);break;case"ZXY":this._x=Math.asin(be(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-p,M),this._z=Math.atan2(-h,_)):(this._y=0,this._z=Math.atan2(g,f));break;case"ZYX":this._y=Math.asin(-be(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(g,f)):(this._x=0,this._z=Math.atan2(-h,_));break;case"YZX":this._z=Math.asin(be(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(-v,_),this._y=Math.atan2(-p,f)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-be(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(x,_),this._y=Math.atan2(d,f)):(this._x=Math.atan2(-v,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+a)}return this._order=a,s===!0&&this._onChangeCallback(),this}setFromQuaternion(n,a,s){return t0.makeRotationFromQuaternion(n),this.setFromRotationMatrix(t0,a,s)}setFromVector3(n,a=this._order){return this.set(n.x,n.y,n.z,a)}reorder(n){return e0.setFromEuler(this),this.setFromQuaternion(e0,n)}equals(n){return n._x===this._x&&n._y===this._y&&n._z===this._z&&n._order===this._order}fromArray(n){return this._x=n[0],this._y=n[1],this._z=n[2],n[3]!==void 0&&(this._order=n[3]),this._onChangeCallback(),this}toArray(n=[],a=0){return n[a]=this._x,n[a+1]=this._y,n[a+2]=this._z,n[a+3]=this._order,n}_onChange(n){return this._onChangeCallback=n,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ma.DEFAULT_ORDER="XYZ";class J0{constructor(){this.mask=1}set(n){this.mask=(1<<n|0)>>>0}enable(n){this.mask|=1<<n|0}enableAll(){this.mask=-1}toggle(n){this.mask^=1<<n|0}disable(n){this.mask&=~(1<<n|0)}disableAll(){this.mask=0}test(n){return(this.mask&n.mask)!==0}isEnabled(n){return(this.mask&(1<<n|0))!==0}}let sE=0;const n0=new it,Is=new ul,da=new dn,Vu=new it,tl=new it,oE=new it,lE=new ul,i0=new it(1,0,0),a0=new it(0,1,0),r0=new it(0,0,1),s0={type:"added"},uE={type:"removed"},Fs={type:"childadded",child:null},ud={type:"childremoved",child:null};class ri extends eo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sE++}),this.uuid=ll(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ri.DEFAULT_UP.clone();const n=new it,a=new Ma,s=new ul,u=new it(1,1,1);function f(){s.setFromEuler(a,!1)}function h(){a.setFromQuaternion(s,void 0,!1)}a._onChange(f),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:n},rotation:{configurable:!0,enumerable:!0,value:a},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:u},modelViewMatrix:{value:new dn},normalMatrix:{value:new me}}),this.matrix=new dn,this.matrixWorld=new dn,this.matrixAutoUpdate=ri.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ri.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new J0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(n){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(n),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(n){return this.quaternion.premultiply(n),this}setRotationFromAxisAngle(n,a){this.quaternion.setFromAxisAngle(n,a)}setRotationFromEuler(n){this.quaternion.setFromEuler(n,!0)}setRotationFromMatrix(n){this.quaternion.setFromRotationMatrix(n)}setRotationFromQuaternion(n){this.quaternion.copy(n)}rotateOnAxis(n,a){return Is.setFromAxisAngle(n,a),this.quaternion.multiply(Is),this}rotateOnWorldAxis(n,a){return Is.setFromAxisAngle(n,a),this.quaternion.premultiply(Is),this}rotateX(n){return this.rotateOnAxis(i0,n)}rotateY(n){return this.rotateOnAxis(a0,n)}rotateZ(n){return this.rotateOnAxis(r0,n)}translateOnAxis(n,a){return n0.copy(n).applyQuaternion(this.quaternion),this.position.add(n0.multiplyScalar(a)),this}translateX(n){return this.translateOnAxis(i0,n)}translateY(n){return this.translateOnAxis(a0,n)}translateZ(n){return this.translateOnAxis(r0,n)}localToWorld(n){return this.updateWorldMatrix(!0,!1),n.applyMatrix4(this.matrixWorld)}worldToLocal(n){return this.updateWorldMatrix(!0,!1),n.applyMatrix4(da.copy(this.matrixWorld).invert())}lookAt(n,a,s){n.isVector3?Vu.copy(n):Vu.set(n,a,s);const u=this.parent;this.updateWorldMatrix(!0,!1),tl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?da.lookAt(tl,Vu,this.up):da.lookAt(Vu,tl,this.up),this.quaternion.setFromRotationMatrix(da),u&&(da.extractRotation(u.matrixWorld),Is.setFromRotationMatrix(da),this.quaternion.premultiply(Is.invert()))}add(n){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.add(arguments[a]);return this}return n===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",n),this):(n&&n.isObject3D?(n.removeFromParent(),n.parent=this,this.children.push(n),n.dispatchEvent(s0),Fs.child=n,this.dispatchEvent(Fs),Fs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",n),this)}remove(n){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const a=this.children.indexOf(n);return a!==-1&&(n.parent=null,this.children.splice(a,1),n.dispatchEvent(uE),ud.child=n,this.dispatchEvent(ud),ud.child=null),this}removeFromParent(){const n=this.parent;return n!==null&&n.remove(this),this}clear(){return this.remove(...this.children)}attach(n){return this.updateWorldMatrix(!0,!1),da.copy(this.matrixWorld).invert(),n.parent!==null&&(n.parent.updateWorldMatrix(!0,!1),da.multiply(n.parent.matrixWorld)),n.applyMatrix4(da),n.removeFromParent(),n.parent=this,this.children.push(n),n.updateWorldMatrix(!1,!0),n.dispatchEvent(s0),Fs.child=n,this.dispatchEvent(Fs),Fs.child=null,this}getObjectById(n){return this.getObjectByProperty("id",n)}getObjectByName(n){return this.getObjectByProperty("name",n)}getObjectByProperty(n,a){if(this[n]===a)return this;for(let s=0,u=this.children.length;s<u;s++){const h=this.children[s].getObjectByProperty(n,a);if(h!==void 0)return h}}getObjectsByProperty(n,a,s=[]){this[n]===a&&s.push(this);const u=this.children;for(let f=0,h=u.length;f<h;f++)u[f].getObjectsByProperty(n,a,s);return s}getWorldPosition(n){return this.updateWorldMatrix(!0,!1),n.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(n){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tl,n,oE),n}getWorldScale(n){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tl,lE,n),n}getWorldDirection(n){this.updateWorldMatrix(!0,!1);const a=this.matrixWorld.elements;return n.set(a[8],a[9],a[10]).normalize()}raycast(){}traverse(n){n(this);const a=this.children;for(let s=0,u=a.length;s<u;s++)a[s].traverse(n)}traverseVisible(n){if(this.visible===!1)return;n(this);const a=this.children;for(let s=0,u=a.length;s<u;s++)a[s].traverseVisible(n)}traverseAncestors(n){const a=this.parent;a!==null&&(n(a),a.traverseAncestors(n))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(n){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0);const a=this.children;for(let s=0,u=a.length;s<u;s++)a[s].updateMatrixWorld(n)}updateWorldMatrix(n,a){const s=this.parent;if(n===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),a===!0){const u=this.children;for(let f=0,h=u.length;f<h;f++)u[f].updateWorldMatrix(!1,!0)}}toJSON(n){const a=n===void 0||typeof n=="string",s={};a&&(n={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const u={};u.uuid=this.uuid,u.type=this.type,this.name!==""&&(u.name=this.name),this.castShadow===!0&&(u.castShadow=!0),this.receiveShadow===!0&&(u.receiveShadow=!0),this.visible===!1&&(u.visible=!1),this.frustumCulled===!1&&(u.frustumCulled=!1),this.renderOrder!==0&&(u.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(u.userData=this.userData),u.layers=this.layers.mask,u.matrix=this.matrix.toArray(),u.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(u.matrixAutoUpdate=!1),this.isInstancedMesh&&(u.type="InstancedMesh",u.count=this.count,u.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(u.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(u.type="BatchedMesh",u.perObjectFrustumCulled=this.perObjectFrustumCulled,u.sortObjects=this.sortObjects,u.drawRanges=this._drawRanges,u.reservedRanges=this._reservedRanges,u.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),u.instanceInfo=this._instanceInfo.map(d=>({...d})),u.availableInstanceIds=this._availableInstanceIds.slice(),u.availableGeometryIds=this._availableGeometryIds.slice(),u.nextIndexStart=this._nextIndexStart,u.nextVertexStart=this._nextVertexStart,u.geometryCount=this._geometryCount,u.maxInstanceCount=this._maxInstanceCount,u.maxVertexCount=this._maxVertexCount,u.maxIndexCount=this._maxIndexCount,u.geometryInitialized=this._geometryInitialized,u.matricesTexture=this._matricesTexture.toJSON(n),u.indirectTexture=this._indirectTexture.toJSON(n),this._colorsTexture!==null&&(u.colorsTexture=this._colorsTexture.toJSON(n)),this.boundingSphere!==null&&(u.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(u.boundingBox=this.boundingBox.toJSON()));function f(d,g){return d[g.uuid]===void 0&&(d[g.uuid]=g.toJSON(n)),g.uuid}if(this.isScene)this.background&&(this.background.isColor?u.background=this.background.toJSON():this.background.isTexture&&(u.background=this.background.toJSON(n).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(u.environment=this.environment.toJSON(n).uuid);else if(this.isMesh||this.isLine||this.isPoints){u.geometry=f(n.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const g=d.shapes;if(Array.isArray(g))for(let _=0,v=g.length;_<v;_++){const p=g[_];f(n.shapes,p)}else f(n.shapes,g)}}if(this.isSkinnedMesh&&(u.bindMode=this.bindMode,u.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(f(n.skeletons,this.skeleton),u.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let g=0,_=this.material.length;g<_;g++)d.push(f(n.materials,this.material[g]));u.material=d}else u.material=f(n.materials,this.material);if(this.children.length>0){u.children=[];for(let d=0;d<this.children.length;d++)u.children.push(this.children[d].toJSON(n).object)}if(this.animations.length>0){u.animations=[];for(let d=0;d<this.animations.length;d++){const g=this.animations[d];u.animations.push(f(n.animations,g))}}if(a){const d=h(n.geometries),g=h(n.materials),_=h(n.textures),v=h(n.images),p=h(n.shapes),x=h(n.skeletons),M=h(n.animations),C=h(n.nodes);d.length>0&&(s.geometries=d),g.length>0&&(s.materials=g),_.length>0&&(s.textures=_),v.length>0&&(s.images=v),p.length>0&&(s.shapes=p),x.length>0&&(s.skeletons=x),M.length>0&&(s.animations=M),C.length>0&&(s.nodes=C)}return s.object=u,s;function h(d){const g=[];for(const _ in d){const v=d[_];delete v.metadata,g.push(v)}return g}}clone(n){return new this.constructor().copy(this,n)}copy(n,a=!0){if(this.name=n.name,this.up.copy(n.up),this.position.copy(n.position),this.rotation.order=n.rotation.order,this.quaternion.copy(n.quaternion),this.scale.copy(n.scale),this.matrix.copy(n.matrix),this.matrixWorld.copy(n.matrixWorld),this.matrixAutoUpdate=n.matrixAutoUpdate,this.matrixWorldAutoUpdate=n.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=n.matrixWorldNeedsUpdate,this.layers.mask=n.layers.mask,this.visible=n.visible,this.castShadow=n.castShadow,this.receiveShadow=n.receiveShadow,this.frustumCulled=n.frustumCulled,this.renderOrder=n.renderOrder,this.animations=n.animations.slice(),this.userData=JSON.parse(JSON.stringify(n.userData)),a===!0)for(let s=0;s<n.children.length;s++){const u=n.children[s];this.add(u.clone())}return this}}ri.DEFAULT_UP=new it(0,1,0);ri.DEFAULT_MATRIX_AUTO_UPDATE=!0;ri.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ai=new it,pa=new it,cd=new it,ma=new it,Hs=new it,Gs=new it,o0=new it,fd=new it,hd=new it,dd=new it,pd=new rn,md=new rn,gd=new rn;class Ri{constructor(n=new it,a=new it,s=new it){this.a=n,this.b=a,this.c=s}static getNormal(n,a,s,u){u.subVectors(s,a),Ai.subVectors(n,a),u.cross(Ai);const f=u.lengthSq();return f>0?u.multiplyScalar(1/Math.sqrt(f)):u.set(0,0,0)}static getBarycoord(n,a,s,u,f){Ai.subVectors(u,a),pa.subVectors(s,a),cd.subVectors(n,a);const h=Ai.dot(Ai),d=Ai.dot(pa),g=Ai.dot(cd),_=pa.dot(pa),v=pa.dot(cd),p=h*_-d*d;if(p===0)return f.set(0,0,0),null;const x=1/p,M=(_*g-d*v)*x,C=(h*v-d*g)*x;return f.set(1-M-C,C,M)}static containsPoint(n,a,s,u){return this.getBarycoord(n,a,s,u,ma)===null?!1:ma.x>=0&&ma.y>=0&&ma.x+ma.y<=1}static getInterpolation(n,a,s,u,f,h,d,g){return this.getBarycoord(n,a,s,u,ma)===null?(g.x=0,g.y=0,"z"in g&&(g.z=0),"w"in g&&(g.w=0),null):(g.setScalar(0),g.addScaledVector(f,ma.x),g.addScaledVector(h,ma.y),g.addScaledVector(d,ma.z),g)}static getInterpolatedAttribute(n,a,s,u,f,h){return pd.setScalar(0),md.setScalar(0),gd.setScalar(0),pd.fromBufferAttribute(n,a),md.fromBufferAttribute(n,s),gd.fromBufferAttribute(n,u),h.setScalar(0),h.addScaledVector(pd,f.x),h.addScaledVector(md,f.y),h.addScaledVector(gd,f.z),h}static isFrontFacing(n,a,s,u){return Ai.subVectors(s,a),pa.subVectors(n,a),Ai.cross(pa).dot(u)<0}set(n,a,s){return this.a.copy(n),this.b.copy(a),this.c.copy(s),this}setFromPointsAndIndices(n,a,s,u){return this.a.copy(n[a]),this.b.copy(n[s]),this.c.copy(n[u]),this}setFromAttributeAndIndices(n,a,s,u){return this.a.fromBufferAttribute(n,a),this.b.fromBufferAttribute(n,s),this.c.fromBufferAttribute(n,u),this}clone(){return new this.constructor().copy(this)}copy(n){return this.a.copy(n.a),this.b.copy(n.b),this.c.copy(n.c),this}getArea(){return Ai.subVectors(this.c,this.b),pa.subVectors(this.a,this.b),Ai.cross(pa).length()*.5}getMidpoint(n){return n.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(n){return Ri.getNormal(this.a,this.b,this.c,n)}getPlane(n){return n.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(n,a){return Ri.getBarycoord(n,this.a,this.b,this.c,a)}getInterpolation(n,a,s,u,f){return Ri.getInterpolation(n,this.a,this.b,this.c,a,s,u,f)}containsPoint(n){return Ri.containsPoint(n,this.a,this.b,this.c)}isFrontFacing(n){return Ri.isFrontFacing(this.a,this.b,this.c,n)}intersectsBox(n){return n.intersectsTriangle(this)}closestPointToPoint(n,a){const s=this.a,u=this.b,f=this.c;let h,d;Hs.subVectors(u,s),Gs.subVectors(f,s),fd.subVectors(n,s);const g=Hs.dot(fd),_=Gs.dot(fd);if(g<=0&&_<=0)return a.copy(s);hd.subVectors(n,u);const v=Hs.dot(hd),p=Gs.dot(hd);if(v>=0&&p<=v)return a.copy(u);const x=g*p-v*_;if(x<=0&&g>=0&&v<=0)return h=g/(g-v),a.copy(s).addScaledVector(Hs,h);dd.subVectors(n,f);const M=Hs.dot(dd),C=Gs.dot(dd);if(C>=0&&M<=C)return a.copy(f);const U=M*_-g*C;if(U<=0&&_>=0&&C<=0)return d=_/(_-C),a.copy(s).addScaledVector(Gs,d);const y=v*C-M*p;if(y<=0&&p-v>=0&&M-C>=0)return o0.subVectors(f,u),d=(p-v)/(p-v+(M-C)),a.copy(u).addScaledVector(o0,d);const S=1/(y+U+x);return h=U*S,d=x*S,a.copy(s).addScaledVector(Hs,h).addScaledVector(Gs,d)}equals(n){return n.a.equals(this.a)&&n.b.equals(this.b)&&n.c.equals(this.c)}}const $0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},nr={h:0,s:0,l:0},Xu={h:0,s:0,l:0};function _d(o,n,a){return a<0&&(a+=1),a>1&&(a-=1),a<1/6?o+(n-o)*6*a:a<1/2?n:a<2/3?o+(n-o)*6*(2/3-a):o}class Re{constructor(n,a,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(n,a,s)}set(n,a,s){if(a===void 0&&s===void 0){const u=n;u&&u.isColor?this.copy(u):typeof u=="number"?this.setHex(u):typeof u=="string"&&this.setStyle(u)}else this.setRGB(n,a,s);return this}setScalar(n){return this.r=n,this.g=n,this.b=n,this}setHex(n,a=gi){return n=Math.floor(n),this.r=(n>>16&255)/255,this.g=(n>>8&255)/255,this.b=(n&255)/255,De.colorSpaceToWorking(this,a),this}setRGB(n,a,s,u=De.workingColorSpace){return this.r=n,this.g=a,this.b=s,De.colorSpaceToWorking(this,u),this}setHSL(n,a,s,u=De.workingColorSpace){if(n=kM(n,1),a=be(a,0,1),s=be(s,0,1),a===0)this.r=this.g=this.b=s;else{const f=s<=.5?s*(1+a):s+a-s*a,h=2*s-f;this.r=_d(h,f,n+1/3),this.g=_d(h,f,n),this.b=_d(h,f,n-1/3)}return De.colorSpaceToWorking(this,u),this}setStyle(n,a=gi){function s(f){f!==void 0&&parseFloat(f)<1&&console.warn("THREE.Color: Alpha component of "+n+" will be ignored.")}let u;if(u=/^(\w+)\(([^\)]*)\)/.exec(n)){let f;const h=u[1],d=u[2];switch(h){case"rgb":case"rgba":if(f=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(f[4]),this.setRGB(Math.min(255,parseInt(f[1],10))/255,Math.min(255,parseInt(f[2],10))/255,Math.min(255,parseInt(f[3],10))/255,a);if(f=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(f[4]),this.setRGB(Math.min(100,parseInt(f[1],10))/100,Math.min(100,parseInt(f[2],10))/100,Math.min(100,parseInt(f[3],10))/100,a);break;case"hsl":case"hsla":if(f=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(f[4]),this.setHSL(parseFloat(f[1])/360,parseFloat(f[2])/100,parseFloat(f[3])/100,a);break;default:console.warn("THREE.Color: Unknown color model "+n)}}else if(u=/^\#([A-Fa-f\d]+)$/.exec(n)){const f=u[1],h=f.length;if(h===3)return this.setRGB(parseInt(f.charAt(0),16)/15,parseInt(f.charAt(1),16)/15,parseInt(f.charAt(2),16)/15,a);if(h===6)return this.setHex(parseInt(f,16),a);console.warn("THREE.Color: Invalid hex color "+n)}else if(n&&n.length>0)return this.setColorName(n,a);return this}setColorName(n,a=gi){const s=$0[n.toLowerCase()];return s!==void 0?this.setHex(s,a):console.warn("THREE.Color: Unknown color "+n),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(n){return this.r=n.r,this.g=n.g,this.b=n.b,this}copySRGBToLinear(n){return this.r=xa(n.r),this.g=xa(n.g),this.b=xa(n.b),this}copyLinearToSRGB(n){return this.r=Zs(n.r),this.g=Zs(n.g),this.b=Zs(n.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(n=gi){return De.workingToColorSpace(zn.copy(this),n),Math.round(be(zn.r*255,0,255))*65536+Math.round(be(zn.g*255,0,255))*256+Math.round(be(zn.b*255,0,255))}getHexString(n=gi){return("000000"+this.getHex(n).toString(16)).slice(-6)}getHSL(n,a=De.workingColorSpace){De.workingToColorSpace(zn.copy(this),a);const s=zn.r,u=zn.g,f=zn.b,h=Math.max(s,u,f),d=Math.min(s,u,f);let g,_;const v=(d+h)/2;if(d===h)g=0,_=0;else{const p=h-d;switch(_=v<=.5?p/(h+d):p/(2-h-d),h){case s:g=(u-f)/p+(u<f?6:0);break;case u:g=(f-s)/p+2;break;case f:g=(s-u)/p+4;break}g/=6}return n.h=g,n.s=_,n.l=v,n}getRGB(n,a=De.workingColorSpace){return De.workingToColorSpace(zn.copy(this),a),n.r=zn.r,n.g=zn.g,n.b=zn.b,n}getStyle(n=gi){De.workingToColorSpace(zn.copy(this),n);const a=zn.r,s=zn.g,u=zn.b;return n!==gi?`color(${n} ${a.toFixed(3)} ${s.toFixed(3)} ${u.toFixed(3)})`:`rgb(${Math.round(a*255)},${Math.round(s*255)},${Math.round(u*255)})`}offsetHSL(n,a,s){return this.getHSL(nr),this.setHSL(nr.h+n,nr.s+a,nr.l+s)}add(n){return this.r+=n.r,this.g+=n.g,this.b+=n.b,this}addColors(n,a){return this.r=n.r+a.r,this.g=n.g+a.g,this.b=n.b+a.b,this}addScalar(n){return this.r+=n,this.g+=n,this.b+=n,this}sub(n){return this.r=Math.max(0,this.r-n.r),this.g=Math.max(0,this.g-n.g),this.b=Math.max(0,this.b-n.b),this}multiply(n){return this.r*=n.r,this.g*=n.g,this.b*=n.b,this}multiplyScalar(n){return this.r*=n,this.g*=n,this.b*=n,this}lerp(n,a){return this.r+=(n.r-this.r)*a,this.g+=(n.g-this.g)*a,this.b+=(n.b-this.b)*a,this}lerpColors(n,a,s){return this.r=n.r+(a.r-n.r)*s,this.g=n.g+(a.g-n.g)*s,this.b=n.b+(a.b-n.b)*s,this}lerpHSL(n,a){this.getHSL(nr),n.getHSL(Xu);const s=$h(nr.h,Xu.h,a),u=$h(nr.s,Xu.s,a),f=$h(nr.l,Xu.l,a);return this.setHSL(s,u,f),this}setFromVector3(n){return this.r=n.x,this.g=n.y,this.b=n.z,this}applyMatrix3(n){const a=this.r,s=this.g,u=this.b,f=n.elements;return this.r=f[0]*a+f[3]*s+f[6]*u,this.g=f[1]*a+f[4]*s+f[7]*u,this.b=f[2]*a+f[5]*s+f[8]*u,this}equals(n){return n.r===this.r&&n.g===this.g&&n.b===this.b}fromArray(n,a=0){return this.r=n[a],this.g=n[a+1],this.b=n[a+2],this}toArray(n=[],a=0){return n[a]=this.r,n[a+1]=this.g,n[a+2]=this.b,n}fromBufferAttribute(n,a){return this.r=n.getX(a),this.g=n.getY(a),this.b=n.getZ(a),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zn=new Re;Re.NAMES=$0;let cE=0;class mc extends eo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cE++}),this.uuid=ll(),this.name="",this.type="Material",this.blending=Ws,this.side=or,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cd,this.blendDst=wd,this.blendEquation=Hr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=Ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ns,this.stencilZFail=Ns,this.stencilZPass=Ns,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(n){this._alphaTest>0!=n>0&&this.version++,this._alphaTest=n}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(n){if(n!==void 0)for(const a in n){const s=n[a];if(s===void 0){console.warn(`THREE.Material: parameter '${a}' has value of undefined.`);continue}const u=this[a];if(u===void 0){console.warn(`THREE.Material: '${a}' is not a property of THREE.${this.type}.`);continue}u&&u.isColor?u.set(s):u&&u.isVector3&&s&&s.isVector3?u.copy(s):this[a]=s}}toJSON(n){const a=n===void 0||typeof n=="string";a&&(n={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(n).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(n).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(n).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(n).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(n).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(n).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(n).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(n).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(n).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(n).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(n).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(n).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(n).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(n).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(n).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(n).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(n).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(n).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(n).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(n).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(n).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(n).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(n).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(n).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Ws&&(s.blending=this.blending),this.side!==or&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Cd&&(s.blendSrc=this.blendSrc),this.blendDst!==wd&&(s.blendDst=this.blendDst),this.blendEquation!==Hr&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Ks&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wv&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ns&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Ns&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Ns&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function u(f){const h=[];for(const d in f){const g=f[d];delete g.metadata,h.push(g)}return h}if(a){const f=u(n.textures),h=u(n.images);f.length>0&&(s.textures=f),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(n){this.name=n.name,this.blending=n.blending,this.side=n.side,this.vertexColors=n.vertexColors,this.opacity=n.opacity,this.transparent=n.transparent,this.blendSrc=n.blendSrc,this.blendDst=n.blendDst,this.blendEquation=n.blendEquation,this.blendSrcAlpha=n.blendSrcAlpha,this.blendDstAlpha=n.blendDstAlpha,this.blendEquationAlpha=n.blendEquationAlpha,this.blendColor.copy(n.blendColor),this.blendAlpha=n.blendAlpha,this.depthFunc=n.depthFunc,this.depthTest=n.depthTest,this.depthWrite=n.depthWrite,this.stencilWriteMask=n.stencilWriteMask,this.stencilFunc=n.stencilFunc,this.stencilRef=n.stencilRef,this.stencilFuncMask=n.stencilFuncMask,this.stencilFail=n.stencilFail,this.stencilZFail=n.stencilZFail,this.stencilZPass=n.stencilZPass,this.stencilWrite=n.stencilWrite;const a=n.clippingPlanes;let s=null;if(a!==null){const u=a.length;s=new Array(u);for(let f=0;f!==u;++f)s[f]=a[f].clone()}return this.clippingPlanes=s,this.clipIntersection=n.clipIntersection,this.clipShadows=n.clipShadows,this.shadowSide=n.shadowSide,this.colorWrite=n.colorWrite,this.precision=n.precision,this.polygonOffset=n.polygonOffset,this.polygonOffsetFactor=n.polygonOffsetFactor,this.polygonOffsetUnits=n.polygonOffsetUnits,this.dithering=n.dithering,this.alphaTest=n.alphaTest,this.alphaHash=n.alphaHash,this.alphaToCoverage=n.alphaToCoverage,this.premultipliedAlpha=n.premultipliedAlpha,this.forceSinglePass=n.forceSinglePass,this.visible=n.visible,this.toneMapped=n.toneMapped,this.userData=JSON.parse(JSON.stringify(n.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(n){n===!0&&this.version++}}class tS extends mc{constructor(n){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ma,this.combine=F0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(n)}copy(n){return super.copy(n),this.color.copy(n.color),this.map=n.map,this.lightMap=n.lightMap,this.lightMapIntensity=n.lightMapIntensity,this.aoMap=n.aoMap,this.aoMapIntensity=n.aoMapIntensity,this.specularMap=n.specularMap,this.alphaMap=n.alphaMap,this.envMap=n.envMap,this.envMapRotation.copy(n.envMapRotation),this.combine=n.combine,this.reflectivity=n.reflectivity,this.refractionRatio=n.refractionRatio,this.wireframe=n.wireframe,this.wireframeLinewidth=n.wireframeLinewidth,this.wireframeLinecap=n.wireframeLinecap,this.wireframeLinejoin=n.wireframeLinejoin,this.fog=n.fog,this}}const hn=new it,qu=new Le;let fE=0;class ki{constructor(n,a,s=!1){if(Array.isArray(n))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:fE++}),this.name="",this.array=n,this.itemSize=a,this.count=n!==void 0?n.length/a:0,this.normalized=s,this.usage=jv,this.updateRanges=[],this.gpuType=va,this.version=0}onUploadCallback(){}set needsUpdate(n){n===!0&&this.version++}setUsage(n){return this.usage=n,this}addUpdateRange(n,a){this.updateRanges.push({start:n,count:a})}clearUpdateRanges(){this.updateRanges.length=0}copy(n){return this.name=n.name,this.array=new n.array.constructor(n.array),this.itemSize=n.itemSize,this.count=n.count,this.normalized=n.normalized,this.usage=n.usage,this.gpuType=n.gpuType,this}copyAt(n,a,s){n*=this.itemSize,s*=a.itemSize;for(let u=0,f=this.itemSize;u<f;u++)this.array[n+u]=a.array[s+u];return this}copyArray(n){return this.array.set(n),this}applyMatrix3(n){if(this.itemSize===2)for(let a=0,s=this.count;a<s;a++)qu.fromBufferAttribute(this,a),qu.applyMatrix3(n),this.setXY(a,qu.x,qu.y);else if(this.itemSize===3)for(let a=0,s=this.count;a<s;a++)hn.fromBufferAttribute(this,a),hn.applyMatrix3(n),this.setXYZ(a,hn.x,hn.y,hn.z);return this}applyMatrix4(n){for(let a=0,s=this.count;a<s;a++)hn.fromBufferAttribute(this,a),hn.applyMatrix4(n),this.setXYZ(a,hn.x,hn.y,hn.z);return this}applyNormalMatrix(n){for(let a=0,s=this.count;a<s;a++)hn.fromBufferAttribute(this,a),hn.applyNormalMatrix(n),this.setXYZ(a,hn.x,hn.y,hn.z);return this}transformDirection(n){for(let a=0,s=this.count;a<s;a++)hn.fromBufferAttribute(this,a),hn.transformDirection(n),this.setXYZ(a,hn.x,hn.y,hn.z);return this}set(n,a=0){return this.array.set(n,a),this}getComponent(n,a){let s=this.array[n*this.itemSize+a];return this.normalized&&(s=Qo(s,this.array)),s}setComponent(n,a,s){return this.normalized&&(s=Yn(s,this.array)),this.array[n*this.itemSize+a]=s,this}getX(n){let a=this.array[n*this.itemSize];return this.normalized&&(a=Qo(a,this.array)),a}setX(n,a){return this.normalized&&(a=Yn(a,this.array)),this.array[n*this.itemSize]=a,this}getY(n){let a=this.array[n*this.itemSize+1];return this.normalized&&(a=Qo(a,this.array)),a}setY(n,a){return this.normalized&&(a=Yn(a,this.array)),this.array[n*this.itemSize+1]=a,this}getZ(n){let a=this.array[n*this.itemSize+2];return this.normalized&&(a=Qo(a,this.array)),a}setZ(n,a){return this.normalized&&(a=Yn(a,this.array)),this.array[n*this.itemSize+2]=a,this}getW(n){let a=this.array[n*this.itemSize+3];return this.normalized&&(a=Qo(a,this.array)),a}setW(n,a){return this.normalized&&(a=Yn(a,this.array)),this.array[n*this.itemSize+3]=a,this}setXY(n,a,s){return n*=this.itemSize,this.normalized&&(a=Yn(a,this.array),s=Yn(s,this.array)),this.array[n+0]=a,this.array[n+1]=s,this}setXYZ(n,a,s,u){return n*=this.itemSize,this.normalized&&(a=Yn(a,this.array),s=Yn(s,this.array),u=Yn(u,this.array)),this.array[n+0]=a,this.array[n+1]=s,this.array[n+2]=u,this}setXYZW(n,a,s,u,f){return n*=this.itemSize,this.normalized&&(a=Yn(a,this.array),s=Yn(s,this.array),u=Yn(u,this.array),f=Yn(f,this.array)),this.array[n+0]=a,this.array[n+1]=s,this.array[n+2]=u,this.array[n+3]=f,this}onUpload(n){return this.onUploadCallback=n,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const n={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(n.name=this.name),this.usage!==jv&&(n.usage=this.usage),n}}class eS extends ki{constructor(n,a,s){super(new Uint16Array(n),a,s)}}class nS extends ki{constructor(n,a,s){super(new Uint32Array(n),a,s)}}class Yi extends ki{constructor(n,a,s){super(new Float32Array(n),a,s)}}let hE=0;const mi=new dn,vd=new ri,Vs=new it,ai=new cl,el=new cl,Mn=new it;class lr extends eo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hE++}),this.uuid=ll(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(n){return Array.isArray(n)?this.index=new(K0(n)?nS:eS)(n,1):this.index=n,this}setIndirect(n){return this.indirect=n,this}getIndirect(){return this.indirect}getAttribute(n){return this.attributes[n]}setAttribute(n,a){return this.attributes[n]=a,this}deleteAttribute(n){return delete this.attributes[n],this}hasAttribute(n){return this.attributes[n]!==void 0}addGroup(n,a,s=0){this.groups.push({start:n,count:a,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(n,a){this.drawRange.start=n,this.drawRange.count=a}applyMatrix4(n){const a=this.attributes.position;a!==void 0&&(a.applyMatrix4(n),a.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const f=new me().getNormalMatrix(n);s.applyNormalMatrix(f),s.needsUpdate=!0}const u=this.attributes.tangent;return u!==void 0&&(u.transformDirection(n),u.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(n){return mi.makeRotationFromQuaternion(n),this.applyMatrix4(mi),this}rotateX(n){return mi.makeRotationX(n),this.applyMatrix4(mi),this}rotateY(n){return mi.makeRotationY(n),this.applyMatrix4(mi),this}rotateZ(n){return mi.makeRotationZ(n),this.applyMatrix4(mi),this}translate(n,a,s){return mi.makeTranslation(n,a,s),this.applyMatrix4(mi),this}scale(n,a,s){return mi.makeScale(n,a,s),this.applyMatrix4(mi),this}lookAt(n){return vd.lookAt(n),vd.updateMatrix(),this.applyMatrix4(vd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vs).negate(),this.translate(Vs.x,Vs.y,Vs.z),this}setFromPoints(n){const a=this.getAttribute("position");if(a===void 0){const s=[];for(let u=0,f=n.length;u<f;u++){const h=n[u];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Yi(s,3))}else{const s=Math.min(n.length,a.count);for(let u=0;u<s;u++){const f=n[u];a.setXYZ(u,f.x,f.y,f.z||0)}n.length>a.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),a.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cl);const n=this.attributes.position,a=this.morphAttributes.position;if(n&&n.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new it(-1/0,-1/0,-1/0),new it(1/0,1/0,1/0));return}if(n!==void 0){if(this.boundingBox.setFromBufferAttribute(n),a)for(let s=0,u=a.length;s<u;s++){const f=a[s];ai.setFromBufferAttribute(f),this.morphTargetsRelative?(Mn.addVectors(this.boundingBox.min,ai.min),this.boundingBox.expandByPoint(Mn),Mn.addVectors(this.boundingBox.max,ai.max),this.boundingBox.expandByPoint(Mn)):(this.boundingBox.expandByPoint(ai.min),this.boundingBox.expandByPoint(ai.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Tp);const n=this.attributes.position,a=this.morphAttributes.position;if(n&&n.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new it,1/0);return}if(n){const s=this.boundingSphere.center;if(ai.setFromBufferAttribute(n),a)for(let f=0,h=a.length;f<h;f++){const d=a[f];el.setFromBufferAttribute(d),this.morphTargetsRelative?(Mn.addVectors(ai.min,el.min),ai.expandByPoint(Mn),Mn.addVectors(ai.max,el.max),ai.expandByPoint(Mn)):(ai.expandByPoint(el.min),ai.expandByPoint(el.max))}ai.getCenter(s);let u=0;for(let f=0,h=n.count;f<h;f++)Mn.fromBufferAttribute(n,f),u=Math.max(u,s.distanceToSquared(Mn));if(a)for(let f=0,h=a.length;f<h;f++){const d=a[f],g=this.morphTargetsRelative;for(let _=0,v=d.count;_<v;_++)Mn.fromBufferAttribute(d,_),g&&(Vs.fromBufferAttribute(n,_),Mn.add(Vs)),u=Math.max(u,s.distanceToSquared(Mn))}this.boundingSphere.radius=Math.sqrt(u),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const n=this.index,a=this.attributes;if(n===null||a.position===void 0||a.normal===void 0||a.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=a.position,u=a.normal,f=a.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ki(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],g=[];for(let I=0;I<s.count;I++)d[I]=new it,g[I]=new it;const _=new it,v=new it,p=new it,x=new Le,M=new Le,C=new Le,U=new it,y=new it;function S(I,D,b){_.fromBufferAttribute(s,I),v.fromBufferAttribute(s,D),p.fromBufferAttribute(s,b),x.fromBufferAttribute(f,I),M.fromBufferAttribute(f,D),C.fromBufferAttribute(f,b),v.sub(_),p.sub(_),M.sub(x),C.sub(x);const F=1/(M.x*C.y-C.x*M.y);isFinite(F)&&(U.copy(v).multiplyScalar(C.y).addScaledVector(p,-M.y).multiplyScalar(F),y.copy(p).multiplyScalar(M.x).addScaledVector(v,-C.x).multiplyScalar(F),d[I].add(U),d[D].add(U),d[b].add(U),g[I].add(y),g[D].add(y),g[b].add(y))}let L=this.groups;L.length===0&&(L=[{start:0,count:n.count}]);for(let I=0,D=L.length;I<D;++I){const b=L[I],F=b.start,ot=b.count;for(let st=F,mt=F+ot;st<mt;st+=3)S(n.getX(st+0),n.getX(st+1),n.getX(st+2))}const N=new it,w=new it,X=new it,B=new it;function O(I){X.fromBufferAttribute(u,I),B.copy(X);const D=d[I];N.copy(D),N.sub(X.multiplyScalar(X.dot(D))).normalize(),w.crossVectors(B,D);const F=w.dot(g[I])<0?-1:1;h.setXYZW(I,N.x,N.y,N.z,F)}for(let I=0,D=L.length;I<D;++I){const b=L[I],F=b.start,ot=b.count;for(let st=F,mt=F+ot;st<mt;st+=3)O(n.getX(st+0)),O(n.getX(st+1)),O(n.getX(st+2))}}computeVertexNormals(){const n=this.index,a=this.getAttribute("position");if(a!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new ki(new Float32Array(a.count*3),3),this.setAttribute("normal",s);else for(let x=0,M=s.count;x<M;x++)s.setXYZ(x,0,0,0);const u=new it,f=new it,h=new it,d=new it,g=new it,_=new it,v=new it,p=new it;if(n)for(let x=0,M=n.count;x<M;x+=3){const C=n.getX(x+0),U=n.getX(x+1),y=n.getX(x+2);u.fromBufferAttribute(a,C),f.fromBufferAttribute(a,U),h.fromBufferAttribute(a,y),v.subVectors(h,f),p.subVectors(u,f),v.cross(p),d.fromBufferAttribute(s,C),g.fromBufferAttribute(s,U),_.fromBufferAttribute(s,y),d.add(v),g.add(v),_.add(v),s.setXYZ(C,d.x,d.y,d.z),s.setXYZ(U,g.x,g.y,g.z),s.setXYZ(y,_.x,_.y,_.z)}else for(let x=0,M=a.count;x<M;x+=3)u.fromBufferAttribute(a,x+0),f.fromBufferAttribute(a,x+1),h.fromBufferAttribute(a,x+2),v.subVectors(h,f),p.subVectors(u,f),v.cross(p),s.setXYZ(x+0,v.x,v.y,v.z),s.setXYZ(x+1,v.x,v.y,v.z),s.setXYZ(x+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const n=this.attributes.normal;for(let a=0,s=n.count;a<s;a++)Mn.fromBufferAttribute(n,a),Mn.normalize(),n.setXYZ(a,Mn.x,Mn.y,Mn.z)}toNonIndexed(){function n(d,g){const _=d.array,v=d.itemSize,p=d.normalized,x=new _.constructor(g.length*v);let M=0,C=0;for(let U=0,y=g.length;U<y;U++){d.isInterleavedBufferAttribute?M=g[U]*d.data.stride+d.offset:M=g[U]*v;for(let S=0;S<v;S++)x[C++]=_[M++]}return new ki(x,v,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const a=new lr,s=this.index.array,u=this.attributes;for(const d in u){const g=u[d],_=n(g,s);a.setAttribute(d,_)}const f=this.morphAttributes;for(const d in f){const g=[],_=f[d];for(let v=0,p=_.length;v<p;v++){const x=_[v],M=n(x,s);g.push(M)}a.morphAttributes[d]=g}a.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,g=h.length;d<g;d++){const _=h[d];a.addGroup(_.start,_.count,_.materialIndex)}return a}toJSON(){const n={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),Object.keys(this.userData).length>0&&(n.userData=this.userData),this.parameters!==void 0){const g=this.parameters;for(const _ in g)g[_]!==void 0&&(n[_]=g[_]);return n}n.data={attributes:{}};const a=this.index;a!==null&&(n.data.index={type:a.array.constructor.name,array:Array.prototype.slice.call(a.array)});const s=this.attributes;for(const g in s){const _=s[g];n.data.attributes[g]=_.toJSON(n.data)}const u={};let f=!1;for(const g in this.morphAttributes){const _=this.morphAttributes[g],v=[];for(let p=0,x=_.length;p<x;p++){const M=_[p];v.push(M.toJSON(n.data))}v.length>0&&(u[g]=v,f=!0)}f&&(n.data.morphAttributes=u,n.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(n.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(n.data.boundingSphere=d.toJSON()),n}clone(){return new this.constructor().copy(this)}copy(n){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const a={};this.name=n.name;const s=n.index;s!==null&&this.setIndex(s.clone());const u=n.attributes;for(const _ in u){const v=u[_];this.setAttribute(_,v.clone(a))}const f=n.morphAttributes;for(const _ in f){const v=[],p=f[_];for(let x=0,M=p.length;x<M;x++)v.push(p[x].clone(a));this.morphAttributes[_]=v}this.morphTargetsRelative=n.morphTargetsRelative;const h=n.groups;for(let _=0,v=h.length;_<v;_++){const p=h[_];this.addGroup(p.start,p.count,p.materialIndex)}const d=n.boundingBox;d!==null&&(this.boundingBox=d.clone());const g=n.boundingSphere;return g!==null&&(this.boundingSphere=g.clone()),this.drawRange.start=n.drawRange.start,this.drawRange.count=n.drawRange.count,this.userData=n.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const l0=new dn,Or=new iE,ku=new Tp,u0=new it,Yu=new it,Wu=new it,ju=new it,Sd=new it,Zu=new it,c0=new it,Ku=new it;class qi extends ri{constructor(n=new lr,a=new tS){super(),this.isMesh=!0,this.type="Mesh",this.geometry=n,this.material=a,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(n,a){return super.copy(n,a),n.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=n.morphTargetInfluences.slice()),n.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},n.morphTargetDictionary)),this.material=Array.isArray(n.material)?n.material.slice():n.material,this.geometry=n.geometry,this}updateMorphTargets(){const a=this.geometry.morphAttributes,s=Object.keys(a);if(s.length>0){const u=a[s[0]];if(u!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,h=u.length;f<h;f++){const d=u[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=f}}}}getVertexPosition(n,a){const s=this.geometry,u=s.attributes.position,f=s.morphAttributes.position,h=s.morphTargetsRelative;a.fromBufferAttribute(u,n);const d=this.morphTargetInfluences;if(f&&d){Zu.set(0,0,0);for(let g=0,_=f.length;g<_;g++){const v=d[g],p=f[g];v!==0&&(Sd.fromBufferAttribute(p,n),h?Zu.addScaledVector(Sd,v):Zu.addScaledVector(Sd.sub(a),v))}a.add(Zu)}return a}raycast(n,a){const s=this.geometry,u=this.material,f=this.matrixWorld;u!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),ku.copy(s.boundingSphere),ku.applyMatrix4(f),Or.copy(n.ray).recast(n.near),!(ku.containsPoint(Or.origin)===!1&&(Or.intersectSphere(ku,u0)===null||Or.origin.distanceToSquared(u0)>(n.far-n.near)**2))&&(l0.copy(f).invert(),Or.copy(n.ray).applyMatrix4(l0),!(s.boundingBox!==null&&Or.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(n,a,Or)))}_computeIntersections(n,a,s){let u;const f=this.geometry,h=this.material,d=f.index,g=f.attributes.position,_=f.attributes.uv,v=f.attributes.uv1,p=f.attributes.normal,x=f.groups,M=f.drawRange;if(d!==null)if(Array.isArray(h))for(let C=0,U=x.length;C<U;C++){const y=x[C],S=h[y.materialIndex],L=Math.max(y.start,M.start),N=Math.min(d.count,Math.min(y.start+y.count,M.start+M.count));for(let w=L,X=N;w<X;w+=3){const B=d.getX(w),O=d.getX(w+1),I=d.getX(w+2);u=Qu(this,S,n,s,_,v,p,B,O,I),u&&(u.faceIndex=Math.floor(w/3),u.face.materialIndex=y.materialIndex,a.push(u))}}else{const C=Math.max(0,M.start),U=Math.min(d.count,M.start+M.count);for(let y=C,S=U;y<S;y+=3){const L=d.getX(y),N=d.getX(y+1),w=d.getX(y+2);u=Qu(this,h,n,s,_,v,p,L,N,w),u&&(u.faceIndex=Math.floor(y/3),a.push(u))}}else if(g!==void 0)if(Array.isArray(h))for(let C=0,U=x.length;C<U;C++){const y=x[C],S=h[y.materialIndex],L=Math.max(y.start,M.start),N=Math.min(g.count,Math.min(y.start+y.count,M.start+M.count));for(let w=L,X=N;w<X;w+=3){const B=w,O=w+1,I=w+2;u=Qu(this,S,n,s,_,v,p,B,O,I),u&&(u.faceIndex=Math.floor(w/3),u.face.materialIndex=y.materialIndex,a.push(u))}}else{const C=Math.max(0,M.start),U=Math.min(g.count,M.start+M.count);for(let y=C,S=U;y<S;y+=3){const L=y,N=y+1,w=y+2;u=Qu(this,h,n,s,_,v,p,L,N,w),u&&(u.faceIndex=Math.floor(y/3),a.push(u))}}}}function dE(o,n,a,s,u,f,h,d){let g;if(n.side===Wn?g=s.intersectTriangle(h,f,u,!0,d):g=s.intersectTriangle(u,f,h,n.side===or,d),g===null)return null;Ku.copy(d),Ku.applyMatrix4(o.matrixWorld);const _=a.ray.origin.distanceTo(Ku);return _<a.near||_>a.far?null:{distance:_,point:Ku.clone(),object:o}}function Qu(o,n,a,s,u,f,h,d,g,_){o.getVertexPosition(d,Yu),o.getVertexPosition(g,Wu),o.getVertexPosition(_,ju);const v=dE(o,n,a,s,Yu,Wu,ju,c0);if(v){const p=new it;Ri.getBarycoord(c0,Yu,Wu,ju,p),u&&(v.uv=Ri.getInterpolatedAttribute(u,d,g,_,p,new Le)),f&&(v.uv1=Ri.getInterpolatedAttribute(f,d,g,_,p,new Le)),h&&(v.normal=Ri.getInterpolatedAttribute(h,d,g,_,p,new it),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const x={a:d,b:g,c:_,normal:new it,materialIndex:0};Ri.getNormal(Yu,Wu,ju,x.normal),v.face=x,v.barycoord=p}return v}class fl extends lr{constructor(n=1,a=1,s=1,u=1,f=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:n,height:a,depth:s,widthSegments:u,heightSegments:f,depthSegments:h};const d=this;u=Math.floor(u),f=Math.floor(f),h=Math.floor(h);const g=[],_=[],v=[],p=[];let x=0,M=0;C("z","y","x",-1,-1,s,a,n,h,f,0),C("z","y","x",1,-1,s,a,-n,h,f,1),C("x","z","y",1,1,n,s,a,u,h,2),C("x","z","y",1,-1,n,s,-a,u,h,3),C("x","y","z",1,-1,n,a,s,u,f,4),C("x","y","z",-1,-1,n,a,-s,u,f,5),this.setIndex(g),this.setAttribute("position",new Yi(_,3)),this.setAttribute("normal",new Yi(v,3)),this.setAttribute("uv",new Yi(p,2));function C(U,y,S,L,N,w,X,B,O,I,D){const b=w/O,F=X/I,ot=w/2,st=X/2,mt=B/2,ft=O+1,Y=I+1;let nt=0,K=0;const vt=new it;for(let yt=0;yt<Y;yt++){const Ht=yt*F-st;for(let ee=0;ee<ft;ee++){const Et=ee*b-ot;vt[U]=Et*L,vt[y]=Ht*N,vt[S]=mt,_.push(vt.x,vt.y,vt.z),vt[U]=0,vt[y]=0,vt[S]=B>0?1:-1,v.push(vt.x,vt.y,vt.z),p.push(ee/O),p.push(1-yt/I),nt+=1}}for(let yt=0;yt<I;yt++)for(let Ht=0;Ht<O;Ht++){const ee=x+Ht+ft*yt,Et=x+Ht+ft*(yt+1),A=x+(Ht+1)+ft*(yt+1),q=x+(Ht+1)+ft*yt;g.push(ee,Et,q),g.push(Et,A,q),K+=6}d.addGroup(M,K,D),M+=K,x+=nt}}copy(n){return super.copy(n),this.parameters=Object.assign({},n.parameters),this}static fromJSON(n){return new fl(n.width,n.height,n.depth,n.widthSegments,n.heightSegments,n.depthSegments)}}function to(o){const n={};for(const a in o){n[a]={};for(const s in o[a]){const u=o[a][s];u&&(u.isColor||u.isMatrix3||u.isMatrix4||u.isVector2||u.isVector3||u.isVector4||u.isTexture||u.isQuaternion)?u.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),n[a][s]=null):n[a][s]=u.clone():Array.isArray(u)?n[a][s]=u.slice():n[a][s]=u}}return n}function Hn(o){const n={};for(let a=0;a<o.length;a++){const s=to(o[a]);for(const u in s)n[u]=s[u]}return n}function pE(o){const n=[];for(let a=0;a<o.length;a++)n.push(o[a].clone());return n}function iS(o){const n=o.getRenderTarget();return n===null?o.outputColorSpace:n.isXRRenderTarget===!0?n.texture.colorSpace:De.workingColorSpace}const mE={clone:to,merge:Hn};var gE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_E=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ea extends mc{constructor(n){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gE,this.fragmentShader=_E,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,n!==void 0&&this.setValues(n)}copy(n){return super.copy(n),this.fragmentShader=n.fragmentShader,this.vertexShader=n.vertexShader,this.uniforms=to(n.uniforms),this.uniformsGroups=pE(n.uniformsGroups),this.defines=Object.assign({},n.defines),this.wireframe=n.wireframe,this.wireframeLinewidth=n.wireframeLinewidth,this.fog=n.fog,this.lights=n.lights,this.clipping=n.clipping,this.extensions=Object.assign({},n.extensions),this.glslVersion=n.glslVersion,this}toJSON(n){const a=super.toJSON(n);a.glslVersion=this.glslVersion,a.uniforms={};for(const u in this.uniforms){const h=this.uniforms[u].value;h&&h.isTexture?a.uniforms[u]={type:"t",value:h.toJSON(n).uuid}:h&&h.isColor?a.uniforms[u]={type:"c",value:h.getHex()}:h&&h.isVector2?a.uniforms[u]={type:"v2",value:h.toArray()}:h&&h.isVector3?a.uniforms[u]={type:"v3",value:h.toArray()}:h&&h.isVector4?a.uniforms[u]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?a.uniforms[u]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?a.uniforms[u]={type:"m4",value:h.toArray()}:a.uniforms[u]={value:h}}Object.keys(this.defines).length>0&&(a.defines=this.defines),a.vertexShader=this.vertexShader,a.fragmentShader=this.fragmentShader,a.lights=this.lights,a.clipping=this.clipping;const s={};for(const u in this.extensions)this.extensions[u]===!0&&(s[u]=!0);return Object.keys(s).length>0&&(a.extensions=s),a}}class aS extends ri{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dn,this.projectionMatrix=new dn,this.projectionMatrixInverse=new dn,this.coordinateSystem=Sa}copy(n,a){return super.copy(n,a),this.matrixWorldInverse.copy(n.matrixWorldInverse),this.projectionMatrix.copy(n.projectionMatrix),this.projectionMatrixInverse.copy(n.projectionMatrixInverse),this.coordinateSystem=n.coordinateSystem,this}getWorldDirection(n){return super.getWorldDirection(n).negate()}updateMatrixWorld(n){super.updateMatrixWorld(n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(n,a){super.updateWorldMatrix(n,a),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ir=new it,f0=new Le,h0=new Le;class _i extends aS{constructor(n=50,a=1,s=.1,u=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=n,this.zoom=1,this.near=s,this.far=u,this.focus=10,this.aspect=a,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(n,a){return super.copy(n,a),this.fov=n.fov,this.zoom=n.zoom,this.near=n.near,this.far=n.far,this.focus=n.focus,this.aspect=n.aspect,this.view=n.view===null?null:Object.assign({},n.view),this.filmGauge=n.filmGauge,this.filmOffset=n.filmOffset,this}setFocalLength(n){const a=.5*this.getFilmHeight()/n;this.fov=dp*2*Math.atan(a),this.updateProjectionMatrix()}getFocalLength(){const n=Math.tan(Jh*.5*this.fov);return .5*this.getFilmHeight()/n}getEffectiveFOV(){return dp*2*Math.atan(Math.tan(Jh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(n,a,s){ir.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(ir.x,ir.y).multiplyScalar(-n/ir.z),ir.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(ir.x,ir.y).multiplyScalar(-n/ir.z)}getViewSize(n,a){return this.getViewBounds(n,f0,h0),a.subVectors(h0,f0)}setViewOffset(n,a,s,u,f,h){this.aspect=n/a,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=n,this.view.fullHeight=a,this.view.offsetX=s,this.view.offsetY=u,this.view.width=f,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const n=this.near;let a=n*Math.tan(Jh*.5*this.fov)/this.zoom,s=2*a,u=this.aspect*s,f=-.5*u;const h=this.view;if(this.view!==null&&this.view.enabled){const g=h.fullWidth,_=h.fullHeight;f+=h.offsetX*u/g,a-=h.offsetY*s/_,u*=h.width/g,s*=h.height/_}const d=this.filmOffset;d!==0&&(f+=n*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(f,f+u,a,a-s,n,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(n){const a=super.toJSON(n);return a.object.fov=this.fov,a.object.zoom=this.zoom,a.object.near=this.near,a.object.far=this.far,a.object.focus=this.focus,a.object.aspect=this.aspect,this.view!==null&&(a.object.view=Object.assign({},this.view)),a.object.filmGauge=this.filmGauge,a.object.filmOffset=this.filmOffset,a}}const Xs=-90,qs=1;class vE extends ri{constructor(n,a,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const u=new _i(Xs,qs,n,a);u.layers=this.layers,this.add(u);const f=new _i(Xs,qs,n,a);f.layers=this.layers,this.add(f);const h=new _i(Xs,qs,n,a);h.layers=this.layers,this.add(h);const d=new _i(Xs,qs,n,a);d.layers=this.layers,this.add(d);const g=new _i(Xs,qs,n,a);g.layers=this.layers,this.add(g);const _=new _i(Xs,qs,n,a);_.layers=this.layers,this.add(_)}updateCoordinateSystem(){const n=this.coordinateSystem,a=this.children.concat(),[s,u,f,h,d,g]=a;for(const _ of a)this.remove(_);if(n===Sa)s.up.set(0,1,0),s.lookAt(1,0,0),u.up.set(0,1,0),u.lookAt(-1,0,0),f.up.set(0,0,-1),f.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),g.up.set(0,1,0),g.lookAt(0,0,-1);else if(n===hc)s.up.set(0,-1,0),s.lookAt(-1,0,0),u.up.set(0,-1,0),u.lookAt(1,0,0),f.up.set(0,0,1),f.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),g.up.set(0,-1,0),g.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+n);for(const _ of a)this.add(_),_.updateMatrixWorld()}update(n,a){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:u}=this;this.coordinateSystem!==n.coordinateSystem&&(this.coordinateSystem=n.coordinateSystem,this.updateCoordinateSystem());const[f,h,d,g,_,v]=this.children,p=n.getRenderTarget(),x=n.getActiveCubeFace(),M=n.getActiveMipmapLevel(),C=n.xr.enabled;n.xr.enabled=!1;const U=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,n.setRenderTarget(s,0,u),n.render(a,f),n.setRenderTarget(s,1,u),n.render(a,h),n.setRenderTarget(s,2,u),n.render(a,d),n.setRenderTarget(s,3,u),n.render(a,g),n.setRenderTarget(s,4,u),n.render(a,_),s.texture.generateMipmaps=U,n.setRenderTarget(s,5,u),n.render(a,v),n.setRenderTarget(p,x,M),n.xr.enabled=C,s.texture.needsPMREMUpdate=!0}}class rS extends jn{constructor(n=[],a=Qs,s,u,f,h,d,g,_,v){super(n,a,s,u,f,h,d,g,_,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(n){this.image=n}}class SE extends kr{constructor(n=1,a={}){super(n,n,a),this.isWebGLCubeRenderTarget=!0;const s={width:n,height:n,depth:1},u=[s,s,s,s,s,s];this.texture=new rS(u),this._setTextureOptions(a),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(n,a){this.texture.type=a.type,this.texture.colorSpace=a.colorSpace,this.texture.generateMipmaps=a.generateMipmaps,this.texture.minFilter=a.minFilter,this.texture.magFilter=a.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},u=new fl(5,5,5),f=new Ea({name:"CubemapFromEquirect",uniforms:to(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Wn,blending:rr});f.uniforms.tEquirect.value=a;const h=new qi(u,f),d=a.minFilter;return a.minFilter===Xr&&(a.minFilter=Xi),new vE(1,10,this).update(n,h),a.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(n,a=!0,s=!0,u=!0){const f=n.getRenderTarget();for(let h=0;h<6;h++)n.setRenderTarget(this,h),n.clear(a,s,u);n.setRenderTarget(f)}}class Ju extends ri{constructor(){super(),this.isGroup=!0,this.type="Group"}}const xE={type:"move"};class xd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ju,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ju,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new it,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new it),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ju,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new it,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new it),this._grip}dispatchEvent(n){return this._targetRay!==null&&this._targetRay.dispatchEvent(n),this._grip!==null&&this._grip.dispatchEvent(n),this._hand!==null&&this._hand.dispatchEvent(n),this}connect(n){if(n&&n.hand){const a=this._hand;if(a)for(const s of n.hand.values())this._getHandJoint(a,s)}return this.dispatchEvent({type:"connected",data:n}),this}disconnect(n){return this.dispatchEvent({type:"disconnected",data:n}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(n,a,s){let u=null,f=null,h=null;const d=this._targetRay,g=this._grip,_=this._hand;if(n&&a.session.visibilityState!=="visible-blurred"){if(_&&n.hand){h=!0;for(const U of n.hand.values()){const y=a.getJointPose(U,s),S=this._getHandJoint(_,U);y!==null&&(S.matrix.fromArray(y.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=y.radius),S.visible=y!==null}const v=_.joints["index-finger-tip"],p=_.joints["thumb-tip"],x=v.position.distanceTo(p.position),M=.02,C=.005;_.inputState.pinching&&x>M+C?(_.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:n.handedness,target:this})):!_.inputState.pinching&&x<=M-C&&(_.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:n.handedness,target:this}))}else g!==null&&n.gripSpace&&(f=a.getPose(n.gripSpace,s),f!==null&&(g.matrix.fromArray(f.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,f.linearVelocity?(g.hasLinearVelocity=!0,g.linearVelocity.copy(f.linearVelocity)):g.hasLinearVelocity=!1,f.angularVelocity?(g.hasAngularVelocity=!0,g.angularVelocity.copy(f.angularVelocity)):g.hasAngularVelocity=!1));d!==null&&(u=a.getPose(n.targetRaySpace,s),u===null&&f!==null&&(u=f),u!==null&&(d.matrix.fromArray(u.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,u.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(u.linearVelocity)):d.hasLinearVelocity=!1,u.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(u.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(xE)))}return d!==null&&(d.visible=u!==null),g!==null&&(g.visible=f!==null),_!==null&&(_.visible=h!==null),this}_getHandJoint(n,a){if(n.joints[a.jointName]===void 0){const s=new Ju;s.matrixAutoUpdate=!1,s.visible=!1,n.joints[a.jointName]=s,n.add(s)}return n.joints[a.jointName]}}class yE extends ri{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ma,this.environmentIntensity=1,this.environmentRotation=new Ma,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(n,a){return super.copy(n,a),n.background!==null&&(this.background=n.background.clone()),n.environment!==null&&(this.environment=n.environment.clone()),n.fog!==null&&(this.fog=n.fog.clone()),this.backgroundBlurriness=n.backgroundBlurriness,this.backgroundIntensity=n.backgroundIntensity,this.backgroundRotation.copy(n.backgroundRotation),this.environmentIntensity=n.environmentIntensity,this.environmentRotation.copy(n.environmentRotation),n.overrideMaterial!==null&&(this.overrideMaterial=n.overrideMaterial.clone()),this.matrixAutoUpdate=n.matrixAutoUpdate,this}toJSON(n){const a=super.toJSON(n);return this.fog!==null&&(a.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(a.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(a.object.backgroundIntensity=this.backgroundIntensity),a.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(a.object.environmentIntensity=this.environmentIntensity),a.object.environmentRotation=this.environmentRotation.toArray(),a}}const yd=new it,ME=new it,EE=new me;class Ir{constructor(n=new it(1,0,0),a=0){this.isPlane=!0,this.normal=n,this.constant=a}set(n,a){return this.normal.copy(n),this.constant=a,this}setComponents(n,a,s,u){return this.normal.set(n,a,s),this.constant=u,this}setFromNormalAndCoplanarPoint(n,a){return this.normal.copy(n),this.constant=-a.dot(this.normal),this}setFromCoplanarPoints(n,a,s){const u=yd.subVectors(s,a).cross(ME.subVectors(n,a)).normalize();return this.setFromNormalAndCoplanarPoint(u,n),this}copy(n){return this.normal.copy(n.normal),this.constant=n.constant,this}normalize(){const n=1/this.normal.length();return this.normal.multiplyScalar(n),this.constant*=n,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(n){return this.normal.dot(n)+this.constant}distanceToSphere(n){return this.distanceToPoint(n.center)-n.radius}projectPoint(n,a){return a.copy(n).addScaledVector(this.normal,-this.distanceToPoint(n))}intersectLine(n,a){const s=n.delta(yd),u=this.normal.dot(s);if(u===0)return this.distanceToPoint(n.start)===0?a.copy(n.start):null;const f=-(n.start.dot(this.normal)+this.constant)/u;return f<0||f>1?null:a.copy(n.start).addScaledVector(s,f)}intersectsLine(n){const a=this.distanceToPoint(n.start),s=this.distanceToPoint(n.end);return a<0&&s>0||s<0&&a>0}intersectsBox(n){return n.intersectsPlane(this)}intersectsSphere(n){return n.intersectsPlane(this)}coplanarPoint(n){return n.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(n,a){const s=a||EE.getNormalMatrix(n),u=this.coplanarPoint(yd).applyMatrix4(n),f=this.normal.applyMatrix3(s).normalize();return this.constant=-u.dot(f),this}translate(n){return this.constant-=n.dot(this.normal),this}equals(n){return n.normal.equals(this.normal)&&n.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zr=new Tp,TE=new Le(.5,.5),$u=new it;class sS{constructor(n=new Ir,a=new Ir,s=new Ir,u=new Ir,f=new Ir,h=new Ir){this.planes=[n,a,s,u,f,h]}set(n,a,s,u,f,h){const d=this.planes;return d[0].copy(n),d[1].copy(a),d[2].copy(s),d[3].copy(u),d[4].copy(f),d[5].copy(h),this}copy(n){const a=this.planes;for(let s=0;s<6;s++)a[s].copy(n.planes[s]);return this}setFromProjectionMatrix(n,a=Sa){const s=this.planes,u=n.elements,f=u[0],h=u[1],d=u[2],g=u[3],_=u[4],v=u[5],p=u[6],x=u[7],M=u[8],C=u[9],U=u[10],y=u[11],S=u[12],L=u[13],N=u[14],w=u[15];if(s[0].setComponents(g-f,x-_,y-M,w-S).normalize(),s[1].setComponents(g+f,x+_,y+M,w+S).normalize(),s[2].setComponents(g+h,x+v,y+C,w+L).normalize(),s[3].setComponents(g-h,x-v,y-C,w-L).normalize(),s[4].setComponents(g-d,x-p,y-U,w-N).normalize(),a===Sa)s[5].setComponents(g+d,x+p,y+U,w+N).normalize();else if(a===hc)s[5].setComponents(d,p,U,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+a);return this}intersectsObject(n){if(n.boundingSphere!==void 0)n.boundingSphere===null&&n.computeBoundingSphere(),zr.copy(n.boundingSphere).applyMatrix4(n.matrixWorld);else{const a=n.geometry;a.boundingSphere===null&&a.computeBoundingSphere(),zr.copy(a.boundingSphere).applyMatrix4(n.matrixWorld)}return this.intersectsSphere(zr)}intersectsSprite(n){zr.center.set(0,0,0);const a=TE.distanceTo(n.center);return zr.radius=.7071067811865476+a,zr.applyMatrix4(n.matrixWorld),this.intersectsSphere(zr)}intersectsSphere(n){const a=this.planes,s=n.center,u=-n.radius;for(let f=0;f<6;f++)if(a[f].distanceToPoint(s)<u)return!1;return!0}intersectsBox(n){const a=this.planes;for(let s=0;s<6;s++){const u=a[s];if($u.x=u.normal.x>0?n.max.x:n.min.x,$u.y=u.normal.y>0?n.max.y:n.min.y,$u.z=u.normal.z>0?n.max.z:n.min.z,u.distanceToPoint($u)<0)return!1}return!0}containsPoint(n){const a=this.planes;for(let s=0;s<6;s++)if(a[s].distanceToPoint(n)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class oS extends jn{constructor(n,a,s=qr,u,f,h,d=wi,g=wi,_,v=rl,p=1){if(v!==rl&&v!==sl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:n,height:a,depth:p};super(x,u,f,h,d,g,v,s,_),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(n){return super.copy(n),this.source=new Ep(Object.assign({},n.image)),this.compareFunction=n.compareFunction,this}toJSON(n){const a=super.toJSON(n);return this.compareFunction!==null&&(a.compareFunction=this.compareFunction),a}}class bp extends lr{constructor(n=[],a=[],s=1,u=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:n,indices:a,radius:s,detail:u};const f=[],h=[];d(u),_(s),v(),this.setAttribute("position",new Yi(f,3)),this.setAttribute("normal",new Yi(f.slice(),3)),this.setAttribute("uv",new Yi(h,2)),u===0?this.computeVertexNormals():this.normalizeNormals();function d(L){const N=new it,w=new it,X=new it;for(let B=0;B<a.length;B+=3)M(a[B+0],N),M(a[B+1],w),M(a[B+2],X),g(N,w,X,L)}function g(L,N,w,X){const B=X+1,O=[];for(let I=0;I<=B;I++){O[I]=[];const D=L.clone().lerp(w,I/B),b=N.clone().lerp(w,I/B),F=B-I;for(let ot=0;ot<=F;ot++)ot===0&&I===B?O[I][ot]=D:O[I][ot]=D.clone().lerp(b,ot/F)}for(let I=0;I<B;I++)for(let D=0;D<2*(B-I)-1;D++){const b=Math.floor(D/2);D%2===0?(x(O[I][b+1]),x(O[I+1][b]),x(O[I][b])):(x(O[I][b+1]),x(O[I+1][b+1]),x(O[I+1][b]))}}function _(L){const N=new it;for(let w=0;w<f.length;w+=3)N.x=f[w+0],N.y=f[w+1],N.z=f[w+2],N.normalize().multiplyScalar(L),f[w+0]=N.x,f[w+1]=N.y,f[w+2]=N.z}function v(){const L=new it;for(let N=0;N<f.length;N+=3){L.x=f[N+0],L.y=f[N+1],L.z=f[N+2];const w=y(L)/2/Math.PI+.5,X=S(L)/Math.PI+.5;h.push(w,1-X)}C(),p()}function p(){for(let L=0;L<h.length;L+=6){const N=h[L+0],w=h[L+2],X=h[L+4],B=Math.max(N,w,X),O=Math.min(N,w,X);B>.9&&O<.1&&(N<.2&&(h[L+0]+=1),w<.2&&(h[L+2]+=1),X<.2&&(h[L+4]+=1))}}function x(L){f.push(L.x,L.y,L.z)}function M(L,N){const w=L*3;N.x=n[w+0],N.y=n[w+1],N.z=n[w+2]}function C(){const L=new it,N=new it,w=new it,X=new it,B=new Le,O=new Le,I=new Le;for(let D=0,b=0;D<f.length;D+=9,b+=6){L.set(f[D+0],f[D+1],f[D+2]),N.set(f[D+3],f[D+4],f[D+5]),w.set(f[D+6],f[D+7],f[D+8]),B.set(h[b+0],h[b+1]),O.set(h[b+2],h[b+3]),I.set(h[b+4],h[b+5]),X.copy(L).add(N).add(w).divideScalar(3);const F=y(X);U(B,b+0,L,F),U(O,b+2,N,F),U(I,b+4,w,F)}}function U(L,N,w,X){X<0&&L.x===1&&(h[N]=L.x-1),w.x===0&&w.z===0&&(h[N]=X/2/Math.PI+.5)}function y(L){return Math.atan2(L.z,-L.x)}function S(L){return Math.atan2(-L.y,Math.sqrt(L.x*L.x+L.z*L.z))}}copy(n){return super.copy(n),this.parameters=Object.assign({},n.parameters),this}static fromJSON(n){return new bp(n.vertices,n.indices,n.radius,n.details)}}class Ap extends bp{constructor(n=1,a=0){const s=(1+Math.sqrt(5))/2,u=[-1,s,0,1,s,0,-1,-s,0,1,-s,0,0,-1,s,0,1,s,0,-1,-s,0,1,-s,s,0,-1,s,0,1,-s,0,-1,-s,0,1],f=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(u,f,n,a),this.type="IcosahedronGeometry",this.parameters={radius:n,detail:a}}static fromJSON(n){return new Ap(n.radius,n.detail)}}class gc extends lr{constructor(n=1,a=1,s=1,u=1){super(),this.type="PlaneGeometry",this.parameters={width:n,height:a,widthSegments:s,heightSegments:u};const f=n/2,h=a/2,d=Math.floor(s),g=Math.floor(u),_=d+1,v=g+1,p=n/d,x=a/g,M=[],C=[],U=[],y=[];for(let S=0;S<v;S++){const L=S*x-h;for(let N=0;N<_;N++){const w=N*p-f;C.push(w,-L,0),U.push(0,0,1),y.push(N/d),y.push(1-S/g)}}for(let S=0;S<g;S++)for(let L=0;L<d;L++){const N=L+_*S,w=L+_*(S+1),X=L+1+_*(S+1),B=L+1+_*S;M.push(N,w,B),M.push(w,X,B)}this.setIndex(M),this.setAttribute("position",new Yi(C,3)),this.setAttribute("normal",new Yi(U,3)),this.setAttribute("uv",new Yi(y,2))}copy(n){return super.copy(n),this.parameters=Object.assign({},n.parameters),this}static fromJSON(n){return new gc(n.width,n.height,n.widthSegments,n.heightSegments)}}class bE extends mc{constructor(n){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=OM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(n)}copy(n){return super.copy(n),this.depthPacking=n.depthPacking,this.map=n.map,this.alphaMap=n.alphaMap,this.displacementMap=n.displacementMap,this.displacementScale=n.displacementScale,this.displacementBias=n.displacementBias,this.wireframe=n.wireframe,this.wireframeLinewidth=n.wireframeLinewidth,this}}class AE extends mc{constructor(n){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(n)}copy(n){return super.copy(n),this.map=n.map,this.alphaMap=n.alphaMap,this.displacementMap=n.displacementMap,this.displacementScale=n.displacementScale,this.displacementBias=n.displacementBias,this}}class RE extends aS{constructor(n=-1,a=1,s=1,u=-1,f=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=n,this.right=a,this.top=s,this.bottom=u,this.near=f,this.far=h,this.updateProjectionMatrix()}copy(n,a){return super.copy(n,a),this.left=n.left,this.right=n.right,this.top=n.top,this.bottom=n.bottom,this.near=n.near,this.far=n.far,this.zoom=n.zoom,this.view=n.view===null?null:Object.assign({},n.view),this}setViewOffset(n,a,s,u,f,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=n,this.view.fullHeight=a,this.view.offsetX=s,this.view.offsetY=u,this.view.width=f,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const n=(this.right-this.left)/(2*this.zoom),a=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,u=(this.top+this.bottom)/2;let f=s-n,h=s+n,d=u+a,g=u-a;if(this.view!==null&&this.view.enabled){const _=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;f+=_*this.view.offsetX,h=f+_*this.view.width,d-=v*this.view.offsetY,g=d-v*this.view.height}this.projectionMatrix.makeOrthographic(f,h,d,g,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(n){const a=super.toJSON(n);return a.object.zoom=this.zoom,a.object.left=this.left,a.object.right=this.right,a.object.top=this.top,a.object.bottom=this.bottom,a.object.near=this.near,a.object.far=this.far,this.view!==null&&(a.object.view=Object.assign({},this.view)),a}}class CE extends _i{constructor(n=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=n}}function d0(o,n,a,s){const u=wE(s);switch(a){case q0:return o*n;case Y0:return o*n/u.components*u.byteLength;case xp:return o*n/u.components*u.byteLength;case W0:return o*n*2/u.components*u.byteLength;case yp:return o*n*2/u.components*u.byteLength;case k0:return o*n*3/u.components*u.byteLength;case Ci:return o*n*4/u.components*u.byteLength;case Mp:return o*n*4/u.components*u.byteLength;case rc:case sc:return Math.floor((o+3)/4)*Math.floor((n+3)/4)*8;case oc:case lc:return Math.floor((o+3)/4)*Math.floor((n+3)/4)*16;case Vd:case qd:return Math.max(o,16)*Math.max(n,8)/4;case Gd:case Xd:return Math.max(o,8)*Math.max(n,8)/2;case kd:case Yd:return Math.floor((o+3)/4)*Math.floor((n+3)/4)*8;case Wd:return Math.floor((o+3)/4)*Math.floor((n+3)/4)*16;case jd:return Math.floor((o+3)/4)*Math.floor((n+3)/4)*16;case Zd:return Math.floor((o+4)/5)*Math.floor((n+3)/4)*16;case Kd:return Math.floor((o+4)/5)*Math.floor((n+4)/5)*16;case Qd:return Math.floor((o+5)/6)*Math.floor((n+4)/5)*16;case Jd:return Math.floor((o+5)/6)*Math.floor((n+5)/6)*16;case $d:return Math.floor((o+7)/8)*Math.floor((n+4)/5)*16;case tp:return Math.floor((o+7)/8)*Math.floor((n+5)/6)*16;case ep:return Math.floor((o+7)/8)*Math.floor((n+7)/8)*16;case np:return Math.floor((o+9)/10)*Math.floor((n+4)/5)*16;case ip:return Math.floor((o+9)/10)*Math.floor((n+5)/6)*16;case ap:return Math.floor((o+9)/10)*Math.floor((n+7)/8)*16;case rp:return Math.floor((o+9)/10)*Math.floor((n+9)/10)*16;case sp:return Math.floor((o+11)/12)*Math.floor((n+9)/10)*16;case op:return Math.floor((o+11)/12)*Math.floor((n+11)/12)*16;case uc:case lp:case up:return Math.ceil(o/4)*Math.ceil(n/4)*16;case j0:case cp:return Math.ceil(o/4)*Math.ceil(n/4)*8;case fp:case hp:return Math.ceil(o/4)*Math.ceil(n/4)*16}throw new Error(`Unable to determine texture byte length for ${a} format.`)}function wE(o){switch(o){case ya:case G0:return{byteLength:1,components:1};case il:case V0:case ol:return{byteLength:2,components:1};case vp:case Sp:return{byteLength:2,components:4};case qr:case _p:case va:return{byteLength:4,components:1};case X0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gp);function lS(){let o=null,n=!1,a=null,s=null;function u(f,h){a(f,h),s=o.requestAnimationFrame(u)}return{start:function(){n!==!0&&a!==null&&(s=o.requestAnimationFrame(u),n=!0)},stop:function(){o.cancelAnimationFrame(s),n=!1},setAnimationLoop:function(f){a=f},setContext:function(f){o=f}}}function DE(o){const n=new WeakMap;function a(d,g){const _=d.array,v=d.usage,p=_.byteLength,x=o.createBuffer();o.bindBuffer(g,x),o.bufferData(g,_,v),d.onUploadCallback();let M;if(_ instanceof Float32Array)M=o.FLOAT;else if(typeof Float16Array<"u"&&_ instanceof Float16Array)M=o.HALF_FLOAT;else if(_ instanceof Uint16Array)d.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(_ instanceof Int16Array)M=o.SHORT;else if(_ instanceof Uint32Array)M=o.UNSIGNED_INT;else if(_ instanceof Int32Array)M=o.INT;else if(_ instanceof Int8Array)M=o.BYTE;else if(_ instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(_ instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+_);return{buffer:x,type:M,bytesPerElement:_.BYTES_PER_ELEMENT,version:d.version,size:p}}function s(d,g,_){const v=g.array,p=g.updateRanges;if(o.bindBuffer(_,d),p.length===0)o.bufferSubData(_,0,v);else{p.sort((M,C)=>M.start-C.start);let x=0;for(let M=1;M<p.length;M++){const C=p[x],U=p[M];U.start<=C.start+C.count+1?C.count=Math.max(C.count,U.start+U.count-C.start):(++x,p[x]=U)}p.length=x+1;for(let M=0,C=p.length;M<C;M++){const U=p[M];o.bufferSubData(_,U.start*v.BYTES_PER_ELEMENT,v,U.start,U.count)}g.clearUpdateRanges()}g.onUploadCallback()}function u(d){return d.isInterleavedBufferAttribute&&(d=d.data),n.get(d)}function f(d){d.isInterleavedBufferAttribute&&(d=d.data);const g=n.get(d);g&&(o.deleteBuffer(g.buffer),n.delete(d))}function h(d,g){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=n.get(d);(!v||v.version<d.version)&&n.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const _=n.get(d);if(_===void 0)n.set(d,a(d,g));else if(_.version<d.version){if(_.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(_.buffer,d,g),_.version=d.version}}return{get:u,remove:f,update:h}}var UE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,NE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,LE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,OE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,PE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,BE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,IE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,FE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,HE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,GE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,VE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,XE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,qE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,kE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,YE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,WE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ZE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,KE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,QE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,JE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,$E=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,tT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,eT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,nT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,iT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,aT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,oT="gl_FragColor = linearToOutputTexel( gl_FragColor );",lT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,uT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,cT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,fT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,hT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,pT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_T=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ST=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,MT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ET=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,TT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,AT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,RT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,CT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,wT=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,DT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,UT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,NT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,LT=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,OT=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zT=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,PT=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,BT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,IT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,FT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,HT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,GT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,VT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,XT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,YT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,WT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ZT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,KT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,QT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,JT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$T=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,t1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,e1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,n1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,i1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,a1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,r1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,s1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,o1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,l1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,u1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,c1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,f1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,h1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,d1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,p1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,m1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,g1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,v1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,S1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,x1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,y1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,M1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,E1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,T1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,b1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,A1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,R1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,C1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,w1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const D1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,U1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,N1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,L1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,O1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,z1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,P1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,B1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,I1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,F1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,H1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,G1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,V1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,X1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,q1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,k1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Y1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,W1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,j1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Z1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,K1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Q1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,J1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,eb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ib=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ab=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,rb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ob=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,lb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ub=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ge={alphahash_fragment:UE,alphahash_pars_fragment:NE,alphamap_fragment:LE,alphamap_pars_fragment:OE,alphatest_fragment:zE,alphatest_pars_fragment:PE,aomap_fragment:BE,aomap_pars_fragment:IE,batching_pars_vertex:FE,batching_vertex:HE,begin_vertex:GE,beginnormal_vertex:VE,bsdfs:XE,iridescence_fragment:qE,bumpmap_pars_fragment:kE,clipping_planes_fragment:YE,clipping_planes_pars_fragment:WE,clipping_planes_pars_vertex:jE,clipping_planes_vertex:ZE,color_fragment:KE,color_pars_fragment:QE,color_pars_vertex:JE,color_vertex:$E,common:tT,cube_uv_reflection_fragment:eT,defaultnormal_vertex:nT,displacementmap_pars_vertex:iT,displacementmap_vertex:aT,emissivemap_fragment:rT,emissivemap_pars_fragment:sT,colorspace_fragment:oT,colorspace_pars_fragment:lT,envmap_fragment:uT,envmap_common_pars_fragment:cT,envmap_pars_fragment:fT,envmap_pars_vertex:hT,envmap_physical_pars_fragment:ET,envmap_vertex:dT,fog_vertex:pT,fog_pars_vertex:mT,fog_fragment:gT,fog_pars_fragment:_T,gradientmap_pars_fragment:vT,lightmap_pars_fragment:ST,lights_lambert_fragment:xT,lights_lambert_pars_fragment:yT,lights_pars_begin:MT,lights_toon_fragment:TT,lights_toon_pars_fragment:bT,lights_phong_fragment:AT,lights_phong_pars_fragment:RT,lights_physical_fragment:CT,lights_physical_pars_fragment:wT,lights_fragment_begin:DT,lights_fragment_maps:UT,lights_fragment_end:NT,logdepthbuf_fragment:LT,logdepthbuf_pars_fragment:OT,logdepthbuf_pars_vertex:zT,logdepthbuf_vertex:PT,map_fragment:BT,map_pars_fragment:IT,map_particle_fragment:FT,map_particle_pars_fragment:HT,metalnessmap_fragment:GT,metalnessmap_pars_fragment:VT,morphinstance_vertex:XT,morphcolor_vertex:qT,morphnormal_vertex:kT,morphtarget_pars_vertex:YT,morphtarget_vertex:WT,normal_fragment_begin:jT,normal_fragment_maps:ZT,normal_pars_fragment:KT,normal_pars_vertex:QT,normal_vertex:JT,normalmap_pars_fragment:$T,clearcoat_normal_fragment_begin:t1,clearcoat_normal_fragment_maps:e1,clearcoat_pars_fragment:n1,iridescence_pars_fragment:i1,opaque_fragment:a1,packing:r1,premultiplied_alpha_fragment:s1,project_vertex:o1,dithering_fragment:l1,dithering_pars_fragment:u1,roughnessmap_fragment:c1,roughnessmap_pars_fragment:f1,shadowmap_pars_fragment:h1,shadowmap_pars_vertex:d1,shadowmap_vertex:p1,shadowmask_pars_fragment:m1,skinbase_vertex:g1,skinning_pars_vertex:_1,skinning_vertex:v1,skinnormal_vertex:S1,specularmap_fragment:x1,specularmap_pars_fragment:y1,tonemapping_fragment:M1,tonemapping_pars_fragment:E1,transmission_fragment:T1,transmission_pars_fragment:b1,uv_pars_fragment:A1,uv_pars_vertex:R1,uv_vertex:C1,worldpos_vertex:w1,background_vert:D1,background_frag:U1,backgroundCube_vert:N1,backgroundCube_frag:L1,cube_vert:O1,cube_frag:z1,depth_vert:P1,depth_frag:B1,distanceRGBA_vert:I1,distanceRGBA_frag:F1,equirect_vert:H1,equirect_frag:G1,linedashed_vert:V1,linedashed_frag:X1,meshbasic_vert:q1,meshbasic_frag:k1,meshlambert_vert:Y1,meshlambert_frag:W1,meshmatcap_vert:j1,meshmatcap_frag:Z1,meshnormal_vert:K1,meshnormal_frag:Q1,meshphong_vert:J1,meshphong_frag:$1,meshphysical_vert:tb,meshphysical_frag:eb,meshtoon_vert:nb,meshtoon_frag:ib,points_vert:ab,points_frag:rb,shadow_vert:sb,shadow_frag:ob,sprite_vert:lb,sprite_frag:ub},Pt={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new me},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new me}},envmap:{envMap:{value:null},envMapRotation:{value:new me},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new me}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new me}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new me},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new me},normalScale:{value:new Le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new me},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new me}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new me}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new me}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0},uvTransform:{value:new me}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new Le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new me},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0}}},Vi={basic:{uniforms:Hn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.fog]),vertexShader:ge.meshbasic_vert,fragmentShader:ge.meshbasic_frag},lambert:{uniforms:Hn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new Re(0)}}]),vertexShader:ge.meshlambert_vert,fragmentShader:ge.meshlambert_frag},phong:{uniforms:Hn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:ge.meshphong_vert,fragmentShader:ge.meshphong_frag},standard:{uniforms:Hn([Pt.common,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.roughnessmap,Pt.metalnessmap,Pt.fog,Pt.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag},toon:{uniforms:Hn([Pt.common,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.gradientmap,Pt.fog,Pt.lights,{emissive:{value:new Re(0)}}]),vertexShader:ge.meshtoon_vert,fragmentShader:ge.meshtoon_frag},matcap:{uniforms:Hn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,{matcap:{value:null}}]),vertexShader:ge.meshmatcap_vert,fragmentShader:ge.meshmatcap_frag},points:{uniforms:Hn([Pt.points,Pt.fog]),vertexShader:ge.points_vert,fragmentShader:ge.points_frag},dashed:{uniforms:Hn([Pt.common,Pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ge.linedashed_vert,fragmentShader:ge.linedashed_frag},depth:{uniforms:Hn([Pt.common,Pt.displacementmap]),vertexShader:ge.depth_vert,fragmentShader:ge.depth_frag},normal:{uniforms:Hn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,{opacity:{value:1}}]),vertexShader:ge.meshnormal_vert,fragmentShader:ge.meshnormal_frag},sprite:{uniforms:Hn([Pt.sprite,Pt.fog]),vertexShader:ge.sprite_vert,fragmentShader:ge.sprite_frag},background:{uniforms:{uvTransform:{value:new me},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ge.background_vert,fragmentShader:ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new me}},vertexShader:ge.backgroundCube_vert,fragmentShader:ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ge.cube_vert,fragmentShader:ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ge.equirect_vert,fragmentShader:ge.equirect_frag},distanceRGBA:{uniforms:Hn([Pt.common,Pt.displacementmap,{referencePosition:{value:new it},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ge.distanceRGBA_vert,fragmentShader:ge.distanceRGBA_frag},shadow:{uniforms:Hn([Pt.lights,Pt.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:ge.shadow_vert,fragmentShader:ge.shadow_frag}};Vi.physical={uniforms:Hn([Vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new me},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new me},clearcoatNormalScale:{value:new Le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new me},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new me},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new me},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new me},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new me},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new me},transmissionSamplerSize:{value:new Le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new me},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new me},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new me},anisotropyVector:{value:new Le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new me}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag};const tc={r:0,b:0,g:0},Pr=new Ma,cb=new dn;function fb(o,n,a,s,u,f,h){const d=new Re(0);let g=f===!0?0:1,_,v,p=null,x=0,M=null;function C(N){let w=N.isScene===!0?N.background:null;return w&&w.isTexture&&(w=(N.backgroundBlurriness>0?a:n).get(w)),w}function U(N){let w=!1;const X=C(N);X===null?S(d,g):X&&X.isColor&&(S(X,1),w=!0);const B=o.xr.getEnvironmentBlendMode();B==="additive"?s.buffers.color.setClear(0,0,0,1,h):B==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(o.autoClear||w)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function y(N,w){const X=C(w);X&&(X.isCubeTexture||X.mapping===pc)?(v===void 0&&(v=new qi(new fl(1,1,1),new Ea({name:"BackgroundCubeMaterial",uniforms:to(Vi.backgroundCube.uniforms),vertexShader:Vi.backgroundCube.vertexShader,fragmentShader:Vi.backgroundCube.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(B,O,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),u.update(v)),Pr.copy(w.backgroundRotation),Pr.x*=-1,Pr.y*=-1,Pr.z*=-1,X.isCubeTexture&&X.isRenderTargetTexture===!1&&(Pr.y*=-1,Pr.z*=-1),v.material.uniforms.envMap.value=X,v.material.uniforms.flipEnvMap.value=X.isCubeTexture&&X.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(cb.makeRotationFromEuler(Pr)),v.material.toneMapped=De.getTransfer(X.colorSpace)!==Ve,(p!==X||x!==X.version||M!==o.toneMapping)&&(v.material.needsUpdate=!0,p=X,x=X.version,M=o.toneMapping),v.layers.enableAll(),N.unshift(v,v.geometry,v.material,0,0,null)):X&&X.isTexture&&(_===void 0&&(_=new qi(new gc(2,2),new Ea({name:"BackgroundMaterial",uniforms:to(Vi.background.uniforms),vertexShader:Vi.background.vertexShader,fragmentShader:Vi.background.fragmentShader,side:or,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),Object.defineProperty(_.material,"map",{get:function(){return this.uniforms.t2D.value}}),u.update(_)),_.material.uniforms.t2D.value=X,_.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,_.material.toneMapped=De.getTransfer(X.colorSpace)!==Ve,X.matrixAutoUpdate===!0&&X.updateMatrix(),_.material.uniforms.uvTransform.value.copy(X.matrix),(p!==X||x!==X.version||M!==o.toneMapping)&&(_.material.needsUpdate=!0,p=X,x=X.version,M=o.toneMapping),_.layers.enableAll(),N.unshift(_,_.geometry,_.material,0,0,null))}function S(N,w){N.getRGB(tc,iS(o)),s.buffers.color.setClear(tc.r,tc.g,tc.b,w,h)}function L(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0)}return{getClearColor:function(){return d},setClearColor:function(N,w=1){d.set(N),g=w,S(d,g)},getClearAlpha:function(){return g},setClearAlpha:function(N){g=N,S(d,g)},render:U,addToRenderList:y,dispose:L}}function hb(o,n){const a=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},u=x(null);let f=u,h=!1;function d(b,F,ot,st,mt){let ft=!1;const Y=p(st,ot,F);f!==Y&&(f=Y,_(f.object)),ft=M(b,st,ot,mt),ft&&C(b,st,ot,mt),mt!==null&&n.update(mt,o.ELEMENT_ARRAY_BUFFER),(ft||h)&&(h=!1,w(b,F,ot,st),mt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,n.get(mt).buffer))}function g(){return o.createVertexArray()}function _(b){return o.bindVertexArray(b)}function v(b){return o.deleteVertexArray(b)}function p(b,F,ot){const st=ot.wireframe===!0;let mt=s[b.id];mt===void 0&&(mt={},s[b.id]=mt);let ft=mt[F.id];ft===void 0&&(ft={},mt[F.id]=ft);let Y=ft[st];return Y===void 0&&(Y=x(g()),ft[st]=Y),Y}function x(b){const F=[],ot=[],st=[];for(let mt=0;mt<a;mt++)F[mt]=0,ot[mt]=0,st[mt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:ot,attributeDivisors:st,object:b,attributes:{},index:null}}function M(b,F,ot,st){const mt=f.attributes,ft=F.attributes;let Y=0;const nt=ot.getAttributes();for(const K in nt)if(nt[K].location>=0){const yt=mt[K];let Ht=ft[K];if(Ht===void 0&&(K==="instanceMatrix"&&b.instanceMatrix&&(Ht=b.instanceMatrix),K==="instanceColor"&&b.instanceColor&&(Ht=b.instanceColor)),yt===void 0||yt.attribute!==Ht||Ht&&yt.data!==Ht.data)return!0;Y++}return f.attributesNum!==Y||f.index!==st}function C(b,F,ot,st){const mt={},ft=F.attributes;let Y=0;const nt=ot.getAttributes();for(const K in nt)if(nt[K].location>=0){let yt=ft[K];yt===void 0&&(K==="instanceMatrix"&&b.instanceMatrix&&(yt=b.instanceMatrix),K==="instanceColor"&&b.instanceColor&&(yt=b.instanceColor));const Ht={};Ht.attribute=yt,yt&&yt.data&&(Ht.data=yt.data),mt[K]=Ht,Y++}f.attributes=mt,f.attributesNum=Y,f.index=st}function U(){const b=f.newAttributes;for(let F=0,ot=b.length;F<ot;F++)b[F]=0}function y(b){S(b,0)}function S(b,F){const ot=f.newAttributes,st=f.enabledAttributes,mt=f.attributeDivisors;ot[b]=1,st[b]===0&&(o.enableVertexAttribArray(b),st[b]=1),mt[b]!==F&&(o.vertexAttribDivisor(b,F),mt[b]=F)}function L(){const b=f.newAttributes,F=f.enabledAttributes;for(let ot=0,st=F.length;ot<st;ot++)F[ot]!==b[ot]&&(o.disableVertexAttribArray(ot),F[ot]=0)}function N(b,F,ot,st,mt,ft,Y){Y===!0?o.vertexAttribIPointer(b,F,ot,mt,ft):o.vertexAttribPointer(b,F,ot,st,mt,ft)}function w(b,F,ot,st){U();const mt=st.attributes,ft=ot.getAttributes(),Y=F.defaultAttributeValues;for(const nt in ft){const K=ft[nt];if(K.location>=0){let vt=mt[nt];if(vt===void 0&&(nt==="instanceMatrix"&&b.instanceMatrix&&(vt=b.instanceMatrix),nt==="instanceColor"&&b.instanceColor&&(vt=b.instanceColor)),vt!==void 0){const yt=vt.normalized,Ht=vt.itemSize,ee=n.get(vt);if(ee===void 0)continue;const Et=ee.buffer,A=ee.type,q=ee.bytesPerElement,ht=A===o.INT||A===o.UNSIGNED_INT||vt.gpuType===_p;if(vt.isInterleavedBufferAttribute){const lt=vt.data,Tt=lt.stride,Gt=vt.offset;if(lt.isInstancedInterleavedBuffer){for(let Rt=0;Rt<K.locationSize;Rt++)S(K.location+Rt,lt.meshPerAttribute);b.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let Rt=0;Rt<K.locationSize;Rt++)y(K.location+Rt);o.bindBuffer(o.ARRAY_BUFFER,Et);for(let Rt=0;Rt<K.locationSize;Rt++)N(K.location+Rt,Ht/K.locationSize,A,yt,Tt*q,(Gt+Ht/K.locationSize*Rt)*q,ht)}else{if(vt.isInstancedBufferAttribute){for(let lt=0;lt<K.locationSize;lt++)S(K.location+lt,vt.meshPerAttribute);b.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let lt=0;lt<K.locationSize;lt++)y(K.location+lt);o.bindBuffer(o.ARRAY_BUFFER,Et);for(let lt=0;lt<K.locationSize;lt++)N(K.location+lt,Ht/K.locationSize,A,yt,Ht*q,Ht/K.locationSize*lt*q,ht)}}else if(Y!==void 0){const yt=Y[nt];if(yt!==void 0)switch(yt.length){case 2:o.vertexAttrib2fv(K.location,yt);break;case 3:o.vertexAttrib3fv(K.location,yt);break;case 4:o.vertexAttrib4fv(K.location,yt);break;default:o.vertexAttrib1fv(K.location,yt)}}}}L()}function X(){I();for(const b in s){const F=s[b];for(const ot in F){const st=F[ot];for(const mt in st)v(st[mt].object),delete st[mt];delete F[ot]}delete s[b]}}function B(b){if(s[b.id]===void 0)return;const F=s[b.id];for(const ot in F){const st=F[ot];for(const mt in st)v(st[mt].object),delete st[mt];delete F[ot]}delete s[b.id]}function O(b){for(const F in s){const ot=s[F];if(ot[b.id]===void 0)continue;const st=ot[b.id];for(const mt in st)v(st[mt].object),delete st[mt];delete ot[b.id]}}function I(){D(),h=!0,f!==u&&(f=u,_(f.object))}function D(){u.geometry=null,u.program=null,u.wireframe=!1}return{setup:d,reset:I,resetDefaultState:D,dispose:X,releaseStatesOfGeometry:B,releaseStatesOfProgram:O,initAttributes:U,enableAttribute:y,disableUnusedAttributes:L}}function db(o,n,a){let s;function u(_){s=_}function f(_,v){o.drawArrays(s,_,v),a.update(v,s,1)}function h(_,v,p){p!==0&&(o.drawArraysInstanced(s,_,v,p),a.update(v,s,p))}function d(_,v,p){if(p===0)return;n.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,_,0,v,0,p);let M=0;for(let C=0;C<p;C++)M+=v[C];a.update(M,s,1)}function g(_,v,p,x){if(p===0)return;const M=n.get("WEBGL_multi_draw");if(M===null)for(let C=0;C<_.length;C++)h(_[C],v[C],x[C]);else{M.multiDrawArraysInstancedWEBGL(s,_,0,v,0,x,0,p);let C=0;for(let U=0;U<p;U++)C+=v[U]*x[U];a.update(C,s,1)}}this.setMode=u,this.render=f,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=g}function pb(o,n,a,s){let u;function f(){if(u!==void 0)return u;if(n.has("EXT_texture_filter_anisotropic")===!0){const O=n.get("EXT_texture_filter_anisotropic");u=o.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else u=0;return u}function h(O){return!(O!==Ci&&s.convert(O)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(O){const I=O===ol&&(n.has("EXT_color_buffer_half_float")||n.has("EXT_color_buffer_float"));return!(O!==ya&&s.convert(O)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==va&&!I)}function g(O){if(O==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let _=a.precision!==void 0?a.precision:"highp";const v=g(_);v!==_&&(console.warn("THREE.WebGLRenderer:",_,"not supported, using",v,"instead."),_=v);const p=a.logarithmicDepthBuffer===!0,x=a.reverseDepthBuffer===!0&&n.has("EXT_clip_control"),M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),C=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),U=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),S=o.getParameter(o.MAX_VERTEX_ATTRIBS),L=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),N=o.getParameter(o.MAX_VARYING_VECTORS),w=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),X=C>0,B=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:f,getMaxPrecision:g,textureFormatReadable:h,textureTypeReadable:d,precision:_,logarithmicDepthBuffer:p,reverseDepthBuffer:x,maxTextures:M,maxVertexTextures:C,maxTextureSize:U,maxCubemapSize:y,maxAttributes:S,maxVertexUniforms:L,maxVaryings:N,maxFragmentUniforms:w,vertexTextures:X,maxSamples:B}}function mb(o){const n=this;let a=null,s=0,u=!1,f=!1;const h=new Ir,d=new me,g={value:null,needsUpdate:!1};this.uniform=g,this.numPlanes=0,this.numIntersection=0,this.init=function(p,x){const M=p.length!==0||x||s!==0||u;return u=x,s=p.length,M},this.beginShadows=function(){f=!0,v(null)},this.endShadows=function(){f=!1},this.setGlobalState=function(p,x){a=v(p,x,0)},this.setState=function(p,x,M){const C=p.clippingPlanes,U=p.clipIntersection,y=p.clipShadows,S=o.get(p);if(!u||C===null||C.length===0||f&&!y)f?v(null):_();else{const L=f?0:s,N=L*4;let w=S.clippingState||null;g.value=w,w=v(C,x,N,M);for(let X=0;X!==N;++X)w[X]=a[X];S.clippingState=w,this.numIntersection=U?this.numPlanes:0,this.numPlanes+=L}};function _(){g.value!==a&&(g.value=a,g.needsUpdate=s>0),n.numPlanes=s,n.numIntersection=0}function v(p,x,M,C){const U=p!==null?p.length:0;let y=null;if(U!==0){if(y=g.value,C!==!0||y===null){const S=M+U*4,L=x.matrixWorldInverse;d.getNormalMatrix(L),(y===null||y.length<S)&&(y=new Float32Array(S));for(let N=0,w=M;N!==U;++N,w+=4)h.copy(p[N]).applyMatrix4(L,d),h.normal.toArray(y,w),y[w+3]=h.constant}g.value=y,g.needsUpdate=!0}return n.numPlanes=U,n.numIntersection=0,y}}function gb(o){let n=new WeakMap;function a(h,d){return d===Bd?h.mapping=Qs:d===Id&&(h.mapping=Js),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===Bd||d===Id)if(n.has(h)){const g=n.get(h).texture;return a(g,h.mapping)}else{const g=h.image;if(g&&g.height>0){const _=new SE(g.height);return _.fromEquirectangularTexture(o,h),n.set(h,_),h.addEventListener("dispose",u),a(_.texture,h.mapping)}else return null}}return h}function u(h){const d=h.target;d.removeEventListener("dispose",u);const g=n.get(d);g!==void 0&&(n.delete(d),g.dispose())}function f(){n=new WeakMap}return{get:s,dispose:f}}const Ys=4,p0=[.125,.215,.35,.446,.526,.582],Gr=20,Md=new RE,m0=new Re;let Ed=null,Td=0,bd=0,Ad=!1;const Fr=(1+Math.sqrt(5))/2,ks=1/Fr,g0=[new it(-Fr,ks,0),new it(Fr,ks,0),new it(-ks,0,Fr),new it(ks,0,Fr),new it(0,Fr,-ks),new it(0,Fr,ks),new it(-1,1,-1),new it(1,1,-1),new it(-1,1,1),new it(1,1,1)],_b=new it;class _0{constructor(n){this._renderer=n,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(n,a=0,s=.1,u=100,f={}){const{size:h=256,position:d=_b}=f;Ed=this._renderer.getRenderTarget(),Td=this._renderer.getActiveCubeFace(),bd=this._renderer.getActiveMipmapLevel(),Ad=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const g=this._allocateTargets();return g.depthBuffer=!0,this._sceneToCubeUV(n,s,u,g,d),a>0&&this._blur(g,0,0,a),this._applyPMREM(g),this._cleanup(g),g}fromEquirectangular(n,a=null){return this._fromTexture(n,a)}fromCubemap(n,a=null){return this._fromTexture(n,a)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=x0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=S0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(n){this._lodMax=Math.floor(Math.log2(n)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let n=0;n<this._lodPlanes.length;n++)this._lodPlanes[n].dispose()}_cleanup(n){this._renderer.setRenderTarget(Ed,Td,bd),this._renderer.xr.enabled=Ad,n.scissorTest=!1,ec(n,0,0,n.width,n.height)}_fromTexture(n,a){n.mapping===Qs||n.mapping===Js?this._setSize(n.image.length===0?16:n.image[0].width||n.image[0].image.width):this._setSize(n.image.width/4),Ed=this._renderer.getRenderTarget(),Td=this._renderer.getActiveCubeFace(),bd=this._renderer.getActiveMipmapLevel(),Ad=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=a||this._allocateTargets();return this._textureToCubeUV(n,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const n=3*Math.max(this._cubeSize,112),a=4*this._cubeSize,s={magFilter:Xi,minFilter:Xi,generateMipmaps:!1,type:ol,format:Ci,colorSpace:$s,depthBuffer:!1},u=v0(n,a,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==n||this._pingPongRenderTarget.height!==a){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=v0(n,a,s);const{_lodMax:f}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=vb(f)),this._blurMaterial=Sb(f,n,a)}return u}_compileMaterial(n){const a=new qi(this._lodPlanes[0],n);this._renderer.compile(a,Md)}_sceneToCubeUV(n,a,s,u,f){const g=new _i(90,1,a,s),_=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],p=this._renderer,x=p.autoClear,M=p.toneMapping;p.getClearColor(m0),p.toneMapping=sr,p.autoClear=!1;const C=new tS({name:"PMREM.Background",side:Wn,depthWrite:!1,depthTest:!1}),U=new qi(new fl,C);let y=!1;const S=n.background;S?S.isColor&&(C.color.copy(S),n.background=null,y=!0):(C.color.copy(m0),y=!0);for(let L=0;L<6;L++){const N=L%3;N===0?(g.up.set(0,_[L],0),g.position.set(f.x,f.y,f.z),g.lookAt(f.x+v[L],f.y,f.z)):N===1?(g.up.set(0,0,_[L]),g.position.set(f.x,f.y,f.z),g.lookAt(f.x,f.y+v[L],f.z)):(g.up.set(0,_[L],0),g.position.set(f.x,f.y,f.z),g.lookAt(f.x,f.y,f.z+v[L]));const w=this._cubeSize;ec(u,N*w,L>2?w:0,w,w),p.setRenderTarget(u),y&&p.render(U,g),p.render(n,g)}U.geometry.dispose(),U.material.dispose(),p.toneMapping=M,p.autoClear=x,n.background=S}_textureToCubeUV(n,a){const s=this._renderer,u=n.mapping===Qs||n.mapping===Js;u?(this._cubemapMaterial===null&&(this._cubemapMaterial=x0()),this._cubemapMaterial.uniforms.flipEnvMap.value=n.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=S0());const f=u?this._cubemapMaterial:this._equirectMaterial,h=new qi(this._lodPlanes[0],f),d=f.uniforms;d.envMap.value=n;const g=this._cubeSize;ec(a,0,0,3*g,2*g),s.setRenderTarget(a),s.render(h,Md)}_applyPMREM(n){const a=this._renderer,s=a.autoClear;a.autoClear=!1;const u=this._lodPlanes.length;for(let f=1;f<u;f++){const h=Math.sqrt(this._sigmas[f]*this._sigmas[f]-this._sigmas[f-1]*this._sigmas[f-1]),d=g0[(u-f-1)%g0.length];this._blur(n,f-1,f,h,d)}a.autoClear=s}_blur(n,a,s,u,f){const h=this._pingPongRenderTarget;this._halfBlur(n,h,a,s,u,"latitudinal",f),this._halfBlur(h,n,s,s,u,"longitudinal",f)}_halfBlur(n,a,s,u,f,h,d){const g=this._renderer,_=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,p=new qi(this._lodPlanes[u],_),x=_.uniforms,M=this._sizeLods[s]-1,C=isFinite(f)?Math.PI/(2*M):2*Math.PI/(2*Gr-1),U=f/C,y=isFinite(f)?1+Math.floor(v*U):Gr;y>Gr&&console.warn(`sigmaRadians, ${f}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Gr}`);const S=[];let L=0;for(let O=0;O<Gr;++O){const I=O/U,D=Math.exp(-I*I/2);S.push(D),O===0?L+=D:O<y&&(L+=2*D)}for(let O=0;O<S.length;O++)S[O]=S[O]/L;x.envMap.value=n.texture,x.samples.value=y,x.weights.value=S,x.latitudinal.value=h==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:N}=this;x.dTheta.value=C,x.mipInt.value=N-s;const w=this._sizeLods[u],X=3*w*(u>N-Ys?u-N+Ys:0),B=4*(this._cubeSize-w);ec(a,X,B,3*w,2*w),g.setRenderTarget(a),g.render(p,Md)}}function vb(o){const n=[],a=[],s=[];let u=o;const f=o-Ys+1+p0.length;for(let h=0;h<f;h++){const d=Math.pow(2,u);a.push(d);let g=1/d;h>o-Ys?g=p0[h-o+Ys-1]:h===0&&(g=0),s.push(g);const _=1/(d-2),v=-_,p=1+_,x=[v,v,p,v,p,p,v,v,p,p,v,p],M=6,C=6,U=3,y=2,S=1,L=new Float32Array(U*C*M),N=new Float32Array(y*C*M),w=new Float32Array(S*C*M);for(let B=0;B<M;B++){const O=B%3*2/3-1,I=B>2?0:-1,D=[O,I,0,O+2/3,I,0,O+2/3,I+1,0,O,I,0,O+2/3,I+1,0,O,I+1,0];L.set(D,U*C*B),N.set(x,y*C*B);const b=[B,B,B,B,B,B];w.set(b,S*C*B)}const X=new lr;X.setAttribute("position",new ki(L,U)),X.setAttribute("uv",new ki(N,y)),X.setAttribute("faceIndex",new ki(w,S)),n.push(X),u>Ys&&u--}return{lodPlanes:n,sizeLods:a,sigmas:s}}function v0(o,n,a){const s=new kr(o,n,a);return s.texture.mapping=pc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function ec(o,n,a,s,u){o.viewport.set(n,a,s,u),o.scissor.set(n,a,s,u)}function Sb(o,n,a){const s=new Float32Array(Gr),u=new it(0,1,0);return new Ea({name:"SphericalGaussianBlur",defines:{n:Gr,CUBEUV_TEXEL_WIDTH:1/n,CUBEUV_TEXEL_HEIGHT:1/a,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:u}},vertexShader:Rp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:rr,depthTest:!1,depthWrite:!1})}function S0(){return new Ea({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:rr,depthTest:!1,depthWrite:!1})}function x0(){return new Ea({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:rr,depthTest:!1,depthWrite:!1})}function Rp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function xb(o){let n=new WeakMap,a=null;function s(d){if(d&&d.isTexture){const g=d.mapping,_=g===Bd||g===Id,v=g===Qs||g===Js;if(_||v){let p=n.get(d);const x=p!==void 0?p.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return a===null&&(a=new _0(o)),p=_?a.fromEquirectangular(d,p):a.fromCubemap(d,p),p.texture.pmremVersion=d.pmremVersion,n.set(d,p),p.texture;if(p!==void 0)return p.texture;{const M=d.image;return _&&M&&M.height>0||v&&M&&u(M)?(a===null&&(a=new _0(o)),p=_?a.fromEquirectangular(d):a.fromCubemap(d),p.texture.pmremVersion=d.pmremVersion,n.set(d,p),d.addEventListener("dispose",f),p.texture):null}}}return d}function u(d){let g=0;const _=6;for(let v=0;v<_;v++)d[v]!==void 0&&g++;return g===_}function f(d){const g=d.target;g.removeEventListener("dispose",f);const _=n.get(g);_!==void 0&&(n.delete(g),_.dispose())}function h(){n=new WeakMap,a!==null&&(a.dispose(),a=null)}return{get:s,dispose:h}}function yb(o){const n={};function a(s){if(n[s]!==void 0)return n[s];let u;switch(s){case"WEBGL_depth_texture":u=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":u=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":u=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":u=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:u=o.getExtension(s)}return n[s]=u,u}return{has:function(s){return a(s)!==null},init:function(){a("EXT_color_buffer_float"),a("WEBGL_clip_cull_distance"),a("OES_texture_float_linear"),a("EXT_color_buffer_half_float"),a("WEBGL_multisampled_render_to_texture"),a("WEBGL_render_shared_exponent")},get:function(s){const u=a(s);return u===null&&js("THREE.WebGLRenderer: "+s+" extension not supported."),u}}}function Mb(o,n,a,s){const u={},f=new WeakMap;function h(p){const x=p.target;x.index!==null&&n.remove(x.index);for(const C in x.attributes)n.remove(x.attributes[C]);x.removeEventListener("dispose",h),delete u[x.id];const M=f.get(x);M&&(n.remove(M),f.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,a.memory.geometries--}function d(p,x){return u[x.id]===!0||(x.addEventListener("dispose",h),u[x.id]=!0,a.memory.geometries++),x}function g(p){const x=p.attributes;for(const M in x)n.update(x[M],o.ARRAY_BUFFER)}function _(p){const x=[],M=p.index,C=p.attributes.position;let U=0;if(M!==null){const L=M.array;U=M.version;for(let N=0,w=L.length;N<w;N+=3){const X=L[N+0],B=L[N+1],O=L[N+2];x.push(X,B,B,O,O,X)}}else if(C!==void 0){const L=C.array;U=C.version;for(let N=0,w=L.length/3-1;N<w;N+=3){const X=N+0,B=N+1,O=N+2;x.push(X,B,B,O,O,X)}}else return;const y=new(K0(x)?nS:eS)(x,1);y.version=U;const S=f.get(p);S&&n.remove(S),f.set(p,y)}function v(p){const x=f.get(p);if(x){const M=p.index;M!==null&&x.version<M.version&&_(p)}else _(p);return f.get(p)}return{get:d,update:g,getWireframeAttribute:v}}function Eb(o,n,a){let s;function u(x){s=x}let f,h;function d(x){f=x.type,h=x.bytesPerElement}function g(x,M){o.drawElements(s,M,f,x*h),a.update(M,s,1)}function _(x,M,C){C!==0&&(o.drawElementsInstanced(s,M,f,x*h,C),a.update(M,s,C))}function v(x,M,C){if(C===0)return;n.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,f,x,0,C);let y=0;for(let S=0;S<C;S++)y+=M[S];a.update(y,s,1)}function p(x,M,C,U){if(C===0)return;const y=n.get("WEBGL_multi_draw");if(y===null)for(let S=0;S<x.length;S++)_(x[S]/h,M[S],U[S]);else{y.multiDrawElementsInstancedWEBGL(s,M,0,f,x,0,U,0,C);let S=0;for(let L=0;L<C;L++)S+=M[L]*U[L];a.update(S,s,1)}}this.setMode=u,this.setIndex=d,this.render=g,this.renderInstances=_,this.renderMultiDraw=v,this.renderMultiDrawInstances=p}function Tb(o){const n={geometries:0,textures:0},a={frame:0,calls:0,triangles:0,points:0,lines:0};function s(f,h,d){switch(a.calls++,h){case o.TRIANGLES:a.triangles+=d*(f/3);break;case o.LINES:a.lines+=d*(f/2);break;case o.LINE_STRIP:a.lines+=d*(f-1);break;case o.LINE_LOOP:a.lines+=d*f;break;case o.POINTS:a.points+=d*f;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function u(){a.calls=0,a.triangles=0,a.points=0,a.lines=0}return{memory:n,render:a,programs:null,autoReset:!0,reset:u,update:s}}function bb(o,n,a){const s=new WeakMap,u=new rn;function f(h,d,g){const _=h.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,p=v!==void 0?v.length:0;let x=s.get(d);if(x===void 0||x.count!==p){let b=function(){I.dispose(),s.delete(d),d.removeEventListener("dispose",b)};var M=b;x!==void 0&&x.texture.dispose();const C=d.morphAttributes.position!==void 0,U=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,S=d.morphAttributes.position||[],L=d.morphAttributes.normal||[],N=d.morphAttributes.color||[];let w=0;C===!0&&(w=1),U===!0&&(w=2),y===!0&&(w=3);let X=d.attributes.position.count*w,B=1;X>n.maxTextureSize&&(B=Math.ceil(X/n.maxTextureSize),X=n.maxTextureSize);const O=new Float32Array(X*B*4*p),I=new Q0(O,X,B,p);I.type=va,I.needsUpdate=!0;const D=w*4;for(let F=0;F<p;F++){const ot=S[F],st=L[F],mt=N[F],ft=X*B*4*F;for(let Y=0;Y<ot.count;Y++){const nt=Y*D;C===!0&&(u.fromBufferAttribute(ot,Y),O[ft+nt+0]=u.x,O[ft+nt+1]=u.y,O[ft+nt+2]=u.z,O[ft+nt+3]=0),U===!0&&(u.fromBufferAttribute(st,Y),O[ft+nt+4]=u.x,O[ft+nt+5]=u.y,O[ft+nt+6]=u.z,O[ft+nt+7]=0),y===!0&&(u.fromBufferAttribute(mt,Y),O[ft+nt+8]=u.x,O[ft+nt+9]=u.y,O[ft+nt+10]=u.z,O[ft+nt+11]=mt.itemSize===4?u.w:1)}}x={count:p,texture:I,size:new Le(X,B)},s.set(d,x),d.addEventListener("dispose",b)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)g.getUniforms().setValue(o,"morphTexture",h.morphTexture,a);else{let C=0;for(let y=0;y<_.length;y++)C+=_[y];const U=d.morphTargetsRelative?1:1-C;g.getUniforms().setValue(o,"morphTargetBaseInfluence",U),g.getUniforms().setValue(o,"morphTargetInfluences",_)}g.getUniforms().setValue(o,"morphTargetsTexture",x.texture,a),g.getUniforms().setValue(o,"morphTargetsTextureSize",x.size)}return{update:f}}function Ab(o,n,a,s){let u=new WeakMap;function f(g){const _=s.render.frame,v=g.geometry,p=n.get(g,v);if(u.get(p)!==_&&(n.update(p),u.set(p,_)),g.isInstancedMesh&&(g.hasEventListener("dispose",d)===!1&&g.addEventListener("dispose",d),u.get(g)!==_&&(a.update(g.instanceMatrix,o.ARRAY_BUFFER),g.instanceColor!==null&&a.update(g.instanceColor,o.ARRAY_BUFFER),u.set(g,_))),g.isSkinnedMesh){const x=g.skeleton;u.get(x)!==_&&(x.update(),u.set(x,_))}return p}function h(){u=new WeakMap}function d(g){const _=g.target;_.removeEventListener("dispose",d),a.remove(_.instanceMatrix),_.instanceColor!==null&&a.remove(_.instanceColor)}return{update:f,dispose:h}}const uS=new jn,y0=new oS(1,1),cS=new Q0,fS=new eE,hS=new rS,M0=[],E0=[],T0=new Float32Array(16),b0=new Float32Array(9),A0=new Float32Array(4);function no(o,n,a){const s=o[0];if(s<=0||s>0)return o;const u=n*a;let f=M0[u];if(f===void 0&&(f=new Float32Array(u),M0[u]=f),n!==0){s.toArray(f,0);for(let h=1,d=0;h!==n;++h)d+=a,o[h].toArray(f,d)}return f}function gn(o,n){if(o.length!==n.length)return!1;for(let a=0,s=o.length;a<s;a++)if(o[a]!==n[a])return!1;return!0}function _n(o,n){for(let a=0,s=n.length;a<s;a++)o[a]=n[a]}function _c(o,n){let a=E0[n];a===void 0&&(a=new Int32Array(n),E0[n]=a);for(let s=0;s!==n;++s)a[s]=o.allocateTextureUnit();return a}function Rb(o,n){const a=this.cache;a[0]!==n&&(o.uniform1f(this.addr,n),a[0]=n)}function Cb(o,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y)&&(o.uniform2f(this.addr,n.x,n.y),a[0]=n.x,a[1]=n.y);else{if(gn(a,n))return;o.uniform2fv(this.addr,n),_n(a,n)}}function wb(o,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y||a[2]!==n.z)&&(o.uniform3f(this.addr,n.x,n.y,n.z),a[0]=n.x,a[1]=n.y,a[2]=n.z);else if(n.r!==void 0)(a[0]!==n.r||a[1]!==n.g||a[2]!==n.b)&&(o.uniform3f(this.addr,n.r,n.g,n.b),a[0]=n.r,a[1]=n.g,a[2]=n.b);else{if(gn(a,n))return;o.uniform3fv(this.addr,n),_n(a,n)}}function Db(o,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y||a[2]!==n.z||a[3]!==n.w)&&(o.uniform4f(this.addr,n.x,n.y,n.z,n.w),a[0]=n.x,a[1]=n.y,a[2]=n.z,a[3]=n.w);else{if(gn(a,n))return;o.uniform4fv(this.addr,n),_n(a,n)}}function Ub(o,n){const a=this.cache,s=n.elements;if(s===void 0){if(gn(a,n))return;o.uniformMatrix2fv(this.addr,!1,n),_n(a,n)}else{if(gn(a,s))return;A0.set(s),o.uniformMatrix2fv(this.addr,!1,A0),_n(a,s)}}function Nb(o,n){const a=this.cache,s=n.elements;if(s===void 0){if(gn(a,n))return;o.uniformMatrix3fv(this.addr,!1,n),_n(a,n)}else{if(gn(a,s))return;b0.set(s),o.uniformMatrix3fv(this.addr,!1,b0),_n(a,s)}}function Lb(o,n){const a=this.cache,s=n.elements;if(s===void 0){if(gn(a,n))return;o.uniformMatrix4fv(this.addr,!1,n),_n(a,n)}else{if(gn(a,s))return;T0.set(s),o.uniformMatrix4fv(this.addr,!1,T0),_n(a,s)}}function Ob(o,n){const a=this.cache;a[0]!==n&&(o.uniform1i(this.addr,n),a[0]=n)}function zb(o,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y)&&(o.uniform2i(this.addr,n.x,n.y),a[0]=n.x,a[1]=n.y);else{if(gn(a,n))return;o.uniform2iv(this.addr,n),_n(a,n)}}function Pb(o,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y||a[2]!==n.z)&&(o.uniform3i(this.addr,n.x,n.y,n.z),a[0]=n.x,a[1]=n.y,a[2]=n.z);else{if(gn(a,n))return;o.uniform3iv(this.addr,n),_n(a,n)}}function Bb(o,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y||a[2]!==n.z||a[3]!==n.w)&&(o.uniform4i(this.addr,n.x,n.y,n.z,n.w),a[0]=n.x,a[1]=n.y,a[2]=n.z,a[3]=n.w);else{if(gn(a,n))return;o.uniform4iv(this.addr,n),_n(a,n)}}function Ib(o,n){const a=this.cache;a[0]!==n&&(o.uniform1ui(this.addr,n),a[0]=n)}function Fb(o,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y)&&(o.uniform2ui(this.addr,n.x,n.y),a[0]=n.x,a[1]=n.y);else{if(gn(a,n))return;o.uniform2uiv(this.addr,n),_n(a,n)}}function Hb(o,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y||a[2]!==n.z)&&(o.uniform3ui(this.addr,n.x,n.y,n.z),a[0]=n.x,a[1]=n.y,a[2]=n.z);else{if(gn(a,n))return;o.uniform3uiv(this.addr,n),_n(a,n)}}function Gb(o,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y||a[2]!==n.z||a[3]!==n.w)&&(o.uniform4ui(this.addr,n.x,n.y,n.z,n.w),a[0]=n.x,a[1]=n.y,a[2]=n.z,a[3]=n.w);else{if(gn(a,n))return;o.uniform4uiv(this.addr,n),_n(a,n)}}function Vb(o,n,a){const s=this.cache,u=a.allocateTextureUnit();s[0]!==u&&(o.uniform1i(this.addr,u),s[0]=u);let f;this.type===o.SAMPLER_2D_SHADOW?(y0.compareFunction=Z0,f=y0):f=uS,a.setTexture2D(n||f,u)}function Xb(o,n,a){const s=this.cache,u=a.allocateTextureUnit();s[0]!==u&&(o.uniform1i(this.addr,u),s[0]=u),a.setTexture3D(n||fS,u)}function qb(o,n,a){const s=this.cache,u=a.allocateTextureUnit();s[0]!==u&&(o.uniform1i(this.addr,u),s[0]=u),a.setTextureCube(n||hS,u)}function kb(o,n,a){const s=this.cache,u=a.allocateTextureUnit();s[0]!==u&&(o.uniform1i(this.addr,u),s[0]=u),a.setTexture2DArray(n||cS,u)}function Yb(o){switch(o){case 5126:return Rb;case 35664:return Cb;case 35665:return wb;case 35666:return Db;case 35674:return Ub;case 35675:return Nb;case 35676:return Lb;case 5124:case 35670:return Ob;case 35667:case 35671:return zb;case 35668:case 35672:return Pb;case 35669:case 35673:return Bb;case 5125:return Ib;case 36294:return Fb;case 36295:return Hb;case 36296:return Gb;case 35678:case 36198:case 36298:case 36306:case 35682:return Vb;case 35679:case 36299:case 36307:return Xb;case 35680:case 36300:case 36308:case 36293:return qb;case 36289:case 36303:case 36311:case 36292:return kb}}function Wb(o,n){o.uniform1fv(this.addr,n)}function jb(o,n){const a=no(n,this.size,2);o.uniform2fv(this.addr,a)}function Zb(o,n){const a=no(n,this.size,3);o.uniform3fv(this.addr,a)}function Kb(o,n){const a=no(n,this.size,4);o.uniform4fv(this.addr,a)}function Qb(o,n){const a=no(n,this.size,4);o.uniformMatrix2fv(this.addr,!1,a)}function Jb(o,n){const a=no(n,this.size,9);o.uniformMatrix3fv(this.addr,!1,a)}function $b(o,n){const a=no(n,this.size,16);o.uniformMatrix4fv(this.addr,!1,a)}function tA(o,n){o.uniform1iv(this.addr,n)}function eA(o,n){o.uniform2iv(this.addr,n)}function nA(o,n){o.uniform3iv(this.addr,n)}function iA(o,n){o.uniform4iv(this.addr,n)}function aA(o,n){o.uniform1uiv(this.addr,n)}function rA(o,n){o.uniform2uiv(this.addr,n)}function sA(o,n){o.uniform3uiv(this.addr,n)}function oA(o,n){o.uniform4uiv(this.addr,n)}function lA(o,n,a){const s=this.cache,u=n.length,f=_c(a,u);gn(s,f)||(o.uniform1iv(this.addr,f),_n(s,f));for(let h=0;h!==u;++h)a.setTexture2D(n[h]||uS,f[h])}function uA(o,n,a){const s=this.cache,u=n.length,f=_c(a,u);gn(s,f)||(o.uniform1iv(this.addr,f),_n(s,f));for(let h=0;h!==u;++h)a.setTexture3D(n[h]||fS,f[h])}function cA(o,n,a){const s=this.cache,u=n.length,f=_c(a,u);gn(s,f)||(o.uniform1iv(this.addr,f),_n(s,f));for(let h=0;h!==u;++h)a.setTextureCube(n[h]||hS,f[h])}function fA(o,n,a){const s=this.cache,u=n.length,f=_c(a,u);gn(s,f)||(o.uniform1iv(this.addr,f),_n(s,f));for(let h=0;h!==u;++h)a.setTexture2DArray(n[h]||cS,f[h])}function hA(o){switch(o){case 5126:return Wb;case 35664:return jb;case 35665:return Zb;case 35666:return Kb;case 35674:return Qb;case 35675:return Jb;case 35676:return $b;case 5124:case 35670:return tA;case 35667:case 35671:return eA;case 35668:case 35672:return nA;case 35669:case 35673:return iA;case 5125:return aA;case 36294:return rA;case 36295:return sA;case 36296:return oA;case 35678:case 36198:case 36298:case 36306:case 35682:return lA;case 35679:case 36299:case 36307:return uA;case 35680:case 36300:case 36308:case 36293:return cA;case 36289:case 36303:case 36311:case 36292:return fA}}class dA{constructor(n,a,s){this.id=n,this.addr=s,this.cache=[],this.type=a.type,this.setValue=Yb(a.type)}}class pA{constructor(n,a,s){this.id=n,this.addr=s,this.cache=[],this.type=a.type,this.size=a.size,this.setValue=hA(a.type)}}class mA{constructor(n){this.id=n,this.seq=[],this.map={}}setValue(n,a,s){const u=this.seq;for(let f=0,h=u.length;f!==h;++f){const d=u[f];d.setValue(n,a[d.id],s)}}}const Rd=/(\w+)(\])?(\[|\.)?/g;function R0(o,n){o.seq.push(n),o.map[n.id]=n}function gA(o,n,a){const s=o.name,u=s.length;for(Rd.lastIndex=0;;){const f=Rd.exec(s),h=Rd.lastIndex;let d=f[1];const g=f[2]==="]",_=f[3];if(g&&(d=d|0),_===void 0||_==="["&&h+2===u){R0(a,_===void 0?new dA(d,o,n):new pA(d,o,n));break}else{let p=a.map[d];p===void 0&&(p=new mA(d),R0(a,p)),a=p}}}class cc{constructor(n,a){this.seq=[],this.map={};const s=n.getProgramParameter(a,n.ACTIVE_UNIFORMS);for(let u=0;u<s;++u){const f=n.getActiveUniform(a,u),h=n.getUniformLocation(a,f.name);gA(f,h,this)}}setValue(n,a,s,u){const f=this.map[a];f!==void 0&&f.setValue(n,s,u)}setOptional(n,a,s){const u=a[s];u!==void 0&&this.setValue(n,s,u)}static upload(n,a,s,u){for(let f=0,h=a.length;f!==h;++f){const d=a[f],g=s[d.id];g.needsUpdate!==!1&&d.setValue(n,g.value,u)}}static seqWithValue(n,a){const s=[];for(let u=0,f=n.length;u!==f;++u){const h=n[u];h.id in a&&s.push(h)}return s}}function C0(o,n,a){const s=o.createShader(n);return o.shaderSource(s,a),o.compileShader(s),s}const _A=37297;let vA=0;function SA(o,n){const a=o.split(`
`),s=[],u=Math.max(n-6,0),f=Math.min(n+6,a.length);for(let h=u;h<f;h++){const d=h+1;s.push(`${d===n?">":" "} ${d}: ${a[h]}`)}return s.join(`
`)}const w0=new me;function xA(o){De._getMatrix(w0,De.workingColorSpace,o);const n=`mat3( ${w0.elements.map(a=>a.toFixed(4))} )`;switch(De.getTransfer(o)){case fc:return[n,"LinearTransferOETF"];case Ve:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[n,"LinearTransferOETF"]}}function D0(o,n,a){const s=o.getShaderParameter(n,o.COMPILE_STATUS),u=o.getShaderInfoLog(n).trim();if(s&&u==="")return"";const f=/ERROR: 0:(\d+)/.exec(u);if(f){const h=parseInt(f[1]);return a.toUpperCase()+`

`+u+`

`+SA(o.getShaderSource(n),h)}else return u}function yA(o,n){const a=xA(n);return[`vec4 ${o}( vec4 value ) {`,`	return ${a[1]}( vec4( value.rgb * ${a[0]}, value.a ) );`,"}"].join(`
`)}function MA(o,n){let a;switch(n){case AM:a="Linear";break;case RM:a="Reinhard";break;case CM:a="Cineon";break;case wM:a="ACESFilmic";break;case UM:a="AgX";break;case NM:a="Neutral";break;case DM:a="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",n),a="Linear"}return"vec3 "+o+"( vec3 color ) { return "+a+"ToneMapping( color ); }"}const nc=new it;function EA(){De.getLuminanceCoefficients(nc);const o=nc.x.toFixed(4),n=nc.y.toFixed(4),a=nc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${n}, ${a} );`,"	return dot( weights, rgb );","}"].join(`
`)}function TA(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(nl).join(`
`)}function bA(o){const n=[];for(const a in o){const s=o[a];s!==!1&&n.push("#define "+a+" "+s)}return n.join(`
`)}function AA(o,n){const a={},s=o.getProgramParameter(n,o.ACTIVE_ATTRIBUTES);for(let u=0;u<s;u++){const f=o.getActiveAttrib(n,u),h=f.name;let d=1;f.type===o.FLOAT_MAT2&&(d=2),f.type===o.FLOAT_MAT3&&(d=3),f.type===o.FLOAT_MAT4&&(d=4),a[h]={type:f.type,location:o.getAttribLocation(n,h),locationSize:d}}return a}function nl(o){return o!==""}function U0(o,n){const a=n.numSpotLightShadows+n.numSpotLightMaps-n.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,n.numDirLights).replace(/NUM_SPOT_LIGHTS/g,n.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,n.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,a).replace(/NUM_RECT_AREA_LIGHTS/g,n.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,n.numPointLights).replace(/NUM_HEMI_LIGHTS/g,n.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,n.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,n.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,n.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,n.numPointLightShadows)}function N0(o,n){return o.replace(/NUM_CLIPPING_PLANES/g,n.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,n.numClippingPlanes-n.numClipIntersection)}const RA=/^[ \t]*#include +<([\w\d./]+)>/gm;function pp(o){return o.replace(RA,wA)}const CA=new Map;function wA(o,n){let a=ge[n];if(a===void 0){const s=CA.get(n);if(s!==void 0)a=ge[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',n,s);else throw new Error("Can not resolve #include <"+n+">")}return pp(a)}const DA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function L0(o){return o.replace(DA,UA)}function UA(o,n,a,s){let u="";for(let f=parseInt(n);f<parseInt(a);f++)u+=s.replace(/\[\s*i\s*\]/g,"[ "+f+" ]").replace(/UNROLLED_LOOP_INDEX/g,f);return u}function O0(o){let n=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?n+=`
#define HIGH_PRECISION`:o.precision==="mediump"?n+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(n+=`
#define LOW_PRECISION`),n}function NA(o){let n="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===I0?n="SHADOWMAP_TYPE_PCF":o.shadowMapType===rM?n="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===ga&&(n="SHADOWMAP_TYPE_VSM"),n}function LA(o){let n="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Qs:case Js:n="ENVMAP_TYPE_CUBE";break;case pc:n="ENVMAP_TYPE_CUBE_UV";break}return n}function OA(o){let n="ENVMAP_MODE_REFLECTION";return o.envMap&&o.envMapMode===Js&&(n="ENVMAP_MODE_REFRACTION"),n}function zA(o){let n="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case F0:n="ENVMAP_BLENDING_MULTIPLY";break;case TM:n="ENVMAP_BLENDING_MIX";break;case bM:n="ENVMAP_BLENDING_ADD";break}return n}function PA(o){const n=o.envMapCubeUVHeight;if(n===null)return null;const a=Math.log2(n)-2,s=1/n;return{texelWidth:1/(3*Math.max(Math.pow(2,a),112)),texelHeight:s,maxMip:a}}function BA(o,n,a,s){const u=o.getContext(),f=a.defines;let h=a.vertexShader,d=a.fragmentShader;const g=NA(a),_=LA(a),v=OA(a),p=zA(a),x=PA(a),M=TA(a),C=bA(f),U=u.createProgram();let y,S,L=a.glslVersion?"#version "+a.glslVersion+`
`:"";a.isRawShaderMaterial?(y=["#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,C].filter(nl).join(`
`),y.length>0&&(y+=`
`),S=["#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,C].filter(nl).join(`
`),S.length>0&&(S+=`
`)):(y=[O0(a),"#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,C,a.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",a.batching?"#define USE_BATCHING":"",a.batchingColor?"#define USE_BATCHING_COLOR":"",a.instancing?"#define USE_INSTANCING":"",a.instancingColor?"#define USE_INSTANCING_COLOR":"",a.instancingMorph?"#define USE_INSTANCING_MORPH":"",a.useFog&&a.fog?"#define USE_FOG":"",a.useFog&&a.fogExp2?"#define FOG_EXP2":"",a.map?"#define USE_MAP":"",a.envMap?"#define USE_ENVMAP":"",a.envMap?"#define "+v:"",a.lightMap?"#define USE_LIGHTMAP":"",a.aoMap?"#define USE_AOMAP":"",a.bumpMap?"#define USE_BUMPMAP":"",a.normalMap?"#define USE_NORMALMAP":"",a.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",a.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",a.displacementMap?"#define USE_DISPLACEMENTMAP":"",a.emissiveMap?"#define USE_EMISSIVEMAP":"",a.anisotropy?"#define USE_ANISOTROPY":"",a.anisotropyMap?"#define USE_ANISOTROPYMAP":"",a.clearcoatMap?"#define USE_CLEARCOATMAP":"",a.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",a.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",a.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",a.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",a.specularMap?"#define USE_SPECULARMAP":"",a.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",a.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",a.roughnessMap?"#define USE_ROUGHNESSMAP":"",a.metalnessMap?"#define USE_METALNESSMAP":"",a.alphaMap?"#define USE_ALPHAMAP":"",a.alphaHash?"#define USE_ALPHAHASH":"",a.transmission?"#define USE_TRANSMISSION":"",a.transmissionMap?"#define USE_TRANSMISSIONMAP":"",a.thicknessMap?"#define USE_THICKNESSMAP":"",a.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",a.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",a.mapUv?"#define MAP_UV "+a.mapUv:"",a.alphaMapUv?"#define ALPHAMAP_UV "+a.alphaMapUv:"",a.lightMapUv?"#define LIGHTMAP_UV "+a.lightMapUv:"",a.aoMapUv?"#define AOMAP_UV "+a.aoMapUv:"",a.emissiveMapUv?"#define EMISSIVEMAP_UV "+a.emissiveMapUv:"",a.bumpMapUv?"#define BUMPMAP_UV "+a.bumpMapUv:"",a.normalMapUv?"#define NORMALMAP_UV "+a.normalMapUv:"",a.displacementMapUv?"#define DISPLACEMENTMAP_UV "+a.displacementMapUv:"",a.metalnessMapUv?"#define METALNESSMAP_UV "+a.metalnessMapUv:"",a.roughnessMapUv?"#define ROUGHNESSMAP_UV "+a.roughnessMapUv:"",a.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+a.anisotropyMapUv:"",a.clearcoatMapUv?"#define CLEARCOATMAP_UV "+a.clearcoatMapUv:"",a.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+a.clearcoatNormalMapUv:"",a.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+a.clearcoatRoughnessMapUv:"",a.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+a.iridescenceMapUv:"",a.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+a.iridescenceThicknessMapUv:"",a.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+a.sheenColorMapUv:"",a.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+a.sheenRoughnessMapUv:"",a.specularMapUv?"#define SPECULARMAP_UV "+a.specularMapUv:"",a.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+a.specularColorMapUv:"",a.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+a.specularIntensityMapUv:"",a.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+a.transmissionMapUv:"",a.thicknessMapUv?"#define THICKNESSMAP_UV "+a.thicknessMapUv:"",a.vertexTangents&&a.flatShading===!1?"#define USE_TANGENT":"",a.vertexColors?"#define USE_COLOR":"",a.vertexAlphas?"#define USE_COLOR_ALPHA":"",a.vertexUv1s?"#define USE_UV1":"",a.vertexUv2s?"#define USE_UV2":"",a.vertexUv3s?"#define USE_UV3":"",a.pointsUvs?"#define USE_POINTS_UV":"",a.flatShading?"#define FLAT_SHADED":"",a.skinning?"#define USE_SKINNING":"",a.morphTargets?"#define USE_MORPHTARGETS":"",a.morphNormals&&a.flatShading===!1?"#define USE_MORPHNORMALS":"",a.morphColors?"#define USE_MORPHCOLORS":"",a.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+a.morphTextureStride:"",a.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+a.morphTargetsCount:"",a.doubleSided?"#define DOUBLE_SIDED":"",a.flipSided?"#define FLIP_SIDED":"",a.shadowMapEnabled?"#define USE_SHADOWMAP":"",a.shadowMapEnabled?"#define "+g:"",a.sizeAttenuation?"#define USE_SIZEATTENUATION":"",a.numLightProbes>0?"#define USE_LIGHT_PROBES":"",a.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",a.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(nl).join(`
`),S=[O0(a),"#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,C,a.useFog&&a.fog?"#define USE_FOG":"",a.useFog&&a.fogExp2?"#define FOG_EXP2":"",a.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",a.map?"#define USE_MAP":"",a.matcap?"#define USE_MATCAP":"",a.envMap?"#define USE_ENVMAP":"",a.envMap?"#define "+_:"",a.envMap?"#define "+v:"",a.envMap?"#define "+p:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",a.lightMap?"#define USE_LIGHTMAP":"",a.aoMap?"#define USE_AOMAP":"",a.bumpMap?"#define USE_BUMPMAP":"",a.normalMap?"#define USE_NORMALMAP":"",a.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",a.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",a.emissiveMap?"#define USE_EMISSIVEMAP":"",a.anisotropy?"#define USE_ANISOTROPY":"",a.anisotropyMap?"#define USE_ANISOTROPYMAP":"",a.clearcoat?"#define USE_CLEARCOAT":"",a.clearcoatMap?"#define USE_CLEARCOATMAP":"",a.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",a.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",a.dispersion?"#define USE_DISPERSION":"",a.iridescence?"#define USE_IRIDESCENCE":"",a.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",a.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",a.specularMap?"#define USE_SPECULARMAP":"",a.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",a.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",a.roughnessMap?"#define USE_ROUGHNESSMAP":"",a.metalnessMap?"#define USE_METALNESSMAP":"",a.alphaMap?"#define USE_ALPHAMAP":"",a.alphaTest?"#define USE_ALPHATEST":"",a.alphaHash?"#define USE_ALPHAHASH":"",a.sheen?"#define USE_SHEEN":"",a.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",a.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",a.transmission?"#define USE_TRANSMISSION":"",a.transmissionMap?"#define USE_TRANSMISSIONMAP":"",a.thicknessMap?"#define USE_THICKNESSMAP":"",a.vertexTangents&&a.flatShading===!1?"#define USE_TANGENT":"",a.vertexColors||a.instancingColor||a.batchingColor?"#define USE_COLOR":"",a.vertexAlphas?"#define USE_COLOR_ALPHA":"",a.vertexUv1s?"#define USE_UV1":"",a.vertexUv2s?"#define USE_UV2":"",a.vertexUv3s?"#define USE_UV3":"",a.pointsUvs?"#define USE_POINTS_UV":"",a.gradientMap?"#define USE_GRADIENTMAP":"",a.flatShading?"#define FLAT_SHADED":"",a.doubleSided?"#define DOUBLE_SIDED":"",a.flipSided?"#define FLIP_SIDED":"",a.shadowMapEnabled?"#define USE_SHADOWMAP":"",a.shadowMapEnabled?"#define "+g:"",a.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",a.numLightProbes>0?"#define USE_LIGHT_PROBES":"",a.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",a.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",a.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",a.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",a.toneMapping!==sr?"#define TONE_MAPPING":"",a.toneMapping!==sr?ge.tonemapping_pars_fragment:"",a.toneMapping!==sr?MA("toneMapping",a.toneMapping):"",a.dithering?"#define DITHERING":"",a.opaque?"#define OPAQUE":"",ge.colorspace_pars_fragment,yA("linearToOutputTexel",a.outputColorSpace),EA(),a.useDepthPacking?"#define DEPTH_PACKING "+a.depthPacking:"",`
`].filter(nl).join(`
`)),h=pp(h),h=U0(h,a),h=N0(h,a),d=pp(d),d=U0(d,a),d=N0(d,a),h=L0(h),d=L0(d),a.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,S=["#define varying in",a.glslVersion===Zv?"":"layout(location = 0) out highp vec4 pc_fragColor;",a.glslVersion===Zv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const N=L+y+h,w=L+S+d,X=C0(u,u.VERTEX_SHADER,N),B=C0(u,u.FRAGMENT_SHADER,w);u.attachShader(U,X),u.attachShader(U,B),a.index0AttributeName!==void 0?u.bindAttribLocation(U,0,a.index0AttributeName):a.morphTargets===!0&&u.bindAttribLocation(U,0,"position"),u.linkProgram(U);function O(F){if(o.debug.checkShaderErrors){const ot=u.getProgramInfoLog(U).trim(),st=u.getShaderInfoLog(X).trim(),mt=u.getShaderInfoLog(B).trim();let ft=!0,Y=!0;if(u.getProgramParameter(U,u.LINK_STATUS)===!1)if(ft=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(u,U,X,B);else{const nt=D0(u,X,"vertex"),K=D0(u,B,"fragment");console.error("THREE.WebGLProgram: Shader Error "+u.getError()+" - VALIDATE_STATUS "+u.getProgramParameter(U,u.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+ot+`
`+nt+`
`+K)}else ot!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ot):(st===""||mt==="")&&(Y=!1);Y&&(F.diagnostics={runnable:ft,programLog:ot,vertexShader:{log:st,prefix:y},fragmentShader:{log:mt,prefix:S}})}u.deleteShader(X),u.deleteShader(B),I=new cc(u,U),D=AA(u,U)}let I;this.getUniforms=function(){return I===void 0&&O(this),I};let D;this.getAttributes=function(){return D===void 0&&O(this),D};let b=a.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=u.getProgramParameter(U,_A)),b},this.destroy=function(){s.releaseStatesOfProgram(this),u.deleteProgram(U),this.program=void 0},this.type=a.shaderType,this.name=a.shaderName,this.id=vA++,this.cacheKey=n,this.usedTimes=1,this.program=U,this.vertexShader=X,this.fragmentShader=B,this}let IA=0;class FA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(n){const a=n.vertexShader,s=n.fragmentShader,u=this._getShaderStage(a),f=this._getShaderStage(s),h=this._getShaderCacheForMaterial(n);return h.has(u)===!1&&(h.add(u),u.usedTimes++),h.has(f)===!1&&(h.add(f),f.usedTimes++),this}remove(n){const a=this.materialCache.get(n);for(const s of a)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(n),this}getVertexShaderID(n){return this._getShaderStage(n.vertexShader).id}getFragmentShaderID(n){return this._getShaderStage(n.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(n){const a=this.materialCache;let s=a.get(n);return s===void 0&&(s=new Set,a.set(n,s)),s}_getShaderStage(n){const a=this.shaderCache;let s=a.get(n);return s===void 0&&(s=new HA(n),a.set(n,s)),s}}class HA{constructor(n){this.id=IA++,this.code=n,this.usedTimes=0}}function GA(o,n,a,s,u,f,h){const d=new J0,g=new FA,_=new Set,v=[],p=u.logarithmicDepthBuffer,x=u.vertexTextures;let M=u.precision;const C={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function U(D){return _.add(D),D===0?"uv":`uv${D}`}function y(D,b,F,ot,st){const mt=ot.fog,ft=st.geometry,Y=D.isMeshStandardMaterial?ot.environment:null,nt=(D.isMeshStandardMaterial?a:n).get(D.envMap||Y),K=nt&&nt.mapping===pc?nt.image.height:null,vt=C[D.type];D.precision!==null&&(M=u.getMaxPrecision(D.precision),M!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",M,"instead."));const yt=ft.morphAttributes.position||ft.morphAttributes.normal||ft.morphAttributes.color,Ht=yt!==void 0?yt.length:0;let ee=0;ft.morphAttributes.position!==void 0&&(ee=1),ft.morphAttributes.normal!==void 0&&(ee=2),ft.morphAttributes.color!==void 0&&(ee=3);let Et,A,q,ht;if(vt){const Te=Vi[vt];Et=Te.vertexShader,A=Te.fragmentShader}else Et=D.vertexShader,A=D.fragmentShader,g.update(D),q=g.getVertexShaderID(D),ht=g.getFragmentShaderID(D);const lt=o.getRenderTarget(),Tt=o.state.buffers.depth.getReversed(),Gt=st.isInstancedMesh===!0,Rt=st.isBatchedMesh===!0,At=!!D.map,zt=!!D.matcap,ce=!!nt,H=!!D.aoMap,tn=!!D.lightMap,he=!!D.bumpMap,ue=!!D.normalMap,Ct=!!D.displacementMap,fe=!!D.emissiveMap,Zt=!!D.metalnessMap,ie=!!D.roughnessMap,Qe=D.anisotropy>0,z=D.clearcoat>0,T=D.dispersion>0,tt=D.iridescence>0,pt=D.sheen>0,_t=D.transmission>0,ut=Qe&&!!D.anisotropyMap,Xt=z&&!!D.clearcoatMap,Lt=z&&!!D.clearcoatNormalMap,Yt=z&&!!D.clearcoatRoughnessMap,jt=tt&&!!D.iridescenceMap,St=tt&&!!D.iridescenceThicknessMap,It=pt&&!!D.sheenColorMap,te=pt&&!!D.sheenRoughnessMap,Jt=!!D.specularMap,Ot=!!D.specularColorMap,se=!!D.specularIntensityMap,V=_t&&!!D.transmissionMap,Bt=_t&&!!D.thicknessMap,xt=!!D.gradientMap,Vt=!!D.alphaMap,Mt=D.alphaTest>0,gt=!!D.alphaHash,qt=!!D.extensions;let le=sr;D.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(le=o.toneMapping);const Xe={shaderID:vt,shaderType:D.type,shaderName:D.name,vertexShader:Et,fragmentShader:A,defines:D.defines,customVertexShaderID:q,customFragmentShaderID:ht,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:M,batching:Rt,batchingColor:Rt&&st._colorsTexture!==null,instancing:Gt,instancingColor:Gt&&st.instanceColor!==null,instancingMorph:Gt&&st.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:lt===null?o.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:$s,alphaToCoverage:!!D.alphaToCoverage,map:At,matcap:zt,envMap:ce,envMapMode:ce&&nt.mapping,envMapCubeUVHeight:K,aoMap:H,lightMap:tn,bumpMap:he,normalMap:ue,displacementMap:x&&Ct,emissiveMap:fe,normalMapObjectSpace:ue&&D.normalMapType===BM,normalMapTangentSpace:ue&&D.normalMapType===PM,metalnessMap:Zt,roughnessMap:ie,anisotropy:Qe,anisotropyMap:ut,clearcoat:z,clearcoatMap:Xt,clearcoatNormalMap:Lt,clearcoatRoughnessMap:Yt,dispersion:T,iridescence:tt,iridescenceMap:jt,iridescenceThicknessMap:St,sheen:pt,sheenColorMap:It,sheenRoughnessMap:te,specularMap:Jt,specularColorMap:Ot,specularIntensityMap:se,transmission:_t,transmissionMap:V,thicknessMap:Bt,gradientMap:xt,opaque:D.transparent===!1&&D.blending===Ws&&D.alphaToCoverage===!1,alphaMap:Vt,alphaTest:Mt,alphaHash:gt,combine:D.combine,mapUv:At&&U(D.map.channel),aoMapUv:H&&U(D.aoMap.channel),lightMapUv:tn&&U(D.lightMap.channel),bumpMapUv:he&&U(D.bumpMap.channel),normalMapUv:ue&&U(D.normalMap.channel),displacementMapUv:Ct&&U(D.displacementMap.channel),emissiveMapUv:fe&&U(D.emissiveMap.channel),metalnessMapUv:Zt&&U(D.metalnessMap.channel),roughnessMapUv:ie&&U(D.roughnessMap.channel),anisotropyMapUv:ut&&U(D.anisotropyMap.channel),clearcoatMapUv:Xt&&U(D.clearcoatMap.channel),clearcoatNormalMapUv:Lt&&U(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Yt&&U(D.clearcoatRoughnessMap.channel),iridescenceMapUv:jt&&U(D.iridescenceMap.channel),iridescenceThicknessMapUv:St&&U(D.iridescenceThicknessMap.channel),sheenColorMapUv:It&&U(D.sheenColorMap.channel),sheenRoughnessMapUv:te&&U(D.sheenRoughnessMap.channel),specularMapUv:Jt&&U(D.specularMap.channel),specularColorMapUv:Ot&&U(D.specularColorMap.channel),specularIntensityMapUv:se&&U(D.specularIntensityMap.channel),transmissionMapUv:V&&U(D.transmissionMap.channel),thicknessMapUv:Bt&&U(D.thicknessMap.channel),alphaMapUv:Vt&&U(D.alphaMap.channel),vertexTangents:!!ft.attributes.tangent&&(ue||Qe),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!ft.attributes.color&&ft.attributes.color.itemSize===4,pointsUvs:st.isPoints===!0&&!!ft.attributes.uv&&(At||Vt),fog:!!mt,useFog:D.fog===!0,fogExp2:!!mt&&mt.isFogExp2,flatShading:D.flatShading===!0&&D.wireframe===!1,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:p,reverseDepthBuffer:Tt,skinning:st.isSkinnedMesh===!0,morphTargets:ft.morphAttributes.position!==void 0,morphNormals:ft.morphAttributes.normal!==void 0,morphColors:ft.morphAttributes.color!==void 0,morphTargetsCount:Ht,morphTextureStride:ee,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:D.dithering,shadowMapEnabled:o.shadowMap.enabled&&F.length>0,shadowMapType:o.shadowMap.type,toneMapping:le,decodeVideoTexture:At&&D.map.isVideoTexture===!0&&De.getTransfer(D.map.colorSpace)===Ve,decodeVideoTextureEmissive:fe&&D.emissiveMap.isVideoTexture===!0&&De.getTransfer(D.emissiveMap.colorSpace)===Ve,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===_a,flipSided:D.side===Wn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:qt&&D.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qt&&D.extensions.multiDraw===!0||Rt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return Xe.vertexUv1s=_.has(1),Xe.vertexUv2s=_.has(2),Xe.vertexUv3s=_.has(3),_.clear(),Xe}function S(D){const b=[];if(D.shaderID?b.push(D.shaderID):(b.push(D.customVertexShaderID),b.push(D.customFragmentShaderID)),D.defines!==void 0)for(const F in D.defines)b.push(F),b.push(D.defines[F]);return D.isRawShaderMaterial===!1&&(L(b,D),N(b,D),b.push(o.outputColorSpace)),b.push(D.customProgramCacheKey),b.join()}function L(D,b){D.push(b.precision),D.push(b.outputColorSpace),D.push(b.envMapMode),D.push(b.envMapCubeUVHeight),D.push(b.mapUv),D.push(b.alphaMapUv),D.push(b.lightMapUv),D.push(b.aoMapUv),D.push(b.bumpMapUv),D.push(b.normalMapUv),D.push(b.displacementMapUv),D.push(b.emissiveMapUv),D.push(b.metalnessMapUv),D.push(b.roughnessMapUv),D.push(b.anisotropyMapUv),D.push(b.clearcoatMapUv),D.push(b.clearcoatNormalMapUv),D.push(b.clearcoatRoughnessMapUv),D.push(b.iridescenceMapUv),D.push(b.iridescenceThicknessMapUv),D.push(b.sheenColorMapUv),D.push(b.sheenRoughnessMapUv),D.push(b.specularMapUv),D.push(b.specularColorMapUv),D.push(b.specularIntensityMapUv),D.push(b.transmissionMapUv),D.push(b.thicknessMapUv),D.push(b.combine),D.push(b.fogExp2),D.push(b.sizeAttenuation),D.push(b.morphTargetsCount),D.push(b.morphAttributeCount),D.push(b.numDirLights),D.push(b.numPointLights),D.push(b.numSpotLights),D.push(b.numSpotLightMaps),D.push(b.numHemiLights),D.push(b.numRectAreaLights),D.push(b.numDirLightShadows),D.push(b.numPointLightShadows),D.push(b.numSpotLightShadows),D.push(b.numSpotLightShadowsWithMaps),D.push(b.numLightProbes),D.push(b.shadowMapType),D.push(b.toneMapping),D.push(b.numClippingPlanes),D.push(b.numClipIntersection),D.push(b.depthPacking)}function N(D,b){d.disableAll(),b.supportsVertexTextures&&d.enable(0),b.instancing&&d.enable(1),b.instancingColor&&d.enable(2),b.instancingMorph&&d.enable(3),b.matcap&&d.enable(4),b.envMap&&d.enable(5),b.normalMapObjectSpace&&d.enable(6),b.normalMapTangentSpace&&d.enable(7),b.clearcoat&&d.enable(8),b.iridescence&&d.enable(9),b.alphaTest&&d.enable(10),b.vertexColors&&d.enable(11),b.vertexAlphas&&d.enable(12),b.vertexUv1s&&d.enable(13),b.vertexUv2s&&d.enable(14),b.vertexUv3s&&d.enable(15),b.vertexTangents&&d.enable(16),b.anisotropy&&d.enable(17),b.alphaHash&&d.enable(18),b.batching&&d.enable(19),b.dispersion&&d.enable(20),b.batchingColor&&d.enable(21),b.gradientMap&&d.enable(22),D.push(d.mask),d.disableAll(),b.fog&&d.enable(0),b.useFog&&d.enable(1),b.flatShading&&d.enable(2),b.logarithmicDepthBuffer&&d.enable(3),b.reverseDepthBuffer&&d.enable(4),b.skinning&&d.enable(5),b.morphTargets&&d.enable(6),b.morphNormals&&d.enable(7),b.morphColors&&d.enable(8),b.premultipliedAlpha&&d.enable(9),b.shadowMapEnabled&&d.enable(10),b.doubleSided&&d.enable(11),b.flipSided&&d.enable(12),b.useDepthPacking&&d.enable(13),b.dithering&&d.enable(14),b.transmission&&d.enable(15),b.sheen&&d.enable(16),b.opaque&&d.enable(17),b.pointsUvs&&d.enable(18),b.decodeVideoTexture&&d.enable(19),b.decodeVideoTextureEmissive&&d.enable(20),b.alphaToCoverage&&d.enable(21),D.push(d.mask)}function w(D){const b=C[D.type];let F;if(b){const ot=Vi[b];F=mE.clone(ot.uniforms)}else F=D.uniforms;return F}function X(D,b){let F;for(let ot=0,st=v.length;ot<st;ot++){const mt=v[ot];if(mt.cacheKey===b){F=mt,++F.usedTimes;break}}return F===void 0&&(F=new BA(o,b,D,f),v.push(F)),F}function B(D){if(--D.usedTimes===0){const b=v.indexOf(D);v[b]=v[v.length-1],v.pop(),D.destroy()}}function O(D){g.remove(D)}function I(){g.dispose()}return{getParameters:y,getProgramCacheKey:S,getUniforms:w,acquireProgram:X,releaseProgram:B,releaseShaderCache:O,programs:v,dispose:I}}function VA(){let o=new WeakMap;function n(h){return o.has(h)}function a(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function s(h){o.delete(h)}function u(h,d,g){o.get(h)[d]=g}function f(){o=new WeakMap}return{has:n,get:a,remove:s,update:u,dispose:f}}function XA(o,n){return o.groupOrder!==n.groupOrder?o.groupOrder-n.groupOrder:o.renderOrder!==n.renderOrder?o.renderOrder-n.renderOrder:o.material.id!==n.material.id?o.material.id-n.material.id:o.z!==n.z?o.z-n.z:o.id-n.id}function z0(o,n){return o.groupOrder!==n.groupOrder?o.groupOrder-n.groupOrder:o.renderOrder!==n.renderOrder?o.renderOrder-n.renderOrder:o.z!==n.z?n.z-o.z:o.id-n.id}function P0(){const o=[];let n=0;const a=[],s=[],u=[];function f(){n=0,a.length=0,s.length=0,u.length=0}function h(p,x,M,C,U,y){let S=o[n];return S===void 0?(S={id:p.id,object:p,geometry:x,material:M,groupOrder:C,renderOrder:p.renderOrder,z:U,group:y},o[n]=S):(S.id=p.id,S.object=p,S.geometry=x,S.material=M,S.groupOrder=C,S.renderOrder=p.renderOrder,S.z=U,S.group=y),n++,S}function d(p,x,M,C,U,y){const S=h(p,x,M,C,U,y);M.transmission>0?s.push(S):M.transparent===!0?u.push(S):a.push(S)}function g(p,x,M,C,U,y){const S=h(p,x,M,C,U,y);M.transmission>0?s.unshift(S):M.transparent===!0?u.unshift(S):a.unshift(S)}function _(p,x){a.length>1&&a.sort(p||XA),s.length>1&&s.sort(x||z0),u.length>1&&u.sort(x||z0)}function v(){for(let p=n,x=o.length;p<x;p++){const M=o[p];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:a,transmissive:s,transparent:u,init:f,push:d,unshift:g,finish:v,sort:_}}function qA(){let o=new WeakMap;function n(s,u){const f=o.get(s);let h;return f===void 0?(h=new P0,o.set(s,[h])):u>=f.length?(h=new P0,f.push(h)):h=f[u],h}function a(){o=new WeakMap}return{get:n,dispose:a}}function kA(){const o={};return{get:function(n){if(o[n.id]!==void 0)return o[n.id];let a;switch(n.type){case"DirectionalLight":a={direction:new it,color:new Re};break;case"SpotLight":a={position:new it,direction:new it,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":a={position:new it,color:new Re,distance:0,decay:0};break;case"HemisphereLight":a={direction:new it,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":a={color:new Re,position:new it,halfWidth:new it,halfHeight:new it};break}return o[n.id]=a,a}}}function YA(){const o={};return{get:function(n){if(o[n.id]!==void 0)return o[n.id];let a;switch(n.type){case"DirectionalLight":a={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"SpotLight":a={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"PointLight":a={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[n.id]=a,a}}}let WA=0;function jA(o,n){return(n.castShadow?2:0)-(o.castShadow?2:0)+(n.map?1:0)-(o.map?1:0)}function ZA(o){const n=new kA,a=YA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let _=0;_<9;_++)s.probe.push(new it);const u=new it,f=new dn,h=new dn;function d(_){let v=0,p=0,x=0;for(let D=0;D<9;D++)s.probe[D].set(0,0,0);let M=0,C=0,U=0,y=0,S=0,L=0,N=0,w=0,X=0,B=0,O=0;_.sort(jA);for(let D=0,b=_.length;D<b;D++){const F=_[D],ot=F.color,st=F.intensity,mt=F.distance,ft=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)v+=ot.r*st,p+=ot.g*st,x+=ot.b*st;else if(F.isLightProbe){for(let Y=0;Y<9;Y++)s.probe[Y].addScaledVector(F.sh.coefficients[Y],st);O++}else if(F.isDirectionalLight){const Y=n.get(F);if(Y.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const nt=F.shadow,K=a.get(F);K.shadowIntensity=nt.intensity,K.shadowBias=nt.bias,K.shadowNormalBias=nt.normalBias,K.shadowRadius=nt.radius,K.shadowMapSize=nt.mapSize,s.directionalShadow[M]=K,s.directionalShadowMap[M]=ft,s.directionalShadowMatrix[M]=F.shadow.matrix,L++}s.directional[M]=Y,M++}else if(F.isSpotLight){const Y=n.get(F);Y.position.setFromMatrixPosition(F.matrixWorld),Y.color.copy(ot).multiplyScalar(st),Y.distance=mt,Y.coneCos=Math.cos(F.angle),Y.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),Y.decay=F.decay,s.spot[U]=Y;const nt=F.shadow;if(F.map&&(s.spotLightMap[X]=F.map,X++,nt.updateMatrices(F),F.castShadow&&B++),s.spotLightMatrix[U]=nt.matrix,F.castShadow){const K=a.get(F);K.shadowIntensity=nt.intensity,K.shadowBias=nt.bias,K.shadowNormalBias=nt.normalBias,K.shadowRadius=nt.radius,K.shadowMapSize=nt.mapSize,s.spotShadow[U]=K,s.spotShadowMap[U]=ft,w++}U++}else if(F.isRectAreaLight){const Y=n.get(F);Y.color.copy(ot).multiplyScalar(st),Y.halfWidth.set(F.width*.5,0,0),Y.halfHeight.set(0,F.height*.5,0),s.rectArea[y]=Y,y++}else if(F.isPointLight){const Y=n.get(F);if(Y.color.copy(F.color).multiplyScalar(F.intensity),Y.distance=F.distance,Y.decay=F.decay,F.castShadow){const nt=F.shadow,K=a.get(F);K.shadowIntensity=nt.intensity,K.shadowBias=nt.bias,K.shadowNormalBias=nt.normalBias,K.shadowRadius=nt.radius,K.shadowMapSize=nt.mapSize,K.shadowCameraNear=nt.camera.near,K.shadowCameraFar=nt.camera.far,s.pointShadow[C]=K,s.pointShadowMap[C]=ft,s.pointShadowMatrix[C]=F.shadow.matrix,N++}s.point[C]=Y,C++}else if(F.isHemisphereLight){const Y=n.get(F);Y.skyColor.copy(F.color).multiplyScalar(st),Y.groundColor.copy(F.groundColor).multiplyScalar(st),s.hemi[S]=Y,S++}}y>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Pt.LTC_FLOAT_1,s.rectAreaLTC2=Pt.LTC_FLOAT_2):(s.rectAreaLTC1=Pt.LTC_HALF_1,s.rectAreaLTC2=Pt.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=p,s.ambient[2]=x;const I=s.hash;(I.directionalLength!==M||I.pointLength!==C||I.spotLength!==U||I.rectAreaLength!==y||I.hemiLength!==S||I.numDirectionalShadows!==L||I.numPointShadows!==N||I.numSpotShadows!==w||I.numSpotMaps!==X||I.numLightProbes!==O)&&(s.directional.length=M,s.spot.length=U,s.rectArea.length=y,s.point.length=C,s.hemi.length=S,s.directionalShadow.length=L,s.directionalShadowMap.length=L,s.pointShadow.length=N,s.pointShadowMap.length=N,s.spotShadow.length=w,s.spotShadowMap.length=w,s.directionalShadowMatrix.length=L,s.pointShadowMatrix.length=N,s.spotLightMatrix.length=w+X-B,s.spotLightMap.length=X,s.numSpotLightShadowsWithMaps=B,s.numLightProbes=O,I.directionalLength=M,I.pointLength=C,I.spotLength=U,I.rectAreaLength=y,I.hemiLength=S,I.numDirectionalShadows=L,I.numPointShadows=N,I.numSpotShadows=w,I.numSpotMaps=X,I.numLightProbes=O,s.version=WA++)}function g(_,v){let p=0,x=0,M=0,C=0,U=0;const y=v.matrixWorldInverse;for(let S=0,L=_.length;S<L;S++){const N=_[S];if(N.isDirectionalLight){const w=s.directional[p];w.direction.setFromMatrixPosition(N.matrixWorld),u.setFromMatrixPosition(N.target.matrixWorld),w.direction.sub(u),w.direction.transformDirection(y),p++}else if(N.isSpotLight){const w=s.spot[M];w.position.setFromMatrixPosition(N.matrixWorld),w.position.applyMatrix4(y),w.direction.setFromMatrixPosition(N.matrixWorld),u.setFromMatrixPosition(N.target.matrixWorld),w.direction.sub(u),w.direction.transformDirection(y),M++}else if(N.isRectAreaLight){const w=s.rectArea[C];w.position.setFromMatrixPosition(N.matrixWorld),w.position.applyMatrix4(y),h.identity(),f.copy(N.matrixWorld),f.premultiply(y),h.extractRotation(f),w.halfWidth.set(N.width*.5,0,0),w.halfHeight.set(0,N.height*.5,0),w.halfWidth.applyMatrix4(h),w.halfHeight.applyMatrix4(h),C++}else if(N.isPointLight){const w=s.point[x];w.position.setFromMatrixPosition(N.matrixWorld),w.position.applyMatrix4(y),x++}else if(N.isHemisphereLight){const w=s.hemi[U];w.direction.setFromMatrixPosition(N.matrixWorld),w.direction.transformDirection(y),U++}}}return{setup:d,setupView:g,state:s}}function B0(o){const n=new ZA(o),a=[],s=[];function u(v){_.camera=v,a.length=0,s.length=0}function f(v){a.push(v)}function h(v){s.push(v)}function d(){n.setup(a)}function g(v){n.setupView(a,v)}const _={lightsArray:a,shadowsArray:s,camera:null,lights:n,transmissionRenderTarget:{}};return{init:u,state:_,setupLights:d,setupLightsView:g,pushLight:f,pushShadow:h}}function KA(o){let n=new WeakMap;function a(u,f=0){const h=n.get(u);let d;return h===void 0?(d=new B0(o),n.set(u,[d])):f>=h.length?(d=new B0(o),h.push(d)):d=h[f],d}function s(){n=new WeakMap}return{get:a,dispose:s}}const QA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,JA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function $A(o,n,a){let s=new sS;const u=new Le,f=new Le,h=new rn,d=new bE({depthPacking:zM}),g=new AE,_={},v=a.maxTextureSize,p={[or]:Wn,[Wn]:or,[_a]:_a},x=new Ea({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Le},radius:{value:4}},vertexShader:QA,fragmentShader:JA}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const C=new lr;C.setAttribute("position",new ki(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const U=new qi(C,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=I0;let S=this.type;this.render=function(B,O,I){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||B.length===0)return;const D=o.getRenderTarget(),b=o.getActiveCubeFace(),F=o.getActiveMipmapLevel(),ot=o.state;ot.setBlending(rr),ot.buffers.color.setClear(1,1,1,1),ot.buffers.depth.setTest(!0),ot.setScissorTest(!1);const st=S!==ga&&this.type===ga,mt=S===ga&&this.type!==ga;for(let ft=0,Y=B.length;ft<Y;ft++){const nt=B[ft],K=nt.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",nt,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;u.copy(K.mapSize);const vt=K.getFrameExtents();if(u.multiply(vt),f.copy(K.mapSize),(u.x>v||u.y>v)&&(u.x>v&&(f.x=Math.floor(v/vt.x),u.x=f.x*vt.x,K.mapSize.x=f.x),u.y>v&&(f.y=Math.floor(v/vt.y),u.y=f.y*vt.y,K.mapSize.y=f.y)),K.map===null||st===!0||mt===!0){const Ht=this.type!==ga?{minFilter:wi,magFilter:wi}:{};K.map!==null&&K.map.dispose(),K.map=new kr(u.x,u.y,Ht),K.map.texture.name=nt.name+".shadowMap",K.camera.updateProjectionMatrix()}o.setRenderTarget(K.map),o.clear();const yt=K.getViewportCount();for(let Ht=0;Ht<yt;Ht++){const ee=K.getViewport(Ht);h.set(f.x*ee.x,f.y*ee.y,f.x*ee.z,f.y*ee.w),ot.viewport(h),K.updateMatrices(nt,Ht),s=K.getFrustum(),w(O,I,K.camera,nt,this.type)}K.isPointLightShadow!==!0&&this.type===ga&&L(K,I),K.needsUpdate=!1}S=this.type,y.needsUpdate=!1,o.setRenderTarget(D,b,F)};function L(B,O){const I=n.update(U);x.defines.VSM_SAMPLES!==B.blurSamples&&(x.defines.VSM_SAMPLES=B.blurSamples,M.defines.VSM_SAMPLES=B.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new kr(u.x,u.y)),x.uniforms.shadow_pass.value=B.map.texture,x.uniforms.resolution.value=B.mapSize,x.uniforms.radius.value=B.radius,o.setRenderTarget(B.mapPass),o.clear(),o.renderBufferDirect(O,null,I,x,U,null),M.uniforms.shadow_pass.value=B.mapPass.texture,M.uniforms.resolution.value=B.mapSize,M.uniforms.radius.value=B.radius,o.setRenderTarget(B.map),o.clear(),o.renderBufferDirect(O,null,I,M,U,null)}function N(B,O,I,D){let b=null;const F=I.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(F!==void 0)b=F;else if(b=I.isPointLight===!0?g:d,o.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const ot=b.uuid,st=O.uuid;let mt=_[ot];mt===void 0&&(mt={},_[ot]=mt);let ft=mt[st];ft===void 0&&(ft=b.clone(),mt[st]=ft,O.addEventListener("dispose",X)),b=ft}if(b.visible=O.visible,b.wireframe=O.wireframe,D===ga?b.side=O.shadowSide!==null?O.shadowSide:O.side:b.side=O.shadowSide!==null?O.shadowSide:p[O.side],b.alphaMap=O.alphaMap,b.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,b.map=O.map,b.clipShadows=O.clipShadows,b.clippingPlanes=O.clippingPlanes,b.clipIntersection=O.clipIntersection,b.displacementMap=O.displacementMap,b.displacementScale=O.displacementScale,b.displacementBias=O.displacementBias,b.wireframeLinewidth=O.wireframeLinewidth,b.linewidth=O.linewidth,I.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const ot=o.properties.get(b);ot.light=I}return b}function w(B,O,I,D,b){if(B.visible===!1)return;if(B.layers.test(O.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&b===ga)&&(!B.frustumCulled||s.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,B.matrixWorld);const st=n.update(B),mt=B.material;if(Array.isArray(mt)){const ft=st.groups;for(let Y=0,nt=ft.length;Y<nt;Y++){const K=ft[Y],vt=mt[K.materialIndex];if(vt&&vt.visible){const yt=N(B,vt,D,b);B.onBeforeShadow(o,B,O,I,st,yt,K),o.renderBufferDirect(I,null,st,yt,B,K),B.onAfterShadow(o,B,O,I,st,yt,K)}}}else if(mt.visible){const ft=N(B,mt,D,b);B.onBeforeShadow(o,B,O,I,st,ft,null),o.renderBufferDirect(I,null,st,ft,B,null),B.onAfterShadow(o,B,O,I,st,ft,null)}}const ot=B.children;for(let st=0,mt=ot.length;st<mt;st++)w(ot[st],O,I,D,b)}function X(B){B.target.removeEventListener("dispose",X);for(const I in _){const D=_[I],b=B.target.uuid;b in D&&(D[b].dispose(),delete D[b])}}}const tR={[Dd]:Ud,[Nd]:zd,[Ld]:Pd,[Ks]:Od,[Ud]:Dd,[zd]:Nd,[Pd]:Ld,[Od]:Ks};function eR(o,n){function a(){let V=!1;const Bt=new rn;let xt=null;const Vt=new rn(0,0,0,0);return{setMask:function(Mt){xt!==Mt&&!V&&(o.colorMask(Mt,Mt,Mt,Mt),xt=Mt)},setLocked:function(Mt){V=Mt},setClear:function(Mt,gt,qt,le,Xe){Xe===!0&&(Mt*=le,gt*=le,qt*=le),Bt.set(Mt,gt,qt,le),Vt.equals(Bt)===!1&&(o.clearColor(Mt,gt,qt,le),Vt.copy(Bt))},reset:function(){V=!1,xt=null,Vt.set(-1,0,0,0)}}}function s(){let V=!1,Bt=!1,xt=null,Vt=null,Mt=null;return{setReversed:function(gt){if(Bt!==gt){const qt=n.get("EXT_clip_control");gt?qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.ZERO_TO_ONE_EXT):qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.NEGATIVE_ONE_TO_ONE_EXT),Bt=gt;const le=Mt;Mt=null,this.setClear(le)}},getReversed:function(){return Bt},setTest:function(gt){gt?lt(o.DEPTH_TEST):Tt(o.DEPTH_TEST)},setMask:function(gt){xt!==gt&&!V&&(o.depthMask(gt),xt=gt)},setFunc:function(gt){if(Bt&&(gt=tR[gt]),Vt!==gt){switch(gt){case Dd:o.depthFunc(o.NEVER);break;case Ud:o.depthFunc(o.ALWAYS);break;case Nd:o.depthFunc(o.LESS);break;case Ks:o.depthFunc(o.LEQUAL);break;case Ld:o.depthFunc(o.EQUAL);break;case Od:o.depthFunc(o.GEQUAL);break;case zd:o.depthFunc(o.GREATER);break;case Pd:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Vt=gt}},setLocked:function(gt){V=gt},setClear:function(gt){Mt!==gt&&(Bt&&(gt=1-gt),o.clearDepth(gt),Mt=gt)},reset:function(){V=!1,xt=null,Vt=null,Mt=null,Bt=!1}}}function u(){let V=!1,Bt=null,xt=null,Vt=null,Mt=null,gt=null,qt=null,le=null,Xe=null;return{setTest:function(Te){V||(Te?lt(o.STENCIL_TEST):Tt(o.STENCIL_TEST))},setMask:function(Te){Bt!==Te&&!V&&(o.stencilMask(Te),Bt=Te)},setFunc:function(Te,je,vn){(xt!==Te||Vt!==je||Mt!==vn)&&(o.stencilFunc(Te,je,vn),xt=Te,Vt=je,Mt=vn)},setOp:function(Te,je,vn){(gt!==Te||qt!==je||le!==vn)&&(o.stencilOp(Te,je,vn),gt=Te,qt=je,le=vn)},setLocked:function(Te){V=Te},setClear:function(Te){Xe!==Te&&(o.clearStencil(Te),Xe=Te)},reset:function(){V=!1,Bt=null,xt=null,Vt=null,Mt=null,gt=null,qt=null,le=null,Xe=null}}}const f=new a,h=new s,d=new u,g=new WeakMap,_=new WeakMap;let v={},p={},x=new WeakMap,M=[],C=null,U=!1,y=null,S=null,L=null,N=null,w=null,X=null,B=null,O=new Re(0,0,0),I=0,D=!1,b=null,F=null,ot=null,st=null,mt=null;const ft=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,nt=0;const K=o.getParameter(o.VERSION);K.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(K)[1]),Y=nt>=1):K.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),Y=nt>=2);let vt=null,yt={};const Ht=o.getParameter(o.SCISSOR_BOX),ee=o.getParameter(o.VIEWPORT),Et=new rn().fromArray(Ht),A=new rn().fromArray(ee);function q(V,Bt,xt,Vt){const Mt=new Uint8Array(4),gt=o.createTexture();o.bindTexture(V,gt),o.texParameteri(V,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(V,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let qt=0;qt<xt;qt++)V===o.TEXTURE_3D||V===o.TEXTURE_2D_ARRAY?o.texImage3D(Bt,0,o.RGBA,1,1,Vt,0,o.RGBA,o.UNSIGNED_BYTE,Mt):o.texImage2D(Bt+qt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Mt);return gt}const ht={};ht[o.TEXTURE_2D]=q(o.TEXTURE_2D,o.TEXTURE_2D,1),ht[o.TEXTURE_CUBE_MAP]=q(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),ht[o.TEXTURE_2D_ARRAY]=q(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),ht[o.TEXTURE_3D]=q(o.TEXTURE_3D,o.TEXTURE_3D,1,1),f.setClear(0,0,0,1),h.setClear(1),d.setClear(0),lt(o.DEPTH_TEST),h.setFunc(Ks),he(!1),ue(Xv),lt(o.CULL_FACE),H(rr);function lt(V){v[V]!==!0&&(o.enable(V),v[V]=!0)}function Tt(V){v[V]!==!1&&(o.disable(V),v[V]=!1)}function Gt(V,Bt){return p[V]!==Bt?(o.bindFramebuffer(V,Bt),p[V]=Bt,V===o.DRAW_FRAMEBUFFER&&(p[o.FRAMEBUFFER]=Bt),V===o.FRAMEBUFFER&&(p[o.DRAW_FRAMEBUFFER]=Bt),!0):!1}function Rt(V,Bt){let xt=M,Vt=!1;if(V){xt=x.get(Bt),xt===void 0&&(xt=[],x.set(Bt,xt));const Mt=V.textures;if(xt.length!==Mt.length||xt[0]!==o.COLOR_ATTACHMENT0){for(let gt=0,qt=Mt.length;gt<qt;gt++)xt[gt]=o.COLOR_ATTACHMENT0+gt;xt.length=Mt.length,Vt=!0}}else xt[0]!==o.BACK&&(xt[0]=o.BACK,Vt=!0);Vt&&o.drawBuffers(xt)}function At(V){return C!==V?(o.useProgram(V),C=V,!0):!1}const zt={[Hr]:o.FUNC_ADD,[oM]:o.FUNC_SUBTRACT,[lM]:o.FUNC_REVERSE_SUBTRACT};zt[uM]=o.MIN,zt[cM]=o.MAX;const ce={[fM]:o.ZERO,[hM]:o.ONE,[dM]:o.SRC_COLOR,[Cd]:o.SRC_ALPHA,[SM]:o.SRC_ALPHA_SATURATE,[_M]:o.DST_COLOR,[mM]:o.DST_ALPHA,[pM]:o.ONE_MINUS_SRC_COLOR,[wd]:o.ONE_MINUS_SRC_ALPHA,[vM]:o.ONE_MINUS_DST_COLOR,[gM]:o.ONE_MINUS_DST_ALPHA,[xM]:o.CONSTANT_COLOR,[yM]:o.ONE_MINUS_CONSTANT_COLOR,[MM]:o.CONSTANT_ALPHA,[EM]:o.ONE_MINUS_CONSTANT_ALPHA};function H(V,Bt,xt,Vt,Mt,gt,qt,le,Xe,Te){if(V===rr){U===!0&&(Tt(o.BLEND),U=!1);return}if(U===!1&&(lt(o.BLEND),U=!0),V!==sM){if(V!==y||Te!==D){if((S!==Hr||w!==Hr)&&(o.blendEquation(o.FUNC_ADD),S=Hr,w=Hr),Te)switch(V){case Ws:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case qv:o.blendFunc(o.ONE,o.ONE);break;case kv:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Yv:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case Ws:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case qv:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case kv:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Yv:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}L=null,N=null,X=null,B=null,O.set(0,0,0),I=0,y=V,D=Te}return}Mt=Mt||Bt,gt=gt||xt,qt=qt||Vt,(Bt!==S||Mt!==w)&&(o.blendEquationSeparate(zt[Bt],zt[Mt]),S=Bt,w=Mt),(xt!==L||Vt!==N||gt!==X||qt!==B)&&(o.blendFuncSeparate(ce[xt],ce[Vt],ce[gt],ce[qt]),L=xt,N=Vt,X=gt,B=qt),(le.equals(O)===!1||Xe!==I)&&(o.blendColor(le.r,le.g,le.b,Xe),O.copy(le),I=Xe),y=V,D=!1}function tn(V,Bt){V.side===_a?Tt(o.CULL_FACE):lt(o.CULL_FACE);let xt=V.side===Wn;Bt&&(xt=!xt),he(xt),V.blending===Ws&&V.transparent===!1?H(rr):H(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),h.setFunc(V.depthFunc),h.setTest(V.depthTest),h.setMask(V.depthWrite),f.setMask(V.colorWrite);const Vt=V.stencilWrite;d.setTest(Vt),Vt&&(d.setMask(V.stencilWriteMask),d.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),d.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),fe(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?lt(o.SAMPLE_ALPHA_TO_COVERAGE):Tt(o.SAMPLE_ALPHA_TO_COVERAGE)}function he(V){b!==V&&(V?o.frontFace(o.CW):o.frontFace(o.CCW),b=V)}function ue(V){V!==iM?(lt(o.CULL_FACE),V!==F&&(V===Xv?o.cullFace(o.BACK):V===aM?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Tt(o.CULL_FACE),F=V}function Ct(V){V!==ot&&(Y&&o.lineWidth(V),ot=V)}function fe(V,Bt,xt){V?(lt(o.POLYGON_OFFSET_FILL),(st!==Bt||mt!==xt)&&(o.polygonOffset(Bt,xt),st=Bt,mt=xt)):Tt(o.POLYGON_OFFSET_FILL)}function Zt(V){V?lt(o.SCISSOR_TEST):Tt(o.SCISSOR_TEST)}function ie(V){V===void 0&&(V=o.TEXTURE0+ft-1),vt!==V&&(o.activeTexture(V),vt=V)}function Qe(V,Bt,xt){xt===void 0&&(vt===null?xt=o.TEXTURE0+ft-1:xt=vt);let Vt=yt[xt];Vt===void 0&&(Vt={type:void 0,texture:void 0},yt[xt]=Vt),(Vt.type!==V||Vt.texture!==Bt)&&(vt!==xt&&(o.activeTexture(xt),vt=xt),o.bindTexture(V,Bt||ht[V]),Vt.type=V,Vt.texture=Bt)}function z(){const V=yt[vt];V!==void 0&&V.type!==void 0&&(o.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function T(){try{o.compressedTexImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function tt(){try{o.compressedTexImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function pt(){try{o.texSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function _t(){try{o.texSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ut(){try{o.compressedTexSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Xt(){try{o.compressedTexSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Lt(){try{o.texStorage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Yt(){try{o.texStorage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function jt(){try{o.texImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function St(){try{o.texImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function It(V){Et.equals(V)===!1&&(o.scissor(V.x,V.y,V.z,V.w),Et.copy(V))}function te(V){A.equals(V)===!1&&(o.viewport(V.x,V.y,V.z,V.w),A.copy(V))}function Jt(V,Bt){let xt=_.get(Bt);xt===void 0&&(xt=new WeakMap,_.set(Bt,xt));let Vt=xt.get(V);Vt===void 0&&(Vt=o.getUniformBlockIndex(Bt,V.name),xt.set(V,Vt))}function Ot(V,Bt){const Vt=_.get(Bt).get(V);g.get(Bt)!==Vt&&(o.uniformBlockBinding(Bt,Vt,V.__bindingPointIndex),g.set(Bt,Vt))}function se(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),v={},vt=null,yt={},p={},x=new WeakMap,M=[],C=null,U=!1,y=null,S=null,L=null,N=null,w=null,X=null,B=null,O=new Re(0,0,0),I=0,D=!1,b=null,F=null,ot=null,st=null,mt=null,Et.set(0,0,o.canvas.width,o.canvas.height),A.set(0,0,o.canvas.width,o.canvas.height),f.reset(),h.reset(),d.reset()}return{buffers:{color:f,depth:h,stencil:d},enable:lt,disable:Tt,bindFramebuffer:Gt,drawBuffers:Rt,useProgram:At,setBlending:H,setMaterial:tn,setFlipSided:he,setCullFace:ue,setLineWidth:Ct,setPolygonOffset:fe,setScissorTest:Zt,activeTexture:ie,bindTexture:Qe,unbindTexture:z,compressedTexImage2D:T,compressedTexImage3D:tt,texImage2D:jt,texImage3D:St,updateUBOMapping:Jt,uniformBlockBinding:Ot,texStorage2D:Lt,texStorage3D:Yt,texSubImage2D:pt,texSubImage3D:_t,compressedTexSubImage2D:ut,compressedTexSubImage3D:Xt,scissor:It,viewport:te,reset:se}}function nR(o,n,a,s,u,f,h){const d=n.has("WEBGL_multisampled_render_to_texture")?n.get("WEBGL_multisampled_render_to_texture"):null,g=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new Le,v=new WeakMap;let p;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function C(z,T){return M?new OffscreenCanvas(z,T):dc("canvas")}function U(z,T,tt){let pt=1;const _t=Qe(z);if((_t.width>tt||_t.height>tt)&&(pt=tt/Math.max(_t.width,_t.height)),pt<1)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap||typeof VideoFrame<"u"&&z instanceof VideoFrame){const ut=Math.floor(pt*_t.width),Xt=Math.floor(pt*_t.height);p===void 0&&(p=C(ut,Xt));const Lt=T?C(ut,Xt):p;return Lt.width=ut,Lt.height=Xt,Lt.getContext("2d").drawImage(z,0,0,ut,Xt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_t.width+"x"+_t.height+") to ("+ut+"x"+Xt+")."),Lt}else return"data"in z&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_t.width+"x"+_t.height+")."),z;return z}function y(z){return z.generateMipmaps}function S(z){o.generateMipmap(z)}function L(z){return z.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:z.isWebGL3DRenderTarget?o.TEXTURE_3D:z.isWebGLArrayRenderTarget||z.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function N(z,T,tt,pt,_t=!1){if(z!==null){if(o[z]!==void 0)return o[z];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let ut=T;if(T===o.RED&&(tt===o.FLOAT&&(ut=o.R32F),tt===o.HALF_FLOAT&&(ut=o.R16F),tt===o.UNSIGNED_BYTE&&(ut=o.R8)),T===o.RED_INTEGER&&(tt===o.UNSIGNED_BYTE&&(ut=o.R8UI),tt===o.UNSIGNED_SHORT&&(ut=o.R16UI),tt===o.UNSIGNED_INT&&(ut=o.R32UI),tt===o.BYTE&&(ut=o.R8I),tt===o.SHORT&&(ut=o.R16I),tt===o.INT&&(ut=o.R32I)),T===o.RG&&(tt===o.FLOAT&&(ut=o.RG32F),tt===o.HALF_FLOAT&&(ut=o.RG16F),tt===o.UNSIGNED_BYTE&&(ut=o.RG8)),T===o.RG_INTEGER&&(tt===o.UNSIGNED_BYTE&&(ut=o.RG8UI),tt===o.UNSIGNED_SHORT&&(ut=o.RG16UI),tt===o.UNSIGNED_INT&&(ut=o.RG32UI),tt===o.BYTE&&(ut=o.RG8I),tt===o.SHORT&&(ut=o.RG16I),tt===o.INT&&(ut=o.RG32I)),T===o.RGB_INTEGER&&(tt===o.UNSIGNED_BYTE&&(ut=o.RGB8UI),tt===o.UNSIGNED_SHORT&&(ut=o.RGB16UI),tt===o.UNSIGNED_INT&&(ut=o.RGB32UI),tt===o.BYTE&&(ut=o.RGB8I),tt===o.SHORT&&(ut=o.RGB16I),tt===o.INT&&(ut=o.RGB32I)),T===o.RGBA_INTEGER&&(tt===o.UNSIGNED_BYTE&&(ut=o.RGBA8UI),tt===o.UNSIGNED_SHORT&&(ut=o.RGBA16UI),tt===o.UNSIGNED_INT&&(ut=o.RGBA32UI),tt===o.BYTE&&(ut=o.RGBA8I),tt===o.SHORT&&(ut=o.RGBA16I),tt===o.INT&&(ut=o.RGBA32I)),T===o.RGB&&tt===o.UNSIGNED_INT_5_9_9_9_REV&&(ut=o.RGB9_E5),T===o.RGBA){const Xt=_t?fc:De.getTransfer(pt);tt===o.FLOAT&&(ut=o.RGBA32F),tt===o.HALF_FLOAT&&(ut=o.RGBA16F),tt===o.UNSIGNED_BYTE&&(ut=Xt===Ve?o.SRGB8_ALPHA8:o.RGBA8),tt===o.UNSIGNED_SHORT_4_4_4_4&&(ut=o.RGBA4),tt===o.UNSIGNED_SHORT_5_5_5_1&&(ut=o.RGB5_A1)}return(ut===o.R16F||ut===o.R32F||ut===o.RG16F||ut===o.RG32F||ut===o.RGBA16F||ut===o.RGBA32F)&&n.get("EXT_color_buffer_float"),ut}function w(z,T){let tt;return z?T===null||T===qr||T===al?tt=o.DEPTH24_STENCIL8:T===va?tt=o.DEPTH32F_STENCIL8:T===il&&(tt=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===qr||T===al?tt=o.DEPTH_COMPONENT24:T===va?tt=o.DEPTH_COMPONENT32F:T===il&&(tt=o.DEPTH_COMPONENT16),tt}function X(z,T){return y(z)===!0||z.isFramebufferTexture&&z.minFilter!==wi&&z.minFilter!==Xi?Math.log2(Math.max(T.width,T.height))+1:z.mipmaps!==void 0&&z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?T.mipmaps.length:1}function B(z){const T=z.target;T.removeEventListener("dispose",B),I(T),T.isVideoTexture&&v.delete(T)}function O(z){const T=z.target;T.removeEventListener("dispose",O),b(T)}function I(z){const T=s.get(z);if(T.__webglInit===void 0)return;const tt=z.source,pt=x.get(tt);if(pt){const _t=pt[T.__cacheKey];_t.usedTimes--,_t.usedTimes===0&&D(z),Object.keys(pt).length===0&&x.delete(tt)}s.remove(z)}function D(z){const T=s.get(z);o.deleteTexture(T.__webglTexture);const tt=z.source,pt=x.get(tt);delete pt[T.__cacheKey],h.memory.textures--}function b(z){const T=s.get(z);if(z.depthTexture&&(z.depthTexture.dispose(),s.remove(z.depthTexture)),z.isWebGLCubeRenderTarget)for(let pt=0;pt<6;pt++){if(Array.isArray(T.__webglFramebuffer[pt]))for(let _t=0;_t<T.__webglFramebuffer[pt].length;_t++)o.deleteFramebuffer(T.__webglFramebuffer[pt][_t]);else o.deleteFramebuffer(T.__webglFramebuffer[pt]);T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer[pt])}else{if(Array.isArray(T.__webglFramebuffer))for(let pt=0;pt<T.__webglFramebuffer.length;pt++)o.deleteFramebuffer(T.__webglFramebuffer[pt]);else o.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&o.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let pt=0;pt<T.__webglColorRenderbuffer.length;pt++)T.__webglColorRenderbuffer[pt]&&o.deleteRenderbuffer(T.__webglColorRenderbuffer[pt]);T.__webglDepthRenderbuffer&&o.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const tt=z.textures;for(let pt=0,_t=tt.length;pt<_t;pt++){const ut=s.get(tt[pt]);ut.__webglTexture&&(o.deleteTexture(ut.__webglTexture),h.memory.textures--),s.remove(tt[pt])}s.remove(z)}let F=0;function ot(){F=0}function st(){const z=F;return z>=u.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+z+" texture units while this GPU supports only "+u.maxTextures),F+=1,z}function mt(z){const T=[];return T.push(z.wrapS),T.push(z.wrapT),T.push(z.wrapR||0),T.push(z.magFilter),T.push(z.minFilter),T.push(z.anisotropy),T.push(z.internalFormat),T.push(z.format),T.push(z.type),T.push(z.generateMipmaps),T.push(z.premultiplyAlpha),T.push(z.flipY),T.push(z.unpackAlignment),T.push(z.colorSpace),T.join()}function ft(z,T){const tt=s.get(z);if(z.isVideoTexture&&Zt(z),z.isRenderTargetTexture===!1&&z.version>0&&tt.__version!==z.version){const pt=z.image;if(pt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ht(tt,z,T);return}}a.bindTexture(o.TEXTURE_2D,tt.__webglTexture,o.TEXTURE0+T)}function Y(z,T){const tt=s.get(z);if(z.version>0&&tt.__version!==z.version){ht(tt,z,T);return}a.bindTexture(o.TEXTURE_2D_ARRAY,tt.__webglTexture,o.TEXTURE0+T)}function nt(z,T){const tt=s.get(z);if(z.version>0&&tt.__version!==z.version){ht(tt,z,T);return}a.bindTexture(o.TEXTURE_3D,tt.__webglTexture,o.TEXTURE0+T)}function K(z,T){const tt=s.get(z);if(z.version>0&&tt.__version!==z.version){lt(tt,z,T);return}a.bindTexture(o.TEXTURE_CUBE_MAP,tt.__webglTexture,o.TEXTURE0+T)}const vt={[Fd]:o.REPEAT,[Vr]:o.CLAMP_TO_EDGE,[Hd]:o.MIRRORED_REPEAT},yt={[wi]:o.NEAREST,[LM]:o.NEAREST_MIPMAP_NEAREST,[zu]:o.NEAREST_MIPMAP_LINEAR,[Xi]:o.LINEAR,[Qh]:o.LINEAR_MIPMAP_NEAREST,[Xr]:o.LINEAR_MIPMAP_LINEAR},Ht={[IM]:o.NEVER,[qM]:o.ALWAYS,[FM]:o.LESS,[Z0]:o.LEQUAL,[HM]:o.EQUAL,[XM]:o.GEQUAL,[GM]:o.GREATER,[VM]:o.NOTEQUAL};function ee(z,T){if(T.type===va&&n.has("OES_texture_float_linear")===!1&&(T.magFilter===Xi||T.magFilter===Qh||T.magFilter===zu||T.magFilter===Xr||T.minFilter===Xi||T.minFilter===Qh||T.minFilter===zu||T.minFilter===Xr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(z,o.TEXTURE_WRAP_S,vt[T.wrapS]),o.texParameteri(z,o.TEXTURE_WRAP_T,vt[T.wrapT]),(z===o.TEXTURE_3D||z===o.TEXTURE_2D_ARRAY)&&o.texParameteri(z,o.TEXTURE_WRAP_R,vt[T.wrapR]),o.texParameteri(z,o.TEXTURE_MAG_FILTER,yt[T.magFilter]),o.texParameteri(z,o.TEXTURE_MIN_FILTER,yt[T.minFilter]),T.compareFunction&&(o.texParameteri(z,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(z,o.TEXTURE_COMPARE_FUNC,Ht[T.compareFunction])),n.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===wi||T.minFilter!==zu&&T.minFilter!==Xr||T.type===va&&n.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const tt=n.get("EXT_texture_filter_anisotropic");o.texParameterf(z,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,u.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function Et(z,T){let tt=!1;z.__webglInit===void 0&&(z.__webglInit=!0,T.addEventListener("dispose",B));const pt=T.source;let _t=x.get(pt);_t===void 0&&(_t={},x.set(pt,_t));const ut=mt(T);if(ut!==z.__cacheKey){_t[ut]===void 0&&(_t[ut]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,tt=!0),_t[ut].usedTimes++;const Xt=_t[z.__cacheKey];Xt!==void 0&&(_t[z.__cacheKey].usedTimes--,Xt.usedTimes===0&&D(T)),z.__cacheKey=ut,z.__webglTexture=_t[ut].texture}return tt}function A(z,T,tt){return Math.floor(Math.floor(z/tt)/T)}function q(z,T,tt,pt){const ut=z.updateRanges;if(ut.length===0)a.texSubImage2D(o.TEXTURE_2D,0,0,0,T.width,T.height,tt,pt,T.data);else{ut.sort((St,It)=>St.start-It.start);let Xt=0;for(let St=1;St<ut.length;St++){const It=ut[Xt],te=ut[St],Jt=It.start+It.count,Ot=A(te.start,T.width,4),se=A(It.start,T.width,4);te.start<=Jt+1&&Ot===se&&A(te.start+te.count-1,T.width,4)===Ot?It.count=Math.max(It.count,te.start+te.count-It.start):(++Xt,ut[Xt]=te)}ut.length=Xt+1;const Lt=o.getParameter(o.UNPACK_ROW_LENGTH),Yt=o.getParameter(o.UNPACK_SKIP_PIXELS),jt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,T.width);for(let St=0,It=ut.length;St<It;St++){const te=ut[St],Jt=Math.floor(te.start/4),Ot=Math.ceil(te.count/4),se=Jt%T.width,V=Math.floor(Jt/T.width),Bt=Ot,xt=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,se),o.pixelStorei(o.UNPACK_SKIP_ROWS,V),a.texSubImage2D(o.TEXTURE_2D,0,se,V,Bt,xt,tt,pt,T.data)}z.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Lt),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Yt),o.pixelStorei(o.UNPACK_SKIP_ROWS,jt)}}function ht(z,T,tt){let pt=o.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(pt=o.TEXTURE_2D_ARRAY),T.isData3DTexture&&(pt=o.TEXTURE_3D);const _t=Et(z,T),ut=T.source;a.bindTexture(pt,z.__webglTexture,o.TEXTURE0+tt);const Xt=s.get(ut);if(ut.version!==Xt.__version||_t===!0){a.activeTexture(o.TEXTURE0+tt);const Lt=De.getPrimaries(De.workingColorSpace),Yt=T.colorSpace===ar?null:De.getPrimaries(T.colorSpace),jt=T.colorSpace===ar||Lt===Yt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,jt);let St=U(T.image,!1,u.maxTextureSize);St=ie(T,St);const It=f.convert(T.format,T.colorSpace),te=f.convert(T.type);let Jt=N(T.internalFormat,It,te,T.colorSpace,T.isVideoTexture);ee(pt,T);let Ot;const se=T.mipmaps,V=T.isVideoTexture!==!0,Bt=Xt.__version===void 0||_t===!0,xt=ut.dataReady,Vt=X(T,St);if(T.isDepthTexture)Jt=w(T.format===sl,T.type),Bt&&(V?a.texStorage2D(o.TEXTURE_2D,1,Jt,St.width,St.height):a.texImage2D(o.TEXTURE_2D,0,Jt,St.width,St.height,0,It,te,null));else if(T.isDataTexture)if(se.length>0){V&&Bt&&a.texStorage2D(o.TEXTURE_2D,Vt,Jt,se[0].width,se[0].height);for(let Mt=0,gt=se.length;Mt<gt;Mt++)Ot=se[Mt],V?xt&&a.texSubImage2D(o.TEXTURE_2D,Mt,0,0,Ot.width,Ot.height,It,te,Ot.data):a.texImage2D(o.TEXTURE_2D,Mt,Jt,Ot.width,Ot.height,0,It,te,Ot.data);T.generateMipmaps=!1}else V?(Bt&&a.texStorage2D(o.TEXTURE_2D,Vt,Jt,St.width,St.height),xt&&q(T,St,It,te)):a.texImage2D(o.TEXTURE_2D,0,Jt,St.width,St.height,0,It,te,St.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){V&&Bt&&a.texStorage3D(o.TEXTURE_2D_ARRAY,Vt,Jt,se[0].width,se[0].height,St.depth);for(let Mt=0,gt=se.length;Mt<gt;Mt++)if(Ot=se[Mt],T.format!==Ci)if(It!==null)if(V){if(xt)if(T.layerUpdates.size>0){const qt=d0(Ot.width,Ot.height,T.format,T.type);for(const le of T.layerUpdates){const Xe=Ot.data.subarray(le*qt/Ot.data.BYTES_PER_ELEMENT,(le+1)*qt/Ot.data.BYTES_PER_ELEMENT);a.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,le,Ot.width,Ot.height,1,It,Xe)}T.clearLayerUpdates()}else a.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,0,Ot.width,Ot.height,St.depth,It,Ot.data)}else a.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Mt,Jt,Ot.width,Ot.height,St.depth,0,Ot.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else V?xt&&a.texSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,0,Ot.width,Ot.height,St.depth,It,te,Ot.data):a.texImage3D(o.TEXTURE_2D_ARRAY,Mt,Jt,Ot.width,Ot.height,St.depth,0,It,te,Ot.data)}else{V&&Bt&&a.texStorage2D(o.TEXTURE_2D,Vt,Jt,se[0].width,se[0].height);for(let Mt=0,gt=se.length;Mt<gt;Mt++)Ot=se[Mt],T.format!==Ci?It!==null?V?xt&&a.compressedTexSubImage2D(o.TEXTURE_2D,Mt,0,0,Ot.width,Ot.height,It,Ot.data):a.compressedTexImage2D(o.TEXTURE_2D,Mt,Jt,Ot.width,Ot.height,0,Ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?xt&&a.texSubImage2D(o.TEXTURE_2D,Mt,0,0,Ot.width,Ot.height,It,te,Ot.data):a.texImage2D(o.TEXTURE_2D,Mt,Jt,Ot.width,Ot.height,0,It,te,Ot.data)}else if(T.isDataArrayTexture)if(V){if(Bt&&a.texStorage3D(o.TEXTURE_2D_ARRAY,Vt,Jt,St.width,St.height,St.depth),xt)if(T.layerUpdates.size>0){const Mt=d0(St.width,St.height,T.format,T.type);for(const gt of T.layerUpdates){const qt=St.data.subarray(gt*Mt/St.data.BYTES_PER_ELEMENT,(gt+1)*Mt/St.data.BYTES_PER_ELEMENT);a.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,gt,St.width,St.height,1,It,te,qt)}T.clearLayerUpdates()}else a.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,St.width,St.height,St.depth,It,te,St.data)}else a.texImage3D(o.TEXTURE_2D_ARRAY,0,Jt,St.width,St.height,St.depth,0,It,te,St.data);else if(T.isData3DTexture)V?(Bt&&a.texStorage3D(o.TEXTURE_3D,Vt,Jt,St.width,St.height,St.depth),xt&&a.texSubImage3D(o.TEXTURE_3D,0,0,0,0,St.width,St.height,St.depth,It,te,St.data)):a.texImage3D(o.TEXTURE_3D,0,Jt,St.width,St.height,St.depth,0,It,te,St.data);else if(T.isFramebufferTexture){if(Bt)if(V)a.texStorage2D(o.TEXTURE_2D,Vt,Jt,St.width,St.height);else{let Mt=St.width,gt=St.height;for(let qt=0;qt<Vt;qt++)a.texImage2D(o.TEXTURE_2D,qt,Jt,Mt,gt,0,It,te,null),Mt>>=1,gt>>=1}}else if(se.length>0){if(V&&Bt){const Mt=Qe(se[0]);a.texStorage2D(o.TEXTURE_2D,Vt,Jt,Mt.width,Mt.height)}for(let Mt=0,gt=se.length;Mt<gt;Mt++)Ot=se[Mt],V?xt&&a.texSubImage2D(o.TEXTURE_2D,Mt,0,0,It,te,Ot):a.texImage2D(o.TEXTURE_2D,Mt,Jt,It,te,Ot);T.generateMipmaps=!1}else if(V){if(Bt){const Mt=Qe(St);a.texStorage2D(o.TEXTURE_2D,Vt,Jt,Mt.width,Mt.height)}xt&&a.texSubImage2D(o.TEXTURE_2D,0,0,0,It,te,St)}else a.texImage2D(o.TEXTURE_2D,0,Jt,It,te,St);y(T)&&S(pt),Xt.__version=ut.version,T.onUpdate&&T.onUpdate(T)}z.__version=T.version}function lt(z,T,tt){if(T.image.length!==6)return;const pt=Et(z,T),_t=T.source;a.bindTexture(o.TEXTURE_CUBE_MAP,z.__webglTexture,o.TEXTURE0+tt);const ut=s.get(_t);if(_t.version!==ut.__version||pt===!0){a.activeTexture(o.TEXTURE0+tt);const Xt=De.getPrimaries(De.workingColorSpace),Lt=T.colorSpace===ar?null:De.getPrimaries(T.colorSpace),Yt=T.colorSpace===ar||Xt===Lt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt);const jt=T.isCompressedTexture||T.image[0].isCompressedTexture,St=T.image[0]&&T.image[0].isDataTexture,It=[];for(let gt=0;gt<6;gt++)!jt&&!St?It[gt]=U(T.image[gt],!0,u.maxCubemapSize):It[gt]=St?T.image[gt].image:T.image[gt],It[gt]=ie(T,It[gt]);const te=It[0],Jt=f.convert(T.format,T.colorSpace),Ot=f.convert(T.type),se=N(T.internalFormat,Jt,Ot,T.colorSpace),V=T.isVideoTexture!==!0,Bt=ut.__version===void 0||pt===!0,xt=_t.dataReady;let Vt=X(T,te);ee(o.TEXTURE_CUBE_MAP,T);let Mt;if(jt){V&&Bt&&a.texStorage2D(o.TEXTURE_CUBE_MAP,Vt,se,te.width,te.height);for(let gt=0;gt<6;gt++){Mt=It[gt].mipmaps;for(let qt=0;qt<Mt.length;qt++){const le=Mt[qt];T.format!==Ci?Jt!==null?V?xt&&a.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,qt,0,0,le.width,le.height,Jt,le.data):a.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,qt,se,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?xt&&a.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,qt,0,0,le.width,le.height,Jt,Ot,le.data):a.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,qt,se,le.width,le.height,0,Jt,Ot,le.data)}}}else{if(Mt=T.mipmaps,V&&Bt){Mt.length>0&&Vt++;const gt=Qe(It[0]);a.texStorage2D(o.TEXTURE_CUBE_MAP,Vt,se,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(St){V?xt&&a.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,It[gt].width,It[gt].height,Jt,Ot,It[gt].data):a.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,se,It[gt].width,It[gt].height,0,Jt,Ot,It[gt].data);for(let qt=0;qt<Mt.length;qt++){const Xe=Mt[qt].image[gt].image;V?xt&&a.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,qt+1,0,0,Xe.width,Xe.height,Jt,Ot,Xe.data):a.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,qt+1,se,Xe.width,Xe.height,0,Jt,Ot,Xe.data)}}else{V?xt&&a.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Jt,Ot,It[gt]):a.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,se,Jt,Ot,It[gt]);for(let qt=0;qt<Mt.length;qt++){const le=Mt[qt];V?xt&&a.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,qt+1,0,0,Jt,Ot,le.image[gt]):a.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,qt+1,se,Jt,Ot,le.image[gt])}}}y(T)&&S(o.TEXTURE_CUBE_MAP),ut.__version=_t.version,T.onUpdate&&T.onUpdate(T)}z.__version=T.version}function Tt(z,T,tt,pt,_t,ut){const Xt=f.convert(tt.format,tt.colorSpace),Lt=f.convert(tt.type),Yt=N(tt.internalFormat,Xt,Lt,tt.colorSpace),jt=s.get(T),St=s.get(tt);if(St.__renderTarget=T,!jt.__hasExternalTextures){const It=Math.max(1,T.width>>ut),te=Math.max(1,T.height>>ut);_t===o.TEXTURE_3D||_t===o.TEXTURE_2D_ARRAY?a.texImage3D(_t,ut,Yt,It,te,T.depth,0,Xt,Lt,null):a.texImage2D(_t,ut,Yt,It,te,0,Xt,Lt,null)}a.bindFramebuffer(o.FRAMEBUFFER,z),fe(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,pt,_t,St.__webglTexture,0,Ct(T)):(_t===o.TEXTURE_2D||_t>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&_t<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,pt,_t,St.__webglTexture,ut),a.bindFramebuffer(o.FRAMEBUFFER,null)}function Gt(z,T,tt){if(o.bindRenderbuffer(o.RENDERBUFFER,z),T.depthBuffer){const pt=T.depthTexture,_t=pt&&pt.isDepthTexture?pt.type:null,ut=w(T.stencilBuffer,_t),Xt=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Lt=Ct(T);fe(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Lt,ut,T.width,T.height):tt?o.renderbufferStorageMultisample(o.RENDERBUFFER,Lt,ut,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,ut,T.width,T.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Xt,o.RENDERBUFFER,z)}else{const pt=T.textures;for(let _t=0;_t<pt.length;_t++){const ut=pt[_t],Xt=f.convert(ut.format,ut.colorSpace),Lt=f.convert(ut.type),Yt=N(ut.internalFormat,Xt,Lt,ut.colorSpace),jt=Ct(T);tt&&fe(T)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,jt,Yt,T.width,T.height):fe(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,jt,Yt,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,Yt,T.width,T.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Rt(z,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(a.bindFramebuffer(o.FRAMEBUFFER,z),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pt=s.get(T.depthTexture);pt.__renderTarget=T,(!pt.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ft(T.depthTexture,0);const _t=pt.__webglTexture,ut=Ct(T);if(T.depthTexture.format===rl)fe(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,_t,0,ut):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,_t,0);else if(T.depthTexture.format===sl)fe(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,_t,0,ut):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,_t,0);else throw new Error("Unknown depthTexture format")}function At(z){const T=s.get(z),tt=z.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==z.depthTexture){const pt=z.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),pt){const _t=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,pt.removeEventListener("dispose",_t)};pt.addEventListener("dispose",_t),T.__depthDisposeCallback=_t}T.__boundDepthTexture=pt}if(z.depthTexture&&!T.__autoAllocateDepthBuffer){if(tt)throw new Error("target.depthTexture not supported in Cube render targets");const pt=z.texture.mipmaps;pt&&pt.length>0?Rt(T.__webglFramebuffer[0],z):Rt(T.__webglFramebuffer,z)}else if(tt){T.__webglDepthbuffer=[];for(let pt=0;pt<6;pt++)if(a.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[pt]),T.__webglDepthbuffer[pt]===void 0)T.__webglDepthbuffer[pt]=o.createRenderbuffer(),Gt(T.__webglDepthbuffer[pt],z,!1);else{const _t=z.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ut=T.__webglDepthbuffer[pt];o.bindRenderbuffer(o.RENDERBUFFER,ut),o.framebufferRenderbuffer(o.FRAMEBUFFER,_t,o.RENDERBUFFER,ut)}}else{const pt=z.texture.mipmaps;if(pt&&pt.length>0?a.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[0]):a.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=o.createRenderbuffer(),Gt(T.__webglDepthbuffer,z,!1);else{const _t=z.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ut=T.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ut),o.framebufferRenderbuffer(o.FRAMEBUFFER,_t,o.RENDERBUFFER,ut)}}a.bindFramebuffer(o.FRAMEBUFFER,null)}function zt(z,T,tt){const pt=s.get(z);T!==void 0&&Tt(pt.__webglFramebuffer,z,z.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),tt!==void 0&&At(z)}function ce(z){const T=z.texture,tt=s.get(z),pt=s.get(T);z.addEventListener("dispose",O);const _t=z.textures,ut=z.isWebGLCubeRenderTarget===!0,Xt=_t.length>1;if(Xt||(pt.__webglTexture===void 0&&(pt.__webglTexture=o.createTexture()),pt.__version=T.version,h.memory.textures++),ut){tt.__webglFramebuffer=[];for(let Lt=0;Lt<6;Lt++)if(T.mipmaps&&T.mipmaps.length>0){tt.__webglFramebuffer[Lt]=[];for(let Yt=0;Yt<T.mipmaps.length;Yt++)tt.__webglFramebuffer[Lt][Yt]=o.createFramebuffer()}else tt.__webglFramebuffer[Lt]=o.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){tt.__webglFramebuffer=[];for(let Lt=0;Lt<T.mipmaps.length;Lt++)tt.__webglFramebuffer[Lt]=o.createFramebuffer()}else tt.__webglFramebuffer=o.createFramebuffer();if(Xt)for(let Lt=0,Yt=_t.length;Lt<Yt;Lt++){const jt=s.get(_t[Lt]);jt.__webglTexture===void 0&&(jt.__webglTexture=o.createTexture(),h.memory.textures++)}if(z.samples>0&&fe(z)===!1){tt.__webglMultisampledFramebuffer=o.createFramebuffer(),tt.__webglColorRenderbuffer=[],a.bindFramebuffer(o.FRAMEBUFFER,tt.__webglMultisampledFramebuffer);for(let Lt=0;Lt<_t.length;Lt++){const Yt=_t[Lt];tt.__webglColorRenderbuffer[Lt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,tt.__webglColorRenderbuffer[Lt]);const jt=f.convert(Yt.format,Yt.colorSpace),St=f.convert(Yt.type),It=N(Yt.internalFormat,jt,St,Yt.colorSpace,z.isXRRenderTarget===!0),te=Ct(z);o.renderbufferStorageMultisample(o.RENDERBUFFER,te,It,z.width,z.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Lt,o.RENDERBUFFER,tt.__webglColorRenderbuffer[Lt])}o.bindRenderbuffer(o.RENDERBUFFER,null),z.depthBuffer&&(tt.__webglDepthRenderbuffer=o.createRenderbuffer(),Gt(tt.__webglDepthRenderbuffer,z,!0)),a.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ut){a.bindTexture(o.TEXTURE_CUBE_MAP,pt.__webglTexture),ee(o.TEXTURE_CUBE_MAP,T);for(let Lt=0;Lt<6;Lt++)if(T.mipmaps&&T.mipmaps.length>0)for(let Yt=0;Yt<T.mipmaps.length;Yt++)Tt(tt.__webglFramebuffer[Lt][Yt],z,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,Yt);else Tt(tt.__webglFramebuffer[Lt],z,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,0);y(T)&&S(o.TEXTURE_CUBE_MAP),a.unbindTexture()}else if(Xt){for(let Lt=0,Yt=_t.length;Lt<Yt;Lt++){const jt=_t[Lt],St=s.get(jt);a.bindTexture(o.TEXTURE_2D,St.__webglTexture),ee(o.TEXTURE_2D,jt),Tt(tt.__webglFramebuffer,z,jt,o.COLOR_ATTACHMENT0+Lt,o.TEXTURE_2D,0),y(jt)&&S(o.TEXTURE_2D)}a.unbindTexture()}else{let Lt=o.TEXTURE_2D;if((z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(Lt=z.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),a.bindTexture(Lt,pt.__webglTexture),ee(Lt,T),T.mipmaps&&T.mipmaps.length>0)for(let Yt=0;Yt<T.mipmaps.length;Yt++)Tt(tt.__webglFramebuffer[Yt],z,T,o.COLOR_ATTACHMENT0,Lt,Yt);else Tt(tt.__webglFramebuffer,z,T,o.COLOR_ATTACHMENT0,Lt,0);y(T)&&S(Lt),a.unbindTexture()}z.depthBuffer&&At(z)}function H(z){const T=z.textures;for(let tt=0,pt=T.length;tt<pt;tt++){const _t=T[tt];if(y(_t)){const ut=L(z),Xt=s.get(_t).__webglTexture;a.bindTexture(ut,Xt),S(ut),a.unbindTexture()}}}const tn=[],he=[];function ue(z){if(z.samples>0){if(fe(z)===!1){const T=z.textures,tt=z.width,pt=z.height;let _t=o.COLOR_BUFFER_BIT;const ut=z.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Xt=s.get(z),Lt=T.length>1;if(Lt)for(let jt=0;jt<T.length;jt++)a.bindFramebuffer(o.FRAMEBUFFER,Xt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+jt,o.RENDERBUFFER,null),a.bindFramebuffer(o.FRAMEBUFFER,Xt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+jt,o.TEXTURE_2D,null,0);a.bindFramebuffer(o.READ_FRAMEBUFFER,Xt.__webglMultisampledFramebuffer);const Yt=z.texture.mipmaps;Yt&&Yt.length>0?a.bindFramebuffer(o.DRAW_FRAMEBUFFER,Xt.__webglFramebuffer[0]):a.bindFramebuffer(o.DRAW_FRAMEBUFFER,Xt.__webglFramebuffer);for(let jt=0;jt<T.length;jt++){if(z.resolveDepthBuffer&&(z.depthBuffer&&(_t|=o.DEPTH_BUFFER_BIT),z.stencilBuffer&&z.resolveStencilBuffer&&(_t|=o.STENCIL_BUFFER_BIT)),Lt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Xt.__webglColorRenderbuffer[jt]);const St=s.get(T[jt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,St,0)}o.blitFramebuffer(0,0,tt,pt,0,0,tt,pt,_t,o.NEAREST),g===!0&&(tn.length=0,he.length=0,tn.push(o.COLOR_ATTACHMENT0+jt),z.depthBuffer&&z.resolveDepthBuffer===!1&&(tn.push(ut),he.push(ut),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,he)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,tn))}if(a.bindFramebuffer(o.READ_FRAMEBUFFER,null),a.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Lt)for(let jt=0;jt<T.length;jt++){a.bindFramebuffer(o.FRAMEBUFFER,Xt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+jt,o.RENDERBUFFER,Xt.__webglColorRenderbuffer[jt]);const St=s.get(T[jt]).__webglTexture;a.bindFramebuffer(o.FRAMEBUFFER,Xt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+jt,o.TEXTURE_2D,St,0)}a.bindFramebuffer(o.DRAW_FRAMEBUFFER,Xt.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.resolveDepthBuffer===!1&&g){const T=z.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[T])}}}function Ct(z){return Math.min(u.maxSamples,z.samples)}function fe(z){const T=s.get(z);return z.samples>0&&n.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Zt(z){const T=h.render.frame;v.get(z)!==T&&(v.set(z,T),z.update())}function ie(z,T){const tt=z.colorSpace,pt=z.format,_t=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||tt!==$s&&tt!==ar&&(De.getTransfer(tt)===Ve?(pt!==Ci||_t!==ya)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",tt)),T}function Qe(z){return typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement?(_.width=z.naturalWidth||z.width,_.height=z.naturalHeight||z.height):typeof VideoFrame<"u"&&z instanceof VideoFrame?(_.width=z.displayWidth,_.height=z.displayHeight):(_.width=z.width,_.height=z.height),_}this.allocateTextureUnit=st,this.resetTextureUnits=ot,this.setTexture2D=ft,this.setTexture2DArray=Y,this.setTexture3D=nt,this.setTextureCube=K,this.rebindTextures=zt,this.setupRenderTarget=ce,this.updateRenderTargetMipmap=H,this.updateMultisampleRenderTarget=ue,this.setupDepthRenderbuffer=At,this.setupFrameBufferTexture=Tt,this.useMultisampledRTT=fe}function iR(o,n){function a(s,u=ar){let f;const h=De.getTransfer(u);if(s===ya)return o.UNSIGNED_BYTE;if(s===vp)return o.UNSIGNED_SHORT_4_4_4_4;if(s===Sp)return o.UNSIGNED_SHORT_5_5_5_1;if(s===X0)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===G0)return o.BYTE;if(s===V0)return o.SHORT;if(s===il)return o.UNSIGNED_SHORT;if(s===_p)return o.INT;if(s===qr)return o.UNSIGNED_INT;if(s===va)return o.FLOAT;if(s===ol)return o.HALF_FLOAT;if(s===q0)return o.ALPHA;if(s===k0)return o.RGB;if(s===Ci)return o.RGBA;if(s===rl)return o.DEPTH_COMPONENT;if(s===sl)return o.DEPTH_STENCIL;if(s===Y0)return o.RED;if(s===xp)return o.RED_INTEGER;if(s===W0)return o.RG;if(s===yp)return o.RG_INTEGER;if(s===Mp)return o.RGBA_INTEGER;if(s===rc||s===sc||s===oc||s===lc)if(h===Ve)if(f=n.get("WEBGL_compressed_texture_s3tc_srgb"),f!==null){if(s===rc)return f.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===sc)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===oc)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===lc)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(f=n.get("WEBGL_compressed_texture_s3tc"),f!==null){if(s===rc)return f.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===sc)return f.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===oc)return f.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===lc)return f.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Gd||s===Vd||s===Xd||s===qd)if(f=n.get("WEBGL_compressed_texture_pvrtc"),f!==null){if(s===Gd)return f.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Vd)return f.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Xd)return f.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===qd)return f.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===kd||s===Yd||s===Wd)if(f=n.get("WEBGL_compressed_texture_etc"),f!==null){if(s===kd||s===Yd)return h===Ve?f.COMPRESSED_SRGB8_ETC2:f.COMPRESSED_RGB8_ETC2;if(s===Wd)return h===Ve?f.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:f.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===jd||s===Zd||s===Kd||s===Qd||s===Jd||s===$d||s===tp||s===ep||s===np||s===ip||s===ap||s===rp||s===sp||s===op)if(f=n.get("WEBGL_compressed_texture_astc"),f!==null){if(s===jd)return h===Ve?f.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:f.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Zd)return h===Ve?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:f.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Kd)return h===Ve?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:f.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Qd)return h===Ve?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:f.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Jd)return h===Ve?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:f.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===$d)return h===Ve?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:f.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===tp)return h===Ve?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:f.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ep)return h===Ve?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:f.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===np)return h===Ve?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:f.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ip)return h===Ve?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:f.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ap)return h===Ve?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:f.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===rp)return h===Ve?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:f.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===sp)return h===Ve?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:f.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===op)return h===Ve?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:f.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===uc||s===lp||s===up)if(f=n.get("EXT_texture_compression_bptc"),f!==null){if(s===uc)return h===Ve?f.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:f.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===lp)return f.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===up)return f.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===j0||s===cp||s===fp||s===hp)if(f=n.get("EXT_texture_compression_rgtc"),f!==null){if(s===uc)return f.COMPRESSED_RED_RGTC1_EXT;if(s===cp)return f.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===fp)return f.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===hp)return f.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===al?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:a}}const aR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rR=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class sR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(n,a,s){if(this.texture===null){const u=new jn,f=n.properties.get(u);f.__webglTexture=a.texture,(a.depthNear!==s.depthNear||a.depthFar!==s.depthFar)&&(this.depthNear=a.depthNear,this.depthFar=a.depthFar),this.texture=u}}getMesh(n){if(this.texture!==null&&this.mesh===null){const a=n.cameras[0].viewport,s=new Ea({vertexShader:aR,fragmentShader:rR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:a.z},depthHeight:{value:a.w}}});this.mesh=new qi(new gc(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class oR extends eo{constructor(n,a){super();const s=this;let u=null,f=1,h=null,d="local-floor",g=1,_=null,v=null,p=null,x=null,M=null,C=null;const U=new sR,y=a.getContextAttributes();let S=null,L=null;const N=[],w=[],X=new Le;let B=null;const O=new _i;O.viewport=new rn;const I=new _i;I.viewport=new rn;const D=[O,I],b=new CE;let F=null,ot=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(A){let q=N[A];return q===void 0&&(q=new xd,N[A]=q),q.getTargetRaySpace()},this.getControllerGrip=function(A){let q=N[A];return q===void 0&&(q=new xd,N[A]=q),q.getGripSpace()},this.getHand=function(A){let q=N[A];return q===void 0&&(q=new xd,N[A]=q),q.getHandSpace()};function st(A){const q=w.indexOf(A.inputSource);if(q===-1)return;const ht=N[q];ht!==void 0&&(ht.update(A.inputSource,A.frame,_||h),ht.dispatchEvent({type:A.type,data:A.inputSource}))}function mt(){u.removeEventListener("select",st),u.removeEventListener("selectstart",st),u.removeEventListener("selectend",st),u.removeEventListener("squeeze",st),u.removeEventListener("squeezestart",st),u.removeEventListener("squeezeend",st),u.removeEventListener("end",mt),u.removeEventListener("inputsourceschange",ft);for(let A=0;A<N.length;A++){const q=w[A];q!==null&&(w[A]=null,N[A].disconnect(q))}F=null,ot=null,U.reset(),n.setRenderTarget(S),M=null,x=null,p=null,u=null,L=null,Et.stop(),s.isPresenting=!1,n.setPixelRatio(B),n.setSize(X.width,X.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(A){f=A,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(A){d=A,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return _||h},this.setReferenceSpace=function(A){_=A},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return p},this.getFrame=function(){return C},this.getSession=function(){return u},this.setSession=async function(A){if(u=A,u!==null){if(S=n.getRenderTarget(),u.addEventListener("select",st),u.addEventListener("selectstart",st),u.addEventListener("selectend",st),u.addEventListener("squeeze",st),u.addEventListener("squeezestart",st),u.addEventListener("squeezeend",st),u.addEventListener("end",mt),u.addEventListener("inputsourceschange",ft),y.xrCompatible!==!0&&await a.makeXRCompatible(),B=n.getPixelRatio(),n.getSize(X),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let ht=null,lt=null,Tt=null;y.depth&&(Tt=y.stencil?a.DEPTH24_STENCIL8:a.DEPTH_COMPONENT24,ht=y.stencil?sl:rl,lt=y.stencil?al:qr);const Gt={colorFormat:a.RGBA8,depthFormat:Tt,scaleFactor:f};p=new XRWebGLBinding(u,a),x=p.createProjectionLayer(Gt),u.updateRenderState({layers:[x]}),n.setPixelRatio(1),n.setSize(x.textureWidth,x.textureHeight,!1),L=new kr(x.textureWidth,x.textureHeight,{format:Ci,type:ya,depthTexture:new oS(x.textureWidth,x.textureHeight,lt,void 0,void 0,void 0,void 0,void 0,void 0,ht),stencilBuffer:y.stencil,colorSpace:n.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const ht={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:f};M=new XRWebGLLayer(u,a,ht),u.updateRenderState({baseLayer:M}),n.setPixelRatio(1),n.setSize(M.framebufferWidth,M.framebufferHeight,!1),L=new kr(M.framebufferWidth,M.framebufferHeight,{format:Ci,type:ya,colorSpace:n.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(g),_=null,h=await u.requestReferenceSpace(d),Et.setContext(u),Et.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(u!==null)return u.environmentBlendMode},this.getDepthTexture=function(){return U.getDepthTexture()};function ft(A){for(let q=0;q<A.removed.length;q++){const ht=A.removed[q],lt=w.indexOf(ht);lt>=0&&(w[lt]=null,N[lt].disconnect(ht))}for(let q=0;q<A.added.length;q++){const ht=A.added[q];let lt=w.indexOf(ht);if(lt===-1){for(let Gt=0;Gt<N.length;Gt++)if(Gt>=w.length){w.push(ht),lt=Gt;break}else if(w[Gt]===null){w[Gt]=ht,lt=Gt;break}if(lt===-1)break}const Tt=N[lt];Tt&&Tt.connect(ht)}}const Y=new it,nt=new it;function K(A,q,ht){Y.setFromMatrixPosition(q.matrixWorld),nt.setFromMatrixPosition(ht.matrixWorld);const lt=Y.distanceTo(nt),Tt=q.projectionMatrix.elements,Gt=ht.projectionMatrix.elements,Rt=Tt[14]/(Tt[10]-1),At=Tt[14]/(Tt[10]+1),zt=(Tt[9]+1)/Tt[5],ce=(Tt[9]-1)/Tt[5],H=(Tt[8]-1)/Tt[0],tn=(Gt[8]+1)/Gt[0],he=Rt*H,ue=Rt*tn,Ct=lt/(-H+tn),fe=Ct*-H;if(q.matrixWorld.decompose(A.position,A.quaternion,A.scale),A.translateX(fe),A.translateZ(Ct),A.matrixWorld.compose(A.position,A.quaternion,A.scale),A.matrixWorldInverse.copy(A.matrixWorld).invert(),Tt[10]===-1)A.projectionMatrix.copy(q.projectionMatrix),A.projectionMatrixInverse.copy(q.projectionMatrixInverse);else{const Zt=Rt+Ct,ie=At+Ct,Qe=he-fe,z=ue+(lt-fe),T=zt*At/ie*Zt,tt=ce*At/ie*Zt;A.projectionMatrix.makePerspective(Qe,z,T,tt,Zt,ie),A.projectionMatrixInverse.copy(A.projectionMatrix).invert()}}function vt(A,q){q===null?A.matrixWorld.copy(A.matrix):A.matrixWorld.multiplyMatrices(q.matrixWorld,A.matrix),A.matrixWorldInverse.copy(A.matrixWorld).invert()}this.updateCamera=function(A){if(u===null)return;let q=A.near,ht=A.far;U.texture!==null&&(U.depthNear>0&&(q=U.depthNear),U.depthFar>0&&(ht=U.depthFar)),b.near=I.near=O.near=q,b.far=I.far=O.far=ht,(F!==b.near||ot!==b.far)&&(u.updateRenderState({depthNear:b.near,depthFar:b.far}),F=b.near,ot=b.far),O.layers.mask=A.layers.mask|2,I.layers.mask=A.layers.mask|4,b.layers.mask=O.layers.mask|I.layers.mask;const lt=A.parent,Tt=b.cameras;vt(b,lt);for(let Gt=0;Gt<Tt.length;Gt++)vt(Tt[Gt],lt);Tt.length===2?K(b,O,I):b.projectionMatrix.copy(O.projectionMatrix),yt(A,b,lt)};function yt(A,q,ht){ht===null?A.matrix.copy(q.matrixWorld):(A.matrix.copy(ht.matrixWorld),A.matrix.invert(),A.matrix.multiply(q.matrixWorld)),A.matrix.decompose(A.position,A.quaternion,A.scale),A.updateMatrixWorld(!0),A.projectionMatrix.copy(q.projectionMatrix),A.projectionMatrixInverse.copy(q.projectionMatrixInverse),A.isPerspectiveCamera&&(A.fov=dp*2*Math.atan(1/A.projectionMatrix.elements[5]),A.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(x===null&&M===null))return g},this.setFoveation=function(A){g=A,x!==null&&(x.fixedFoveation=A),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=A)},this.hasDepthSensing=function(){return U.texture!==null},this.getDepthSensingMesh=function(){return U.getMesh(b)};let Ht=null;function ee(A,q){if(v=q.getViewerPose(_||h),C=q,v!==null){const ht=v.views;M!==null&&(n.setRenderTargetFramebuffer(L,M.framebuffer),n.setRenderTarget(L));let lt=!1;ht.length!==b.cameras.length&&(b.cameras.length=0,lt=!0);for(let Rt=0;Rt<ht.length;Rt++){const At=ht[Rt];let zt=null;if(M!==null)zt=M.getViewport(At);else{const H=p.getViewSubImage(x,At);zt=H.viewport,Rt===0&&(n.setRenderTargetTextures(L,H.colorTexture,H.depthStencilTexture),n.setRenderTarget(L))}let ce=D[Rt];ce===void 0&&(ce=new _i,ce.layers.enable(Rt),ce.viewport=new rn,D[Rt]=ce),ce.matrix.fromArray(At.transform.matrix),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.projectionMatrix.fromArray(At.projectionMatrix),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert(),ce.viewport.set(zt.x,zt.y,zt.width,zt.height),Rt===0&&(b.matrix.copy(ce.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),lt===!0&&b.cameras.push(ce)}const Tt=u.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")&&u.depthUsage=="gpu-optimized"&&p){const Rt=p.getDepthInformation(ht[0]);Rt&&Rt.isValid&&Rt.texture&&U.init(n,Rt,u.renderState)}}for(let ht=0;ht<N.length;ht++){const lt=w[ht],Tt=N[ht];lt!==null&&Tt!==void 0&&Tt.update(lt,q,_||h)}Ht&&Ht(A,q),q.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:q}),C=null}const Et=new lS;Et.setAnimationLoop(ee),this.setAnimationLoop=function(A){Ht=A},this.dispose=function(){}}}const Br=new Ma,lR=new dn;function uR(o,n){function a(y,S){y.matrixAutoUpdate===!0&&y.updateMatrix(),S.value.copy(y.matrix)}function s(y,S){S.color.getRGB(y.fogColor.value,iS(o)),S.isFog?(y.fogNear.value=S.near,y.fogFar.value=S.far):S.isFogExp2&&(y.fogDensity.value=S.density)}function u(y,S,L,N,w){S.isMeshBasicMaterial||S.isMeshLambertMaterial?f(y,S):S.isMeshToonMaterial?(f(y,S),p(y,S)):S.isMeshPhongMaterial?(f(y,S),v(y,S)):S.isMeshStandardMaterial?(f(y,S),x(y,S),S.isMeshPhysicalMaterial&&M(y,S,w)):S.isMeshMatcapMaterial?(f(y,S),C(y,S)):S.isMeshDepthMaterial?f(y,S):S.isMeshDistanceMaterial?(f(y,S),U(y,S)):S.isMeshNormalMaterial?f(y,S):S.isLineBasicMaterial?(h(y,S),S.isLineDashedMaterial&&d(y,S)):S.isPointsMaterial?g(y,S,L,N):S.isSpriteMaterial?_(y,S):S.isShadowMaterial?(y.color.value.copy(S.color),y.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function f(y,S){y.opacity.value=S.opacity,S.color&&y.diffuse.value.copy(S.color),S.emissive&&y.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(y.map.value=S.map,a(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,a(S.alphaMap,y.alphaMapTransform)),S.bumpMap&&(y.bumpMap.value=S.bumpMap,a(S.bumpMap,y.bumpMapTransform),y.bumpScale.value=S.bumpScale,S.side===Wn&&(y.bumpScale.value*=-1)),S.normalMap&&(y.normalMap.value=S.normalMap,a(S.normalMap,y.normalMapTransform),y.normalScale.value.copy(S.normalScale),S.side===Wn&&y.normalScale.value.negate()),S.displacementMap&&(y.displacementMap.value=S.displacementMap,a(S.displacementMap,y.displacementMapTransform),y.displacementScale.value=S.displacementScale,y.displacementBias.value=S.displacementBias),S.emissiveMap&&(y.emissiveMap.value=S.emissiveMap,a(S.emissiveMap,y.emissiveMapTransform)),S.specularMap&&(y.specularMap.value=S.specularMap,a(S.specularMap,y.specularMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest);const L=n.get(S),N=L.envMap,w=L.envMapRotation;N&&(y.envMap.value=N,Br.copy(w),Br.x*=-1,Br.y*=-1,Br.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Br.y*=-1,Br.z*=-1),y.envMapRotation.value.setFromMatrix4(lR.makeRotationFromEuler(Br)),y.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=S.reflectivity,y.ior.value=S.ior,y.refractionRatio.value=S.refractionRatio),S.lightMap&&(y.lightMap.value=S.lightMap,y.lightMapIntensity.value=S.lightMapIntensity,a(S.lightMap,y.lightMapTransform)),S.aoMap&&(y.aoMap.value=S.aoMap,y.aoMapIntensity.value=S.aoMapIntensity,a(S.aoMap,y.aoMapTransform))}function h(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,S.map&&(y.map.value=S.map,a(S.map,y.mapTransform))}function d(y,S){y.dashSize.value=S.dashSize,y.totalSize.value=S.dashSize+S.gapSize,y.scale.value=S.scale}function g(y,S,L,N){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.size.value=S.size*L,y.scale.value=N*.5,S.map&&(y.map.value=S.map,a(S.map,y.uvTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,a(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function _(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.rotation.value=S.rotation,S.map&&(y.map.value=S.map,a(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,a(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function v(y,S){y.specular.value.copy(S.specular),y.shininess.value=Math.max(S.shininess,1e-4)}function p(y,S){S.gradientMap&&(y.gradientMap.value=S.gradientMap)}function x(y,S){y.metalness.value=S.metalness,S.metalnessMap&&(y.metalnessMap.value=S.metalnessMap,a(S.metalnessMap,y.metalnessMapTransform)),y.roughness.value=S.roughness,S.roughnessMap&&(y.roughnessMap.value=S.roughnessMap,a(S.roughnessMap,y.roughnessMapTransform)),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)}function M(y,S,L){y.ior.value=S.ior,S.sheen>0&&(y.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),y.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(y.sheenColorMap.value=S.sheenColorMap,a(S.sheenColorMap,y.sheenColorMapTransform)),S.sheenRoughnessMap&&(y.sheenRoughnessMap.value=S.sheenRoughnessMap,a(S.sheenRoughnessMap,y.sheenRoughnessMapTransform))),S.clearcoat>0&&(y.clearcoat.value=S.clearcoat,y.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(y.clearcoatMap.value=S.clearcoatMap,a(S.clearcoatMap,y.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,a(S.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(y.clearcoatNormalMap.value=S.clearcoatNormalMap,a(S.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===Wn&&y.clearcoatNormalScale.value.negate())),S.dispersion>0&&(y.dispersion.value=S.dispersion),S.iridescence>0&&(y.iridescence.value=S.iridescence,y.iridescenceIOR.value=S.iridescenceIOR,y.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(y.iridescenceMap.value=S.iridescenceMap,a(S.iridescenceMap,y.iridescenceMapTransform)),S.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=S.iridescenceThicknessMap,a(S.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),S.transmission>0&&(y.transmission.value=S.transmission,y.transmissionSamplerMap.value=L.texture,y.transmissionSamplerSize.value.set(L.width,L.height),S.transmissionMap&&(y.transmissionMap.value=S.transmissionMap,a(S.transmissionMap,y.transmissionMapTransform)),y.thickness.value=S.thickness,S.thicknessMap&&(y.thicknessMap.value=S.thicknessMap,a(S.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=S.attenuationDistance,y.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(y.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(y.anisotropyMap.value=S.anisotropyMap,a(S.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=S.specularIntensity,y.specularColor.value.copy(S.specularColor),S.specularColorMap&&(y.specularColorMap.value=S.specularColorMap,a(S.specularColorMap,y.specularColorMapTransform)),S.specularIntensityMap&&(y.specularIntensityMap.value=S.specularIntensityMap,a(S.specularIntensityMap,y.specularIntensityMapTransform))}function C(y,S){S.matcap&&(y.matcap.value=S.matcap)}function U(y,S){const L=n.get(S).light;y.referencePosition.value.setFromMatrixPosition(L.matrixWorld),y.nearDistance.value=L.shadow.camera.near,y.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:u}}function cR(o,n,a,s){let u={},f={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function g(L,N){const w=N.program;s.uniformBlockBinding(L,w)}function _(L,N){let w=u[L.id];w===void 0&&(C(L),w=v(L),u[L.id]=w,L.addEventListener("dispose",y));const X=N.program;s.updateUBOMapping(L,X);const B=n.render.frame;f[L.id]!==B&&(x(L),f[L.id]=B)}function v(L){const N=p();L.__bindingPointIndex=N;const w=o.createBuffer(),X=L.__size,B=L.usage;return o.bindBuffer(o.UNIFORM_BUFFER,w),o.bufferData(o.UNIFORM_BUFFER,X,B),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,N,w),w}function p(){for(let L=0;L<d;L++)if(h.indexOf(L)===-1)return h.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(L){const N=u[L.id],w=L.uniforms,X=L.__cache;o.bindBuffer(o.UNIFORM_BUFFER,N);for(let B=0,O=w.length;B<O;B++){const I=Array.isArray(w[B])?w[B]:[w[B]];for(let D=0,b=I.length;D<b;D++){const F=I[D];if(M(F,B,D,X)===!0){const ot=F.__offset,st=Array.isArray(F.value)?F.value:[F.value];let mt=0;for(let ft=0;ft<st.length;ft++){const Y=st[ft],nt=U(Y);typeof Y=="number"||typeof Y=="boolean"?(F.__data[0]=Y,o.bufferSubData(o.UNIFORM_BUFFER,ot+mt,F.__data)):Y.isMatrix3?(F.__data[0]=Y.elements[0],F.__data[1]=Y.elements[1],F.__data[2]=Y.elements[2],F.__data[3]=0,F.__data[4]=Y.elements[3],F.__data[5]=Y.elements[4],F.__data[6]=Y.elements[5],F.__data[7]=0,F.__data[8]=Y.elements[6],F.__data[9]=Y.elements[7],F.__data[10]=Y.elements[8],F.__data[11]=0):(Y.toArray(F.__data,mt),mt+=nt.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,ot,F.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(L,N,w,X){const B=L.value,O=N+"_"+w;if(X[O]===void 0)return typeof B=="number"||typeof B=="boolean"?X[O]=B:X[O]=B.clone(),!0;{const I=X[O];if(typeof B=="number"||typeof B=="boolean"){if(I!==B)return X[O]=B,!0}else if(I.equals(B)===!1)return I.copy(B),!0}return!1}function C(L){const N=L.uniforms;let w=0;const X=16;for(let O=0,I=N.length;O<I;O++){const D=Array.isArray(N[O])?N[O]:[N[O]];for(let b=0,F=D.length;b<F;b++){const ot=D[b],st=Array.isArray(ot.value)?ot.value:[ot.value];for(let mt=0,ft=st.length;mt<ft;mt++){const Y=st[mt],nt=U(Y),K=w%X,vt=K%nt.boundary,yt=K+vt;w+=vt,yt!==0&&X-yt<nt.storage&&(w+=X-yt),ot.__data=new Float32Array(nt.storage/Float32Array.BYTES_PER_ELEMENT),ot.__offset=w,w+=nt.storage}}}const B=w%X;return B>0&&(w+=X-B),L.__size=w,L.__cache={},this}function U(L){const N={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(N.boundary=4,N.storage=4):L.isVector2?(N.boundary=8,N.storage=8):L.isVector3||L.isColor?(N.boundary=16,N.storage=12):L.isVector4?(N.boundary=16,N.storage=16):L.isMatrix3?(N.boundary=48,N.storage=48):L.isMatrix4?(N.boundary=64,N.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),N}function y(L){const N=L.target;N.removeEventListener("dispose",y);const w=h.indexOf(N.__bindingPointIndex);h.splice(w,1),o.deleteBuffer(u[N.id]),delete u[N.id],delete f[N.id]}function S(){for(const L in u)o.deleteBuffer(u[L]);h=[],u={},f={}}return{bind:g,update:_,dispose:S}}class fR{constructor(n={}){const{canvas:a=YM(),context:s=null,depth:u=!0,stencil:f=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:g=!0,preserveDrawingBuffer:_=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:p=!1,reverseDepthBuffer:x=!1}=n;this.isWebGLRenderer=!0;let M;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=s.getContextAttributes().alpha}else M=h;const C=new Uint32Array(4),U=new Int32Array(4);let y=null,S=null;const L=[],N=[];this.domElement=a,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=sr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let X=!1;this._outputColorSpace=gi;let B=0,O=0,I=null,D=-1,b=null;const F=new rn,ot=new rn;let st=null;const mt=new Re(0);let ft=0,Y=a.width,nt=a.height,K=1,vt=null,yt=null;const Ht=new rn(0,0,Y,nt),ee=new rn(0,0,Y,nt);let Et=!1;const A=new sS;let q=!1,ht=!1;const lt=new dn,Tt=new dn,Gt=new it,Rt=new rn,At={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let zt=!1;function ce(){return I===null?K:1}let H=s;function tn(R,Z){return a.getContext(R,Z)}try{const R={alpha:!0,depth:u,stencil:f,antialias:d,premultipliedAlpha:g,preserveDrawingBuffer:_,powerPreference:v,failIfMajorPerformanceCaveat:p};if("setAttribute"in a&&a.setAttribute("data-engine",`three.js r${gp}`),a.addEventListener("webglcontextlost",Vt,!1),a.addEventListener("webglcontextrestored",Mt,!1),a.addEventListener("webglcontextcreationerror",gt,!1),H===null){const Z="webgl2";if(H=tn(Z,R),H===null)throw tn(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let he,ue,Ct,fe,Zt,ie,Qe,z,T,tt,pt,_t,ut,Xt,Lt,Yt,jt,St,It,te,Jt,Ot,se,V;function Bt(){he=new yb(H),he.init(),Ot=new iR(H,he),ue=new pb(H,he,n,Ot),Ct=new eR(H,he),ue.reverseDepthBuffer&&x&&Ct.buffers.depth.setReversed(!0),fe=new Tb(H),Zt=new VA,ie=new nR(H,he,Ct,Zt,ue,Ot,fe),Qe=new gb(w),z=new xb(w),T=new DE(H),se=new hb(H,T),tt=new Mb(H,T,fe,se),pt=new Ab(H,tt,T,fe),It=new bb(H,ue,ie),Yt=new mb(Zt),_t=new GA(w,Qe,z,he,ue,se,Yt),ut=new uR(w,Zt),Xt=new qA,Lt=new KA(he),St=new fb(w,Qe,z,Ct,pt,M,g),jt=new $A(w,pt,ue),V=new cR(H,fe,ue,Ct),te=new db(H,he,fe),Jt=new Eb(H,he,fe),fe.programs=_t.programs,w.capabilities=ue,w.extensions=he,w.properties=Zt,w.renderLists=Xt,w.shadowMap=jt,w.state=Ct,w.info=fe}Bt();const xt=new oR(w,H);this.xr=xt,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const R=he.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=he.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(R){R!==void 0&&(K=R,this.setSize(Y,nt,!1))},this.getSize=function(R){return R.set(Y,nt)},this.setSize=function(R,Z,at=!0){if(xt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=R,nt=Z,a.width=Math.floor(R*K),a.height=Math.floor(Z*K),at===!0&&(a.style.width=R+"px",a.style.height=Z+"px"),this.setViewport(0,0,R,Z)},this.getDrawingBufferSize=function(R){return R.set(Y*K,nt*K).floor()},this.setDrawingBufferSize=function(R,Z,at){Y=R,nt=Z,K=at,a.width=Math.floor(R*at),a.height=Math.floor(Z*at),this.setViewport(0,0,R,Z)},this.getCurrentViewport=function(R){return R.copy(F)},this.getViewport=function(R){return R.copy(Ht)},this.setViewport=function(R,Z,at,rt){R.isVector4?Ht.set(R.x,R.y,R.z,R.w):Ht.set(R,Z,at,rt),Ct.viewport(F.copy(Ht).multiplyScalar(K).round())},this.getScissor=function(R){return R.copy(ee)},this.setScissor=function(R,Z,at,rt){R.isVector4?ee.set(R.x,R.y,R.z,R.w):ee.set(R,Z,at,rt),Ct.scissor(ot.copy(ee).multiplyScalar(K).round())},this.getScissorTest=function(){return Et},this.setScissorTest=function(R){Ct.setScissorTest(Et=R)},this.setOpaqueSort=function(R){vt=R},this.setTransparentSort=function(R){yt=R},this.getClearColor=function(R){return R.copy(St.getClearColor())},this.setClearColor=function(){St.setClearColor(...arguments)},this.getClearAlpha=function(){return St.getClearAlpha()},this.setClearAlpha=function(){St.setClearAlpha(...arguments)},this.clear=function(R=!0,Z=!0,at=!0){let rt=0;if(R){let Q=!1;if(I!==null){const bt=I.texture.format;Q=bt===Mp||bt===yp||bt===xp}if(Q){const bt=I.texture.type,wt=bt===ya||bt===qr||bt===il||bt===al||bt===vp||bt===Sp,Nt=St.getClearColor(),Dt=St.getClearAlpha(),$t=Nt.r,re=Nt.g,Qt=Nt.b;wt?(C[0]=$t,C[1]=re,C[2]=Qt,C[3]=Dt,H.clearBufferuiv(H.COLOR,0,C)):(U[0]=$t,U[1]=re,U[2]=Qt,U[3]=Dt,H.clearBufferiv(H.COLOR,0,U))}else rt|=H.COLOR_BUFFER_BIT}Z&&(rt|=H.DEPTH_BUFFER_BIT),at&&(rt|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(rt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){a.removeEventListener("webglcontextlost",Vt,!1),a.removeEventListener("webglcontextrestored",Mt,!1),a.removeEventListener("webglcontextcreationerror",gt,!1),St.dispose(),Xt.dispose(),Lt.dispose(),Zt.dispose(),Qe.dispose(),z.dispose(),pt.dispose(),se.dispose(),V.dispose(),_t.dispose(),xt.dispose(),xt.removeEventListener("sessionstart",Un),xt.removeEventListener("sessionend",hl),Wi.stop()};function Vt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),X=!0}function Mt(){console.log("THREE.WebGLRenderer: Context Restored."),X=!1;const R=fe.autoReset,Z=jt.enabled,at=jt.autoUpdate,rt=jt.needsUpdate,Q=jt.type;Bt(),fe.autoReset=R,jt.enabled=Z,jt.autoUpdate=at,jt.needsUpdate=rt,jt.type=Q}function gt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function qt(R){const Z=R.target;Z.removeEventListener("dispose",qt),le(Z)}function le(R){Xe(R),Zt.remove(R)}function Xe(R){const Z=Zt.get(R).programs;Z!==void 0&&(Z.forEach(function(at){_t.releaseProgram(at)}),R.isShaderMaterial&&_t.releaseShaderCache(R))}this.renderBufferDirect=function(R,Z,at,rt,Q,bt){Z===null&&(Z=At);const wt=Q.isMesh&&Q.matrixWorld.determinant()<0,Nt=vc(R,Z,at,rt,Q);Ct.setMaterial(rt,wt);let Dt=at.index,$t=1;if(rt.wireframe===!0){if(Dt=tt.getWireframeAttribute(at),Dt===void 0)return;$t=2}const re=at.drawRange,Qt=at.attributes.position;let ve=re.start*$t,Ue=(re.start+re.count)*$t;bt!==null&&(ve=Math.max(ve,bt.start*$t),Ue=Math.min(Ue,(bt.start+bt.count)*$t)),Dt!==null?(ve=Math.max(ve,0),Ue=Math.min(Ue,Dt.count)):Qt!=null&&(ve=Math.max(ve,0),Ue=Math.min(Ue,Qt.count));const He=Ue-ve;if(He<0||He===1/0)return;se.setup(Q,rt,Nt,at,Dt);let Oe,Ce=te;if(Dt!==null&&(Oe=T.get(Dt),Ce=Jt,Ce.setIndex(Oe)),Q.isMesh)rt.wireframe===!0?(Ct.setLineWidth(rt.wireframeLinewidth*ce()),Ce.setMode(H.LINES)):Ce.setMode(H.TRIANGLES);else if(Q.isLine){let Wt=rt.linewidth;Wt===void 0&&(Wt=1),Ct.setLineWidth(Wt*ce()),Q.isLineSegments?Ce.setMode(H.LINES):Q.isLineLoop?Ce.setMode(H.LINE_LOOP):Ce.setMode(H.LINE_STRIP)}else Q.isPoints?Ce.setMode(H.POINTS):Q.isSprite&&Ce.setMode(H.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)js("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ce.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(he.get("WEBGL_multi_draw"))Ce.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const Wt=Q._multiDrawStarts,ze=Q._multiDrawCounts,Se=Q._multiDrawCount,sn=Dt?T.get(Dt).bytesPerElement:1,Ze=Zt.get(rt).currentProgram.getUniforms();for(let Nn=0;Nn<Se;Nn++)Ze.setValue(H,"_gl_DrawID",Nn),Ce.render(Wt[Nn]/sn,ze[Nn])}else if(Q.isInstancedMesh)Ce.renderInstances(ve,He,Q.count);else if(at.isInstancedBufferGeometry){const Wt=at._maxInstanceCount!==void 0?at._maxInstanceCount:1/0,ze=Math.min(at.instanceCount,Wt);Ce.renderInstances(ve,He,ze)}else Ce.render(ve,He)};function Te(R,Z,at){R.transparent===!0&&R.side===_a&&R.forceSinglePass===!1?(R.side=Wn,R.needsUpdate=!0,Zi(R,Z,at),R.side=or,R.needsUpdate=!0,Zi(R,Z,at),R.side=_a):Zi(R,Z,at)}this.compile=function(R,Z,at=null){at===null&&(at=R),S=Lt.get(at),S.init(Z),N.push(S),at.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Z.layers)&&(S.pushLight(Q),Q.castShadow&&S.pushShadow(Q))}),R!==at&&R.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Z.layers)&&(S.pushLight(Q),Q.castShadow&&S.pushShadow(Q))}),S.setupLights();const rt=new Set;return R.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const bt=Q.material;if(bt)if(Array.isArray(bt))for(let wt=0;wt<bt.length;wt++){const Nt=bt[wt];Te(Nt,at,Q),rt.add(Nt)}else Te(bt,at,Q),rt.add(bt)}),S=N.pop(),rt},this.compileAsync=function(R,Z,at=null){const rt=this.compile(R,Z,at);return new Promise(Q=>{function bt(){if(rt.forEach(function(wt){Zt.get(wt).currentProgram.isReady()&&rt.delete(wt)}),rt.size===0){Q(R);return}setTimeout(bt,10)}he.get("KHR_parallel_shader_compile")!==null?bt():setTimeout(bt,10)})};let je=null;function vn(R){je&&je(R)}function Un(){Wi.stop()}function hl(){Wi.start()}const Wi=new lS;Wi.setAnimationLoop(vn),typeof self<"u"&&Wi.setContext(self),this.setAnimationLoop=function(R){je=R,xt.setAnimationLoop(R),R===null?Wi.stop():Wi.start()},xt.addEventListener("sessionstart",Un),xt.addEventListener("sessionend",hl),this.render=function(R,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(X===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),xt.enabled===!0&&xt.isPresenting===!0&&(xt.cameraAutoUpdate===!0&&xt.updateCamera(Z),Z=xt.getCamera()),R.isScene===!0&&R.onBeforeRender(w,R,Z,I),S=Lt.get(R,N.length),S.init(Z),N.push(S),Tt.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),A.setFromProjectionMatrix(Tt),ht=this.localClippingEnabled,q=Yt.init(this.clippingPlanes,ht),y=Xt.get(R,L.length),y.init(),L.push(y),xt.enabled===!0&&xt.isPresenting===!0){const bt=w.xr.getDepthSensingMesh();bt!==null&&io(bt,Z,-1/0,w.sortObjects)}io(R,Z,0,w.sortObjects),y.finish(),w.sortObjects===!0&&y.sort(vt,yt),zt=xt.enabled===!1||xt.isPresenting===!1||xt.hasDepthSensing()===!1,zt&&St.addToRenderList(y,R),this.info.render.frame++,q===!0&&Yt.beginShadows();const at=S.state.shadowsArray;jt.render(at,R,Z),q===!0&&Yt.endShadows(),this.info.autoReset===!0&&this.info.reset();const rt=y.opaque,Q=y.transmissive;if(S.setupLights(),Z.isArrayCamera){const bt=Z.cameras;if(Q.length>0)for(let wt=0,Nt=bt.length;wt<Nt;wt++){const Dt=bt[wt];cr(rt,Q,R,Dt)}zt&&St.render(R);for(let wt=0,Nt=bt.length;wt<Nt;wt++){const Dt=bt[wt];ur(y,R,Dt,Dt.viewport)}}else Q.length>0&&cr(rt,Q,R,Z),zt&&St.render(R),ur(y,R,Z);I!==null&&O===0&&(ie.updateMultisampleRenderTarget(I),ie.updateRenderTargetMipmap(I)),R.isScene===!0&&R.onAfterRender(w,R,Z),se.resetDefaultState(),D=-1,b=null,N.pop(),N.length>0?(S=N[N.length-1],q===!0&&Yt.setGlobalState(w.clippingPlanes,S.state.camera)):S=null,L.pop(),L.length>0?y=L[L.length-1]:y=null};function io(R,Z,at,rt){if(R.visible===!1)return;if(R.layers.test(Z.layers)){if(R.isGroup)at=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Z);else if(R.isLight)S.pushLight(R),R.castShadow&&S.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||A.intersectsSprite(R)){rt&&Rt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Tt);const wt=pt.update(R),Nt=R.material;Nt.visible&&y.push(R,wt,Nt,at,Rt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||A.intersectsObject(R))){const wt=pt.update(R),Nt=R.material;if(rt&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Rt.copy(R.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),Rt.copy(wt.boundingSphere.center)),Rt.applyMatrix4(R.matrixWorld).applyMatrix4(Tt)),Array.isArray(Nt)){const Dt=wt.groups;for(let $t=0,re=Dt.length;$t<re;$t++){const Qt=Dt[$t],ve=Nt[Qt.materialIndex];ve&&ve.visible&&y.push(R,wt,ve,at,Rt.z,Qt)}}else Nt.visible&&y.push(R,wt,Nt,at,Rt.z,null)}}const bt=R.children;for(let wt=0,Nt=bt.length;wt<Nt;wt++)io(bt[wt],Z,at,rt)}function ur(R,Z,at,rt){const Q=R.opaque,bt=R.transmissive,wt=R.transparent;S.setupLightsView(at),q===!0&&Yt.setGlobalState(w.clippingPlanes,at),rt&&Ct.viewport(F.copy(rt)),Q.length>0&&ji(Q,Z,at),bt.length>0&&ji(bt,Z,at),wt.length>0&&ji(wt,Z,at),Ct.buffers.depth.setTest(!0),Ct.buffers.depth.setMask(!0),Ct.buffers.color.setMask(!0),Ct.setPolygonOffset(!1)}function cr(R,Z,at,rt){if((at.isScene===!0?at.overrideMaterial:null)!==null)return;S.state.transmissionRenderTarget[rt.id]===void 0&&(S.state.transmissionRenderTarget[rt.id]=new kr(1,1,{generateMipmaps:!0,type:he.has("EXT_color_buffer_half_float")||he.has("EXT_color_buffer_float")?ol:ya,minFilter:Xr,samples:4,stencilBuffer:f,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:De.workingColorSpace}));const bt=S.state.transmissionRenderTarget[rt.id],wt=rt.viewport||F;bt.setSize(wt.z*w.transmissionResolutionScale,wt.w*w.transmissionResolutionScale);const Nt=w.getRenderTarget(),Dt=w.getActiveCubeFace(),$t=w.getActiveMipmapLevel();w.setRenderTarget(bt),w.getClearColor(mt),ft=w.getClearAlpha(),ft<1&&w.setClearColor(16777215,.5),w.clear(),zt&&St.render(at);const re=w.toneMapping;w.toneMapping=sr;const Qt=rt.viewport;if(rt.viewport!==void 0&&(rt.viewport=void 0),S.setupLightsView(rt),q===!0&&Yt.setGlobalState(w.clippingPlanes,rt),ji(R,at,rt),ie.updateMultisampleRenderTarget(bt),ie.updateRenderTargetMipmap(bt),he.has("WEBGL_multisampled_render_to_texture")===!1){let ve=!1;for(let Ue=0,He=Z.length;Ue<He;Ue++){const Oe=Z[Ue],Ce=Oe.object,Wt=Oe.geometry,ze=Oe.material,Se=Oe.group;if(ze.side===_a&&Ce.layers.test(rt.layers)){const sn=ze.side;ze.side=Wn,ze.needsUpdate=!0,Di(Ce,at,rt,Wt,ze,Se),ze.side=sn,ze.needsUpdate=!0,ve=!0}}ve===!0&&(ie.updateMultisampleRenderTarget(bt),ie.updateRenderTargetMipmap(bt))}w.setRenderTarget(Nt,Dt,$t),w.setClearColor(mt,ft),Qt!==void 0&&(rt.viewport=Qt),w.toneMapping=re}function ji(R,Z,at){const rt=Z.isScene===!0?Z.overrideMaterial:null;for(let Q=0,bt=R.length;Q<bt;Q++){const wt=R[Q],Nt=wt.object,Dt=wt.geometry,$t=wt.group;let re=wt.material;re.allowOverride===!0&&rt!==null&&(re=rt),Nt.layers.test(at.layers)&&Di(Nt,Z,at,Dt,re,$t)}}function Di(R,Z,at,rt,Q,bt){R.onBeforeRender(w,Z,at,rt,Q,bt),R.modelViewMatrix.multiplyMatrices(at.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Q.onBeforeRender(w,Z,at,rt,R,bt),Q.transparent===!0&&Q.side===_a&&Q.forceSinglePass===!1?(Q.side=Wn,Q.needsUpdate=!0,w.renderBufferDirect(at,Z,rt,Q,R,bt),Q.side=or,Q.needsUpdate=!0,w.renderBufferDirect(at,Z,rt,Q,R,bt),Q.side=_a):w.renderBufferDirect(at,Z,rt,Q,R,bt),R.onAfterRender(w,Z,at,rt,Q,bt)}function Zi(R,Z,at){Z.isScene!==!0&&(Z=At);const rt=Zt.get(R),Q=S.state.lights,bt=S.state.shadowsArray,wt=Q.state.version,Nt=_t.getParameters(R,Q.state,bt,Z,at),Dt=_t.getProgramCacheKey(Nt);let $t=rt.programs;rt.environment=R.isMeshStandardMaterial?Z.environment:null,rt.fog=Z.fog,rt.envMap=(R.isMeshStandardMaterial?z:Qe).get(R.envMap||rt.environment),rt.envMapRotation=rt.environment!==null&&R.envMap===null?Z.environmentRotation:R.envMapRotation,$t===void 0&&(R.addEventListener("dispose",qt),$t=new Map,rt.programs=$t);let re=$t.get(Dt);if(re!==void 0){if(rt.currentProgram===re&&rt.lightsStateVersion===wt)return ao(R,Nt),re}else Nt.uniforms=_t.getUniforms(R),R.onBeforeCompile(Nt,w),re=_t.acquireProgram(Nt,Dt),$t.set(Dt,re),rt.uniforms=Nt.uniforms;const Qt=rt.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Qt.clippingPlanes=Yt.uniform),ao(R,Nt),rt.needsLights=ro(R),rt.lightsStateVersion=wt,rt.needsLights&&(Qt.ambientLightColor.value=Q.state.ambient,Qt.lightProbe.value=Q.state.probe,Qt.directionalLights.value=Q.state.directional,Qt.directionalLightShadows.value=Q.state.directionalShadow,Qt.spotLights.value=Q.state.spot,Qt.spotLightShadows.value=Q.state.spotShadow,Qt.rectAreaLights.value=Q.state.rectArea,Qt.ltc_1.value=Q.state.rectAreaLTC1,Qt.ltc_2.value=Q.state.rectAreaLTC2,Qt.pointLights.value=Q.state.point,Qt.pointLightShadows.value=Q.state.pointShadow,Qt.hemisphereLights.value=Q.state.hemi,Qt.directionalShadowMap.value=Q.state.directionalShadowMap,Qt.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Qt.spotShadowMap.value=Q.state.spotShadowMap,Qt.spotLightMatrix.value=Q.state.spotLightMatrix,Qt.spotLightMap.value=Q.state.spotLightMap,Qt.pointShadowMap.value=Q.state.pointShadowMap,Qt.pointShadowMatrix.value=Q.state.pointShadowMatrix),rt.currentProgram=re,rt.uniformsList=null,re}function Ta(R){if(R.uniformsList===null){const Z=R.currentProgram.getUniforms();R.uniformsList=cc.seqWithValue(Z.seq,R.uniforms)}return R.uniformsList}function ao(R,Z){const at=Zt.get(R);at.outputColorSpace=Z.outputColorSpace,at.batching=Z.batching,at.batchingColor=Z.batchingColor,at.instancing=Z.instancing,at.instancingColor=Z.instancingColor,at.instancingMorph=Z.instancingMorph,at.skinning=Z.skinning,at.morphTargets=Z.morphTargets,at.morphNormals=Z.morphNormals,at.morphColors=Z.morphColors,at.morphTargetsCount=Z.morphTargetsCount,at.numClippingPlanes=Z.numClippingPlanes,at.numIntersection=Z.numClipIntersection,at.vertexAlphas=Z.vertexAlphas,at.vertexTangents=Z.vertexTangents,at.toneMapping=Z.toneMapping}function vc(R,Z,at,rt,Q){Z.isScene!==!0&&(Z=At),ie.resetTextureUnits();const bt=Z.fog,wt=rt.isMeshStandardMaterial?Z.environment:null,Nt=I===null?w.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:$s,Dt=(rt.isMeshStandardMaterial?z:Qe).get(rt.envMap||wt),$t=rt.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,re=!!at.attributes.tangent&&(!!rt.normalMap||rt.anisotropy>0),Qt=!!at.morphAttributes.position,ve=!!at.morphAttributes.normal,Ue=!!at.morphAttributes.color;let He=sr;rt.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(He=w.toneMapping);const Oe=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,Ce=Oe!==void 0?Oe.length:0,Wt=Zt.get(rt),ze=S.state.lights;if(q===!0&&(ht===!0||R!==b)){const En=R===b&&rt.id===D;Yt.setState(rt,R,En)}let Se=!1;rt.version===Wt.__version?(Wt.needsLights&&Wt.lightsStateVersion!==ze.state.version||Wt.outputColorSpace!==Nt||Q.isBatchedMesh&&Wt.batching===!1||!Q.isBatchedMesh&&Wt.batching===!0||Q.isBatchedMesh&&Wt.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&Wt.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&Wt.instancing===!1||!Q.isInstancedMesh&&Wt.instancing===!0||Q.isSkinnedMesh&&Wt.skinning===!1||!Q.isSkinnedMesh&&Wt.skinning===!0||Q.isInstancedMesh&&Wt.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Wt.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Wt.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Wt.instancingMorph===!1&&Q.morphTexture!==null||Wt.envMap!==Dt||rt.fog===!0&&Wt.fog!==bt||Wt.numClippingPlanes!==void 0&&(Wt.numClippingPlanes!==Yt.numPlanes||Wt.numIntersection!==Yt.numIntersection)||Wt.vertexAlphas!==$t||Wt.vertexTangents!==re||Wt.morphTargets!==Qt||Wt.morphNormals!==ve||Wt.morphColors!==Ue||Wt.toneMapping!==He||Wt.morphTargetsCount!==Ce)&&(Se=!0):(Se=!0,Wt.__version=rt.version);let sn=Wt.currentProgram;Se===!0&&(sn=Zi(rt,Z,Q));let Ze=!1,Nn=!1,ba=!1;const qe=sn.getUniforms(),on=Wt.uniforms;if(Ct.useProgram(sn.program)&&(Ze=!0,Nn=!0,ba=!0),rt.id!==D&&(D=rt.id,Nn=!0),Ze||b!==R){Ct.buffers.depth.getReversed()?(lt.copy(R.projectionMatrix),jM(lt),ZM(lt),qe.setValue(H,"projectionMatrix",lt)):qe.setValue(H,"projectionMatrix",R.projectionMatrix),qe.setValue(H,"viewMatrix",R.matrixWorldInverse);const Tn=qe.map.cameraPosition;Tn!==void 0&&Tn.setValue(H,Gt.setFromMatrixPosition(R.matrixWorld)),ue.logarithmicDepthBuffer&&qe.setValue(H,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(rt.isMeshPhongMaterial||rt.isMeshToonMaterial||rt.isMeshLambertMaterial||rt.isMeshBasicMaterial||rt.isMeshStandardMaterial||rt.isShaderMaterial)&&qe.setValue(H,"isOrthographic",R.isOrthographicCamera===!0),b!==R&&(b=R,Nn=!0,ba=!0)}if(Q.isSkinnedMesh){qe.setOptional(H,Q,"bindMatrix"),qe.setOptional(H,Q,"bindMatrixInverse");const En=Q.skeleton;En&&(En.boneTexture===null&&En.computeBoneTexture(),qe.setValue(H,"boneTexture",En.boneTexture,ie))}Q.isBatchedMesh&&(qe.setOptional(H,Q,"batchingTexture"),qe.setValue(H,"batchingTexture",Q._matricesTexture,ie),qe.setOptional(H,Q,"batchingIdTexture"),qe.setValue(H,"batchingIdTexture",Q._indirectTexture,ie),qe.setOptional(H,Q,"batchingColorTexture"),Q._colorsTexture!==null&&qe.setValue(H,"batchingColorTexture",Q._colorsTexture,ie));const pn=at.morphAttributes;if((pn.position!==void 0||pn.normal!==void 0||pn.color!==void 0)&&It.update(Q,at,sn),(Nn||Wt.receiveShadow!==Q.receiveShadow)&&(Wt.receiveShadow=Q.receiveShadow,qe.setValue(H,"receiveShadow",Q.receiveShadow)),rt.isMeshGouraudMaterial&&rt.envMap!==null&&(on.envMap.value=Dt,on.flipEnvMap.value=Dt.isCubeTexture&&Dt.isRenderTargetTexture===!1?-1:1),rt.isMeshStandardMaterial&&rt.envMap===null&&Z.environment!==null&&(on.envMapIntensity.value=Z.environmentIntensity),Nn&&(qe.setValue(H,"toneMappingExposure",w.toneMappingExposure),Wt.needsLights&&dl(on,ba),bt&&rt.fog===!0&&ut.refreshFogUniforms(on,bt),ut.refreshMaterialUniforms(on,rt,K,nt,S.state.transmissionRenderTarget[R.id]),cc.upload(H,Ta(Wt),on,ie)),rt.isShaderMaterial&&rt.uniformsNeedUpdate===!0&&(cc.upload(H,Ta(Wt),on,ie),rt.uniformsNeedUpdate=!1),rt.isSpriteMaterial&&qe.setValue(H,"center",Q.center),qe.setValue(H,"modelViewMatrix",Q.modelViewMatrix),qe.setValue(H,"normalMatrix",Q.normalMatrix),qe.setValue(H,"modelMatrix",Q.matrixWorld),rt.isShaderMaterial||rt.isRawShaderMaterial){const En=rt.uniformsGroups;for(let Tn=0,Yr=En.length;Tn<Yr;Tn++){const Ki=En[Tn];V.update(Ki,sn),V.bind(Ki,sn)}}return sn}function dl(R,Z){R.ambientLightColor.needsUpdate=Z,R.lightProbe.needsUpdate=Z,R.directionalLights.needsUpdate=Z,R.directionalLightShadows.needsUpdate=Z,R.pointLights.needsUpdate=Z,R.pointLightShadows.needsUpdate=Z,R.spotLights.needsUpdate=Z,R.spotLightShadows.needsUpdate=Z,R.rectAreaLights.needsUpdate=Z,R.hemisphereLights.needsUpdate=Z}function ro(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(R,Z,at){const rt=Zt.get(R);rt.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,rt.__autoAllocateDepthBuffer===!1&&(rt.__useRenderToTexture=!1),Zt.get(R.texture).__webglTexture=Z,Zt.get(R.depthTexture).__webglTexture=rt.__autoAllocateDepthBuffer?void 0:at,rt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,Z){const at=Zt.get(R);at.__webglFramebuffer=Z,at.__useDefaultFramebuffer=Z===void 0};const fr=H.createFramebuffer();this.setRenderTarget=function(R,Z=0,at=0){I=R,B=Z,O=at;let rt=!0,Q=null,bt=!1,wt=!1;if(R){const Dt=Zt.get(R);if(Dt.__useDefaultFramebuffer!==void 0)Ct.bindFramebuffer(H.FRAMEBUFFER,null),rt=!1;else if(Dt.__webglFramebuffer===void 0)ie.setupRenderTarget(R);else if(Dt.__hasExternalTextures)ie.rebindTextures(R,Zt.get(R.texture).__webglTexture,Zt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Qt=R.depthTexture;if(Dt.__boundDepthTexture!==Qt){if(Qt!==null&&Zt.has(Qt)&&(R.width!==Qt.image.width||R.height!==Qt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ie.setupDepthRenderbuffer(R)}}const $t=R.texture;($t.isData3DTexture||$t.isDataArrayTexture||$t.isCompressedArrayTexture)&&(wt=!0);const re=Zt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(re[Z])?Q=re[Z][at]:Q=re[Z],bt=!0):R.samples>0&&ie.useMultisampledRTT(R)===!1?Q=Zt.get(R).__webglMultisampledFramebuffer:Array.isArray(re)?Q=re[at]:Q=re,F.copy(R.viewport),ot.copy(R.scissor),st=R.scissorTest}else F.copy(Ht).multiplyScalar(K).floor(),ot.copy(ee).multiplyScalar(K).floor(),st=Et;if(at!==0&&(Q=fr),Ct.bindFramebuffer(H.FRAMEBUFFER,Q)&&rt&&Ct.drawBuffers(R,Q),Ct.viewport(F),Ct.scissor(ot),Ct.setScissorTest(st),bt){const Dt=Zt.get(R.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Dt.__webglTexture,at)}else if(wt){const Dt=Zt.get(R.texture),$t=Z;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Dt.__webglTexture,at,$t)}else if(R!==null&&at!==0){const Dt=Zt.get(R.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Dt.__webglTexture,at)}D=-1},this.readRenderTargetPixels=function(R,Z,at,rt,Q,bt,wt,Nt=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=Zt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&wt!==void 0&&(Dt=Dt[wt]),Dt){Ct.bindFramebuffer(H.FRAMEBUFFER,Dt);try{const $t=R.textures[Nt],re=$t.format,Qt=$t.type;if(!ue.textureFormatReadable(re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ue.textureTypeReadable(Qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=R.width-rt&&at>=0&&at<=R.height-Q&&(R.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Nt),H.readPixels(Z,at,rt,Q,Ot.convert(re),Ot.convert(Qt),bt))}finally{const $t=I!==null?Zt.get(I).__webglFramebuffer:null;Ct.bindFramebuffer(H.FRAMEBUFFER,$t)}}},this.readRenderTargetPixelsAsync=async function(R,Z,at,rt,Q,bt,wt,Nt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Dt=Zt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&wt!==void 0&&(Dt=Dt[wt]),Dt)if(Z>=0&&Z<=R.width-rt&&at>=0&&at<=R.height-Q){Ct.bindFramebuffer(H.FRAMEBUFFER,Dt);const $t=R.textures[Nt],re=$t.format,Qt=$t.type;if(!ue.textureFormatReadable(re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ue.textureTypeReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ve=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,ve),H.bufferData(H.PIXEL_PACK_BUFFER,bt.byteLength,H.STREAM_READ),R.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Nt),H.readPixels(Z,at,rt,Q,Ot.convert(re),Ot.convert(Qt),0);const Ue=I!==null?Zt.get(I).__webglFramebuffer:null;Ct.bindFramebuffer(H.FRAMEBUFFER,Ue);const He=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await WM(H,He,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,ve),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,bt),H.deleteBuffer(ve),H.deleteSync(He),bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,Z=null,at=0){const rt=Math.pow(2,-at),Q=Math.floor(R.image.width*rt),bt=Math.floor(R.image.height*rt),wt=Z!==null?Z.x:0,Nt=Z!==null?Z.y:0;ie.setTexture2D(R,0),H.copyTexSubImage2D(H.TEXTURE_2D,at,0,0,wt,Nt,Q,bt),Ct.unbindTexture()};const Sc=H.createFramebuffer(),pl=H.createFramebuffer();this.copyTextureToTexture=function(R,Z,at=null,rt=null,Q=0,bt=null){bt===null&&(Q!==0?(js("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),bt=Q,Q=0):bt=0);let wt,Nt,Dt,$t,re,Qt,ve,Ue,He;const Oe=R.isCompressedTexture?R.mipmaps[bt]:R.image;if(at!==null)wt=at.max.x-at.min.x,Nt=at.max.y-at.min.y,Dt=at.isBox3?at.max.z-at.min.z:1,$t=at.min.x,re=at.min.y,Qt=at.isBox3?at.min.z:0;else{const pn=Math.pow(2,-Q);wt=Math.floor(Oe.width*pn),Nt=Math.floor(Oe.height*pn),R.isDataArrayTexture?Dt=Oe.depth:R.isData3DTexture?Dt=Math.floor(Oe.depth*pn):Dt=1,$t=0,re=0,Qt=0}rt!==null?(ve=rt.x,Ue=rt.y,He=rt.z):(ve=0,Ue=0,He=0);const Ce=Ot.convert(Z.format),Wt=Ot.convert(Z.type);let ze;Z.isData3DTexture?(ie.setTexture3D(Z,0),ze=H.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(ie.setTexture2DArray(Z,0),ze=H.TEXTURE_2D_ARRAY):(ie.setTexture2D(Z,0),ze=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,Z.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,Z.unpackAlignment);const Se=H.getParameter(H.UNPACK_ROW_LENGTH),sn=H.getParameter(H.UNPACK_IMAGE_HEIGHT),Ze=H.getParameter(H.UNPACK_SKIP_PIXELS),Nn=H.getParameter(H.UNPACK_SKIP_ROWS),ba=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,Oe.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Oe.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,$t),H.pixelStorei(H.UNPACK_SKIP_ROWS,re),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Qt);const qe=R.isDataArrayTexture||R.isData3DTexture,on=Z.isDataArrayTexture||Z.isData3DTexture;if(R.isDepthTexture){const pn=Zt.get(R),En=Zt.get(Z),Tn=Zt.get(pn.__renderTarget),Yr=Zt.get(En.__renderTarget);Ct.bindFramebuffer(H.READ_FRAMEBUFFER,Tn.__webglFramebuffer),Ct.bindFramebuffer(H.DRAW_FRAMEBUFFER,Yr.__webglFramebuffer);for(let Ki=0;Ki<Dt;Ki++)qe&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Zt.get(R).__webglTexture,Q,Qt+Ki),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Zt.get(Z).__webglTexture,bt,He+Ki)),H.blitFramebuffer($t,re,wt,Nt,ve,Ue,wt,Nt,H.DEPTH_BUFFER_BIT,H.NEAREST);Ct.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ct.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(Q!==0||R.isRenderTargetTexture||Zt.has(R)){const pn=Zt.get(R),En=Zt.get(Z);Ct.bindFramebuffer(H.READ_FRAMEBUFFER,Sc),Ct.bindFramebuffer(H.DRAW_FRAMEBUFFER,pl);for(let Tn=0;Tn<Dt;Tn++)qe?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,pn.__webglTexture,Q,Qt+Tn):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,pn.__webglTexture,Q),on?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,En.__webglTexture,bt,He+Tn):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,En.__webglTexture,bt),Q!==0?H.blitFramebuffer($t,re,wt,Nt,ve,Ue,wt,Nt,H.COLOR_BUFFER_BIT,H.NEAREST):on?H.copyTexSubImage3D(ze,bt,ve,Ue,He+Tn,$t,re,wt,Nt):H.copyTexSubImage2D(ze,bt,ve,Ue,$t,re,wt,Nt);Ct.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ct.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else on?R.isDataTexture||R.isData3DTexture?H.texSubImage3D(ze,bt,ve,Ue,He,wt,Nt,Dt,Ce,Wt,Oe.data):Z.isCompressedArrayTexture?H.compressedTexSubImage3D(ze,bt,ve,Ue,He,wt,Nt,Dt,Ce,Oe.data):H.texSubImage3D(ze,bt,ve,Ue,He,wt,Nt,Dt,Ce,Wt,Oe):R.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,bt,ve,Ue,wt,Nt,Ce,Wt,Oe.data):R.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,bt,ve,Ue,Oe.width,Oe.height,Ce,Oe.data):H.texSubImage2D(H.TEXTURE_2D,bt,ve,Ue,wt,Nt,Ce,Wt,Oe);H.pixelStorei(H.UNPACK_ROW_LENGTH,Se),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,sn),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Ze),H.pixelStorei(H.UNPACK_SKIP_ROWS,Nn),H.pixelStorei(H.UNPACK_SKIP_IMAGES,ba),bt===0&&Z.generateMipmaps&&H.generateMipmap(ze),Ct.unbindTexture()},this.copyTextureToTexture3D=function(R,Z,at=null,rt=null,Q=0){return js('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,Z,at,rt,Q)},this.initRenderTarget=function(R){Zt.get(R).__webglFramebuffer===void 0&&ie.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?ie.setTextureCube(R,0):R.isData3DTexture?ie.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?ie.setTexture2DArray(R,0):ie.setTexture2D(R,0),Ct.unbindTexture()},this.resetState=function(){B=0,O=0,I=null,Ct.reset(),se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Sa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(n){this._outputColorSpace=n;const a=this.getContext();a.drawingBufferColorSpace=De._getDrawingBufferColorSpace(n),a.unpackColorSpace=De._getUnpackColorSpace()}}const hR=`
vec3 mod289(vec3 x){return x-floor(x*(1./289.))*289.;}
vec4 mod289(vec4 x){return x-floor(x*(1./289.))*289.;}
vec4 permute(vec4 x){return mod289(((x*34.)+1.)*x);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-.85373472095314*r;}
float snoise(vec3 v){
  const vec2 C=vec2(1./6.,1./3.);const vec4 D=vec4(0.,.5,1.,2.);
  vec3 i=floor(v+dot(v,C.yyy));vec3 x0=v-i+dot(i,C.xxx);
  vec3 g=step(x0.yzx,x0.xyz);vec3 l=1.-g;vec3 i1=min(g.xyz,l.zxy);vec3 i2=max(g.xyz,l.zxy);
  vec3 x1=x0-i1+C.xxx;vec3 x2=x0-i2+C.yyy;vec3 x3=x0-D.yyy;
  i=mod289(i);
  vec4 p=permute(permute(permute(i.z+vec4(0.,i1.z,i2.z,1.))+i.y+vec4(0.,i1.y,i2.y,1.))+i.x+vec4(0.,i1.x,i2.x,1.));
  float n_=.142857142857;vec3 ns=n_*D.wyz-D.xzx;
  vec4 j=p-49.*floor(p*ns.z*ns.z);vec4 x_=floor(j*ns.z);vec4 y_=floor(j-7.*x_);
  vec4 x=x_*ns.x+ns.yyyy;vec4 y=y_*ns.x+ns.yyyy;vec4 h=1.-abs(x)-abs(y);
  vec4 b0=vec4(x.xy,y.xy);vec4 b1=vec4(x.zw,y.zw);
  vec4 s0=floor(b0)*2.+1.;vec4 s1=floor(b1)*2.+1.;vec4 sh=-step(h,vec4(0.));
  vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;
  vec3 p0=vec3(a0.xy,h.x);vec3 p1=vec3(a0.zw,h.y);vec3 p2=vec3(a1.xy,h.z);vec3 p3=vec3(a1.zw,h.w);
  vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));
  p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;
  vec4 m=max(.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.);m=m*m;
  return 42.*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
}`,dR=`
uniform float uTime; uniform float uAmp; uniform float uFreq; uniform float uTwist;
varying vec3 vN; varying vec3 vView; varying float vD; varying vec3 vP;
${hR}
float field(vec3 p){
  return snoise(p * uFreq + vec3(0.0, uTime * 0.5, uTime * 0.2)) + 0.3 * snoise(p * uFreq * 2.1 - uTime * 0.35);
}
vec3 shape(vec3 p){
  float a = uTwist * p.y * 2.0;
  p.xz = mat2(cos(a), -sin(a), sin(a), cos(a)) * p.xz;
  return p * (1.0 + field(p) * uAmp);
}
void main(){
  vec3 n = normalize(position);
  // displaced normal from two nearby points on the surface
  vec3 t = normalize(cross(n, abs(n.y) < 0.99 ? vec3(0.0, 1.0, 0.0) : vec3(1.0, 0.0, 0.0)));
  vec3 b = cross(n, t);
  float e = 0.012;
  vec3 p0 = shape(n);
  vec3 p1 = shape(normalize(n + t * e));
  vec3 p2 = shape(normalize(n + b * e));
  vec3 dn = normalize(cross(p1 - p0, p2 - p0));
  vD = field(n);
  vP = n;
  vec4 mv = modelViewMatrix * vec4(p0, 1.0);
  vN = normalize(normalMatrix * dn);
  vView = normalize(-mv.xyz);
  gl_Position = projectionMatrix * mv;
}`,pR=`
uniform vec3 uA; uniform vec3 uB; uniform vec3 uC; uniform float uGlow; uniform float uTime;
varying vec3 vN; varying vec3 vView; varying float vD; varying vec3 vP;
void main(){
  vec3 N = normalize(vN);
  float ndv = max(dot(N, vView), 0.0);
  float f = pow(1.0 - ndv, 2.6);
  // colour flows across the surface, like oil on water
  float band = 0.5 + 0.5 * sin(vP.y * 2.4 + vD * 1.6 + uTime * 0.8);
  vec3 base = mix(uA, uB, band);
  vec3 col = base * (0.08 + 0.42 * pow(ndv, 1.8));
  col += uA * 0.35 * smoothstep(0.2, 1.2, vD);
  // soft key light from the top left and a crisp specular
  vec3 L = normalize(vec3(-0.5, 0.8, 0.6));
  vec3 H = normalize(L + vView);
  col += uC * pow(max(dot(N, H), 0.0), 60.0) * 0.9;
  col += base * max(dot(N, L), 0.0) * 0.25;
  // rim glow, brighter when there is sound
  col += mix(uB, uC, 0.4) * f * (1.5 + uGlow * 1.4);
  gl_FragColor = vec4(col, 1.0);
}`;function mR(o){let n;try{n=new fR({canvas:o,antialias:!0,alpha:!0})}catch{return null}n.setClearColor(0,0);const a=new yE,s=new _i(32,1,.1,50);s.position.z=5.2;const u={uTime:{value:0},uAmp:{value:.12},uFreq:{value:1.3},uTwist:{value:0},uGlow:{value:0},uA:{value:new Re("#ff3d7f")},uB:{value:new Re("#8a5cff")},uC:{value:new Re("#ffe1f0")}},f=new Ea({vertexShader:dR,fragmentShader:pR,uniforms:u}),h=new Ap(1,48),d=new qi(h,f);a.add(d);const g=()=>{const N=o.clientWidth,w=o.clientHeight;n.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),n.setSize(N,w,!1),s.aspect=N/w,s.updateProjectionMatrix()};g();const _=new ResizeObserver(g);_.observe(o);const v={level:0,state:"idle",pulse:0,reduced:!1},p={level:0,amp:.12,freq:1.3,twist:0,speed:.35,scale:1},x={a:new Re("#ff5f8f"),b:new Re("#ffb15c"),c:new Re("#ffe1f0")},M={x:0,y:0},C=N=>{M.x=N.clientX/window.innerWidth-.5,M.y=N.clientY/window.innerHeight-.5};window.addEventListener("pointermove",C);let U=0,y=0,S=performance.now();const L=N=>{U=requestAnimationFrame(L);const w=Math.min(.05,(N-S)/1e3);S=N;const X=1-Math.exp(-w*6),B=v.state;v.pulse*=Math.exp(-w*7),p.level+=(v.level-p.level)*(1-Math.exp(-w*14));const O=B==="listening"?.09+p.level*.28:B==="speaking"?.08+v.pulse*.18:B==="thinking"?.13:.065,I=B==="thinking"?1.9:B==="listening"?1.3+p.level*.8:1.05,D=B==="thinking"?.9:0,b=B==="thinking"?1.6:B==="listening"?.9:B==="speaking"?.7:.35;p.amp+=(O-p.amp)*X,p.freq+=(I-p.freq)*X*.5,p.twist+=(D-p.twist)*X*.6,p.speed+=(b-p.speed)*X;const F=1+(B==="listening"?p.level*.14:0)+v.pulse*.06;p.scale+=(F-p.scale)*X,v.reduced||(y+=w*p.speed),u.uTime.value=y,u.uAmp.value=v.reduced?.05:p.amp,u.uFreq.value=p.freq,u.uTwist.value=Math.sin(y*.8)*p.twist,u.uGlow.value=p.level+v.pulse,u.uA.value.lerp(x.a,X*.5),u.uB.value.lerp(x.b,X*.5),u.uC.value.lerp(x.c,X*.5),d.scale.setScalar(p.scale),d.rotation.y+=w*.15,d.rotation.x+=(M.y*.5-d.rotation.x)*.04,d.rotation.z+=(-M.x*.4-d.rotation.z)*.04,n.render(a,s)};return U=requestAnimationFrame(L),{set level(N){v.level=N},setState(N){v.state=N},setReduced(N){v.reduced=N},pulse(N=1){v.pulse=Math.max(v.pulse,N)},setPalette(N){x.a.set(N[0]),x.b.set(N[1]),x.c.set(N[2])},dispose(){cancelAnimationFrame(U),_.disconnect(),window.removeEventListener("pointermove",C),h.dispose(),f.dispose(),n.dispose()}}}const ic={ember:{label:"Ember",palette:["#ff3d7f","#8a5cff","#ffd9b0"],dot:"linear-gradient(135deg,#ff3d7f,#8a5cff)"},tide:{label:"Tide",palette:["#2b5cff","#36e0ff","#dff8ff"],dot:"linear-gradient(135deg,#2b5cff,#36e0ff)"},moss:{label:"Moss",palette:["#1aa36b","#d8f05a","#f2ffe0"],dot:"linear-gradient(135deg,#1aa36b,#d8f05a)"}},ac=["Book a table for two at sunset","Is the ridge trail open today?","What time does the piano start?"],gR=[[/table|dinner|book|restaurant|eat/i,"Done: a table for two on the terrace at 7:40, ten minutes before sunset. I’ve asked for the corner one, away from the heaters."],[/trail|hike|ridge|walk/i,"The ridge trail is open and dry this morning. Go before eleven; the boardwalk loop is the shady way back."],[/piano|music|bar|lobby/i,"The piano starts at eight in the lobby bar. Requests are welcome after nine."],[/spa|bath|massage|pool/i,"There’s an opening at four for a sixty-minute massage. Want me to hold it and send towels up after?"],[/hello|hi|hey/i,"Good evening. I’m the house concierge. Ask me for a table, a trail, a late check-out, anything at all."]],_R=o=>gR.find(([n])=>n.test(o))?.[1]??"Leave it with me. I’ll check with the front desk and send the details to your room in a few minutes.";function vR(){const[o,n]=Ke.useState(()=>window.matchMedia("(prefers-reduced-motion: reduce)").matches);return Ke.useEffect(()=>{const a=window.matchMedia("(prefers-reduced-motion: reduce)"),s=()=>n(a.matches);return a.addEventListener("change",s),()=>a.removeEventListener("change",s)},[]),o}function SR(){const o=vR(),n=Ke.useRef(null),a=Ke.useRef(null),[s,u]=Ke.useState(!1),[f,h]=Ke.useState("idle"),d=Ke.useRef("idle"),[g,_]=Ke.useState("ember"),[v,p]=Ke.useState(!1),[x,M]=Ke.useState(""),[C,U]=Ke.useState(""),[y,S]=Ke.useState(""),[L,N]=Ke.useState(!1),[w,X]=Ke.useState(0),B=Ke.useRef(""),O=Ke.useRef([]),I=Ke.useRef({}),D=Ke.useRef(0),b=Et=>{d.current=Et,h(Et),a.current?.setState(Et)},F=(Et,A)=>O.current.push(window.setTimeout(Et,o?Math.min(A,30):A)),ot=()=>{O.current.forEach(clearTimeout),O.current=[]};Ke.useEffect(()=>{const Et=mR(n.current);return Et||u(!0),a.current=Et,()=>Et?.dispose()},[]),Ke.useEffect(()=>a.current?.setPalette(ic[g].palette),[g,s]),Ke.useEffect(()=>a.current?.setReduced(o),[o,s]);const st=()=>{const Et=I.current;Et.raf&&cancelAnimationFrame(Et.raf),Et.sim&&clearInterval(Et.sim),Et.stream?.getTracks().forEach(A=>A.stop()),Et.ctx?.close().catch(()=>{});try{Et.rec?.abort()}catch{}I.current={},N(!1),a.current&&(a.current.level=0),X(0)},mt=Ke.useCallback(Et=>{ot(),st(),b("thinking"),U("");const A=_R(Et);F(()=>{if(b("speaking"),v&&"speechSynthesis"in window){const ht=new SpeechSynthesisUtterance(A);ht.rate=1.02,ht.pitch=g==="tide"?.9:g==="moss"?1.05:1.15,window.speechSynthesis.cancel(),window.speechSynthesis.speak(ht)}const q=A.split(" ");q.forEach((ht,lt)=>F(()=>{U(q.slice(0,lt+1).join(" ")),a.current?.pulse(.6+Math.random()*.5)},lt*190)),F(()=>b("idle"),q.length*190+900)},1200)},[v,g,o]),ft=Et=>{const A=ac[D.current++%ac.length],q=A.split(" ");if(Et){const ht=performance.now();I.current.sim=window.setInterval(()=>{const lt=(performance.now()-ht)/1e3,Tt=Math.max(0,Math.sin(lt*11)*.4+Math.sin(lt*4.3)*.35+.25);a.current&&(a.current.level=Tt),X(Tt)},50)}q.forEach((ht,lt)=>F(()=>{B.current=q.slice(0,lt+1).join(" "),M(B.current)},350+lt*230)),F(()=>mt(A),350+q.length*230+500)},Y=async()=>{if(d.current==="listening")return;ot(),window.speechSynthesis?.cancel(),M(""),U(""),B.current="",b("listening");let Et=null;try{Et=await navigator.mediaDevices.getUserMedia({audio:!0})}catch{Et=null}if(d.current!=="listening"){Et?.getTracks().forEach(At=>At.stop());return}if(!Et){ft(!0);return}const A=new AudioContext,q=A.createAnalyser();q.fftSize=512,A.createMediaStreamSource(Et).connect(q);const ht=new Uint8Array(q.fftSize),lt=()=>{q.getByteTimeDomainData(ht);let At=0;for(const ce of ht)At+=((ce-128)/128)**2;const zt=Math.min(1,Math.sqrt(At/ht.length)*5);a.current&&(a.current.level=zt),X(zt),I.current.raf=requestAnimationFrame(lt)};I.current={stream:Et,ctx:A,raf:requestAnimationFrame(lt)},N(!0);const Tt=window,Gt=Tt.SpeechRecognition??Tt.webkitSpeechRecognition;if(!Gt){ft(!1);return}const Rt=new Gt;Rt.lang=navigator.language||"en-US",Rt.interimResults=!0,Rt.continuous=!1,Rt.onresult=At=>{B.current=Array.from(At.results).map(zt=>zt[0].transcript).join(" "),M(B.current)},Rt.onend=()=>{d.current==="listening"&&(B.current?mt(B.current):ft(!1))},Rt.onerror=()=>{},I.current.rec=Rt;try{Rt.start()}catch{ft(!1)}},nt=()=>{if(d.current!=="listening")return;const Et=I.current.rec;if(Et&&B.current){Et.stop();return}B.current&&!Et||Et&&Et.stop()},K=()=>{ot(),st(),window.speechSynthesis?.cancel(),b("idle")},vt=()=>{d.current==="listening"?nt():d.current==="speaking"||d.current==="thinking"?K():Y()};Ke.useEffect(()=>{const Et=q=>{q.code!=="Space"||q.repeat||q.target.closest("input, textarea, button")||(q.preventDefault(),Y())},A=q=>{q.code!=="Space"||q.target.closest("input, textarea, button")||nt()};return window.addEventListener("keydown",Et),window.addEventListener("keyup",A),()=>{window.removeEventListener("keydown",Et),window.removeEventListener("keyup",A)}}),Ke.useEffect(()=>()=>{ot(),st()},[]);const yt=Et=>{Et.trim()&&(ot(),st(),B.current=Et.trim(),M(Et.trim()),S(""),mt(Et.trim()))},Ht=Et=>{Et.preventDefault(),yt(y)},ee={idle:"Tap to talk",listening:L?"Listening":"Listening (demo)",thinking:"Thinking",speaking:"Speaking"}[f];return ae.jsxs("main",{className:`mm is-${f} v-${g}`,style:{"--lvl":w.toFixed(3)},children:[ae.jsx("div",{className:"mm-stars","aria-hidden":"true"}),ae.jsx("div",{className:"mm-halo","aria-hidden":"true"}),ae.jsxs("header",{className:"mm-nav",children:[ae.jsxs("a",{className:"mm-logo",href:"/",children:[ae.jsx("span",{"aria-hidden":"true",children:[0,1,2,3,4].map(Et=>ae.jsx("i",{style:{animationDelay:`${Et*.12}s`}},Et))}),"concierge"]}),ae.jsxs("nav",{"aria-label":"Main",children:[ae.jsx("a",{href:"#",children:"Your stay"}),ae.jsx("a",{href:"#",children:"Dining"}),ae.jsx("a",{href:"#",children:"Spa"})]}),ae.jsx("a",{className:"mm-dl",href:"#",children:ae.jsx("span",{children:"Book a stay"})})]}),ae.jsxs("section",{className:"mm-hero",children:[ae.jsx("h1",{children:"Just ask."}),ae.jsx("p",{children:"A voice concierge that knows the house, the trails and the kitchen. Ask for anything during your stay."})]}),ae.jsxs("div",{className:"mm-stage",children:[ae.jsx("canvas",{ref:n,className:"mm-orb",role:"img","aria-label":`Voice orb, ${ee}`,onClick:vt}),s&&ae.jsx("div",{className:"mm-orb-css","aria-hidden":"true"}),ae.jsxs("p",{className:"mm-status","aria-live":"polite",children:[ae.jsx("i",{}),ee]})]}),ae.jsxs("div",{className:"mm-words","aria-live":"polite",children:[ae.jsx("p",{className:"mm-heard",children:x?`“${x}”`:ae.jsxs("span",{children:["Try “",ac[D.current%ac.length],"”"]})}),ae.jsx("p",{className:"mm-said",children:C})]}),ae.jsxs("div",{className:"mm-controls",children:[ae.jsx("button",{type:"button",className:`mm-sound ${v?"is-on":""}`,"aria-pressed":v,onClick:()=>p(Et=>!Et),"aria-label":"Speak replies out loud",children:ae.jsxs("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:[ae.jsx("path",{d:"M4 9v6h4l5 4V5L8 9Z"}),v?ae.jsx("path",{d:"M16 8.5a5 5 0 0 1 0 7M18.5 6a8.5 8.5 0 0 1 0 12"}):ae.jsx("path",{d:"m16 9 5 6m0-6-5 6"})]})}),ae.jsxs("button",{type:"button",className:"mm-mic",onClick:vt,"aria-label":f==="listening"?"Stop listening":f==="idle"?"Start talking":"Stop",children:[ae.jsx("span",{className:"mm-ring","aria-hidden":"true"}),f==="listening"?ae.jsx("span",{className:"mm-bars","aria-hidden":"true",children:[0,1,2,3].map(Et=>ae.jsx("i",{},Et))}):f==="idle"?ae.jsxs("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:[ae.jsx("rect",{x:"9",y:"3",width:"6",height:"11",rx:"3"}),ae.jsx("path",{d:"M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21"})]}):ae.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:ae.jsx("rect",{x:"7",y:"7",width:"10",height:"10",rx:"2.5"})})]}),ae.jsx("form",{className:"mm-type",onSubmit:Ht,children:ae.jsx("input",{value:y,onChange:Et=>S(Et.target.value),placeholder:"or type…","aria-label":"Type instead"})})]}),ae.jsxs("p",{className:"mm-hint",children:[ae.jsx("kbd",{children:"Space"})," hold to talk"]}),ae.jsx("div",{className:"mm-voices",role:"radiogroup","aria-label":"Voice",children:Object.keys(ic).map(Et=>ae.jsxs("button",{type:"button",role:"radio","aria-checked":g===Et,onClick:()=>_(Et),children:[ae.jsx("i",{style:{background:ic[Et].dot}}),ic[Et].label]},Et))})]})}nM.createRoot(document.getElementById("root")).render(ae.jsx(Ke.StrictMode,{children:ae.jsx(SR,{})}));
