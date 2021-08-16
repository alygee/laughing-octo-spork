import{upperFirst as e,camelCase as t,isObject as o,isArray as n}from"lodash-es";import{computed as r,h as s}from"vue";import{useLocalConfig as i}from"../../components/va-config/VaConfig.js";import{useGlobalConfig as c}from"../global-config/global-config.js";import{getLocalConfigWithComponentProp as u}from"./createConfigValueGetter.js";function f(e){switch(!0){case Boolean(e.options):return e.options;case Boolean(e.__vccOpts)||Boolean(e.__b):return{...e.__b,...e.__vccOpts};default:return e}}function p(e){switch(!0){case n(e):return e.reduce(((e,t)=>({...e,[t]:null})),{});case o(e):return e;default:return{}}}function a(e,t,o="props"){const{mixins:n,extends:r}=t;r&&a(e,r,o),n&&n.forEach((t=>a(e,t,o)));const s=p(t[o]);for(const t in s)e[t]=s[t]}function l(e,t="props"){var o,n;const r=null!==(o=e.mixins)&&void 0!==o?o:[],s={};a(s,null!==(n=e.extends)&&void 0!==n?n:[],t);for(let e=0;e<r.length;e++)a(s,r[e],t);return Object.assign(s,p(e[t])),s}const m=o=>{const[n,r]=o.split(":");return r?[e(n),t(r)].join(":"):e(t(n))};export default o=>{const n=f(o),p=l(n),a=Object.keys(l(n,"emits")),d={...p},g={...n.methods},h=Object.keys(d),b=e(t(o.name));return{name:`WithConfigTransport${b||"Component"}`,props:h,emits:a,methods:Object.keys(g).reduce(((e,t)=>({...e,[t]:function(...e){return this.$refs.innerRef[t](...e)}})),{}),setup(e,t){const o=i(),{getGlobalConfig:n}=c();return{computedProps:r((()=>{const t=((e,t,o="")=>(n,r)=>{const s=e?[e,...t]:t,i=u(s,o,n);return i?i[o][n]:"function"==typeof r?r():r})(n().components||{},o.value,b),r=(o,n)=>o in e&&void 0!==e[o]?e[o]:t(o,n);return Object.entries(d).reduce(((e,[t,o])=>({...e,[t]:r(t,o.default)})),{})})),proxiedEmits:a.reduce(((e,o)=>({...e,[`on${m(o)}`]:(...e)=>t.emit(o,...e)})),{})}},render(){return s(o,{...this.computedProps,...this.proxiedEmits,ref:"innerRef"},{...this.$slots})}}};export{f as getComponentOptions,l as resolveProps};
//# sourceMappingURL=withConfigTransport.js.map
