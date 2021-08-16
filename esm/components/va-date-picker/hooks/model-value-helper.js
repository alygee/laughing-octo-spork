const e=e=>void 0!==e.start&&void 0!==e.end,l=e=>e instanceof Date,t=e=>Array.isArray(e),a=(e,l)=>{throw Error(`Incorrect modelValue for mode ${l}. Got ${JSON.stringify(e)}`)},d=e=>e.start&&e.end&&e.start>e.end?{start:e.end,end:e.start}:e,u=(u,r,o)=>({updateModelValue:n=>{if(!u.modelValue)return void r("update:modelValue",((e,l)=>{if("single"===l)return e;if("range"===l)return{start:e,end:null};if("multiple"===l)return[e];if("auto"===l)return e;throw new Error("Unknown mode")})(n,u.mode));const m="auto"===u.mode?(i=u.modelValue,l(i)?"single":e(i)?"range":t(i)?"multiple":a(i,"auto")):u.mode;var i;if("single"===m){if(!l(u.modelValue))return a(u.modelValue,m);r("update:modelValue",n)}else if("range"===m){if(!e(u.modelValue))return a(u.modelValue,m);if(u.modelValue.end&&o(u.modelValue.end,n))return r("update:modelValue",{start:u.modelValue.start,end:null});if(u.modelValue.start&&o(u.modelValue.start,n))return r("update:modelValue",{start:null,end:u.modelValue.end});if(null===u.modelValue.end)return r("update:modelValue",d({start:u.modelValue.start,end:n}));if(null===u.modelValue.start)return r("update:modelValue",d({end:u.modelValue.end,start:n}));r("update:modelValue",{start:n,end:null})}else if("multiple"===m){if(!t(u.modelValue))return a(u.modelValue,m);const e=!!u.modelValue.find((e=>o(e,n)));r("update:modelValue",e?u.modelValue.filter((e=>!o(e,n))):[...u.modelValue,n].sort(((e,l)=>e.getTime()-l.getTime())))}}});export{t as isDates,e as isRange,l as isSingleDate,u as useDatePickerModelValue};
//# sourceMappingURL=model-value-helper.js.map
