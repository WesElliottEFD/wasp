"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[6692],{85162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(86010);const i={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,o),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(87462),r=n(67294),i=n(86010),o=n(12466),s=n(16550),l=n(91980),u=n(67392),c=n(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function v(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=d(e),[o,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[l,u]=v({queryString:n,groupId:a}),[p,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),g=(()=>{const e=l??p;return m({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{g&&s(g)}),[g]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),f(e)}),[u,f,i]),tabValues:i}}var g=n(72389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:n,selectedValue:s,selectValue:l,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==s&&(p(t),l(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},o,{className:(0,i.Z)("tabs__item",h.tabItem,o?.className,{"tabs__item--active":s===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:a}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=f(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",h.tabList)},r.createElement(b,(0,a.Z)({},e,t)),r.createElement(k,(0,a.Z)({},e,t)))}function N(e){const t=(0,g.Z)();return r.createElement(y,(0,a.Z)({key:String(t)},e))}},48863:(e,t,n)=>{n.d(t,{A:()=>o,v:()=>s});var a=n(67294),r=n(50012),i=n(49875);function o(e){let{children:t}=e;const[n]=(0,r.Nk)("docusaurus.tab.js-ts");return"ts"===n&&a.createElement(i.Z,null,t)}function s(e){let{children:t}=e;const[n]=(0,r.Nk)("docusaurus.tab.js-ts");return"js"===n&&a.createElement(i.Z,null,t)}},27582:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>v,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var a=n(87462),r=(n(67294),n(3905)),i=n(85162),o=n(74866);n(48863);const s={title:"Custom Vite Config"},l=void 0,u={unversionedId:"project/custom-vite-config",id:"version-0.11.8/project/custom-vite-config",title:"Custom Vite Config",description:"Wasp uses Vite for serving the client during development and bundling it for production. If you want to customize the Vite config, you can do that by editing the vite.config.ts file in your src/client directory.",source:"@site/versioned_docs/version-0.11.8/project/custom-vite-config.md",sourceDirName:"project",slug:"/project/custom-vite-config",permalink:"/docs/project/custom-vite-config",draft:!1,editUrl:"https://github.com/wasp-lang/wasp/edit/release/web/versioned_docs/version-0.11.8/project/custom-vite-config.md",tags:[],version:"0.11.8",frontMatter:{title:"Custom Vite Config"},sidebar:"docs",previous:{title:"CSS Frameworks",permalink:"/docs/project/css-frameworks"},next:{title:"Overview",permalink:"/docs/advanced/deployment/overview"}},c={},p=[{value:"Examples",id:"examples",level:2},{value:"Changing the Dev Server Behaviour",id:"changing-the-dev-server-behaviour",level:3},{value:"Custom Dev Server Port",id:"custom-dev-server-port",level:3},{value:"Customising the Base Path",id:"customising-the-base-path",level:3}],d={toc:p},m="wrapper";function v(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Wasp uses ",(0,r.kt)("a",{parentName:"p",href:"https://vitejs.dev/"},"Vite")," for serving the client during development and bundling it for production. If you want to customize the Vite config, you can do that by editing the ",(0,r.kt)("inlineCode",{parentName:"p"},"vite.config.ts")," file in your ",(0,r.kt)("inlineCode",{parentName:"p"},"src/client")," directory."),(0,r.kt)("p",null,"Wasp will use your config and ",(0,r.kt)("strong",{parentName:"p"},"merge")," it with the default Wasp's Vite config."),(0,r.kt)("p",null,"Vite config customization can be useful for things like:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Adding custom Vite plugins."),(0,r.kt)("li",{parentName:"ul"},"Customising the dev server."),(0,r.kt)("li",{parentName:"ul"},"Customising the build process.")),(0,r.kt)("p",null,"Be careful with making changes to the Vite config, as it can break the Wasp's client build process. Check out the default Vite config ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wasp-lang/wasp/blob/main/waspc/data/Generator/templates/react-app/vite.config.ts"},"here")," to see what you can change."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Below are some examples of how you can customize the Vite config."),(0,r.kt)("h3",{id:"changing-the-dev-server-behaviour"},"Changing the Dev Server Behaviour"),(0,r.kt)("p",null,"If you want to stop Vite from opening the browser automatically when you run ",(0,r.kt)("inlineCode",{parentName:"p"},"wasp start"),", you can do that by customizing the ",(0,r.kt)("inlineCode",{parentName:"p"},"open")," option."),(0,r.kt)(o.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/client/vite.config.js"',title:'"src/client/vite.config.js"'},"export default {\n  server: {\n    open: false,\n  },\n}\n"))),(0,r.kt)(i.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/client/vite.config.ts"',title:'"src/client/vite.config.ts"'},"import { defineConfig } from 'vite'\n\nexport default defineConfig({\n  server: {\n    open: false,\n  },\n})\n")))),(0,r.kt)("h3",{id:"custom-dev-server-port"},"Custom Dev Server Port"),(0,r.kt)("p",null,"You have access to all of the ",(0,r.kt)("a",{parentName:"p",href:"https://vitejs.dev/config/server-options.html"},"Vite dev server options")," in your custom Vite config. You can change the dev server port by setting the ",(0,r.kt)("inlineCode",{parentName:"p"},"port")," option."),(0,r.kt)(o.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/client/vite.config.js"',title:'"src/client/vite.config.js"'},"export default {\n  server: {\n    port: 4000,\n  },\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-env",metastring:'title=".env.server"',title:'".env.server"'},"WASP_WEB_CLIENT_URL=http://localhost:4000\n"))),(0,r.kt)(i.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/client/vite.config.ts"',title:'"src/client/vite.config.ts"'},"import { defineConfig } from 'vite'\n\nexport default defineConfig({\n  server: {\n    port: 4000,\n  },\n})\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-env",metastring:'title=".env.server"',title:'".env.server"'},"WASP_WEB_CLIENT_URL=http://localhost:4000\n")))),(0,r.kt)("admonition",{title:"Changing the dev server port",type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"\u26a0\ufe0f Be careful when changing the dev server port, you'll need to update the ",(0,r.kt)("inlineCode",{parentName:"p"},"WASP_WEB_CLIENT_URL")," env var in your ",(0,r.kt)("inlineCode",{parentName:"p"},".env.server")," file.")),(0,r.kt)("h3",{id:"customising-the-base-path"},"Customising the Base Path"),(0,r.kt)("p",null,"If you, for example, want to serve the client from a different path than ",(0,r.kt)("inlineCode",{parentName:"p"},"/"),", you can do that by customizing the ",(0,r.kt)("inlineCode",{parentName:"p"},"base")," option."),(0,r.kt)(o.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/client/vite.config.js"',title:'"src/client/vite.config.js"'},"export default {\n  base: '/my-app/',\n}\n"))),(0,r.kt)(i.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/client/vite.config.ts"',title:'"src/client/vite.config.ts"'},"import { defineConfig } from 'vite'\n\nexport default defineConfig({\n  base: '/my-app/',\n})\n")))))}v.isMDXComponent=!0}}]);