import{d as r,b as n,o as i,g as l,n as p,j as c,w as u,f as m}from"./vue.esm-bundler-BHZCfZUb.js";import{_ as d}from"./_plugin-vue_export-helper-DlAUqK2U.js";const _=["innerHTML"],s=r({__name:"Title",props:{tagType:{},text:{},size:{},color:{}},setup(a){const e=a,o=n(()=>({[`title--${e.size||"medium"}`]:!0,[`title--${e.color||"black"}`]:!0}));return(t,T)=>(i(),l(c(t.tagType),{class:p(["title",o.value])},{default:u(()=>[m("span",{innerHTML:t.text},null,8,_)]),_:1},8,["class"]))}}),g=d(s,[["__scopeId","data-v-18820e35"]]);s.__docgenInfo={exportName:"default",displayName:"Title",description:"",tags:{},props:[{name:"tagType",required:!0,type:{name:"String"}},{name:"text",required:!0,type:{name:"String"}},{name:"size",required:!1,type:{name:"TSize"}},{name:"color",required:!1,type:{name:"TColor"}}],sourceFiles:["C:/education/budu/budushop-ui/src/components/Title.vue"]};export{g as T};