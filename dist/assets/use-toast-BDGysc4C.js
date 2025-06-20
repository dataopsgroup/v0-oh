import{c as S,p as d,r as T}from"./main-C06Jgh32.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=S("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=S("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]),I=(t=[],e=!1)=>{const s=d();T.useEffect(()=>{if(!(e&&s.state?.manualNavigation)&&s.hash){const o=document.getElementById(s.hash.slice(1));o&&setTimeout(()=>{o.scrollIntoView({behavior:"smooth"})},100)}},[s,e,...t])},p=1,h=1e6;let i=0;function m(){return i=(i+1)%Number.MAX_SAFE_INTEGER,i.toString()}const u=new Map,f=t=>{if(u.has(t))return;const e=setTimeout(()=>{u.delete(t),n({type:"REMOVE_TOAST",toastId:t})},h);u.set(t,e)},A=(t,e)=>{switch(e.type){case"ADD_TOAST":return{...t,toasts:[e.toast,...t.toasts].slice(0,p)};case"UPDATE_TOAST":return{...t,toasts:t.toasts.map(s=>s.id===e.toast.id?{...s,...e.toast}:s)};case"DISMISS_TOAST":{const{toastId:s}=e;return s?f(s):t.toasts.forEach(o=>{f(o.id)}),{...t,toasts:t.toasts.map(o=>o.id===s||s===void 0?{...o,open:!1}:o)}}case"REMOVE_TOAST":return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(s=>s.id!==e.toastId)}}},c=[];let r={toasts:[]};function n(t){r=A(r,t),c.forEach(e=>{e(r)})}function E({...t}){const e=m(),s=a=>n({type:"UPDATE_TOAST",toast:{...a,id:e}}),o=()=>n({type:"DISMISS_TOAST",toastId:e});return n({type:"ADD_TOAST",toast:{...t,id:e,open:!0,onOpenChange:a=>{a||o()}}}),{id:e,dismiss:o,update:s}}function _(){const[t,e]=T.useState(r);return T.useEffect(()=>(c.push(e),()=>{const s=c.indexOf(e);s>-1&&c.splice(s,1)}),[t]),{...t,toast:E,dismiss:s=>n({type:"DISMISS_TOAST",toastId:s})}}export{y as C,O as T,I as a,_ as u};
