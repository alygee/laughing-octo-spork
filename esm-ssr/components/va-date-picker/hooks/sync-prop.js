import{computed as e,ref as t}from"vue";function u(u,o,r,v){if(void 0===v)return{syncProp:e({set(e){r(`update:${o}`,e)},get:()=>u.value})};const n=t(v);return{syncProp:e({set(e){n.value=e,r(`update:${o}`,e)},get:()=>void 0===(null==u?void 0:u.value)?n.value:u.value})}}export{u as useSyncProp};
//# sourceMappingURL=sync-prop.js.map
