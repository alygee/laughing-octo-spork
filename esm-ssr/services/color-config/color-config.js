import{setGlobalConfig as o,getGlobalConfig as r}from"../global-config/global-config.js";import{getBoxShadowColor as t,getHoverColor as e,getFocusColor as l,getGradientBackground as s,getTextColor as c,shiftHSLAColor as g,setHSLAColor as i,isColor as C}from"./color-functions.js";const n="#000000",a=r=>{o((o=>({...o,colors:{...o.colors,...r}})))},f=()=>r().colors||{},d=(o,r="#000000")=>{const t=f();return o||(o=r),t[o]?t[o]:C(o)?o:r},u=(o,r="va")=>Object.keys(o).filter((r=>void 0!==o[r])).reduce(((t,e)=>({...t,[`--${r}-${e}`]:d(o[e])})),{}),S=()=>({setColors:a,getColors:f,getColor:d,getBoxShadowColor:t,getHoverColor:e,getFocusColor:l,getGradientBackground:s,getTextColor:c,shiftHSLAColor:g,setHSLAColor:i,colorsToCSSVariable:u});export{n as DEFAULT_COLOR,u as colorsToCSSVariable,d as getColor,f as getColors,a as setColors,S as useColors};
//# sourceMappingURL=color-config.js.map
