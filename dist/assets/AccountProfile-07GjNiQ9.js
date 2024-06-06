import{_ as y,o as i,c as $,f as o,t as F,x as f,F as H,g as Y,y as p,e as u,w as t,a as s,d as r,ac as Q,a4 as R,M as J,b6 as _e,b as w,W as q,X as me,b7 as pe,L as h,V as I,k as S,q as k,b8 as U,ab as le,J as N,b9 as ae,p as ee,K as V,v as G,N as ie,E as z,G as E,ba as fe,bb as be,bc as ve,n as he,bd as ye,be as ge,bf as xe,bg as $e,b0 as we,bh as Pe,bi as Fe,bj as Ae,b2 as Ce,a3 as re,a1 as Ie,$ as Se,a0 as Be,a2 as De,bk as ke,r as ce,ad as Ne,bl as de,ag as ne,a$ as Ve,aa as Le,bm as Te,aF as Ue,bn as je,bo as Ze}from"./index-pY99OeRe.js";import{C as ze}from"./CostomTextArea-hz_5MSZV.js";import{_ as Ee}from"./Checkbox-f5cnVR2u.js";import"./CheckIcon-TmRL9KBA.js";const Me={class:"account-profile__card supplier__content col-span-12 md:col-span-6"},Oe={class:"u-text-small card__title mb-6"},He={__name:"AccountProfileCard",props:{title:String},setup(a){return(e,l)=>(i(),$("div",Me,[o("h2",Oe,F(a.title),1),f(e.$slots,"default",{},void 0,!0)]))}},B=y(He,[["__scopeId","data-v-a9278cf6"]]),Ye={},Je={class:"card__content flex flex-col justify-end col-span-full"};function Re(a,e){return i(),$("div",Je,[f(a.$slots,"card-item"),f(a.$slots,"card-Button")])}const D=y(Ye,[["render",Re]]),qe={class:"profile__items grid grid-cols-3 gap-8"},Ge={class:"sm:text-lg"},We={class:"text-base indent-2 text-color-primary"},Ke={__name:"AccountProfileItems",props:["profileInfo"],setup(a){return(e,l)=>(i(),$("div",qe,[(i(!0),$(H,null,Y(a.profileInfo,(c,n)=>(i(),$("div",{class:"place-self-start",key:n},[o("h3",Ge,F(c.title),1),o("p",We,F(c.val),1)]))),128))]))}},te=y(Ke,[["__scopeId","data-v-156fcc56"]]),Xe={__name:"ProfilePersonalInfo",setup(a){const{store:e}=p("store");return(l,c)=>(i(),u(D,null,{"card-item":t(()=>[s(te,{"profile-info":r(e).personalInfo},null,8,["profile-info"])]),"card-Button":t(()=>[f(l.$slots,"customButton")]),_:3}))}},Qe={class:"card__action justify-end mt-8 col-span-full"},et=["type"],j={__name:"AccountProfileActionBtn",props:{modelValue:{},modelModifiers:{}},emits:["update:modelValue"],setup(a){const e=Q(a,"modelValue"),l=R(()=>e.value?"submit":"button"),c=R(()=>e.value?"儲存":"編輯"),n=R(()=>e.value?"line-md:circle-to-confirm-circle-transition":"pixelarticons:edit-box"),d=function(){e.value=!0},g=function(){e.value=!1};return(v,b)=>(i(),$("div",Qe,[J(o("button",{onClick:g,type:"button",class:"u-pirmary-button profil__cancel text-color-grey-dark mr-8 text-sm textc"},[w(" 取消 "),s(r(q),{class:"ml-2",icon:"vaadin:cross-cutlery"})],512),[[_e,e.value]]),o("button",{onClick:d,class:"u-pirmary-button profil__edit text-color-primary-light",type:l.value},[w(F(c.value)+" ",1),s(r(q),{class:"ml-2 text-lg",icon:n.value},null,8,["icon"])],8,et)]))}},tt={class:"catd-fields"},st={__name:"AccountProfileFormCard",props:"onSubmit",setup(a){return(e,l)=>(i(),$("form",{onSubmit:l[0]||(l[0]=me((...c)=>e.onSubmit&&e.onSubmit(...c),["prevent"]))},[f(e.$slots,"form-tiitle",{},void 0,!0),o("div",tt,[f(e.$slots,"form-table",{},void 0,!0)]),f(e.$slots,"form-TableZipcode",{},void 0,!0),f(e.$slots,"form-Button",{},void 0,!0)],32))}},Z=y(st,[["__scopeId","data-v-76d72193"]]),ot={__name:"ProfilePersonalInfoForm",setup(a){const{updateAccount:e,store:l}=p("store"),c=p("closeForm"),n=p("toast"),{handleSubmit:d}=pe({user_FirstName:l.personalInfo.user_FirstName.val,user_LastName:l.personalInfo.user_LastName.val,user_phone:l.personalInfo.user_phone.val+""}),g=d(async v=>{try{if(l.compareObjects(l.personalInfo,v)){n.warning("您並沒有更改任何東西");return}const{user_FirstName:b,user_LastName:m,user_phone:x}=v;await Promise.all([e("clients",{user_FirstName:b,user_LastName:m},"user_id"),e("deliveryAddress",{user_phone:x},"clients_id")]).catch(_=>{throw _}),n.success("已成功更新")}catch(b){console.error(b.message),n.error("更新失敗")}finally{c()}});return(v,b)=>(i(),u(Z,{onSubmit:r(g)},{"form-table":t(()=>[s(r(h),{name:"user_FirstName"},{default:t(({componentField:m})=>[s(I,{componentField:m,userLabel:"姓",userDescription:"輸入要更改的姓氏"},null,8,["componentField"])]),_:1}),s(r(h),{name:"user_LastName"},{default:t(({componentField:m})=>[s(I,{userLabel:"名",componentField:m,userDescription:"輸入要更改的名子"},null,8,["componentField"])]),_:1}),s(r(h),{name:"user_phone"},{default:t(({componentField:m})=>[s(I,{userLabel:"電話",componentField:m,userDescription:"輸入要更改的電話號碼"},null,8,["componentField"])]),_:1}),f(v.$slots,"customButton",{},void 0,!0)]),_:3},8,["onSubmit"]))}},rt=y(ot,[["__scopeId","data-v-74885cb7"]]),nt={__name:"ProfileInfomation",setup(a){const e=S(!1);return k("closeForm",()=>e.value=!1),(c,n)=>(i(),u(B,{title:"個人資訊"},{default:t(()=>[(i(),u(U(e.value?rt:Xe),null,{customButton:t(()=>[s(j,{modelValue:e.value,"onUpdate:modelValue":n[0]||(n[0]=d=>e.value=d)},null,8,["modelValue"])]),_:1}))]),_:1}))}},lt=y(nt,[["__scopeId","data-v-5476999e"]]),at={__name:"ProfileDeliveryAddress",setup(a){const{store:e}=p("store");return(l,c)=>(i(),u(D,null,{"card-item":t(()=>[s(te,{profileInfo:r(e).deliveryAddress},null,8,["profileInfo"])]),"card-Button":t(()=>[f(l.$slots,"customButton")]),_:3}))}},se=a=>(z("data-v-26dcbf55"),a=a(),E(),a),it=se(()=>o("div",null,[o("p",{class:"pb-5"},[o("span",null," 注意："),w(" 此更改不適用於截止訂單。如果您需要更改已截止訂單的交貨地址，請與我們聯繫 ")])],-1)),ct=se(()=>o("select",{class:"flex w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 py-4 px-3.5 h-auto transition-shadow duration-300","data-role":"county"},null,-1)),dt=se(()=>o("select",{class:"flex w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 py-4 px-3.5 h-auto transition-shadow duration-300","data-role":"district"},null,-1)),ut={__name:"ProfileDeliveryAddressForm",setup(a){const e=S(),l=p("closeForm"),{updateAccount:c,store:n}=p("store"),d=p("toast"),{initializeZipcodeWithPage:g,handleSubmit:v,defineHandleFn:b}=le({user_Address:n.deliveryAddress.user_Address.val,user_AddressLine:n.deliveryAddress.user_AddressLine.val,user_City:n.deliveryAddress.user_City.val,user_State:n.deliveryAddress.user_State.val,user_ZipCode:`${n.deliveryAddress.user_ZipCode.val}`}),{handleChange:m}=N("user_City"),{handleChange:x}=N("user_State"),{value:_,handleChange:L}=N("user_ZipCode");b(m,x,L);const M=v(async C=>{try{if(n.compareObjects(n.deliveryAddress,C)){d.warning("您並沒有更改任何東西");return}const{user_Address:A,user_AddressLine:P,user_City:W,user_State:K,user_ZipCode:O}=C;await ae(+O).catch(T=>{throw T}),await c("deliveryAddress",{user_Address:A,user_AddressLine:P,user_City:W,user_State:K,user_ZipCode:O},"clients_id").catch(T=>{throw T}),d.success("已成功更新")}catch(A){console.error(A.message),d.error("更新失敗")}finally{l()}});return ee(()=>{g(e).set({county:n.deliveryAddress.user_City.val,district:n.deliveryAddress.user_State.val,zipcode:n.deliveryAddress.user_ZipCode.val})}),(C,A)=>(i(),u(Z,{onSubmit:r(M)},{"form-tiitle":t(()=>[it]),"form-TableZipcode":t(()=>[o("div",{class:"grid w-full gap-y-6 gap-x-8 sm:grid-cols-2 twzipcode",ref_key:"zipcode",ref:e},[s(r(h),{name:"user_Address"},{default:t(({componentField:P})=>[s(I,{componentField:P,userLabel:"地址*",userDescription:"輸入要更改的內容"},null,8,["componentField"])]),_:1}),s(r(h),{name:"user_AddressLine"},{default:t(({componentField:P})=>[s(I,{componentField:P,userLabel:"樓號*",userDescription:"輸入要更改的內容"},null,8,["componentField"])]),_:1}),s(r(h),{name:"user_City"},{default:t(()=>[s(V,{userLabel:"縣市*",userDescription:"輸入要更改的內容"},{default:t(()=>[ct]),_:1})]),_:1}),s(r(h),{name:"user_State"},{default:t(()=>[s(V,{"user-label":"地區*","user-description":"輸入要更改的內容"},{default:t(()=>[dt]),_:1})]),_:1}),s(r(h),{name:"user_ZipCode"},{default:t(()=>[s(V,{"user-label":"郵遞區號*","user-description":"輸入要更改的內容"},{default:t(()=>[J(o("input",{"onUpdate:modelValue":A[0]||(A[0]=P=>G(_)?_.value=P:null),class:"flex w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 py-4 px-3.5 h-auto transition-shadow duration-300","data-role":"zipcode"},null,512),[[ie,r(_),void 0,{number:!0}]])]),_:1})]),_:1})],512)]),"form-Button":t(()=>[f(C.$slots,"customButton",{},void 0,!0)]),_:3},8,["onSubmit"]))}},_t=y(ut,[["__scopeId","data-v-26dcbf55"]]),mt={__name:"ProfileDeliveryAddress",setup(a){const e=S(!1);return k("closeForm",()=>e.value=!1),(c,n)=>(i(),u(B,{title:"收貨位址"},{default:t(()=>[(i(),u(U(e.value?_t:at),null,{customButton:t(()=>[s(j,{modelValue:e.value,"onUpdate:modelValue":n[0]||(n[0]=d=>e.value=d)},null,8,["modelValue"])]),_:1}))]),_:1}))}},pt=y(mt,[["__scopeId","data-v-560f31f8"]]),ft={__name:"ProfileDriverInstructionsContent",setup(a){const{store:e}=p(["store"]);return(l,c)=>(i(),u(D,null,{"card-item":t(()=>[o("div",null,[o("p",null,F(r(e).driverInstructions.suer_driverTips),1)])]),"card-Button":t(()=>[f(l.$slots,"customButton")]),_:3}))}},bt=a=>(z("data-v-0fe6ca5a"),a=a(),E(),a),vt=bt(()=>o("div",null,[o("p",{class:"pb-5"},[o("span",null," 注意："),w(" 此更改不適用於截止訂單。如果您需要更改已截止訂單的交貨地址，請與我們聯繫 ")])],-1)),ht={__name:"ProfileDriverInstructionsForm",setup(a){const{updateAccount:e,store:l}=p("store"),c=p("closeForm"),n=p("toast"),{handleSubmit:d}=fe({suer_driverTips:l.driverInstructions.suer_driverTips}),g=d(async v=>{try{if(l.compareObjects(l.driverInstructions,v)){n.warning("您並沒有更改任何東西");return}const{suer_driverTips:b}=v;await e("deliveryAddress",{suer_driverTips:b},"clients_id").catch(m=>{throw m}),n.success("已成功更新")}catch(b){console.error(b.message),n.error("更新失敗")}finally{c()}});return(v,b)=>(i(),u(Z,{onSubmit:r(g)},{"form-tiitle":t(()=>[vt]),"form-table":t(()=>[s(r(h),{name:"suer_driverTips"},{default:t(({componentField:m})=>[s(ze,{class:"col-span-2","user-label":"輸入給司機的提醒","user-description":"輸入要更改的內容",componentFields:m},null,8,["componentFields"])]),_:1})]),"form-Button":t(()=>[f(v.$slots,"customButton",{},void 0,!0)]),_:3},8,["onSubmit"]))}},yt=y(ht,[["__scopeId","data-v-0fe6ca5a"]]),gt={__name:"ProfileDriverInstructions",setup(a){const e=S(!1);return k("closeForm",()=>e.value=!1),(c,n)=>(i(),u(B,{title:"配送提醒"},{default:t(()=>[(i(),u(U(e.value?yt:ft),null,{customButton:t(()=>[s(j,{modelValue:e.value,"onUpdate:modelValue":n[0]||(n[0]=d=>e.value=d)},null,8,["modelValue"])]),_:1}))]),_:1}))}},xt=y(gt,[["__scopeId","data-v-fd35b27e"]]),$t=o("div",{class:"flex flex-col justify-end col-span-full gap-y-6"},[o("p",null,"帳戶上沒有禮金"),o("p",{class:"u-text-large text-color-primary-light"},"$0")],-1),wt={__name:"ProfileCreditContent",setup(a){return(e,l)=>(i(),u(D,null,{"card-item":t(()=>[$t]),_:1}))}},Pt={__name:"ProfileCredit",setup(a){return(e,l)=>(i(),u(B,{title:"禮金"},{default:t(()=>[s(wt)]),_:1}))}},Ft=y(Pt,[["__scopeId","data-v-d90ee414"]]),At=o("div",{class:"flex flex-col justify-end col-span-full gap-y-6 text-color-primary-light text-lg"},[o("p",null,"前往常見問題 "),o("p",null,"聯繫我們")],-1),Ct={__name:"ProfileNeedHelpContent",setup(a){return(e,l)=>(i(),u(D,null,{"card-item":t(()=>[At]),"card-Button":t(()=>[f(e.$slots,"customButton")]),_:3}))}},It={__name:"ProfileNeedHelp",setup(a){return(e,l)=>(i(),u(B,{title:"需要幫助？"},{default:t(()=>[s(Ct)]),_:1}))}},St=y(It,[["__scopeId","data-v-2b0859dc"]]),X={__name:"ProfileNotificationsDialog",props:{controlDialog:{},controlDialogModifiers:{}},emits:["update:controlDialog"],setup(a){const e=Q(a,"controlDialog");return(l,c)=>(i(),u(r($e),{open:e.value,"onUpdate:open":c[0]||(c[0]=n=>e.value=n)},{default:t(()=>[s(r(be),{"as-child":""},{default:t(()=>[o("button",null,[f(l.$slots,"buttonName")])]),_:3}),s(r(ve),{class:he(["sm:max-w-[425px]","sm:rounded-3xl -translate-y-full"])},{default:t(()=>[s(r(ye),null,{default:t(()=>[s(r(ge),{class:"text-2xl text-color-primary"},{default:t(()=>[f(l.$slots,"dialogTitle")]),_:3})]),_:3}),s(r(xe),null,{default:t(()=>[f(l.$slots,"textArea")]),_:3}),f(l.$slots,"formArea",{closeDialog:e.value})]),_:3})]),_:3},8,["open"]))}},Bt={class:"mb-4"},Dt=o("div",{class:"flex justify-end mt-4"},[o("button",{type:"submit",class:"u-pirmary-button profil__edit"}," 儲存 ")],-1),kt={__name:"ProfileNotificationsCheckBox",props:{controlDialog:{},controlDialogModifiers:{}},emits:["update:controlDialog"],setup(a){const{updateAccount:e,store:l}=p("store"),c=p("toast"),n=Q(a,"controlDialog"),d=[{id:"EmailNewsletters",label:"電子報訂閱"},{id:"SalesAndPromotions",label:"特價優惠消息"},{id:"Events",label:"活動資訊"},{id:"New Products",label:"新產品通知"},{id:"OnlyVegan-friendly",label:"僅寄送素食相關的郵件"}],g=we(Pe({items:Fe(Ae())})),{handleSubmit:v}=Ce({validationSchema:g,initialValues:{items:l.notifications}}),b=v(async m=>{try{const x={notifications:m.items},_=await e("clients",x,"user_id");if(!_[0])throw new Error("更新資料失敗，請嘗試從新登錄");_&&c.success("更新成功")}catch(x){c.error("更新失敗"),console.error(`💣 HANDLE UPDATE: ${x.message}`)}finally{n.value=!1}});return(m,x)=>(i(),$("form",{onSubmit:x[0]||(x[0]=(..._)=>r(b)&&r(b)(..._))},[s(r(h),{name:"items"},{default:t(()=>[s(r(re),null,{default:t(()=>[o("div",Bt,[s(r(Ie),{class:"text-color-primary text-base"},{default:t(()=>[w(" 電子報訂閱 ")]),_:1})]),(i(),$(H,null,Y(d,_=>s(r(h),{key:_.id,type:"checkbox",value:_.id,"unchecked-value":!1,name:"items"},{default:t(({value:L,handleChange:M})=>[s(r(re),{class:"flex flex-row items-start space-x-3 space-y-0"},{default:t(()=>[s(r(Se),null,{default:t(()=>[s(r(Ee),{class:"data-[state=checked]:bg-color-primary",checked:L.includes(_.id),"onUpdate:checked":M},null,8,["checked","onUpdate:checked"])]),_:2},1024),s(r(Be),{class:"font-normal"},{default:t(()=>[w(F(_.label),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["value"])),64)),s(r(De))]),_:1})]),_:1}),Dt],32))}},Nt={class:"notifications-content flex flex-col justify-end col-span-full gap-y-6 items-start text-color-primary-light text-lg"},Vt=o("p",{class:"text-color-primary text-base"},"發送 STOP 到 (886) 123-3210 以取消提醒。",-1),Lt=o("p",{class:"text-color-primary mt-6 text-base"},"如果您先前選擇退出，並希望恢復交付追踪通知，請聯繫我們尋求協助。",-1),Tt=o("p",{class:"text-color-primary text-base"},[w(" 我們在這裡為您服務。"),o("br"),w("請透過 (886) 123-3210 向我們發送簡訊"),o("br"),w("使用以下任何關鍵字： ")],-1),Ut={__name:"ProfileNotificationsContent",setup(a){const e=S(!1),l=[{keyword:"REMIND",description:"以接收訂單提醒"},{keyword:"STOP",description:"取消訂單提醒"},{keyword:"STOP",description:"取消訂單提醒"},{keyword:"UNSTOP",description:"恢復訂單提醒"},{keyword:"CHANGE",description:"更改您收到訂單提醒的日期"}];return(c,n)=>(i(),u(D,null,{"card-item":t(()=>[o("div",Nt,[o("div",null,[s(X,{controlDialog:e.value,"onUpdate:controlDialog":n[1]||(n[1]=d=>e.value=d)},{buttonName:t(()=>[w("更新電子郵件通知設置")]),dialogTitle:t(()=>[w("更新你的電子郵件通知設置")]),formArea:t(()=>[s(kt,{controlDialog:e.value,"onUpdate:controlDialog":n[0]||(n[0]=d=>e.value=d)},null,8,["controlDialog"])]),_:1},8,["controlDialog"])]),o("div",null,[s(X,null,{buttonName:t(()=>[w("更新訂單追蹤通知（簡訊）")]),dialogTitle:t(()=>[w("以下是你的運送追踪簡訊通知更新：")]),textArea:t(()=>[Vt,Lt]),_:1})]),o("div",null,[s(X,null,{buttonName:t(()=>[w("更新提醒通知（簡訊）")]),dialogTitle:t(()=>[w("更新你的訂單簡訊提醒。")]),textArea:t(()=>[Tt,(i(),$(H,null,Y(l,(d,g)=>o("p",{class:"text-color-primary mt-6 text-base",key:g}," 發送 "+F(d.keyword)+" "+F(d.description)+"。 ",1)),64))]),_:1})])])]),_:1}))}},jt={__name:"ProfileNotifications",setup(a){return(e,l)=>(i(),u(B,{title:"通知"},{default:t(()=>[s(Ut)]),_:1}))}},Zt=y(jt,[["__scopeId","data-v-020fac2a"]]),zt={class:"text-lg mb-2"},Et={class:""},Mt={__name:"ProfileChangeEmailContent",setup(a){const{store:e}=p("store");return(l,c)=>(i(),u(D,null,{"card-item":t(()=>[o("div",null,[o("div",zt,F(r(e).email.title),1),o("div",Et,F(r(e).email.val),1)])]),"card-Button":t(()=>[f(l.$slots,"customButton")]),_:3}))}},Ot=a=>(z("data-v-d92f90ec"),a=a(),E(),a),Ht=Ot(()=>o("div",null,[o("p",{class:"pb-5"},[w(" 新的電子郵件位址。"),o("br"),o("span",null,"僅更換接收推送信箱")])],-1)),Yt={__name:"ProfileChangeEmailForm",setup(a){const{updateAccount:e,store:l}=p("store"),c=p("closeForm"),n=p("toast"),{handleSubmit:d}=ke({user_Email:l.email.val}),g=d(async({user_Email:v})=>{try{if(l.email.val===v){n.warning("您並沒有更改任何東西");return}await e("clients",{user_Email:v},"user_id").catch(b=>{throw b}),n.success("已成功更新")}catch(b){console.error(b.message),n.error("更新失敗")}finally{c()}});return(v,b)=>(i(),u(Z,{onSubmit:r(g)},{"form-tiitle":t(()=>[Ht]),"form-table":t(()=>[s(r(h),{name:"user_Email"},{default:t(({componentField:m})=>[s(I,{class:"col-span-2","component-field":m,"user-label":"電子郵件*","user-description":"輸入要更改的內容"},null,8,["component-field"])]),_:1})]),"form-Button":t(()=>[f(v.$slots,"customButton",{},void 0,!0)]),_:3},8,["onSubmit"]))}},Jt=y(Yt,[["__scopeId","data-v-d92f90ec"]]),Rt={__name:"ProfileChangeEmail",setup(a){const e=S(!1);return k("closeForm",()=>e.value=!1),(c,n)=>(i(),u(B,{title:"更改電子郵件"},{default:t(()=>[(i(),u(U(e.value?Jt:Mt),null,{customButton:t(()=>[s(j,{modelValue:e.value,"onUpdate:modelValue":n[0]||(n[0]=d=>e.value=d)},null,8,["modelValue"])]),_:1}))]),_:1}))}},qt=y(Rt,[["__scopeId","data-v-597c56df"]]),Gt={key:0,class:"gap-3 justify-between place-items-center"},Wt={class:"text-lg"},Kt={key:1},Xt=o("p",{class:"text-lg"}," 尚未綁定信用卡 ",-1),Qt=[Xt],es={key:1,class:"card__action mt-8 col-span-full place-self-end"},ts={__name:"ProfilePaymentInfoContent",setup(a){const{store:e}=p("store"),l=p("account"),c=R(()=>(e.paymentInfo.card_cardNumber+"").slice(-4));return(n,d)=>{const g=ce("RouterLink");return i(),u(D,null,{"card-item":t(()=>[r(l).regPaymentinfo?(i(),$("div",Gt,[o("div",null,[o("p",Wt,"信用卡號: "+F(`xxxx-${c.value}`),1)]),o("div",null,[o("p",null,"到期日： "+F(r(e).paymentInfo.card_date),1)])])):(i(),$("div",Kt,Qt))]),"card-Button":t(()=>[r(l).regPaymentinfo?f(n.$slots,"customButton",{key:0}):(i(),$("div",es,[s(g,{onClick:r(l).checkAllow,to:{name:"payment-info"},class:"text-lg text-color-primary-light flex items-center"},{default:t(()=>[s(r(q),{class:"mr-1 text-xl",icon:"majesticons:creditcard-plus-line"}),w(" 綁定信用卡 ")]),_:1},8,["onClick"])]))]),_:3})}}},ss=a=>(z("data-v-7753dcb0"),a=a(),E(),a),os=ss(()=>o("div",null,[o("p",{class:"pb-5"}," 輸入新的電子郵件位址。 ")],-1)),rs={class:"grid col-span-2"},ns={class:"text-left"},ls={class:"grid grid-cols-3 gap-4"},as=["value"],is={__name:"ProfilePaymentInfoForm",setup(a){const{handleSubmit:e,loading:l}=Ne({creditMoon:"January",creditYear:"2025",sameAddress:!0}),c=p("toast"),n=p("closeForm"),{value:d}=N("creditMoon"),{value:g}=N("creditYear"),v=["January","February","March","April","May","June","July","August","September","October","November","December"],b=e(async m=>{try{l.value=!0;const x={card_name:m.userName,card_cardNumber:m.creditNumber,card_date:`${m.creditYear}/${m.creditMoon}`,card_password:m.creditLastNb};await de("PaymentInfo",x,"client_id"),c.success("已成功更新")}finally{n()}});return(m,x)=>(i(),u(Z,{onsubmit:r(b)},{"form-tiitle":t(()=>[os]),"form-table":t(()=>[o("div",rs,[o("div",ns,[s(r(h),{name:"userName"},{default:t(({componentField:_})=>[s(I,{"user-label":"持有人姓名","component-field":_,"user-description":"以卡片上的名稱為主"},null,8,["component-field"])]),_:1}),s(r(h),{name:"creditNumber"},{default:t(({componentField:_})=>[s(I,{"user-label":"卡片號碼","component-field":_,"user-placeholder":"0000 0000 0000 0000 ","user-description":"限定數字號碼"},null,8,["component-field"])]),_:1})]),o("div",ls,[s(r(h),{name:"creditMoon"},{default:t(()=>[s(V,{"user-label":"moon"},{default:t(()=>[J(o("select",{"onUpdate:modelValue":x[0]||(x[0]=_=>G(d)?d.value=_:null),class:"flex w-full rounded-md border border-input bg-transparent text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 py-4 px-3.5 h-auto duration-300"},[(i(),$(H,null,Y(v,(_,L)=>o("option",{key:L},F(_),1)),64))],512),[[ne,r(d)]])]),_:1})]),_:1}),s(r(h),{name:"creditYear"},{default:t(()=>[s(V,{"user-label":"Year"},{default:t(()=>[J(o("select",{"onUpdate:modelValue":x[1]||(x[1]=_=>G(g)?g.value=_:null),class:"flex w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 py-4 px-3.5 h-auto transition-shadow duration-300"},[(i(),$(H,null,Y(10,_=>o("option",{key:_,value:`${new Date().getFullYear()+_}`},F(new Date().getFullYear()+_),9,as)),64))],512),[[ne,r(g)]])]),_:1})]),_:1}),s(r(h),{name:"creditLastNb"},{default:t(({componentField:_})=>[s(I,{"component-field":_,"user-label":"末三碼"},null,8,["component-field"])]),_:1})])])]),"form-Button":t(()=>[f(m.$slots,"customButton",{},void 0,!0)]),_:3},8,["onsubmit"]))}},cs=y(is,[["__scopeId","data-v-7753dcb0"]]),ds={__name:"ProfilePaymentInfo",setup(a){const e=S(!1);return k("closeForm",()=>e.value=!1),(c,n)=>(i(),u(B,{title:"信用卡"},{default:t(()=>[(i(),u(U(e.value?cs:ts),null,{customButton:t(()=>[s(j,{modelValue:e.value,"onUpdate:modelValue":n[0]||(n[0]=d=>e.value=d)},null,8,["modelValue"])]),_:1}))]),_:1}))}},us=y(ds,[["__scopeId","data-v-53d59dde"]]),_s={key:1},ms=o("p",{class:"text-lg"},"尚未綁定帳單地址",-1),ps=[ms],fs={key:1,class:"card__action mt-8 col-span-full place-self-end"},bs={__name:"ProfileBillingAddressContent",setup(a){const{store:e}=p("store"),l=p("account");return(c,n)=>{const d=ce("RouterLink");return i(),u(D,null,{"card-item":t(()=>[r(l).regPaymentinfo?(i(),u(te,{key:0,profileInfo:r(e).billingAddress},null,8,["profileInfo"])):(i(),$("div",_s,ps))]),"card-Button":t(()=>[r(l).regPaymentinfo?f(c.$slots,"customButton",{key:0}):(i(),$("div",fs,[s(d,{onClick:r(l).checkAllow,to:{name:"payment-info"},class:"text-lg text-color-primary-light flex items-center"},{default:t(()=>[s(r(q),{class:"mr-1 text-xl",icon:"material-symbols-light:add-notes-outline"}),w(" 添加帳單地址 ")]),_:1},8,["onClick"])]))]),_:3})}}},ue=a=>(z("data-v-cceafff2"),a=a(),E(),a),vs=ue(()=>o("select",{class:"flex w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 py-4 px-3.5 h-auto transition-shadow duration-300","data-role":"county"},null,-1)),hs=ue(()=>o("select",{class:"flex w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 py-4 px-3.5 h-auto transition-shadow duration-300","data-role":"district"},null,-1)),ys={__name:"ProfileBillingAddressForm",setup(a){const e=S(),l=p("closeForm"),{updateAccount:c,store:n}=p("store"),d=p("toast"),{initializeZipcodeWithPage:g,handleSubmit:v,defineHandleFn:b}=le({user_Address:n.billingAddress.user_Address.val,user_AddressLine:n.billingAddress.user_AddressLine.val,user_City:n.billingAddress.user_City.val,user_State:n.billingAddress.user_State.val,user_ZipCode:`${n.billingAddress.user_ZipCode.val}`}),{handleChange:m}=N("user_City"),{handleChange:x}=N("user_State"),{value:_,handleChange:L}=N("user_ZipCode");b(m,x,L);const M=v(async C=>{try{if(n.compareObjects(n.billingAddress,C)){d.warning("您並沒有更改任何東西");return}const{user_Address:A,user_AddressLine:P,user_City:W,user_State:K,user_ZipCode:O}=C;await ae(+O).catch(T=>{throw T}),await c("BillingAddress",{user_Address:A,user_AddressLine:P,user_City:W,user_State:K,user_ZipCode:O},"clients_id").catch(T=>{throw T}),d.success("已成功更新")}catch(A){console.error(A.message),d.error("更新失敗")}finally{l()}});return ee(()=>{g(e).set({county:n.billingAddress.user_City.val,district:n.billingAddress.user_State.val,zipcode:n.billingAddress.user_ZipCode.val})}),(C,A)=>(i(),u(Z,{onSubmit:r(M)},{"form-table":t(()=>[o("div",{class:"col-span-full grid w-full gap-y-6 gap-x-8 sm:grid-cols-2 twzipcode",ref_key:"zipcode",ref:e},[s(r(h),{name:"user_Address"},{default:t(({componentField:P})=>[s(I,{componentField:P,userLabel:"地址*",userDescription:"輸入要更改的內容"},null,8,["componentField"])]),_:1}),s(r(h),{name:"user_AddressLine"},{default:t(({componentField:P})=>[s(I,{componentField:P,userLabel:"樓號*",userDescription:"輸入要更改的內容"},null,8,["componentField"])]),_:1}),s(r(h),{name:"user_City"},{default:t(()=>[s(V,{userLabel:"縣市*",userDescription:"輸入要更改的內容"},{default:t(()=>[vs]),_:1})]),_:1}),s(r(h),{name:"user_State"},{default:t(()=>[s(V,{"user-label":"地區*","user-description":"輸入要更改的內容"},{default:t(()=>[hs]),_:1})]),_:1}),s(r(h),{name:"user_ZipCode"},{default:t(()=>[s(V,{"user-label":"郵遞區號*","user-description":"輸入要更改的內容"},{default:t(()=>[J(o("input",{"onUpdate:modelValue":A[0]||(A[0]=P=>G(_)?_.value=P:null),class:"flex w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 py-4 px-3.5 h-auto transition-shadow duration-300","data-role":"zipcode"},null,512),[[ie,r(_),void 0,{number:!0}]])]),_:1})]),_:1})],512)]),"form-Button":t(()=>[f(C.$slots,"customButton",{},void 0,!0)]),_:3},8,["onSubmit"]))}},gs=y(ys,[["__scopeId","data-v-cceafff2"]]),xs={__name:"ProfileBillingAddress",setup(a){const e=S(!1);return k("closeForm",()=>e.value=!1),(c,n)=>(i(),u(B,{title:"帳單地址"},{default:t(()=>[(i(),u(U(e.value?gs:bs),null,{customButton:t(()=>[s(j,{modelValue:e.value,"onUpdate:modelValue":n[0]||(n[0]=d=>e.value=d)},null,8,["modelValue"])]),_:1}))]),_:1}))}},$s=y(xs,[["__scopeId","data-v-75559f50"]]),ws=o("div",null,null,-1),Ps={__name:"ProfileChangePasswordContent",setup(a){return(e,l)=>(i(),u(D,null,{"card-item":t(()=>[ws]),"card-Button":t(()=>[f(e.$slots,"customButton")]),_:3}))}},oe=a=>(z("data-v-d875b12e"),a=a(),E(),a),Fs=oe(()=>o("div",{class:"join-input__control"},[o("label",{for:"oldPassword"},"當前的密碼"),o("input",{id:"oldPassword",type:"text"}),o("div",{class:"user-hlper"},"*不可空白")],-1)),As=oe(()=>o("div",{class:"join-input__control"},[o("label",{for:"Password"},"新密碼"),o("input",{id:"Password",type:"text"}),o("div",{class:"user-hlper"},"*不可空白")],-1)),Cs=oe(()=>o("div",{class:"join-input__control"},[o("label",{for:"passwordDup"},"確認新密碼"),o("input",{id:"passwordDup",type:"text"}),o("div",{class:"user-hlper"},"*不可空白")],-1)),Is={__name:"ProfileChangePasswordForm",setup(a){return(e,l)=>(i(),u(Z,null,{"form-table":t(()=>[Fs,As,Cs]),"form-Button":t(()=>[f(e.$slots,"customButton",{},void 0,!0)]),_:3}))}},Ss=y(Is,[["__scopeId","data-v-d875b12e"]]),Bs={__name:"ProfileChangePassword",setup(a){const e=S(!1);return(l,c)=>(i(),u(B,{title:"更改密碼"},{default:t(()=>[(i(),u(U(e.value?Ss:Ps),null,{customButton:t(()=>[s(j,{modelValue:e.value,"onUpdate:modelValue":c[0]||(c[0]=n=>e.value=n)},null,8,["modelValue"])]),_:1}))]),_:1}))}},Ds=y(Bs,[["__scopeId","data-v-92d13daf"]]),ks={class:"section-container grid-line items-start"},Ns=Ve({__name:"AccountProfileContent",setup(a){const e=Le(),l=Te();return k("store",{updateAccount:de,store:e}),k("account",l),k("toast",Ue),ee(()=>{je(),Ze()}),(c,n)=>(i(),$("div",ks,[s(r(lt)),s(r(pt)),s(r(xt),{class:"card-computer"}),s(r(Ft),{class:"card-computer"}),s(r(St),{class:"card-computer"}),s(r(Zt),{class:"card-computer"}),s(r(qt),{class:"card-computer"}),s(r(us),{class:"card-computer"}),s(r($s)),s(r(Ds))]))}}),Vs=y(Ns,[["__scopeId","data-v-24eac689"]]),Ls={class:"section-container"},zs={__name:"AccountProfile",setup(a){return(e,l)=>(i(),$("div",Ls,[s(Vs)]))}};export{zs as default};
