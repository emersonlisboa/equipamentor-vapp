"use strict";(self["webpackChunkmes_app"]=self["webpackChunkmes_app"]||[]).push([[962],{9962:(e,l,i)=>{i.r(l),i.d(l,{default:()=>h});var n=i(3673),t=i(2323);const c={class:"q-pa-md q-gutter-sm"};function o(e,l,i,o,a,s){const r=(0,n.up)("q-icon"),d=(0,n.up)("q-input"),u=(0,n.up)("q-tree");return(0,n.wg)(),(0,n.iD)("div",c,[(0,n.Wm)(d,{ref:"filterRef",filled:"",modelValue:o.filter,"onUpdate:modelValue":l[0]||(l[0]=e=>o.filter=e),label:"Filter"},{append:(0,n.w5)((()=>[""!==o.filter?((0,n.wg)(),(0,n.j4)(r,{key:0,name:"clear",class:"cursor-pointer",onClick:o.resetFilter},null,8,["onClick"])):(0,n.kq)("",!0)])),_:1},8,["modelValue"]),(0,n._)("h4",null,(0,t.zw)(o.selected),1),(0,n.Wm)(u,{nodes:o.simple,"node-key":"label",filter:o.filter,selected:o.selected,"onUpdate:selected":l[1]||(l[1]=e=>o.selected=e),"selected-color":"primary"},null,8,["nodes","filter","selected"])])}var a=i(1959);const s={setup(){const e=(0,a.iH)(""),l=(0,a.iH)(null),i=(0,a.iH)(null),n=(0,a.iH)(null);return{filter:e,filterRef:l,selected:i,label:n,selectGoodService(){"Good service"!==i.value&&(i.value="Good service")},unselectNode(){i.value=null},simple:[{label:"01-PCEBG",icon:"location_city",children:[{label:"SMT",color:"green",icon:"location_city",children:[{label:"Linha 01",disabled:!1,icon:"location_city",children:[{label:"PAN01",icon:"settings_applications"},{label:"PAN02",icon:"settings_applications"}]},{label:"Linha 02",disabled:!1,icon:"location_city",children:[{label:"PAN01",icon:"settings_applications"},{label:"PAN02",icon:"settings_applications"}]},{label:"Linha 03",icon:"location_city"},{label:"Linha 04",icon:"location_city"}]},{label:"PTH",disabled:!1,icon:"location_city",children:[{label:"Wave 01",icon:"settings_applications"},{label:"Wave 02",icon:"settings_applications"}]},{label:"Warehouse",icon:"location_city",children:[{label:"Kitting",icon:"location_city"},{label:"Estoque 01",icon:"location_city"},{label:"Estoque 02",icon:"location_city"}]}]}],resetFilter(){e.value="",l.value.focus()}}}};var r=i(4260),d=i(4842),u=i(4554),p=i(5551),b=i(7518),_=i.n(b);const f=(0,r.Z)(s,[["render",o]]),h=f;_()(s,"components",{QInput:d.Z,QIcon:u.Z,QTree:p.Z})}}]);