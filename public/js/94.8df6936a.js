"use strict";(self["webpackChunkmes_app"]=self["webpackChunkmes_app"]||[]).push([[94],{94:(e,t,a)=>{a.r(t),a.d(t,{default:()=>D});var o=a(3673);const l={class:"q-pa-md",style:{"max-width":"600px"}},s=(0,o._)("div",{class:"text-h5"},"Departamento",-1);function r(e,t,a,r,n,m){const i=(0,o.up)("q-icon"),u=(0,o.up)("q-breadcrumbs-el"),c=(0,o.up)("q-breadcrumbs"),d=(0,o.up)("q-card-section"),p=(0,o.up)("q-input"),g=(0,o.up)("q-toggle"),h=(0,o.up)("q-btn"),b=(0,o.up)("q-form"),y=(0,o.up)("q-card");return(0,o.wg)(),(0,o.iD)("div",l,[(0,o.Wm)(c,{class:"q-pb-md"},{separator:(0,o.w5)((()=>[(0,o.Wm)(i,{size:"1.5em",name:"chevron_right",color:"primary"})])),default:(0,o.w5)((()=>[(0,o.Wm)(u,{label:"Home",icon:"home",to:"/"}),(0,o.Wm)(u,{label:"Departamento",icon:"widgets"})])),_:1}),(0,o.Wm)(y,{class:"my-card"},{default:(0,o.w5)((()=>[(0,o.Wm)(d,null,{default:(0,o.w5)((()=>[s])),_:1}),(0,o.Wm)(d,null,{default:(0,o.w5)((()=>[(0,o.Wm)(b,{class:"q-gutter-md",onSubmit:t[3]||(t[3]=e=>m.postDepartment()),onReset:r.onReset},{default:(0,o.w5)((()=>[(0,o.Wm)(p,{filled:"",autofocus:"",clearable:"",modelValue:r.title,"onUpdate:modelValue":t[0]||(t[0]=e=>r.title=e),label:"Departamento",hint:"Obrigatório, precisa ter 3 ou mais caracteres!","lazy-rules":"",rules:[e=>e&&e.length>0||"Please type something"]},null,8,["modelValue","rules"]),(0,o.Wm)(p,{filled:"",clearable:"",modelValue:e.local,"onUpdate:modelValue":t[1]||(t[1]=t=>e.local=t),label:"Local"},null,8,["modelValue"]),(0,o.Wm)(g,{modelValue:r.status,"onUpdate:modelValue":t[2]||(t[2]=e=>r.status=e)},null,8,["modelValue"]),(0,o._)("div",null,[(0,o.Wm)(h,{label:"Salvar",type:"submit",color:"primary"}),(0,o.Wm)(h,{label:"Reset",type:"reset",color:"primary",flat:"",class:"q-ml-sm"})])])),_:1},8,["onReset"])])),_:1})])),_:1})])}var n=a(8825),m=a(1959),i=a(52),u=a.n(i);const c={name:"Department",methods:{async postDepartment(){try{console.log(this.title),console.log(this.departmentBody.initial),console.log(this.departmentBody),await u().post("https://mes-app-a6wbv.ondigitalocean.app/department",this.departmentBody),$q.notify({color:"green-13",textColor:"white",icon:"cloud_done",position:"center",message:"Departamento cadastrado com sucesso!",timeout:3e3})}catch(e){this.errorInput(e.response.data.message),console.log(e.response.data.message)}}},setup(){const e=(0,n.Z)(),t=(0,m.iH)(null),a=(0,m.iH)(!0);(0,m.iH)(!1);var o={title:"Indusssssdds",initial:"EEss"};return{title:t,status:a,departmentBody:o,async onSubmit(){await this.postDepartment(),this.salvou&&e.notify({color:"green-13",textColor:"white",icon:"cloud_done",position:"center",message:"Departamento cadastrado com sucesso!",timeout:3e3})},errorInput(t){e.notify({color:"red-13",textColor:"white",icon:"report_gmailerrorred",position:"center",message:t,timeout:3e3})},onReset(){t.value=null,a.value=!0}}}};var d=a(4260),p=a(1481),g=a(4554),h=a(5926),b=a(151),y=a(5589),f=a(8689),w=a(4842),q=a(8886),v=a(8240),W=a(7518),_=a.n(W);const Z=(0,d.Z)(c,[["render",r]]),D=Z;_()(c,"components",{QBreadcrumbs:p.Z,QIcon:g.Z,QBreadcrumbsEl:h.Z,QCard:b.Z,QCardSection:y.Z,QForm:f.Z,QInput:w.Z,QToggle:q.Z,QBtn:v.Z})}}]);