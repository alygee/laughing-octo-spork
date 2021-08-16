import{computed as o}from"vue";import{getColor as r}from"../services/color-config/color-config.js";function e(e){const t={getColor:r},c=o((()=>t.getColor(e.color)));return{hasColorTheme:!0,theme:t,colorComputed:c,computeColor:(o,r)=>t.getColor(o,r)}}export{e as useColor};
//# sourceMappingURL=useColor.js.map
