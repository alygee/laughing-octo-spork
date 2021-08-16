const e=(e=1,t,l,s=!1)=>{let c=0;if(0===l&&(l=1),t>l&&(t=l),0===t)c=1,t=l;else{const s=t/2;c=e-s<=0||e>l?1:e+s>l?l-t+1:Math.ceil(e-s)}const n=[];for(let e=0;e<t;e++)n.push(c+e);return s&&(1!==c&&n.splice(0,2,1,"..."),n[n.length-1]!==l&&n.splice(-2,2,"...",l)),n};export{e as setPaginationRange};
//# sourceMappingURL=setPaginationRange.js.map
