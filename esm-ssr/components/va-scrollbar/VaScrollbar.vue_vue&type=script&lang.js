import{detect as t}from"detect-browser";import i from"element-resize-detector";const e=t();var s={name:"VaScrollbar",props:{speed:{type:Number,default:20}},methods:{calcSize(){this.isDown=this.isUp=!1,this.maxHeight=parseFloat(this.wrapper.offsetHeight,10),this.contentHeight=parseFloat(this.content.offsetHeight,10),this.trackHeight=parseFloat(this.track.offsetHeight,10),this.maxHeight/this.contentHeight*this.trackHeight<10?this.thumb.style.height="10px":this.thumb.style.height=this.maxHeight/this.contentHeight*this.trackHeight+"px",this.maxHeight/this.contentHeight<1?this.thumb.classList.add("active"):this.thumb.classList.remove("active")},calcThumb(){const t=""===this.content.style.marginTop?0:parseInt(this.content.style.marginTop,10);this.thumb.style.top=-t/this.contentHeight*this.trackHeight+"px"},onContentResize(){const t=this.contentHeight;this.calcSize(),this.calcThumb(),this.content.style.transition="margin-top .3s linear",this.thumb.style.transition="top .3s linear";const i=t=>{"margin-top"===t.propertyName&&(this.content.style.transition="",this.calcSize(),this.calcThumb(),this.content.removeEventListener("transitionend",i),this.thumb.style.transition="")};this.content.addEventListener("transitionend",i),this.setVertical(this.contentHeight-t)},startDrag(t){this.isDragging=!0,this.prevTouch=t.touches[0]},onDrag(t){if(this.isDragging){t.preventDefault();const i=t.touches[0],e=this.prevTouch.clientY-i.clientY;this.setVertical(e),this.prevTouch=i}},stopDrag(){this.isDragging=!1},scroll(t){let i=.01*t.deltaY*this.speed;"firefox"===e.name&&(i*=10),this.setVertical(i),t.preventDefault()},setVertical(t){if(this.isDown&&t>0||this.isUp&&t<0||this.contentHeight<=this.maxHeight)return;const i=""===this.content.style.marginTop?0:parseFloat(this.content.style.marginTop,10);let e=0;this.maxHeight-(i-t)>this.contentHeight&&t>0?(e=this.maxHeight-this.contentHeight,this.isDown=!0):(this.isDown=!1,i-t>0?(this.isUp=!0,e=0):(e=i-t,this.isUp=!1)),this.content.style.marginTop=e+"px",this.calcThumb()}},mounted(){this.track=this.$refs.track,this.thumb=this.$refs.thumb,this.content=this.$refs.scrollbarContent,this.wrapper=this.$refs.scrollbarWrapper,this.calcSize(),this.calcThumb(),i.listenTo(this.content,(()=>{this.calcSize(),this.calcThumb()}))},beforeUnmount(){i.removeAllListeners(this.content)},data:()=>({wrapper:void 0,maxHeight:void 0,thumb:void 0,track:void 0,trackHeight:void 0,content:void 0,contentHeight:void 0,isDown:!1,isUp:!0,prevTouch:{},isDragging:!1})};export default s;
//# sourceMappingURL=VaScrollbar.vue_vue&type=script&lang.js.map
