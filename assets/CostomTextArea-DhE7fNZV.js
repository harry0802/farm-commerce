import{br as m,M as p,N as f,d as e,o as c,c as _,v as x,n as b,a6 as g,_ as h,e as V,w as l,a as s,a0 as y,b as u,t as i,$ as v,m as w,a1 as $,a2 as S,a3 as C}from"./index-gg3M_zHO.js";const N={__name:"Textarea",props:{class:{type:null,required:!1},defaultValue:{type:[String,Number],required:!1},modelValue:{type:[String,Number],required:!1}},emits:["update:modelValue"],setup(a,{emit:n}){const t=a,r=m(t,"modelValue",n,{passive:!0,defaultValue:t.defaultValue});return(k,o)=>p((c(),_("textarea",{"onUpdate:modelValue":o[0]||(o[0]=d=>x(r)?r.value=d:null),class:b(e(g)("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",t.class))},null,2)),[[f,e(r)]])}},T={__name:"CostomTextArea",props:{componentFields:{type:Object},userLabel:{type:String},userDescription:{type:String},userPlaceholder:{type:String}},setup(a){return(n,t)=>(c(),V(e(C),null,{default:l(()=>[s(e(y),{class:"text-base"},{default:l(()=>[u(i(a.userLabel),1)]),_:1}),s(e(v),null,{default:l(()=>[s(e(N),w({class:["h-40 w-full  transition-shadow   duration-300","resize-none"]},a.componentFields,{placeholder:a.userPlaceholder}),null,16,["placeholder"])]),_:1}),s(e($),null,{default:l(()=>[u(i(a.userDescription),1)]),_:1}),s(e(S))]),_:1}))}},B=h(T,[["__scopeId","data-v-63fa3afe"]]);export{B as C};