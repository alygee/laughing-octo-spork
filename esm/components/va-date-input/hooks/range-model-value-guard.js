import{ref as e,computed as u,watch as l}from"vue";import{isRange as v}from"../../va-date-picker/hooks/model-value-helper.js";const a=(a,o)=>{const r=e(a.value),t=u({get:()=>r.value,set:e=>{if(o.value&&(r.value=e,a.value=e),!e)return a.value=e,void(r.value=e);v(e)?null!==e.end&&(a.value=e):a.value=e,r.value=e}});l(a,(e=>{e&&(r.value=e)}));return{valueComputed:t,reset:()=>{r.value&&v(r.value)&&(r.value=a.value)}}};export{a as useRangeModelValueGuard};
//# sourceMappingURL=range-model-value-guard.js.map