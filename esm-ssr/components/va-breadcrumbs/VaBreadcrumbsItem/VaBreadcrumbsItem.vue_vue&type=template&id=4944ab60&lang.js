import{resolveComponent as e,mergeProps as a,withCtx as l,renderSlot as t,createTextVNode as s,toDisplayString as r}from"vue";import{ssrRenderAttrs as c,ssrRenderComponent as i,ssrRenderSlot as b,ssrInterpolate as o}from"@vue/server-renderer";function p(p,u,d,m){const n=e("router-link");u(`<span${c(a({class:"va-breadcrumb-item"},m))}>`),p.isDisabled?(u('<span class="va-breadcrumb-item__label">'),b(p.$slots,"default",{},(()=>{u(`${o(p.label)}`)}),u,d),u("</span>")):u(i(n,{class:"va-breadcrumb-item__label va-breadcrumb-item__label--link",to:p.to,replace:p.replace,append:p.append,exact:p.exact,href:p.hrefComputed,"active-class":p.activeClass,"exact-active-class":p.exactActiveClass,tag:"a"},{default:l(((e,a,l,c)=>{if(!a)return[t(p.$slots,"default",{},(()=>[s(r(p.label),1)]))];b(p.$slots,"default",{},(()=>{a(`${o(p.label)}`)}),a,l,c)})),_:3},d)),u("</span>")}export{p as ssrRender};
//# sourceMappingURL=VaBreadcrumbsItem.vue_vue&type=template&id=4944ab60&lang.js.map
