import{throttle as t}from"lodash-es";function o(){return document.documentElement.clientHeight||window.innerHeight||document.body.clientHeight}function e({coordinates:t,offsetTop:e,offsetBottom:n,target:i}){let f=!1,s=!1;const d=o();if(null!=e&&d)if(i===window)f=t.top<=e;else{const{top:o}=i.getBoundingClientRect();f=t.top-o<=e}if(null!=n&&d)if(i===window)s=t.bottom>=d-n;else{const{bottom:o}=i.getBoundingClientRect();s=o-t.bottom<=n}return{isTopAffixed:f,isBottomAffixed:s}}function n(t,o){const{target:n,element:i,offsetTop:f,offsetBottom:s,setState:d,getState:r,initialPosition:c}=o;let u;const l=!t,m=i.getBoundingClientRect(),w={offsetBottom:s,offsetTop:f,target:n};u=e(l&&c?{coordinates:c,...w}:{coordinates:m,...w});const a=r();!function(t,o){return t.isTopAffixed!==o.isTopAffixed||t.isBottomAffixed!==o.isBottomAffixed}(a,u)?a.width!==m.width&&d({...a,width:m.width}):d({...u,width:m.width})}function i(t){return"scroll"===t}function f(o,{handler:e,useCapture:n=i,wait:f=50}){const s=o.map((o=>{const i=t((t=>e(o,t)),f);return window.addEventListener(o,i,n(o)),()=>window.removeEventListener(o,i,n(o))}));return()=>s.forEach((t=>t()))}export{e as computeAffixedState,o as getWindowHeight,n as handleThrottledEvent,f as useEventsHandlerWithThrottle};
//# sourceMappingURL=VaAffix-utils.js.map
