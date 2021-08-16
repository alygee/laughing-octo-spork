import{computed as e}from"vue";const r=(r,t)=>e((()=>Object.keys(t).reduce(((e,t)=>(e[t]=r[t],e)),{})));function t(e,r){const t=e.props;return r?Object.keys(e.props).reduce(((e,o)=>(r.includes(o)||void 0===t[o]||(e[o]=t[o]),e)),{}):t}function o(e){return e.emits}export{o as extractComponentEmits,t as extractComponentProps,r as filterComponentProps};
//# sourceMappingURL=child-props.js.map
