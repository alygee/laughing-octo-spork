import{resolveComponent as e,mergeProps as t,withCtx as o,renderSlot as n,createTextVNode as i,toDisplayString as s}from"vue";import{ssrRenderAttrs as m,ssrRenderList as a,ssrRenderComponent as d,ssrRenderSlot as h,ssrInterpolate as r}from"@vue/server-renderer";function c(c,l,v,p,x,u,f,g){const y=e("va-date-picker-cell");l(`<div${m(t({class:"va-month-picker"},c.containerAttributes,p))}>\x3c!--[--\x3e`),a(c.months,((e,t)=>{l('<div class="va-month-picker__month-wrapper">'),l(d(y,{"in-range":!!c.isInRange(e),selected:!!c.isSelected(e),disabled:!!c.isDisabled(e),today:!!c.isToday(e),focused:c.hoveredIndex===t,"highlight-today":c.highlightToday},{default:o(((e,o,m,a)=>{if(!o)return[n(c.$slots,"month",{monthIndex:t,month:c.monthNames[t]},(()=>[i(s(c.monthNames[t]),1)]))];h(c.$slots,"month",{monthIndex:t,month:c.monthNames[t]},(()=>{o(`${r(c.monthNames[t])}`)}),o,m,a)})),_:2},v)),l("</div>")})),l("\x3c!--]--\x3e</div>")}export{c as ssrRender};
//# sourceMappingURL=VaMonthPicker.vue_vue&type=template&id=299f7c82&lang.js.map