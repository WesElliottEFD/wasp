"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[6055],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),h=s,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||i;return n?a.createElement(m,r(r({ref:t},p),{},{components:n})):a.createElement(m,r({ref:t},p))}));function h(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=n.length,r=new Array(i);r[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:s,r[1]=o;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},92908:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294),s=n(39960);n(44996);const i=()=>a.createElement("span",{className:"in-blog-cta--divider"}," \u2192 "),r=()=>a.createElement("p",{className:"in-blog-cta-link-container"},a.createElement(s.Z,{className:"in-blog-cta--link",to:"https://e44cy1h4s0q.typeform.com/to/ycUzQa5A"},"We are in Beta (try it out)!"),a.createElement(i,null),a.createElement(s.Z,{className:"in-blog-cta--link",to:"https://discord.gg/rzdnErX"},"Join our community"),a.createElement(i,null),a.createElement(s.Z,{className:"in-blog-cta--link",to:"https://wasp-lang.notion.site/Founding-Engineer-at-Wasp-402274568afa4d7eb7f428f8fa2c0816"},"Work with us"))},36709:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(87462),s=(n(67294),n(3905)),i=n(92908);const r={title:"Building an app to find an excuse for our sloppy work",authors:["maksym36ua"],tags:["wasp"]},o=void 0,l={permalink:"/blog/2022/09/05/dev-excuses-app-tutrial",editUrl:"https://github.com/wasp-lang/wasp/edit/main/web/blog/blog/2022-09-05-dev-excuses-app-tutrial.md",source:"@site/blog/2022-09-05-dev-excuses-app-tutrial.md",title:"Building an app to find an excuse for our sloppy work",description:"We\u2019ll build a web app to solve every developer's most common problem \u2013 finding an excuse to justify our messy work! And will do it with a single config file that covers the full-stack app architecture plus several dozen lines of code. In the quickest possible way, so we can\u2019t excuse ourselves from building it!",date:"2022-09-05T00:00:00.000Z",formattedDate:"September 5, 2022",tags:[{label:"wasp",permalink:"/blog/tags/wasp"}],readingTime:7.445,hasTruncateMarker:!0,authors:[{name:"Maksym Khamrovskyi",title:"DevRel @ Wasp",key:"maksym36ua"}],frontMatter:{title:"Building an app to find an excuse for our sloppy work",authors:["maksym36ua"],tags:["wasp"]},prevItem:{title:"How Wasp reached 1,000 stars on GitHub (detailed stats & timeline)",permalink:"/blog/2022/09/29/journey-to-1000-gh-stars"},nextItem:{title:"How to get started with Haskell in 2022 (the straightforward way)",permalink:"/blog/2022/09/02/how-to-get-started-with-haskell-in-2022"}},c={authorsImageUrls:[void 0]},p=[{value:"The requirements were unclear.",id:"the-requirements-were-unclear",level:2},{value:"There\u2019s an issue with the third party library.",id:"theres-an-issue-with-the-third-party-library",level:2},{value:"Maybe something&#39;s wrong with the environment.",id:"maybe-somethings-wrong-with-the-environment",level:2},{value:"That worked perfectly when I developed it.",id:"that-worked-perfectly-when-i-developed-it",level:2},{value:"It would have taken twice as long to build it properly.",id:"it-would-have-taken-twice-as-long-to-build-it-properly",level:2}],u={toc:p};function d(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"We\u2019ll build a web app to solve every developer's most common problem \u2013 finding an excuse to justify our messy work! And will do it with a single config file that covers the full-stack app architecture plus several dozen lines of code. In the quickest possible way, so we can\u2019t excuse ourselves from building it!"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Best excuse of all time",src:n(41209).Z,width:"413",height:"360"})),(0,s.kt)("p",null,"Best excuse of all time! ",(0,s.kt)("a",{parentName:"p",href:"https://xkcd.com/303/"},"Taken from here.")),(0,s.kt)("h2",{id:"the-requirements-were-unclear"},"The requirements were unclear."),(0,s.kt)("p",null,"We\u2019ll use Michele Gerarduzzi\u2019s ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/michelegera/devexcuses-api"},"open-source project"),". It provides a simple API and a solid number of predefined excuses. A perfect fit for our needs. Let\u2019s define the requirements for the project: "),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"The app should be able to pull excuses data from a public API. "),(0,s.kt)("li",{parentName:"ul"},"Save the ones you liked (and your boss doesn't) to the database for future reference."),(0,s.kt)("li",{parentName:"ul"},"Building an app shouldn\u2019t take more than 15 minutes."),(0,s.kt)("li",{parentName:"ul"},"Use modern web dev technologies (NodeJS + React)")),(0,s.kt)("p",null,"As a result \u2013 we\u2019ll get a simple and fun pet project. You can find the complete codebase ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/wasp-lang/wasp/tree/release/examples/tutorials/ItWaspsOnMyMachine"},"here"),". "),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Final result",src:n(61045).Z,width:"996",height:"568"})),(0,s.kt)("h2",{id:"theres-an-issue-with-the-third-party-library"},"There\u2019s an issue with the third party library."),(0,s.kt)("p",null,"Setting up a backbone for the project is the most frustrating part of building any application. "),(0,s.kt)("p",null,"We are installing dependencies, tying up the back-end and front-end, setting up a database, managing connection strings, and so on. Avoiding this part will save us a ton of time and effort. So let\u2019s find ourselves an excuse to skip the initial project setup."),(0,s.kt)("p",null,"Ideally \u2013 use a framework that will create a project infrastructure quickly with the best defaults so that we\u2019ll focus on the business logic. A perfect candidate is ",(0,s.kt)("a",{parentName:"p",href:"https://wasp-lang.dev/"},"Wasp"),". It\u2019s an open-source, declarative DSL for building web apps in React and Node.js with no boilerplate"),(0,s.kt)("p",null,"How it works: developer starts from a single config file that specifies the app architecture. Routes, CRUD API, auth, and so on. Then adds React/Node.js code for the specific business logic. Behind the scenes, Wasp compiler will produce the entire source code of the app - back-end, front-end, deployment template, database migrations and everything else you\u2019ve used to have in any other full-stack app. "),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Wasp architecture",src:n(43454).Z,width:"1525",height:"696"})),(0,s.kt)("p",null,"So let\u2019s jump right in."),(0,s.kt)("h2",{id:"maybe-somethings-wrong-with-the-environment"},"Maybe something's wrong with the environment."),(0,s.kt)("p",null,"Wasp intentionally works with the LTS Node.js version since it guarantees stability and active maintenance. As for now, it\u2019s Node 16 and NPM 8. If you need another Node version for some other project \u2013 there\u2019s a possibility to ",(0,s.kt)("a",{parentName:"p",href:"https://wasp-lang.dev/docs#1-requirements"},"use NVM")," to manage multiple Node versions on your computer at the same time."),(0,s.kt)("p",null,"Installing Wasp on Linux (for Mac/Windows, please ",(0,s.kt)("a",{parentName:"p",href:"https://wasp-lang.dev/docs#2-installation"},"check the docs"),"):"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"curl -sSL https://get.wasp-lang.dev/installer.sh | sh\n")),(0,s.kt)("p",null,"Now let\u2019s create a new web app named ItWaspsOnMyMachine."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"wasp new ItWaspsOnMyMachine\n")),(0,s.kt)("p",null,"Changing the working directory:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"cd ItWaspsOnMyMachine\n")),(0,s.kt)("p",null,"Starting the app:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"wasp start\n")),(0,s.kt)("p",null,"Now your default browser should open up with a simple predefined text message. That\u2019s it! \ud83e\udd73 We\u2019ve built and run a NodeJS + React application. And for now \u2013 the codebase consists of only two files! ",(0,s.kt)("inlineCode",{parentName:"p"},"main.wasp")," is the config file that defines the application\u2019s functionality. And ",(0,s.kt)("inlineCode",{parentName:"p"},"MainPage.js")," is the front-end."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Initial page",src:n(63559).Z,width:"1891",height:"1043"})),(0,s.kt)("h2",{id:"that-worked-perfectly-when-i-developed-it"},"That worked perfectly when I developed it."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"1) Let\u2019s add some additional configuration to our ",(0,s.kt)("inlineCode",{parentName:"strong"},"main.wasp")," file. So it will look like this:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="main.wasp | Defining Excuse entity, queries and action"',title:'"main.wasp',"|":!0,Defining:!0,Excuse:!0,"entity,":!0,queries:!0,and:!0,'action"':!0},'\n// Main declaration, defines a new web app.\napp ItWaspsOnMyMachine {\n  // Wasp compiler configuration\n  wasp: {\n    version: "^0.6.0"\n  },\n\n  // Used as a browser tab title.                                  \n  title: "It Wasps On My Machine",\n\n  head: [\n    // Adding Tailwind to make our UI prettier\n    "<script src=\'https://cdn.tailwindcss.com\'><\/script>"\n  ],\n\n  dependencies: [ \n    // Adding Axios for making HTTP requests                                          \n    ("axios", "^0.21.1")\n  ]\n}\n\n// Render page MainPage on url `/` (default url).\nroute RootRoute { path: "/", to: MainPage }                 \n\n// ReactJS implementation of our page located in `src/client/MainPage.js` as a default export.\npage MainPage {                                             \n  component: import Main from "@client/MainPage.js"\n}\n\n// Prisma database entity\nentity Excuse {=psl                                          \n    id          Int     @id @default(autoincrement())\n    text        String\npsl=}\n\n// Query declaration to get a new excuse\nquery getExcuse {                                           \n  fn: import { getExcuse } from "@server/queries.js",\n  entities: [Excuse]\n}\n\n// Query declaration to get all excuses\nquery getAllSavedExcuses {                                  \n  fn: import { getAllSavedExcuses } from "@server/queries.js",\n  entities: [Excuse]\n}\n\n// Action to save current excuse\naction saveExcuse {                                         \n  fn: import { saveExcuse } from "@server/actions.js",\n  entities: [Excuse]\n}\n')),(0,s.kt)("p",null,"We\u2019ve added Tailwind to make our UI more pretty and Axios for making API requests. "),(0,s.kt)("p",null,"Also, we\u2019ve declared a database entity called ",(0,s.kt)("inlineCode",{parentName:"p"},"Excuse"),", queries, and action. The ",(0,s.kt)("inlineCode",{parentName:"p"},"Excuse")," entity consists of the entity\u2019s ID and the text. "),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Queries")," are here when we need to fetch/read something, while ",(0,s.kt)("inlineCode",{parentName:"p"},"actions")," are here when we need to change/update data. Both query and action declaration consists of two lines \u2013 a reference to the file that contains implementation and a data model to operate on. You can find more info ",(0,s.kt)("a",{parentName:"p",href:"https://wasp-lang.dev/docs/tutorials/todo-app/listing-tasks#introducing-operations-queries-and-actions"},"in the docs"),". So let\u2019s proceed with queries/actions. "),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"2) Create two files: \u201cactions.js\u201d and \u201cqueries.js\u201d in the ",(0,s.kt)("inlineCode",{parentName:"strong"},"src/server")," folder.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/server/actions.js | Defining an action"',title:'"src/server/actions.js',"|":!0,Defining:!0,an:!0,'action"':!0},"export const saveExcuse = async (excuse, context) => {\n  return context.entities.Excuse.create({\n    data: { text: excuse.text }\n  })\n}\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/server/queries.js | Defining queries"',title:'"src/server/queries.js',"|":!0,Defining:!0,'queries"':!0},"import axios from 'axios';\n\nexport const getExcuse = async () => {\n  const response = await axios.get('https://api.devexcus.es/')\n  return response.data\n}\n\nexport const getAllSavedExcuses = async (_args, context) => {\n  return context.entities.Excuse.findMany()\n}\n")),(0,s.kt)("p",null,"Let\u2019s add ",(0,s.kt)("inlineCode",{parentName:"p"},"saveExcuse()")," action to our ",(0,s.kt)("inlineCode",{parentName:"p"},"actions.js")," file. This action will save the text of our excuse to the database. Then let\u2019s create two queries in the ",(0,s.kt)("inlineCode",{parentName:"p"},"queries.js")," file. First, one ",(0,s.kt)("inlineCode",{parentName:"p"},"getExcuse")," will call an external API and fetch a new excuse. The second one, named ",(0,s.kt)("inlineCode",{parentName:"p"},"getAllSavedExcuses"),", will pull all the excuses we\u2019ve saved to our database. "),(0,s.kt)("p",null,"That\u2019s it! We finished our back-end. \ud83c\udf89 Now, let\u2019s use those queries/actions on our UI."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"3) Let\u2019s erase everything we had in the ",(0,s.kt)("inlineCode",{parentName:"strong"},"MainPage.js")," file and substitute it with our new UI.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/client/MainPage.js | Updating the UI"',title:'"src/client/MainPage.js',"|":!0,Updating:!0,the:!0,'UI"':!0},"import React, { useState } from 'react'\nimport { useQuery } from '@wasp/queries'\nimport getExcuse from '@wasp/queries/getExcuse'\nimport getAllSavedExcuses from '@wasp/queries/getAllSavedExcuses'\nimport saveExcuse from '@wasp/actions/saveExcuse'\n\nconst MainPage = () => {\n  const [currentExcuse, setCurrentExcuse] = useState({ text: \"\" })\n  const { data: excuses } = useQuery(getAllSavedExcuses)\n\n  const handleGetExcuse = async () => {\n    try {\n      setCurrentExcuse(await getExcuse())\n    } catch (err) {\n      window.alert('Error while getting the excuse: ' + err.message)\n    }\n  }\n\n  const handleSaveExcuse = async () => {\n    if (currentExcuse.text) {\n      try {\n        await saveExcuse(currentExcuse)\n      } catch (err) {\n        window.alert('Error while saving the excuse: ' + err.message)\n      }\n    }\n  }\n\n  return (\n    <div className=\"grid grid-cols-2 text-3xl\">\n      <div>\n          <button onClick={handleGetExcuse} className=\"mx-2 my-1 p-2 bg-blue-600 hover:bg-blue-400 text-white rounded\"> Get excuse </button>\n          <button onClick={handleSaveExcuse} className=\"mx-2 my-1 p-2 bg-blue-600 hover:bg-blue-400 text-white rounded\"> Save excuse </button>\n        <Excuse excuse={currentExcuse} />\n      </div>\n      <div>\n        <div className=\"px-6 py-2 bg-blue-600 text-white\"> Saved excuses: </div>\n        {excuses && <ExcuseList excuses={excuses} />}\n      </div>\n    </div>\n  )\n}\n\nconst ExcuseList = (props) => { \n  return props.excuses?.length ?  props.excuses.map((excuse, idx) => <Excuse excuse={excuse} key={idx} />) : 'No saved excuses'\n}\n\nconst Excuse = ({ excuse }) => {\n  return (\n    <div className=\"px-6 py-2\">\n      {excuse.text}\n    </div>\n  )\n}\n\nexport default MainPage\n")),(0,s.kt)("p",null,"Our page consists of three components. ",(0,s.kt)("inlineCode",{parentName:"p"},"MainPage"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"ExcuseList")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"Excuse"),". It may seem at first that this file is pretty complex. It\u2019s not, so let\u2019s look a bit closer. "),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Excuse")," is just a div with an excuse text, ",(0,s.kt)("inlineCode",{parentName:"p"},"ExcuseList")," checks if there are any excuses. If the list is empty \u2013 show a message ",(0,s.kt)("inlineCode",{parentName:"p"},"No saved excuses"),". In other case \u2013 excuses will be displayed. "),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"MainPage")," contains info about the current excuses and the list of already saved excuses. Two buttons click handlers ",(0,s.kt)("inlineCode",{parentName:"p"},"handleGetExcuse")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"handleSaveExcuse"),". Plus, the markup itself with some Tailwind flavor. "),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"4) Before starting an app \u2013 we need to execute database migration because we changed the DB schema by adding new entities. If you\u2019ve had something running in the terminal \u2013 stop it and run:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"wasp db migrate-dev\n")),(0,s.kt)("p",null,"You\u2019ll be prompted to enter a name for the migration. Something like ",(0,s.kt)("inlineCode",{parentName:"p"},"init")," will be ok. Now we can start the application!"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"wasp start\n")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Final empty result",src:n(42181).Z,width:"996",height:"568"})),(0,s.kt)("p",null,"Now you can click the \u201cGet excuse\u201d button to receive an excuse. And save the ones you like into the DB with the \u201cSave excuse\u201d button. Our final project should look like this:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Final result",src:n(61045).Z,width:"996",height:"568"})),(0,s.kt)("h2",{id:"it-would-have-taken-twice-as-long-to-build-it-properly"},"It would have taken twice as long to build it properly."),(0,s.kt)("p",null,"Now we can think of some additional improvements. For example:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"1) Add a unique constraint to Entity\u2019s ID so we won\u2019t be able to save duplicated excuses. "),(0,s.kt)("li",{parentName:"ul"},"2) Add exceptions and edge cases handling. "),(0,s.kt)("li",{parentName:"ul"},"3) Make the markup prettier."),(0,s.kt)("li",{parentName:"ul"},"4) Optimize and polish the code ")),(0,s.kt)("p",null,"So, we\u2019ve been able to build a full-stack application with a database and external API call in a couple of minutes. And now we have a box full of excuses for all our development needs. "),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Box of excuses for the win!",src:n(98848).Z,width:"717",height:"554"})),(0,s.kt)(i.Z,{mdxType:"InBlogCta"}))}d.isMDXComponent=!0},98848:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/accessible-website-excuse-8ec8ef48df4347b8bfda47d4f5598c1b.jpg"},41209:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/compiling-f5efe2c14d949890ce85c23d36e10bd2.png"},61045:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/final-excuse-app-0c228a553be0865e245d5e421f86ea27.png"},42181:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/final-result-96b2236068263477dad9a4268828e539.png"},63559:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/init-page-d4e0be9843a1b8dcf496a2ec6ff01565.png"},43454:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/wasp-compilation-6585aca9de412cf27332aa8f21e7da4d.png"}}]);