import e from"../node_modules/uuid/index.js";import{isObject as t}from"lodash-es";const o=(e=0)=>new Promise((t=>setTimeout(t,e))),r=(e,t=0,o=100)=>e<=t?t:e>=o?o:e,n=(...e)=>(console.warn(...e),!1),i=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s=(e,o)=>{if(0===o.length)return e;const r=e[o[0]];return t(r)?s(r,o.slice(1)):1===o.length?r:void 0},p=(e,t)=>t in e?e[t]:(t=t.replace(/^\./,""),s(e,t.split("."))),l=(e,t)=>{if("string"!=typeof e)return t&&e?"string"==typeof t?p(e,t):"function"==typeof t?t(e):e:e},c=()=>e.v4();export{c as generateUuid,s as getNestedValue,l as getProp,p as getValueByPath,i as hasOwnProperty,r as normalizeValue,o as sleep,n as warn};
//# sourceMappingURL=utils.js.map
