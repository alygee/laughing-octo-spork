import{pushScopeId as e,popScopeId as o,resolveComponent as t,openBlock as c,createBlock as n,renderSlot as s,createVNode as a,createTextVNode as i,toDisplayString as l,mergeProps as r,createCommentVNode as h,withScopeId as y}from"vue";const m=y("data-v-0e4bae0c");e("data-v-0e4bae0c");const w={key:0,class:"va-date-picker-header va-date-picker__header"},v={class:"va-date-picker-header__text"},V={class:"mr-1"};o();const d=m(((e,o,y,d,k,p)=>{const f=t("va-button");return"year"!==e.syncView.type?(c(),n("div",w,[s(e.$slots,"buttonPrev",{onClick:e.prev},(()=>[a(f,{icon:"chevron_left",flat:"",size:"small",color:e.color,onClick:e.prev},null,8,["color","onClick"])])),a("div",v,[s(e.$slots,"header",{year:e.syncView.year,month:e.syncView.month,monthNames:e.monthNames,view:e.syncView,changeView:e.changeView,switchView:e.switchView},(()=>[a(f,{flat:"",onClick:e.switchView,size:"small",color:e.color},{default:m((()=>[a("span",V,[s(e.$slots,"year",{year:e.syncView.year},(()=>[i(l(e.syncView.year),1)]))]),"day"===e.syncView.type?s(e.$slots,"month",r({key:0},{month:e.syncView.month}),(()=>[i(l(e.monthNames[e.syncView.month]),1)])):h("v-if",!0)])),_:3},8,["onClick","color"])]))]),s(e.$slots,"buttonNext",{onClick:e.next},(()=>[a(f,{icon:"chevron_right",flat:"",size:"small",color:e.color,onClick:e.next},null,8,["color","onClick"])]))])):h("v-if",!0)}));export{d as render};
//# sourceMappingURL=VaDatePickerHeader.vue_vue&type=template&id=0e4bae0c&lang.js.map