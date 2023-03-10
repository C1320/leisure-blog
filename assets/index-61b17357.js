import{V as e,g as t,d as r}from"../js/@kangc/@kangc.442f513e.js";import{E as s,z as n,i as o}from"../js/element-plus/element-plus.86321995.js";import{o as i}from"../js/@highlightjs/@highlightjs.fccd0474.js";import{H as a}from"../js/highlight.js/highlight.js.ff00c245.js";import{d as l,Q as c,R as u,u as d,af as m,o as p,X as h,ar as f}from"../js/@vue/@vue.fe24ed5a.js";import{d as g,c as j}from"../js/pinia/pinia.9e201ab2.js";import{i as b}from"../js/pinia-plugin-persist/pinia-plugin-persist.70d140bd.js";import{u as _,a as L,c as E,b as y}from"../js/vue-router/vue-router.9473b667.js";import{f as N}from"../js/@co/@co.fb4682a1.js";import{m as v}from"../js/mitt/mitt.f0e54764.js";import{N as x}from"../js/nprogress/nprogress.43b09d2e.js";import{a as T}from"../js/js-cookie/js-cookie.d59fc71c.js";import"../js/@babel/@babel.9867481d.js";import"../js/@vuepress/@vuepress.68ab59a1.js";import"../js/vue/vue.6569c03c.js";import"../js/lodash-es/lodash-es.9f1a9679.js";import"../js/@vueuse/@vueuse.9c77a690.js";import"../js/@element-plus/@element-plus.cddc8f8f.js";import"../js/@popperjs/@popperjs.0e77d79c.js";import"../js/@ctrl/@ctrl.91de2ec7.js";import"../js/dayjs/dayjs.4d8034fa.js";import"../js/async-validator/async-validator.163d02db.js";import"../js/memoize-one/memoize-one.63ab667a.js";import"../js/escape-html/escape-html.1935ddb3.js";import"../js/normalize-wheel-es/normalize-wheel-es.500438c6.js";import"../js/@floating-ui/@floating-ui.945a406c.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const r of e)if("childList"===r.type)for(const e of r.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();a.initHighlightingOnLoad(),((e,t,r)=>{const s="hljs-ln",n="hljs-ln-line",o="hljs-ln-code",i="hljs-ln-numbers",a="hljs-ln-n",l="data-line-number",c=/\r\n|\r|\n/g;function u(e){try{const t=r.querySelectorAll("code.hljs,code.nohighlight");for(const r in t)t.hasOwnProperty(r)&&(t[r].classList.contains("nohljsln")||d(t[r],e))}catch(s){t.console.error("LineNumbers error: ",s)}}function d(e,r){var s;"object"==typeof e&&(s=()=>{e.innerHTML=m(e,r)},t.setTimeout(s,0))}function m(e,t){const r=function(e,t){return t=t||{},{singleLine:p(t),startFrom:h(e,t)}}(e,t);return f(e),function(e,t){const r=j(e);""===r[r.length-1].trim()&&r.pop();if(r.length>1||t.singleLine){let e="";for(let s=0,c=r.length;s<c;s++)e+=b('<tr><td class="{0} {1}" {3}="{5}"><div class="{2}" {3}="{5}"></div></td><td class="{0} {4}" {3}="{5}">{6}</td></tr>',[n,i,a,l,o,s+t.startFrom,r[s].length>0?r[s]:" "]);return b('<table class="{0}">{1}</table>',[s,e])}return e}(e.innerHTML,r)}function p(e){return!!e.singleLine&&e.singleLine}function h(e,t){let r=1;isFinite(t.startFrom)&&(r=t.startFrom);const s=function(e,t){return e.hasAttribute(t)?e.getAttribute(t):null}(e,"data-ln-start-from");return null!==s&&(r=function(e,t){if(!e)return t;const r=Number(e);return isFinite(r)?r:t}(s,1)),r}function f(e){const t=e.childNodes;for(const r in t)if(t.hasOwnProperty(r)){const e=t[r];(e.textContent.trim().match(c)||[]).length>0&&(e.childNodes.length>0?f(e):g(e.parentNode))}}function g(e){const{className:t}=e;if(!/hljs-/.test(t))return;const r=j(e.innerHTML);for(var s=0,n="";s<r.length;s++){n+=b('<span class="{0}">{1}</span>\n',[t,r[s].length>0?r[s]:" "])}e.innerHTML=n.trim()}function j(e){return 0===e.length?[]:e.split(c)}function b(e,t){return e.replace(/\{(\d+)\}/g,((e,r)=>void 0!==t[r]?t[r]:e))}e?(e.initLineNumbersOnLoad=function(e){"interactive"===r.readyState||"complete"===r.readyState?u(e):t.addEventListener("DOMContentLoaded",(()=>{u(e)}))},e.lineNumbersBlock=d,e.lineNumbersValue=function(e,t){if("string"!=typeof e)return;const r=document.createElement("code");return r.innerHTML=e,m(r,t)},function(){const e=r.createElement("style");e.type="text/css",e.innerHTML=b(".{0}{border-collapse:collapse}.{0} td{padding:0}.{1}:before{content:attr({2})}",[s,a,l]),r.getElementsByTagName("head")[0].appendChild(e)}()):t.console.error("highlight.js not detected!"),document.addEventListener("copy",(e=>{var t;const r=window.getSelection();if(function(e){let t=e;for(;t;){if(t.className&&-1!==t.className.indexOf("hljs-ln-code"))return!0;t=t.parentNode}return!1}(null==r?void 0:r.anchorNode)){let s;s=-1!==window.navigator.userAgent.indexOf("Edge")?function(e){const t=e.toString();let r=e.anchorNode;for(;"TD"!==r.nodeName;)r=r.parentNode;let s=e.focusNode;for(;"TD"!==s.nodeName;)s=s.parentNode;let n=parseInt(r.dataset.lineNumber),i=parseInt(s.dataset.lineNumber);if(n!==i){let e=r.textContent,a=s.textContent;if(n>i){let t=n;n=i,i=t,t=e,e=a,a=t}for(;0!==t.indexOf(e);)e=e.slice(1);for(;-1===t.lastIndexOf(a);)a=a.slice(0,-1);let c=e;const u=function(e){let t=e;for(;"TABLE"!==t.nodeName;)t=t.parentNode;return t}(r);for(let t=n+1;t<i;++t){const e=b('.{0}[{1}="{2}"]',[o,l,t]);c+=`\n${u.querySelector(e).textContent}`}return c+=`\n${a}`,c}return t}(r):null==r?void 0:r.toString(),null==(t=e.clipboardData)||t.setData("text/plain",s),e.preventDefault()}}))})(a,window,window.document),_(),L();const O=(e="id")=>`store${N(e)}`,A=v(),S=g(O("userAccount"),{state:()=>({userInfo:{},token:""}),actions:{setUserInfo(e){this.userInfo=e},setToken(e){this.token=e}},persist:{enabled:!0,strategies:[{key:O("userAccount"),storage:localStorage}]}}),k=g(O("common"),{state:()=>({isExpand:!1,breadcrumbList:[],isMobile:!1}),actions:{setExpandState(e){this.isExpand=e},setIsMobileState(e){this.isMobile=e},setBreadcrumbList(e){this.breadcrumbList.some((t=>t.fullPath===e.fullPath))||(this.breadcrumbList.length>10&&this.breadcrumbList.shift(),this.breadcrumbList.push(e))},deleteBreadcrumb(e){const t=[];return this.breadcrumbList.length-1===e&&e>=1?t.push(this.breadcrumbList[e-1]):(t.push(this.breadcrumbList[e-1]),t.push(this.breadcrumbList[e+1])),this.breadcrumbList.splice(e,1),t},deleteBreadCrumbAll(){this.breadcrumbList=[]}},persist:{enabled:!0,strategies:[{key:O("common"),storage:localStorage}]}});g(O("menu"),{state:()=>({menuList:[],breadCrumbList:[]}),actions:{setMenuList(e){this.menuList=e}},persist:{enabled:!0,strategies:[{key:O("menu"),storage:localStorage,paths:["menuList","breadCrumbList"]}]}});const I=j().use(b),C="TOKEN_KEY",P="USER_ACCOUNT_KEY",w=e=>T.set(C,e),D=()=>T.get(C),M=()=>T.remove(C),H=(e,t=3)=>T.set(P,e,{expires:t}),R=()=>T.get(P),V=()=>T.remove(P),q={},B=function(e,t,r){if(!t||0===t.length)return e();const s=document.getElementsByTagName("link");return Promise.all(t.map((e=>{if((e=function(e){return"/blog-page/"+e}(e))in q)return;q[e]=!0;const t=e.endsWith(".css"),n=t?'[rel="stylesheet"]':"";if(!!r)for(let r=s.length-1;r>=0;r--){const n=s[r];if(n.href===e&&(!t||"stylesheet"===n.rel))return}else if(document.querySelector(`link[href="${e}"]${n}`))return;const o=document.createElement("link");return o.rel=t?"stylesheet":"modulepreload",t||(o.as="script",o.crossOrigin=""),o.href=e,document.head.appendChild(o),t?new Promise(((t,r)=>{o.addEventListener("load",t),o.addEventListener("error",(()=>r(new Error(`Unable to preload CSS for ${e}`))))})):void 0}))).then((()=>e()))},z=[{path:"/",redirect:"/index",component:()=>B((()=>import("../js/layout/index.ec87b4af.js")),["js/layout/index.ec87b4af.js","js/element-plus/element-plus.86321995.js","js/lodash-es/lodash-es.9f1a9679.js","js/@vue/@vue.fe24ed5a.js","js/@vueuse/@vueuse.9c77a690.js","js/@element-plus/@element-plus.cddc8f8f.js","js/@popperjs/@popperjs.0e77d79c.js","js/@ctrl/@ctrl.91de2ec7.js","js/dayjs/dayjs.4d8034fa.js","js/@babel/@babel.9867481d.js","js/async-validator/async-validator.163d02db.js","js/memoize-one/memoize-one.63ab667a.js","js/escape-html/escape-html.1935ddb3.js","js/normalize-wheel-es/normalize-wheel-es.500438c6.js","js/@floating-ui/@floating-ui.945a406c.js","assets/element-plus-632e6772.css","js/index/index.13f9b4e3.js","js/index/index.ae57d152.js","js/axios/axios.a44b2fc3.js","js/_plugin-vue_export-helper/_plugin-vue_export-helper.1b428a4d.js","js/@kangc/@kangc.442f513e.js","js/@vuepress/@vuepress.68ab59a1.js","js/vue/vue.6569c03c.js","assets/@kangc-490fe6ac.css","js/@highlightjs/@highlightjs.fccd0474.js","js/highlight.js/highlight.js.ff00c245.js","assets/highlight-64f72b0b.css","js/pinia/pinia.9e201ab2.js","js/pinia-plugin-persist/pinia-plugin-persist.70d140bd.js","js/vue-router/vue-router.9473b667.js","js/@co/@co.fb4682a1.js","js/mitt/mitt.f0e54764.js","js/nprogress/nprogress.43b09d2e.js","assets/nprogress-8b89e2e0.css","js/js-cookie/js-cookie.d59fc71c.js","assets/index-776d5627.css"])},{path:"/login",name:"Login",component:()=>B((()=>import("../js/login/index.ac3f88b4.js")),["js/login/index.ac3f88b4.js","js/element-plus/element-plus.86321995.js","js/lodash-es/lodash-es.9f1a9679.js","js/@vue/@vue.fe24ed5a.js","js/@vueuse/@vueuse.9c77a690.js","js/@element-plus/@element-plus.cddc8f8f.js","js/@popperjs/@popperjs.0e77d79c.js","js/@ctrl/@ctrl.91de2ec7.js","js/dayjs/dayjs.4d8034fa.js","js/@babel/@babel.9867481d.js","js/async-validator/async-validator.163d02db.js","js/memoize-one/memoize-one.63ab667a.js","js/escape-html/escape-html.1935ddb3.js","js/normalize-wheel-es/normalize-wheel-es.500438c6.js","js/@floating-ui/@floating-ui.945a406c.js","assets/element-plus-632e6772.css","js/@co/@co.fb4682a1.js","js/live2d-widget/live2d-widget.6d859602.js","js/vue-router/vue-router.9473b667.js","js/index/index.13f9b4e3.js","js/index/index.ae57d152.js","js/axios/axios.a44b2fc3.js","js/index/index.3f2772c2.js","js/js-md5/js-md5.5ef53dae.js","js/_plugin-vue_export-helper/_plugin-vue_export-helper.1b428a4d.js","js/@kangc/@kangc.442f513e.js","js/@vuepress/@vuepress.68ab59a1.js","js/vue/vue.6569c03c.js","assets/@kangc-490fe6ac.css","js/@highlightjs/@highlightjs.fccd0474.js","js/highlight.js/highlight.js.ff00c245.js","assets/highlight-64f72b0b.css","js/pinia/pinia.9e201ab2.js","js/pinia-plugin-persist/pinia-plugin-persist.70d140bd.js","js/mitt/mitt.f0e54764.js","js/nprogress/nprogress.43b09d2e.js","assets/nprogress-8b89e2e0.css","js/js-cookie/js-cookie.d59fc71c.js","assets/index-f43eebff.css"]),children:[]},{path:"/register",name:"Register",component:()=>B((()=>import("../js/register/index.1206d17c.js")),["js/register/index.1206d17c.js","js/element-plus/element-plus.86321995.js","js/lodash-es/lodash-es.9f1a9679.js","js/@vue/@vue.fe24ed5a.js","js/@vueuse/@vueuse.9c77a690.js","js/@element-plus/@element-plus.cddc8f8f.js","js/@popperjs/@popperjs.0e77d79c.js","js/@ctrl/@ctrl.91de2ec7.js","js/dayjs/dayjs.4d8034fa.js","js/@babel/@babel.9867481d.js","js/async-validator/async-validator.163d02db.js","js/memoize-one/memoize-one.63ab667a.js","js/escape-html/escape-html.1935ddb3.js","js/normalize-wheel-es/normalize-wheel-es.500438c6.js","js/@floating-ui/@floating-ui.945a406c.js","assets/element-plus-632e6772.css","js/@co/@co.fb4682a1.js","js/vue-router/vue-router.9473b667.js","js/index/index.13f9b4e3.js","js/index/index.ae57d152.js","js/axios/axios.a44b2fc3.js","js/index/index.3f2772c2.js","js/js-md5/js-md5.5ef53dae.js","js/_plugin-vue_export-helper/_plugin-vue_export-helper.1b428a4d.js","js/@kangc/@kangc.442f513e.js","js/@vuepress/@vuepress.68ab59a1.js","js/vue/vue.6569c03c.js","assets/@kangc-490fe6ac.css","js/@highlightjs/@highlightjs.fccd0474.js","js/highlight.js/highlight.js.ff00c245.js","assets/highlight-64f72b0b.css","js/pinia/pinia.9e201ab2.js","js/pinia-plugin-persist/pinia-plugin-persist.70d140bd.js","js/mitt/mitt.f0e54764.js","js/nprogress/nprogress.43b09d2e.js","assets/nprogress-8b89e2e0.css","js/js-cookie/js-cookie.d59fc71c.js","assets/index-326eea17.css"]),children:[]},{path:"/404",name:"NotFound",component:()=>B((()=>import("../js/error-page/error-404.1f9cfa9a.js")),["js/error-page/error-404.1f9cfa9a.js","js/element-plus/element-plus.86321995.js","js/lodash-es/lodash-es.9f1a9679.js","js/@vue/@vue.fe24ed5a.js","js/@vueuse/@vueuse.9c77a690.js","js/@element-plus/@element-plus.cddc8f8f.js","js/@popperjs/@popperjs.0e77d79c.js","js/@ctrl/@ctrl.91de2ec7.js","js/dayjs/dayjs.4d8034fa.js","js/@babel/@babel.9867481d.js","js/async-validator/async-validator.163d02db.js","js/memoize-one/memoize-one.63ab667a.js","js/escape-html/escape-html.1935ddb3.js","js/normalize-wheel-es/normalize-wheel-es.500438c6.js","js/@floating-ui/@floating-ui.945a406c.js","assets/element-plus-632e6772.css","js/vue-router/vue-router.9473b667.js","js/_plugin-vue_export-helper/_plugin-vue_export-helper.1b428a4d.js","assets/error-404-0c2bf8df.css"]),meta:{title:"404"},children:[]},{path:"/403",name:"NotPermission",component:()=>B((()=>import("../js/error-page/error-403.632b0619.js")),["js/error-page/error-403.632b0619.js","js/element-plus/element-plus.86321995.js","js/lodash-es/lodash-es.9f1a9679.js","js/@vue/@vue.fe24ed5a.js","js/@vueuse/@vueuse.9c77a690.js","js/@element-plus/@element-plus.cddc8f8f.js","js/@popperjs/@popperjs.0e77d79c.js","js/@ctrl/@ctrl.91de2ec7.js","js/dayjs/dayjs.4d8034fa.js","js/@babel/@babel.9867481d.js","js/async-validator/async-validator.163d02db.js","js/memoize-one/memoize-one.63ab667a.js","js/escape-html/escape-html.1935ddb3.js","js/normalize-wheel-es/normalize-wheel-es.500438c6.js","js/@floating-ui/@floating-ui.945a406c.js","assets/element-plus-632e6772.css","js/vue-router/vue-router.9473b667.js","js/_plugin-vue_export-helper/_plugin-vue_export-helper.1b428a4d.js","assets/error-403-ffdca381.css"]),meta:{title:"403"},children:[]},{path:"/:pathMatch(.*)*",redirect:"/404",children:[]}],F=[{path:"/",redirect:"/index",component:()=>B((()=>import("../js/layout/index.ec87b4af.js")),["js/layout/index.ec87b4af.js","js/element-plus/element-plus.86321995.js","js/lodash-es/lodash-es.9f1a9679.js","js/@vue/@vue.fe24ed5a.js","js/@vueuse/@vueuse.9c77a690.js","js/@element-plus/@element-plus.cddc8f8f.js","js/@popperjs/@popperjs.0e77d79c.js","js/@ctrl/@ctrl.91de2ec7.js","js/dayjs/dayjs.4d8034fa.js","js/@babel/@babel.9867481d.js","js/async-validator/async-validator.163d02db.js","js/memoize-one/memoize-one.63ab667a.js","js/escape-html/escape-html.1935ddb3.js","js/normalize-wheel-es/normalize-wheel-es.500438c6.js","js/@floating-ui/@floating-ui.945a406c.js","assets/element-plus-632e6772.css","js/index/index.13f9b4e3.js","js/index/index.ae57d152.js","js/axios/axios.a44b2fc3.js","js/_plugin-vue_export-helper/_plugin-vue_export-helper.1b428a4d.js","js/@kangc/@kangc.442f513e.js","js/@vuepress/@vuepress.68ab59a1.js","js/vue/vue.6569c03c.js","assets/@kangc-490fe6ac.css","js/@highlightjs/@highlightjs.fccd0474.js","js/highlight.js/highlight.js.ff00c245.js","assets/highlight-64f72b0b.css","js/pinia/pinia.9e201ab2.js","js/pinia-plugin-persist/pinia-plugin-persist.70d140bd.js","js/vue-router/vue-router.9473b667.js","js/@co/@co.fb4682a1.js","js/mitt/mitt.f0e54764.js","js/nprogress/nprogress.43b09d2e.js","assets/nprogress-8b89e2e0.css","js/js-cookie/js-cookie.d59fc71c.js","assets/index-776d5627.css"]),children:[{path:"/index",component:()=>B((()=>import("../js/blog/index.c75de5c8.js")),["js/blog/index.c75de5c8.js","js/element-plus/element-plus.86321995.js","js/lodash-es/lodash-es.9f1a9679.js","js/@vue/@vue.fe24ed5a.js","js/@vueuse/@vueuse.9c77a690.js","js/@element-plus/@element-plus.cddc8f8f.js","js/@popperjs/@popperjs.0e77d79c.js","js/@ctrl/@ctrl.91de2ec7.js","js/dayjs/dayjs.4d8034fa.js","js/@babel/@babel.9867481d.js","js/async-validator/async-validator.163d02db.js","js/memoize-one/memoize-one.63ab667a.js","js/escape-html/escape-html.1935ddb3.js","js/normalize-wheel-es/normalize-wheel-es.500438c6.js","js/@floating-ui/@floating-ui.945a406c.js","assets/element-plus-632e6772.css","js/@co/@co.fb4682a1.js","js/vue-router/vue-router.9473b667.js","js/index/index.c88b4596.js","js/_plugin-vue_export-helper/_plugin-vue_export-helper.1b428a4d.js","js/axios/axios.a44b2fc3.js","js/index/index.ae57d152.js","assets/index-762d7808.css","js/index/index.13f9b4e3.js","js/ali-oss/ali-oss.f91f6910.js","js/@kangc/@kangc.442f513e.js","js/@vuepress/@vuepress.68ab59a1.js","js/vue/vue.6569c03c.js","assets/@kangc-490fe6ac.css","js/@highlightjs/@highlightjs.fccd0474.js","js/highlight.js/highlight.js.ff00c245.js","assets/highlight-64f72b0b.css","js/pinia/pinia.9e201ab2.js","js/pinia-plugin-persist/pinia-plugin-persist.70d140bd.js","js/mitt/mitt.f0e54764.js","js/nprogress/nprogress.43b09d2e.js","assets/nprogress-8b89e2e0.css","js/js-cookie/js-cookie.d59fc71c.js","assets/index-30936638.css"]),meta:{title:"首页",requiresAuth:!0}},{path:"/blog/detail/:id?",name:"BlogDetail",component:()=>B((()=>import("../js/detail/index.31fa482f.js")),["js/detail/index.31fa482f.js","js/highlight.js/highlight.js.ff00c245.js","assets/highlight-64f72b0b.css","js/marked/marked.19a35d50.js","js/vue-router/vue-router.9473b667.js","js/@vue/@vue.fe24ed5a.js","js/vue3-preview-image/vue3-preview-image.dce68680.js","js/vue/vue.6569c03c.js","js/@babel/@babel.9867481d.js","js/index/index.c88b4596.js","js/element-plus/element-plus.86321995.js","js/lodash-es/lodash-es.9f1a9679.js","js/@vueuse/@vueuse.9c77a690.js","js/@element-plus/@element-plus.cddc8f8f.js","js/@popperjs/@popperjs.0e77d79c.js","js/@ctrl/@ctrl.91de2ec7.js","js/dayjs/dayjs.4d8034fa.js","js/async-validator/async-validator.163d02db.js","js/memoize-one/memoize-one.63ab667a.js","js/escape-html/escape-html.1935ddb3.js","js/normalize-wheel-es/normalize-wheel-es.500438c6.js","js/@floating-ui/@floating-ui.945a406c.js","assets/element-plus-632e6772.css","js/_plugin-vue_export-helper/_plugin-vue_export-helper.1b428a4d.js","js/axios/axios.a44b2fc3.js","js/index/index.ae57d152.js","assets/index-762d7808.css","js/@kangc/@kangc.442f513e.js","js/@vuepress/@vuepress.68ab59a1.js","assets/@kangc-490fe6ac.css","js/@highlightjs/@highlightjs.fccd0474.js","js/pinia/pinia.9e201ab2.js","js/pinia-plugin-persist/pinia-plugin-persist.70d140bd.js","js/@co/@co.fb4682a1.js","js/mitt/mitt.f0e54764.js","js/nprogress/nprogress.43b09d2e.js","assets/nprogress-8b89e2e0.css","js/js-cookie/js-cookie.d59fc71c.js","assets/index-6ae153cd.css"]),meta:{title:"测试"}},{path:"/bb",component:()=>B((()=>import("../js/components/HelloWorld.373f6fc7.js")),["js/components/HelloWorld.373f6fc7.js","js/@vue/@vue.fe24ed5a.js","js/_plugin-vue_export-helper/_plugin-vue_export-helper.1b428a4d.js","assets/HelloWorld-1fb5b0a2.css"]),meta:{title:"测试bb"}}]}],$=Object.freeze(Object.defineProperty({__proto__:null,default:F},Symbol.toStringTag,{value:"Module"})),K=Object.assign({"/src/modules/router.ts":$});let U=[];Object.keys(K).forEach((e=>{K[e]&&K[e].default&&(U=U.concat(K[e].default))}));const W=[...z,...U],Y=E({history:y(),routes:W});Y.beforeEach(((e,t,r)=>{x.start(),e.matched.some((e=>e.meta.requiresAuth))?D()?r():r({path:"/login"}):r()})),Y.afterEach((()=>{x.done()}));const G=f(l({__name:"App",setup:e=>(e,t)=>{const r=m("router-view"),o=s;return p(),c(o,{locale:d(n)},{default:u((()=>[h(r)])),_:1},8,["locale"])}}));e.use(t,{Hljs:a}),e.use(r()),G.use(Y).use((function(e){e.directive("lineNumber",{updated(e){e.querySelectorAll("pre code").forEach((e=>{const t=document.createElement("ol"),r=e.outerHTML.split("\n").length;if(e.parentNode.querySelectorAll("pre ol").length<1){for(let e=1;e<r;e++){const r=document.createElement("li"),s=document.createTextNode(`${e}`);r.appendChild(s),t.appendChild(r)}t.className="pre-numbering",e.parentNode.appendChild(t),a.highlightBlock(e)}}))}})})).use(o,{size:"small",zIndex:3e3}).use(I).use(e).use(i).mount("#app");export{A as $,k as a,R as b,H as c,V as d,D as g,M as r,w as s,S as u};