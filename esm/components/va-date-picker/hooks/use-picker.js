import{isDatesMonthEqual as e,isDatesDayEqual as l,isDatesYearEqual as a}from"../utils/date-utils.js";import{isSingleDate as o,isDates as u,isRange as d,useDatePickerModelValue as t}from"./model-value-helper.js";import{ref as r,computed as m}from"vue";const n=(n,V,s,i)=>{const v=(o=>({month:e,day:l,year:a}[o]))(n),c=r(0),f=m((()=>V.value[c.value])),{updateModelValue:p}=t(s,i,v);return{hoveredIndex:c,hoveredValue:f,onClick:e=>{p(e),i(`click:${n}`,e)},isToday:e=>{const l=new Date;return v(l,e)},isSelected:e=>!!s.modelValue&&(o(s.modelValue)?v(s.modelValue,e):u(s.modelValue)?!!s.modelValue.find((l=>v(l,e))):!!d(s.modelValue)&&(v(s.modelValue.start,e)||v(s.modelValue.end,e))),isInRange:e=>{if(!s.modelValue)return!1;if(!d(s.modelValue))return!1;if(s.modelValue.start&&s.modelValue.end)return s.modelValue.start<e&&s.modelValue.end>e;const l=s.modelValue.start||s.modelValue.end;return!!l&&(!!f.value&&(l<e?f.value>=e:f.value<=e))}}};export{n as useDatePicker};
//# sourceMappingURL=use-picker.js.map