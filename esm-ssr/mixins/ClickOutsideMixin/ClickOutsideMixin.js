import{noop as e}from"lodash-es";import{Vue as t}from"../../node_modules/vue-class-component/dist/vue-class-component.esm-bundler.js";import{clickedRootScrollbar as o,ownerDocument as s,listen as r}from"../../utils/dom-utils.js";import{handleMouseCapture as n}from"./ClickOutsideMixin-utils.js";export default class extends t{constructor(){super(...arguments),this.preventMouseRootTrigger=!0}handleMouse(e,t){if(!this.preventMouseRootTrigger){const{onClickOutside:o}=t;o(e)}}handleMouseCapture(e,t){o(e)||(this.preventMouseRootTrigger=n(e,t))}registerClickOutsideEvents(t,o){const{trigger:n,disabled:i}=o;if(i||!t)return e;const u=s(t),l=r({node:u,eventName:n,handler:e=>this.handleMouseCapture(e,t),options:!0}),d=r({node:u,eventName:n,handler:e=>this.handleMouse(e,o)});let a=[];return"ontouchstart"in u.documentElement&&(a=[].slice.call(u.body.children).map((t=>r({node:t,eventName:"mousemove",handler:e})))),()=>{l(),d(),a.forEach((e=>e())),this.preventMouseRootTrigger=!0}}}
//# sourceMappingURL=ClickOutsideMixin.js.map
