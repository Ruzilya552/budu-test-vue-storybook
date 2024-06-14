import{t as toString_1,g as getDefaultExportFromCjs,e as extractComponentDescription,a as enhanceArgTypes,h as hasDocgen,b as extractComponentProps,c as convert4,S as SourceType,d as SNIPPET_RENDERED}from"./index-D16O5h3a.js";import{k as watch,h,l as baseParse,i as isVNode}from"./vue.esm-bundler-BHZCfZUb.js";function arrayReduce$1(e,r,t,n){var o=-1,a=e==null?0:e.length;for(n&&a&&(t=e[++o]);++o<a;)t=r(t,e[o],o,e);return t}var _arrayReduce=arrayReduce$1;function basePropertyOf$1(e){return function(r){return e==null?void 0:e[r]}}var _basePropertyOf=basePropertyOf$1,basePropertyOf=_basePropertyOf,deburredLetters={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},deburrLetter$1=basePropertyOf(deburredLetters),_deburrLetter=deburrLetter$1,deburrLetter=_deburrLetter,toString$1=toString_1,reLatin=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,rsComboMarksRange$1="\\u0300-\\u036f",reComboHalfMarksRange$1="\\ufe20-\\ufe2f",rsComboSymbolsRange$1="\\u20d0-\\u20ff",rsComboRange$1=rsComboMarksRange$1+reComboHalfMarksRange$1+rsComboSymbolsRange$1,rsCombo$1="["+rsComboRange$1+"]",reComboMark=RegExp(rsCombo$1,"g");function deburr$1(e){return e=toString$1(e),e&&e.replace(reLatin,deburrLetter).replace(reComboMark,"")}var deburr_1=deburr$1,reAsciiWord=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function asciiWords$1(e){return e.match(reAsciiWord)||[]}var _asciiWords=asciiWords$1,reHasUnicodeWord=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function hasUnicodeWord$1(e){return reHasUnicodeWord.test(e)}var _hasUnicodeWord=hasUnicodeWord$1,rsAstralRange="\\ud800-\\udfff",rsComboMarksRange="\\u0300-\\u036f",reComboHalfMarksRange="\\ufe20-\\ufe2f",rsComboSymbolsRange="\\u20d0-\\u20ff",rsComboRange=rsComboMarksRange+reComboHalfMarksRange+rsComboSymbolsRange,rsDingbatRange="\\u2700-\\u27bf",rsLowerRange="a-z\\xdf-\\xf6\\xf8-\\xff",rsMathOpRange="\\xac\\xb1\\xd7\\xf7",rsNonCharRange="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",rsPunctuationRange="\\u2000-\\u206f",rsSpaceRange=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",rsUpperRange="A-Z\\xc0-\\xd6\\xd8-\\xde",rsVarRange="\\ufe0e\\ufe0f",rsBreakRange=rsMathOpRange+rsNonCharRange+rsPunctuationRange+rsSpaceRange,rsApos$1="['’]",rsBreak="["+rsBreakRange+"]",rsCombo="["+rsComboRange+"]",rsDigits="\\d+",rsDingbat="["+rsDingbatRange+"]",rsLower="["+rsLowerRange+"]",rsMisc="[^"+rsAstralRange+rsBreakRange+rsDigits+rsDingbatRange+rsLowerRange+rsUpperRange+"]",rsFitz="\\ud83c[\\udffb-\\udfff]",rsModifier="(?:"+rsCombo+"|"+rsFitz+")",rsNonAstral="[^"+rsAstralRange+"]",rsRegional="(?:\\ud83c[\\udde6-\\uddff]){2}",rsSurrPair="[\\ud800-\\udbff][\\udc00-\\udfff]",rsUpper="["+rsUpperRange+"]",rsZWJ="\\u200d",rsMiscLower="(?:"+rsLower+"|"+rsMisc+")",rsMiscUpper="(?:"+rsUpper+"|"+rsMisc+")",rsOptContrLower="(?:"+rsApos$1+"(?:d|ll|m|re|s|t|ve))?",rsOptContrUpper="(?:"+rsApos$1+"(?:D|LL|M|RE|S|T|VE))?",reOptMod=rsModifier+"?",rsOptVar="["+rsVarRange+"]?",rsOptJoin="(?:"+rsZWJ+"(?:"+[rsNonAstral,rsRegional,rsSurrPair].join("|")+")"+rsOptVar+reOptMod+")*",rsOrdLower="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",rsOrdUpper="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",rsSeq=rsOptVar+reOptMod+rsOptJoin,rsEmoji="(?:"+[rsDingbat,rsRegional,rsSurrPair].join("|")+")"+rsSeq,reUnicodeWord=RegExp([rsUpper+"?"+rsLower+"+"+rsOptContrLower+"(?="+[rsBreak,rsUpper,"$"].join("|")+")",rsMiscUpper+"+"+rsOptContrUpper+"(?="+[rsBreak,rsUpper+rsMiscLower,"$"].join("|")+")",rsUpper+"?"+rsMiscLower+"+"+rsOptContrLower,rsUpper+"+"+rsOptContrUpper,rsOrdUpper,rsOrdLower,rsDigits,rsEmoji].join("|"),"g");function unicodeWords$1(e){return e.match(reUnicodeWord)||[]}var _unicodeWords=unicodeWords$1,asciiWords=_asciiWords,hasUnicodeWord=_hasUnicodeWord,toString=toString_1,unicodeWords=_unicodeWords;function words$1(e,r,t){return e=toString(e),r=t?void 0:r,r===void 0?hasUnicodeWord(e)?unicodeWords(e):asciiWords(e):e.match(r)||[]}var words_1=words$1,arrayReduce=_arrayReduce,deburr=deburr_1,words=words_1,rsApos="['’]",reApos=RegExp(rsApos,"g");function createCompounder$1(e){return function(r){return arrayReduce(words(deburr(r).replace(reApos,"")),e,"")}}var _createCompounder=createCompounder$1,createCompounder=_createCompounder,kebabCase=createCompounder(function(e,r,t){return e+(t?"-":"")+r.toLowerCase()}),kebabCase_1=kebabCase;const kebabCase$1=getDefaultExportFromCjs(kebabCase_1),{addons}=__STORYBOOK_MODULE_PREVIEW_API__;var ARG_TYPE_SECTIONS=["props","events","slots","exposed","expose"],extractArgTypes=e=>{if(!hasDocgen(e))return null;let r="exposed"in e.__docgenInfo?"vue-component-meta":"vue-docgen-api",t={};return ARG_TYPE_SECTIONS.forEach(n=>{extractComponentProps(e,n).forEach(o=>{let a;if(r==="vue-docgen-api"){let i=o.docgenInfo;a=extractFromVueDocgenApi(i,n,o)}else{let i=o.docgenInfo;a=extractFromVueComponentMeta(i,n)}!a||t[a.name]||(["events","expose","exposed"].includes(n)&&(a.control={disable:!0}),t[a.name]=a)})}),t},extractFromVueDocgenApi=(e,r,t)=>{var i,s,u;let n,o;if(r==="events"&&(n=(i=e.type)==null?void 0:i.names.join(),o={name:"other",value:n??"",required:!1}),r==="slots"){let c=(s=e.bindings)==null?void 0:s.filter(p=>!!p.name).map(p=>{var d;return`${p.name}: ${((d=p.type)==null?void 0:d.name)??"unknown"}`}).join("; ");n=c?`{ ${c} }`:void 0,o={name:"other",value:n??"",required:!1}}if(r==="props"){let c=e;if(n=(u=c.type)==null?void 0:u.name,o=t?convert4(t.docgenInfo):{name:"other",value:n},c.type&&"elements"in c.type&&Array.isArray(c.type.elements)&&c.type.elements.length>0){let p=c.type.elements.map(d=>d.name);n==="Array"&&(n=`${p.length===1?p[0]:`(${p.join(" | ")})`}[]`),n==="union"?n=p.join(" | "):n==="intersection"&&(n=p.join(" & "))}}let a="required"in e?e.required??!1:!1;return{name:e.name,description:e.description,type:o?{...o,required:a}:{name:"other",value:n??""},table:{type:n?{summary:n}:void 0,defaultValue:(t==null?void 0:t.propDef.defaultValue)??void 0,jsDocTags:t==null?void 0:t.propDef.jsDocTags,category:r}}},extractFromVueComponentMeta=(e,r)=>{if("global"in e&&e.global)return;let t={summary:e.type.replace(" | undefined","")};if(r==="props"){let n=e,o=n.default?{summary:n.default}:void 0;return{name:n.name,description:formatDescriptionWithTags(n.description,n.tags),defaultValue:o,type:convertVueComponentMetaProp(n),table:{type:t,defaultValue:o,category:r}}}else return{name:e.name,description:"description"in e?e.description:"",type:{name:"other",value:e.type},table:{type:t,category:r}}},convertVueComponentMetaProp=e=>{var a,i;let r=e.schema,t=e.required,n={name:"other",value:e.type,required:t},o=["string","number","function","boolean","symbol"];if(typeof r=="string")return o.includes(r)?{name:r,required:t}:n;switch(r.kind){case"enum":{let s=((a=r.schema)==null?void 0:a.filter(u=>u!=="undefined"))??[];return isBooleanSchema(s)?{name:"boolean",required:t}:isLiteralUnionSchema(s)||isEnumSchema(s)?{name:"enum",value:s.map(u=>u.replace(/"/g,"")),required:t}:s.length===1?convertVueComponentMetaProp({schema:s[0],type:e.type,required:t}):(s.length>2&&s.includes("true")&&s.includes("false")&&(s=s.filter(u=>u!=="true"&&u!=="false"),s.push("boolean")),{name:"union",value:s.map(u=>convertVueComponentMetaProp(typeof u=="object"?{schema:u,type:u.type,required:!1}:{schema:u,type:u,required:!1})),required:t})}case"array":{let s=((i=r.schema)==null?void 0:i.filter(u=>u!=="undefined"))??[];return s.length===0?n:s.length===1?{name:"array",value:convertVueComponentMetaProp({schema:s[0],type:e.type,required:!1}),required:t}:{name:"union",value:s.map(u=>convertVueComponentMetaProp(typeof u=="object"?{schema:u,type:u.type,required:!1}:{schema:u,type:u,required:!1})),required:t}}case"object":return{name:"object",value:Object.entries(r.schema??{}).reduce((s,[u,c])=>(s[u]=convertVueComponentMetaProp(c),s),{}),required:t};default:return n}},formatDescriptionWithTags=(e,r)=>!(r!=null&&r.length)||!e?e??"":`${r.map(t=>`@${t.name}: ${t.text}`).join("<br>")}<br><br>${e}`,isLiteralUnionSchema=e=>e.every(r=>typeof r=="string"&&r.startsWith('"')&&r.endsWith('"')),isEnumSchema=e=>e.every(r=>typeof r=="string"&&r.includes(".")),isBooleanSchema=e=>e.length===2&&e.includes("true")&&e.includes("false"),omitEvent=e=>e?Object.fromEntries(Object.entries(e).filter(([r,t])=>!r.startsWith("on"))):{},displayObject=e=>e&&typeof e=="object"?`{${Object.keys(e).map(r=>`${r}:${displayObject(e[r])}`).join(",")}}`:typeof e=="string"?`'${e}'`:e==null?void 0:e.toString(),htmlEventAttributeToVueEventAttribute=e=>/^on[A-Za-z]/.test(e)?e.replace(/^on/,"v-on:").toLowerCase():e,directiveSource=(e,r)=>e.toLowerCase().startsWith("on")?`${htmlEventAttributeToVueEventAttribute(e)}='()=>({})'`:`${e}="${r||""}"`,attributeSource=(e,r,t)=>["boolean","number","object"].includes(typeof r)||t?`:${e}="${displayObject(r)}"`:directiveSource(e,r),evalExp=(e,r)=>{let t=e;return t&&/v-bind="(\w+)"/.test(t)?t.replace(/"(\w+)"/g,`"${displayObject(r)}"`):(Object.keys(r).forEach(n=>{let o=new RegExp(`(\\w+)\\.${n}`,"g"),a=new RegExp(`(\\w+)\\.${n}`,"g");o.test(t)&&(t=t.replace(a,displayObject(r[n])))}),t)},replaceValueWithRef=(e,r,t)=>{let n=t?r[t]:"args",o=()=>{let i=Object.fromEntries(Object.entries(r).map(([s])=>[s,s]));return displayObject(i).replace(/'/g,"")},a=new RegExp(`="${n}"`,"g");return e.replace(a,`="${t??o()}"`)};function generateExpression(e){let r=e.toString().split("=>")[1].trim().replace("return","").trim();return r.startsWith("{")&&r.endsWith("}")&&(r=r.substring(1,r.length-1).trim()),`{{${r}}}`}var skipSourceRender=e=>{var o;let r=(o=e==null?void 0:e.parameters.docs)==null?void 0:o.source,t=e==null?void 0:e.parameters.__isArgsStory,n=(e==null?void 0:e.viewMode)==="docs";return(r==null?void 0:r.type)===SourceType.DYNAMIC?!1:!n||!t||(r==null?void 0:r.code)||(r==null?void 0:r.type)===SourceType.CODE};function generateAttributesSource(e,r,t,n){return Object.keys(e).map(o=>{var s;let a=e[o].loc.source.replace(/\$props/g,"args"),i=(s=e[o].arg)==null?void 0:s.loc.source;return n&&i?replaceValueWithRef(a,r,i):evalExp(a,omitEvent(r))}).join(" ")}function mapAttributesAndDirectives(e){let r=t=>t.startsWith("on")?t:kebabCase$1(t);return Object.keys(e).map(t=>({name:"bind",type:["v-","@","v-on"].includes(t)?7:6,arg:{content:r(t),loc:{source:r(t)}},loc:{source:attributeSource(r(t),e[t])},exp:{isStatic:!1,loc:{source:e[t]}},modifiers:[""]}))}function mapSlots(e,r,t){return Object.keys(e).map(n=>{var u,c;let o=e[n],a="",i=(c=(u=t.find(p=>p.name===n&&p.scoped))==null?void 0:u.bindings)==null?void 0:c.map(p=>p.name).join(",");typeof o=="string"?a=o:typeof o=="function"?a=generateExpression(o):isVNode(o)?a=r(o):typeof o=="object"&&!isVNode(o)&&(a=JSON.stringify(o));let s=i?`="{${i}}"`:"";return a=o?`<template #${n}${s}>${a}</template>`:"",{type:2,content:a,loc:{source:a,start:{offset:0,line:1,column:0},end:{offset:0,line:1,column:0}}}})}function generateScriptSetup(e,r,t){let n=Object.keys(e).map(o=>`const ${o} = ${typeof e[o]=="function"?"()=>{}":`ref(${JSON.stringify(e[o])});`}`);return n.unshift('import { ref } from "vue";'),`<script lang='ts' setup>${n.join(`
`)}<\/script>`}function getTemplateComponents(e,r){try{let t=e,n=t?t(r==null?void 0:r.args,r):r==null?void 0:r.component,o=typeof n=="function"?n():n,{template:a}=o;return a?getComponents(a):[h(o,r==null?void 0:r.args)]}catch{return[]}}function getComponents(e){var t;return((t=baseParse(e,{isNativeTag:()=>!0,decodeEntities:(n,o)=>n}))==null?void 0:t.children)||[]}function generateTemplateSource(componentOrNodes,{args,argTypes},byRef=!1){let isElementNode=e=>e&&e.type===1,isInterpolationNode=e=>e&&e.type===5,isTextNode=e=>e&&e.type===2,generateComponentSource=componentOrNode=>{var e,r;if(isElementNode(componentOrNode)){let{tag:t,props:n,children:o}=componentOrNode,a=typeof o=="string"?o:o.map(s=>generateComponentSource(s)).join(""),i=generateAttributesSource(n,args,argTypes,byRef);return a===""?`<${t} ${i} />`:`<${t} ${i}>${a}</${t}>`}if(isTextNode(componentOrNode)){let{content:t}=componentOrNode;return t}if(isInterpolationNode(componentOrNode)){let{content}=componentOrNode,expValue=evalExp(content.loc.source,args);return expValue===content.loc.source?`{{${expValue}}}`:eval(expValue)}if(isVNode(componentOrNode)){let t=componentOrNode,{props:n,type:o,children:a}=t,i=typeof a=="string"?void 0:a,s=(e=o==null?void 0:o.__docgenInfo)==null?void 0:e.slots,u=i?Object.fromEntries(Object.entries(n??{}).filter(([l,f])=>!i[l]&&!["class","style"].includes(l)).map(([l,f])=>[l,f])):n,c=mapAttributesAndDirectives(u??{}),p=Object.fromEntries(Object.entries(n??{}).filter(([l,f])=>i==null?void 0:i[l])),d=a?typeof a=="string"?a:mapSlots(p,generateComponentSource,s??[]).map(l=>l.content).join(""):"",m=typeof o=="string"?o:o.name||o.__name||((r=o.__docgenInfo)==null?void 0:r.displayName),g=generateAttributesSource(c,args,argTypes,byRef);return d.trim()===""?`<${m} ${g}/>`:`<${m} ${g}>${d}</${m}>`}return null},componentsOrNodes=Array.isArray(componentOrNodes)?componentOrNodes:[componentOrNodes],source=componentsOrNodes.map(e=>generateComponentSource(e)).join(" ");return source||null}var sourceDecorator=(e,r)=>{let t=skipSourceRender(r),n=e();return watch(()=>r.args,()=>{t||generateSource(r)},{immediate:!0,deep:!0}),n};function generateSource(e){var c,p,d;let r=addons.getChannel(),{args:t={},argTypes:n={},id:o}=e||{},a=getTemplateComponents(e==null?void 0:e.originalStoryFn,e),i=((d=(p=(c=e==null?void 0:e.parameters)==null?void 0:c.docs)==null?void 0:p.source)==null?void 0:d.withScriptSetup)||!1,s=i?generateScriptSetup(t):"",u=generateTemplateSource(a,e,i);if(u){let m=`${s}
 <template>
 ${u} 
</template>`;return r.emit(SNIPPET_RENDERED,{id:o,args:t,source:m,format:"vue"}),m}return null}var parameters={docs:{story:{inline:!0},extractArgTypes,extractComponentDescription}},decorators=[sourceDecorator],argTypesEnhancers=[enhanceArgTypes];export{argTypesEnhancers,decorators,parameters};
