var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,u=(t,r,o)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[r]=o,l=(e,t)=>{for(var r in t||(t={}))i.call(t,r)&&u(e,r,t[r]);if(o)for(var r of o(t))n.call(t,r)&&u(e,r,t[r]);return e};import{defineComponent as p,ref as a,createVNode as s}from"vue";const c={position:"absolute"},m=p({props:{width:Number,height:Number,itemCount:Number,itemSize:Function,renderCount:Number,renderItem:Function},setup(e,o){const i=a(null),n=a([]),u=a(),p=()=>{const o=e.itemCount||0,u=[];if(!i.value)return[];if(!e.renderItem)return[];for(let s=0;s<o;s++){const o=n.value[s],m=n.value[s+1]-n.value[s];o<i.value.scrollTop+2*e.height&&o+m>i.value.scrollTop-e.height&&u.push(e.renderItem({index:s,style:(p=l({},c),a={top:`${o}px`},t(p,r(a)))}))}var p,a;return u},m=()=>{const t=e.itemCount||0,r=[0];let o=0;for(let i=0;i<t;i++)"function"==typeof e.itemSize?o+=e.itemSize(i):"number"==typeof e.itemSize&&(o+=e.itemSize),r.push(o);n.value=r};return()=>(e.renderCount!==u.value&&(m(),u.value=e.renderCount),s("div",{ref:i,style:{width:`${e.width}px`,height:`${e.height}px`,overflow:"auto"},onScroll:m},[s("div",{style:{position:"relative",height:`${n.value[n.value.length-1]}px`}},[p()])]))}});export default m;
