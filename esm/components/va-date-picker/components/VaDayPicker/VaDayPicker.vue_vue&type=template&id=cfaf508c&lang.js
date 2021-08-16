import{resolveComponent as e,openBlock as d,createBlock as a,mergeProps as t,Fragment as i,renderList as n,renderSlot as o,createTextVNode as s,toDisplayString as h,createCommentVNode as l,createVNode as r,withCtx as c}from"vue";const k={class:"va-date-picker-cell__day"};function y(y,g,v,u,p,w){const _=e("va-date-picker-cell");return d(),a("div",t({class:"va-day-picker"},y.containerAttributes),[y.hideWeekDays?l("v-if",!0):(d(!0),a(i,{key:0},n(y.weekdayNamesComputed,(e=>(d(),a("div",{key:e,class:"va-day-picker__weekday"},[o(y.$slots,"weekday",{},(()=>[s(h(e),1)]))])))),128)),(d(!0),a(i,null,n(y.calendarDates,((e,t)=>(d(),a("div",{class:"va-day-picker__calendar__day-wrapper",key:e,onMouseenter:e=>y.hoveredIndex=t,onMouseleave:g[1]||(g[1]=e=>y.hoveredIndex=-1)},[r(_,{hidden:y.isOtherMonth(e)&&!y.showOtherMonths,today:y.isToday(e),selected:y.isSelected(e),"in-range":y.isInRange(e),"other-month":y.isOtherMonth(e),weekend:y.isDateWeekend(e),disabled:y.isDateDisabled(e),focused:y.hoveredIndex===t,"highlight-today":y.highlightToday,"highlight-weekend":y.highlightWeekend,onClick:d=>{y.onClick(e),y.focusedCellIndex=t}},{default:c((()=>[r("span",k,[o(y.$slots,"day",{date:e},(()=>[s(h(e.getDate()),1)]))])])),_:2},1032,["hidden","today","selected","in-range","other-month","weekend","disabled","focused","highlight-today","highlight-weekend","onClick"])],40,["onMouseenter"])))),128))],16)}export{y as render};
//# sourceMappingURL=VaDayPicker.vue_vue&type=template&id=cfaf508c&lang.js.map