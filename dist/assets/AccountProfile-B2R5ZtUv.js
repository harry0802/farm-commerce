import{_ as h,o as i,c as $,f as s,t as A,x as f,F as H,g as Y,y as p,e as u,w as t,a as o,d as r,ac as Q,a4 as R,M as J,b6 as _e,b as w,W as q,X as me,b7 as pe,L as y,V as I,k as S,q as k,b8 as U,ab as le,J as N,b9 as ae,p as ee,K as V,v as G,N as ie,E as z,G as E,ba as fe,bb as be,bc as ve,n as he,bd as ye,be as ge,bf as xe,bg as $e,b0 as we,bh as Pe,bi as Ae,bj as Fe,b2 as Ce,a3 as re,a1 as Ie,$ as Se,a0 as Be,a2 as De,bk as ke,r as ce,ad as Ne,bl as de,ag as ne,a$ as Ve,aa as Le,bm as Te,aF as Ue,bn as je,bo as Ze}from"./index-BjxlNJz1.js";import{C as ze}from"./CostomTextArea-DA2g1YKu.js";import{_ as Ee}from"./Checkbox-CxFH-My2.js";import"./CheckIcon-B2MtXePc.js";const Me={class:"account-profile__card supplier__content col-span-12 md:col-span-6"},Oe={class:"u-text-small card__title mb-6"},He={__name:"AccountProfileCard",props:{title:String},setup(a){return(e,l)=>(i(),$("div",Me,[s("h2",Oe,A(a.title),1),f(e.$slots,"default",{},void 0,!0)]))}},B=h(He,[["__scopeId","data-v-a9278cf6"]]),Ye={},Je={class:"card__content flex flex-col justify-end col-span-full"};function Re(a,e){return i(),$("div",Je,[f(a.$slots,"card-item"),f(a.$slots,"card-Button")])}const D=h(Ye,[["render",Re]]),qe={class:"profile__items grid sm:grid-cols-3 gap-8"},Ge={class:"sm:text-lg"},We={class:"text-base indent-2 text-color-primary"},Ke={__name:"AccountProfileItems",props:["profileInfo"],setup(a){return(e,l)=>(i(),$("div",qe,[(i(!0),$(H,null,Y(a.profileInfo,(c,n)=>(i(),$("div",{class:"place-self-start",key:n},[s("h3",Ge,A(c.title),1),s("p",We,A(c.val),1)]))),128))]))}},te=h(Ke,[["__scopeId","data-v-4cf36344"]]),Xe={__name:"ProfilePersonalInfo",setup(a){const{store:e}=p("store");return(l,c)=>(i(),u(D,null,{"card-item":t(()=>[o(te,{"profile-info":r(e).personalInfo},null,8,["profile-info"])]),"card-Button":t(()=>[f(l.$slots,"customButton")]),_:3}))}},Qe={class:"card__action flex-col gap-y-3 sm:flex-row sm:justify-end mt-8 col-span-full"},et=["type"],tt={__name:"AccountProfileActionBtn",props:{modelValue:{},modelModifiers:{}},emits:["update:modelValue"],setup(a){const e=Q(a,"modelValue"),l=R(()=>e.value?"submit":"button"),c=R(()=>e.value?"儲存":"編輯"),n=R(()=>e.value?"line-md:circle-to-confirm-circle-transition":"pixelarticons:edit-box"),d=function(){e.value=!0},g=function(){e.value=!1};return(v,b)=>(i(),$("div",Qe,[J(s("button",{onClick:g,type:"button",class:"u-pirmary-button profil__cancel text-color-grey-dark sm:mr-8 text-sm"},[w(" 取消 "),o(r(q),{class:"ml-2",icon:"vaadin:cross-cutlery"})],512),[[_e,e.value]]),s("button",{onClick:d,class:"u-pirmary-button profil__edit text-color-primary-light",type:l.value},[w(A(c.value)+" ",1),o(r(q),{class:"ml-2 text-lg",icon:n.value},null,8,["icon"])],8,et)]))}},j=h(tt,[["__scopeId","data-v-43121198"]]),ot={class:"catd-fields"},st={__name:"AccountProfileFormCard",props:"onSubmit",setup(a){return(e,l)=>(i(),$("form",{onSubmit:l[0]||(l[0]=me((...c)=>e.onSubmit&&e.onSubmit(...c),["prevent"]))},[f(e.$slots,"form-tiitle",{},void 0,!0),s("div",ot,[f(e.$slots,"form-table",{},void 0,!0)]),f(e.$slots,"form-TableZipcode",{},void 0,!0),f(e.$slots,"form-Button",{},void 0,!0)],32))}},Z=h(st,[["__scopeId","data-v-76d72193"]]),rt={__name:"ProfilePersonalInfoForm",setup(a){const{updateAccount:e,store:l}=p("store"),c=p("closeForm"),n=p("toast"),{handleSubmit:d}=pe({user_FirstName:l.personalInfo.user_FirstName.val,user_LastName:l.personalInfo.user_LastName.val,user_phone:l.personalInfo.user_phone.val+""}),g=d(async v=>{try{if(l.compareObjects(l.personalInfo,v)){n.warning("您並沒有更改任何東西");return}const{user_FirstName:b,user_LastName:m,user_phone:x}=v;await Promise.all([e("clients",{user_FirstName:b,user_LastName:m},"user_id"),e("deliveryAddress",{user_phone:x},"clients_id")]).catch(_=>{throw _}),n.success("已成功更新")}catch(b){console.error(b.message),n.error("更新失敗")}finally{c()}});return(v,b)=>(i(),u(Z,{onSubmit:r(g)},{"form-table":t(()=>[o(r(y),{name:"user_FirstName"},{default:t(({componentField:m})=>[o(I,{componentField:m,userLabel:"姓",userDescription:"輸入要更改的姓氏"},null,8,["componentField"])]),_:1}),o(r(y),{name:"user_LastName"},{default:t(({componentField:m})=>[o(I,{userLabel:"名",componentField:m,userDescription:"輸入要更改的名子"},null,8,["componentField"])]),_:1}),o(r(y),{name:"user_phone"},{default:t(({componentField:m})=>[o(I,{userLabel:"電話",componentField:m,userDescription:"輸入要更改的電話號碼"},null,8,["componentField"])]),_:1}),f(v.$slots,"customButton",{},void 0,!0)]),_:3},8,["onSubmit"]))}},nt=h(rt,[["__scopeId","data-v-74885cb7"]]),lt={__name:"ProfileInfomation",setup(a){const e=S(!1);return k("closeForm",()=>e.value=!1),(c,n)=>(i(),u(B,{title:"個人資訊"},{default:t(()=>[(i(),u(U(e.value?nt:Xe),null,{customButton:t(()=>[o(j,{modelValue:e.value,"onUpdate:modelValue":n[0]||(n[0]=d=>e.value=d)},null,8,["modelValue"])]),_:1}))]),_:1}))}},at=h(lt,[["__scopeId","data-v-5476999e"]]),it={__name:"ProfileDeliveryAddress",setup(a){const{store:e}=p("store");return(l,c)=>(i(),u(D,null,{"card-item":t(()=>[o(te,{profileInfo:r(e).deliveryAddress},null,8,["profileInfo"])]),"card-Button":t(()=>[f(l.$slots,"customButton")]),_:3}))}},oe=a=>(z("data-v-26dcbf55"),a=a(),E(),a),ct=oe(()=>s("div",null,[s("p",{class:"pb-5"},[s("span",null," 注意："),w(" 此更改不適用於截止訂單。如果您需要更改已截止訂單的交貨地址，請與我們聯繫 ")])],-1)),dt=oe(()=>s("select",{class:"flex w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 py-4 px-3.5 h-auto transition-shadow duration-300","data-role":"county"},null,-1)),ut=oe(()=>s("select",{class:"flex w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 py-4 px-3.5 h-auto transition-shadow duration-300","data-role":"district"},null,-1)),_t={__name:"ProfileDeliveryAddressForm",setup(a){const e=S(),l=p("closeForm"),{updateAccount:c,store:n}=p("store"),d=p("toast"),{initializeZipcodeWithPage:g,handleSubmit:v,defineHandleFn:b}=le({user_Address:n.deliveryAddress.user_Address.val,user_AddressLine:n.deliveryAddress.user_AddressLine.val,user_City:n.deliveryAddress.user_City.val,user_State:n.deliveryAddress.user_State.val,user_ZipCode:`${n.deliveryAddress.user_ZipCode.val}`}),{handleChange:m}=N("user_City"),{handleChange:x}=N("user_State"),{value:_,handleChange:L}=N("user_ZipCode");b(m,x,L);const M=v(async C=>{try{if(n.compareObjects(n.deliveryAddress,C)){d.warning("您並沒有更改任何東西");return}const{user_Address:F,user_AddressLine:P,user_City:W,user_State:K,user_ZipCode:O}=C;await ae(+O).catch(T=>{throw T}),await c("deliveryAddress",{user_Address:F,user_AddressLine:P,user_City:W,user_State:K,user_ZipCode:O},"clients_id").catch(T=>{throw T}),d.success("已成功更新")}catch(F){console.error(F.message),d.error("更新失敗")}finally{l()}});return ee(()=>{g(e).set({county:n.deliveryAddress.user_City.val,district:n.deliveryAddress.user_State.val,zipcode:n.deliveryAddress.user_ZipCode.val})}),(C,F)=>(i(),u(Z,{onSubmit:r(M)},{"form-tiitle":t(()=>[ct]),"form-TableZipcode":t(()=>[s("div",{class:"grid w-full gap-y-6 gap-x-8 sm:grid-cols-2 twzipcode",ref_key:"zipcode",ref:e},[o(r(y),{name:"user_Address"},{default:t(({componentField:P})=>[o(I,{componentField:P,userLabel:"地址*",userDescription:"輸入要更改的內容"},null,8,["componentField"])]),_:1}),o(r(y),{name:"user_AddressLine"},{default:t(({componentField:P})=>[o(I,{componentField:P,userLabel:"樓號*",userDescription:"輸入要更改的內容"},null,8,["componentField"])]),_:1}),o(r(y),{name:"user_City"},{default:t(()=>[o(V,{userLabel:"縣市*",userDescription:"輸入要更改的內容"},{default:t(()=>[dt]),_:1})]),_:1}),o(r(y),{name:"user_State"},{default:t(()=>[o(V,{"user-label":"地區*","user-description":"輸入要更改的內容"},{default:t(()=>[ut]),_:1})]),_:1}),o(r(y),{name:"user_ZipCode"},{default:t(()=>[o(V,{"user-label":"郵遞區號*","user-description":"輸入要更改的內容"},{default:t(()=>[J(s("input",{"onUpdate:modelValue":F[0]||(F[0]=P=>G(_)?_.value=P:null),class:"flex w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 py-4 px-3.5 h-auto transition-shadow duration-300","data-role":"zipcode"},null,512),[[ie,r(_),void 0,{number:!0}]])]),_:1})]),_:1})],512)]),"form-Button":t(()=>[f(C.$slots,"customButton",{},void 0,!0)]),_:3},8,["onSubmit"]))}},mt=h(_t,[["__scopeId","data-v-26dcbf55"]]),pt={__name:"ProfileDeliveryAddress",setup(a){const e=S(!1);return k("closeForm",()=>e.value=!1),(c,n)=>(i(),u(B,{title:"收貨位址"},{default:t(()=>[(i(),u(U(e.value?mt:it),null,{customButton:t(()=>[o(j,{modelValue:e.value,"onUpdate:modelValue":n[0]||(n[0]=d=>e.value=d)},null,8,["modelValue"])]),_:1}))]),_:1}))}},ft=h(pt,[["__scopeId","data-v-560f31f8"]]),bt={__name:"ProfileDriverInstructionsContent",setup(a){const{store:e}=p(["store"]);return(l,c)=>(i(),u(D,null,{"card-item":t(()=>[s("div",null,[s("p",null,A(r(e).driverInstructions.suer_driverTips),1)])]),"card-Button":t(()=>[f(l.$slots,"customButton")]),_:3}))}},vt=a=>(z("data-v-0fe6ca5a"),a=a(),E(),a),ht=vt(()=>s("div",null,[s("p",{class:"pb-5"},[s("span",null," 注意："),w(" 此更改不適用於截止訂單。如果您需要更改已截止訂單的交貨地址，請與我們聯繫 ")])],-1)),yt={__name:"ProfileDriverInstructionsForm",setup(a){const{updateAccount:e,store:l}=p("store"),c=p("closeForm"),n=p("toast"),{handleSubmit:d}=fe({suer_driverTips:l.driverInstructions.suer_driverTips}),g=d(async v=>{try{if(l.compareObjects(l.driverInstructions,v)){n.warning("您並沒有更改任何東西");return}const{suer_driverTips:b}=v;await e("deliveryAddress",{suer_driverTips:b},"clients_id").catch(m=>{throw m}),n.success("已成功更新")}catch(b){console.error(b.message),n.error("更新失敗")}finally{c()}});return(v,b)=>(i(),u(Z,{onSubmit:r(g)},{"form-tiitle":t(()=>[ht]),"form-table":t(()=>[o(r(y),{name:"suer_driverTips"},{default:t(({componentField:m})=>[o(ze,{class:"col-span-2","user-label":"輸入給司機的提醒","user-description":"輸入要更改的內容",componentFields:m},null,8,["componentFields"])]),_:1})]),"form-Button":t(()=>[f(v.$slots,"customButton",{},void 0,!0)]),_:3},8,["onSubmit"]))}},gt=h(yt,[["__scopeId","data-v-0fe6ca5a"]]),xt={__name:"ProfileDriverInstructions",setup(a){const e=S(!1);return k("closeForm",()=>e.value=!1),(c,n)=>(i(),u(B,{title:"配送提醒"},{default:t(()=>[(i(),u(U(e.value?gt:bt),null,{customButton:t(()=>[o(j,{modelValue:e.value,"onUpdate:modelValue":n[0]||(n[0]=d=>e.value=d)},null,8,["modelValue"])]),_:1}))]),_:1}))}},$t=h(xt,[["__scopeId","data-v-fd35b27e"]]),wt=s("div",{class:"flex flex-col justify-end col-span-full gap-y-6"},[s("p",null,"帳戶上沒有禮金"),s("p",{class:"u-text-large text-color-primary-light"},"$0")],-1),Pt={__name:"ProfileCreditContent",setup(a){return(e,l)=>(i(),u(D,null,{"card-item":t(()=>[wt]),_:1}))}},At={__name:"ProfileCredit",setup(a){return(e,l)=>(i(),u(B,{title:"禮金"},{default:t(()=>[o(Pt)]),_:1}))}},Ft=h(At,[["__scopeId","data-v-d90ee414"]]),Ct=s("div",{class:"flex flex-col justify-end col-span-full gap-y-6 text-color-primary-light text-lg"},[s("p",null,"前往常見問題 "),s("p",null,"聯繫我們")],-1),It={__name:"ProfileNeedHelpContent",setup(a){return(e,l)=>(i(),u(D,null,{"card-item":t(()=>[Ct]),"card-Button":t(()=>[f(e.$slots,"customButton")]),_:3}))}},St={__name:"ProfileNeedHelp",setup(a){return(e,l)=>(i(),u(B,{title:"需要幫助？"},{default:t(()=>[o(It)]),_:1}))}},Bt=h(St,[["__scopeId","data-v-2b0859dc"]]),X={__name:"ProfileNotificationsDialog",props:{controlDialog:{},controlDialogModifiers:{}},emits:["update:controlDialog"],setup(a){const e=Q(a,"controlDialog");return(l,c)=>(i(),u(r($e),{open:e.value,"onUpdate:open":c[0]||(c[0]=n=>e.value=n)},{default:t(()=>[o(r(be),{"as-child":""},{default:t(()=>[s("button",null,[f(l.$slots,"buttonName")])]),_:3}),o(r(ve),{class:he(["sm:max-w-[425px]","sm:rounded-3xl -translate-y-full"])},{default:t(()=>[o(r(ye),null,{default:t(()=>[o(r(ge),{class:"text-2xl text-color-primary"},{default:t(()=>[f(l.$slots,"dialogTitle")]),_:3})]),_:3}),o(r(xe),null,{default:t(()=>[f(l.$slots,"textArea")]),_:3}),f(l.$slots,"formArea",{closeDialog:e.value})]),_:3})]),_:3},8,["open"]))}},Dt={class:"mb-4"},kt=s("div",{class:"flex justify-end mt-4"},[s("button",{type:"submit",class:"u-pirmary-button profil__edit"}," 儲存 ")],-1),Nt={__name:"ProfileNotificationsCheckBox",props:{controlDialog:{},controlDialogModifiers:{}},emits:["update:controlDialog"],setup(a){const{updateAccount:e,store:l}=p("store"),c=p("toast"),n=Q(a,"controlDialog"),d=[{id:"EmailNewsletters",label:"電子報訂閱"},{id:"SalesAndPromotions",label:"特價優惠消息"},{id:"Events",label:"活動資訊"},{id:"New Products",label:"新產品通知"},{id:"OnlyVegan-friendly",label:"僅寄送素食相關的郵件"}],g=we(Pe({items:Ae(Fe())})),{handleSubmit:v}=Ce({validationSchema:g,initialValues:{items:l.notifications}}),b=v(async m=>{try{const x={notifications:m.items},_=await e("clients",x,"user_id");if(!_[0])throw new Error("更新資料失敗，請嘗試從新登錄");_&&c.success("更新成功")}catch(x){c.error("更新失敗"),console.error(`💣 HANDLE UPDATE: ${x.message}`)}finally{n.value=!1}});return(m,x)=>(i(),$("form",{onSubmit:x[0]||(x[0]=(..._)=>r(b)&&r(b)(..._))},[o(r(y),{name:"items"},{default:t(()=>[o(r(re),null,{default:t(()=>[s("div",Dt,[o(r(Ie),{class:"text-color-primary text-base"},{default:t(()=>[w(" 電子報訂閱 ")]),_:1})]),(i(),$(H,null,Y(d,_=>o(r(y),{key:_.id,type:"checkbox",value:_.id,"unchecked-value":!1,name:"items"},{default:t(({value:L,handleChange:M})=>[o(r(re),{class:"flex flex-row items-start space-x-3 space-y-0"},{default:t(()=>[o(r(Se),null,{default:t(()=>[o(r(Ee),{class:"data-[state=checked]:bg-color-primary",checked:L.includes(_.id),"onUpdate:checked":M},null,8,["checked","onUpdate:checked"])]),_:2},1024),o(r(Be),{class:"font-normal"},{default:t(()=>[w(A(_.label),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["value"])),64)),o(r(De))]),_:1})]),_:1}),kt],32))}},Vt={class:"notifications-content flex flex-col justify-end col-span-full gap-y-6 items-start text-color-primary-light text-lg"},Lt=s("p",{class:"text-color-primary text-base"},"發送 STOP 到 (886) 123-3210 以取消提醒。",-1),Tt=s("p",{class:"text-color-primary mt-6 text-base"},"如果您先前選擇退出，並希望恢復交付追踪通知，請聯繫我們尋求協助。",-1),Ut=s("p",{class:"text-color-primary text-base"},[w(" 我們在這裡為您服務。"),s("br"),w("請透過 (886) 123-3210 向我們發送簡訊"),s("br"),w("使用以下任何關鍵字： ")],-1),jt={__name:"ProfileNotificationsContent",setup(a){const e=S(!1),l=[{keyword:"REMIND",description:"以接收訂單提醒"},{keyword:"STOP",description:"取消訂單提醒"},{keyword:"STOP",description:"取消訂單提醒"},{keyword:"UNSTOP",description:"恢復訂單提醒"},{keyword:"CHANGE",description:"更改您收到訂單提醒的日期"}];return(c,n)=>(i(),u(D,null,{"card-item":t(()=>[s("div",Vt,[s("div",null,[o(X,{controlDialog:e.value,"onUpdate:controlDialog":n[1]||(n[1]=d=>e.value=d)},{buttonName:t(()=>[w("更新電子郵件通知設置")]),dialogTitle:t(()=>[w("更新你的電子郵件通知設置")]),formArea:t(()=>[o(Nt,{controlDialog:e.value,"onUpdate:controlDialog":n[0]||(n[0]=d=>e.value=d)},null,8,["controlDialog"])]),_:1},8,["controlDialog"])]),s("div",null,[o(X,null,{buttonName:t(()=>[w("更新訂單追蹤通知（簡訊）")]),dialogTitle:t(()=>[w("以下是你的運送追踪簡訊通知更新：")]),textArea:t(()=>[Lt,Tt]),_:1})]),s("div",null,[o(X,null,{buttonName:t(()=>[w("更新提醒通知（簡訊）")]),dialogTitle:t(()=>[w("更新你的訂單簡訊提醒。")]),textArea:t(()=>[Ut,(i(),$(H,null,Y(l,(d,g)=>s("p",{class:"text-color-primary mt-6 text-base",key:g}," 發送 "+A(d.keyword)+" "+A(d.description)+"。 ",1)),64))]),_:1})])])]),_:1}))}},Zt={__name:"ProfileNotifications",setup(a){return(e,l)=>(i(),u(B,{title:"通知"},{default:t(()=>[o(jt)]),_:1}))}},zt=h(Zt,[["__scopeId","data-v-020fac2a"]]),Et={class:"text-lg mb-2"},Mt={class:""},Ot={__name:"ProfileChangeEmailContent",setup(a){const{store:e}=p("store");return(l,c)=>(i(),u(D,null,{"card-item":t(()=>[s("div",null,[s("div",Et,A(r(e).email.title),1),s("div",Mt,A(r(e).email.val),1)])]),"card-Button":t(()=>[f(l.$slots,"customButton")]),_:3}))}},Ht=a=>(z("data-v-d92f90ec"),a=a(),E(),a),Yt=Ht(()=>s("div",null,[s("p",{class:"pb-5"},[w(" 新的電子郵件位址。"),s("br"),s("span",null,"僅更換接收推送信箱")])],-1)),Jt={__name:"ProfileChangeEmailForm",setup(a){const{updateAccount:e,store:l}=p("store"),c=p("closeForm"),n=p("toast"),{handleSubmit:d}=ke({user_Email:l.email.val}),g=d(async({user_Email:v})=>{try{if(l.email.val===v){n.warning("您並沒有更改任何東西");return}await e("clients",{user_Email:v},"user_id").catch(b=>{throw b}),n.success("已成功更新")}catch(b){console.error(b.message),n.error("更新失敗")}finally{c()}});return(v,b)=>(i(),u(Z,{onSubmit:r(g)},{"form-tiitle":t(()=>[Yt]),"form-table":t(()=>[o(r(y),{name:"user_Email"},{default:t(({componentField:m})=>[o(I,{class:"col-span-2","component-field":m,"user-label":"電子郵件*","user-description":"輸入要更改的內容"},null,8,["component-field"])]),_:1})]),"form-Button":t(()=>[f(v.$slots,"customButton",{},void 0,!0)]),_:3},8,["onSubmit"]))}},Rt=h(Jt,[["__scopeId","data-v-d92f90ec"]]),qt={__name:"ProfileChangeEmail",setup(a){const e=S(!1);return k("closeForm",()=>e.value=!1),(c,n)=>(i(),u(B,{title:"更改電子郵件"},{default:t(()=>[(i(),u(U(e.value?Rt:Ot),null,{customButton:t(()=>[o(j,{modelValue:e.value,"onUpdate:modelValue":n[0]||(n[0]=d=>e.value=d)},null,8,["modelValue"])]),_:1}))]),_:1}))}},Gt=h(qt,[["__scopeId","data-v-597c56df"]]),Wt={key:0,class:"gap-3 justify-between place-items-center"},Kt={class:"text-lg"},Xt={key:1},Qt=s("p",{class:"text-lg"}," 尚未綁定信用卡 ",-1),eo=[Qt],to={key:1,class:"card__action mt-8 col-span-full place-self-end"},oo={__name:"ProfilePaymentInfoContent",setup(a){const{store:e}=p("store"),l=p("account"),c=R(()=>(e.paymentInfo.card_cardNumber+"").slice(-4));return(n,d)=>{const g=ce("RouterLink");return i(),u(D,null,{"card-item":t(()=>[r(l).regPaymentinfo?(i(),$("div",Wt,[s("div",null,[s("p",Kt,"信用卡號: "+A(`xxxx-${c.value}`),1)]),s("div",null,[s("p",null,"到期日： "+A(r(e).paymentInfo.card_date),1)])])):(i(),$("div",Xt,eo))]),"card-Button":t(()=>[r(l).regPaymentinfo?f(n.$slots,"customButton",{key:0}):(i(),$("div",to,[o(g,{onClick:r(l).checkAllow,to:{name:"payment-info"},class:"text-lg text-color-primary-light flex items-center"},{default:t(()=>[o(r(q),{class:"mr-1 text-xl",icon:"majesticons:creditcard-plus-line"}),w(" 綁定信用卡 ")]),_:1},8,["onClick"])]))]),_:3})}}},so=a=>(z("data-v-7753dcb0"),a=a(),E(),a),ro=so(()=>s("div",null,[s("p",{class:"pb-5"}," 輸入新的電子郵件位址。 ")],-1)),no={class:"grid col-span-2"},lo={class:"text-left"},ao={class:"grid grid-cols-3 gap-4"},io=["value"],co={__name:"ProfilePaymentInfoForm",setup(a){const{handleSubmit:e,loading:l}=Ne({creditMoon:"January",creditYear:"2025",sameAddress:!0}),c=p("toast"),n=p("closeForm"),{value:d}=N("creditMoon"),{value:g}=N("creditYear"),v=["January","February","March","April","May","June","July","August","September","October","November","December"],b=e(async m=>{try{l.value=!0;const x={card_name:m.userName,card_cardNumber:m.creditNumber,card_date:`${m.creditYear}/${m.creditMoon}`,card_password:m.creditLastNb};await de("PaymentInfo",x,"client_id"),c.success("已成功更新")}finally{n()}});return(m,x)=>(i(),u(Z,{onsubmit:r(b)},{"form-tiitle":t(()=>[ro]),"form-table":t(()=>[s("div",no,[s("div",lo,[o(r(y),{name:"userName"},{default:t(({componentField:_})=>[o(I,{"user-label":"持有人姓名","component-field":_,"user-description":"以卡片上的名稱為主"},null,8,["component-field"])]),_:1}),o(r(y),{name:"creditNumber"},{default:t(({componentField:_})=>[o(I,{"user-label":"卡片號碼","component-field":_,"user-placeholder":"0000 0000 0000 0000 ","user-description":"限定數字號碼"},null,8,["component-field"])]),_:1})]),s("div",ao,[o(r(y),{name:"creditMoon"},{default:t(()=>[o(V,{"user-label":"moon"},{default:t(()=>[J(s("select",{"onUpdate:modelValue":x[0]||(x[0]=_=>G(d)?d.value=_:null),class:"flex w-full rounded-md border border-input bg-transparent text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 py-4 px-3.5 h-auto duration-300"},[(i(),$(H,null,Y(v,(_,L)=>s("option",{key:L},A(_),1)),64))],512),[[ne,r(d)]])]),_:1})]),_:1}),o(r(y),{name:"creditYear"},{default:t(()=>[o(V,{"user-label":"Year"},{default:t(()=>[J(s("select",{"onUpdate:modelValue":x[1]||(x[1]=_=>G(g)?g.value=_:null),class:"flex w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 py-4 px-3.5 h-auto transition-shadow duration-300"},[(i(),$(H,null,Y(10,_=>s("option",{key:_,value:`${new Date().getFullYear()+_}`},A(new Date().getFullYear()+_),9,io)),64))],512),[[ne,r(g)]])]),_:1})]),_:1}),o(r(y),{name:"creditLastNb"},{default:t(({componentField:_})=>[o(I,{"component-field":_,"user-label":"末三碼"},null,8,["component-field"])]),_:1})])])]),"form-Button":t(()=>[f(m.$slots,"customButton",{},void 0,!0)]),_:3},8,["onsubmit"]))}},uo=h(co,[["__scopeId","data-v-7753dcb0"]]),_o={__name:"ProfilePaymentInfo",setup(a){const e=S(!1);return k("closeForm",()=>e.value=!1),(c,n)=>(i(),u(B,{title:"信用卡"},{default:t(()=>[(i(),u(U(e.value?uo:oo),null,{customButton:t(()=>[o(j,{modelValue:e.value,"onUpdate:modelValue":n[0]||(n[0]=d=>e.value=d)},null,8,["modelValue"])]),_:1}))]),_:1}))}},mo=h(_o,[["__scopeId","data-v-53d59dde"]]),po={key:1},fo=s("p",{class:"text-lg"},"尚未綁定帳單地址",-1),bo=[fo],vo={key:1,class:"card__action mt-8 col-span-full place-self-end"},ho={__name:"ProfileBillingAddressContent",setup(a){const{store:e}=p("store"),l=p("account");return(c,n)=>{const d=ce("RouterLink");return i(),u(D,null,{"card-item":t(()=>[r(l).regPaymentinfo?(i(),u(te,{key:0,profileInfo:r(e).billingAddress},null,8,["profileInfo"])):(i(),$("div",po,bo))]),"card-Button":t(()=>[r(l).regPaymentinfo?f(c.$slots,"customButton",{key:0}):(i(),$("div",vo,[o(d,{onClick:r(l).checkAllow,to:{name:"payment-info"},class:"text-lg text-color-primary-light flex items-center"},{default:t(()=>[o(r(q),{class:"mr-1 text-xl",icon:"material-symbols-light:add-notes-outline"}),w(" 添加帳單地址 ")]),_:1},8,["onClick"])]))]),_:3})}}},ue=a=>(z("data-v-cceafff2"),a=a(),E(),a),yo=ue(()=>s("select",{class:"flex w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 py-4 px-3.5 h-auto transition-shadow duration-300","data-role":"county"},null,-1)),go=ue(()=>s("select",{class:"flex w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 py-4 px-3.5 h-auto transition-shadow duration-300","data-role":"district"},null,-1)),xo={__name:"ProfileBillingAddressForm",setup(a){const e=S(),l=p("closeForm"),{updateAccount:c,store:n}=p("store"),d=p("toast"),{initializeZipcodeWithPage:g,handleSubmit:v,defineHandleFn:b}=le({user_Address:n.billingAddress.user_Address.val,user_AddressLine:n.billingAddress.user_AddressLine.val,user_City:n.billingAddress.user_City.val,user_State:n.billingAddress.user_State.val,user_ZipCode:`${n.billingAddress.user_ZipCode.val}`}),{handleChange:m}=N("user_City"),{handleChange:x}=N("user_State"),{value:_,handleChange:L}=N("user_ZipCode");b(m,x,L);const M=v(async C=>{try{if(n.compareObjects(n.billingAddress,C)){d.warning("您並沒有更改任何東西");return}const{user_Address:F,user_AddressLine:P,user_City:W,user_State:K,user_ZipCode:O}=C;await ae(+O).catch(T=>{throw T}),await c("BillingAddress",{user_Address:F,user_AddressLine:P,user_City:W,user_State:K,user_ZipCode:O},"clients_id").catch(T=>{throw T}),d.success("已成功更新")}catch(F){console.error(F.message),d.error("更新失敗")}finally{l()}});return ee(()=>{g(e).set({county:n.billingAddress.user_City.val,district:n.billingAddress.user_State.val,zipcode:n.billingAddress.user_ZipCode.val})}),(C,F)=>(i(),u(Z,{onSubmit:r(M)},{"form-table":t(()=>[s("div",{class:"col-span-full grid w-full gap-y-6 gap-x-8 sm:grid-cols-2 twzipcode",ref_key:"zipcode",ref:e},[o(r(y),{name:"user_Address"},{default:t(({componentField:P})=>[o(I,{componentField:P,userLabel:"地址*",userDescription:"輸入要更改的內容"},null,8,["componentField"])]),_:1}),o(r(y),{name:"user_AddressLine"},{default:t(({componentField:P})=>[o(I,{componentField:P,userLabel:"樓號*",userDescription:"輸入要更改的內容"},null,8,["componentField"])]),_:1}),o(r(y),{name:"user_City"},{default:t(()=>[o(V,{userLabel:"縣市*",userDescription:"輸入要更改的內容"},{default:t(()=>[yo]),_:1})]),_:1}),o(r(y),{name:"user_State"},{default:t(()=>[o(V,{"user-label":"地區*","user-description":"輸入要更改的內容"},{default:t(()=>[go]),_:1})]),_:1}),o(r(y),{name:"user_ZipCode"},{default:t(()=>[o(V,{"user-label":"郵遞區號*","user-description":"輸入要更改的內容"},{default:t(()=>[J(s("input",{"onUpdate:modelValue":F[0]||(F[0]=P=>G(_)?_.value=P:null),class:"flex w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 py-4 px-3.5 h-auto transition-shadow duration-300","data-role":"zipcode"},null,512),[[ie,r(_),void 0,{number:!0}]])]),_:1})]),_:1})],512)]),"form-Button":t(()=>[f(C.$slots,"customButton",{},void 0,!0)]),_:3},8,["onSubmit"]))}},$o=h(xo,[["__scopeId","data-v-cceafff2"]]),wo={__name:"ProfileBillingAddress",setup(a){const e=S(!1);return k("closeForm",()=>e.value=!1),(c,n)=>(i(),u(B,{title:"帳單地址"},{default:t(()=>[(i(),u(U(e.value?$o:ho),null,{customButton:t(()=>[o(j,{modelValue:e.value,"onUpdate:modelValue":n[0]||(n[0]=d=>e.value=d)},null,8,["modelValue"])]),_:1}))]),_:1}))}},Po=h(wo,[["__scopeId","data-v-75559f50"]]),Ao=s("div",null,null,-1),Fo={__name:"ProfileChangePasswordContent",setup(a){return(e,l)=>(i(),u(D,null,{"card-item":t(()=>[Ao]),"card-Button":t(()=>[f(e.$slots,"customButton")]),_:3}))}},se=a=>(z("data-v-d875b12e"),a=a(),E(),a),Co=se(()=>s("div",{class:"join-input__control"},[s("label",{for:"oldPassword"},"當前的密碼"),s("input",{id:"oldPassword",type:"text"}),s("div",{class:"user-hlper"},"*不可空白")],-1)),Io=se(()=>s("div",{class:"join-input__control"},[s("label",{for:"Password"},"新密碼"),s("input",{id:"Password",type:"text"}),s("div",{class:"user-hlper"},"*不可空白")],-1)),So=se(()=>s("div",{class:"join-input__control"},[s("label",{for:"passwordDup"},"確認新密碼"),s("input",{id:"passwordDup",type:"text"}),s("div",{class:"user-hlper"},"*不可空白")],-1)),Bo={__name:"ProfileChangePasswordForm",setup(a){return(e,l)=>(i(),u(Z,null,{"form-table":t(()=>[Co,Io,So]),"form-Button":t(()=>[f(e.$slots,"customButton",{},void 0,!0)]),_:3}))}},Do=h(Bo,[["__scopeId","data-v-d875b12e"]]),ko={__name:"ProfileChangePassword",setup(a){const e=S(!1);return(l,c)=>(i(),u(B,{title:"更改密碼"},{default:t(()=>[(i(),u(U(e.value?Do:Fo),null,{customButton:t(()=>[o(j,{modelValue:e.value,"onUpdate:modelValue":c[0]||(c[0]=n=>e.value=n)},null,8,["modelValue"])]),_:1}))]),_:1}))}},No=h(ko,[["__scopeId","data-v-92d13daf"]]),Vo={class:"section-container grid-line items-start"},Lo=Ve({__name:"AccountProfileContent",setup(a){const e=Le(),l=Te();return k("store",{updateAccount:de,store:e}),k("account",l),k("toast",Ue),ee(()=>{je(),Ze()}),(c,n)=>(i(),$("div",Vo,[o(r(at)),o(r(ft)),o(r($t),{class:"card-computer"}),o(r(Ft),{class:"card-computer"}),o(r(Bt),{class:"card-computer"}),o(r(zt),{class:"card-computer"}),o(r(Gt),{class:"card-computer"}),o(r(mo),{class:"card-computer"}),o(r(Po)),o(r(No))]))}}),To=h(Lo,[["__scopeId","data-v-24eac689"]]),Uo={class:"section-container"},Mo={__name:"AccountProfile",setup(a){return(e,l)=>(i(),$("div",Uo,[o(To)]))}};export{Mo as default};
