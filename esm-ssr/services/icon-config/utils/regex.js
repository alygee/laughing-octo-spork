const t=(t,e)=>e.test(t),e=(t,e)=>{if("string"!=typeof e&&e.global)return[...t.matchAll(e)].map((t=>t.slice(1)));const l=t.match(e)||[];return l?l.length>1?l.slice(1):l:[]};export{t as isMatchRegex,e as regexGroupsValues};
//# sourceMappingURL=regex.js.map
