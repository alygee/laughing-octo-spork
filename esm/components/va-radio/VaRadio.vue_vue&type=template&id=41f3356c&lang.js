import{openBlock as a,createBlock as o,createVNode as e,renderSlot as n,createTextVNode as s,toDisplayString as l}from"vue";const t={class:"va-radio__text"};function c(c,d){return a(),o("label",{class:["va-radio",c.computedClass]},[e("input",{class:"va-radio__input",type:"radio",checked:c.isActive,disabled:c.disabled,name:c.name,onChange:d[1]||(d[1]=(...a)=>c.onClick&&c.onClick(...a)),onFocus:d[2]||(d[2]=(...a)=>c.onFocus&&c.onFocus(...a)),tabindex:c.tabindex},null,40,["checked","disabled","name","tabindex"]),e("span",{class:"va-radio__icon",style:c.iconComputedStyles},[e("span",{class:"va-radio__icon__background",style:c.iconBackgroundComputedStyles},null,4),e("span",{class:"va-radio__icon__dot",style:c.iconDotComputedStyles},null,4)],4),e("span",t,[n(c.$slots,"default",{},(()=>[s(l(c.computedLabel),1)]))])],2)}export{c as render};
//# sourceMappingURL=VaRadio.vue_vue&type=template&id=41f3356c&lang.js.map