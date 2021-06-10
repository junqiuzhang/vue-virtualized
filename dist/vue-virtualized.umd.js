var __defProp=Object.defineProperty,__defProps=Object.defineProperties,__getOwnPropDescs=Object.getOwnPropertyDescriptors,__getOwnPropSymbols=Object.getOwnPropertySymbols,__hasOwnProp=Object.prototype.hasOwnProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(e,r,t)=>r in e?__defProp(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,__spreadValues=(e,r)=>{for(var t in r||(r={}))__hasOwnProp.call(r,t)&&__defNormalProp(e,t,r[t]);if(__getOwnPropSymbols)for(var t of __getOwnPropSymbols(r))__propIsEnum.call(r,t)&&__defNormalProp(e,t,r[t]);return e},__spreadProps=(e,r)=>__defProps(e,__getOwnPropDescs(r));!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r(require("vue")):"function"==typeof define&&define.amd?define(["vue"],r):(e="undefined"!=typeof globalThis?globalThis:e||self)["vue-virtualized"]=r(e.Vue)}(this,(function(e){"use strict";const r={position:"absolute"};return e.defineComponent({props:{width:{type:Number,required:!0},height:{type:Number,required:!0},itemCount:{type:Number,required:!0,default:0},itemSize:{type:Function,required:!0,default:()=>0},renderItem:{type:Function,required:!0},reRenderCount:{type:Number,required:!1,default:1},preRenderPageCount:{type:Number,required:!1,default:1}},setup(t){const o=e.ref(0),n=e.ref([]),u=e=>{const o=t.itemCount,u=[];if(!t.renderItem)return[];const p=e+(1+t.preRenderPageCount)*t.height,i=e-t.preRenderPageCount*t.height;for(let l=0;l<o;l++){const e=n.value[l],o=n.value[l+1];if(e<p&&o>i)u.push(t.renderItem({index:l,style:__spreadProps(__spreadValues({},r),{top:`${e}px`})}));else if(u.length>0)break}return u},p=()=>{const e=t.itemCount,r=[0];let o=0;for(let n=0;n<e;n++)o+=t.itemSize(n),r.push(o);n.value=r},i=e=>{var r,n;const u=null!=(n=null==(r=e.target)?void 0:r.scrollTop)?n:0,p=u-o.value,i=t.height/2;p<i&&p>-i||(o.value=u)};return e.watch((()=>t.reRenderCount),(()=>{p()})),p(),()=>e.createVNode("div",{style:{width:`${t.width}px`,height:`${t.height}px`,overflow:"auto"},onScroll:i},[e.createVNode("div",{style:{position:"relative",height:`${n.value[n.value.length-1]}px`}},[u(o.value)])])}})}));
