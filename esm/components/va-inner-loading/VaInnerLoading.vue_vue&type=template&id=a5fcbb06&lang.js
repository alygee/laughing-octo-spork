import{resolveComponent as n,openBlock as o,createBlock as i,renderSlot as s,createVNode as r,createCommentVNode as e}from"vue";const l={class:"inner-loading"},a={key:0,class:"inner-loading__overlay"};function c(c,p){const t=n("va-icon");return o(),i("div",l,[s(c.$slots,"default"),c.loading?(o(),i("div",a,[r(t,{spin:"",color:c.$props.color,size:c.$props.size,name:c.$props.icon,class:"inner-loading__spinner"},null,8,["color","size","name"])])):e("v-if",!0)])}export{c as render};
//# sourceMappingURL=VaInnerLoading.vue_vue&type=template&id=a5fcbb06&lang.js.map