import{resolveComponent as e,mergeProps as l}from"vue";import{ssrRenderAttrs as a,ssrRenderAttr as o,ssrRenderSlot as s,ssrRenderStyle as c,ssrRenderComponent as d,ssrInterpolate as t}from"@vue/server-renderer";function r(r,v,n,_){const i=e("va-icon");v(`<div${a(l({class:["va-collapse",r.computedClasses]},_))}><div class="va-collapse__header"${o("tabindex",r.collapseIndexComputed)}>`),s(r.$slots,"header",{value:r.valueProxy,hasKeyboardFocus:r.SetupContext.hasKeyboardFocus},(()=>{v(`<div class="va-collapse__header__content" style="${c(r.contentStyle)}">`),r.icon?v(d(i,{class:"va-collapse__header__icon",name:r.icon,color:r.textColor},null,n)):v("\x3c!----\x3e"),v(`<div class="va-collapse__header__text">${t(r.header)}</div>`),v(d(i,{class:"va-collapse__header__icon",name:r.valueProxy?"expand_less":"expand_more",color:r.textColor},null,n)),v("</div>")}),v,n),v(`</div><div class="va-collapse__body" style="${c(r.stylesComputed)}">`),s(r.$slots,"default",{},null,v,n),v("</div></div>")}export{r as ssrRender};
//# sourceMappingURL=VaCollapse.vue_vue&type=template&id=10b321b0&lang.js.map