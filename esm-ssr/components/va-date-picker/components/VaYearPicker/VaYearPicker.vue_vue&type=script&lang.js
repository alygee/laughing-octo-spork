import{defineComponent as e,toRefs as t,ref as l,computed as a,onMounted as r,watch as o}from"vue";import"../VaDatePickerCell.vue.js";import{createYearDate as u}from"../../utils/date-utils.js";import{useGridKeyboardNavigation as i}from"../../hooks/grid-keyboard-navigation.js";import{useDatePicker as s}from"../../hooks/use-picker.js";import n from"../VaDatePickerCell.vue_vue&type=script&lang.js";var d=e({components:{VaDatePickerCell:n},props:{modelValue:{type:[Date,Array,Object]},allowedYears:{type:Function,default:void 0},highlightToday:{type:Boolean,default:!0},mode:{type:String,default:"auto"},view:{type:Object,default:()=>({type:"year"})},startYear:{type:Number,default:()=>1970},endYear:{type:Number,default:()=>(new Date).getFullYear()+50}},emits:["update:modelValue","hover:year","click:year"],setup(e,{emit:n}){const{view:d}=t(e),v=l(null),c=a((()=>((e,t)=>{const l=t-e+1;return Array.from(Array(l).keys()).map((t=>u(e+t)))})(e.startYear,e.endYear)));r((()=>{(e=>{if(!v.value)return;const t=v.value.scrollHeight,l=v.value.offsetHeight,a=t/c.value.length*e;v.value.scrollTo({top:a-l/2})})(c.value.findIndex((e=>e.getFullYear()===d.value.year)))}));const{hoveredIndex:p,onClick:y,isToday:f,isSelected:m,isInRange:g}=s("year",c,e,n),{focusedCellIndex:h,containerAttributes:k}=i({rowSize:1,start:0,end:c.value.length,onFocusIndex:a((()=>c.value.findIndex((e=>e.getFullYear()===d.value.year)))),onSelected:e=>y(c.value[e])});return o(h,(e=>-1!==e&&(e=>{if(!v.value)return;const t=v.value.scrollHeight,l=v.value.offsetHeight,a=t/c.value.length*e,r=t/c.value.length,o=a-v.value.scrollTop;o<0?v.value.scrollTo({top:a}):o>l&&v.value.scrollTo({top:a-l+r})})(e))),o(h,(e=>{p.value=e})),o(p,(e=>{h.value=e})),{hoveredIndex:p,years:c,rootNode:v,onClick:y,isToday:f,isSelected:m,isInRange:g,isYearDisabled:t=>void 0!==e.allowedYears&&!e.allowedYears(t),focusedCellIndex:h,containerAttributes:k}}});export default d;
//# sourceMappingURL=VaYearPicker.vue_vue&type=script&lang.js.map