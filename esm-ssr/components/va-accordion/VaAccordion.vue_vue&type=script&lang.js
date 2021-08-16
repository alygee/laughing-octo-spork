import{useStateful as e}from"../../mixins/StatefulMixin/cStatefulMixin.js";import{defineComponent as o,ref as t,provide as l,onMounted as u,onUpdated as a}from"vue";const p=Symbol("AccordionService");var n=o({name:"VaAccordion",emits:["update:modelValue"],props:{modelValue:{type:Array,default:()=>[]},multiply:{type:Boolean,default:!1},inset:{type:Boolean,default:!1},popout:{type:Boolean,default:!1}},setup(o,n){const i=e(o,n.emit),r=t([]);l(p,{isInsideAccordion:!0,getProps:()=>({inset:o.inset,popout:o.popout}),getState:()=>i.valueComputed,onChildMounted:e=>{r.value.push(e)},onChildUnmounted:e=>{r.value=r.value.filter((o=>o!==e))},onChildChange:e=>{const t=r.value.map((t=>(t===e||o.multiply||(t.valueProxy=!1),t.valueProxy)));i.valueComputed.value=t}});const d=()=>{r.value.forEach(((e,o)=>{e.valueProxy=i.valueComputed.value[o]}))};return u(d),a(d),{collapses:r,value:i.valueComputed}}});export default n;export{p as AccordionServiceKey};
//# sourceMappingURL=VaAccordion.vue_vue&type=script&lang.js.map