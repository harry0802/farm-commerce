import{_ as D,H as F,k as S,I,J as m,y as J,p as $,o as i,c as u,f as e,a as t,w as o,K as b,d as a,L as h,M as j,v as B,N,e as V,O as L,P as M,E,G as H,b as c}from"./index-BjxlNJz1.js";const g=s=>(E("data-v-4230b7d9"),s=s(),H(),s),P=g(()=>e("select",{class:"flex w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 py-4 px-3.5 h-auto transition-shadow duration-300","data-role":"county"},null,-1)),R=g(()=>e("select",{class:"flex w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 py-4 px-3.5 h-auto transition-shadow duration-300","data-role":"district"},null,-1)),T={class:"submit__container self-center"},U={__name:"JoinZipFrom",setup(s){const n=F(),r=S(""),{onSubmit:v,defineHandleFn:y,initializeZipcodeWithPage:w,loading:p}=I(),{handleChange:C}=m("countys"),{handleChange:k}=m("districts"),{value:f,handleChange:Z}=m("zipCodeDefault");y(C,k,Z);const{setUserArea:z}=J("zipCheck"),x=async function(){try{const _=await v();if(!_)return;const{zipCodeDefault:l}=_;p.value=!0;const d=await M(l);d.length>0?(z.value(d),n.replace({name:"in-area"})):n.replace({name:"out-area"})}finally{p.value=!1}};return $(()=>{w(r.value)}),(_,l)=>(i(),u("form",{onSubmit:x},[e("div",{class:"grid w-full gap-y-6 gap-x-8 sm:grid-cols-2 twzipcode",ref_key:"twZipcode",ref:r},[t(a(h),{name:"countys"},{default:o(()=>[t(b,{userLabel:"縣市*",userDescription:"輸入要更改的內容"},{default:o(()=>[P]),_:1})]),_:1}),t(a(h),{name:"districts"},{default:o(()=>[t(b,{"user-label":"地區*","user-description":"輸入要更改的內容"},{default:o(()=>[R]),_:1})]),_:1}),t(a(h),{name:"zipCodeDefault"},{default:o(()=>[t(b,{"user-label":"郵遞區號*","user-description":"輸入要更改的內容"},{default:o(()=>[j(e("input",{"onUpdate:modelValue":l[0]||(l[0]=d=>B(f)?f.value=d:null),class:"flex w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 py-4 px-3.5 h-auto transition-shadow duration-300","data-role":"zipcode"},null,512),[[N,a(f),void 0,{number:!0}]])]),_:1})]),_:1}),e("div",T,[a(p)?(i(),V(L,{key:1,class:"h-[50px]"})):(i(),u("button",{key:0,onClick:x,class:"u-pirmary-button",type:"submit "}," 下一步 "))])],512)],32))}},q=D(U,[["__scopeId","data-v-4230b7d9"]]),A={class:"join-page__contnet"},G=e("div",{class:"join-page__title"},[e("h1",{class:"u-text-large"},[c("讓我們確認一下"),e("br"),c("我們有送達到您的地區。")]),e("p",{class:"text-color-primary max-w-[272px] mx-auto mt-6 text-left"},[c("目前，我們僅在台灣提供配送服務，"),e("br"),c("不包括外島地區和特定限定區域。")])],-1),K={__name:"JoinZipCodeContent",setup(s){return(n,r)=>(i(),u("div",A,[G,t(q)]))}},O={class:"join-page__section-specific"},Q={__name:"JoinZipCode",setup(s){return(n,r)=>(i(),u("section",O,[t(K)]))}};export{Q as default};