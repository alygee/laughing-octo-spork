import{resolveComponent as e,mergeProps as a,createVNode as t,renderSlot as s,createTextVNode as c,toDisplayString as n,createCommentVNode as o,withScopeId as r}from"vue";import{ssrRenderAttrs as i,ssrRenderSlot as l,ssrRenderComponent as y,ssrInterpolate as m}from"@vue/server-renderer";const v=r("data-v-0e4bae0c"),h=v(((r,h,d,w,V,p,b,$)=>{const f=e("va-button");"year"!==r.syncView.type?(h(`<div${i(a({class:"va-date-picker-header va-date-picker__header"},w))} data-v-0e4bae0c>`),l(r.$slots,"buttonPrev",{onClick:r.prev},(()=>{h(y(f,{icon:"chevron_left",flat:"",size:"small",color:r.color},null,d))}),h,d,"data-v-0e4bae0c-s"),h('<div class="va-date-picker-header__text" data-v-0e4bae0c>'),l(r.$slots,"header",{year:r.syncView.year,month:r.syncView.month,monthNames:r.monthNames,view:r.syncView,changeView:r.changeView,switchView:r.switchView},(()=>{h(y(f,{flat:"",size:"small",color:r.color},{default:v(((e,i,y,v)=>{if(!i)return[t("span",{class:"mr-1"},[s(r.$slots,"year",{year:r.syncView.year},(()=>[c(n(r.syncView.year),1)]))]),"day"===r.syncView.type?s(r.$slots,"month",a({key:0},{month:r.syncView.month}),(()=>[c(n(r.monthNames[r.syncView.month]),1)])):o("v-if",!0)];i(`<span class="mr-1" data-v-0e4bae0c${v}>`),l(r.$slots,"year",{year:r.syncView.year},(()=>{i(`${m(r.syncView.year)}`)}),i,y,"data-v-0e4bae0c-s"+v),i("</span>"),"day"===r.syncView.type?l(r.$slots,"month",{month:r.syncView.month},(()=>{i(`${m(r.monthNames[r.syncView.month])}`)}),i,y,"data-v-0e4bae0c-s"+v):i("\x3c!----\x3e")})),_:3},d))}),h,d,"data-v-0e4bae0c-s"),h("</div>"),l(r.$slots,"buttonNext",{onClick:r.next},(()=>{h(y(f,{icon:"chevron_right",flat:"",size:"small",color:r.color},null,d))}),h,d,"data-v-0e4bae0c-s"),h("</div>")):h("\x3c!----\x3e")}));export{h as ssrRender};
//# sourceMappingURL=VaDatePickerHeader.vue_vue&type=template&id=0e4bae0c&lang.js.map
