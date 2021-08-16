const e={maxSelections:{type:Number,default:void 0}};function t(e,t,a){return{exceedsMaxSelections:()=>e.value.length>=t.value,addOption:t=>{const l=[...e.value,t];a("update:modelValue",l)}}}export{t as useMaxSelections,e as useMaxSelectionsProps};
//# sourceMappingURL=useMaxSelections.js.map
