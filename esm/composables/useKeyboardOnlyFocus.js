import{ref as o}from"vue";function e(){const e=o(!1);let u=!1;const r={mousedown:()=>{u=!0},focus:()=>{u||(e.value=!0),u=!1},blur:()=>{e.value=!1,u=!1}};return{hasKeyboardFocus:e,keyboardFocusListeners:r}}export default e;
//# sourceMappingURL=useKeyboardOnlyFocus.js.map
