"use strict";(self["webpackChunkmes_app"]=self["webpackChunkmes_app"]||[]).push([[686],{3686:(e,l,i)=>{i.r(l),i.d(l,{default:()=>f});var t=i(3673);const n={class:"q-pa-md q-gutter-sm"};function c(e,l,i,c,o,a){const s=(0,t.up)("q-icon"),r=(0,t.up)("q-input"),d=(0,t.up)("q-tree");return(0,t.wg)(),(0,t.iD)("div",n,[(0,t.Wm)(r,{ref:"filterRef",filled:"",modelValue:c.filter,"onUpdate:modelValue":l[0]||(l[0]=e=>c.filter=e),label:"Filter"},{append:(0,t.w5)((()=>[""!==c.filter?((0,t.wg)(),(0,t.j4)(s,{key:0,name:"clear",class:"cursor-pointer",onClick:c.resetFilter},null,8,["onClick"])):(0,t.kq)("",!0)])),_:1},8,["modelValue"]),(0,t.Wm)(d,{nodes:c.simple,"node-key":"label",filter:c.filter,selected:c.selected,"onUpdate:selected":l[1]||(l[1]=e=>c.selected=e),"selected-color":"red"},null,8,["nodes","filter","selected"])])}var o=i(1959);const a={setup(){const e=(0,o.iH)(""),l=(0,o.iH)(null),i=(0,o.iH)(null);return{filter:e,filterRef:l,selected:i,selectGoodService(){"Good service"!==i.value&&(i.value="Good service")},unselectNode(){i.value=null},simple:[{label:"01-PCEBG",icon:"location_city",children:[{label:"SMT",color:"green",dense:"true",icon:"location_city",children:[{label:"Linha 01",disabled:!1,icon:"location_city",children:[{label:"PAN01",icon:"settings_applications"},{label:"PAN02",icon:"settings_applications"}]},{label:"Linha 02",disabled:!1,icon:"location_city",children:[{label:"PAN01",icon:"settings_applications"},{label:"PAN02",icon:"settings_applications"}]},{label:"Linha 03",icon:"location_city"},{label:"Linha 04",icon:"location_city"}]},{label:"PTH",disabled:!1,icon:"location_city",children:[{label:"Wave 01",icon:"settings_applications"},{label:"Wave 02",icon:"settings_applications"}]},{label:"Warehouse",icon:"location_city",children:[{label:"Kitting",icon:"location_city"},{label:"Estoque 01",icon:"location_city"},{label:"Estoque 02",icon:"location_city"}]}]}],resetFilter(){e.value="",l.value.focus()}}}};var s=i(4260),r=i(4842),d=i(4554),u=i(5551),p=i(7518),b=i.n(p);const _=(0,s.Z)(a,[["render",c]]),f=_;b()(a,"components",{QInput:r.Z,QIcon:d.Z,QTree:u.Z})}}]);