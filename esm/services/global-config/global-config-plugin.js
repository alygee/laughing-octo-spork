import{mergeGlobalConfig as o,getGlobalConfig as t,setGlobalConfig as e}from"./global-config.js";const l=Symbol("GLOBAL_CONFIG"),r={install(r,s){s&&o(s);const g={get:t,set:e,merge:o};r.provide(l,g)}};export{l as GLOBAL_CONFIG,r as GlobalConfigPlugin};
//# sourceMappingURL=global-config-plugin.js.map
